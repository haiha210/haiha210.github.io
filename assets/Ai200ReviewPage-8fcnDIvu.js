import{_ as n}from"./NotesPage.vue_vue_type_script_setup_true_lang-CTykfVF5.js";import{d as e,f as t,e as i,o}from"./index-DGuoSFX7.js";import"./ThemeToggle.vue_vue_type_script_setup_true_lang-CvkkoMeO.js";import"./useStudyClock-BeBca3qb.js";const c=`<div class="warn">Danh sách gộp từ tài liệu, khóa AI-200T00 và 27 bài assessment trên Microsoft Learn. Chữ <b>đậm</b> sau "→" là đáp án của dạng câu hay gặp; ⚠ là đáp án chưa chắc chắn. Chi tiết và code xem ở <a href="/ai-200/documents">tài liệu chính</a>.</div>
<h2 class="dom">1. Container (20–25%)</h2>
<section id="r1-1">
<h3>1.1 Azure Container Registry (ACR)<a class="anch" href="#r1-1">#</a></h3>
<ul>
<li><strong>Cấu trúc</strong><ul>
<li>Registry → repository (namespace) → artifact: image, manifest, tag, digest; chứa được cả OCI artifact như Helm chart</li>
<li>Tên image đầy đủ: <code>myacr.azurecr.io/ai/rag-api:1.2.0</code>; tên registry 5–50 ký tự chữ/số, duy nhất toàn cầu</li>
<li>Namespace bằng dấu <code>/</code> (<code>production/inference-api</code>, <code>ml-team/model-server</code>): gom nhóm và phân quyền push theo đội</li>
<li>3 SKU Basic / Standard / Premium; geo-replication, private endpoint, retention policy <strong>chỉ có ở Premium</strong><ul>
<li>Premium còn có: content trust (image signing), customer-managed key, repository-scoped token, zone redundancy, connected registry</li>
</ul>
</li>
</ul>
</li>
<li><strong>Premium: geo-replication và private link</strong><ul>
<li>Deploy nhiều region, pull từ region gần nhất với một tên registry → <strong>Premium + geo-replication</strong> (<code>az acr replication create</code>), không tạo 3 registry<ul>
<li>Geo-replication: một endpoint, webhook theo từng region</li>
</ul>
</li>
<li>Registry chỉ truy cập qua VNet → <strong>Premium + Private Link</strong>; bật dedicated data endpoint để firewall whitelist được data-plane<ul>
<li>Tắt public (<code>--public-network-enabled false</code>) thì <code>az acr build</code> không chạy được nữa, trừ khi dùng <strong>dedicated agent pool</strong></li>
</ul>
</li>
<li>Hạ SKU từ Premium: phải xoá geo-replication và connected registry trước, dung lượng phải vừa giới hạn SKU mới</li>
</ul>
</li>
<li><strong>Xác thực</strong><ul>
<li>Admin user mặc định tắt, không dùng cho production; thấy admin user trong phương án production → sai</li>
<li>Nên dùng managed identity + role <strong>AcrPull</strong> (đẩy image dùng AcrPush); service principal cho CI ngoài Azure; repository-scoped token (Premium) khi cần quyền theo repo; admin user xếp cuối<ul>
<li>AcrPull đủ để chạy; <strong>AcrPush chỉ cấp cho pipeline CI</strong></li>
</ul>
</li>
<li><code>az acr login</code> để Docker ở máy local đăng nhập (dùng token Entra ID)</li>
<li>Copy image giữa registry không cần docker pull/push → <strong><code>az acr import</code></strong></li>
</ul>
</li>
<li><strong>ACR Tasks</strong><ul>
<li>Build image trong môi trường kiểm soát, máy CI không cần Docker → <strong>quick task <code>az acr build</code></strong></li>
<li><strong>Trigger</strong><ul>
<li>Trigger: source commit, <strong>base image update</strong> (tự rebuild khi base image có bản vá), timer</li>
<li>Base image vá CVE → image của bạn tự build lại → bật <code>--base-image-trigger-enabled</code> trên <code>az acr task create</code></li>
<li>Base image trigger nhận base ở cùng registry, Docker Hub hoặc registry public; base private thì nên để <strong>cùng registry</strong> với image app</li>
<li>Source trigger cần <strong>PAT</strong> để ACR tạo webhook trên repo; cất PAT trong Key Vault</li>
<li>Scheduled task: <code>--schedule</code> cú pháp cron; <code>az acr task run</code> chạy tay, <code>az acr task logs</code> xem log</li>
</ul>
</li>
<li><strong>Multi-step và acr run</strong><ul>
<li>Multi-step task: file YAML chạy bằng <code>az acr run</code>, <code>{{.Run.ID}}</code> làm tag; build context là thư mục local, Git URL hoặc tarball</li>
<li>Multi-step YAML: <code>build</code> → <code>cmd</code> (chạy chính image vừa build để test, vd pytest) → <code>push</code>; có <code>when</code> để chạy song song</li>
<li>Biến run: <code>{{.Run.ID}}</code>, <code>{{.Run.Date}}</code> tạo tag duy nhất; <code>{{.Run.Registry}}</code> là login server</li>
<li>Build context <code>/dev/null</code> = không upload source, chỉ chạy image có sẵn hoặc <code>acr purge</code></li>
<li>Kiểm tra image có đúng phiên bản Python mà máy CI không có Docker → <strong><code>az acr run --cmd '... python --version' /dev/null</code></strong> (acr run chạy lệnh, acr build build image)</li>
</ul>
</li>
</ul>
</li>
<li><strong>Tag và phiên bản</strong><ul>
<li>Tag mặc định mutable: push lại cùng tag là ghi đè; push/pull không ghi tag → <code>latest</code></li>
<li>Stable tag (<code>v1</code>, <code>latest</code>) bị push đè; production dùng <strong>tag duy nhất</strong> (build ID, <strong>Git commit SHA</strong> để truy vết và rollback) hoặc <strong>digest</strong><ul>
<li>Mọi node chạy đúng một bản dù tag bị push đè → tham chiếu bằng <strong>digest</strong></li>
<li>Unique tag và digest bổ sung cho nhau; lấy digest: <code>az acr manifest show-metadata ... --query digest</code></li>
</ul>
</li>
<li>Semver: <code>:1</code> = bản 1.x.x mới nhất, <code>:1.1</code> = 1.1.x mới nhất (stable); <code>:1.1.0</code> không bao giờ đổi (unique)<ul>
<li>Stable tag hợp với base image (để bản vá chảy xuống), unique tag hợp với production</li>
</ul>
</li>
</ul>
</li>
<li><strong>Bảo vệ và dọn kho</strong><ul>
<li><strong>Image lock</strong><ul>
<li>Chống xoá nhầm image → <strong>image lock</strong> (<code>--write-enabled false</code>); 4 thuộc tính <code>write/delete/read/list-enabled</code>, không nhầm với resource lock của ARM</li>
<li>Lệnh: <code>az acr repository update --image repo:tag</code> (hoặc <code>repo@sha256:...</code>, hoặc <code>--repository</code> cả repo)</li>
<li>Đặt resource lock (<code>az lock</code>) để image không bị xoá → <strong>sai</strong>, nó chỉ chặn thao tác quản trị registry</li>
<li><code>--write-enabled false</code> đã chặn cả ghi đè lẫn xoá; <code>--delete-enabled false</code> vẫn cho cập nhật nhưng cấm xoá; <code>read</code> chặn pull; <code>list</code> ẩn khỏi danh sách</li>
<li>Khoá tag và khoá manifest quản lý riêng: mở khoá theo tag mà vẫn không xoá được → <strong>còn khoá ở manifest, mở bằng <code>repo@digest</code></strong></li>
</ul>
</li>
<li><strong>Purge</strong><ul>
<li><code>acr purge</code> (<code>--filter</code>, <code>--ago</code>, <code>--keep</code>, <code>--untagged</code>) chạy theo lịch bằng ACR Task; retention policy chỉ xoá manifest untagged (Premium)</li>
<li>Purge định kỳ: <code>az acr task create --cmd "acr purge ..." --schedule "0 0 * * 0" --context /dev/null</code></li>
<li><code>acr purge --include-locked</code> tự mở khoá rồi xoá → khoá không cản được purge có cờ này</li>
</ul>
</li>
<li><strong>Retention</strong><ul>
<li>Retention: <code>az acr config retention update --type UntaggedManifests --days 30</code>; Premium, đang preview, mặc định 7 ngày, đặt 0–365 (0 = xoá ngay)</li>
<li>Bật retention 30 ngày mà dung lượng không giảm → <strong>policy chỉ áp manifest mất tag sau khi bật</strong>, rác cũ không bị đụng</li>
<li>Retention chỉ áp manifest Docker; manifest OCI → dọn bằng <code>acr purge</code></li>
<li>Manifest <code>delete-enabled=false</code> được miễn retention → khoá và retention sống chung được</li>
<li>Hệ thống deploy bằng <strong>digest</strong> thì đừng bật retention untagged (manifest bị xoá → pull hỏng), dùng unique tag</li>
</ul>
</li>
</ul>
</li>
<li><strong>Triển khai ACR từng bước</strong><ul>
<li>Thứ tự: tạo registry (<code>--admin-enabled false</code>) → đưa image lên → cấp AcrPull cho identity nơi chạy → (Premium) khoá mạng + geo-replication</li>
<li>Kiểm tra: <code>az acr repository show-tags</code>; AKS → <strong><code>az aks check-acr</code></strong> xác nhận node pull được</li>
</ul>
</li>
</ul>
</section>
<section id="r1-2">
<h3>1.2 App Service cho container<a class="anch" href="#r1-2">#</a></h3>
<ul>
<li><strong>Deploy và runtime</strong><ul>
<li><strong>Tạo app và image</strong><ul>
<li>Plan Linux (<code>--is-linux</code>) → <code>az webapp create --container-image-name</code>; đổi image bằng <code>az webapp config container set</code> (tự restart và pull)</li>
<li>Image source: ACR (khuyến nghị production) hoặc Other container registries (Docker Hub, GHCR, registry HTTPS hỗ trợ Docker Registry API V2) với <code>--docker-registry-server-url/user/password</code></li>
</ul>
</li>
<li><strong>Pull bằng managed identity</strong><ul>
<li>Pull từ ACR bằng managed identity: bật <code>acrUseManagedIdentityCreds</code> + gán AcrPull<ul>
<li>Đường tắt lúc tạo: <code>--acr-use-identity --acr-identity '[system]'</code></li>
<li>Đã gán AcrPull mà pull vẫn unauthorized → <strong>quên bật <code>acrUseManagedIdentityCreds</code></strong></li>
</ul>
</li>
<li>User-assigned identity để pull → đặt thêm <strong><code>acrUserManagedIdentityID</code></strong> (client ID); user-assigned dùng chung nhiều app, cấp quyền trước khi tạo app được</li>
<li>Pull bằng identity lỗi "token validation failed" → registry đã tắt <strong>token audience ARM</strong> (<code>az acr config authentication-as-arm</code>)</li>
</ul>
</li>
<li><strong>Cổng</strong><ul>
<li>App nghe cổng khác 80 (vd 8000) → <strong><code>WEBSITES_PORT=8000</code></strong>; container không lên thường do thiếu biến này</li>
<li>Tự route cổng 80 và 8080; chỉ expose một cổng HTTP; TLS kết thúc ở platform, container chỉ nhận HTTP</li>
<li>Lỗi "container didn't respond to HTTP pings" → gần như luôn <strong>sai <code>WEBSITES_PORT</code></strong></li>
</ul>
</li>
<li><strong>Lưu trữ /home</strong><ul>
<li>File mất sau restart → <strong><code>WEBSITES_ENABLE_APP_SERVICE_STORAGE=true</code></strong> và ghi vào <code>/home</code></li>
<li><code>/home</code> mặc định tắt với Linux custom container; bật thì bền qua restart, dùng chung mọi instance, log ở <code>/home/LogFiles</code>, quota chung cả plan</li>
<li>Cần dung lượng lớn / I/O cao → mount thêm Azure Storage, đừng dựa vào quota <code>/home</code></li>
</ul>
</li>
<li><strong>Always On, health, slot</strong><ul>
<li>Startup command, Always On, health check path; webhook cho continuous deployment</li>
<li>Startup command (<code>--startup-file</code>) <strong>thay CMD</strong>, giữ ENTRYPOINT; cần chuỗi <code>&amp;&amp;</code> → bọc <code>/bin/bash -c '...'</code></li>
<li>App ngủ sau ~20 phút không có request; request đầu sau giờ nghỉ chậm → <strong>bật Always On</strong> (không phải tăng SKU); Always On cần tier Basic trở lên</li>
<li>Health check ping mỗi 1 phút, mặc định fail 10 lần thì gỡ instance khỏi load balancer; đổi cấu hình health check làm app restart<ul>
<li><code>/healthz</code> trả 200 mà health check vẫn fail → <strong>health check path cấu hình lệch</strong></li>
</ul>
</li>
<li>Deployment slot cần tier <strong>Standard trở lên</strong>; swap để zero-downtime</li>
</ul>
</li>
</ul>
</li>
<li><strong>Khi nào App Service pull lại image</strong><ul>
<li>Deploy lần đầu / đổi image reference → pull đủ layer; restart → chỉ pull layer đổi; scale out → instance mới tự pull; đổi pricing tier → có thể pull lại từ đầu</li>
<li>Push image mới đè cùng tag (<code>latest</code>) mà app vẫn chạy bản cũ → <strong>restart tay hoặc bật continuous deployment (webhook)</strong><ul>
<li>CD bằng CLI: <code>az webapp deployment container config --enable-cd true</code> trả webhook URL, <strong>phải tự tạo <code>az acr webhook create --actions push</code></strong>; làm trên Portal thì webhook được tạo sẵn</li>
</ul>
</li>
</ul>
</li>
<li><strong>App settings và secret</strong><ul>
<li><strong>Biến môi trường</strong><ul>
<li>App settings được inject thành biến môi trường; connection string có tiền tố như <code>CUSTOMCONNSTR_</code><ul>
<li>Prefix: <code>SQLCONNSTR_</code>, <code>SQLAZURECONNSTR_</code>, <code>MYSQLCONNSTR_</code>, <code>POSTGRESQLCONNSTR_</code>, <code>CUSTOMCONNSTR_</code></li>
<li>App Python đọc <code>os.environ["DefaultConnection"]</code> không thấy → <strong>biến thật là <code>SQLAZURECONNSTR_DefaultConnection</code></strong>; Python/Node nên dùng app setting thường</li>
</ul>
</li>
<li>Tên setting chỉ chữ, số, <code>_</code>; key lồng <code>:</code> của .NET đổi thành <code>__</code> trên Linux</li>
</ul>
</li>
<li><strong>Slot setting</strong><ul>
<li>Giá trị không được đi theo khi swap slot (vd URL staging) → <strong>slot setting</strong></li>
<li>Slot setting: <code>--slot-settings</code>; nên dùng cho định danh môi trường, endpoint riêng, feature flag, log verbose; setting chứa Key Vault reference cũng thường là slot setting (vault riêng mỗi môi trường)</li>
</ul>
</li>
<li><strong>Key Vault reference</strong><ul>
<li>Key Vault reference <code>@Microsoft.KeyVault(SecretUri=...)</code> hoặc <code>(VaultName=...;SecretName=...)</code>, cần managed identity + <strong>Key Vault Secrets User</strong><ul>
<li>Vault dùng access policy → quyền <strong>Get</strong> trên secrets</li>
</ul>
</li>
<li>Mặc định dùng system-assigned identity; cần secret ngay lúc tạo app (chưa có system identity) → user-assigned + <strong><code>keyVaultReferenceIdentity</code></strong></li>
<li>Xoay secret mà app dùng giá trị cũ vài giờ → <strong>đúng thiết kế</strong>: reference không version được cache, tải lại mỗi <strong>24 giờ</strong>; muốn nhận ngay → restart hoặc đổi một cấu hình bất kỳ<ul>
<li>Reference có ghi version → bị ghim, không bao giờ xoay theo</li>
</ul>
</li>
<li>Resolve lỗi → app nhận nguyên chuỗi <code>@Microsoft.KeyVault(...)</code>; xem ở Edit reference hoặc detector Key Vault Application Settings Diagnostics</li>
<li>Vault chặn mạng → cho phép subnet của VNet integration, không dựa IP outbound; Linux nối private endpoint cần <code>vnetRouteAllEnabled</code></li>
</ul>
</li>
</ul>
</li>
<li><strong>Chẩn đoán</strong><ul>
<li><code>az webapp log tail</code> / log stream, Kudu (SCM), SSH vào container, diagnostic settings → Log Analytics<ul>
<li>Lưu stdout/stderr vào <code>/home/LogFiles</code> → <code>az webapp log config --docker-container-logging filesystem</code></li>
<li>Log category: <code>AppServiceConsoleLogs</code> (stdout/stderr), <code>AppServiceHTTPLogs</code>, <code>AppServicePlatformLogs</code> (vòng đời container), <code>AppServiceAppLogs</code></li>
</ul>
</li>
<li>Kiểm tra app settings đã vào container chưa → <strong>Kudu, trang Environment</strong><ul>
<li>Kudu không chạy chung môi trường với container → không duyệt toàn bộ file system, không xem tiến trình bên trong</li>
</ul>
</li>
<li>Shell vào container đang chạy → <strong>SSH</strong>: image cài <code>openssh-server</code>, cổng <strong>2222</strong>, mật khẩu root <strong><code>Docker!</code></strong>, sshd chạy song song app</li>
<li>Container chạy nhưng trả 404 → app bind <code>localhost</code> thay vì <code>0.0.0.0</code>, sai cổng hoặc route không khớp</li>
</ul>
</li>
<li><strong>Sidecar</strong><ul>
<li><strong>Mô hình sitecontainers</strong><ul>
<li>Thành phần AI gắn chặt với app (model server nhỏ, OTel collector) phải start/stop/scale cùng API → <strong>sidecar</strong>; chỉ Linux</li>
<li>Một app: 1 container main + <strong>tối đa 9 sidecar</strong>; traffic HTTP từ ngoài chỉ vào main</li>
<li>Mô hình sitecontainers: API là <strong><code>isMain: true</code></strong>, sidecar <code>false</code>; gọi nhau qua <code>localhost</code> nên không trùng cổng</li>
<li>Mỗi container là resource <code>Microsoft.Web/sites/sitecontainers</code>, app có <code>LinuxFxVersion=sitecontainers</code> (thay <code>DOCKER|&lt;image&gt;</code> và Docker Compose)</li>
<li>Lệnh: <code>az webapp create --sitecontainers-app</code>, <code>az webapp sitecontainers convert --mode sitecontainers</code>, <code>sitecontainers create --is-main --target-port</code></li>
<li>Main phải nghe cổng 80 hoặc 8080; <code>targetPort</code> chỉ là metadata, không đổi cổng tiến trình nghe</li>
<li>Sau khi chuyển sang sitecontainers, <code>WEBSITES_PORT</code> và <code>DOCKER_REGISTRY_SERVER_*</code> <strong>mất tác dụng</strong> → cổng khai bằng <code>--target-port</code>, xác thực bằng <code>authType</code></li>
<li>Main gọi sidecar bằng <code>http://model-server:11434</code> → <strong>sai, phải dùng <code>http://localhost:11434</code></strong>; mỗi instance gọi sidecar của chính nó</li>
</ul>
</li>
<li><strong>Biến và pull image</strong><ul>
<li>Biến môi trường: app setting thấy ở mọi container; <code>environmentVariables[].value</code> chứa <strong>tên</strong> app setting, không chứa giá trị literal</li>
<li>Pull image private không lưu mật khẩu → <strong>managed identity + AcrPull</strong>, khai identity trong từng site container<ul>
<li><code>authType: UserAssigned</code> + <code>userManagedIdentityClientId</code>; registry chế độ RBAC + ABAC Repository → role <strong>Container Registry Repository Reader</strong></li>
</ul>
</li>
</ul>
</li>
<li><strong>Lưu trữ /home</strong><ul>
<li>Trao đổi file tạm qua <code>/home</code> dùng chung; nhưng artifact cần bền, cho app khác dùng → <strong>Blob / Azure Files</strong> ⚠</li>
<li><code>/home</code> tự mount vào mọi container, không cần <code>volumeMounts</code> (thêm vào có thể làm app/SCM không start); ghi file tạm rồi rename</li>
</ul>
</li>
<li><strong>Bảo mật và sẵn sàng</strong><ul>
<li>Sidecar không có endpoint public → main lo xác thực; chỉ expose thao tác hẹp (health, inference), không mở proxy chung</li>
<li>Main start trước khi model nạp xong → trả "chưa sẵn sàng"/503 tới khi health của sidecar OK; connect timeout ngắn, chỉ retry idempotent</li>
<li>Nên tách service riêng khi: nhiều app dùng chung model, cần GPU hoặc luật scale khác, cần biên bảo mật riêng, phải sống khi app chính restart</li>
</ul>
</li>
</ul>
</li>
<li><strong>Chẩn đoán sidecar</strong><ul>
<li><code>az webapp sitecontainers list/show/status/log --container-name ...</code></li>
<li><code>localhost:11434</code> bị connection refused → <strong>so cổng API gọi với target port của sidecar, rồi xem process có listen cổng đó</strong>; thứ tự: cấu hình → log từng container → cổng<ul>
<li>Connection refused = chưa có tiến trình nghe; timeout = sidecar khởi động chậm/thiếu tài nguyên; nhận mã HTTP lỗi = đã thông, lỗi ở request/model</li>
</ul>
</li>
<li>Restart lặp lại không có lỗi ứng dụng → thường <strong>hết RAM lúc nạp model</strong>; scale out thì mỗi instance nạp thêm một model<ul>
<li>Tăng SKU không sửa được crash tiến trình, thiếu setting hay sai tag; chỉ scale khi số đo cho thấy thiếu tài nguyên</li>
</ul>
</li>
<li>Response từ main thành công chưa chứng minh sidecar sẵn sàng → phải gọi health của model từ main rồi gửi request inference thử</li>
</ul>
</li>
</ul>
</section>
<section id="r1-3">
<h3>1.3 Azure Container Apps<a class="anch" href="#r1-3">#</a></h3>
<ul>
<li><strong>Environment và deploy</strong><ul>
<li><strong>Environment</strong><ul>
<li>Environment là ranh giới chung cho networking (VNet), logging (Log Analytics) và isolation</li>
<li>Cấu trúc: container app → revision (bất biến) → replica → container</li>
<li>App trong cùng environment gọi nhau bằng tên app qua DNS nội bộ (<code>http://&lt;app-name&gt;</code>)</li>
<li>Environment gắn VNet phải chọn <strong>lúc tạo</strong> (<code>--infrastructure-subnet-resource-id</code>); đã tạo thì không chuyển vào VNet được</li>
<li>Tách environment theo vòng đời (dev/test/prod), gom service gọi nhau nội bộ vào cùng environment</li>
<li><code>az containerapp up --source .</code> tự tạo RG, ACR, environment → hợp demo, <strong>không hợp production</strong></li>
</ul>
</li>
<li><strong>Ingress</strong><ul>
<li>Ingress external/internal, <code>targetPort</code> phải khớp cổng app</li>
<li>Ingress: external / internal (chỉ trong environment) / tắt (worker); hỗ trợ HTTP/2, gRPC (<code>--transport http2</code>), WebSocket, session affinity, <code>ipSecurityRestrictions</code>, custom domain + managed certificate miễn phí</li>
<li>Sai <code>targetPort</code> → revision "Provisioned" nhưng request <strong>timeout</strong></li>
</ul>
</li>
<li><strong>YAML và env var</strong><ul>
<li>Cấu hình review như code → <strong><code>az containerapp create/update --yaml</code></strong> với file trong source control<ul>
<li>Có <code>--yaml</code> thì <strong>mọi flag khác bị bỏ qua</strong> (<code>update --yaml app.yml --image ...:v2</code> không đổi image) → sửa trong YAML</li>
</ul>
</li>
<li>Env var: <code>--env-vars</code> lúc create, <code>--set-env-vars</code> lúc update (thêm/sửa, không xoá biến cũ)</li>
</ul>
</li>
<li><strong>Secret</strong><ul>
<li>API key không để trong YAML → <strong>secret của Container Apps + <code>secretref:</code> vào env</strong> (secret có thể tham chiếu Key Vault)<ul>
<li>CLI viết <code>secretref:&lt;tên&gt;</code>, YAML viết thuộc tính <code>secretRef</code></li>
</ul>
</li>
<li>Secret từ Key Vault: <code>keyvaultref:&lt;uri&gt;,identityref:system</code>; identity phải có <strong>Key Vault Secrets User trước</strong>, nếu không lỗi "Authentication failed"<ul>
<li>System identity chỉ có <strong>sau</strong> khi app được tạo → không khai KV secret ngay trong create; user-assigned (<code>identityref:&lt;resource-id&gt;</code>) thì được</li>
</ul>
</li>
<li>Đổi secret không tạo revision → phải restart revision hoặc tạo revision mới; ngoại lệ KV reference không version: trong <strong>30 phút</strong> tự lấy bản mới và restart revision</li>
</ul>
</li>
<li><strong>Registry</strong><ul>
<li>Registry private: managed identity để pull ACR<ul>
<li><code>--registry-server ... --registry-identity system</code> lúc create; app có sẵn → <code>az containerapp registry set --identity system</code></li>
<li>Repository trong image reference phải <strong>chữ thường</strong>; viết hoa làm pull fail, trông như lỗi xác thực</li>
</ul>
</li>
</ul>
</li>
<li><strong>Kiểm tra deploy</strong><ul>
<li>Kiểm tra deploy: log, <code>revision list</code>, <code>az containerapp replica list</code>; image mới không start → <strong><code>az containerapp logs show</code></strong><ul>
<li><code>logs show --type system</code> cho lỗi pull image/probe/scaling; <code>az containerapp exec</code> để vào shell</li>
<li>Bảng Log Analytics: <code>ContainerAppConsoleLogs_CL</code> (app) và <code>ContainerAppSystemLogs_CL</code> (hệ thống)</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><strong>Dapr</strong><ul>
<li><strong>Cơ chế</strong><ul>
<li>Dapr: sidecar, building block, component (đổi broker chỉ bằng cấu hình)</li>
<li>Sidecar mở HTTP <strong>3500</strong>, gRPC <strong>50001</strong>; app gọi sidecar ở localhost, không cần SDK dịch vụ</li>
<li>Bật: <code>--enable-dapr --dapr-app-id --dapr-app-port --dapr-app-protocol</code>; app-id dùng cho service discovery, scopes, consumer ID pub/sub</li>
<li>Component là tài nguyên của <strong>environment</strong> (<code>az containerapp env dapr-component set</code>), schema rút gọn (bỏ apiVersion, kind, metadata.name)</li>
<li>Không khai <code>scopes</code> → mọi app bật Dapr đều nạp component; scopes liệt kê <strong>Dapr app-id</strong>, không phải tên container app</li>
<li>Kết nối ưu tiên managed identity (file component không chứa secret); <code>azureClientId</code> bắt buộc với user-assigned; không hỗ trợ identity → secret store Key Vault</li>
</ul>
</li>
<li><strong>Chọn Dapr hay SDK</strong><ul>
<li>Building block: service invocation (mTLS, retry, round-robin), pub/sub, state, bindings, actors, secrets, configuration</li>
<li>Nhiều microservice gọi nhau cần mTLS + retry không tự viết → <strong>Dapr service invocation</strong></li>
<li>Code pub/sub chạy được cả Service Bus lẫn Kafka/Redis → <strong>Dapr pub/sub</strong>, đổi <code>componentType</code></li>
<li>Cần session, scheduled message, peek DLQ, transaction của Service Bus → <strong>SDK <code>azure-servicebus</code> trực tiếp</strong></li>
<li>Chỉ một app gọi một dịch vụ → SDK trực tiếp (sidecar không đem lại gì)</li>
</ul>
</li>
<li><strong>Giới hạn</strong><ul>
<li>Dapr <strong>không hỗ trợ Container Apps jobs</strong>; không chọn được phiên bản Dapr; actor reminder cần <code>minReplicas ≥ 1</code></li>
<li>Đổi cấu hình Dapr là application-scope: không tạo revision nhưng <strong>restart mọi revision</strong></li>
</ul>
</li>
</ul>
</li>
<li><strong>Revision và day-two</strong><ul>
<li><strong>Scope thay đổi</strong><ul>
<li>Sửa template (image, env, scale) tạo revision mới (revision-scope); sửa secret, ingress, registry thì không (application-scope)</li>
<li>Application-scope còn gồm cấu hình <strong>Dapr</strong>; CPU/memory thuộc revision-scope</li>
</ul>
</li>
<li><strong>Revision mode và traffic</strong><ul>
<li>Single mode: zero-downtime; multiple mode: chia % traffic, <strong>label</strong> cho URL test riêng; chuyển 10% sang bản mới → <strong>multiple revision + chia trọng số</strong></li>
<li>Single mode: chờ revision mới ready và đủ replica rồi mới chuyển traffic, tự deactivate bản cũ</li>
<li>Bật multiple: <code>revision set-mode --mode multiple</code> hoặc <code>update --revision-mode multiple</code>; <code>--revision-suffix</code> đặt tên dễ đọc</li>
<li>Chia traffic: <code>az containerapp ingress traffic set --revision-weight latest=10 &lt;rev-cũ&gt;=90</code>; weight cho <code>latest</code> thì bản deploy mới tự nhận phần đó</li>
<li>Cho tester vào revision mới mà user production không bị ảnh hưởng → <strong>gắn label, weight vẫn 0%</strong><ul>
<li>Label: URL riêng, mỗi label một revision, chuyển label nguyên tử; tên bắt đầu bằng chữ, chữ thường/số/<code>-</code>, tối đa 64 ký tự</li>
</ul>
</li>
<li>Mỗi revision active scale độc lập: hai revision <code>minReplicas: 1</code> chia 50/50 → luôn ít nhất 2 replica, có thể không bên nào chạm ngưỡng scale → chuyển nhanh 10% → 50% → 100%</li>
</ul>
</li>
<li><strong>Rollback và vòng đời</strong><ul>
<li>Rollback = trỏ 100% traffic về revision cũ; deactivate sớm revision cũ sau khi chuyển xong, đừng vội xoá</li>
<li>Cắt traffic khỏi revision mà không xoá → <strong><code>revision deactivate</code></strong>; ngoài ra restart/activate<ul>
<li>Bản phát hành lỗi, chặn traffic ngay nhưng giữ để điều tra → <strong>deactivate</strong> (stop dừng cả app, delete mất bằng chứng)</li>
</ul>
</li>
<li>Stop = cả app, chắc chắn không replica nào start (vd upstream sập); restart = replica, áp cấu hình ngay hoặc gỡ tiến trình kẹt (mỗi lần restart là một lần cold start)</li>
<li>Tự xoá revision inactive cũ nhất khi vượt <strong>100</strong> (<code>--max-inactive-revisions</code>)</li>
</ul>
</li>
<li><strong>Truy vết và lỗi</strong><ul>
<li>Deploy truy vết được → tham chiếu image bằng <strong>digest</strong></li>
<li>Nghi một revision lỗi → <strong>stream log lọc theo revision</strong>, vừa xem vừa tái hiện</li>
<li>Revision fail: lỗi pull image, lệch cổng, thiếu env/secret, probe sai, OOM; fail readiness ngay sau deploy → <strong>probe sai port hoặc path</strong></li>
</ul>
</li>
</ul>
</li>
<li><strong>Probe</strong><ul>
<li><strong>Loại và giới hạn</strong><ul>
<li>Liveness / readiness / startup, chỉ HTTP/TCP (không có exec như AKS)</li>
<li>Không gRPC, cổng phải là số (không named port), mỗi loại tối đa một probe mỗi container</li>
<li>HTTP probe: mã <strong>200 đến dưới 400</strong> là thành công</li>
<li>Bật ingress mà không khai → tự thêm probe TCP mặc định cho container chính (không cho sidecar, trừ GPU profile); startup failureThreshold 240, readiness period 5s / failureThreshold 48</li>
<li>Probe mặc định chỉ kiểm cổng mở, không biết model đã nạp → khai HTTP probe tới <code>/ready</code></li>
</ul>
</li>
<li><strong>Fail và nạp model</strong><ul>
<li>Readiness fail → replica không nhận traffic (vẫn chạy); liveness fail → replica bị restart</li>
<li>Liveness quá hung hăng lúc model nạp → restart lặp, cold start liên tục</li>
<li>Model nạp chậm → tăng <code>initialDelaySeconds</code> hoặc dùng startup probe</li>
<li>Startup <code>periodSeconds: 10</code> × <code>failureThreshold: 30</code> = ngân sách ~300 giây; đừng nới liveness tới mức không phát hiện được treo</li>
<li>Endpoint probe không phụ thuộc hệ thống ngoài (DB, Azure OpenAI), nếu không mọi replica fail cùng lúc</li>
</ul>
</li>
<li><strong>Revision và log</strong><ul>
<li>Đổi probe tạo revision mới; sự kiện probe fail nằm ở <strong>system log</strong></li>
<li>Một replica fail readiness → cả revision bị đánh dấu unhealthy; multiple mode chờ readiness pass rồi mới chuyển traffic</li>
</ul>
</li>
</ul>
</li>
<li><strong>Tài nguyên và workload profile</strong><ul>
<li><strong>CPU và memory</strong><ul>
<li>Mặc định mỗi container <strong>0.25 core / 0.5 GiB</strong>; ràng buộc <strong>memory (GiB) ≥ 2 × CPU (core)</strong><ul>
<li><code>--cpu 1 --memory 1Gi</code> → <strong>không hợp lệ</strong>; hợp lệ: <code>0.5/1Gi</code> hoặc <code>1/2Gi</code></li>
</ul>
</li>
<li>Vượt memory → replica bị kill và restart; vượt CPU → bị throttle, không kill<ul>
<li>Chậm dần khi tải cao mà không restart → <strong>CPU throttle</strong>; restart liên tục khi xử lý file lớn → <strong>vượt memory</strong></li>
</ul>
</li>
<li>Billing theo vCPU-giây và GiB-giây; replica idle tính giá thấp hơn; về 0 thì không tốn compute; trần 1.000 replica mỗi revision</li>
<li>Main + sidecar: mỗi container phân bổ riêng, cùng tính vào giới hạn</li>
</ul>
</li>
<li><strong>Workload profile</strong><ul>
<li>Workload profile: Consumption (tối đa 4 vCPU / 8 GiB mỗi container, tỷ lệ memory ≥ 2 × CPU) hay Dedicated (GPU, nhiều tài nguyên)</li>
<li>Cần GPU hoặc hơn 4 core / 8 GiB → <strong>bắt buộc Dedicated</strong>; Dedicated cũng cho độ trễ ổn định</li>
<li>Một environment workload profiles trộn được Consumption + Dedicated (API nhẹ Consumption, worker nặng Dedicated)</li>
<li>Dedicated tính tiền theo node (min/max node) → "chi phí dự đoán được cho tải đều"; Consumption → "thỉnh thoảng mới chạy"</li>
<li>Environment kiểu cũ (Consumption-only) không đổi sang workload profiles được; VNet cho workload profiles khuyến nghị subnet <strong>/23</strong></li>
</ul>
</li>
</ul>
</li>
<li><strong>Scale và KEDA</strong><ul>
<li><strong>Mặc định và công thức</strong><ul>
<li>Mặc định 0–10 replica, HTTP concurrency 10; rule HTTP (<code>concurrentRequests</code>), TCP, CPU, memory</li>
<li>Không khai rule → HTTP rule mặc định, min 0 / max 10; trần cấu hình 1.000</li>
<li>Polling <strong>30 giây</strong>; cooldown <strong>300 giây</strong> chỉ cho bước 1 → 0; scale-down stabilization 300 giây, scale-up stabilization 0</li>
<li><code>desiredReplicas = ceil(metric / target)</code>; bậc scale-up 1 → 4 → 8 → 16 → 32…; scale-down bỏ 100% replica thừa một lần</li>
<li>Nhiều rule → rule nào chạm ngưỡng trước là scale (lấy số replica lớn nhất)</li>
</ul>
</li>
<li><strong>Scale về 0</strong><ul>
<li><strong>CPU/memory không scale về 0</strong><ul>
<li>App chỉ có rule CPU → sàn thực tế 1 replica</li>
</ul>
</li>
<li>App tắt ingress, không scale rule, không <code>minReplicas ≥ 1</code> → <strong>về 0 và không gì đánh thức</strong>; worker phải có event scaler hoặc min 1</li>
<li>Worker xử lý queue mà đặt HTTP rule → không bao giờ scale; API đặt queue rule → scale sai tín hiệu</li>
</ul>
</li>
<li><strong>Service Bus và Queue</strong><ul>
<li>Xử lý Service Bus và scale về 0 → <strong>min 0 + rule <code>azure-servicebus</code></strong> (<code>queueName</code>, <code>messageCount</code>, <code>namespace</code>)<ul>
<li><code>messageCount=20</code> = 20 message mỗi replica → 200 message ≈ 10 replica</li>
</ul>
</li>
<li>Service Bus topic: <code>topicName</code> + <code>subscriptionName</code>, mỗi subscription scale độc lập</li>
<li>Queue Storage → <strong><code>azure-queue</code></strong>: <code>accountName</code>, <code>queueName</code>, <code>queueLength</code> (đừng trộn với namespace/messageCount)</li>
</ul>
</li>
<li><strong>Cron</strong><ul>
<li>Có sẵn 5 replica lúc 8h, ban đêm về 0 → <strong>cron rule + HTTP rule</strong><ul>
<li>Cron: <code>timezone</code>, <code>start</code>, <code>end</code>, <code>desiredReplicas</code>; ngoài khung giờ không tác động</li>
</ul>
</li>
</ul>
</li>
<li><strong>Xác thực scaler</strong><ul>
<li>Auth cho KEDA trong production → <strong>managed identity (<code>--scale-rule-identity</code>)</strong></li>
<li>Identity cho scaler Service Bus cần role kiểu <strong>Azure Service Bus Data Receiver</strong>; cách cũ: secret + <code>--scale-rule-auth "connection=sb-conn"</code></li>
<li>Container Apps không hỗ trợ resource <code>TriggerAuthentication</code> → secret tham chiếu thẳng trong scale rule</li>
</ul>
</li>
<li><strong>Scaler khác</strong><ul>
<li>Scaler khác: Event Hubs, Kafka, Redis, cron, Prometheus; bên trong: KEDA = scaler → metrics → HPA</li>
<li>KEDA lo bước 0 → 1 (HPA không làm được từ 0) → đánh thức từ 0 luôn trễ ít nhất một chu kỳ polling</li>
<li>Event Hubs: <code>consumerGroup</code>, <code>unprocessedEventThreshold</code>; Kafka: <code>lagThreshold</code>; Prometheus: <code>query</code>, <code>threshold</code></li>
<li>Event Hub 32 partition mà <code>maxReplicas: 100</code> → <strong>68 replica thừa</strong>; replica hữu ích tối đa = số partition (Kafka cũng vậy)</li>
<li>TCP rule (<code>--scale-rule-tcp-concurrency</code>) hợp WebSocket, gRPC, kết nối sống lâu; Jobs không dùng được HTTP rule</li>
<li>Thêm/sửa scale rule tạo revision mới; multiple mode thì revision cũ giữ rule cũ</li>
</ul>
</li>
<li><strong>Chọn ngưỡng và Jobs</strong><ul>
<li>Chọn ngưỡng: mỗi message 10 giây, cần 100 message/phút → khoảng 10 replica song song</li>
<li>CPU throttling → <strong>tăng CPU mỗi replica</strong>, rồi xem lại scale rule</li>
<li>Batch/inference dài, chạy một lần hoặc theo lịch → <strong>Container Apps Jobs</strong> thay vì app luôn chạy</li>
</ul>
</li>
</ul>
</li>
<li><strong>Dynamic sessions</strong> (chạy code do AI sinh ra hoặc user gửi)<ul>
<li><strong>Session pool</strong><ul>
<li>Session pool giữ sẵn môi trường, cấp trong mili giây; mỗi session cách ly bằng <strong>Hyper-V</strong></li>
<li>Không chạy <code>exec()</code> trong container API (tranh tài nguyên, đọc được credential của API)</li>
<li>Pool code interpreter (Python có sẵn) hay <strong>custom container</strong> (khi cần native binary)</li>
<li>Agent chạy Python do LLM sinh để phân tích CSV → <strong>built-in code interpreter</strong>; cả hai loại đều cách ly nên cách ly không phải lý do chọn custom container</li>
<li>Custom container khi cần package hệ thống, thư viện có license, ngôn ngữ/protocol riêng; cần environment bật workload profiles, tự lo ingress, health probe</li>
<li>LangChain: <code>SessionsPythonREPLTool</code> (gói <code>langchain-azure-dynamic-sessions</code>) chạy trên code interpreter pool; mỗi user/hội thoại một instance, không singleton</li>
</ul>
</li>
<li><strong>Cấu hình pool</strong><ul>
<li>Cấu hình: số session tối đa, cooldown, identity; code không tin cậy → <strong><code>EgressDisabled</code></strong><ul>
<li><code>az containerapp sessionpool create --container-type PythonLTS --max-sessions --cooldown-period --network-status EgressDisabled</code></li>
</ul>
</li>
<li><code>--max-sessions</code> theo lượng dùng đồng thời lúc cao điểm, không theo tổng user; cũng là chốt chi phí</li>
<li>Cooldown: hết hạn khi không có request, mỗi request reset bộ đếm; dài thì giữ file cho hội thoại nhiều bước, ngắn thì xoá dữ liệu sớm</li>
<li>Egress chặn mặc định, cấp pool; workload cần gọi API ngoài → <strong>tách pool riêng</strong>, không mở egress pool dùng chung</li>
<li>Hyper-V chỉ cách ly giữa các session: code trong session đọc được mọi thứ đưa vào session đó</li>
<li>Identity pull image của custom pool phải riêng, scope hẹp (code trong session có thể xin token của nó)</li>
</ul>
</li>
<li><strong>Gọi và xác thực</strong><ul>
<li>Gọi bằng token Entra; multitenant → <strong>server sinh <code>identifier</code> khó đoán</strong>, lưu liên kết user ở backend (không dùng email, không nhận id từ client)</li>
<li>Backend cần role <strong>Azure ContainerApps Session Executor</strong> ở scope session pool; người dùng cuối không bao giờ cầm token pool</li>
<li>Nhận 401 dù đã có role → <strong>sai audience</strong>: scope phải là <code>https://dynamicsessions.io/.default</code>, không phải management.azure.com</li>
<li>API: <code>POST /executions</code>, <code>POST /files</code> (file ở <code>/mnt/data</code>), <code>GET /files</code>, <code>GET /files/&lt;tên&gt;/content</code>; upload tối đa <strong>128 MB</strong> mỗi file</li>
<li>Identifier không xác thực ai cả → backend vẫn phải authorize user trước</li>
</ul>
</li>
<li><strong>Session tạm</strong><ul>
<li>Session là tạm → tài liệu nguồn, kết quả, audit log lưu ở storage ứng dụng</li>
<li>Hết cooldown, cùng identifier có thể nhận session rỗng → upload lại bản gốc từ storage bền rồi chạy lại bước idempotent</li>
</ul>
</li>
<li><strong>Lỗi, retry, xoá</strong><ul>
<li>HTTP 200 nhưng code ném exception → <strong>execution failure</strong></li>
<li>Phân loại: transport failure (auth, sức chứa, mạng) / execution failure / validation failure (output sai schema) / success</li>
<li>Timeout không rõ đã có side effect → <strong>chỉ retry khi idempotent và kiểm tra được trạng thái</strong></li>
<li>Mã transient: 429, 500, 502, 503, 504; retry có giới hạn, backoff, jitter; timeout client không có nghĩa code đã dừng</li>
<li>Xoá sớm: <code>DELETE /session?identifier=...</code> → 204; không xoá khi còn request khác của hội thoại đang chạy</li>
</ul>
</li>
</ul>
</li>
</ul>
</section>
<section id="r1-4">
<h3>1.4 Azure Kubernetes Service (AKS)<a class="anch" href="#r1-4">#</a></h3>
<ul>
<li><strong>Nền tảng</strong><ul>
<li>Control plane: API server, scheduler, controller, etcd; node có kubelet; nguyên lý khai báo + reconcile loop</li>
<li>AKS: control plane do Azure quản, chỉ trả tiền node pool; nâng cấp control plane và node pool là hai thao tác riêng</li>
<li><code>replicas</code> = số bản sao pod chạy đồng thời; Deployment → ReplicaSet → Pod<ul>
<li><code>kubectl delete pod</code> của Deployment → pod mọc lại; muốn dừng thật → <code>kubectl scale --replicas=0</code> hoặc xoá Deployment</li>
<li><code>kubectl edit/patch</code> sửa nóng bị ghi đè ở lần <code>apply</code> kế tiếp → sửa qua manifest</li>
</ul>
</li>
<li>Container trong một pod chung network namespace (localhost) và volume → nền của sidecar và initContainer</li>
<li>Namespace là biên đặt tên, ResourceQuota/LimitRange; không chặn gọi chéo namespace → cần <strong>NetworkPolicy</strong></li>
<li>Workload: Deployment (stateless), StatefulSet (identity + volume ổn định), DaemonSet (1 pod/node), Job/CronJob (batch)</li>
</ul>
</li>
<li><strong>Deploy</strong><ul>
<li><strong>Tạo cluster và ACR</strong><ul>
<li><code>az aks create --attach-acr</code>, <code>az aks get-credentials</code>, <code>kubectl apply -f</code><ul>
<li><code>--attach-acr</code> = cấp AcrPull cho kubelet identity, không cần imagePullSecret; người chạy lệnh cần quyền <strong>Owner</strong> trên subscription</li>
</ul>
</li>
</ul>
</li>
<li><strong>Workload identity</strong><ul>
<li>Bật <code>--enable-oidc-issuer --enable-workload-identity</code> cho workload identity</li>
<li>Workload identity: user-assigned identity + federated credential (subject <code>system:serviceaccount:&lt;ns&gt;:&lt;sa&gt;</code>); ServiceAccount có annotation <code>azure.workload.identity/client-id</code>, pod có label <code>azure.workload.identity/use: "true"</code> ở <code>spec.template.metadata.labels</code><ul>
<li>Thiếu annotation hoặc label → <code>DefaultAzureCredential</code> trong pod không lấy được token</li>
</ul>
</li>
<li>Workload Identity thay Pod Identity (deprecated)</li>
</ul>
</li>
<li><strong>Service và mạng</strong><ul>
<li>Service ClusterIP / NodePort / <strong>LoadBalancer</strong> (ra internet qua load balancer Azure); DNS <code>&lt;service&gt;.&lt;namespace&gt;.svc.cluster.local</code></li>
<li>Ingress (không phải Service) cho routing L7 theo host/path, TLS; ExternalName = CNAME; headless (<code>clusterIP: None</code>) cho StatefulSet</li>
<li>DNS: <code>rag-api</code> (cùng namespace) → <code>rag-api.prod</code> (khác namespace) → FQDN; gọi sai namespace là lỗi hay gặp</li>
<li>Traffic không tới pod / Service không có endpoint → <strong>label pod phải khớp selector</strong>; xem bằng <code>kubectl describe service</code><ul>
<li>EndpointSlice rỗng → selector không khớp <strong>hoặc</strong> chưa pod nào pass readiness</li>
</ul>
</li>
<li>Pod khác gọi Service phải dùng <code>port</code> của Service (80), không phải <code>targetPort</code></li>
<li>EXTERNAL-IP <code>&lt;pending&gt;</code> = load balancer đang được cấp, không phải lỗi; <code>kubectl apply</code> bất đồng bộ</li>
<li>NetworkPolicy: pod bị chọn trúng chuyển sang deny-by-default → vừa bật policy app chết = quên mở cổng</li>
</ul>
</li>
<li><strong>Rolling update</strong><ul>
<li>Rolling update <code>maxSurge</code>, <code>maxUnavailable</code>; scheduling: nodeSelector, affinity, taint/toleration<ul>
<li>Mặc định <code>maxSurge</code> 25% (làm tròn lên), <code>maxUnavailable</code> 25% (làm tròn xuống); cả hai bằng 0 → không hợp lệ</li>
</ul>
</li>
<li>Recreate → có downtime, chỉ khi hai phiên bản không chạy song song được</li>
<li>Không khai readinessProbe → rollout báo xong khi model còn nạp, user nhận 502</li>
<li><code>minReadySeconds</code> mặc định 0; <code>progressDeadlineSeconds</code> 600 (chỉ gắn condition, <strong>không tự rollback</strong>); <code>revisionHistoryLimit</code> 10</li>
<li><code>kubectl rollout status/history/undo --to-revision/pause/resume/restart</code></li>
</ul>
</li>
<li><strong>Định cỡ và HPA</strong><ul>
<li>Định cỡ: 2 replica dev, <strong>3 replica API production</strong>; memory = yêu cầu model + 20%; CPU inference 1–2 core/pod</li>
<li>HPA: <code>kubectl autoscale deployment --cpu-percent=70 --min --max</code>; scale theo queue → cài KEDA trên AKS</li>
</ul>
</li>
</ul>
</li>
<li><strong>Scheduling và GPU</strong><ul>
<li>nodeSelector cứng; nodeAffinity có required/preferred; podAntiAffinity, topologySpreadConstraints rải replica qua node/zone<ul>
<li>Node/zone chết làm mất mọi replica → <strong>topologySpreadConstraints</strong>, không phải PDB</li>
</ul>
</li>
<li>Taint trên node đẩy pod ra; toleration chỉ <strong>cho phép</strong>, không ép pod lên node → cần thêm nodeSelector/nodeAffinity</li>
<li>Node pool GPU đủ bốn mảnh: taint <code>sku=gpu:NoSchedule</code> (chỉ đặt lúc tạo pool), toleration, nodeSelector theo pool, <code>limits: nvidia.com/gpu: 1</code><ul>
<li>Thiếu <code>nvidia.com/gpu</code> → pod nằm trên node GPU mà không được cấp GPU; thiếu nodeSelector → pod GPU có thể lên node CPU</li>
</ul>
</li>
<li>Spot pool: AKS tự gắn taint <code>kubernetes.azure.com/scalesetpriority=spot:NoSchedule</code>; không SLA, không làm pool mặc định; eviction policy mặc định Delete</li>
<li>Cluster autoscaler: user pool <code>--min-count 0</code> được về 0; <strong>system pool không về 0</strong> (tối thiểu 2, production 3); profile áp cho mọi pool</li>
<li>Pending vì hết capacity → <code>az aks scale --node-count</code> hoặc giảm requests</li>
</ul>
</li>
<li><strong>Tài nguyên</strong><ul>
<li>requests/limits → QoS Guaranteed / Burstable / BestEffort (BestEffort bị evict trước)<ul>
<li>Guaranteed: mọi container (cả init, sidecar) khai request = limit cho <strong>cả CPU lẫn memory</strong>; một sidecar quên khai → cả pod Burstable</li>
<li>Không khai gì → BestEffort, chết đầu tiên → "pod worker cứ biến mất lúc cao điểm"</li>
</ul>
</li>
<li>Khi evict, chỉ pod dùng vượt request của chính nó là ứng viên → khai request sát thực tế để tự bảo vệ</li>
<li>Container AI nạp model vào RAM → <strong>Guaranteed</strong> (request = limit)</li>
<li>Vượt memory limit → OOMKilled; vượt CPU limit → throttle (latency tăng → chỉnh requests/limits hoặc scale out)<ul>
<li>Vượt memory limit là OOMKilled <strong>bất kể QoS</strong>; pod biến mất kèm event Evicted = node thiếu tài nguyên, OOMKilled/exit 137 = vượt limit của chính nó</li>
</ul>
</li>
<li>Requests vượt sức chứa mọi node → pod <strong>Pending</strong></li>
</ul>
</li>
<li><strong>Cấu hình</strong><ul>
<li><strong>ConfigMap</strong><ul>
<li>Config không nhạy cảm, đổi không build lại image → <strong>ConfigMap</strong> (<code>configMapKeyRef</code>, <code>envFrom</code>, tối đa 1 MiB, có thể immutable)<ul>
<li>File cấu hình 5 MB không vào ConfigMap được (trần <strong>1 MiB</strong>) → persistent volume hoặc dịch vụ cấu hình ngoài</li>
</ul>
</li>
<li>App đọc file JSON lúc khởi động → <strong>mount ConfigMap thành file qua volume</strong><ul>
<li>Mount dùng <code>items</code> để chọn key và đổi tên file</li>
</ul>
</li>
<li>ConfigMap gắn kiểu env (<code>configMapKeyRef</code>, <code>envFrom</code>) không tự cập nhật → <code>kubectl rollout restart</code>; mount volume thì tự đồng bộ, <strong>trừ <code>subPath</code></strong><ul>
<li>Đổi prompt template trong ConfigMap mà app vẫn chạy bản cũ → gắn kiểu env hoặc subPath</li>
</ul>
</li>
<li>Immutable (<code>immutable: true</code>): không sửa data, không tắt được → <strong>tạo ConfigMap mới (vd <code>-v2</code>) rồi rollout</strong>; giảm tải API server</li>
</ul>
</li>
<li><strong>Secret</strong><ul>
<li>Connection string có mật khẩu → <strong>Secret</strong>, vào env bằng <strong><code>valueFrom.secretKeyRef</code></strong>; Secret chỉ là base64, muốn an toàn dùng Key Vault CSI driver</li>
<li><code>kubectl create secret generic --from-literal</code>; <code>describe secret</code> liệt kê key, không in giá trị</li>
<li>Type: Opaque (chuỗi thường), <code>kubernetes.io/dockerconfigjson</code> (registry, dùng với imagePullSecrets), <code>kubernetes.io/tls</code></li>
<li>Secret chỉ ở trong vault, audit từng lần truy cập → <strong>Key Vault + Secrets Store CSI Driver</strong> (mount thành file)</li>
<li>Quản lý tập trung app nào dùng secret nào, giao dưới dạng Kubernetes Secret chuẩn → <strong>App Configuration + Key Vault reference (Kubernetes Provider)</strong><ul>
<li>Add-on: <code>--enable-addons azure-keyvault-secrets-provider</code>; tự tạo identity <code>azurekeyvaultsecretsprovider-xxxx</code> trong node resource group</li>
</ul>
</li>
<li>Secret xoay mà pod không nhận → rotation <strong>mặc định tắt</strong> (<code>enableSecretRotation: false</code>, poll 2 phút), không áp cho <code>subPath</code>, secret vào env vẫn phải restart</li>
</ul>
</li>
<li><strong>Storage</strong><ul>
<li>PV / PVC / StorageClass: apply PVC thì StorageClass tự cấp disk; Disk ReadWriteOnce, Azure Files ReadWriteMany</li>
<li>StorageClass: <code>managed-csi</code> (mặc định, Disk), <code>managed-csi-premium</code> (Premium SSD), <code>azurefile-csi</code>, <code>azurefile-csi-premium</code></li>
<li>Nhiều replica cùng ghi một volume → <strong>ReadWriteMany (Azure Files)</strong>; database một instance cần latency thấp → <strong><code>managed-csi-premium</code></strong></li>
<li>Workload nặng I/O, cần failover pod nhanh → <strong>Azure Container Storage</strong></li>
</ul>
</li>
<li><strong>PDB và pull image</strong><ul>
<li>PodDisruptionBudget, imagePullSecrets</li>
<li>PDB chỉ chặn <strong>voluntary disruption</strong> (drain, autoscaler gỡ node); không bảo vệ khi node chết</li>
<li>Drain treo lâu → PDB quá chặt (<code>minAvailable</code> bằng số replica); <code>unhealthyPodEvictionPolicy: AlwaysAllow</code></li>
<li>Xoá Deployment/pod bằng tay và rolling update không bị PDB giới hạn</li>
<li>Pull image private: khuyến nghị <code>--attach-acr</code>; thủ công thì Secret docker-registry + imagePullSecrets; thiếu cả hai → ImagePullBackOff</li>
</ul>
</li>
</ul>
</li>
<li><strong>Giám sát và troubleshoot</strong><ul>
<li><strong>Công cụ trên portal</strong><ul>
<li>Tín hiệu chính: restart, CPU/memory, latency, lỗi; Container Insights trên portal</li>
<li>Xem log realtime mà không cấu hình kubectl → <strong>Live Logs</strong> (Workloads → pod)</li>
<li>Xu hướng lịch sử, so sánh nhiều pod → <strong>Container insights</strong>, không phải <code>kubectl top</code> (ảnh chụp tức thời, cần metrics server)</li>
<li>Gợi ý tự động cho sự cố node/kết nối → <strong>Diagnose and solve problems</strong></li>
</ul>
</li>
<li><strong>Log</strong><ul>
<li>Pod nhiều container → <code>kubectl logs &lt;pod&gt; -c &lt;container&gt;</code>; <code>kubectl logs -l app=...</code> theo label</li>
<li>Log Analytics: <code>ContainerLogV2</code>, <code>KubePodInventory</code>, <code>KubeEvents</code></li>
</ul>
</li>
<li><strong>Lỗi image và Pending</strong><ul>
<li>ImagePullBackOff: sai tên image hoặc thiếu quyền ACR<ul>
<li>Đọc đuôi thông báo: <code>no such host</code> = sai tên/DNS registry; <code>401 Unauthorized</code> = thiếu AcrPull; <code>manifest unknown</code> = tag không tồn tại</li>
</ul>
</li>
<li>Pod Pending: đọc từng nhóm node trong FailedScheduling (<code>untolerated taint</code> vs <code>Insufficient memory</code>); Insufficient nói về <strong>request</strong>, không phải mức dùng thật</li>
</ul>
</li>
<li><strong>CrashLoopBackOff</strong><ul>
<li>CrashLoopBackOff → trước tiên <strong><code>kubectl describe pod</code></strong>, rồi <strong><code>kubectl logs --previous</code></strong> (log lần chạy đã crash)</li>
<li>CrashLoopBackOff là khoảng chờ: backoff 10s → 20s → 40s → … trần 5 phút, reset sau 10 phút chạy ổn</li>
<li>Exit code: 1 = app tự thoát lỗi; <strong>137 = SIGKILL (thường OOM)</strong>; 139 = segfault; 143 = SIGTERM</li>
<li>Thứ tự chẩn đoán: <code>get pod -o wide</code> → <code>describe pod</code> → <code>logs --previous</code> → <code>get events --sort-by=.lastTimestamp</code> → cuối cùng mới <code>exec</code></li>
<li>Xem lỗi khi đang tái hiện → <code>kubectl logs -f</code>; còn có <code>get events</code>, <code>exec</code>, <code>top</code></li>
</ul>
</li>
<li><strong>Kiểm tra kết nối</strong><ul>
<li>Gọi thử trước khi expose → <strong><code>kubectl port-forward service/...</code></strong><ul>
<li>Port-forward chạy mà client ngoài vẫn lỗi → vấn đề ở chặng load balancer/ingress</li>
</ul>
</li>
<li>Test Service nội bộ bằng pod tạm <code>kubectl run -it --rm ... -- sh</code> rồi wget/curl</li>
</ul>
</li>
<li><strong>Probe</strong><ul>
<li>Probe fail: liveness → restart, readiness → rút khỏi endpoint, startup → chặn hai probe kia</li>
<li>Mặc định probe: <code>initialDelaySeconds</code> 0, <code>periodSeconds</code> 10, <code>timeoutSeconds</code> 1, <code>failureThreshold</code> 3 → phát hiện hỏng sau ~30 giây</li>
<li>Thời gian phát hiện tệ nhất = <code>initialDelaySeconds + periodSeconds × failureThreshold</code></li>
<li><code>timeoutSeconds: 1</code> dễ fail oan với health endpoint chậm → restart dây chuyền</li>
<li>Liveness <strong>không gọi dependency</strong> (DB); readiness mới kiểm dependency</li>
<li>Container nạp model 3–5 phút → <strong>startupProbe</strong> (<code>failureThreshold × periodSeconds</code> ≥ thời gian khởi động), đừng nới liveness</li>
<li>Readiness fail: pod vẫn Running, restart 0; EndpointSlice giữ IP nhưng <code>ready=false</code></li>
<li>Probe do kubelet chạy, không qua Service → probe xanh không chứng minh đường mạng từ client thông</li>
</ul>
</li>
</ul>
</li>
</ul>
</section>
<section id="r1-5">
<h3>1.5 Ngoài khóa học và chọn compute<a class="anch" href="#r1-5">#</a></h3>
<ul>
<li><strong>Đóng gói FastAPI</strong><ul>
<li>Dockerfile cho FastAPI (bind <code>0.0.0.0</code>, multi-stage, non-root), Bicep cho chuỗi ACR → Container Apps<ul>
<li>Bind <code>127.0.0.1</code> → 502 trên App Service, timeout trên Container Apps, connection refused trên AKS</li>
<li>Cổng khớp ba nơi: uvicorn, <code>EXPOSE</code>/<code>targetPort</code>, <code>WEBSITES_PORT</code></li>
</ul>
</li>
<li><code>lifespan</code> (thay <code>@app.on_event</code> đã deprecated) để nạp model/tạo client SDK một lần; application factory thay biến toàn cục</li>
<li>Tách <code>/healthz</code> (liveness) khỏi <code>/ready</code> (readiness)</li>
</ul>
</li>
<li><strong>Bicep</strong><ul>
<li>Idempotent: chạy lại không tạo bản sao</li>
<li>Phụ thuộc ngầm qua tham chiếu (<code>env.id</code>); chỉ dùng <code>dependsOn</code> khi không có tham chiếu</li>
<li><code>existing</code> để trỏ tài nguyên có sẵn mà không quản vòng đời</li>
<li>Mặc định <strong>Incremental</strong>; <strong>Complete xoá mọi tài nguyên trong RG không có trong template</strong> → chạy <code>what-if</code> trước<ul>
<li><code>az deployment group what-if</code> (CLI) / <code>-WhatIf</code> (PowerShell)</li>
</ul>
</li>
<li>Secret: <code>@secure()</code> + <code>getSecret</code> từ Key Vault, không để trong file tham số</li>
<li>Role assignment AcrPull khai bằng <code>Microsoft.Authorization/roleAssignments</code> cho <code>principalId</code> của app</li>
</ul>
</li>
<li><strong>Chọn compute</strong><ul>
<li>App Service: web/API cần slot; Container Apps: microservice/worker, scale-to-zero, event-driven; AKS: cần toàn quyền Kubernetes<ul>
<li>AKS khi cần CRD, service mesh, GPU node pool tuỳ biến, Helm phức tạp</li>
</ul>
</li>
<li>Job batch ngắn, chạy một lần / theo cron → <strong>Container Apps Jobs</strong> hoặc AKS Job</li>
<li>Hàm nhỏ trigger theo event, trả theo lần chạy → <strong>Azure Functions</strong> (Domain 3)</li>
</ul>
</li>
</ul>
</section>
<h2 class="dom">2. Data (25–30%)</h2>
<section id="r2-1">
<h3>2.1 Cosmos DB for NoSQL<a class="anch" href="#r2-1">#</a></h3>
<ul>
<li><strong>SDK và mô hình</strong><ul>
<li><strong>Throughput và capacity</strong><ul>
<li><code>CosmosClient</code> → database → container → item; manual throughput tối thiểu 400 RU/s, có autoscale, serverless</li>
<li>Mặc định một account tối đa 500 database + container; shared throughput ở database (tối thiểu 400 RU/s) chia cho tối đa 25 container</li>
<li>Autoscale: max RU/s thấp nhất 1.000, chạy 10%–100% của max; Python <code>ThroughputProperties(auto_scale_max_throughput=4000)</code> → 400–4000 RU/s</li>
<li>Capacity mode serverless hay provisioned chọn lúc tạo account; serverless cho dev/test, tải rời rạc</li>
</ul>
</li>
<li><strong>Thao tác item</strong><ul>
<li>Ghi đè dù item có hay chưa → <strong><code>upsert_item()</code></strong>; còn create / replace</li>
<li><code>create_item</code> trùng → 409 <code>CosmosResourceExistsError</code>; <code>replace_item</code> / <code>read_item</code> không thấy → <code>CosmosResourceNotFoundError</code></li>
<li>Biết id + partition key → <strong><code>read_item()</code></strong> (point read 1 KB = 1 RU, rẻ nhất); <code>delete_item</code> vẫn tốn RU</li>
</ul>
</li>
<li><strong>Concurrency và id</strong><ul>
<li>Optimistic concurrency: ETag + <code>if-match</code>, lệch nhận 412; system property <code>id</code>, <code>_etag</code>, <code>_ts</code><ul>
<li>Hai tiến trình cùng sửa một document, tránh ghi đè → <strong><code>replace_item(..., if_match=item["_etag"])</code></strong>, lỗi <code>CosmosAccessConditionFailedError</code> (không phải tăng consistency lên Strong)</li>
</ul>
</li>
<li><code>id</code> bắt buộc, SDK <strong>không tự sinh</strong>; duy nhất trong một logical partition; partition key phải có trong mọi document</li>
</ul>
</li>
<li><strong>Client, quyền, hiệu năng</strong><ul>
<li><code>*_if_not_exists</code> idempotent (hợp code khởi động); <code>get_database_client()</code> / <code>get_container_client()</code> không gọi mạng, lỗi chỉ lộ ở thao tác đầu</li>
<li>Dùng <strong>một <code>CosmosClient</code> singleton</strong> cho cả app (giữ connection pool, cache routing)</li>
<li>Data-plane RBAC: Cosmos DB Built-in Data Contributor</li>
<li>Nạp hàng loạt embedding → bulk mode / TransactionalBatch; 429 thì SDK tự retry theo <code>x-ms-retry-after-ms</code></li>
<li>Point read / query lặp lại → <strong>Integrated cache</strong> (cần dedicated gateway), cache hit = 0 RU</li>
</ul>
</li>
</ul>
</li>
<li><strong>Truy vấn và RU</strong><ul>
<li><strong>Chi phí và partition</strong><ul>
<li>Point read &lt; single-partition query &lt; cross-partition query</li>
<li>Ghi 1 KB ≈ 5–10 RU (tuỳ consistency, lượng index); query lọc đơn giản 3–5 RU; aggregate quét nhiều có thể hàng trăm RU</li>
<li>Query tốn RU → <strong>thêm partition key vào WHERE</strong> để chỉ đọc một partition</li>
<li>Query không có partition key → cần <code>enable_cross_partition_query=True</code></li>
</ul>
</li>
<li><strong>Cú pháp</strong><ul>
<li>Parameterized query → <strong>chống injection + cache được query plan</strong></li>
<li><code>SELECT VALUE</code>, <code>TOP</code>, <code>OFFSET LIMIT</code>, <code>ARRAY_CONTAINS</code>; phân trang bằng continuation token; xem request charge và query metrics</li>
<li>So sánh chuỗi phân biệt hoa thường mặc định → <code>UPPER</code> / <code>LOWER</code>; <code>IN</code>, <code>BETWEEN</code>, <code>STARTSWITH</code>, <code>ENDSWITH</code></li>
<li><code>JOIN f IN p.features</code> là self-join trong <strong>một item</strong> (làm phẳng mảng), không join hai container</li>
</ul>
</li>
<li><strong>Giảm và đo RU</strong><ul>
<li><code>COUNT</code> / <code>SUM</code> / <code>AVG</code> quét mọi item khớp → phải lọc trước</li>
<li>Giảm RU query: lọc sớm, project trường cần, partition key, <code>TOP</code>, indexing policy khớp query</li>
<li>Bẫy: đo RU query nhiều trang → <strong>cộng <code>x-ms-request-charge</code> từng trang trong <code>by_page()</code></strong>, không chỉ trang đầu</li>
</ul>
</li>
</ul>
</li>
<li><strong>Partition key</strong><ul>
<li>Cardinality cao, phân bố đều, có trong filter (vd hay lấy log theo user → <strong><code>userId</code></strong>)</li>
<li>Key xấu: <code>/type</code>, <code>/status</code>, ngày tháng, <code>isActive</code> (boolean), tenant khổng lồ</li>
<li>Logical partition tối đa 20 GB / 10.000 RU/s; hierarchical partition key (tối đa 3 cấp) để vượt 20 GB<ul>
<li>Vượt 20 GB → lỗi ghi bất kể RU; trần cứng vì một giá trị key không bao giờ tách được</li>
</ul>
</li>
<li>Physical partition ~50 GB và 10.000 RU/s; RU chia đều các physical (10k RU trên 5 physical → mỗi cái 2k)</li>
<li>Throttle 429 mà <strong>tổng capacity vẫn dư</strong> → <strong>hot partition</strong>; chẩn đoán bằng Normalized RU consumption theo PartitionKeyRangeId</li>
<li>Ghi dồn theo thời gian (log, telemetry) → synthetic key (<code>deviceId_yyyyMM</code>, <code>tenantId-yyyyMM</code>) hoặc hierarchical</li>
<li>Partition key <strong>không đổi được</strong> sau khi tạo (path được phép lồng, vd <code>/metadata/region</code>) → tạo container mới + change feed / container copy</li>
</ul>
</li>
<li><strong>Hierarchical partition key</strong><ul>
<li>Vd <code>/TenantId</code> → <code>/UserId</code> → <code>/SessionId</code>; ARM/Bicep <code>kind: MultiHash</code>, <code>version: 2</code></li>
<li>Lọc đủ 3 tầng → một partition; lọc tiền tố → cross-partition có đích; chỉ tầng giữa / cuối → fan-out mọi partition</li>
<li>Giá trị tiền tố phải nằm trong WHERE (chỉ truyền <code>PartitionKeyBuilder</code> chưa đủ)</li>
<li>Tầng 1 cardinality thấp (vd 5 tenant) → Microsoft khuyên <strong>synthetic key</strong> chứ không phải hierarchical</li>
<li>Chỉ đặt lúc tạo container, chỉ có ở API for NoSQL; không gán permission theo tiền tố</li>
</ul>
</li>
<li><strong>Các loại index</strong><ul>
<li><strong>Range</strong> (mặc định cho mọi path): <code>=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>!=</code>, <code>IN</code>, ORDER BY <strong>một</strong> trường, <code>CONTAINS</code> / <code>STARTSWITH</code>, <code>IS_DEFINED</code></li>
<li><strong>Composite</strong>: <strong>bắt buộc</strong> cho ORDER BY từ hai trường (thiếu là query <strong>lỗi</strong>, không chỉ chậm); filter nhiều trường</li>
<li><strong>Spatial</strong> (GeoJSON): <code>ST_DISTANCE</code>, <code>ST_WITHIN</code>, <code>ST_INTERSECTS</code></li>
<li><strong>Vector</strong>: flat / quantizedFlat / diskANN → <code>VectorDistance</code></li>
<li><strong>Full-text</strong> (cần full text policy): <code>FullTextScore</code> (BM25), <code>FullTextContains</code></li>
<li><strong>Tuple</strong>: lọc nhiều thuộc tính trong <strong>cùng một phần tử mảng</strong>, path dạng <code>/chunks/[]/{position, tokens}/?</code></li>
<li>Khai trong indexing policy: included/excluded paths, <code>compositeIndexes</code>, <code>spatialIndexes</code>, <code>vectorIndexes</code>, <code>fullTextIndexes</code></li>
</ul>
</li>
<li><strong>Indexing policy</strong><ul>
<li>Mặc định include <code>/*</code>, chỉ exclude <code>/"_etag"/?</code>; <code>id</code> và <code>_ts</code> luôn được index</li>
<li>Cú pháp path: <code>/*</code> cả nhánh (đệ quy), <code>/prop/?</code> giá trị vô hướng, <code>/arr/[]</code> mọi phần tử mảng; include và exclude xung đột thì path cụ thể hơn thắng</li>
<li>Mode <strong>consistent</strong> (mặc định) hoặc <strong>none</strong> (chỉ point read, key-value thuần); <code>lazy</code> đã deprecated</li>
<li>Mảng embedding nằm trong range index làm index phình → <strong>exclude <code>/embedding/*</code></strong> + thêm vector index để giảm RU ghi<ul>
<li>Bẫy: RU ghi cao vì embedding bị range-index → <strong>exclude path</strong>, không phải tăng RU/s</li>
</ul>
</li>
<li>Container ghi nặng: exclude <code>/*</code> rồi include chọn lọc; nhớ include cả partition key (vd <code>/tenantId/?</code>)<ul>
<li>Bẫy: chuyển sang exclude <code>/*</code> xong filter theo <code>tenantId</code> đắt lên → <strong>quên include partition key</strong></li>
</ul>
</li>
<li>Index ít → RU ghi giảm; filter theo trường không index → scan, RU tăng vọt</li>
<li>TTL bật ở container: xoá nền, không tốn RU đọc</li>
</ul>
</li>
<li><strong>Quy tắc composite</strong><ul>
<li>Phải khớp thứ tự trường và chiều sort; <code>(a DESC, b DESC)</code> phục vụ được <code>a ASC, b ASC</code> (đảo toàn bộ) nhưng <strong>không</strong> phục vụ chiều trộn <code>a DESC, b ASC</code></li>
<li>Filter nhiều trường: equality trước, range cuối, mỗi composite chỉ một range filter (hai range thì tạo hai composite)</li>
<li>Lọc rồi sort (vd <code>documentType</code> + <code>uploadDate desc</code>) → <strong>composite index: cột lọc trước, cột sort sau</strong><ul>
<li>Mẹo: viết lại <code>WHERE c.documentType = 'pdf' ORDER BY c.documentType, c.uploadDate DESC</code> để dùng composite</li>
</ul>
</li>
<li><code>ORDER BY c.category, c.price</code> chậm → <strong>thêm composite index</strong>, không phải tăng RU</li>
<li>Chỉ làm cho 5–10 pattern quan trọng nhất, vì mỗi composite làm mọi lần ghi đắt thêm</li>
</ul>
</li>
<li><strong>Đổi indexing policy</strong><ul>
<li>Transformation chạy bất đồng bộ, không gián đoạn dịch vụ</li>
<li><strong>Thêm</strong> index: chỉ có lợi sau khi transformation xong; <strong>bỏ</strong> index: query mất index <strong>ngay lập tức</strong></li>
<li>Thay index: thêm index mới, đợi xong rồi mới bỏ index cũ<ul>
<li>Bẫy: vừa bỏ index cũ để thay thì query đắt vọt → <strong>sai thứ tự</strong>, phải thêm index mới trước</li>
</ul>
</li>
<li>Đo: <code>populate_query_metrics=True</code> + <code>response_hook</code> đọc header <code>x-ms-documentdb-query-metrics</code><ul>
<li>Index utilization thấp, retrieved/output cao → query đang scan, <strong>thêm range/composite index</strong></li>
</ul>
</li>
</ul>
</li>
<li><strong>Consistency</strong><ul>
<li><strong>Các mức</strong><ul>
<li>5 mức: Strong / Bounded staleness / <strong>Session (mặc định)</strong> / Consistent prefix / Eventual; Strong và Bounded đọc tốn 2× RU</li>
<li>User phải thấy ngay bản mình vừa ghi → <strong>Session + truyền session token</strong></li>
<li>Nhận dạng đề: "không bao giờ đọc cũ" → Strong; "trễ có giới hạn đo được" → Bounded; "cũ được nhưng không đảo thứ tự" → Consistent prefix; đếm like/view rẻ nhất → Eventual</li>
<li>Giảm RU workload đọc nhiều, chấp nhận trễ nhỏ → hạ Strong/Bounded xuống <strong>Session hoặc Eventual</strong></li>
</ul>
</li>
<li><strong>Cấu hình ở đâu</strong><ul>
<li>Ba tầng: account default (portal "Default consistency", <code>az cosmosdb update --default-consistency-level</code>, Bicep <code>consistencyPolicy</code>) → client → request</li>
<li><strong>Không có setting consistency ở cấp database / container</strong> (distractor hay gặp)</li>
<li>Client / request override <strong>chỉ nới lỏng</strong>, chỉ tác động đọc; một phần app cần mạnh hơn → <strong>nâng default của account</strong></li>
<li>Python đặt ở cấp client <code>CosmosClient(..., consistency_level=ConsistencyLevel.Eventual)</code> → cần hai mức thì tạo hai client (vd Eventual cho analytics)</li>
</ul>
</li>
<li><strong>Ràng buộc</strong><ul>
<li>Strong không dùng được với multi-region write; region cách nhau trên 8.000 km thì Strong bị chặn mặc định</li>
<li>Bounded staleness: <code>--max-staleness-prefix</code> (K) + <code>--max-interval</code> (T); tối thiểu 10 ghi / 5 giây (1 region), 100.000 ghi / 300 giây (nhiều region); anti-pattern với multi-region write</li>
</ul>
</li>
<li><strong>Session token</strong><ul>
<li>Session token: đọc header <code>x-ms-session-token</code> qua <code>response_hook</code>, truyền <code>session_token=</code> sang service khác; token gắn với partition</li>
<li>Client mất token (restart, instance mới) → đọc như Eventual cho tới khi ghi lại</li>
</ul>
</li>
<li><strong>RU ghi và đo</strong><ul>
<li>RU ghi không đổi theo consistency; Strong chỉ tăng latency ghi</li>
<li>Đo eventual "cũ" tới đâu → metric <strong>PBS</strong> (Metrics → category Consistency)</li>
</ul>
</li>
</ul>
</li>
<li><strong>Vector search</strong><ul>
<li><strong>Bật và policy</strong><ul>
<li>Bật feature <strong>Vector Search for NoSQL API</strong> ở account (CLI <code>--capabilities EnableNoSQLVectorSearch</code>, có thể mất ~15 phút); full-text đã GA, không cần capability</li>
<li><code>vectorEmbeddingPolicy</code>: path, dataType, dimensions, distanceFunction; <strong>không sửa được</strong> sau khi tạo container<ul>
<li>Docs mới cho thêm / bớt path vector, nhưng đổi cấu hình path đã có (dimensions, dataType, distanceFunction, vd đổi model) → <strong>tạo container mới rồi migrate</strong></li>
</ul>
</li>
<li>Container có sẵn chưa bật vector search → tạo container mới + copy dữ liệu</li>
<li>ada-002 → <strong>float32, 1536 chiều, cosine</strong>; text-embedding-3-large 3.072 chiều; query vector phải dùng đúng model của document</li>
<li>dataType float32 (mặc định) / float16 (giảm 50% dung lượng) / int8 / uint8; distance cosine (mặc định) / dotproduct / euclidean</li>
</ul>
</li>
<li>Chọn vector index:<ul>
<li><strong>flat</strong>: brute-force, chính xác 100%, <strong>trần 505 chiều</strong> (1536 chiều không dùng được flat)</li>
<li><strong>quantizedFlat</strong>: brute-force trên vector đã nén, ≤ 4096 chiều, hợp phạm vi tìm <strong>≤ 50.000 vector</strong></li>
<li><strong>diskANN</strong>: ANN, ≤ 4096 chiều, RU và độ trễ thấp nhất, phạm vi tìm <strong>&gt; 50.000 vector</strong> (vd 500K vector/partition chấp nhận xấp xỉ); kết quả không tất định</li>
<li>quantizedFlat / diskANN cần <strong>≥ 1.000 vector</strong>, ít hơn thì quay về full scan, RU cao</li>
<li>Đã tạo diskANN mà container nhỏ vẫn đắt → dưới 1.000 vector; cần kết quả lặp lại y hệt → <strong>flat</strong></li>
<li>Núm build: <code>quantizationByteSize</code> (quantizedFlat + diskANN, 1–512, tăng → chính xác hơn, RU query cao hơn); <code>indexingSearchListSize</code> (chỉ diskANN, 10–500, mặc định 100, tăng → build chậm hơn)</li>
<li>Recall kém: <strong>consistency level và composite index không cứu được</strong> (distractor)</li>
</ul>
</li>
<li><strong>Truy vấn vector</strong><ul>
<li>Chỉnh recall lúc query bằng <code>searchListSizeMultiplier</code>; vector search không dùng được trên account shared throughput, bật rồi không tắt được</li>
<li><code>SELECT TOP k ... ORDER BY VectorDistance(...)</code>; thiếu <code>ORDER BY</code> thì không dùng index; chậm, tốn RU → <strong>giảm TOP xuống 10–20</strong></li>
<li>Chọn TOP N: RAG 5–10, search cho người dùng 10–20 + phân trang, recommendation 3–5; không bao giờ bỏ TOP</li>
<li>Điểm: cosine / dotproduct <strong>cao hơn = giống hơn</strong>; euclidean <strong>thấp hơn = giống hơn</strong>; vector đã chuẩn hoá thì dotproduct cho kết quả như cosine</li>
<li>Ngưỡng: <code>WHERE VectorDistance(c.embedding, @v) &gt; 0.7</code> (0,7–0,9 rất giống, 0,5–0,7 vừa), vẫn kèm ORDER BY + TOP</li>
<li><code>VectorDistance(v1, v2, true, {...})</code> → ép brute-force, recall 100%, RU cao (chỉ cho evaluation, tập nhỏ)</li>
</ul>
</li>
<li><strong>Filter</strong><ul>
<li>Lọc category → filter trong WHERE + truyền <code>partition_key</code></li>
<li>Lọc theo quyền → <code>WHERE ARRAY_CONTAINS(c.accessGroups, @userGroup)</code>; thuộc tính lọc phải được index</li>
<li>TOP 10 có filter mà chỉ trả 3 → <strong>post-filtering</strong> (optimizer tự chọn pre/post), không phải thiếu RU</li>
</ul>
</li>
<li><strong>Hybrid và full-text</strong><ul>
<li>Nhiều vector một document → nhiều entry trong <code>vectorEmbeddings</code>, gộp bằng <code>RRF(VectorDistance(c.titleEmbedding, @v), VectorDistance(c.contentEmbedding, @v))</code></li>
<li>Hybrid → <strong><code>ORDER BY RANK RRF(VectorDistance(...), FullTextScore(...))</code></strong></li>
<li>Hybrid cần đủ 4 thứ: vector policy, full text policy, vector index, full text index; thiếu full text index thì query không chạy</li>
<li>Weighted RRF: mảng trọng số là <strong>tham số cuối</strong>, vd <code>[2, 1]</code> = vector gấp đôi BM25</li>
<li><code>FullTextScore(c.chunk, "pump", "seal")</code>: từ khoá là tham số rời, không phải mảng</li>
<li>Chỉ full-text → <code>ORDER BY RANK FullTextScore(...)</code>; lọc có / không chứa → <code>FullTextContains</code> / <code>FullTextContainsAll</code> / <code>FullTextContainsAny</code> trong WHERE</li>
<li><code>ORDER BY RANK</code> không trộn với ORDER BY thường; hybrid đắt hơn vector thuần</li>
</ul>
</li>
</ul>
</li>
<li><strong>Change feed</strong><ul>
<li>Bật sẵn trên mọi container; thứ tự chỉ bảo đảm trong một partition key</li>
<li>Latest version mode không bắt được delete (dùng soft-delete + TTL); all versions and deletes mode thì bắt được</li>
<li>Processor cần lease container; consumer phải idempotent<ul>
<li>Lease container partition key <code>/id</code>, ~400 RU/s; mỗi consumer cần lease riêng hoặc <code>leaseContainerPrefix</code> khác nhau (dùng chung là ăn mất thay đổi của nhau)</li>
</ul>
</li>
<li>At-least-once; số physical partition quyết định mức song song tối đa</li>
<li>Ba cách tiêu thụ: Change Feed Processor, Functions Cosmos DB trigger (đơn giản nhất), pull model<ul>
<li>Làm mới embedding không polling → <strong>Functions Cosmos DB trigger</strong>; chỉ re-embed khi trường liên quan đổi<ul>
<li>Chỉ đổi status mà muốn giảm chi phí embedding → <strong>so <code>contentHash</code> (SHA-256)</strong> của nội dung đã embed</li>
</ul>
</li>
<li>Re-embed toàn bộ một lần, không muốn thêm lease container → <strong>pull model</strong> (<code>query_items_change_feed</code>, tự lưu continuation token)</li>
</ul>
</li>
</ul>
</li>
<li><strong>Triển khai</strong><ul>
<li>Role data-plane gán bằng <strong><code>az cosmosdb sql role assignment create</code></strong> (<code>...0001</code> Reader, <code>...0002</code> Contributor), không phải IAM<ul>
<li>Bẫy: IAM "Contributor" chỉ quản lý account, không đọc/ghi item qua RBAC (vẫn <code>listKeys</code> được nếu chưa tắt key)</li>
</ul>
</li>
<li>Tắt key → <strong><code>disableLocalAuth: true</code></strong></li>
</ul>
</li>
</ul>
</section>
<section id="r2-2">
<h3>2.2 Azure Database for PostgreSQL<a class="anch" href="#r2-2">#</a></h3>
<ul>
<li><strong>Kết nối và bảo mật</strong><ul>
<li>psycopg, <code>sslmode</code> require / verify-full; Entra token làm mật khẩu, hết hạn ~1 giờ</li>
<li><strong>Entra token</strong><ul>
<li>Token scope <code>https://ossrdbms-aad.database.windows.net/.default</code> truyền vào <code>password</code>; psql thì qua <code>PGPASSWORD</code></li>
<li>Hạn token: user tối đa 1 giờ, system-assigned managed identity tối đa 24 giờ<ul>
<li>Bẫy: app chạy cả tiếng rồi kết nối mới trong pool lỗi → <strong>gọi <code>get_token</code> trong đường mở kết nối</strong>, không lấy một lần lúc khởi động</li>
</ul>
</li>
<li>Username = userPrincipalName của Entra (phân biệt hoa thường); nhóm / managed identity → <code>pgaadauth_create_principal(...)</code>; group sync mỗi 30 phút</li>
<li>Xoá user khỏi Entra vẫn đăng nhập được tới khi token hết hạn → muốn chặn ngay thì xoá role trong PostgreSQL</li>
<li>Cấm hoàn toàn mật khẩu → <strong>Microsoft Entra authentication only</strong> (Bicep <code>passwordAuth: 'Disabled'</code>)</li>
</ul>
</li>
<li><strong>TLS / sslmode</strong><ul>
<li>TLS 1.2 / 1.3 bắt buộc; sslmode: disable (bị từ chối) / allow / prefer / require (chỉ mã hoá) / verify-ca / <strong>verify-full</strong> (kiểm CA + hostname)<ul>
<li>Mã hoá + chống giả mạo server (MITM) → <strong><code>verify-full</code></strong></li>
</ul>
</li>
</ul>
</li>
<li><strong>Query và kết nối</strong><ul>
<li>Luôn parameterized query (nhất là khi ghi embedding); timeout, retry, bắt đúng loại lỗi</li>
<li>Nhiều connection ngắn → <strong>ConnectionPool</strong>; nhiều query/s (vd 500/s) → <strong>PgBouncer tích hợp cổng 6432, transaction mode</strong> (dùng <code>SET LOCAL</code>)</li>
</ul>
</li>
</ul>
</li>
<li><strong>Pooling và PgBouncer</strong><ul>
<li><strong>Vì sao cần</strong><ul>
<li>Mỗi kết nối là một process ~10 MB RAM; mở kết nối mới mất 50–200 ms</li>
<li>Function / Container Apps scale hàng trăm instance, lỗi "too many connections" → <strong>PgBouncer</strong>, không phải nâng SKU</li>
<li>Max connections: B1ms 50 · GP 2 vCore 859 · GP 4 vCore 1.718 · MO 4 vCore 3.437 · MO 16 vCore 5.000</li>
</ul>
</li>
<li><strong>Cấu hình PgBouncer</strong><ul>
<li>Bật <code>pgbouncer.enabled = true</code>; 6432 qua pooler, <strong>5432 vẫn kết nối thẳng</strong>; PgBouncer <strong>không có trên Burstable</strong></li>
<li>Pool mode: session (giảm kết nối ít) · <strong>transaction</strong> (khuyến nghị cho vector search) · statement (không chạy được transaction nhiều câu)</li>
<li>Transaction mode không dùng được: SET phiên, advisory lock, LISTEN/NOTIFY, prepared statement mức session → vào cổng 5432</li>
<li>Prepared statement qua PgBouncer → đặt <code>pgbouncer.max_prepared_statements &gt; 0</code> hoặc tắt bằng <code>prepare_threshold=None</code> của psycopg</li>
<li>Bẫy: <code>SET hnsw.ef_search = 200</code> lúc mở kết nối mà truy vấn sau vẫn chạy 40 → đang qua transaction mode, dùng <strong><code>SET LOCAL</code></strong> trong transaction</li>
<li>Mặc định <code>default_pool_size</code> 50, <code>max_client_conn</code> 5000; khóa học gợi ý pool 20–50, <code>query_wait_timeout</code> 30–120 giây</li>
</ul>
</li>
<li><strong>Pool trong app</strong><ul>
<li>Chia pool: max_size mỗi instance ≈ số kết nối DB / số instance (1.000 kết nối, 10 instance → 100); tái tạo kết nối mỗi 30–60 phút</li>
<li>Kết nối idle vẫn ăn RAM → <code>idle_in_transaction_session_timeout</code>; soi <code>pg_stat_activity</code></li>
</ul>
</li>
</ul>
</li>
<li><strong>psycopg trong app</strong><ul>
<li>Timeout: <code>connect_timeout=10</code>, <code>options="-c statement_timeout=30000"</code> (ms); app web 5–30 giây</li>
<li><code>OperationalError</code> (mất mạng, failover) → <strong>retry backoff + jitter</strong>; <code>DeadlockDetected</code> / <code>LockNotAvailable</code> → rollback rồi retry</li>
<li><code>UniqueViolation</code> / <code>ForeignKeyViolation</code> / <code>CheckViolation</code> / lỗi cú pháp → <strong>không retry</strong></li>
<li><code>PoolTimeout</code> → trả lỗi "busy, retry"; xảy ra thường xuyên thì scale</li>
<li>Ghi hàng loạt: <code>executemany</code> vài trăm–vài nghìn dòng; <strong>từ 10.000 dòng → <code>COPY</code></strong> (nhanh 2–10×)</li>
<li>Lấy nhiều item → <code>WHERE id = ANY(%s)</code>; <code>register_vector(conn)</code> để truyền thẳng numpy / list</li>
</ul>
</li>
<li><strong>Schema và SQL</strong><ul>
<li><strong>Kiểu dữ liệu</strong><ul>
<li>Metadata thay đổi → <strong>JSONB</strong>; giới hạn giá trị → <strong><code>CHECK (status IN (...))</code></strong></li>
<li>Chuỗi → <code>text</code> (varchar(n) không nhanh hơn, char(n) chậm nhất); thời điểm → <code>timestamptz</code>; tiền → <code>numeric</code>; điểm số → real / double</li>
<li>Khoá chính: <code>bigint GENERATED ALWAYS AS IDENTITY</code> (8 byte, B-tree ít phân mảnh) hoặc <code>uuid</code> (<code>gen_random_uuid()</code>, sinh ở client); SERIAL 32 bit, BIGSERIAL 64 bit</li>
</ul>
</li>
<li><strong>Tổ chức và FK</strong><ul>
<li>Cô lập hoàn toàn, backup riêng → <strong>database riêng</strong>; cần FK / JOIN chéo, multitenant logic → <strong>schema riêng</strong>; mặc định schema <code>public</code></li>
<li>Xoá cha thì con mất theo → <strong><code>ON DELETE CASCADE</code></strong> ở FK bảng con; không khai gì = RESTRICT (xoá cha báo lỗi)</li>
</ul>
</li>
<li><strong>Câu lệnh</strong><ul>
<li>Lấy id vừa sinh → <strong><code>RETURNING</code></strong>; upsert → <strong><code>ON CONFLICT DO UPDATE</code></strong> (bẫy: <code>ON DUPLICATE KEY</code> là MySQL, <code>OUTPUT</code> là SQL Server)<ul>
<li>Upsert dùng <code>EXCLUDED.col</code>; <code>RETURNING (xmax = 0) AS is_new</code> phân biệt chèn / cập nhật; <code>ON CONFLICT DO NOTHING</code>; ghi checkpoint agent idempotent</li>
</ul>
</li>
<li>Alias ở SELECT <strong>không dùng được trong WHERE</strong> (WHERE chạy trước SELECT), chỉ ORDER BY / LIMIT</li>
<li>JSONB: <code>-&gt;</code> trả JSON, <strong><code>-&gt;&gt;</code> trả text</strong> (so với chuỗi phải dùng <code>-&gt;&gt;</code>); <code>#&gt;</code> / <code>#&gt;&gt;</code> theo đường dẫn; <code>?</code> key tồn tại; <code>@&gt;</code> chứa; <code>jsonb_array_elements_text</code></li>
</ul>
</li>
<li><strong>Phân trang</strong><ul>
<li>Keyset pagination, CTE; TOAST, partitioning, bloat</li>
<li>Phân trang lịch sử chat càng sâu càng chậm → <strong>keyset</strong> <code>WHERE (created_at, id) &lt; (...) ORDER BY created_at DESC, id DESC</code>, không phải thêm index cho OFFSET</li>
</ul>
</li>
</ul>
</li>
<li><strong>Index thường (không phải vector)</strong><ul>
<li><strong>B-tree</strong>: mặc định của <code>CREATE INDEX</code>, phải tự tạo; cho <code>=</code>, <code>IN</code>, khoảng, ORDER BY; PK và unique tự có index<ul>
<li>B-tree nhiều cột vd <code>(tenant_id, created_at DESC)</code>: phục vụ lọc theo cột đầu, <strong>không</strong> phục vụ truy vấn chỉ lọc cột sau</li>
<li>Metadata cố định hay lọc → cột riêng + B-tree (có statistics); metadata thưa → JSONB + GIN</li>
</ul>
</li>
<li><strong>GIN</strong> trên jsonb: chỉ tăng tốc <code>@&gt;</code>, <code>&lt;@</code>, <code>?</code>, <code>?|</code>, <code>?&amp;</code>; <code>jsonb_path_ops</code> nhỏ và nhanh hơn cho <code>@&gt;</code><ul>
<li>Bẫy: <code>(attributes-&gt;&gt;'price')::numeric BETWEEN ...</code> vẫn seq scan dù có GIN → GIN <strong>không lọc khoảng</strong>, cần <strong>expression index</strong> hoặc cột riêng</li>
</ul>
</li>
<li><strong>GIN</strong> trên <code>tsvector</code> cho full-text; <strong>GiST</strong> chỉ khi cập nhật liên tục; địa lý → GiST qua PostGIS</li>
<li><strong>Partial index</strong> cho nhánh nóng (<code>... WHERE lang = 'vi'</code>)</li>
<li><strong>Expression index</strong> phải khớp đúng biểu thức trong query (vd <code>lower(email)</code>, <code>to_tsvector('english', chunk)</code>), lệch là Seq Scan không lỗi</li>
<li>Fuzzy match / autocomplete → extension <strong><code>pg_trgm</code></strong>; key-value đơn giản → <code>hstore</code></li>
<li>Mỗi index làm chậm INSERT/UPDATE/DELETE → app ghi nhiều cân nhắc từng index</li>
<li>Bảng đang chạy → <strong><code>CREATE INDEX CONCURRENTLY</code></strong> (không khoá ghi); lỗi giữa chừng để lại index INVALID → DROP rồi tạo lại</li>
</ul>
</li>
<li><strong>pgvector</strong><ul>
<li>Thêm <code>vector</code> vào allowlist <strong><code>azure.extensions</code></strong> rồi <code>CREATE EXTENSION vector</code><ul>
<li>Lỗi "not allow-listed" → quên bước <code>azure.extensions</code>; pg_diskann, azure_ai cũng phải allowlist</li>
</ul>
</li>
<li>Kiểu <code>vector</code> index được tối đa 2000 chiều; <code>halfvec</code> 4000 chiều, tốn ít RAM hơn<ul>
<li>text-embedding-3-large 3.072 chiều → lưu được nhưng không index được bằng <code>vector</code> → <strong>ép halfvec trong expression index</strong> hoặc gọi model với <code>dimensions=1536</code></li>
</ul>
</li>
<li>Lỗi "column does not have dimensions" → khai <code>vector(1536)</code> chứ không để trống</li>
<li>Toán tử: <code>&lt;=&gt;</code> cosine (embedding đã chuẩn hoá, đo ngữ nghĩa) ↔ <code>vector_cosine_ops</code>; <code>&lt;-&gt;</code> L2; <code>&lt;#&gt;</code> inner product âm; lệch opclass thì index bị bỏ qua<ul>
<li>Chọn toán tử: mặc định cosine; L2 khi <strong>độ lớn có ý nghĩa</strong>; <code>&lt;#&gt;</code> khi model huấn luyện cho dot product hoặc vector đã chuẩn hoá</li>
<li><code>&lt;#&gt;</code> trả số âm để luôn <code>ORDER BY ... ASC</code>; vector đã chuẩn hoá thì 3 toán tử xếp hạng như nhau; kiểm bằng <code>vector_norm()</code></li>
<li>Chi phí: L2 đắt nhất, <code>&lt;#&gt;</code> rẻ nhất (vector phải chuẩn hoá trước)</li>
</ul>
</li>
</ul>
</li>
<li><strong>Index vector</strong><ul>
<li><strong>HNSW</strong>: <code>m</code> (số kết nối tối đa mỗi node), <code>ef_construction</code>, <code>hnsw.ef_search</code>; recall tốt, tốn RAM, tạo được trên bảng rỗng<ul>
<li>Mặc định <code>m</code> 16, <code>ef_construction</code> 64, <code>hnsw.ef_search</code> 40; ràng buộc <strong><code>ef_construction ≥ 2 × m</code></strong> (lệch là ERROR)</li>
<li><code>ef_search</code> phải ≥ k (LIMIT 100 mà để 40 → thiếu kết quả, không cảnh báo); 100–200 cho recall 99%+</li>
<li>Recall thấp → tăng <code>ef_search</code> trước (miễn phí); đổi <code>m</code> / <code>ef_construction</code> <strong>phải build lại</strong></li>
<li>Build HNSW: graph phải vừa <code>maintenance_work_mem</code> (NOTICE "no longer fits" → chậm hàng chục lần); thêm <code>max_parallel_maintenance_workers</code></li>
</ul>
</li>
<li><strong>IVFFlat</strong>: <code>lists</code> (≈ <code>rows/1000</code> tới 1 triệu dòng, <code>sqrt(rows)</code> khi vượt), <code>probes</code>; build nhanh, phải nạp dữ liệu trước; hợp dữ liệu lớn cập nhật theo lô / refresh hằng ngày, cần build nhanh ⚠<ul>
<li><code>ivfflat.probes</code> <strong>mặc định 1</strong> (bẫy recall); khởi đầu <code>sqrt(lists)</code>; <code>probes = lists</code> = tìm chính xác</li>
<li>Build trên bảng rỗng → NOTICE "little data"; tâm cụm đóng băng, nạp thêm nhiều → <strong>REINDEX</strong></li>
<li>Chọn: mặc định HNSW (đọc nhiều, recall 99%+); IVFFlat khi RAM hạn chế, cập nhật hàng loạt, chấp nhận 90–95%</li>
</ul>
</li>
<li>DiskANN (<code>pg_diskann</code>) cho dữ liệu rất lớn<ul>
<li>DiskANN: index trên disk, build nhanh hơn HNSW, nhắm 100 triệu+ vector; núm <code>max_neighbors</code>, <code>l_value_ib</code>, query <code>diskann.l_value_is</code></li>
</ul>
</li>
<li>Có filter thì index trả thiếu kết quả → iterative scan, partial index, partition; filter bị seq scan → <strong>kiểm tra B-tree trên cột filter</strong><ul>
<li>Iterative scan (pgvector 0.8.0+): <code>SET hnsw.iterative_scan = strict_order</code> / <code>relaxed_order</code>, mặc định off, bật ở session / transaction</li>
</ul>
</li>
<li>Nhiều cột vector → mỗi cột một index riêng</li>
<li><code>EXPLAIN (ANALYZE, BUFFERS)</code> để xem index có được dùng</li>
</ul>
</li>
<li><strong>Đọc EXPLAIN và chẩn đoán</strong><ul>
<li>Không thấy <code>Index Scan using ..._hnsw</code> → thiếu <code>ORDER BY ... LIMIT</code> hoặc toán tử lệch opclass</li>
<li>Ước lượng rows lệch xa actual → <code>ANALYZE</code> bảng; Rows Removed by Filter cao → composite / partial index</li>
<li><code>shared read</code> lớn, <code>shared hit</code> nhỏ → đọc đĩa, index không vừa RAM</li>
<li>Truy vấn tốn nhất → <code>pg_stat_statements</code> theo <code>total_exec_time</code>; Query Store (<code>pg_qs.query_capture_mode</code>)</li>
<li>Index có được dùng → <code>pg_stat_user_indexes.idx_scan</code> (= 0 là không); tiến độ build → <code>pg_stat_progress_create_index</code></li>
</ul>
</li>
<li><strong>Vận hành và sizing</strong><ul>
<li><strong>Tier và RAM</strong><ul>
<li>Tier Burstable / General Purpose / <strong>Memory Optimized</strong> (HNSW cần index nằm trong RAM); CPU cao, cần latency thấp → <strong>Memory Optimized nhiều vCore hơn</strong> ⚠</li>
<li>RAM mỗi vCore: Burstable 2 GB (B-series) · GP 4 GB (D-series) · MO 8 GB (E-series); đổi tier được, server restart ngắn</li>
<li>1 triệu vector 1536 chiều ≈ 6 GB dữ liệu; HNSW ≈ 1,5–2× (IVFFlat 1–1,5×); RAM phải lớn hơn index ít nhất 50%</li>
<li>Truy vấn vector chậm đều → nâng RAM / SKU; recall thấp → <code>ef_search</code> (không liên quan SKU); build cả giờ → <code>maintenance_work_mem</code> + parallel workers</li>
</ul>
</li>
<li><strong>Cấu hình và bảo trì</strong><ul>
<li>Cache hit thấp (vd 85%) → <strong>tăng <code>shared_buffers</code></strong></li>
<li><code>shared_buffers</code> ≈ 25% RAM, <code>effective_cache_size</code> ≈ 75%; <code>work_mem</code> tăng bằng <code>SET</code> theo session (nhân theo kết nối)</li>
<li>Re-embed nhiều dòng → <strong>chia transaction 1.000–5.000 dòng</strong>; rebuild index, re-embed khi đổi model</li>
<li>MVCC, autovacuum, isolation, lock khi migrate; backup, PITR, read replica</li>
</ul>
</li>
<li><strong>Scale và replica</strong><ul>
<li>Scale up trước; scale out (replica, cache) khi tổng tải vượt một server, đọc nhiều chấp nhận hơi cũ</li>
<li>Read replica: bất đồng bộ, <strong>tối đa 5</strong> mỗi primary, endpoint riêng (app tự định tuyến), cross-region được<ul>
<li>Đọc ngay sau khi ghi qua replica không thấy dữ liệu → <strong>gửi về primary</strong>, không thêm replica; đo lag bằng <code>pg_last_xact_replay_timestamp()</code></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><strong>MVCC, vacuum, lock</strong><ul>
<li>UPDATE / DELETE để lại dead tuple; re-embed cả bảng làm bảng và index phình gần gấp đôi → <code>REINDEX INDEX CONCURRENTLY</code></li>
<li>DELETE xong dung lượng không giảm → VACUUM chỉ đánh dấu tái dùng; trả về OS cần <strong>VACUUM FULL</strong> (khoá ACCESS EXCLUSIVE) hoặc <code>pg_repack</code></li>
<li>Xoá dữ liệu cũ hàng loạt → <strong>partition theo thời gian</strong>, <code>DETACH PARTITION</code> + <code>DROP TABLE</code></li>
<li>autovacuum theo <code>threshold</code> (50) + <code>scale_factor</code> × số dòng; bảng nóng đặt riêng, vd re-embed <code>autovacuum_vacuum_scale_factor = 0.05</code></li>
<li>Transaction mở lâu / idle in transaction chặn dọn dead tuple</li>
<li>DDL xếp hàng sau query dài làm đứng hệ thống → <strong><code>SET lock_timeout = '3s'</code></strong> trước DDL; <code>ALTER COLUMN ... TYPE</code> viết lại cả bảng</li>
</ul>
</li>
<li><strong>Vòng đời index và embedding</strong><ul>
<li>Build lại khi latency tăng, kết quả kém liên quan, hoặc nạp thêm trên 20–30% dữ liệu mới</li>
<li>Thay index không downtime: <code>CREATE INDEX CONCURRENTLY</code> bản mới → kiểm <code>EXPLAIN ANALYZE</code> → DROP cũ → RENAME</li>
<li>Cập nhật embedding: đồng bộ (luôn khớp, chậm, phụ thuộc API) hoặc <strong>cờ <code>embedding_stale</code></strong> + job nền theo lô</li>
<li>Đổi model ada-002 → 3-large không downtime, rollback được → <strong>thêm cột <code>embedding_v2</code> + backfill theo lô</strong>; <code>ALTER COLUMN TYPE vector(3072)</code> là sai<ul>
<li>Không trộn vector của hai model trong một cột</li>
</ul>
</li>
</ul>
</li>
<li><strong>RAG</strong><ul>
<li><strong>Truy xuất vector</strong><ul>
<li>Bảng chunk + metadata filter trong WHERE, ngưỡng khoảng cách</li>
<li>Không có tài liệu phù hợp mà vẫn trích tài liệu không liên quan → <strong>ngưỡng khoảng cách trong WHERE</strong> (<code>embedding &lt;=&gt; $1 &lt; 0.4</code>; cosine 0,3 chặt – 0,6 lỏng), tăng LIMIT / ef_search không giúp</li>
<li><code>azure_ai</code>: <code>azure_openai.create_embeddings(...)</code> sinh embedding ngay trong SQL</li>
</ul>
</li>
<li><strong>Hybrid và full-text</strong><ul>
<li>Hybrid: <code>tsvector</code> + GIN, kết hợp điểm bằng <strong>RRF</strong>; ngân sách token, trích dẫn nguồn</li>
<li>Full-text: cột <code>tsvector GENERATED ALWAYS AS (to_tsvector('english', chunk)) STORED</code> + GIN (hết cửa lệch biểu thức)</li>
<li>Input người dùng → <code>websearch_to_tsquery</code>; <code>plainto_tsquery</code> nối AND; <code>to_tsquery</code> ném lỗi khi sai cú pháp</li>
<li><code>ts_rank_cd</code> (cover density) không phải BM25; Postgres không có BM25 sẵn; tiếng Việt dùng cấu hình <code>'simple'</code></li>
<li>RRF <code>1.0/(60 + rank)</code>, <code>LEFT JOIN</code> + <code>COALESCE</code>; lọc tenant đặt trong <strong>cả hai nhánh</strong>; Postgres không có hybrid dựng sẵn (khác Azure AI Search)</li>
<li>Khóa học còn dạy hybrid tổng có trọng số <code>(1 - (embedding &lt;=&gt; $1)) * 0.7 + ts_rank(...) * 0.3</code>; keyword nặng hơn khi có tên riêng, mã</li>
</ul>
</li>
<li><strong>Chunk và đánh giá</strong><ul>
<li>Bảng <code>source_documents</code> + <code>document_chunks</code> (<code>ON DELETE CASCADE</code>); lấy chunk kề bên (cửa sổ ngữ cảnh) nhờ index <code>(document_id, chunk_index)</code><ul>
<li>Thiếu ý vì nội dung nằm ở đoạn liền kề → <strong>cửa sổ ngữ cảnh</strong> hoặc overlapping chunk</li>
</ul>
</li>
<li>Đánh giá: precision (thấp → siết ngưỡng, giảm top-k), recall (thấp → nới ngưỡng, tăng ef_search/probes), MRR; bộ 20–50 truy vấn</li>
</ul>
</li>
</ul>
</li>
<li><strong>Kiến trúc và triển khai</strong><ul>
<li>Compute tách storage; backup mặc định 7 ngày, tối đa <strong>35 ngày</strong> (cần 60 ngày → PITR không làm được)</li>
<li>Khôi phục về một thời điểm không ảnh hưởng production → <strong>PITR, luôn ra server mới</strong></li>
<li>Mạng private (VNet) chọn lúc tạo, không chuyển sang VNet khác; Burstable không có HA / PgBouncer</li>
<li><code>az postgres flexible-server parameter set --name azure.extensions --value vector</code>; tương tự <code>pgbouncer.enabled</code></li>
<li>Firewall <code>0.0.0.0</code> = mọi dịch vụ Azure (rộng hơn tưởng)</li>
</ul>
</li>
</ul>
</section>
<section id="r2-3">
<h3>2.3 Azure Managed Redis<a class="anch" href="#r2-3">#</a></h3>
<ul>
<li><strong>Tier và module</strong><ul>
<li>Thay Azure Cache for Redis (Enterprise/Enterprise Flash ngừng 31/3/2027, Basic/Standard/Premium ngừng 30/9/2028)</li>
<li>Dựa trên Redis Enterprise, module RediSearch, RedisJSON, RedisBloom, RedisTimeSeries</li>
<li>Memory Optimized 8:1 (rẻ, dev/test) · Balanced 4:1 (mặc định) · Compute Optimized 2:1 (throughput cao) · Flash Optimized RAM + NVMe (preview)</li>
<li>Compute Optimized hợp search / vector nặng; Flash hợp dataset rất lớn, key nguội<ul>
<li><strong>Flash Optimized không có RediSearch / RedisBloom / RedisTimeSeries</strong> → cần vector thì loại</li>
</ul>
</li>
<li>Module và clustering policy <strong>chỉ chọn lúc tạo</strong>, khoá sau đó</li>
</ul>
</li>
<li><strong>Kết nối và bảo mật</strong><ul>
<li><strong>Cổng TLS 10000</strong> (6380 là Azure Cache for Redis cũ, 6379 không TLS); kết nối bằng hostname, cùng region với app<ul>
<li>Client cũ quen cổng 6380 không kết nối được Managed Redis; TLS 1.2 / 1.3</li>
</ul>
</li>
<li>Entra ID bật sẵn, access key tắt sẵn; Python dùng <code>redis-entraid</code>, scope <code>https://redis.azure.com/.default</code><ul>
<li>Cấp quyền: blade Authentication → thêm managed identity (access policy assignment)</li>
</ul>
</li>
<li>Private endpoint group-id <code>redisEnterprise</code>; CLI <code>az redisenterprise</code></li>
<li><code>az redisenterprise create --modules name=RediSearch --clustering-policy EnterpriseCluster --eviction-policy NoEviction</code><ul>
<li>RediSearch bắt buộc clustering <strong>Enterprise</strong> và eviction <strong>NoEviction</strong> (CLI mặc định VolatileLRU)</li>
</ul>
</li>
<li>Scale khi memory / CPU / connected clients / network liên tục &gt; 75%; production bật HA, persistence hoặc import/export</li>
</ul>
</li>
<li><strong>Clustering policy</strong><ul>
<li>Enterprise: mọi client (<code>redis.Redis</code>), lệnh nhiều key chạy được<ul>
<li>Enterprise chạy được <code>DEL</code>, <code>MSET</code>, <code>MGET</code>, <code>EXISTS</code>, <code>UNLINK</code>, <code>TOUCH</code>; chặn các lệnh <code>CLUSTER INFO</code> / <code>NODES</code> / <code>SLOTS</code> / <code>KEYSLOT</code></li>
</ul>
</li>
<li>OSS: client cluster-aware (<code>redis.cluster.RedisCluster</code>); key khác slot → lỗi <strong>CROSSSLOT</strong> (sửa bằng hash tag hoặc dùng Enterprise)</li>
<li>Active-Active: chặn <strong>FLUSHALL/FLUSHDB</strong><ul>
<li>Active-Active chỉ cho lệnh nhiều key <code>MGET</code>, <code>EXISTS</code>, <code>TOUCH</code>; đồng bộ cache / session giữa nhiều region</li>
</ul>
</li>
</ul>
</li>
<li><strong>Lệnh và kiểu dữ liệu</strong><ul>
<li>String, Hash (object), List (queue/feed), <code>INCR</code> (counter, rate limit, nguyên tử)</li>
<li>Set kèm hết hạn trong một thao tác atomic → <strong><code>setex()</code></strong> (chỉ string; Hash/List thì ghi rồi <code>EXPIRE</code>)</li>
<li><code>TTL</code> = <strong>-1: có key nhưng không có hạn</strong>, -2: key không tồn tại; <code>EXPIRE</code>/<code>PEXPIRE</code>/<code>EXPIREAT</code>/<code>PERSIST</code></li>
<li>Production <strong>không dùng <code>KEYS</code></strong>, dùng <code>SCAN</code> (xoá theo pattern bằng SCAN + <code>UNLINK</code> theo lô)<ul>
<li><code>UNLINK</code> xoá bất đồng bộ, không block; <code>FLUSHDB</code> cẩn thận</li>
</ul>
</li>
<li><code>SET NX EX</code> làm lock; pipeline gom round trip; <code>decode_responses=False</code> cho dữ liệu nhị phân</li>
</ul>
</li>
<li><strong>Caching</strong><ul>
<li>Cache-aside là mặc định; write-through, write-behind<ul>
<li>Write-through: đọc luôn ấm, ghi chậm hơn; write-behind: nhanh nhất, rủi ro mất dữ liệu khi cache chết</li>
</ul>
</li>
<li>TTL: đổi thường xuyên 1–5 phút · vừa 15–60 phút · ổn định 1–24 giờ · tĩnh ≥ 24 giờ</li>
<li>Invalidation: TTL, xoá khi ghi DB, theo pattern, theo sự kiện; chống stampede bằng jitter hoặc lock<ul>
<li>Theo sự kiện: change feed Cosmos / Event Grid → Function → <code>DEL</code>; theo nhóm: <code>SADD tag:doc42 k1 k2</code> rồi <code>SMEMBERS</code> + <code>UNLINK</code></li>
</ul>
</li>
<li>Eviction <code>allkeys-lru</code> (cache thuần), <code>volatile-lru</code>, <code>noeviction</code> (ghi lỗi OOM khi đầy)<ul>
<li><code>volatile-lru</code> khi có key phải sống mãi; <code>volatile-ttl</code>; <code>noeviction</code> cho queue / session</li>
</ul>
</li>
<li>Use case: data cache, content cache, session store, <strong>semantic cache</strong> cho câu trả lời LLM</li>
</ul>
</li>
<li><strong>Pub/sub và Streams</strong><ul>
<li><strong>Pub/sub</strong><ul>
<li>Pub/sub chỉ giao cho subscriber <strong>đang kết nối</strong>, không lưu, không backpressure → broadcast realtime, invalidate cache cục bộ; <code>PSUBSCRIBE</code> nhận type <code>pmessage</code></li>
<li>Pub/sub là at-most-once; mọi subscriber đều nhận bản sao</li>
<li>Mọi instance API phải xoá cache model cục bộ → <strong>pub/sub</strong> đúng (consumer group thì chỉ một instance nhận)</li>
<li>Bẫy: 3 worker cùng subscribe pub/sub thì việc chạy 3 lần; cần DLQ, session, scheduled → Service Bus</li>
</ul>
</li>
<li><strong>Streams</strong><ul>
<li>Streams <strong>lưu lại</strong> cho consumer group; thêm message → <strong><code>XADD</code></strong></li>
<li>Pipeline cần retry, không để 2 worker làm cùng một việc → <strong>Streams + consumer group, <code>XREADGROUP</code></strong>; xong thì <code>XACK</code></li>
<li><code>xgroup_create(..., id="$")</code> chỉ message mới, <code>"0"</code> từ đầu, <code>mkstream=True</code>; <code>XREADGROUP</code> với <code>"&gt;"</code> = message mới, <code>"0"</code> = message đang treo của chính consumer</li>
<li>Message chưa ack nằm trong PEL; worker chết → <code>XPENDING</code> + <code>XCLAIM</code>/<code>XAUTOCLAIM</code>; <code>BUSYGROUP</code> = group đã có<ul>
<li><code>XAUTOCLAIM</code> (Redis 6.2+) tự duyệt PEL; khóa học lấy idle 5 phút (300000 ms)</li>
</ul>
</li>
<li>Consumer name ổn định qua restart (hostname + pid) để tự xử lý lại PEL của mình; cùng group, mỗi worker một consumer name</li>
<li>Stream không tự dọn → <code>maxlen</code> approximate / <code>XTRIM</code></li>
</ul>
</li>
</ul>
</li>
<li><strong>Vector</strong><ul>
<li><strong>Tạo index</strong><ul>
<li><code>FT.CREATE ... VECTOR HNSW|FLAT TYPE FLOAT32 DIM ... DISTANCE_METRIC COSINE</code>; query KNN bắt buộc <strong><code>DIALECT 2</code></strong>, vector truyền <strong>bytes</strong></li>
<li><code>FT.CREATE idx ON HASH|JSON PREFIX 1 doc: SCHEMA ...</code>; key khớp prefix được index tự động khi ghi</li>
<li><code>DIM</code> phải khớp model; query 768 chiều vào index 1536 bị từ chối</li>
</ul>
</li>
<li><strong>Metric và kiểu</strong><ul>
<li>Text embedding → <strong>COSINE</strong> (L2 cho ảnh, IP khi đã chuẩn hoá); kiểu → <strong>FLOAT32</strong><ul>
<li>FLOAT64 gấp đôi bộ nhớ, không cải thiện chính xác; L2 cho embedding huấn luyện bằng cosine = vô nghĩa ngữ nghĩa</li>
</ul>
</li>
</ul>
</li>
<li><strong>HNSW hay FLAT</strong><ul>
<li>Trên 10K vector, chấp nhận 95–99% → <strong>HNSW</strong>; nhỏ, cần chính xác tuyệt đối → FLAT</li>
<li>Tham số HNSW: <code>M</code>, <code>EF_CONSTRUCTION</code> lúc build, <code>EF_RUNTIME</code> lúc query</li>
<li><strong><code>EF_RUNTIME</code></strong> = đánh đổi tốc độ / độ chính xác (số node duyệt); mặc định ~10, nên 50–200<ul>
<li><code>EF_RUNTIME</code> đặt ngay trong query: <code>*=&gt;[KNN 10 @embedding $query_vec EF_RUNTIME 100 AS score]</code></li>
</ul>
</li>
</ul>
</li>
<li><strong>Hash hay JSON</strong><ul>
<li><strong>Hash</strong> khi dữ liệu phẳng, cần tiết kiệm bộ nhớ (vector <code>tobytes()</code>); JSON khi lồng nhau hoặc nhiều vector (<code>tolist()</code>)<ul>
<li>Bẫy: ghi <code>embedding.tolist()</code> vào <code>hset</code> rồi KNN không trả gì → <strong>Hash cần <code>tobytes()</code></strong></li>
<li>Lúc query vector luôn truyền bytes FLOAT32 qua params, dù lưu Hash hay JSON; đổi Hash ↔ JSON phải ingest lại + tạo index mới</li>
</ul>
</li>
<li>Nạp hàng loạt → pipeline <code>hset</code> (nhanh 10–100×)</li>
</ul>
</li>
<li><strong>Truy vấn và vai trò</strong><ul>
<li>Lấy mọi kết quả đủ gần → <code>VECTOR_RANGE</code>; pre-filter đặt trước <code>=&gt;</code></li>
<li>Redis giữ toàn bộ index trong RAM → nhanh nhất, đắt nhất; vai trò semantic cache / tầng nóng, kho chính vẫn là pgvector / Cosmos</li>
</ul>
</li>
</ul>
</li>
<li><strong>Kiểu field RediSearch</strong><ul>
<li><strong>TAG</strong>: giá trị chính xác, không tách từ → lọc category / tenant, query <code>@category:{faq}</code></li>
<li><strong>TEXT</strong>: tách từ, stemming, <code>WEIGHT</code> → tìm theo từ khoá<ul>
<li>Bẫy: lọc category dùng <strong>TAG</strong>, tìm theo từ dùng <strong>TEXT</strong></li>
</ul>
</li>
<li><strong>NUMERIC</strong>: lọc khoảng số; <strong>GEO</strong> bán kính, <strong>GEOSHAPE</strong> đa giác</li>
<li>ORDER BY → <code>SORTABLE</code> trên field + <code>SORTBY</code></li>
<li><strong>VECTOR</strong> FLAT / HNSW</li>
<li>Không có index ghép; kết hợp nhiều điều kiện ngay trong chuỗi query</li>
<li>JSON khai field bằng JSONPath <code>$.x</code> + <code>as_name</code>, <code>ON JSON</code></li>
<li>Đổi thuật toán hay DIM của field đã khai → <strong><code>FT.DROPINDEX</code></strong> rồi tạo lại (dữ liệu vẫn còn)</li>
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
<li><strong>So sánh nhanh</strong><ul>
<li>Cosmos: scale ngang cực lớn, multi-region write, SLA độ trễ; yếu ở chỗ phải hiểu RU và partition key → app toàn cầu, ghi lớn, cần change feed</li>
<li>PostgreSQL: transaction, filter SQL mạnh, chi phí tốt; scale ngang khó hơn, phải quản index / vacuum → đã có dữ liệu quan hệ, cần JOIN</li>
<li>Redis: latency dưới ms, semantic cache, session; RAM đắt, không bền vững bằng → tầng nóng</li>
<li>Vector index: Cosmos flat / quantizedFlat / diskANN · PostgreSQL HNSW / IVFFlat / DiskANN · Redis FLAT / HNSW</li>
</ul>
</li>
<li><strong>Nhu cầu truy vấn → index</strong><ul>
<li>Lọc <code>=</code>, <code>IN</code>, khoảng: Cosmos Range (mặc định mọi path) · Postgres B-tree (phải tự tạo) · Redis NUMERIC (khoảng) / TAG (chính xác)</li>
<li>ORDER BY một trường: Cosmos Range · Postgres B-tree · Redis SORTABLE + SORTBY</li>
<li>ORDER BY / filter nhiều trường: Cosmos Composite · Postgres B-tree nhiều cột · Redis không có index ghép</li>
<li>Metadata thưa trong JSON: Cosmos Range trên path · Postgres GIN <code>jsonb_path_ops</code> · Redis JSON + JSONPath</li>
<li>Category / tenant: Cosmos Range · Postgres B-tree hoặc partial index · Redis TAG</li>
<li>Full-text: Cosmos full-text index + policy · Postgres GIN trên <code>tsvector</code> (fuzzy → <code>pg_trgm</code>) · Redis TEXT</li>
<li>Hybrid: Cosmos <code>RRF</code> trong một query · Postgres hai truy vấn (HNSW + GIN) tự RRF · Redis pre-filter TEXT/TAG trước <code>=&gt;[KNN ...]</code></li>
<li>Địa lý: Cosmos Spatial · Postgres GiST (PostGIS) · Redis GEO / GEOSHAPE</li>
<li>Nhiều thuộc tính trong cùng phần tử mảng: Cosmos Tuple · Postgres GIN trên jsonb · Redis không có</li>
</ul>
</li>
<li><strong>So sánh index vector</strong><ul>
<li>Chính xác 100%: Cosmos flat (≤ 505 chiều) · Postgres không index, seq scan · Redis FLAT</li>
<li>Trần chiều có index: Cosmos flat 505, quantizedFlat / diskANN 4.096 · Postgres vector 2.000, halfvec 4.000, pg_diskann tới 16.000 (bật product_quantized) · Redis = DIM của model</li>
<li>Núm build: Cosmos <code>quantizationByteSize</code>, <code>indexingSearchListSize</code> · Postgres <code>m</code>, <code>ef_construction</code>, <code>lists</code> · Redis <code>M</code>, <code>EF_CONSTRUCTION</code></li>
<li>Núm query: Cosmos <code>searchListSizeMultiplier</code> · Postgres <code>hnsw.ef_search</code>, <code>ivfflat.probes</code>, <code>diskann.l_value_is</code> · Redis <code>EF_RUNTIME</code></li>
<li>Tăng recall <strong>không build lại index</strong> → chỉnh núm lúc query, không đổi loại index</li>
<li>Khoảng cách: Cosmos khai trong vector embedding policy · Postgres opclass khớp toán tử · Redis <code>DISTANCE_METRIC</code></li>
<li>3.072 chiều: Cosmos dùng diskANN / quantizedFlat · Postgres ép halfvec hoặc <code>dimensions=1536</code></li>
</ul>
</li>
<li><strong>Khai ở đâu, sửa được không</strong><ul>
<li>Mặc định: Cosmos range mọi path · Postgres chỉ index PK / unique · Redis không có gì tới khi <code>FT.CREATE</code></li>
<li>Tiên quyết: Cosmos capability vector + vector policy (full-text cần full text policy) · Postgres allowlist <code>azure.extensions</code> · Redis RediSearch lúc tạo, Enterprise, NoEviction</li>
<li>Sửa: Cosmos range / composite / spatial sửa được, path vector đã có thì không → container mới · Postgres <code>CREATE INDEX CONCURRENTLY</code> / <code>REINDEX CONCURRENTLY</code> · Redis <code>FT.DROPINDEX</code> rồi tạo lại</li>
<li>Index thừa: Cosmos tăng RU ghi · Postgres ghi chậm, bảng phình · Redis tốn RAM</li>
<li>Bẫy: Postgres index <code>vector_l2_ops</code> mà query <code>&lt;=&gt;</code> → planner bỏ qua index, không báo lỗi</li>
</ul>
</li>
</ul>
</section>
<h2 class="dom">3. Messaging & Functions (20–25%)</h2>
<section id="r3-1">
<h3>3.1 Chọn dịch vụ<a class="anch" href="#r3-1">#</a></h3>
<ul>
<li>Message có kỳ vọng xử lý → <strong>Service Bus</strong>; event thông báo đã xảy ra → <strong>Event Grid</strong></li>
<li>Stream hàng triệu event/s, replay → Event Hubs; queue đơn giản, rẻ → Queue Storage</li>
<li>Message: payload lớn, hợp đồng chặt; event: nhỏ (metadata + link), rời rạc</li>
<li>FIFO, transaction, DLQ → <strong>Service Bus</strong>; queue trên 80 GB, không cần tính năng nâng cao → <strong>Queue Storage</strong></li>
</ul>
</section>
<section id="r3-2">
<h3>3.2 Service Bus<a class="anch" href="#r3-2">#</a></h3>
<ul>
<li><strong>Cơ bản</strong><ul>
<li><strong>Tier và pattern</strong><ul>
<li>Tier Basic (chỉ queue) / Standard (có topic) / Premium; message 256 KB (Standard) / 100 MB (Premium)</li>
<li>Pattern: load leveling, competing consumers, publish-subscribe<ul>
<li>Không cấp GPU theo đỉnh → <strong>load leveling</strong>; model bảo trì mà API vẫn nhận → <strong>temporal decoupling</strong></li>
</ul>
</li>
<li>Queue cho 1 consumer; nhiều service cùng phản ứng một kết quả → <strong>topic + mỗi service một subscription</strong></li>
<li>Độ sâu queue là tín hiệu scale (KEDA), không phải sự cố</li>
</ul>
</li>
<li><strong>SDK và quyền</strong><ul>
<li>SDK <code>ServiceBusClient</code>; role Data Sender / <strong>Data Receiver</strong> (identity connection không nhận được message → thiếu role này)<ul>
<li>Xong chuyển Entra ID → tắt SAS bằng <code>disableLocalAuth</code></li>
</ul>
</li>
<li>Nhận từ topic chỉ bằng <strong><code>get_subscription_receiver</code></strong>; dùng <code>with</code> để đóng kết nối<ul>
<li>Portal thấy message vào nhưng app im lặng → <strong>chưa chạy vòng nhận / chưa start processor</strong></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><strong>Hạn mức và chọn tier</strong><ul>
<li>Premium mặc định 1 MB, <strong>100 MB chỉ qua AMQP</strong> (HTTP 1 MB); có VNet, Geo-DR, JMS 2.0, độ trễ ổn định</li>
<li>Standard trần 1.000 thao tác/s; queue 1–5 GB (80 GB nếu partitioning); namespace 400 GB; Premium 1 TB mỗi MU</li>
<li>Cần topic/session/dedup/auto-forward → <strong>loại Basic</strong> (Basic vẫn có DLQ)</li>
<li>Mọi tier: <strong>2.000 subscription/topic</strong>; 2.000 SQL filter nhưng 100.000 correlation filter; 100 message/transaction</li>
<li>Property tối đa 32 KB, tổng 64 KB → nhét văn bản vào application properties là chạm trần này</li>
<li>Standard → Premium là <strong>migration namespace</strong>, không đổi SKU tại chỗ; partitioning Premium chốt lúc tạo</li>
</ul>
</li>
<li><strong>Auto-forward</strong><ul>
<li>Cùng namespace, đích phải có trước; tối đa <strong>4 hop</strong>; không tạo được receiver trên nguồn<ul>
<li>Đích đầy/disable → vào <strong>DLQ của nguồn</strong>; nguồn có session không bật ForwardTo được</li>
</ul>
</li>
<li>Vượt 2.000 subscription → <strong>chồng tầng topic bằng auto-forward</strong> (tầng một ít, tầng hai nhiều)</li>
<li>Quyền quản trị trên nguồn trỏ ForwardTo sang đích mình đọc được → app chỉ gán Data Sender/Receiver</li>
</ul>
</li>
<li><strong>Nhận message</strong><ul>
<li>Không được mất request khi worker crash → <strong>PEEK_LOCK</strong> (complete / abandon / dead-letter / defer); RECEIVE_AND_DELETE mất message khi crash</li>
<li>LockDuration mặc định 1 phút (tối đa 5), xử lý lâu → auto lock renewer; at-least-once nên consumer phải idempotent<ul>
<li><code>AutoLockRenewer</code> phải tự <code>register()</code>; việc dài hơn trần gia hạn → <strong>hai pha</strong> (ghi tracking store, complete ngay)</li>
<li><strong>Prefetch × thời gian xử lý nhỏ hơn LockDuration</strong>, không thì khoá hết hạn hàng loạt rồi cả lô vào DLQ<ul>
<li><code>delivery_count</code> tăng mà code không abandon → khoá đang hết hạn</li>
</ul>
</li>
</ul>
</li>
<li>Lỗi tạm thời → <code>abandon</code>; lỗi vĩnh viễn → <code>dead_letter</code> (abandon thì tốn đủ 10 lượt); chờ dependency → <code>defer</code><ul>
<li>Lỗi phần lớn vĩnh viễn → hạ <code>max_delivery_count</code> xuống 3–5</li>
</ul>
</li>
</ul>
</li>
<li><strong>Dead-letter queue</strong><ul>
<li>Lỗi 10 lần → DLQ với lý do <strong><code>MaxDeliveryCountExceeded</code></strong>; còn hết TTL, lỗi filter, app chủ động dead-letter<ul>
<li>Hết TTL chỉ vào DLQ khi bật <code>DeadLetteringOnMessageExpiration</code>; message trong DLQ không có TTL</li>
</ul>
</li>
<li><code>queue/$deadletterqueue</code>; resubmit = đọc DLQ rồi gửi lại; giám sát DLQ để biết inference nào lỗi<ul>
<li>SDK mở bằng <code>sub_queue=ServiceBusSubQueue.DEAD_LETTER</code>; resubmit giữ <code>correlation_id</code> + properties, không <code>str(msg)</code></li>
</ul>
</li>
</ul>
</li>
<li><strong>Message cho AI</strong><ul>
<li>Payload lớn (vd file 500 MB) → <strong>claim-check</strong>: lưu Blob, message chỉ chứa URI</li>
<li><strong><code>correlation_id</code></strong> để theo dõi request end-to-end (không dùng cho duplicate detection)</li>
<li>Request real-time → <strong>TTL ngắn theo message</strong>; trùng <code>message_id</code> khi bật dedup → bị loại oan</li>
<li>Batch: <code>add_message()</code> ném <code>MessageSizeExceededError</code> → gửi batch hiện tại, mở batch mới</li>
</ul>
</li>
<li><strong>Nâng cao</strong><ul>
<li>Sessions: FIFO theo khách hàng; duplicate detection theo <code>MessageId</code>; scheduled message, defer<ul>
<li>Dedup cửa sổ mặc định 10 phút, tối đa 7 ngày; chỉ chặn trùng phía gửi, <strong>không thay idempotency</strong></li>
<li>Session, dedup, partitioning <strong>chỉ bật được lúc tạo queue</strong></li>
</ul>
</li>
<li>Topic filter SQL / correlation / boolean, <strong>xoá rule <code>$Default</code></strong> khi thêm filter<ul>
<li>Chỉ so sánh bằng → <strong>correlation filter</strong> (nhanh nhất); LIKE/IN/AND → SQL filter</li>
</ul>
</li>
<li>Theo triệu chứng: trùng → duplicate detection / idempotent; sai thứ tự → sessions; poison → DLQ; 429 → retry/backoff</li>
<li>Retry: <strong>exponential backoff + jitter</strong> qua retry policy của SDK; lỗi 400/401 không retry</li>
</ul>
</li>
</ul>
</section>
<section id="r3-3">
<h3>3.3 Event Grid<a class="anch" href="#r3-3">#</a></h3>
<ul>
<li><strong>Thành phần</strong><ul>
<li>Topic, event subscription, event handler; system topic, <strong>custom topic</strong> (service tự phát event), domain, namespace<ul>
<li>System topic không publish trực tiếp được; Partner topic nhận event từ SaaS</li>
</ul>
</li>
<li>Event Grid schema <code>id</code>, <code>topic</code>, <code>subject</code>, <code>eventType</code>, <code>eventTime</code>, <code>data</code>, <code>dataVersion</code>; CloudEvents 1.0 <code>specversion</code>, <code>type</code>, <code>source</code>, <code>id</code></li>
<li>Publish custom event bằng <code>EventGridPublisherClient</code> hoặc REST; production dùng <strong>Entra ID + managed identity</strong>, không dùng <code>aeg-sas-key</code></li>
<li>Multi-tenant, mỗi khách một topic → <strong>event domain</strong> (tới 100.000 topic); khách chỉ subscribe luồng mình → <strong>RBAC theo topic trong domain</strong><ul>
<li>Domain không broadcast; định tuyến theo <code>topic</code>/<code>source</code> trong payload</li>
</ul>
</li>
<li>100 custom topic/region; 500 subscription/topic; batch 5.000 event; ingress 5.000 event hoặc 5 MB/s</li>
</ul>
</li>
<li><strong>Push vs pull</strong><ul>
<li>Consumer chỉ qua private endpoint, không mở được webhook → <strong>Event Grid Namespace + pull delivery</strong> (Basic chỉ push)<ul>
<li>Namespace topic chỉ nhận <strong>CloudEvents 1.0</strong>; có MQTT; publish phải truyền <code>namespace_topic=</code></li>
<li><code>EventGridConsumerClient</code>: <code>receive</code> → <code>acknowledge</code> / <code>release</code> / <code>reject</code> / <code>renew_locks</code><ul>
<li>Event hỏng phải <strong><code>reject</code></strong> (dead-letter), <code>release</code> thì quay lại mãi</li>
</ul>
</li>
<li>Role EventGrid <strong>Data Sender</strong> (publish) / <strong>Data Receiver</strong> (receive) / Data Contributor</li>
</ul>
</li>
<li>Cần đệm tải, thứ tự, consumer chạy lâu → handler <strong>Service Bus</strong></li>
</ul>
</li>
<li><strong>Schema</strong><ul>
<li>Topic <code>--input-schema cloudeventschemav1_0</code>; Event Grid schema → CloudEvents được, <strong>chiều ngược lại không</strong></li>
<li>Topic CloudEvents mà gửi <code>EventGridEvent</code> → bị từ chối; <code>type</code> đặt reverse-DNS</li>
</ul>
</li>
<li><strong>Filter</strong><ul>
<li>Event type; prefix/suffix → <strong><code>subject</code></strong> (<code>beginsWith</code> / <code>endsWith</code>)</li>
<li>Lọc theo <code>data.status</code> → <strong>advanced filter <code>StringIn</code></strong> (tối đa 25 advanced filter)<ul>
<li>Tổng 25 giá trị cho mọi advanced filter; AND giữa điều kiện, OR giữa giá trị</li>
</ul>
</li>
</ul>
</li>
<li><strong>Giao nhận</strong><ul>
<li><strong>Retry và dead-letter</strong><ul>
<li>Retry exponential backoff tối đa 30 lần / 24 giờ; handler cold start chậm → <strong>dựa vào retry tự động</strong><ul>
<li>Max attempts 1–30 và TTL 1–1.440 phút, <strong>cái nào tới trước thì dừng</strong> (TTL 30 phút + 10 lần → TTL hết trước)</li>
</ul>
</li>
<li>400/413 không retry; dead-letter cần <strong>blob container</strong>, không cấu hình thì event lỗi mất hẳn<ul>
<li>Metric <strong>Dropped events</strong> khác 0 → chưa cấu hình dead-letter</li>
</ul>
</li>
<li>At-least-once, <strong>không bảo đảm thứ tự</strong> → khử trùng theo <code>id</code></li>
<li>Output batching all-or-none: một event lỗi cả batch retry</li>
</ul>
</li>
<li><strong>Phản hồi handler</strong><ul>
<li>Webhook validation: <code>SubscriptionValidationEvent</code> → trả <code>validationCode</code> (hoặc mở <code>validationUrl</code>); CloudEvents dùng <code>OPTIONS</code> + <code>WebHook-Request-Origin</code></li>
<li>Chỉ <strong>200–204</strong> là thành công; chờ phản hồi <strong>30 giây</strong>; 403 cũng không retry; 503 retry sau 30 giây<ul>
<li>Inference lâu → <strong>trả 202 ngay</strong>; quá tải tạm thời → trả <strong>503</strong>, đừng trả 400</li>
</ul>
</li>
</ul>
</li>
<li><strong>Kích thước và nguồn</strong><ul>
<li>Event tối đa 1 MB, tính phí theo khối 64 KB</li>
<li>Storage general-purpose v1 không phát BlobCreated</li>
</ul>
</li>
</ul>
</li>
</ul>
</section>
<section id="r3-4">
<h3>3.4 Azure Functions<a class="anch" href="#r3-4">#</a></h3>
<ul>
<li><strong>Hosting</strong><ul>
<li>Giảm cold start mà idle vẫn rẻ → <strong>Flex Consumption + always-ready</strong>; Premium có pre-warmed instance, không cold start</li>
<li>Consumption timeout 5 phút (tối đa 10); Premium 30 phút (có thể không giới hạn); Dedicated chạy trên App Service plan<ul>
<li>HTTP trigger bị giới hạn ~230 giây → job dài dùng Durable hoặc async request-reply</li>
</ul>
</li>
<li>Flex: chỉ Linux, 1.000 instance, VNet, always-ready <strong>từng function</strong>; memory 2.048 MB mặc định (4.096 MB cho model lớn)<ul>
<li>Chỉ function API cần độ trễ thấp, batch vẫn scale về 0 → <strong>Flex + always-ready cho function đó</strong></li>
</ul>
</li>
<li>Function cần GPU → <strong>Container Apps hosting</strong></li>
<li>Cần deployment slot + serverless → <strong>Premium</strong> (Flex không có slot)</li>
</ul>
</li>
<li><strong>Scaling</strong><ul>
<li>Target-based: instance = độ dài nguồn ÷ target per instance (Service Bus <code>maxConcurrentCalls</code> mặc định 16)<ul>
<li>Queue dồn hàng nghìn mà scale từng instance → <strong>thiếu quyền Manage</strong> trên Service Bus (chỉ Listen)</li>
</ul>
</li>
<li>Dedicated không có event-driven scaling</li>
</ul>
</li>
<li><strong>Lập trình và dev local</strong><ul>
<li><strong>Cấu trúc và chạy local</strong><ul>
<li>Python v2: <code>function_app.py</code> + decorator; mỗi function 1 trigger, nhiều binding</li>
<li><code>host.json</code> (runtime), <code>local.settings.json</code> (chỉ local); Core Tools <code>func start</code><ul>
<li>Trigger không chạy khi chạy local → <strong>thiếu <code>AzureWebJobsStorage</code></strong> (dùng Azurite)</li>
<li><code>local.settings.json</code> không commit, không deploy; <code>func settings encrypt</code> chỉ giải mã trên cùng máy</li>
</ul>
</li>
</ul>
</li>
<li><strong>Trigger và binding</strong><ul>
<li>Mỗi instance xử lý một message → <strong><code>maxConcurrentCalls: 1</code></strong> trong <code>host.json</code> (bẫy: không phải <code>batchSize</code>)</li>
<li>Blob gần tức thì → <strong>Event Grid trigger</strong> thay blob trigger polling; Cosmos trigger cần lease container</li>
<li>Service Bus trigger retry bằng delivery count của queue, đừng chồng retry policy</li>
<li>Client SDK không có binding (OpenAI, Search) → <strong>khởi tạo ở cấp module</strong></li>
<li>Đã đặt <code>functionTimeout</code> 10 phút mà HTTP vẫn timeout → giới hạn 230 giây của load balancer → <strong>trả 202 + đẩy qua queue</strong></li>
</ul>
</li>
</ul>
</li>
<li><strong>Secret và bảo mật</strong><ul>
<li><strong>Key Vault và cấu hình</strong><ul>
<li>Key Vault reference tự nhận bản rotate → <strong>secret URI không ghi version</strong><ul>
<li>Key Vault reference cần role <strong>Key Vault Secrets User</strong>; URI không version nhận bản mới trong 24 giờ, muốn ngay thì đổi một app setting</li>
</ul>
</li>
<li>Cấu hình dùng chung nhiều app, feature flag → <strong>App Configuration</strong> (secret vẫn ở Key Vault)</li>
</ul>
</li>
<li><strong>Identity và role</strong><ul>
<li>Identity connection: <code>__fullyQualifiedNamespace</code> (Service Bus), <code>__accountEndpoint</code> (Cosmos), <code>__serviceUri</code><ul>
<li>Storage dùng <code>__accountName</code>; host storage cần <strong>Storage Blob Data Owner</strong> (blob trigger thêm Queue Data Contributor + Account Contributor)</li>
</ul>
</li>
<li>Chỉ truy vấn index → <strong>Search Index Data Reader</strong>; Azure OpenAI → Cognitive Services OpenAI User</li>
</ul>
</li>
<li><strong>Auth và deploy</strong><ul>
<li>Auth level anonymous / function / admin, key gửi qua header <code>x-functions-key</code></li>
<li>Deploy <code>func azure functionapp publish</code>, zip deploy; lab: MCP server bằng Functions</li>
</ul>
</li>
</ul>
</li>
<li><strong>Access key</strong><ul>
<li>Function key → một function; host key → cả app; master <code>_master</code> → <code>admin</code> + <code>/admin/</code>; trùng tên function key thắng<ul>
<li>Event Grid gọi function bị 401 → <strong>system key</strong>; MCP client bị 401 → system key <strong><code>mcp_extension</code></strong></li>
<li>Xoá rồi tạo lại function <strong>không xoay key</strong> → <code>az functionapp keys set</code></li>
</ul>
</li>
<li>Key lưu trong Key Vault → <strong>mỗi app một vault</strong></li>
<li>Chỉ người dùng đăng nhập mới gọi được → <strong>Easy Auth / API Management</strong>, không phải đổi key</li>
</ul>
</li>
</ul>
</section>
<section id="r3-5">
<h3>3.5 Durable Functions<a class="anch" href="#r3-5">#</a></h3>
<ul>
<li><strong>Cơ bản và pattern</strong><ul>
<li>Client → orchestrator → activity; trạng thái lưu trong task hub</li>
<li>Orchestrator phải <strong>deterministic</strong>: dùng <code>context.current_utc_datetime</code>; gọi model trong orchestrator làm replay lệch → <strong>chuyển sang activity</strong></li>
<li>Pattern: chaining, fan-out/fan-in, async HTTP API, monitor, human interaction<ul>
<li>Model giới hạn tải → <strong>chia lô có giới hạn + <code>task_all()</code> từng lô</strong></li>
<li>Chờ duyệt tối đa 24h → <strong><code>wait_for_external_event</code> đua với durable timer bằng <code>task_any()</code></strong>, xong thì huỷ timer</li>
</ul>
</li>
<li>Activity chạy lại ghi trùng → <strong>tên output = operation ID cố định</strong>, không overwrite</li>
<li>Hết retry mà đã có side effect → <strong>compensation idempotent rồi ném lại lỗi gốc</strong></li>
</ul>
</li>
<li><strong>Replay và dữ liệu</strong><ul>
<li>Vai trò thứ tư: Entity giữ state bền; app mới dùng <strong>Durable Task Scheduler</strong></li>
<li>Log orchestrator thấy một bước 5 lần, activity chỉ 1 lần → replay, bọc log bằng <strong><code>if not context.is_replaying</code></strong><ul>
<li><code>uuid4()</code> → <code>context.new_uuid()</code>; <code>sleep</code> → <code>create_timer</code>; Python orchestrator dùng <strong><code>yield</code></strong>, không <code>async</code></li>
</ul>
</li>
<li>Không đưa payload lớn hay secret qua orchestration → truyền ID/URL</li>
<li>Sửa code khi instance đang chạy → deploy side-by-side hoặc đổi tên task hub</li>
</ul>
</li>
<li><strong>Fan-out, retry</strong><ul>
<li><code>yield call_activity</code> trong vòng lặp là <strong>chaining tuần tự</strong>; fan-out = gom list rồi <code>yield task_all</code> một lần<ul>
<li>Orchestrator gom thành nút cổ chai → <strong>sub-orchestration</strong></li>
</ul>
</li>
<li><code>max_number_of_attempts=3</code> = <strong>tổng 3 lần</strong> (1 + 2 retry)</li>
<li>Timer thắng <code>task_any</code> không huỷ activity đang chạy</li>
<li>Endpoint duyệt chỉ có function key không đủ → xác thực Entra ID + kiểm quyền</li>
</ul>
</li>
</ul>
</section>
<h2 class="dom">4. Security & Monitoring (20–25%)</h2>
<section id="r4-1">
<h3>4.1 Key Vault và danh tính<a class="anch" href="#r4-1">#</a></h3>
<ul>
<li><strong>Loại đối tượng và tier</strong><ul>
<li>Secret (API key, connection string) → <code>SecretClient</code>; key (RSA/EC, ký, wrap/unwrap) → <code>KeyClient</code> / <code>CryptographyClient</code>; certificate → <code>CertificateClient</code><ul>
<li>Key không lấy ra được, mã hoá chạy phía server; RSA 2048/3072/4096, EC P-256/P-256K/P-384/P-521, symmetric (oct)</li>
</ul>
</li>
<li>Secret tối đa <strong>25 KB</strong>, Key Vault coi là chuỗi byte opaque; <code>content_type</code> ≤ 255 ký tự chỉ để bên đọc biết cách hiểu</li>
<li>Tối đa <strong>15 tag</strong> mỗi secret (tên ≤ 512, giá trị ≤ 256 ký tự); ai list/get được secret là đọc được tag → không để dữ liệu nhạy cảm trong tag</li>
<li>Lưu certificate → Key Vault tự tạo thêm một key + một secret → <strong>Secrets User đọc được cả private key của certificate</strong></li>
<li>Standard: phần mềm FIPS 140 Level 1; Premium: HSM FIPS 140-3 Level 3, key không rời HSM; cần HSM single-tenant → <strong>Azure Managed HSM</strong></li>
</ul>
</li>
<li><strong>Tổ chức vault</strong><ul>
<li>Mỗi app × mỗi môi trường một vault (<code>kv-rag-dev</code> / <code>-prod</code>) → lộ thì chỉ mất một môi trường; RBAC đội dev không chạm prod<ul>
<li>Key Vault không giới hạn số đối tượng → tách vault để khoanh vùng rủi ro, không phải vì hết chỗ</li>
</ul>
</li>
<li>Tên vault duy nhất toàn cầu, <strong>3–24 ký tự</strong>, chữ/số/gạch ngang, bắt đầu bằng chữ, kết thúc bằng chữ hoặc số, không hai gạch ngang liền</li>
</ul>
</li>
<li><strong>Quyền</strong><ul>
<li>Secret / key / certificate; RBAC (nên dùng) hoặc access policy<ul>
<li>RBAC scope tới subscription → RG → vault → <strong>từng secret</strong>, có PIM; access policy chỉ toàn vault, get/list/set/delete theo loại</li>
</ul>
</li>
<li>Chỉ đọc secret → <strong>Key Vault Secrets User</strong>; Secrets Officer quản lý secret; <strong>Key Vault Contributor không đọc được secret</strong><ul>
<li>App chỉ đọc một secret → gán Secrets User với scope <code>$KV_ID/secrets/&lt;tên&gt;</code></li>
</ul>
</li>
<li>Công cụ giám sát cần biết secret nào tồn tại → <strong>Key Vault Reader</strong> (chỉ metadata, không thấy giá trị)</li>
<li>Key Vault Administrator: toàn quyền data plane, <strong>không có control plane</strong> (không quản vault, không sửa role assignment)</li>
<li>Tạo vault RBAC xong <code>secret set</code> bị Forbidden → người tạo không tự có quyền data plane → tự gán <strong>Secrets Officer</strong></li>
</ul>
</li>
<li><strong>SDK <code>SecretClient</code></strong><ul>
<li><code>SecretClient.get_secret</code> không truyền version → trả <strong>bản enabled mới nhất</strong></li>
<li><code>set_secret</code> tạo <strong>version mới</strong> (GUID), version cũ vẫn còn; <code>get_secret(name, version=...)</code> lấy đúng bản cũ; <code>list_properties_of_secret_versions</code> liệt kê version</li>
<li><code>list_properties_of_secrets()</code> trả properties (name, version, tags, enabled), <strong>không kèm value</strong> → kiểm đủ secret bắt buộc lúc startup, thiếu thì chết ngay khi start</li>
<li>Lỗi <code>ResourceNotFoundError</code> (sai tên, lỗi cấu hình) → <strong>không retry</strong>; <code>HttpResponseError</code> 403 → sửa role assignment; chỉ <strong><code>ServiceRequestError</code></strong> (mạng) đáng retry</li>
<li>Async: <code>azure.keyvault.secrets.aio</code> + <code>azure.identity.aio</code>, dùng <code>async with</code> hoặc <code>await close()</code>; tạo một lần lúc startup, dùng lại mọi request</li>
<li>Được log tên và <code>properties.version</code> để audit, <strong>không bao giờ log value</strong>; thư viện cần Python 3.9+</li>
</ul>
</li>
<li><strong>Version và hết hạn</strong><ul>
<li><strong><code>expires_on</code> không chặn truy cập</strong>: secret hết hạn vẫn nằm trong vault và <code>get_secret()</code> vẫn trả về, chỉ là tín hiệu "credential đã cũ"<ul>
<li>Muốn chặn thật → <code>update_secret_properties(name, version, enabled=False)</code>; chặn cả app đang ghim đúng version đó</li>
</ul>
</li>
<li>3 version, <code>get_secret</code> không kèm version → <strong>bản mới nhất đang enabled</strong> (không phải bản đầu, không phải danh sách)</li>
</ul>
</li>
<li><strong>Cache và throttling</strong><ul>
<li>Tải cao (vd 500 req/s) → <strong>cache trong bộ nhớ có TTL</strong> (vd 1 giờ), refresh khi lỗi xác thực<ul>
<li>TTL theo tần suất xoay: hằng ngày/tuần → 5–15 phút + Event Grid; tháng/quý (key 90 ngày) → 30–60 phút; tĩnh → startup preload + refresh vài giờ; có thể thu hồi gấp → ~5 phút hoặc invalidation theo sự kiện</li>
<li>Invalidation: Event Grid <code>SecretNewVersionCreated</code> → xoá mục cache; dùng cả event (cập nhật ngay) + TTL (lưới an toàn khi event giao lỗi)</li>
<li>Phạm vi cache: per-process (khởi điểm khuyến nghị, gọi tăng theo số instance) · shared Redis (một lần mỗi chu kỳ, thêm một chỗ phải bảo vệ secret) · startup preload (rolling update, secret hiếm đổi)</li>
<li>"Preload lúc startup, không refresh" → <strong>sai</strong>: sau rotation app giữ key cũ tới lần restart; "không cache" → throttling</li>
</ul>
</li>
<li>Throttling secret: <strong>4.000 GET / vault / 10 giây</strong> trong một region; ghi (CREATE/IMPORT) 300 / 10 giây; trần subscription = 5× trần một vault; vượt → <strong>429</strong><ul>
<li>429 → exponential backoff + jitter (1 → 2 → 4 → 8 → 16 giây); 429 thường xuyên → TTL quá ngắn hoặc code đi vòng cache; 429 chỉ lúc deploy → khởi động lệch nhịp hoặc shared cache</li>
</ul>
</li>
</ul>
</li>
<li><strong>Rotation</strong><ul>
<li><strong>Key và secret</strong><ul>
<li>Key mã hoá: <strong>rotation policy tự động</strong> ngay trong Key Vault (vd 90 ngày), dùng key URI không version thì tự nhận bản mới</li>
<li>Secret (mật khẩu, connection string): Key Vault <strong>không tự xoay</strong> → Event Grid <code>SecretNearExpiry</code> → Function tạo credential mới ở dịch vụ nguồn → ghi version mới<ul>
<li>Event Key Vault: <code>SecretNearExpiry</code> (mặc định <strong>30 ngày</strong> trước hạn), <code>SecretExpired</code>, <code>SecretNewVersionCreated</code>; đặt hạn bằng <code>az keyvault secret set-attributes --expires</code></li>
</ul>
</li>
</ul>
</li>
<li><strong>Đổi không downtime</strong><ul>
<li>Đổi credential không downtime → <strong>dual-credential rotation</strong>; Event Grid <code>SecretNearExpiry</code> → Function tạo version mới<ul>
<li>Dual-credential (Storage, Cosmos key1/key2): tạo key phụ → lưu version mới → chờ mọi instance nhận → regenerate key chính cũ</li>
</ul>
</li>
<li>Manual rotation → app dùng credential cũ tới khi restart; automated Event Grid với dịch vụ chỉ có một key → vẫn có khoảng hở</li>
<li>Mẫu code: downstream trả lỗi xác thực → đọc lại secret <strong>một lần</strong> rồi thử lại; operator xoay lúc nào cũng được</li>
</ul>
</li>
<li><strong>App nhận bản mới</strong><ul>
<li>Tham chiếu không ghim version (<code>.../secrets/DbPassword</code> không suffix) để lấy bản mới nhất</li>
<li>App Service Key Vault reference tự refetch mỗi <strong>24 giờ</strong>; đổi app setting → restart + refetch ngay; hoặc POST <code>.../config/configreferences/appsettings/refresh</code></li>
</ul>
</li>
<li>Ưu tiên nhất vẫn là bỏ hẳn secret, dùng managed identity</li>
</ul>
</li>
<li><strong>Bảo vệ</strong><ul>
<li>Soft delete 7–90 ngày, bật mặc định; <strong>purge protection</strong> không tắt được sau khi bật; firewall, private endpoint<ul>
<li>Retention soft delete mặc định <strong>90 ngày</strong>, <strong>chỉ đặt lúc tạo vault</strong>, sau đó không đổi được; khôi phục <code>az keyvault secret recover</code></li>
<li>Xoá vault → tên bị giữ tới hết retention, tạo lại cùng tên lỗi; có purge protection thì không purge sớm được</li>
<li>Vault bị soft-delete rồi recover → app 403, rotation ngừng → <strong>role assignment RBAC và Event Grid subscription đã bị xoá</strong>, recover không khôi phục, phải tạo lại tay</li>
</ul>
</li>
<li>Firewall <code>--default-action Deny --bypass AzureServices</code>; log 403 <code>SecretGet</code> từ IP public rồi 200 từ IP private là bình thường</li>
<li>Ai đọc secret nào lúc nào → diagnostic settings, category <strong><code>AuditEvent</code></strong> sang Log Analytics</li>
<li>Vault production: soft delete + purge protection + RBAC data-plane thay access policy</li>
</ul>
</li>
<li><strong>Dùng secret từ app</strong><ul>
<li>App Service / Functions: app setting <code>@Microsoft.KeyVault(SecretUri=https://&lt;vault&gt;.vault.azure.net/secrets/&lt;tên&gt;/)</code>; Container Apps: <code>keyvaultref:</code><ul>
<li>Key Vault reference không chạy → thiếu managed identity hoặc thiếu role Secrets User</li>
</ul>
</li>
</ul>
</li>
<li><strong>DefaultAzureCredential</strong><ul>
<li>Prod dùng managed identity, local dùng <code>az login</code>, không đổi code; thứ tự environment → workload identity → managed identity → … → Azure CLI<ul>
<li>Chuỗi đầy đủ: Environment → Workload Identity → Managed Identity → SharedTokenCache (chỉ Windows) → VS Code → Azure CLI → Azure PowerShell → Azure Developer CLI → Interactive browser (mặc định tắt) → Broker</li>
<li>App có MI đúng role vẫn 403 → còn sót <code>AZURE_CLIENT_ID</code> / <code>AZURE_TENANT_ID</code> / <code>AZURE_CLIENT_SECRET</code> → <strong>EnvironmentCredential đứng trước MI</strong> nên dùng service principal cũ; kiểm bằng log <code>azure.identity</code> ("acquired a token from …")</li>
<li>Cắt chuỗi bằng <code>AZURE_TOKEN_CREDENTIALS</code> (prod/dev từ azure-identity 1.23.0, tên một credential từ 1.24.0)</li>
</ul>
</li>
<li>Gắn nhiều user-assigned identity → chỉ rõ <code>DefaultAzureCredential(managed_identity_client_id=...)</code> hoặc <code>ManagedIdentityCredential(client_id=...)</code></li>
<li>Production nên khai thẳng <strong><code>ManagedIdentityCredential</code></strong>: chuỗi 10 bước khó chẩn đoán, chậm (máy dev chờ timeout IMDS), biến môi trường có thể âm thầm đổi hành vi<ul>
<li>Tự xếp chuỗi theo ý → <code>ChainedTokenCredential</code></li>
</ul>
</li>
<li>Tạo credential và client <strong>một lần</strong> rồi tái sử dụng (token cache trong bộ nhớ); tạo mỗi request → lấy token liên tục, dễ throttle</li>
</ul>
</li>
</ul>
</section>
<section id="r4-2">
<h3>4.2 App Configuration<a class="anch" href="#r4-2">#</a></h3>
<ul>
<li><strong>Khái niệm</strong><ul>
<li>Key-value + <strong>label</strong> theo môi trường; selector null label + Production → <strong>Production thắng</strong> (nạp sau ghi đè)<ul>
<li>Setting không gắn label thuộc <strong>null label</strong>, đóng vai giá trị mặc định</li>
</ul>
</li>
<li>Key phân cấp bằng <code>:</code> hoặc <code>/</code>, phân biệt hoa thường, không ép schema; key + value tối đa <strong>10 KB</strong></li>
<li><strong>Snapshot</strong>: ảnh chụp bất biến của một tập cấu hình → deploy tái lập, rollback (<code>az appconfig snapshot create</code>)</li>
<li>Tier: Free (3 store / region / subscription, <strong>1.000 request/ngày</strong>, không SLA) và Developer (Private Link, không SLA, không geo-replication) chỉ để dev/test<ul>
<li>Standard trở lên: SLA, geo-replication, soft delete, customer-managed key; Premium bỏ giới hạn quota request</li>
</ul>
</li>
</ul>
</li>
<li><strong>Xếp chỗ: App Configuration hay Key Vault</strong><ul>
<li>Tiêu chí duy nhất: giá trị đứng một mình <strong>có cho phép truy cập tài nguyên không</strong> → có thì Key Vault, không thì App Configuration<ul>
<li>Giá trị không nhạy cảm (vd tên deployment <code>gpt-4o</code>) → key-value thường; secret → Key Vault</li>
<li>Endpoint URL, số chiều embedding, batch size, timeout, tên queue, log level → App Configuration; API key, connection string có credential → Key Vault (qua reference); certificate TLS → Key Vault trực tiếp</li>
</ul>
</li>
<li>Cần rotation, audit từng lần truy cập, hạn dùng → Key Vault; App Configuration chỉ phân quyền RBAC ở <strong>cấp store</strong></li>
<li>Anti-pattern: secret thẳng trong App Config (mất audit, HSM, rotation) · setting thường trong Key Vault (throttle chặt, không label/flag/snapshot) · chép một giá trị vào cả hai (lệch nhau) · hard-code</li>
<li>Kiến trúc khuyến nghị: <strong>App Configuration là cửa vào duy nhất</strong>, Key Vault là backend; <code>load()</code> một lần có đủ cả hai</li>
</ul>
</li>
<li><strong>Provider Python</strong><ul>
<li>Python provider library + managed identity; snapshot<ul>
<li><code>pip install azure-appconfiguration-provider</code>; <code>load()</code> trả Mapping dùng như dict; endpoint <code>https://&lt;store&gt;.azconfig.io</code></li>
</ul>
</li>
<li><strong>Không truyền selector → nạp mọi key có null label</strong>, kể cả key của app khác dùng chung store → luôn lọc bằng <code>SettingSelector(key_filter=..., label_filter=...)</code><ul>
<li>Nhiều selector khớp cùng key → <strong>selector đứng sau thắng</strong>; nạp <code>label_filter="\\0"</code> (null) trước rồi label môi trường → mặc định + ghi đè, không cần key <code>..._Prod</code></li>
</ul>
</li>
<li><code>trim_prefixes=["RagApi:"]</code> → đọc <code>config["TopK"]</code>; provider không báo lỗi khi một key có nhiều label</li>
</ul>
</li>
<li><strong>Refresh không cần restart</strong><ul>
<li>Feature flag bật/tắt không redeploy; refresh bằng <strong>sentinel key</strong>: app phải gọi <code>refresh()</code> và sentinel phải đã đổi<ul>
<li><code>refresh()</code> <strong>không chạy nền</strong>; gọi khi <code>refresh_interval</code> chưa hết → trả ngay, không gọi store</li>
<li>Đổi cả loạt key rồi <strong>đổi sentinel cuối cùng</strong> → mọi instance nạp lại toàn bộ một lần, tránh trạng thái nửa vời</li>
<li>Đã có sentinel + <code>refresh_interval=60</code> mà app không thấy thay đổi → không ai gọi <code>config.refresh()</code>, hoặc đổi key thường mà không đổi sentinel</li>
</ul>
</li>
</ul>
</li>
<li><strong>Feature flag trong code</strong><ul>
<li><code>pip install featuremanagement</code> (gói riêng); <code>FeatureManager(config).is_enabled("Tên")</code> đánh giá lại mỗi lần gọi<ul>
<li>Phải <code>feature_flags_enabled=True</code> (mặc định không nạp flag); thiếu <code>feature_flag_refresh_enabled=True</code> → giữ trạng thái flag lúc <code>load()</code> tới khi restart</li>
<li>Refresh flag và setting <strong>độc lập</strong>; cả hai chỉ chạy khi gọi <code>config.refresh()</code></li>
</ul>
</li>
<li>Lưu dưới key tiền tố <code>.appconfig.featureflag/</code>; filter theo phần trăm, thời gian, target group</li>
<li>Mẫu dùng: progressive model rollout, <strong>kill switch</strong> (tắt bước lỗi trong vài giây thay vì rollback code), A/B testing, staged pipeline activation</li>
</ul>
</li>
<li><strong>Key Vault reference</strong><ul>
<li>Key Vault reference lưu <strong>URI tới secret</strong> + content type riêng; app cần <strong>App Configuration Data Reader + Key Vault Secrets User</strong><ul>
<li>Thiếu Secrets User → key thường đọc được, <strong>key reference lỗi 403</strong></li>
</ul>
</li>
<li>Provider tự resolve khi truyền <code>keyvault_credential=</code>; nhiều vault → role trên từng vault hoặc <code>keyvault_client_configs</code></li>
<li>URI <strong>không kèm version</strong> (khuyến nghị) → xoay xong tự nhận bản mới; kèm version = ghim cứng</li>
<li>Đổi secret trong Key Vault <strong>không đổi sentinel</strong> → cần <strong><code>secret_refresh_interval</code></strong> (vd 7200 giây) + gọi <code>refresh()</code>; độc lập với <code>refresh_interval</code><ul>
<li>Mỗi lần resolve = một request Key Vault → cộng vào trần throttling khi chọn <code>secret_refresh_interval</code></li>
</ul>
</li>
<li>CLI: <code>az appconfig kv set-keyvault --secret-identifier https://&lt;vault&gt;.vault.azure.net/secrets/&lt;tên&gt;</code></li>
</ul>
</li>
<li><strong>Bảo mật và triển khai</strong><ul>
<li>Managed identity + <strong>App Configuration Data Reader</strong> (đọc) / <strong>Data Owner</strong> (ghi); tắt access key; CLI dùng <code>--auth-mode login</code></li>
<li>Nạp theo môi trường: <code>az appconfig kv import --format json --label prod --separator :</code></li>
</ul>
</li>
<li><strong>Kubernetes Provider cho AKS</strong><ul>
<li><strong>Chọn và cơ chế</strong><ul>
<li>Nhiều cluster AKS, app đọc ConfigMap sẵn có, <strong>không sửa code</strong> → <strong>App Configuration Kubernetes Provider</strong> (không phải thêm SDK vào app)</li>
<li>Controller trong cluster sinh <strong>ConfigMap</strong> (cấu hình) và <strong>Secret</strong> (giá trị từ Key Vault) gốc Kubernetes; app dùng qua env/volume</li>
</ul>
</li>
<li><strong>Cài và khai báo</strong><ul>
<li>Cài bằng AKS extension (<code>--extension-type Microsoft.AppConfiguration</code>, tự cập nhật minor/patch) hoặc Helm; namespace <code>azappconfig-system</code></li>
<li>Khai báo bằng CRD <code>AzureAppConfigurationProvider</code>; ConfigMap trùng tên cùng namespace → tạo thất bại; sửa/xoá ConfigMap bằng tay → bị đặt lại; gỡ provider → ConfigMap bị xoá</li>
<li>Không khai selector → mọi key <strong>không label</strong>; key có label phải khai label filter</li>
<li>Từ 2.0.0, workload identity cần service account do người dùng cung cấp</li>
</ul>
</li>
<li><strong>Lỗi và refresh</strong><ul>
<li>Có Key Vault reference mà thiếu <code>spec.secret</code> → <strong>toàn bộ cấu hình không nạp</strong>; 403 → identity thiếu quyền trên store</li>
<li>Kiểm <code>status.phase</code> = <code>Complete</code>; refresh theo yêu cầu: sửa <code>metadata.annotations</code> của provider</li>
<li>ConfigMap mount kiểu env → đổi giá trị vẫn phải <strong>restart pod</strong></li>
</ul>
</li>
</ul>
</li>
</ul>
</section>
<section id="r4-3">
<h3>4.3 OpenTelemetry<a class="anch" href="#r4-3">#</a></h3>
<ul>
<li><strong>Khái niệm</strong><ul>
<li>Trace = cây span xuyên nhiều service; span có trace_id, span_id, parent_span_id, attributes, events, status; ba tín hiệu traces, metrics, logs</li>
<li>Header <code>traceparent</code>: <code>00-&lt;trace-id 32 hex&gt;-&lt;span-id 16 hex&gt;-&lt;flags&gt;</code>; flags <code>01</code> = sampled</li>
<li>Propagation mặc định <strong>W3C TraceContext (<code>traceparent</code>)</strong>; khác: B3, OpenTracing/OpenCensus<ul>
<li><code>OTEL_PROPAGATORS</code> mặc định <code>tracecontext,baggage</code>; B3 chỉ khi bật tay (Zipkin cũ); OpenTracing/OpenCensus là tiền thân đã hợp nhất thành OTel (2019), không phải chuẩn propagation</li>
<li>Trace đứt giữa hai service → proxy/gateway bỏ header <code>traceparent</code> hoặc hai bên <strong>khác propagator</strong></li>
</ul>
</li>
<li>OpenTelemetry thuộc CNCF, trung lập nhà cung cấp; bốn thành phần API, SDK, instrumentation library, exporter; đổi backend chỉ cần đổi exporter</li>
</ul>
</li>
<li><strong>Distro và cấu hình</strong><ul>
<li><strong>Thu thập</strong><ul>
<li>Distro <code>azure-monitor-opentelemetry</code>, <code>configure_azure_monitor()</code>; connection string qua biến môi trường <strong><code>APPLICATIONINSIGHTS_CONNECTION_STRING</code></strong><ul>
<li><code>configure_azure_monitor()</code> gọi <strong>một lần lúc startup</strong>, dựng tracer, meter và logger provider</li>
</ul>
</li>
<li>Tự thu thập: requests, urllib/urllib3, Flask/Django/FastAPI, psycopg2, Azure SDK; <code>logging</code> chuẩn tự vào <code>traces</code>; <strong>redis không có trong distro</strong></li>
<li>Autoinstrumentation (bật bằng cấu hình, App Service/Functions/VM, ít kiểm soát) vs <strong>SDK distro</strong> (custom span, attribute, sampling) → app AI cần đo token, thời gian embedding → <strong>SDK</strong></li>
</ul>
</li>
<li><strong>Kết nối và xác thực</strong><ul>
<li>Connection string đặt cả code lẫn biến môi trường → <strong>code thắng</strong>; production → <strong>biến môi trường</strong>, không hard-code, không <code>config.py</code></li>
<li>Chỉ app hợp lệ được gửi telemetry → <strong>Entra auth</strong>: tắt local auth, role <strong>Monitoring Metrics Publisher</strong>, truyền <code>credential=</code>; connection string ai có cũng đẩy được telemetry giả</li>
<li>Resource classic đã ngừng → chỉ còn <strong>workspace-based</strong>; instrumentation key đơn lẻ là cách cũ, dùng connection string</li>
</ul>
</li>
<li><strong>Tên service</strong><ul>
<li>Tên service: <code>OTEL_SERVICE_NAME</code> / <code>OTEL_RESOURCE_ATTRIBUTES</code><ul>
<li>Cloud role name = <code>service.namespace</code> + "." + <code>service.name</code>; <code>service.instance.id</code> phân biệt instance</li>
<li>Application Map chỉ thấy <strong>một node</strong> dù có bốn service → thiếu <code>service.name</code> riêng cho từng service</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><strong>Span thủ công</strong><ul>
<li>Span thủ công <code>tracer.start_as_current_span</code>; exception thoát khối <code>with</code> → span tự ghi exception + status error<ul>
<li><code>span.record_exception(e)</code> + <code>span.set_status(Status(StatusCode.ERROR))</code> chỉ cần khi tự bắt exception hoặc muốn mô tả riêng</li>
</ul>
</li>
<li>Span lồng nhau tự nhận cha qua context variable, không truyền span cha</li>
<li><code>set_attribute</code> → <strong><code>customDimensions</code></strong> để KQL lọc; đặt tên theo namespace (<code>embedding.model</code>); giá trị chỉ string, số, boolean<ul>
<li>Resource attribute (<code>service.name</code>) mô tả cả service, đặt một lần; span attribute mô tả một thao tác</li>
</ul>
</li>
<li>Gắn token LLM: <code>gen_ai.usage.input_tokens</code> / <code>output_tokens</code> → tổng hợp chi phí bằng KQL</li>
</ul>
</li>
<li><strong>SpanKind → bảng</strong><ul>
<li>Span server → <code>AppRequests</code>; <strong><code>SpanKind.CLIENT</code> → dependencies</strong>; log → <code>AppTraces</code>; exception → <code>AppExceptions</code><ul>
<li><code>SERVER</code> và <strong><code>CONSUMER</code></strong> (nhận message từ queue) → <code>requests</code></li>
<li><code>CLIENT</code>, <code>PRODUCER</code> (gửi message) và <strong><code>INTERNAL</code></strong> (mặc định khi không ghi kind) → <code>dependencies</code><ul>
<li>Span nghiệp vụ tự tạo không ghi kind → nằm ở <strong>dependencies</strong>, không phải requests</li>
</ul>
</li>
</ul>
</li>
<li>Custom metric → <code>AppMetrics</code> / <code>customMetrics</code></li>
<li>Trace ID ↔ <strong><code>operation_Id</code></strong> (OperationId), dùng nối request qua nhiều service<ul>
<li>span_id ↔ ID / Operation Parent ID; service name ↔ <code>AppRoleName</code> / <code>cloud_RoleName</code></li>
</ul>
</li>
</ul>
</li>
<li><strong>Sampling</strong><ul>
<li><strong>Cấu hình sampler</strong><ul>
<li>Fixed-percentage: <code>configure_azure_monitor(sampling_ratio=0.1)</code> hoặc <code>OTEL_TRACES_SAMPLER=microsoft.fixed_percentage</code> + <code>OTEL_TRACES_SAMPLER_ARG=0.1</code></li>
<li>Rate-limited: <code>traces_per_second=1.5</code> hoặc <code>microsoft.rate_limited</code>; distro Python không cấu hình → <strong>RateLimitedSampler</strong></li>
<li>Code và biến môi trường cùng đặt → <strong>biến môi trường thắng</strong> (ngược với connection string); <code>sampling_ratio=0.5</code> mà vẫn 10% → có <code>OTEL_TRACES_SAMPLER_ARG=0.1</code></li>
<li><code>OTEL_TRACES_SAMPLER_ARG=1.5</code> chỉ hợp lệ với rate_limited (1,5 trace/giây), không phải 150%</li>
</ul>
</li>
<li><strong>Hành vi</strong><ul>
<li>Bắt đầu ở <strong>5%</strong>; tỷ lệ càng thấp càng rẻ nhưng Performance/Failures càng kém chính xác (App Insights nhân bù theo tỷ lệ)</li>
<li><strong>Metric không bao giờ bị sample</strong>; log thuộc trace không được chọn bị bỏ theo mặc định (opt out được)</li>
<li>Quyết định sampling ở span gốc, chảy theo header → trace <strong>giữ trọn hoặc bỏ trọn</strong>, không thủng giữa chừng</li>
<li>Application Insights còn có adaptive sampling phía ingest</li>
</ul>
</li>
</ul>
</li>
<li><strong>Export</strong><ul>
<li>Mất kết nối ingestion → <strong>offline storage</strong>: cache xuống đĩa, retry tới <strong>48 giờ</strong>; đổi chỗ bằng <code>storage_directory=</code>, tắt bằng <code>disable_offline_storage=True</code> (không khuyến nghị cho prod)</li>
<li>Direct export (mặc định, trong process, không thêm hạ tầng) vs <strong>OpenTelemetry Collector</strong> (process riêng: sampling tập trung, biến đổi dữ liệu, nhiều backend)<ul>
<li>AKS/Container Apps: Collector sidecar/daemonset; Container Apps có managed OTel agent cấu hình cấp environment</li>
</ul>
</li>
<li>Không thấy dữ liệu ngay là bình thường (SDK gom lô, ingest trễ vài phút); <strong>Live Metrics</strong> gần như tức thời (đường riêng)</li>
</ul>
</li>
<li><strong>Baggage và span link</strong><ul>
<li>Baggage = key-value đi kèm context qua header <code>baggage</code> (W3C), tách với <code>traceparent</code>/<code>tracestate</code><ul>
<li>Đã set baggage mà KQL không thấy cột → baggage <strong>không tự thành span attribute</strong>, phải đọc rồi <code>span.set_attribute(...)</code></li>
<li>Baggage gắn vào mọi request ra ngoài, kể cả API bên thứ ba → <strong>không đặt PII, token, secret</strong></li>
</ul>
</li>
<li>Consumer gom 100 message của 100 trace → một span batch với <strong>100 span link</strong> (một span chỉ có một cha)</li>
<li>Qua queue: producer nhét <code>traceparent</code> vào application properties (Service Bus SDK dùng <code>Diagnostic-Id</code>), consumer lấy làm parent (một message) hoặc link (batch)<ul>
<li>Trace đứt ở queue → consumer không instrument, hoặc tự new message làm rơi header</li>
</ul>
</li>
</ul>
</li>
<li><strong>Debug phân tán</strong><ul>
<li>Debug phân tán: end-to-end transaction, application map, tìm span chậm<ul>
<li><strong>Application Map</strong>: node = cloud role, cạnh = đường gọi, kèm thời gian trung bình, số gọi, tỷ lệ lỗi</li>
<li><strong>End-to-end transaction details</strong>: waterfall một trace, span con thụt vào, song song nằm chồng; mở từ Performance, Failures hoặc Application Map</li>
<li><strong>Failures</strong>: gom thao tác lỗi, top 3 response code, exception type, dependency lỗi; <strong>Performance</strong>: phân bố thời gian, thấy hai đỉnh</li>
</ul>
</li>
<li>"App chậm ở đâu giữa 4 service" → distributed tracing; "CPU replica bao nhiêu" → metric; "vì sao request X lỗi" → log + trace theo <code>operation_Id</code></li>
<li>Mẫu lỗi AI: embedding timeout (<code>embedding.model</code>), vector search cold start (cụm span chậm sau khoảng im lặng, <code>search.result_count</code>), LLM rate limit (429, <code>llm.prompt_tokens</code>), context window overflow (<code>llm.prompt_tokens</code> trên span dựng prompt)</li>
</ul>
</li>
</ul>
</section>
<section id="r4-4">
<h3>4.4 KQL và Log Analytics<a class="anch" href="#r4-4">#</a></h3>
<ul>
<li><strong>Xem log ở đâu — theo từng dịch vụ</strong><ul>
<li><strong>Application Insights</strong> (app có OTel, Functions)<ul>
<li>Realtime → <strong>Live Metrics</strong> (đi đường riêng, không qua ingestion, gần như tức thời)</li>
<li>Tra theo request / trace → Transaction search, Application Map, pane Failures / Performance</li>
<li>Truy vấn → Logs: <code>requests</code>, <code>dependencies</code>, <code>traces</code>, <code>exceptions</code>, <code>customMetrics</code> (workspace: <code>AppRequests</code>, <code>AppDependencies</code>, <code>AppTraces</code>, <code>AppExceptions</code>, <code>AppMetrics</code>)</li>
<li>Ingestion trễ vài phút → chưa thấy dữ liệu ngay là bình thường</li>
</ul>
</li>
<li><strong>App Service</strong><ul>
<li>Realtime → <strong><code>az webapp log tail</code></strong> / Log stream; lưu stdout/stderr vào <code>/home/LogFiles</code> bằng <code>az webapp log config --docker-container-logging filesystem</code></li>
<li>Xem trong container → Kudu (SCM), SSH</li>
<li>Lâu dài, query được → diagnostic settings → <strong><code>AppServiceConsoleLogs</code></strong> (stdout/stderr), <strong><code>AppServiceHTTPLogs</code></strong> (request/response), <code>AppServicePlatformLogs</code> (vòng đời container), <code>AppServiceAppLogs</code></li>
</ul>
</li>
<li><strong>Container Apps</strong><ul>
<li>Realtime → <strong><code>az containerapp logs show --follow</code></strong> (stdout/stderr của app)</li>
<li>Lỗi pull image, probe fail, scaling → <strong><code>--type system</code></strong></li>
<li>Log Analytics → <strong><code>ContainerAppConsoleLogs_CL</code></strong> (<code>ContainerAppName_s</code>, <code>RevisionName_s</code>, <code>ReplicaName_s</code>, <code>Log_s</code>) và <strong><code>ContainerAppSystemLogs_CL</code></strong></li>
</ul>
</li>
<li><strong>AKS</strong><ul>
<li>Realtime → <code>kubectl logs -f</code>; lần chạy đã crash → <code>kubectl logs --previous</code>; sự kiện → <code>kubectl get events</code></li>
<li>Xem log realtime trên portal, không cần cấu hình kubectl → <strong>Live Logs</strong></li>
<li>Lịch sử, so sánh nhiều pod → <strong>Container insights</strong> → <strong><code>ContainerLogV2</code></strong> (<code>PodName</code>, <code>LogMessage</code>), <code>KubePodInventory</code>, <code>KubeEvents</code></li>
<li>Gợi ý tự động cho sự cố node / kết nối → Diagnose and solve problems</li>
</ul>
</li>
<li><strong>Tài nguyên Azure khác</strong> (Key Vault, Service Bus, …)<ul>
<li>Phải tạo <strong>diagnostic settings</strong> gửi log vào workspace (mỗi tài nguyên một setting); metric có sẵn thì không cần</li>
<li>Key Vault → log <strong><code>AuditEvent</code></strong> (ai đọc secret nào, lúc nào)</li>
<li>Không có <code>--export-to-resource-specific true</code> → bảng chung <strong><code>AzureDiagnostics</code></strong>; có thì bảng riêng (vd <code>AZMSOperationalLogs</code> của Service Bus)</li>
</ul>
</li>
</ul>
</li>
<li><strong>Bảng và phạm vi truy vấn</strong><ul>
<li>Bảng workspace <code>AppRequests</code> khác bảng classic <code>requests</code><ul>
<li>Mở Logs từ Application Insights → <code>requests</code>, <code>dependencies</code>, <code>exceptions</code> (cột <code>timestamp</code>, <code>operation_Id</code>); truy vấn thẳng workspace → <code>AppRequests</code>, <code>AppDependencies</code>, <code>AppExceptions</code> (<code>TimeGenerated</code>, <code>OperationId</code>)</li>
</ul>
</li>
<li>Bảng khác: <code>customEvents</code> (sự kiện nghiệp vụ), <code>customMetrics</code>, <code>performanceCounters</code> (CPU, memory), <code>availabilityResults</code>; <code>exceptions</code> chứa cả handled lẫn unhandled</li>
<li>Cột chung: <code>timestamp</code>, <code>operation_Id</code>, <code>cloud_RoleName</code>, <code>customDimensions</code>, <code>itemCount</code></li>
<li>Log AKS → <code>ContainerLogV2</code>; log Container Apps → <code>ContainerAppConsoleLogs_CL</code> (<code>RevisionName_s</code> để so revision)</li>
<li>Diagnostic settings không có <code>--export-to-resource-specific true</code> → log vào bảng chung <strong><code>AzureDiagnostics</code></strong></li>
</ul>
</li>
<li><strong>Toán tử</strong><ul>
<li><strong>Lọc và tìm</strong><ul>
<li><code>where TimeGenerated &gt; ago(1h)</code>, <code>summarize count() by bin(TimeGenerated, 5m)</code>, <code>percentile(DurationMs, 95)</code> (5% request chậm nhất)</li>
<li><code>where</code> đặt sớm nhất để giảm dữ liệu quét; độ trễ dùng <strong>percentile</strong>, không dùng <code>avg</code> (outlier kéo lệch)</li>
<li><code>has</code> dùng term index (nhanh) vs <code>contains</code> tìm chuỗi con (chậm); <code>take</code> trả N dòng bất kỳ vs <code>top N by</code> sau khi sắp xếp</li>
</ul>
</li>
<li><strong>Tổng hợp và vẽ</strong><ul>
<li><code>dcount()</code> là ước lượng; cần chính xác trên tập nhỏ → <code>count_distinct()</code>; <code>countif(success == false)</code> đếm lỗi</li>
<li>Cột không đặt tên tự sinh <code>avg_duration</code>, <code>count_</code>; <code>percentiles(duration, 50, 95, 99)</code> → <code>percentile_duration_95</code>, <code>order by</code> phải đúng tên đó</li>
<li><code>render</code>: <code>timechart</code> cần cột datetime; <code>barchart</code>/<code>columnchart</code> so nhóm; <code>piechart</code> tỷ trọng; kiểu chart giữ nguyên khi ghim</li>
</ul>
</li>
<li><strong>Ghép bảng và JSON</strong><ul>
<li><code>join kind=inner ... on OperationId</code>, <code>project</code>, <code>extend</code>, <code>top</code>, <code>render timechart</code></li>
<li>Gộp log nhiều bảng theo dòng → <strong><code>union</code></strong>; ghép theo khoá chung → <code>join</code><ul>
<li>Lần theo một trace: <code>union requests, dependencies, traces, exceptions | where operation_Id == "..."</code></li>
</ul>
</li>
<li>JSON/mảng: <code>parse_json()</code>, <code>todynamic()</code>, <code>mv-expand</code>; custom attribute: <code>toint(customDimensions["..."])</code></li>
</ul>
</li>
</ul>
</li>
<li><strong>Sampling</strong><ul>
<li>Có sampling thì đếm bằng <strong><code>sum(itemCount)</code></strong>, không dùng <code>count()</code><ul>
<li><code>count()</code> đếm bản ghi được giữ → thiếu; <code>dcount(type)</code> đếm <strong>số loại</strong> exception, không phải số exception</li>
</ul>
</li>
</ul>
</li>
<li><strong>join</strong><ul>
<li>Không ghi <code>kind=</code> → mặc định <strong><code>innerunique</code></strong>: khử trùng lặp bảng trái theo khoá rồi mới join → "đếm ra thiếu"; cần đúng số dòng → <code>kind=inner</code></li>
<li><code>leftouter</code> giữ mọi dòng trái (tính tỷ lệ); <code>leftsemi</code> lọc theo danh sách không kéo cột; <code>fullouter</code> đối chiếu hai nguồn<ul>
<li>"Request nào không có exception", "user chưa từng gọi API" → <strong><code>leftanti</code></strong></li>
</ul>
</li>
<li><strong>Bảng nhỏ đặt bên trái</strong>; trái rất nhỏ → <code>hint.strategy=broadcast</code>; hai bảng lớn, khoá phân biệt cao → <code>hint.shufflekey=</code>; hint không đổi ngữ nghĩa</li>
<li>Hai bảng trùng tên cột → Kusto thêm hậu tố <code>1</code> (<code>name1</code>) → đổi tên trong subquery trước khi join</li>
<li>KQL <strong>không có cross join</strong> → <code>extend k=1</code> hai bên rồi join on <code>k</code></li>
</ul>
</li>
<li><strong>let, materialize, bảng tra cứu</strong><ul>
<li><code>let</code> chỉ là bí danh: tham chiếu ba lần → tính ba lần</li>
<li>Biểu thức nặng dùng lại, hoặc <code>rand()</code>/<code>dcount()</code> cần cùng giá trị → <strong><code>materialize()</code></strong>; chỉ dùng trong <code>let</code>; cache <strong>5 GB mỗi node</strong> dùng chung, vượt → abort<ul>
<li>Đẩy filter và <code>project</code> vào trong <code>materialize()</code> để cache nhỏ nhất; đo trước/sau vì có thể tăng bộ nhớ mà không nhanh hơn</li>
</ul>
</li>
<li>Bảng ánh xạ hằng nhỏ → <code>datatable</code>; bảng tra cứu CSV/JSON trên URL do đội khác quản → <code>externaldata</code></li>
</ul>
</li>
<li><strong>Đọc kết quả troubleshoot</strong><ul>
<li><code>resultCode</code> dependency: <strong>429</strong> rate limit (chỉnh throughput/retry), <strong>500</strong> lỗi dịch vụ đích, timeout không có code → mạng hoặc dịch vụ quá tải</li>
<li>RU Cosmos: <code>AppDependencies | where Type == "Azure DocumentDB"</code>, <code>Properties["requestCharge"]</code></li>
<li>Dùng KQL khi cần join, tự tổng hợp, lọc dimension giao diện không có, dựng tile; view có sẵn để lấy điểm xuất phát</li>
</ul>
</li>
</ul>
</section>
<section id="r4-5">
<h3>4.5 Alert, action group, availability test và workbook<a class="anch" href="#r4-5">#</a></h3>
<ul>
<li><strong>Chọn loại alert rule</strong><ul>
<li>Metric alert vs log search alert; ngưỡng "&gt; 0 dòng" → bắn khi bất kỳ dòng nào thoả; dynamic threshold cho anomaly</li>
<li><strong>Các loại rule</strong><ul>
<li><strong>Metric alert</strong>: chỉ số dựng sẵn (CPU, 5xx, <code>DeadletteredMessages</code>, RU), rẻ và nhanh, stateful mặc định; 5.000 rule/subscription</li>
<li><strong>Log search alert</strong>: KQL (join, customDimensions, tỷ lệ, percentile), tính phí theo tần suất; 5.000 rule/subscription, chỉ <strong>100 rule</strong> được tần suất 1 phút; 1.000 rule mỗi resource</li>
<li><strong>Activity log alert</strong>: xoá resource, gán role, Service Health/Resource Health; <strong>100 rule/subscription, không tăng được</strong>; stateless, không tự resolve</li>
<li><strong>Smart detection</strong>: ML, cần <strong>24 giờ</strong> học; Failure anomalies (tỷ lệ lỗi so baseline, kèm cluster analysis) và Performance anomalies (chậm dần, exception tăng bất thường)</li>
<li><strong>Prometheus alert</strong>: PromQL trên AKS; 20 rule mỗi rule group, interval 1 phút – 24 giờ</li>
</ul>
</li>
<li><strong>Chọn đúng loại</strong><ul>
<li>"Cảnh báo trong vòng 1 phút cho CPU" → <strong>metric alert</strong>, không phải log alert chạy mỗi phút</li>
<li>Log alert dở phát hiện thứ <strong>thiếu</strong> ("30 phút không có heartbeat") do độ trễ ingest → metric alert / metric alerts for logs</li>
<li>Metric có sẵn không cần diagnostic settings để alert; log thì cần</li>
<li>Rule thủ công giữ SLA đã biết + smart detection bắt vấn đề chưa lường trước</li>
</ul>
</li>
</ul>
</li>
<li><strong>Cấu hình rule</strong><ul>
<li><strong>Thành phần và severity</strong><ul>
<li>Bốn thành phần: Scope, Condition, Action group, Severity</li>
<li>Severity: <strong>0 Critical</strong> · 1 Error · 2 Warning · 3 Informational · 4 Verbose</li>
</ul>
</li>
<li><strong>Điều kiện và ngưỡng</strong><ul>
<li>Log search alert: evaluation frequency (1 phút – 24 giờ), aggregation granularity (window size), measure = <strong>table rows</strong> hoặc giá trị cột số, number of violations để tránh đỉnh nhất thời<ul>
<li>Query trả các service có hơn 10 lỗi, threshold số dòng &gt; 0 → bắn khi <strong>bất kỳ service nào</strong> vượt 10, không phải mỗi request lỗi, không đòi mọi service</li>
</ul>
</li>
<li>Ngưỡng theo <strong>p95</strong> dễ hành động hơn trung bình (trung bình đẹp trong khi 5% người dùng chậm)</li>
<li>Dynamic threshold hợp chỉ số có chu kỳ ngày/tuần (ngưỡng cứng báo nhầm mỗi sáng)</li>
</ul>
</li>
<li><strong>Trạng thái và giới hạn</strong><ul>
<li>Stateful: một alert khi true, tự resolve; tối đa 300 alert/lần đánh giá, 5.000 alert đang fired; stateless: bắn mỗi lần đúng, tối đa 6.000/lần</li>
<li>Metric alert nhiều điều kiện: bắn khi <strong>mọi điều kiện</strong> cùng đúng; resolve khi một điều kiện sai <strong>3 lần liên tiếp</strong></li>
<li>Thuộc tính rule ≤ <strong>64 KB</strong>, kết quả query ≤ <strong>20 MB</strong> → query alert phải <code>summarize</code>, không trả log thô</li>
</ul>
</li>
<li>CLI: <code>az monitor metrics alert create --condition "max DeadletteredMessages &gt; 0"</code>; log alert <code>az monitor scheduled-query create</code> (extension)</li>
</ul>
</li>
<li><strong>Action group</strong><ul>
<li>Action group: email, SMS, webhook, Function, Logic App; availability test</li>
<li><strong>Giới hạn</strong><ul>
<li>Dùng lại cho nhiều rule; một rule tối đa <strong>5 action group</strong>; action chạy <strong>đồng thời, không theo thứ tự</strong></li>
<li>Rate limit: email 100/giờ/địa chỉ; SMS và voice <strong>1 mỗi 5 phút</strong>; 300 thông báo/phút/subscription/region; 100 thông báo/5 phút/rule<ul>
<li>Chỉ SMS, voice, push, email bị rate limit → bão alert dùng <strong>action group → Logic App → Teams</strong>, không dùng SMS</li>
</ul>
</li>
</ul>
</li>
<li><strong>Webhook</strong><ul>
<li>Webhook retry tối đa 5 lần (5–20–5–40–5 giây), chỉ 408/429/503/504 và lỗi mạng; hết lượt → ngừng gọi 15 phút; endpoint trả 500 → mất thông báo</li>
<li>Đầu nhận là code của mình → bật <strong>common alert schema</strong> (<code>useCommonAlertSchema: true</code>)</li>
<li>Gọi API nội bộ bảo vệ bằng Entra ID → <strong>Secure webhook</strong> (webhook thường chỉ basic auth trong URI)</li>
<li>Endpoint cần schema riêng (Teams) → Logic App nắn payload</li>
</ul>
</li>
<li><strong>Cấu hình action group</strong><ul>
<li>Global (≥ 2 region) vs Regional (chủ quyền dữ liệu); <strong>Service Health alert bắt buộc Global</strong></li>
<li>Email mới phải xác minh OTP trong <strong>30 phút</strong></li>
<li>Tách theo mức: Critical → SMS, voice, webhook sự cố; Warning → email; thử bằng <strong>Test action group</strong></li>
</ul>
</li>
</ul>
</li>
<li><strong>Availability test</strong><ul>
<li>Đo từ Internet vào → bắt DNS sai, cert hết hạn, firewall chặn nhầm mà app không biết</li>
<li><strong>URL ping test khai tử 30/09/2026</strong>, test cũ bị xoá → thay bằng <strong>Standard test</strong> (có phí); không tự chuyển, alert rule phải trỏ sang test mới<ul>
<li>Standard test: kiểm <strong>hạn chứng chỉ TLS/SSL</strong>, chọn HTTP verb, request body, custom header</li>
</ul>
</li>
<li><strong>Cấu hình test</strong><ul>
<li><strong>5–16 vị trí</strong>; ngưỡng báo = số vị trí − 2 (5 vị trí → 3 nơi fail)</li>
<li>Tần suất mặc định 5 phút, tối thiểu <strong>300 giây</strong></li>
<li>Bật retry: chỉ báo khi <strong>3 lần liên tiếp</strong> fail (~80% thất bại tự hết khi thử lại)</li>
<li>100 test/App Insights, 800 test/resource group, 10 redirect, 15 dependent request</li>
<li>Content match phân biệt hoa thường, không wildcard, chỉ ký tự tiếng Anh</li>
</ul>
</li>
<li><strong>Kết quả và mạng</strong><ul>
<li>Kết quả: bảng <code>availabilityResults</code>, metric Availability và Test Duration</li>
<li>Firewall chỉ cho availability test → custom header <strong><code>X-Customer-InstanceId</code></strong> + service tag <strong><code>ApplicationInsightsAvailability</code></strong>, không mở theo IP (dải IP dùng chung)</li>
<li>Endpoint không ra Internet → test không tới; đo tín hiệu sức khoẻ từ trong mạng rồi alert</li>
<li>Đổi cấu hình test mất tới <strong>20 phút</strong> mới lan hết; tắt test/alert khi bảo trì</li>
</ul>
</li>
</ul>
</li>
<li><strong>Workbook và dashboard</strong><ul>
<li><strong>Workbook</strong><ul>
<li>Điều tra tương tác, lọc động → <strong>Workbook có parameter</strong>; dashboard chỉ để pin và theo dõi</li>
<li>Workbook trả lời "tại sao" (chữ + biểu đồ + tham số, trộn KQL, metric, Resource Graph); dashboard trả lời "có đang cháy không"</li>
<li>Tham số workbook: Time range, Dropdown, Resource picker; query dùng <code>{TimeRange}</code>, <code>{ServiceName}</code></li>
<li>Conditional visibility ẩn/hiện step theo tham số; <strong>grid link action</strong> để drill-down từ tổng quan xuống từng service</li>
<li>SLA availability → workbook <strong>Downtime &amp; Outages</strong> (Failure Threshold, Outage Window, Maintenance Period, Availability Target %); outage tính từ lúc fail tới lúc pass lại</li>
</ul>
</li>
<li><strong>Dashboard</strong><ul>
<li>Dashboard: ghim metric hoặc kết quả log query; gộp nhiều subscription; tile <strong>không thời gian thực</strong> → sự cố dùng Live Metrics</li>
<li>Đồng nghiệp mở dashboard thấy tile lỗi truy cập → có quyền dashboard nhưng <strong>thiếu quyền đọc Application Insights</strong> sau tile</li>
<li>Chia sẻ dashboard: Share → Publish, RBAC; giữ 5–10 tile, tên tile có nghĩa, Markdown tile đầu trang</li>
<li>Mỗi resource tối đa <strong>5 diagnostic setting</strong>; dashboard query tối đa <strong>2.000 bản ghi</strong></li>
</ul>
</li>
</ul>
</li>
<li><strong>Chi phí giám sát</strong><ul>
<li>Giảm ingest: sampling, <strong>Basic Logs</strong> cho bảng verbose, retention hợp lý, <strong>transformation (DCR)</strong> lọc trước khi ingest</li>
<li>Mọi service gửi chung một workspace → KQL join xuyên dịch vụ được</li>
</ul>
</li>
</ul>
</section>
<section id="r4-6">
<h3>4.6 Bảo mật xuyên suốt và production hardening<a class="anch" href="#r4-6">#</a></h3>
<ul>
<li><strong>Danh tính và quyền</strong><ul>
<li>Managed identity ở mọi nơi, không hard-code secret; least privilege, private endpoint</li>
<li>System-assigned gắn vòng đời tài nguyên; user-assigned dùng lại cho nhiều tài nguyên, tồn tại độc lập</li>
<li>Role data plane: Cosmos DB Built-in Data Contributor, Storage Blob Data Contributor, Service Bus Data Sender/Receiver, Key Vault Secrets User, App Configuration Data Reader, AcrPull</li>
<li>Tắt khoá ở nơi hỗ trợ: admin user ACR, access key App Configuration và Storage, local auth Cosmos DB → chỉ còn Entra ID</li>
<li>Key Vault chỉ giữ thứ không dùng identity được (API key bên thứ ba)</li>
</ul>
</li>
<li><strong>Mạng và dữ liệu</strong><ul>
<li>Private endpoint cho Key Vault, Cosmos DB, PostgreSQL, ACR (Premium); <strong>chặn public network access</strong> thay vì chỉ lọc IP</li>
<li>VNet integration cho App Service/Functions/Container Apps; mã hoá at-rest mặc định, CMK khi cần, TLS 1.2+</li>
<li>Không commit secret, quét secret trong CI, bật Defender for Cloud</li>
</ul>
</li>
<li><strong>Bảo mật riêng cho AI</strong><ul>
<li>Không ghi prompt/output vào log mặc định (chứa dữ liệu người dùng, PII); cần lưu → kho riêng, có hạn xoá; không để lọt vào trace hay baggage</li>
<li>Content filter Azure OpenAI bật mặc định → app xử lý mã lỗi bị chặn riêng, không coi là lỗi hệ thống</li>
<li>Prompt injection trong RAG → coi văn bản lấy từ nguồn ngoài là <strong>dữ liệu, không phải chỉ dẫn</strong>; giới hạn tool agent gọi được; kiểm đầu ra trước khi hành động</li>
<li>Vector store đa tenant → filter theo tenant bắt buộc</li>
</ul>
</li>
<li><strong>Độ tin cậy</strong><ul>
<li>Retry/backoff cho 429; kiểm soát chi phí cho AI workload<ul>
<li>Backoff <strong>+ jitter</strong>, giới hạn số lần, tôn trọng thời gian chờ dịch vụ trả về; retry đều nhịp → sóng đồng pha</li>
<li><strong>Circuit breaker</strong>: N lỗi liên tiếp → mở mạch, trả lỗi nhanh; không có → thread/connection cạn, lỗi lan ngược</li>
</ul>
</li>
<li>Hạn mức deployment Azure OpenAI: <strong>TPM</strong> và <strong>RPM</strong> gắn theo tỷ lệ cố định (vd 10 RPM mỗi 1.000 TPM); vượt → 429<ul>
<li>Tránh trần: retry trong app, tăng tải từ từ, nâng quota (chuyển quota từ deployment khác)</li>
<li>Standard/GlobalStandard trả theo lượt vs <strong>Provisioned (PTU)</strong>; "p99 phải ổn định, tải biết trước" → <strong>PTU</strong></li>
</ul>
</li>
<li>Suy giảm thay vì sập: model chính 429 → model nhỏ hoặc region khác; vector search hỏng → full-text; cache hỏng → đọc nguồn; mỗi nhánh có timeout riêng</li>
<li>Đỉnh tải → đệm bằng <strong>Service Bus</strong>, consumer rút theo tốc độ hạn mức cho phép</li>
</ul>
</li>
<li><strong>Chi phí AI</strong><ul>
<li>Cache embedding theo <strong>hash văn bản</strong> (Redis TTL dài); cache câu trả lời lặp, TTL có jitter chống stampede</li>
<li>Cắt ngữ cảnh (top-k nhỏ, chunk gọn) vì token đầu vào là phần lớn hoá đơn RAG</li>
<li>Model nhỏ cho phân loại/rewrite query, model lớn chỉ cho bước sinh câu trả lời</li>
<li>Giảm chiều embedding (<code>dimensions=1536</code>, <code>halfvec</code>); batch lời gọi embedding</li>
<li>Scale-to-zero worker Container Apps; loại <code>/embedding/*</code> khỏi indexing policy Cosmos để giảm RU ghi</li>
<li>Đo trước khi tối ưu: ghi token vào custom dimension, tổng hợp bằng KQL theo endpoint và tenant</li>
</ul>
</li>
</ul>
</section>
<h2 class="dom">5. Con số và mẹo làm đề</h2>
<section id="r5-1">
<h3>5.1 Con số phải nhớ<a class="anch" href="#r5-1">#</a></h3>
<ul>
<li><strong>Đề thi</strong><ul>
<li>Thi: 700/1000 điểm đạt, 120 phút</li>
</ul>
</li>
<li><strong>Domain 1–3</strong><ul>
<li>Cosmos: point read 1 KB = 1 RU · Strong/Bounded 2× RU · partition 20 GB / 10.000 RU/s · tối thiểu 400 RU/s · flat ≤ 505 chiều, diskANN/quantizedFlat ≤ 4096</li>
<li>pgvector: <code>vector</code> 2000 chiều, <code>halfvec</code> 4000 · PgBouncer cổng 6432</li>
<li>Redis: cổng 10000 · scale khi &gt; 75%</li>
<li>Service Bus: MaxDeliveryCount 10 · lock 1 phút (tối đa 5) · 256 KB / 100 MB</li>
<li>Event Grid: 30 lần / 24 giờ · event 1 MB (tính phí theo từng 64 KB) · 25 advanced filter</li>
<li>Functions: Consumption 5 phút (tối đa 10) · Premium 30 phút (đặt được không giới hạn) · HTTP ~230 giây</li>
<li>Container Apps: mặc định 0–10 replica, concurrency 10, Consumption tối đa 4 vCPU / 8 GiB</li>
</ul>
</li>
<li><strong>Key Vault</strong><ul>
<li>Key Vault: soft delete 7–90 ngày<ul>
<li>Soft delete mặc định 90 ngày, chỉ đặt lúc tạo vault · tên vault 3–24 ký tự</li>
</ul>
</li>
<li>Throttling: 4.000 GET / vault / 10 giây · ghi 300 / 10 giây · trần subscription = 5× một vault</li>
<li>Secret 25 KB · <code>content_type</code> 255 ký tự · 15 tag mỗi secret</li>
<li><code>SecretNearExpiry</code> bắn trước hạn 30 ngày · App Service Key Vault reference refetch mỗi 24 giờ</li>
<li>TTL cache: xoay 90 ngày → 30–60 phút (đáp án assessment 1 giờ); xoay hằng ngày/tuần → 5–15 phút</li>
</ul>
</li>
<li><strong>App Configuration</strong><ul>
<li>Key + value tối đa 10 KB</li>
<li>Free: 3 store / region / subscription, 1.000 request/ngày, không SLA</li>
</ul>
</li>
<li><strong>OpenTelemetry &amp; KQL</strong><ul>
<li><code>traceparent</code>: trace-id 32 hex, span-id 16 hex, flags <code>01</code> = sampled</li>
<li>Offline storage retry tới 48 giờ · sampling khuyến nghị bắt đầu 5%</li>
<li><code>materialize()</code> cache 5 GB mỗi node</li>
</ul>
</li>
<li><strong>Alert &amp; giám sát</strong><ul>
<li><strong>Alert rule</strong><ul>
<li>Severity 0 Critical → 4 Verbose</li>
<li>Log search alert: tần suất 1 phút – 24 giờ · chỉ 100 rule/subscription được đặt 1 phút · rule ≤ 64 KB · kết quả query ≤ 20 MB</li>
<li>Metric / log search alert 5.000 rule/subscription · activity log alert 100 rule, không tăng được</li>
<li>Smart detection cần 24 giờ học · metric alert nhiều điều kiện resolve khi sai 3 lần liên tiếp</li>
</ul>
</li>
<li><strong>Action group</strong><ul>
<li>Action group: tối đa 5 mỗi rule · email 100/giờ/địa chỉ · SMS/voice 1 mỗi 5 phút · email mới xác minh OTP trong 30 phút</li>
<li>Webhook retry 5 lần, chỉ 408/429/503/504 · thất bại hết → ngừng gọi 15 phút</li>
</ul>
</li>
<li><strong>Availability và dashboard</strong><ul>
<li>Availability test: 5–16 vị trí, ngưỡng = số vị trí − 2 · mặc định 5 phút (tối thiểu 300 giây) · báo khi 3 lần liên tiếp fail · 100 test mỗi Application Insights<ul>
<li>URL ping test khai tử 30/09/2026 → Standard test</li>
</ul>
</li>
<li>5 diagnostic setting mỗi resource · dashboard query tối đa 2.000 bản ghi</li>
</ul>
</li>
</ul>
</li>
<li><strong>Azure OpenAI</strong><ul>
<li>Batch deployment rẻ hơn 50%, mục tiêu xong trong 24 giờ · Developer tier tự xoá sau 24 giờ</li>
<li>Structured outputs tối đa 100 property, 5 tầng lồng · description của tool tối đa 1.024 ký tự</li>
</ul>
</li>
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
`,u=e({__name:"Ai200ReviewPage",setup(l){return(r,s)=>(o(),t(n,{certId:"ai200",html:i(c),title:"AI-200 · Ôn nhanh",subtitle:"Một danh sách các mục cần ôn theo 4 domain, đã gộp nội dung khóa AI-200T00 và 27 bài assessment trên Microsoft Learn",practiceRoute:"/ai-200/practice",practiceLabel:"Luyện thi AI-200",extraLinks:[{to:"/ai-200/documents",label:"Tài liệu chính"},{to:"/ai-200/services",label:"Dịch vụ Azure"}]},null,8,["html"]))}});export{u as default};
