import{_ as n}from"./NotesPage.vue_vue_type_script_setup_true_lang-CkaPW5lu.js";import{d as t,e as i,b as h,o as a}from"./index-BcG7APcn.js";import"./ThemeToggle.vue_vue_type_script_setup_true_lang-D3HZfqms.js";import"./useStudyClock-pKQKYI-6.js";const e=`<h2 class="dom">Domain 1 — Design Secure Architectures</h2>

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
</section>

<section id="a2-2">
<h3>2.2 ELB và Auto Scaling<a class="anch" href="#a2-2">#</a></h3>
<ul>
<li><b>ALB</b>: tầng 7 — route theo path/host/header, target là instance/IP/Lambda; có sticky session, hợp microservice. <b>NLB</b>: tầng 4 — TCP/UDP, hàng triệu request/s, <b>IP tĩnh / Elastic IP</b>, độ trễ cực thấp. <b>GWLB</b>: chèn appliance bảo mật bên thứ ba.</li>
<li>ASG scaling: <b>target tracking</b> (giữ CPU ~50% — đáp án mặc định, ít phải chỉnh), step scaling (theo ngưỡng), <b>scheduled</b> (biết trước giờ cao điểm), predictive (ML dự báo theo chu kỳ).</li>
<li>Health check: ELB đánh dấu unhealthy → ASG thay instance mới; đặt ASG trải <b>nhiều AZ</b> là mặc định của mọi thiết kế HA.</li>
</ul>
<div class="warn">Đề nhấn "IP tĩnh cho firewall whitelist" hoặc "hàng triệu kết nối TCP" → <b>NLB</b>; nhấn "route theo đường dẫn /api, /images" → <b>ALB</b>. Đây là cặp phân biệt ăn điểm nhanh nhất Domain 2.</div>
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
</section>

<section id="a2-4">
<h3>2.4 Serverless và container — Lambda, ECS/Fargate<a class="anch" href="#a2-4">#</a></h3>
<ul>
<li><b>Lambda</b>: chạy tối đa <b>15 phút</b>, scale tự động theo request, trả tiền theo ms — hợp xử lý sự kiện (S3 upload, SQS, API Gateway). Việc chạy dài hơn 15 phút hoặc cần GPU → không phải Lambda.</li>
<li><b>ECS trên Fargate</b>: container không quản server — đáp án cho "container hóa nhưng không muốn vận hành EC2". ECS trên EC2 khi cần kiểm soát host/daemonset. <b>EKS</b> khi đội đã dùng Kubernetes hoặc cần chạy đa nền tảng.</li>
<li>Kết nối riêng tư Lambda ↔ VPC: gắn Lambda vào subnet riêng; truy cập internet từ Lambda trong VPC cần NAT.</li>
</ul>
<div class="warn">Job xử lý video 2 giờ mà phương án là Lambda → sai vì trần 15 phút; đáp án thường là ECS Fargate hoặc AWS Batch.</div>
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
</section>

<section id="a3-2">
<h3>3.2 Compute hiệu năng — EC2 family, placement group<a class="anch" href="#a3-2">#</a></h3>
<ul>
<li>Họ EC2 theo chữ cái: <b>C</b> = compute (batch, encode), <b>M</b> = cân bằng, <b>R</b> = RAM lớn (cache, in-memory DB), <b>T</b> = burstable (CPU credit — cạn credit là nghẽn), <b>I/D</b> = storage NVMe cục bộ, <b>P/G</b> = GPU.</li>
<li><b>Placement group</b>: <b>cluster</b> — cùng rack, độ trễ thấp nhất cho HPC (đổi lại rủi ro chung phần cứng); <b>spread</b> — mỗi instance một rack, tối đa 7/AZ, cho các node "không được chết cùng nhau"; <b>partition</b> — nhóm rack cho Hadoop/Kafka.</li>
<li><b>Lambda tuning</b>: tăng memory là tăng CPU theo; provisioned concurrency diệt cold start; SnapStart cho Java.</li>
</ul>
<div class="warn">Đề nói app "chậm dần rồi nghẽn sau vài chục phút tải cao" trên instance <b>t3</b> → hết CPU credit; đáp án là đổi sang M/C hoặc bật unlimited, không phải thêm EBS.</div>
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
</section>

<section id="a4-3">
<h3>4.3 Chi phí database — DynamoDB capacity, Aurora Serverless<a class="anch" href="#a4-3">#</a></h3>
<ul>
<li><b>DynamoDB on-demand</b>: trả theo request, cho tải <b>thất thường/không đoán được</b>; <b>provisioned + auto scaling</b>: rẻ hơn đáng kể khi tải <b>đều và dự đoán được</b>, kết hợp reserved capacity càng rẻ.</li>
<li><b>Aurora Serverless v2</b>: scale ACU theo tải, hợp môi trường dev/test, tải theo mùa, SaaS nhiều tenant thưa — "database chỉ bận vài giờ mỗi ngày" là tín hiệu chọn nó.</li>
<li>RDS dừng được instance dev/test (tối đa 7 ngày mỗi lần); snapshot rồi xóa instance là cách rẻ nhất cho DB "để dành".</li>
</ul>
<div class="warn">Chiều bẫy đảo: tải <b>đều đặn cao</b> mà chọn DynamoDB on-demand là <b>đắt hơn</b> provisioned nhiều lần — on-demand không phải lúc nào cũng rẻ.</div>
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
</section>
`,g=t({__name:"AwsNotesPage",setup(c){return(o,r)=>(a(),i(n,{certId:"aws",html:h(e),title:"AWS Solutions Architect",subtitle:"18 mục — 4 domain SAA-C03, trọng số 30 · 26 · 24 · 20%",practiceRoute:"/aws-saa/practice",practiceLabel:"Luyện thi SAA"},null,8,["html"]))}});export{g as default};
