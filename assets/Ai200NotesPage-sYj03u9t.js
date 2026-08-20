import{_ as V}from"./ThemeToggle.vue_vue_type_script_setup_true_lang-Bl4gmljo.js";import{d as G,q as U,A as H,c as Q,a as r,h as v,g as k,w as B,Q as N,b as $,j as i,C as f,B as W,O as g,r as j,o as Y}from"./index-y03Or6_w.js";import{u as X}from"./useStudyClock-w9zTaYiI.js";const J=`
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
<h2 id="README/3b-hai-file-html">3b. Hai file HTML</h2>
<p>Giống DP-300: hai file tự chứa, mở thẳng bằng trình duyệt, chạy offline, không cần cài gì.</p>
<pre><button class="copybtn">copy</button><code>xdg-open practice.html
xdg-open notes.html</code></pre>
<p><strong><code>practice.html</code></strong> — luyện thi tương tác, <strong>249 câu</strong> đủ các dạng theo format kỳ thi:</p>
<ul><li>Trắc nghiệm một/nhiều đáp án — 200 câu</li><li><strong>Sắp xếp thứ tự</strong> (build list) 10 câu · <strong>điền vào code</strong> (code completion) 12 câu · <strong>Có/Không series</strong> 12 câu · <strong>case study</strong> 3 bộ / 15 câu</li><li>Chế độ <strong>Đề mô phỏng đầy đủ</strong>: trộn mọi dạng, ~40 câu / 120 phút, chấm theo domain <strong>và</strong> theo dạng câu hỏi</li><li>Ghi nhớ câu sai (localStorage) → chế độ "Ôn câu đã sai"</li></ul>
<p><strong><code>notes.html</code></strong> — toàn bộ tài liệu ở trên trong một trang: thanh điều hướng trái, mục lục phải, tìm kiếm bằng phím <code>/</code>, checkbox tiến độ học, nút copy cho mọi khối code.</p>
<p>Ngân hàng câu hỏi nằm ngay trong <code>practice.html</code> (các mảng <code>QUESTIONS</code>, <code>ORDER</code>, <code>FILL</code>, <code>YESNO</code>, <code>CASES</code> ở đầu thẻ <code>&lt;script&gt;</code>), nội dung tài liệu nằm ngay trong <code>notes.html</code> (mỗi tài liệu là một <code>&lt;section class="doc"&gt;</code>, heading có sẵn <code>id</code> để link neo). Sửa trực tiếp trong file HTML, không có bước build và không có file nguồn nào khác cần đồng bộ.</p>
<h2 id="README/4-chi-tiet-noi-dung-thi-dich-nguyen-van-outline">4. Chi tiết nội dung thi (dịch nguyên văn outline)</h2>
<h3 id="README/domain-1-develop-containerized-solutions-on-azure-2025">Domain 1 — Develop containerized solutions on Azure (20–25%)</h3>
<p><strong>Implement container application hosting</strong></p>
<ul><li>Build, store, version, manage container image bằng <strong>Azure Container Registry</strong></li><li>Build và run image bằng <strong>ACR Tasks</strong></li><li>Deploy container lên <strong>Azure App Service</strong>, gồm cấu hình environment variables và secrets</li></ul>
<p><strong>Implement container-orchestrated solutions</strong></p>
<ul><li>Deploy app lên <strong>Azure Container Apps</strong>: cấu hình environment, quản lý <strong>revision</strong></li><li>Event-driven scaling bằng <strong>KEDA</strong> trong Container Apps</li><li>Deploy &amp; quản lý app trên <strong>AKS</strong> bằng <strong>manifest files</strong></li><li>Monitor/troubleshoot AKS và Container Apps: logs, events, end-to-end connectivity</li></ul>
<h3 id="README/domain-2-develop-ai-solutions-by-using-azure-data-management">Domain 2 — Develop AI solutions by using Azure data management services (25–30%)</h3>
<p><strong>Azure Cosmos DB for NoSQL</strong></p>
<ul><li>Kết nối bằng SDK và chạy query</li><li>Tối ưu query performance &amp; <strong>RU</strong> bằng indexing policy và consistency level</li><li>Lưu/truy xuất <strong>embeddings</strong>, thực hiện <strong>vector similarity search</strong> cho semantic retrieval</li><li>Cài đặt <strong>change feed processor</strong> để phát hiện item mới/được cập nhật</li></ul>
<p><strong>Azure Database for PostgreSQL</strong></p>
<ul><li>Kết nối và query bằng SDK</li><li>Model schema + indexing strategy (thiết kế bảng, chọn data type phù hợp)</li><li>Indexing strategy: giảm query latency, giảm <strong>pgvector compute overhead</strong></li><li>Cấu hình compute, memory, storage cho vector workload</li><li>Vector similarity search: lưu embeddings, semantic retrieval, <strong>RAG với metadata filter</strong></li><li>Tối ưu connection để tăng throughput, giảm latency</li></ul>
<p><strong>Azure Managed Redis</strong></p>
<ul><li>Data operations: caching, expiration, invalidation</li><li><strong>Vector indexing</strong> để similarity search</li></ul>
<h3 id="README/domain-3-connect-to-and-consume-azure-services-2025">Domain 3 — Connect to and consume Azure services (20–25%)</h3>
<p><strong>Event- and message-based AI solutions</strong></p>
<ul><li><strong>Azure Service Bus</strong>: queue/xử lý back-end operations, <strong>dead-letter queue</strong>, messages, topics, subscriptions</li><li><strong>Azure Event Grid</strong>: event-driven workflow, filters, custom events, retries</li></ul>
<p><strong>Azure Functions</strong></p>
<ul><li>Serverless API: <strong>triggers và bindings</strong></li><li>Cấu hình và deploy function app</li></ul>
<h3 id="README/domain-4-secure-monitor-and-troubleshoot-azure-solutions-202">Domain 4 — Secure, monitor, and troubleshoot Azure solutions (20–25%)</h3>
<p><strong>Implement secure Azure solutions</strong></p>
<ul><li><strong>Azure Key Vault</strong>: bảo vệ secrets, rotation, retrieval</li><li><strong>Azure App Configuration</strong>: lưu/đọc cấu hình app</li></ul>
<p><strong>Monitor and troubleshoot</strong></p>
<ul><li><strong>Distributed tracing với OpenTelemetry SDKs</strong></li><li>Viết <strong>KQL</strong> để phân tích logs và metrics</li></ul>
<h2 id="README/5-ghi-chu-cua-microsoft-ve-cach-ra-de">5. Ghi chú của Microsoft về cách ra đề</h2>
<ul><li>Các bullet dưới mỗi skill chỉ <strong>minh hoạ</strong> cách đánh giá — chủ đề liên quan vẫn có thể xuất hiện.</li><li>Phần lớn câu hỏi về tính năng <strong>GA</strong>; tính năng <strong>Preview</strong> vẫn có thể xuất hiện nếu phổ biến.</li></ul>
<h2 id="README/6-tai-nguyen-chinh-thuc">6. Tài nguyên chính thức</h2>
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
<hr>
<h2 id="01-container/2-azure-app-service-cho-container">2. Azure App Service cho container</h2>
<h3 id="01-container/21-deploy">2.1 Deploy</h3>
<pre><button class="copybtn">copy</button><code>az appservice plan create -g rg -n plan1 --is-linux --sku P1V3
az webapp create -g rg -p plan1 -n rag-web \\
  --deployment-container-image-name myacr.azurecr.io/ai/rag-api:1.0.0

# Cập nhật image sau này
az webapp config container set -g rg -n rag-web \\
  --docker-custom-image-name myacr.azurecr.io/ai/rag-api:1.1.0 \\
  --docker-registry-server-url https://myacr.azurecr.io</code></pre>
<h3 id="01-container/22-environment-variables-secrets-diem-thi-truc-tiep">2.2 Environment variables &amp; secrets (điểm thi trực tiếp)</h3>
<ul><li><strong>App settings = environment variables</strong> trong container. Đặt qua CLI/portal/ARM, container đọc bằng <code>os.environ</code>.</li><li>Container phải lắng nghe đúng port; nếu không phải 80 → set <strong><code>WEBSITES_PORT</code></strong>.</li><li>Secrets <strong>không hard-code</strong>: dùng <strong>Key Vault reference</strong>.</li></ul>
<pre><button class="copybtn">copy</button><code>az webapp config appsettings set -g rg -n rag-web --settings \\
  WEBSITES_PORT=8000 \\
  COSMOS_ENDPOINT=https://mycosmos.documents.azure.com:443/ \\
  AZURE_OPENAI_KEY="@Microsoft.KeyVault(SecretUri=https://mykv.vault.azure.net/secrets/aoai-key/)"</code></pre>
<p>Điều kiện để Key Vault reference hoạt động:</p>
<ol><li>Web app có <strong>managed identity</strong></li><li>Identity được cấp quyền đọc secret (RBAC: <strong>Key Vault Secrets User</strong>)</li><li>Cú pháp đúng: <code>@Microsoft.KeyVault(SecretUri=...)</code> hoặc <code>@Microsoft.KeyVault(VaultName=...;SecretName=...)</code></li></ol>
<p>Ghi chú thêm:</p>
<ul><li><strong>Deployment slots</strong>: swap để zero-downtime; app setting có thể đánh dấu <strong>slot setting</strong> (không swap theo).</li><li><strong>Sidecar containers</strong> cho Linux App Service: gắn thêm container phụ (vd OTel collector) cạnh app chính.</li><li><strong>Health check</strong> path giúp App Service loại instance lỗi khỏi load balancer.</li><li><strong>Always On</strong> để tránh cold start; App Service Logs → <code>az webapp log tail</code>.</li></ul>
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
<ul><li><strong>Revision suffix</strong> (<code>--revision-suffix v2</code>) để đặt tên revision dễ đọc.</li><li>Secrets: khai báo ở app level, tham chiếu bằng <code>secretref:&lt;name&gt;</code>; hoặc lấy trực tiếp từ Key Vault: <code>--secrets "aoai=keyvaultref:https://kv.vault.azure.net/secrets/aoai,identityref:system"</code>.</li></ul>
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
<h3 id="01-container/34-networking-tinh-nang-khac">3.4 Networking &amp; tính năng khác</h3>
<ul><li><strong>Ingress</strong>: <code>external</code> (public) / <code>internal</code> (chỉ trong environment) / tắt (worker không nhận HTTP).</li><li>Ingress hỗ trợ HTTP/1.1, HTTP/2, gRPC (<code>--transport http2</code>), và session affinity.</li><li><strong>Dapr</strong> tích hợp sẵn: service invocation, pub/sub, state store, bindings — bật bằng <code>--enable-dapr</code>.</li><li>Managed identity (system/user-assigned) để pull ACR và gọi Cosmos DB/Key Vault không cần key.</li></ul>
<hr>
<h2 id="01-container/4-azure-kubernetes-service-aks-voi-manifest-files">4. Azure Kubernetes Service (AKS) với manifest files</h2>
<h3 id="01-container/41-luong-lam-viec">4.1 Luồng làm việc</h3>
<pre><button class="copybtn">copy</button><code>az aks create -g rg -n myaks --node-count 2 --enable-managed-identity \\
  --attach-acr myacr --enable-addons monitoring --generate-ssh-keys
az aks get-credentials -g rg -n myaks       # ghi kubeconfig
kubectl apply -f deployment.yaml -f service.yaml
kubectl get pods,svc</code></pre>
<p><code>--attach-acr</code> = tự cấp <code>AcrPull</code> cho kubelet identity (không cần imagePullSecret).</p>
<h3 id="01-container/42-manifest-mau-can-doc-hieu-nhanh">4.2 Manifest mẫu cần đọc-hiểu nhanh</h3>
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
<h3 id="01-container/43-troubleshooting-aks-container-apps-thi-rat-sat">4.3 Troubleshooting AKS / Container Apps (thi rất sát)</h3>
<div class="tablewrap"><table><thead><tr><th>Triệu chứng</th><th>Lệnh / hướng xử lý</th></tr></thead><tbody><tr><td>Pod <code>Pending</code></td><td><code>kubectl describe pod</code> → thiếu resource/node → scale node pool, giảm <code>requests</code></td></tr><tr><td><code>ImagePullBackOff</code></td><td>Sai tag/registry hoặc thiếu quyền <code>AcrPull</code> → <code>kubectl describe pod</code>, kiểm tra <code>--attach-acr</code></td></tr><tr><td><code>CrashLoopBackOff</code></td><td><code>kubectl logs &lt;pod&gt; --previous</code> để xem log lần chạy trước khi crash</td></tr><tr><td><code>OOMKilled</code></td><td>Vượt <code>memory limit</code> → tăng limit hoặc giảm batch size khi embed</td></tr><tr><td>Probe fail liên tục</td><td>Kiểm tra path/port <code>readinessProbe</code>, <code>initialDelaySeconds</code> quá ngắn</td></tr><tr><td>Cần vào bên trong container</td><td><code>kubectl exec -it &lt;pod&gt; -- /bin/sh</code></td></tr><tr><td>Kiểm tra event cluster</td><td><code>kubectl get events --sort-by=.lastTimestamp</code></td></tr><tr><td>Kết nối end-to-end</td><td><code>kubectl run tmp --rm -it --image=curlimages/curl -- curl http://rag-api/healthz</code> (test DNS + service)</td></tr><tr><td>Log tập trung</td><td><strong>Container Insights</strong> → bảng <code>ContainerLogV2</code>, <code>KubePodInventory</code>, <code>KubeEvents</code> trong Log Analytics</td></tr></tbody></table></div>
<p>Container Apps:</p>
<pre><button class="copybtn">copy</button><code>az containerapp logs show -g rg -n rag-api --follow            # log ứng dụng (stdout/stderr)
az containerapp logs show -g rg -n rag-api --type system       # log hệ thống (scaling, provisioning)
az containerapp exec -g rg -n rag-api --command /bin/sh
az containerapp replica list -g rg -n rag-api -o table</code></pre>
<p>Bảng log của Container Apps trong Log Analytics: <strong><code>ContainerAppConsoleLogs_CL</code></strong> (stdout/stderr app) và <strong><code>ContainerAppSystemLogs_CL</code></strong> (sự kiện hệ thống). Với Azure Monitor mới: <code>AppEnvSpringAppConsoleLogs</code>/<code>ContainerAppConsoleLogs</code>.</p>
<hr>
<h2 id="01-container/5-chon-dich-vu-compute-bang-quyet-dinh">5. Chọn dịch vụ compute — bảng quyết định</h2>
<div class="tablewrap"><table><thead><tr><th>Yêu cầu</th><th>Chọn</th></tr></thead><tbody><tr><td>Web app/API, muốn deployment slot, không cần orchestration</td><td><strong>App Service (container)</strong></td></tr><tr><td>Microservice/worker, scale-to-zero, event-driven, không muốn quản K8s</td><td><strong>Azure Container Apps</strong></td></tr><tr><td>Cần toàn quyền K8s: CRD, service mesh, GPU node pool tuỳ biến, Helm phức tạp</td><td><strong>AKS</strong></td></tr><tr><td>Job batch ngắn, chạy 1 lần / theo cron</td><td><strong>Container Apps Jobs</strong> hoặc <strong>AKS Job</strong></td></tr><tr><td>Hàm nhỏ, trigger theo event, pay-per-execution</td><td><strong>Azure Functions</strong> (Domain 3)</td></tr></tbody></table></div>
<hr>
<h2 id="01-container/6-checklist-on-domain-1">6. Checklist ôn Domain 1</h2>
<ul><li class="task" data-key="01-container:0"><input type="checkbox">Phân biệt SKU ACR và tính năng chỉ có ở Premium</li><li class="task" data-key="01-container:1"><input type="checkbox">Viết được <code>az acr build</code> và giải thích base image update trigger</li><li class="task" data-key="01-container:2"><input type="checkbox">Cấu hình App Service pull ACR bằng managed identity + <code>WEBSITES_PORT</code></li><li class="task" data-key="01-container:3"><input type="checkbox">Cú pháp Key Vault reference trong app settings</li><li class="task" data-key="01-container:4"><input type="checkbox">Hiểu revision, revision-scope vs application-scope, traffic splitting</li><li class="task" data-key="01-container:5"><input type="checkbox">Viết được KEDA scale rule <code>azure-servicebus</code> (metadata + auth)</li><li class="task" data-key="01-container:6"><input type="checkbox">Đọc-sửa được manifest Deployment/Service, biết requests vs limits, readiness vs liveness</li><li class="task" data-key="01-container:7"><input type="checkbox">Nhớ bảng chẩn đoán lỗi pod và các lệnh log/exec cho cả AKS và ACA</li></ul>
</section>
<section class="doc" id="02-data-services" data-title="2. Data services &amp; Vector" data-weight="25–30%" hidden>
<h1 id="02-data-services/domain-2-xay-dung-ai-solution-voi-azure-data-management-serv">Domain 2 — Xây dựng AI solution với Azure data management services (25–30%)</h1>
<p>Domain nặng điểm nhất. Trọng tâm: <strong>vector search + RAG</strong> trên ba dịch vụ: Cosmos DB for NoSQL, Azure Database for PostgreSQL, Azure Managed Redis.</p>
<hr>
<h2 id="02-data-services/phan-a-azure-cosmos-db-for-nosql">Phần A. Azure Cosmos DB for NoSQL</h2>
<h3 id="02-data-services/a1-ket-noi-bang-sdk-python">A1. Kết nối bằng SDK (Python)</h3>
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
<h3 id="02-data-services/a2-toi-uu-ru-chu-de-chac-chan-co-trong-de">A2. Tối ưu RU (chủ đề chắc chắn có trong đề)</h3>
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
<h3 id="02-data-services/a3-vector-search-trong-cosmos-db-for-nosql">A3. Vector search trong Cosmos DB for NoSQL</h3>
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
<p><strong>Truy vấn semantic search + metadata filter (đúng chuẩn RAG):</strong></p>
<pre><button class="copybtn">copy</button><code>SELECT TOP 5
       c.id, c.title, c.chunk,
       VectorDistance(c.embedding, @queryVector) AS similarityScore
FROM   c
WHERE  c.tenantId = @tenant AND c.lang = 'vi'
ORDER BY VectorDistance(c.embedding, @queryVector)</code></pre>
<p>Quy tắc quan trọng:</p>
<ul><li>Phải có <strong><code>ORDER BY VectorDistance(...)</code></strong> thì vector index mới được dùng. Nếu chỉ để trong <code>SELECT</code>/<code>WHERE</code> → brute force, RU cao.</li><li>Không đặt <code>VectorDistance</code> trong <code>WHERE</code> kèm ngưỡng nếu muốn dùng index; hãy <code>ORDER BY</code> + <code>TOP N</code> rồi lọc theo score ở phía client.</li><li><code>TOP N</code> bắt buộc để giới hạn kết quả.</li><li>Đặt filter metadata (<code>tenantId</code>, <code>lang</code>, <code>docType</code>) vào <code>WHERE</code> → <strong>pre-filter</strong>, giảm RU đáng kể.</li><li>Có <code>VectorDistance(v1, v2, false, {'distanceFunction':'cosine','dataType':'float32'})</code> để override khi cần.</li><li><strong>Full-text &amp; hybrid search</strong>: Cosmos DB NoSQL còn có <code>FullTextScore</code> (BM25) và <strong><code>RRF()</code></strong> (Reciprocal Rank Fusion) để kết hợp keyword + semantic — xem A3b ngay dưới.</li></ul>
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
<h3 id="02-data-services/a3b-full-text-va-hybrid-search">A3b. Full-text search và hybrid search (RRF)</h3>
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
<h3 id="02-data-services/a4-change-feed">A4. Change feed</h3>
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
<hr>
<h2 id="02-data-services/phan-b-azure-database-for-postgresql-flexible-server">Phần B. Azure Database for PostgreSQL (flexible server)</h2>
<h3 id="02-data-services/b1-ket-noi-toi-uu-connection">B1. Kết nối &amp; tối ưu connection</h3>
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
<h3 id="02-data-services/b2-pgvector-thiet-lap">B2. pgvector — thiết lập</h3>
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
<h3 id="02-data-services/b3-index-cho-vector-giam-latency-compute-overhead">B3. Index cho vector — giảm latency &amp; compute overhead</h3>
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
<h3 id="02-data-services/b4-cau-hinh-compute-memory-storage-cho-vector-workload">B4. Cấu hình compute / memory / storage cho vector workload</h3>
<ul><li><strong>Tiers</strong>: Burstable (dev) → <strong>General Purpose</strong> (đa số production) → <strong>Memory Optimized</strong> (khuyến nghị cho vector: HNSW cần <strong>index nằm gọn trong RAM</strong> để tránh đọc disk).</li><li>Quy tắc ước lượng: kích thước index HNSW ≈ số vector × chiều × 4 byte × ~1.3–2. 1M vector 1536 chiều ≈ 6 GB dữ liệu + ~8–12 GB index → cần instance ≥ 32 GB RAM (hoặc chuyển DiskANN/halfvec).</li><li><strong>Storage</strong>: IOPS gắn với dung lượng đĩa; workload build index nặng I/O → chọn <strong>Premium SSD v2</strong> để tách IOPS/throughput khỏi size.</li><li><code>shared_buffers</code> ≈ 25% RAM, <code>effective_cache_size</code> ≈ 75% RAM, <code>work_mem</code> đủ cho sort/hash (cẩn thận nhân theo số connection).</li><li>Bật <strong>High Availability (zone-redundant)</strong> cho production, read replica để tách tải đọc RAG.</li></ul>
<h3 id="02-data-services/b5-rag-voi-metadata-filter-nguyen-van-trong-outline">B5. RAG với metadata filter (nguyên văn trong outline)</h3>
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
<hr>
<h2 id="02-data-services/phan-c-azure-managed-redis">Phần C. Azure Managed Redis</h2>
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
<h3 id="02-data-services/c1-caching-expiration-invalidation">C1. Caching, expiration, invalidation</h3>
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
<h3 id="02-data-services/c2-vector-index-voi-redisearch">C2. Vector index với RediSearch</h3>
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
<hr>
<h2 id="02-data-services/d-so-sanh-nhanh-3-vector-store-cau-hoi-chon-dich-vu-nao">D. So sánh nhanh 3 vector store (câu hỏi "chọn dịch vụ nào")</h2>
<div class="tablewrap"><table><thead><tr><th>Tiêu chí</th><th>Cosmos DB for NoSQL</th><th>PostgreSQL + pgvector</th><th>Azure Managed Redis</th></tr></thead><tbody><tr><td>Mô hình</td><td>Document NoSQL, global distribution</td><td>Quan hệ, SQL đầy đủ, JOIN</td><td>Key-value in-memory</td></tr><tr><td>Vector index</td><td>flat / quantizedFlat / <strong>diskANN</strong></td><td>HNSW / IVFFlat / <strong>DiskANN</strong></td><td>FLAT / <strong>HNSW</strong></td></tr><tr><td>Điểm mạnh</td><td>Scale ngang cực lớn, multi-region write, change feed, SLA độ trễ</td><td>Truy vấn phức tạp, transaction, filter SQL mạnh, chi phí tốt</td><td>Latency &lt; ms, semantic cache, session</td></tr><tr><td>Điểm yếu</td><td>Cần hiểu RU &amp; partition key</td><td>Scale ngang khó hơn, phải quản index/vacuum</td><td>RAM đắt, không bền vững bằng</td></tr><tr><td>Chọn khi</td><td>App toàn cầu, khối lượng ghi lớn, cần change feed</td><td>Đã có dữ liệu quan hệ, cần filter/JOIN phong phú</td><td>Cần cache/độ trễ cực thấp cho tầng nóng</td></tr></tbody></table></div>
<hr>
<h2 id="02-data-services/e-checklist-on-domain-2">E. Checklist ôn Domain 2</h2>
<ul><li class="task" data-key="02-data-services:0"><input type="checkbox">Point read vs single-partition query vs cross-partition query — chi phí RU</li><li class="task" data-key="02-data-services:1"><input type="checkbox">Sửa được indexing policy: exclude <code>/embedding/*</code>, thêm composite index, thêm vectorIndexes</li><li class="task" data-key="02-data-services:2"><input type="checkbox">Thuộc bảng consistency level và hệ số RU 2× của Strong/Bounded staleness</li><li class="task" data-key="02-data-services:3"><input type="checkbox">Viết được query <code>VectorDistance</code> + <code>ORDER BY</code> + <code>TOP</code> + metadata filter</li><li class="task" data-key="02-data-services:4"><input type="checkbox">Change feed: lease container, 2 mode, idempotent, Functions trigger</li><li class="task" data-key="02-data-services:5"><input type="checkbox"><code>azure.extensions</code> trước khi <code>CREATE EXTENSION vector</code></li><li class="task" data-key="02-data-services:6"><input type="checkbox">Toán tử <code>&lt;=&gt;</code> ↔ <code>vector_cosine_ops</code>; tham số <code>m</code>, <code>ef_construction</code>, <code>hnsw.ef_search</code>, <code>lists</code>, <code>probes</code></li><li class="task" data-key="02-data-services:7"><input type="checkbox"><code>halfvec</code>/DiskANN để giảm RAM &amp; compute; Memory Optimized tier cho HNSW</li><li class="task" data-key="02-data-services:8"><input type="checkbox">PgBouncer port 6432 / connection pool cho serverless</li><li class="task" data-key="02-data-services:9"><input type="checkbox">Redis: <code>SET ... EX</code>, <code>TTL</code>, <code>UNLINK</code>, eviction policy, <code>FT.CREATE</code> với VectorField + KNN dialect 2</li></ul>
</section>
<section class="doc" id="03-messaging-functions" data-title="3. Messaging &amp; Functions" data-weight="20–25%" hidden>
<h1 id="03-messaging-functions/domain-3-ket-noi-va-su-dung-cac-dich-vu-azure-2025">Domain 3 — Kết nối và sử dụng các dịch vụ Azure (20–25%)</h1>
<p>Gồm 2 nhóm: <strong>messaging/eventing</strong> (Service Bus, Event Grid) và <strong>Azure Functions</strong>.</p>
<hr>
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
<ul><li><code>PEEK_LOCK</code> (mặc định): khoá message trong <code>LockDuration</code> (mặc định 30 giây, tối đa 5 phút). Xử lý lâu → <code>receiver.renew_message_lock(msg)</code>. Mất lock → message quay lại queue → <strong>xử lý phải idempotent</strong>.</li><li><code>RECEIVE_AND_DELETE</code>: xoá ngay khi nhận, nhanh nhưng <strong>mất message nếu crash</strong> (at-most-once).</li></ul>
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
<hr>
<h2 id="03-messaging-functions/3-azure-event-grid">3. Azure Event Grid</h2>
<h3 id="03-messaging-functions/31-mo-hinh">3.1 Mô hình</h3>
<ul><li><strong>Publisher</strong> → <strong>Topic</strong> (system / custom / domain) → <strong>Event Subscription</strong> (có filter) → <strong>Handler</strong>.</li><li><strong>System topics</strong>: sự kiện từ dịch vụ Azure (Blob Storage <code>BlobCreated</code>, Cosmos DB, Container Registry <code>ImagePushed</code>, Key Vault <code>SecretNearExpiry</code>, Event Hubs…).</li><li><strong>Custom topic</strong>: ứng dụng tự publish event của mình.</li><li><strong>Domain</strong>: gom hàng nghìn topic cho multi-tenant, quản lý chung một endpoint.</li><li><strong>Event Grid Namespace</strong> (thế hệ mới): hỗ trợ <strong>MQTT</strong> và <strong>pull delivery</strong> (consumer tự kéo bằng HTTP), khác với push truyền thống.</li></ul>
<p>Handler: Azure Functions (Event Grid trigger), Webhook, Event Hubs, Service Bus queue/topic, Storage Queue, Hybrid Connections, Azure Automation.</p>
<h3 id="03-messaging-functions/32-schema-su-kien">3.2 Schema sự kiện</h3>
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
<h3 id="03-messaging-functions/33-filtering">3.3 Filtering</h3>
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
<h3 id="03-messaging-functions/34-retry-dead-letter-muc-retries-trong-outline">3.4 Retry &amp; dead-letter (mục "retries" trong outline)</h3>
<ul><li>Event Grid retry theo <strong>exponential backoff</strong>: 10s, 30s, 1m, 5m, 10m, 30m, 1h… trong tối đa <strong>24 giờ</strong> (mặc định) hoặc <code>--max-delivery-attempts</code> (mặc định <strong>30</strong>).</li><li><strong>Retry policy</strong> = min(số lần thử, TTL) — điều kiện nào đến trước thì dừng.</li><li>Mã trả về của handler quyết định:</li><li style="margin-left:14px"><strong>2xx</strong> → thành công.</li><li style="margin-left:14px"><strong>400, 413, 401, 403, 404</strong> → <strong>không retry</strong> (một số mã bị coi là lỗi cấu hình/lỗi vĩnh viễn) → đi thẳng dead-letter.</li><li style="margin-left:14px"><strong>408, 429, 5xx</strong> → retry.</li><li><strong>Dead-letter</strong> phải cấu hình <strong>Storage blob container</strong>; nếu không cấu hình, event hết hạn sẽ <strong>bị bỏ (dropped) vĩnh viễn</strong>. Có độ trễ ~5 phút trước khi ghi dead-letter.</li><li><strong>Output batching</strong> (<code>--max-events-per-batch</code>, <code>--preferred-batch-size-in-kilobytes</code>) tăng throughput.</li><li><strong>Delivery với managed identity</strong> thay vì key khi handler là Service Bus/Event Hubs/Storage.</li></ul>
<p><strong>Webhook validation handshake</strong> (câu hỏi hay gặp): khi tạo subscription tới webhook tự viết, Event Grid gửi <code>Microsoft.EventGrid.SubscriptionValidationEvent</code>; endpoint phải trả về <code>validationCode</code> trong 200 OK (validation đồng bộ) <strong>hoặc</strong> gọi <code>validationUrl</code> (validation thủ công). Nếu handler là Azure Function với Event Grid trigger / Logic Apps thì việc này tự động.</p>
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
<h3 id="03-messaging-functions/43-hosting-plan-chon-dung-plan-la-cau-hoi-kinh-dien">4.3 Hosting plan — chọn đúng plan là câu hỏi kinh điển</h3>
<div class="tablewrap"><table><thead><tr><th>Plan</th><th>Đặc điểm</th><th>Chọn khi</th></tr></thead><tbody><tr><td><strong>Consumption</strong></td><td>Pay-per-execution, scale-to-zero, <strong>cold start</strong>, timeout mặc định 5 phút (tối đa 10)</td><td>Workload rời rạc, chi phí thấp nhất</td></tr><tr><td><strong>Flex Consumption</strong></td><td>Serverless thế hệ mới: <strong>always-ready instances</strong> (giảm cold start), VNet integration, chọn instance memory, concurrency điều chỉnh được</td><td>Mặc định nên chọn cho serverless mới cần VNet/độ trễ ổn định</td></tr><tr><td><strong>Premium (EP)</strong></td><td>Pre-warmed instance, không cold start, VNet, timeout không giới hạn (mặc định 30 phút)</td><td>Yêu cầu độ trễ ổn định + chạy dài</td></tr><tr><td><strong>Dedicated (App Service plan)</strong></td><td>Dùng chung plan với web app, có thể Always On</td><td>Tận dụng compute sẵn có</td></tr><tr><td><strong>Container Apps hosting</strong></td><td>Function chạy trong Container Apps environment, dùng chung networking/Dapr</td><td>Micro-service + function chung một môi trường</td></tr></tbody></table></div>
<blockquote><p>Chạy inference/embedding kéo dài vài phút trên Consumption → dễ <strong>timeout</strong>; đáp án đúng thường là <strong>Premium/Flex</strong> hoặc chuyển sang <strong>Container Apps Job / Durable Functions</strong>.</p></blockquote>
<h3 id="03-messaging-functions/44-bao-mat-ket-noi">4.4 Bảo mật &amp; kết nối</h3>
<ul><li><strong>HTTP auth level</strong>: <code>anonymous</code> | <code>function</code> (mã khoá theo hàm) | <code>admin</code> (master key). Trước internet nên đặt sau <strong>API Management</strong> hoặc dùng <strong>Easy Auth (Entra ID)</strong>.</li><li><strong>Identity-based connections</strong> (không dùng connection string — chuẩn thi):</li></ul>
<pre><button class="copybtn">copy</button><code>ServiceBusConnection__fullyQualifiedNamespace = mysb.servicebus.windows.net
STORAGE_CONN__accountName                    = mystorage
COSMOS_CONN__accountEndpoint                 = https://mycosmos.documents.azure.com:443/</code></pre>
<p>  Kèm managed identity + role tương ứng (Azure Service Bus Data Receiver, Storage Blob Data Contributor, Cosmos DB Built-in Data Contributor).</p>
<ul><li>Secrets: app settings + <strong>Key Vault reference</strong>, hoặc đọc trực tiếp bằng <code>SecretClient</code>.</li></ul>
<h3 id="03-messaging-functions/45-deploy">4.5 Deploy</h3>
<pre><button class="copybtn">copy</button><code># Cách chuẩn cho dev
func azure functionapp publish myfuncapp --python

# Zip deploy (CI/CD)
az functionapp deployment source config-zip -g rg -n myfuncapp --src app.zip

# Cấu hình
az functionapp config appsettings set -g rg -n myfuncapp \\
  --settings "COSMOS_CONN__accountEndpoint=https://mycosmos.documents.azure.com:443/"
az functionapp identity assign -g rg -n myfuncapp</code></pre>
<ul><li><code>WEBSITE_RUN_FROM_PACKAGE=1</code> → chạy từ package (read-only, khởi động nhanh, mặc định với zip deploy).</li><li><strong>Deployment slot</strong> + swap để zero-downtime.</li><li>Function App bắt buộc có <strong>AzureWebJobsStorage</strong> (lưu trigger metadata, lease, timer state).</li><li>Nhiều instance chạy Timer trigger vẫn chỉ <strong>1 instance chạy</strong> (singleton nhờ blob lease).</li></ul>
<h3 id="03-messaging-functions/46-durable-functions-thuong-xuat-hien-trong-kich-ban-ai-pipe">4.6 Durable Functions (thường xuất hiện trong kịch bản AI pipeline dài)</h3>
<ul><li><strong>Orchestrator</strong> điều phối, <strong>activity</strong> làm việc, <strong>client</strong> khởi động.</li><li>Pattern: function chaining (chunk → embed → index), <strong>fan-out/fan-in</strong> (embed song song rồi gom), async HTTP API (long-running + status endpoint), human interaction/approval, monitor.</li><li>Orchestrator phải <strong>deterministic</strong> (không <code>datetime.now()</code>, không random, không I/O trực tiếp).</li></ul>
<hr>
<h2 id="03-messaging-functions/5-checklist-on-domain-3">5. Checklist ôn Domain 3</h2>
<ul><li class="task" data-key="03-messaging-functions:0"><input type="checkbox">Phân biệt message vs event; chọn đúng Service Bus / Event Grid / Event Hubs / Queue Storage</li><li class="task" data-key="03-messaging-functions:1"><input type="checkbox">PEEK_LOCK vs RECEIVE_AND_DELETE; complete/abandon/dead-letter/defer; lock renewal</li><li class="task" data-key="03-messaging-functions:2"><input type="checkbox">5 nguyên nhân message vào DLQ; đường dẫn <code>$deadletterqueue</code>; cách resubmit</li><li class="task" data-key="03-messaging-functions:3"><input type="checkbox">Ba loại filter và luôn nhớ xoá rule <code>$Default</code></li><li class="task" data-key="03-messaging-functions:4"><input type="checkbox">Event Grid: schema vs CloudEvents; subject/advanced filter; retry backoff, mã 4xx không retry</li><li class="task" data-key="03-messaging-functions:5"><input type="checkbox">Dead-letter Event Grid cần blob container, nếu không cấu hình thì event bị mất</li><li class="task" data-key="03-messaging-functions:6"><input type="checkbox">Webhook validation handshake</li><li class="task" data-key="03-messaging-functions:7"><input type="checkbox">Trigger/binding: mỗi hàm 1 trigger, cú pháp decorator Python v2</li><li class="task" data-key="03-messaging-functions:8"><input type="checkbox">Bảng chọn hosting plan (đặc biệt timeout của Consumption)</li><li class="task" data-key="03-messaging-functions:9"><input type="checkbox">Identity-based connection: hậu tố <code>__fullyQualifiedNamespace</code>, <code>__accountEndpoint</code></li></ul>
</section>
<section class="doc" id="04-security-monitoring" data-title="4. Bảo mật &amp; Giám sát" data-weight="20–25%" hidden>
<h1 id="04-security-monitoring/domain-4-bao-mat-giam-sat-va-troubleshoot-giai-phap-azure-20">Domain 4 — Bảo mật, giám sát và troubleshoot giải pháp Azure (20–25%)</h1>
<hr>
<h2 id="04-security-monitoring/1-azure-key-vault">1. Azure Key Vault</h2>
<h3 id="04-security-monitoring/11-ba-loai-doi-tuong">1.1 Ba loại đối tượng</h3>
<div class="tablewrap"><table><thead><tr><th>Loại</th><th>Dùng cho</th><th>Client Python</th></tr></thead><tbody><tr><td><strong>Secrets</strong></td><td>Chuỗi bí mật: API key, connection string, password</td><td><code>SecretClient</code></td></tr><tr><td><strong>Keys</strong></td><td>Khoá mã hoá (RSA/EC), ký, wrap/unwrap; <strong>không lấy ra được</strong>, chỉ dùng qua Key Vault</td><td><code>KeyClient</code>, <code>CryptographyClient</code></td></tr><tr><td><strong>Certificates</strong></td><td>Chứng chỉ TLS, tự động gia hạn với CA tích hợp</td><td><code>CertificateClient</code></td></tr></tbody></table></div>
<p>Tier: <strong>Standard</strong> (software-protected) vs <strong>Premium</strong> (<strong>HSM</strong> FIPS 140-2 Level 2/3). Cần HSM chuyên dụng, single-tenant → <strong>Azure Managed HSM</strong>.</p>
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
<p><strong>Caching</strong>: Key Vault có giới hạn throttling (mỗi vault ~2000 request/10s cho secret) → <strong>không gọi <code>get_secret</code> trong mỗi request</strong>. Cache trong bộ nhớ, refresh định kỳ; hoặc dùng Key Vault reference của App Service / App Configuration.</p>
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
<h3 id="04-security-monitoring/15-bao-ve-du-lieu-mang">1.5 Bảo vệ dữ liệu &amp; mạng</h3>
<ul><li><strong>Soft delete</strong>: luôn bật (không tắt được), thời gian giữ 7–90 ngày; khôi phục bằng <code>az keyvault secret recover</code>.</li><li><strong>Purge protection</strong>: bật thì <strong>không thể purge sớm</strong> — bắt buộc cho môi trường production/tuân thủ.</li><li><strong>Private endpoint</strong> + firewall: <code>--default-action Deny</code>, <code>--bypass AzureServices</code>.</li><li><strong>Diagnostic settings</strong> → <code>AuditEvent</code> log sang Log Analytics (ai đọc secret nào, lúc nào).</li></ul>
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
<pre><button class="copybtn">copy</button><code>from azure.appconfiguration.provider import load, SettingSelector
from azure.identity import DefaultAzureCredential

config = load(
    endpoint="https://myappconfig.azconfig.io",
    credential=DefaultAzureCredential(),
    selects=[SettingSelector(key_filter="RagApi:*", label_filter="prod")],
    trim_prefixes=["RagApi:"],
    key_vault_options=...,          # để provider tự resolve Key Vault reference
    refresh_on=[WatchKey("Sentinel")],    # chỉ theo dõi 1 key "sentinel"
    refresh_interval=30,
)
top_k = int(config["TopK"])</code></pre>
<p><strong>Dynamic refresh với sentinel key</strong> là mẫu chuẩn: cập nhật nhiều key rồi cuối cùng đổi giá trị key <code>Sentinel</code> → app phát hiện 1 thay đổi và nạp lại toàn bộ (tránh đọc trạng thái nửa vời).</p>
<p>Bảo mật: dùng <strong>managed identity</strong> + role <strong>App Configuration Data Reader</strong> (đọc) / <strong>Data Owner</strong> (ghi). Tắt access key khi có thể.</p>
<hr>
<h2 id="04-security-monitoring/3-distributed-tracing-voi-opentelemetry">3. Distributed tracing với OpenTelemetry</h2>
<h3 id="04-security-monitoring/31-khai-niem">3.1 Khái niệm</h3>
<ul><li><strong>Trace</strong> = một request xuyên nhiều service, gồm nhiều <strong>span</strong>; mỗi span có <code>trace_id</code>, <code>span_id</code>, <code>parent_span_id</code>, thời gian, <strong>attributes</strong>, <strong>events</strong>, <strong>status</strong>.</li><li><strong>Ba tín hiệu</strong>: traces, metrics, logs.</li><li><strong>Context propagation</strong> chuẩn <strong>W3C Trace Context</strong> qua header <code>traceparent</code>: <code>00-&lt;trace-id 32 hex&gt;-&lt;span-id 16 hex&gt;-01</code>. Nhờ đó ghép được span của API → Function → Cosmos DB.</li><li>Azure Monitor / Application Insights là backend; <strong>OpenTelemetry là chuẩn instrumentation chính thức</strong> (thay dần SDK Application Insights cũ).</li></ul>
<h3 id="04-security-monitoring/32-bat-opentelemetry-cho-python-tren-azure">3.2 Bật OpenTelemetry cho Python trên Azure</h3>
<pre><button class="copybtn">copy</button><code>import os
from azure.monitor.opentelemetry import configure_azure_monitor
from opentelemetry import trace

os.environ["OTEL_SERVICE_NAME"] = "rag-api"           # -&gt; cloud_RoleName
configure_azure_monitor(
    connection_string=os.environ["APPLICATIONINSIGHTS_CONNECTION_STRING"],
    # instrumentation cho requests/flask/fastapi/psycopg/redis... được bật tự động
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
<ul><li>Gói: <code>azure-monitor-opentelemetry</code> (distro trọn gói) hoặc <code>opentelemetry-sdk</code> + <code>azure-monitor-opentelemetry-exporter</code>.</li><li>Biến môi trường quan trọng: <code>APPLICATIONINSIGHTS_CONNECTION_STRING</code>, <code>OTEL_SERVICE_NAME</code>, <code>OTEL_RESOURCE_ATTRIBUTES</code>, <code>OTEL_TRACES_SAMPLER_ARG</code> (tỷ lệ sampling), <code>OTEL_LOGS_EXPORTER</code>.</li><li><strong>Sampling</strong> để giảm chi phí — với Azure Monitor dùng <code>sampling_ratio</code> (0.0–1.0); Application Insights có <strong>adaptive sampling</strong> phía ingest.</li><li>Ghi ngoại lệ: <code>span.record_exception(e)</code> + <code>span.set_status(Status(StatusCode.ERROR))</code>.</li><li>Với <strong>AKS/Container Apps</strong>: có thể dùng <strong>OpenTelemetry Collector</strong> (sidecar/daemonset) rồi export sang Azure Monitor — tách cấu hình khỏi ứng dụng. Container Apps có <strong>managed OTel agent</strong> cấu hình ở cấp environment.</li><li>Khi trace không nối được giữa 2 service → kiểm tra header <code>traceparent</code> có bị proxy/gateway loại bỏ không, và cả hai bên có dùng cùng propagator W3C không.</li></ul>
<h3 id="04-security-monitoring/33-anh-xa-opentelemetry-bang-application-insights">3.3 Ánh xạ OpenTelemetry → bảng Application Insights</h3>
<div class="tablewrap"><table><thead><tr><th>Khái niệm OTel</th><th>Bảng trong Log Analytics (workspace-based)</th><th>Bảng "classic"</th></tr></thead><tbody><tr><td>Server span (incoming)</td><td><code>AppRequests</code></td><td><code>requests</code></td></tr><tr><td>Client span (outgoing: HTTP, DB, Redis)</td><td><code>AppDependencies</code></td><td><code>dependencies</code></td></tr><tr><td>Log record</td><td><code>AppTraces</code></td><td><code>traces</code></td></tr><tr><td>Exception</td><td><code>AppExceptions</code></td><td><code>exceptions</code></td></tr><tr><td>Custom metric</td><td><code>AppMetrics</code></td><td><code>customMetrics</code></td></tr></tbody></table></div>
<p>Trường quan trọng: <code>OperationId</code> (= trace id), <code>ParentId</code>, <code>AppRoleName</code> (= service name), <code>DurationMs</code>, <code>Success</code>, <code>ResultCode</code>, <code>Properties</code> (custom attributes).</p>
<hr>
<h2 id="04-security-monitoring/4-kql-kusto-query-language">4. KQL — Kusto Query Language</h2>
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
<h3 id="04-security-monitoring/43-alert-chi-phi">4.3 Alert &amp; chi phí</h3>
<ul><li>Tạo <strong>log alert rule</strong> từ query KQL (threshold + tần suất đánh giá) → Action Group (email, webhook, Logic App, Functions).</li><li><strong>Metric alert</strong> rẻ và nhanh hơn log alert cho các chỉ số dựng sẵn (CPU, DeadletteredMessages, 5xx).</li><li>Giảm chi phí ingest: sampling, <code>Basic Logs</code> cho bảng verbose, đặt <strong>retention</strong> hợp lý, dùng <strong>transformation</strong> (DCR) để lọc trước khi ingest.</li><li><strong>Live Metrics</strong>, <strong>Application Map</strong>, <strong>Transaction search</strong>, <strong>Failures/Performance blade</strong> là công cụ chẩn đoán nhanh trong Application Insights.</li></ul>
<hr>
<h2 id="04-security-monitoring/5-bao-mat-xuyen-suot-tong-hop">5. Bảo mật xuyên suốt — tổng hợp</h2>
<div class="tablewrap"><table><thead><tr><th>Chủ đề</th><th>Điểm chính</th></tr></thead><tbody><tr><td><strong>Managed identity</strong></td><td>System-assigned (gắn vòng đời với tài nguyên) vs user-assigned (dùng lại cho nhiều tài nguyên, tồn tại độc lập). Luôn ưu tiên hơn connection string</td></tr><tr><td><strong>RBAC data plane</strong></td><td>Cosmos DB Built-in Data Contributor, Storage Blob Data Contributor, Azure Service Bus Data Sender/Receiver, Key Vault Secrets User, App Configuration Data Reader, AcrPull</td></tr><tr><td><strong>Networking</strong></td><td>Private endpoint + tắt public access; service endpoint; VNet integration cho App Service/Functions/Container Apps</td></tr><tr><td><strong>Data protection</strong></td><td>Mã hoá at-rest mặc định; customer-managed key (CMK) khi cần; TLS 1.2+ bắt buộc</td></tr><tr><td><strong>Chống lộ khoá</strong></td><td>Không commit secret; dùng Key Vault + rotation; bật Defender for Cloud; quét secret trong CI</td></tr><tr><td><strong>AI-specific</strong></td><td>Giới hạn quyền truy cập vector store theo tenant (filter bắt buộc), lọc nội dung (content safety), log prompt cẩn thận vì có PII</td></tr></tbody></table></div>
<hr>
<h2 id="04-security-monitoring/6-checklist-on-domain-4">6. Checklist ôn Domain 4</h2>
<ul><li class="task" data-key="04-security-monitoring:0"><input type="checkbox">Phân biệt secret/key/certificate; role Key Vault Secrets User vs Contributor</li><li class="task" data-key="04-security-monitoring:1"><input type="checkbox">Quy trình rotation với Event Grid <code>SecretNearExpiry</code> → Function</li><li class="task" data-key="04-security-monitoring:2"><input type="checkbox">Soft delete vs purge protection</li><li class="task" data-key="04-security-monitoring:3"><input type="checkbox"><code>DefaultAzureCredential</code> — thứ tự thử và cách hoạt động trên Azure vs local</li><li class="task" data-key="04-security-monitoring:4"><input type="checkbox">App Configuration: label, feature flag, Key Vault reference, sentinel key refresh</li><li class="task" data-key="04-security-monitoring:5"><input type="checkbox">Cấu trúc trace/span, header <code>traceparent</code>, <code>configure_azure_monitor()</code>, <code>OTEL_SERVICE_NAME</code></li><li class="task" data-key="04-security-monitoring:6"><input type="checkbox">Ánh xạ bảng <code>AppRequests</code> / <code>AppDependencies</code> / <code>AppTraces</code> / <code>AppExceptions</code>, trường <code>OperationId</code></li><li class="task" data-key="04-security-monitoring:7"><input type="checkbox">Viết được KQL: lọc thời gian, <code>summarize</code> + <code>bin</code>, <code>percentile</code>, <code>join</code>, <code>render timechart</code></li></ul>
</section>
<section class="doc" id="05-cheatsheet" data-title="Cheat sheet" hidden>
<h1 id="05-cheatsheet/cheat-sheet-ai-200-tra-nhanh-truoc-ngay-thi">Cheat sheet AI-200 — tra nhanh trước ngày thi</h1>
<h2 id="05-cheatsheet/1-con-so-phai-nho">1. Con số phải nhớ</h2>
<div class="tablewrap"><table><thead><tr><th>Con số</th><th>Ý nghĩa</th></tr></thead><tbody><tr><td><strong>700/1000</strong></td><td>Điểm đạt</td></tr><tr><td><strong>120 phút</strong></td><td>Thời lượng thi</td></tr><tr><td>1 RU</td><td>Point read item 1 KB trong Cosmos DB</td></tr><tr><td>2× RU</td><td>Chi phí đọc với Strong / Bounded staleness</td></tr><tr><td>20 GB</td><td>Giới hạn 1 logical partition Cosmos DB</td></tr><tr><td>10.000 RU/s</td><td>Giới hạn throughput 1 logical partition</td></tr><tr><td>10</td><td><code>MaxDeliveryCount</code> mặc định của Service Bus</td></tr><tr><td>30 giây</td><td><code>LockDuration</code> mặc định (tối đa 5 phút)</td></tr><tr><td>256 KB / 100 MB</td><td>Kích thước message Service Bus Standard / Premium</td></tr><tr><td>30 lần, 24 giờ</td><td>Retry mặc định của Event Grid</td></tr><tr><td>1 MB</td><td>Kích thước event tối đa Event Grid (tính phí theo 64 KB)</td></tr><tr><td>25</td><td>Số advanced filter tối đa / event subscription</td></tr><tr><td>5 phút (max 10)</td><td>Timeout Functions trên Consumption plan</td></tr><tr><td>30 phút (không giới hạn)</td><td>Timeout Functions trên Premium plan</td></tr><tr><td>2000 chiều</td><td>Giới hạn index HNSW cho <code>vector</code>; 4000 với <code>halfvec</code></td></tr><tr><td>4096 chiều</td><td>Giới hạn <code>diskANN</code>/<code>quantizedFlat</code> trong Cosmos DB; <code>flat</code> chỉ 505</td></tr><tr><td>7–90 ngày</td><td>Soft delete retention của Key Vault</td></tr><tr><td>6432</td><td>Port PgBouncer của Azure Database for PostgreSQL</td></tr><tr><td>10000</td><td>Port mặc định Azure Managed Redis (SSL)</td></tr></tbody></table></div>
<h2 id="05-cheatsheet/2-azure-cli-theo-dich-vu">2. Azure CLI theo dịch vụ</h2>
<pre><button class="copybtn">copy</button><code># ---------- ACR ----------
az acr create -g rg -n myacr --sku Premium
az acr build --registry myacr --image app:v1 .
az acr task create --registry myacr --name t1 --context &lt;git&gt; --file Dockerfile \\
  --image app:{{.Run.ID}} --base-image-trigger-enabled true
az acr repository show-tags -n myacr --repository app
az acr import -n myacr --source docker.io/library/redis:7 --image redis:7

# ---------- App Service ----------
az webapp create -g rg -p plan1 -n app1 --deployment-container-image-name myacr.azurecr.io/app:v1
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
<p><strong>Học:</strong> <a href="#01-container">Container trên Azure</a> mục 3–5.</p>
<p><strong>Lab 2.1 — Container Apps</strong></p>
<ul><li>Tạo environment + app, bật ingress external.</li><li>Deploy v2, bật multiple revision, chia traffic 80/20, kiểm tra bằng <code>curl</code> nhiều lần.</li><li>Thêm scale rule HTTP, rồi thêm scale rule <code>azure-servicebus</code> (dùng lại ở tuần 4).</li><li>Xem <code>az containerapp logs show</code> và bảng <code>ContainerAppConsoleLogs_CL</code>.</li></ul>
<p><strong>Lab 2.2 — AKS</strong></p>
<ul><li>Tạo cluster 2 node với <code>--attach-acr</code>.</li><li>Viết <code>deployment.yaml</code> + <code>service.yaml</code> (có probes, requests/limits), <code>kubectl apply</code>.</li><li>Cố tình gây 3 lỗi và tự chẩn đoán: sai tag image (<code>ImagePullBackOff</code>), <code>limits.memory: 32Mi</code> (<code>OOMKilled</code>), probe sai path.</li></ul>
<p><strong>Mục tiêu:</strong> thuộc bảng chẩn đoán lỗi pod; viết được KEDA scale rule không cần tra cứu.</p>
<hr>
<h2 id="07-lo-trinh-hoc/tuan-3-cosmos-db-for-nosql-vector-search-nua-dau-domain-2">Tuần 3 — Cosmos DB for NoSQL + vector search (nửa đầu Domain 2)</h2>
<p><strong>Học:</strong> <a href="#02-data-services">Data services &amp; Vector</a> phần A.</p>
<p><strong>Lab 3.1 — RU &amp; indexing</strong></p>
<ul><li>Tạo container, nạp 1000 document, so sánh <code>x-ms-request-charge</code> của: point read vs single-partition query vs cross-partition query.</li><li>Thêm/bớt <code>excludedPaths</code> cho <code>/embedding/*</code>, đo lại write RU.</li><li>Đổi consistency Strong ↔ Session, đo RU đọc.</li></ul>
<p><strong>Lab 3.2 — Vector + RAG</strong></p>
<ul><li>Bật feature vector search, tạo container với vector embedding policy + diskANN index.</li><li>Sinh embedding (Azure OpenAI <code>text-embedding-3-small</code>) cho ~200 đoạn văn bản tiếng Việt.</li><li>Viết query <code>VectorDistance</code> có metadata filter, so sánh có/không <code>ORDER BY</code> về RU.</li></ul>
<p><strong>Lab 3.3 — Change feed</strong></p>
<ul><li>Function với Cosmos DB trigger + lease container, tự sinh embedding cho item mới.</li><li>Chạy 2 instance để thấy phân phối partition.</li></ul>
<hr>
<h2 id="07-lo-trinh-hoc/tuan-4-postgresql-redis-nua-sau-domain-2">Tuần 4 — PostgreSQL + Redis (nửa sau Domain 2)</h2>
<p><strong>Học:</strong> <a href="#02-data-services">Data services &amp; Vector</a> phần B, C.</p>
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
</section>
`,Z={class:"searchwrap"},tt={class:"wrap"},et={class:"progressbar"},h="ai200.tasks.v1",ct=G({__name:"Ai200NotesPage",setup(nt){X("ai200","notes");const a=i(),l=i(),s=i(),d=i(),A=i(),u=i(),p=i(),C=i(),S=i(),E=i();let c=[],m="",T=[];const _=e=>[...e.querySelectorAll("h2, h3")].map(t=>({lvl:+t.tagName[1],txt:t.textContent||"",id:t.id}));function L(){A.value.innerHTML=c.map(e=>{const t=e.id===m,o=e.dataset.weight?`<span class="w">${g(e.dataset.weight)}</span>`:"";return`<a class="navitem${t?" active":""}" href="#${e.id}"><span>${g(e.dataset.title)}</span>${o}</a>`+(t?'<div class="subnav">'+_(e).filter(n=>n.lvl===2).map(n=>`<a href="#${n.id}">${g(n.txt)}</a>`).join("")+"</div>":"")}).join("")}function I(e){u.value.innerHTML=_(e).map(t=>`<a class="${t.lvl===3?"h3":"h2"}" href="#${t.id}">${g(t.txt)}</a>`).join("")}function b(e,t){const o=c.find(n=>n.id===e)||c[0];if(m=o.id,s.value.hidden=!0,l.value.hidden=!1,c.forEach(n=>n.hidden=n!==o),L(),I(o),p.value.classList.remove("open"),t){const n=document.getElementById(t);if(n){n.scrollIntoView({block:"start"});return}}window.scrollTo(0,0)}function D(){const e=decodeURIComponent(location.hash.slice(1));if(!e)return b(c[0].id,null);b(e.split("/")[0],e.includes("/")?e:null)}function P(){const e=new Set(f(h,[]));a.value.querySelectorAll("li.task").forEach(t=>{const o=t.querySelector("input");o.checked=e.has(t.dataset.key),t.classList.toggle("done",o.checked),o.onchange=()=>{const n=new Set(f(h,[]));o.checked?n.add(t.dataset.key):n.delete(t.dataset.key),W(h,[...n]),t.classList.toggle("done",o.checked),x()}})}function x(){const e=a.value.querySelectorAll("li.task").length,t=f(h,[]).length;S.value.textContent=t+" / "+e+" mục đã xong",C.value.style.width=(e?t/e*100:0)+"%"}function q(){a.value.querySelectorAll(".copybtn").forEach(e=>{e.onclick=t=>{t.stopPropagation(),navigator.clipboard.writeText(e.parentElement.querySelector("code").innerText),e.textContent="đã copy",setTimeout(()=>e.textContent="copy",1200)}})}const R=[];function M(){c.forEach(e=>{e.querySelectorAll("h1,h2,h3,h4,p,li,td,th,pre").forEach(t=>{if(t.querySelector("p,ul,ol,pre,table,li"))return;const o=(t.textContent||"").replace(/\s+/g," ").trim();o.length>3&&R.push({docId:e.id,title:e.dataset.title||"",text:o})})})}function O(){const e=d.value.value.trim().toLowerCase();if(e.length<2){s.value.hidden=!0,l.value.hidden=!1;return}const t=[];for(const n of R)if(n.text.toLowerCase().includes(e)&&(t.push(n),t.length>=60))break;const o=new RegExp("("+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","ig");s.value.innerHTML=`<p style="color:var(--muted);font-size:13px">${t.length} kết quả cho “${g(d.value.value)}”</p>`+t.map(n=>`<div class="res" data-id="${n.docId}"><div class="doc">${g(n.title)}</div><div class="line">${g(n.text.slice(0,220)).replace(o,"<mark>$1</mark>")}</div></div>`).join(""),s.value.hidden=!1,l.value.hidden=!0,s.value.querySelectorAll(".res").forEach(n=>{n.onclick=()=>{d.value.value="",s.value.hidden=!0,l.value.hidden=!1,location.hash.slice(1)===n.dataset.id?b(n.dataset.id,null):location.hash=n.dataset.id}})}function w(e){e.key==="/"&&document.activeElement!==d.value&&(e.preventDefault(),d.value.focus()),e.key==="Escape"&&(d.value.value="",s.value.hidden=!0,l.value.hidden=!1,d.value.blur())}function K(){const e=c.filter(t=>t.hidden);e.forEach(t=>t.hidden=!1),window.print(),setTimeout(()=>e.forEach(t=>t.hidden=!0),400)}let y=!1;function F(){y||(y=!0,requestAnimationFrame(()=>{const e=[...a.value.querySelectorAll("section.doc:not([hidden]) h2, section.doc:not([hidden]) h3")];let t=null;for(const o of e)o.getBoundingClientRect().top<120&&(t=o);u.value.querySelectorAll("a").forEach(o=>o.classList.toggle("cur",!!t&&o.getAttribute("href")==="#"+t.id)),y=!1}))}function z(){a.value.style.setProperty("--topbar-h",E.value.offsetHeight+"px")}return U(()=>{c=[...a.value.querySelectorAll("section.doc")],m=c[0].id,M(),P(),q(),x(),D(),z();const e=[[window,"hashchange",D],[window,"resize",z],[window,"scroll",F],[document,"keydown",w]];e.forEach(([t,o,n])=>t.addEventListener(o,n)),T=e.map(([t,o,n])=>()=>t.removeEventListener(o,n))}),H(()=>T.forEach(e=>e())),(e,t)=>{const o=j("router-link");return Y(),Q("div",{ref_key:"rootEl",ref:a,class:"notes-ai"},[r("div",{ref_key:"topbarEl",ref:E,class:"topbar"},[r("button",{class:"btn menu-btn",onClick:t[0]||(t[0]=n=>p.value.classList.toggle("open"))},"☰"),t[4]||(t[4]=r("div",{class:"brand"},[r("span",{class:"dot"}),v("AI-200 "),r("small",null,"Azure AI Cloud Developer Associate · Tiếng Việt")],-1)),t[5]||(t[5]=r("div",{class:"spacer"},null,-1)),r("div",Z,[r("input",{ref_key:"searchEl",ref:d,placeholder:"Tìm trong toàn bộ tài liệu… (/)",autocomplete:"off",onInput:O},null,544)]),k(o,{class:"btn",to:"/ai-200/practice",title:"Mở trang luyện trắc nghiệm"},{default:B(()=>[...t[2]||(t[2]=[v("✎ Trắc nghiệm",-1)])]),_:1}),k(V),r("button",{class:"btn",title:"In / xuất PDF",onClick:K},"⎙"),k(o,{class:"btn",to:"/"},{default:B(()=>[...t[3]||(t[3]=[v("🏠",-1)])]),_:1})],512),r("div",tt,[r("aside",{ref_key:"sideEl",ref:p},[t[6]||(t[6]=r("div",{class:"navtitle"},"Tiến độ học",-1)),r("div",{ref_key:"pcountEl",ref:S,class:"pcount"},"0 / 0 mục đã xong",512),r("div",et,[r("div",{ref_key:"pbarEl",ref:C},null,512)]),t[7]||(t[7]=r("div",{class:"navtitle"},"Nội dung",-1)),r("nav",{ref_key:"navEl",ref:A},null,512)],512),r("main",null,[r("div",{ref_key:"resultsEl",ref:s,class:"results",hidden:""},null,512),t[1]||(N(-1,!0),(t[1]=r("article",{ref_key:"articleEl",ref:l,innerHTML:$(J)},null,8,["innerHTML"])).cacheIndex=1,N(1),t[1])]),r("div",{ref_key:"tocEl",ref:u,class:"toc"},null,512)])],512)}}});export{ct as default};
