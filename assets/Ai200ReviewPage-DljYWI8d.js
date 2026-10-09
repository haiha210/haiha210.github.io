import{_ as n}from"./NotesPage.vue_vue_type_script_setup_true_lang-CKSdB-r6.js";import{d as i,f as e,e as t,o}from"./index-BCHEovJ8.js";import"./ThemeToggle.vue_vue_type_script_setup_true_lang-lSxyauXw.js";import"./useStudyClock-Cxjfd_W8.js";const l=`<h2 class="dom">0. Trang này là gì</h2>
<section id="r0">
<h3>0.1 Cách dùng trang<a class="anch" href="#r0">#</a></h3>
<p>Trang ôn nhanh AI-200, gom bốn bản tổng hợp:</p><ul><li><b>Phần 1</b>: các mục cần ôn theo 4 domain, kèm con số phải nhớ.</li><li><b>Phần 2</b>: bổ sung theo 9 learning path / 24 module của khóa <a href="https://learn.microsoft.com/en-us/training/courses/ai-200t00" target="_blank" rel="noopener">AI-200T00</a>; mục <b>(mới)</b> là phần Phần 1 chưa liệt kê.</li><li><b>Phần 3</b>: ghi chú rút gọn 27 bài module assessment trên Microsoft Learn (câu hỏi → đáp án).</li><li><b>Phần 4</b>: Azure Managed Redis bản đầy đủ.</li></ul><p>Chi tiết, code và nguồn nằm ở <a href="/ai-200/documents">tài liệu chính</a>; trang này chỉ để lướt trước khi thi.</p><div class="warn">Trang Learn không hiện đáp án khi chưa nộp bài, nên đáp án ở Phần 3 là tự chọn. Câu chưa chắc đánh dấu ⚠. Một số chi tiết ở Phần 1–2 lấy từ kiến thức chung, nên tra lại tài liệu Microsoft trước khi học thuộc (giới hạn ConfigMap 1 MiB, cổng HTTP 230s, tier Service Bus, handshake CloudEvents, giới hạn chiều của kiểu <code>vector</code>).</div>
</section>
<h2 class="dom">1. Các mục cần ôn theo domain</h2>
<section id="r1-1">
<h3>1.1 Container (20–25%)<a class="anch" href="#r1-1">#</a></h3>
<ul>
<li><strong>ACR — xác thực và SKU</strong><ul>
<li>Có 3 SKU: Basic / Standard / Premium. Geo-replication, private endpoint và retention policy chỉ có ở Premium</li>
<li>Admin user mặc định tắt và không nên dùng trong production</li>
<li>Cách nên dùng: managed identity + role <strong>AcrPull</strong> (đẩy image thì dùng AcrPush)</li>
<li>Service principal dùng cho CI ngoài Azure</li>
<li><code>az acr login</code> dùng để đăng nhập Docker ở máy local</li>
</ul>
</li>
<li><strong>ACR Tasks</strong><ul>
<li>Quick task: <code>az acr build</code> build trên cloud, máy CI không cần Docker</li>
<li>Trigger: source commit, <strong>base image update</strong> (tự vá image), timer</li>
<li>Multi-step task: file YAML chạy bằng <code>az acr run</code>, biến <code>{{.Run.ID}}</code> dùng làm tag</li>
<li>Build context có thể là thư mục local, Git URL hoặc tarball</li>
</ul>
</li>
<li><strong>Phiên bản và dọn kho</strong><ul>
<li>Tag ổn định (<code>v1</code>) khác tag duy nhất (<code>v1.0.3</code>, build ID). Production nên dùng tag duy nhất hoặc digest</li>
<li>Image lock dùng 4 thuộc tính: <code>write-enabled</code>, <code>delete-enabled</code>, <code>read-enabled</code>, <code>list-enabled</code>. Không nhầm với resource lock của ARM</li>
<li><code>acr purge</code> có các tham số <code>--filter</code>, <code>--ago</code>, <code>--keep</code>, <code>--untagged</code>, chạy theo lịch bằng ACR Task</li>
<li>Retention policy chỉ xoá manifest untagged (Premium)</li>
</ul>
</li>
<li><strong>App Service chạy container</strong><ul>
<li>Pull từ ACR bằng managed identity: bật <code>acrUseManagedIdentityCredentials</code> và gán AcrPull</li>
<li>Container không lên: thường do thiếu <strong><code>WEBSITES_PORT</code></strong> khi app không nghe cổng 80</li>
<li><code>/home</code> là storage bền vững (<code>WEBSITES_ENABLE_APP_SERVICE_STORAGE</code>)</li>
<li>Bật Always On, health check path; dùng webhook để continuous deployment</li>
</ul>
</li>
<li><strong>App settings và secret</strong><ul>
<li>App settings được inject thành biến môi trường</li>
<li>Connection string có tiền tố như <code>CUSTOMCONNSTR_</code></li>
<li>Slot setting không đi theo khi swap slot</li>
<li>Key Vault reference: <code>@Microsoft.KeyVault(SecretUri=...)</code> hoặc <code>(VaultName=...;SecretName=...)</code></li>
<li>Key Vault reference cần managed identity + role <strong>Key Vault Secrets User</strong></li>
</ul>
</li>
<li><strong>Chẩn đoán App Service</strong><ul>
<li><code>az webapp log tail</code>, log stream</li>
<li>Kudu (SCM), SSH vào container</li>
<li>Diagnostic settings đẩy log về Log Analytics</li>
</ul>
</li>
<li><strong>Sidecar trên App Service</strong><ul>
<li>Mô hình sitecontainers: 1 main container + các sidecar</li>
<li>Các container giao tiếp qua <code>localhost</code>, nên không được trùng cổng</li>
<li>Khi lỗi, kiểm tra theo thứ tự: cấu hình → log từng container → cổng localhost</li>
</ul>
</li>
<li><strong>Container Apps — kiến trúc</strong><ul>
<li>Environment là ranh giới mạng và log, chứa nhiều app</li>
<li>Ingress external/internal, <code>targetPort</code> phải khớp cổng app</li>
<li>Secret dùng <code>secretref:</code>, có thể tham chiếu Key Vault</li>
<li>Registry: cấu hình managed identity để pull từ ACR</li>
<li>Deploy bằng YAML hoặc <code>az containerapp up/create</code></li>
<li>Dapr: sidecar, building block, component</li>
</ul>
</li>
<li><strong>Revision và traffic</strong><ul>
<li>Revision mode: single hoặc multiple</li>
<li>Sửa template (image, env, scale) tạo revision mới (revision-scope)</li>
<li>Sửa secret, ingress, registry không tạo revision (application-scope)</li>
<li>Canary: chạy multiple revision rồi chia % traffic, dùng label để test URL riêng</li>
<li>Vận hành: activate/deactivate/restart revision</li>
<li>Revision fail thường do lỗi pull image, lệch cổng, thiếu env/secret, probe sai, OOM</li>
</ul>
</li>
<li><strong>Probe trên ACA</strong><ul>
<li>Có liveness / readiness / startup, chỉ hỗ trợ HTTP/TCP (không có exec như AKS)</li>
<li>Model nạp chậm: tăng <code>initialDelaySeconds</code> hoặc dùng startup probe</li>
</ul>
</li>
<li><strong>Scale và KEDA</strong><ul>
<li><code>minReplicas</code> / <code>maxReplicas</code>; mặc định có thể scale về 0</li>
<li>HTTP rule dùng <code>concurrentRequests</code></li>
<li>CPU/memory rule <strong>không scale về 0 được</strong></li>
<li>Rule <code>azure-servicebus</code>: metadata <code>queueName</code>, <code>messageCount</code>, <code>namespace</code> + auth (secret hoặc identity)</li>
<li>Các scaler khác: Event Hubs, Kafka, Redis, cron, Prometheus</li>
<li>Cơ chế bên trong: KEDA = scaler → metrics → HPA</li>
<li>Workload profile: Consumption hay Dedicated (GPU, nhiều tài nguyên)</li>
<li>Consumption giới hạn CPU/memory theo cặp, tối đa 4 vCPU / 8 Gi</li>
</ul>
</li>
<li><strong>Dynamic sessions</strong> (chạy code do AI sinh ra)<ul>
<li>Chọn pool: code interpreter (Python có sẵn) hoặc custom container</li>
<li>Cấu hình pool: số session tối đa, cooldown, chặn egress, identity</li>
<li>Backend gọi bằng token Entra, <code>identifier</code> để tách session theo user</li>
<li>Upload/download file</li>
<li>Xử lý lỗi: session hết hạn, timeout, retry, xoá session</li>
</ul>
</li>
<li><strong>Nền tảng Kubernetes</strong><ul>
<li>Control plane gồm API server, scheduler, controller, etcd; node có kubelet</li>
<li>Nguyên lý: khai báo trạng thái + reconcile loop</li>
<li>Vòng đời: <code>kubectl apply</code> → schedule → pull image → probe → nhận traffic</li>
</ul>
</li>
<li><strong>AKS — deploy</strong><ul>
<li><code>az aks create --attach-acr</code>, <code>az aks get-credentials</code>, <code>kubectl apply -f</code></li>
<li>Đọc manifest Deployment (replicas, selector/labels, containers, ports, env)</li>
<li>Service: ClusterIP / NodePort / LoadBalancer</li>
<li>Selector của Service không khớp label pod → Service không có endpoint</li>
<li>DNS dạng <code>svc.namespace.svc.cluster.local</code></li>
<li>Rolling update: <code>maxSurge</code>, <code>maxUnavailable</code></li>
<li>Scheduling: nodeSelector, affinity, taint/toleration</li>
</ul>
</li>
<li><strong>AKS — tài nguyên và cấu hình</strong><ul>
<li>requests/limits quyết định QoS: Guaranteed / Burstable / BestEffort (BestEffort bị evict trước)</li>
<li>Vượt memory limit → OOMKilled; vượt CPU limit → bị throttle</li>
<li>PodDisruptionBudget, imagePullSecrets</li>
<li>ConfigMap tối đa 1 MiB, dùng <code>envFrom</code> hoặc mount theo key, có thể đặt immutable</li>
<li>Secret chỉ là base64, không phải mã hoá; muốn an toàn dùng Key Vault CSI driver</li>
<li>Lưu trữ: PV / PVC / StorageClass</li>
<li>Disk là ReadWriteOnce, Azure Files hỗ trợ ReadWriteMany</li>
</ul>
</li>
<li><strong>AKS — troubleshoot</strong><ul>
<li>ImagePullBackOff: sai tên image hoặc thiếu quyền ACR</li>
<li>CrashLoopBackOff: app crash; xem <code>kubectl logs --previous</code></li>
<li>Pending: thiếu tài nguyên hoặc không khớp taint/affinity</li>
<li>Lệnh: <code>kubectl describe</code>, <code>get events</code>, <code>exec</code>, <code>port-forward</code>, <code>top</code></li>
<li>Probe fail: liveness → restart container, readiness → rút khỏi endpoint, startup → chặn 2 probe kia</li>
<li>Container Insights trên portal</li>
</ul>
</li>
<li><strong>Ngoài khóa học</strong><ul>
<li>Dockerfile cho FastAPI</li>
<li>Bicep cho chuỗi ACR → Container Apps</li>
<li>Bảng chọn compute: App Service / ACA / AKS</li>
</ul>
</li>
</ul>
</section>
<section id="r1-2">
<h3>1.2 Data (25–30%)<a class="anch" href="#r1-2">#</a></h3>
<ul>
<li><strong>Cosmos DB — SDK và mô hình tài nguyên</strong><ul>
<li><code>CosmosClient</code> → database → container → item</li>
<li>Manual throughput tối thiểu 400 RU/s; có autoscale và serverless</li>
<li>Thao tác: create / upsert / replace</li>
<li>Optimistic concurrency: ETag + <code>if-match</code>, lệch thì nhận 412</li>
<li>System property: <code>id</code>, <code>_etag</code>, <code>_ts</code></li>
<li>Data-plane RBAC: role Cosmos DB Built-in Data Contributor</li>
</ul>
</li>
<li><strong>Truy vấn và RU</strong><ul>
<li>Point read (id + partition key) 1 KB = 1 RU, rẻ nhất</li>
<li>Thứ tự chi phí: point read &lt; single-partition query &lt; cross-partition query</li>
<li>Cú pháp: <code>SELECT VALUE</code>, <code>TOP</code>, <code>OFFSET LIMIT</code>, <code>ARRAY_CONTAINS</code>, aggregate</li>
<li>Phân trang bằng continuation token</li>
<li>Đọc request charge và query metrics để đo RU</li>
</ul>
</li>
<li><strong>Partition key</strong><ul>
<li>Chọn key có cardinality cao, phân bố đều, xuất hiện trong filter</li>
<li>Logical partition tối đa 20 GB / 10.000 RU/s</li>
<li>Hierarchical partition key (tối đa 3 cấp) để vượt trần 20 GB</li>
<li>Partition split diễn ra tự động</li>
</ul>
</li>
<li><strong>Indexing policy</strong><ul>
<li>Mặc định index mọi path</li>
<li><strong>Exclude <code>/embedding/*</code></strong> để giảm RU khi ghi</li>
<li>Composite index cho <code>ORDER BY</code> nhiều cột</li>
<li>Cú pháp path <code>/?</code> và <code>/*</code></li>
<li>Tuple index, <code>vectorIndexes</code></li>
</ul>
</li>
<li><strong>Consistency</strong><ul>
<li>5 mức: Strong / Bounded staleness / Session (mặc định) / Consistent prefix / Eventual</li>
<li>Strong và Bounded tốn <strong>2× RU</strong> khi đọc</li>
<li>Session token: truyền token giữa các client để đọc được dữ liệu vừa ghi</li>
<li>Chọn mức theo câu chuyện của đề</li>
</ul>
</li>
<li><strong>Vector search</strong><ul>
<li><code>vectorEmbeddingPolicy</code>: path, dataType, dimensions, distanceFunction (cosine/dotproduct/euclidean)</li>
<li>Policy <strong>không sửa được</strong> sau khi tạo container</li>
<li>Loại index: flat (≤505 chiều, chính xác), quantizedFlat, <strong>diskANN</strong> (≤4096 chiều, dữ liệu lớn)</li>
<li>Query: <code>SELECT TOP k ... ORDER BY VectorDistance(...)</code></li>
<li>Thiếu <code>ORDER BY</code> thì không dùng index → RU tăng vọt</li>
<li>Cosine: điểm càng cao càng giống; dùng ngưỡng, kết hợp filter metadata</li>
<li>Full-text search và hybrid search (RRF)</li>
</ul>
</li>
<li><strong>Change feed</strong><ul>
<li>Latest version mode không bắt được delete; all versions and deletes mode bắt được</li>
<li>Bắt delete trong latest version mode bằng soft-delete flag + TTL</li>
<li>Change feed processor cần lease container; mỗi consumer dùng lease/prefix riêng</li>
<li>Có thể dùng Functions Cosmos DB trigger</li>
<li>Consumer phải idempotent</li>
<li>Ứng dụng: tạo/làm mới embedding khi document đổi, chỉ re-embed khi trường liên quan thay đổi</li>
</ul>
</li>
<li><strong>Triển khai Cosmos DB</strong><ul>
<li>Bật vector search và full-text trên account</li>
<li>Tạo container kèm vector policy</li>
<li>Gán RBAC data plane</li>
</ul>
</li>
<li><strong>PostgreSQL — kết nối và bảo mật</strong><ul>
<li>Kết nối bằng psycopg; <code>sslmode</code>: <code>require</code> / <code>verify-full</code>, …</li>
<li>Entra ID: token dùng làm mật khẩu, hết hạn khoảng 1 giờ nên phải lấy lại token cho connection mới</li>
<li>Luôn dùng parameterized query, đặc biệt khi ghi embedding (chống SQL injection)</li>
<li>Timeout, retry, bắt đúng loại lỗi của psycopg</li>
</ul>
</li>
<li><strong>Connection</strong><ul>
<li>Số connection tối đa theo SKU</li>
<li><strong>PgBouncer tích hợp, cổng 6432</strong></li>
<li>Pool mode: session / transaction / statement; transaction mode thì dùng <code>SET LOCAL</code></li>
<li>Thêm pool phía app; serverless (Functions) rất cần pool</li>
</ul>
</li>
<li><strong>Schema và kiểu dữ liệu</strong><ul>
<li>Chọn kiểu phù hợp; JSONB cho metadata</li>
<li>Khoá ngoại; DDL chạy được trong transaction</li>
<li>TOAST, partitioning, bloat</li>
<li>Truy vấn đặc thù: keyset pagination, CTE, <code>RETURNING</code>, upsert <code>ON CONFLICT</code></li>
</ul>
</li>
<li><strong>pgvector — thiết lập</strong><ul>
<li>Thêm <code>vector</code> vào allowlist <strong><code>azure.extensions</code></strong> rồi mới <code>CREATE EXTENSION vector</code></li>
<li>Kiểu <code>vector</code>: index được tối đa 2000 chiều</li>
<li><code>halfvec</code> index được tối đa 4000 chiều và tốn ít RAM hơn</li>
</ul>
</li>
<li><strong>Index vector</strong><ul>
<li><strong>HNSW</strong>: tham số <code>m</code>, <code>ef_construction</code>, <code>hnsw.ef_search</code>; recall tốt, tốn RAM, build chậm, tạo được trên bảng rỗng</li>
<li><strong>IVFFlat</strong>: tham số <code>lists</code>, <code>probes</code>; build nhanh, <strong>phải nạp dữ liệu trước</strong> mới tạo index</li>
<li>DiskANN (<code>pg_diskann</code>) cho dữ liệu rất lớn</li>
<li>Toán tử khớp opclass: <code>&lt;=&gt;</code> cosine ↔ <code>vector_cosine_ops</code>, <code>&lt;-&gt;</code> L2, <code>&lt;#&gt;</code> inner product âm</li>
<li>Toán tử lệch opclass → index bị bỏ qua</li>
<li>Bẫy khi có filter: index trả về ít kết quả hơn mong muốn (dùng iterative scan, partial index hoặc partition)</li>
<li>Đọc <code>EXPLAIN (ANALYZE, BUFFERS)</code> để xem index có được dùng không</li>
</ul>
</li>
<li><strong>Sizing và vận hành</strong><ul>
<li>Tier: Burstable / General Purpose / <strong>Memory Optimized</strong> (HNSW cần index nằm trong RAM)</li>
<li>Storage, IOPS</li>
<li>MVCC, autovacuum, isolation level, lock khi migrate</li>
<li>Backup, PITR, read replica, cache trước PostgreSQL</li>
<li>Vòng đời index/embedding: rebuild index, re-embed khi đổi model</li>
</ul>
</li>
<li><strong>RAG trên PostgreSQL</strong><ul>
<li>Bảng chunk + metadata filter trong <code>WHERE</code></li>
<li>Ngưỡng khoảng cách</li>
<li>Hybrid: <code>tsvector</code> + GIN + kết hợp điểm bằng RRF hoặc trọng số</li>
<li>Ngân sách token, trích dẫn nguồn, đánh giá retriever</li>
</ul>
</li>
<li><strong>Azure Managed Redis</strong><ul>
<li>Cache-aside: <code>SET key val EX n</code>, <code>TTL</code>, <code>EXPIRE</code></li>
<li>Invalidate khi dữ liệu nguồn đổi; <code>UNLINK</code> (xoá không chặn) thay vì <code>DEL</code> cho key lớn</li>
<li>Eviction policy (volatile-lru, allkeys-lru, noeviction…)</li>
<li>Bật <strong>RediSearch lúc tạo</strong> cache (không thêm sau được)</li>
<li>Vector: <code>FT.CREATE ... VECTOR HNSW|FLAT DIM ... DISTANCE_METRIC COSINE</code></li>
<li>Truy vấn <code>FT.SEARCH</code> với KNN, <code>DIALECT 2</code></li>
<li>Semantic cache cho câu trả lời LLM</li>
<li>Cổng 10000 (TLS)</li>
</ul>
</li>
<li><strong>Chọn vector store</strong><ul>
<li>Cosmos: document NoSQL, phân tán toàn cầu</li>
<li>PostgreSQL: cần JOIN với dữ liệu quan hệ</li>
<li>Redis: độ trễ dưới ms, cache</li>
</ul>
</li>
</ul>
</section>
<section id="r1-3">
<h3>1.3 Messaging &amp; Functions (20–25%)<a class="anch" href="#r1-3">#</a></h3>
<ul>
<li><strong>Phân biệt dịch vụ</strong><ul>
<li>Message (có kỳ vọng xử lý): Service Bus</li>
<li>Event (thông báo đã xảy ra): Event Grid</li>
<li>Stream hàng triệu event/s, replay: Event Hubs</li>
<li>Queue đơn giản, rẻ: Queue Storage</li>
</ul>
</li>
<li><strong>Service Bus — cơ bản</strong><ul>
<li>Tier: Basic (chỉ có queue) / Standard (có topic) / Premium</li>
<li>Message tối đa 256 KB (Standard) / 100 MB (Premium)</li>
<li>SDK Python: <code>ServiceBusClient</code>, sender/receiver, <code>max_wait_time</code></li>
<li>Role: Azure Service Bus Data Sender / Data Receiver</li>
</ul>
</li>
<li><strong>Nhận message</strong><ul>
<li><strong>PEEK_LOCK</strong>: nhận rồi complete / abandon / dead-letter / defer</li>
<li>RECEIVE_AND_DELETE: nhanh nhưng mất message nếu consumer crash</li>
<li>LockDuration mặc định 1 phút (tối đa 5); xử lý lâu thì dùng auto lock renewer</li>
<li>Giao at-least-once nên consumer phải idempotent</li>
</ul>
</li>
<li><strong>Dead-letter queue</strong><ul>
<li>Lý do: vượt MaxDeliveryCount (mặc định 10), hết TTL (khi bật dead-lettering on expiration), lỗi filter, header quá lớn, app chủ động dead-letter</li>
<li>Đường dẫn: <code>queue/$deadletterqueue</code></li>
<li>Resubmit = đọc message từ DLQ rồi gửi lại queue chính</li>
</ul>
</li>
<li><strong>Tính năng nâng cao</strong><ul>
<li>Sessions: xử lý theo thứ tự cho từng khách hàng (FIFO)</li>
<li>Duplicate detection: lọc trùng theo <code>MessageId</code> ở phía broker, trong một khoảng thời gian</li>
<li>Scheduled message, defer</li>
<li>Topic/subscription: SQL filter, correlation filter, boolean filter; <strong>xoá rule <code>$Default</code></strong> khi thêm filter</li>
<li>Chọn công cụ theo triệu chứng: trùng → duplicate detection / idempotent; sai thứ tự → sessions; poison → DLQ; 429 chập chờn → retry/backoff</li>
</ul>
</li>
<li><strong>Event Grid — loại topic và schema</strong><ul>
<li>System topic (Blob, Key Vault…), custom topic, domain, namespace</li>
<li>Event Grid schema: <code>id</code>, <code>topic</code>, <code>subject</code>, <code>eventType</code>, <code>eventTime</code>, <code>data</code>, <code>dataVersion</code></li>
<li>CloudEvents 1.0: <code>specversion</code>, <code>type</code>, <code>source</code>, <code>id</code></li>
</ul>
</li>
<li><strong>Event Grid — filter, retry, dead-letter</strong><ul>
<li>Filter: event type, subject (<code>beginsWith</code>/<code>endsWith</code>), advanced filter (tối đa 25)</li>
<li>Retry với exponential backoff, tối đa <strong>30 lần / 24 giờ</strong></li>
<li><strong>400/413 không retry</strong></li>
<li>Dead-letter cần <strong>blob container</strong>; không cấu hình thì event lỗi bị mất hẳn</li>
<li>Event tối đa 1 MB, tính phí theo khối 64 KB</li>
</ul>
</li>
<li><strong>Webhook validation</strong><ul>
<li>Event Grid schema: nhận <code>SubscriptionValidationEvent</code> rồi trả về <code>validationCode</code> (hoặc mở <code>validationUrl</code>)</li>
<li>CloudEvents: handshake bằng <code>OPTIONS</code> + header <code>WebHook-Request-Origin</code></li>
</ul>
</li>
<li><strong>Functions — lập trình</strong><ul>
<li>Python v2: <code>function_app.py</code> + decorator (<code>@app.route</code>, <code>@app.service_bus_queue_trigger</code>, <code>@app.blob_trigger</code>, <code>@app.event_grid_trigger</code>, <code>@app.cosmos_db_trigger</code>)</li>
<li>Mỗi function có đúng 1 trigger, nhiều input/output binding</li>
<li><code>host.json</code> (cấu hình runtime), <code>local.settings.json</code> (chỉ dùng local)</li>
</ul>
</li>
<li><strong>Functions — hosting và deploy</strong><ul>
<li>Consumption: timeout 5 phút, tối đa 10</li>
<li>Premium: mặc định 30 phút, có thể không giới hạn; không cold start</li>
<li>Flex Consumption: có VNet, identity</li>
<li>Dedicated: chạy trên App Service plan</li>
<li>HTTP trigger luôn bị giới hạn khoảng 230s bởi load balancer → job dài dùng Durable hoặc pattern async</li>
<li>Deploy: <code>func azure functionapp publish</code>, zip deploy; cần <code>AzureWebJobsStorage</code></li>
<li>Identity-based connection: hậu tố <code>__fullyQualifiedNamespace</code> (Service Bus), <code>__accountEndpoint</code> (Cosmos), <code>__serviceUri</code></li>
</ul>
</li>
<li><strong>Durable Functions</strong><ul>
<li>Thành phần: client → orchestrator → activity</li>
<li>Orchestrator phải <strong>deterministic</strong>: dùng <code>context.current_utc_datetime</code>, không gọi I/O trực tiếp</li>
<li>Pattern: chaining, fan-out/fan-in, async HTTP API, monitor, human interaction (chờ external event + timer)</li>
<li>Task hub lưu trạng thái trong storage</li>
</ul>
</li>
</ul>
</section>
<section id="r1-4">
<h3>1.4 Security &amp; Monitoring (20–25%)<a class="anch" href="#r1-4">#</a></h3>
<ul>
<li><strong>Key Vault — quyền</strong><ul>
<li>3 loại đối tượng: secret / key / certificate</li>
<li>Mô hình quyền: RBAC (nên dùng) hoặc access policy</li>
<li><strong>Secrets User</strong> đọc được secret; Secrets Officer quản lý secret</li>
<li><strong>Key Vault Contributor không đọc được secret</strong> (chỉ có quyền management plane)</li>
</ul>
</li>
<li><strong>Key Vault — đọc và rotation</strong><ul>
<li><code>SecretClient.get_secret</code>; có nhiều version</li>
<li>Cache secret trong app để tránh bị throttle</li>
<li>Rotation: Event Grid <code>SecretNearExpiry</code> → Function tạo version mới</li>
<li>App tham chiếu secret không ghi version để tự lấy bản mới</li>
</ul>
</li>
<li><strong>Key Vault — bảo vệ</strong><ul>
<li>Soft delete 7–90 ngày, bật mặc định</li>
<li><strong>Purge protection</strong> không tắt được sau khi bật</li>
<li>Firewall, private endpoint</li>
</ul>
</li>
<li><strong>DefaultAzureCredential</strong><ul>
<li>Thứ tự thử: environment → workload identity → managed identity → … → Azure CLI</li>
<li>Trên Azure dùng managed identity, ở local dùng tài khoản đã <code>az login</code></li>
</ul>
</li>
<li><strong>App Configuration</strong><ul>
<li>Key-value + <strong>label</strong> (theo môi trường)</li>
<li>Key Vault reference: app cần quyền ở <strong>cả</strong> App Configuration lẫn Key Vault</li>
<li>Feature flag: bật/tắt tính năng không cần redeploy</li>
<li>Refresh bằng <strong>sentinel key</strong>: chỉ reload toàn bộ khi sentinel đổi</li>
<li>Role App Configuration Data Reader; snapshot</li>
</ul>
</li>
<li><strong>OpenTelemetry</strong><ul>
<li>Distro <code>azure-monitor-opentelemetry</code>: gọi <code>configure_azure_monitor()</code>, đọc <code>APPLICATIONINSIGHTS_CONNECTION_STRING</code></li>
<li>Đặt tên service bằng <code>OTEL_SERVICE_NAME</code> / <code>OTEL_RESOURCE_ATTRIBUTES</code></li>
<li>Trace gồm nhiều span; tạo span thủ công bằng <code>tracer.start_as_current_span</code>; gắn attribute</li>
<li>Header <strong><code>traceparent</code></strong> (W3C, mặc định); propagator khác: B3, OpenTracing/OpenCensus</li>
<li>Span server → <code>AppRequests</code>; span client → <code>AppDependencies</code>; log → <code>AppTraces</code>; exception → <code>AppExceptions</code></li>
<li><strong>OperationId</strong> = trace id, dùng để nối request qua nhiều service</li>
<li>Có sampling thì đếm bằng <code>sum(itemCount)</code>, không dùng <code>count()</code></li>
</ul>
</li>
<li><strong>KQL</strong><ul>
<li>Lọc thời gian: <code>where TimeGenerated &gt; ago(1h)</code></li>
<li><code>summarize count() by bin(TimeGenerated, 5m)</code></li>
<li><code>percentile(DurationMs, 95)</code> để tìm endpoint chậm</li>
<li><code>join kind=inner ... on OperationId</code></li>
<li><code>project</code>, <code>extend</code>, <code>top</code>, <code>render timechart</code></li>
<li>Bảng workspace-based (<code>AppRequests</code>) khác bảng classic (<code>requests</code>)</li>
<li>Lab điều tra sự cố: 429, timeout embedding, regression sau deploy, cold start, service im lặng</li>
</ul>
</li>
<li><strong>Alert và giám sát</strong><ul>
<li>Metric alert vs log search alert</li>
<li>Action group: email, SMS, webhook, Function, Logic App</li>
<li>Availability test (standard test)</li>
<li>Workbook làm dashboard</li>
</ul>
</li>
<li><strong>Bảo mật xuyên suốt và hardening</strong><ul>
<li>Managed identity ở mọi nơi, không hard-code secret</li>
<li>Private endpoint, least privilege</li>
<li>Retry/backoff cho 429</li>
<li>Kiểm soát chi phí cho AI workload</li>
</ul>
</li>
</ul>
</section>
<section id="r1-5">
<h3>1.5 Con số phải nhớ<a class="anch" href="#r1-5">#</a></h3>
<ul>
<li><strong>Thi:</strong> 700/1000 điểm đạt, 120 phút</li>
<li><strong>Cosmos DB</strong><ul>
<li>point read 1 KB = 1 RU</li>
<li>Strong / Bounded staleness tốn 2× RU</li>
<li>logical partition tối đa 20 GB / 10.000 RU/s</li>
<li>manual throughput tối thiểu 400 RU/s</li>
<li>index flat tối đa 505 chiều; diskANN / quantizedFlat tối đa 4096 chiều</li>
</ul>
</li>
<li><strong>pgvector:</strong> HNSW tối đa 2000 chiều (halfvec 4000); PgBouncer cổng 6432</li>
<li><strong>Service Bus</strong><ul>
<li>MaxDeliveryCount 10</li>
<li>LockDuration 1 phút (tối đa 5)</li>
<li>message 256 KB (Standard) / 100 MB (Premium)</li>
</ul>
</li>
<li><strong>Event Grid</strong><ul>
<li>retry 30 lần / 24 giờ</li>
<li>event tối đa 1 MB</li>
<li>25 advanced filter</li>
</ul>
</li>
<li><strong>Functions:</strong> Consumption 5 phút (tối đa 10); Premium 30 phút (có thể không giới hạn)</li>
<li><strong>Key Vault:</strong> soft delete 7–90 ngày</li>
<li><strong>Redis:</strong> cổng 10000</li>
</ul>
</section>
<h2 class="dom">2. Bổ sung theo khóa AI-200T00</h2>
<section id="r2-1">
<h3>2.1 LP1 · Implement container application hosting<a class="anch" href="#r2-1">#</a></h3>
<ul>
<li><strong>Store and manage containers in ACR</strong><ul>
<li><strong>(mới)</strong> Phân cấp registry → repository → artifact (image, manifest, tag, digest; ACR chứa được cả OCI artifact như Helm chart)</li>
<li>Build trên cloud bằng ACR Tasks; dùng Azure CLI để quản lý image và chạy quick task</li>
<li>Chiến lược tag/version để deploy ổn định: tag duy nhất hoặc digest, không dùng <code>latest</code></li>
</ul>
</li>
<li><strong>Deploy containers to App Service</strong><ul>
<li>Deploy custom container từ registry</li>
<li>Cấu hình runtime: <strong>startup command</strong>, cổng (<code>WEBSITES_PORT</code>), persistent storage <code>/home</code></li>
<li>App settings và <strong>connection strings</strong></li>
<li>Chẩn đoán bằng log stream, Kudu và diagnostic settings</li>
</ul>
</li>
<li><strong>Run sidecar-enabled AI apps on App Service</strong><ul>
<li><strong>(mới)</strong> Khi nào nên dùng sidecar: thành phần AI gắn chặt với app chính (model server local, OTel collector), chỉ hỗ trợ Linux</li>
<li>Cấu hình main + sidecar: target port, env var, auth registry private</li>
<li><strong>(mới)</strong> Trao đổi file qua volume <code>/home</code> dùng chung; gọi nhau qua <code>localhost</code></li>
<li>Chẩn đoán sidecar: lỗi pull image, startup, thiếu tài nguyên, kết nối</li>
</ul>
</li>
</ul>
</section>
<section id="r2-2">
<h3>2.2 LP2 · Deploy and manage apps on Container Apps<a class="anch" href="#r2-2">#</a></h3>
<ul>
<li><strong>Deploy containers to Container Apps</strong><ul>
<li><strong>(mới)</strong> Environment ảnh hưởng 3 thứ: networking (VNet), logging (Log Analytics), isolation</li>
<li>Deploy bằng <code>az containerapp create</code> hoặc <code>--yaml</code></li>
<li>Env var + secret (<code>secretref:</code>); auth pull image từ registry private</li>
<li><strong>(mới)</strong> Kiểm tra deploy qua log, danh sách revision và <strong>trạng thái replica</strong> (<code>az containerapp replica list</code>)</li>
</ul>
</li>
<li><strong>Manage containers (day-two)</strong><ul>
<li>Cập nhật image an toàn, quản lý revision</li>
<li>Lifecycle: restart / activate / deactivate; chẩn đoán revision fail</li>
<li>Health probe và lỗi probe</li>
<li><strong>(mới)</strong> Tối ưu CPU/memory và cấu hình scale để cân bằng chi phí và hiệu năng</li>
</ul>
</li>
<li><strong>Scale containers</strong><ul>
<li>Scale rule loại HTTP, <strong>TCP (mới)</strong>, CPU, memory</li>
<li>KEDA scaler cho các dịch vụ Azure và workload tuỳ biến</li>
<li>Chọn compute: Consumption hay Dedicated / workload profile</li>
<li>Revision mode điều khiển scale và chia traffic</li>
</ul>
</li>
<li><strong>Dynamic sessions</strong><ul>
<li>Cô lập code do AI sinh ra hoặc user gửi lên</li>
<li>Chọn code interpreter có sẵn hay custom container</li>
<li>Cấu hình sức chứa, lifecycle, egress</li>
<li>Dùng session identifier để chạy code và trao đổi file</li>
<li>Xử lý: session hết hạn, giới hạn thực thi, timeout, chạy lỗi</li>
</ul>
</li>
</ul>
</section>
<section id="r2-3">
<h3>2.3 LP3 · Deploy and monitor apps on AKS<a class="anch" href="#r2-3">#</a></h3>
<ul>
<li><strong>Deploy apps to AKS</strong><ul>
<li>Viết manifest Deployment</li>
<li>Expose bằng Service</li>
<li>Deploy và kiểm tra kết quả</li>
</ul>
</li>
<li><strong>Configure apps on AKS</strong><ul>
<li>Tách cấu hình khỏi image bằng Kubernetes primitive</li>
<li>ConfigMap inject vào Pod (env / volume)</li>
<li>Secret: dùng giá trị nhạy cảm an toàn</li>
<li>PV / PVC để gắn persistent storage</li>
</ul>
</li>
<li><strong>Monitor and troubleshoot on AKS</strong><ul>
<li><strong>(mới)</strong> Các tín hiệu chính của AI workload: restart, CPU/memory, latency, lỗi</li>
<li>Dùng kubectl + công cụ Azure để xem log và metric</li>
<li>Troubleshoot pod và Service ảnh hưởng tới AI API / worker</li>
<li>Kiểm tra đường kết nối Service và ingress</li>
</ul>
</li>
</ul>
</section>
<section id="r2-4">
<h3>2.4 LP4 · Cosmos DB for NoSQL<a class="anch" href="#r2-4">#</a></h3>
<ul>
<li><strong>Build queries</strong><ul>
<li>Mô hình tài nguyên database → container → item</li>
<li>CRUD bằng SDK</li>
<li><strong>Chọn point read hay query</strong> theo yêu cầu hiệu năng và access pattern</li>
<li>SQL: filter, projection</li>
</ul>
</li>
<li><strong>Implement vector search</strong><ul>
<li>Vector policy; lưu và đọc embedding</li>
<li><code>VectorDistance</code></li>
<li>Kết hợp metadata filter + full-text (hybrid)</li>
<li>Change feed để làm mới embedding</li>
</ul>
</li>
<li><strong>Optimize query performance</strong><ul>
<li><strong>(mới)</strong> Dùng query metrics để tìm bottleneck và index còn thiếu</li>
<li>Range index + composite index cho filter/sort trong AI retrieval</li>
<li>Chọn loại vector index theo kích thước dữ liệu, độ chính xác, hiệu năng</li>
<li><strong>(mới)</strong> Thiết kế indexing policy cân bằng giữa đọc nhanh và chi phí ghi</li>
<li>Chọn consistency level để giảm RU</li>
</ul>
</li>
</ul>
</section>
<section id="r2-5">
<h3>2.5 LP5 · PostgreSQL<a class="anch" href="#r2-5">#</a></h3>
<ul>
<li><strong>Build and query</strong><ul>
<li>Kiến trúc Flexible Server</li>
<li>Kết nối bằng <strong>Entra auth + TLS</strong></li>
<li>Schema gồm table, index, constraint</li>
<li>Truy vấn hiệu quả; tích hợp Python</li>
<li>Lab: backend cho agent tool</li>
</ul>
</li>
<li><strong>Implement vector search</strong><ul>
<li>pgvector; các toán tử khoảng cách</li>
<li>Tạo và quản lý vector index</li>
<li><strong>Chiến lược cập nhật / refresh embedding</strong></li>
<li>Retrieval pattern cho RAG</li>
</ul>
</li>
<li><strong>Optimize vector search</strong><ul>
<li>Tune tham số PostgreSQL + pgvector (latency, memory)</li>
<li>Chọn loại index</li>
<li><strong>Data layout</strong> tối ưu cho vector + metadata filter</li>
<li>Scale cho tải lớn</li>
<li><strong>Connection pooling + session management</strong></li>
</ul>
</li>
</ul>
</section>
<section id="r2-6">
<h3>2.6 LP6 · Azure Managed Redis (cả LP đều cần nhớ)<a class="anch" href="#r2-6">#</a></h3>
<ul>
<li><strong>Data operations</strong><ul>
<li>Năng lực của Managed Redis và các chiến lược cache</li>
<li><strong>(mới)</strong> Chọn client library (Python <code>redis</code> / <code>redis-py</code>) và best practice: tái sử dụng connection, timeout, retry</li>
<li>Lưu / đọc, expiration, invalidation</li>
</ul>
</li>
<li><strong>Event messaging (module mới, đề có thể hỏi)</strong><ul>
<li><strong>Pub/sub</strong>: broadcast tới nhiều service cùng lúc<ul>
<li>fire-and-forget, không lưu lại; subscriber đang offline sẽ mất message</li>
</ul>
</li>
<li><strong>Streams</strong>: task queue tin cậy<ul>
<li>lệnh <code>XADD</code>, <code>XREADGROUP</code>, <code>XACK</code></li>
<li>consumer group</li>
<li>pending list + claim lại để retry / phục hồi khi consumer chết</li>
</ul>
</li>
<li>Chọn <strong>broadcast → pub/sub</strong>, <strong>chia việc có điều phối → Streams</strong></li>
<li>Viết bằng Python: pub/sub cho thông báo, Streams cho pipeline xử lý nhiều bước</li>
</ul>
</li>
<li><strong>Vector storage</strong><ul>
<li>Tạo vector index và query embedding</li>
<li>Chọn vector type, distance metric, thuật toán:<ul>
<li>FLAT: chính xác, phù hợp dữ liệu nhỏ</li>
<li>HNSW: xấp xỉ, phù hợp dữ liệu lớn</li>
</ul>
</li>
<li><strong>(mới)</strong> Chọn <strong>Hash hay JSON</strong>:<ul>
<li>Hash: vector lưu dạng bytes, gọn</li>
<li>JSON: vector là mảng số, lồng được cấu trúc, nhiều vector trong một document</li>
</ul>
</li>
</ul>
</li>
</ul>
</section>
<section id="r2-7">
<h3>2.7 LP7 · Integrate backend services<a class="anch" href="#r2-7">#</a></h3>
<ul>
<li><strong>Service Bus</strong><ul>
<li><strong>(mới)</strong> Các pattern: <strong>load leveling</strong>, <strong>competing consumers</strong>, publish-subscribe</li>
<li>Chọn queue (1 consumer) hay topic + subscription (fan-out)</li>
<li><strong>(mới)</strong> Cấu trúc message cho AI:<ul>
<li>serialize prompt và tham số model</li>
<li>payload lớn dùng <strong>claim-check</strong> (đẩy lên Blob, message chỉ chứa tham chiếu)</li>
<li>gắn <strong>correlation ID</strong> để lần theo request end-to-end</li>
</ul>
</li>
<li>Peek-lock; poison message vào DLQ; giám sát DLQ để biết inference nào lỗi</li>
</ul>
</li>
<li><strong>Event Grid</strong><ul>
<li>Thành phần: topic, event subscription, event handler</li>
<li><strong>CloudEvents</strong> cho thao tác AI; tự định nghĩa custom event type</li>
<li>Filter theo type / subject / thuộc tính trong data</li>
<li>Delivery / retry policy; dead-letter; giám sát kết quả giao event</li>
<li><strong>(mới)</strong> Publish custom event bằng <strong>SDK</strong> (<code>EventGridPublisherClient</code>) và <strong>REST API</strong> khi inference xong, model cập nhật, pipeline chuyển bước</li>
</ul>
</li>
<li><strong>Azure Functions</strong><ul>
<li><strong>(mới)</strong> So sánh <strong>Flex Consumption vs Premium</strong>: cold start, scale, <strong>instance memory</strong><ul>
<li>Flex có always-ready instance</li>
<li>Premium có pre-warmed instance</li>
</ul>
</li>
<li><strong>(mới)</strong> Dev local: <strong>Core Tools</strong> (<code>func start</code>), <strong>emulator (Azurite)</strong>, IDE</li>
<li>Trigger/binding cho AI: HTTP inference endpoint, xử lý batch qua queue</li>
<li>Secret: Key Vault reference + App Configuration</li>
<li><strong>(mới)</strong> Managed identity + <strong>function-level authorization</strong> (auth level anonymous / function / admin, key gửi qua header <code>x-functions-key</code>)</li>
<li><strong>(mới)</strong> Lab: dựng <strong>MCP server bằng Azure Functions</strong></li>
</ul>
</li>
<li><strong>Durable Functions</strong><ul>
<li>Tách orchestration deterministic khỏi activity (gọi model / dịch vụ ngoài)</li>
<li>Fan-out/fan-in cho tài liệu / media độc lập</li>
<li>Human approval: <strong>external event + durable timer</strong> (chờ duyệt có timeout)</li>
<li><strong>(mới)</strong> Retry, timeout, <strong>idempotency</strong> và <strong>compensation</strong>:<ul>
<li>bước sau lỗi thì chạy activity hoàn tác bước trước</li>
<li>không lặp lại side effect bên ngoài</li>
</ul>
</li>
</ul>
</li>
</ul>
</section>
<section id="r2-8">
<h3>2.8 LP8 · Secrets and configuration<a class="anch" href="#r2-8">#</a></h3>
<ul>
<li><strong>Key Vault</strong><ul>
<li>Khi nào dùng secret / key / certificate trong giải pháp AI</li>
<li>Lấy secret bằng SDK + managed identity</li>
<li><strong>(mới)</strong> Versioning và rotation để <strong>đổi credential không downtime</strong> (app tham chiếu không ghi version, chồng lấn 2 credential trong lúc chuyển)</li>
<li><strong>(mới)</strong> <strong>Caching</strong>:<ul>
<li>giảm số lần gọi Key Vault bằng cache có TTL</li>
<li>refresh khi gặp lỗi xác thực</li>
<li>vẫn đảm bảo secret mới</li>
</ul>
</li>
</ul>
</li>
<li><strong>App Configuration</strong><ul>
<li>Python provider library + managed identity</li>
<li>Label, feature flag (bật/tắt không redeploy)</li>
<li>Key Vault reference: lấy config và secret qua <strong>một đường duy nhất</strong></li>
<li><strong>(mới)</strong> <strong>Cái gì để ở App Config, cái gì để ở Key Vault</strong>:<ul>
<li>theo độ nhạy cảm, cấu trúc, cách truy cập</li>
<li>secret → Key Vault</li>
<li>config không nhạy cảm, theo môi trường, thay đổi động → App Config</li>
</ul>
</li>
</ul>
</li>
</ul>
</section>
<section id="r2-9">
<h3>2.9 LP9 · Observe and troubleshoot<a class="anch" href="#r2-9">#</a></h3>
<ul>
<li><strong>Instrument with OpenTelemetry</strong><ul>
<li>OTel là chuẩn trung lập vendor</li>
<li>Cài <strong>Azure Monitor OpenTelemetry Distro</strong></li>
<li>Custom span và trace qua nhiều service</li>
<li>Export sang Application Insights</li>
<li><strong>(mới)</strong> Debug luồng phân tán bằng trace: end-to-end transaction, application map, tìm span chậm</li>
</ul>
</li>
<li><strong>Analyze telemetry</strong><ul>
<li>KQL cơ bản; tìm pattern lỗi, bottleneck, xu hướng</li>
<li><strong>(mới)</strong> <strong>Azure dashboard</strong>: pin metric / kết quả query</li>
<li><strong>(mới)</strong> <strong>Workbook</strong> có <strong>parameter</strong> (time range, dropdown) để phân tích tương tác</li>
<li><strong>(mới)</strong> Alert rule cho lỗi, suy giảm hiệu năng, <strong>anomaly</strong> (dynamic threshold)</li>
</ul>
</li>
</ul>
</section>
<section id="r2-10">
<h3>2.10 Khác biệt đáng chú ý so với Phần 1<a class="anch" href="#r2-10">#</a></h3>
<ul>
<li>Redis có <strong>cả một module về messaging</strong> (pub/sub vs Streams). Cần học kỹ cách chọn giữa broadcast và task queue.</li>
<li>Functions trong khóa học tập trung <strong>Flex Consumption vs Premium</strong>, không còn nói về Consumption cũ. Có thêm phần <strong>function key / auth level</strong> và <strong>dev local</strong>.</li>
<li>Service Bus nhấn mạnh <strong>claim-check</strong> và <strong>correlation ID</strong>.</li>
<li>Durable nhấn mạnh <strong>compensation + idempotency</strong>.</li>
<li>Key Vault nhấn mạnh <strong>caching + rotation không downtime</strong>.</li>
<li>Monitoring có thêm <strong>dashboard và workbook có parameter</strong>.</li>
</ul>
</section>
<h2 class="dom">3. Câu hỏi assessment trên Microsoft Learn</h2>
<section id="r3-1">
<h3>3.1 LP1 · Container hosting<a class="anch" href="#r3-1">#</a></h3>
<ul>
<li><strong>ACR</strong><ul>
<li>Build image trong môi trường kiểm soát → <strong>ACR Tasks quick build</strong></li>
<li>Mọi node chạy đúng một bản dù tag bị push đè → tham chiếu bằng <strong>digest</strong></li>
<li>Tự rebuild khi base image có bản vá → <strong>base image update trigger</strong></li>
<li>Truy vết về commit, rollback được → <strong>tag duy nhất = Git commit SHA</strong></li>
<li>Chống xoá nhầm image → <strong>image lock</strong> (đề ghi <code>write-enabled false</code>)</li>
</ul>
</li>
<li><strong>App Service</strong><ul>
<li>App nghe cổng 8000 → đặt <strong><code>WEBSITES_PORT=8000</code></strong></li>
<li>File mất sau restart → <strong><code>WEBSITES_ENABLE_APP_SERVICE_STORAGE=true</code></strong> + ghi vào <code>/home</code></li>
<li>URL staging không được đi theo khi swap → <strong>slot setting</strong></li>
<li><code>/healthz</code> trả 200 mà health check vẫn fail → <strong>health check path cấu hình lệch</strong></li>
<li>Xem app settings đã inject vào container chưa → <strong>Kudu, trang Environment</strong></li>
</ul>
</li>
<li><strong>Sidecar</strong><ul>
<li>Model nhỏ phải start/stop/scale cùng API, gọi local nhanh → <strong>sidecar</strong></li>
<li>Chỉ API nhận request từ ngoài → API <strong><code>isMain: true</code></strong>, model server <code>false</code></li>
<li>Pull image private không lưu mật khẩu → <strong>managed identity + AcrPull</strong>, khai identity trong từng site container</li>
<li>Artifact cần bền, là nguồn dữ liệu cho app khác → <strong>Blob / Azure Files</strong> (⚠ bẫy: không dùng <code>/home</code>)</li>
<li><code>localhost:11434</code> bị connection refused → <strong>so cổng API gọi với target port của sidecar, rồi kiểm tra process có listen cổng đó</strong></li>
</ul>
</li>
</ul>
</section>
<section id="r3-2">
<h3>3.2 LP2 · Container Apps<a class="anch" href="#r3-2">#</a></h3>
<ul>
<li><strong>Deploy</strong><ul>
<li>Ranh giới chung cho mạng và log → <strong>environment</strong></li>
<li>Cấu hình review như code → <strong><code>create/update --yaml</code></strong> với file lưu trong source control</li>
<li>API key không để trong YAML → <strong>Container Apps secret + <code>secretref</code> vào env</strong></li>
<li>Xem thay đổi đã tạo phiên bản mới chưa → <strong><code>revision list</code></strong></li>
<li>Image mới không start, cần phản hồi nhanh → <strong><code>az containerapp logs show</code></strong></li>
</ul>
</li>
<li><strong>Day-two</strong><ul>
<li>Deploy image truy vết được → tham chiếu <strong>digest</strong></li>
<li>Cắt traffic khỏi revision mà không xoá → <strong><code>revision deactivate</code></strong></li>
<li>Revision fail readiness ngay sau deploy → <strong>probe sai port hoặc path</strong></li>
<li>Nghi một revision lỗi → <strong>stream log, lọc theo revision, vừa xem vừa tái hiện lỗi</strong></li>
<li>CPU throttling → <strong>tăng CPU mỗi replica</strong>, rồi xem lại scale rule</li>
</ul>
</li>
<li><strong>Scale</strong><ul>
<li>Xử lý Service Bus và scale về 0 → <strong>min 0 + rule <code>azure-servicebus</code></strong> (CPU/HTTP không đúng ở đây)</li>
<li>Có sẵn 5 replica lúc 8h, ban đêm về 0 → <strong>cron rule + HTTP rule</strong></li>
<li>Chuyển 10% traffic sang bản mới → <strong>multiple revision mode + chia trọng số</strong></li>
<li>Auth cho KEDA trong production → <strong>managed identity (<code>--scale-rule-identity</code>)</strong></li>
</ul>
</li>
<li><strong>Dynamic sessions</strong><ul>
<li>Converter cần native binary → <strong>custom container pool</strong></li>
<li>Chạy code không tin cậy, chống rò dữ liệu → <strong><code>EgressDisabled</code></strong></li>
<li>Multitenant → <strong>server sinh identifier khó đoán</strong>, lưu liên kết với user ở backend (không dùng email, không nhận id do client gửi)</li>
<li>HTTP 200 nhưng code Python ném exception → <strong>execution failure</strong></li>
<li>Timeout, không rõ đã có side effect chưa → <strong>chỉ retry khi idempotent và kiểm tra được trạng thái</strong></li>
</ul>
</li>
</ul>
</section>
<section id="r3-3">
<h3>3.3 LP3 · AKS<a class="anch" href="#r3-3">#</a></h3>
<ul>
<li><strong>Deploy</strong><ul>
<li>Ra internet bằng load balancer của Azure → <strong>LoadBalancer</strong></li>
<li>Requests vượt sức chứa mọi node → <strong>Pod ở trạng thái Pending</strong></li>
<li>Traffic không tới pod → <strong>label của pod phải khớp selector của Service</strong></li>
<li>Xem log của lần chạy đã crash → <strong><code>kubectl logs --previous</code></strong></li>
<li><code>replicas</code> = <strong>số bản sao pod chạy đồng thời</strong></li>
</ul>
</li>
<li><strong>Configure</strong><ul>
<li>Connection string có mật khẩu → <strong>Secret</strong></li>
<li>Cấu hình không nhạy cảm, đổi không cần build lại image → <strong>ConfigMap + <code>configMapKeyRef</code></strong></li>
<li>Apply PVC → <strong>StorageClass tự cấp phát disk</strong></li>
<li>Secret thành env var → <strong><code>valueFrom.secretKeyRef</code></strong></li>
<li>App đọc file JSON lúc khởi động → <strong>mount ConfigMap thành file qua volume</strong></li>
</ul>
</li>
<li><strong>Monitor</strong><ul>
<li>Xem lỗi khi đang tái hiện → <strong><code>kubectl logs -f</code></strong></li>
<li>CrashLoopBackOff → trước tiên <strong><code>kubectl describe pod</code></strong> (xem events, trạng thái container)</li>
<li>Service không có endpoint → <strong><code>kubectl describe service</code></strong> để so selector</li>
<li>Gọi thử từ máy dev trước khi expose → <strong><code>kubectl port-forward service/...</code></strong></li>
<li>CPU chạm limit, latency tăng → <strong>chỉnh requests/limits hoặc scale out</strong></li>
</ul>
</li>
</ul>
</section>
<section id="r3-4">
<h3>3.4 LP4 · Cosmos DB<a class="anch" href="#r3-4">#</a></h3>
<ul>
<li><strong>Truy vấn cơ bản</strong><ul>
<li>Hay lấy toàn bộ log theo user → partition key <strong><code>userId</code></strong></li>
<li>Ghi đè dù item đã tồn tại hay chưa → <strong><code>upsert_item()</code></strong></li>
<li>Biết id + partition key → <strong><code>read_item()</code></strong> (point read)</li>
<li>Parameterized query → <strong>chống injection + cache được query plan</strong></li>
<li>Query theo khoảng giá tốn RU → <strong>thêm partition key vào WHERE</strong> để chỉ đọc một partition</li>
</ul>
</li>
<li><strong>Vector search</strong><ul>
<li>ada-002 → <strong>float32, 1536 chiều, cosine</strong></li>
<li>Vector search chậm, tốn RU → <strong>giảm <code>TOP N</code> xuống 10–20</strong></li>
<li>Lọc theo category → <strong>filter trong WHERE + truyền <code>partition_key</code></strong></li>
<li>Hybrid search → <strong><code>ORDER BY RANK RRF(VectorDistance, FullTextScore)</code></strong></li>
<li>Làm mới embedding không polling → <strong>Functions Cosmos DB trigger</strong> (change feed)</li>
</ul>
</li>
<li><strong>Tối ưu</strong><ul>
<li>Lọc <code>documentType</code> rồi sort <code>uploadDate desc</code> → <strong>composite index: cột lọc trước, cột sort sau</strong></li>
<li>500K vector mỗi partition, chấp nhận xấp xỉ → <strong>diskANN</strong></li>
<li>Giảm chi phí cho mảng embedding → <strong>exclude path embedding + thêm vector index</strong></li>
<li>User phải thấy ngay bản mình vừa upload → <strong>Session consistency + truyền session token</strong></li>
<li>Index utilization thấp, tỉ lệ retrieved/output cao → <strong>query đang scan, cần thêm range/composite index</strong></li>
</ul>
</li>
</ul>
</section>
<section id="r3-5">
<h3>3.5 LP5 · PostgreSQL<a class="anch" href="#r3-5">#</a></h3>
<ul>
<li><strong>Cơ bản</strong><ul>
<li>Metadata cấu trúc thay đổi → <strong>JSONB</strong></li>
<li>Lấy id vừa sinh → <strong><code>RETURNING</code></strong></li>
<li>Upsert → <strong><code>ON CONFLICT DO UPDATE</code></strong> (bẫy: <code>ON DUPLICATE KEY</code> là cú pháp MySQL, <code>OUTPUT</code> là SQL Server)</li>
<li>Nhiều connection ngắn → <strong>ConnectionPool</strong></li>
<li>Giới hạn tập giá trị của status → <strong><code>CHECK (status IN (...))</code></strong></li>
</ul>
</li>
<li><strong>Vector</strong><ul>
<li>Embedding đã chuẩn hoá, đo độ giống ngữ nghĩa → <strong><code>&lt;=&gt;</code> cosine</strong></li>
<li>5 triệu vector, chỉ cập nhật theo lô thỉnh thoảng → <strong>IVFFlat</strong> (⚠ HNSW cũng hợp lý; gợi ý "batch update" nghiêng về IVFFlat)</li>
<li>Tham số HNSW <code>m</code> → <strong>số kết nối tối đa của mỗi node trong đồ thị</strong></li>
<li>Re-embed 50K dòng → <strong>chia transaction 1.000–5.000 dòng</strong></li>
<li>Cân điểm vector và full-text → <strong>RRF</strong></li>
</ul>
</li>
<li><strong>Tối ưu</strong><ul>
<li>Cache hit chỉ 85% → <strong>tăng <code>shared_buffers</code></strong></li>
<li>5 triệu vector, refresh hằng ngày, build dưới 30 phút → <strong>IVFFlat, <code>lists = sqrt(rows)</code></strong></li>
<li>Filter category bị seq scan → <strong>kiểm tra B-tree index trên <code>category_id</code></strong></li>
<li>500 query/s → <strong>PgBouncer transaction mode</strong></li>
<li>CPU 75%, cần dưới 50 ms → <strong>Memory Optimized nhiều vCore hơn</strong> (⚠ câu này dễ nhầm với read replica hoặc cache)</li>
</ul>
</li>
</ul>
</section>
<section id="r3-6">
<h3>3.6 LP6 · Managed Redis<a class="anch" href="#r3-6">#</a></h3>
<ul>
<li><strong>Data operations</strong><ul>
<li>Cổng TLS → <strong>10000</strong> (không phải 6379/6380)</li>
<li>Lệnh tránh dùng trong production → <strong><code>KEYS</code></strong>, dùng <code>SCAN</code> thay thế</li>
<li>Set kèm hết hạn trong một thao tác atomic → <strong><code>setex()</code></strong></li>
<li><code>TTL = -1</code> → <strong>key tồn tại nhưng không có hạn</strong> (-2 là key không tồn tại)</li>
</ul>
</li>
<li><strong>Messaging</strong><ul>
<li>Pub/sub chỉ giao cho subscriber <strong>đang kết nối</strong>; Streams <strong>lưu lại</strong> cho consumer group</li>
<li>Pipeline cần retry → <strong>Streams + consumer group</strong></li>
<li>Thêm message vào stream → <strong><code>XADD</code></strong></li>
<li>Broadcast trạng thái realtime → <strong>pub/sub</strong></li>
<li>Không để 2 worker xử lý cùng một document → <strong><code>XREADGROUP</code></strong></li>
</ul>
</li>
<li><strong>Vector</strong><ul>
<li>Text embedding → <strong>COSINE</strong></li>
<li>Hơn 10K vector, chấp nhận độ chính xác 95–99% → <strong>HNSW</strong></li>
<li>Kiểu dữ liệu → <strong>FLOAT32</strong></li>
<li>Dùng Hash khi → <strong>dữ liệu phẳng, cần tối ưu bộ nhớ</strong> (JSON khi có cấu trúc lồng hoặc nhiều vector)</li>
<li><code>EF_RUNTIME</code> → <strong>đánh đổi giữa tốc độ và độ chính xác</strong> (số node được duyệt)</li>
</ul>
</li>
</ul>
</section>
<section id="r3-7">
<h3>3.7 LP7 · Backend services<a class="anch" href="#r3-7">#</a></h3>
<ul>
<li><strong>Service Bus</strong><ul>
<li>3 service cùng phản ứng với một kết quả → <strong>topic + 3 subscription</strong></li>
<li>Không được mất request khi worker crash → <strong>peek-lock</strong></li>
<li>Lỗi 10 lần → vào <strong>DLQ với lý do <code>MaxDeliveryCountExceeded</code></strong></li>
<li>File 500 MB → <strong>claim-check</strong> (lưu Blob, message chỉ chứa URI)</li>
<li><code>correlation_id</code> → <strong>theo dõi request end-to-end</strong> (bẫy: không dùng cho duplicate detection)</li>
</ul>
</li>
<li><strong>Event Grid</strong><ul>
<li>Service tự phát event → <strong>custom topic</strong></li>
<li>Filter theo prefix/suffix → thuộc tính <strong><code>subject</code></strong></li>
<li>Handler cold start hơn 30s → <strong>dựa vào retry tự động</strong></li>
<li>Lọc theo <code>data.status</code> → <strong>advanced filter <code>StringIn</code></strong></li>
<li>Publish từ Function trong production → <strong>Entra ID + managed identity</strong> (không dùng <code>aeg-sas-key</code>)</li>
</ul>
</li>
<li><strong>Functions</strong><ul>
<li>Giảm cold start mà idle vẫn rẻ → <strong>Flex Consumption + always-ready</strong></li>
<li>Trigger không chạy khi chạy local → <strong>thiếu <code>AzureWebJobsStorage</code></strong> (Azurite)</li>
<li>Mỗi instance xử lý một message → <strong><code>maxConcurrentCalls: 1</code></strong> trong <code>host.json</code> (bẫy: không phải <code>batchSize</code>)</li>
<li>Key Vault reference tự rotate → <strong>secret URI không ghi version</strong></li>
<li>Identity connection không nhận được message → thiếu role <strong>Azure Service Bus Data Receiver</strong></li>
</ul>
</li>
<li><strong>Durable</strong><ul>
<li>Gọi model trong orchestrator làm replay lệch → <strong>chuyển sang activity</strong></li>
<li>Model giới hạn tải → <strong>chia lô có giới hạn + <code>task_all()</code> cho từng lô</strong></li>
<li>Chờ duyệt tối đa 24h → <strong><code>wait_for_external_event</code> đua với durable timer bằng <code>task_any()</code></strong>, xong thì huỷ timer</li>
<li>Activity chạy lại ghi trùng blob → <strong>tên blob = operation ID cố định, không overwrite</strong></li>
<li>Hết retry mà đã có side effect → <strong>compensation idempotent rồi ném lại lỗi gốc</strong></li>
</ul>
</li>
</ul>
</section>
<section id="r3-8">
<h3>3.8 LP8 · Secrets &amp; Config<a class="anch" href="#r3-8">#</a></h3>
<ul>
<li><strong>Key Vault</strong><ul>
<li>Chỉ đọc secret → <strong>Key Vault Secrets User</strong></li>
<li>Prod dùng managed identity, local dùng CLI, không đổi code → <strong><code>DefaultAzureCredential</code></strong></li>
<li><code>get_secret</code> không truyền version → trả <strong>bản enabled mới nhất</strong></li>
<li>Service hỗ trợ 2 key cùng lúc → <strong>dual-credential rotation</strong></li>
<li>500 req/s → <strong>cache trong bộ nhớ, TTL 1 giờ</strong></li>
</ul>
</li>
<li><strong>App Configuration</strong><ul>
<li>Selector null label + Production label → <strong>Production thắng</strong> (nạp sau ghi đè)</li>
<li>Key Vault reference lưu gì → <strong>URI tới secret + content type riêng</strong> (không lưu giá trị secret)</li>
<li>Tên deployment <code>gpt-4o</code> → <strong>key-value thường</strong> (không nhạy cảm)</li>
<li>Đọc được Key Vault reference cần 2 role → <strong>App Configuration Data Reader + Key Vault Secrets User</strong></li>
<li>Refresh bằng sentinel → <strong>app phải gọi <code>refresh()</code> và sentinel phải đã đổi</strong></li>
</ul>
</li>
</ul>
</section>
<section id="r3-9">
<h3>3.9 LP9 · Observability<a class="anch" href="#r3-9">#</a></h3>
<ul>
<li><strong>OpenTelemetry</strong><ul>
<li>Propagation → <strong>W3C TraceContext (<code>traceparent</code>)</strong></li>
<li>Connection string trong production → <strong>biến môi trường <code>APPLICATIONINSIGHTS_CONNECTION_STRING</code></strong></li>
<li>Exception thoát khỏi khối <code>with</code> → <strong>span tự ghi exception + status error</strong></li>
<li><code>SpanKind.CLIENT</code> → bảng <strong>dependencies</strong></li>
<li>Trace ID tương ứng → <strong><code>operation_Id</code></strong></li>
</ul>
</li>
<li><strong>KQL &amp; alert</strong><ul>
<li>Đếm khi có sampling → <strong><code>sum(itemCount)</code></strong>, không dùng <code>count()</code></li>
<li>Nối các telemetry của một request qua 4 service → <strong><code>operation_Id</code></strong></li>
<li>Điều tra tương tác, lọc động → <strong>Workbooks</strong> (dashboard chỉ để theo dõi)</li>
<li>Alert ngưỡng "&gt; 0 dòng" → <strong>bắn khi bất kỳ service nào vượt 10 lỗi</strong></li>
<li>5% request chậm nhất → <strong><code>percentile(duration, 95)</code></strong></li>
</ul>
</li>
</ul>
</section>
<section id="r3-10">
<h3>3.10 Quy luật đề của Microsoft Learn<a class="anch" href="#r3-10">#</a></h3>
<ul>
<li>Đáp án đúng gần như luôn là <strong>cách "chuẩn production"</strong>: managed identity, digest, YAML trong source control, biến môi trường cho connection string.</li>
<li>Phương án sai thường là <strong>làm thô</strong> (restart, xoá, scale to lên) hoặc <strong>dùng nhầm công cụ</strong> (<code>batchSize</code> thay cho <code>maxConcurrentCalls</code>, <code>/home</code> thay cho Blob).</li>
<li>Nhiều câu hỏi <strong>bước đầu tiên khi chẩn đoán</strong>: chọn lệnh xem trực tiếp chỗ đang hỏng (<code>logs show</code>, <code>describe pod</code>, <code>describe service</code>, so cổng), không chọn cách sửa mò.</li>
</ul>
</section>
<h2 class="dom">4. Azure Managed Redis — cần nhớ</h2>
<section id="r4-1">
<h3>4.1 Tổng quan và tier<a class="anch" href="#r4-1">#</a></h3>
<ul>
<li>Azure Managed Redis chạy trên Redis Enterprise và thay cho Azure Cache for Redis.<ul>
<li>Azure Cache for Redis tier Enterprise/Enterprise Flash ngừng 31/3/2027.</li>
<li>Tier Basic/Standard/Premium ngừng 30/9/2028.</li>
</ul>
</li>
<li>Có 4 tier, khác nhau ở tỉ lệ memory:vCPU:<ul>
<li><strong>Memory Optimized 8:1</strong>: cần nhiều RAM, throughput vừa phải; rẻ, hợp dev/test.</li>
<li><strong>Balanced 4:1</strong>: mặc định cho workload thường.</li>
<li><strong>Compute Optimized 2:1</strong>: throughput cao nhất, hợp search/vector nặng.</li>
<li><strong>Flash Optimized (RAM + NVMe)</strong>: dataset rất lớn, nhiều key ít truy cập; đang preview.</li>
</ul>
</li>
<li>⚠ <strong>Flash Optimized không có RediSearch, RedisBloom, RedisTimeSeries.</strong> Đề cần vector search thì loại Flash ngay.</li>
<li>Module (RediSearch, RedisJSON, RedisBloom, RedisTimeSeries) <strong>chỉ bật được lúc tạo cache</strong>. Module và clustering policy đều bị khóa sau khi tạo.</li>
</ul>
</section>
<section id="r4-2">
<h3>4.2 Kết nối, bảo mật, cấu hình<a class="anch" href="#r4-2">#</a></h3>
<ul>
<li><strong>Cổng 10000</strong> cho Managed Redis; 6380 là của Azure Cache for Redis cũ (câu assessment).</li>
<li>TLS bật mặc định (1.2/1.3). Kết nối bằng hostname, không dùng IP vì IP có thể đổi.</li>
<li>Entra ID: cache mới đã bật Entra và tắt access key sẵn.<ul>
<li>Gán managed identity bằng access policy assignment.</li>
<li>Python dùng <code>redis-entraid</code>, scope <code>https://redis.azure.com/.default</code>.</li>
</ul>
</li>
<li>Private endpoint dùng group-id <code>redisEnterprise</code>; CLI là <code>az redisenterprise</code>.</li>
<li><strong>RediSearch bắt buộc</strong> clustering policy <strong>Enterprise</strong> và eviction <strong>NoEviction</strong>. CLI mặc định là VolatileLRU nên phải đổi.</li>
<li>Đặt cache và app cùng region. Production bật HA, bảo vệ dữ liệu bằng persistence hoặc import/export.</li>
<li>Scale khi Used Memory %, CPU, Connected Clients hoặc Network <strong>liên tục vượt 75%</strong>.</li>
</ul>
</section>
<section id="r4-3">
<h3>4.3 Clustering policy<a class="anch" href="#r4-3">#</a></h3>
<ul>
<li><strong>Enterprise</strong>: chạy với mọi client, dùng <code>redis.Redis</code>. Lệnh nhiều key (MSET/MGET/DEL…) chạy được; bị chặn các lệnh <code>CLUSTER *</code>.</li>
<li><strong>OSS</strong>: cần client cluster-aware (Python dùng <code>redis.cluster.RedisCluster</code>), scale cao nhất.<ul>
<li>Lệnh nhiều key mà các key khác hash slot thì lỗi <strong>CROSSSLOT</strong>. Sửa bằng hash tag <code>{...}</code> hoặc chuyển sang Enterprise.</li>
</ul>
</li>
<li><strong>Active-Active (geo-replication)</strong>: lệnh nhiều key chỉ chạy MGET/EXISTS/TOUCH; <strong>FLUSHALL/FLUSHDB bị chặn</strong>.</li>
</ul>
</section>
<section id="r4-4">
<h3>4.4 Kiểu dữ liệu và lệnh<a class="anch" href="#r4-4">#</a></h3>
<ul>
<li>String (<code>SET/GET/MSET/MGET</code>), Hash (<code>HSET/HGETALL</code>, cho object), List (<code>LPUSH/RPOP</code>, cho queue hoặc feed gần đây), counter (<code>INCR</code>, nguyên tử, dùng cho rate limit).</li>
<li><strong><code>setex()</code></strong> đặt key kèm TTL trong một lệnh nguyên tử, nhưng <strong>chỉ dùng cho string</strong>. Hash/List phải ghi trước rồi gọi <code>EXPIRE</code> (câu assessment).</li>
<li>Họ lệnh TTL:<ul>
<li><code>EXPIRE</code>/<code>PEXPIRE</code> (giây/ms), <code>EXPIREAT</code> (theo timestamp), <code>PERSIST</code> (gỡ TTL).</li>
<li><code>TTL</code> trả <strong>-1 = có key nhưng không có TTL</strong>, <strong>-2 = key không tồn tại</strong> (câu assessment).</li>
</ul>
</li>
<li><code>SET k v NX EX 30</code> dùng làm lock. <code>UNLINK</code> xóa bất đồng bộ, không block. <code>INFO stats</code> cho hit/miss.</li>
<li><strong>Không dùng <code>KEYS</code> ở production, dùng <code>SCAN</code></strong> (câu assessment). Xóa theo pattern bằng SCAN + DELETE/UNLINK theo lô.</li>
<li><code>decode_responses=True</code> dùng cho text. Dữ liệu nhị phân (ảnh, vector bytes) thì phải để False.</li>
<li>Pipeline gom nhiều lệnh vào một round trip, nạp hàng loạt nhanh hơn 10–100 lần. redis-py đã có connection pool sẵn.</li>
</ul>
</section>
<section id="r4-5">
<h3>4.5 Caching pattern<a class="anch" href="#r4-5">#</a></h3>
<ul>
<li><strong>Cache-aside</strong> là mặc định của đề: miss thì đọc DB rồi ghi cache kèm TTL.</li>
<li>Write-through: ghi cache cùng lúc ghi DB.</li>
<li>Write-behind: ghi cache trước, DB sau; nhanh nhất nhưng có rủi ro mất dữ liệu.</li>
<li>
<p>TTL gợi ý theo tốc độ đổi của dữ liệu:</p>
<table>
<thead>
<tr>
<th>Dữ liệu</th>
<th>TTL</th>
</tr>
</thead>
<tbody>
<tr>
<td>Đổi thường xuyên</td>
<td>1–5 phút</td>
</tr>
<tr>
<td>Đổi vừa phải</td>
<td>15–60 phút</td>
</tr>
<tr>
<td>Khá ổn định</td>
<td>1–24 giờ</td>
</tr>
<tr>
<td>Tĩnh</td>
<td>≥ 24 giờ</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>3 cách invalidation:</p>
<ul>
<li>TTL</li>
<li>Xóa thủ công khi ghi DB</li>
<li>Theo pattern (SCAN)</li>
</ul>
<p>Ngoài ra có thể dùng sự kiện: change feed hoặc Event Grid → Function → DEL.
- <strong>Cache stampede</strong> (nhiều request cùng miss một key vừa hết hạn): thêm jitter vào TTL, hoặc lock bằng <code>SET NX</code> để chỉ một request tải lại.
- Eviction:
- <code>allkeys-lru</code> cho cache thuần.
- <code>volatile-lru</code> khi có key phải sống mãi.
- <code>noeviction</code> thì lệnh ghi báo lỗi OOM khi đầy.
- 3 use case chuẩn: data cache, content cache (header/menu), session store.
- Ứng dụng AI: <strong>semantic cache</strong> (cache câu trả lời LLM theo độ giống nghĩa), chat history, rate limit.</p>
</li>
</ul>
</section>
<section id="r4-6">
<h3>4.6 Pub/sub và Streams<a class="anch" href="#r4-6">#</a></h3>
<ul>
<li><strong>Pub/sub</strong>:<ul>
<li>At-most-once, không lưu message, không có backpressure. Subscriber đang offline là mất message.</li>
<li>Mọi subscriber đều nhận bản sao, nên hợp cho broadcast: invalidate cache cục bộ, status realtime, tín hiệu huỷ (câu assessment).</li>
<li><code>PSUBSCRIBE ai:*</code> nhận message có type <strong><code>pmessage</code></strong> (subscribe thường là <code>message</code>).</li>
</ul>
</li>
<li><strong>Streams</strong>:<ul>
<li>Append-only log, lưu message. <strong><code>XADD</code></strong> để thêm (câu assessment).</li>
<li><strong>Consumer group + <code>XREADGROUP</code></strong>: mỗi message chỉ giao cho một worker, có retry. Đây là đáp án cho pipeline cần tin cậy (câu assessment).</li>
<li><code>"&gt;"</code> lấy message mới; <code>"0"</code> lấy message đang treo của chính mình.</li>
<li>Không gọi <code>XACK</code> thì message nằm lại trong PEL; đây là cơ chế an toàn, không phải lỗi.</li>
<li>Worker chết: dùng <code>XPENDING</code> để xem, rồi <code>XCLAIM</code>/<code>XAUTOCLAIM</code> (khóa học lấy ngưỡng idle 5 phút).</li>
<li>Consumer name phải ổn định qua restart (ví dụ hostname + pid).</li>
<li>Tạo group bị lỗi <code>BUSYGROUP</code> nghĩa là group đã có, bỏ qua được (tạo idempotent).</li>
<li>Stream không tự dọn: dùng <code>maxlen=…, approximate=True</code> hoặc <code>XTRIM</code>.</li>
<li><code>XINFO STREAM/GROUPS</code> để xem length, pending, consumers.</li>
</ul>
</li>
<li><strong>Bẫy</strong>: 3 worker cùng subscribe pub/sub thì mỗi việc chạy 3 lần, nên chuyển sang Streams. Ngược lại, mọi instance cùng phải nhận thì dùng pub/sub, còn consumer group chỉ giao cho một instance.</li>
<li>So với Service Bus: Streams hợp trong nội bộ một hệ thống. Cần DLQ, scheduled message, session, duplicate detection thì dùng Service Bus.</li>
<li>Mẫu kết hợp: <code>XADD</code> để chia việc cho worker, đồng thời <code>PUBLISH</code> sự kiện cho WebSocket/monitoring.</li>
</ul>
</section>
<section id="r4-7">
<h3>4.7 Vector search (RediSearch)<a class="anch" href="#r4-7">#</a></h3>
<ul>
<li>Khai index bằng <code>FT.CREATE ... ON HASH|JSON PREFIX 1 doc: SCHEMA ... VECTOR HNSW|FLAT TYPE FLOAT32 DIM 1536 DISTANCE_METRIC COSINE</code>. Key có prefix khớp được index tự động khi ghi.</li>
<li>Truy vấn: <code>FT.SEARCH idx "(@category:{faq})=&gt;[KNN 5 @embedding $vec AS score]" PARAMS ... DIALECT 2</code>.<ul>
<li><strong>Bắt buộc <code>DIALECT 2</code></strong>.</li>
<li>Vector truyền dạng <strong>bytes FLOAT32</strong>.</li>
<li>Phần đứng trước <code>=&gt;</code> là pre-filter.</li>
</ul>
</li>
<li>Muốn lấy mọi kết quả đủ gần thay vì top-k cố định: dùng <strong><code>VECTOR_RANGE 0.2 $vec</code></strong>, không dùng KNN.</li>
<li><strong>FLAT</strong> chính xác 100%, cho tập dưới ~10.000 vector. <strong>HNSW</strong> cho tập lớn hơn, độ chính xác 95–99%, dưới 10 ms (câu assessment).</li>
<li>Tham số HNSW:<ul>
<li><code>M</code> và <code>EF_CONSTRUCTION</code> dùng lúc build index.</li>
<li><strong><code>EF_RUNTIME</code></strong> dùng lúc query: đánh đổi tốc độ/độ chính xác bằng số node được duyệt (câu assessment). Mặc định ~10; nên bắt đầu từ 50, nâng lên 100–200 khi cần recall cao.</li>
</ul>
</li>
<li><strong>FLOAT32</strong> là chuẩn (câu assessment). FLOAT64 tốn gấp đôi bộ nhớ mà không chính xác hơn với embedding AI.</li>
<li>Metric:<ul>
<li><strong>COSINE</strong> cho text embedding (câu assessment).</li>
<li>L2 cho ảnh/dữ liệu không gian.</li>
<li>IP chỉ khi vector đã chuẩn hoá.</li>
</ul>
</li>
<li><code>DIM</code> lệch số chiều của model thì bị lỗi khi tạo index/ingest, hoặc query bị từ chối.</li>
<li><strong>Hash hay JSON</strong>:<ul>
<li><strong>Hash</strong> khi dữ liệu phẳng, cần tiết kiệm bộ nhớ và nhanh (câu assessment). Vector lưu bằng <code>tobytes()</code>.</li>
<li><strong>JSON</strong> khi dữ liệu lồng nhau hoặc nhiều vector mỗi document. Vector lưu bằng <code>tolist()</code>, index dùng <code>$.embedding</code> + <code>IndexType.JSON</code>.</li>
<li>Đổi qua lại giữa hai loại phải ingest lại và tạo lại index.</li>
<li><strong>Bẫy</strong>: ghi <code>tolist()</code> vào Hash thì KNN không trả gì.</li>
</ul>
</li>
<li>Vai trò trong kiến trúc: Redis là tầng nóng hoặc semantic cache vì toàn bộ index nằm trong RAM (nhanh nhưng đắt). Kho tri thức chính vẫn là Cosmos/pgvector.</li>
</ul>
</section>
<p class="src"><b>Nguồn:</b> tài liệu AI-200 của repo (mục 3.1–3.10 phần Data) và 3 module Redis của khóa AI-200T00 trên Microsoft Learn.</p>
`,u=i({__name:"Ai200ReviewPage",setup(r){return(c,s)=>(o(),e(n,{certId:"ai200",html:t(l),title:"AI-200 · Ôn nhanh",subtitle:"Mục cần ôn theo 4 domain · bổ sung theo khóa AI-200T00 · 27 bài assessment trên Learn · Redis bản đầy đủ",practiceRoute:"/ai-200/practice",practiceLabel:"Luyện thi AI-200",extraLinks:[{to:"/ai-200/documents",label:"Tài liệu chính"},{to:"/ai-200/services",label:"Dịch vụ Azure"}]},null,8,["html"]))}});export{u as default};
