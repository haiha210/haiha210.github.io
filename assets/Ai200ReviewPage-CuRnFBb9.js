import{_ as n}from"./NotesPage.vue_vue_type_script_setup_true_lang-C4_pbzfc.js";import{d as e,f as t,e as o,o as i}from"./index-cDt0tU-p.js";import"./ThemeToggle.vue_vue_type_script_setup_true_lang-BnTVldNF.js";import"./useStudyClock--ffzuMo1.js";const c=`<div class="warn">Danh sách gộp từ tài liệu, khóa AI-200T00 và 27 bài assessment trên Microsoft Learn. Chữ <b>đậm</b> sau "→" là đáp án của dạng câu hay gặp; ⚠ là đáp án chưa chắc chắn. Chi tiết và code xem ở <a href="/ai-200/documents">tài liệu chính</a>.</div>
<h2 class="dom">1. Container (20–25%)</h2>
<section id="r1-1">
<h3>1.1 Azure Container Registry (ACR)<a class="anch" href="#r1-1">#</a></h3>
<ul>
<li><strong>Cấu trúc</strong><ul>
<li>Registry → repository (namespace) → artifact: image, manifest, tag, digest; chứa được cả OCI artifact như Helm chart</li>
<li>3 SKU Basic / Standard / Premium; geo-replication, private endpoint, retention policy <strong>chỉ có ở Premium</strong></li>
</ul>
</li>
<li><strong>Xác thực</strong><ul>
<li>Admin user mặc định tắt, không dùng cho production</li>
<li>Nên dùng managed identity + role <strong>AcrPull</strong> (đẩy image dùng AcrPush); service principal cho CI ngoài Azure</li>
<li><code>az acr login</code> để Docker ở máy local đăng nhập</li>
</ul>
</li>
<li><strong>ACR Tasks</strong><ul>
<li>Build image trong môi trường kiểm soát, máy CI không cần Docker → <strong>quick task <code>az acr build</code></strong></li>
<li>Trigger: source commit, <strong>base image update</strong> (tự rebuild khi base image có bản vá), timer</li>
<li>Multi-step task: file YAML chạy bằng <code>az acr run</code>, <code>{{.Run.ID}}</code> làm tag; build context là thư mục local, Git URL hoặc tarball</li>
</ul>
</li>
<li><strong>Tag và phiên bản</strong><ul>
<li>Stable tag (<code>v1</code>, <code>latest</code>) bị push đè; production dùng <strong>tag duy nhất</strong> (build ID, <strong>Git commit SHA</strong> để truy vết và rollback) hoặc <strong>digest</strong></li>
<li>Mọi node chạy đúng một bản dù tag bị push đè → tham chiếu bằng <strong>digest</strong></li>
</ul>
</li>
<li><strong>Bảo vệ và dọn kho</strong><ul>
<li>Chống xoá nhầm image → <strong>image lock</strong> (<code>--write-enabled false</code>); 4 thuộc tính <code>write/delete/read/list-enabled</code>, không nhầm với resource lock của ARM</li>
<li><code>acr purge</code> (<code>--filter</code>, <code>--ago</code>, <code>--keep</code>, <code>--untagged</code>) chạy theo lịch bằng ACR Task; retention policy chỉ xoá manifest untagged (Premium)</li>
</ul>
</li>
</ul>
</section>
<section id="r1-2">
<h3>1.2 App Service cho container<a class="anch" href="#r1-2">#</a></h3>
<ul>
<li><strong>Deploy và runtime</strong><ul>
<li>Pull từ ACR bằng managed identity: bật <code>acrUseManagedIdentityCredentials</code> + gán AcrPull</li>
<li>App nghe cổng khác 80 (vd 8000) → <strong><code>WEBSITES_PORT=8000</code></strong>; container không lên thường do thiếu biến này</li>
<li>File mất sau restart → <strong><code>WEBSITES_ENABLE_APP_SERVICE_STORAGE=true</code></strong> và ghi vào <code>/home</code></li>
<li>Startup command, Always On, health check path; webhook cho continuous deployment</li>
<li><code>/healthz</code> trả 200 mà health check vẫn fail → <strong>health check path cấu hình lệch</strong></li>
</ul>
</li>
<li><strong>App settings và secret</strong><ul>
<li>App settings được inject thành biến môi trường; connection string có tiền tố như <code>CUSTOMCONNSTR_</code></li>
<li>Giá trị không được đi theo khi swap slot (vd URL staging) → <strong>slot setting</strong></li>
<li>Key Vault reference <code>@Microsoft.KeyVault(SecretUri=...)</code> hoặc <code>(VaultName=...;SecretName=...)</code>, cần managed identity + <strong>Key Vault Secrets User</strong></li>
</ul>
</li>
<li><strong>Chẩn đoán</strong><ul>
<li><code>az webapp log tail</code> / log stream, Kudu (SCM), SSH vào container, diagnostic settings → Log Analytics</li>
<li>Kiểm tra app settings đã vào container chưa → <strong>Kudu, trang Environment</strong></li>
</ul>
</li>
<li><strong>Sidecar</strong><ul>
<li>Thành phần AI gắn chặt với app (model server nhỏ, OTel collector) phải start/stop/scale cùng API → <strong>sidecar</strong>; chỉ Linux</li>
<li>Mô hình sitecontainers: API là <strong><code>isMain: true</code></strong>, sidecar <code>false</code>; gọi nhau qua <code>localhost</code> nên không trùng cổng</li>
<li>Pull image private không lưu mật khẩu → <strong>managed identity + AcrPull</strong>, khai identity trong từng site container</li>
<li>Trao đổi file tạm qua <code>/home</code> dùng chung; nhưng artifact cần bền, cho app khác dùng → <strong>Blob / Azure Files</strong> ⚠</li>
<li><code>localhost:11434</code> bị connection refused → <strong>so cổng API gọi với target port của sidecar, rồi xem process có listen cổng đó</strong>; thứ tự: cấu hình → log từng container → cổng</li>
</ul>
</li>
</ul>
</section>
<section id="r1-3">
<h3>1.3 Azure Container Apps<a class="anch" href="#r1-3">#</a></h3>
<ul>
<li><strong>Environment và deploy</strong><ul>
<li>Environment là ranh giới chung cho networking (VNet), logging (Log Analytics) và isolation</li>
<li>Ingress external/internal, <code>targetPort</code> phải khớp cổng app</li>
<li>Cấu hình review như code → <strong><code>az containerapp create/update --yaml</code></strong> với file trong source control</li>
<li>API key không để trong YAML → <strong>secret của Container Apps + <code>secretref:</code> vào env</strong> (secret có thể tham chiếu Key Vault)</li>
<li>Registry private: managed identity để pull ACR</li>
<li>Kiểm tra deploy: log, <code>revision list</code>, <code>az containerapp replica list</code>; image mới không start → <strong><code>az containerapp logs show</code></strong></li>
<li>Dapr: sidecar, building block, component (đổi broker chỉ bằng cấu hình)</li>
</ul>
</li>
<li><strong>Revision và day-two</strong><ul>
<li>Sửa template (image, env, scale) tạo revision mới (revision-scope); sửa secret, ingress, registry thì không (application-scope)</li>
<li>Single mode: zero-downtime; multiple mode: chia % traffic, <strong>label</strong> cho URL test riêng; chuyển 10% sang bản mới → <strong>multiple revision + chia trọng số</strong></li>
<li>Cắt traffic khỏi revision mà không xoá → <strong><code>revision deactivate</code></strong>; ngoài ra restart/activate</li>
<li>Deploy truy vết được → tham chiếu image bằng <strong>digest</strong></li>
<li>Nghi một revision lỗi → <strong>stream log lọc theo revision</strong>, vừa xem vừa tái hiện</li>
<li>Revision fail: lỗi pull image, lệch cổng, thiếu env/secret, probe sai, OOM; fail readiness ngay sau deploy → <strong>probe sai port hoặc path</strong></li>
</ul>
</li>
<li><strong>Probe</strong><ul>
<li>Liveness / readiness / startup, chỉ HTTP/TCP (không có exec như AKS)</li>
<li>Model nạp chậm → tăng <code>initialDelaySeconds</code> hoặc dùng startup probe</li>
</ul>
</li>
<li><strong>Scale và KEDA</strong><ul>
<li>Mặc định 0–10 replica, HTTP concurrency 10; rule HTTP (<code>concurrentRequests</code>), TCP, CPU, memory</li>
<li><strong>CPU/memory không scale về 0</strong></li>
<li>Xử lý Service Bus và scale về 0 → <strong>min 0 + rule <code>azure-servicebus</code></strong> (<code>queueName</code>, <code>messageCount</code>, <code>namespace</code>)</li>
<li>Có sẵn 5 replica lúc 8h, ban đêm về 0 → <strong>cron rule + HTTP rule</strong></li>
<li>Auth cho KEDA trong production → <strong>managed identity (<code>--scale-rule-identity</code>)</strong></li>
<li>Scaler khác: Event Hubs, Kafka, Redis, cron, Prometheus; bên trong: KEDA = scaler → metrics → HPA</li>
<li>CPU throttling → <strong>tăng CPU mỗi replica</strong>, rồi xem lại scale rule</li>
<li>Workload profile: Consumption (tối đa 4 vCPU / 8 GiB, cặp CPU/memory cố định) hay Dedicated (GPU, nhiều tài nguyên)</li>
</ul>
</li>
<li><strong>Dynamic sessions</strong> (chạy code do AI sinh ra hoặc user gửi)<ul>
<li>Pool code interpreter (Python có sẵn) hay <strong>custom container</strong> (khi cần native binary)</li>
<li>Cấu hình: số session tối đa, cooldown, identity; code không tin cậy → <strong><code>EgressDisabled</code></strong></li>
<li>Gọi bằng token Entra; multitenant → <strong>server sinh <code>identifier</code> khó đoán</strong>, lưu liên kết user ở backend (không dùng email, không nhận id từ client)</li>
<li>HTTP 200 nhưng code ném exception → <strong>execution failure</strong></li>
<li>Timeout không rõ đã có side effect → <strong>chỉ retry khi idempotent và kiểm tra được trạng thái</strong></li>
</ul>
</li>
</ul>
</section>
<section id="r1-4">
<h3>1.4 Azure Kubernetes Service (AKS)<a class="anch" href="#r1-4">#</a></h3>
<ul>
<li><strong>Nền tảng</strong><ul>
<li>Control plane: API server, scheduler, controller, etcd; node có kubelet; nguyên lý khai báo + reconcile loop</li>
<li><code>replicas</code> = số bản sao pod chạy đồng thời; Deployment → ReplicaSet → Pod</li>
</ul>
</li>
<li><strong>Deploy</strong><ul>
<li><code>az aks create --attach-acr</code>, <code>az aks get-credentials</code>, <code>kubectl apply -f</code></li>
<li>Service ClusterIP / NodePort / <strong>LoadBalancer</strong> (ra internet qua load balancer Azure); DNS <code>svc.namespace.svc.cluster.local</code></li>
<li>Traffic không tới pod / Service không có endpoint → <strong>label pod phải khớp selector</strong>; xem bằng <code>kubectl describe service</code></li>
<li>Rolling update <code>maxSurge</code>, <code>maxUnavailable</code>; scheduling: nodeSelector, affinity, taint/toleration</li>
</ul>
</li>
<li><strong>Tài nguyên</strong><ul>
<li>requests/limits → QoS Guaranteed / Burstable / BestEffort (BestEffort bị evict trước)</li>
<li>Vượt memory limit → OOMKilled; vượt CPU limit → throttle (latency tăng → chỉnh requests/limits hoặc scale out)</li>
<li>Requests vượt sức chứa mọi node → pod <strong>Pending</strong></li>
</ul>
</li>
<li><strong>Cấu hình</strong><ul>
<li>Config không nhạy cảm, đổi không build lại image → <strong>ConfigMap</strong> (<code>configMapKeyRef</code>, <code>envFrom</code>, tối đa 1 MiB, có thể immutable)</li>
<li>App đọc file JSON lúc khởi động → <strong>mount ConfigMap thành file qua volume</strong></li>
<li>Connection string có mật khẩu → <strong>Secret</strong>, vào env bằng <strong><code>valueFrom.secretKeyRef</code></strong>; Secret chỉ là base64, muốn an toàn dùng Key Vault CSI driver</li>
<li>PV / PVC / StorageClass: apply PVC thì StorageClass tự cấp disk; Disk ReadWriteOnce, Azure Files ReadWriteMany</li>
<li>PodDisruptionBudget, imagePullSecrets</li>
</ul>
</li>
<li><strong>Giám sát và troubleshoot</strong><ul>
<li>Tín hiệu chính: restart, CPU/memory, latency, lỗi; Container Insights trên portal</li>
<li>ImagePullBackOff: sai tên image hoặc thiếu quyền ACR</li>
<li>CrashLoopBackOff → trước tiên <strong><code>kubectl describe pod</code></strong>, rồi <strong><code>kubectl logs --previous</code></strong> (log lần chạy đã crash)</li>
<li>Xem lỗi khi đang tái hiện → <code>kubectl logs -f</code>; còn có <code>get events</code>, <code>exec</code>, <code>top</code></li>
<li>Gọi thử trước khi expose → <strong><code>kubectl port-forward service/...</code></strong></li>
<li>Probe fail: liveness → restart, readiness → rút khỏi endpoint, startup → chặn hai probe kia</li>
</ul>
</li>
</ul>
</section>
<section id="r1-5">
<h3>1.5 Ngoài khóa học và chọn compute<a class="anch" href="#r1-5">#</a></h3>
<ul>
<li>Dockerfile cho FastAPI (bind <code>0.0.0.0</code>, multi-stage, non-root), Bicep cho chuỗi ACR → Container Apps</li>
<li>App Service: web/API cần slot; Container Apps: microservice/worker, scale-to-zero, event-driven; AKS: cần toàn quyền Kubernetes</li>
</ul>
</section>
<h2 class="dom">2. Data (25–30%)</h2>
<section id="r2-1">
<h3>2.1 Cosmos DB for NoSQL<a class="anch" href="#r2-1">#</a></h3>
<ul>
<li><strong>SDK và mô hình</strong><ul>
<li><code>CosmosClient</code> → database → container → item; manual throughput tối thiểu 400 RU/s, có autoscale, serverless</li>
<li>Ghi đè dù item có hay chưa → <strong><code>upsert_item()</code></strong>; còn create / replace</li>
<li>Biết id + partition key → <strong><code>read_item()</code></strong> (point read 1 KB = 1 RU, rẻ nhất)</li>
<li>Optimistic concurrency: ETag + <code>if-match</code>, lệch nhận 412; system property <code>id</code>, <code>_etag</code>, <code>_ts</code></li>
<li>Data-plane RBAC: Cosmos DB Built-in Data Contributor</li>
</ul>
</li>
<li><strong>Truy vấn và RU</strong><ul>
<li>Point read &lt; single-partition query &lt; cross-partition query</li>
<li>Parameterized query → <strong>chống injection + cache được query plan</strong></li>
<li>Query tốn RU → <strong>thêm partition key vào WHERE</strong> để chỉ đọc một partition</li>
<li><code>SELECT VALUE</code>, <code>TOP</code>, <code>OFFSET LIMIT</code>, <code>ARRAY_CONTAINS</code>; phân trang bằng continuation token; xem request charge và query metrics</li>
</ul>
</li>
<li><strong>Partition key</strong><ul>
<li>Cardinality cao, phân bố đều, có trong filter (vd hay lấy log theo user → <strong><code>userId</code></strong>)</li>
<li>Logical partition tối đa 20 GB / 10.000 RU/s; hierarchical partition key (tối đa 3 cấp) để vượt 20 GB</li>
</ul>
</li>
<li><strong>Các loại index</strong><ul>
<li><strong>Range</strong> (mặc định cho mọi path): <code>=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>!=</code>, <code>IN</code>, ORDER BY <strong>một</strong> trường, <code>CONTAINS</code> / <code>STARTSWITH</code>, <code>IS_DEFINED</code></li>
<li><strong>Composite</strong>: <strong>bắt buộc</strong> cho ORDER BY từ hai trường (thiếu là query <strong>lỗi</strong>, không chỉ chậm); filter nhiều trường</li>
<li><strong>Spatial</strong> (GeoJSON): <code>ST_DISTANCE</code>, <code>ST_WITHIN</code>, <code>ST_INTERSECTS</code></li>
<li><strong>Vector</strong>: flat / quantizedFlat / diskANN → <code>VectorDistance</code></li>
<li><strong>Full-text</strong> (cần full text policy): <code>FullTextScore</code> (BM25), <code>FullTextContains</code></li>
<li><strong>Tuple</strong>: lọc nhiều thuộc tính trong <strong>cùng một phần tử mảng</strong>, path dạng <code>/chunks/[]/{position, tokens}/?</code></li>
</ul>
</li>
<li><strong>Indexing policy</strong><ul>
<li>Mặc định include <code>/*</code>, chỉ exclude <code>/"_etag"/?</code>; <code>id</code> và <code>_ts</code> luôn được index</li>
<li>Cú pháp path: <code>/*</code> cả nhánh (đệ quy), <code>/prop/?</code> giá trị vô hướng, <code>/arr/[]</code> mọi phần tử mảng; include và exclude xung đột thì path cụ thể hơn thắng</li>
<li>Mode <strong>consistent</strong> (mặc định) hoặc <strong>none</strong> (chỉ point read, key-value thuần); <code>lazy</code> đã deprecated</li>
<li>Mảng embedding nằm trong range index làm index phình → <strong>exclude <code>/embedding/*</code></strong> + thêm vector index để giảm RU ghi</li>
<li>Container ghi nặng: exclude <code>/*</code> rồi include chọn lọc; nhớ include cả partition key (vd <code>/tenantId/?</code>)</li>
</ul>
</li>
<li><strong>Quy tắc composite</strong><ul>
<li>Phải khớp thứ tự trường và chiều sort; <code>(a DESC, b DESC)</code> phục vụ được <code>a ASC, b ASC</code> (đảo toàn bộ) nhưng <strong>không</strong> phục vụ chiều trộn <code>a DESC, b ASC</code></li>
<li>Filter nhiều trường: equality trước, range cuối, mỗi composite chỉ một range filter (hai range thì tạo hai composite)</li>
<li>Lọc rồi sort (vd <code>documentType</code> + <code>uploadDate desc</code>) → <strong>composite index: cột lọc trước, cột sort sau</strong></li>
<li>Chỉ làm cho 5–10 pattern quan trọng nhất, vì mỗi composite làm mọi lần ghi đắt thêm</li>
</ul>
</li>
<li><strong>Đổi indexing policy</strong><ul>
<li>Transformation chạy bất đồng bộ, không gián đoạn dịch vụ</li>
<li><strong>Thêm</strong> index: chỉ có lợi sau khi transformation xong; <strong>bỏ</strong> index: query mất index <strong>ngay lập tức</strong></li>
<li>Thay index: thêm index mới, đợi xong rồi mới bỏ index cũ</li>
<li>Index utilization thấp, retrieved/output cao → query đang scan, <strong>thêm range/composite index</strong></li>
</ul>
</li>
<li><strong>Consistency</strong><ul>
<li>5 mức: Strong / Bounded staleness / <strong>Session (mặc định)</strong> / Consistent prefix / Eventual; Strong và Bounded đọc tốn 2× RU</li>
<li>User phải thấy ngay bản mình vừa ghi → <strong>Session + truyền session token</strong></li>
</ul>
</li>
<li><strong>Vector search</strong><ul>
<li><code>vectorEmbeddingPolicy</code>: path, dataType, dimensions, distanceFunction; <strong>không sửa được</strong> sau khi tạo container</li>
<li>ada-002 → <strong>float32, 1536 chiều, cosine</strong></li>
<li>Chọn vector index:<ul>
<li><strong>flat</strong>: brute-force, chính xác 100%, <strong>trần 505 chiều</strong> (1536 chiều không dùng được flat)</li>
<li><strong>quantizedFlat</strong>: brute-force trên vector đã nén, ≤ 4096 chiều, hợp phạm vi tìm <strong>≤ 50.000 vector</strong></li>
<li><strong>diskANN</strong>: ANN, ≤ 4096 chiều, RU và độ trễ thấp nhất, phạm vi tìm <strong>&gt; 50.000 vector</strong> (vd 500K vector/partition chấp nhận xấp xỉ); kết quả không tất định</li>
<li>quantizedFlat / diskANN cần <strong>≥ 1.000 vector</strong>, ít hơn thì quay về full scan, RU cao</li>
</ul>
</li>
<li>dataType float32 (mặc định) / float16 (giảm 50% dung lượng) / int8 / uint8; distance cosine (mặc định) / dotproduct / euclidean</li>
<li>Chỉnh recall lúc query bằng <code>searchListSizeMultiplier</code>; vector search không dùng được trên account shared throughput, bật rồi không tắt được</li>
<li><code>SELECT TOP k ... ORDER BY VectorDistance(...)</code>; thiếu <code>ORDER BY</code> thì không dùng index; chậm, tốn RU → <strong>giảm TOP xuống 10–20</strong></li>
<li>Lọc category → filter trong WHERE + truyền <code>partition_key</code></li>
<li>Hybrid → <strong><code>ORDER BY RANK RRF(VectorDistance(...), FullTextScore(...))</code></strong></li>
</ul>
</li>
<li><strong>Change feed</strong><ul>
<li>Latest version mode không bắt được delete (dùng soft-delete + TTL); all versions and deletes mode thì bắt được</li>
<li>Processor cần lease container; consumer phải idempotent</li>
<li>Làm mới embedding không polling → <strong>Functions Cosmos DB trigger</strong>; chỉ re-embed khi trường liên quan đổi</li>
</ul>
</li>
</ul>
</section>
<section id="r2-2">
<h3>2.2 Azure Database for PostgreSQL<a class="anch" href="#r2-2">#</a></h3>
<ul>
<li><strong>Kết nối và bảo mật</strong><ul>
<li>psycopg, <code>sslmode</code> require / verify-full; Entra token làm mật khẩu, hết hạn ~1 giờ</li>
<li>Luôn parameterized query (nhất là khi ghi embedding); timeout, retry, bắt đúng loại lỗi</li>
<li>Nhiều connection ngắn → <strong>ConnectionPool</strong>; nhiều query/s (vd 500/s) → <strong>PgBouncer tích hợp cổng 6432, transaction mode</strong> (dùng <code>SET LOCAL</code>)</li>
</ul>
</li>
<li><strong>Schema và SQL</strong><ul>
<li>Metadata thay đổi → <strong>JSONB</strong>; giới hạn giá trị → <strong><code>CHECK (status IN (...))</code></strong></li>
<li>Lấy id vừa sinh → <strong><code>RETURNING</code></strong>; upsert → <strong><code>ON CONFLICT DO UPDATE</code></strong> (bẫy: <code>ON DUPLICATE KEY</code> là MySQL, <code>OUTPUT</code> là SQL Server)</li>
<li>Keyset pagination, CTE; TOAST, partitioning, bloat</li>
</ul>
</li>
<li><strong>pgvector</strong><ul>
<li>Thêm <code>vector</code> vào allowlist <strong><code>azure.extensions</code></strong> rồi <code>CREATE EXTENSION vector</code></li>
<li>Kiểu <code>vector</code> index được tối đa 2000 chiều; <code>halfvec</code> 4000 chiều, tốn ít RAM hơn</li>
<li>Toán tử: <code>&lt;=&gt;</code> cosine (embedding đã chuẩn hoá, đo ngữ nghĩa) ↔ <code>vector_cosine_ops</code>; <code>&lt;-&gt;</code> L2; <code>&lt;#&gt;</code> inner product âm; lệch opclass thì index bị bỏ qua</li>
</ul>
</li>
<li><strong>Index vector</strong><ul>
<li><strong>HNSW</strong>: <code>m</code> (số kết nối tối đa mỗi node), <code>ef_construction</code>, <code>hnsw.ef_search</code>; recall tốt, tốn RAM, tạo được trên bảng rỗng</li>
<li><strong>IVFFlat</strong>: <code>lists</code> (≈ <code>sqrt(rows)</code>), <code>probes</code>; build nhanh, phải nạp dữ liệu trước; hợp dữ liệu lớn cập nhật theo lô / refresh hằng ngày, cần build nhanh ⚠</li>
<li>DiskANN (<code>pg_diskann</code>) cho dữ liệu rất lớn</li>
<li>Có filter thì index trả thiếu kết quả → iterative scan, partial index, partition; filter bị seq scan → <strong>kiểm tra B-tree trên cột filter</strong></li>
<li><code>EXPLAIN (ANALYZE, BUFFERS)</code> để xem index có được dùng</li>
</ul>
</li>
<li><strong>Vận hành và sizing</strong><ul>
<li>Tier Burstable / General Purpose / <strong>Memory Optimized</strong> (HNSW cần index nằm trong RAM); CPU cao, cần latency thấp → <strong>Memory Optimized nhiều vCore hơn</strong> ⚠</li>
<li>Cache hit thấp (vd 85%) → <strong>tăng <code>shared_buffers</code></strong></li>
<li>Re-embed nhiều dòng → <strong>chia transaction 1.000–5.000 dòng</strong>; rebuild index, re-embed khi đổi model</li>
<li>MVCC, autovacuum, isolation, lock khi migrate; backup, PITR, read replica</li>
</ul>
</li>
<li><strong>RAG</strong><ul>
<li>Bảng chunk + metadata filter trong WHERE, ngưỡng khoảng cách</li>
<li>Hybrid: <code>tsvector</code> + GIN, kết hợp điểm bằng <strong>RRF</strong>; ngân sách token, trích dẫn nguồn</li>
</ul>
</li>
</ul>
</section>
<section id="r2-3">
<h3>2.3 Azure Managed Redis<a class="anch" href="#r2-3">#</a></h3>
<ul>
<li><strong>Tier và module</strong><ul>
<li>Thay Azure Cache for Redis (Enterprise/Enterprise Flash ngừng 31/3/2027, Basic/Standard/Premium ngừng 30/9/2028)</li>
<li>Memory Optimized 8:1 (rẻ, dev/test) · Balanced 4:1 (mặc định) · Compute Optimized 2:1 (throughput cao) · Flash Optimized RAM + NVMe (preview)</li>
<li><strong>Flash Optimized không có RediSearch / RedisBloom / RedisTimeSeries</strong> → cần vector thì loại</li>
<li>Module và clustering policy <strong>chỉ chọn lúc tạo</strong>, khoá sau đó</li>
</ul>
</li>
<li><strong>Kết nối và bảo mật</strong><ul>
<li><strong>Cổng TLS 10000</strong> (6380 là Azure Cache for Redis cũ, 6379 không TLS); kết nối bằng hostname, cùng region với app</li>
<li>Entra ID bật sẵn, access key tắt sẵn; Python dùng <code>redis-entraid</code>, scope <code>https://redis.azure.com/.default</code></li>
<li>Private endpoint group-id <code>redisEnterprise</code>; CLI <code>az redisenterprise</code></li>
<li>RediSearch bắt buộc clustering <strong>Enterprise</strong> và eviction <strong>NoEviction</strong></li>
<li>Scale khi memory / CPU / connected clients / network liên tục &gt; 75%; production bật HA, persistence hoặc import/export</li>
</ul>
</li>
<li><strong>Clustering policy</strong><ul>
<li>Enterprise: mọi client (<code>redis.Redis</code>), lệnh nhiều key chạy được</li>
<li>OSS: client cluster-aware (<code>redis.cluster.RedisCluster</code>); key khác slot → lỗi <strong>CROSSSLOT</strong> (sửa bằng hash tag hoặc dùng Enterprise)</li>
<li>Active-Active: chặn <strong>FLUSHALL/FLUSHDB</strong></li>
</ul>
</li>
<li><strong>Lệnh và kiểu dữ liệu</strong><ul>
<li>String, Hash (object), List (queue/feed), <code>INCR</code> (counter, rate limit, nguyên tử)</li>
<li>Set kèm hết hạn trong một thao tác atomic → <strong><code>setex()</code></strong> (chỉ string; Hash/List thì ghi rồi <code>EXPIRE</code>)</li>
<li><code>TTL</code> = <strong>-1: có key nhưng không có hạn</strong>, -2: key không tồn tại; <code>EXPIRE</code>/<code>PEXPIRE</code>/<code>EXPIREAT</code>/<code>PERSIST</code></li>
<li>Production <strong>không dùng <code>KEYS</code></strong>, dùng <code>SCAN</code> (xoá theo pattern bằng SCAN + <code>UNLINK</code> theo lô)</li>
<li><code>SET NX EX</code> làm lock; pipeline gom round trip; <code>decode_responses=False</code> cho dữ liệu nhị phân</li>
</ul>
</li>
<li><strong>Caching</strong><ul>
<li>Cache-aside là mặc định; write-through, write-behind</li>
<li>TTL: đổi thường xuyên 1–5 phút · vừa 15–60 phút · ổn định 1–24 giờ · tĩnh ≥ 24 giờ</li>
<li>Invalidation: TTL, xoá khi ghi DB, theo pattern, theo sự kiện; chống stampede bằng jitter hoặc lock</li>
<li>Eviction <code>allkeys-lru</code> (cache thuần), <code>volatile-lru</code>, <code>noeviction</code> (ghi lỗi OOM khi đầy)</li>
<li>Use case: data cache, content cache, session store, <strong>semantic cache</strong> cho câu trả lời LLM</li>
</ul>
</li>
<li><strong>Pub/sub và Streams</strong><ul>
<li>Pub/sub chỉ giao cho subscriber <strong>đang kết nối</strong>, không lưu, không backpressure → broadcast realtime, invalidate cache cục bộ; <code>PSUBSCRIBE</code> nhận type <code>pmessage</code></li>
<li>Streams <strong>lưu lại</strong> cho consumer group; thêm message → <strong><code>XADD</code></strong></li>
<li>Pipeline cần retry, không để 2 worker làm cùng một việc → <strong>Streams + consumer group, <code>XREADGROUP</code></strong>; xong thì <code>XACK</code></li>
<li>Message chưa ack nằm trong PEL; worker chết → <code>XPENDING</code> + <code>XCLAIM</code>/<code>XAUTOCLAIM</code>; <code>BUSYGROUP</code> = group đã có</li>
<li>Stream không tự dọn → <code>maxlen</code> approximate / <code>XTRIM</code></li>
<li>Bẫy: 3 worker cùng subscribe pub/sub thì việc chạy 3 lần; cần DLQ, session, scheduled → Service Bus</li>
</ul>
</li>
<li><strong>Vector</strong><ul>
<li><code>FT.CREATE ... VECTOR HNSW|FLAT TYPE FLOAT32 DIM ... DISTANCE_METRIC COSINE</code>; query KNN bắt buộc <strong><code>DIALECT 2</code></strong>, vector truyền <strong>bytes</strong></li>
<li>Text embedding → <strong>COSINE</strong> (L2 cho ảnh, IP khi đã chuẩn hoá); kiểu → <strong>FLOAT32</strong></li>
<li>Trên 10K vector, chấp nhận 95–99% → <strong>HNSW</strong>; nhỏ, cần chính xác tuyệt đối → FLAT</li>
<li><strong><code>EF_RUNTIME</code></strong> = đánh đổi tốc độ / độ chính xác (số node duyệt); mặc định ~10, nên 50–200</li>
<li><strong>Hash</strong> khi dữ liệu phẳng, cần tiết kiệm bộ nhớ (vector <code>tobytes()</code>); JSON khi lồng nhau hoặc nhiều vector (<code>tolist()</code>)</li>
<li>Lấy mọi kết quả đủ gần → <code>VECTOR_RANGE</code>; pre-filter đặt trước <code>=&gt;</code></li>
</ul>
</li>
</ul>
</section>
<section id="r2-4">
<h3>2.4 Chọn vector store<a class="anch" href="#r2-4">#</a></h3>
<ul>
<li>Cosmos DB: document NoSQL, phân tán toàn cầu, change feed</li>
<li>PostgreSQL: dữ liệu quan hệ, cần JOIN / filter SQL phong phú</li>
<li>Redis: độ trễ dưới mili giây, cache tầng nóng, semantic cache</li>
</ul>
</section>
<h2 class="dom">3. Messaging & Functions (20–25%)</h2>
<section id="r3-1">
<h3>3.1 Chọn dịch vụ<a class="anch" href="#r3-1">#</a></h3>
<ul>
<li>Message có kỳ vọng xử lý → <strong>Service Bus</strong>; event thông báo đã xảy ra → <strong>Event Grid</strong></li>
<li>Stream hàng triệu event/s, replay → Event Hubs; queue đơn giản, rẻ → Queue Storage</li>
</ul>
</section>
<section id="r3-2">
<h3>3.2 Service Bus<a class="anch" href="#r3-2">#</a></h3>
<ul>
<li><strong>Cơ bản</strong><ul>
<li>Tier Basic (chỉ queue) / Standard (có topic) / Premium; message 256 KB (Standard) / 100 MB (Premium)</li>
<li>Pattern: load leveling, competing consumers, publish-subscribe</li>
<li>Queue cho 1 consumer; nhiều service cùng phản ứng một kết quả → <strong>topic + mỗi service một subscription</strong></li>
<li>SDK <code>ServiceBusClient</code>; role Data Sender / <strong>Data Receiver</strong> (identity connection không nhận được message → thiếu role này)</li>
</ul>
</li>
<li><strong>Nhận message</strong><ul>
<li>Không được mất request khi worker crash → <strong>PEEK_LOCK</strong> (complete / abandon / dead-letter / defer); RECEIVE_AND_DELETE mất message khi crash</li>
<li>LockDuration mặc định 1 phút (tối đa 5), xử lý lâu → auto lock renewer; at-least-once nên consumer phải idempotent</li>
</ul>
</li>
<li><strong>Dead-letter queue</strong><ul>
<li>Lỗi 10 lần → DLQ với lý do <strong><code>MaxDeliveryCountExceeded</code></strong>; còn hết TTL, lỗi filter, app chủ động dead-letter</li>
<li><code>queue/$deadletterqueue</code>; resubmit = đọc DLQ rồi gửi lại; giám sát DLQ để biết inference nào lỗi</li>
</ul>
</li>
<li><strong>Message cho AI</strong><ul>
<li>Payload lớn (vd file 500 MB) → <strong>claim-check</strong>: lưu Blob, message chỉ chứa URI</li>
<li><strong><code>correlation_id</code></strong> để theo dõi request end-to-end (không dùng cho duplicate detection)</li>
</ul>
</li>
<li><strong>Nâng cao</strong><ul>
<li>Sessions: FIFO theo khách hàng; duplicate detection theo <code>MessageId</code>; scheduled message, defer</li>
<li>Topic filter SQL / correlation / boolean, <strong>xoá rule <code>$Default</code></strong> khi thêm filter</li>
<li>Theo triệu chứng: trùng → duplicate detection / idempotent; sai thứ tự → sessions; poison → DLQ; 429 → retry/backoff</li>
</ul>
</li>
</ul>
</section>
<section id="r3-3">
<h3>3.3 Event Grid<a class="anch" href="#r3-3">#</a></h3>
<ul>
<li><strong>Thành phần</strong><ul>
<li>Topic, event subscription, event handler; system topic, <strong>custom topic</strong> (service tự phát event), domain, namespace</li>
<li>Event Grid schema <code>id</code>, <code>topic</code>, <code>subject</code>, <code>eventType</code>, <code>eventTime</code>, <code>data</code>, <code>dataVersion</code>; CloudEvents 1.0 <code>specversion</code>, <code>type</code>, <code>source</code>, <code>id</code></li>
<li>Publish custom event bằng <code>EventGridPublisherClient</code> hoặc REST; production dùng <strong>Entra ID + managed identity</strong>, không dùng <code>aeg-sas-key</code></li>
</ul>
</li>
<li><strong>Filter</strong><ul>
<li>Event type; prefix/suffix → <strong><code>subject</code></strong> (<code>beginsWith</code> / <code>endsWith</code>)</li>
<li>Lọc theo <code>data.status</code> → <strong>advanced filter <code>StringIn</code></strong> (tối đa 25 advanced filter)</li>
</ul>
</li>
<li><strong>Giao nhận</strong><ul>
<li>Retry exponential backoff tối đa 30 lần / 24 giờ; handler cold start chậm → <strong>dựa vào retry tự động</strong></li>
<li>400/413 không retry; dead-letter cần <strong>blob container</strong>, không cấu hình thì event lỗi mất hẳn</li>
<li>Event tối đa 1 MB, tính phí theo khối 64 KB</li>
<li>Webhook validation: <code>SubscriptionValidationEvent</code> → trả <code>validationCode</code> (hoặc mở <code>validationUrl</code>); CloudEvents dùng <code>OPTIONS</code> + <code>WebHook-Request-Origin</code></li>
</ul>
</li>
</ul>
</section>
<section id="r3-4">
<h3>3.4 Azure Functions<a class="anch" href="#r3-4">#</a></h3>
<ul>
<li><strong>Hosting</strong><ul>
<li>Giảm cold start mà idle vẫn rẻ → <strong>Flex Consumption + always-ready</strong>; Premium có pre-warmed instance, không cold start</li>
<li>Consumption timeout 5 phút (tối đa 10); Premium 30 phút (có thể không giới hạn); Dedicated chạy trên App Service plan</li>
<li>HTTP trigger bị giới hạn ~230 giây → job dài dùng Durable hoặc async request-reply</li>
</ul>
</li>
<li><strong>Lập trình và dev local</strong><ul>
<li>Python v2: <code>function_app.py</code> + decorator; mỗi function 1 trigger, nhiều binding</li>
<li><code>host.json</code> (runtime), <code>local.settings.json</code> (chỉ local); Core Tools <code>func start</code></li>
<li>Trigger không chạy khi chạy local → <strong>thiếu <code>AzureWebJobsStorage</code></strong> (dùng Azurite)</li>
<li>Mỗi instance xử lý một message → <strong><code>maxConcurrentCalls: 1</code></strong> trong <code>host.json</code> (bẫy: không phải <code>batchSize</code>)</li>
</ul>
</li>
<li><strong>Secret và bảo mật</strong><ul>
<li>Key Vault reference tự nhận bản rotate → <strong>secret URI không ghi version</strong></li>
<li>Identity connection: <code>__fullyQualifiedNamespace</code> (Service Bus), <code>__accountEndpoint</code> (Cosmos), <code>__serviceUri</code></li>
<li>Auth level anonymous / function / admin, key gửi qua header <code>x-functions-key</code></li>
<li>Deploy <code>func azure functionapp publish</code>, zip deploy; lab: MCP server bằng Functions</li>
</ul>
</li>
</ul>
</section>
<section id="r3-5">
<h3>3.5 Durable Functions<a class="anch" href="#r3-5">#</a></h3>
<ul>
<li>Client → orchestrator → activity; trạng thái lưu trong task hub</li>
<li>Orchestrator phải <strong>deterministic</strong>: dùng <code>context.current_utc_datetime</code>; gọi model trong orchestrator làm replay lệch → <strong>chuyển sang activity</strong></li>
<li>Pattern: chaining, fan-out/fan-in, async HTTP API, monitor, human interaction</li>
<li>Model giới hạn tải → <strong>chia lô có giới hạn + <code>task_all()</code> từng lô</strong></li>
<li>Chờ duyệt tối đa 24h → <strong><code>wait_for_external_event</code> đua với durable timer bằng <code>task_any()</code></strong>, xong thì huỷ timer</li>
<li>Activity chạy lại ghi trùng → <strong>tên output = operation ID cố định</strong>, không overwrite</li>
<li>Hết retry mà đã có side effect → <strong>compensation idempotent rồi ném lại lỗi gốc</strong></li>
</ul>
</section>
<h2 class="dom">4. Security & Monitoring (20–25%)</h2>
<section id="r4-1">
<h3>4.1 Key Vault và danh tính<a class="anch" href="#r4-1">#</a></h3>
<ul>
<li><strong>Quyền</strong><ul>
<li>Secret / key / certificate; RBAC (nên dùng) hoặc access policy</li>
<li>Chỉ đọc secret → <strong>Key Vault Secrets User</strong>; Secrets Officer quản lý secret; <strong>Key Vault Contributor không đọc được secret</strong></li>
</ul>
</li>
<li><strong>Đọc và rotation</strong><ul>
<li><code>SecretClient.get_secret</code> không truyền version → trả <strong>bản enabled mới nhất</strong></li>
<li>Tải cao (vd 500 req/s) → <strong>cache trong bộ nhớ có TTL</strong> (vd 1 giờ), refresh khi lỗi xác thực</li>
<li>Đổi credential không downtime → <strong>dual-credential rotation</strong>; Event Grid <code>SecretNearExpiry</code> → Function tạo version mới</li>
</ul>
</li>
<li><strong>Bảo vệ</strong><ul>
<li>Soft delete 7–90 ngày, bật mặc định; <strong>purge protection</strong> không tắt được sau khi bật; firewall, private endpoint</li>
</ul>
</li>
<li><strong>DefaultAzureCredential</strong><ul>
<li>Prod dùng managed identity, local dùng <code>az login</code>, không đổi code; thứ tự environment → workload identity → managed identity → … → Azure CLI</li>
</ul>
</li>
</ul>
</section>
<section id="r4-2">
<h3>4.2 App Configuration<a class="anch" href="#r4-2">#</a></h3>
<ul>
<li>Key-value + <strong>label</strong> theo môi trường; selector null label + Production → <strong>Production thắng</strong> (nạp sau ghi đè)</li>
<li>Giá trị không nhạy cảm (vd tên deployment <code>gpt-4o</code>) → key-value thường; secret → Key Vault</li>
<li>Key Vault reference lưu <strong>URI tới secret</strong> + content type riêng; app cần <strong>App Configuration Data Reader + Key Vault Secrets User</strong></li>
<li>Feature flag bật/tắt không redeploy; refresh bằng <strong>sentinel key</strong>: app phải gọi <code>refresh()</code> và sentinel phải đã đổi</li>
<li>Python provider library + managed identity; snapshot</li>
</ul>
</section>
<section id="r4-3">
<h3>4.3 OpenTelemetry<a class="anch" href="#r4-3">#</a></h3>
<ul>
<li>Distro <code>azure-monitor-opentelemetry</code>, <code>configure_azure_monitor()</code>; connection string qua biến môi trường <strong><code>APPLICATIONINSIGHTS_CONNECTION_STRING</code></strong></li>
<li>Tên service: <code>OTEL_SERVICE_NAME</code> / <code>OTEL_RESOURCE_ATTRIBUTES</code></li>
<li>Propagation mặc định <strong>W3C TraceContext (<code>traceparent</code>)</strong>; khác: B3, OpenTracing/OpenCensus</li>
<li>Span thủ công <code>tracer.start_as_current_span</code>; exception thoát khối <code>with</code> → span tự ghi exception + status error</li>
<li>Span server → <code>AppRequests</code>; <strong><code>SpanKind.CLIENT</code> → dependencies</strong>; log → <code>AppTraces</code>; exception → <code>AppExceptions</code></li>
<li>Trace ID ↔ <strong><code>operation_Id</code></strong> (OperationId), dùng nối request qua nhiều service</li>
<li>Debug phân tán: end-to-end transaction, application map, tìm span chậm</li>
</ul>
</section>
<section id="r4-4">
<h3>4.4 KQL, dashboard và alert<a class="anch" href="#r4-4">#</a></h3>
<ul>
<li>Có sampling thì đếm bằng <strong><code>sum(itemCount)</code></strong>, không dùng <code>count()</code></li>
<li><code>where TimeGenerated &gt; ago(1h)</code>, <code>summarize count() by bin(TimeGenerated, 5m)</code>, <code>percentile(DurationMs, 95)</code> (5% request chậm nhất)</li>
<li><code>join kind=inner ... on OperationId</code>, <code>project</code>, <code>extend</code>, <code>top</code>, <code>render timechart</code>; bảng workspace <code>AppRequests</code> khác bảng classic <code>requests</code></li>
<li>Điều tra tương tác, lọc động → <strong>Workbook có parameter</strong>; dashboard chỉ để pin và theo dõi</li>
<li>Metric alert vs log search alert; ngưỡng "&gt; 0 dòng" → bắn khi bất kỳ dòng nào thoả; dynamic threshold cho anomaly</li>
<li>Action group: email, SMS, webhook, Function, Logic App; availability test</li>
</ul>
</section>
<section id="r4-5">
<h3>4.5 Bảo mật xuyên suốt<a class="anch" href="#r4-5">#</a></h3>
<ul>
<li>Managed identity ở mọi nơi, không hard-code secret; least privilege, private endpoint</li>
<li>Retry/backoff cho 429; kiểm soát chi phí cho AI workload</li>
</ul>
</section>
<h2 class="dom">5. Con số và mẹo làm đề</h2>
<section id="r5-1">
<h3>5.1 Con số phải nhớ<a class="anch" href="#r5-1">#</a></h3>
<ul>
<li>Thi: 700/1000 điểm đạt, 120 phút</li>
<li>Cosmos: point read 1 KB = 1 RU · Strong/Bounded 2× RU · partition 20 GB / 10.000 RU/s · tối thiểu 400 RU/s · flat ≤ 505 chiều, diskANN/quantizedFlat ≤ 4096</li>
<li>pgvector: <code>vector</code> 2000 chiều, <code>halfvec</code> 4000 · PgBouncer cổng 6432</li>
<li>Redis: cổng 10000 · scale khi &gt; 75%</li>
<li>Service Bus: MaxDeliveryCount 10 · lock 1 phút (tối đa 5) · 256 KB / 100 MB</li>
<li>Event Grid: 30 lần / 24 giờ · event 1 MB · 25 advanced filter</li>
<li>Functions: Consumption 5 phút (tối đa 10) · Premium 30 phút · HTTP ~230 giây</li>
<li>Key Vault: soft delete 7–90 ngày</li>
<li>Container Apps: mặc định 0–10 replica, concurrency 10, Consumption tối đa 4 vCPU / 8 GiB</li>
</ul>
</section>
<section id="r5-2">
<h3>5.2 Quy luật đáp án<a class="anch" href="#r5-2">#</a></h3>
<ul>
<li>Đáp án đúng gần như luôn là <strong>cách chuẩn production</strong>: managed identity, digest, YAML trong source control, biến môi trường cho connection string</li>
<li>Phương án sai thường <strong>làm thô</strong> (restart, xoá, scale to lên) hoặc <strong>dùng nhầm công cụ</strong> (<code>batchSize</code> thay <code>maxConcurrentCalls</code>, <code>/home</code> thay Blob)</li>
<li>Câu hỏi bước đầu khi chẩn đoán → chọn lệnh <strong>xem trực tiếp chỗ hỏng</strong> (<code>logs show</code>, <code>describe pod</code>, <code>describe service</code>, so cổng), không sửa mò</li>
</ul>
</section>
`,u=e({__name:"Ai200ReviewPage",setup(r){return(l,s)=>(i(),t(n,{certId:"ai200",html:o(c),title:"AI-200 · Ôn nhanh",subtitle:"Một danh sách các mục cần ôn theo 4 domain, đã gộp nội dung khóa AI-200T00 và 27 bài assessment trên Microsoft Learn",practiceRoute:"/ai-200/practice",practiceLabel:"Luyện thi AI-200",extraLinks:[{to:"/ai-200/documents",label:"Tài liệu chính"},{to:"/ai-200/services",label:"Dịch vụ Azure"}]},null,8,["html"]))}});export{u as default};
