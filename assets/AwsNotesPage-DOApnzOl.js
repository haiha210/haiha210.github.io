import{_ as n}from"./NotesPage.vue_vue_type_script_setup_true_lang-6QZm23U1.js";import{d as t,e as i,b as h,o as e}from"./index-DGRydiu_.js";import"./ThemeToggle.vue_vue_type_script_setup_true_lang-B57BB1bl.js";import"./useStudyClock-Cuc40HvC.js";const c=`<h2 class="dom">Domain 1 — Design Secure Architectures</h2>

<section id="a1-1">
<h3>1.1 IAM — định danh và quyền<a class="anch" href="#a1-1">#</a></h3>
<p>Nguyên tắc xuyên suốt của đề: <b>least privilege</b> và <b>không bao giờ nhúng access key</b> vào code hay EC2. Thấy hai chữ đó trong câu hỏi là loại được nửa số phương án.</p>
<table>
<thead><tr><th>Khái niệm</th><th>Dùng khi</th><th>Cần nhớ</th></tr></thead>
<tbody>
<tr><td><b>IAM user</b></td><td>Người thật cần đăng nhập lâu dài</td><td>Hạn chế tạo; bật MFA; không dùng root cho việc hằng ngày</td></tr>
<tr><td><b>IAM role</b></td><td>EC2/Lambda/ECS gọi dịch vụ khác, cross-account</td><td>Credential <b>tạm thời</b> qua STS, tự xoay — luôn là đáp án thay cho access key trong code</td></tr>
<tr><td><b>Identity-based policy</b></td><td>Gắn vào user/group/role</td><td>"Ai này được làm gì"</td></tr>
<tr><td><b>Resource-based policy</b></td><td>Gắn vào S3 bucket, SQS, KMS key…</td><td>"Tài nguyên này cho ai vào" — cho phép cross-account không cần đổi role</td></tr>
<tr><td><b>Identity federation</b></td><td>Công ty đã có IdP (AD, Okta, Google)</td><td>SAML/OIDC + IAM Identity Center — không tạo IAM user cho từng nhân viên</td></tr>
<tr><td><b>Permissions boundary / SCP</b></td><td>Chặn trần quyền</td><td>SCP áp cho cả account trong Organizations; deny thắng mọi allow</td></tr>
</tbody></table>
<div class="warn"><b>Bẫy hay gặp:</b> policy có <code>explicit deny</code> thì mọi <code>allow</code> khác vô nghĩa. Thứ tự đánh giá: explicit deny → SCP → resource policy → identity policy.</div>

<p><b>Dưới nắp capo — trình tự đánh giá quyền:</b> mọi request đi qua đúng một chuỗi: <b>explicit deny</b> (ở bất kỳ policy nào — thắng tất cả) → <b>SCP</b> của Organizations (trần cứng) → <b>resource-based policy</b> → <b>permissions boundary</b> (nếu có) → <b>identity-based policy</b>. Không có allow nào ở tầng identity/resource thì mặc định deny. Nhớ chuỗi này là giải được mọi câu "vì sao vẫn bị AccessDenied dù đã allow".</p>
<ul>
<li><b>STS AssumeRole dưới nắp:</b> gọi <code>sts:AssumeRole</code> trả về bộ ba access key + secret + session token <b>tạm thời</b> (mặc định 1 giờ, đặt được tới 12 giờ; riêng role chaining bị khóa trần 1 giờ). Instance profile chỉ là "vỏ" gắn role vào EC2 — SDK tự lấy credential từ instance metadata (IMDSv2 dùng token, bắt buộc bật để chống SSRF).</li>
<li><b>ExternalId</b> trong trust policy giải bài <i>confused deputy</i>: bên thứ ba (SaaS giám sát) assume role của bạn phải trình đúng ExternalId — thiếu nó, kẻ khác cùng dùng SaaS đó có thể mượn danh. Thấy "third party cần truy cập account" trong đề → ExternalId.</li>
<li><b>Permissions boundary vs SCP:</b> boundary gắn cho <i>một</i> user/role (trần của riêng nó — dùng khi cho dev tự tạo role); SCP áp cho <i>cả account/OU</i>. Cả hai đều không tự cấp quyền.</li>
<li><b>IAM Access Analyzer</b> quét resource policy tìm quyền cấp ra ngoài account/tổ chức; <b>credential report</b> + <code>aws iam get-account-authorization-details</code> phục vụ audit định kỳ.</li>
</ul>
<div class="tip"><b>CLI hay gặp:</b> <code>aws sts get-caller-identity</code> (mình đang là ai — bước đầu của mọi phiên debug quyền), <code>aws sts assume-role --role-arn ... --external-id ...</code>, <code>aws iam simulate-principal-policy</code> (giả lập xem một hành động được phép không — đáp án cho "kiểm tra quyền mà không thử thật").</div>
</section>

<section id="a1-2">
<h3>1.2 Bảo vệ tầng mạng — SG, NACL, WAF, truy cập vận hành<a class="anch" href="#a1-2">#</a></h3>
<table>
<thead><tr><th>Lớp</th><th>Phạm vi</th><th>Đặc điểm phân biệt</th></tr></thead>
<tbody>
<tr><td><b>Security Group</b></td><td>Gắn vào ENI/instance</td><td><b>Stateful</b>, chỉ có rule allow, đánh giá tất cả rule; reference được SG khác</td></tr>
<tr><td><b>Network ACL</b></td><td>Cả subnet</td><td><b>Stateless</b> (phải mở cả chiều về + ephemeral port), có allow lẫn deny, xét theo số thứ tự — muốn <b>chặn một IP</b> thì dùng NACL, SG không deny được</td></tr>
<tr><td><b>AWS WAF</b></td><td>ALB, CloudFront, API Gateway</td><td>Chặn tầng 7: SQL injection, XSS, rate limit theo IP</td></tr>
<tr><td><b>Shield / Shield Advanced</b></td><td>DDoS</td><td>Standard miễn phí tự bật; Advanced trả phí có đội hỗ trợ và bảo hiểm chi phí</td></tr>
</tbody></table>
<div class="tip"><b>Truy cập vận hành:</b> đáp án hiện đại là <b>SSM Session Manager</b> — không mở port 22, không bastion, không key, có log phiên. Thấy phương án "mở SSH 0.0.0.0/0" là sai chắc chắn.</div>

<p><b>Dưới nắp capo — vì sao SG "stateful":</b> SG duy trì <b>bảng connection tracking</b>: gói đi ra thuộc kết nối đã được cho vào thì tự động được phép, bất kể rule outbound. NACL không có bảng đó — mỗi gói xét độc lập, nên chiều trả lời phải tự mở dải <b>ephemeral port 1024–65535</b> (đề rất thích hỏi dải này).</p>
<ul>
<li><b>Con số phải nhớ:</b> mặc định tối đa 5 SG mỗi ENI, 60 rule inbound + 60 outbound mỗi SG (nới được qua quota); NACL 20 rule mỗi chiều mặc định. SG không có deny, NACL xét theo số thứ tự từ nhỏ tới lớn, khớp là dừng.</li>
<li><b>VPC Flow Logs</b> ghi metadata (ACCEPT/REJECT, IP, port) chứ không ghi nội dung gói — đáp án cho "vì sao kết nối bị chặn, SG hay NACL?": REJECT ở flow log + SG không có deny → thủ phạm là NACL hoặc route.</li>
<li><b>WAF dưới nắp:</b> web ACL chấm theo <b>WCU</b> (mỗi rule tốn một số WCU, trần mặc định 1.500); rule xét theo priority, khớp terminating action (allow/block) là dừng; <b>rate-based rule</b> đếm theo IP trong cửa sổ 5 phút. Shield Advanced thêm đội SRT, bảo vệ tầng 3/4 nâng cao và <b>bảo hiểm chi phí scale do DDoS</b> — từ khóa "cost protection" chỉ về nó.</li>
<li><b>SSM Session Manager cần đủ ba thứ:</b> SSM Agent trên máy, instance profile có policy <code>AmazonSSMManagedInstanceCore</code>, và đường tới SSM endpoint (internet qua NAT hoặc 3 interface VPC endpoint ssm/ssmmessages/ec2messages cho private subnet kín). Thiếu bất kỳ cái nào là instance "Not connected" — câu troubleshoot kinh điển.</li>
</ul>
<div class="warn"><b>Bẫy sâu:</b> SG reference SG khác theo <i>membership</i> chứ không theo IP — instance đổi IP không phá rule; nhưng reference <b>không xuyên region</b>, và peering chỉ reference được SG cùng region.</div>
</section>

<section id="a1-3">
<h3>1.3 Bảo vệ ứng dụng — Cognito, secrets<a class="anch" href="#a1-3">#</a></h3>
<ul>
<li><b>Cognito user pool</b> = đăng nhập/đăng ký, trả JWT — dùng cho <b>xác thực người dùng app</b> (web/mobile). <b>Identity pool</b> = đổi định danh lấy credential AWS tạm thời (kể cả khách vãng lai).</li>
<li><b>Secrets Manager</b>: lưu mật khẩu DB/API key, <b>tự động xoay (rotation)</b> tích hợp RDS — chọn khi đề nhấn "tự động xoay định kỳ".</li>
<li><b>SSM Parameter Store</b>: cấu hình + secret (SecureString), <b>miễn phí</b> ở tier chuẩn nhưng không tự xoay — chọn khi đề nhấn chi phí thấp.</li>
<li>API Gateway xác thực bằng: Cognito authorizer, Lambda authorizer (logic tùy biến), IAM (ký SigV4 cho gọi nội bộ).</li>
</ul>
<div class="warn">Đề cho ứng viên phân vân Secrets Manager vs Parameter Store gần như mỗi đề một câu: <b>rotation → Secrets Manager; rẻ/cấu hình thường → Parameter Store</b>.</div>

<p><b>Dưới nắp capo — hai pool của Cognito làm việc thế nào:</b> user pool xác thực xong trả <b>ba JWT</b>: id token (danh tính, claim), access token (gọi API), refresh token (mặc định 30 ngày — id/access mặc định 1 giờ). Identity pool cầm token đó (hoặc từ Google/Facebook/SAML) đổi lấy <b>credential AWS tạm qua STS</b> theo role gắn với "authenticated/unauthenticated" — đây là cây cầu từ "người dùng app" sang "quyền AWS".</p>
<ul>
<li><b>Secrets Manager rotation dưới nắp:</b> một Lambda bốn bước <code>createSecret → setSecret → testSecret → finishSecret</code> — tạo version mới (staging label AWSPENDING), đổi mật khẩu ở DB, thử kết nối, rồi hoán nhãn AWSCURRENT. Hiểu chuỗi này trả lời được "vì sao rotation kẹt ở AWSPENDING" (Lambda thiếu quyền/không tới được DB trong VPC).</li>
<li><b>Parameter Store hai tier:</b> standard miễn phí (tối đa 10.000 tham số, 4 KB); advanced trả phí (8 KB, policy hết hạn, hơn 10.000). SecureString mã hóa bằng KMS — quyền đọc = quyền tham số <i>cộng</i> quyền dùng KMS key.</li>
<li><b>API Gateway ba kiểu chặn cửa:</b> Cognito authorizer (JWT của user pool, nhanh, không code), Lambda authorizer (logic tùy ý — token bên thứ ba, header lạ), IAM SigV4 (service-to-service nội bộ). Usage plan + API key là <i>đo lường/throttle</i>, không phải xác thực — distractor quen mặt.</li>
</ul>
<div class="tip">Chọn nhanh trong đề: "đăng nhập Google rồi upload S3" → user pool + identity pool; "xoay mật khẩu RDS tự động" → Secrets Manager; "vài trăm config + ít secret, rẻ nhất" → Parameter Store; "xác thực JWT có sẵn cho REST API" → Cognito authorizer.</div>
</section>

<section id="a1-4">
<h3>1.4 Mã hóa — KMS, S3, TLS<a class="anch" href="#a1-4">#</a></h3>
<ul>
<li><b>KMS</b> mã hóa theo kiểu <b>envelope</b>: data key mã hóa dữ liệu, KMS key mã hóa data key. Key mặc định xoay hằng năm; key policy quyết định ai dùng được key (kết hợp IAM).</li>
<li>Mã hóa S3: <b>SSE-S3</b> (AWS giữ key, mặc định từ 2023) · <b>SSE-KMS</b> (kiểm soát + audit qua CloudTrail, có thể bị giới hạn API KMS) · <b>SSE-C</b> (khách tự đưa key mỗi request) · client-side (mã hóa trước khi gửi).</li>
<li><b>ACM</b> cấp chứng chỉ TLS miễn phí cho ALB/CloudFront/API Gateway, <b>tự gia hạn</b> — chứng chỉ dùng cho CloudFront phải nằm ở <code>us-east-1</code>.</li>
<li>EBS/RDS/EFS đều mã hóa bằng KMS; EBS bật mã hóa mặc định theo region được.</li>
</ul>
<div class="tip">Đề hỏi "mã hóa mà phải audit được ai dùng key, khi nào" → <b>SSE-KMS</b>, vì mọi lần dùng key đều ghi CloudTrail.</div>

<p><b>Dưới nắp capo — envelope encryption từng bước:</b> app gọi <code>GenerateDataKey</code> → KMS trả về data key <b>bản rõ</b> + <b>bản đã mã hóa bằng KMS key</b>. App mã hóa dữ liệu bằng bản rõ (rồi vứt nó khỏi RAM), lưu bản mã của data key <i>cạnh</i> dữ liệu. Giải mã = gửi bản mã data key cho KMS <code>Decrypt</code> → nhận bản rõ → giải dữ liệu. Vì vậy: dữ liệu lớn cỡ nào cũng được (KMS chỉ mã hóa data key), còn gọi <code>Encrypt</code> trực tiếp bị trần <b>4 KB</b> — cặp số bị hỏi thẳng.</p>
<ul>
<li><b>Key policy là gốc quyền:</b> khác mọi dịch vụ khác, KMS <i>bắt buộc</i> key policy — IAM policy chỉ có tác dụng khi key policy cho phép account dùng IAM. <b>Grant</b> là quyền tạm cấp cho principal (cách các dịch vụ AWS dùng key của bạn).</li>
<li><b>Loại key:</b> AWS managed (<code>aws/s3</code>… — không xoay lịch tùy ý, không policy riêng) vs customer managed (toàn quyền, xoay tự động mỗi năm bật/tắt được, multi-Region key cho DR). Xóa key phải qua <b>lịch chờ 7–30 ngày</b> — không có xóa ngay.</li>
<li><b>S3 Bucket Key dưới nắp:</b> S3 xin một key trung gian cấp bucket từ KMS rồi tự sinh key con cho object — số call KMS giảm ~99%, hóa đơn KMS và ThrottlingException giảm theo. ACM: chứng chỉ public miễn phí, <b>không xuất private key ra ngoài</b> (cần xuất → ACM Private CA hoặc mua ngoài).</li>
</ul>
<div class="warn"><b>Bẫy sâu:</b> "mã hóa" bucket không bảo vệ trước IAM sai — SSE giải quyết <i>dữ liệu at rest trên đĩa AWS</i>; ai có <code>s3:GetObject</code> (+ quyền KMS nếu SSE-KMS) vẫn đọc bình thường. Câu "ngăn admin đọc" phải là client-side encryption.</div>
</section>

<section id="a1-5">
<h3>1.5 Kiểm soát dữ liệu — chặn public, endpoint, audit<a class="anch" href="#a1-5">#</a></h3>
<ul>
<li><b>S3 Block Public Access</b>: bật ở mức account là chặn hết public bất kể bucket policy — đáp án cho "bảo đảm không bucket nào lộ public".</li>
<li><b>VPC endpoint</b>: gọi S3/DynamoDB từ VPC <b>không đi qua internet</b>. Gateway endpoint (S3, DynamoDB — miễn phí) vs Interface endpoint (PrivateLink, hầu hết dịch vụ khác, tính phí giờ + GB).</li>
<li><b>S3 Object Lock</b> (WORM): compliance mode không ai xóa được kể cả root, trong thời hạn giữ — đáp án cho yêu cầu "bất biến theo quy định".</li>
<li><b>CloudTrail</b> = ai gọi API gì (audit). <b>Config</b> = tài nguyên đang/từng cấu hình ra sao + rule đánh giá tuân thủ. <b>Macie</b> = quét S3 tìm dữ liệu nhạy cảm (PII). <b>GuardDuty</b> = phát hiện mối đe dọa từ log.</li>
</ul>
<div class="warn">Bẫy phân biệt: CloudTrail trả lời "AI đã làm", Config trả lời "CÁI GÌ đã đổi", CloudWatch trả lời "hệ đang chạy thế nào". Ba dịch vụ này bị tráo nhau liên tục trong distractor.</div>

<ul>
<li><b>Trình tự chặn public của S3:</b> Block Public Access (account) → BPA (bucket) → bucket policy/ACL. BPA account bật là <i>mọi</i> policy public vô hiệu — vì thế nó là đáp án "bảo đảm", còn "rà soát policy" chỉ là quy trình.</li>
<li><b>Object Lock ba chế độ:</b> <i>governance</i> (quyền đặc biệt <code>s3:BypassGovernanceRetention</code> gỡ được), <i>compliance</i> (không ai gỡ, kể cả root, hết hạn mới thôi), <i>legal hold</i> (không có ngày hết hạn, bật/tắt bằng quyền riêng). Điều kiện tiên quyết: bucket bật <b>versioning</b> và Object Lock phải bật <b>từ lúc tạo bucket</b>.</li>
<li><b>CloudTrail hai loại event:</b> management events (bật sẵn 90 ngày trong console, miễn phí một trail) vs <b>data events</b> (GetObject/PutObject từng object, Lambda invoke — phải bật riêng và <i>tính phí</i>). Câu "ai đã đọc object X" → cần data events đã bật từ trước, không truy ngược được.</li>
<li><b>Config auto-remediation:</b> rule phát hiện lệch chuẩn (vd bucket public) → gắn <b>SSM Automation document</b> tự sửa. Cặp phân vai với CloudTrail: Config = trạng thái/tuân thủ, CloudTrail = hành vi/API.</li>
<li><b>VPC endpoint policy</b> giới hạn <i>qua endpoint này được làm gì</i> (vd chỉ bucket của công ty) — kết hợp bucket policy điều kiện <code>aws:sourceVpce</code> để bucket <i>chỉ</i> nhận traffic từ endpoint: bộ đôi khóa hai đầu hay ra đề.</li>
</ul>
<div class="tip"><b>Chuỗi phản xạ nhanh:</b> "không bucket nào được public" → BPA account · "log bất biến 5 năm" → Object Lock compliance · "ai đọc file X hôm qua" → CloudTrail data events · "tự sửa cấu hình lệch chuẩn" → Config + SSM remediation · "tìm PII trong S3" → Macie · "phát hiện tài khoản bị chiếm" → GuardDuty.</div>
</section>

<section id="a1-6">
<h3>1.6 VPC chuyên sâu — subnet, route, kết nối nhiều VPC<a class="anch" href="#a1-6">#</a></h3>
<ul>
<li><b>Địa chỉ:</b> VPC CIDR /16–/28; mỗi subnet AWS giữ <b>5 IP</b> (mạng, router, DNS, dự phòng, broadcast) — subnet /28 chỉ còn 11 IP dùng được, đề thích hỏi phép trừ này. Subnet thuộc <b>một AZ</b>; "public" nghĩa là route table có đường <code>0.0.0.0/0 → Internet Gateway</code>, không phải thuộc tính bật tắt.</li>
<li><b>NAT Gateway chi tiết chịu lỗi:</b> NAT GW nằm trong <b>một AZ</b> — HA thật sự = mỗi AZ một NAT + route table của private subnet trỏ NAT <i>cùng AZ</i>; một NAT chung vừa thành SPOF vừa cộng phí cross-AZ. NAT GW không cần vá/scale (khác NAT instance cổ — chỉ còn là distractor).</li>
<li><b>Peering vs Transit Gateway:</b> peering = nối 1-1, <b>không bắc cầu</b> (A–B, B–C không cho A→C), không CIDR trùng — 10 VPC là 45 kết nối; <b>Transit Gateway</b> = hub-and-spoke, một điểm nối hàng nghìn VPC + VPN + DX, có route table riêng để phân vùng — "nhiều VPC/nhiều account/hybrid" → TGW.</li>
<li><b>DNS trong VPC:</b> Route 53 Resolver ở IP <code>.2</code> của CIDR; inbound/outbound resolver endpoint nối DNS on-prem hai chiều — "on-prem phân giải tên private của AWS" → inbound endpoint.</li>
<li><b>Reachability Analyzer</b> chứng minh đường mạng A→B đứt ở đâu (route? SG? NACL?) mà không cần bắn gói thật — đáp án hiện đại cho câu troubleshoot kết nối.</li>
<li><b>VPC sharing (RAM):</b> chia subnet cho account khác đặt tài nguyên — một hạ tầng mạng, nhiều account ứng dụng.</li>
</ul>
<div class="warn"><b>Bẫy hay gặp:</b> route table cụ thể hơn thắng (longest prefix match) — "chặn 0.0.0.0/0 nhưng vẫn ra được một dải" là do route cụ thể; và Internet Gateway không có "băng thông phải scale" — phương án "thêm IGW thứ hai cho tải" luôn sai vì mỗi VPC một IGW và nó đã vô hạn.</div>
</section>

<h2 class="dom">Domain 2 — Design Resilient Architectures</h2>

<section id="a2-1">
<h3>2.1 Loose coupling — SQS, SNS, EventBridge<a class="anch" href="#a2-1">#</a></h3>
<table>
<thead><tr><th>Dịch vụ</th><th>Mô hình</th><th>Chọn khi</th></tr></thead>
<tbody>
<tr><td><b>SQS</b></td><td>Queue — 1 consumer nhóm xử lý, message biến mất sau khi xử lý</td><td>Đệm giữa hai tầng để chịu spike; xử lý nền; retry qua <b>DLQ</b></td></tr>
<tr><td><b>SNS</b></td><td>Pub/sub — đẩy tới nhiều subscriber</td><td><b>Fan-out</b>: SNS → nhiều SQS, mỗi hệ nhận một bản</td></tr>
<tr><td><b>EventBridge</b></td><td>Event bus — route theo nội dung event</td><td>Tích hợp sự kiện từ dịch vụ AWS/SaaS, rule lọc, lịch cron</td></tr>
</tbody></table>
<ul>
<li>SQS standard: at-least-once, không bảo đảm thứ tự. <b>FIFO</b>: đúng thứ tự + exactly-once nhưng trần 300–3000 msg/s.</li>
<li><b>Visibility timeout</b>: message "ẩn" khi đang xử lý; xử lý quá chậm thì message hiện lại → xử lý trùng. <b>DLQ</b> hứng message hỏng sau N lần thử.</li>
</ul>
<div class="tip">Câu kinh điển: web nhận đơn hàng bị mất request khi tải tăng đột biến → chèn <b>SQS</b> giữa web và worker, worker trong ASG scale theo độ dài queue.</div>

<p><b>Con số phải nhớ của SQS</b> (nhóm số bị hỏi dày đặc nhất Domain 2):</p>
<table><thead><tr><th>Tham số</th><th>Mặc định</th><th>Trần</th></tr></thead><tbody>
<tr><td>Visibility timeout</td><td>30 giây</td><td>12 giờ</td></tr>
<tr><td>Message retention</td><td>4 ngày</td><td>14 ngày</td></tr>
<tr><td>Kích thước message</td><td colspan="2">256 KB (lớn hơn → Extended Client Library, body để trên S3)</td></tr>
<tr><td>Long polling</td><td>0 (short)</td><td>20 giây — bật để giảm request rỗng và giảm tiền</td></tr>
<tr><td>Delay queue / message timer</td><td>0</td><td>15 phút</td></tr>
<tr><td>FIFO throughput</td><td colspan="2">300 msg/s (3.000 với batching; high-throughput mode cao hơn theo partition)</td></tr>
<tr><td>FIFO dedup window</td><td colspan="2">5 phút (theo MessageDeduplicationId hoặc hash nội dung)</td></tr>
</tbody></table>
<ul>
<li><b>Dưới nắp capo:</b> SQS là hệ <b>phân tán nhiều node</b> — standard "best-effort ordering" và "at-least-once" vì message được nhân bản trên nhiều máy, một lần đọc có thể không hỏi đúng node đã xóa. FIFO đổi kiến trúc (chuỗi theo <code>MessageGroupId</code>) nên mới có trần throughput — group id chính là "session" của SQS: mỗi group xử lý tuần tự, nhiều group song song.</li>
<li><b>EventBridge họ hàng:</b> event bus (route theo pattern), <b>Pipes</b> (nối point-to-point nguồn→đích có filter/enrich, thay code glue), <b>Scheduler</b> (cron quy mô lớn, thay CloudWatch Events rule); <b>archive &amp; replay</b> phát lại event cũ — đáp án cho "tái xử lý sự kiện tháng trước".</li>
</ul>
<div class="warn"><b>Bẫy sâu:</b> visibility timeout phải <b>dài hơn thời gian xử lý</b> — không thì message hiện lại giữa chừng và bị xử lý trùng "một cách bí ẩn"; nhưng đặt 12 giờ bừa bãi thì message lỗi bị "giam" nửa ngày mới retry. Chuẩn: timeout ≈ 6× thời gian xử lý trung bình + DLQ.</div>
</section>

<section id="a2-2">
<h3>2.2 ELB và Auto Scaling<a class="anch" href="#a2-2">#</a></h3>
<ul>
<li><b>ALB</b>: tầng 7 — route theo path/host/header, target là instance/IP/Lambda; có sticky session, hợp microservice. <b>NLB</b>: tầng 4 — TCP/UDP, hàng triệu request/s, <b>IP tĩnh / Elastic IP</b>, độ trễ cực thấp. <b>GWLB</b>: chèn appliance bảo mật bên thứ ba.</li>
<li>ASG scaling: <b>target tracking</b> (giữ CPU ~50% — đáp án mặc định, ít phải chỉnh), step scaling (theo ngưỡng), <b>scheduled</b> (biết trước giờ cao điểm), predictive (ML dự báo theo chu kỳ).</li>
<li>Health check: ELB đánh dấu unhealthy → ASG thay instance mới; đặt ASG trải <b>nhiều AZ</b> là mặc định của mọi thiết kế HA.</li>
</ul>
<div class="warn">Đề nhấn "IP tĩnh cho firewall whitelist" hoặc "hàng triệu kết nối TCP" → <b>NLB</b>; nhấn "route theo đường dẫn /api, /images" → <b>ALB</b>. Đây là cặp phân biệt ăn điểm nhanh nhất Domain 2.</div>

<ul>
<li><b>Con số phải nhớ:</b> ALB idle timeout mặc định <b>60 giây</b> (client giữ kết nối lâu hơn phải chỉnh — triệu chứng 504); deregistration delay (connection draining) mặc định <b>300 giây</b> — thời gian target được rút vẫn trả lời nốt request dở; health check mặc định 30 giây/lần, healthy sau 5 lần liên tiếp.</li>
<li><b>Cross-zone load balancing:</b> ALB <i>luôn bật</i> (miễn phí), NLB <i>tắt mặc định</i> (bật thì tính phí data cross-AZ) — lệch tải giữa các AZ trên NLB gần như luôn do cái này. Sticky session (cookie) chỉ có ở ALB; NLB "sticky" theo flow hash tự nhiên.</li>
<li><b>ASG dưới nắp:</b> vòng đời instance có <b>lifecycle hook</b> (Pending:Wait / Terminating:Wait) — chạy script warm-up hoặc rút log trước khi kill; <b>warm pool</b> giữ instance stopped/pre-initialized để scale-out nhanh mà không trả tiền compute chờ; <b>instance refresh</b> thay dần fleet theo AMI mới (rolling, % healthy tối thiểu); termination policy mặc định: chọn AZ nhiều instance nhất → instance dùng launch template cũ nhất → gần mốc tính giờ nhất.</li>
<li><b>Scale-in protection</b> cho worker đang xử lý job dài; cooldown mặc định 300 giây cho simple scaling (target tracking tự quản bằng hai alarm).</li>
</ul>
<div class="tip">Chuỗi chẩn đoán "user bị ngắt khi deploy": deregistration delay quá ngắn → nâng lên; "scale-out mãi không kịp spike" → warm pool hoặc scheduled scaling; "một AZ nghẽn một AZ rảnh trên NLB" → bật cross-zone.</div>
</section>

<section id="a2-3">
<h3>2.3 HA cho database và DNS — RDS, Route 53<a class="anch" href="#a2-3">#</a></h3>
<ul>
<li><b>RDS Multi-AZ</b>: bản sao đồng bộ ở AZ khác, <b>tự failover</b> (đổi DNS, ~1–2 phút), standby <b>không đọc được</b> — mục đích là <b>HA</b>, không phải hiệu năng.</li>
<li><b>Read replica</b>: sao chép <b>bất đồng bộ</b>, đọc được, có thể khác region — mục đích là <b>giảm tải đọc</b>; promote thủ công khi thảm họa.</li>
<li><b>Aurora</b>: 6 bản dữ liệu trên 3 AZ, failover ~30 giây, tối đa 15 read replica dùng chung storage; <b>Global Database</b> nhân bản khác region trễ dưới 1 giây.</li>
<li><b>Route 53</b> routing policy: failover (chính/dự phòng + health check), latency, weighted (canary), geolocation, multivalue. Alias record trỏ thẳng vào ALB/CloudFront không mất phí query.</li>
</ul>
<div class="tip">Câu bẫy lặp mãi: "tăng khả năng chịu lỗi cho RDS" → Multi-AZ; "giảm độ trễ đọc cho báo cáo" → read replica. Đọc kỹ đề muốn <b>HA</b> hay muốn <b>hiệu năng đọc</b>.</div>

<ul>
<li><b>Con số phải nhớ:</b> RDS Multi-AZ failover <b>60–120 giây</b> (DNS đổi, app cần retry logic + connection timeout ngắn); Aurora failover <b>~30 giây</b>, replica tối đa <b>15</b> (RDS thường: 5); Aurora Global Database RPO ~1 giây, RTO ~1 phút; automated backup giữ 1–35 ngày, PITR tới 5 phút gần nhất.</li>
<li><b>RDS Proxy</b> — mảnh ghép hay bị bỏ quên: pool kết nối managed đứng trước RDS/Aurora, giải bài <b>Lambda connection storm</b> (họ hàng của PgBouncer bên Azure), giảm thời gian failover cảm nhận được vì proxy giữ kết nối app trong lúc DB đổi vai. Thấy "Lambda + RDS + max_connections" là nghĩ tới nó.</li>
<li><b>Route 53 dưới nắp:</b> health check chạy từ <i>fleet checker toàn cầu</i> — endpoint private phải dùng calculated/CloudWatch-alarm health check; TTL là con dao hai lưỡi: failover nhanh cần TTL ngắn (30–60s). <b>Alias record</b> trỏ ALB/CloudFront/S3 website: miễn phí query, hỗ trợ zone apex (CNAME thì không) — cặp phân biệt alias vs CNAME bị hỏi thẳng.</li>
<li>Routing nâng cao: weighted 0 = tắt một đích (dark launch); geoproximity chỉnh bias; multivalue = "DNS load balancing nghèo" có health check nhưng không thay được LB thật.</li>
</ul>
<div class="warn"><b>Bẫy sâu:</b> Multi-AZ nhân đôi chi phí instance nhưng <b>không tăng</b> throughput đọc/ghi (standby không phục vụ); Aurora reader endpoint cân bằng <i>round-robin theo kết nối</i>, không theo tải — connection pool lệch vẫn dồn một reader.</div>
</section>

<section id="a2-4">
<h3>2.4 Serverless và container — Lambda, ECS/Fargate<a class="anch" href="#a2-4">#</a></h3>
<ul>
<li><b>Lambda</b>: chạy tối đa <b>15 phút</b>, scale tự động theo request, trả tiền theo ms — hợp xử lý sự kiện (S3 upload, SQS, API Gateway). Việc chạy dài hơn 15 phút hoặc cần GPU → không phải Lambda.</li>
<li><b>ECS trên Fargate</b>: container không quản server — đáp án cho "container hóa nhưng không muốn vận hành EC2". ECS trên EC2 khi cần kiểm soát host/daemonset. <b>EKS</b> khi đội đã dùng Kubernetes hoặc cần chạy đa nền tảng.</li>
<li>Kết nối riêng tư Lambda ↔ VPC: gắn Lambda vào subnet riêng; truy cập internet từ Lambda trong VPC cần NAT.</li>
</ul>
<div class="warn">Job xử lý video 2 giờ mà phương án là Lambda → sai vì trần 15 phút; đáp án thường là ECS Fargate hoặc AWS Batch.</div>

<p><b>Con số Lambda phải nhớ:</b> chạy tối đa <b>15 phút</b> · RAM 128 MB–<b>10 GB</b> (CPU tỷ lệ theo RAM — giống Azure Functions) · <code>/tmp</code> tới 10 GB · payload đồng bộ <b>6 MB</b>, bất đồng bộ 256 KB · concurrency mặc định <b>1.000/region</b> (nới được) · reserved concurrency = vừa giữ chỗ vừa làm trần; provisioned concurrency diệt cold start (tính tiền giữ ấm).</p>
<ul>
<li><b>ECS hai role — bẫy số một của container trên AWS:</b> <b>task execution role</b> = quyền của <i>ECS agent</i> (pull image từ ECR, ghi log CloudWatch, đọc secret khởi động); <b>task role</b> = quyền của <i>code trong container</i> (gọi S3/DynamoDB). Lỗi "pull được image nhưng app AccessDenied khi gọi S3" = thiếu task role; ngược lại "task không khởi động nổi, CannotPullContainerError" = thiếu execution role.</li>
<li><b>Fargate</b> chọn CPU/memory theo <i>combo hợp lệ</i> (0.25 vCPU–16 vCPU, memory theo dải của từng mức CPU) — không phải số tùy ý; Fargate Spot cho task chịu gián đoạn.</li>
<li><b>Lambda trong VPC dưới nắp:</b> ENI được tạo sẵn theo subnet+SG (Hyperplane) nên cold start VPC giờ không còn là hình phạt lớn; nhưng ra internet vẫn cần NAT, và gọi dịch vụ AWS nên đi VPC endpoint. Lambda + RDS = nhớ RDS Proxy (mục trên).</li>
<li>Async Lambda có retry 2 lần + <b>DLQ/destination</b> riêng (SQS/SNS/EventBridge) — đừng nhầm với DLQ của SQS trigger (thuộc queue).</li>
</ul>
<div class="tip">Chọn compute nhanh: sự kiện ngắn &lt;15 phút → Lambda · container dài, không quản host → Fargate · cần daemon/GPU/kiểm soát host → ECS-EC2/EKS · job hàng loạt lớn → AWS Batch.</div>
</section>

<section id="a2-5">
<h3>2.5 DR và backup — RPO/RTO, bốn chiến lược<a class="anch" href="#a2-5">#</a></h3>
<table>
<thead><tr><th>Chiến lược</th><th>RTO/RPO</th><th>Chi phí</th><th>Nhận dạng trong đề</th></tr></thead>
<tbody>
<tr><td><b>Backup &amp; restore</b></td><td>Giờ</td><td>Thấp nhất</td><td>"chấp nhận khôi phục trong vài giờ"</td></tr>
<tr><td><b>Pilot light</b></td><td>Chục phút</td><td>Thấp</td><td>DB nhân bản sẵn, app tắt — "lõi luôn cháy sẵn"</td></tr>
<tr><td><b>Warm standby</b></td><td>Phút</td><td>Trung bình</td><td>Bản thu nhỏ chạy thật ở region phụ, scale lên khi thảm họa</td></tr>
<tr><td><b>Multi-site active-active</b></td><td>~0</td><td>Cao nhất</td><td>Hai region cùng phục vụ, Route 53 chia tải</td></tr>
</tbody></table>
<ul>
<li><b>AWS Backup</b>: chính sách backup tập trung đa dịch vụ (EBS, RDS, DynamoDB, EFS…), có vault lock chống xóa.</li>
<li><b>S3 CRR</b> (cross-region replication): bật versioning hai đầu, chỉ nhân bản object <b>mới</b> từ khi bật; replication + lifecycle là bộ đôi câu hỏi quen thuộc.</li>
</ul>
<div class="tip">Đề luôn cho RTO/RPO bằng con số — map thẳng: giờ → backup&amp;restore, chục phút → pilot light, phút → warm standby, giây/0 → active-active. Chọn mức <b>rẻ nhất còn thỏa</b> yêu cầu.</div>

<ul>
<li><b>Gắn số vào bốn chiến lược:</b> backup &amp; restore (RPO = nhịp backup, thường giờ; RTO giờ→ngày) · pilot light (RPO ~phút nhờ replication liên tục; RTO chục phút — phải "thổi lửa" dựng app) · warm standby (RPO ~giây-phút; RTO phút — chỉ scale lên) · multi-site active-active (RPO≈0; RTO≈0; tiền ≈ 2×). Đề cho RPO/RTO bằng số là map thẳng, chọn mức <b>rẻ nhất còn thỏa</b>.</li>
<li><b>AWS Backup dưới nắp:</b> backup plan (lịch + retention + vault) áp theo <b>tag</b> tài nguyên — gắn tag là tự vào lưới backup, kiểm soát tuân thủ bằng Backup Audit Manager; <b>vault lock</b> hai chế độ giống Object Lock (governance/compliance) chống cả admin xóa backup — đáp án cho "ransomware xóa backup".</li>
<li><b>S3 replication chi tiết:</b> CRR/SRR cần versioning hai đầu; chỉ object <b>mới</b> (bản cũ → Batch Replication); mặc định <i>không</i> nhân bản delete marker (bật được); <b>RTC</b> (Replication Time Control) cam kết SLA <b>15 phút</b> — từ khóa "replication có SLA" chỉ về nó. Replica có thể đổi storage class và đổi chủ sở hữu (ownership translation) cho account DR riêng.</li>
<li><b>Versioning + MFA delete</b>: chống xóa nhầm/xóa ác ý object — rẻ hơn Object Lock khi chỉ cần "không mất dữ liệu vì lỡ tay".</li>
</ul>
<div class="warn"><b>Bẫy sâu:</b> "backup cross-region tự động cho RDS/EBS/DynamoDB bằng một chính sách" → AWS Backup copy action, đừng tự chế Lambda cron từng dịch vụ; và snapshot nằm <i>cùng account</i> không chống được account bị chiếm — copy sang account khác (vault khác) mới là DR thật.</div>
</section>

<section id="a2-6">
<h3>2.6 ECS và EKS chuyên sâu — task, service, deployment<a class="anch" href="#a2-6">#</a></h3>
<ul>
<li><b>Bộ khái niệm ECS:</b> task definition (bản khai container: image, CPU/RAM, port, role) → task (một lần chạy) → <b>service</b> (giữ N task sống + gắn LB + deployment) → cluster. Task lỗi thì service tự thay — "self-healing" nằm ở service.</li>
<li><b>Network mode:</b> <code>awsvpc</code> (bắt buộc với Fargate) cấp mỗi task một <b>ENI + IP riêng</b> — SG áp cho từng task được; <code>bridge/host</code> chỉ còn trên EC2 launch type. "SG riêng cho từng container" → awsvpc.</li>
<li><b>Deployment:</b> rolling update theo <code>minimumHealthyPercent/maximumPercent</code>; <b>blue/green qua CodeDeploy</b> — dựng target group mới, chuyển traffic, tự rollback theo alarm; đề nói "rollback tự động khi lỗi tăng" → blue/green + CloudWatch alarm.</li>
<li><b>Capacity provider:</b> lớp giữa service và hạ tầng — trộn <code>FARGATE</code> + <code>FARGATE_SPOT</code> theo tỷ trọng (nền ổn định + phần rẻ chịu gián đoạn), hoặc ASG capacity provider tự thêm EC2 khi task chờ chỗ (managed scaling).</li>
<li><b>EKS tối thiểu phải biết:</b> control plane do AWS quản (tính phí giờ/cluster); node = managed node group (EC2) hoặc <b>Fargate profile</b> (pod serverless theo namespace/label); <b>IRSA</b> (IAM Roles for Service Accounts) = cấp IAM role cho <i>từng pod</i> qua OIDC — tương đương task role của ECS, và là đáp án "pod cần quyền AWS riêng, không dùng quyền node".</li>
<li><b>Chọn ECS hay EKS:</b> ECS đơn giản, khít hệ AWS, không phí control plane; EKS khi đội đã thạo Kubernetes, cần hệ sinh thái K8s (Helm, operator) hoặc chạy đa môi trường. "Chuyển từ on-prem Kubernetes lên ít thay đổi nhất" → EKS.</li>
</ul>
<div class="tip"><b>Nhắc lại cặp role của task (mục 2.4):</b> execution role = agent kéo image/ghi log; task role = code gọi AWS — hai câu hỏi ECS thì một câu về cặp này.</div>
</section>

<h2 class="dom">Domain 3 — Design High-Performing Architectures</h2>

<section id="a3-1">
<h3>3.1 Storage hiệu năng — EBS, EFS/FSx, S3<a class="anch" href="#a3-1">#</a></h3>
<table>
<thead><tr><th>Loại</th><th>Chọn khi</th><th>Cần nhớ</th></tr></thead>
<tbody>
<tr><td><b>EBS gp3</b></td><td>Đa dụng</td><td>3.000 IOPS nền, mua thêm IOPS/throughput <b>độc lập dung lượng</b> — rẻ hơn gp2</td></tr>
<tr><td><b>EBS io2</b></td><td>DB cần IOPS rất cao, bền 99,999%</td><td>Tới 64K IOPS (256K với Block Express), hỗ trợ Multi-Attach</td></tr>
<tr><td><b>EFS</b></td><td>File share NFS cho <b>Linux</b>, nhiều instance mount chung</td><td>Scale tự động, đa AZ; có lifecycle sang IA</td></tr>
<tr><td><b>FSx for Windows</b></td><td>File share <b>SMB</b>, tích hợp Active Directory</td><td>Từ khóa "Windows", "SMB", "AD"</td></tr>
<tr><td><b>FSx for Lustre</b></td><td>HPC, ML training, xử lý film</td><td>Hàng trăm GB/s, liên kết thẳng với S3</td></tr>
</tbody></table>
<div class="tip">S3: hiệu năng scale theo <b>prefix</b> (3.500 PUT / 5.500 GET mỗi giây cho mỗi prefix); upload file lớn dùng <b>multipart</b>, tải xa dùng <b>Transfer Acceleration</b>.</div>

<p><b>Con số storage phải nhớ:</b></p>
<table><thead><tr><th>Loại</th><th>IOPS</th><th>Throughput</th><th>Ghi chú</th></tr></thead><tbody>
<tr><td>gp3</td><td>3.000 nền → 16.000</td><td>125 → 1.000 MB/s</td><td>Mua IOPS/throughput rời khỏi dung lượng</td></tr>
<tr><td>io2 (Block Express)</td><td>tới 64.000 (256.000)</td><td>tới 4.000 MB/s</td><td>500 IOPS/GB; bền 99,999%; Multi-Attach</td></tr>
<tr><td>st1 / sc1 (HDD)</td><td>—</td><td>500 / 250 MB/s burst</td><td>Tuần tự (log, big data); không làm boot volume</td></tr>
<tr><td>S3 object</td><td colspan="2">tối đa 5 TB; multipart bắt buộc phần &gt;5 GB</td><td>3.500 PUT / 5.500 GET mỗi giây mỗi prefix</td></tr>
</tbody></table>
<ul>
<li><b>EBS snapshot dưới nắp:</b> incremental (chỉ block đổi) lưu trên S3; volume tạo từ snapshot bị <b>lazy-load</b> — chậm lần đọc đầu; cần nhanh ngay → <b>Fast Snapshot Restore</b> (trả phí theo AZ) — đáp án cho "restore xong hiệu năng kém trong vài giờ đầu".</li>
<li><b>EFS hai trục cấu hình:</b> performance mode (General Purpose vs Max I/O — Max I/O cho hàng nghìn client, độ trễ cao hơn) × throughput mode (Bursting / <b>Elastic</b> — tự co giãn, mặc định nên chọn / Provisioned). EFS lifecycle sang IA tiết kiệm tới ~90% cho file nguội.</li>
<li><b>FSx for Lustre:</b> scratch (tạm, rẻ, không nhân bản) vs persistent (bền, nhân bản trong AZ); liên kết S3: lazy-load object khi đọc, ghi ngược bằng export — mẫu "ML training đọc dataset S3 tốc độ cao".</li>
</ul>
<div class="tip">Chọn nhanh: "block storage cho một EC2" → EBS · "file share POSIX nhiều EC2 Linux" → EFS · "SMB/AD" → FSx Windows · "HPC/ML throughput trăm GB/s" → FSx Lustre · "object, scale vô hạn, rẻ" → S3. Đề cho từ khóa giao thức (NFS/SMB/POSIX) là lộ đáp án.</div>
</section>

<section id="a3-2">
<h3>3.2 Compute hiệu năng — EC2 family, placement group<a class="anch" href="#a3-2">#</a></h3>
<ul>
<li>Họ EC2 theo chữ cái: <b>C</b> = compute (batch, encode), <b>M</b> = cân bằng, <b>R</b> = RAM lớn (cache, in-memory DB), <b>T</b> = burstable (CPU credit — cạn credit là nghẽn), <b>I/D</b> = storage NVMe cục bộ, <b>P/G</b> = GPU.</li>
<li><b>Placement group</b>: <b>cluster</b> — cùng rack, độ trễ thấp nhất cho HPC (đổi lại rủi ro chung phần cứng); <b>spread</b> — mỗi instance một rack, tối đa 7/AZ, cho các node "không được chết cùng nhau"; <b>partition</b> — nhóm rack cho Hadoop/Kafka.</li>
<li><b>Lambda tuning</b>: tăng memory là tăng CPU theo; provisioned concurrency diệt cold start; SnapStart cho Java.</li>
</ul>
<div class="warn">Đề nói app "chậm dần rồi nghẽn sau vài chục phút tải cao" trên instance <b>t3</b> → hết CPU credit; đáp án là đổi sang M/C hoặc bật unlimited, không phải thêm EBS.</div>

<ul>
<li><b>T-series credit dưới nắp:</b> mỗi vCPU tích credit khi chạy dưới baseline (t3.medium baseline 20%/vCPU) và tiêu khi vượt; hết credit → bị ghìm về baseline (app "chậm dần rồi nghẽn"). <b>Unlimited mode</b> cho vay credit — trả thêm tiền thay vì nghẽn. Xem <code>CPUCreditBalance</code> trong CloudWatch để bắt bệnh.</li>
<li><b>Placement group luật cứng:</b> cluster = một AZ duy nhất (độ trễ thấp nhất, nên kèm instance cùng family + ENA/EFA); spread = tối đa <b>7 instance/AZ</b> (khác rack, khác nguồn điện); partition = tối đa 7 partition/AZ, mỗi partition nhiều instance — cho Hadoop/Kafka/Cassandra biết topology.</li>
<li><b>ENA vs EFA:</b> ENA = network tăng cường chuẩn (tới 100+ Gbps); <b>EFA</b> thêm OS-bypass (libfabric) cho MPI/NCCL — HPC/ML đa node thấy "MPI" là chọn EFA, và EFA chỉ có ý nghĩa trong cluster placement group.</li>
<li><b>EBS-optimized</b> (mặc định trên instance đời mới): băng thông riêng cho EBS, không giành với network — nghẽn IO mà CPU rảnh thì xem giới hạn EBS bandwidth <i>của instance size</i>, không phải chỉ của volume: instance nhỏ có trần IOPS thấp hơn volume — nâng volume mà quên nâng instance là bẫy kép.</li>
<li><b>Hibernate</b> giữ RAM xuống EBS (mã hóa bắt buộc) — "khởi động lại nhanh với trạng thái in-memory" ; Graviton (ARM) rẻ hơn ~20% cùng hiệu năng — "giảm chi phí không đổi kiến trúc x86 độc lập" là tín hiệu cân nhắc.</li>
</ul>
</section>

<section id="a3-3">
<h3>3.3 Database hiệu năng — DynamoDB, ElastiCache, Aurora<a class="anch" href="#a3-3">#</a></h3>
<ul>
<li><b>DynamoDB</b>: key-value, độ trễ ms ở mọi quy mô, không phải chỉnh instance. Thiết kế partition key phân bố đều; GSI cho truy vấn theo chiều khác; Streams bắt thay đổi. <b>DAX</b> = cache chuyên cho DynamoDB, đọc micro-giây, <b>không đổi code</b> logic.</li>
<li><b>ElastiCache</b>: Redis (cấu trúc dữ liệu, pub/sub, persistence, Multi-AZ) vs Memcached (đơn giản, multi-thread, không HA). Dùng đệm trước RDS cho dữ liệu đọc nhiều ghi ít, hoặc lưu session.</li>
<li><b>Aurora</b>: throughput ~5× MySQL; reader endpoint tự cân bằng tải đọc; hợp khi "cần tương thích MySQL/PostgreSQL nhưng vượt trần RDS".</li>
<li>Chọn engine theo tín hiệu đề: quan hệ + giao dịch → RDS/Aurora; key-value scale vô hạn, "single-digit millisecond" → DynamoDB; đồ thị → Neptune; time series → Timestream.</li>
</ul>
<div class="tip">"Đọc lặp đi lặp lại cùng dữ liệu làm RDS quá tải" → thêm <b>ElastiCache</b>; "DynamoDB cần đọc micro-giây" → <b>DAX</b>. Hai câu này gần như chắc chắn xuất hiện.</div>

<p><b>Số học DynamoDB — đề bắt tính thật:</b> 1 <b>RCU</b> = 1 strong read/giây cho item ≤4 KB (eventual = <b>một nửa</b> RCU, transactional = gấp đôi); 1 <b>WCU</b> = 1 write/giây cho item ≤1 KB; item tối đa <b>400 KB</b>. Ví dụ đề: đọc strong 100 item 8 KB mỗi giây = 100 × (8/4) = <b>200 RCU</b>; đọc eventual thì 100 RCU.</p>
<ul>
<li><b>GSI vs LSI:</b> GSI = partition key khác, tạo lúc nào cũng được, có capacity riêng, <i>eventual</i>; LSI = cùng partition key + sort key khác, phải tạo <b>lúc tạo bảng</b>, chung capacity, và ép trần <b>10 GB mỗi partition key</b>. GSI bị throttle sẽ <i>throttle ngược cả bảng</i> khi ghi — bẫy sâu ít người biết.</li>
<li><b>Adaptive capacity</b> tự dồn RU về partition nóng nhưng có giới hạn — không cứu được key thiết kế tồi; DynamoDB Streams + Lambda = change feed của AWS; TTL xóa nền miễn phí WCU.</li>
<li><b>ElastiCache Redis cluster mode:</b> disabled = 1 shard + replica (scale đọc); enabled = nhiều shard (scale ghi/dữ liệu) — client phải cluster-aware. Câu "cache vượt RAM một node" → cluster mode enabled.</li>
<li><b>Aurora đọc sâu:</b> reader endpoint round-robin theo <i>kết nối</i>; custom endpoint nhóm reader theo mục đích (báo cáo vs API); replication lag hiển thị qua <code>AuroraReplicaLag</code>; RDS <b>Performance Insights</b> = trực quan hóa wait event (bản thân nó là Query Store thu nhỏ của AWS).</li>
</ul>
<div class="warn"><b>Bẫy sâu:</b> "DynamoDB chậm và RCU còn dư" → hot partition hoặc item to (400 KB đọc 1 item ăn 100 RCU strong); "thêm GSI xong bảng chính bị throttle ghi" → GSI under-provisioned. Cả hai đều không chữa bằng cách tăng capacity bảng chính.</div>
</section>

<section id="a3-4">
<h3>3.4 Network và ingestion — CloudFront, DX, Kinesis, Athena<a class="anch" href="#a3-4">#</a></h3>
<ul>
<li><b>CloudFront</b>: CDN cache nội dung tĩnh/động tại edge, origin là S3/ALB; ký URL/cookie cho nội dung riêng tư; kết hợp <b>OAC</b> để S3 chỉ cho CloudFront đọc.</li>
<li><b>Global Accelerator</b>: 2 anycast IP tĩnh, đẩy TCP/UDP qua backbone AWS tới endpoint gần nhất — chọn khi cần <b>IP tĩnh toàn cầu</b> hoặc app <b>không cache được</b> (game, VoIP); khác CloudFront ở chỗ không cache.</li>
<li><b>Direct Connect</b>: đường riêng on-prem ↔ AWS, băng thông ổn định, độ trễ thấp, <b>triển khai mất nhiều tuần</b>; Site-to-Site VPN qua internet dựng trong phút, mã hóa sẵn — cần nhanh thì VPN trước, DX sau, VPN làm dự phòng cho DX.</li>
<li><b>Kinesis Data Streams</b>: ingest thời gian thực theo shard, replay được; <b>Data Firehose</b>: gần-thời-gian-thực, <b>không quản shard</b>, đổ thẳng vào S3/Redshift/OpenSearch — "cách ít vận hành nhất để đưa stream vào S3".</li>
<li><b>Athena</b>: SQL trực tiếp trên S3, serverless, trả tiền theo dữ liệu quét (nén + Parquet + partition để rẻ); <b>Glue</b> = catalog + ETL serverless.</li>
</ul>
<div class="warn">CloudFront vs Global Accelerator là cặp distractor ưa thích: <b>cache nội dung HTTP → CloudFront; IP tĩnh, TCP/UDP, không cache → Global Accelerator</b>.</div>

<ul>
<li><b>Con số phải nhớ:</b> Kinesis Data Streams mỗi shard <b>1 MB/s ghi (1.000 record/s) · 2 MB/s đọc</b>; enhanced fan-out cho mỗi consumer 2 MB/s riêng; on-demand mode tự quản shard. Firehose buffer theo <i>kích thước hoặc thời gian</i> (tối thiểu ~60 giây/1 MB) — "gần-real-time" chứ không real-time. Site-to-Site VPN ~<b>1,25 Gbps/tunnel</b>; Direct Connect 1/10/100 Gbps dedicated (50 Mbps+ qua partner).</li>
<li><b>CloudFront dưới nắp:</b> cache key do <b>cache policy</b> quyết định (header/cookie/query nào tham gia) — cache hit thấp thường vì key chứa cookie thừa; <b>origin shield</b> thêm một lớp cache tập trung giảm tải origin; signed URL (một file) vs signed cookie (nhiều file/khu vực); field-level encryption cho dữ liệu nhạy cảm.</li>
<li><b>Direct Connect chi tiết thi:</b> ba loại VIF — private (vào VPC qua VGW/DXGW), transit (vào Transit Gateway), public (dịch vụ public AWS như S3 qua IP public); DX <b>không mã hóa</b> mặc định → cần mã hóa thì chạy VPN <i>trên</i> DX hoặc MACsec. Resilience: hai DX ở hai location > DX + VPN backup > một DX.</li>
<li><b>Athena tối ưu tiền = tối ưu byte quét:</b> Parquet + nén + partition (+ <b>partition projection</b> khỏi cần MSCK REPAIR) và <code>SELECT</code> đúng cột; Glue crawler sinh schema vào Data Catalog — bộ ba S3 + Glue + Athena là "data lake không hạ tầng".</li>
<li><b>Kinesis vs SQS chọn nhanh:</b> cần replay/nhiều consumer đọc cùng dữ liệu/thứ tự theo key → Kinesis; cần queue việc-làm-một-lần → SQS. Cần đổ thẳng vào S3/Redshift/OpenSearch không code → Firehose.</li>
</ul>
</section>

<section id="a3-5">
<h3>3.5 S3 chuyên sâu — một dịch vụ, năm mặt trận<a class="anch" href="#a3-5">#</a></h3>
<p>S3 xuất hiện ở cả 4 domain. Mục này gom trọn những gì chưa nằm ở các mục khác (class/lifecycle → 4.1, mã hóa → 1.4, replication → 2.5, prefix/multipart → 3.1).</p>
<ul>
<li><b>Consistency:</b> S3 giờ là <b>strong read-after-write cho mọi thao tác</b> (PUT mới, ghi đè, xóa, LIST) — các đề cũ nói "eventual cho overwrite" đã hết đúng; distractor dựa trên kiến thức cũ vẫn xuất hiện.</li>
<li><b>Presigned URL dưới nắp:</b> URL mang chữ ký SigV4 của <i>người tạo</i> — ai cầm URL có đúng quyền của người ký, sống tối đa <b>7 ngày</b> (ký bằng IAM user; ký bằng credential tạm của role thì chết theo session). Mẫu chuẩn upload trực tiếp từ trình duyệt: client xin presigned PUT từ backend → PUT thẳng lên S3, khỏi đi qua server.</li>
<li><b>Event notification:</b> ba đích cổ điển SNS/SQS/Lambda + <b>EventBridge</b> (bật một công tắc, filter mạnh hơn, nhiều đích hơn) — mẫu "xử lý file mới upload" của AWS, song song với mẫu Event Grid bên Azure.</li>
<li><b>Static website hosting:</b> endpoint website chỉ HTTP — muốn HTTPS + domain riêng: <b>CloudFront + OAC</b> đứng trước, bucket khóa private. Đề thấy "trang tĩnh + HTTPS" là bộ ba S3 + CloudFront + ACM.</li>
<li><b>Truy vấn tại chỗ:</b> S3 Select lấy phần dữ liệu trong một object (CSV/JSON/Parquet) bằng SQL — giảm byte tải về; khác Athena (truy vấn <i>nhiều</i> object). <b>Batch Operations</b> chạy một thao tác trên hàng tỷ object theo manifest — "gắn tag lại 500 triệu object" không phải viết vòng lặp.</li>
<li><b>Access point:</b> mỗi ứng dụng một access point với policy riêng thay vì một bucket policy khổng lồ; Multi-Region Access Point định tuyến tới bucket gần nhất.</li>
<li><b>Requester Pays:</b> bên tải dữ liệu trả phí transfer — dataset công khai dung lượng lớn.</li>
</ul>
<div class="warn"><b>Bẫy hay gặp:</b> bucket name toàn cầu duy nhất và <b>không đổi tên được</b>; xóa bucket phải rỗng (kể cả version cũ — lý do lifecycle expire noncurrent version quan trọng); "5.500 GET/prefix" là <i>mỗi prefix</i> — đề cho throughput lớn hơn thì câu trả lời là chia prefix, không phải "nâng cấp bucket".</div>
</section>

<section id="a3-6">
<h3>3.6 EC2 chuyên sâu — AMI, metadata, vòng đời<a class="anch" href="#a3-6">#</a></h3>
<ul>
<li><b>AMI dưới nắp:</b> = EBS snapshot + metadata khởi động. Golden AMI (nướng sẵn phần mềm) khởi động nhanh hơn user data cài lúc boot — thi hay hỏi "giảm thời gian scale-out": golden AMI qua <b>EC2 Image Builder</b>, thay vì script dài trong user data. AMI thuộc region — dùng nơi khác phải copy.</li>
<li><b>User data vs metadata:</b> user data = script chạy <b>một lần lúc boot đầu</b> (mặc định; chạy lại phải cấu hình cloud-init); instance metadata ở <code>http://169.254.169.254</code> — <b>IMDSv2</b> bắt buộc lấy token trước (chống SSRF đọc trộm credential của role) — "enforce IMDSv2" là đáp án bảo mật chuẩn.</li>
<li><b>Instance store vs EBS:</b> instance store là đĩa NVMe <i>gắn vật lý</i> — nhanh nhất, nhưng <b>stop/terminate là mất sạch</b> (reboot thì còn); chỉ hợp cache/scratch/buffer có thể tái tạo. EBS bền, snapshot được, nhưng đi qua mạng.</li>
<li><b>Vòng đời:</b> stop (không tính tiền compute, EBS vẫn tính, IP public thay đổi trừ khi Elastic IP) · hibernate (giữ RAM) · terminate (mất instance store + EBS nếu DeleteOnTermination). <b>Status check 2 tầng:</b> system check fail (lỗi phần cứng AWS) → stop/start để đổi host; instance check fail (OS treo) → reboot. Auto-recovery bằng CloudWatch alarm action.</li>
<li><b>Elastic IP:</b> tính tiền khi <i>không</i> gắn vào instance chạy — "địa chỉ tĩnh cho whitelist" đúng, nhưng giữ EIP thừa là mất tiền; ENI thứ hai giữ IP riêng khi failover kiểu cũ.</li>
<li><b>Spot + ASG ôn lại từ góc EC2:</b> capacity rebalance nhận tín hiệu sắp bị đòi để chủ động thay máy trước 2 phút định mệnh.</li>
</ul>
<div class="tip"><b>Chẩn đoán nhanh theo triệu chứng:</b> boot xong script không chạy → user data chỉ chạy boot đầu · app đọc metadata bị 401 → thiếu token IMDSv2 · sau stop/start mất IP → không gắn Elastic IP · đĩa NVMe trống sau stop → đó là instance store.</div>
</section>

<section id="a3-7">
<h3>3.7 Database chuyên sâu — RDS, Aurora, DynamoDB và bản đồ purpose-built<a class="anch" href="#a3-7">#</a></h3>
<ul>
<li><b>Aurora dưới nắp:</b> compute tách khỏi storage — storage là lớp riêng tự nhân <b>6 bản trên 3 AZ</b>, tự vá, tự scale tới 128 TB; ghi được xác nhận khi 4/6 bản nhận (quorum). Vì storage chung nên replica <i>không copy dữ liệu</i> (lag mili-giây) và failover chỉ là "đổi ai làm writer" (~30 giây). <b>Backtrack</b> (MySQL) tua lui cluster vài giờ không cần restore — "lỡ chạy UPDATE thiếu WHERE" → backtrack, nhanh hơn PITR.</li>
<li><b>RDS vận hành:</b> storage autoscaling chỉ <b>tăng</b> không giảm; maintenance window vs backup window là hai thứ khác nhau; nâng instance class = downtime ngắn (Multi-AZ thì failover trước, nâng standby); tham số qua parameter group (static cần reboot), extension/tùy chọn qua option group.</li>
<li><b>DynamoDB phần nâng cao:</b> <b>global tables</b> = multi-region active-active (last-writer-wins theo timestamp — chấp nhận được cho profile, cẩn thận cho tiền); transactions (TransactWriteItems ≤100 item, tốn 2× WCU); <b>PITR</b> 35 ngày; export sang S3 không ăn RCU (phân tích bằng Athena); Streams giữ 24 giờ.</li>
<li><b>Bản đồ purpose-built — đề cho use case, chọn database:</b>
<table><thead><tr><th>Tín hiệu trong đề</th><th>Dịch vụ</th></tr></thead><tbody>
<tr><td>Quan hệ, SQL, giao dịch</td><td>RDS / Aurora</td></tr>
<tr><td>Key-value scale vô hạn, độ trễ ms ổn định</td><td>DynamoDB</td></tr>
<tr><td>Đồ thị quan hệ (mạng xã hội, fraud ring)</td><td>Neptune</td></tr>
<tr><td>Time series (IoT, metric)</td><td>Timestream</td></tr>
<tr><td>Tương thích MongoDB</td><td>DocumentDB</td></tr>
<tr><td>Tương thích Cassandra</td><td>Keyspaces</td></tr>
<tr><td>Redis bền (durable, Multi-AZ) làm primary store</td><td>MemoryDB</td></tr>
<tr><td>Sổ cái bất biến, chứng minh được lịch sử</td><td>QLDB / ledger</td></tr>
<tr><td>Warehouse phân tích cột, BI</td><td>Redshift</td></tr>
</tbody></table></li>
<li><b>Di trú:</b> <b>DMS</b> chuyển dữ liệu (full load + CDC cho gần-zero downtime — họ hàng của DMS bên Azure), <b>SCT</b> chuyển schema khi đổi engine (Oracle → Aurora PostgreSQL); cặp DMS+SCT là combo "thoát Oracle" kinh điển của đề.</li>
</ul>
<div class="warn"><b>Bẫy hay gặp:</b> Aurora replica và RDS read replica khác bản chất (shared storage vs copy bất đồng bộ) — câu "lag gần 0" chỉ Aurora làm được; DynamoDB global tables không phải backup (lỗi logic nhân bản đi mọi region) — backup vẫn là PITR/on-demand.</div>
</section>

<h2 class="dom">Domain 4 — Design Cost-Optimized Architectures</h2>

<section id="a4-1">
<h3>4.1 Chi phí storage — S3 class, lifecycle, Glacier<a class="anch" href="#a4-1">#</a></h3>
<table>
<thead><tr><th>Class</th><th>Chọn khi</th><th>Cần nhớ</th></tr></thead>
<tbody>
<tr><td><b>Standard</b></td><td>Truy cập thường xuyên</td><td>Không phí lấy dữ liệu</td></tr>
<tr><td><b>Standard-IA / One Zone-IA</b></td><td>Ít truy cập nhưng cần ngay</td><td>Rẻ hơn ~40%; tính phí lấy theo GB; One Zone chỉ 1 AZ — dữ liệu tái tạo được</td></tr>
<tr><td><b>Intelligent-Tiering</b></td><td><b>Không đoán được</b> tần suất truy cập</td><td>Tự chuyển tier theo hành vi, không phí lấy, phí giám sát nhỏ theo object</td></tr>
<tr><td><b>Glacier Instant / Flexible / Deep Archive</b></td><td>Lưu trữ dài hạn</td><td>Instant lấy ms; Flexible phút–giờ; Deep Archive rẻ nhất, lấy ~12 giờ, tối thiểu 180 ngày</td></tr>
</tbody></table>
<div class="tip">Lifecycle rule chuyển class theo tuổi object và xóa bản cũ/multipart dở dang. Đề nói "pattern truy cập không dự đoán được" → <b>Intelligent-Tiering</b>; "quy định giữ 7 năm, hiếm khi đọc" → <b>Deep Archive</b>.</div>

<ul>
<li><b>Luật thời gian tối thiểu (hay bị hỏi ngược):</b> Standard-IA/One Zone-IA tính tối thiểu <b>30 ngày</b>; Glacier Instant <b>90 ngày</b>; Flexible <b>90 ngày</b>; Deep Archive <b>180 ngày</b> — xóa/chuyển sớm vẫn trả đủ. IA còn <b>phí tối thiểu 128 KB</b>/object: hàng triệu file nhỏ chuyển sang IA có thể <i>đắt hơn</i> Standard — bẫy chi phí kinh điển.</li>
<li><b>Thời gian lấy dữ liệu:</b> Glacier Instant = mili-giây; Flexible: expedited 1–5 phút / standard 3–5 giờ / bulk 5–12 giờ (rẻ nhất); Deep Archive: standard ~12 giờ / bulk ~48 giờ. Đề cho "cần trong X giờ" là map thẳng vào bảng này.</li>
<li><b>Lifecycle làm được nhiều hơn chuyển class:</b> xóa noncurrent version sau N ngày (bucket versioning phình vì bản cũ — rất hay gặp), dọn <b>incomplete multipart upload</b> (tiền ẩn phổ biến nhất của S3), expire object hết hạn.</li>
<li><b>Intelligent-Tiering chi tiết:</b> phí giám sát nhỏ theo object (nên object &lt;128 KB không được giám sát), tự xuống IA sau 30 ngày không đụng, Archive Instant sau 90; hai tier Archive/Deep Archive <i>tùy chọn</i> phải bật. <b>S3 Storage Lens</b> = dashboard chỉ ra bucket nào đáng tối ưu — bước "đo trước khi chỉnh" của storage.</li>
</ul>
</section>

<section id="a4-2">
<h3>4.2 Chi phí compute — RI, Savings Plans, Spot<a class="anch" href="#a4-2">#</a></h3>
<table>
<thead><tr><th>Mô hình</th><th>Chọn khi</th><th>Cần nhớ</th></tr></thead>
<tbody>
<tr><td><b>On-Demand</b></td><td>Tải không đoán được, ngắn hạn</td><td>Đắt nhất, linh hoạt nhất</td></tr>
<tr><td><b>Savings Plans</b></td><td>Cam kết $/giờ trong 1–3 năm</td><td>Compute SP phủ cả EC2/Fargate/Lambda, đổi family/region thoải mái — thường là đáp án "giảm chi phí cho tải nền ổn định" hiện đại</td></tr>
<tr><td><b>Reserved Instance</b></td><td>Cam kết instance cụ thể</td><td>Standard rẻ hơn Convertible; RDS/ElastiCache/Redshift cũng có RI</td></tr>
<tr><td><b>Spot</b></td><td>Chịu được gián đoạn (batch, CI, render)</td><td>Rẻ tới 90%, bị đòi lại với <b>báo trước 2 phút</b> — tuyệt đối không cho web production một mình</td></tr>
</tbody></table>
<div class="tip"><b>Right-sizing</b>: đo bằng CloudWatch + khuyến nghị của <b>Compute Optimizer</b> trước, rồi mới cam kết RI/SP. Kiến trúc chuẩn chi phí: nền ổn định chạy SP/RI, đỉnh tải scale bằng On-Demand/Spot.</div>

<ul>
<li><b>Bản đồ cam kết:</b> Compute Savings Plans (linh hoạt nhất: mọi family/region/OS + Fargate + Lambda, giảm tới ~66%) · EC2 Instance SP (khóa family trong region, giảm sâu hơn) · Standard RI (giảm tới ~72% cho 3 năm trả trước, bán lại được trên Marketplace) · Convertible RI (đổi family được, giảm ít hơn). Thi hay hỏi: "linh hoạt đổi family + phủ Fargate" → Compute SP; "giảm sâu nhất cho workload cố định" → Standard RI 3 năm.</li>
<li><b>Spot dưới nắp:</b> giá theo cung-cầu từng <i>pool</i> (instance type × AZ); đòi máy báo trước <b>2 phút</b> qua instance metadata/EventBridge; hành vi gián đoạn chọn được: terminate / stop / <b>hibernate</b>. Chiến thuật đúng: <b>đa dạng hóa pool</b> (nhiều type nhiều AZ) bằng ASG mixed instances policy + allocation strategy <code>price-capacity-optimized</code> — một pool cạn không sập cả fleet.</li>
<li><b>Trình tự chuẩn (đã học ở mục sắp xếp):</b> tag + Cost Explorer đo → right-size theo Compute Optimizer (nó nhìn CloudWatch 14 ngày, khuyến nghị cả Graviton) → cam kết SP/RI cho phần nền → Spot cho phần chịu gián đoạn → Budgets canh giữ.</li>
</ul>
<div class="warn"><b>Bẫy sâu:</b> Savings Plans/RI là cam kết <b>chi tiêu theo giờ</b>, không phải "giảm giá tự nhiên" — mua thừa là trả tiền cho $/giờ không dùng; và SP <b>không phủ RDS</b> (RDS có RI riêng) — đã ra đề ở DP-300 lẫn SAA.</div>
</section>

<section id="a4-3">
<h3>4.3 Chi phí database — DynamoDB capacity, Aurora Serverless<a class="anch" href="#a4-3">#</a></h3>
<ul>
<li><b>DynamoDB on-demand</b>: trả theo request, cho tải <b>thất thường/không đoán được</b>; <b>provisioned + auto scaling</b>: rẻ hơn đáng kể khi tải <b>đều và dự đoán được</b>, kết hợp reserved capacity càng rẻ.</li>
<li><b>Aurora Serverless v2</b>: scale ACU theo tải, hợp môi trường dev/test, tải theo mùa, SaaS nhiều tenant thưa — "database chỉ bận vài giờ mỗi ngày" là tín hiệu chọn nó.</li>
<li>RDS dừng được instance dev/test (tối đa 7 ngày mỗi lần); snapshot rồi xóa instance là cách rẻ nhất cho DB "để dành".</li>
</ul>
<div class="warn">Chiều bẫy đảo: tải <b>đều đặn cao</b> mà chọn DynamoDB on-demand là <b>đắt hơn</b> provisioned nhiều lần — on-demand không phải lúc nào cũng rẻ.</div>

<ul>
<li><b>Break-even on-demand vs provisioned của DynamoDB:</b> on-demand đắt hơn ~5–7× trên mỗi request — tải <b>đều và dự đoán được</b> thì provisioned + auto scaling rẻ hơn nhiều; on-demand thắng khi tải thưa/đột biến không đoán được hoặc bảng mới chưa có số liệu. Reserved capacity giảm thêm cho provisioned ổn định. Chiến lược trưởng thành: bảng mới chạy on-demand để đo → chuyển provisioned khi pattern rõ.</li>
<li><b>Aurora Serverless v2:</b> scale bằng <b>ACU</b> (0.5 ACU bước nhảy, mỗi ACU ~2 GB RAM), scale không gián đoạn kết nối, và hỗ trợ auto-pause về 0 cho môi trường ngủ nhiều; trộn được instance serverless + provisioned trong cùng cluster (reader serverless "co giãn" cạnh writer cố định).</li>
<li><b>RDS tiết kiệm nhanh:</b> stop instance dev/test (tối đa 7 ngày mỗi lần, storage vẫn tính) · snapshot rồi xóa cho DB "để dành" · storage autoscaling tránh mua thừa trước · single-AZ cho dev (Multi-AZ chỉ production).</li>
<li><b>DynamoDB Standard-IA table class</b>: bảng ít truy cập nhưng nhiều dữ liệu — storage rẻ hơn ~60%, request đắt hơn; đúng cho log/lịch sử giữ lâu.</li>
</ul>
</section>

<section id="a4-4">
<h3>4.4 Chi phí network và quản trị — NAT, endpoint, Cost Explorer<a class="anch" href="#a4-4">#</a></h3>
<ul>
<li><b>NAT Gateway</b> tính phí giờ + theo GB xử lý — instance private đổ dữ liệu lớn lên S3 qua NAT là đốt tiền; thay bằng <b>gateway VPC endpoint (miễn phí)</b> là câu giảm chi phí kinh điển.</li>
<li>Data transfer: vào AWS miễn phí; ra internet tính tiền; <b>giữa AZ cũng tính tiền</b> hai chiều — đặt app cùng AZ với DB khi hợp lý. CloudFront giúp giảm phí data ra vì cache ở edge.</li>
<li><b>Cost Explorer</b> = nhìn và dự báo chi phí; <b>Budgets</b> = đặt ngưỡng và cảnh báo (kể cả theo usage/RI coverage); <b>CUR</b> = báo cáo chi tiết nhất đổ vào S3/Athena; <b>cost allocation tag</b> = chia chi phí theo team/dự án.</li>
<li><b>Trusted Advisor</b> nêu khuyến nghị chi phí/bảo mật/giới hạn; đầy đủ nhất ở Business/Enterprise support.</li>
</ul>
<div class="tip">Nguồn đối chiếu: exam guide SAA-C03 và trang chứng chỉ trên aws.amazon.com, đọc ngày 21/08/2026 — đề 65 câu (50 tính điểm), 130 phút, thang 100–1.000, đạt 720.</div>

<ul>
<li><b>Bản đồ phí data transfer (nguồn mất tiền âm thầm số một):</b> vào AWS = miễn phí · ra internet = tính theo GB · <b>giữa AZ = tính cả hai chiều</b> (private IP vẫn tính) · cùng AZ = miễn phí · qua NAT Gateway = phí giờ + phí <i>xử lý</i> mỗi GB (cộng thêm data transfer nếu ra internet) · qua gateway endpoint S3/DynamoDB = <b>miễn phí</b> · CloudFront → user: rẻ hơn EC2 → user, và origin fetch từ S3 qua CloudFront miễn phí data-out.</li>
<li><b>Ba đòn giảm phí mạng kinh điển:</b> (1) gateway endpoint thay NAT cho S3/DynamoDB; (2) đặt chatty services cùng AZ (đánh đổi HA có tính toán); (3) CloudFront trước nội dung tĩnh. Interface endpoint (PrivateLink) <i>có phí</i> giờ + GB — rẻ hơn NAT cho traffic dịch vụ AWS nhưng không miễn phí như gateway endpoint.</li>
<li><b>Bộ công cụ quản trị phân vai:</b> Cost Explorer (nhìn + forecast, RI/SP recommendations) · Budgets (ngưỡng + <b>Budget Actions</b> tự áp SCP/dừng EC2 khi vượt — "tự hành động" là từ khóa) · CUR đổ S3 + Athena (chi tiết nhất, chia theo tag) · Cost Anomaly Detection (ML báo bất thường) · Trusted Advisor (khuyến nghị; đầy đủ ở Business/Enterprise support).</li>
<li><b>Tag discipline:</b> cost allocation tag phải được <b>kích hoạt</b> trong Billing console mới xuất hiện trong báo cáo; tag policy + SCP ép tag lúc tạo — "chi phí theo team" luôn bắt đầu từ tag, không có tag là không có báo cáo.</li>
</ul>
</section>
`,s=t({__name:"AwsNotesPage",setup(a){return(o,r)=>(e(),i(n,{certId:"aws",html:h(c),title:"AWS Solutions Architect",subtitle:"23 mục — 4 domain SAA-C03, trọng số 30 · 26 · 24 · 20%",practiceRoute:"/aws-saa/practice",practiceLabel:"Luyện thi SAA"},null,8,["html"]))}});export{s as default};
