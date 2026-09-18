import{_ as n}from"./NotesPage.vue_vue_type_script_setup_true_lang-CDA9zT6L.js";import{d as e,f as t,e as a,o as i}from"./index-DOcfXXaA.js";import"./ThemeToggle.vue_vue_type_script_setup_true_lang-C5RQEf-R.js";import"./useStudyClock-rCjwW3tS.js";const r=`<h2 class="dom">0. Danh sách này là gì</h2>

<section id="s0">
<h3>0.1 Bạn đang cầm study guide đời 2020 — đây là chỗ nó lệch với đề hôm nay<a class="anch" href="#s0">#</a></h3>
<p>Danh sách 130 link đó là bản <b>skills measured cũ của DP-300</b>, nhận ra ngay ở ba dấu vết: có domain <b>"Perform Administration by Using T-SQL (10-15%)"</b> (đã bị xoá khỏi đề), <b>"Optimize Query Performance"</b> vẫn tách riêng ở mức 5-10% (nay đã gộp), và mọi link còn ở dạng <code>docs.microsoft.com/azure/sql-database/…</code> (tên miền và đường dẫn đều đã đổi).</p>
<p>Nội dung thì <b>vẫn dùng được gần hết</b> — engine SQL Server không đổi. Nhưng học theo trọng số cũ là phân bổ sai thời gian. Đây là bảng so:</p>
<table>
<thead><tr><th>Domain bản cũ (2020)</th><th>Trọng số cũ</th><th>Tương ứng bản 24/04/2026</th><th>Trọng số mới</th></tr></thead>
<tbody>
<tr><td>Plan and Implement Data Platform Resources</td><td>15–20%</td><td>Plan and implement data platform resources</td><td><b>20–25%</b> ↑</td></tr>
<tr><td>Implement a Secure Environment</td><td>15–20%</td><td>Implement a secure environment</td><td><b>15–20%</b> — giữ nguyên</td></tr>
<tr><td>Monitor and Optimize Operational Resources</td><td>15–20%</td><td rowspan="2">Monitor, configure, and optimize database resources</td><td rowspan="2"><b>20–25%</b> — hai domain gộp làm một</td></tr>
<tr><td>Optimize Query Performance</td><td>5–10%</td></tr>
<tr><td>Perform Automation of Tasks</td><td>10–15%</td><td>Configure and manage automation of tasks</td><td><b>15–20%</b> ↑</td></tr>
<tr><td>Plan and Implement a HADR Environment</td><td>15–20%</td><td>Plan and configure a HA/DR environment</td><td><b>20–25%</b> ↑</td></tr>
<tr><td><b>Perform Administration by Using T-SQL</b></td><td>10–15%</td><td><i>không còn là domain riêng</i></td><td><b>0%</b> — rải vào bốn domain kia</td></tr>
</tbody></table>
<div class="warn"><b>Điều quan trọng nhất rút ra từ bảng này:</b> domain "Administration by Using T-SQL" từng là <b>10–15% điểm gần như cho không</b> (DBCC, backup/restore bằng T-SQL, cấp quyền bằng T-SQL — toàn thứ dễ). Nó biến mất, và <b>toàn bộ số điểm đó bị đẩy sang bốn domain khó hơn</b>: bảo mật, giám sát, tự động hoá, HA/DR — mỗi cái tăng 5 điểm phần trăm. Ai ôn theo bản cũ sẽ dành đúng 10–15% thời gian cho phần dễ nhất và thiếu hụt ở đúng chỗ đề nặng lên.</div>
<p>Kỹ năng T-SQL vẫn bị hỏi, chỉ là <b>nằm rải trong các domain khác</b>: <i>"Manage authentication and authorization by using T-SQL"</i> nay là gạch đầu dòng của domain 2, <i>"Backup and restore a database by using T-SQL"</i> nằm trong domain 5, <i>"Implement database integrity checks"</i> (DBCC) nằm trong domain 3.</p>
<p class="src"><b>Nguồn:</b> <a href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-300" target="_blank" rel="noopener">Study guide DP-300</a> (skills measured 24/04/2026) đối chiếu với danh sách bạn đưa. Toàn bộ nội dung trang này soạn từ tài liệu chính thức mà 130 link đó trỏ tới, đọc ngày 27/08/2026.</p>
</section>

<section id="s0b">
<h3>0.2 Link chết và tính năng đã khai tử — đọc trước khi bấm bất kỳ link nào<a class="anch" href="#s0b">#</a></h3>
<p><b>Quy tắc đổi địa chỉ.</b> Không link nào trong danh sách còn ở địa chỉ gốc, nhưng phần lớn vẫn redirect được. Ba luật:</p>
<pre><code>docs.microsoft.com/…            →  learn.microsoft.com/…          (301, luôn đúng)
/azure/sql-database/sql-database-X  →  /azure/azure-sql/database/…    (đổi cả tên trang)
/sql/…?view=sql-server-ver15    →  /sql/…?view=sql-server-ver17   (ver15 = SQL 2019,
                                                                   đề nay bám 2022/2025)

Ví dụ đi hai chặng:
  docs.microsoft.com/en-us/azure/sql-database/sql-database-paas-vs-sql-server-iaas
  → learn.microsoft.com/en-us/azure/sql-database/sql-database-paas-vs-sql-server-iaas
  → learn.microsoft.com/en-us/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview</code></pre>
<p><b>Năm thứ trong danh sách đã bị khai tử hoặc thay thế.</b> Đây mới là phần đáng tiền, vì học thuộc một tính năng đã chết là mất công đôi đường:</p>
<table>
<thead><tr><th>Link trỏ tới</th><th>Tình trạng</th><th>Thay bằng</th></tr></thead>
<tbody>
<tr><td><code>automation-tutorial-update-management</code><br>(Azure Automation Update Management)</td><td><b>Khai tử 31/08/2024</b>, cùng với Log Analytics agent mà nó dựa vào</td><td><b>Azure Update Manager</b> — không cần agent riêng, dùng Azure VM Agent / Connected Machine Agent sẵn có</td></tr>
<tr><td><code>sql-data-sync-*</code><br>(SQL Data Sync)</td><td><b>Khai tử 30/09/2027</b> (đã công bố)</td><td>Azure Data Factory (CDC), transactional replication, linked server, hoặc geo-replica đọc</td></tr>
<tr><td>Index Advisor<br>(<code>optimize-database-performance-using-index-advisor</code>)</td><td>Không còn là tính năng riêng</td><td><b>Database advisor</b> + <b>automatic tuning</b> (CREATE_INDEX / DROP_INDEX)</td></tr>
<tr><td>Data Migration Assistant (DMA)</td><td><b>Khai tử 16/07/2025</b></td><td><b>Azure Migrate</b> hoặc SQL Server migration trong Azure Arc</td></tr>
<tr><td><code>sql-data-warehouse-manage-compute-overview</code></td><td>Azure SQL Data Warehouse đổi tên thành <b>Azure Synapse Analytics</b> (dedicated SQL pool), và Synapse <b>không nằm trong đề DP-300</b></td><td>Bỏ qua. Nếu cần khái niệm scale compute thì đọc phần serverless / scale của Azure SQL Database</td></tr>
</tbody></table>
<div class="tip"><b>Hai link trong danh sách trỏ nhầm chỗ ngay từ đầu.</b> Mục <i>"Calculate resource requirements"</i> và <i>"Configure SQL Server in Azure VMs for scale and performance"</i> đều trỏ tới trang <b>capacity planning của SharePoint</b> — tài liệu đúng là <a href="https://learn.microsoft.com/en-us/azure/azure-sql/virtual-machines/windows/performance-guidelines-best-practices-checklist" target="_blank" rel="noopener">Performance best practices checklist for SQL Server on Azure VM</a>. Mục <i>"Create event notifications based on metrics"</i> trỏ tới tài liệu <b>Azure Database for MySQL</b>, không phải Azure SQL.</div>
</section>

<section id="s0c">
<h3>0.3 Trang này dùng thế nào<a class="anch" href="#s0c">#</a></h3>
<p>Mỗi mục dưới đây tương ứng một nhóm gạch đầu dòng trong danh sách của bạn. Trong mỗi mục, từng gạch đầu dòng có: <b>nội dung cốt lõi</b> mà link đó dạy (đã tổng hợp, không phải chép), <b>link chính thức còn sống</b>, và <b>chỗ trong repo</b> để học tiếp hoặc thực hành.</p>
<p>Ký hiệu: <b>⚠</b> = đã lỗi thời hoặc khai tử · <b>★</b> = có trong skills measured hiện tại và đề hỏi nhiều · <b>○</b> = còn đúng nhưng đề ít hỏi.</p>
<p><b>Ba trang bổ trợ trong repo:</b> <a href="/dp-300/documents">Tài liệu</a> (142 mục lý thuyết) · <a href="/dp-300/tables">Bảng ôn nhanh</a> (con số, giới hạn, bẫy) · <a href="/dp-300/labs">Thực hành</a> (30 lab, 7 bài chạy offline).</p>
</section>

<h2 class="dom">A. Plan and Implement Data Platform Resources (cũ 15–20% → nay 20–25%)</h2>

<section id="a1">
<h3>A.1 Deploy resources by using manual methods<a class="anch" href="#a1">#</a></h3>

<p><b>★ Deploy database offerings on selected platforms</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/single-database-create-quickstart" target="_blank" rel="noopener">Quickstart: create a single database</a></p>
<p>Điều phải nắm không phải các bước bấm nút, mà là <b>thứ tự tài nguyên</b>: một database Azure SQL không tồn tại một mình, nó luôn nằm dưới một <b>logical server</b> (<code>&lt;tên&gt;.database.windows.net</code>). Logical server là một tài nguyên Azure thật, mang admin login, firewall, Entra admin, TDE protector và auditing policy — chứ <b>không</b> phải một máy chủ vật lý. Xoá server là xoá mọi database dưới nó.</p>
<pre><code>Resource group
 └─ Logical server        ← admin login, firewall, Entra admin, TDE protector, audit
     ├─ Database A        ← service tier, backup redundancy, compat level riêng
     └─ Database B
     (hoặc) Elastic pool  ← nhiều database dùng chung một khối tài nguyên</code></pre>
<p>Ba quyết định phải chốt lúc tạo, đổi sau thì tốn công: <b>region</b> (đặt cùng vùng với ứng dụng, mỗi chặng xuyên vùng là vài chục ms), <b>purchasing model</b> (vCore nên chọn — minh bạch và dùng được Azure Hybrid Benefit; DTU là mô hình cũ, đóng gói sẵn), và <b>backup storage redundancy</b> (LRS/ZRS/GRS — <b>không đổi được sau khi tạo</b> ở một số cấu hình, và GRS là điều kiện để geo-restore).</p>

<p><b>★ Configure customized deployment templates</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/single-database-create-arm-template-quickstart" target="_blank" rel="noopener">Quickstart: ARM template</a></p>
<p>Bốn thành phần của một ARM template: <code>parameters</code> (đầu vào, dùng <code>@secure()</code> cho mật khẩu) · <code>variables</code> (giá trị dẫn xuất) · <code>resources</code> (thứ cần tạo, kèm <code>dependsOn</code>) · <code>outputs</code> (giá trị trả về, ví dụ FQDN). <b>Bicep</b> là cú pháp gọn của cùng thứ đó, biên dịch ra chính JSON ấy — <code>az bicep build</code> nhìn thấy ngay.</p>
<div class="warn"><b>Deployment mode là câu hỏi kinh điển:</b> <code>Incremental</code> (mặc định) chỉ thêm/sửa, giữ nguyên tài nguyên không có trong template. <code>Complete</code> <b>XOÁ</b> mọi tài nguyên trong resource group mà template không nhắc tới. Luôn chạy <code>az deployment group what-if</code> trước.</div>
<p>Thực hành: <a href="/dp-300/labs#m2b">lab 2.1</a> (ARM + Bicep, có what-if và đọc lỗi triển khai).</p>

<p><b>⚠ Apply patches and updates for hybrid and IaaS deployment</b> — link cũ trỏ tới <b>Azure Automation Update Management, đã khai tử 31/08/2024</b>. Tài liệu đúng: <a href="https://learn.microsoft.com/en-us/azure/update-manager/overview" target="_blank" rel="noopener">Azure Update Manager</a> và <a href="https://learn.microsoft.com/en-us/azure/azure-sql/virtual-machines/windows/automated-patching" target="_blank" rel="noopener">Automated patching for SQL Server on Azure VMs</a>.</p>
<p>Ba tầng vá, đề phân biệt rất rõ:</p>
<table>
<thead><tr><th>Vá cái gì</th><th>SQL Server on VM</th><th>Managed Instance</th><th>Azure SQL Database</th></tr></thead>
<tbody>
<tr><td>Hệ điều hành</td><td>Bạn lo — <b>Azure Update Manager</b> (hoặc automated patching của SQL IaaS extension)</td><td>Microsoft lo</td><td>Microsoft lo</td></tr>
<tr><td>SQL Server (CU, GDR)</td><td>Bạn lo — automated patching chỉ cài bản đánh dấu <b>Important</b>, <b>không</b> cài CU</td><td>Microsoft lo</td><td>Microsoft lo</td></tr>
<tr><td>Chọn giờ bảo trì</td><td>Maintenance window của automated patching (thứ + giờ + độ dài)</td><td colspan="2"><b>Maintenance window</b>: System default · Weekday 22:00–06:00 · Weekend 22:00–06:00</td></tr>
</tbody></table>
<p><b>Automated patching</b> đi kèm SQL IaaS Agent extension ở chế độ <b>Full</b>, và chỉ cài các bản vá Windows/SQL được đánh dấu Important — <b>Cumulative Update phải cài tay</b>. Đây là điểm hay bị hiểu nhầm là "bật lên rồi thì khỏi lo".</p>
<p>Với máy <b>ngoài Azure</b>: đăng ký qua <b>Azure Arc</b> rồi dùng chính Azure Update Manager — đó là nghĩa của chữ "hybrid" trong gạch đầu dòng này. Xem <a href="/dp-300/documents#s6a">tài liệu mục 6a</a> và <a href="/dp-300/documents#s3">mục 3</a>.</p>
</section>

<section id="a2">
<h3>A.2 Recommend an appropriate database offering based on specific requirements<a class="anch" href="#a2">#</a></h3>

<p><b>○ Evaluate requirements for the deployment</b> — link cũ trỏ tới <a href="https://learn.microsoft.com/en-us/azure/devops/pipelines/targets/azure-sqldb" target="_blank" rel="noopener">Azure Pipelines deploy to Azure SQL Database</a>.</p>
<p>Đây là mảng CI/CD cho database: dùng task <code>SqlAzureDacpacDeployment</code> đẩy <b>DACPAC</b> (schema, so sánh rồi sinh lệnh ALTER) hoặc chạy script SQL. Điểm đáng nhớ cho đề: <b>DACPAC = schema</b>, <b>BACPAC = schema + dữ liệu</b> (dùng cho export/import, không dùng cho backup). Pipeline phải mở firewall cho agent — task có tuỳ chọn tự thêm rồi tự xoá IP của agent.</p>

<p><b>★ Evaluate the functional benefits/impact of possible database offerings</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview" target="_blank" rel="noopener">What is Azure SQL? (IaaS vs PaaS)</a></p>
<p>Đây là trang gốc của <b>mọi câu hỏi "chọn dịch vụ nào"</b> trong đề. Ba con số dung lượng nên thuộc:</p>
<pre><code>Azure SQL Database        tới 128 TB (Hyperscale)
Azure SQL Managed Instance tới  16 TB
SQL Server on Azure VM     tới 256 TB, số database không giới hạn</code></pre>
<p>Và bảng loại trừ theo tính năng — hỏi "app dùng X, chọn gì" thì X quyết định:</p>
<pre><code>Cần quyền OS, phiên bản SQL cũ, tính năng lạ  →  SQL Server on VM
Cần CLR / Service Broker / linked server /
  SQL Agent / cross-database query / DTC       →  Managed Instance
Ứng dụng cloud-native, một database, rẻ nhất,
  co giãn nhất                                 →  Azure SQL Database</code></pre>
<div class="tip">Chi tiết dễ quên: <b>MI có private IP trong VNet sẵn</b>, còn Azure SQL Database phải thêm <b>Private Link</b> mới có. Và tương thích phiên bản trên cả hai PaaS <b>chỉ đạt được qua compatibility level</b>, không có chuyện "chạy bản SQL Server 2016".</div>

<p><b>★ Evaluate the scalability of the possible database offering</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/scale-resources" target="_blank" rel="noopener">Scale resources</a></p>
<p>Bốn trục scale, đề hay trộn lẫn:</p>
<table>
<thead><tr><th>Trục</th><th>Nghĩa là</th><th>Gián đoạn?</th></tr></thead>
<tbody>
<tr><td><b>Scale up/down</b> (vertical)</td><td>Đổi service objective: nhiều vCore/DTU hơn</td><td>Vài giây tới vài phút, <b>ngắt kết nối một lần</b> ở cuối</td></tr>
<tr><td><b>Serverless autoscale</b></td><td>Tự co giãn trong dải min–max vCore, tự ngủ khi rảnh</td><td>Không, trừ lúc thức dậy sau auto-pause (vài chục giây)</td></tr>
<tr><td><b>Elastic pool</b></td><td>Nhiều database dùng chung khối tài nguyên; database vào/ra pool được</td><td>Chuyển database vào/ra pool: ngắn</td></tr>
<tr><td><b>Read scale-out</b></td><td>Đẩy tải đọc sang replica bằng <code>ApplicationIntent=ReadOnly</code></td><td>Không. Miễn phí ở <b>Business Critical</b>; Hyperscale thì thêm named replica</td></tr>
</tbody></table>
<p><b>Sharding</b> là trục thứ năm (scale-out theo chiều ngang) — xem <a href="#a3">A.3</a>.</p>

<p><b>★ Evaluate the HA/DR of the possible database offering</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/high-availability-sla-local-zone-redundancy" target="_blank" rel="noopener">Availability and SLA (Azure SQL Database)</a> · <a href="https://learn.microsoft.com/en-us/azure/azure-sql/virtual-machines/windows/business-continuity-high-availability-disaster-recovery-hadr-overview" target="_blank" rel="noopener">HADR for SQL Server on Azure VMs</a></p>
<p>Điểm cốt lõi mà hai trang này dạy: <b>kiến trúc HA khác nhau theo service tier</b>, và đó là lý do SLA khác nhau.</p>
<pre><code>General Purpose   compute và storage TÁCH RỜI (remote premium storage).
                  Node chết -> gắn lại file vào node mới. Failover vài chục giây.

Business Critical  cụm 4 replica kiểu Always On, local SSD.
                   Failover vài giây, và có replica đọc MIỄN PHÍ.

Hyperscale         log service + page server. Backup/restore gần như tức thời
                   vì dựa trên snapshot, không phụ thuộc dung lượng.

Zone redundant     trải replica sang nhiều availability zone -> SLA cao nhất.</code></pre>
<p>Với <b>SQL Server on VM</b> thì SLA của Azure chỉ bảo đảm <b>máy ảo</b> chạy, <b>không</b> bảo đảm SQL Server bên trong. Muốn HA cho database thì phải tự dựng Always On AG hoặc FCI — và làm vậy <b>không nâng SLA</b>, chỉ giúp bạn đạt được tính sẵn sàng thật.</p>
<p>Bảng RPO/RTO đầy đủ tám giải pháp: <a href="/dp-300/labs#m7z">trang thực hành mục 7.0</a>.</p>

<p><b>★ Evaluate the security aspects of the possible database offering</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/security-overview" target="_blank" rel="noopener">Security overview</a></p>
<p>Trang này dựng khung <b>bốn tầng</b> mà đề dùng để ra câu hỏi tình huống:</p>
<pre><code>1. Network       firewall (server + database) · Private Link · service endpoint ·
                 tắt public network access
2. Access        xác thực (SQL / Entra ID / managed identity) + phân quyền
                 (role, least privilege, custom role)
3. Threat        Defender for SQL: threat detection + vulnerability assessment
4. Information   phân loại dữ liệu · auditing · TDE · Always Encrypted · DDM · RLS · ledger</code></pre>
<p>Câu hỏi tình huống thường mô tả một yêu cầu rồi hỏi chọn công cụ nào — chìa khoá là xác định <b>nó thuộc tầng nào</b>. "Không cho DBA đọc số thẻ" là tầng 4 và chỉ có <b>Always Encrypted</b> đáp ứng; "chặn truy cập từ ngoài VNet" là tầng 1 và đáp án là <b>Private Link + tắt public access</b>. Xem <a href="/dp-300/labs#m3z">bảng "muốn gì dùng cái nào"</a>.</p>
</section>

<section id="a3">
<h3>A.3 Configure resources for scale and performance<a class="anch" href="#a3">#</a></h3>

<p><b>★ Configure Azure SQL Database for scale and performance</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/elastic-pool-overview" target="_blank" rel="noopener">Elastic pool</a> · <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/performance-guidance" target="_blank" rel="noopener">Tune applications and databases for performance</a></p>
<p><b>Elastic pool</b> giải đúng một bài toán: nhiều database mà <b>đỉnh tải lệch nhau về thời gian</b> (mô hình SaaS đa khách hàng). Thay vì mua đủ vCore cho đỉnh của từng database, mua một khối chung. Hai chốt chặn phải đặt: <b>eDTU/vCore min mỗi database</b> (bảo đảm sàn, tránh bị hàng xóm nuốt hết) và <b>max mỗi database</b> (trần, tránh một database ăn hết pool).</p>
<div class="warn">Elastic pool <b>không</b> giúp gì nếu các database cùng đạt đỉnh một lúc — lúc đó nó chỉ là một database to bị chia sẻ. Đề hay dùng chi tiết "tất cả cùng bận vào 9 giờ sáng" để loại đáp án elastic pool.</div>
<p><b>Elastic scale / sharding</b> (link cũ <code>sql-database-elastic-scale-introduction</code>) là chuyện khác hẳn: chia <b>dữ liệu</b> ra nhiều database theo shard key, dùng <b>shard map manager</b> để định tuyến. Elastic pool chia <b>tài nguyên</b>, sharding chia <b>dữ liệu</b> — đề rất hay đánh tráo hai khái niệm này.</p>

<p><b>★ Configure Azure SQL Managed Instance for scale and performance</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/managed-instance/resource-limits" target="_blank" rel="noopener">Resource limits</a></p>
<p>MI có hai service tier với khác biệt quyết định:</p>
<pre><code>General Purpose    remote storage. Giới hạn IOPS/throughput theo KÍCH THƯỚC FILE
                   -> file nhỏ thì I/O chậm. Mẹo thật: cấp file to hơn nhu cầu
                   để mua thêm IOPS.
Business Critical   local SSD + 4 replica + có replica đọc + in-memory OLTP.
                    Dung lượng tối đa nhỏ hơn GP.

Đổi tier / đổi vCore / đổi storage: ONLINE, nhưng mất từ vài phút tới
vài giờ, và kết thúc bằng MỘT lần failover.</code></pre>

<p><b>★ Configure SQL Server in Azure VMs for scale and performance</b> — link cũ trỏ nhầm sang SharePoint. Tài liệu đúng: <a href="https://learn.microsoft.com/en-us/azure/azure-sql/virtual-machines/windows/performance-guidelines-best-practices-checklist" target="_blank" rel="noopener">Performance best practices checklist</a></p>
<p>Đây là danh sách đề hỏi gần như nguyên văn:</p>
<pre><code>VM        dùng series tối ưu bộ nhớ (E, M) — SQL tính license theo CORE,
          nên nhiều RAM/core rẻ hơn nhiều core

Đĩa       data và log TÁCH ổ                    tempdb trên ổ local ephemeral D:
          caching data disk  = ReadOnly          caching log disk = None
          gộp nhiều disk thành storage pool để cộng IOPS
          định dạng NTFS allocation unit = 64 KB

SQL       max server memory: chừa 2–4 GB cho OS
          bật Instant File Initialization (perform volume maintenance tasks)
          bật Lock Pages in Memory
          MAXDOP theo khuyến nghị, cost threshold 25–50
          autogrow theo MB cố định, KHÔNG theo phần trăm
          số data file tempdb = số core, tối đa 8</code></pre>
<div class="tip">Ba dòng caching là chỗ mất điểm nhiều nhất. Lý do: log là ghi tuần tự và <b>phải bền ngay</b>, bật read cache cho nó vừa vô ích vừa nguy hiểm; data là đọc ngẫu nhiên nhiều nên ReadOnly cache có lợi. <b>Không bao giờ</b> đặt caching <code>ReadWrite</code> cho ổ chứa data hay log.</div>

<p><b>★ Configure table partitioning · ★ Configure data compression</b></p>
<p>Đã có bản thực hành chạy được: <a href="/dp-300/labs#m2d">lab 2.3</a> (partition function → scheme → table, partition elimination, sliding window SPLIT/SWITCH/MERGE, <code>sp_estimate_data_compression_savings</code>, nén khác nhau theo từng partition). Lý thuyết: <a href="/dp-300/documents#s8">tài liệu mục 8</a> và <a href="/dp-300/documents#s13">mục 13</a>.</p>

<p><b>★ Evaluate database partitioning techniques, such as database sharding</b> — <a href="https://learn.microsoft.com/en-us/azure/architecture/patterns/sharding" target="_blank" rel="noopener">Sharding pattern</a></p>
<p>Ba chiến lược chia shard, đề hỏi chọn cái nào cho tình huống nào:</p>
<table>
<thead><tr><th>Chiến lược</th><th>Cách chia</th><th>Mạnh</th><th>Yếu</th></tr></thead>
<tbody>
<tr><td><b>Lookup</b></td><td>Bảng tra ánh xạ khoá → shard</td><td>Chuyển shard dễ, cân bằng lại dễ</td><td>Bảng tra thành nút cổ chai và điểm chết đơn</td></tr>
<tr><td><b>Range</b></td><td>Theo khoảng giá trị (ví dụ theo tháng)</td><td>Query theo khoảng chỉ chạm ít shard</td><td>Dễ lệch tải: shard "tháng này" nóng, các shard cũ nguội</td></tr>
<tr><td><b>Hash</b></td><td>Băm khoá rồi chia dư</td><td>Phân bố đều nhất</td><td>Query theo khoảng phải hỏi <b>mọi</b> shard; thêm shard là phải băm lại</td></tr>
</tbody></table>
<p>Ba nguyên tắc chung: chọn <b>shard key có độ phân tán cao và ít thay đổi</b> · thiết kế sao cho <b>truy vấn thường gặp chỉ chạm một shard</b> · chấp nhận rằng <b>join xuyên shard và transaction xuyên shard là rất đắt hoặc bất khả thi</b>. Trên Azure SQL Database, công cụ hỗ trợ là <b>elastic database client library</b> (shard map manager) và <b>elastic query</b>.</p>

<p><b>⚠ Set up SQL Data Sync</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/sql-data-sync-data-sql-server-sql-database" target="_blank" rel="noopener">What is SQL Data Sync</a>. <b>Khai tử 30/09/2027.</b></p>
<p>Vẫn nên biết vì đề chưa chắc đã gỡ: đồng bộ <b>hai chiều</b> giữa nhiều database theo mô hình <b>hub-and-spoke</b> (hub bắt buộc là Azure SQL Database; member có thể là Azure SQL Database hoặc SQL Server on-prem qua <b>Data Sync Agent</b>). Đồng bộ theo <b>lịch, tối thiểu 5 phút</b> — nên nó <b>không</b> phải giải pháp HA/DR và <b>không</b> phải giải pháp gần thời gian thực. Mỗi bảng phải có <b>primary key</b>. Xung đột giải quyết theo <i>hub wins</i> hoặc <i>member wins</i>.</p>
<div class="warn"><b>Bẫy đề:</b> Data Sync đồng bộ <b>hai chiều</b>, geo-replication thì <b>một chiều và chỉ đọc</b>. Câu hỏi "cần ghi ở cả hai đầu" loại geo-replication ngay. Nhưng câu hỏi "cần DR" thì loại Data Sync — nó không bảo đảm RPO nào cả.<br>Thay thế hiện tại: <b>Azure Data Factory</b> với CDC (Microsoft khuyến nghị), transactional replication, hoặc linked server.</div>
</section>

<section id="a4">
<h3>A.4 Evaluate a strategy for moving to Azure<a class="anch" href="#a4">#</a></h3>

<p><b>★ Evaluate requirements for the migration</b> — <a href="https://learn.microsoft.com/en-us/azure/dms/pre-reqs" target="_blank" rel="noopener">Azure DMS prerequisites</a></p>
<p>Điều kiện tiên quyết của Database Migration Service, đề hỏi dưới dạng "vì sao migration không chạy":</p>
<ul>
<li>DMS phải nằm trong một <b>subnet của VNet</b> thông được tới <b>cả nguồn lẫn đích</b>. Nếu nguồn ở on-prem thì cần <b>ExpressRoute hoặc VPN</b>.</li>
<li>NSG của subnet phải mở các port dịch vụ (443, 53, 9354, 445, 12000) theo chiều ra.</li>
<li>Tài khoản nguồn cần quyền đọc backup/metadata; đích cần quyền tạo database.</li>
<li>Với migration <b>online</b>: nguồn phải ở <b>FULL recovery model</b> và phải có sẵn một <b>full backup</b>.</li>
<li>DMS <b>không tự backup</b> — nó dùng full + log backup bạn đặt trên storage. Và nó <b>không dùng differential</b>.</li>
</ul>

<p><b>★ Evaluate offline or online migration strategies</b></p>
<pre><code>OFFLINE   ứng dụng DỪNG từ lúc bắt đầu copy tới lúc xong.
          Đơn giản, ít rủi ro, không phải giữ chuỗi log.
          Chọn khi: database nhỏ, hoặc có cửa sổ dừng đủ dài (cuối tuần).

ONLINE    ứng dụng CHẠY TIẾP trong lúc copy; chỉ dừng vài phút lúc cutover.
          Phức tạp hơn, phải giữ chuỗi log liên tục cho tới cutover.
          Chọn khi: database lớn, hoặc SLA không cho phép dừng lâu.

Câu hỏi quyết định duy nhất: "downtime cho phép" so với "thời gian copy".
   copy < downtime cho phép  ->  offline (luôn chọn cái đơn giản hơn)
   copy > downtime cho phép  ->  online</code></pre>

<p><b>○ Evaluate requirements for the upgrade</b> — <a href="https://learn.microsoft.com/en-us/sql/database-engine/install-windows/supported-version-and-edition-upgrades-2022" target="_blank" rel="noopener">Supported version and edition upgrades</a></p>
<p>Hai luật: nâng cấp <b>tại chỗ</b> chỉ đi được <b>tối đa hai phiên bản chính</b> lùi về trước (ví dụ lên SQL Server 2022 thì nguồn phải từ 2016 trở lên); và nâng cấp <b>edition</b> chỉ đi <b>lên</b> (Express → Standard → Enterprise), <b>không xuống được</b>. Trước khi nâng: chạy assessment, backup mọi database kể cả system database, và kiểm tra tính năng đã bị bỏ.</p>
<p>Sau khi nâng, <b>compatibility level giữ nguyên mức cũ</b> — đây là điểm nối với <a href="/dp-300/labs#m1b">lab 1.1</a>.</p>

<p><b>○ Evaluate offline or online upgrade strategies</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/manage-application-rolling-upgrade" target="_blank" rel="noopener">Manage rolling upgrades</a></p>
<p>Đây là nâng cấp <b>ứng dụng</b>, không phải engine. Hai mẫu:</p>
<pre><code>Rolling upgrade dùng GEO-REPLICATION (không mất dữ liệu):
   tạo secondary -> deploy bản mới trỏ vào secondary -> kiểm thử
   -> planned failover -> secondary thành primary -> dọn

Rolling upgrade dùng DATABASE COPY (đơn giản hơn, có mất dữ liệu):
   copy database -> nâng cấp bản copy -> chuyển ứng dụng sang
   -> dữ liệu ghi vào bản gốc trong khoảng giữa bị MẤT</code></pre>
<p>Quay lui: với geo-replication thì failover ngược; với database copy thì trỏ ứng dụng về bản gốc.</p>
</section>

<section id="a5">
<h3>A.5 Implement a migration or upgrade strategy for moving to Azure<a class="anch" href="#a5">#</a></h3>

<p><b>★ Implement an online migration strategy</b> — <a href="https://learn.microsoft.com/en-us/data-migration/sql-server/managed-instance/database-migration-service" target="_blank" rel="noopener">Migrate SQL Server to SQL MI online</a></p>
<pre><code>1. Assess       Azure Migrate (⚠ KHÔNG còn là DMA — khai tử 16/07/2025)
2. Provision    tạo target (MI / SQL VM / Azure SQL DB) trước
3. DMS          tạo instance DMS trong subnet nối được cả hai đầu
4. Backup       full + log backup liên tục của nguồn, đặt lên Azure Storage container
5. Migrate      tạo project, DMS restore full rồi apply log liên tục
6. Cutover      dừng ứng dụng vài phút -> DMS apply nốt log -> trỏ connection string sang đích</code></pre>
<p>Thứ tự này bị hỏi rất nhiều dưới dạng câu sắp xếp — đã có bản luyện trong <a href="/dp-300/practice">ngân hàng câu hỏi</a> (câu 602).</p>

<p><b>★ Implement an offline migration strategy</b> — <a href="https://learn.microsoft.com/en-us/data-migration/sql-server/database/database-migration-service" target="_blank" rel="noopener">Migrate SQL Server to Azure SQL Database</a></p>
<p>Giống trên nhưng bỏ bước log backup liên tục: dừng ứng dụng → full backup → restore/import → đổi connection string. Với <b>Azure SQL Database</b> (không phải MI), đường phổ biến còn là <b>BACPAC</b>: <code>Export</code> ở nguồn, <code>Import</code> ở đích — chậm và không giữ được mọi thứ, nhưng không cần DMS.</p>
<div class="warn"><b>BACPAC không phải backup.</b> Nó không có tính nhất quán giao dịch trừ khi bạn export từ một bản copy tĩnh. Đề dùng chi tiết này để loại đáp án "dùng BACPAC làm chiến lược sao lưu".</div>

<p><b>○ Implement an online / offline upgrade strategy</b> — xem <a href="#a4">A.4</a>. Nâng cấp offline giữa các edition: <a href="https://learn.microsoft.com/en-us/sql/database-engine/install-windows/upgrade-to-a-different-edition-of-sql-server-setup" target="_blank" rel="noopener">Upgrade to a different edition</a> — chạy lại SQL Server Setup, chọn <b>Edition Upgrade</b>, có dừng dịch vụ.</p>

<p><b>★ Implement Azure SQL Managed Instance database copy and move</b> — <b>gạch đầu dòng MỚI, không có trong danh sách của bạn</b>. <a href="https://learn.microsoft.com/en-us/azure/azure-sql/managed-instance/database-copy-move" target="_blank" rel="noopener">Database copy and move</a></p>
<p>Chuyển hoặc nhân bản một database giữa hai Managed Instance mà không cần backup/restore tay: <b>copy</b> giữ lại bản gốc, <b>move</b> thì xoá bản gốc sau khi xong. Đây là gạch đầu dòng có trong skills measured hiện tại — nhớ kỹ vì học theo danh sách cũ sẽ bỏ sót hoàn toàn.</p>
</section>

<h2 class="dom">B. Implement a Secure Environment (cũ 15–20% → nay 15–20%)</h2>

<section id="b1">
<h3>B.1 Configure database authentication by using platform and database tools<a class="anch" href="#b1">#</a></h3>

<p><b>★ Configure Azure AD authentication</b> (nay gọi là <b>Microsoft Entra ID</b>) — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/authentication-aad-configure" target="_blank" rel="noopener">Configure Entra authentication</a></p>
<p>Chuỗi bắt buộc, và mỗi bước là điều kiện của bước sau:</p>
<pre><code>1. Có Entra tenant
2. Đặt Entra admin cho LOGICAL SERVER  (chỉ MỘT — một user hoặc một NHÓM)
3. Kết nối bằng chính tài khoản Entra admin đó
4. CREATE USER ... FROM EXTERNAL PROVIDER  (chạy TRONG database)
5. Gán role</code></pre>
<div class="warn">Bước 4 <b>phải</b> chạy bằng tài khoản Entra, <b>không</b> chạy được bằng login SQL. Đây là lỗi số một khi triển khai thật, và là đáp án của rất nhiều câu "vì sao lệnh này báo lỗi <i>Principal ... could not be created</i>".</div>
<p>Vì chỉ có một Entra admin cho mỗi server, thực tế luôn trỏ nó vào một <b>nhóm Entra</b> rồi thêm người vào nhóm — cách duy nhất để nhiều người cùng quản trị.</p>

<p><b>★ Create users from Azure AD identities</b> — ba loại principal, cú pháp giống nhau:</p>
<pre><code>CREATE USER [an.nguyen@contoso.com] FROM EXTERNAL PROVIDER;   -- user
CREATE USER [grp-dba-readers]       FROM EXTERNAL PROVIDER;   -- NHÓM   ← nên dùng
CREATE USER [mi-webapp-prod]        FROM EXTERNAL PROVIDER;   -- managed identity

-- Kiểm chứng: type = E (external user) / X (external group)
SELECT name, type_desc, authentication_type_desc FROM sys.database_principals
WHERE type IN ('E','X');</code></pre>
<p>Đây đều là <b>contained database user</b> — không có login ở master. Hệ quả quan trọng: database mang theo được danh tính khi <b>failover sang server khác</b>, nên đây là lựa chọn đúng khi có failover group. Xem <a href="/dp-300/labs#m3b">lab 3.2</a>.</p>

<p><b>★ Configure security principals</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/authentication-aad-service-principal" target="_blank" rel="noopener">Service principal authentication</a></p>
<p><b>Managed identity</b> là câu trả lời đúng cho mọi câu hỏi dạng "loại bỏ credential khỏi connection string / khỏi source code". Hai loại: <b>system-assigned</b> (gắn liền vòng đời tài nguyên, xoá tài nguyên là mất) và <b>user-assigned</b> (tài nguyên độc lập, gán được cho nhiều thứ — hợp khi nhiều service cần cùng một danh tính).</p>
<p>Logical server cũng cần managed identity của chính nó cho hai việc: <b>TDE với customer-managed key</b> (để unwrap key trong Key Vault) và <b>tạo Entra user cho service principal</b>.</p>
</section>

<section id="b2">
<h3>B.2 Configure database authorization by using platform and database tools<a class="anch" href="#b2">#</a></h3>

<p><b>★ Configure database and object-level permissions using graphical tools</b> — <a href="https://learn.microsoft.com/en-us/sql/relational-databases/security/authentication-access/getting-started-with-database-engine-permissions" target="_blank" rel="noopener">Getting started with permissions</a></p>
<p>Mô hình phân cấp: <b>securable</b> (server → database → schema → object → column) và quyền <b>kế thừa xuống</b>. Cấp <code>SELECT</code> trên schema là cấp cho mọi bảng trong đó, kể cả bảng tạo sau.</p>
<pre><code>Server role (fixed)   sysadmin · serveradmin · securityadmin · dbcreator · ...
                      Azure SQL Database: chỉ có loginmanager, dbmanager ở master
Database role (fixed) db_owner · db_datareader · db_datawriter · db_ddladmin ·
                      db_securityadmin · db_denydatareader · ...
Custom role           CREATE ROLE  -> GRANT đúng thứ cần  -> ALTER ROLE ADD MEMBER</code></pre>

<p><b>★ Apply principle of least privilege for all securables</b> — <a href="https://learn.microsoft.com/en-us/sql/relational-databases/security/permissions-database-engine" target="_blank" rel="noopener">Permissions (Database Engine)</a></p>
<p>Bốn luật quyết định kết quả cuối cùng, đề hỏi liên tục:</p>
<ol>
<li><b>DENY luôn thắng GRANT</b>, ở mọi cấp — trừ một ngoại lệ: thành viên <code>db_owner</code>/sysadmin bỏ qua kiểm tra quyền hoàn toàn.</li>
<li>Quyền <b>cộng dồn</b> qua các role: user thuộc ba role thì có hợp của cả ba (rồi mới trừ DENY).</li>
<li><b>Ownership chaining</b>: nếu view và bảng nền cùng owner, user chỉ cần quyền trên view — <b>không</b> cần quyền trên bảng. Đây là cách chuẩn để cấp quyền hạt mịn.</li>
<li>DENY ở <b>cấp cột</b> thắng GRANT ở cấp bảng.</li>
</ol>
<p>Có bản chứng minh chạy được: <a href="/dp-300/labs#m3d">lab 3.4 phần A</a> dùng <code>EXECUTE AS USER</code> và <code>HAS_PERMS_BY_NAME</code> để nhìn tận mắt luật 1 và 4.</p>
</section>

<section id="b3">
<h3>B.3 Implement security for data at rest<a class="anch" href="#b3">#</a></h3>

<p><b>★ Implement Transparent Data Encryption (TDE)</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/transparent-data-encryption-tde-overview" target="_blank" rel="noopener">TDE overview</a></p>
<p>TDE mã hoá <b>file dữ liệu, file log và mọi bản backup</b> — nó bảo vệ khỏi kịch bản <i>ai đó lấy được file hoặc ổ đĩa</i>. Nó <b>không</b> giấu dữ liệu khỏi bất kỳ ai đã đăng nhập được, và <b>không</b> mã hoá dữ liệu trên đường truyền.</p>
<pre><code>SQL Server (tự quản):  DMK -> Certificate -> DEK -> ALTER DATABASE SET ENCRYPTION ON
                       ⚠ PHẢI backup certificate + private key. Mất là mất database.

Azure SQL (mặc định):  BẬT SẴN với service-managed key. Không phải làm gì.

Azure SQL (BYOK/CMK):  Key Vault (soft delete + purge protection)
                        -> RSA key
                        -> managed identity trên logical server
                        -> cấp get / wrapKey / unwrapKey
                        -> đặt làm TDE protector
                       Thiếu unwrapKey -> database chuyển sang INACCESSIBLE.</code></pre>
<p>Thực hành đủ chuỗi SQL Server: <a href="/dp-300/labs#m3d">lab 3.4 phần D1</a>, kèm cách đọc <code>encryption_state</code> 1→5.</p>

<p><b>★ Implement object-level encryption</b> — link cũ trỏ tới Always Encrypted với Key Vault. Hai thứ khác nhau, đừng lẫn:</p>
<table>
<thead><tr><th></th><th>Mã hoá cấp cột (T-SQL)</th><th>Always Encrypted</th></tr></thead>
<tbody>
<tr><td>Mã hoá ở đâu</td><td>Trong engine</td><td><b>Ở phía client</b>, trong driver</td></tr>
<tr><td>DBA thấy plaintext?</td><td>Có, nếu mở được key</td><td><b>Không bao giờ</b></td></tr>
<tr><td>Khoá</td><td>DMK → certificate → symmetric key</td><td>CMK (Windows cert store / <b>Key Vault</b>) → CEK</td></tr>
<tr><td>Cú pháp</td><td><code>ENCRYPTBYKEY</code> / <code>DECRYPTBYKEY</code>, phải <code>OPEN SYMMETRIC KEY</code></td><td>Trong suốt với ứng dụng, bật <code>Column Encryption Setting=Enabled</code></td></tr>
<tr><td>Ứng dụng phải sửa?</td><td>Có, viết lại query</td><td>Không, chỉ đổi connection string</td></tr>
</tbody></table>
<div class="tip"><b>DETERMINISTIC</b> cho phép <code>=</code>, JOIN, GROUP BY và index, nhưng <b>lộ tần suất</b> (cột "giới tính" mã hoá deterministic là vô nghĩa). <b>RANDOMIZED</b> an toàn hơn nhưng không so sánh được. <b>VBS enclave</b> (SQL Server 2019+ secure enclave, 2022 VBS, Azure SQL DB) mở khoá được cả <code>BETWEEN</code>/<code>LIKE</code> và cho phép mã hoá tại chỗ mà không kéo dữ liệu về client.</div>
<p>Chưa mở key thì <code>DECRYPTBYKEY</code> trả <b>NULL chứ không báo lỗi</b> — bẫy chết người khi debug, có minh hoạ ở <a href="/dp-300/labs#m3d">lab 3.4 phần D2</a>.</p>

<p><b>★ Implement Dynamic Data Masking</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/dynamic-data-masking-overview" target="_blank" rel="noopener">DDM overview</a></p>
<p>Năm hàm mask: <code>default()</code> · <code>email()</code> · <code>random(a,b)</code> (chỉ cho kiểu số) · <code>partial(prefix,"xxx",suffix)</code> · <code>datetime()</code>. Quyền <b>UNMASK</b> mở lại; từ SQL Server 2022 và Azure SQL cấp được ở <b>cấp bảng và cấp cột</b> chứ không chỉ cả database.</p>
<div class="warn"><b>DDM không phải biện pháp bảo mật</b>, và đề biết điều đó. Nó chỉ che khi <b>hiển thị</b>; mệnh đề <code>WHERE</code> vẫn chạy trên <b>giá trị thật</b>, nên dò nhị phân là moi ra được. <a href="/dp-300/labs#m3d">Lab 3.4 phần B</a> phá nó trong ba dòng SQL. Muốn bảo vệ thật: Always Encrypted, hoặc không cấp quyền đọc cột đó.</div>

<p><b>○ Implement Azure Key Vault and disk encryption for Azure VMs</b> — <a href="https://learn.microsoft.com/en-us/azure/virtual-machines/disk-encryption-overview" target="_blank" rel="noopener">Azure disk encryption</a></p>
<p>Ba tầng mã hoá đĩa cho VM, đề hỏi phân biệt:</p>
<pre><code>Server-side encryption (SSE)   BẬT SẴN, không tắt được, mã hoá ở tầng lưu trữ.
                               Platform-managed key, hoặc CMK qua disk encryption set.
Azure Disk Encryption (ADE)    BitLocker (Windows) / dm-crypt (Linux) TRONG khách.
                               Key nằm ở Key Vault. Mã hoá ở tầng OS.
Encryption at host             Mã hoá cả dữ liệu tạm trên máy chủ vật lý,
                               kể cả ổ ephemeral và cache.</code></pre>
<p>Với SQL Server trên VM, cả ba tầng này <b>độc lập</b> với TDE — chồng lên nhau được, và giải quyết mối đe doạ khác nhau.</p>
</section>

<section id="b4">
<h3>B.4 Implement security for data in transit<a class="anch" href="#b4">#</a></h3>

<p><b>★ Configure server and database-level firewall rules</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/firewall-configure" target="_blank" rel="noopener">Firewall rules</a></p>
<pre><code>Server-level      quản bằng portal / CLI / ARM (và T-SQL ở master:
                  sp_set_firewall_rule). Áp cho MỌI database trên server.
Database-level    quản bằng T-SQL TRONG database đó (sp_set_database_firewall_rule).
                  Chỉ áp cho database đó. KHÔNG có trên Managed Instance.

Thứ tự xét:  server-level TRƯỚC. Khớp -> vào thẳng, không xét tiếp.
             Không khớp -> mới xét database-level của đúng database mà
             connection string chỉ định. Không nêu tên database -> không
             có gì để xét -> bị chặn.</code></pre>
<div class="warn">Rule <code>0.0.0.0 – 0.0.0.0</code> nghĩa là <b>"Allow Azure services and resources to access this server"</b> — mọi tài nguyên Azure của <b>mọi khách hàng</b>, không phải "mở cho cả thế giới" và cũng không phải "an toàn". Sản xuất nên dùng <b>Private Link</b> + <code>--public-network-access Disabled</code>.</div>
<p>Thực hành: <a href="/dp-300/labs#m3a">lab 3.1</a>.</p>

<p><b>★ Implement Always Encrypted</b> — xem <a href="#b3">B.3</a> (bảng so với mã hoá cấp cột). Bổ sung về <b>TLS</b>, phần "in transit" thật sự:</p>
<pre><code>minimalTlsVersion trên logical server: đặt 1.2 (mặc định hiện nay).
Connection string: Encrypt=True; TrustServerCertificate=False
   TrustServerCertificate=True làm mất tác dụng chống man-in-the-middle
   -> đáp án SAI trong mọi câu hỏi về bảo mật đường truyền.
Azure SQL Database CƯỠNG CHẾ mã hoá đường truyền, không tắt được.
SQL Server on VM thì phải tự cấu hình certificate và Force Encryption.</code></pre>
</section>

<section id="b5">
<h3>B.5 Implement compliance controls for sensitive data<a class="anch" href="#b5">#</a></h3>

<p><b>★ Apply a data classification strategy</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/data-discovery-and-classification-overview" target="_blank" rel="noopener">Data discovery &amp; classification</a></p>
<p>Hai thuộc tính gắn lên cột: <b>label</b> (mức nhạy cảm — Public / General / Confidential / Highly Confidential…) và <b>information type</b> (loại dữ liệu — Contact Info, Financial, Credentials…). Bằng T-SQL:</p>
<pre><code>ADD SENSITIVITY CLASSIFICATION TO dbo.Customers.Email
WITH (LABEL = 'Confidential - GDPR', INFORMATION_TYPE = 'Contact Info', RANK = HIGH);

SELECT * FROM sys.sensitivity_classifications;</code></pre>
<div class="warn"><b>Classification là metadata, tự nó KHÔNG chặn ai cả.</b> Nó chỉ có giá trị khi đi kèm <b>auditing</b> (audit log ghi kèm nhãn nhạy cảm của cột bị đọc) và các báo cáo tuân thủ. Thứ tự đúng khi đề hỏi "đáp ứng yêu cầu tuân thủ": <b>classify → audit → siết quyền → mask/mã hoá</b>.</div>

<p><b>★ Configure server and database audits</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/auditing-overview" target="_blank" rel="noopener">Auditing</a></p>
<table>
<thead><tr><th></th><th>SQL Server / VM</th><th>Azure SQL Database</th></tr></thead>
<tbody>
<tr><td>Cấu hình</td><td><code>CREATE SERVER AUDIT</code> + audit specification (server hoặc database)</td><td>Auditing policy trên logical server hoặc từng database</td></tr>
<tr><td>Đích ghi</td><td>File · Windows Security log · Application log</td><td><b>Storage account</b> · <b>Log Analytics</b> · <b>Event Hubs</b></td></tr>
<tr><td>Đọc lại</td><td><code>sys.fn_get_audit_file</code></td><td><code>sys.fn_get_audit_file</code> (từ storage) hoặc KQL trong Log Analytics</td></tr>
</tbody></table>
<p><code>ON_FAILURE</code> có ba giá trị và đề rất thích hỏi giá trị thứ hai: <b>CONTINUE</b> (chạy tiếp, mất log) · <b>SHUTDOWN</b> (<b>tắt cả instance</b>) · <b>FAIL_OPERATION</b> (chỉ chặn thao tác bị audit). Audit cấp server <b>đè lên</b> audit cấp database — bật cả hai thì sự kiện bị ghi hai lần.</p>
<p>Thực hành: <a href="/dp-300/labs#m3d">lab 3.4 phần F</a> (tạo audit, sinh sự kiện, đọc lại bằng <code>fn_get_audit_file</code>).</p>

<p><b>★ Implement data change tracking</b> — <a href="https://learn.microsoft.com/en-us/sql/relational-databases/track-changes/track-data-changes-sql-server" target="_blank" rel="noopener">Track data changes</a></p>
<table>
<thead><tr><th></th><th>Change Tracking</th><th>Change Data Capture (CDC)</th><th>Temporal table</th><th>Ledger</th></tr></thead>
<tbody>
<tr><td>Biết được</td><td>Dòng nào đổi, thao tác gì</td><td><b>Giá trị cũ và mới</b></td><td>Toàn bộ lịch sử theo thời gian</td><td>Lịch sử + <b>bằng chứng mật mã</b></td></tr>
<tr><td>Đọc từ</td><td>Bảng nội bộ, đồng bộ</td><td><b>Transaction log</b>, bất đồng bộ (capture job)</td><td>Bảng history</td><td>Ledger view + digest</td></tr>
<tr><td>Chi phí</td><td>Nhẹ</td><td>Nặng hơn</td><td>Trung bình</td><td>Trung bình</td></tr>
<tr><td>Dùng cho</td><td>Đồng bộ một chiều, biết "cần lấy lại dòng nào"</td><td>ETL, feed dữ liệu sang hệ khác</td><td>Truy vấn "dữ liệu lúc đó thế nào"</td><td>Chống sửa lén, kiểm toán</td></tr>
</tbody></table>
<p><b>Con số phải nhớ:</b> CDC trên Azure SQL Database cần tối thiểu <b>1 vCore hoặc 100 DTU (S3)</b> — Basic/S0/S1/S2 không bật được. <code>__$operation</code>: 1 delete · 2 insert · <b>3 giá trị TRƯỚC update</b> · <b>4 giá trị SAU update</b>. Cả bốn thứ đều có bản chạy được ở <a href="/dp-300/labs#m3d">lab 3.4 phần E</a>.</p>

<p><b>★ Perform a vulnerability assessment</b> — <a href="https://learn.microsoft.com/en-us/azure/defender-for-cloud/sql-azure-vulnerability-assessment-overview" target="_blank" rel="noopener">SQL vulnerability assessment</a></p>
<p>Quét database theo một bộ <b>rule</b> (quyền thừa, cấu hình bảo mật lỏng, dữ liệu nhạy cảm chưa bảo vệ), mỗi phát hiện có mức rủi ro và lệnh khắc phục. Khái niệm cốt lõi là <b>baseline</b>: kết quả nào là chấp nhận được trong môi trường của bạn thì "approve as baseline", lần quét sau nó không báo nữa — chỉ báo cái <b>lệch khỏi baseline</b>.</p>
<p>Vulnerability assessment nằm trong <b>Microsoft Defender for SQL</b> (tính tiền theo <b>server</b>, không theo database). Cấu hình <b>classic</b> cần một storage account để lưu kết quả; cấu hình <b>express</b> thì không. Cùng với threat detection, đây là nội dung <a href="/dp-300/labs#m3c">lab 3.3</a>.</p>
</section>

<h2 class="dom">C. Monitor and Optimize Operational Resources (cũ 15–20%)</h2>

<section id="c1">
<h3>C.1 Monitor activity and performance<a class="anch" href="#c1">#</a></h3>

<p><b>★ Prepare an operational performance baseline</b> — <a href="https://learn.microsoft.com/en-us/sql/relational-databases/performance/establish-a-performance-baseline" target="_blank" rel="noopener">Establish a performance baseline</a></p>
<p>Baseline không phải "một lần đo", mà là <b>tập chỉ số thu ở các thời điểm đại diện</b>: giờ cao điểm, giờ thấp điểm, lúc chạy job bảo trì, lúc đóng sổ cuối tháng. Không có baseline thì mọi câu "hệ thống chậm" đều không trả lời được, vì không biết thế nào là bình thường.</p>
<p>Tối thiểu phải thu: CPU · I/O (đọc/ghi mỗi giây, độ trễ) · bộ nhớ (page life expectancy) · <b>batch requests/sec</b> (thước đo khối lượng công việc thật) · top wait type · thời gian chạy của những query quan trọng nhất · dung lượng và tốc độ tăng của file.</p>
<div class="tip">Baseline phải kèm <b>khối lượng công việc</b>. "CPU 60%" là vô nghĩa nếu không biết lúc đó bao nhiêu batch/sec — CPU 60% ở 5 000 batch/sec là khoẻ, ở 200 batch/sec là bệnh.</div>

<p><b>★ Determine sources for performance metrics</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-monitor/data-sources" target="_blank" rel="noopener">Azure Monitor data sources</a></p>
<pre><code>Metrics    số, lấy mẫu đều, rẻ, giữ 93 ngày, gần realtime.
           Dùng cho alert nhanh: cpu_percent, log_write_percent, deadlock...
Logs       bản ghi có cấu trúc, đưa vào Log Analytics, truy vấn bằng KQL.
           Mạnh hơn, chậm hơn, tốn tiền hơn. Dùng cho điều tra và báo cáo.

Bật bằng DIAGNOSTIC SETTINGS trên tài nguyên. Category đáng bật cho Azure SQL:
  SQLInsights · QueryStoreRuntimeStatistics · QueryStoreWaitStatistics
  Errors · Blocks · Deadlocks · Timeouts · AutomaticTuning · Basic (metrics)</code></pre>

<p><b>★ Interpret performance metrics</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/monitor-tune-overview" target="_blank" rel="noopener">Monitoring and performance tuning</a></p>
<p>Trên Azure SQL Database, mọi chỉ số đều là <b>phần trăm của trần tier</b>, không phải phần trăm của phần cứng. Ba nguồn:</p>
<pre><code>sys.dm_db_resource_stats          15 giây/mẫu, giữ 1 giờ    ← chính xác nhất
sys.resource_stats (ở master)      5 phút/mẫu,  giữ 14 ngày  ← xem xu hướng
sys.dm_user_db_resource_governance trần THẬT của tier hiện tại

avg_cpu_percent · avg_data_io_percent · avg_log_write_percent
max_worker_percent · max_session_percent

Cái nào chạm 100 TRƯỚC thì đó là trần đang bó -> đó là lý do phải scale,
và cũng là câu trả lời cho "nên lên tier nào".</code></pre>

<p><b>★ Configure and monitor activity and performance at infrastructure, server, service and database levels</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/monitoring-with-dmvs" target="_blank" rel="noopener">Monitoring with DMVs</a></p>
<p>Bốn tầng, bốn bộ công cụ khác nhau — đề hay hỏi "dùng gì để xem X":</p>
<table>
<thead><tr><th>Tầng</th><th>SQL Server / VM</th><th>Azure SQL</th></tr></thead>
<tbody>
<tr><td>Hạ tầng (máy, đĩa, mạng)</td><td>PerfMon, <code>sys.dm_os_*</code></td><td>Azure Monitor metrics của tài nguyên</td></tr>
<tr><td>Instance / logical server</td><td><code>sys.dm_os_wait_stats</code>, <code>sys.dm_os_schedulers</code></td><td>Metrics ở cấp server, <b>database watcher</b></td></tr>
<tr><td>Database</td><td><code>sys.dm_db_*</code>, Query Store</td><td><code>sys.dm_db_resource_stats</code>, Query Store, <b>Query Performance Insight</b></td></tr>
<tr><td>Phiên / query</td><td><code>sys.dm_exec_requests</code>, <code>sys.dm_exec_sessions</code>, Extended Events</td><td>y hệt, XEvents ghi ra ring buffer hoặc blob</td></tr>
</tbody></table>
<p><b>Database watcher</b> là công cụ mới trong skills measured hiện tại mà danh sách cũ không có: giám sát nhiều Azure SQL Database / MI / elastic pool tập trung, dữ liệu đổ vào một kho Fabric hoặc Data Explorer, giữ được lâu hơn nhiều so với DMV. Xem <a href="/dp-300/documents#s48a">tài liệu mục 48a</a>.</p>
<p>Bộ query DMV đầy đủ, có lọc nhiễu, ở <a href="/dp-300/labs#m4a">lab 4.1</a> — kể cả bảng đọc từng wait type ra hành động.</p>
</section>

<section id="c2">
<h3>C.2 Implement performance-related maintenance tasks<a class="anch" href="#c2">#</a></h3>

<p><b>★ Implement index maintenance tasks</b> — <a href="https://learn.microsoft.com/en-us/sql/relational-databases/indexes/reorganize-and-rebuild-indexes" target="_blank" rel="noopener">Reorganize and rebuild indexes</a></p>
<pre><code>frag < 5%        không làm gì
frag 5–30%       REORGANIZE     online, ít log, KHÔNG cập nhật statistics,
                                dừng giữa chừng được
frag > 30%       REBUILD        tạo lại index, CÓ cập nhật statistics kèm FULLSCAN,
                                offline trừ khi WITH (ONLINE = ON)
page_count < 1000  bỏ qua hết — con số phân mảnh vô nghĩa ở cỡ đó</code></pre>
<div class="warn"><b>Sai lầm kinh điển của maintenance plan tự viết:</b> REBUILD xong lại chạy <code>UPDATE STATISTICS ... WITH SAMPLE</code> → thống kê vừa được FULLSCAN bị thay bằng bản lấy mẫu, <b>tệ hơn lúc chưa làm gì</b>.</div>
<p>Trên <b>Azure SQL Database</b> không có SQL Agent, nên tác vụ này chạy bằng <b>Elastic Jobs</b>, <b>Azure Automation runbook</b>, Logic Apps hoặc Functions — xem <a href="/dp-300/labs#m6b">lab 6.2</a> và <a href="/dp-300/labs#m6d">6.3</a>. Bản chạy offline: <a href="/dp-300/labs#m4c">lab 4.3</a>.</p>

<p><b>★ Implement statistics maintenance tasks</b> — <a href="https://learn.microsoft.com/en-us/sql/relational-databases/statistics/statistics" target="_blank" rel="noopener">Statistics</a></p>
<pre><code>AUTO_CREATE_STATISTICS      ON mặc định — tự tạo thống kê một cột khi cần
AUTO_UPDATE_STATISTICS      ON mặc định — tự cập nhật khi vượt ngưỡng
AUTO_UPDATE_STATISTICS_ASYNC OFF mặc định — bật thì query hiện tại chạy với
                            thống kê CŨ, bản cập nhật chạy nền

Ngưỡng tự cập nhật:
  SQL Server 2016 / compat 130 trở lên:  ĐỘNG, ~ SQRT(1000 × số dòng)
  Trước đó:                              20% số dòng + 500  (trace flag 2371
                                         để bật ngưỡng động sớm)</code></pre>
<p>Kiểm tra bằng <code>sys.dm_db_stats_properties</code>: cột <code>modification_counter</code> so với <code>rows</code> cho biết thống kê "cũ" tới mức nào; <code>rows_sampled</code>/<code>rows</code> cho biết mẫu có đủ dày không. <a href="/dp-300/labs#m5b">Lab 5.2</a> in sẵn bảng này.</p>

<p><b>★ Configure database auto-tuning</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/automatic-tuning-overview" target="_blank" rel="noopener">Automatic tuning overview</a></p>
<table>
<thead><tr><th>Tuỳ chọn</th><th>Azure SQL Database</th><th>Managed Instance</th><th>SQL Server</th></tr></thead>
<tbody>
<tr><td>FORCE_LAST_GOOD_PLAN</td><td>✅ (bật theo mặc định Azure)</td><td>✅</td><td>✅</td></tr>
<tr><td>CREATE_INDEX</td><td>✅ (tắt theo mặc định)</td><td>❌</td><td>❌</td></tr>
<tr><td>DROP_INDEX</td><td>✅ (tắt theo mặc định)</td><td>❌</td><td>❌</td></tr>
</tbody></table>
<p>Những chi tiết vận hành mà tài liệu nói rõ và đề có thể hỏi:</p>
<ul>
<li>Thay đổi chỉ áp <b>lúc tài nguyên rảnh</b>, và hệ thống <b>tự xác minh</b> có cải thiện thật không — không thì <b>tự quay lui</b>. Xác minh mất từ <b>30 phút tới 72 giờ</b> tuỳ tần suất chạy của query.</li>
<li><b>Áp khuyến nghị bằng T-SQL thì MẤT cơ chế xác minh và quay lui tự động.</b> Muốn có nó thì phải để hệ thống tự áp, hoặc bấm qua portal.</li>
<li><code>DROP_INDEX</code> xoá index <b>không dùng trong 90 ngày</b> và index trùng lặp; <b>không bao giờ</b> xoá unique index. Trên Premium/Business Critical nó <b>chỉ</b> xoá index trùng, không xoá index không dùng.</li>
<li><code>CREATE_INDEX</code> không đề xuất cho bảng có clustered index hoặc heap <b>lớn hơn 10 GB</b>, và không đề xuất nếu index mới đẩy dung lượng vượt <b>90%</b> trần.</li>
<li>Lịch sử tuning giữ <b>21 ngày</b>; muốn lâu hơn thì bật diagnostic setting <code>AutomaticTuning</code>.</li>
<li>Nên cấu hình ở <b>cấp logical server</b> rồi để database kế thừa (<code>SET AUTOMATIC_TUNING = INHERIT</code>).</li>
</ul>
<p>Xem khuyến nghị đang chờ: <code>sys.dm_db_tuning_recommendations</code>. Thực hành: <a href="/dp-300/labs#m4e">lab 4.5</a>.</p>

<p><b>★ Manage storage capacity</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/file-space-manage" target="_blank" rel="noopener">Manage file space</a></p>
<p>Bốn con số khác nhau, đề hay đánh tráo:</p>
<pre><code>data space USED       dữ liệu thật
data space ALLOCATED   chỗ file đã xin của hệ thống (≥ used)
MAX data size          trần của service tier
allocated but UNUSED   = allocated − used   ← chỉ chỗ này mới thu hồi được

Bạn bị TÍNH TIỀN theo ALLOCATED, không theo USED.
Xoá dữ liệu KHÔNG tự trả lại chỗ -> phải shrink mới thu hồi.

DBCC SHRINKDATABASE / SHRINKFILE  → gây PHÂN MẢNH nặng.
Nếu buộc phải shrink: shrink xong PHẢI rebuild index.
Đừng bao giờ bật AUTO_SHRINK.</code></pre>
</section>

<section id="c3">
<h3>C.3 Identify performance-related issues<a class="anch" href="#c3">#</a></h3>

<p><b>★ Configure Query Store to collect performance data</b> — <a href="https://learn.microsoft.com/en-us/sql/relational-databases/performance/monitoring-performance-by-using-the-query-store" target="_blank" rel="noopener">Query Store</a></p>
<pre><code>OPERATION_MODE          READ_WRITE (thu thập) · READ_ONLY (chỉ đọc) · OFF
QUERY_CAPTURE_MODE      ALL · AUTO (bỏ query lẻ tẻ — NÊN DÙNG) · CUSTOM (2019+) · NONE
MAX_STORAGE_SIZE_MB     đầy -> tự chuyển READ_ONLY và NGỪNG THU THẬP
SIZE_BASED_CLEANUP_MODE AUTO  ← để AUTO thì nó tự dọn thay vì tự chết
STALE_QUERY_THRESHOLD_DAYS  bao lâu thì bỏ query không còn chạy
DATA_FLUSH_INTERVAL_SECONDS  bao lâu đẩy buffer xuống đĩa
INTERVAL_LENGTH_MINUTES  độ dài một khoảng thống kê (mặc định 60)</code></pre>
<p>Kiểm tra sức khoẻ bằng <code>sys.database_query_store_options</code>: <code>readonly_reason</code> khác 0 nghĩa là <b>đã ngừng thu thập</b> — lý do phổ biến nhất là đầy dung lượng. Query Store <b>bật sẵn</b> trên Azure SQL Database và MI; trên SQL Server 2022 bật sẵn cho database <b>mới tạo</b>, database cũ phải bật tay.</p>

<p><b>★ Identify sessions that cause blocking</b></p>
<pre><code>-- Ai đang chặn ai
SELECT r.session_id, r.blocking_session_id, r.wait_type, r.wait_time, r.wait_resource
FROM   sys.dm_exec_requests r WHERE r.blocking_session_id &lt;&gt; 0;

-- Khoá đang chờ
SELECT request_session_id, resource_type, request_mode, request_status
FROM   sys.dm_tran_locks WHERE request_status = 'WAIT';</code></pre>
<p>Bốn cách xử lý, theo thứ tự nên thử: <b>rút ngắn transaction</b> → <b>thêm index</b> → <b>bật RCSI</b> → (cuối cùng, gần như luôn là đáp án sai trong đề) <b>NOLOCK</b>. Azure SQL Database <b>bật RCSI sẵn</b>, SQL Server thì không — khác biệt hành vi kinh điển. Bản dựng blocking bằng hai phiên: <a href="/dp-300/labs#m4b">lab 4.2</a>.</p>

<p><b>★ Assess growth/fragmentation of databases and logs</b></p>
<pre><code>-- Phân mảnh
sys.dm_db_index_physical_stats(DB_ID(), NULL, NULL, NULL, 'SAMPLED')
   chế độ quét: LIMITED (mặc định, nhanh nhất) · SAMPLED (1%) · DETAILED (mọi page)

-- Vì sao log không cắt được  ← câu hỏi hay gặp nhất về log
SELECT name, log_reuse_wait_desc FROM sys.databases;
   LOG_BACKUP        FULL recovery mà không ai backup log  ← phổ biến nhất
   ACTIVE_TRANSACTION  có transaction mở lâu
   REPLICATION       log reader chưa đọc xong
   AVAILABILITY_REPLICA  secondary tụt lại
   NOTHING           lành mạnh</code></pre>
<p>Sự kiện tăng file nằm sẵn trong <b>default trace</b> (<code>sys.fn_trace_gettable</code>) — cách rẻ nhất để trả lời "database phình lúc nào".</p>

<p><b>★ Assess performance-related database configuration parameters</b></p>
<pre><code>AUTO_CLOSE     phải OFF. Bật thì database đóng khi hết kết nối cuối và phải
               khởi động lại ở kết nối kế -> độ trễ bất thường, plan cache bay sạch.
AUTO_SHRINK    phải OFF. Shrink liên tục -> phân mảnh liên tục -> grow lại
               -> vòng lặp phá hiệu năng.
Autogrow       theo MB CỐ ĐỊNH, không theo phần trăm (file càng lớn mỗi lần
               grow càng treo lâu). Cấp đủ từ đầu để hiếm khi phải grow.
IFI            Instant File Initialization chỉ áp cho DATA file. LOG file
               KHÔNG BAO GIỜ được hưởng -> grow log luôn đắt.</code></pre>
<p>Kiểm tra nhanh: <code>SELECT name, is_auto_close_on, is_auto_shrink_on FROM sys.databases;</code> và bảng file space ở <a href="/dp-300/labs#m4d">lab 4.4 phần E3</a>.</p>
</section>

<section id="c4">
<h3>C.4 Configure resources for optimal performance<a class="anch" href="#c4">#</a></h3>

<p><b>★ Configure server and service account settings for performance</b></p>
<pre><code>max server memory        chừa 2–4 GB cho OS (nhiều hơn nếu chạy SSIS/SSAS cùng máy)
max degree of parallelism ≤8 core -> = số core; >8 một NUMA -> 8;
                          nhiều NUMA -> số core mỗi node, tối đa 16
cost threshold for parallelism  mặc định 5 QUÁ THẤP -> 25–50
optimize for ad hoc workloads   ON nếu nhiều query một-lần (đỡ phình plan cache)
tempdb                   số data file = số core, tối đa 8; cùng kích thước;
                          cùng autogrow

Quyền cho service account (Windows):
  Perform volume maintenance tasks  -> bật Instant File Initialization
  Lock pages in memory              -> chống OS phân trang bộ nhớ SQL ra đĩa</code></pre>
<div class="warn"><b>Azure SQL Database không có <code>sp_configure</code>.</b> MAXDOP đặt bằng <code>ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = n;</code>. Đây là khác biệt bị hỏi nhiều nhất của cả domain này.</div>

<p><b>★ Configure Resource Governor for performance</b> — <a href="https://learn.microsoft.com/en-us/sql/relational-databases/resource-governor/resource-governor" target="_blank" rel="noopener">Resource Governor</a></p>
<pre><code>Chuỗi bắt buộc:  RESOURCE POOL -> WORKLOAD GROUP -> CLASSIFIER FUNCTION (ở master)
                 -> ALTER RESOURCE GOVERNOR RECONFIGURE

MAX_CPU_PERCENT   trần MỀM  — được vượt khi máy rảnh
CAP_CPU_PERCENT   trần CỨNG — không bao giờ vượt        ← đề phân biệt hai cái này
Classifier chỉ chạy LÚC ĐĂNG NHẬP; đổi phân loại giữa phiên không có tác dụng.</code></pre>
<p>Cần Enterprise/Developer. <b>Azure SQL Database KHÔNG có Resource Governor</b> cho người dùng — muốn cô lập tải thì tách database hoặc dùng elastic pool với min/max mỗi database. <b>Managed Instance thì CÓ</b>. Thực hành: <a href="/dp-300/labs#m4d">lab 4.4 phần E4</a>.</p>
</section>

<section id="c5">
<h3>C.5 Configure a user database for optimal performance<a class="anch" href="#c5">#</a></h3>

<p><b>★ Implement database-scoped configuration</b> — <a href="https://learn.microsoft.com/en-us/sql/t-sql/statements/alter-database-scoped-configuration-transact-sql" target="_blank" rel="noopener">ALTER DATABASE SCOPED CONFIGURATION</a></p>
<p>Đây là cách đặt ở <b>cấp database</b> những thứ trước kia chỉ có ở cấp instance — và là cách <b>duy nhất</b> trên Azure SQL Database. Các công tắc hay hỏi:</p>
<pre><code>MAXDOP                          MAXDOP riêng cho database này
LEGACY_CARDINALITY_ESTIMATION   dùng CE cũ mà VẪN giữ compat level mới
PARAMETER_SNIFFING              OFF ≈ OPTIMIZE FOR UNKNOWN cho cả database
QUERY_OPTIMIZER_HOTFIXES        bật các sửa lỗi optimizer (trace flag 4199)
CLEAR PROCEDURE_CACHE           xoá plan cache của riêng database này
IDENTITY_CACHE                  OFF để tránh nhảy số identity sau failover
LAST_QUERY_PLAN_STATS           bật sys.dm_exec_query_plan_stats
TSQL_SCALAR_UDF_INLINING        tắt riêng inlining mà vẫn giữ compat 150+</code></pre>
<div class="tip">Điểm phân biệt lớn nhất với <code>sp_configure</code>: mỗi thiết lập có <b>giá trị riêng cho secondary replica</b> (<code>value_for_secondary</code>) — đặt <code>FOR SECONDARY</code>. Đọc lại bằng <code>sys.database_scoped_configurations</code>.</div>

<p><b>⚠ Configure compute resources for scaling</b> — link cũ trỏ tới <b>Azure SQL Data Warehouse</b> (nay là Synapse dedicated SQL pool), <b>không nằm trong đề DP-300</b>. Nội dung tương ứng trong đề là scale của Azure SQL: xem <a href="#a2">A.2</a> (bốn trục scale) và <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/serverless-tier-overview" target="_blank" rel="noopener">serverless tier</a>.</p>
<p>Nếu vẫn muốn nắm khái niệm: dedicated SQL pool đo bằng <b>DWU</b>, scale bằng cách đổi DWU (có gián đoạn, huỷ mọi query đang chạy), và <b>pause</b> được để dừng tính tiền compute trong khi vẫn giữ dữ liệu.</p>

<p><b>★ Configure Intelligent Query Processing (IQP)</b> — <a href="https://learn.microsoft.com/en-us/sql/relational-databases/performance/intelligent-query-processing" target="_blank" rel="noopener">Intelligent query processing</a></p>
<p>IQP là <b>bật theo compatibility level</b>, không có công tắc riêng cho từng tính năng (trừ khi muốn tắt bớt bằng database scoped configuration):</p>
<pre><code>140  interleaved execution cho multi-statement TVF · batch mode memory grant
     feedback · batch mode adaptive join
150  scalar UDF inlining · table variable deferred compilation ·
     batch mode on rowstore · APPROX_COUNT_DISTINCT · row mode memory grant feedback
160  Parameter Sensitive Plan optimization · memory grant feedback persistence
     và percentile · DOP feedback · CE feedback · optimized plan forcing
170  optional parameter plan optimization (OPPO) — SQL Server 2025</code></pre>
<p>Có bản chứng minh chạy được sự khác biệt (340 ms ở compat 160 so với 5 739 ms ở compat 140): <a href="/dp-300/labs#m1b">lab 1.1</a>.</p>
</section>

<h2 class="dom">D. Optimize Query Performance (cũ 5–10% → nay gộp vào domain 3)</h2>

<section id="d1">
<h3>D.1 Review query plans<a class="anch" href="#d1">#</a></h3>

<p><b>★ Determine the appropriate type of execution plan</b> — <a href="https://learn.microsoft.com/en-us/sql/relational-databases/performance/display-an-actual-execution-plan" target="_blank" rel="noopener">Actual</a> · <a href="https://learn.microsoft.com/en-us/sql/relational-databases/performance/display-the-estimated-execution-plan" target="_blank" rel="noopener">Estimated</a> · <a href="https://learn.microsoft.com/en-us/sql/relational-databases/performance/live-query-statistics" target="_blank" rel="noopener">Live Query Statistics</a></p>
<table>
<thead><tr><th>Loại plan</th><th>Lấy thế nào</th><th>Có gì</th><th>Dùng khi</th></tr></thead>
<tbody>
<tr><td><b>Estimated</b></td><td><code>SET SHOWPLAN_XML ON</code> · Ctrl+L</td><td>Chỉ ước lượng, <b>không chạy query</b></td><td>Query quá lâu hoặc quá nguy hiểm để chạy thử</td></tr>
<tr><td><b>Actual</b></td><td><code>SET STATISTICS XML ON</code> · Ctrl+M</td><td>Ước lượng <b>và</b> số dòng thật, số lần thực thi thật, cảnh báo spill</td><td>Mặc định khi tuning — so estimated với actual</td></tr>
<tr><td><b>Live</b></td><td>Live Query Statistics</td><td>Xem toán tử chạy <b>theo thời gian thực</b>, % hoàn thành từng toán tử</td><td>Query đang chạy mãi không xong, muốn biết nó kẹt ở đâu</td></tr>
<tr><td><b>Cached / từ Query Store</b></td><td><code>sys.dm_exec_query_plan</code> · <code>sys.query_store_plan</code></td><td>Plan đã dùng thật trong quá khứ</td><td>Điều tra sau sự cố, so plan cũ với plan mới</td></tr>
</tbody></table>
<div class="tip">Từ SQL Server 2019, <code>sys.dm_exec_query_plan_stats</code> cho <b>plan actual gần nhất</b> của một query đã chạy xong — bật bằng <code>ALTER DATABASE SCOPED CONFIGURATION SET LAST_QUERY_PLAN_STATS = ON</code>. Đây là cách lấy actual plan của sự cố <b>đã xảy ra rồi</b>, không phải chạy lại.</div>

<p><b>★ Identify problem areas in execution plans</b> — <a href="https://learn.microsoft.com/en-us/sql/relational-databases/performance/analyze-an-actual-execution-plan" target="_blank" rel="noopener">Analyze an actual execution plan</a></p>
<pre><code>Đọc plan theo thứ tự này:
1. Có WARNING nào không (tam giác vàng)?
     implicit conversion · no join predicate · sort/hash SPILL to tempdb ·
     excessive memory grant · missing index
2. Estimated rows so với Actual rows — lệch nhiều lần = gốc rễ của plan tồi
3. Toán tử nào chiếm % chi phí lớn nhất
4. Có Scan ở chỗ đáng lẽ phải Seek không?
5. Có Key Lookup / RID Lookup lặp nhiều nghìn lần không?
6. Sort có cần thiết không, hay chỉ vì thiếu index đúng thứ tự?
7. Nested Loops trên tập lớn (đáng lẽ Hash), hay Hash trên tập bé (đáng lẽ Loops)?</code></pre>
<p>Bốn lỗi hay gặp nhất, có bản đo được logical reads trước/sau: <a href="/dp-300/labs#m5a">lab 5.1</a>.</p>

<p><b>★ Extract query plans from the Query Store</b> — <a href="https://learn.microsoft.com/en-us/sql/relational-databases/system-catalog-views/query-store-catalog-views-transact-sql" target="_blank" rel="noopener">Query Store catalog views</a></p>
<pre><code>sys.query_store_query_text   văn bản query
sys.query_store_query        query (query_id), gắn với text và context settings
sys.query_store_plan         plan (plan_id), có cột is_forced_plan và query_plan XML
sys.query_store_runtime_stats  số liệu chạy theo từng khoảng thời gian
sys.query_store_runtime_stats_interval  định nghĩa các khoảng
sys.query_store_wait_stats   wait theo query (2017+)

Nối:  query_text -> query -> plan -> runtime_stats
Tìm query có NHIỀU HƠN MỘT plan = ứng viên hồi quy.</code></pre>
<p>Bộ query đầy đủ (top CPU, tìm query nhiều plan, force/unforce, đặt hint) ở <a href="/dp-300/labs#m5c">lab 5.3</a>.</p>
</section>

<section id="d2">
<h3>D.2 Evaluate performance improvements<a class="anch" href="#d2">#</a></h3>

<p><b>★ Determine the appropriate DMVs to gather query performance information · ★ Identify performance issues using DMVs</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/monitoring-with-dmvs" target="_blank" rel="noopener">Monitoring with DMVs</a></p>
<pre><code>ĐANG chạy ngay bây giờ
  sys.dm_exec_requests        + blocking_session_id, wait_type, percent_complete
  sys.dm_exec_sessions        login, program, host
  sys.dm_exec_connections     most_recent_sql_handle
  sys.dm_os_waiting_tasks     task nào đang chờ gì

ĐÃ chạy (thống kê tích luỹ, mất khi restart hoặc khi plan bị đẩy khỏi cache)
  sys.dm_exec_query_stats     total/avg worker_time, logical_reads, elapsed_time
  sys.dm_exec_procedure_stats theo stored procedure
  CROSS APPLY sys.dm_exec_sql_text(sql_handle)
  CROSS APPLY sys.dm_exec_query_plan(plan_handle)

TOÀN INSTANCE
  sys.dm_os_wait_stats        chờ cái gì (nhớ LỌC các wait vô hại)
  sys.dm_os_schedulers        runnable_tasks_count > 0 kéo dài = nghẽn CPU
  sys.dm_os_performance_counters  PLE, batch requests/sec
  sys.dm_io_virtual_file_stats    độ trễ I/O theo TỪNG FILE

INDEX
  sys.dm_db_index_usage_stats     index nào được dùng / chỉ tốn chi phí ghi
  sys.dm_db_index_physical_stats  phân mảnh
  sys.dm_db_missing_index_*       gợi ý (chỉ là gợi ý)</code></pre>
<div class="warn"><b>Giới hạn phải nhớ:</b> <code>sys.dm_exec_query_stats</code> chỉ có dữ liệu <b>khi plan còn trong cache</b> — restart, <code>DBCC FREEPROCCACHE</code>, hoặc áp lực bộ nhớ là mất sạch. Đó chính là lý do <b>Query Store</b> ra đời: nó lưu xuống đĩa và sống qua restart. Câu hỏi "cần dữ liệu hiệu năng còn sau khi khởi động lại" → đáp án là Query Store, không phải DMV.</div>

<p><b>★ Identify and implement index changes for queries</b> — <a href="https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-index-design-guide" target="_blank" rel="noopener">SQL Server index design guide</a></p>
<pre><code>Thứ tự cột trong index (quan trọng hơn mọi thứ khác):
   cột lọc bằng =  ->  cột lọc theo khoảng  ->  cột ORDER BY  ->  INCLUDE phần còn lại

Clustered index nên:  hẹp · duy nhất · tăng dần · ít khi đổi giá trị
   (rộng thì mọi nonclustered index đều phình theo, vì chúng mang khoá clustered)

Covering index    = index chứa MỌI cột query cần -> không còn key lookup
Filtered index    = có WHERE, nhỏ hơn nhiều; hợp với cột thưa hoặc trạng thái hiếm
Columnstore       = analytic, quét lớn và tổng hợp — KHÔNG dùng cho OLTP tra từng dòng</code></pre>
<p>Giá của index: mỗi index <b>làm chậm mọi INSERT/UPDATE/DELETE</b> và tốn chỗ. Dùng <code>sys.dm_db_index_usage_stats</code> để tìm index chỉ có <code>user_updates</code> mà không có <code>user_seeks</code>/<code>user_scans</code> — đó là index thuần lỗ.</p>

<p><b>★ Recommend query construct modifications based on resource usage</b></p>
<pre><code>Non-SARGable (giết index):
   WHERE YEAR(col) = 2026            ->  WHERE col >= '2026-01-01' AND col < '2027-01-01'
   WHERE ISNULL(col,0) = 0           ->  WHERE col IS NULL OR col = 0
   WHERE LEFT(col,3) = 'ABC'         ->  WHERE col LIKE 'ABC%'
   WHERE col LIKE '%abc'             ->  không cứu được bằng index thường

Implicit conversion:
   cột VARCHAR = N'...'  -> CỘT bị convert -> mất seek  (NVARCHAR ưu tiên cao hơn)
   cột NVARCHAR = '...'  -> HẰNG bị convert -> vẫn seek được

Khác:
   SELECT *                     -> chỉ lấy cột cần, mới covering được
   cursor / vòng lặp từng dòng  -> viết lại thành thao tác tập hợp
   OR nhiều nhánh               -> cân nhắc UNION ALL
   function vô hướng trong SELECT/WHERE -> inline được không (compat 150+)?
   table variable trên tập lớn  -> đổi sang temp table (có statistics)</code></pre>

<p><b>★ Assess the use of hints for query performance</b> — <a href="https://learn.microsoft.com/en-us/sql/t-sql/queries/hints-transact-sql-query" target="_blank" rel="noopener">Query hints</a></p>
<pre><code>OPTION (RECOMPILE)              đúng nhất, tốn CPU, KHÔNG vào plan cache
OPTION (OPTIMIZE FOR (@p='x'))  ép một giá trị đại diện
OPTION (OPTIMIZE FOR UNKNOWN)   dùng mật độ trung bình
OPTION (MAXDOP n)               giới hạn song song cho riêng query này
OPTION (FAST n)                 trả n dòng đầu nhanh (hợp phân trang, hại tổng thể)
OPTION (USE HINT ('...'))       cách hiện đại, ví dụ FORCE_LEGACY_CARDINALITY_ESTIMATION
Join hint: LOOP / HASH / MERGE  ép kiểu join — dùng như phương án cuối
INDEX = (...)                    ép dùng một index cụ thể</code></pre>
<div class="tip"><b>Thứ tự leo thang đúng khi gặp plan tồi:</b> sửa <b>thống kê</b> → sửa <b>index</b> → sửa <b>query</b> → <b>Query Store hint / force plan</b> → cuối cùng mới là hint viết thẳng vào code. Hint trong code là nợ kỹ thuật: nó đóng băng một quyết định của optimizer dựa trên dữ liệu của <b>hôm nay</b>.<br>Với ứng dụng đóng gói không sửa được source, <b>Query Store hints</b> (SQL Server 2022 / Azure SQL) là cách duy nhất — nó thay thế plan guide. Xem <a href="/dp-300/labs#m5d">lab 5.4</a>.</div>
</section>

<section id="d3">
<h3>D.3 Review database table and index design<a class="anch" href="#d3">#</a></h3>

<p><b>○ Identify data quality issues with duplication of data</b> — link cũ trỏ tới <b>Data Quality Services</b>, một thành phần của SQL Server ít dùng và <b>không có trong skills measured hiện tại</b>. Đủ biết: DQS làm <i>data matching</i> (tìm bản ghi trùng "gần đúng" theo bộ luật có trọng số) và <i>data cleansing</i> dựa trên knowledge base.</p>
<p>Phần <b>thật sự</b> bị hỏi là trùng lặp ở tầng thiết kế: thiếu <code>UNIQUE</code> constraint, khoá tự nhiên không được cưỡng chế, cùng một dữ liệu lưu ở hai bảng. Cách tìm nhanh:</p>
<pre><code>SELECT col1, col2, COUNT(*) FROM dbo.T GROUP BY col1, col2 HAVING COUNT(*) > 1;</code></pre>

<p><b>○ Identify normal form of database tables</b> — <a href="https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description" target="_blank" rel="noopener">Database normalization</a></p>
<pre><code>1NF  mỗi ô một giá trị nguyên tử; không có nhóm lặp
     (cột "Phones" chứa "090..., 091..." là vi phạm)
2NF  1NF + mọi cột không khoá phụ thuộc TOÀN BỘ khoá chính
     (chỉ có nghĩa khi khoá chính gồm nhiều cột)
3NF  2NF + không có phụ thuộc bắc cầu
     (Orders chứa CustomerName trong khi đã có CustomerId là vi phạm)
BCNF 3NF chặt hơn cho các trường hợp nhiều khoá ứng viên

Chuẩn hoá  -> ít trùng lặp, ghi rẻ, nhất quán cao, ĐỌC phải join nhiều
Phi chuẩn  -> đọc nhanh, ghi đắt, dữ liệu có thể lệch nhau
Thực tế OLTP: chuẩn tới 3NF, rồi phi chuẩn CÓ CHỦ ĐÍCH ở đúng chỗ đo được là chậm.</code></pre>

<p><b>★ Assess index design for performance</b> — xem <a href="#d2">D.2</a>. Bổ sung ba câu hỏi để rà một bảng:</p>
<ol>
<li>Clustered index có <b>hẹp, duy nhất, tăng dần</b> không? (GUID ngẫu nhiên làm clustered key là nguồn phân mảnh vô tận)</li>
<li>Có index nào <b>trùng chức năng</b> nhau không? (cùng cột dẫn đầu, chỉ khác INCLUDE → gộp lại)</li>
<li>Index nào <b>chỉ tốn chi phí ghi</b>? (<code>sys.dm_db_index_usage_stats</code> có <code>user_updates</code> cao mà seek/scan bằng 0)</li>
</ol>
<p><b>⚠ Index Advisor</b> trong link cũ không còn là tính năng riêng — nay là <b>database advisor</b> + <b>automatic tuning</b> (xem <a href="#c2">C.2</a>).</p>

<p><b>★ Validate data types defined for columns</b> — <a href="https://learn.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql" target="_blank" rel="noopener">Data types</a></p>
<pre><code>Kiểu sai gây ba thứ hại, theo mức độ:
  1. Implicit conversion -> mất index seek           (hại nhất)
  2. Dòng rộng hơn cần thiết -> ít dòng mỗi page -> nhiều I/O hơn
  3. Sai ngữ nghĩa (float cho tiền tệ -> sai số làm tròn)

Chọn đúng:
  tiền tệ           DECIMAL/NUMERIC, KHÔNG BAO GIỜ float/real
  ngày không giờ    DATE (3 byte) thay vì DATETIME (8 byte)
  ngày + giờ        DATETIME2 (chọn độ chính xác) thay vì DATETIME
  chuỗi ASCII       VARCHAR; chuỗi đa ngôn ngữ NVARCHAR (gấp đôi chỗ)
  độ dài cố định    CHAR/NCHAR chỉ khi thật sự cố định (mã tỉnh, mã nước)
  cờ bật/tắt        BIT (nhiều cột BIT gói chung vào cùng byte)
  khoá thay thế     INT/BIGINT tăng dần thay vì UNIQUEIDENTIFIER
  MAX types         chỉ khi thật cần — chúng bị đẩy ra ngoài dòng (LOB)</code></pre>

<p><b>★ Recommend table and index storage including filegroups</b> — <a href="https://learn.microsoft.com/en-us/sql/relational-databases/databases/database-files-and-filegroups" target="_blank" rel="noopener">Database files and filegroups</a></p>
<pre><code>Khuyến nghị chính thức:
  - Đa số hệ thống: một data file trên PRIMARY là đủ
  - Muốn nhiều thì tạo FILEGROUP PHỤ, đặt làm DEFAULT, và để PRIMARY
    chỉ chứa system object
  - Trải file lên nhiều đĩa vật lý để cộng I/O
  - Log file: KHÔNG lợi gì khi có nhiều file (log ghi TUẦN TỰ, không song song)
  - Đặt log tách khỏi data
  - Filegroup cho phép PIECEMEAL RESTORE: khôi phục filegroup quan trọng trước,
    đưa database online sớm, phần còn lại khôi phục sau

Trên Azure SQL Database: KHÔNG quản lý file và filegroup — Azure lo.
Trên Managed Instance: có quản lý được, nhưng giới hạn theo tier.</code></pre>

<p><b>★ Evaluate table partitioning strategy</b> — <a href="https://learn.microsoft.com/en-us/azure/architecture/best-practices/data-partitioning" target="_blank" rel="noopener">Data partitioning guidance</a></p>
<pre><code>Ba kiểu phân vùng (khác nhau về MỤC ĐÍCH, đề hay hỏi phân biệt):
  Horizontal (sharding)  chia DÒNG ra nhiều nơi     -> scale, chia tải
  Vertical               chia CỘT ra nhiều bảng     -> tách cột nóng khỏi cột lạnh,
                                                       tách cột nhạy cảm ra để siết quyền
  Functional             chia theo NGHIỆP VỤ        -> tách bounded context

Lý do đúng để partition một bảng:
  quản lý dữ liệu theo cửa sổ trượt (SWITCH thay cho DELETE hàng loạt)
  bảo trì index theo từng partition
  nén khác nhau cho dữ liệu nóng và nguội
  partition elimination cho query CÓ LỌC theo cột phân vùng

Lý do SAI: "bảng to nên chia cho nhanh". Query không lọc theo cột phân vùng
thì KHÔNG nhanh hơn chút nào.</code></pre>
<p>Thực hành đo được: <a href="/dp-300/labs#m2d">lab 2.3</a>.</p>

<p><b>★ Evaluate the use of compression for tables and indexes</b> — <a href="https://learn.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sp-estimate-data-compression-savings-transact-sql" target="_blank" rel="noopener">sp_estimate_data_compression_savings</a></p>
<pre><code>Luôn ƯỚC LƯỢNG trước khi nén:
EXEC sys.sp_estimate_data_compression_savings 'sales','Orders', NULL, NULL, 'PAGE';
So size_with_current_compression_setting với size_with_requested_compression_setting.
Tiết kiệm dưới ~20% thì thường không đáng đánh đổi CPU.

ROW   bỏ byte thừa của kiểu cố định. Rẻ CPU -> hợp OLTP ghi nhiều.
PAGE  = ROW + prefix + dictionary, ĐÚNG THỨ TỰ ĐÓ. Tiết kiệm nhiều hơn,
      tốn CPU hơn -> hợp bảng đọc nhiều / dữ liệu lịch sử.
COLUMNSTORE / COLUMNSTORE_ARCHIVE  cho analytic.

Page nén VẪN Ở DẠNG NÉN trong buffer pool -> tiết kiệm cả đĩa lẫn RAM.
Nén KHÔNG cần Enterprise từ SQL Server 2016 SP1; mọi tier Azure SQL đều có.</code></pre>
</section>

<h2 class="dom">E. Perform Automation of Tasks (cũ 10–15% → nay 15–20%)</h2>

<section id="e1">
<h3>E.1 Create scheduled tasks<a class="anch" href="#e1">#</a></h3>

<p><b>★ Manage schedules for regular maintenance jobs</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/job-automation-overview" target="_blank" rel="noopener">Job automation overview</a></p>
<p>Trang này chính là câu trả lời cho câu hỏi trung tâm của cả domain: <b>Azure SQL Database không có SQL Server Agent</b>, vậy dùng gì?</p>
<table>
<thead><tr><th>Nền tảng</th><th>Công cụ chạy việc theo lịch</th></tr></thead>
<tbody>
<tr><td>SQL Server / VM</td><td><b>SQL Server Agent</b> (job → step → schedule → jobserver)</td></tr>
<tr><td>Azure SQL Managed Instance</td><td><b>SQL Server Agent</b>, có sẵn</td></tr>
<tr><td>Azure SQL Database</td><td><b>Elastic Jobs</b> · Azure Automation runbook · Logic Apps · Azure Functions</td></tr>
</tbody></table>
<pre><code>Elastic Jobs — bốn khái niệm phải nhớ:
  Job agent      tài nguyên Azure, CẦN MỘT DATABASE RIÊNG để chứa metadata
  Target group   đích: cả server · elastic pool · từng database · shard map
                 (thêm member với membership_type = Exclude để loại trừ)
  Job / step     T-SQL chạy trên mọi đích trong target group
  Credential     DATABASE SCOPED CREDENTIAL, phải tồn tại TRÊN TỪNG DATABASE ĐÍCH
Elastic Jobs chỉ chạy T-SQL — không có CmdExec/PowerShell như Agent.</code></pre>
<p>Chuỗi lệnh Agent đầy đủ và bước hay quên nhất (<code>sp_add_jobserver</code>): <a href="/dp-300/labs#m6a">lab 6.1</a>. Elastic Jobs: <a href="/dp-300/labs#m6b">lab 6.2</a>.</p>

<p><b>○ Configure multi-server automation</b> — <a href="https://learn.microsoft.com/en-us/sql/ssms/agent/automated-administration-across-an-enterprise" target="_blank" rel="noopener">Automated administration across an enterprise</a></p>
<pre><code>Master server (MSX)   nơi định nghĩa job dùng chung
Target server (TSX)   các instance nhận và chạy job đó
   TSX ĐỊNH KỲ HỎI MSX xem có job mới không (pull, không phải push)
   Một TSX chỉ thuộc ĐÚNG MỘT MSX
   Đăng ký/gỡ bằng wizard trong SSMS hoặc sp_msx_enlist / sp_msx_defect
Chỉ có ở SQL Server và Managed Instance. Azure SQL Database -> Elastic Jobs.</code></pre>

<p><b>★ Configure notifications for task success/failure/non-completion</b> — <a href="https://learn.microsoft.com/en-us/sql/ssms/agent/notify-an-operator-of-job-status" target="_blank" rel="noopener">Notify an operator of job status</a></p>
<pre><code>Operator      người/nhóm nhận thông báo. Tạo TRƯỚC job.
@notify_level_email  0 never · 1 on success · 2 ON FAILURE · 3 always
Kênh          email (qua Database Mail) · pager · net send (đã lỗi thời)

Database Mail — chuỗi 7 bước, bước 6 là chỗ hỏng nhiều nhất:
  1. sp_configure 'Database Mail XPs', 1
  2. sysmail_add_account_sp        (SMTP server, port, credential)
  3. sysmail_add_profile_sp
  4. sysmail_add_profileaccount_sp
  5. Agent Properties -> Alert System -> Enable mail profile -> chọn profile
  6. KHỞI ĐỘNG LẠI SQL Server Agent      ← không làm thì mail không bao giờ gửi
  7. sp_send_dbmail để thử; xem sysmail_allitems / sysmail_event_log

"Non-completion" (job treo, không chạy) KHÔNG bắt được bằng notification của job.
Phải dùng ALERT theo performance condition, hoặc một job giám sát riêng đọc
msdb.dbo.sysjobactivity.</code></pre>
<div class="warn"><b>Azure SQL Database không có Database Mail.</b> Thông báo đi qua Azure Monitor <b>action group</b> (email, SMS, webhook, Logic App, Function, runbook, ITSM).</div>
</section>

<section id="e2">
<h3>E.2 Evaluate and implement an alert and notification strategy<a class="anch" href="#e2">#</a></h3>

<p><b>★ Create event notifications based on metrics</b> — link cũ trỏ nhầm sang tài liệu <b>Azure Database for MySQL</b>. Bản cho Azure SQL: <a href="https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-metric-overview" target="_blank" rel="noopener">Metric alerts</a></p>
<pre><code>Ba mảnh của một cảnh báo Azure Monitor:
  Alert rule            điều kiện (scope + metric + toán tử + ngưỡng + cửa sổ)
  Action group          làm gì khi kích hoạt (tái sử dụng cho nhiều rule)
  Alert processing rule chặn/định tuyến (tuỳ chọn — ví dụ tắt cảnh báo lúc bảo trì)

Metric hay dùng cho Azure SQL Database:
  cpu_percent · dtu_consumption_percent · storage_percent · log_write_percent
  physical_data_read_percent · workers_percent · sessions_percent
  deadlock · connection_failed · connection_successful · blocked_by_firewall

Metric alert (rẻ, gần realtime)  khác  log alert (mạnh hơn, chậm hơn, cần
Log Analytics và tính tiền theo truy vấn).</code></pre>
<p>Lệnh CLI đầy đủ ở <a href="/dp-300/labs#m6e">lab 6.4</a>.</p>

<p><b>○ Create event notifications for Azure resources</b> — <a href="https://learn.microsoft.com/en-us/sql/t-sql/statements/create-event-notification-transact-sql" target="_blank" rel="noopener">CREATE EVENT NOTIFICATION</a></p>
<p>Đừng nhầm hai thứ trùng tên:</p>
<table>
<thead><tr><th></th><th><code>CREATE EVENT NOTIFICATION</code> (T-SQL)</th><th>Azure Event Grid / Activity log alert</th></tr></thead>
<tbody>
<tr><td>Bắt sự kiện</td><td>DDL và trace event <b>trong SQL Server</b></td><td>Sự kiện của <b>tài nguyên Azure</b> (tạo/xoá/sửa resource)</td></tr>
<tr><td>Gửi tới</td><td><b>Service Broker</b> queue</td><td>Webhook, Function, Logic App, action group…</td></tr>
<tr><td>Có trên Azure SQL DB?</td><td><b>Không</b> (không có Service Broker)</td><td>Có</td></tr>
</tbody></table>
<p><code>CREATE EVENT NOTIFICATION</code> khác <b>DDL trigger</b> ở chỗ nó <b>bất đồng bộ</b> và chạy <b>ngoài</b> transaction gây ra sự kiện — nên nó không rollback được thao tác, đổi lại không làm chậm thao tác đó.</p>

<p><b>○ Create alerts for server configuration changes</b></p>
<pre><code>Ba cách, theo mức độ chính quy:
  1. DDL trigger ở cấp server (ddl_server_level_events) -> ghi vào bảng log
     -> chặn được thay đổi (ROLLBACK trong trigger)
  2. CREATE EVENT NOTIFICATION cho ALTER_SERVER_CONFIGURATION -> Service Broker
     -> không chặn, nhưng không làm chậm
  3. Server AUDIT với action group SERVER_OPERATION_GROUP /
     DATABASE_PERMISSION_CHANGE_GROUP -> cách chuẩn cho mục đích tuân thủ
Trên Azure: Activity log alert bắt thay đổi cấu hình của TÀI NGUYÊN
(đổi tier, đổi firewall rule) — khác hẳn cấu hình BÊN TRONG database.</code></pre>

<p><b>★ Create tasks that respond to event notifications</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/action-groups" target="_blank" rel="noopener">Action groups</a></p>
<p>Cảnh báo chỉ có giá trị khi có <b>hành động</b> gắn vào. Bốn mẫu tự chữa hay gặp:</p>
<pre><code>CPU cao kéo dài      -> action group gọi runbook -> scale lên tier cao hơn
Storage gần đầy       -> runbook -> tăng max size hoặc dọn dữ liệu cũ
Deadlock tăng vọt     -> Logic App -> tạo ticket kèm deadlock graph
Job Agent thất bại    -> operator nhận mail; đồng thời alert theo
                          performance condition bắt trường hợp job KHÔNG chạy</code></pre>
</section>

<section id="e3">
<h3>E.3 Manage and automate tasks in Azure<a class="anch" href="#e3">#</a></h3>

<p><b>★ Perform automated deployment methods for resources</b> — <a href="https://learn.microsoft.com/en-us/azure/devops/pipelines/targets/azure-sqldb" target="_blank" rel="noopener">Azure Pipelines → Azure SQL Database</a></p>
<pre><code>Bốn phương pháp, đề liệt kê riêng từng cái:
  ARM template   declarative, idempotent, có deployment mode
  Bicep          cú pháp gọn của ARM, biên dịch ra chính JSON đó
  Azure PowerShell (Az module)   imperative
  Azure CLI                      imperative

Declarative (template) trả lời câu "đảm bảo môi trường luôn về đúng trạng thái
mong muốn dù chạy lại nhiều lần". Imperative trả lời câu "chạy một chuỗi thao tác".

Triển khai SCHEMA database thì khác triển khai HẠ TẦNG:
  DACPAC   chỉ schema — so sánh với đích rồi sinh lệnh ALTER
  BACPAC   schema + dữ liệu — dùng cho export/import, KHÔNG phải backup
  Task SqlAzureDacpacDeployment trong Azure Pipelines làm việc này,
  và có tuỳ chọn tự mở firewall cho agent rồi tự xoá.</code></pre>
<p>Thực hành: <a href="/dp-300/labs#m2b">lab 2.1</a> (ARM + Bicep + what-if) và <a href="/dp-300/labs#m2c">2.2</a> (CLI + PowerShell).</p>

<p><b>○ Implement policies by using automated evaluation modes</b> — <a href="https://learn.microsoft.com/en-us/sql/relational-databases/policy-based-management/administer-servers-by-using-policy-based-management" target="_blank" rel="noopener">Policy-Based Management</a></p>
<pre><code>Ba khái niệm:  Facet (nhóm thuộc tính của một loại đối tượng)
               Condition (biểu thức boolean trên facet)
               Policy (condition + phạm vi + chế độ đánh giá)

BỐN chế độ đánh giá — đây là phần đề hỏi:
  On demand              chạy tay. Mọi facet đều hỗ trợ.
  On schedule            SQL Agent job chạy định kỳ, GHI LẠI vi phạm.
  On change: log only    phát hiện thay đổi vi phạm -> ghi log, KHÔNG chặn.
  On change: prevent     dùng DDL TRIGGER để ROLLBACK thay đổi vi phạm.
                         Chỉ áp được cho facet nào thay đổi được bắt bằng DDL trigger.

Hai chế độ "on change" cần Service Broker -> KHÔNG có trên Azure SQL Database.
Bản Azure tương đương: Azure Policy (cho tài nguyên) + Defender for SQL
vulnerability assessment baseline (cho cấu hình bên trong database).</code></pre>
</section>

<h2 class="dom">F. Plan and Implement HADR (cũ 15–20% → nay 20–25%)</h2>

<section id="f1">
<h3>F.1 Recommend an HADR strategy for a data platform solution<a class="anch" href="#f1">#</a></h3>

<p><b>★ Recommend HADR strategy based on RPO/RTO requirements</b></p>
<p>Bảng tám giải pháp với RPO/RTO và "bảo vệ khỏi cái gì" đã có đầy đủ ở <a href="/dp-300/labs#m7z">trang thực hành mục 7.0</a>. Điểm cốt lõi lặp lại ở đây vì đề hỏi nhiều nhất:</p>
<pre><code>RPO = 0 CHỈ có ở đồng bộ SYNCHRONOUS:
        Always On AG synchronous commit · FCI (dùng chung storage) ·
        Business Critical / zone-redundant replica
RPO > 0 ở mọi thứ bất đồng bộ:
        geo-replication (~5 giây) · log shipping (= chu kỳ backup log) ·
        backup thường (= khoảng cách tới bản log gần nhất)

Auto-failover group: grace period tính bằng GIỜ, tối thiểu 1
  -> RTO tới MỘT GIỜ. Đề đòi RTO vài phút thì phải failover TAY.</code></pre>
<div class="warn"><b>Câu hỏi bẫy phổ biến nhất của cả domain:</b> AG, geo-replication và failover group <b>không</b> bảo vệ khỏi <b>xoá nhầm dữ liệu</b> — lệnh <code>DELETE</code> được nhân bản sang replica trong vài giây. Chỉ <b>backup + PITR</b> (và log shipping có delay) mới cứu được.</div>

<p><b>★ Evaluate HADR for hybrid deployments</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/virtual-machines/windows/business-continuity-high-availability-disaster-recovery-hadr-overview" target="_blank" rel="noopener">HADR overview cho SQL Server on Azure VMs</a></p>
<pre><code>Hybrid = một chân on-prem, một chân Azure. Ba mẫu:
  AG với replica ASYNCHRONOUS đặt trên Azure VM  ← phổ biến nhất
     cần VPN/ExpressRoute và AD trải sang Azure
  Log shipping sang Azure VM
     rẻ hơn, RPO lớn hơn, và CÓ delay -> cứu được ca xoá nhầm
  Backup to URL + restore lên Azure khi cần
     rẻ nhất, RTO lớn nhất
  Azure Site Recovery nhân bản cả MÁY ẢO
     ⚠ KHÔNG khuyến nghị cho SQL Server — nó không hiểu tính nhất quán
     giao dịch của database. Dùng giải pháp cấp SQL.</code></pre>

<p><b>★ Evaluate Azure-specific HADR solutions</b></p>
<pre><code>Azure SQL Database   HA sẵn trong tier (GP: gắn lại file · BC: cụm 4 replica)
                     + zone redundancy + active geo-replication + failover group
                     + PITR/LTR + geo-restore (cần backup GRS)
Managed Instance     HA sẵn + zone redundancy + failover group + AG (link feature)
SQL Server on VM     bạn tự dựng: Always On AG · FCI · log shipping ·
                     availability set / availability zone cho tầng máy</code></pre>

<p><b>★ Identify resources for HADR solutions · ★ Plan a testing procedure</b></p>
<p>Bốn tài liệu gốc mà danh sách trỏ tới ứng với bốn công nghệ nền: <a href="https://learn.microsoft.com/en-us/sql/database-engine/availability-groups/windows/always-on-availability-groups-sql-server" target="_blank" rel="noopener">Always On AG</a> · <a href="https://learn.microsoft.com/en-us/sql/sql-server/failover-clusters/windows/always-on-failover-cluster-instances-sql-server" target="_blank" rel="noopener">FCI</a> · <a href="https://learn.microsoft.com/en-us/sql/database-engine/log-shipping/about-log-shipping-sql-server" target="_blank" rel="noopener">Log shipping</a> · <a href="https://learn.microsoft.com/en-us/sql/relational-databases/backup-restore/sql-server-backup-to-url" target="_blank" rel="noopener">Backup to URL</a>.</p>
<pre><code>AG           bảo vệ DATABASE. Mỗi replica có bản sao dữ liệu RIÊNG.
             Tới 9 replica, tối đa 5 synchronous.
FCI          bảo vệ INSTANCE. Các node DÙNG CHUNG storage
             -> KHÔNG bảo vệ khỏi hỏng storage.
Log shipping bảo vệ DATABASE, thủ công, có DELAY -> cứu được xoá nhầm.
Backup       bảo vệ TẤT CẢ, kể cả ransomware. Chậm nhất.

Kế hoạch kiểm thử HADR phải có:
  lịch diễn tập định kỳ (ít nhất 6 tháng/lần)
  ĐO thật RTO và RPO đạt được, so với cam kết
  kiểm thử cả failover CÓ KẾ HOẠCH lẫn failover BẤT NGỜ
  kiểm thử FAILBACK, không chỉ failover
  xác minh ứng dụng kết nối lại được (chuỗi kết nối, DNS, quyền)
  restore thử ra máy khác rồi DBCC CHECKDB</code></pre>
</section>

<section id="f2">
<h3>F.2 Test an HADR strategy by using platform, OS, and database tools<a class="anch" href="#f2">#</a></h3>

<p><b>★ Test HA by using failover</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/failover-group-configure-sql-db" target="_blank" rel="noopener">Configure failover group</a></p>
<pre><code>Planned / friendly failover   đảo vai trò, chờ replica bắt kịp -> KHÔNG mất dữ liệu.
                              Đây là cách dùng để DIỄN TẬP.
Forced / unplanned failover   primary đã chết, không chờ được -> CÓ THỂ MẤT dữ liệu.

az sql failover-group set-primary -g $RG -s $SRV2 -n fg-dp300
az sql db replica set-primary   -g $RG -s $SRV2 -n appdb      (geo-replication)

Nhớ FAILBACK sau khi diễn tập, và kiểm tra ứng dụng đã bám vào listener
endpoint (fg.database.windows.net) chứ không bám tên server cụ thể.</code></pre>

<p><b>★ Test DR by using failover or restore</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/disaster-recovery-guidance" target="_blank" rel="noopener">Disaster recovery guidance</a></p>
<pre><code>Ba đường khôi phục trên Azure SQL Database, theo thứ tự nhanh -> chậm:
  1. Failover sang geo-secondary        giây tới phút   (nếu đã dựng sẵn)
  2. Geo-restore từ backup GRS          giờ             RPO tới 1 giờ
                                        ← chỉ dùng được nếu backup redundancy
                                          là GRS/RA-GRS, KHÔNG phải LRS/ZRS
  3. PITR sang database mới             giờ             cho ca xoá nhầm

Cả ba đều tạo DATABASE MỚI — không có chuyện "ghi đè lên database cũ".</code></pre>
<p>Thực hành PITR chạy được thật (offline): <a href="/dp-300/labs#m7a">lab 7.1</a>. Geo-replication trên Azure: <a href="/dp-300/labs#m7c">lab 7.3</a>.</p>
</section>

<section id="f3">
<h3>F.3 Perform backup and restore a database by using database tools<a class="anch" href="#f3">#</a></h3>

<p><b>★ Perform a database backup with options</b> — <a href="https://learn.microsoft.com/en-us/sql/t-sql/statements/backup-transact-sql" target="_blank" rel="noopener">BACKUP (T-SQL)</a></p>
<pre><code>Tuỳ chọn phải thuộc:
  INIT / NOINIT        ghi đè media set / ghi nối thêm
  FORMAT               tạo media header mới (xoá sạch media set cũ)
  CHECKSUM             tính checksum -> phát hiện hỏng trang NGAY LÚC backup
  COMPRESSION          nén (Standard trở lên từ SQL 2016 SP1)
  COPY_ONLY            KHÔNG reset differential base  ← bản copy ad-hoc
  DIFFERENTIAL         chỉ phần đổi kể từ full GẦN NHẤT
  ENCRYPTION           mã hoá chính bản backup (cần certificate/asymmetric key)
  STATS = n            in tiến độ mỗi n phần trăm
  MAXTRANSFERSIZE      > 65536 là BẮT BUỘC khi nén backup của database bật TDE
  BLOCKSIZE            quan trọng khi backup to URL
  MIRROR TO            ghi đồng thời ra nhiều đích
  Nhiều DISK = ...     stripe ra nhiều file để nhanh hơn
                       ⚠ mất MỘT file là mất CẢ BỘ backup</code></pre>

<p><b>★ Perform a database restore with options</b> — <a href="https://learn.microsoft.com/en-us/sql/t-sql/statements/restore-statements-transact-sql" target="_blank" rel="noopener">RESTORE (T-SQL)</a></p>
<pre><code>NORECOVERY   để database ở trạng thái restoring, còn restore tiếp được
             ← MỌI bước giữa dây phục hồi đều phải có
RECOVERY     kết thúc, mở database ra (mặc định — nên đây là lỗi hay gặp)
STANDBY      mở READ-ONLY mà vẫn restore tiếp được (dùng cho log shipping)
REPLACE      ghi đè database đang tồn tại
MOVE         đổi đường dẫn file vật lý — bắt buộc khi restore sang máy khác
STOPAT       khôi phục tới đúng thời điểm  (chỉ với RESTORE LOG)
STOPATMARK / STOPBEFOREMARK   tới một transaction có ĐẶT TÊN
PARTIAL      piecemeal restore theo filegroup
FILE = n     chọn backup set thứ n trong media set

Lệnh đọc thông tin, không phục hồi gì:
  RESTORE FILELISTONLY   xem logical file name (cần cho MOVE)
  RESTORE HEADERONLY     xem các backup set trong file
  RESTORE VERIFYONLY     kiểm tra ĐỌC ĐƯỢC và checksum khớp
                         ⚠ KHÔNG chứng minh database restore ra sẽ chạy</code></pre>

<p><b>★ Perform a database restore to a point in time</b> — <a href="https://learn.microsoft.com/en-us/sql/relational-databases/backup-restore/restore-a-sql-server-database-to-a-point-in-time-full-recovery-model" target="_blank" rel="noopener">Restore to a point in time</a> · <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/recovery-using-backups" target="_blank" rel="noopener">Recovery using backups (Azure)</a></p>
<pre><code>SQL Server — thứ tự BẮT BUỘC:
  1. TAIL-LOG backup nếu nguồn còn truy cập được
     BACKUP LOG ... WITH NORECOVERY, NO_TRUNCATE
  2. RESTORE DATABASE từ full             WITH NORECOVERY
  3. RESTORE DATABASE từ differential GẦN NHẤT  WITH NORECOVERY   (chỉ MỘT bản)
  4. RESTORE LOG lần lượt THEO THỨ TỰ     WITH NORECOVERY
  5. RESTORE LOG cuối                      WITH STOPAT = '...', RECOVERY

Azure SQL Database — không có T-SQL, chỉ CLI/portal, và LUÔN tạo database MỚI:
  az sql db restore -g RG -s SRV -n appdb --dest-name appdb-restored \\
     --time "2026-08-27T09:00:00"
  az sql db restore ... --deleted-time "..."     (database ĐÃ XOÁ)</code></pre>
<p>Có bản chạy được thật, dựng cả kịch bản "xoá nhầm lúc 10 giờ": <a href="/dp-300/labs#m7a">lab 7.1</a>.</p>

<p><b>★ Configure long-term backup retention</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/long-term-retention-overview" target="_blank" rel="noopener">Long-term retention</a></p>
<pre><code>PITR retention (backup TỰ ĐỘNG của dịch vụ):
  Basic                          7 ngày   (chỉnh 1–7)
  Standard/GP/BC/Premium/Hyperscale  7 ngày mặc định, chỉnh 1–35

LTR (tách HẲN khỏi PITR): giữ bản FULL theo tuần / tháng / năm, tới 10 NĂM
  az sql db ltr-policy set -g RG -s SRV -n appdb \\
     --weekly-retention P4W --monthly-retention P12M \\
     --yearly-retention P5Y --week-of-year 1
  (định dạng ISO-8601 duration: P4W = 4 tuần, P12M = 12 tháng, P5Y = 5 năm)

Khôi phục từ LTR cũng tạo database MỚI.
LTR KHÔNG có với database free offer, và không có với Basic ở một số cấu hình.
Nhịp backup tự động của Azure: full hằng tuần · differential 12–24 giờ ·
LOG 5–10 phút  ← con số này giải thích vì sao RPO của PITR rất nhỏ.</code></pre>
</section>

<section id="f4">
<h3>F.4 Configure HA/DR by using OS, platform, and database tools<a class="anch" href="#f4">#</a></h3>

<p><b>★ Configure replication</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/replication-to-sql-database" target="_blank" rel="noopener">Replication to Azure SQL Database</a></p>
<pre><code>Ba vai:  Publisher (nguồn) -> Distributor (kho trung chuyển) -> Subscriber (đích)

Bốn loại:
  Snapshot        chụp toàn bộ rồi đẩy. Đơn giản, hợp dữ liệu ít đổi.
  Transactional   đẩy từng transaction, độ trễ thấp. Phổ biến nhất.
  Merge           HAI CHIỀU, có giải quyết xung đột. Hợp thiết bị rời mạng.
  Peer-to-peer    nhiều node đều ghi được. Phức tạp nhất.

Giới hạn trên Azure — bị hỏi nhiều:
  Azure SQL Database  chỉ làm SUBSCRIBER (đích) của push subscription.
                      KHÔNG làm publisher/distributor được.
  Managed Instance    làm được CẢ BA vai.
Replication là công cụ PHÂN PHỐI DỮ LIỆU, không phải giải pháp HA/DR —
nó không có failover tự động và không bảo đảm RPO.</code></pre>

<p><b>★ Create an Always On Availability Group · ★ Integrate a database into an AG</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/virtual-machines/windows/availability-group-azure-portal-configure" target="_blank" rel="noopener">AG trên Azure VM</a> · <a href="https://learn.microsoft.com/en-us/sql/database-engine/availability-groups/windows/availability-group-add-a-database" target="_blank" rel="noopener">Add a database to an AG</a></p>
<pre><code>Dựng AG — thứ tự bắt buộc:
  1. Hai node vào CÙNG MỘT Active Directory domain
  2. Cài Failover Clustering, tạo WSFC
  3. Cấu hình QUORUM (trên Azure: cloud witness = một storage account)
  4. Bật AlwaysOn Availability Groups trong SQL Server Configuration Manager
     -> KHỞI ĐỘNG LẠI dịch vụ SQL Server
  5. Database phải ở FULL recovery và đã có ÍT NHẤT MỘT full backup
  6. Tạo AG: chọn replica, synchronous/asynchronous, automatic/manual failover
  7. Tạo LISTENER -> trên Azure cần thêm INTERNAL LOAD BALANCER với
     health probe (thường port 59999) và floating IP / Direct Server Return

Thêm database vào AG đã có — ba cách:
  Automatic seeding  SQL tự stream database sang secondary (2016+). Đơn giản nhất.
  Full/log backup + restore WITH NORECOVERY ở secondary, rồi join
  Wizard trong SSMS (dùng shared folder)

Con số:  tối đa 9 replica, trong đó tối đa 5 SYNCHRONOUS.
         Automatic failover BẮT BUỘC synchronous commit.</code></pre>
<div class="warn">Trên Azure, listener <b>không chạy</b> nếu thiếu internal load balancer + health probe — đây là chỗ hỏng phổ biến nhất khi dựng AG trên cloud, và là đáp án của câu "AG đã lên nhưng ứng dụng không kết nối được qua listener".</div>

<p><b>★ Configure quorum options for a Windows Server Failover Cluster</b> — <a href="https://learn.microsoft.com/en-us/windows-server/failover-clustering/manage-cluster-quorum" target="_blank" rel="noopener">Manage cluster quorum</a></p>
<pre><code>Quorum = cơ chế để cụm biết "phe nào được sống", chống SPLIT-BRAIN.

Bốn loại witness:
  Disk witness    ổ chia sẻ. Chỉ hợp khi mọi node thấy chung storage.
                  KHÔNG dùng được cho cụm trải nhiều site.
  File share      một SMB share. Nhẹ, hợp multi-site.
  CLOUD witness   một Azure Storage account (blob).  ← khuyến nghị trên Azure
  Không witness   chỉ khi số node LẺ

Luật ngón tay cái:  số phiếu (node + witness) nên là số LẺ.
  2 node -> BẮT BUỘC có witness
  3 node -> không cần, nhưng có vẫn tốt hơn
Từ Windows Server 2016: dynamic quorum + dynamic witness tự điều chỉnh
số phiếu khi node rời cụm -> cụm sống được lâu hơn.</code></pre>

<p><b>★ Configure an Always On Availability Group listener</b> — <a href="https://learn.microsoft.com/en-us/sql/database-engine/availability-groups/windows/create-or-configure-an-availability-group-listener-sql-server" target="_blank" rel="noopener">Create an AG listener</a></p>
<pre><code>Listener = tên DNS ảo + IP ảo + port. Ứng dụng bám vào nó, không bám tên node
-> failover xong ứng dụng không phải sửa gì.

Định tuyến đọc (read-only routing) — ba mảnh, thiếu một là không chạy:
  1. READ_ONLY_ROUTING_URL trên TỪNG replica
  2. READ_ONLY_ROUTING_LIST trên replica sẽ đóng vai primary
  3. Ứng dụng phải nêu ApplicationIntent=ReadOnly VÀ kết nối qua LISTENER
     (kết nối thẳng vào node thì không có định tuyến nào cả)

Trên Azure: bắt buộc internal load balancer + health probe, hoặc dùng
DISTRIBUTED NETWORK NAME (DNN) — cách mới hơn, không cần load balancer
(SQL Server 2019 CU8+ / Windows Server 2016+).</code></pre>

<p><b>★ Configure failover cluster instances on Azure VMs</b> — <a href="https://learn.microsoft.com/en-us/azure/azure-sql/virtual-machines/windows/failover-cluster-instance-overview" target="_blank" rel="noopener">FCI overview</a></p>
<pre><code>FCI bảo vệ INSTANCE (cả instance chuyển sang node khác), khác AG bảo vệ DATABASE.
Các node DÙNG CHUNG storage -> KHÔNG bảo vệ khỏi hỏng storage.
RTO 1–2 phút vì phải khởi động lại cả instance ở node mới.

Ba lựa chọn shared storage trên Azure:
  Azure shared disks       premium SSD gắn được vào nhiều VM
  Storage Spaces Direct    (S2D) storage phần mềm, chỉ trong MỘT availability set
  Premium file share       đơn giản nhất
Cộng thêm: internal load balancer hoặc DNN cho tên ảo của FCI.

Chọn FCI khi: cần bảo vệ cả instance-level object (login, job, linked server)
Chọn AG khi:  cần bảo vệ database và muốn replica ĐỌC ĐƯỢC, hoặc trải nhiều vùng</code></pre>
<p><b>Log shipping</b> (link riêng trong danh sách): ba job Agent — <b>backup</b> ở primary → <b>copy</b> → <b>restore</b> ở secondary. Secondary ở <code>NORECOVERY</code> hoặc <code>STANDBY</code> (đọc được). Điểm mạnh riêng: <b>đặt được delay</b>, nên nó là giải pháp HADR duy nhất ngoài backup có thể cứu ca <b>xoá nhầm dữ liệu</b>.</p>
</section>

<h2 class="dom">G. Perform Administration by Using T-SQL (cũ 10–15% → domain này KHÔNG CÒN)</h2>

<section id="g0">
<h3>G.0 Đọc phần này thế nào<a class="anch" href="#g0">#</a></h3>
<p>Domain này đã bị xoá khỏi skills measured. Nhưng <b>đừng bỏ qua</b> — nội dung của nó bị <b>rải vào bốn domain còn lại</b> dưới dạng các gạch đầu dòng mới:</p>
<table>
<thead><tr><th>Nội dung cũ ở domain 7</th><th>Nay nằm ở đâu</th></tr></thead>
<tbody>
<tr><td>Evaluate database/server health using DMVs</td><td>Domain 3 — <i>"Identify performance issues using dynamic management views"</i></td></tr>
<tr><td>Perform database consistency checks by using DBCC</td><td>Domain 3 — <i>"Implement database integrity checks"</i></td></tr>
<tr><td>Assess autogrow · report free space · review DB options</td><td>Domain 3 — <i>"Configure server settings for performance"</i>, <i>"Implement database-scoped configuration"</i></td></tr>
<tr><td>Backup/restore bằng T-SQL · prepare DB for AG</td><td>Domain 5 — <i>"Backup and restore a database by using T-SQL"</i></td></tr>
<tr><td>Manage certificates · security principals</td><td>Domain 2 — <i>"Manage authentication and authorization by using T-SQL"</i></td></tr>
<tr><td>Permissions · custom role</td><td>Domain 2 — <i>"Configure security principals"</i>, <i>"Apply the principle of least privilege"</i></td></tr>
</tbody></table>
<div class="tip">Nói cách khác: <b>khối lượng kiến thức không giảm, chỉ là không còn được đóng gói thành một domain dễ ăn điểm.</b> Trước kia bạn có thể mất domain 2 mà vẫn qua nhờ domain 7; nay không còn cái đệm đó.</div>
</section>

<section id="g1">
<h3>G.1 Examine system health<a class="anch" href="#g1">#</a></h3>

<p><b>★ Evaluate database health using DMVs · ★ Evaluate server health using DMVs</b> — <a href="https://learn.microsoft.com/en-us/sql/relational-databases/system-dynamic-management-views/system-dynamic-management-views" target="_blank" rel="noopener">System DMVs</a></p>
<p>Danh sách DMV theo mục đích đã ở <a href="#d2">D.2</a>. Bổ sung nhóm "sức khoẻ" mà D.2 không có:</p>
<pre><code>sys.dm_os_sys_info            cpu_count, physical_memory_kb, sqlserver_start_time
                              ← uptime quyết định số liệu tích luỹ có ý nghĩa không
sys.dm_os_sys_memory          áp lực bộ nhớ ở tầng OS
sys.dm_io_virtual_file_stats  ĐỘ TRỄ I/O theo từng file — cách chuẩn để chứng minh
                              "đĩa chậm" thay vì đoán
sys.dm_db_file_space_used     chỗ đã dùng (Azure SQL)
sys.dm_exec_session_wait_stats  wait theo TỪNG PHIÊN (2016+) — chính xác hơn
                                wait toàn instance khi soi một ứng dụng
sys.dm_db_wait_stats          wait ở cấp DATABASE (chỉ Azure SQL Database)
sys.dm_os_memory_clerks       ai đang giữ bộ nhớ

XEvents session system_health   CHẠY SẴN, giữ deadlock graph, lỗi severity ≥20,
                                và các wait dài. Nơi đầu tiên cần xem sau sự cố.</code></pre>
<div class="warn">Mọi DMV có chữ <code>_stats</code> đều là <b>tích luỹ từ lúc khởi động</b> (hoặc từ lúc plan vào cache). Số liệu chỉ có nghĩa khi <code>sqlserver_start_time</code> đủ xa, và cách đọc đúng là <b>chụp hai lần rồi lấy hiệu</b>, không phải đọc một lần.</div>

<p><b>★ Perform database consistency checks by using DBCC</b> — <a href="https://learn.microsoft.com/en-us/sql/t-sql/database-console-commands/dbcc-checkdb-transact-sql" target="_blank" rel="noopener">DBCC CHECKDB</a></p>
<pre><code>DBCC CHECKDB ('db') WITH NO_INFOMSGS, ALL_ERRORMSGS;
   NO_INFOMSGS      chỉ in lỗi -> KHÔNG in gì nghĩa là SẠCH
   PHYSICAL_ONLY    nhanh hơn nhiều, dùng hằng ngày cho database lớn
   DATA_PURITY      kiểm tra giá trị nằm ngoài miền hợp lệ của kiểu dữ liệu
   ESTIMATEONLY     ước lượng chỗ tempdb cần
   MAXDOP           giới hạn song song

Lệnh con:  CHECKALLOC (cấp phát) · CHECKTABLE (một bảng) ·
           CHECKCATALOG (system catalog) · CHECKFILEGROUP
CHECKDB ≈ CHECKALLOC + CHECKTABLE mọi bảng + CHECKCATALOG.

KHI PHÁT HIỆN CORRUPTION — thứ tự đúng:
  1. RESTORE từ backup sạch      ← luôn thử trước
  2. Nếu chỉ hỏng NONCLUSTERED index: xoá và tạo lại index (không mất dữ liệu)
  3. REPAIR_REBUILD               không mất dữ liệu, nhưng sửa được ít
  4. REPAIR_ALLOW_DATA_LOSS       PHƯƠNG ÁN CUỐI. Đúng như tên: MẤT DỮ LIỆU.
                                  Cần SINGLE_USER mode.
Azure SQL Database và MI: Microsoft TỰ chạy integrity check — bạn không cần
lên lịch, nhưng vẫn chạy tay được.</code></pre>
<p>Có sẵn trong <a href="/dp-300/labs#m4d">lab 4.4 phần E5</a>.</p>
</section>

<section id="g2">
<h3>G.2 Monitor database configuration by using T-SQL<a class="anch" href="#g2">#</a></h3>

<p><b>★ Assess proper database autogrow configuration · ★ Report on database free space</b></p>
<pre><code>-- Cấu hình file, autogrow, và chỗ đã dùng — một query trả lời cả hai gạch đầu dòng
SELECT
    file_name = df.name, type = df.type_desc,
    size_mb   = df.size * 8 / 1024,
    used_mb   = FILEPROPERTY(df.name, 'SpaceUsed') * 8 / 1024,
    growth    = CASE WHEN df.is_percent_growth = 1
                     THEN CAST(df.growth AS VARCHAR(10)) + ' %'      -- ← ANTI-PATTERN
                     ELSE CAST(df.growth * 8 / 1024 AS VARCHAR(10)) + ' MB' END,
    max_size  = CASE df.max_size WHEN -1 THEN 'unlimited'
                     ELSE CAST(df.max_size * 8 / 1024 AS VARCHAR(20)) + ' MB' END
FROM sys.database_files df;

-- Chỗ trong LOG và vì sao không cắt được
DBCC SQLPERF(LOGSPACE);
SELECT name, log_reuse_wait_desc FROM sys.databases;

-- Lệnh cũ vẫn hay gặp trong đề
EXEC sp_spaceused;              -- toàn database
EXEC sp_spaceused 'sales.Orders';  -- một bảng

-- Azure SQL Database
SELECT * FROM sys.dm_db_file_space_used;
SELECT * FROM sys.database_files;</code></pre>
<p>Nguyên tắc: autogrow theo <b>MB cố định</b>, không theo phần trăm; cấp đủ từ đầu để hiếm khi phải grow; <b>Instant File Initialization chỉ áp cho data file</b> nên grow log luôn đắt. Chi tiết ở <a href="#c3">C.3</a> và <a href="/dp-300/labs#m4d">lab 4.4</a>.</p>

<p><b>★ Review database configuration options</b> — <a href="https://learn.microsoft.com/en-us/sql/t-sql/statements/alter-database-transact-sql-set-options" target="_blank" rel="noopener">ALTER DATABASE SET options</a></p>
<pre><code>SELECT name, recovery_model_desc, compatibility_level, collation_name,
       is_auto_close_on, is_auto_shrink_on,
       is_auto_create_stats_on, is_auto_update_stats_on,
       is_auto_update_stats_async_on,
       is_read_committed_snapshot_on, snapshot_isolation_state_desc,
       is_query_store_on, is_encrypted, is_cdc_enabled,
       page_verify_option_desc, is_parameterization_forced
FROM   sys.databases;

Giá trị NÊN có:
  page_verify_option_desc        CHECKSUM   (không bao giờ NONE hay TORN_PAGE_DETECTION)
  is_auto_close_on               0
  is_auto_shrink_on              0
  is_auto_create_stats_on        1
  is_auto_update_stats_on        1
  recovery_model_desc            FULL nếu cần PITR (và PHẢI backup log)</code></pre>
<p>Cấp database-scoped configuration là một lớp khác, xem <a href="#c5">C.5</a>.</p>
</section>

<section id="g3">
<h3>G.3 Perform backup and restore a database by using T-SQL<a class="anch" href="#g3">#</a></h3>

<p><b>★ Prepare databases for Always On Availability Groups</b> — <a href="https://learn.microsoft.com/en-us/sql/database-engine/availability-groups/windows/manually-prepare-a-secondary-database-for-an-availability-group-sql-server" target="_blank" rel="noopener">Manually prepare a secondary database</a></p>
<pre><code>-- Ở PRIMARY
ALTER DATABASE AppDb SET RECOVERY FULL;              -- điều kiện bắt buộc
BACKUP DATABASE AppDb TO DISK = '\\\\share\\AppDb.bak' WITH FORMAT, CHECKSUM;
BACKUP LOG      AppDb TO DISK = '\\\\share\\AppDb.trn';

-- Ở SECONDARY: restore WITH NORECOVERY, KHÔNG bao giờ RECOVERY
RESTORE DATABASE AppDb FROM DISK = '\\\\share\\AppDb.bak'
   WITH NORECOVERY, MOVE 'AppDb' TO 'F:\\data\\AppDb.mdf',
                    MOVE 'AppDb_log' TO 'G:\\log\\AppDb.ldf';
RESTORE LOG AppDb FROM DISK = '\\\\share\\AppDb.trn' WITH NORECOVERY;

-- Rồi join vào AG
ALTER DATABASE AppDb SET HADR AVAILABILITY GROUP = AG1;</code></pre>
<p>Từ SQL Server 2016 có <b>automatic seeding</b> (<code>SEEDING_MODE = AUTOMATIC</code>) — SQL tự stream database sang secondary, bỏ hẳn bước backup/restore tay. Đánh đổi: tốn băng thông mạng lúc seed và không nén được như backup.</p>

<p><b>★ Perform transaction log backup</b> — <a href="https://learn.microsoft.com/en-us/sql/relational-databases/backup-restore/back-up-a-transaction-log-sql-server" target="_blank" rel="noopener">Back up a transaction log</a></p>
<pre><code>BACKUP LOG AppDb TO DISK = '...' WITH INIT, CHECKSUM;

Ba điều kiện: recovery model FULL hoặc BULK_LOGGED · đã có ÍT NHẤT MỘT full backup
              · chuỗi log chưa bị đứt

Backup log làm HAI việc: lưu lại giao dịch, VÀ cắt phần log không còn cần
   -> KHÔNG backup log thì file log phình mãi (log_reuse_wait_desc = 'LOG_BACKUP')
   -> backup log KHÔNG làm file NHỎ LẠI, chỉ làm phần bên trong dùng lại được.
      Muốn file nhỏ lại phải SHRINKFILE (và nên tránh).

Tail-log backup — trước khi restore, để không mất giao dịch cuối cùng:
   BACKUP LOG AppDb TO DISK = '...' WITH NORECOVERY, NO_TRUNCATE;
   NO_TRUNCATE cho phép backup log ngay cả khi data file đã hỏng.</code></pre>

<p><b>★ Perform restore of user databases · ★ Perform database backups with options</b> — xem <a href="#f3">F.3</a> (danh sách đầy đủ tuỳ chọn BACKUP/RESTORE và thứ tự dây phục hồi). Bổ sung phần <b>giám sát</b>:</p>
<pre><code>-- Tiến độ backup/restore đang chạy
SELECT session_id, command, percent_complete,
       est_min = estimated_completion_time / 60000.0
FROM   sys.dm_exec_requests
WHERE  command LIKE '%BACKUP%' OR command LIKE '%RESTORE%';

-- Lịch sử backup nằm ở MSDB, không nằm ở file
SELECT database_name, type, backup_start_date, backup_finish_date,
       backup_size, compressed_backup_size, first_lsn, last_lsn, is_copy_only
FROM   msdb.dbo.backupset ORDER BY backup_start_date DESC;
   type: D full · I differential · L log · F file/filegroup · P partial

Chuỗi LSN là thứ nối các bản backup thành một dây: first_lsn của bản log
sau phải khớp last_lsn của bản trước. Không khớp = dây ĐỨT.</code></pre>
</section>

<section id="g4">
<h3>G.4 Manage authentication and authorization by using T-SQL<a class="anch" href="#g4">#</a></h3>

<p><b>★ Manage certificates</b></p>
<pre><code>Phân cấp khoá trong SQL Server:
  Service Master Key (SMK)   tự tạo lúc cài, mã hoá bằng DPAPI của Windows
   └─ Database Master Key (DMK)  mỗi database một cái, mã hoá bằng SMK + password
       └─ Certificate / Asymmetric key
           └─ Symmetric key           ← thứ thật sự mã hoá dữ liệu

CREATE MASTER KEY ENCRYPTION BY PASSWORD = '...';
CREATE CERTIFICATE MyCert WITH SUBJECT = '...', EXPIRY_DATE = '2030-01-01';

-- BƯỚC KHÔNG ĐƯỢC QUÊN với TDE và với backup mã hoá
BACKUP CERTIFICATE MyCert TO FILE = '...cer'
  WITH PRIVATE KEY (FILE = '...pvk', ENCRYPTION BY PASSWORD = '...');

Dùng certificate cho: TDE · mã hoá cấp cột · ký module (signed procedure) ·
                      xác thực endpoint của AG/database mirroring
Trên Azure SQL Database: quản lý certificate hạn chế; TDE dùng
service-managed key hoặc Key Vault, không dùng certificate tự tạo.</code></pre>

<p><b>★ Manage security principals</b></p>
<pre><code>-- Cấp SERVER (không có trên Azure SQL Database, chỉ có ở master với vai trò hạn chế)
CREATE LOGIN app_user WITH PASSWORD = '...', CHECK_POLICY = ON;
ALTER  SERVER ROLE securityadmin ADD MEMBER app_user;

-- Cấp DATABASE
CREATE USER app_user FOR LOGIN app_user;      -- user gắn với login
CREATE USER app_user WITH PASSWORD = '...';   -- CONTAINED user, không cần login
CREATE USER svc      WITHOUT LOGIN;           -- chỉ để EXECUTE AS / gán quyền
CREATE USER [x@contoso.com] FROM EXTERNAL PROVIDER;   -- Entra ID

-- Login mồ côi sau khi restore sang server khác (SID lệch) — lỗi kinh điển
SELECT dp.name, dp.sid FROM sys.database_principals dp
LEFT JOIN sys.server_principals sp ON sp.sid = dp.sid
WHERE dp.type IN ('S','U','G') AND sp.sid IS NULL AND dp.principal_id > 4;

ALTER USER app_user WITH LOGIN = app_user;    -- cách sửa hiện nay
-- (sp_change_users_login là cách CŨ, đã deprecated)</code></pre>
<div class="tip"><b>Contained user</b> là câu trả lời của "làm sao database mang theo được danh tính khi failover sang server khác" — vì không có login ở master để bị bỏ lại. Đây cũng là lý do Azure SQL Database dùng mô hình này làm mặc định.</div>

<p><b>★ Configure permissions for users to access database objects · ★ Configure permissions by using custom role</b> — <a href="https://learn.microsoft.com/en-us/sql/t-sql/statements/create-role-transact-sql" target="_blank" rel="noopener">CREATE ROLE</a></p>
<pre><code>-- Mẫu least privilege chuẩn: role thay vì cấp thẳng cho user
CREATE ROLE SalesReadOnly;
GRANT SELECT ON SCHEMA::sales TO SalesReadOnly;   -- cấp ở cấp SCHEMA, không từng bảng
DENY  SELECT ON hr.Employees(Salary) TO SalesReadOnly;   -- DENY cấp CỘT
ALTER ROLE SalesReadOnly ADD MEMBER app_reader;

-- Kiểm chứng, đừng tin lý thuyết
EXECUTE AS USER = 'app_reader';
    SELECT HAS_PERMS_BY_NAME('sales.Customers','OBJECT','SELECT');
    SELECT * FROM fn_my_permissions('sales.Customers','OBJECT');
REVERT;

-- Xem toàn bộ quyền đã cấp thẳng (nơi ẩn nấp của quyền thừa)
SELECT USER_NAME(grantee_principal_id), permission_name, state_desc, class_desc
FROM   sys.database_permissions;</code></pre>
<p>Cấp ở <b>cấp schema</b> thay vì từng bảng là mẫu đúng: bảng tạo sau tự động được bao gồm. Bốn luật quyết định kết quả cuối cùng (DENY thắng GRANT, cộng dồn qua role, ownership chaining, DENY cột thắng GRANT bảng) ở <a href="#b2">B.2</a>, có bản chứng minh chạy được ở <a href="/dp-300/labs#m3d">lab 3.4</a>.</p>
</section>

<h2 class="dom">Z. Kết</h2>

<section id="z1">
<h3>Z.1 Những gì danh sách của bạn KHÔNG có mà đề hiện tại CÓ<a class="anch" href="#z1">#</a></h3>
<p>Đây là phần nguy hiểm nhất của việc ôn theo study guide cũ: không phải cái sai, mà cái <b>thiếu</b>. Mười hai gạch đầu dòng dưới đây nằm trong skills measured bản 24/04/2026 và <b>hoàn toàn vắng mặt</b> trong 130 link kia. (Còn <i>"Recommend a database sharding solution"</i> thì danh sách cũ <b>có</b> — dưới tên <i>"Evaluate database partitioning techniques, such as database sharding"</i>, xem <a href="#a3">A.3</a>.)</p>
<table>
<thead><tr><th>Domain</th><th>Gạch đầu dòng mới</th><th>Học ở đâu trong repo</th></tr></thead>
<tbody>
<tr><td rowspan="3">1</td><td><b>Identify use cases for Azure Arc-enabled SQL services</b></td><td><a href="/dp-300/documents#s6a">tài liệu 6a</a></td></tr>
<tr><td><b>Identify use cases for Azure SQL Database in Microsoft Fabric</b></td><td><a href="/dp-300/documents#s6b">tài liệu 6b</a></td></tr>
<tr><td><b>Implement Azure SQL Managed Instance database copy and move</b></td><td><a href="#a5">A.5</a> ở trên · <a href="/dp-300/documents#s22a">tài liệu 22a</a></td></tr>
<tr><td rowspan="4">2</td><td><b>Implement ledger in Azure SQL</b></td><td><a href="/dp-300/documents#s41">tài liệu 41</a> · <a href="/dp-300/labs#m3d">lab 3.4 phần E3</a></td></tr>
<tr><td><b>Implement Always Encrypted with VBS enclaves</b></td><td><a href="/dp-300/documents#s33a">tài liệu 33a</a></td></tr>
<tr><td><b>Configure private links and service endpoints</b></td><td><a href="/dp-300/documents#s34a">tài liệu 34a</a></td></tr>
<tr><td><b>Implement row-level security</b> (danh sách cũ không có!)</td><td><a href="/dp-300/documents#s42">tài liệu 42</a> · <a href="/dp-300/labs#m3d">lab 3.4 phần C</a></td></tr>
<tr><td rowspan="3">3</td><td><b>Monitor by using database watcher</b></td><td><a href="/dp-300/documents#s48a">tài liệu 48a</a></td></tr>
<tr><td><b>Monitor by using Extended Events</b></td><td><a href="/dp-300/documents#s52">tài liệu 52</a></td></tr>
<tr><td><b>Monitor by using Intelligent Insights</b></td><td><a href="/dp-300/labs#m4e">lab 4.5</a></td></tr>
<tr><td>4</td><td><b>Automate deployment by using Bicep</b> (danh sách cũ chỉ có ARM)</td><td><a href="/dp-300/labs#m2b">lab 2.1</a></td></tr>
<tr><td>5</td><td><b>Configure Always On availability groups on SQL Managed Instance</b></td><td><a href="/dp-300/documents#s90">tài liệu 90</a></td></tr>
</tbody></table>
<div class="warn"><b>Chú ý dòng row-level security.</b> Danh sách 130 link của bạn không có RLS ở bất cứ đâu, trong khi nó là một gạch đầu dòng đầy đủ của domain 2 (20–25%) hiện nay — và là một trong những thứ đề hỏi nhiều nhất về bảo mật. Đây là ví dụ rõ nhất cho việc study guide cũ để lại lỗ hổng.</div>
</section>

<section id="z2">
<h3>Z.2 Dùng danh sách cũ này thế nào cho đỡ phí<a class="anch" href="#z2">#</a></h3>
<ol>
<li><b>Giữ nó làm checklist nội dung, bỏ trọng số của nó.</b> Phân bổ thời gian theo <a href="#s0">bảng ở mục 0.1</a>: bảo mật, giám sát, tự động hoá và HA/DR đều đã nặng hơn.</li>
<li><b>Bỏ hẳn năm thứ đã khai tử</b> ở <a href="#s0b">mục 0.2</a> — đừng đọc tài liệu Update Management hay Index Advisor nữa.</li>
<li><b>Bù ngay mười hai gạch đầu dòng ở <a href="#z1">Z.1</a></b>, đặc biệt RLS, ledger, Private Link, database watcher và Bicep.</li>
<li><b>Đổi cách học phần T-SQL.</b> Nó không còn là một domain riêng dễ ăn điểm; giờ nó là công cụ để trả lời câu hỏi của bốn domain kia. Học bằng cách <b>gõ</b>, ở <a href="/dp-300/labs">trang thực hành</a>, chứ không bằng cách đọc cú pháp.</li>
<li><b>Rồi mới luyện câu hỏi</b> ở <a href="/dp-300/practice">trang luyện thi</a>, lọc theo đúng phạm vi còn yếu.</li>
</ol>
<p class="src"><b>Nguồn của toàn trang:</b> tổng hợp từ chính 130 link trong danh sách (theo địa chỉ hiện hành sau redirect), đối chiếu với <a href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-300" target="_blank" rel="noopener">study guide DP-300 bản 24/04/2026</a>. Các mốc khai tử đã kiểm chứng: <a href="https://azure.microsoft.com/en-us/updates?id=updatemanagement-retired-31august2024" target="_blank" rel="noopener">Automation Update Management 31/08/2024</a> · <a href="https://learn.microsoft.com/en-us/azure/azure-sql/database/sql-data-sync-retirement-migration" target="_blank" rel="noopener">SQL Data Sync 30/09/2027</a> · Data Migration Assistant 16/07/2025. Đọc ngày 27/08/2026.</p>
</section>
`,b=e({__name:"Dp300SourcesPage",setup(c){return(o,s)=>(i(),t(n,{certId:"dp300",html:a(r),title:"DP-300 · Bản đồ tài liệu",subtitle:"Tổng hợp 130 link của study guide đời cũ (7 domain) — nội dung, link còn sống, 5 thứ đã khai tử và 12 gạch đầu dòng bản cũ bỏ sót",practiceRoute:"/dp-300/practice",practiceLabel:"Luyện thi DP-300",extraLinks:[{to:"/dp-300/documents",label:"Tài liệu"},{to:"/dp-300/tables",label:"Bảng ôn nhanh"},{to:"/dp-300/labs",label:"Thực hành"}]},null,8,["html"]))}});export{b as default};
