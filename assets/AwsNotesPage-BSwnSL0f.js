import{_ as n}from"./NotesPage.vue_vue_type_script_setup_true_lang-DS0gY-Pl.js";import{d as t,f as i,e,o as c}from"./index-Caq89Rkd.js";import"./ThemeToggle.vue_vue_type_script_setup_true_lang-CvivrwVV.js";import"./useStudyClock-CtWP2Vh4.js";const h=`<h2 class="dom">Domain 1 — Design Secure Architectures</h2>

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

<p><b>Cơ chế bên trong — trình tự đánh giá quyền:</b> mọi request đi qua đúng một chuỗi: <b>explicit deny</b> (ở bất kỳ policy nào — thắng tất cả) → <b>SCP</b> của Organizations (trần cứng) → <b>resource-based policy</b> → <b>permissions boundary</b> (nếu có) → <b>identity-based policy</b>. Không có allow nào ở tầng identity/resource thì mặc định deny. Nhớ chuỗi này là giải được mọi câu "vì sao vẫn bị AccessDenied dù đã allow".</p>
<ul>
<li><b>STS AssumeRole dưới nắp:</b> gọi <code>sts:AssumeRole</code> trả về bộ ba access key + secret + session token <b>tạm thời</b> (mặc định 1 giờ, đặt được tới 12 giờ; riêng role chaining bị khóa trần 1 giờ). Instance profile chỉ là "vỏ" gắn role vào EC2 — SDK tự lấy credential từ instance metadata (IMDSv2 dùng token, bắt buộc bật để chống SSRF).</li>
<li><b>ExternalId</b> trong trust policy giải bài <i>confused deputy</i>: bên thứ ba (SaaS giám sát) assume role của bạn phải trình đúng ExternalId — thiếu nó, kẻ khác cùng dùng SaaS đó có thể mượn danh. Thấy "third party cần truy cập account" trong đề → ExternalId.</li>
<li><b>Permissions boundary vs SCP:</b> boundary gắn cho <i>một</i> user/role (trần của riêng nó — dùng khi cho dev tự tạo role); SCP áp cho <i>cả account/OU</i>. Cả hai đều không tự cấp quyền.</li>
<li><b>IAM Access Analyzer</b> quét resource policy tìm quyền cấp ra ngoài account/tổ chức; <b>credential report</b> + <code>aws iam get-account-authorization-details</code> phục vụ audit định kỳ.</li>
</ul>
<div class="tip"><b>CLI hay gặp:</b> <code>aws sts get-caller-identity</code> (mình đang là ai — bước đầu của mọi phiên debug quyền), <code>aws sts assume-role --role-arn ... --external-id ...</code>, <code>aws iam simulate-principal-policy</code> (giả lập xem một hành động được phép không — đáp án cho "kiểm tra quyền mà không thử thật").</div>
<p><b>Shared responsibility model — chia việc theo loại dịch vụ:</b> AWS lo security <i>OF</i> the cloud (data center, phần cứng, mạng vật lý, host OS và lớp ảo hóa); khách lo security <i>IN</i> the cloud. Dịch vụ càng "managed" thì phần của khách càng mỏng, nhưng <b>dữ liệu, IAM, cấu hình truy cập mạng và lựa chọn mã hóa luôn là việc của khách</b>.</p>
<table>
<thead><tr><th>Dịch vụ</th><th>AWS lo</th><th>Khách lo</th></tr></thead>
<tbody>
<tr><td><b>EC2</b> (IaaS)</td><td>Host vật lý, hypervisor, mạng của AWS</td><td><b>Guest OS và vá OS</b>, phần mềm tự cài, Security Group, IAM role, mã hóa EBS, dữ liệu</td></tr>
<tr><td><b>RDS</b> (managed)</td><td>Thêm: <b>vá OS</b> của máy DB và <b>nâng/vá DB engine</b> (lên lịch trong maintenance window), backup tự động, nhân bản Multi-AZ</td><td>Security Group, IAM, user và quyền <i>bên trong</i> DB, bật mã hóa at-rest + TLS, parameter group, dữ liệu</td></tr>
<tr><td><b>Lambda / S3 / DynamoDB</b> (abstracted)</td><td>Thêm: OS, nền tảng, scale; Lambda <b>tự vá managed runtime</b> (chế độ Auto mặc định)</td><td>Code và thư viện đóng gói kèm, execution role / bucket policy, phân loại dữ liệu, tùy chọn mã hóa. Function deploy dạng <b>container image</b> thì khách phải <b>build lại image</b> từ base image mới để nhận bản vá runtime</td></tr>
</tbody></table>
<ul>
<li><b>Shared control</b> (cả hai cùng làm ở tầng của mình): patch management (AWS vá hạ tầng, khách vá guest OS và app), configuration management, đào tạo nhận thức. <b>Inherited control</b>: khách thừa hưởng nguyên từ AWS, vd kiểm soát vật lý và môi trường của data center.</li>
</ul>
<div class="warn"><b>Bẫy hay gặp:</b> "Ai vá OS?" — EC2 là khách, RDS là AWS. Nhưng chuyển sang RDS <b>không</b> chuyển việc mở Security Group, tạo user DB hay bật mã hóa sang AWS.</div>
<p class="src"><b>Nguồn:</b> <a href="https://aws.amazon.com/compliance/shared-responsibility-model/" target="_blank" rel="noopener">AWS Shared Responsibility Model</a> · <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html" target="_blank" rel="noopener">RDS — maintaining a DB instance</a> · <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html" target="_blank" rel="noopener">Lambda runtime updates</a>, đọc ngày 23/10/2026.</p>
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

<p><b>Cơ chế bên trong — vì sao SG "stateful":</b> SG duy trì <b>bảng connection tracking</b>: gói đi ra thuộc kết nối đã được cho vào thì tự động được phép, bất kể rule outbound. NACL không có bảng đó — mỗi gói xét độc lập, nên chiều trả lời phải tự mở dải <b>ephemeral port 1024–65535</b> (đề rất thích hỏi dải này).</p>
<ul>
<li><b>Con số phải nhớ:</b> mặc định tối đa 5 SG mỗi ENI, 60 rule inbound + 60 outbound mỗi SG (nới được qua quota); NACL 20 rule mỗi chiều mặc định. SG không có deny, NACL xét theo số thứ tự từ nhỏ tới lớn, khớp là dừng.</li>
<li><b>VPC Flow Logs</b> ghi metadata (ACCEPT/REJECT, IP, port) chứ không ghi nội dung gói — đáp án cho "vì sao kết nối bị chặn, SG hay NACL?": REJECT ở flow log + SG không có deny → thủ phạm là NACL hoặc route.</li>
<li><b>WAF dưới nắp:</b> web ACL chấm theo <b>WCU</b> (mỗi rule tốn một số WCU, trần mặc định 1.500); rule xét theo priority, khớp terminating action (allow/block) là dừng; <b>rate-based rule</b> đếm theo IP trong cửa sổ 5 phút. Shield Advanced thêm đội SRT, bảo vệ tầng 3/4 nâng cao và <b>bảo hiểm chi phí scale do DDoS</b> — từ khóa "cost protection" chỉ về nó.</li>
<li><b>SSM Session Manager cần đủ ba thứ:</b> SSM Agent trên máy, instance profile có policy <code>AmazonSSMManagedInstanceCore</code>, và đường tới SSM endpoint (internet qua NAT hoặc 3 interface VPC endpoint ssm/ssmmessages/ec2messages cho private subnet kín). Thiếu bất kỳ cái nào là instance "Not connected" — câu troubleshoot kinh điển.</li>
</ul>
<div class="warn"><b>Bẫy sâu:</b> SG reference SG khác theo <i>membership</i> chứ không theo IP — instance đổi IP không phá rule; nhưng reference <b>không xuyên region</b>, và peering chỉ reference được SG cùng region.</div>
<p><b>Lọc traffic ở tầng VPC và quản lý tường lửa tập trung:</b></p>
<table>
<thead><tr><th>Dịch vụ</th><th>Làm gì</th><th>Đặc điểm phân biệt</th></tr></thead>
<tbody>
<tr><td><b>AWS Network Firewall</b></td><td>Tường lửa <b>stateful</b> managed + IDS/IPS cho cả VPC, lọc traffic qua IGW, NAT GW, VPN, Direct Connect</td><td>Rule stateless + stateful, rule tương thích <b>Suricata</b>, <b>lọc theo tên miền</b> (domain list), deep packet inspection, nhận diện giao thức bất kể port</td></tr>
<tr><td><b>AWS Firewall Manager</b></td><td>Đặt chính sách bảo vệ <b>một lần</b> cho mọi account trong Organization, tự áp cho account/tài nguyên mới</td><td>Quản lý WAF, Shield Advanced, Security Group, NACL, Network Firewall, Route 53 Resolver DNS Firewall, firewall bên thứ ba</td></tr>
<tr><td><b>Gateway Load Balancer</b></td><td>Chạy <b>appliance bên thứ ba</b> (firewall, IDS/IPS của vendor) trong suốt, scale và HA</td><td>Tầng 3, nghe mọi gói IP mọi port; trao đổi với appliance bằng <b>GENEVE port 6081</b> (UDP); GWLB endpoint làm next hop trong route table</td></tr>
</tbody></table>
<ul>
<li><b>Network Firewall cài thế nào:</b> tạo một <b>firewall subnet</b> riêng ở mỗi AZ — firewall endpoint (một VPC endpoint) nằm ở đó và <b>không lọc được traffic của chính subnet chứa nó</b>, nên đừng đặt workload vào firewall subnet. Firewall không tự chặn gì cho tới khi <b>sửa route table</b> để traffic đi vòng qua endpoint (một AZ, có IGW):
  <ul>
  <li>Route table <b>subnet workload</b>: <code>0.0.0.0/0 → firewall endpoint (vpce-…)</code> (trước đó trỏ thẳng IGW).</li>
  <li>Route table <b>firewall subnet</b>: <code>0.0.0.0/0 → Internet Gateway</code>.</li>
  <li>Route table gắn vào <b>IGW</b> (edge association) cho chiều về: <code>CIDR subnet workload → firewall endpoint</code>.</li>
  </ul></li>
<li>Gói vào endpoint đi qua <b>engine stateless trước</b> (xét từng gói), rồi được chuyển sang <b>engine stateful</b> (xét theo luồng: Suricata, domain list, 5-tuple). Domain list xem tên miền trong HTTP Host header / TLS SNI — đáp án cho "chỉ cho instance ra các domain được duyệt". Endpoint mỗi AZ phục vụ AZ đó; dùng endpoint AZ khác thì tốn phí cross-AZ.</li>
<li><b>Firewall Manager tiên quyết:</b> account phải thuộc <b>AWS Organizations</b> (all features), chỉ định một <b>Firewall Manager administrator account</b>, và <b>bật AWS Config</b> ở các account/region cần bảo vệ (chính sách Network Firewall/DNS Firewall còn cần chia sẻ qua RAM). Chi phí tính theo dịch vụ bên dưới (WAF, Config…). Shield Advanced chỉ cần khi dùng chính sách Shield Advanced.</li>
<li><b>GWLB vs Network Firewall:</b> đề bắt dùng sản phẩm firewall của vendor (Palo Alto, Fortinet… từ Marketplace) → GWLB + appliance trong target group, GWLB endpoint ở VPC workload làm next hop; muốn tường lửa do AWS quản lý, không nuôi appliance → Network Firewall. GWLB giữ flow stickiness (mặc định 5-tuple) để chiều đi/về cùng một appliance.</li>
</ul>
<table>
<thead><tr><th>VPN</th><th>Nối cái gì</th><th>Cần nhớ</th></tr></thead>
<tbody>
<tr><td><b>Site-to-Site VPN</b></td><td><b>Mạng ↔ mạng</b>: văn phòng/data center ↔ VPC</td><td>IPsec qua internet; phía AWS là <b>virtual private gateway</b> (một VPC) hoặc <b>Transit Gateway</b> (nhiều VPC); phía khách khai <b>customer gateway</b>. Mỗi kết nối có <b>hai tunnel</b> để HA; mỗi tunnel chuẩn 1,25 Gbps. Dựng trong vài phút — khác Direct Connect mất hàng tuần</td></tr>
<tr><td><b>Client VPN</b></td><td><b>Từng người dùng ↔ AWS</b> (laptop ở nhà)</td><td>Managed, client <b>OpenVPN</b>, TLS; xác thực bằng Active Directory, <b>federated (SAML)</b> hoặc chứng chỉ (mutual); endpoint gắn vào subnet VPC (hoặc TGW), <b>authorization rule</b> theo nhóm AD/IdP quyết định ai vào mạng nào; port 443 hoặc 1194</td></tr>
</tbody></table>
<div class="warn"><b>Bẫy hay gặp:</b> Security Group không có rule theo tên miền và WAF chỉ gắn được ALB/CloudFront/API Gateway — "lọc egress theo domain cho cả VPC" là Network Firewall. "Nhân viên làm từ xa" là Client VPN, không phải Site-to-Site.</div>
<p class="src"><b>Nguồn:</b> <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html" target="_blank" rel="noopener">What is Network Firewall</a> · <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/arch-single-zone-igw.html" target="_blank" rel="noopener">Network Firewall — single zone với IGW</a> · <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html" target="_blank" rel="noopener">Firewall Manager</a> · <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-prereq.html" target="_blank" rel="noopener">Firewall Manager prerequisites</a> · <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/introduction.html" target="_blank" rel="noopener">Gateway Load Balancer</a> · <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html" target="_blank" rel="noopener">Site-to-Site VPN</a> · <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/what-is.html" target="_blank" rel="noopener">Client VPN</a>, đọc ngày 23/10/2026.</p>
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

<p><b>Cơ chế bên trong — hai pool của Cognito làm việc thế nào:</b> user pool xác thực xong trả <b>ba JWT</b>: id token (danh tính, claim), access token (gọi API), refresh token (mặc định 30 ngày — id/access mặc định 1 giờ). Identity pool cầm token đó (hoặc từ Google/Facebook/SAML) đổi lấy <b>credential AWS tạm qua STS</b> theo role gắn với "authenticated/unauthenticated" — đây là cây cầu từ "người dùng app" sang "quyền AWS".</p>
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

<p><b>Cơ chế bên trong — envelope encryption từng bước:</b> app gọi <code>GenerateDataKey</code> → KMS trả về data key <b>bản rõ</b> + <b>bản đã mã hóa bằng KMS key</b>. App mã hóa dữ liệu bằng bản rõ (rồi vứt nó khỏi RAM), lưu bản mã của data key <i>cạnh</i> dữ liệu. Giải mã = gửi bản mã data key cho KMS <code>Decrypt</code> → nhận bản rõ → giải dữ liệu. Vì vậy: dữ liệu lớn cỡ nào cũng được (KMS chỉ mã hóa data key), còn gọi <code>Encrypt</code> trực tiếp bị trần <b>4 KB</b> — cặp số bị hỏi thẳng.</p>
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
<p><b>Dịch vụ nào cho việc nào</b> — bảng phân vai mà distractor hay tráo:</p>
<table>
<thead><tr><th>Dịch vụ</th><th>Trả lời câu hỏi</th><th>Đặc điểm phân biệt</th></tr></thead>
<tbody>
<tr><td><b>GuardDuty</b></td><td>"Có ai đang tấn công / credential bị chiếm không?"</td><td>Phát hiện mối đe dọa bằng threat intel + ML. Bật lên là <b>tự đọc</b> CloudTrail management events, VPC Flow Logs và DNS logs — <b>không cần tự bật flow log hay DNS log</b>. Protection plan thêm: S3, EKS, RDS login, Lambda, malware…</td></tr>
<tr><td><b>Inspector</b></td><td>"Máy/image/function nào có lỗ hổng phần mềm?"</td><td>Quét <b>CVE</b> và network exposure cho <b>EC2, image trong ECR, Lambda</b>; tự phát hiện tài nguyên, tự quét lại khi cài gói mới hoặc có CVE mới</td></tr>
<tr><td><b>Security Hub</b> (Security Hub CSPM)</td><td>"Nhìn chung tư thế bảo mật ra sao, đạt chuẩn không?"</td><td><b>Gom finding</b> từ GuardDuty, Inspector, Macie, đối tác về một chỗ (định dạng ASFF); chấm theo chuẩn AWS FSBP, CIS, PCI DSS, NIST. Cần <b>bật AWS Config</b> để chạy hầu hết control</td></tr>
<tr><td><b>Detective</b></td><td>"Finding này gốc rễ từ đâu, lan tới đâu?"</td><td><b>Điều tra</b>: dựng <b>behavior graph</b> từ CloudTrail, VPC Flow Logs và finding GuardDuty, xem lại tới 1 năm dữ liệu</td></tr>
<tr><td><b>Macie</b></td><td>"S3 chứa dữ liệu nhạy cảm (PII) ở đâu?"</td><td>Chỉ cho <b>S3</b>: tìm PII/dữ liệu tài chính/credential bằng ML + pattern; kèm đánh giá bucket public/không mã hóa</td></tr>
<tr><td><b>Config</b></td><td>"Tài nguyên đang/từng cấu hình thế nào, có tuân thủ rule không?"</td><td>Lịch sử cấu hình + rule tuân thủ + remediation</td></tr>
<tr><td><b>CloudTrail</b></td><td>"Ai đã gọi API gì, lúc nào?"</td><td>Audit hành vi; data events phải bật riêng</td></tr>
<tr><td><b>Artifact</b></td><td>"Đưa kiểm toán báo cáo tuân thủ <i>của AWS</i>"</td><td>Tải tự phục vụ, miễn phí: báo cáo SOC, PCI, ISO…; xem/chấp nhận <b>agreement</b> với AWS (vd BAA cho HIPAA) cho một account hoặc cả tổ chức</td></tr>
</tbody></table>
<div class="tip"><b>Chuỗi phản xạ:</b> phát hiện → GuardDuty · lỗ hổng → Inspector · gom + chấm chuẩn → Security Hub · điều tra gốc rễ → Detective · PII trong S3 → Macie · báo cáo SOC/PCI của AWS → Artifact.</div>

<p><b>CloudHSM vs KMS — khi nào phải tự giữ HSM:</b></p>
<table>
<thead><tr><th></th><th>AWS KMS</th><th>AWS CloudHSM</th></tr></thead>
<tbody>
<tr><td>Mô hình</td><td>Managed, multi-tenant, AWS vận hành HSM</td><td>HSM <b>single-tenant</b> trong VPC của bạn; FIPS 140-2 hoặc 140-3 <b>Level 3</b> (cluster ở FIPS mode)</td></tr>
<tr><td>Ai kiểm soát key</td><td>Quyền qua key policy + IAM</td><td><b>Bạn</b> tự quản user và key trong HSM (ngoài IAM) — dữ liệu mã hóa đầu-cuối, AWS không nhìn thấy</td></tr>
<tr><td>Tích hợp</td><td>Tích hợp sẵn S3, EBS, RDS…</td><td>API chuẩn <b>PKCS#11, JCE, CNG/KSP</b> — chuyển app PKI on-prem lên ít sửa; tự import/export key, đủ loại symmetric/asymmetric</td></tr>
<tr><td>Vận hành</td><td>Không phải lo</td><td>Bạn tự lo số HSM, HA (cluster nhiều AZ), backup — đổi lấy toàn quyền</td></tr>
</tbody></table>
<ul>
<li><b>Custom key store kiểu CloudHSM</b> = lấy cả hai: tạo KMS key bình thường (dùng được với S3/EBS/RDS, key policy, CloudTrail) nhưng <b>key material sinh và nằm trong cluster CloudHSM của bạn</b>, mọi phép mã hóa chạy trên HSM đó. Cluster phải có <b>ít nhất hai HSM active ở hai AZ khác nhau</b>. Ngắt kết nối key store là KMS key không dùng được nữa.</li>
<li>Custom key store <b>không hỗ trợ</b>: automatic key rotation, key asymmetric, HMAC, key import, multi-Region key. Key nằm hẳn ngoài AWS → external key store (XKS).</li>
</ul>
<div class="warn"><b>Bẫy hay gặp:</b> "single-tenant HSM, công ty độc quyền kiểm soát key, FIPS Level 3" → CloudHSM, không phải KMS customer managed key. Nhưng "muốn key trong HSM riêng <i>và</i> dùng với S3/EBS như bình thường" → KMS custom key store, không phải trỏ thẳng S3 vào CloudHSM (S3 chỉ tích hợp với KMS).</div>
<p class="src"><b>Nguồn:</b> <a href="https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html" target="_blank" rel="noopener">GuardDuty</a> · <a href="https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html" target="_blank" rel="noopener">Inspector</a> · <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html" target="_blank" rel="noopener">Security Hub CSPM</a> · <a href="https://docs.aws.amazon.com/detective/latest/userguide/what-is-detective.html" target="_blank" rel="noopener">Detective</a> · <a href="https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html" target="_blank" rel="noopener">Macie</a> · <a href="https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html" target="_blank" rel="noopener">Artifact</a> · <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/introduction.html" target="_blank" rel="noopener">CloudHSM</a> · <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-cloudhsm.html" target="_blank" rel="noopener">KMS — CloudHSM key stores</a>, đọc ngày 23/10/2026.</p>
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

<section id="a1-7">
<h3>1.7 Quản trị nhiều account — Organizations, Control Tower, Identity Center, RAM, Directory Service<a class="anch" href="#a1-7">#</a></h3>
<p>Đề SAA-C03 coi "nhiều account" là mặc định của doanh nghiệp: tách account để cô lập bảo mật và chi phí, rồi dùng một lớp quản trị chung. Điểm ăn tiền: biết <b>dịch vụ nào đặt trần quyền</b> (SCP), <b>dịch vụ nào dựng sẵn cả môi trường</b> (Control Tower), <b>dịch vụ nào cho nhân viên đăng nhập</b> (Identity Center) và <b>dịch vụ nào chia tài nguyên</b> (RAM).</p>
<table>
<thead><tr><th>Dịch vụ</th><th>Giải bài gì</th><th>Cần nhớ</th></tr></thead>
<tbody>
<tr><td><b>AWS Organizations</b></td><td>Gom account vào một cây root → OU → account, chính sách chung, một hóa đơn</td><td>Một <b>management account</b> (payer, không đổi được) + member account; OU lồng tối đa 5 cấp dưới root; SCP chỉ có khi bật <b>all features</b></td></tr>
<tr><td><b>AWS Control Tower</b></td><td>Dựng sẵn <b>landing zone</b> nhiều account theo best practice, ít công nhất</td><td>Điều phối Organizations + Service Catalog + IAM Identity Center; có <b>Account Factory</b> và <b>controls</b> (guardrail)</td></tr>
<tr><td><b>IAM Identity Center</b></td><td>Nhân viên đăng nhập một lần vào nhiều account/app</td><td><b>Permission set</b> → Identity Center tự tạo IAM role trong từng account; nối IdP ngoài bằng <b>SAML 2.0 + SCIM</b></td></tr>
<tr><td><b>AWS Directory Service</b></td><td>Cần Active Directory cho workload Windows/LDAP trên AWS</td><td>AWS Managed Microsoft AD · AD Connector · Simple AD — chọn theo "có AD on-prem chưa, cần AD thật không"</td></tr>
<tr><td><b>AWS RAM</b></td><td>Chia một tài nguyên cho account khác dùng, không nhân bản</td><td>Subnet (VPC sharing), Transit Gateway, Route 53 Resolver rule, prefix list…</td></tr>
</tbody></table>

<p><b>Organizations và SCP — các quy tắc bị hỏi thẳng:</b></p>
<ul>
<li><b>SCP không cấp quyền</b>, chỉ đặt <b>trần</b>: quyền hiệu lực = giao của SCP với identity/resource policy. User không có IAM policy nào thì vẫn không làm được gì dù SCP cho phép hết. Mặc định mọi entity gắn <code>FullAWSAccess</code> — gỡ nó mà không thay bằng allow khác là mọi hành động ở member account đều fail.</li>
<li><b>SCP không bao giờ ảnh hưởng management account</b> — kể cả SCP gắn ở root. Vì vậy đừng chạy workload trong management account; giao việc cho <b>delegated administrator</b> (là member account nên vẫn chịu SCP).</li>
<li>SCP <b>có</b> áp lên <b>root user của member account</b> — cách duy nhất chặn được root user của account con (vd cấm tắt CloudTrail, cấm dùng region ngoài danh sách). IAM policy thì không chặn được root user.</li>
<li>SCP <b>không</b> ảnh hưởng <b>service-linked role</b> và không ảnh hưởng principal của account <i>ngoài</i> tổ chức (kể cả khi bucket policy trong tổ chức cho họ vào). Chặn phía tài nguyên thì dùng <b>RCP</b> (resource control policy).</li>
<li>Thứ hạng quyền: account chỉ có những gì <b>mọi</b> tầng cha (root → OU → account) đều cho phép; chặn ở bất kỳ tầng nào là mất.</li>
<li>Organization tạo ở chế độ <b>consolidated billing</b> thì không có SCP; muốn dùng phải <b>enable all features</b> — mọi member account được mời phải chấp thuận.</li>
<li><b>Consolidated billing</b> (gộp hóa đơn, gộp mức dùng để hưởng bậc giá, chia sẻ RI/Savings Plans giữa account) thuộc Domain 4 — xem <a href="#a4-2">4.2</a>.</li>
</ul>

<p><b>Control Tower — landing zone dựng trong chưa tới một giờ:</b></p>
<ul>
<li>Thiết lập landing zone từ management account: tạo <b>Security OU</b> chứa hai shared account <b>Log Archive</b> (gom log CloudTrail/Config) và <b>Audit</b> (cho đội bảo mật), tùy chọn <b>Sandbox OU</b>, một thư mục IAM Identity Center có nhóm dựng sẵn, và áp toàn bộ <b>mandatory control</b>. (Landing zone 4.0 cho tự định nghĩa cấu trúc OU, không bắt buộc Security OU.)</li>
<li><b>Account Factory</b> = "máy bán account": template account dựng trên <b>AWS Service Catalog</b>, vend account mới đã có sẵn cấu hình + control vào một <b>OU đã đăng ký</b> với Control Tower. Muốn làm bằng code Terraform → <b>Account Factory for Terraform (AFT)</b>.</li>
<li><b>Ba loại control</b> và cách hiện thực — câu hỏi kinh điển:
  <ul>
  <li><b>Preventive</b> — chặn hành động xảy ra → hiện thực bằng <b>SCP</b> (và RCP).</li>
  <li><b>Detective</b> — phát hiện tài nguyên lệch chuẩn sau khi đã có (vd EBS chưa mã hóa) → <b>AWS Config rules</b>.</li>
  <li><b>Proactive</b> — kiểm tra tài nguyên <i>trước khi</i> được tạo qua CloudFormation, không đạt thì không tạo → <b>CloudFormation hooks</b>.</li>
  </ul></li>
<li>Ba mức hướng dẫn: <b>mandatory</b> (luôn bật, không tắt được), <b>strongly recommended</b>, <b>elective</b>. Control gắn theo <b>OU</b> — mọi account trong OU chịu chung. Preventive control <b>không áp lên management account</b> (cùng lý do với SCP). Sửa tài nguyên do Control Tower quản lý ngoài luồng → <b>drift</b>.</li>
</ul>

<p><b>IAM Identity Center — đăng nhập cho nhân viên (workforce):</b></p>
<ul>
<li><b>Permission set</b> = template gồm một hoặc nhiều IAM policy. Gán (user/group + permission set + account) thì Identity Center <b>tạo IAM role do nó quản lý trong từng account</b> (tên dạng <code>AWSReservedSSO_…</code>) và cho user assume role đó qua <b>AWS access portal</b> hoặc CLI — credential tạm, tự xoay. Sửa permission set là role ở mọi account được cập nhật theo.</li>
<li>Session của permission set mặc định 1 giờ, tối đa 12 giờ.</li>
<li><b>Identity source</b> chọn một trong ba: thư mục của chính Identity Center · <b>Active Directory</b> (AWS Managed Microsoft AD, hoặc AD on-prem qua AD Connector) · <b>IdP ngoài</b> (Okta, Microsoft Entra ID…).</li>
<li>Với IdP ngoài: <b>SAML 2.0</b> lo <i>xác thực</i>, <b>SCIM</b> lo <i>tự động provision/deprovision</i> user và group. SAML không có cách hỏi IdP danh sách user, nên user/group <b>phải được provision vào Identity Center trước</b> khi gán quyền — thiếu SCIM thì phải tạo tay, và nhân viên nghỉ việc không tự bị gỡ.</li>
</ul>

<p><b>Directory Service — ba lựa chọn:</b></p>
<table>
<thead><tr><th>Loại</th><th>Bản chất</th><th>Chọn khi</th></tr></thead>
<tbody>
<tr><td><b>AWS Managed Microsoft AD</b></td><td>Windows Server AD <b>thật</b> do AWS vận hành (Standard ~5.000 nhân viên / 30.000 object; Enterprise tới ~500.000 object)</td><td>Cần tính năng AD thật: <b>RDS for SQL Server</b> Windows auth, SharePoint, schema extension, MFA; nối AD on-prem bằng <b>trust</b> (one-way hoặc two-way, external/forest). App AWS như WorkSpaces, IAM Identity Center cần <b>two-way trust</b>; EC2/RDS/FSx chạy được với one-way</td></tr>
<tr><td><b>AD Connector</b></td><td><b>Proxy</b> chuyển yêu cầu đăng nhập về domain controller on-prem — không đồng bộ, không giữ bản sao thư mục trên AWS</td><td>Đã có AD on-prem, chỉ muốn user dùng tài khoản đó cho WorkSpaces, Console, domain join EC2; MFA qua RADIUS. <b>Không</b> tương thích RDS SQL Server</td></tr>
<tr><td><b>Simple AD</b></td><td>Thư mục tương thích AD chạy <b>Samba 4</b>, rẻ, quy mô nhỏ</td><td>Thư mục độc lập cơ bản (LDAP cho Linux, domain join đơn giản). <b>Không</b> có trust, MFA, schema extension, LDAPS; không dùng với RDS SQL Server</td></tr>
</tbody></table>

<p><b>AWS RAM — chia tài nguyên thay vì nhân bản:</b></p>
<ul>
<li><b>VPC sharing:</b> account sở hữu VPC (owner) chia <b>subnet</b> cho account khác (participant) <b>cùng Organization</b>; participant tự tạo EC2, RDS, Lambda, Redshift… vào subnet đó, tự trả tiền tài nguyên của mình. Participant <b>không xem/sửa/xóa</b> được tài nguyên của owner hay participant khác — VPC, subnet, route table, NACL vẫn do owner quản lý. <b>Subnet mặc định không chia được</b>. Phối hợp AZ giữa account bằng <b>AZ ID</b> (vd <code>use1-az1</code>) vì tên <code>us-east-1a</code> mỗi account ánh xạ khác nhau.</li>
<li><b>Transit Gateway</b>: một account mạng tạo TGW, chia qua RAM để các account khác attach VPC của họ.</li>
<li><b>Route 53 Resolver rule</b>: tạo forwarding rule (về DNS on-prem) một lần ở account mạng, chia cho các account khác associate vào VPC của họ — không phải dựng outbound endpoint ở từng account.</li>
<li>Prefix list, License Manager config… cũng chia được; một số loại chỉ chia trong tổ chức (subnet), số khác chia được cả ra ngoài.</li>
</ul>
<div class="tip"><b>Chọn nhanh trong đề:</b> "dựng môi trường nhiều account theo best practice, ít công nhất" → Control Tower · "cấm mọi account con (kể cả root user) làm X" → SCP · "nhân viên đăng nhập bằng Okta/Entra vào 30 account" → Identity Center + SAML + SCIM · "WorkSpaces dùng tài khoản AD on-prem, không đồng bộ" → AD Connector · "RDS SQL Server Windows auth" → Managed Microsoft AD · "nhiều account dùng chung subnet của đội mạng" → VPC sharing qua RAM.</div>
<div class="warn"><b>Bẫy hay gặp:</b> "SCP gắn ở root nên admin của management account cũng bị chặn" — sai, SCP không bao giờ chạm management account. Và Control Tower không thay Organizations mà <i>chạy trên</i> Organizations; Identity Center không tạo IAM user mà tạo <b>IAM role</b>.</div>
<p class="src"><b>Nguồn:</b> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html" target="_blank" rel="noopener">Organizations — SCPs</a> · <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html" target="_blank" rel="noopener">Organizations concepts</a> · <a href="https://docs.aws.amazon.com/controltower/latest/userguide/how-control-tower-works.html" target="_blank" rel="noopener">How Control Tower works</a> · <a href="https://docs.aws.amazon.com/controltower/latest/userguide/how-controls-work.html" target="_blank" rel="noopener">How controls work</a> · <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/permissionsetsconcept.html" target="_blank" rel="noopener">Identity Center permission sets</a> · <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-identity-source-idp.html" target="_blank" rel="noopener">Identity Center external IdP</a> · <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html" target="_blank" rel="noopener">Directory Service</a> · <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_setup_trust.html" target="_blank" rel="noopener">Managed AD trusts</a> · <a href="https://docs.aws.amazon.com/ram/latest/userguide/shareable.html" target="_blank" rel="noopener">RAM shareable resources</a> · <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.html" target="_blank" rel="noopener">VPC sharing</a>, đọc ngày 23/10/2026.</p>
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
<li><b>Cơ chế bên trong:</b> SQS là hệ <b>phân tán nhiều node</b> — standard "best-effort ordering" và "at-least-once" vì message được nhân bản trên nhiều máy, một lần đọc có thể không hỏi đúng node đã xóa. FIFO đổi kiến trúc (chuỗi theo <code>MessageGroupId</code>) nên mới có trần throughput — group id chính là "session" của SQS: mỗi group xử lý tuần tự, nhiều group song song.</li>
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
<ul>
<li><b>RDS Proxy — phần xác thực và mạng:</b> client vào proxy có thể bị ép dùng <b>IAM authentication</b> (Lambda lấy token bằng execution role, không giữ mật khẩu); proxy vào database bằng credential lưu trong <b>Secrets Manager</b> hoặc IAM database authentication. Proxy phải ở <b>cùng VPC</b> với database và <b>không public</b> được; chỉ gắn vào writer, không gắn read replica RDS. Hầu hết app dùng được không sửa code — chỉ đổi endpoint.</li>
</ul>
<p><small>Nguồn: Amazon RDS User Guide — RDS Proxy (quotas and limitations), đọc ngày 23/10/2026.</small></p>
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
<p><b>Database đa Region và vận hành DR</b> (bổ sung cho mục 2.3 và 3.7):</p>
<ul>
<li><b>Aurora Global Database:</b> một primary Region ghi + tối đa <b>10</b> secondary Region chỉ đọc; nhân bản ở <b>tầng storage</b> bằng hạ tầng riêng, trễ thường <b>dưới 1 giây</b>, gần như không ăn tài nguyên của writer. Secondary cluster chỉ đọc (tối đa 16 reader), không hỗ trợ Aurora Auto Scaling. Nên kết nối qua <b>global writer endpoint</b> — luôn trỏ về primary kể cả sau khi đổi Region.</li>
<li><b>Switchover</b> (trước đây gọi "managed planned failover") — cho việc <i>có kế hoạch</i> khi mọi thứ còn khỏe: diễn tập DR, xoay Region theo quy định, follow-the-sun, quay về Region gốc sau sự cố. Aurora chờ secondary <b>đồng bộ xong</b> rồi mới đổi vai → <b>RPO = 0</b>. <b>Failover</b> ("allow data loss") — cho sự cố thật ở primary Region: không chờ đồng bộ nên mất phần chưa kịp nhân bản (RPO tính bằng giây), RTO cỡ phút; Region cũ hồi phục thì tự quay lại làm secondary, Aurora cố chụp snapshot storage cũ để vớt dữ liệu thiếu.</li>
<li><b>Write forwarding:</b> secondary cluster tự chuyển câu lệnh ghi về primary (Aurora lo mạng cross-Region và ngữ cảnh transaction), primary vẫn là nguồn sự thật rồi nhân bản lại — app ở Region phụ thỉnh thoảng cần ghi mà không phải quản thêm endpoint primary.</li>
<li><b>DynamoDB global tables</b> (đã có ở mục 3.7) có thêm chế độ <b>multi-Region strong consistency (MRSC)</b> cho RPO bằng 0; mặc định vẫn là eventual consistency (MREC, last-writer-wins). Chế độ chọn lúc tạo, không đổi được sau.</li>
</ul>
<ul>
<li><b>AWS X-Ray:</b> <b>distributed tracing</b> — theo một request đi qua API Gateway, Lambda, service, database; dựng <b>trace map</b> (service map) chỉ ra khâu nào chậm hay lỗi. Đáp án cho "microservice chậm mà không biết khâu nào"; CloudWatch metric cho biết <i>có</i> chậm, X-Ray cho biết chậm <i>ở đâu</i>.</li>
<li><b>Service Quotas:</b> xem và xin nâng quota từ một chỗ; phần lớn quota tính <b>theo Region</b> (VPC mỗi Region, vCPU On-Demand…) — DR Region có quota riêng, mặc định thấp. Pilot light/warm standby phải <b>xin nâng quota ở DR Region từ trước</b>, nếu không lúc thảm họa scale lên sẽ bị chặn đúng lúc cần. Bật cảnh báo khi utilization gần trần.</li>
<li><b>AWS Health Dashboard:</b> miễn phí, không cần cài; phần <i>service health</i> là tình trạng chung các dịch vụ, phần <i>your account health</i> là sự kiện <b>ảnh hưởng tài nguyên của bạn</b> (sự cố, bảo trì lên lịch, instance retirement). Mọi khách hàng nhận được sự kiện Health qua <b>EventBridge</b> để tự động hóa phản ứng (SNS, Lambda); Health API thì cần gói Business Support trở lên.</li>
</ul>
<div class="warn"><b>Bẫy sâu:</b> diễn tập DR định kỳ mà chọn failover thay vì switchover là tự nhận mất dữ liệu không cần thiết; và runbook DR không xin quota trước ở Region phụ là RTO trên giấy.</div>
<p><small>Nguồn: Aurora User Guide (Global Database, switchover/failover, write forwarding), DynamoDB Developer Guide (global tables), X-Ray Developer Guide, Service Quotas User Guide, AWS Health User Guide — docs.aws.amazon.com, đọc ngày 23/10/2026.</small></p>
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

<section id="a2-7">
<h3>2.7 API và điều phối — API Gateway, Step Functions, Amazon MQ, AppFlow<a class="anch" href="#a2-7">#</a></h3>
<p>Bốn dịch vụ tích hợp ứng dụng còn lại trong exam guide: cổng API trước backend, bộ điều phối workflow, broker tương thích giao thức cũ và kênh kéo dữ liệu SaaS. Điểm ăn tiền: biết <b>tính năng nào chỉ REST API có</b>, chọn đúng <b>Standard hay Express</b>, và nhận ra đề "lift-and-shift ứng dụng JMS" là <b>Amazon MQ</b> chứ không phải SQS.</p>

<p><b>API Gateway — ba loại API:</b></p>
<table>
<thead><tr><th>Loại</th><th>Bản chất</th><th>Chọn khi</th></tr></thead>
<tbody>
<tr><td><b>REST API</b></td><td>Đầy đủ tính năng: <b>API key + usage plan</b>, <b>cache</b>, <b>AWS WAF</b>, request validation, resource policy, <b>private endpoint</b>, canary release</td><td>API cho đối tác cần quota riêng từng khách; cần WAF/cache; API chỉ được gọi từ trong VPC</td></tr>
<tr><td><b>HTTP API</b></td><td>Tối giản và rẻ hơn; JWT authorizer sẵn có; tích hợp Lambda/HTTP/private (ALB, NLB, Cloud Map); chỉ endpoint Regional</td><td>Proxy đơn giản trước Lambda hoặc HTTP backend khi không cần tính năng riêng của REST</td></tr>
<tr><td><b>WebSocket API</b></td><td>Kết nối hai chiều giữ lâu; route <code>$connect</code>/<code>$disconnect</code>/<code>$default</code> + route theo một trường trong JSON; backend <b>chủ động đẩy</b> tin tới client qua <code>@connections</code></td><td>Chat, bảng giá, thông báo real-time — server push</td></tr>
</tbody></table>
<ul>
<li><b>Endpoint type (REST):</b> <b>edge-optimized</b> (mặc định của REST — request vào CloudFront POP gần client nhất, hợp client rải khắp thế giới) · <b>Regional</b> (client cùng Region, hoặc muốn tự đặt CloudFront riêng/Route 53 latency routing phía trước) · <b>Private</b> (chỉ gọi được từ VPC qua <b>interface VPC endpoint</b>, khóa thêm bằng resource policy). HTTP API chỉ có Regional.</li>
<li><b>Throttling:</b> thuật toán token bucket; quota mặc định <b>10.000 request/giây mỗi account mỗi Region</b>, gộp chung mọi REST/HTTP/WebSocket API, <b>burst 5.000</b> (vài Region mới: 2.500/1.250). Vượt trần → client nhận <b>429 Too Many Requests</b>. Rate nâng được qua Service Quotas; burst do AWS tự định theo rate. Thứ tự áp: per-client/per-method trong usage plan → per-method của stage → account → Region; limit per-client <b>không vượt được</b> limit account.</li>
<li><b>Usage plan + API key</b> (chỉ REST): phát API key cho từng khách, đặt rate/burst và quota (số request theo ngày/tuần/tháng) — đáp án cho "gói Basic/Premium cho đối tác". API key là định danh để đo đếm và chặn theo gói, <i>không</i> thay cho xác thực (IAM/Cognito/Lambda authorizer — mục 1.3).</li>
<li><b>Cache</b> (chỉ REST): bật theo <b>stage</b>, mặc định chỉ cache <code>GET</code>; TTL mặc định <b>300 giây</b>, tối đa <b>3.600 giây</b> (0 = tắt); response tối đa 1 MB; tính tiền theo giờ theo dung lượng cache; client có quyền gửi <code>Cache-Control: max-age=0</code> để làm mới một entry. Cache giảm tải backend, không nâng trần throttle của account.</li>
<li><b>WAF</b> gắn được vào stage của REST API, <b>không</b> gắn được HTTP API — "chặn SQL injection trước API" mà phương án dùng HTTP API là sai.</li>
<li><b>Con số:</b> integration timeout 50 ms–<b>29 giây</b> (REST Regional/private xin nâng trên 29 giây được, đổi lại có thể bị giảm throttle; edge-optimized và WebSocket thì không) · payload REST <b>10 MB</b> · WebSocket: kết nối sống tối đa <b>2 giờ</b>, idle <b>10 phút</b>, message 128 KB (frame 32 KB).</li>
</ul>

<p><b>Step Functions — Standard vs Express</b> (chọn lúc tạo, <b>không đổi được</b> sau):</p>
<table>
<thead><tr><th></th><th>Standard</th><th>Express</th></tr></thead>
<tbody>
<tr><td>Chạy tối đa</td><td><b>1 năm</b></td><td><b>5 phút</b></td></tr>
<tr><td>Ngữ nghĩa thực thi</td><td><b>Exactly-once</b> (một bước không chạy lại trừ khi khai Retry)</td><td>Async: <b>at-least-once</b> · Sync: at-most-once</td></tr>
<tr><td>Tính tiền</td><td>Theo số <b>state transition</b></td><td>Theo số execution + thời lượng + memory</td></tr>
<tr><td>Lịch sử</td><td>Xem qua console/API trong 90 ngày</td><td>Không lưu — phải bật CloudWatch Logs</td></tr>
<tr><td><code>.sync</code> / <code>.waitForTaskToken</code></td><td>Có</td><td><b>Không</b> (chỉ Request Response)</td></tr>
<tr><td>Hợp với</td><td>Việc <b>không idempotent</b> (thanh toán, khởi tạo EMR), chờ người duyệt, quy trình dài</td><td>Sự kiện khối lượng lớn, ngắn, <b>idempotent</b> (IoT ingest, biến đổi stream, backend mobile)</td></tr>
</tbody></table>
<ul>
<li><b>Xử lý lỗi:</b> mặc định một state lỗi là <b>fail cả execution</b>. <code>Retry</code> (trên Task/Parallel/Map): <code>ErrorEquals</code>, <code>IntervalSeconds</code> (mặc định 1), <code>MaxAttempts</code> (mặc định 3), <code>BackoffRate</code> (mặc định 2.0 — exponential backoff), <code>MaxDelaySeconds</code>, <code>JitterStrategy</code>. <code>Catch</code>: retry hết mà vẫn lỗi → nhảy sang state <code>Next</code> (fallback/bù trừ), <code>ResultPath</code> giữ cả input lẫn error. Có cả hai thì Retry chạy trước, Catch sau. <code>States.ALL</code> phải đứng một mình và ở cuối; <code>States.TaskFailed</code> khớp mọi lỗi trừ <code>States.Timeout</code>.</li>
<li><b>Ba pattern tích hợp:</b> Request Response (gọi xong đi tiếp) · <b>Run a Job</b> <code>.sync</code> (chờ Batch/ECS/Glue/CodeBuild… chạy xong) · <b>Wait for Callback</b> <code>.waitForTaskToken</code> (truyền task token ra ngoài qua SQS/Lambda/email duyệt — workflow dừng tới khi bên ngoài gọi <code>SendTaskSuccess</code>/<code>SendTaskFailure</code>; đặt <code>HeartbeatSeconds</code> để khỏi treo tới trần 1 năm).</li>
<li><b>Service integration:</b> gọi thẳng hơn 200 dịch vụ qua AWS SDK integration (DynamoDB, SNS, SQS, ECS…) — không cần viết Lambda "keo" chỉ để chuyển tiếp lời gọi.</li>
</ul>

<p><b>Amazon MQ vs SQS/SNS:</b></p>
<ul>
<li><b>Amazon MQ</b>: broker managed cho <b>Apache ActiveMQ Classic</b> và <b>RabbitMQ</b> — đưa broker có sẵn lên AWS <b>không phải viết lại code messaging</b>. ActiveMQ nói AMQP, MQTT, <b>OpenWire</b> (giao thức của client JMS ActiveMQ), STOMP, MQTT/STOMP over WebSocket; RabbitMQ nói <b>AMQP 0-9-1</b>.</li>
<li><b>HA:</b> ActiveMQ <b>active/standby</b> — hai broker ở 2 AZ dùng chung EFS, chỉ một bên active; client cấu hình <i>failover transport</i> trỏ cả hai endpoint để tự chuyển. RabbitMQ <b>cluster 3 node</b> sau NLB trải nhiều AZ. Single-instance = một AZ, không HA.</li>
<li><b>Chọn gì:</b> app đang dùng JMS/AMQP/MQTT/STOMP, muốn lên cloud ít sửa nhất → Amazon MQ. App mới, cloud-native, cần scale gần như vô hạn và không muốn quản broker → <b>SQS/SNS</b> (mục 2.1). Amazon MQ vẫn là broker chạy trên instance có cỡ và maintenance window, không tự co giãn như SQS.</li>
</ul>

<p><b>AppFlow:</b> dịch vụ tích hợp managed, <b>không viết code</b>, chuyển dữ liệu giữa SaaS (Salesforce, Zendesk, Slack, ServiceNow, Marketo…) và AWS (S3, Redshift…). Flow chạy theo yêu cầu, theo lịch, hoặc theo sự kiện (bản ghi Salesforce mới); mã hóa at-rest/in-transit; đi qua <b>PrivateLink</b> khi không muốn dữ liệu ra internet; catalog dữ liệu đổ vào S3 lên Glue Data Catalog.</p>

<div class="tip"><b>Bản đồ nhanh:</b> "đối tác cần API key + quota riêng" → REST API + usage plan · "chat real-time, server đẩy tin" → WebSocket API · "API chỉ gọi từ trong VPC" → REST private endpoint · "workflow chờ người duyệt nhiều ngày, bước trừ tiền" → Step Functions Standard + task token · "hàng trăm nghìn sự kiện ngắn mỗi giây" → Express · "app Java JMS on-prem lên cloud ít sửa nhất" → Amazon MQ · "kéo dữ liệu Salesforce vào S3 không viết code" → AppFlow.</div>
<div class="warn"><b>Bẫy hay gặp:</b> HTTP API rẻ hơn nhưng <b>không có</b> API key/usage plan, cache, WAF, private endpoint — đề nhắc một trong bốn thứ đó là phải REST API. Lỗi 429 trên API Gateway là throttling (trần 10.000 rps gộp mọi API trong Region), không phải lỗi backend; usage plan, cache hay đổi endpoint type đều không nâng được trần account — phải xin quota. Express Workflow at-least-once: bước không idempotent (trừ tiền) có thể chạy hai lần.</div>
<p><small>Nguồn: API Gateway Developer Guide (REST vs HTTP API, quotas, caching, endpoint types, WebSocket), Step Functions Developer Guide (workflow types, error handling, integration patterns), Amazon MQ Developer Guide (deployment options), Amazon AppFlow User Guide — docs.aws.amazon.com, đọc ngày 23/10/2026.</small></p>
</section>

<section id="a2-8">
<h3>2.8 Hạ tầng dạng code và triển khai bất biến — CloudFormation, Elastic Beanstalk<a class="anch" href="#a2-8">#</a></h3>
<p>Resilience không chỉ là đa AZ mà còn là <b>dựng lại được y hệt, nhanh, không tay</b>, và <b>deploy không làm sập</b>. Ý tưởng <b>immutable infrastructure</b>: không vá máy đang chạy — dựng bộ mới từ template/AMI, chuyển traffic, bỏ bộ cũ; lỗi thì quay về bộ cũ còn nguyên. CloudFormation lo "dựng lại được", Beanstalk deployment policy lo "deploy không sập".</p>

<p><b>CloudFormation — các mảnh hay bị hỏi:</b></p>
<table>
<thead><tr><th>Tính năng</th><th>Làm gì</th><th>Tín hiệu trong đề</th></tr></thead>
<tbody>
<tr><td><b>Change set</b></td><td>Xem trước update sẽ Add/Modify/Remove resource nào, có <b>thay thế</b> (replacement) resource không — chưa đụng stack cho tới khi <i>execute</i></td><td>"biết trước update có xóa/tạo lại database không"</td></tr>
<tr><td><b>Drift detection</b></td><td>So cấu hình thực tế với template, báo resource <code>MODIFIED</code>/<code>DELETED</code>/<code>IN_SYNC</code> — <b>chỉ phát hiện</b>, không tự sửa</td><td>"ai đó sửa tay security group ngoài CloudFormation"</td></tr>
<tr><td><b>StackSets</b></td><td>Một thao tác tạo/cập nhật/xóa stack trên <b>nhiều account × nhiều Region</b>; với Organizations (service-managed) bật <b>automatic deployment</b> cho account mới vào OU</td><td>"baseline cho 50 account", "account mới tự có cấu hình chuẩn"</td></tr>
<tr><td><b>DeletionPolicy</b></td><td><code>Delete</code> (mặc định) · <code>Retain</code> (giữ resource, vẫn tính tiền) · <code>Snapshot</code> (chụp rồi xóa — EBS volume, RDS, Redshift, ElastiCache, Neptune, DocumentDB) · <code>RetainExceptOnCreate</code>. Riêng RDS DBCluster/DBInstance mặc định là <code>Snapshot</code></td><td>"xóa stack mà không mất dữ liệu"</td></tr>
<tr><td><b>Nested stack</b></td><td>Stack con qua <code>AWS::CloudFormation::Stack</code>, tái dùng khối mẫu (VPC, ALB) và quản lý chung một vòng đời</td><td>"template quá dài, lặp khối giống nhau"</td></tr>
<tr><td><b>Outputs + Export / <code>Fn::ImportValue</code></b></td><td>Chia sẻ giá trị (subnet ID, SG ID) giữa các stack <b>cùng account, cùng Region</b>; tên export duy nhất mỗi Region</td><td>"stack mạng dùng chung cho nhiều stack app"</td></tr>
</tbody></table>
<ul>
<li>Đã có stack khác import một export thì <b>không xóa được</b> stack xuất export đó và không sửa được giá trị export — phải gỡ hết import trước. Đây là tính năng bảo vệ (tham chiếu mạnh), không phải lỗi. Cần tham chiếu khác account/Region thì dùng <code>Fn::GetStackOutput</code> (tham chiếu yếu, không chặn xóa).</li>
<li>Change set không bảo đảm update thành công — chỉ cho thấy <i>sẽ đổi gì</i>; execute xong thì mọi change set khác của stack bị xóa.</li>
<li>Drift detection không chạy xuống nested stack (phải chạy riêng trên nested stack) và chỉ so các thuộc tính khai tường minh trong template.</li>
<li><b>Termination protection</b> chặn xóa nhầm cả stack (bật thì lệnh xóa stack bị từ chối) — khác DeletionPolicy, vốn quyết định số phận <i>từng resource</i> khi stack bị xóa.</li>
<li><code>Retain</code> giữ nguyên resource (và tiếp tục tính tiền); <code>Snapshot</code> chỉ giữ bản chụp — chọn theo đề cần "giữ resource chạy tiếp" hay "chỉ cần còn dữ liệu".</li>
</ul>

<p><b>Elastic Beanstalk — deployment policy</b> (mặc định: all at once; EB CLI tạo môi trường scalable thì mặc định rolling):</p>
<table>
<thead><tr><th>Policy</th><th>Cách chạy</th><th>Downtime / capacity</th><th>Khi lỗi</th></tr></thead>
<tbody>
<tr><td><b>All at once</b></td><td>Deploy lên mọi instance cùng lúc</td><td>Có downtime ngắn</td><td>Phải deploy lại bản cũ</td></tr>
<tr><td><b>Rolling</b></td><td>Từng batch: tháo khỏi LB → deploy → gắn lại</td><td>Không downtime, <b>giảm capacity</b> một batch</td><td>Batch xong chạy bản mới, batch chưa tới chạy bản cũ — deploy lại để rollback</td></tr>
<tr><td><b>Rolling with additional batch</b></td><td>Dựng thêm một batch mới trước rồi mới rolling</td><td>Giữ <b>đủ capacity</b>, chỉ tốn thêm một batch</td><td>Như rolling</td></tr>
<tr><td><b>Immutable</b></td><td>Dựng <b>bộ instance mới hoàn toàn</b> trong ASG tạm, đạt health check mới thay bộ cũ</td><td>Không downtime, đủ capacity; tốn gấp đôi instance trong lúc deploy</td><td><b>Bộ cũ không bị đụng</b> — chỉ việc hủy bộ mới, rollback nhanh</td></tr>
<tr><td><b>Traffic splitting</b></td><td>Như immutable nhưng chia <b>% traffic</b> (canary) sang bản mới trong <i>evaluation time</i>; cần ALB</td><td>Không gián đoạn</td><td>Tự chuyển traffic về instance cũ, hủy instance mới</td></tr>
</tbody></table>
<ul>
<li><b>Blue/green</b> không phải một policy mà là quy trình: clone/tạo môi trường mới → deploy bản mới → test → <b>Swap environment URLs</b> (đổi CNAME hai môi trường) → giữ môi trường cũ tới khi DNS cũ hết hạn TTL mới terminate. Bắt buộc khi nâng lên platform version không tương thích.</li>
<li>Blue/green đòi database <b>nằm ngoài</b> môi trường: RDS do Beanstalk tạo gắn với vòng đời môi trường — muốn giữ thì tách ra (database lifecycle <i>Retain</i>) hoặc dùng RDS tạo riêng.</li>
</ul>

<div class="tip"><b>Chọn policy theo đề:</b> "nhanh nhất, chấp nhận downtime" → all at once · "không downtime, chấp nhận giảm capacity, rẻ" → rolling · "không giảm capacity, không nhân đôi fleet" → rolling with additional batch · "lỗi không được ảnh hưởng instance đang chạy, rollback nhanh" → immutable · "thử 10% người dùng trước" → traffic splitting · "chuyển tức thì, quay về tức thì, đổi platform" → blue/green CNAME swap.</div>
<div class="warn"><b>Bẫy hay gặp:</b> drift detection <b>không tự sửa</b> drift — chỉ báo; change set <b>không</b> phát hiện chỉnh tay ngoài CloudFormation. Rolling thất bại giữa chừng để lại fleet <b>trộn hai phiên bản</b> — đề cấm điều đó thì là immutable. Swap CNAME xong đừng terminate môi trường cũ ngay: client còn cache DNS cũ.</div>
<p><small>Nguồn: CloudFormation User Guide (change sets, drift detection, StackSets, stack exports) và Template Reference (DeletionPolicy), Elastic Beanstalk Developer Guide (deployment policies, blue/green CNAME swap) — docs.aws.amazon.com, đọc ngày 23/10/2026.</small></p>
</section>

<section id="a2-9">
<h3>2.9 Dịch vụ AI dựng sẵn — chọn đúng dịch vụ<a class="anch" href="#a2-9">#</a></h3>
<p>SAA-C03 không hỏi train model; câu AI luôn là dạng <b>"đề mô tả việc cần làm → chọn dịch vụ managed đúng"</b>, và phương án sai thường là dịch vụ AI <i>bên cạnh</i> (Comprehend vs Textract, Polly vs Transcribe). Nhớ theo cặp <b>đầu vào → đầu ra</b>.</p>
<table>
<thead><tr><th>Dịch vụ</th><th>Đầu vào → đầu ra</th><th>Tín hiệu trong đề</th></tr></thead>
<tbody>
<tr><td><b>Textract</b></td><td>Ảnh/PDF tài liệu → <b>chữ, bảng, cặp key-value</b> của form (OCR có hiểu cấu trúc)</td><td>"hóa đơn scan", "trích trường từ form", "PDF giấy tờ"</td></tr>
<tr><td><b>Comprehend</b></td><td>Văn bản → <b>sentiment</b>, thực thể, cụm từ khóa, ngôn ngữ, chủ đề, PII (NLP)</td><td>"phân tích cảm xúc review", "phát hiện PII trong text"</td></tr>
<tr><td><b>Rekognition</b></td><td>Ảnh/video → vật thể, khuôn mặt, so khớp mặt, <b>kiểm duyệt nội dung</b>, chữ trong ảnh cảnh</td><td>"lọc ảnh nhạy cảm người dùng upload", "nhận diện khuôn mặt"</td></tr>
<tr><td><b>Transcribe</b></td><td>Âm thanh → <b>văn bản</b> (speech-to-text)</td><td>"ghi âm call center thành text", "phụ đề"</td></tr>
<tr><td><b>Polly</b></td><td>Văn bản → <b>giọng nói</b> (text-to-speech)</td><td>"đọc bài viết thành audio"</td></tr>
<tr><td><b>Translate</b></td><td>Văn bản → văn bản ngôn ngữ khác</td><td>"dịch nội dung sang 10 ngôn ngữ"</td></tr>
<tr><td><b>Lex</b></td><td>Hội thoại → chatbot/voicebot hiểu intent (cùng công nghệ Alexa)</td><td>"chatbot đặt lịch", "IVR tổng đài"</td></tr>
<tr><td><b>SageMaker AI</b></td><td>Dữ liệu của bạn → <b>tự build/train/deploy model</b> ML</td><td>"model riêng", "data scientist train"</td></tr>
<tr><td><b>Kendra</b> *</td><td>Kho tài liệu doanh nghiệp → tìm kiếm ngữ nghĩa bằng câu hỏi tự nhiên</td><td>"tìm câu trả lời trong tài liệu nội bộ"</td></tr>
<tr><td><b>Bedrock</b> *</td><td>Prompt → foundation model (generative AI) qua API</td><td>"sinh văn bản/tóm tắt bằng LLM"</td></tr>
</tbody></table>
<p>* <b>Kendra và Bedrock không có</b> trong danh sách in-scope services của SAA-C03 (bản đọc ngày 23/10/2026 chỉ liệt kê Comprehend, Lex, Polly, Rekognition, SageMaker AI, Textract, Transcribe, Translate) — biết để loại phương án, đừng đầu tư học sâu.</p>
<ul>
<li><b>Ghép chuỗi</b> là dạng câu khó nhất: ghi âm tiếng Việt → Transcribe → Translate → Comprehend (sentiment). Mỗi khâu một dịch vụ, nối bằng S3 event/Step Functions.</li>
<li>Dịch vụ dựng sẵn = gọi API, không cần data scientist, không quản hạ tầng; chỉ khi đề nói "model tùy biến trên dữ liệu riêng, tự train" mới là SageMaker AI.</li>
</ul>
<div class="tip"><b>Mẹo:</b> ảnh/PDF <i>tài liệu</i> → Textract; ảnh/video <i>cảnh, người</i> → Rekognition; text đã có sẵn cần <i>hiểu</i> → Comprehend. Âm thanh → chữ là Transcribe; chữ → âm thanh là Polly.</div>
<div class="warn"><b>Bẫy hay gặp:</b> Comprehend không đọc được ảnh scan — phải qua Textract lấy text trước; Rekognition đọc được chữ trong ảnh cảnh nhưng không trích bảng/form như Textract; Polly và Transcribe ngược chiều nhau và hay được đặt cạnh nhau trong phương án.</div>
<p><small>Nguồn: danh sách In-Scope AWS Services của SAA-C03 trên docs.aws.amazon.com (Machine Learning), đọc ngày 23/10/2026; mô tả chức năng theo trang giới thiệu của từng dịch vụ.</small></p>
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
<p><b>Bổ sung — hai loại FSx còn lại và storage class của EFS:</b></p>
<table><thead><tr><th>Loại</th><th>Chọn khi</th><th>Cần nhớ</th></tr></thead><tbody>
<tr><td><b>FSx for NetApp ONTAP</b></td><td>Đang dùng NetApp on-prem. Cần <b>đa giao thức</b> NFS + SMB + iSCSI (+ NVMe) trên cùng dữ liệu, cho cả Linux, Windows lẫn macOS</td><td>Multi-AZ hoặc Single-AZ. SSD độ trễ dưới mili-giây, <b>tự tiering</b> dữ liệu nguội xuống tầng rẻ. Nén + dedup + compaction. Snapshot, clone, <b>SnapMirror</b> replication, FlexCache. Đưa ứng dụng lên mà không đổi code lẫn cách quản trị NetApp</td></tr>
<tr><td><b>FSx for OpenZFS</b></td><td>Dời file server ZFS hoặc Linux NFS lên AWS mà không sửa ứng dụng</td><td>Chỉ <b>NFS</b> (v3, v4.0, v4.1, v4.2). Độ trễ vài trăm micro-giây, tới hàng triệu IOPS. Snapshot gần như tức thời, clone dữ liệu, nén. Ba kiểu triển khai: Multi-AZ (HA), Single-AZ (HA), Single-AZ (non-HA). Hai storage class: SSD và Intelligent-Tiering</td></tr>
</tbody></table>
<table><thead><tr><th>EFS storage class</th><th>Dành cho</th><th>Độ trễ byte đầu</th><th>Phí ẩn</th></tr></thead><tbody>
<tr><td><b>Standard</b></td><td>Dữ liệu nóng. File mới luôn ghi vào đây trước</td><td>Dưới mili-giây</td><td>—</td></tr>
<tr><td><b>Infrequent Access (IA)</b></td><td>Truy cập vài lần mỗi quý</td><td>Hàng chục ms</td><td>Tính tối thiểu 128 KiB mỗi file, có phí đọc</td></tr>
<tr><td><b>Archive</b></td><td>Truy cập vài lần mỗi năm hoặc ít hơn</td><td>Hàng chục ms</td><td>Tối thiểu 128 KiB/file, <b>tối thiểu 90 ngày</b>. Chỉ có trên file system Regional</td></tr>
</tbody></table>
<ul>
<li><b>Regional vs One Zone:</b> Regional lưu dư thừa trên ≥3 AZ (khuyến nghị). One Zone nằm trong 1 AZ nên rẻ hơn, nhưng mất AZ là có thể mất dữ liệu (availability 99,9% so với 99,99%). One Zone được AWS Backup tự động sao lưu.</li>
<li><b>Lifecycle — ba policy cho cả file system:</b> <i>Transition into IA</i> (mặc định sau 30 ngày không truy cập trong Standard) · <i>Transition into Archive</i> (mặc định 90 ngày) · <i>Transition into Standard</i> (mặc định <b>không</b> đưa về. Ứng dụng nhạy độ trễ, nhiều file nhỏ thì chọn <b>On first access</b>). Đồng hồ tính theo lần truy cập cuối ở Standard, các thao tác metadata như list thư mục không tính là truy cập. Metadata luôn nằm ở Standard.</li>
</ul>
<div class="warn"><b>Bẫy EFS:</b> Archive chỉ chạy với throughput mode <b>Elastic</b>. Đã có policy chuyển sang Archive thì không đổi sang Bursting/Provisioned được nữa. IA/Archive tính phí truy cập khi đọc và khi chuyển lớp, nên dữ liệu bị đọc lại thường xuyên mà đẩy xuống IA có thể đắt hơn để ở Standard.</div>
<p><i>Nguồn: FSx for NetApp ONTAP User Guide, FSx for OpenZFS User Guide, Amazon EFS User Guide (features — storage classes, managing storage lifecycle) trên docs.aws.amazon.com, đọc ngày 23/10/2026.</i></p>
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
<p><b>Bổ sung — mang AWS tới gần người dùng: Outposts vs Local Zones vs Wavelength.</b> Cả ba đều là phần mở rộng của một Region: tạo subnet ở đó trong cùng VPC và quản lý qua control plane của Region mẹ. Chúng chỉ khác nhau ở chỗ phần cứng đặt ở đâu.</p>
<table><thead><tr><th>Hạ tầng</th><th>Đặt ở đâu</th><th>Chọn khi</th><th>Cần nhớ</th></tr></thead><tbody>
<tr><td><b>Outposts</b></td><td><b>Datacenter của khách hàng</b>: rack 42U hoặc server 1U/2U</td><td>Độ trễ thấp tới hệ thống on-prem, xử lý dữ liệu tại chỗ, <b>data residency</b>, ứng dụng còn phụ thuộc hệ thống on-prem</td><td>AWS sở hữu, vận hành và giám sát phần cứng. Khách lo mặt bằng, điện, mạng. Nối về Region bằng <b>service link</b>, nối mạng on-prem bằng local gateway (rack). Rack chạy được EC2, EBS, S3 on Outposts, RDS, ECS, EKS, EMR, ElastiCache, ALB. Server chủ yếu cho compute + network. Chạy tiếp được tới 7 ngày khi mất kết nối</td></tr>
<tr><td><b>Local Zones</b></td><td>Cơ sở của AWS gần các <b>trung tâm dân cư/công nghiệp lớn</b></td><td>Người dùng cuối cần độ trễ thấp: game real-time, live streaming, AR/VR, virtual workstation. Data residency theo bang/địa phương</td><td>Opt-in rồi tạo subnet trong Local Zone. Bật miễn phí, giá tài nguyên khác Region mẹ. Không cần sở hữu datacenter</td></tr>
<tr><td><b>Wavelength</b></td><td>Trong <b>mạng 5G của nhà mạng</b> (communications service provider)</td><td>Ứng dụng cho <b>thiết bị di động</b> cần độ trễ cực thấp (game/AR trên điện thoại, xe kết nối)</td><td>Wavelength subnet + <b>carrier gateway</b> (nhận traffic từ mạng nhà mạng, đi ra mạng nhà mạng/internet). Chạy được EC2, EBS, Auto Scaling, EKS, ECS, ALB ở một số zone</td></tr>
</tbody></table>
<div class="tip"><b>Chọn nhanh:</b> "trong nhà máy/datacenter của chúng tôi" → Outposts · "gần người dùng ở thành phố X, không có datacenter" → Local Zones · "thiết bị di động 5G" → Wavelength. Snowball Edge Compute Optimized không còn bán cho khách mới, AWS chỉ sang Outposts cho edge compute (xem 3.9).</div>
<p><i>Nguồn: AWS Outposts User Guide, AWS Local Zones User Guide, AWS Wavelength Developer Guide trên docs.aws.amazon.com, đọc ngày 23/10/2026.</i></p>
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
<p><b>Bổ sung — chạy code tại edge: CloudFront Functions vs Lambda@Edge.</b></p>
<table><thead><tr><th>Tiêu chí</th><th>CloudFront Functions</th><th>Lambda@Edge</th></tr></thead><tbody>
<tr><td>Ngôn ngữ</td><td>JavaScript (ECMAScript 5.1 compliant)</td><td>Node.js, Python</td></tr>
<tr><td>Sự kiện</td><td><b>Viewer request, viewer response</b></td><td>Viewer request/response <b>và origin request/response</b></td></tr>
<tr><td>Quy mô</td><td>Tới hàng triệu request/giây</td><td>Tới 10.000 request/giây mỗi Region</td></tr>
<tr><td>Thời gian chạy</td><td>Dưới mili-giây</td><td>Tới 30 giây</td></tr>
<tr><td>Memory / kích thước code</td><td>2 MB / 10 KB</td><td>128 MB (viewer), tới 10 GB (origin) / 50 MB</td></tr>
<tr><td>Network, file system, request body</td><td><b>Không</b></td><td><b>Có</b></td></tr>
<tr><td>KeyValueStore</td><td>Có</td><td>Không</td></tr>
</tbody></table>
<ul>
<li><b>CloudFront Functions</b> cho việc nhẹ và rất nhiều: chuẩn hóa <b>cache key</b> (header, query string, cookie, path) để tăng cache hit, thêm/sửa/xóa header (ví dụ header bảo mật), redirect/rewrite URL, kiểm tra token (JWT) đã hash.</li>
<li><b>Lambda@Edge</b> khi cần nhiều mili-giây trở lên, cần CPU/memory chỉnh được, thư viện bên thứ ba (kể cả AWS SDK), <b>gọi mạng ra dịch vụ ngoài</b>, đọc file system hoặc <b>body</b> của request, hoặc chạy ở sự kiện origin.</li>
<li><b>OAC vs OAI</b> (khóa S3 chỉ cho CloudFront đọc): <b>OAC</b> là cách được khuyến nghị. Nó ký mọi request bằng SigV4 và hỗ trợ bucket ở <i>mọi</i> Region (kể cả opt-in Region mới), <b>SSE-KMS</b>, và request động PUT/DELETE. Bucket policy cấp cho service principal <code>cloudfront.amazonaws.com</code> với điều kiện <code>AWS:SourceArn</code> = ARN của distribution. Dùng SSE-KMS thì key policy cũng phải cho CloudFront dùng key. <b>OAI</b> là cách cũ (legacy): không hỗ trợ SSE-KMS, request động, Region mới. Chuyển đổi bằng cách cho bucket policy chấp nhận cả hai trong lúc chuyển, rồi bỏ statement OAI.</li>
</ul>
<div class="warn"><b>Bẫy:</b> origin là <b>S3 website endpoint</b> thì phải khai như custom origin, không dùng được OAC/OAI. Muốn bucket private sau CloudFront thì dùng REST endpoint của bucket + OAC. "Gọi DynamoDB/API ngoài tại edge" thì CloudFront Functions không làm được vì không có network access. Một số tài liệu cũ ghi giới hạn viewer của Lambda@Edge là 5 giây / 1 MB. Docs hiện tại ghi 30 giây và 50 MB, đề chỉ cần biết Lambda@Edge nặng và chậm hơn CloudFront Functions.</div>
<p><i>Nguồn: Amazon CloudFront Developer Guide (Differences between CloudFront Functions and Lambda@Edge, Quotas, Restrict access to an Amazon S3 origin) trên docs.aws.amazon.com, đọc ngày 23/10/2026.</i></p>
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

<section id="a3-8">
<h3>3.8 Data lake và analytics — Lake Formation, Glue, EMR, Redshift, QuickSight, OpenSearch, MSK<a class="anch" href="#a3-8">#</a></h3>
<p>Mục 3.4 đã có bộ ba S3 + Glue + Athena. Mục này phủ phần còn lại của pipeline phân tích: catalog và ETL, phân quyền chi tiết trên data lake, xử lý big data, warehouse, BI, search và streaming Kafka. Đề hay cho một use case rồi bắt chọn đúng dịch vụ. Phần lớn điểm nằm ở việc phân biệt các cặp dễ lẫn: Glue/EMR, Athena/Redshift Spectrum, Kinesis/MSK.</p>
<table>
<thead><tr><th>Dịch vụ</th><th>Chọn khi</th><th>Cần nhớ</th></tr></thead>
<tbody>
<tr><td><b>Glue crawler + Data Catalog</b></td><td>Cần schema cho dữ liệu đã nằm trong S3/JDBC mà không tự viết DDL</td><td>Crawler chạy classifier để suy định dạng và schema, rồi ghi bảng và partition vào Data Catalog. Chạy theo lịch thì tự thêm partition mới. Athena, Redshift Spectrum và EMR đều đọc chung catalog này</td></tr>
<tr><td><b>Glue ETL</b></td><td>ETL serverless (Spark): CSV/JSON → Parquet, làm sạch, join</td><td>Không quản cụm. <b>Job bookmark</b> nhớ phần dữ liệu đã xử lý để lần chạy sau chỉ lấy dữ liệu mới. Mặc định bookmark là <b>Disable</b></td></tr>
<tr><td><b>Lake Formation</b></td><td>Phân quyền tập trung, chi tiết trên data lake</td><td>Mô hình quyền riêng kiểu GRANT/REVOKE như RDBMS, đặt chồng lên IAM. Phân quyền được tới mức database / table / <b>column / row / cell</b> (qua data filter). <b>LF-Tags</b> gán quyền theo nhãn thay cho từng bảng một. Có thể chia sẻ cross-account</td></tr>
<tr><td><b>EMR</b></td><td>Hadoop/Spark/Hive/Presto quy mô lớn, cần tùy chỉnh framework</td><td>Ba cách triển khai: <b>EMR on EC2</b> (tự chọn node), <b>EMR Serverless</b> (không cấu hình cụm), <b>EMR on EKS</b> (chạy chung cụm EKS đang có)</td></tr>
<tr><td><b>Redshift</b></td><td>Data warehouse cột cho BI/SQL phân tích trên dữ liệu có cấu trúc</td><td>Provisioned (RA3/RG có managed storage) hoặc <b>Serverless</b> (tính theo RPU). <b>Spectrum</b> truy vấn thẳng file trong S3 mà không cần nạp vào bảng</td></tr>
<tr><td><b>Amazon Quick Sight</b> (trước là QuickSight)</td><td>Dashboard BI, nhúng analytics</td><td>Engine in-memory <b>SPICE</b>. <b>Row-level security</b> giới hạn dòng theo user/group</td></tr>
<tr><td><b>OpenSearch Service</b></td><td>Full-text search, log analytics, giám sát ứng dụng gần real-time, clickstream</td><td>Domain = cụm OpenSearch được AWS quản lý. Trực quan hóa bằng OpenSearch Dashboards. Nạp dữ liệu từ Firehose/Kinesis/S3/DynamoDB. UltraWarm và cold storage cho dữ liệu chỉ-đọc rẻ hơn. Có thêm bản Serverless</td></tr>
<tr><td><b>MSK</b></td><td>Đang dùng <b>Apache Kafka</b>, muốn có bản managed</td><td>Chạy Kafka mã nguồn mở nên producer/consumer/tooling Kafka chạy nguyên, không sửa code. Có hai bản Provisioned (broker Standard/Express) và Serverless. MSK Connect nối nguồn/đích</td></tr>
</tbody></table>

<ul>
<li><b>Glue crawler dưới nắp:</b> classifier tùy chỉnh chạy trước, không khớp thì dùng classifier dựng sẵn (JSON, CSV, Avro…). Với S3 chia thư mục kiểu <code>sales/year=2019/month=Jan/day=1</code> mà schema giống nhau, crawler tạo <b>một bảng có partition key</b> year/month/day thay vì nhiều bảng. Chạy lại theo lịch thì crawler nhận thêm file/partition mới. Muốn tách thành bảng riêng thì khai mỗi thư mục gốc là một data store riêng.</li>
<li><b>Glue job bookmark:</b> có ba chế độ Enable / Disable (mặc định, lần nào cũng xử lý <i>toàn bộ</i> dataset) / Pause. Với nguồn S3, bookmark lọc theo last-modified time của object. Với JDBC, nó dùng bookmark key (mặc định là primary key tăng đều). Job ETL chạy định kỳ mà lần nào cũng xử lý lại dữ liệu cũ và sinh bản trùng thì thủ phạm thường là bookmark chưa bật. Reset bookmark khi muốn xử lý lại từ đầu. Lưu ý reset không dọn file đích.</li>
<li><b>Lake Formation chi tiết thi:</b> quản lý quyền trên dữ liệu S3 và metadata trong Glue Data Catalog. Quyền được thực thi trên Athena, Redshift Spectrum, EMR, Glue và Quick. <b>Data filter</b> gộp lọc cột + lọc dòng (cell-level), hợp cho che PII. <b>LF-Tags</b> (LF-TBAC) gắn nhãn vào database/table/column rồi cấp quyền theo nhãn: thay hàng nghìn policy bằng vài tag. Hybrid access mode cho phép bật quyền Lake Formation dần dần, song song với IAM. Hành vi truy cập được audit qua CloudTrail.</li>
<li><b>EMR node và Spot:</b> <b>primary</b> quản cụm (YARN ResourceManager, HDFS NameNode). <b>Core</b> chạy task <i>và lưu dữ liệu HDFS</i>, nên mất core node là có nguy cơ mất dữ liệu. <b>Task</b> chỉ chạy task, <b>không lưu HDFS</b>, vì vậy là chỗ đúng để dùng Spot. Mẫu chuẩn: primary + core chạy On-Demand, task node chạy Spot. Instance fleet trộn được nhiều instance type và cả On-Demand lẫn Spot.</li>
<li><b>EMR transient vs long-running:</b> khai sẵn các <i>step</i> lúc tạo cụm và bật auto-terminate, cụm sẽ tự tắt sau step cuối. Đây là kiểu cụm "chạy xong thì hủy" cho batch định kỳ, đọc/ghi dữ liệu trên S3 nên tắt cụm không mất gì. Cụm lỗi thì bị terminate và mất dữ liệu trên cụm, trừ khi bật termination protection. <b>EMR Serverless</b> tự tính tài nguyên, cấp worker khi job chạy rồi thả ra khi xong. Pre-initialized capacity giữ sẵn worker ấm để job khởi động trong vài giây. <b>EMR on EKS</b> hợp khi đã có cụm EKS và muốn Spark chạy chung hạ tầng với ứng dụng container.</li>
<li><b>Redshift dưới nắp:</b> leader node lập kế hoạch truy vấn, compute node chạy song song. <b>RA3/RG + managed storage</b> tách compute khỏi storage: dữ liệu vượt SSD cục bộ tự đẩy xuống S3, giá storage như nhau ở cả hai tầng. Mua số node theo nhu cầu tính toán. DC2 là SSD cục bộ, hợp dữ liệu &lt;1 TB nén. Cụm provisioned <b>pause</b> được: lúc pause chỉ trả tiền backup storage. Tải ổn định thì mua <b>reserved node</b>.</li>
<li><b>Redshift Spectrum:</b> query dữ liệu cấu trúc/bán cấu trúc trong S3 mà <b>không nạp vào bảng Redshift</b>. Phần lớn xử lý diễn ra ở tầng Spectrum, nhiều cụm có thể cùng query một dataset S3 mà không phải copy. Mẫu thi: dữ liệu nóng gần đây nằm trong bảng Redshift, lịch sử nhiều năm nằm S3 Parquet làm external table, rồi JOIN cả hai bằng SQL.</li>
<li><b>Redshift Serverless:</b> capacity tính bằng <b>RPU</b> (1 RPU = 16 GB RAM). Base capacity mặc định 128 RPU, chỉnh từ 4 tới 512 (1.024 ở vài region). Hệ thống tự scale trong vài giây, và chỉ tính tiền khi warehouse đang được dùng. Tín hiệu đề: "warehouse dùng thất thường/vài giờ mỗi tuần, không muốn quản node".</li>
<li><b>Quick Sight:</b> AWS đã đổi QuickSight thành <b>Amazon Quick</b>. Phần BI giờ tên là <b>Amazon Quick Sight</b>, một tính năng trong Quick. API cũ vẫn chạy, còn đề thi và tài liệu cũ vẫn gọi là QuickSight. <b>SPICE</b> nạp dữ liệu vào bộ nhớ: query nhanh hơn, dùng lại nhiều lần không trả thêm tiền query nguồn. Capacity SPICE tính theo từng region. <b>RLS</b> (Enterprise edition): tạo một <i>permissions dataset</i> gồm cột UserName/GroupName và các cột giá trị được phép, mỗi người chỉ thấy dòng khớp rule. User/group <b>không có rule thì không thấy dòng nào</b>.</li>
</ul>
<table><thead><tr><th>Tiêu chí</th><th>Kinesis Data Streams</th><th>Amazon MSK</th></tr></thead><tbody>
<tr><td>API</td><td>API riêng của AWS (shard)</td><td>Apache Kafka API mã nguồn mở</td></tr>
<tr><td>Chọn khi</td><td>Xây mới trên AWS, tích hợp sẵn Lambda/Firehose, muốn ít vận hành</td><td>Đã có ứng dụng/tooling Kafka, cần giữ hệ sinh thái Kafka (Kafka Connect, MirrorMaker…)</td></tr>
<tr><td>Đơn vị scale</td><td>Shard (hoặc on-demand)</td><td>Broker (Provisioned) hoặc Serverless</td></tr>
</tbody></table>
<div class="tip"><b>Pipeline chuẩn của đề:</b> ingest (Kinesis/MSK/Firehose, DataSync) → S3 raw → Glue crawler + Glue ETL sang Parquet có partition → phân quyền bằng Lake Formation → query bằng Athena (ad-hoc), Redshift/Spectrum (warehouse) hoặc EMR (Spark tùy biến) → hiển thị bằng Quick Sight. Log cần full-text search thì rẽ sang OpenSearch.</div>
<div class="warn"><b>Bẫy hay gặp:</b> S3 bucket policy/IAM <b>không</b> lọc được cột hay dòng bên trong file, nên "ẩn cột PII cho team A" là Lake Formation. Glue crawler chỉ dựng schema chứ không chuyển đổi dữ liệu, chuyển đổi là việc của Glue ETL. Spot cho <b>core</b> node EMR là bẫy mất dữ liệu HDFS. "Đã chạy Kafka, không muốn sửa code" là MSK, không phải Kinesis.</div>
<p><i>Nguồn: AWS Glue Developer Guide (crawler, job bookmarks), Lake Formation Developer Guide, Amazon EMR Management Guide / EMR Serverless / EMR on EKS, Amazon Redshift Management Guide (clusters, Serverless capacity) và Database Developer Guide (Spectrum), Amazon Quick User Guide (SPICE, RLS), OpenSearch Service và MSK Developer Guide trên docs.aws.amazon.com, đọc ngày 23/10/2026.</i></p>
</section>

<section id="a3-9">
<h3>3.9 Chuyển dữ liệu và migration — DataSync, Storage Gateway, Transfer Family, Snow Family, MGN, DMS<a class="anch" href="#a3-9">#</a></h3>
<p>Đề cho bối cảnh (dữ liệu bao nhiêu, băng thông bao nhiêu, giao thức gì, cần một lần hay liên tục, chuyển file, server hay database) rồi bắt chọn công cụ. Phần lớn câu được giải bằng cách khớp từ khóa giao thức cộng với một phép tính băng thông.</p>
<ul>
<li><b>DataSync</b> — copy dữ liệu <b>online</b> qua mạng. Nguồn on-prem: NFS, SMB, HDFS, object storage tự quản (cài <b>DataSync agent</b> cạnh nguồn). Nguồn cloud khác: Azure Blob/Files, Google Cloud Storage… Đích: <b>S3 (mọi storage class, kể cả Glacier Deep Archive), EFS, FSx</b> (Windows, Lustre, OpenZFS, ONTAP). Task chạy được <b>theo lịch</b>, chỉ chuyển phần thay đổi, nén trên đường truyền, mã hóa, <b>kiểm tra toàn vẹn</b> và giữ metadata/permission. Một task có thể dùng hết đường 10 Gbps. Use case: migrate, archive dữ liệu nguội, replicate, đẩy dữ liệu vào cloud để xử lý.</li>
<li><b>Storage Gateway</b> — appliance (VM hoặc phần cứng) đặt <b>on-prem</b>, cho ứng dụng cũ dùng storage AWS qua giao thức quen thuộc. Khác DataSync ở chỗ đây là <i>truy cập liên tục</i> chứ không phải đợt copy:
<table><thead><tr><th>Loại</th><th>Giao thức</th><th>Dữ liệu nằm đâu</th></tr></thead><tbody>
<tr><td><b>S3 File Gateway</b></td><td>NFS (v3, v4.1), SMB (v2, v3)</td><td>Mỗi file thành một object S3, có cache local cho độ trễ thấp. Dùng được lifecycle, replication, versioning của S3 và cho dịch vụ AWS khác đọc trực tiếp</td></tr>
<tr><td><b>FSx File Gateway</b></td><td>SMB</td><td>Cache local trước FSx for Windows. <b>Không còn nhận khách hàng mới</b></td></tr>
<tr><td><b>Volume Gateway — cached</b></td><td>iSCSI (block)</td><td><b>Dữ liệu chính trên S3</b>, chỉ phần hay truy cập được cache local. Giảm storage on-prem</td></tr>
<tr><td><b>Volume Gateway — stored</b></td><td>iSCSI (block)</td><td><b>Toàn bộ dữ liệu ở local</b> (độ trễ thấp cho cả dataset), snapshot bất đồng bộ lên S3 làm backup offsite. Khôi phục được ra EC2 (dạng EBS)</td></tr>
<tr><td><b>Tape Gateway</b></td><td>Virtual tape library cho phần mềm backup</td><td>Băng ảo, lưu trữ dài hạn sang S3 Glacier Flexible Retrieval / Deep Archive. Bỏ hạ tầng băng từ vật lý</td></tr>
</tbody></table></li>
<li><b>Transfer Family</b> — server truyền file managed với <b>SFTP</b> (v3), <b>FTPS</b>, <b>FTP</b>, <b>AS2</b> (B2B, EDI, chuỗi cung ứng) và web app trên trình duyệt. Backend là <b>S3 hoặc EFS</b>. Đối tác <b>giữ nguyên client và cấu hình</b> (WinSCP, FileZilla, OpenSSH), chỉ trỏ hostname sang endpoint mới. Chạy trên tối đa 3 AZ, có managed workflow để xử lý file sau upload (copy, tag, quét, giải mã…). Từ khóa: "đối tác gửi file qua SFTP", "bỏ server SFTP tự quản".</li>
<li><b>Snow Family (Snowball Edge, Snowcone) — trạng thái hiện tại:</b> theo docs, Snowball Edge <b>không còn cho khách hàng mới</b> và AWS không còn bán bất kỳ thiết bị Snow nào cho khách mới đặt hàng. Khách đang dùng vẫn dùng tiếp. AWS khuyến nghị thay bằng: <b>DataSync</b> cho chuyển online (có thể thuê Direct Connect hosted connection qua partner trong thời gian dự án), <b>AWS Data Transfer Terminal</b> cho chuyển vật lý (đặt lịch, mang ổ cứng của mình tới cơ sở của AWS, upload tốc độ cao trong phòng riêng), dịch vụ offline của partner trên Marketplace (Seagate, Tsecond…), và <b>Outposts</b> thay cho Snowball Edge Compute Optimized ở edge. Thiết bị cũ: Snowball Edge Storage Optimized 210 TB, mạng tới 100 Gbit/s, mã hóa bắt buộc, gửi về AWS để nạp vào S3. <i>Đề SAA-C03 và ngân hàng câu cũ vẫn có thể cho Snowball là đáp án</i> cho kiểu câu "hàng trăm TB–PB, đường truyền chậm, cần trong vài tuần". Hiểu đó là "chuyển offline bằng thiết bị vật lý", còn ngoài đời bây giờ đáp án là Data Transfer Terminal hoặc partner.</li>
<li><b>Application Migration Service (MGN)</b> — lift-and-shift (rehost) <b>server</b> vật lý, ảo hóa hoặc cloud khác sang EC2. Docs hiện gọi là <i>AWS Transform MGN</i>. Cách làm: cài replication agent trên server nguồn, MGN <b>sao chép liên tục ở mức block</b> sang AWS, rồi chuyển đổi để server boot được trên EC2. Cutover window thường chỉ vài phút. Ba template: replication, launch, post-launch. Gom server thành application và application thành <b>wave</b> để làm hàng loạt. Quy trình: chờ replication đồng bộ xong → <b>launch test</b> và kiểm tra → <b>launch cutover</b> → finalize rồi archive nguồn. Rehost là bước đầu, sau đó mới replatform/refactor.</li>
<li><b>DMS</b> — chuyển <b>database</b>. Một replication instance (hoặc serverless) chạy task với source endpoint và target endpoint. Database nguồn vẫn hoạt động trong lúc chuyển. Ba kiểu task:
<ul>
<li><b>Full load</b> ("Migrate existing data"): copy dữ liệu hiện có, nạp song song nhiều bảng.</li>
<li><b>Full load + CDC</b> ("Migrate existing data and replicate ongoing changes"): copy xong thì áp các thay đổi đã bắt được trong lúc copy, rồi tiếp tục replicate. Đây là mẫu <b>gần-zero downtime</b>: đợi lag về gần 0, dừng ghi ở nguồn, chuyển ứng dụng sang đích.</li>
<li><b>CDC only</b>: đọc log giao dịch của nguồn, chỉ replicate thay đổi (đích đã được backfill bằng cách khác).</li>
</ul>
<b>Homogeneous vs heterogeneous:</b> đổi engine (Oracle → Aurora PostgreSQL, SQL Server → MySQL) thì phải chuyển schema và code (procedure, view…) trước bằng <b>DMS Schema Conversion</b> (chạy trong console) hoặc <b>AWS SCT</b> (cài trên máy), sau đó DMS mới chuyển dữ liệu. Cùng engine sang RDS/Aurora (PostgreSQL → RDS for PostgreSQL, MySQL → Aurora MySQL) thì dùng <b>DMS homogeneous data migrations</b>: <b>serverless</b>, dùng công cụ native của engine, chuyển cả partition, function, stored procedure. Có ba chế độ full load / ongoing replication / full load + ongoing replication. Không hỗ trợ chuyển từ version cao xuống version thấp. <b>DMS Fleet Advisor</b> kiểm kê database on-prem để lập kế hoạch.</li>
<li><b>DMS chỉ tạo những gì cần để chuyển dữ liệu:</b> bảng, primary key và đôi khi unique index. DMS <b>không tạo secondary index, ràng buộc không phải PK, giá trị default của cột</b>. Thiếu những thứ này thì query trên đích chậm và CDC update/delete chậm. Cách xử lý: tạo trước schema đầy đủ (Schema Conversion), hoặc dừng task sau full load để thêm index rồi mới áp thay đổi. Task có tùy chọn data validation để so nguồn với đích.</li>
</ul>

<p><b>Bảng kịch bản → dịch vụ:</b></p>
<table><thead><tr><th>Kịch bản trong đề</th><th>Dịch vụ</th></tr></thead><tbody>
<tr><td>Copy NAS NFS/SMB/HDFS lên S3/EFS/FSx, chạy theo lịch, kiểm tra toàn vẹn</td><td>DataSync</td></tr>
<tr><td>Ứng dụng on-prem vẫn ghi qua NFS/SMB nhưng dữ liệu phải thành object S3</td><td>S3 File Gateway</td></tr>
<tr><td>Ứng dụng cần block iSCSI, muốn dữ liệu chính trên AWS và cache phần nóng</td><td>Volume Gateway cached</td></tr>
<tr><td>Ứng dụng cần toàn bộ dữ liệu local, chỉ muốn backup offsite lên AWS</td><td>Volume Gateway stored</td></tr>
<tr><td>Bỏ thư viện băng từ, phần mềm backup giữ nguyên</td><td>Tape Gateway</td></tr>
<tr><td>Đối tác gửi/nhận file qua SFTP/FTPS/AS2</td><td>Transfer Family</td></tr>
<tr><td>Hàng trăm TB, mạng quá chậm cho thời hạn</td><td>Chuyển offline: Data Transfer Terminal / partner (đề cũ: Snowball Edge)</td></tr>
<tr><td>Rehost hàng trăm server với cutover vài phút</td><td>MGN</td></tr>
<tr><td>Chuyển database, downtime tối thiểu</td><td>DMS full load + CDC (đổi engine thì thêm Schema Conversion/SCT)</td></tr>
</tbody></table>

<p><b>Phép tính băng thông (đề hay bắt tính):</b> số ngày = (dung lượng byte × 8) / (băng thông bit/s × hệ số sử dụng mạng × 86.400). Ví dụ trong docs DataSync: 100 TB qua 1 Gbps, dùng 80% đường truyền, chạy 24/24 → (10<sup>14</sup> × 8) / (10<sup>9</sup> × 0,8 × 86.400) ≈ <b>11,6 ngày</b>. Đổi sang 500 TB qua 500 Mbps → ≈ <b>116 ngày</b>, quá chậm cho hạn "vài tuần", nên phải chuyển offline. Hai lỗi tính hay gặp: quên nhân 8 (byte → bit) và quên hệ số sử dụng (mạng không bao giờ chạy đủ 100%).</p>
<div class="tip"><b>Chọn nhanh theo đối tượng chuyển:</b> <b>file</b> → DataSync (đợt copy) hoặc Storage Gateway (truy cập liên tục) · <b>file của đối tác qua giao thức chuẩn</b> → Transfer Family · <b>cả server</b> → MGN · <b>database</b> → DMS (+ Schema Conversion/SCT khi đổi engine).</div>
<div class="warn"><b>Bẫy hay gặp:</b> DMS không chuyển được server và MGN không đổi được engine database. S3 Transfer Acceleration chỉ tối ưu đường đi qua edge, vẫn không vượt được trần băng thông của đường truyền chậm. DMS full load một mình là phải ngừng ghi suốt lúc chuyển, "downtime tối thiểu" luôn đi kèm <b>CDC</b>. FSx File Gateway và Snowball đã đóng với khách mới, đề mới có thể dùng chính điều này làm bẫy.</div>
<p><i>Nguồn: AWS DataSync User Guide (what is, estimating migration timelines), Storage Gateway (S3 File / FSx File / Volume / Tape Gateway), Transfer Family User Guide, Snowball Edge Developer Guide (availability change), AWS Transform MGN User Guide, AWS DMS User Guide (Welcome, creating a task, homogeneous data migrations) trên docs.aws.amazon.com, đọc ngày 23/10/2026.</i></p>
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
<p><b>Bổ sung — tenancy và đặt chỗ capacity.</b></p>
<table><thead><tr><th>Tiêu chí</th><th>Dedicated Host</th><th>Dedicated Instance</th></tr></thead><tbody>
<tr><td>Bản chất</td><td>Nguyên một server vật lý dành riêng cho bạn</td><td>Instance chạy trên phần cứng chỉ dành cho một account</td></tr>
<tr><td>Tính tiền</td><td><b>Theo host</b></td><td><b>Theo instance</b></td></tr>
<tr><td>Thấy socket/core vật lý, host ID</td><td>Có</td><td>Không</td></tr>
<tr><td>Host affinity, chọn host để đặt instance</td><td>Có</td><td>Không</td></tr>
<tr><td>BYOL</td><td><b>Đầy đủ</b>: license theo socket/core/VM (Windows Server, SQL Server, RHEL, SUSE…)</td><td>Một phần (SQL Server License Mobility, Windows VDA)</td></tr>
<tr><td>Capacity Reservation</td><td>Không dùng được</td><td>Dùng được</td></tr>
</tbody></table>
<ul>
<li>Hai loại <b>không khác nhau về hiệu năng hay bảo mật vật lý</b>. Chọn Host khi cần <b>license gắn socket/core</b> hoặc yêu cầu đặt instance trên đúng host. Chọn Dedicated Instance khi chỉ cần "không chung phần cứng với account khác" (compliance). Bật dedicated bằng tenancy của VPC hoặc của từng instance. Dedicated Host Reservation giảm tới 70% so với On-Demand.</li>
<li><b>On-Demand Capacity Reservation (ODCR):</b> giữ capacity EC2 ở <b>một AZ cụ thể</b>, trong bao lâu cũng được. Loại dùng ngay thì <b>không cam kết thời hạn</b>, hủy lúc nào cũng được. Tính <b>giá On-Demand dù có chạy instance hay không</b> (phần trống hiện là unused reservation). Bản thân ODCR <b>không giảm giá</b>, muốn rẻ thì kết hợp <b>Savings Plans hoặc RI regional</b>. Discount của RI <i>zonal</i> không áp vào ODCR. Future-dated reservation thì phải cam kết thời hạn.</li>
<li><b>RI regional vs zonal:</b> giá như nhau. <b>Regional</b>: giảm giá ở mọi AZ, linh hoạt kích cỡ trong family (Linux, default tenancy), nhưng <b>không giữ capacity</b>. <b>Zonal</b>: <b>giữ capacity</b> ở đúng AZ đó, không linh hoạt AZ hay kích cỡ.</li>
</ul>
<div class="tip"><b>Chọn nhanh:</b> "chắc chắn có máy ở AZ X cho đợt cao điểm 2 tuần, không cam kết năm" → ODCR (+ SP để giảm giá) · "license Windows/SQL theo core" → Dedicated Host · "compliance yêu cầu phần cứng không chung account khác" → Dedicated Instance · "đã mua RI mà vẫn lỗi InsufficientInstanceCapacity" → RI regional không giữ capacity.</div>
<p><i>Nguồn: Amazon EC2 User Guide (Dedicated Hosts, Dedicated Instances, On-Demand Capacity Reservations và pricing/billing, Regional and zonal Reserved Instances) trên docs.aws.amazon.com, đọc ngày 23/10/2026.</i></p>
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
<p><b>Bổ sung — quản trị chi phí nhiều account và các công cụ còn thiếu:</b></p>
<ul>
<li><b>Consolidated billing</b> (AWS Organizations, miễn phí): management account trả tiền cho mọi member account, một hóa đơn. Usage của cả tổ chức được <b>gộp lại</b> nên đạt bậc <b>volume discount</b> sớm hơn (S3, data transfer…), đồng thời <b>chia sẻ RI và Savings Plans</b>. Commitment phục vụ account mua trước, phần dư dùng cho account khác. Management account bật/tắt sharing theo từng account, hoặc giới hạn trong nhóm account (Cost Categories). Tắt sharing có thể làm hóa đơn tăng.</li>
<li><b>Cost allocation tag chi tiết:</b> có hai loại, AWS-generated (tiền tố <code>aws:</code>, ví dụ <code>aws:createdBy</code>) và user-defined. Cả hai đều phải kích hoạt riêng, mất tới <b>24 giờ</b> mới hiện. Chỉ management account (hoặc account độc lập) quản lý được trang cost allocation tags.</li>
<li><b>Cost and Usage Report:</b> bộ dữ liệu chi phí đầy đủ nhất, đổ vào bucket S3 của bạn, chi tiết theo giờ/ngày/tháng, theo resource, theo tag. Dùng Athena, Redshift hoặc Quick để truy vấn. Bản hiện hành là <b>CUR 2.0 qua Data Exports</b>: schema cố định (CUR cũ đổi cột theo tháng), chọn cột bằng SQL, bật <code>INCLUDE_RESOURCES</code> để có từng resource ID. Ở management account, CUR chứa dữ liệu của toàn bộ member account.</li>
<li><b>Compute Optimizer:</b> phải <b>opt-in</b>. Mặc định phân tích metric CloudWatch <b>14 ngày</b>. Bật <i>enhanced infrastructure metrics</i> (có phí) để nhìn lại <b>93 ngày</b>. Khuyến nghị right-size và chỉ ra resource idle cho EC2, Auto Scaling group, <b>EBS</b>, <b>Lambda</b>, <b>ECS trên Fargate</b>, RDS/Aurora, NAT Gateway, DynamoDB, ElastiCache… và cả license phần mềm thương mại. Opt-in ở management account thì xem được khuyến nghị cho cả tổ chức.</li>
<li><b>Trusted Advisor — cập nhật gói support:</b> toàn bộ check (cost optimization, performance, security, fault tolerance, service limits…) và API dành cho gói <b>Business Support+</b>, Enterprise hoặc Unified Operations. Gói Basic chỉ có toàn bộ check Service Limits và một số check Security/Fault tolerance. AWS báo ngừng gói Developer và Business Support từ 01/01/2027 (chuyển sang Business Support+). Đề cũ ghi "Business/Enterprise" thì hiểu là các gói trả phí cấp cao.</li>
</ul>
<div class="tip"><b>Chọn đúng công cụ:</b> "đạt giá bậc thang và dùng chung RI giữa nhiều account" → consolidated billing · "chi phí theo giờ, theo resource ID, query SQL" → CUR 2.0 + Athena · "right-size Lambda/EBS/Fargate" → Compute Optimizer · "check giới hạn service và lỗ hổng cấu hình chung" → Trusted Advisor.</div>
<p><i>Nguồn: AWS Billing User Guide (consolidated billing, RI và Savings Plans discount sharing, cost allocation tags), Data Exports / CUR User Guide (CUR 2.0), Compute Optimizer User Guide, AWS Support User Guide (Trusted Advisor) trên docs.aws.amazon.com, đọc ngày 23/10/2026.</i></p>
</section>
`,s=t({__name:"AwsNotesPage",setup(a){return(o,r)=>(c(),i(n,{certId:"aws",html:e(h),title:"AWS Solutions Architect",subtitle:"29 mục — 4 domain SAA-C03, trọng số 30 · 26 · 24 · 20%",practiceRoute:"/aws-saa/practice",practiceLabel:"Luyện thi SAA"},null,8,["html"]))}});export{s as default};
