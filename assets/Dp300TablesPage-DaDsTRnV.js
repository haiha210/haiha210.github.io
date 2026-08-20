import{d as rt,j as p,q as at,A as ct,c as o,a,t as l,b as A,G as N,H as z,f,g as _,w as O,Q as F,m as Y,r as it,n as ht,o as s,J as W,h as j}from"./index-DzSNHJeF.js";import{_ as ot}from"./ThemeToggle.vue_vue_type_script_setup_true_lang-D3iIUu2-.js";import{u as st}from"./useStudyClock-PrdRmPCU.js";const P=`<h2 class="dom" id="d1">Phạm vi 1 · Nền tảng dữ liệu &amp; di trú</h2>

<section id="t101">
<h3>Ba nền tảng Azure SQL — bảng gốc để suy ra mọi câu hỏi khác<a class="nl" href="/dp-300/notes#s-3">note 4–6</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Azure%20SQL%20DB,Azure%20SQL%20MI,SQL%20on%20VM" title="Ôn 33 câu: Azure SQL DB, Azure SQL MI, SQL on VM (tab mới)">ôn 33 câu</a></h3>
<p class="lead">Đọc đề tìm ba từ khoá: <b>quyền OS</b>, <b>tính năng cũ</b>, <b>ai quản backup/patch</b>. Trả lời được ba cái đó là chọn đúng nền tảng.</p>
<div class="tw"><table class="cmp">
<tr><th>Tiêu chí</th><th>Azure SQL Database (PaaS)</th><th>SQL Managed Instance (PaaS)</th><th>SQL Server trên Azure VM (IaaS)</th></tr>
<tr><td>Ai quản</td><td>Azure quản database</td><td>Azure quản instance, bạn quản database</td><td>Bạn quản cả VM lẫn database</td></tr>
<tr><td>Backup / patch</td><td colspan="2">Backup và patch tự động — bạn KHÔNG chọn được thời điểm patch, hãy viết retry logic</td><td>Bạn tự làm (hoặc dùng SQL IaaS Agent extension cho Automated Patching / Backup)</td></tr>
<tr><td>Tương thích</td><td>Các tính năng SQL Server dùng nhiều nhất</td><td>Tương thích cao với SQL Server</td><td>Toàn bộ khả năng on-premises</td></tr>
<tr><td>Trace flag</td><td>Không hỗ trợ</td><td>Chỉ một số global trace flag</td><td>Hỗ trợ đầy đủ</td></tr>
<tr><td>CLR, cross-database query, msdb</td><td>Không</td><td>Có</td><td>Có</td></tr>
<tr><td>Dung lượng</td><td>Tới 4 TB, Hyperscale tới 100 TB</td><td>Tới 16 TB / instance, 100 database</td><td>Instance tới 256 TB</td></tr>
<tr><td>Job</td><td>Elastic Job Agent</td><td>SQL Server Agent (luôn chạy sẵn)</td><td>SQL Server Agent (có thể phải Start)</td></tr>
<tr><td>Phiên bản engine</td><td>Enterprise ổn định mới nhất</td><td>Enterprise ổn định mới nhất</td><td>Bạn chọn version + edition + OS</td></tr>
<tr><td>Tắt để tiết kiệm</td><td>Chỉ serverless (auto-pause)</td><td>Không — luôn chạy</td><td>Tắt VM được bất cứ lúc nào</td></tr>
<tr><td>Chọn khi</td><td>App cloud mới, cần ra thị trường nhanh</td><td>Đưa app on-prem lên cloud gần như nguyên vẹn</td><td>Không muốn sửa database, hoặc cần quyền OS</td></tr>
<tr><td>Hybrid Benefit</td><td>Có (trừ serverless)</td><td>Có</td><td>Có (Windows Server + SA)</td></tr>
</table></div>
</section>

<section id="t102">
<h3>Mô hình mua và hình thái compute<a class="nl" href="/dp-300/notes#s9">note 9</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Azure%20SQL%20DB,Resource" title="Ôn 18 câu: Azure SQL DB, Resource (tab mới)">ôn 18 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Lựa chọn</th><th>Chọn khi</th><th>Chi tiết ra đề</th></tr>
<tr><td>DTU</td><td>Muốn một gói dựng sẵn gồm compute + storage + IO</td><td>Đơn giản nhưng cứng; đơn giá eDTU của pool = 1,5× đơn giá DTU single database; dùng Premium disk, cấp phát theo bước 250 GB tới 1 TB rồi 256 GB</td></tr>
<tr><td>vCore</td><td>Cần chỉnh riêng vCore / memory / storage, muốn minh bạch chi phí</td><td>Dùng được Hybrid Benefit + reserved capacity; tối đa 80 vCore Gen5; dùng SSD cục bộ, bước 1 GB; giá vCore pool = giá single database</td></tr>
<tr><td>Single database</td><td>Một database độc lập, mang đi được</td><td>Scale thủ công, KHÔNG autoscale; chuyển ra/vào elastic pool được</td></tr>
<tr><td>Elastic pool</td><td>Nhiều database, cao điểm lệch nhau</td><td>Dùng chung tài nguyên pool; scale hoặc autoscale được</td></tr>
<tr><td>Provisioned</td><td>Mức dùng đều đặn, dự đoán được</td><td>Trả tiền cho phần đã cấp, dùng hay không cũng vậy</td></tr>
<tr><td>Serverless</td><td>Dùng ngắt quãng, trung bình thấp</td><td>Tự pause/resume; lúc pause chỉ trả storage; CDC không chạy khi đang pause; Hybrid Benefit không áp dụng</td></tr>
</table></div>
<p class="lead">Vượt 300 DTU thì cân nhắc chuyển sang vCore — đổi không có downtime. Sau khi re-scale, chạy <code>EXEC sp_query_store_flush_db</code> để DMV cho số liệu đúng.</p>
</section>

<section id="t103">
<h3>Service tier — chi tiết nhận dạng là độ trễ hoặc số replica<a class="nl" href="/dp-300/notes#s9">note 9–10</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Azure%20SQL%20DB,Azure%20SQL%20MI" title="Ôn 22 câu: Azure SQL DB, Azure SQL MI (tab mới)">ôn 22 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Tier</th><th>Dành cho</th><th>Con số phân biệt</th></tr>
<tr><td>Basic / Standard (DTU)</td><td>Dev, test, workload ít truy cập</td><td>Basic, S0, S1, S2 có &lt; 1 vCore → KHÔNG dùng được Change Data Capture; Basic/S0/S1 nằm trên HDD</td></tr>
<tr><td>General Purpose</td><td>Phần lớn workload nghiệp vụ</td><td>Độ trễ storage 5–10 ms (xấp xỉ SQL Server trên VM)</td></tr>
<tr><td>Business Critical / Premium</td><td>IO độ trễ thấp, nhiều update, transaction dài</td><td>IO 1–2 ms; 3 replica (~2,7× giá); 1 secondary read-only miễn phí; chống hỏng dữ liệu tốt hơn</td></tr>
<tr><td>Hyperscale</td><td>Database rất lớn, storage scale theo nhu cầu</td><td>Tới 100 TB; chỉ có ở SQL Database; SLA 99,9% (0 replica) / 99,95% (1 replica); vào rồi KHÔNG ra được</td></tr>
<tr><td>Managed Instance GP / BC</td><td>MI chỉ có đúng hai tier này</td><td>80 vCore, 400 GB memory, 100 database, 16 TB; KHÔNG có Hyperscale, KHÔNG có DTU</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>tempdb</th><th>Số file</th></tr>
<tr><td>Azure SQL Database</td><td>1 file / vCore, 32 GB mỗi file, tối đa 32 file (chỉ serverless)</td></tr>
<tr><td>Managed Instance</td><td>Luôn 12 file, bất kể số vCore</td></tr>
<tr><td>SQL Server trên VM</td><td>1 data file / core, tối đa 8 file</td></tr>
</table></div>
</section>

<section id="t104">
<h3>SQL Server trên VM — best practice lưu trữ<a class="nl" href="/dp-300/notes#s11">note 11</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=SQL%20on%20VM" title="Ôn 11 câu: SQL on VM (tab mới)">ôn 11 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Đối tượng</th><th>Đặt ở đâu</th><th>Disk caching</th></tr>
<tr><td>File data</td><td>Premium P30–P40 (có hỗ trợ cache)</td><td><b>ReadOnly</b> — đọc từ cache nhanh hơn nhiều</td></tr>
<tr><td>File log</td><td>Premium P30–P80, hoặc Ultra disk nếu cần dưới 1 ms</td><td><b>None</b> — ghi tuần tự, cache vô ích</td></tr>
<tr><td>tempdb</td><td>Ổ D, trên SSD cục bộ</td><td>—</td></tr>
<tr><td>Mọi file SQL Server</td><td>—</td><td><b>KHÔNG dùng ReadWrite</b> — SQL Server không đảm bảo nhất quán dữ liệu</td></tr>
<tr><td>Storage account</td><td>Locally redundant, không dùng geo-redundant</td><td>Đổi mức caching phải khởi động lại máy</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Storage Spaces resiliency</th><th>Số đĩa tối thiểu</th><th>Dùng khi</th></tr>
<tr><td>Simple</td><td>1</td><td>Chỉ stripe, tối đa dung lượng + thông lượng, KHÔNG chịu lỗi</td></tr>
<tr><td>Mirror</td><td>2 (chịu hỏng 1 đĩa)</td><td>Giữ 2–3 bản sao; thông lượng cao, độ trễ thấp — phần lớn triển khai</td></tr>
<tr><td>Parity</td><td>3 (chịu hỏng 1 đĩa)</td><td>Stripe cả data lẫn parity; dùng cho lưu trữ dài hạn và backup</td></tr>
</table></div>
<p class="lead">Các bước: tạo từng đĩa → tạo storage pool (≥ 3 ổ) → tạo một virtual disk (chọn resiliency) → tạo volume. Khi tạo VM, "Configure storage" cho chọn <b>Transactional processing</b> hay <b>Data warehousing</b> — chọn này đổi cấu hình stripe.</p>
</section>

<section id="t105">
<h3>Dòng VM và SLA<a class="nl" href="/dp-300/notes#s11">note 11</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=SQL%20on%20VM,SLA" title="Ôn 15 câu: SQL on VM, SLA (tab mới)">ôn 15 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Dòng VM</th><th>Đặc điểm</th><th>Hợp với</th></tr>
<tr><td>General purpose</td><td>Cân bằng CPU–memory</td><td>Dev/test, database nhỏ–vừa, web server lưu lượng thấp–vừa</td></tr>
<tr><td>Compute optimized</td><td>CPU cao</td><td>Web server lưu lượng trung bình, network appliance, batch, app server</td></tr>
<tr><td><b>Memory optimized</b></td><td>Memory cao (tới 4 TB)</td><td><b>Lựa chọn tốt nhất cho SQL Server</b>; cache vừa–lớn, in-memory analytics</td></tr>
<tr><td>Storage optimized</td><td>Thông lượng đĩa cao</td><td>Big Data, data warehouse, database giao dịch lớn</td></tr>
<tr><td>GPU</td><td>Máy chuyên dụng</td><td>Kết xuất đồ họa, deep learning</td></tr>
<tr><td>High performance compute</td><td>CPU mạnh nhất</td><td>Tính toán hiệu năng cao</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Cấu hình</th><th>SLA của VM</th></tr>
<tr><td>Standard HDD Managed Disk</td><td>95% (~18 ngày/năm)</td></tr>
<tr><td>Standard SSD Managed Disk</td><td>99,5% (~1,8 ngày/năm)</td></tr>
<tr><td>Premium SSD hoặc Ultra Disk</td><td>99,9% (~8 giờ/năm)</td></tr>
<tr><td>≥ 2 instance trong cùng một Availability Set</td><td>99,95% — máy khác nhau, cùng datacenter</td></tr>
<tr><td>≥ 2 instance ở ≥ 2 Availability Zone, cùng region</td><td>99,99% — datacenter khác nhau, nguồn/mát/mạng độc lập</td></tr>
</table></div>
<p class="lead">Chọn VM cho SQL Server: ít nhất 4 vCPU, memory optimized, tỉ lệ memory/vCore cao hơn cho hệ thống trọng yếu và data warehouse. Bật page compression, backup compression, instant file initialization; giới hạn autogrowth, tắt autoshrink.</p>
</section>

<section id="t106">
<h3>Chọn công cụ di trú — đọc đề tìm nguồn, đích, downtime<a class="nl" href="/dp-300/notes#s15">note 15–16</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Migration,MI%20copy%2Fmove" title="Ôn 22 câu: Migration, MI copy/move (tab mới)">ôn 22 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Nhu cầu</th><th>Công cụ</th><th>Cần nhớ</th></tr>
<tr><td>Đánh giá cả data estate, lift-and-shift lên VM</td><td>Azure Migrate</td><td>Cho khuyến nghị đích, kích cỡ và ước tính chi phí hằng tháng</td></tr>
<tr><td>Nguồn KHÁC engine: Access, DB2, MySQL, Oracle, SAP ASE</td><td>SSMA</td><td>Chuyển đổi object trước, rồi mới chuyển dữ liệu</td></tr>
<tr><td>So sánh workload nguồn và đích trước khi chuyển</td><td>Database Experimentation Assistant</td><td>Bắt lại workload, tìm vấn đề tương thích</td></tr>
<tr><td>Thực hiện di trú vào SQL Database / MI</td><td>Azure Database Migration Service</td><td>Online cần tier <b>Premium</b>; Standard miễn phí nhưng chỉ offline. DMS KHÔNG tự backup — bạn cấp full + log backup, nó KHÔNG dùng differential</td></tr>
<tr><td>Đánh giá tương thích (việc DMA từng làm)</td><td>Azure Migrate / SQL Server migration in Azure Arc / VS Code + MSSQL extension</td><td>Data Migration Assistant khai tử 16/07/2025</td></tr>
<tr><td>Sao chép schema + dữ liệu một lần</td><td>BACPAC (data-tier application)</td><td>Wizard Import/Export Data chỉ chép <b>dữ liệu</b> — không view, procedure, function</td></tr>
<tr><td>Giữ nhiều database đồng bộ</td><td>SQL Data Sync</td><td>Hub phải là Azure SQL Database; bảng cần primary key; KHÔNG dùng với MI</td></tr>
<tr><td>Chuyển database giữa hai MI</td><td>MI database copy / move</td><td>Không mất dữ liệu; copy thì bản gốc vẫn online và sau đó hai bên ngừng đồng bộ; không hoàn tất trong 24 giờ thì bị hủy</td></tr>
<tr><td>MySQL → Azure Database for MySQL flexible server</td><td>DMS (cùng engine)</td><td>Cả offline và online đã GA</td></tr>
<tr><td>PostgreSQL → Azure Database for PostgreSQL flexible</td><td>Migration service tích hợp trong PostgreSQL</td><td>KHÔNG dùng DMS — DMS không hỗ trợ migrate PostgreSQL offline</td></tr>
<tr><td>MariaDB</td><td>Đích là Azure Database for MySQL flexible server</td><td>Azure Database for MariaDB khai tử 19/09/2025</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Điều kiện cho DMS</th><th>Giá trị</th></tr>
<tr><td>Port</td><td>Outbound 443 (HTTPS), TCP 1433, có thể cần UDP 1434. MySQL = 3306, PostgreSQL = 5432</td></tr>
<tr><td>Quyền</td><td>CONTROL SERVER trên nguồn, CONTROL DATABASE trên đích</td></tr>
<tr><td>Mạng</td><td>VNet qua ExpressRoute hoặc VPN; firewall rule cấp server cho DMS truy cập</td></tr>
<tr><td>Miễn phí</td><td>Premium 4 vCore miễn phí 6 tháng, dùng tối đa 1 năm, 2 dịch vụ DMS / subscription</td></tr>
</table></div>
</section>

<section id="t106a">
<h3>So sánh toàn bộ dịch vụ di trú<a class="nl" href="/dp-300/notes#s15">note 15–16</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Migration,MI%20copy%2Fmove" title="Ôn 22 câu: Migration, MI copy/move (tab mới)">ôn 22 câu</a></h3>
<p class="lead">Đọc cột <b>Vai trò</b> trước: nhãn đầu cột cho biết dịch vụ đó <b>đánh giá</b>, <b>chuyển</b>, hay chỉ <b>đồng bộ lâu dài</b> — ba việc khác hẳn nhau, và một dự án thật thường dùng cả ba theo đúng thứ tự. Ví dụ hay lẫn nhất là <b>Azure Migrate và DMS</b> — Azure Migrate trả lời <i>"nên chuyển đi đâu"</i> và không hề đụng tới dữ liệu; DMS mới là cái <i>thực sự chuyển</i> database sang đó.</p>
<div class="tw"><table class="cmp">
<tr><th>Dịch vụ</th><th>Vai trò</th><th>Nguồn → đích</th><th>Downtime</th><th>Mang theo object?</th><th>Cần nhớ</th></tr>
<tr><td><b>Azure Migrate</b></td><td><b>Đánh giá</b> · Kiểm kê toàn bộ máy chủ hiện có</td><td>Không chuyển dữ liệu — chỉ đề xuất nên chuyển đi đâu</td><td>Không áp dụng</td><td>—</td><td>Quét các máy chủ đang chạy rồi trả lời ba câu: nên đưa sang nền tảng nào, cần cấu hình bao lớn, tốn bao nhiêu tiền mỗi tháng. Từ khi DMA khai tử, việc kiểm tra tương thích trước khi chuyển cũng làm ở đây</td></tr>
<tr><td><b>DEA</b> — Database Experimentation Assistant</td><td><b>Đánh giá</b> · So workload nguồn và đích <b>trước</b> khi chuyển</td><td>Không chuyển dữ liệu — chỉ bắt và phát lại workload</td><td>Không áp dụng</td><td>—</td><td>Bắt lại workload thật rồi phát lên đích dự kiến, tìm truy vấn thoái lui hiệu năng sau khi đổi nền tảng</td></tr>
<tr><td><b>DMA</b> — Data Migration Assistant</td><td><b>Đánh giá</b> · Kiểm tra tương thích (và di trú DB nhỏ)</td><td>SQL Server → SQL DB / MI</td><td>Offline nếu dùng để chuyển</td><td>Có</td><td><b>Khai tử 16/07/2025</b>. Đề còn nhắc DMA là đang hỏi vai trò <b>đánh giá</b>, không phải công cụ thực hiện</td></tr>
<tr><td><b>DMS</b> — Database Migration Service</td><td><b>Chuyển</b> · <b>Thực hiện</b> di trú, có quản lý</td><td>SQL Server → SQL DB / MI / VM; MySQL → Flexible</td><td>Có cả <b>offline</b> và <b>online</b></td><td>Có</td><td>DMS <b>không tự backup</b>: bạn cấp full + log backup, và nó <b>không dùng differential</b>. Bản classic Standard–Premium đã deprecate</td></tr>
<tr><td><b>Azure SQL migration extension</b><br>(Azure Data Studio / VS Code)</td><td><b>Chuyển</b> · Giao diện điều khiển DMS bản hiện hành</td><td>SQL Server → SQL DB / MI / VM</td><td>Theo chế độ DMS chọn</td><td>Có</td><td>Không phải dịch vụ riêng — đây là cách chạy DMS hiện nay. Đề nhắc "assessment rồi migrate trong Azure Data Studio" là nói tới nó</td></tr>
<tr><td><b>MI link</b></td><td><b>Chuyển</b> · Di trú gần như không downtime, kiêm DR</td><td>SQL Server 2016+ → Managed Instance</td><td><b>Gần bằng 0</b></td><td>Có</td><td>Dựa trên distributed AG; trước cutover còn dùng làm bản đọc, và hỗ trợ failback về on-prem</td></tr>
<tr><td><b>Log Replay Service</b> (LRS)</td><td><b>Chuyển</b> · Restore dần log vào MI, tự vận hành</td><td>SQL Server → Managed Instance</td><td>Ngắn</td><td>Có</td><td>Dùng khi không dùng được DMS; bạn tự đẩy full + log backup lên Azure Storage</td></tr>
<tr><td><b>Transactional replication</b></td><td><b>Chuyển</b> · Đồng bộ liên tục cho tới lúc cutover</td><td>SQL Server → SQL DB / MI</td><td>Rất ngắn</td><td>Một phần</td><td>Mọi bảng publish phải có <b>primary key</b>; hợp khi chỉ chuyển một phần bảng. Cũng chạy được lâu dài để phân phối dữ liệu</td></tr>
<tr><td><b>Native backup/restore</b></td><td><b>Chuyển</b> · Restore file backup từ URL</td><td>SQL Server → MI hoặc VM</td><td>Bằng thời gian restore</td><td>Có</td><td><b>Azure SQL Database KHÔNG nhận file <code>.bak</code></b> — chỉ MI và VM restore được</td></tr>
<tr><td><b>BACPAC</b> (data-tier application)</td><td><b>Chuyển</b> · Xuất/nhập schema + dữ liệu một lần</td><td>SQL Server ↔ SQL DB / MI</td><td>Dài, theo kích thước DB</td><td>Có</td><td>Khác wizard <b>Import/Export Data</b> — wizard đó chỉ chép <b>dữ liệu</b>, không view/procedure/function</td></tr>
<tr><td><b>SSMA</b> — SQL Server Migration Assistant</td><td><b>Chuyển</b> · Convert schema từ engine khác rồi chuyển dữ liệu</td><td>Oracle, DB2, MySQL, Access, SAP ASE → SQL</td><td>Offline, dài</td><td>Có (convert)</td><td>Công cụ duy nhất trong bảng xử lý được <b>nguồn không phải SQL Server</b>. Hai bước tách rời: convert trước, chuyển dữ liệu sau</td></tr>
<tr><td><b>MI database copy / move</b></td><td><b>Chuyển</b> · Chuyển database giữa hai MI</td><td>MI → MI</td><td>Ngắn</td><td>Có</td><td>Không mất dữ liệu; <i>copy</i> thì bản gốc vẫn online rồi hai bên ngừng đồng bộ; không xong trong <b>24 giờ</b> là bị huỷ</td></tr>
<tr><td><b>ADF</b> — Azure Data Factory</td><td><b>Đồng bộ lâu dài</b> · Pipeline <b>ETL/ELT</b>, chép và biến đổi dữ liệu</td><td>90+ nguồn → Synapse, Fabric, Data Lake, Azure SQL</td><td>Không áp dụng</td><td><b>KHÔNG</b></td><td>Chạy lặp lại theo lịch, nạp tăng dần; có Azure-SSIS IR để lift package SSIS cũ. Không mang được view/procedure/login nên <b>không thay được di trú database</b></td></tr>
<tr><td><b>SQL Data Sync</b></td><td><b>Đồng bộ lâu dài</b> · Giữ nhiều database <b>đồng bộ hai chiều</b> lâu dài</td><td>SQL DB ↔ SQL Server / SQL DB</td><td>Không áp dụng</td><td>Không</td><td>Hub phải là Azure SQL Database; bảng cần primary key; <b>KHÔNG dùng với MI</b></td></tr>
</table></div>
<p class="lead">Ba dịch vụ dưới đây bị nhầm nhau nhiều nhất vì tên đều có chữ "data" — so riêng cho kỹ.</p>
<div class="tw"><table class="cmp">
<tr><th>Tiêu chí</th><th>DMS — Database Migration Service</th><th>ADF — Azure Data Factory</th><th>DMA — Data Migration Assistant</th></tr>
<tr><td>Nó là gì</td><td>Dịch vụ <b>di trú</b> có quản lý, chạy một lần để đưa database sang Azure</td><td>Dịch vụ <b>ETL/ELT</b>, dựng pipeline chép và biến đổi dữ liệu, chạy lặp lại theo lịch</td><td>Công cụ <b>đánh giá tương thích</b> chạy trên máy trạm, kèm khả năng di trú DB nhỏ</td></tr>
<tr><td>Câu hỏi nó trả lời</td><td>"Chuyển nguyên database này sang Azure thế nào?"</td><td>"Lấy dữ liệu từ nhiều nguồn, biến đổi rồi nạp vào đâu?"</td><td>"Database này lên Azure có vướng gì không?"</td></tr>
<tr><td>Chuyển được gì</td><td>Schema + dữ liệu + object của cả database</td><td>Chỉ <b>dữ liệu trong bảng</b> — KHÔNG chuyển view, stored procedure, function, login</td><td>Schema + dữ liệu (quy mô nhỏ), kèm báo cáo vấn đề tương thích</td></tr>
<tr><td>Đích điển hình</td><td>Azure SQL Database, Managed Instance, SQL Server trên VM</td><td>Synapse, Fabric, Data Lake, Azure SQL — thiên về kho phân tích</td><td>Azure SQL Database, Managed Instance</td></tr>
<tr><td>Downtime</td><td>Có cả <b>offline</b> và <b>online</b> (minimal downtime, chỉ mất cửa sổ cutover)</td><td>Không phải khái niệm downtime — pipeline chạy song song với hệ thống nguồn</td><td>Offline</td></tr>
<tr><td>Chạy một lần hay lặp lại</td><td>Một lần, xong là gỡ</td><td><b>Lặp lại</b> theo trigger/lịch, hỗ trợ nạp tăng dần</td><td>Một lần</td></tr>
<tr><td>Biến đổi dữ liệu</td><td>Không — sang tới đích phải giống nguồn</td><td><b>Có</b>, đây chính là lý do tồn tại của ADF (mapping data flow)</td><td>Không</td></tr>
<tr><td>Tình trạng</td><td>Bản hiện hành chạy qua <b>Azure SQL migration extension</b> (Azure Data Studio / VS Code); DMS classic Standard–Premium đã deprecate</td><td>Đang dùng bình thường; có Azure-SSIS IR để lift luôn package SSIS cũ</td><td><b>Khai tử 16/07/2025</b> — thay bằng Azure Migrate hoặc SQL Server migration in Azure Arc</td></tr>
<tr><td>Bẫy hay hỏi</td><td>DMS <b>không tự backup</b>: bạn cấp full + log backup lên SMB share hoặc Azure Storage, và nó <b>không dùng differential</b></td><td>Thấy đề nói "chuyển nguyên một database OLTP lên MI" mà chọn ADF là sai — ADF không mang theo programmability</td><td>Đề còn nhắc DMA thì đang hỏi vai trò <b>đánh giá</b>, không phải công cụ thực hiện di trú</td></tr>
</table></div>
<p class="lead">Đề gần như luôn cho sẵn ngưỡng downtime chấp nhận được, nên nhớ thứ tự này là loại được ngay quá nửa phương án — chi tiết từng đường xem bảng đầu mục.</p>
<div class="tw"><table class="cmp">
<tr><th>Xếp theo downtime, ít nhất trước</th><th>Đường di trú</th><th>Điều kiện đi kèm</th></tr>
<tr><td>Gần bằng 0</td><td>MI link</td><td>Nguồn SQL Server 2016+, đích bắt buộc là Managed Instance</td></tr>
<tr><td>Chỉ cửa sổ cutover</td><td>DMS online</td><td>Đường mặc định cho SQL Server → SQL Database / MI</td></tr>
<tr><td>Rất ngắn</td><td>Transactional replication</td><td>Mọi bảng publish phải có primary key</td></tr>
<tr><td>Ngắn, tự vận hành</td><td>Log Replay Service</td><td>Chỉ đích MI, và bạn tự đẩy backup lên Azure Storage</td></tr>
<tr><td>Bằng thời gian chuyển</td><td>DMS offline</td><td>Database nhỏ, chấp nhận dừng dịch vụ</td></tr>
<tr><td>Bằng thời gian restore</td><td>Native backup/restore</td><td>Chỉ đích MI hoặc VM — SQL Database không nhận <code>.bak</code></td></tr>
<tr><td>Dài</td><td>BACPAC · SSMA</td><td>BACPAC cho DB nhỏ; SSMA khi nguồn khác engine</td></tr>
</table></div>
</section>

<section id="t107">
<h3>Phân vùng và sharding<a class="nl" href="/dp-300/notes#s7">note 7–8</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Partitioning" title="Ôn 8 câu: Partitioning (tab mới)">ôn 8 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Kỹ thuật</th><th>Chia theo</th><th>Cần nhớ</th></tr>
<tr><td>Horizontal (sharding)</td><td>Dòng — mọi partition cùng schema</td><td>Nhân bản dữ liệu nhỏ và tĩnh vào mọi shard để tránh truy vấn xuyên partition</td></tr>
<tr><td>Vertical</td><td>Cột</td><td>Tách cột ít dùng hoặc nhạy cảm; các partition vẫn phải join lại được (cùng primary key)</td></tr>
<tr><td>Functional</td><td>Cả bảng, theo chức năng nghiệp vụ</td><td>Ví dụ dữ liệu cửa hàng một nơi, dữ liệu nhân viên một nơi</td></tr>
<tr><td>Lookup strategy</td><td>Shard key + bản đồ cho biết dữ liệu nằm đâu</td><td>Kiểm soát tốt nhất, overhead cao nhất</td></tr>
<tr><td>Range strategy</td><td>Khoảng liên tiếp (mỗi tháng một shard)</td><td>Lấy các dòng liền kề trong một lần, nhưng dễ lệch tải và khó rebalance</td></tr>
<tr><td>Hash strategy</td><td>Băm của key</td><td>Phân bố đều, ít hotspot; tốn CPU và khó rebalance</td></tr>
</table></div>
<p class="lead">Lý do phân vùng: chạm trần dung lượng / compute / băng thông mạng. Scale vertically (thêm đĩa, CPU, memory) rồi cũng gặp lại đúng vấn đề đó.</p>
</section>

<section id="t108">
<h3>Compression<a class="nl" href="/dp-300/notes#s13">note 13</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Compression" title="Ôn 7 câu: Compression (tab mới)">ôn 7 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Mức</th><th>Làm gì</th><th>Lợi nhất với</th></tr>
<tr><td>Row</td><td>Bỏ byte thừa trong từng giá trị</td><td>Kiểu số (tinyint vốn đã 1 byte), datetime / datetime2 / datetimeoffset, char / nchar — tới 50% tiếng Anh, Đức, Hindi, Thổ; ~40% tiếng Việt; 15% tiếng Nhật. varchar/nvarchar gần như vô ích</td></tr>
<tr><td>Page</td><td>Row → prefix → dictionary, đúng thứ tự đó</td><td>Tiết kiệm hơn row nhưng tốn CPU hơn; một page = 8.192 byte; chỉ được áp dụng khi cần nhét thêm dòng vào page đã đầy</td></tr>
<tr><td>Columnstore</td><td>Cột luôn được nén</td><td>Quét lượng lớn dữ liệu (bảng fact). Thường là clustered; chỉ dùng non-clustered khi có kiểu XML, text, image</td></tr>
<tr><td>Archival (columnstore)</td><td>Nén thêm một tầng nữa</td><td>Dữ liệu ít đọc nhưng phải giữ; CPU giải nén rất cao, vượt cả phần I/O tiết kiệm được</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Nén được / không</th><th>Chi tiết</th></tr>
<tr><td>Được</td><td>Bảng có clustered index hoặc heap; nonclustered index hoàn chỉnh (mặc định không nén); indexed view hoàn chỉnh; từng partition thiết lập khác nhau</td></tr>
<tr><td>KHÔNG được</td><td>Bảng hệ thống; bảng có cột SPARSE</td></tr>
<tr><td>Đổi compression của clustered index</td><td>Phải drop clustered index (tốt nhất OFFLINE) rồi rebuild bảng</td></tr>
<tr><td>Ước lượng</td><td><code>sp_estimate_data_compression_savings</code> — KHÔNG có trên Azure SQL Database. Index_ID: 0 = heap, 1 = clustered, &gt;1 = nonclustered</td></tr>
<tr><td>T-SQL</td><td><code>ALTER TABLE … REBUILD PARTITION = ALL WITH (DATA_COMPRESSION = PAGE|ROW|NONE)</code></td></tr>
<tr><td>Lấy tham số cho sp_estimate</td><td><code>SELECT name, index_id FROM sys.indexes WHERE OBJECT_NAME(object_id) = N'TableName'</code> và <code>SELECT * FROM sys.partitions WHERE OBJECT_NAME(object_id) = N'TableName'</code></td></tr>
<tr><td>Khác</td><td>Compression KHÔNG ảnh hưởng backup/restore. Có từ SQL Server 2016 SP1 ở mọi edition; trước đó chỉ Enterprise</td></tr>
</table></div>
</section>

<section id="t109">
<h3>SQL Data Sync — thành phần và điều kiện<a class="nl" href="/dp-300/notes#s20">note 20</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Data%20Sync" title="Ôn 7 câu: Data Sync (tab mới)">ôn 7 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Thành phần</th><th>Yêu cầu</th></tr>
<tr><td>Hub database</td><td>PHẢI là Azure SQL Database</td></tr>
<tr><td>Sync Metadata Database</td><td>Azure SQL Database <b>rỗng</b>, cùng region với hub; Data Sync tạo bảng và chạy workload tần suất cao ở đây</td></tr>
<tr><td>Member database</td><td>Azure SQL Database hoặc SQL Server on-prem — KHÔNG dùng được Managed Instance</td></tr>
<tr><td>Member on-prem</td><td>Cần cài local sync agent (Azure SQL Data Sync Agent) + agent key</td></tr>
<tr><td>Bảng</td><td>Phải có primary key, và primary key không được thay đổi (xóa rồi tạo lại dòng)</td></tr>
<tr><td>Sync group</td><td>Sync Schema, Sync Direction (một chiều / hai chiều), Sync Interval, Conflict Resolution = Hub wins hoặc Member wins</td></tr>
<tr><td>Nhiều member</td><td>Kết quả phụ thuộc member nào đồng bộ trước</td></tr>
</table></div>
</section>

<section id="t110">
<h3>Nơi chạy SQL ngoài các lựa chọn thông thường<a class="nl" href="/dp-300/notes#s6a">note 6a–6b</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Azure%20Arc,Fabric" title="Ôn 13 câu: Azure Arc, Fabric (tab mới)">ôn 13 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Lựa chọn</th><th>Dùng khi</th><th>Điểm nhận dạng</th></tr>
<tr><td>Azure Arc-enabled SQL Server</td><td>Instance SQL Server ngoài Azure: on-prem, đám mây khác</td><td>Kiểm kê, best-practices assessment, tìm database chưa backup/chưa mã hoá; Entra ID auth cho SQL Server 2022+; tích hợp Defender for Cloud và Purview; mô hình pay-as-you-go thay vì mua license</td></tr>
<tr><td>Azure SQL Database trong Microsoft Fabric</td><td>Bạn đã dùng Lakehouse, Warehouse, Power BI</td><td><b>SaaS</b> chứ không phải PaaS; không cần cấu hình, mirroring bật sẵn; phân quyền bằng Entra ID; tính tiền qua Fabric capacity; hợp với translytical, ETL destination, operational data store</td></tr>
</table></div>
</section>

<section id="t111">
<h3>Patch và kiểm định sau di trú<a class="nl" href="/dp-300/notes#s3">note 3, 18</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Patching,VM%20automation" title="Ôn 7 câu: Patching, VM automation (tab mới)">ôn 7 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Việc</th><th>PaaS (SQL DB / MI)</th><th>IaaS (VM)</th></tr>
<tr><td>Patch engine</td><td>Có sẵn, luôn dùng Database Engine ổn định mới nhất</td><td>Bạn toàn quyền; hoặc bật <b>Automated Patching</b> (cần SQL Server 2008 R2+ và Windows Server 2008 R2+)</td></tr>
<tr><td>Cấu hình Automated Patching</td><td>—</td><td>Khi tạo VM (tab SQL Server Settings) hoặc VM có sẵn: Settings – SQL Server configuration – Patching. Đặt ngày, giờ bắt đầu, độ dài cửa sổ</td></tr>
<tr><td>PowerShell</td><td>—</td><td><code>New-AzVMSqlServerAutoPatchingConfig -Enable</code> rồi <code>Set-AzVMSqlServerExtension</code></td></tr>
<tr><td>Đăng ký tự động</td><td>—</td><td>Kiểm tra hằng ngày VM chưa đăng ký, đăng ký ở chế độ lightweight; muốn đủ tính năng vẫn phải nâng cấp thủ công</td></tr>
</table></div>
<p class="lead">Kiểm định sau di trú: chạy cùng query trên nguồn và đích; test hiệu năng cả hai bên; xem compatibility level mới có gây regression không (nếu có thì force plan tốt gần nhất); kiểm parameter sniffing, index thiếu, tính năng bị thiếu ở đích (SQL DB &lt; MI &lt; on-prem/VM).</p>
</section>

<h2 class="dom" id="d2">Phạm vi 2 · Môi trường bảo mật</h2>

<section id="t201">
<h3>Bảo vệ dữ liệu — chọn cơ chế bằng câu hỏi "ai KHÔNG được đọc plaintext?"<a class="nl" href="/dp-300/notes#s-sec2">note 30–42</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=TDE,Always%20Encrypted,Dynamic%20Data%20Masking,RLS,Ledger,Object%20encryption" title="Ôn 41 câu: TDE, Always Encrypted, Dynamic Data Masking, RLS, Ledger, Object encryption (tab mới)">ôn 41 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Cơ chế</th><th>Bảo vệ cái gì</th><th>Sysadmin/DBA đọc được?</th><th>Ảnh hưởng truy vấn</th></tr>
<tr><td>TDE</td><td>Cả database khi nằm yên: file data, log, backup</td><td><b>Có</b> — giải mã trong suốt</td><td>Không phải sửa câu lệnh nào</td></tr>
<tr><td>Object/cell-level (ENCRYPTBYKEY)</td><td>Từng giá trị cột, server mã hoá</td><td><b>Có</b> — key nằm trên server</td><td>Cột phải là varbinary; không sargable; phải OPEN key trước</td></tr>
<tr><td>Always Encrypted</td><td>Cột nhạy cảm; plaintext không bao giờ vào engine</td><td><b>Không</b> — đó chính là mục đích</td><td>Deterministic: =, JOIN, GROUP BY, DISTINCT, index. Randomized: không làm được gì trong số đó</td></tr>
<tr><td>Always Encrypted + secure enclave</td><td>Như trên, thêm tính toán trên plaintext trong enclave</td><td><b>Không</b></td><td>Thêm so sánh khoảng, LIKE, mã hoá tại chỗ và key rotation ngay trong database</td></tr>
<tr><td>Dynamic Data Masking</td><td>Chỉ che phần hiển thị; dữ liệu lưu trữ không đổi</td><td><b>Có</b>; admin LUÔN được loại trừ, user có UNMASK cũng thấy</td><td>Không mã hoá — vẫn đoán được giá trị bằng WHERE/BETWEEN</td></tr>
<tr><td>Row-Level Security</td><td>Những dòng user được thấy hoặc được ghi</td><td><b>Có</b> — đây là lọc, không phải mã hoá</td><td>FILTER predicate cho SELECT/UPDATE/DELETE; BLOCK predicate cho thao tác ghi</td></tr>
<tr><td>Ledger</td><td>Bằng chứng chống sửa lén, không phải tính bí mật</td><td><b>Có</b> — nhưng mọi thay đổi để lại dấu mật mã</td><td>Thêm cột GENERATED ALWAYS + history table + ledger view</td></tr>
</table></div>
</section>

<section id="t202">
<h3>TDE — đặt ở đâu, bật bằng gì<a class="nl" href="/dp-300/notes#s30">note 30</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=TDE,Key%20Vault" title="Ôn 9 câu: TDE, Key Vault (tab mới)">ôn 9 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th></th><th>Azure SQL Database</th><th>Managed Instance</th><th>SQL Server trên VM</th></tr>
<tr><td>Phạm vi</td><td>Cấp server; database mới mặc định đã mã hoá (trừ database tạo bằng restore hoặc copy)</td><td>Cấp instance, kế thừa cho mọi database đã mã hoá</td><td>Bạn tự quản</td></tr>
<tr><td>Bật bằng</td><td>Portal hoặc <code>ALTER DATABASE … SET ENCRYPTION ON</code></td><td>CHỈ bằng T-SQL — portal không làm được</td><td>T-SQL, EKM hoặc Key Vault cho protector</td></tr>
<tr><td>Không áp dụng</td><td colspan="3">Không dùng TDE cho database hệ thống</td></tr>
<tr><td>Đổi protector sang key trong Key Vault</td><td colspan="3">KHÔNG làm được bằng T-SQL — dùng portal, PowerShell, CLI hoặc REST</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Chuỗi 5 bước cấu hình CMK/BYOK</th><th>Chi tiết và lỗi kinh điển</th></tr>
<tr><td>1 · Vault</td><td>Tạo key vault, bật <b>soft delete + purge protection</b> (cả hai bắt buộc — mất key = mất dữ liệu)</td></tr>
<tr><td>2 · Key</td><td>RSA 2048 hoặc 3072 bit, trạng thái Enabled; activation date ở quá khứ, expiration (nếu có) ở tương lai</td></tr>
<tr><td>3 · Identity</td><td>Bật managed identity (system- hoặc user-assigned) cho logical server — đó là danh tính server dùng để chứng minh với Key Vault</td></tr>
<tr><td>4 · Permission</td><td><b>get, wrapKey, unwrapKey</b> (hoặc RBAC role Key Vault Crypto Service Encryption User). Thiếu unwrapKey → database rơi vào Inaccessible</td></tr>
<tr><td>5 · Protector</td><td>Đặt key làm TDE protector: portal, <code>Add-AzSqlServerKeyVaultKey</code> rồi <code>Set-AzSqlServerTransparentDataEncryptionProtector</code>, CLI hoặc REST</td></tr>
<tr><td>Khi key/quyền mất</td><td>Database → Inaccessible sau ~10 phút (30 phút nếu do lỗi 4XX của Key Vault); khôi phục key/quyền thì trở lại</td></tr>
<tr><td>Geo-replication</td><td>Cả primary và secondary đều cần get/wrapKey/unwrapKey trên key vault của primary; không bắt buộc cùng region</td></tr>
</table></div>
</section>

<section id="t203">
<h3>Always Encrypted và secure enclave<a class="nl" href="/dp-300/notes#s33">note 33–33a</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Always%20Encrypted,Secure%20enclaves" title="Ôn 12 câu: Always Encrypted, Secure enclaves (tab mới)">ôn 12 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Chủ đề</th><th>Chi tiết</th></tr>
<tr><td>Deterministic</td><td>Cho phép equality, JOIN, GROUP BY, DISTINCT, index. Chuỗi PHẢI dùng collation <code>_BIN2</code> (ví dụ Latin1_General_BIN2)</td></tr>
<tr><td>Randomized</td><td>An toàn hơn nhưng chặn hết những thao tác trên</td></tr>
<tr><td>Kết nối</td><td>Tab "Additional Connection Parameters": <code>Column Encryption Setting=enabled</code></td></tr>
<tr><td>Quyền</td><td>ALTER ANY COLUMN MASTER KEY, ALTER ANY COLUMN ENCRYPTION KEY, VIEW ANY COLUMN MASTER/ENCRYPTION KEY DEFINITION</td></tr>
<tr><td>Tách vai trò</td><td>Security Admin sinh CEK/CMK (cần key store, không cần database); DBA quản metadata key (không cần key). Nếu là <b>hai người khác nhau</b> thì CHỈ dùng được PowerShell, không dùng SSMS</td></tr>
<tr><td>Key Vault</td><td>Cần Decrypt, Encrypt, Unwrap Key, Wrap Key, Verify, Sign + create/get/list. ~0,03 USD / 10.000 giao dịch; Premium cho HSM</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Loại enclave</th><th>Yêu cầu</th><th>Cần nhớ</th></tr>
<tr><td>VBS enclave</td><td>Mọi SKU Azure SQL Database (kể cả Elastic Pool), hoặc SQL Server 2019+</td><td><b>KHÔNG cần</b> Microsoft Azure Attestation. Bật rồi <b>KHÔNG tắt được</b>. Chưa có ở Jio India Central</td></tr>
<tr><td>Intel SGX enclave</td><td>Azure SQL Database dòng <b>DC-series</b></td><td>CẦN Microsoft Azure Attestation + attestation provider. Cách ly bảo mật mạnh hơn VBS</td></tr>
</table></div>
</section>

<section id="t204">
<h3>Dynamic Data Masking — các kiểu mask<a class="nl" href="/dp-300/notes#s34">note 34</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Dynamic%20Data%20Masking" title="Ôn 8 câu: Dynamic Data Masking (tab mới)">ôn 8 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Mask</th><th>Hiển thị</th><th>Hàm T-SQL</th></tr>
<tr><td>Default</td><td>xxxx cho chuỗi, 0 cho số, 01-01-1900 cho ngày</td><td><code>default()</code></td></tr>
<tr><td>Credit card</td><td>xxxx-xxxx-xxxx-1234 — để lộ 4 số cuối</td><td><code>partial(…)</code></td></tr>
<tr><td>Email</td><td>aXXX@XXXX.com — để lộ chữ cái đầu</td><td><code>email()</code></td></tr>
<tr><td>Number</td><td>Một số ngẫu nhiên giữa hai biên</td><td><code>random(1, 1000)</code></td></tr>
<tr><td>Custom string</td><td>X ký tự đầu + chuỗi đệm + Y ký tự cuối</td><td><code>partial(1, "xxxxx", 1)</code></td></tr>
</table></div>
<p class="lead">Cú pháp: <code>ALTER TABLE … ALTER COLUMN col ADD MASKED WITH (FUNCTION = '…')</code>. Cấp quyền xem thật: <code>GRANT UNMASK TO user</code> / <code>REVOKE UNMASK</code>. Nhiều user thì phân cách bằng dấu chấm phẩy. Administrator luôn thấy dữ liệu thật.</p>
</section>

<section id="t205">
<h3>Xác thực và principal — cùng một việc, hai nền tảng<a class="nl" href="/dp-300/notes#s23">note 23–29</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Authentication,Users%20%26%20logins" title="Ôn 15 câu: Authentication, Users & logins (tab mới)">ôn 15 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Chủ đề</th><th>Azure SQL Database</th><th>Managed Instance / SQL Server trên VM</th></tr>
<tr><td>Principal cấp server</td><td>Login trong master ảo + 7 fixed server role <code>##MS_…##</code></td><td>Login thật + fixed server role cổ điển (sysadmin, serveradmin, securityadmin, dbcreator…)</td></tr>
<tr><td>Cho công cụ giám sát đọc state DMV</td><td>Thêm login vào <code>##MS_ServerStateReader##</code> (trong master)</td><td><code>GRANT VIEW SERVER STATE</code></td></tr>
<tr><td>Tạo database / quản login</td><td><code>##MS_DatabaseManager##</code>, <code>##MS_LoginManager##</code> (thay cho dbmanager / loginmanager trong master)</td><td>dbcreator, securityadmin</td></tr>
<tr><td>Danh tính Entra</td><td><code>CREATE USER … FROM EXTERNAL PROVIDER</code> — contained user ngay trong database</td><td><code>CREATE LOGIN … FROM EXTERNAL PROVIDER</code> rồi <code>CREATE USER … FROM LOGIN</code></td></tr>
<tr><td>Certificate từ file</td><td>KHÔNG tạo được từ file, không dùng file private key</td><td><code>BACKUP CERTIFICATE … WITH PRIVATE KEY</code> ở nguồn, <code>CREATE CERTIFICATE … FROM FILE</code> ở đích</td></tr>
<tr><td>Tạo login trong portal</td><td colspan="2">KHÔNG làm được ở cả hai — nhưng tạo được Entra admin</td></tr>
<tr><td>Kiểm tra principal</td><td colspan="2"><code>SELECT * FROM sys.sql_logins</code> (login SQL) · <code>SELECT * FROM sys.server_principals</code> (login và server role) · <code>SELECT * FROM sys.database_principals</code> (user trong database)</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Chuỗi 4 bước chuyển sang Entra-only auth</th><th>Vì sao đúng thứ tự đó</th></tr>
<tr><td>1 · Admin</td><td>Gán Entra admin (user/group) cho logical server. Chưa có admin thì không kết nối bằng Entra và Azure không cho bật Entra-only</td></tr>
<tr><td>2 · User</td><td>Đăng nhập bằng chính Entra admin đó, chạy <code>CREATE USER … FROM EXTERNAL PROVIDER</code> trong từng database, thêm role và cấp quyền</td></tr>
<tr><td>3 · App</td><td>Chuyển app sang token Entra (managed identity) và xác nhận kết nối được — làm khi SQL auth vẫn còn bật</td></tr>
<tr><td>4 · Lock</td><td>Chỉ khi mọi thứ chạy ổn mới bật Entra-only (tắt SQL auth). Bật sớm là cắt mọi app còn dùng mật khẩu</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Tình huống</th><th>Phương thức xác thực</th></tr>
<tr><td>App trên Azure VM</td><td>Passwordless authentication</td></tr>
<tr><td>App ngoài Azure, máy đã join domain</td><td>Managed identity</td></tr>
<tr><td>App ngoài Azure, máy chưa join domain</td><td>Certificate</td></tr>
<tr><td>Công cụ quản trị, máy chưa join domain</td><td>Entra integrated, hoặc Entra interactive + MFA</td></tr>
<tr><td>App cũ không đổi được connection string</td><td>SQL authentication</td></tr>
<tr><td>Muốn Azure AD xử lý toàn bộ đăng nhập trên cloud</td><td>Cloud-only identity</td></tr>
<tr><td>Cần tích hợp federation provider sẵn có</td><td>Federated authentication</td></tr>
<tr><td>Muốn áp chính sách AD ở mức người dùng khi đăng nhập</td><td>Pass-through authentication</td></tr>
</table></div>
</section>

<section id="t205a">
<h3>So sánh các phương thức xác thực<a class="nl" href="/dp-300/notes#s23">note 23</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Authentication" title="Ôn 7 câu: Authentication (tab mới)">ôn 7 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Phương thức</th><th><code>Authentication=</code> trong connection string</th><th>Bí mật nằm ở đâu</th><th>MFA</th><th>Dùng được ở</th><th>Bẫy hay hỏi</th></tr>
<tr><td><b>SQL authentication</b></td><td><code>SqlPassword</code> (hoặc để trống, dùng User ID/Password)</td><td>Mật khẩu nằm ngay trong connection string</td><td>Không</td><td>SQL DB · MI · VM</td><td>Bật <b>Entra-only</b> là tắt hẳn đường này — mọi app còn dùng mật khẩu sẽ đứt</td></tr>
<tr><td><b>Windows authentication</b> (Kerberos)</td><td>—</td><td>Vé Kerberos, không có mật khẩu trong chuỗi</td><td>Theo domain</td><td><b>MI · VM</b> (SQL Database KHÔNG có)</td><td>Trên MI cần dựng Kerberos cho Entra principal; đề nói "SQL Database + Windows auth" là sai ngay</td></tr>
<tr><td><b>Entra password</b></td><td><code>ActiveDirectoryPassword</code></td><td>Mật khẩu Entra trong connection string</td><td>Không</td><td>SQL DB · MI</td><td>Là danh tính Entra nhưng vẫn phải mang mật khẩu đi — không phải passwordless</td></tr>
<tr><td><b>Entra integrated</b></td><td><code>ActiveDirectoryIntegrated</code></td><td>Không có — SSO từ phiên đăng nhập máy</td><td>Không (không hỏi lại được)</td><td>SQL DB · MI</td><td>Máy phải <b>đã join domain / Entra</b>. Cần MFA thì phải dùng interactive</td></tr>
<tr><td><b>Entra interactive</b></td><td><code>ActiveDirectoryInteractive</code></td><td>Không lưu — hiện cửa sổ đăng nhập</td><td><b>Có</b></td><td>SQL DB · MI</td><td>Đường duy nhất cho công cụ quản trị trên máy chưa join domain mà vẫn cần MFA; không dùng cho app chạy nền</td></tr>
<tr><td><b>Service principal</b> (app registration)</td><td><code>ActiveDirectoryServicePrincipal</code></td><td>Client secret hoặc certificate — <b>bạn phải tự xoay</b></td><td>Không</td><td>SQL DB · MI</td><td>Secret có hạn; hết hạn là app chết mà không ai báo. Dùng khi app chạy <b>ngoài</b> Azure hoặc trong CI/CD</td></tr>
<tr><td><b>Managed identity</b></td><td><code>ActiveDirectoryManagedIdentity</code></td><td><b>Không có bí mật nào</b> — Azure tự cấp và xoay token</td><td>Không cần</td><td>SQL DB · MI</td><td>Chỉ dùng được cho tài nguyên <b>chạy trong Azure</b> (VM, App Service, Functions, AKS). Đây là đáp án mặc định khi đề nói "passwordless"</td></tr>
<tr><td><b>Access token</b></td><td>Truyền token thẳng cho driver</td><td>Token do app tự xin, sống ngắn</td><td>Theo cách xin token</td><td>SQL DB · MI</td><td>Dùng khi tự quản vòng đời token, ví dụ dịch vụ trung gian đã có token sẵn</td></tr>
<tr><td><b>Certificate / federated</b></td><td>Service principal kèm certificate</td><td>Private key trên máy chạy app</td><td>Theo IdP</td><td>SQL DB · MI</td><td>Cho app ngoài Azure trên máy <b>chưa join domain</b>; federated khi đã có sẵn IdP bên ngoài</td></tr>
<tr><td><b>Entra default</b></td><td><code>ActiveDirectoryDefault</code></td><td>Thử lần lượt nhiều nguồn</td><td>Tuỳ nguồn trúng</td><td>SQL DB · MI</td><td>Tiện cho code chạy được cả ở máy dev lẫn trên Azure, nhưng khó đoán nó đang dùng danh tính nào khi gỡ lỗi</td></tr>
</table></div>
<p class="lead">Ba loại danh tính dưới đây đều là "principal của ứng dụng", và đề hay hỏi chọn cái nào.</p>
<div class="tw"><table class="cmp">
<tr><th>Tiêu chí</th><th>Service principal</th><th>Managed identity <b>system-assigned</b></th><th>Managed identity <b>user-assigned</b></th></tr>
<tr><td>Ai quản vòng đời</td><td>Bạn — tạo app registration, tự xoay secret</td><td>Azure — sinh ra cùng tài nguyên</td><td>Azure — nhưng là <b>tài nguyên riêng</b>, tự sống</td></tr>
<tr><td>Có bí mật phải quản không</td><td><b>Có</b>: client secret hoặc certificate</td><td>Không</td><td>Không</td></tr>
<tr><td>Gắn với cái gì</td><td>Không gắn với tài nguyên nào</td><td><b>1–1</b> với đúng một tài nguyên</td><td>Gán được cho <b>nhiều</b> tài nguyên</td></tr>
<tr><td>Xoá tài nguyên thì sao</td><td>Vẫn còn</td><td><b>Mất theo</b>, kèm mọi phân quyền đã cấp</td><td>Vẫn còn, phân quyền giữ nguyên</td></tr>
<tr><td>Dùng được ngoài Azure</td><td><b>Có</b></td><td>Không</td><td>Không</td></tr>
<tr><td>Chọn khi</td><td>App chạy on-prem, CI/CD, hoặc bên thứ ba</td><td>Một tài nguyên, một danh tính, muốn gọn</td><td>Nhiều tài nguyên dùng chung quyền; hoặc muốn cấp quyền <b>trước</b> khi tạo tài nguyên</td></tr>
<tr><td>Bẫy</td><td>Secret hết hạn là app chết</td><td>Tái tạo tài nguyên là phải cấp quyền lại từ đầu</td><td>Một tài nguyên gắn nhiều identity thì <b>phải nêu rõ client ID</b>, không nó không biết dùng cái nào</td></tr>
</table></div>
</section>

<section id="t206">
<h3>Server role — cổ điển và <code>##MS_…##</code><a class="nl" href="/dp-300/notes#s25">note 25</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Server%20roles" title="Ôn 5 câu: Server roles (tab mới)">ôn 5 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Fixed server role (MI &amp; VM)</th><th>Làm được gì</th></tr>
<tr><td>sysadmin</td><td>Mọi thứ</td></tr>
<tr><td>serveradmin</td><td>Đổi cấu hình toàn server và tắt server</td></tr>
<tr><td>securityadmin</td><td>GRANT/DENY/REVOKE quyền cấp server, và cấp database nếu truy cập được — gần như gán được mọi quyền</td></tr>
<tr><td>processadmin</td><td>Kết thúc process</td></tr>
<tr><td>setupadmin</td><td>Thêm/xóa linked server</td></tr>
<tr><td>bulkadmin</td><td>Chạy BULK INSERT</td></tr>
<tr><td>diskadmin</td><td>Quản file trên đĩa</td></tr>
<tr><td>dbcreator</td><td>Create/alter/drop/restore bất kỳ database nào</td></tr>
<tr><td>public</td><td>Mọi user, group, role. DENY trên public là không ai ngoài sysadmin còn quyền đó</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Role <code>##MS_…##</code> (Azure SQL Database, SQL Server 2022+)</th><th>Quyền tương ứng</th></tr>
<tr><td>##MS_ServerStateReader##</td><td>VIEW SERVER STATE — đọc state DMV trên mọi database. Đúng role cho công cụ giám sát chỉ đọc</td></tr>
<tr><td>##MS_ServerStateManager##</td><td>Như trên, cộng ALTER SERVER STATE: <code>DBCC FREEPROCCACHE</code>, <code>DBCC FREESYSTEMCACHE ('ALL')</code>, <code>DBCC SQLPERF()</code></td></tr>
<tr><td>##MS_DefinitionReader##</td><td>VIEW ANY DATABASE + VIEW ANY DEFINITION — đọc định nghĩa object, KHÔNG đọc state</td></tr>
<tr><td>##MS_SecurityDefinitionReader##</td><td>Chỉ VIEW ANY SECURITY DEFINITION (tập con của DefinitionReader)</td></tr>
<tr><td>##MS_DatabaseConnector##</td><td>CONNECT ANY DATABASE — vào mọi database không cần user. DENY CONNECT trong database thắng</td></tr>
<tr><td>##MS_DatabaseManager##</td><td>CREATE ANY DATABASE + ALTER ANY DATABASE</td></tr>
<tr><td>##MS_LoginManager##</td><td>CREATE LOGIN + ALTER ANY LOGIN</td></tr>
</table></div>
<p class="lead">Gán bằng <code>ALTER SERVER ROLE ##MS_…## ADD MEMBER [login]</code> chạy trong master ảo, chỉ server admin hoặc Entra admin làm được. Đổi thành viên có thể mất tới <b>5 phút</b> và phải kết nối lại; chạy <code>DBCC FLUSHAUTHCACHE</code> trong user database để rút ngắn. Kiểm tra: <code>sys.server_role_members</code>.</p>
</section>

<section id="t207">
<h3>Database role và quy tắc phân quyền<a class="nl" href="/dp-300/notes#s27">note 25, 27, 29</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Database%20roles,Permissions,Custom%20roles" title="Ôn 19 câu: Database roles, Permissions, Custom roles (tab mới)">ôn 19 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Fixed database role</th><th>Làm được gì</th></tr>
<tr><td>db_owner</td><td>Mọi cấu hình và hầu hết bảo trì, kể cả DROP database. Vẫn bị chặn đọc nếu thêm db_denydatareader hoặc DENY</td></tr>
<tr><td>db_securityadmin</td><td>Sửa thành viên custom role và quản quyền — có thể tự nâng quyền của chính mình</td></tr>
<tr><td>db_accessadmin</td><td>Thêm/xóa quyền truy cập database cho login và group</td></tr>
<tr><td>db_backupoperator</td><td>Backup database (MI, VM — Azure SQL Database không có lệnh BACKUP/RESTORE)</td></tr>
<tr><td>db_ddladmin</td><td>Chạy lệnh DDL</td></tr>
<tr><td>db_datareader / db_denydatareader</td><td>Đọc / không được đọc mọi bảng và view người dùng</td></tr>
<tr><td>db_datawriter / db_denydatawriter</td><td>Thêm-xóa-sửa / không được thêm-xóa-sửa mọi bảng người dùng</td></tr>
<tr><td>dbmanager, loginmanager</td><td>CHỈ tồn tại trong master của Azure SQL Database — tạo/xóa database, tạo/xóa login</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Quy tắc</th><th>Nội dung</th></tr>
<tr><td>DENY &gt; GRANT</td><td>DENY thắng mọi GRANT từ role khác — trừ thành viên sysadmin và chủ sở hữu object</td></tr>
<tr><td>REVOKE ≠ DENY</td><td>REVOKE chỉ gỡ quyền, không chặn — người đó vẫn có quyền nếu được cấp qua role khác</td></tr>
<tr><td>Ownership chaining</td><td>Hai object cùng owner thì quyền trên object thứ hai (được gọi từ object thứ nhất) không bị kiểm tra riêng → cấp EXECUTE trên proc mà không cần cấp SELECT trên bảng</td></tr>
<tr><td>Phạm vi SELECT</td><td>SELECT trên database gồm mọi schema, bảng, view; trên schema gồm mọi bảng và view; trên bảng chỉ là bảng đó</td></tr>
<tr><td>CONTROL</td><td>Tương đương chủ sở hữu, bao gồm mọi quyền khác (ALTER, SELECT, INSERT, UPDATE)</td></tr>
<tr><td>ALTER trên schema</td><td>Alter/create/drop mọi securable trong schema — nhưng KHÔNG đổi được quyền sở hữu</td></tr>
<tr><td>Quyền cấp server trong database</td><td>Chỉ dùng được nếu login cũng có user trong database đó (hoặc thuộc ##MS_DatabaseConnector##)</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Kiểm tra quyền bằng</th><th>Cho biết</th></tr>
<tr><td><code>sys.fn_my_permissions(NULL,'DATABASE')</code></td><td>Quyền của login/user hiện tại</td></tr>
<tr><td><code>fn_builtin_permissions(default)</code></td><td>Toàn bộ quyền dựng sẵn</td></tr>
<tr><td><code>sys.database_permissions WHERE major_id = OBJECT_ID(…)</code></td><td>Quyền trên một object cụ thể</td></tr>
<tr><td><code>sp_helprole</code> / <code>sp_helprolemember</code> / <code>sp_helprotect</code></td><td>Role, thành viên, quyền — <b>sp_helprotect và sp_helprolemember không có ở Azure SQL Database</b></td></tr>
<tr><td><code>EXECUTE AS USER = '…'</code> … <code>REVERT</code></td><td>Kiểm thử quyền bằng cách mượn danh (cách duy nhất chứng minh RLS/quyền hoạt động đúng)</td></tr>
</table></div>
</section>

<section id="t208">
<h3>Row-Level Security — chuỗi 5 bước<a class="nl" href="/dp-300/notes#s42">note 42</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=RLS" title="Ôn 8 câu: RLS (tab mới)">ôn 8 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Bước</th><th>Việc phải làm</th><th>Bẫy</th></tr>
<tr><td>1 · Schema</td><td>Tạo schema riêng chứa object bảo mật</td><td>Để quyền của chúng tách khỏi quyền trên dữ liệu, đỡ công bảo trì</td></tr>
<tr><td>2 · Function</td><td>Inline table-valued function <code>WITH SCHEMABINDING</code>, trả về 1 dòng khi được phép thấy</td><td>Phải tồn tại trước khi policy tham chiếu</td></tr>
<tr><td>3 · Grant</td><td>Cấp SELECT trên bảng đích cho user cuối</td><td>User <b>KHÔNG cần</b> quyền gì trên hàm predicate — security policy tự áp hàm thay họ</td></tr>
<tr><td>4 · Policy</td><td><code>CREATE SECURITY POLICY … ADD FILTER PREDICATE …</code> (đọc) và/hoặc <code>ADD BLOCK PREDICATE …</code> (ghi) <code>WITH (STATE = ON)</code></td><td>Cần ALTER ANY SECURITY POLICY + SELECT/REFERENCES trên hàm và bảng</td></tr>
<tr><td>5 · Test</td><td><code>EXECUTE AS USER = '…'</code> … <code>REVERT</code></td><td>Thử bằng tài khoản của bạn không chứng minh gì: sysadmin và chủ bảng không bị lọc</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Predicate</th><th>Áp cho</th></tr>
<tr><td>FILTER PREDICATE</td><td>SELECT, UPDATE, DELETE — lọc dòng được đọc</td></tr>
<tr><td>BLOCK · AFTER INSERT / AFTER UPDATE</td><td>Chặn ghi lên dữ liệu mới hoặc dữ liệu vừa sửa</td></tr>
<tr><td>BLOCK · BEFORE UPDATE / BEFORE DELETE</td><td>Chặn update/delete trên dữ liệu hiện có</td></tr>
</table></div>
</section>

<section id="t209">
<h3>Theo dõi thay đổi và audit — mỗi cơ chế cho lại gì<a class="nl" href="/dp-300/notes#s38">note 37–38, 41</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Change%20Tracking,CDC,Auditing" title="Ôn 18 câu: Change Tracking, CDC, Auditing (tab mới)">ôn 18 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Cơ chế</th><th>Nhận lại được gì</th><th>Điều kiện</th><th>Điểm hay ra đề</th></tr>
<tr><td>Change Tracking</td><td>Dòng nào đổi, cột nào đổi — <b>không có giá trị cũ</b></td><td>Bảng phải có primary key; bật ở database rồi tới từng bảng</td><td>Đồng bộ, nhẹ; <code>CHANGETABLE(CHANGES …)</code>, <code>CHANGE_TRACKING_CURRENT_VERSION()</code>; retention mặc định 2 ngày, tối thiểu 1 phút, không có tối đa</td></tr>
<tr><td>Change Data Capture</td><td>Mọi thay đổi trung gian, kèm giá trị trước và sau</td><td>Bất đồng bộ, đọc transaction log; cần db_owner; vCore mọi tier, DTU cần S3+</td><td><code>__$operation</code> 1/2/3/4; all_changes vs net_changes; retention mặc định 3 ngày</td></tr>
<tr><td>Ledger</td><td>Bằng chứng mật mã dữ liệu chưa bị sửa lén</td><td>Ledger table updatable hoặc append-only</td><td>Block đóng sau <b>30 giây hoặc 100.000 giao dịch</b>; hash mới nhất = database digest</td></tr>
<tr><td>SQL Audit</td><td>Ai làm gì, ghi ra file .xel (Append Blob)</td><td>SQL DB/MI: Storage, Log Analytics hoặc Event Hub. VM: file system hoặc Windows event log</td><td>SQL DB audit cấp database (và cấp server); MI và VM audit cấp server; mỗi bản ghi tối đa <b>4.000 ký tự</b></td></tr>
<tr><td><b>Câu lệnh</b></td><td colspan="3">CT: <code>ALTER DATABASE … SET CHANGE_TRACKING = ON (CHANGE_RETENTION = 2 DAYS, AUTO_CLEANUP = ON)</code> rồi <code>ALTER TABLE … ENABLE CHANGE_TRACKING WITH (TRACK_COLUMNS_UPDATED = ON)</code>; kiểm tra ở <code>sys.change_tracking_databases</code> và <code>sys.change_tracking_tables</code>. CDC: <code>sys.sp_cdc_enable_db</code> rồi <code>sys.sp_cdc_enable_table</code>, xem lại bằng <code>sys.sp_cdc_help_change_data_capture</code>. Audit: <code>SELECT * FROM sys.fn_get_audit_file('NameOfFile.sqlaudit', default, default)</code></td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>CDC — chi tiết hay bị hỏi</th><th>Nội dung</th></tr>
<tr><td>Ai chạy capture/cleanup</td><td>SQL Server &amp; MI: hai job của SQL Agent (<code>cdc.&lt;db&gt;_capture</code>, <code>_cleanup</code>), điều khiển bằng <code>sys.sp_cdc_start_job</code> / <code>sys.sp_cdc_stop_job</code> / <code>sys.sp_cdc_help_jobs</code>. <b>Azure SQL Database</b>: scheduler có sẵn — capture quét mỗi <b>20 giây</b>, cleanup mỗi <b>giờ</b>, không đổi được</td></tr>
<tr><td>Tạm dừng khi bulk load</td><td>Chỉ Azure SQL Database: <code>sys.sp_cdc_set_scheduler_job @jobType='both', @state='pause'</code> (cần db_owner)</td></tr>
<tr><td>__$operation</td><td>1 = delete, 2 = insert, 3 = update (giá trị TRƯỚC, chỉ khi dùng <code>N'all update old'</code>), 4 = update (giá trị SAU)</td></tr>
<tr><td>Cột metadata</td><td>__$start_lsn (LSN commit, dùng chung trong một transaction), __$seqval, __$operation, __$update_mask. Trong change table còn __$end_lsn (luôn NULL) và <b>__$command_id</b> — chính cột này dùng để sắp thứ tự, không phải __$seqval</td></tr>
<tr><td>Hàm đọc thay đổi</td><td><code>cdc.fn_cdc_get_all_changes_&lt;capture_instance&gt;(@from_lsn, @to_lsn, N'all')</code> trả mọi thay đổi trung gian; <code>cdc.fn_cdc_get_net_changes_&lt;capture_instance&gt;</code> chỉ trả trạng thái cuối của mỗi dòng. Lấy biên LSN bằng <code>sys.fn_cdc_get_min_lsn('capture_instance')</code> và <code>sys.fn_cdc_get_max_lsn()</code></td></tr>
<tr><td>net_changes</td><td>Chỉ tồn tại nếu tạo capture instance với <code>@supports_net_changes = 1</code>; bảng nguồn cần primary key hoặc unique index qua @index_name</td></tr>
<tr><td>Giám sát</td><td><code>sys.dm_cdc_log_scan_sessions</code>, <code>sys.dm_cdc_errors</code>; cấu hình job ở <code>cdc.cdc_jobs</code> (schema cdc của chính database, KHÔNG phải msdb)</td></tr>
<tr><td>Không dùng được với</td><td>Cột đã mã hoá; database serverless đang paused; bật CDC thì aggressive log truncation của ADR bị tắt</td></tr>
</table></div>
<p class="lead">Audit cấp server LUÔN áp cho database bất kể có policy cấp database hay không — hai loại chạy song song. Microsoft khuyến nghị chỉ dùng audit cấp server, trừ khi cần audit nhóm sự kiện khác nhau cho một database. Policy mặc định gồm BATCH_COMPLETED_GROUP, SUCCESSFUL_ và FAILED_DATABASE_AUTHENTICATION_GROUP. Retention mặc định 0 ngày = vô hạn, và chỉ áp cho audit mới.</p>
</section>

<section id="t210">
<h3>Ledger — hai loại bảng<a class="nl" href="/dp-300/notes#s41">note 41</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Ledger" title="Ôn 6 câu: Ledger (tab mới)">ôn 6 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th></th><th>Updatable ledger table</th><th>Append-only ledger table</th></tr>
<tr><td>Cột GENERATED ALWAYS</td><td>4 cột: ledger_start/end_transaction_id, ledger_start/end_sequence_number</td><td>2 cột: ledger_start_transaction_id, _sequence_number</td></tr>
<tr><td>History table</td><td>Có — giữ phiên bản trước, không xóa được dữ liệu; hậu tố <code>MSSQL_LedgerHistoryFor_(GUID)</code></td><td>Không có (vì không có update/delete)</td></tr>
<tr><td>View</td><td>Join bảng chính với history; UPDATE tính là DELETE + INSERT. Microsoft khuyến nghị truy vấn qua view</td><td>Vẫn được tạo nhưng ít hữu ích</td></tr>
<tr><td>UPDATE / DELETE</td><td>Được, để lại dấu trong history</td><td>Bị từ chối, kể cả với sysadmin/DBA</td></tr>
<tr><td>T-SQL</td><td><code>WITH (SYSTEM_VERSIONING = ON (HISTORY_TABLE = …), LEDGER = ON)</code></td><td><code>WITH (LEDGER = ON (APPEND_ONLY = ON))</code></td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Chi tiết ledger</th><th>Nội dung</th></tr>
<tr><td>Hash</td><td>SHA-256 → root hash → block (đóng sau 30 giây hoặc 100.000 giao dịch) → blockchain. Hash block mới nhất = <b>database digest</b></td></tr>
<tr><td>Nơi lưu digest</td><td>Azure Blob bất biến (WORM) hoặc Azure Confidential Ledger</td></tr>
<tr><td>Bảng hệ thống</td><td><code>sys.database_ledger_transactions</code>, <code>sys.database_ledger_blocks</code>, <code>sys.database_ledger_digest_locations</code></td></tr>
<tr><td>Kiểm chứng</td><td><code>sys.sp_verify_database_ledger_from_digest_storage</code>; kết quả có path, last_digest_block_id, is_current</td></tr>
<tr><td>Chuyển bảng thường thành ledger</td><td><b>KHÔNG được</b> — phải tạo bảng ledger mới rồi copy (<code>sp_copy_data_in_batches</code> 10.000–100.000 dòng/giao dịch, chạy song song; hoặc SELECT INTO / BULK INSERT)</td></tr>
<tr><td>Quyền</td><td>ENABLE LEDGER; có ở SQL Server 2022 và Azure SQL Database</td></tr>
</table></div>
</section>

<section id="t211">
<h3>Mạng và kết nối<a class="nl" href="/dp-300/notes#s32">note 32, 34a, 35</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Firewall,Private%20Link,TLS" title="Ôn 15 câu: Firewall, Private Link, TLS (tab mới)">ôn 15 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Cơ chế</th><th>Phạm vi</th><th>Cấu hình bằng</th><th>Cần nhớ</th></tr>
<tr><td>Firewall rule cấp server</td><td>Mọi database trên logical server — CHỈ Azure SQL Database, không có ở MI</td><td>Portal, <code>sp_set_firewall_rule</code> / <code>sp_delete_firewall_rule</code> (xem ở <code>sys.firewall_rules</code>), PowerShell, CLI, REST</td><td>Rule lưu trong master; rule 0.0.0.0 = cho phép dịch vụ Azure; cần role SQL Server Contributor / SQL Security Manager / owner</td></tr>
<tr><td>Firewall rule cấp database</td><td>Chỉ một database</td><td>CHỈ T-SQL: <code>sp_set_database_firewall_rule</code> / <code>sp_delete_database_firewall_rule</code> (xem ở <code>sys.database_firewall_rules</code>), cần CONTROL DATABASE</td><td>Được kiểm <b>TRƯỚC</b> rule cấp server; lưu trong chính database đó; phải có rule cấp server trước đã</td></tr>
<tr><td>Private Link / private endpoint</td><td>Một IP riêng trong VNet, map tới đúng một resource</td><td>Portal, PowerShell, CLI</td><td>Endpoint phải cùng region với <b>VNet</b>, database có thể ở nơi khác; lưu lượng đi trên mạng Microsoft; phê duyệt khi trạng thái Pending</td></tr>
<tr><td>Service endpoint</td><td>Mở một subnet hướng tới dịch vụ</td><td>Thiết lập của VNet</td><td>Vẫn đi tới dịch vụ qua <b>IP công cộng</b> — đó là khác biệt so với Private Link</td></tr>
<tr><td>TLS</td><td>Dữ liệu khi truyền (TDE là khi nằm yên)</td><td>Networking → Connectivity → Minimum TLS version; <code>Set-AzSqlServer -MinimalTlsVersion</code>; <code>az sql server update</code></td><td>Đặt tối thiểu 1.2; một số driver ngoài Microsoft không tự thương lượng TLS</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Connection policy</th><th>Nghĩa là</th></tr>
<tr><td>Proxy</td><td>Đi qua gateway của Azure SQL Database</td></tr>
<tr><td>Redirect</td><td>Kết nối thẳng tới database node</td></tr>
<tr><td>Default</td><td>Redirect nếu xuất phát từ trong Azure, Proxy nếu từ ngoài Azure</td></tr>
</table></div>
</section>

<section id="t212">
<h3>Phân loại, đánh giá, phát hiện mối đe doạ<a class="nl" href="/dp-300/notes#s36">note 36, 39, 40, 43</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Classification,Vulnerability,Defender,Purview" title="Ôn 15 câu: Classification, Vulnerability, Defender, Purview (tab mới)">ôn 15 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Công cụ</th><th>Làm gì</th><th>Bật ở đâu</th><th>Cần nhớ</th></tr>
<tr><td>Data Discovery &amp; Classification</td><td>Gắn cho cột một information type + sensitivity label</td><td>Database → Security → Data Discovery &amp; Classification</td><td>KHÔNG được để cả hai là [n/a]; label: Public, General, Confidential (± GDPR), Highly Confidential; sửa được: Owner, Contributor, SQL Security Manager — chỉ đọc: Reader, User Access Administrator</td></tr>
<tr><td>Vulnerability Assessment</td><td>Quét cấu hình sai so với baseline</td><td>Security Center; cần storage account</td><td>"Approve as Baseline" đẩy kết quả tương tự sang Passed; quét định kỳ hằng tuần + email; xuất được Excel</td></tr>
<tr><td>Microsoft Defender for SQL</td><td>Cảnh báo SQL injection, truy cập và mẫu truy vấn bất thường</td><td>SQL Server → Security → Microsoft Defender for Cloud</td><td>~15 USD / server / tháng, đã gồm vulnerability assessment; nên bật auditing kèm; chọn được mức severity nhận thông báo</td></tr>
<tr><td>Microsoft Purview</td><td>Lập catalog và quản trị dữ liệu trên nhiều nguồn</td><td>Purview Studio</td><td>Ba phần: <b>Data Map</b> (quét + phân loại metadata), <b>Data Catalog</b> (tìm theo bộ lọc), <b>Data Insights</b> (dữ liệu nhạy cảm ở đâu, luân chuyển thế nào). Từ ~300 USD / 10 GB metadata</td></tr>
</table></div>
<p class="lead">Dùng Purview khi câu hỏi là "dữ liệu nhạy cảm của công ty nằm ở đâu, trên mọi nguồn?"; dùng Data Discovery &amp; Classification khi câu hỏi chỉ trong một database. T-SQL: <code>ADD SENSITIVITY CLASSIFICATION TO … WITH (LABEL=…, INFORMATION_TYPE=…, RANK=…)</code>, xem ở <code>sys.sensitivity_classifications</code>.</p>
</section>

<section id="t213">
<h3>Khác biệt bảo mật giữa ba nền tảng — chỗ đề thi hay gài<a class="nl" href="/dp-300/notes#s6">note 6</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=TDE,Auditing,Certificates" title="Ôn 16 câu: TDE, Auditing, Certificates (tab mới)">ôn 16 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Tính năng</th><th>Azure SQL Database</th><th>Managed Instance</th><th>SQL Server trên VM</th></tr>
<tr><td>Fixed server role ##MS_…##</td><td>Có, gán trong master</td><td>Không — dùng GRANT VIEW SERVER STATE + role cổ điển</td><td>Chỉ SQL Server 2022+</td></tr>
<tr><td>Certificate từ file / BACKUP CERTIFICATE</td><td>Không</td><td>Có</td><td>Có</td></tr>
<tr><td>Firewall</td><td>Rule cấp server + cấp database</td><td>Network security group trên VNet</td><td>NSG + firewall của OS</td></tr>
<tr><td>Bật TDE từng database</td><td>Portal hoặc T-SQL</td><td>Chỉ T-SQL</td><td>Tự quản, EKM/Key Vault cho protector</td></tr>
<tr><td>Audit</td><td>Cấp database và/hoặc cấp server; đích: Storage, Log Analytics, Event Hub</td><td>Cấp server; cùng ba đích</td><td>Cấp server; file system hoặc Windows event log</td></tr>
<tr><td>Xác thực</td><td>SQL auth hoặc Entra ID</td><td>SQL auth hoặc Entra ID; SSMS tạo login được</td><td>Windows hoặc SQL Server auth</td></tr>
<tr><td>Change Tracking</td><td colspan="3">Có ở cả ba — bật giống nhau ở mọi nơi (<code>SET CHANGE_TRACKING = ON</code> rồi <code>ENABLE CHANGE_TRACKING</code>). Notes mục 38 trước đây ghi "chỉ Azure SQL Database", đã sửa</td></tr>
<tr><td>Change Data Capture</td><td>Có — cần ≥ 1 vCore hoặc 100 DTU; capture/cleanup do scheduler có sẵn của dịch vụ chạy</td><td>Có — hai job của SQL Agent</td><td>Có — hai job của SQL Agent</td></tr>
</table></div>
</section>

<h2 class="dom" id="d3">Phạm vi 3 · Giám sát &amp; tinh chỉnh</h2>

<section id="t301">
<h3>Công cụ giám sát nào trả lời câu hỏi nào<a class="nl" href="/dp-300/notes#s-sec3">note 44–48a</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Metrics,Query%20Store,Database%20watcher,Intelligent%20Insights,Query%20Perf%20Insight,SQL%20Insights" title="Ôn 32 câu: Metrics, Query Store, Database watcher, Intelligent Insights, Query Perf Insight, SQL Insights (tab mới)">ôn 32 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Công cụ</th><th>Cho biết</th><th>Ở đâu / cần nhớ</th></tr>
<tr><td>Metrics &amp; Metrics Explorer</td><td>Số liệu time-series gần thời gian thực — nền tảng của cảnh báo</td><td>Portal → Monitoring → Metrics; nhẹ; xem tối đa 30 ngày một lúc, lùi được tới 93 ngày</td></tr>
<tr><td>Log Analytics</td><td>Sự kiện, dữ liệu phi số có timestamp</td><td>Truy vấn bằng KQL</td></tr>
<tr><td>Query Performance Insight</td><td>Truy vấn nặng nhất theo CPU, thời lượng, số lần chạy</td><td>Azure SQL Database; đọc dữ liệu của Query Store</td></tr>
<tr><td>Query Store</td><td>Ba kho: plan, runtime stats, wait stats — tìm regression, ép plan, top-X truy vấn</td><td><b>BẬT</b> mặc định với Azure SQL Database mới, <b>TẮT</b> mặc định trên SQL Server (VM)</td></tr>
<tr><td>Database watcher</td><td>Kho tập trung về hiệu năng, cấu hình, sức khỏe</td><td>SQL DB và MI; dữ liệu vào Azure Data Explorer hoặc Fabric Real-Time Analytics; truy vấn KQL hoặc T-SQL; tạo watcher/dashboard miễn phí, chỉ trả tiền lưu trữ. <b>Bản thay thế cho SQL Insights</b> (khai tử 31/12/2024)</td></tr>
<tr><td>Intelligent Insights</td><td>AI so workload 1 giờ gần nhất với 7 ngày trước</td><td>SQL DB và MI, KHÔNG có cho VM; vài region không hỗ trợ; kèm root cause analysis</td></tr>
<tr><td>Extended Events</td><td>Sự kiện chi tiết: blocking, deadlock, câu lệnh chạy lâu, missing column statistics</td><td>MI và VM; nhẹ hơn Profiler — là cách trace hiện đại</td></tr>
<tr><td>Perfmon</td><td>Counter của Windows + counter riêng của SQL Server</td><td>Chỉ trên VM/on-prem</td></tr>
<tr><td>DMV</td><td>Trạng thái ngay lúc này</td><td>DMV cấp database cần <b>VIEW DATABASE STATE</b>; cấp server cần <b>VIEW SERVER STATE</b> — quyền cấp server KHÔNG thay được quyền cấp database</td></tr>
</table></div>
</section>

<section id="t302">
<h3>DMV phải thuộc<a class="nl" href="/dp-300/notes#s60">note 53, 60</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=DMV" title="Ôn 7 câu: DMV (tab mới)">ôn 7 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>DMV / view</th><th>Trả lời câu hỏi</th></tr>
<tr><td>sys.dm_exec_requests</td><td>Hiện đang chạy gì, và session nào đang chặn nó (<code>blocking_session_id &gt; 0</code>)</td></tr>
<tr><td>sys.dm_exec_query_stats + sys.dm_exec_sql_text / sys.dm_exec_query_plan</td><td>Truy vấn nào tốn tài nguyên nhất và plan nào được dùng</td></tr>
<tr><td>sys.dm_exec_cached_plans + sys.dm_exec_query_plan_stats</td><td>Các execution plan gần nhất</td></tr>
<tr><td>sys.dm_db_resource_stats</td><td>CPU, IO, memory — <b>một dòng mỗi 15 giây, trong 1 giờ gần nhất</b>. Cấp server/MI dùng sys.server_resource_stats</td></tr>
<tr><td>sys.resource_stats (chạy trong master)</td><td>Mức dùng tài nguyên và dung lượng theo thời gian — mẫu <b>5 phút</b>, giữ <b>~14 ngày</b>. Đây là DMV để xem <b>tăng trưởng</b> của database</td></tr>
<tr><td>sys.resource_usage</td><td>Một dòng <b>tổng hợp theo giờ</b> cho các database người dùng, giữ <b>90 ngày</b> — đang ở trạng thái preview</td></tr>
<tr><td>sys.elastic_pool_resource_stats (master)</td><td>Giới hạn và % dung lượng đã cấp phát của elastic pool</td></tr>
<tr><td>sys.dm_user_db_resource_governance</td><td>Dung lượng lưu trữ của database/elastic pool hiện tại (MI còn có sys.dm_instance_resource_governance)</td></tr>
<tr><td>sys.dm_os_wait_stats / sys.dm_db_wait_stats</td><td>Instance đang mất thời gian chờ cái gì</td></tr>
<tr><td>sys.dm_os_waiting_tasks</td><td>Wait type của một task ứng với một query cụ thể</td></tr>
<tr><td>sys.dm_tran_locks</td><td>Các lock đang giữ</td></tr>
<tr><td>sys.dm_db_missing_index_details (+ _groups, _group_stats)</td><td>Index còn thiếu — dựng index với cột <b>equality trước, inequality sau</b>, phần còn lại vào INCLUDE</td></tr>
<tr><td>sys.dm_os_schedulers WHERE status='VISIBLE ONLINE'</td><td>Có bao nhiêu vCore đang thực sự phục vụ</td></tr>
<tr><td>sys.dm_io_virtual_file_stats(null,null)</td><td>Thống kê I/O từng file data và log</td></tr>
<tr><td>sys.dm_os_performance_counters</td><td>Performance counter của SQL Server</td></tr>
<tr><td>sys.dm_os_job_object</td><td>CPU, memory, I/O ở mức process SQL Server</td></tr>
<tr><td>sys.dm_db_index_physical_stats</td><td>Mức phân mảnh index (avg_fragmentation_in_percent)</td></tr>
<tr><td>sys.dm_db_file_space_usage / sys.database_files / sp_spaceused</td><td>Dung lượng đã dùng, đã cấp phát, còn trống (max_size = -1 là không giới hạn)</td></tr>
<tr><td>sys.dm_db_tuning_recommendations</td><td>Khuyến nghị của auto-tuning</td></tr>
<tr><td>sys.dm_db_missing_index_groups + sys.dm_db_missing_index_group_stats</td><td>Join với missing_index_details để xếp hạng index thiếu theo <code>avg_total_user_cost × avg_user_impact × (user_seeks + user_scans)</code></td></tr>
<tr><td>sys.dm_exec_connections</td><td>Các kết nối đang mở; <code>SELECT @@SPID</code> cho session hiện tại</td></tr>
<tr><td>sys.dm_db_session_space_usage / sys.dm_db_task_space_usage</td><td>Số page tempdb mỗi session / mỗi task cấp phát và thu hồi — dùng khi nghi tempdb bị một session ăn hết</td></tr>
<tr><td>sys.databases / sys.objects</td><td>Danh sách database (msdb, tempdb, model KHÔNG xuất hiện ở Azure SQL Database) và mọi object trong database</td></tr>
<tr><td>SERVERPROPERTY('EngineEdition')</td><td><b>5</b> = Azure SQL Database, <b>8</b> = Managed Instance, &lt; 5 = on-prem/VM</td></tr>
</table></div>
</section>

<section id="t303">
<h3>Wait type → nguyên nhân<a class="nl" href="/dp-300/notes#s60">note 60</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Wait%20stats" title="Ôn 5 câu: Wait stats (tab mới)">ôn 5 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Wait type</th><th>Nghĩa là</th></tr>
<tr><td>LOG_RATE_GOVERNOR</td><td>Bị giới hạn tốc độ log — Azure SQL Database</td></tr>
<tr><td>POOL_LOG_RATE_GOVERNOR</td><td>Giới hạn log ở mức elastic pool</td></tr>
<tr><td>INSTANCE_LOG_GOVERNOR</td><td>Giới hạn log ở Managed Instance</td></tr>
<tr><td>RBIO*</td><td>Log governance của Hyperscale</td></tr>
<tr><td>HADR_THROTTLE_LOG_RATE</td><td>Độ trễ ở Business Critical và geo-replication</td></tr>
<tr><td>PAGEIOLATCH_*</td><td>Vấn đề I/O của file <b>data</b></td></tr>
<tr><td>PAGELATCH_*</td><td>Vấn đề I/O của <b>tempdb</b></td></tr>
<tr><td>WRITELOG</td><td>Vấn đề I/O của <b>transaction log</b></td></tr>
<tr><td>RESOURCE_SEMAPHORE</td><td>Đang chờ memory grant</td></tr>
<tr><td>CXPACKET</td><td>MAXDOP có thể quá cao, hoặc cần thêm index</td></tr>
<tr><td>SOS_SCHEDULER_YIELD</td><td>CPU cao, thường do thiếu index — hay xuất hiện cùng CXPACKET</td></tr>
</table></div>
</section>

<section id="t304">
<h3>Diễn giải metric → hành động<a class="nl" href="/dp-300/notes#s46">note 46</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Metrics,Baseline" title="Ôn 9 câu: Metrics, Baseline (tab mới)">ôn 9 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Metric</th><th>Khi cao (gần 100%)</th></tr>
<tr><td>DTU %</td><td>Tương ứng CPU + memory + IO. Thấp thì hạ tier để tiết kiệm</td></tr>
<tr><td>avg_cpu_percent</td><td>Query chậm và có thể time out → tăng compute size hoặc tối ưu query</td></tr>
<tr><td>avg_data_io_percent / avg_log_write_percent</td><td>Nghẽn I/O → nâng tier hoặc giảm khối lượng ghi</td></tr>
<tr><td>xtp_storage_percent</td><td>In-memory OLTP; chạm 100% thì INSERT/UPDATE/ALTER/CREATE thất bại, SELECT và DELETE vẫn chạy. Bằng 0 nếu không dùng</td></tr>
<tr><td>Data space used %</td><td>Nâng tier, shrink database, hoặc scale out bằng sharding; nếu trong elastic pool thì cân nhắc chuyển ra</td></tr>
<tr><td>avg_memory_usage_percent</td><td>Phần này dùng cho cache — lỗi hết memory thì nâng tier hoặc tối ưu query</td></tr>
<tr><td>max_session_percent / max_worker_percent</td><td>Chạm giới hạn session/request của tier → nâng tier, tăng compute, tối ưu query</td></tr>
</table></div>
</section>

<section id="t305">
<h3>Query Store — cấu hình và giá trị mặc định<a class="nl" href="/dp-300/notes#s50">note 50, 57</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Query%20Store" title="Ôn 15 câu: Query Store (tab mới)">ôn 15 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Tùy chọn</th><th>Nghĩa</th><th>Giá trị đáng nhớ</th></tr>
<tr><td>OPERATION_MODE</td><td>READ_WRITE để thu thập</td><td><code>actual_state</code> = 2 là READ_WRITE, = 1 là READ_ONLY</td></tr>
<tr><td>MAX_STORAGE_SIZE_MB</td><td>Dung lượng cấp cho Query Store</td><td>100 MB (SQL 2016/2017), 1 GB (SQL 2019). Chạm giới hạn → chuyển read-only, <code>readonly_reason</code> = 65536</td></tr>
<tr><td>SIZE_BASED_CLEANUP_MODE</td><td>Tự dọn khi gần đầy</td><td>Bắt đầu ở ~<b>90%</b>, dừng khi còn ~<b>80%</b>, xóa query cũ nhất / ít tốn kém nhất</td></tr>
<tr><td>DATA_FLUSH_INTERVAL_SECONDS</td><td>Giữ trong memory bao lâu trước khi ghi đĩa</td><td>Cao thì mất dữ liệu mới nếu crash; thấp thì tốn I/O</td></tr>
<tr><td>INTERVAL_LENGTH_MINUTES</td><td>Khoảng gộp thống kê — mỗi query tối đa 1 dòng / khoảng</td><td>Chọn 1, 5, 10, 15, 30, 60, 1440</td></tr>
<tr><td>QUERY_CAPTURE_MODE</td><td>Bắt query nào</td><td>All / None / Custom / <b>Auto</b> (mặc định từ SQL 2019 và Azure SQL — bỏ query hiếm và query rất nhẹ)</td></tr>
<tr><td>WAIT_STATS_CAPTURE_MODE</td><td>Bật kho wait stats</td><td>Dữ liệu ở <code>sys.query_store_wait_stats</code></td></tr>
<tr><td>CLEANUP_POLICY</td><td>STALE_QUERY_THRESHOLD_DAYS</td><td>Giữ dữ liệu bao nhiêu ngày</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>View trong SSMS</th><th>Trả lời</th></tr>
<tr><td>Regressed Queries</td><td>Query nào chậm đi (Duration, CPU, Logical/Physical Reads)</td></tr>
<tr><td>Overall Resource Consumption</td><td>Ngày nào / ca nào tốn tài nguyên nhiều</td></tr>
<tr><td>Top Resource Consuming Queries</td><td>Cực trị về duration, execution count, CPU</td></tr>
<tr><td>Queries With Forced Plans</td><td>Query nào đang bị ép plan</td></tr>
<tr><td>Queries With High Variation</td><td>Dao động lớn về thời lượng, CPU, I/O, memory</td></tr>
<tr><td>Query Wait Statistics</td><td>Nhóm chờ: High Memory, Lock, Buffer I/O, CPU</td></tr>
<tr><td>Tracked Queries</td><td>Theo dõi một query theo Query ID; hình tròn = xong, vuông = client hủy, tam giác = lỗi</td></tr>
</table></div>
<p class="lead">Bảng hệ thống: <code>sys.query_store_plan</code>, <code>sys.query_store_runtime_stats</code>, <code>sys.query_store_query</code> + <code>sys.query_store_query_text</code>, <code>sys.database_query_store_options</code>. Xóa sạch: <code>ALTER DATABASE … SET QUERY_STORE CLEAR</code>. Có thể mất tới một ngày mới đủ dữ liệu phản ánh workload.</p>
</section>

<section id="t306">
<h3>Blocking và isolation level<a class="nl" href="/dp-300/notes#s52">note 52</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Blocking,Extended%20Events" title="Ôn 15 câu: Blocking, Extended Events (tab mới)">ôn 15 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Isolation level</th><th>Dirty read</th><th>Blocking</th><th>Ghi chú</th></tr>
<tr><td>READ UNCOMMITTED</td><td>Có</td><td>Không</td><td>Nhanh nhất, dữ liệu không tin được</td></tr>
<tr><td>READ COMMITTED</td><td>Không</td><td>Có thể</td><td>Bị block nếu READ_COMMITTED_SNAPSHOT = OFF (<b>mặc định trên SQL Server</b>); không block nếu ON (<b>mặc định trên Azure SQL Database</b>)</td></tr>
<tr><td>REPEATABLE READ</td><td>Không</td><td>Có</td><td>Giữ lock đọc tới hết transaction</td></tr>
<tr><td>SNAPSHOT</td><td>Không</td><td>Không (trừ khi database đang recover)</td><td>Cần <code>ALLOW_SNAPSHOT_ISOLATION ON</code>; dữ liệu đọc giữ nguyên tới hết transaction</td></tr>
<tr><td>SERIALIZABLE</td><td>Không</td><td>Có — chặn cả update/insert</td><td>Chặt nhất</td></tr>
</table></div>
<p class="lead">Xem mức hiện tại: <code>DBCC USEROPTIONS</code>. Blocking sinh ra từ thiết kế transaction kém hoặc transaction chạy quá lâu. Tìm bằng <code>sys.dm_exec_requests WHERE blocking_session_id &gt; 0</code>.</p>
</section>

<section id="t307">
<h3>Index — khi nào hữu ích, chọn loại nào<a class="nl" href="/dp-300/notes#s54">note 54–55</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Index,Index%20maintenance" title="Ôn 13 câu: Index, Index maintenance (tab mới)">ôn 13 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Điều kiện</th><th>Nội dung</th></tr>
<tr><td>Bảng lớn</td><td>Bảng nhỏ SQL Server vẫn có thể chọn Scan</td></tr>
<tr><td>Cột nhỏ</td><td>Tốt nhất là kiểu số; text ngắn cũng được</td></tr>
<tr><td>Cột trong WHERE (SARGable) và JOIN</td><td><code>LIKE '%text%'</code> thì index thường vô dụng (trừ full-text index)</td></tr>
<tr><td>INCLUDE</td><td>Phủ truy vấn mà không phình key; cột INCLUDE cũng tính vào kiểm tra tính duy nhất của unique index</td></tr>
<tr><td>Quá nhiều index</td><td>Mỗi INSERT/UPDATE/DELETE/MERGE đều phải chỉnh toàn bộ index</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Loại index</th><th>Dùng khi</th></tr>
<tr><td>Clustered</td><td>Một bảng chỉ có một; dùng cho PRIMARY KEY và sắp xếp lại bảng. Nên UNIQUE hoặc nhiều giá trị phân biệt, truy cập theo khoảng, IDENTITY, dùng thường xuyên</td></tr>
<tr><td>Nonclustered</td><td>Bao nhiêu cũng được, mỗi cái là một cấu trúc riêng</td></tr>
<tr><td>Filtered</td><td>Chỉ cần index một phần nhỏ dữ liệu (<code>WHERE …</code>)</td></tr>
<tr><td>Columnstore</td><td>Quét lượng lớn dữ liệu; có ở hầu hết service tier</td></tr>
<tr><td>FILLFACTOR</td><td>Chừa chỗ cho dữ liệu tăng thêm</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Bảo trì index</th><th>Ngưỡng / cách làm</th></tr>
<tr><td>REORGANIZE</td><td>Phân mảnh &gt; 10% và &lt; 30%; LUÔN chạy ONLINE</td></tr>
<tr><td>REBUILD</td><td>Phân mảnh &gt; 30%. Offline nhanh hơn nhưng khóa index cả quá trình; online chỉ khóa ở đoạn cuối</td></tr>
<tr><td>RESUMABLE</td><td><code>MAX_DURATION = 30 RESUMABLE = ON</code> — không dùng cùng "ALL"; PAUSE/ABORT/RESUME. Có từ SQL Server 2017 hoặc Azure SQL Database</td></tr>
<tr><td>Columnstore</td><td>Reorganize khi &gt; 20% số dòng đã bị xóa (<code>sys.dm_db_column_store_row_group_physical_stats</code>)</td></tr>
<tr><td>Đo phân mảnh</td><td><code>SELECT db_name(database_id), object_name(object_id), avg_fragmentation_in_percent, page_count FROM sys.dm_db_index_physical_stats(NULL,NULL,NULL,NULL,NULL)</code> — <code>DBCC SHOWCONTIG</code> làm được việc tương tự nhưng đã deprecated</td></tr>
<tr><td>Công cụ</td><td>Azure SQL Database: Automatic tuning (Create/Drop index). MI: KHÔNG có. VM: Database Engine Tuning Advisor</td></tr>
</table></div>
</section>

<section id="t308">
<h3>Execution plan — join nào và dấu hiệu có vấn đề<a class="nl" href="/dp-300/notes#s57">note 56–57</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Execution%20plan" title="Ôn 7 câu: Execution plan (tab mới)">ôn 7 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Kiểu join</th><th>Dùng khi</th><th>Đặc điểm</th></tr>
<tr><td>Nested Loops</td><td>Input1 nhỏ, Input2 lớn và có index trên cột join</td><td>Ít I/O và ít phép so sánh nhất; lấy 1 dòng ở input trên rồi tìm dòng khớp ở input dưới</td></tr>
<tr><td>Merge</td><td>Cả hai input đều không nhỏ và đã sắp xếp theo cột join (hoặc kích thước tương đương nên chi phí Sort vẫn đáng)</td><td>Có thể rất nhanh</td></tr>
<tr><td>Hash</td><td>Input lớn, chưa sắp xếp, không có index</td><td>Cũng dùng ở giữa các query phức tạp vì kết quả trung gian không có index</td></tr>
<tr><td>Batch mode Adaptive Join</td><td>SQL Server 2017+</td><td>Chuyển thành Hash hoặc Nested Loops sau khi quét xong input đầu tiên</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Thấy gì trong plan</th><th>Sửa thế nào</th></tr>
<tr><td>SELECT *</td><td>Thu hẹp danh sách cột để dùng được index</td></tr>
<tr><td>Sort</td><td>Rất tốn kém — có thực sự cần sắp xếp? Có index nào sắp sẵn theo cột đó chưa?</td></tr>
<tr><td>Scan trong khi có WHERE</td><td>Seek có tốt hơn? Có thể cần thêm index</td></tr>
<tr><td>Heap</td><td>Có cần clustered index không?</td></tr>
<tr><td>RID Lookup / Key Lookup</td><td>Thêm cột vào INCLUDE của index</td></tr>
<tr><td>Predicate không SARGable</td><td>Đừng dùng YEAR → dùng BETWEEN; đừng dùng LEFT → dùng LIKE; đừng dùng ISNULL(X,'Y') → viết <code>(X IS NULL OR X = 'Y')</code></td></tr>
<tr><td>Cursor</td><td>Chuyển sang thao tác theo tập hợp (set-based)</td></tr>
<tr><td>Kiểu dữ liệu quá rộng</td><td>Làm dòng to ra, lấy dữ liệu lâu hơn</td></tr>
<tr><td>Có tham số và hiệu năng phụ thuộc chúng</td><td>WITH RECOMPILE cho stored procedure, hoặc OPTION (RECOMPILE) cho query</td></tr>
</table></div>
<p class="lead">Plan chạy từ <b>phải sang trái</b>; độ dày mũi tên = số dòng; càng nhiều dòng ước tính thì càng nhiều memory được đặt trước. Hiển thị: Display Estimated (không chạy) / Include Actual (chạy xong mới hiện) / <code>SET SHOWPLAN_ALL</code> hoặc <code>SHOWPLAN_TEXT</code> (không thực thi) / Live Query Statistics.</p>
</section>

<section id="t309">
<h3>Hint và statistics<a class="nl" href="/dp-300/notes#s56">note 56, 59</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Hints,Statistics" title="Ôn 11 câu: Hints, Statistics (tab mới)">ôn 11 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Hint</th><th>Tác dụng</th></tr>
<tr><td>Join hint: LOOP / HASH / MERGE JOIN</td><td>Viết ngay trong câu join (INNER LOOP JOIN). LOOP KHÔNG dùng được với RIGHT hoặc FULL join</td></tr>
<tr><td>OPTION (…)</td><td>{HASH|ORDER} GROUP, {MERGE|HASH|CONCAT} UNION, {LOOP|MERGE|HASH} JOIN</td></tr>
<tr><td>KEEPFIXED PLAN</td><td>Không recompile khi statistics đổi; chỉ recompile khi schema đổi hoặc chạy sp_recompile</td></tr>
<tr><td>KEEP PLAN</td><td>Giảm tần suất recompile khi statistics đổi</td></tr>
<tr><td>OPTIMIZE FOR UNKNOWN / OPTIMIZE FOR (@p = giá trị)</td><td>Dùng độ chọn lọc trung bình, hoặc một giá trị cụ thể, thay vì giá trị lúc compile</td></tr>
<tr><td>ROBUST PLAN</td><td>Plan chịu được kích thước dòng lớn nhất có thể</td></tr>
<tr><td>WITH RECOMPILE</td><td>Đặt trước "AS BEGIN" của stored procedure — nếu không, proc bị tối ưu theo đúng lần chạy đầu tiên</td></tr>
</table></div>
<p class="lead">Hint chỉ ảnh hưởng đúng một câu DELETE/INSERT/SELECT/UPDATE/MERGE. Microsoft coi đây là <b>biện pháp cuối cùng</b>.</p>
<div class="tw"><table class="cmp">
<tr><th>Statistics</th><th>Nội dung</th></tr>
<tr><td>Vai trò</td><td>Phân bố giá trị trong cột → ước lượng cardinality → optimizer chọn seek hay scan</td></tr>
<tr><td>Cập nhật thủ công khi</td><td>Query chậm; insert vào cột key tăng/giảm dần (IDENTITY, timestamp); sau bulk insert</td></tr>
<tr><td>KHÔNG cần sau</td><td>Rebuild hay reorganize index — chúng không làm đổi phân bố dữ liệu</td></tr>
<tr><td>Lệnh</td><td><code>sp_updatestats</code> (mọi bảng) hoặc <code>UPDATE STATISTICS schema.table</code></td></tr>
<tr><td>Tùy chọn</td><td>WITH FULLSCAN (= SAMPLE 100 PERCENT), WITH SAMPLE X PERCENT|ROWS, WITH RESAMPLE, PERSIST_SAMPLE_PERCENT = ON</td></tr>
<tr><td>Tự động</td><td>AUTO_CREATE_STATISTICS, AUTO_UPDATE_STATISTICS[_ASYNC] — bản async giúp query không phải chờ cập nhật</td></tr>
</table></div>
</section>

<section id="t310">
<h3>DBCC — kiểm tra tính nhất quán<a class="nl" href="/dp-300/notes#s60-3">note 60</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=DBCC" title="Ôn 5 câu: DBCC (tab mới)">ôn 5 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Lệnh</th><th>Kiểm cái gì</th></tr>
<tr><td>DBCC CHECKDB</td><td>Toàn bộ logic + vật lý; chạy luôn CHECKALLOC + CHECKTABLE (mọi bảng và indexed view) + CHECKCATALOG</td></tr>
<tr><td>DBCC CHECKALLOC</td><td>Tính nhất quán của cấu trúc cấp phát dung lượng đĩa</td></tr>
<tr><td>DBCC CHECKTABLE ('Tên')</td><td>Một bảng/view — <b>là chuỗi</b>, có dấu nháy</td></tr>
<tr><td>DBCC CHECKCATALOG (Tên)</td><td>Nhất quán catalog — <b>không</b> dấu nháy; không chạy trên tempdb hay Filestream</td></tr>
<tr><td>DBCC CHECKCONSTRAINTS</td><td>Toàn vẹn tham chiếu — <b>chạy sau CHECKDB</b></td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Tùy chọn sửa</th><th>Hậu quả</th></tr>
<tr><td>NOINDEX</td><td>Chỉ phát hiện lỗi; nhanh hơn vì bỏ qua nonclustered index của bảng người dùng</td></tr>
<tr><td>REPAIR_REBUILD</td><td>Sửa mà KHÔNG mất dữ liệu (kể cả rebuild index). Phải chuyển SINGLE_USER trước</td></tr>
<tr><td>REPAIR_ALLOW_DATA_LOSS</td><td>Sửa mọi lỗi nhưng <b>có thể mất dữ liệu</b> — phương án cuối. Cần SINGLE_USER và trước đó <code>SET EMERGENCY</code>; nên copy file database trước</td></tr>
<tr><td>REPAIR_FAST</td><td>Không sửa gì — chỉ giữ để tương thích ngược</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>WITH …</th><th>Nghĩa</th></tr>
<tr><td>ALL_ERRORMSGS / NO_INFOMSGS</td><td>Hiện mọi lỗi / ẩn thông báo thông tin</td></tr>
<tr><td>EXTENDED_LOGICAL_CHECKS</td><td>Kiểm logic trên indexed view, XML index, spatial index</td></tr>
<tr><td>PHYSICAL_ONLY</td><td>Chỉ kiểm cấu trúc page, record header</td></tr>
<tr><td>ESTIMATEONLY</td><td>Không kiểm gì, chỉ báo dung lượng tempdb cần</td></tr>
<tr><td>TABLOCK</td><td>Exclusive lock — nhanh hơn, giảm chạy song song</td></tr>
<tr><td>MAX_DOP</td><td>Ghi đè mức song song của sp_configure</td></tr>
</table></div>
<p class="lead">Microsoft khuyến nghị cách sửa tốt nhất là <b>khôi phục từ bản backup</b>, không phải REPAIR.</p>
</section>

<section id="t311">
<h3>Auto-tuning, Resource Governor, database-scoped configuration<a class="nl" href="/dp-300/notes#s61">note 61–64</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Auto-tuning,Resource%20Governor,Scoped%20config,DB%20options,Autogrowth,Free%20space" title="Ôn 31 câu: Auto-tuning, Resource Governor, Scoped config, DB options, Autogrowth, Free space (tab mới)">ôn 31 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Kỹ thuật</th><th>Azure SQL Database</th><th>Managed Instance</th><th>SQL Server trên VM</th></tr>
<tr><td>FORCE_LAST_GOOD_PLAN</td><td>Có, <b>bật mặc định</b></td><td>Có, bật mặc định</td><td>Có từ SQL Server 2017 nhưng <b>tắt mặc định</b> — bật bằng <code>ALTER DATABASE … SET AUTOMATIC_TUNING</code></td></tr>
<tr><td>CREATE INDEX / DROP INDEX tự động</td><td><b>Có</b></td><td><b>KHÔNG có</b></td><td>Không (dùng Database Engine Tuning Advisor)</td></tr>
<tr><td>Resource Governor</td><td>Được dùng nhưng bạn <b>KHÔNG cấu hình được</b></td><td>Cấu hình được</td><td>Cấu hình được</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Auto-tuning</th><th>Nội dung</th></tr>
<tr><td>Vòng lặp</td><td><b>Learn → Adapt → Verify</b> rồi lặp lại</td></tr>
<tr><td>FORCE_LAST_GOOD_PLAN kích hoạt khi</td><td>Lợi ích ước tính <b>&gt; 10 giây</b>, hoặc plan mới nhiều lỗi hơn plan được khuyến nghị</td></tr>
<tr><td><b>Điều kiện tự tạo index</b></td><td><b>CPU, data I/O và log I/O đều phải dưới 80%</b> — vượt ngưỡng đó Azure không tạo index dù khuyến nghị đã có</td></tr>
<tr><td>Sau khi tạo index</td><td>Hiệu năng các query dùng index đó được xem lại; không cải thiện thì index bị <b>tự động drop</b></td></tr>
<tr><td>Cấp áp dụng</td><td>Mỗi tuỳ chọn nhận <code>Inherit</code> / <code>ON</code> / <code>OFF</code>; mặc định ở cấp server là <b>OFF</b> cho cả Create Index lẫn Drop Index, và thiết lập ở database ghi đè server</td></tr>
<tr><td>Bật bằng T-SQL</td><td><code>ALTER DATABASE … SET AUTOMATIC_TUNING = AUTO | INHERIT | CUSTOM</code><br><code>ALTER DATABASE … SET AUTOMATIC_TUNING (FORCE_LAST_GOOD_PLAN = ON, CREATE_INDEX = ON, DROP_INDEX = OFF)</code></td></tr>
<tr><td>Xem khuyến nghị</td><td><code>SELECT * FROM sys.dm_db_tuning_recommendations</code></td></tr>
<tr><td>Xem index do Azure tạo</td><td><code>SELECT * FROM sys.indexes WHERE auto_created = 1</code></td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Resource Governor</th><th>Nội dung</th></tr>
<tr><td>Ba khái niệm</td><td><b>Resource pool</b> (tài nguyên vật lý) → <b>workload group</b> (nhóm request giống nhau) → <b>classification</b> (tiêu chí phân loại, là một function WITH SCHEMABINDING)</td></tr>
<tr><td>Pool dựng sẵn</td><td>internal và default. Chưa bật Governor thì session mới vào default group, request hệ thống vào internal</td></tr>
<tr><td>Thiết lập pool</td><td>MIN_/MAX_CPU_PERCENT (trung bình đảm bảo / trung bình tối đa), CAP_CPU_PERCENT (<b>giới hạn cứng</b>), MIN_/MAX_MEMORY_PERCENT, MIN_/MAX_IOPS_PER_VOLUME</td></tr>
<tr><td>Lưu ý MAX_CPU_PERCENT</td><td>Chỉ có tác dụng khi tổng yêu cầu vượt 100%</td></tr>
<tr><td>Rơi vào default group khi</td><td>Không có tiêu chí; pool được chỉ định không tồn tại; lỗi phân loại</td></tr>
<tr><td>Lệnh</td><td><code>CREATE RESOURCE POOL … / CREATE WORKLOAD GROUP … USING pool / ALTER RESOURCE GOVERNOR WITH (CLASSIFIER_FUNCTION = …) / RECONFIGURE</code></td></tr>
<tr><td>Kiểm tra</td><td>sys.resource_governor_configuration, sys.dm_resource_governor_resource_pools, sys.dm_resource_governor_workload_groups</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Database-scoped configuration</th><th>Tác dụng</th></tr>
<tr><td>MAXDOP</td><td>Số thread song song tối đa cho một query. Mặc định 8 với Azure SQL Database mới. Quá cao → query mới bị đói tài nguyên</td></tr>
<tr><td>PARAMETER_SNIFFING</td><td>Dùng lại plan sinh theo tham số lần chạy đầu — nhanh, nhưng có thể không tối ưu với giá trị khác</td></tr>
<tr><td>OPTIMIZE_FOR_AD_HOC_WORKLOADS</td><td>Lần compile đầu chỉ lưu plan stub (ít memory), lần sau mới lưu plan đầy đủ</td></tr>
<tr><td>QUERY_OPTIMIZER_HOTFIXES</td><td>Nhận hotfix optimizer bất kể compatibility level</td></tr>
<tr><td>LEGACY_CARDINALITY_ESTIMATION</td><td>Quay lại mô hình trước SQL 2014 — chỉ vì tương thích</td></tr>
<tr><td>LAST_QUERY_PLAN_STATS</td><td>Bật actual plan trong sys.dm_exec_query_plan_stats</td></tr>
<tr><td>GLOBAL_TEMPORARY_TABLE_AUTO_DROP</td><td>Đặt ở từng database với SQL DB; đặt ở tempdb với MI và VM</td></tr>
<tr><td>Xem / đặt</td><td><code>sys.database_scoped_configurations</code>; cấp server ở <code>sys.configurations</code> + <code>sp_configure</code> (không có ở Azure SQL Database)</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>ALTER DATABASE … SET</th><th>Nội dung</th></tr>
<tr><td>AUTO_CLOSE</td><td>Đóng database khi user cuối thoát</td></tr>
<tr><td>AUTO_SHRINK</td><td>Shrink khi &gt; 25% file là chỗ trống — <b>khuyến nghị OFF</b></td></tr>
<tr><td>READ_ONLY / READ_WRITE</td><td>Chỉ đọc hay đọc-ghi</td></tr>
<tr><td>SINGLE_USER / RESTRICTED_USER / MULTI_USER</td><td>Một user; hoặc chỉ db_owner + dbcreator + sysadmin; hoặc mọi user có quyền</td></tr>
<tr><td>RECOVERY FULL / BULK_LOGGED / SIMPLE</td><td>FULL dùng log backup; BULK_LOGGED ghi log tối thiểu cho thao tác bulk; SIMPLE chỉ complete backup</td></tr>
<tr><td>COMPATIBILITY_LEVEL</td><td>100 = SQL 2008/R2 … 150 = SQL 2019. Azure SQL và SQL 2014+ không đặt thấp hơn 100</td></tr>
<tr><td>AUTOGROW</td><td><code>MODIFY FILE (NAME=…, FILEGROWTH=40MB|40%)</code>; <code>MODIFY FILEGROUP … AUTOGROW_ALL_FILES</code> — một file chạm ngưỡng thì cả filegroup tăng. Xem thiết lập hiện tại ở <code>sys.sysfiles</code></td></tr>
<tr><td>Xem dung lượng</td><td><code>EXEC sp_spaceused</code> · <code>SELECT file_id, name, size, max_size FROM sys.database_files</code> (max_size = -1 là không giới hạn) · <code>SELECT allocated_extent_page_count, unallocated_extent_page_count FROM sys.dm_db_file_space_usage</code> · <code>DBCC SQLPERF (LOGSPACE)</code> chỉ cho thống kê transaction log · <code>SELECT DATABASEPROPERTYEX('Tên', 'MaxSizeInBytes')</code> (chạy trong chính database, ở master sẽ ra NULL)</td></tr>
<tr><td>Shrink</td><td><code>DBCC SHRINKFILE (2)</code> theo file_id, <code>DBCC SHRINKDATABASE(MyDatabase)</code> cho cả data lẫn log — ảnh hưởng hiệu năng, nên làm lúc ít người dùng</td></tr>
<tr><td>Theo dõi tăng trưởng</td><td><code>SELECT database_name, start_time, storage_in_megabytes FROM sys.resource_stats</code> (single database) · <code>SELECT start_time, elastic_pool_name, elastic_pool_storage_limit_mb, avg_allocated_storage_percent FROM sys.elastic_pool_resource_stats</code> (elastic pool) — cả hai chạy trong master</td></tr>
</table></div>
</section>

<section id="t312">
<h3>Intelligent Query Processing — ba đợt theo compatibility level<a class="nl" href="/dp-300/notes#s66">note 66</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=IQP" title="Ôn 6 câu: IQP (tab mới)">ôn 6 câu</a></h3>
<p class="lead">Mỗi tính năng gắn với một <b>compatibility level</b> và một hằng số <code>DATABASE SCOPED CONFIGURATION</code>. Đề hay hỏi đúng hai thứ đó, nên nhớ theo cột chứ đừng nhớ theo tên tính năng.</p>
<div class="tw"><table class="cmp">
<tr><th>Tính năng</th><th>Level</th><th>Làm gì</th><th>Tắt bằng <code>ALTER DATABASE SCOPED CONFIGURATION SET …= OFF</code></th></tr>
<tr><td colspan="4"><b>Đợt 1 — SQL Server 2017, compatibility level 140 · "đoán lại lúc chạy"</b></td></tr>
<tr><td>Batch mode Adaptive Joins</td><td>140</td><td>Chọn Hash hay Nested Loops <b>lúc chạy</b>, sau khi quét xong input đầu tiên</td><td><code>BATCH_MODE_ADAPTIVE_JOINS</code></td></tr>
<tr><td>Interleaved execution (MSTVF)</td><td>140</td><td>Dùng cardinality <b>thật</b> của multi-statement TVF ở lần compile đầu, thay vì đoán cứng 100 dòng</td><td><code>INTERLEAVED_EXECUTION_TVF</code></td></tr>
<tr><td>Memory grant feedback — batch mode</td><td>140</td><td>Lần chạy sau cấp đúng lượng memory đã dùng: spill thì cấp thêm, thừa ≥ 50% thì cắt bớt</td><td><code>BATCH_MODE_MEMORY_GRANT_FEEDBACK</code></td></tr>
<tr><td colspan="4"><b>Đợt 2 — SQL Server 2019, compatibility level 150 · "viết lại câu truy vấn"</b></td></tr>
<tr><td>Batch mode on rowstore</td><td>150</td><td>Xử lý theo lô nhiều dòng trên bảng rowstore, không cần columnstore index</td><td><code>BATCH_MODE_ON_ROWSTORE</code></td></tr>
<tr><td>Memory grant feedback — row mode</td><td>150</td><td>Như trên nhưng cho plan chạy row mode</td><td><code>ROW_MODE_MEMORY_GRANT_FEEDBACK</code></td></tr>
<tr><td>Table variable deferred compilation</td><td>150</td><td>Dùng cardinality thật của table variable thay vì đoán 1 dòng</td><td><code>DEFERRED_COMPILATION_TV</code></td></tr>
<tr><td>Scalar UDF inlining</td><td>150</td><td>Biến scalar UDF thành biểu thức quan hệ nhúng thẳng vào query</td><td><code>TSQL_SCALAR_UDF_INLINING</code>, hoặc riêng một hàm bằng <code>WITH INLINE = OFF</code></td></tr>
<tr><td colspan="4"><b>Đợt 3 — SQL Server 2022, compatibility level 160 · "học từ lần chạy trước" (cần Query Store)</b></td></tr>
<tr><td>Parameter Sensitive Plan optimization</td><td>160</td><td>Một câu lệnh giữ <b>nhiều plan variant</b> theo mức phân bố dữ liệu của tham số — thuốc chữa parameter sniffing</td><td><code>PARAMETER_SENSITIVE_PLAN_OPTIMIZATION</code></td></tr>
<tr><td>Cardinality Estimation feedback</td><td>160</td><td>Thấy giả định của CE sai liên tục thì thử giả định khác và giữ lại cái tốt hơn</td><td><code>CE_FEEDBACK</code></td></tr>
<tr><td>Degree of Parallelism feedback</td><td>160</td><td>Tự hạ DOP khi song song hoá không giúp gì mà chỉ tốn thêm CPU</td><td><code>DOP_FEEDBACK</code> — lưu ý cái này <b>mặc định OFF</b>, phải bật</td></tr>
<tr><td>Memory grant feedback — persistence</td><td>160</td><td>Ghi feedback vào Query Store nên <b>không mất khi restart</b> hay khi plan bị đẩy khỏi cache</td><td><code>MEMORY_GRANT_FEEDBACK_PERSISTENCE</code></td></tr>
<tr><td>Memory grant feedback — percentile</td><td>160</td><td>Cấp memory theo phân vị của nhiều lần chạy thay vì chỉ lần gần nhất, hết dao động lên xuống</td><td><code>MEMORY_GRANT_FEEDBACK_PERCENTILE</code></td></tr>
<tr><td>Optimized plan forcing</td><td>160</td><td>Rút ngắn thời gian compile khi plan đã bị force, bằng cách lưu sẵn các bước tối ưu</td><td><code>OPTIMIZED_PLAN_FORCING</code></td></tr>
<tr><td colspan="4"><b>Không phụ thuộc compatibility level — chỉ cần đúng phiên bản engine</b></td></tr>
<tr><td><code>APPROX_COUNT_DISTINCT</code></td><td>mọi level</td><td>COUNT DISTINCT xấp xỉ, sai số tối đa <b>2%</b> với xác suất 97%</td><td>Không có hằng số — muốn tắt thì đừng gọi hàm đó</td></tr>
<tr><td><code>APPROX_PERCENTILE_CONT / _DISC</code></td><td>mọi level</td><td>Percentile xấp xỉ trên tập lớn, nhanh hơn nhiều so với bản chính xác</td><td>SQL Server 2022+ / Azure SQL; cũng không có hằng số</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Câu hỏi</th><th>Trả lời</th></tr>
<tr><td>Tắt cho cả database</td><td><code>ALTER DATABASE SCOPED CONFIGURATION SET &lt;hằng số&gt; = OFF</code></td></tr>
<tr><td>Tắt cho đúng một câu lệnh</td><td><code>OPTION (USE HINT('DISABLE_…'))</code> — tên hint là <code>DISABLE_</code> ghép với chính hằng số ở bảng trên</td></tr>
<tr><td>Muốn cả cụm đợt 1 và 2 mà không đổi từng cái</td><td>Nâng <b>compatibility level</b> lên 140 hoặc 150 là bật cả nhóm</td></tr>
<tr><td>Nâng level xong query chậm đi</td><td>Đừng hạ level lại: bật Query Store, tìm plan thoái lui rồi <b>force plan</b> tốt gần nhất</td></tr>
<tr><td>Vì sao đợt 3 cần Query Store</td><td>Feedback của CE, DOP và memory grant persistence được <b>lưu trong Query Store</b>; Query Store tắt thì học xong lại quên sau mỗi lần restart</td></tr>
<tr><td>Kiểm tra đang bật những gì</td><td><code>SELECT * FROM sys.database_scoped_configurations</code></td></tr>
</table></div>
</section>

<h2 class="dom" id="d4">Phạm vi 4 · Tự động hoá</h2>

<section id="t401">
<h3>Cơ chế tự động hoá nào có ở đâu — phần lớn câu hỏi nằm ở đây<a class="nl" href="/dp-300/notes#s-sec4">note 67–77</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=SQL%20Agent,Elastic%20Jobs,Multi-server" title="Ôn 32 câu: SQL Agent, Elastic Jobs, Multi-server (tab mới)">ôn 32 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Cơ chế</th><th>Azure SQL Database</th><th>Managed Instance</th><th>SQL Server trên VM</th></tr>
<tr><td>SQL Server Agent</td><td><b>Không có</b></td><td>Luôn chạy sẵn, không phải bật</td><td>Có, đôi khi phải Start</td></tr>
<tr><td>Elastic Jobs</td><td>Bản thay thế cho Agent</td><td>Thường không dùng (đã có Agent)</td><td>Thường không dùng</td></tr>
<tr><td>Multi-server administration</td><td>Không có</td><td>Master + target server; một target chỉ thuộc <b>đúng một</b> master</td><td>Như MI</td></tr>
<tr><td>Event notification của SQL Agent</td><td>Không có</td><td>Có Agent nhưng <b>KHÔNG cho dùng</b> event notification</td><td>Có</td></tr>
<tr><td>Policy-based management</td><td>Không áp dụng</td><td>Không áp dụng</td><td>Có, kèm chế độ đánh giá tự động</td></tr>
<tr><td>Alert rule của Azure Monitor</td><td colspan="3">Có trên mọi tài nguyên Azure SQL — tín hiệu metric hoặc log + action group</td></tr>
<tr><td>Patch &amp; backup</td><td>Tự động, không chọn thời điểm — viết <b>retry logic</b></td><td>Tự động</td><td>SQL IaaS Agent extension: Automated Patching + Automated Backup</td></tr>
<tr><td>Database Mail</td><td>Không có</td><td>Bật sẵn; profile PHẢI tên <code>AzureManagedInstance_dbmail_profile</code></td><td>Phải tự bật và cấu hình</td></tr>
</table></div>
</section>

<section id="t402">
<h3>SQL Server Agent job — lịch và thông báo<a class="nl" href="/dp-300/notes#s67">note 67–68</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=SQL%20Agent,Notifications,Database%20Mail" title="Ôn 25 câu: SQL Agent, Notifications, Database Mail (tab mới)">ôn 25 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Kiểu lịch</th><th>@freq_type</th><th>Ghi chú</th></tr>
<tr><td>Once</td><td>1</td><td></td></tr>
<tr><td>Daily</td><td>4</td><td></td></tr>
<tr><td>Weekly</td><td>8</td><td></td></tr>
<tr><td>Monthly (ngày trong tháng)</td><td>16</td><td></td></tr>
<tr><td>Monthly relative (ví dụ Chủ nhật thứ X)</td><td>32</td><td></td></tr>
<tr><td>Khi SQL Agent khởi động</td><td>64</td><td><b>KHÔNG hỗ trợ trên Managed Instance</b></td></tr>
<tr><td>Khi CPU rảnh</td><td>128</td><td></td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Thông báo</th><th>Chi tiết</th></tr>
<tr><td>Operator</td><td>SQL Server Agent → Operators → New Operator; hoặc <code>EXEC dbo.sp_add_operator @name, @enabled = 1, @email_address</code> (chạy trong msdb). Pager đã deprecated</td></tr>
<tr><td>@notification_method</td><td><b>1 = Email, 2 = Pager, 4 = Net Send</b> (Pager và Net Send đã deprecated)</td></tr>
<tr><td>Điều kiện gửi</td><td>Khi job thất bại, thành công, hoặc kết thúc (dù thế nào). Áp cho <b>toàn bộ job</b>, không phải từng bước</td></tr>
<tr><td>Database Mail</td><td>Bật Database Mail → tạo account cho service account của SQL Agent → tạo profile và thêm user vào <code>DatabaseMailUserRole</code> trong msdb → đặt profile làm default của msdb</td></tr>
<tr><td>Lịch bằng T-SQL</td><td><code>sp_add_schedule</code> rồi <code>sp_attach_schedule</code>; gắn thông báo bằng <code>EXEC dbo.sp_add_notification @alert_name, @operator_name, @notification_method</code>; xem ở <code>msdb..sysschedules</code>; theo dõi ở Job Activity Monitor</td></tr>
</table></div>
<p class="lead">Error log của SQL Server và của SQL Agent <b>chỉ tự cuộn khi service khởi động lại</b>. Instance chạy vài tháng liền là file phình to tới mức mở ra treo máy, nên việc thường làm là tạo một Agent job cuộn log theo lịch.</p>
<div class="tw"><table class="cmp">
<tr><th>Tiêu chí</th><th><code>sp_cycle_errorlog</code></th><th><code>sp_cycle_agent_errorlog</code></th></tr>
<tr><td>Nằm ở database</td><td><b>master</b> — <code>EXEC master.dbo.sp_cycle_errorlog;</code></td><td><b>msdb</b> — <code>EXEC msdb.dbo.sp_cycle_agent_errorlog;</code></td></tr>
<tr><td>Cuộn log nào</td><td>SQL Server error log — file <code>ERRORLOG</code></td><td>SQL Server <b>Agent</b> error log — file <code>SQLAGENT.OUT</code></td></tr>
<tr><td>Nó làm gì</td><td colspan="2">Đóng file log hiện tại, mở file mới và <b>đẩy số thứ tự của các bản lưu trữ lùi một bậc</b> — y như khi restart service, nhưng không phải restart</td></tr>
<tr><td>Số bản lưu trữ giữ lại</td><td>Mặc định <b>6</b> (<code>ERRORLOG.1</code>…<code>.6</code>), chỉnh được tới <b>99</b> trong Configure SQL Server Error Logs</td><td><b>9</b> (<code>SQLAGENT.1</code>…<code>.9</code>)</td></tr>
<tr><td>Tham số</td><td colspan="2">Không có — gọi trần, không truyền gì</td></tr>
<tr><td>Quyền cần có</td><td>Chỉ <b>sysadmin</b> (fixed <b>server</b> role)</td><td>Mặc định <b>sysadmin</b>; cấp được cho user thường bằng <b><code>SQLAgentOperatorRole</code></b> — fixed <b>database</b> role trong msdb</td></tr>
<tr><td>Điều kiện chạy</td><td>Chỉ cần engine đang chạy</td><td><b>SQL Server Agent phải đang chạy</b> — Agent dừng thì gọi cũng vô ích</td></tr>
<tr><td>Đọc log ra xem</td><td><code>sp_readerrorlog</code> / <code>xp_readerrorlog</code>, tham số đầu là số thứ tự file</td><td>Cùng hai thủ tục đó, nhưng tham số thứ hai đặt là <b>2</b> để trỏ vào log của Agent</td></tr>
<tr><td>Azure SQL Database</td><td>❌ Không có</td><td>❌ Không có — nền tảng này <b>không có SQL Server Agent</b></td></tr>
<tr><td>Managed Instance</td><td colspan="2">⚠️ MI có SQL Agent và chạy job được, nhưng vòng đời file log do dịch vụ quản — đừng mặc định là giống VM, đối chiếu lại Microsoft Learn trước khi dựa vào</td></tr>
<tr><td>SQL Server trên VM / on-prem</td><td>✅</td><td>✅</td></tr>
<tr><td>Bẫy hay hỏi</td><td colspan="2">Cuộn quá dày là <b>mất lịch sử</b>: mỗi lần cuộn đẩy bản cũ nhất ra khỏi vòng lưu trữ. Hằng tuần là nhịp thường dùng; muốn giữ lâu hơn thì nâng số bản lưu trữ trước rồi mới tăng tần suất</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Cách dựng job cuộn log hằng tuần</th><th>Nội dung</th></tr>
<tr><td>Bước làm</td><td>Tạo một SQL Server Agent job, step kiểu <b>Transact-SQL</b>, gắn schedule <code>@freq_type = 8</code> (Weekly)</td></tr>
<tr><td>Câu lệnh trong step</td><td><code>EXEC master.dbo.sp_cycle_errorlog;</code><br><code>EXEC msdb.dbo.sp_cycle_agent_errorlog;</code></td></tr>
<tr><td>Vì sao không dùng restart</td><td>Restart service cũng cuộn log, nhưng làm đứt kết nối — hai thủ tục này đạt cùng kết quả mà <b>không gián đoạn dịch vụ</b></td></tr>
<tr><td>Mức chi tiết ghi log của Agent</td><td>Đặt trong SQL Server Agent → Properties → General: Errors, Warnings, Information. Bật Information làm log phình nhanh hơn nhiều</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Thời điểm</th><th>Việc xảy ra với file log</th><th>Nội dung được ghi</th></tr>
<tr><td><b>SQL Server khởi động</b></td><td><b>Tạo ERRORLOG mới</b> và đẩy các bản cũ lùi một bậc (ERRORLOG → <code>.1</code> → <code>.2</code>…, bản cũ nhất rơi ra) — start chính là <b>một lần cuộn log</b></td><td>Phiên bản, edition, chế độ xác thực, startup parameter, các dòng recovery từng database, kết bằng <i>"SQL Server is now ready for client connections"</i></td></tr>
<tr><td><b>SQL Server dừng</b></td><td>Ghi tiếp vào <b>file hiện tại</b>, không cuộn. Lần start kế tiếp mới đẩy nó thành <code>ERRORLOG.1</code></td><td><i>"SQL Server is terminating in response to a 'stop' request from Service Control Manager"</i>; nếu tắt bất thường thì không có dòng này — đó là dấu hiệu crash</td></tr>
<tr><td><b>SQL Agent khởi động</b></td><td>Cuộn <code>SQLAGENT.OUT</code> y như trên, giữ 9 bản</td><td><code>[100] Microsoft SQLServerAgent version … starting</code>, kèm dòng chờ msdb recovery</td></tr>
<tr><td><b>SQL Agent dừng</b></td><td>Ghi vào file hiện tại</td><td><code>[098] SQLServerAgent terminated (normally)</code> — thiếu chữ <i>normally</i> nghĩa là Agent chết bất thường</td></tr>
</table></div>
<p class="lead"><b>Hệ quả khi gỡ lỗi:</b> vì thông tin khởi động chỉ nằm ở đầu file, cuộn log thủ công xong là <b>startup parameter và log recovery không còn ở file hiện hành</b> nữa — phải mở bản lưu trữ. Ngược lại, một instance chạy liền nhiều tháng thì file hiện hành chứa <b>toàn bộ</b> lịch sử từ lần start gần nhất, và đó đúng là lý do cần <code>sp_cycle_errorlog</code> theo lịch.</p>
<p class="lead">Ba fixed database role của SQL Agent nằm trong <b>msdb</b>, xếp chồng lên nhau — role sau bao trùm role trước. Ai không thuộc role nào và không phải sysadmin thì <b>không dùng được SQL Agent</b>.</p>
<div class="tw"><table class="cmp">
<tr><th>Role trong msdb</th><th>Job của chính mình</th><th>Job của người khác</th><th>Dùng khi</th></tr>
<tr><td><code>SQLAgentUserRole</code></td><td>Tạo, sửa, xoá, chạy, xem lịch sử</td><td><b>Không thấy</b></td><td>Nhà phát triển tự quản job của mình</td></tr>
<tr><td><code>SQLAgentReaderRole</code></td><td>Như trên</td><td><b>Xem</b> được mọi job (kể cả multiserver job), nhưng không chạy, không sửa</td><td>Giám sát, trực ca cần nhìn toàn cảnh</td></tr>
<tr><td><code>SQLAgentOperatorRole</code></td><td>Như trên</td><td><b>Xem, chạy, dừng, bật/tắt</b> mọi job và xem lịch sử — nhưng vẫn <b>không sửa được</b> job của người khác</td><td>Nhóm vận hành: đáp án <b>least privilege</b> khi đề nói "chạy/dừng job mà không cấp sysadmin"</td></tr>
<tr><td><code>sysadmin</code> (server role)</td><td colspan="2">Toàn quyền, gồm cả sửa job của người khác và đổi owner</td><td>Chỉ cấp khi thật sự cần</td></tr>
</table></div>
</section>

<section id="t403">
<h3>Elastic Job — thay SQL Agent cho Azure SQL Database<a class="nl" href="/dp-300/notes#s74">note 74</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Elastic%20Jobs" title="Ôn 15 câu: Elastic Jobs (tab mới)">ôn 15 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Thành phần</th><th>Yêu cầu</th></tr>
<tr><td>Elastic Job agent</td><td>Tài nguyên Azure thực thi job — <b>miễn phí</b></td></tr>
<tr><td>Job database</td><td>Azure SQL Database có sẵn, <b>rỗng</b>, tier Standard <b>S0 trở lên</b> (khuyến nghị S1+); lưu metadata, log, kết quả, định nghĩa job; bị tính phí như database thường</td></tr>
<tr><td>Target group</td><td>Server, elastic pool, database, shard map. Target có thể khác server / subscription / region nhưng <b>phải cùng một Azure cloud</b></td></tr>
<tr><td>Nếu target là server hoặc pool</td><td>Mọi database trong đó tại thời điểm chạy đều bị tác động; phải cấp credential của master để liệt kê database; loại trừ được bằng <code>@membership_type = 'Exclude'</code></td></tr>
<tr><td>Job step</td><td>Script T-SQL phải <b>idempotent</b> — chạy hai lần cho cùng kết quả</td></tr>
<tr><td>Job history</td><td>Giữ <b>45 ngày</b> trong <code>jobs.job_executions</code></td></tr>
<tr><td>Credential</td><td><code>CREATE MASTER KEY</code> + <code>CREATE DATABASE SCOPED CREDENTIAL</code> trong job database; ở mỗi database đích cần user tương ứng (thường thêm vào db_owner)</td></tr>
<tr><td>Lệnh chính</td><td><code>jobs.sp_add_target_group</code>, <code>jobs.sp_add_target_group_member</code>, <code>jobs.sp_add_job</code>, <code>jobs.sp_add_jobstep</code>, <code>jobs.sp_start_job</code>, <code>jobs.sp_update_job</code> (@schedule_interval_type = Minutes/Hours/Days/Weeks/Months/Once)</td></tr>
</table></div>
</section>

<section id="t404">
<h3>Triển khai tự động<a class="nl" href="/dp-300/notes#s70">note 70–72</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=ARM%2FBicep,PowerShell,Azure%20CLI,Deployment" title="Ôn 39 câu: ARM/Bicep, PowerShell, Azure CLI, Deployment (tab mới)">ôn 39 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Cách</th><th>Viết bằng</th><th>Lệnh tiêu biểu</th></tr>
<tr><td>ARM template</td><td>JSON</td><td>Portal → "Deploy a custom template"; type: <code>Microsoft.Sql/servers</code>, <code>/servers/databases</code>, <code>/managedInstances</code>, <code>Microsoft.SqlVirtualMachine/sqlVirtualMachines</code></td></tr>
<tr><td>Bicep</td><td>DSL khai báo, mở rộng của ARM</td><td>VS Code + Bicep extension; resource <code>sqlServer</code> / <code>managedInstance</code>; <code>az bicep decompile --file myfile.json</code> để chuyển ARM → Bicep</td></tr>
<tr><td>PowerShell (module Az)</td><td>Script</td><td><code>New-AzResourceGroup</code>, <code>New-AzSqlServer</code>, <code>New-AzSqlDatabase</code>, <code>New-AzSqlInstance</code> (MI), <code>New-AzVM</code></td></tr>
<tr><td>Azure CLI</td><td>Lệnh az</td><td><code>az group create</code>, <code>az sql server create</code>, <code>az sql db create</code>, <code>az sql mi</code>, <code>az vm create</code></td></tr>
<tr><td>Azure Pipeline</td><td>YAML</td><td>DACPAC thêm vào <code>azure-pipelines.yml</code>; hoặc SQL script + PowerShell</td></tr>
</table></div>
</section>

<section id="t405">
<h3>Cảnh báo — SQL Agent alert và Azure Monitor alert rule<a class="nl" href="/dp-300/notes#s77">note 77</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Alerts,Config%20changes" title="Ôn 14 câu: Alerts, Config changes (tab mới)">ôn 14 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Alert type (SQL Agent, chỉ VM)</th><th>Dựa trên</th></tr>
<tr><td>SQL Server event</td><td>Error number hoặc mức severity</td></tr>
<tr><td>WMI event alert</td><td>Windows Management Instrumentation</td></tr>
<tr><td>SQL Server performance condition</td><td>Object (ví dụ Databases) + Counter (Transactions/sec) + Instance + ngưỡng (dưới / bằng / trên một Value)</td></tr>
</table></div>
<p class="lead">Trang Response: chạy một SQL Agent job và/hoặc thông báo cho operator. Trang Options: đưa nội dung lỗi vào email, thêm message, và đặt độ trễ giữa các phản hồi — <b>0 phút 0 giây</b> nghĩa là phản hồi MỌI lần alert.</p>
<div class="tw"><table class="cmp">
<tr><th>Azure Monitor alert rule</th><th>Chi tiết</th></tr>
<tr><td>Threshold static</td><td>Toán tử (&gt;, ≥, &lt;, ≤) + kiểu tổng hợp (Avg, Min, Max, Count, Sum) + giá trị</td></tr>
<tr><td>Threshold dynamic</td><td>Học dữ liệu, nhận ra tính mùa vụ (giờ/ngày/tuần). Độ nhạy: <b>High</b> = nhiều cảnh báo (sai lệch nhỏ), Medium (mặc định), <b>Low</b> = ít cảnh báo</td></tr>
<tr><td>Evaluated based on</td><td>Aggregation granularity (gộp bao lâu) + Frequency of evaluation (kiểm bao lâu một lần)</td></tr>
<tr><td>Action group</td><td>Thông báo: Email, SMS, Azure app Push, Voice. Action: Automation Runbook, Azure Function, ITSM, Logic App, Webhook</td></tr>
<tr><td>Severity</td><td><b>0 = Critical … 4 = Verbose</b></td></tr>
<tr><td>Signal</td><td>Platform metric hoặc activity log (thao tác quản trị)</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Biết ai đổi cấu hình server</th><th>Cách làm</th></tr>
<tr><td>MI và VM</td><td><code>sp_configure 'show advanced options', 1</code> → RECONFIGURE → <code>sp_configure 'default trace enabled', 1</code> → RECONFIGURE. Xem ở SSMS: chuột phải instance → Reports → Standard Reports → <b>Configuration Changes History</b></td></tr>
<tr><td>Azure SQL Database</td><td>Dùng alert rule của Azure Monitor trên activity log</td></tr>
</table></div>
</section>

<section id="t406">
<h3>Policy-based management và automated backup trên VM<a class="nl" href="/dp-300/notes#s75-4">note 75</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Policies,VM%20backup,Automation,Maintenance,Logic%20Apps" title="Ôn 23 câu: Policies, VM backup, Automation, Maintenance, Logic Apps (tab mới)">ôn 23 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Evaluation mode</th><th>Cơ chế</th></tr>
<tr><td>On demand</td><td>Chạy khi bạn bấm Evaluate</td></tr>
<tr><td>On change: prevent</td><td>Dùng <b>DDL trigger</b> để chặn thay đổi vi phạm</td></tr>
<tr><td>On change: log</td><td>Ghi vào event notification</td></tr>
<tr><td>On schedule</td><td>Theo lịch có sẵn hoặc lịch mới</td></tr>
</table></div>
<p class="lead">Điều kiện của policy mô tả trạng thái <b>NÊN</b> có — policy fail nếu điều đó KHÔNG đúng. Để trống "Against targets" thì policy nhắm vào server. Không áp dụng cho Azure SQL Database hay MI.</p>
<div class="tw"><table class="cmp">
<tr><th>Automated Backup (VM)</th><th>Yêu cầu / giới hạn</th></tr>
<tr><td>Phiên bản</td><td>v1: Windows Server 2012 + SQL Server 2014 Std/Ent. v2: Windows Server 2012 R2+ và SQL Server 2016+ Std/Ent/Dev</td></tr>
<tr><td>Recovery model</td><td>Bắt buộc <b>FULL</b></td></tr>
<tr><td>Retention</td><td>Tối đa <b>30 ngày</b></td></tr>
<tr><td>Chọn được</td><td>Storage account, mã hoá (kèm mật khẩu), có backup database hệ thống (master, model, msdb) hay không</td></tr>
<tr><td>Lịch</td><td>Automated (theo mức tăng trưởng log) hoặc Manual: tần suất Weekly/Daily, giờ bắt đầu, cửa sổ (giờ), tần suất log backup (phút). Weekly = mỗi database backup 1 lần/tuần kể cả phải kéo qua nhiều ngày</td></tr>
<tr><td>Instance</td><td>Backup được default instance hoặc <b>một</b> named instance; không có default mà nhiều named instance thì thất bại</td></tr>
</table></div>
</section>

<h2 class="dom" id="d5">Phạm vi 5 · HA/DR</h2>

<section id="t501">
<h3>Backup — ai làm và bạn được chạy gì<a class="nl" href="/dp-300/notes#s86">note 84–88</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Backup,LTR,Cloud%20backup" title="Ôn 26 câu: Backup, LTR, Cloud backup (tab mới)">ôn 26 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th></th><th>Azure SQL Database</th><th>Managed Instance</th><th>SQL Server trên VM</th></tr>
<tr><td>Lịch backup</td><td colspan="2">Tự động: <b>full hằng tuần, differential mỗi 12–24 giờ, log mỗi 5–10 phút</b></td><td>Bạn tự lập lịch</td></tr>
<tr><td>Backup thủ công</td><td>Không có</td><td>CHỈ full <code>COPY_ONLY</code> tới URL — không differential, log hay file-snapshot</td><td>Đầy đủ: full, differential, log, file, filegroup</td></tr>
<tr><td>Point-in-time restore</td><td>Mặc định 7 ngày, chỉnh 1–35 ngày (Basic tối đa 7; Hyperscale khác)</td><td>Theo <b>từng database</b>, không phải cả instance</td><td>Tự dựng lại từ full + differential + log</td></tr>
<tr><td>Long-term retention</td><td>Tới <b>10 năm</b>: Weekly, Monthly, Yearly, WeekOfYear</td><td>Public preview, chỉ region Azure Public</td><td>Không áp dụng</td></tr>
<tr><td>Recovery model</td><td>Do dịch vụ quản (FULL, không nên đổi)</td><td>Do dịch vụ quản</td><td>SIMPLE (không log backup), FULL hoặc BULK_LOGGED</td></tr>
<tr><td>Restore đè database đang tồn tại</td><td colspan="2"><b>KHÔNG được</b> — restore ra tên mới rồi đổi tên</td><td>Được (Overwrite the existing database)</td></tr>
</table></div>
<p class="lead">Quy tắc gọn để trả lời mọi câu "cấu hình được cái gì": PaaS cho bạn chỉnh <b>giữ bao lâu</b>, không cho chỉnh <b>chạy thế nào</b>. Thấy đề hỏi đổi tần suất full/differential/log trên SQL Database hay MI thì đáp án luôn là <b>không</b>.</p>
<div class="tw"><table class="cmp">
<tr><th>Thiết lập</th><th>SQL Database</th><th>Managed Instance</th><th>SQL Server trên VM</th><th>Giải thích</th></tr>
<tr><td>Tần suất <b>full</b> backup</td><td>❌</td><td>❌</td><td>✅</td><td>PaaS chạy full hằng tuần, Azure tự quản; trên VM là lịch của bạn</td></tr>
<tr><td>Tần suất <b>differential</b> backup</td><td>❌</td><td>❌</td><td>✅</td><td>PaaS chạy mỗi 12–24 giờ, không chỉnh được</td></tr>
<tr><td>Tần suất <b>log</b> backup</td><td>❌</td><td>❌</td><td>✅</td><td>PaaS chạy mỗi 5–10 phút — đây chính là thứ quyết định RPO của PITR</td></tr>
<tr><td>Giờ chạy backup</td><td>❌</td><td>❌</td><td>✅</td><td>Không có "cửa sổ backup" cho PaaS; VM thì đặt được giờ bắt đầu và độ dài cửa sổ</td></tr>
<tr><td><b>PITR retention</b> (thời gian giữ backup)</td><td>✅</td><td>✅</td><td>—</td><td>1–35 ngày, mặc định 7 (Basic tối đa 7; Hyperscale có quy tắc riêng)</td></tr>
<tr><td><b>Long-term retention</b> (LTR)</td><td>✅</td><td>✅</td><td>—</td><td>Policy Weekly / Monthly / Yearly / WeekOfYear, giữ tới <b>10 năm</b>; MI còn ở preview</td></tr>
<tr><td>Backup storage redundancy</td><td>✅</td><td>✅</td><td>✅</td><td>LRS / ZRS / GRS — chọn lúc tạo, đổi sau có ràng buộc theo tier nên kiểm lại trước khi hứa</td></tr>
<tr><td>Chạy backup thủ công</td><td>❌</td><td>⚠️</td><td>✅</td><td>SQL Database không có lệnh <code>BACKUP</code>; MI <b>chỉ</b> full <code>COPY_ONLY</code> tới URL, không differential/log/file-snapshot</td></tr>
<tr><td>Recovery model</td><td>❌</td><td>❌</td><td>✅</td><td>PaaS khoá ở FULL; VM chọn SIMPLE / FULL / BULK_LOGGED</td></tr>
<tr><td>Nén, checksum, mã hoá backup</td><td>❌</td><td>❌</td><td>✅</td><td>PaaS mã hoá sẵn theo TDE; VM tự đặt <code>WITH COMPRESSION</code>, <code>CHECKSUM</code>, <code>ENCRYPTION</code></td></tr>
<tr><td>Đích lưu backup</td><td>❌</td><td>⚠️</td><td>✅</td><td>PaaS lưu ở Azure Blob do dịch vụ quản; MI chỉ chọn được URL cho bản COPY_ONLY; VM chọn disk hoặc URL</td></tr>
<tr><td>Backup database hệ thống (master, model, msdb)</td><td>❌</td><td>❌</td><td>✅</td><td>Automated Backup trên VM có tuỳ chọn bật kèm database hệ thống</td></tr>
<tr><td>Xoá một bản backup cụ thể</td><td>❌</td><td>❌</td><td>✅</td><td>PaaS chỉ hết hạn theo policy; xoá database gốc thì các bản hiện có hết hạn dần</td></tr>
<tr><td>Restore <b>đè</b> database đang tồn tại</td><td>❌</td><td>❌</td><td>✅</td><td>PaaS phải restore ra tên mới rồi đổi tên; VM có tuỳ chọn Overwrite</td></tr>
<tr><td>Geo-restore sang region khác</td><td>✅</td><td>✅</td><td>❌</td><td>Có sẵn khi dùng backup dư thừa địa lý — RPO 1 giờ, RTO 12 giờ; VM phải tự dựng</td></tr>
</table></div>
<p class="lead">Ký hiệu: ✅ bạn cấu hình được · ❌ dịch vụ quản, không đổi được · ⚠️ chỉ một phần · — không áp dụng cho nền tảng đó.</p>
<p class="lead">LTR do Azure thực hiện: bạn <b>không kích hoạt được</b>, và bản đầu tiên có thể mất tới <b>7 ngày</b> mới hiện. Backup lưu ở Azure Blob, mỗi tuần một container khác. Database secondary cũng cần LTR policy, nhưng policy chỉ được tạo khi nó trở thành primary. Xoá database gốc thì không backup thêm nữa và các bản hiện có sẽ hết hạn dần.</p>
</section>

<section id="t502">
<h3>Chọn giải pháp HA/DR theo RPO/RTO<a class="nl" href="/dp-300/notes#s79">note 79, 91</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=SLA%20%2F%20RPO%20%2F%20RTO,Failover%20group,Geo-replication,Hybrid%20HADR,FCI,Site%20Recovery" title="Ôn 39 câu: SLA / RPO / RTO, Failover group, Geo-replication, Hybrid HADR, FCI, Site Recovery (tab mới)">ôn 39 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Giải pháp</th><th>Nền tảng</th><th>RPO / RTO và điều cần nhớ</th></tr>
<tr><td>Zone-redundant deployment</td><td>SQL DB, MI</td><td>Business Critical / Premium với replica ở nhiều availability zone → SLA <b>99,995%</b></td></tr>
<tr><td>Geo-restore</td><td>SQL DB, MI</td><td><b>RPO 1 giờ, RTO 12 giờ</b> — rẻ nhất và chậm nhất</td></tr>
<tr><td>Active geo-replication</td><td>Chỉ SQL DB</td><td>Failover thủ công: <b>RPO 5 giây, RTO 30 giây</b>; tối đa 4 secondary đọc được</td></tr>
<tr><td>Auto-failover group</td><td>SQL DB, MI — KHÔNG có ở VM</td><td><b>RPO 5 giây, RTO 1 giờ</b>; auto-failover chỉ kích hoạt sau ít nhất <b>1 giờ</b>, grace period 1–24 giờ; listener endpoint bám theo primary; cả group failover cùng lúc</td></tr>
<tr><td>Always On availability group</td><td>VM, hybrid</td><td>2–9 replica trên WSFC; synchronous không mất dữ liệu nhưng phải chờ, asynchronous cho khoảng cách xa; kết nối qua listener; failover ở cấp <b>database</b></td></tr>
<tr><td>Failover cluster instance</td><td>VM</td><td>Bảo vệ cả <b>instance</b> bằng shared storage + WSFC. Là HA, <b>KHÔNG phải DR</b></td></tr>
<tr><td>Log shipping</td><td>VM, on-prem</td><td>Backup → copy → restore theo lịch; secondary chỉ đọc hạn chế; failover <b>thủ công</b>; hybrid cần site-to-site VPN hoặc ExpressRoute (vì dùng Windows file sharing)</td></tr>
<tr><td>Database mirroring</td><td>VM + on-prem</td><td>VM ≥ SQL 2012 và on-prem ≥ SQL 2008 R2, dùng server certificate; <b>KHÔNG cần VPN</b> và không cần cùng AD domain</td></tr>
<tr><td>Transactional replication</td><td>MI → SQL Server / SQL DB / MI</td><td>Đẩy thay đổi bằng cách thực thi DML; dùng để phân phối dữ liệu hoặc di trú</td></tr>
<tr><td>Azure Site Recovery</td><td>VM</td><td>DR đơn giản (không phải HA), region chính → phụ; không riêng cho SQL Server; hữu ích chống ransomware</td></tr>
</table></div>
<p class="lead">Bảng trên chọn theo RPO/RTO. Bảng dưới so cùng bộ tiêu chí — đề hay hỏi <b>phạm vi bảo vệ</b> (database hay cả instance) và <b>failover tự động hay thủ công</b> chứ không chỉ hỏi con số.</p>
<div class="tw"><table class="cmp">
<tr><th>Giải pháp</th><th>Nền tảng</th><th>HA hay DR</th><th>Bảo vệ ở cấp</th><th>Chống được</th><th>Đồng bộ dữ liệu</th><th>Failover</th><th>Secondary đọc được</th></tr>
<tr><td>Zone-redundant deployment</td><td>SQL DB · MI</td><td><b>HA</b></td><td>Cả database, trong suốt</td><td>Hỏng một availability zone</td><td>Đồng bộ</td><td>Tự động, ứng dụng không thấy gì</td><td>Không (đây không phải replica để đọc)</td></tr>
<tr><td>Geo-restore</td><td>SQL DB · MI</td><td><b>DR</b></td><td>Database</td><td>Mất cả region</td><td>Không có replica — restore từ backup</td><td>Thủ công, tạo database mới</td><td>Không áp dụng</td></tr>
<tr><td>Active geo-replication</td><td><b>Chỉ SQL DB</b></td><td>DR (+ read scale)</td><td>Database, chọn từng cái</td><td>Mất region</td><td>Bất đồng bộ</td><td><b>Thủ công</b></td><td>Có — tối đa 4 secondary</td></tr>
<tr><td>Auto-failover group</td><td>SQL DB · MI — <b>không có ở VM</b></td><td>DR</td><td>Nhóm database; với MI là cả instance</td><td>Mất region</td><td>Bất đồng bộ</td><td><b>Tự động</b> sau grace period 1–24 giờ, hoặc thủ công</td><td>Có — qua read-only listener</td></tr>
<tr><td>Always On AG — synchronous</td><td>VM · on-prem</td><td><b>HA</b></td><td>Database (theo từng AG)</td><td>Hỏng node trong cùng site</td><td><b>Đồng bộ</b>, không mất dữ liệu nhưng commit phải chờ</td><td>Tự động nếu đặt automatic failover</td><td>Có, nếu bật readable secondary</td></tr>
<tr><td>Always On AG — asynchronous</td><td>VM · on-prem · hybrid</td><td><b>DR</b></td><td>Database</td><td>Mất site hoặc region</td><td>Bất đồng bộ</td><td>Thủ công, và forced failover <b>có thể mất dữ liệu</b></td><td>Có, nếu bật readable secondary</td></tr>
<tr><td>Distributed AG</td><td>VM · hybrid</td><td>DR · di trú</td><td>Nối <b>hai AG</b> với nhau</td><td>Mất site, hoặc dùng để chuyển lên cloud</td><td>Bất đồng bộ giữa hai AG</td><td>Thủ công</td><td>Có</td></tr>
<tr><td>Failover cluster instance</td><td>VM · on-prem</td><td><b>HA</b> — không phải DR</td><td><b>Cả instance</b></td><td>Hỏng node; <b>KHÔNG</b> chống hỏng storage vì dùng shared storage</td><td>Không nhân bản dữ liệu — chung một bộ đĩa</td><td>Tự động trong cluster</td><td>Không — node thụ động không phục vụ</td></tr>
<tr><td>Log shipping</td><td>VM · on-prem</td><td>DR</td><td>Database</td><td>Mất site</td><td>Bất đồng bộ, theo lịch backup–copy–restore</td><td><b>Thủ công</b></td><td>Hạn chế — standby mode, phải ngắt người dùng mỗi lần restore</td></tr>
<tr><td>Database mirroring</td><td>VM + on-prem</td><td>DR</td><td>Database</td><td>Mất site</td><td>Đồng bộ hoặc bất đồng bộ</td><td>Thủ công (hoặc tự động nếu có witness)</td><td>Không — cần database snapshot mới đọc được</td></tr>
<tr><td>Azure Site Recovery</td><td>VM</td><td><b>DR</b> — không phải HA</td><td><b>Cả máy ảo</b></td><td>Mất region</td><td>Nhân bản mức đĩa, không hiểu giao dịch SQL</td><td>Thủ công theo recovery plan</td><td>Không</td></tr>
</table></div>
<p class="lead">Ba chỗ hay mất điểm: <b>FCI là HA chứ không phải DR</b> vì shared storage vẫn là một điểm hỏng duy nhất · <b>active geo-replication chỉ có ở SQL Database</b>, MI phải dùng failover group · và <b>auto-failover group không tồn tại trên VM</b> — trên VM thì tương đương gần nhất là AG asynchronous.</p>
</section>

<section id="t503">
<h3>SLA và quorum<a class="nl" href="/dp-300/notes#s92">note 79, 92</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=SLA,SLA%20%2F%20RPO%20%2F%20RTO,Quorum" title="Ôn 14 câu: SLA, SLA / RPO / RTO, Quorum (tab mới)">ôn 14 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Cấu hình</th><th>SLA / quy tắc</th></tr>
<tr><td>Azure SQL Database và MI, tier thông thường</td><td>99,99% (52 phút/năm)</td></tr>
<tr><td>Business Critical / Premium, zone redundant</td><td>99,995% (26 phút/năm)</td></tr>
<tr><td>Hyperscale</td><td>99,9% khi không có replica; 99,95% khi có một replica</td></tr>
<tr><td>SQL Server trên VM</td><td>Bản thân VM cao nhất 99,99%; SQL Server vẫn có thể hỏng dù VM khỏe → SLA thực tế thấp hơn</td></tr>
<tr><td>Vượt SLA của failover group</td><td>Được credit 100% chi phí hằng tháng của secondary</td></tr>
<tr><td>Quorum WSFC</td><td>Giữ số vote <b>lẻ</b>, tối thiểu 3 vote. Cluster 2 node chạy được không cần witness nhưng vẫn nên có</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Quorum witness</th><th>Yêu cầu / đặc điểm</th><th>Dùng khi</th></tr>
<tr><td>Cloud Witness</td><td>Windows Server 2016 trở lên; tốn đúng <b>1 MB</b>; storage account phải là <b>General Purpose + Standard</b>, replication <b>Locally redundant</b> — <b>Blob storage account và Premium storage KHÔNG được hỗ trợ</b>; giao tiếp qua <b>port 443 (HTTPS)</b>. Cần tên storage account và primary access key, thêm <b>tên endpoint server</b> nếu dùng Azure sovereign cloud (ví dụ Azure Trung Quốc)</td><td><b>Khuyến nghị bất cứ khi nào có thể</b> — kể cả cluster on-premises hoặc lai, <b>không riêng cluster chạy trên Azure</b>; đặc biệt hợp với triển khai nhiều site / nhiều zone / nhiều region. Ngoại lệ: cluster đã có shared storage thì dùng disk witness</td></tr>
<tr><td>Disk Witness</td><td>Một đĩa cluster <b>nhỏ hơn 1 GB</b> nằm trong nhóm Cluster Available Storage; <b>không được là Cluster Shared Volume</b>; trên Azure VM thì phải là <b>Azure Shared Disk</b></td><td>Khi cluster <b>đã có shared storage</b> phù hợp — đây là witness <b>bền nhất</b> và <b>failover được giữa các node</b></td></tr>
<tr><td>File share witness</td><td>SMB file share trên một file server chạy Windows Server, đặt ở <b>một VM riêng trong cùng Virtual Network</b> và <b>tách khỏi workload của cluster</b> để các cluster khác cũng dùng được; mọi node phải truy cập được share</td><td><b>Chỉ khi</b> cloud witness và disk witness đều không dùng được</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Cấu hình quorum</th><th>Nghĩa</th></tr>
<tr><td>Node majority</td><td>Đa số node có quyền bỏ phiếu, không có witness</td></tr>
<tr><td>Node majority + witness</td><td>Node có phiếu và witness cũng có một phiếu</td></tr>
<tr><td>No majority (chỉ disk witness)</td><td>Chỉ disk witness có phiếu — <b>không khuyến nghị</b>, là điểm lỗi đơn</td></tr>
</table></div>
</section>

<section id="t504">
<h3>Always On availability group<a class="nl" href="/dp-300/notes#s90">note 90, 82</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Availability%20Group,AG%20setup,AG%20listener" title="Ôn 20 câu: Availability Group, AG setup, AG listener (tab mới)">ôn 20 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Chủ đề</th><th>Chi tiết</th></tr>
<tr><td>Số replica</td><td>1 primary + <b>1–8 secondary</b> (SQL Server <b>Standard chỉ 1</b> secondary); phải có ít nhất 2 failover partner</td></tr>
<tr><td>Yêu cầu</td><td>Domain controller VM (cần AD domain); VM join domain, SQL Server 2012+ Enterprise hoặc 2016+ Standard; cùng availability set hoặc nhiều availability zone; đăng ký SQL IaaS Agent extension ở <b>full manageability</b>; dùng chung một domain account cho service SQL Server</td></tr>
<tr><td>Hai IP còn trống</td><td>Một cho internal load balancer, một cho availability group listener (cùng subnet với AG)</td></tr>
<tr><td>Synchronous commit</td><td>Primary chưa commit tới khi secondary đã harden log — không mất dữ liệu nhưng phải chờ; hợp khi gần nhau về địa lý</td></tr>
<tr><td>Asynchronous commit</td><td>Primary commit trước rồi mới gửi — độ trễ thấp nhất, secondary trễ một nhịp; hợp khi xa nhau</td></tr>
<tr><td>Secondary</td><td>Có thể cho phép read-only và/hoặc backup; <b>KHÔNG thay thế được backup</b></td></tr>
<tr><td>Chuẩn bị database</td><td>Full recovery model; BACKUP rồi RESTORE WITH NORECOVERY lên secondary (kể cả tail-log); tên database phải TRÙNG; rồi <code>ALTER DATABASE … SET HADR AVAILABILITY GROUP = MyAG</code></td></tr>
<tr><td>Listener</td><td>Tên DNS tối đa <b>15 ký tự</b>; port mặc định 1433; probe port mặc định <b>59999</b>; Static IP (DHCP không khuyến nghị cho production); phải có IP tĩnh cho MỌI subnet có replica</td></tr>
<tr><td>Load balancer</td><td>Internal = app trong cùng VNet; External = qua internet công cộng. IP assignment nên Static; resource group và location phải trùng nơi đặt SQL Server</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Kiểu failover</th><th>Mất dữ liệu?</th><th>Điều kiện</th></tr>
<tr><td>Planned manual failover</td><td>Không</td><td>CHỈ synchronous-commit, secondary phải đang synchronized</td></tr>
<tr><td>Automatic failover</td><td>Không</td><td>CHỈ synchronous-commit; cần quorum WSFC và đang synchronized</td></tr>
<tr><td>Forced manual failover</td><td><b>Có thể mất</b></td><td>Dành cho asynchronous-commit; là phương án DR; kiểu <b>duy nhất</b> làm được khi secondary chưa synchronized</td></tr>
</table></div>
<p class="lead">Failover thủ công trong SSMS: kết nối tới server đang giữ <b>secondary</b> → Always On High Availability → Availability Groups → chuột phải → Failover. Trang wizard ghi "Perform a planned failover" là làm được mà không mất dữ liệu; secondary hiện "No data loss" hoặc "Data loss, Warnings (X)" (trường hợp sau buộc forced failover). T-SQL: <code>ALTER AVAILABILITY GROUP MyAg FAILOVER;</code>. Sau failover, kết nối Azure SQL tự chuyển hướng sang node primary mới.</p>
</section>

<section id="t505">
<h3>Auto-failover group và geo-replication<a class="nl" href="/dp-300/notes#s91">note 91, 94</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Failover%20group,Geo-replication" title="Ôn 21 câu: Failover group, Geo-replication (tab mới)">ôn 21 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Chủ đề</th><th>Active geo-replication</th><th>Auto-failover group</th></tr>
<tr><td>Nền tảng</td><td>Chỉ Azure SQL Database</td><td>Azure SQL Database và MI (không có ở VM)</td></tr>
<tr><td>Số secondary</td><td>Tối đa 4, cùng hoặc khác region, đọc được</td><td>Tối đa 4; có thể nằm trong elastic pool; đọc được</td></tr>
<tr><td>Failover</td><td>Thủ công — RPO 5 giây, RTO 30 giây</td><td>Tự động sau ít nhất 1 giờ, hoặc thủ công — RPO 5 giây, RTO 1 giờ</td></tr>
<tr><td>Cơ chế</td><td colspan="2">Nhân bản bất đồng bộ bằng cách <b>stream transaction log</b> (khác transactional replication — vốn thực thi lại DML)</td></tr>
<tr><td>Tier của secondary</td><td colspan="2">Phải ít nhất bằng primary. Nâng cấp: nâng <b>secondary trước</b>. Hạ cấp: hạ <b>primary trước</b></td></tr>
<tr><td>Isolation</td><td colspan="2">Secondary dùng snapshot isolation nên query dài trên secondary không làm trễ update từ primary</td></tr>
<tr><td>Cần &gt; 4 secondary</td><td colspan="2">Tạo secondary của một secondary — nhân bản tới đó sẽ lâu hơn</td></tr>
<tr><td>Dùng để</td><td colspan="2">Di trú database sang server khác với downtime tối thiểu; tạo bản dự phòng để quay lui khi nâng cấp app</td></tr>
</table></div>
<p class="lead">Tạo failover group: SQL Database <b>server</b> (không phải database) → Settings → Failover groups → Add group; nhập tên duy nhất, chọn server phụ, <b>Read/Write failover policy</b> (automatic hoặc manual) và <b>grace period 1–24 giờ</b>, rồi thêm database. Kiểm thử: Failover hoặc Forced failover (forced có nguy cơ mất dữ liệu) — <b>cả group failover cùng lúc</b>. PowerShell: <code>Invoke-AzSqlInstanceFailover</code> (MI), <code>Invoke-AzSqlDatabaseFailover</code> (một database, kể cả trong pool), <code>Invoke-AzSqlElasticPoolFailover</code> (cả pool).</p>
</section>

<section id="t506">
<h3>BACKUP — các tùy chọn WITH<a class="nl" href="/dp-300/notes#s88-3">note 84, 88</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Backup,Log%20backup" title="Ôn 20 câu: Backup, Log backup (tab mới)">ôn 20 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Tùy chọn</th><th>Nghĩa</th><th>Mặc định</th></tr>
<tr><td>COPY_ONLY</td><td>Tạo full backup nhưng KHÔNG được coi là full backup với differential/log sau này — không làm gián đoạn chuỗi backup</td><td>—</td></tr>
<tr><td>DIFFERENTIAL</td><td>Mọi thay đổi kể từ lần FULL gần nhất. Không có DIFFERENTIAL/LOG thì đó là FULL backup</td><td>—</td></tr>
<tr><td>NOINIT | INIT</td><td>Append vào hay ghi đè backup set hiện có trên media</td><td>NOINIT (append)</td></tr>
<tr><td>NOSKIP | SKIP</td><td>Có kiểm ngày hết hạn của backup set trước khi ghi đè hay không</td><td>NOSKIP (có kiểm)</td></tr>
<tr><td>NOFORMAT | FORMAT</td><td>Ghi media header mới, ghi đè header và backup set hiện có</td><td>NOFORMAT. <b>FORMAT làm cả media set không dùng được nữa và ngầm định SKIP</b></td></tr>
<tr><td>NO_CHECKSUM | CHECKSUM</td><td>Sinh backup checksum để kiểm chứng</td><td>NO_CHECKSUM</td></tr>
<tr><td>STOP_ON_ERROR | CONTINUE_AFTER_ERROR</td><td>Dừng khi gặp lỗi page checksum hay tiếp tục</td><td>STOP_ON_ERROR</td></tr>
<tr><td>COMPRESSION | NO_COMPRESSION</td><td>Chỉ Enterprise; ghi đè mặc định cấp server</td><td>Không nén</td></tr>
<tr><td>ENCRYPTION</td><td>AES_128, AES_192, AES_256, TRIPLE_DES_3KEY, NO_ENCRYPTION; cần SERVER CERTIFICATE hoặc SERVER ASYMMETRIC KEY</td><td>NO_ENCRYPTION</td></tr>
<tr><td>STATS = X</td><td>Báo tiến độ sau mỗi X%</td><td>10%</td></tr>
<tr><td>DESCRIPTION / NAME</td><td>Tối đa 255 / 128 ký tự</td><td>Trống</td></tr>
<tr><td>CREDENTIAL</td><td>Chỉ khi backup lên Azure Blob</td><td>—</td></tr>
<tr><td>FILE_SNAPSHOT</td><td>Snapshot file database lưu vào Azure Blob (EXPIREDATE / RETAINDAYS)</td><td>—</td></tr>
<tr><td>MIRROR TO</td><td>Chỉ Enterprise; phải làm cùng lúc với primary backup; tối đa <b>3 bản secondary</b></td><td>—</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>BACKUP LOG … WITH</th><th>Nghĩa</th></tr>
<tr><td>NORECOVERY</td><td>Backup phần đuôi log, để database ở trạng thái <b>RESTORING</b>. Dùng khi failover sang secondary hoặc trước một lệnh RESTORE</td></tr>
<tr><td>STANDBY = file</td><td>Backup đuôi log, để database ở trạng thái read-only STANDBY; file này giữ các thay đổi bị rollback</td></tr>
<tr><td>NO_TRUNCATE</td><td>Không truncate log, buộc SQL Server cố backup bất kể trạng thái database — dùng khi database SUSPENDED / đã hỏng</td></tr>
</table></div>
<p class="lead">Khuyến nghị dùng NO_TRUNCATE và NORECOVERY cùng nhau. Quyền: BACKUP DATABASE và backup log — có ở sysadmin, db_owner, db_backupoperator. Đích: DISK, TAPE (deprecated), URL (Azure Blob). Với MI: kích thước tối đa một backup stripe (blob) là <b>195 GB</b> — cần thêm thì thêm file.</p>
</section>

<section id="t507">
<h3>RESTORE — các tùy chọn<a class="nl" href="/dp-300/notes#s85">note 85–88</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Restore,PITR,MI%20restore" title="Ôn 20 câu: Restore, PITR, MI restore (tab mới)">ôn 20 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Recovery state</th><th>Nghĩa</th></tr>
<tr><td>WITH RECOVERY</td><td>Mặc định — đưa database online, đã restore xong. Chỉ chọn với full/bulk-logged nếu restore luôn cả file log</td></tr>
<tr><td>WITH NORECOVERY</td><td>Để database ở trạng thái Restoring, còn restore thêm bản backup khác</td></tr>
<tr><td>WITH STANDBY = file</td><td>Cho truy cập read-only hạn chế; cần standby file để hoàn tác tác động của recovery</td></tr>
<tr><td>RESTORE VERIFYONLY</td><td>Kiểm chứng bản backup nhưng KHÔNG restore</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Điểm dừng / lựa chọn</th><th>Nội dung</th></tr>
<tr><td>STOPAT / STOPATMARK / STOPBEFOREMARK</td><td>Restore tới một thời điểm, một mark hoặc một LSN</td></tr>
<tr><td>FILE = n</td><td>Chọn backup set thứ n trên media</td></tr>
<tr><td>Source</td><td><b>Database</b>: chỉ liệt kê database từng backup, dựa trên lịch sử trong msdb. <b>Device</b>: tape / URL / file — <b>bắt buộc</b> nếu bản backup tạo ở instance khác; tối đa 64 device cùng một media set</td></tr>
<tr><td>Destination</td><td>Mọi database trên server TRỪ master và tempdb</td></tr>
<tr><td>Quyền</td><td>Cần CREATE DATABASE — có ở sysadmin, dbcreator, và dbo của database đã tồn tại</td></tr>
<tr><td>Options</td><td>Ghi đè database/file hiện có; giữ thiết lập replication; giới hạn truy cập sau restore (chỉ db_owner, dbcreator, sysadmin); tail-log backup trước khi restore; hỏi xác nhận sau mỗi bản backup</td></tr>
<tr><td>MI restore bằng T-SQL</td><td>Chỉ <b>complete restore</b> từ Azure Blob: <code>RESTORE DATABASE … FROM URL = '…'</code>; chỉ restore sang MI khác, KHÔNG sang SQL Server on-prem</td></tr>
<tr><td>PITR trong portal</td><td>Database → Overview → Restore (database đã xoá thì vào server/MI → "Deleted database"). Bản backup đầu tiên được lên lịch ngay sau khi tạo/restore database, thường xong trong 30 phút</td></tr>
</table></div>
</section>

<section id="t508">
<h3>Transactional replication — ai được là gì<a class="nl" href="/dp-300/notes#s94">note 94</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Replication" title="Ôn 6 câu: Replication (tab mới)">ôn 6 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Vai trò</th><th>Được là</th><th>KHÔNG được là</th></tr>
<tr><td>Publisher</td><td>Azure SQL MI hoặc instance SQL Server</td><td><b>KHÔNG được là Azure SQL Database</b> (với nó thì dùng Data Sync)</td></tr>
<tr><td>Distributor</td><td>Azure SQL MI hoặc SQL Server; có thể là chính MI của publisher nhưng phải database khác. Nếu là SQL Server thì version ≥ version của publisher</td><td>—</td></tr>
<tr><td>Pull subscriber</td><td>MI hoặc SQL Server, nhưng phải <b>cùng loại với Distributor</b></td><td>—</td></tr>
<tr><td>Push subscriber</td><td>Azure SQL Database (chỉ Standard Transactional + Snapshot); MI (thêm Bidirectional); SQL Server (version mới hơn publisher, hoặc cũ hơn không quá 2 phiên bản)</td><td>—</td></tr>
</table></div>
<div class="tw"><table class="cmp">
<tr><th>Kiểu replication</th><th>Nghĩa</th><th>Nền tảng</th></tr>
<tr><td>Transactional</td><td>Thay đổi gần thời gian thực, áp lên subscriber đúng thứ tự đã xảy ra</td><td>SQL DB, MI, on-prem, VM</td></tr>
<tr><td>Snapshot</td><td>Dữ liệu tại một thời điểm, không theo dõi cập nhật sau đó</td><td>SQL DB, MI, on-prem, VM</td></tr>
<tr><td>Merge</td><td>Sửa được ở cả publisher lẫn subscriber, đồng bộ khi có mạng</td><td>MI, on-prem, VM</td></tr>
<tr><td>Bidirectional</td><td>Hai server trao đổi thay đổi với nhau</td><td>MI, on-prem, VM</td></tr>
<tr><td>Peer-to-peer</td><td>Thay đổi gần thời gian thực trên nhiều instance</td><td>on-prem, VM</td></tr>
<tr><td>Updatable subscription</td><td>Đã deprecated</td><td>—</td></tr>
</table></div>
<p class="lead">Ba agent cần credential: <b>Snapshot Agent</b> (mọi publication), <b>Log Reader Agent</b> (mọi transactional publication), <b>Queue Reader Agent</b> (transactional có updating subscription). Không chỉ định Distributor thì Publisher tự làm Distributor và phải khai một default snapshot folder.</p>
</section>

<section id="t509">
<h3>Log shipping<a class="nl" href="/dp-300/notes#s94-2">note 94</a><a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Log%20shipping" title="Ôn 7 câu: Log shipping (tab mới)">ôn 7 câu</a></h3>
<div class="tw"><table class="cmp">
<tr><th>Chủ đề</th><th>Chi tiết</th></tr>
<tr><td>Quy trình</td><td>Primary backup transaction log → copy sang (các) secondary → restore trên secondary. Không đọc được secondary trong lúc restore</td></tr>
<tr><td>Mạng</td><td>On-prem → Azure VM: cần <b>site-to-site VPN hoặc ExpressRoute</b>. VM → VM: cùng VNet với domain controller, hoặc VPN</td></tr>
<tr><td>Trạng thái secondary khi restore</td><td>"No recovery mode" hoặc "Standby mode" (không dùng được nếu major version của secondary cao hơn primary)</td></tr>
<tr><td>Delay restore</td><td>"Delay restoring backups at least X minutes" — hữu ích khi ai đó xoá nhầm dòng ở primary và bạn cần thời gian lấy lại từ secondary</td></tr>
<tr><td>Monitor server</td><td>Tùy chọn — theo dõi khi nào log được backup, khi nào secondary copy/restore, và cảnh báo backup thất bại</td></tr>
<tr><td>Failover</td><td>Thủ công, không tự động</td></tr>
<tr><td>Stored procedure</td><td>Primary: <code>sp_add_log_shipping_primary_database</code>, <code>sp_add_jobschedule</code>, <code>sp_add_log_shipping_alert_job</code>, <code>sp_add_log_shipping_primary_secondary</code>. Secondary: <code>sp_add_log_shipping_secondary_primary</code>, <code>sp_add_jobschedule</code> + <code>sp_attach_schedule</code>, <code>sp_add_log_shipping_secondary_database</code>, rồi <code>sp_update_job</code></td></tr>
</table></div>
</section>

<h2 class="dom" id="dx">Ôn cuối · Con số, giới hạn, bẫy</h2>

<section id="t601">
<h3>Những con số hay bị hỏi</h3>
<div class="tw"><table class="cmp">
<tr><th>Con số</th><th>Thuộc về</th></tr>
<tr><td>8.192 byte</td><td>Một page (page compression)</td></tr>
<tr><td>80 vCore / 400 GB memory / 100 database / 16 TB</td><td>Giới hạn Managed Instance</td></tr>
<tr><td>4 TB (Hyperscale 100 TB) / 256 TB</td><td>SQL Database / instance trên VM</td></tr>
<tr><td>1,5×</td><td>Đơn giá eDTU pool so với DTU single database</td></tr>
<tr><td>~2,7×</td><td>Giá Business Critical (3 replica) so với General Purpose</td></tr>
<tr><td>300 DTU</td><td>Ngưỡng nên cân nhắc chuyển sang vCore</td></tr>
<tr><td>5–10 ms / 1–2 ms</td><td>Độ trễ storage General Purpose / Business Critical</td></tr>
<tr><td>15 giây, 1 giờ</td><td>Tần suất mẫu và cửa sổ của sys.dm_db_resource_stats</td></tr>
<tr><td>5 phút, ~14 ngày</td><td>Mẫu và thời gian giữ của sys.resource_stats</td></tr>
<tr><td>1 giờ, 90 ngày</td><td>Mẫu và thời gian giữ của sys.resource_usage (preview)</td></tr>
<tr><td>30 ngày, 93 ngày</td><td>Metrics Explorer: xem một lúc / lùi tối đa</td></tr>
<tr><td>100 MB → 1 GB</td><td>MAX_STORAGE_SIZE_MB Query Store (SQL 2016/17 → 2019)</td></tr>
<tr><td>90% → 80%</td><td>Ngưỡng bắt đầu và kết thúc size-based cleanup của Query Store</td></tr>
<tr><td>65536</td><td>readonly_reason khi Query Store chạm giới hạn dung lượng</td></tr>
<tr><td>10 giây</td><td>Lợi ích ước tính để FORCE_LAST_GOOD_PLAN kích hoạt</td></tr>
<tr><td>80%</td><td>Ngưỡng CPU/data IO/log IO để auto-tuning được tạo index</td></tr>
<tr><td>MAXDOP 8</td><td>Mặc định của Azure SQL Database mới</td></tr>
<tr><td>2%, 97%</td><td>Sai số và xác suất của APPROX_COUNT_DISTINCT</td></tr>
<tr><td>10% / 30%</td><td>Ngưỡng REORGANIZE / REBUILD index</td></tr>
<tr><td>20% / 25%</td><td>Ngưỡng reorganize columnstore / AUTO_SHRINK</td></tr>
<tr><td>4.000 ký tự</td><td>Mỗi bản ghi SQL Audit</td></tr>
<tr><td>30 giây hoặc 100.000 giao dịch</td><td>Ledger đóng một block</td></tr>
<tr><td>2 ngày / 3 ngày</td><td>Retention mặc định Change Tracking / CDC</td></tr>
<tr><td>20 giây / 1 giờ</td><td>CDC trên Azure SQL Database: capture scan / cleanup</td></tr>
<tr><td>5 phút</td><td>Đổi thành viên server role mới có hiệu lực (DBCC FLUSHAUTHCACHE để rút ngắn)</td></tr>
<tr><td>10 phút (30 phút)</td><td>Database thành Inaccessible khi mất CMK (nếu do lỗi 4XX của Key Vault)</td></tr>
<tr><td>7 ngày, 1–35 ngày, 10 năm</td><td>PITR mặc định, khoảng chỉnh được, LTR tối đa</td></tr>
<tr><td>7 ngày</td><td>Chờ bản LTR đầu tiên xuất hiện</td></tr>
<tr><td>tuần / 12–24 giờ / 5–10 phút</td><td>Lịch backup tự động: full / differential / log</td></tr>
<tr><td>195 GB</td><td>Kích thước tối đa một backup stripe của MI</td></tr>
<tr><td>30 ngày</td><td>Retention tối đa của Automated Backup trên VM</td></tr>
<tr><td>45 ngày</td><td>Elastic Job history trong jobs.job_executions</td></tr>
<tr><td>24 giờ</td><td>Không hoàn tất MI copy/move thì bị hủy, database đích bị drop</td></tr>
<tr><td>RPO 1 giờ / RTO 12 giờ</td><td>Geo-restore</td></tr>
<tr><td>RPO 5 giây / RTO 30 giây</td><td>Failover thủ công sang geo-replica</td></tr>
<tr><td>RPO 5 giây / RTO 1 giờ</td><td>Auto-failover group; auto-failover chờ ít nhất 1 giờ, grace period 1–24 giờ</td></tr>
<tr><td>2–9 replica (Standard: 2)</td><td>Always On availability group</td></tr>
<tr><td>15 ký tự / 1433 / 59999</td><td>Tên listener / listener port / probe port</td></tr>
<tr><td>3 vote lẻ, &lt; 1 GB, ~1 MB</td><td>Quorum tối thiểu, disk witness, cloud witness</td></tr>
<tr><td>0 = Critical … 4 = Verbose</td><td>Severity của Azure Monitor alert</td></tr>
<tr><td>1 = Email, 2 = Pager, 4 = Net Send</td><td>@notification_method của sp_add_notification</td></tr>
<tr><td>5 = SQL DB, 8 = MI, &lt; 5 = on-prem</td><td>SERVERPROPERTY('EngineEdition')</td></tr>
</table></div>
</section>

<section id="t602">
<h3>"KHÔNG làm được" — bảng loại trừ nhanh</h3>
<div class="tw"><table class="cmp">
<tr><th>Việc</th><th>Không làm được ở đâu</th></tr>
<tr><td>SQL Server Agent, msdb, CLR, cross-database query</td><td>Azure SQL Database</td></tr>
<tr><td>BACKUP / RESTORE đầy đủ, differential, log backup</td><td>Azure SQL Database; MI chỉ có full COPY_ONLY tới URL</td></tr>
<tr><td>Restore đè lên database đang tồn tại</td><td>Azure SQL Database và MI</td></tr>
<tr><td>Bật TDE trong portal</td><td>Managed Instance (chỉ T-SQL)</td></tr>
<tr><td>Đổi TDE protector sang Key Vault bằng T-SQL</td><td>Azure SQL Database và MI — phải dùng portal/PowerShell/CLI/REST</td></tr>
<tr><td>Tạo certificate từ file, dùng file private key</td><td>Azure SQL Database</td></tr>
<tr><td>Fixed server role ##MS_…##</td><td>MI và SQL Server &lt; 2022</td></tr>
<tr><td>Firewall rule cấp server / cấp database</td><td>Managed Instance (dùng NSG)</td></tr>
<tr><td>Cấu hình Resource Governor</td><td>Azure SQL Database (có dùng nhưng không cấu hình được)</td></tr>
<tr><td>Auto CREATE/DROP INDEX</td><td>Managed Instance</td></tr>
<tr><td>Change Data Capture</td><td>Free/Basic/S0/S1/S2; elastic pool &lt; 1 vCore hoặc &lt; 100 eDTU; serverless đang paused; cột đã mã hoá</td></tr>
<tr><td>sp_estimate_data_compression_savings, sp_helprotect, sp_helprolemember</td><td>Azure SQL Database</td></tr>
<tr><td>Data compression</td><td>Bảng hệ thống, bảng có cột SPARSE</td></tr>
<tr><td>SQL Data Sync</td><td>Managed Instance (hub phải là Azure SQL Database)</td></tr>
<tr><td>Là Publisher của transactional replication</td><td>Azure SQL Database</td></tr>
<tr><td>Auto-failover group</td><td>SQL Server trên VM</td></tr>
<tr><td>Active geo-replication</td><td>Managed Instance</td></tr>
<tr><td>Event notification của SQL Agent</td><td>Managed Instance và Azure SQL Database</td></tr>
<tr><td>Lịch "Start automatically when SQL Agent starts"</td><td>Managed Instance</td></tr>
<tr><td>Policy-based management</td><td>Azure SQL Database và MI</td></tr>
<tr><td>Chuyển ra khỏi Hyperscale</td><td>Azure SQL Database — một chiều</td></tr>
<tr><td>Tắt secure enclave sau khi bật</td><td>Azure SQL Database — một chiều</td></tr>
<tr><td>Chuyển bảng thường thành ledger table</td><td>Mọi nền tảng — phải tạo mới rồi copy</td></tr>
<tr><td>Trace flag</td><td>Azure SQL Database; MI chỉ một số global trace flag</td></tr>
<tr><td>USE để đổi database context</td><td>Azure SQL Database (logical server)</td></tr>
</table></div>
</section>

<section id="t603">
<h3>Cặp dễ lẫn — phân biệt trong một dòng</h3>
<div class="tw"><table class="cmp">
<tr><th>Cặp</th><th>Khác nhau ở</th></tr>
<tr><td>TDE vs TLS</td><td>TDE mã hoá dữ liệu <b>khi nằm yên</b>; TLS mã hoá <b>khi đang truyền</b></td></tr>
<tr><td>Always Encrypted vs cell-level encryption</td><td>Always Encrypted mã hoá ở <b>client</b>, sysadmin không đọc được; cell-level mã hoá ở <b>server</b>, key nằm trên server</td></tr>
<tr><td>Deterministic vs Randomized</td><td>Deterministic cho phép =, JOIN, GROUP BY, DISTINCT, index (cần collation _BIN2); Randomized chặn hết</td></tr>
<tr><td>VBS enclave vs Intel SGX</td><td>VBS: mọi SKU, không cần attestation. SGX: DC-series + Azure Attestation, cách ly mạnh hơn</td></tr>
<tr><td>Dynamic Data Masking vs RLS</td><td>DDM che <b>cột</b> khi hiển thị; RLS lọc <b>dòng</b></td></tr>
<tr><td>Change Tracking vs CDC</td><td>CT: dòng/cột nào đổi, không có giá trị cũ, đồng bộ, nhẹ. CDC: mọi thay đổi trung gian kèm giá trị trước/sau, bất đồng bộ, đọc log</td></tr>
<tr><td>fn_cdc_get_all_changes vs get_net_changes</td><td>all = mọi thay đổi trung gian; net = một dòng trạng thái cuối (cần @supports_net_changes = 1 và PK)</td></tr>
<tr><td>Private Link vs Service endpoint</td><td>Private Link: IP riêng trong VNet, tới đúng một resource. Service endpoint: vẫn đi qua <b>IP công cộng</b> của dịch vụ</td></tr>
<tr><td>Firewall rule cấp server vs cấp database</td><td>Cấp database được kiểm <b>TRƯỚC</b>, chỉ tạo bằng T-SQL, lưu trong chính database đó</td></tr>
<tr><td>REVOKE vs DENY</td><td>REVOKE gỡ quyền nhưng không chặn; DENY chặn, thắng mọi GRANT (trừ sysadmin và object owner)</td></tr>
<tr><td>VIEW SERVER STATE vs VIEW DATABASE STATE</td><td>Quyền cấp server KHÔNG thay được quyền cấp database khi đọc DMV cấp database</td></tr>
<tr><td>Query Store vs Query Performance Insight</td><td>Query Store là kho dữ liệu; QPI là màn hình đọc kho đó (chỉ Azure SQL Database)</td></tr>
<tr><td>SQL Insights vs database watcher</td><td>SQL Insights khai tử 31/12/2024; database watcher là bản thay thế cho SQL DB và MI (VM dùng VM insights + DCR)</td></tr>
<tr><td>Geo-replication vs transactional replication</td><td>Geo-replication <b>stream transaction log</b>; transactional replication thực thi lại lệnh DML</td></tr>
<tr><td>Availability group vs Failover cluster instance</td><td>AG bảo vệ <b>database</b> (và làm được DR); FCI bảo vệ cả <b>instance</b> bằng shared storage, chỉ là HA</td></tr>
<tr><td>Synchronous vs asynchronous commit</td><td>Sync: không mất dữ liệu, phải chờ, cho phép automatic/planned failover. Async: độ trễ thấp, chỉ forced failover</td></tr>
<tr><td>COPY_ONLY vs DIFFERENTIAL</td><td>COPY_ONLY không làm gián đoạn chuỗi backup; DIFFERENTIAL phụ thuộc lần FULL gần nhất</td></tr>
<tr><td>Log shipping vs database mirroring</td><td>Log shipping cần VPN (Windows file sharing); mirroring dùng certificate, KHÔNG cần VPN và không cần cùng domain</td></tr>
<tr><td>DBCC CHECKTABLE vs CHECKCATALOG</td><td>CHECKTABLE nhận <b>chuỗi</b> (có nháy); CHECKCATALOG và CHECKDB nhận tên database <b>không có nháy</b></td></tr>
<tr><td>Elastic Job vs SQL Agent job</td><td>Elastic Job cho Azure SQL Database (cần job database S0+); SQL Agent job cho MI và VM</td></tr>
</table></div>
</section>

<h2 class="dom" id="dm">Mẹo nhớ · Luật, chuỗi, số neo</h2>

<section id="t701">
<h3>Luật ba bậc — giải được phần lớn câu hỏi “cái này chạy ở đâu”<a class="ql" target="_blank" rel="noopener" href="/dp-300/practice?topic=Azure%20SQL%20DB,Azure%20SQL%20MI,SQL%20on%20VM" title="Ôn 33 câu: Azure SQL DB, Azure SQL MI, SQL on VM (tab mới)">ôn 33 câu</a></h3>
<p class="lead">Đừng học ma trận nền tảng bằng cách nhớ từng ô. Nhớ một cái thang: <b>VM có tất → MI mất vài thứ → SQL Database mất nhiều hơn</b>. Tính năng nào <b>cần hệ điều hành</b> hoặc <b>cần SQL Server Agent</b> thì rơi rụng dần khi leo lên PaaS.</p>
<div class="tw"><table class="cmp">
<tr><th>Bậc</th><th>Câu chốt</th><th>Suy ra được ngay</th></tr>
<tr><td>SQL Server trên VM</td><td>“Cần OS hoặc cần Windows → chỉ VM”</td><td>SSAS / SSIS / SSRS, log shipping, database mirroring, failover cluster instance, quorum WSFC, trace flag đầy đủ, policy-based management, event notification của SQL Agent</td></tr>
<tr><td>Managed Instance — con giữa</td><td>“Có Agent nhưng bị cắt bớt”</td><td>CÓ: SQL Agent, msdb, CLR, cross-database query, Resource Governor, multi-server administration. KHÔNG: event notification, differential/log backup thủ công (chỉ full COPY_ONLY), Hyperscale, DTU, active geo-replication, auto CREATE/DROP INDEX. TDE chỉ bật bằng T-SQL</td></tr>
<tr><td>Azure SQL Database</td><td>“Không Agent, không msdb, không CLR, không cross-database query”</td><td>Thay Agent bằng Elastic Jobs; không có lệnh BACKUP/RESTORE; audit được ở cấp database; có firewall rule cấp server và cấp database; không cấu hình được Resource Governor</td></tr>
</table></div>
<p class="lead">Ngoại lệ phá thang thì <b>đều là thứ sinh ra trên cloud</b> — nên bậc dưới mới là bậc thiếu:</p>
<div class="tw"><table class="cmp">
<tr><th>Chỉ có ở Azure SQL Database</th><th>Móc để nhớ</th></tr>
<tr><td>Hyperscale</td><td>Tách storage khỏi compute — chỉ dịch vụ cloud làm được, và vào rồi không ra được</td></tr>
<tr><td>Elastic pool, Elastic Jobs</td><td>Sinh ra để gộp nhiều database và để thay SQL Agent</td></tr>
<tr><td>Serverless auto-pause</td><td>Tính tiền theo giây là khái niệm của cloud</td></tr>
<tr><td>Auto CREATE / DROP INDEX</td><td>MI có FORCE_LAST_GOOD_PLAN nhưng không tự tạo index</td></tr>
<tr><td>Hub của SQL Data Sync</td><td>Hub buộc phải là SQL Database, member mới được là on-prem</td></tr>
<tr><td>Ledger, role <code>##MS_…##</code></td><td>SQL Server 2022 “bắt kịp” cloud nên cũng có — MI thì không</td></tr>
</table></div>
</section>

<section id="t702">
<h3>Chuỗi thứ tự — đề hay hỏi “bước nào trước”</h3>
<p class="lead">Mỗi chuỗi là một câu ngắn 3–5 nhịp. Đọc to vài lần là thuộc, và thứ tự chính là đáp án.</p>
<div class="tw"><table class="cmp">
<tr><th>Việc</th><th>Chuỗi</th><th>Vì sao thứ tự đó</th></tr>
<tr><td>Row-Level Security<a class="nl" href="/dp-300/notes#s42">note 42</a></td><td><b>Dựng sân → viết luật → phát vé → trọng tài áp luật → đá thử</b><br>Schema · Function · Grant · Policy · Test</td><td>Hàm phải có trước thì policy mới tham chiếu được; user chỉ cần vé vào bảng (SELECT), không cần quyền trên hàm; đá thử phải bằng <code>EXECUTE AS USER</code> vì sysadmin không bị lọc</td></tr>
<tr><td>TDE với customer-managed key<a class="nl" href="/dp-300/notes#s30">note 30</a></td><td><b>Tủ · Chìa · Danh · Quyền · Giáp</b><br>Vault · Key · Identity · Permission · Protector</td><td>Chưa có tủ thì không có chỗ đặt chìa; chưa có danh tính thì không có ai để cấp quyền; chưa cấp quyền mà trỏ protector là database mất khả năng unwrap DEK</td></tr>
<tr><td>Chuyển sang Entra-only authentication<a class="nl" href="/dp-300/notes#s23">note 23</a></td><td><b>Chủ · Người · Máy · Chốt</b><br>Admin · User · App · Lock</td><td>Chốt cửa (tắt SQL auth) luôn là bước CUỐI — khoá sớm là cắt đứt mọi app còn dùng mật khẩu</td></tr>
<tr><td>Page compression<a class="nl" href="/dp-300/notes#s13">note 13</a></td><td><b>Ô → Đầu → Điển</b><br>Row · Prefix · Dictionary</td><td>Nén từng ô, cắt phần đầu giống nhau, rồi mới lập từ điển cho giá trị trùng</td></tr>
<tr><td>Log shipping<a class="nl" href="/dp-300/notes#s94-2">note 94</a></td><td><b>Sao · Chuyển · Nạp</b><br>Backup · Copy · Restore</td><td>Ba job riêng, nên có thể chèn “delay restore” ở bước cuối để kịp cứu dòng bị xoá nhầm</td></tr>
<tr><td>Stripe đĩa trên VM<a class="nl" href="/dp-300/notes#s11">note 11</a></td><td><b>Đĩa vào bể, bể ra ổ, ổ thành volume</b><br>Đĩa · Storage pool · Virtual disk · Volume</td><td>Chọn resiliency ở bước virtual disk, không phải ở bước đĩa</td></tr>
<tr><td>Mã hoá cấp cell<a class="nl" href="/dp-300/notes#s31">note 31</a></td><td><b>Server → Database → Giấy → Khoá → Dữ liệu</b><br>SMK · DMK · certificate · symmetric key · data</td><td>Mỗi tầng khoác áo cho tầng dưới; nên restore sang server khác mà thiếu certificate + DMK là mất dữ liệu vĩnh viễn</td></tr>
<tr><td>Bật CDC<a class="nl" href="/dp-300/notes#s38">note 38</a></td><td><b>Database trước, bảng sau</b><br>sp_cdc_enable_db · sp_cdc_enable_table</td><td>Cùng luật với Change Tracking — và muốn TẮT ở cấp database thì phải tắt hết ở từng bảng trước, tức đi ngược lại</td></tr>
</table></div>
</section>

<section id="t703">
<h3>Cặp đối lập — mỗi câu một dòng, giải cả một họ câu hỏi</h3>
<div class="tw"><table class="cmp">
<tr><th>Câu để nhớ</th><th>Phân biệt</th></tr>
<tr><td><b>TDE có chữ Đ như Đĩa, TLS có chữ L như Lối</b></td><td>TDE = dữ liệu nằm yên; TLS = dữ liệu đang đi trên đường</td></tr>
<tr><td><b>Deterministic là Dùng được, Randomized là Ra rìa</b></td><td>Deterministic cho =, JOIN, GROUP BY, DISTINCT, index (cần collation _BIN2); Randomized chặn hết</td></tr>
<tr><td><b>Đọc thì Lọc, ghi thì Chặn</b></td><td>FILTER predicate cho SELECT/UPDATE/DELETE; BLOCK predicate cho thao tác ghi</td></tr>
<tr><td><b>REVOKE là rút vé, DENY là dán biển cấm</b></td><td>Rút vé thì vẫn vào được bằng cửa khác (role khác); dán biển thì mọi cửa đều chặn — trừ sysadmin và chủ object</td></tr>
<tr><td><b>Nhỏ được hỏi trước</b></td><td>Firewall rule cấp database được kiểm TRƯỚC rule cấp server</td></tr>
<tr><td><b>Private Link có IP trong nhà, service endpoint vẫn ra cổng công cộng</b></td><td>Đây là khác biệt duy nhất cần nhớ giữa hai cơ chế</td></tr>
<tr><td><b>Che mặt hay khoá cửa</b></td><td>Dynamic Data Masking chỉ che khi hiển thị (đoán được bằng WHERE/BETWEEN); Always Encrypted mới thật sự khoá</td></tr>
<tr><td><b>CT chụp thẻ, CDC quay phim</b></td><td>Change Tracking = dòng nào đổi; CDC = đổi thế nào, có giá trị trước và sau</td></tr>
<tr><td><b>all_changes là phim, net_changes là ảnh cuối</b></td><td>net_changes chỉ tồn tại khi tạo capture instance với <code>@supports_net_changes = 1</code> và bảng có primary key</td></tr>
<tr><td><b>Có IO là data, không IO là tempdb</b></td><td>PAGEIOLATCH_* = file data; PAGELATCH_* = tempdb; WRITELOG = transaction log</td></tr>
<tr><td><b>CXPACKET đi với SOS_SCHEDULER_YIELD</b></td><td>Hai anh này xuất hiện cùng nhau thì nghi MAXDOP quá cao hoặc thiếu index</td></tr>
<tr><td><b>Dọn hay đập đi xây lại</b></td><td>Phân mảnh 10–30% thì REORGANIZE (luôn online); trên 30% thì REBUILD</td></tr>
<tr><td><b>Bảng bọc nháy, database để trần</b></td><td><code>DBCC CHECKTABLE ('Tên')</code> là chuỗi; <code>DBCC CHECKDB (Tên)</code> và CHECKCATALOG không có dấu nháy</td></tr>
<tr><td><b>Đồng bộ chờ mà chắc, bất đồng bộ nhanh mà hụt</b></td><td>Và: automatic/planned failover chỉ đi với synchronous; asynchronous chỉ còn forced failover</td></tr>
<tr><td><b>Geo chuyển log, replication chạy lại lệnh</b></td><td>Geo-replication stream transaction log; transactional replication thực thi lại DML</td></tr>
<tr><td><b>AG giữ database, FCI giữ instance</b></td><td>AG làm được cả DR; FCI chỉ là HA và cần shared storage</td></tr>
<tr><td><b>Copy-only là ảnh lưu niệm</b></td><td>Không xen vào chuỗi backup, nên differential/log sau đó không đếm nó</td></tr>
<tr><td><b>Chưa xong thì NO</b></td><td>Còn bản backup phải restore nữa thì WITH NORECOVERY; xong hẳn mới WITH RECOVERY</td></tr>
<tr><td><b>Hai người thì PowerShell</b></td><td>Always Encrypted tách vai trò Security Admin và DBA cho hai người khác nhau → chỉ làm được bằng PowerShell, SSMS không đủ</td></tr>
<tr><td><b>Notes cũ nói “chỉ Azure SQL Database”, thực ra CT có ở cả ba</b></td><td>Thứ khác nhau theo nền tảng là ai chạy CDC: SQL Agent (MI, VM) hay scheduler của dịch vụ (SQL Database)</td></tr>
</table></div>
</section>

<section id="t704">
<h3>Số neo — gắn con số vào một câu, đừng học rời</h3>
<div class="tw"><table class="cmp">
<tr><th>Câu neo</th><th>Bung ra thành</th></tr>
<tr><td><b>5 giây là của geo, 1 giờ là của backup</b></td><td>RPO: active geo-replication và auto-failover group = 5 giây; geo-restore (đi từ backup) = 1 giờ</td></tr>
<tr><td><b>Tay nhanh hơn máy: 30 giây – 1 giờ – 12 giờ</b></td><td>RTO: tự bấm failover 30 giây; để failover group tự lo 1 giờ; khôi phục geo-restore 12 giờ. Auto-failover còn chờ ít nhất 1 giờ mới kích hoạt</td></tr>
<tr><td><b>Bốn số 9 là chuẩn, thêm zone được số 5</b></td><td>99,99% cho SQL Database và MI; 99,995% khi Business Critical/Premium zone-redundant; Hyperscale tụt về 99,9% (0 replica) / 99,95% (1 replica)</td></tr>
<tr><td><b>Set thì 95, Zone thì 99</b></td><td>VM: 99,95% khi ≥ 2 instance trong một availability set; 99,99% khi ≥ 2 availability zone</td></tr>
<tr><td><b>Đĩa lên giá thì lên số: 95 – 99,5 – 99,9</b></td><td>Standard HDD – Standard SSD – Premium/Ultra</td></tr>
<tr><td><b>Tuần, nửa ngày, mấy phút</b></td><td>Backup tự động: full hằng tuần, differential 12–24 giờ, log 5–10 phút</td></tr>
<tr><td><b>Bảy – ba lăm – mười năm</b></td><td>PITR mặc định 7 ngày, chỉnh được 1–35 ngày, LTR tới 10 năm (và chờ tới 7 ngày mới thấy bản LTR đầu tiên)</td></tr>
<tr><td><b>Nửa phút hoặc mười vạn</b></td><td>Ledger đóng một block sau 30 giây hoặc 100.000 giao dịch</td></tr>
<tr><td><b>Quét 20 giây, dọn mỗi giờ</b></td><td>CDC trên Azure SQL Database (không đổi được). Retention: CT 2 ngày, CDC 3 ngày</td></tr>
<tr><td><b>Đầy 90 thì dọn về 80</b></td><td>Size-based cleanup của Query Store; chạm giới hạn thì chuyển read-only với readonly_reason = 65536</td></tr>
<tr><td><b>5 nhỏ hơn 8 như database nhỏ hơn instance</b></td><td><code>SERVERPROPERTY('EngineEdition')</code>: 5 = SQL Database, 8 = Managed Instance, nhỏ hơn 5 = on-prem/VM</td></tr>
<tr><td><b>MI mười hai tháng</b></td><td>tempdb của MI luôn 12 file bất kể vCore; SQL Database 1 file/vCore (tối đa 32, chỉ serverless); VM 1 file/core tối đa 8</td></tr>
<tr><td><b>Mười lăm chữ, cổng bốn con số, probe năm chữ số</b></td><td>Listener: tên ≤ 15 ký tự, port 1433, probe port 59999</td></tr>
<tr><td><b>Phiếu phải lẻ, tối thiểu ba</b></td><td>Quorum WSFC; cluster hai node chạy được không cần witness nhưng vẫn nên có</td></tr>
<tr><td><b>Witness nhẹ nhất, rẻ nhất, đi cổng web</b></td><td>Cloud witness: ~1 MB, General Purpose + Standard + locally redundant, port 443, cần Windows Server 2016+</td></tr>
<tr><td><b>Bốn nghìn chữ một bản ghi</b></td><td>Mỗi bản ghi SQL Audit tối đa 4.000 ký tự</td></tr>
<tr><td><b>Gần hai trăm GB một vệt</b></td><td>Backup stripe (blob) của MI tối đa 195 GB — cần hơn thì thêm file</td></tr>
<tr><td><b>Một ngày là hạn</b></td><td>MI copy/move không hoàn tất trong 24 giờ thì bị hủy và database đích bị drop</td></tr>
<tr><td><b>Tháng rưỡi lịch sử job</b></td><td>Elastic Job history giữ 45 ngày trong <code>jobs.job_executions</code></td></tr>
<tr><td><b>Năm phút mới ngấm, mười phút thì chết</b></td><td>Đổi thành viên server role: tới 5 phút (rút ngắn bằng <code>DBCC FLUSHAUTHCACHE</code>). Mất CMK: database thành Inaccessible sau ~10 phút</td></tr>
<tr><td><b>Pool đắt hơn một nửa, Business Critical đắt gần ba lần</b></td><td>Đơn giá eDTU pool = 1,5× DTU single database; Business Critical ~2,7× vì có 3 replica</td></tr>
<tr><td><b>Mười phần trăm rồi ba mươi</b></td><td>REORGANIZE / REBUILD index. Columnstore: reorganize khi &gt; 20% dòng đã xoá. AUTO_SHRINK kích hoạt khi &gt; 25% file trống</td></tr>
</table></div>
</section>

<section id="t705">
<h3>Gom nhóm để bớt phải đếm</h3>
<p class="lead">Danh sách dài thì đừng nhớ từng phần tử — nhớ <b>cấu trúc nhóm</b>, số lượng tự đúng.</p>
<div class="tw"><table class="cmp">
<tr><th>Danh sách</th><th>Nhóm lại thành</th></tr>
<tr><td>7 role <code>##MS_…##</code></td><td><b>2 – 2 – 3</b>: 2 cái State (ServerStateReader, ServerStateManager), 2 cái Definition (DefinitionReader, SecurityDefinitionReader), 3 cái quản lý (DatabaseConnector, DatabaseManager, LoginManager)</td></tr>
<tr><td>9 fixed server role cổ điển</td><td><b>7 ông “admin” + 1 ông tạo database + 1 ông public</b>: sys, server, security, process, setup, bulk, disk — rồi dbcreator và public</td></tr>
<tr><td>Fixed database role</td><td><b>1 chủ + 3 admin + 1 backup + 2 cặp</b>: db_owner; securityadmin/accessadmin/ddladmin; backupoperator; datareader–datawriter (mỗi cái có bản deny)</td></tr>
<tr><td>Các tính năng Intelligent Query Processing<a class="nl" href="/dp-300/notes#s66">note 66</a></td><td><b>Đoán lại – Viết lại – Học lại – Đếm xấp xỉ</b>. Đoán lại (level 140): adaptive join, interleaved TVF, memory grant feedback. Viết lại (level 150): scalar UDF inlining, table variable deferred compilation, batch mode on rowstore. Học lại (level 160, cần Query Store): PSP optimization, CE feedback, DOP feedback, memory grant persistence và percentile, optimized plan forcing. Đếm xấp xỉ: APPROX_COUNT_DISTINCT và APPROX_PERCENTILE, mọi level</td></tr>
<tr><td>Tùy chọn media của BACKUP</td><td><b>Mặc định đều là chữ NO</b>: NOINIT (append, không ghi đè), NOSKIP (kiểm ngày hết hạn), NOFORMAT (không ghi header mới), NO_CHECKSUM — cùng tinh thần với STOP_ON_ERROR: an toàn, đừng phá media. FORMAT là cái nguy hiểm nhất và ngầm định luôn SKIP</td></tr>
<tr><td>3 kiểu join</td><td>Theo kích thước input: <b>nhỏ–lớn–có index</b> = Nested Loops; <b>hai bên đều lớn và đã sắp xếp</b> = Merge; <b>lớn, chưa sắp, không index</b> = Hash</td></tr>
<tr><td>Kiểu mask của Dynamic Data Masking</td><td><b>Mặc định – thẻ – email – số – tự đặt</b>: default(), credit card, email(), random(a,b), partial(x,"đệm",y)</td></tr>
<tr><td>@freq_type của lịch SQL Agent</td><td><b>Nhân đôi từ 1, mốc phải nhớ là 4 = hằng ngày</b>: 1 once, 4 daily, 8 weekly, 16 monthly theo ngày, 32 monthly theo thứ, 64 khi Agent khởi động (MI không hỗ trợ), 128 khi CPU rảnh</td></tr>
<tr><td>@notification_method</td><td><b>1 – 2 – 4, chỉ cái đầu còn sống</b>: Email, Pager, Net Send (hai cái sau đã deprecated)</td></tr>
<tr><td>Severity của alert Azure Monitor</td><td><b>0 là cháy nhà, 4 là lải nhải</b>: 0 Critical → 4 Verbose</td></tr>
<tr><td>3 loại quorum witness</td><td><b>Mây – Đĩa – Chia sẻ file</b>, và thứ tự đó cũng là thứ tự ưu tiên: cloud trước, file share chỉ khi hai cái kia không dùng được</td></tr>
</table></div>
</section>

<section id="t706">
<h3>Cách chạy bộ mẹo này trong một buổi</h3>
<div class="tw"><table class="cmp">
<tr><th>Lượt</th><th>Làm gì</th><th>Mất bao lâu</th></tr>
<tr><td>1 · Khung</td><td>Đọc “Luật ba bậc” và “Cặp đối lập”. Đây là hai mục trả lời được nhiều câu nhất trên một đơn vị thời gian</td><td>~10 phút</td></tr>
<tr><td>2 · Tự đọc lại</td><td>Gõ một chủ đề vào ô tìm kiếm (ví dụ <code>backup</code>) để chỉ còn dòng liên quan, che cột phải và tự nói ra nội dung</td><td>~15 phút / chủ đề</td></tr>
<tr><td>3 · Ra đề</td><td>Sang trang luyện tập, làm theo từng dạng. Câu nào sai thì mở pill <b>note</b> ở đúng mục bảng tương ứng, đọc phần giải thích đầy đủ rồi quay lại</td><td>Còn lại</td></tr>
<tr><td>Sát ngày thi</td><td>Chỉ đọc ba mục: <b>Con số hay bị hỏi</b>, <b>KHÔNG làm được</b>, <b>Cặp đối lập</b>. Ba mục này gần như là toàn bộ phần dễ mất điểm vì nhớ lẫn</td><td>~20 phút</td></tr>
</table></div>
</section>
`,lt={class:"tables-dp"},gt={class:"layout"},bt={class:"sub"},ut={class:"search"},pt={key:0,class:"cnt"},mt={key:1,class:"cnt"},vt={key:2,class:"toc-nav"},yt={key:0},St=["href","onClick"],Et={class:"topbar"},At={key:0,class:"nohit"},_t=rt({__name:"Dp300TablesPage",setup(Ct){st("dp300","notes");const Q=ht(),C=p(),b=p(),y=p(matchMedia("(max-width:960px)").matches),B=(()=>{const n=new DOMParser().parseFromString(P,"text/html"),t=[];return n.body.childNodes.forEach(r=>{if(r instanceof HTMLElement){if(r.tagName==="H2")t.push({id:r.id,title:r.textContent||"",items:[]});else if(r.tagName==="SECTION"&&t.length){const d=r.querySelector("h3");if(!d)return;const e=d.cloneNode(!0);e.querySelectorAll(".nl, .ql").forEach(i=>i.remove()),t[t.length-1].items.push({id:r.id,title:(e.textContent||"").trim()})}}}),t})(),D=B.reduce((n,t)=>n+t.items.length,0),X=(P.match(/<table class="cmp"/g)||[]).length,M=p(""),m=p(null),k=p(0),L=p(0),w=Y(()=>m.value!==null),K=Y(()=>{var n;return((n=m.value)==null?void 0:n.size)??D}),G=n=>!m.value||m.value.has(n);let v=[],S=null,T=null,R;const I=n=>(n||"").toLowerCase();function J(n){const t=n.cloneNode(!0);return t.querySelectorAll(".nl, .ql").forEach(r=>r.remove()),t.textContent}function Z(){v=[...C.value.querySelectorAll("section")].map(n=>{const t=[...n.querySelectorAll("h3, p.lead")],r=[...n.querySelectorAll(".tw")].map(d=>({tw:d,rows:[...d.querySelectorAll("tr")].map(e=>({tr:e,text:I(e.textContent),head:!!e.querySelector("th")}))}));return{el:n,id:n.id,head:t.map(d=>I(d.querySelector(".nl, .ql")?J(d):d.textContent)).join(" "),heads:t,tbls:r,rows:r.flatMap(d=>d.rows)}}),L.value=v.reduce((n,t)=>n+t.rows.filter(r=>!r.head).length,0),k.value=L.value}function $(n){n.querySelectorAll("mark").forEach(t=>t.replaceWith(document.createTextNode(t.textContent||""))),n.normalize()}function H(n,t){const r=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),d=[];let e;for(;e=r.nextNode();)I(e.nodeValue).includes(t)&&d.push(e);d.forEach(i=>{const u=document.createDocumentFragment(),c=i.nodeValue||"",E=c.toLowerCase();let h=0,g;for(;(g=E.indexOf(t,h))>-1;){u.appendChild(document.createTextNode(c.slice(h,g)));const U=document.createElement("mark");U.textContent=c.slice(g,g+t.length),u.appendChild(U),h=g+t.length}u.appendChild(document.createTextNode(c.slice(h))),i.replaceWith(u)})}function x(){const n=b.value.value.trim().toLowerCase();if(v.forEach(d=>{$(d.el),d.rows.forEach(e=>e.tr.classList.remove("hit"))}),!n){v.forEach(d=>{d.el.classList.remove("hidden"),d.tbls.forEach(e=>e.tw.classList.remove("hidden")),d.rows.forEach(e=>e.tr.classList.remove("hidden"))}),C.value.querySelectorAll("h2.dom").forEach(d=>d.classList.remove("hidden")),m.value=null,k.value=L.value;return}C.value.querySelectorAll("h2.dom").forEach(d=>d.classList.add("hidden"));const t=new Set;let r=0;v.forEach(d=>{const e=d.head.includes(n);let i=0;d.tbls.forEach(c=>{let E=0;c.rows.forEach(h=>{const g=e||h.text.includes(n);h.tr.classList.toggle("hidden",!(g||h.head)),g&&!h.head&&(E++,e||h.tr.classList.add("hit"))}),c.tw.classList.toggle("hidden",E===0),i+=E});const u=e||i>0;d.el.classList.toggle("hidden",!u),u&&(t.add(d.id),r+=i,d.heads.forEach(c=>H(c,n)),d.rows.forEach(c=>{c.tr.classList.contains("hidden")||H(c.tr,n)}))}),m.value=t,k.value=r}function tt(){clearTimeout(R),R=setTimeout(x,120)}function nt(){b.value.value="",x()}function V(n){n.key==="/"&&document.activeElement!==b.value&&(n.preventDefault(),b.value.focus()),n.key==="Escape"&&document.activeElement===b.value&&(nt(),b.value.blur())}function q(n){const t=document.getElementById(n);t&&(T==null||T.classList.remove("flash"),t.scrollIntoView({block:"start"}),t.offsetWidth,t.classList.add("flash"),T=t,M.value=n,matchMedia("(max-width:960px)").matches&&(y.value=!0))}function dt(n,t){n.preventDefault(),Q.replace({hash:`#${t}`}),q(t)}function et(n){var d,e;const t=(e=(d=n.target).closest)==null?void 0:e.call(d,"a");if(!t)return;const r=t.getAttribute("href")||"";r.startsWith("/")&&t.getAttribute("target")!=="_blank"&&(n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.button!==0||(n.preventDefault(),Q.push(r)))}return at(()=>{Z(),typeof IntersectionObserver<"u"&&(S=new IntersectionObserver(n=>n.forEach(t=>{t.isIntersecting&&(M.value=t.target.id)}),{rootMargin:"0px 0px -75% 0px"}),v.forEach(n=>S.observe(n.el))),location.hash&&q(decodeURIComponent(location.hash.slice(1))),document.addEventListener("keydown",V)}),ct(()=>{document.removeEventListener("keydown",V),S==null||S.disconnect(),clearTimeout(R)}),(n,t)=>{const r=it("router-link");return s(),o("div",lt,[a("div",gt,[a("aside",null,[t[2]||(t[2]=a("h1",null,"DP-300 · Bảng ôn nhanh",-1)),a("div",bt,l(A(D))+" mục · "+l(A(X))+" bảng, tổng hợp từ tài liệu DP-300",1),a("div",ut,[a("input",{ref_key:"qEl",ref:b,type:"search",placeholder:"Tìm trong bảng… (/)",autocomplete:"off",onInput:tt},null,544)]),w.value?(s(),o("p",pt,l(K.value)+"/"+l(A(D))+" mục · "+l(k.value)+"/"+l(L.value)+" dòng ",1)):(s(),o("p",mt,"Gõ “/” để tìm — kết quả lọc tới từng dòng của bảng.")),y.value?f("",!0):(s(),o("nav",vt,[(s(!0),o(N,null,z(A(B),d=>(s(),o(N,{key:d.id},[d.items.some(e=>G(e.id))?(s(),o("h4",yt,l(d.title),1)):f("",!0),a("ol",null,[(s(!0),o(N,null,z(d.items,e=>(s(),o("li",{key:e.id,class:W({hidden:!G(e.id)})},[a("a",{href:"#"+e.id,class:W({on:M.value===e.id}),onClick:i=>dt(i,e.id)},l(e.title),11,St)],2))),128))])],64))),128))]))]),a("main",null,[a("div",Et,[_(r,{to:"/dp-300/notes"},{default:O(()=>[...t[3]||(t[3]=[j("← Tài liệu",-1)])]),_:1}),_(r,{to:"/dp-300/practice"},{default:O(()=>[...t[4]||(t[4]=[j("Luyện tập",-1)])]),_:1}),t[6]||(t[6]=a("span",{class:"spacer"},null,-1)),a("button",{onClick:t[0]||(t[0]=d=>y.value=!y.value)},l(y.value?"Mở mục lục":"Thu gọn mục lục"),1),_(ot),_(r,{to:"/",style:{"text-decoration":"none"}},{default:O(()=>[...t[5]||(t[5]=[a("button",null,"🏠",-1)])]),_:1})]),t[7]||(t[7]=a("p",{class:"intro"}," Toàn bộ kiến thức trong tài liệu, viết lại thành bảng so sánh để ôn nhanh. Mỗi mục có link “note” dẫn sang phần giải thích đầy đủ. Trang này không nằm trong tài liệu và không sửa gì ở đó. ",-1)),t[1]||(F(-1,!0),(t[1]=a("div",{ref_key:"contentEl",ref:C,innerHTML:A(P),onClick:et},null,8,["innerHTML"])).cacheIndex=1,F(1),t[1]),w.value&&K.value===0?(s(),o("div",At,"Không tìm thấy dòng nào khớp.")):f("",!0)])])])}}});export{_t as default};
