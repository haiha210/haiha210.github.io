import{_ as n}from"./NotesPage.vue_vue_type_script_setup_true_lang-C5R_2P5G.js";import{d as t,f as e,e as i,o as c}from"./index-td3-r1Ta.js";import"./ThemeToggle.vue_vue_type_script_setup_true_lang-CNPQBut7.js";import"./useStudyClock-CWmy3no-.js";const h=`<h2 class="dom">0. Trang này là gì và bù cái gì</h2>

<section id="x0">
<h3>0.1 Vì sao có trang này<a class="anch" href="#x0">#</a></h3>
<p>Study guide AI-200 có mục <b>"Find documentation"</b> trỏ tới 16 mảng tài liệu Azure, và ghi rõ: <i>"Related topics may be covered in the exam."</i> Đối chiếu 16 mảng đó với <a href="/ai-200/documents">tài liệu chính của repo</a> thì bảy mảng gần như trống:</p>
<pre><code>Mảng study guide trỏ tới        Số lần nhắc trong tài liệu chính
─────────────────────────       ────────────────────────────────
Container Instances (ACI)        0     ← trống hẳn
API Apps                         0     ← trống hẳn
API Management                   1
Microsoft Entra ID               5
Blob Storage                     6
Queue Storage                    6
Event Hubs                      11
Azure Functions                 13     ← CÓ trong skills-measured!</code></pre>
<p>Trang này viết lại toàn bộ 16 mảng đó, <b>xếp theo đúng 4 domain và trọng số của đề</b>, mỗi mục soạn từ tài liệu Azure chính thức đọc ngày 26/08/2026. Riêng <b>Azure Functions</b> đáng chú ý nhất: nó có hẳn một mục trong skills-measured (<i>"Develop and implement Azure Functions"</i>) mà tài liệu chính chỉ lướt qua — xem <a href="#x2">3.5</a>.</p>
<p>Nhóm 5 ở cuối là <b>các dịch vụ AI</b>, <b>không có trong đề</b>, để riêng cho lúc làm việc thật.</p>
<div class="warn"><b>"API Apps"</b> trong danh sách của Microsoft là tên cũ — nó chính là App Service dùng để host API. Không có dịch vụ riêng nào tên như vậy nữa, nên đừng đi tìm.</div>
<p class="src"><b>Nguồn:</b> <a href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-200" target="_blank" rel="noopener">Study guide AI-200</a> (bản 15/04/2026) và Azure docs, đọc ngày 26/08/2026.</p>
</section>

<section id="x0b">
<h3>0.2 Bản đồ tài liệu chính thức — 16 link study guide trỏ tới<a class="anch" href="#x0b">#</a></h3>
<p>Đây là toàn bộ mục <b>"Find documentation"</b> của study guide AI-200, sắp lại theo domain và có đánh dấu mảng nào thật sự nằm trong skills-measured.</p>
<table>
<thead><tr><th>Mảng</th><th>Tài liệu chính thức</th><th>Trong skills-measured?</th><th>Đọc phần nào</th></tr></thead>
<tbody>
<tr><td colspan="4"><b>Domain 1 — Container (20–25%)</b></td></tr>
<tr><td>Container Registry</td><td><a href="https://learn.microsoft.com/azure/container-registry/" target="_blank" rel="noopener">/azure/container-registry</a></td><td>✅ có</td><td>ACR Tasks, digest vs tag, SKU, geo-replication</td></tr>
<tr><td>Container Instances</td><td><a href="https://learn.microsoft.com/azure/container-instances/" target="_blank" rel="noopener">/azure/container-instances</a></td><td>❌ không</td><td>container group, restart policy, init container → <a href="#x1">1.2</a></td></tr>
<tr><td>App Service</td><td><a href="https://learn.microsoft.com/azure/app-service/" target="_blank" rel="noopener">/azure/app-service</a></td><td>✅ có</td><td>deploy container, app settings, secret</td></tr>
<tr><td>API Apps</td><td><i>chính là App Service</i></td><td>❌ tên cũ</td><td>không có dịch vụ riêng, đừng đi tìm</td></tr>
<tr><td colspan="4"><b>Domain 2 — Data &amp; Vector (25–30%)</b></td></tr>
<tr><td>Azure Cosmos DB</td><td><a href="https://learn.microsoft.com/azure/cosmos-db/" target="_blank" rel="noopener">/azure/cosmos-db</a></td><td>✅ có</td><td>indexing policy, consistency level, RU, vector search, change feed</td></tr>
<tr><td>Azure Cache for Redis</td><td><a href="https://learn.microsoft.com/azure/azure-cache-for-redis/" target="_blank" rel="noopener">/azure/azure-cache-for-redis</a></td><td>✅ có</td><td>caching, TTL, invalidation, vector index</td></tr>
<tr><td>Blob Storage</td><td><a href="https://learn.microsoft.com/azure/storage/blobs/" target="_blank" rel="noopener">/azure/storage/blobs</a></td><td>❌ không</td><td>tier, SAS, lifecycle → <a href="#x3">2.7</a></td></tr>
<tr><td colspan="4"><b>Domain 3 — Kết nối &amp; tiêu thụ dịch vụ (20–25%)</b></td></tr>
<tr><td>Service Bus</td><td><a href="https://learn.microsoft.com/azure/service-bus-messaging/" target="_blank" rel="noopener">/azure/service-bus-messaging</a></td><td>✅ có</td><td>DLQ, topic/subscription, session</td></tr>
<tr><td>Event Grid</td><td><a href="https://learn.microsoft.com/azure/event-grid/" target="_blank" rel="noopener">/azure/event-grid</a></td><td>✅ có</td><td>filter, custom event, retry</td></tr>
<tr><td>Azure Functions</td><td><a href="https://learn.microsoft.com/azure/azure-functions/" target="_blank" rel="noopener">/azure/azure-functions</a></td><td>✅ có</td><td>trigger/binding, <b>hosting plan</b> → <a href="#x2">3.5</a></td></tr>
<tr><td>Event Hubs</td><td><a href="https://learn.microsoft.com/azure/event-hubs/" target="_blank" rel="noopener">/azure/event-hubs</a></td><td>❌ không</td><td>partition, consumer group, checkpoint → <a href="#x5">3.3</a></td></tr>
<tr><td>Queue Storage</td><td><a href="https://learn.microsoft.com/azure/storage/queues/" target="_blank" rel="noopener">/azure/storage/queues</a></td><td>❌ không</td><td>so với Service Bus → <a href="#x4">3.4</a></td></tr>
<tr><td>API Management</td><td><a href="https://learn.microsoft.com/azure/api-management/" target="_blank" rel="noopener">/azure/api-management</a></td><td>❌ không</td><td>tier v1/v2, policy 4 giai đoạn → <a href="#x6">3.6</a></td></tr>
<tr><td colspan="4"><b>Domain 4 — Bảo mật, giám sát (20–25%)</b></td></tr>
<tr><td>Key Vault</td><td><a href="https://learn.microsoft.com/azure/key-vault/" target="_blank" rel="noopener">/azure/key-vault</a></td><td>✅ có</td><td>rotation, retrieval, RBAC vs access policy</td></tr>
<tr><td>Microsoft Entra ID</td><td><a href="https://learn.microsoft.com/azure/active-directory/" target="_blank" rel="noopener">/azure/active-directory</a></td><td>❌ không</td><td>managed identity, DefaultAzureCredential → <a href="#x7">4.3</a></td></tr>
<tr><td>Azure documentation</td><td><a href="https://learn.microsoft.com/azure/" target="_blank" rel="noopener">/azure</a></td><td>—</td><td>trang gốc</td></tr>
</tbody></table>
<div class="warn"><b>Hai chỗ hụt của chính danh sách này, biết để khỏi hớ:</b>
<ul>
<li><b>Không có link Azure Database for PostgreSQL</b>, dù pgvector chiếm gần một phần ba domain 2 và có tới sáu gạch đầu dòng riêng. Tự đọc <a href="https://learn.microsoft.com/azure/postgresql/" target="_blank" rel="noopener">/azure/postgresql</a> và phần <a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener">pgvector</a>.</li>
<li><b>Không có link Container Apps hay AKS</b>, dù cả hai đều có gạch đầu dòng riêng ở domain 1. Đọc <a href="https://learn.microsoft.com/azure/container-apps/" target="_blank" rel="noopener">/azure/container-apps</a> và <a href="https://learn.microsoft.com/azure/aks/" target="_blank" rel="noopener">/azure/aks</a>.</li>
</ul>
Danh sách "Find documentation" rõ ràng là <b>kế thừa từ AZ-204</b> chưa cập nhật hết — nên đừng coi nó là danh sách đủ, mà hãy lấy <b>skills-measured</b> làm chuẩn.</div>
<p><b>Các dòng khác trong mục Study resources:</b> <a href="https://learn.microsoft.com/credentials/certifications/exams/az-204#two-ways-to-prepare" target="_blank" rel="noopener">learning path và lớp học</a> · <a href="https://learn.microsoft.com/answers/products/" target="_blank" rel="noopener">Microsoft Q&amp;A</a> · <a href="https://azure.microsoft.com/support/community/" target="_blank" rel="noopener">Azure Community Support</a> · <a href="https://learn.microsoft.com/shows/exam-readiness-zone/?terms=az-204" target="_blank" rel="noopener">Exam Readiness Zone</a> · <a href="https://learn.microsoft.com/shows/azure-friday/" target="_blank" rel="noopener">Azure Friday</a>.</p>
<div class="tip">Link Azure Friday trong study guide <b>đã chết (404)</b>, địa chỉ còn sống là <code>learn.microsoft.com/shows/azure-friday</code> — bảng trên đã sửa. Và để ý cả hai link "get trained" lẫn "Exam Readiness Zone" vẫn trỏ tới <code>az-204</code> — thêm một dấu hiệu nữa cho thấy AI-200 kế thừa trực tiếp từ AZ-204.</div>
</section>

<h2 class="dom">1. Domain 1 — Giải pháp container (20–25%)</h2>

<section id="d1a">
<h3>1.1 Azure Container Registry — tag, digest và ACR Tasks<a class="anch" href="#d1a">#</a></h3>
<pre><code>Registry → Repository → Tag / Digest
myacr.azurecr.io / ai/rag-api : 1.2.0
└─ registry ────┘ └─ repo ──┘ └tag┘

Tag     đổi được, ghi đè được
Digest  @sha256:... BẤT BIẾN, trỏ đúng một image duy nhất</code></pre>
<div class="tip">Production nên deploy <b>theo digest</b>, không theo tag. Tag <code>:latest</code> hay <code>:1.2.0</code> có thể bị đẩy đè, khiến hai lần deploy "cùng phiên bản" lại chạy hai image khác nhau — dạng lỗi cực khó truy.</div>
<p><b>ACR Tasks</b> — build image <b>trên cloud</b>, không cần Docker Engine ở máy:</p>
<pre><code>Quick task        az acr build
                  = docker build + docker push, nhưng chạy trên Azure
                  mặc định push luôn sau khi build xong

Trigger tự động   commit          ← BẬT sẵn
                  pull request    ← TẮT sẵn, phải bật tay
                  base image update
                  timer (lịch)

Multi-step task   định nghĩa bằng YAML: build → run → test → push
                  các bước phụ thuộc nhau, mỗi bước một container</code></pre>
<p><b>Base image update trigger</b> là tính năng đáng giá nhất và hay bị hỏi:</p>
<pre><code>ACR theo dõi image cha trong Dockerfile của bạn.
Base image được đẩy bản mới (kể cả từ Docker Hub)
   → ACR TỰ build lại mọi image con phụ thuộc nó
   → vá OS và framework tự động, không phải rà tay</code></pre>
<pre><code>Scope của Personal Access Token cần cho trigger source code
              GitHub                    Azure DevOps
repo công    repo:status, public_repo   Code (Read)
repo riêng   repo (toàn quyền)          Code (Read)</code></pre>
<div class="warn">ACR Tasks <b>không hỗ trợ trigger commit/PR trên GitHub Enterprise</b>. Mặc định build cho <b>Linux/AMD64</b> — muốn Windows hay ARM phải thêm <code>--platform</code> (Windows chỉ có AMD64).</div>
<div class="warn">Log của task: chạy <b>thủ công</b> thì stream ra console <b>và</b> được lưu; chạy do <b>trigger tự động</b> thì <b>chỉ được lưu</b>, xem bằng <code>az acr task logs</code>. Nhiều người tưởng trigger không chạy chỉ vì không thấy log ở đâu.</div>
<p><b>Context</b> lấy được từ: thư mục local, GitHub (nhánh / thư mục con / commit cụ thể), Azure DevOps, tarball qua HTTP, và cả <b>OCI artifact</b> trong chính registry (<code>oci://myregistry.azurecr.io/myartifact:mytag</code>).</p>
<p class="src"><b>Nguồn:</b> <a href="https://learn.microsoft.com/azure/container-registry/container-registry-tasks-overview" target="_blank" rel="noopener">ACR Tasks overview</a>.</p>
</section>

<section id="x1">
<h3>1.2 Azure Container Instances — và khi nào KHÔNG dùng nó<a class="anch" href="#x1">#</a></h3>
<p>ACI chạy container <b>không cần orchestrator</b>: đưa image, nó chạy, tính tiền theo giây. Không có cụm để dựng, không có node để vá.</p>
<pre><code>Container group  = đơn vị lên lịch của ACI
                   nhiều container cùng chạy trên một host
                   dùng chung: vòng đời, mạng (1 IP, chia cổng),
                               volume (Azure Files, emptyDir, secret)
                   giống Pod của Kubernetes</code></pre>
<ul>
<li><b>Restart policy</b> — <code>Always</code> (dịch vụ chạy dài), <code>OnFailure</code> (job phải xong), <code>Never</code> (chạy một lần rồi thôi). Job xử lý theo lô thì dùng <code>OnFailure</code>, đừng dùng <code>Always</code> nếu không nó chạy lại vô tận.</li>
<li><b>Init container</b> — chạy trước và phải kết thúc thành công thì container chính mới khởi động. Dùng để tải model, chuẩn bị dữ liệu.</li>
<li><b>Không có autoscale, không có rolling update, không có load balancer.</b> Đây là điểm quyết định.</li>
</ul>
<pre><code>Chọn compute cho container:

ACI                 chạy một lần / theo lô / bùng ngắn
                    không cần scale, không cần zero-downtime deploy
                    ví dụ: job xử lý ảnh, CI agent, sidecar tạm

Container Apps      dịch vụ HTTP hoặc event-driven cần scale
                    có revision, traffic splitting, KEDA, scale-to-zero
                    → mặc định nên chọn cái này

AKS                 cần kiểm soát Kubernetes thật: operator, CRD,
                    scheduling phức tạp, multi-tenant nặng</code></pre>
<div class="tip">Câu hỏi tình huống hay đánh vào đúng chỗ này: đề mô tả <b>"chạy xong rồi thôi"</b>, <b>"không cần scale"</b>, <b>"khởi động nhanh, trả tiền theo giây"</b> → ACI. Đề nhắc <b>revision</b>, <b>chia luồng theo phần trăm</b>, <b>scale theo số message trong queue</b> → Container Apps.</div>
<div class="warn">ACI <b>không</b> có scale-to-zero theo nghĩa của Container Apps: container còn tồn tại là còn tính tiền. Muốn ngừng tính tiền phải <b>xoá hoặc stop</b> container group.</div>
</section>

<section id="d1c">
<h3>1.3 App Service — cấu hình, secret và slot<a class="anch" href="#d1c">#</a></h3>
<p>Gạch đầu dòng chính thức: <i>"Deploy containers to Azure App Service, including configuring App Service to supply <b>environment variables and secrets</b>."</i> Trọng tâm là cấu hình, không phải cách đẩy code.</p>
<pre><code>App settings        → vào container thành BIẾN MÔI TRƯỜNG
                      lưu mã hoá lúc nghỉ, KHÔNG nằm trong image
                      đổi giá trị = app KHỞI ĐỘNG LẠI

Connection strings  → cũng thành biến môi trường nhưng CÓ TIỀN TỐ theo loại
                      SQLAZURE_ / MYSQL_ / SQLCONNSTR_ / CUSTOMCONNSTR_
                      → tên biến trong container KHÁC tên bạn đặt trên portal

Cài đặt riêng cho container
  WEBSITES_PORT              cổng container lắng nghe (mặc định App Service dò 80/8080)
  WEBSITES_ENABLE_APP_SERVICE_STORAGE   gắn /home lưu bền qua các lần restart
  DOCKER_REGISTRY_SERVER_URL/_USERNAME/_PASSWORD   registry riêng</code></pre>
<div class="warn"><b>Bẫy <code>WEBSITES_PORT</code>:</b> container nghe cổng khác 80/8080 mà không khai biến này thì App Service không dò ra, health check trượt, app hiện lỗi 503 dù container chạy hoàn toàn bình thường bên trong.</div>
<h4 style="margin:14px 0 6px;font-size:14px">Tham chiếu Key Vault — khuôn chuẩn để không nhúng secret</h4>
<pre><code>Giá trị của app setting:
  @Microsoft.KeyVault(SecretUri=https://myvault.vault.azure.net/secrets/db/abc123)
  @Microsoft.KeyVault(VaultName=myvault;SecretName=db)      ← dạng rút gọn

Ba điều kiện, thiếu một là hỏng:
  1. App Service có managed identity (system hoặc user-assigned)
  2. Identity đó được cấp quyền ĐỌC secret trên vault
     (RBAC: role "Key Vault Secrets User" — hoặc access policy, tuỳ chế độ vault)
  3. Vault cho phép app đi tới được (firewall / private endpoint)</code></pre>
<div class="warn">Khi tham chiếu hỏng, App Service <b>không báo lỗi rõ ràng</b> — app đọc được đúng chuỗi thô <code>"@Microsoft.KeyVault(...)"</code> rồi chết ở chỗ khác. Portal có cột trạng thái tham chiếu, kiểm ở đó trước khi đi đào log ứng dụng.</div>
<div class="tip">Bỏ phần <code>/abc123</code> (id phiên bản) ở cuối SecretUri thì app <b>tự nhận giá trị mới</b> khi secret được xoay vòng. Ghim phiên bản thì phải deploy lại mới thấy. Đây là lựa chọn có chủ đích, không phải chi tiết thừa.</div>
<h4 style="margin:14px 0 6px;font-size:14px">Deployment slot</h4>
<pre><code>Slot = một bản App Service riêng, URL riêng, CÙNG App Service plan
Swap  = đổi chỗ slot ↔ production, KHÔNG downtime
        (App Service warm up slot trước rồi mới đổi định tuyến)

Khi swap, app setting đi theo:
  mặc định           SETTING ĐI THEO sang production
  đánh dấu "deployment slot setting" (sticky)   Ở LẠI slot của nó</code></pre>
<div class="warn"><b>Đây là bẫy hay gặp nhất của slot:</b> chuỗi kết nối trỏ DB staging mà <b>không</b> đánh sticky → swap xong <b>production chạy trên DB staging</b>. Mọi cài đặt khác nhau giữa hai môi trường (chuỗi kết nối, cờ debug, endpoint bên thứ ba) đều phải sticky.</div>
<div class="tip">Slot còn dùng để <b>rollback tức thì</b>: bản mới hỏng thì swap ngược lại, vì bản cũ vẫn còn nguyên trong slot kia. Nhanh hơn deploy lại rất nhiều.</div>
</section>

<section id="d1d">
<h3>1.4 Container Apps — revision, traffic và KEDA<a class="anch" href="#d1d">#</a></h3>
<p><b>Revision</b> là ảnh chụp <b>bất biến</b> của một phiên bản app. Điểm quan trọng nhất: <b>thay đổi nào tạo revision mới, thay đổi nào không.</b></p>
<pre><code>REVISION-SCOPE → TẠO revision mới
  (mọi thứ trong properties.template)
  - image và cấu hình container
  - revision suffix
  - SCALE RULES

APPLICATION-SCOPE → KHÔNG tạo revision mới, áp cho MỌI revision
  (mọi thứ trong properties.configuration)
  - giá trị secret        ← phải RESTART revision mới nhận giá trị mới
  - revision mode
  - ingress: bật/tắt, chia luồng (traffic splitting), label
  - credential của private registry
  - cấu hình Dapr</code></pre>
<div class="warn">Hai bẫy hay gặp: <b>(1)</b> đổi secret <b>không</b> tự có hiệu lực — phải khởi động lại revision. <b>(2)</b> đổi <b>scale rule</b> lại <b>tạo revision mới</b>, dù nghe như một thay đổi cấu hình.</div>
<pre><code>Giữ tối đa 100 revision không hoạt động; kích hoạt lại lúc nào cũng được.
Chạy song song nhiều revision + chia luồng theo phần trăm
  → canary / blue-green ngay trong nền tảng, không cần gì thêm</code></pre>
<p><b>Scale</b> — Container Apps dùng <b>KEDA</b> bên dưới:</p>
<pre><code>Giới hạn      mặc định   min   max
min replica       0        0    1000
max replica      10        1    1000

Loại rule
  HTTP     theo số request đồng thời
  TCP      theo số kết nối đồng thời
  Custom   CPU, RAM, và nguồn sự kiện:
           Service Bus, Event Hubs, Kafka, Redis, …
           (toàn bộ scaler của KEDA)</code></pre>
<div class="tip"><b>Scale về 0 thì không tính tiền.</b> Muốn luôn có sẵn một bản chạy (tránh cold start) thì đặt min replica ≥ 1 — nhưng khi đó mất luôn lợi ích scale-to-zero. Đây là đánh đổi trực tiếp giữa độ trễ và chi phí.</div>
<pre><code>Trạng thái chạy đáng nhớ
  Scale to 0        0 replica, chờ rule kích hoạt
  Running (at max)  đã chạm max replica  → nghẽn ở đây thì tăng max
  Degraded          ít nhất một replica hỏng
  Failed            lỗi nghiêm trọng; exit code 137 = bị kill (thường do hết RAM)</code></pre>
</section>

<section id="d1e">
<h3>1.5 AKS — manifest và chẩn đoán<a class="anch" href="#d1e">#</a></h3>
<p>Gạch đầu dòng chính thức chỉ có hai việc: <i>deploy bằng manifest file</i> và <i>monitor/troubleshoot bằng logs, events, end-to-end connectivity</i>. Không đòi bạn thành quản trị viên Kubernetes.</p>
<pre><code>kubectl apply  -f deployment.yaml    # khai báo, idempotent
kubectl get    pods -o wide
kubectl describe pod &lt;pod&gt;           # ← EVENTS nằm ở CUỐI output
kubectl logs   &lt;pod&gt; -c &lt;container&gt;
kubectl logs   &lt;pod&gt; --previous      # log của lần chạy TRƯỚC khi crash
kubectl exec -it &lt;pod&gt; -- sh         # vào trong để thử kết nối</code></pre>
<div class="tip"><b>Quy trình chẩn đoán đúng thứ tự:</b> <code>get pods</code> xem trạng thái → <code>describe pod</code> đọc <b>Events</b> (gần như luôn có câu trả lời) → <code>logs</code> nếu container đã khởi động được → <code>logs --previous</code> nếu nó đang crash-loop.</div>
<pre><code>Trạng thái pod → nguyên nhân thường gặp
  ImagePullBackOff    sai tên/tag image, hoặc AKS KHÔNG có quyền kéo từ ACR
  CrashLoopBackOff    container khởi động rồi chết ngay → xem logs --previous
  Pending             không đủ tài nguyên node, hoặc PVC chưa gắn được
  OOMKilled           vượt memory limit → exit code 137
  CreateContainerConfigError  thiếu ConfigMap hoặc Secret được tham chiếu</code></pre>
<div class="warn"><b>ImagePullBackOff với ACR</b> là lỗi kinh điển. Cách đúng là gắn ACR vào cluster bằng <code>az aks update --attach-acr &lt;acr&gt;</code> — nó cấp role <b>AcrPull</b> cho kubelet identity. Đừng đi tạo imagePullSecret bằng tay nếu không thật sự cần.</div>
<pre><code>Kiểm tra kết nối đầu-cuối
  Service có endpoint không?   kubectl get endpoints &lt;svc&gt;
     (endpoint rỗng = selector của Service KHÔNG khớp label của Pod
      — nguyên nhân số một của "service không phản hồi")
  DNS trong cluster            kubectl exec ... -- nslookup &lt;svc&gt;
  Từ ngoài vào                 kiểm tra Ingress, NSG, và loại Service
                               (ClusterIP không ra ngoài được)</code></pre>
</section>

<h2 class="dom">2. Domain 2 — Dữ liệu và vector (25–30%)</h2>

<section id="d2a">
<h3>2.1 Cosmos DB for NoSQL — vector store tích hợp<a class="anch" href="#d2a">#</a></h3>
<p>Điểm bán hàng của Cosmos: <b>vector nằm ngay trong document</b>, cạnh dữ liệu gốc — không phải nhân bản sang một vector DB riêng, và lọc được bằng <code>WHERE</code> như mọi truy vấn khác.</p>
<p><b>Bật tính năng</b> (không bật thì không dùng được, và <b>bật rồi không tắt lại được</b>):</p>
<pre><code>Portal: Cosmos DB → Settings → Features → "Vector Search for NoSQL API"

az cosmosdb update -g &lt;rg&gt; -n &lt;account&gt; \\
   --capabilities EnableNoSQLVectorSearch

Tự duyệt, nhưng có thể mất tới 15 phút mới có hiệu lực.</code></pre>
<p><b>Container vector policy</b> — khai báo lúc tạo container, mô tả vector nằm ở đâu và đo bằng gì:</p>
<pre><code>{
  "vectorEmbeddings": [{
    "path": "/vector1",          // bắt buộc
    "dataType": "float32",       // float32 | float16 | int8 | uint8
    "dimensions": 1536,          // mặc định 1536
    "distanceFunction": "cosine" // cosine (mặc định) | dotproduct | euclidean
  }]
}</code></pre>
<pre><code>distanceFunction   khoảng giá trị
  cosine           -1 (khác nhất) … +1 (giống nhất)
  dotproduct       -inf … +inf   (càng lớn càng giống)
  euclidean          0 (giống nhất) … +inf</code></pre>
<div class="tip">Dùng <code>float16</code> thay <code>float32</code> giảm <b>50% dung lượng lưu vector</b>, đổi lại mất một chút độ chính xác. Với kho vector lớn đây là đòn tiết kiệm chi phí đáng cân nhắc.</div>
<p><b>Ba loại vector index</b> — đây là chỗ đề hay hỏi nhất:</p>
<pre><code>Loại            Chiều tối đa   Bản chất              Nên dùng khi
─────────────   ────────────   ───────────────────   ─────────────────────
flat                 505       brute-force,          cần recall 100% tuyệt đối
                               recall 100%
quantizedFlat       4096       brute-force trên      phạm vi tìm ≤ 50.000 vector
                               vector đã nén         (đã lọc bớt bằng WHERE)
diskANN             4096       xấp xỉ (ANN)          phạm vi tìm > 50.000 vector
                                                     nhanh nhất, RU thấp nhất</code></pre>
<div class="warn"><b>Bốn con số phải nhớ:</b> <code>flat</code> tối đa <b>505 chiều</b> (embedding 1536 chiều <b>không</b> dùng được flat!); <code>quantizedFlat</code> và <code>diskANN</code> tối đa <b>4096</b>; hai loại này cần <b>ít nhất 1.000 vector</b> mới hoạt động, dưới ngưỡng đó Cosmos <b>quét toàn bộ</b> và RU tăng vọt; mốc chọn giữa quantizedFlat và diskANN là <b>50.000 vector</b>.</div>
<p><b>Vector index policy</b> — và một chi tiết rất dễ quên:</p>
<pre><code>{
  "indexingMode": "consistent",
  "includedPaths": [{ "path": "/*" }],
  "excludedPaths": [
    { "path": "/_etag/?" },
    { "path": "/vector1/*" }      ← LOẠI vector khỏi index THƯỜNG
  ],
  "vectorIndexes": [
    { "path": "/vector1", "type": "diskANN" }
  ]
}</code></pre>
<div class="warn">Phải cho đường dẫn vector vào <b><code>excludedPaths</code></b> của index thường. Không loại ra thì Cosmos đánh index vô hướng lên từng phần tử của mảng vector — vô dụng và <b>tốn RU ghi khủng khiếp</b>.</div>
<p><b>Truy vấn</b> bằng <code>VectorDistance()</code>:</p>
<pre><code>SELECT TOP 10 c.title,
       VectorDistance(c.contentVector, [1,2,3]) AS SimilarityScore
FROM c
ORDER BY VectorDistance(c.contentVector, [1,2,3])</code></pre>
<div class="warn"><b>Luôn có <code>TOP N</code>.</b> Thiếu nó, truy vấn cố trả về rất nhiều kết quả — RU và độ trễ tăng vọt. Đây là lỗi tốn tiền phổ biến nhất của vector search trên Cosmos.</div>
<p><b>Giới hạn khác cần biết:</b></p>
<ul>
<li><b>Không sửa được policy tại chỗ</b> — muốn đổi phải <b>xoá rồi tạo lại</b> vector policy / index.</li>
<li><b>Không hỗ trợ tài khoản Shared Throughput.</b></li>
<li>Không dùng được ký tự đại diện (<code>*</code>, <code>[]</code>), và <b>không hỗ trợ vector lồng trong mảng</b>.</li>
<li><code>diskANN</code> là tìm kiếm <b>xấp xỉ</b> — cùng một truy vấn có thể ra thứ tự hơi khác giữa các lần chạy, vì mỗi replica tự dựng index riêng. Đây là <b>bình thường</b>, không phải lỗi dữ liệu. Cần kết quả tất định thì dùng <code>flat</code>.</li>
<li>Tăng <code>searchListSizeMultiplier</code> trong <code>VectorDistance</code> để đổi độ trễ và RU lấy recall cao hơn.</li>
<li><code>quantizerType</code>: <code>product</code> (mặc định) hoặc <code>spherical</code> — cái sau dựng index nhanh hơn và recall ổn định hơn với embedding rất nhiều chiều.</li>
</ul>
<p class="src"><b>Nguồn:</b> <a href="https://learn.microsoft.com/azure/cosmos-db/nosql/vector-search" target="_blank" rel="noopener">Integrated vector store — Cosmos DB for NoSQL</a>, cập nhật 06/08/2026.</p>
</section>

<section id="d2cons">
<h3>2.2 Cosmos DB — năm mức consistency<a class="anch" href="#d2cons">#</a></h3>
<p>Skills-measured ghi: <i>"Optimize query performance and RU consumption by using indexing policies and <b>consistency levels</b>."</i> Mức consistency <b>ảnh hưởng trực tiếp tới RU</b>, đó là lý do nó nằm trong gạch đầu dòng về tối ưu.</p>
<pre><code>Mạnh nhất ────────────────────────────────────► Yếu nhất
Strong → Bounded staleness → Session → Consistent prefix → Eventual
          (mặc định của tài khoản mới là Session)</code></pre>
<pre><code>Mức                Đọc quorum              Ghi quorum        RU đọc
Strong             Local Minority (2/4)    Global Majority    x2
Bounded staleness  Local Minority (2/4)    Local Majority     x2
Session            1 replica (session token) Local Majority   x1
Consistent prefix  1 replica               Local Majority     x1
Eventual           1 replica               Local Majority     x1</code></pre>
<div class="warn"><b>Đây là điểm mấu chốt về chi phí:</b> Strong và Bounded staleness đọc từ <b>hai replica</b> nên tốn <b>gấp đôi RU</b> — cùng một lượng RU thì <b>throughput đọc chỉ bằng một nửa</b> các mức khác. RU <b>ghi</b> thì giống nhau ở mọi mức.</div>
<h4 style="margin:14px 0 6px;font-size:14px">Từng mức bảo đảm gì</h4>
<ul>
<li><b>Strong</b> — linearizability: luôn đọc được bản ghi mới nhất đã commit, không bao giờ thấy ghi dở dang.</li>
<li><b>Bounded staleness</b> — độ trễ dữ liệu giữa hai vùng luôn dưới <b>K phiên bản</b> hoặc <b>T thời gian</b>, cái nào tới trước. Vượt ngưỡng thì Cosmos <b>chặn ghi</b> phân vùng đó cho tới khi bắt kịp.</li>
<li><b>Session</b> — trong <b>một phiên client</b>: đọc được cái mình vừa ghi (read-your-writes) và ghi theo sau đọc.</li>
<li><b>Consistent prefix</b> — không bao giờ thấy thứ tự đảo. Ghi trong một <b>transaction</b> thì hiện ra cùng nhau; ghi lẻ từng document thì như Eventual.</li>
<li><b>Eventual</b> — yếu nhất, có thể đọc được giá trị <b>cũ hơn</b> cái vừa đọc lần trước.</li>
</ul>
<pre><code>Giá trị TỐI THIỂU của K và T (bounded staleness)
  tài khoản 1 vùng     K = 10 thao tác ghi   T = 5 giây
  tài khoản nhiều vùng K = 100.000 ghi       T = 300 giây</code></pre>
<div class="warn"><b>Session token là thứ hay bị hiểu sai.</b> Nó <b>gắn theo phân vùng</b>, client tự cache sau mỗi lần ghi. Hệ quả: <b>client chưa từng ghi vào một phân vùng thì đọc phân vùng đó hành xử như Eventual</b> — vì không có token nào để so. Client bị tạo lại (restart, scale) cũng mất cache và rơi về Eventual cho tới khi ghi lại. Token chỉ là <b>ngưỡng phiên bản tối thiểu</b>, dùng token cũ vẫn luôn nhận dữ liệu mới nhất chứ không phải dữ liệu cũ.</div>
<pre><code>RPO khi mất nguyên một vùng
  1 vùng, mức nào cũng vậy                    < 240 phút
  nhiều vùng, ghi 1 vùng, Session/CP/Eventual  < 15 phút
  nhiều vùng, ghi 1 vùng, Bounded staleness     K & T
  nhiều vùng, ghi 1 vùng, Strong                0</code></pre>
<div class="warn">Ba ràng buộc cứng của <b>Strong</b>: (1) <b>không dùng được với multi-region write</b> — hệ phân tán không thể vừa RPO 0 vừa RTO 0; (2) độ trễ ghi = <b>2 × RTT giữa hai vùng xa nhất</b> + 10 ms ở P99; (3) hai vùng cách nhau <b>trên 8.000 km bị chặn mặc định</b>, muốn dùng phải liên hệ hỗ trợ.</div>
<div class="tip"><b>Bounded staleness trên tài khoản multi-write là anti-pattern.</b> Nó tạo phụ thuộc vào độ trễ sao chép giữa các vùng, trong khi ứng dụng lẽ ra nên đọc và ghi <b>cùng một vùng</b> với nơi nó chạy. Multi-write thì Session là lựa chọn đúng.</div>
<div class="tip">Ghi đè consistency ở mức request <b>chỉ tác động tới ĐỌC trong SDK client</b>. Tài khoản đặt Strong thì ghi vẫn sao chép đồng bộ tới mọi vùng dù bạn hạ mức đọc xuống Session. Và đổi mức mặc định của tài khoản thì <b>phải khởi động lại ứng dụng</b> để SDK tạo lại instance, nếu không nó vẫn dùng mức cũ.</div>
<p class="src"><b>Nguồn:</b> <a href="https://learn.microsoft.com/azure/cosmos-db/consistency-levels" target="_blank" rel="noopener">Consistency levels in Azure Cosmos DB</a>, cập nhật 27/04/2026.</p>
</section>

<section id="d2idx">
<h3>2.3 Cosmos DB — indexing policy và RU<a class="anch" href="#d2idx">#</a></h3>
<p>Mặc định Cosmos <b>đánh index MỌI thuộc tính</b> của mọi item, range index cho cả chuỗi lẫn số. Tiện lúc bắt đầu, nhưng với workload ghi nhiều thì đó là tiền vứt đi.</p>
<pre><code>Indexing mode
  consistent   index cập nhật ĐỒNG BỘ theo mỗi ghi/sửa/xoá   ← mặc định
  none         tắt hẳn index — dùng khi container chỉ là key-value thuần,
               hoặc để tăng tốc nạp dữ liệu hàng loạt rồi bật lại sau

  (lazy: đã lỗi thời, cho kết quả truy vấn KHÔNG đầy đủ, container mới
   không chọn được nữa)</code></pre>
<pre><code>Cú pháp đường dẫn
  /headquarters/employees/?     một giá trị vô hướng (chuỗi/số)
  /locations/[]/country/?       phần tử trong mảng
  /headquarters/*               mọi thứ nằm dưới nút này

Quy tắc:  "/*" BẮT BUỘC nằm ở includedPaths hoặc excludedPaths
Ưu tiên:  đường dẫn CHÍNH XÁC HƠN thắng
          sâu hơn > hẹp hơn      (/a/b/? thắng /a/?)
          /? chính xác hơn /*    (/a/? thắng /a/*)</code></pre>
<div class="warn"><b>Partition key KHÔNG được đánh index</b> (trừ khi nó chính là <code>/id</code>). Không tự đưa nó vào indexing policy thì <b>mọi truy vấn lọc theo partition key sẽ quét toàn bộ</b> và ngốn RU. Với hierarchical partition key phải đưa <b>từng cấp</b> vào. Đây là lỗi âm thầm, không báo lỗi, chỉ thấy hoá đơn tăng.</div>
<pre><code>Hai chiến lược
  Include "/*" rồi loại trừ dần   ← KHUYẾN NGHỊ
      thuộc tính mới thêm vào model được index tự động
  Exclude "/*" rồi thêm dần
      kiểm soát chặt, nhưng PHẢI tự thêm partition key

id và _ts   luôn được index khi mode = consistent (không tắt được)
_etag       mặc định BỊ loại khỏi index</code></pre>
<h4 style="margin:14px 0 6px;font-size:14px">Composite index — khi nào BẮT BUỘC</h4>
<pre><code>ORDER BY từ HAI thuộc tính trở lên  →  BẮT BUỘC có composite index
                                       (mặc định KHÔNG có cái nào)

Quy tắc khớp
  thứ tự đường dẫn phải khớp thứ tự trong ORDER BY
  chiều (ASC/DESC) phải khớp — hoặc ĐẢO NGƯỢC TOÀN BỘ thì cũng được
  (name ASC, age ASC)  phục vụ  ORDER BY name DESC, age DESC   ✔
  (name ASC, age ASC)  KHÔNG    ORDER BY name ASC,  age DESC   ✘
  (name ASC, age ASC)  KHÔNG    ORDER BY age,  name            ✘</code></pre>
<pre><code>Với bộ lọc nhiều thuộc tính
  thuộc tính lọc BẰNG (=) phải đứng TRƯỚC
  thuộc tính lọc KHOẢNG (> < >= <= !=) phải đứng CUỐI
  mỗi composite index chỉ tối ưu được ĐÚNG MỘT bộ lọc khoảng

WHERE name = "John" AND age > 18 AND _ts > 1612212188
  → cần HAI composite index:  (name, age)  và  (name, _ts)
  → KHÔNG phải một cái (name, age, _ts)</code></pre>
<div class="tip">Truy vấn vừa lọc vừa <code>ORDER BY</code> trên thuộc tính khác: <b>thêm thuộc tính đang lọc vào đầu mệnh đề ORDER BY</b> thì mới dùng được composite index.<br>
<code>WHERE c.name = "John" ORDER BY c.timestamp</code> → viết lại thành <code>ORDER BY c.name, c.timestamp</code>.</div>
<div class="warn"><b>Thứ tự thao tác khi đổi index — sai là gãy production.</b> Bỏ một index <b>có hiệu lực NGAY LẬP TỨC</b> (truy vấn chuyển sang quét toàn bộ), còn thêm index thì <b>mất thời gian chuyển đổi</b>. Khi thay index này bằng index khác: <b>thêm cái mới trước, đợi chuyển đổi xong, rồi mới bỏ cái cũ.</b></div>
<pre><code>Index transformation
  chạy trực tuyến, tại chỗ, KHÔNG tốn thêm dung lượng
  không ảnh hưởng khả năng đọc/ghi
  TỐN RU (ưu tiên thấp hơn CRUD và truy vấn)
  gộp nhiều thay đổi vào MỘT lần sửa policy để xong nhanh nhất</code></pre>
<div class="tip"><b>TTL bắt buộc phải có index.</b> Không bật TTL được trên container có <code>indexingMode: none</code>, và ngược lại. Cần TTL mà không cần index thuộc tính nào: đặt mode <code>consistent</code>, <b>includedPaths rỗng</b>, và <code>/*</code> là excluded path duy nhất.</div>
<p class="src"><b>Nguồn:</b> <a href="https://learn.microsoft.com/azure/cosmos-db/index-policy" target="_blank" rel="noopener">Indexing policies in Azure Cosmos DB</a>, cập nhật 27/04/2026.</p>
</section>

<section id="d2cf">
<h3>2.4 Cosmos DB — change feed processor<a class="anch" href="#d2cf">#</a></h3>
<p>Gạch đầu dòng chính thức: <i>"Implement a change feed processor to detect and handle new or updated items."</i></p>
<pre><code>Bốn thành phần
  Monitored container  nơi sinh ra thay đổi
  Lease container      LƯU TRẠNG THÁI + điều phối giữa nhiều worker
  Compute instance     nơi chạy processor, có instanceName DUY NHẤT
  Delegate             code của bạn, xử lý từng lô thay đổi

Vòng đời
  1. đọc change feed
  2. không có gì mới → ngủ (WithPollInterval) → quay lại 1
  3. có thay đổi → đưa cho delegate
  4. delegate xong KHÔNG LỖI → ghi checkpoint vào lease → quay lại 1</code></pre>
<div class="warn"><b>Bảo đảm là AT-LEAST-ONCE, không phải exactly-once.</b> Delegate ném ngoại lệ chưa bắt → luồng dừng, luồng mới đọc checkpoint cuối rồi <b>gửi lại đúng lô đó</b>, lặp cho tới khi xử lý thành công. Vì vậy <b>delegate phải idempotent</b>. Ngoại lệ duy nhất không được thử lại: lỗi ngay ở <b>lần chạy delegate đầu tiên</b>, vì lease chưa có trạng thái nào để quay về.</div>
<div class="warn"><b>Chống kẹt vòng lặp:</b> nếu một lô luôn lỗi, processor sẽ thử lại mãi mãi và <b>đứng im, không xử lý gì mới</b>. Bắt buộc phải có nhánh ghi document lỗi ra một hàng đợi lỗi (container Cosmos khác cũng được) rồi cho delegate trả về bình thường.</div>
<pre><code>Deployment unit = các instance có
  CÙNG processorName  +  CÙNG cấu hình lease container
  nhưng KHÁC instanceName

Phân phối tải
  lease được chia đều cho các instance
  MỘT lease chỉ thuộc MỘT instance tại một thời điểm
  → số instance KHÔNG NÊN nhiều hơn số lease (thừa ra sẽ ngồi không)
  container phình to → processor tự tăng số lease và chia lại

Nhiều deployment unit dùng chung một lease container được,
miễn khác processorName (hoặc khác leasePrefix bên Java).</code></pre>
<pre><code>Thời điểm bắt đầu đọc
  mặc định                  chỉ đọc thay đổi TỪ LÚC processor chạy lần đầu
                            (mọi thay đổi TRƯỚC đó KHÔNG được thấy)
  WithStartTime(dateTime)   đọc từ một mốc thời gian
  WithStartTime(DateTime.MinValue.ToUniversalTime())   đọc TỪ ĐẦU container</code></pre>
<div class="warn">Các tuỳ chọn thời điểm bắt đầu <b>chỉ có tác dụng lúc lease container được khởi tạo LẦN ĐẦU</b>. Sau đó đổi cũng vô nghĩa — muốn đọc lại từ đầu phải xoá lease container hoặc đổi <code>processorName</code>.</div>
<pre><code>Hai chế độ
  Latest version (mặc định)   chỉ thấy BẢN MỚI NHẤT của item được thêm/sửa
                              KHÔNG thấy xoá  ← dùng soft-delete để bù
  All versions and deletes    thấy cả xoá và bản trước đó (Current/Previous)
                              preview · .NET ≥ 3.60.0 · Java ≥ 4.81.0
                              KHÔNG tuỳ chỉnh được thời điểm bắt đầu</code></pre>
<pre><code>Cấu hình lease nâng cao — tất cả đều TỐN RU trên lease container
  Lease Acquire     mặc định 17 giây  (chạy Query trên lease container)
  Lease Expiration  mặc định 60 giây  (host chết thì lease bị thu sau ngần này)
  Lease Renewal     mặc định 13 giây  (chạy Replace trên lease)

RÀNG BUỘC: Expiration KHÔNG BAO GIỜ được nhỏ hơn Renewal.</code></pre>
<div class="warn"><b>Lease container bị throttle là hỏng cả hệ thống</b> — không chỉ chậm mà có thể <b>dừng hẳn việc xử lý</b>. Càng nhiều instance dùng chung một lease container thì RU tiêu thụ càng cao. Kiểm tra throughput của lease container, đừng chỉ nhìn container dữ liệu.</div>
<pre><code>SDK hỗ trợ change feed PROCESSOR
  .NET V3  ✓      Java  ✓      Node.js  ✗      Python  ✗
  → Node.js và Python phải dùng change feed PULL MODEL,
    tự quản checkpoint bằng tay</code></pre>
<div class="tip"><b>Luôn dùng global endpoint</b> (<code>contoso.documents.azure.com</code>), không dùng endpoint theo vùng. Lease document được gắn phạm vi theo endpoint, nên đổi endpoint là sinh ra một bộ lease <b>độc lập hoàn toàn</b> — processor tưởng mình chạy lần đầu. Chuyển vùng thì dùng <code>ApplicationRegion</code> hoặc <code>ApplicationPreferredRegions</code>.</div>
<div class="warn"><b>Tránh xử lý bất đồng bộ "thả nổi" trong delegate.</b> Processor có thể ghi checkpoint <b>trước khi</b> các thao tác async của bạn chạy xong — mất sự kiện mà không hề báo lỗi. Phải chờ xong hẳn rồi mới cho delegate trả về.</div>
<p class="src"><b>Nguồn:</b> <a href="https://learn.microsoft.com/azure/cosmos-db/change-feed-processor" target="_blank" rel="noopener">Change feed processor</a>, cập nhật 15/06/2026.</p>
</section>

<section id="d2b">
<h3>2.5 PostgreSQL + pgvector — tinh chỉnh index<a class="anch" href="#d2b">#</a></h3>
<p>Skills-measured có hẳn một gạch đầu dòng <i>"giảm pgvector compute overhead"</i>, và đây là toàn bộ nội dung của nó.</p>
<pre><code>-- Tên extension là "vector", KHÔNG phải "pgvector"
SHOW azure.extensions;      -- kiểm tra đã allowlist chưa
CREATE EXTENSION vector;    -- chạy RIÊNG cho từng database

CREATE TABLE items(id bigserial PRIMARY KEY, embedding vector(1536));</code></pre>
<div class="warn">Tên nhầm lẫn kinh điển: cộng đồng gọi là <b>pgvector</b> nhưng binary và extension đều tên <b>vector</b>. Allowlist và <code>CREATE EXTENSION</code> đều phải dùng <code>vector</code>.</div>
<p><b>Toán tử phải khớp opclass của index</b> — sai cặp này thì index có mà planner không dùng:</p>
<pre><code>Toán tử   Ý nghĩa                opclass phải dùng
  <->     Euclidean (L2)         vector_l2_ops
  <=>     cosine distance        vector_cosine_ops
  <#>     negative inner product vector_ip_ops</code></pre>
<div class="tip">Embedding của OpenAI đã <b>chuẩn hoá về độ dài 1</b>. Với vector chuẩn hoá, dùng <b>inner product <code>&lt;#&gt;</code></b> cho hiệu năng tốt nhất — kết quả xếp hạng tương đương cosine nhưng tính rẻ hơn.</div>
<p><b>Ba loại index:</b></p>
<pre><code>              dựng nhanh   bộ nhớ   tốc độ/recall   dựng trên bảng rỗng?
IVFFlat          nhanh      thấp       kém nhất       KHÔNG (phải k-means)
HNSW             chậm       cao        tốt            được
DiskANN          nhanh      cao        tốt nhất       được  (chỉ Azure Flexible Server)</code></pre>
<pre><code>-- IVFFlat: lists lúc TẠO, probes lúc TRUY VẤN
CREATE INDEX ON items USING ivfflat (embedding vector_cosine_ops)
  WITH (lists = 1000);
SET ivfflat.probes = 100;          -- mặc định 1

-- HNSW: m + ef_construction lúc TẠO, ef_search lúc TRUY VẤN
CREATE INDEX ON items USING hnsw (embedding vector_l2_ops)
  WITH (m = 16, ef_construction = 64);      -- đây là giá trị mặc định
SET hnsw.ef_search = 100;          -- mặc định 40

-- DiskANN
CREATE INDEX ON items USING diskann (embedding vector_cosine_ops)
  WITH (max_neighbors = 48, l_value_ib = 100);   -- mặc định 32 và 50
SET diskann.l_value_is = 100;</code></pre>
<p><b>Chọn <code>lists</code> và <code>probes</code> cho IVFFlat</b> — công thức chính thức:</p>
<pre><code>            ≤ 1 triệu dòng        > 1 triệu dòng
lists       rows / 1000           sqrt(rows)
probes      lists / 10            sqrt(lists)</code></pre>
<div class="warn">Đặt <code>probes = lists</code> thì mọi list đều bị quét — tương đương brute-force, và <b>planner sẽ bỏ luôn index</b> vì chẳng lợi gì. Tăng probes là đổi tốc độ lấy recall, nhưng đừng đẩy tới kịch.</div>
<p><b>Giới hạn cứng phải nhớ:</b></p>
<ul>
<li>Cột phải <b>khai số chiều</b>. <code>col vector</code> không chiều → <code>ERROR: column does not have dimensions</code>.</li>
<li><b>Chỉ index được tối đa 2000 chiều.</b> Lưu thì bao nhiêu chiều cũng được, nhưng vượt 2000 là không đánh index được — phải giảm chiều, hoặc phân mảnh/partition.</li>
</ul>
<div class="tip"><b>Nạp dữ liệu TRƯỚC rồi mới tạo index.</b> Vừa dựng nhanh hơn vừa cho ra bố cục index tối ưu hơn. Riêng IVFFlat thì bắt buộc, vì nó phải chạy k-means trên dữ liệu thật.</div>
<p><b>Chẩn đoán khi truy vấn chậm:</b></p>
<pre><code>EXPLAIN (ANALYZE, VERBOSE, BUFFERS)
SELECT * FROM items ORDER BY embedding <-> '[...]' LIMIT 5;

Cần trả lời:
  - có chạy song song không?      → Workers Planned / Workers Launched
  - có DÙNG index không?          → "Index Scan using ..." hay "Seq Scan"?
  - partial index có khớp WHERE?
  - partition có bị prune đúng?

-- theo dõi tiến độ dựng index
SELECT phase, round(100.0*blocks_done/nullif(blocks_total,0),1) AS "%"
FROM pg_stat_progress_create_index;

-- ép dùng index khi planner cứ chọn seq scan
SET LOCAL enable_seqscan TO OFF;</code></pre>
<div class="warn"><b>Partial index rất kén cú pháp.</b> Index tạo với <code>WHERE tier = 'premium'</code> sẽ <b>không</b> được dùng cho truy vấn <code>WHERE tier LIKE 'premium'</code> — dù kết quả y hệt. Dạng biểu thức trong truy vấn phải khớp dạng trong định nghĩa index.</div>
<p>Không có index thì pgvector <b>quét chính xác</b> — recall 100% nhưng chậm. Với bảng nhỏ, tăng <code>max_parallel_workers_per_gather</code> có khi đủ nhanh mà không cần index nào.</p>
<p class="src"><b>Nguồn:</b> <a href="https://learn.microsoft.com/azure/postgresql/extensions/how-to-use-pgvector" target="_blank" rel="noopener">pgvector trên Azure PostgreSQL</a> · <a href="https://learn.microsoft.com/azure/postgresql/extensions/how-to-optimize-performance-pgvector" target="_blank" rel="noopener">Tối ưu hiệu năng pgvector</a>, cập nhật 10/07/2026.</p>
</section>

<section id="d2c">
<h3>2.6 Azure Managed Redis — cache và vector index<a class="anch" href="#d2c">#</a></h3>
<p>Đây là sản phẩm <b>mới</b>, dựng trên Redis Enterprise (Redis 7.4.x), khác với Azure Cache for Redis cũ. Skills-measured đòi hai việc: <i>data operations (caching, expiration, invalidation)</i> và <i>vector indexing để similarity search</i>.</p>
<pre><code>Bốn tier              tỉ lệ RAM:vCPU   dung lượng
Memory Optimized           8:1          12 – 1920 GB
Balanced                   4:1         0.5 – 960 GB    ← mặc định hợp lý
Compute Optimized          2:1            3 – 720 GB
Flash Optimized       RAM + NVMe        250 – 4500 GB</code></pre>
<div class="warn"><b>Con số phải nhớ cho đề:</b> <b>Flash Optimized KHÔNG có search, tức là không làm vector search được.</b> Cần vector index thì phải là Memory Optimized, Balanced hoặc Compute Optimized. Flash Optimized cũng không có active geo-replication và không có instance không phân cụm.</div>
<pre><code>Module               MemOpt  Balanced  Compute  Flash
RedisJSON              ✓        ✓         ✓       ✓
Search + VECTOR        ✓        ✓         ✓       ✗   ← khác biệt duy nhất
RedisBloom             ✓        ✓         ✓       ✓
RedisTimeSeries        ✓        ✓         ✓       ✓</code></pre>
<p><b>Caching, expiration, invalidation</b> — khuôn cơ bản:</p>
<pre><code>Cache-aside     đọc: cache miss → đọc DB → ghi vào cache → trả về
                ghi: ghi DB → XOÁ khoá trong cache (đừng ghi đè)
                     xoá an toàn hơn ghi đè vì tránh ghi giá trị cũ đè giá trị mới

TTL             SET key val EX 300     đặt hạn ngay lúc ghi
                EXPIRE key 300         đặt hạn cho khoá đã có
                TTL key                còn bao lâu (-1 = không hạn, -2 = không tồn tại)

Invalidation    DEL key                xoá thẳng
                đặt tên khoá có version: user:42:v3
                → đổi version là vô hiệu cả nhóm mà không phải quét</code></pre>
<div class="tip"><b>Khoá không có TTL là nguồn rò rỉ bộ nhớ số một.</b> Đặt TTL mặc định cho mọi khoá cache, kể cả khi nghĩ là sẽ tự xoá — vì code xoá luôn có đường thoát ra ngoại lệ.</div>
<pre><code>Vector search bằng module Search (RediSearch)
  FT.CREATE idx ON HASH PREFIX 1 doc:
      SCHEMA v VECTOR HNSW 6 TYPE FLOAT32 DIM 1536 DISTANCE_METRIC COSINE

  Thuật toán:  FLAT  quét toàn bộ, chính xác, hợp kho nhỏ
               HNSW  xấp xỉ, nhanh, hợp kho lớn</code></pre>
<div class="tip"><b>Khi nào chọn Redis thay vì Cosmos/pgvector cho vector?</b> Khi cần <b>độ trễ cực thấp</b> và tập vector <b>vừa đủ nằm trong RAM</b> — ví dụ cache ngữ nghĩa cho câu hỏi hay lặp. Kho lớn, cần bền vững, cần lọc phức tạp thì dùng Cosmos hoặc PostgreSQL.</div>
<p><b>High availability</b> = primary + replica shard trải trên ít nhất hai node, và tự trải theo availability zone ở vùng có hỗ trợ. Tắt HA thì rẻ hơn nhưng <b>mất dữ liệu và có downtime</b> — chỉ dùng cho dev/test.</p>
<p class="src"><b>Nguồn:</b> <a href="https://learn.microsoft.com/azure/redis/overview" target="_blank" rel="noopener">What is Azure Managed Redis</a>, cập nhật 18/08/2026.</p>
</section>

<section id="x3">
<h3>2.7 Blob Storage — tier, SAS và vòng đời<a class="anch" href="#x3">#</a></h3>
<pre><code>Loại blob (QUAN TRỌNG: chỉ Block Blob đặt được access tier)
  Block   file thường: ảnh, tài liệu, backup      ← gần như luôn là cái này
  Append  chỉ ghi thêm vào cuối: log
  Page    truy cập ngẫu nhiên: đĩa ảo VM</code></pre>
<pre><code>Access tier      truy cập        lưu tối thiểu   ghi chú
  Hot            ngay            không           đang dùng, đọc/ghi nhiều
  Cool           ngay            30 ngày         ít đọc
  Cold           ngay            90 ngày         rất hiếm đọc, vẫn cần lấy nhanh
  Archive        PHẢI rehydrate  180 ngày        offline, tới 15 GIỜ mới lấy được
  Smart          tự động         —               tự chuyển giữa hot/cool/cold
                                                  theo thói quen truy cập</code></pre>
<div class="warn"><b>Phí xoá sớm được TÍNH THEO TỶ LỆ và cũng áp khi GHI ĐÈ.</b> Chuyển blob sang Cool rồi xoá sau 21 ngày → bị tính thêm 9 ngày. Và không chỉ xoá: <code>Put Blob</code>, <code>Put Block List</code>, <code>Copy Blob</code> ghi đè trọn đối tượng cũng dính phí này. Xoá blob Archive sau 120 ngày là bị tính đủ 180.</div>
<div class="tip">Tài khoản có bật <b>soft delete</b> thì blob chỉ thật sự "đã xoá" khi hết thời gian giữ — trước đó nó chỉ là soft-deleted và <b>chưa bị tính phí xoá sớm</b>.</div>
<pre><code>Ràng buộc riêng của Archive
  không đọc, không sửa được — phải rehydrate sang hot/cool/cold trước
  metadata VẪN đọc được (liệt kê, xem thuộc tính, index tag)
  index tag đọc VÀ ghi được; metadata chỉ đọc
  KHÔNG hỗ trợ snapshot
  chỉ dùng được với LRS, GRS, RA-GRS
      → KHÔNG dùng được với ZRS, GZRS, RA-GZRS</code></pre>
<h4 style="margin:14px 0 6px;font-size:14px">SAS — cấp quyền tạm mà không lộ account key</h4>
<pre><code>User delegation SAS   ký bằng THÔNG TIN ENTRA ID    ← NÊN DÙNG
                      thu hồi được, có danh tính, không dính account key
Service SAS           ký bằng account key, phạm vi một dịch vụ
Account SAS           ký bằng account key, phạm vi rộng nhất

Stored access policy  gắn SAS vào một policy trên container
                      → THU HỒI được bằng cách xoá/sửa policy
                      (không có nó thì SAS đã phát ra là không rút lại được
                       trừ khi xoay account key)</code></pre>
<div class="warn">SAS ký bằng <b>account key</b> chỉ thu hồi được bằng cách <b>xoay key</b> — mà xoay key thì <b>mọi thứ khác đang dùng key đó cũng chết theo</b>. Đó là lý do user delegation SAS hoặc stored access policy gần như luôn là đáp án đúng cho yêu cầu "thu hồi quyền truy cập".</div>
<p><b>Lifecycle management</b> tự chuyển tier hoặc xoá blob theo tuổi — cách chuẩn để giảm chi phí mà không phải viết job. Mặc định tier của tài khoản GPv2 mới là <b>Hot</b>, đổi được lúc tạo hoặc sau đó.</p>
</section>

<h2 class="dom">3. Domain 3 — Kết nối và tiêu thụ dịch vụ (20–25%)</h2>

<section id="d3a">
<h3>3.1 Service Bus — DLQ, session và PeekLock<a class="anch" href="#d3a">#</a></h3>
<pre><code>Queue    một người gửi → một người nhận (point-to-point)
Topic    một người gửi → NHIỀU subscription, mỗi cái có bộ lọc riêng
         mỗi subscription hành xử y hệt một queue

Tier   Basic     chỉ queue, KHÔNG có topic
       Standard  đủ tính năng, message 256 KB, tính theo lượt
       Premium   message 100 MB, tài nguyên riêng, có VNet, giá cố định</code></pre>
<h4 style="margin:14px 0 6px;font-size:14px">Chế độ nhận — quyết định dữ liệu có mất hay không</h4>
<pre><code>PeekLock (mặc định)   khoá message → xử lý → Complete
    Complete    xoá hẳn khỏi queue
    Abandon     trả lại NGAY, TĂNG DeliveryCount
    DeadLetter  đẩy thẳng sang DLQ
    Defer       để lại nhưng chỉ lấy được bằng SequenceNumber
    hết lock mà chưa Complete → message QUAY LẠI, DeliveryCount tăng

ReceiveAndDelete      xoá ngay khi nhận
    nhanh hơn, nhưng app chết giữa chừng là MẤT message</code></pre>
<div class="warn"><b>Lock duration mặc định 30 giây, tối đa 5 phút.</b> Xử lý lâu hơn thế thì message quay lại hàng đợi và bị xử lý <b>lần nữa</b> — sinh trùng lặp âm thầm. Cách đúng là gọi <b>RenewLock</b> định kỳ trong lúc xử lý, <b>không phải</b> kéo lock duration lên kịch trần.</div>
<h4 style="margin:14px 0 6px;font-size:14px">Dead-letter queue</h4>
<pre><code>Mỗi queue và mỗi subscription có SẴN một DLQ phụ:  <tên>/$deadletterqueue

Message rơi vào DLQ khi
  vượt MaxDeliveryCount            (mặc định 10)
  quá TimeToLive
  lỗi khi đánh giá filter của subscription
  vượt giới hạn kích thước sau khi biến đổi
  ứng dụng gọi DeadLetter() tường minh

Lý do được ghi vào  DeadLetterReason  và  DeadLetterErrorDescription</code></pre>
<div class="warn"><b>DLQ không tự dọn.</b> Message trong đó vẫn <b>chiếm quota của chính queue gốc</b> — để lâu là queue gốc đầy rồi ngừng nhận message mới. Phải có tiến trình đọc và xử lý DLQ, không phải chỉ bật lên rồi quên.</div>
<h4 style="margin:14px 0 6px;font-size:14px">Tính năng chỉ Service Bus có</h4>
<pre><code>Session            đảm bảo THỨ TỰ; mọi message cùng SessionId về CÙNG consumer
                   → cần thứ tự thì BẮT BUỘC dùng session, không có cách khác
                   session còn giữ được state riêng (SetSessionState)
Duplicate detection  loại message trùng MessageId trong một cửa sổ thời gian
                     BẬT LÚC TẠO queue, không bật sau được
Scheduled message  hẹn giờ giao trong tương lai (ScheduledEnqueueTime)
Transaction        gửi/nhận nhiều thao tác như MỘT khối nguyên tử
Auto-forward       tự đẩy message sang queue/topic khác (dựng chuỗi xử lý)
Batch              gửi theo lô để giảm số lượt gọi</code></pre>
<pre><code>Bộ lọc của subscription (topic)
  Boolean filter   TrueFilter / FalseFilter — nhận tất hoặc không nhận gì
  SQL filter       biểu thức trên property:  user.type = 'premium' AND amount > 100
                   linh hoạt nhất nhưng TỐN nhất
  Correlation filter  so khớp BẰNG trên các trường hệ thống/property
                      NHANH hơn SQL filter đáng kể</code></pre>
<div class="tip">Chỉ cần so bằng thì dùng <b>correlation filter</b>, đừng dùng SQL filter — nó nhanh hơn hẳn vì không phải phân tích biểu thức cho từng message. Đây là tối ưu dễ bỏ sót khi topic có lưu lượng lớn.</div>
</section>

<section id="d3b">
<h3>3.2 Event Grid — filter, retry và dead-letter<a class="anch" href="#d3b">#</a></h3>
<p>Event Grid <b>định tuyến sự kiện rời rạc</b>: nguồn phát, Event Grid lọc rồi <b>đẩy</b> tới handler. Mô hình <b>push</b>, ngược hẳn với Event Hubs (pull, consumer tự giữ vị trí).</p>
<pre><code>Nguồn (source)  →  Topic  →  Event Subscription (có filter)  →  Handler

Loại topic
  System topic    do dịch vụ Azure phát sẵn: Blob, Resource Group,
                  Key Vault, Container Registry, Media Services…
  Custom topic    ứng dụng của bạn tự phát
  Domain          gom hàng nghìn topic dưới một endpoint quản lý chung
                  (mô hình multi-tenant)</code></pre>
<h4 style="margin:14px 0 6px;font-size:14px">Ba tầng lọc, từ rẻ tới đắt</h4>
<pre><code>1. Event type          chỉ nhận Microsoft.Storage.BlobCreated
2. Subject prefix/suffix   bắt đầu bằng /blobServices/.../logs/
                           hoặc kết thúc bằng .jpg
3. Advanced filter     lọc theo TRƯỜNG BẤT KỲ trong payload
     NumberIn · NumberNotIn · NumberLessThan · NumberGreaterThan
     NumberInRange · StringContains · StringBeginsWith · StringEndsWith
     StringIn · BoolEquals · IsNullOrUndefined · IsNotNull</code></pre>
<div class="tip">Lọc bằng <b>subject prefix/suffix</b> rẻ và nhanh hơn advanced filter. Với sự kiện Blob, đặt cấu trúc thư mục hợp lý rồi lọc bằng prefix là cách tiết kiệm nhất — thay vì để mọi sự kiện chạy qua advanced filter.</div>
<h4 style="margin:14px 0 6px;font-size:14px">Retry và dead-letter</h4>
<pre><code>Thử lại theo lịch lùi dần (exponential backoff)
  mặc định:  tối đa 30 lần  HOẶC  trong 24 giờ  — cái nào tới trước
  chỉnh được cả maxDeliveryAttempts và eventTimeToLive

Mã HTTP handler trả về quyết định hành vi
  200, 202     thành công, KHÔNG thử lại
  400, 413     lỗi không sửa được → ĐƯA THẲNG dead-letter, BỎ QUA retry
  401,403,404,408,414,500,503  → có retry
  timeout / không phản hồi     → có retry</code></pre>
<div class="warn"><b>Dead-letter KHÔNG bật sẵn.</b> Phải khai một <b>Storage container</b> làm nơi chứa. Không khai thì sự kiện hết lượt retry là <b>mất hẳn, không dấu vết, không cảnh báo</b>. Đây là lỗi cấu hình phổ biến nhất của Event Grid, và nó chỉ lộ ra khi đã mất dữ liệu.</div>
<div class="warn">Dead-letter cũng <b>không tức thời</b>: Event Grid ghi vào container sau một khoảng trễ (thường vài phút). Đừng kết luận "mất sự kiện" khi vừa mới thử xong.</div>
<pre><code>Bảo đảm và giới hạn
  Giao hàng     AT-LEAST-ONCE  →  handler PHẢI idempotent
  Thứ tự        KHÔNG bảo đảm  →  cần thứ tự thì dùng Service Bus session
  Kích thước    tối đa 1 MB mỗi sự kiện (tính phí theo mốc 64 KB)
  Batch         Event Grid có thể gửi theo lô — handler phải xử lý được MẢNG</code></pre>
<div class="tip"><b>Xác thực endpoint (validation handshake):</b> đăng ký webhook tự viết thì Event Grid gửi một sự kiện <code>SubscriptionValidationEvent</code>, và endpoint <b>phải trả lại <code>validationCode</code></b> thì đăng ký mới thành công. Handler là dịch vụ Azure (Function, Logic App, Event Hubs, Service Bus) thì bước này tự động. Đây là lý do webhook tự viết hay "đăng ký không được" ngay từ đầu.</div>
</section>

<section id="x5">
<h3>3.3 Event Hubs — partition, consumer group, throughput unit<a class="anch" href="#x5">#</a></h3>
<pre><code>Namespace  →  Event hub  →  Partition
             (log CHỈ GHI THÊM,      (chuỗi sự kiện CÓ THỨ TỰ,
              tương đương Kafka topic) đơn vị song song)

Mô hình PULL: consumer tự đi lấy, KHÔNG phải service đẩy tới.</code></pre>
<pre><code>Khái niệm cốt lõi
  Producer        gửi sự kiện; tối đa 1 MB mỗi lần publish
  Partition key   gom sự kiện liên quan về CÙNG partition → giữ được thứ tự
  Consumer group  một "góc nhìn" ĐỘC LẬP lên cùng dòng dữ liệu
                  mỗi event hub luôn có sẵn nhóm $Default
  Offset          vị trí của sự kiện trong partition (như con trỏ)
  Sequence number thứ tự trong partition
  Checkpoint      lưu offset đã xử lý tới đâu</code></pre>
<div class="warn"><b>Checkpoint là trách nhiệm của CONSUMER, không phải của dịch vụ.</b> Event Hubs chỉ cung cấp offset; consumer phải tự lưu (thường vào Blob Storage). Mất checkpoint store là đọc lại từ đầu.</div>
<div class="tip"><b>Một partition chỉ nên có MỘT reader đang hoạt động trong mỗi consumer group</b> (tối đa 5 trong vài tình huống đặc biệt). Muốn nhiều ứng dụng cùng đọc một dòng thì tạo <b>consumer group riêng cho từng ứng dụng</b> — đừng nhét chung một nhóm.</div>
<pre><code>Throughput Unit (tier Standard) — mua trước, tính theo giờ
  Ingress  1 MB/giây  HOẶC  1.000 sự kiện/giây   (cái nào tới trước)
  Egress   2 MB/giây  HOẶC  4.096 sự kiện/giây
  Tối đa 40 TU mỗi namespace, CHIA CHUNG cho mọi event hub trong đó

Vượt ingress  → bị throttle, ném EventHubsException  Reason = ServiceBusy
Vượt egress   → KHÔNG ném lỗi, chỉ đơn giản là không vượt được trần

Auto-inflate  tự TĂNG số TU khi tải lên (không tự giảm)

Processing Unit (tier Premium): mua 1, 2, 4, 6, 8, 10, 12 hoặc 16 PU
  mỗi PU ≈ 5–10 MB/s ingress, 10–20 MB/s egress</code></pre>
<pre><code>Lưu giữ sự kiện
  Standard   mặc định 1 giờ, tối đa  7 ngày
  Premium / Dedicated              tối đa 90 ngày
  KHÔNG xoá sự kiện thủ công được — chỉ hết hạn theo chính sách lưu giữ</code></pre>
<div class="tip"><b>Capture</b> tự đổ dòng sự kiện xuống Blob/Data Lake mà không cần viết consumer chỉ để lưu trữ. Đây là câu trả lời cho yêu cầu "vừa xử lý thời gian thực vừa giữ dữ liệu thô để phân tích sau".</div>
<div class="warn"><b>Khác biệt cốt lõi so với hàng đợi:</b> Event Hubs <b>không xoá sự kiện khi đọc</b>. Dữ liệu nằm đó tới hết thời gian lưu, ai đọc cũng được, đọc lại cũng được. Đề mô tả <b>"phát lại dữ liệu"</b> hoặc <b>"nhiều hệ thống cùng tiêu thụ một dòng"</b> → Event Hubs, không phải Service Bus.</div>
</section>

<section id="x4">
<h3>3.4 Queue Storage — và khi nào KHÔNG dùng Service Bus<a class="anch" href="#x4">#</a></h3>
<p>Study guide trỏ riêng tới Queue Storage, tách khỏi Service Bus. Đây là hàng đợi <b>đơn giản, rẻ, khổng lồ</b> — không phải bản rút gọn của Service Bus.</p>
<pre><code>                        Queue Storage        Service Bus
kích thước message      64 KB                256 KB (Premium 100 MB)
dung lượng hàng đợi     tới hàng TB          theo quota namespace
thứ tự đảm bảo          KHÔNG                CÓ (qua session)
transaction             không                có
dead-letter queue       KHÔNG (tự làm)       CÓ SẴN
topic / subscription    không                có
chống trùng lặp         không                có
lịch gửi trước          không                có
giao thức               HTTP/HTTPS REST      AMQP 1.0
giá                     rất rẻ               đắt hơn nhiều</code></pre>
<pre><code>Vòng đời một message trong Queue Storage
  Put       đưa vào hàng đợi
  Get       nhận về + message BỊ ẨN trong "visibility timeout"
            (mặc định 30 giây, tối đa 7 ngày)
  Delete    xử lý xong thì PHẢI tự gọi xoá
  hết visibility timeout mà chưa Delete → message HIỆN LẠI cho người khác

  DequeueCount  đếm số lần message được nhận
                → tự dùng nó để làm "poison message" thủ công</code></pre>
<div class="warn"><b>Không có dead-letter tự động.</b> Message hỏng sẽ quay lại vô tận. Khuôn tự làm: mỗi lần nhận, kiểm <code>DequeueCount</code>; vượt ngưỡng thì chép sang một <b>poison queue</b> riêng rồi xoá khỏi queue gốc. Azure Functions với Queue trigger làm sẵn việc này (mặc định 5 lần rồi đẩy sang <code>&lt;queue&gt;-poison</code>).</div>
<div class="tip"><b>Quy tắc chọn:</b> cần <b>bất kỳ</b> thứ nào sau đây — thứ tự, transaction, DLQ sẵn, topic/subscription, chống trùng, hẹn giờ gửi, message &gt; 64 KB — thì dùng <b>Service Bus</b>. Không cần cái nào và muốn rẻ, đơn giản, dung lượng khổng lồ thì <b>Queue Storage</b>.</div>
<div class="warn">Message quá giới hạn thì đừng nhồi vào hàng đợi. Khuôn chuẩn là <b>claim-check</b>: đẩy nội dung lớn lên Blob, message chỉ mang đường dẫn. Áp dụng cho cả Queue Storage lẫn Service Bus.</div>
</section>

<section id="x2">
<h3>3.5 Azure Functions — plan, trigger, binding<a class="anch" href="#x2">#</a></h3>
<p>Có hẳn một mục trong skills-measured: <i>"Build serverless APIs, including implementing triggers and bindings"</i> và <i>"Configure and deploy function apps"</i>.</p>
<h4 style="margin:14px 0 6px;font-size:14px">Hosting plan — quyết định đầu tiên và ảnh hưởng nhiều nhất</h4>
<pre><code>Plan                  Trạng thái   Điểm quyết định
──────────────────    ──────────   ─────────────────────────────────
Flex Consumption      GA           serverless MẶC ĐỊNH cho app mới
                                   scale tới 1.000 instance
                                   chọn RAM 512 / 2.048 / 4.096 MB
                                   có VNet; always-ready instance giảm cold start
Premium               GA           worker giữ ấm sẵn, chạy gần liên tục,
                                   thời gian chạy dài hơn, custom Linux image
Dedicated             GA           trong App Service plan, giá cố định, scale tay
                                   hợp việc chạy rất lâu mà Durable không giải được
Container Apps        GA           function đóng container, chạy cạnh microservice
                                   có cả GPU
Consumption (cũ)      LEGACY       Windows còn GA — LINUX ĐÃ KHAI TỬ</code></pre>
<div class="warn"><b>Chỗ tài liệu cũ sai nhiều nhất:</b> Consumption nay là <b>legacy</b>, app serverless mới phải dùng <b>Flex Consumption</b>, và <b>Linux Consumption đã bị khai tử</b>. Khoá học nào còn dạy "Consumption là plan serverless mặc định" là đã lỗi thời.</div>
<h4 style="margin:14px 0 6px;font-size:14px">Trigger và binding</h4>
<pre><code>Trigger   thứ KHỞI ĐỘNG function
          MỖI FUNCTION ĐÚNG MỘT TRIGGER — không hơn, không kém
          bản chất là một loại input binding đặc biệt

Binding   kết nối dữ liệu KHAI BÁO, không phải viết SDK
          input  → dữ liệu được nạp sẵn vào tham số
          output → ghi ra đích, thường chỉ cần return
          TUỲ CHỌN, và có thể có NHIỀU cái mỗi chiều</code></pre>
<pre><code>Ghép trigger + binding cho vài tình huống thật
  message vào queue → ghi sang queue khác
      trigger Queue        input (không)        output Queue
  job theo lịch đọc Blob → tạo document Cosmos
      trigger Timer        input Blob           output Cosmos DB
  Event Grid → đọc Blob + Cosmos → gửi email
      trigger Event Grid   input Blob + Cosmos  output SendGrid</code></pre>
<pre><code>Loại trigger hay dùng
  HTTP · Timer (CRON) · Queue Storage · Service Bus (queue/topic)
  Event Grid · Event Hubs · Blob · Cosmos DB change feed</code></pre>
<div class="tip">Binding tiết kiệm rất nhiều code hạ tầng, nhưng <b>giấu mất chỗ xử lý lỗi</b>. Khi cần retry riêng, transaction, hoặc tự quyết định dead-letter, hãy <b>dùng SDK trực tiếp</b> thay cho output binding — chính tài liệu Microsoft cũng nói binding là tuỳ chọn, không bắt buộc.</div>
<h4 style="margin:14px 0 6px;font-size:14px">Durable Functions</h4>
<pre><code>Giải bài toán function thường KHÔNG làm được: quy trình CÓ TRẠNG THÁI

Khuôn                    Dấu hiệu trong đề
  Function chaining       "chạy nhiều bước theo thứ tự"
  Fan-out / fan-in        "chạy song song rồi GOM kết quả"
  Async HTTP API          "việc chạy lâu, trả về ngay rồi hỏi trạng thái sau"
  Monitor                 "kiểm tra định kỳ tới khi điều kiện xảy ra"
  Human interaction       "CHỜ PHÊ DUYỆT" (kèm timeout)</code></pre>
<div class="warn">Code trong <b>orchestrator</b> phải <b>tất định</b>: không gọi <code>DateTime.Now</code>, không random, không gọi I/O trực tiếp. Orchestrator được <b>chạy lại nhiều lần</b> để dựng lại trạng thái (event sourcing) — code không tất định sẽ cho kết quả khác nhau giữa các lần replay và hỏng cả quy trình. Mọi tác dụng phụ phải nằm trong <b>activity function</b>.</div>
</section>

<section id="x6">
<h3>3.6 API Management — tier, policy và gateway<a class="anch" href="#x6">#</a></h3>
<p>APIM đứng trước backend làm cổng: xác thực, giới hạn tốc độ, cache, biến đổi dữ liệu, gom nhiều API thành một mặt tiền.</p>
<pre><code>Nhóm tier
  Consumption   serverless, tự scale, tính theo lượt gọi
                KHÔNG developer portal · KHÔNG VNet · KHÔNG Entra integration
                KHÔNG built-in cache (chỉ external cache)
  Developer     ĐỦ tính năng để thử — nhưng KHÔNG CÓ SLA, cấm dùng production
  v1: Basic · Standard · Premium
  v2: Basic v2 · Standard v2 · Premium v2   (khởi tạo nhanh hơn nhiều)

Tính năng chỉ có ở một số tier
  multi-region deployment     CHỈ Premium (v1)
  self-hosted gateway         CHỈ Developer và Premium (v1)
  deploy vào VNet (injection) CHỈ Developer, Premium, Premium v2
  workspaces                  v2 và Premium
  availability zones          Premium và Premium v2
  autoscaling                 mọi tier TRỪ Consumption và Developer</code></pre>
<div class="warn"><b>Developer tier không có SLA</b> — nó dành cho đánh giá và phát triển. Đề mô tả "môi trường production cần cam kết uptime" mà đáp án là Developer thì chắc chắn sai.</div>
<h4 style="margin:14px 0 6px;font-size:14px">Policy — phần quan trọng nhất</h4>
<pre><code>Bốn giai đoạn, chạy theo đúng thứ tự này
  inbound    TRƯỚC khi tới backend   validate-jwt, rate-limit, rewrite-uri,
                                     set-header, cors, ip-filter, cache-lookup
  backend    lúc gọi backend         set-backend-service, retry, forward-request
  outbound   SAU khi backend trả về  set-body, xml-to-json, cache-store,
                                     xoá header nội bộ
  on-error   khi có lỗi bất kỳ       trả lỗi chuẩn hoá, KHÔNG lộ chi tiết nội bộ

Phạm vi áp dụng, từ rộng tới hẹp: global → workspace → product → API → operation
<base /> quyết định policy cấp trên được chèn vào CHỖ NÀO trong cấp dưới.</code></pre>
<div class="tip"><b>Hai policy giới hạn tốc độ rất dễ nhầm:</b><br>
<code>rate-limit</code> tính theo <b>subscription</b> — chặn theo khách hàng đã đăng ký.<br>
<code>rate-limit-by-key</code> tính theo <b>khoá bạn tự chọn</b> — IP, header, claim trong token.<br>
Muốn chặn theo <b>IP</b> hay theo <b>người dùng cuối</b> thì bắt buộc dùng cái thứ hai.</div>
<div class="warn"><b>Hai cơ chế bảo vệ khác nhau, đề hay trộn:</b> <b>product + subscription key</b> nhận diện <i>ứng dụng gọi</i>; <b><code>validate-jwt</code> với Entra ID</b> nhận diện <i>người dùng cuối</i>. Yêu cầu "phân quyền theo người dùng" thì subscription key không giải được.</div>
<p><b>Self-hosted gateway</b> chạy gateway của APIM dưới dạng container trong hạ tầng của bạn (on-prem hoặc cloud khác), nhưng vẫn quản lý tập trung từ Azure — dùng khi backend không được ra internet hoặc dữ liệu phải ở lại trong nước. Chỉ có ở Developer và Premium v1.</p>
</section>

<h2 class="dom">4. Domain 4 — Bảo mật, giám sát, xử lý sự cố (20–25%)</h2>

<section id="d4a">
<h3>4.1 Key Vault — retrieval, rotation và hai mô hình quyền<a class="anch" href="#d4a">#</a></h3>
<pre><code>Ba loại đối tượng
  Secrets       chuỗi bất kỳ: connection string, API key, mật khẩu
  Keys          khoá mã hoá — KHÔNG LẤY RA ĐƯỢC
                ký/xác minh/mã hoá/giải mã diễn ra BÊN TRONG vault
  Certificates  chứng chỉ, quản lý vòng đời và tự gia hạn
                (tạo cert thì tự sinh kèm một key và một secret)</code></pre>
<div class="warn"><b>Hai mô hình phân quyền song song — chọn MỘT:</b>
<ul>
<li><b>Access policy</b> (cũ) — cấp quyền từng principal ngay trên vault, không dùng được Azure RBAC, không kế thừa từ scope trên.</li>
<li><b>Azure RBAC</b> (khuyến nghị) — dùng role như <code>Key Vault Secrets User</code>, <code>Key Vault Secrets Officer</code>, quản lý tập trung, kế thừa được.</li>
</ul>
Vault đang ở chế độ RBAC mà bạn thêm access policy thì <b>không có tác dụng gì</b>, và ngược lại. Rất nhiều lỗi 403 xuất phát từ đúng chỗ này.</div>
<pre><code>Hai lớp quyền TÁCH BIỆT — nhầm lẫn kinh điển
  Control plane (Azure RBAC trên resource)
     tạo/xoá vault, đọc cấu hình, gán quyền
     role "Contributor" trên vault KHÔNG cho đọc secret
  Data plane
     đọc/ghi secret, key, certificate
     cần role data-plane riêng (Key Vault Secrets User…) hoặc access policy</code></pre>
<pre><code>Phiên bản secret
  .../secrets/db-password            → LUÔN lấy bản mới nhất
  .../secrets/db-password/abc123     → ghim đúng một phiên bản

Xoay vòng (rotation)
  tạo PHIÊN BẢN MỚI, không tạo secret mới
  app dùng URI KHÔNG phiên bản → tự nhận giá trị mới
  app ghim phiên bản           → phải deploy lại mới thấy</code></pre>
<div class="tip"><b>Soft delete LUÔN bật và không tắt được.</b> Thêm <b>purge protection</b> thì trong thời gian giữ (mặc định 90 ngày) <b>không ai xoá vĩnh viễn được</b>, kể cả chủ subscription. Đây là đáp án cho mọi yêu cầu dạng "chống xoá nhầm hoặc xoá ác ý". Lưu ý: bật purge protection rồi thì <b>không tắt lại được</b>.</div>
<pre><code>Khuôn xoay vòng tự động — nối ba dịch vụ của đề
  Key Vault phát sự kiện SecretNearExpiry
     → Event Grid định tuyến
        → Azure Function nhận, sinh credential mới ở hệ thống nguồn
           rồi ghi PHIÊN BẢN MỚI vào vault
  App dùng URI không phiên bản → tự nhận, không cần deploy</code></pre>
<div class="warn">Key Vault có <b>giới hạn tốc độ</b> ở mức vault. Đọc secret trong vòng lặp nóng sẽ bị throttle (HTTP 429). Cách đúng là <b>cache secret trong bộ nhớ</b> và chỉ nạp lại theo chu kỳ hoặc khi nhận sự kiện xoay vòng — đừng gọi vault mỗi request.</div>
</section>

<section id="d4b">
<h3>4.2 App Configuration — cấu hình và feature flag<a class="anch" href="#d4b">#</a></h3>
<p>Key Vault giữ <b>bí mật</b>; App Configuration giữ <b>cấu hình</b>. Nhồi cấu hình thường vào Key Vault là dùng sai công cụ và đắt hơn nhiều.</p>
<pre><code>Key–value có LABEL — cùng một khoá, nhiều môi trường
  AppName:DbTimeout   label=dev    → 30
  AppName:DbTimeout   label=prod   → 5
Đọc theo label khi khởi động, không phải tách file cấu hình cho từng môi trường.

Tham chiếu Key Vault: lưu URI của secret trong App Configuration,
SDK tự đi lấy giá trị thật — cấu hình một chỗ, bí mật vẫn nằm trong vault.</code></pre>
<pre><code>Feature flag   bật/tắt tính năng không cần deploy lại
               lọc theo phần trăm người dùng, theo nhóm, theo khoảng thời gian

Point-in-time snapshot   đọc lại cấu hình ở một thời điểm trong quá khứ
                         → rollback cấu hình mà không cần bản backup</code></pre>
<div class="warn">App Configuration <b>không tự đẩy</b> thay đổi vào app. Muốn app nhận cấu hình mới lúc đang chạy phải bật <b>dynamic refresh</b> với một <b>sentinel key</b>: app chỉ theo dõi khoá sentinel, đổi hết cấu hình xong mới đổi sentinel một lần — nhờ vậy tránh đọc phải trạng thái nửa vời.</div>
</section>

<section id="x7">
<h3>4.3 Microsoft Entra ID cho developer<a class="anch" href="#x7">#</a></h3>
<p>Không có gạch đầu dòng riêng nhưng thấm vào <b>mọi domain</b>: Key Vault, Cosmos, Storage, Service Bus, ACR đều nên truy cập bằng danh tính chứ không bằng connection string.</p>
<pre><code>Managed identity — danh tính do Azure cấp cho tài nguyên
                   KHÔNG có secret nào để lộ, không phải xoay vòng

  System-assigned   gắn chặt vào MỘT tài nguyên
                    tài nguyên bị xoá → danh tính cũng mất
                    chỉ tồn tại SAU KHI tài nguyên được tạo
                    dùng khi quan hệ 1–1

  User-assigned     là một tài nguyên Azure ĐỘC LẬP
                    gắn được cho NHIỀU tài nguyên cùng lúc
                    sống lâu hơn thứ dùng nó
                    dùng khi nhiều app chung một bộ quyền,
                    hoặc cần cấp quyền TRƯỚC khi tạo app</code></pre>
<div class="tip"><b>Bẫy thứ tự triển khai:</b> system-assigned identity chỉ tồn tại <b>sau khi</b> tài nguyên được tạo, nên không thể gán quyền cho nó trong <b>cùng một</b> lần deploy hạ tầng. Đề nêu <b>"cấp quyền sẵn rồi mới deploy app"</b> hoặc <b>"nhiều app dùng chung quyền"</b> → đáp án là <b>user-assigned</b>.</div>
<pre><code>DefaultAzureCredential — thứ tự thử danh tính
  1. biến môi trường (AZURE_CLIENT_ID / SECRET / TENANT_ID)
  2. Workload Identity        (AKS)
  3. Managed Identity         (App Service, Container Apps, Functions, VM)
  4. Azure CLI                ┐
  5. Azure PowerShell         ├─ CHỈ CÓ Ở MÁY DEV
  6. Azure Developer CLI      ┘</code></pre>
<div class="warn"><b>Đây là nguyên nhân số một của "chạy được ở máy, chết trên Azure".</b> Ở máy bạn nó dùng danh tính <code>az login</code>; trên Azure nó dùng managed identity — <b>hai danh tính khác nhau, hai bộ quyền khác nhau</b>. Lỗi 403 chỉ xuất hiện sau khi deploy gần như luôn là managed identity chưa được gán role.</div>
<div class="tip">Máy có <b>nhiều</b> user-assigned identity gắn vào thì <code>DefaultAzureCredential</code> <b>không đoán được</b> phải dùng cái nào — bắt buộc truyền <code>ManagedIdentityClientId</code>. Bỏ qua bước này là lỗi xác thực mơ hồ rất khó truy.</div>
<pre><code>Đăng ký ứng dụng (app registration) — khi cần danh tính KHÔNG gắn tài nguyên Azure
  Application (client) ID   định danh app
  Directory (tenant) ID     định danh tổ chức
  Client secret / certificate   → chứng chỉ an toàn hơn secret

  Quyền  Delegated      app hành động THAY MẶT người dùng đã đăng nhập
                        quyền thật = giao của quyền app và quyền NGƯỜI DÙNG
         Application    app hành động BẰNG CHÍNH NÓ, không có người dùng
                        (daemon, job nền) — cần admin consent</code></pre>
<div class="warn">Nhầm lẫn hay gặp: cấp <b>delegated permission</b> cho một job chạy nền không có người dùng đăng nhập — sẽ không bao giờ lấy được token. Job nền phải dùng <b>application permission</b>, hoặc tốt hơn là <b>managed identity</b> để khỏi giữ secret nào.</div>
</section>

<section id="d4c">
<h3>4.4 OpenTelemetry và KQL — hai gạch đầu dòng của Domain 4<a class="anch" href="#d4c">#</a></h3>
<p>Skills-measured ghi rõ: <i>"Trace distributed systems by using OpenTelemetry SDKs"</i> và <i>"Write KQL queries to analyze logs and metrics"</i>.</p>
<pre><code>Ba trụ của OpenTelemetry
  Traces   một request đi qua nhiều dịch vụ = một trace, gồm nhiều span
  Metrics  số đo tổng hợp theo thời gian
  Logs     bản ghi rời rạc, gắn được vào trace

Khái niệm PHẢI nắm
  TraceId       định danh chung cho CẢ hành trình, xuyên mọi dịch vụ
  SpanId        định danh một chặng
  Parent span   dựng nên cây gọi
  Context propagation   truyền TraceId qua ranh giới dịch vụ
                        chuẩn W3C: header  traceparent</code></pre>
<div class="warn">Lỗi kinh điển của tracing phân tán: <b>đứt context</b> khi đi qua hàng đợi. Gọi HTTP thì SDK tự truyền <code>traceparent</code>, nhưng đẩy message vào Service Bus rồi worker đọc ra thì <b>phải tự nhét TraceId vào application property của message</b> và khôi phục lại ở phía nhận — nếu không, mỗi bên thành một trace rời, và bạn mất đúng cái nhìn xuyên suốt mà mình cần.</div>
<p><b>KQL</b> — cú pháp là một chuỗi các bước nối bằng <code>|</code>:</p>
<pre><code>requests
| where timestamp > ago(1h)                  // LỌC TRƯỚC — luôn đặt sớm nhất
| where success == false
| summarize count() by name, bin(timestamp, 5m)
| order by count_ desc
| take 20</code></pre>
<pre><code>Toán tử hay dùng            Bảng hay tra
  where     lọc               requests      HTTP đến
  project   chọn cột          dependencies  gọi ra ngoài (DB, HTTP, queue)
  extend    thêm cột tính     exceptions    ngoại lệ
  summarize gom nhóm          traces        log ứng dụng
  join      nối bảng          customEvents  sự kiện tự ghi
  render    vẽ biểu đồ        AzureDiagnostics  log tài nguyên Azure</code></pre>
<div class="tip"><b>Luôn đặt <code>where</code> theo thời gian lên ĐẦU.</b> KQL xử lý tuần tự từ trên xuống, lọc sớm là giảm hẳn dữ liệu phải quét — khác biệt giữa truy vấn 2 giây và truy vấn timeout.</div>
<pre><code>Truy vấn hay cần trong thực tế
-- tỉ lệ lỗi theo thời gian
requests | summarize total=count(), failed=countif(success==false) by bin(timestamp,5m)
         | extend errorRate = 100.0*failed/total

-- độ trễ phân vị (p95 nói lên nhiều hơn trung bình)
requests | summarize percentiles(duration, 50, 95, 99) by name

-- lần theo một trace xuyên nhiều dịch vụ
union requests, dependencies, exceptions, traces
| where operation_Id == "&lt;trace-id&gt;"
| order by timestamp asc</code></pre>
</section>

<h2 class="dom">5. Dịch vụ AI — NGOÀI phạm vi thi AI-200</h2>

<section id="ai1">
<h3>5.1 Nói rõ trước: phần này KHÔNG có trong đề<a class="anch" href="#ai1">#</a></h3>
<div class="warn"><b>Study guide AI-200 không nhắc tên một dịch vụ AI nào.</b> Không Foundry, không Azure OpenAI, không AI Search, không Document Intelligence, không agent. AI-200 là bản thay thế AZ-204, và phần "AI" của nó nằm ở <b>vector search trong Cosmos DB, PostgreSQL/pgvector và Redis</b> — tức là mục 2 của skills-measured.</div>
<p>Vậy để đây làm gì? Vì thi xong bạn vẫn phải dựng RAG, gọi model, gắn agent, kiểm duyệt nội dung. Đang ôn thi mà thời gian gấp thì <b>bỏ qua nhóm 4 này</b>, quay lại sau.</p>
</section>

<section id="ai2">
<h3>5.2 Bản đồ đổi tên 2026 — đọc trước khi tra cứu<a class="anch" href="#ai2">#</a></h3>
<p>Mảng AI của Azure vừa đổi tên hàng loạt. Tài liệu cũ và phần lớn khoá học trên mạng vẫn dùng tên cũ, biết bảng này trước sẽ đỡ rối rất nhiều.</p>
<pre><code>Tên cũ                          Tên hiện tại
──────────────────────────      ──────────────────────────────────
Azure AI Studio
  → Azure AI Foundry            Microsoft Foundry   (từ 01/01/2026)
Azure OpenAI Service            Foundry Models
Azure AI Services
  (Cognitive Services)          Foundry Tools
Assistants API                  Foundry Agent Service
                                (nền Responses API)
Hub-based projects              Foundry projects
                                (bản cũ xem ở "Foundry classic")</code></pre>
<ul>
<li><b>Foundry Models</b> nay có hơn <b>10.000 model</b> của Microsoft, OpenAI, Anthropic, Meta, Cohere, DeepSeek, xAI — không còn riêng OpenAI.</li>
<li>Có đường nâng cấp resource Azure OpenAI → Foundry resource <b>giữ nguyên endpoint và API key</b>, nên không phải sửa code.</li>
</ul>
<div class="warn"><b>Assistants API đã khai tử hẳn ngày 26/08/2026.</b> Đây là hard retirement, không phải cảnh báo — code production còn gọi nó là ngừng chạy. Thay bằng Foundry Agent Service.</div>
<div class="warn"><b>Sáu dịch vụ đã khai tử</b>, đừng bắt đầu dự án mới: <b>LUIS</b>, <b>QnA Maker</b>, <b>Personalizer</b>, <b>Anomaly Detector</b>, <b>Content Moderator</b>, <b>Metrics Advisor</b>. Khoá học nào còn dạy LUIS hay QnA Maker là đã quá cũ.</div>
</section>

<section id="ai3">
<h3>5.3 Kiến trúc Microsoft Foundry<a class="anch" href="#ai3">#</a></h3>
<p>Foundry gom <b>agent, model và tool</b> vào chung một Azure resource, dùng chung RBAC, networking và policy — thay vì mỗi dịch vụ AI một resource với một bộ quyền riêng như trước.</p>
<pre><code>Agents         model + chỉ dẫn + công cụ, tự suy luận và hành động
Models         catalog 10.000+ model
Tools/knowledge công cụ dựng sẵn, memory (preview), truy hồi dữ liệu
Observability  trace, evaluation, dashboard
Control plane  Entra ID, RBAC, content filter, cô lập mạng, Policy</code></pre>
<pre><code>Bề mặt làm việc          Hợp khi
──────────────────       ─────────────────────────────────────
Foundry portal           dò model, thử prompt, dựng prompt agent
SDK (Py/C#/JS/Java)      viết ứng dụng thật
Azure Developer CLI      scaffold + deploy hosted agent
VS Code extension        dựng và debug agent trong editor
MCP + Foundry Skill      điều khiển Foundry từ coding agent</code></pre>
<div class="tip">Đường đi thực dụng: prototype trong portal → chuyển sang SDK khi logic phức tạp lên. Không phải chọn dứt khoát từ đầu.</div>
</section>

<section id="ai4">
<h3>5.4 Chọn model trong catalog 10.000+<a class="anch" href="#ai4">#</a></h3>
<p>Nhiều lựa chọn quá thì tiêu chí chọn quan trọng hơn danh sách.</p>
<ul>
<li><b>Năng lực</b> — cần suy luận nhiều bước hay chỉ phân loại/rút trích? Model suy luận đắt và chậm hơn nhiều lần, đừng dùng cho việc model nhỏ làm được.</li>
<li><b>Độ dài ngữ cảnh</b> — quyết định nhồi được bao nhiêu tài liệu vào prompt, ảnh hưởng thẳng tới thiết kế RAG.</li>
<li><b>Giá và quota</b> — tính theo token vào/ra. <b>Quota theo vùng</b> mới là thứ hay chặn production, không phải giá.</li>
<li><b>Kiểu triển khai</b> — serverless (trả theo lượng dùng) khác <b>managed compute</b> (trả theo giờ máy, kể cả lúc rảnh).</li>
</ul>
<div class="warn">Bẫy chi phí kinh điển: deploy model lên <b>managed compute</b> để thử rồi quên xoá. Serverless không dùng thì không mất tiền; managed compute tính tiền theo giờ chạy.</div>
<div class="tip">Portal có <b>model benchmarks</b> để so chất lượng / chi phí / độ trễ trên cùng tác vụ — dùng nó thay vì chọn theo model đang hot.</div>
</section>

<section id="ai5">
<h3>5.5 Agent Service — prompt agent vs hosted agent<a class="anch" href="#ai5">#</a></h3>
<p>Quyết định kiến trúc quan trọng nhất khi bắt đầu dự án Foundry. Đây là <b>dải liên tục</b> từ khai báo tới toàn quyền code.</p>
<pre><code>                  Prompt agent              Hosted agent
bạn đưa vào       chỉ dẫn + model + tool    code của bạn, đóng container
ai chạy           Foundry chạy hộ           Foundry chạy container bạn,
                  không có app để nuôi      cấp endpoint, scaling,
                                            identity, observability
framework         không                     Microsoft Agent Framework,
                                            LangGraph, Semantic Kernel
hợp khi           logic diễn đạt được       cần kiểm soát luồng, thư viện
                  bằng chỉ dẫn + tool sẵn   riêng, logic không nhét vào
                                            prompt được</code></pre>
<div class="tip">Bắt đầu bằng <b>prompt agent</b>, chuyển sang hosted khi chạm giới hạn. Và nếu chỉ cần gửi prompt nhận trả lời thì <b>không cần agent nào cả</b> — gọi thẳng model.</div>
</section>

<section id="ai6">
<h3>5.6 Tools, knowledge và MCP<a class="anch" href="#ai6">#</a></h3>
<p>Agent chỉ hữu ích khi <b>làm được gì đó ngoài việc nói</b>. Foundry gắn năng lực đó qua <b>tool catalog</b>.</p>
<ul>
<li><b>Tool dựng sẵn</b> — tìm kiếm file, gọi API, truy hồi dữ liệu, chạy code.</li>
<li><b>Memory</b> (preview) — nhớ qua nhiều lượt hội thoại.</li>
<li><b>MCP (Model Context Protocol)</b> — chuẩn mở cắm nguồn dữ liệu và công cụ vào agent. Foundry vừa <b>tiêu thụ</b> MCP server (agent gọi ra ngoài), vừa <b>cung cấp</b> MCP server (coding agent điều khiển Foundry).</li>
</ul>
<div class="tip">Điểm hay của MCP: công cụ viết một lần dùng được cho cả agent trong Foundry lẫn coding agent trên máy. Nên bọc tích hợp nội bộ thành MCP server thay vì viết tool riêng cho từng nền tảng.</div>
</section>

<section id="ai7">
<h3>5.7 Observability — đo chất lượng đầu ra<a class="anch" href="#ai7">#</a></h3>
<p>Hệ thống AI hỏng theo kiểu khác phần mềm thường: không crash, chỉ <b>trả lời sai một cách trôi chảy</b>. Nên đo là bắt buộc, không phải tuỳ chọn.</p>
<pre><code>Nhóm evaluator dựng sẵn
  General purpose      mạch lạc, trôi chảy, hợp yêu cầu
  Textual similarity   so với đáp án chuẩn
  RAG                  chất lượng truy hồi + mức bám nguồn  ← quan trọng nhất
  Risk and safety      nội dung độc hại
  Agent                gọi đúng tool chưa, đi đúng ý định chưa
  Rubric / AOAI graders chấm theo thang tiêu chí tự định nghĩa</code></pre>
<div class="warn">Sai lầm thường gặp: chỉ nhìn "câu trả lời nghe có hợp lý không". Với RAG câu hỏi đúng là <b>"câu trả lời này có nằm trong tài liệu đã truy hồi không"</b> — đó là <b>groundedness</b>. Nghe hợp lý mà không có trong nguồn thì chính là ảo giác.</div>
<p>Ngoài evaluator còn có <b>tracing</b> ghi lại từng bước gọi model / gọi tool / truy hồi — không có nó thì debug agent gần như bất khả thi. Có cả <b>AI red teaming agent</b> tự dò lỗ hổng an toàn.</p>
</section>

<section id="ai8">
<h3>5.8 Foundry Tools — các dịch vụ AI cổ điển<a class="anch" href="#ai8">#</a></h3>
<pre><code>Đang dùng được
  Speech                 nói↔chữ, dịch, nhận diện người nói
  Translator             dịch 100+ ngôn ngữ
  Language               hiểu ngôn ngữ tự nhiên
  Content Understanding  phân tích nội dung đa phương tiện (mới)
  Document Intelligence  rút dữ liệu từ tài liệu/biểu mẫu
  Vision                 phân tích ảnh và video
  Azure AI Search        tìm kiếm có AI
  Content Safety         phát hiện nội dung độc hại
  Custom Vision          nhận diện ảnh theo nghiệp vụ riêng
  Immersive Reader       hỗ trợ đọc hiểu

Đã khai tử — KHÔNG dùng cho dự án mới
  Anomaly Detector · Content Moderator · LUIS
  Metrics Advisor · Personalizer · QnA Maker</code></pre>
<div class="tip">Mọi Foundry Tools đều có <b>tier miễn phí <code>F0</code></b> để thử. Giá tính theo số transaction, và mỗi tier giới hạn <b>TPS</b> — vượt là bị chặn hoặc tính thêm.</div>
</section>

<section id="ai9">
<h3>5.9 Document Intelligence và Content Understanding<a class="anch" href="#ai9">#</a></h3>
<p>Hai dịch vụ này giải cùng một bài toán "biến tài liệu thành dữ liệu" nhưng bằng hai cách khác nhau — chọn sai là tốn tiền hoặc mất độ chính xác.</p>
<pre><code>Document Intelligence     rút trích TẤT ĐỊNH, độ chính xác cao
                          hợp tài liệu CÓ CẤU TRÚC
Content Understanding     analyzer chạy bằng LLM
                          hợp nội dung PHỨC TẠP, KHÔNG cấu trúc,
                          đa phương tiện</code></pre>
<pre><code>Ba nhóm model của Document Intelligence
  Document analysis   Read    — rút chữ in và chữ viết tay
                      Layout  — rút chữ + BẢNG + cấu trúc tài liệu
  Prebuilt            hoá đơn, biên lai, CMND/hộ chiếu, danh thiếp…
  Custom              tự huấn luyện cho biểu mẫu riêng của bạn</code></pre>
<div class="warn"><b>Phiên bản API</b> — dùng <b>v4.0 (2024-11-30)</b> cho mọi thứ mới. Lịch hết hỗ trợ: <b>v2.1 ngày 15/09/2027</b>, <b>v3.0 ngày 30/03/2029</b>.</div>
<div class="tip">Cần rút <b>bảng</b> ra khỏi PDF để đưa vào RAG thì dùng <b>Layout</b>, không phải Read. Read chỉ cho chữ, mất hết cấu trúc bảng — và bảng mất cấu trúc thì chunk ra vô nghĩa.</div>
</section>

<section id="ai10">
<h3>5.10 Content Safety — lá chắn cho hệ thống sinh nội dung<a class="anch" href="#ai10">#</a></h3>
<pre><code>An toàn AI và bảo vệ prompt
  Prompt Shields          phát hiện tấn công prompt injection / jailbreak
  Groundedness detection  câu trả lời có bám tài liệu nguồn không (preview)
  Protected material      phát hiện nội dung có bản quyền đã biết
                          (lời bài hát, bài báo, công thức…)
  Task adherence          agent dùng tool có lệch ý định / quá sớm không

Phân tích nội dung
  Analyze text / image    4 nhóm: sexual, violence, hate, self-harm
                          mỗi nhóm có nhiều MỨC ĐỘ nghiêm trọng

Tự định nghĩa
  Custom categories       standard: tự huấn luyện nhóm riêng (preview)
                          rapid:    bắt mẫu độc hại mới nổi (preview)</code></pre>
<div class="tip">Chỗ đặt lá chắn: <b>Prompt Shields ở đầu vào</b> (chặn injection trước khi tới model), <b>Groundedness và Protected material ở đầu ra</b> (kiểm trước khi trả cho người dùng). Nhiều hệ thống chỉ lọc một chiều rồi tưởng đã an toàn.</div>
<p><b>Task adherence</b> là thứ mới và đáng chú ý với hệ thống agent: nó phát hiện agent gọi tool <b>sai ý định hoặc quá sớm</b> — dạng lỗi mà content filter thường không bắt được vì nội dung chẳng có gì độc hại cả.</p>
</section>

<section id="ai11">
<h3>5.11 Azure AI Search — vector, hybrid và filter<a class="anch" href="#ai11">#</a></h3>
<p>Đây là xương sống truy hồi của phần lớn hệ RAG trên Azure. Vector search khớp theo <b>ý nghĩa</b> chứ không theo mặt chữ, nên bắt được cả "dog" ↔ "canine", "dog" ↔ "hund", và cả chữ ↔ ảnh.</p>
<pre><code>Các kiểu truy vấn
  Similarity search   mã hoá truy vấn thành vector, tìm vector gần nhất
  Hybrid search       CHẠY SONG SONG vector + từ khoá trong CÙNG request,
                      rồi trộn và xếp hạng lại   ← mặc định nên dùng
  Multimodal          nhúng chữ và ảnh vào cùng không gian vector
  Filtered vector     vector query + filter expression trên field
                      text/số — chính là "metadata filter" của RAG</code></pre>
<div class="tip"><b>Hybrid gần như luôn tốt hơn thuần vector.</b> Vector bắt ý nghĩa nhưng trượt mã sản phẩm, tên riêng, số hiệu — những thứ tìm theo từ khoá lại rất chuẩn. Chạy cả hai rồi trộn là cách rẻ nhất để tăng chất lượng truy hồi.</div>
<div class="warn">Field vector <b>không filter được</b>. Muốn lọc theo metadata phải khai một field <b>text hoặc số</b> riêng và đánh dấu <code>filterable</code>. Engine có thể lọc <b>trước hoặc sau</b> khi chạy vector query — thứ tự này ảnh hưởng cả tốc độ lẫn số kết quả thu về.</div>
<p><b>Integrated vectorization</b> — AI Search tự chunk và tự gọi model nhúng ngay trong indexer pipeline, bạn chỉ cần cấp endpoint. Đỡ phải tự viết pipeline chunk + embed + upsert, nhưng đổi lại ít quyền kiểm soát cách chunk.</p>
</section>

<section id="ai12">
<h3>5.12 Agentic retrieval và RAG trên Foundry<a class="anch" href="#ai12">#</a></h3>
<p><b>Agentic retrieval</b> là bước tiến so với RAG cổ điển: thay vì một truy vấn một lần, agent tự chia nhỏ câu hỏi, truy hồi nhiều vòng từ nhiều nguồn rồi tổng hợp.</p>
<pre><code>Knowledge source cắm được vào agentic retrieval
  search index · blob · file · web
  Azure SQL · OneLake · Fabric data agent · Fabric ontology
  SharePoint (đã index / từ xa) · MCP server</code></pre>
<pre><code>Vòng đời RAG trên Foundry
  1. Chuẩn bị dữ liệu   tổ chức và CHUNK tài liệu
  2. Dựng index         AI Search index hoặc dịch vụ truy hồi khác
  3. Nối vào Foundry    tạo connection từ project tới index
  4. Dựng ứng dụng      ghép truy hồi với lời gọi model qua SDK
  5. Test và đánh giá   kiểm chất lượng truy hồi + độ bám nguồn + trích dẫn</code></pre>
<p><b>Ba hướng khi cần model biết dữ liệu riêng</b> — chọn sai là tốn tiền vô ích:</p>
<pre><code>RAG           dữ liệu riêng, hay thay đổi, cần trích dẫn nguồn
              → mặc định chọn cái này
Fine-tuning   cần đổi HÀNH VI, giọng văn, cách làm một tác vụ
              KHÔNG phải để nhồi kiến thức mới
Agent tool    đang xây agent và truy hồi chỉ là một công cụ của nó</code></pre>
<div class="warn">Hiểu lầm phổ biến nhất: fine-tune để "dạy" model dữ liệu công ty. Fine-tune đổi <b>cách nói</b>, không đáng tin để <b>nhớ sự kiện</b>, và dữ liệu đổi là phải huấn luyện lại. Cần model biết dữ liệu mới thì gần như luôn là <b>RAG</b>.</div>
<p class="src"><b>Nguồn nhóm 4:</b> <a href="https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry" target="_blank" rel="noopener">What is Microsoft Foundry</a> · <a href="https://learn.microsoft.com/en-us/azure/ai-services/what-are-ai-services" target="_blank" rel="noopener">What are Foundry Tools</a> · <a href="https://learn.microsoft.com/en-us/azure/search/vector-search-overview" target="_blank" rel="noopener">Vector search in Azure AI Search</a> · <a href="https://learn.microsoft.com/en-us/azure/ai-services/content-safety/overview" target="_blank" rel="noopener">Content Safety</a> — đọc ngày 26/08/2026.</p>
</section>
`,u=t({__name:"Ai200ServicesPage",setup(o){return(r,a)=>(c(),e(n,{certId:"ai200",html:i(h),title:"AI-200 · Dịch vụ Azure",subtitle:"36 mục — soạn từ 16 link tài liệu chính thức của study guide, xếp theo 4 domain",practiceRoute:"/ai-200/practice",practiceLabel:"Luyện thi AI-200",extraLinks:[{to:"/ai-200/documents",label:"Tài liệu chính"}]},null,8,["html"]))}});export{u as default};
