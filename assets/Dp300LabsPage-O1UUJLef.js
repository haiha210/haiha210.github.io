import{_ as n}from"./NotesPage.vue_vue_type_script_setup_true_lang-D-yOx73c.js";import{d as t,f as e,e as a,o as i}from"./index-BlZsoMfu.js";import"./ThemeToggle.vue_vue_type_script_setup_true_lang-CRwkd5Yi.js";import"./useStudyClock-DHrMCeNI.js";const c=`<h2 class="dom">0. Trang này là gì</h2>

<section id="p0">
<h3>0.1 Vì sao có trang này — và vì sao trượt DP-300 thường không phải vì thiếu lý thuyết<a class="anch" href="#p0">#</a></h3>
<p>Repo này đã có <a href="/dp-300/documents">142 mục tài liệu</a>, <a href="/dp-300/tables">bảng ôn nhanh</a> và <a href="/dp-300/practice">735 câu luyện</a>. Cái còn thiếu là <b>tay</b>. Đề DP-300 hỏi rất nhiều câu dạng <i>"thao tác nào, theo thứ tự nào"</i> và <i>"lệnh này chạy trên dịch vụ nào thì được, trên dịch vụ nào thì không"</i> — hai loại câu mà đọc thuộc gần như không ăn thua, còn ai từng gõ tay thì trả lời trong ba giây.</p>
<p>Trang này là <b>phần thực hành</b>, dựng theo đúng bảy mô-đun của khoá học DP-300, mỗi mô-đun gồm: tóm tắt bài học (trỏ về mục tài liệu tương ứng), rồi các lab có lệnh cụ thể — <b>chạy ở đâu</b>, <b>gõ gì</b>, <b>nhìn cái gì để biết là đúng</b>, <b>bẫy nào trong đề</b>, và <b>lệnh xoá sạch</b> để không bị trừ tiền.</p>
<div class="tip"><b>Bảy lab chạy được ngay, offline, không tốn một đồng.</b> Repo có sẵn container SQL Server 2022 Developer ở <code>labs/dp-300/</code>, và bảy script T-SQL ở <code>labs/dp-300/labs/</code> đã được chạy thử toàn bộ. Chúng phủ phần lớn domain 3, 4 và 5 — vốn chiếm <b>65–70%</b> tổng trọng số của đề. Xem <a href="#p2">0.3</a>.</div>
<p class="src"><b>Nguồn:</b> <a href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-300" target="_blank" rel="noopener">Study guide DP-300</a> (skills measured bản 24/04/2026, trang cập nhật 26/03/2026) · <a href="https://microsoftlearning.github.io/dp-300-database-administrator/" target="_blank" rel="noopener">Lab chính thức của khoá DP-300</a> (18 bài) · Azure CLI reference và Azure SQL docs, đọc ngày 27/08/2026.</p>
</section>

<section id="p1">
<h3>0.2 Outline 7 mô-đun bạn đang cầm là bản CŨ — đây là bản đồ sang đề hiện tại<a class="anch" href="#p1">#</a></h3>
<p>Outline "Mô-đun 1: Vai trò của người quản trị cơ sở dữ liệu Azure … Mô-đun 7: HA/DR" là của khoá MOC DP-300 đời đầu. Khoá chính thức hiện nay đã đổi tên thành <b>"DP-300: Implement scalable database solutions using Azure SQL"</b> và có <b>18 lab</b>, trong đó bốn bài mới hoàn toàn (Copilot, semantic search, Oracle → PostgreSQL). Nội dung bảy mô-đun vẫn dùng tốt — nhưng phải biết nó ánh xạ sang <b>năm domain</b> của đề thế nào, vì trọng số chấm điểm đi theo domain chứ không theo mô-đun.</p>
<table>
<thead><tr><th>Mô-đun (outline cũ)</th><th>Domain của đề · trọng số</th><th>Còn đúng?</th></tr></thead>
<tbody>
<tr><td><b>1.</b> Vai trò DBA Azure</td><td>Domain 1 — Plan &amp; implement data platform resources · <b>15–20%</b></td><td>Đúng, nhưng "Preview features" nay chỉ là một gạch nhỏ</td></tr>
<tr><td><b>2.</b> Lập kế hoạch &amp; triển khai</td><td>Domain 1 · <b>15–20%</b></td><td>Đúng. Bổ sung mới: <b>Azure Arc</b>, <b>SQL database in Fabric</b>, <b>sharding</b>, <b>MI database copy/move</b></td></tr>
<tr><td><b>3.</b> Môi trường an toàn</td><td>Domain 2 — Implement a secure environment · <b>20–25%</b></td><td>Đúng. Bổ sung: <b>ledger</b>, <b>Always Encrypted với VBS enclave</b>, <b>Private Link</b></td></tr>
<tr><td><b>4.</b> Giám sát &amp; tối ưu tài nguyên</td><td>Domain 3 — Monitor, configure, optimize · <b>20–25%</b></td><td>Đúng. Bổ sung: <b>database watcher</b>, <b>Extended Events</b>, <b>IQP</b></td></tr>
<tr><td><b>5.</b> Tối ưu query performance</td><td>Domain 3 (chung với mô-đun 4) · <b>20–25%</b></td><td>Đúng. Query Store nặng hơn trước</td></tr>
<tr><td><b>6.</b> Tự động hoá công việc</td><td>Domain 4 — Automation of tasks · <b>15–20%</b></td><td>Đúng. Bổ sung: <b>Bicep</b> đứng ngang hàng ARM</td></tr>
<tr><td><b>7.</b> HA/DR</td><td>Domain 5 — HA/DR · <b>20–25%</b></td><td>Đúng. Bổ sung: <b>AG trên Managed Instance</b>, <b>log shipping</b></td></tr>
</tbody></table>
<div class="warn"><b>Ba mảng có trong đề hiện tại mà outline bảy mô-đun KHÔNG nhắc tới:</b> <b>Azure Arc-enabled SQL</b> (domain 1) · <b>Azure SQL Database in Microsoft Fabric</b> (domain 1) · <b>database watcher</b> (domain 3). Cả ba đều mới và đều dễ bị bỏ sót vì học theo giáo trình cũ — đọc <a href="/dp-300/documents#s6a">tài liệu mục 6a, 6b</a> và <a href="/dp-300/documents#s48a">48a</a>.</div>
<p><b>18 lab chính thức của khoá hiện tại, xếp về bảy mô-đun:</b></p>
<table>
<thead><tr><th>#</th><th>Lab chính thức</th><th>Mô-đun</th><th>Có bản offline ở repo?</th></tr></thead>
<tbody>
<tr><td>1</td><td>Setup your own environment</td><td>1</td><td>✅ <code>docker compose up</code></td></tr>
<tr><td>2</td><td>Provision SQL Server on an Azure VM</td><td>1</td><td>❌ cần Azure → <a href="#m1c">1.2</a></td></tr>
<tr><td>3</td><td>Authorize access with Microsoft Entra ID</td><td>3</td><td>❌ cần Azure → <a href="#m3b">3.2</a></td></tr>
<tr><td>4</td><td>Configure Azure SQL Database firewall rules</td><td>3</td><td>❌ cần Azure → <a href="#m3a">3.1</a></td></tr>
<tr><td>5</td><td>Enable Defender for SQL and Data classification</td><td>3</td><td>❌ cần Azure → <a href="#m3c">3.3</a></td></tr>
<tr><td>6</td><td>Isolate performance problems through monitoring</td><td>4</td><td>✅ <code>04-monitor.sql</code></td></tr>
<tr><td>7</td><td>Detect and correct fragmentation issues</td><td>4</td><td>✅ <code>04-monitor.sql</code> phần D</td></tr>
<tr><td>8</td><td>Identify and resolve blocking issues</td><td>4</td><td>✅ <code>04-monitor.sql</code> phần C</td></tr>
<tr><td>9</td><td>Identify database design issues</td><td>5</td><td>✅ <code>05-query-tuning.sql</code> phần B</td></tr>
<tr><td>10</td><td>Isolate problem areas in poorly performing queries</td><td>5</td><td>✅ <code>05-query-tuning.sql</code></td></tr>
<tr><td>11</td><td>Deploy Azure SQL Database using ARM template</td><td>6</td><td>❌ cần Azure → <a href="#m2b">2.1</a></td></tr>
<tr><td>12</td><td>Create a CPU status alert for a SQL Server</td><td>6</td><td>◐ alert của Agent: <code>06-agent-jobs.sql</code>; alert của Azure Monitor → <a href="#m6e">6.5</a></td></tr>
<tr><td>13</td><td>Deploy an automation runbook to rebuild indexes</td><td>6</td><td>❌ cần Azure → <a href="#m6d">6.4</a></td></tr>
<tr><td>14</td><td>Configure geo-replication for Azure SQL Database</td><td>7</td><td>❌ cần Azure → <a href="#m7c">7.3</a></td></tr>
<tr><td>15</td><td>Backup to URL and Restore from URL</td><td>7</td><td>◐ backup/restore/PITR đủ ở <code>07-backup-restore.sql</code>; phần URL cần storage account</td></tr>
<tr><td>16</td><td>Diagnose a slow query with Copilot</td><td>5</td><td>❌ cần Azure → <a href="#m5e">5.5</a></td></tr>
<tr><td>17</td><td>Case study: secure a retail semantic-search workload</td><td>3</td><td>❌ cần Azure</td></tr>
<tr><td>18</td><td>Convert an Oracle schema to Azure Database for PostgreSQL</td><td>2</td><td>❌ cần Azure → <a href="#m2e">2.4</a></td></tr>
</tbody></table>
</section>

<section id="p2">
<h3>0.3 Ba môi trường thực hành — chọn cái nào cho việc nào<a class="anch" href="#p2">#</a></h3>
<table>
<thead><tr><th></th><th>A · Container ở repo</th><th>B · Azure SQL Database free offer</th><th>C · Azure trả tiền</th></tr></thead>
<tbody>
<tr><th>Chi phí</th><td>0 đ</td><td>0 đ trong hạn mức</td><td>Vài chục nghìn tới vài trăm nghìn đồng mỗi buổi</td></tr>
<tr><th>Dựng mất</th><td>~5 phút lần đầu</td><td>~5 phút</td><td>5 phút → 6 giờ (Managed Instance)</td></tr>
<tr><th>Lab được</th><td>T-SQL, tuning, Query Store, Agent, backup/restore, TDE, RLS, DDM, ledger, CDC, Resource Governor</td><td>Firewall, Entra ID, Defender, classification, PITR, automatic tuning, Query Performance Insight</td><td>Tất cả: VM, MI, AG, geo-replication, failover group, ARM/Bicep, runbook, elastic job</td></tr>
<tr><th>Không lab được</th><td>Mọi thứ thuộc riêng Azure</td><td>Failover group, elastic pool, elastic job, LTR, và <b>không</b> có Agent</td><td>—</td></tr>
<tr><th>Phủ domain</th><td>3 · 4 · 5 (≈65–70%)</td><td>2 · một phần 3</td><td>1 · 4 · 5</td></tr>
</tbody></table>
<p><b>A — container ở repo.</b> Đây là chỗ nên bỏ nhiều giờ nhất, vì nó phủ đúng ba domain nặng nhất và không có đồng hồ tính tiền chạy sau lưng.</p>
<pre><code>cd labs/dp-300
docker compose up -d          # lần đầu kéo ~1,5 GB
./sql "SELECT @@VERSION"      # kiểm tra đã lên

./sql -f labs/01-compat-iqp.sql
./sql -f labs/02-partition-compression.sql
./sql -f labs/05-query-tuning.sql
./sql -f labs/04-monitor.sql
./sql -f labs/03-security.sql
./sql -f labs/06-agent-jobs.sql
./sql -f labs/07-backup-restore.sql</code></pre>
<p>Thứ tự trên là cố ý: chạy 05 trước 04 để Query Store và các DMV có dữ liệu thật mà quan sát; chạy 03 gần cuối vì nó bật TDE và masking, làm kết quả các lab khác hơi khác đi. Muốn xem <b>execution plan</b> — nửa giá trị của lab 05 nằm ở đó — thì mở CloudBeaver ở <a href="http://localhost:8978" target="_blank" rel="noopener">localhost:8978</a>, hoặc trỏ SSMS / Azure Data Studio vào <code>localhost,1433</code>.</p>
<p><b>B — Azure SQL Database free offer.</b> Mỗi database được <b>100 000 vCore-giây</b>, <b>32 GB dữ liệu</b> và <b>32 GB backup</b> mỗi tháng, <b>vĩnh viễn theo vòng đời subscription</b>, tối đa <b>10 database General Purpose</b> mỗi subscription. Đây là cách rẻ nhất để chạm vào Azure SQL thật.</p>
<pre><code>az sql db create -g rg-dp300 -s &lt;server&gt; -n freedb \\
  -e GeneralPurpose -f Gen5 -c 2 --compute-model Serverless \\
  --use-free-limit --free-limit-exhaustion-behavior AutoPause</code></pre>
<div class="warn"><b>Giới hạn của free offer, phải biết trước khi lên kế hoạch lab:</b> không dùng được cho <b>failover group</b>, <b>elastic pool</b>, <b>elastic job</b>, <b>LTR</b>; PITR chỉ giữ 7 ngày; tối đa 4 vCore và 32 GB. Nghĩa là lab 6.5 và 7.3 <b>không</b> làm trên database free được — phải tạo một database GP trả tiền, làm nhanh, rồi xoá.<br>Chọn <code>AutoPause</code>: hết hạn mức thì database tự ngủ tới đầu tháng sau, <b>không</b> bị trừ tiền. Chọn <code>BillOverUsage</code> thì tính tiền phần vượt — và <b>không quay lại AutoPause được nữa</b>.</div>
<p><b>C — Azure trả tiền.</b> Chỉ dùng cho những gì hai môi trường kia không làm được. Luôn làm theo lối <b>dựng nhanh → chụp màn hình → xoá ngay</b>, xem <a href="#p3">0.4</a>.</p>
</section>

<section id="p3">
<h3>0.4 Chuẩn bị Azure một lần, và kỷ luật xoá tài nguyên<a class="anch" href="#p3">#</a></h3>
<pre><code># Cài Azure CLI rồi đăng nhập
az login
az account set --subscription "&lt;tên hoặc id subscription&gt;"

# Biến dùng lại cho mọi lab bên dưới — dán vào ~/.zshrc hay chạy lại mỗi phiên
export RG=rg-dp300
export LOC=southeastasia                      # Singapore, gần VN nhất
export SRV=sqlsrv-dp300-$RANDOM               # tên logical server phải duy nhất TOÀN CẦU
export ADMIN=sqladmin
export PWD_SQL='Dp300#Lab.2026'               # ≥8 ký tự, đủ 3/4 nhóm ký tự
export MYIP=$(curl -s https://ifconfig.me)

# MỘT resource group cho tất cả — để xoá sạch bằng đúng một lệnh
az group create -n $RG -l $LOC</code></pre>
<div class="tip"><b>Kỷ luật quan trọng nhất của việc học Azure bằng tiền túi:</b> mọi thứ vào chung một resource group, và kết thúc mỗi buổi thì
<pre><code>az group delete -n $RG --yes --no-wait</code></pre>
Đặt thêm một budget alert để yên tâm ngủ:
<pre><code>az consumption budget create --budget-name dp300-cap --amount 20 \\
  --category Cost --time-grain Monthly \\
  --time-period start-date=$(date +%Y-%m-01) \\
  --resource-group $RG</code></pre></div>
<p><b>Ước tính chi phí thô</b> (khu vực Southeast Asia, giá tham khảo — luôn kiểm lại bằng <a href="https://azure.microsoft.com/pricing/calculator/" target="_blank" rel="noopener">pricing calculator</a> vì giá đổi liên tục):</p>
<table>
<thead><tr><th>Tài nguyên</th><th>Cỡ giá</th><th>Cho lab nào</th><th>Ghi chú</th></tr></thead>
<tbody>
<tr><td>Azure SQL Database — free offer</td><td><b>0</b></td><td>3.1 · 3.2 · 3.3 · 4.6 · 5.5 · 7.5</td><td>Ưu tiên tuyệt đối</td></tr>
<tr><td>Azure SQL Database — GP serverless 1 vCore</td><td>vài nghìn đồng/giờ khi thức</td><td>7.3 (geo-replication), 6.5</td><td>Tự ngủ sau <code>--auto-pause-delay</code> phút</td></tr>
<tr><td>SQL Server trên VM — B2ms/D2s_v3, license PAYG</td><td>~vài chục nghìn đồng/giờ</td><td>1.2 · 2.1 · 7.2</td><td>Dùng ảnh <b>Developer</b> để license = 0; <b>deallocate</b> chứ đừng chỉ stop</td></tr>
<tr><td>Azure SQL Managed Instance</td><td>rất đắt, tối thiểu 4 vCore</td><td>—</td><td><b>Đừng tạo để học.</b> Dựng mất 4–6 giờ, xoá cũng lâu. Học bằng tài liệu</td></tr>
<tr><td>PostgreSQL / MySQL Flexible Server — B1ms</td><td>rẻ; thường có 12 tháng free cho tài khoản mới</td><td>2.4</td><td>Nhớ <code>az postgres flexible-server stop</code></td></tr>
<tr><td>Storage account (LRS, vài GB)</td><td>gần như 0</td><td>7.4</td><td></td></tr>
</tbody></table>
<div class="warn"><b>Ba cái bẫy tiền hay dính nhất:</b> (1) VM ở trạng thái <b>Stopped</b> vẫn tính tiền compute — phải là <b>Stopped (deallocated)</b>; (2) <b>Public IP tĩnh</b> và <b>managed disk</b> vẫn tính tiền dù VM đã deallocate; (3) database <b>geo-replica</b> tính tiền y hệt database chính, tạo xong quên xoá là nhân đôi hoá đơn.</div>
</section>

<section id="p4">
<h3>0.5 Cách dùng trang này để thi lại cho đỗ<a class="anch" href="#p4">#</a></h3>
<p>Kế hoạch <b>14 ngày</b>, mỗi ngày 1,5–2 giờ, giả định lý thuyết đã đọc rồi (trượt lần đầu thường là vậy):</p>
<table>
<thead><tr><th>Ngày</th><th>Làm gì</th><th>Xong thì phải trả lời được</th></tr></thead>
<tbody>
<tr><td>1</td><td>Dựng container, chạy lab 01 + 02</td><td>Compat level ảnh hưởng gì · thứ tự function → scheme → table · RANGE RIGHT vs LEFT</td></tr>
<tr><td>2</td><td>Lab 05 phần A–B, có mở execution plan</td><td>Đọc logical reads · nhận ra non-SARGable và implicit conversion trong plan</td></tr>
<tr><td>3</td><td>Lab 05 phần C–D (statistics, Query Store)</td><td>Quy trình 5 bước xử lý hồi quy plan · force plan khác gì hint</td></tr>
<tr><td>4</td><td>Lab 04 phần A–C (wait stats, blocking hai phiên)</td><td>Đọc top 5 wait type · bốn cách xử lý blocking, theo thứ tự nào</td></tr>
<tr><td>5</td><td>Lab 04 phần D–E (phân mảnh, MAXDOP, Resource Governor)</td><td>5%/30% · REBUILD vs REORGANIZE · MAXDOP trên Azure SQL DB đặt ở đâu</td></tr>
<tr><td>6</td><td>Lab 07 toàn bộ, làm PITR ít nhất hai lần</td><td>Thứ tự dây phục hồi · vì sao NORECOVERY · STOPAT dùng với lệnh nào</td></tr>
<tr><td>7</td><td>Lab 03 phần A–C (quyền, DDM, RLS)</td><td>DENY vs GRANT · vì sao DDM không phải bảo mật · chuỗi 5 bước của RLS</td></tr>
<tr><td>8</td><td>Lab 03 phần D–F (TDE, cột, ledger, audit)</td><td>Chuỗi TDE với CMK · Always Encrypted deterministic vs randomized</td></tr>
<tr><td>9</td><td>Lab 06 + <a href="/dp-300/practice">luyện 40 câu domain 4</a></td><td>Job → step → schedule → jobserver · Azure SQL DB thay Agent bằng gì</td></tr>
<tr><td>10</td><td>Azure: lab 3.1 → 3.3 trên free offer</td><td>Firewall server vs database · Entra ID admin · Defender bật ở đâu</td></tr>
<tr><td>11</td><td>Azure: lab 2.1 → 2.3 (ARM/Bicep, deploy)</td><td>ARM vs Bicep · deployment mode Incremental vs Complete</td></tr>
<tr><td>12</td><td>Azure: lab 7.3 + 7.5, xoá resource group ngay</td><td>Geo-replication vs failover group · RPO/RTO của từng phương án</td></tr>
<tr><td>13</td><td>Đề mô phỏng 40 câu/100 phút ở <a href="/dp-300/practice">trang luyện</a></td><td>Nhận diện domain nào còn yếu</td></tr>
<tr><td>14</td><td>Làm lại đúng những lab thuộc domain yếu nhất</td><td>—</td></tr>
</tbody></table>
<div class="tip"><b>Cách tự chấm.</b> Cuối mỗi lab, đóng hết tài liệu và <b>gõ lại chuỗi lệnh từ đầu bằng trí nhớ</b>. Chỗ nào phải mở tài liệu ra xem chính là chỗ sẽ mất điểm trong phòng thi. Đánh dấu, hôm sau làm lại. Đây là khác biệt giữa "đã làm lab" và "làm được lab".</div>
</section>

<h2 class="dom">Mô-đun 1 — Vai trò của DBA Azure</h2>

<section id="m1a">
<h3>1.0 Bài học — bốn thứ phải phân biệt được trước khi động tay<a class="anch" href="#m1a">#</a></h3>
<p>Mô-đun này không có kỹ năng thao tác nào nặng, nhưng nó đặt nền cho <b>mọi câu hỏi dạng "chọn dịch vụ nào"</b> trong cả đề. Bốn thứ:</p>
<pre><code>              SQL Server on VM      SQL Managed Instance     Azure SQL Database
              (IaaS)                (PaaS, gần như đủ)       (PaaS, từng database)
──────────────────────────────────────────────────────────────────────────────────
OS, patch     BẠN lo               Microsoft lo             Microsoft lo
Backup        BẠN lo               tự động                  tự động
Agent         CÓ                   CÓ                       KHÔNG → Elastic Jobs
CLR, Service  CÓ                   CÓ                       KHÔNG
 Broker, linked
 server, DTC
Cross-DB query CÓ                  CÓ                       KHÔNG (dùng elastic query)
Always On AG  CÓ (tự dựng)         CÓ (có sẵn, quản lý)     KHÔNG (dùng geo-replication /
                                                            failover group)
SLA           99,95–99,99%         99,99%                   99,99% (99,995% zone
              (tuỳ cấu hình)                                 redundant BC)
Di chuyển     lift-and-shift       gần như không sửa code   phải sửa nếu dùng
                                                            tính năng instance-level</code></pre>
<div class="tip"><b>Quy tắc chọn nhanh dùng được cho đa số câu hỏi tình huống:</b> cần quyền OS / phiên bản SQL cũ / tính năng lạ → <b>VM</b>. Muốn PaaS mà app dùng cross-database query, Service Broker, CLR, linked server, SQL Agent → <b>Managed Instance</b>. Ứng dụng hiện đại, một database, muốn rẻ và co giãn nhất → <b>Azure SQL Database</b>.</div>
<p>Còn <b>Azure Arc-enabled SQL Server</b> (đăng ký SQL Server chạy ở bất cứ đâu vào Azure để có Defender, Purview, đánh giá best practice, quản lý license tập trung) và <b>SQL database in Microsoft Fabric</b> (database SQL nằm trong workspace Fabric, dữ liệu tự nhân bản sang OneLake dưới dạng Delta) là hai mảng <b>mới trong đề mà giáo trình cũ không có</b> — đọc <a href="/dp-300/documents#s6a">mục 6a</a> và <a href="/dp-300/documents#s6b">6b</a>.</p>
<p><b>Đọc kèm:</b> <a href="/dp-300/documents#s9">Azure SQL Database</a> · <a href="/dp-300/documents#s10">Managed Instance</a> · <a href="/dp-300/documents#s11">SQL on VM</a> · <a href="/dp-300/documents#s14">Compatibility level</a></p>
</section>

<section id="m1b">
<h3>1.1 Lab · Compatibility level và IQP — chạy offline, 10 giây<a class="anch" href="#m1b">#</a></h3>
<p><b>Mục tiêu:</b> thấy tận mắt rằng compatibility level không phải con số trang trí.</p>
<pre><code>cd labs/dp-300 && ./sql -f labs/01-compat-iqp.sql</code></pre>
<p><b>Nhìn cái gì:</b> hai con số <code>elapsed time</code> của cùng một query, chạy ở compat 160 rồi compat 140. Trên máy tham chiếu (2 vCPU / 2 GB):</p>
<pre><code>compat 160 — scalar UDF được INLINE     →    340 ms
compat 140 — UDF chạy từng dòng, serial →  5 739 ms      gấp ~17 lần</code></pre>
<p><b>Bẫy trong đề:</b></p>
<ul>
<li>Restore <code>.bak</code> của SQL Server 2016 lên engine 2022 → database giữ nguyên <b>compat 130</b>, KHÔNG tự nâng. Chỉ bị đẩy lên nếu thấp hơn mức tối thiểu engine hỗ trợ (100).</li>
<li>Azure SQL Database: engine luôn mới nhất, database <b>mới</b> mặc định compat 170; database cũ giữ mức cũ vô thời hạn.</li>
<li>Muốn nâng compat mà một query cụ thể bị chậm đi: <b>đừng hạ compat cả database</b>. Dùng <code>ALTER DATABASE SCOPED CONFIGURATION</code> tắt riêng tính năng, hoặc force plan trong Query Store.</li>
</ul>
<div class="warn"><b>Quy trình nâng compat an toàn — đề hỏi đúng thứ tự này:</b> bật Query Store và chạy đủ một chu kỳ tải để có baseline → nâng compat → theo dõi <b>Regressed Queries</b> → query nào hồi quy thì force plan cũ → sửa gốc → bỏ force.</div>
</section>

<section id="m1c">
<h3>1.2 Lab · Dựng SQL Server trên Azure VM (lab chính thức #2)<a class="anch" href="#m1c">#</a></h3>
<p><b>Mục tiêu:</b> hiểu tại sao "SQL Server trên VM" trong Azure là <b>hai</b> tài nguyên chứ không phải một — cái VM, và cái <b>SQL VM resource</b> (extension) mang lại tự động backup, tự động patch và quản lý license.</p>
<pre><code># 1. VM có sẵn SQL Server 2022. Ảnh Developer -> license = 0 đồng
az vm create -g $RG -n vm-sql-dp300 \\
  --image MicrosoftSQLServer:sql2022-ws2022:sqldev-gen2:latest \\
  --size Standard_B2ms --admin-username azureuser \\
  --generate-ssh-keys --public-ip-sku Standard

# 2. Đăng ký SQL VM resource -> đây mới là chỗ có tự động backup / patch
az sql vm create -n vm-sql-dp300 -g $RG -l $LOC \\
  --license-type PAYG --sql-mgmt-type Full

# 3. Mở port 1433 CHỈ cho IP của bạn (đừng bao giờ mở 0.0.0.0/0)
az vm open-port -g $RG -n vm-sql-dp300 --port 1433 --priority 1001

# 4. Bật tự động patch và tự động backup — hai thứ đề hay hỏi
az sql vm update -n vm-sql-dp300 -g $RG \\
  --enable-auto-patching true --day-of-week Sunday \\
  --maintenance-window-starting-hour 2 --maintenance-window-duration 60

az sql vm update -n vm-sql-dp300 -g $RG \\
  --backup-schedule-type Automated --full-backup-frequency Weekly \\
  --full-backup-start-hour 2 --full-backup-window-hours 2 \\
  --sa-key &lt;storage-key&gt; --storage-account https://&lt;acct&gt;.blob.core.windows.net/</code></pre>
<p><b>Kiểm chứng:</b> <code>az sql vm show -n vm-sql-dp300 -g $RG -o jsonc</code> — nhìn <code>sqlManagement</code> phải là <code>Full</code>, và <code>autoPatchingSettings</code>, <code>autoBackupSettings</code> đã bật.</p>
<p><b>Bẫy trong đề:</b></p>
<ul>
<li><b>Lightweight</b> vs <b>Full</b> SQL management mode: Lightweight chỉ cho biết license và phiên bản; <b>tự động backup và tự động patch bắt buộc phải Full</b>, và Full thì cần agent chạy trong VM.</li>
<li>Cấu hình lưu trữ đúng cho SQL trên VM: data và log <b>tách ổ</b>, caching của data disk là <b>ReadOnly</b>, của log disk là <b>None</b>, tempdb đặt trên ổ local ephemeral <code>D:</code>.</li>
<li>Ảnh <b>Developer</b> miễn phí license nhưng <b>không được dùng cho production</b> — đề hay dùng chi tiết này để loại đáp án.</li>
</ul>
<div class="tip">Xong thì <code>az vm deallocate -g $RG -n vm-sql-dp300</code> — <b>deallocate</b>, không phải <code>stop</code>. Chỉ <code>stop</code> thì vẫn bị tính tiền compute.</div>
</section>

<section id="m1d">
<h3>1.3 Lab · Bật / tắt preview feature<a class="anch" href="#m1d">#</a></h3>
<p>Đề ghi rõ: <i>"Most questions cover features that are general availability. The exam may contain questions on Preview features if those features are commonly used."</i> Nên biết cách bật là đủ, không cần đào sâu.</p>
<pre><code># Xem các preview feature của một provider
az feature list --namespace Microsoft.Sql -o table

# Đăng ký một feature
az feature register --namespace Microsoft.Sql --name &lt;tên-feature&gt;

# BƯỚC HAY QUÊN: đăng ký xong phải re-register provider thì mới có tác dụng
az provider register --namespace Microsoft.Sql

# Theo dõi trạng thái: Registering -> Registered (có thể mất vài phút)
az feature show --namespace Microsoft.Sql --name &lt;tên-feature&gt; -o table</code></pre>
<p>Trên portal: <b>Subscription → Preview features</b>. Ở cấp database, một số tính năng preview bật bằng <code>ALTER DATABASE SCOPED CONFIGURATION</code> hoặc bằng công tắc trên blade của tài nguyên.</p>
<div class="warn">Preview feature <b>không có SLA</b> và <b>không được Microsoft hỗ trợ cho production</b>. Câu hỏi tình huống nào có chữ "production" và "supported" thì đáp án preview gần như chắc chắn sai.</div>
</section>

<h2 class="dom">Mô-đun 2 — Lập kế hoạch và triển khai tài nguyên</h2>

<section id="m2a">
<h3>2.0 Bài học — deploy, scale, migrate<a class="anch" href="#m2a">#</a></h3>
<p>Domain 1 (15–20%) chia làm ba: <b>triển khai</b> (chọn dịch vụ, chọn phương pháp tự động), <b>cấu hình để scale</b> (service tier, partitioning, compression), và <b>di chuyển</b> (online vs offline).</p>
<p><b>Bảng service tier phải nhớ cho Azure SQL Database:</b></p>
<table>
<thead><tr><th>Tier</th><th>Lưu trữ</th><th>Điểm nhận dạng</th><th>Dùng khi</th></tr></thead>
<tbody>
<tr><td>General Purpose</td><td>Remote premium storage</td><td>Compute và storage tách rời; failover = gắn lại file, mất vài chục giây</td><td>Mặc định, đa số workload</td></tr>
<tr><td>Business Critical</td><td>Local SSD, 4 replica AG</td><td>Độ trễ thấp nhất, có <b>read replica miễn phí</b>, in-memory OLTP</td><td>OLTP nhạy độ trễ, cần HA mạnh</td></tr>
<tr><td>Hyperscale</td><td>Page server, tách log service</td><td>Tới 128 TB, backup và restore <b>gần như tức thời</b> (snapshot), thêm tới 4 named replica</td><td>Database rất lớn, cần scale đọc</td></tr>
<tr><td>Serverless</td><td>(là compute tier của GP / Hyperscale)</td><td>Tự co giãn vCore, <b>tự ngủ</b> khi rảnh, tính tiền theo giây</td><td>Tải thất thường, dev/test, lab</td></tr>
</tbody></table>
<p><b>Đọc kèm:</b> <a href="/dp-300/documents#s1">Deployment</a> · <a href="/dp-300/documents#s8">Partitioning</a> · <a href="/dp-300/documents#s13">Compression</a> · <a href="/dp-300/documents#s15">Migration</a> · <a href="/dp-300/documents#s-16">Tính toán tài nguyên</a></p>
</section>

<section id="m2b">
<h3>2.1 Lab · Triển khai bằng ARM template và bằng Bicep (lab chính thức #11)<a class="anch" href="#m2b">#</a></h3>
<p><b>Mục tiêu:</b> gõ cả hai, thấy Bicep chỉ là cách viết dễ đọc của cùng một ARM template.</p>
<p><b>Cách 1 — chạy thẳng template mẫu của Microsoft:</b></p>
<pre><code>az deployment group create -g $RG \\
  --template-uri https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/quickstarts/microsoft.sql/sql-database/azuredeploy.json \\
  --parameters administratorLogin=$ADMIN administratorLoginPassword=$PWD_SQL</code></pre>
<p><b>Cách 2 — Bicep tự viết.</b> Lưu thành <code>sqldb.bicep</code>:</p>
<pre><code>param location string = resourceGroup().location
param serverName string
param adminLogin string
@secure()
param adminPassword string

resource srv 'Microsoft.Sql/servers@2023-05-01-preview' = {
  name: serverName
  location: location
  properties: {
    administratorLogin: adminLogin
    administratorLoginPassword: adminPassword
    minimalTlsVersion: '1.2'
    publicNetworkAccess: 'Enabled'
  }
}

resource db 'Microsoft.Sql/servers/databases@2023-05-01-preview' = {
  parent: srv
  name: 'appdb'
  location: location
  sku: { name: 'GP_S_Gen5', tier: 'GeneralPurpose', capacity: 1 }
  properties: {
    autoPauseDelay: 60
    minCapacity: json('0.5')
    zoneRedundant: false
  }
}

resource fw 'Microsoft.Sql/servers/firewallRules@2023-05-01-preview' = {
  parent: srv
  name: 'AllowMyIp'
  properties: { startIpAddress: '0.0.0.0', endIpAddress: '0.0.0.0' }
}

output fqdn string = srv.properties.fullyQualifiedDomainName</code></pre>
<pre><code># Xem trước sẽ thay đổi gì — luôn chạy bước này
az deployment group what-if -g $RG -f sqldb.bicep \\
  -p serverName=$SRV adminLogin=$ADMIN adminPassword=$PWD_SQL

az deployment group create -g $RG -f sqldb.bicep \\
  -p serverName=$SRV adminLogin=$ADMIN adminPassword=$PWD_SQL

# Xem lại lịch sử triển khai và lỗi (nơi troubleshoot đầu tiên)
az deployment group list -g $RG -o table
az deployment operation group list -g $RG -n sqldb --query "[?properties.provisioningState=='Failed']"</code></pre>
<p><b>Bẫy trong đề:</b></p>
<ul>
<li><b>Deployment mode</b>: <code>Incremental</code> (mặc định — chỉ thêm/sửa, giữ nguyên tài nguyên không có trong template) vs <code>Complete</code> (<b>XOÁ</b> mọi tài nguyên trong resource group không có trong template). Đây là câu hỏi kinh điển.</li>
<li><b>Bicep biên dịch ra ARM JSON</b> — không phải công nghệ khác, không có runtime riêng. <code>az bicep build -f sqldb.bicep</code> để nhìn tận mắt.</li>
<li>Mật khẩu phải là <code>@secure()</code> — giá trị secure <b>không</b> xuất hiện trong log triển khai. Đề hay hỏi cách giấu secret: dùng <code>@secure()</code> + tham chiếu Key Vault trong parameter file.</li>
<li>ARM/Bicep là <b>declarative &amp; idempotent</b>; PowerShell/CLI là <b>imperative</b>. Câu hỏi "đảm bảo môi trường luôn về đúng trạng thái mong muốn dù chạy lại nhiều lần" → chọn template.</li>
</ul>
</section>

<section id="m2c">
<h3>2.2 Lab · Triển khai bằng Azure CLI và bằng PowerShell<a class="anch" href="#m2c">#</a></h3>
<p>Đề liệt kê <b>ba</b> phương pháp tự động hoá riêng biệt (ARM/Bicep · PowerShell · CLI) nên phải gõ được cả ba.</p>
<pre><code># ---- Azure CLI ----
az sql server create -g $RG -n $SRV -l $LOC -u $ADMIN -p $PWD_SQL \\
  --enable-public-network true --minimal-tls-version 1.2

az sql server firewall-rule create -g $RG -s $SRV \\
  -n AllowMyIp --start-ip-address $MYIP --end-ip-address $MYIP

# Rule đặc biệt 0.0.0.0–0.0.0.0 = "Allow Azure services", KHÔNG phải "mở cho cả thế giới"
az sql server firewall-rule create -g $RG -s $SRV \\
  -n AllowAzureServices --start-ip-address 0.0.0.0 --end-ip-address 0.0.0.0

az sql db create -g $RG -s $SRV -n appdb \\
  -e GeneralPurpose -f Gen5 -c 1 --compute-model Serverless \\
  --auto-pause-delay 60 --min-capacity 0.5 --backup-storage-redundancy Local</code></pre>
<pre><code># ---- PowerShell (Az module) ----
New-AzSqlServer -ResourceGroupName $RG -ServerName $SRV -Location $LOC \`
  -SqlAdministratorCredentials (Get-Credential)

New-AzSqlServerFirewallRule -ResourceGroupName $RG -ServerName $SRV \`
  -FirewallRuleName "AllowMyIp" -StartIpAddress $MyIp -EndIpAddress $MyIp

New-AzSqlDatabase -ResourceGroupName $RG -ServerName $SRV -DatabaseName "appdb" \`
  -Edition GeneralPurpose -ComputeModel Serverless \`
  -ComputeGeneration Gen5 -VCore 1 -AutoPauseDelayInMinutes 60</code></pre>
<p><b>Kiểm chứng kết nối</b> — bước "đăng ký instance và xác thực kết nối" của lab chính thức:</p>
<pre><code>sqlcmd -S $SRV.database.windows.net -d appdb -U $ADMIN -P "$PWD_SQL" -G -Q "SELECT @@VERSION"
# hoặc Azure Data Studio / VS Code MSSQL extension: server = &lt;srv&gt;.database.windows.net</code></pre>
<div class="warn"><b>Rule <code>0.0.0.0 – 0.0.0.0</code></b> nghĩa là <b>"Allow Azure services and resources to access this server"</b>, tức mọi tài nguyên Azure của <b>mọi khách hàng</b> — nghe an toàn mà thực ra rất rộng. Sản xuất nên dùng <b>Private Link</b> hoặc <b>service endpoint</b> thay vì rule này. Đề hỏi ý nghĩa của dải này rất thường xuyên.</div>
</section>

<section id="m2d">
<h3>2.3 Lab · Partitioning và compression — chạy offline, 30 giây<a class="anch" href="#m2d">#</a></h3>
<pre><code>./sql -f labs/02-partition-compression.sql</code></pre>
<p><b>Nhìn cái gì:</b></p>
<ul>
<li>Bảng phân bố dòng theo 5 partition, và hàm <code>$PARTITION.pf_OrderDate('2023-01-01')</code> trả về <b>2</b> — bằng chứng của <code>RANGE RIGHT</code>.</li>
<li><code>SWITCH PARTITION 1</code> chuyển <b>20 668 dòng</b> sang bảng lưu trữ trong mili giây, vì nó chỉ đổi metadata.</li>
<li>Dung lượng: <code>sales.Orders</code> không nén <b>10 248 KB</b> → bản partitioned nén PAGE+ROW <b>3 936 KB</b>.</li>
</ul>
<p><b>Bẫy trong đề:</b></p>
<ul>
<li>Thứ tự bắt buộc: <b>filegroup → partition function → partition scheme → table</b>. Trước khi SPLIT phải <code>ALTER PARTITION SCHEME ... NEXT USED</code>.</li>
<li>Cột phân vùng <b>phải</b> nằm trong mọi unique index / primary key của bảng.</li>
<li>SWITCH cần bảng đích <b>rỗng</b>, <b>cùng filegroup</b>, cấu trúc giống hệt, và có <b>CHECK constraint tin cậy</b> phủ đúng khoảng của partition.</li>
<li>Nén dữ liệu <b>không</b> cần Enterprise từ SQL Server 2016 SP1, và mọi tier của Azure SQL Database đều có. Đáp án "cần Enterprise Edition" là bẫy dựa trên kiến thức trước 2016.</li>
<li>Page nén <b>vẫn ở dạng nén trong buffer pool</b> — tiết kiệm cả đĩa lẫn RAM, đổi lại tốn CPU.</li>
<li>Partitioning làm truy vấn nhanh nhờ <b>partition elimination</b>, không phải nhờ "bảng nhỏ đi". Query không lọc theo cột phân vùng thì <b>không</b> nhanh hơn chút nào.</li>
</ul>
</section>

<section id="m2e">
<h3>2.4 Lab · PostgreSQL / MySQL Flexible Server (và lab chính thức #18)<a class="anch" href="#m2e">#</a></h3>
<p>Đề DP-300 hiện tại <b>không</b> còn gạch đầu dòng riêng cho MySQL/PostgreSQL trong skills-measured, nhưng khoá học vẫn có lab #18 (Oracle → PostgreSQL) và outline mô-đun 2 vẫn nhắc. Làm nhanh cho biết mặt, đừng đầu tư nhiều thời gian.</p>
<pre><code>az postgres flexible-server create -g $RG -n pg-dp300-$RANDOM -l $LOC \\
  --tier Burstable --sku-name Standard_B1ms --storage-size 32 \\
  --admin-user pgadmin --admin-password "$PWD_SQL" \\
  --public-access $MYIP --version 16

psql "host=&lt;name&gt;.postgres.database.azure.com port=5432 dbname=postgres user=pgadmin sslmode=require"

# Tắt ngay khi không dùng để khỏi tính tiền
az postgres flexible-server stop -g $RG -n &lt;name&gt;</code></pre>
<p><b>Ba điểm đủ dùng:</b> <b>Flexible Server</b> đã thay hẳn Single Server (Single Server đã hết vòng đời) · HA của Flexible Server là <b>zone-redundant</b> hoặc <b>same-zone standby</b> · di chuyển schema từ Oracle/khác dùng <b>Azure Database Migration Service</b> hoặc công cụ chuyển đổi schema, và đây chính là nội dung lab chính thức #18.</p>
</section>

<section id="m2f">
<h3>2.5 Lab · Chiến lược di chuyển — bài tập ra quyết định, không cần Azure<a class="anch" href="#m2f">#</a></h3>
<p>Đây là mảng đề hỏi nhiều mà lab thì tốn kém, nên làm dạng bài tập giấy. Đọc <a href="/dp-300/documents#s15">mục 15</a> và <a href="/dp-300/documents#s16-2">16-2</a> rồi tự trả lời, đóng tài liệu:</p>
<table>
<thead><tr><th>Tình huống</th><th>Chọn gì</th></tr></thead>
<tbody>
<tr><td>Database 2 TB, cửa sổ dừng tối đa <b>2 giờ</b>, đích là Managed Instance</td><td><b>Online</b> migration bằng Azure Database Migration Service — full backup + log backup liên tục, cutover cuối cùng</td></tr>
<tr><td>Database 50 GB, được dừng cả cuối tuần</td><td><b>Offline</b> — đơn giản hơn, ít rủi ro hơn, không cần giữ chuỗi log</td></tr>
<tr><td>Cần biết trước có tính năng nào không tương thích</td><td>Chạy <b>assessment</b> TRƯỚC mọi thứ khác</td></tr>
<tr><td>Chuyển giữa hai Azure SQL Database</td><td><b>Database copy</b> hoặc export/import <b>bacpac</b></td></tr>
<tr><td>Chuyển một database giữa hai Managed Instance</td><td><b>MI database copy / move</b> (gạch đầu dòng mới trong đề)</td></tr>
<tr><td>Migration đang chạy thì log của nguồn phình to</td><td>Chuỗi log backup đang bị giữ cho migration — theo dõi <code>log_reuse_wait_desc</code>, cấp thêm chỗ, đừng phá chuỗi</td></tr>
</tbody></table>
<div class="warn"><b>Cập nhật quan trọng:</b> <b>Data Migration Assistant (DMA) đã bị khai tử ngày 16/07/2025.</b> Bước "assess" nay làm bằng <b>Azure Migrate</b> hoặc <b>SQL Server migration in Azure Arc</b>. Thứ tự các bước thì không đổi — tài liệu và đề cũ vẫn viết DMA, biết để không bị rối.</div>
</section>

<h2 class="dom">Mô-đun 3 — Triển khai môi trường an toàn</h2>

<section id="m3z">
<h3>3.0 Bài học — domain nặng nhất, và nặng nhất ở đâu<a class="anch" href="#m3z">#</a></h3>
<p>Domain 2 chiếm <b>20–25%</b> và chia ba nhóm: <b>xác thực &amp; phân quyền</b> · <b>mã hoá at rest và in transit</b> · <b>kiểm soát tuân thủ cho dữ liệu nhạy cảm</b>. Cái bẫy lớn nhất của domain này là <b>nhầm công cụ với mục đích</b>:</p>
<pre><code>Muốn gì?                                    Dùng cái nào       KHÔNG dùng cái nào
──────────────────────────────────────────────────────────────────────────────
Giấu dữ liệu khỏi mắt người xem vô tình      DDM                (đừng coi là bảo mật)
Không cho DBA/sysadmin thấy plaintext        Always Encrypted   TDE (DBA vẫn đọc được)
Bảo vệ file .mdf/.bak khi bị lấy trộm        TDE                Always Encrypted
Mỗi user chỉ thấy dòng của mình              RLS                view + WHERE (né được)
Chứng minh dữ liệu chưa bị sửa lén           Ledger             audit (audit ghi được nhưng
                                                                 sysadmin xoá được log)
Biết ai đã làm gì                            Audit              CDC / Change Tracking
Đồng bộ thay đổi sang hệ khác                CDC                audit
Biết dòng nào đã đổi (không cần giá trị cũ)  Change Tracking    CDC (nặng hơn nhiều)</code></pre>
<p><b>Đọc kèm:</b> <a href="/dp-300/documents#s23">Authentication</a> · <a href="/dp-300/documents#s29-3">Permissions</a> · <a href="/dp-300/documents#s30">TDE</a> · <a href="/dp-300/documents#s33">Always Encrypted</a> · <a href="/dp-300/documents#s34">DDM</a> · <a href="/dp-300/documents#s42">RLS</a> · <a href="/dp-300/documents#s41">Ledger</a> · <a href="/dp-300/documents#s37">Auditing</a></p>
</section>

<section id="m3a">
<h3>3.1 Lab · Firewall: server-level vs database-level (lab chính thức #4)<a class="anch" href="#m3a">#</a></h3>
<p><b>Mục tiêu:</b> hiểu vì sao có <b>hai</b> tầng firewall và tầng nào được xét trước.</p>
<pre><code># --- Server-level: quản bằng ARM / CLI / portal, áp cho MỌI database trên server
az sql server firewall-rule create -g $RG -s $SRV \\
  -n AllowMyIp --start-ip-address $MYIP --end-ip-address $MYIP

az sql server firewall-rule list -g $RG -s $SRV -o table</code></pre>
<pre><code>-- --- Database-level: quản bằng T-SQL, chạy TRONG database đó, chỉ áp cho nó
EXEC sp_set_database_firewall_rule
     @name = 'AllowBranchOffice',
     @start_ip_address = '203.0.113.10',
     @end_ip_address   = '203.0.113.20';

SELECT * FROM sys.database_firewall_rules;
EXEC sp_delete_database_firewall_rule @name = 'AllowBranchOffice';</code></pre>
<p><b>Kiểm chứng:</b> xoá rule server-level của IP mình rồi thử kết nối → lỗi <code>40615</code> kèm đúng địa chỉ IP đang bị chặn. Thêm lại rule <b>database-level</b> cho IP đó rồi kết nối <b>thẳng vào database</b> (chỉ định <code>-d appdb</code>) → vào được.</p>
<p><b>Bẫy trong đề:</b></p>
<ul>
<li>Thứ tự xét: <b>server-level trước</b>. Khớp rule server-level thì vào thẳng, không xét tiếp database-level. Không khớp thì mới xét database-level của đúng database mà connection string chỉ định.</li>
<li>Kết nối bằng database-level rule <b>bắt buộc</b> phải nêu tên database trong connection string — không thì không có database nào để xét rule.</li>
<li>Database-level rule <b>chỉ có ở Azure SQL Database</b>, không có ở Managed Instance (MI nằm trong VNet, dùng NSG).</li>
<li>Rule <code>0.0.0.0–0.0.0.0</code> = "Allow Azure services", không phải "mở cho tất cả".</li>
<li>Bật <b>Private Link</b> rồi thì nên đặt <code>--public-network-access Disabled</code>; lúc đó mọi firewall rule đều vô nghĩa vì cổng công khai đã đóng.</li>
</ul>
</section>

<section id="m3b">
<h3>3.2 Lab · Microsoft Entra ID authentication (lab chính thức #3)<a class="anch" href="#m3b">#</a></h3>
<pre><code># 1. Đặt Entra admin cho logical server
az sql server ad-admin create -g $RG -s $SRV \\
  --display-name "DP300 Admin" --object-id $(az ad signed-in-user show --query id -o tsv)

# 2. (Khuyến nghị) Bật managed identity cho server — cần cho TDE với CMK
az sql server update -g $RG -n $SRV --identity-type SystemAssigned

# 3. Kết nối bằng token Entra thay vì mật khẩu SQL
sqlcmd -S $SRV.database.windows.net -d appdb -G -Q "SELECT SUSER_SNAME(), USER_NAME()"</code></pre>
<pre><code>-- 4. Tạo user từ danh tính Entra — chạy TRONG database, bằng tài khoản Entra admin
CREATE USER [ai.nguyen@contoso.com]         FROM EXTERNAL PROVIDER;   -- user
CREATE USER [grp-dba-readers]               FROM EXTERNAL PROVIDER;   -- nhóm  ← nên dùng
CREATE USER [mi-webapp-prod]                FROM EXTERNAL PROVIDER;   -- managed identity

ALTER ROLE db_datareader ADD MEMBER [grp-dba-readers];

-- Kiểm chứng: type_desc = EXTERNAL_USER / EXTERNAL_GROUP, và sid dài hơn user SQL thường
SELECT name, type_desc, authentication_type_desc, sid
FROM   sys.database_principals WHERE type IN ('E','X');</code></pre>
<p><b>Bẫy trong đề:</b></p>
<ul>
<li>Mỗi logical server chỉ có <b>một</b> Entra admin (một user hoặc một nhóm). Muốn nhiều người quản trị → trỏ vào một <b>nhóm</b>.</li>
<li><code>CREATE USER ... FROM EXTERNAL PROVIDER</code> phải chạy bằng <b>tài khoản Entra</b>, không chạy được bằng login SQL <code>sa</code>-kiểu.</li>
<li>Managed identity của App Service / VM cũng tạo user y hệt — đây là cách <b>bỏ hẳn mật khẩu khỏi connection string</b>, đáp án đúng của mọi câu "loại bỏ credential khỏi code".</li>
<li>Trên <b>SQL Server on VM</b> và <b>Managed Instance</b>, Entra authentication cấu hình khác: MI dùng chính Entra admin của instance; SQL Server 2022 trên VM hỗ trợ Entra qua Azure Arc / extension.</li>
<li>Xác thực <b>contained database user</b> (user không có login) là cách để database <b>di động</b> giữa các server — hay hỏi trong ngữ cảnh failover group.</li>
</ul>
</section>

<section id="m3c">
<h3>3.3 Lab · Defender for SQL, data classification, vulnerability assessment (lab chính thức #5)<a class="anch" href="#m3c">#</a></h3>
<pre><code># Bật Defender for SQL ở cấp logical server
az security atp storage update ... # (tuỳ phiên bản CLI; đường chắc chắn hơn là portal)
# Portal: SQL server -> Security -> Microsoft Defender for Cloud -> Enable

# Bật auditing ghi ra Log Analytics (điều kiện để nhiều báo cáo hoạt động)
az sql server audit-policy update -g $RG -n $SRV --state Enabled \\
  --log-analytics-target-state Enabled \\
  --log-analytics-workspace-resource-id &lt;workspace-id&gt;</code></pre>
<pre><code>-- Data classification làm được bằng T-SQL, không cần portal
ADD SENSITIVITY CLASSIFICATION TO
    dbo.Customers.Email, dbo.Customers.Phone
WITH (LABEL = 'Confidential - GDPR', INFORMATION_TYPE = 'Contact Info', RANK = HIGH);

SELECT object_name(major_id) AS tbl, col_name(major_id, minor_id) AS col,
       information_type, label, rank_desc
FROM   sys.sensitivity_classifications;

DROP SENSITIVITY CLASSIFICATION FROM dbo.Customers.Email;</code></pre>
<p><b>Nhìn cái gì:</b> sau khi bật Defender, mở <b>SQL server → Security → Defender for Cloud</b>: có <b>Vulnerability assessment</b> (quét theo baseline, mỗi phát hiện có nút "approve as baseline") và <b>Advanced threat protection</b> (cảnh báo SQL injection, đăng nhập từ vị trí bất thường, brute force). Data Discovery &amp; Classification tự quét và <b>gợi ý</b> nhãn — bấm nhận gợi ý rồi xem báo cáo.</p>
<p><b>Bẫy trong đề:</b></p>
<ul>
<li>Classification là <b>metadata</b>, tự nó <b>không</b> chặn ai cả. Nó chỉ có tác dụng thật khi đi kèm <b>auditing</b> (audit log ghi kèm nhãn nhạy cảm) và các báo cáo tuân thủ.</li>
<li>Vulnerability assessment cần một <b>storage account</b> để lưu kết quả quét (trừ khi dùng cấu hình express).</li>
<li>Defender for SQL là <b>tính năng tính tiền theo server</b>, bật cho cả logical server chứ không cho từng database.</li>
<li>Thứ tự đúng khi được hỏi "đáp ứng yêu cầu tuân thủ về dữ liệu nhạy cảm": <b>classify → audit → giới hạn quyền → mask/mã hoá</b>, không phải ngược lại.</li>
</ul>
</section>

<section id="m3d">
<h3>3.4 Lab · Bảo mật chạy offline — quyền, DDM, RLS, TDE, ledger, audit<a class="anch" href="#m3d">#</a></h3>
<p>Một script phủ sáu mảng lớn của domain 2, chạy 40 giây, không cần Azure.</p>
<pre><code>./sql -f labs/03-security.sql
# dọn dẹp khi muốn chạy lại từ đầu:
./sql -f labs/03-security-cleanup.sql</code></pre>
<p><b>Nhìn cái gì</b> — đây là những khoảnh khắc "à ra thế" mà đọc tài liệu không có:</p>
<ul>
<li><b>DENY cấp cột thắng GRANT cấp bảng.</b> User có <code>SELECT</code> trên cả <code>hr.Employees</code> nhưng chạm vào cột <code>Salary</code> là lỗi ngay.</li>
<li><b>DDM bị phá ngay trước mắt.</b> User thấy <code>Salary = 1841.79</code> (giá trị ngẫu nhiên do mask sinh ra), nhưng chạy <code>WHERE Salary &gt; 5000</code> vẫn <b>lọc trên giá trị thật</b> và lộ đúng người lương cao. Đây là lý do DDM không phải biện pháp bảo mật.</li>
<li><b>GRANT UNMASK hạt mịn</b> (SQL Server 2022 / Azure SQL): mở mask cho riêng cột <code>Email</code>, <code>Salary</code> vẫn bị che.</li>
<li><b>RLS</b>: cùng một câu <code>SELECT COUNT(*) FROM sales.Orders</code> — user thường thấy <b>25 000</b> dòng, dbo thấy <b>200 000</b>.</li>
<li><b>TDE</b>: <code>encryption_state</code> đi từ 2 (đang mã hoá) lên 3 (xong), kèm cảnh báo <i>"the certificate ... has not been backed up"</i> — chính là bước hay bị quên.</li>
<li><b>Mã hoá cấp cột</b>: chưa <code>OPEN SYMMETRIC KEY</code> thì <code>DECRYPTBYKEY</code> trả <b>NULL</b>, không báo lỗi. Bẫy chết người khi debug.</li>
<li><b>Ledger</b>: một câu <code>UPDATE</code> hiện ra trong ledger view thành <b>một DELETE + một INSERT</b> cùng transaction id — dấu vết không xoá được.</li>
</ul>
<p><b>Bẫy trong đề, gom theo mảng:</b></p>
<table>
<thead><tr><th>Mảng</th><th>Điều dễ trả lời sai</th></tr></thead>
<tbody>
<tr><td>Quyền</td><td><b>DENY luôn thắng GRANT</b>, trừ đúng một ngoại lệ: thành viên <code>db_owner</code>/sysadmin bỏ qua kiểm tra quyền. Quyền qua <b>ownership chaining</b> thì không cần GRANT trên bảng nền</td></tr>
<tr><td>TDE</td><td>TDE mã hoá <b>file dữ liệu, log và backup</b>, KHÔNG mã hoá dữ liệu trên đường truyền và KHÔNG giấu dữ liệu khỏi ai đã đăng nhập được. Restore sang server khác <b>bắt buộc</b> có certificate + private key</td></tr>
<tr><td>TDE với CMK</td><td>Chuỗi 5 bước: <b>Key Vault (bật soft delete + purge protection) → RSA key → managed identity trên logical server → cấp get/wrapKey/unwrapKey → đặt TDE protector</b>. Thiếu <code>unwrapKey</code> → database chuyển sang <b>Inaccessible</b></td></tr>
<tr><td>Always Encrypted</td><td>Mã hoá <b>ở phía client</b>; DBA không bao giờ thấy plaintext. <b>DETERMINISTIC</b> cho phép =, JOIN, index nhưng lộ tần suất; <b>RANDOMIZED</b> an toàn hơn nhưng không so sánh được. <b>VBS enclave</b> mở khoá được cả BETWEEN/LIKE và mã hoá tại chỗ</td></tr>
<tr><td>RLS</td><td>Function <b>bắt buộc</b> <code>WITH SCHEMABINDING</code> và phải là inline TVF. User cuối <b>không</b> cần quyền gì trên function. <b>FILTER</b> giấu âm thầm, <b>BLOCK</b> ném lỗi</td></tr>
<tr><td>CDC</td><td>Azure SQL Database cần tối thiểu <b>1 vCore hoặc 100 DTU (S3)</b>. Bật ở cấp database trước, cấp bảng sau. <code>__$operation</code>: 1 delete · 2 insert · 3 giá trị trước update · 4 sau update</td></tr>
<tr><td>Audit</td><td><code>ON_FAILURE = SHUTDOWN</code> <b>tắt cả instance</b> khi không ghi được audit. Azure SQL Database không có server audit dạng T-SQL — dùng auditing của logical server ghi ra Storage / Log Analytics / Event Hubs</td></tr>
</tbody></table>
</section>

<h2 class="dom">Mô-đun 4 — Giám sát và tối ưu hoá tài nguyên</h2>

<section id="m4z">
<h3>4.0 Bài học — baseline trước, kết luận sau<a class="anch" href="#m4z">#</a></h3>
<p>Sai lầm chung của người trượt domain 3: nhảy thẳng vào "sửa" mà chưa có baseline, nên không chứng minh được là đã tốt lên. Trình tự đề luôn thưởng điểm:</p>
<pre><code>1. Baseline      -> biết bình thường trông thế nào
2. Phát hiện     -> chỉ số nào lệch khỏi baseline
3. Khoanh vùng   -> CPU? I/O? memory? lock? tempdb?  ← wait stats trả lời câu này
4. Tìm thủ phạm  -> query nào / index nào / cấu hình nào
5. Sửa MỘT thứ
6. Đo lại        -> so với baseline. Không đo lại thì chưa xong</code></pre>
<p><b>Công cụ nào cho nền tảng nào</b> — bảng này đề hỏi liên tục:</p>
<table>
<thead><tr><th>Muốn</th><th>SQL Server / VM</th><th>Azure SQL MI</th><th>Azure SQL Database</th></tr></thead>
<tbody>
<tr><td>Chỉ số tài nguyên</td><td>PerfMon, DMV OS</td><td>DMV + Azure Monitor</td><td><code>sys.dm_db_resource_stats</code>, <code>sys.resource_stats</code>, Azure Monitor</td></tr>
<tr><td>Giám sát nhiều instance</td><td>Database watcher / SQL Insights</td><td>Database watcher</td><td>Database watcher</td></tr>
<tr><td>Query chậm</td><td>Query Store, DMV</td><td>Query Store</td><td>Query Store + <b>Query Performance Insight</b></td></tr>
<tr><td>Gợi ý tự động</td><td>Automatic tuning (chỉ force plan)</td><td>chỉ force plan</td><td>force plan + <b>create/drop index</b> + <b>Intelligent Insights</b></td></tr>
<tr><td>Cô lập tải</td><td>Resource Governor</td><td>Resource Governor</td><td><b>KHÔNG có</b> — dùng elastic pool / tách database</td></tr>
<tr><td>Sự kiện chi tiết</td><td>Extended Events (ghi file)</td><td>XEvents</td><td>XEvents (ghi ra <b>ring buffer</b> hoặc <b>blob</b>, không ghi file cục bộ)</td></tr>
</tbody></table>
<p><b>Đọc kèm:</b> <a href="/dp-300/documents#s44">Baseline</a> · <a href="/dp-300/documents#s60">Wait stats</a> · <a href="/dp-300/documents#s48a">Database watcher</a> · <a href="/dp-300/documents#s52">Blocking &amp; XEvents</a> · <a href="/dp-300/documents#s58">Index maintenance</a> · <a href="/dp-300/documents#s63">Resource Governor</a></p>
</section>

<section id="m4a">
<h3>4.1 Lab · Wait stats, CPU, top query — chạy offline (lab chính thức #6)<a class="anch" href="#m4a">#</a></h3>
<pre><code>./sql -f labs/04-monitor.sql</code></pre>
<p><b>Nhìn cái gì:</b> bảng wait statistics <b>đã lọc bỏ các wait vô hại</b> (danh sách lọc trong script đáng chép ra dùng lại), cột <code>signal_s</code> so với <code>resource_s</code>, và <code>runnable_tasks_count</code> của từng scheduler.</p>
<p><b>Bảng đọc wait type — thuộc bảng này là ăn điểm nguyên một nhóm câu hỏi:</b></p>
<table>
<thead><tr><th>Wait type</th><th>Nghĩa là</th><th>Làm gì</th></tr></thead>
<tbody>
<tr><td><code>CXPACKET</code> / <code>CXCONSUMER</code></td><td>Song song. CXPACKET cao mà CXCONSUMER thấp mới là vấn đề thật (lệch phân phối)</td><td>Chỉnh MAXDOP và cost threshold, xem lại thống kê</td></tr>
<tr><td><code>PAGEIOLATCH_*</code></td><td>Chờ đọc <b>từ đĩa</b> vào buffer pool</td><td>Thiếu RAM, storage chậm, hoặc thiếu index gây quét thừa</td></tr>
<tr><td><code>WRITELOG</code></td><td>Chờ ghi transaction log</td><td>Log ở ổ chậm; trên Azure SQL là đụng trần <b>log rate</b> của tier</td></tr>
<tr><td><code>LCK_M_*</code></td><td>Blocking</td><td>Rút ngắn transaction, thêm index, cân nhắc RCSI</td></tr>
<tr><td><code>PAGELATCH_*</code> ở tempdb</td><td>Tranh chấp allocation page (GAM/SGAM/PFS)</td><td>Thêm data file cho tempdb, bằng số core (tối đa 8)</td></tr>
<tr><td><code>SOS_SCHEDULER_YIELD</code></td><td>Áp lực CPU thật — task hết lượt chứ không phải đang chờ</td><td>Giảm tải CPU hoặc tăng vCore</td></tr>
<tr><td><code>RESOURCE_SEMAPHORE</code></td><td>Query xin memory grant quá lớn, phải xếp hàng</td><td>Sửa ước lượng (thống kê), giảm sort/hash, memory grant feedback</td></tr>
<tr><td><code>THREADPOOL</code></td><td>Cạn worker thread</td><td>Gần như luôn là hệ quả của blocking dây chuyền — đi tìm gốc, đừng tăng max worker</td></tr>
</tbody></table>
<div class="tip"><code>signal_s</code> lớn so với <code>resource_s</code> nghĩa là task <b>đã được đánh thức</b> mà vẫn phải chờ tới lượt CPU → CPU quá tải. Đây là chi tiết đọc wait stats mà rất ít người để ý, và đề có hỏi.</div>
<p><b>Trên Azure SQL Database</b> thì đổi sang:</p>
<pre><code>SELECT TOP 30 end_time, avg_cpu_percent, avg_data_io_percent,
       avg_log_write_percent, max_worker_percent, max_session_percent
FROM   sys.dm_db_resource_stats ORDER BY end_time DESC;   -- 15 giây/mẫu, giữ 1 giờ

SELECT * FROM sys.dm_user_db_resource_governance;          -- trần THẬT của tier hiện tại</code></pre>
<p>Cái nào chạm 100% trước thì đó là trần đang bó. Đây chính là cách trả lời câu hỏi "database chậm, nên scale lên tier nào".</p>
</section>

<section id="m4b">
<h3>4.2 Lab · Dựng blocking bằng hai phiên (lab chính thức #8)<a class="anch" href="#m4b">#</a></h3>
<p><b>Mục tiêu:</b> tự tay tạo ra blocking rồi truy ra thủ phạm — thao tác mà DBA làm hằng tuần và đề hỏi rất cụ thể.</p>
<p>Mở <b>ba</b> terminal:</p>
<pre><code># Terminal 1 — kẻ chặn
cd labs/dp-300 && ./sql
USE DP300Lab;
BEGIN TRAN;
UPDATE sales.Products SET UnitPrice = UnitPrice + 1 WHERE ProductId = 1;
GO
-- KHÔNG commit, để nguyên</code></pre>
<pre><code># Terminal 2 — kẻ bị chặn (sẽ treo)
cd labs/dp-300 && ./sql
USE DP300Lab;
SELECT * FROM sales.Products WHERE ProductId = 1;
GO</code></pre>
<pre><code># Terminal 3 — điều tra
./sql "SELECT r.session_id, r.blocking_session_id, r.wait_type, r.wait_time, r.wait_resource
       FROM sys.dm_exec_requests r WHERE r.blocking_session_id &lt;&gt; 0"

# Xem câu SQL của cả hai bên
./sql "SELECT s.session_id, s.login_name, s.program_name, t.text
       FROM sys.dm_exec_sessions s
       CROSS APPLY sys.dm_exec_sql_text(
            (SELECT most_recent_sql_handle FROM sys.dm_exec_connections
             WHERE session_id = s.session_id)) t
       WHERE s.session_id &gt; 50"

# Giải cứu
./sql "KILL &lt;spid-của-kẻ-chặn&gt;"</code></pre>
<p><b>Bốn cách xử lý blocking, theo đúng thứ tự nên thử</b> — đề hay cho bốn đáp án và hỏi cái nào <i>tốt nhất</i>:</p>
<ol>
<li><b>Rút ngắn transaction.</b> Nguyên nhân gốc của khoảng 90% ca thật.</li>
<li><b>Thêm index</b> để reader và writer không đụng nhau trên cùng những trang.</li>
<li><b>Bật RCSI</b> (<code>READ_COMMITTED_SNAPSHOT</code>) — reader không chặn writer nữa; đánh đổi là version store trong tempdb.</li>
<li><b>NOLOCK / READ UNCOMMITTED</b> — chấp nhận dirty read, <b>missing row</b> và <b>duplicate row</b>. Đây là đáp án <b>sai</b> trong hầu hết đề, dù rất nhiều người chọn.</li>
</ol>
<div class="warn"><b>Azure SQL Database bật RCSI SẴN</b>, SQL Server thì không. Đây là khác biệt hành vi kinh điển: cùng một ứng dụng chạy trên hai nơi cho ra hai kiểu blocking khác nhau. Còn <b>deadlock</b> khác blocking: deadlock được SQL Server tự phát hiện và giết một bên (deadlock victim, chọn theo <code>DEADLOCK_PRIORITY</code> rồi tới chi phí rollback); bắt deadlock graph bằng Extended Events session <code>system_health</code> có sẵn.</div>
</section>

<section id="m4c">
<h3>4.3 Lab · Phân mảnh index (lab chính thức #7)<a class="anch" href="#m4c">#</a></h3>
<p>Nằm trong <code>04-monitor.sql</code> phần D. Script cố tình tạo phân mảnh (~49% trên <code>IX_Orders_ShipCountry</code>) rồi đo, rồi sửa.</p>
<table>
<thead><tr><th></th><th>REORGANIZE</th><th>REBUILD</th></tr></thead>
<tbody>
<tr><th>Khoá bảng</th><td>Không, luôn online</td><td>Có, trừ khi <code>WITH (ONLINE = ON)</code></td></tr>
<tr><th>Dừng giữa chừng</th><td>Được, giữ phần đã làm</td><td>Chỉ khi <code>RESUMABLE = ON</code></td></tr>
<tr><th>Cập nhật statistics</th><td><b>Không</b></td><td><b>Có</b>, kèm FULLSCAN</td></tr>
<tr><th>Dùng log</th><td>Ít</td><td>Nhiều</td></tr>
<tr><th>Ngưỡng khuyến nghị</th><td>5–30% phân mảnh</td><td>&gt; 30%</td></tr>
</tbody></table>
<p><b>Bẫy trong đề:</b></p>
<ul>
<li>Index dưới <b>~1000 page</b> thì đừng đụng vào — con số phân mảnh vô nghĩa ở cỡ đó. Script đã cài sẵn điều kiện này.</li>
<li>Chế độ quét của <code>sys.dm_db_index_physical_stats</code>: <b>LIMITED</b> (mặc định, nhanh nhất) · <b>SAMPLED</b> (1%) · <b>DETAILED</b> (đọc mọi page, rất nặng).</li>
<li><b>Sai lầm kinh điển của maintenance plan tự viết:</b> REBUILD xong lại chạy <code>UPDATE STATISTICS ... WITH SAMPLE</code> → thống kê vừa FULLSCAN bị thay bằng bản lấy mẫu, tệ hơn lúc chưa làm gì.</li>
<li><code>ONLINE = ON</code> cần Enterprise / Azure SQL DB / MI. Standard không có.</li>
<li>Trên <b>Azure SQL Database</b>, DBCC CHECKDB do Microsoft chạy — bạn <b>không</b> cần lên lịch; nhưng bảo trì index và statistics thì <b>vẫn là việc của bạn</b>.</li>
</ul>
</section>

<section id="m4d">
<h3>4.4 Lab · MAXDOP, database scoped configuration, Resource Governor<a class="anch" href="#m4d">#</a></h3>
<p>Nằm trong <code>04-monitor.sql</code> phần E. Chạy xong nhớ <code>./sql -f labs/04-monitor-cleanup.sql</code> để trả cấu hình về mặc định.</p>
<p><b>MAXDOP — khuyến nghị chính thức của Microsoft:</b></p>
<pre><code>≤ 8 logical core          -> MAXDOP = số core (tối đa 8)
> 8 core, một NUMA node   -> MAXDOP = 8
nhiều NUMA node           -> MAXDOP = số core mỗi NUMA node, tối đa 16
cost threshold for parallelism: mặc định 5 là QUÁ THẤP -> 25–50</code></pre>
<div class="warn"><b>Azure SQL Database không có <code>sp_configure</code>.</b> Đặt MAXDOP bằng <code>ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 4;</code>. Đây là một trong những khác biệt bị hỏi nhiều nhất của domain 3.</div>
<p><b>Resource Governor</b> — chuỗi bắt buộc: <b>pool → workload group → classifier function (nằm ở master) → <code>ALTER RESOURCE GOVERNOR RECONFIGURE</code></b>.</p>
<ul>
<li><code>MAX_CPU_PERCENT</code> là trần <b>mềm</b> (được vượt khi máy rảnh); <code>CAP_CPU_PERCENT</code> là trần <b>cứng</b>.</li>
<li>Classifier chỉ chạy <b>lúc đăng nhập</b> — đổi phân loại giữa phiên không có tác dụng.</li>
<li>Cần Enterprise/Developer. <b>Azure SQL Database không có Resource Governor</b> cho người dùng; MI thì có.</li>
</ul>
<p><b>Autogrowth</b> — hai thứ script in ra đáng nhìn kỹ: <code>is_percent_growth</code> phải là 0 (grow theo phần trăm là anti-pattern: file càng lớn mỗi lần grow càng treo lâu), và <b>Instant File Initialization</b> chỉ áp cho <b>data file</b>, log file thì <b>không bao giờ</b> — nên log grow luôn đắt, hãy cấp đủ từ đầu.</p>
</section>

<section id="m4e">
<h3>4.5 Lab · Automatic tuning và Intelligent Insights trên Azure SQL Database<a class="anch" href="#m4e">#</a></h3>
<p>Làm trên database free offer, không tốn tiền.</p>
<pre><code># Bật automatic tuning ở cấp database
az sql db update -g $RG -s $SRV -n freedb --auto-pause-delay 60   # cho serverless
# Portal: SQL database -> Intelligent Performance -> Automatic tuning
#   FORCE_LAST_GOOD_PLAN · CREATE_INDEX · DROP_INDEX  (mỗi cái: ON / OFF / Inherit)

# Bật gửi Intelligent Insights sang Log Analytics
az monitor diagnostic-settings create -n diag-freedb \\
  --resource $(az sql db show -g $RG -s $SRV -n freedb --query id -o tsv) \\
  --workspace &lt;log-analytics-id&gt; \\
  --logs '[{"category":"SQLInsights","enabled":true},
           {"category":"QueryStoreRuntimeStatistics","enabled":true},
           {"category":"AutomaticTuning","enabled":true},
           {"category":"Errors","enabled":true},
           {"category":"Blocks","enabled":true},
           {"category":"Deadlocks","enabled":true}]' \\
  --metrics '[{"category":"Basic","enabled":true}]'</code></pre>
<pre><code>-- Kiểm chứng bằng T-SQL, chạy trong database
SELECT name, desired_state_desc, actual_state_desc, reason_desc
FROM   sys.database_automatic_tuning_options;

SELECT name, type, reason, state, score,
       JSON_VALUE(details, '$.implementationDetails.script') AS script
FROM   sys.dm_db_tuning_recommendations;</code></pre>
<p><b>Bảng khác biệt phải nhớ:</b></p>
<table>
<thead><tr><th></th><th>SQL Server (2017+)</th><th>Azure SQL MI</th><th>Azure SQL Database</th></tr></thead>
<tbody>
<tr><td>FORCE_LAST_GOOD_PLAN</td><td>✅</td><td>✅</td><td>✅</td></tr>
<tr><td>CREATE_INDEX</td><td>❌</td><td>❌</td><td>✅</td></tr>
<tr><td>DROP_INDEX</td><td>❌</td><td>❌</td><td>✅</td></tr>
<tr><td>Intelligent Insights</td><td>❌</td><td>✅</td><td>✅</td></tr>
<tr><td>Query Performance Insight (portal)</td><td>❌</td><td>❌</td><td>✅</td></tr>
</tbody></table>
<p><b>Intelligent Insights</b> không phải "biểu đồ đẹp" — nó sinh ra <b>chẩn đoán bằng chữ</b> (root cause analysis) dưới dạng log <code>SQLInsights</code>: workload increase, memory pressure, locking, MAXDOP, missing index, new query, pricing tier limit… Đề hay hỏi "dùng gì để tự động tìm nguyên nhân gốc của sự cố hiệu năng trên Azure SQL Database" → đáp án là Intelligent Insights, <b>không</b> phải Query Store (Query Store là dữ liệu thô).</p>
</section>

<h2 class="dom">Mô-đun 5 — Tối ưu hoá query performance</h2>

<section id="m5z">
<h3>5.0 Bài học — vì sao mô-đun này đáng giá nhất<a class="anch" href="#m5z">#</a></h3>
<p>Nâng phần cứng cho ra chừng 10–20%. Sửa một plan tồi cho ra 100–200% hoặc hơn. Đề biết điều đó nên hỏi rất kỹ về <b>đọc plan</b> và <b>Query Store</b>.</p>
<p><b>Danh sách kiểm tra khi cầm một query chậm</b> — theo đúng thứ tự này, mỗi bước loại được một nhóm nguyên nhân:</p>
<pre><code>1. Bật STATISTICS IO, TIME       -> ghi lại logical reads (thước đo ổn định nhất)
2. So CPU time với elapsed time  -> nghẽn CPU hay đang CHỜ?
3. Xem actual plan               -> có warning nào? (implicit conversion, spill,
                                     no join predicate, excessive grant)
4. So estimated rows vs actual   -> lệch lớn = thống kê sai hoặc parameter sniffing
5. Tìm toán tử đắt nhất          -> scan? key lookup? sort? hash spill to tempdb?
6. Query có SARGable không       -> hàm quanh cột? LIKE '%x'? kiểu dữ liệu lệch?
7. Index có phù hợp không        -> thiếu? thừa? sai thứ tự cột? thiếu INCLUDE?
8. Query Store                   -> query này từng có plan tốt hơn không?</code></pre>
<p><b>Đọc kèm:</b> <a href="/dp-300/documents#s57">Execution plan</a> · <a href="/dp-300/documents#s50">Query Store</a> · <a href="/dp-300/documents#s54">Index</a> · <a href="/dp-300/documents#s59">Statistics</a> · <a href="/dp-300/documents#s56">Hints</a> · <a href="/dp-300/documents#s66">IQP</a></p>
</section>

<section id="m5a">
<h3>5.1 Lab · Bốn lỗi giết index — chạy offline (lab chính thức #9, #10)<a class="anch" href="#m5a">#</a></h3>
<pre><code>./sql -f labs/05-query-tuning.sql</code></pre>
<p><b>Nên chạy trong SSMS / Azure Data Studio / CloudBeaver với "Include Actual Execution Plan" bật</b> — nửa giá trị nằm ở cái plan. Kết quả trên máy tham chiếu:</p>
<table>
<thead><tr><th>Lỗi</th><th>Cách viết xấu</th><th>Cách viết tốt</th><th>Logical reads</th></tr></thead>
<tbody>
<tr><td>Non-SARGable</td><td><code>WHERE YEAR(OrderDate) = 2026</code></td><td><code>WHERE OrderDate &gt;= '2026-01-01' AND OrderDate &lt; '2027-01-01'</code></td><td><b>324 → 50</b></td></tr>
<tr><td>Implicit conversion</td><td><code>WHERE Status = N'Shipped'</code> (cột VARCHAR)</td><td><code>WHERE Status = 'Shipped'</code></td><td><b>524 → 134</b></td></tr>
<tr><td>Key lookup</td><td>index chỉ có cột khoá</td><td>thêm <code>INCLUDE (Quantity, UnitPrice)</code></td><td><b>2 057 → 6</b></td></tr>
<tr><td>Thiếu index</td><td>không có index trên cột lọc</td><td>đọc gợi ý từ missing index DMV rồi <b>tự cân nhắc</b></td><td>—</td></tr>
</tbody></table>
<p><b>Bẫy trong đề:</b></p>
<ul>
<li>Hàm đặt ở <b>vế hằng số</b> thì vô hại; đặt quanh <b>cột</b> mới giết index. Cùng họ: <code>LEFT(col,3)='ABC'</code>, <code>ISNULL(col,0)=0</code>, <code>col+0=5</code>, <code>col LIKE '%abc'</code>.</li>
<li>Quy tắc precedence kiểu dữ liệu: <b>NVARCHAR cao hơn VARCHAR</b>, nên khi cột VARCHAR gặp hằng <code>N'...'</code> thì <b>cột</b> bị convert → mất seek. Ngược lại (cột NVARCHAR, hằng <code>'...'</code>) thì hằng được nâng kiểu, index vẫn dùng được. Đề xoáy đúng vào chiều này.</li>
<li><b>Missing index DMV là gợi ý, không phải mệnh lệnh.</b> Nó không xét index đã có, không gộp gợi ý trùng, không bao giờ đề xuất clustered/columnstore/filtered index, thứ tự cột trong gợi ý không tối ưu, và reset mỗi lần restart. Tạo mù theo nó là cách nhanh nhất để có 15 index thừa trên một bảng.</li>
</ul>
</section>

<section id="m5b">
<h3>5.2 Lab · Statistics<a class="anch" href="#m5b">#</a></h3>
<p>Phần C của <code>05-query-tuning.sql</code> in ra <code>sys.dm_db_stats_properties</code> cho mọi thống kê: lần cập nhật cuối, số dòng đã lấy mẫu, và <b>modification_counter</b> — số thay đổi tích luỹ kể từ lần cập nhật cuối.</p>
<ul>
<li>Ngưỡng auto-update từ SQL Server 2016 / compat 130: <b>động</b>, xấp xỉ <code>SQRT(1000 × số dòng)</code>. Trước đó là 20% + 500 dòng (trace flag 2371 để bật ngưỡng động sớm).</li>
<li><code>AUTO_UPDATE_STATISTICS_ASYNC = ON</code>: query hiện tại chạy với <b>thống kê cũ</b>, bản cập nhật chạy nền. Bỏ được đợt treo bất chợt, đổi lại một lần chạy với ước lượng sai.</li>
<li><code>DBCC SHOW_STATISTICS (... ) WITH HISTOGRAM</code> — nhìn tận mắt histogram để hiểu vì sao optimizer ước lượng sai với giá trị lệch phân bố.</li>
<li>Thống kê lấy mẫu quá thấp trên bảng lớn là nguyên nhân thầm lặng của rất nhiều plan tồi. <code>WITH FULLSCAN</code> hoặc đặt <code>PERSIST_SAMPLE_PERCENT</code>.</li>
</ul>
</section>

<section id="m5c">
<h3>5.3 Lab · Query Store — xem, force plan, gỡ force<a class="anch" href="#m5c">#</a></h3>
<p>Phần D của <code>05-query-tuning.sql</code> làm trọn chu trình bằng T-SQL (khỏi phụ thuộc GUI): sinh tải → <code>sp_query_store_flush_db</code> → tìm query tốn CPU nhất → tìm query có nhiều hơn một plan → <code>sp_query_store_force_plan</code> → kiểm chứng <code>is_forced_plan = 1</code> → <code>sp_query_store_unforce_plan</code>.</p>
<div class="warn"><b>Quy trình xử lý hồi quy plan — đề hỏi đúng thứ tự năm bước này:</b>
<ol>
<li>Mở <b>Regressed Queries</b>, xác định query và lịch sử plan</li>
<li>So plan cũ với plan mới, nhìn chênh lệch <b>estimated vs actual rows</b></li>
<li><b>Force</b> plan tốt cuối cùng → <b>dừng thiệt hại ngay</b></li>
<li>Mới đi tìm nguyên nhân gốc: thống kê, parameter sniffing, thiếu index</li>
<li>Sửa xong → <b>unforce</b>, xác nhận optimizer tự chọn đúng</li>
</ol>
Force plan là băng gạc, không phải thuốc.</div>
<p><b>Những chỗ khác đề hay hỏi về Query Store:</b></p>
<ul>
<li><code>readonly_reason</code> khác 0 → Query Store đã chuyển sang <b>READ_ONLY và ngừng thu thập</b>. Lý do phổ biến nhất: đầy <code>max_storage_size_mb</code>. Sửa: tăng size, bật <code>SIZE_BASED_CLEANUP_MODE = AUTO</code>, giảm <code>stale_query_threshold_days</code>, đổi capture mode sang <code>AUTO</code>.</li>
<li><code>query_capture_mode</code>: <b>ALL</b> · <b>AUTO</b> (bỏ query lẻ tẻ — nên dùng) · <b>CUSTOM</b> (2019+) · <b>NONE</b>.</li>
<li><code>force_failure_count &gt; 0</code>: plan không áp được nữa (index bị xoá, schema đổi). SQL Server <b>âm thầm</b> biên dịch lại — phải chủ động theo dõi cột này, không có cảnh báo nào cả.</li>
<li>Query Store <b>bật sẵn</b> trên Azure SQL Database và MI; trên SQL Server 2022 thì bật sẵn cho database <b>mới tạo</b>, database cũ phải bật tay.</li>
</ul>
</section>

<section id="m5d">
<h3>5.4 Lab · Query Store hints và parameter sniffing<a class="anch" href="#m5d">#</a></h3>
<p>Phần D6 của script. <b>Query Store hints</b> (SQL Server 2022 và Azure SQL) là cách <b>duy nhất</b> ép hint lên query của ứng dụng đóng gói mà bạn không sửa được source — nó thay thế plan guide cũ.</p>
<pre><code>EXEC sys.sp_query_store_set_hints @query_id = 42,
     @query_hints = N'OPTION(RECOMPILE, MAXDOP 1)';
SELECT * FROM sys.query_store_query_hints;
EXEC sys.sp_query_store_clear_hints @query_id = 42;</code></pre>
<p><b>Ba hint kinh điển cho parameter sniffing:</b></p>
<table>
<thead><tr><th>Hint</th><th>Làm gì</th><th>Đánh đổi</th></tr></thead>
<tbody>
<tr><td><code>OPTION (RECOMPILE)</code></td><td>Biên dịch lại mỗi lần chạy, luôn đúng với tham số hiện tại</td><td>Tốn CPU biên dịch, và query <b>không</b> vào plan cache</td></tr>
<tr><td><code>OPTION (OPTIMIZE FOR (@p = 'x'))</code></td><td>Ép một giá trị đại diện</td><td>Sai nếu phân bố dữ liệu đổi</td></tr>
<tr><td><code>OPTION (OPTIMIZE FOR UNKNOWN)</code></td><td>Dùng mật độ trung bình, bỏ qua giá trị thật</td><td>Trung bình thì ổn, cực trị thì tệ</td></tr>
</tbody></table>
<div class="tip">Từ <b>compat 160</b> (SQL Server 2022 / Azure SQL), <b>Parameter Sensitive Plan optimization</b> tự sinh <b>nhiều plan</b> cho cùng một query theo dải giá trị tham số — xử lý phần lớn ca parameter sniffing mà không cần hint nào. Câu hỏi "cách hiện đại nhất để xử lý parameter sniffing" → đáp án là PSP, không phải RECOMPILE.</div>
</section>

<section id="m5e">
<h3>5.5 Lab · Chẩn đoán query chậm bằng Copilot (lab chính thức #16)<a class="anch" href="#m5e">#</a></h3>
<p>Lab mới của khoá học, làm được trên database free offer. Trên portal: <b>SQL database → Copilot</b> (hoặc ô Copilot trong Query editor). Hỏi bằng tiếng Anh, ví dụ <i>"Why is this query slow?"</i>, <i>"What indexes are missing on this database?"</i>, <i>"Explain this execution plan"</i>.</p>
<p>Copilot đọc được Query Store, DMV và schema của chính database đó, nên câu trả lời có ngữ cảnh thật chứ không phải câu chung chung.</p>
<div class="warn">Đề <b>không</b> hỏi cú pháp prompt. Cái đáng nhớ là: Copilot cho Azure SQL <b>gợi ý</b>, không tự thay đổi gì; mọi khuyến nghị vẫn phải tự kiểm chứng bằng execution plan và Query Store. Và nó chỉ có trên <b>Azure SQL Database</b>, không có trên SQL Server on VM.</div>
</section>

<h2 class="dom">Mô-đun 6 — Tự động hoá công việc</h2>

<section id="m6z">
<h3>6.0 Bài học — bảng "nền tảng nào tự động hoá bằng gì"<a class="anch" href="#m6z">#</a></h3>
<p>Domain 4 (15–20%) gần như xoay quanh <b>một</b> câu hỏi lặp lại nhiều dạng: <i>"Azure SQL Database không có SQL Server Agent, vậy dùng gì thay?"</i></p>
<table>
<thead><tr><th>Cần</th><th>SQL Server / VM</th><th>Azure SQL MI</th><th>Azure SQL Database</th></tr></thead>
<tbody>
<tr><td>Chạy T-SQL theo lịch</td><td>SQL Agent job</td><td>SQL Agent job (có sẵn)</td><td><b>Elastic Jobs</b> · Automation runbook · Logic Apps · Functions</td></tr>
<tr><td>Chạy trên <b>nhiều</b> database</td><td>Multi-server administration (master/target server)</td><td>Agent job + linked server</td><td><b>Elastic Jobs</b> (đích là nhóm database, elastic pool, hoặc shard map)</td></tr>
<tr><td>Gửi email</td><td>Database Mail</td><td>Database Mail</td><td><b>KHÔNG có</b> — Logic Apps / Functions / action group</td></tr>
<tr><td>Cảnh báo sự cố</td><td>Agent alert (severity / message_id / performance condition / WMI)</td><td>Agent alert</td><td><b>Azure Monitor</b> metric alert + action group</td></tr>
<tr><td>Triển khai hạ tầng</td><td colspan="3">ARM · Bicep · Azure PowerShell · Azure CLI · Terraform (ngoài phạm vi đề)</td></tr>
</tbody></table>
<p><b>Đọc kèm:</b> <a href="/dp-300/documents#s67">SQL Agent</a> · <a href="/dp-300/documents#s68">Notifications &amp; Database Mail</a> · <a href="/dp-300/documents#s70-2">ARM/Bicep</a> · <a href="/dp-300/documents#s74">Elastic Jobs</a> · <a href="/dp-300/documents#s75-3">Automation</a> · <a href="/dp-300/documents#s77-2">Alerts</a></p>
</section>

<section id="m6a">
<h3>6.1 Lab · SQL Agent: job, step, lịch, alert — chạy offline<a class="anch" href="#m6a">#</a></h3>
<pre><code>./sql -f labs/06-agent-jobs.sql
./sql -f labs/06-agent-jobs-cleanup.sql   # dọn</code></pre>
<p>Script dựng một job bảo trì index thật gồm hai step, gắn lịch "2 giờ sáng Chủ nhật", chạy tay, rồi đọc <code>sysjobhistory</code>.</p>
<div class="warn"><b>Thứ tự bắt buộc, và bước hay quên nhất:</b>
<pre><code>sp_add_operator      -- người nhận thông báo, tạo TRƯỚC job
sp_add_job           -- job, kèm @notify_level_email + @notify_email_operator_name
sp_add_jobstep       -- từng step, kèm @on_success_action / @on_fail_action
sp_add_schedule      -- lịch (tồn tại độc lập, dùng lại cho nhiều job)
sp_attach_schedule   -- gắn lịch vào job
sp_add_jobserver     -- ← BƯỚC HAY QUÊN. Chưa gắn vào server thì Agent
                     --   KHÔNG BAO GIỜ chạy job, dù mọi thứ khác đúng hết</code></pre></div>
<p><b>Những con số nên nhớ trong script:</b></p>
<ul>
<li><code>@notify_level_email</code>: 0 never · 1 on success · <b>2 on failure</b> · 3 always</li>
<li><code>@on_fail_action</code>: 1 quit with success · <b>2 quit with failure</b> · 3 go to next step · 4 go to step N</li>
<li><code>@freq_type</code>: 1 once · 4 daily · <b>8 weekly</b> · 16 monthly · 32 monthly relative · 64 khi Agent khởi động · 128 khi CPU rảnh</li>
<li><code>@freq_interval</code> khi weekly là <b>bitmask</b>: 1=CN · 2=T2 · 4=T3 · 8=T4 · 16=T5 · 32=T6 · 64=T7</li>
</ul>
<p><b>Alert:</b> script tạo alert theo <b>severity 17</b> và theo <b>message_id 823 / 824 / 825</b>. Ba số này phải thuộc: <b>823</b> lỗi I/O ở tầng OS · <b>824</b> page hỏng logic · <b>825</b> đọc lại thành công sau vài lần thử — cảnh báo <b>sớm</b> về đĩa sắp hỏng, và hay bị bỏ qua vì thao tác <i>vẫn thành công</i>. Severity <b>19–25</b> thì luôn phải có alert.</p>
<p><b>Database Mail</b> — chuỗi 7 bước, và bước cuối là thứ đề hay hỏi: <code>Database Mail XPs</code> → account → profile → gắn account vào profile → Agent Properties / Alert System bật profile → <b>khởi động lại SQL Server Agent</b> → thử bằng <code>sp_send_dbmail</code>, xem kết quả ở <code>sysmail_allitems</code> và <code>sysmail_event_log</code>.</p>
<p><b>Bảo mật:</b> job step chạy subsystem ngoài T-SQL (CmdExec, PowerShell, SSIS) mà chủ job không phải sysadmin thì cần <b>CREDENTIAL → PROXY → gán proxy cho step</b>. Step T-SQL thì dùng <code>@database_user_name</code> để hạ quyền.</p>
</section>

<section id="m6b">
<h3>6.2 Lab · Elastic Jobs — bản thay thế Agent trên Azure SQL Database<a class="anch" href="#m6b">#</a></h3>
<p>Cần một database GP <b>trả tiền</b> làm <i>job database</i> (free offer không dùng được cho elastic job). Làm nhanh rồi xoá.</p>
<pre><code># 1. Database chứa metadata của job agent (tối thiểu S1 / GP)
az sql db create -g $RG -s $SRV -n jobsdb -e GeneralPurpose -f Gen5 -c 1

# 2. Elastic Job agent
az sql elastic-job agent create -g $RG -s $SRV -n jobagent-dp300 --database jobsdb</code></pre>
<pre><code>-- 3. Trong jobsdb: khai báo credential, target group, job, job step
CREATE MASTER KEY ENCRYPTION BY PASSWORD = 'Dp300#JobsMaster';

CREATE DATABASE SCOPED CREDENTIAL job_cred
    WITH IDENTITY = 'jobuser', SECRET = 'Dp300#JobUser';

EXEC jobs.sp_add_target_group 'ProdDatabases';
EXEC jobs.sp_add_target_group_member
     @target_group_name = 'ProdDatabases',
     @target_type = 'SqlDatabase',
     @server_name = '&lt;srv&gt;.database.windows.net',
     @database_name = 'appdb';

EXEC jobs.sp_add_job @job_name = 'Rebuild indexes', @enabled = 1,
     @schedule_interval_type = 'Days', @schedule_interval_count = 1;

EXEC jobs.sp_add_jobstep
     @job_name = 'Rebuild indexes',
     @command  = N'ALTER INDEX ALL ON dbo.Orders REBUILD;',
     @credential_name = 'job_cred',
     @target_group_name = 'ProdDatabases';

EXEC jobs.sp_start_job 'Rebuild indexes';

-- Theo dõi
SELECT * FROM jobs.job_executions ORDER BY start_time DESC;</code></pre>
<p><b>Bẫy trong đề:</b></p>
<ul>
<li>Job agent cần <b>một database riêng</b> để chứa metadata — không chạy "trong không khí" như Agent.</li>
<li><b>Target group</b> có thể là: một server (mọi database trong đó) · một elastic pool · từng database · shard map. Loại trừ được bằng cách thêm member với <code>@refresh_credential_name</code> / <code>@membership_type = 'Exclude'</code>.</li>
<li>Credential phải tồn tại <b>trên từng database đích</b> — đây là chỗ hay hỏng nhất khi triển khai thật.</li>
<li>Elastic Jobs chạy <b>T-SQL</b>, không chạy được PowerShell/CmdExec như Agent.</li>
</ul>
</section>

<section id="m6d">
<h3>6.3 Lab · Automation runbook rebuild index (lab chính thức #13)<a class="anch" href="#m6d">#</a></h3>
<pre><code>az automation account create -g $RG -n auto-dp300 -l $LOC --sku Free

# Bật managed identity cho automation account rồi cấp quyền lên SQL server
az automation account update -g $RG -n auto-dp300 --assign-identity

# Import module Az.Sql vào automation account (portal: Modules -> Browse gallery)
# Tạo runbook kiểu PowerShell</code></pre>
<pre><code># Runbook PowerShell — nội dung tối thiểu
Connect-AzAccount -Identity                       # dùng managed identity, KHÔNG hardcode secret

$token = (Get-AzAccessToken -ResourceUrl "https://database.windows.net/").Token
$conn  = New-Object System.Data.SqlClient.SqlConnection
$conn.ConnectionString = "Server=tcp:&lt;srv&gt;.database.windows.net,1433;Database=appdb;"
$conn.AccessToken = $token
$conn.Open()

$cmd = $conn.CreateCommand()
$cmd.CommandTimeout = 0
$cmd.CommandText = @"
DECLARE @sql NVARCHAR(MAX) = N'';
SELECT @sql = @sql + N'ALTER INDEX ' + QUOTENAME(i.name) + N' ON '
     + QUOTENAME(SCHEMA_NAME(o.schema_id)) + N'.' + QUOTENAME(o.name)
     + CASE WHEN ips.avg_fragmentation_in_percent > 30 THEN N' REBUILD;' ELSE N' REORGANIZE;' END
FROM sys.dm_db_index_physical_stats(DB_ID(), NULL, NULL, NULL, 'LIMITED') ips
JOIN sys.indexes i ON i.object_id = ips.object_id AND i.index_id = ips.index_id
JOIN sys.objects o ON o.object_id = i.object_id
WHERE i.name IS NOT NULL AND ips.page_count >= 1000
  AND ips.avg_fragmentation_in_percent > 5;
EXEC sys.sp_executesql @sql;
"@
$cmd.ExecuteNonQuery()
$conn.Close()</code></pre>
<pre><code># Gắn lịch chạy hằng tuần
az automation schedule create -g $RG --automation-account-name auto-dp300 \\
  -n weekly-index --frequency Week --interval 1 --start-time "2026-09-06T02:00:00+07:00"</code></pre>
<p><b>Bẫy trong đề:</b> runbook phải xác thực bằng <b>managed identity</b> (<code>Connect-AzAccount -Identity</code>), không dùng "Run As account" (đã bị khai tử) và tuyệt đối không hardcode mật khẩu. Automation account SKU <b>Free</b> có 500 phút chạy mỗi tháng — đủ cho lab.</p>
</section>

<section id="m6e">
<h3>6.4 Lab · Alert theo chỉ số hiệu năng (lab chính thức #12)<a class="anch" href="#m6e">#</a></h3>
<pre><code># Action group: nơi định nghĩa "báo cho ai, bằng cách nào"
az monitor action-group create -g $RG -n ag-dba \\
  --short-name dba --action email dba dba@contoso.com

# Alert rule: CPU trung bình 5 phút vượt 80%
az monitor metrics alert create -g $RG -n "SQL CPU cao" \\
  --scopes $(az sql db show -g $RG -s $SRV -n appdb --query id -o tsv) \\
  --condition "avg cpu_percent > 80" \\
  --window-size 5m --evaluation-frequency 1m \\
  --severity 2 --action ag-dba \\
  --description "CPU của appdb vượt 80% trong 5 phút"

# Các metric hay dùng khác cho Azure SQL Database
#   cpu_percent · dtu_consumption_percent · storage_percent
#   log_write_percent · physical_data_read_percent
#   deadlock · connection_failed · sessions_percent · workers_percent</code></pre>
<p><b>Bẫy trong đề:</b></p>
<ul>
<li>Ba mảnh của một cảnh báo Azure Monitor: <b>alert rule</b> (điều kiện) → <b>action group</b> (làm gì) → <b>alert processing rule</b> (chặn/định tuyến, tuỳ chọn). Action group tái sử dụng được cho nhiều rule.</li>
<li>Action group không chỉ gửi email: SMS, webhook, Logic App, Azure Function, ITSM, runbook.</li>
<li>Alert dựa trên <b>metric</b> (rẻ, gần realtime) khác alert dựa trên <b>log query</b> (mạnh hơn, chậm hơn, tốn tiền hơn — cần Log Analytics).</li>
<li>Với <b>SQL Server trên VM</b>, cảnh báo CPU của <b>máy</b> lấy từ metric của VM; cảnh báo CPU của <b>SQL Server</b> phải qua Agent alert hoặc log của Log Analytics agent — hai thứ khác nhau và đề có phân biệt.</li>
</ul>
</section>

<h2 class="dom">Mô-đun 7 — HA/DR</h2>

<section id="m7z">
<h3>7.0 Bài học — RPO và RTO quyết định tất cả<a class="anch" href="#m7z">#</a></h3>
<p>Mọi câu hỏi HA/DR của đề đều quy về: <b>doanh nghiệp chấp nhận mất bao nhiêu dữ liệu (RPO)</b> và <b>chấp nhận ngừng bao lâu (RTO)</b>. Chọn giải pháp là chọn điểm trên hai trục đó, và giá tiền đi kèm.</p>
<pre><code>RPO = Recovery Point Objective  -> mất tối đa BAO NHIÊU DỮ LIỆU
RTO = Recovery Time Objective   -> ngừng tối đa BAO LÂU

RPO = 0 chỉ có ở đồng bộ đồng bộ (synchronous commit):
      Always On AG synchronous · FCI (chung storage) · Business Critical replica
RPO > 0 ở mọi thứ bất đồng bộ:
      geo-replication (~5 giây) · log shipping (= chu kỳ backup log) ·
      backup thường (= khoảng cách tới bản log gần nhất)</code></pre>
<table>
<thead><tr><th>Giải pháp</th><th>Nền tảng</th><th>RPO</th><th>RTO</th><th>Bảo vệ khỏi</th></tr></thead>
<tbody>
<tr><td>Always On AG — synchronous commit</td><td>VM, MI</td><td><b>0</b></td><td>giây</td><td>Hỏng instance, hỏng máy (cùng vùng)</td></tr>
<tr><td>Always On AG — asynchronous</td><td>VM, MI</td><td>&gt; 0</td><td>phút (phải failover tay)</td><td>Mất cả vùng</td></tr>
<tr><td>Failover Cluster Instance (FCI)</td><td>VM</td><td>0</td><td>1–2 phút (khởi động lại instance)</td><td>Hỏng máy; <b>không</b> bảo vệ khỏi hỏng storage (dùng chung storage)</td></tr>
<tr><td>Zone-redundant configuration</td><td>Azure SQL DB, MI</td><td>0</td><td>giây</td><td>Mất một availability zone</td></tr>
<tr><td>Active geo-replication</td><td>Azure SQL DB</td><td>~5 giây</td><td>~30 giây (failover tay)</td><td>Mất cả vùng; đọc từ replica</td></tr>
<tr><td>Auto-failover group</td><td>Azure SQL DB, MI</td><td>~5 giây</td><td>~1 giờ (grace period)</td><td>Mất cả vùng, <b>kèm listener endpoint không đổi</b></td></tr>
<tr><td>Log shipping</td><td>VM, on-prem</td><td>= chu kỳ backup log</td><td>phút–giờ (tay)</td><td>Cả hỏng máy lẫn <b>xoá nhầm</b> (nếu có delay)</td></tr>
<tr><td>Backup + restore</td><td>tất cả</td><td>= tới log gần nhất</td><td>giờ</td><td>Mọi thứ, kể cả xoá nhầm và ransomware</td></tr>
</tbody></table>
<div class="warn"><b>Điều đề hỏi mà nhiều người trả lời sai:</b> AG, geo-replication và failover group <b>không</b> bảo vệ khỏi <b>xoá nhầm dữ liệu</b> — lệnh <code>DELETE</code> được nhân bản sang replica trong vài giây. Chỉ <b>backup + PITR</b> (và log shipping có delay) mới cứu được. Câu tình huống "ai đó xoá nhầm bảng lúc 10 giờ" luôn có đáp án là <b>point-in-time restore</b>.</div>
<p><b>Đọc kèm:</b> <a href="/dp-300/documents#s79">SLA / RPO / RTO</a> · <a href="/dp-300/documents#s90">Availability Group</a> · <a href="/dp-300/documents#s93">FCI</a> · <a href="/dp-300/documents#s94">Geo-replication</a> · <a href="/dp-300/documents#s82">Failover group</a> · <a href="/dp-300/documents#s85">Restore</a> · <a href="/dp-300/documents#s86">PITR</a> · <a href="/dp-300/documents#s87">LTR</a></p>
</section>

<section id="m7a">
<h3>7.1 Lab · Backup, restore, point-in-time recovery — chạy offline (lab chính thức #15)<a class="anch" href="#m7a">#</a></h3>
<p>Lab quan trọng nhất của mô-đun này, và may mắn là lab chạy offline được trọn vẹn.</p>
<pre><code>./sql -f labs/07-backup-restore.sql
./sql -f labs/07-backup-restore-cleanup.sql   # dọn</code></pre>
<p>Script dựng kịch bản thật: full backup → thêm dữ liệu → differential → thêm dữ liệu → <b>ghi lại mốc thời gian</b> → "tai nạn" xoá sạch bảng → log backup (chứa cả tai nạn) → phục hồi ra <b>database mới</b> tới đúng giây trước tai nạn.</p>
<p><b>Nhìn cái gì:</b> cuối script in ra hai bảng cạnh nhau — bản phục hồi có dòng <code>DU LIEU TOT</code>, bản gốc chỉ còn <code>DU LIEU XAU</code>. Và <code>msdb.dbo.backupset</code> cho thấy chuỗi LSN nối ba bản backup lại thành một dây.</p>
<div class="warn"><b>Thứ tự dây phục hồi — đề hỏi liên tục, sai một bước là hỏng cả dây:</b>
<ol>
<li><b>Tail-log backup</b> nếu database gốc còn truy cập được: <code>BACKUP LOG ... WITH NORECOVERY, NO_TRUNCATE</code></li>
<li><code>RESTORE DATABASE</code> từ <b>full</b> — <code>WITH NORECOVERY</code></li>
<li><code>RESTORE DATABASE</code> từ <b>differential gần nhất</b> — <code>WITH NORECOVERY</code> (chỉ <b>một</b> bản, differential luôn tính từ full gần nhất)</li>
<li><code>RESTORE LOG</code> lần lượt <b>theo đúng thứ tự</b> — <code>WITH NORECOVERY</code></li>
<li><code>RESTORE LOG</code> cuối — <code>WITH STOPAT = '...', RECOVERY</code></li>
</ol>
Quên <code>NORECOVERY</code> ở một bước giữa → database mở ra sớm → phải làm lại toàn bộ dây từ đầu.</div>
<p><b>Bẫy khác trong đề:</b></p>
<ul>
<li><code>STOPAT</code> chỉ dùng được với <code>RESTORE LOG</code>, và chỉ ở recovery model <b>FULL</b> hoặc <b>BULK_LOGGED</b>. Biến thể: <code>STOPATMARK</code> / <code>STOPBEFOREMARK</code> với transaction đặt tên.</li>
<li><code>COPY_ONLY</code> tồn tại để lấy một bản full ad-hoc mà <b>không reset differential base</b> — đáp án đúng cho "cần một bản copy giữa chừng lịch backup mà không phá lịch".</li>
<li><code>RESTORE VERIFYONLY</code> chỉ kiểm tra bản backup <b>đọc được</b> và checksum khớp — nó <b>không</b> chứng minh database restore ra sẽ chạy. Cách duy nhất chắc chắn: restore thật lên máy khác rồi <code>DBCC CHECKDB</code>.</li>
<li><code>MAXTRANSFERSIZE &gt; 65536</code> là <b>bắt buộc</b> khi nén backup của database bật TDE. Script minh hoạ đúng tình huống này vì lab 03 đã bật TDE — bỏ tham số đó đi là lỗi ngay.</li>
<li>Recovery model: <b>SIMPLE</b> không có log backup nên <b>không có PITR</b>; <b>BULK_LOGGED</b> có log backup nhưng <b>không PITR vào khoảng có thao tác bulk</b>.</li>
<li><code>log_reuse_wait_desc = 'LOG_BACKUP'</code> là triệu chứng kinh điển của "database FULL recovery mà không ai backup log" → file log phình tới khi đầy đĩa.</li>
</ul>
</section>

<section id="m7b">
<h3>7.2 Lab · Backup to URL và PITR/LTR trên Azure<a class="anch" href="#m7b">#</a></h3>
<p><b>Backup to URL</b> (SQL Server / VM / MI) — cú pháp phải nhớ:</p>
<pre><code># Tạo storage account và container
az storage account create -g $RG -n stdp300$RANDOM -l $LOC --sku Standard_LRS
az storage container create --account-name &lt;acct&gt; -n backups

# Sinh SAS token (KHÔNG dùng access key cho block blob)
az storage container generate-sas --account-name &lt;acct&gt; -n backups \\
  --permissions rwdlacx --expiry 2026-12-31 --https-only -o tsv</code></pre>
<pre><code>-- Credential: TÊN phải TRÙNG KHÍT đường dẫn container
CREATE CREDENTIAL [https://&lt;acct&gt;.blob.core.windows.net/backups]
WITH IDENTITY = 'SHARED ACCESS SIGNATURE',
     SECRET   = 'sv=2022-11-02&ss=b&srt=co&sp=rwdlacx&se=...';
     -- SECRET là SAS token ĐÃ BỎ dấu '?' ở đầu ← lỗi kinh điển

BACKUP DATABASE AdventureWorks
TO URL = 'https://&lt;acct&gt;.blob.core.windows.net/backups/AW.bak'
WITH COMPRESSION, CHECKSUM, MAXTRANSFERSIZE = 4194304, BLOCKSIZE = 65536;

RESTORE DATABASE AW_FromUrl
FROM URL = 'https://&lt;acct&gt;.blob.core.windows.net/backups/AW.bak'
WITH MOVE 'AdventureWorks'     TO 'F:\\data\\AW.mdf',
     MOVE 'AdventureWorks_log' TO 'G:\\log\\AW.ldf', RECOVERY;</code></pre>
<p><b>PITR và LTR trên Azure SQL Database</b> — không có T-SQL, chỉ CLI/portal:</p>
<pre><code># PITR: khôi phục LUÔN tạo database MỚI, không ghi đè database cũ
az sql db restore -g $RG -s $SRV -n appdb \\
  --dest-name appdb-restored --time "2026-08-27T09:00:00"

# Database ĐÃ XOÁ, còn trong khoảng retention
az sql db restore -g $RG -s $SRV -n appdb \\
  --dest-name appdb-recovered --deleted-time "2026-08-26T14:30:00"

# LTR: giữ bản full theo tuần/tháng/năm, tối đa 10 năm
az sql db ltr-policy set -g $RG -s $SRV -n appdb \\
  --weekly-retention P4W --monthly-retention P12M \\
  --yearly-retention P5Y --week-of-year 1

az sql db ltr-backup list -l $LOC -s $SRV -d appdb -o table
az sql db ltr-backup restore --backup-id &lt;id&gt; \\
  --dest-database appdb-ltr --dest-server $SRV --dest-resource-group $RG</code></pre>
<p><b>Con số phải nhớ:</b></p>
<table>
<thead><tr><th></th><th>PITR retention</th><th>Ghi chú</th></tr></thead>
<tbody>
<tr><td>Basic</td><td>7 ngày</td><td>chỉnh được 1–7</td></tr>
<tr><td>Standard / GP / BC / Premium</td><td>7 ngày mặc định</td><td>chỉnh được <b>1–35</b> ngày</td></tr>
<tr><td>Hyperscale</td><td>7 ngày mặc định</td><td>1–35 ngày</td></tr>
<tr><td>LTR</td><td>tới <b>10 năm</b></td><td>tách hẳn khỏi PITR; tuần/tháng/năm</td></tr>
</tbody></table>
<div class="warn"><b>Ba khác biệt nền tảng hay bị hỏi:</b> Azure SQL Database <b>không</b> chạy được <code>BACKUP DATABASE</code> (chỉ export bacpac hoặc dùng PITR/LTR của dịch vụ) · Azure SQL <b>Managed Instance</b> chỉ chạy được <code>COPY_ONLY</code> backup to URL · Nhịp backup tự động của Azure: full hằng tuần, differential 12–24 giờ, log <b>5–10 phút</b> — chính con số log 5–10 phút giải thích vì sao RPO của PITR rất nhỏ.</div>
</section>

<section id="m7c">
<h3>7.3 Lab · Geo-replication và failover group (lab chính thức #14)<a class="anch" href="#m7c">#</a></h3>
<p>Cần database GP <b>trả tiền</b> ở hai vùng (free offer không dùng được cho failover group). Làm nhanh, xoá ngay.</p>
<pre><code># 1. Logical server thứ hai ở vùng khác
export SRV2=sqlsrv-dp300-dr-$RANDOM
export LOC2=eastasia
az sql server create -g $RG -n $SRV2 -l $LOC2 -u $ADMIN -p $PWD_SQL

# 2. Active geo-replication: tạo replica đọc được, bất đồng bộ
az sql db replica create -g $RG -s $SRV -n appdb \\
  --partner-server $SRV2 --partner-resource-group $RG \\
  --service-objective GP_Gen5_1

# Kiểm chứng: replica ở trạng thái Readable Secondary
az sql db replica list-links -g $RG -s $SRV -n appdb -o table

# 3. Failover thủ công (đảo vai trò, không mất dữ liệu nếu replica đã bắt kịp)
az sql db replica set-primary -g $RG -s $SRV2 -n appdb

# 4. Auto-failover group: thêm một endpoint KHÔNG ĐỔI cho ứng dụng
az sql failover-group create -g $RG -s $SRV -n fg-dp300 \\
  --partner-server $SRV2 --add-db appdb \\
  --failover-policy Automatic --grace-period 1

az sql failover-group show -g $RG -s $SRV -n fg-dp300 -o jsonc
# -> hai endpoint:  fg-dp300.database.windows.net           (read-write)
#                   fg-dp300.secondary.database.windows.net (read-only)</code></pre>
<p><b>Khác biệt cốt lõi, đề hỏi rất nhiều:</b></p>
<table>
<thead><tr><th></th><th>Active geo-replication</th><th>Auto-failover group</th></tr></thead>
<tbody>
<tr><td>Phạm vi</td><td>Từng <b>database</b></td><td><b>Nhóm</b> database (hoặc cả instance với MI)</td></tr>
<tr><td>Số replica</td><td>Tới <b>4</b> secondary</td><td>Đúng <b>1</b> server đối tác</td></tr>
<tr><td>Endpoint</td><td>Ứng dụng phải <b>tự đổi</b> connection string khi failover</td><td>Listener <b>không đổi</b> — ứng dụng không phải sửa gì</td></tr>
<tr><td>Failover tự động</td><td>Không, phải bấm tay</td><td>Có, sau <code>grace-period</code> (tính bằng <b>giờ</b>, tối thiểu 1)</td></tr>
<tr><td>Có trên MI?</td><td>Không</td><td>Có</td></tr>
</tbody></table>
<p><b>Bẫy trong đề:</b></p>
<ul>
<li>Secondary luôn <b>readable</b> — dùng được để chạy báo cáo, chỉ định <code>ApplicationIntent=ReadOnly</code> trong connection string.</li>
<li><code>--grace-period</code> tính bằng <b>giờ</b>, tối thiểu 1. Nghĩa là RTO của auto-failover group tới <b>một giờ</b> — nếu đề đòi RTO vài phút thì phải failover <b>tay</b> hoặc chọn giải pháp khác.</li>
<li><b>Forced failover</b> (khi primary chết hẳn) có thể <b>mất dữ liệu</b> vì replication là bất đồng bộ; <b>planned/friendly failover</b> thì không mất.</li>
<li>Geo-replica <b>tính tiền y hệt</b> database chính. Tạo xong quên xoá là nhân đôi hoá đơn.</li>
<li>Zone-redundant (chống mất một AZ trong cùng vùng) là thứ <b>khác</b> geo-replication (chống mất cả vùng). Đề hay đặt cạnh nhau.</li>
</ul>
<pre><code># DỌN NGAY khi xong
az sql failover-group delete -g $RG -s $SRV -n fg-dp300
az sql db replica delete-link -g $RG -s $SRV -n appdb --partner-server $SRV2 --yes
az sql db delete -g $RG -s $SRV2 -n appdb --yes
az sql server delete -g $RG -n $SRV2 --yes</code></pre>
</section>

<section id="m7d">
<h3>7.4 Lab · Always On availability group trên Azure VM<a class="anch" href="#m7d">#</a></h3>
<p>Lab đắt nhất và lâu nhất của cả khoá (cần <b>hai</b> VM + domain controller + witness). Trước khi bỏ tiền, cân nhắc: đề hỏi về AG chủ yếu ở mức <b>khái niệm và thứ tự bước</b>, không bắt gõ từng lệnh.</p>
<p><b>Nếu vẫn muốn làm</b> — dùng template có sẵn thay vì dựng tay:</p>
<pre><code># Template chính thức dựng sẵn cả AD, WSFC, hai node SQL và AG
az deployment group create -g $RG \\
  --template-uri https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/application-workloads/sql/sql-server-always-on-cluster/azuredeploy.json \\
  --parameters adminUsername=azureuser adminPassword=$PWD_SQL

# Hoặc dùng Azure SQL VM CLI để tạo AG listener sau khi đã có cluster
az sql vm group create -g $RG -n sqlvmgroup -l $LOC \\
  --domain-fqdn contoso.com --operator-acc sqlagent --bootstrap-acc sqlboot \\
  --service-acc sqlservice --sa-key &lt;key&gt; --storage-account &lt;url&gt; \\
  --image-offer SQL2022-WS2022 --image-sku Enterprise

az sql vm group ag-listener create -g $RG -n aglistener \\
  --ag-name AG1 --group-name sqlvmgroup --ip-address 10.0.0.100 \\
  --load-balancer &lt;lb&gt; --probe-port 59999 --subnet &lt;subnet-id&gt; --sqlvms vm1 vm2</code></pre>
<p><b>Thứ tự dựng AG bằng tay — đề hỏi đúng chuỗi này:</b></p>
<ol>
<li>Cả hai node vào <b>cùng một Active Directory domain</b></li>
<li>Cài <b>Failover Clustering</b>, tạo <b>Windows Server Failover Cluster</b> (WSFC)</li>
<li>Cấu hình <b>quorum</b> — trên Azure thường là <b>cloud witness</b> (một storage account)</li>
<li>Bật <b>AlwaysOn Availability Groups</b> trong SQL Server Configuration Manager, <b>khởi động lại</b> dịch vụ SQL Server</li>
<li>Database phải ở <b>FULL recovery</b> và đã có <b>ít nhất một full backup</b></li>
<li>Tạo AG, chọn replica, chọn <b>synchronous</b> hay <b>asynchronous</b>, chọn <b>automatic</b> hay <b>manual</b> failover</li>
<li>Tạo <b>listener</b> — trên Azure cần thêm <b>internal load balancer</b> với <b>health probe</b> (thường port 59999) và <b>Direct Server Return / floating IP</b> bật</li>
</ol>
<div class="warn"><b>Ba điều về AG mà đề hay xoáy:</b> automatic failover <b>bắt buộc</b> synchronous commit (asynchronous chỉ failover tay và có thể mất dữ liệu) · một AG có tối đa <b>9</b> replica, trong đó tối đa <b>5</b> synchronous · trên Azure, listener <b>không chạy</b> nếu thiếu internal load balancer + health probe — đây là chỗ hỏng phổ biến nhất khi dựng AG trên cloud.</div>
<p><b>Log shipping</b> — giải pháp "nghèo" mà đề vẫn hỏi: ba job Agent (<b>backup</b> ở primary → <b>copy</b> → <b>restore</b> ở secondary), secondary ở trạng thái <code>NORECOVERY</code> hoặc <code>STANDBY</code> (đọc được), và <b>có thể đặt delay</b> — chính cái delay đó là thứ AG không có, và là lý do log shipping vẫn cứu được ca <b>xoá nhầm dữ liệu</b>.</p>
</section>

<h2 class="dom">8. Kết</h2>

<section id="z1">
<h3>8.1 Checklist tự chấm — làm được không cần mở tài liệu?<a class="anch" href="#z1">#</a></h3>
<p>Đóng hết tài liệu. Với mỗi dòng, tự trả lời rồi mới mở ra kiểm. Chỗ nào phải mở chính là chỗ sẽ mất điểm.</p>
<table>
<thead><tr><th>Domain</th><th>Phải làm được</th></tr></thead>
<tbody>
<tr><td rowspan="3"><b>1</b> · 15–20%</td><td>Nêu 5 khác biệt giữa VM / MI / Azure SQL Database và chọn đúng cho một tình huống</td></tr>
<tr><td>Viết chuỗi partition function → scheme → table và giải thích RANGE RIGHT</td></tr>
<tr><td>Nêu điều kiện để <code>SWITCH PARTITION</code> chạy được (4 điều kiện)</td></tr>
<tr><td rowspan="4"><b>2</b> · 20–25%</td><td>Viết chuỗi 5 bước bật TDE với customer-managed key</td></tr>
<tr><td>Viết chuỗi 5 bước triển khai RLS và nói vì sao cần <code>SCHEMABINDING</code></td></tr>
<tr><td>Giải thích vì sao DDM không phải biện pháp bảo mật, kèm cách phá</td></tr>
<tr><td>Phân biệt firewall server-level và database-level, và thứ tự xét</td></tr>
<tr><td rowspan="4"><b>3</b> · 20–25%</td><td>Đọc top 5 wait type và nói mỗi cái dẫn tới hành động gì</td></tr>
<tr><td>Nêu 4 cách xử lý blocking theo đúng thứ tự ưu tiên</td></tr>
<tr><td>Nêu 5 bước xử lý một plan hồi quy bằng Query Store</td></tr>
<tr><td>Nói MAXDOP đặt ở đâu trên SQL Server và ở đâu trên Azure SQL Database</td></tr>
<tr><td rowspan="2"><b>4</b> · 15–20%</td><td>Viết chuỗi 6 lệnh tạo một Agent job hoàn chỉnh, kể cả <code>sp_add_jobserver</code></td></tr>
<tr><td>Nói Azure SQL Database thay Agent, Database Mail và alert bằng gì</td></tr>
<tr><td rowspan="3"><b>5</b> · 20–25%</td><td>Viết đúng thứ tự dây phục hồi tới một mốc thời gian</td></tr>
<tr><td>Đặt RPO/RTO cho 8 giải pháp HA/DR vào đúng ô</td></tr>
<tr><td>Nói vì sao geo-replication không cứu được ca xoá nhầm dữ liệu</td></tr>
</tbody></table>
</section>

<section id="z2">
<h3>8.2 Sau khi thi trượt thì làm gì với bản score report<a class="anch" href="#z2">#</a></h3>
<p>Điểm đỗ là <b>700/1000</b>, và score report chia điểm theo đúng năm domain ở trên. Cách dùng nó cho hiệu quả:</p>
<ol>
<li><b>Xếp năm domain theo điểm từ thấp lên.</b> Đừng học lại từ đầu — học lại đúng hai domain thấp nhất.</li>
<li><b>Với mỗi domain yếu, làm lại lab của nó ở trang này trước, đọc tài liệu sau.</b> Trượt lần đầu hầu như không phải vì chưa đọc, mà vì đọc rồi mà chưa từng gõ.</li>
<li><b>Rồi mới luyện câu hỏi</b> ở <a href="/dp-300/practice">trang luyện thi</a> — lọc theo đúng phạm vi đó, và đọc kỹ phần giải thích của những câu làm sai.</li>
<li><b>Làm đề mô phỏng 40 câu / 100 phút</b> ít nhất hai lần trước khi đăng ký lại.</li>
</ol>
<div class="tip">Microsoft cho <b>thi lại</b>: lần hai chờ <b>24 giờ</b>, từ lần ba trở đi chờ <b>14 ngày</b>, tối đa <b>5 lần trong 12 tháng</b>. Đừng vội đăng ký lại trong tuần đầu — hai tuần theo kế hoạch ở <a href="#p4">0.5</a> là khoảng vừa đủ để đổi từ "đọc rồi" sang "làm được".</div>
<p class="src"><b>Nguồn của toàn trang:</b> <a href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-300" target="_blank" rel="noopener">Study guide DP-300</a> · <a href="https://microsoftlearning.github.io/dp-300-database-administrator/" target="_blank" rel="noopener">18 lab chính thức của khoá DP-300</a> · <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/free-offer" target="_blank" rel="noopener">Azure SQL Database free offer</a> · <a href="https://learn.microsoft.com/en-us/cli/azure/sql" target="_blank" rel="noopener">az sql CLI reference</a> · <a href="https://learn.microsoft.com/en-us/sql/relational-databases/" target="_blank" rel="noopener">SQL Server docs</a>. Mọi con số đo được trong bài là kết quả chạy thật của bảy script trong <code>labs/dp-300/labs/</code> trên container SQL Server 2022 Developer, ngày 27/08/2026.</p>
</section>
`,g=t({__name:"Dp300LabsPage",setup(r){return(o,d)=>(i(),e(n,{certId:"dp300",html:a(c),title:"DP-300 · Thực hành",subtitle:"7 mô-đun · 30 lab — 7 bài chạy offline bằng container ở labs/dp-300, phần còn lại bằng Azure CLI kèm chi phí và lệnh dọn",practiceRoute:"/dp-300/practice",practiceLabel:"Luyện thi DP-300",extraLinks:[{to:"/dp-300/documents",label:"Tài liệu"},{to:"/dp-300/tables",label:"Bảng ôn nhanh"},{to:"/dp-300/sources",label:"Bản đồ tài liệu"}]},null,8,["html"]))}});export{g as default};
