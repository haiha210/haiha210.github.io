const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/packs-Bq8B1yOL.js","assets/index-CVd9JySu.js","assets/index-XuT8dMLP.css"])))=>i.map(i=>d[i]);
import{d as Q,z as W,O as j,c as Y,a as i,i as u,b as p,w as C,$ as z,e as $,r as c,l as S,s as X,W as g,a0 as J,k as Z,o as tt}from"./index-CVd9JySu.js";import{_ as nt}from"./ThemeToggle.vue_vue_type_script_setup_true_lang-BVmnr-2x.js";import{u as et}from"./useStudyClock-BGDH9axH.js";const ot=`
<section class="doc" id="README" data-title="Tổng quan kỳ thi">
<h1 id="README/ai-200-developing-ai-cloud-solutions-on-azure-tai-lieu-on-th">AI-200: Developing AI Cloud Solutions on Azure — Tài liệu ôn thi (Tiếng Việt)</h1>
<p>Chứng chỉ: <strong>Microsoft Certified: Azure AI Cloud Developer Associate</strong><br>Mã đề thi: <strong>AI-200</strong> · Cấp độ: Intermediate · Vai trò: Developer</p>
<blockquote><p>Nguồn gốc: trang chứng chỉ chính thức và <a href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-200" target="_blank" rel="noopener">Study guide AI-200</a> (bản cập nhật 2026-04-15). Toàn bộ nội dung dưới đây được dịch/diễn giải sang tiếng Việt, có bổ sung code mẫu và bẫy thi.</p></blockquote>
<hr>
<h2 id="README/1-thong-tin-ky-thi">1. Thông tin kỳ thi</h2>
<div class="tablewrap"><table><thead><tr><th>Hạng mục</th><th>Chi tiết</th></tr></thead><tbody><tr><td>Thời lượng</td><td><strong>120 phút</strong> (theo trang chứng chỉ chính thức)</td></tr><tr><td>Điểm đạt</td><td><strong>700/1000</strong></td></tr><tr><td>Ngôn ngữ</td><td>Chỉ <strong>tiếng Anh</strong> (nếu đề chưa có tiếng bản địa, có thể xin thêm 30 phút)</td></tr><tr><td>Hình thức</td><td>Có giám thị (proctored), có thể chứa <strong>câu hỏi tương tác / lab</strong></td></tr><tr><td>Practice assessment</td><td><strong>Chưa có</strong> (thường có sau ~8 tuần kể từ khi đề ra khỏi beta)</td></tr><tr><td>Thi lại</td><td>Sau 24 giờ với lần đầu; các lần sau thời gian chờ tăng dần</td></tr><tr><td>Gia hạn</td><td>Chứng chỉ Associate <strong>hết hạn hàng năm</strong>, gia hạn miễn phí bằng assessment online trên Microsoft Learn</td></tr><tr><td>Đặt lịch</td><td>Pearson VUE — <strong>nên dùng tài khoản MSA cá nhân</strong>, không dùng account công ty (mất việc = mất hồ sơ thi)</td></tr><tr><td>Exam sandbox</td><td>https://aka.ms/examdemo (trải nghiệm giao diện trước)</td></tr></tbody></table></div>
<h2 id="README/2-doi-tuong-audience-profile">2. Đối tượng (Audience profile)</h2>
<p>Bạn là developer tham gia <strong>mọi giai đoạn</strong> triển khai AI solution trên Azure, tập trung vào <strong>back-end services</strong>: thu thập yêu cầu → thiết kế → phát triển → deploy → bảo mật → giám sát.</p>
<p>Cần thành thạo:</p>
<ul><li>Azure SDKs và third-party SDKs dùng trên Azure</li><li>Azure data management services (Cosmos DB, PostgreSQL, Redis)</li><li>Azure monitoring &amp; troubleshooting</li><li>Azure messaging &amp; eventing (Service Bus, Event Grid)</li><li><strong>Vector databases</strong></li><li><strong>Python</strong> (ngôn ngữ chính của đề thi)</li><li>Containerized applications trên Azure</li></ul>
<blockquote><p>⚠️ Lưu ý quan trọng: AI-200 <strong>không phải</strong> AI-102. Đề này rất ít về Azure AI Services/prompt engineering, mà là <strong>đề developer hạ tầng</strong> (gần AZ-204) với lớp AI phủ lên: vector search, RAG, event-driven AI pipeline, observability.</p></blockquote>
<h2 id="README/3-bon-mang-ky-nang-skills-measured">3. Bốn mảng kỹ năng (Skills measured)</h2>
<div class="tablewrap"><table><thead><tr><th>#</th><th>Domain</th><th>Trọng số</th><th>Mục trong <code>notes.html</code></th></tr></thead><tbody><tr><td>1</td><td>Develop containerized solutions on Azure</td><td><strong>20–25%</strong></td><td><a href="notes.html#01-container" target="_blank" rel="noopener">Container trên Azure</a></td></tr><tr><td>2</td><td>Develop AI solutions by using Azure data management services</td><td><strong>25–30%</strong></td><td><a href="notes.html#02-data-services" target="_blank" rel="noopener">Data services &amp; Vector</a></td></tr><tr><td>3</td><td>Connect to and consume Azure services</td><td><strong>20–25%</strong></td><td><a href="notes.html#03-messaging-functions" target="_blank" rel="noopener">Messaging &amp; Functions</a></td></tr><tr><td>4</td><td>Secure, monitor, troubleshoot Azure solutions</td><td><strong>20–25%</strong></td><td><a href="notes.html#04-security-monitoring" target="_blank" rel="noopener">Bảo mật &amp; Giám sát</a></td></tr></tbody></table></div>
<p>Phụ trợ, cũng nằm trong <code>notes.html</code>:</p>
<ul><li><a href="notes.html#05-cheatsheet" target="_blank" rel="noopener">Cheat sheet</a> — bảng tra nhanh CLI / SDK / KQL trước ngày thi</li><li><a href="notes.html#06-cau-hoi-on-tap" target="_blank" rel="noopener">40 câu ôn tập</a> — câu hỏi tự luyện + đáp án giải thích</li><li><a href="notes.html#07-lo-trinh-hoc" target="_blank" rel="noopener">Lộ trình 6 tuần</a> — lộ trình học + lab thực hành</li></ul>
<h2 id="README/3b-hai-file-html">4. Hai file HTML</h2>
<p>Giống DP-300: hai file tự chứa, mở thẳng bằng trình duyệt, chạy offline, không cần cài gì.</p>
<pre><button class="copybtn">copy</button><code>xdg-open practice.html
xdg-open notes.html</code></pre>
<p><strong><code>practice.html</code></strong> — luyện thi tương tác, <strong>249 câu</strong> đủ các dạng theo format kỳ thi:</p>
<ul><li>Trắc nghiệm một/nhiều đáp án — 200 câu</li><li><strong>Sắp xếp thứ tự</strong> (build list) 10 câu · <strong>điền vào code</strong> (code completion) 12 câu · <strong>Có/Không series</strong> 12 câu · <strong>case study</strong> 3 bộ / 15 câu</li><li>Chế độ <strong>Đề mô phỏng đầy đủ</strong>: trộn mọi dạng, ~40 câu / 120 phút, chấm theo domain <strong>và</strong> theo dạng câu hỏi</li><li>Ghi nhớ câu sai (localStorage) → chế độ "Ôn câu đã sai"</li></ul>
<p><strong><code>notes.html</code></strong> — toàn bộ tài liệu ở trên trong một trang: thanh điều hướng trái, mục lục phải, tìm kiếm bằng phím <code>/</code>, checkbox tiến độ học, nút copy cho mọi khối code.</p>
<p>Ngân hàng câu hỏi nằm ngay trong <code>practice.html</code> (các mảng <code>QUESTIONS</code>, <code>ORDER</code>, <code>FILL</code>, <code>YESNO</code>, <code>CASES</code> ở đầu thẻ <code>&lt;script&gt;</code>), nội dung tài liệu nằm ngay trong <code>notes.html</code> (mỗi tài liệu là một <code>&lt;section class="doc"&gt;</code>, heading có sẵn <code>id</code> để link neo). Sửa trực tiếp trong file HTML, không có bước build và không có file nguồn nào khác cần đồng bộ.</p>
<h2 id="README/4-chi-tiet-noi-dung-thi-dich-nguyen-van-outline">5. Chi tiết nội dung thi (dịch nguyên văn outline)</h2>
<h3 id="README/domain-1-develop-containerized-solutions-on-azure-2025">5.1 Domain 1 — Develop containerized solutions on Azure (20–25%)</h3>
<p><strong>Implement container application hosting</strong></p>
<ul><li>Build, store, version, manage container image bằng <strong>Azure Container Registry</strong></li><li>Build và run image bằng <strong>ACR Tasks</strong></li><li>Deploy container lên <strong>Azure App Service</strong>, gồm cấu hình environment variables và secrets</li></ul>
<p><strong>Implement container-orchestrated solutions</strong></p>
<ul><li>Deploy app lên <strong>Azure Container Apps</strong>: cấu hình environment, quản lý <strong>revision</strong></li><li>Event-driven scaling bằng <strong>KEDA</strong> trong Container Apps</li><li>Deploy &amp; quản lý app trên <strong>AKS</strong> bằng <strong>manifest files</strong></li><li>Monitor/troubleshoot AKS và Container Apps: logs, events, end-to-end connectivity</li></ul>
<h3 id="README/domain-2-develop-ai-solutions-by-using-azure-data-management">5.2 Domain 2 — Develop AI solutions by using Azure data management services (25–30%)</h3>
<p><strong>Azure Cosmos DB for NoSQL</strong></p>
<ul><li>Kết nối bằng SDK và chạy query</li><li>Tối ưu query performance &amp; <strong>RU</strong> bằng indexing policy và consistency level</li><li>Lưu/truy xuất <strong>embeddings</strong>, thực hiện <strong>vector similarity search</strong> cho semantic retrieval</li><li>Cài đặt <strong>change feed processor</strong> để phát hiện item mới/được cập nhật</li></ul>
<p><strong>Azure Database for PostgreSQL</strong></p>
<ul><li>Kết nối và query bằng SDK</li><li>Model schema + indexing strategy (thiết kế bảng, chọn data type phù hợp)</li><li>Indexing strategy: giảm query latency, giảm <strong>pgvector compute overhead</strong></li><li>Cấu hình compute, memory, storage cho vector workload</li><li>Vector similarity search: lưu embeddings, semantic retrieval, <strong>RAG với metadata filter</strong></li><li>Tối ưu connection để tăng throughput, giảm latency</li></ul>
<p><strong>Azure Managed Redis</strong></p>
<ul><li>Data operations: caching, expiration, invalidation</li><li><strong>Vector indexing</strong> để similarity search</li></ul>
<h3 id="README/domain-3-connect-to-and-consume-azure-services-2025">5.3 Domain 3 — Connect to and consume Azure services (20–25%)</h3>
<p><strong>Event- and message-based AI solutions</strong></p>
<ul><li><strong>Azure Service Bus</strong>: queue/xử lý back-end operations, <strong>dead-letter queue</strong>, messages, topics, subscriptions</li><li><strong>Azure Event Grid</strong>: event-driven workflow, filters, custom events, retries</li></ul>
<p><strong>Azure Functions</strong></p>
<ul><li>Serverless API: <strong>triggers và bindings</strong></li><li>Cấu hình và deploy function app</li></ul>
<h3 id="README/domain-4-secure-monitor-and-troubleshoot-azure-solutions-202">5.4 Domain 4 — Secure, monitor, and troubleshoot Azure solutions (20–25%)</h3>
<p><strong>Implement secure Azure solutions</strong></p>
<ul><li><strong>Azure Key Vault</strong>: bảo vệ secrets, rotation, retrieval</li><li><strong>Azure App Configuration</strong>: lưu/đọc cấu hình app</li></ul>
<p><strong>Monitor and troubleshoot</strong></p>
<ul><li><strong>Distributed tracing với OpenTelemetry SDKs</strong></li><li>Viết <strong>KQL</strong> để phân tích logs và metrics</li></ul>
<h2 id="README/5-ghi-chu-cua-microsoft-ve-cach-ra-de">6. Ghi chú của Microsoft về cách ra đề</h2>
<ul><li>Các bullet dưới mỗi skill chỉ <strong>minh hoạ</strong> cách đánh giá — chủ đề liên quan vẫn có thể xuất hiện.</li><li>Phần lớn câu hỏi về tính năng <strong>GA</strong>; tính năng <strong>Preview</strong> vẫn có thể xuất hiện nếu phổ biến.</li></ul>
<h2 id="README/6-tai-nguyen-chinh-thuc">7. Tài nguyên chính thức</h2>
<ul><li>Study guide: https://aka.ms/AI200-StudyGuide</li><li>Trang chứng chỉ: https://learn.microsoft.com/credentials/certifications/azure-ai-cloud-developer-associate/</li><li>Azure docs theo chủ đề: Container Registry, App Service, Functions, Cosmos DB, Key Vault, Event Grid, Service Bus, Azure Cache/Managed Redis</li><li>Exam Readiness Zone (video), Microsoft Q&amp;A, Azure Community Support</li></ul>
</section>
<section class="doc" id="01-container" data-title="1. Container trên Azure" data-weight="20–25%" hidden>
<h1 id="01-container/domain-1-phat-trien-giai-phap-container-tren-azure-2025">Domain 1 — Phát triển giải pháp container trên Azure (20–25%)</h1>
<h2 id="01-container/1-azure-container-registry-acr">1. Azure Container Registry (ACR)</h2>
<h3 id="01-container/11-khai-niem-cot-loi">1.1 Khái niệm cốt lõi</h3>
<ul><li><strong>Registry</strong> → <strong>Repository</strong> → <strong>Tag/Digest</strong>. Tên image đầy đủ: <code>myacr.azurecr.io/ai/rag-api:1.2.0</code></li><li><strong>Digest</strong> (<code>@sha256:...</code>) là bất biến; <strong>tag</strong> có thể bị ghi đè → production nên deploy theo digest.</li><li>SKU:</li></ul>
<div class="tablewrap"><table><thead><tr><th>SKU</th><th>Điểm chính</th></tr></thead><tbody><tr><td>Basic</td><td>Học tập/dev, storage nhỏ nhất, không geo-replication</td></tr><tr><td>Standard</td><td>Throughput &amp; storage cao hơn, đủ cho production vừa</td></tr><tr><td><strong>Premium</strong></td><td><strong>Geo-replication</strong>, <strong>private endpoint</strong>, content trust (image signing), customer-managed keys, repository-scoped tokens, zone redundancy</td></tr></tbody></table></div>
<blockquote><p>Bẫy thi: yêu cầu "deploy multi-region, pull image từ region gần nhất với 1 tên registry duy nhất" → <strong>Premium + geo-replication</strong>. Yêu cầu "truy cập registry chỉ qua VNet" → <strong>Premium + Private Link</strong>.</p></blockquote>
<h3 id="01-container/12-xac-thuc-rat-hay-thi">1.2 Xác thực (rất hay thi)</h3>
<p>Thứ tự ưu tiên đúng chuẩn:</p>
<ol><li><strong>Managed identity + role <code>AcrPull</code></strong> (tốt nhất cho App Service / Container Apps / AKS)</li><li><strong>Service principal</strong> (CI/CD ngoài Azure)</li><li><strong>Repository-scoped token</strong> (Premium — phân quyền theo repo)</li><li><strong>Admin user</strong> (chỉ dùng thử nghiệm — Microsoft khuyến nghị <strong>tắt</strong>)</li></ol>
<pre><button class="copybtn">copy</button><code># Cho App Service pull ACR bằng managed identity
az webapp identity assign -g rg -n mywebapp
PRINCIPAL=$(az webapp identity show -g rg -n mywebapp --query principalId -o tsv)
ACR_ID=$(az acr show -n myacr --query id -o tsv)
az role assignment create --assignee $PRINCIPAL --role AcrPull --scope $ACR_ID
az resource update --ids /subscriptions/.../sites/mywebapp/config/web \\
  --set properties.acrUseManagedIdentityCreds=true</code></pre>
<h3 id="01-container/13-acr-tasks-build-tren-cloud-khong-can-docker-local">1.3 ACR Tasks — build <strong>trên cloud</strong>, không cần Docker local</h3>
<div class="tablewrap"><table><thead><tr><th>Loại task</th><th>Lệnh / đặc điểm</th></tr></thead><tbody><tr><td><strong>Quick task</strong></td><td><code>az acr build</code> — build + push ngay, thay <code>docker build &amp;&amp; docker push</code></td></tr><tr><td><strong>Trigger by source code</strong></td><td><code>az acr task create --context &lt;git&gt; --file Dockerfile --git-token ...</code> → commit là build</td></tr><tr><td><strong>Base image update trigger</strong></td><td>Base image (vd <code>python:3.12-slim</code>) có bản mới → tự rebuild image con. <strong>Vá lỗi bảo mật OS tự động.</strong></td></tr><tr><td><strong>Scheduled task</strong></td><td><code>--schedule "0 2 <em> </em> *"</code> (cron)</td></tr><tr><td><strong>Multi-step task</strong></td><td>YAML: build → test → push nhiều image, có <code>when</code> để chạy song song</td></tr></tbody></table></div>
<pre><button class="copybtn">copy</button><code># Quick task: build &amp; push, không cần Docker trên máy
az acr build --registry myacr --image ai/rag-api:{{.Run.ID}} --file Dockerfile .

# Task tự rebuild khi commit HOẶC base image thay đổi
az acr task create \\
  --registry myacr --name rag-api-task \\
  --image ai/rag-api:{{.Run.ID}} \\
  --context https://github.com/org/repo.git#main \\
  --file Dockerfile \\
  --git-access-token $PAT \\
  --base-image-trigger-enabled true

az acr task run  --registry myacr --name rag-api-task     # chạy thủ công
az acr task logs --registry myacr --name rag-api-task     # xem log</code></pre>
<p>Multi-step task (<code>task.yaml</code>):</p>
<pre><button class="copybtn">copy</button><code>version: v1.1.0
steps:
  - build: -t $Registry/ai/rag-api:$ID -f Dockerfile .
  - cmd: $Registry/ai/rag-api:$ID pytest tests/
  - push: ["$Registry/ai/rag-api:$ID"]</code></pre>
<p>Lệnh hay dùng khác:</p>
<pre><button class="copybtn">copy</button><code>az acr repository list -n myacr
az acr repository show-tags -n myacr --repository ai/rag-api --orderby time_desc
az acr import -n myacr --source docker.io/library/redis:7 --image redis:7   # copy không cần pull/push
az acr login -n myacr                                                       # dùng token Entra ID</code></pre>
<h3 id="01-container/5c-acr-nang-cao">1.4 Geo-replication, Tasks, private link</h3>
<ul><li><strong>Geo-replication (Premium)</strong>: một registry phục vụ nhiều region — pull gần nơi chạy, một endpoint duy nhất, webhook theo từng region. Đề nói "đội ở 3 region cùng pull image lớn" → geo-replication, không phải tạo 3 registry.</li>
<li><strong>ACR Tasks</strong> có ba trigger: commit vào repo nguồn, <strong>base image update</strong> (image nền vá CVE là image của bạn tự build lại — điểm ăn tiền), và timer. <code>az acr build</code> = build ngay trên đám mây, máy dev không cần Docker.</li>
<li><strong>Private link (Premium)</strong>: kéo registry vào VPC qua private endpoint; bật <em>dedicated data endpoints</em> để data-plane cũng có tên riêng mà firewall whitelist được.</li>
<li>Dọn kho: retention policy cho untagged manifest, <code>az acr purge</code> chạy như một Task định kỳ; import image giữa registry bằng <code>az acr import</code> (không cần docker pull/push).</li>
<li>Xác thực theo thứ tự ưu tiên của đề: <strong>managed identity + AcrPull</strong> &gt; token/scope map (quyền hẹp theo repo) &gt; admin user (chỉ dev/test — thấy trong phương án production là sai).</li></ul>
<h3 id="01-container/5d-image-versioning-lifecycle">1.5 Phiên bản và vòng đời image trong ACR</h3>
<p>Outline ghi "build, store, <strong>version</strong>, and manage container images" — vế "version &amp; manage" hay bị bỏ qua khi ôn, trong khi đề hỏi rất cụ thể: khoá một bản production, dọn manifest rác, pull theo digest.</p>
<ul><li><strong>Tag mặc định là mutable</strong>: push lại cùng một tag là ghi đè bản cũ. <em>Stable tag</em> (<code>:latest</code>, <code>:v1</code>) tiện cho dev nhưng không tái lập được bản đã deploy — production dùng <em>unique tag</em> (build ID, <code>1.4.7-20260918.3</code>); khóa AI-200T00 còn khuyến nghị pull/deploy theo <strong>digest</strong> cho production cần đồng nhất tuyệt đối giữa các node ("Use image digests for production"). Unique tag và digest bổ sung cho nhau, không cái nào "thay cho" cái nào. Nếu deploy theo digest thì lưu ý bẫy retention untagged ở mục 1.7.</li>
<li><strong>Digest là bất biến tuyệt đối</strong>: <code>myacr.azurecr.io/rag-api@sha256:…</code> luôn trỏ đúng một manifest, ghi đè tag không đổi được nó. Lấy digest bằng <code>az acr manifest show-metadata -r myacr -n rag-api:1.4.7 --query digest</code>.</li>
<li>Ba thao tác quản lý kho hay ra đề: <strong>khoá</strong> (image lock), <strong>retention policy</strong> cho untagged manifest, và <strong>acr purge</strong> chạy như một Task theo lịch.</li></ul>
<h3 id="01-container/5d1-image-lock">1.6 Khoá image — bốn thuộc tính, đừng nhầm với lock của Resource Manager</h3>
<p>Khoá ở đây đặt bằng <code>az acr repository update</code> trên <em>dữ liệu</em> trong registry. Khoá tài nguyên bằng <code>az lock</code> / Settings &gt; Locks chỉ chặn thao tác quản trị (xoá registry, sửa replication) và <strong>không</strong> chặn xoá image — phương án nào nói "đặt resource lock để image không bị xoá" là sai.</p>
<table><thead><tr><th>Đặt <code>false</code> cho</th><th>Hiệu lực</th></tr></thead><tbody>
<tr><td><code>--write-enabled</code></td><td>Không ghi đè <em>và</em> không xoá được — đây là "khoá" đầy đủ</td></tr>
<tr><td><code>--delete-enabled</code></td><td>Vẫn cập nhật được nhưng không xoá được</td></tr>
<tr><td><code>--read-enabled</code></td><td>Chặn pull</td></tr>
<tr><td><code>--list-enabled</code></td><td>Ẩn khỏi danh sách tag/manifest</td></tr>
</tbody></table>
<pre><button class="copybtn">copy</button><code># Khoá một phiên bản: không ghi đè, không xoá
az acr repository update -n myacr --image rag-api:1.4.7 --write-enabled false

# Khoá theo digest (chắc chắn đúng bản đang chạy)
az acr repository update -n myacr --image rag-api@sha256:1234abcd --write-enabled false

# Khoá cả repository
az acr repository update -n myacr --repository rag-api --write-enabled false

# Cho phép cập nhật nhưng cấm xoá
az acr repository update -n myacr --image rag-api:1.4.7 --delete-enabled false --write-enabled true
</code></pre>
<ul><li><strong>Thuộc tính của tag và của manifest quản lý riêng</strong>: đặt <code>deleteEnabled=false</code> cho tag <em>không</em> đặt cho manifest tương ứng. Hệ quả thi: mở khoá bằng <code>--image repo:tag</code> mà vẫn xoá không được thì còn khoá ở manifest — phải mở thêm bằng <code>--image repo@$digest</code>.</li>
<li>Đặt <code>--write-enabled false</code> là đã chặn xoá, không cần đặt thêm <code>--delete-enabled false</code>.</li></ul>
<h3 id="01-container/5d2-retention-purge">1.7 Dọn kho — retention policy và acr purge</h3>
<pre><button class="copybtn">copy</button><code># Xoá manifest mất tag sau 30 ngày (Premium, preview)
az acr config retention update --registry myacr --status enabled --days 30 --type UntaggedManifests
az acr config retention show   --registry myacr
</code></pre>
<ul><li>Chỉ có ở <strong>Premium</strong>, hiện vẫn là preview; mặc định <strong>7 ngày</strong>, đặt được <strong>0–365</strong> — <code>0</code> nghĩa là xoá ngay khi manifest mất tag.</li>
<li><strong>Chỉ áp cho manifest bị gỡ tag sau khi bật policy</strong>: rác cũ đang nằm sẵn trong registry không bị đụng tới. Đề tả "bật retention 30 ngày mà dung lượng không giảm" là hỏi đúng chỗ này.</li>
<li>Chỉ hỗ trợ manifest media type của Docker; manifest <strong>OCI</strong> (<code>application/vnd.oci.image.manifest.v1+json</code>) không thuộc phạm vi policy — dọn bằng <code>acr purge</code>.</li>
<li>Manifest có <code>delete-enabled=false</code> được miễn trừ, nên khoá và retention sống chung được.</li>
<li><strong>Cảnh báo</strong>: hệ thống nào deploy bằng <em>digest</em> thì đừng bật retention untagged — manifest bị xoá là pull hỏng. Thay vào đó dùng unique tag.</li>
<li><code>acr purge</code> chạy như một ACR Task định kỳ, lọc theo regex và tuổi: <code>acr purge --filter 'rag-api:.*' --ago 30d --untagged</code>. Thêm <code>--include-locked</code> thì nó tự đặt lại <code>delete-enabled</code>/<code>write-enabled</code> về <code>true</code> trước khi xoá — tức là khoá <strong>không</strong> cản được purge chạy với cờ này.</li>
<li><em>Nguồn: Microsoft Learn — <a href="https://learn.microsoft.com/azure/container-registry/container-registry-image-lock" target="_blank" rel="noopener">Lock images</a> (bản 28/08/2026) và <a href="https://learn.microsoft.com/azure/container-registry/container-registry-retention-policy" target="_blank" rel="noopener">Retention policy for untagged manifests</a>, đối chiếu ngày 18/09/2026.</em></li></ul>
<h3 id="01-container/khoa-acr-context-run">1.8 Build context, az acr run và biến run của ACR Tasks</h3>
<p>Mục 1.3 đã có ba loại task. Mục này lấp các chi tiết còn lại: build context lấy từ đâu, cách chạy thử một image ngay trong ACR, và biến run nào sinh tag duy nhất. Đề hay hỏi "chạy smoke test image mà không cần máy có Docker".</p>
<div class="tablewrap"><table><thead><tr><th>Build context</th><th>Cách ACR lấy</th></tr></thead><tbody>
<tr><td>Thư mục local (<code>.</code>)</td><td>CLI nén thư mục rồi upload lên ACR</td></tr>
<tr><td>Git repo (GitHub / Azure DevOps, public hoặc private)</td><td>Truyền thẳng URL, không cần clone về máy</td></tr>
<tr><td>Remote tarball</td><td>File nén trên một web server truy cập được qua URL</td></tr>
<tr><td><code>/dev/null</code></td><td>Không cần source: chỉ chạy một image có sẵn, hoặc chạy lệnh <code>acr purge</code></td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code># Build thẳng từ Git, không clone
az acr build --registry myregistry --image inference-api:v1.0.0 \\
  https://github.com/myorg/inference-api.git

# Chạy thử một image đã có trong registry (context /dev/null = không upload gì)
az acr run --registry myregistry \\
  --cmd 'inference-api:v1.0.0 python --version' /dev/null
</code></pre>
<ul><li><strong>Biến run</strong>: <code>{{.Run.ID}}</code> và <code>{{.Run.Date}}</code> tạo tag duy nhất, truy ngược được lần chạy task; <code>{{.Run.Registry}}</code> là login server của registry, dùng trong YAML multi-step.</li>
<li><strong>Đa nền tảng</strong>: ACR Tasks build được image Linux lẫn Windows, kể cả kiến trúc ARM64 cho AI ở edge, không cần tự dựng môi trường build riêng.</li>
<li><strong>Base image trigger</strong> nhận base image nằm cùng registry, trên Docker Hub hoặc registry public khác. Base image <em>private</em> thì base và image ứng dụng nên ở <strong>cùng một registry</strong> để trigger tự phát hiện được.</li>
<li>Source trigger cần PAT để ACR tạo webhook trên repo. Cất PAT trong Key Vault, không ghi vào script.</li>
<li>Build nhanh hơn: <code>.dockerignore</code> để context upload nhỏ lại; ACR Tasks cache layer giữa các lần build, nên đặt lệnh hay đổi (vd <code>COPY</code> source) ở cuối Dockerfile.</li>
<li>Multi-step YAML có thể <em>build → push → cmd</em>: <code>cmd</code> chạy chính image vừa build để test (vd <code>python -m pytest tests/</code>).</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> <code>az acr run</code> chạy một lệnh/container trong ACR, còn <code>az acr build</code> build image. Đề cho "kiểm tra image có Python đúng version mà máy CI không có Docker" thì đáp án là <code>az acr run ... /dev/null</code>.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/store-manage-containers-azure-container-registry/3-build-run-acr-tasks" target="_blank" rel="noopener">Store and manage containers in ACR — Build and run images with ACR Tasks</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/khoa-acr-namespace-tag">1.9 Namespace repository, semantic version và dọn kho theo lịch</h3>
<p>Mục này bổ sung cách sắp xếp repository theo namespace, cách ghép stable tag với unique tag theo semver, và lệnh tạo task purge chạy theo lịch. Các mục 1.5–1.7 đã có khoá image và retention.</p>
<ul><li><strong>Namespace</strong> dùng dấu <code>/</code> trong tên repository: <code>production/inference-api</code>, <code>staging/inference-api</code>, <code>ml-team/model-server</code>. Ngoài việc gom nhóm, namespace còn phục vụ <strong>phân quyền</strong>: cho một đội push vào namespace của mình nhưng không được đụng image production.</li>
<li>Một artifact có thể mang <strong>nhiều tag</strong> cùng lúc (<code>v1.2.0</code> và <code>stable</code> trỏ cùng một image). Push hoặc pull không ghi tag thì Docker dùng <code>latest</code>.</li>
<li><strong>Layer dùng chung</strong>: nhiều image có chung base layer (vd <code>python:3.11</code>) thì registry chỉ giữ một bản, nên tốn ít dung lượng hơn và pull nhanh hơn.</li>
<li>ACR chứa được Docker image, <strong>Helm chart</strong> và mọi OCI artifact trong cùng một registry.</li></ul>
<div class="tablewrap"><table><thead><tr><th>Tag</th><th>Loại</th><th>Người dùng tag này nhận được gì</th></tr></thead><tbody>
<tr><td><code>inference-api:1</code></td><td>stable</td><td>Bản 1.x.x mới nhất, tự cập nhật trong major</td></tr>
<tr><td><code>inference-api:1.1</code></td><td>stable</td><td>Bản 1.1.x mới nhất</td></tr>
<tr><td><code>inference-api:1.1.0</code></td><td>unique</td><td>Đúng một bản patch, không bao giờ đổi</td></tr>
<tr><td><code>inference-api:v1.2.0-build4567-abc123f</code></td><td>unique ghép</td><td>Semver + build ID + commit SHA, truy vết nhanh lúc có sự cố</td></tr>
</tbody></table></div>
<ul><li>MAJOR tăng khi thay đổi phá tương thích (đổi API), MINOR khi thêm tính năng tương thích ngược, PATCH khi sửa lỗi hoặc vá bảo mật.</li>
<li>Stable tag hợp với <strong>base image</strong> (để bản vá chảy xuống qua base image trigger). Unique tag hợp với <strong>production</strong>.</li></ul>
<pre><button class="copybtn">copy</button><code># Purge chạy một lần (untagged, cũ hơn 30 ngày, repo inference-api)
az acr run --registry myregistry \\
  --cmd "acr purge --filter 'inference-api:.*' --untagged --ago 30d" /dev/null

# Task purge định kỳ: mỗi Chủ nhật 00:00 UTC, mọi repo, untagged cũ hơn 7 ngày
az acr task create --registry myregistry --name cleanup-untagged \\
  --cmd "acr purge --filter '.*:.*' --untagged --ago 7d" \\
  --schedule "0 0 * * 0" --context /dev/null
</code></pre>
<blockquote><p><strong>Bẫy thi:</strong> image bị khoá bằng <code>--write-enabled false</code> thì retention policy không xoá được (chỉ <code>acr purge --include-locked</code> mới vượt qua được khoá, xem mục 1.7). Retention policy là cách của Premium, áp một lần cho cả registry. Scheduled purge task lọc được theo regex repo và tuổi image.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/store-manage-containers-azure-container-registry/2-image-storage" target="_blank" rel="noopener">Registries, repositories, and artifacts</a> và <a href="https://learn.microsoft.com/en-us/training/modules/store-manage-containers-azure-container-registry/4-tag-version-images" target="_blank" rel="noopener">Tag and version images</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/trien-khai-acr">1.10 Triển khai ACR trên Azure — từng bước</h3>
<p>Thứ tự chuẩn: <strong>tạo registry → tắt admin user → đưa image lên → cấp AcrPull cho identity của nơi chạy</strong> → (Premium) khóa mạng + geo-replication.</p>
<pre><button class="copybtn">copy</button><code># 1. Resource group + registry (tên registry: 5–50 ký tự chữ/số, duy nhất toàn cầu)
az group create -n rg-ai200 -l eastus
az acr create -g rg-ai200 -n myacr --sku Premium --admin-enabled false

# 2. Đưa image lên: build trên cloud (không cần Docker local) hoặc push từ máy
az acr build -r myacr -t ai/rag-api:1.0.0 .
az acr login -n myacr &amp;&amp; docker push myacr.azurecr.io/ai/rag-api:1.0.0

# 3. Cấp quyền pull cho managed identity của App Service / Container Apps / AKS
ACR_ID=$(az acr show -n myacr --query id -o tsv)
az role assignment create --assignee $PRINCIPAL_ID --role AcrPull --scope $ACR_ID

# 4. (Premium) geo-replication + chặn public, chỉ vào qua private endpoint
az acr replication create -r myacr -l westeurope
az acr update -n myacr --public-network-enabled false
az network private-endpoint create -g rg-ai200 -n pe-acr --vnet-name vnet1 --subnet snet-pe \\
  --private-connection-resource-id $ACR_ID --group-id registry --connection-name acr</code></pre>
<p>Bản Bicep tương đương (IaC là đáp án "lặp lại được nhiều môi trường"):</p>
<pre><button class="copybtn">copy</button><code>resource acr 'Microsoft.ContainerRegistry/registries@2023-07-01' = {
  name: 'myacr'
  location: resourceGroup().location
  sku: { name: 'Premium' }
  properties: {
    adminUserEnabled: false
    publicNetworkAccess: 'Disabled'
  }
}</code></pre>
<ul><li><strong>Portal</strong>: Create a resource → Container Registry → chọn SKU; tab <em>Networking</em> chỉ mở khi chọn Premium — dấu hiệu nhận ra tính năng Premium-only.</li>
<li><strong>Kiểm tra</strong>: <code>az acr repository show-tags -n myacr --repository ai/rag-api</code>; với AKS dùng <code>az aks check-acr</code> để xác nhận node pull được.</li>
<li><strong>Bẫy</strong>: hạ SKU từ Premium xuống phải xóa geo-replication và connected registry trước (các tính năng Premium khác như private endpoint bị tắt khi hạ), dung lượng đang dùng cũng phải vừa giới hạn của SKU mới; tắt public network thì <code>az acr build</code> (ACR Tasks) không chạy được nữa trừ khi dùng dedicated agent pool; <code>AcrPull</code> đủ để chạy, <code>AcrPush</code> chỉ cấp cho pipeline CI.</li></ul>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/cli/azure/acr" target="_blank" rel="noopener">az acr (CLI reference)</a>, <a href="https://learn.microsoft.com/en-us/azure/container-registry/container-registry-skus" target="_blank" rel="noopener">ACR service tiers</a> trên Microsoft Learn, đối chiếu ngày 26/09/2026.</em></p>
<hr>
<h2 id="01-container/2-azure-app-service-cho-container">2. Azure App Service cho container</h2>
<h3 id="01-container/21-deploy">2.1 Deploy</h3>
<pre><button class="copybtn">copy</button><code>az appservice plan create -g rg -n plan1 --is-linux --sku P1V3
az webapp create -g rg -p plan1 -n rag-web \\
  --container-image-name myacr.azurecr.io/ai/rag-api:1.0.0

# Cập nhật image sau này
az webapp config container set -g rg -n rag-web \\
  --container-image-name myacr.azurecr.io/ai/rag-api:1.1.0 \\
  --container-registry-url https://myacr.azurecr.io</code></pre>
<h3 id="01-container/22-environment-variables-secrets-diem-thi-truc-tiep">2.2 Environment variables &amp; secrets (điểm thi trực tiếp)</h3>
<ul><li><strong>App settings = environment variables</strong> trong container. Đặt qua CLI/portal/ARM, container đọc bằng <code>os.environ</code>.</li><li>Container phải lắng nghe đúng port; App Service tự route nếu container nghe 80 hoặc 8080, cổng khác thì set <strong><code>WEBSITES_PORT</code></strong> (chỉ expose được một cổng HTTP).</li><li>Secrets <strong>không hard-code</strong>: dùng <strong>Key Vault reference</strong>.</li></ul>
<pre><button class="copybtn">copy</button><code>az webapp config appsettings set -g rg -n rag-web --settings \\
  WEBSITES_PORT=8000 \\
  COSMOS_ENDPOINT=https://mycosmos.documents.azure.com:443/ \\
  AZURE_OPENAI_KEY="@Microsoft.KeyVault(SecretUri=https://mykv.vault.azure.net/secrets/aoai-key/)"</code></pre>
<p>Điều kiện để Key Vault reference hoạt động:</p>
<ol><li>Web app có <strong>managed identity</strong></li><li>Identity được cấp quyền đọc secret (RBAC: <strong>Key Vault Secrets User</strong>)</li><li>Cú pháp đúng: <code>@Microsoft.KeyVault(SecretUri=...)</code> hoặc <code>@Microsoft.KeyVault(VaultName=...;SecretName=...)</code></li></ol>
<p>Ghi chú thêm:</p>
<ul><li><strong>Deployment slots</strong>: swap để zero-downtime; app setting có thể đánh dấu <strong>slot setting</strong> (không swap theo).</li><li><strong>Sidecar containers</strong> cho Linux App Service: gắn thêm container phụ (vd OTel collector) cạnh app chính.</li><li><strong>Health check</strong> path giúp App Service loại instance lỗi khỏi load balancer.</li><li><strong>Always On</strong> để tránh cold start; App Service Logs → <code>az webapp log tail</code>.</li></ul>
<h3 id="01-container/khoa-appservice-nguon-pull">2.3 Nguồn image, registry ngoài ACR và khi nào App Service pull lại image</h3>
<p>Mục 2.1 chỉ có lệnh deploy từ ACR. Đề còn hỏi deploy từ Docker Hub/GHCR và vì sao push đè cùng tag mà app vẫn chạy bản cũ.</p>
<ul><li>Portal có hai lựa chọn image source: <strong>Azure Container Registry</strong> (khuyến nghị cho production: Entra ID, managed identity, geo-replication, private network) và <strong>Other container registries</strong> (mọi registry HTTPS hỗ trợ Docker Registry HTTP API V2: Docker Hub, GHCR, registry tự host).</li>
<li>Pull từ ACR có hai cách xác thực: <strong>managed identity</strong> (system-assigned gắn vòng đời với app; user-assigned tồn tại độc lập, dùng chung được cho nhiều app, cấp quyền được trước khi tạo app) hoặc <strong>admin credentials</strong> (phải bật <code>az acr update --name myregistry --admin-enabled true</code>, chỉ dùng cho dev).</li></ul>
<pre><button class="copybtn">copy</button><code># Image private trên Docker Hub (GHCR thì server URL là https://ghcr.io)
az webapp create -g myResourceGroup -p myAppServicePlan -n myWebApp \\
  --container-image-name myusername/myapp:latest \\
  --docker-registry-server-url https://index.docker.io/v1/ \\
  --docker-registry-server-user myusername \\
  --docker-registry-server-password &lt;password&gt;
</code></pre>
<div class="tablewrap"><table><thead><tr><th>Sự kiện</th><th>App Service pull thế nào</th></tr></thead><tbody>
<tr><td>Deploy lần đầu / đổi image reference</td><td>Pull đủ mọi layer</td></tr>
<tr><td>Restart app</td><td>Kiểm tra thay đổi, chỉ pull layer đã đổi; image không đổi thì dùng cache</td></tr>
<tr><td>Scale out</td><td>Mỗi instance mới tự pull; có thể phải pull cả image nếu hạ tầng chưa cache</td></tr>
<tr><td>Đổi pricing tier</td><td>Có thể sang hạ tầng mới, pull lại từ đầu, startup chậm hơn</td></tr>
</tbody></table></div>
<ul><li>Đổi sang tag khác bằng <code>az webapp config container set</code> thì App Service <strong>tự restart</strong> và pull image mới.</li>
<li>Kiểm tra sau khi deploy: <code>az webapp show -g &lt;rg&gt; -n &lt;app&gt; --query defaultHostName -o tsv</code> rồi curl vào URL đó.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> push image mới đè lên <strong>cùng tag</strong> (vd <code>latest</code>) thì App Service <em>không tự phát hiện</em>. Phải restart app bằng tay, hoặc bật continuous deployment để webhook của registry kích hoạt restart.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/deploy-containers-azure-app-service/2-deploy-containers" target="_blank" rel="noopener">Deploy containers to Azure App Service — Deploy containers to Azure App Service</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/khoa-appservice-runtime">2.4 Runtime của custom container: startup command, cổng, /home, Always On, health check</h3>
<p>Các con số và biến môi trường ở đây quyết định app có khởi động được không và có mất dữ liệu không. Đề thường cho một triệu chứng rồi hỏi chỉnh setting nào.</p>
<pre><button class="copybtn">copy</button><code># Startup command: THAY CMD của Dockerfile, ENTRYPOINT giữ nguyên
az webapp config set -g myResourceGroup -n myDocumentProcessor \\
  --startup-file "gunicorn --bind=0.0.0.0:8000 --workers=4 app:application"

# Cần shell (chuỗi lệnh &amp;&amp;) thì bọc bằng /bin/bash -c
az webapp config set -g myResourceGroup -n myDocumentProcessor \\
  --startup-file "/bin/bash -c 'python migrate.py &amp;&amp; gunicorn app:application'"

# /home bền vững + dùng chung giữa các instance (TẮT mặc định với Linux custom container)
az webapp config appsettings set -g myResourceGroup -n myDocumentProcessor \\
  --settings WEBSITES_ENABLE_APP_SERVICE_STORAGE=true

az webapp config set -g myResourceGroup -n myDocumentProcessor --always-on true
az webapp config set -g myResourceGroup -n myDocumentProcessor \\
  --generic-configurations '{"healthCheckPath": "/health"}'
</code></pre>
<div class="tablewrap"><table><thead><tr><th>Thiết lập</th><th>Con số / hành vi cần nhớ</th></tr></thead><tbody>
<tr><td>Cổng</td><td>Tự route nếu container nghe <strong>80 hoặc 8080</strong>; cổng khác thì đặt <code>WEBSITES_PORT</code>. Chỉ expose <strong>một</strong> cổng HTTP. TLS kết thúc ở platform, container chỉ nhận HTTP.</td></tr>
<tr><td>File system</td><td>Mặc định ghi vào container là tạm, mất khi restart. Bật storage thì <code>/home</code> bền qua restart, <strong>dùng chung</strong> cho mọi instance khi scale out, log nằm ở <code>/home/LogFiles</code>. Quota lưu trữ dùng chung cho mọi app trong plan.</td></tr>
<tr><td>Idle</td><td>App ngủ sau khoảng <strong>20 phút</strong> không có request, request kế tiếp gặp cold start</td></tr>
<tr><td>Always On</td><td>Platform gửi request định kỳ để giữ app ấm; cần tier <strong>Basic trở lên</strong></td></tr>
<tr><td>Health check</td><td>Ping path mỗi <strong>1 phút</strong>; mặc định fail <strong>10 lần</strong> thì gỡ instance khỏi load balancer, hỏng lâu thì có thể bị thay. Đổi cấu hình health check làm <strong>app restart</strong>.</td></tr>
</tbody></table></div>
<ul><li>Cổng mặc định hay gặp: Express 3000, Gunicorn 8000, Spring Boot 8080, ASP.NET Core 80 (80 và 8080 không cần đặt <code>WEBSITES_PORT</code>).</li>
<li>Cần dung lượng lớn hoặc I/O cao thì mount thêm Azure Storage, đừng dựa vào quota <code>/home</code>.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "file tải lên biến mất sau restart" thì đặt <code>WEBSITES_ENABLE_APP_SERVICE_STORAGE=true</code> và ghi vào <code>/home</code>. "Request đầu tiên sau giờ nghỉ trưa rất chậm" thì bật Always On, không phải tăng SKU. Always On không có ở tier Free/Shared.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/deploy-containers-azure-app-service/3-configure-runtime" target="_blank" rel="noopener">Deploy containers to Azure App Service — Configure container runtime behavior</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/khoa-appservice-settings">2.5 App settings chi tiết: tên biến, connection string, bulk edit, slot setting</h3>
<p>Mục 2.2 đã có app settings và Key Vault reference. Phần còn thiếu là quy tắc đặt tên, prefix của connection string và cách sửa hàng loạt. Đây là loại câu hỏi "biến môi trường tên gì".</p>
<ul><li>Mọi app setting được <strong>mã hoá khi lưu</strong>, chỉ giải mã lúc bơm vào container, kể cả setting không nhạy cảm.</li>
<li>Tên chỉ gồm chữ, số và <code>_</code>. Linux container không nhận <code>:</code> nên key lồng của .NET phải đổi sang <strong>hai dấu gạch dưới</strong>: <code>ConnectionStrings:DefaultConnection</code> thành <code>ConnectionStrings__DefaultConnection</code>.</li></ul>
<pre><button class="copybtn">copy</button><code>az webapp config connection-string set -g myResourceGroup -n myDocumentProcessor \\
  --connection-string-type SQLAzure \\
  --settings DefaultConnection="Server=myserver.database.windows.net;Database=mydb;..."
# → container thấy biến SQLAZURECONNSTR_DefaultConnection

# Bulk edit: xuất JSON, sửa, nạp lại bằng tiền tố @
az webapp config appsettings list -g myResourceGroup -n myDocumentProcessor -o json &gt; settings.json
az webapp config appsettings set  -g myResourceGroup -n myDocumentProcessor --settings @settings.json

# Slot setting: dính với slot, KHÔNG đi theo khi swap
az webapp config appsettings set -g myResourceGroup -n myDocumentProcessor --slot staging \\
  --slot-settings ENVIRONMENT=staging API_ENDPOINT=https://api-staging.example.com
az webapp config appsettings list -g myResourceGroup -n myDocumentProcessor \\
  --query "[?slotSetting==\\\`true\\\`].name"
</code></pre>
<div class="tablewrap"><table><thead><tr><th>Loại connection string</th><th>Prefix biến môi trường</th></tr></thead><tbody>
<tr><td>SQL Server</td><td><code>SQLCONNSTR_</code></td></tr>
<tr><td>SQL Azure</td><td><code>SQLAZURECONNSTR_</code></td></tr>
<tr><td>MySQL</td><td><code>MYSQLCONNSTR_</code></td></tr>
<tr><td>PostgreSQL</td><td><code>POSTGRESQLCONNSTR_</code></td></tr>
<tr><td>Custom</td><td><code>CUSTOMCONNSTR_</code></td></tr>
</tbody></table></div>
<ul><li>App Python/Node.js nên dùng app setting thường cho chuỗi kết nối DB. Prefix kiểu chỉ có ích với framework .NET vốn đọc định dạng đó.</li>
<li>Nên để thành slot setting: định danh môi trường, endpoint riêng từng môi trường, feature flag và cấu hình log verbose của staging.</li>
<li>Muốn biết setting đã thực sự vào container chưa: vào Kudu <code>https://&lt;app-name&gt;.scm.azurewebsites.net/Env</code>, trang này hiện cả app setting lẫn biến do hệ thống cấp.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> app Python đọc <code>os.environ["DefaultConnection"]</code> mà không thấy giá trị là vì connection string kiểu SQLAzure được bơm vào dưới tên <code>SQLAZURECONNSTR_DefaultConnection</code>.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/deploy-containers-azure-app-service/4-configure-settings" target="_blank" rel="noopener">Deploy containers to Azure App Service — Configure application settings</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/khoa-appservice-chan-doan">2.6 Chẩn đoán container trên App Service: log, Kudu, SSH, diagnostic settings</h3>
<p>Tài liệu hiện có mới nhắc <code>az webapp log tail</code>. Mục này đi đủ các công cụ chẩn đoán, từng công cụ nhìn thấy được gì, cùng các log category và điều kiện bắt buộc để SSH vào container.</p>
<pre><button class="copybtn">copy</button><code># Lưu stdout/stderr của container vào /home/LogFiles
az webapp log config -g myResourceGroup -n myDocumentProcessor \\
  --docker-container-logging filesystem
az webapp log tail  -g myResourceGroup -n myDocumentProcessor   # stream mọi instance

# Đẩy log sang Log Analytics để giữ lâu và query
az monitor diagnostic-settings create --resource "$resourceId" --name myDiag \\
  --workspace "$workspaceId" \\
  --logs '[{"category":"AppServiceConsoleLogs","enabled":true},{"category":"AppServiceHTTPLogs","enabled":true}]'
</code></pre>
<div class="tablewrap"><table><thead><tr><th>Log category</th><th>Nội dung</th></tr></thead><tbody>
<tr><td><code>AppServiceConsoleLogs</code></td><td>stdout/stderr của container</td></tr>
<tr><td><code>AppServiceHTTPLogs</code></td><td>Request/response HTTP</td></tr>
<tr><td><code>AppServicePlatformLogs</code></td><td>Sự kiện vòng đời container, thông điệp của platform</td></tr>
<tr><td><code>AppServiceAppLogs</code></td><td>Log mức ứng dụng (khi đã cấu hình)</td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code>AppServiceConsoleLogs
| where Level == "Error"
| where TimeGenerated &gt; ago(1h)
| project TimeGenerated, ResultDescription
| order by TimeGenerated desc
</code></pre>
<ul><li><strong>Kudu (SCM site)</strong> <code>https://&lt;app&gt;.scm.azurewebsites.net</code>: trang Environment, file browser cho <code>/home</code> (có <code>/home/LogFiles</code>), tải diagnostic dump dạng ZIP. <em>Giới hạn:</em> SCM không chạy chung môi trường với container app, nên không duyệt được toàn bộ file system của container và không xem được tiến trình bên trong.</li>
<li><strong>SSH vào container</strong>: image phải cài <code>openssh-server</code>, SSH nghe cổng <strong>2222</strong>, mật khẩu root là <code>Docker!</code> (App Service yêu cầu), sshd phải chạy song song với app. Vào qua portal ở Development Tools, mục SSH.</li></ul>
<div class="tablewrap"><table><thead><tr><th>Triệu chứng</th><th>Nguyên nhân hay gặp</th></tr></thead><tbody>
<tr><td>Container không start</td><td>Thiếu biến môi trường lúc khởi động; <code>WEBSITES_PORT</code> lệch cổng thật; app crash vì thiếu dependency</td></tr>
<tr><td>Container chạy nhưng trả 404</td><td>App bind <code>localhost</code> thay vì <code>0.0.0.0</code>; sai cổng; route không khớp path</td></tr>
<tr><td>Thiếu biến môi trường</td><td>Chưa bấm lưu setting, gõ sai tên. Kiểm tra lại ở Kudu <code>/Env</code></td></tr>
<tr><td>Cold start chậm</td><td>Bật Always On, thu nhỏ image (base nhỏ, multi-stage), dời phần khởi tạo nặng ra sau</td></tr>
</tbody></table></div>
<blockquote><p><strong>Bẫy thi:</strong> cần "xem biến môi trường App Service thực sự bơm vào" thì dùng Kudu <code>/Env</code>. Cần "shell vào trong container đang chạy" thì dùng SSH, và image phải chuẩn bị sẵn cổng 2222 cùng <code>root:Docker!</code>. Kudu không vào được bên trong container.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/deploy-containers-azure-app-service/5-observe-troubleshoot" target="_blank" rel="noopener">Deploy containers to Azure App Service — Observe and troubleshoot containerized apps</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/khoa-appservice-sidecar">2.7 Sidecar trên App Service: mô hình sitecontainers, cấu hình và giao tiếp</h3>
<p>Khóa học có hẳn một module cho kịch bản này: API chính và model server local chạy cạnh nhau trên App Service Linux. Tài liệu hiện có mới có một dòng về sidecar. Đề sẽ hỏi cổng, <code>isMain</code>, gọi nhau thế nào và setting cũ nào mất tác dụng.</p>
<ul><li>Một app có <strong>1 container main</strong> và tối đa <strong>9 sidecar</strong>. Traffic HTTP từ ngoài chỉ vào container <code>isMain: true</code>. Mỗi container giữ image, startup command và cấu hình riêng.</li>
<li>Sidecar đi theo vòng đời của app: start/stop cùng app; scale out thì instance mới có đủ main và mọi sidecar; scale in thì gỡ cả bộ. Image sidecar được cập nhật riêng, nhưng cấu hình vẫn thuộc cùng một app.</li>
<li>Mô hình cấu hình mới: mỗi container là một resource <code>Microsoft.Web/sites/sitecontainers</code>, app có <code>LinuxFxVersion=sitecontainers</code>, thay cho <code>DOCKER|&lt;image&gt;</code> kiểu cũ và Docker Compose.</li>
<li>Container main phải nghe cổng <strong>80 hoặc 8080</strong>. Mỗi tiến trình phải có cổng <strong>riêng</strong> vì mọi container dùng chung network namespace. <code>targetPort</code> chỉ là metadata: đổi nó không làm tiến trình trong image nghe cổng khác.</li></ul>
<pre><button class="copybtn">copy</button><code>az webapp create -n &lt;app&gt; -g &lt;rg&gt; --plan &lt;linux-plan&gt; --sitecontainers-app
# hoặc chuyển app custom container cũ sang mô hình mới
az webapp sitecontainers convert --mode sitecontainers -n &lt;app&gt; -g &lt;rg&gt;

az webapp sitecontainers create -n &lt;app&gt; -g &lt;rg&gt; --container-name main-api \\
  --image &lt;acr&gt;.azurecr.io/support-api:&lt;tag&gt; --target-port 8080 --is-main
az webapp sitecontainers create -n &lt;app&gt; -g &lt;rg&gt; --container-name model-server \\
  --image &lt;acr&gt;.azurecr.io/model-server:&lt;tag&gt; --target-port 11434   # không --is-main = sidecar

# Hoặc khai cả bộ bằng một file spec (các tham số container khác bị bỏ qua)
az webapp sitecontainers create -n &lt;app&gt; -g &lt;rg&gt; --sitecontainers-spec-file ./sitecontainers-spec.json
</code></pre>
<ul><li><strong>Biến môi trường</strong>: app setting thấy được ở <em>mọi</em> container. <code>environmentVariables[].value</code> trong site container chứa <strong>tên của một App Setting</strong>, không chứa giá trị literal. Ví dụ biến <code>MODEL_ENDPOINT</code> của main-api lấy giá trị từ app setting <code>MODEL_ENDPOINT_VALUE=http://localhost:11434</code>.</li>
<li><strong>Pull image private</strong>: dùng managed identity với <code>"authType": "UserAssigned"</code> và <code>"userManagedIdentityClientId": "&lt;client-id&gt;"</code>. Registry dùng chế độ <em>RBAC Registry Permissions</em> thì cấp <code>AcrPull</code>; chế độ <em>RBAC Registry + ABAC Repository Permissions</em> thì cấp <code>Container Registry Repository Reader</code> (có thể kèm điều kiện theo repository). Registry phải chấp nhận token audience ARM.</li>
<li><strong>Gọi nhau</strong> qua <code>localhost:&lt;port&gt;</code>, không qua tên container. Mỗi instance gọi sidecar của chính nó. Sidecar không có endpoint public, nên main app phải lo xác thực và lọc request.</li>
<li><strong>Chia sẻ file</strong>: <code>/home</code> mặc định được mount vào mọi container, không cần khai <code>volumeMounts</code>. Nên ghi ra file tạm rồi rename để bên đọc không gặp file ghi dở. Đừng thêm <code>volumeMounts</code> khi không cần, vì mount xung đột có thể làm app hoặc SCM không start được.</li>
<li>Gọi local vẫn có thể fail: đặt connect timeout ngắn, đặt deadline cho cả request, chỉ retry thao tác idempotent, trả 503 cho tới khi health của sidecar báo OK.</li></ul>
<div class="tablewrap"><table><thead><tr><th>Hợp với sidecar</th><th>Nên tách thành service riêng</th></tr></thead><tbody>
<tr><td>Mỗi instance app cần đúng một tiến trình phụ local</td><td>Nhiều app dùng chung một model endpoint/cache</td></tr>
<tr><td>Start, deploy, scale cùng nhịp với app chính</td><td>Model cần GPU hoặc chính sách scale khác API</td></tr>
<tr><td>Gọi local giảm được độ trễ hoặc giữ dữ liệu trong biên</td><td>Cần biên mạng/bảo mật riêng</td></tr>
<tr><td>CPU+RAM cộng lại vừa với App Service plan; image tin cậy</td><td>Phải sống khi app chính restart, hoặc lỗi của nó không được ăn tài nguyên của app</td></tr>
</tbody></table></div>
<blockquote><p><strong>Bẫy thi:</strong> sau khi chuyển sang sitecontainers, <code>WEBSITES_PORT</code> và <code>DOCKER_REGISTRY_SERVER_*</code> <strong>không còn cấu hình</strong> container nữa. Cổng khai bằng <code>--target-port</code>, xác thực registry khai bằng <code>authType</code>. Main app gọi sidecar bằng <code>http://model-server:11434</code> là sai, phải dùng <code>http://localhost:11434</code>.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/deploy-sidecar-azure-app-service/2-choose-sidecar-pattern" target="_blank" rel="noopener">Choose the App Service sidecar pattern</a>, <a href="https://learn.microsoft.com/en-us/training/modules/deploy-sidecar-azure-app-service/3-configure-sidecar-containers" target="_blank" rel="noopener">Configure main and sidecar containers</a>, <a href="https://learn.microsoft.com/en-us/training/modules/deploy-sidecar-azure-app-service/4-connect-containers-share-files" target="_blank" rel="noopener">Connect containers and share files</a> (module Run sidecar-enabled AI applications on Azure App Service, khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/khoa-sidecar-chan-doan">2.8 Chẩn đoán lỗi sidecar — đi từ cấu hình tới localhost</h3>
<p>Sidecar lỗi thường hiện ra như lỗi của app chính. Mục này tách lỗi theo từng tầng để biết phải sửa ở đâu.</p>
<pre><button class="copybtn">copy</button><code>az webapp sitecontainers list   -n &lt;app&gt; -g &lt;rg&gt; -o table                 # thiếu sidecar? sai tag? 2 main?
az webapp sitecontainers show   -n &lt;app&gt; -g &lt;rg&gt; --container-name model-server
az webapp sitecontainers status -n &lt;app&gt; -g &lt;rg&gt; --container-name model-server   # platform có báo running?
az webapp sitecontainers log    -n &lt;app&gt; -g &lt;rg&gt; --container-name model-server   # log riêng container
</code></pre>
<div class="tablewrap"><table><thead><tr><th>Tầng</th><th>Kiểm tra gì</th></tr></thead><tbody>
<tr><td>Pull image</td><td>Đúng login server/repo/tag; identity đã gán vào app và có đúng role pull theo permissions mode; đúng <code>authType</code> và client ID; registry nhận token ARM; firewall cho phép IP outbound của app, hoặc có private endpoint + DNS + VNet integration và đã bật <strong>Pull image over VNet</strong>. Role vừa cấp thì chờ propagate rồi mới kết luận.</td></tr>
<tr><td>Startup</td><td>Entrypoint/startup command; tiến trình chính phải chạy foreground; biến môi trường, đường dẫn file; kiến trúc CPU của base image; cổng thật khớp target port</td></tr>
<tr><td>Tài nguyên</td><td>Main và sidecar dùng chung tài nguyên plan. Restart lặp lại mà không có lỗi ứng dụng thường là do hết RAM lúc nạp model. Scale out thì mỗi instance mới lại nạp thêm một model.</td></tr>
<tr><td>localhost</td><td><code>ConnectError</code> (connection refused) nghĩa là chưa có tiến trình nghe cổng đó. Timeout: sidecar khởi động chậm, thiếu tài nguyên hoặc request quá ngân sách. Nhận được mã lỗi HTTP: kết nối đã thông, lỗi nằm ở request hoặc model server.</td></tr>
<tr><td>File chia sẻ</td><td><code>WEBSITES_ENABLE_APP_SERVICE_STORAGE</code> không được là <code>false</code>; hai bên cùng path dưới <code>/home</code>; gỡ <code>volumeMounts</code> tự thêm; quyền user trong image; đừng giả định file local xuất hiện trên mọi instance</td></tr>
</tbody></table></div>
<blockquote><p><strong>Bẫy thi:</strong> tăng SKU plan không sửa được crash tiến trình, thiếu setting hay sai tag. Chỉ scale khi số đo cho thấy thiếu tài nguyên thật. Nếu model server chiếm phần lớn tài nguyên hoặc cần luật scale khác thì tách nó ra host riêng.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/deploy-sidecar-azure-app-service/5-diagnose-sidecar-failures" target="_blank" rel="noopener">Run sidecar-enabled AI applications on Azure App Service — Diagnose sidecar failures</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/trien-khai-appservice">2.9 Triển khai App Service (container) trên Azure — từng bước</h3>
<p>Thứ tự: <strong>plan Linux → web app có system identity → AcrPull → bật pull bằng managed identity → app settings → slot</strong>.</p>
<pre><button class="copybtn">copy</button><code># 1. Plan Linux (container chỉ chạy trên plan Linux hoặc Windows container)
az appservice plan create -g rg-ai200 -n plan-rag --is-linux --sku P1V3

# 2. Web app + system-assigned identity
az webapp create -g rg-ai200 -p plan-rag -n rag-web \\
  --container-image-name myacr.azurecr.io/ai/rag-api:1.0.0 --assign-identity '[system]'

# 3. Cho identity pull từ ACR, rồi bảo App Service dùng identity thay vì user/password
PID=$(az webapp identity show -g rg-ai200 -n rag-web --query principalId -o tsv)
az role assignment create --assignee $PID --role AcrPull --scope $ACR_ID
az webapp config set -g rg-ai200 -n rag-web \\
  --generic-configurations '{"acrUseManagedIdentityCreds": true}'

# 4. Cổng container + secret qua Key Vault reference
az webapp config appsettings set -g rg-ai200 -n rag-web --settings \\
  WEBSITES_PORT=8000 \\
  "OPENAI_KEY=@Microsoft.KeyVault(SecretUri=https://kv1.vault.azure.net/secrets/OpenAiKey/)"

# 5. Slot staging để deploy không downtime (cần tier Standard trở lên)
az webapp deployment slot create -g rg-ai200 -n rag-web --slot staging
az webapp deployment slot swap   -g rg-ai200 -n rag-web --slot staging</code></pre>
<ul><li><strong>Continuous deployment</strong>: <code>az webapp deployment container config --enable-cd true</code> bật CD và trả về webhook URL (xem lại bằng <code>az webapp deployment container show-cd-url</code>) — CLI <em>không</em> tự tạo webhook bên ACR, phải thêm <code>az acr webhook create -r myacr -n cdweb --uri &lt;url&gt; --actions push</code>; làm trên Portal thì webhook được tạo sẵn.</li>
<li><strong>Đường tắt</strong>: <code>az webapp create</code> còn có <code>--acr-use-identity --acr-identity '[system]'</code> — bật pull bằng identity ngay lúc tạo, thay cho bước <code>generic-configurations</code>.</li>
<li><strong>Kiểm tra</strong>: <code>az webapp log tail</code> xem container có lên không; lỗi "container didn't respond to HTTP pings" gần như luôn là sai <code>WEBSITES_PORT</code>.</li>
<li><strong>Bẫy</strong>: dùng user-assigned identity để pull thì phải đặt thêm <code>acrUserManagedIdentityID</code> (client ID); chỉ gán AcrPull mà quên <code>acrUseManagedIdentityCreds</code> thì app không dùng identity để pull và pull image thất bại (unauthorized); registry cũng phải cho phép token audience ARM (<code>az acr config authentication-as-arm show -r myacr</code>), tắt đi là pull bằng identity lỗi "token validation failed".</li></ul>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/azure/app-service/configure-custom-container" target="_blank" rel="noopener">Configure a custom container</a>, <a href="https://learn.microsoft.com/en-us/cli/azure/webapp" target="_blank" rel="noopener">az webapp (CLI reference)</a> trên Microsoft Learn, đối chiếu ngày 26/09/2026.</em></p>
<hr>
<h2 id="01-container/3-azure-container-apps-aca-dich-vu-trong-tam-nhat-domain-nay">3. Azure Container Apps (ACA) — dịch vụ trọng tâm nhất domain này</h2>
<h3 id="01-container/31-kien-truc">3.1 Kiến trúc</h3>
<ul><li><strong>Environment</strong>: biên giới bảo mật/mạng, chia sẻ Log Analytics workspace và VNet. Nhiều container app trong 1 environment gọi nhau bằng <strong>tên app</strong> (internal DNS).</li><li><strong>Container app</strong> → nhiều <strong>revision</strong> (bất biến) → mỗi revision có nhiều <strong>replica</strong> → mỗi replica có nhiều <strong>container</strong>.</li></ul>
<h3 id="01-container/32-revision-traffic">3.2 Revision &amp; traffic</h3>
<ul><li>Revision mới sinh ra khi thay đổi <strong>revision-scope</strong> (image, env var, CPU/memory, scale rule…).</li><li>Thay đổi <strong>application-scope</strong> (secrets value, ingress config, dapr) <strong>không</strong> tạo revision mới.</li><li>Chế độ:</li><li style="margin-left:14px"><strong>Single revision</strong> (mặc định): chỉ 1 revision active, revision mới nhận 100% traffic.</li><li style="margin-left:14px"><strong>Multiple revisions</strong>: nhiều revision cùng chạy → <strong>traffic splitting</strong> cho blue-green / canary / A-B test.</li></ul>
<pre><button class="copybtn">copy</button><code>az containerapp create -g rg -n rag-api \\
  --environment aca-env \\
  --image myacr.azurecr.io/ai/rag-api:1.0.0 \\
  --registry-server myacr.azurecr.io --registry-identity system \\
  --target-port 8000 --ingress external \\
  --min-replicas 0 --max-replicas 10 \\
  --secrets "cosmos-key=xxx" \\
  --env-vars "COSMOS_KEY=secretref:cosmos-key" "MODE=prod"

# Bật multi-revision và chia traffic 80/20 (canary)
az containerapp revision set-mode -g rg -n rag-api --mode multiple
az containerapp ingress traffic set -g rg -n rag-api \\
  --revision-weight rag-api--v1=80 rag-api--v2=20

az containerapp revision list -g rg -n rag-api -o table
az containerapp revision deactivate -g rg -n rag-api --revision rag-api--v1</code></pre>
<ul><li><strong>Revision suffix</strong> (<code>--revision-suffix v2</code>) để đặt tên revision dễ đọc.</li><li>Secrets: khai báo ở app level, tham chiếu bằng <code>secretref:&lt;name&gt;</code>; hoặc lấy trực tiếp từ Key Vault: <code>--secrets "aoai=keyvaultref:https://kv.vault.azure.net/secrets/aoai,identityref:system"</code> — với system identity thì chạy bằng <code>az containerapp secret set</code> <em>sau</em> khi app đã tạo và identity đã có role Key Vault Secrets User (xem mục 3.21).</li></ul>
<h3 id="01-container/33-scaling-keda-bat-buoc-nam">3.3 Scaling &amp; KEDA (bắt buộc nắm)</h3>
<p>Container Apps dùng <strong>KEDA</strong> làm engine autoscale. Ba loại scale rule:</p>
<div class="tablewrap"><table><thead><tr><th>Loại</th><th>Dùng khi</th></tr></thead><tbody><tr><td><strong>HTTP</strong></td><td>Scale theo số concurrent request/replica</td></tr><tr><td><strong>TCP</strong></td><td>Scale theo số concurrent connection</td></tr><tr><td><strong>Custom (KEDA scaler)</strong></td><td>Queue length, event, metric ngoài — vd <code>azure-servicebus</code>, <code>azure-queue</code>, <code>azure-eventhub</code>, <code>redis</code>, <code>cron</code>, <code>cpu</code>, <code>memory</code></td></tr></tbody></table></div>
<p>Đặc tính quan trọng:</p>
<ul><li><strong>Scale to zero</strong> khi <code>min-replicas = 0</code> (chỉ tính tiền khi có việc). Với HTTP/event scaler thì mới scale-to-zero được; rule <strong>cpu/memory không cho phép scale về 0</strong>.</li><li>Nhiều rule → KEDA lấy <strong>số replica lớn nhất</strong> trong các rule (OR logic).</li><li>Job dạng batch/AI inference dài → dùng <strong>Container Apps Jobs</strong> (event-driven job hoặc scheduled job) thay vì app luôn chạy.</li></ul>
<p>Ví dụ scale theo Service Bus queue (kịch bản AI pipeline điển hình: message → embed → ghi vector DB):</p>
<pre><button class="copybtn">copy</button><code>az containerapp create -g rg -n embed-worker \\
  --environment aca-env --image myacr.azurecr.io/ai/embed-worker:1.0.0 \\
  --min-replicas 0 --max-replicas 30 \\
  --secrets "sb-conn=&lt;connection-string&gt;" \\
  --scale-rule-name sb-queue \\
  --scale-rule-type azure-servicebus \\
  --scale-rule-metadata "queueName=docs-to-embed" "namespace=mysb" "messageCount=20" \\
  --scale-rule-auth "connection=sb-conn"</code></pre>
<p><code>messageCount=20</code> = mục tiêu <strong>20 message / replica</strong>. 200 message → ~10 replica.</p>
<p>YAML tương đương (dạng hay xuất hiện trong câu hỏi kéo-thả):</p>
<pre><button class="copybtn">copy</button><code>properties:
  template:
    scale:
      minReplicas: 0
      maxReplicas: 30
      rules:
        - name: sb-queue
          custom:
            type: azure-servicebus
            metadata:
              queueName: docs-to-embed
              namespace: mysb
              messageCount: "20"
            auth:
              - secretRef: sb-conn
                triggerParameter: connection</code></pre>
<p><strong>Scaler <code>azure-queue</code> (Queue Storage) — bộ metadata khác hẳn <code>azure-servicebus</code>:</strong></p>
<pre><button class="copybtn">copy</button><code>az containerapp create -g rg -n thumb-worker \\
  --environment aca-env --image myacr.azurecr.io/ai/thumb:1.0.0 \\
  --min-replicas 0 --max-replicas 10 \\
  --scale-rule-name azure-queue \\
  --scale-rule-type azure-queue \\
  --scale-rule-metadata "accountName=mystorage" "queueName=queue1" "queueLength=1" \\
  --scale-rule-identity &lt;user-assigned-identity-id&gt;</code></pre>
<ul>
<li>Ba metadata của <code>azure-queue</code>: <code>accountName</code>, <code>queueName</code>, <code>queueLength</code> (số message mục tiêu <strong>trên mỗi replica</strong>). Đề rất hay trộn với <code>namespace</code>/<code>messageCount</code> vốn là của <code>azure-servicebus</code>.</li>
<li><code>--scale-rule-identity</code> (hoặc <code>identity: 'system'</code> trong Bicep) cho scaler xác thực bằng <strong>managed identity</strong> — khỏi nhét connection string vào <code>--secrets</code> rồi trỏ bằng <code>--scale-rule-auth</code>.</li>
<li>Một số scaler cho phép metadata mang hậu tố <strong><code>FromEnv</code></strong> để lấy giá trị từ <strong>biến môi trường của container đầu tiên</strong> khai trong template — chi tiết dễ sảy khi app có nhiều container.</li>
<li>Công thức scale-out đầy đủ, không chỉ mỗi <code>ceil</code>: <code>min(maxReplicaCount, desiredReplicas, max(4, 2 × currentReplicaCount))</code>. Bậc thang là 1 → 4 → 8 → 16 → 32…, nên queue nhảy vọt cũng <strong>không</strong> ra ngay số replica lý thuyết ở chu kỳ polling đầu tiên. Chiều ngược lại thì gỡ 100% số replica cần tắt trong một lần.</li>
<li>Ở <strong>multiple revision mode</strong>, thêm một scale trigger sẽ <strong>tạo revision mới</strong>; revision cũ vẫn sống với scale rule cũ cho tới khi bạn chia lại traffic.</li>
</ul>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/azure/container-apps/scale-app" target="_blank" rel="noopener">Set scaling rules in Azure Container Apps</a> trên Microsoft Learn, đọc ngày 15/09/2026.</em></p>
<h3 id="01-container/34-networking-tinh-nang-khac">3.4 Networking &amp; tính năng khác</h3>
<ul><li><strong>Ingress</strong>: <code>external</code> (public) / <code>internal</code> (chỉ trong environment) / tắt (worker không nhận HTTP).</li><li>Ingress hỗ trợ HTTP/1.1, HTTP/2, gRPC (<code>--transport http2</code>), và session affinity.</li><li><strong>Dapr</strong> tích hợp sẵn: service invocation, pub/sub, state store, bindings — bật bằng <code>--enable-dapr</code>.</li><li>Managed identity (system/user-assigned) để pull ACR và gọi Cosmos DB/Key Vault không cần key.</li></ul>
<h3 id="01-container/5b1-ingress">3.5 Ingress chuyên sâu</h3>
<ul><li><strong>External</strong> = có địa chỉ public; <strong>internal</strong> = chỉ trong environment/VNet — API nội bộ giữa các app trong cùng environment gọi nhau qua DNS nội bộ <code>http://&lt;app-name&gt;</code>, không cần đi ra ngoài.</li>
<li><code>targetPort</code> phải đúng cổng container lắng nghe — triệu chứng sai cổng: revision "Provisioned" nhưng request timeout; đây là lỗi nộp đề hay gặp cùng <code>WEBSITES_PORT</code> bên App Service.</li>
<li>Ingress hỗ trợ HTTP/2, gRPC, WebSocket; giới hạn IP bằng <code>ipSecurityRestrictions</code>; TLS termination có sẵn, custom domain + managed certificate miễn phí.</li></ul>
<h3 id="01-container/5b2-revision-va-traffic">3.6 Revision mode và chia traffic chuyên sâu</h3>
<ul><li><strong>Single</strong> (mặc định): revision mới thay hẳn cũ. <strong>Multiple</strong>: giữ nhiều revision sống — chia traffic 90/10 để canary, hoặc gắn <strong>label</strong> (staging/prod) để có URL riêng từng revision rồi hoán đổi.</li>
<li>Chỉ thay đổi thuộc <strong>revision-scope</strong> (image, env var, scale rule, CPU/RAM) mới sinh revision mới; thay đổi <strong>application-scope</strong> (ingress, secrets, Dapr) áp cho mọi revision và không tạo bản mới.</li>
<li>Rollback = trỏ 100% traffic về revision cũ. Revision cũ bị deactivate vẫn kích hoạt lại được (Container Apps giữ tới 100 revision inactive), nên khóa học khuyên deactivate revision cũ sớm sau khi chuyển traffic xong để khỏi tốn tài nguyên; thứ không nên làm vội là <em>xoá</em> revision.</li></ul>
<h3 id="01-container/5b3-scale">3.7 Scale rule ngoài KEDA queue</h3>
<ul><li>HTTP scale rule theo <strong>concurrent requests</strong> (mặc định 10/replica); <code>minReplicas: 0</code> cho phép scale về 0 (cold start đổi lấy tiền); job nền không có ingress thì bắt buộc scale bằng KEDA (queue, cron, Event Hubs).</li>
<li>Bẫy đề: app xử lý queue mà đặt HTTP rule → không bao giờ scale vì không có request; ngược lại API đặt queue rule → scale sai tín hiệu.</li>
<li>Số liệu đã đối chiếu docs (Learn, 8/2026): không khai rule thì mặc định là HTTP rule với min 0 / max <strong>10 replica</strong>; KEDA poll mỗi <strong>30 giây</strong>, scale-down đợi cửa sổ ổn định <strong>300 giây</strong> và cooldown 300 giây trước khi về 0; công thức <code>desiredReplicas = ceil(metric / target)</code>.</li>
<li>Bẫy nguy hiểm nhất: app <strong>tắt ingress</strong> mà không đặt <code>minReplicas ≥ 1</code> hoặc scale rule riêng → scale về 0 và <strong>không có gì đánh thức nó dậy</strong>.</li></ul>
<h3 id="01-container/5b4-workload-profiles">3.8 Workload profiles — Consumption vs Dedicated trong environment</h3>
<ul><li>Environment kiểu <strong>workload profiles</strong> cho phép trộn: profile <strong>Consumption</strong> (serverless, trả theo dùng, scale về 0) và các profile <strong>Dedicated</strong> (D4/D8/E4… — máy riêng, chọn khi cần CPU/RAM lớn, GPU, hoặc chi phí ổn định cho tải nền).</li>
<li>Mỗi container app/job gán vào một profile; cùng environment dùng chung VNet, log, DNS nội bộ — nên "API nhẹ chạy Consumption, worker embedding nặng chạy Dedicated" là một environment, không phải hai.</li>
<li>Dedicated tính tiền theo <strong>node đang chạy</strong> của profile (đặt min/max node) — khác Consumption tính theo replica đang hoạt động; đề nhấn "chi phí dự đoán được cho tải đều" → Dedicated, "thỉnh thoảng mới chạy" → Consumption.</li>
<li>Environment kiểu cũ (Consumption-only) không đổi sang workload profiles được — phải tạo environment mới; VNet tùy chỉnh cần subnet đủ lớn (khuyến nghị /23 cho workload profiles).</li></ul>
<h3 id="01-container/5b5-duoi-nap-capo-keda">3.9 Dưới nắp capo: KEDA = scaler + metrics + HPA</h3>
<ul><li>Chuỗi thật sự phía sau một "scale rule": <strong>scaler</strong> (trình kết nối biết hỏi Service Bus/Event Hubs "đang có bao nhiêu message") → KEDA phơi con số đó thành <strong>external metric</strong> → <strong>HPA</strong> (Horizontal Pod Autoscaler của Kubernetes) tính <code>desiredReplicas = ceil(metric / target)</code> và chỉnh số replica. Container Apps chỉ giấu chuỗi này sau một khối JSON.</li>
<li>Polling 30 giây là nhịp <em>scaler hỏi event source</em>; cooldown/cửa sổ ổn định 300 giây là tham số <em>HPA</em> chống rung (flapping) khi metric dao động quanh ngưỡng — giờ bạn biết hai con số đó thuộc về hai tầng khác nhau.</li>
<li>Scale 0 → 1 là việc của <strong>chính KEDA</strong> (HPA không làm được từ 0): KEDA giữ vai "activator" bật replica đầu tiên khi thấy sự kiện, rồi bàn giao cho HPA từ 1 trở lên — vì vậy độ trễ đánh thức từ 0 luôn ≥ một chu kỳ polling.</li>
<li>Hệ quả thiết kế: metric phải <strong>đo được từ ngoài app</strong> (độ dài queue, lag consumer group) — "CPU của việc tôi sắp phải làm" không tồn tại; đó là lý do queue-based scale ưu việt hơn CPU-based cho worker: nó đo <em>backlog</em> chứ không đo <em>hậu quả</em>.</li></ul>
<h3 id="01-container/5j1-aca-probe">3.10 Health probe — khác AKS ở đâu</h3>
<ul><li>Cũng ba loại <strong>Startup / Liveness / Readiness</strong>, nhưng chỉ hỗ trợ <strong>HTTP(S) hoặc TCP</strong>: <code>exec</code> probe <em>không</em> dùng được, gRPC không hỗ trợ, cổng phải là số (không dùng named port), và mỗi loại probe tối đa một cái trên mỗi container.</li>
<li>HTTP probe coi mã trạng thái <strong>từ 200 đến dưới 400</strong> là thành công; ngoài dải đó là thất bại.</li>
<li><strong>Bật ingress thì portal tự thêm probe mặc định</strong> cho container chính nếu bạn không khai (trừ workload profile GPU), và <em>không</em> thêm cho sidecar:</li></ul>
<table><thead><tr><th>Probe mặc định</th><th>Giá trị</th></tr></thead><tbody>
<tr><td>Startup</td><td>TCP tới ingress target port — timeout 3s, period 1s, initial delay 1s, failureThreshold <strong>240</strong></td></tr>
<tr><td>Liveness</td><td>TCP tới ingress target port</td></tr>
<tr><td>Readiness</td><td>TCP tới ingress target port — timeout 5s, period 5s, initial delay 3s, failureThreshold <strong>48</strong></td></tr>
</tbody></table>
<ul><li>Hệ quả thực tế: probe mặc định chỉ kiểm tra <em>cổng có mở không</em>, không biết model đã nạp xong chưa. App nạp model lâu thì phải khai HTTP probe trỏ tới <code>/ready</code> của chính mình.</li>
<li>Ở <strong>multiple revision mode</strong>, chờ readiness báo thành công rồi hãy chuyển traffic sang revision mới; ở <strong>single revision mode</strong> traffic tự chuyển khi readiness pass.</li>
<li>Một revision bị đánh dấu <em>unhealthy</em> nếu <strong>bất kỳ</strong> replica nào của nó fail readiness, kể cả khi các replica khác đều khoẻ; Container Apps restart replica đó tới khi khoẻ lại hoặc vượt failureThreshold.</li></ul>
<h3 id="01-container/5j2-aca-scale">3.11 HTTP scaling, CPU scaling và cái bẫy scale-to-zero</h3>
<table><thead><tr><th>Thiết lập</th><th>Mặc định</th></tr></thead><tbody>
<tr><td><code>minReplicas</code> / <code>maxReplicas</code></td><td><strong>0</strong> / <strong>10</strong> (tối đa cấu hình được là 1.000)</td></tr>
<tr><td>HTTP rule — <code>concurrentRequests</code></td><td><strong>10</strong></td></tr>
<tr><td>TCP rule — <code>concurrentConnections</code></td><td><strong>10</strong></td></tr>
<tr><td>Không khai scale rule nào</td><td>Áp rule HTTP mặc định, min 0 max 10</td></tr>
<tr><td>Polling interval / cool down</td><td>30 giây / 300 giây</td></tr>
<tr><td>Scale up step</td><td>1, 4, 8, 16, 32 … tới trần</td></tr>
<tr><td>Thuật toán</td><td><code>desiredReplicas = ceil(giá trị metric hiện tại / giá trị mục tiêu)</code></td></tr>
</tbody></table>
<ul><li>HTTP và TCP rule tính lại mỗi <strong>15 giây</strong>: số request trong 15 giây vừa qua chia cho 15. <code>concurrentRequests: 100</code> nghĩa là vượt 100 request đồng thời thì thêm một replica.</li>
<li><strong>Scale rule CPU và memory là KEDA scaler chạy qua HPA, nên không đưa được replica về 0.</strong> App chỉ có rule CPU thì sàn thực tế là 1 replica — muốn scale-to-zero phải dùng HTTP/TCP rule hoặc một event scaler (Service Bus, Queue Storage…).</li>
<li><strong>Cảnh báo nguy hiểm nhất</strong>: container app <em>tắt ingress</em>, không khai scale rule và không đặt <code>minReplicas ≥ 1</code> thì nó scale về 0 và <strong>không có gì đánh thức nó dậy nữa</strong>. Worker nền luôn phải có event scaler hoặc <code>minReplicas: 1</code>.</li>
<li>Cool down 300 giây chỉ áp cho bước cuối cùng từ 1 replica xuống 0; các bước thu nhỏ khác không chờ.</li>
<li>Thêm hoặc sửa scale rule <strong>tạo revision mới</strong>. Ở multiple revision mode, revision cũ vẫn chạy với rule cũ cho tới khi bạn chuyển traffic.</li>
<li>Nhiều rule cùng lúc thì <strong>rule nào chạm ngưỡng trước là scale</strong>, không phải chờ tất cả.</li>
<li>Xác thực cho scale rule: ưu tiên <strong>managed identity</strong> (<code>identity: 'system'</code> hoặc id của user-assigned) thay vì <code>secretRef</code> trỏ vào connection string.</li>
<li><em>Nguồn: Microsoft Learn — <a href="https://learn.microsoft.com/azure/container-apps/health-probes" target="_blank" rel="noopener">Health probes in Azure Container Apps</a> và <a href="https://learn.microsoft.com/azure/container-apps/scale-app" target="_blank" rel="noopener">Scaling in Azure Container Apps</a> (bản 19/05/2026), đối chiếu ngày 18/09/2026.</em></li></ul>
<h3 id="01-container/khoa-aca-yaml-registry">3.12 Deploy bằng YAML, cấu hình registry và env var trên Container Apps</h3>
<p>Các mục 3.2 và 3.12 đã có <code>create</code> với <code>--registry-identity</code>. Còn thiếu ba thứ: nhóm lệnh <code>az containerapp registry</code> cho app đã tồn tại, luồng dùng YAML làm nguồn sự thật, và khác biệt giữa <code>--env-vars</code> với <code>--set-env-vars</code>.</p>
<pre><button class="copybtn">copy</button><code># YAML là nguồn sự thật: có --yaml thì các flag khác bị BỎ QUA
az containerapp create -n ai-api -g rg-aca-demo --environment aca-env-demo --yaml ./containerapp.yml
az containerapp update -n ai-api -g rg-aca-demo --yaml ./containerapp.yml

# Registry trên app đã tạo: user/password hoặc managed identity (ACR)
az containerapp registry set -n ai-api -g rg-aca-demo --server myregistry.azurecr.io \\
  --username MyRegistryUsername --password MyRegistryPassword
az containerapp registry set -n ai-api -g rg-aca-demo --server myregistry.azurecr.io --identity system
az containerapp registry list -n ai-api -g rg-aca-demo
az containerapp registry show -n ai-api -g rg-aca-demo --server myregistry.azurecr.io

# Env var: --env-vars lúc create; --set-env-vars lúc update (thêm/sửa, không xoá biến cũ)
az containerapp update -n ai-api -g rg-aca-demo --set-env-vars LOG_LEVEL=debug
az containerapp secret set -n ai-api -g rg-aca-demo --secrets embeddings-api-key="..."
az containerapp update -n ai-api -g rg-aca-demo --set-env-vars EMBEDDINGS_API_KEY=secretref:embeddings-api-key
</code></pre>
<pre><button class="copybtn">copy</button><code>properties:
  template:
    containers:
    - name: ai-api
      env:
      - name: LOG_LEVEL
        value: info
      - name: EMBEDDINGS_API_KEY
        secretRef: embeddings-api-key     # YAML chỉ chứa TÊN secret, không chứa giá trị
</code></pre>
<ul><li>Trên CLI viết <code>secretref:&lt;tên&gt;</code>, trong YAML viết thuộc tính <code>secretRef</code>. Cả hai cách đều giữ giá trị secret ngoài file YAML và ngoài shell history.</li>
<li>Repository trong image reference phải viết <strong>chữ thường</strong>. Viết hoa sẽ làm pull fail, và lỗi trông giống lỗi xác thực.</li>
<li>Bỏ trống credentials khi trỏ tới ACR thì CLI đôi khi tự suy ra được, nhưng production nên khai rõ cách xác thực để hành vi đoán trước được.</li>
<li>Kiểm tra environment: <code>az containerapp env show -n &lt;env&gt; -g &lt;rg&gt;</code>. Nên tách environment theo vòng đời (dev/test/prod) và gom service cần gọi nhau nội bộ vào chung một environment.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> chạy <code>az containerapp update --yaml app.yml --image ...:v2</code> thì <code>--image</code> <strong>không có tác dụng</strong>, vì có <code>--yaml</code> thì mọi flag khác bị bỏ qua. Muốn đổi image thì sửa trong YAML.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/deploy-containers-azure-container-apps/3-deploy-container-app" target="_blank" rel="noopener">Deploy a container app using the Azure CLI and YAML</a>, <a href="https://learn.microsoft.com/en-us/training/modules/deploy-containers-azure-container-apps/4-configure-runtime" target="_blank" rel="noopener">Configure runtime settings</a>, <a href="https://learn.microsoft.com/en-us/training/modules/deploy-containers-azure-container-apps/5-connect-to-registries" target="_blank" rel="noopener">Configure image pull authentication</a> (module Deploy containers to Azure Container Apps, khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/khoa-aca-day-two">3.13 Vận hành day-two: kiểm tra revision, stop/start/restart và dọn revision</h3>
<p>Mục này gom các thao tác vận hành mà khóa học dạy thành quy trình xử lý sự cố: xác định revision nào hỏng, cô lập nó và khôi phục. Đề hay hỏi nên chọn deactivate, stop hay restart.</p>
<pre><button class="copybtn">copy</button><code># Trạng thái mọi revision trong một bảng
az containerapp revision list -n &lt;app&gt; -g &lt;rg&gt; \\
  --query "[].{name:name,active:properties.active,health:properties.healthState}" -o table
az containerapp revision list -n &lt;app&gt; -g &lt;rg&gt; --all          # gồm cả revision inactive
az containerapp revision show -n &lt;app&gt; -g &lt;rg&gt; --revision &lt;rev&gt;   # so cấu hình revision tốt/hỏng
az containerapp show -n &lt;app&gt; -g &lt;rg&gt; --query properties.template.containers   # image đã ghi nhận

az containerapp replica list -n &lt;app&gt; -g &lt;rg&gt; --revision &lt;rev&gt;
az containerapp logs show -n &lt;app&gt; -g &lt;rg&gt; --follow --tail 30

az containerapp revision deactivate -n &lt;app&gt; -g &lt;rg&gt; --revision &lt;rev&gt;
az containerapp stop    -n &lt;app&gt; -g &lt;rg&gt;
az containerapp start   -n &lt;app&gt; -g &lt;rg&gt;
az containerapp restart -n &lt;app&gt; -g &lt;rg&gt;
</code></pre>
<div class="tablewrap"><table><thead><tr><th>Thao tác</th><th>Phạm vi</th><th>Dùng khi</th></tr></thead><tbody>
<tr><td>Deactivate revision</td><td>Một revision</td><td>Cô lập một bản phát hành hỏng. Vẫn giữ bằng chứng và còn đường rollback, nên an toàn hơn delete.</td></tr>
<tr><td>Scale to zero</td><td>Tự động theo scale rule</td><td>Tải event-driven hoặc gián đoạn</td></tr>
<tr><td>Stop</td><td>Cả app</td><td>Chủ động đảm bảo không replica nào start (vd khi upstream đang sập)</td></tr>
<tr><td>Restart</td><td>Replica của app</td><td>Muốn thay đổi cấu hình có hiệu lực ngay, hoặc gỡ tiến trình kẹt. Restart không thay cho việc tìm nguyên nhân gốc, và app nạp model lớn thì mỗi lần restart là thêm một lần cold start.</td></tr>
</tbody></table></div>
<ul><li>Checklist cho revision fail: lỗi pull image (credentials, image reference), lệch cổng giữa container và ingress, thiếu biến môi trường/secret hoặc sai tên, probe sai path/port hoặc không đủ thời gian nạp model, thiếu tài nguyên (OOM kill, CPU throttle).</li>
<li>Container Apps tự xoá revision inactive cũ nhất khi số revision inactive vượt <strong>100</strong>; ngưỡng này chỉnh được bằng <code>--max-inactive-revisions</code>.</li>
<li>Log ứng dụng nên có request ID, revision/build ID (khớp tag hoặc digest), model version và thời gian xử lý từng phần. Ghi định danh và metadata, không ghi prompt hay tài liệu thô.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "một bản phát hành mới lỗi, cần chặn traffic vào nó ngay nhưng vẫn giữ để điều tra" thì deactivate revision đó. <code>az containerapp stop</code> dừng cả app, phạm vi quá rộng. Delete thì mất bằng chứng.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/manage-containers-azure-container-apps/2-update-images-manage-revisions" target="_blank" rel="noopener">Update images and manage revisions safely</a>, <a href="https://learn.microsoft.com/en-us/training/modules/manage-containers-azure-container-apps/3-app-lifecycle-management" target="_blank" rel="noopener">Manage the container app lifecycle</a>, <a href="https://learn.microsoft.com/en-us/training/modules/manage-containers-azure-container-apps/4-monitor-logs-troubleshoot" target="_blank" rel="noopener">Monitor logs and troubleshoot issues</a>, <a href="https://learn.microsoft.com/en-us/training/modules/deploy-containers-azure-container-apps/6-verify-deployment" target="_blank" rel="noopener">Verify deployments with logs and status</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/khoa-aca-scaler-khac">3.14 KEDA scaler ngoài Service Bus/Queue: Event Hubs, Kafka, Redis, cron, Prometheus</h3>
<p>Tài liệu hiện có đã đủ Service Bus queue và Storage Queue. Khóa học còn dạy metadata của các scaler khác, và cách chuyển một ScaledObject của KEDA sang scale rule của Container Apps.</p>
<div class="tablewrap"><table><thead><tr><th>Scaler (<code>type</code>)</th><th>Metadata chính</th><th>Ghi nhớ</th></tr></thead><tbody>
<tr><td><code>azure-servicebus</code> (topic)</td><td><code>topicName</code> + <code>subscriptionName</code>, <code>namespace</code>, <code>messageCount</code></td><td>Mỗi subscription có backlog riêng, nên mỗi consumer app scale độc lập</td></tr>
<tr><td><code>azure-eventhub</code></td><td><code>consumerGroup</code>, <code>unprocessedEventThreshold</code>, <code>checkpointStrategy</code></td><td>Đo lag so với checkpoint; checkpoint lưu trong Blob thì dùng <code>blobMetadata</code>. Số replica hữu ích tối đa bằng số partition.</td></tr>
<tr><td><code>kafka</code></td><td><code>bootstrapServers</code>, <code>consumerGroup</code>, <code>topic</code>, <code>lagThreshold</code></td><td>Xác thực SASL/PLAIN, SASL/SCRAM hoặc TLS qua secret; replica hữu ích tối đa bằng số partition</td></tr>
<tr><td>Redis Lists / Streams</td><td>Lists: <code>address</code>, <code>listName</code>, <code>listLength</code></td><td>Lists đo <code>LLEN</code>. Streams đo pending entries của consumer group, tức tính cả việc đang xử lý dở, nên chịu lỗi tốt hơn.</td></tr>
<tr><td><code>cron</code></td><td><code>timezone</code>, <code>start</code>, <code>end</code>, <code>desiredReplicas</code></td><td>Giữ số replica cố định trong khung giờ, ngoài khung giờ không tác động. Nên ghép với HTTP/event rule.</td></tr>
<tr><td><code>prometheus</code></td><td><code>serverAddress</code>, <code>metricName</code>, <code>query</code> (PromQL), <code>threshold</code></td><td>Scale theo metric nghiệp vụ tự định nghĩa</td></tr>
<tr><td><code>cpu</code> / <code>memory</code></td><td><code>type: Utilization</code>, <code>value</code> (%)</td><td>Không scale được về 0</td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code>scale:
  minReplicas: 0
  maxReplicas: 20
  rules:
    - name: business-hours          # 8h–18h thứ 2–6 giờ New York: luôn ≥ 5 replica
      custom:
        type: cron
        metadata:
          timezone: "America/New_York"
          start: "0 8 * * 1-5"
          end: "0 18 * * 1-5"
          desiredReplicas: "5"
    - name: http-scaling            # ngoài giờ không có request → về 0
      http:
        metadata:
          concurrentRequests: "50"
</code></pre>
<ul><li><strong>Chuyển ScaledObject của KEDA sang Container Apps</strong>: <code>triggers[].type</code> thành <code>--scale-rule-type</code> (hoặc <code>custom.type</code>); <code>triggers[].metadata</code> thành <code>--scale-rule-metadata</code>; <code>TriggerAuthentication</code> thành secret của app cộng <code>--scale-rule-auth</code> (hoặc <code>--scale-rule-identity</code>); <code>minReplicaCount</code>/<code>maxReplicaCount</code> thành <code>--min-replicas</code>/<code>--max-replicas</code>.</li>
<li>Container Apps <strong>không hỗ trợ resource <code>TriggerAuthentication</code></strong>: secret được tham chiếu thẳng trong scale rule. External scaler cần deploy thành phần riêng, cấu hình built-in không lo phần này.</li>
<li>Cấu hình TCP rule bằng <code>--scale-rule-tcp-concurrency</code>, HTTP rule bằng <code>--scale-rule-http-concurrency</code>. TCP rule hợp với WebSocket, gRPC và kết nối sống lâu. <strong>Container Apps Jobs không dùng được HTTP rule</strong> vì job không có endpoint HTTP.</li>
<li>Scaler do Microsoft duy trì: Service Bus, Event Hubs, Storage Queue, Blob Storage, Log Analytics, Azure Monitor. Nên ưu tiên các scaler này trước scaler cộng đồng.</li>
<li>Managed identity cho scaler Service Bus cần role kiểu <em>Azure Service Bus Data Receiver</em>. Ví dụ trong khóa học gán user-assigned identity cho app (<code>--user-assigned</code>) rồi trỏ <code>--scale-rule-identity</code> vào đúng identity đó.</li>
<li>Cách chọn ngưỡng: mỗi message mất 10 giây và cần xử lý 100 message/phút thì cần khoảng 10 replica chạy song song. Chọn <code>messageCount</code> sao cho ra đúng mức song song này.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> Event Hub 32 partition mà đặt <code>maxReplicas: 100</code> thì 68 replica dư không đọc được gì, vì trong một consumer group mỗi partition chỉ có một consumer đọc tại một thời điểm. Kafka cũng vậy.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/scale-containers-azure-container-apps/2-configure-scale-rules" target="_blank" rel="noopener">Configure scale rules</a>, <a href="https://learn.microsoft.com/en-us/training/modules/scale-containers-azure-container-apps/3-event-driven-scaling-keda" target="_blank" rel="noopener">Implement event-driven scaling with KEDA</a>, <a href="https://learn.microsoft.com/en-us/training/modules/scale-containers-azure-container-apps/4-keda-scalers-custom-workloads" target="_blank" rel="noopener">Apply KEDA scalers for custom workloads</a> (module Scale containers in Azure Container Apps, khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/khoa-aca-cpu-memory">3.15 CPU/memory mỗi container, billing và giới hạn Consumption</h3>
<p>Tài liệu hiện có nói về workload profile nhưng chưa có các con số tài nguyên. Đề hay cho một cặp <code>--cpu</code>/<code>--memory</code> rồi hỏi có hợp lệ không, hoặc hỏi app bị kill hay bị chậm khi vượt giới hạn.</p>
<div class="tablewrap"><table><thead><tr><th>Quy tắc</th><th>Giá trị</th></tr></thead><tbody>
<tr><td>Mặc định mỗi container</td><td><strong>0.25</strong> core, <strong>0.5 GiB</strong></td></tr>
<tr><td>Ràng buộc tỷ lệ</td><td>Memory (GiB) ≥ <strong>2 ×</strong> CPU (core). Ví dụ 0.5 core thì cần ít nhất 1.0 GiB.</td></tr>
<tr><td>Tối đa trên Consumption</td><td><strong>4 core, 8 GiB mỗi container</strong> (tính theo container, không theo replica)</td></tr>
<tr><td>Vượt memory limit</td><td>Replica bị <strong>kill và restart</strong> (lỗi cứng)</td></tr>
<tr><td>Vượt CPU</td><td>Bị <strong>throttle</strong>, không bị kill (chỉ chậm đi)</td></tr>
<tr><td>Billing</td><td>Theo vCPU-giây và GiB-giây. Replica đang chạy nhưng không xử lý request tính giá <strong>idle</strong> thấp hơn. Scale về 0 thì không tốn compute.</td></tr>
<tr><td>Trần replica</td><td>1.000 mỗi revision</td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code>az containerapp create -n order-api -g rg-ecommerce --environment my-environment \\
  --image myregistry.azurecr.io/order-api:v1 \\
  --cpu 0.5 --memory 1.0Gi --min-replicas 2 --max-replicas 20
# Năng lực tối đa = 0.5 core × 20 replica = 10 core
az containerapp update -n &lt;app&gt; -g &lt;rg&gt; --cpu &lt;cores&gt; --memory &lt;size&gt;
</code></pre>
<ul><li>Cần <strong>GPU</strong> hoặc <strong>hơn 4 core / 8 GiB</strong> mỗi container thì bắt buộc dùng Dedicated workload profile. Dedicated cũng cho độ trễ ổn định hơn vì không chia tài nguyên với tenant khác.</li>
<li>App có nhiều container (main + sidecar) thì mỗi container có phân bổ riêng, và tất cả cùng tính vào giới hạn.</li>
<li>Replica lớn thì số lần scale ít hơn nhưng bước scale thô hơn. Replica nhỏ thì scale sát nhu cầu hơn nhưng số lần scale nhiều hơn.</li>
<li>Bắt đầu từ mặc định rồi chỉnh theo số đo: thấy throttle thì tăng CPU, thấy restart vì OOM thì tăng memory. Mỗi lần chỉ đổi một biến.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> <code>--cpu 1 --memory 1Gi</code> vi phạm tỷ lệ memory ≥ 2 × CPU. Hai lựa chọn hợp lệ là <code>--cpu 0.5 --memory 1Gi</code> hoặc <code>--cpu 1 --memory 2Gi</code>. "App chậm dần khi tải cao nhưng không restart" là dấu hiệu CPU throttle. "Replica restart liên tục khi xử lý file lớn" là dấu hiệu vượt memory.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/scale-containers-azure-container-apps/5-compute-resources-performance-cost" target="_blank" rel="noopener">Select compute resources for performance and cost</a> và <a href="https://learn.microsoft.com/en-us/training/modules/manage-containers-azure-container-apps/6-optimize-container-settings" target="_blank" rel="noopener">Optimize container resources and scaling</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/khoa-aca-label-multi-revision">3.16 Revision label và cách các revision scale khi chia traffic</h3>
<p>Mục 3.6 có nhắc label. Mục này bổ sung quy tắc đặt tên label, cách label khác với traffic weight, và hệ quả chi phí khi nhiều revision cùng chạy.</p>
<ul><li>Bật chế độ multiple revision: <code>az containerapp update -n order-api -g rg-ecommerce --revision-mode multiple</code> (cùng tác dụng với <code>revision set-mode</code> ở mục 3.2).</li>
<li>Ở single mode, platform chờ revision mới <strong>ready và scale tới số replica của bản cũ</strong> rồi mới chuyển traffic sang, sau đó tự deactivate bản cũ. Zero-downtime có sẵn, không cần cấu hình thêm.</li>
<li>Chia traffic theo <strong>xác suất</strong>: mỗi request được gán ngẫu nhiên, nên tỷ lệ thực tế có thể lệch một chút so với weight. Đặt weight cho <code>latest</code> thì mỗi lần deploy mới tự nhận phần traffic đó, không phải sửa rule.</li>
<li><strong>Label</strong> tạo một URL riêng luôn trỏ vào revision được gắn, không phụ thuộc traffic weight. Mỗi label chỉ trỏ vào một revision tại một thời điểm, và việc chuyển label là nguyên tử. Tên label phải bắt đầu bằng chữ cái, chỉ gồm chữ thường, số và <code>-</code>, không có hai dấu <code>-</code> liền nhau, dài tối đa <strong>64</strong> ký tự.</li>
<li>Mỗi revision active <strong>scale độc lập</strong> theo rule và phần traffic của nó. Hai revision cùng <code>minReplicas: 1</code> chia 50/50 thì luôn có ít nhất 2 replica. Mỗi bên chỉ thấy một nửa tải, nên có thể không bên nào chạm ngưỡng scale dù tổng tải đã vượt.</li>
<li>Nên chuyển nhanh qua các nấc 10% → 50% → 100%, đừng giữ 50/50 lâu. Revision inactive không tốn tài nguyên và <strong>kích hoạt lại được</strong> khi cần rollback.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "cho tester vào revision mới mà người dùng production không bị ảnh hưởng" thì gắn label cho revision mới và gửi URL label cho tester, weight của nó vẫn để 0%. Đổi traffic weight thì người dùng thật cũng bị chia sang.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/scale-containers-azure-container-apps/6-revision-modes-traffic-management" target="_blank" rel="noopener">Scale containers in Azure Container Apps — Choose and apply revision modes</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/khoa-dynsession-chon-pool">3.17 Dynamic sessions — code interpreter hay custom container</h3>
<p>Tài liệu hiện có chưa nhắc tới dynamic sessions, dù khóa học dành cả một module cho nó. Tính năng này giải bài toán chạy code do LLM hoặc người dùng sinh ra ở một nơi cách ly, không chạy chung tiến trình với backend.</p>
<ul><li><strong>Session pool</strong> giữ sẵn các môi trường đã khởi động, cấp phát trong vài mili giây. Mỗi session chạy trong sandbox cách ly bằng <strong>Hyper-V</strong>, tách tiến trình và file system khỏi host và khỏi các session khác.</li>
<li>Backend xác thực với pool và gửi việc thay cho người dùng. Người dùng cuối <strong>không</strong> bao giờ cầm token của pool và không được tự chọn identifier.</li>
<li>Vì sao không chạy code sinh ra ngay trong container API: code đó tranh CPU/RAM với API và có thể đọc file, biến môi trường, credential của API. Tạo một container app mới cho mỗi request thì cách ly tốt nhưng tốn công khởi động và quản lý vòng đời, là những việc session pool đã làm sẵn.</li></ul>
<div class="tablewrap"><table><thead><tr><th></th><th>Built-in code interpreter</th><th>Custom container</th></tr></thead><tbody>
<tr><td>Runtime</td><td>Do platform quản lý (vd <code>PythonLTS</code>); không phải build hay vá image</td><td>Image do bạn cung cấp và bảo trì</td></tr>
<tr><td>API</td><td>Có sẵn: <code>/executions</code>, <code>/files</code>, <code>/files/&lt;name&gt;/content</code></td><td>Tự định nghĩa: pool chuyển tiếp path sau management endpoint vào target port (vd <code>/api/convert</code>)</td></tr>
<tr><td>Yêu cầu</td><td>—</td><td>Environment phải bật <strong>workload profiles</strong>; tự lo ingress trên target port, log ra stdout/stderr, endpoint health (startup + liveness probe)</td></tr>
<tr><td>Chọn khi</td><td>Phân tích CSV, tính toán, vẽ biểu đồ, chạy đoạn script ngắn do agent sinh</td><td>Cần package hệ thống, binary native, thư viện có license, ngôn ngữ không có sẵn, protocol riêng, hoặc workspace riêng cho từng tenant</td></tr>
</tbody></table></div>
<ul><li>Cả hai loại pool đều cách ly session. Vì vậy <strong>yêu cầu cách ly không phải lý do để chọn custom container</strong>. Chọn loại đơn giản nhất đáp ứng được runtime và protocol.</li>
<li>Tích hợp LangChain: gói <code>langchain-azure-dynamic-sessions</code> cung cấp <code>SessionsPythonREPLTool</code>. Tool này chạy trên chính code interpreter pool, không tạo loại pool mới hay biên bảo mật mới. Gọi REST trực tiếp khi backend cần kiểm soát file, identifier và response.</li>
<li>Session là <strong>tạm</strong>. Tài liệu nguồn, kết quả đã duyệt và audit log phải lưu ở storage của ứng dụng.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "agent cần chạy Python do LLM sinh để phân tích file CSV người dùng tải lên, không được ảnh hưởng API" thì dùng dynamic sessions với built-in code interpreter. Không chạy <code>exec()</code> trong container API, và không cần custom container.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/dynamic-sessions-azure-container-apps/2-choose-dynamic-session-pool" target="_blank" rel="noopener">Run AI-generated code securely in Azure Container Apps dynamic sessions — Choose a dynamic session pool</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/khoa-dynsession-cau-hinh">3.18 Dynamic sessions — Cấu hình session pool an toàn: sức chứa, cooldown, egress, identity</h3>
<p>Ba thông số của pool quyết định bao nhiêu request chạy song song được, dữ liệu tạm tồn tại bao lâu, và code có được ra Internet hay không. Nên chọn chúng theo threat model, đừng để mặc định cho qua.</p>
<pre><button class="copybtn">copy</button><code>az containerapp sessionpool create \\
    --name ai-document-sessions --resource-group &lt;RG&gt; --location &lt;LOCATION&gt; \\
    --container-type PythonLTS \\
    --max-sessions 20 \\
    --cooldown-period 300 \\
    --network-status EgressDisabled

az containerapp sessionpool show --name ai-document-sessions --resource-group &lt;RG&gt; \\
    --query "properties.poolManagementEndpoint" --output tsv
</code></pre>
<div class="tablewrap"><table><thead><tr><th>Thiết lập</th><th>Ý nghĩa</th><th>Cách chọn</th></tr></thead><tbody>
<tr><td><code>maxConcurrentSessions</code> (<code>--max-sessions</code>)</td><td>Số session được cấp phát chạy cùng lúc; cũng là chốt chặn chi phí</td><td>Theo lượng dùng đồng thời lúc cao điểm, không theo tổng số user (50 user online, 10 người phân tích cùng lúc thì bắt đầu quanh 10)</td></tr>
<tr><td><code>readySessionInstances</code></td><td>Chỉ custom container: số môi trường giữ sẵn</td><td>Càng cao thì phản hồi càng nhanh nhưng giữ compute cả lúc vắng. Đo startup trước khi tăng.</td></tr>
<tr><td>Cooldown (<code>--cooldown-period</code>, giây)</td><td>Session bị huỷ sau khoảng thời gian này nếu không có request; <strong>mỗi request reset bộ đếm</strong></td><td>Dài hơn thì hội thoại nhiều bước dùng lại file được. Ngắn hơn thì giải phóng sức chứa và xoá dữ liệu sớm, rủi ro thấp hơn với code không tin cậy.</td></tr>
<tr><td>Egress</td><td><strong>Chặn mặc định</strong>. Là thiết lập cấp pool, áp cho mọi session trong pool.</td><td>Chỉ mở khi có dependency ngoài cụ thể và rủi ro chấp nhận được. Nên tách pool riêng thay vì nới lỏng một pool dùng chung.</td></tr>
</tbody></table></div>
<ul><li><strong>Hai identity khác nhau</strong>: backend dùng identity có role <strong>Azure ContainerApps Session Executor</strong> để gọi management API. Code chạy trong session không cần và không được có token đó.</li>
<li>Hyper-V chỉ cách ly <em>giữa</em> các session. Code trong một session vẫn đọc được mọi file, biến môi trường và credential có trong session đó. Chỉ đưa vào session những dữ liệu mà code đó được phép thấy.</li>
<li>Custom container pool có thể dùng managed identity để pull image. Nếu identity dùng được lúc runtime thì code không tin cậy trong session xin được token của nó, nên phải dùng identity riêng với scope hẹp nhất, không dùng lại identity của backend.</li>
<li>Theo dõi số session executing / creating / ready (custom pool) để kiểm chứng sức chứa đã chọn.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "ngăn code do AI sinh gửi dữ liệu người dùng ra ngoài" thì giữ <code>EgressDisabled</code>, đó là mặc định. Workload cần gọi API ngoài thì dùng một pool riêng, không mở egress cho pool đang chạy code không tin cậy.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/dynamic-sessions-azure-container-apps/3-configure-secure-session-pool" target="_blank" rel="noopener">Run AI-generated code securely in Azure Container Apps dynamic sessions — Configure a secure session pool</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/khoa-dynsession-goi-api">3.19 Dynamic sessions — Gọi session pool từ backend Python: token, identifier, chạy code, trao đổi file</h3>
<p>Mục này đi qua REST contract của code interpreter. Đề hỏi nhiều nhất ở ba chỗ: audience của token, role cần cấp, và ai là người tạo identifier.</p>
<pre><button class="copybtn">copy</button><code>az role assignment create --role "Azure ContainerApps Session Executor" \\
    --assignee &lt;BACKEND_PRINCIPAL_ID&gt; --scope &lt;SESSION_POOL_RESOURCE_ID&gt;
</code></pre>
<pre><button class="copybtn">copy</button><code>from uuid import uuid4
import requests
from azure.identity import DefaultAzureCredential

API_VERSION = "2025-10-02-preview"                    # để trong config, không rải khắp code
TOKEN_SCOPE = "https://dynamicsessions.io/.default"   # audience BẮT BUỘC
cred = DefaultAzureCredential()                       # tự cache và gia hạn token

session_id = str(uuid4())      # server sinh, lưu ánh xạ user↔session phía server

def headers():
    return {"Authorization": f"Bearer {cred.get_token(TOKEN_SCOPE).token}"}

params = {"api-version": API_VERSION, "identifier": session_id}

r = requests.post(f"{endpoint}/executions", headers=headers(), params=params,
                  json={"properties": {"codeInputType": "inline",
                                       "executionType": "synchronous",
                                       "code": code}},
                  timeout=30)
r.raise_for_status()           # lỗi transport; lỗi của code Python nằm TRONG body
</code></pre>
<div class="tablewrap"><table><thead><tr><th>Thao tác</th><th>Request</th></tr></thead><tbody>
<tr><td>Chạy code</td><td><code>POST {endpoint}/executions?api-version=…&amp;identifier=…</code></td></tr>
<tr><td>Upload file (multipart)</td><td><code>POST {endpoint}/files</code>; file nằm ở <code>/mnt/data</code> trong session</td></tr>
<tr><td>Liệt kê file</td><td><code>GET {endpoint}/files</code></td></tr>
<tr><td>Tải file</td><td><code>GET {endpoint}/files/&lt;tên đã URL-encode&gt;/content</code></td></tr>
</tbody></table></div>
<ul><li><strong>Identifier</strong> định tuyến request vào session đang có, hoặc làm pool cấp một session mới. Dùng lại cùng identifier thì giữ được file và state, nên identifier phải được coi là dữ liệu nhạy cảm: server sinh UUID ngẫu nhiên và không bao giờ nhận identifier do client gửi lên. Identifier <em>không</em> xác thực ai cả. Backend vẫn phải authorize user trước rồi mới dùng ánh xạ đã lưu.</li>
<li>Giới hạn upload của code interpreter: <strong>128 MB</strong> mỗi file.</li>
<li>Tên file khi tải về phải encode thành một path segment (<code>quote(name, safe="")</code>). Không dùng tên file không tin cậy để ghép đường dẫn lưu local, vì có nguy cơ path traversal.</li>
<li>LangChain: tạo <code>SessionsPythonREPLTool(pool_management_endpoint=...)</code>. Mỗi instance tự sinh một identifier ngẫu nhiên, nên phải tạo <strong>một instance cho mỗi user/hội thoại</strong>, không dùng một singleton chung cho mọi người.</li>
<li>Backend vẫn phải kiểm tra code trước khi gửi vào session (kích thước, ngôn ngữ, thao tác được phép). Cách ly chỉ giảm thiệt hại, không quyết định hành động nào là hợp lệ.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> nhận 401 dù identity đã có role là do token xin sai audience. Scope phải là <code>https://dynamicsessions.io/.default</code>, không phải <code>https://management.azure.com/.default</code>. Role đúng là <strong>Azure ContainerApps Session Executor</strong>, nên cấp ở scope của session pool.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/dynamic-sessions-azure-container-apps/4-execute-code-exchange-files" target="_blank" rel="noopener">Run AI-generated code securely in Azure Container Apps dynamic sessions — Execute code and exchange files</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/khoa-dynsession-vong-doi-loi">3.20 Dynamic sessions — Vòng đời session và xử lý lỗi: hết hạn, phân loại lỗi, timeout, retry, xoá</h3>
<p>Platform lo việc cấp phát và dọn dẹp session. Backend vẫn phải tự lo vòng đời của request, và đề sẽ hỏi request nào được phép retry.</p>
<ul><li>Hết cooldown thì session bị huỷ cùng file tạm. Gửi lại <em>cùng identifier</em> sau đó có thể nhận một session <strong>mới, rỗng</strong>. Ví dụ code báo không thấy <code>/mnt/data/operational-data.csv</code> thì backend lấy lại bản gốc từ storage bền, upload lại rồi chạy lại bước idempotent.</li>
<li>Xem trạng thái session (thời điểm tạo, lần truy cập cuối, lúc hết hạn): <code>GET {endpoint}/session?identifier=&lt;id&gt;&amp;api-version=2025-02-02-preview</code>. Session vẫn có thể biến mất ngay giữa lần hỏi trạng thái và lần gọi kế tiếp.</li></ul>
<div class="tablewrap"><table><thead><tr><th>Loại kết quả</th><th>Nghĩa</th></tr></thead><tbody>
<tr><td>Transport failure</td><td>Lỗi xác thực/phân quyền, request sai định dạng, hết sức chứa, lỗi mạng hoặc lỗi service: API không hoàn tất</td></tr>
<tr><td>Execution failure</td><td>Session đã chạy payload nhưng code ném exception, vượt giới hạn, hoặc trả về kết quả không thành công</td></tr>
<tr><td>Validation failure</td><td>Code chạy xong nhưng output sai schema, thiếu artifact bắt buộc, hoặc vi phạm quy tắc ứng dụng</td></tr>
<tr><td>Success</td><td>Transport OK, không lỗi thực thi, và output qua được validation</td></tr>
</tbody></table></div>
<ul><li><strong>HTTP 200 chưa chắc code đã chạy đúng</strong>. Phải kiểm tra cả dữ liệu thực thi trả về lẫn output trước khi đưa cho orchestration layer.</li>
<li>Đặt deadline HTTP riêng của ứng dụng (vd <code>timeout=(5, 30)</code>), ngắn hơn giới hạn thời gian chạy tối đa của platform, để còn thời gian validate và trả lời có kiểm soát. <em>Timeout phía client không có nghĩa là code phía session đã dừng.</em></li>
<li>Khi gặp <code>HTTPError</code>, lấy <code>error.traceId</code> trong body lỗi có cấu trúc để ghi vào telemetry. Không trả stack trace, token hay nội dung nhạy cảm cho người dùng cuối, chỉ trả mã tương quan.</li></ul>
<pre><button class="copybtn">copy</button><code>TRANSIENT_STATUS_CODES = {429, 500, 502, 503, 504}

def can_retry(*, method: str, status_code: int, operation_is_idempotent: bool) -&gt; bool:
    safe_method = method.upper() in {"GET", "HEAD"}
    return status_code in TRANSIENT_STATUS_CODES and (safe_method or operation_is_idempotent)
</code></pre>
<ul><li>Chỉ retry khi mã lỗi là transient <strong>và</strong> thao tác idempotent (đọc metadata file, hỏi trạng thái, phân tích chỉ đọc input rồi ghi đè một output cố định). Retry có giới hạn số lần, backoff tăng dần và jitter. <strong>Không</strong> tự động retry code gửi message, ghi ra hệ thống ngoài hoặc tạo artifact tên duy nhất.</li>
<li>Xoá sớm khi xong việc: <code>DELETE {endpoint}/session?api-version=2025-02-02-preview&amp;identifier=&lt;id&gt;</code>. Nhận <strong>204 No Content</strong> nghĩa là môi trường đã không còn. Không xoá khi còn request khác của cùng hội thoại đang chạy. Xoá thất bại thì ghi telemetry, đừng báo là đã dọn xong (cooldown vẫn là phương án dự phòng).</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> request <code>/executions</code> bị timeout ở client thì <strong>không được</strong> tự retry ngay nếu code có side effect. Code có thể đã chạy xong sau khi client ngừng chờ, nên timeout là trạng thái mơ hồ. Phải kiểm tra trạng thái thực tế trước.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/dynamic-sessions-azure-container-apps/5-manage-lifecycle-failures" target="_blank" rel="noopener">Run AI-generated code securely in Azure Container Apps dynamic sessions — Manage lifecycle and execution failures</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/trien-khai-aca">3.21 Triển khai Container Apps trên Azure — từng bước</h3>
<p>Thứ tự: <strong>extension + provider → environment (kèm Log Analytics) → container app pull ACR bằng identity → secret, scale rule → revision mới</strong>.</p>
<pre><button class="copybtn">copy</button><code># 0. Chuẩn bị một lần cho subscription
az extension add --name containerapp --upgrade
az provider register --namespace Microsoft.App
az provider register --namespace Microsoft.OperationalInsights

# 1. Environment (không truyền workspace thì CLI tự tạo Log Analytics)
az containerapp env create -g rg-ai200 -n aca-env -l eastus \\
  --logs-workspace-id $WS_ID --logs-workspace-key $WS_KEY

# 2. App với system identity, pull ACR bằng identity (không dùng password)
az containerapp create -g rg-ai200 -n rag-api --environment aca-env \\
  --image myacr.azurecr.io/ai/rag-api:1.0.0 \\
  --registry-server myacr.azurecr.io --registry-identity system \\
  --system-assigned --target-port 8000 --ingress external \\
  --min-replicas 0 --max-replicas 10

# 2b. System identity chỉ tồn tại SAU khi app được tạo -&gt; không khai KV secret ngay trong create
APP_PID=$(az containerapp show -g rg-ai200 -n rag-api --query identity.principalId -o tsv)
az role assignment create --assignee $APP_PID --role "Key Vault Secrets User" --scope $KV_ID
az containerapp secret set -g rg-ai200 -n rag-api \\
  --secrets "sb-conn=keyvaultref:https://kv1.vault.azure.net/secrets/SbConn,identityref:system"
az containerapp update -g rg-ai200 -n rag-api --set-env-vars "SB_CONN=secretref:sb-conn"

# 3. Scale theo độ dài queue Service Bus (KEDA)
az containerapp update -g rg-ai200 -n rag-api \\
  --scale-rule-name sb-len --scale-rule-type azure-servicebus \\
  --scale-rule-metadata queueName=jobs namespace=sb1 messageCount=20 \\
  --scale-rule-auth "connection=sb-conn"

# 4. Phát hành revision mới + chia traffic
az containerapp revision set-mode -g rg-ai200 -n rag-api --mode multiple
az containerapp update -g rg-ai200 -n rag-api --image myacr.azurecr.io/ai/rag-api:1.1.0 --revision-suffix v11
az containerapp ingress traffic set -g rg-ai200 -n rag-api --revision-weight latest=10 &lt;revision-cũ&gt;=90</code></pre>
<ul><li><strong>Đường tắt</strong>: <code>az containerapp up --source .</code> tự tạo RG, ACR, environment và build từ source — hợp demo, không hợp production vì không kiểm soát tên/SKU.</li>
<li><strong>Environment gắn VNet</strong> phải chọn <em>lúc tạo</em> (<code>--infrastructure-subnet-resource-id</code>); environment đã tạo không chuyển vào VNet được — phải tạo lại.</li>
<li><strong>Kiểm tra</strong>: <code>az containerapp revision list</code> (trạng thái <em>Provisioned/Running</em>), <code>az containerapp logs show --type system</code> cho lỗi pull image/probe.</li>
<li><strong>Bẫy</strong>: Key Vault reference cần identity đã có role <strong>Key Vault Secrets User</strong> <em>trước</em> khi thêm secret, nếu không sẽ lỗi "Authentication failed"; với system identity thì không khai KV secret ngay trong <code>create</code> được (dùng user-assigned identity thì được: <code>identityref:&lt;resource-id&gt;</code>). Đổi secret không tự tạo revision — phải restart revision hoặc tạo revision mới để app đọc giá trị mới; ngoại lệ: Key Vault reference <em>không ghi version</em> thì trong vòng 30 phút app tự lấy version mới và tự restart các revision đang dùng secret đó.</li></ul>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/cli/azure/containerapp" target="_blank" rel="noopener">az containerapp (CLI reference)</a>, <a href="https://learn.microsoft.com/en-us/azure/container-apps/manage-secrets" target="_blank" rel="noopener">Manage secrets in Container Apps</a> trên Microsoft Learn, đối chiếu ngày 26/09/2026.</em></p>
<hr>
<h2 id="01-container/4-azure-kubernetes-service-aks-voi-manifest-files">4. Azure Kubernetes Service (AKS) với manifest files</h2>
<h3 id="01-container/5f-k8s-tu-goc">4.1 Kubernetes từ gốc — thành phần cluster và vòng đời một pod</h3>
<p>Mục 4.6 dạy <em>viết</em> manifest. Mục này dạy <em>hiểu</em> chuyện gì xảy ra sau khi bấm <code>kubectl apply</code> — nắm được nó thì phần lớn câu hỏi troubleshooting tự giải được.</p>
<h3 id="01-container/5f1-thanh-phan">4.2 Ai làm gì trong cluster</h3>
<table><thead><tr><th>Thành phần</th><th>Ở đâu</th><th>Việc</th></tr></thead><tbody>
<tr><td><strong>kube-apiserver</strong></td><td>Control plane</td><td>Cửa duy nhất vào cluster — <code>kubectl</code>, controller, kubelet đều nói chuyện qua nó</td></tr>
<tr><td><strong>etcd</strong></td><td>Control plane</td><td>Kho lưu <em>trạng thái mong muốn</em> và trạng thái hiện tại</td></tr>
<tr><td><strong>kube-scheduler</strong></td><td>Control plane</td><td>Chọn node cho pod chưa có node</td></tr>
<tr><td><strong>controller manager</strong></td><td>Control plane</td><td>Chạy các vòng lặp điều hoà (Deployment, ReplicaSet, Job…)</td></tr>
<tr><td><strong>kubelet</strong></td><td>Mỗi node</td><td>Nhận pod được gán, gọi runtime tạo container, chạy probe, báo trạng thái về</td></tr>
<tr><td><strong>kube-proxy</strong></td><td>Mỗi node</td><td>Hiện thực IP ảo của Service bằng quy tắc iptables/IPVS</td></tr>
<tr><td><strong>container runtime</strong> (containerd)</td><td>Mỗi node</td><td>Kéo image và chạy container thật</td></tr>
</tbody></table>
<p>Trên AKS, control plane do Azure quản lý và không tính tiền theo node — bạn chỉ trả tiền node pool. Đó là lý do "nâng cấp control plane" và "nâng cấp node pool" là hai thao tác riêng.</p>
<h3 id="01-container/5f2-reconcile">4.3 Nguyên lý cốt lõi: khai báo + vòng lặp điều hoà</h3>
<ul><li>Bạn không ra lệnh "tạo 3 pod". Bạn <strong>khai trạng thái mong muốn</strong> (<code>replicas: 3</code>), rồi controller liên tục so sánh thực tế với mong muốn và sửa cho khớp.</li>
<li>Hệ quả trực tiếp: <code>kubectl delete pod</code> một pod thuộc Deployment thì <strong>pod mới mọc lại ngay</strong> — ReplicaSet thấy thiếu một cái. Muốn dừng thật phải sửa nguồn của mong muốn: <code>kubectl scale deployment rag-api --replicas=0</code> hoặc xoá Deployment.</li>
<li>Chuỗi sở hữu: <strong>Deployment → ReplicaSet → Pod</strong>. Mỗi lần đổi pod template, Deployment tạo một ReplicaSet <em>mới</em> và thu nhỏ cái cũ — đó chính là cơ chế rollback ở mục 4.10.</li>
<li><code>kubectl apply</code> là khai báo (lưu lại ý định); <code>kubectl edit</code>/<code>patch</code> sửa thẳng trạng thái trong cluster và sẽ bị <strong>ghi đè</strong> ở lần apply kế tiếp từ file — sửa nóng rồi quên cập nhật file là lỗi vận hành kinh điển.</li></ul>
<h3 id="01-container/5f3-vong-doi-pod">4.4 Vòng đời: từ <code>kubectl apply</code> tới pod nhận request</h3>
<ul><li><strong>1.</strong> <code>kubectl</code> gửi manifest tới apiserver → apiserver xác thực, phân quyền, ghi vào etcd.</li>
<li><strong>2.</strong> Deployment controller thấy có Deployment mới → tạo ReplicaSet. ReplicaSet controller → tạo các đối tượng Pod, lúc này <code>nodeName</code> còn rỗng nên pod ở <strong>Pending</strong>.</li>
<li><strong>3.</strong> Scheduler lọc các node đủ tài nguyên theo <code>requests</code> và thoả ràng buộc, chấm điểm rồi gán node. Không node nào qua được vòng lọc thì pod <strong>kẹt Pending</strong> — <code>kubectl describe pod</code> sẽ ghi rõ lý do (<em>Insufficient cpu</em>, <em>node(s) had untolerated taint</em>…).</li>
<li><strong>4.</strong> kubelet của node đó kéo image (thất bại → <code>ImagePullBackOff</code>), chạy lần lượt các <code>initContainers</code>, rồi tới container chính.</li>
<li><strong>5.</strong> Probe chạy. Khi <strong>readinessProbe</strong> pass, IP của pod mới được thêm vào EndpointSlice của Service — từ giây đó pod mới nhận traffic.</li>
<li>Pod phase: <strong>Pending → Running → Succeeded/Failed</strong>. <code>restartPolicy</code> mặc định là <code>Always</code> cho pod của Deployment; Job dùng <code>OnFailure</code>/<code>Never</code>.</li>
<li><strong>Pod là đơn vị nhỏ nhất</strong>, không phải container: các container trong một pod dùng chung network namespace (gọi nhau qua <code>localhost</code>) và volume. Đây là nền tảng của sidecar (Dapr, log agent) và initContainer (chờ DB, tải model xuống volume dùng chung).</li>
<li><strong>Namespace</strong> là biên giới đặt tên và là nơi áp <code>ResourceQuota</code>/<code>LimitRange</code>; nó <strong>không</strong> chặn pod ở namespace này gọi pod ở namespace khác — muốn chặn phải dùng NetworkPolicy.</li></ul>
<h3 id="01-container/41-luong-lam-viec">4.5 Luồng làm việc</h3>
<pre><button class="copybtn">copy</button><code>az aks create -g rg -n myaks --node-count 2 --enable-managed-identity \\
  --attach-acr myacr --enable-addons monitoring --generate-ssh-keys
az aks get-credentials -g rg -n myaks       # ghi kubeconfig
kubectl apply -f deployment.yaml -f service.yaml
kubectl get pods,svc</code></pre>
<p><code>--attach-acr</code> = tự cấp <code>AcrPull</code> cho kubelet identity (không cần imagePullSecret).</p>
<h3 id="01-container/42-manifest-mau-can-doc-hieu-nhanh">4.6 Manifest mẫu cần đọc-hiểu nhanh</h3>
<pre><button class="copybtn">copy</button><code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: rag-api
spec:
  replicas: 3
  selector:
    matchLabels: { app: rag-api }
  template:
    metadata:
      labels: { app: rag-api }
    spec:
      containers:
      - name: rag-api
        image: myacr.azurecr.io/ai/rag-api:1.0.0
        ports: [{ containerPort: 8000 }]
        resources:
          requests: { cpu: "250m", memory: "512Mi" }   # dùng để scheduling
          limits:   { cpu: "1",    memory: "1Gi" }     # vượt memory limit -&gt; OOMKilled
        env:
        - name: COSMOS_ENDPOINT
          valueFrom: { configMapKeyRef: { name: app-config, key: cosmos-endpoint } }
        - name: COSMOS_KEY
          valueFrom: { secretKeyRef: { name: app-secrets, key: cosmos-key } }
        readinessProbe:                                # chưa ready -&gt; không nhận traffic
          httpGet: { path: /healthz, port: 8000 }
          initialDelaySeconds: 10
        livenessProbe:                                 # fail -&gt; container bị restart
          httpGet: { path: /healthz, port: 8000 }
---
apiVersion: v1
kind: Service
metadata:
  name: rag-api
spec:
  type: ClusterIP          # LoadBalancer = public IP; ClusterIP = nội bộ
  selector: { app: rag-api }
  ports: [{ port: 80, targetPort: 8000 }]</code></pre>
<p>Khái niệm hay bị hỏi:</p>
<ul><li><strong>Deployment</strong> (stateless, rolling update) vs <strong>StatefulSet</strong> (identity + volume ổn định) vs <strong>DaemonSet</strong> (1 pod/node, vd agent log) vs <strong>Job/CronJob</strong> (batch).</li><li><strong>Service type</strong>: ClusterIP (nội bộ) / NodePort / LoadBalancer (public IP) / + <strong>Ingress controller</strong> cho routing L7 theo host/path.</li><li><strong>HPA</strong>: <code>kubectl autoscale deployment rag-api --cpu-percent=70 --min=3 --max=20</code>; muốn scale theo queue → cài <strong>KEDA</strong> trên AKS.</li><li><strong>Workload Identity</strong> (thay Pod Identity đã deprecated): pod dùng Entra ID để gọi Key Vault/Cosmos DB không cần secret.</li><li>Secrets: <code>Secret</code> của K8s chỉ base64 (không mã hoá) → production dùng <strong>Secrets Store CSI driver + Key Vault</strong>.</li></ul>
<h3 id="01-container/5e-manifest-van-hanh">4.7 Manifest AKS ở mức vận hành — QoS, eviction, PDB, ConfigMap</h3>
<p>Mục 4.6 đã dạy đọc-hiểu manifest. Mục này trả lời câu hỏi mà đề hay hỏi theo kiểu tình huống: <em>pod nào bị giết trước khi node hết RAM, vì sao drain node treo, vì sao đổi config mà app không thấy</em>.</p>
<h3 id="01-container/5e1-qos">4.8 Ba lớp QoS suy ra từ requests/limits</h3>
<table><thead><tr><th>Lớp</th><th>Điều kiện</th><th>Thứ tự bị evict</th></tr></thead><tbody>
<tr><td><strong>Guaranteed</strong></td><td><em>Mọi</em> container khai đủ request và limit cho <em>cả</em> CPU và memory, và <strong>limit = request</strong> ở cả hai</td><td>Cuối cùng</td></tr>
<tr><td><strong>Burstable</strong></td><td>Không đạt Guaranteed, nhưng có ít nhất một container khai request hoặc limit cho CPU/memory</td><td>Thứ hai</td></tr>
<tr><td><strong>BestEffort</strong></td><td>Không container nào khai request lẫn limit cho CPU và memory</td><td><strong>Đầu tiên</strong></td></tr>
</tbody></table>
<ul><li>Không khai gì cả là tự đẩy pod xuống BestEffort — nó bị giết đầu tiên khi node hết tài nguyên. Đây là lý do "pod embedding worker cứ biến mất lúc cao điểm" trong đề.</li>
<li>Chi tiết hay bị bỏ qua: khi evict vì thiếu tài nguyên, <strong>chỉ pod đang dùng vượt request của chính nó mới là ứng viên</strong>. Nghĩa là khai request đúng với mức tiêu thụ thật là cách bảo vệ pod hiệu quả hơn là nâng limit.</li>
<li>Phân biệt hai hành vi của <code>limits</code>: chạm <strong>CPU limit</strong> thì bị <em>throttle</em> (chậm lại, không chết); chạm <strong>memory limit</strong> thì kernel giết container → <code>OOMKilled</code>, và Deployment khởi động lại thành vòng <code>CrashLoopBackOff</code>.</li>
<li>Một container AI nạp model vào RAM nên đặt Guaranteed (request = limit) để không bị evict và không bị ép throttle bất thường; container phụ trợ để Burstable cho linh hoạt.</li></ul>
<p><strong>Hai điều kiện của Guaranteed đều dễ trượt.</strong> Phải khai đủ request <em>và</em> limit cho <strong>cả CPU lẫn memory</strong>, bằng nhau, ở <strong>mọi</strong> container trong pod (kể cả init container và sidecar). Đo trên cụm lab: pod khai <code>requests.cpu=100m</code> nhưng <code>limits.cpu=200m</code>, memory thì bằng nhau — kết quả vẫn là <strong>Burstable</strong>, không phải Guaranteed. Một sidecar log quên khai resources cũng kéo cả pod xuống Burstable.</p>
<p><strong>QoS biến thành cái gì ở tầng dưới.</strong> kubelet dịch lớp QoS thành <code>oom_score_adj</code> của tiến trình trong container — con số mà <em>kernel OOM killer</em> dùng để chọn nạn nhân khi node hết RAM. Đo thật trên cụm lab:</p>
<pre><button class="copybtn">copy</button><code>POD                QoS          oom_score_adj
qos-guaranteed     Guaranteed   -997
qos-burstable      Burstable     996
qos-besteffort     BestEffort   1000</code></pre>
<ul><li>Điểm càng cao càng dễ bị giết. Guaranteed nhận số <strong>âm</strong> nên gần như luôn sống sót; BestEffort nhận 1000, mức cao nhất, nên chết đầu tiên.</li>
<li>Con số của Burstable <strong>không cố định</strong>: nó được tính từ memory request so với dung lượng node, đại ý <code>1000 − 1000 × request / capacity</code>. Nghĩa là trong cùng lớp Burstable, <strong>pod khai request lớn hơn thì an toàn hơn</strong> — khai request sát nhu cầu thật là một hành động tự bảo vệ, không chỉ để scheduler xếp chỗ.</li></ul>
<p><strong>Hai cơ chế giết pod rất hay bị gộp làm một:</strong></p>
<table><thead><tr><th></th><th>Node-pressure eviction</th><th>OOM kill</th></tr></thead><tbody>
<tr><td>Ai làm</td><td>kubelet</td><td>kernel Linux</td></tr>
<tr><td>Khi nào</td><td>node sắp cạn RAM/disk (vượt <code>evictionHard</code>)</td><td>cgroup vượt <strong>memory limit</strong> của chính container</td></tr>
<tr><td>Thứ tự</td><td>BestEffort → Burstable dùng vượt request → Guaranteed</td><td>theo <code>oom_score_adj</code>, trong phạm vi cgroup đó</td></tr>
<tr><td>Cách chết</td><td>có ân hạn, pod bị evict và ghi event</td><td>giết ngay, trạng thái <code>OOMKilled</code>, exit code 137</td></tr>
</tbody></table>
<ul><li><strong>Vượt memory limit là <code>OOMKilled</code> bất kể lớp QoS nào</strong> — Guaranteed không miễn nhiễm, nó chỉ được bảo vệ khi <em>node</em> thiếu RAM chứ không phải khi <em>chính nó</em> xài quá phần đã khai.</li>
<li><strong>CPU nén được, memory thì không.</strong> Vượt CPU limit chỉ bị <em>throttle</em> (chậm đi, xem <code>container_cpu_cfs_throttled_seconds_total</code>); vượt memory limit là bị giết. Đây là lý do đặt CPU limit quá chặt gây độ trễ khó hiểu chứ không gây restart, còn memory limit đặt sai thì gây restart.</li>
<li>Triệu chứng → kết luận: pod biến mất kèm event <code>Evicted</code> là node thiếu tài nguyên (nâng request, hoặc lên Guaranteed); pod restart với <code>OOMKilled</code>/exit 137 là chính nó vượt limit (nâng limit, hoặc sửa rò rỉ bộ nhớ).</li>
<li>Với worker inference: đặt <strong>memory request = limit</strong> để vào Guaranteed. Đây là cách rẻ nhất để "pod cứ biến mất lúc cao điểm" thôi xảy ra. CPU thì có thể để request &lt; limit nếu chấp nhận throttle.</li>
<li>Bên lề nhưng hay ra đề: chỉ pod <strong>Guaranteed</strong> với CPU khai bằng số nguyên mới được cấp <em>core riêng</em> khi node bật CPU Manager policy <code>static</code>.</li></ul>
<h3 id="01-container/5e2-pdb-configmap">4.9 PodDisruptionBudget, ConfigMap và imagePullSecrets</h3>
<ul><li><strong>PDB chỉ chặn <em>voluntary disruption</em></strong> — drain node để vá, thu nhỏ cluster, autoscaler gỡ node. Nó <strong>không</strong> bảo vệ khi node chết, VM bị xoá, kernel panic hay pod bị evict vì hết tài nguyên; những sự cố đó vẫn <em>tính vào</em> ngân sách. Đề tả "node hỏng làm mất cả 3 replica, đã có PDB rồi mà" là bẫy đúng chỗ này — thứ cần là spread constraint qua nhiều node/zone, không phải PDB.</li>
<li><code>minAvailable: 2</code> hoặc <code>maxUnavailable: 1</code>; <code>kubectl drain</code> tôn trọng PDB và sẽ <em>thử lại</em> cho tới khi hết timeout — drain treo hàng chục phút thường là PDB quá chặt (ví dụ <code>minAvailable</code> bằng đúng số replica). Đặt <code>unhealthyPodEvictionPolicy: AlwaysAllow</code> để pod đang hỏng không giữ node lại mãi.</li>
<li>Xoá thẳng Deployment hay xoá pod bằng tay <strong>đi vòng qua PDB</strong>; rolling update của Deployment cũng không bị PDB giới hạn.</li>
<li><strong>ConfigMap gắn kiểu env thì không tự cập nhật</strong>, phải <code>kubectl rollout restart</code>. Gắn kiểu <em>volume mount</em> thì kubelet đồng bộ lại file (trễ bằng chu kỳ sync + độ trễ cache) — trừ khi mount bằng <code>subPath</code>, khi đó cũng không cập nhật. Đây là lý do đổi prompt template trong ConfigMap mà app vẫn chạy bản cũ.</li>
<li>Kéo image riêng tư trên AKS: cách khuyến nghị là gắn registry vào cluster (<code>az aks update --attach-acr</code>, thực chất là gán role <code>AcrPull</code> cho kubelet identity) — khi đó manifest <strong>không</strong> cần <code>imagePullSecrets</code>. Cách thủ công là tạo Secret kiểu <code>docker-registry</code> rồi khai <code>imagePullSecrets</code> trong pod spec; thiếu cả hai thì pod dừng ở <code>ImagePullBackOff</code>.</li>
<li><em>Nguồn: <a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/" target="_blank" rel="noopener">Kubernetes — Pod QoS classes</a>, <a href="https://kubernetes.io/docs/concepts/workloads/pods/disruptions/" target="_blank" rel="noopener">Disruptions</a>, <a href="https://kubernetes.io/docs/concepts/configuration/configmap/" target="_blank" rel="noopener">ConfigMap</a>, đối chiếu ngày 18/09/2026.</em></li></ul>
<h3 id="01-container/5g1-rolling-update">4.10 Rolling update — Deployment thay pod thế nào</h3>
<ul><li>Chiến lược mặc định là <strong>RollingUpdate</strong> với <code>maxSurge: 25%</code> và <code>maxUnavailable: 25%</code>. <code>maxSurge</code> <em>làm tròn lên</em>, <code>maxUnavailable</code> <em>làm tròn xuống</em> — nên với <code>replicas: 3</code>, mặc định là được phép tạo thêm 1 pod và không được phép thiếu pod nào.</li>
<li><code>maxUnavailable: 0</code> = không bao giờ tụt dưới số replica (an toàn nhất, cần thừa capacity). <code>maxSurge: 0</code> = không tạo thêm pod (tiết kiệm, nhưng phải chấp nhận thiếu tạm thời). Đặt cả hai bằng 0 là cấu hình <strong>không hợp lệ</strong> — rollout không nhúc nhích được.</li>
<li>Chiến lược <strong>Recreate</strong> tắt hết pod cũ rồi mới bật pod mới → có downtime; chỉ dùng khi hai phiên bản không chạy song song được (ví dụ migration schema không tương thích ngược).</li>
<li><strong>readinessProbe là thứ điều khiển nhịp rollout</strong>: pod chỉ được tính là <em>available</em> khi ready, và rollout chỉ hạ pod cũ tiếp khi đủ available. <strong>Không khai readinessProbe thì pod được coi là ready ngay khi container chạy</strong> — rollout báo thành công trong lúc app còn đang nạp model, và người dùng nhận 502. Đây là nguyên nhân số một của "deploy xong lỗi vài chục giây".</li>
<li><code>minReadySeconds</code> (mặc định <strong>0</strong>) bắt pod phải ready liên tục N giây mới tính là available — chống pod ready rồi chết ngay sau đó.</li>
<li><code>progressDeadlineSeconds</code> (mặc định <strong>600</strong>) đánh dấu Deployment là <code>ProgressDeadlineExceeded</code> khi quá hạn mà không tiến triển. Lưu ý: nó <strong>chỉ gắn condition, không tự rollback</strong>.</li>
<li><code>revisionHistoryLimit</code> (mặc định <strong>10</strong>) là số ReplicaSet cũ giữ lại để rollback được.</li></ul>
<pre><button class="copybtn">copy</button><code>kubectl rollout status deployment/rag-api        # chờ tới khi xong; trả exit code khác 0 nếu hỏng → dùng trong CI
kubectl rollout history deployment/rag-api
kubectl rollout undo deployment/rag-api --to-revision=3
kubectl rollout pause deployment/rag-api        # gom nhiều thay đổi rồi mới phát một lượt
kubectl rollout resume deployment/rag-api
kubectl rollout restart deployment/rag-api      # ép tạo pod mới: dùng khi đổi ConfigMap/Secret gắn kiểu env
</code></pre>
<h3 id="01-container/5g2-ba-probe">4.11 Ba probe — kubelet làm gì khi fail</h3>
<table><thead><tr><th>Probe</th><th>Trả lời câu hỏi</th><th>Fail thì kubelet làm gì</th></tr></thead><tbody>
<tr><td><strong>startupProbe</strong></td><td>App khởi động xong chưa?</td><td>Giết container theo <code>restartPolicy</code></td></tr>
<tr><td><strong>livenessProbe</strong></td><td>Tiến trình còn sống hay đã treo?</td><td><strong>Restart container</strong></td></tr>
<tr><td><strong>readinessProbe</strong></td><td>Nhận traffic được chưa?</td><td><strong>Gỡ IP pod khỏi EndpointSlice</strong> — ngừng nhận traffic, <em>không</em> restart</td></tr>
</tbody></table>
<ul><li><strong>startupProbe đè hai probe kia</strong>: khi có startupProbe, kubelet <em>không chạy</em> liveness và readiness cho tới khi startup thành công. Đây là lời giải đúng cho container nạp model mất 3 phút — thay vì nới <code>initialDelaySeconds</code> của liveness (làm chậm luôn khả năng phát hiện treo về sau).</li>
<li>Mặc định của mỗi probe: <code>initialDelaySeconds: 0</code>, <code>periodSeconds: 10</code>, <code>timeoutSeconds: 1</code>, <code>successThreshold: 1</code>, <code>failureThreshold: 3</code>. Nghĩa là mặc định container bị restart sau khoảng <strong>30 giây</strong> liveness fail liên tục, và <code>timeoutSeconds: 1</code> rất dễ fail oan với endpoint health check chậm.</li>
<li><strong>Bẫy lớn nhất</strong>: dùng chung một endpoint cho cả liveness lẫn readiness, mà endpoint đó lại đi kiểm tra Cosmos DB/PostgreSQL. DB chậm một nhịp là <em>toàn bộ</em> pod fail liveness và bị restart cùng lúc — sự cố tự gây ra. Nguyên tắc: <strong>liveness chỉ kiểm tra tiến trình của chính nó</strong> (trả 200 là đủ), còn <strong>readiness mới kiểm tra phụ thuộc</strong> (mất DB thì rút khỏi load balancer chứ không tự sát).</li></ul>
<p><strong>Cơ chế.</strong> Probe do <strong>kubelet trên chính node đó</strong> chạy, mỗi container một vòng lặp riêng — không đi qua Service, không qua API server, không qua ingress. Hệ quả thực tế: probe xanh <em>không</em> chứng minh đường mạng từ client tới pod thông; nó chỉ chứng minh kubelet gọi được endpoint đó từ trong node.</p>
<p><strong>Năm núm thời gian</strong> (giá trị mặc định lấy từ chính API server, không phải từ tài liệu):</p>
<table><thead><tr><th>Trường</th><th>Mặc định</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td><code>initialDelaySeconds</code></td><td>0</td><td>chờ bao lâu sau khi container start mới bắt đầu dò</td></tr>
<tr><td><code>periodSeconds</code></td><td>10</td><td>khoảng cách giữa hai lần dò</td></tr>
<tr><td><code>timeoutSeconds</code></td><td><strong>1</strong></td><td>quá hạn này coi như <em>fail</em></td></tr>
<tr><td><code>failureThreshold</code></td><td>3</td><td>fail liên tiếp bao nhiêu lần thì mới tính là hỏng</td></tr>
<tr><td><code>successThreshold</code></td><td>1</td><td>thành công mấy lần thì coi là khoẻ lại (liveness/startup bắt buộc là 1)</td></tr>
</tbody></table>
<ul><li><strong>Thời gian tệ nhất để phát hiện hỏng = <code>initialDelaySeconds</code> + <code>periodSeconds</code> × <code>failureThreshold</code></strong>. Để mặc định là 30 giây. Đề hỏi "phát hiện treo trong vòng 10 giây" thì phải tính ra con số, không đoán.</li>
<li><strong><code>timeoutSeconds</code> mặc định 1 giây là cái bẫy kinh điển.</strong> Endpoint <code>/health</code> có gọi database, lúc tải cao mất 1,2 giây → tính là fail → đủ 3 lần là liveness restart một app đang <em>khoẻ nhưng chậm</em>. Restart làm mất connection pool, tải dồn sang replica còn lại, chúng cũng chậm theo, rồi cũng bị restart — sự cố lan ra từ chính cơ chế đáng lẽ để bảo vệ.</li></ul>
<p><strong>Liveness fail thì restart theo cấp số nhân.</strong> Đo trên cụm kind trong lab với một container luôn fail liveness:</p>
<pre><button class="copybtn">copy</button><code>back-off 10s restarting failed container
back-off 40s restarting failed container      # đã qua mốc 20s giữa hai lần lấy mẫu
back-off 1m20s restarting failed container</code></pre>
<ul><li>Chuỗi là <strong>10s → 20s → 40s → 1m20s → 2m40s → trần 5 phút</strong>, và bộ đếm chỉ được reset khi container chạy ổn định 10 phút. Đây chính là trạng thái <code>CrashLoopBackOff</code>: pod không "hỏng thêm", nó chỉ đang bị bắt chờ lâu dần.</li>
<li><strong>Liveness tuyệt đối không được gọi dependency.</strong> Database chết thì liveness fail trên <em>mọi</em> replica cùng lúc, cả deployment vào vòng restart, và khi database sống lại thì không còn pod nào đứng dậy kịp. Quy tắc: liveness chỉ kiểm tiến trình của chính nó (có treo deadlock không), readiness mới được kiểm dependency.</li></ul>
<p><strong>Readiness fail thì KHÔNG restart.</strong> Đo trên cụm lab, pod có readiness luôn fail:</p>
<pre><button class="copybtn">copy</button><code>NAME          PHASE     READY   RESTARTS
probe-ready   Running   false   0

# EndpointSlice của Service trỏ tới nó:
probe-ready  ready=false  serving=false</code></pre>
<ul><li>Pod vẫn <code>Running</code>, <code>restartCount</code> vẫn 0. Điểm dễ nhớ nhầm: <strong>EndpointSlice vẫn giữ nguyên địa chỉ IP</strong>, chỉ đổi <code>conditions.ready</code> thành <code>false</code> — nó <em>không</em> xoá entry đi. kube-proxy đọc cờ đó để bỏ pod khỏi vòng cân bằng tải. Soi bằng <code>kubectl get endpointslice -o jsonpath='{..conditions.ready}'</code> chứ đừng chỉ nhìn <code>kubectl get endpoints</code>.</li>
<li>Vì thế readiness là công cụ đúng cho <em>rolling update không rơi request</em> và cho <em>tự rút khỏi tải khi dependency chập</em> — hai việc mà liveness làm sẽ thành thảm hoạ.</li></ul>
<p><strong>Bốn kiểu probe</strong>: <code>httpGet</code> (rẻ nhất, nên là mặc định), <code>tcpSocket</code> (chỉ chứng minh cổng mở, không chứng minh app xử lý được), <code>exec</code> (<strong>sinh hẳn một tiến trình mỗi chu kỳ</strong> — đặt <code>periodSeconds</code> nhỏ trên node đông pod là tự tạo tải), và <code>grpc</code> (dùng chuẩn gRPC Health Checking).</p>
<p><strong>Cấu hình startupProbe cho container nạp model chậm</strong>: <code>failureThreshold × periodSeconds</code> phải ≥ thời gian khởi động tệ nhất. Ví dụ model mất tới 5 phút: <code>periodSeconds: 10</code> và <code>failureThreshold: 30</code> cho ngân sách 300 giây, trong khi liveness vẫn giữ <code>periodSeconds: 10, failureThreshold: 3</code> để sau đó phát hiện treo trong 30 giây.</p>
<h3 id="01-container/5h1-scheduling">4.12 Scheduling — điều khiển nơi pod chạy</h3>
<ul><li>Scheduler <strong>lọc</strong> node theo <code>requests</code> và các ràng buộc, rồi <strong>chấm điểm</strong> chọn node tốt nhất. Khai <code>requests</code> quá lớn so với node là pod kẹt <code>Pending</code> vĩnh viễn dù cluster trông còn trống.</li>
<li><strong><code>nodeSelector</code></strong> — khớp label node, đơn giản và cứng. <strong><code>nodeAffinity</code></strong> — bản mạnh hơn, có <em>required</em> (bắt buộc) và <em>preferred</em> (ưu tiên, không có thì thôi).</li>
<li><strong><code>podAntiAffinity</code></strong> — không cho hai replica nằm cùng một node. <strong><code>topologySpreadConstraints</code></strong> — rải đều theo <code>topologyKey</code> (node, zone). Đây mới là thứ giữ dịch vụ sống khi một node hoặc một zone chết; PDB ở mục 4.7 <em>không</em> làm việc này.</li>
<li><strong>Taint đặt trên node, toleration đặt trên pod.</strong> Taint đẩy pod ra khỏi node (<code>kubectl taint nodes gpu-1 sku=gpu:NoSchedule</code>); toleration là giấy phép để pod được ở lại. Điểm hay bị hiểu ngược: <strong>toleration chỉ <em>cho phép</em> chứ không <em>bắt</em></strong> pod lên node đó — muốn ép pod GPU lên đúng node pool GPU thì phải <em>cộng thêm</em> <code>nodeSelector</code>/<code>nodeAffinity</code>.</li>
<li>Trên AKS, node pool GPU hoặc spot thường được taint sẵn, nên workload thường phải khai cả toleration lẫn nodeSelector.</li></ul>
<h3 id="01-container/5h2-service-dns">4.13 Service, EndpointSlice và DNS</h3>
<table><thead><tr><th>Loại Service</th><th>Cho ai gọi</th></tr></thead><tbody>
<tr><td><code>ClusterIP</code> (mặc định)</td><td>Chỉ trong cluster — một IP ảo ổn định đứng trước nhóm pod</td></tr>
<tr><td><code>NodePort</code></td><td>Mở một cổng trên mọi node; hiếm dùng trực tiếp trên AKS</td></tr>
<tr><td><code>LoadBalancer</code></td><td>Tạo Azure Load Balancer + IP public (hoặc internal nếu khai annotation)</td></tr>
<tr><td><code>ExternalName</code></td><td>Chỉ là bản ghi DNS CNAME trỏ ra ngoài</td></tr>
<tr><td>Ingress (không phải Service)</td><td>Định tuyến L7 theo host/path, terminate TLS, đứng trước nhiều Service</td></tr>
</tbody></table>
<ul><li>Service tìm pod bằng <strong>label selector</strong>, không phải bằng tên Deployment. Danh sách IP thật nằm trong <strong>EndpointSlice</strong>, và pod chỉ vào đó khi <em>ready</em>.</li>
<li><strong>Cách chẩn đoán "Service có mà gọi không tới"</strong>: <code>kubectl get endpointslice -l kubernetes.io/service-name=rag-api</code>. Rỗng nghĩa là (a) selector của Service không khớp label của pod, hoặc (b) chưa pod nào pass readiness. Hai nguyên nhân này chiếm gần hết các ca.</li>
<li>DNS nội bộ: <code>rag-api</code> (cùng namespace) → <code>rag-api.prod</code> (khác namespace) → <code>rag-api.prod.svc.cluster.local</code> (FQDN). Gọi sai namespace là lỗi hay gặp khi tách môi trường.</li>
<li><code>clusterIP: None</code> tạo <strong>headless service</strong>: DNS trả thẳng IP của từng pod thay vì một IP ảo — dùng cho StatefulSet khi client cần địa chỉ từng instance.</li>
<li>kube-proxy hiện thực ClusterIP bằng quy tắc iptables/IPVS ngay <em>trên mỗi node</em>; không có proxy tập trung nào nằm giữa, nên ClusterIP không phải là một tiến trình có thể "chết".</li>
<li><strong>NetworkPolicy</strong>: mặc định mọi pod gọi được mọi pod. Ngay khi một pod bị một NetworkPolicy chọn trúng, nó chuyển sang <em>deny-by-default</em> cho chiều đó — mọi luồng cần thiết phải được liệt kê tường minh. Áp policy ingress rồi quên mở cổng cho probe/mesh là nguyên nhân "vừa bật policy là app chết".</li>
<li><em>Nguồn cho các mục 4.1–4.4 và 4.10–4.13: <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/deployment-v1/" target="_blank" rel="noopener">Kubernetes API — Deployment</a> (mặc định <code>maxSurge</code>/<code>maxUnavailable</code> 25%, <code>revisionHistoryLimit</code> 10, <code>progressDeadlineSeconds</code> 600, <code>minReadySeconds</code> 0) và <a href="https://kubernetes.io/docs/concepts/configuration/liveness-readiness-startup-probes/" target="_blank" rel="noopener">Liveness, Readiness, Startup probes</a>, đối chiếu ngày 18/09/2026.</em></li></ul>
<h3 id="01-container/43-troubleshooting-aks-container-apps-thi-rat-sat">4.14 Troubleshooting AKS / Container Apps (thi rất sát)</h3>
<div class="tablewrap"><table><thead><tr><th>Triệu chứng</th><th>Lệnh / hướng xử lý</th></tr></thead><tbody><tr><td>Pod <code>Pending</code></td><td><code>kubectl describe pod</code> → thiếu resource/node → scale node pool, giảm <code>requests</code></td></tr><tr><td><code>ImagePullBackOff</code></td><td>Sai tag/registry hoặc thiếu quyền <code>AcrPull</code> → <code>kubectl describe pod</code>, kiểm tra <code>--attach-acr</code></td></tr><tr><td><code>CrashLoopBackOff</code></td><td><code>kubectl logs &lt;pod&gt; --previous</code> để xem log lần chạy trước khi crash</td></tr><tr><td><code>OOMKilled</code></td><td>Vượt <code>memory limit</code> → tăng limit hoặc giảm batch size khi embed</td></tr><tr><td>Probe fail liên tục</td><td>Kiểm tra path/port <code>readinessProbe</code>, <code>initialDelaySeconds</code> quá ngắn</td></tr><tr><td>Cần vào bên trong container</td><td><code>kubectl exec -it &lt;pod&gt; -- /bin/sh</code></td></tr><tr><td>Kiểm tra event cluster</td><td><code>kubectl get events --sort-by=.lastTimestamp</code></td></tr><tr><td>Kết nối end-to-end</td><td><code>kubectl run tmp --rm -it --image=curlimages/curl -- curl http://rag-api/healthz</code> (test DNS + service)</td></tr><tr><td>Log tập trung</td><td><strong>Container Insights</strong> → bảng <code>ContainerLogV2</code>, <code>KubePodInventory</code>, <code>KubeEvents</code> trong Log Analytics</td></tr></tbody></table></div>
<p>Container Apps:</p>
<pre><button class="copybtn">copy</button><code>az containerapp logs show -g rg -n rag-api --follow            # log ứng dụng (stdout/stderr)
az containerapp logs show -g rg -n rag-api --type system       # log hệ thống (scaling, provisioning)
az containerapp exec -g rg -n rag-api --command /bin/sh
az containerapp replica list -g rg -n rag-api -o table</code></pre>
<p>Bảng log của Container Apps trong Log Analytics: <strong><code>ContainerAppConsoleLogs_CL</code></strong> (stdout/stderr app) và <strong><code>ContainerAppSystemLogs_CL</code></strong> (sự kiện hệ thống). Với Azure Monitor mới: <code>AppEnvSpringAppConsoleLogs</code>/<code>ContainerAppConsoleLogs</code>.</p>
<hr>
<p><strong>Bảng trên nói dùng lệnh gì; phần này nói đọc kết quả ra sao.</strong> Bốn sự cố hay gặp nhất, với đúng dòng chữ mà cụm in ra — chạy thật trên cụm kind ba node trong lab.</p>
<p><strong>1. Pod <code>Pending</code> — scheduler nói thẳng vì sao, theo từng nhóm node:</strong></p>
<pre><button class="copybtn">copy</button><code>Warning  FailedScheduling  default-scheduler
  0/3 nodes are available: 1 node(s) had untolerated taint
  {node-role.kubernetes.io/control-plane: }, 2 Insufficient memory.</code></pre>
<ul><li>Đọc theo cụm từ: <strong>bao nhiêu node bị loại vì lý do gì</strong>. Ở đây 1 node loại vì taint (control plane), 2 node loại vì thiếu memory — hai nguyên nhân khác nhau cần hai cách sửa khác nhau. Đừng dừng ở chữ "Pending".</li>
<li><code>Insufficient memory</code> nói về <strong>request</strong>, không phải mức dùng thật. Node còn trống RAM mà vẫn báo thiếu là vì tổng request của các pod đã đặt kín — giảm request hoặc thêm node.</li>
<li><code>untolerated taint</code> → thiếu toleration, hoặc pod đang bị đẩy về node pool sai. Xem thêm mục về taint/toleration và nodeSelector.</li></ul>
<p><strong>2. <code>ImagePullBackOff</code> — phải đọc phần <em>sau</em> dấu hai chấm mới biết lỗi gì:</strong></p>
<pre><button class="copybtn">copy</button><code>Back-off pulling image "registry.invalid/khong-ton-tai:v9": ErrImagePull:
  failed to resolve reference ... dial tcp: lookup registry.invalid
  on 172.21.0.1:53: no such host</code></pre>
<ul><li>Cùng một trạng thái <code>ImagePullBackOff</code> nhưng ba nguyên nhân hoàn toàn khác nhau, phân biệt bằng đuôi thông báo: <code>no such host</code> là <strong>DNS/tên registry sai</strong>; <code>401 Unauthorized</code> là <strong>thiếu quyền</strong> (chưa gắn <code>--attach-acr</code> hoặc managed identity chưa có role <code>AcrPull</code>); <code>manifest unknown</code> là <strong>tag không tồn tại</strong>.</li>
<li>Pod ở phase <strong><code>Pending</code></strong> chứ không phải <code>Failed</code> — nó sẽ thử lại mãi. <code>ErrImagePull</code> là lần thất bại đầu, <code>ImagePullBackOff</code> là trạng thái chờ giữa các lần thử.</li></ul>
<p><strong>3. <code>CrashLoopBackOff</code> — trạng thái này KHÔNG phải một lỗi, nó là khoảng chờ.</strong></p>
<ul><li>Container thoát với mã khác 0, kubelet restart, backoff <strong>10s → 20s → 40s → 1m20s → … → trần 5 phút</strong>. Pod vẫn ở phase <code>Running</code>, nhưng <code>ready=false</code> và <code>restartCount</code> tăng dần.</li>
<li>Nguyên nhân thật nằm trong <strong>log của lần chạy trước</strong>, không phải lần hiện tại: <code>kubectl logs &lt;pod&gt; --previous</code>. Lệnh này có thể trả <code>unable to retrieve container logs</code> nếu container cũ đã bị dọn — khi đó bám vào <code>.status.containerStatuses[0].lastState.terminated</code> để lấy <code>exitCode</code> và <code>reason</code>.</li>
<li>Đọc exit code: <strong>1</strong> = app tự thoát vì lỗi (thiếu biến môi trường, không kết nối được DB); <strong>137</strong> = bị SIGKILL; <strong>139</strong> = segfault; <strong>143</strong> = SIGTERM (bị dừng có trật tự, thường là bình thường).</li></ul>
<p><strong>4. Hết bộ nhớ — hai kiểu rất khác nhau, đừng gộp:</strong></p>
<pre><button class="copybtn">copy</button><code># limit quá thấp đến mức container KHÔNG khởi động nổi
reason=RunContainerError / StartError   exitCode=128
  "container init was OOM-killed (memory limit too low?)"

# limit đủ để khởi động, chạy một lúc rồi mới vượt
reason=Error   exitCode=137            <-- tín hiệu thật nằm ở đây</code></pre>
<ul><li>Kiểu thứ nhất là khai <code>limits.memory</code> nhỏ hơn cả mức runtime cần để dựng tiến trình — sửa bằng cách nâng limit, không phải sửa code.</li>
<li>Kiểu thứ hai mới là OOM "kinh điển". <strong>Lưu ý quan trọng</strong>: trên cụm lab (containerd + cgroup v2), trường <code>reason</code> hiện <code>Error</code> chứ <em>không</em> phải <code>OOMKilled</code> — chỉ <code>exitCode=137</code> là tín hiệu đáng tin. Nhiều tài liệu bảo "tìm chữ OOMKilled"; nếu chỉ tìm chữ đó, bạn sẽ bỏ sót đúng ca đang gặp.</li>
<li>137 = 128 + 9, tức bị SIGKILL. Với container có memory limit thì thủ phạm gần như luôn là OOM killer của kernel. Đối chiếu thêm bằng <code>kubectl get events</code> và mức dùng thật (<code>kubectl top pod</code>).</li></ul>
<p><strong>Thứ tự chẩn đoán nên theo</strong>, để không nhảy cóc: <code>kubectl get pod -o wide</code> (phase, restart, node) → <code>kubectl describe pod</code> (Events ở cuối, đọc từ dưới lên) → <code>kubectl logs --previous</code> → <code>kubectl get events --sort-by=.lastTimestamp</code> (sự kiện cấp cluster như evict, scale) → cuối cùng mới <code>exec</code> vào trong. Vào container quá sớm là mất thời gian cho một pod mà scheduler còn chưa xếp được chỗ.</p>
<h3 id="01-container/khoa-persistent-storage">4.15 Lưu trữ bền vững trên AKS — PV, PVC và StorageClass</h3>
<p>Filesystem của container là tạm (ephemeral): pod restart hoặc bị dời sang node khác là mất dữ liệu. Mục này trả lời câu đề hay hỏi: cần lưu embedding, artifact cache hay trạng thái hội thoại thì chọn storage class nào, access mode nào.</p>
<ul><li><strong>PersistentVolumeClaim (PVC)</strong> là <em>yêu cầu</em> storage: dung lượng + access mode + <code>storageClassName</code>. Kubernetes <strong>bind</strong> claim vào một <strong>PersistentVolume (PV)</strong> thoả yêu cầu. <strong>StorageClass</strong> quyết định loại storage phía sau và cách cấp phát.</li>
<li>Hai hướng trên AKS: <strong>CSI driver</strong> (Azure Disk cho block storage một node, Azure Files cho file chia sẻ nhiều pod, Azure Blob cho dữ liệu phi cấu trúc lớn) — dùng cho nhu cầu chung; <strong>Azure Container Storage</strong> — nền tảng storage container-native, dùng giao thức block qua mạng như NVMe-oF để attach/detach nhanh, giảm thời gian failover pod — chọn khi workload nặng I/O hoặc cần scale stateful nhanh.</li></ul>
<div class="tablewrap"><table><thead><tr><th>StorageClass dựng sẵn</th><th>Phía sau</th><th>Access mode</th><th>Dùng khi</th></tr></thead><tbody>
<tr><td><code>managed-csi</code> (mặc định)</td><td>Azure Disk</td><td><code>ReadWriteOnce</code></td><td>Một pod, rẻ — database, app stateful</td></tr>
<tr><td><code>managed-csi-premium</code></td><td>Azure Disk Premium SSD</td><td><code>ReadWriteOnce</code></td><td>Một pod, cần latency thấp, throughput cao</td></tr>
<tr><td><code>azurefile-csi</code></td><td>Azure Files (SMB)</td><td><code>ReadWriteMany</code></td><td>Nhiều pod cùng đọc/ghi — file cấu hình, log, nội dung dùng chung</td></tr>
<tr><td><code>azurefile-csi-premium</code></td><td>Azure Files Premium SSD</td><td><code>ReadWriteMany</code></td><td>Chia sẻ nhiều pod và cần hiệu năng cao</td></tr>
</tbody></table></div>
<ul><li>Disk là <code>ReadWriteOnce</code> vì đĩa chỉ gắn vào <strong>một node</strong> — chỉ pod trên node đó dùng được. Files là <code>ReadWriteMany</code> vì SMB share mount được trên nhiều node cùng lúc.</li>
<li>Khai dung lượng vừa đủ nhưng tính trước độ tăng để khỏi phải resize liên tục.</li></ul>
<pre><button class="copybtn">copy</button><code># pvc.yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: data-pvc
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
  storageClassName: default
---
# trong spec.template.spec của Deployment
      volumes:
      - name: data-volume
        persistentVolumeClaim:
          claimName: data-pvc
      containers:
      - name: api
        image: myregistry.azurecr.io/web-api:v1
        volumeMounts:
        - name: data-volume
          mountPath: /app/data</code></pre>
<pre><button class="copybtn">copy</button><code>kubectl apply -f pvc.yaml
kubectl apply -f deployment.yaml
kubectl describe pvc data-pvc          # phải thấy trạng thái Bound
kubectl describe pod -l app=web-api
# Kiểm tra bền vững: ghi file vào /app/data, xoá pod, đợi pod mới, file vẫn còn</code></pre>
<ul><li>Lỗi truy cập lúc chạy (permission denied khi ghi vào <code>mountPath</code>) → kiểm tra ownership/permission của thư mục mount với user mà container chạy.</li>
<li>Trước khi lên production nên chạy load test nhỏ để xác nhận I/O đạt yêu cầu.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> nhiều replica cùng ghi vào một volume → phải là <code>ReadWriteMany</code> (Azure Files). Chọn Azure Disk (<code>ReadWriteOnce</code>) thì các pod nằm ở node khác không mount được volume. Ngược lại, database một instance cần latency thấp → <code>managed-csi-premium</code>, không phải Azure Files.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/configure-apps-azure-kubernetes-service/4-persistent-storage" target="_blank" rel="noopener">Configure applications on AKS — Attach persistent storage to an app</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/khoa-configmap-chuyen-sau">4.16 ConfigMap — giới hạn, envFrom, mount theo key và ConfigMap immutable</h3>
<p>Phần tự cập nhật khi mount volume và ngoại lệ <code>subPath</code> đã có ở mục PDB/ConfigMap. Mục này bổ sung các con số, trường YAML và biến thể mà khóa học dạy: giới hạn dung lượng, nạp mọi key một lần, chọn key để mount, và ConfigMap không sửa được.</p>
<ul><li>Dữ liệu trong <code>data</code> là cặp key–value <strong>dạng chuỗi</strong>; một ConfigMap tối đa <strong>1 MiB</strong> tổng cộng (để đồng bộ nhanh xuống node và lưu etcd hiệu quả). File lớn hơn hoặc dữ liệu nhị phân lớn → dùng persistent volume hoặc dịch vụ cấu hình bên ngoài.</li>
<li><code>binaryData</code> chứa giá trị nhị phân mã base64. Key chỉ gồm chữ số, chữ cái, <code>-</code>, <code>_</code>, <code>.</code>.</li>
<li>Giá trị nhiều dòng (<code>app.config: |</code>) dùng để chứa nội dung kiểu file.</li></ul>
<div class="tablewrap"><table><thead><tr><th>Cách nạp</th><th>YAML</th><th>Khi nào</th><th>Tự cập nhật khi sửa ConfigMap?</th></tr></thead><tbody>
<tr><td>Từng key → env</td><td><code>env[].valueFrom.configMapKeyRef</code></td><td>App đọc biến môi trường, cần ít key</td><td>Không — phải restart pod</td></tr>
<tr><td>Mọi key → env</td><td><code>envFrom[].configMapRef</code></td><td>Nhiều key, tránh YAML lặp</td><td>Không — phải restart pod</td></tr>
<tr><td>Mount thành file</td><td><code>volumes[].configMap</code> + <code>volumeMounts</code></td><td>App đọc file cấu hình trên đĩa; mỗi key thành một file</td><td>Có (theo chu kỳ sync của kubelet), trừ <code>subPath</code></td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code>        envFrom:
        - configMapRef:
            name: app-settings        # mọi key thành biến môi trường
---
volumes:
- name: config-volume
  configMap:
    name: app-settings
    items:                           # chỉ mount key đã chọn, đổi tên file
    - key: app.config
      path: application.conf
containers:
- name: api
  volumeMounts:
  - name: config-volume
    mountPath: /app/config
    readOnly: true</code></pre>
<ul><li><strong>Immutable ConfigMap</strong> (<code>immutable: true</code> ở cấp gốc, ngang <code>data</code>): chống sửa nhầm làm hỏng app đang chạy, và trong cluster lớn giảm tải API server vì Kubernetes đóng watch trên các ConfigMap này.</li>
<li>Đã đặt immutable thì <strong>không sửa được data và không tắt được immutable</strong> — muốn đổi phải xoá rồi tạo lại (thực tế: tạo bản có tên mới như <code>app-settings-v2</code> rồi trỏ Deployment sang). Pod đang chạy giữ mount tới ConfigMap đã xoá cho tới khi restart.</li>
<li>Hợp với cấu hình gắn với một phiên bản app, đổi cấu hình = deploy lại.</li></ul>
<pre><button class="copybtn">copy</button><code>kubectl apply -f configmap.yaml
kubectl apply -f deployment.yaml
kubectl describe configmap app-settings
kubectl exec &lt;pod-name&gt; -- printenv | grep FEATURE   # pod đã nhận env chưa</code></pre>
<blockquote><p><strong>Bẫy thi:</strong> "đổi giá trị trong ConfigMap immutable" không có cách <code>kubectl edit</code> nào làm được — đáp án là tạo ConfigMap mới (hoặc xoá và tạo lại) rồi rollout lại pod. Và "một file cấu hình 5 MB" không nhét vào ConfigMap được (trần 1 MiB).</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/configure-apps-azure-kubernetes-service/2-define-configmaps" target="_blank" rel="noopener">Configure applications on AKS — Define ConfigMaps for application settings</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/khoa-secret-aks">4.17 Secret trên AKS — tạo, kiểm tra, và khi nào chuyển sang Key Vault CSI hay App Configuration</h3>
<p>Tài liệu mới chỉ ghi "Secret chỉ là base64, production dùng Secrets Store CSI driver". Mục này bổ sung phần khóa học dạy: lệnh tạo, các loại Secret, cách kiểm tra mà không lộ giá trị, và bảng chọn giữa hai kiểu tích hợp Azure.</p>
<pre><button class="copybtn">copy</button><code>kubectl create secret generic app-secrets \\
  --from-literal=DB_CONNECTION="Host=db;User=app;Password=secure" \\
  --from-literal=API_KEY="your-api-key"

kubectl get secrets                      # tên, type, số key (DATA), tuổi
kubectl describe secret app-secrets      # liệt kê key, KHÔNG in giá trị
kubectl describe deployment web-api      # xem secretKeyRef có trỏ đúng Secret/key</code></pre>
<div class="tablewrap"><table><thead><tr><th>Type</th><th>Dùng cho</th></tr></thead><tbody>
<tr><td><code>Opaque</code> (tạo bằng <code>generic</code>)</td><td>Chuỗi thường: API key, mật khẩu, connection string</td></tr>
<tr><td><code>kubernetes.io/dockerconfigjson</code></td><td>Thông tin đăng nhập container registry (dùng với <code>imagePullSecrets</code>)</td></tr>
<tr><td><code>kubernetes.io/tls</code></td><td>Chứng chỉ TLS và private key</td></tr>
</tbody></table></div>
<ul><li>Tạo từ literal, từ file hoặc từ manifest YAML; manifest hợp với GitOps nhưng <strong>không bao giờ commit manifest có giá trị thật</strong>.</li>
<li>Nạp vào container qua <code>env[].valueFrom.secretKeyRef</code> — giống ConfigMap, đổi Secret thì phải rollout lại Deployment để pod nhận giá trị mới.</li>
<li>Best practice của khóa: giới hạn quyền xem/sửa Secret bằng <strong>RBAC</strong>; xoay vòng định kỳ rồi trigger rollout; bật <strong>mã hoá etcd lúc tạo cluster</strong> (encryption at rest) làm lớp bảo vệ thêm; production thì tích hợp Key Vault.</li></ul>
<div class="tablewrap"><table><thead><tr><th></th><th>Key Vault + Secrets Store CSI Driver</th><th>App Configuration + Key Vault reference (Kubernetes Provider)</th></tr></thead><tbody>
<tr><td>Secret nằm ở đâu</td><td>Chỉ trong Key Vault; mount thẳng vào filesystem pod dưới dạng file</td><td>Giá trị trong Key Vault; App Config giữ <em>reference</em>; provider lấy giá trị và tạo <strong>Kubernetes Secret</strong> gốc</td></tr>
<tr><td>App nhận thế nào</td><td>Đọc file trong volume CSI</td><td>Secret Kubernetes bình thường — app không tự xác thực tới Key Vault hay App Config</td></tr>
<tr><td>Chọn khi</td><td>Cần audit chi tiết từng lần truy cập secret, secret chỉ được ở trong vault</td><td>Muốn quản lý tập trung "app nào dùng secret nào", giao secret dưới dạng tài nguyên Kubernetes chuẩn</td></tr>
</tbody></table></div>
<p>Chi tiết add-on CSI (docs AKS liên kết từ unit):</p>
<pre><button class="copybtn">copy</button><code># Cluster mới
az aks create -n myAKSCluster -g myResourceGroup \\
  --enable-addons azure-keyvault-secrets-provider --generate-ssh-keys
# Cluster có sẵn
az aks enable-addons --addons azure-keyvault-secrets-provider -n myAKSCluster -g myResourceGroup
# Kiểm tra
az aks show -n myAKSCluster -g myResourceGroup --query addonProfiles
kubectl get pods -n kube-system -l 'app in (secrets-store-csi-driver,secrets-store-provider-azure)' -o wide</code></pre>
<ul><li>Add-on tự tạo user-assigned managed identity <code>azurekeyvaultsecretsprovider-xxxx</code> trong node resource group (<code>MC_</code>), gán vào VM Scale Set; không tắt được việc tạo identity này. Dùng nó hoặc identity riêng (có thể là Workload ID — khi đó cần thêm <code>--enable-oidc-issuer --enable-workload-identity</code>).</li>
<li>Identity dùng trong <code>SecretProviderClass</code> (CRD mô tả vault/object cần mount) cần <strong>Key Vault Secrets User</strong> để đọc secret, <strong>Key Vault Certificate User</strong> để đọc key/certificate.</li>
<li>Output mặc định của <code>addonProfiles</code>: <code>"enableSecretRotation": "false"</code>, <code>"rotationPollInterval": "2m"</code> — <strong>autorotation mặc định tắt</strong>.</li>
<li>Mount bằng <code>subPath</code> thì không nhận secret đã xoay (giới hạn của Kubernetes) — app phải tự theo dõi file hoặc restart pod.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> unit nói CSI driver "polls for changes and updates mounted secrets automatically without Pod restarts" — đúng, nhưng chỉ khi đã bật secret rotation trên add-on (mặc định <code>false</code>, chu kỳ 2 phút), và chỉ với file mount (không phải <code>subPath</code>). Còn secret đã được đưa vào <em>biến môi trường</em> thì vẫn phải restart pod.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/configure-apps-azure-kubernetes-service/3-implement-secrets" target="_blank" rel="noopener">Configure applications on AKS — Implement secrets for sensitive data</a> (khóa AI-200T00 trên Microsoft Learn) và <a href="https://learn.microsoft.com/en-us/azure/aks/csi-secrets-store-driver" target="_blank" rel="noopener">Use the Azure Key Vault provider for Secrets Store CSI Driver</a>, đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/khoa-deploy-verify">4.18 Deploy và xác minh — đọc output kubectl, EXTERNAL-IP, Service không có endpoint</h3>
<p>Mục Troubleshooting đã có bảng triệu chứng. Mục này bổ sung các lệnh và cột output mà unit dùng để xác minh sau <code>kubectl apply</code>, cùng các con số định cỡ replica/tài nguyên khóa học đưa ra.</p>
<pre><button class="copybtn">copy</button><code>kubectl apply -f deployment.yaml -f service.yaml
kubectl apply -f .                        # mọi file YAML trong thư mục

kubectl get deployment
# NAME            READY   UP-TO-DATE   AVAILABLE   AGE
# inference-api   2/2     2            2           2m
kubectl get svc inference-api-service
# NAME                    TYPE          CLUSTER-IP   EXTERNAL-IP    PORT(S)
# inference-api-service   LoadBalancer  10.0.12.45   40.89.123.45   80:30523/TCP

kubectl logs -l app=inference-api         # log mọi pod theo label
kubectl logs &lt;pod&gt; --since=10m            # chỉ 10 phút gần nhất
kubectl get pods --show-labels            # hoặc: kubectl get pods -L app
kubectl describe svc inference-api-service   # xem Selector và Endpoints
az acr repository list --name myregistry  # image đã push lên chưa
az aks scale --resource-group mygroup --name myaks --node-count 3   # thêm node khi Pending do hết capacity</code></pre>
<ul><li><code>kubectl apply</code> là <strong>bất đồng bộ</strong>: lệnh trả về ngay, pod còn cần thời gian kéo image và khởi động.</li>
<li><code>EXTERNAL-IP</code> hiện <code>&lt;pending&gt;</code> = Azure Load Balancer đang được cấp — chờ rồi xem lại, không phải lỗi.</li>
<li>Cột <code>PORT(S)</code> <code>80:30523/TCP</code>: 80 là <code>port</code> của Service, 30523 là node port được cấp. NodePort truy cập bằng <code>node-ip:nodeport</code>, thường là cổng cao (30000+).</li>
<li><code>port</code> = cổng client gọi vào Service; <code>targetPort</code> = cổng app lắng nghe trong container. <code>kubectl describe svc</code> in <code>Endpoints: &lt;none&gt;</code> nghĩa là selector không khớp label pod nào.</li>
<li><code>kubectl top nodes</code> để xem capacity cần <strong>metrics server</strong>.</li>
<li>Định cỡ theo khóa: 2 replica cho dev/dịch vụ không quan trọng; <strong>3 replica cho API production phục vụ người dùng ngoài</strong>; 4+ chỉ khi tải cao. Memory: lấy yêu cầu tài liệu của model rồi cộng <strong>20% overhead</strong>; CPU inference thường 1–2 core/pod.</li>
<li>Test Service nội bộ bằng pod tạm: <code>kubectl run -it --rm debug --image=alpine:latest --restart=Never -- sh</code> rồi <code>wget http://inference-api-service:80</code>.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> từ pod khác gọi Service phải dùng <code>port</code> của Service (80), không phải <code>targetPort</code> (8080). Một ví dụ trong unit ghi <code>...svc.cluster.local:8080</code> dù manifest cùng unit khai <code>port: 80</code> → <code>targetPort: 8080</code>; theo đúng manifest thì URL phải là cổng 80.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/deploy-apps-azure-kubernetes-service/4-deploy-verify-results" target="_blank" rel="noopener">Deploy applications to AKS — Deploy applications to Azure Kubernetes Services</a>, <a href="https://learn.microsoft.com/en-us/training/modules/deploy-apps-azure-kubernetes-service/3-expose-applications" target="_blank" rel="noopener">Expose applications</a>, <a href="https://learn.microsoft.com/en-us/training/modules/deploy-apps-azure-kubernetes-service/2-create-deployment-manifests" target="_blank" rel="noopener">Create deployment manifests</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/khoa-giam-sat-aks-portal">4.19 Giám sát AKS — công cụ trên Azure portal và kubectl logs/top</h3>
<p>Module giám sát của khóa học dạy song song hai đường: portal để nhìn tổng quan và kubectl để điều tra sâu. Đề hay hỏi "muốn làm X trên portal thì vào mục nào", phần mà tài liệu hiện có chưa phủ.</p>
<div class="tablewrap"><table><thead><tr><th>Muốn…</th><th>Portal (trong AKS cluster)</th><th>kubectl</th></tr></thead><tbody>
<tr><td>Xem log realtime</td><td><strong>Kubernetes resources → Workloads</strong> → chọn deployment/pod → <strong>Live Logs</strong> (stdout/stderr, pause, tìm chữ, đổi container)</td><td><code>kubectl logs -f &lt;pod&gt; -n ai-workloads</code></td></tr>
<tr><td>Log gom cả cluster, lọc theo namespace/pod/container</td><td><strong>Monitoring → Insights</strong> (Container insights)</td><td>—</td></tr>
<tr><td>CPU/memory tổng quan</td><td>Tab <strong>Monitoring</strong> trên trang Overview (biểu đồ theo node pool, mở sang metrics explorer)</td><td><code>kubectl top nodes</code></td></tr>
<tr><td>CPU/memory/network realtime một pod</td><td>Insights → tab <strong>Nodes</strong> hoặc <strong>Controllers</strong> → chọn pod → <strong>Live Metrics</strong></td><td><code>kubectl top pods -n ai-workloads</code> (cần metrics server)</td></tr>
<tr><td>Mở shell vào container</td><td>Workloads → chọn pod → tab <strong>Console</strong></td><td><code>kubectl exec -it &lt;pod&gt; -n ai-workloads -- /bin/sh</code></td></tr>
<tr><td>Chẩn đoán có hướng dẫn</td><td><strong>Diagnose and solve problems</strong> (kết nối, sức khoẻ node, cấu hình cluster; tự chạy và gợi ý cách sửa)</td><td><code>kubectl describe pod</code>, <code>kubectl get events -n ai-workloads</code></td></tr>
<tr><td>Xem Service, endpoint, ingress</td><td><strong>Kubernetes resources → Services and ingresses</strong> (type, cluster IP, external IP, selector, Endpoints; ingress: host, path, backend, cột Address)</td><td><code>kubectl get svc</code>, <code>kubectl get ingress</code></td></tr>
</tbody></table></div>
<ul><li>Pod nhiều container (sidecar log/metrics) → phải chỉ tên container: <code>kubectl logs &lt;pod&gt; -c inference-api -n ai-workloads</code>.</li>
<li>Namespace tách môi trường, quyền và quota; label chọn pod trong namespace — dùng cả hai khi lọc log.</li>
<li>Tín hiệu chính cho AI workload: latency và throughput của endpoint; tỉ lệ lỗi (HTTP 5xx, timeout); số lần restart pod và exit code; CPU/memory so với requests/limits. Pod chạm CPU limit liên tục bị throttle → latency inference tăng.</li>
<li>Best practice: log có dữ liệu tương quan (request ID, tên model, version); ưu tiên <strong>structured logging</strong>; đặt mục tiêu latency/error budget và chọn metric báo khi sắp chạm ngưỡng; sửa qua manifest/source, <strong>không sửa tay trong container</strong>.</li>
<li>Luồng điển hình: thấy CPU cao trên tab Monitoring → vào Container insights tìm pod bị ảnh hưởng → <code>kubectl logs</code> xem hành vi lúc spike.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "xem log realtime mà không cấu hình kubectl" → <strong>Live Logs</strong>; "xem xu hướng lịch sử, so sánh nhiều pod" → <strong>Container insights</strong>, không phải <code>kubectl top</code> (chỉ là ảnh chụp tức thời và cần metrics server). "Cần gợi ý tự động cho sự cố node/kết nối" → <strong>Diagnose and solve problems</strong>.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/monitor-apps-azure-kubernetes-service/2-monitor-logs-metrics" target="_blank" rel="noopener">Monitor and troubleshoot applications on AKS — Monitor application logs and metrics</a>, <a href="https://learn.microsoft.com/en-us/training/modules/monitor-apps-azure-kubernetes-service/3-troubleshoot-pods-services" target="_blank" rel="noopener">Troubleshoot pods and services</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/khoa-kiem-tra-ket-noi">4.20 Kiểm tra đường kết nối — port-forward, EndpointSlice, ingress</h3>
<p>Pod khoẻ vẫn có thể không ai gọi tới được. Khóa học dạy kiểm tra theo từng chặng, từ trong container ra tới client bên ngoài; tài liệu hiện có mới có chặng EndpointSlice và pod curl tạm.</p>
<ol><li><strong>Trong container</strong>: <code>curl http://localhost:8080/health</code> (qua <code>kubectl exec</code> hoặc tab Console) — app có chạy đúng cổng không.</li>
<li><strong>Service → pod</strong>: selector khớp label, <code>port</code>/<code>targetPort</code> khớp <code>containerPort</code>, EndpointSlice có IP pod.</li>
<li><strong>Từ máy dev vào Service</strong> (chưa có ingress, đang debug model mới): port-forward.</li>
<li><strong>Từ ngoài vào</strong>: lấy external IP của LoadBalancer hoặc Address của ingress rồi gửi request thật.</li></ol>
<pre><button class="copybtn">copy</button><code>kubectl get endpointslices -l kubernetes.io/service-name=inference-api -n ai-workloads

kubectl port-forward service/inference-api 8080:80 -n ai-workloads
# terminal khác:
curl http://localhost:8080/api/inference

kubectl get service inference-api -n ai-workloads   # EXTERNAL-IP
kubectl get ingress -n ai-workloads                  # ADDRESS</code></pre>
<ul><li><code>port-forward</code> nhắm được vào pod hoặc vào Service (Service thì đứng trước nhiều replica). Cú pháp <code>&lt;cổng local&gt;:&lt;cổng Service&gt;</code>.</li>
<li>API cho client ngoài: Service <code>LoadBalancer</code> hoặc qua ingress controller; dịch vụ chỉ nội bộ: <code>ClusterIP</code>.</li>
<li>Best practice: chuẩn hoá label để Service/ingress chọn đúng pod; <strong>test bằng port-forward trước khi public</strong>; ghép kiểm tra kết nối với log/metric để thấy ảnh hưởng của thay đổi cấu hình.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "kiểm tra endpoint mới trước khi cấu hình ingress, không mở ra internet" → <code>kubectl port-forward</code>, không phải đổi Service sang <code>LoadBalancer</code> hay <code>NodePort</code>. Port-forward chạy được mà client ngoài vẫn lỗi → vấn đề nằm ở chặng load balancer/ingress, không phải ở pod hay Service.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/monitor-apps-azure-kubernetes-service/4-verify-connectivity" target="_blank" rel="noopener">Monitor and troubleshoot applications on AKS — Verify service connectivity and endpoints</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="01-container/trien-khai-aks">4.21 Triển khai AKS trên Azure — từng bước</h3>
<p>Thứ tự: <strong>cluster (managed identity, gắn ACR, bật workload identity) → kubeconfig → namespace → manifest → rollout</strong>; truy cập Azure từ pod bằng <strong>workload identity</strong>, không nhét key vào Secret.</p>
<pre><button class="copybtn">copy</button><code># 1. Cluster: kubelet identity tự có AcrPull nhờ --attach-acr; bật OIDC + workload identity
az aks create -g rg-ai200 -n aks1 --node-count 2 --node-vm-size Standard_D4s_v5 \\
  --enable-managed-identity --attach-acr myacr \\
  --enable-oidc-issuer --enable-workload-identity \\
  --network-plugin azure --network-plugin-mode overlay \\
  --enable-addons monitoring --generate-ssh-keys

# 2. Node pool GPU riêng, có taint để chỉ pod inference mới lên
az aks nodepool add -g rg-ai200 --cluster-name aks1 -n gpu \\
  --node-vm-size Standard_NC4as_T4_v3 --node-count 1 --node-taints sku=gpu:NoSchedule

# 3. Workload identity: user-assigned identity + federated credential cho service account
az identity create -g rg-ai200 -n id-rag
ISSUER=$(az aks show -g rg-ai200 -n aks1 --query oidcIssuerProfile.issuerUrl -o tsv)
az identity federated-credential create -g rg-ai200 --identity-name id-rag -n fc-rag \\
  --issuer $ISSUER --subject system:serviceaccount:rag:rag-sa --audience api://AzureADTokenExchange

# 4. Deploy
az aks get-credentials -g rg-ai200 -n aks1
kubectl create namespace rag
kubectl apply -n rag -f serviceaccount.yaml -f deployment.yaml -f service.yaml
kubectl rollout status -n rag deploy/rag-api</code></pre>
<ul><li>ServiceAccount mang annotation <code>azure.workload.identity/client-id: &lt;client-id của id-rag&gt;</code>, pod mang label <code>azure.workload.identity/use: "true"</code> (đặt ở <code>spec.template.metadata.labels</code> của Deployment, không phải label của Deployment) — thiếu một trong hai là <code>DefaultAzureCredential</code> trong pod không lấy được token.</li>
<li><strong>Kiểm tra</strong>: <code>az aks check-acr -g rg-ai200 -n aks1 --acr myacr.azurecr.io</code> khi pod kẹt <code>ImagePullBackOff</code>; <code>kubectl get events --sort-by=.lastTimestamp</code> cho lỗi schedule.</li>
<li><strong>Bẫy</strong>: <code>--attach-acr</code> dùng quyền của người chạy lệnh để tạo role assignment AcrPull — tài liệu yêu cầu vai trò Owner (hoặc account administrator/co-administrator) trên subscription; không có quyền đó thì nhờ người khác gán AcrPull cho kubelet identity. Network plugin đổi được sau khi tạo nhưng chỉ một chiều: kubenet hoặc Azure CNI (node subnet) → Azure CNI Overlay (<code>az aks update --network-plugin azure --network-plugin-mode overlay</code>, không quay lại được, reimage mọi node pool) — vẫn nên chọn đúng từ đầu.</li></ul>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/azure/aks/workload-identity-deploy-cluster" target="_blank" rel="noopener">Deploy and configure workload identity</a>, <a href="https://learn.microsoft.com/en-us/azure/aks/cluster-container-registry-integration" target="_blank" rel="noopener">Integrate ACR with AKS</a>, <a href="https://learn.microsoft.com/en-us/azure/aks/update-azure-cni" target="_blank" rel="noopener">Update Azure CNI</a> trên Microsoft Learn, đối chiếu ngày 26/09/2026.</em></p>
<hr>
<h2 id="01-container/5i-fastapi-dockerfile">5. Đóng gói một AI service — FastAPI, application factory và Dockerfile</h2>
<p>Trước khi nói tới ACR hay Container Apps thì phải có một image chạy được. Phần này là những chỗ mà một AI service hay hỏng ngay ở bước đóng gói.</p>
<pre><button class="copybtn">copy</button><code># app/main.py — application factory + lifespan nạp model đúng một lần
from contextlib import asynccontextmanager
from fastapi import FastAPI
from openai import OpenAI

state = {}

@asynccontextmanager
async def lifespan(app: FastAPI):
    state["client"] = OpenAI(base_url=..., api_key=...)   # tạo MỘT lần, tái dùng
    yield                                                  # app phục vụ ở đây
    state.clear()                                          # dọn khi tắt

def create_app() -&gt; FastAPI:                               # application factory
    app = FastAPI(lifespan=lifespan)

    @app.get("/healthz")       # liveness: chỉ xác nhận tiến trình còn phản hồi
    def healthz(): return {"status": "ok"}

    @app.get("/ready")         # readiness: sẵn sàng khi đã có client và model
    def ready():
        return ({"status": "ready"}, 200) if state.get("client") else ({"status": "loading"}, 503)

    return app

app = create_app()
</code></pre>
<ul><li><strong>Application factory</strong> (một hàm trả về <code>FastAPI</code>) thay cho một biến toàn cục: test dựng được nhiều instance độc lập, và cấu hình truyền vào được thay vì đọc biến môi trường rải rác.</li>
<li><strong><code>lifespan</code> thay cho <code>@app.on_event</code></strong> (đã deprecated): nạp model, mở connection pool và tạo client SDK <em>một lần</em> lúc khởi động. Tạo client trong mỗi handler là mất token cache và mở connection pool mới ở mỗi request.</li>
<li>Tách <strong><code>/healthz</code></strong> (liveness — chỉ tiến trình) khỏi <strong><code>/ready</code></strong> (readiness — có model, có DB). Đây chính là điều kiện để mục 4.11 và mục 3.10–3.11 hoạt động đúng.</li></ul>
<pre><button class="copybtn">copy</button><code># Dockerfile — multi-stage, non-root, cổng khai rõ
FROM python:3.12-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir --prefix=/install -r requirements.txt

FROM python:3.12-slim
RUN useradd -m appuser
COPY --from=builder /install /usr/local
WORKDIR /app
COPY --chown=appuser:appuser app/ ./app/
USER appuser
EXPOSE 8000
# 0.0.0.0 là bắt buộc: bind 127.0.0.1 thì container không nhận được kết nối từ ngoài
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
</code></pre>
<ul><li><strong>Lỗi số một khi container hoá</strong>: <code>uvicorn --host 127.0.0.1</code>. Bên trong container nó chỉ nghe loopback, nên mọi request từ ngoài bị từ chối — biểu hiện là 502 trên App Service, revision "provisioned" nhưng timeout trên Container Apps, <code>connection refused</code> trên AKS. Luôn <code>--host 0.0.0.0</code>.</li>
<li><strong>Cổng phải khớp ba nơi</strong>: cổng uvicorn, <code>EXPOSE</code>/<code>targetPort</code> của platform, và <code>WEBSITES_PORT</code> nếu là App Service.</li>
<li><strong>Multi-stage</strong> để image chạy không mang theo toolchain build; <code>python:3.12-slim</code> thay vì bản đầy đủ; <code>--no-cache-dir</code> để không nhét cache pip vào layer.</li>
<li><strong>Thứ tự layer</strong>: copy <code>requirements.txt</code> và cài trước, copy mã nguồn sau — sửa code không làm mất cache của bước cài, build nhanh hơn hẳn.</li>
<li><strong>Chạy non-root</strong> (<code>USER appuser</code>) và có <code>.dockerignore</code> (bỏ <code>.git</code>, <code>.env</code>, <code>__pycache__</code>, notebook) — vừa nhỏ hơn vừa tránh lộ secret vào image.</li>
<li>Với worker (embedding, consumer hàng đợi) thì <strong>không mở ingress</strong> — xem cảnh báo scale-to-zero ở mục 3.11.</li></ul>
<hr>
<h2 id="01-container/5k-bicep">6. Bicep — triển khai khai báo cho chuỗi ACR → Container Apps</h2>
<p>Bicep là ngôn ngữ khai báo biên dịch ra ARM template. Điểm cần nắm cho đề và cho việc dựng lại môi trường: tính <em>idempotent</em>, cách khai phụ thuộc, và cách xem trước thay đổi.</p>
<pre><button class="copybtn">copy</button><code>// main.bicep — rút gọn: environment + container app kéo image từ ACR bằng managed identity
param location string = resourceGroup().location
param acrName string
param appName string

// Tham chiếu tài nguyên có sẵn, không tạo mới
resource acr 'Microsoft.ContainerRegistry/registries@2023-07-01' existing = {
  name: acrName
}

resource env 'Microsoft.App/managedEnvironments@2024-03-01' = {
  name: '\\\${appName}-env'
  location: location
  properties: {}
}

resource app 'Microsoft.App/containerApps@2024-03-01' = {
  name: appName
  location: location
  identity: { type: 'SystemAssigned' }
  properties: {
    managedEnvironmentId: env.id              // phụ thuộc NGẦM: Bicep tự xếp thứ tự
    configuration: {
      ingress: { external: true, targetPort: 8000 }
      registries: [ { server: acr.properties.loginServer, identity: 'system' } ]
    }
    template: {
      containers: [ { name: appName, image: '\\\${acr.properties.loginServer}/rag-api:1.4.7' } ]
      scale: { minReplicas: 1, maxReplicas: 10 }
    }
  }
}

output fqdn string = app.properties.configuration.ingress.fqdn
</code></pre>
<pre><button class="copybtn">copy</button><code># Xem trước thay đổi rồi mới triển khai
az deployment group what-if -g rg --template-file main.bicep --parameters acrName=myacr appName=rag-api
az deployment group create  -g rg --template-file main.bicep --parameters acrName=myacr appName=rag-api
</code></pre>
<ul><li><strong>Idempotent</strong>: chạy lại cùng một template không tạo bản sao, nó đưa tài nguyên về đúng trạng thái đã khai — giống nguyên lý điều hoà của Kubernetes ở mục 4.3.</li>
<li><strong>Phụ thuộc ngầm</strong>: tham chiếu <code>env.id</code> là đã nói với Bicep rằng app phải tạo sau environment. Chỉ dùng <code>dependsOn</code> khi thật sự không có tham chiếu nào.</li>
<li><code>existing</code> để <em>trỏ tới</em> tài nguyên đã có (registry, Key Vault) mà không quản lý vòng đời của nó — quên từ khoá này là template đi tạo/ghi đè tài nguyên của đội khác.</li>
<li><strong>Chế độ triển khai</strong>: mặc định là <code>Incremental</code> — tài nguyên không có trong template vẫn được giữ. <code>Complete</code> <strong>xoá</strong> mọi tài nguyên trong resource group không nằm trong template; đây là phương án nguy hiểm hay xuất hiện trong đề.</li>
<li><code>what-if</code> in ra danh sách tạo/sửa/xoá trước khi chạy thật — bắt buộc trước một lần triển khai <code>Complete</code>.</li>
<li>Nhớ khác biệt vỏ lệnh: Azure CLI dùng <code>--what-if</code>, Azure PowerShell dùng <code>New-AzResourceGroupDeployment -WhatIf</code>.</li>
<li>Secret <strong>không</strong> đặt trong file tham số: dùng <code>@secure()</code> cho param và lấy giá trị từ Key Vault (<code>getSecret</code> trong <code>keyVault</code> reference) hoặc từ biến của pipeline.</li>
<li>Gán quyền cũng khai bằng Bicep: một resource <code>Microsoft.Authorization/roleAssignments</code> gán <code>AcrPull</code> cho <code>app.identity.principalId</code> trên scope của registry — nhờ vậy cả chuỗi "identity + role + pull image" tái lập được bằng một lệnh.</li></ul>
<hr>
<h2 id="01-container/5-chon-dich-vu-compute-bang-quyet-dinh">7. Chọn dịch vụ compute — bảng quyết định</h2>
<div class="tablewrap"><table><thead><tr><th>Yêu cầu</th><th>Chọn</th></tr></thead><tbody><tr><td>Web app/API, muốn deployment slot, không cần orchestration</td><td><strong>App Service (container)</strong></td></tr><tr><td>Microservice/worker, scale-to-zero, event-driven, không muốn quản K8s</td><td><strong>Azure Container Apps</strong></td></tr><tr><td>Cần toàn quyền K8s: CRD, service mesh, GPU node pool tuỳ biến, Helm phức tạp</td><td><strong>AKS</strong></td></tr><tr><td>Job batch ngắn, chạy 1 lần / theo cron</td><td><strong>Container Apps Jobs</strong> hoặc <strong>AKS Job</strong></td></tr><tr><td>Hàm nhỏ, trigger theo event, pay-per-execution</td><td><strong>Azure Functions</strong> (Domain 3)</td></tr></tbody></table></div>
<hr>
<h2 id="01-container/6-checklist-on-domain-1">8. Checklist ôn Domain 1</h2>
<ul><li class="task" data-key="01-container:0"><input type="checkbox">Phân biệt SKU ACR và tính năng chỉ có ở Premium</li><li class="task" data-key="01-container:1"><input type="checkbox">Viết được <code>az acr build</code> và giải thích base image update trigger</li><li class="task" data-key="01-container:2"><input type="checkbox">Cấu hình App Service pull ACR bằng managed identity + <code>WEBSITES_PORT</code></li><li class="task" data-key="01-container:3"><input type="checkbox">Cú pháp Key Vault reference trong app settings</li><li class="task" data-key="01-container:4"><input type="checkbox">Hiểu revision, revision-scope vs application-scope, traffic splitting</li><li class="task" data-key="01-container:5"><input type="checkbox">Viết được KEDA scale rule <code>azure-servicebus</code> (metadata + auth)</li><li class="task" data-key="01-container:6"><input type="checkbox">Đọc-sửa được manifest Deployment/Service, biết requests vs limits, readiness vs liveness</li><li class="task" data-key="01-container:7"><input type="checkbox">Nhớ bảng chẩn đoán lỗi pod và các lệnh log/exec cho cả AKS và ACA</li><li class="task" data-key="01-container:deploy"><input type="checkbox">Tự dựng được chuỗi ACR → App Service / Container Apps / AKS pull image bằng managed identity</li></ul>
</section>
<section class="doc" id="02-data-services" data-title="2. Data services &amp; Vector" data-weight="25–30%" hidden>
<h1 id="02-data-services/domain-2-xay-dung-ai-solution-voi-azure-data-management-serv">Domain 2 — Xây dựng AI solution với Azure data management services (25–30%)</h1>
<p>Domain nặng điểm nhất. Trọng tâm: <strong>vector search + RAG</strong> trên ba dịch vụ: Cosmos DB for NoSQL, Azure Database for PostgreSQL, Azure Managed Redis.</p>
<h2 id="02-data-services/phan-a-azure-cosmos-db-for-nosql">1. Azure Cosmos DB for NoSQL</h2>
<h3 id="02-data-services/a1-ket-noi-bang-sdk-python">1.1 Kết nối bằng SDK (Python)</h3>
<pre><button class="copybtn">copy</button><code>from azure.cosmos import CosmosClient, PartitionKey
from azure.identity import DefaultAzureCredential

# Ưu tiên Entra ID (không dùng key) — cần role "Cosmos DB Built-in Data Contributor"
client = CosmosClient(url="https://mycosmos.documents.azure.com:443/",
                      credential=DefaultAzureCredential())

db = client.create_database_if_not_exists("ragdb")
container = db.create_container_if_not_exists(
    id="docs",
    partition_key=PartitionKey(path="/tenantId"),
    offer_throughput=400,
)</code></pre>
<p>Ba kiểu đọc, chi phí RU khác nhau <strong>rất nhiều</strong>:</p>
<pre><button class="copybtn">copy</button><code># 1) Point read — RẺ NHẤT (~1 RU cho item 1KB). Cần id + partition key.
item = container.read_item(item="doc-1", partition_key="tenant-a")

# 2) Query trong 1 partition (single-partition query)
items = container.query_items(
    query="SELECT * FROM c WHERE c.status = @s",
    parameters=[{"name": "@s", "value": "indexed"}],
    partition_key="tenant-a",
)

# 3) Cross-partition query — ĐẮT NHẤT, fan-out mọi partition
items = container.query_items(query="SELECT * FROM c WHERE c.status='indexed'",
                              enable_cross_partition_query=True)</code></pre>
<p>Đo RU thực tế:</p>
<pre><button class="copybtn">copy</button><code>container.query_items(...)
print(container.client_connection.last_response_headers["x-ms-request-charge"])</code></pre>
<h3 id="02-data-services/a2-toi-uu-ru-chu-de-chac-chan-co-trong-de">1.2 Tối ưu RU (chủ đề chắc chắn có trong đề)</h3>
<p><strong>Nguyên tắc:</strong></p>
<ul><li>RU = đơn vị chi phí gộp CPU + IOPS + memory. <strong>Point read 1KB = 1 RU</strong>; ghi tốn nhiều hơn đọc; query tốn theo số item quét + số index dùng.</li><li><strong>Partition key tốt</strong> = cardinality cao, phân bố đều, xuất hiện trong hầu hết filter → tránh <strong>hot partition</strong>. Ví dụ tốt: <code>/tenantId</code>, <code>/userId</code>, <code>/documentId</code>. Xấu: <code>/type</code>, <code>/status</code>, ngày tháng.</li><li>Giới hạn logical partition: <strong>20 GB</strong> và 10.000 RU/s → chọn key tránh chạm trần. Cần thì dùng <strong>synthetic key</strong> (<code>tenantId-yyyyMM</code>).</li><li><strong>Autoscale</strong> (từ 10% → 100% max RU/s) cho tải biến động; <strong>manual/standard</strong> cho tải ổn định (rẻ hơn ~ khi dùng đều).</li><li><strong>Serverless</strong> cho dev/test hoặc tải rời rạc.</li><li><strong>Bulk mode / TransactionalBatch</strong> khi nạp hàng loạt embeddings.</li><li>Bật <code>429</code> retry: SDK tự retry theo <code>x-ms-retry-after-ms</code>; tăng <code>max_retry_attempts</code> nếu ingest lớn.</li></ul>
<p><strong>Indexing policy</strong> — mặc định index <strong>mọi</strong> property (<code>/*</code>), tốn RU khi ghi. Tài liệu RAG có trường <code>embedding</code> dài 1536 số → <strong>bắt buộc exclude</strong> khỏi index thường:</p>
<pre><button class="copybtn">copy</button><code>{
  "indexingMode": "consistent",
  "automatic": true,
  "includedPaths": [ { "path": "/*" } ],
  "excludedPaths": [
    { "path": "/embedding/*" },
    { "path": "/rawText/*" },
    { "path": "/_etag/?" }
  ],
  "compositeIndexes": [
    [ { "path": "/tenantId", "order": "ascending" },
      { "path": "/createdAt", "order": "descending" } ]
  ],
  "vectorIndexes": [
    { "path": "/embedding", "type": "diskANN" }
  ]
}</code></pre>
<ul><li><strong>Composite index</strong>: bắt buộc cho <code>ORDER BY</code> nhiều trường, và giúp query filter nhiều trường rẻ hơn.</li><li><code>indexingMode</code>: <code>consistent</code> (mặc định) | <code>none</code> (tắt hẳn — dùng khi bulk ingest rồi bật lại).</li><li>Ghi ít index → <strong>write RU giảm</strong>; đọc filter theo trường không index → <strong>full scan, RU tăng vọt</strong>.</li></ul>
<p><strong>Consistency level và chi phí đọc:</strong></p>
<div class="tablewrap"><table><thead><tr><th>Level</th><th>Đặc điểm</th><th>RU đọc</th></tr></thead><tbody><tr><td><strong>Strong</strong></td><td>Đọc luôn thấy ghi mới nhất; không dùng được với multi-region write</td><td><strong>2×</strong></td></tr><tr><td><strong>Bounded staleness</strong></td><td>Trễ tối đa K version / T giây</td><td><strong>2×</strong></td></tr><tr><td><strong>Session</strong> (mặc định)</td><td>Read-your-own-writes trong 1 session (token)</td><td>1×</td></tr><tr><td><strong>Consistent prefix</strong></td><td>Không bao giờ thấy ghi lệch thứ tự</td><td>1×</td></tr><tr><td><strong>Eventual</strong></td><td>Yếu nhất, rẻ nhất, latency thấp nhất</td><td>1×</td></tr></tbody></table></div>
<blockquote><p>Bẫy: "giảm RU cho workload đọc nhiều, chấp nhận trễ nhỏ" → hạ từ Strong/Bounded xuống <strong>Session hoặc Eventual</strong>. Có thể override <strong>giảm</strong> mức mạnh ở từng request, không thể <strong>tăng</strong> cao hơn mức account.</p></blockquote>
<p>Tối ưu khác: bật <strong>Integrated cache</strong> (chỉ với dedicated gateway) cho point read/query lặp lại → <strong>0 RU</strong> khi cache hit.</p>
<h3 id="02-data-services/d2-partition-key-va-hot-partition">1.3 Thiết kế partition key — tránh hot partition</h3>
<p>Câu hỏi RU throttle mà "tổng capacity vẫn dư" gần như luôn là <strong>hot partition</strong>: RU chia đều cho các physical partition, một key nóng chỉ được dùng phần của nó.</p>
<ul><li>Chọn key có <strong>cardinality cao</strong> và <strong>trải đều cả đọc lẫn ghi</strong>: <code>/userId</code>, <code>/deviceId</code> tốt; <code>/date</code>, <code>/status</code>, <code>/tenantId</code> với một tenant khổng lồ là ứng viên hot partition kinh điển.</li>
<li>Ưu tiên key xuất hiện trong <strong>filter của truy vấn chính</strong> để query đi một partition (point read/single-partition query rẻ nhất); query thiếu partition key là <strong>cross-partition</strong> — chậm và đốt RU theo số partition.</li>
<li>Ghi dồn theo thời gian (telemetry, log): trộn thêm hậu tố — <strong>hierarchical partition key</strong> (<code>/tenantId</code> rồi <code>/deviceId</code>) hoặc key tổng hợp <code>deviceId_yyyyMM</code> — để một ngày/giờ không dồn vào một partition.</li>
<li>Chẩn đoán: metric <strong>Normalized RU consumption</strong> theo <code>PartitionKeyRangeId</code> trong Azure Monitor — một range chạm 100% trong khi các range khác nhàn rỗi = hot partition; sửa bằng đổi key (tạo container mới + change feed copy), không sửa được tại chỗ.</li>
<li>Giới hạn phải nhớ: một logical partition tối đa <strong>20 GB</strong>; vượt là lỗi ghi bất kể RU — key ít giá trị sẽ chạm trần này trước.</li></ul>
<h3 id="02-data-services/d9-hierarchical-partition-key">1.4 Hierarchical partition key — cách vượt trần 20 GB của logical partition</h3>
<p>Mục 1.3 đã nói trần cứng 20 GB cho một giá trị partition key. Hierarchical partition key (còn gọi <em>subpartitioning</em>) là lối thoát chính thức, và là câu hỏi thiết kế hay gặp trong kịch bản multi-tenant.</p>
<ul><li>Khai tối đa <strong>ba tầng</strong>, ví dụ <code>/TenantId</code> &gt; <code>/UserId</code> &gt; <code>/SessionId</code>; trong ARM/Bicep là <code>kind: MultiHash</code>, <code>version: 2</code>.</li>
<li>Khi có phân cấp, <strong>tiền tố khoá vượt được 20 GB và 10.000 RU/s</strong>: engine tách dữ liệu của cùng một <code>TenantId</code> ra nhiều physical partition khi physical vượt 50 GB.</li>
<li>Thêm <code>id</code> của item làm tầng cuối là mẹo chắc ăn để tổ hợp hai tầng đầu chắc chắn vượt được 20 GB (GUID có cardinality rất cao).</li></ul>
<table><thead><tr><th>Truy vấn lọc theo</th><th>Định tuyến</th></tr></thead><tbody>
<tr><td>Đủ cả ba tầng</td><td>Đúng <strong>một</strong> logical + physical partition</td></tr>
<tr><td>Tiền tố (<code>TenantId</code>, hoặc <code>TenantId</code> + <code>UserId</code>)</td><td>Cross-partition <strong>có đích</strong> — chỉ các physical partition chứa dữ liệu đó</td></tr>
<tr><td>Chỉ tầng giữa hoặc tầng cuối (<code>UserId</code> hoặc <code>SessionId</code>)</td><td><strong>Fan-out</strong> tới mọi physical partition</td></tr>
</tbody></table>
<ul><li>Giá trị tiền tố phải nằm trong <strong><code>WHERE</code></strong> mới được route hiệu quả — chỉ truyền qua <code>PartitionKeyBuilder</code> là chưa đủ, và truy vấn thiếu nó có thể tốn RU cao hơn hẳn.</li>
<li><strong>Cardinality tầng 1 phải cao.</strong> Cardinality thấp (5 tenant) khiến mọi thao tác ghi dồn vào một physical partition cho tới khi nó đạt 50 GB rồi mới split — trần throughput thực tế = số physical partition × 10k, nên với một physical thì chỉ 10k RU/s. Trường hợp này Microsoft khuyên dùng <strong>synthetic key</strong> chứ không phải hierarchical.</li>
<li><strong>Chỉ đặt được lúc tạo container, không đổi được về sau.</strong> Container đang chạy muốn chuyển thì tạo container mới rồi chuyển dữ liệu bằng container copy job (offline) hoặc change feed (live).</li>
<li>Giới hạn khác: chỉ có ở API for NoSQL (không có MongoDB/Cassandra); không gán permission theo tiền tố được — quyền chỉ đặt cho toàn bộ đường dẫn khoá.</li>
<li><em>Nguồn: <a href="https://learn.microsoft.com/azure/cosmos-db/hierarchical-partition-keys" target="_blank" rel="noopener">Microsoft Learn — Hierarchical partition keys</a> (bản 02/02/2026), đối chiếu ngày 18/09/2026.</em></li></ul>
<h3 id="02-data-services/d31-indexing-policy">1.5 Indexing policy</h3>
<ul><li>Mặc định index <strong>mọi đường dẫn</strong> — tiện nhưng trả RU ghi cho cả field không bao giờ query. Container ghi nặng: chuyển sang <code>includedPaths</code> chọn lọc + <code>excludedPaths: /*</code>, RU ghi giảm rõ rệt.</li>
<li><strong>Composite index</strong> bắt buộc cho <code>ORDER BY</code> nhiều cột và giúp filter+sort phối hợp — đề cho query <code>ORDER BY c.category, c.price</code> chậm thì đáp án là thêm composite index, không phải tăng RU.</li>
<li>Vector index ba loại: <code>flat</code> (chính xác tuyệt đối, ≤505 chiều), <code>quantizedFlat</code> (nén, nhanh hơn), <code>diskANN</code> (ANN cho tập lớn, rẻ RU nhất) — nhớ bảng chọn theo kích thước tập và độ chính xác.</li>
<li>Indexing mode <code>none</code> chỉ hợp container thuần key-value đọc bằng point read; TTL bật ở container (xóa nền, không tốn RU đọc).</li>
<li>Chi tiết đã đối chiếu docs (Learn, 8/2026): <code>quantizedFlat</code>/<code>diskANN</code> cần <strong>≥ 1.000 vector</strong> mới hoạt động (ít hơn thì full scan, RU cao hơn); khuyến nghị chọn <code>quantizedFlat</code> khi tập tìm kiếm ≤ 50k vector, <code>diskANN</code> khi lớn hơn; distance function hỗ trợ cosine (mặc định) / dotproduct / euclidean, số chiều mặc định 1536, dùng <code>float16</code> giảm 50% dung lượng lưu vector.</li>
<li>Hai bẫy vận hành: query vector <strong>luôn kèm <code>TOP N</code></strong> (thiếu là RU và độ trễ tăng vọt), và <strong>đã bật vector search trên container thì không tắt được</strong>; account shared throughput không hỗ trợ.</li></ul>
<h3 id="02-data-services/d32-consistency">1.6 Năm mức consistency — chọn theo câu chuyện của đề</h3>
<table><thead><tr><th>Mức</th><th>Cam kết</th><th>Nhận dạng trong đề</th></tr></thead><tbody>
<tr><td><strong>Strong</strong></td><td>Đọc luôn thấy bản ghi mới nhất</td><td>"không bao giờ đọc dữ liệu cũ" — chỉ trong 1 region ghi; RU đọc gấp đôi eventual</td></tr>
<tr><td><strong>Bounded staleness</strong></td><td>Trễ tối đa K version / T giây</td><td>"chấp nhận trễ nhưng phải có giới hạn đo được"</td></tr>
<tr><td><strong>Session</strong> (mặc định)</td><td>Trong một session: read-your-own-writes</td><td>"người dùng phải thấy ngay cái mình vừa ghi" — 90% đáp án</td></tr>
<tr><td><strong>Consistent prefix</strong></td><td>Không bao giờ thấy sai thứ tự ghi</td><td>"có thể cũ nhưng không được đảo thứ tự"</td></tr>
<tr><td><strong>Eventual</strong></td><td>Rồi sẽ hội tụ</td><td>"đếm like/view, rẻ nhất là được"</td></tr>
</tbody></table>
<ul><li>Session dựa trên <strong>session token</strong> — nhiều instance app muốn chia sẻ "phiên" phải truyền token cho nhau, không thì mỗi instance một phiên riêng.</li></ul>
<h3 id="02-data-services/a3-vector-search-trong-cosmos-db-for-nosql">1.7 Vector search trong Cosmos DB for NoSQL</h3>
<p>Các bước bắt buộc:</p>
<ol><li>Bật feature <strong>"Vector Search for NoSQL API"</strong> ở cấp account (Features).</li><li>Định nghĩa <strong>container vector embedding policy</strong> <em>khi tạo container</em>.</li><li>Thêm <strong>vector index</strong> trong indexing policy (cũng chỉ khai báo được lúc tạo container).</li><li>Query bằng hàm <strong><code>VectorDistance()</code></strong>.</li></ol>
<blockquote><p><strong>Bất biến — bẫy thi thường gặp:</strong> vector embedding policy và vector index <strong>không sửa được sau khi container đã tạo</strong>, và vector search <strong>không bật được trên container có sẵn</strong> → phải tạo container mới rồi copy dữ liệu sang. Các index khác (included/excluded path, composite) thì vẫn sửa được bình thường.</p></blockquote>
<pre><button class="copybtn">copy</button><code>vector_embedding_policy = {
    "vectorEmbeddings": [
        {
            "path": "/embedding",
            "dataType": "float32",          # float32 | int8 | uint8
            "distanceFunction": "cosine",   # cosine | dotproduct | euclidean
            "dimensions": 1536,             # khớp model embedding (vd text-embedding-3-small)
        }
    ]
}

indexing_policy = {
    "includedPaths": [{"path": "/*"}],
    "excludedPaths": [{"path": "/embedding/*"}],
    "vectorIndexes": [{"path": "/embedding", "type": "diskANN"}],
}

container = db.create_container_if_not_exists(
    id="docs",
    partition_key=PartitionKey(path="/tenantId"),
    indexing_policy=indexing_policy,
    vector_embedding_policy=vector_embedding_policy,
)</code></pre>
<p><strong>Kiểu vector index:</strong></p>
<div class="tablewrap"><table><thead><tr><th>Type</th><th>Đặc điểm</th></tr></thead><tbody><tr><td><code>flat</code></td><td>Lưu trong index thường, chính xác tuyệt đối, <strong>≤ 505 chiều</strong>, dataset nhỏ</td></tr><tr><td><code>quantizedFlat</code></td><td>Nén (quantize) rồi brute-force, nhanh hơn flat, ≤ 4096 chiều</td></tr><tr><td><code>diskANN</code></td><td>ANN dựa trên graph, <strong>độ trễ thấp nhất ở quy mô lớn</strong>, ≤ 4096 chiều — mặc định nên chọn</td></tr></tbody></table></div>
<p><code>quantizedFlat</code> và <code>diskANN</code> cần <strong>ít nhất 1.000 vector</strong> được index để phép quantization đủ chính xác — dataset nhỏ hơn thì <code>flat</code> (brute-force, recall 100%) lại là lựa chọn đúng.</p>
<p><strong>Hai núm tinh chỉnh độ chính xác của ANN index</strong> — dùng khi đề nói "kết quả vector search không đủ liên quan":</p>
<div class="tablewrap"><table><thead><tr><th>Tham số build index</th><th>Áp dụng cho</th><th>Miền giá trị</th><th>Tăng lên thì</th></tr></thead><tbody><tr><td><code>quantizationByteSize</code></td><td><code>quantizedFlat</code> <em>và</em> <code>diskANN</code></td><td>min 1, mặc định hệ thống tự chọn, <strong>max 512</strong></td><td>Nén vector ít hơn → tìm chính xác hơn, đổi lại <strong>RU và độ trễ query cao hơn</strong></td></tr><tr><td><code>indexingSearchListSize</code></td><td><strong>chỉ <code>diskANN</code></strong></td><td>min 10, <strong>mặc định 100</strong>, max 500</td><td>Duyệt nhiều vector hơn lúc dựng graph → chính xác hơn, đổi lại <strong>build index lâu hơn, ingest chậm hơn</strong></td></tr></tbody></table></div>
<p>Hai thứ <strong>không</strong> cứu được recall dù đề hay đưa vào làm distractor: <strong>consistency level</strong> (chỉ nói về độ mới của dữ liệu đọc được) và <strong>composite index</strong> (phục vụ <code>ORDER BY</code>/filter trên thuộc tính thường, không đụng tới <code>VectorDistance</code>).</p>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy" target="_blank" rel="noopener">Indexing policies in Azure Cosmos DB</a> và <a href="https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/vector-search" target="_blank" rel="noopener">Vector search in Azure Cosmos DB for NoSQL</a> trên Microsoft Learn, đọc ngày 15/09/2026.</em></p>
<p><strong>Truy vấn semantic search + metadata filter (đúng chuẩn RAG):</strong></p>
<pre><button class="copybtn">copy</button><code>SELECT TOP 5
       c.id, c.title, c.chunk,
       VectorDistance(c.embedding, @queryVector) AS similarityScore
FROM   c
WHERE  c.tenantId = @tenant AND c.lang = 'vi'
ORDER BY VectorDistance(c.embedding, @queryVector)</code></pre>
<p>Quy tắc quan trọng:</p>
<ul><li>Phải có <strong><code>ORDER BY VectorDistance(...)</code></strong> thì vector index mới được dùng. Nếu chỉ để trong <code>SELECT</code>/<code>WHERE</code> → brute force, RU cao.</li><li>Lọc theo ngưỡng được phép viết ngay trong query: <code>WHERE VectorDistance(c.embedding, @v) &gt; 0.7</code>, vẫn kèm <code>ORDER BY VectorDistance(...)</code> và <code>TOP N</code> (đây là mẫu của khóa AI-200). Ngưỡng cosine: 0,7 là rất liên quan, 0,5 là liên quan vừa. Không bao giờ bỏ <code>TOP N</code>.</li><li><code>TOP N</code> bắt buộc để giới hạn kết quả.</li><li>Đặt filter metadata (<code>tenantId</code>, <code>lang</code>, <code>docType</code>) vào <code>WHERE</code> → <strong>pre-filter</strong>, giảm RU đáng kể.</li><li>Có <code>VectorDistance(v1, v2, false, {'distanceFunction':'cosine','dataType':'float32'})</code> để override khi cần.</li><li><strong>Full-text &amp; hybrid search</strong>: Cosmos DB NoSQL còn có <code>FullTextScore</code> (BM25) và <strong><code>RRF()</code></strong> (Reciprocal Rank Fusion) để kết hợp keyword + semantic — xem A3b ngay dưới.</li></ul>
<p>Pipeline RAG điển hình với Cosmos:</p>
<pre><button class="copybtn">copy</button><code>q_vec = aoai.embeddings.create(model="text-embedding-3-small", input=question).data[0].embedding
results = container.query_items(
    query="""SELECT TOP 5 c.chunk, VectorDistance(c.embedding, @v) AS score
             FROM c WHERE c.tenantId=@t
             ORDER BY VectorDistance(c.embedding, @v)""",
    parameters=[{"name": "@v", "value": q_vec}, {"name": "@t", "value": tenant}],
    partition_key=tenant,
)
context = "\\n\\n".join(r["chunk"] for r in results)
answer = aoai.chat.completions.create(model="gpt-4o", messages=[
    {"role": "system", "content": f"Chỉ trả lời dựa trên ngữ cảnh:\\n{context}"},
    {"role": "user", "content": question}])</code></pre>
<h3 id="02-data-services/d10-vector-index-cosmos">1.8 Chọn chỉ mục vector trong Cosmos DB — flat, quantizedFlat hay diskANN</h3>
<p>Mục 1.7 đã dựng được vector search. Mục này là phần "chọn loại index nào", chỗ đề hay ra một kịch bản kèm con số rồi bắt chọn.</p>
<table><thead><tr><th>Loại</th><th>Trần chiều</th><th>Cách tìm</th><th>Hợp với</th></tr></thead><tbody>
<tr><td><code>flat</code></td><td><strong>505</strong></td><td>Brute-force trên vector gốc, recall <strong>100%</strong></td><td>Tập nhỏ, hoặc khi bắt buộc chính xác tuyệt đối</td></tr>
<tr><td><code>quantizedFlat</code></td><td><strong>4096</strong></td><td>Brute-force trên vector đã nén — nhanh hơn, rẻ RU hơn, mất một chút độ chính xác do lượng tử hoá</td><td>Phạm vi tìm <strong>≤ 50.000</strong> vector (thường nhờ filter/partition key)</td></tr>
<tr><td><code>diskANN</code></td><td><strong>4096</strong></td><td>Approximate (ANN), độ trễ và RU thấp nhất</td><td>Phạm vi tìm <strong>&gt; 50.000</strong> vector</td></tr>
</tbody></table>
<ul><li><strong>Dưới 1.000 vector thì quantizedFlat và diskANN không hoạt động như mong đợi</strong>: quá trình lượng tử hoá cần tối thiểu 1.000 vector, ít hơn thì engine quay về full scan và RU <em>cao hơn</em>. Đề tả "đã tạo diskANN mà truy vấn vẫn đắt trên container nhỏ" là hỏi chỗ này.</li>
<li>Vector 1.536 chiều <strong>không</strong> dùng được <code>flat</code> (trần 505) — nhầm lẫn này hay xuất hiện trong phương án sai.</li>
<li><code>dataType</code> nhận <code>float32</code> (mặc định), <code>float16</code>, <code>int8</code>, <code>uint8</code>; chuyển sang <code>float16</code> giảm <strong>50%</strong> dung lượng lưu vector, đổi lại mất chút độ chính xác.</li>
<li><code>quantizerType</code>: <code>product</code> (mặc định) hoặc <code>spherical</code> — <code>spherical</code> build nhanh hơn và recall ổn định hơn với embedding rất nhiều chiều.</li>
<li><strong>diskANN là approximate nên kết quả không tất định</strong>: cùng một truy vấn trên container không đổi vẫn có thể ra thứ tự hơi khác giữa các lần chạy, vì mỗi replica tự dựng index riêng và replica nào cũng phục vụ được truy vấn. Cần kết quả lặp lại y hệt thì phải dùng <code>flat</code>.</li>
<li>Chỉnh recall theo <em>từng truy vấn</em> bằng tuỳ chọn <code>searchListSizeMultiplier</code> của <code>VectorDistance</code> — đổi độ trễ và RU lấy recall, tương tự núm <code>hnsw.ef_search</code> bên pgvector.</li>
<li><strong>Vector policy — hai nguồn chính thức đang nói khác nhau:</strong> docs sản phẩm (vector search, đọc 26/09/2026) cho thêm/bớt đường dẫn vector trên container đã có; khóa AI-200T00 (unit "Tune vector indexes and embeddings") vẫn ghi vector policy không sửa được sau khi tạo container. Chỗ cả hai cùng đồng ý: <strong>đổi cấu hình của một đường dẫn đã có</strong> (dimensions, dataType, distanceFunction — ví dụ đổi embedding model) thì không sửa tại chỗ được → đáp án an toàn là tạo container mới rồi migrate.</li>
<li>Luôn có <code>TOP N</code> trong truy vấn vector — thiếu nó là engine cố trả về rất nhiều kết quả, RU và độ trễ tăng vọt.</li>
<li>Hai giới hạn hay quên: không dùng được trên account <em>shared throughput</em>, và bật vector search trên container rồi thì <strong>không tắt được</strong>.</li>
<li><em>Nguồn: <a href="https://learn.microsoft.com/azure/cosmos-db/nosql/vector-search" target="_blank" rel="noopener">Microsoft Learn — Integrated vector store (Cosmos DB for NoSQL)</a>, đối chiếu ngày 18/09/2026.</em></li></ul>
<h3 id="02-data-services/a3b-full-text-va-hybrid-search">1.9 Full-text search và hybrid search (RRF)</h3>
<p>Chỉ vector search thôi thì trượt các truy vấn có <strong>mã sản phẩm, tên riêng, thuật ngữ hiếm</strong> — đó là lúc cần hybrid: chạy BM25 và vector rồi hợp nhất thứ hạng bằng <strong>Reciprocal Rank Fusion</strong>. Cosmos DB làm việc này <em>trong một câu query</em>, không cần merge ở phía ứng dụng.</p>
<p>Container phải được tạo với <strong>đủ 4 thứ</strong>: vector policy, full text policy, vector index, full text index.</p>
<pre><button class="copybtn">copy</button><code>full_text_policy = {
    "defaultLanguage": "en-US",
    "fullTextPaths": [{"path": "/chunk", "language": "en-US"}],
}

indexing_policy = {
    "indexingMode": "consistent",
    "automatic": True,
    "includedPaths": [{"path": "/*"}],
    "excludedPaths": [{"path": "/embedding/*"}, {"path": "/\\"_etag\\"/?"}],
    "fullTextIndexes": [{"path": "/chunk"}],
    "vectorIndexes":   [{"path": "/embedding", "type": "diskANN"}],
}</code></pre>
<p><strong>Truy vấn hybrid</strong> — <code>ORDER BY RANK RRF(...)</code>:</p>
<pre><button class="copybtn">copy</button><code>-- k kết quả liên quan nhất, hợp nhất vector + BM25
SELECT TOP 10 c.id, c.chunk
FROM   c
ORDER BY RANK RRF(
           VectorDistance(c.embedding, @queryVector),
           FullTextScore(c.chunk, "pump", "seal", "leak"))

-- Weighted RRF: mảng trọng số là tham số CUỐI CÙNG.
-- [2, 1] = coi vector quan trọng gấp đôi BM25 (thứ tự trùng thứ tự hàm ở trên)
SELECT TOP 10 c.id, c.chunk
FROM   c
ORDER BY RANK RRF(
           VectorDistance(c.embedding, @queryVector),
           FullTextScore(c.chunk, "pump", "seal"),
           [2, 1])</code></pre>
<p>Điểm hay bị hỏi:</p>
<ul><li><code>FullTextScore(path, "term1", "term2", …)</code> — các từ khoá là <strong>tham số rời</strong>, không phải một mảng.</li><li>Chỉ dùng <strong>full-text search thuần</strong> thì xếp hạng bằng <code>ORDER BY RANK FullTextScore(...)</code>; lọc có/không chứa từ khoá thì dùng <code>FullTextContains</code> / <code>FullTextContainsAll</code> / <code>FullTextContainsAny</code> trong <code>WHERE</code>.</li><li><code>ORDER BY RANK</code> là mệnh đề xếp hạng riêng — <strong>không trộn chung với <code>ORDER BY</code> thường</strong>.</li><li>Thiếu full text index thì query hybrid không chạy; thiếu vector index thì rơi về brute-force, RU tăng vọt.</li><li>Vẫn nên pre-filter tenant/ngôn ngữ bằng <code>WHERE</code> để giảm RU.</li></ul>
<h3 id="02-data-services/a4-change-feed">1.10 Change feed</h3>
<p>Change feed = <strong>log các thay đổi theo thứ tự</strong>, trong từng logical partition, <strong>bền vững</strong>. Ứng dụng AI: item mới → sinh embedding → cập nhật index / gửi message.</p>
<p>Hai chế độ:</p>
<div class="tablewrap"><table><thead><tr><th>Mode</th><th>Nội dung</th></tr></thead><tbody><tr><td><strong>Latest version</strong> (mặc định)</td><td>Chỉ bản mới nhất của item bị insert/update. <strong>Không có delete</strong> (dùng soft-delete + TTL để bắt được)</td></tr><tr><td><strong>All versions and deletes</strong></td><td>Mọi thay đổi gồm insert/update/<strong>delete</strong>, có bản trước và sau</td></tr></tbody></table></div>
<p>Ba cách tiêu thụ:</p>
<ol><li><strong>Change Feed Processor</strong> (SDK, cần <strong>lease container</strong> để lưu checkpoint &amp; phân phối partition cho nhiều instance).</li><li><strong>Azure Functions Cosmos DB trigger</strong> — bản chất là CFP được host sẵn, đơn giản nhất.</li><li><strong>Pull model</strong> — tự kiểm soát tiến độ, dùng cho batch/migration.</li></ol>
<p>Functions trigger (Python v2) — cách hay được hỏi nhất:</p>
<pre><button class="copybtn">copy</button><code>import azure.functions as func
app = func.FunctionApp()

@app.cosmos_db_trigger(
    arg_name="documents",
    connection="COSMOS_CONN",
    database_name="ragdb",
    container_name="docs",
    lease_container_name="leases",
    create_lease_container_if_not_exists=True,
    start_from_beginning=False,
    max_items_per_invocation=100,
)
def on_change(documents: func.DocumentList):
    for doc in documents:
        embedding = embed(doc["chunk"])       # gọi Azure OpenAI
        upsert_vector(doc["id"], embedding)   # ghi ngược lại / sang vector store</code></pre>
<p>Điểm dễ mất điểm:</p>
<ul><li><strong>Lease container bắt buộc</strong>, phải có partition key <code>/id</code>, và <strong>mỗi consumer group cần lease riêng</strong> (hoặc <code>LeasePrefix</code> khác nhau) — nếu 2 xử lý khác nhau dùng chung lease sẽ "ăn" mất thay đổi của nhau.</li><li>Change feed <strong>at-least-once</strong> → xử lý phải <strong>idempotent</strong>.</li><li>Muốn scale: tăng số instance, số physical partition quyết định mức song song tối đa.</li></ul>
<h3 id="02-data-services/d7-duoi-nap-capo-ru-partition-change-feed">1.11 Dưới nắp capo: RU, partition split và change feed</h3>
<ul><li><strong>RU là đơn vị quy đổi tài nguyên</strong> (CPU + IO + memory của một thao tác). Mốc neo: point read 1 KB = <strong>1 RU</strong>; ghi 1 KB ≈ <strong>5–10 RU</strong> (tùy consistency và lượng index) — vì ghi phải cập nhật <em>mọi</em> đường dẫn được index (đây là lý do tỉa indexing policy giảm RU ghi, và tài liệu lớn tốn RU hơn tuyến tính).</li>
<li>Đọc ở strong/bounded staleness tốn ~2× vì phải <strong>chờ/đối chiếu quorum replica</strong> thay vì trả từ một replica gần nhất — cái giá của việc "không bao giờ đọc cũ" nằm ở tầng replication chứ không phải phép màu.</li>
<li><strong>Physical partition</strong> chứa nhiều logical partition, trần ~<strong>50 GB và 10.000 RU/s</strong> mỗi physical. Vượt là engine <strong>split</strong> tự động: chia dải giá trị hash của partition key ra hai physical mới. Suy ra hai hệ quả đề hay hỏi: RU provision bị <em>chia đều</em> cho các physical (10k RU trên 5 physical = mỗi cái 2k — key nóng chỉ được 2k), và split chỉ giúp khi giá trị key <em>đa dạng</em> — một logical partition (một giá trị key) không bao giờ tách được, nên trần 20 GB logical là trần cứng.</li>
<li><strong>Change feed</strong> thực chất là đọc tuần tự log thay đổi <em>theo từng partition key range</em>: processor chia các range cho các worker qua <strong>lease container</strong> (mỗi lease = một range + checkpoint continuation token). Vì vậy scale consumer = số range, thứ tự chỉ bảo đảm <em>trong một partition key</em>, và xóa (delete) mặc định không xuất hiện trong feed (dùng TTL soft-delete hoặc full-fidelity mode).</li></ul>
<h3 id="02-data-services/khoa-resource-model-throughput">1.12 Mô hình tài nguyên, throughput tối thiểu và system property</h3>
<p>Các con số ở tầng account/database/container và các thuộc tính hệ thống <code>_etag</code>/<code>_ts</code> là nền của mọi câu hỏi "cấu hình bao nhiêu RU", "vì sao update bị ghi đè". Tài liệu hiện có mới nói tới partition key và RU, chưa có phần này.</p>
<ul><li>Thứ bậc: <strong>account → database → container → item</strong>. Account cho một DNS endpoint dạng <code>https://&lt;account&gt;.documents.azure.com:443/</code>; default consistency, geo-replication và network access đặt ở tầng account.</li>
<li>Mặc định một account chứa tối đa <strong>500 database và container cộng lại</strong>. Database là namespace logic, đồng thời là phạm vi của <strong>shared throughput</strong>.</li>
<li>Container là đơn vị scale, không có schema cố định (item trong cùng container có thể khác cấu trúc). Partition key path được phép lồng nhau (<code>/metadata/region</code>) và <strong>không đổi được</strong> sau khi tạo container.</li></ul>
<div class="tablewrap"><table><thead><tr><th>Cấu hình throughput</th><th>Mức tối thiểu</th><th>Ghi chú</th></tr></thead><tbody>
<tr><td>Manual, dedicated cho container</td><td><strong>400 RU/s</strong></td><td>Hiệu năng ổn định cho workload quan trọng</td></tr>
<tr><td>Manual, shared ở database</td><td><strong>400 RU/s</strong></td><td>Chia cho tối đa <strong>25 container</strong></td></tr>
<tr><td>Autoscale (container hoặc database shared)</td><td>Max RU/s thấp nhất là <strong>1.000</strong></td><td>Chạy trong khoảng <strong>10%–100%</strong> của max</td></tr>
</tbody></table></div>
<ul><li>Mốc chi phí theo khóa: point read 1 KB ≈ <strong>1 RU</strong>; ghi 1 KB ≈ <strong>5–10 RU</strong>, tùy consistency và lượng index; query lọc đơn giản cỡ 3–5 RU, còn aggregate quét hàng nghìn item có thể tới hàng trăm RU.</li>
<li>Năm yếu tố đẩy RU lên: kích thước item, indexing policy (index nhiều thì ghi đắt hơn nhưng query rẻ hơn), consistency Strong/Bounded, độ phức tạp của query và cross-partition.</li></ul>
<div class="tablewrap"><table><thead><tr><th>System property</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>Bắt buộc, <strong>SDK không tự sinh</strong>. Duy nhất trong một logical partition; cặp <code>id</code> + partition key định danh item trong cả container</td></tr>
<tr><td><code>_etag</code></td><td>Entity tag, đổi mỗi lần item thay đổi, dùng cho optimistic concurrency</td></tr>
<tr><td><code>_ts</code></td><td>Unix timestamp (<strong>giây</strong>) của lần sửa cuối</td></tr>
<tr><td><code>_rid</code> / <code>_self</code> / <code>_attachments</code></td><td>Resource id nội bộ / URI của resource / attachment (tính năng legacy)</td></tr>
</tbody></table></div>
<blockquote><p><strong>Bẫy thi:</strong> thêm item thiếu <code>id</code> thì lỗi, không có chuyện tự sinh GUID như nhiều ORM. Partition key cũng phải có mặt trong <em>mọi</em> document. Ví dụ key xấu trong khóa: <code>isActive</code> (boolean, chỉ 2 giá trị) và key theo ngày (dồn tải vào giờ cao điểm).</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/build-query-azure-cosmos-db/2-explore-cosmos-db-nosql" target="_blank" rel="noopener">Build queries for Azure Cosmos DB for NoSQL — Explore Azure Cosmos DB for NoSQL</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/khoa-crud-sdk-etag">1.13 CRUD bằng SDK Python — create, upsert, replace và optimistic concurrency bằng ETag</h3>
<p>Đề hay hỏi "gọi hàm nào để ghi không bị trùng", "làm sao chặn lost update". Tài liệu hiện có đã có point read và query, nhưng chưa có ngữ nghĩa của từng hàm ghi, các exception và <code>if_match</code>.</p>
<div class="tablewrap"><table><thead><tr><th>Hàm</th><th>Item đã tồn tại</th><th>Item chưa tồn tại</th><th>Dùng khi</th></tr></thead><tbody>
<tr><td><code>create_item</code></td><td>Lỗi <strong>409</strong> → <code>CosmosResourceExistsError</code></td><td>Tạo mới</td><td>Muốn bắt trùng lặp</td></tr>
<tr><td><code>upsert_item</code></td><td>Thay thế</td><td>Tạo mới</td><td>Cache kết quả model, đồng bộ từ nguồn ngoài, ghi lại embedding</td></tr>
<tr><td><code>replace_item</code></td><td>Thay thế (hỗ trợ <code>if_match</code>)</td><td>Lỗi</td><td>Cập nhật có kiểm tra xung đột</td></tr>
<tr><td><code>read_item</code> / <code>delete_item</code></td><td>Đọc / xóa (cần <code>id</code> + partition key)</td><td><code>CosmosResourceNotFoundError</code></td><td>Point read rẻ nhất; delete vẫn tốn RU</td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code>from azure.cosmos import exceptions

item = container.read_item(item="product-12345", partition_key="electronics")
item["price"] = 149.99
try:
    container.replace_item(item=item["id"], body=item,
                           if_match=item["_etag"])   # optimistic concurrency
except exceptions.CosmosAccessConditionFailedError:
    print("Item was modified by another process")</code></pre>
<ul><li><code>create_database</code>/<code>create_container</code> <strong>báo lỗi nếu đã tồn tại</strong>; bản <code>*_if_not_exists</code> thì idempotent, hợp với code chạy lúc khởi động.</li>
<li>Autoscale khi tạo container: <code>offer_throughput=ThroughputProperties(auto_scale_max_throughput=4000)</code> (chạy 400–4000 RU/s). Bỏ <code>offer_throughput</code> nếu database dùng shared throughput.</li>
<li><code>get_database_client()</code>/<code>get_container_client()</code> <strong>không gọi mạng và không kiểm tra resource có tồn tại</strong>, chỉ tạo handle. Container không tồn tại thì lỗi chỉ xuất hiện khi thao tác đầu tiên chạy.</li>
<li><strong>Dùng một <code>CosmosClient</code> duy nhất (singleton)</strong> cho cả vòng đời app: client giữ connection pool và cache thông tin routing. Tạo client mới cho mỗi request làm tăng latency và có thể cạn connection. Trong FastAPI/Flask thì tạo lúc startup, giữ sẵn container client.</li>
<li>Ngoài <code>x-ms-request-charge</code>, nên log <strong><code>x-ms-activity-id</code></strong>: mã định danh của từng request, cần khi mở ticket với Azure support.</li>
<li>Hai kiểu xác thực: account key (primary và secondary để xoay key không downtime, nhưng key có toàn quyền) và Entra ID qua <code>DefaultAzureCredential</code>. Entra ID cho phép gán RBAC ở cấp account, database hoặc container.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "hai tiến trình cùng cập nhật một document, cần tránh ghi đè" → <code>replace_item(..., if_match=item["_etag"])</code>, không phải tăng consistency lên Strong. Lỗi trả về khi etag lệch là <code>CosmosAccessConditionFailedError</code>, khác với <code>CosmosResourceExistsError</code> (409) của <code>create_item</code>.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/build-query-azure-cosmos-db/3-implement-cosmos-db-sdk" target="_blank" rel="noopener">Build queries for Azure Cosmos DB for NoSQL — Implement the Azure Cosmos DB for NoSQL SDK</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/khoa-sql-query-nosql">1.14 Ngôn ngữ truy vấn NoSQL — projection, <code>VALUE</code>, mảng, aggregate và phân trang</h3>
<p>Tài liệu hiện có mới có <code>SELECT … WHERE</code> có tham số. Mục này bổ sung các cú pháp khóa học dạy để lấy dữ liệu cho app AI, kèm cách phân trang và cộng RU theo từng trang.</p>
<div class="tablewrap"><table><thead><tr><th>Cú pháp</th><th>Ví dụ</th><th>Ghi nhớ</th></tr></thead><tbody>
<tr><td>Projection</td><td><code>SELECT p.id, p.name FROM products p</code></td><td>Ít dữ liệu trả về hơn, có thể giảm RU</td></tr>
<tr><td>Lọc</td><td><code>IN (…)</code>, <code>NOT IN</code>, <code>BETWEEN 50 AND 200</code>, <code>CONTAINS</code>/<code>STARTSWITH</code>/<code>ENDSWITH</code></td><td>So sánh chuỗi <strong>phân biệt hoa thường</strong> mặc định; dùng <code>UPPER</code>/<code>LOWER</code> để so không phân biệt</td></tr>
<tr><td><code>VALUE</code></td><td><code>SELECT VALUE p.name …</code> → <code>["Smart Speaker", …]</code></td><td>Bỏ lớp object bao ngoài; <code>SELECT VALUE { "productId": p.id, … }</code> để đổi tên hoặc tính trường mới</td></tr>
<tr><td>Aggregate</td><td><code>SELECT VALUE COUNT(1) …</code>; <code>COUNT/SUM/AVG/MIN/MAX</code></td><td>Quét mọi item khớp nên đắt, phải lọc trước</td></tr>
<tr><td>Mảng</td><td><code>WHERE ARRAY_CONTAINS(p.features, "wifi")</code></td><td>Kiểm tra phần tử có nằm trong mảng</td></tr>
<tr><td><code>JOIN … IN</code></td><td><code>SELECT p.name, f FROM products p JOIN f IN p.features WHERE f IN ("wifi","bluetooth")</code></td><td>Là self-join trong một item: làm phẳng mảng (tích chéo item × phần tử), <strong>không</strong> join giữa hai container</td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code>it = container.query_items(
    query="SELECT * FROM products p WHERE p.categoryId = @category ORDER BY p.price",
    parameters=[{"name": "@category", "value": "electronics"}],
    partition_key="electronics",   # single-partition
    max_item_count=50)             # kích thước trang

total_rus = 0
for page in it.by_page():
    headers = container.client_connection.last_response_headers or {}
    total_rus += float(headers.get("x-ms-request-charge", 0))   # RU tính theo TỪNG trang
    for item in page:
        process_item(item)</code></pre>
<ul><li>Iterator tự phân trang bằng <strong>continuation token</strong>. Web API muốn cho client lấy trang sau thì trả token này ra ngoài và giữ token cẩn thận, vì nó chứa trạng thái nội bộ của query.</li>
<li>Tham số <code>@name</code> vừa chặn injection vừa cho phép <strong>cache query plan</strong>. Với vector, truyền mảng 1.536 số qua <code>@queryVector</code> thay vì nối vào chuỗi query.</li>
<li>Muốn query đi một partition: truyền <code>partition_key=</code> hoặc có partition key trong <code>WHERE</code>. Query không có partition key thì cần <code>enable_cross_partition_query=True</code>.</li>
<li><code>ORDER BY</code> làm query tốn thêm, nhất là cross-partition vì phải merge kết quả đã sắp xếp từ nhiều partition.</li>
<li>Năm cách giảm RU của query: lọc sớm, chỉ project trường cần, dùng partition key, giới hạn bằng <code>TOP</code>, và có indexing policy khớp với query.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> đo RU của một query nhiều trang mà chỉ đọc header sau lần gọi đầu là sai: mỗi trang là một round trip có charge riêng, phải cộng dồn trong vòng <code>by_page()</code>.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/build-query-azure-cosmos-db/4-query-cosmos-db-nosql" target="_blank" rel="noopener">Build queries for Azure Cosmos DB for NoSQL — Query Azure Cosmos DB for NoSQL</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/khoa-vectordistance-diem-loc">1.15 Đọc điểm <code>VectorDistance</code>, brute-force, ngưỡng, pre/post-filter và multi-vector</h3>
<p>Các mục 1.7–1.9 đã có cú pháp và cách chọn index. Mục này bổ sung phần khóa học nhấn mạnh: điểm tăng hay giảm theo từng distance function, khi nào ép brute-force, chọn <code>TOP N</code> bao nhiêu, và vì sao filter có thể trả về ít kết quả hơn <code>TOP N</code>.</p>
<div class="tablewrap"><table><thead><tr><th>distanceFunction</th><th>Miền điểm</th><th>Giống nhau hơn khi</th><th>Dùng khi</th></tr></thead><tbody>
<tr><td><code>cosine</code> (mặc định)</td><td>-1 → +1 (thực tế phần lớn 0–1)</td><td>Điểm <strong>cao hơn</strong></td><td>Text embedding, embedding Azure OpenAI (đã chuẩn hóa)</td></tr>
<tr><td><code>dotproduct</code></td><td>Tính cả hướng và độ lớn</td><td>Điểm cao hơn</td><td>Với vector đã chuẩn hóa thì cho kết quả <strong>giống hệt</strong> cosine và nhanh hơn một chút</td></tr>
<tr><td><code>euclidean</code></td><td>0 (trùng) → +∞</td><td>Điểm <strong>thấp hơn</strong></td><td>Trường hợp chuyên biệt khi độ lớn có ý nghĩa; ít dùng cho text</td></tr>
</tbody></table></div>
<ul><li>Chữ ký hàm: <code>VectorDistance(vector_expr_1, vector_expr_2, bool_expr, obj_expr)</code>. Tham số thứ ba là <code>true</code> thì <strong>ép brute-force</strong> (mặc định <code>false</code>): recall 100% nhưng so với mọi document, RU và latency cao. Chỉ dùng cho evaluation/test hoặc dataset nhỏ.</li>
<li>Query vector phải sinh bằng <strong>đúng model</strong> đã dùng cho document. Hai model khác nhau tạo ra hai không gian vector không so được với nhau. Số chiều theo khóa: <code>text-embedding-ada-002</code> = 1.536, <code>text-embedding-3-large</code> = 3.072.</li>
<li>Ngưỡng theo khóa: cosine 0,7–0,9 là rất giống, 0,5–0,7 là giống vừa. Khóa học lọc ngưỡng ngay trong câu query: <code>WHERE VectorDistance(c.embedding, @queryVector) &gt; 0.7</code>, kèm <code>ORDER BY</code> và <code>TOP</code>.</li>
<li>Chọn <code>TOP N</code>: <strong>RAG 5–10</strong> (thêm context không chắc làm câu trả lời tốt hơn nhưng chắc chắn tốn token hơn); search cho người dùng 10–20 kèm phân trang; recommendation 3–5.</li>
<li><strong>Pre-filter và post-filter</strong>: optimizer tự quyết dựa vào độ chọn lọc ước tính của filter. Pre-filter thu hẹp tập trước khi so vector (lọc 1.000/100.000 document thì chỉ so 1.000). Post-filter giữ chất lượng xếp hạng nhưng <strong>có thể trả ít hơn N</strong>, ví dụ xin 10 mà nhận 3 vì 7 kết quả đầu bị filter loại. Thuộc tính dùng để lọc phải được index.</li>
<li>Lọc theo quyền truy cập: <code>WHERE ARRAY_CONTAINS(c.accessGroups, @userGroup)</code>. Lọc theo partition key: dùng <code>WHERE</code> để chọn dữ liệu và truyền thêm <code>partition_key=</code> để route vào đúng một partition.</li>
<li><strong>Nhiều vector trong một document</strong> (ví dụ <code>/titleEmbedding</code> và <code>/contentEmbedding</code>): khai nhiều entry trong <code>vectorEmbeddings</code>, mỗi entry có dimensions và distanceFunction riêng. Kết hợp bằng <code>ORDER BY RANK RRF(VectorDistance(c.titleEmbedding, @v), VectorDistance(c.contentEmbedding, @v))</code>.</li>
<li>Chi phí: hybrid (<code>VectorDistance</code> + <code>FullTextScore</code>) đắt hơn vector thuần, nên chỉ dùng khi thật sự có ích. Filter khớp gần hết document thì gần như không giúp gì. Phải test với khối lượng dữ liệu giống production.</li>
<li>Chọn <code>dataType</code>: <code>float32</code> là điểm khởi đầu; <code>float16</code> giảm 50% dung lượng, hầu như không ảnh hưởng chất lượng; <code>int8</code>/<code>uint8</code> chỉ dùng cho embedding đã quantize, cần đánh giá độ chính xác cẩn thận.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> với <code>euclidean</code> thì điểm nhỏ hơn mới là giống hơn, ngược với cosine. Câu hỏi "vì sao query có filter chỉ trả 3 kết quả dù <code>TOP 10</code>" đang hỏi về <strong>post-filtering</strong>, không phải thiếu RU.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-cosmos-db/2-store-retrieve-embeddings" target="_blank" rel="noopener">Store and retrieve embeddings</a>, <a href="https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-cosmos-db/3-execute-vector-similarity-queries" target="_blank" rel="noopener">Execute vector similarity queries</a>, <a href="https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-cosmos-db/4-combine-vector-metadata-filtering" target="_blank" rel="noopener">Combine vector similarity results with metadata filtering</a> (module Implement vector search on Azure Cosmos DB for NoSQL, khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/khoa-change-feed-embedding-refresh">1.16 Change feed làm mới embedding — push và pull, refresh có chọn lọc, tải cao</h3>
<p>Mục 1.10 đã có Functions trigger và lease. Mục này bổ sung phần khóa học dạy riêng cho bài toán "giữ embedding khớp với nội dung": khi nào dùng pull model, chỉ gọi lại embedding khi nội dung thật sự đổi, và cách chịu tải lớn.</p>
<div class="tablewrap"><table><thead><tr><th></th><th>Push (Functions trigger, change feed processor)</th><th>Pull (<code>query_items_change_feed</code>)</th></tr></thead><tbody>
<tr><td>Giao thay đổi</td><td>Tự động, không phải poll</td><td>Code tự đọc khi cần</td></tr>
<tr><td>Chia partition, cân tải</td><td>Có sẵn, qua lease container</td><td>Tự lo</td></tr>
<tr><td>Checkpoint</td><td>Tự động</td><td>Tự lưu <strong>continuation token</strong></td></tr>
<tr><td>Phụ thuộc</td><td>Cần lease container</td><td>Không phụ thuộc container hay dịch vụ khác</td></tr>
<tr><td>Hợp với</td><td><strong>Production, xử lý liên tục</strong></td><td>Batch, chạy thưa, migration một lần</td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code>it = container.query_items_change_feed(start_time="Beginning")  # hoặc bắt đầu từ token đã lưu
for page in it.by_page():
    for change in page:
        if should_refresh_embedding(change):
            change["embedding"] = generate_embedding(change.get("content", ""))
            change["contentHash"] = compute_content_hash(change)   # cập nhật hash CÙNG lúc
            container.upsert_item(change)
    continuation_token = it.continuation_token   # lưu bền để lần sau chạy tiếp</code></pre>
<ul><li><strong>Refresh có chọn lọc</strong>: gọi embedding API tốn tiền và bị giới hạn rate. Chỉ tạo lại embedding khi trường góp vào embedding (title, content, …) thay đổi; đổi metadata (category, status, quyền) thì bỏ qua. Cách production: lưu <code>contentHash</code> = SHA-256 của nội dung đã embed, so hash thay vì lấy bản cũ ra so.</li>
<li>Change feed ghi <em>mọi</em> insert/update, nên lần <code>upsert_item</code> ghi embedding ngược vào chính container cũng là một thay đổi mới trong feed. Nhờ kiểm tra hash, lần xử lý sau thấy hash khớp và bỏ qua, không gọi embedding lần nữa. <em>(Đây là suy luận từ mô tả change feed, khóa học không nói thẳng.)</em></li>
<li>Change feed <strong>bật sẵn trên mọi container</strong>, không cần cấu hình. Thứ tự chỉ được bảo đảm trong cùng một partition key.</li>
<li>Lease container cần ít tài nguyên: <strong>400 RU/s</strong> thường là đủ. Đặt tên khác với container dữ liệu. Nhiều function theo dõi cùng một container có thể dùng chung một lease container nếu mỗi function có <code>leaseContainerPrefix</code> riêng, hoặc dùng lease container riêng.</li>
<li>Tải cao: <strong>gộp nhiều text vào một lần gọi embedding</strong> (Azure OpenAI nhận mảng <code>input</code>); retry kèm exponential backoff khi bị rate limit; đẩy event sang <strong>Azure Queue Storage</strong> để tách việc phát hiện thay đổi khỏi việc sinh embedding; ưu tiên tài liệu quan trọng trước.</li>
<li>Idempotent và lỗi: bắt <code>CosmosResourceNotFoundError</code> khi document đã bị xóa trước lúc xử lý; dùng ETag nếu cần chống cập nhật đồng thời; lỗi lặp lại nhiều lần thì chuyển sang dead-letter queue và re-raise để được retry.</li>
<li>Scale: Functions tự thêm instance theo backlog. Theo dõi metric <strong><code>ChangeFeedProcessorHostLag</code></strong> để biết xử lý có kịp tốc độ thay đổi hay không. Dùng thư viện processor trực tiếp thì chạy thêm instance trỏ cùng lease container, các partition sẽ tự được chia lại.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "chạy lại embedding một lần cho toàn bộ dữ liệu, không muốn thêm lease container" → <strong>pull model</strong>. "Làm mới liên tục trong production" → push (Functions trigger). "Giảm chi phí embedding khi chỉ đổi status" → so sánh hash nội dung.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-cosmos-db/5-change-feed-trigger-embedding-refresh" target="_blank" rel="noopener">Implement vector search on Azure Cosmos DB for NoSQL — Use the change feed to trigger embedding refresh</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/khoa-index-path-composite-tuple">1.17 Indexing policy chi tiết — cú pháp path, quy tắc composite, tuple index, transformation và query metrics</h3>
<p>Mục 1.5 mới có nguyên tắc chung. Module "Optimize query performance" đi vào các quy tắc cụ thể mà đề hay dựa vào để hỏi: composite index nào phục vụ được <code>ORDER BY</code> nào, path nào được ưu tiên, bỏ index thì hậu quả có ngay hay không.</p>
<div class="tablewrap"><table><thead><tr><th>Loại index</th><th>Phục vụ</th></tr></thead><tbody>
<tr><td>Range (mặc định cho mọi path)</td><td><code>=</code>, <code>&gt; &lt; &gt;= &lt;= !=</code>, <code>ORDER BY</code> một trường, <code>CONTAINS</code>/<code>STARTSWITH</code>/<code>ENDSWITH</code>/<code>StringEquals</code>, <code>IS_DEFINED</code></td></tr>
<tr><td>Composite</td><td><code>ORDER BY</code> từ hai trường trở lên (bắt buộc); filter nhiều trường; kết hợp equality và range</td></tr>
<tr><td>Spatial</td><td><code>ST_DISTANCE</code>, <code>ST_WITHIN</code>, <code>ST_INTERSECTS</code></td></tr>
<tr><td>Vector / Full-text / Tuple</td><td><code>VectorDistance</code> / <code>FullTextScore</code>… / lọc nhiều thuộc tính trong cùng một phần tử mảng</td></tr>
</tbody></table></div>
<ul><li><strong>Cú pháp path</strong>: <code>/*</code> là mọi thứ tính từ gốc (đệ quy); <code>/prop/?</code> là giá trị vô hướng của một thuộc tính; <code>/arr/[]</code> là mọi phần tử của mảng; <code>/nested/path/*</code> là toàn bộ nhánh con. Khi include và exclude xung đột, <strong>path cụ thể hơn thắng</strong>.</li>
<li>Policy mặc định: include <code>/*</code>, chỉ exclude <code>/"_etag"/?</code>. <code>id</code> và <code>_ts</code> <strong>luôn được index</strong> ở mode consistent và không tắt được; <code>_etag</code> mặc định không được index.</li>
<li>Mode: <code>consistent</code> (index cập nhật đồng bộ khi ghi, là mặc định) hoặc <code>none</code> (key-value thuần, chỉ đọc bằng point read). <strong><code>lazy</code> đã deprecated</strong>, container mới không dùng được.</li>
<li>Index to thêm khi có nhiều path, cardinality cao và mảng (mỗi phần tử được index riêng), nên mảng embedding nằm trong range index làm dung lượng phình rất mạnh.</li>
<li>Khi dùng chiến lược <strong>exclude <code>/*</code> rồi include chọn lọc</strong>, partition key (trừ khi partition key chính là <code>/id</code>) <strong>không tự được index</strong>. Hãy include thêm, ví dụ <code>/tenantId/?</code>, nếu không thì filter theo key phải scan bên trong partition.</li></ul>
<p><strong>Quy tắc composite index:</strong></p>
<ul><li>Phải khớp <strong>đúng thứ tự trường và chiều sort</strong> của <code>ORDER BY</code>. Thiếu composite cho <code>ORDER BY</code> nhiều trường thì query <strong>báo lỗi</strong>, không chỉ chạy chậm.</li>
<li>Index <code>(a DESC, b DESC)</code> phục vụ được cả <code>a ASC, b ASC</code> (đảo chiều <em>toàn bộ</em>) nhưng <strong>không</strong> phục vụ chiều trộn <code>a DESC, b ASC</code>; chiều trộn cần index riêng.</li>
<li>Filter nhiều trường: <strong>trường equality đặt trước, trường range đặt cuối</strong>, mỗi composite chỉ có <strong>một</strong> range filter. Có hai range filter (<code>age &gt; 18</code>, <code>timestamp &gt; …</code>, cùng <code>name =</code>) thì tạo hai index <code>(name, age)</code> và <code>(name, timestamp)</code>.</li>
<li>Mẹo filter một trường rồi sort theo trường khác: viết lại thành <code>WHERE c.documentType = 'pdf' ORDER BY c.documentType, c.uploadDate DESC</code> để dùng composite <code>(documentType ASC, uploadDate DESC)</code>.</li>
<li>Chỉ làm composite cho khoảng <strong>5–10 pattern</strong> có tác động lớn nhất (tần suất chạy, lượng dữ liệu). Mỗi composite làm mọi lần ghi đắt thêm.</li></ul>
<pre><button class="copybtn">copy</button><code>{ "includedPaths": [ { "path": "/*" },
                    { "path": "/chunks/[]/{position, tokens}/?" } ] }   // tuple index

-- query được tăng tốc: lọc 2 thuộc tính trong CÙNG một phần tử mảng
SELECT c.id, chunk.text FROM c JOIN chunk IN c.chunks
WHERE chunk.position &gt;= 0 AND chunk.position &lt; 3 AND chunk.tokens &gt; 100</code></pre>
<p><strong>Index transformation</strong> (khi sửa indexing policy) chạy bất đồng bộ và không làm gián đoạn dịch vụ:</p>
<ul><li><strong>Thêm</strong> index: query chỉ được lợi <em>sau khi</em> transformation xong. Trong lúc chờ, query dùng index cũ hoặc scan.</li>
<li><strong>Bỏ</strong> index: query <strong>ngừng dùng ngay lập tức</strong> và quay về scan, trước cả khi transformation xong.</li>
<li>Thay index: <strong>thêm index mới, đợi transformation xong, rồi mới bỏ index cũ</strong>. Container hàng triệu item có thể mất nhiều giờ; nên làm vào giờ thấp điểm. Tiến độ (%) xem trên portal hoặc CLI; <code>container.read()</code> chỉ trả về policy, không có tiến độ.</li></ul>
<pre><button class="copybtn">copy</button><code>metrics = {}
def response_hook(headers, results):
    metrics["m"]  = headers.get("x-ms-documentdb-query-metrics", "")
    metrics["ru"] = headers.get("x-ms-request-charge", "")

items = list(container.query_items(query=q, parameters=p,
                                   populate_query_metrics=True,
                                   response_hook=response_hook))   # list() mới thực thi query</code></pre>
<ul><li>Đọc metrics: <strong>index utilization</strong> thấp, hoặc <strong>retrieved document count</strong> lớn hơn nhiều so với <strong>output document count</strong>, thì nhiều khả năng đang thiếu index. Thêm index, đợi transformation xong rồi đo lại.</li>
<li>Theo profile workload: <strong>write-heavy</strong> (ingest, stream, update embedding liên tục) thì index tối thiểu; <strong>read-heavy</strong> (search nhiều người dùng, dashboard) thì index đầy đủ. Khóa học coi đa số app AI là read-heavy.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "vừa bỏ một index để thay bằng index khác, query lập tức đắt vọt" → sai thứ tự, phải thêm index mới trước. "Chuyển sang excludedPaths <code>/*</code> xong thì filter theo <code>tenantId</code> đắt lên" → quên include partition key.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/optimize-query-performance-azure-cosmos-db/2-understand-indexes-cosmos-db" target="_blank" rel="noopener">Understand indexes in Azure Cosmos DB</a>, <a href="https://learn.microsoft.com/en-us/training/modules/optimize-query-performance-azure-cosmos-db/3-configure-range-composite-indexes" target="_blank" rel="noopener">Configure range and composite indexes</a>, <a href="https://learn.microsoft.com/en-us/training/modules/optimize-query-performance-azure-cosmos-db/5-reduce-ru-costs-strategic-indexing" target="_blank" rel="noopener">Reduce RU costs with strategic indexing</a> (module Optimize query performance for Azure Cosmos DB for NoSQL, khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/khoa-session-token-consistency">1.18 Session token trong Python, quorum đọc/ghi và PBS metric</h3>
<p>Mục 1.6 đã có bảng năm mức consistency. Mục này bổ sung phần code và cơ chế: chuyển session token giữa các service để đọc được thứ mình vừa ghi, cách Python SDK đặt consistency, và cách kiểm chứng xem eventual "cũ" tới mức nào.</p>
<pre><button class="copybtn">copy</button><code>from azure.cosmos import CosmosClient, ConsistencyLevel

client = CosmosClient(url=endpoint, credential=credential,
                      consistency_level=ConsistencyLevel.Session)   # Python: đặt ở cấp CLIENT
container = client.get_database_client("documents-db").get_container_client("documents")

info = {}
def capture(headers, result):
    info["token"] = headers.get("x-ms-session-token", "")

container.create_item(body=doc, response_hook=capture)
results = container.query_items(query="SELECT * FROM c WHERE c.category = @c",
                                parameters=[{"name": "@c", "value": "proposals"}],
                                session_token=info.get("token"))   # read-your-writes ở service khác</code></pre>
<ul><li>Trong <em>một</em> client instance, SDK tự quản lý session token. App phân tán (upload ở service A, search ở service B, hoặc nhiều node sau load balancer không có session affinity) phải <strong>tự truyền token</strong>. Session token <strong>gắn với partition</strong>.</li>
<li>Python SDK đặt consistency ở cấp client; muốn hai mức khác nhau thì tạo hai client instance (ví dụ Eventual cho analytics hoặc <code>GROUP BY</code> chạy nền).</li>
<li>Vector search: nếu người dùng chấp nhận chưa thấy tài liệu mới nhất thì eventual là đủ. Nếu người dùng vừa upload và cần thấy tài liệu đó ngay trong similarity search thì dùng <strong>Session</strong>. Hybrid có filter theo ngày cũng xét như vậy.</li></ul>
<div class="tablewrap"><table><thead><tr><th>Mức</th><th>Đọc</th><th>Ghi xác nhận khi</th></tr></thead><tbody>
<tr><td>Strong</td><td>2 replica (local minority) → <strong>2× RU</strong></td><td><strong>Global majority</strong> (mọi region); latency ghi tăng theo region xa nhất</td></tr>
<tr><td>Bounded staleness</td><td>2 replica → 2× RU</td><td>Local majority (3/4 replica)</td></tr>
<tr><td>Session / Consistent prefix / Eventual</td><td>1 replica → 1× RU</td><td>Local majority, rồi replicate bất đồng bộ sang region khác</td></tr>
</tbody></table></div>
<ul><li>RU của <strong>ghi</strong> không đổi theo consistency; Strong chỉ làm tăng <em>latency</em> ghi. Bounded staleness là anti-pattern với account multi-region write; Strong thì không dùng được với multi-region write.</li>
<li>Consistent prefix: các ghi trong một <strong>transactional batch</strong> hoặc cùng hiện hoặc cùng không.</li>
<li><strong>PBS (Probabilistically Bounded Staleness)</strong>: vào portal, chọn Metrics, rồi category <em>Consistency</em>. Metric này cho biết read ở mức yếu thực tế trả về dữ liệu mới nhất thường xuyên tới đâu. Khóa học gợi ý: trên 99% thì có thể dùng eventual cho nhiều thao tác hơn; staleness đáng kể thì giữ Session cho thao tác của người dùng.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> ví dụ trong khóa học tạo client <code>ConsistencyLevel.Strong</code> cho "critical read", nhưng docs Manage consistency ghi rõ override bằng <code>ConsistencyLevel</code> chỉ <strong>nới lỏng</strong> được so với default của account. Muốn đọc mạnh hơn thì phải nâng default consistency của account (hoặc dùng <code>ReadConsistencyStrategy</code>, hiện là preview và chỉ có ở Java/.NET). Đề hỏi "Strong cho một phần app" thì đáp án đúng vẫn là account default phải đủ mạnh.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/optimize-query-performance-azure-cosmos-db/6-choose-consistency-levels-performance" target="_blank" rel="noopener">Optimize query performance for Azure Cosmos DB for NoSQL — Choose consistency levels for optimal performance</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026; đối chiếu <a href="https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-manage-consistency" target="_blank" rel="noopener">Manage consistency</a> và <a href="https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels" target="_blank" rel="noopener">Consistency level choices</a>.</em></p>
<h3 id="02-data-services/trien-khai-cosmos">1.19 Triển khai Cosmos DB for NoSQL trên Azure — từng bước</h3>
<p>Thứ tự: <strong>account (chọn capacity mode + bật capability vector/full-text) → database → container (partition key, indexing, vector policy) → data-plane RBAC cho app → tắt key</strong>.</p>
<pre><button class="copybtn">copy</button><code># 1. Account — capacity mode chọn lúc tạo: serverless HOẶC provisioned (không đổi qua lại tự do)
az cosmosdb create -g rg-ai200 -n cos-rag \\
  --locations regionName=eastus failoverPriority=0 isZoneRedundant=false \\
  --default-consistency-level Session \\
  --capabilities EnableNoSQLVectorSearch   # full-text search đã GA: chỉ cần full-text policy + index, không cần capability

# 2. Database + container (autoscale tối đa 4000 → chạy trong khoảng 400–4000 RU/s, tức 10%–100%)
az cosmosdb sql database create -g rg-ai200 -a cos-rag -n ragdb
az cosmosdb sql container create -g rg-ai200 -a cos-rag -d ragdb -n docs \\
  --partition-key-path /tenantId --max-throughput 4000 --idx @indexpolicy.json

# 3. Data-plane RBAC (role riêng của Cosmos, KHÔNG phải az role assignment thường)
#    ...0001 = Built-in Data Reader, ...0002 = Built-in Data Contributor
az cosmosdb sql role assignment create -g rg-ai200 -a cos-rag \\
  --role-definition-id 00000000-0000-0000-0000-000000000002 \\
  --principal-id $PID --scope "/"</code></pre>
<p>Vector policy của container khai rõ nhất bằng Bicep — nên khai ngay lúc tạo container (sau này vẫn thêm/bớt được path, nhưng <strong>không sửa trực tiếp</strong> cấu hình của một path đã có):</p>
<pre><button class="copybtn">copy</button><code>resource docs 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2024-11-15' = {
  parent: ragdb
  name: 'docs'
  properties: {
    resource: {
      id: 'docs'
      partitionKey: { paths: [ '/tenantId' ], kind: 'Hash' }
      vectorEmbeddingPolicy: {
        vectorEmbeddings: [ { path: '/embedding', dataType: 'float32', distanceFunction: 'cosine', dimensions: 1536 } ]
      }
      indexingPolicy: {
        includedPaths: [ { path: '/*' } ]
        excludedPaths: [ { path: '/embedding/*' } ]
        vectorIndexes: [ { path: '/embedding', type: 'diskANN' } ]
      }
    }
  }
}</code></pre>
<ul><li><strong>Portal</strong>: Create → Azure Cosmos DB → <em>Azure Cosmos DB for NoSQL</em>; bật vector search ở <em>Settings → Features → Vector Search for NoSQL API</em> (yêu cầu được tự duyệt nhưng có thể mất tới ~15 phút mới có hiệu lực).</li>
<li><strong>Tắt key sau khi app đã chạy bằng RBAC</strong>: đặt <code>disableLocalAuth: true</code> trên account (Bicep/ARM) — từ đó connection string/primary key không còn đăng nhập được data plane.</li>
<li><strong>Kiểm tra</strong>: Data Explorer chạy thử <code>SELECT TOP 5 VectorDistance(c.embedding, @v) ...</code>; metric <em>Total Request Units</em> và <em>Normalized RU Consumption</em> ngay sau khi nạp dữ liệu.</li>
<li><strong>Bẫy</strong>: role Cosmos data-plane gán bằng <code>az cosmosdb sql role assignment</code>, không xuất hiện trong blade IAM thường — cấp "Contributor" ở IAM chỉ cho quản lý account, <strong>không</strong> đọc/ghi được item qua RBAC (nhưng vẫn lấy được key bằng listKeys nếu chưa đặt <code>disableLocalAuth</code>). Partition key không sửa được sau khi tạo container → sai là tạo container mới + copy. Vector embedding/index policy thì thêm hoặc bớt path được, nhưng muốn đổi dimensions/distanceFunction/type của một path đã có phải xóa path đó rồi thêm lại; đã bật vector search trên container thì không tắt được.</li></ul>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/vector-search" target="_blank" rel="noopener">Vector search in Cosmos DB for NoSQL</a>, <a href="https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-connect-role-based-access-control" target="_blank" rel="noopener">Connect with role-based access control</a> trên Microsoft Learn, đối chiếu ngày 26/09/2026.</em></p>
<hr>
<h2 id="02-data-services/phan-b-azure-database-for-postgresql-flexible-server">2. Azure Database for PostgreSQL (flexible server)</h2>
<h3 id="02-data-services/b1-ket-noi-toi-uu-connection">2.1 Kết nối &amp; tối ưu connection</h3>
<pre><button class="copybtn">copy</button><code>import os, psycopg
from azure.identity import DefaultAzureCredential

# Cách 1: password
conn = psycopg.connect(os.environ["PG_CONN"])   # "host=... dbname=... user=... password=... sslmode=require"

# Cách 2: Entra ID token làm password (khuyến nghị)
cred = DefaultAzureCredential()
token = cred.get_token("https://ossrdbms-aad.database.windows.net/.default").token
conn = psycopg.connect(host="mypg.postgres.database.azure.com", dbname="ragdb",
                       user="app@tenant.com", password=token, sslmode="require")</code></pre>
<p><strong>Tối ưu kết nối (mục có trong outline):</strong></p>
<ul><li><strong>Connection pooling</strong> — mỗi kết nối Postgres là một process, tốn ~10 MB RAM. Serverless/Functions mở kết nối liên tục sẽ giết server.</li><li style="margin-left:14px">Dùng <strong>PgBouncer tích hợp</strong> của flexible server: bật tham số <code>pgbouncer.enabled = true</code>, kết nối qua <strong>port 6432</strong>.</li><li style="margin-left:14px">Hoặc pool phía ứng dụng: <code>psycopg_pool.ConnectionPool(conninfo, min_size=1, max_size=10)</code>.</li><li style="margin-left:14px">Transaction pooling phù hợp app nhiều kết nối ngắn; lưu ý không dùng được prepared statement server-side/<code>LISTEN</code>.</li><li>Đặt app <strong>cùng region</strong> với DB; bật <strong>private endpoint/VNet integration</strong> để giảm latency &amp; tăng bảo mật.</li><li>Giảm round-trip: batch insert (<code>COPY</code>, <code>executemany</code>), lấy đúng cột cần thiết.</li></ul>
<h3 id="02-data-services/d5-postgresql-pooling">2.2 Kết nối và pooling (PgBouncer)</h3>
<ul><li><strong>PgBouncer dựng sẵn</strong>: bật tham số <code>pgbouncer.enabled</code>, kết nối qua cổng <strong>6432</strong> (cổng 5432 vẫn là kết nối thẳng). Mặc định <strong>transaction pooling</strong> — một kết nối server phục vụ nhiều client theo từng transaction.</li>
<li>Vì transaction pooling, các tính năng bám session <strong>không dùng được qua pooler</strong>: prepared statement mức session, <code>SET</code> phiên, advisory lock, LISTEN/NOTIFY — app dùng những thứ đó thì vào cổng 5432.</li>
<li>Kịch bản đề kinh điển: Function/Container Apps scale ra hàng trăm instance → <em>connection storm</em>, lỗi "too many connections" vì <code>max_connections</code> theo SKU — đáp án là <strong>PgBouncer</strong>, không phải nâng SKU.</li>
<li>Đo: <code>pg_stat_activity</code> xem kết nối đang chiếm; idle connection vẫn ăn RAM — đặt <code>idle_in_transaction_session_timeout</code>.</li>
<li>Chi tiết đã đối chiếu docs (Learn, 8/2026): PgBouncer built-in <strong>không có trên tier Burstable</strong> (đổi xuống Burstable là mất pooling); mặc định <code>default_pool_size</code> 50, <code>max_client_conn</code> 5000; từ bản hiện tại đặt <code>max_prepared_statements</code> &gt; 0 thì prepared statement <em>mức protocol</em> dùng được ngay trong transaction mode; PgBouncer restart cùng server khi scale/failover nên app phải biết reconnect.</li></ul>
<h3 id="02-data-services/d8-postgres-schema-datatype">2.3 Thiết kế bảng và chọn kiểu dữ liệu trong PostgreSQL</h3>
<p>Một gạch đầu dòng nguyên văn của outline: "Model schemas and implement indexing strategies, <strong>including designing tables and choosing appropriate data types</strong>". Phần vector đã học kỹ ở các mục 2.6–2.14; mục này là phần schema thuần — chọn kiểu cột, đặt index theo toán tử, và cái bẫy TOAST của cột embedding.</p>
<pre><button class="copybtn">copy</button><code>-- Bảng chunk cho RAG: metadata hay lọc thì tách cột, phần còn lại nhét jsonb
CREATE TABLE chunk (
  id          bigint      GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  doc_id      uuid        NOT NULL REFERENCES document(id) ON DELETE CASCADE,
  tenant_id   text        NOT NULL,                    -- lọc ở mọi truy vấn → cột riêng
  lang        text        NOT NULL,
  created_at  timestamptz NOT NULL DEFAULT now(),
  attrs       jsonb       NOT NULL DEFAULT '{}'::jsonb, -- metadata thưa, không lường trước
  body        text        NOT NULL,
  embedding   vector(1536) NOT NULL
);

CREATE INDEX ON chunk (tenant_id, created_at DESC);       -- B-tree: lọc + sắp xếp
CREATE INDEX ON chunk USING gin (attrs jsonb_path_ops);   -- GIN: attrs @&gt; '{"source":"faq"}'
CREATE INDEX ON chunk USING hnsw (embedding vector_cosine_ops)
  WHERE lang = 'vi';                                      -- partial index cho nhánh nóng
</code></pre>
<table><thead><tr><th>Nhu cầu</th><th>Chọn</th><th>Vì sao</th></tr></thead><tbody>
<tr><td>Chuỗi bất kỳ</td><td><code>text</code></td><td>PostgreSQL <strong>không</strong> chạy nhanh hơn khi giới hạn <code>varchar(n)</code>; <code>char(n)</code> còn chậm nhất vì blank-padding. Chỉ dùng <code>varchar(n)</code> khi <code>n</code> là ràng buộc nghiệp vụ thật</td></tr>
<tr><td>Thời điểm</td><td><code>timestamptz</code></td><td><code>timestamp</code> (không timezone) làm lệch giờ khi app chạy nhiều region — mặc định nên là <code>timestamptz</code></td></tr>
<tr><td>Tiền, số phải chính xác</td><td><code>numeric</code></td><td><code>double precision</code> làm tròn nhị phân, sai số cộng dồn</td></tr>
<tr><td>Điểm số, khoảng cách</td><td><code>real</code> / <code>double precision</code></td><td>Nhanh và đủ chính xác; <code>numeric</code> ở đây chỉ tốn CPU</td></tr>
<tr><td>Khoá chính sinh bởi DB</td><td><code>bigint GENERATED ALWAYS AS IDENTITY</code></td><td>8 byte, chèn tuần tự nên B-tree ít phân mảnh</td></tr>
<tr><td>Khoá chính sinh ở client/nhiều nguồn</td><td><code>uuid</code></td><td>Không cần round-trip để lấy id; đổi lại 16 byte và chèn phân tán làm index phình hơn</td></tr>
<tr><td>Metadata cố định, hay lọc</td><td>Cột riêng + B-tree</td><td>Có thống kê (statistics) nên planner ước lượng đúng; <code>jsonb</code> không có</td></tr>
<tr><td>Metadata thưa, không lường trước</td><td><code>jsonb</code> + GIN</td><td>Không phải migrate mỗi lần thêm trường; <code>jsonb_path_ops</code> nhỏ và nhanh hơn cho phép chứa <code>@&gt;</code></td></tr>
<tr><td>Danh sách giá trị cố định</td><td><code>text</code> + <code>CHECK</code></td><td>Thêm giá trị mới chỉ là sửa constraint, còn <code>ENUM</code> phải <code>ALTER TYPE</code></td></tr>
</tbody></table>
<h3 id="02-data-services/d81-kieu-vector">2.4 Kiểu vector — trần chiều của kiểu khác trần chiều index được</h3>
<table><thead><tr><th>Kiểu</th><th>Dung lượng</th><th>Trần của kiểu</th><th>Index (HNSW / IVFFlat) tới</th></tr></thead><tbody>
<tr><td><code>vector</code></td><td>4 × d + 8 byte</td><td>16.000 chiều</td><td><strong>2.000 chiều</strong></td></tr>
<tr><td><code>halfvec</code> (nửa độ chính xác)</td><td>2 × d + 8 byte</td><td>16.000 chiều</td><td><strong>4.000 chiều</strong></td></tr>
<tr><td><code>bit</code> (nhị phân)</td><td>d / 8 + 8 byte</td><td>—</td><td>64.000 chiều</td></tr>
<tr><td><code>sparsevec</code></td><td>8 × số phần tử khác 0 + 16 byte</td><td>16.000 phần tử khác 0</td><td>1.000 phần tử khác 0</td></tr>
</tbody></table>
<ul><li>Điểm ăn tiền: <code>text-embedding-3-large</code> ra <strong>3.072 chiều</strong> — <code>vector(3072)</code> <em>lưu</em> được nhưng <strong>không tạo được HNSW/IVFFlat</strong> vì quá 2.000. Hai lối thoát: ép sang halfvec trong index (<code>CREATE INDEX ON chunk USING hnsw ((embedding::halfvec(3072)) halfvec_cosine_ops)</code>) hoặc gọi model với tham số <code>dimensions=1536</code> ngay từ đầu.</li>
<li>Lỗi hay gặp trong đề: "tạo index báo lỗi column does not have dimensions" — cột khai <code>vector</code> trống chiều thì index không biết độ dài, phải khai <code>vector(1536)</code>.</li></ul>
<h3 id="02-data-services/d82-toast-va-partition">2.5 TOAST, partition và bloat — ba thứ làm vector workload chậm dần</h3>
<ul><li><strong>TOAST</strong>: giá trị lớn hơn ngưỡng ~2 KB bị PostgreSQL đẩy ra bảng phụ (out-of-line) và nén. Một <code>vector(1536)</code> nặng 6.152 byte nên <em>mặc định nằm ngoài dòng</em> — mỗi lần đọc thêm một lần dò bảng TOAST. pgvector cho phép giữ inline: <code>ALTER TABLE chunk ALTER COLUMN embedding SET STORAGE PLAIN;</code> — nhanh hơn khi quét tuần tự, đổi lại dòng to hơn và bảng phình. Lưu ý đặt xong chỉ áp cho dữ liệu ghi <em>sau</em> đó; muốn áp cho dòng cũ phải ép viết lại bảng (<code>VACUUM FULL</code>).</li>
<li><strong>Partition theo thời gian</strong> (<code>PARTITION BY RANGE (created_at)</code>) khi phải xoá dữ liệu cũ hàng loạt: gỡ một partition (<code>DETACH PARTITION</code> rồi <code>DROP TABLE</code>) là thao tác metadata, còn <code>DELETE</code> vài triệu dòng sinh dead tuple và bắt autovacuum dọn — trong lúc đó index HNSW phình và truy vấn chậm dần.</li>
<li><strong>Bloat</strong>: cập nhật embedding = xoá + chèn ở tầng lưu trữ (MVCC), nên re-embedding cả bảng làm index to gấp đôi. Sau một đợt re-embed lớn nên <code>REINDEX INDEX CONCURRENTLY</code> thay vì chờ autovacuum.</li>
<li><em>Nguồn: <a href="https://www.postgresql.org/docs/current/datatype-character.html" target="_blank" rel="noopener">PostgreSQL — Character Types</a> (tip "không có khác biệt hiệu năng giữa <code>text</code>, <code>varchar</code>, <code>char</code>") và <a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener">pgvector README</a> (dung lượng và trần chiều của từng kiểu), đối chiếu ngày 18/09/2026.</em></li></ul>
<h3 id="02-data-services/b2-pgvector-thiet-lap">2.6 pgvector — thiết lập</h3>
<pre><button class="copybtn">copy</button><code>CREATE EXTENSION IF NOT EXISTS vector;      -- phải allowlist trước: azure.extensions = VECTOR</code></pre>
<p>Trên Azure phải thêm <code>vector</code> (và <code>pg_diskann</code>, <code>azure_ai</code> nếu dùng) vào server parameter <strong><code>azure.extensions</code></strong> rồi mới <code>CREATE EXTENSION</code> được — đây là bẫy thi rất hay gặp.</p>
<p>Schema RAG chuẩn:</p>
<pre><button class="copybtn">copy</button><code>CREATE TABLE doc_chunks (
    id          bigserial PRIMARY KEY,
    tenant_id   uuid        NOT NULL,
    doc_id      text        NOT NULL,
    lang        text        NOT NULL,
    chunk       text        NOT NULL,
    metadata    jsonb       NOT NULL DEFAULT '{}',
    embedding   vector(1536) NOT NULL,
    created_at  timestamptz  NOT NULL DEFAULT now()
);

CREATE INDEX ON doc_chunks (tenant_id, lang);          -- pre-filter cho RAG
CREATE INDEX ON doc_chunks USING gin (metadata jsonb_path_ops);</code></pre>
<p>Chọn kiểu dữ liệu (mục "choosing appropriate data types"):</p>
<div class="tablewrap"><table><thead><tr><th>Kiểu</th><th>Khi nào</th></tr></thead><tbody><tr><td><code>vector(n)</code></td><td>Mặc định, float32, tối đa 2000 chiều cho index HNSW</td></tr><tr><td><code>halfvec(n)</code></td><td>float16 → <strong>giảm 50% dung lượng và compute</strong>, độ chính xác gần như không đổi; index tới 4000 chiều</td></tr><tr><td><code>bit(n)</code></td><td>Binary quantization, cực gọn, dùng cho tầng lọc thô</td></tr><tr><td><code>sparsevec</code></td><td>Vector thưa (SPLADE, keyword expansion)</td></tr><tr><td><code>jsonb</code></td><td>Metadata linh hoạt (+ GIN index)</td></tr><tr><td><code>text</code> vs <code>varchar(n)</code></td><td>Postgres không nhanh hơn khi giới hạn độ dài → dùng <code>text</code></td></tr><tr><td><code>uuid</code>, <code>timestamptz</code></td><td>Đúng kiểu thay vì <code>text</code> — index nhỏ hơn, so sánh nhanh hơn</td></tr></tbody></table></div>
<h3 id="02-data-services/b3-index-cho-vector-giam-latency-compute-overhead">2.7 Index cho vector — giảm latency &amp; compute overhead</h3>
<p><strong>Toán tử phải khớp với index, nếu lệch thì index bị bỏ qua (seq scan):</strong></p>
<div class="tablewrap"><table><thead><tr><th>Toán tử</th><th>Ý nghĩa</th><th>Index opclass</th></tr></thead><tbody><tr><td><code>&lt;-&gt;</code></td><td>L2 / Euclidean</td><td><code>vector_l2_ops</code></td></tr><tr><td><code>&lt;=&gt;</code></td><td><strong>Cosine distance</strong> (phổ biến nhất với OpenAI embeddings)</td><td><code>vector_cosine_ops</code></td></tr><tr><td><code>&lt;#&gt;</code></td><td>Inner product (âm)</td><td><code>vector_ip_ops</code></td></tr></tbody></table></div>
<p><strong>HNSW</strong> (mặc định nên dùng — recall cao, query nhanh, build chậm &amp; tốn RAM):</p>
<pre><button class="copybtn">copy</button><code>CREATE INDEX idx_chunks_hnsw ON doc_chunks
USING hnsw (embedding vector_cosine_ops)
WITH (m = 16, ef_construction = 64);

SET hnsw.ef_search = 100;   -- tăng =&gt; recall cao hơn, chậm hơn (mặc định 40)</code></pre>
<p><strong>IVFFlat</strong> (build nhanh, ít RAM, recall kém hơn; <strong>phải có dữ liệu trước khi tạo index</strong>):</p>
<pre><button class="copybtn">copy</button><code>CREATE INDEX idx_chunks_ivf ON doc_chunks
USING ivfflat (embedding vector_cosine_ops) WITH (lists = 1000);   -- ~ rows/1000 (đến 1M rows)
SET ivfflat.probes = 20;    -- ~ sqrt(lists)</code></pre>
<p><strong>DiskANN</strong> (extension <code>pg_diskann</code> riêng của Azure): index nằm trên disk → xử lý được tập vector rất lớn với RAM khiêm tốn, build nhanh hơn HNSW.</p>
<pre><button class="copybtn">copy</button><code>CREATE EXTENSION IF NOT EXISTS pg_diskann CASCADE;
CREATE INDEX idx_chunks_diskann ON doc_chunks
USING diskann (embedding vector_cosine_ops);</code></pre>
<p>Giảm <strong>compute overhead</strong> của pgvector:</p>
<ul><li>Dùng <code>halfvec</code> hoặc <strong>quantization</strong>; hoặc giảm chiều embedding (<code>dimensions=768</code> với text-embedding-3-*).</li><li>Đánh index trên biểu thức: <code>USING hnsw ((embedding::halfvec(1536)) halfvec_cosine_ops)</code>.</li><li>Chuẩn hoá vector (L2 normalize) rồi dùng inner product → rẻ hơn cosine.</li><li>Tăng <code>maintenance_work_mem</code> và <code>max_parallel_maintenance_workers</code> khi build index; đặt <code>ef_construction</code> vừa đủ.</li><li>Partition bảng theo <code>tenant_id</code>/thời gian nếu dữ liệu rất lớn.</li><li><code>VACUUM ANALYZE</code> sau khi nạp lớn; theo dõi bloat.</li></ul>
<h3 id="02-data-services/d4-pgvector-chuyen-sau">2.8 pgvector chuyên sâu — HNSW vs IVFFlat và chi phí</h3>
<table><thead><tr><th></th><th>HNSW</th><th>IVFFlat</th></tr></thead><tbody>
<tr><td>Build index</td><td>Chậm, tốn RAM (<code>maintenance_work_mem</code>)</td><td>Nhanh, nhẹ</td></tr>
<tr><td>Truy vấn</td><td>Nhanh và recall cao hơn</td><td>Chậm hơn ở cùng recall</td></tr>
<tr><td>Dữ liệu đến sau</td><td>Thêm dần được, không cần train</td><td>Cần dữ liệu sẵn để chia <code>lists</code>; thêm nhiều nên reindex</td></tr>
<tr><td>Núm chỉnh</td><td><code>m</code>, <code>ef_construction</code> lúc build; <code>SET hnsw.ef_search</code> lúc query</td><td><code>lists</code> lúc build; <code>SET ivfflat.probes</code> lúc query</td></tr>
</tbody></table>
<ul><li>Ba toán tử khoảng cách: <code>&lt;-&gt;</code> L2, <code>&lt;#&gt;</code> inner product (âm), <code>&lt;=&gt;</code> cosine — <strong>index phải khai đúng opclass với toán tử dùng trong query</strong> (ví dụ <code>vector_cosine_ops</code> cho <code>&lt;=&gt;</code>), lệch là index bị bỏ qua, quét tuần tự.</li>
<li>Tăng recall = tăng <code>ef_search</code>/<code>probes</code> — đổi bằng độ trễ; đề hỏi "kết quả thiếu tài liệu liên quan" thì chỉnh hai núm này trước khi nghĩ tới đổi index.</li>
<li>Filter metadata đi cùng vector: đặt cột filter vào <code>WHERE</code> và cân nhắc partial index cho tenant lớn; embedding cột <code>vector(1536)</code> phải khớp số chiều của model — đổi model là migrate cột.</li></ul>
<h3 id="02-data-services/d42-duoi-nap-capo-hnsw">2.9 Dưới nắp capo: HNSW hoạt động thế nào</h3>
<p>HNSW = <em>Hierarchical Navigable Small World</em>. Ý tưởng gốc là đem <strong>skip list</strong> — cấu trúc nhiều tầng để tìm nhanh trong danh sách có thứ tự — sang một không gian mà "thứ tự" không tồn tại, chỉ có khoảng cách.</p>
<p><strong>Cấu trúc.</strong> Mỗi vector là một node. Khi chèn, node được bốc ngẫu nhiên một <em>tầng cao nhất</em> theo phân phối hàm mũ: xác suất lên tầng trên giảm theo hệ số <code>1/ln(m)</code>. Kết quả là tầng 0 chứa <strong>mọi</strong> vector, tầng 1 chứa khoảng 1/16 số đó (với <code>m = 16</code>), tầng 2 khoảng 1/256… — hình chóp rất nhọn, thường chỉ 4–6 tầng cho hàng triệu vector. Mỗi node giữ tối đa <code>m</code> cạnh ở tầng trên và <strong><code>2 × m</code> cạnh ở tầng 0</strong> (tầng 0 là nơi thật sự phải tìm chính xác nên cần dày hơn).</p>
<p><strong>Truy vấn.</strong> Bắt đầu từ một entry point ở tầng cao nhất:</p>
<ol><li>Ở mỗi tầng trên, đi <em>greedy</em>: nhảy sang hàng xóm nào gần query hơn, dừng khi không còn hàng xóm nào gần hơn nữa. Mỗi bước nhảy ở đây đi rất xa — đây là "đường cao tốc".</li>
<li>Tụt xuống tầng dưới, lấy node vừa dừng làm điểm xuất phát. Lặp lại tới tầng 0.</li>
<li>Ở tầng 0 đổi sang <em>beam search</em>: giữ một tập ứng viên kích thước <code>ef_search</code>, liên tục mở rộng ứng viên gần nhất chưa duyệt, cập nhật tập, dừng khi không cải thiện được nữa. Trả về <code>k</code> phần tử tốt nhất trong tập đó.</li></ol>
<p><strong>Xây index.</strong> Chèn một node cũng chính là một lần truy vấn: đi xuống tới tầng của node đó, rồi ở mỗi tầng chạy beam search với bề rộng <code>ef_construction</code> để tìm ứng viên hàng xóm. Điểm tinh tế nằm ở bước chọn cạnh — HNSW <strong>không</strong> nối đơn giản với <code>m</code> node gần nhất, mà dùng một heuristic ưu tiên <em>đa dạng hướng</em>: một ứng viên bị loại nếu nó gần một hàng xóm đã chọn hơn là gần node đang xét. Nếu chỉ nối với những node gần nhất, đồ thị vỡ thành các cụm dày đặc không có cầu nối, và greedy search kẹt lại trong cụm sai — đây chính là lý do kỹ thuật khiến HNSW giữ được recall cao.</p>
<p><strong>Ba con số và ràng buộc giữa chúng</strong> (đã kiểm trên pgvector 0.8.6 trong lab):</p>
<table><thead><tr><th>Tham số</th><th>Mặc định</th><th>Miền hợp lệ</th><th>Tăng lên thì</th></tr></thead><tbody>
<tr><td><code>m</code></td><td>16</td><td>2 – 100</td><td>đồ thị dày hơn → recall cao hơn, index to hơn, build và insert chậm hơn</td></tr>
<tr><td><code>ef_construction</code></td><td>64</td><td>4 – 1000</td><td>lúc build xét nhiều ứng viên hơn → đồ thị chất lượng hơn, build chậm hơn; <em>không</em> ảnh hưởng tốc độ truy vấn</td></tr>
<tr><td><code>hnsw.ef_search</code></td><td><strong>40</strong></td><td>1 – 1000</td><td>lúc query xét nhiều ứng viên hơn → recall cao hơn, chậm hơn</td></tr>
</tbody></table>
<ul><li><strong>Ràng buộc cứng: <code>ef_construction ≥ 2 × m</code></strong>. Khai lệch là pgvector báo thẳng <code>ERROR: ef_construction must be greater than or equal to 2 * m</code>. Nâng <code>m</code> lên 32 thì phải nâng <code>ef_construction</code> lên ít nhất 64.</li>
<li><strong><code>ef_search</code> phải ≥ <code>k</code></strong>. Hỏi <code>LIMIT 100</code> mà để mặc định 40 thì tập ứng viên còn nhỏ hơn số kết quả cần — kết quả vừa thiếu vừa sai thứ tự. Đây là lỗi âm thầm, không có cảnh báo nào.</li>
<li><code>ef_construction</code> và <code>ef_search</code> <strong>độc lập</strong>: cái thứ nhất quyết định chất lượng đồ thị (cố định sau khi build), cái thứ hai quyết định công sức bỏ ra mỗi lần tìm (đổi được bất cứ lúc nào bằng <code>SET</code>). Recall thấp thì thử <code>ef_search</code> trước vì nó miễn phí; hết cách mới build lại với <code>m</code>/<code>ef_construction</code> lớn hơn.</li>
<li><strong>Bộ nhớ lúc build</strong>: đồ thị phải nằm trong <code>maintenance_work_mem</code>. Vượt là pgvector in <code>NOTICE: hnsw graph no longer fits into maintenance_work_mem after N tuples</code> rồi chuyển sang xây trên đĩa — chậm hơn hàng chục lần chứ không phải chậm hơn chút ít. Thấy NOTICE này là dừng, nâng tham số, build lại.</li>
<li><strong>Vì sao HNSW nhạy với RAM lúc truy vấn</strong>: mỗi bước nhảy là một lần đọc node ở vị trí <em>ngẫu nhiên</em> trong đồ thị. Index vừa RAM thì đó là mấy chục lần truy cập bộ nhớ; index không vừa thì thành mấy chục lần đọc đĩa ngẫu nhiên — độ trễ nhảy từ mili giây lên hàng trăm mili giây.</li>
<li><strong>Xoá và cập nhật</strong>: pgvector không gỡ node khỏi đồ thị, chỉ đánh dấu tuple chết. Re-embedding cả bảng làm index phình và recall xấu dần — phải <code>REINDEX</code>.</li></ul>
<h3 id="02-data-services/d43-duoi-nap-capo-ivfflat">2.10 Dưới nắp capo: IVFFlat hoạt động thế nào</h3>
<p>IVFFlat = <em>Inverted File with Flat compression</em>. Nó không dựng đồ thị mà <strong>chia không gian thành các ô</strong> rồi chỉ tìm trong vài ô.</p>
<p><strong>Xây index (có giai đoạn huấn luyện).</strong> pgvector chạy <em>k-means</em> trên dữ liệu đang có để tìm <code>lists</code> tâm cụm (centroid), rồi gán mỗi vector vào cụm có tâm gần nhất. Kết quả là một phân hoạch Voronoi: mỗi cụm là một "ô" trong không gian, và mỗi ô là một danh sách vector — đây chính là "inverted file". Chữ <strong>Flat</strong> nghĩa là bên trong ô, vector được lưu <em>nguyên vẹn không nén</em>, nên khoảng cách tính trong ô là chính xác tuyệt đối.</p>
<p><strong>Truy vấn.</strong> Hai bước, rất khác HNSW:</p>
<ol><li>Tính khoảng cách từ query tới <strong>toàn bộ <code>lists</code> tâm cụm</strong> — bước này luôn quét hết, nên <code>lists</code> quá lớn là chính nó thành nút cổ chai.</li>
<li>Chọn <code>probes</code> cụm gần nhất rồi <strong>quét tuần tự toàn bộ</strong> vector trong các cụm đó, tính khoảng cách thật, lấy top-k.</li></ol>
<ul><li><strong><code>ivfflat.probes</code> mặc định là 1.</strong> Đây là cái bẫy recall lớn nhất của IVFFlat: mặc định chỉ nhìn <em>một</em> ô. Láng giềng gần nhất thật sự nằm ngay bên kia biên giới Voronoi là mất — mà chuyện đó xảy ra thường xuyên vì query hiếm khi rơi đúng giữa ô. Tăng <code>probes</code> là cách sửa đầu tiên.</li>
<li><strong><code>probes = lists</code> thì thành tìm kiếm chính xác</strong> (quét hết mọi ô) — chậm bằng seq scan nhưng recall 100%. Đây là công tắc hữu ích để đo xem index đang bỏ sót bao nhiêu.</li>
<li><strong>Chọn <code>lists</code></strong>: tài liệu pgvector khuyến nghị <code>số dòng / 1000</code> cho tới 1 triệu dòng, và <code>sqrt(số dòng)</code> khi vượt 1 triệu. Điểm khởi đầu cho <code>probes</code> là <code>sqrt(lists)</code>. Miền hợp lệ của <code>lists</code> là 1 – 32768.</li>
<li><strong>Phải có dữ liệu trước khi build.</strong> k-means cần mẫu để học; build trên bảng rỗng thì pgvector cảnh báo <code>NOTICE: ivfflat index created with little data</code> và các tâm cụm sinh ra vô nghĩa. HNSW thì ngược lại — không có giai đoạn huấn luyện nên build lúc nào cũng được.</li>
<li><strong>Tâm cụm đóng băng sau khi build.</strong> Vector thêm sau đó vẫn được gán vào cụm gần nhất, nhưng tâm không dịch theo. Nạp thêm gấp đôi dữ liệu là phân bố lệch hẳn: có ô phình to, có ô gần rỗng, recall và tốc độ cùng xuống. Cách sửa duy nhất là <code>REINDEX</code>. HNSW không có vấn đề này vì đồ thị được bồi đắp dần.</li>
<li><strong>Vì sao IVFFlat chịu đĩa tốt hơn HNSW</strong>: một ô là các tuple nằm liền nhau, quét ô là đọc <em>tuần tự</em> — đúng thứ ổ đĩa và prefetch làm tốt. HNSW đọc ngẫu nhiên. Nên khi index chắc chắn không vừa RAM, IVFFlat thường là lựa chọn thực tế hơn.</li></ul>
<h3 id="02-data-services/d44-chon-hnsw-hay-ivfflat">2.11 Chọn cái nào — và cái bẫy chung khi có bộ lọc</h3>
<table><thead><tr><th></th><th>HNSW</th><th>IVFFlat</th></tr></thead><tbody>
<tr><td>Cấu trúc</td><td>đồ thị nhiều tầng</td><td>phân hoạch Voronoi bằng k-means</td></tr>
<tr><td>Cần dữ liệu trước khi build</td><td>không</td><td><strong>có</strong></td></tr>
<tr><td>Thêm dữ liệu sau</td><td>bồi dần, vẫn tốt</td><td>tâm cụm lệch dần → phải REINDEX</td></tr>
<tr><td>Build</td><td>chậm, ăn RAM</td><td>nhanh, nhẹ</td></tr>
<tr><td>Kích thước index</td><td>lớn (cỡ 1,5–2× dữ liệu vector; ~1,5× với m=16)</td><td>nhỏ hơn (cỡ 1–1,5×)</td></tr>
<tr><td>Truy vấn ở cùng recall</td><td>nhanh hơn</td><td>chậm hơn</td></tr>
<tr><td>Kiểu truy cập đĩa</td><td>ngẫu nhiên → sụp nếu không vừa RAM</td><td>tuần tự → chịu đĩa tốt hơn</td></tr>
<tr><td>Núm lúc query</td><td><code>hnsw.ef_search</code> (40)</td><td><code>ivfflat.probes</code> (<strong>1</strong>)</td></tr>
</tbody></table>
<p><strong>Mặc định chọn HNSW.</strong> Theo khóa học, chọn IVFFlat khi: bộ nhớ hạn chế, cần build nhanh vì dữ liệu hay được <em>cập nhật hàng loạt</em>, chấp nhận recall 90–95%, hoặc cần lặp nhanh ở môi trường dev. HNSW hợp với workload chủ yếu đọc, cập nhật nhỏ, cần recall 99%+ (bảng khóa học: insert performance IVFFlat "Fast", HNSW "Moderate"). Lưu ý README pgvector nói tâm cụm IVFFlat bị lệch khi dữ liệu đổi nhiều (mục 2.10), nên với IVFFlat "hay cập nhật" nghĩa là chấp nhận build lại định kỳ, và việc build lại rẻ.</p>
<p><strong>Cả hai đều là <em>approximate</em>, recall không bao giờ chạm 100%</strong> (trừ khi đặt <code>probes = lists</code>). Với HNSW là vì greedy search có thể kẹt ở cực trị cục bộ; với IVFFlat là vì láng giềng thật nằm ngoài các ô được quét. Đây là bản chất của đánh đổi ANN chứ không phải lỗi cấu hình — chấp nhận mất vài phần trăm recall để đổi lấy tốc độ gấp hàng chục lần seq scan.</p>
<p><strong>Họ hàng thứ ba — DiskANN</strong> (Cosmos DB, và extension <code>pg_diskann</code> trên Azure PostgreSQL) giải đúng bài mà HNSW yếu: đồ thị được nén (product quantization) và bố trí dữ liệu thân thiện SSD, nên vẫn chạy tốt khi index <em>to hơn RAM</em>. Đó là lý do nó là lựa chọn mặc định cho tập lớn trên Cosmos — xem mục 1.8 của domain này.</p>
<p><strong>Cái bẫy chung: bộ lọc được áp SAU khi quét index.</strong> Cả hai đều là index gần đúng — chúng trả về một tập ứng viên cố định (<code>ef_search</code> node, hoặc <code>probes</code> ô), rồi PostgreSQL mới lọc <code>WHERE</code> trên tập đó. Lọc chặt là <code>LIMIT 10</code> ra 2 dòng, thậm chí 0 dòng, mà <em>không</em> báo lỗi gì. Từ pgvector 0.8.0 có <strong>iterative scan</strong> để xử lý: khi chưa đủ kết quả, index tự quét tiếp.</p>
<pre><button class="copybtn">copy</button><code>SET hnsw.iterative_scan = strict_order;   -- mặc định: off
SET hnsw.max_scan_tuples = 20000;         -- trần số tuple quét thêm (mặc định 20000)
SET ivfflat.iterative_scan = relaxed_order;
SET ivfflat.max_probes = 32768;           -- trần số ô được quét thêm</code></pre>
<ul><li><code>strict_order</code> giữ đúng thứ tự khoảng cách tăng dần; <code>relaxed_order</code> cho phép trả về hơi lệch thứ tự để đổi lấy tốc độ (bọc bằng một <code>ORDER BY</code> ở ngoài nếu cần thứ tự chuẩn).</li>
<li>Cả hai <strong>mặc định <code>off</code></strong> — phải bật bằng tay, và bật ở mức session hoặc transaction chứ không khai trong index.</li>
<li>Hai cách sửa khác cho cùng bài toán, thường rẻ hơn: <strong>partial index</strong> cho giá trị lọc chiếm đa số (<code>WHERE lang = 'vi'</code> trong định nghĩa index), hoặc lấy dư rồi lọc ở ngoài (<code>LIMIT 100</code> rồi cắt còn 10).</li>
<li><em>Kiểm chứng: mọi con số và thông báo lỗi ở ba mục 2.9–2.11 đã chạy thật trên pgvector 0.8.6 trong lab — xem <code>labs/ai-200/labs/02-index-hnsw-ivfflat.sql</code> và <code>03-rag-filter-hybrid.sql</code>. Nguồn đối chiếu: <a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener">README của pgvector</a>, đọc ngày 19/09/2026.</em></li></ul>
<h3 id="02-data-services/d45-chon-toan-tu-nao">2.12 Chọn toán tử nào — <code>&lt;=&gt;</code>, <code>&lt;-&gt;</code> hay <code>&lt;#&gt;</code></h3>
<p>Bảng ở mục 2.7 nói toán tử nào đi với opclass nào. Còn câu hỏi thi hay hỏi là câu khác: <em>tình huống này thì dùng cái nào</em>. Khác biệt duy nhất giữa ba toán tử là chúng xử lý <strong>độ dài</strong> vector ra sao.</p>
<table><thead><tr><th>Toán tử</th><th>Nhạy với độ dài?</th><th>Miền giá trị</th><th>Dùng khi</th></tr></thead><tbody>
<tr><td><code>&lt;=&gt;</code> cosine</td><td><strong>Không</strong> — chỉ nhìn hướng</td><td>0 → 2</td><td><strong>Mặc định cho RAG.</strong> Chỉ quan tâm "hai đoạn văn nói cùng chuyện không"</td></tr>
<tr><td><code>&lt;-&gt;</code> L2</td><td><strong>Có</strong></td><td>0 → ∞</td><td>Khi độ dài vector mang ý nghĩa (độ tin cậy, cường độ), hoặc dữ liệu là toạ độ/đặc trưng số thật</td></tr>
<tr><td><code>&lt;#&gt;</code> inner product âm</td><td>Có</td><td>−∞ → ∞</td><td>Model được huấn luyện cho dot product, hoặc vector đã chuẩn hoá và bạn muốn nhanh nhất</td></tr>
</tbody></table>
<p>Chạy trên sáu vector đồ chơi trong <code>labs/ai-200/labs/01-vector-basics.sql</code>, mốc so sánh là <code>a = [1,0,0]</code>:</p>
<pre><button class="copybtn">copy</button><code>  name   |   l2   | neg_inner_product | cosine_distance
---------+--------+-------------------+-----------------
 a       | 0.0000 |           -1.0000 |          0.0000
 a_long  | 9.0000 |          -10.0000 |          0.0000   ← [10,0,0]
 a_tilt  | 0.1414 |           -0.9000 |          0.0061
 mixed   | 0.8944 |           -0.6000 |          0.4000
 b       | 1.4142 |            0.0000 |          1.0000
 minus_a | 2.0000 |            1.0000 |          2.0000   ← ngược hướng hoàn toàn</code></pre>
<ul><li><strong>Đọc dòng <code>a_long</code> là hiểu hết.</strong> <code>[10,0,0]</code> cùng hướng với <code>[1,0,0]</code> nhưng dài gấp mười. Cosine trả về <strong>0.0000</strong> — coi là giống hệt. L2 trả về <strong>9.0000</strong> — xếp nó xuống gần cuối. Với văn bản, độ dài vector chủ yếu phản ánh độ dài đoạn văn chứ không phản ánh nội dung, nên dùng L2 trên embedding chưa chuẩn hoá là <em>đoạn dài bị phạt oan</em>.</li>
<li><strong><code>&lt;#&gt;</code> trả về số ÂM của tích vô hướng</strong>, cốt để quy ước "nhỏ hơn = gần hơn" giữ nguyên cho cả ba toán tử — nhờ vậy lúc nào cũng <code>ORDER BY … ASC LIMIT k</code>. Đừng tưởng <code>-10.0000</code> nghĩa là xa.</li>
<li><strong>Vector đã chuẩn hoá L2 thì cosine và L2 xếp hạng y hệt nhau</strong> (giá trị khác nhau, thứ tự giống nhau) — trong bảng trên, sau khi chuẩn hoá thì cả hai cột đều cho thứ tự a, a_long, a_tilt, mixed, b, minus_a. Và khi mọi vector có độ dài 1 thì inner product <em>chính là</em> cosine similarity. Đây là lý do kiến trúc phổ biến: <strong>chuẩn hoá lúc ghi, rồi dùng <code>&lt;#&gt;</code></strong> — cosine phải tính chuẩn (norm) ở mỗi lần so sánh, inner product thì không, nên rẻ hơn mà kết quả không đổi.</li>
<li>Kiểm nhanh embedding của bạn đã chuẩn hoá chưa: <code>SELECT vector_norm(embedding) FROM …</code> — ra xấp xỉ 1.0 là rồi. Các model text-embedding-3-* và ada-002 của OpenAI đều trả về vector đã chuẩn hoá, nên với chúng ba toán tử cho cùng một thứ tự và cosine chỉ là lựa chọn theo thói quen.</li>
<li><strong>Quy tắc làm bài</strong>: mặc định là cosine. Chỉ chọn khác khi đề nói rõ "độ lớn/cường độ có ý nghĩa" (→ L2) hoặc "model được huấn luyện cho dot product" (→ inner product). Và dù chọn gì thì index phải khai đúng opclass tương ứng, nếu không index bị bỏ qua — xem mục 2.7.</li></ul>
<h3 id="02-data-services/b4-cau-hinh-compute-memory-storage-cho-vector-workload">2.13 Cấu hình compute / memory / storage cho vector workload</h3>
<ul><li><strong>Tiers</strong>: Burstable (dev) → <strong>General Purpose</strong> (đa số production) → <strong>Memory Optimized</strong> (khuyến nghị cho vector: HNSW cần <strong>index nằm gọn trong RAM</strong> để tránh đọc disk).</li><li>Quy tắc ước lượng: kích thước index HNSW ≈ số vector × chiều × 4 byte × ~1.3–2. 1M vector 1536 chiều ≈ 6 GB dữ liệu + ~8–12 GB index → cần instance ≥ 32 GB RAM (hoặc chuyển DiskANN/halfvec).</li><li><strong>Storage</strong>: IOPS gắn với dung lượng đĩa; workload build index nặng I/O → chọn <strong>Premium SSD v2</strong> để tách IOPS/throughput khỏi size.</li><li><code>shared_buffers</code> ≈ 25% RAM, <code>effective_cache_size</code> ≈ 75% RAM, <code>work_mem</code> đủ cho sort/hash (cẩn thận nhân theo số connection).</li><li>Bật <strong>High Availability (zone-redundant)</strong> cho production, read replica để tách tải đọc RAG.</li></ul>
<h3 id="02-data-services/d41-sizing-postgres-cho-vector">2.14 Sizing PostgreSQL cho vector workload</h3>
<ul><li>Quy tắc vàng: truy vấn HNSW nhanh khi <strong>index nằm gọn trong RAM</strong> (shared_buffers + page cache). Ước lượng thô kích thước dữ liệu vector: <code>số dòng × số chiều × 4 byte</code> + overhead index (HNSW cỡ 1,5–2× dữ liệu vector theo khóa học; module Optimize nói thêm HNSW index "~50%" so với cột vector) — 1 triệu vector 1536 chiều ≈ 6 GB dữ liệu, index ~9–12 GB; khóa học yêu cầu RAM lớn hơn kích thước vector index ít nhất 50% → chọn SKU Memory Optimized (tỷ lệ RAM/vCore 8:1) thay vì General Purpose (4:1).</li>
<li>Build index HNSW ăn <code>maintenance_work_mem</code>: đặt tạm thời lớn (ví dụ 8 GB) khi build rồi hạ lại; từ pgvector 0.6 build song song theo <code>max_parallel_maintenance_workers</code> — build chậm là thiếu hai thứ này, không phải thiếu vCore.</li>
<li>Storage: chọn tier IOPS đủ cho lúc index <em>không</em> vừa RAM (đọc lạnh); autogrow bật sẵn nhưng IOPS đi theo dung lượng ở một số tier — dữ liệu nhỏ mà cần IOPS cao thì nâng IOPS rời (SSD v2) thay vì phình dung lượng.</li>
<li>Triệu chứng → chỉnh gì: truy vấn vector chậm đều (index không vừa RAM → nâng RAM/SKU); chậm lúc mới khởi động rồi nhanh dần (cache nguội — bình thường); recall thấp (tăng <code>ef_search</code>, không liên quan SKU); build index cả giờ (tăng <code>maintenance_work_mem</code> + parallel workers).</li></ul>
<h3 id="02-data-services/b5-rag-voi-metadata-filter-nguyen-van-trong-outline">2.15 RAG với metadata filter (nguyên văn trong outline)</h3>
<pre><button class="copybtn">copy</button><code>-- Pre-filter bằng WHERE + ORDER BY khoảng cách + LIMIT
SELECT id, doc_id, chunk, 1 - (embedding &lt;=&gt; $1) AS similarity
FROM   doc_chunks
WHERE  tenant_id = $2
  AND  lang = 'vi'
  AND  metadata @&gt; '{"department":"finance"}'::jsonb
  AND  created_at &gt; now() - interval '365 days'
ORDER BY embedding &lt;=&gt; $1
LIMIT 5;</code></pre>
<p>Lưu ý về <strong>filter + ANN index</strong>: khi filter quá chọn lọc, HNSW/IVFFlat có thể trả về <strong>ít hơn</strong> <code>LIMIT</code> kết quả tốt (post-filter cắt mất). Cách xử lý:</p>
<ul><li>Tăng <code>hnsw.ef_search</code> / <code>ivfflat.probes</code>.</li><li>Dùng <strong>partial index</strong> cho các filter cố định: <code>CREATE INDEX ... WHERE lang='vi'</code>.</li><li>Hoặc partition theo tenant rồi index từng partition.</li><li>Kiểm chứng bằng <code>EXPLAIN (ANALYZE, BUFFERS)</code> → phải thấy <code>Index Scan using idx_chunks_hnsw</code>, không phải <code>Seq Scan</code>.</li></ul>
<p><strong>Hybrid search</strong> (BM25 + vector) bằng <code>tsvector</code> + RRF:</p>
<pre><button class="copybtn">copy</button><code>WITH sem AS (
  SELECT id, ROW_NUMBER() OVER (ORDER BY embedding &lt;=&gt; $1) AS r
  FROM doc_chunks WHERE tenant_id=$2 ORDER BY embedding &lt;=&gt; $1 LIMIT 50),
kw AS (
  SELECT id, ROW_NUMBER() OVER (ORDER BY ts_rank_cd(tsv, query) DESC) AS r
  FROM doc_chunks, websearch_to_tsquery('simple', $3) query
  WHERE tenant_id=$2 AND tsv @@ query LIMIT 50)
SELECT id, SUM(1.0/(60+r)) AS rrf
FROM (SELECT * FROM sem UNION ALL SELECT * FROM kw) u
GROUP BY id ORDER BY rrf DESC LIMIT 5;</code></pre>
<p><strong><code>azure_ai</code> extension</strong> — sinh embedding ngay trong SQL:</p>
<pre><button class="copybtn">copy</button><code>CREATE EXTENSION azure_ai;
SELECT azure_ai.set_setting('azure_openai.endpoint', 'https://xxx.openai.azure.com');
SELECT azure_ai.set_setting('azure_openai.subscription_key', '...');

UPDATE doc_chunks
SET embedding = azure_openai.create_embeddings('text-embedding-3-small', chunk)::vector
WHERE embedding IS NULL;</code></pre>
<h3 id="02-data-services/d14-postgres-trong-duong-di-cua-app-llm">2.16 PostgreSQL trong đường đi của một app LLM — token, ghi vector an toàn, truy hồi lai</h3>
<p>Các mục trước đã lo phần <em>lưu</em> và <em>đánh chỉ mục</em> vector. Mục này đi nốt quãng còn lại của một ứng dụng LLM thật: đăng nhập bằng gì, ghi embedding thế nào cho khỏi thủng, và truy hồi ra sao khi câu hỏi của người dùng vừa cần ngữ nghĩa vừa cần đúng từ khoá.</p>
<h3 id="02-data-services/d14a-entra-token-postgres">2.17 Entra ID làm mật khẩu — và cái bẫy token hết hạn</h3>
<p>Mục 2.1 đã có đoạn code lấy token. Phần dưới là những gì đoạn code đó <em>không</em> nói ra, và đều là chỗ hỏng thật khi lên production.</p>
<ul><li><strong>Token chính là mật khẩu</strong>, không có trường riêng: lấy token cho resource <code>https://ossrdbms-aad.database.windows.net</code> rồi truyền vào tham số <code>password</code>. Với <code>psql</code> thì phải qua biến môi trường <code>PGPASSWORD</code> vì chuỗi token dài hơn mức dòng lệnh nhận được.</li>
<li><strong>Hạn token: user tối đa 1 giờ; managed identity gán-hệ-thống tối đa 24 giờ.</strong> Đây là con số quyết định kiến trúc. Token chỉ được kiểm ở <em>bước đăng nhập</em>, nên app chạy liên tục sẽ hỏng theo một kiểu rất khó chẩn đoán: mọi thứ chạy ngon cả tiếng, rồi pool cần mở thêm một kết nối và <em>kết nối mới</em> đó thất bại, trong khi các kết nối cũ vẫn phục vụ bình thường.</li>
<li><strong>Cách viết đúng</strong>: đừng lấy token một lần lúc khởi động rồi nhét vào chuỗi kết nối dùng mãi. Lời gọi <code>get_token</code> phải nằm <em>trong</em> đường mở kết nối, để mỗi kết nối mới lấy một token còn hạn — với SQLAlchemy thì móc vào sự kiện <code>do_connect</code>, với psycopg_pool thì truyền <code>connection_class</code> tự viết; lưu ý <code>kwargs=dict(password=f())</code> <strong>không</strong> có tác dụng vì dict chỉ dựng một lần. <code>DefaultAzureCredential</code> đã cache token trong bộ nhớ và tự làm mới, nên gọi <code>get_token</code> mỗi lần mở kết nối là rẻ.</li>
<li><strong>Username là userPrincipalName của Entra</strong>, không phải tên role tự đặt — và <strong>phân biệt hoa thường</strong>. Tên có dấu cách thì phải escape bằng <code>\\</code>.</li>
<li><strong>Đăng nhập theo nhóm</strong>: tạo role tương ứng nhóm bằng <code>SELECT pgaadauth_create_principal('Prod DB Readonly', false, false);</code> rồi dùng <em>tên nhóm</em> làm username, token vẫn là token cá nhân của người đó. Nhóm tự đồng bộ thành viên mỗi <strong>30 phút</strong> (bật <code>pgaadauth.enable_group_sync</code>); ép đồng bộ ngay bằng <code>SELECT pgaadauth_sync_roles_for_group_members();</code>.</li>
<li><strong>Thu hồi quyền không tức thì</strong>: xoá user khỏi Entra ID thì họ <em>vẫn đăng nhập được cho tới khi token hết hạn</em> (tối đa 60 phút). Muốn chặn ngay thì phải xoá luôn role trong PostgreSQL.</li>
<li><strong>Token khớp role theo object ID của Entra, không theo tên.</strong> Xoá một user rồi tạo lại user trùng tên là Azure coi như người khác — role cũ trong database không dùng được nữa.</li>
<li>Bật Entra auth ở mức server sẽ kích hoạt extension <code>PGAadAuth</code> và <strong>khởi động lại server</strong> — không phải thao tác làm giữa giờ cao điểm.</li>
<li>Chế độ xác thực chọn được ba kiểu: chỉ PostgreSQL, chỉ Entra, hoặc cả hai. Đề mô tả "cấm hoàn toàn mật khẩu để đạt yêu cầu tuân thủ" là <em>Microsoft Entra authentication only</em>.</li>
<li><em>Nguồn: <a href="https://learn.microsoft.com/azure/postgresql/security/security-entra-concepts" target="_blank" rel="noopener">Microsoft Entra authentication in Azure Database for PostgreSQL</a> và <a href="https://learn.microsoft.com/azure/postgresql/security/security-entra-configure" target="_blank" rel="noopener">Use Microsoft Entra ID authentication</a>, đối chiếu ngày 19/09/2026.</em></li></ul>
<h3 id="02-data-services/d14b-ghi-vector-an-toan">2.18 Ghi embedding từ Python — chỗ duy nhất trong pipeline RAG dễ bị tiêm SQL</h3>
<p>pgvector nhận vector dưới dạng <strong>chuỗi</strong> <code>'[0.12,-0.34,0.56]'</code>. Chính vì là chuỗi mà người ta hay ghép thẳng vào câu SQL bằng f-string — và đó là lỗ hổng.</p>
<pre><button class="copybtn">copy</button><code># SAI — ghép chuỗi. Không chỉ là chuyện bảo mật: mỗi câu SQL một hình dạng
# khác nhau nên plan cache của Postgres không tái sử dụng được gì.
cur.execute(f"INSERT INTO doc_chunks (chunk, embedding) VALUES ('{text}', '{vec}')")

# ĐÚNG — tham số hoá. psycopg tự escape, câu SQL luôn cùng một hình dạng.
cur.execute(
    "INSERT INTO doc_chunks (tenant_id, chunk, embedding) VALUES (%s, %s, %s)",
    (tenant_id, text, str(vec)),          # vec là list[float] -> '[0.1,-0.2,...]'
)

# Ghi hàng loạt: đừng lặp execute. Một lần đi mạng cho cả lô.
from psycopg import sql
cur.executemany(
    "INSERT INTO doc_chunks (tenant_id, chunk, embedding) VALUES (%s, %s, %s)",
    rows,                                  # psycopg3 tự gộp thành pipeline
)
# Lô rất lớn (hàng trăm nghìn dòng) thì COPY nhanh hơn hẳn executemany:
with cur.copy("COPY doc_chunks (tenant_id, chunk, embedding) FROM STDIN") as cp:
    for t, c, v in rows:
        cp.write_row((t, c, str(v)))</code></pre>
<ul><li>Với <code>pgvector-python</code>, <code>register_vector(conn)</code> cho phép truyền thẳng <code>numpy.ndarray</code> hoặc <code>list</code> mà không phải tự <code>str()</code> — và khi đó không còn chỗ nào để ghép chuỗi nữa.</li>
<li><strong>Bẫy khi dùng chung với PgBouncer</strong>: psycopg3 tự chuyển câu lệnh sang <em>prepared statement</em> sau vài lần chạy giống nhau. Qua pooler ở transaction mode, việc đó hỏng trừ khi đặt <code>pgbouncer.max_prepared_statements</code> &gt; 0 (xem mục 2.2). Bên kia là tắt bằng <code>prepare_threshold=None</code>.</li>
<li><strong>psycopg vs SQLAlchemy</strong>: psycopg là driver, viết SQL thẳng — hợp với truy vấn vector vì bạn cần kiểm soát chính xác toán tử và index hint. SQLAlchemy là ORM, hợp khi bảng vector nằm chung model với phần nghiệp vụ; nó vẫn gọi psycopg ở dưới, và <code>pgvector.sqlalchemy.Vector</code> cung cấp kiểu cột.</li>
<li>Kiểm nhanh một pipeline có an toàn không: grep tìm f-string và <code>%</code> đứng cạnh <code>execute(</code>. Không có kết quả mới là sạch.</li></ul>
<h3 id="02-data-services/d14c-full-text-hybrid">2.19 Full-text search của PostgreSQL và truy hồi lai</h3>
<p>Vector search trả lời được "ý này gần ý kia", nhưng thua ở thứ người dùng gõ nhiều nhất: mã sản phẩm, tên riêng, số hiệu lỗi. <code>SKU-4471</code> và <code>SKU-4472</code> gần như trùng nhau trong không gian embedding. PostgreSQL có sẵn full-text search nên không phải thêm dịch vụ nào — đây chính là lý do chọn PostgreSQL thay vì một vector DB thuần.</p>
<pre><button class="copybtn">copy</button><code>-- Cột tsvector sinh tự động, index GIN đặt lên chính nó
ALTER TABLE doc_chunks
  ADD COLUMN fts tsvector GENERATED ALWAYS AS (to_tsvector('english', chunk)) STORED;
CREATE INDEX ON doc_chunks USING GIN (fts);

-- websearch_to_tsquery hiểu cú pháp người dùng quen: "a b" -OR- dấu ngoặc kép
SELECT chunk, ts_rank_cd(fts, q) AS diem
FROM doc_chunks, websearch_to_tsquery('english', 'vector index HNSW') q
WHERE fts @@ q
ORDER BY diem DESC LIMIT 10;</code></pre>
<ul><li><strong>Bẫy số một — biểu thức index phải khớp <em>từng chữ</em> với biểu thức trong truy vấn.</strong> Index trên <code>to_tsvector('english', chunk)</code> sẽ <em>không</em> được dùng cho <code>to_tsvector(chunk)</code> (thiếu tham số ngôn ngữ) hay <code>to_tsvector('simple', chunk)</code>. Triệu chứng là Seq Scan mà không có lỗi nào. Dùng cột <code>GENERATED</code> như trên thì hết cửa sai, vì cả hai bên đều tham chiếu đúng một cột.</li>
<li><code>plainto_tsquery</code> nối mọi từ bằng AND; <code>websearch_to_tsquery</code> hiểu dấu ngoặc kép và <code>or</code>/<code>-</code> như thanh tìm kiếm web — với đầu vào là câu hỏi người dùng thì gần như luôn chọn cái sau. <code>to_tsquery</code> đòi cú pháp toán tử tường minh và <strong>ném lỗi</strong> nếu người dùng gõ sai, nên đừng đưa thẳng input vào nó.</li>
<li><code>ts_rank_cd</code> tính cả khoảng cách giữa các từ khớp (cover density), thường sát ý người đọc hơn <code>ts_rank</code>. Cả hai <em>không</em> phải BM25 — Postgres không có BM25 sẵn, và điểm của nó không so sánh được giữa hai truy vấn khác nhau.</li>
<li><strong>GIN hay GiST</strong>: GIN tra nhanh hơn nhiều, build chậm hơn và nặng hơn — đúng cho corpus RAG vốn ghi một lần đọc nhiều. GiST chỉ hợp khi cập nhật liên tục.</li>
<li>Tiếng Việt không có bộ cấu hình dựng sẵn. Dùng <code>'simple'</code> (vẫn tách token như thường nhưng <em>không</em> stem và <em>không</em> bỏ stop word) là chạy được và bắt đúng mã/số hiệu; muốn hơn thế thì phải cài dictionary riêng.</li></ul>
<p><strong>Hợp nhất hai bảng xếp hạng — RRF.</strong> Điểm cosine (0–2) và điểm <code>ts_rank_cd</code> (không chặn trên) không cùng thang, nên cộng thẳng cần trọng số và dễ lệch. Khóa học vẫn dạy dạng tổng có trọng số <code>(1 - (embedding &lt;=&gt; $1)) * 0.7 + ts_rank(...) * 0.3</code> (xem mục mới "Truy hồi ngữ nghĩa"); RRF là cách bền hơn vì chỉ dùng thứ hạng. Đề có thể ra cả hai dạng. Reciprocal Rank Fusion bỏ qua điểm và chỉ dùng <em>thứ hạng</em>:</p>
<pre><button class="copybtn">copy</button><code>WITH vec AS (
  SELECT id, row_number() OVER (ORDER BY embedding &lt;=&gt; %(q_vec)s) AS rnk
  FROM doc_chunks WHERE tenant_id = %(tid)s ORDER BY embedding &lt;=&gt; %(q_vec)s LIMIT 20
), fts AS (
  SELECT id, row_number() OVER (ORDER BY ts_rank_cd(fts, q) DESC) AS rnk
  FROM doc_chunks, websearch_to_tsquery('english', %(q_text)s) q
  WHERE tenant_id = %(tid)s AND fts @@ q LIMIT 20
)
SELECT c.id, c.chunk,
       COALESCE(1.0/(60 + vec.rnk), 0) + COALESCE(1.0/(60 + fts.rnk), 0) AS rrf
FROM doc_chunks c
LEFT JOIN vec ON vec.id = c.id
LEFT JOIN fts ON fts.id = c.id
WHERE vec.id IS NOT NULL OR fts.id IS NOT NULL
ORDER BY rrf DESC LIMIT 10;</code></pre>
<ul><li>Hằng <strong>60</strong> là giá trị chuẩn trong bài báo gốc về RRF; nó làm phẳng chênh lệch giữa hạng 1 và hạng 2 để một nhánh không áp đảo nhánh kia. Tăng lên là hai nhánh cân bằng hơn, giảm xuống là ưu ái mạnh cho hạng đầu.</li>
<li><code>COALESCE</code> và <code>LEFT JOIN</code> là bắt buộc: một chunk trúng ở nhánh này thường trượt ở nhánh kia, và đó chính là những chunk mà hybrid search sinh ra để cứu.</li>
<li><strong>Việc hợp nhất nằm ở tầng ứng dụng hoặc một câu SQL bạn tự viết — PostgreSQL không có tính năng "hybrid search" nào cả.</strong> Đây là khác biệt so với Azure AI Search, vốn có sẵn <code>hybrid</code> và semantic ranker.</li>
<li>Lọc theo <code>tenant_id</code> phải đặt <em>trong cả hai nhánh</em>. Lọc sau khi hợp nhất là mỗi nhánh vẫn phải quét toàn bộ tenant khác, và số kết quả trả về sẽ hụt — cùng một lỗi với bài lab 03 của pgvector.</li>
<li><em>Nguồn: <a href="https://www.postgresql.org/docs/current/textsearch-controls.html" target="_blank" rel="noopener">PostgreSQL — Controlling Text Search</a> và <a href="https://github.com/pgvector/pgvector#hybrid-search" target="_blank" rel="noopener">pgvector — hybrid search</a>, đối chiếu ngày 19/09/2026. Truy vấn RRF ở trên chạy được trong lab: <code>labs/ai-200/labs/03-rag-filter-hybrid.sql</code>.</em></li></ul>
<h3 id="02-data-services/d11-explain">2.20 Đọc kế hoạch truy vấn PostgreSQL — <code>EXPLAIN (ANALYZE, BUFFERS)</code></h3>
<p>Outline yêu cầu "optimizing query latency". Trên thực tế điều đó có nghĩa là: đọc được kế hoạch truy vấn và biết con số nào tố cáo vấn đề gì.</p>
<pre><button class="copybtn">copy</button><code>EXPLAIN (ANALYZE, BUFFERS)
SELECT id, chunk
FROM   doc_chunks
WHERE  tenant_id = '...' AND lang = 'vi'
ORDER BY embedding &lt;=&gt; $1
LIMIT  10;
</code></pre>
<table><thead><tr><th>Thấy gì trong kế hoạch</th><th>Nghĩa là</th><th>Làm gì</th></tr></thead><tbody>
<tr><td><code>rows=1000</code> nhưng <code>actual rows=900000</code></td><td>Statistics lệch, planner chọn sai chiến lược</td><td><code>ANALYZE doc_chunks;</code>, tăng <code>default_statistics_target</code> cho cột lệch phân bố</td></tr>
<tr><td><code>Seq Scan</code> trên bảng lớn</td><td>Thiếu index, hoặc index <em>không dùng được</em></td><td>Kiểm tra ép kiểu ngầm, hàm bọc quanh cột (<code>WHERE lower(email) = …</code> cần index trên biểu thức), opclass lệch toán tử</td></tr>
<tr><td><code>Rows Removed by Filter</code> rất cao</td><td>Index kéo về quá nhiều dòng rồi mới lọc</td><td>Composite index đúng thứ tự lọc, hoặc partial index cho nhánh nóng</td></tr>
<tr><td><code>Nested Loop</code> với vòng ngoài nhiều dòng</td><td>Planner tưởng vòng ngoài nhỏ</td><td>Sửa statistics; tập lớn nên là Hash Join hoặc Merge Join</td></tr>
<tr><td><code>shared read=</code> lớn, <code>shared hit=</code> nhỏ</td><td>Đọc từ đĩa chứ không từ cache</td><td>Thiếu RAM so với working set — đúng triệu chứng index HNSW không vừa bộ nhớ ở mục 2.14</td></tr>
<tr><td>Không thấy <code>Index Scan using …_hnsw_idx</code></td><td>Truy vấn vector không dùng index</td><td>Thiếu <code>ORDER BY … LIMIT</code>, hoặc toán tử không khớp opclass của index</td></tr>
</tbody></table>
<ul><li><code>EXPLAIN</code> trần chỉ <strong>ước lượng</strong> và không chạy truy vấn; <code>ANALYZE</code> chạy thật nên đừng dùng với <code>UPDATE</code>/<code>DELETE</code> ngoài transaction có <code>ROLLBACK</code>. <code>BUFFERS</code> mới là thứ cho biết dữ liệu đến từ cache hay đĩa.</li>
<li><code>ANALYZE</code> (lệnh riêng) lấy <strong>mẫu ngẫu nhiên</strong> để cập nhật statistics — nhanh, nên chạy sau mỗi lần nạp dữ liệu lớn. Đừng nhầm với tuỳ chọn <code>ANALYZE</code> bên trong <code>EXPLAIN</code>.</li>
<li>Xếp hạng truy vấn tốn kém nhất: bật extension <strong><code>pg_stat_statements</code></strong> rồi sắp theo <code>total_exec_time</code>. Trên Azure Database for PostgreSQL flexible server còn có <strong>Query Store</strong> (tham số <code>pg_qs.query_capture_mode</code>) lưu lịch sử truy vấn để so sánh theo thời gian.</li>
<li>Bản thân phép đo của <code>EXPLAIN ANALYZE</code> có overhead, nên đọc theo hướng <em>so sánh tương đối</em> giữa các nhánh của kế hoạch, đừng coi là con số latency thật của production.</li></ul>
<h3 id="02-data-services/d12-mvcc-vacuum">2.21 MVCC, autovacuum, transaction và lock — vì sao bảng phình và truy vấn chậm dần</h3>
<p>Mục 2.5 đã nói tới bloat như một triệu chứng. Đây là cơ chế đứng sau nó, và là phần giải thích tại sao "đã xoá dữ liệu rồi mà dung lượng không giảm".</p>
<ul><li><strong>MVCC</strong>: <code>UPDATE</code> và <code>DELETE</code> <em>không</em> xoá dòng cũ ngay. Postgres tạo version mới và giữ version cũ cho tới khi không transaction nào còn cần nhìn thấy nó. Phần còn lại đó là <strong>dead tuple</strong>. Hệ quả: một lần <code>UPDATE</code> cột embedding của cả bảng làm bảng và index to gần gấp đôi.</li></ul>
<table><thead><tr><th></th><th><code>VACUUM</code></th><th><code>VACUUM FULL</code></th></tr></thead><tbody>
<tr><td>Khoá</td><td><code>SHARE UPDATE EXCLUSIVE</code> — đọc và ghi vẫn chạy</td><td><code>ACCESS EXCLUSIVE</code> — <strong>chặn tất cả</strong></td></tr>
<tr><td>Dung lượng</td><td>Đánh dấu để tái sử dụng, <strong>không trả lại OS</strong></td><td>Viết lại bảng, <strong>trả dung lượng về OS</strong></td></tr>
<tr><td>Chi phí</td><td>Nhẹ, chạy được lúc production</td><td>Chậm, cần thêm chỗ trống bằng cỡ bảng</td></tr>
</tbody></table>
<ul><li>Đây là câu trả lời cho "đã <code>DELETE</code> mà dung lượng đĩa không giảm": <code>VACUUM</code> thường chỉ giải phóng chỗ <em>bên trong</em> file để ghi tiếp. Muốn thu hồi thật thì <code>VACUUM FULL</code> (khoá bảng) hoặc <code>pg_repack</code>, và tốt hơn cả là đừng <code>DELETE</code> hàng loạt mà dùng partition như mục 2.5.</li>
<li><strong>autovacuum kích hoạt</strong> khi số dead tuple vượt <code>autovacuum_vacuum_threshold</code> (mặc định 50) cộng <code>autovacuum_vacuum_scale_factor</code> × số dòng của bảng. Với bảng rất lớn, vế nhân chi phối: bảng 200 triệu dòng phải tích luỹ hàng chục triệu dead tuple mới được dọn. Bảng nóng nên chỉnh riêng thay vì đổi toàn server:<br><code>ALTER TABLE doc_chunks SET (autovacuum_vacuum_scale_factor = 0.02);</code></li>
<li><strong>Kẻ thù số một của autovacuum là transaction mở lâu.</strong> Một phiên <code>idle in transaction</code> hay một replication slot bị bỏ quên giữ lại snapshot cũ, nên dead tuple <em>không được phép</em> dọn dù autovacuum chạy đều. Soi bằng <code>SELECT * FROM pg_stat_activity WHERE state = 'idle in transaction';</code> và đặt <code>idle_in_transaction_session_timeout</code>.</li>
<li>autovacuum <strong>bỏ qua bảng cha của partition và foreign table</strong> — phải <code>ANALYZE</code> tay cho bảng cha, nếu không planner ước lượng sai trên toàn bộ phân vùng.</li>
<li><strong>Transaction ID wraparound</strong>: XID là số 32 bit nên quay vòng sau ~4 tỷ transaction. <code>VACUUM</code> đánh dấu dòng cũ là <em>frozen</em> để chúng luôn được coi là quá khứ. <code>autovacuum_freeze_max_age</code> (mặc định 200 triệu) ép autovacuum chạy dù bảng không có dead tuple; còn dưới 3 triệu XID khả dụng thì server <strong>từ chối transaction ghi mới</strong> — sự cố nghiêm trọng nhất của một Postgres bị bỏ bê.</li></ul>
<h3 id="02-data-services/d121-isolation-lock">2.22 Isolation level và lock khi migrate</h3>
<ul><li><strong>Read Committed</strong> (mặc định): mỗi <em>câu lệnh</em> nhìn một snapshot mới, nên hai lần <code>SELECT</code> trong cùng transaction có thể ra khác nhau. <strong>Repeatable Read</strong>: khoá snapshot cho cả transaction. <strong>Serializable</strong>: chặt nhất, và app <strong>phải có vòng retry</strong> vì transaction có thể bị huỷ với lỗi <em>could not serialize access</em>.</li>
<li><code>ALTER TABLE … ADD COLUMN … DEFAULT &lt;hằng&gt;</code> chỉ sửa metadata nên nhanh; nhưng <code>ALTER COLUMN … TYPE</code> viết lại cả bảng và giữ <code>ACCESS EXCLUSIVE</code>.</li>
<li>Điểm chí mạng khi migrate: một lệnh DDL cần <code>ACCESS EXCLUSIVE</code> sẽ <strong>xếp hàng sau truy vấn dài đang chạy, và mọi truy vấn đến sau lại xếp hàng sau nó</strong> — một lệnh "chạy 10 mili giây" có thể làm đứng cả hệ thống vài phút. Luôn đặt <code>SET lock_timeout = '3s';</code> trước DDL và thử lại, thay vì để nó chờ vô hạn.</li>
<li>Tạo index trên bảng đang chạy: <code>CREATE INDEX CONCURRENTLY</code> không khoá ghi (chậm hơn, quét hai lượt); nếu lỗi giữa chừng nó để lại index <code>INVALID</code> — phải <code>DROP INDEX</code> rồi làm lại.</li>
<li><em>Nguồn: <a href="https://www.postgresql.org/docs/current/routine-vacuuming.html" target="_blank" rel="noopener">PostgreSQL — Routine Vacuuming</a> (MVCC, VACUUM vs VACUUM FULL, công thức autovacuum, wraparound), đối chiếu ngày 18/09/2026.</em></li></ul>
<h3 id="02-data-services/khoa-pg-kien-truc-backup">2.23 Kiến trúc, backup và point-in-time restore của Flexible Server</h3>
<p>Các mục trên đã nói kỹ về tier theo góc nhìn vector. Mục này bù phần "dịch vụ managed lo gì cho bạn" mà unit mở đầu khóa học hỏi: compute tách khỏi storage, backup giữ bao lâu, restore ra cái gì.</p>
<ul><li><strong>Compute và storage tách rời</strong>: engine chạy trên một VM Linux, file dữ liệu nằm trên Azure managed storage (có bản sao locally redundant sẵn). Nhờ vậy scale compute và storage độc lập với nhau. Đổi tier sau khi triển khai được, đổi lại là <strong>server khởi động lại một lúc ngắn</strong>.</li>
<li>Ba tier ứng với ba dòng VM: <strong>Burstable = B-series</strong> (CPU nền, burst khi cần), <strong>General Purpose = D-series</strong>, <strong>Memory Optimized = E-series</strong>.</li>
<li><strong>Backup tự động</strong>: mặc định giữ <strong>7 ngày</strong>, kéo dài được tới <strong>35 ngày</strong>. Backup gồm snapshot đầy đủ và transaction log, nên khôi phục được về <em>bất kỳ giây nào</em> trong thời gian giữ. Region có availability zone thì lưu trên zone-redundant storage, region không có thì dùng locally redundant. Mã hoá AES 256-bit, mặc định bằng platform-managed key, muốn tự giữ khoá thì dùng customer-managed key.</li>
<li><strong>Point-in-time restore luôn tạo một server MỚI</strong>, không ghi đè server đang chạy. Dùng khi lỡ tay sửa dữ liệu, hoặc cần kiểm thử trên trạng thái cũ của database.</li>
<li>Ngoài pgvector, khóa học nêu thêm hai extension hay dùng cho AI: <strong><code>pg_trgm</code></strong> (so khớp chuỗi gần đúng theo trigram, dùng cho autocomplete và fuzzy match) và <strong><code>hstore</code></strong> (một cột chứa các cặp key-value, dùng khi chưa cần đủ độ linh hoạt của JSONB). Kiểm tra phiên bản bằng <code>SHOW server_version;</code>.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "khôi phục database về 10:42 hôm qua mà không ảnh hưởng server production" → đáp án là point-in-time restore, <strong>ra server mới</strong>. Đề hỏi giữ backup 60 ngày thì PITR không làm được, vì trần là 35 ngày.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/build-query-azure-database-postgresql/2-explore-azure-database-postgresql" target="_blank" rel="noopener">Build and query with Azure Database for PostgreSQL — Explore Azure Database for PostgreSQL</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/khoa-pg-tls-sslmode">2.24 TLS và sáu giá trị <code>sslmode</code></h3>
<p>Mọi ví dụ trong tài liệu đang dùng <code>sslmode=require</code>. Khóa học yêu cầu biết đủ sáu mức và biết mức nào là mức nên dùng cho production.</p>
<ul><li>Server <strong>bắt buộc TLS</strong> và chỉ nhận <strong>TLS 1.2 và 1.3</strong>. Client dùng TLS cũ hơn sẽ bị từ chối.</li></ul>
<div class="tablewrap"><table><thead><tr><th><code>sslmode</code></th><th>Mã hoá</th><th>Kiểm chứng chỉ</th><th>Trên Azure</th></tr></thead><tbody>
<tr><td><code>disable</code></td><td>Không</td><td>Không</td><td><strong>Bị từ chối</strong></td></tr>
<tr><td><code>allow</code></td><td>Chỉ khi server đòi</td><td>Không</td><td>Chạy được, không kiểm server</td></tr>
<tr><td><code>prefer</code></td><td>Khi server hỗ trợ</td><td>Không</td><td>Chạy được, không kiểm server</td></tr>
<tr><td><code>require</code></td><td>Bắt buộc</td><td>Không</td><td>Chạy được, không kiểm server</td></tr>
<tr><td><code>verify-ca</code></td><td>Bắt buộc</td><td>Kiểm CA</td><td>Cần root CA</td></tr>
<tr><td><code>verify-full</code></td><td>Bắt buộc</td><td>Kiểm CA <strong>và hostname</strong></td><td><strong>Khuyến nghị cho production</strong></td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code># Kiểm đủ CA + hostname (production)
postgresql://myuser:mypassword@myserver.postgres.database.azure.com/mydb?sslmode=verify-full&amp;sslrootcert=/etc/ssl/certs/ca-certificates.crt

# Đi qua PgBouncer (cổng 6432)
postgresql://myuser:mypassword@myserver.postgres.database.azure.com:6432/mydb?sslmode=require</code></pre>
<ul><li><code>verify-ca</code>/<code>verify-full</code> cần client có root CA đã ký chứng chỉ server. Phần lớn hệ điều hành và môi trường Azure đã có sẵn root CA của <strong>DigiCert và Microsoft</strong>. Nếu kiểm chứng chỉ thất bại thì tải root certificate từ PKI repository của Microsoft rồi trỏ <code>sslrootcert</code> vào đó.</li>
<li>Khi không đăng nhập bằng Entra (app cũ, identity ngoài tenant), khóa học yêu cầu: giữ mật khẩu trong <strong>Key Vault</strong> chứ không để trong cấu hình app, xoay vòng định kỳ, sinh ngẫu nhiên, và cấp mỗi user quyền tối thiểu. Tài khoản admin khai lúc tạo server là tài khoản PostgreSQL authentication.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "mã hoá kết nối <em>và</em> chống giả mạo server (man-in-the-middle)" → <code>verify-full</code>. <code>require</code> chỉ mã hoá chứ không kiểm tra mình đang nói chuyện với ai.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/build-query-azure-database-postgresql/3-connect-to-postgresql" target="_blank" rel="noopener">Build and query with Azure Database for PostgreSQL — Connect to PostgreSQL</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/khoa-pg-schema-quan-he">2.25 Database, schema, khoá ngoại và DDL trong transaction</h3>
<p>Mục 2.3 đã nói cách chọn kiểu cột. Mục này bù phần tổ chức và quan hệ giữa các bảng mà khóa học dạy, gồm hai câu hỏi hay gặp: tách database hay tách schema, và <code>ON DELETE</code> nào xoá lan sang bảng con.</p>
<ul><li><strong>Thứ bậc</strong>: server chứa nhiều database, database chứa schema, schema chứa bảng. Một kết nối trỏ vào <em>một</em> database và không truy vấn thẳng được object ở database khác trên cùng server. Schema mặc định là <code>public</code>.</li></ul>
<div class="tablewrap"><table><thead><tr><th>Tách bằng</th><th>Khi nào</th></tr></thead><tbody>
<tr><td><strong>Database riêng</strong></td><td>Cần cô lập hoàn toàn, nhiều app dùng chung server nhưng không được thấy dữ liệu của nhau, cần backup/restore độc lập</td></tr>
<tr><td><strong>Schema riêng</strong></td><td>Object cần tham chiếu nhau bằng foreign key, cần JOIN chéo namespace, tách logic cho multitenant hoặc để dễ phân quyền</td></tr>
</tbody></table></div>
<div class="tablewrap"><table><thead><tr><th>Referential action</th><th>Khi xoá/sửa dòng cha</th></tr></thead><tbody>
<tr><td><code>RESTRICT</code> (<strong>mặc định</strong>)</td><td>Chặn thao tác nếu còn dòng con tham chiếu</td></tr>
<tr><td><code>CASCADE</code></td><td>Xoá/sửa luôn mọi dòng con</td></tr>
<tr><td><code>SET NULL</code></td><td>Đặt khoá ngoại ở dòng con thành NULL</td></tr>
<tr><td><code>SET DEFAULT</code></td><td>Đặt khoá ngoại về giá trị mặc định</td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code>-- Many-to-many: bảng nối với khoá chính ghép, mỗi cặp chỉ xuất hiện một lần
CREATE TABLE conversation_tags (
    conversation_id BIGINT REFERENCES conversations(id) ON DELETE CASCADE,
    tag_id          BIGINT REFERENCES tags(id)          ON DELETE CASCADE,
    PRIMARY KEY (conversation_id, tag_id)
);

-- DDL chạy được trong transaction: lỗi giữa chừng thì ROLLBACK, schema nguyên vẹn
BEGIN;
ALTER TABLE conversations ADD COLUMN category VARCHAR(100);
CREATE INDEX idx_conversations_category ON conversations(category);
COMMIT;</code></pre>
<ul><li>Khoá chính: <code>SERIAL</code> là 32 bit, <code>BIGSERIAL</code> là 64 bit (bảng có thể vượt ~2 tỷ dòng thì chọn cái sau). <code>UUID</code> dùng <code>DEFAULT gen_random_uuid()</code>. PostgreSQL tự tạo index cho primary key và unique constraint.</li>
<li><strong>Thứ tự cột trong composite index quan trọng</strong>: index <code>(conversation_id, created_at)</code> phục vụ được truy vấn lọc theo cột đầu, nhưng <em>không</em> phục vụ truy vấn chỉ lọc theo <code>created_at</code>.</li>
<li>App ghi nhiều (lưu mọi message) thì cân nhắc từng index, vì mỗi index làm chậm INSERT/UPDATE/DELETE và tốn thêm đĩa.</li>
<li><code>DROP TABLE</code> bị chặn khi bảng khác còn foreign key trỏ vào. <code>DROP TABLE … CASCADE</code> gỡ luôn các constraint đó, có thể đụng tới bảng bạn không định sửa.</li>
<li>File nhị phân nhỏ đi kèm dòng thì dùng <code>BYTEA</code>. File lớn thì để trên Blob Storage, database chỉ giữ đường dẫn tham chiếu.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "xoá một conversation thì message của nó phải biến mất theo" → <code>ON DELETE CASCADE</code> ở cột khoá ngoại của bảng <em>con</em> (<code>messages</code>). Không khai gì thì mặc định là RESTRICT, và lệnh xoá dòng cha báo lỗi.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/build-query-azure-database-postgresql/4-create-manage-schemas" target="_blank" rel="noopener">Build and query with Azure Database for PostgreSQL — Create and manage schemas</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/khoa-pg-truy-van-dac-thu">2.26 Truy vấn đặc thù PostgreSQL: alias, JSONB, keyset pagination, CTE, RETURNING, upsert</h3>
<p>Unit "Query data" dạy những tính năng SQL riêng của PostgreSQL mà một app AI dùng hằng ngày: lưu lịch sử hội thoại, checkpoint của task, metadata dạng JSONB. Tài liệu hiện có chưa nói tới các tính năng này.</p>
<p><strong>Thứ tự thực thi logic và phạm vi của alias.</strong> Thứ tự là <code>FROM</code> → <code>WHERE</code> → <code>GROUP BY</code> → <code>HAVING</code> → <code>SELECT</code> → <code>ORDER BY</code> → <code>LIMIT/OFFSET</code>. Vì vậy alias khai ở <code>SELECT</code> chỉ dùng được ở <code>ORDER BY</code> và <code>LIMIT</code>.</p>
<pre><button class="copybtn">copy</button><code>-- LỖI: column "msg_date" does not exist, vì WHERE chạy trước SELECT
SELECT DATE(created_at) AS msg_date, content FROM messages WHERE msg_date &gt; '2024-01-01';
-- ĐÚNG: lặp lại biểu thức trong WHERE; ORDER BY thì dùng alias được
SELECT DATE(created_at) AS msg_date, content FROM messages
WHERE DATE(created_at) &gt; '2024-01-01' ORDER BY msg_date;</code></pre>
<div class="tablewrap"><table><thead><tr><th>Cú pháp</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td><code>ILIKE '%error%'</code></td><td>So khớp mẫu không phân biệt hoa thường, không cần <code>LOWER()</code></td></tr>
<tr><td><code>ORDER BY ended_at NULLS LAST</code></td><td>Mặc định NULL được sắp như <em>lớn hơn mọi giá trị</em>; <code>NULLS FIRST/LAST</code> ghi đè điều đó</td></tr>
<tr><td><code>COALESCE(title, 'Untitled')</code></td><td>Trả về giá trị khác NULL đầu tiên</td></tr>
<tr><td><code>metadata-&gt;'tags'</code> / <code>metadata-&gt;&gt;'status'</code></td><td><code>-&gt;</code> trả về JSON, <code>-&gt;&gt;</code> trả về <strong>text</strong> (dùng khi so sánh/hiển thị)</td></tr>
<tr><td><code>data#&gt;'{results,0,score}'</code> / <code>#&gt;&gt;</code></td><td>Đi theo đường dẫn lồng nhau, trả về JSON / text</td></tr>
<tr><td><code>metadata ? 'priority'</code></td><td>Kiểm tra key có tồn tại không</td></tr>
<tr><td><code>data @&gt; '{"status":"completed"}'</code></td><td>Kiểm tra chứa (containment). Cả <code>?</code> và <code>@&gt;</code> đều dùng được GIN index</td></tr>
<tr><td><code>jsonb_array_elements_text(c.metadata-&gt;'tags')</code></td><td>Bung mảng JSONB thành các dòng để lọc hoặc gộp</td></tr>
</tbody></table></div>
<p><strong>Keyset pagination thay cho OFFSET.</strong> Với OFFSET, trang 1.000 (20 dòng mỗi trang) phải quét 20.000 dòng rồi bỏ đi 19.980 dòng. Keyset nhớ giá trị của dòng cuối trang trước rồi lọc từ đó, nên tốc độ đều nhau ở mọi độ sâu:</p>
<pre><button class="copybtn">copy</button><code>SELECT id, conversation_id, content, created_at
FROM messages
WHERE (created_at, id) &lt; ('2024-06-15 10:30:00', 12345)   -- giá trị của dòng cuối trang trước
ORDER BY created_at DESC, id DESC
LIMIT 20;</code></pre>
<ul><li>Cột <code>id</code> nằm trong cả <code>ORDER BY</code> và <code>WHERE</code> để phân định các dòng trùng timestamp. Sắp tăng dần thì đổi <code>&lt;</code> thành <code>&gt;</code> và <code>DESC</code> thành <code>ASC</code>.</li></ul>
<p><strong>CTE và recursive CTE.</strong> CTE chia truy vấn phức tạp thành từng bước có tên. Recursive CTE duyệt dữ liệu dạng cây (task cha–con, thread reply) và <strong>luôn cần điều kiện dừng</strong> theo độ sâu, phòng dữ liệu có vòng lặp:</p>
<pre><button class="copybtn">copy</button><code>WITH RECURSIVE thread AS (
    SELECT id, parent_id, content, role, 0 AS depth
    FROM messages WHERE id = :root_message_id          -- anchor
    UNION ALL
    SELECT m.id, m.parent_id, m.content, m.role, t.depth + 1
    FROM messages m JOIN thread t ON m.parent_id = t.id
    WHERE t.depth &lt; 50                                  -- chặn vòng lặp vô hạn
)
SELECT * FROM thread ORDER BY depth, id;</code></pre>
<p><strong><code>RETURNING</code> và upsert <code>ON CONFLICT</code></strong>, đều xong trong một round trip:</p>
<pre><button class="copybtn">copy</button><code>INSERT INTO messages (conversation_id, role, content)
VALUES (1, 'user', 'Hello')
RETURNING id, created_at;                  -- lấy id/timestamp sinh tự động, không cần SELECT thêm

INSERT INTO task_checkpoints (task_id, step_number, checkpoint_data)
VALUES (:task_id, :step_number, :checkpoint_json::jsonb)
ON CONFLICT (task_id, step_number)
DO UPDATE SET checkpoint_data = EXCLUDED.checkpoint_data, updated_at = CURRENT_TIMESTAMP
RETURNING id, created_at, (xmax = 0) AS is_new;   -- true = vừa chèn, false = vừa cập nhật

INSERT INTO tags (name) VALUES ('important') ON CONFLICT (name) DO NOTHING;</code></pre>
<ul><li><code>EXCLUDED</code> là bảng giả chứa giá trị <em>định chèn</em>. <code>DO UPDATE</code> nhận thêm <code>WHERE</code> để chỉ cập nhật khi giá trị thật sự thay đổi.</li>
<li>Upsert là cách chuẩn để ghi idempotent, ví dụ ghi checkpoint của agent: chạy lại cùng một bước không sinh dòng trùng.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "phân trang lịch sử chat càng về sau càng chậm" → đổi sang keyset pagination, không phải thêm index cho OFFSET. Và <code>-&gt;</code> trả về JSON nên <code>metadata-&gt;'status' = 'done'</code> không so được với chuỗi. Phải dùng <code>-&gt;&gt;</code>.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/build-query-azure-database-postgresql/5-query-data" target="_blank" rel="noopener">Build and query with Azure Database for PostgreSQL — Query data</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/khoa-pg-psycopg-loi-timeout">2.27 psycopg trong ứng dụng: timeout, retry và bắt đúng loại lỗi</h3>
<p>Mục 2.18 đã nói về tham số hoá và COPY. Mục này bù phần còn thiếu: cài psycopg thế nào, loại lỗi nào nên retry, loại nào không, và timeout đặt ở đâu.</p>
<ul><li>Cài bằng <code>pip install "psycopg[binary]"</code>. Bản binary kèm sẵn thư viện đã biên dịch nên máy dev không cần cài client PostgreSQL. Production muốn biên dịch với libpq cụ thể thì cài bản không có <code>[binary]</code> và cần sẵn header phát triển của <code>libpq</code>.</li>
<li>Hai tầng <code>with</code>: tầng ngoài quản lý connection, tầng trong quản lý cursor, nên kết nối vẫn được đóng khi có exception. Placeholder là <code>%s</code> (vị trí) hoặc <code>%(name)s</code> (theo tên).</li>
<li>Lấy kết quả: <code>fetchone()</code> khi chờ một dòng, <code>fetchall()</code> cho tập nhỏ, <strong>lặp thẳng trên cursor</strong> cho tập lớn để khỏi nạp hết vào RAM.</li></ul>
<pre><button class="copybtn">copy</button><code>conn = psycopg.connect(
    connection_string,
    connect_timeout=10,                        # giây chờ mở kết nối
    options="-c statement_timeout=30000"       # mili giây tối đa cho một câu lệnh
)</code></pre>
<div class="tablewrap"><table><thead><tr><th>Lỗi</th><th>Nguyên nhân</th><th>Xử lý</th></tr></thead><tbody>
<tr><td><code>OperationalError</code></td><td>Mất mạng, server restart/failover, timeout</td><td><strong>Retry</strong> với exponential backoff + jitter: chờ <code>(2 ** attempt) + random.uniform(0, 1)</code> giây, có số lần tối đa</td></tr>
<tr><td><code>UniqueViolation</code>, <code>ForeignKeyViolation</code>, <code>CheckViolation</code></td><td>Vi phạm ràng buộc</td><td><strong>Không retry</strong>. Rollback transaction rồi báo lỗi có nghĩa cho người dùng</td></tr>
<tr><td><code>DeadlockDetected</code></td><td>Hai transaction chờ khoá của nhau, PostgreSQL tự huỷ một bên</td><td>Rollback rồi retry. Phòng ngừa bằng cách lấy khoá theo cùng một thứ tự</td></tr>
<tr><td><code>LockNotAvailable</code></td><td>Hết thời gian chờ khoá</td><td>Xử lý như deadlock</td></tr>
<tr><td>Lỗi cú pháp</td><td>Code sai</td><td><strong>Không retry</strong>, phải sửa code</td></tr>
<tr><td><code>PoolTimeout</code> (psycopg_pool)</td><td>Mọi kết nối trong pool đều đang bận</td><td>Trả lỗi rõ ràng kiểu <code>{"error": "Service temporarily busy, please retry"}</code> để client tự retry. Xảy ra thường xuyên thì phải scale</td></tr>
</tbody></table></div>
<ul><li>Timeout gợi ý: app web thường 5–30 giây, batch job dài hơn. Với vector search phức tạp, khóa học coi 30 giây là hợp lý; app tương tác nên thấp hơn.</li>
<li>Hầu hết driver PostgreSQL <strong>tự dùng prepared statement</strong> cho truy vấn tham số hoá: parse và lập plan một lần, dùng lại nhiều lần. Xem mục 2.18 về xung đột của cơ chế này với PgBouncer.</li>
<li>Ngưỡng ghi hàng loạt theo khóa học: <code>executemany</code> hợp với vài trăm tới vài nghìn dòng; từ <strong>10.000 dòng trở lên</strong> thì dùng <code>COPY</code>, thường nhanh gấp <strong>2–10 lần</strong> INSERT từng dòng. <code>COPY</code> nạp được hàng trăm nghìn dòng mỗi giây, còn INSERT lẻ chỉ vài nghìn.</li>
<li>Lấy embedding của nhiều item thì dùng <strong>một</strong> câu <code>WHERE id = ANY(%s)</code> với một list id, thay vì lặp từng câu.</li>
<li>Chạy song song nhiều truy vấn (tìm trên nhiều collection cùng lúc) thì dùng <code>AsyncConnectionPool</code> của psycopg_pool với <code>asyncio.gather</code>.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> đề cho đoạn retry bắt <em>mọi</em> exception rồi hỏi lỗi gì. Retry một <code>UniqueViolation</code> chỉ lặp lại cùng một lỗi. Khóa học chỉ retry <code>OperationalError</code> (lỗi tạm thời) và deadlock/lock timeout.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/build-query-azure-database-postgresql/6-integrate-sdks-apps" target="_blank" rel="noopener">Build and query — Integrate SDKs and applications</a> và <a href="https://learn.microsoft.com/en-us/training/modules/optimize-vector-search-azure-database-postgresql/6-connection-optimization" target="_blank" rel="noopener">Optimize vector search — Connection optimization</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/khoa-pg-ket-noi-quy-mo-lon">2.28 Kết nối ở quy mô lớn: trần theo SKU, ba pool mode, pool phía app và <code>SET LOCAL</code></h3>
<p>Mục 2.2 đã có PgBouncer và transaction pooling. Khóa học còn cho con số cụ thể về trần kết nối, so sánh đủ ba pool mode, và cách chia kích thước pool cho nhiều instance. Đây là các chi tiết dễ ra thành câu tính toán.</p>
<ul><li>Mở một kết nối mới mất <strong>50–200 ms</strong>: TCP handshake → TLS → xác thực → server sinh một backend process → khởi tạo session. Mở kết nối cho mỗi request thì thời gian mở kết nối còn lâu hơn thời gian chạy truy vấn.</li></ul>
<div class="tablewrap"><table><thead><tr><th>SKU</th><th>Số kết nối tối đa</th></tr></thead><tbody>
<tr><td>Burstable B1ms</td><td>50</td></tr>
<tr><td>General Purpose 2 vCore</td><td>859</td></tr>
<tr><td>General Purpose 4 vCore</td><td>1.718</td></tr>
<tr><td>Memory Optimized 4 vCore</td><td>3.437</td></tr>
<tr><td>Memory Optimized 16 vCore</td><td>5.000</td></tr>
</tbody></table></div>
<div class="tablewrap"><table><thead><tr><th>Pool mode</th><th>Client giữ server connection</th><th>Đánh đổi</th></tr></thead><tbody>
<tr><td>Session</td><td>Suốt phiên, tới khi ngắt kết nối</td><td>Dùng được mọi tính năng, nhưng giảm số kết nối rất ít</td></tr>
<tr><td><strong>Transaction</strong></td><td>Chỉ trong một transaction</td><td><strong>Khóa học khuyến nghị cho vector search</strong>, giảm số kết nối mạnh</td></tr>
<tr><td>Statement</td><td>Chỉ trong một câu lệnh</td><td>Giảm số kết nối nhiều nhất, nhưng <strong>không chạy được transaction nhiều câu</strong></td></tr>
</tbody></table></div>
<ul><li>Tham số PgBouncer và giá trị khóa học gợi ý: <code>pgbouncer.default_pool_size</code> 20–50, <code>pgbouncer.max_client_conn</code> từ 5000 trở lên cho app nhiều traffic, <code>pgbouncer.pool_mode</code> = transaction, <code>pgbouncer.query_wait_timeout</code> 30–120 giây.</li>
<li>Ở transaction mode, lệnh <code>SET</code> không giữ qua transaction sau. Đổi tham số cho từng truy vấn thì dùng <strong><code>SET LOCAL</code></strong>: chỉ có hiệu lực tới hết transaction hiện tại rồi tự trả về mặc định, nên an toàn với kết nối dùng chung trong pool:</li></ul>
<pre><button class="copybtn">copy</button><code>BEGIN;
SET LOCAL work_mem = '256MB';          -- sort tập kết quả vector lớn
SET LOCAL hnsw.ef_search = 200;        -- truy vấn cần recall cao; truy vấn cần nhanh thì 20
SELECT id, name FROM products ORDER BY embedding &lt;=&gt; %s LIMIT 10;
COMMIT;</code></pre>
<pre><button class="copybtn">copy</button><code>from psycopg_pool import ConnectionPool
pool = ConnectionPool(
    conninfo="postgresql://user:password@myserver.postgres.database.azure.com:6432/mydb",
    min_size=5, max_size=20,
    max_idle=300,      # đóng kết nối rảnh sau 5 phút
    max_lifetime=3600  # tái tạo kết nối sau 1 giờ
)</code></pre>
<ul><li><strong>Chia kích thước pool</strong>: <code>max_size</code> của mỗi instance ≈ số kết nối database chịu được / số instance, và chừa khoảng trống. Ví dụ khóa học: DB chịu 1.000 kết nối, có 10 instance app thì mỗi instance tối đa 100. <code>min_size</code> đủ lớn để traffic nền không phải chờ. Tái tạo kết nối mỗi 30–60 phút, vì kết nối sống lâu có thể rò bộ nhớ hoặc giữ cached plan đã cũ.</li>
<li>Pool phía app và PgBouncer <strong>dùng chung được</strong>: pool của app lo vòng đời kết nối ở client, PgBouncer lo multiplex ở phía server (lưu ý chuỗi kết nối ở ví dụ trên trỏ cổng 6432).</li>
<li><strong>.NET/Npgsql</strong> đã bật pooling sẵn và không cần gói riêng. Mỗi chuỗi kết nối khác nhau có một pool riêng, nên cả app phải dùng chuỗi kết nối nhất quán. Cấu hình ngay trong chuỗi: <code>Minimum Pool Size=5;Maximum Pool Size=20;Connection Idle Lifetime=300;Connection Lifetime=3600</code>. Gọi <code>Close()</code>/dispose là trả kết nối về pool chứ không huỷ.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "đặt <code>SET hnsw.ef_search = 200</code> một lần khi mở kết nối mà các truy vấn sau vẫn chạy với 40" → đang đi qua PgBouncer ở transaction mode. Cách sửa là <code>SET LOCAL</code> bên trong transaction, hoặc đặt mặc định ở phía server. Còn đề hỏi "pool mode nào không hỗ trợ transaction nhiều câu lệnh" thì đáp án là <strong>statement</strong>.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/optimize-vector-search-azure-database-postgresql/6-connection-optimization" target="_blank" rel="noopener">Optimize vector search in Azure Database for PostgreSQL — Connection optimization</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/khoa-pg-vong-doi-index-embedding">2.29 Vòng đời index vector và embedding: theo dõi, build lại, re-embed, đổi model</h3>
<p>Đây là cả một unit ("Manage index lifecycle and embedding updates") mà tài liệu hiện có mới chạm tới qua <code>REINDEX</code>. Đề hay hỏi bốn tình huống: index có được dùng không, build tới đâu rồi, khi nào build lại, và đổi embedding model mà không downtime.</p>
<pre><button class="copybtn">copy</button><code>-- Index có được dùng không? idx_scan = 0 → opclass lệch toán tử, hoặc planner chọn seq scan vì bảng nhỏ
SELECT relname AS table_name, indexrelname AS index_name, idx_scan AS times_used,
       pg_size_pretty(pg_relation_size(indexrelid)) AS index_size
FROM pg_stat_user_indexes WHERE indexrelname LIKE '%embedding%' ORDER BY idx_scan DESC;

-- Build index tới đâu rồi?
SELECT phase, blocks_total, blocks_done, tuples_total, tuples_done FROM pg_stat_progress_create_index;

-- Dung lượng bảng / index / tổng
SELECT pg_size_pretty(pg_relation_size('documents'))       AS table_size,
       pg_size_pretty(pg_indexes_size('documents'))        AS index_size,
       pg_size_pretty(pg_total_relation_size('documents')) AS total_size;</code></pre>
<ul><li>Khi build, HNSW đi qua các pha <code>initializing</code> và <code>loading tuples</code>. IVFFlat có thêm các pha k-means. Phần trăm hoàn thành chỉ có nghĩa ở pha cuối <code>loading tuples</code>.</li>
<li><strong>Khi nào build lại</strong>: latency tăng mà lượng dữ liệu không tăng tương ứng; người dùng phàn nàn kết quả kém liên quan; hoặc đã nạp thêm <strong>hơn 20–30% dữ liệu mới</strong>, nhất là dữ liệu từ nguồn hay domain khác. Trường hợp cuối nên reindex chủ động.</li>
<li>Thời gian build ước lượng theo khóa học: IVFFlat (lists=1000) mất 5–15 phút cho 1 triệu vector và 30–60 phút cho 10 triệu. HNSW (m=16, ef_construction=64) mất 15–45 phút cho 1 triệu và <strong>2–6 giờ</strong> cho 10 triệu. Thời gian build HNSW tăng nhanh hơn tuyến tính.</li></ul>
<pre><button class="copybtn">copy</button><code>-- Thay index không downtime: build bản mới song song, kiểm tra bằng EXPLAIN ANALYZE, rồi hoán đổi
CREATE INDEX CONCURRENTLY documents_embedding_new_idx
  ON documents USING hnsw (embedding vector_cosine_ops) WITH (m = 16, ef_construction = 64);
DROP INDEX documents_embedding_idx;
ALTER INDEX documents_embedding_new_idx RENAME TO documents_embedding_idx;

-- Hoặc gọn hơn (chặn ghi trong lúc build, chạy vào giờ thấp điểm):
REINDEX INDEX documents_embedding_idx;
-- Không chặn ghi:
REINDEX INDEX CONCURRENTLY documents_embedding_idx;</code></pre>
<p><strong>Cập nhật embedding khi nội dung đổi</strong>, hai chiến lược:</p>
<div class="tablewrap"><table><thead><tr><th></th><th>Đồng bộ (cùng transaction)</th><th>Bất đồng bộ theo lô (cờ stale)</th></tr></thead><tbody>
<tr><td>Nhất quán</td><td>Luôn khớp</td><td>Trễ tới khi job nền chạy</td></tr>
<tr><td>Latency khi cập nhật nội dung</td><td>Cộng thêm thời gian gọi embedding API</td><td>Nhanh</td></tr>
<tr><td>Phụ thuộc embedding service</td><td>Service chết là không cập nhật được nội dung</td><td>Chịu được lúc service ngừng</td></tr>
<tr><td>Hợp với</td><td>Cập nhật thưa</td><td>Cập nhật dày, muốn gom lời gọi API cho rẻ</td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code>ALTER TABLE documents ADD COLUMN embedding_stale BOOLEAN DEFAULT FALSE;
UPDATE documents SET content = 'New content...', embedding_stale = TRUE, updated_at = NOW() WHERE id = 42;
SELECT id, content FROM documents WHERE embedding_stale = TRUE LIMIT 100;   -- job nền lấy lô
UPDATE documents SET embedding = data.embedding, embedding_stale = FALSE    -- ghi lại cả lô
FROM (VALUES (1, '[...]'::vector), (2, '[...]'::vector)) AS data(id, embedding)
WHERE documents.id = data.id;</code></pre>
<p><strong>Đổi embedding model.</strong> Không trộn được vector của hai model trong một cột: số chiều khác nhau, và quan hệ ngữ nghĩa giữa các vector cũng khác. Ghi đè tại chỗ thì trong lúc migrate, kết quả tìm kiếm lẫn lộn giữa hai model. Khóa học dùng <strong>cột song song</strong>:</p>
<ol><li><code>ALTER TABLE documents ADD COLUMN embedding_v2 vector(3072);</code></li>
<li>Tạo HNSW index trên <code>embedding_v2</code>.</li>
<li>Backfill theo lô (<code>WHERE id BETWEEN 1 AND 10000 AND embedding_v2 IS NULL</code>) để khỏi dồn embedding API.</li>
<li>Chạy song song: một truy vấn trả cả <code>embedding &lt;=&gt; $1</code> và <code>embedding_v2 &lt;=&gt; $2</code> để so chất lượng hai model.</li>
<li>Kiểm chứng xong thì drop index cũ, drop cột cũ, <code>RENAME COLUMN embedding_v2 TO embedding</code>, rename index.</li></ol>
<ul><li>Ước lượng thời gian migrate theo số dòng, rate limit của API và kích thước lô. Ví dụ của khóa học: 500.000 tài liệu, trần 3.000 request/phút, lô 100 tài liệu thì mất <strong>khoảng 28 giờ</strong> chạy liên tục.</li>
<li>Ước lượng dung lượng: cột vector = <code>số chiều × 4 byte × số dòng</code> (1536 chiều ≈ 6 KB/dòng, 1 triệu dòng ≈ 6 GB). Overhead index: HNSW ≈ 1,5–2 lần cột vector, IVFFlat ≈ 1–1,5 lần.</li>
<li>Bảng hay re-embed tích dead tuple nhanh hơn bảng thường. Khóa học đặt autovacuum riêng cho bảng: <code>autovacuum_vacuum_scale_factor = 0.05</code>, <code>autovacuum_analyze_scale_factor = 0.02</code>, tức vacuum khi 5% số dòng đã đổi thay vì <strong>20% mặc định</strong>.</li>
<li>Khóa học cũng gợi ý lịch <em>re-embed toàn bộ</em> định kỳ, ưu tiên tài liệu cũ nhất trước, để bắt các thay đổi không bật cờ stale.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "nâng từ ada-002 (1536 chiều) lên text-embedding-3-large (3072 chiều), không downtime, rollback được" → thêm cột vector mới và backfill song song. <code>ALTER COLUMN … TYPE vector(3072)</code> thì sai: nó viết lại cả bảng, vector cũ không đổi được sang không gian của model mới, và không có đường rollback.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-database-postgresql/4-manage-index-lifecycle-embedding-updates" target="_blank" rel="noopener">Implement vector search — Manage index lifecycle and embedding updates</a> và <a href="https://learn.microsoft.com/en-us/training/modules/optimize-vector-search-azure-database-postgresql/3-choose-configure-vector-indexes" target="_blank" rel="noopener">Optimize vector search — Choose and configure vector indexes</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/khoa-pg-truy-hoi-nguong-da-vector">2.30 Truy hồi ngữ nghĩa: ngưỡng khoảng cách, truy vấn nhiều vector, hybrid có trọng số</h3>
<p>Tài liệu hiện có đã có filter metadata, iterative scan và RRF. Khóa học dạy thêm ba mẫu truy vấn khác và đều có ví dụ SQL: đặt ngưỡng chất lượng, tìm theo nhiều ví dụ cùng lúc, và hybrid bằng tổng có trọng số.</p>
<p><strong>Ngưỡng khoảng cách</strong>: chỉ dùng <code>LIMIT</code> thì truy vấn luôn trả đủ N dòng, kể cả khi không dòng nào liên quan. Thêm điều kiện khoảng cách vào <code>WHERE</code> tạo một mức sàn chất lượng: không có gì đủ gần thì trả về rỗng, và rỗng có thể là câu trả lời đúng.</p>
<pre><button class="copybtn">copy</button><code>SELECT id, title, embedding &lt;=&gt; $1 AS distance
FROM documents
WHERE embedding &lt;=&gt; $1 &lt; 0.4          -- sàn chất lượng
ORDER BY embedding &lt;=&gt; $1
LIMIT 10;                              -- trần tài nguyên</code></pre>
<ul><li>Chọn ngưỡng bằng cách đo phân bố khoảng cách: cặp query–tài liệu biết là liên quan (dồn về khoảng cách thấp) và cặp biết là không liên quan (khoảng cách cao). Ngưỡng nằm ở khe giữa hai cụm. Với cosine trên embedding OpenAI, ngưỡng thường từ <strong>0,3</strong> (chặt, ưu tiên precision) tới <strong>0,6</strong> (lỏng, ưu tiên recall).</li>
<li>Trả đủ mọi cột cần dùng (title, content, metadata, distance, JOIN sang bảng tác giả) trong <strong>một</strong> truy vấn, thay vì lấy id trước rồi truy vấn thêm lần nữa. Cột nội dung rất lớn thì cân nhắc chỉ trả bản tóm tắt.</li></ul>
<p><strong>Truy vấn nhiều vector</strong>:</p>
<div class="tablewrap"><table><thead><tr><th>Các ví dụ</th><th>Cách làm</th></tr></thead><tbody>
<tr><td>Cùng một khái niệm nhìn từ nhiều góc ("tìm thêm tài liệu giống ba hợp đồng sáp nhập này")</td><td><strong>Lấy trung bình</strong> các vector, được "tâm" của các ví dụ, rồi tìm theo tâm đó</td></tr>
<tr><td>Hai khía cạnh khác nhau ("sáp nhập VÀ tuân thủ môi trường")</td><td><strong>Truy vấn riêng từng khía cạnh</strong> rồi gộp kết quả. Trung bình của hai khái niệm xa nhau có thể là một điểm không gần cái nào</td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code>WITH merger_results AS (
  SELECT id, embedding &lt;=&gt; $1 AS distance FROM documents ORDER BY embedding &lt;=&gt; $1 LIMIT 20),
environmental_results AS (
  SELECT id, embedding &lt;=&gt; $2 AS distance FROM documents ORDER BY embedding &lt;=&gt; $2 LIMIT 20)
SELECT d.id, d.title,
       (COALESCE(mr.distance, 1) + COALESCE(er.distance, 1)) / 2 AS combined_score
FROM documents d
LEFT JOIN merger_results mr ON d.id = mr.id
LEFT JOIN environmental_results er ON d.id = er.id
WHERE mr.id IS NOT NULL OR er.id IS NOT NULL
ORDER BY combined_score LIMIT 10;</code></pre>
<p><strong>Hybrid có trọng số</strong>: cách trong khóa học là đổi khoảng cách thành độ tương đồng (<code>1 - distance</code>) rồi cộng có trọng số với <code>ts_rank</code>. Cách này khác RRF ở mục 2.19:</p>
<pre><button class="copybtn">copy</button><code>SELECT id, title,
       (1 - (embedding &lt;=&gt; $1)) * 0.7 +
       ts_rank(to_tsvector('english', content), plainto_tsquery('english', $2)) * 0.3 AS hybrid_score
FROM documents
WHERE to_tsvector('english', content) @@ plainto_tsquery('english', $2)
   OR embedding &lt;=&gt; $1 &lt; 0.5
ORDER BY hybrid_score DESC LIMIT 10;</code></pre>
<ul><li>Trọng số ngữ nghĩa cao khi ý nghĩa quan trọng hơn từ ngữ. Trọng số keyword cao khi truy vấn chứa tên riêng, mã hay thuật ngữ phải khớp đúng (ví dụ "Smith v. Jones").</li>
<li>Muốn nhanh thì đặt GIN index trên tsvector và lưu tsvector vào cột generated. Tìm kiếm thuần ngữ nghĩa thì chỉ dùng vector là đủ và đơn giản hơn.</li>
<li>Về kế hoạch thực thi: filter chọn lọc cao thì planner có thể quét các dòng khớp filter mà <em>không</em> dùng vector index. Filter chọn lọc thấp thì vector index chi phối. Khóa học coi cả hai trường hợp đều đúng, vì planner tối ưu theo tổng chi phí. Chạy <code>ANALYZE</code> sau mỗi lần nạp dữ liệu để statistics đúng.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "chatbot pháp lý đôi khi trích hợp đồng chẳng liên quan khi kho không có tài liệu phù hợp" → thêm ngưỡng khoảng cách vào <code>WHERE</code>. Tăng <code>LIMIT</code> hay <code>ef_search</code> không giải quyết được việc này.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-database-postgresql/5-run-vector-similarity-search-semantic-retrieval" target="_blank" rel="noopener">Implement vector search — Run vector similarity search for semantic retrieval</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/khoa-pg-rag-chunk-citation">2.31 Retriever cho RAG trên PostgreSQL: bảng chunk, cửa sổ ngữ cảnh, ngân sách token, trích dẫn, đánh giá</h3>
<p>Unit "Implement retrieval patterns for RAG pipelines" coi PostgreSQL là retriever trong pipeline RAG (embed câu hỏi → truy hồi → sinh câu trả lời). Tài liệu hiện có chưa có phần chunk, citation hay đo chất lượng truy hồi.</p>
<pre><button class="copybtn">copy</button><code>CREATE TABLE source_documents (
  id SERIAL PRIMARY KEY, title TEXT NOT NULL, source_url TEXT, document_type TEXT,
  ingested_at TIMESTAMPTZ DEFAULT NOW());

CREATE TABLE document_chunks (
  id SERIAL PRIMARY KEY,
  document_id INTEGER REFERENCES source_documents(id) ON DELETE CASCADE,
  chunk_index INTEGER NOT NULL,
  content TEXT NOT NULL,
  embedding vector(1536),
  token_count INTEGER, section_title TEXT, page_number INTEGER,
  UNIQUE (document_id, chunk_index));

CREATE INDEX document_chunks_document_id_idx ON document_chunks (document_id);            -- JOIN về tài liệu gốc
CREATE INDEX document_chunks_doc_chunk_idx   ON document_chunks (document_id, chunk_index); -- lấy chunk kề bên</code></pre>
<ul><li>Hai bảng tách rời: metadata tài liệu lưu một lần; chunk nào cũng trỏ về nguồn để trích dẫn; thay một tài liệu chỉ là xoá dòng cha (<code>ON DELETE CASCADE</code> dọn chunk) rồi ingest lại. Cần giữ lịch sử phiên bản thì thêm cột <code>version</code> và lọc theo version khi truy vấn.</li>
<li><strong>Cửa sổ ngữ cảnh</strong>: chunk 47 khớp thì lấy luôn chunk 46 và 48, phòng khi chunk chứa câu kiểu "các điều kiện nêu trên". Composite index <code>(document_id, chunk_index)</code> là thứ làm bước này nhanh.</li>
<li><strong>Ngân sách token</strong>: 10 chunk × 500 token là đã tiêu 5.000 token trước khi LLM viết chữ nào. Cộng dồn bằng window function rồi cắt theo ngưỡng:</li></ul>
<pre><button class="copybtn">copy</button><code>WITH matched_chunks AS (
  SELECT id, document_id, chunk_index, embedding &lt;=&gt; $1 AS distance
  FROM document_chunks ORDER BY embedding &lt;=&gt; $1 LIMIT 3),
context_window AS (
  SELECT DISTINCT dc.id, dc.document_id, dc.chunk_index, dc.content, dc.token_count, mc.distance
  FROM matched_chunks mc
  JOIN document_chunks dc ON dc.document_id = mc.document_id
   AND dc.chunk_index BETWEEN mc.chunk_index - 1 AND mc.chunk_index + 1),
token_limited AS (
  SELECT cw.*, sd.title AS source_title, sd.source_url,
         SUM(cw.token_count) OVER (ORDER BY cw.distance, cw.chunk_index) AS cumulative_tokens
  FROM context_window cw JOIN source_documents sd ON cw.document_id = sd.id)
SELECT id, content, source_title, source_url, distance
FROM token_limited WHERE cumulative_tokens &lt;= 3000
ORDER BY distance, chunk_index;</code></pre>
<div class="tablewrap"><table><thead><tr><th>Chiến lược chunking</th><th>Ưu</th><th>Nhược / khi nào dùng</th></tr></thead><tbody>
<tr><td>Fixed-size (mỗi N ký tự/token)</td><td>Đơn giản, số token dễ đoán</td><td>Có thể cắt ngang câu. Dùng khi nội dung không có ranh giới cấu trúc rõ</td></tr>
<tr><td>Semantic (theo đoạn/mục/câu)</td><td>Mỗi chunk giữ trọn một ý</td><td>Kích thước không đều. Hợp với điều khoản pháp lý, tài liệu API, FAQ</td></tr>
<tr><td>Overlapping (ví dụ chồng 200 ký tự trên chunk 1.000 ký tự)</td><td>Ý nằm ở biên chunk vẫn trọn trong ít nhất một chunk</td><td>Tốn thêm dung lượng, có thể trả về nội dung trùng</td></tr>
</tbody></table></div>
<p><strong>Trích dẫn gom theo tài liệu</strong>: chunk 12, 15, 18 của cùng một tài liệu nên gộp thành <em>một</em> trích dẫn có nhiều đoạn trích, thay vì liệt kê ba trích dẫn:</p>
<pre><button class="copybtn">copy</button><code>WITH ranked_chunks AS (
  SELECT dc.*, sd.title AS document_title, sd.source_url, dc.embedding &lt;=&gt; $1 AS distance,
         ROW_NUMBER() OVER (PARTITION BY dc.document_id ORDER BY dc.embedding &lt;=&gt; $1) AS rank_in_doc
  FROM document_chunks dc JOIN source_documents sd ON dc.document_id = sd.id
  WHERE dc.embedding &lt;=&gt; $1 &lt; 0.5)
SELECT document_id, document_title, source_url,
       array_agg(content ORDER BY chunk_index) AS chunks, MIN(distance) AS best_distance
FROM ranked_chunks WHERE rank_in_doc &lt;= 3                 -- tối đa 3 chunk mỗi tài liệu
GROUP BY document_id, document_title, source_url
ORDER BY best_distance LIMIT 5;</code></pre>
<p><strong>Đo chất lượng truy hồi tách khỏi chất lượng sinh câu trả lời</strong>:</p>
<div class="tablewrap"><table><thead><tr><th>Metric</th><th>Đo gì</th><th>Thấp thì chỉnh</th></tr></thead><tbody>
<tr><td>Precision</td><td>Tỉ lệ chunk trả về thật sự liên quan</td><td>Siết ngưỡng khoảng cách, giảm số chunk, dùng chunk nhỏ hơn</td></tr>
<tr><td>Recall</td><td>Tỉ lệ chunk liên quan được tìm thấy</td><td>Nới ngưỡng, tăng số chunk, tăng <code>ef_search</code>/<code>probes</code>, dùng chunk lớn hơn, tăng overlap</td></tr>
<tr><td>MRR (Mean Reciprocal Rank)</td><td>Kết quả liên quan đầu tiên đứng cao tới đâu. LLM và người dùng đều chú ý nhất vào kết quả đầu</td><td>Đổi embedding model (kể cả model riêng theo domain), tiền xử lý query</td></tr>
</tbody></table></div>
<ul><li>Bộ đánh giá: bắt đầu với <strong>20–50 truy vấn</strong> tiêu biểu. Mỗi truy vấn lấy top 10–20 chunk, nhờ chuyên gia domain chấm mức liên quan (không / hơi / rất liên quan). Đo precision@5, recall@10 và chạy lại tự động mỗi khi đổi chunking, model hay tham số index.</li>
<li>HNSW xử lý việc xoá dòng mà không cần build lại. IVFFlat có thể bị phân mảnh sau nhiều thay đổi và cần build lại định kỳ.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "câu trả lời thiếu ý vì phần tài liệu liên quan nằm ở đoạn liền kề chunk khớp nhất" → lấy thêm cửa sổ ngữ cảnh (chunk kề bên) hoặc dùng overlapping chunk. "LLM nhận quá nhiều ngữ cảnh không liên quan" là bài toán precision: siết ngưỡng hoặc giảm top-k.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/implement-vector-search-azure-database-postgresql/6-implement-retrieval-patterns-rag-pipelines" target="_blank" rel="noopener">Implement vector search — Implement retrieval patterns for RAG pipelines</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/khoa-pg-tham-so-planner-index">2.32 Tham số planner, bảng chọn <code>lists</code>/<code>probes</code> và bố trí dữ liệu theo khóa học</h3>
<p>Mục 2.13 đã có <code>shared_buffers</code>, <code>effective_cache_size</code> và <code>work_mem</code>. Module "Optimize vector search" thêm nhóm tham số planner cho SSD, một bảng chọn tham số IVFFlat khác với README pgvector, và vài quy tắc index cho metadata.</p>
<div class="tablewrap"><table><thead><tr><th>Tham số</th><th>Mặc định</th><th>Khóa học khuyên</th><th>Vì sao</th></tr></thead><tbody>
<tr><td><code>random_page_cost</code></td><td>4.0 (đĩa quay)</td><td><strong>1.1–1.5</strong></td><td>Azure dùng SSD, đọc ngẫu nhiên gần bằng đọc tuần tự, nên hạ giá trị này để planner chọn index scan dễ hơn</td></tr>
<tr><td><code>effective_io_concurrency</code></td><td>—</td><td><strong>200</strong></td><td>SSD chịu nhiều I/O đồng thời; bitmap heap scan prefetch được nhiều trang hơn, lợi cho vector kèm filter</td></tr>
<tr><td><code>parallel_tuple_cost</code> / <code>parallel_setup_cost</code></td><td>0.1 / 1000</td><td>Hạ xuống</td><td>Khuyến khích chạy song song khi phải seq scan bảng lớn (kiểm cùng <code>max_parallel_workers_per_gather</code>)</td></tr>
<tr><td><code>work_mem</code></td><td>~4 MB</td><td><code>SET work_mem = '256MB'</code> <strong>theo session</strong></td><td>Tính theo mỗi thao tác × mỗi kết nối: 100 kết nối × work_mem × số thao tác mỗi truy vấn, nên không tăng toàn server</td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code>-- Cache hit ratio; dưới 99% với workload vector nghĩa là shared_buffers có thể quá nhỏ
SELECT sum(heap_blks_hit) / (sum(heap_blks_hit) + sum(heap_blks_read)) AS cache_hit_ratio
FROM pg_statio_user_tables;
-- Xem index nào đang có
SELECT indexname, indexdef FROM pg_indexes WHERE tablename = 'products';</code></pre>
<ul><li>Chi phí ba toán tử: L2 <code>&lt;-&gt;</code> <strong>đắt nhất</strong> (có căn bậc hai), cosine <code>&lt;=&gt;</code> tự chuẩn hoá bên trong nên tốn thêm, inner product <code>&lt;#&gt;</code> <strong>rẻ nhất</strong> nhưng vector phải được chuẩn hoá trước.</li>
<li>Theo khóa học, 3072 chiều tốn gấp 4 lần công tính khoảng cách và gấp 2 lần dung lượng so với 1536 chiều. Nhiều bài recommendation/search chỉ cần <strong>768 hoặc 1.024 chiều</strong>.</li></ul>
<p><strong>Index có đáng làm không, theo kích thước bảng</strong>: dưới 10.000 dòng thì seq scan có thể đủ nhanh; 10.000–100.000 dòng thì index giúp vừa phải; 100.000–1 triệu thì thường bắt buộc cho truy vấn tương tác; trên 1 triệu thì không có index là không dùng được. Seq scan vẫn hợp lý khi filter đã thu hẹp còn rất ít dòng, khi cần kết quả chính xác 100%, hoặc khi dữ liệu đổi nhanh tới mức công bảo trì index vượt lợi ích.</p>
<div class="tablewrap"><table><thead><tr><th>Số dòng</th><th><code>lists</code> theo module Optimize</th></tr></thead><tbody>
<tr><td>≤ 100.000</td><td>100</td></tr>
<tr><td>100.000 – 1 triệu</td><td>1.000</td></tr>
<tr><td>1 – 10 triệu</td><td>4.000 – 10.000</td></tr>
<tr><td>&gt; 10 triệu</td><td><code>sqrt(rows)</code></td></tr>
</tbody></table></div>
<ul><li>Khóa học không thống nhất ở chỗ này. Module "Implement vector search" dùng <code>rows/1000</code> tới 1 triệu dòng và <code>sqrt(rows)</code> khi vượt, giống README pgvector ở mục 2.10. Ví dụ 2 triệu sản phẩm trong module Optimize thì "bắt đầu với 1.500–2.000". Gặp câu hỏi thì ưu tiên công thức <code>rows/1000</code> và <code>sqrt(rows)</code>, vì hai module cùng nhắc.</li>
<li><code>probes</code>: điểm xuất phát là <code>sqrt(lists)</code> (1.000 lists thì bắt đầu với 30–50). Unit tuning thì viết "5–10% của lists". Mặc định là <strong>1</strong>.</li>
<li>HNSW: <code>ef_construction</code> ≥ <code>2 × m</code>, muốn index chất lượng cao thì <code>4 × m</code> trở lên (production 100–200). <code>m</code> từ 16 lên 32 (hoặc 64) khi cần recall rất cao. <code>ef_search</code> 100–200 thường cho recall <strong>99%+</strong>; ưu tiên latency thì hạ còn 20. Đổi <code>m</code> hay <code>ef_construction</code> đều phải build lại index. Với m=16, graph cỡ <strong>~1,5 lần</strong> dữ liệu vector.</li>
<li>Khóa học đặt ngưỡng recall: IVFFlat khi chấp nhận <strong>90–95%</strong>, HNSW khi cần <strong>99%+</strong>. DiskANN (riêng của Azure) nhắm tới tập dữ liệu <strong>100 triệu+ vector</strong>.</li></ul>
<p><strong>Bố trí dữ liệu</strong>:</p>
<ul><li>Nhiều cột vector (embedding tiêu đề, embedding ảnh…) thì <strong>mỗi cột cần một index riêng</strong>. Không có index nào phủ được nhiều cột vector.</li>
<li>GIN trên JSONB chỉ tăng tốc toán tử chứa/tồn tại: <code>@&gt;</code>, <code>&lt;@</code>, <code>?</code>, <code>?|</code>, <code>?&amp;</code>. GIN <strong>không</strong> giúp lọc theo khoảng. Trường JSONB hay lọc theo khoảng thì dùng expression index: <code>CREATE INDEX idx_products_json_price ON products (((attributes-&gt;&gt;'price')::numeric));</code></li>
<li>Mẫu kết hợp khóa học khuyên dùng: thuộc tính hay lọc để ở cột có kiểu riêng + B-tree; thuộc tính động hoặc ít lọc để trong JSONB.</li>
<li>Tạo index trên bảng cha đã partition thì mỗi partition tự có index của nó, build lại được riêng từng partition. Cân nhắc partition khi bảng vượt vài chục triệu dòng. Nhược điểm: truy vấn trải nhiều partition có thể chậm hơn bảng đơn, và unique constraint xuyên partition phải chứa partition key.</li>
<li>Metric Azure Monitor cần canh: CPU percent, Memory percent, Storage IO percent (cao nghĩa là dữ liệu không vừa cache), Active connections.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "lọc <code>(attributes-&gt;&gt;'price')::numeric BETWEEN 100 AND 500</code> vẫn seq scan dù đã có GIN trên <code>attributes</code>" → GIN không phục vụ lọc theo khoảng. Cần expression index hoặc đưa <code>price</code> ra cột riêng. Còn "đổi <code>m</code> của HNSW mà không build lại" thì không làm được.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/optimize-vector-search-azure-database-postgresql/2-tune-postgresql-pgvector" target="_blank" rel="noopener">Tune PostgreSQL for pgvector</a>, <a href="https://learn.microsoft.com/en-us/training/modules/optimize-vector-search-azure-database-postgresql/3-choose-configure-vector-indexes" target="_blank" rel="noopener">Choose and configure vector indexes</a>, <a href="https://learn.microsoft.com/en-us/training/modules/optimize-vector-search-azure-database-postgresql/4-optimize-data-layout" target="_blank" rel="noopener">Optimize data layout</a> (module Optimize vector search, khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/khoa-pg-scale-replica-chi-phi">2.33 Scale cho tải lớn: vCore theo tier, read replica, cache trước PostgreSQL, chi phí</h3>
<p>Tài liệu hiện có mới nhắc read replica một dòng. Unit "Scale for high-volume workloads" cho con số cụ thể, cách xử lý độ trễ replica và quy tắc khi nào scale up, khi nào scale out.</p>
<div class="tablewrap"><table><thead><tr><th>Tier</th><th>vCore</th><th>RAM mỗi vCore</th><th>Dùng khi</th></tr></thead><tbody>
<tr><td>Burstable</td><td>1–20</td><td>2 GB</td><td>Dev, traffic thấp</td></tr>
<tr><td>General Purpose</td><td>2–96</td><td>4 GB</td><td>Production cân bằng</td></tr>
<tr><td>Memory Optimized</td><td>2–96</td><td>8 GB</td><td>Working set lớn, workload vector</td></tr>
</tbody></table></div>
<ul><li>Điểm khởi đầu theo khóa học: <strong>&lt; 1 triệu vector</strong> thì General Purpose 4–8 vCore, scale up khi CPU liên tục vượt 70% giờ cao điểm. <strong>1–10 triệu</strong> thì Memory Optimized 8–16 vCore, RAM phải lớn hơn kích thước vector index <strong>ít nhất 50%</strong>, hàng trăm truy vấn đồng thời thì 32+ vCore. <strong>&gt; 10 triệu</strong> thường cần Memory Optimized 32+ vCore, cộng replica, partition hoặc tầng cache.</li>
<li><strong>Scale up</strong> khi latency của từng truy vấn cao, thiếu RAM làm I/O đĩa nhiều, và chưa chạm trần tier. <strong>Scale out</strong> (replica, cache) khi tổng lượng truy vấn vượt sức một server, workload đọc nhiều và chấp nhận dữ liệu hơi cũ, hoặc đã chạm trần scale up. Khóa học khuyên scale up trước vì đơn giản hơn.</li>
<li><strong>Read replica</strong>: dùng physical streaming replication, <strong>bất đồng bộ</strong>, tối đa <strong>5 replica</strong> cho mỗi primary, đặt được ở region khác. Replica chỉ đọc, mỗi replica có endpoint riêng nên <strong>app phải tự định tuyến</strong> (theo loại truy vấn ở tầng app, qua DNS/Traffic Manager, hoặc qua proxy). Kích thước replica chọn độc lập với primary.</li>
<li>Độ trễ replica thường từ mili giây tới vài giây, và tăng khi primary ghi nặng, có transaction lớn hay bulk load, mạng giữa region nghẽn, hoặc replica thiếu tài nguyên. Truy vấn cần thấy ngay dữ liệu vừa ghi (ví dụ preference vừa lưu) thì phải gửi về primary. Đo độ trễ ngay trên replica:</li></ul>
<pre><button class="copybtn">copy</button><code>SELECT EXTRACT(EPOCH FROM (now() - pg_last_xact_replay_timestamp())) AS lag_seconds;</code></pre>
<ul><li><strong>Cái gì đáng cache</strong> (Redis trước PostgreSQL): embedding của sản phẩm phổ biến, danh sách "similar items" tính sẵn cho top sản phẩm, embedding người dùng, embedding gộp theo category. <strong>Không đáng cache</strong>: truy vấn tương đồng với vector bất kỳ (không gian truy vấn vô hạn), dữ liệu đổi nhanh, truy vấn có quá nhiều tổ hợp filter. TTL cho recommendation thường 15–60 phút. Bổ sung invalidation theo sự kiện, và refresh sẵn các item phổ biến trước khi hết hạn.</li>
<li>Alert mẫu: cảnh báo khi CPU &gt; 80% trong 5 phút, mức nghiêm trọng khi Memory &gt; 90% trong 5 phút. Ngoài ra theo dõi P95/P99 latency của vector search, QPS và cache hit ratio. Ví dụ lập kế hoạch: catalog gấp đôi mỗi năm mà CPU đang ở 60% thì nên scale trong 6 tháng tới.</li>
<li><strong>Chi phí</strong>: CPU trung bình dưới 30% thì cân nhắc scale down. RAM dư thường xuyên thì General Purpose có thể đủ. <strong>Reserved capacity 1 hoặc 3 năm giảm tới 65%</strong>: reserve phần tải nền, phần burst trả theo on-demand. Gỡ HNSW index không dùng (mỗi cái cộng thêm ~50% dung lượng vector). Dùng float4 thay float8 nếu đủ chính xác. Môi trường dev dùng Burstable.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "tách tải đọc vector search sang replica mà người dùng không thấy ngay preference vừa lưu" là do replication bất đồng bộ. Cách sửa là gửi truy vấn đọc-sau-khi-ghi về primary, không phải thêm replica. Và "hơn 5 read replica cho một primary" là vượt giới hạn.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/optimize-vector-search-azure-database-postgresql/5-scale-high-volume-workloads" target="_blank" rel="noopener">Optimize vector search in Azure Database for PostgreSQL — Scale for high-volume workloads</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/trien-khai-postgres">2.34 Triển khai PostgreSQL Flexible Server trên Azure — từng bước</h3>
<p>Thứ tự: <strong>chọn mô hình mạng (quyết định một lần) → server với Entra auth → allowlist extension → <code>CREATE EXTENSION vector</code> → tạo principal cho managed identity → bật PgBouncer</strong>.</p>
<pre><button class="copybtn">copy</button><code># 1. Server — private access (VNet) phải chọn lúc tạo; tier Burstable không có HA/PgBouncer
az postgres flexible-server create -g rg-ai200 -n pg-rag -l eastus \\
  --tier MemoryOptimized --sku-name Standard_E4ds_v5 --version 16 \\
  --storage-size 128 --zonal-resiliency Enabled --microsoft-entra-auth Enabled \\
  --vnet vnet1 --subnet snet-pg --private-dns-zone pg-rag.private.postgres.database.azure.com \\
  --admin-user pgadmin --admin-password "$PG_PASS"

# 2. Đặt Entra admin (Entra auth đã bật bằng --microsoft-entra-auth Enabled ở bước 1;
#    sau đó có thể tắt password bằng --password-auth Disabled)
az postgres flexible-server microsoft-entra-admin create -g rg-ai200 -s pg-rag \\
  --display-name me@contoso.com --object-id $MY_OID

# 3. Allowlist extension + PgBouncer (tham số server, không phải SQL)
az postgres flexible-server parameter set -g rg-ai200 -s pg-rag --name azure.extensions --value vector
az postgres flexible-server parameter set -g rg-ai200 -s pg-rag --name pgbouncer.enabled --value true

# 4. Đăng nhập bằng token Entra thay cho password
export PGPASSWORD=$(az account get-access-token --resource-type oss-rdbms --query accessToken -o tsv)
psql "host=pg-rag.postgres.database.azure.com dbname=postgres user=me@contoso.com sslmode=require"</code></pre>
<pre><button class="copybtn">copy</button><code>-- Trong database (kết nối bằng Entra admin)
CREATE EXTENSION IF NOT EXISTS vector;
-- Ánh xạ managed identity của Container App / Function thành role PostgreSQL
SELECT * FROM pgaadauth_create_principal('rag-api', false, false);
GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO "rag-api";</code></pre>
<ul><li>Bicep: <code>authConfig: { activeDirectoryAuth: 'Enabled', passwordAuth: 'Disabled' }</code> trên <code>Microsoft.DBforPostgreSQL/flexibleServers</code> là cách "chỉ cho đăng nhập bằng Entra".</li>
<li><strong>Public access</strong> thay cho VNet: tạo với <code>--public-access &lt;IP&gt;</code> rồi thêm <code>az postgres flexible-server firewall-rule create -g rg-ai200 -s pg-rag -n dev --start-ip-address &lt;IP&gt;</code>; <code>0.0.0.0</code> nghĩa là "mọi dịch vụ Azure" — rộng hơn nhiều người nghĩ.</li>
<li><strong>Kiểm tra</strong>: <code>SELECT extversion FROM pg_extension WHERE extname='vector';</code>; kết nối qua cổng <strong>6432</strong> để chắc đi qua PgBouncer.</li>
<li><strong>Bẫy</strong>: <code>CREATE EXTENSION vector</code> báo "not allow-listed" = quên bước <code>azure.extensions</code>; mô hình mạng private (VNet injection) chọn lúc tạo và không chuyển được sang VNet/subnet khác. Muốn bỏ VNet injection thì có lệnh một chiều (preview) <code>az postgres flexible-server migrate-network</code> chuyển sang public access + private endpoint (server ngừng truy cập ~10 phút); cách truyền thống vẫn là restore/tạo server mới. Bicep vẫn khai HA bằng <code>highAvailability.mode: 'ZoneRedundant'</code>, còn CLI mới dùng <code>--zonal-resiliency</code>.</li></ul>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/cli/azure/postgres/flexible-server" target="_blank" rel="noopener">az postgres flexible-server (CLI reference)</a>, <a href="https://learn.microsoft.com/en-us/azure/postgresql/security/security-manage-entra-users" target="_blank" rel="noopener">Manage Microsoft Entra users</a> trên Microsoft Learn, đối chiếu ngày 26/09/2026.</em></p>
<hr>
<h2 id="02-data-services/phan-c-azure-managed-redis">3. Azure Managed Redis</h2>
<blockquote><p>Azure Managed Redis là thế hệ mới thay cho Azure Cache for Redis (dựa trên Redis Enterprise), có các module <strong>RediSearch, RedisJSON, RedisBloom, RedisTimeSeries</strong> → nhờ đó làm được <strong>vector index</strong>. Module là <em>managed module</em>: phải <strong>bật lúc tạo cache</strong>, không thêm được sau.</p></blockquote>
<p><strong>Bốn tier</strong> — khác nhau ở tỉ lệ memory:vCPU:</p>
<div class="tablewrap"><table><thead><tr><th>Tier</th><th>Memory : vCPU</th><th>Dùng khi</th></tr></thead><tbody>
<tr><td><strong>Memory Optimized</strong></td><td>8 : 1</td><td>Cache lớn, cần nhiều RAM nhưng throughput vừa phải</td></tr>
<tr><td><strong>Balanced</strong></td><td>4 : 1</td><td>Mặc định cho workload thường</td></tr>
<tr><td><strong>Compute Optimized</strong></td><td>2 : 1</td><td>Throughput cao nhất — hợp search/vector nặng</td></tr>
<tr><td><strong>Flash Optimized</strong></td><td>RAM + NVMe</td><td>Dataset rất lớn, phần lớn key ít truy cập → chi phí thấp</td></tr>
</tbody></table></div>
<blockquote><p><strong>Bẫy thi:</strong> <strong>Flash Optimized KHÔNG hỗ trợ RediSearch/vector search</strong> (cũng không hỗ trợ RedisBloom và RedisTimeSeries). Đề mô tả "dataset lớn, key nguội, <em>và</em> cần similarity search" thì Flash Optimized là đáp án sai — phải chọn tier khác.</p></blockquote>
<blockquote><p><strong>Cập nhật vòng đời:</strong> Azure Cache for Redis bị khai tử — tier <strong>Enterprise / Enterprise Flash ngừng 31/3/2027</strong>, tier <strong>Basic / Standard / Premium ngừng 30/9/2028</strong>. Microsoft khuyến nghị chuyển sang Azure Managed Redis; đề mới vì vậy hỏi theo tên <em>Azure Managed Redis</em>.</p></blockquote>
<h3 id="02-data-services/c1-caching-expiration-invalidation">3.1 Caching, expiration, invalidation</h3>
<pre><button class="copybtn">copy</button><code>import redis, json, hashlib
r = redis.Redis(host="mycache.region.redis.azure.net", port=10000, ssl=True,
                password=token, decode_responses=True)

def cache_key(q): return "rag:ans:" + hashlib.sha256(q.encode()).hexdigest()

# Cache-aside (lazy loading) — mẫu chuẩn
def answer(q):
    k = cache_key(q)
    if (hit := r.get(k)):
        return json.loads(hit)
    res = expensive_llm_call(q)
    r.set(k, json.dumps(res), ex=3600)        # EX = TTL 1 giờ  -&gt; expiration
    return res</code></pre>
<p>Lệnh cần nhớ:</p>
<div class="tablewrap"><table><thead><tr><th>Mục đích</th><th>Lệnh</th></tr></thead><tbody><tr><td>Set kèm TTL</td><td><code>SET k v EX 3600</code> / <code>SETEX</code> / <code>PSETEX</code> (ms)</td></tr><tr><td>Chỉ set khi chưa tồn tại (lock)</td><td><code>SET k v NX EX 30</code></td></tr><tr><td>Đặt/gỡ TTL sau</td><td><code>EXPIRE k 60</code>, <code>PERSIST k</code></td></tr><tr><td>Xem TTL còn lại</td><td><code>TTL k</code> (−1 = không TTL, −2 = không tồn tại)</td></tr><tr><td>Invalidation thủ công</td><td><code>DEL k</code>, <code>UNLINK k</code> (xoá bất đồng bộ, không block)</td></tr><tr><td>Invalidation theo nhóm</td><td>Đặt tag: <code>SADD tag:doc42 k1 k2</code> → khi doc đổi: <code>SMEMBERS</code> rồi <code>UNLINK</code></td></tr><tr><td>Xoá toàn bộ</td><td><code>FLUSHDB</code> (cẩn thận)</td></tr><tr><td>Đếm hit/miss</td><td><code>INFO stats</code> → <code>keyspace_hits</code>, <code>keyspace_misses</code></td></tr></tbody></table></div>
<p>Chiến lược <strong>invalidation</strong> hay được hỏi:</p>
<ul><li><strong>TTL-based</strong>: đơn giản nhất, chấp nhận dữ liệu cũ trong khoảng TTL.</li><li><strong>Write-through / write-behind</strong>: cập nhật cache ngay khi ghi DB.</li><li><strong>Event-driven</strong>: change feed Cosmos DB / Event Grid → Function → <code>DEL</code> key liên quan.</li><li>Thêm <strong>jitter</strong> cho TTL để tránh <strong>cache stampede</strong>; dùng <code>SET NX</code> làm lock khi rebuild.</li><li><strong>Eviction policy</strong> khi đầy bộ nhớ: <code>allkeys-lru</code> (cache thuần), <code>volatile-ttl</code>, <code>noeviction</code> (dùng cho queue/session — sẽ báo lỗi ghi khi đầy).</li></ul>
<p>Ứng dụng AI đặc trưng:</p>
<ul><li><strong>Semantic cache</strong>: cache câu trả lời LLM theo <em>ý nghĩa</em> câu hỏi (vector similarity) chứ không theo chuỗi khớp tuyệt đối → giảm chi phí token.</li><li><strong>Session/chat history store</strong>, <strong>rate limiting</strong> (<code>INCR</code> + <code>EXPIRE</code>), <strong>conversation state</strong>.</li></ul>
<h3 id="02-data-services/d6-redis-caching-patterns">3.2 Caching pattern và eviction</h3>
<ul><li><strong>Cache-aside</strong> (mặc định của đề): đọc cache → miss thì đọc DB rồi ghi cache kèm TTL. <strong>Write-through</strong>: ghi cache cùng lúc ghi DB — đọc luôn ấm nhưng ghi chậm hơn. <strong>Write-behind</strong>: ghi cache trước, đẩy DB sau — nhanh nhất, rủi ro mất khi cache chết.</li>
<li>Chống <em>cache stampede</em> (hàng nghìn request cùng miss một key hết hạn): TTL cộng <strong>jitter ngẫu nhiên</strong>, hoặc khóa một request đi tải còn lại đợi.</li>
<li>Invalidation khi dữ liệu nguồn đổi: xóa key chủ động từ đường ghi (tốt nhất), hoặc pub/sub báo các instance xóa cache cục bộ; TTL chỉ là lưới đỡ cuối.</li>
<li><strong>Eviction policy</strong>: <code>allkeys-lru</code> cho cache thuần; <code>volatile-lru</code> khi có key phải sống mãi; <code>noeviction</code> làm lệnh ghi lỗi khi đầy — thấy lỗi OOM ghi cache là nhìn policy này.</li>
<li>Managed Redis chạy Redis Enterprise: có sẵn module <strong>RediSearch (vector)</strong>, RedisJSON; chọn clustering policy <em>OSS</em> (client cluster-aware, scale cao nhất) hay <em>Enterprise</em> (client thường dùng được) là câu hỏi cấu hình hay gặp.</li></ul>
<h3 id="02-data-services/c2-vector-index-voi-redisearch">3.3 Vector index với RediSearch</h3>
<pre><button class="copybtn">copy</button><code>from redis.commands.search.field import VectorField, TextField, TagField
from redis.commands.search.indexDefinition import IndexDefinition, IndexType
from redis.commands.search.query import Query
import numpy as np

r.ft("idx:chunks").create_index(
    fields=[
        TagField("$.tenant", as_name="tenant"),
        TextField("$.chunk", as_name="chunk"),
        VectorField("$.embedding", "HNSW", {
            "TYPE": "FLOAT32",
            "DIM": 1536,
            "DISTANCE_METRIC": "COSINE",   # COSINE | L2 | IP
            "M": 16,
            "EF_CONSTRUCTION": 200,
        }, as_name="embedding"),
    ],
    definition=IndexDefinition(prefix=["chunk:"], index_type=IndexType.JSON),
)

# KNN query kèm pre-filter theo tag
q = (Query("(@tenant:{tenant_a})=&gt;[KNN 5 @embedding $vec AS score]")
     .sort_by("score").return_fields("chunk", "score").dialect(2))
res = r.ft("idx:chunks").search(q, {"vec": np.array(qvec, dtype=np.float32).tobytes()})</code></pre>
<ul><li><code>FLAT</code> = brute force, chính xác, hợp tập nhỏ; <code>HNSW</code> = ANN, hợp tập lớn.</li><li>Query dạng <code>=&gt;[KNN k @field $vec AS score]</code>, bắt buộc <code>DIALECT 2</code>, vector truyền dạng <strong>bytes</strong>.</li><li>Range query: <code>@embedding:[VECTOR_RANGE 0.35 $vec]</code>.</li><li>Redis giữ toàn bộ index <strong>trong RAM</strong> → nhanh nhất nhưng đắt nhất; hợp làm <strong>cache tầng nóng</strong> trước Cosmos/Postgres.</li></ul>
<h3 id="02-data-services/c9-redis-vector-chi-tiet">3.4 Vector search trong Managed Redis — FT.CREATE / FT.SEARCH chi tiết</h3>
<p>Managed Redis dùng module RediSearch: index khai bằng <code>FT.CREATE</code>, truy vấn KNN bằng <code>FT.SEARCH</code>. Cú pháp là thứ đề trích nguyên văn.</p>
<pre><button class="copybtn">copy</button><code># Index trên các key hash có prefix doc:, trường vector 1536 chiều, cosine, HNSW
FT.CREATE idx:docs ON HASH PREFIX 1 doc: SCHEMA
  content TEXT
  category TAG
  embedding VECTOR HNSW 6 TYPE FLOAT32 DIM 1536 DISTANCE_METRIC COSINE</code></pre>
<pre><button class="copybtn">copy</button><code># KNN 5 kết quả, lọc metadata trước khi tìm vector (hybrid query)
FT.SEARCH idx:docs "(@category:{faq}) =&gt; [KNN 5 @embedding $vec AS score]"
  PARAMS 2 vec "&lt;bytes float32&gt;" SORTBY score DIALECT 2</code></pre>
<ul><li>Hai thuật toán: <strong>FLAT</strong> (chính xác 100%, tập nhỏ) và <strong>HNSW</strong> (ANN, tập lớn) — cùng logic chọn như Cosmos/pgvector; tham số HNSW: <code>M</code>, <code>EF_CONSTRUCTION</code> lúc build, <code>EF_RUNTIME</code> lúc truy vấn.</li>
<li>Vector truyền dưới dạng <strong>bytes FLOAT32</strong> qua <code>PARAMS</code>, và query KNN bắt buộc <code>DIALECT 2</code> — thiếu là lỗi cú pháp, distractor ưa dùng.</li>
<li>Phần <code>(@category:{faq})</code> đứng trước <code>=&gt;</code> là <strong>pre-filter</strong>: thu hẹp tập trước khi KNN — đúng mẫu "vector search kèm metadata filter" mà study guide nêu cho cả ba data service.</li>
<li>Vai trò trong kiến trúc: Redis vector là <strong>semantic cache</strong> (bắt câu hỏi tương tự đã trả lời) hoặc kho vector nóng cạnh cache thường — kho tri thức chính vẫn là pgvector/Cosmos.</li></ul>
<h3 id="02-data-services/d13-redis-pubsub-streams">3.5 Pub/sub và Streams cho điều phối tác vụ</h3>
<p>Redis không chỉ là cache và vector store. Khi nhiều replica của một AI service cần phối hợp (huỷ một job đang chạy, đẩy token về client, chia việc cho worker), Redis đưa ra hai công cụ rất khác nhau — chọn nhầm là mất message.</p>
<table><thead><tr><th></th><th><strong>Pub/Sub</strong></th><th><strong>Streams</strong></th></tr></thead><tbody>
<tr><td>Lưu trữ</td><td>Không — fire-and-forget</td><td>Có — append-only log</td></tr>
<tr><td>Subscriber offline lúc gửi</td><td><strong>Mất message</strong></td><td>Đọc lại được sau</td></tr>
<tr><td>Đọc lại lịch sử</td><td>Không</td><td>Có (<code>XRANGE</code>)</td></tr>
<tr><td>Chia việc cho nhiều worker</td><td>Không — mọi subscriber đều nhận bản sao</td><td>Có — consumer group, mỗi message về <em>một</em> consumer</td></tr>
<tr><td>Xác nhận đã xử lý</td><td>Không</td><td><code>XACK</code> + Pending Entries List</td></tr>
<tr><td>Hợp với</td><td>Phát sóng độ trễ thấp, mất được: invalidate cache, tín hiệu huỷ, presence</td><td>Hàng đợi việc, event sourcing, audit, pipeline nhiều bước</td></tr>
</tbody></table>
<pre><button class="copybtn">copy</button><code># Pub/Sub — mọi replica cùng nghe, ai offline thì mất phần
r.publish("cache:invalidate", "doc:42")

# Streams — hàng đợi việc có bảo đảm
r.xadd("jobs:embed", {"doc_id": "42", "lang": "vi"}, maxlen=100000, approximate=True)
r.xgroup_create("jobs:embed", "embedders", id="$", mkstream=True)   # $ = chỉ message mới, 0 = từ đầu

# Mỗi worker là một consumer trong nhóm; ">" = message chưa ai nhận
msgs = r.xreadgroup("embedders", "worker-1", {"jobs:embed": "&gt;"}, count=10, block=5000)
for stream, entries in msgs:
    for msg_id, data in entries:
        process(data)
        r.xack("jobs:embed", "embedders", msg_id)    # không XACK = nằm lại trong PEL

# Worker chết giữa chừng: nhặt lại message quá hạn của nó
r.xautoclaim("jobs:embed", "embedders", "worker-2", min_idle_time=60000, start_id="0-0")
</code></pre>
<ul><li><strong>Consumer group</strong> là thứ biến stream thành hàng đợi việc: mỗi message chỉ giao cho một consumer trong nhóm, và Redis nhớ ai đang giữ message nào trong <strong>Pending Entries List (PEL)</strong>.</li>
<li><strong>Không <code>XACK</code> thì message nằm lại PEL mãi mãi</strong> — đây là cơ chế an toàn, không phải lỗi. Worker chết là message vẫn còn đó chờ được nhặt.</li>
<li>Nhặt lại việc của worker chết: <code>XPENDING</code> để xem ai đang giữ gì và idle bao lâu, rồi <code>XCLAIM</code> (chỉ định từng id) hoặc <code>XAUTOCLAIM</code> (Redis 6.2+, tự duyệt PEL theo con trỏ — gọn hơn).</li>
<li><strong>Stream không tự dọn</strong>: dùng <code>XADD ... MAXLEN ~ 100000</code> (dấu <code>~</code> là cắt xấp xỉ, rẻ hơn nhiều so với cắt chính xác) hoặc <code>XTRIM</code> định kỳ, nếu không stream phình vô hạn trong bộ nhớ.</li>
<li>ID của entry có dạng <code>&lt;mili-giây&gt;-&lt;số thứ tự&gt;</code>; <code>*</code> để Redis tự sinh theo thứ tự tăng dần.</li>
<li><strong>Chọn giữa Streams và Service Bus</strong>: Streams nhanh và nằm sẵn trong Redis bạn đã có, hợp cho việc trong cùng một hệ thống; Service Bus mới có DLQ, scheduled message, duplicate detection, transaction và session — bài toán tích hợp nghiêm túc giữa các hệ thống vẫn thuộc về Service Bus (mục 2 của Domain 3).</li>
<li><em>Nguồn: <a href="https://redis.io/docs/latest/develop/data-types/streams/" target="_blank" rel="noopener">Redis — Streams</a>, đối chiếu ngày 18/09/2026.</em></li></ul>
<h3 id="02-data-services/khoa-redis-use-case-client-cluster">3.6 Use case, client library và giới hạn lệnh theo clustering policy</h3>
<p>Mục 3.2 và 3.6 đã nêu hai clustering policy. Khóa học còn nêu hệ quả thực tế của từng policy: lệnh nhiều key nào chạy được, lệnh nào bị chặn, client Python phải đổi thế nào. Kèm theo là ba use case chuẩn và ngưỡng metric để scale.</p>
<div class="tablewrap"><table><thead><tr><th>Use case</th><th>Mẫu</th><th>Điểm nhấn</th></tr></thead><tbody>
<tr><td><strong>Data cache</strong></td><td>Cache-aside: chỉ nạp khi có request, miss thì đọc DB rồi ghi vào cache</td><td>TTL + eviction policy; <strong>Active-Active geo-replication</strong> đồng bộ cache giữa nhiều region</td></tr>
<tr><td><strong>Content cache</strong></td><td>Header, footer, banner, menu, tức nội dung tĩnh ít đổi</td><td>Truy cập dưới mili giây, giảm số web server; <strong>Redis Output Cache Provider</strong> cho ASP.NET</td></tr>
<tr><td><strong>Session store</strong></td><td>Cookie chỉ giữ session id, dữ liệu phiên nằm trong Redis</td><td>Cookie to thì bị gửi kèm mọi request và response; Active-Active giữ session khi failover sang region khác</td></tr>
</tbody></table></div>
<ul><li>Client library: <strong>StackExchange.Redis</strong> (.NET), <strong>Lettuce</strong> (Java), <strong>node_redis</strong> (Node.js), <strong>redis-py</strong> (Python). Luôn dùng bản mới nhất.</li>
<li><strong>Enterprise</strong> clustering policy chạy được với <em>mọi</em> client. <strong>OSS</strong> clustering policy cần client hỗ trợ cluster. Với redis-py thì phải dùng <code>redis.cluster.RedisCluster</code> thay cho <code>redis.Redis</code>.</li>
<li>Cổng: <strong>10000</strong> cho Azure Managed Redis (và cache Enterprise cũ), <strong>6380</strong> cho Azure Cache for Redis. Hai dịch vụ dùng chung thư viện client.</li></ul>
<div class="tablewrap"><table><thead><tr><th></th><th>Lệnh nhiều key xuyên hash slot</th><th>Bị chặn</th></tr></thead><tbody>
<tr><td>OSS clustering</td><td>Mọi key phải cùng hash slot, không thì gặp lỗi <strong><code>CROSSSLOT</code></strong></td><td>—</td></tr>
<tr><td>Enterprise clustering</td><td>Chạy được <code>DEL</code>, <code>MSET</code>, <code>MGET</code>, <code>EXISTS</code>, <code>UNLINK</code>, <code>TOUCH</code></td><td><code>CLUSTER INFO</code>, <code>CLUSTER HELP</code>, <code>CLUSTER KEYSLOT</code>, <code>CLUSTER NODES</code>, <code>CLUSTER SLOTS</code></td></tr>
<tr><td>Active-Active (active geo-replication)</td><td>Chỉ <code>MGET</code>, <code>EXISTS</code>, <code>TOUCH</code></td><td><strong><code>FLUSHALL</code>, <code>FLUSHDB</code></strong></td></tr>
</tbody></table></div>
<p><strong>Best practice khóa học liệt kê</strong>:</p>
<ul><li>Chia dữ liệu lớn thành nhiều key có value nhỏ. Với response lớn: tối ưu để có nhiều value nhỏ, tăng cỡ VM để có thêm băng thông, hoặc dùng nhiều connection object luân phiên (round-robin).</li>
<li>Dùng client hỗ trợ <strong>pipelining</strong>. <strong>Không dùng <code>KEYS</code> ở production</strong>, dùng <code>SCAN</code>.</li>
<li>Đặt cache và app cùng region. Kết nối bằng <strong>hostname</strong>, không dùng IP public vì IP có thể đổi khi scale. TLS bắt buộc mặc định (1.2 và 1.3).</li>
<li>Scale khi <strong>Used Memory Percentage, CPU, Connected Clients hoặc Network bandwidth liên tục vượt 75%</strong>.</li>
<li>Production bật high availability, chỉ tắt cho dev/test. Bảo vệ dữ liệu bằng <strong>data persistence</strong> (phục hồi nhanh) hoặc <strong>import/export</strong> định kỳ sang storage account.</li>
<li>Tier Flash Optimized hiện vẫn là <strong>preview</strong>. Khóa học gợi ý Memory Optimized cho dev/test vì giá thấp.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "<code>MSET</code> nhiều key báo <code>CROSSSLOT</code>" → cache đang dùng OSS clustering. Cách sửa là dùng hash tag để các key cùng slot, hoặc chuyển sang Enterprise policy. "Không xoá sạch được cache bằng <code>FLUSHALL</code>" → cache đang bật active geo-replication.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/implement-data-operations-azure-managed-redis/2-explore-azure-managed-redis" target="_blank" rel="noopener">Explore Azure Managed Redis</a> và <a href="https://learn.microsoft.com/en-us/training/modules/implement-data-operations-azure-managed-redis/3-client-libraries-best-practices" target="_blank" rel="noopener">Client libraries and development best practices</a> (module Implement data operations in Azure Managed Redis, khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/khoa-redis-kieu-du-lieu-ttl-scan">3.7 Kiểu dữ liệu, họ lệnh expire, pipeline và invalidation theo pattern bằng <code>SCAN</code></h3>
<p>Mục 3.1 đã có bảng lệnh TTL cơ bản. Khóa học dạy thêm các kiểu dữ liệu ngoài string, các biến thể của lệnh expire, cách xoá theo pattern mà không làm đứng server, và mốc TTL theo tốc độ thay đổi của dữ liệu.</p>
<div class="tablewrap"><table><thead><tr><th>Kiểu</th><th>Lệnh</th><th>Dùng cho</th></tr></thead><tbody>
<tr><td>String</td><td><code>SET</code>, <code>GET</code>, <code>MSET</code>, <code>MGET</code></td><td>Text hoặc dữ liệu đã serialize</td></tr>
<tr><td>Hash</td><td><code>HSET</code>, <code>HGET</code>, <code>HGETALL</code></td><td>Object có nhiều field (profile, sản phẩm), <strong>tiết kiệm bộ nhớ hơn</strong> so với mỗi field một key</td></tr>
<tr><td>List</td><td><code>LPUSH</code>/<code>RPUSH</code>, <code>LPOP</code>/<code>RPOP</code>, <code>LRANGE</code></td><td>Hàng đợi (FIFO), stack (LIFO), activity feed, item gần đây</td></tr>
<tr><td>Số</td><td><code>INCR</code>, <code>DECR</code>, <code>INCRBY</code>, <code>DECRBY</code></td><td>Counter, rate limit. Các lệnh này <strong>nguyên tử</strong> nên không có race condition</td></tr>
</tbody></table></div>
<ul><li><code>decode_responses=True</code> tự đổi bytes sang str, hợp với text. Dữ liệu nhị phân (ảnh, pickle, <strong>vector bytes</strong>) thì phải để <code>False</code>.</li>
<li><code>EXISTS</code>, <code>DELETE</code> và mọi lệnh expire đều tác động lên <em>key</em>, nên chạy với mọi kiểu dữ liệu. <code>r.exists(k1, k2, k3)</code> trả về <em>số</em> key đang tồn tại.</li>
<li><code>SETEX</code> đặt value kèm TTL trong một lệnh nguyên tử, nhưng <strong>chỉ cho string</strong>. Hash hay List thì ghi dữ liệu trước rồi gọi <code>EXPIRE</code>.</li></ul>
<div class="tablewrap"><table><thead><tr><th>Lệnh</th><th>Đơn vị / ý nghĩa</th></tr></thead><tbody>
<tr><td><code>EXPIRE</code> / <code>PEXPIRE</code></td><td>TTL tính bằng giây / mili giây</td></tr>
<tr><td><code>EXPIREAT</code></td><td>Hết hạn tại một Unix timestamp</td></tr>
<tr><td><code>TTL</code> / <code>PTTL</code></td><td>TTL còn lại bằng giây / mili giây (−1 = không có TTL, −2 = key không tồn tại)</td></tr>
<tr><td><code>PERSIST</code></td><td>Gỡ TTL</td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code># Nhiều thao tác Hash trong một round trip
pipe = r.pipeline()
pipe.hgetall('user:1001')
pipe.hgetall('user:1002')
results = pipe.execute()          # list các dict

# Xoá theo pattern mà không block server: SCAN có con trỏ, KHÔNG dùng KEYS
def invalidate_user_cache(user_id):
    cursor, deleted = 0, 0
    while True:
        cursor, keys = r.scan(cursor, match=f'user:{user_id}:*', count=100)
        if keys:
            deleted += r.delete(*keys)
        if cursor == 0:
            break</code></pre>
<div class="tablewrap"><table><thead><tr><th>Dữ liệu</th><th>TTL khóa học gợi ý</th></tr></thead><tbody>
<tr><td>Đổi thường xuyên</td><td>1–5 phút</td></tr>
<tr><td>Đổi vừa phải</td><td>15–60 phút</td></tr>
<tr><td>Khá ổn định</td><td>1–24 giờ</td></tr>
<tr><td>Dữ liệu tham chiếu tĩnh</td><td>24 giờ trở lên</td></tr>
</tbody></table></div>
<ul><li>Ba mẫu invalidation trong khóa học: <strong>theo thời gian</strong> (TTL), <strong>thủ công khi cập nhật</strong> (ghi DB xong thì <code>r.delete(*cache_keys)</code> mọi key liên quan), và <strong>theo pattern</strong> (<code>SCAN</code> + <code>DELETE</code>).</li>
<li>redis-py đã có connection pool sẵn. Chỉ cần cấu hình thêm, và luôn bắt lỗi cho mọi thao tác Redis.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "xoá mọi key <code>user:1001:*</code> trên cache production" → <code>SCAN</code> với <code>match</code> rồi <code>DELETE</code>/<code>UNLINK</code> theo lô. <code>KEYS user:1001:*</code> cho kết quả đúng nhưng block server. Và "gán TTL cho một Hash" không làm bằng <code>SETEX</code> được, phải <code>HSET</code> rồi <code>EXPIRE</code>.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/implement-data-operations-azure-managed-redis/4-implement-data-operations" target="_blank" rel="noopener">Implement data operations in Azure Managed Redis — Implement data operations</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/khoa-redis-pubsub-pattern-streams-van-hanh">3.8 Pub/sub theo pattern, vận hành Streams (XINFO, BUSYGROUP, tự phục hồi) và mẫu kết hợp</h3>
<p>Mục 3.5 đã so sánh pub/sub với Streams và có vòng lặp worker cơ bản. Khóa học bổ sung subscribe theo pattern, các giới hạn của pub/sub, cách tạo consumer group idempotent, cách worker tự nhặt lại việc sau khi restart, và kiến trúc dùng cả hai cơ chế.</p>
<ul><li>Pub/sub là <strong>at-most-once</strong>: không lưu message, publisher không biết có ai nhận, và <strong>không có backpressure</strong>. Subscriber xử lý không kịp thì Redis vẫn tiếp tục đẩy, có thể gây tràn bộ nhớ hoặc mất message ở phía subscriber.</li>
<li>Kênh là chuỗi tự đặt tên, ví dụ <code>ai:conversations:123</code>. <code>PSUBSCRIBE</code> nghe theo glob pattern như <code>ai:*</code> hay <code>ml:models:*:status</code>, và message nhận được có <code>type</code> là <strong><code>'pmessage'</code></strong> (subscribe thường là <code>'message'</code>) kèm trường <code>pattern</code>.</li></ul>
<pre><button class="copybtn">copy</button><code>pubsub = redis_client.pubsub()
pubsub.psubscribe('ai:*')
for message in pubsub.listen():
    if message['type'] == 'pmessage':          # KHÔNG phải 'message'
        handle_ai_event(message['channel'], message['data'])</code></pre>
<pre><button class="copybtn">copy</button><code># Tạo consumer group idempotent: chạy lại được lúc khởi động mọi instance
try:
    redis_client.xgroup_create('ai:document:analysis', 'analysis-workers', '0', mkstream=True)
except redis.ResponseError as e:
    if 'BUSYGROUP' not in str(e):              # BUSYGROUP = group đã tồn tại, bỏ qua được
        raise

# ">" = message mới chưa giao cho ai; "0" = message ĐANG treo của chính consumer này
redis_client.xreadgroup('workers', 'worker-1', {'ai:queue': '&gt;'}, count=10)
redis_client.xreadgroup('workers', 'worker-1', {'ai:queue': '0'}, count=10)

# Sức khoẻ hàng đợi cho dashboard
info   = redis_client.xinfo_stream('ai:documents:queue')    # info['length']
groups = redis_client.xinfo_groups('ai:documents:queue')    # groups[0]['pending'], ['consumers']</code></pre>
<ul><li><strong>Tự phục hồi khi khởi động</strong>: worker đọc <code>xpending_range</code>, lọc các mục có <code>consumer == worker_id</code> của mình, xử lý lại rồi <code>XACK</code>. Vì vậy consumer name phải <strong>ổn định qua các lần restart</strong> (ví dụ hostname + pid, như trong ví dụ của khóa học). Việc mà worker chết bỏ lại thì một worker khác nhặt bằng <code>XCLAIM</code> (khóa học lấy ngưỡng idle 5 phút = 300000 ms).</li>
<li>Consumer group chia việc tự động: tăng từ 2 lên 20 worker không phải sửa code. Các worker dùng cùng tên group nhưng mỗi worker một consumer name.</li>
<li>Đánh đổi của Streams: latency cao hơn pub/sub vài mili giây (không đáng kể khi inference mất vài giây), code phức tạp hơn, và entry <strong>không tự hết hạn</strong>. Phải trim khi ghi bằng <code>maxlen=…, approximate=True</code>, hoặc gọi <code>xtrim</code> định kỳ.</li>
<li><strong>Mẫu kết hợp</strong>: endpoint nhận tài liệu gọi <code>XADD</code> việc cần làm vào stream (các worker chia nhau xử lý) <em>và</em> <code>PUBLISH</code> một sự kiện <code>document_received</code> (WebSocket, analytics, monitoring đều nhận). Pub/sub cũng là cầu nối để đẩy kết quả realtime xuống trình duyệt qua WebSocket (dùng <code>redis.asyncio</code>).</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "ba worker subscribe cùng kênh pub/sub nên mỗi request inference chạy ba lần" → chuyển sang Streams + consumer group. Ngược lại, "mọi instance API phải xoá model cache cục bộ khi model đổi" là broadcast, nên pub/sub là đúng, dùng consumer group thì chỉ <em>một</em> instance nhận được.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/implement-event-messaging-azure-managed-redis/2-redis-pub-sub" target="_blank" rel="noopener">Publish and subscribe to events with Redis pub/sub</a>, <a href="https://learn.microsoft.com/en-us/training/modules/implement-event-messaging-azure-managed-redis/3-redis-streams" target="_blank" rel="noopener">Implement task queues with Redis Streams</a>, <a href="https://learn.microsoft.com/en-us/training/modules/implement-event-messaging-azure-managed-redis/4-coordinate-multiple-subscribers" target="_blank" rel="noopener">Choose between broadcast and coordinated distribution</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/khoa-redis-hash-json-vector">3.9 Lưu vector bằng Hash hay JSON, nạp hàng loạt, range query và <code>EF_RUNTIME</code></h3>
<p>Mục 3.3 dùng JSON, mục 3.4 dùng Hash, nhưng tài liệu chưa nói khi nào chọn cái nào và vector được mã hoá khác nhau ra sao. Unit "Optimize Redis data structures" của khóa học dành riêng cho câu hỏi này.</p>
<div class="tablewrap"><table><thead><tr><th></th><th>Hash</th><th>JSON</th></tr></thead><tbody>
<tr><td>Vector lưu dạng</td><td><strong>Bytes</strong>: <code>np.array(v, dtype=np.float32).tobytes()</code></td><td><strong>Mảng số</strong>: <code>embedding.tolist()</code></td></tr>
<tr><td>Bộ nhớ</td><td>Thấp hơn (blob nhị phân: 1536 × 4 = 6.144 byte)</td><td>Cao hơn (thêm overhead của cấu trúc JSON)</td></tr>
<tr><td>Tốc độ truy vấn</td><td>Nhanh hơn</td><td>Chậm hơn chút</td></tr>
<tr><td>Cấu trúc</td><td>Chỉ field phẳng</td><td>Object lồng nhau, <strong>nhiều vector trong một document</strong></td></tr>
<tr><td>Schema index</td><td>Tên field trực tiếp, <code>IndexType.HASH</code></td><td>JSONPath <code>$.embedding</code> + <code>as_name</code>, <code>IndexType.JSON</code></td></tr>
<tr><td>Ghi</td><td><code>hset(key, mapping={...})</code></td><td><code>json().set(key, "$", doc)</code></td></tr>
</tbody></table></div>
<ul><li>Khóa học khuyên: phần lớn bài vector search có metadata đơn giản thì dùng <strong>Hash</strong>. Chỉ chọn JSON khi dữ liệu lồng nhau, cần nhiều vector cho mỗi item, hoặc app vốn đã dùng JSON.</li>
<li>Đổi từ Hash sang JSON (hoặc ngược lại) phải <strong>ingest lại</strong> dữ liệu (<code>np.frombuffer(…, dtype=np.float32).tolist()</code>), <strong>xoá index cũ</strong> và tạo index mới với <code>IndexType</code> tương ứng.</li>
<li>Key có prefix khớp (ví dụ <code>doc:</code>) được <strong>index tự động</strong> ngay khi ghi, không cần bước index riêng. Khi truy vấn, vector luôn truyền dưới dạng bytes FLOAT32 qua <code>query_params</code>, dù dữ liệu lưu bằng Hash hay JSON.</li></ul>
<pre><button class="copybtn">copy</button><code># Nạp hàng loạt: gửi từng HSET chỉ đạt vài trăm op/s; pipeline tăng 10–100 lần
pipeline = redis_client.pipeline()
for doc in documents:
    pipeline.hset(f"doc:{doc['id']}", mapping={
        "title": doc['title'],
        "embedding": np.array(doc['embedding'], dtype=np.float32).tobytes()})
pipeline.execute()

# Range query: lấy MỌI vector trong ngưỡng khoảng cách (có thể 3 hoặc 300 kết quả)
Query("@embedding:[VECTOR_RANGE 0.2 $query_vec]=&gt;{$YIELD_DISTANCE_AS: score}") \\
    .return_fields("title", "score").sort_by("score").dialect(2)

# EF_RUNTIME đặt ngay trong query KNN, chỉnh được cho từng truy vấn
Query("*=&gt;[KNN 10 @embedding $query_vec EF_RUNTIME 100 AS score]").dialect(2)</code></pre>
<ul><li>Cú pháp KNN: <code>*</code> = mọi document, <code>=&gt;</code> = bắt đầu phần vector, <code>KNN 5</code> = 5 láng giềng, <code>@embedding</code> = field vector, <code>$query_vec</code> = tham số, <code>AS score</code> = tên cột khoảng cách để sort.</li>
<li><code>EF_RUNTIME</code> mặc định cỡ <strong>10</strong> (ưu tiên tốc độ). Khóa học khuyên bắt đầu từ 50 và nâng lên 100–200 khi cần recall cao hơn.</li>
<li>Chọn thuật toán: <strong>FLAT</strong> cho tập dưới <strong>10.000 vector</strong> khi cần chính xác tuyệt đối (khóa học ước lượng 10.000 vector mất ~10 ms, 1 triệu mất ~1.000 ms). <strong>HNSW</strong> cho tập lớn hơn, truy vấn dưới 10 ms với độ chính xác 95–99%.</li>
<li>Kiểu dữ liệu: <strong>FLOAT32</strong> (4 byte mỗi chiều, 6 KB cho 1536 chiều, ~7 chữ số chính xác) là chuẩn. <strong>FLOAT64</strong> (8 byte, 12 KB) gấp đôi bộ nhớ mà không cải thiện độ chính xác với embedding AI, khóa học chỉ dành nó cho nghiên cứu chuyên biệt.</li>
<li>Metric: <strong>COSINE</strong> cho text embedding (OpenAI, Cohere, Sentence Transformers), <strong>L2</strong> cho image embedding và dữ liệu không gian, <strong>IP</strong> chỉ khi vector đã chuẩn hoá. Dùng L2 cho embedding được huấn luyện với cosine cho kết quả đúng về toán nhưng vô nghĩa về ngữ nghĩa.</li>
<li><code>DIM</code> phải khớp đúng số chiều của model. Lệch là lỗi khi tạo index hoặc khi ingest, và query vector 768 chiều gửi vào index 1536 chiều bị từ chối.</li></ul>
<div class="tablewrap"><table><thead><tr><th>Use case</th><th>TYPE</th><th>Metric</th><th>Thuật toán</th></tr></thead><tbody>
<tr><td>Text search (nhỏ)</td><td>FLOAT32</td><td>COSINE</td><td>FLAT</td></tr>
<tr><td>Text search (lớn)</td><td>FLOAT32</td><td>COSINE</td><td>HNSW</td></tr>
<tr><td>Image similarity</td><td>FLOAT32</td><td>L2</td><td>HNSW</td></tr>
<tr><td>Recommendation</td><td>FLOAT32</td><td>COSINE</td><td>HNSW</td></tr>
</tbody></table></div>
<blockquote><p><strong>Bẫy thi:</strong> đề cho đoạn code ghi <code>embedding.tolist()</code> vào <code>hset</code> rồi hỏi vì sao KNN không trả gì → Hash cần bytes (<code>tobytes()</code>), còn <code>tolist()</code> là cách của JSON. "Muốn mọi kết quả đủ gần chứ không cố định top-k" → <code>VECTOR_RANGE</code>, không phải KNN.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/implement-vector-storage-azure-managed-redis/2-index-query-vector-data" target="_blank" rel="noopener">Index and query vector data</a>, <a href="https://learn.microsoft.com/en-us/training/modules/implement-vector-storage-azure-managed-redis/3-vector-types-index-strategy" target="_blank" rel="noopener">Choose vector types and indexing strategies</a>, <a href="https://learn.microsoft.com/en-us/training/modules/implement-vector-storage-azure-managed-redis/4-optimize-redis-data-structure" target="_blank" rel="noopener">Optimize Redis data structures for vector storage</a> (module Implement vector storage in Azure Managed Redis, khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="02-data-services/trien-khai-redis">3.10 Triển khai Azure Managed Redis — từng bước</h3>
<p>Thứ tự: <strong>chọn tier theo nhu cầu vector (không Flash) → bật module RediSearch lúc tạo → clustering policy → Entra ID auth → private endpoint</strong>. Managed Redis dùng nhóm lệnh <code>az redisenterprise</code>.</p>
<pre><button class="copybtn">copy</button><code># 1. Cache + database mặc định, bật RediSearch ngay lúc tạo (không thêm sau được)
az redisenterprise create -g rg-ai200 -n redis-rag -l eastus \\
  --sku Balanced_B5 --modules name=RediSearch \\
  --clustering-policy EnterpriseCluster --eviction-policy NoEviction --minimum-tls-version 1.2

# 2. Xem endpoint (cổng 10000) và trạng thái
az redisenterprise show -g rg-ai200 -n redis-rag --query "{host:hostName,state:provisioningState}"
az redisenterprise database show -g rg-ai200 --cluster-name redis-rag

# 3. Private endpoint (group-id của Redis Enterprise/Managed Redis là redisEnterprise)
az network private-endpoint create -g rg-ai200 -n pe-redis --vnet-name vnet1 --subnet snet-pe \\
  --private-connection-resource-id $REDIS_ID --group-id redisEnterprise --connection-name redis</code></pre>
<ul><li><strong>Portal</strong>: Create → <em>Azure Managed Redis</em> → tab <em>Advanced</em> chọn module và clustering policy — hai thứ này khóa sau khi tạo.</li>
<li><strong>Entra ID</strong>: trong blade <em>Authentication</em> → tab <em>Microsoft Entra Authentication</em> thêm managed identity của app (tạo access policy assignment, mặc định full quyền); client Python dùng <code>redis-entraid</code> (credential provider tự lấy/làm mới token, scope <code>https://redis.azure.com/.default</code>). Cache mới đã bật Entra và <strong>tắt access keys sẵn</strong> — chỉ cần tắt nếu trước đó đã bật.</li>
<li><strong>Kiểm tra</strong>: <code>redis-cli -h &lt;host&gt; -p 10000 --tls</code> rồi tạo thử index bằng <code>FT.CREATE</code> (hoặc <code>FT._LIST</code>); kiểm tra kết nối Entra nhanh bằng <code>az redisenterprise test-connection -g rg-ai200 -n redis-rag</code>.</li>
<li><strong>Bẫy</strong>: RediSearch đi với clustering policy <strong>Enterprise</strong> — chọn OSS cluster rồi đòi vector index là cấu hình sai; RediSearch còn bắt buộc eviction policy <code>NoEviction</code> (CLI mặc định VolatileLRU); tier Flash Optimized không có RediSearch; client cũ quen cổng 6380 (Azure Cache for Redis) sẽ không kết nối được Managed Redis ở cổng 10000.</li></ul>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/azure/redis/quickstart-create-managed-redis" target="_blank" rel="noopener">Quickstart: create Azure Managed Redis</a>, <a href="https://learn.microsoft.com/en-us/azure/redis/redis-modules" target="_blank" rel="noopener">Modules in Azure Managed Redis</a>, <a href="https://learn.microsoft.com/en-us/azure/redis/entra-for-authentication" target="_blank" rel="noopener">Entra ID for authentication</a> trên Microsoft Learn, đối chiếu ngày 26/09/2026.</em></p>
<hr>
<h2 id="02-data-services/d-so-sanh-nhanh-3-vector-store-cau-hoi-chon-dich-vu-nao">4. So sánh nhanh 3 vector store (câu hỏi "chọn dịch vụ nào")</h2>
<div class="tablewrap"><table><thead><tr><th>Tiêu chí</th><th>Cosmos DB for NoSQL</th><th>PostgreSQL + pgvector</th><th>Azure Managed Redis</th></tr></thead><tbody><tr><td>Mô hình</td><td>Document NoSQL, global distribution</td><td>Quan hệ, SQL đầy đủ, JOIN</td><td>Key-value in-memory</td></tr><tr><td>Vector index</td><td>flat / quantizedFlat / <strong>diskANN</strong></td><td>HNSW / IVFFlat / <strong>DiskANN</strong></td><td>FLAT / <strong>HNSW</strong></td></tr><tr><td>Điểm mạnh</td><td>Scale ngang cực lớn, multi-region write, change feed, SLA độ trễ</td><td>Truy vấn phức tạp, transaction, filter SQL mạnh, chi phí tốt</td><td>Latency &lt; ms, semantic cache, session</td></tr><tr><td>Điểm yếu</td><td>Cần hiểu RU &amp; partition key</td><td>Scale ngang khó hơn, phải quản index/vacuum</td><td>RAM đắt, không bền vững bằng</td></tr><tr><td>Chọn khi</td><td>App toàn cầu, khối lượng ghi lớn, cần change feed</td><td>Đã có dữ liệu quan hệ, cần filter/JOIN phong phú</td><td>Cần cache/độ trễ cực thấp cho tầng nóng</td></tr></tbody></table></div>
<hr>
<h2 id="02-data-services/e-checklist-on-domain-2">5. Checklist ôn Domain 2</h2>
<ul><li class="task" data-key="02-data-services:0"><input type="checkbox">Point read vs single-partition query vs cross-partition query — chi phí RU</li><li class="task" data-key="02-data-services:1"><input type="checkbox">Sửa được indexing policy: exclude <code>/embedding/*</code>, thêm composite index, thêm vectorIndexes</li><li class="task" data-key="02-data-services:2"><input type="checkbox">Thuộc bảng consistency level và hệ số RU 2× của Strong/Bounded staleness</li><li class="task" data-key="02-data-services:3"><input type="checkbox">Viết được query <code>VectorDistance</code> + <code>ORDER BY</code> + <code>TOP</code> + metadata filter</li><li class="task" data-key="02-data-services:4"><input type="checkbox">Change feed: lease container, 2 mode, idempotent, Functions trigger</li><li class="task" data-key="02-data-services:5"><input type="checkbox"><code>azure.extensions</code> trước khi <code>CREATE EXTENSION vector</code></li><li class="task" data-key="02-data-services:6"><input type="checkbox">Toán tử <code>&lt;=&gt;</code> ↔ <code>vector_cosine_ops</code>; tham số <code>m</code>, <code>ef_construction</code>, <code>hnsw.ef_search</code>, <code>lists</code>, <code>probes</code></li><li class="task" data-key="02-data-services:7"><input type="checkbox"><code>halfvec</code>/DiskANN để giảm RAM &amp; compute; Memory Optimized tier cho HNSW</li><li class="task" data-key="02-data-services:8"><input type="checkbox">PgBouncer port 6432 / connection pool cho serverless</li><li class="task" data-key="02-data-services:9"><input type="checkbox">Redis: <code>SET ... EX</code>, <code>TTL</code>, <code>UNLINK</code>, eviction policy, <code>FT.CREATE</code> với VectorField + KNN dialect 2</li><li class="task" data-key="02-data-services:deploy"><input type="checkbox">Tự triển khai Cosmos DB (vector policy + data-plane RBAC), PostgreSQL (allowlist <code>vector</code>, Entra auth, PgBouncer) và Managed Redis (RediSearch lúc tạo)</li></ul>
</section>
<section class="doc" id="03-messaging-functions" data-title="3. Messaging &amp; Functions" data-weight="20–25%" hidden>
<h1 id="03-messaging-functions/domain-3-ket-noi-va-su-dung-cac-dich-vu-azure-2025">Domain 3 — Kết nối và sử dụng các dịch vụ Azure (20–25%)</h1>
<p>Gồm 2 nhóm: <strong>messaging/eventing</strong> (Service Bus, Event Grid) và <strong>Azure Functions</strong>.</p>
<h2 id="03-messaging-functions/1-message-vs-event-phan-biet-truoc-khi-hoc-chi-tiet">1. Message vs Event — phân biệt trước khi học chi tiết</h2>
<div class="tablewrap"><table><thead><tr><th></th><th><strong>Message</strong> (Service Bus, Queue Storage)</th><th><strong>Event</strong> (Event Grid, Event Hubs)</th></tr></thead><tbody><tr><td>Bản chất</td><td>Dữ liệu do producer gửi để <strong>được xử lý</strong>; producer kỳ vọng có hành động</td><td><strong>Thông báo</strong> một việc đã xảy ra; producer không quan tâm ai xử lý</td></tr><tr><td>Kích thước</td><td>Lớn (payload nghiệp vụ)</td><td>Nhỏ (metadata + link)</td></tr><tr><td>Ràng buộc</td><td>Producer–consumer có hợp đồng chặt</td><td>Rời rạc (loosely coupled)</td></tr></tbody></table></div>
<p>Chọn dịch vụ:</p>
<div class="tablewrap"><table><thead><tr><th>Nhu cầu</th><th>Dịch vụ</th></tr></thead><tbody><tr><td>Hàng đợi tin cậy, FIFO, transaction, DLQ, ordering, at-least-once nghiêm ngặt</td><td><strong>Service Bus</strong></td></tr><tr><td>Phản ứng với sự kiện (blob created, resource changed, custom event), fan-out HTTP</td><td><strong>Event Grid</strong></td></tr><tr><td>Streaming/telemetry hàng triệu event/giây, replay theo offset</td><td><strong>Event Hubs</strong></td></tr><tr><td>Hàng đợi đơn giản, rẻ, &gt; 80 GB, không cần tính năng nâng cao</td><td><strong>Queue Storage</strong></td></tr></tbody></table></div>
<hr>
<h2 id="03-messaging-functions/2-azure-service-bus">2. Azure Service Bus</h2>
<h3 id="03-messaging-functions/21-thuc-the">2.1 Thực thể</h3>
<ul><li><strong>Queue</strong>: 1 gửi → 1 nhận (point-to-point, competing consumers).</li><li><strong>Topic + Subscription</strong>: 1 gửi → nhiều nhận (pub/sub). Mỗi subscription là một queue ảo có bộ lọc riêng.</li><li>Tier: Basic (chỉ queue) / <strong>Standard</strong> (topic, ~256 KB message) / <strong>Premium</strong> (1 MB–100 MB, tài nguyên riêng, VNet, geo-DR, JMS 2.0).</li></ul>
<h3 id="03-messaging-functions/22-guinhan-bang-python-sdk">2.2 Gửi/nhận bằng Python SDK</h3>
<pre><button class="copybtn">copy</button><code>from azure.servicebus import ServiceBusClient, ServiceBusMessage
from azure.identity import DefaultAzureCredential

client = ServiceBusClient("mysb.servicebus.windows.net", DefaultAzureCredential())

# Gửi (batch để tăng throughput)
with client.get_queue_sender("docs-to-embed") as sender:
    batch = sender.create_message_batch()
    for doc in docs:
        batch.add_message(ServiceBusMessage(
            body=json.dumps(doc),
            content_type="application/json",
            message_id=doc["id"],          # dùng cho duplicate detection
            session_id=doc["tenant"],      # bắt buộc nếu queue bật sessions (FIFO theo session)
            subject="embed",               # ~ Label, dùng cho correlation filter
        ))
    sender.send_messages(batch)

# Nhận: PEEK_LOCK (mặc định) — an toàn, phải complete/abandon/dead-letter
with client.get_queue_receiver("docs-to-embed", max_wait_time=30) as receiver:
    for msg in receiver:
        try:
            process(json.loads(str(msg)))
            receiver.complete_message(msg)                 # xoá khỏi queue
        except TransientError:
            receiver.abandon_message(msg)                  # trả lại queue, delivery_count++
        except PoisonMessage as e:
            receiver.dead_letter_message(msg,
                reason="InvalidSchema", error_description=str(e))</code></pre>
<p><strong>Receive mode:</strong></p>
<ul><li><code>PEEK_LOCK</code> (mặc định): khoá message trong <code>LockDuration</code> (mặc định 1 phút, tối đa 5 phút). Xử lý lâu → <code>receiver.renew_message_lock(msg)</code>. Mất lock → message quay lại queue → <strong>xử lý phải idempotent</strong>.</li><li><code>RECEIVE_AND_DELETE</code>: xoá ngay khi nhận, nhanh nhưng <strong>mất message nếu crash</strong> (at-most-once).</li></ul>
<p><strong>Bẫy "cấu hình đúng hết mà không nhận được message":</strong> tạo client hay <code>SubscriptionClient</code> chỉ là <em>mở kết nối</em>, chưa message nào được lấy về. Phải thực sự <strong>chạy vòng lặp nhận</strong> (<code>for msg in receiver:</code> ở Python) hoặc <strong>đăng ký handler rồi khởi động processor</strong> — <code>RegisterMessageHandler(...)</code> ở SDK cũ, còn SDK mới là <code>client.CreateProcessor(topic, subscription)</code> + <code>ProcessMessageAsync</code>/<code>ProcessErrorAsync</code> + <code>StartProcessingAsync()</code>. Đề mô tả "portal thấy message đang vào subscription nhưng app im lặng" gần như luôn là thiếu bước này, không phải lỗi filter hay quyền.</p>
<h3 id="03-messaging-functions/23-dead-letter-queue-dlq-chac-chan-co-trong-de">2.3 Dead-letter queue (DLQ) — chắc chắn có trong đề</h3>
<p>DLQ là <strong>sub-queue</strong> tự động của mỗi queue/subscription, địa chỉ: <code>&lt;queue&gt;/$deadletterqueue</code>.</p>
<p>Message vào DLQ khi:</p>
<ol><li><strong>MaxDeliveryCountExceeded</strong> — vượt <code>MaxDeliveryCount</code> (mặc định <strong>10</strong>) do abandon/lock timeout lặp lại.</li><li><strong>TTLExpiredException</strong> — hết <code>TimeToLive</code> và queue bật <code>DeadLetteringOnMessageExpiration</code>.</li><li><strong>Ứng dụng gọi <code>dead_letter_message()</code> tường minh</strong> (poison message: sai schema, nghiệp vụ không hợp lệ).</li><li>Lỗi đánh giá filter ở subscription (<code>DeadLetteringOnFilterEvaluationExceptions</code>).</li><li>Vượt giới hạn kích thước header / lỗi khi forward (<code>ForwardTo</code> không tồn tại).</li></ol>
<p>Đọc &amp; xử lý lại DLQ:</p>
<pre><button class="copybtn">copy</button><code>from azure.servicebus import ServiceBusSubQueue
dlq = client.get_queue_receiver("docs-to-embed", sub_queue=ServiceBusSubQueue.DEAD_LETTER)
for msg in dlq:
    print(msg.dead_letter_reason, msg.dead_letter_error_description, msg.delivery_count)
    # "resubmit": gửi lại bản sao vào queue chính sau khi sửa lỗi
    sender.send_messages(ServiceBusMessage(str(msg)))
    dlq.complete_message(msg)</code></pre>
<blockquote><p>Bẫy: message trong DLQ <strong>không có TTL riêng</strong> → tồn tại đến khi bị lấy ra; phải có alert (<code>DeadletteredMessages</code> metric) + quy trình xử lý.</p></blockquote>
<h3 id="03-messaging-functions/24-topics-subscriptions-filters">2.4 Topics, subscriptions, filters</h3>
<p>Ba loại rule filter:</p>
<div class="tablewrap"><table><thead><tr><th>Filter</th><th>Cú pháp</th><th>Ghi chú</th></tr></thead><tbody><tr><td><strong>Boolean</strong></td><td><code>TrueRuleFilter</code> / <code>FalseRuleFilter</code></td><td><code>$Default</code> của subscription mới là TrueFilter (nhận tất cả)</td></tr><tr><td><strong>Correlation</strong></td><td>Khớp chính xác <code>CorrelationId</code>, <code>Subject/Label</code>, <code>MessageId</code>, <code>To</code>, <code>ReplyTo</code>, <code>ContentType</code>, và <strong>custom properties</strong></td><td><strong>Hiệu năng cao nhất</strong> — chọn khi chỉ cần so sánh bằng</td></tr><tr><td><strong>SQL</strong></td><td><code>"docType = 'invoice' AND priority &gt; 3"</code></td><td>Linh hoạt (LIKE, IN, AND/OR, IS NULL), nhưng tốn tài nguyên hơn</td></tr></tbody></table></div>
<pre><button class="copybtn">copy</button><code>from azure.servicebus.management import ServiceBusAdministrationClient, CorrelationRuleFilter, SqlRuleFilter
adm = ServiceBusAdministrationClient("mysb.servicebus.windows.net", DefaultAzureCredential())
adm.create_subscription("doc-events", "embed-sub")
adm.delete_rule("doc-events", "embed-sub", "$Default")          # phải xoá default!
adm.create_rule("doc-events", "embed-sub", "only-pdf",
                filter=CorrelationRuleFilter(subject="pdf-uploaded"))
adm.create_rule("doc-events", "embed-sub", "high-priority",
                filter=SqlRuleFilter("priority &gt; 5 AND lang = 'vi'"))</code></pre>
<blockquote><p>Bẫy kinh điển: tạo filter mới nhưng <strong>quên xoá rule <code>$Default</code></strong> → subscription vẫn nhận mọi message.</p></blockquote>
<p><strong>SQL Action</strong> có thể sửa/thêm property khi message đi qua rule: <code>SqlRuleAction("SET routedBy='vi-rule'")</code>.</p>
<h3 id="03-messaging-functions/25-tinh-nang-khac-hay-hoi">2.5 Tính năng khác hay hỏi</h3>
<div class="tablewrap"><table><thead><tr><th>Tính năng</th><th>Mô tả</th></tr></thead><tbody><tr><td><strong>Sessions</strong></td><td>FIFO + state theo <code>SessionId</code>; receiver dùng <code>get_queue_receiver(session_id=...)</code> hoặc <code>NEXT_AVAILABLE_SESSION</code></td></tr><tr><td><strong>Duplicate detection</strong></td><td>Bật ở queue/topic + đặt <code>message_id</code>; loại trùng trong <code>DuplicateDetectionHistoryTimeWindow</code></td></tr><tr><td><strong>Scheduled message</strong></td><td><code>sender.schedule_messages(msg, scheduled_time_utc)</code> / <code>cancel_scheduled_messages</code></td></tr><tr><td><strong>Deferral</strong></td><td><code>receiver.defer_message(msg)</code> rồi lấy lại bằng <code>sequence_number</code></td></tr><tr><td><strong>Auto-forward</strong></td><td>Nối chuỗi queue/topic không cần code</td></tr><tr><td><strong>Transactions</strong></td><td><code>with client.get_transaction()</code> — gửi/nhận nguyên tử trong cùng namespace</td></tr><tr><td><strong>Prefetch</strong></td><td>Tăng throughput; cẩn thận lock hết hạn với message chờ lâu</td></tr><tr><td><strong>Autoscale worker</strong></td><td>KEDA <code>azure-servicebus</code> (xem Domain 1)</td></tr></tbody></table></div>
<p>Chỉ số giám sát: <code>ActiveMessages</code>, <code>DeadletteredMessages</code>, <code>ScheduledMessages</code>, <code>ServerErrors</code>, <code>ThrottledRequests</code>.</p>
<h3 id="03-messaging-functions/4b4-duoi-nap-capo-peek-lock-amqp">2.6 Dưới nắp capo: PEEK_LOCK và lock renewal ở tầng AMQP</h3>
<ul><li>PEEK_LOCK không "lấy message ra khỏi queue": broker chỉ <strong>đánh dấu khóa</strong> message và trao cho receiver một <strong>lock token</strong>. Message vẫn nằm trên broker; <code>complete/abandon/dead-letter</code> là các thao tác <em>trên token đó</em> qua link AMQP.</li>
<li>Khóa có hạn (mặc định 1 phút – tối đa 5 phút): xử lý lâu hơn thì SDK phải <strong>renew lock</strong> — một management operation lặp lại nền. Mất mạng, GC pause, hay xử lý quá <code>MaxAutoLockRenewalDuration</code> → khóa hết hạn → broker coi như receiver chết, <strong>tăng DeliveryCount và giao lại</strong>. Đây chính là nguồn gốc kỹ thuật của at-least-once: giữa lúc "xử lý xong" và "complete được ghi nhận" luôn có khe hở.</li>
<li>RECEIVE_AND_DELETE xóa ngay lúc giao — nhanh (bớt một round-trip) nhưng receiver chết là mất message: at-most-once. Chọn giữa hai mode là chọn giữa <em>mất</em> và <em>trùng</em>; vì trùng xử lý được bằng idempotency còn mất thì không, PEEK_LOCK là mặc định đúng.</li>
<li>Session dưới nắp: broker gắn <strong>khóa cấp session</strong> — một receiver giữ độc quyền cả <code>SessionId</code> chứ không phải từng message; vì thế thứ tự trong session được bảo đảm còn throughput = số session đang mở song song.</li></ul>
<p><strong>Lock token là cái gì.</strong> Khi nhận ở chế độ PEEK_LOCK, broker trả về message kèm một <em>lock token</em> (GUID) và một mốc <code>locked_until_utc</code>. Mọi thao tác sau đó — <code>complete</code>, <code>abandon</code>, <code>dead_letter</code>, <code>defer</code>, <code>renew_message_lock</code> — đều là lệnh gửi ngược lên broker <em>kèm token đó</em>, chứ không phải thao tác trên bản sao message trong bộ nhớ client. Hệ quả: token hết hạn thì mọi lệnh trên nó đều thất bại với <code>MessageLockLostError</code>, kể cả khi bạn <em>đã</em> xử lý xong — và message vẫn được giao lại cho người khác.</p>
<ul><li><strong>Gia hạn khoá không tự có.</strong> SDK Python có <code>AutoLockRenewer</code>, phải tự tạo và đăng ký message vào đó; nó chạy một tác vụ nền gọi <code>renew_message_lock</code> trước mỗi lần hết hạn. Ngân sách gia hạn có trần (<code>max_lock_renewal_duration</code>) — hết trần là buông, message quay lại hàng đợi.</li>
<li><strong>Prefetch làm khoá chạy sớm.</strong> Đặt <code>prefetch_count</code> cao thì broker giao trước cả lô về bộ nhớ client và <strong>khoá bắt đầu đếm ngay từ lúc đó</strong>, không phải lúc code bạn lấy message ra khỏi hàng chờ nội bộ. Prefetch 100 với mỗi message xử lý 5 giây nghĩa là message thứ 100 nằm chờ 500 giây — vượt xa trần khoá 5 phút, khoá hết hạn hàng loạt, delivery count tăng vọt và cuối cùng cả lô vào DLQ dù không có gì hỏng. <strong>Quy tắc: prefetch × thời gian xử lý mỗi message phải nhỏ hơn LockDuration.</strong></li>
<li><strong>Khoá session là khoá khác.</strong> Với queue/subscription có session, broker khoá cả <code>SessionId</code> cho một receiver và có mốc hết hạn riêng, gia hạn bằng <code>renew_session_lock</code>. Message bên trong session <em>không</em> có khoá riêng nữa. Nghĩa là xử lý chậm trong một session làm mất khoá <em>session</em>, và cả session chuyển sang consumer khác — không chỉ một message.</li>
<li><strong>Vì sao at-least-once là điều không tránh được.</strong> Giữa thời điểm app "xử lý xong" và thời điểm broker ghi nhận <code>complete</code> luôn tồn tại một khoảng — mạng đứt, tiến trình chết, GC dừng thế giới trong khoảng đó là message được giao lại dù việc đã làm rồi. Không có cấu hình nào đóng được khe hở này; chỉ có thiết kế consumer <strong>idempotent</strong> (khoá theo <code>MessageId</code>, hoặc upsert theo khoá nghiệp vụ) mới xử lý được.</li>
<li><strong>Chẩn đoán qua <code>delivery_count</code></strong>: tăng đều mà code không hề gọi <code>abandon</code> nghĩa là khoá đang hết hạn — nghi ba thứ theo thứ tự: xử lý lâu hơn <code>LockDuration</code> mà không gia hạn, prefetch quá cao, hoặc tiến trình bị treo/GC lâu.</li></ul>
<h3 id="03-messaging-functions/10-han-muc-auto-forward-tier">2.7 Hạn mức Service Bus, auto-forward và chọn tier</h3>
<p>Phần này là những con số và ranh giới mà đề hay dựng kịch bản quanh nó: "gửi message 5 MB", "topic cần 3.000 subscription", "chuỗi forward bốn tầng". Biết số thì loại được ngay hai ba phương án.</p>
<h3 id="03-messaging-functions/10a-han-muc">2.8 Hạn mức phải nhớ</h3>
<table><thead><tr><th>Hạn mức</th><th>Basic</th><th>Standard</th><th>Premium</th></tr></thead><tbody>
<tr><td><strong>Kích thước một message</strong></td><td>256 KB</td><td>256 KB</td><td>mặc định 1 MB, <strong>nâng tới 100 MB</strong> qua AMQP (large message support)</td></tr>
<tr><td>Kích thước một queue/topic</td><td colspan="2">1–5 GB, hoặc 80 GB nếu bật partitioning</td><td>80 GB</td></tr>
<tr><td>Kích thước namespace</td><td colspan="2">400 GB</td><td>1 TB mỗi messaging unit</td></tr>
<tr><td>Số queue + topic mỗi namespace</td><td colspan="2">10.000</td><td>1.000 mỗi MU, tối đa 16.000</td></tr>
<tr><td>Thao tác mỗi giây</td><td colspan="2">1.000</td><td>không có trần cố định, tuỳ số MU</td></tr>
<tr><td>Topic, session, transaction, dedup, auto-forward</td><td><strong>Basic không có</strong> (chỉ queue; dead-lettering thì queue Basic vẫn có)</td><td colspan="2">có đủ</td></tr>
</tbody></table>
<ul><li>Chung cho mọi tier: <strong>2.000 subscription mỗi topic</strong>; <strong>2.000 SQL filter</strong> nhưng tới <strong>100.000 correlation filter</strong> mỗi topic (thêm một lý do chọn correlation filter khi chỉ cần so khớp chính xác); <strong>100 message mỗi transaction</strong>; <code>peek</code> tối đa <strong>250</strong> message một lần; tối đa <strong>5.000</strong> kết nối AMQP đồng thời trên namespace.</li>
<li><strong>Thuộc tính message</strong>: mỗi property tối đa 32 KB, tổng mọi property (cả system lẫn user) không quá <strong>64 KB</strong>. Nhét cả đoạn văn bản vào application properties là chạm trần này chứ không phải trần 256 KB của payload.</li>
<li>Message lớn hơn 1 MB gửi vào topic bị <strong>tính nhiều lần</strong> theo dung lượng: X + 1 lần, với X là số subscription khớp filter.</li>
<li><strong>Quy tắc làm bài</strong>: đề nói "payload vài MB" là Premium; đề nói "cần topic/session/dedup" là loại Basic ngay; đề nói "vượt 2.000 subscription" là phải chồng tầng topic bằng auto-forward.</li></ul>
<h3 id="03-messaging-functions/10b-auto-forward">2.9 Auto-forward — nối chuỗi thực thể, và bốn ràng buộc hay bị bỏ qua</h3>
<p><code>ForwardTo</code> khiến Service Bus tự rút message khỏi queue/subscription nguồn và bỏ vào một queue/topic khác <em>trong cùng namespace</em>. Đích phải tồn tại <strong>trước</strong> khi tạo nguồn, nếu không lệnh tạo nguồn báo lỗi.</p>
<ul><li><strong>Không nhận trực tiếp được từ thực thể nguồn.</strong> Service Bus từ chối tạo receiver trên queue/subscription đã bật auto-forward (SDK trả lỗi <code>amqp:not-allowed</code>). Hợp lý: message không bao giờ nằm lại đó. Muốn xem thì đọc ở đích.</li>
<li><strong>Tối đa bốn chặng.</strong> Mỗi lần forward là một hop; quá bốn hop là message bị dead-letter. Lưu ý hop còn tăng trong kịch bản <em>send via</em> (transfer queue của transaction).</li>
<li><strong>Đích đầy hoặc bị disable → message rơi vào DLQ của <em>thực thể nguồn</em></strong>, không phải của đích. Chúng nằm đó cho tới khi bạn tự đọc và xử lý — không có cơ chế tự thử lại khi đích trống chỗ.</li>
<li><strong>Queue/subscription bật session KHÔNG làm nguồn auto-forward được</strong> — một thực thể không thể vừa có session vừa có <code>ForwardTo</code>, đặt là lỗi. Ngược lại, forward <em>vào</em> một đích có session thì được, và message giữ nguyên <code>SessionId</code>; message không có session id mà forward vào đích có session thì bị dead-letter ở nguồn.</li>
<li><strong>Tính tiền theo từng chặng</strong>: gửi một message vào topic có 20 subscription, mỗi subscription auto-forward tiếp, được tính <strong>21 thao tác</strong>.</li>
<li><strong>Bẫy bảo mật</strong>: ai có quyền quản trị trên queue nguồn có thể trỏ <code>ForwardTo</code> sang một đích mà họ đọc được — tức lấy được message dù <em>không</em> có quyền nhận trên nguồn. Vì vậy app chỉ gửi/nhận thì gán <strong>Azure Service Bus Data Sender / Data Receiver</strong>, đừng gán quyền quản trị.</li>
<li>Khi chồng tầng topic để vượt trần 2.000 subscription: tầng một ít subscription, tầng hai nhiều — 20 × 200 cho thông lượng tốt hơn 200 × 20.</li></ul>
<h3 id="03-messaging-functions/10c-chon-tier">2.10 Chọn tier</h3>
<ul><li><strong>Basic</strong> — chỉ có queue. Không topic, không session, không transaction, không dedup, không auto-forward. Gần như chỉ hợp làm hàng đợi việc đơn giản, và khi đó Queue Storage thường rẻ hơn.</li>
<li><strong>Standard</strong> — đủ tính năng, dùng chung hạ tầng, tính tiền theo thao tác, trần 1.000 thao tác/giây và message 256 KB. Mặc định cho phần lớn workload.</li>
<li><strong>Premium</strong> — tài nguyên riêng theo <em>messaging unit</em> nên độ trễ ổn định, message tới 100 MB qua AMQP, namespace 1 TB/MU, hỗ trợ Geo-DR và JMS 2.0, partitioning khai ở mức namespace (1, 2 hoặc 4 partition, <strong>chốt lúc tạo, không đổi được</strong>). Đề nhắc "độ trễ ổn định", "payload lớn", "cách ly khỏi hàng xóm ồn ào" là Premium.</li>
<li><em>Nguồn: <a href="https://learn.microsoft.com/azure/service-bus-messaging/service-bus-quotas" target="_blank" rel="noopener">Service Bus quotas and limits</a> và <a href="https://learn.microsoft.com/azure/service-bus-messaging/service-bus-auto-forwarding" target="_blank" rel="noopener">Autoforwarding</a>, đối chiếu ngày 19/09/2026. Hành vi "không tạo được receiver trên nguồn auto-forward" đã kiểm lại trên emulator trong <code>labs/ai-200/labs/servicebus/02-topics-filters.py</code>.</em></li></ul>
<h3 id="03-messaging-functions/khoa-sb-mau-hinh-ai">2.11 Service Bus trong kiến trúc AI — load leveling, competing consumers, temporal decoupling</h3>
<p>Khóa học mở đầu Service Bus bằng câu hỏi "vì sao AI cần messaging": thời gian inference thất thường (2 giây đến 30 giây), nên gọi đồng bộ sẽ vỡ khi có burst. Đề hay mô tả triệu chứng rồi hỏi tên pattern.</p>
<div class="tablewrap"><table><thead><tr><th>Pattern</th><th>Giải quyết gì</th><th>Dấu hiệu trong đề</th></tr></thead><tbody>
<tr><td><strong>Load leveling</strong></td><td>Queue hấp thụ burst, processor tiêu thụ ở tốc độ ổn định; không mất request</td><td>"không muốn cấp GPU theo đỉnh", "traffic tăng đột biến làm timeout dây chuyền"</td></tr>
<tr><td><strong>Competing consumers</strong></td><td>Nhiều worker đọc cùng một queue, mỗi message chỉ tới <strong>một</strong> worker; thêm worker là tăng throughput, không sửa code</td><td>"scale ngang xử lý inference", "một worker chết thì các worker khác vẫn chạy"</td></tr>
<tr><td><strong>Temporal decoupling</strong></td><td>Producer và consumer không cần online cùng lúc; message nằm bền trong queue khi processor đang deploy/restart</td><td>"model service bảo trì mà API vẫn phải nhận request"</td></tr>
<tr><td><strong>Publish-subscribe</strong> (topic)</td><td>Một kết quả inference tới nhiều dịch vụ độc lập (notification, audit, dashboard); thêm subscription không phải sửa producer</td><td>"thêm consumer mới mà không đụng code bên gửi"</td></tr>
</tbody></table></div>
<ul>
<li><strong>Backpressure</strong>: độ sâu queue (active message count trên Azure Monitor) là <em>tín hiệu scale</em>, không phải sự cố. Container Apps và Functions dùng scaler KEDA theo độ dài queue Service Bus. Queue tăng đều là thiếu năng lực xử lý; queue luôn rỗng có thể là cấp thừa.</li>
<li>Namespace có endpoint <code>&lt;namespace&gt;.servicebus.windows.net</code>; giao thức chính là <strong>AMQP 1.0</strong>. Khuyến nghị cho app AI là Microsoft Entra ID + managed identity thay cho SAS.</li>
<li>Premium: message tới <strong>100 MB qua AMQP nhưng chỉ 1 MB qua HTTP</strong>, hỗ trợ availability zones, VNet/private endpoint. Payload cỡ vừa (text tài liệu, ảnh nhỏ) mà dùng Premium thì gửi thẳng được, khỏi cần claim-check.</li>
</ul>
<p>Cùng một <code>ServiceBusClient</code> cho cả queue lẫn topic, khác nhau ở hàm tạo sender/receiver:</p>
<pre><button class="copybtn">copy</button><code>with ServiceBusClient(fully_qualified_namespace="&lt;ns&gt;.servicebus.windows.net",
                      credential=DefaultAzureCredential()) as client:
    with client.get_queue_sender("inference-requests") as s:      # point-to-point
        s.send_messages(ServiceBusMessage("queue message body"))
    with client.get_topic_sender("inference-results") as s:       # pub/sub
        s.send_messages(ServiceBusMessage("topic message body"))

    with client.get_subscription_receiver(topic_name="inference-results",
                                          subscription_name="notifications") as r:
        for msg in r:
            r.complete_message(msg)   # chỉ ảnh hưởng bản sao của subscription này</code></pre>
<blockquote><p><strong>Bẫy thi:</strong> dùng <code>with</code> (context manager) là cách được khuyến nghị để đóng kết nối kể cả khi có exception. Nhận từ topic thì phải dùng <code>get_subscription_receiver</code>; không có "topic receiver".</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/queue-process-operations-service-bus/2-explore-service-bus-concepts" target="_blank" rel="noopener">Explore Azure Service Bus concepts and messaging in AI architectures</a>, <a href="https://learn.microsoft.com/en-us/training/modules/queue-process-operations-service-bus/3-choose-queues-topics-subscriptions" target="_blank" rel="noopener">Choose between queues and topics with subscriptions</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="03-messaging-functions/khoa-sb-cau-truc-message">2.12 Cấu trúc message cho AI — correlation ID, claim-check, TTL, batch</h3>
<p>Mục này trả lời các câu "payload quá lớn", "không truy vết được request qua pipeline bất đồng bộ", "request real-time bị xử lý khi đã vô nghĩa".</p>
<p>Một message gồm ba phần: <strong>body</strong> (payload), <strong>application properties</strong> (key-value tự đặt, dùng cho filter/routing như <code>model_name</code>, <code>priority</code>), và <strong>system properties</strong> (<code>message_id</code>, <code>correlation_id</code>, <code>content_type</code>, <code>time_to_live</code>, <code>session_id</code>, <code>sequence_number</code>).</p>
<pre><button class="copybtn">copy</button><code>message = ServiceBusMessage(
    body=json.dumps({"prompt": "...", "model": "gpt-4o", "temperature": 0.1,
                     "max_tokens": 2000, "document_id": "doc-2025-0142"}),
    content_type="application/json",
    message_id=str(uuid.uuid4()),          # duy nhất cho mỗi message
    correlation_id="req-abc-12345",        # theo request suốt pipeline
    application_properties={"model_name": "gpt-4o", "priority": "standard",
                            "traceparent": traceparent},   # nối trace OpenTelemetry
    time_to_live=timedelta(minutes=5),     # real-time: quá 5 phút là vô giá trị
)</code></pre>
<ul>
<li><strong><code>message_id</code></strong>: nếu queue bật duplicate detection, hai request khác nhau mà trùng <code>message_id</code> sẽ bị loại oan. Luôn sinh ID duy nhất cho mỗi message.</li>
<li><strong><code>correlation_id</code></strong>: client sinh lúc gửi request, đi theo request qua API → processor → dịch vụ hạ nguồn → kho kết quả. Khi debug thì tìm theo ID này trong log, DLQ và kho kết quả.</li>
<li><strong>TTL theo từng message</strong>: request real-time đặt TTL ngắn, batch đặt dài (ví dụ 24 giờ) hoặc bỏ trống để dùng TTL mặc định của queue. Message hết hạn chỉ vào DLQ khi queue bật dead-lettering on message expiration.</li>
</ul>
<p><strong>Claim-check pattern</strong>: payload vượt giới hạn tier (256 KB Standard, 100 MB Premium) thì producer upload lên Blob Storage, message chỉ mang URI + metadata; processor tải về từ URI, xử lý xong có thể xóa blob.</p>
<pre><button class="copybtn">copy</button><code>blob_client.upload_blob(large_document_bytes)
claim_check = {"blob_uri": "https://&lt;acct&gt;.blob.core.windows.net/documents/doc-2025-0142.pdf",
               "document_id": "doc-2025-0142", "operation": "extract"}
sender.send_messages(ServiceBusMessage(json.dumps(claim_check),
    content_type="application/json", correlation_id="req-abc-12345",
    application_properties={"pattern": "claim-check"}))</code></pre>
<p>Lợi ích ngoài chuyện kích thước: broker chỉ chuyển message nhỏ nên rẻ hơn; không phải lên Premium chỉ vì payload lớn; quyền truy cập payload (Blob) tách riêng khỏi quyền trên Service Bus.</p>
<p><strong>Gửi theo batch</strong>: <code>add_message()</code> ném <code>MessageSizeExceededError</code> khi batch đầy, lúc đó gửi batch hiện tại rồi mở batch mới:</p>
<pre><button class="copybtn">copy</button><code>from azure.servicebus.exceptions import MessageSizeExceededError

batch = sender.create_message_batch()
for request in pending_requests:
    msg = ServiceBusMessage(json.dumps(request), content_type="application/json")
    try:
        batch.add_message(msg)
    except MessageSizeExceededError:
        sender.send_messages(batch)
        batch = sender.create_message_batch()
        batch.add_message(msg)
if len(batch) &gt; 0:
    sender.send_messages(batch)</code></pre>
<blockquote><p><strong>Bẫy thi:</strong> đề hỏi "gửi ảnh/tài liệu vài chục MB trên Standard" thì đáp án là claim-check (Blob + URI), không phải "tăng kích thước message". Có Premium thì 100 MB chỉ áp dụng khi gửi qua AMQP; qua HTTP chỉ được 1 MB.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/queue-process-operations-service-bus/4-structure-messages-ai-workloads" target="_blank" rel="noopener">Structure messages for AI workloads</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="03-messaging-functions/khoa-sb-settlement-dlq">2.13 Settlement, max delivery count, resubmit DLQ và xử lý dài hơn lock</h3>
<p>Phần DLQ/PEEK_LOCK đã có ở các mục trên. Mục này chỉ bổ sung các chi tiết khóa học nhấn mạnh mà tài liệu chưa ghi.</p>
<div class="tablewrap"><table><thead><tr><th>Settlement</th><th>Hành vi</th><th>Dùng khi</th></tr></thead><tbody>
<tr><td><code>complete_message()</code></td><td>Xóa hẳn khỏi queue</td><td>Inference xong và đã ghi kết quả</td></tr>
<tr><td><code>abandon_message()</code></td><td>Nhả lock, giao lại <strong>ngay</strong>, <code>delivery_count</code> +1</td><td>Lỗi tạm thời: timeout model service, mất mạng</td></tr>
<tr><td><code>dead_letter_message(reason=, error_description=)</code></td><td>Chuyển thẳng sang DLQ, không tốn thêm lượt retry</td><td>Lỗi vĩnh viễn: JSON hỏng, model không hỗ trợ, sai validate</td></tr>
<tr><td><code>defer_message()</code></td><td>Giữ trong queue nhưng rút khỏi luồng giao thường; chỉ lấy lại bằng <code>receive_deferred_messages()</code> theo <strong>sequence number</strong></td><td>Dependency chưa sẵn sàng, hoặc message tới sai thứ tự</td></tr>
</tbody></table></div>
<ul>
<li><strong>Chỉnh <code>max_delivery_count</code></strong> (mặc định 10): lỗi phần lớn là vĩnh viễn thì hạ xuống 3–5 để poison message vào DLQ sớm, trả capacity cho message lành. Lỗi phần lớn là tạm thời (model chập chờn) thì để cao. Message vượt ngưỡng vào DLQ với reason <code>MaxDeliveryCountExceeded</code>.</li>
<li><strong>Mở DLQ bằng <code>sub_queue=ServiceBusSubQueue.DEAD_LETTER</code></strong>, đừng tự ghép chuỗi <code>&lt;queue&gt;/$deadletterqueue</code>; SDK tự định dạng đường dẫn.</li>
<li><strong>Resubmit phải giữ metadata</strong>: tạo message mới từ <code>msg.body</code>, <code>content_type</code>, <code>correlation_id</code>, <code>application_properties</code> rồi mới complete bản trong DLQ. Chỉ gửi <code>str(msg)</code> là mất correlation ID và các property dùng để lọc. Chỉ resubmit khi đã sửa nguyên nhân gốc, nếu không message sẽ quay lại DLQ và làm sai lệch số lỗi thật.</li>
<li>Đặt alert Azure Monitor trên metric số message dead-letter: DLQ tăng đột biến thường là model deployment hỏng, input format mới, hoặc upstream gửi request sai.</li>
</ul>
<pre><button class="copybtn">copy</button><code>from azure.servicebus import AutoLockRenewer

renewer = AutoLockRenewer()
with client.get_queue_receiver("inference-requests", max_wait_time=30) as receiver:
    for msg in receiver.receive_messages():
        renewer.register(receiver, msg, max_lock_renewal_duration=600)  # gia hạn nền tới 10 phút
        result = run_long_inference(msg)
        receiver.complete_message(msg)
renewer.close()</code></pre>
<p>Việc còn dài hơn cả ngân sách gia hạn thì dùng <strong>xử lý hai pha</strong>: pha 1 nhận message, ghi yêu cầu vào một tracking store rồi complete ngay; pha 2 là một tiến trình khác lấy việc từ tracking store để chạy inference dài. Queue lúc đó chỉ lo giao ban đầu cho tin cậy, không phải quản lock nữa.</p>
<blockquote><p><strong>Bẫy thi:</strong> dead-letter khác abandon. Abandon cho message quay lại và ăn thêm một lượt delivery; dead-letter gửi thẳng vào DLQ. Message lỗi vĩnh viễn mà abandon là tốn đủ 10 lượt rồi mới vào DLQ.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/queue-process-operations-service-bus/5-process-messages-reliably" target="_blank" rel="noopener">Process messages reliably</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026; <a href="https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement" target="_blank" rel="noopener">Message transfers, locks, and settlement</a>.</em></p>
<h3 id="03-messaging-functions/trien-khai-servicebus">2.14 Triển khai Service Bus trên Azure — từng bước</h3>
<p>Thứ tự: <strong>namespace (chọn tier) → queue/topic với các thuộc tính chỉ đặt được lúc tạo → subscription + rule → RBAC Sender/Receiver → tắt SAS</strong>.</p>
<pre><button class="copybtn">copy</button><code># 1. Namespace — Premium khi cần VNet/private endpoint, message > 256 KB, tài nguyên riêng
az servicebus namespace create -g rg-ai200 -n sb-rag -l eastus --sku Standard

# 2. Queue — sessions, duplicate detection (và partitioning) CHỈ bật được lúc tạo
az servicebus queue create -g rg-ai200 --namespace-name sb-rag -n jobs \\
  --lock-duration PT1M --max-delivery-count 10 \\
  --enable-dead-lettering-on-message-expiration true \\
  --enable-duplicate-detection true --duplicate-detection-history-time-window PT10M \\
  --enable-session false

# 3. Topic + subscription + SQL filter
az servicebus topic create -g rg-ai200 --namespace-name sb-rag -n doc-events
az servicebus topic subscription create -g rg-ai200 --namespace-name sb-rag \\
  --topic-name doc-events -n vi-indexer --max-delivery-count 5
az servicebus topic subscription rule create -g rg-ai200 --namespace-name sb-rag \\
  --topic-name doc-events --subscription-name vi-indexer -n lang-vi --filter-sql-expression "lang = 'vi'"

# 4. RBAC data plane cho app (không phát connection string)
SB_ID=$(az servicebus namespace show -g rg-ai200 -n sb-rag --query id -o tsv)
az role assignment create --assignee $API_PID    --role "Azure Service Bus Data Sender"   --scope $SB_ID
az role assignment create --assignee $WORKER_PID --role "Azure Service Bus Data Receiver" --scope $SB_ID/queues/jobs</code></pre>
<ul><li>Code/Functions dùng <code>fullyQualifiedNamespace = sb-rag.servicebus.windows.net</code> + <code>DefaultAzureCredential</code>; khi mọi client đã chuyển sang Entra thì tắt SAS bằng <code>disableLocalAuth</code> của namespace.</li>
<li><strong>Kiểm tra</strong>: <em>Service Bus Explorer</em> trong portal để peek/gửi thử; metric <code>ActiveMessages</code>, <code>DeadletteredMessages</code>.</li>
<li><strong>Bẫy</strong>: subscription mới tạo có rule mặc định <code>$Default</code> (<code>1=1</code>, nhận mọi thứ) — thêm rule lọc mà quên xóa <code>$Default</code> thì filter như không có tác dụng. Đổi Standard → Premium là <strong>migration</strong> namespace chứ không phải đổi SKU tại chỗ.</li></ul>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/cli/azure/servicebus/queue" target="_blank" rel="noopener">az servicebus queue (CLI reference)</a>, <a href="https://learn.microsoft.com/en-us/azure/service-bus-messaging/topic-filters" target="_blank" rel="noopener">Topic filters and actions</a> trên Microsoft Learn, đối chiếu ngày 26/09/2026.</em></p>
<hr>
<h2 id="03-messaging-functions/3-azure-event-grid">3. Azure Event Grid</h2>
<h3 id="03-messaging-functions/31-mo-hinh">3.1 Mô hình</h3>
<ul><li><strong>Publisher</strong> → <strong>Topic</strong> (system / custom / domain) → <strong>Event Subscription</strong> (có filter) → <strong>Handler</strong>.</li><li><strong>System topics</strong>: sự kiện từ dịch vụ Azure (Blob Storage <code>BlobCreated</code>, Cosmos DB, Container Registry <code>ImagePushed</code>, Key Vault <code>SecretNearExpiry</code>, Event Hubs…).</li><li><strong>Custom topic</strong>: ứng dụng tự publish event của mình.</li><li><strong>Domain</strong>: gom hàng nghìn topic cho multi-tenant, quản lý chung một endpoint.</li><li><strong>Event Grid Namespace</strong> (thế hệ mới): hỗ trợ <strong>MQTT</strong> và <strong>pull delivery</strong> (consumer tự kéo bằng HTTP), khác với push truyền thống.</li></ul>
<p>Handler: Azure Functions (Event Grid trigger), Webhook, Event Hubs, Service Bus queue/topic, Storage Queue, Hybrid Connections, Azure Automation.</p>
<h3 id="03-messaging-functions/4d1-bon-loai-topic">3.2 Bốn loại topic: system, custom, domain, partner</h3>
<table><thead><tr><th>Loại</th><th>Ai phát event</th><th>Dùng khi</th></tr></thead><tbody>
<tr><td><strong>System topic</strong></td><td>Chính dịch vụ Azure (Blob Created, Key Vault SecretNearExpiry…)</td><td>Phản ứng với sự kiện hạ tầng; một system topic gắn với một tài nguyên nguồn</td></tr>
<tr><td><strong>Custom topic</strong></td><td>App của bạn POST lên endpoint của topic</td><td>Vài chục luồng sự kiện nghiệp vụ; trần <strong>100 custom topic mỗi subscription mỗi region</strong></td></tr>
<tr><td><strong>Event domain</strong></td><td>App POST lên <em>một</em> endpoint, mỗi event tự khai topic đích</td><td>Multi-tenant: mỗi khách hàng là một topic, tới <strong>100.000 topic</strong> trong một domain</td></tr>
<tr><td><strong>Partner topic</strong></td><td>Hệ thống SaaS ngoài Azure</td><td>Nhận sự kiện từ đối tác đã tích hợp Event Grid</td></tr>
</tbody></table>
<ul><li>Định tuyến trong domain nằm ở <strong>payload</strong>, không phải URL: schema Event Grid dùng trường <code>topic</code>, schema CloudEvents dùng trường <code>source</code>. Một batch gửi lên domain endpoint có thể chứa event của nhiều topic khác nhau.</li>
<li><strong>Domain topic là auto-managed</strong>: tạo event subscription ở domain scope mà chưa có topic thì Event Grid tự tạo; xoá subscription cuối cùng thì topic tự biến mất. Đây là lý do domain thay được cho việc quản lý hàng nghìn topic bằng tay.</li>
<li><strong>Domain-scope subscription</strong> nhận <em>mọi</em> event vào domain bất kể topic nào — dùng cho audit/giám sát, trần <strong>50</strong> cái.</li>
<li><strong>Domain không broadcast</strong>: gửi một event vào domain thì chỉ topic được khai nhận, không phải mọi topic. Muốn cùng payload tới nhiều topic thì publisher phải nhân bản payload và đổi tên topic cho từng bản.</li>
<li>RBAC theo từng topic trong domain (role <em>EventGrid EventSubscription Contributor/Reader</em> gán ở scope của một topic) chính là cách phân vùng tenant — đề tả "mỗi khách hàng chỉ được subscribe luồng của mình" là hỏi domain, không phải filter.</li>
<li>Con số hay hỏi: <strong>500</strong> event subscription mỗi topic (kể cả topic trong domain), event tối đa <strong>1 MB</strong>, batch tối đa <strong>5.000</strong> event, giữ event trên topic <strong>1 ngày</strong>, ingress <strong>5.000 event hoặc 5 MB/giây</strong> (tính theo khối 64 KB — event 128 KB đếm là 2).</li></ul>
<h3 id="03-messaging-functions/32-schema-su-kien">3.3 Schema sự kiện</h3>
<p><strong>Event Grid schema:</strong></p>
<pre><button class="copybtn">copy</button><code>[{
  "id": "e1",
  "eventType": "Contoso.Docs.Uploaded",
  "subject": "/tenants/a/docs/report.pdf",
  "eventTime": "2026-08-02T10:00:00Z",
  "dataVersion": "1.0",
  "data": { "docId": "report.pdf", "sizeBytes": 812340 }
}]</code></pre>
<p><strong>CloudEvents v1.0</strong> (chuẩn CNCF, khuyến nghị cho hệ liên vận):</p>
<pre><button class="copybtn">copy</button><code>{
  "specversion": "1.0",
  "type": "Contoso.Docs.Uploaded",
  "source": "/contoso/rag",
  "id": "e1",
  "time": "2026-08-02T10:00:00Z",
  "subject": "tenants/a/docs/report.pdf",
  "data": { "docId": "report.pdf" }
}</code></pre>
<p>Publish custom event bằng Python:</p>
<pre><button class="copybtn">copy</button><code>from azure.eventgrid import EventGridPublisherClient, EventGridEvent
from azure.identity import DefaultAzureCredential

client = EventGridPublisherClient("https://mytopic.region-1.eventgrid.azure.net/api/events",
                                  DefaultAzureCredential())
client.send([EventGridEvent(
    subject="tenants/a/docs/report.pdf",
    event_type="Contoso.Docs.Uploaded",
    data={"docId": "report.pdf", "lang": "vi"},
    data_version="1.0",
)])</code></pre>
<ul><li>Event tối đa <strong>1 MB</strong> (tính phí theo 64 KB); gửi theo <strong>array</strong> để batch.</li><li>Event Grid đảm bảo <strong>at-least-once</strong> → handler phải <strong>idempotent</strong>; <strong>không đảm bảo thứ tự</strong>.</li></ul>
<h3 id="03-messaging-functions/33-filtering">3.4 Filtering</h3>
<div class="tablewrap"><table><thead><tr><th>Loại filter</th><th>Ví dụ</th></tr></thead><tbody><tr><td><strong>Event type</strong></td><td><code>--included-event-types Contoso.Docs.Uploaded</code></td></tr><tr><td><strong>Subject</strong></td><td><code>--subject-begins-with /tenants/a/</code> , <code>--subject-ends-with .pdf</code> (có <code>--subject-case-sensitive</code>)</td></tr><tr><td><strong>Advanced</strong></td><td>So sánh trên bất kỳ field JSON nào: <code>data.lang StringIn vi,en</code>, <code>data.sizeBytes NumberGreaterThan 1000000</code>, <code>NumberInRange</code>, <code>StringContains</code>, <code>BoolEquals</code>, <code>IsNullOrUndefined</code></td></tr></tbody></table></div>
<pre><button class="copybtn">copy</button><code>az eventgrid event-subscription create \\
  --name embed-sub \\
  --source-resource-id $TOPIC_ID \\
  --endpoint $FUNC_ENDPOINT --endpoint-type azurefunction \\
  --included-event-types Contoso.Docs.Uploaded \\
  --subject-begins-with /tenants/a/ \\
  --advanced-filter data.sizeBytes NumberLessThan 10000000 \\
  --advanced-filter data.lang StringIn vi en \\
  --max-delivery-attempts 10 \\
  --event-ttl 720 \\
  --deadletter-endpoint "$STORAGE_ID/blobServices/default/containers/eg-deadletter"</code></pre>
<p>Giới hạn: tối đa <strong>25 advanced filter</strong> / subscription, mỗi giá trị chuỗi ≤ 512 ký tự; <strong>5 giá trị</strong> cho toán tử <code>In</code>.</p>
<h3 id="03-messaging-functions/34-retry-dead-letter-muc-retries-trong-outline">3.5 Retry &amp; dead-letter (mục "retries" trong outline)</h3>
<ul><li>Event Grid retry theo <strong>exponential backoff</strong>: 10s, 30s, 1m, 5m, 10m, 30m, 1h… trong tối đa <strong>24 giờ</strong> (mặc định) hoặc <code>--max-delivery-attempts</code> (mặc định <strong>30</strong>).</li><li><strong>Retry policy</strong> = min(số lần thử, TTL) — điều kiện nào đến trước thì dừng.</li><li>Mã trả về của handler quyết định:</li><li style="margin-left:14px"><strong>200, 201, 202, 203, 204</strong> → thành công (các mã 2xx khác vẫn bị tính là thất bại).</li><li style="margin-left:14px"><strong>400, 413, 403</strong> → <strong>không retry</strong> (400/413 đưa vào dead-letter ngay nếu đã bật); <strong>401</strong> không retry với webhook nhưng retry sau ≥ 5 phút với endpoint là tài nguyên Azure; <strong>404</strong> retry sau ≥ 5 phút với endpoint là tài nguyên Azure.</li><li style="margin-left:14px"><strong>408, 429, 5xx</strong> → retry.</li><li><strong>Dead-letter</strong> phải cấu hình <strong>Storage blob container</strong>; nếu không cấu hình, event hết hạn sẽ <strong>bị bỏ (dropped) vĩnh viễn</strong>. Có độ trễ ~5 phút trước khi ghi dead-letter.</li><li><strong>Output batching</strong> (<code>--max-events-per-batch</code>, <code>--preferred-batch-size-in-kilobytes</code>) tăng throughput.</li><li><strong>Delivery với managed identity</strong> thay vì key khi handler là Service Bus/Event Hubs/Storage.</li></ul>
<p><strong>Webhook validation handshake</strong> (câu hỏi hay gặp): khi tạo subscription tới webhook tự viết, Event Grid gửi <code>Microsoft.EventGrid.SubscriptionValidationEvent</code>; endpoint phải trả về <code>validationCode</code> trong 200 OK (validation đồng bộ) <strong>hoặc</strong> gọi <code>validationUrl</code> (validation thủ công). Nếu handler là Azure Function với Event Grid trigger / Logic Apps thì việc này tự động.</p>
<h3 id="03-messaging-functions/khoa-eg-giao-nhan-retry">3.6 Event Grid giao event thế nào — mã thành công, timeout 30 giây và bảng retry theo mã lỗi</h3>
<p>Mục 3.5 đã có lịch backoff và dead-letter. Mục này bổ sung phần thiếu: mã nào được tính là thành công, timeout phía handler, và retry theo từng mã lỗi. Đề hay dựng tình huống quanh đúng các chi tiết này.</p>
<ul>
<li>Event Grid giao bằng <strong>HTTP POST</strong>. Mặc định mỗi request chở <strong>một event</strong> nhưng payload vẫn là <strong>mảng</strong> một phần tử.</li>
<li>Chỉ <strong>200, 201, 202, 203, 204</strong> được tính là thành công. Mọi mã khác đều là thất bại.</li>
<li>Event Grid chờ phản hồi <strong>30 giây</strong>. Quá 30 giây thì xếp retry.</li>
<li>Lịch đầy đủ: 10s → 30s → 1m → 5m → 10m → 30m → 1h → <strong>3h → 6h → mỗi 12h tới hết 24h</strong>. Có thêm độ ngẫu nhiên nhỏ, và Event Grid có thể bỏ qua một số lượt nếu endpoint liên tục không khỏe. Endpoint phản hồi trong 3 phút thì Event Grid cố gỡ event khỏi hàng retry theo kiểu best-effort, nên vẫn có thể nhận trùng.</li>
<li><strong>At-least-once, không bảo đảm thứ tự</strong>: dùng trường <code>id</code> của event để khử trùng.</li>
</ul>
<div class="tablewrap"><table><thead><tr><th>Mã handler trả về</th><th>Hành vi</th></tr></thead><tbody>
<tr><td>400 Bad Request, 413 Request Entity Too Large, 403 Forbidden</td><td><strong>Không retry</strong> (400/413 được đưa vào dead-letter ngay, nếu đã bật)</td></tr>
<tr><td>401 Unauthorized</td><td>Webhook: <strong>không retry</strong>. Endpoint là tài nguyên Azure: retry sau 5 phút trở lên</td></tr>
<tr><td>404 Not Found</td><td>Endpoint là tài nguyên Azure: retry sau 5 phút trở lên (có thể tài nguyên đang provision)</td></tr>
<tr><td>408 Request Timeout</td><td>Retry sau 2 phút trở lên</td></tr>
<tr><td>503 Service Unavailable</td><td>Retry sau 30 giây trở lên</td></tr>
<tr><td>Mã khác</td><td>Retry sau 10 giây trở lên theo backoff chuẩn</td></tr>
</tbody></table></div>
<p><strong>Retry policy trên subscription</strong>: <code>--max-delivery-attempts</code> từ 1–30 (mặc định 30) và <code>--event-ttl</code> từ 1–1.440 phút (mặc định 1.440). Điều kiện nào tới trước thì dừng. TTL chỉ được kiểm tra ở <em>lượt giao kế tiếp</em>.</p>
<pre><button class="copybtn">copy</button><code>az eventgrid event-subscription create \\
    --name moderation-sub \\
    --source-resource-id /subscriptions/{sub-id}/resourceGroups/{rg}/providers/Microsoft.EventGrid/topics/ai-events \\
    --endpoint https://moderation-service.azurewebsites.net/api/events \\
    --max-delivery-attempts 5 \\
    --event-ttl 30</code></pre>
<p>Thiết kế handler cho AI:</p>
<ul>
<li>Inference lâu hơn 30 giây thì <strong>trả 202 Accepted ngay</strong> rồi xử lý bất đồng bộ. Event Grid coi 202 là giao thành công.</li>
<li>Quá tải tạm thời thì trả <strong>503</strong>. <strong>Đừng trả 400</strong> cho lỗi tạm thời, vì Event Grid không retry 400.</li>
<li>Function trên plan có cold start có thể vượt timeout 30 giây ở lần gọi đầu. Retry của Event Grid sẽ xử lý, nhưng handler phải idempotent.</li>
</ul>
<blockquote><p><strong>Bẫy thi:</strong> TTL 30 phút với max attempts 10 thì con số 10 <em>không có tác dụng</em>. Theo lịch backoff, trong 30 phút đầu chỉ có tối đa khoảng 6 lượt giao, nên TTL hết hạn trước và event bị dead-letter sau 30 phút.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/event-driven-workflows-event-grid/4-delivery-retry-policies" target="_blank" rel="noopener">Configure delivery and retry policies for reliable event processing</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026; bảng mã lỗi đối chiếu <a href="https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry" target="_blank" rel="noopener">Event Grid delivery and retry</a>.</em></p>
<h3 id="03-messaging-functions/khoa-eg-deadletter-batching-metric">3.7 Dead-letter chẩn đoán, output batching và metric giao nhận</h3>
<p>Mục này giúp đọc được một blob dead-letter và chọn đúng tham số batching. Đề hay đưa giá trị <code>lastDeliveryOutcome</code> rồi hỏi nguyên nhân.</p>
<p>Dead-letter <strong>mặc định tắt</strong>; phải tạo trước storage account + container rồi truyền <code>--deadletter-endpoint</code> dạng <code>/subscriptions/…/storageAccounts/{acct}/blobServices/default/containers/{container}</code>. Mỗi event dead-letter mang thêm:</p>
<div class="tablewrap"><table><thead><tr><th>Thuộc tính</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td><code>deadLetterReason</code></td><td><code>MaxDeliveryAttemptsExceeded</code> hoặc <code>MaxRetryDurationExceeded</code></td></tr>
<tr><td><code>deliveryAttempts</code></td><td>Số lượt đã thử</td></tr>
<tr><td><code>lastDeliveryOutcome</code></td><td>Ví dụ <code>NotFound</code> (URL handler đổi/bị xóa), <code>TimedOut</code> (inference quá tải, cần scale), <code>Busy</code>, <code>Forbidden</code></td></tr>
<tr><td><code>publishTime</code>, <code>lastDeliveryAttemptTime</code></td><td>Thời điểm Event Grid nhận event và lượt giao cuối (UTC)</td></tr>
</tbody></table></div>
<ul>
<li>Muốn được báo ngay khi có event chết: tạo <strong>event subscription trên chính container dead-letter</strong> (BlobCreated) → handler cảnh báo hoặc xử lý lại.</li>
<li>Nơi dead-letter không truy cập được liên tục <strong>4 giờ</strong> thì event bị bỏ.</li>
</ul>
<p><strong>Output batching</strong> (mặc định tắt, bật riêng từng subscription):</p>
<pre><button class="copybtn">copy</button><code>az eventgrid event-subscription create \\
    --name batch-processor-sub \\
    --source-resource-id $TOPIC_ID \\
    --endpoint https://batch-processor.azurewebsites.net/api/events \\
    --max-events-per-batch 100 \\
    --preferred-batch-size-in-kilobytes 512</code></pre>
<ul>
<li><code>--max-events-per-batch</code>: 1–5.000, không bao giờ vượt. <code>--preferred-batch-size-in-kilobytes</code>: 1–1.024, là mức nhắm tới. Một event lớn hơn mức này vẫn được giao trong batch riêng của nó.</li>
<li><strong>All-or-none</strong>: handler phải trả mã thành công cho cả batch; một event lỗi là <em>cả batch</em> bị retry. Chỉ xin số event mà handler xử lý kịp trong 30 giây.</li>
</ul>
<div class="tablewrap"><table><thead><tr><th>Metric</th><th>Đọc thế nào</th></tr></thead><tbody>
<tr><td>Delivery success / Delivery failure</td><td>Failure đếm <em>từng lượt</em> thất bại, không phải thất bại cuối cùng</td></tr>
<tr><td>Matched events</td><td>Event khớp ít nhất một filter. Tụt đột ngột nghĩa là nguồn ngừng publish hoặc filter bị sửa</td></tr>
<tr><td>Dropped events</td><td>Khớp subscription nhưng hết retry mà <strong>không có dead-letter</strong>, tức mất hẳn</td></tr>
<tr><td>Dead-lettered events</td><td>Tăng vọt nghĩa là model service chết, URL handler đổi, hoặc bản deploy có bug</td></tr>
</tbody></table></div>
<blockquote><p><strong>Bẫy thi:</strong> metric "Dropped events" khác 0 là dấu hiệu subscription chưa cấu hình dead-letter. Với batching, đừng đặt batch lớn hơn khối việc handler làm xong trong 30 giây, nếu không cả batch sẽ timeout rồi retry lặp lại.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/event-driven-workflows-event-grid/4-delivery-retry-policies" target="_blank" rel="noopener">Configure delivery and retry policies for reliable event processing</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026; chi tiết 4 giờ và TTL đối chiếu <a href="https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry" target="_blank" rel="noopener">Event Grid delivery and retry</a>.</em></p>
<h3 id="03-messaging-functions/khoa-eg-cloudevents-publish">3.8 CloudEvents cho event AI và publish bằng SDK <code>CloudEvent</code> / REST</h3>
<p>Khóa học dạy publish bằng <strong>CloudEvents</strong>, trong khi tài liệu hiện có mới có ví dụ <code>EventGridEvent</code>. Mục này bổ sung chiều chuyển đổi schema, cách đặt tên event type và hai cách xác thực.</p>
<ul>
<li><strong>CloudEvents v1.0</strong> (chuẩn CNCF) là định dạng khuyến nghị cho triển khai mới. Bắt buộc có <code>specversion</code> ("1.0"), <code>type</code>, <code>source</code>, <code>id</code>. Tùy chọn: <code>subject</code> (để lọc tiền tố/hậu tố), <code>time</code>, <code>datacontenttype</code>, <code>data</code>.</li>
<li><strong>Đặt tên <code>type</code> theo reverse-DNS</strong> để tránh trùng giữa các team: <code>com.contoso.ai.InferenceCompleted</code>, <code>com.contoso.ai.EmbeddingsRefreshed</code>, <code>com.contoso.ai.ModelRetrained</code>, <code>com.contoso.ai.AnomalyDetected</code>…</li>
<li><strong>Payload nhỏ</strong>: mang ID để tương quan (<code>requestId</code>), <em>URL tới kết quả</em> thay vì nhúng kết quả, metadata vận hành (<code>modelVersion</code>, <code>processingDurationMs</code>), và một summary ngắn (<code>classification</code>, <code>confidence</code>) để subscriber định tuyến mà không phải tải kết quả.</li>
<li><strong>Chuyển schema</strong>: topic khai <code>--input-schema cloudeventschemav1_0</code>; subscription khai <code>--event-delivery-schema</code> để đổi định dạng lúc giao. Event Grid schema → CloudEvents: <strong>được</strong> (kể cả system event). CloudEvents → Event Grid schema: <strong>không</strong>, vì CloudEvents có extension attribute mà schema Event Grid không biểu diễn được.</li>
<li><strong>System topic không publish trực tiếp được</strong>: chỉ chính dịch vụ Azure phát event vào đó. App tự phát thì dùng custom topic (hoặc namespace topic nếu cần pull delivery/MQTT).</li>
<li>Advanced filter: <strong>AND giữa các điều kiện</strong>, <strong>OR giữa các giá trị trong cùng một điều kiện</strong>. Ví dụ định tuyến theo độ tin cậy: <code>data.confidence NumberGreaterThan 0.9</code>.</li>
</ul>
<pre><button class="copybtn">copy</button><code>from azure.core.messaging import CloudEvent          # lớp CloudEvent nằm ở azure.core
from azure.eventgrid import EventGridPublisherClient
from azure.identity import DefaultAzureCredential    # dev/test có thể dùng AzureKeyCredential(key)

client = EventGridPublisherClient(os.environ["EVENTGRID_TOPIC_ENDPOINT"], DefaultAzureCredential())

client.send([                                        # gửi list = một HTTP request
    CloudEvent(type="com.contoso.ai.StageCompleted", source="/services/embeddings",
               subject="/pipelines/rag/run-42",
               data={"pipelineRunId": "run-42", "stage": "embeddings", "status": "completed"}),
    CloudEvent(type="com.contoso.ai.StageCompleted", source="/services/indexing",
               subject="/pipelines/rag/run-42",
               data={"pipelineRunId": "run-42", "stage": "indexing", "status": "completed"}),
])</code></pre>
<p>REST, dùng khi không có SDK (CI/CD, ngôn ngữ khác). Với topic dùng CloudEvents schema, gửi một object JSON:</p>
<pre><button class="copybtn">copy</button><code>curl -X POST \\
    -H "Content-Type: application/cloudevents+json; charset=utf-8" \\
    -H "aeg-sas-key: $EVENTGRID_TOPIC_KEY" \\
    -d '{"specversion":"1.0","type":"com.contoso.ai.ModelRetrained","source":"/services/training",
         "id":"evt-20250915-160000-001","subject":"/models/sentiment-v2",
         "datacontenttype":"application/json","data":{"modelVersion":"2.1.0","accuracy":0.94}}' \\
    "$EVENTGRID_TOPIC_ENDPOINT"
# 200 OK = đã nhận để định tuyến; khác 200 = event sai, key sai, hoặc lệch schema</code></pre>
<ul>
<li>Ba cách xác thực khi publish: access key (header <code>aeg-sas-key</code>), SAS token, Microsoft Entra ID. Production dùng <strong>Entra ID + managed identity</strong> với role <strong>EventGrid Data Sender</strong> trên topic. Lấy key thì dùng <code>az eventgrid topic key list … --query "key1"</code>, endpoint thì dùng <code>az eventgrid topic show … --query "endpoint"</code>.</li>
<li>Publish ở các mốc có ý nghĩa với bên ngoài (inference xong, chuyển stage, phát hiện anomaly, model validate xong), không publish thay đổi trạng thái nội bộ.</li>
</ul>
<blockquote><p><strong>Bẫy thi:</strong> topic khai <code>cloudeventschemav1_0</code> mà gửi bằng <code>EventGridEvent</code>, hoặc gửi với <code>Content-Type: application/json</code> kiểu mảng Event Grid schema, sẽ bị từ chối vì lệch schema. Đề hỏi "handler cũ chỉ hiểu Event Grid schema, topic đang dùng CloudEvents" thì <strong>không chuyển được</strong>; chỉ chuyển được theo chiều ngược lại.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/event-driven-workflows-event-grid/2-understand-event-grid-concepts" target="_blank" rel="noopener">Understand Azure Event Grid concepts</a>, <a href="https://learn.microsoft.com/en-us/training/modules/event-driven-workflows-event-grid/3-event-schemas-properties" target="_blank" rel="noopener">Work with event schemas and properties</a>, <a href="https://learn.microsoft.com/en-us/training/modules/event-driven-workflows-event-grid/5-publish-custom-events" target="_blank" rel="noopener">Publish custom events from AI applications</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="03-messaging-functions/trien-khai-eventgrid">3.9 Triển khai Event Grid trên Azure — từng bước</h3>
<p>Hai hình dạng hay gặp: <strong>system topic</strong> (nghe sự kiện của một tài nguyên Azure như Blob Storage) và <strong>custom topic</strong> (app tự publish). Cả hai đều cần <em>event subscription</em> trỏ tới handler.</p>
<pre><button class="copybtn">copy</button><code>az provider register --namespace Microsoft.EventGrid

# A. System topic: BlobCreated trong container "docs" -&gt; Function
az eventgrid system-topic create -g rg-ai200 -n st-docs -l eastus \\
  --topic-type Microsoft.Storage.StorageAccounts --source $STORAGE_ID
az eventgrid system-topic event-subscription create -g rg-ai200 --system-topic-name st-docs \\
  -n to-indexer --endpoint-type azurefunction --endpoint $FUNC_ID/functions/OnBlobCreated \\
  --included-event-types Microsoft.Storage.BlobCreated \\
  --subject-begins-with /blobServices/default/containers/docs/ --subject-ends-with .pdf \\
  --max-delivery-attempts 10 --event-ttl 1440 \\
  --deadletter-endpoint $STORAGE_ID/blobServices/default/containers/eg-deadletter

# B. Custom topic theo CloudEvents 1.0 + quyền publish bằng Entra
az eventgrid topic create -g rg-ai200 -n eg-rag -l eastus --input-schema cloudeventschemav1_0
az role assignment create --assignee $API_PID --role "EventGrid Data Sender" \\
  --scope $(az eventgrid topic show -g rg-ai200 -n eg-rag --query id -o tsv)</code></pre>
<ul><li><strong>Portal</strong>: vào chính Storage account → <em>Events</em> → <em>+ Event Subscription</em> — portal tự tạo system topic ngầm.</li>
<li>Endpoint <strong>webhook</strong> phải qua <strong>validation handshake</strong>: schema Event Grid thì trả lại <code>validationCode</code> hoặc mở <code>validationUrl</code>; schema CloudEvents 1.0 thì Event Grid gửi <code>HTTP OPTIONS</code> kèm header <code>WebHook-Request-Origin</code> và endpoint phải trả header <code>WebHook-Allowed-Origin</code>. Handler là Azure Function/Service Bus/Storage Queue/Event Hubs thì không cần handshake.</li>
<li><strong>Kiểm tra</strong>: metric <em>Delivered / Delivery Failed / Dead Lettered Events</em> của subscription; upload thử một file vào container.</li>
<li><strong>Bẫy</strong>: dead-letter chỉ bật khi đặt <code>--deadletter-endpoint</code> (một blob container) — không đặt thì hết retry là event bị <strong>bỏ</strong>; Storage account phải là StorageV2, BlockBlobStorage hoặc BlobStorage mới phát BlobCreated (general-purpose v1 không tích hợp được với Event Grid).</li></ul>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/cli/azure/eventgrid/system-topic/event-subscription" target="_blank" rel="noopener">az eventgrid system-topic event-subscription</a>, <a href="https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry" target="_blank" rel="noopener">Delivery and retry</a>, <a href="https://learn.microsoft.com/en-us/azure/event-grid/end-point-validation-cloud-events-schema" target="_blank" rel="noopener">Endpoint validation with CloudEvents</a> trên Microsoft Learn, đối chiếu ngày 26/09/2026.</em></p>
<hr>
<h2 id="03-messaging-functions/4-azure-functions">4. Azure Functions</h2>
<h3 id="03-messaging-functions/41-trigger-binding-khai-niem-goc">4.1 Trigger &amp; binding — khái niệm gốc</h3>
<ul><li><strong>Trigger</strong>: cái gì kích hoạt hàm (mỗi hàm đúng <strong>1</strong> trigger, bắt buộc).</li><li><strong>Input binding</strong>: dữ liệu đưa vào hàm (không bắt buộc, nhiều cái).</li><li><strong>Output binding</strong>: nơi hàm ghi kết quả ra (không bắt buộc, nhiều cái).</li><li>Binding = code hạ tầng khai báo sẵn, đỡ phải viết SDK.</li></ul>
<p>Trigger hay gặp trong đề AI: HTTP, Timer, <strong>Service Bus queue/topic</strong>, <strong>Event Grid</strong>, Event Hubs, Blob, <strong>Cosmos DB (change feed)</strong>, Queue Storage, Durable.</p>
<h3 id="03-messaging-functions/42-python-v2-programming-model-mo-hinh-hien-hanh-dung-decora">4.2 Python v2 programming model (mô hình hiện hành — dùng decorator)</h3>
<p><code>function_app.py</code>:</p>
<pre><button class="copybtn">copy</button><code>import azure.functions as func
import json, logging

app = func.FunctionApp(http_auth_level=func.AuthLevel.FUNCTION)

# --- HTTP trigger + Cosmos output binding: serverless API ---
@app.route(route="ask", methods=["POST"])
@app.cosmos_db_output(arg_name="log", connection="COSMOS_CONN",
                      database_name="ragdb", container_name="querylog")
def ask(req: func.HttpRequest, log: func.Out[func.Document]) -&gt; func.HttpResponse:
    body = req.get_json()
    answer = run_rag(body["question"])
    log.set(func.Document.from_dict({"q": body["question"], "a": answer}))
    return func.HttpResponse(json.dumps({"answer": answer}),
                             mimetype="application/json", status_code=200)

# --- Service Bus trigger: worker sinh embedding ---
@app.service_bus_queue_trigger(arg_name="msg", queue_name="docs-to-embed",
                               connection="SERVICEBUS_CONN")
def embed_worker(msg: func.ServiceBusMessage):
    doc = json.loads(msg.get_body().decode())
    logging.info("delivery_count=%s", msg.delivery_count)
    upsert_vector(doc)          # ném exception -&gt; message bị abandon -&gt; retry -&gt; DLQ

# --- Event Grid trigger ---
@app.event_grid_trigger(arg_name="event")
def on_blob_uploaded(event: func.EventGridEvent):
    data = event.get_json()
    logging.info("subject=%s url=%s", event.subject, data["url"])

# --- Timer trigger (NCRONTAB: giây phút giờ ngày tháng thứ) ---
@app.timer_trigger(schedule="0 */15 * * * *", arg_name="timer", run_on_startup=False)
def reindex(timer: func.TimerRequest):
    ...

# --- Blob trigger + Blob input/output ---
@app.blob_trigger(arg_name="blob", path="uploads/{name}", connection="STORAGE_CONN")
@app.blob_output(arg_name="out", path="chunks/{name}.json", connection="STORAGE_CONN")
def chunk_doc(blob: func.InputStream, out: func.Out[str]):
    out.set(json.dumps(split(blob.read())))</code></pre>
<p><code>host.json</code> — cấu hình runtime (retry, batch, timeout):</p>
<pre><button class="copybtn">copy</button><code>{
  "version": "2.0",
  "functionTimeout": "00:10:00",
  "extensions": {
    "serviceBus": { "maxConcurrentCalls": 16, "prefetchCount": 100,
                    "maxAutoLockRenewalDuration": "00:05:00" }
  },
  "logging": {
    "applicationInsights": { "samplingSettings": { "isEnabled": true, "excludedTypes": "Request" } }
  }
}</code></pre>
<p><code>local.settings.json</code> (chỉ dùng khi chạy local, <strong>không deploy</strong>), setting thực tế nằm trong <strong>Application settings</strong> của Function App.</p>
<h3 id="03-messaging-functions/4c1-binding-cookbook">4.3 Trigger/binding hay ra đề</h3>
<ul><li><strong>Service Bus trigger + output binding</strong>: nhận từ queue, ghi kết quả sang queue/Cosmos mà không viết SDK — nhớ <code>autoCompleteMessages</code> và lock renewal khi xử lý lâu.</li>
<li><strong>Blob qua Event Grid</strong>: blob trigger kiểu polling cũ chậm và tốn — chuẩn hiện tại là Event Grid trigger (<code>source: EventGrid</code>) cho gần-tức-thì; đây là cặp phân biệt được hỏi thẳng.</li>
<li><strong>Timer trigger</strong> dùng CRON 6 trường (<code>0 */5 * * * *</code> = mỗi 5 phút); <strong>Cosmos DB trigger</strong> = change feed processor đóng gói sẵn (cần lease container).</li>
<li>Retry: Service Bus/Storage queue retry bằng <strong>delivery count của chính queue</strong> (đừng bật retry policy chồng lên); Event Hubs/Timer/Cosmos hỗ trợ retry policy <code>fixedDelay</code>/<code>exponentialBackoff</code> trong host.json.</li></ul>
<h3 id="03-messaging-functions/43-hosting-plan-chon-dung-plan-la-cau-hoi-kinh-dien">4.4 Hosting plan — chọn đúng plan là câu hỏi kinh điển</h3>
<div class="tablewrap"><table><thead><tr><th>Plan</th><th>Đặc điểm</th><th>Chọn khi</th></tr></thead><tbody><tr><td><strong>Consumption</strong></td><td>Pay-per-execution, scale-to-zero, <strong>cold start</strong>, timeout mặc định 5 phút (tối đa 10)</td><td>Workload rời rạc, chi phí thấp nhất</td></tr><tr><td><strong>Flex Consumption</strong></td><td>Serverless thế hệ mới: <strong>always-ready instances</strong> (giảm cold start), VNet integration, chọn instance memory, concurrency điều chỉnh được</td><td>Mặc định nên chọn cho serverless mới cần VNet/độ trễ ổn định</td></tr><tr><td><strong>Premium (EP)</strong></td><td>Pre-warmed instance, không cold start, VNet, timeout không giới hạn (mặc định 30 phút)</td><td>Yêu cầu độ trễ ổn định + chạy dài</td></tr><tr><td><strong>Dedicated (App Service plan)</strong></td><td>Dùng chung plan với web app, có thể Always On</td><td>Tận dụng compute sẵn có</td></tr><tr><td><strong>Container Apps hosting</strong></td><td>Function chạy trong Container Apps environment, dùng chung networking/Dapr</td><td>Micro-service + function chung một môi trường</td></tr></tbody></table></div>
<blockquote><p>Chạy inference/embedding kéo dài vài phút trên Consumption → dễ <strong>timeout</strong>; đáp án đúng thường là <strong>Premium/Flex</strong> hoặc chuyển sang <strong>Container Apps Job / Durable Functions</strong>.</p></blockquote>
<h3 id="03-messaging-functions/4c2-hosting-plan">4.5 Chọn hosting plan — bảng rút gọn</h3>
<table><thead><tr><th>Plan</th><th>Chọn khi</th><th>Cần nhớ</th></tr></thead><tbody>
<tr><td><strong>Flex Consumption</strong></td><td>Serverless hiện đại, cần VNet + scale nhanh</td><td>Trả theo dùng, per-instance concurrency, always-ready instances tùy chọn</td></tr>
<tr><td><strong>Consumption (cổ điển)</strong></td><td>Rẻ nhất, tải thưa</td><td>Cold start; timeout mặc định 5 phút (max 10); không VNet</td></tr>
<tr><td><strong>Premium (EP)</strong></td><td>Không chấp nhận cold start, chạy dài, VNet</td><td>Pre-warmed instances, không giới hạn 10 phút</td></tr>
<tr><td><strong>Dedicated/ACA</strong></td><td>Đã có App Service plan / muốn chạy cạnh container</td><td>Trả cố định theo plan</td></tr>
</tbody></table>
<ul><li>Bẫy quen: "job 30 phút trên Consumption" → chuyển Premium/Flex hoặc tách qua queue + Container Apps; "cold start làm API chậm ngẫu nhiên" → Premium pre-warmed hoặc Flex always-ready.</li></ul>
<h3 id="03-messaging-functions/4e-target-based-scaling">4.6 Functions scale ra sao — scale controller và target-based scaling</h3>
<p>Nhiều câu hỏi "vì sao app không scale ra" thực chất hỏi mô hình scale hiện hành. Từ runtime 4.19.0, các extension hàng đợi/stream dùng <strong>target-based scaling</strong> thay cho mô hình incremental cũ.</p>
<ul><li>Công thức duy nhất cần nhớ: <strong>số instance mong muốn = độ dài nguồn sự kiện ÷ target executions per instance</strong>.</li>
<li>Khác biệt với mô hình cũ: incremental chỉ thêm/bớt <strong>một</strong> worker mỗi nhịp; target-based thêm tới <strong>bốn</strong> instance mỗi lần và quyết định bằng một phép chia đơn giản.</li>
<li>Bật mặc định trên <strong>Consumption, Flex Consumption và Elastic Premium</strong>. Dedicated (App Service plan) <strong>không</strong> có event-driven scaling. Tắt bằng app setting <code>TARGET_BASED_SCALING_ENABLED = 0</code>.</li>
<li>Extension hỗ trợ: Service Bus (queue và topic), Event Hubs, Queue Storage, Cosmos DB, Apache Kafka.</li></ul>
<table><thead><tr><th>Nguồn</th><th>Thiết lập quyết định <em>target executions</em></th><th>Mặc định</th></tr></thead><tbody>
<tr><td>Service Bus, một message mỗi lần gọi</td><td><code>extensions.serviceBus.maxConcurrentCalls</code></td><td>16</td></tr>
<tr><td>Service Bus, theo session</td><td><code>extensions.serviceBus.maxConcurrentSessions</code> (v5+)</td><td>8</td></tr>
<tr><td>Service Bus, theo lô</td><td><code>extensions.serviceBus.maxMessageBatchSize</code> (v5+)</td><td>1000</td></tr>
<tr><td>Queue Storage</td><td><code>extensions.queues.batchSize</code></td><td>16</td></tr>
<tr><td>Event Hubs</td><td><code>extensions.eventHubs.maxEventBatchSize</code> (v5+), hoặc <code>targetUnprocessedEventThreshold</code> nếu có khai</td><td>100</td></tr>
<tr><td>Cosmos DB</td><td><code>maxItemsPerInvocation</code> trên trigger</td><td>100</td></tr>
<tr><td>Kafka</td><td><code>lagThreshold</code> trên trigger</td><td>1000</td></tr>
</tbody></table>
<ul><li><strong>Bẫy quyền của Service Bus</strong>: muốn scale hiệu quả phải có quyền <em>Manage</em> trên queue/topic. Chỉ có <em>Listen</em> thì platform không đọc được độ dài hàng đợi và <strong>tụt về incremental scaling</strong> — triệu chứng là "hàng đợi dồn hàng nghìn message mà app bò từng instance một".</li>
<li><strong>Bẫy của Queue Storage</strong>: message đang trong <code>visibilityTimeout</code> vẫn bị tính vào độ dài hàng đợi, nên app <em>overscale</em>. Cần lịch hẹn giờ thì dùng scheduled message của Service Bus, hoặc đặt trần scale-out.</li>
<li><strong>Trần theo phân vùng</strong>: với Cosmos DB, trần instance là số <em>physical partition</em>; với Event Hubs là số <em>partition</em>, và platform còn ép số instance về một danh sách hợp lệ (muốn 17 thì nhảy lên 32) rồi chặn scale-in trong 3 phút sau mỗi lần scale-up để tránh rebalance liên tục.</li>
<li>Đo cho chuẩn thì mỗi function app chỉ nên có <strong>một</strong> function dùng target-based; nhiều function cùng đòi scale thì platform cộng dồn, và yêu cầu scale-out luôn thắng yêu cầu scale-in. Flex Consumption có <em>per-function scaling</em> nên không vướng chuyện này.</li>
<li><em>Nguồn: <a href="https://learn.microsoft.com/azure/azure-functions/functions-target-based-scaling" target="_blank" rel="noopener">Microsoft Learn — Target-based scaling in Azure Functions</a>, đối chiếu ngày 18/09/2026.</em></li></ul>
<h3 id="03-messaging-functions/44-bao-mat-ket-noi">4.7 Bảo mật &amp; kết nối</h3>
<ul><li><strong>HTTP auth level</strong>: <code>anonymous</code> | <code>function</code> (mã khoá theo hàm) | <code>admin</code> (master key). Trước internet nên đặt sau <strong>API Management</strong> hoặc dùng <strong>Easy Auth (Entra ID)</strong>.</li><li><strong>Identity-based connections</strong> (không dùng connection string — chuẩn thi):</li></ul>
<pre><button class="copybtn">copy</button><code>ServiceBusConnection__fullyQualifiedNamespace = mysb.servicebus.windows.net
STORAGE_CONN__accountName                    = mystorage
COSMOS_CONN__accountEndpoint                 = https://mycosmos.documents.azure.com:443/</code></pre>
<p>  Kèm managed identity + role tương ứng (Azure Service Bus Data Receiver, Storage Blob Data Contributor, Cosmos DB Built-in Data Contributor).</p>
<ul><li>Secrets: app settings + <strong>Key Vault reference</strong>, hoặc đọc trực tiếp bằng <code>SecretClient</code>.</li></ul>
<h3 id="03-messaging-functions/4d2-function-access-key">4.8 Access key của Azure Functions</h3>
<table><thead><tr><th>Loại key</th><th>Tên</th><th><code>authLevel</code> tương ứng</th><th>Phạm vi</th></tr></thead><tbody>
<tr><td>Function key</td><td><code>default</code> hoặc tự đặt</td><td><code>function</code></td><td>Đúng một function</td></tr>
<tr><td>Host key</td><td><code>default</code> hoặc tự đặt</td><td><code>function</code></td><td>Mọi function trong app</td></tr>
<tr><td>Master key</td><td><code>_master</code></td><td><code>admin</code></td><td>Cả app, kèm quyền gọi REST API quản trị <code>/admin/</code></td></tr>
<tr><td>System key</td><td>Tuỳ extension</td><td>—</td><td>Endpoint nội bộ của extension (Event Grid trigger, Durable Task)</td></tr>
</tbody></table>
<ul><li><code>authLevel: anonymous</code> là không cần key. Key truyền bằng query <code>?code=&lt;key&gt;</code> hoặc header <code>x-functions-key</code> — REST API <code>/admin/</code> thì <strong>bắt buộc</strong> dùng header với master key.</li>
<li>Trùng tên thì <strong>function key thắng host key</strong>.</li>
<li>Key nằm trong secret store của app: mặc định là blob trong <code>AzureWebJobsStorage</code>; chuyển sang Key Vault bằng <code>AzureWebJobsSecretStorageType=keyvault</code> + <code>AzureWebJobsSecretStorageKeyVaultUri</code> (mỗi function app một vault riêng, dùng chung vault là đè key của nhau).</li>
<li><strong>Bẫy</strong>: xoá rồi tạo lại function <em>không</em> xoay key — vị trí lưu suy ra từ tên app nên key cũ được dùng lại. Lộ key thì phải rotate tường minh (<code>az functionapp keys set …</code>).</li>
<li>Key <strong>không phải</strong> cơ chế authorization cho production: câu trả lời đúng khi đề nói "chỉ người dùng đã đăng nhập mới gọi được" là App Service Authentication (Easy Auth), API Management hoặc đưa app vào VNet — không phải "đổi sang host key".</li>
<li><em>Nguồn: Microsoft Learn — <a href="https://learn.microsoft.com/azure/event-grid/event-domains" target="_blank" rel="noopener">Event domains</a>, <a href="https://learn.microsoft.com/azure/event-grid/quotas-limits" target="_blank" rel="noopener">Event Grid quotas and limits</a> (bản 07/05/2026), <a href="https://learn.microsoft.com/azure/azure-functions/function-keys-how-to" target="_blank" rel="noopener">Work with access keys in Azure Functions</a> (bản 15/09/2026), đối chiếu ngày 18/09/2026.</em></li></ul>
<ul><li><strong>Function key thắng host key khi trùng tên.</strong> Hai cấp đều có một key tên <code>default</code>; gọi một function cụ thể thì runtime tra key của function trước, không thấy mới tra tới cấp app.</li>
<li><strong>Cách truyền</strong>: query string <code>?code=&lt;key&gt;</code> hoặc header <code>x-functions-key</code>. Header là lựa chọn đúng cho production — query string bị ghi vào access log, lịch sử trình duyệt và Referer header.</li>
<li>Key do Functions sinh là <strong>32 byte ngẫu nhiên, mã base64 an toàn URL</strong>, có kèm phần chữ ký và checksum để các bộ quét bí mật nhận ra "đây là access key của Azure Functions". Tự đặt giá trị key của mình là mất luôn tính chất đó — nên để hệ thống tự sinh.</li></ul>
<p><strong>Key nằm ở đâu — và vì sao đây là điểm ra đề.</strong> Key <em>không</em> nằm trong code hay trong cấu hình function; chúng nằm trong một kho bí mật riêng, mặc định là một container Blob trong tài khoản của <code>AzureWebJobsStorage</code>, mã hoá at-rest. Đổi chỗ bằng <code>AzureWebJobsSecretStorageType</code>:</p>
<table><thead><tr><th>Giá trị</th><th>Lưu ở</th></tr></thead><tbody>
<tr><td><code>blob</code> (mặc định)</td><td>Blob storage — dùng tài khoản khác thì khai SAS trong <code>AzureWebJobsSecretStorageSas</code></td></tr>
<tr><td><code>keyvault</code></td><td>Key Vault khai ở <code>AzureWebJobsSecretStorageKeyVaultUri</code></td></tr>
<tr><td><code>files</code></td><td>file system cục bộ — <strong>không khuyến nghị</strong></td></tr>
<tr><td><code>kubernetes</code></td><td>Kubernetes Secret (chỉ khi deploy lên Kubernetes)</td></tr>
<tr><td><code>containerapps</code></td><td>kho secret của Container Apps (chỉ khi deploy lên Container Apps)</td></tr>
</tbody></table>
<div class="warn"><b>Hệ quả quan trọng nhất của việc key nằm ở kho riêng:</b> vòng đời của key <strong>độc lập với function</strong>. Xoá một function <em>không</em> xoá và <em>không</em> xoay key. Vị trí lưu được suy ra từ <strong>tên app</strong>, nên tạo lại function trùng tên là <strong>dùng lại đúng key cũ</strong>. Điều này đúng với mọi kiểu lưu, kể cả Key Vault.<br>
Nói cách khác: <b>xoá rồi tạo lại function KHÔNG phải là xoay key.</b> Key lộ ra ngoài, hay cần cắt quyền của ai đó, thì phải <em>renew</em> hoặc <em>delete</em> chính key đó (portal → App keys, hoặc <code>az functionapp keys set</code>). Xoay xong phải tự phân phát lại giá trị mới cho mọi client — không có cơ chế tự cập nhật.</div>
<ul><li><strong>Bẫy khi dùng Key Vault</strong>: secret <em>không</em> được tách theo từng function app. Hai app trỏ vào cùng một vault là dùng chung và ghi đè key của nhau. Mỗi app một vault riêng.</li>
<li><strong>Master key <code>_master</code> là credential quản trị</strong>, không phải "host key mạnh hơn". Nó mở các REST API runtime dưới <code>/admin/</code> — trên app có file system ghi được thì kèm luôn khả năng <em>triển khai và chạy code</em>. Không phát cho client, không nhúng vào app di động. Muốn chặn hẳn nhóm endpoint đó thì đặt site property <code>functionsRuntimeAdminIsolationEnabled</code>.</li>
<li><strong>System key</strong> chỉ do extension tạo ra, không tự đặt giá trị được; Event Grid trigger bắt subscription phải dùng system key khi gọi endpoint trigger, và Durable Functions dùng nó cho Durable Task API. Thấy đề nhắc "Event Grid gọi vào function mà bị 401" thì nghĩ tới system key chứ không phải function key.</li>
<li><code>authLevel</code> khai trong binding của trigger: <code>anonymous</code> (không cần key), <code>function</code> (nhận function key hoặc host key), <code>admin</code> (chỉ master key). Đổi <code>authLevel</code> là đổi <em>loại key được chấp nhận</em>, không phải bật/tắt bảo mật.</li>
<li><strong>Khi nào nên bỏ key hẳn</strong>: access key là <em>shared secret</em>, không định danh được ai gọi và không hết hạn. Endpoint công khai cho người dùng thật thì dùng App Service Authentication (Easy Auth) với Microsoft Entra, hoặc đặt sau API Management, hoặc đưa vào VNet — key chỉ hợp cho giao tiếp máy-với-máy nội bộ.</li>
<li><em>Nguồn: <a href="https://learn.microsoft.com/azure/azure-functions/function-keys-how-to" target="_blank" rel="noopener">Work with access keys in Azure Functions</a>, đối chiếu ngày 19/09/2026.</em></li></ul>
<h3 id="03-messaging-functions/46-durable-functions-thuong-xuat-hien-trong-kich-ban-ai-pipe">4.9 Durable Functions (thường xuất hiện trong kịch bản AI pipeline dài)</h3>
<ul><li><strong>Orchestrator</strong> điều phối, <strong>activity</strong> làm việc, <strong>client</strong> khởi động.</li><li>Pattern: function chaining (chunk → embed → index), <strong>fan-out/fan-in</strong> (embed song song rồi gom), async HTTP API (long-running + status endpoint), human interaction/approval, monitor.</li><li>Orchestrator phải <strong>deterministic</strong> (không <code>datetime.now()</code>, không random, không I/O trực tiếp).</li></ul>
<h3 id="03-messaging-functions/4f-durable-replay">4.10 Durable Functions — replay và ràng buộc xác định</h3>
<p>Orchestrator dùng <strong>event sourcing</strong>: mỗi khi có sự kiện mới (một activity xong, một timer nổ), runtime <em>chạy lại hàm orchestrator từ đầu</em> và đọc lại history. Lời gọi nào đã có kết quả trong history thì trả về ngay, lời gọi mới mới thực sự được xếp lịch. Vì thế hàm orchestrator <strong>phải xác định</strong>: chạy bao nhiêu lần cũng phải ra cùng một chuỗi quyết định.</p>
<table><thead><tr><th>Không được dùng trong orchestrator</th><th>Vì sao</th><th>Dùng gì thay</th></tr></thead><tbody>
<tr><td><code>datetime.now()</code>, <code>datetime.utcnow()</code></td><td>Mỗi lần replay ra một giá trị khác</td><td><code>context.current_utc_datetime</code></td></tr>
<tr><td><code>uuid.uuid4()</code></td><td>Không tái lập được</td><td><code>context.new_uuid()</code> (Python; .NET là <code>NewGuid()</code>) — UUID xác định theo history</td></tr>
<tr><td>Số ngẫu nhiên</td><td>Không tái lập được</td><td>Sinh trong activity, hoặc seed cố định</td></tr>
<tr><td>Gọi HTTP, đọc/ghi DB, input/output binding</td><td>Replay sẽ gọi lại → I/O trùng lặp</td><td>Chuyển vào activity function</td></tr>
<tr><td>Biến static, biến môi trường</td><td>Giá trị đổi giữa các lần replay</td><td>Truyền vào qua input hoặc trả về từ activity</td></tr>
<tr><td><code>time.sleep()</code>, <code>asyncio.sleep()</code></td><td>Chặn thread, tính tiền thời gian chạy vô ích</td><td>Durable timer: <code>context.create_timer(...)</code></td></tr>
<tr><td><code>async def</code> trong Python</td><td>Ngữ nghĩa coroutine không khớp mô hình replay</td><td>Khai là <strong>generator</strong> và dùng <code>yield</code> thay <code>await</code></td></tr>
</tbody></table>
<ul><li>Ràng buộc chỉ áp cho <strong>orchestrator</strong>. Activity function không bị gì cả — đó chính là chỗ để đặt mọi thứ không xác định.</li>
<li>Vì kết quả activity được lưu vào history nên nó <em>luôn</em> an toàn khi replay. Quy tắc thực dụng: cái gì không xác định thì đẩy xuống activity rồi nhận kết quả trả về.</li>
<li>Framework có cố bắt lỗi và ném <code>NonDeterministicOrchestrationException</code>, nhưng <strong>không bắt hết</strong> — đừng dựa vào nó.</li>
<li><strong>Versioning</strong>: một orchestration có thể chạy hàng tháng, nên sửa code giữa chừng làm gãy replay của các instance đang chạy. Cách xử lý là deploy song song (side-by-side) hoặc đổi tên task hub.</li>
<li>Mô hình <strong>in-process</strong> hết hỗ trợ ngày <strong>10/11/2026</strong> — code mới viết theo isolated worker.</li>
<li><em>Nguồn: <a href="https://learn.microsoft.com/azure/durable-task/common/durable-task-code-constraints" target="_blank" rel="noopener">Microsoft Learn — Durable orchestrator code constraints</a> (bản 24/08/2026), đối chiếu ngày 18/09/2026.</em></li></ul>
<h3 id="03-messaging-functions/45-deploy">4.11 Deploy code</h3>
<pre><button class="copybtn">copy</button><code># Cách chuẩn cho dev
func azure functionapp publish myfuncapp --python

# Zip deploy (CI/CD)
az functionapp deployment source config-zip -g rg -n myfuncapp --src app.zip

# Cấu hình
az functionapp config appsettings set -g rg -n myfuncapp \\
  --settings "COSMOS_CONN__accountEndpoint=https://mycosmos.documents.azure.com:443/"
az functionapp identity assign -g rg -n myfuncapp</code></pre>
<ul><li><code>WEBSITE_RUN_FROM_PACKAGE=1</code> → chạy từ package (read-only, khởi động nhanh, mặc định với zip deploy).</li><li><strong>Deployment slot</strong> + swap để zero-downtime.</li><li>Function App bắt buộc có <strong>AzureWebJobsStorage</strong> (lưu trigger metadata, lease, timer state).</li><li>Nhiều instance chạy Timer trigger vẫn chỉ <strong>1 instance chạy</strong> (singleton nhờ blob lease).</li></ul>
<h3 id="03-messaging-functions/khoa-fn-flex-cold-start">4.12 Flex Consumption cho AI — cold start, per-function scaling, instance memory</h3>
<p>Mục tiêu đầu tiên của module Functions là cân nhắc cold start, scaling và instance memory giữa Flex Consumption và Premium. Tài liệu hiện có đã có bảng plan nhưng còn thiếu các con số và cơ chế dưới đây.</p>
<ul>
<li><strong>Cold start</strong> là chuyện của <em>từng instance</em>: chỉ request đầu tiên vào instance mới phải chịu. AI làm cold start nặng hơn vì import thư viện lớn (ví dụ <code>azure-ai-documentintelligence</code>, <code>azure-cosmos</code>), nạp cấu hình model, warm-up kết nối. Traffic đều giữ instance ấm; traffic burst sinh instance mới và gây trễ ngắt quãng.</li>
<li><strong>Flex Consumption</strong> là mặc định khuyến nghị cho app serverless mới: <strong>chỉ Linux</strong>, scale tới <strong>1.000 instance</strong>, VNet integration, <strong>always-ready</strong> cho từng function (function khác vẫn scale về 0), tính tiền theo thời gian thực thi cộng baseline always-ready.</li>
<li><strong>Per-function scaling</strong>: mọi HTTP trigger scale <em>chung một nhóm</em>; mỗi loại trigger khác (queue, Service Bus, timer…) scale trên bộ instance riêng. Nhờ vậy burst hàng đợi không tranh tài nguyên với HTTP.</li>
<li><strong>Concurrency</strong>: đặt thấp thì tải trải ra nhiều instance, mỗi lần gọi có nhiều tài nguyên hơn, hợp inference nặng CPU/RAM. Đặt cao thì dùng ít instance hơn nhưng mỗi instance cần nhiều RAM hơn.</li>
</ul>
<div class="tablewrap"><table><thead><tr><th>Instance memory (Flex)</th><th>CPU</th><th>Dùng khi</th></tr></thead><tbody>
<tr><td>512 MB</td><td>—</td><td>Event processor nhẹ, khối lượng lớn</td></tr>
<tr><td><strong>2.048 MB (mặc định)</strong></td><td>1 vCPU</td><td>Đa số trường hợp</td></tr>
<tr><td>4.096 MB</td><td>2 vCPU</td><td>Nạp model lớn, xử lý dữ liệu nặng bộ nhớ, cần thêm CPU (CPU tăng theo tỉ lệ memory)</td></tr>
</tbody></table></div>
<ul>
<li><strong>Premium</strong>: luôn có ít nhất một worker pre-warmed nên <em>không cold start</em>. Chọn khi function chạy gần như liên tục, cần compute lớn hơn Flex, hoặc cần <strong>custom container image</strong>.</li>
<li><strong>Container Apps hosting</strong>: khi function cần <strong>GPU</strong> cho inference, gói OS tùy biến, hoặc chạy cạnh microservice khác. <strong>Dedicated</strong>: đã có App Service plan dư capacity.</li>
<li><strong>Consumption trên Linux</strong> là plan cũ; khả năng chạy function app Linux trên Consumption sẽ retire sau tháng 9/2028. Dự án mới dùng Flex Consumption.</li>
</ul>
<blockquote><p><strong>Bẫy thi:</strong> "chỉ function API cần độ trễ thấp, các function batch vẫn phải scale về 0 để tiết kiệm" thì chọn Flex + always-ready cho riêng function đó, không phải chuyển cả app sang Premium. "Function cần GPU" thì đáp án là Container Apps hosting, cả Flex lẫn Premium đều không có GPU.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/build-backends-azure-functions/2-understand-hosting-scaling" target="_blank" rel="noopener">Understand Azure Functions hosting and scaling for AI workloads</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="03-messaging-functions/khoa-fn-230s-async-request-reply">4.13 Giới hạn 230 giây của HTTP trigger và pattern async request-reply</h3>
<p>Đây là con số dễ ra đề nhất của module Functions mà tài liệu chưa có: <code>functionTimeout</code> cao không cứu được một HTTP call chạy lâu.</p>
<ul>
<li>HTTP trigger bị <strong>Azure Load Balancer cắt ở 230 giây</strong>, <em>bất kể</em> hosting plan hay <code>functionTimeout</code> trong <code>host.json</code>. Client nhận timeout, trong khi function có thể vẫn đang chạy phía sau.</li>
<li>Cách đúng: <strong>async request-reply</strong>. HTTP function validate input, ghi message vào Service Bus bằng output binding, trả ngay <strong>202 Accepted</strong> kèm URL trạng thái. Một function Service Bus trigger xử lý phần nặng; trên Flex Consumption và Premium, function Service Bus trigger không bị giới hạn thời gian chạy.</li>
<li>Tách như vậy còn tách throughput nhận (HTTP, hàng trăm request/giây) khỏi throughput xử lý (scale theo độ sâu queue).</li>
</ul>
<pre><button class="copybtn">copy</button><code>@app.route(route="process-document", methods=["POST"], auth_level=func.AuthLevel.FUNCTION)
@app.service_bus_queue_output(arg_name="queue_msg", queue_name="document-jobs",
                              connection="ServiceBusConnection")
def accept_document(req: func.HttpRequest, queue_msg: func.Out[str]) -&gt; func.HttpResponse:
    job_id = str(uuid.uuid4())
    queue_msg.set(json.dumps({"job_id": job_id, "document_url": req.get_json().get("document_url")}))
    return func.HttpResponse(json.dumps({"job_id": job_id, "status_url": f"/api/job-status/{job_id}"}),
                             status_code=202, mimetype="application/json")

@app.service_bus_queue_trigger(arg_name="msg", queue_name="document-jobs", connection="ServiceBusConnection")
@app.blob_output(arg_name="output_blob", path="results/{rand-guid}.json", connection="AzureWebJobsStorage")
def process_and_store(msg: func.ServiceBusMessage, output_blob: func.Out[str]) -&gt; None:
    job = json.loads(msg.get_body().decode("utf-8"))
    output_blob.set(json.dumps(extract_and_classify(job["document_url"])))</code></pre>
<p>Tinh chỉnh worker Service Bus cho AI trong <code>host.json</code>:</p>
<pre><button class="copybtn">copy</button><code>{
  "version": "2.0",
  "extensions": {
    "serviceBus": {
      "maxConcurrentCalls": 1,
      "maxAutoLockRenewalDuration": "00:05:00"
    }
  }
}</code></pre>
<ul>
<li><code>maxConcurrentCalls: 1</code>: mỗi message được dùng trọn tài nguyên instance, hợp xử lý nặng.</li>
<li><code>maxAutoLockRenewalDuration</code>: đặt đủ dài để phủ lần xử lý lâu nhất, tránh mất lock khi đang chờ dịch vụ AI.</li>
<li>Dịch vụ không có binding (Document Intelligence, Azure OpenAI, AI Search) thì tạo SDK client <strong>ở cấp module, ngoài handler</strong>, để client và token được dùng lại qua các lần gọi trên cùng instance.</li>
<li>Python v2 cho phép một function vừa trả HTTP response vừa ghi output binding (multiple outputs qua kiểu trả về tùy biến).</li>
</ul>
<blockquote><p><strong>Bẫy thi:</strong> "HTTP function xử lý tài liệu 6 phút, đã đặt <code>functionTimeout</code> 10 phút trên Premium mà client vẫn timeout" thì nguyên nhân là giới hạn 230 giây của load balancer. Đáp án là trả 202 rồi đẩy việc qua queue (hoặc Durable async HTTP API), không phải tăng timeout hay đổi plan.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/build-backends-azure-functions/2-understand-hosting-scaling" target="_blank" rel="noopener">Understand Azure Functions hosting and scaling for AI workloads</a>, <a href="https://learn.microsoft.com/en-us/training/modules/build-backends-azure-functions/4-create-triggers-bindings-ai-patterns" target="_blank" rel="noopener">Create triggers and bindings for AI integration patterns</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="03-messaging-functions/khoa-fn-local-dev">4.14 Môi trường dev local — Core Tools, cấu trúc project, Azurite, đồng bộ settings</h3>
<p>Một unit riêng của khóa học mà tài liệu chưa có. Câu hay hỏi: "queue/timer trigger không chạy khi debug local", "file nào không được commit".</p>
<pre><button class="copybtn">copy</button><code># Cài Core Tools (runtime local, cùng logic trigger/binding với Azure)
brew tap azure/functions &amp;&amp; brew install azure-functions-core-tools@4   # macOS
winget install Microsoft.Azure.FunctionsCoreTools                      # Windows
func --version

func init my-ai-backend --python                          # scaffold (KHÔNG sinh thư mục .vscode)
func new --name classify --template "HTTP trigger"
func start                                                # HTTP tại http://localhost:7071

npm install -g azurite &amp;&amp; azurite --silent                # emulator Blob/Queue/Table

func azure functionapp fetch-app-settings &lt;app-name&gt;      # kéo settings từ Azure về local
func settings encrypt                                     # mã hóa local.settings.json</code></pre>
<div class="tablewrap"><table><thead><tr><th>File / thư mục</th><th>Vai trò</th><th>Commit?</th></tr></thead><tbody>
<tr><td><code>function_app.py</code></td><td>Entry point Python v2, khai function bằng decorator. Nhiều function thì tách module bằng <strong>blueprints</strong> rồi đăng ký vào file chính</td><td>Có</td></tr>
<tr><td><code>host.json</code></td><td>Cấu hình runtime <em>toàn app</em>: timeout, logging, extension bundle, concurrency của trigger</td><td>Có</td></tr>
<tr><td><code>local.settings.json</code></td><td>App settings/connection string khi chạy local (object <code>Values</code> thành biến môi trường)</td><td><strong>Không</strong>, đã nằm trong <code>.gitignore</code> mặc định</td></tr>
<tr><td><code>.vscode/</code> (<code>launch.json</code>, <code>tasks.json</code>, <code>extensions.json</code>)</td><td>F5 debug attach vào Core Tools, task build/start host</td><td>Có, để cả team debug giống nhau</td></tr>
<tr><td><code>requirements.txt</code></td><td>Dependency, cài khi deploy</td><td>Có</td></tr>
<tr><td><code>.funcignore</code></td><td>Loại test, tài liệu khỏi gói deploy</td><td>Có</td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code>{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "FUNCTIONS_WORKER_RUNTIME": "python"
  }
}</code></pre>
<ul>
<li>Runtime <strong>luôn cần</strong> <code>AzureWebJobsStorage</code> để điều phối trigger giữa các instance, lưu trạng thái timer và access key, kể cả khi code không dùng Storage. Thiếu nó thì <strong>trigger không phải HTTP (queue, timer) không chạy</strong>. Local thì trỏ vào Azurite bằng <code>UseDevelopmentStorage=true</code>; giá trị này không có tác dụng trên cloud.</li>
<li>Dịch vụ kết nối khác: Cosmos DB có emulator (Windows, Linux, macOS qua Docker, hỗ trợ NoSQL API). PostgreSQL và Redis không có emulator riêng của Azure, nên chạy bản open source qua Docker (<code>docker run -p 6379:6379 redis</code>).</li>
<li>Test Service Bus trigger local: đặt connection trong <code>local.settings.json</code>, gửi message bằng Service Bus Explorer trên portal hoặc <code>az servicebus queue message send</code>. Timer trigger tự chạy theo CRON khi Core Tools đang chạy.</li>
<li>VS Code: <strong>Download Remote Settings</strong> / <strong>Upload Local Settings</strong>. Cẩn thận khi đẩy lên vì dễ ghi đè setting production. Setting production nên quản bằng <code>az functionapp config appsettings set</code> hoặc IaC.</li>
</ul>
<blockquote><p><strong>Bẫy thi:</strong> "HTTP trigger chạy local bình thường nhưng timer/queue trigger không chạy" thì kiểm tra <code>AzureWebJobsStorage</code> và Azurite. File <code>local.settings.json</code> không bao giờ được deploy hay commit. <code>func settings encrypt</code> chỉ giải mã được bởi Core Tools trên cùng máy.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/build-backends-azure-functions/3-set-up-local-development-environment" target="_blank" rel="noopener">Set up the local development environment for Functions</a>, <a href="https://learn.microsoft.com/en-us/training/modules/build-backends-azure-functions/5-manage-secrets-configuration" target="_blank" rel="noopener">Manage secrets and configuration in Functions</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="03-messaging-functions/khoa-fn-role-toi-thieu-ai">4.15 Role tối thiểu khi Function gọi dịch vụ AI và storage của host</h3>
<p>Tài liệu đã có hậu tố identity-based và role cho Service Bus/Cosmos. Mục này bổ sung role cho các dịch vụ AI không có binding, và role storage theo loại trigger.</p>
<div class="tablewrap"><table><thead><tr><th>Đích</th><th>Role gán cho managed identity của Function App</th></tr></thead><tbody>
<tr><td>Storage của host (<code>AzureWebJobsStorage__accountName</code>)</td><td><code>Storage Blob Data Owner</code> là tối thiểu, đủ cho pattern Service Bus/Cosmos</td></tr>
<tr><td>… khi có <strong>blob trigger</strong></td><td>Thêm <code>Storage Queue Data Contributor</code> <strong>và</strong> <code>Storage Account Contributor</code> (blob trigger dùng queue nội bộ cho blob receipt)</td></tr>
<tr><td>Azure AI Document Intelligence</td><td><code>Cognitive Services User</code></td></tr>
<tr><td>Azure AI Search</td><td><code>Search Index Data Reader</code> (chỉ đọc) hoặc <code>Search Index Data Contributor</code> (ghi)</td></tr>
<tr><td>Azure OpenAI</td><td><code>Cognitive Services OpenAI User</code></td></tr>
<tr><td>Service Bus trigger / output</td><td><code>Azure Service Bus Data Receiver</code> / <code>Azure Service Bus Data Sender</code></td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code>credential = DefaultAzureCredential()   # local: Azure CLI/VS Code; Azure: managed identity
doc_client = DocumentIntelligenceClient(endpoint=os.environ["DOCUMENT_INTELLIGENCE_ENDPOINT"],
                                        credential=credential)
search_client = SearchClient(endpoint=os.environ["SEARCH_ENDPOINT"],
                             index_name=os.environ["SEARCH_INDEX"], credential=credential)
# khởi tạo ở cấp module: Functions dùng lại process cho nhiều lần gọi tới khi instance bị recycle</code></pre>
<blockquote><p><strong>Bẫy thi:</strong> "function chỉ truy vấn index" thì <code>Search Index Data Reader</code> là đủ. Chọn Contributor là vi phạm least privilege. Blob trigger với identity-based storage mà chỉ gán Blob Data Owner thì trigger không chạy, vì còn thiếu hai role queue và account.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/build-backends-azure-functions/6-configure-identity-access" target="_blank" rel="noopener">Configure identity and access for Functions</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="03-messaging-functions/khoa-fn-mcp-server">4.16 Biến Function App thành MCP server (bài lab của khóa)</h3>
<p>Bài exercise của module Functions là dựng <strong>MCP server</strong>: mỗi function là một tool để agent/LLM gọi. Unit Identity cũng nhắc system key <code>mcp_extension</code>. Tài liệu chưa có nội dung này.</p>
<ul>
<li>MCP (Model Context Protocol) là chuẩn mở để agent khám phá và gọi tool bên ngoài. Functions có <strong>MCP extension</strong> với các trigger: tool trigger (chạy function khi có tool call), resource trigger, prompt trigger.</li>
<li>Python: decorator <code>mcp_tool_trigger</code> cần gói <code>azure-functions</code> <strong>≥ 1.24.0</strong> (Python v2). Chạy local cần Core Tools ≥ 4.0.7030. <code>host.json</code> cần extension bundle <code>[4.0.0, 5.0.0)</code>. PowerShell chưa được hỗ trợ.</li>
<li>Tool property mặc định là <strong>optional</strong> (từ bản <code>1.0.0-preview.7</code>), nên phải tự đánh dấu <code>isRequired</code>. Kiểu hợp lệ: <code>string</code>, <code>number</code>, <code>integer</code>, <code>boolean</code>, <code>object</code> (thêm <code>isArray</code> cho mảng).</li>
</ul>
<pre><button class="copybtn">copy</button><code>@app.mcp_tool_trigger(
    arg_name="context",
    tool_name="save_snippet",
    description="Save a snippet with a name.",
    tool_properties=tool_properties_save_snippets_json,   # chuỗi JSON: propertyName, propertyType, description, isRequired
)
@app.blob_output(arg_name="file", connection="AzureWebJobsStorage", path=_BLOB_PATH)
def save_snippet(file: func.Out[str], context) -&gt; str:
    content = json.loads(context)
    file.set(content["arguments"]["snippet"])
    return "Snippet saved"</code></pre>
<pre><button class="copybtn">copy</button><code>{
  "version": "2.0",
  "extensions": {
    "mcp": {
      "serverName": "TestServer",
      "serverVersion": "2.0.0",
      "instructions": "Some test instructions on how to use the server",
      "system": { "webhookAuthorizationLevel": "System" }
    }
  }
}</code></pre>
<div class="tablewrap"><table><thead><tr><th>Transport</th><th>Endpoint</th></tr></thead><tbody>
<tr><td><strong>Streamable HTTP</strong> (khuyến nghị)</td><td><code>/runtime/webhooks/mcp</code> (local: <code>http://localhost:7071/runtime/webhooks/mcp</code>)</td></tr>
<tr><td>Server-Sent Events (đã bị protocol mới deprecate)</td><td><code>/runtime/webhooks/mcp/sse</code></td></tr>
</tbody></table></div>
<ul>
<li>Trên Azure, endpoint bắt buộc có <strong>system key <code>mcp_extension</code></strong> trong header <code>x-functions-key</code> hoặc query <code>code</code>; thiếu thì trả <strong>401</strong>. Lấy key bằng <code>az functionapp keys list -g &lt;rg&gt; -n &lt;app&gt; --query systemKeys.mcp_extension -o tsv</code>. Bỏ yêu cầu key bằng <code>system.webhookAuthorizationLevel: "Anonymous"</code> (vẫn có thể lớp built-in MCP server authorization dựa trên identity lên trên).</li>
<li>Dùng transport SSE với identity-based host storage thì cần <code>Storage Queue Data Contributor</code> và <code>Storage Queue Data Message Processor</code> (SSE dựa vào Queue storage của <code>AzureWebJobsStorage</code>).</li>
<li>Bài lab test bằng GitHub Copilot agent mode trong VS Code, khai server trong <code>mcp.json</code> và nhập key qua <code>inputs</code> kiểu password để key không bị commit.</li>
</ul>
<blockquote><p><strong>Bẫy thi:</strong> MCP client gọi function app trên Azure bị 401 thì thiếu system key <code>mcp_extension</code>. Function key hay host key đều không phải đáp án. System key do extension tạo, không tự đặt giá trị.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/build-backends-azure-functions/7-exercise-create-mcp-server" target="_blank" rel="noopener">Exercise - Create an MCP server with Azure Functions</a>, <a href="https://learn.microsoft.com/en-us/training/modules/build-backends-azure-functions/6-configure-identity-access" target="_blank" rel="noopener">Configure identity and access for Functions</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026; chi tiết đối chiếu <a href="https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-mcp" target="_blank" rel="noopener">MCP bindings for Azure Functions</a> và <a href="https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-mcp-tool-trigger" target="_blank" rel="noopener">MCP tool trigger</a>.</em></p>
<h3 id="03-messaging-functions/khoa-df-vai-tro-history">4.17 Durable Functions — bốn vai trò, orchestration history và dữ liệu nên đưa vào</h3>
<p>Module Durable là một module riêng trong learning path. Tài liệu mới có danh sách pattern và luật xác định; mục này bổ sung code Python v2 và các quy tắc về dữ liệu trong history.</p>
<div class="tablewrap"><table><thead><tr><th>Vai trò</th><th>Làm gì</th></tr></thead><tbody>
<tr><td><strong>Client</strong></td><td>Khởi động, truy vấn trạng thái, terminate, gửi external event; client HTTP thường trả về URL trạng thái</td></tr>
<tr><td><strong>Orchestrator</strong></td><td>Trình tự, rẽ nhánh, song song, chờ bền, gom kết quả. <em>Lập lịch</em> công việc, không tự làm I/O</td></tr>
<tr><td><strong>Activity</strong></td><td>Một đơn vị việc không xác định: đọc blob, gọi model, gửi thông báo, ghi DB. Được phân phối cho worker và retry theo policy</td></tr>
<tr><td><strong>Entity</strong></td><td>Giữ một mẩu state bền qua các thao tác tường minh; không cần cho kịch bản xử lý tài liệu</td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code>import azure.durable_functions as df
app = df.DFApp()

@app.orchestration_trigger(context_name="context")
def document_orchestrator(context: df.DurableOrchestrationContext):
    document = context.get_input()                        # chỉ là tham chiếu gọn: id + blob_url
    result = yield context.call_activity("analyze_document", document)
    return result

@app.activity_trigger(input_name="document")
def analyze_document(document: dict) -&gt; dict:
    text = read_blob_text(document["blob_url"])          # I/O và gọi model chỉ đặt ở activity
    r = call_classification_model(text)
    return {"document_id": document["document_id"], "category": r["category"],
            "confidence": r["confidence"]}</code></pre>
<ul>
<li>Runtime ghi input và mọi durable action vào <strong>orchestration history</strong>, checkpoint mỗi khi orchestrator lập lịch hoặc nhận kết quả. Activity vẫn có ngữ nghĩa <strong>at-least-once</strong>, nên side effect của activity phải idempotent.</li>
<li><strong>Đừng đưa payload lớn qua orchestration</strong> (toàn văn tài liệu, ảnh, prompt, embedding, response model): chúng bị serialize vào durable store, làm tăng storage operation, thời gian replay, bộ nhớ, và lưu lại dữ liệu nhạy cảm. Hãy ghi vào Blob/DB rồi truyền tham chiếu và metadata gọn (ID, URL, confidence).</li>
<li><strong>Không để secret/token trong input/output</strong> của orchestration; dùng managed identity + Key Vault.</li>
<li>Storage provider: với app Durable <strong>mới</strong>, Microsoft khuyến nghị <strong>Durable Task Scheduler</strong> (managed). Azure Storage provider vẫn dùng được cho app cũ hoặc khi muốn tự quản.</li>
<li><strong>Log an toàn khi replay</strong>: log trong orchestrator có thể in nhiều lần. Bọc bằng <code>if not context.is_replaying:</code> và kèm <code>context.instance_id</code>. Log trong activity thì giữ nguyên, vì mỗi lần chạy là việc thật.</li>
</ul>
<blockquote><p><strong>Bẫy thi:</strong> "log orchestrator cho thấy một bước chạy 5 lần nhưng activity chỉ chạy 1 lần" là hiện tượng replay, không phải lỗi. Cách xử lý là dùng <code>is_replaying</code>. Python orchestrator dùng <code>context.new_uuid()</code> và <code>context.current_utc_datetime</code>.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/orchestrate-durable-functions/2-separate-orchestrator-activity-responsibilities" target="_blank" rel="noopener">Separate orchestration logic from activity work</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="03-messaging-functions/khoa-df-fan-out-fan-in">4.18 Fan-out/fan-in với <code>task_all</code>, chia batch và sub-orchestration</h3>
<p>Mục này là code và các giới hạn thực tế của pattern fan-out/fan-in mà tài liệu mới chỉ nêu tên. Ví dụ quy mô: 20 tài liệu × 5 giây thì chạy tuần tự mất khoảng 100 giây, còn song song thì tiến gần thời gian của tài liệu chậm nhất.</p>
<pre><button class="copybtn">copy</button><code>def orchestrator(context: df.DurableOrchestrationContext):
    batch = context.get_input()
    tasks = [context.call_activity("process_document",
                 {"batch_id": batch["batch_id"], "document_id": d["document_id"], "blob_url": d["blob_url"]})
             for d in batch["documents"]]              # tạo task, CHƯA yield từng cái
    results = yield context.task_all(tasks)           # fan-in: chờ tất cả
    return {"processed": len(results),
            "requires_review": [r["document_id"] for r in results if r["confidence"] &lt; 0.80]}</code></pre>
<ul>
<li>Kết quả của <code>task_all</code> <strong>đúng thứ tự danh sách task</strong>, dù activity xong theo thứ tự khác. Một activity lỗi làm <code>task_all</code> ném lỗi về orchestrator; orchestrator bắt lỗi rồi chọn cho batch fail, compensate, hoặc chuyển đi điều tra.</li>
<li>Kết quả fan-in phải gọn: document ID, status, confidence, result URL, operation ID. Không trả text trích xuất, prompt hay embedding. Gom nặng thì lập lịch thêm một activity <code>AggregateResults</code> sau <code>task_all</code>.</li>
<li>Song song <strong>không có nghĩa là vô hạn</strong>: bị giới hạn bởi hosting plan, worker, và dependency hẹp nhất (quota model, DB).</li>
</ul>
<pre><button class="copybtn">copy</button><code>batch_size = 20                                   # chọn theo quota model, không chọn đại
all_results = []
for start in range(0, len(documents), batch_size):
    tasks = [context.call_activity("process_document", d)
             for d in documents[start : start + batch_size]]
    all_results.extend((yield context.task_all(tasks)))</code></pre>
<ul>
<li>Chia batch giới hạn số việc được lập lịch nhưng <strong>không phải rate limit chính xác theo request/giây</strong>. Cần nghỉ giữa các batch thì dùng durable timer, <strong>không</strong> dùng sleep.</li>
<li><strong>Sub-orchestration</strong>: một orchestrator gom kết quả trên một worker nên có thể thành nút cổ chai. Cho parent chia theo partition (theo tháng, theo policy), mỗi child tự fan-out rồi trả summary, parent chỉ gom summary. Nó thêm history và điều phối, nên chỉ dùng khi đo thấy cần.</li>
</ul>
<blockquote><p><strong>Bẫy thi:</strong> viết <code>yield context.call_activity(...)</code> bên trong vòng lặp là chạy <strong>tuần tự</strong> (function chaining), không phải fan-out. Fan-out đúng là gom task vào list rồi <code>yield context.task_all(tasks)</code> một lần.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/orchestrate-durable-functions/3-apply-fan-out-fan-in" target="_blank" rel="noopener">Process independent work with fan-out/fan-in</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="03-messaging-functions/khoa-df-human-approval">4.19 Human approval — external event đua với durable timer</h3>
<p>Mục này giải kịch bản "chờ người duyệt tối đa 24 giờ, quá hạn thì đi nhánh khác". Orchestration đang chờ <strong>không giữ worker</strong>, nên chờ vài giờ hay vài ngày vẫn rẻ.</p>
<pre><button class="copybtn">copy</button><code>def orchestrator(context: df.DurableOrchestrationContext):
    review_request = context.get_input()
    yield context.call_activity("notify_approver", review_request)      # gửi thông báo = activity

    approval_task = context.wait_for_external_event("ApprovalResponse")
    timeout_task = context.create_timer(context.current_utc_datetime + timedelta(hours=24))

    winner = yield context.task_any([approval_task, timeout_task])
    if winner == approval_task:
        if not timeout_task.is_completed:
            timeout_task.cancel()                     # phải hủy timer còn treo trước khi kết thúc
        return {"status": "Approved" if approval_task.result["decision"] == "Approved" else "Rejected"}
    return {"status": "TimedOut"}</code></pre>
<pre><button class="copybtn">copy</button><code>app = df.DFApp(http_auth_level=func.AuthLevel.FUNCTION)

@app.route(route="approvals/{instance_id}", methods=["POST"])
@app.durable_client_input(client_name="client")
async def submit_approval(req: func.HttpRequest, client: df.DurableOrchestrationClient) -&gt; func.HttpResponse:
    reviewer = authorize_reviewer(req)                                   # xác thực + phân quyền trước
    event = validate_approval_response(req.get_json(), reviewer)
    await client.raise_event(req.route_params["instance_id"], "ApprovalResponse", event)
    return func.HttpResponse(json.dumps({"status": "Accepted"}), status_code=202,
                             mimetype="application/json")</code></pre>
<ul>
<li>External event là message một chiều, có tên, gửi tới <strong>một instance cụ thể</strong>. <strong>Instance ID là địa chỉ</strong>, nên lưu nó cùng bản ghi duyệt khi thông báo người duyệt. Event tới <em>trước</em> khi orchestrator bắt đầu chờ vẫn được giữ lại (buffer).</li>
<li>Tên event là hợp đồng ổn định (không phải chữ hiển thị trên UI). Client trả <strong>202</strong> vì orchestration tiếp tục chạy bất đồng bộ.</li>
<li>Payload gọn: decision (<code>Approved</code>/<code>Rejected</code>), reviewer ID, document ID, <strong>approval version</strong> (để loại phản hồi cho yêu cầu duyệt cũ), tham chiếu tới comment lưu bên ngoài.</li>
<li>External event cũng <strong>at-least-once</strong>: ghi quyết định đầu tiên hợp lệ bằng activity idempotent (khóa theo approval request ID + version). Phải có quy tắc cho event tới muộn sau khi đã TimedOut: bỏ qua, lưu audit, hoặc mở instance mới.</li>
<li>Timeout là <strong>kết quả nghiệp vụ</strong> (escalate, chuyển xử lý tay), không nhất thiết là lỗi. Theo dõi số lượng và tuổi của các approval đang chờ bằng custom status hoặc bản ghi ngoài. Đừng poll từ trong orchestrator.</li>
</ul>
<blockquote><p><strong>Bẫy thi:</strong> chờ bằng <code>time.sleep</code>/<code>asyncio.sleep</code> hoặc vòng lặp poll là sai; đáp án là <code>create_timer</code> + <code>wait_for_external_event</code> + <code>task_any</code>. Function-level key trên endpoint duyệt <strong>không đủ</strong>: ai biết instance ID và key là tác động được workflow, nên phải xác thực người dùng bằng Entra ID và kiểm quyền trên tài liệu.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/orchestrate-durable-functions/4-wait-human-approval-external-events" target="_blank" rel="noopener">Coordinate human approval with external events</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="03-messaging-functions/khoa-df-retry-compensation">4.20 Bước workflow tin cậy — <code>call_activity_with_retry</code>, timeout, idempotency, compensation</h3>
<p>Mục này nói về cách phục hồi lỗi mà không nhân đôi side effect bên ngoài. Tài liệu hiện có chưa có API retry của Durable lẫn pattern compensation.</p>
<div class="tablewrap"><table><thead><tr><th>Loại lỗi</th><th>Xử lý</th></tr></thead><tbody>
<tr><td>Tạm thời (mạng, throttling, dependency chết tạm)</td><td>Retry có giới hạn</td></tr>
<tr><td>Vĩnh viễn (input sai, content type không hỗ trợ, thiếu trường)</td><td>Validate sớm, đi nhánh kết thúc nghiệp vụ, không retry</td></tr>
<tr><td>Phân quyền (forbidden)</td><td>Không retry lặp lại; cần sửa cấu hình/quyền</td></tr>
<tr><td>Timeout (quá hạn workflow)</td><td>Compensate, escalate, hoặc giữ lại để kiểm tra</td></tr>
<tr><td>Quy tắc nghiệp vụ (confidence thấp, bị từ chối)</td><td>Activity <em>trả về</em> kết quả có cấu trúc, không raise, để không tốn lượt retry hạ tầng</td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code>retry_options = df.RetryOptions(
    first_retry_interval_in_milliseconds=5_000,   # chờ 5 giây trước lần retry đầu
    max_number_of_attempts=3,                     # TỔNG số lần thử
)
try:
    result = yield context.call_activity_with_retry("process_document", retry_options,
        {"operation_id": operation_id, "document_id": doc["document_id"], "blob_url": doc["blob_url"]})
except Exception:
    yield context.call_activity("compensate_document",
        {"operation_id": operation_id, "reason": "ProcessingFailed"})
    raise                                          # giữ trạng thái Failed, không nuốt lỗi</code></pre>
<ul>
<li><code>RetryOptions</code> trong Python chỉ nhận interval đầu (ms) và số lần thử tối đa; SDK ngôn ngữ khác có thêm backoff coefficient và max interval. <strong>Đừng chồng retry mất kiểm soát</strong>: SDK model tự retry bên trong, Durable lại retry cả activity, nên phải tính tổng số lần và thời gian.</li>
<li><strong>Timeout nhiều tầng</strong>: request timeout trong activity, cửa sổ retry của một bước, timeout bước bằng cách đua với durable timer, deadline end-to-end. Chọn tầng hẹp nhất đúng với yêu cầu.</li>
<li><strong>Timer thắng <code>task_any</code> không hủy activity đang chạy</strong>: activity vẫn có thể xong và ghi ra ngoài. Hãy cho ghi idempotent, có cờ hủy mà activity tự kiểm tra, và bỏ qua kết quả tới sau deadline.</li>
<li><strong>Idempotency</strong>: operation ID lấy từ input hoặc <code>context.new_uuid()</code> trong orchestrator rồi truyền xuống. <strong>Không</strong> sinh bằng <code>uuid.uuid4()</code> bên trong activity được retry, vì mỗi lần thử sẽ trông như việc mới.</li>
</ul>
<pre><button class="copybtn">copy</button><code>from azure.core.exceptions import ResourceExistsError

def persist_result(request: dict) -&gt; dict:
    blob_client = results_container.get_blob_client(f"results/{request['operation_id']}.json")
    try:
        blob_client.upload_blob(json.dumps(request["result"]), overwrite=False)
        status = "Created"
    except ResourceExistsError:                    # lần thử trước đã ghi nhưng kết quả activity bị mất
        status = "AlreadyExists"
    return {"operation_id": request["operation_id"], "result_url": blob_client.url, "write_status": status}</code></pre>
<ul>
<li><strong>Compensation</strong> thay cho rollback phân tán: một hành động nghiệp vụ mới để xử lý side effect đã thành công (đánh dấu invalid, chuyển sang container quarantine, ẩn khỏi consumer). Compensation cũng phải idempotent, chạy theo <strong>thứ tự ngược</strong> các bước đã xong, và giữ audit thay vì xóa bằng chứng.</li>
<li>Mọi nhánh phải kết thúc ở trạng thái rõ ràng: <code>Completed</code>, <code>Rejected</code>, <code>TimedOut</code>, <code>Compensated</code>, <code>Failed</code>. Dùng <strong>custom orchestration status</strong> cho tiến độ gọn. Telemetry kèm instance ID, operation ID, document ID, tên activity, lượt thử; không log nội dung tài liệu, prompt hay credential.</li>
</ul>
<blockquote><p><strong>Bẫy thi:</strong> <code>max_number_of_attempts=3</code> nghĩa là tổng 3 lần thử (1 lần đầu + 2 retry), không phải 3 lần retry. Bắt exception để compensate rồi <strong>không raise lại</strong> thì orchestration báo Completed, che mất thất bại.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/orchestrate-durable-functions/5-design-reliable-workflow-steps" target="_blank" rel="noopener">Design reliable workflow steps</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="03-messaging-functions/trien-khai-functions">4.21 Triển khai Function App trên Azure — tạo hạ tầng từ đầu</h3>
<p>Mục "Deploy" ở trên đẩy <em>code</em>; mục này dựng <em>hạ tầng</em>: <strong>storage account → Application Insights → Function App (Flex Consumption) → identity + role → identity-based settings → publish</strong>.</p>
<pre><button class="copybtn">copy</button><code># 1. Storage bắt buộc (AzureWebJobsStorage) + App Insights
az storage account create -g rg-ai200 -n stfuncrag -l eastus --sku Standard_LRS --allow-blob-public-access false
az monitor app-insights component create -g rg-ai200 -a ai-rag -l eastus --workspace $WS_ID

# 2. Function App trên Flex Consumption, Python
az functionapp create -g rg-ai200 -n func-rag --storage-account stfuncrag \\
  --flexconsumption-location eastus --runtime python --runtime-version 3.11 \\
  --app-insights ai-rag

# 3. Identity + role cho storage của host và cho Service Bus
az functionapp identity assign -g rg-ai200 -n func-rag
PID=$(az functionapp identity show -g rg-ai200 -n func-rag --query principalId -o tsv)
az role assignment create --assignee $PID --role "Storage Blob Data Owner" --scope $STORAGE_ID
# (khuyến nghị thêm "Storage Table Data Contributor" cho diagnostic events; có Blob trigger thì thêm "Storage Queue Data Contributor")
az role assignment create --assignee $PID --role "Azure Service Bus Data Receiver" --scope $SB_ID

# 4. Chuyển host storage + binding sang identity-based
az functionapp config appsettings set -g rg-ai200 -n func-rag --settings \\
  AzureWebJobsStorage__accountName=stfuncrag \\
  ServiceBusConnection__fullyQualifiedNamespace=sb-rag.servicebus.windows.net
az functionapp config appsettings delete -g rg-ai200 -n func-rag --setting-names AzureWebJobsStorage

# 5. Publish code
func azure functionapp publish func-rag</code></pre>
<ul><li><strong>Premium</strong> thay cho Flex: <code>az functionapp plan create --sku EP1 --is-linux</code> rồi <code>az functionapp create --plan &lt;tên plan&gt;</code>.</li>
<li><strong>Kiểm tra</strong>: <code>az functionapp function list -g rg-ai200 -n func-rag</code> phải liệt kê hàm — rỗng thường là publish sai thư mục hoặc thiếu <code>function_app.py</code>; Live Metrics trong App Insights khi chạy thử.</li>
<li><strong>Bẫy</strong>: Flex Consumption <strong>không có deployment slot</strong> (thay bằng rolling updates — preview) và không dùng <code>WEBSITE_RUN_FROM_PACKAGE</code> (code nằm trong blob container deployment riêng) — đề đòi slot + serverless thì chọn Premium; xóa <code>AzureWebJobsStorage</code> trước khi gán role xong là host không khởi động được.</li></ul>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/azure/azure-functions/flex-consumption-plan" target="_blank" rel="noopener">Flex Consumption plan</a>, <a href="https://learn.microsoft.com/en-us/azure/azure-functions/manage-connections?pivots=functions-auth-identity" target="_blank" rel="noopener">Manage connections (identity)</a> trên Microsoft Learn, đối chiếu ngày 26/09/2026.</em></p>
<hr>
<h2 id="03-messaging-functions/4b-do-tin-cay-retry-idempotency-thu-tu">5. Độ tin cậy: retry, idempotency và thứ tự message</h2>
<p>Mảng hay bị hỏi dưới dạng tình huống: "message bị xử lý hai lần / sai thứ tự / lỗi tạm thời thì sao?". Ba công cụ trả lời gần hết: <strong>retry có backoff</strong>, <strong>consumer idempotent</strong>, và <strong>session/dedup của Service Bus</strong>.</p>
<h3 id="03-messaging-functions/4b1-retry-voi-exponential-backoff">5.1 Retry với exponential backoff + jitter</h3>
<ul><li>Lỗi <strong>tạm thời</strong> (429, timeout, mất kết nối) thì retry; lỗi <strong>vĩnh viễn</strong> (401, 400 sai schema) thì retry chỉ tốn tiền — phân loại trước khi thử lại.</li>
<li>Chuẩn: <strong>exponential backoff + jitter</strong> (1s → 2s → 4s… cộng ngẫu nhiên) để cả đàn client không cùng dội lại một lúc. SDK Azure (Cosmos, Service Bus, Storage) đã có sẵn retry policy — cấu hình <code>retry_total</code>/<code>retry_backoff_max</code> thay vì tự viết vòng while.</li>
<li>Cosmos DB trả 429 kèm header <code>x-ms-retry-after-ms</code> — SDK tự đợi đúng khoảng đó; thấy 429 dày đặc thì vấn đề là RU/partition key, không phải retry.</li></ul>
<h3 id="03-messaging-functions/4b2-consumer-idempotent">5.2 Consumer idempotent — vì at-least-once là mặc định</h3>
<ul><li>Service Bus (PEEK_LOCK) giao <strong>ít nhất một lần</strong>: xử lý xong mà chưa kịp <code>complete</code> thì message quay lại → consumer phải chịu được xử lý trùng.</li>
<li>Mẫu chuẩn: dùng <strong>khóa tự nhiên</strong> (order id, <code>MessageId</code>) và thao tác <strong>upsert</strong>/điều kiện thay vì insert mù; hoặc bảng "đã xử lý" kiểm tra trước khi làm.</li>
<li><strong>Duplicate detection</strong> của Service Bus lọc trùng theo <code>MessageId</code> trong cửa sổ cấu hình (mặc định 10 phút, tối đa 7 ngày) — chặn trùng phía <em>gửi</em>, không thay được idempotency phía <em>nhận</em>.</li></ul>
<h3 id="03-messaging-functions/4b3-thu-tu-va-poison-message">5.3 Thứ tự xử lý và poison message</h3>
<ul><li>Cần đúng thứ tự theo từng thực thể (các event của một đơn hàng): bật <strong>session</strong> và đặt <code>SessionId = order id</code> — Service Bus giao lần lượt từng session cho một consumer; các session khác vẫn chạy song song.</li>
<li>Message hỏng lặp lại: quá <code>MaxDeliveryCount</code> (mặc định 10) tự rơi vào <strong>DLQ</strong>. Quy trình chuẩn: alert trên độ sâu DLQ → xem <code>DeadLetterReason</code> → sửa nguyên nhân → resubmit về queue chính.</li>
<li>Event Grid retry theo lịch backoff tới <strong>24 giờ</strong> rồi mới dead-letter (phải cấu hình storage cho dead-letter) — subscriber trả 2xx càng nhanh càng tốt, việc nặng đẩy vào queue.</li></ul>
<table><thead><tr><th>Triệu chứng trong đề</th><th>Công cụ đúng</th></tr></thead><tbody>
<tr><td>"Xử lý trùng đơn hàng khi consumer crash"</td><td>Consumer idempotent (upsert theo order id)</td></tr>
<tr><td>"Người gửi retry làm phát sinh 2 message giống nhau"</td><td>Duplicate detection + <code>MessageId</code></td></tr>
<tr><td>"Các bước của một đơn phải chạy đúng thứ tự"</td><td>Session + <code>SessionId</code></td></tr>
<tr><td>"Một message lỗi làm nghẽn cả queue"</td><td><code>MaxDeliveryCount</code> → DLQ → resubmit</td></tr>
<tr><td>"Dịch vụ phía sau chập chờn 429/timeout"</td><td>Retry exponential backoff + jitter (cấu hình SDK)</td></tr>
</tbody></table>
<hr>
<h2 id="03-messaging-functions/5-checklist-on-domain-3">6. Checklist ôn Domain 3</h2>
<ul><li class="task" data-key="03-messaging-functions:0"><input type="checkbox">Phân biệt message vs event; chọn đúng Service Bus / Event Grid / Event Hubs / Queue Storage</li><li class="task" data-key="03-messaging-functions:1"><input type="checkbox">PEEK_LOCK vs RECEIVE_AND_DELETE; complete/abandon/dead-letter/defer; lock renewal</li><li class="task" data-key="03-messaging-functions:90"><input type="checkbox">Giải thích được vì sao consumer phải idempotent, và duplicate detection lọc trùng ở phía nào</li><li class="task" data-key="03-messaging-functions:91"><input type="checkbox">Chọn đúng công cụ theo triệu chứng: trùng / sai thứ tự / poison message / 429 chập chờn</li><li class="task" data-key="03-messaging-functions:2"><input type="checkbox">5 nguyên nhân message vào DLQ; đường dẫn <code>$deadletterqueue</code>; cách resubmit</li><li class="task" data-key="03-messaging-functions:3"><input type="checkbox">Ba loại filter và luôn nhớ xoá rule <code>$Default</code></li><li class="task" data-key="03-messaging-functions:4"><input type="checkbox">Event Grid: schema vs CloudEvents; subject/advanced filter; retry backoff, mã 4xx không retry</li><li class="task" data-key="03-messaging-functions:5"><input type="checkbox">Dead-letter Event Grid cần blob container, nếu không cấu hình thì event bị mất</li><li class="task" data-key="03-messaging-functions:6"><input type="checkbox">Webhook validation handshake</li><li class="task" data-key="03-messaging-functions:7"><input type="checkbox">Trigger/binding: mỗi hàm 1 trigger, cú pháp decorator Python v2</li><li class="task" data-key="03-messaging-functions:8"><input type="checkbox">Bảng chọn hosting plan (đặc biệt timeout của Consumption)</li><li class="task" data-key="03-messaging-functions:9"><input type="checkbox">Identity-based connection: hậu tố <code>__fullyQualifiedNamespace</code>, <code>__accountEndpoint</code></li><li class="task" data-key="03-messaging-functions:deploy"><input type="checkbox">Tự tạo namespace/queue Service Bus, event subscription Event Grid có dead-letter, và Function App Flex với identity-based connection</li></ul>
</section>
<section class="doc" id="04-security-monitoring" data-title="4. Bảo mật &amp; Giám sát" data-weight="20–25%" hidden>
<h1 id="04-security-monitoring/domain-4-bao-mat-giam-sat-va-troubleshoot-giai-phap-azure-20">Domain 4 — Bảo mật, giám sát và troubleshoot giải pháp Azure (20–25%)</h1>
<h2 id="04-security-monitoring/1-azure-key-vault">1. Azure Key Vault</h2>
<h3 id="04-security-monitoring/11-ba-loai-doi-tuong">1.1 Ba loại đối tượng</h3>
<div class="tablewrap"><table><thead><tr><th>Loại</th><th>Dùng cho</th><th>Client Python</th></tr></thead><tbody><tr><td><strong>Secrets</strong></td><td>Chuỗi bí mật: API key, connection string, password</td><td><code>SecretClient</code></td></tr><tr><td><strong>Keys</strong></td><td>Khoá mã hoá (RSA/EC), ký, wrap/unwrap; <strong>không lấy ra được</strong>, chỉ dùng qua Key Vault</td><td><code>KeyClient</code>, <code>CryptographyClient</code></td></tr><tr><td><strong>Certificates</strong></td><td>Chứng chỉ TLS, tự động gia hạn với CA tích hợp</td><td><code>CertificateClient</code></td></tr></tbody></table></div>
<p>Tier: <strong>Standard</strong> (software-protected, FIPS 140 Level 1) vs <strong>Premium</strong> (<strong>HSM</strong> FIPS 140-3 Level 3, key material không rời HSM). Cần HSM chuyên dụng, single-tenant → <strong>Azure Managed HSM</strong>.</p>
<h3 id="04-security-monitoring/12-mo-hinh-quyen-rbac-vs-access-policy">1.2 Mô hình quyền — RBAC vs Access policy</h3>
<div class="tablewrap"><table><thead><tr><th></th><th><strong>Azure RBAC</strong> (khuyến nghị)</th><th><strong>Access policy</strong> (vault access policy, cũ)</th></tr></thead><tbody><tr><td>Phạm vi</td><td>Subscription → RG → vault → <strong>từng secret</strong></td><td>Chỉ toàn vault</td></tr><tr><td>Quản lý</td><td>Thống nhất với toàn Azure, có PIM, deny assignment</td><td>Danh sách riêng của vault</td></tr><tr><td>Role hay dùng</td><td><strong>Key Vault Secrets User</strong> (đọc secret), <strong>Key Vault Secrets Officer</strong> (quản lý), <strong>Key Vault Administrator</strong>, Key Vault Crypto User</td><td>get/list/set/delete theo từng loại</td></tr></tbody></table></div>
<blockquote><p>Bẫy: "app đọc được secret nhưng không được sửa" → gán <strong>Key Vault Secrets User</strong>, không phải Contributor. Lưu ý <strong>Key Vault Contributor</strong> chỉ quản lý <em>tài nguyên vault</em>, <strong>không</strong> cho đọc dữ liệu bên trong.</p></blockquote>
<h3 id="04-security-monitoring/13-truy-xuat-secret-bang-code">1.3 Truy xuất secret bằng code</h3>
<pre><button class="copybtn">copy</button><code>from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient

cred = DefaultAzureCredential()          # tự chọn: env vars -&gt; managed identity -&gt; Azure CLI...
kv = SecretClient("https://mykv.vault.azure.net", cred)

s = kv.get_secret("aoai-key")            # luôn lấy bản mới nhất
print(s.value, s.properties.version)

kv.set_secret("aoai-key", "new-value")   # tạo VERSION mới, version cũ vẫn còn
kv.begin_delete_secret("old-key").wait() # soft-delete</code></pre>
<p>Thứ tự thử của <code>DefaultAzureCredential</code>: Environment → Workload Identity → Managed Identity → Azure CLI → Azure PowerShell → Azure Developer CLI → interactive. Trên Azure sẽ chọn <strong>managed identity</strong>; trên máy dev dùng <code>az login</code>. Không dùng được → cân nhắc <code>ManagedIdentityCredential(client_id=...)</code> cho user-assigned identity.</p>
<p><strong>Caching</strong>: Key Vault có giới hạn throttling (mỗi vault tối đa 4.000 GET secret/10 giây trong một region; ghi (CREATE/IMPORT) 300/10 giây; trần subscription = 5 lần trần một vault, tính trên mọi vault của region) → <strong>không gọi <code>get_secret</code> trong mỗi request</strong>. Cache trong bộ nhớ, refresh định kỳ; hoặc dùng Key Vault reference của App Service / App Configuration.</p>
<h3 id="04-security-monitoring/14-rotation-neu-tuong-minh-trong-outline">1.4 Rotation (nêu tường minh trong outline)</h3>
<p>Cơ chế:</p>
<ol><li>Secret có <strong><code>expires_on</code></strong> và <strong>rotation policy</strong> (<code>az keyvault secret set-attributes --expires</code>).</li><li>Key Vault phát <strong>sự kiện Event Grid</strong>: <code>Microsoft.KeyVault.SecretNearExpiry</code> (mặc định 30 ngày trước hạn), <code>SecretExpired</code>, <code>SecretNewVersionCreated</code>.</li><li>Event Grid → <strong>Azure Function</strong> → gọi API dịch vụ (vd Storage/Cosmos) tạo key mới → <code>set_secret()</code> version mới.</li><li>Ứng dụng đọc secret <strong>không kèm version</strong> → tự nhận giá trị mới sau khi cache hết hạn.</li></ol>
<pre><button class="copybtn">copy</button><code>az keyvault secret set-attributes --vault-name mykv --name cosmos-key \\
  --expires "2026-12-31T00:00:00Z"

az eventgrid event-subscription create --name rotate-sub \\
  --source-resource-id $(az keyvault show -n mykv --query id -o tsv) \\
  --included-event-types Microsoft.KeyVault.SecretNearExpiry \\
  --endpoint $FUNC_ID --endpoint-type azurefunction</code></pre>
<p>Thực hành tốt: <strong>two-key rotation</strong> (Cosmos/Storage có key1/key2) → xoay lần lượt để không downtime. Ưu tiên nhất vẫn là <strong>bỏ hẳn secret</strong>, dùng <strong>managed identity</strong>.</p>
<h3 id="04-security-monitoring/2b1-rotation">1.5 Rotation chuyên sâu — key vs secret, Key Vault reference</h3>
<ul><li><strong>Key</strong> (khóa mã hóa): đặt được <strong>rotation policy tự động</strong> ngay trong Key Vault (ví dụ xoay mỗi 90 ngày) — ứng dụng dùng qua key URI không version thì tự nhận bản mới.</li>
<li><strong>Secret</strong> (mật khẩu, connection string): Key Vault <strong>không tự xoay được</strong> — mẫu chuẩn: Event Grid bắn event <code>SecretNearExpiry</code> → Function tạo credential mới ở dịch vụ nguồn → ghi version secret mới. Đề hỏi "tự động xoay mật khẩu DB" là hỏi đúng pipeline này.</li>
<li>Tham chiếu không ghim version (<code>.../secrets/DbPassword</code> không có suffix) để app lấy bản mới nhất; App Service Key Vault reference cache và <strong>tự refetch mỗi 24 giờ</strong> (đã đối chiếu docs, Learn 8/2026) — mọi thay đổi cấu hình app gây restart và refetch ngay, hoặc ép refresh bằng POST tới endpoint <code>.../config/configreferences/appsettings/refresh</code>.</li>
<li>Quyền cần cấp cho managed identity của app: role <strong>Key Vault Secrets User</strong> (RBAC) hoặc permission Get (access policy); vault chặn mạng thì phải cho subnet của app vào — log 403 SecretGet từ IP public rồi 200 từ IP private là hành vi bình thường.</li>
<li>Luôn bật <strong>soft delete</strong> (mặc định) + <strong>purge protection</strong> cho vault production; RBAC data-plane (role "Key Vault Secrets User") thay cho access policy kiểu cũ.</li></ul>
<h3 id="04-security-monitoring/15-bao-ve-du-lieu-mang">1.6 Bảo vệ dữ liệu &amp; mạng</h3>
<ul><li><strong>Soft delete</strong>: luôn bật (không tắt được), thời gian giữ 7–90 ngày; khôi phục bằng <code>az keyvault secret recover</code>.</li><li><strong>Purge protection</strong>: bật thì <strong>không thể purge sớm</strong> — bắt buộc cho môi trường production/tuân thủ.</li><li><strong>Private endpoint</strong> + firewall: <code>--default-action Deny</code>, <code>--bypass AzureServices</code>.</li><li><strong>Diagnostic settings</strong> → <code>AuditEvent</code> log sang Log Analytics (ai đọc secret nào, lúc nào).</li></ul>
<h3 id="04-security-monitoring/khoa-kv-gioi-han-to-chuc">1.7 Giới hạn đối tượng, tổ chức vault và những thứ mất khi xóa vault</h3>
<p>Mục này gom các con số và quy tắc tổ chức vault mà unit "Store and organize secrets" nêu thẳng. Đề hay hỏi kiểu "lưu cái gì vào đâu", "role nào đủ hẹp", hoặc "khôi phục vault xong thì còn thiếu gì".</p>
<div class="tablewrap"><table><thead><tr><th>Đối tượng</th><th>Giới hạn / đặc điểm cần nhớ</th></tr></thead><tbody>
<tr><td><strong>Secret</strong></td><td>Chuỗi tối đa <strong>25 KB</strong>. Key Vault coi giá trị là chuỗi byte "opaque", không ép cấu trúc. <code>content_type</code> tối đa <strong>255 ký tự</strong> (ví dụ <code>text/plain</code>, <code>application/json</code>) chỉ để bên đọc biết cách hiểu giá trị.</td></tr>
<tr><td><strong>Tag</strong></td><td>Tối đa <strong>15 tag</strong> mỗi secret, tên tag ≤ 512 ký tự, giá trị ≤ 256 ký tự. Ai có quyền list/get secret là đọc được tag, nên <strong>đừng để dữ liệu nhạy cảm trong tag</strong>.</td></tr>
<tr><td><strong>Key</strong></td><td>RSA 2048/3072/4096, EC P-256/P-256K/P-384/P-521, symmetric (oct). Phép mã hóa chạy phía server, key material không rời vault.</td></tr>
<tr><td><strong>Certificate</strong></td><td>X.509 kèm private key. Khi lưu certificate, Key Vault <strong>tự tạo thêm một key và một secret tương ứng</strong>, đọc được qua API key/secret (nên role <em>Secrets User</em> đọc được cả private key của certificate).</td></tr>
</tbody></table></div>
<ul><li><strong>Tier theo unit</strong>: Standard mã hóa key bằng thư viện phần mềm đạt <strong>FIPS 140 Level 1</strong>; Premium bảo vệ key bằng HSM đạt <strong>FIPS 140-3 Level 3</strong>, key material không rời HSM.</li>
<li><strong>Mỗi app, mỗi môi trường một vault</strong> (<code>kv-ragpipeline-dev</code> / <code>-staging</code> / <code>-prod</code>): nếu bị lộ thì chỉ mất secret của một app ở một môi trường, và gán RBAC cho đội dev vào vault dev không chạm tới prod. Key Vault không giới hạn số đối tượng trong một vault. Tách vault là để khoanh vùng rủi ro chứ không phải vì hết chỗ.</li>
<li>Tên vault: duy nhất toàn cầu, 3–24 ký tự, chỉ gồm chữ, số và gạch ngang, <strong>bắt đầu bằng chữ cái, kết thúc bằng chữ hoặc số, không có hai gạch ngang liền nhau</strong>. Tên secret nên mô tả rõ loại và mục đích, có gạch ngang, ví dụ <code>cosmosdb-connection-string</code>.</li>
<li><strong>Key Vault Reader</strong>: chỉ đọc <em>metadata</em> (tên, thuộc tính secret), không thấy giá trị. Hợp cho công cụ giám sát hay khám phá cần biết secret nào đang tồn tại.</li>
<li><strong>Key Vault Administrator</strong> có toàn bộ quyền data plane trên key, secret và certificate nhưng <strong>không</strong> có quyền control plane: không quản lý được tài nguyên vault, không sửa được role assignment.</li>
<li>Retention của soft delete (7–90 ngày, <strong>mặc định 90</strong>) <strong>chỉ đặt được lúc tạo vault, sau đó không đổi được</strong>.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> khi chính <em>vault</em> bị soft-delete, các <strong>role assignment RBAC và Event Grid subscription của nó cũng bị xóa</strong>, và recover vault <strong>không</strong> tự khôi phục chúng. Sau khi recover phải tạo lại bằng tay. Triệu chứng hay gặp: vault đã recover nhưng app nhận 403 và pipeline rotation không chạy nữa.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/manage-app-secrets-key-vault/2-store-organize-secrets" target="_blank" rel="noopener">Manage application secrets with Azure Key Vault — Store and organize secrets, keys, and certificates</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="04-security-monitoring/khoa-kv-sdk-loi-async">1.8 SecretClient: liệt kê, phân loại lỗi và async client</h3>
<p>Ngoài <code>get_secret</code>, unit SDK dạy thêm ba việc: liệt kê secret để kiểm tra lúc khởi động, phân biệt ba loại exception để biết lúc nào nên retry, và dùng client async trong FastAPI/aiohttp.</p>
<pre><button class="copybtn">copy</button><code>pip install azure-keyvault-secrets azure-identity
az keyvault show --name kv-ragpipeline-prod --query properties.vaultUri   # https://&lt;vault&gt;.vault.azure.net/</code></pre>
<pre><button class="copybtn">copy</button><code># Liệt kê: trả SecretProperties (name, version, content_type, tags, enabled), KHÔNG kèm value
for prop in client.list_properties_of_secrets():
    print(prop.name, prop.enabled, prop.content_type, prop.tags)

from azure.core.exceptions import ResourceNotFoundError, HttpResponseError, ServiceRequestError
try:
    value = client.get_secret("openai-api-key").value
except ResourceNotFoundError:   # sai tên secret, lỗi cấu hình: KHÔNG retry, báo operator
    raise
except HttpResponseError as e:  # thiếu RBAC role, lỗi xác thực/phân quyền hoặc lỗi server: xem e.status_code
    raise
except ServiceRequestError:     # lỗi mạng (DNS, timeout): có thể là tạm thời, retry được
    raise</code></pre>
<pre><button class="copybtn">copy</button><code>from azure.identity.aio import DefaultAzureCredential
from azure.keyvault.secrets.aio import SecretClient

async def get_ai_credentials():
    credential = DefaultAzureCredential()
    client = SecretClient(vault_url="https://kv-ragpipeline-prod.vault.azure.net/", credential=credential)
    async with client:
        secret = await client.get_secret("openai-api-key")
    await credential.close()
    return secret.value</code></pre>
<ul><li>Dùng <code>list_properties_of_secrets()</code> lúc khởi động để kiểm đủ các secret bắt buộc. Thiếu thì app chết ngay khi start thay vì lỗi ở request đầu tiên cần tới secret đó.</li>
<li>Được phép log <em>tên</em> và <code>properties.version</code> để audit. Không bao giờ log <code>value</code>.</li>
<li>Client async nằm trong <code>azure.keyvault.secrets.aio</code>, credential async nằm trong <code>azure.identity.aio</code>. Cả hai là async context manager, phải <code>async with</code> hoặc <code>await ...close()</code>. Trong web framework thì <strong>tạo một lần lúc startup rồi dùng lại</strong> cho mọi request.</li>
<li>Thư viện yêu cầu Python 3.9 trở lên.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> đề cho một khối <code>except</code> retry mọi lỗi. Chỉ <code>ServiceRequestError</code> (mạng) là đáng retry. <code>ResourceNotFoundError</code> là lỗi cấu hình, retry bao nhiêu lần cũng không hết. Còn 403 trong <code>HttpResponseError</code> thì phải sửa role assignment. Nhắc thêm về thứ tự của <code>DefaultAzureCredential</code>: unit này xếp CLI → Azure Developer CLI → PowerShell, trong khi trang "Credential chains" (mục 6.1) xếp CLI → PowerShell → Azure Developer CLI. Điều chắc chắn ở cả hai nguồn là Environment → Workload Identity → Managed Identity đứng đầu.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/manage-app-secrets-key-vault/3-retrieve-secrets-sdk" target="_blank" rel="noopener">Manage application secrets with Azure Key Vault — Retrieve secrets using Azure SDK client libraries</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="04-security-monitoring/khoa-kv-version-het-han">1.9 Version, vô hiệu hóa version cũ và "hết hạn chỉ là nhãn"</h3>
<p>Mục này bổ sung cho 1.4–1.5 phần code quản lý version, ba chiến lược rotation theo đúng cách unit gọi tên, và mẫu code rotation không downtime.</p>
<pre><button class="copybtn">copy</button><code>v1 = client.set_secret("cosmosdb-connection-string", "AccountEndpoint=https://...")
v2 = client.set_secret("cosmosdb-connection-string", "AccountEndpoint=https://new...")  # version mới (GUID)
client.get_secret("cosmosdb-connection-string")                                  # bản mới nhất ĐANG ENABLED
client.get_secret("cosmosdb-connection-string", version=v1.properties.version)   # đúng bản cũ

for v in client.list_properties_of_secret_versions("cosmosdb-connection-string"):
    print(v.version, v.created_on, v.enabled, v.expires_on)

# Sau rotation: chặn hẳn version cũ, kể cả với app đang ghim version
client.update_secret_properties("cosmosdb-connection-string", v1.properties.version, enabled=False)

# Hết hạn 90 ngày; SecretNearExpiry bắn trước 30 ngày
from datetime import datetime, timezone, timedelta
client.set_secret("openai-api-key", "sk-...", expires_on=datetime.now(timezone.utc) + timedelta(days=90),
                  content_type="text/plain", tags={"rotation-policy": "90-days"})</code></pre>
<div class="tablewrap"><table><thead><tr><th>Chiến lược</th><th>Cách làm</th><th>Điểm yếu / khi nào dùng</th></tr></thead><tbody>
<tr><td><strong>Manual rotation</strong></td><td>Người hoặc CI/CD ghi version mới, rồi restart hoặc báo app nạp lại</td><td>Từ lúc lưu tới lúc app restart, app vẫn dùng credential cũ. Hợp với API key sống lâu của nhà cung cấp ngoài.</td></tr>
<tr><td><strong>Automated rotation với Event Grid</strong></td><td><code>SecretNearExpiry</code> (trước hạn 30 ngày) / <code>SecretExpired</code> → Event Grid → Function tạo credential mới ở dịch vụ đích → ghi version mới</td><td>Bỏ được bước thủ công. Nếu dịch vụ chỉ có một key thì vẫn có khoảng hở.</td></tr>
<tr><td><strong>Dual-credential rotation</strong></td><td>(1) tạo key <em>phụ</em> mới trên dịch vụ đích → (2) lưu thành version mới trong Key Vault → (3) chờ <strong>mọi instance</strong> nhận giá trị mới → (4) regenerate key <em>chính</em> cũ</td><td>Dành cho dịch vụ có hai key cùng hiệu lực (Storage, Cosmos DB). Luôn có ít nhất một key hợp lệ nên <strong>không downtime</strong>.</td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code># Mẫu zero-downtime trong code: bị downstream từ chối xác thực thì đọc lại secret một lần rồi thử lại
def call_downstream_service(client, secret_name, max_retries=1):
    secret_value = client.get_secret(secret_name).value
    for attempt in range(max_retries + 1):
        try:
            return connect_to_service(secret_value)
        except AuthenticationError:
            if attempt &lt; max_retries:
                secret_value = client.get_secret(secret_name).value   # có thể vừa được xoay
            else:
                raise</code></pre>
<ul><li>Bình thường app dùng giá trị trong cache. Chỉ khi downstream trả lỗi xác thực mới tốn thêm <strong>một</strong> lần gọi Key Vault. Operator xoay lúc nào cũng được, không cần phối hợp với app.</li>
<li>Version cũ vẫn đọc được cho tới khi bị disable hoặc xóa. Disable bằng <code>enabled=False</code> sẽ chặn <em>cả</em> app đang ghim đúng version đó.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> <code>expires_on</code> <strong>không chặn truy cập</strong>. Secret đã hết hạn vẫn nằm trong vault và <code>get_secret()</code> vẫn trả về. Hạn chỉ là tín hiệu "credential đã cũ" cho app và cho hệ thống giám sát. Muốn chặn thật thì phải <code>enabled=False</code>. Đề hỏi "3 version, gọi <code>get_secret</code> không kèm version trả gì" thì đáp án là <em>bản mới nhất đang enabled</em>, không phải bản đầu tiên và không phải cả danh sách.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/manage-app-secrets-key-vault/4-handle-versioning-rotation" target="_blank" rel="noopener">Manage application secrets with Azure Key Vault — Handle secret versioning and rotation</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="04-security-monitoring/khoa-kv-cache-secret">1.10 Cache secret: TTL, vô hiệu hóa bằng Event Grid, phạm vi cache</h3>
<p>Mục 1.3 mới dừng ở câu "đừng gọi <code>get_secret</code> mỗi request". Unit caching có số liệu throttling cụ thể, bảng chọn TTL theo tần suất xoay, và ba phạm vi cache để so sánh.</p>
<ul><li><strong>Throttling (secret)</strong>: tối đa <strong>4.000 GET mỗi vault mỗi 10 giây</strong> trong một region. Ghi (CREATE, IMPORT) dùng chung trần <strong>300 mỗi 10 giây</strong>. Mỗi subscription còn có trần tổng bằng <strong>5 lần trần của một vault</strong>, tính trên mọi vault trong region. Vượt trần thì nhận <strong>HTTP 429</strong>.</li>
<li>Gọi vault mất cỡ hàng chục ms, đọc cache trong bộ nhớ chỉ tốn cỡ micro giây. Với TTL 15 phút, mỗi instance đọc mỗi secret tối đa 4 lần/giờ, nên 10 replica chỉ tạo khoảng 40 lần gọi/giờ/secret.</li></ul>
<pre><button class="copybtn">copy</button><code>import time
class SecretCache:
    def __init__(self, vault_url, cache_ttl_seconds=900):
        self._client = SecretClient(vault_url=vault_url, credential=DefaultAzureCredential())
        self._cache, self._cache_ttl = {}, cache_ttl_seconds
    def get_secret(self, name):
        now = time.monotonic()            # không bị ảnh hưởng khi đồng hồ hệ thống bị chỉnh
        c = self._cache.get(name)
        if c and (now - c["timestamp"]) &lt; self._cache_ttl:
            return c["value"]
        value = self._client.get_secret(name).value
        self._cache[name] = {"value": value, "timestamp": now}
        return value</code></pre>
<ul><li><strong>Vô hiệu hóa cache theo sự kiện</strong>: đăng ký <code>SecretNewVersionCreated</code> qua Event Grid (đưa tới webhook, Function hoặc hàng đợi Service Bus). App xóa mục cache tương ứng, lần đọc sau sẽ lấy giá trị mới. Khuyến nghị <strong>dùng cả hai</strong>: Event Grid để cập nhật ngay, TTL làm lưới an toàn khi một sự kiện giao thất bại.</li></ul>
<div class="tablewrap"><table><thead><tr><th>Phạm vi cache</th><th>Số lần gọi Key Vault</th><th>Đánh đổi</th></tr></thead><tbody>
<tr><td><strong>Per-process</strong> (mỗi instance tự cache)</td><td>Tăng tuyến tính theo số instance</td><td>Đơn giản nhất, là <strong>điểm xuất phát khuyến nghị</strong></td></tr>
<tr><td><strong>Shared distributed cache</strong> (Azure Managed Redis)</td><td>Một lần mỗi chu kỳ refresh, bất kể có bao nhiêu instance</td><td>Thêm một phụ thuộc hạ tầng. Secret nằm thêm ở một chỗ ngoài Key Vault nên chỗ đó cũng cần kiểm soát truy cập và mã hóa riêng.</td></tr>
<tr><td><strong>Startup preloading</strong></td><td>Chỉ gọi lúc khởi động (có thể thêm refresh nền)</td><td>Hợp với container rolling update và secret hiếm khi đổi. Đảm bảo mọi secret có sẵn trước khi nhận request.</td></tr>
</tbody></table></div>
<div class="tablewrap"><table><thead><tr><th>Tần suất xoay</th><th>TTL khuyến nghị</th></tr></thead><tbody>
<tr><td>Cao (hằng ngày/tuần)</td><td>5–15 phút <strong>kèm</strong> Event Grid</td></tr>
<tr><td>Chuẩn (tháng/quý, ví dụ key 90 ngày)</td><td>30–60 phút. Có Event Grid thì tốt nhưng không bắt buộc (câu hỏi đánh giá của module chọn TTL 1 giờ)</td></tr>
<tr><td>Thấp (năm/tĩnh)</td><td>Startup preloading, refresh định kỳ vài giờ một lần</td></tr>
<tr><td>Có thể bị thu hồi gấp (sau sự cố bảo mật)</td><td>TTL khoảng 5 phút hoặc invalidation theo sự kiện. Khẩn cấp thì restart instance để ép refresh.</td></tr>
</tbody></table></div>
<ul><li>Nhận 429 thì <strong>exponential backoff + jitter</strong>: chờ 1 → 2 → 4 → 8 → 16 giây, mỗi lần cộng thêm một khoảng ngẫu nhiên để tránh thundering herd. Retry policy có sẵn của SDK đã lo phần lớn lỗi tạm thời, việc của app là <strong>log sự kiện 429</strong> để chỉnh TTL.</li>
<li>Thấy 429 thường xuyên nghĩa là TTL quá ngắn hoặc có đoạn code đi vòng qua cache. Chỉ thấy 429 lúc deploy (nhiều instance cùng preload một lúc) thì <strong>khởi động lệch nhịp</strong> các instance hoặc dùng shared cache.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> đề cho service 500 request/giây, API key xoay 90 ngày, hỏi cách cache. Đáp án là <em>cache trong bộ nhớ theo thời gian, TTL 1 giờ</em>. "Không cache" sẽ gây throttling. "Preload lúc startup mà không refresh" thì sau lần xoay app giữ key cũ cho tới lần restart kế tiếp.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/manage-app-secrets-key-vault/5-implement-caching-strategies" target="_blank" rel="noopener">Manage application secrets with Azure Key Vault — Implement caching strategies to reduce Key Vault calls</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="04-security-monitoring/trien-khai-keyvault">1.11 Triển khai Key Vault trên Azure — từng bước</h3>
<p>Thứ tự: <strong>vault ở chế độ RBAC (CLI hiện tại mặc định <code>--enable-rbac-authorization true</code>, ghi rõ cho dễ đọc) + purge protection → tự cấp quyền quản lý secret cho mình → ghi secret → cấp Secrets User cho app → khóa mạng → audit log</strong>.</p>
<pre><button class="copybtn">copy</button><code># 1. Vault (tên duy nhất toàn cầu, 3–24 ký tự)
az keyvault create -g rg-ai200 -n kv-rag -l eastus \\
  --enable-rbac-authorization true --enable-purge-protection true --retention-days 90
KV_ID=$(az keyvault show -n kv-rag --query id -o tsv)

# 2. Người tạo vault KHÔNG tự có quyền data plane ở chế độ RBAC
az role assignment create --assignee $MY_OID --role "Key Vault Secrets Officer" --scope $KV_ID
az keyvault secret set --vault-name kv-rag -n OpenAiKey --value "$KEY"

# 3. App chỉ đọc: role hẹp nhất, có thể scope tới đúng một secret
az role assignment create --assignee $APP_PID --role "Key Vault Secrets User" \\
  --scope $KV_ID/secrets/OpenAiKey

# 4. Mạng + audit
az keyvault update -n kv-rag --default-action Deny --bypass AzureServices
az monitor diagnostic-settings create -n kv-audit --resource $KV_ID --workspace $WS_ID \\
  --logs '[{"category":"AuditEvent","enabled":true}]' </code></pre>
<ul><li><strong>Portal</strong>: tab <em>Access configuration</em> chọn <em>Azure role-based access control</em>; tab <em>Networking</em> chọn private endpoint.</li>
<li>Dùng từ app: App Service/Functions đặt app setting <code>@Microsoft.KeyVault(SecretUri=https://kv-rag.vault.azure.net/secrets/OpenAiKey/)</code>; Container Apps dùng <code>keyvaultref:</code>; code dùng <code>SecretClient</code> + <code>DefaultAzureCredential</code>.</li>
<li><strong>Kiểm tra</strong>: <code>az keyvault secret show --vault-name kv-rag -n OpenAiKey --query id</code> bằng chính identity của app; app setting báo <em>Key Vault Reference</em> màu xanh trong portal.</li>
<li><strong>Bẫy</strong>: tạo vault xong gặp <em>Forbidden</em> khi <code>secret set</code> = thiếu bước 2; purge protection bật rồi <strong>không tắt được</strong>, và tên vault bị giữ đến hết retention sau khi xóa — tạo lại cùng tên sẽ lỗi cho tới khi recover hoặc hết retention (có purge protection thì không purge sớm được).</li></ul>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/cli/azure/keyvault" target="_blank" rel="noopener">az keyvault (CLI reference)</a>, <a href="https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide" target="_blank" rel="noopener">Key Vault RBAC guide</a> trên Microsoft Learn, đối chiếu ngày 26/09/2026.</em></p>
<hr>
<h2 id="04-security-monitoring/2-azure-app-configuration">2. Azure App Configuration</h2>
<p>Key Vault dành cho <strong>bí mật</strong>; App Configuration dành cho <strong>cấu hình</strong> và <strong>feature flag</strong>. Hai dịch vụ dùng chung nhau, không thay thế nhau.</p>
<h3 id="04-security-monitoring/21-khai-niem">2.1 Khái niệm</h3>
<ul><li><strong>Key–value</strong>: key có thể phân cấp bằng <code>:</code> (vd <code>RagApi:Retrieval:TopK</code>).</li><li><strong>Label</strong>: phiên bản hoá theo môi trường/version — cùng key, khác label (<code>dev</code>, <code>staging</code>, <code>prod</code>). Đây là cơ chế "environment" chính.</li><li><strong>Content type</strong>: đánh dấu JSON, feature flag, Key Vault reference.</li><li><strong>Snapshot</strong>: ảnh chụp bất biến của một tập cấu hình → deploy tái lập được.</li><li><strong>Feature flag</strong>: bật/tắt tính năng runtime, có filter theo phần trăm/thời gian/target group.</li><li><strong>Key Vault reference</strong>: lưu <em>đường dẫn</em> tới secret, không lưu giá trị.</li><li>Tier: <strong>Free</strong>, <strong>Standard</strong> (SLA, geo-replication, private link, 90 ngày lịch sử), <strong>Premium</strong>.</li></ul>
<h3 id="04-security-monitoring/22-su-dung">2.2 Sử dụng</h3>
<pre><button class="copybtn">copy</button><code>az appconfig kv set -n myappconfig --key "RagApi:TopK" --value 5 --label prod
az appconfig kv set-keyvault -n myappconfig --key "RagApi:AoaiKey" --label prod \\
  --secret-identifier https://mykv.vault.azure.net/secrets/aoai-key
az appconfig feature set -n myappconfig --feature hybrid-search --label prod</code></pre>
<pre><button class="copybtn">copy</button><code>from azure.appconfiguration.provider import load, SettingSelector, WatchKey
from azure.identity import DefaultAzureCredential

config = load(
    endpoint="https://myappconfig.azconfig.io",
    credential=DefaultAzureCredential(),
    selects=[SettingSelector(key_filter="RagApi:*", label_filter="prod")],
    trim_prefixes=["RagApi:"],
    keyvault_credential=DefaultAzureCredential(),   # để provider tự resolve Key Vault reference
    refresh_on=[WatchKey("Sentinel")],    # chỉ theo dõi 1 key "sentinel"
    refresh_interval=30,
)
top_k = int(config["TopK"])</code></pre>
<p><strong>Dynamic refresh với sentinel key</strong> là mẫu chuẩn: cập nhật nhiều key rồi cuối cùng đổi giá trị key <code>Sentinel</code> → app phát hiện 1 thay đổi và nạp lại toàn bộ (tránh đọc trạng thái nửa vời).</p>
<p>Bảo mật: dùng <strong>managed identity</strong> + role <strong>App Configuration Data Reader</strong> (đọc) / <strong>Data Owner</strong> (ghi). Tắt access key khi có thể.</p>
<h3 id="04-security-monitoring/2b2-app-config-refresh">2.3 Refresh không cần restart</h3>
<ul><li>Mẫu <strong>sentinel key</strong>: app watch đúng một key "phiên bản cấu hình"; đổi xong cả loạt cấu hình thì đổi sentinel cuối cùng — mọi instance reload một lần, tránh nửa nọ nửa kia.</li>
<li><strong>Label</strong> tách môi trường (cùng key, label dev/prod); <strong>feature flag</strong> có filter phần trăm/nhóm người dùng — bật dần tính năng không cần deploy; <strong>snapshot</strong> đóng băng một bộ cấu hình để rollback.</li>
<li>Phân vai với Key Vault: App Config giữ <em>cấu hình</em>, secret vẫn nằm Key Vault — App Config chỉ giữ <em>reference</em> tới secret.</li></ul>
<h3 id="04-security-monitoring/khoa-appconfig-k8s-provider">2.4 App Configuration Kubernetes Provider — đưa cấu hình và secret vào AKS mà không sửa code</h3>
<p>Khóa AKS nhắc provider này ở cả unit ConfigMap lẫn unit Secret như cách quản lý cấu hình tập trung cho nhiều cluster. Tài liệu hiện chỉ có SDK Python <code>load()</code>; mục này bổ sung cách làm phía Kubernetes.</p>
<ul><li>Provider chạy trong cluster như một <strong>controller</strong>, đọc key-value và Key Vault reference từ App Configuration rồi tạo <strong>ConfigMap</strong> (cấu hình) và <strong>Secret</strong> (giá trị lấy từ Key Vault) gốc của Kubernetes. App dùng qua env hoặc volume như bình thường, không cần SDK, không tự xác thực tới Azure.</li>
<li>Cài bằng <strong>AKS extension</strong> (tự cập nhật bản minor/patch, cài được qua CLI/ARM/Bicep) hoặc <strong>Helm chart</strong>; mặc định vào namespace <code>azappconfig-system</code>.</li></ul>
<pre><button class="copybtn">copy</button><code>az k8s-extension create --cluster-type managedClusters \\
    --cluster-name &lt;AksClusterName&gt; --resource-group &lt;AksResourceGroupName&gt; \\
    --name appconfigurationkubernetesprovider \\
    --extension-type Microsoft.AppConfiguration
---
apiVersion: azconfig.io/v1
kind: AzureAppConfigurationProvider
metadata:
  name: appconfigurationprovider-sample
spec:
  endpoint: &lt;AppConfigurationEndpoint&gt;
  target:
    configMapName: configmap-created-by-appconfig-provider
    configMapData:
      type: json
      key: mysettings.json          # toàn bộ cấu hình thành một file JSON trong ConfigMap
  auth:
    workloadIdentity:
      serviceAccountName: &lt;ServiceAccountName&gt;</code></pre>
<ul><li><code>AzureAppConfigurationProvider</code> là đối tượng khai báo: tạo thất bại nếu đã có ConfigMap trùng tên cùng namespace; ConfigMap bị xoá/sửa bằng cách khác thì bị <strong>đặt lại</strong> theo dữ liệu trong store; gỡ provider thì ConfigMap bị xoá.</li>
<li>Không khai selector → tải mọi key-value <strong>không có label</strong>. Key có label thì phải khai label filter.</li>
<li>Có Key Vault reference trong các key được chọn mà thiếu <code>spec.secret</code> (thông tin xác thực Key Vault) → <strong>toàn bộ cấu hình không nạp</strong>, không phải chỉ bỏ qua secret đó. Lỗi <code>403 Forbidden</code> → identity thiếu quyền trên store.</li>
<li>Kiểm tra: <code>kubectl get AzureAppConfigurationProvider &lt;name&gt; -o yaml</code> → <code>status.phase</code> phải là <code>Complete</code>; log ở <code>kubectl logs deployment/az-appconfig-k8s-provider -n azappconfig-system</code>.</li>
<li>Refresh theo yêu cầu: sửa <code>metadata.annotations</code> của <code>AzureAppConfigurationProvider</code>. Không nên tự sửa/xoá ConfigMap và Secret mà provider sinh ra.</li>
<li>Từ bản 2.0.0, xác thực bằng workload identity cần <strong>service account do người dùng cung cấp</strong> (cách ly theo namespace).</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "quản lý cấu hình tập trung cho nhiều cluster AKS, app đọc ConfigMap sẵn có, không được sửa code" → App Configuration Kubernetes Provider, không phải thêm SDK App Configuration vào app. Và ConfigMap do provider sinh ra, nếu app mount kiểu env, vẫn tuân theo luật cũ: đổi giá trị thì phải restart pod.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/configure-apps-azure-kubernetes-service/2-define-configmaps" target="_blank" rel="noopener">Configure applications on AKS — Define ConfigMaps</a>, <a href="https://learn.microsoft.com/en-us/training/modules/configure-apps-azure-kubernetes-service/3-implement-secrets" target="_blank" rel="noopener">Implement secrets</a> (khóa AI-200T00 trên Microsoft Learn) và <a href="https://learn.microsoft.com/en-us/azure/azure-app-configuration/quickstart-azure-kubernetes-service" target="_blank" rel="noopener">Quickstart: App Configuration in AKS</a>, đọc ngày 26/09/2026.</em></p>
<h3 id="04-security-monitoring/khoa-appconfig-provider-selector">2.5 Provider Python: null label, xếp chồng SettingSelector và <code>refresh()</code> phải tự gọi</h3>
<p>Mục 2.2 có code mẫu nhưng thiếu các quy tắc hành vi mà đề hay bẫy: mặc định provider nạp gì, hai selector trùng key thì bên nào thắng, và refresh không tự chạy.</p>
<ul><li><strong>Key</strong> là chuỗi unicode <strong>phân biệt hoa thường</strong>, phân cấp bằng <code>:</code> hoặc <code>/</code>, không ép schema. <strong>Key + value gộp lại tối đa 10 KB.</strong> Setting không gắn label thì thuộc <strong>null label</strong>, và null label đóng vai giá trị mặc định.</li>
<li>Cài <code>pip install azure-appconfiguration-provider azure-identity</code>. <code>load()</code> trả về một đối tượng <code>Mapping</code> dùng như dict (<code>in</code>, <code>get()</code>, lặp qua key). Endpoint có dạng <code>https://&lt;store&gt;.azconfig.io</code>, unit đọc từ biến <code>AZURE_APPCONFIG_ENDPOINT</code>.</li>
<li><strong>Không truyền selector thì provider nạp mọi key-value có null label</strong>. Store dùng chung cho nhiều app thì sẽ kéo cả key của app khác về. Nên luôn lọc bằng <code>SettingSelector(key_filter=..., label_filter=...)</code> (wildcard là <code>*</code>).</li></ul>
<pre><button class="copybtn">copy</button><code>from azure.appconfiguration.provider import load, SettingSelector, WatchKey
from azure.identity import DefaultAzureCredential
import os

environment = os.environ.get("APP_ENVIRONMENT", "Development")
config = load(
    endpoint=os.environ["AZURE_APPCONFIG_ENDPOINT"],
    credential=DefaultAzureCredential(),
    selects=[
        SettingSelector(key_filter="*", label_filter="\\0"),         # 1. mặc định (null label)
        SettingSelector(key_filter="*", label_filter=environment),  # 2. ghi đè theo môi trường, THẮNG vì đứng sau
    ],
    trim_prefixes=["DocPipeline:"],        # "DocPipeline:OpenAI:Endpoint" -&gt; config["OpenAI:Endpoint"]
    refresh_on=[WatchKey("Sentinel")],
    refresh_interval=60,                   # giây
)

# Trong vòng lặp hoặc request handler: PHẢI gọi thì mới refresh
config.refresh()
batch_size = config["Pipeline:BatchSize"]</code></pre>
<ul><li><strong>Composition / stacking</strong>: nhiều selector cùng khớp một key thì <strong>selector đứng sau trong danh sách thắng</strong>. Nạp null label trước rồi tới label môi trường thì key nào cũng có giá trị mặc định, và môi trường chỉ cần ghi đè đúng key cần đổi. Nhờ vậy không cần tên key kiểu <code>Pipeline_BatchSize_Prod</code> hay code <code>if env == ...</code>.</li>
<li>Đặt tên key theo thành phần (<code>OpenAI:*</code>, <code>CosmosDB:*</code>, <code>Pipeline:*</code>) để mỗi thành phần lọc đúng phần của mình. Portal sắp key theo bảng chữ cái nên tên phân cấp cũng tự gom nhóm khi xem.</li>
<li><code>refresh()</code> <strong>không tự chạy nền</strong>. App phải gọi. Gọi khi <code>refresh_interval</code> chưa hết thì hàm trả về ngay, không gọi store. Khi sentinel đổi, provider nạp lại <strong>toàn bộ</strong> cấu hình để giữ nhất quán.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "đã bật sentinel và <code>refresh_interval=60</code>, đổi key mà app không thấy" có hai nguyên nhân: không có chỗ nào gọi <code>config.refresh()</code>, hoặc đổi key thường mà <em>không</em> đổi sentinel. Provider không đẩy thay đổi xuống app, và app cũng không cần restart. Câu hỏi hai selector cho null label và <code>Production</code> thì đáp án là giá trị của <code>Production</code>, vì nó đứng sau. Provider không báo lỗi khi một key có nhiều label.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/manage-app-settings-app-config/2-connect-app-configuration" target="_blank" rel="noopener">Manage application settings with Azure App Configuration — Connect to App Configuration from application code</a> và <a href="https://learn.microsoft.com/en-us/training/modules/manage-app-settings-app-config/3-organize-labels-feature-flags" target="_blank" rel="noopener">Organize settings with labels and feature flags</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="04-security-monitoring/khoa-appconfig-feature-manager">2.6 Feature flag trong code: <code>FeatureManager</code> và refresh tách biệt</h3>
<p>Tài liệu hiện có mới dừng ở lệnh CLI tạo flag. Unit dạy cách đánh giá flag trong Python và chỉ ra một điểm dễ nhầm: flag và setting thường refresh độc lập với nhau.</p>
<pre><button class="copybtn">copy</button><code>pip install featuremanagement      # gói riêng, không đi kèm provider</code></pre>
<pre><button class="copybtn">copy</button><code>from azure.appconfiguration.provider import load, WatchKey
from featuremanagement import FeatureManager

config = load(
    endpoint=endpoint, credential=DefaultAzureCredential(),
    feature_flags_enabled=True,           # nạp flag (mặc định không nạp)
    feature_flag_refresh_enabled=True,    # cho phép flag refresh
    refresh_on=[WatchKey("Sentinel")], refresh_interval=30,
)
feature_manager = FeatureManager(config)

config.refresh()                          # refresh cả setting lẫn flag
if feature_manager.is_enabled("UseNewEmbeddingsModel"):
    process_with_new_model(document)
else:
    process_with_current_model(document)</code></pre>
<ul><li>Cách lưu bên dưới: key có tiền tố <code>.appconfig.featureflag/</code>, content type là <code>application/vnd.microsoft.appconfig.ff+json;charset=utf-8</code>. Provider và thư viện feature management che hết phần này, code chỉ làm việc với tên flag.</li>
<li><code>is_enabled()</code> đánh giá lại ở <strong>mỗi lần gọi</strong>. Kết hợp với refresh thì bật/tắt flag trên portal là có hiệu lực ở chu kỳ refresh kế tiếp, không cần restart hay redeploy.</li>
<li><strong>Refresh của flag và của setting độc lập</strong>: đổi flag không kéo theo refresh setting, đổi setting cũng không kéo theo refresh flag. Cả hai đều chỉ chạy khi gọi <code>config.refresh()</code>.</li></ul>
<div class="tablewrap"><table><thead><tr><th>Mẫu dùng flag cho AI</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td><strong>Progressive model rollout</strong></td><td>Bật embeddings model mới cho nội bộ thử trước khi mở cho toàn bộ traffic</td></tr>
<tr><td><strong>Kill switch</strong></td><td>Một bước xử lý (ví dụ phân loại) cho kết quả sai thì tắt flag để pipeline bỏ qua bước đó. Mất vài giây, so với vài phút đến vài giờ nếu rollback code.</td></tr>
<tr><td><strong>A/B testing</strong></td><td>Cho request chạy qua hai nhánh cấu hình khác nhau, log kết quả để so sánh</td></tr>
<tr><td><strong>Staged pipeline activation</strong></td><td>Mỗi stage có một flag, bật lần lượt sau khi xác nhận stage trước chạy đúng</td></tr>
</tbody></table></div>
<blockquote><p><strong>Bẫy thi:</strong> quên <code>feature_flags_enabled=True</code> thì <code>is_enabled()</code> không thấy flag nào. Chỉ bật <code>feature_flags_enabled</code> mà không bật <code>feature_flag_refresh_enabled</code> thì app giữ trạng thái flag như lúc <code>load()</code> cho tới khi restart.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/manage-app-settings-app-config/3-organize-labels-feature-flags" target="_blank" rel="noopener">Manage application settings with Azure App Configuration — Organize settings with labels and feature flags</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="04-security-monitoring/khoa-appconfig-kvref-provider">2.7 Key Vault reference qua provider: <code>keyvault_credential</code> và <code>secret_refresh_interval</code></h3>
<p>Mục này mô tả cách provider Python tự resolve Key Vault reference, và cách cho secret refresh theo nhịp riêng, tách khỏi nhịp của sentinel.</p>
<pre><button class="copybtn">copy</button><code>az appconfig kv set-keyvault --name myAppConfigStore --key "OpenAI:ApiKey" --label "Production" \\
    --secret-identifier "https://my-keyvault.vault.azure.net/secrets/openai-api-key"   # KHÔNG kèm version</code></pre>
<pre><button class="copybtn">copy</button><code>credential = DefaultAzureCredential()
config = load(
    endpoint=endpoint,
    credential=credential,              # cho App Configuration
    keyvault_credential=credential,     # cho mọi Key Vault được tham chiếu, cùng một managed identity
    refresh_on=[WatchKey("Sentinel")],
    refresh_interval=60,                # kiểm tra cấu hình mỗi 60 giây
    secret_refresh_interval=7200,       # resolve lại secret từ Key Vault mỗi 2 giờ, kể cả khi store không đổi
)
api_key = config["OpenAI:ApiKey"]       # đọc như key thường, provider đã lấy giá trị từ Key Vault</code></pre>
<ul><li>Reference được lưu với content type <code>application/vnd.microsoft.appconfig.keyvaultref+json;charset=utf-8</code>. App Configuration <strong>chỉ giữ URI</strong> (vault, tên secret, version nếu có), không bao giờ giữ giá trị. Key reference vẫn gắn label được và lọc bằng selector như key thường, nên label <code>Production</code> trỏ tới vault prod còn <code>Development</code> trỏ tới vault dev.</li>
<li><strong>Không ghi version trong URI</strong> là cách khuyến nghị: secret xoay xong app tự nhận bản mới mà không phải sửa reference. Ghi version (<code>.../openai-api-key/abc123...</code>) nghĩa là ghim cứng vào bản đó.</li>
<li>Portal: <em>Configuration explorer → Create → Key Vault reference</em>, portal tự dựng URI và đặt content type.</li>
<li>Thiếu role <em>Key Vault Secrets User</em> thì provider <strong>báo lỗi khi resolve reference</strong>, và thông báo lỗi nêu rõ vault và secret không truy cập được. Nhiều vault thì identity cần role trên <strong>từng vault</strong>, hoặc cấp credential riêng cho từng vault qua <code>keyvault_client_configs</code> (ánh xạ URI vault → cấu hình credential).</li>
<li>Mỗi lần resolve là một request tới Key Vault. Cấu hình có nhiều reference thì phải cộng tổng số request với trần throttling của Key Vault khi chọn <code>secret_refresh_interval</code>.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> đổi secret trong Key Vault <em>không</em> làm sentinel đổi, nên chỉ có sentinel là chưa đủ. Muốn app nhận secret đã xoay mà không phải restart thì cần <code>secret_refresh_interval</code> <strong>và</strong> app phải gọi <code>refresh()</code>. Hai khoảng thời gian độc lập với nhau: cấu hình kiểm tra dày (60 giây), secret đọc lại thưa theo lịch xoay (vài giờ).</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/manage-app-settings-app-config/4-reference-key-vault-secrets" target="_blank" rel="noopener">Manage application settings with Azure App Configuration — Reference Key Vault secrets from App Configuration</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="04-security-monitoring/khoa-appconfig-vs-keyvault">2.8 App Configuration hay Key Vault: tiêu chí xếp chỗ và anti-pattern</h3>
<p>Câu hỏi xếp chỗ gần như chắc chắn có trong đề. Unit đưa một tiêu chí duy nhất: <strong>giá trị này đứng một mình có cho phép truy cập tài nguyên không?</strong> Có thì đưa vào Key Vault, không thì đưa vào App Configuration.</p>
<div class="tablewrap"><table><thead><tr><th>Loại setting</th><th>Nơi lưu</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>Cấu hình không nhạy cảm</td><td>App Configuration (giá trị trực tiếp)</td><td>Endpoint URL, <strong>tên deployment (<code>gpt-4o</code>)</strong>, số chiều embedding, batch size, retry, timeout, tên queue/container/DB, log level</td></tr>
<tr><td>Bật/tắt tính năng</td><td>App Configuration (feature flag)</td><td><code>UseNewEmbeddingsModel</code></td></tr>
<tr><td>API key, token</td><td>Key Vault (<strong>qua reference</strong> trong App Configuration)</td><td><code>OpenAI:ApiKey</code></td></tr>
<tr><td>Connection string có kèm credential</td><td>Key Vault (qua reference)</td><td><code>CosmosDB:ConnectionString</code>, <code>Storage:AccountKey</code></td></tr>
<tr><td>Certificate</td><td>Key Vault (<strong>truy cập trực tiếp</strong>)</td><td>Chứng chỉ TLS cho HTTPS endpoint</td></tr>
</tbody></table></div>
<ul><li>Cần xoay theo lịch, có audit trail và có hạn dùng thì đưa vào Key Vault. Thay đổi vì lý do vận hành (chỉnh batch size, đổi deployment sau khi model mới được duyệt) là quyết định vận hành, không phải sự kiện bảo mật, nên để App Configuration.</li>
<li>Độ chi tiết của phân quyền: App Configuration phân quyền RBAC <strong>ở cấp store</strong>. Key Vault log <strong>từng lần truy cập từng secret</strong>, ghi rõ identity nào, lúc nào. Giá trị cần theo dõi truy cập riêng lẻ thì đưa vào Key Vault.</li>
<li>Kiến trúc khuyến nghị: <strong>App Configuration là cửa vào duy nhất, Key Vault là backend an toàn</strong>. App gọi <code>load()</code> một lần là có đủ cả hai loại trong một dict, operator thấy toàn bộ bề mặt cấu hình ở một chỗ.</li></ul>
<div class="tablewrap"><table><thead><tr><th>Anti-pattern</th><th>Vì sao sai</th></tr></thead><tbody>
<tr><td>Để secret thẳng trong App Configuration</td><td>Mất audit theo từng đối tượng, mất HSM, mất expiration và rotation tự động</td></tr>
<tr><td>Để setting không nhạy cảm trong Key Vault</td><td>Key Vault <strong>throttle chặt hơn</strong> App Configuration và không có label, feature flag hay snapshot. Tải cao thì dễ dính 429.</td></tr>
<tr><td>Chép cùng một giá trị vào cả hai dịch vụ</td><td>Hai bản lệch nhau theo thời gian. Dùng reference thì chỉ có một nguồn sự thật.</td></tr>
<tr><td>Hard-code trong code hoặc file cấu hình tĩnh</td><td>Đi vòng qua cả hai dịch vụ, mất khả năng đổi cấu hình không cần redeploy</td></tr>
</tbody></table></div>
<blockquote><p><strong>Bẫy thi:</strong> "tên deployment của Azure OpenAI để cùng chỗ với API key cho gọn" là sai. Tên deployment không cấp quyền gì nên là key-value thường trong App Configuration, không phải Key Vault reference.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/manage-app-settings-app-config/5-decide-app-config-vs-key-vault" target="_blank" rel="noopener">Manage application settings with Azure App Configuration — Decide what to store in App Configuration vs Key Vault</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="04-security-monitoring/trien-khai-appconfig">2.9 Triển khai App Configuration trên Azure — từng bước</h3>
<p>Thứ tự: <strong>store (Standard cho production) → role cho mình và cho app → nạp key theo label → Key Vault reference cho secret → feature flag → (tùy chọn) snapshot</strong>.</p>
<pre><button class="copybtn">copy</button><code># 1. Store
az appconfig create -g rg-ai200 -n ac-rag -l eastus --sku Standard
AC_ID=$(az appconfig show -n ac-rag --query id -o tsv)
az role assignment create --assignee $MY_OID  --role "App Configuration Data Owner"  --scope $AC_ID
az role assignment create --assignee $APP_PID --role "App Configuration Data Reader" --scope $AC_ID

# 2. Nạp cấu hình theo môi trường (label) — --auth-mode login để đi bằng Entra, không dùng key
az appconfig kv import -n ac-rag --auth-mode login -s file --path appsettings.prod.json \\
  --format json --label prod --separator :
az appconfig kv set -n ac-rag --auth-mode login --key RagApi:Retrieval:TopK --value 5 --label prod

# 3. Secret vẫn ở Key Vault — App Config chỉ giữ tham chiếu
az appconfig kv set-keyvault -n ac-rag --auth-mode login --key RagApi:OpenAiKey --label prod \\
  --secret-identifier https://kv-rag.vault.azure.net/secrets/OpenAiKey

# 4. Feature flag + sentinel key cho refresh
az appconfig feature set -n ac-rag --auth-mode login --feature HybridSearch --label prod
az appconfig kv set -n ac-rag --auth-mode login --key Sentinel --value 1 --label prod

# 5. Snapshot bất biến để rollback
az appconfig snapshot create -n ac-rag --auth-mode login --snapshot-name prod-2026-09 \\
  --filters '{"key":"RagApi:*","label":"prod"}' </code></pre>
<ul><li><strong>Tier</strong>: Free (3 store mỗi region/subscription, 1.000 request/ngày, không SLA) và Developer (có Private Link nhưng không SLA, không geo-replication) chỉ để dev/test; <strong>Standard</strong> trở lên mới có SLA, geo-replication, soft delete và customer-managed key; Premium bỏ giới hạn quota request.</li>
<li><strong>Kiểm tra</strong>: <code>az appconfig kv list -n ac-rag --label prod --auth-mode login</code>; trong app bật log của provider để thấy lần refresh khi đổi <code>Sentinel</code>.</li>
<li><strong>Bẫy</strong>: app đọc Key Vault reference thông qua App Config cần <strong>hai</strong> quyền — <em>App Configuration Data Reader</em> trên store và <em>Key Vault Secrets User</em> trên vault; thiếu cái thứ hai thì key thường đọc được nhưng key tham chiếu secret lỗi 403.</li></ul>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/azure/azure-app-configuration/faq" target="_blank" rel="noopener">App Configuration FAQ</a>, <a href="https://learn.microsoft.com/en-us/cli/azure/appconfig/kv" target="_blank" rel="noopener">az appconfig kv (CLI reference)</a> trên Microsoft Learn, đối chiếu ngày 26/09/2026.</em></p>
<hr>
<h2 id="04-security-monitoring/3-distributed-tracing-voi-opentelemetry">3. Application Insights &amp; OpenTelemetry (distributed tracing)</h2>
<h3 id="04-security-monitoring/31-khai-niem">3.1 Khái niệm</h3>
<ul><li><strong>Trace</strong> = một request xuyên nhiều service, gồm nhiều <strong>span</strong>; mỗi span có <code>trace_id</code>, <code>span_id</code>, <code>parent_span_id</code>, thời gian, <strong>attributes</strong>, <strong>events</strong>, <strong>status</strong>.</li><li><strong>Ba tín hiệu</strong>: traces, metrics, logs.</li><li><strong>Context propagation</strong> chuẩn <strong>W3C Trace Context</strong> qua header <code>traceparent</code>: <code>00-&lt;trace-id 32 hex&gt;-&lt;span-id 16 hex&gt;-01</code>. Nhờ đó ghép được span của API → Function → Cosmos DB.</li><li>Azure Monitor / Application Insights là backend; <strong>OpenTelemetry là chuẩn instrumentation chính thức</strong> (thay dần SDK Application Insights cũ).</li></ul>
<h3 id="04-security-monitoring/32-bat-opentelemetry-cho-python-tren-azure">3.2 Bật OpenTelemetry cho Python trên Azure</h3>
<pre><button class="copybtn">copy</button><code>import os
from azure.monitor.opentelemetry import configure_azure_monitor
from opentelemetry import trace

os.environ["OTEL_SERVICE_NAME"] = "rag-api"           # -&gt; cloud_RoleName
configure_azure_monitor(
    connection_string=os.environ["APPLICATIONINSIGHTS_CONNECTION_STRING"],
    # tự instrument: requests, urllib/urllib3, flask/django/fastapi, psycopg2, Azure SDK (redis KHÔNG nằm trong distro)
)

tracer = trace.get_tracer(__name__)

def answer(question: str):
    with tracer.start_as_current_span("rag.answer") as span:
        span.set_attribute("rag.tenant", tenant)
        span.set_attribute("rag.question_len", len(question))

        with tracer.start_as_current_span("rag.embed"):
            vec = embed(question)

        with tracer.start_as_current_span("rag.vector_search") as s2:
            docs = search(vec)
            s2.set_attribute("rag.docs_returned", len(docs))

        with tracer.start_as_current_span("rag.llm_call") as s3:
            resp = llm(question, docs)
            s3.set_attribute("gen_ai.usage.input_tokens", resp.usage.prompt_tokens)
            s3.set_attribute("gen_ai.usage.output_tokens", resp.usage.completion_tokens)
        return resp</code></pre>
<p>Điểm cần nhớ:</p>
<ul><li>Gói: <code>azure-monitor-opentelemetry</code> (distro trọn gói) hoặc <code>opentelemetry-sdk</code> + <code>azure-monitor-opentelemetry-exporter</code>.</li><li>Biến môi trường quan trọng: <code>APPLICATIONINSIGHTS_CONNECTION_STRING</code>, <code>OTEL_SERVICE_NAME</code>, <code>OTEL_RESOURCE_ATTRIBUTES</code>, <code>OTEL_TRACES_SAMPLER</code> (<code>microsoft.fixed_percentage</code> | <code>microsoft.rate_limited</code>, mặc định rate-limited) + <code>OTEL_TRACES_SAMPLER_ARG</code> (tỷ lệ 0–1 hoặc số trace/giây; biến môi trường thắng tham số trong code), <code>OTEL_LOGS_EXPORTER</code>.</li><li><strong>Sampling</strong> để giảm chi phí — với Azure Monitor dùng <code>sampling_ratio</code> (0.0–1.0); Application Insights có <strong>adaptive sampling</strong> phía ingest.</li><li>Ghi ngoại lệ: <code>span.record_exception(e)</code> + <code>span.set_status(Status(StatusCode.ERROR))</code>.</li><li>Với <strong>AKS/Container Apps</strong>: có thể dùng <strong>OpenTelemetry Collector</strong> (sidecar/daemonset) rồi export sang Azure Monitor — tách cấu hình khỏi ứng dụng. Container Apps có <strong>managed OTel agent</strong> cấu hình ở cấp environment.</li><li>Khi trace không nối được giữa 2 service → kiểm tra header <code>traceparent</code> có bị proxy/gateway loại bỏ không, và cả hai bên có dùng cùng propagator W3C không.</li></ul>
<h3 id="04-security-monitoring/33-anh-xa-opentelemetry-bang-application-insights">3.3 Ánh xạ OpenTelemetry → bảng Application Insights</h3>
<div class="tablewrap"><table><thead><tr><th>Khái niệm OTel</th><th>Bảng trong Log Analytics (workspace-based)</th><th>Bảng "classic"</th></tr></thead><tbody><tr><td>Server span (incoming)</td><td><code>AppRequests</code></td><td><code>requests</code></td></tr><tr><td>Client span (outgoing: HTTP, DB, Redis)</td><td><code>AppDependencies</code></td><td><code>dependencies</code></td></tr><tr><td>Log record</td><td><code>AppTraces</code></td><td><code>traces</code></td></tr><tr><td>Exception</td><td><code>AppExceptions</code></td><td><code>exceptions</code></td></tr><tr><td>Custom metric</td><td><code>AppMetrics</code></td><td><code>customMetrics</code></td></tr></tbody></table></div>
<p>Trường quan trọng: <code>OperationId</code> (= trace id), <code>ParentId</code>, <code>AppRoleName</code> (= service name), <code>DurationMs</code>, <code>Success</code>, <code>ResultCode</code>, <code>Properties</code> (custom attributes).</p>
<h3 id="04-security-monitoring/3b-opentelemetry-chi-tiet">3.4 OpenTelemetry chi tiết — propagation và sampling</h3>
<ul><li>Ba trụ: <strong>trace</strong> (span nối theo <code>traceparent</code>), <strong>metric</strong>, <strong>log</strong>. Trên Azure dùng <strong>Azure Monitor OpenTelemetry Distro</strong> — một gói bật auto-instrumentation cho HTTP, SDK Azure, DB driver phổ biến, đổ về Application Insights.</li>
<li><strong>Context propagation</strong> theo chuẩn W3C <code>traceparent</code>; SDK Service Bus tự nhét vào <code>Diagnostic-Id</code> của message — consumer dùng SDK + distro thì trace nối liền qua queue. Trace "đứt" ở queue = bên nhận không dùng instrumentation, hoặc tự new message làm rơi header.</li>
<li>Span thủ công cho nghiệp vụ: bọc đoạn "gọi LLM", "vector search" bằng <code>tracer.start_as_current_span("rag.search")</code> và gắn attribute (số chunk, model) — chính attribute này thành <code>customDimensions</code> để KQL lọc.</li>
<li><strong>Sampling</strong>: production bật fixed-rate (ví dụ 10%) để giảm chi phí ingestion — Application Insights nhân bù theo tỷ lệ sample nhưng tỷ lệ càng thấp thì số liệu ở Performance/Failures càng kém chính xác (unit gợi ý bắt đầu 5%). Metric không bao giờ bị sample; log thuộc trace không được sample bị bỏ theo mặc định (có thể opt out). Khi đếm bằng KQL phải dùng sum(itemCount)..</li>
<li>Phân vai câu hỏi: "app chậm ở đâu giữa 4 service" → distributed tracing; "CPU replica bao nhiêu" → metric; "vì sao request X lỗi" → log + trace theo <code>operation_Id</code>.</li></ul>
<h3 id="04-security-monitoring/3b1-duoi-nap-capo-trace-context">3.5 Dưới nắp capo: span context nằm ở đâu trong dây</h3>
<ul><li>Một trace là cây các span; danh tính của nó gói trong <strong>16 byte trace-id + 8 byte span-id</strong>, mã hóa thành header W3C <code>traceparent: 00-&lt;trace-id&gt;-&lt;parent-span-id&gt;-&lt;flags&gt;</code>. "Propagation" chỉ là: bên gửi <em>viết</em> header này vào HTTP request hoặc property <code>Diagnostic-Id</code> của message; bên nhận <em>đọc</em> nó và tạo span con với parent tương ứng.</li>
<li>Vì thế trace "đứt" luôn quy về một trong hai: không ai <em>viết</em> (producer thiếu instrumentation / tự new message trắng) hoặc không ai <em>đọc</em> (consumer thiếu instrumentation). Application Insights ghép cây bằng <code>operation_Id</code> = trace-id — nên câu KQL <code>union ... | where operation_Id == ...</code> hoạt động với mọi SDK nói đúng chuẩn W3C.</li>
<li>Byte <code>flags</code> cuối header mang quyết định <strong>sampling</strong> (01 = sampled): quyết định lấy ở span gốc và <em>chảy theo header</em> xuống toàn bộ chuỗi — vì vậy một trace hoặc được giữ trọn vẹn hoặc bỏ trọn vẹn, không bao giờ thủng giữa chừng do sampling.</li>
<li>Azure Monitor OTel Distro = bộ auto-instrumentation (HTTP, SDK Azure, DB driver) + exporter đẩy về Application Insights — "bật distro" nghĩa là cắm sẵn người viết và người đọc header ở mọi biên giới cho bạn.</li></ul>
<h3 id="04-security-monitoring/4d2-baggage-span-link">3.6 Baggage không phải span attribute; span link không phải parent</h3>
<ul><li><strong>Baggage</strong> là kho key-value đi kèm context, truyền qua header <code>baggage</code> (chuẩn W3C), tách bạch với trace context đi trong <code>traceparent</code>/<code>tracestate</code>. Dùng để chuyển thông tin nghiệp vụ xuyên service (<code>tenant.id</code>, <code>experiment</code>) mà không phải nhét vào mọi chữ ký hàm.</li>
<li><strong>Baggage không tự động trở thành attribute của span</strong> — auto-instrumentation chỉ truyền tiếp chứ không gắn vào span. Muốn lọc theo <code>tenant.id</code> trong Application Insights thì phải tự đọc baggage rồi <code>span.set_attribute(...)</code> (hoặc bật Baggage Span Processor nếu ngôn ngữ có). Đề tả "đã set baggage nhưng query KQL không thấy cột" là hỏi đúng điểm này.</li>
<li><strong>Cảnh báo bảo mật</strong>: auto-instrumentation gắn baggage vào <em>mọi</em> request đi ra, kể cả gọi API bên thứ ba — không đặt PII, token hay secret vào baggage.</li>
<li><strong>Span link</strong> nối các span không có quan hệ cha–con. Một span chỉ có <em>một</em> cha, nên consumer gom 100 message của 100 trace khác nhau thì không thể lấy cả 100 làm cha — đúng cách là tạo span xử lý batch với <strong>100 link</strong> trỏ về từng producer.</li>
<li>Nối trace qua hàng đợi: producer nhét <code>traceparent</code> vào application properties của message, consumer trích ra làm parent (một message) hoặc làm link (batch). Không làm bước này thì trace đứt đúng ở chỗ hàng đợi — nhìn Application Insights thấy hai trace rời nhau là dấu hiệu.</li>
<li><em>Nguồn: <a href="https://learn.microsoft.com/kusto/query/join-operator" target="_blank" rel="noopener">Kusto — join operator</a> (mặc định <code>innerunique</code>, quy tắc bảng nhỏ bên trái) và <a href="https://opentelemetry.io/docs/concepts/signals/baggage/" target="_blank" rel="noopener">OpenTelemetry — Baggage</a>, đối chiếu ngày 18/09/2026.</em></li></ul>
<h3 id="04-security-monitoring/khoa-otel-spankind">3.7 SpanKind quyết định span vào bảng nào</h3>
<p>Bảng 3.3 mới có server span và client span. Unit liệt kê đủ năm SpanKind, và đây là chỗ đề hỏi "span này hiện ở bảng nào".</p>
<div class="tablewrap"><table><thead><tr><th>SpanKind</th><th>Ý nghĩa</th><th>Bảng Application Insights</th></tr></thead><tbody>
<tr><td><code>SERVER</code></td><td>Request đi vào service</td><td><code>requests</code></td></tr>
<tr><td><code>CONSUMER</code></td><td>Xử lý thao tác bất đồng bộ (nhận message từ queue)</td><td><code>requests</code></td></tr>
<tr><td><code>CLIENT</code></td><td>Gọi ra ngoài (HTTP, DB, LLM API)</td><td><code>dependencies</code></td></tr>
<tr><td><code>PRODUCER</code></td><td>Khởi tạo thao tác bất đồng bộ (gửi message)</td><td><code>dependencies</code></td></tr>
<tr><td><code>INTERNAL</code> (<strong>mặc định</strong> khi không ghi <code>kind</code>)</td><td>Việc nội bộ, không vượt ranh giới process</td><td><code>dependencies</code></td></tr>
</tbody></table></div>
<div class="tablewrap"><table><thead><tr><th>OpenTelemetry (Python)</th><th>Application Insights</th></tr></thead><tbody>
<tr><td><code>trace.get_tracer("name")</code></td><td>Không có tương đương (là nguồn instrumentation)</td></tr>
<tr><td><code>span.get_span_context().trace_id</code></td><td><strong>Operation ID</strong> (<code>operation_Id</code>)</td></tr>
<tr><td><code>span.get_span_context().span_id</code></td><td>ID hoặc Operation Parent ID</td></tr>
<tr><td><code>span.set_attribute()</code></td><td><code>customDimensions</code></td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code>from opentelemetry import trace
from opentelemetry.trace import SpanKind, Status, StatusCode

tracer = trace.get_tracer("embedding-service")   # gọi SAU configure_azure_monitor(), không cần đăng ký gì thêm

with tracer.start_as_current_span("CallLlmApi", kind=SpanKind.CLIENT) as span:   # vào dependencies
    span.set_attribute("llm.model", "gpt-4o")
    response = call_llm(prompt)

with tracer.start_as_current_span("GenerateEmbedding") as span:   # INTERNAL, cũng vào dependencies
    try:
        embedding = generate_embedding(text)
        span.set_status(Status(StatusCode.OK))
    except Exception as ex:
        span.record_exception(ex)
        span.set_status(Status(StatusCode.ERROR, "Embedding generation failed"))
        raise</code></pre>
<ul><li>Exception <strong>lọt ra khỏi</strong> khối <code>start_as_current_span</code> được SDK Python <strong>tự ghi lên span và tự đặt status ERROR</strong>. Chỉ cần gọi <code>record_exception</code>/<code>set_status</code> bằng tay khi tự bắt exception hoặc muốn ghi mô tả lỗi riêng.</li>
<li>Span lồng nhau tự nhận cha nhờ context variable của Python. Không cần truyền đối tượng span cha.</li>
<li><strong>Resource attribute</strong> (<code>service.name</code>...) mô tả cả service, đặt một lần lúc startup. <strong>Span attribute</strong> mô tả một thao tác. Đặt tên attribute theo namespace (<code>embedding.model</code>, <code>search.result_count</code>), tránh tên chung chung như <code>value</code>, <code>data</code>. Giá trị attribute chỉ là string, số hoặc boolean.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> span tự tạo cho một bước nghiệp vụ (không ghi <code>kind</code>) <strong>không</strong> nằm ở <code>requests</code> mà ở <code>dependencies</code>, vì mặc định là INTERNAL. Consumer đọc message từ Service Bus thì nằm ở <code>requests</code>, không phải <code>dependencies</code>.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/instrument-app-opentelemetry/4-configure-spans-traces" target="_blank" rel="noopener">Instrument an app with OpenTelemetry — Configure spans and traces</a> và <a href="https://learn.microsoft.com/en-us/training/modules/instrument-app-opentelemetry/2-explore-opentelemetry-observability" target="_blank" rel="noopener">Explore OpenTelemetry and its role in observability</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="04-security-monitoring/khoa-otel-distro-cau-hinh">3.8 Distro: autoinstrumentation hay SDK, thứ tự ưu tiên connection string, cloud role name</h3>
<p>Mục này trả lời ba câu hay gặp: khi nào chọn autoinstrumentation, connection string đặt ở hai nơi thì nơi nào thắng, và tên node trên Application Map được ghép từ đâu.</p>
<div class="tablewrap"><table><thead><tr><th></th><th>Autoinstrumentation</th><th>Manual (SDK, Azure Monitor OpenTelemetry Distro)</th></tr></thead><tbody>
<tr><td>Cách bật</td><td>Bằng cấu hình, không sửa code (App Service, Functions, VM)</td><td>Nhúng SDK trong code, gọi <code>configure_azure_monitor()</code></td></tr>
<tr><td>Kiểm soát</td><td>Hạn chế, khó làm giàu bằng dữ liệu riêng</td><td>Đầy đủ: custom span, attribute, sampling</td></tr>
<tr><td>Hợp với</td><td>Cần observability cơ bản thật nhanh</td><td><strong>App AI cần đo thời gian embedding, số token LLM</strong> (lựa chọn được ưu tiên)</td></tr>
</tbody></table></div>
<ul><li><code>configure_azure_monitor()</code> gọi <strong>một lần</strong> lúc startup, dựng cả tracer provider, meter provider và logger provider.</li>
<li><strong>Tự thu thập (Python)</strong>: <code>requests</code>, <code>urllib</code>/<code>urllib3</code> (client span), Flask/Django/FastAPI (server span), <code>psycopg2</code> (PostgreSQL), Azure SDK (Storage, queue, Key Vault...). Module <code>logging</code> chuẩn cũng được nối sẵn: log ghi bằng <code>logging.getLogger()</code> tự chảy vào bảng <code>traces</code>.</li>
<li><strong>Connection string</strong> chứa ingestion endpoint và instrumentation key, mỗi tài nguyên Application Insights có một cái riêng. Khuyến nghị cho production: biến môi trường <code>APPLICATIONINSIGHTS_CONNECTION_STRING</code>. Truyền trong code là cách kém nhất. Đặt ở cả hai nơi thì <strong>code thắng biến môi trường</strong>.</li></ul>
<pre><button class="copybtn">copy</button><code>from azure.monitor.opentelemetry import configure_azure_monitor
from opentelemetry.sdk.resources import Resource

configure_azure_monitor(resource=Resource.create({
    "service.name": "embedding-service",
    "service.namespace": "rag-pipeline",          # cloud role name = "rag-pipeline.embedding-service"
    "service.instance.id": "embedding-instance-1" # phân biệt các instance của cùng service
}))

# Hoặc không sửa code:
# export OTEL_SERVICE_NAME="embedding-service"
# export OTEL_RESOURCE_ATTRIBUTES="service.namespace=rag-pipeline,service.instance.id=embedding-instance-1"</code></pre>
<ul><li><strong>Cloud role name = <code>service.namespace</code> + "." + <code>service.name</code></strong>. Không đặt namespace thì chỉ lấy <code>service.name</code>. Nhiều service gửi chung một tài nguyên Application Insights mà không đặt tên riêng thì Application Map gộp tất cả thành <strong>một node</strong>.</li>
<li>OpenTelemetry do CNCF quản lý và trung lập với nhà cung cấp: instrument một lần, export tới Azure Monitor, Jaeger, Prometheus hay Grafana chỉ bằng cách đổi exporter. Bốn thành phần của nó: API, SDK (batching, sampling, resource detection), instrumentation library và exporter.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> đề hỏi cách đặt connection string cho production thì đáp án là <em>biến môi trường</em>, không phải hard-code và không phải file <code>config.py</code> deploy kèm code. Đề hỏi "Application Map chỉ thấy một node dù có bốn service" thì lỗi là thiếu <code>service.name</code> riêng cho từng service.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/instrument-app-opentelemetry/3-add-opentelemetry-sdk" target="_blank" rel="noopener">Instrument an app with OpenTelemetry — Add the OpenTelemetry SDK to an application</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="04-security-monitoring/khoa-otel-sampling-offline">3.9 Sampling của distro, offline storage 48 giờ, direct export và Collector</h3>
<p>Mục 3.2 và 3.4 mới có <code>sampling_ratio</code>. Unit export nêu hai sampler, sampler mặc định, thứ tự ưu tiên giữa code và biến môi trường, và cơ chế exporter giữ telemetry khi mất mạng.</p>
<div class="tablewrap"><table><thead><tr><th>Sampler</th><th>Trong code</th><th>Biến môi trường</th></tr></thead><tbody>
<tr><td><strong>Fixed-percentage</strong>: giữ một tỷ lệ trace cố định (0.0–1.0)</td><td><code>configure_azure_monitor(sampling_ratio=0.1)</code></td><td><code>OTEL_TRACES_SAMPLER=microsoft.fixed_percentage</code><br><code>OTEL_TRACES_SAMPLER_ARG=0.1</code></td></tr>
<tr><td><strong>Rate-limited</strong>: giới hạn số trace mỗi giây</td><td><code>configure_azure_monitor(traces_per_second=1.5)</code></td><td><code>OTEL_TRACES_SAMPLER=microsoft.rate_limited</code><br><code>OTEL_TRACES_SAMPLER_ARG=1.5</code></td></tr>
</tbody></table></div>
<ul><li>Có cả tham số trong code lẫn biến môi trường thì <strong>biến môi trường thắng</strong> (ngược với connection string, nơi code thắng). Không cấu hình sampler nào thì distro Python dùng <strong><code>RateLimitedSampler</code></strong>.</li>
<li>Tỷ lệ càng thấp thì càng rẻ, nhưng số liệu tổng hợp ở pane Performance và Failures càng kém chính xác. Sampler gắn tỷ lệ vào span để Application Insights nhân bù, nhưng ít điểm dữ liệu thì bù cũng kém chính xác. Unit gợi ý <strong>bắt đầu ở 5% (0.05)</strong> rồi chỉnh theo độ chính xác thấy được.</li>
<li>Sampling <strong>chỉ áp dụng cho trace (span)</strong>. <strong>Metric không bao giờ bị sample.</strong> Log thuộc một trace không được chọn <strong>bị bỏ theo mặc định</strong>, có thể tắt hành vi này (opt out trace-based sampling cho log).</li>
<li><strong>Offline storage</strong>: mất kết nối tới endpoint ingestion thì exporter cache telemetry xuống đĩa và <strong>retry tới 48 giờ</strong>. Thư mục mặc định nằm dưới temp của hệ thống (<code>&lt;tempfile.gettempdir()&gt;/Microsoft-AzureMonitor-&lt;hash&gt;/opentelemetry-python-&lt;ikey&gt;</code>), đổi bằng <code>storage_directory="/var/telemetry/rag-pipeline"</code>. Tắt bằng <code>disable_offline_storage=True</code> (không khuyến nghị cho production). Khi quá tải, exporter có thể bỏ bớt và ưu tiên sự kiện mới hơn sự kiện cũ.</li>
<li><strong>Direct export</strong> (mặc định của distro): app gửi thẳng tới endpoint ingestion, chạy trong cùng process, không cần hạ tầng thêm. <strong>OpenTelemetry Collector</strong>: một process riêng nhận telemetry rồi xử lý và chuyển tiếp. Đổi lấy độ phức tạp vận hành, bạn được sampling tập trung, biến đổi dữ liệu và gửi tới nhiều backend.</li>
<li><strong>Kiểm tra dữ liệu đã tới</strong>: SDK gom lô trước khi gửi và ingestion có trễ vài phút, nên không thấy ngay là bình thường. Xem pane Overview, hoặc <strong>Live Metrics</strong> (bật sẵn trong distro, đi đường riêng không qua pipeline ingestion, gần như tức thời), hoặc chạy KQL <code>requests | where timestamp &gt; ago(1h) | project timestamp, name, duration, success, cloud_RoleName</code>. Thấy request của nhiều service là context propagation đang hoạt động.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> đặt <code>sampling_ratio=0.5</code> trong code nhưng hệ thống vẫn giữ 10% thì nhiều khả năng có <code>OTEL_TRACES_SAMPLER_ARG=0.1</code> trong môi trường, vì biến môi trường thắng. <code>OTEL_TRACES_SAMPLER_ARG=1.5</code> chỉ hợp lệ khi sampler là <code>microsoft.rate_limited</code> (1,5 trace/giây), không phải tỷ lệ 150%.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/instrument-app-opentelemetry/5-export-telemetry-azure-monitor" target="_blank" rel="noopener">Instrument an app with OpenTelemetry — Export telemetry to Azure Monitor</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="04-security-monitoring/khoa-otel-debug-ai">3.10 Debug bằng trace: Application Map, waterfall, pane Failures/Performance và bốn mẫu lỗi AI</h3>
<p>Mục này là quy trình điều tra theo unit: dùng công cụ trực quan để khoanh vùng trước, rồi chuyển sang KQL để đào sâu. Kèm theo là bốn mẫu lỗi đặc trưng của pipeline AI và attribute nên gắn để nhận ra từng mẫu.</p>
<div class="tablewrap"><table><thead><tr><th>Công cụ</th><th>Cho biết gì</th></tr></thead><tbody>
<tr><td><strong>Application Map</strong></td><td>Mỗi node là một cloud role (<code>service.name</code>), mỗi cạnh là một đường gọi giữa hai service. Trên node và cạnh có thời gian phản hồi trung bình, số lượng gọi và tỷ lệ lỗi. Node nào chậm hay lỗi nhiều là thấy ngay.</td></tr>
<tr><td><strong>End-to-end transaction details</strong></td><td>Biểu đồ <strong>waterfall</strong> của một trace: span gốc ở trên, span con thụt vào trong. Thao tác tuần tự nằm nối tiếp nhau, thao tác song song nằm chồng nhau. Chọn một span sẽ thấy attribute và exception (type, message, stack trace). Mở được từ pane Performance, pane Failures hoặc từ node trên Application Map.</td></tr>
<tr><td><strong>Failures</strong> (<em>Investigate → Failures</em>)</td><td>Gom thao tác lỗi theo loại, mỗi thao tác hiện <strong>top 3</strong> response code, exception type và dependency lỗi. Từ đây mở được sample, rồi tới transaction details.</td></tr>
<tr><td><strong>Performance</strong> (<em>Investigate → Performance</em>)</td><td>Phân bố thời gian phản hồi theo thao tác. Dễ thấy phân bố <strong>hai đỉnh</strong>: phần lớn nhanh, một nhóm nhỏ luôn chậm.</td></tr>
</tbody></table></div>
<div class="tablewrap"><table><thead><tr><th>Mẫu lỗi AI</th><th>Dấu hiệu trong trace</th><th>Attribute nên gắn</th></tr></thead><tbody>
<tr><td>Embedding timeout</td><td>Dependency span của bước embedding vượt ngưỡng timeout hoặc có status lỗi</td><td><code>embedding.model</code> (lỗi riêng một model hay tất cả)</td></tr>
<tr><td>Vector search cold start</td><td>Thời lượng search dao động mạnh. Một cụm span chậm xuất hiện ngay sau khoảng không có truy vấn nào.</td><td><code>search.result_count</code> (phân biệt cold start với truy vấn trả về nhiều kết quả)</td></tr>
<tr><td>LLM rate limiting</td><td>Dependency tới LLM có <strong>429</strong> hoặc thời lượng dài bất thường do chờ retry</td><td><code>llm.prompt_tokens</code>, <code>llm.response_tokens</code></td></tr>
<tr><td>Context window overflow</td><td>API trả lỗi vì prompt vượt context window của model</td><td><code>llm.prompt_tokens</code> trên span dựng prompt (thấy trước khi sắp chạm trần)</td></tr>
</tbody></table></div>
<pre><button class="copybtn">copy</button><code>// Hiệu năng embedding theo model, lấy từ span attribute
dependencies
| where name == "GenerateEmbedding"
| extend tokenCount = toint(customDimensions["embedding.token_count"]),
         model = tostring(customDimensions["embedding.model"])
| summarize avg(duration), percentile(duration, 95), avg(tokenCount) by model
| order by avg_duration desc

// Request chậm theo service
requests
| where duration &gt; 3000
| summarize count(), avg(duration) by cloud_RoleName
| order by avg_duration desc</code></pre>
<ul><li>Dùng KQL khi cần join nhiều bảng, tự tổng hợp số liệu, lọc theo dimension mà giao diện có sẵn không cho lọc, hoặc cần dựng tile cho dashboard. Dùng view có sẵn để lấy điểm xuất phát nhanh và xem timeline của một giao dịch.</li>
<li>Cột tổng hợp không đặt tên sẽ được Kusto tự đặt là <code>avg_duration</code>, <code>count_</code>..., và <code>order by</code> phải dùng đúng tên tự sinh đó.</li></ul>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/instrument-app-opentelemetry/6-debug-distributed-flows-trace-data" target="_blank" rel="noopener">Instrument an app with OpenTelemetry — Debug distributed flows with trace data</a> và <a href="https://learn.microsoft.com/en-us/training/modules/analyze-telemetry-logs-metrics/3-explore-logs-errors-performance" target="_blank" rel="noopener">Analyze app telemetry with logs and metrics — Explore logs for errors and performance</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="04-security-monitoring/trien-khai-appinsights">3.11 Triển khai Application Insights + OpenTelemetry trên Azure</h3>
<p>Thứ tự: <strong>Log Analytics workspace → Application Insights workspace-based → lấy connection string → đặt vào app → bật distro trong code</strong>. Mọi dịch vụ gửi chung một workspace thì KQL join được xuyên dịch vụ.</p>
<pre><button class="copybtn">copy</button><code># 1. Workspace + App Insights (resource classic đã ngừng — chỉ còn workspace-based)
az monitor log-analytics workspace create -g rg-ai200 -n law-rag -l eastus --retention-time 30
WS_ID=$(az monitor log-analytics workspace show -g rg-ai200 -n law-rag --query id -o tsv)
az monitor app-insights component create -g rg-ai200 -a ai-rag -l eastus --workspace $WS_ID
CS=$(az monitor app-insights component show -g rg-ai200 -a ai-rag --query connectionString -o tsv)

# 2. Đưa connection string vào từng nơi chạy
az webapp config appsettings set   -g rg-ai200 -n rag-web  --settings APPLICATIONINSIGHTS_CONNECTION_STRING="$CS"
az functionapp config appsettings set -g rg-ai200 -n func-rag --settings APPLICATIONINSIGHTS_CONNECTION_STRING="$CS"
az containerapp update -g rg-ai200 -n rag-api --set-env-vars APPLICATIONINSIGHTS_CONNECTION_STRING="$CS"

# 3. Code: pip install azure-monitor-opentelemetry
#    from azure.monitor.opentelemetry import configure_azure_monitor
#    configure_azure_monitor()   # tự đọc APPLICATIONINSIGHTS_CONNECTION_STRING</code></pre>
<ul><li><strong>Tên dịch vụ trên Application Map</strong> lấy từ <code>OTEL_SERVICE_NAME</code> (cloud_RoleName) — đặt biến này cho mỗi app, không thì các node trùng tên khó đọc.</li>
<li><strong>Ingestion bằng Entra</strong>: tắt local auth trên App Insights, cấp role <em>Monitoring Metrics Publisher</em> cho identity của app và truyền <code>credential=</code> vào <code>configure_azure_monitor</code>.</li>
<li><strong>Kiểm tra</strong>: Live Metrics hiện số liệu gần như tức thì khi app chạy; <code>requests | take 10</code> trong Logs (bảng Log Analytics tương ứng là <code>AppRequests</code>).</li>
<li><strong>Bẫy</strong>: connection string không phải secret theo nghĩa quyền đọc dữ liệu, nhưng ai có nó thì đẩy được telemetry giả — dùng Entra auth khi đề nhấn mạnh "chỉ app hợp lệ được gửi"; instrumentation key đơn lẻ là cách cũ, đáp án mới dùng connection string.</li></ul>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-enable?tabs=python" target="_blank" rel="noopener">Enable Azure Monitor OpenTelemetry</a>, <a href="https://learn.microsoft.com/en-us/azure/azure-monitor/app/azure-ad-authentication" target="_blank" rel="noopener">Microsoft Entra authentication for Application Insights</a> trên Microsoft Learn, đối chiếu ngày 26/09/2026.</em></p>
<hr>
<h2 id="04-security-monitoring/4-kql-kusto-query-language">4. KQL &amp; Log Analytics</h2>
<h3 id="04-security-monitoring/41-cau-truc-toan-tu-cot-loi">4.1 Cấu trúc &amp; toán tử cốt lõi</h3>
<pre><button class="copybtn">copy</button><code>TableName
| where  TimeGenerated &gt; ago(1h)      // lọc — luôn đặt sớm nhất có thể
| extend latencySec = DurationMs / 1000.0
| project TimeGenerated, Name, latencySec, ResultCode
| summarize count(), avg(latencySec) by bin(TimeGenerated, 5m), Name
| order by TimeGenerated desc
| take 100</code></pre>
<div class="tablewrap"><table><thead><tr><th>Toán tử</th><th>Công dụng</th></tr></thead><tbody><tr><td><code>where</code></td><td>Lọc dòng</td></tr><tr><td><code>project</code> / <code>project-away</code> / <code>project-rename</code></td><td>Chọn/bỏ/đổi tên cột</td></tr><tr><td><code>extend</code></td><td>Thêm cột tính toán</td></tr><tr><td><code>summarize ... by ...</code></td><td>Gộp nhóm: <code>count()</code>, <code>sum()</code>, <code>avg()</code>, <code>min/max()</code>, <code>dcount()</code>, <code>percentile(x, 95)</code>, <code>make_list()</code></td></tr><tr><td><code>bin(col, 5m)</code></td><td>Chia thời gian thành khoảng (cho biểu đồ)</td></tr><tr><td><code>order by</code> / <code>sort by</code></td><td>Sắp xếp</td></tr><tr><td><code>top N by col</code></td><td>Lấy N dòng đầu</td></tr><tr><td><code>take</code> / <code>limit</code></td><td>Lấy mẫu nhanh</td></tr><tr><td>\`join kind=inner\\</td><td>leftouter\\</td><td>leftanti\`</td><td>Ghép bảng</td></tr><tr><td><code>union</code></td><td>Gộp nhiều bảng</td></tr><tr><td><code>let</code></td><td>Biến/subquery</td></tr><tr><td><code>parse_json()</code>, <code>todynamic()</code>, <code>mv-expand</code></td><td>Xử lý JSON/mảng</td></tr><tr><td>\`render timechart\\</td><td>barchart\\</td><td>piechart\`</td><td>Vẽ biểu đồ</td></tr><tr><td><code>ago()</code>, <code>now()</code>, <code>startofday()</code>, <code>datetime_diff()</code></td><td>Thời gian</td></tr><tr><td><code>search</code>, <code>has</code>, <code>contains</code>, <code>startswith</code>, <code>matches regex</code></td><td>Tìm chuỗi (<code>has</code> nhanh hơn <code>contains</code>)</td></tr></tbody></table></div>
<h3 id="04-security-monitoring/42-bo-truy-van-hay-dung-khi-troubleshoot-nen-thuoc">4.2 Bộ truy vấn hay dùng khi troubleshoot (nên thuộc)</h3>
<pre><button class="copybtn">copy</button><code>// 1. Tỷ lệ lỗi và P95 latency theo endpoint trong 24h
AppRequests
| where TimeGenerated &gt; ago(24h)
| summarize total = count(),
            failed = countif(Success == false),
            p95 = percentile(DurationMs, 95)
        by Name
| extend errorRate = round(100.0 * failed / total, 2)
| order by errorRate desc

// 2. Dependency chậm nhất (vd Cosmos DB, Azure OpenAI)
AppDependencies
| where TimeGenerated &gt; ago(1h)
| summarize calls = count(), avgMs = avg(DurationMs), p99 = percentile(DurationMs, 99)
        by Type, Target, Name
| order by p99 desc | take 20

// 3. Lần theo một trace end-to-end (distributed tracing)
let opId = "3f2b...";
union AppRequests, AppDependencies, AppTraces, AppExceptions
| where OperationId == opId
| project TimeGenerated, itemType, Name = coalesce(Name, Message), DurationMs, AppRoleName, Id, ParentId
| order by TimeGenerated asc

// 4. Top exception + số user bị ảnh hưởng
AppExceptions
| where TimeGenerated &gt; ago(6h)
| summarize occurrences = count(), users = dcount(UserId) by ProblemId, OuterMessage
| top 10 by occurrences

// 5. Cosmos DB RU tiêu tốn (custom dimension)
AppDependencies
| where Type == "Azure DocumentDB"
| extend ru = todouble(Properties["requestCharge"])
| summarize totalRU = sum(ru), avgRU = avg(ru) by Name, bin(TimeGenerated, 15m)
| render timechart

// 6. Log container trong AKS
ContainerLogV2
| where TimeGenerated &gt; ago(30m) and PodName startswith "rag-api"
| where LogMessage has "ERROR"
| project TimeGenerated, PodName, LogMessage
| take 100

// 7. Log Container Apps
ContainerAppConsoleLogs_CL
| where ContainerAppName_s == "rag-api" and Log_s has "Traceback"
| project TimeGenerated, RevisionName_s, ReplicaName_s, Log_s
| order by TimeGenerated desc

// 8. Throttling 429 của Azure OpenAI / Cosmos
AppDependencies
| where ResultCode == "429"
| summarize count() by Target, bin(TimeGenerated, 5m)
| render timechart

// 9. Chi phí token LLM theo ngày (từ custom attribute)
AppDependencies
| extend inTok = toint(Properties["gen_ai.usage.input_tokens"]),
         outTok = toint(Properties["gen_ai.usage.output_tokens"])
| summarize sum(inTok), sum(outTok) by bin(TimeGenerated, 1d)</code></pre>
<h3 id="04-security-monitoring/4d1-kql-join">4.3 join mặc định không phải inner join</h3>
<p>Viết <code>join (T) on X</code> mà không ghi <code>kind=</code> thì Kusto chạy <strong><code>innerunique</code></strong>: nó <em>khử trùng lặp bảng bên trái theo khoá</em> rồi mới join. Cùng một truy vấn, <code>kind=inner</code> trả nhiều dòng hơn khi khoá bên trái lặp — đây là nguyên nhân kinh điển của "đếm ra thiếu" khi nối <code>requests</code> với <code>dependencies</code>.</p>
<table><thead><tr><th><code>kind</code></th><th>Trả về</th><th>Dùng khi</th></tr></thead><tbody>
<tr><td><code>innerunique</code> (mặc định)</td><td>Cột của cả hai bảng; dòng trái đã khử trùng lặp và có khớp</td><td>Tra cứu một-nhiều, không cần đếm</td></tr>
<tr><td><code>inner</code></td><td>Chỉ các dòng khớp của cả hai bảng, không khử trùng lặp</td><td>Khi số dòng phải đúng</td></tr>
<tr><td><code>leftouter</code></td><td>Mọi dòng trái, cột phải null nếu không khớp</td><td>Giữ nguyên tập trái để tính tỷ lệ</td></tr>
<tr><td><code>leftsemi</code> / <code>rightsemi</code></td><td>Chỉ cột của bảng trái/phải, các dòng có khớp</td><td>Lọc theo danh sách mà không muốn kéo thêm cột</td></tr>
<tr><td><code>leftanti</code> / <code>rightanti</code></td><td>Các dòng <em>không</em> khớp</td><td>"Request nào không có exception", "user nào chưa từng gọi API"</td></tr>
<tr><td><code>fullouter</code></td><td>Mọi dòng của cả hai, ô thiếu là null</td><td>Đối chiếu hai nguồn</td></tr>
</tbody></table>
<pre><button class="copybtn">copy</button><code>// Request chậm là vì dependency nào — ép kind=inner để không mất dòng
requests
| where timestamp &gt; ago(1h) and duration &gt; 2000
| join kind=inner (
    dependencies
    | where timestamp &gt; ago(1h)
    | project operation_Id, target, depDuration = duration
  ) on operation_Id
| summarize calls = count(), p95 = percentile(depDuration, 95) by target
| order by p95 desc

// Request không sinh exception nào
requests
| where timestamp &gt; ago(1h)
| join kind=leftanti (exceptions | where timestamp &gt; ago(1h)) on operation_Id
</code></pre>
<ul><li><strong>Bảng nhỏ đặt bên trái</strong> — quy tắc hiệu năng chính thức của Kusto. Trái rất nhỏ thì thêm <code>hint.strategy=broadcast</code>; hai bảng đều lớn và khoá phân biệt cao thì <code>hint.shufflekey=operation_Id</code>. Hint chỉ đổi kế hoạch thực thi, không đổi ngữ nghĩa.</li>
<li>KQL <strong>không có cross join</strong>: thêm cột giả rồi nối — <code>X | extend k=1 | join kind=inner (Y | extend k=1) on k</code>.</li>
<li>Phân biệt với <code>union</code>: <code>join</code> ghép theo <em>cột</em> (cần khoá chung), <code>union</code> chồng theo <em>dòng</em> (hợp schema) — "gộp log của nhiều bảng rồi đếm" là <code>union</code>, không phải <code>join</code>.</li></ul>
<h3 id="04-security-monitoring/4f-kql-nang-cao">4.4 KQL nâng cao — <code>let</code>, <code>materialize()</code>, <code>datatable</code>, <code>externaldata</code></h3>
<ul><li><code>let</code> chỉ là <strong>bí danh</strong>, không phải biến đã tính: tham chiếu nó ba lần là Kusto tính lại ba lần. Với một biểu thức nặng (summarize trên hàng chục triệu dòng) đó là ba lần quét.</li>
<li><code>materialize()</code> tính <strong>một lần</strong> và giữ kết quả trong suốt truy vấn. Hai tình huống dùng: (1) biểu thức nặng được dùng lại nhiều lần; (2) biểu thức <em>không xác định</em> như <code>rand()</code> hay <code>dcount()</code> mà cả truy vấn phải nhìn thấy cùng một giá trị.</li>
<li><strong>Giới hạn phải nhớ: cache 5 GB</strong>, tính trên mỗi node và dùng chung cho mọi truy vấn đang chạy đồng thời — vượt là truy vấn <em>abort</em> kèm lỗi.</li>
<li>Chỉ dùng được trong <code>let</code> có đặt tên cho kết quả.</li>
<li>Kỹ thuật quan trọng: <strong>đẩy mọi filter và <code>project</code> vào trong <code>materialize()</code></strong> để phần được cache nhỏ nhất có thể. Hai nhánh có filter khác nhau thì gộp bằng <code>or</code> ở trong, rồi vẫn giữ filter riêng ở mỗi nhánh để không đổi ngữ nghĩa.</li>
<li><code>hint.materialized</code> của toán tử <code>as</code> và <code>partition</code> dùng <em>chung</em> một cache với <code>materialize()</code>.</li>
<li>Cảnh báo của tài liệu: materialize có thể làm tăng bộ nhớ mà không nhanh hơn — đo trước và sau rồi hãy giữ.</li></ul>
<pre><button class="copybtn">copy</button><code>// Tính một lần, dùng hai lần: tỷ lệ lỗi theo endpoint
let base = materialize(
    requests
    | where timestamp &gt; ago(24h)
    | project name, success, duration);       // project ngay trong materialize
base
| summarize total = count() by name
| join kind=inner (base | where success == false | summarize fails = count() by name) on name
| extend errorRate = round(100.0 * fails / total, 2)
| order by errorRate desc

// Bảng tra cứu hằng, không cần bảng thật
let sevName = datatable(sev:int, label:string)[0,"verbose", 1,"info", 2,"warning", 3,"error"];
traces | lookup kind=leftouter sevName on $left.severityLevel == $right.sev

// Bảng tra cứu nằm ngoài, đọc từ một URL
let owners = externaldata(service:string, team:string)
    [@"https://example.blob.core.windows.net/meta/owners.csv"] with (format="csv");
exceptions | join kind=leftouter owners on $left.cloud_RoleName == $right.service
</code></pre>
<ul><li><code>datatable</code> dựng bảng hằng ngay trong truy vấn — hợp cho bảng ánh xạ nhỏ (mã lỗi → tên, tier → SLA) mà không phải tạo bảng thật.</li>
<li><code>externaldata</code> đọc bảng tra cứu từ một URL (CSV/JSON trên blob) — dùng khi bảng ánh xạ do đội khác quản lý.</li>
<li><em>Nguồn: <a href="https://learn.microsoft.com/kusto/query/materialize-function" target="_blank" rel="noopener">Kusto — materialize()</a>, đối chiếu ngày 18/09/2026.</em></li></ul>
<h3 id="04-security-monitoring/49-bo-truy-van-tinh-huong-cookbook">4.5 Bộ truy vấn tình huống — cookbook</h3>
<p>Mỗi tình huống vận hành một truy vấn mẫu — đề hay cho một yêu cầu bằng lời và bốn câu KQL chỉ khác nhau ở toán tử.</p>
<p><strong>1) Tỷ lệ lỗi theo thời gian</strong> — "dịch vụ có đang lỗi tăng dần không?"</p>
<pre><button class="copybtn">copy</button><code>requests
| where timestamp &gt; ago(1h)
| summarize total = count(), failed = countif(success == false) by bin(timestamp, 5m)
| extend failRate = round(100.0 * failed / total, 2)
| render timechart</code></pre>
<p><strong>2) Độ trễ P95 của dependency</strong> — "Cosmos/PostgreSQL chậm hay app chậm?" (percentile, không dùng avg vì outlier kéo lệch)</p>
<pre><button class="copybtn">copy</button><code>dependencies
| where timestamp &gt; ago(1h) and type in ("Azure DocumentDB", "postgresql")
| summarize p50 = percentile(duration, 50), p95 = percentile(duration, 95) by target
| order by p95 desc</code></pre>
<p><strong>3) Exception nhiều nhất theo operation</strong> — khoanh vùng endpoint gây lỗi</p>
<pre><button class="copybtn">copy</button><code>exceptions
| where timestamp &gt; ago(24h)
| summarize n = count() by operation_Name, type
| top 10 by n</code></pre>
<p><strong>4) Lần theo một request xuyên dịch vụ</strong> — mọi bản ghi cùng <code>operation_Id</code> là một trace phân tán (đúng cái OpenTelemetry propagate)</p>
<pre><button class="copybtn">copy</button><code>union requests, dependencies, traces, exceptions
| where operation_Id == "&lt;id lấy từ request lỗi&gt;"
| project timestamp, itemType, name, duration, resultCode = tostring(customDimensions.ResultCode)
| order by timestamp asc</code></pre>
<p><strong>5) Log console của Container Apps</strong> — lọc theo revision để so bản mới/cũ khi traffic splitting</p>
<pre><button class="copybtn">copy</button><code>ContainerAppConsoleLogs_CL
| where TimeGenerated &gt; ago(30m) and ContainerAppName_s == "api"
| where Log_s has "ERROR"
| summarize n = count() by RevisionName_s, bin(TimeGenerated, 5m)</code></pre>
<p><strong>6) Truy vấn làm điều kiện alert</strong> — trả về dòng nào là bắn cảnh báo (log search alert)</p>
<pre><button class="copybtn">copy</button><code>requests
| where timestamp &gt; ago(5m)
| summarize failRate = 100.0 * countif(success == false) / count()
| where failRate &gt; 5</code></pre>
<p>Quy tắc đọc nhanh khi làm đề: <code>where</code> đặt sớm nhất (giảm dữ liệu quét) → <code>summarize ... by bin()</code> cho chuỗi thời gian → <code>percentile</code> cho độ trễ → <code>union + operation_Id</code> cho trace xuyên dịch vụ.</p>
<h3 id="04-security-monitoring/khoa-kql-itemcount-scope">4.6 KQL khi có sampling: <code>sum(itemCount)</code>, phạm vi truy vấn và các cột chung</h3>
<p>Các truy vấn ở mục 4.2 và 4.5 đếm bằng <code>count()</code>. Unit KQL nhấn mạnh rằng khi sampling đang bật, <code>count()</code> đếm <em>bản ghi được giữ</em> chứ không phải số sự kiện thật. Đây là câu hỏi có trong bài đánh giá của module.</p>
<pre><button class="copybtn">copy</button><code>// Đếm đúng khi sampling bật: mỗi bản ghi được giữ đại diện cho itemCount sự kiện thật
exceptions
| where timestamp &gt; ago(24h)
| summarize exceptionCount = sum(itemCount) by bin(timestamp, 1h), type
| render timechart

exceptions
| where timestamp &gt; ago(24h)
| summarize exceptionCount = sum(itemCount) by type, operation_Name
| top 10 by exceptionCount desc</code></pre>
<ul><li><strong>Phạm vi truy vấn quyết định tên bảng</strong>: mở Logs từ tài nguyên Application Insights thì dùng <code>requests</code>, <code>exceptions</code>, <code>dependencies</code> (cột <code>timestamp</code>, <code>operation_Id</code>...). Truy vấn thẳng trên Log Analytics workspace thì dùng <code>AppRequests</code>, <code>AppExceptions</code>, <code>AppDependencies</code>.</li>
<li>Bảng ngoài những bảng đã có ở 3.3: <strong><code>customEvents</code></strong> (sự kiện nghiệp vụ tự track, ví dụ "document classified"), <strong><code>customMetrics</code></strong>, <strong><code>performanceCounters</code></strong> (CPU, memory, I/O). Bảng <code>exceptions</code> chứa cả exception đã được xử lý lẫn exception không được xử lý.</li>
<li><strong>Cột chung</strong> của mọi bảng: <code>timestamp</code>, <code>operation_Id</code> (nối một trace phân tán), <code>cloud_RoleName</code> (service nào sinh ra bản ghi), <code>customDimensions</code> (túi thuộc tính động), <strong><code>itemCount</code></strong> (một bản ghi đã sample đại diện cho bao nhiêu sự kiện).</li>
<li><code>dcount()</code> là <em>ước lượng</em> số giá trị khác nhau (thuật toán xác suất). Cần số chính xác trên tập nhỏ thì dùng <code>count_distinct()</code>, đổi lại tốn tài nguyên hơn khi dữ liệu lớn.</li>
<li><code>has</code> dùng term index nên nhanh. <code>contains</code> tìm chuỗi con, không dùng index nên chậm trên dữ liệu lớn. <code>take</code> trả N dòng <em>bất kỳ</em>, dùng để xem nhanh hình dạng dữ liệu. <code>top N by</code> trả N dòng đầu sau khi sắp xếp.</li>
<li><code>percentiles(duration, 50, 95, 99)</code> sinh ra các cột <code>percentile_duration_50</code>, <code>percentile_duration_95</code>... và phải gọi đúng tên đó: <code>order by percentile_duration_95 desc</code>.</li>
<li>Join hai bảng có cột trùng tên (<code>timestamp</code>, <code>name</code>, <code>duration</code>, <code>cloud_RoleName</code>) thì Kusto <strong>thêm hậu tố <code>1</code></strong> cho cột của bảng bên phải (<code>name1</code>, <code>duration1</code>). Cách gọn nhất là <strong>đổi tên ngay trong subquery</strong> trước khi join:</li></ul>
<pre><button class="copybtn">copy</button><code>exceptions
| where timestamp &gt; ago(24h)
| join kind=inner (
    requests
    | project requestName = name, requestDuration = duration, operation_Id, requestRoleName = cloud_RoleName
) on operation_Id
| project timestamp, exceptionType = type, exceptionMessage = outerMessage,
          requestName, requestDuration, cloud_RoleName = requestRoleName
| top 20 by timestamp desc</code></pre>
<ul><li>Đọc <code>resultCode</code> của dependency lỗi: <strong>429</strong> là bị rate limit (chỉnh throughput hoặc retry policy), <strong>500</strong> là lỗi phía dịch vụ đích, <strong>timeout không có result code</strong> là lỗi mạng hoặc dịch vụ đang quá tải.</li>
<li><code>render</code>: <code>timechart</code> (cần một cột datetime), <code>barchart</code>/<code>columnchart</code> (so sánh giữa các nhóm), <code>piechart</code> (tỷ trọng), <code>areachart</code>. Để <code>render</code> ngay trong truy vấn thì khi ghim lên dashboard hoặc chia sẻ, kiểu biểu đồ được giữ nguyên.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> đề nói rõ "sampling đang bật, cần tổng số exception chính xác" thì đáp án là <code>sum(itemCount)</code>. <code>count()</code> đếm thiếu, <code>dcount(type)</code> đếm số loại exception chứ không phải số exception.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/analyze-telemetry-logs-metrics/2-write-basic-kql-queries" target="_blank" rel="noopener">Analyze app telemetry with logs and metrics — Write basic KQL queries</a> và <a href="https://learn.microsoft.com/en-us/training/modules/analyze-telemetry-logs-metrics/3-explore-logs-errors-performance" target="_blank" rel="noopener">Explore logs for errors and performance</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<hr>
<h2 id="04-security-monitoring/4h-alert-action-group-availability-workbook">5. Từ tín hiệu tới người trực: alert rule, action group, availability test, workbook</h2>
<p>KQL cho biết hệ thống đang ra sao, nhưng không ai ngồi nhìn màn hình cả ngày. Phần này là quãng đường từ một truy vấn tới cái điện thoại rung lúc 2 giờ sáng — và ngược lại, làm sao để nó <em>không</em> rung vô ích.</p>
<h3 id="04-security-monitoring/43-alert-chi-phi">5.1 Alert &amp; chi phí — tổng quan</h3>
<ul><li>Tạo <strong>log alert rule</strong> từ query KQL (threshold + tần suất đánh giá) → Action Group (email, webhook, Logic App, Functions).</li><li><strong>Metric alert</strong> rẻ và nhanh hơn log alert cho các chỉ số dựng sẵn (CPU, DeadletteredMessages, 5xx).</li><li>Giảm chi phí ingest: sampling, <code>Basic Logs</code> cho bảng verbose, đặt <strong>retention</strong> hợp lý, dùng <strong>transformation</strong> (DCR) để lọc trước khi ingest.</li><li><strong>Live Metrics</strong>, <strong>Application Map</strong>, <strong>Transaction search</strong>, <strong>Failures/Performance blade</strong> là công cụ chẩn đoán nhanh trong Application Insights.</li></ul>
<h3 id="04-security-monitoring/4h1-chon-loai-alert">5.2 Chọn loại alert rule</h3>
<table><thead><tr><th>Loại</th><th>Chạy trên</th><th>Dùng khi</th><th>Con số phải nhớ</th></tr></thead><tbody>
<tr><td><strong>Metric alert</strong></td><td>metric đã tính sẵn</td><td>chỉ số dựng sẵn: CPU, 5xx, <code>DeadletteredMessages</code>, RU consumed</td><td>5.000 rule/subscription; 10.000 time series mỗi rule; <strong>stateful</strong> mặc định</td></tr>
<tr><td><strong>Log search alert</strong></td><td>truy vấn KQL</td><td>điều kiện cần logic: nối bảng, bóc <code>customDimensions</code>, tính tỷ lệ</td><td>5.000 rule/subscription, trong đó chỉ <strong>100 rule được đặt tần suất 1 phút</strong>; 1.000 rule mỗi resource</td></tr>
<tr><td><strong>Activity log alert</strong></td><td>activity log</td><td>ai đó xoá resource, gán role mới, Service Health/Resource Health</td><td><strong>100 rule/subscription và không xin tăng được</strong>; <strong>stateless</strong></td></tr>
<tr><td><strong>Smart detection</strong></td><td>machine learning</td><td>tự phát hiện tỷ lệ lỗi tăng bất thường</td><td>cần <strong>24 giờ</strong> học hành vi bình thường trước khi hoạt động</td></tr>
<tr><td><strong>Prometheus alert</strong></td><td>PromQL</td><td>metric Prometheus từ AKS</td><td>20 rule mỗi rule group; interval 1 phút – 24 giờ</td></tr>
</tbody></table>
<ul><li><strong>Metric alert rẻ và nhanh hơn log alert</strong> cho cùng một việc: metric đã được tính sẵn, còn log alert bị tính tiền <em>theo tần suất đánh giá</em> — đặt 1 phút thì đắt gấp nhiều lần đặt 15 phút. Tín hiệu nào có sẵn dạng metric thì đừng viết KQL.</li>
<li><strong>Log alert giỏi phát hiện thứ CÓ trong log, dở phát hiện thứ THIẾU.</strong> Log là dữ liệu bán cấu trúc và có độ trễ ingest, nên "30 phút rồi không thấy heartbeat nào" dễ báo nhầm. Việc đó để metric alert (hoặc <em>metric alerts for logs</em>, đẩy log thành metric rồi cảnh báo trên metric).</li>
<li>Log alert đo được <strong>hai thứ</strong>: (1) <em>số dòng</em> trả về — hợp với sự kiện rời rạc như exception; (2) <em>giá trị một cột số</em> — hợp với chỉ số tổng hợp như p95 latency.</li>
<li><strong>Stateful hay stateless</strong> quyết định số lần bị làm phiền. Stateful: bắn một alert khi điều kiện thành true và tự resolve khi hết — tối đa 300 alert mỗi lần đánh giá, tối đa 5.000 alert đang ở trạng thái <em>fired</em>, tần suất tối đa 12 giờ. Stateless: mỗi lần đánh giá thấy điều kiện đúng là bắn tiếp — tối đa 6.000 alert mỗi lần đánh giá. <strong>Activity log alert luôn stateless và không bao giờ tự resolve</strong>, phải tự chuyển sang Acknowledged/Closed bằng tay.</li>
<li>Metric alert nhiều điều kiện: bắn khi <em>mọi</em> điều kiện cùng đúng, và chỉ resolve khi ít nhất một điều kiện sai <strong>ba lần kiểm tra liên tiếp</strong>.</li>
<li>Hai giới hạn hay đụng khi viết log alert: toàn bộ thuộc tính của rule gộp lại <strong>không quá 64 KB</strong>, và kết quả truy vấn Kusto <strong>không quá 20 MB</strong> — truy vấn alert phải <code>summarize</code> chứ đừng trả về log thô.</li>
<li><strong>Dynamic threshold</strong> dùng machine learning tự tính ngưỡng theo lịch sử, thay vì bắt bạn đoán một con số cố định — hợp với chỉ số có chu kỳ ngày/tuần (traffic ban ngày cao hơn ban đêm là bình thường, ngưỡng cứng sẽ báo nhầm mỗi sáng).</li></ul>
<h3 id="04-security-monitoring/4h2-action-group">5.3 Action group — nơi alert biến thành hành động</h3>
<p>Alert rule chỉ quyết định <em>khi nào</em>; action group quyết định <em>ai biết và cái gì chạy</em>. Một action group dùng lại được cho nhiều rule, và <strong>một rule gắn được tối đa 5 action group</strong>. Các action trong nhóm chạy <strong>đồng thời, không theo thứ tự nào</strong> — đừng thiết kế kiểu "webhook chạy trước rồi mới gửi mail".</p>
<table><thead><tr><th>Action</th><th>Số lượng/nhóm</th><th>Rate limit (production)</th></tr></thead><tbody>
<tr><td>Email</td><td>1.000</td><td>tối đa <strong>100 email mỗi giờ</strong> cho mỗi địa chỉ, mỗi region</td></tr>
<tr><td>SMS</td><td>10</td><td><strong>1 tin mỗi 5 phút</strong></td></tr>
<tr><td>Voice</td><td>10</td><td><strong>1 cuộc gọi mỗi 5 phút</strong></td></tr>
<tr><td>Azure app push</td><td>10</td><td>—</td></tr>
<tr><td>Webhook / Secure webhook</td><td>10 mỗi loại</td><td><strong>1.500 lời gọi mỗi phút</strong> trên toàn subscription</td></tr>
<tr><td>Logic App, Function, Runbook, Event Hubs, ITSM</td><td>10 mỗi loại</td><td>không bị rate limit</td></tr>
</tbody></table>
<ul><li>Rate limit còn tính ở tầng trên: <strong>300 thông báo/phút cho mỗi subscription mỗi region</strong>, và <strong>100 thông báo mỗi 5 phút cho mỗi alert rule</strong>. Sự cố lớn làm hàng nghìn alert bắn cùng lúc thì email/SMS bị chặn bớt — đây là lý do kỹ thuật để dùng stateful alert và <em>alert processing rule</em> gom nhóm, chứ không chỉ là chuyện lịch sự.</li>
<li><strong>Chỉ SMS, voice, push và email bị rate limit.</strong> Webhook, Logic App, Function thì không — nên đường dẫn đáng tin cậy nhất khi bão alert là action group → Logic App → Teams, chứ không phải SMS.</li>
<li><strong>Webhook retry</strong>: gọi lỗi thì thử lại tối đa 5 lần với khoảng cách 5 – 20 – 5 – 40 – 5 giây; thất bại hết thì Azure <strong>ngừng gọi endpoint đó trong 15 phút</strong>. Chỉ các mã 408, 429, 503, 504 (và lỗi mạng) mới được thử lại — endpoint trả 500 là mất luôn thông báo đó.</li>
<li><strong>Common alert schema</strong> là payload thống nhất cho mọi loại alert, bật riêng cho từng receiver (<code>useCommonAlertSchema: true</code>). Không bật thì mỗi loại alert gửi một hình dạng JSON khác nhau và webhook phải tự đoán — luôn bật khi đầu nhận là code của bạn.</li>
<li><strong>Webhook vs Secure webhook</strong>: Webhook chỉ có basic auth nhét trong URI; Secure webhook xác thực bằng service principal của Microsoft Entra và <em>không</em> hỗ trợ basic auth. Đề hỏi "gọi API nội bộ có bảo vệ bằng Entra ID" là Secure webhook.</li>
<li>Endpoint mong một schema riêng (ví dụ Microsoft Teams) thì <strong>đừng gọi webhook thẳng</strong> — dùng Logic App để nắn payload.</li>
<li>Action group chọn <strong>Global</strong> (lưu ở ít nhất hai region, chịu được sự cố vùng) hay <strong>Regional</strong> (nằm trong một biên giới địa lý, cho yêu cầu chủ quyền dữ liệu). <em>Service Health alert bắt buộc action group phải là Global.</em></li>
<li>Địa chỉ email mới phải <strong>xác minh bằng mã OTP trong vòng 30 phút</strong> kể từ lúc lưu action group, nếu không sẽ không nhận được gì.</li></ul>
<h3 id="04-security-monitoring/4h3-availability-test">5.4 Availability test — đo từ bên ngoài vào</h3>
<p>Mọi thứ ở trên đo <em>từ bên trong</em> ứng dụng. Availability test làm điều ngược lại: gọi endpoint từ các điểm trên Internet, nên bắt được cả những hỏng hóc mà app không hề biết — DNS sai, certificate hết hạn, firewall chặn nhầm, cả cụm chết.</p>
<div class="warn"><b>Mốc phải nhớ:</b> <strong>URL ping test bị khai tử ngày 30/09/2026</strong> và các test đang tồn tại sẽ <em>bị xoá khỏi tài nguyên</em>, không phải chỉ ngừng chạy. Thay thế là <strong>Standard test</strong>. Chuyển đổi <em>không</em> tự động: tạo Standard test không xoá URL ping test cũ, và <strong>alert rule không được chuyển theo</strong> — phải tự trỏ rule sang test mới rồi mới tắt test cũ. Standard test có tính phí, khác với URL ping test.</div>
<ul><li>Standard test làm được những thứ URL ping test không có: <strong>kiểm tra hiệu lực chứng chỉ TLS/SSL</strong> và cảnh báo trước hạn (<em>proactive lifetime check</em>), chọn HTTP verb, gửi request body, đặt custom header.</li>
<li><strong>Số điểm đo</strong>: tối thiểu khuyến nghị <strong>5 vị trí</strong>, tối đa 16. Ngưỡng cảnh báo nên là <strong>số vị trí trừ 2</strong> (5 vị trí → báo khi 3 nơi cùng thất bại). Đo từ một nơi thì không phân biệt được "web chết" với "đường mạng chỗ đó chập".</li>
<li><strong>Tần suất</strong> mặc định 5 phút mỗi vị trí — 5 phút × 5 vị trí nghĩa là trung bình mỗi phút có một lần kiểm tra. Tần suất tối thiểu là <strong>300 giây</strong>; cần dày hơn thì phải tự dựng cách đo khác.</li>
<li><strong>Bật retry</strong> (khuyến nghị): chỉ báo lỗi khi <em>ba lần liên tiếp</em> thất bại. Tài liệu Microsoft nói khoảng <strong>80% thất bại tự biến mất khi thử lại</strong> — tắt retry là tự chuốc lấy báo động giả.</li>
<li>Giới hạn: <strong>100 test mỗi tài nguyên Application Insights</strong>, 800 test mỗi resource group, đi theo tối đa 10 redirect, phân tích tối đa 15 dependent request.</li>
<li><strong>Content match</strong> so khớp <em>phân biệt hoa thường</em>, chuỗi thuần không wildcard, và <strong>chỉ hỗ trợ ký tự tiếng Anh</strong> — trang tiếng Việt thì chọn chuỗi không dấu mà khớp.</li>
<li>Kết quả nằm ở bảng <code>availabilityResults</code> trong Log Analytics, và hai metric <code>Availability</code> (% thành công) và <code>Test Duration</code>.</li>
<li><strong>Bẫy bảo mật</strong>: dịch vụ availability test dùng <em>dải IP chung</em>, nên mở firewall theo IP là mở cho cả test của người khác. Cách đúng: thêm custom header <code>X-Customer-InstanceId</code> với giá trị <code>ApplicationInsightsAvailability:&lt;định danh riêng&gt;</code> rồi bắt service kiểm tra header đó. Mở cổng thì dùng service tag <code>ApplicationInsightsAvailability</code> thay vì liệt kê IP.</li>
<li>Endpoint hoàn toàn không ra Internet thì availability test <em>không</em> tới được — phải đo một tín hiệu sức khoẻ từ bên trong mạng rồi đặt log/metric alert lên tín hiệu đó.</li>
<li>Nhớ <strong>tắt test hoặc tắt alert rule khi bảo trì có kế hoạch</strong>; thay đổi cấu hình test mất tới 20 phút mới lan tới hết các agent.</li></ul>
<h3 id="04-security-monitoring/4h4-workbook-dashboard">5.5 Workbook, dashboard và báo cáo SLA</h3>
<table><thead><tr><th></th><th>Workbook</th><th>Dashboard</th></tr></thead><tbody>
<tr><td>Hình dạng</td><td>tài liệu có chữ, tham số, nhiều tab</td><td>lưới các ô ghim</td></tr>
<tr><td>Tham số</td><td>có — người xem tự đổi subscription, khoảng thời gian, ngưỡng</td><td>không, mỗi ô cố định</td></tr>
<tr><td>Hợp với</td><td>điều tra sự cố, báo cáo định kỳ, runbook có kèm lời giải thích</td><td>màn hình treo tường, liếc một cái là biết</td></tr>
<tr><td>Nguồn dữ liệu</td><td>trộn được KQL, metric, Azure Resource Graph, JSON tĩnh</td><td>chủ yếu là ô đã ghim sẵn</td></tr>
</tbody></table>
<ul><li>Workbook là thứ trả lời được câu "tại sao", vì nó xen kẽ biểu đồ với <em>chữ</em> giải thích và có tham số để người đọc tự đào tiếp. Dashboard trả lời câu "có đang cháy không".</li>
<li><strong>Downtime &amp; Outages</strong> là workbook dựng sẵn tính SLA cho availability test, mở từ <em>Availability → SLA Report</em> hoặc <em>Workbooks → Downtime &amp; Outages</em>. Tham số quan trọng: <em>Failure Threshold</em> và <em>Outage Window</em> (thông thường: 3 vị trí trong cửa sổ 5 phút), <em>Maintenance Period</em> để loại thời gian bảo trì khỏi con số SLA, và <em>Availability Target %</em>.</li>
<li>Một lần ngừng dịch vụ được tính từ lúc test bắt đầu fail tới lúc pass lại — fail 8:00 và pass lúc 10:00 là <em>một</em> outage kéo dài 2 giờ, không phải 24 lần fail rời rạc.</li>
<li>Truy vấn trong workbook chạy lại được nguyên vẹn trong Log Analytics; workbook cũng ghim được vào dashboard. Người xem cần quyền đọc trên tài nguyên chứa workbook.</li>
<li>Liên kết ngược tới tài nguyên Application Insights để đào sâu <strong>chỉ có với workspace-based Application Insights</strong>.</li>
<li>Giới hạn bên lề hay bị quên: <strong>mỗi tài nguyên chỉ gắn được 5 diagnostic setting</strong>, và một dashboard query trả về tối đa 2.000 bản ghi.</li></ul>
<p><em>Nguồn: <a href="https://learn.microsoft.com/azure/azure-monitor/alerts/alerts-types" target="_blank" rel="noopener">Azure Monitor — Types of alerts</a>, <a href="https://learn.microsoft.com/azure/azure-monitor/alerts/action-groups" target="_blank" rel="noopener">Action groups</a>, <a href="https://learn.microsoft.com/azure/azure-monitor/service-limits" target="_blank" rel="noopener">Azure Monitor service limits</a> và <a href="https://learn.microsoft.com/azure/azure-monitor/app/availability" target="_blank" rel="noopener">Application Insights availability tests</a>, đối chiếu ngày 19/09/2026.</em></p>
<h3 id="04-security-monitoring/khoa-alert-cau-truc-severity">5.6 Cấu trúc alert rule, severity 0–4 và cấu hình log search alert</h3>
<p>Mục 5.2 và 5.3 đã có giới hạn và loại alert. Unit bổ sung bốn thành phần của một rule, thang severity, và cách một câu KQL biến thành điều kiện "số dòng &gt; 0".</p>
<ul><li><strong>Bốn thành phần</strong>: <strong>Scope</strong> (tài nguyên được giám sát, thường là Application Insights hoặc workspace), <strong>Condition</strong> (tín hiệu và ngưỡng), <strong>Action group</strong> (dùng lại được cho nhiều rule), <strong>Severity</strong>.</li></ul>
<div class="tablewrap"><table><thead><tr><th>Severity</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td><strong>0 – Critical</strong></td><td>Ảnh hưởng production, phải xử lý ngay (sập toàn bộ service)</td></tr>
<tr><td><strong>1 – Error</strong></td><td>Sự cố đáng kể, ảnh hưởng chức năng</td></tr>
<tr><td><strong>2 – Warning</strong></td><td>Có thể thành sự cố nếu để lâu</td></tr>
<tr><td><strong>3 – Informational</strong></td><td>Sự kiện đáng ghi nhận, chưa cần hành động</td></tr>
<tr><td><strong>4 – Verbose</strong></td><td>Thông tin chẩn đoán chi tiết</td></tr>
</tbody></table></div>
<ul><li>Cấu hình log search alert gồm: <strong>evaluation frequency</strong> (1 phút – 24 giờ), <strong>aggregation granularity</strong> (window size, khoảng thời gian mỗi lần đánh giá xét tới), <strong>measure</strong> là <em>table rows</em> hoặc một giá trị số, cộng thêm <strong>number of violations</strong> (phải vi phạm bao nhiêu lần mới bắn) để một đỉnh nhất thời không gây báo động.</li></ul>
<pre><button class="copybtn">copy</button><code>// Granularity 5 phút, frequency 5 phút, measure = Table rows, threshold &gt; 0
requests
| where success == false
| summarize failedCount = count() by cloud_RoleName
| where failedCount &gt; 10          // mỗi dòng trả về = một service vượt 10 lỗi trong cửa sổ

// Ngưỡng theo percentile thay vì trung bình
requests
| summarize p95Duration = percentile(duration, 95) by cloud_RoleName
| where p95Duration &gt; 3000</code></pre>
<ul><li>Với AI app, unit coi <strong>log search alert là lựa chọn phổ biến hơn</strong> vì diễn đạt được điều kiện phức tạp (join, percentile, custom dimension). Metric alert hợp với ngưỡng đơn giản kiểu CPU &gt; 80%. Chuyện chi phí và độ trễ của hai loại vẫn như mục 5.2.</li>
<li>Ngưỡng theo <strong>p95</strong> dễ hành động hơn ngưỡng theo trung bình: trung bình có thể vẫn đẹp trong khi 5% người dùng đang chịu phản hồi chậm.</li>
<li>Tách <strong>action group theo mức độ</strong>: nhóm Critical gồm SMS, voice và webhook tới hệ thống quản lý sự cố; nhóm Warning chỉ gửi email cho cả đội. Mục đích là tránh mệt mỏi vì thông báo. Dùng tính năng <em>Test</em> action group trên portal trước khi dựa vào nó.</li>
<li><strong>Smart detection</strong>: <em>Failure anomalies</em> so tỷ lệ request lỗi với baseline, cảnh báo kèm <strong>cluster analysis</strong> (người dùng bị ảnh hưởng, exception và dependency liên quan). <em>Performance anomalies</em> bắt thời gian phản hồi hoặc thời lượng dependency xấu dần, và số exception tăng bất thường, kể cả khi chưa vượt một ngưỡng cố định nào. Dùng <strong>kết hợp</strong>: rule thủ công giữ SLA đã biết ("p95 &lt; 3 giây", "lỗi &lt; 1%"), smart detection bắt vấn đề chưa lường trước.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> truy vấn trả về các service có hơn 10 lỗi, threshold là số dòng &gt; 0. Kết quả: alert bắn khi <em>bất kỳ</em> service nào vượt 10 lỗi trong cửa sổ. Không phải bắn cho từng request lỗi, và không đòi mọi service cùng vượt.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/analyze-telemetry-logs-metrics/6-set-alerts-app-failures-anomalies" target="_blank" rel="noopener">Analyze app telemetry with logs and metrics — Set alerts for app failures and anomalies</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="04-security-monitoring/khoa-dashboard-workbook-thuc-hanh">5.7 Dựng dashboard và workbook: ghim tile, tham số, drill-down</h3>
<p>Mục 5.5 đã so sánh workbook với dashboard. Mục này là phần thao tác theo unit: ghim cái gì và ghim thế nào, chia sẻ cần quyền gì, và các tính năng làm workbook tương tác được.</p>
<p><strong>Dashboard</strong></p>
<ul><li><strong>Ghim metric</strong>: tài nguyên Application Insights → <em>Metrics</em> → chọn metric (Server response time, Failed requests, Dependency failures, Server request rate, Availability) → lọc (ví dụ theo <code>cloud_RoleName</code>) hoặc <strong>splitting</strong> theo dimension → biểu tượng ghim. Aggregation: <strong>Avg</strong> cho độ trễ, <strong>Sum</strong> cho tổng số sự kiện, <strong>Max</strong> để thấy đỉnh xấu nhất.</li>
<li><strong>Ghim kết quả log query</strong>: <em>Logs</em> → chạy query → chuyển sang chart → ghim. <strong>Kiểu chart lúc ghim được giữ</strong> trên tile. Dùng khi cần tính toán hoặc join mà metric có sẵn không làm được.</li>
<li>Một dashboard gộp được tài nguyên từ <strong>nhiều subscription và resource group</strong>.</li>
<li>Tile <strong>không phải thời gian thực</strong>, chỉ refresh theo lịch. Đang xử lý sự cố thì dùng Live Metrics hoặc workbook với khoảng thời gian ngắn.</li>
<li><strong>Chia sẻ</strong>: <em>Share → Publish</em>, quyền kiểm soát bằng RBAC. Người xem cần quyền đọc <strong>cả dashboard lẫn nguồn dữ liệu</strong>. Thiếu quyền trên Application Insights thì các tile của nó báo lỗi truy cập.</li>
<li>Thực hành tốt: tách dashboard sức khỏe pipeline khỏi dashboard số liệu nghiệp vụ, giữ khoảng <strong>5–10 tile</strong>, đặt tên tile có nghĩa ("Classification Service P95 Latency", không phải "Query 3"), thêm một <strong>Markdown tile</strong> ở đầu ghi mô tả hệ thống, link runbook và người trực.</li></ul>
<p><strong>Workbook</strong></p>
<ul><li>Workbook được xếp từ các <strong>step</strong> theo chiều dọc: text, query (KQL), metrics, parameter. Kiểu hiển thị của query step: grid, chart, tiles, map. Có gallery template dựng sẵn (performance, failure, usage). Mở được từ Azure Monitor, từ workspace hoặc từ tài nguyên Application Insights.</li>
<li><strong>Tham số</strong>: <em>Time range</em>, <em>Dropdown</em> (lấy giá trị từ KQL hoặc danh sách tĩnh), <em>Resource picker</em> (chọn tài nguyên hoặc workspace, tiện khi dùng cho nhiều môi trường). Query tham chiếu tham số bằng <code>{TimeRange}</code>, <code>{ServiceName}</code>. Đổi tham số là mọi step dùng nó chạy lại.</li></ul>
<pre><button class="copybtn">copy</button><code>requests
| where timestamp &gt; ago({TimeRange})
| where cloud_RoleName in ({ServiceName})      // dropdown multi-select: giá trị là danh sách cách nhau bằng dấu phẩy
| summarize totalRequests = count(), failedRequests = countif(success == false) by cloud_RoleName
| extend successRate = round(100.0 * (totalRequests - failedRequests) / totalRequests, 2)</code></pre>
<ul><li><strong>Conditional visibility</strong> (trong advanced settings của step): ẩn hoặc hiện step theo giá trị tham số, ví dụ step phân tích exception chỉ hiện khi đã chọn một service.</li>
<li><strong>Grid link action</strong>: bấm vào một ô sẽ mở transaction details, mở workbook khác, hoặc <strong>export giá trị thành tham số</strong> để lọc các step bên dưới. Đây là cách làm drill-down từ bảng tổng quan xuống từng service.</li>
<li>Mỗi query step chạy lại trên backend Log Analytics <strong>mỗi lần tham số đổi</strong>, nên giữ số step vừa phải để workbook tải nhanh.</li></ul>
<blockquote><p><strong>Bẫy thi:</strong> "cần lọc động theo service, khoảng thời gian, loại lỗi khi điều tra" thì dùng <strong>Workbooks</strong>. "Đồng nghiệp mở dashboard thấy tile báo lỗi truy cập" thì họ có quyền trên dashboard nhưng thiếu quyền đọc tài nguyên Application Insights nằm sau tile.</p></blockquote>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/training/modules/analyze-telemetry-logs-metrics/4-build-dashboards-app-telemetry" target="_blank" rel="noopener">Analyze app telemetry with logs and metrics — Build dashboards for app telemetry</a> và <a href="https://learn.microsoft.com/en-us/training/modules/analyze-telemetry-logs-metrics/5-create-workbooks-interactive-analysis" target="_blank" rel="noopener">Create workbooks for interactive analysis</a> (khóa AI-200T00 trên Microsoft Learn), đọc ngày 26/09/2026.</em></p>
<h3 id="04-security-monitoring/trien-khai-monitor">5.8 Triển khai giám sát: diagnostic settings và alert rule</h3>
<p>KQL chỉ có dữ liệu để chạy khi tài nguyên đã <strong>gửi log vào workspace</strong>. Thứ tự: <strong>diagnostic settings cho từng tài nguyên → action group → metric alert / log alert</strong>.</p>
<pre><button class="copybtn">copy</button><code># 1. Đẩy log tài nguyên vào workspace (mỗi tài nguyên một diagnostic setting)
az monitor diagnostic-settings create -n to-law --resource $SB_ID --workspace $WS_ID \\
  --logs '[{"categoryGroup":"allLogs","enabled":true}]' --metrics '[{"category":"AllMetrics","enabled":true}]' \\
  --export-to-resource-specific true   # không có cờ này thì log vào bảng chung AzureDiagnostics

# 2. Action group: ai nhận cảnh báo
az monitor action-group create -g rg-ai200 -n ag-oncall --short-name oncall \\
  --action email oncall ops@contoso.com

# 3. Metric alert (rẻ, gần thời gian thực) — có message rơi vào DLQ
az monitor metrics alert create -g rg-ai200 -n dlq-not-empty --scopes $SB_ID \\
  --condition "max DeadletteredMessages &gt; 0" --window-size 5m --evaluation-frequency 1m \\
  --action ag-oncall

# 4. Log alert từ KQL — tỉ lệ request lỗi
# scheduled-query là extension (CLI ≥ 2.54), tự cài ở lần chạy đầu
az monitor scheduled-query create -g rg-ai200 -n api-5xx --scopes $AI_ID \\
  --condition "count 'Q1' &gt; 20" \\
  --condition-query Q1="requests | where resultCode startswith '5'" \\
  --window-size 10m --evaluation-frequency 5m --action-groups $AG_ID</code></pre>
<ul><li><strong>Portal</strong>: tài nguyên → <em>Diagnostic settings</em> → <em>Add</em>; <em>Alerts → Create → Alert rule</em>, chọn signal là metric hay custom log search.</li>
<li><strong>Kiểm tra</strong>: <code>AzureDiagnostics | take 10</code> hoặc bảng resource-specific (ví dụ <code>AZMSOperationalLogs</code> — chỉ có khi setting tạo với <code>--export-to-resource-specific true</code>) sau vài phút; nút <em>Test action group</em>.</li>
<li><strong>Bẫy</strong>: metric có sẵn không cần diagnostic settings để alert, nhưng <strong>log</strong> thì cần; log alert tính phí theo tần suất đánh giá — "cảnh báo trong vòng 1 phút cho CPU" → metric alert, không phải log alert chạy mỗi phút.</li></ul>
<p><em>Nguồn: <a href="https://learn.microsoft.com/en-us/cli/azure/monitor/diagnostic-settings" target="_blank" rel="noopener">az monitor diagnostic-settings</a>, <a href="https://learn.microsoft.com/en-us/cli/azure/monitor/scheduled-query" target="_blank" rel="noopener">az monitor scheduled-query</a>, <a href="https://learn.microsoft.com/en-us/cli/azure/monitor/metrics/alert" target="_blank" rel="noopener">az monitor metrics alert</a> trên Microsoft Learn, đối chiếu ngày 26/09/2026.</em></p>
<hr>
<h2 id="04-security-monitoring/5-bao-mat-xuyen-suot-tong-hop">6. Bảo mật xuyên suốt — tổng hợp</h2>
<div class="tablewrap"><table><thead><tr><th>Chủ đề</th><th>Điểm chính</th></tr></thead><tbody><tr><td><strong>Managed identity</strong></td><td>System-assigned (gắn vòng đời với tài nguyên) vs user-assigned (dùng lại cho nhiều tài nguyên, tồn tại độc lập). Luôn ưu tiên hơn connection string</td></tr><tr><td><strong>RBAC data plane</strong></td><td>Cosmos DB Built-in Data Contributor, Storage Blob Data Contributor, Azure Service Bus Data Sender/Receiver, Key Vault Secrets User, App Configuration Data Reader, AcrPull</td></tr><tr><td><strong>Networking</strong></td><td>Private endpoint + tắt public access; service endpoint; VNet integration cho App Service/Functions/Container Apps</td></tr><tr><td><strong>Data protection</strong></td><td>Mã hoá at-rest mặc định; customer-managed key (CMK) khi cần; TLS 1.2+ bắt buộc</td></tr><tr><td><strong>Chống lộ khoá</strong></td><td>Không commit secret; dùng Key Vault + rotation; bật Defender for Cloud; quét secret trong CI</td></tr><tr><td><strong>AI-specific</strong></td><td>Giới hạn quyền truy cập vector store theo tenant (filter bắt buộc), lọc nội dung (content safety), log prompt cẩn thận vì có PII</td></tr></tbody></table></div>
<h3 id="04-security-monitoring/4e-default-azure-credential">6.1 DefaultAzureCredential — chuỗi thử và vì sao production nên khai rõ</h3>
<p><code>DefaultAzureCredential</code> thử lần lượt nhiều cách lấy token cho tới khi một cách thành công. Biết <em>thứ tự</em> là biết vì sao app trên Azure lại đi xác thực bằng nhầm danh tính.</p>
<table><thead><tr><th>#</th><th>Credential</th><th>Nhóm</th></tr></thead><tbody>
<tr><td>1</td><td><code>EnvironmentCredential</code> — service principal khai bằng biến môi trường</td><td rowspan="3">Deployed service</td></tr>
<tr><td>2</td><td><code>WorkloadIdentityCredential</code> — workload identity trên Kubernetes</td></tr>
<tr><td>3</td><td><code>ManagedIdentityCredential</code> — managed identity của tài nguyên</td></tr>
<tr><td>4</td><td><code>SharedTokenCacheCredential</code> (chỉ Windows)</td><td rowspan="5">Developer tool</td></tr>
<tr><td>5</td><td><code>VisualStudioCodeCredential</code></td></tr>
<tr><td>6</td><td><code>AzureCliCredential</code> — <code>az login</code></td></tr>
<tr><td>7</td><td><code>AzurePowerShellCredential</code> — <code>Connect-AzAccount</code></td></tr>
<tr><td>8</td><td><code>AzureDeveloperCliCredential</code> — <code>azd auth login</code></td></tr>
<tr><td>9</td><td><code>InteractiveBrowserCredential</code> — <strong>mặc định tắt</strong></td><td>Tương tác</td></tr>
<tr><td>10</td><td>Broker (tài khoản đăng nhập của máy)</td><td>Tương tác</td></tr>
</tbody></table>
<ul><li><strong>Bẫy số một</strong>: <code>EnvironmentCredential</code> đứng <em>trước</em> managed identity. Một bộ <code>AZURE_CLIENT_ID</code> / <code>AZURE_TENANT_ID</code> / <code>AZURE_CLIENT_SECRET</code> còn sót trong app settings là app dùng service principal cũ thay vì managed identity — quyền RBAC gán cho managed identity có đúng cũng vẫn 403. Kiểm bằng cách bật log của <code>azure.identity</code> và đọc dòng "acquired a token from …".</li>
<li><strong>User-assigned managed identity</strong>: app gắn nhiều identity thì phải chỉ rõ cái nào — <code>DefaultAzureCredential(managed_identity_client_id=…)</code> hoặc <code>ManagedIdentityCredential(client_id=…)</code>. Không chỉ thì request token thất bại vì hệ thống không đoán được.</li>
<li>Cắt bớt chuỗi bằng biến môi trường <code>AZURE_TOKEN_CREDENTIALS</code>: <code>prod</code> giữ nhóm deployed service, <code>dev</code> giữ nhóm developer tool (từ azure-identity 1.23.0), hoặc đặt thẳng tên một credential như <code>ManagedIdentityCredential</code> (từ 1.24.0).</li>
<li><strong>Production nên khai thẳng <code>ManagedIdentityCredential</code></strong>: lỗi xác thực trong một chuỗi 10 bước rất khó chẩn đoán, việc thử tuần tự tốn thời gian (dưới máy dev, bước managed identity luôn phải chờ timeout của IMDS), và biến môi trường của máy chủ có thể âm thầm đổi hành vi.</li>
<li>Thư viện <strong>cache token trong bộ nhớ</strong>, nên tạo credential và client <em>một lần</em> rồi tái sử dụng; tạo mới mỗi request là tự ép đi lấy token liên tục và dễ bị throttle.</li>
<li>Muốn chuỗi gọn theo ý mình thì dùng <code>ChainedTokenCredential</code> và xếp từ credential hay dùng nhất tới ít dùng nhất.</li>
<li><em>Nguồn: <a href="https://learn.microsoft.com/azure/developer/python/sdk/authentication/credential-chains" target="_blank" rel="noopener">Microsoft Learn — Credential chains in the Azure Identity library for Python</a> (bản 15/01/2026), đối chiếu ngày 18/09/2026.</em></li></ul>
<hr>
<h2 id="04-security-monitoring/4g-production-hardening">7. Production hardening — bảo mật, độ tin cậy và chi phí cho AI workload</h2>
<h3 id="04-security-monitoring/4g1-do-tin-cay">7.1 Độ tin cậy: hạn mức của model là một phần của kiến trúc</h3>
<ul><li>Hạn mức của một deployment Azure OpenAI đo bằng <strong>TPM</strong> (tokens per minute) và <strong>RPM</strong> (requests per minute), gắn với nhau theo một tỷ lệ cố định tuỳ model và phiên bản (ví dụ 10 RPM cho mỗi 1.000 TPM ở nhiều bản, 1 RPM cho mỗi 1.000 TPM ở bản khác). Vượt là <strong>HTTP 429</strong>.</li>
<li>Khuyến nghị chính thức để không đụng trần: <strong>có retry logic trong ứng dụng</strong>, tăng tải <em>từ từ</em> thay vì nhảy bậc, thử nhiều dạng tăng tải, và nâng quota cho deployment (chuyển bớt quota từ deployment khác nếu cần).</li>
<li>Hai kiểu triển khai: <strong>Standard / GlobalStandard</strong> trả theo lượt dùng và chia sẻ hạn mức, so với <strong>Provisioned (PTU)</strong> — mua sẵn công suất, độ trễ ổn định, hợp khi tải đều và cần cam kết. Đề mô tả "độ trễ p99 phải ổn định, tải biết trước" là hướng tới PTU.</li>
<li><strong>Retry với exponential backoff + jitter</strong> chứ không retry đều nhịp: nhiều client cùng thử lại đúng một lúc tạo sóng đồng pha và giữ hệ thống trong trạng thái quá tải. Giới hạn số lần thử và tôn trọng thời gian chờ mà dịch vụ trả về.</li>
<li><strong>Circuit breaker</strong> cho phụ thuộc hạ nguồn: sau N lỗi liên tiếp thì mở mạch và trả lỗi nhanh trong một khoảng, rồi thử lại dè dặt. Không có nó thì mỗi request đều chờ hết timeout, thread/connection cạn và lỗi lan ngược lên toàn hệ thống.</li>
<li><strong>Dịch vụ hoá suy giảm chứ đừng sập</strong>: model chính 429 thì rơi về model nhỏ hơn hoặc vùng khác; vector search hỏng thì trả kết quả full-text; cache hỏng thì đọc thẳng nguồn. Mỗi nhánh dự phòng phải có timeout riêng.</li>
<li>Tách hàng đợi bằng Service Bus để đỉnh tải không đập thẳng vào model — consumer rút message theo đúng tốc độ mà hạn mức cho phép.</li></ul>
<h3 id="04-security-monitoring/4g2-bao-mat">7.2 Bảo mật xuyên suốt — danh sách rà trước khi lên production</h3>
<ul><li><strong>Không có secret trong code, biến môi trường hay image.</strong> Managed identity + RBAC ở mọi chặng: ACR (<code>AcrPull</code>), Key Vault (<code>Key Vault Secrets User</code>), Cosmos DB, Service Bus, Storage. Key Vault chỉ giữ thứ thật sự không thể dùng identity (API key bên thứ ba).</li>
<li>Tắt khoá truy cập ở nơi hỗ trợ: admin user của ACR, access key của App Configuration và Storage, local auth của Cosmos DB — chỉ còn Entra ID.</li>
<li><strong>Mạng</strong>: private endpoint cho Key Vault, Cosmos DB, PostgreSQL, ACR (Premium); container app hoặc AKS trong VNet; chặn public network access thay vì chỉ lọc IP.</li>
<li><strong>Đừng ghi prompt và output vào log mặc định</strong> — chúng chứa dữ liệu người dùng. Nếu cần lưu để đánh giá thì tách kho riêng, có thời hạn xoá và kiểm soát truy cập; đừng để chúng lọt vào trace hay vào baggage của OpenTelemetry (mục 3.6).</li>
<li><strong>Content filter</strong> của Azure OpenAI bật mặc định; ứng dụng phải xử lý được trường hợp bị chặn (mã lỗi riêng) thay vì coi là lỗi hệ thống.</li>
<li>Prompt injection là rủi ro của kiến trúc RAG: coi mọi văn bản lấy từ nguồn ngoài là <em>dữ liệu</em>, không phải chỉ dẫn; giới hạn công cụ mà agent gọi được; kiểm tra đầu ra trước khi dùng nó để thực hiện hành động.</li></ul>
<h3 id="04-security-monitoring/4g3-chi-phi">7.3 Chi phí — các nút vặn theo thứ tự hiệu quả</h3>
<table><thead><tr><th>Nút vặn</th><th>Vì sao hiệu quả</th></tr></thead><tbody>
<tr><td><strong>Cache embedding theo hash của văn bản</strong></td><td>Cùng một đoạn văn bản không cần trả tiền embed hai lần; Redis với TTL dài là đủ</td></tr>
<tr><td><strong>Cache câu trả lời</strong> cho câu hỏi lặp</td><td>Tiết kiệm cả token lẫn độ trễ; kèm jitter cho TTL để tránh cache stampede</td></tr>
<tr><td><strong>Cắt ngữ cảnh</strong>: top-k nhỏ hơn, chunk gọn hơn</td><td>Token đầu vào là phần lớn hoá đơn của RAG</td></tr>
<tr><td><strong>Chọn đúng cỡ model</strong> cho từng bước</td><td>Phân loại và rewrite query dùng model nhỏ, chỉ bước sinh câu trả lời mới dùng model lớn</td></tr>
<tr><td><strong>Giảm chiều embedding</strong> (<code>dimensions=1536</code>, <code>halfvec</code>, <code>float16</code>)</td><td>Giảm dung lượng lưu, RAM cho index và RU/IO khi truy vấn</td></tr>
<tr><td><strong>Batch</strong> lời gọi embedding</td><td>Ít round-trip, tận dụng RPM tốt hơn</td></tr>
<tr><td><strong>Scale-to-zero</strong> cho worker theo sự kiện</td><td>Container Apps không tính tiền khi ở 0 replica</td></tr>
<tr><td><strong>Tỉa indexing policy</strong> của Cosmos DB, loại <code>/embedding/*</code></td><td>RU ghi giảm thẳng vì không phải index đường dẫn vô ích</td></tr>
</tbody></table>
<ul><li>Đo trước khi tối ưu: ghi số token vào custom dimension của trace rồi tổng hợp bằng KQL theo endpoint và theo tenant — không có số thì mọi quyết định cắt giảm đều là đoán.</li>
<li><em>Nguồn: <a href="https://learn.microsoft.com/azure/ai-foundry/openai/quotas-limits" target="_blank" rel="noopener">Microsoft Learn — Azure OpenAI quotas and limits</a> (bản 20/08/2026), đối chiếu ngày 18/09/2026.</em></li></ul>
<hr>
<h2 id="04-security-monitoring/6-checklist-on-domain-4">8. Checklist ôn Domain 4</h2>
<ul><li class="task" data-key="04-security-monitoring:0"><input type="checkbox">Phân biệt secret/key/certificate; role Key Vault Secrets User vs Contributor</li><li class="task" data-key="04-security-monitoring:1"><input type="checkbox">Quy trình rotation với Event Grid <code>SecretNearExpiry</code> → Function</li><li class="task" data-key="04-security-monitoring:2"><input type="checkbox">Soft delete vs purge protection</li><li class="task" data-key="04-security-monitoring:3"><input type="checkbox"><code>DefaultAzureCredential</code> — thứ tự thử và cách hoạt động trên Azure vs local</li><li class="task" data-key="04-security-monitoring:4"><input type="checkbox">App Configuration: label, feature flag, Key Vault reference, sentinel key refresh</li><li class="task" data-key="04-security-monitoring:5"><input type="checkbox">Cấu trúc trace/span, header <code>traceparent</code>, <code>configure_azure_monitor()</code>, <code>OTEL_SERVICE_NAME</code></li><li class="task" data-key="04-security-monitoring:6"><input type="checkbox">Ánh xạ bảng <code>AppRequests</code> / <code>AppDependencies</code> / <code>AppTraces</code> / <code>AppExceptions</code>, trường <code>OperationId</code></li><li class="task" data-key="04-security-monitoring:7"><input type="checkbox">Viết được KQL: lọc thời gian, <code>summarize</code> + <code>bin</code>, <code>percentile</code>, <code>join</code>, <code>render timechart</code></li><li class="task" data-key="04-security-monitoring:deploy"><input type="checkbox">Tự triển khai Key Vault (RBAC), App Configuration (label + Key Vault reference), App Insights workspace-based và một metric alert</li></ul>
</section>
<section class="doc" id="05-cheatsheet" data-title="Cheat sheet" hidden>
<h1 id="05-cheatsheet/cheat-sheet-ai-200-tra-nhanh-truoc-ngay-thi">Cheat sheet AI-200 — tra nhanh trước ngày thi</h1>
<h2 id="05-cheatsheet/1-con-so-phai-nho">1. Con số phải nhớ</h2>
<div class="tablewrap"><table><thead><tr><th>Con số</th><th>Ý nghĩa</th></tr></thead><tbody><tr><td><strong>700/1000</strong></td><td>Điểm đạt</td></tr><tr><td><strong>120 phút</strong></td><td>Thời lượng thi</td></tr><tr><td>1 RU</td><td>Point read item 1 KB trong Cosmos DB</td></tr><tr><td>2× RU</td><td>Chi phí đọc với Strong / Bounded staleness</td></tr><tr><td>20 GB</td><td>Giới hạn 1 logical partition Cosmos DB</td></tr><tr><td>10.000 RU/s</td><td>Giới hạn throughput 1 logical partition</td></tr><tr><td>10</td><td><code>MaxDeliveryCount</code> mặc định của Service Bus</td></tr><tr><td>1 phút</td><td><code>LockDuration</code> mặc định (tối đa 5 phút)</td></tr><tr><td>256 KB / 100 MB</td><td>Kích thước message Service Bus Standard / Premium</td></tr><tr><td>30 lần, 24 giờ</td><td>Retry mặc định của Event Grid</td></tr><tr><td>1 MB</td><td>Kích thước event tối đa Event Grid (tính phí theo 64 KB)</td></tr><tr><td>25</td><td>Số advanced filter tối đa / event subscription</td></tr><tr><td>5 phút (max 10)</td><td>Timeout Functions trên Consumption plan</td></tr><tr><td>30 phút (không giới hạn)</td><td>Timeout Functions trên Premium plan</td></tr><tr><td>2000 chiều</td><td>Giới hạn index HNSW cho <code>vector</code>; 4000 với <code>halfvec</code></td></tr><tr><td>4096 chiều</td><td>Giới hạn <code>diskANN</code>/<code>quantizedFlat</code> trong Cosmos DB; <code>flat</code> chỉ 505</td></tr><tr><td>7–90 ngày</td><td>Soft delete retention của Key Vault</td></tr><tr><td>6432</td><td>Port PgBouncer của Azure Database for PostgreSQL</td></tr><tr><td>10000</td><td>Port mặc định Azure Managed Redis (SSL)</td></tr></tbody></table></div>
<h2 id="05-cheatsheet/2-azure-cli-theo-dich-vu">2. Azure CLI theo dịch vụ</h2>
<pre><button class="copybtn">copy</button><code># ---------- ACR ----------
az acr create -g rg -n myacr --sku Premium
az acr build --registry myacr --image app:v1 .
az acr task create --registry myacr --name t1 --context &lt;git&gt; --file Dockerfile \\
  --image app:{{.Run.ID}} --base-image-trigger-enabled true
az acr repository show-tags -n myacr --repository app
az acr import -n myacr --source docker.io/library/redis:7 --image redis:7

# ---------- App Service ----------
az webapp create -g rg -p plan1 -n app1 --container-image-name myacr.azurecr.io/app:v1
az webapp config appsettings set -g rg -n app1 --settings WEBSITES_PORT=8000
az webapp identity assign -g rg -n app1
az webapp log tail -g rg -n app1
az webapp deployment slot create -g rg -n app1 --slot staging
az webapp deployment slot swap  -g rg -n app1 --slot staging

# ---------- Container Apps ----------
az containerapp env create -g rg -n aca-env --logs-workspace-id $WS
az containerapp create -g rg -n api --environment aca-env --image myacr.azurecr.io/app:v1 \\
  --target-port 8000 --ingress external --min-replicas 0 --max-replicas 10
az containerapp update -g rg -n api --image myacr.azurecr.io/app:v2 --revision-suffix v2
az containerapp revision set-mode -g rg -n api --mode multiple
az containerapp ingress traffic set -g rg -n api --revision-weight api--v1=90 api--v2=10
az containerapp logs show -g rg -n api --follow
az containerapp exec -g rg -n api --command /bin/sh
az containerapp job create ... --trigger-type Schedule --cron-expression "0 2 * * *"

# ---------- AKS ----------
az aks create -g rg -n aks1 --node-count 2 --enable-managed-identity --attach-acr myacr
az aks get-credentials -g rg -n aks1
kubectl apply -f manifest.yaml
kubectl get pods -o wide ; kubectl describe pod &lt;p&gt; ; kubectl logs &lt;p&gt; --previous
kubectl exec -it &lt;p&gt; -- sh ; kubectl get events --sort-by=.lastTimestamp
kubectl rollout status deploy/api ; kubectl rollout undo deploy/api

# ---------- Cosmos DB ----------
az cosmosdb create -g rg -n cos1 --capabilities EnableServerless
az cosmosdb sql container create -g rg -a cos1 -d ragdb -n docs \\
  --partition-key-path /tenantId --throughput 400 --idx @indexpolicy.json
az cosmosdb sql role assignment create -a cos1 -g rg \\
  --role-definition-name "Cosmos DB Built-in Data Contributor" \\
  --principal-id $PID --scope "/"

# ---------- PostgreSQL ----------
az postgres flexible-server create -g rg -n pg1 --tier MemoryOptimized --sku-name Standard_E4ds_v5
az postgres flexible-server parameter set -g rg -s pg1 --name azure.extensions --value vector,pg_diskann
az postgres flexible-server parameter set -g rg -s pg1 --name pgbouncer.enabled --value true

# ---------- Service Bus ----------
az servicebus queue create -g rg --namespace-name sb1 -n q1 \\
  --max-delivery-count 10 --enable-dead-lettering-on-message-expiration true
az servicebus topic subscription rule create -g rg --namespace-name sb1 \\
  --topic-name t1 --subscription-name s1 -n r1 --filter-sql-expression "lang='vi'"

# ---------- Event Grid ----------
az eventgrid topic create -g rg -n eg1
az eventgrid event-subscription create -n sub1 --source-resource-id $ID \\
  --endpoint $FUNC --endpoint-type azurefunction \\
  --advanced-filter data.lang StringIn vi en \\
  --max-delivery-attempts 10 --event-ttl 720 --deadletter-endpoint $BLOB

# ---------- Functions ----------
func init myapp --python -m V2 ; func new --template "HTTP trigger"
func start
func azure functionapp publish myfunc --python
az functionapp config appsettings set -g rg -n myfunc --settings "K=V"

# ---------- Key Vault / App Config ----------
az keyvault create -g rg -n kv1 --enable-rbac-authorization true --enable-purge-protection true
az keyvault secret set -n kv1 --name k --value v
az role assignment create --assignee $PID --role "Key Vault Secrets User" --scope $KVID
az appconfig kv set -n ac1 --key "App:TopK" --value 5 --label prod
az appconfig feature set -n ac1 --feature hybrid --label prod</code></pre>
<h2 id="05-cheatsheet/3-snippet-python-theo-sdk">3. Snippet Python theo SDK</h2>
<pre><button class="copybtn">copy</button><code># Auth chung
from azure.identity import DefaultAzureCredential
cred = DefaultAzureCredential()

# Cosmos DB
from azure.cosmos import CosmosClient
c = CosmosClient(URL, cred).get_database_client("ragdb").get_container_client("docs")
c.read_item(item=id, partition_key=pk)
c.upsert_item(doc)
c.query_items(query="SELECT TOP 5 c.chunk, VectorDistance(c.embedding,@v) s FROM c ORDER BY VectorDistance(c.embedding,@v)",
              parameters=[{"name":"@v","value":vec}], partition_key=pk)

# Service Bus
from azure.servicebus import ServiceBusClient, ServiceBusMessage
sb = ServiceBusClient(FQNS, cred)
sb.get_queue_sender("q").send_messages(ServiceBusMessage("payload"))
r = sb.get_queue_receiver("q"); [r.complete_message(m) for m in r]

# Event Grid
from azure.eventgrid import EventGridPublisherClient, EventGridEvent
EventGridPublisherClient(EP, cred).send([EventGridEvent(subject="s", event_type="T",
                                                        data={}, data_version="1.0")])

# Key Vault
from azure.keyvault.secrets import SecretClient
SecretClient(VAULT_URL, cred).get_secret("name").value

# Blob
from azure.storage.blob import BlobServiceClient
BlobServiceClient(ACCOUNT_URL, cred).get_blob_client("c","b").download_blob().readall()

# OpenTelemetry
from azure.monitor.opentelemetry import configure_azure_monitor
configure_azure_monitor(connection_string=CONN)

# Redis
import redis
redis.Redis(host=H, port=10000, ssl=True, password=PW).set("k","v", ex=300)

# PostgreSQL
import psycopg
psycopg.connect(CONN).execute("SELECT chunk FROM doc_chunks ORDER BY embedding &lt;=&gt; %s LIMIT 5", (vec,))</code></pre>
<h2 id="05-cheatsheet/4-bang-chon-dich-vu-nao">4. Bảng "chọn dịch vụ nào"</h2>
<div class="tablewrap"><table><thead><tr><th>Tình huống trong đề</th><th>Đáp án thường đúng</th></tr></thead><tbody><tr><td>Build image không có Docker trên máy CI</td><td><code>az acr build</code> (ACR Tasks)</td></tr><tr><td>Tự vá base image khi có bản vá bảo mật</td><td>ACR Task với base image trigger</td></tr><tr><td>Microservice scale về 0 theo độ dài queue</td><td>Container Apps + KEDA <code>azure-servicebus</code></td></tr><tr><td>Cần CRD/Helm/service mesh/GPU node pool tuỳ biến</td><td>AKS</td></tr><tr><td>Canary 10% traffic</td><td>Container Apps multi-revision + traffic split</td></tr><tr><td>Xử lý tin nhắn có thứ tự theo khách hàng</td><td>Service Bus <strong>sessions</strong></td></tr><tr><td>Message lỗi lặp lại cần cách ly để điều tra</td><td>Dead-letter queue</td></tr><tr><td>Phản ứng khi blob mới được upload</td><td>Event Grid system topic → Function</td></tr><tr><td>Fan-out sự kiện tới nhiều hệ thống, loosely coupled</td><td>Event Grid</td></tr><tr><td>Ingest telemetry hàng triệu event/giây, replay</td><td>Event Hubs</td></tr><tr><td>API serverless trả JSON</td><td>Functions HTTP trigger</td></tr><tr><td>Job embedding chạy 20 phút</td><td>Premium/Flex plan, Durable Functions, hoặc Container Apps Job</td></tr><tr><td>Semantic search trên document NoSQL toàn cầu</td><td>Cosmos DB NoSQL + diskANN vector index</td></tr><tr><td>RAG cần JOIN với bảng nghiệp vụ quan hệ</td><td>PostgreSQL + pgvector</td></tr><tr><td>Cache câu trả lời LLM, độ trễ dưới ms</td><td>Azure Managed Redis (+ semantic cache)</td></tr><tr><td>Giảm RU khi ghi document lớn</td><td>Exclude path khỏi indexing policy</td></tr><tr><td>Giảm RU khi đọc, chấp nhận trễ nhỏ</td><td>Hạ consistency xuống Session/Eventual</td></tr><tr><td>Phát hiện document mới để tạo embedding</td><td>Cosmos DB change feed (Functions trigger + lease container)</td></tr><tr><td>App đọc secret không hard-code</td><td>Managed identity + Key Vault (hoặc Key Vault reference)</td></tr><tr><td>Bật/tắt tính năng không cần redeploy</td><td>App Configuration feature flag</td></tr><tr><td>Lần theo request qua 4 service</td><td>OpenTelemetry + <code>OperationId</code> trong Application Insights</td></tr><tr><td>Tìm endpoint chậm nhất</td><td>KQL trên <code>AppRequests</code> + <code>percentile(DurationMs, 95)</code></td></tr></tbody></table></div>
<h2 id="05-cheatsheet/5-bay-hay-gap">5. Bẫy hay gặp</h2>
<ol><li><code>VectorDistance</code> không có trong <code>ORDER BY</code> → không dùng index → RU tăng vọt.</li><li>Không exclude <code>/embedding/*</code> khỏi indexing policy → write RU rất cao.</li><li>Vector embedding policy của Cosmos <strong>không sửa được</strong> sau khi tạo container.</li><li>Quên xoá rule <code>$Default</code> khi thêm filter cho Service Bus subscription.</li><li>Quên cấu hình dead-letter cho Event Grid → event lỗi bị <strong>mất hẳn</strong>.</li><li>Event Grid trả 400/413 → <strong>không retry</strong>.</li><li><code>CREATE EXTENSION vector</code> fail vì chưa thêm vào <code>azure.extensions</code>.</li><li><code>&lt;-&gt;</code> với index <code>vector_cosine_ops</code> → index bị bỏ qua (phải dùng <code>&lt;=&gt;</code>).</li><li>IVFFlat tạo trên bảng rỗng → recall tệ; phải nạp dữ liệu trước.</li><li>Key Vault reference không hoạt động vì thiếu managed identity hoặc thiếu role Secrets User.</li><li>Consumption plan timeout 5–10 phút với job embedding dài.</li><li>App Service container không lên vì thiếu <code>WEBSITES_PORT</code>.</li><li>Xử lý message/event phải <strong>idempotent</strong> (at-least-once ở cả Service Bus và Event Grid).</li><li>Mỗi consumer của change feed cần <strong>lease container riêng</strong> (hoặc lease prefix riêng).</li><li><code>Key Vault Contributor</code> <strong>không</strong> cho phép đọc secret.</li></ol>
<h2 id="05-cheatsheet/9-kien-truc-mau-rag-end-to-end">6. Kiến trúc mẫu — RAG end-to-end xâu chuỗi cả 4 domain</h2>
<p>Một bức tranh gắn mọi dịch vụ trong đề vào đúng chỗ. Hai đường đi độc lập: <strong>ingest</strong> (nạp tri thức) và <strong>query</strong> (trả lời người dùng).</p>
<p><strong>Đường ingest:</strong> tài liệu vào Blob Storage → <strong>Event Grid</strong> phát event <code>BlobCreated</code> (filter theo <code>.pdf/.md</code>) → <strong>Function</strong> (blob trigger qua Event Grid) chunk + gọi model tạo embedding → ghi vào <strong>PostgreSQL + pgvector</strong> (hoặc Cosmos DB vector) kèm metadata để filter. Việc nặng, hay hỏng → đẩy qua <strong>Service Bus</strong> làm đệm, worker là <strong>Container Apps + KEDA</strong> scale theo độ dài queue, message hỏng rơi vào <strong>DLQ</strong>.</p>
<p><strong>Đường query:</strong> client → API trên <strong>Container Apps</strong> → tra <strong>Managed Redis</strong> (cache câu hỏi lặp lại, TTL + invalidation khi ingest bản mới) → miss thì embedding câu hỏi → <strong>vector search có metadata filter</strong> → ghép context gọi LLM → trả lời + ghi cache.</p>
<table><thead><tr><th>Bước</th><th>Dịch vụ</th><th>Domain</th><th>Điểm hỏng hay gặp trong đề</th></tr></thead><tbody>
<tr><td>Phát hiện file mới</td><td>Event Grid (filter, retry 24h)</td><td>3</td><td>Subscriber chậm trả 2xx → event retry dồn dập; thiếu dead-letter storage</td></tr>
<tr><td>Chunk + embed</td><td>Function / worker ACA</td><td>1, 3</td><td>Chạy quá lâu cho Function consumption → chuyển worker queue-based</td></tr>
<tr><td>Đệm và scale</td><td>Service Bus + KEDA</td><td>1, 3</td><td>Consumer không idempotent → tài liệu bị index hai lần</td></tr>
<tr><td>Lưu vector</td><td>pgvector / Cosmos vector</td><td>2</td><td>Thiếu index vector (HNSW/DiskANN) → tìm kiếm quét toàn bảng; partition key nóng</td></tr>
<tr><td>Cache trả lời</td><td>Managed Redis</td><td>2</td><td>Không có chiến lược invalidation → trả lời từ tri thức cũ</td></tr>
<tr><td>Secrets + config</td><td>Key Vault (reference) + App Configuration</td><td>4</td><td>Connection string nằm trong biến môi trường thường; quên managed identity</td></tr>
<tr><td>Quan sát</td><td>OpenTelemetry → Application Insights, KQL</td><td>4</td><td>Không propagate <code>operation_Id</code> qua queue → trace đứt ở Service Bus</td></tr>
</tbody></table>
<p><strong>Xuyên suốt:</strong> mọi hop xác thực bằng <strong>managed identity + RBAC</strong> (không key trong code); mọi service emit <strong>OpenTelemetry</strong> về một Application Insights để câu <code>union ... operation_Id</code> vẽ được cả chuỗi; chi phí canh bằng ba số: RU/s (hoặc vCore Postgres), số replica ACA, và kích thước cache Redis.</p>
<h2 id="05-cheatsheet/10-ba-cach-thao-tac-portal-cli-powershell">7. Ba cách thao tác: Portal, Azure CLI, Azure PowerShell</h2>
<p>Đề hay cho cùng một việc dưới ba vỏ khác nhau — nhận diện được cú pháp của cả ba là ăn điểm "cách nào đúng". Quy tắc nhận dạng nhanh:</p>
<ul><li><strong>Azure CLI</strong>: chữ thường, dạng <code>az &lt;dịch vụ&gt; &lt;động từ&gt; --flag</code>, lọc output bằng <code>--query</code> (JMESPath) + <code>--output table</code>. Chạy được trong bash/CI, là vỏ "tự động hóa" phổ biến nhất của đề.</li>
<li><strong>Azure PowerShell</strong> (module Az): dạng <code>Verb-AzNoun -Tham số</code> (Get/New/Set/Remove), trả về <strong>object</strong> nên lọc bằng pipeline <code>| Where-Object | Select-Object</code>, không phải parse text. Đăng nhập <code>Connect-AzAccount</code>, đổi subscription <code>Set-AzContext</code> (CLI: <code>az login</code> / <code>az account set</code>).</li>
<li><strong>Portal</strong>: để khám phá, xem metric/diagnostics và các wizard bật tính năng (ví dụ bật Vector Search cho Cosmos trong <em>Settings → Features</em>); thao tác lặp lại nhiều lần mà phương án là "làm tay trên portal" thì thường là đáp án sai.</li></ul>
<table><thead><tr><th>Việc</th><th>Azure CLI</th><th>Azure PowerShell</th></tr></thead><tbody>
<tr><td>Build image trên cloud</td><td><code>az acr build -r myacr -t app:v1 .</code></td><td>(CLI-first — Az chỉ quản registry: <code>New-AzContainerRegistry</code>, <code>Connect-AzContainerRegistry</code>)</td></tr>
<tr><td>Tạo/sửa Container App</td><td><code>az containerapp create/update</code></td><td><code>New-AzContainerApp</code> / <code>Update-AzContainerApp</code> (module Az.App)</td></tr>
<tr><td>Chia traffic revision</td><td><code>az containerapp ingress traffic set --revision-weight rev1=90 rev2=10</code></td><td><code>Update-AzContainerApp</code> với cấu hình traffic</td></tr>
<tr><td>Tạo Cosmos account</td><td><code>az cosmosdb create --capabilities EnableNoSQLVectorSearch</code></td><td><code>New-AzCosmosDBAccount</code></td></tr>
<tr><td>Ghi secret Key Vault</td><td><code>az keyvault secret set --vault-name v -n DbPass --value ...</code></td><td><code>Set-AzKeyVaultSecret</code> (value là SecureString)</td></tr>
<tr><td>Ghi key App Configuration</td><td><code>az appconfig kv set --key ... --label prod</code></td><td>module Az.AppConfiguration</td></tr>
<tr><td>Tạo queue Service Bus</td><td><code>az servicebus queue create --max-delivery-count 10</code></td><td><code>New-AzServiceBusQueue</code></td></tr>
<tr><td>Tạo Function App</td><td><code>az functionapp create --flexconsumption-location ...</code></td><td><code>New-AzFunctionApp</code></td></tr>
<tr><td>Deploy ARM/Bicep + xem trước</td><td><code>az deployment group create --template-file main.bicep --what-if</code></td><td><code>New-AzResourceGroupDeployment -TemplateFile main.bicep -WhatIf</code></td></tr>
<tr><td>Gán role cho managed identity</td><td><code>az role assignment create --assignee &lt;principalId&gt; --role AcrPull</code></td><td><code>New-AzRoleAssignment</code></td></tr>
</tbody></table>
<ul><li>Bẫy phân biệt hay gặp: phương án PowerShell nhưng viết <code>az ...</code> (hoặc ngược lại — <code>Get-Az...</code> trong bash script); tham số CLI <code>--what-if</code> vs PowerShell <code>-WhatIf</code>; CLI lọc bằng <code>--query "[].name"</code> còn PowerShell không có <code>--query</code>.</li>
<li>Container Apps là dịch vụ <strong>CLI-first</strong>: nhiều thao tác (scale rule, ingress) đủ nhất qua <code>az containerapp</code>; Az.App module có sau và mỏng hơn — đề cho thao tác ACA phức tạp thì nghiêng về CLI.</li></ul>
<h2 id="05-cheatsheet/11-ai-integration-engineer">8. Vai trò AI Integration Engineer và lời gọi agent đầu tiên</h2>
<p>AI-200 không kiểm tra bạn huấn luyện model. Nó kiểm tra bạn <strong>đưa một model đã có vào một hệ thống production</strong>: đóng gói, cấp phát, nối dữ liệu, nối hàng đợi, bảo mật và quan sát. Bốn domain của đề chính là bốn mảnh việc đó.</p>
<table><thead><tr><th>Câu hỏi của kỹ sư tích hợp</th><th>Thuộc domain</th></tr></thead><tbody>
<tr><td>Code này chạy ở đâu và co giãn thế nào?</td><td>1 — ACR, App Service, Container Apps, AKS</td></tr>
<tr><td>Model nhớ được gì, tìm lại bằng cách nào?</td><td>2 — Cosmos DB, PostgreSQL + pgvector, Managed Redis</td></tr>
<tr><td>Các phần rời nói chuyện với nhau ra sao khi một bên chậm hoặc chết?</td><td>3 — Service Bus, Event Grid, Functions</td></tr>
<tr><td>Ai được gọi, secret nằm đâu, hỏng thì nhìn vào đâu?</td><td>4 — Key Vault, App Configuration, OpenTelemetry, KQL</td></tr>
</tbody></table>
<pre><button class="copybtn">copy</button><code># Lời gọi đầu tiên: chat completion + embedding, xác thực bằng Entra ID (không dùng API key)
from azure.identity import DefaultAzureCredential, get_bearer_token_provider
from openai import OpenAI

token_provider = get_bearer_token_provider(
    DefaultAzureCredential(), "https://ai.azure.com/.default")

client = OpenAI(
    base_url="https://&lt;resource&gt;.openai.azure.com/openai/v1/",
    api_key=token_provider,          # truyền hàm lấy token, không phải chuỗi khoá
)

chat = client.chat.completions.create(
    model="gpt-4o",                  # TÊN DEPLOYMENT, không phải tên model
    messages=[{"role": "user", "content": "Tóm tắt đoạn này…"}],
)

emb = client.embeddings.create(
    model="text-embedding-3-large",  # cũng là tên deployment
    input=["đoạn 1", "đoạn 2"],      # gửi theo lô để tiết kiệm round-trip
)
</code></pre>
<ul><li><strong>Khác biệt số một với OpenAI thuần</strong>: tham số <code>model</code> trên Azure là <strong>tên deployment</strong> bạn đặt lúc triển khai, không phải tên model. Đặt trùng tên cho dễ nhớ là được, nhưng nhầm hai khái niệm này là lỗi 404 đầu tiên ai cũng gặp.</li>
<li>Xác thực bằng <code>get_bearer_token_provider(DefaultAzureCredential(), …)</code> — truyền <em>hàm</em> lấy token nên SDK tự làm mới khi hết hạn. Đây là cách nối mục 6.1 của Domain 4 vào lời gọi model: dưới máy dev nó dùng \`az login\`, trên Azure nó dùng managed identity, code không đổi một dòng.</li>
<li>Tạo <code>client</code> <strong>một lần</strong> lúc khởi động (lifespan của FastAPI ở mục 5 của Domain 1), đừng tạo trong mỗi handler.</li>
<li>Embedding nhận mảng đầu vào — gom theo lô thay vì gọi từng đoạn; nhớ trần số phần tử và trần token của từng model.</li>
<li>Kiến trúc RAG tối thiểu xâu chuỗi cả bốn domain: <em>ingest</em> (Event Grid báo có file mới → Function chunk + embed) → <em>store</em> (vector store ở Domain 2) → <em>serve</em> (container FastAPI ở Domain 1 truy hồi rồi gọi model) → <em>vận hành</em> (secret ở Key Vault, trace bằng OpenTelemetry, truy vấn bằng KQL). Mục 6 phía trên vẽ chi tiết luồng này.</li>
<li><em>Nguồn: <a href="https://learn.microsoft.com/azure/ai-foundry/openai/how-to/switching-endpoints" target="_blank" rel="noopener">Microsoft Learn — Switching between OpenAI and Azure OpenAI endpoints with Python</a>, đối chiếu ngày 18/09/2026.</em></li></ul>
</section>
<section class="doc" id="06-cau-hoi-on-tap" data-title="40 câu ôn tập" hidden>
<h1 id="06-cau-hoi-on-tap/cau-hoi-on-tap-ai-200-co-giai-thich">Câu hỏi ôn tập AI-200 (có giải thích)</h1>
<blockquote><p>40 câu bám sát 4 domain. Tự làm trước, xem đáp án sau. Đây là câu hỏi tự soạn theo outline chính thức, <strong>không phải</strong> đề thi thật.</p></blockquote>
<hr>
<h2 id="06-cau-hoi-on-tap/domain-1-containers-cau-110">Domain 1 — Containers (câu 1–10)</h2>
<p><strong>1.</strong> Bạn cần build image trong pipeline chạy trên agent không cài Docker. Lệnh nào?<br>A. <code>docker build</code> · B. <code>az acr build</code> · C. <code>az acr import</code> · D. <code>az container create</code></p>
<p><strong>2.</strong> Yêu cầu: image con phải tự rebuild khi <code>python:3.12-slim</code> có bản vá bảo mật mới. Cấu hình gì?<br>A. Scheduled ACR Task · B. ACR Task với base image trigger · C. Webhook ACR · D. Azure Policy</p>
<p><strong>3.</strong> Container app của bạn lắng nghe port 8000 nhưng App Service trả 502. Sửa gì?<br>A. Bật Always On · B. Thêm app setting <code>WEBSITES_PORT=8000</code> · C. Đổi SKU sang Premium · D. Bật health check</p>
<p><strong>4.</strong> Muốn App Service pull image từ ACR mà không dùng admin user?<br>A. Bật admin user và lưu vào Key Vault · B. Managed identity + role <code>AcrPull</code> + <code>acrUseManagedIdentityCreds</code> · C. Dùng SAS token · D. Bật anonymous pull</p>
<p><strong>5.</strong> Thay đổi nào trên Container App <strong>tạo revision mới</strong>?<br>A. Cập nhật giá trị secret · B. Đổi image tag · C. Đổi cấu hình ingress · D. Bật Dapr</p>
<p><strong>6.</strong> Cần chạy song song v1 (90%) và v2 (10%). Làm gì?<br>A. Deploy 2 container app riêng · B. Bật multiple revision mode + traffic split · C. Dùng deployment slot · D. Dùng AKS ingress</p>
<p><strong>7.</strong> Worker cần scale 0→30 replica theo số message trong Service Bus queue, mỗi replica xử lý 20 message. Cấu hình?<br>A. HTTP scale rule, concurrency 20 · B. CPU scale rule 70% · C. Custom scale rule <code>azure-servicebus</code>, <code>messageCount=20</code>, min 0 max 30 · D. HPA trên AKS</p>
<p><strong>8.</strong> Pod ở trạng thái <code>CrashLoopBackOff</code>. Lệnh nào cho biết vì sao?<br>A. <code>kubectl get pods</code> · B. <code>kubectl logs &lt;pod&gt; --previous</code> · C. <code>kubectl top pod</code> · D. <code>kubectl apply -f</code></p>
<p><strong>9.</strong> Container bị <code>OOMKilled</code>. Trường manifest nào liên quan trực tiếp?<br>A. <code>resources.requests.cpu</code> · B. <code>resources.limits.memory</code> · C. <code>readinessProbe</code> · D. <code>replicas</code></p>
<p><strong>10.</strong> Muốn pod chưa sẵn sàng thì không nhận traffic từ Service. Dùng gì?<br>A. <code>livenessProbe</code> · B. <code>readinessProbe</code> · C. <code>startupProbe</code> · D. <code>initContainer</code></p>
<hr>
<h2 id="06-cau-hoi-on-tap/domain-2-data-services-cau-1122">Domain 2 — Data services (câu 11–22)</h2>
<p><strong>11.</strong> Cách đọc rẻ nhất một item trong Cosmos DB khi biết <code>id</code> và partition key?<br>A. <code>query_items</code> với <code>SELECT *</code> · B. <code>read_item</code> (point read) · C. Change feed · D. <code>read_all_items</code></p>
<p><strong>12.</strong> Ứng dụng đọc nhiều, chấp nhận trễ vài giây, muốn giảm RU. Đổi gì?<br>A. Strong → Session · B. Session → Strong · C. Tăng RU/s · D. Bật multi-region write</p>
<p><strong>13.</strong> Document chứa trường <code>embedding</code> 1536 số. Ghi rất tốn RU. Sửa gì?<br>A. Giảm chiều embedding xuống 2 · B. Thêm <code>/embedding/*</code> vào <code>excludedPaths</code> · C. Đổi partition key · D. Bật autoscale</p>
<p><strong>14.</strong> Vector index nào phù hợp nhất cho 50 triệu vector 1536 chiều trong Cosmos DB NoSQL?<br>A. <code>flat</code> · B. <code>quantizedFlat</code> · C. <code>diskANN</code> · D. Không cần index</p>
<p><strong>15.</strong> Query nào dùng được vector index?<br>A. <code>SELECT c.id, VectorDistance(c.e,@v) FROM c</code><br>B. <code>SELECT TOP 5 c.id FROM c WHERE VectorDistance(c.e,@v) &lt; 0.3</code><br>C. <code>SELECT TOP 5 c.id, VectorDistance(c.e,@v) s FROM c ORDER BY VectorDistance(c.e,@v)</code><br>D. <code>SELECT c.id FROM c ORDER BY c.createdAt</code></p>
<p><strong>16.</strong> Bạn cần sinh embedding cho mọi document mới/được cập nhật trong Cosmos DB. Giải pháp ít code nhất?<br>A. Timer Function quét toàn bộ container · B. Cosmos DB trigger Function (change feed) + lease container · C. Event Grid trên Cosmos · D. Polling từ Container App</p>
<p><strong>17.</strong> Hai xử lý downstream khác nhau cùng đọc change feed của một container. Cần gì?<br>A. Chung 1 lease container · B. Mỗi xử lý một lease container (hoặc lease prefix) riêng · C. Bật multi-region · D. Chuyển sang all-versions mode</p>
<p><strong>18.</strong> <code>CREATE EXTENSION vector;</code> báo lỗi trên Azure Database for PostgreSQL flexible server. Nguyên nhân?<br>A. Sai tier · B. Chưa thêm <code>vector</code> vào server parameter <code>azure.extensions</code> · C. Thiếu quyền superuser nên không bao giờ chạy được · D. pgvector không hỗ trợ trên Azure</p>
<p><strong>19.</strong> Bảng dùng index <code>USING hnsw (embedding vector_cosine_ops)</code>. Query nào dùng được index?<br>A. <code>ORDER BY embedding &lt;-&gt; $1</code> · B. <code>ORDER BY embedding &lt;=&gt; $1</code> · C. <code>WHERE embedding = $1</code> · D. <code>ORDER BY embedding &lt;#&gt; $1</code></p>
<p><strong>20.</strong> Recall thấp khi RAG có filter <code>WHERE tenant_id=$1</code> rất chọn lọc. Cách cải thiện?<br>A. Giảm <code>hnsw.ef_search</code> · B. Tăng <code>hnsw.ef_search</code> hoặc dùng partial/partition index · C. Bỏ index · D. Đổi sang <code>&lt;-&gt;</code></p>
<p><strong>21.</strong> Azure Functions mở kết nối PostgreSQL mới mỗi lần chạy, server báo hết connection. Sửa gì?<br>A. Tăng vCPU · B. Bật PgBouncer (port 6432) / dùng connection pool · C. Đổi sang Burstable tier · D. Tắt SSL</p>
<p><strong>22.</strong> Cần cache câu trả lời LLM trong 1 giờ và xoá ngay khi tài liệu nguồn thay đổi. Kết hợp nào?<br>A. <code>SET k v EX 3600</code> + <code>DEL</code>/<code>UNLINK</code> khi có event thay đổi · B. Chỉ <code>SET</code> không TTL · C. <code>FLUSHDB</code> định kỳ · D. Dùng <code>noeviction</code> policy</p>
<hr>
<h2 id="06-cau-hoi-on-tap/domain-3-messaging-functions-cau-2332">Domain 3 — Messaging &amp; Functions (câu 23–32)</h2>
<p><strong>23.</strong> Message bị abandon 10 lần sẽ đi đâu?<br>A. Bị xoá · B. Dead-letter queue với lý do <code>MaxDeliveryCountExceeded</code> · C. Quay lại đầu queue mãi mãi · D. Chuyển sang topic</p>
<p><strong>24.</strong> Chế độ nhận nào đảm bảo không mất message nếu consumer crash giữa chừng?<br>A. <code>RECEIVE_AND_DELETE</code> · B. <code>PEEK_LOCK</code> · C. Prefetch · D. Deferral</p>
<p><strong>25.</strong> Subscription mới tạo vẫn nhận mọi message dù đã thêm SQL filter. Vì sao?<br>A. Filter sai cú pháp · B. Chưa xoá rule <code>$Default</code> · C. Cần Premium tier · D. Thiếu session</p>
<p><strong>26.</strong> Chỉ cần khớp chính xác <code>Subject = 'pdf-uploaded'</code>, ưu tiên hiệu năng. Dùng filter nào?<br>A. SQL filter · B. Correlation filter · C. Boolean filter · D. Advanced filter</p>
<p><strong>27.</strong> Yêu cầu FIFO theo từng khách hàng trong Service Bus?<br>A. Bật duplicate detection · B. Dùng sessions với <code>session_id = customerId</code> · C. Tăng prefetch · D. Dùng topic</p>
<p><strong>28.</strong> Handler Event Grid trả HTTP 400. Event Grid làm gì?<br>A. Retry với backoff trong 24h · B. Không retry, chuyển dead-letter (nếu cấu hình) · C. Retry 5 lần · D. Bỏ qua im lặng và báo thành công</p>
<p><strong>29.</strong> Nếu không cấu hình dead-letter cho Event Grid subscription, event giao thất bại hết TTL sẽ?<br>A. Lưu 7 ngày · B. Bị <strong>bỏ vĩnh viễn</strong> · C. Gửi về publisher · D. Chuyển sang Service Bus</p>
<p><strong>30.</strong> Muốn lọc event có <code>data.sizeBytes</code> lớn hơn 1.000.000. Dùng gì?<br>A. Subject filter · B. Event type filter · C. Advanced filter <code>NumberGreaterThan</code> · D. SQL filter</p>
<p><strong>31.</strong> Function embedding chạy 12 phút, thường bị dừng giữa chừng trên Consumption plan. Cách khắc phục tốt nhất?<br>A. Tăng memory · B. Chuyển sang Premium/Flex plan hoặc tách thành Durable/Container Apps Job · C. Bật Always On · D. Giảm log</p>
<p><strong>32.</strong> Cấu hình Function truy cập Service Bus bằng managed identity, app setting đúng là?<br>A. <code>ServiceBusConnection = &lt;connection string&gt;</code><br>B. <code>ServiceBusConnection__fullyQualifiedNamespace = mysb.servicebus.windows.net</code><br>C. <code>ServiceBusConnection__key = ...</code><br>D. <code>AzureWebJobsServiceBus = &lt;SAS&gt;</code></p>
<hr>
<h2 id="06-cau-hoi-on-tap/domain-4-security-monitoring-cau-3340">Domain 4 — Security &amp; Monitoring (câu 33–40)</h2>
<p><strong>33.</strong> App chỉ cần <strong>đọc</strong> secret trong Key Vault (RBAC mode). Gán role nào?<br>A. Key Vault Contributor · B. Key Vault Secrets User · C. Key Vault Secrets Officer · D. Reader</p>
<p><strong>34.</strong> Cần tự động xoay khoá 30 ngày trước khi hết hạn. Kiến trúc nào?<br>A. Timer Function quét mỗi ngày · B. Event Grid <code>Microsoft.KeyVault.SecretNearExpiry</code> → Function tạo khoá mới → <code>set_secret</code> · C. Logic App polling · D. Azure Policy</p>
<p><strong>35.</strong> Muốn secret bị xoá không thể bị purge trước thời hạn giữ. Bật gì?<br>A. Soft delete · B. Purge protection · C. Private endpoint · D. Firewall</p>
<p><strong>36.</strong> Cùng một key cấu hình cần giá trị khác nhau cho dev/staging/prod trong App Configuration. Dùng gì?<br>A. Nhiều store riêng biệt · B. <strong>Label</strong> · C. Prefix khác nhau · D. Snapshot</p>
<p><strong>37.</strong> Cập nhật 5 key rồi muốn app nạp lại một lần, không đọc trạng thái nửa vời. Kỹ thuật?<br>A. Restart app · B. <strong>Sentinel key</strong> + refresh_on · C. Giảm refresh interval xuống 1s · D. Dùng feature flag</p>
<p><strong>38.</strong> Trace bị đứt giữa API và Function. Kiểm tra gì đầu tiên?<br>A. Sampling rate · B. Header <code>traceparent</code> (W3C Trace Context) có được truyền qua không · C. Retention của Log Analytics · D. Region</p>
<p><strong>39.</strong> KQL nào cho P95 latency theo endpoint trong 24h?</p>
<pre><button class="copybtn">copy</button><code>A. AppRequests | summarize avg(DurationMs) by Name
B. AppRequests | where TimeGenerated &gt; ago(24h) | summarize percentile(DurationMs,95) by Name
C. AppDependencies | top 10 by DurationMs
D. AppTraces | count</code></pre>
<p><strong>40.</strong> Bảng nào chứa lệnh gọi ra ngoài (Cosmos DB, Azure OpenAI) trong Application Insights workspace-based?<br>A. <code>AppRequests</code> · B. <code>AppDependencies</code> · C. <code>AppTraces</code> · D. <code>AppExceptions</code></p>
<hr>
<h1 id="06-cau-hoi-on-tap/dap-an-giai-thich">ĐÁP ÁN &amp; GIẢI THÍCH</h1>
<div class="tablewrap"><table><thead><tr><th>#</th><th>Đáp án</th><th>Giải thích ngắn</th></tr></thead><tbody><tr><td>1</td><td><strong>B</strong></td><td><code>az acr build</code> là quick task, build <strong>trên ACR</strong>, không cần Docker daemon local</td></tr><tr><td>2</td><td><strong>B</strong></td><td>Base image update trigger tự rebuild khi image cha thay đổi — cơ chế vá bảo mật OS</td></tr><tr><td>3</td><td><strong>B</strong></td><td>App Service mặc định dò port 80/8080; container port khác phải khai báo <code>WEBSITES_PORT</code></td></tr><tr><td>4</td><td><strong>B</strong></td><td>Managed identity + <code>AcrPull</code> là cách chuẩn; admin user nên tắt</td></tr><tr><td>5</td><td><strong>B</strong></td><td>Image/env var/resource/scale = revision-scope. Secret value, ingress, Dapr = application-scope</td></tr><tr><td>6</td><td><strong>B</strong></td><td>Traffic splitting chỉ hoạt động ở multiple revision mode</td></tr><tr><td>7</td><td><strong>C</strong></td><td>KEDA <code>azure-servicebus</code> scaler; <code>messageCount</code> là số message mục tiêu <strong>mỗi replica</strong></td></tr><tr><td>8</td><td><strong>B</strong></td><td><code>--previous</code> xem log của container đã crash trước đó</td></tr><tr><td>9</td><td><strong>B</strong></td><td>Vượt <code>limits.memory</code> → kernel OOM kill container</td></tr><tr><td>10</td><td><strong>B</strong></td><td>Readiness quyết định có nhận traffic; liveness quyết định có restart</td></tr><tr><td>11</td><td><strong>B</strong></td><td>Point read ~1 RU/KB, rẻ và nhanh nhất</td></tr><tr><td>12</td><td><strong>A</strong></td><td>Strong/Bounded staleness tốn 2× RU đọc; Session/Eventual tốn 1×</td></tr><tr><td>13</td><td><strong>B</strong></td><td>Index mọi phần tử mảng 1536 phần tử làm write RU bùng nổ</td></tr><tr><td>14</td><td><strong>C</strong></td><td>diskANN cho độ trễ thấp ở quy mô lớn; flat giới hạn 505 chiều</td></tr><tr><td>15</td><td><strong>C</strong></td><td>Bắt buộc <code>ORDER BY VectorDistance(...)</code> + <code>TOP</code> thì mới dùng vector index</td></tr><tr><td>16</td><td><strong>B</strong></td><td>Cosmos DB trigger = Change Feed Processor được host sẵn</td></tr><tr><td>17</td><td><strong>B</strong></td><td>Lease container/prefix chung sẽ khiến hai consumer chia nhau thay đổi</td></tr><tr><td>18</td><td><strong>B</strong></td><td>Extension phải được allowlist bằng server parameter <code>azure.extensions</code> trước</td></tr><tr><td>19</td><td><strong>B</strong></td><td><code>&lt;=&gt;</code> là cosine, khớp <code>vector_cosine_ops</code>; <code>&lt;-&gt;</code> cần <code>vector_l2_ops</code></td></tr><tr><td>20</td><td><strong>B</strong></td><td>Filter chọn lọc + ANN → tăng <code>ef_search</code>, hoặc partial index/partition theo tenant</td></tr><tr><td>21</td><td><strong>B</strong></td><td>Serverless mở nhiều kết nối ngắn → PgBouncer (6432) hoặc pool phía app</td></tr><tr><td>22</td><td><strong>A</strong></td><td>TTL cho hết hạn tự nhiên; <code>DEL</code>/<code>UNLINK</code> cho invalidation theo sự kiện</td></tr><tr><td>23</td><td><strong>B</strong></td><td>Vượt <code>MaxDeliveryCount</code> (mặc định 10) → DLQ, reason <code>MaxDeliveryCountExceeded</code></td></tr><tr><td>24</td><td><strong>B</strong></td><td>PEEK_LOCK: chưa <code>complete</code> thì lock hết hạn và message quay lại</td></tr><tr><td>25</td><td><strong>B</strong></td><td>Rule <code>$Default</code> là TrueFilter, phải xoá khi thêm filter riêng</td></tr><tr><td>26</td><td><strong>B</strong></td><td>Correlation filter khớp bằng, hiệu năng cao hơn SQL filter</td></tr><tr><td>27</td><td><strong>B</strong></td><td>Sessions đảm bảo FIFO trong phạm vi <code>SessionId</code></td></tr><tr><td>28</td><td><strong>B</strong></td><td>400/413 (và 401/403/404) được coi là lỗi vĩnh viễn → không retry</td></tr><tr><td>29</td><td><strong>B</strong></td><td>Không có dead-letter endpoint thì event bị drop khi hết retry/TTL</td></tr><tr><td>30</td><td><strong>C</strong></td><td>Advanced filter cho phép so sánh số trên bất kỳ field JSON nào</td></tr><tr><td>31</td><td><strong>B</strong></td><td>Consumption timeout tối đa 10 phút; Premium/Flex hoặc tách job dài</td></tr><tr><td>32</td><td><strong>B</strong></td><td>Identity-based connection dùng hậu tố <code>__fullyQualifiedNamespace</code></td></tr><tr><td>33</td><td><strong>B</strong></td><td>Secrets User = đọc; Officer = quản lý; Contributor = quản resource, không đọc data</td></tr><tr><td>34</td><td><strong>B</strong></td><td>Sự kiện <code>SecretNearExpiry</code> (30 ngày trước hạn) là cơ chế rotation chuẩn</td></tr><tr><td>35</td><td><strong>B</strong></td><td>Purge protection chặn purge sớm; soft delete chỉ cho phép khôi phục</td></tr><tr><td>36</td><td><strong>B</strong></td><td>Label là cơ chế phân biệt môi trường chính thức của App Configuration</td></tr><tr><td>37</td><td><strong>B</strong></td><td>Sentinel key: đổi cuối cùng, app chỉ watch key này rồi nạp lại toàn bộ</td></tr><tr><td>38</td><td><strong>B</strong></td><td>Context propagation W3C <code>traceparent</code> bị mất là nguyên nhân phổ biến nhất</td></tr><tr><td>39</td><td><strong>B</strong></td><td><code>percentile(DurationMs, 95)</code> + lọc thời gian + <code>by Name</code></td></tr><tr><td>40</td><td><strong>B</strong></td><td>Outgoing call = dependency → <code>AppDependencies</code></td></tr></tbody></table></div>
<hr>
<h2 id="06-cau-hoi-on-tap/tu-cham">Tự chấm</h2>
<div class="tablewrap"><table><thead><tr><th>Số câu đúng</th><th>Đánh giá</th></tr></thead><tbody><tr><td>36–40</td><td>Sẵn sàng thi</td></tr><tr><td>30–35</td><td>Ôn lại domain yếu, làm thêm lab</td></tr><tr><td>24–29</td><td>Cần học lại phần lý thuyết của 1–2 domain</td></tr><tr><td>&lt; 24</td><td>Học lại tuần tự theo lộ trình 6 tuần</td></tr></tbody></table></div>
</section>
<section class="doc" id="07-lo-trinh-hoc" data-title="Lộ trình 6 tuần" hidden>
<h1 id="07-lo-trinh-hoc/lo-trinh-hoc-ai-200-trong-6-tuan-10-giotuan">Lộ trình học AI-200 trong 6 tuần (~10 giờ/tuần)</h1>
<h2 id="07-lo-trinh-hoc/nguyen-tac">Nguyên tắc</h2>
<ol><li><strong>Lab trước, lý thuyết sau.</strong> Đề có câu hỏi tương tác/lab → phải gõ lệnh thật, không chỉ đọc.</li><li><strong>Python là ngôn ngữ chính</strong> của đề — luyện SDK bằng Python, không phải C#.</li><li>Mỗi tuần kết thúc bằng một <strong>artefact chạy được</strong> (repo/nhóm resource), không phải ghi chú.</li><li>Dùng <strong>Azure free account</strong> hoặc Visual Studio credit; <strong>xoá resource group sau mỗi lab</strong> để khỏi tốn tiền.</li></ol>
<hr>
<h2 id="07-lo-trinh-hoc/tuan-1-nen-tang-container-domain-1-phan-acr-app-service">Tuần 1 — Nền tảng container (Domain 1, phần ACR + App Service)</h2>
<p><strong>Học:</strong> <a href="#01-container">Container trên Azure</a> mục 1–2.</p>
<p><strong>Lab 1.1 — ACR + ACR Tasks</strong></p>
<pre><button class="copybtn">copy</button><code>az group create -n rg-ai200 -l southeastasia
az acr create -g rg-ai200 -n acrai200$RANDOM --sku Basic
az acr build --registry &lt;acr&gt; --image rag-api:v1 .      # với 1 Dockerfile FastAPI đơn giản
az acr repository show-tags -n &lt;acr&gt; --repository rag-api</code></pre>
<p><strong>Lab 1.2 — App Service container + managed identity + Key Vault reference</strong></p>
<ul><li>Deploy image lên App Service Linux, đặt <code>WEBSITES_PORT</code>.</li><li>Tạo Key Vault, lưu 1 secret, cấu hình app setting bằng <code>@Microsoft.KeyVault(SecretUri=...)</code>.</li><li>Xác nhận app đọc được secret mà không có key nào trong code.</li></ul>
<p><strong>Mục tiêu:</strong> giải thích được toàn bộ chuỗi build → push → pull bằng identity.</p>
<hr>
<h2 id="07-lo-trinh-hoc/tuan-2-container-apps-aks-domain-1-phan-con-lai">Tuần 2 — Container Apps + AKS (Domain 1 phần còn lại)</h2>
<p><strong>Học:</strong> <a href="#01-container">Container trên Azure</a> mục 3–4 và 7.</p>
<p><strong>Lab 2.1 — Container Apps</strong></p>
<ul><li>Tạo environment + app, bật ingress external.</li><li>Deploy v2, bật multiple revision, chia traffic 80/20, kiểm tra bằng <code>curl</code> nhiều lần.</li><li>Thêm scale rule HTTP, rồi thêm scale rule <code>azure-servicebus</code> (dùng lại ở tuần 4).</li><li>Xem <code>az containerapp logs show</code> và bảng <code>ContainerAppConsoleLogs_CL</code>.</li></ul>
<p><strong>Lab 2.2 — AKS</strong></p>
<ul><li>Tạo cluster 2 node với <code>--attach-acr</code>.</li><li>Viết <code>deployment.yaml</code> + <code>service.yaml</code> (có probes, requests/limits), <code>kubectl apply</code>.</li><li>Cố tình gây 3 lỗi và tự chẩn đoán: sai tag image (<code>ImagePullBackOff</code>), <code>limits.memory: 32Mi</code> (<code>OOMKilled</code>), probe sai path.</li></ul>
<p><strong>Mục tiêu:</strong> thuộc bảng chẩn đoán lỗi pod; viết được KEDA scale rule không cần tra cứu.</p>
<hr>
<h2 id="07-lo-trinh-hoc/tuan-3-cosmos-db-for-nosql-vector-search-nua-dau-domain-2">Tuần 3 — Cosmos DB for NoSQL + vector search (nửa đầu Domain 2)</h2>
<p><strong>Học:</strong> <a href="#02-data-services">Data services &amp; Vector</a> mục 1 (Cosmos DB).</p>
<p><strong>Lab 3.1 — RU &amp; indexing</strong></p>
<ul><li>Tạo container, nạp 1000 document, so sánh <code>x-ms-request-charge</code> của: point read vs single-partition query vs cross-partition query.</li><li>Thêm/bớt <code>excludedPaths</code> cho <code>/embedding/*</code>, đo lại write RU.</li><li>Đổi consistency Strong ↔ Session, đo RU đọc.</li></ul>
<p><strong>Lab 3.2 — Vector + RAG</strong></p>
<ul><li>Bật feature vector search, tạo container với vector embedding policy + diskANN index.</li><li>Sinh embedding (Azure OpenAI <code>text-embedding-3-small</code>) cho ~200 đoạn văn bản tiếng Việt.</li><li>Viết query <code>VectorDistance</code> có metadata filter, so sánh có/không <code>ORDER BY</code> về RU.</li></ul>
<p><strong>Lab 3.3 — Change feed</strong></p>
<ul><li>Function với Cosmos DB trigger + lease container, tự sinh embedding cho item mới.</li><li>Chạy 2 instance để thấy phân phối partition.</li></ul>
<hr>
<h2 id="07-lo-trinh-hoc/tuan-4-postgresql-redis-nua-sau-domain-2">Tuần 4 — PostgreSQL + Redis (nửa sau Domain 2)</h2>
<p><strong>Học:</strong> <a href="#02-data-services">Data services &amp; Vector</a> mục 2–3 (PostgreSQL, Redis).</p>
<p><strong>Lab 4.1 — pgvector</strong></p>
<ul><li>Tạo flexible server, thêm <code>vector,pg_diskann</code> vào <code>azure.extensions</code>.</li><li>Tạo bảng <code>doc_chunks</code>, nạp cùng dữ liệu tuần 3.</li><li>Tạo HNSW index, chạy <code>EXPLAIN (ANALYZE, BUFFERS)</code> để xác nhận <strong>Index Scan</strong> (không phải Seq Scan).</li><li>So sánh latency: không index / IVFFlat / HNSW / halfvec; thử <code>hnsw.ef_search</code> 40 vs 200.</li><li>Viết truy vấn RAG có metadata filter JSONB.</li></ul>
<p><strong>Lab 4.2 — Redis</strong></p>
<ul><li>Tạo Azure Managed Redis, cài đặt cache-aside cho câu trả lời LLM (TTL 1h).</li><li>Tạo index RediSearch với VectorField HNSW, chạy KNN query có tag filter.</li><li>Đo tỷ lệ hit bằng <code>INFO stats</code>.</li></ul>
<p><strong>Mục tiêu:</strong> trả lời được "chọn Cosmos hay Postgres hay Redis" cho 5 tình huống bất kỳ.</p>
<hr>
<h2 id="07-lo-trinh-hoc/tuan-5-messaging-functions-domain-3">Tuần 5 — Messaging + Functions (Domain 3)</h2>
<p><strong>Học:</strong> <a href="#03-messaging-functions">Messaging &amp; Functions</a>.</p>
<p><strong>Lab 5.1 — Service Bus</strong></p>
<ul><li>Queue với <code>MaxDeliveryCount=3</code>; viết consumer cố tình fail để đẩy message vào DLQ.</li><li>Đọc DLQ, xem <code>dead_letter_reason</code>, resubmit.</li><li>Topic + 3 subscription với 3 loại filter khác nhau; xoá <code>$Default</code> và quan sát khác biệt.</li><li>Bật sessions, xác nhận thứ tự FIFO theo <code>session_id</code>.</li></ul>
<p><strong>Lab 5.2 — Event Grid</strong></p>
<ul><li>Blob Storage system topic → Function; upload file <code>.pdf</code> và <code>.txt</code>, dùng <code>--subject-ends-with .pdf</code> để lọc.</li><li>Custom topic + advanced filter theo <code>data.lang</code>.</li><li>Cấu hình dead-letter blob container; làm handler trả 500 và quan sát retry rồi dead-letter.</li></ul>
<p><strong>Lab 5.3 — Functions</strong></p>
<ul><li>Function App Python v2 với 4 hàm: HTTP, Timer, Service Bus, Event Grid.</li><li>Chuyển toàn bộ connection string sang <strong>identity-based connection</strong>.</li><li>Deploy bằng <code>func azure functionapp publish</code>, tạo slot và swap.</li></ul>
<hr>
<h2 id="07-lo-trinh-hoc/tuan-6-bao-mat-observability-on-tong-hop-domain-4">Tuần 6 — Bảo mật, observability &amp; ôn tổng hợp (Domain 4)</h2>
<p><strong>Học:</strong> <a href="#04-security-monitoring">Bảo mật &amp; Giám sát</a>.</p>
<p><strong>Lab 6.1 — Key Vault &amp; App Configuration</strong></p>
<ul><li>Vault ở chế độ RBAC, gán Secrets User cho identity của app.</li><li>Đặt <code>expires</code> cho secret → subscribe <code>SecretNearExpiry</code> → Function ghi version mới.</li><li>App Configuration: key theo label <code>dev</code>/<code>prod</code>, 1 feature flag, 1 Key Vault reference, refresh bằng sentinel key.</li></ul>
<p><strong>Lab 6.2 — OpenTelemetry + KQL</strong></p>
<ul><li>Bật <code>configure_azure_monitor()</code> cho API + worker; tạo span thủ công cho <code>embed</code>, <code>vector_search</code>, <code>llm_call</code>.</li><li>Xác nhận Application Map nối được các service.</li><li>Viết đủ 9 query KQL trong <a href="#04-security-monitoring">Bảo mật &amp; Giám sát</a> mục 4.2 trên dữ liệu thật.</li><li>Tạo 1 log alert (error rate &gt; 5%) và 1 metric alert (<code>DeadletteredMessages</code> &gt; 0).</li></ul>
<p><strong>Ôn tập:</strong></p>
<ul><li>Làm <a href="#06-cau-hoi-on-tap">40 câu ôn tập</a>, mục tiêu ≥ 36/40.</li><li>Đọc lại <a href="#05-cheatsheet">Cheat sheet</a> mỗi ngày 15 phút.</li><li>Chạy thử <strong>exam sandbox</strong> để quen giao diện: https://aka.ms/examdemo</li></ul>
<hr>
<h2 id="07-lo-trinh-hoc/du-an-xuyen-suot-nen-lam-goi-gon-4-domain">Dự án xuyên suốt (nên làm — gói gọn 4 domain)</h2>
<p><strong>"RAG document assistant"</strong></p>
<pre><button class="copybtn">copy</button><code>Blob upload
   └─(Event Grid)→ Function chunk_doc
        └─(Service Bus queue)→ Container App embed-worker (KEDA scale 0..30)
              ├→ Cosmos DB NoSQL (vector diskANN)  hoặc  PostgreSQL (pgvector HNSW)
              └→ Redis (cache + semantic cache)
Người dùng → Container App rag-api (ingress) → retrieve + Azure OpenAI → trả lời
Toàn bộ: managed identity + Key Vault + App Configuration
Quan sát: OpenTelemetry → Application Insights → KQL dashboard + alerts</code></pre>
<p>Làm xong dự án này là đã chạm <strong>mọi bullet</strong> trong study guide.</p>
<hr>
<h2 id="07-lo-trinh-hoc/tai-nguyen-bo-sung">Tài nguyên bổ sung</h2>
<div class="tablewrap"><table><thead><tr><th>Loại</th><th>Nguồn</th></tr></thead><tbody><tr><td>Chính thức</td><td><a href="https://learn.microsoft.com/credentials/certifications/resources/study-guides/ai-200" target="_blank" rel="noopener">Study guide AI-200</a> · <a href="https://learn.microsoft.com/credentials/certifications/azure-ai-cloud-developer-associate/" target="_blank" rel="noopener">Trang chứng chỉ</a></td></tr><tr><td>Learning path</td><td>Microsoft Learn — các module của <strong>AZ-204</strong> phủ ~60% nội dung (container, Functions, Key Vault, App Config, messaging)</td></tr><tr><td>Docs cần đọc kỹ</td><td>Cosmos DB vector search · pgvector on Azure PostgreSQL · Azure Managed Redis · Container Apps scaling · Azure Monitor OpenTelemetry</td></tr><tr><td>Sandbox</td><td>https://aka.ms/examdemo</td></tr><tr><td>Hỏi đáp</td><td>Microsoft Q&amp;A, Azure Community Support</td></tr></tbody></table></div>
<h2 id="07-lo-trinh-hoc/truoc-ngay-thi">Trước ngày thi</h2>
<ul><li class="task" data-key="07-lo-trinh-hoc:0"><input type="checkbox">Đọc lại cheat sheet (mục "Con số phải nhớ" và "Bẫy hay gặp")</li><li class="task" data-key="07-lo-trinh-hoc:1"><input type="checkbox">Làm lại 40 câu ôn tập, xem kỹ câu sai</li><li class="task" data-key="07-lo-trinh-hoc:2"><input type="checkbox">Kiểm tra thiết bị/phòng thi nếu thi online (Pearson VUE OnVUE), giấy tờ tuỳ thân</li><li class="task" data-key="07-lo-trinh-hoc:3"><input type="checkbox">Đề chỉ có <strong>tiếng Anh</strong> → nếu cần, xin thêm 30 phút cho người không nói tiếng Anh bản ngữ</li><li class="task" data-key="07-lo-trinh-hoc:4"><input type="checkbox">Đăng nhập bằng <strong>tài khoản MSA cá nhân</strong></li></ul>
<h2 id="07-lo-trinh-hoc/lab-thuc-chien-4-bai">Lab thực chiến — 4 bài tự làm để "sờ" vào cơ chế</h2>
<p>Mỗi lab ~30–45 phút, chỉ cần <code>az</code> CLI và một subscription (dọn tài nguyên ngay sau lab để không tốn tiền — tất cả đặt trong một resource group, xóa một lệnh là sạch). Giá trị nằm ở cột "bạn sẽ quan sát được": đối chiếu hành vi thật với lý thuyết vừa học.</p>
<h3 id="07-lo-trinh-hoc/lab-1-keda">Lab 1 — Xem KEDA đánh thức và co giãn worker theo queue</h3>
<pre><button class="copybtn">copy</button><code>az group create -n rg-lab1 -l southeastasia
az servicebus namespace create -g rg-lab1 -n sblab$RANDOM --sku Standard
az servicebus queue create -g rg-lab1 --namespace-name &lt;ns&gt; -n jobs
az containerapp env create -g rg-lab1 -n envlab
# worker: image mẫu đọc queue, min 0 / max 10, scale rule azure-servicebus messageCount=20
az containerapp create -g rg-lab1 -n worker --environment envlab \\
  --image mcr.microsoft.com/k8se/quickstart:latest --min-replicas 0 --max-replicas 10 \\
  --secrets sb=&lt;connection-string&gt; \\
  --scale-rule-name q --scale-rule-type azure-servicebus \\
  --scale-rule-metadata queueName=jobs messageCount=20 --scale-rule-auth connection=sb
# bơm 1.000 message (script python nhỏ hoặc Service Bus Explorer trong portal) rồi theo dõi:
watch az containerapp replica list -g rg-lab1 -n worker -o table</code></pre>
<p><strong>Bạn sẽ quan sát được:</strong> replica đứng ở 0 → sau ≤30 giây (một chu kỳ polling) nhảy 1 → bậc thang lên ~10 (ceil(1000/20) vượt max); queue cạn thì <em>không</em> co ngay — đợi đúng ~300 giây cửa sổ ổn định rồi mới về 0. Hai con số 30/300 của lý thuyết hiện nguyên hình.</p>
<h3 id="07-lo-trinh-hoc/lab-2-pgvector">Lab 2 — Đo pgvector trước/sau index và núm ef_search</h3>
<pre><button class="copybtn">copy</button><code>az postgres flexible-server create -g rg-lab2 -n pglab$RANDOM --tier GeneralPurpose --sku-name Standard_D2ds_v5
# psql: CREATE EXTENSION vector; tạo bảng docs(id, embedding vector(384));
# nạp 100k vector giả lập (numpy random hoặc generate_series + random())
\\timing on
SELECT id FROM docs ORDER BY embedding &lt;=&gt; '[...]' LIMIT 10;      -- CHƯA có index: seq scan
CREATE INDEX ON docs USING hnsw (embedding vector_cosine_ops);     -- xem thời gian build
SELECT ...;                                                        -- CÓ index: so độ trễ
SET hnsw.ef_search = 200; SELECT ...;                              -- recall/độ trễ đổi thế nào
EXPLAIN ANALYZE SELECT ...;                                        -- nhìn planner chọn index</code></pre>
<p><strong>Bạn sẽ quan sát được:</strong> seq scan hàng trăm ms → index còn vài ms; build index ăn thời gian rõ rệt (thử <code>SET maintenance_work_mem='2GB'</code> trước khi build để so); và nếu cố tình tạo index <code>vector_l2_ops</code> rồi query bằng <code>&lt;=&gt;</code>, <code>EXPLAIN</code> cho thấy planner <strong>bỏ qua index</strong> — bẫy opclass nhìn tận mắt.</p>
<h3 id="07-lo-trinh-hoc/lab-3-dlq">Lab 3 — Nuôi một poison message và đi trọn vòng DLQ</h3>
<pre><button class="copybtn">copy</button><code># queue với max-delivery-count 3 cho nhanh
az servicebus queue create ... -n orders --max-delivery-count 3
# consumer cố tình raise exception với message có body "BAD"
# gửi 5 message thường + 1 message BAD, chạy consumer và xem:
az servicebus queue show ... -n orders --query countDetails
# đọc DLQ (entity path orders/$deadletterqueue) xem DeadLetterReason
# sửa consumer, resubmit message từ DLQ về queue chính</code></pre>
<p><strong>Bạn sẽ quan sát được:</strong> message BAD quay lại đúng 3 lần (DeliveryCount tăng dần) rồi tự biến mất khỏi queue chính và hiện ở <code>deadLetterMessageCount</code>; 5 message thường không hề bị chặn. At-least-once + DLQ từ lý thuyết thành thứ nhìn được bằng mắt.</p>
<h3 id="07-lo-trinh-hoc/lab-4-otel">Lab 4 — Nhìn một trace nối và một trace đứt qua queue</h3>
<pre><button class="copybtn">copy</button><code># hai Function app (producer HTTP → Service Bus → consumer), cùng một Application Insights
# bản A: cả hai dùng Azure Monitor OpenTelemetry Distro → gọi producer, đợi 2 phút
# KQL: union requests, dependencies | where operation_Id == "&lt;id&gt;" | order by timestamp asc
# bản B: consumer tự tạo ServiceBusMessage MỚI copy body (làm rơi Diagnostic-Id) → gọi lại</code></pre>
<p><strong>Bạn sẽ quan sát được:</strong> bản A cho một cây liền mạch producer → queue → consumer chung một <code>operation_Id</code>; bản B cho <strong>hai</strong> operation_Id rời — đúng ca "trace đứt ở queue" trong tài liệu, và giờ bạn biết vá nó nằm ở dòng code nào.</p>
<p>Dọn dẹp sau mỗi lab: <code>az group delete -n rg-labN --yes --no-wait</code>.</p>
</section>
`,it={class:"searchwrap"},ct={class:"wrap"},rt={class:"progressbar"},m="ai200.tasks.v1",gt=Q({__name:"Ai200NotesPage",setup(at){et("ai200","notes");const a=c(),l=c(),s=c(),d=c(),_=c(),b=c(),y=c(),T=c(),E=c(),x=c();let r=[],v="",R=[];const P=n=>{const t=n.cloneNode(!0);return t.querySelectorAll(".ql, .anch").forEach(o=>o.remove()),t.textContent||""},q=n=>[...n.querySelectorAll("h2, h3")].map(t=>({lvl:+t.tagName[1],txt:P(t),id:t.id}));function M(){_.value.innerHTML=r.map(n=>{const t=n.id===v,o=n.dataset.weight?`<span class="w">${g(n.dataset.weight)}</span>`:"";return`<a class="navitem${t?" active":""}" href="#${n.id}"><span>${g(n.dataset.title)}</span>${o}</a>`+(t?'<div class="subnav">'+q(n).filter(e=>e.lvl===2).map(e=>`<a href="#${e.id}">${g(e.txt)}</a>`).join("")+"</div>":"")}).join("")}function B(n){b.value.innerHTML=q(n).map(t=>`<a class="${t.lvl===3?"h3":"h2"}" href="#${t.id}">${g(t.txt)}</a>`).join("")}function k(n,t){const o=r.find(e=>e.id===n)||r[0];if(v=o.id,s.value.hidden=!0,l.value.hidden=!1,r.forEach(e=>e.hidden=e!==o),M(),B(o),y.value.classList.remove("open"),t){const e=document.getElementById(t);if(e){e.scrollIntoView({block:"start"});return}}window.scrollTo(0,0)}function D(){const n=decodeURIComponent(location.hash.slice(1));if(!n)return k(r[0].id,null);k(n.split("/")[0],n.includes("/")?n:null)}function w(){const n=new Set(S(m,[]));a.value.querySelectorAll("li.task").forEach(t=>{const o=t.querySelector("input");o.checked=n.has(t.dataset.key),t.classList.toggle("done",o.checked),o.onchange=()=>{const e=new Set(S(m,[]));o.checked?e.add(t.dataset.key):e.delete(t.dataset.key),X(m,[...e]),t.classList.toggle("done",o.checked),I()}})}function I(){const n=a.value.querySelectorAll("li.task").length,t=S(m,[]).length;E.value.textContent=t+" / "+n+" mục đã xong",T.value.style.width=(n?t/n*100:0)+"%"}function O(){a.value.querySelectorAll(".copybtn").forEach(n=>{n.onclick=t=>{t.stopPropagation(),navigator.clipboard.writeText(n.parentElement.querySelector("code").innerText),n.textContent="đã copy",setTimeout(()=>n.textContent="copy",1200)}})}const N=[];function K(){r.forEach(n=>{n.querySelectorAll("h1,h2,h3,h4,p,li,td,th,pre").forEach(t=>{if(t.querySelector("p,ul,ol,pre,table,li"))return;const o=(t.textContent||"").replace(/\s+/g," ").trim();o.length>3&&N.push({docId:n.id,title:n.dataset.title||"",text:o})})})}function U(){const n=d.value.value.trim().toLowerCase();if(n.length<2){s.value.hidden=!0,l.value.hidden=!1;return}const t=[];for(const e of N)if(e.text.toLowerCase().includes(n)&&(t.push(e),t.length>=60))break;const o=new RegExp("("+n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","ig");s.value.innerHTML=`<p style="color:var(--muted);font-size:13px">${t.length} kết quả cho “${g(d.value.value)}”</p>`+t.map(e=>`<div class="res" data-id="${e.docId}"><div class="doc">${g(e.title)}</div><div class="line">${g(e.text.slice(0,220)).replace(o,"<mark>$1</mark>")}</div></div>`).join(""),s.value.hidden=!1,l.value.hidden=!0,s.value.querySelectorAll(".res").forEach(e=>{e.onclick=()=>{d.value.value="",s.value.hidden=!0,l.value.hidden=!1,location.hash.slice(1)===e.dataset.id?k(e.dataset.id,null):location.hash=e.dataset.id}})}function F(n){n.key==="/"&&document.activeElement!==d.value&&(n.preventDefault(),d.value.focus()),n.key==="Escape"&&(d.value.value="",s.value.hidden=!0,l.value.hidden=!1,d.value.blur())}function V(){const n=r.filter(t=>t.hidden);n.forEach(t=>t.hidden=!1),window.print(),setTimeout(()=>n.forEach(t=>t.hidden=!0),400)}let f=!1;function G(){f||(f=!0,requestAnimationFrame(()=>{const n=[...a.value.querySelectorAll("section.doc:not([hidden]) h2, section.doc:not([hidden]) h3")];let t=null;for(const o of n)o.getBoundingClientRect().top<120&&(t=o);b.value.querySelectorAll("a").forEach(o=>o.classList.toggle("cur",!!t&&o.getAttribute("href")==="#"+t.id)),f=!1}))}function H(){J(async()=>{const{PACKS:n,countByNote:t}=await import("./packs-Bq8B1yOL.js");return{PACKS:n,countByNote:t}},__vite__mapDeps([0,1,2])).then(({PACKS:n,countByNote:t})=>{const o=t(n.ai200);a.value.querySelectorAll("section.doc h2[id], section.doc h3[id]").forEach(e=>{const A=o.get(e.id);if(!A)return;const h=document.createElement("a");h.className="ql",h.href="/ai-200/practice?doc="+encodeURIComponent(e.id),h.target="_blank",h.rel="noopener",h.title=`Luyện ${A} câu hỏi thuộc mục này (mở tab mới)`,h.textContent=`ôn ${A} câu`,e.insertBefore(h,e.querySelector(".anch"))})})}function L(){a.value.style.setProperty("--topbar-h",x.value.offsetHeight+"px")}return W(()=>{r=[...a.value.querySelectorAll("section.doc")],v=r[0].id,K(),H(),w(),O(),I(),D(),L();const n=[[window,"hashchange",D],[window,"resize",L],[window,"scroll",G],[document,"keydown",F]];n.forEach(([t,o,e])=>t.addEventListener(o,e)),R=n.map(([t,o,e])=>()=>t.removeEventListener(o,e))}),j(()=>R.forEach(n=>n())),(n,t)=>{const o=Z("router-link");return tt(),Y("div",{ref_key:"rootEl",ref:a,class:"notes-ai"},[i("div",{ref_key:"topbarEl",ref:x,class:"topbar"},[i("button",{class:"btn menu-btn",onClick:t[0]||(t[0]=e=>y.value.classList.toggle("open"))},"☰"),t[5]||(t[5]=i("div",{class:"brand"},[i("span",{class:"dot"}),u("AI-200 "),i("small",null,"Azure AI Cloud Developer Associate · Tiếng Việt")],-1)),t[6]||(t[6]=i("div",{class:"spacer"},null,-1)),i("div",it,[i("input",{ref_key:"searchEl",ref:d,placeholder:"Tìm trong toàn bộ tài liệu… (/)",autocomplete:"off",onInput:U},null,544)]),p(o,{class:"btn",to:"/ai-200/practice",title:"Mở trang luyện trắc nghiệm"},{default:C(()=>[...t[2]||(t[2]=[u("✎ Trắc nghiệm",-1)])]),_:1}),p(o,{class:"btn",to:"/ai-200/labs",title:"Mở trang lab thực hành"},{default:C(()=>[...t[3]||(t[3]=[u("🧪 Thực hành",-1)])]),_:1}),p(nt),i("button",{class:"btn",title:"In / xuất PDF",onClick:V},"⎙"),p(o,{class:"btn",to:"/"},{default:C(()=>[...t[4]||(t[4]=[u("🏠",-1)])]),_:1})],512),i("div",ct,[i("aside",{ref_key:"sideEl",ref:y},[t[7]||(t[7]=i("div",{class:"navtitle"},"Tiến độ học",-1)),i("div",{ref_key:"pcountEl",ref:E,class:"pcount"},"0 / 0 mục đã xong",512),i("div",rt,[i("div",{ref_key:"pbarEl",ref:T},null,512)]),t[8]||(t[8]=i("div",{class:"navtitle"},"Nội dung",-1)),i("nav",{ref_key:"navEl",ref:_},null,512)],512),i("main",null,[i("div",{ref_key:"resultsEl",ref:s,class:"results",hidden:""},null,512),t[1]||(z(-1,!0),(t[1]=i("article",{ref_key:"articleEl",ref:l,innerHTML:$(ot)},null,8,["innerHTML"])).cacheIndex=1,z(1),t[1])]),i("div",{ref_key:"tocEl",ref:b,class:"toc"},null,512)])],512)}}});export{gt as default};
