import{_ as F}from"./ThemeToggle.vue_vue_type_script_setup_true_lang-C4OQ5IAM.js";import{d as V,z as G,O as H,c as Q,a as i,i as l,b as u,w as f,$ as q,e as W,r,l as A,s as j,W as h,k as X,o as Y}from"./index-1Ucv6_yv.js";import{u as $}from"./useStudyClock-HDN1O_Cb.js";const J=`
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
<h2 id="01-container/5b-aca-networking-ingress-chi-tiet">6. Container Apps — networking, ingress và revision chuyên sâu</h2>
<h3 id="01-container/5b1-ingress">6.1 Ingress</h3>
<ul><li><strong>External</strong> = có địa chỉ public; <strong>internal</strong> = chỉ trong environment/VNet — API nội bộ giữa các app trong cùng environment gọi nhau qua DNS nội bộ <code>http://&lt;app-name&gt;</code>, không cần đi ra ngoài.</li>
<li><code>targetPort</code> phải đúng cổng container lắng nghe — triệu chứng sai cổng: revision "Provisioned" nhưng request timeout; đây là lỗi nộp đề hay gặp cùng <code>WEBSITES_PORT</code> bên App Service.</li>
<li>Ingress hỗ trợ HTTP/2, gRPC, WebSocket; giới hạn IP bằng <code>ipSecurityRestrictions</code>; TLS termination có sẵn, custom domain + managed certificate miễn phí.</li></ul>
<h3 id="01-container/5b2-revision-va-traffic">6.2 Revision mode và chia traffic</h3>
<ul><li><strong>Single</strong> (mặc định): revision mới thay hẳn cũ. <strong>Multiple</strong>: giữ nhiều revision sống — chia traffic 90/10 để canary, hoặc gắn <strong>label</strong> (staging/prod) để có URL riêng từng revision rồi hoán đổi.</li>
<li>Chỉ thay đổi thuộc <strong>revision-scope</strong> (image, env var, scale rule, CPU/RAM) mới sinh revision mới; thay đổi <strong>application-scope</strong> (ingress, secrets, Dapr) áp cho mọi revision và không tạo bản mới.</li>
<li>Rollback = trỏ 100% traffic về revision cũ — vì vậy đừng tắt revision cũ ngay sau khi deploy.</li></ul>
<h3 id="01-container/5b3-scale">6.3 Scale rule ngoài KEDA queue</h3>
<ul><li>HTTP scale rule theo <strong>concurrent requests</strong> (mặc định 10/replica); <code>minReplicas: 0</code> cho phép scale về 0 (cold start đổi lấy tiền); job nền không có ingress thì bắt buộc scale bằng KEDA (queue, cron, Event Hubs).</li>
<li>Bẫy đề: app xử lý queue mà đặt HTTP rule → không bao giờ scale vì không có request; ngược lại API đặt queue rule → scale sai tín hiệu.</li>
<li>Số liệu đã đối chiếu docs (Learn, 8/2026): không khai rule thì mặc định là HTTP rule với min 0 / max <strong>10 replica</strong>; KEDA poll mỗi <strong>30 giây</strong>, scale-down đợi cửa sổ ổn định <strong>300 giây</strong> và cooldown 300 giây trước khi về 0; công thức <code>desiredReplicas = ceil(metric / target)</code>.</li>
<li>Bẫy nguy hiểm nhất: app <strong>tắt ingress</strong> mà không đặt <code>minReplicas ≥ 1</code> hoặc scale rule riêng → scale về 0 và <strong>không có gì đánh thức nó dậy</strong>.</li></ul>

<h3 id="01-container/5b4-workload-profiles">6.4 Workload profiles — Consumption vs Dedicated trong environment</h3>
<ul><li>Environment kiểu <strong>workload profiles</strong> cho phép trộn: profile <strong>Consumption</strong> (serverless, trả theo dùng, scale về 0) và các profile <strong>Dedicated</strong> (D4/D8/E4… — máy riêng, chọn khi cần CPU/RAM lớn, GPU, hoặc chi phí ổn định cho tải nền).</li>
<li>Mỗi container app/job gán vào một profile; cùng environment dùng chung VNet, log, DNS nội bộ — nên "API nhẹ chạy Consumption, worker embedding nặng chạy Dedicated" là một environment, không phải hai.</li>
<li>Dedicated tính tiền theo <strong>node đang chạy</strong> của profile (đặt min/max node) — khác Consumption tính theo replica đang hoạt động; đề nhấn "chi phí dự đoán được cho tải đều" → Dedicated, "thỉnh thoảng mới chạy" → Consumption.</li>
<li>Environment kiểu cũ (Consumption-only) không đổi sang workload profiles được — phải tạo environment mới; VNet tùy chỉnh cần subnet đủ lớn (khuyến nghị /23 cho workload profiles).</li></ul>
<h3 id="01-container/5b5-duoi-nap-capo-keda">6.5 Dưới nắp capo: KEDA = scaler + metrics + HPA</h3>
<ul><li>Chuỗi thật sự phía sau một "scale rule": <strong>scaler</strong> (trình kết nối biết hỏi Service Bus/Event Hubs "đang có bao nhiêu message") → KEDA phơi con số đó thành <strong>external metric</strong> → <strong>HPA</strong> (Horizontal Pod Autoscaler của Kubernetes) tính <code>desiredReplicas = ceil(metric / target)</code> và chỉnh số replica. Container Apps chỉ giấu chuỗi này sau một khối JSON.</li>
<li>Polling 30 giây là nhịp <em>scaler hỏi event source</em>; cooldown/cửa sổ ổn định 300 giây là tham số <em>HPA</em> chống rung (flapping) khi metric dao động quanh ngưỡng — giờ bạn biết hai con số đó thuộc về hai tầng khác nhau.</li>
<li>Scale 0 → 1 là việc của <strong>chính KEDA</strong> (HPA không làm được từ 0): KEDA giữ vai "activator" bật replica đầu tiên khi thấy sự kiện, rồi bàn giao cho HPA từ 1 trở lên — vì vậy độ trễ đánh thức từ 0 luôn ≥ một chu kỳ polling.</li>
<li>Hệ quả thiết kế: metric phải <strong>đo được từ ngoài app</strong> (độ dài queue, lag consumer group) — "CPU của việc tôi sắp phải làm" không tồn tại; đó là lý do queue-based scale ưu việt hơn CPU-based cho worker: nó đo <em>backlog</em> chứ không đo <em>hậu quả</em>.</li></ul>
<h2 id="01-container/5c-acr-nang-cao">7. ACR nâng cao — geo-replication, Tasks, private link</h2>
<ul><li><strong>Geo-replication (Premium)</strong>: một registry phục vụ nhiều region — pull gần nơi chạy, một endpoint duy nhất, webhook theo từng region. Đề nói "đội ở 3 region cùng pull image lớn" → geo-replication, không phải tạo 3 registry.</li>
<li><strong>ACR Tasks</strong> có ba trigger: commit vào repo nguồn, <strong>base image update</strong> (image nền vá CVE là image của bạn tự build lại — điểm ăn tiền), và timer. <code>az acr build</code> = build ngay trên đám mây, máy dev không cần Docker.</li>
<li><strong>Private link (Premium)</strong>: kéo registry vào VPC qua private endpoint; bật <em>dedicated data endpoints</em> để data-plane cũng có tên riêng mà firewall whitelist được.</li>
<li>Dọn kho: retention policy cho untagged manifest, <code>az acr purge</code> chạy như một Task định kỳ; import image giữa registry bằng <code>az acr import</code> (không cần docker pull/push).</li>
<li>Xác thực theo thứ tự ưu tiên của đề: <strong>managed identity + AcrPull</strong> &gt; token/scope map (quyền hẹp theo repo) &gt; admin user (chỉ dev/test — thấy trong phương án production là sai).</li></ul>
<h2 id="01-container/5d-image-versioning-lifecycle">8. Phiên bản và vòng đời image trong ACR</h2>
<p>Outline ghi "build, store, <strong>version</strong>, and manage container images" — vế "version &amp; manage" hay bị bỏ qua khi ôn, trong khi đề hỏi rất cụ thể: khoá một bản production, dọn manifest rác, pull theo digest.</p>
<ul><li><strong>Tag mặc định là mutable</strong>: push lại cùng một tag là ghi đè bản cũ. <em>Stable tag</em> (<code>:latest</code>, <code>:v1</code>) tiện cho dev nhưng không tái lập được bản đã deploy — production dùng <em>unique tag</em> (build ID, <code>1.4.7-20260918.3</code>); đây cũng là khuyến nghị chính thức thay cho việc deploy bằng digest.</li>
<li><strong>Digest là bất biến tuyệt đối</strong>: <code>myacr.azurecr.io/rag-api@sha256:…</code> luôn trỏ đúng một manifest, ghi đè tag không đổi được nó. Lấy digest bằng <code>az acr manifest show-metadata -r myacr -n rag-api:1.4.7 --query digest</code>.</li>
<li>Ba thao tác quản lý kho hay ra đề: <strong>khoá</strong> (image lock), <strong>retention policy</strong> cho untagged manifest, và <strong>acr purge</strong> chạy như một Task theo lịch.</li></ul>
<h3 id="01-container/5d1-image-lock">8.1 Khoá image — bốn thuộc tính, đừng nhầm với lock của Resource Manager</h3>
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
<h3 id="01-container/5d2-retention-purge">8.2 Dọn kho — retention policy và acr purge</h3>
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
<h2 id="01-container/5e-manifest-van-hanh">9. Manifest AKS ở mức vận hành — QoS, eviction, PDB, ConfigMap</h2>
<p>Mục 4 đã dạy đọc-hiểu manifest. Mục này trả lời câu hỏi mà đề hay hỏi theo kiểu tình huống: <em>pod nào bị giết trước khi node hết RAM, vì sao drain node treo, vì sao đổi config mà app không thấy</em>.</p>
<h3 id="01-container/5e1-qos">9.1 Ba lớp QoS suy ra từ requests/limits</h3>
<table><thead><tr><th>Lớp</th><th>Điều kiện</th><th>Thứ tự bị evict</th></tr></thead><tbody>
<tr><td><strong>Guaranteed</strong></td><td><em>Mọi</em> container khai đủ request và limit cho <em>cả</em> CPU và memory, và <strong>limit = request</strong> ở cả hai</td><td>Cuối cùng</td></tr>
<tr><td><strong>Burstable</strong></td><td>Không đạt Guaranteed, nhưng có ít nhất một container khai request hoặc limit cho CPU/memory</td><td>Thứ hai</td></tr>
<tr><td><strong>BestEffort</strong></td><td>Không container nào khai request lẫn limit cho CPU và memory</td><td><strong>Đầu tiên</strong></td></tr>
</tbody></table>
<ul><li>Không khai gì cả là tự đẩy pod xuống BestEffort — nó bị giết đầu tiên khi node hết tài nguyên. Đây là lý do "pod embedding worker cứ biến mất lúc cao điểm" trong đề.</li>
<li>Chi tiết hay bị bỏ qua: khi evict vì thiếu tài nguyên, <strong>chỉ pod đang dùng vượt request của chính nó mới là ứng viên</strong>. Nghĩa là khai request đúng với mức tiêu thụ thật là cách bảo vệ pod hiệu quả hơn là nâng limit.</li>
<li>Phân biệt hai hành vi của <code>limits</code>: chạm <strong>CPU limit</strong> thì bị <em>throttle</em> (chậm lại, không chết); chạm <strong>memory limit</strong> thì kernel giết container → <code>OOMKilled</code>, và Deployment khởi động lại thành vòng <code>CrashLoopBackOff</code>.</li>
<li>Một container AI nạp model vào RAM nên đặt Guaranteed (request = limit) để không bị evict và không bị ép throttle bất thường; container phụ trợ để Burstable cho linh hoạt.</li></ul>
<h3 id="01-container/5e2-pdb-configmap">9.2 PodDisruptionBudget, ConfigMap và imagePullSecrets</h3>
<ul><li><strong>PDB chỉ chặn <em>voluntary disruption</em></strong> — drain node để vá, thu nhỏ cluster, autoscaler gỡ node. Nó <strong>không</strong> bảo vệ khi node chết, VM bị xoá, kernel panic hay pod bị evict vì hết tài nguyên; những sự cố đó vẫn <em>tính vào</em> ngân sách. Đề tả "node hỏng làm mất cả 3 replica, đã có PDB rồi mà" là bẫy đúng chỗ này — thứ cần là spread constraint qua nhiều node/zone, không phải PDB.</li>
<li><code>minAvailable: 2</code> hoặc <code>maxUnavailable: 1</code>; <code>kubectl drain</code> tôn trọng PDB và sẽ <em>thử lại</em> cho tới khi hết timeout — drain treo hàng chục phút thường là PDB quá chặt (ví dụ <code>minAvailable</code> bằng đúng số replica). Đặt <code>unhealthyPodEvictionPolicy: AlwaysAllow</code> để pod đang hỏng không giữ node lại mãi.</li>
<li>Xoá thẳng Deployment hay xoá pod bằng tay <strong>đi vòng qua PDB</strong>; rolling update của Deployment cũng không bị PDB giới hạn.</li>
<li><strong>ConfigMap gắn kiểu env thì không tự cập nhật</strong>, phải <code>kubectl rollout restart</code>. Gắn kiểu <em>volume mount</em> thì kubelet đồng bộ lại file (trễ bằng chu kỳ sync + độ trễ cache) — trừ khi mount bằng <code>subPath</code>, khi đó cũng không cập nhật. Đây là lý do đổi prompt template trong ConfigMap mà app vẫn chạy bản cũ.</li>
<li>Kéo image riêng tư trên AKS: cách khuyến nghị là gắn registry vào cluster (<code>az aks update --attach-acr</code>, thực chất là gán role <code>AcrPull</code> cho kubelet identity) — khi đó manifest <strong>không</strong> cần <code>imagePullSecrets</code>. Cách thủ công là tạo Secret kiểu <code>docker-registry</code> rồi khai <code>imagePullSecrets</code> trong pod spec; thiếu cả hai thì pod dừng ở <code>ImagePullBackOff</code>.</li>
<li><em>Nguồn: <a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/" target="_blank" rel="noopener">Kubernetes — Pod QoS classes</a>, <a href="https://kubernetes.io/docs/concepts/workloads/pods/disruptions/" target="_blank" rel="noopener">Disruptions</a>, <a href="https://kubernetes.io/docs/concepts/configuration/configmap/" target="_blank" rel="noopener">ConfigMap</a>, đối chiếu ngày 18/09/2026.</em></li></ul>
<h2 id="01-container/5f-k8s-tu-goc">10. Kubernetes từ gốc — thành phần cluster và vòng đời một pod</h2>
<p>Mục 4 dạy <em>viết</em> manifest. Mục này dạy <em>hiểu</em> chuyện gì xảy ra sau khi bấm <code>kubectl apply</code> — nắm được nó thì phần lớn câu hỏi troubleshooting tự giải được.</p>
<h3 id="01-container/5f1-thanh-phan">10.1 Ai làm gì trong cluster</h3>
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
<h3 id="01-container/5f2-reconcile">10.2 Nguyên lý cốt lõi: khai báo + vòng lặp điều hoà</h3>
<ul><li>Bạn không ra lệnh "tạo 3 pod". Bạn <strong>khai trạng thái mong muốn</strong> (<code>replicas: 3</code>), rồi controller liên tục so sánh thực tế với mong muốn và sửa cho khớp.</li>
<li>Hệ quả trực tiếp: <code>kubectl delete pod</code> một pod thuộc Deployment thì <strong>pod mới mọc lại ngay</strong> — ReplicaSet thấy thiếu một cái. Muốn dừng thật phải sửa nguồn của mong muốn: <code>kubectl scale deployment rag-api --replicas=0</code> hoặc xoá Deployment.</li>
<li>Chuỗi sở hữu: <strong>Deployment → ReplicaSet → Pod</strong>. Mỗi lần đổi pod template, Deployment tạo một ReplicaSet <em>mới</em> và thu nhỏ cái cũ — đó chính là cơ chế rollback ở mục 11.</li>
<li><code>kubectl apply</code> là khai báo (lưu lại ý định); <code>kubectl edit</code>/<code>patch</code> sửa thẳng trạng thái trong cluster và sẽ bị <strong>ghi đè</strong> ở lần apply kế tiếp từ file — sửa nóng rồi quên cập nhật file là lỗi vận hành kinh điển.</li></ul>
<h3 id="01-container/5f3-vong-doi-pod">10.3 Vòng đời: từ <code>kubectl apply</code> tới pod nhận request</h3>
<ul><li><strong>1.</strong> <code>kubectl</code> gửi manifest tới apiserver → apiserver xác thực, phân quyền, ghi vào etcd.</li>
<li><strong>2.</strong> Deployment controller thấy có Deployment mới → tạo ReplicaSet. ReplicaSet controller → tạo các đối tượng Pod, lúc này <code>nodeName</code> còn rỗng nên pod ở <strong>Pending</strong>.</li>
<li><strong>3.</strong> Scheduler lọc các node đủ tài nguyên theo <code>requests</code> và thoả ràng buộc, chấm điểm rồi gán node. Không node nào qua được vòng lọc thì pod <strong>kẹt Pending</strong> — <code>kubectl describe pod</code> sẽ ghi rõ lý do (<em>Insufficient cpu</em>, <em>node(s) had untolerated taint</em>…).</li>
<li><strong>4.</strong> kubelet của node đó kéo image (thất bại → <code>ImagePullBackOff</code>), chạy lần lượt các <code>initContainers</code>, rồi tới container chính.</li>
<li><strong>5.</strong> Probe chạy. Khi <strong>readinessProbe</strong> pass, IP của pod mới được thêm vào EndpointSlice của Service — từ giây đó pod mới nhận traffic.</li>
<li>Pod phase: <strong>Pending → Running → Succeeded/Failed</strong>. <code>restartPolicy</code> mặc định là <code>Always</code> cho pod của Deployment; Job dùng <code>OnFailure</code>/<code>Never</code>.</li>
<li><strong>Pod là đơn vị nhỏ nhất</strong>, không phải container: các container trong một pod dùng chung network namespace (gọi nhau qua <code>localhost</code>) và volume. Đây là nền tảng của sidecar (Dapr, log agent) và initContainer (chờ DB, tải model xuống volume dùng chung).</li>
<li><strong>Namespace</strong> là biên giới đặt tên và là nơi áp <code>ResourceQuota</code>/<code>LimitRange</code>; nó <strong>không</strong> chặn pod ở namespace này gọi pod ở namespace khác — muốn chặn phải dùng NetworkPolicy.</li></ul>
<h2 id="01-container/5g-rolling-update-probe">11. Rolling update và probe — thay pod mà không rớt request</h2>
<h3 id="01-container/5g1-rolling-update">11.1 Deployment thay pod thế nào</h3>
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
<h3 id="01-container/5g2-ba-probe">11.2 Ba probe — kubelet làm gì khi fail</h3>
<table><thead><tr><th>Probe</th><th>Trả lời câu hỏi</th><th>Fail thì kubelet làm gì</th></tr></thead><tbody>
<tr><td><strong>startupProbe</strong></td><td>App khởi động xong chưa?</td><td>Giết container theo <code>restartPolicy</code></td></tr>
<tr><td><strong>livenessProbe</strong></td><td>Tiến trình còn sống hay đã treo?</td><td><strong>Restart container</strong></td></tr>
<tr><td><strong>readinessProbe</strong></td><td>Nhận traffic được chưa?</td><td><strong>Gỡ IP pod khỏi EndpointSlice</strong> — ngừng nhận traffic, <em>không</em> restart</td></tr>
</tbody></table>
<ul><li><strong>startupProbe đè hai probe kia</strong>: khi có startupProbe, kubelet <em>không chạy</em> liveness và readiness cho tới khi startup thành công. Đây là lời giải đúng cho container nạp model mất 3 phút — thay vì nới <code>initialDelaySeconds</code> của liveness (làm chậm luôn khả năng phát hiện treo về sau).</li>
<li>Mặc định của mỗi probe: <code>initialDelaySeconds: 0</code>, <code>periodSeconds: 10</code>, <code>timeoutSeconds: 1</code>, <code>successThreshold: 1</code>, <code>failureThreshold: 3</code>. Nghĩa là mặc định container bị restart sau khoảng <strong>30 giây</strong> liveness fail liên tục, và <code>timeoutSeconds: 1</code> rất dễ fail oan với endpoint health check chậm.</li>
<li><strong>Bẫy lớn nhất</strong>: dùng chung một endpoint cho cả liveness lẫn readiness, mà endpoint đó lại đi kiểm tra Cosmos DB/PostgreSQL. DB chậm một nhịp là <em>toàn bộ</em> pod fail liveness và bị restart cùng lúc — sự cố tự gây ra. Nguyên tắc: <strong>liveness chỉ kiểm tra tiến trình của chính nó</strong> (trả 200 là đủ), còn <strong>readiness mới kiểm tra phụ thuộc</strong> (mất DB thì rút khỏi load balancer chứ không tự sát).</li></ul>
<h2 id="01-container/5h-scheduling-mang">12. Scheduling và mạng nội bộ — pod nằm ở đâu và gọi nhau kiểu gì</h2>
<h3 id="01-container/5h1-scheduling">12.1 Điều khiển nơi pod chạy</h3>
<ul><li>Scheduler <strong>lọc</strong> node theo <code>requests</code> và các ràng buộc, rồi <strong>chấm điểm</strong> chọn node tốt nhất. Khai <code>requests</code> quá lớn so với node là pod kẹt <code>Pending</code> vĩnh viễn dù cluster trông còn trống.</li>
<li><strong><code>nodeSelector</code></strong> — khớp label node, đơn giản và cứng. <strong><code>nodeAffinity</code></strong> — bản mạnh hơn, có <em>required</em> (bắt buộc) và <em>preferred</em> (ưu tiên, không có thì thôi).</li>
<li><strong><code>podAntiAffinity</code></strong> — không cho hai replica nằm cùng một node. <strong><code>topologySpreadConstraints</code></strong> — rải đều theo <code>topologyKey</code> (node, zone). Đây mới là thứ giữ dịch vụ sống khi một node hoặc một zone chết; PDB ở mục 9 <em>không</em> làm việc này.</li>
<li><strong>Taint đặt trên node, toleration đặt trên pod.</strong> Taint đẩy pod ra khỏi node (<code>kubectl taint nodes gpu-1 sku=gpu:NoSchedule</code>); toleration là giấy phép để pod được ở lại. Điểm hay bị hiểu ngược: <strong>toleration chỉ <em>cho phép</em> chứ không <em>bắt</em></strong> pod lên node đó — muốn ép pod GPU lên đúng node pool GPU thì phải <em>cộng thêm</em> <code>nodeSelector</code>/<code>nodeAffinity</code>.</li>
<li>Trên AKS, node pool GPU hoặc spot thường được taint sẵn, nên workload thường phải khai cả toleration lẫn nodeSelector.</li></ul>
<h3 id="01-container/5h2-service-dns">12.2 Service, EndpointSlice và DNS</h3>
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
<li><em>Nguồn cho mục 10–12: <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/deployment-v1/" target="_blank" rel="noopener">Kubernetes API — Deployment</a> (mặc định <code>maxSurge</code>/<code>maxUnavailable</code> 25%, <code>revisionHistoryLimit</code> 10, <code>progressDeadlineSeconds</code> 600, <code>minReadySeconds</code> 0) và <a href="https://kubernetes.io/docs/concepts/configuration/liveness-readiness-startup-probes/" target="_blank" rel="noopener">Liveness, Readiness, Startup probes</a>, đối chiếu ngày 18/09/2026.</em></li></ul>
<h2 id="01-container/5i-fastapi-dockerfile">13. Đóng gói một AI service — FastAPI, application factory và Dockerfile</h2>
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
<li>Tách <strong><code>/healthz</code></strong> (liveness — chỉ tiến trình) khỏi <strong><code>/ready</code></strong> (readiness — có model, có DB). Đây chính là điều kiện để mục 11.2 và mục 14 hoạt động đúng.</li></ul>
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
<li>Với worker (embedding, consumer hàng đợi) thì <strong>không mở ingress</strong> — xem cảnh báo scale-to-zero ở mục 14.</li></ul>
<h2 id="01-container/5j-aca-probe-scale">14. Container Apps — health probe, HTTP scaling và CPU scaling</h2>
<h3 id="01-container/5j1-aca-probe">14.1 Probe trong Container Apps khác AKS ở đâu</h3>
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
<h3 id="01-container/5j2-aca-scale">14.2 HTTP scaling, CPU scaling và cái bẫy scale-to-zero</h3>
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
<h2 id="01-container/5k-bicep">15. Bicep — triển khai khai báo cho chuỗi ACR → Container Apps</h2>
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
<ul><li><strong>Idempotent</strong>: chạy lại cùng một template không tạo bản sao, nó đưa tài nguyên về đúng trạng thái đã khai — giống nguyên lý điều hoà của Kubernetes ở mục 10.2.</li>
<li><strong>Phụ thuộc ngầm</strong>: tham chiếu <code>env.id</code> là đã nói với Bicep rằng app phải tạo sau environment. Chỉ dùng <code>dependsOn</code> khi thật sự không có tham chiếu nào.</li>
<li><code>existing</code> để <em>trỏ tới</em> tài nguyên đã có (registry, Key Vault) mà không quản lý vòng đời của nó — quên từ khoá này là template đi tạo/ghi đè tài nguyên của đội khác.</li>
<li><strong>Chế độ triển khai</strong>: mặc định là <code>Incremental</code> — tài nguyên không có trong template vẫn được giữ. <code>Complete</code> <strong>xoá</strong> mọi tài nguyên trong resource group không nằm trong template; đây là phương án nguy hiểm hay xuất hiện trong đề.</li>
<li><code>what-if</code> in ra danh sách tạo/sửa/xoá trước khi chạy thật — bắt buộc trước một lần triển khai <code>Complete</code>.</li>
<li>Nhớ khác biệt vỏ lệnh: Azure CLI dùng <code>--what-if</code>, Azure PowerShell dùng <code>New-AzResourceGroupDeployment -WhatIf</code>.</li>
<li>Secret <strong>không</strong> đặt trong file tham số: dùng <code>@secure()</code> cho param và lấy giá trị từ Key Vault (<code>getSecret</code> trong <code>keyVault</code> reference) hoặc từ biến của pipeline.</li>
<li>Gán quyền cũng khai bằng Bicep: một resource <code>Microsoft.Authorization/roleAssignments</code> gán <code>AcrPull</code> cho <code>app.identity.principalId</code> trên scope của registry — nhờ vậy cả chuỗi "identity + role + pull image" tái lập được bằng một lệnh.</li></ul>
<h2 id="01-container/6-checklist-on-domain-1">16. Checklist ôn Domain 1</h2>
<ul><li class="task" data-key="01-container:0"><input type="checkbox">Phân biệt SKU ACR và tính năng chỉ có ở Premium</li><li class="task" data-key="01-container:1"><input type="checkbox">Viết được <code>az acr build</code> và giải thích base image update trigger</li><li class="task" data-key="01-container:2"><input type="checkbox">Cấu hình App Service pull ACR bằng managed identity + <code>WEBSITES_PORT</code></li><li class="task" data-key="01-container:3"><input type="checkbox">Cú pháp Key Vault reference trong app settings</li><li class="task" data-key="01-container:4"><input type="checkbox">Hiểu revision, revision-scope vs application-scope, traffic splitting</li><li class="task" data-key="01-container:5"><input type="checkbox">Viết được KEDA scale rule <code>azure-servicebus</code> (metadata + auth)</li><li class="task" data-key="01-container:6"><input type="checkbox">Đọc-sửa được manifest Deployment/Service, biết requests vs limits, readiness vs liveness</li><li class="task" data-key="01-container:7"><input type="checkbox">Nhớ bảng chẩn đoán lỗi pod và các lệnh log/exec cho cả AKS và ACA</li></ul>
</section>
<section class="doc" id="02-data-services" data-title="2. Data services &amp; Vector" data-weight="25–30%" hidden>
<h1 id="02-data-services/domain-2-xay-dung-ai-solution-voi-azure-data-management-serv">Domain 2 — Xây dựng AI solution với Azure data management services (25–30%)</h1>
<p>Domain nặng điểm nhất. Trọng tâm: <strong>vector search + RAG</strong> trên ba dịch vụ: Cosmos DB for NoSQL, Azure Database for PostgreSQL, Azure Managed Redis.</p>
<hr>
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
<h3 id="02-data-services/a3-vector-search-trong-cosmos-db-for-nosql">1.3 Vector search trong Cosmos DB for NoSQL</h3>
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
<h3 id="02-data-services/a3b-full-text-va-hybrid-search">1.4 Full-text search và hybrid search (RRF)</h3>
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
<h3 id="02-data-services/a4-change-feed">1.5 Change feed</h3>
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
<h3 id="02-data-services/b2-pgvector-thiet-lap">2.2 pgvector — thiết lập</h3>
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
<h3 id="02-data-services/b3-index-cho-vector-giam-latency-compute-overhead">2.3 Index cho vector — giảm latency &amp; compute overhead</h3>
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
<h3 id="02-data-services/b4-cau-hinh-compute-memory-storage-cho-vector-workload">2.4 Cấu hình compute / memory / storage cho vector workload</h3>
<ul><li><strong>Tiers</strong>: Burstable (dev) → <strong>General Purpose</strong> (đa số production) → <strong>Memory Optimized</strong> (khuyến nghị cho vector: HNSW cần <strong>index nằm gọn trong RAM</strong> để tránh đọc disk).</li><li>Quy tắc ước lượng: kích thước index HNSW ≈ số vector × chiều × 4 byte × ~1.3–2. 1M vector 1536 chiều ≈ 6 GB dữ liệu + ~8–12 GB index → cần instance ≥ 32 GB RAM (hoặc chuyển DiskANN/halfvec).</li><li><strong>Storage</strong>: IOPS gắn với dung lượng đĩa; workload build index nặng I/O → chọn <strong>Premium SSD v2</strong> để tách IOPS/throughput khỏi size.</li><li><code>shared_buffers</code> ≈ 25% RAM, <code>effective_cache_size</code> ≈ 75% RAM, <code>work_mem</code> đủ cho sort/hash (cẩn thận nhân theo số connection).</li><li>Bật <strong>High Availability (zone-redundant)</strong> cho production, read replica để tách tải đọc RAG.</li></ul>
<h3 id="02-data-services/b5-rag-voi-metadata-filter-nguyen-van-trong-outline">2.5 RAG với metadata filter (nguyên văn trong outline)</h3>
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
<h3 id="02-data-services/c2-vector-index-voi-redisearch">3.2 Vector index với RediSearch</h3>
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
<h3 id="02-data-services/c9-redis-vector-chi-tiet">3.3 Vector search trong Managed Redis — FT.CREATE / FT.SEARCH chi tiết</h3>
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
<h2 id="02-data-services/d-so-sanh-nhanh-3-vector-store-cau-hoi-chon-dich-vu-nao">4. So sánh nhanh 3 vector store (câu hỏi "chọn dịch vụ nào")</h2>
<div class="tablewrap"><table><thead><tr><th>Tiêu chí</th><th>Cosmos DB for NoSQL</th><th>PostgreSQL + pgvector</th><th>Azure Managed Redis</th></tr></thead><tbody><tr><td>Mô hình</td><td>Document NoSQL, global distribution</td><td>Quan hệ, SQL đầy đủ, JOIN</td><td>Key-value in-memory</td></tr><tr><td>Vector index</td><td>flat / quantizedFlat / <strong>diskANN</strong></td><td>HNSW / IVFFlat / <strong>DiskANN</strong></td><td>FLAT / <strong>HNSW</strong></td></tr><tr><td>Điểm mạnh</td><td>Scale ngang cực lớn, multi-region write, change feed, SLA độ trễ</td><td>Truy vấn phức tạp, transaction, filter SQL mạnh, chi phí tốt</td><td>Latency &lt; ms, semantic cache, session</td></tr><tr><td>Điểm yếu</td><td>Cần hiểu RU &amp; partition key</td><td>Scale ngang khó hơn, phải quản index/vacuum</td><td>RAM đắt, không bền vững bằng</td></tr><tr><td>Chọn khi</td><td>App toàn cầu, khối lượng ghi lớn, cần change feed</td><td>Đã có dữ liệu quan hệ, cần filter/JOIN phong phú</td><td>Cần cache/độ trễ cực thấp cho tầng nóng</td></tr></tbody></table></div>
<hr>
<h2 id="02-data-services/d2-partition-key-va-hot-partition">5. Thiết kế partition key cho Cosmos DB — tránh hot partition</h2>
<p>Câu hỏi RU throttle mà "tổng capacity vẫn dư" gần như luôn là <strong>hot partition</strong>: RU chia đều cho các physical partition, một key nóng chỉ được dùng phần của nó.</p>
<ul><li>Chọn key có <strong>cardinality cao</strong> và <strong>trải đều cả đọc lẫn ghi</strong>: <code>/userId</code>, <code>/deviceId</code> tốt; <code>/date</code>, <code>/status</code>, <code>/tenantId</code> với một tenant khổng lồ là ứng viên hot partition kinh điển.</li>
<li>Ưu tiên key xuất hiện trong <strong>filter của truy vấn chính</strong> để query đi một partition (point read/single-partition query rẻ nhất); query thiếu partition key là <strong>cross-partition</strong> — chậm và đốt RU theo số partition.</li>
<li>Ghi dồn theo thời gian (telemetry, log): trộn thêm hậu tố — <strong>hierarchical partition key</strong> (<code>/tenantId</code> rồi <code>/deviceId</code>) hoặc key tổng hợp <code>deviceId_yyyyMM</code> — để một ngày/giờ không dồn vào một partition.</li>
<li>Chẩn đoán: metric <strong>Normalized RU consumption</strong> theo <code>PartitionKeyRangeId</code> trong Azure Monitor — một range chạm 100% trong khi các range khác nhàn rỗi = hot partition; sửa bằng đổi key (tạo container mới + change feed copy), không sửa được tại chỗ.</li>
<li>Giới hạn phải nhớ: một logical partition tối đa <strong>20 GB</strong>; vượt là lỗi ghi bất kể RU — key ít giá trị sẽ chạm trần này trước.</li></ul>
<h2 id="02-data-services/d3-cosmos-indexing-consistency-chi-tiet">6. Cosmos DB chuyên sâu — indexing policy và consistency</h2>
<h3 id="02-data-services/d31-indexing-policy">6.1 Indexing policy</h3>
<ul><li>Mặc định index <strong>mọi đường dẫn</strong> — tiện nhưng trả RU ghi cho cả field không bao giờ query. Container ghi nặng: chuyển sang <code>includedPaths</code> chọn lọc + <code>excludedPaths: /*</code>, RU ghi giảm rõ rệt.</li>
<li><strong>Composite index</strong> bắt buộc cho <code>ORDER BY</code> nhiều cột và giúp filter+sort phối hợp — đề cho query <code>ORDER BY c.category, c.price</code> chậm thì đáp án là thêm composite index, không phải tăng RU.</li>
<li>Vector index ba loại: <code>flat</code> (chính xác tuyệt đối, ≤505 chiều), <code>quantizedFlat</code> (nén, nhanh hơn), <code>diskANN</code> (ANN cho tập lớn, rẻ RU nhất) — nhớ bảng chọn theo kích thước tập và độ chính xác.</li>
<li>Indexing mode <code>none</code> chỉ hợp container thuần key-value đọc bằng point read; TTL bật ở container (xóa nền, không tốn RU đọc).</li>
<li>Chi tiết đã đối chiếu docs (Learn, 8/2026): <code>quantizedFlat</code>/<code>diskANN</code> cần <strong>≥ 1.000 vector</strong> mới hoạt động (ít hơn thì full scan, RU cao hơn); khuyến nghị chọn <code>quantizedFlat</code> khi tập tìm kiếm ≤ 50k vector, <code>diskANN</code> khi lớn hơn; distance function hỗ trợ cosine (mặc định) / dotproduct / euclidean, số chiều mặc định 1536, dùng <code>float16</code> giảm 50% dung lượng lưu vector.</li>
<li>Hai bẫy vận hành: query vector <strong>luôn kèm <code>TOP N</code></strong> (thiếu là RU và độ trễ tăng vọt), và <strong>đã bật vector search trên container thì không tắt được</strong>; account shared throughput không hỗ trợ.</li></ul>
<h3 id="02-data-services/d32-consistency">6.2 Năm mức consistency — chọn theo câu chuyện của đề</h3>
<table><thead><tr><th>Mức</th><th>Cam kết</th><th>Nhận dạng trong đề</th></tr></thead><tbody>
<tr><td><strong>Strong</strong></td><td>Đọc luôn thấy bản ghi mới nhất</td><td>"không bao giờ đọc dữ liệu cũ" — chỉ trong 1 region ghi; RU đọc gấp đôi eventual</td></tr>
<tr><td><strong>Bounded staleness</strong></td><td>Trễ tối đa K version / T giây</td><td>"chấp nhận trễ nhưng phải có giới hạn đo được"</td></tr>
<tr><td><strong>Session</strong> (mặc định)</td><td>Trong một session: read-your-own-writes</td><td>"người dùng phải thấy ngay cái mình vừa ghi" — 90% đáp án</td></tr>
<tr><td><strong>Consistent prefix</strong></td><td>Không bao giờ thấy sai thứ tự ghi</td><td>"có thể cũ nhưng không được đảo thứ tự"</td></tr>
<tr><td><strong>Eventual</strong></td><td>Rồi sẽ hội tụ</td><td>"đếm like/view, rẻ nhất là được"</td></tr>
</tbody></table>
<ul><li>Session dựa trên <strong>session token</strong> — nhiều instance app muốn chia sẻ "phiên" phải truyền token cho nhau, không thì mỗi instance một phiên riêng.</li></ul>

<h2 id="02-data-services/d4-pgvector-chuyen-sau">7. pgvector chuyên sâu — HNSW vs IVFFlat và chi phí</h2>
<table><thead><tr><th></th><th>HNSW</th><th>IVFFlat</th></tr></thead><tbody>
<tr><td>Build index</td><td>Chậm, tốn RAM (<code>maintenance_work_mem</code>)</td><td>Nhanh, nhẹ</td></tr>
<tr><td>Truy vấn</td><td>Nhanh và recall cao hơn</td><td>Chậm hơn ở cùng recall</td></tr>
<tr><td>Dữ liệu đến sau</td><td>Thêm dần được, không cần train</td><td>Cần dữ liệu sẵn để chia <code>lists</code>; thêm nhiều nên reindex</td></tr>
<tr><td>Núm chỉnh</td><td><code>m</code>, <code>ef_construction</code> lúc build; <code>SET hnsw.ef_search</code> lúc query</td><td><code>lists</code> lúc build; <code>SET ivfflat.probes</code> lúc query</td></tr>
</tbody></table>
<ul><li>Ba toán tử khoảng cách: <code>&lt;-&gt;</code> L2, <code>&lt;#&gt;</code> inner product (âm), <code>&lt;=&gt;</code> cosine — <strong>index phải khai đúng opclass với toán tử dùng trong query</strong> (ví dụ <code>vector_cosine_ops</code> cho <code>&lt;=&gt;</code>), lệch là index bị bỏ qua, quét tuần tự.</li>
<li>Tăng recall = tăng <code>ef_search</code>/<code>probes</code> — đổi bằng độ trễ; đề hỏi "kết quả thiếu tài liệu liên quan" thì chỉnh hai núm này trước khi nghĩ tới đổi index.</li>
<li>Filter metadata đi cùng vector: đặt cột filter vào <code>WHERE</code> và cân nhắc partial index cho tenant lớn; embedding cột <code>vector(1536)</code> phải khớp số chiều của model — đổi model là migrate cột.</li></ul>

<h3 id="02-data-services/d41-sizing-postgres-cho-vector">7.1 Sizing PostgreSQL cho vector workload</h3>
<ul><li>Quy tắc vàng: truy vấn HNSW nhanh khi <strong>index nằm gọn trong RAM</strong> (shared_buffers + page cache). Ước lượng thô kích thước dữ liệu vector: <code>số dòng × số chiều × 4 byte</code> + overhead index (HNSW thường cỡ ~2× dữ liệu vector) — 1 triệu vector 1536 chiều ≈ 6 GB dữ liệu, index tổng ~12 GB → chọn SKU Memory Optimized (tỷ lệ RAM/vCore 8:1) thay vì General Purpose (4:1).</li>
<li>Build index HNSW ăn <code>maintenance_work_mem</code>: đặt tạm thời lớn (ví dụ 8 GB) khi build rồi hạ lại; từ pgvector 0.6 build song song theo <code>max_parallel_maintenance_workers</code> — build chậm là thiếu hai thứ này, không phải thiếu vCore.</li>
<li>Storage: chọn tier IOPS đủ cho lúc index <em>không</em> vừa RAM (đọc lạnh); autogrow bật sẵn nhưng IOPS đi theo dung lượng ở một số tier — dữ liệu nhỏ mà cần IOPS cao thì nâng IOPS rời (SSD v2) thay vì phình dung lượng.</li>
<li>Triệu chứng → chỉnh gì: truy vấn vector chậm đều (index không vừa RAM → nâng RAM/SKU); chậm lúc mới khởi động rồi nhanh dần (cache nguội — bình thường); recall thấp (tăng <code>ef_search</code>, không liên quan SKU); build index cả giờ (tăng <code>maintenance_work_mem</code> + parallel workers).</li></ul>
<h3 id="02-data-services/d42-duoi-nap-capo-hnsw">7.2 Dưới nắp capo: HNSW duyệt đồ thị thế nào</h3>
<ul><li>HNSW = đồ thị nhiều tầng: tầng trên thưa (ít node, cạnh dài — như đường cao tốc), tầng dưới dày (mọi vector — như đường nội bộ). Truy vấn đi từ tầng trên xuống: mỗi tầng greedy-search tới node gần query nhất rồi tụt xuống tầng dưới, tầng cuối mở rộng ra <code>ef_search</code> ứng viên và lấy top-k.</li>
<li>Từ cơ chế đó suy ra mọi hành vi đã học: <code>ef_search</code> lớn = xét nhiều ứng viên hơn = recall cao hơn nhưng chậm hơn; <code>m</code> (số cạnh mỗi node) lớn = đồ thị dày = index to và build chậm nhưng tìm chính xác hơn; recall không bao giờ 100% vì greedy có thể kẹt cực trị cục bộ — đó là bản chất "approximate".</li>
<li>Vì mỗi bước nhảy là một lần đọc node <em>ngẫu nhiên</em> trong đồ thị, HNSW cực nhạy với việc <strong>index nằm ngoài RAM</strong>: mỗi hop thành một lần đọc đĩa → độ trễ nhảy từ ms lên trăm ms. IVFFlat khác hẳn: chia cụm (k-means) rồi quét tuần tự <code>probes</code> cụm gần nhất — đọc tuần tự nên chịu đĩa tốt hơn, nhưng cụm biên giới làm recall thấp hơn ở cùng tốc độ.</li>
<li>DiskANN (Cosmos) là họ hàng giải đúng bài "index to hơn RAM": đồ thị nén + bố trí dữ liệu thân thiện SSD — lý do nó là lựa chọn mặc định cho tập &gt;50k vector trên Cosmos.</li></ul>
<h3 id="02-data-services/d43-chon-toan-tu-nao">7.3 Chọn toán tử nào — <code>&lt;=&gt;</code>, <code>&lt;-&gt;</code> hay <code>&lt;#&gt;</code></h3>
<p>Bảng ở mục 2.3 nói toán tử nào đi với opclass nào. Còn câu hỏi thi hay hỏi là câu khác: <em>tình huống này thì dùng cái nào</em>. Khác biệt duy nhất giữa ba toán tử là chúng xử lý <strong>độ dài</strong> vector ra sao.</p>
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
<li><strong>Quy tắc làm bài</strong>: mặc định là cosine. Chỉ chọn khác khi đề nói rõ "độ lớn/cường độ có ý nghĩa" (→ L2) hoặc "model được huấn luyện cho dot product" (→ inner product). Và dù chọn gì thì index phải khai đúng opclass tương ứng, nếu không index bị bỏ qua — xem mục 2.3.</li></ul>
<h2 id="02-data-services/d5-postgresql-pooling">8. PostgreSQL Flexible Server — kết nối và pooling</h2>
<ul><li><strong>PgBouncer dựng sẵn</strong>: bật tham số <code>pgbouncer.enabled</code>, kết nối qua cổng <strong>6432</strong> (cổng 5432 vẫn là kết nối thẳng). Mặc định <strong>transaction pooling</strong> — một kết nối server phục vụ nhiều client theo từng transaction.</li>
<li>Vì transaction pooling, các tính năng bám session <strong>không dùng được qua pooler</strong>: prepared statement mức session, <code>SET</code> phiên, advisory lock, LISTEN/NOTIFY — app dùng những thứ đó thì vào cổng 5432.</li>
<li>Kịch bản đề kinh điển: Function/Container Apps scale ra hàng trăm instance → <em>connection storm</em>, lỗi "too many connections" vì <code>max_connections</code> theo SKU — đáp án là <strong>PgBouncer</strong>, không phải nâng SKU.</li>
<li>Đo: <code>pg_stat_activity</code> xem kết nối đang chiếm; idle connection vẫn ăn RAM — đặt <code>idle_in_transaction_session_timeout</code>.</li>
<li>Chi tiết đã đối chiếu docs (Learn, 8/2026): PgBouncer built-in <strong>không có trên tier Burstable</strong> (đổi xuống Burstable là mất pooling); mặc định <code>default_pool_size</code> 50, <code>max_client_conn</code> 5000; từ bản hiện tại đặt <code>max_prepared_statements</code> &gt; 0 thì prepared statement <em>mức protocol</em> dùng được ngay trong transaction mode; PgBouncer restart cùng server khi scale/failover nên app phải biết reconnect.</li></ul>

<h2 id="02-data-services/d6-redis-caching-patterns">9. Managed Redis — caching pattern và eviction</h2>
<ul><li><strong>Cache-aside</strong> (mặc định của đề): đọc cache → miss thì đọc DB rồi ghi cache kèm TTL. <strong>Write-through</strong>: ghi cache cùng lúc ghi DB — đọc luôn ấm nhưng ghi chậm hơn. <strong>Write-behind</strong>: ghi cache trước, đẩy DB sau — nhanh nhất, rủi ro mất khi cache chết.</li>
<li>Chống <em>cache stampede</em> (hàng nghìn request cùng miss một key hết hạn): TTL cộng <strong>jitter ngẫu nhiên</strong>, hoặc khóa một request đi tải còn lại đợi.</li>
<li>Invalidation khi dữ liệu nguồn đổi: xóa key chủ động từ đường ghi (tốt nhất), hoặc pub/sub báo các instance xóa cache cục bộ; TTL chỉ là lưới đỡ cuối.</li>
<li><strong>Eviction policy</strong>: <code>allkeys-lru</code> cho cache thuần; <code>volatile-lru</code> khi có key phải sống mãi; <code>noeviction</code> làm lệnh ghi lỗi khi đầy — thấy lỗi OOM ghi cache là nhìn policy này.</li>
<li>Managed Redis chạy Redis Enterprise: có sẵn module <strong>RediSearch (vector)</strong>, RedisJSON; chọn clustering policy <em>OSS</em> (client cluster-aware, scale cao nhất) hay <em>Enterprise</em> (client thường dùng được) là câu hỏi cấu hình hay gặp.</li></ul>
<h2 id="02-data-services/d7-duoi-nap-capo-ru-partition-change-feed">10. Dưới nắp capo: RU, partition split và change feed</h2>
<ul><li><strong>RU là đơn vị quy đổi tài nguyên</strong> (CPU + IO + memory của một thao tác). Mốc neo: point read 1 KB = <strong>1 RU</strong>; ghi 1 KB ≈ <strong>5 RU</strong> — vì ghi phải cập nhật <em>mọi</em> đường dẫn được index (đây là lý do tỉa indexing policy giảm RU ghi, và tài liệu lớn tốn RU hơn tuyến tính).</li>
<li>Đọc ở strong/bounded staleness tốn ~2× vì phải <strong>chờ/đối chiếu quorum replica</strong> thay vì trả từ một replica gần nhất — cái giá của việc "không bao giờ đọc cũ" nằm ở tầng replication chứ không phải phép màu.</li>
<li><strong>Physical partition</strong> chứa nhiều logical partition, trần ~<strong>50 GB và 10.000 RU/s</strong> mỗi physical. Vượt là engine <strong>split</strong> tự động: chia dải giá trị hash của partition key ra hai physical mới. Suy ra hai hệ quả đề hay hỏi: RU provision bị <em>chia đều</em> cho các physical (10k RU trên 5 physical = mỗi cái 2k — key nóng chỉ được 2k), và split chỉ giúp khi giá trị key <em>đa dạng</em> — một logical partition (một giá trị key) không bao giờ tách được, nên trần 20 GB logical là trần cứng.</li>
<li><strong>Change feed</strong> thực chất là đọc tuần tự log thay đổi <em>theo từng partition key range</em>: processor chia các range cho các worker qua <strong>lease container</strong> (mỗi lease = một range + checkpoint continuation token). Vì vậy scale consumer = số range, thứ tự chỉ bảo đảm <em>trong một partition key</em>, và xóa (delete) mặc định không xuất hiện trong feed (dùng TTL soft-delete hoặc full-fidelity mode).</li></ul>
<h2 id="02-data-services/d8-postgres-schema-datatype">11. Thiết kế bảng và chọn kiểu dữ liệu trong PostgreSQL</h2>
<p>Một gạch đầu dòng nguyên văn của outline: "Model schemas and implement indexing strategies, <strong>including designing tables and choosing appropriate data types</strong>". Phần vector đã học kỹ ở mục 2 và 7; mục này là phần schema thuần — chọn kiểu cột, đặt index theo toán tử, và cái bẫy TOAST của cột embedding.</p>
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
<h3 id="02-data-services/d81-kieu-vector">11.1 Kiểu vector — trần chiều của kiểu khác trần chiều index được</h3>
<table><thead><tr><th>Kiểu</th><th>Dung lượng</th><th>Trần của kiểu</th><th>Index (HNSW / IVFFlat) tới</th></tr></thead><tbody>
<tr><td><code>vector</code></td><td>4 × d + 8 byte</td><td>16.000 chiều</td><td><strong>2.000 chiều</strong></td></tr>
<tr><td><code>halfvec</code> (nửa độ chính xác)</td><td>2 × d + 8 byte</td><td>16.000 chiều</td><td><strong>4.000 chiều</strong></td></tr>
<tr><td><code>bit</code> (nhị phân)</td><td>d / 8 + 8 byte</td><td>—</td><td>64.000 chiều</td></tr>
<tr><td><code>sparsevec</code></td><td>8 × số phần tử khác 0 + 16 byte</td><td>16.000 phần tử khác 0</td><td>1.000 phần tử khác 0</td></tr>
</tbody></table>
<ul><li>Điểm ăn tiền: <code>text-embedding-3-large</code> ra <strong>3.072 chiều</strong> — <code>vector(3072)</code> <em>lưu</em> được nhưng <strong>không tạo được HNSW/IVFFlat</strong> vì quá 2.000. Hai lối thoát: ép sang halfvec trong index (<code>CREATE INDEX ON chunk USING hnsw ((embedding::halfvec(3072)) halfvec_cosine_ops)</code>) hoặc gọi model với tham số <code>dimensions=1536</code> ngay từ đầu.</li>
<li>Lỗi hay gặp trong đề: "tạo index báo lỗi column does not have dimensions" — cột khai <code>vector</code> trống chiều thì index không biết độ dài, phải khai <code>vector(1536)</code>.</li></ul>
<h3 id="02-data-services/d82-toast-va-partition">11.2 TOAST, partition và bloat — ba thứ làm vector workload chậm dần</h3>
<ul><li><strong>TOAST</strong>: giá trị lớn hơn ngưỡng ~2 KB bị PostgreSQL đẩy ra bảng phụ (out-of-line) và nén. Một <code>vector(1536)</code> nặng 6.152 byte nên <em>mặc định nằm ngoài dòng</em> — mỗi lần đọc thêm một lần dò bảng TOAST. pgvector cho phép giữ inline: <code>ALTER TABLE chunk ALTER COLUMN embedding SET STORAGE PLAIN;</code> — nhanh hơn khi quét tuần tự, đổi lại dòng to hơn và bảng phình. Lưu ý đặt xong chỉ áp cho dữ liệu ghi <em>sau</em> đó; muốn áp cho dòng cũ phải ép viết lại bảng (<code>VACUUM FULL</code>).</li>
<li><strong>Partition theo thời gian</strong> (<code>PARTITION BY RANGE (created_at)</code>) khi phải xoá dữ liệu cũ hàng loạt: gỡ một partition (<code>DETACH PARTITION</code> rồi <code>DROP TABLE</code>) là thao tác metadata, còn <code>DELETE</code> vài triệu dòng sinh dead tuple và bắt autovacuum dọn — trong lúc đó index HNSW phình và truy vấn chậm dần.</li>
<li><strong>Bloat</strong>: cập nhật embedding = xoá + chèn ở tầng lưu trữ (MVCC), nên re-embedding cả bảng làm index to gấp đôi. Sau một đợt re-embed lớn nên <code>REINDEX INDEX CONCURRENTLY</code> thay vì chờ autovacuum.</li>
<li><em>Nguồn: <a href="https://www.postgresql.org/docs/current/datatype-character.html" target="_blank" rel="noopener">PostgreSQL — Character Types</a> (tip "không có khác biệt hiệu năng giữa <code>text</code>, <code>varchar</code>, <code>char</code>") và <a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener">pgvector README</a> (dung lượng và trần chiều của từng kiểu), đối chiếu ngày 18/09/2026.</em></li></ul>
<h2 id="02-data-services/d9-hierarchical-partition-key">12. Hierarchical partition key — cách vượt trần 20 GB của logical partition</h2>
<p>Mục 5 đã nói trần cứng 20 GB cho một giá trị partition key. Hierarchical partition key (còn gọi <em>subpartitioning</em>) là lối thoát chính thức, và là câu hỏi thiết kế hay gặp trong kịch bản multi-tenant.</p>
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
<h2 id="02-data-services/d10-vector-index-cosmos">13. Chọn chỉ mục vector trong Cosmos DB — flat, quantizedFlat hay diskANN</h2>
<p>Mục 1.3 đã dựng được vector search. Mục này là phần "chọn loại index nào", chỗ đề hay ra một kịch bản kèm con số rồi bắt chọn.</p>
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
<li><strong>Không sửa tại chỗ được</strong> vector embedding policy hay vector index: thêm/bớt đường dẫn thì được, đổi cấu hình của một đường dẫn thì phải xoá rồi thêm lại.</li>
<li>Luôn có <code>TOP N</code> trong truy vấn vector — thiếu nó là engine cố trả về rất nhiều kết quả, RU và độ trễ tăng vọt.</li>
<li>Hai giới hạn hay quên: không dùng được trên account <em>shared throughput</em>, và bật vector search trên container rồi thì <strong>không tắt được</strong>.</li>
<li><em>Nguồn: <a href="https://learn.microsoft.com/azure/cosmos-db/nosql/vector-search" target="_blank" rel="noopener">Microsoft Learn — Integrated vector store (Cosmos DB for NoSQL)</a>, đối chiếu ngày 18/09/2026.</em></li></ul>
<h2 id="02-data-services/d11-explain">14. Đọc kế hoạch truy vấn PostgreSQL — <code>EXPLAIN (ANALYZE, BUFFERS)</code></h2>
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
<tr><td><code>shared read=</code> lớn, <code>shared hit=</code> nhỏ</td><td>Đọc từ đĩa chứ không từ cache</td><td>Thiếu RAM so với working set — đúng triệu chứng index HNSW không vừa bộ nhớ ở mục 7.1</td></tr>
<tr><td>Không thấy <code>Index Scan using …_hnsw_idx</code></td><td>Truy vấn vector không dùng index</td><td>Thiếu <code>ORDER BY … LIMIT</code>, hoặc toán tử không khớp opclass của index</td></tr>
</tbody></table>
<ul><li><code>EXPLAIN</code> trần chỉ <strong>ước lượng</strong> và không chạy truy vấn; <code>ANALYZE</code> chạy thật nên đừng dùng với <code>UPDATE</code>/<code>DELETE</code> ngoài transaction có <code>ROLLBACK</code>. <code>BUFFERS</code> mới là thứ cho biết dữ liệu đến từ cache hay đĩa.</li>
<li><code>ANALYZE</code> (lệnh riêng) lấy <strong>mẫu ngẫu nhiên</strong> để cập nhật statistics — nhanh, nên chạy sau mỗi lần nạp dữ liệu lớn. Đừng nhầm với tuỳ chọn <code>ANALYZE</code> bên trong <code>EXPLAIN</code>.</li>
<li>Xếp hạng truy vấn tốn kém nhất: bật extension <strong><code>pg_stat_statements</code></strong> rồi sắp theo <code>total_exec_time</code>. Trên Azure Database for PostgreSQL flexible server còn có <strong>Query Store</strong> (tham số <code>pg_qs.query_capture_mode</code>) lưu lịch sử truy vấn để so sánh theo thời gian.</li>
<li>Bản thân phép đo của <code>EXPLAIN ANALYZE</code> có overhead, nên đọc theo hướng <em>so sánh tương đối</em> giữa các nhánh của kế hoạch, đừng coi là con số latency thật của production.</li></ul>
<h2 id="02-data-services/d12-mvcc-vacuum">15. MVCC, autovacuum, transaction và lock — vì sao bảng phình và truy vấn chậm dần</h2>
<p>Mục 11.2 đã nói tới bloat như một triệu chứng. Đây là cơ chế đứng sau nó, và là phần giải thích tại sao "đã xoá dữ liệu rồi mà dung lượng không giảm".</p>
<ul><li><strong>MVCC</strong>: <code>UPDATE</code> và <code>DELETE</code> <em>không</em> xoá dòng cũ ngay. Postgres tạo version mới và giữ version cũ cho tới khi không transaction nào còn cần nhìn thấy nó. Phần còn lại đó là <strong>dead tuple</strong>. Hệ quả: một lần <code>UPDATE</code> cột embedding của cả bảng làm bảng và index to gần gấp đôi.</li></ul>
<table><thead><tr><th></th><th><code>VACUUM</code></th><th><code>VACUUM FULL</code></th></tr></thead><tbody>
<tr><td>Khoá</td><td><code>SHARE UPDATE EXCLUSIVE</code> — đọc và ghi vẫn chạy</td><td><code>ACCESS EXCLUSIVE</code> — <strong>chặn tất cả</strong></td></tr>
<tr><td>Dung lượng</td><td>Đánh dấu để tái sử dụng, <strong>không trả lại OS</strong></td><td>Viết lại bảng, <strong>trả dung lượng về OS</strong></td></tr>
<tr><td>Chi phí</td><td>Nhẹ, chạy được lúc production</td><td>Chậm, cần thêm chỗ trống bằng cỡ bảng</td></tr>
</tbody></table>
<ul><li>Đây là câu trả lời cho "đã <code>DELETE</code> mà dung lượng đĩa không giảm": <code>VACUUM</code> thường chỉ giải phóng chỗ <em>bên trong</em> file để ghi tiếp. Muốn thu hồi thật thì <code>VACUUM FULL</code> (khoá bảng) hoặc <code>pg_repack</code>, và tốt hơn cả là đừng <code>DELETE</code> hàng loạt mà dùng partition như mục 11.2.</li>
<li><strong>autovacuum kích hoạt</strong> khi số dead tuple vượt <code>autovacuum_vacuum_threshold</code> (mặc định 50) cộng <code>autovacuum_vacuum_scale_factor</code> × số dòng của bảng. Với bảng rất lớn, vế nhân chi phối: bảng 200 triệu dòng phải tích luỹ hàng chục triệu dead tuple mới được dọn. Bảng nóng nên chỉnh riêng thay vì đổi toàn server:<br><code>ALTER TABLE doc_chunks SET (autovacuum_vacuum_scale_factor = 0.02);</code></li>
<li><strong>Kẻ thù số một của autovacuum là transaction mở lâu.</strong> Một phiên <code>idle in transaction</code> hay một replication slot bị bỏ quên giữ lại snapshot cũ, nên dead tuple <em>không được phép</em> dọn dù autovacuum chạy đều. Soi bằng <code>SELECT * FROM pg_stat_activity WHERE state = 'idle in transaction';</code> và đặt <code>idle_in_transaction_session_timeout</code>.</li>
<li>autovacuum <strong>bỏ qua bảng cha của partition và foreign table</strong> — phải <code>ANALYZE</code> tay cho bảng cha, nếu không planner ước lượng sai trên toàn bộ phân vùng.</li>
<li><strong>Transaction ID wraparound</strong>: XID là số 32 bit nên quay vòng sau ~4 tỷ transaction. <code>VACUUM</code> đánh dấu dòng cũ là <em>frozen</em> để chúng luôn được coi là quá khứ. <code>autovacuum_freeze_max_age</code> (mặc định 200 triệu) ép autovacuum chạy dù bảng không có dead tuple; còn dưới 3 triệu XID khả dụng thì server <strong>từ chối transaction ghi mới</strong> — sự cố nghiêm trọng nhất của một Postgres bị bỏ bê.</li></ul>
<h3 id="02-data-services/d121-isolation-lock">15.1 Isolation level và lock khi migrate</h3>
<ul><li><strong>Read Committed</strong> (mặc định): mỗi <em>câu lệnh</em> nhìn một snapshot mới, nên hai lần <code>SELECT</code> trong cùng transaction có thể ra khác nhau. <strong>Repeatable Read</strong>: khoá snapshot cho cả transaction. <strong>Serializable</strong>: chặt nhất, và app <strong>phải có vòng retry</strong> vì transaction có thể bị huỷ với lỗi <em>could not serialize access</em>.</li>
<li><code>ALTER TABLE … ADD COLUMN … DEFAULT &lt;hằng&gt;</code> chỉ sửa metadata nên nhanh; nhưng <code>ALTER COLUMN … TYPE</code> viết lại cả bảng và giữ <code>ACCESS EXCLUSIVE</code>.</li>
<li>Điểm chí mạng khi migrate: một lệnh DDL cần <code>ACCESS EXCLUSIVE</code> sẽ <strong>xếp hàng sau truy vấn dài đang chạy, và mọi truy vấn đến sau lại xếp hàng sau nó</strong> — một lệnh "chạy 10 mili giây" có thể làm đứng cả hệ thống vài phút. Luôn đặt <code>SET lock_timeout = '3s';</code> trước DDL và thử lại, thay vì để nó chờ vô hạn.</li>
<li>Tạo index trên bảng đang chạy: <code>CREATE INDEX CONCURRENTLY</code> không khoá ghi (chậm hơn, quét hai lượt); nếu lỗi giữa chừng nó để lại index <code>INVALID</code> — phải <code>DROP INDEX</code> rồi làm lại.</li>
<li><em>Nguồn: <a href="https://www.postgresql.org/docs/current/routine-vacuuming.html" target="_blank" rel="noopener">PostgreSQL — Routine Vacuuming</a> (MVCC, VACUUM vs VACUUM FULL, công thức autovacuum, wraparound), đối chiếu ngày 18/09/2026.</em></li></ul>
<h2 id="02-data-services/d13-redis-pubsub-streams">16. Azure Managed Redis — pub/sub và Streams cho điều phối thời gian thực</h2>
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
<h2 id="02-data-services/d14-postgres-trong-duong-di-cua-app-llm">17. PostgreSQL trong đường đi của một app LLM — token, ghi vector an toàn, truy hồi lai</h2>
<p>Ba mục trước đã lo phần <em>lưu</em> và <em>đánh chỉ mục</em> vector. Mục này đi nốt quãng còn lại của một ứng dụng LLM thật: đăng nhập bằng gì, ghi embedding thế nào cho khỏi thủng, và truy hồi ra sao khi câu hỏi của người dùng vừa cần ngữ nghĩa vừa cần đúng từ khoá.</p>
<h3 id="02-data-services/d14a-entra-token-postgres">17.1 Entra ID làm mật khẩu — và cái bẫy token hết hạn</h3>
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
<h3 id="02-data-services/d14b-ghi-vector-an-toan">17.2 Ghi embedding từ Python — chỗ duy nhất trong pipeline RAG dễ bị tiêm SQL</h3>
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
<li><strong>Bẫy khi dùng chung với PgBouncer</strong>: psycopg3 tự chuyển câu lệnh sang <em>prepared statement</em> sau vài lần chạy giống nhau. Qua pooler ở transaction mode, việc đó hỏng trừ khi đặt <code>pgbouncer.max_prepared_statements</code> &gt; 0 (xem mục 8). Bên kia là tắt bằng <code>prepare_threshold=None</code>.</li>
<li><strong>psycopg vs SQLAlchemy</strong>: psycopg là driver, viết SQL thẳng — hợp với truy vấn vector vì bạn cần kiểm soát chính xác toán tử và index hint. SQLAlchemy là ORM, hợp khi bảng vector nằm chung model với phần nghiệp vụ; nó vẫn gọi psycopg ở dưới, và <code>pgvector.sqlalchemy.Vector</code> cung cấp kiểu cột.</li>
<li>Kiểm nhanh một pipeline có an toàn không: grep tìm f-string và <code>%</code> đứng cạnh <code>execute(</code>. Không có kết quả mới là sạch.</li></ul>
<h3 id="02-data-services/d14c-full-text-hybrid">17.3 Full-text search của PostgreSQL và truy hồi lai</h3>
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
<li>Tiếng Việt không có bộ cấu hình dựng sẵn. Dùng <code>'simple'</code> (chỉ tách từ theo khoảng trắng, không stem) là chạy được và bắt đúng mã/số hiệu; muốn hơn thế thì phải cài dictionary riêng.</li></ul>
<p><strong>Hợp nhất hai bảng xếp hạng — RRF.</strong> Điểm cosine (0–2) và điểm <code>ts_rank_cd</code> (không chặn trên) không cùng thang, cộng thẳng là vô nghĩa. Reciprocal Rank Fusion bỏ qua điểm và chỉ dùng <em>thứ hạng</em>:</p>
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
<h2 id="02-data-services/e-checklist-on-domain-2">18. Checklist ôn Domain 2</h2>
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
<h3 id="03-messaging-functions/4b4-duoi-nap-capo-peek-lock-amqp">5.4 Dưới nắp capo: PEEK_LOCK và lock renewal ở tầng AMQP</h3>
<ul><li>PEEK_LOCK không "lấy message ra khỏi queue": broker chỉ <strong>đánh dấu khóa</strong> message và trao cho receiver một <strong>lock token</strong>. Message vẫn nằm trên broker; <code>complete/abandon/dead-letter</code> là các thao tác <em>trên token đó</em> qua link AMQP.</li>
<li>Khóa có hạn (mặc định 30 giây – tối đa 5 phút): xử lý lâu hơn thì SDK phải <strong>renew lock</strong> — một management operation lặp lại nền. Mất mạng, GC pause, hay xử lý quá <code>MaxAutoLockRenewalDuration</code> → khóa hết hạn → broker coi như receiver chết, <strong>tăng DeliveryCount và giao lại</strong>. Đây chính là nguồn gốc kỹ thuật của at-least-once: giữa lúc "xử lý xong" và "complete được ghi nhận" luôn có khe hở.</li>
<li>RECEIVE_AND_DELETE xóa ngay lúc giao — nhanh (bớt một round-trip) nhưng receiver chết là mất message: at-most-once. Chọn giữa hai mode là chọn giữa <em>mất</em> và <em>trùng</em>; vì trùng xử lý được bằng idempotency còn mất thì không, PEEK_LOCK là mặc định đúng.</li>
<li>Session dưới nắp: broker gắn <strong>khóa cấp session</strong> — một receiver giữ độc quyền cả <code>SessionId</code> chứ không phải từng message; vì thế thứ tự trong session được bảo đảm còn throughput = số session đang mở song song.</li></ul>
<h2 id="03-messaging-functions/4c-functions-binding-cookbook-hosting">6. Functions chuyên sâu — binding cookbook và hosting plan</h2>
<h3 id="03-messaging-functions/4c1-binding-cookbook">6.1 Trigger/binding hay ra đề</h3>
<ul><li><strong>Service Bus trigger + output binding</strong>: nhận từ queue, ghi kết quả sang queue/Cosmos mà không viết SDK — nhớ <code>autoCompleteMessages</code> và lock renewal khi xử lý lâu.</li>
<li><strong>Blob qua Event Grid</strong>: blob trigger kiểu polling cũ chậm và tốn — chuẩn hiện tại là Event Grid trigger (<code>source: EventGrid</code>) cho gần-tức-thì; đây là cặp phân biệt được hỏi thẳng.</li>
<li><strong>Timer trigger</strong> dùng CRON 6 trường (<code>0 */5 * * * *</code> = mỗi 5 phút); <strong>Cosmos DB trigger</strong> = change feed processor đóng gói sẵn (cần lease container).</li>
<li>Retry: Service Bus/Storage queue retry bằng <strong>delivery count của chính queue</strong> (đừng bật retry policy chồng lên); Event Hubs/Timer/Cosmos hỗ trợ retry policy <code>fixedDelay</code>/<code>exponentialBackoff</code> trong host.json.</li></ul>
<h3 id="03-messaging-functions/4c2-hosting-plan">6.2 Chọn hosting plan</h3>
<table><thead><tr><th>Plan</th><th>Chọn khi</th><th>Cần nhớ</th></tr></thead><tbody>
<tr><td><strong>Flex Consumption</strong></td><td>Serverless hiện đại, cần VNet + scale nhanh</td><td>Trả theo dùng, per-instance concurrency, always-ready instances tùy chọn</td></tr>
<tr><td><strong>Consumption (cổ điển)</strong></td><td>Rẻ nhất, tải thưa</td><td>Cold start; timeout mặc định 5 phút (max 10); không VNet</td></tr>
<tr><td><strong>Premium (EP)</strong></td><td>Không chấp nhận cold start, chạy dài, VNet</td><td>Pre-warmed instances, không giới hạn 10 phút</td></tr>
<tr><td><strong>Dedicated/ACA</strong></td><td>Đã có App Service plan / muốn chạy cạnh container</td><td>Trả cố định theo plan</td></tr>
</tbody></table>
<ul><li>Bẫy quen: "job 30 phút trên Consumption" → chuyển Premium/Flex hoặc tách qua queue + Container Apps; "cold start làm API chậm ngẫu nhiên" → Premium pre-warmed hoặc Flex always-ready.</li></ul>
<h2 id="03-messaging-functions/4d-eventgrid-topic-va-function-key">7. Bốn loại topic của Event Grid và access key của Functions</h2>
<p>Hai chỗ còn thiếu so với outline: "custom events" của Event Grid (cụ thể là chọn custom topic hay domain) và "configure and deploy function apps" ở khía cạnh <em>ai được gọi endpoint</em>.</p>
<h3 id="03-messaging-functions/4d1-bon-loai-topic">7.1 System topic, custom topic, domain, partner topic</h3>
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
<h3 id="03-messaging-functions/4d2-function-access-key">7.2 Access key của Azure Functions</h3>
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
<h2 id="03-messaging-functions/4e-target-based-scaling">8. Functions scale ra sao — scale controller và target-based scaling</h2>
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
<h2 id="03-messaging-functions/4f-durable-replay">9. Durable Functions — replay và ràng buộc xác định</h2>
<p>Orchestrator dùng <strong>event sourcing</strong>: mỗi khi có sự kiện mới (một activity xong, một timer nổ), runtime <em>chạy lại hàm orchestrator từ đầu</em> và đọc lại history. Lời gọi nào đã có kết quả trong history thì trả về ngay, lời gọi mới mới thực sự được xếp lịch. Vì thế hàm orchestrator <strong>phải xác định</strong>: chạy bao nhiêu lần cũng phải ra cùng một chuỗi quyết định.</p>
<table><thead><tr><th>Không được dùng trong orchestrator</th><th>Vì sao</th><th>Dùng gì thay</th></tr></thead><tbody>
<tr><td><code>datetime.now()</code>, <code>datetime.utcnow()</code></td><td>Mỗi lần replay ra một giá trị khác</td><td><code>context.current_utc_datetime</code></td></tr>
<tr><td><code>uuid.uuid4()</code></td><td>Không tái lập được</td><td><code>context.new_guid()</code> (UUID type 5)</td></tr>
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
<h2 id="03-messaging-functions/5-checklist-on-domain-3">10. Checklist ôn Domain 3</h2>
<ul><li class="task" data-key="03-messaging-functions:0"><input type="checkbox">Phân biệt message vs event; chọn đúng Service Bus / Event Grid / Event Hubs / Queue Storage</li><li class="task" data-key="03-messaging-functions:1"><input type="checkbox">PEEK_LOCK vs RECEIVE_AND_DELETE; complete/abandon/dead-letter/defer; lock renewal</li><li class="task" data-key="03-messaging-functions:90"><input type="checkbox">Giải thích được vì sao consumer phải idempotent, và duplicate detection lọc trùng ở phía nào</li><li class="task" data-key="03-messaging-functions:91"><input type="checkbox">Chọn đúng công cụ theo triệu chứng: trùng / sai thứ tự / poison message / 429 chập chờn</li><li class="task" data-key="03-messaging-functions:2"><input type="checkbox">5 nguyên nhân message vào DLQ; đường dẫn <code>$deadletterqueue</code>; cách resubmit</li><li class="task" data-key="03-messaging-functions:3"><input type="checkbox">Ba loại filter và luôn nhớ xoá rule <code>$Default</code></li><li class="task" data-key="03-messaging-functions:4"><input type="checkbox">Event Grid: schema vs CloudEvents; subject/advanced filter; retry backoff, mã 4xx không retry</li><li class="task" data-key="03-messaging-functions:5"><input type="checkbox">Dead-letter Event Grid cần blob container, nếu không cấu hình thì event bị mất</li><li class="task" data-key="03-messaging-functions:6"><input type="checkbox">Webhook validation handshake</li><li class="task" data-key="03-messaging-functions:7"><input type="checkbox">Trigger/binding: mỗi hàm 1 trigger, cú pháp decorator Python v2</li><li class="task" data-key="03-messaging-functions:8"><input type="checkbox">Bảng chọn hosting plan (đặc biệt timeout của Consumption)</li><li class="task" data-key="03-messaging-functions:9"><input type="checkbox">Identity-based connection: hậu tố <code>__fullyQualifiedNamespace</code>, <code>__accountEndpoint</code></li></ul>
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
<h2 id="04-security-monitoring/2b-key-vault-rotation-app-config-nang-cao">3. Chuyên sâu: rotation của Key Vault và refresh của App Configuration</h2>
<h3 id="04-security-monitoring/2b1-rotation">3.1 Rotation</h3>
<ul><li><strong>Key</strong> (khóa mã hóa): đặt được <strong>rotation policy tự động</strong> ngay trong Key Vault (ví dụ xoay mỗi 90 ngày) — ứng dụng dùng qua key URI không version thì tự nhận bản mới.</li>
<li><strong>Secret</strong> (mật khẩu, connection string): Key Vault <strong>không tự xoay được</strong> — mẫu chuẩn: Event Grid bắn event <code>SecretNearExpiry</code> → Function tạo credential mới ở dịch vụ nguồn → ghi version secret mới. Đề hỏi "tự động xoay mật khẩu DB" là hỏi đúng pipeline này.</li>
<li>Tham chiếu không ghim version (<code>.../secrets/DbPassword</code> không có suffix) để app lấy bản mới nhất; App Service Key Vault reference cache và <strong>tự refetch mỗi 24 giờ</strong> (đã đối chiếu docs, Learn 8/2026) — mọi thay đổi cấu hình app gây restart và refetch ngay, hoặc ép refresh bằng POST tới endpoint <code>.../config/configreferences/appsettings/refresh</code>.</li>
<li>Quyền cần cấp cho managed identity của app: role <strong>Key Vault Secrets User</strong> (RBAC) hoặc permission Get (access policy); vault chặn mạng thì phải cho subnet của app vào — log 403 SecretGet từ IP public rồi 200 từ IP private là hành vi bình thường.</li>
<li>Luôn bật <strong>soft delete</strong> (mặc định) + <strong>purge protection</strong> cho vault production; RBAC data-plane (role "Key Vault Secrets User") thay cho access policy kiểu cũ.</li></ul>
<h3 id="04-security-monitoring/2b2-app-config-refresh">3.2 App Configuration — refresh không cần restart</h3>
<ul><li>Mẫu <strong>sentinel key</strong>: app watch đúng một key "phiên bản cấu hình"; đổi xong cả loạt cấu hình thì đổi sentinel cuối cùng — mọi instance reload một lần, tránh nửa nọ nửa kia.</li>
<li><strong>Label</strong> tách môi trường (cùng key, label dev/prod); <strong>feature flag</strong> có filter phần trăm/nhóm người dùng — bật dần tính năng không cần deploy; <strong>snapshot</strong> đóng băng một bộ cấu hình để rollback.</li>
<li>Phân vai với Key Vault: App Config giữ <em>cấu hình</em>, secret vẫn nằm Key Vault — App Config chỉ giữ <em>reference</em> tới secret.</li></ul>
<h2 id="04-security-monitoring/3-distributed-tracing-voi-opentelemetry">4. Distributed tracing với OpenTelemetry</h2>
<h3 id="04-security-monitoring/31-khai-niem">4.1 Khái niệm</h3>
<ul><li><strong>Trace</strong> = một request xuyên nhiều service, gồm nhiều <strong>span</strong>; mỗi span có <code>trace_id</code>, <code>span_id</code>, <code>parent_span_id</code>, thời gian, <strong>attributes</strong>, <strong>events</strong>, <strong>status</strong>.</li><li><strong>Ba tín hiệu</strong>: traces, metrics, logs.</li><li><strong>Context propagation</strong> chuẩn <strong>W3C Trace Context</strong> qua header <code>traceparent</code>: <code>00-&lt;trace-id 32 hex&gt;-&lt;span-id 16 hex&gt;-01</code>. Nhờ đó ghép được span của API → Function → Cosmos DB.</li><li>Azure Monitor / Application Insights là backend; <strong>OpenTelemetry là chuẩn instrumentation chính thức</strong> (thay dần SDK Application Insights cũ).</li></ul>
<h3 id="04-security-monitoring/32-bat-opentelemetry-cho-python-tren-azure">4.2 Bật OpenTelemetry cho Python trên Azure</h3>
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
<h3 id="04-security-monitoring/33-anh-xa-opentelemetry-bang-application-insights">4.3 Ánh xạ OpenTelemetry → bảng Application Insights</h3>
<div class="tablewrap"><table><thead><tr><th>Khái niệm OTel</th><th>Bảng trong Log Analytics (workspace-based)</th><th>Bảng "classic"</th></tr></thead><tbody><tr><td>Server span (incoming)</td><td><code>AppRequests</code></td><td><code>requests</code></td></tr><tr><td>Client span (outgoing: HTTP, DB, Redis)</td><td><code>AppDependencies</code></td><td><code>dependencies</code></td></tr><tr><td>Log record</td><td><code>AppTraces</code></td><td><code>traces</code></td></tr><tr><td>Exception</td><td><code>AppExceptions</code></td><td><code>exceptions</code></td></tr><tr><td>Custom metric</td><td><code>AppMetrics</code></td><td><code>customMetrics</code></td></tr></tbody></table></div>
<p>Trường quan trọng: <code>OperationId</code> (= trace id), <code>ParentId</code>, <code>AppRoleName</code> (= service name), <code>DurationMs</code>, <code>Success</code>, <code>ResultCode</code>, <code>Properties</code> (custom attributes).</p>
<hr>
<h2 id="04-security-monitoring/3b-opentelemetry-chi-tiet">5. OpenTelemetry chi tiết — propagation và sampling</h2>
<ul><li>Ba trụ: <strong>trace</strong> (span nối theo <code>traceparent</code>), <strong>metric</strong>, <strong>log</strong>. Trên Azure dùng <strong>Azure Monitor OpenTelemetry Distro</strong> — một gói bật auto-instrumentation cho HTTP, SDK Azure, DB driver phổ biến, đổ về Application Insights.</li>
<li><strong>Context propagation</strong> theo chuẩn W3C <code>traceparent</code>; SDK Service Bus tự nhét vào <code>Diagnostic-Id</code> của message — consumer dùng SDK + distro thì trace nối liền qua queue. Trace "đứt" ở queue = bên nhận không dùng instrumentation, hoặc tự new message làm rơi header.</li>
<li>Span thủ công cho nghiệp vụ: bọc đoạn "gọi LLM", "vector search" bằng <code>tracer.start_as_current_span("rag.search")</code> và gắn attribute (số chunk, model) — chính attribute này thành <code>customDimensions</code> để KQL lọc.</li>
<li><strong>Sampling</strong>: production bật fixed-rate (ví dụ 10%) để giảm chi phí ingestion — Application Insights vẫn tính đúng tỷ lệ request vì nhân mẫu; log lỗi/exception nên giữ 100%.</li>
<li>Phân vai câu hỏi: "app chậm ở đâu giữa 4 service" → distributed tracing; "CPU replica bao nhiêu" → metric; "vì sao request X lỗi" → log + trace theo <code>operation_Id</code>.</li></ul>
<h3 id="04-security-monitoring/3b1-duoi-nap-capo-trace-context">5.1 Dưới nắp capo: span context nằm ở đâu trong dây</h3>
<ul><li>Một trace là cây các span; danh tính của nó gói trong <strong>16 byte trace-id + 8 byte span-id</strong>, mã hóa thành header W3C <code>traceparent: 00-&lt;trace-id&gt;-&lt;parent-span-id&gt;-&lt;flags&gt;</code>. "Propagation" chỉ là: bên gửi <em>viết</em> header này vào HTTP request hoặc property <code>Diagnostic-Id</code> của message; bên nhận <em>đọc</em> nó và tạo span con với parent tương ứng.</li>
<li>Vì thế trace "đứt" luôn quy về một trong hai: không ai <em>viết</em> (producer thiếu instrumentation / tự new message trắng) hoặc không ai <em>đọc</em> (consumer thiếu instrumentation). Application Insights ghép cây bằng <code>operation_Id</code> = trace-id — nên câu KQL <code>union ... | where operation_Id == ...</code> hoạt động với mọi SDK nói đúng chuẩn W3C.</li>
<li>Byte <code>flags</code> cuối header mang quyết định <strong>sampling</strong> (01 = sampled): quyết định lấy ở span gốc và <em>chảy theo header</em> xuống toàn bộ chuỗi — vì vậy một trace hoặc được giữ trọn vẹn hoặc bỏ trọn vẹn, không bao giờ thủng giữa chừng do sampling.</li>
<li>Azure Monitor OTel Distro = bộ auto-instrumentation (HTTP, SDK Azure, DB driver) + exporter đẩy về Application Insights — "bật distro" nghĩa là cắm sẵn người viết và người đọc header ở mọi biên giới cho bạn.</li></ul>
<h2 id="04-security-monitoring/4-kql-kusto-query-language">6. KQL — Kusto Query Language</h2>
<h3 id="04-security-monitoring/41-cau-truc-toan-tu-cot-loi">6.1 Cấu trúc &amp; toán tử cốt lõi</h3>
<pre><button class="copybtn">copy</button><code>TableName
| where  TimeGenerated &gt; ago(1h)      // lọc — luôn đặt sớm nhất có thể
| extend latencySec = DurationMs / 1000.0
| project TimeGenerated, Name, latencySec, ResultCode
| summarize count(), avg(latencySec) by bin(TimeGenerated, 5m), Name
| order by TimeGenerated desc
| take 100</code></pre>
<div class="tablewrap"><table><thead><tr><th>Toán tử</th><th>Công dụng</th></tr></thead><tbody><tr><td><code>where</code></td><td>Lọc dòng</td></tr><tr><td><code>project</code> / <code>project-away</code> / <code>project-rename</code></td><td>Chọn/bỏ/đổi tên cột</td></tr><tr><td><code>extend</code></td><td>Thêm cột tính toán</td></tr><tr><td><code>summarize ... by ...</code></td><td>Gộp nhóm: <code>count()</code>, <code>sum()</code>, <code>avg()</code>, <code>min/max()</code>, <code>dcount()</code>, <code>percentile(x, 95)</code>, <code>make_list()</code></td></tr><tr><td><code>bin(col, 5m)</code></td><td>Chia thời gian thành khoảng (cho biểu đồ)</td></tr><tr><td><code>order by</code> / <code>sort by</code></td><td>Sắp xếp</td></tr><tr><td><code>top N by col</code></td><td>Lấy N dòng đầu</td></tr><tr><td><code>take</code> / <code>limit</code></td><td>Lấy mẫu nhanh</td></tr><tr><td>\`join kind=inner\\</td><td>leftouter\\</td><td>leftanti\`</td><td>Ghép bảng</td></tr><tr><td><code>union</code></td><td>Gộp nhiều bảng</td></tr><tr><td><code>let</code></td><td>Biến/subquery</td></tr><tr><td><code>parse_json()</code>, <code>todynamic()</code>, <code>mv-expand</code></td><td>Xử lý JSON/mảng</td></tr><tr><td>\`render timechart\\</td><td>barchart\\</td><td>piechart\`</td><td>Vẽ biểu đồ</td></tr><tr><td><code>ago()</code>, <code>now()</code>, <code>startofday()</code>, <code>datetime_diff()</code></td><td>Thời gian</td></tr><tr><td><code>search</code>, <code>has</code>, <code>contains</code>, <code>startswith</code>, <code>matches regex</code></td><td>Tìm chuỗi (<code>has</code> nhanh hơn <code>contains</code>)</td></tr></tbody></table></div>
<h3 id="04-security-monitoring/42-bo-truy-van-hay-dung-khi-troubleshoot-nen-thuoc">6.2 Bộ truy vấn hay dùng khi troubleshoot (nên thuộc)</h3>
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
<h3 id="04-security-monitoring/43-alert-chi-phi">6.3 Alert &amp; chi phí</h3>
<ul><li>Tạo <strong>log alert rule</strong> từ query KQL (threshold + tần suất đánh giá) → Action Group (email, webhook, Logic App, Functions).</li><li><strong>Metric alert</strong> rẻ và nhanh hơn log alert cho các chỉ số dựng sẵn (CPU, DeadletteredMessages, 5xx).</li><li>Giảm chi phí ingest: sampling, <code>Basic Logs</code> cho bảng verbose, đặt <strong>retention</strong> hợp lý, dùng <strong>transformation</strong> (DCR) để lọc trước khi ingest.</li><li><strong>Live Metrics</strong>, <strong>Application Map</strong>, <strong>Transaction search</strong>, <strong>Failures/Performance blade</strong> là công cụ chẩn đoán nhanh trong Application Insights.</li></ul>
<hr>
<h3 id="04-security-monitoring/49-bo-truy-van-tinh-huong-cookbook">6.4 Bộ truy vấn tình huống — cookbook</h3>
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
<h2 id="04-security-monitoring/5-bao-mat-xuyen-suot-tong-hop">7. Bảo mật xuyên suốt — tổng hợp</h2>
<div class="tablewrap"><table><thead><tr><th>Chủ đề</th><th>Điểm chính</th></tr></thead><tbody><tr><td><strong>Managed identity</strong></td><td>System-assigned (gắn vòng đời với tài nguyên) vs user-assigned (dùng lại cho nhiều tài nguyên, tồn tại độc lập). Luôn ưu tiên hơn connection string</td></tr><tr><td><strong>RBAC data plane</strong></td><td>Cosmos DB Built-in Data Contributor, Storage Blob Data Contributor, Azure Service Bus Data Sender/Receiver, Key Vault Secrets User, App Configuration Data Reader, AcrPull</td></tr><tr><td><strong>Networking</strong></td><td>Private endpoint + tắt public access; service endpoint; VNet integration cho App Service/Functions/Container Apps</td></tr><tr><td><strong>Data protection</strong></td><td>Mã hoá at-rest mặc định; customer-managed key (CMK) khi cần; TLS 1.2+ bắt buộc</td></tr><tr><td><strong>Chống lộ khoá</strong></td><td>Không commit secret; dùng Key Vault + rotation; bật Defender for Cloud; quét secret trong CI</td></tr><tr><td><strong>AI-specific</strong></td><td>Giới hạn quyền truy cập vector store theo tenant (filter bắt buộc), lọc nội dung (content safety), log prompt cẩn thận vì có PII</td></tr></tbody></table></div>
<hr>
<h2 id="04-security-monitoring/4d-kql-join-va-baggage">8. Hai chỗ hay sai: <code>join</code> của KQL và Baggage của OpenTelemetry</h2>
<h3 id="04-security-monitoring/4d1-kql-join">8.1 <code>join</code> mặc định <em>không</em> phải inner join</h3>
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
<h3 id="04-security-monitoring/4d2-baggage-span-link">8.2 Baggage không phải span attribute; span link không phải quan hệ cha–con</h3>
<ul><li><strong>Baggage</strong> là kho key-value đi kèm context, truyền qua header <code>baggage</code> (chuẩn W3C), tách bạch với trace context đi trong <code>traceparent</code>/<code>tracestate</code>. Dùng để chuyển thông tin nghiệp vụ xuyên service (<code>tenant.id</code>, <code>experiment</code>) mà không phải nhét vào mọi chữ ký hàm.</li>
<li><strong>Baggage không tự động trở thành attribute của span</strong> — auto-instrumentation chỉ truyền tiếp chứ không gắn vào span. Muốn lọc theo <code>tenant.id</code> trong Application Insights thì phải tự đọc baggage rồi <code>span.set_attribute(...)</code> (hoặc bật Baggage Span Processor nếu ngôn ngữ có). Đề tả "đã set baggage nhưng query KQL không thấy cột" là hỏi đúng điểm này.</li>
<li><strong>Cảnh báo bảo mật</strong>: auto-instrumentation gắn baggage vào <em>mọi</em> request đi ra, kể cả gọi API bên thứ ba — không đặt PII, token hay secret vào baggage.</li>
<li><strong>Span link</strong> nối các span không có quan hệ cha–con. Một span chỉ có <em>một</em> cha, nên consumer gom 100 message của 100 trace khác nhau thì không thể lấy cả 100 làm cha — đúng cách là tạo span xử lý batch với <strong>100 link</strong> trỏ về từng producer.</li>
<li>Nối trace qua hàng đợi: producer nhét <code>traceparent</code> vào application properties của message, consumer trích ra làm parent (một message) hoặc làm link (batch). Không làm bước này thì trace đứt đúng ở chỗ hàng đợi — nhìn Application Insights thấy hai trace rời nhau là dấu hiệu.</li>
<li><em>Nguồn: <a href="https://learn.microsoft.com/kusto/query/join-operator" target="_blank" rel="noopener">Kusto — join operator</a> (mặc định <code>innerunique</code>, quy tắc bảng nhỏ bên trái) và <a href="https://opentelemetry.io/docs/concepts/signals/baggage/" target="_blank" rel="noopener">OpenTelemetry — Baggage</a>, đối chiếu ngày 18/09/2026.</em></li></ul>
<h2 id="04-security-monitoring/4e-default-azure-credential">9. DefaultAzureCredential — chuỗi thử và vì sao production nên khai rõ</h2>
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
<h2 id="04-security-monitoring/4f-kql-nang-cao">10. KQL nâng cao — <code>let</code>, <code>materialize()</code>, <code>datatable</code>, <code>externaldata</code></h2>
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
<h2 id="04-security-monitoring/4g-production-hardening">11. Production hardening — bảo mật, độ tin cậy và chi phí cho AI workload</h2>
<h3 id="04-security-monitoring/4g1-do-tin-cay">11.1 Độ tin cậy: hạn mức của model là một phần của kiến trúc</h3>
<ul><li>Hạn mức của một deployment Azure OpenAI đo bằng <strong>TPM</strong> (tokens per minute) và <strong>RPM</strong> (requests per minute), gắn với nhau theo một tỷ lệ cố định tuỳ model và phiên bản (ví dụ 10 RPM cho mỗi 1.000 TPM ở nhiều bản, 1 RPM cho mỗi 1.000 TPM ở bản khác). Vượt là <strong>HTTP 429</strong>.</li>
<li>Khuyến nghị chính thức để không đụng trần: <strong>có retry logic trong ứng dụng</strong>, tăng tải <em>từ từ</em> thay vì nhảy bậc, thử nhiều dạng tăng tải, và nâng quota cho deployment (chuyển bớt quota từ deployment khác nếu cần).</li>
<li>Hai kiểu triển khai: <strong>Standard / GlobalStandard</strong> trả theo lượt dùng và chia sẻ hạn mức, so với <strong>Provisioned (PTU)</strong> — mua sẵn công suất, độ trễ ổn định, hợp khi tải đều và cần cam kết. Đề mô tả "độ trễ p99 phải ổn định, tải biết trước" là hướng tới PTU.</li>
<li><strong>Retry với exponential backoff + jitter</strong> chứ không retry đều nhịp: nhiều client cùng thử lại đúng một lúc tạo sóng đồng pha và giữ hệ thống trong trạng thái quá tải. Giới hạn số lần thử và tôn trọng thời gian chờ mà dịch vụ trả về.</li>
<li><strong>Circuit breaker</strong> cho phụ thuộc hạ nguồn: sau N lỗi liên tiếp thì mở mạch và trả lỗi nhanh trong một khoảng, rồi thử lại dè dặt. Không có nó thì mỗi request đều chờ hết timeout, thread/connection cạn và lỗi lan ngược lên toàn hệ thống.</li>
<li><strong>Dịch vụ hoá suy giảm chứ đừng sập</strong>: model chính 429 thì rơi về model nhỏ hơn hoặc vùng khác; vector search hỏng thì trả kết quả full-text; cache hỏng thì đọc thẳng nguồn. Mỗi nhánh dự phòng phải có timeout riêng.</li>
<li>Tách hàng đợi bằng Service Bus để đỉnh tải không đập thẳng vào model — consumer rút message theo đúng tốc độ mà hạn mức cho phép.</li></ul>
<h3 id="04-security-monitoring/4g2-bao-mat">11.2 Bảo mật xuyên suốt — danh sách rà trước khi lên production</h3>
<ul><li><strong>Không có secret trong code, biến môi trường hay image.</strong> Managed identity + RBAC ở mọi chặng: ACR (<code>AcrPull</code>), Key Vault (<code>Key Vault Secrets User</code>), Cosmos DB, Service Bus, Storage. Key Vault chỉ giữ thứ thật sự không thể dùng identity (API key bên thứ ba).</li>
<li>Tắt khoá truy cập ở nơi hỗ trợ: admin user của ACR, access key của App Configuration và Storage, local auth của Cosmos DB — chỉ còn Entra ID.</li>
<li><strong>Mạng</strong>: private endpoint cho Key Vault, Cosmos DB, PostgreSQL, ACR (Premium); container app hoặc AKS trong VNet; chặn public network access thay vì chỉ lọc IP.</li>
<li><strong>Đừng ghi prompt và output vào log mặc định</strong> — chúng chứa dữ liệu người dùng. Nếu cần lưu để đánh giá thì tách kho riêng, có thời hạn xoá và kiểm soát truy cập; đừng để chúng lọt vào trace hay vào baggage của OpenTelemetry (mục 8.2).</li>
<li><strong>Content filter</strong> của Azure OpenAI bật mặc định; ứng dụng phải xử lý được trường hợp bị chặn (mã lỗi riêng) thay vì coi là lỗi hệ thống.</li>
<li>Prompt injection là rủi ro của kiến trúc RAG: coi mọi văn bản lấy từ nguồn ngoài là <em>dữ liệu</em>, không phải chỉ dẫn; giới hạn công cụ mà agent gọi được; kiểm tra đầu ra trước khi dùng nó để thực hiện hành động.</li></ul>
<h3 id="04-security-monitoring/4g3-chi-phi">11.3 Chi phí — các nút vặn theo thứ tự hiệu quả</h3>
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
<h2 id="04-security-monitoring/4h-alert-action-group-availability-workbook">12. Từ tín hiệu tới người trực: alert rule, action group, availability test, workbook</h2>
<p>KQL cho biết hệ thống đang ra sao, nhưng không ai ngồi nhìn màn hình cả ngày. Phần này là quãng đường từ một truy vấn tới cái điện thoại rung lúc 2 giờ sáng — và ngược lại, làm sao để nó <em>không</em> rung vô ích.</p>
<h3 id="04-security-monitoring/4h1-chon-loai-alert">12.1 Chọn loại alert rule</h3>
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
<h3 id="04-security-monitoring/4h2-action-group">12.2 Action group — nơi alert biến thành hành động</h3>
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
<h3 id="04-security-monitoring/4h3-availability-test">12.3 Availability test — đo từ bên ngoài vào</h3>
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
<h3 id="04-security-monitoring/4h4-workbook-dashboard">12.4 Workbook, dashboard và báo cáo SLA</h3>
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
<h2 id="04-security-monitoring/6-checklist-on-domain-4">13. Checklist ôn Domain 4</h2>
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
<li>Xác thực bằng <code>get_bearer_token_provider(DefaultAzureCredential(), …)</code> — truyền <em>hàm</em> lấy token nên SDK tự làm mới khi hết hạn. Đây là cách nối mục 9 của Domain 4 vào lời gọi model: dưới máy dev nó dùng \`az login\`, trên Azure nó dùng managed identity, code không đổi một dòng.</li>
<li>Tạo <code>client</code> <strong>một lần</strong> lúc khởi động (lifespan của FastAPI ở mục 13 của Domain 1), đừng tạo trong mỗi handler.</li>
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
<ul><li>Bật <code>configure_azure_monitor()</code> cho API + worker; tạo span thủ công cho <code>embed</code>, <code>vector_search</code>, <code>llm_call</code>.</li><li>Xác nhận Application Map nối được các service.</li><li>Viết đủ 9 query KQL trong <a href="#04-security-monitoring">Bảo mật &amp; Giám sát</a> mục 6.2 trên dữ liệu thật.</li><li>Tạo 1 log alert (error rate &gt; 5%) và 1 metric alert (<code>DeadletteredMessages</code> &gt; 0).</li></ul>
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
`,Z={class:"searchwrap"},tt={class:"wrap"},nt={class:"progressbar"},p="ai200.tasks.v1",ct=V({__name:"Ai200NotesPage",setup(et){$("ai200","notes");const s=r(),g=r(),a=r(),d=r(),C=r(),m=r(),b=r(),S=r(),E=r(),T=r();let c=[],y="",x=[];const D=n=>[...n.querySelectorAll("h2, h3")].map(t=>({lvl:+t.tagName[1],txt:t.textContent||"",id:t.id}));function z(){C.value.innerHTML=c.map(n=>{const t=n.id===y,o=n.dataset.weight?`<span class="w">${h(n.dataset.weight)}</span>`:"";return`<a class="navitem${t?" active":""}" href="#${n.id}"><span>${h(n.dataset.title)}</span>${o}</a>`+(t?'<div class="subnav">'+D(n).filter(e=>e.lvl===2).map(e=>`<a href="#${e.id}">${h(e.txt)}</a>`).join("")+"</div>":"")}).join("")}function I(n){m.value.innerHTML=D(n).map(t=>`<a class="${t.lvl===3?"h3":"h2"}" href="#${t.id}">${h(t.txt)}</a>`).join("")}function v(n,t){const o=c.find(e=>e.id===n)||c[0];if(y=o.id,a.value.hidden=!0,g.value.hidden=!1,c.forEach(e=>e.hidden=e!==o),z(),I(o),b.value.classList.remove("open"),t){const e=document.getElementById(t);if(e){e.scrollIntoView({block:"start"});return}}window.scrollTo(0,0)}function _(){const n=decodeURIComponent(location.hash.slice(1));if(!n)return v(c[0].id,null);v(n.split("/")[0],n.includes("/")?n:null)}function B(){const n=new Set(A(p,[]));s.value.querySelectorAll("li.task").forEach(t=>{const o=t.querySelector("input");o.checked=n.has(t.dataset.key),t.classList.toggle("done",o.checked),o.onchange=()=>{const e=new Set(A(p,[]));o.checked?e.add(t.dataset.key):e.delete(t.dataset.key),j(p,[...e]),t.classList.toggle("done",o.checked),R()}})}function R(){const n=s.value.querySelectorAll("li.task").length,t=A(p,[]).length;E.value.textContent=t+" / "+n+" mục đã xong",S.value.style.width=(n?t/n*100:0)+"%"}function P(){s.value.querySelectorAll(".copybtn").forEach(n=>{n.onclick=t=>{t.stopPropagation(),navigator.clipboard.writeText(n.parentElement.querySelector("code").innerText),n.textContent="đã copy",setTimeout(()=>n.textContent="copy",1200)}})}const L=[];function M(){c.forEach(n=>{n.querySelectorAll("h1,h2,h3,h4,p,li,td,th,pre").forEach(t=>{if(t.querySelector("p,ul,ol,pre,table,li"))return;const o=(t.textContent||"").replace(/\s+/g," ").trim();o.length>3&&L.push({docId:n.id,title:n.dataset.title||"",text:o})})})}function w(){const n=d.value.value.trim().toLowerCase();if(n.length<2){a.value.hidden=!0,g.value.hidden=!1;return}const t=[];for(const e of L)if(e.text.toLowerCase().includes(n)&&(t.push(e),t.length>=60))break;const o=new RegExp("("+n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","ig");a.value.innerHTML=`<p style="color:var(--muted);font-size:13px">${t.length} kết quả cho “${h(d.value.value)}”</p>`+t.map(e=>`<div class="res" data-id="${e.docId}"><div class="doc">${h(e.title)}</div><div class="line">${h(e.text.slice(0,220)).replace(o,"<mark>$1</mark>")}</div></div>`).join(""),a.value.hidden=!1,g.value.hidden=!0,a.value.querySelectorAll(".res").forEach(e=>{e.onclick=()=>{d.value.value="",a.value.hidden=!0,g.value.hidden=!1,location.hash.slice(1)===e.dataset.id?v(e.dataset.id,null):location.hash=e.dataset.id}})}function O(n){n.key==="/"&&document.activeElement!==d.value&&(n.preventDefault(),d.value.focus()),n.key==="Escape"&&(d.value.value="",a.value.hidden=!0,g.value.hidden=!1,d.value.blur())}function K(){const n=c.filter(t=>t.hidden);n.forEach(t=>t.hidden=!1),window.print(),setTimeout(()=>n.forEach(t=>t.hidden=!0),400)}let k=!1;function U(){k||(k=!0,requestAnimationFrame(()=>{const n=[...s.value.querySelectorAll("section.doc:not([hidden]) h2, section.doc:not([hidden]) h3")];let t=null;for(const o of n)o.getBoundingClientRect().top<120&&(t=o);m.value.querySelectorAll("a").forEach(o=>o.classList.toggle("cur",!!t&&o.getAttribute("href")==="#"+t.id)),k=!1}))}function N(){s.value.style.setProperty("--topbar-h",T.value.offsetHeight+"px")}return G(()=>{c=[...s.value.querySelectorAll("section.doc")],y=c[0].id,M(),B(),P(),R(),_(),N();const n=[[window,"hashchange",_],[window,"resize",N],[window,"scroll",U],[document,"keydown",O]];n.forEach(([t,o,e])=>t.addEventListener(o,e)),x=n.map(([t,o,e])=>()=>t.removeEventListener(o,e))}),H(()=>x.forEach(n=>n())),(n,t)=>{const o=X("router-link");return Y(),Q("div",{ref_key:"rootEl",ref:s,class:"notes-ai"},[i("div",{ref_key:"topbarEl",ref:T,class:"topbar"},[i("button",{class:"btn menu-btn",onClick:t[0]||(t[0]=e=>b.value.classList.toggle("open"))},"☰"),t[5]||(t[5]=i("div",{class:"brand"},[i("span",{class:"dot"}),l("AI-200 "),i("small",null,"Azure AI Cloud Developer Associate · Tiếng Việt")],-1)),t[6]||(t[6]=i("div",{class:"spacer"},null,-1)),i("div",Z,[i("input",{ref_key:"searchEl",ref:d,placeholder:"Tìm trong toàn bộ tài liệu… (/)",autocomplete:"off",onInput:w},null,544)]),u(o,{class:"btn",to:"/ai-200/practice",title:"Mở trang luyện trắc nghiệm"},{default:f(()=>[...t[2]||(t[2]=[l("✎ Trắc nghiệm",-1)])]),_:1}),u(o,{class:"btn",to:"/ai-200/labs",title:"Mở trang lab thực hành"},{default:f(()=>[...t[3]||(t[3]=[l("🧪 Thực hành",-1)])]),_:1}),u(F),i("button",{class:"btn",title:"In / xuất PDF",onClick:K},"⎙"),u(o,{class:"btn",to:"/"},{default:f(()=>[...t[4]||(t[4]=[l("🏠",-1)])]),_:1})],512),i("div",tt,[i("aside",{ref_key:"sideEl",ref:b},[t[7]||(t[7]=i("div",{class:"navtitle"},"Tiến độ học",-1)),i("div",{ref_key:"pcountEl",ref:E,class:"pcount"},"0 / 0 mục đã xong",512),i("div",nt,[i("div",{ref_key:"pbarEl",ref:S},null,512)]),t[8]||(t[8]=i("div",{class:"navtitle"},"Nội dung",-1)),i("nav",{ref_key:"navEl",ref:C},null,512)],512),i("main",null,[i("div",{ref_key:"resultsEl",ref:a,class:"results",hidden:""},null,512),t[1]||(q(-1,!0),(t[1]=i("article",{ref_key:"articleEl",ref:g,innerHTML:W(J)},null,8,["innerHTML"])).cacheIndex=1,q(1),t[1])]),i("div",{ref_key:"tocEl",ref:m,class:"toc"},null,512)])],512)}}});export{ct as default};
