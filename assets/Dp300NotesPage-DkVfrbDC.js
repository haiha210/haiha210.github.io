const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/packs-NRGtmI-h.js","assets/index-Dv0GMX4F.js","assets/index-CA1nwlEg.css"])))=>i.map(i=>d[i]);
import{d as J,P as Z,j as c,s as aa,_ as na,x as sa,c as B,a as l,O as f,b as d,h as v,t as D,f as ea,g as E,w as I,r as la,m as ia,o as z}from"./index-Dv0GMX4F.js";import{_ as ta}from"./ThemeToggle.vue_vue_type_script_setup_true_lang-D6wJg7If.js";import{u as ca}from"./useStudyClock-BuN8CzX7.js";const pa=`<h2 class="dom" id="dom1">1 · Plan and implement data platform resources</h2>
<section id="s-sec1"><h3><span class="n"></span> <span class="lang-en">Domain 1 at a glance — platform and migration summary tables</span><span class="lang-vi">Tổng hợp phạm vi 1 — bảng ôn nhanh về nền tảng và di trú</span><a class="anch" href="#s-sec1" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">A synthesis of sections 1–22a for revision; the platform comparison tables (PaaS vs IaaS, features, scale, HA/DR, security) already live in sections 4–6 just below.</span><span class="lang-vi">Tổng hợp các mục 1–22a để ôn nhanh; các bảng so sánh nền tảng (PaaS vs IaaS, tính năng, khả năng mở rộng, HA/DR, bảo mật) đã có sẵn ở các mục 4–6 ngay bên dưới.</span></li>
</ul>
<ul><li><span class="lang-en">Purchasing model and shape of the compute:</span><span class="lang-vi">Mô hình mua và hình thái compute:</span></li>
</ul>
<div class="tw"><table class="cmp"><tr><th><span class="lang-en">Option</span><span class="lang-vi">Lựa chọn</span></th><th><span class="lang-en">Choose it when</span><span class="lang-vi">Chọn khi</span></th><th><span class="lang-en">Remember</span><span class="lang-vi">Cần nhớ</span></th></tr><tr><td><span class="lang-en">DTU model</span><span class="lang-vi">Mô hình DTU</span></td><td><span class="lang-en">You want one pre-packaged bundle of compute, storage and IO</span><span class="lang-vi">Muốn một gói dựng sẵn gồm compute, storage và IO</span></td><td><span class="lang-en">Simple but rigid; the eDTU unit price for a pool is 1.5× the DTU price of a single database</span><span class="lang-vi">Đơn giản nhưng cứng nhắc; đơn giá eDTU của pool bằng 1,5 lần đơn giá DTU của single database</span></td></tr><tr><td><span class="lang-en">vCore model</span><span class="lang-vi">Mô hình vCore</span></td><td><span class="lang-en">You need to size vCores, memory and storage separately, and to see what you pay for</span><span class="lang-vi">Cần chỉnh riêng vCore, bộ nhớ và storage, và muốn minh bạch chi phí</span></td><td><span class="lang-en">Works with Azure Hybrid Benefit and reserved capacity; up to 80 vCores on Gen5</span><span class="lang-vi">Dùng được Azure Hybrid Benefit và reserved capacity; tối đa 80 vCore trên Gen5</span></td></tr><tr><td><span class="lang-en">Single database</span><span class="lang-vi">Single database</span></td><td><span class="lang-en">One isolated, portable database</span><span class="lang-vi">Một database độc lập, có thể mang đi</span></td><td><span class="lang-en">Scaled manually, never automatically; can be moved in and out of an elastic pool</span><span class="lang-vi">Scale thủ công, không tự động; chuyển ra/vào elastic pool được</span></td></tr><tr><td><span class="lang-en">Elastic pool</span><span class="lang-vi">Elastic pool</span></td><td><span class="lang-en">Many databases whose peaks do not happen at the same time</span><span class="lang-vi">Nhiều database mà cao điểm không rơi cùng lúc</span></td><td><span class="lang-en">They share the pool's resources, which can scale or autoscale</span><span class="lang-vi">Chúng dùng chung tài nguyên của pool, pool scale hoặc autoscale được</span></td></tr><tr><td><span class="lang-en">Provisioned compute</span><span class="lang-vi">Compute provisioned</span></td><td><span class="lang-en">Steady, predictable usage</span><span class="lang-vi">Mức dùng đều đặn, dự đoán được</span></td><td><span class="lang-en">You pay for what is provisioned, used or not</span><span class="lang-vi">Trả tiền cho phần đã cấp, dùng hay không cũng vậy</span></td></tr><tr><td><span class="lang-en">Serverless compute</span><span class="lang-vi">Compute serverless</span></td><td><span class="lang-en">On-and-off usage with a low average</span><span class="lang-vi">Dùng ngắt quãng, trung bình thấp</span></td><td><span class="lang-en">Pauses and resumes automatically; while paused you only pay for storage</span><span class="lang-vi">Tự pause và resume; lúc pause chỉ trả tiền storage</span></td></tr></table></div>
<ul><li><span class="lang-en">Service tiers — the distinguishing detail is usually latency or the number of replicas:</span><span class="lang-vi">Các service tier — chi tiết để phân biệt thường là độ trễ hoặc số replica:</span></li>
</ul>
<div class="tw"><table class="cmp"><tr><th><span class="lang-en">Tier</span><span class="lang-vi">Tầng</span></th><th><span class="lang-en">For</span><span class="lang-vi">Dành cho</span></th><th><span class="lang-en">Give-away detail in a question</span><span class="lang-vi">Chi tiết nhận dạng trong đề</span></th></tr><tr><td><span class="lang-en">General Purpose</span><span class="lang-vi">General Purpose</span></td><td><span class="lang-en">Most business workloads</span><span class="lang-vi">Phần lớn workload nghiệp vụ</span></td><td><span class="lang-en">Storage latency 5–10 ms, about the same as SQL Server on a VM</span><span class="lang-vi">Độ trễ lưu trữ 5–10 ms, xấp xỉ SQL Server trên VM</span></td></tr><tr><td><span class="lang-en">Business Critical</span><span class="lang-vi">Business Critical</span></td><td><span class="lang-en">Low-latency IO, many updates, long transactions</span><span class="lang-vi">IO độ trễ thấp, nhiều update, giao dịch dài</span></td><td><span class="lang-en">1–2 ms IO, three replicas (~2.7× the price), a free read-only secondary, better corruption protection</span><span class="lang-vi">IO 1–2 ms, ba replica (~2,7 lần giá), một secondary read-only miễn phí, chống hỏng dữ liệu tốt hơn</span></td></tr><tr><td><span class="lang-en">Hyperscale</span><span class="lang-vi">Hyperscale</span></td><td><span class="lang-en">Very large databases with on-demand storage scaling</span><span class="lang-vi">Database rất lớn, cần scale storage theo nhu cầu</span></td><td><span class="lang-en">Up to 100 TB; SLA 99.9% with zero replicas, 99.95% with one</span><span class="lang-vi">Tới 100 TB; SLA 99,9% khi không có replica, 99,95% khi có một replica</span></td></tr><tr><td><span class="lang-en">Managed Instance: General Purpose / Business Critical</span><span class="lang-vi">Managed Instance: General Purpose / Business Critical</span></td><td><span class="lang-en">MI only has these two</span><span class="lang-vi">MI chỉ có hai tầng này</span></td><td><span class="lang-en">Up to 80 vCores, 400 GB memory, 100 databases, 16 TB</span><span class="lang-vi">Tối đa 80 vCore, 400 GB bộ nhớ, 100 database, 16 TB</span></td></tr></table></div>
<ul><li><span class="lang-en">Picking the migration tool — read the question for the source, the target and the downtime allowed:</span><span class="lang-vi">Chọn công cụ di trú — đọc đề để biết nguồn, đích và mức downtime cho phép:</span></li>
</ul>
<div class="tw"><table class="cmp"><tr><th><span class="lang-en">Need</span><span class="lang-vi">Nhu cầu</span></th><th><span class="lang-en">Tool</span><span class="lang-vi">Công cụ</span></th><th><span class="lang-en">Remember</span><span class="lang-vi">Cần nhớ</span></th></tr><tr><td><span class="lang-en">Assess the whole estate, lift and shift to a VM</span><span class="lang-vi">Đánh giá toàn bộ data estate, lift-and-shift lên VM</span></td><td><span class="lang-en"><a href="#s15">Azure Migrate</a></span><span class="lang-vi"><a href="#s15">Azure Migrate</a></span></td><td><span class="lang-en">Gives deployment recommendations, target sizing and a monthly cost estimate</span><span class="lang-vi">Cho khuyến nghị đích, kích cỡ và ước tính chi phí hằng tháng</span></td></tr><tr><td><span class="lang-en">Source is not SQL Server (Access, DB2, MySQL, Oracle, SAP ASE)</span><span class="lang-vi">Nguồn không phải SQL Server (Access, DB2, MySQL, Oracle, SAP ASE)</span></td><td><span class="lang-en"><a href="#s15">SQL Server Migration Assistant (SSMA)</a></span><span class="lang-vi"><a href="#s15">SQL Server Migration Assistant (SSMA)</a></span></td><td><span class="lang-en">Converts the objects, then moves the data</span><span class="lang-vi">Chuyển đổi object rồi mới chuyển dữ liệu</span></td></tr><tr><td><span class="lang-en">Compare the workload on source and target first</span><span class="lang-vi">So sánh workload nguồn và đích trước khi chuyển</span></td><td><span class="lang-en"><a href="#s15">Database Experimentation Assistant (DEA)</a></span><span class="lang-vi"><a href="#s15">Database Experimentation Assistant (DEA)</a></span></td><td><span class="lang-en">Captures a workload and finds compatibility issues</span><span class="lang-vi">Bắt lại workload và tìm vấn đề tương thích</span></td></tr><tr><td><span class="lang-en">Do the migration into SQL Database or MI</span><span class="lang-vi">Thực hiện di trú vào SQL Database hoặc MI</span></td><td><span class="lang-en"><a href="#s16-2">Azure Database Migration Service (DMS)</a></span><span class="lang-vi"><a href="#s16-2">Azure Database Migration Service (DMS)</a></span></td><td><span class="lang-en">Online (minimal downtime, Premium tier) or offline. DMS takes no backups itself — you supply the full and log backups, and it never uses differentials</span><span class="lang-vi">Online (downtime tối thiểu, cần tier Premium) hoặc offline. DMS không tự backup — bạn cung cấp full và log backup, và nó không dùng differential</span></td></tr><tr><td><span class="lang-en">Assess compatibility (what DMA used to do)</span><span class="lang-vi">Đánh giá tương thích (việc mà DMA từng làm)</span></td><td><span class="lang-en"><a href="#s16-2">Azure Migrate, SQL Server migration in Azure Arc, or VS Code + MSSQL extension</a></span><span class="lang-vi"><a href="#s16-2">Azure Migrate, SQL Server migration in Azure Arc, hoặc VS Code + MSSQL extension</a></span></td><td><span class="lang-en">Data Migration Assistant was retired on 16 July 2025</span><span class="lang-vi">Data Migration Assistant đã khai tử ngày 16/07/2025</span></td></tr><tr><td><span class="lang-en">One-off copy of schema and data</span><span class="lang-vi">Sao chép schema và dữ liệu một lần</span></td><td><span class="lang-en"><a href="#s22">BACPAC / data-tier application</a></span><span class="lang-vi"><a href="#s22">BACPAC / data-tier application</a></span></td><td><span class="lang-en">The Import/Export Data wizard copies data only — no views, procedures or functions</span><span class="lang-vi">Wizard Import/Export Data chỉ chép dữ liệu — không mang view, procedure hay function</span></td></tr><tr><td><span class="lang-en">Keep several databases in sync</span><span class="lang-vi">Giữ nhiều database đồng bộ với nhau</span></td><td><span class="lang-en"><a href="#s20">SQL Data Sync</a></span><span class="lang-vi"><a href="#s20">SQL Data Sync</a></span></td><td><span class="lang-en">Hub must be an Azure SQL Database, tables need a primary key, and it does not work with Managed Instance; the sync metadata database must be empty and in the hub's region</span><span class="lang-vi">Hub phải là Azure SQL Database, bảng phải có primary key, và KHÔNG dùng được với Managed Instance; sync metadata database phải rỗng và cùng region với hub</span></td></tr><tr><td><span class="lang-en">Move databases between Managed Instances</span><span class="lang-vi">Chuyển database giữa các Managed Instance</span></td><td><span class="lang-en"><a href="#s22a">MI database copy / move</a></span><span class="lang-vi"><a href="#s22a">MI database copy / move</a></span></td><td><span class="lang-en">No data loss; with copy the original stays online and the two stop syncing afterwards</span><span class="lang-vi">Không mất dữ liệu; nếu copy thì bản gốc vẫn online và sau đó hai bên không đồng bộ nữa</span></td></tr></table></div>
<ul><li><span class="lang-en">Partitioning and sharding:</span><span class="lang-vi">Phân vùng và sharding:</span></li>
</ul>
<div class="tw"><table class="cmp"><tr><th><span class="lang-en">Technique</span><span class="lang-vi">Kỹ thuật</span></th><th><span class="lang-en">Split by</span><span class="lang-vi">Chia theo</span></th><th><span class="lang-en">Remember</span><span class="lang-vi">Cần nhớ</span></th></tr><tr><td><span class="lang-en"><a href="#s7">Horizontal (sharding)</a></span><span class="lang-vi"><a href="#s7">Ngang (sharding)</a></span></td><td><span class="lang-en">Rows — every partition has the same schema</span><span class="lang-vi">Dòng — mọi partition cùng schema</span></td><td><span class="lang-en">Replicate small, static data into every shard to avoid cross-partition queries</span><span class="lang-vi">Nhân bản dữ liệu nhỏ và ít đổi vào mọi shard để tránh truy vấn xuyên partition</span></td></tr><tr><td><span class="lang-en"><a href="#s7">Vertical</a></span><span class="lang-vi"><a href="#s7">Dọc</a></span></td><td><span class="lang-en">Columns</span><span class="lang-vi">Cột</span></td><td><span class="lang-en">Split off rarely used or sensitive columns; every partition must still join back, e.g. on the same primary key</span><span class="lang-vi">Tách các cột ít dùng hoặc nhạy cảm; các partition vẫn phải join lại được, ví dụ qua cùng primary key</span></td></tr><tr><td><span class="lang-en"><a href="#s7">Functional</a></span><span class="lang-vi"><a href="#s7">Theo chức năng</a></span></td><td><span class="lang-en">Whole tables, by business function</span><span class="lang-vi">Cả bảng, theo chức năng nghiệp vụ</span></td><td><span class="lang-en">For example store data in one partition, employee data in another</span><span class="lang-vi">Ví dụ dữ liệu cửa hàng một nơi, dữ liệu nhân viên một nơi</span></td></tr><tr><td><span class="lang-en"><a href="#s8">Lookup strategy</a></span><span class="lang-vi"><a href="#s8">Chiến lược lookup</a></span></td><td><span class="lang-en">A shard key plus a map of where the data lives</span><span class="lang-vi">Shard key cộng một bản đồ cho biết dữ liệu nằm đâu</span></td><td><span class="lang-en">Most control, most overhead</span><span class="lang-vi">Kiểm soát tốt nhất, tốn overhead nhất</span></td></tr><tr><td><span class="lang-en"><a href="#s8">Range strategy</a></span><span class="lang-vi"><a href="#s8">Chiến lược range</a></span></td><td><span class="lang-en">Sequential ranges, e.g. one shard per month</span><span class="lang-vi">Khoảng liên tiếp, ví dụ mỗi tháng một shard</span></td><td><span class="lang-en">Fetches neighbouring rows in one go, but balances poorly and is hard to rebalance</span><span class="lang-vi">Lấy các dòng liền kề trong một lần, nhưng dễ lệch tải và khó rebalance</span></td></tr><tr><td><span class="lang-en"><a href="#s8">Hash strategy</a></span><span class="lang-vi"><a href="#s8">Chiến lược hash</a></span></td><td><span class="lang-en">A hash of the key</span><span class="lang-vi">Băm của key</span></td><td><span class="lang-en">Even distribution, fewer hotspots, but costs CPU and is hard to rebalance</span><span class="lang-vi">Phân bố đều, ít hotspot, nhưng tốn CPU và khó rebalance</span></td></tr></table></div>
<ul><li><span class="lang-en">Compression, and where to run SQL outside a plain Azure SQL deployment:</span><span class="lang-vi">Nén dữ liệu, và nơi chạy SQL ngoài các lựa chọn Azure SQL thông thường:</span></li>
</ul>
<div class="tw"><table class="cmp"><tr><th><span class="lang-en">Level</span><span class="lang-vi">Mức</span></th><th><span class="lang-en">What it does</span><span class="lang-vi">Làm gì</span></th><th><span class="lang-en">Best for</span><span class="lang-vi">Lợi nhất với</span></th></tr><tr><td><span class="lang-en"><a href="#s13">Row compression</a></span><span class="lang-vi"><a href="#s13">Nén row</a></span></td><td><span class="lang-en">Strips the wasted bytes out of each value</span><span class="lang-vi">Bỏ các byte thừa trong từng giá trị</span></td><td><span class="lang-en">Numeric types (tinyint already uses 1 byte), datetime/datetime2/datetimeoffset, char/nchar — up to 50% in English, German, Hindi and Turkish, ~40% Vietnamese, 15% Japanese; varchar/nvarchar gain little</span><span class="lang-vi">Kiểu số (tinyint vốn đã 1 byte), datetime/datetime2/datetimeoffset, char/nchar — tới 50% với tiếng Anh, Đức, Hindi, Thổ; ~40% tiếng Việt; 15% tiếng Nhật; varchar/nvarchar gần như không lợi</span></td></tr><tr><td><span class="lang-en"><a href="#s13">Page compression</a></span><span class="lang-vi"><a href="#s13">Nén page</a></span></td><td><span class="lang-en">Row, then prefix, then dictionary compression — in that order</span><span class="lang-vi">Nén row, rồi prefix, rồi dictionary — đúng thứ tự đó</span></td><td><span class="lang-en">Saves more than row compression but costs more CPU; a page is 8,192 bytes</span><span class="lang-vi">Tiết kiệm hơn nén row nhưng tốn CPU hơn; một page là 8.192 byte</span></td></tr><tr><td><span class="lang-en"><a href="#s6a">Azure Arc-enabled SQL Server</a></span><span class="lang-vi"><a href="#s6a">Azure Arc-enabled SQL Server</a></span></td><td><span class="lang-en">SQL Server instances outside Azure: on-premises, other clouds</span><span class="lang-vi">Instance SQL Server ngoài Azure: on-premises, đám mây khác</span></td><td><span class="lang-en">Inventory, best-practices assessment, and Entra ID authentication for SQL Server 2022 and later</span><span class="lang-vi">Kiểm kê, đánh giá best practice, và xác thực Entra ID cho SQL Server 2022 trở lên</span></td></tr><tr><td><span class="lang-en"><a href="#s6b">Azure SQL Database in Microsoft Fabric</a></span><span class="lang-vi"><a href="#s6b">Azure SQL Database trong Microsoft Fabric</a></span></td><td><span class="lang-en">You already work in Fabric with lakehouses, warehouses and Power BI</span><span class="lang-vi">Bạn vốn đã làm việc trong Fabric với lakehouse, warehouse và Power BI</span></td><td><span class="lang-en">SaaS rather than PaaS, no configuration, mirroring already set up, Entra ID authorisation, billed through the Fabric capacity</span><span class="lang-vi">Là SaaS chứ không phải PaaS, không cần cấu hình, mirroring đã bật sẵn, phân quyền bằng Entra ID, tính tiền qua Fabric capacity</span></td></tr></table></div>
</section>
<section id="s1"><h3><span class="n">1.</span> <span class="lang-en">deploy database offerings on selected platforms</span><span class="lang-vi">triển khai database trên các nền tảng được chọn</span><a class="anch" href="#s1" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">SQL Server Virtual Machine</span><span class="lang-vi">SQL Server Virtual Machine</span></li>
<ul><li><span class="lang-en">Go to Azure SQL</span><span class="lang-vi">Vào Azure SQL</span></li>
<ul><li><span class="lang-en">This is not a single service, but a group of SQL services.</span><span class="lang-vi">Đây không phải một dịch vụ đơn lẻ mà là một nhóm các dịch vụ SQL.</span></li>
<ul><li><span class="lang-en">+Create, SQL database.</span><span class="lang-vi">+Create, SQL database.</span></li>
</ul></ul><li><span class="lang-en">Server name needs to be unique throughout Azure.</span><span class="lang-vi">Tên server phải là duy nhất trên toàn Azure.</span></li>
<li><span class="lang-en">Admin account password must be at least 12 characters long.</span><span class="lang-vi">Mật khẩu tài khoản admin phải dài ít nhất 12 ký tự.</span></li>
<li><span class="lang-en">In additional settings, add existing data if required, either from a backup or sample data.</span><span class="lang-vi">Trong additional settings, thêm dữ liệu sẵn có nếu cần — từ một bản backup hoặc dữ liệu mẫu.</span></li>
<li><span class="lang-en">You should use Managed Service Accounts (MSA) for a single computer running a service.</span><span class="lang-vi">Nên dùng Managed Service Account (MSA) cho một máy đơn lẻ chạy service.</span></li>
<ul><li><span class="lang-en">A Group Managed Service Account (gMSA) is used for assigning the MSA to multiple servers.</span><span class="lang-vi">Group Managed Service Account (gMSA) dùng khi cần gán MSA cho nhiều server.</span></li>
</ul></ul><li><span class="lang-en">Azure SQL Managed Instance</span><span class="lang-vi">Azure SQL Managed Instance</span></li>
<ul><li><span class="lang-en">Go to Azure SQL, +Create, SQL managed instance.</span><span class="lang-vi">Vào Azure SQL, +Create, SQL managed instance.</span></li>
<li><span class="lang-en">You need:</span><span class="lang-vi">Bạn cần:</span></li>
<ul><li><span class="lang-en">Subscription and Resource group,</span><span class="lang-vi">Subscription và Resource group,</span></li>
<li><span class="lang-en">Managed instance name,</span><span class="lang-vi">Tên managed instance,</span></li>
<li><span class="lang-en">Region,</span><span class="lang-vi">Region,</span></li>
<li><span class="lang-en">Managed instance admin login and password.</span><span class="lang-vi">Login và mật khẩu admin của managed instance.</span></li>
</ul></ul><li><span class="lang-en">Azure VM with SQL Server</span><span class="lang-vi">Azure VM cài SQL Server</span></li>
<ul><li><span class="lang-en">Create a Virtual Network.</span><span class="lang-vi">Create a Virtual Network.</span></li>
<ul><li><span class="lang-en">In IP Addresses – default (subnet) – Edit subnet , add the Service Endpoint &quot;Microsoft.Sql&quot;</span><span class="lang-vi">Trong IP Addresses – default (subnet) – Edit subnet, thêm Service Endpoint &quot;Microsoft.Sql&quot;</span></li>
</ul><li><span class="lang-en">Create the Azure VM</span><span class="lang-vi">Create the Azure VM</span></li>
<ul><li><span class="lang-en">In Networking, select &quot;Private endpoint&quot;, then &quot;+Add private endpoint&quot; and select the subnet from above.</span><span class="lang-vi">Trong Networking, chọn &quot;Private endpoint&quot;, rồi &quot;+Add private endpoint&quot; và chọn subnet ở trên.</span></li>
</ul><li><span class="lang-en">When created, in &quot;Firewalls and virtual networks&quot;, click &quot;+Add client IP&quot;, and &quot;Allow Azure services and resources to access this server&quot;.</span><span class="lang-vi">Sau khi tạo xong, vào &quot;Firewalls and virtual networks&quot;, bấm &quot;+Add client IP&quot; và &quot;Allow Azure services and resources to access this server&quot;.</span></li>
</ul></ul></section>
<section id="s2"><h3><span class="n">2.</span> <span class="lang-en">Choose an automated deployment method</span><span class="lang-vi">Chọn phương thức triển khai tự động</span><a class="anch" href="#s2" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">See topics 9, 10 and 11.</span><span class="lang-vi">Xem các mục 9, 10 và 11.</span></li>
</ul></section>
<section id="s3"><h3><span class="n">3.</span> <span class="lang-en">apply patches and updates for hybrid and IaaS deployment</span><span class="lang-vi">áp dụng patch và bản cập nhật cho triển khai hybrid và IaaS</span><a class="anch" href="#s3" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">IaaS deployment means VM, a hosted infrastructure.</span><span class="lang-vi">Triển khai IaaS nghĩa là VM — hạ tầng được lưu trữ sẵn.</span></li>
<ul><li><span class="lang-en">PaaS SQL Database and Managed Instance have built-in patching, and they always use the latest stable Database Engine version.</span><span class="lang-vi">PaaS (SQL Database và Managed Instance) có patching sẵn có, và luôn dùng phiên bản Database Engine ổn định mới nhất.</span></li>
</ul><li><span class="lang-en">Operating systems updates are as per standard Microsoft Windows Update.</span><span class="lang-vi">Cập nhật hệ điều hành theo cơ chế Microsoft Windows Update tiêu chuẩn.</span></li>
<ul><li><span class="lang-en">Windows Update may do some updates automatically.</span><span class="lang-vi">Windows Update có thể tự thực hiện một số bản cập nhật.</span></li>
</ul><li><span class="lang-en">Patches are as per standard SQL Server Patches.</span><span class="lang-vi">Patch theo cơ chế SQL Server Patches tiêu chuẩn.</span></li>
<ul><li><span class="lang-en">You have full control of the database engine, e.g. when to apply patches.</span><span class="lang-vi">Bạn toàn quyền với database engine, ví dụ quyết định khi nào áp patch.</span></li>
<li><span class="lang-en">However, you can also enable “Automated Patching”</span><span class="lang-vi">Tuy nhiên bạn cũng có thể bật &quot;Automated Patching&quot;</span></li>
<ul><li><span class="lang-en">You need SQL Server 2008 R2 or above, and Windows Server 2008 R2 or above.</span><span class="lang-vi">Cần SQL Server 2008 R2 trở lên, và Windows Server 2008 R2 trở lên.</span></li>
<li><span class="lang-en">In SQL Server settings which creating the VM, or</span><span class="lang-vi">Trong SQL Server settings khi tạo VM, hoặc</span></li>
<li><span class="lang-en">In the Azure resource, go to Settings – SQL Server configuration – Patching.</span><span class="lang-vi">Trong Azure resource, vào Settings – SQL Server configuration – Patching.</span></li>
<li><span class="lang-en">It may take a few minutes for this to be configured.</span><span class="lang-vi">Có thể mất vài phút để cấu hình này có hiệu lực.</span></li>
<li><span class="lang-en">Settings include day, start hour, window duration (number of minutes to download and install).</span><span class="lang-vi">Thiết lập gồm ngày, giờ bắt đầu, độ dài cửa sổ (số phút để tải và cài đặt).</span></li>
</ul><li><span class="lang-en">You can configure it when:</span><span class="lang-vi">Bạn có thể cấu hình khi:</span></li>
<ul><li><span class="lang-en">creating a new VM (under SQL Server Settings tab – Automated patching), or</span><span class="lang-vi">tạo VM mới (trong tab SQL Server Settings – Automated patching), hoặc</span></li>
<li><span class="lang-en">for existing VMs, by going to Azure Portal – the relevant VM – Settings – SQL Server configuration – Patching.</span><span class="lang-vi">với VM đã có, vào Azure Portal – VM tương ứng – Settings – SQL Server configuration – Patching.</span></li>
<li><span class="lang-en">By using PowerShell, with:</span><span class="lang-vi">Bằng PowerShell, với:</span></li>
<ul><li><span class="lang-en">&quot;New-AzVMSqlServerAutoPatchingConfig -Enable&quot; setting the schedule, and</span><span class="lang-vi">&quot;New-AzVMSqlServerAutoPatchingConfig -Enable&quot; để đặt lịch, và</span></li>
<li><span class="lang-en">&quot;Set-AzVMSqlServerExtension&quot; installing the extension with the schedule.</span><span class="lang-vi">&quot;Set-AzVMSqlServerExtension&quot; để cài extension kèm lịch đó.</span></li>
</ul></ul><li><span class="lang-en">You can also enable automatic registration.</span><span class="lang-vi">Bạn cũng có thể bật đăng ký tự động (automatic registration).</span></li>
<ul><li><span class="lang-en">This daily checks whether there are any unregistered VMs in the subscription, and if so, registers them in lightweight mode.</span><span class="lang-vi">Cơ chế này kiểm tra hằng ngày xem có VM nào chưa đăng ký trong subscription không, và nếu có thì đăng ký ở chế độ lightweight.</span></li>
<ul><li><span class="lang-en">To take advantage of all of the features, you would still need to manually upgrade.</span><span class="lang-vi">Muốn dùng đầy đủ tính năng thì vẫn phải nâng cấp thủ công.</span></li>
</ul><li><span class="lang-en">To do this, go to Azure Portal – SQL virtual machines (plural) – and at the top, click on &quot;Automatic SQL Server VM registration&quot;.</span><span class="lang-vi">Để làm việc này, vào Azure Portal – SQL virtual machines (số nhiều) – và bấm &quot;Automatic SQL Server VM registration&quot; ở phía trên.</span></li>
</ul></ul></ul></section>
<section id="s-3"><h3><span class="n"></span> <span class="lang-en">evaluate requirements for the deployment</span><span class="lang-vi">đánh giá yêu cầu cho việc triển khai</span><a class="anch" href="#s-3" title="Link tới mục này">#</a></h3>
<div class="tw"><table class="cmp"><tr><th>Azure SQL Database</th><th>Azure SQL Managed Instance</th><th>SQL Server on Azure VM</th></tr><tr><td>PaaS</td><td>PaaS</td><td>IaaS</td></tr><tr><td colspan="2">Azure manages the database.</td><td>You need to manage your VM, and gives you control of the database.</td></tr><tr><td>Resources always running unless dropped (apart from serverless, when paused).</td><td>Resources always running unless dropped.</td><td>You can shut down resources when not in use.</td></tr><tr><td></td><td>Best for most migrations to the cloud. May need some changes.</td><td>Lift-and-shift. As easy as moving from one on-prem server to another.</td></tr><tr><td></td><td></td><td>Higher cost than PaaS.</td></tr><tr><td>Best for modern cloud applications, and fast time-to-market for new solutions are needed.</td><td>Best for new applications or existing on-prem applications for use in the cloud.</td><td>Best when you don&rsquo;t want any database changes, or when you require OS-level access.</td></tr><tr><td colspan="3">Can use Azure Hybrid Benefit (Windows Server for VMs only, and SQL Server licenses with Software Assurance) and reserved capacity to reduce cost.</td></tr><tr><td>Hybrid Benefit does not apply to serverless.</td><td></td><td></td></tr></table></div></section>
<section id="s5"><h3><span class="n">5.</span> <span class="lang-en">evaluate the functional benefits/impact of possible database offerings</span><span class="lang-vi">đánh giá lợi ích/tác động về mặt chức năng của các lựa chọn database</span><a class="anch" href="#s5" title="Link tới mục này">#</a></h3>
<div class="tw"><table class="cmp"><tr><th>Azure SQL Database</th><th>Azure SQL Managed Instance</th><th>SQL Server on Azure VM</th></tr><tr><td>Most commonly used SQL Server features</td><td>High compatibility with SQL Server</td><td>All on-premises capabilities.</td></tr><tr><td>Trace flags not supported.</td><td>Only a limited number of (global) trace flags are supported.</td><td>Trace flags supported.</td></tr><tr><td colspan="2">Built-in backups, patching and recovery.</td><td>You manage backup and patches</td></tr><tr><td>Databases up to 100 Tb</td><td>Up to currently available instance size, subject to number of vCores</td><td>Instances up to 256 Tb. (Databases of up to instance size)</td></tr><tr><td>Supports serverless compute [the alternative is &quot;provisioned&quot;]</td><td></td><td>Lift-and-shift.</td></tr><tr><td>CLR not supported.</td><td>CLR supported.</td><td></td></tr><tr><td>Based on latest stable Enterprise Edition.</td><td>Based on latest stable Enterprise Edition.</td><td>Choose which version of SQL Server (from 2008R2 updates), edition (Developer, Express, Web, Standard, Enterprise) and OS you use.</td></tr><tr><td>Can use Elastic Job Agent service.</td><td>Can use SQL Agent jobs.</td><td>Can use SQL Agent jobs.</td></tr></table></div></section>
<section id="s5-2"><h3><span class="n">5.</span> <span class="lang-en">evaluate the scalability of the possible database offering</span><span class="lang-vi">đánh giá khả năng mở rộng của lựa chọn database</span><a class="anch" href="#s5-2" title="Link tới mục này">#</a></h3>
<div class="tw"><table class="cmp"><tr><th>Azure SQL Database</th><th>Azure SQL Managed Instance</th><th>SQL Server on Azure VM</th></tr><tr><td>Most commonly used SQL Server features</td><td>High compatibility with SQL Server</td><td>All on-premises capabilities.</td></tr><tr><td>Trace flags not supported.</td><td>Only a limited number of (global) trace flags are supported.</td><td>Trace flags supported.</td></tr><tr><td colspan="2">Built-in backups, patching and recovery.</td><td>You manage backup and patches</td></tr><tr><td>Databases up to 100 Tb</td><td>Up to currently available instance size, subject to number of vCores</td><td>Instances up to 256 Tb. (Databases of up to instance size)</td></tr><tr><td>Supports serverless compute [the alternative is &quot;provisioned&quot;]</td><td></td><td>Lift-and-shift.</td></tr><tr><td>CLR not supported.</td><td>CLR supported.</td><td></td></tr><tr><td>Based on latest stable Enterprise Edition.</td><td>Based on latest stable Enterprise Edition.</td><td>Choose which version of SQL Server (from 2008R2 updates), edition (Developer, Express, Web, Standard, Enterprise) and OS you use.</td></tr><tr><td>Can use Elastic Job Agent service.</td><td>Can use SQL Agent jobs.</td><td>Can use SQL Agent jobs.</td></tr></table></div></section>
<section id="s5-3"><h3><span class="n">5.</span> <span class="lang-en">evaluate the HA/DR of the possible database offering</span><span class="lang-vi">đánh giá HA/DR của lựa chọn database</span><a class="anch" href="#s5-3" title="Link tới mục này">#</a></h3>
<div class="tw"><table class="cmp"><tr><th>Azure SQL Database</th><th>Azure SQL Managed Instance</th><th>SQL Server on Azure VM</th></tr><tr><td>Up to 99.995% availability. Minimum SLA is 99.99% availability, except for Hyperscale, which is 99.9%-99.95%.</td><td>99.99% availability</td><td>Up to 99.99% availability. However, this requires a second VM, and using Always On availability group. Minimum SLA is 95% for the VM.</td></tr><tr><td colspan="2">At the Basic, Standard and General Purpose level, can use Locally redundant availability. At the Premium and Business Critical level or elastic pools, can use a three- to four-node cluster with Locally or Zone Redundant Availability. You can also add read-only replicas (the &ldquo;Read Scale-out&rdquo; feature).</td><td>Can configure availability replicas, using a domain controller VM.</td></tr><tr><td>At the General Purpose level using Gen5 compute hardware in certain regions, can use Zone redundant configuration (preview).</td><td></td><td></td></tr></table></div><div class="tw"><table class="cmp"><tr><th>Azure SQL Database</th><th>Azure SQL Managed Instance</th><th>SQL Server on Azure VM</th></tr><tr><td colspan="2">Automatic backups, including full, differential and transaction log, for 7-35 days.</td><td>Can configure backups.</td></tr><tr><td>Can configure full database backups to Azure Storage for long-term backup retention (LTR).</td><td>Can perform copy-only backups for long-term backup retention (preview).</td><td>Can configure backups.</td></tr><tr><td colspan="2">Point-in-time restores</td><td>With appropriate backups, can do point-in-time restores.</td></tr><tr><td>Can configure Active geo-replication (up to 4 readable secondary databases)</td><td>No.</td><td>Can configure geo-replication storage (asynchronously). Data file and log file needs to be on the same disk.</td></tr><tr><td>Can configure auto-failover groups</td><td>Can configure auto-failover groups</td><td>Can configure Azure failover cluster instances using shared storage.</td></tr></table></div></section>
<section id="s6"><h3><span class="n">6.</span> <span class="lang-en">evaluate the security aspects of the possible database offering</span><span class="lang-vi">đánh giá khía cạnh bảo mật của lựa chọn database</span><a class="anch" href="#s6" title="Link tới mục này">#</a></h3>
<div class="tw"><table class="cmp"><tr><th>Azure SQL Database</th><th>Azure SQL Managed Instance</th><th>SQL Server on Azure VM</th></tr><tr><td>Auditing works at the database level.</td><td>Auditing works at the server level.</td><td>Auditing works at the server level.</td></tr><tr><td>.xel log files are stored in Azure Blob storage.</td><td>.xel log files are stored in Azure Blob storage.</td><td>Events are stored in the file system or Windows event logs.</td></tr><tr><td colspan="3">Can use Azure Defender for SQL, which includes: Vulnerability assessment and Threat detection (costs around $0.02/instance/hour)</td></tr><tr><td colspan="3">Data encryption, using Transport Layer Security (TLS), Transparent Data Encryption (TDS <span class="sic">[nguyên văn trong note &mdash; đúng ra là TDE]</span>) and Always Encrypted. Firewalls.</td></tr><tr><td colspan="2">SQL authentication or Azure Active Directory authentication</td><td>Windows or SQL Server authentication.</td></tr></table></div></section>
<section id="s6a"><h3><span class="n">6a.</span> <span class="lang-en">Identify use cases for Azure Arc-enabled SQL services</span><span class="lang-vi">Xác định các tình huống dùng Azure Arc-enabled SQL services</span><a class="anch" href="#s6a" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Azure Arc extends Azure services to non-Azure SQL Server instances, including on-premises, multicloud and SaaS data.</span><span class="lang-vi">Azure Arc mở rộng các dịch vụ Azure ra những instance SQL Server nằm ngoài Azure, gồm on-premises, đa đám mây và dữ liệu SaaS.</span></li>
<li><span class="lang-en">This enables you to:</span><span class="lang-vi">Nó cho phép bạn:</span></li>
<ul><li><span class="lang-en">Use Entra ID for authentication, for SQL Server 2022 or above.</span><span class="lang-vi">Use Entra ID for authentication, for SQL Server 2022 or above.</span></li>
<ul><li><span class="lang-en">This allows for a higher level of security.</span><span class="lang-vi">Điều này mang lại mức bảo mật cao hơn.</span></li>
</ul><li><span class="lang-en">Inventory all of your SQL Server instances,</span><span class="lang-vi">Kiểm kê toàn bộ các instance SQL Server của bạn,</span></li>
<li><span class="lang-en">Ask questions about them,</span><span class="lang-vi">Đặt câu hỏi về chúng,</span></li>
<li><span class="lang-en">Create charts from the results of your questions, and create a dashboard based on the charts,</span><span class="lang-vi">Create charts from the results of your questions, and create a dashboard based on the charts,</span></li>
<ul><li><span class="lang-en">You can also use built-in dashboards</span><span class="lang-vi">Bạn cũng có thể dùng các dashboard dựng sẵn</span></li>
</ul><li><span class="lang-en">Run a “best practices” assessment, to show how to improve configuration of your SQL Server instances.</span><span class="lang-vi">Chạy đánh giá &quot;best practices&quot;, chỉ ra cách cải thiện cấu hình các instance SQL Server.</span></li>
<li><span class="lang-en">Find out which databases have not been recently backed up, or are not encrypted.</span><span class="lang-vi">Tìm ra database nào chưa được backup gần đây, hoặc chưa được mã hóa.</span></li>
<li><span class="lang-en">Integrate Microsoft Defender for Cloud, which can:</span><span class="lang-vi">Tích hợp Microsoft Defender for Cloud, cho phép:</span></li>
<ul><li><span class="lang-en">run vulnerability assessments - identify and reduce possible database vulnerabilities, and</span><span class="lang-vi">chạy vulnerability assessment — phát hiện và giảm các lỗ hổng có thể có của database, và</span></li>
<li><span class="lang-en">threat protection – receive alerts with recommended actions to reduce threats from unusual activities.</span><span class="lang-vi">threat protection — nhận cảnh báo kèm hành động khuyến nghị để giảm mối đe dọa từ các hoạt động bất thường.</span></li>
</ul><li><span class="lang-en">Integrate Microsoft Purview to help govern your data.</span><span class="lang-vi">Tích hợp Microsoft Purview để hỗ trợ quản trị dữ liệu.</span></li>
<li><span class="lang-en">Use a “pay-as-you-go” model instead of buying licenses.</span><span class="lang-vi">Use a “pay-as-you-go” model instead of buying licenses.</span></li>
<ul><li><span class="lang-en">This could be good if you have variable requirements, such as reducing cores sometimes or even turning it off.</span><span class="lang-vi">Cách này phù hợp nếu nhu cầu của bạn biến động, chẳng hạn có lúc giảm số core hoặc thậm chí tắt hẳn.</span></li>
</ul><li><span class="lang-en">Run a migration assessment from on-premises to the cloud.</span><span class="lang-vi">Chạy đánh giá migration từ on-premises lên cloud.</span></li>
</ul></ul></section>
<section id="s6b"><h3><span class="n">6b.</span> <span class="lang-en">Identify use cases for Azure SQL Database in Microsoft Fabric</span><span class="lang-vi">Xác định các tình huống dùng Azure SQL Database trong Microsoft Fabric</span><a class="anch" href="#s6b" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Best when you are using other features in Microsoft Fabric, such as Data Lakehouses and Warehouses, and Power BI (although Power BI will also work with Azure SQL Database).</span><span class="lang-vi">Phù hợp nhất khi bạn đang dùng các tính năng khác của Microsoft Fabric như Data Lakehouse, Warehouse và Power BI (dù Power BI cũng làm việc được với Azure SQL Database thường).</span></li>
<li><span class="lang-en">Very easy to set up – no configuration needed, including mirroring (as this is already set up).</span><span class="lang-vi">Rất dễ thiết lập — không cần cấu hình gì, kể cả mirroring (vì đã được thiết lập sẵn).</span></li>
<ul><li><span class="lang-en">It is a SaaS (Software as a Service) solution, whereas Azure SQL Database is a PaaS (Platform as a Service) solution.</span><span class="lang-vi">Đây là giải pháp SaaS (Software as a Service), còn Azure SQL Database là PaaS (Platform as a Service).</span></li>
</ul><li><span class="lang-en">Authorization uses Entra ID.</span><span class="lang-vi">Phân quyền dùng Entra ID.</span></li>
<li><span class="lang-en">No additional price beyond the Fabric capacity and data storage. As this could be expensive, Azure SQL Database could be cheaper if you do not already have a Fabric capacity.</span><span class="lang-vi">Không tốn thêm chi phí ngoài Fabric capacity và dung lượng lưu trữ. Vì khoản này có thể đắt, Azure SQL Database có thể rẻ hơn nếu bạn chưa có sẵn Fabric capacity.</span></li>
<li><span class="lang-en">Based on the same engine as Azure SQL Database, but with some differences in feature sets – you should investigate the differences if you plan to use the Fabric version.</span><span class="lang-vi">Dựa trên cùng engine với Azure SQL Database, nhưng có một số khác biệt về bộ tính năng — nên tìm hiểu kỹ khác biệt nếu định dùng bản Fabric.</span></li>
<li><span class="lang-en">Can apply access control and management, together with Row and Object Level Security (RLS and OLS).</span><span class="lang-vi">Áp dụng được access control và quản trị, cùng Row và Object Level Security (RLS và OLS).</span></li>
<li><span class="lang-en">Use for:</span><span class="lang-vi">Use for:</span></li>
<ul><li><span class="lang-en">AI-powered and intelligent applications,</span><span class="lang-vi">Ứng dụng thông minh, có AI,</span></li>
<li><span class="lang-en">The target for ETL (Extract-Transform-Load),</span><span class="lang-vi">Đích đến của ETL (Extract-Transform-Load),</span></li>
<li><span class="lang-en">Integrating with other Fabric Data Engineering capabilities, such as using pipelines, Spark job definitions, and notebooks,</span><span class="lang-vi">Tích hợp với các năng lực Fabric Data Engineering khác, như pipeline, Spark job definition và notebook,</span></li>
<li><span class="lang-en">Integrating with other Fabric Data Science capabilities, such as Machine Learning Experiments, Models and Notebooks,</span><span class="lang-vi">Tích hợp với các năng lực Fabric Data Science khác, như Machine Learning Experiment, Model và Notebook,</span></li>
<li><span class="lang-en">Operational Data Store, bringing data from multiple data sources, and then sending to analytical layers such as the Fabric Warehouse/Lakehouse.</span><span class="lang-vi">Operational Data Store — gom dữ liệu từ nhiều nguồn rồi đưa sang các lớp phân tích như Fabric Warehouse/Lakehouse.</span></li>
<li><span class="lang-en">Translytical applications – both transactional (adding rows) and analytical (querying rows) operations, as you can use an SQL analytics endpoint for analytical operations without impacting the transactional performance.</span><span class="lang-vi">Ứng dụng translytical — vừa transactional (thêm dòng) vừa analytical (truy vấn dòng), vì bạn có thể dùng SQL analytics endpoint cho thao tác phân tích mà không ảnh hưởng hiệu năng giao dịch.</span></li>
<li><span class="lang-en">Cross-database queries,</span><span class="lang-vi">Truy vấn liên database (cross-database queries),</span></li>
<li><span class="lang-en">Integrating with Fabric CI/CD (continuous integration and continuous development) source control, and</span><span class="lang-vi">Tích hợp với Fabric CI/CD (continuous integration và continuous development) source control, và</span></li>
<li><span class="lang-en">Scaling up by increasing the Fabric capacity.</span><span class="lang-vi">Mở rộng quy mô bằng cách tăng Fabric capacity.</span></li>
</ul></ul></section>
<section id="s7"><h3><span class="n">7, , 12.</span> <span class="lang-en">Plan for table partitioning</span><span class="lang-vi">Lập kế hoạch phân vùng bảng</span><a class="anch" href="#s7" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Data can be partitioned – physically divided into different data stores.</span><span class="lang-vi">Dữ liệu có thể được phân vùng — chia vật lý ra nhiều data store khác nhau.</span></li>
<ul><li><span class="lang-en">Scalable – there are hardware limits, but if you divide data into partitions, each on a separate server, it can be scaled out.</span><span class="lang-vi">Khả năng mở rộng — phần cứng luôn có giới hạn, nhưng nếu chia dữ liệu thành nhiều partition, mỗi partition trên một server riêng, thì có thể scale out.</span></li>
<li><span class="lang-en">Increase performance – Smaller amount of data in a single partition, and multiple data stores can be accessed at the same time.</span><span class="lang-vi">Tăng hiệu năng — mỗi partition chứa ít dữ liệu hơn, và nhiều data store có thể được truy cập cùng lúc.</span></li>
<li><span class="lang-en">Security considerations – apply different security to sensitive and non-sensitive partitions.</span><span class="lang-vi">Cân nhắc bảo mật — áp dụng mức bảo mật khác nhau cho partition nhạy cảm và không nhạy cảm.</span></li>
<li><span class="lang-en">Administration – have different strategies of monitoring, management and backup per partition. Backups for a single partition are quicker than for the entire data.</span><span class="lang-vi">Quản trị — mỗi partition có chiến lược giám sát, quản lý và backup riêng. Backup một partition nhanh hơn backup toàn bộ dữ liệu.</span></li>
<li><span class="lang-en">Have different hardware or services – Premium or Standard where needed.</span><span class="lang-vi">Dùng phần cứng hoặc dịch vụ khác nhau — Premium hoặc Standard tùy nhu cầu.</span></li>
<li><span class="lang-en">Increase availability – if one instance fails, only that partition is temporarily unreadable.</span><span class="lang-vi">Tăng tính sẵn sàng — nếu một instance hỏng thì chỉ partition đó tạm thời không đọc được.</span></li>
</ul><li><span class="lang-en">Partitions can be:</span><span class="lang-vi">Các kiểu phân vùng:</span></li>
<ul><li><span class="lang-en">Horizontal partitioning (sharding).</span><span class="lang-vi">Horizontal partitioning (sharding).</span></li>
<ul><li><span class="lang-en">All partitions have the same schema.</span><span class="lang-vi">Mọi partition có cùng schema.</span></li>
<li><span class="lang-en">Each partition, or shard, holds a subset of the data (rows).</span><span class="lang-vi">Mỗi partition (shard) giữ một tập con của dữ liệu (các dòng).</span></li>
<li><span class="lang-en">If some data is fairly static or small, consider replicating it in all partitions, to reduce cross-partition access.</span><span class="lang-vi">Nếu một số dữ liệu khá tĩnh hoặc nhỏ, cân nhắc nhân bản nó ở mọi partition để giảm truy cập chéo partition.</span></li>
</ul><li><span class="lang-en">Vertical partitioning.</span><span class="lang-vi">Vertical partitioning.</span></li>
<ul><li><span class="lang-en">Each partition holds a subset of the columns.</span><span class="lang-vi">Mỗi partition giữ một tập con các cột.</span></li>
<li><span class="lang-en">Some columns may be needed less often, and they could be separated away, and used only when needed.</span><span class="lang-vi">Một số cột ít khi cần đến, có thể tách riêng ra và chỉ dùng khi cần.</span></li>
<li><span class="lang-en">Some columns may also be more sensitive, and could be separated away.</span><span class="lang-vi">Một số cột cũng có thể nhạy cảm hơn và nên tách riêng.</span></li>
<li><span class="lang-en">All partitions would need to be capable of being joined – for instance, by the same primary key in each.</span><span class="lang-vi">Mọi partition phải join được với nhau — ví dụ qua cùng một primary key.</span></li>
</ul><li><span class="lang-en">Functional partitioning.</span><span class="lang-vi">Functional partitioning.</span></li>
<ul><li><span class="lang-en">Different tables in each partition relating to function.</span><span class="lang-vi">Mỗi partition chứa các bảng khác nhau theo chức năng.</span></li>
<li><span class="lang-en">Store data could be in one partition, and employee data in another.</span><span class="lang-vi">Dữ liệu cửa hàng có thể nằm ở một partition, dữ liệu nhân viên ở partition khác.</span></li>
<li><span class="lang-en">Some tables could be more sensitive, and could be separated away into another partition.</span><span class="lang-vi">Một số bảng có thể nhạy cảm hơn và nên tách sang partition riêng.</span></li>
</ul><li><span class="lang-en">These techniques can be combined.</span><span class="lang-vi">Các kỹ thuật này có thể kết hợp với nhau.</span></li>
<li><span class="lang-en">Keep the data, where possible, geographically close to the users.</span><span class="lang-vi">Nếu được, hãy giữ dữ liệu gần người dùng về mặt địa lý.</span></li>
</ul><li><span class="lang-en">Consider the backup, archiving (including deleting) and High Availability, Disaster Recovery requirements for each partition.</span><span class="lang-vi">Cân nhắc yêu cầu về backup, lưu trữ dài hạn (kể cả xóa) và High Availability, Disaster Recovery cho từng partition.</span></li>
</ul></section>
<section id="s8"><h3><span class="n">8.</span> <span class="lang-en">evaluate database partitioning techniques, such as database sharding</span><span class="lang-vi">đánh giá các kỹ thuật phân vùng database, chẳng hạn database sharding</span><a class="anch" href="#s8" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Why partition?</span><span class="lang-vi">Vì sao phải phân vùng?</span></li>
<ul><li><span class="lang-en">Storage space limitations</span><span class="lang-vi">Giới hạn dung lượng lưu trữ</span></li>
<ul><li><span class="lang-en">Maximum storage capacity can be reached on a server.</span><span class="lang-vi">Server có thể chạm trần dung lượng tối đa.</span></li>
</ul><li><span class="lang-en">Computing resource limits</span><span class="lang-vi">Giới hạn tài nguyên tính toán</span></li>
<ul><li><span class="lang-en">Exceeding this may result in time out.</span><span class="lang-vi">Vượt ngưỡng có thể dẫn tới time out.</span></li>
</ul><li><span class="lang-en">Network bandwidth</span><span class="lang-vi">Băng thông mạng</span></li>
<ul><li><span class="lang-en">Exceeding this can result in failed requests.</span><span class="lang-vi">Vượt ngưỡng có thể khiến request thất bại.</span></li>
</ul></ul><li><span class="lang-en">You can scale vertically:</span><span class="lang-vi">Bạn có thể scale theo chiều dọc (vertically):</span></li>
<ul><li><span class="lang-en">Add disk capacity, processing power, memory and network connections.</span><span class="lang-vi">Add disk capacity, processing power, memory and network connections.</span></li>
<li><span class="lang-en">However, you may reach the same problem later.</span><span class="lang-vi">Tuy nhiên sau này bạn vẫn có thể gặp lại đúng vấn đề đó.</span></li>
</ul><li><span class="lang-en">You can partition the data store horizontally into shards.</span><span class="lang-vi">Bạn có thể phân vùng data store theo chiều ngang thành các shard.</span></li>
<ul><li><span class="lang-en">Each shard has its own subset of the data.</span><span class="lang-vi">Mỗi shard giữ tập con dữ liệu của riêng nó.</span></li>
<li><span class="lang-en">It runs on a server acting as a storage node.</span><span class="lang-vi">Nó chạy trên một server đóng vai trò storage node.</span></li>
</ul><li><span class="lang-en">You can:</span><span class="lang-vi">Bạn có thể:</span></li>
<ul><li><span class="lang-en">Scale out by adding further shards</span><span class="lang-vi">Scale out bằng cách thêm shard</span></li>
<li><span class="lang-en">Use off-the-shelf hardware for each storage node</span><span class="lang-vi">Use off-the-shelf hardware for each storage node</span></li>
<li><span class="lang-en">Balance the workload across shards</span><span class="lang-vi">Cân bằng tải giữa các shard</span></li>
<li><span class="lang-en">Locate shards near to the users who will use it.</span><span class="lang-vi">Đặt shard gần những người dùng sẽ sử dụng nó.</span></li>
</ul><li><span class="lang-en">You can do it by implementing:</span><span class="lang-vi">Có thể triển khai theo:</span></li>
<ul><li><span class="lang-en">Lookup strategy</span><span class="lang-vi">Lookup strategy</span></li>
<ul><li><span class="lang-en">Have a shard key (an ID), and a map which shows where the data is stored.</span><span class="lang-vi">Có một shard key (một ID) và một map cho biết dữ liệu được lưu ở đâu.</span></li>
<li><span class="lang-en">Offers more control.</span><span class="lang-vi">Kiểm soát tốt hơn.</span></li>
<li><span class="lang-en">Requires additional overhead.</span><span class="lang-vi">Đổi lại là thêm overhead.</span></li>
</ul><li><span class="lang-en">Range strategy</span><span class="lang-vi">Range strategy</span></li>
<ul><li><span class="lang-en">Use sequential shard keys in ranges (e.g. one per month).</span><span class="lang-vi">Use sequential shard keys in ranges (e.g. one per month).</span></li>
<li><span class="lang-en">Similar data is kept on the same storage node, so it can retrieve multiple items in a single operation.</span><span class="lang-vi">Dữ liệu tương tự nhau nằm trên cùng storage node, nên có thể lấy nhiều mục trong một thao tác.</span></li>
<li><span class="lang-en">Doesn’t necessarily provide optimal balancing.</span><span class="lang-vi">Không hẳn cho cân bằng tối ưu.</span></li>
<li><span class="lang-en">Rebalancing shares is difficult.</span><span class="lang-vi">Rebalance các shard rất khó.</span></li>
</ul><li><span class="lang-en">Hash strategy</span><span class="lang-vi">Hash strategy</span></li>
<ul><li><span class="lang-en">Data distributed evenly among the shards. Reduces hotspots (high loads for an individual server) by using some random element for distribution.</span><span class="lang-vi">Dữ liệu phân bố đều giữa các shard. Giảm hotspot (tải cao dồn vào một server) nhờ dùng yếu tố ngẫu nhiên khi phân bố.</span></li>
<li><span class="lang-en">More even data and load distribution.</span><span class="lang-vi">Dữ liệu và tải phân bố đều hơn.</span></li>
<li><span class="lang-en">Computing the hash might increase overhead requirements.</span><span class="lang-vi">Việc tính hash có thể làm tăng overhead.</span></li>
<li><span class="lang-en">Rebalancing shards is difficult.</span><span class="lang-vi">Rebalance các shard rất khó.</span></li>
</ul></ul></ul></section>
<section id="s9"><h3><span class="n">9.</span> <span class="lang-en">configure Azure SQL Database for scale and performance</span><span class="lang-vi">cấu hình Azure SQL Database để mở rộng và tối ưu hiệu năng</span><a class="anch" href="#s9" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Azure SQL Database can be:</span><span class="lang-vi">Azure SQL Database có thể là:</span></li>
<ul><li><span class="lang-en">Single database.</span><span class="lang-vi">Single database.</span></li>
<li><span class="lang-en">Elastic pool.</span><span class="lang-vi">Elastic pool.</span></li>
<li><span class="lang-en">Compute tier:</span><span class="lang-vi">Compute tier:</span></li>
<ul><li><span class="lang-en">Provisioned – for regular usage patterns, or multiple databases with elastic pools.</span><span class="lang-vi">Provisioned — cho nhu cầu sử dụng đều đặn, hoặc nhiều database dùng elastic pool.</span></li>
<li><span class="lang-en">Serverless computer – on-off usage with a relative low average compute.</span><span class="lang-vi">Serverless — cho nhu cầu lúc có lúc không, mức compute trung bình khá thấp.</span></li>
<ul><li><span class="lang-en">Supports automatic pausing and resuming.</span><span class="lang-vi">Hỗ trợ tự động pause và resume.</span></li>
<li><span class="lang-en">When the database is paused, you only pay for storage.</span><span class="lang-vi">Khi database bị pause, bạn chỉ trả tiền lưu trữ.</span></li>
</ul></ul></ul><li><span class="lang-en">Azure SQL Database allows for:</span><span class="lang-vi">Azure SQL Database cho phép:</span></li>
<li><span class="lang-en">vCore purchasing model</span><span class="lang-vi">Mô hình mua theo vCore</span></li>
<ul><li><span class="lang-en">Specify separate amount of Number of vCores, memory, and amount/speed of storage. Look at:</span><span class="lang-vi">Chỉ định riêng số vCore, dung lượng memory và dung lượng/tốc độ lưu trữ. Cần xem:</span></li>
<ul><li><span class="lang-en">Data Maximum Memory size,</span><span class="lang-vi">Dung lượng Data Maximum Memory,</span></li>
<li><span class="lang-en">Log size (30% of the Data Max size),</span><span class="lang-vi">Log size (bằng 30% của Data Max size),</span></li>
<li><span class="lang-en">iOPS,</span><span class="lang-vi">iOPS,</span></li>
<li><span class="lang-en">Concurrent workers, and</span><span class="lang-vi">Concurrent worker, và</span></li>
<li><span class="lang-en">Backup retention.</span><span class="lang-vi">Backup retention.</span></li>
</ul><li><span class="lang-en">Maximum of:</span><span class="lang-vi">Tối đa:</span></li>
<ul><li><span class="lang-en">80 vCores at Gen5,</span><span class="lang-vi">80 vCore ở Gen5,</span></li>
<li><span class="lang-en">4 Tb memory, and</span><span class="lang-vi">4 TB memory, và</span></li>
<li><span class="lang-en">4 Tb database size (apart from Hyperscale, which has up to 100 Tb).</span><span class="lang-vi">4 TB dung lượng database (trừ Hyperscale, lên tới 100 TB).</span></li>
</ul><li><span class="lang-en">Azure Hybrid Benefit and/or reserved capacity</span><span class="lang-vi">Azure Hybrid Benefit và/hoặc reserved capacity</span></li>
<ul><li><span class="lang-en">Azure Hybrid Benefit allows you to bring in your existing on-prem licenses to the cloud.</span><span class="lang-vi">Azure Hybrid Benefit cho phép mang license on-prem sẵn có lên cloud.</span></li>
<li><span class="lang-en">Reserved capacity is paying in advance at a discount.</span><span class="lang-vi">Reserved capacity là trả trước để được giảm giá.</span></li>
</ul><li><span class="lang-en">Uses local SSDs. Provision in 1 Gb increments.</span><span class="lang-vi">Dùng SSD cục bộ. Cấp phát theo bước 1 GB.</span></li>
<li><span class="lang-en">Choose from:</span><span class="lang-vi">Chọn một trong:</span></li>
<ul><li><span class="lang-en">General purpose (scale computer and storage) – For most business workloads. Storage latency of 5-10 ms (about the same as SQL Server on a VM).</span><span class="lang-vi">General purpose (scale compute và storage) — cho hầu hết workload nghiệp vụ. Độ trễ storage 5-10 ms (xấp xỉ SQL Server trên VM).</span></li>
<li><span class="lang-en">Business critical (high transaction rate and high resiliency) – uses</span><span class="lang-vi">Business critical (tần suất giao dịch cao, độ bền cao) — dùng khi</span></li>
<ul><li><span class="lang-en">When you need low-latency I/O (1-2 ms) or frequent communications between app and database.</span><span class="lang-vi">Bạn cần I/O độ trễ thấp (1-2 ms) hoặc app và database trao đổi liên tục.</span></li>
<li><span class="lang-en">Large number of updates, or long running transactions that modify data.</span><span class="lang-vi">Số lượng update lớn, hoặc transaction chạy dài có sửa dữ liệu.</span></li>
<li><span class="lang-en">Higher resiliency, availability and fast geo-recovery and recovery from failures, and advanced data corruption protection.</span><span class="lang-vi">Cần độ bền, tính sẵn sàng cao hơn, geo-recovery và phục hồi sau sự cố nhanh, cùng khả năng chống hỏng dữ liệu nâng cao.</span></li>
<li><span class="lang-en">Free-of-charge secondary read-only replica.</span><span class="lang-vi">Có secondary read-only replica miễn phí.</span></li>
</ul><li><span class="lang-en">Hyperscale (on-demand scalable storage) – Only for Azure SQL Database – say 100 Tb+ storage.</span><span class="lang-vi">Hyperscale (storage mở rộng theo nhu cầu) — chỉ có ở Azure SQL Database — cỡ 100 TB trở lên.</span></li>
<ul><li><span class="lang-en">You cannot subsequently change out of Hyperscale. Cost the same as Azure SQL Database.</span><span class="lang-vi">Sau đó bạn KHÔNG thể chuyển ra khỏi Hyperscale. Chi phí ngang Azure SQL Database.</span></li>
</ul></ul><li><span class="lang-en">Backup Storage Redundancy</span><span class="lang-vi">Backup Storage Redundancy</span></li>
<ul><li><span class="lang-en">Geo-redundant backup storage (default and recommended),</span><span class="lang-vi">Geo-redundant backup storage (mặc định và được khuyến nghị),</span></li>
<li><span class="lang-en">Zone and Local Redundancy are cheaper for single region data resiliency.</span><span class="lang-vi">Zone và Local Redundancy rẻ hơn, dùng khi chỉ cần bền vững dữ liệu trong một region.</span></li>
</ul><li><span class="lang-en">Max data size:</span><span class="lang-vi">Dung lượng dữ liệu tối đa:</span></li>
<ul><li><span class="lang-en">512 Gb for GP_S_Gen5_1</span><span class="lang-vi">512 GB cho GP_S_Gen5_1</span></li>
<li><span class="lang-en">1,024 Gb for GP_S_Gen5_2, 4, 6</span><span class="lang-vi">1.024 GB cho GP_S_Gen5_2, 4, 6</span></li>
<li><span class="lang-en">1,536 Gb for GP_S_Gen5_10 and</span><span class="lang-vi">1.536 GB cho GP_S_Gen5_10 và</span></li>
<li><span class="lang-en">3,072 Gb for GP_S_Gen5_12, 14, 16, 18, 20.</span><span class="lang-vi">3.072 GB cho GP_S_Gen5_12, 14, 16, 18, 20.</span></li>
<li><span class="lang-en">4,096 Gb for GP_S_Gen5_24, 32 and 40.</span><span class="lang-vi">4.096 GB cho GP_S_Gen5_24, 32 và 40.</span></li>
</ul><li><span class="lang-en">Tempdb</span><span class="lang-vi">Tempdb</span></li>
<ul><li><span class="lang-en">Azure SQL Database creates 1 file per vCore with 32Gb per file, with caps of up to 32 files for serverless computing only.</span><span class="lang-vi">Azure SQL Database tạo 1 file cho mỗi vCore, 32 GB mỗi file, tối đa 32 file (chỉ với serverless).</span></li>
</ul></ul><li><span class="lang-en">DTU-based purchasing model</span><span class="lang-vi">Mô hình mua theo DTU</span></li>
<ul><li><span class="lang-en">For light to heavy database workloads.</span><span class="lang-vi">Cho workload từ nhẹ tới nặng.</span></li>
<li><span class="lang-en">Offers bundles of maximum number of compute, memory and I/O (reads/writes) resources for each class (cannot separate them).</span><span class="lang-vi">Cung cấp gói gộp sẵn số lượng compute, memory và I/O (đọc/ghi) tối đa cho từng hạng (không tách riêng được).</span></li>
<li><span class="lang-en">Uses Azure Premium disks. Provision in increments of 250 Gb to 1 Tb, and 256 Gb thereafter.</span><span class="lang-vi">Dùng Azure Premium disk. Cấp phát theo bước 250 GB tới 1 TB, sau đó là 256 GB.</span></li>
<li><span class="lang-en">Choose from:</span><span class="lang-vi">Chọn một trong:</span></li>
<ul><li><span class="lang-en">Basic (for less demanding workloads)</span><span class="lang-vi">Basic (cho workload ít đòi hỏi)</span></li>
<li><span class="lang-en">Standard (for typical performance)</span><span class="lang-vi">Standard (hiệu năng thông thường)</span></li>
<li><span class="lang-en">Premium (for I/O-intensive workloads)</span><span class="lang-vi">Premium (cho workload nặng I/O)</span></li>
<li><span class="lang-en">Please note: Basic and Standard S0, S1 and S2 have less than 1 vCore, and cannot use &quot;Change data capture&quot;.</span><span class="lang-vi">Lưu ý: Basic và Standard S0, S1, S2 có ít hơn 1 vCore nên không dùng được &quot;Change data capture&quot;.</span></li>
<ul><li><span class="lang-en">Consider Basic, S0 and S1, where database files are stored in Azure Standard Storage (HDD), for development, testing and infrequently accessed workloads.</span><span class="lang-vi">Cân nhắc Basic, S0 và S1 — nơi file database nằm trên Azure Standard Storage (HDD) — cho môi trường phát triển, kiểm thử và workload ít truy cập.</span></li>
</ul></ul><li><span class="lang-en">Consider changing to vCores if &gt; 300 DTUs</span><span class="lang-vi">Cân nhắc chuyển sang vCore nếu vượt 300 DTU</span></li>
<ul><li><span class="lang-en">Might reduce costs – no downtime when converting.</span><span class="lang-vi">Có thể giảm chi phí — không có downtime khi chuyển đổi.</span></li>
</ul><li><span class="lang-en">Calculates available for calculating DTUs needed:</span><span class="lang-vi">Công cụ tính số DTU cần thiết:</span></li>
<ul><li><span class="lang-en">See https://dtucalculator.azurewebsites.net/</span><span class="lang-vi">Xem https://dtucalculator.azurewebsites.net/</span></li>
</ul></ul><li><span class="lang-en">Can change service tier on demand (but not out of Hyperscale).</span><span class="lang-vi">Có thể đổi service tier bất cứ lúc nào (nhưng không chuyển ra khỏi Hyperscale được).</span></li>
<ul><li><span class="lang-en">Don’t do it when you have a long job running!</span><span class="lang-vi">Đừng làm khi đang có job chạy dài!</span></li>
<li><span class="lang-en">For the DMVs to have accurate figures, you may need to flush the Query Store after re- scaling. Use:</span><span class="lang-vi">Để DMV cho số liệu chính xác, có thể cần flush Query Store sau khi re-scale. Dùng:</span></li>
<ul><li><code><span class="lang-en">EXEC sp_query_store_flush_db;</span><span class="lang-vi">EXEC sp_query_store_flush_db;</span></code></li>
</ul></ul><li><span class="lang-en">Choose from server or serverless model:</span><span class="lang-vi">Chọn mô hình server hoặc serverless:</span></li>
<ul><li><span class="lang-en">Server.</span><span class="lang-vi">Server.</span></li>
<ul><li><span class="lang-en">This is a logical server, which includes logins, firewall and auditing rules, policies and failover groups.</span><span class="lang-vi">Đây là logical server, bao gồm login, quy tắc firewall và auditing, policy và failover group.</span></li>
<li><span class="lang-en">The server name must be unique in Azure.</span><span class="lang-vi">Tên server phải duy nhất trong Azure.</span></li>
<li><span class="lang-en">Don't need to manage the instance.</span><span class="lang-vi">Không cần quản lý instance.</span></li>
<li><span class="lang-en">Cannot use &quot;USE&quot; to change database context.</span><span class="lang-vi">Không dùng được &quot;USE&quot; để đổi database context.</span></li>
</ul><li><span class="lang-en">Serverless model.</span><span class="lang-vi">Mô hình serverless.</span></li>
<ul><li><span class="lang-en">Bills for compute per second.</span><span class="lang-vi">Tính tiền compute theo giây.</span></li>
<li><span class="lang-en">Pauses databases and billing in inactive periods.</span><span class="lang-vi">Tự pause database và ngừng tính tiền trong giai đoạn không hoạt động.</span></li>
</ul></ul><li><span class="lang-en">Configure network:</span><span class="lang-vi">Cấu hình mạng:</span></li>
<ul><li><span class="lang-en">No access.</span><span class="lang-vi">Không cho truy cập.</span></li>
<li><span class="lang-en">Public/private endpoint.</span><span class="lang-vi">Public/private endpoint.</span></li>
<ul><li><span class="lang-en">You can &quot;Add current client IP address&quot;.</span><span class="lang-vi">Bạn có thể &quot;Add current client IP address&quot;.</span></li>
</ul><li><span class="lang-en">Choose whether to &quot;Allow Azure services and resources to access this server&quot; (for other Azure services).</span><span class="lang-vi">Chọn có &quot;Allow Azure services and resources to access this server&quot; hay không (cho các dịch vụ Azure khác).</span></li>
<ul><li><span class="lang-en">Or if not, you could allow specific Virtual Networks to have access.</span><span class="lang-vi">Nếu không, bạn có thể chỉ cho phép một số Virtual Network cụ thể truy cập.</span></li>
</ul></ul><li><span class="lang-en">Connection policy</span><span class="lang-vi">Connection policy</span></li>
<ul><li><span class="lang-en">Proxy – uses Azure SQL Database gateways,</span><span class="lang-vi">Proxy — đi qua gateway của Azure SQL Database,</span></li>
<li><span class="lang-en">Redirect – Establish directly to the database node,</span><span class="lang-vi">Redirect — kết nối thẳng tới database node,</span></li>
<li><span class="lang-en">Default – Redirect if connection originates inside Azure, and Proxy if outside Azure.</span><span class="lang-vi">Default — Redirect nếu kết nối xuất phát từ trong Azure, Proxy nếu từ ngoài Azure.</span></li>
</ul><li><span class="lang-en">You can have sample data, or data based on the restore from a geo-replicated backup.</span><span class="lang-vi">Bạn có thể dùng dữ liệu mẫu, hoặc dữ liệu khôi phục từ một bản backup geo-replicated.</span></li>
<li><span class="lang-en">Choose database collation:</span><span class="lang-vi">Chọn collation cho database:</span></li>
<ul><li><span class="lang-en">CS/CI = case-[in]sensitive,</span><span class="lang-vi">CS/CI = phân biệt / không phân biệt chữ hoa thường,</span></li>
<li><span class="lang-en">AS/AI = accent-[in]sensitive.</span><span class="lang-vi">AS/AI = phân biệt / không phân biệt dấu.</span></li>
</ul><li><span class="lang-en">You can select a free trial of Azure Defender.</span><span class="lang-vi">Bạn có thể chọn dùng thử miễn phí Azure Defender.</span></li>
<ul><li><span class="lang-en">Identify and mitigate potential database vulnerabilities and threat detection.</span><span class="lang-vi">Phát hiện và giảm thiểu các lỗ hổng tiềm ẩn của database, cùng phát hiện mối đe dọa.</span></li>
</ul><li><span class="lang-en">It uses the Full Recovery model.</span><span class="lang-vi">Nó dùng Full Recovery model.</span></li>
<ul><li><span class="lang-en">This should not be changed for Azure SQL Database.</span><span class="lang-vi">Không nên thay đổi điều này với Azure SQL Database.</span></li>
</ul></ul></section>
<section id="s10"><h3><span class="n">10.</span> <span class="lang-en">configure Azure SQL Managed Instance for scale and performance</span><span class="lang-vi">cấu hình Azure SQL Managed Instance để mở rộng và tối ưu hiệu năng</span><a class="anch" href="#s10" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Service Tier:</span><span class="lang-vi">Service Tier:</span></li>
<ul><li><span class="lang-en">General Purpose</span><span class="lang-vi">General Purpose</span></li>
<ul><li><span class="lang-en">Most workloads (default option),</span><span class="lang-vi">Cho hầu hết workload (lựa chọn mặc định),</span></li>
</ul><li><span class="lang-en">Business Critical</span><span class="lang-vi">Business Critical</span></li>
<ul><li><span class="lang-en">low-latency workloads</span><span class="lang-vi">workload cần độ trễ thấp</span></li>
<li><span class="lang-en">High resiliency to failures</span><span class="lang-vi">Độ bền cao trước sự cố</span></li>
<li><span class="lang-en">Fast Failovers</span><span class="lang-vi">Failover nhanh</span></li>
</ul></ul><li><span class="lang-en">Hardware Generation</span><span class="lang-vi">Hardware Generation</span></li>
<ul><li><span class="lang-en">Compute and memory limits.</span><span class="lang-vi">Giới hạn compute và memory.</span></li>
<li><span class="lang-en">Up to 80 vCores,</span><span class="lang-vi">Tối đa 80 vCore,</span></li>
<li><span class="lang-en">400 Gb memory,</span><span class="lang-vi">400 GB memory,</span></li>
<li><span class="lang-en">Up to 100 databases, and</span><span class="lang-vi">Tối đa 100 database, và</span></li>
<li><span class="lang-en">up to 16 Tb database size.</span><span class="lang-vi">dung lượng database tối đa 16 TB.</span></li>
</ul><li><span class="lang-en">Features in Azure MI not in Azure SQL Database include:</span><span class="lang-vi">Các tính năng có ở Azure MI nhưng không có ở Azure SQL Database gồm:</span></li>
<ul><li><span class="lang-en">Cross-database queries,</span><span class="lang-vi">Truy vấn liên database (cross-database queries),</span></li>
<li><span class="lang-en">Common language runtime (CLR)</span><span class="lang-vi">Common language runtime (CLR)</span></li>
<ul><li><span class="lang-en">The execution environment for .NET framework code (also known as &quot;managed code&quot;).</span><span class="lang-vi">Môi trường thực thi cho mã .NET framework (còn gọi là &quot;managed code&quot;).</span></li>
<li><span class="lang-en">CLR in SQL Server is called CLR integration.</span><span class="lang-vi">CLR trong SQL Server được gọi là CLR integration.</span></li>
</ul><li><span class="lang-en">SQL Agent, and</span><span class="lang-vi">SQL Agent, và</span></li>
<li><span class="lang-en">The msdb system database.</span><span class="lang-vi">Database hệ thống msdb.</span></li>
<li><span class="lang-en">You can manually make a copy-only backup of a database (not instance).</span><span class="lang-vi">Bạn có thể tự tạo copy-only backup cho một database (không phải cho cả instance).</span></li>
</ul><li><span class="lang-en">vCore compute model</span><span class="lang-vi">Mô hình compute theo vCore</span></li>
<ul><li><span class="lang-en">SQL Managed Instances does not support the DTU-based purchased model.</span><span class="lang-vi">SQL Managed Instance không hỗ trợ mô hình mua theo DTU.</span></li>
<li><span class="lang-en">See topic 9 for more details of the vCore compute model.</span><span class="lang-vi">Xem mục 9 để biết chi tiết về mô hình compute theo vCore.</span></li>
<li><span class="lang-en">Cannot use Hyperscale in Azure SQL MI.</span><span class="lang-vi">Không dùng được Hyperscale trong Azure SQL MI.</span></li>
</ul><li><span class="lang-en">Deploys a dedicated ring (aka &quot;Virtual cluster&quot;) for your data.</span><span class="lang-vi">Triển khai một ring riêng (còn gọi là &quot;Virtual cluster&quot;) cho dữ liệu của bạn.</span></li>
<li><span class="lang-en">Tempdb</span><span class="lang-vi">Tempdb</span></li>
<ul><li><span class="lang-en">MI creates 12 files, regardless of the number of vCores.</span><span class="lang-vi">MI tạo 12 file, bất kể số vCore là bao nhiêu.</span></li>
</ul></ul></section>
<section id="s11"><h3><span class="n">11.</span> <span class="lang-en">configure SQL Server in Azure VMs for scale and performance</span><span class="lang-vi">cấu hình SQL Server trên Azure VM để mở rộng và tối ưu hiệu năng</span><a class="anch" href="#s11" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">SLA for Virtual Machines</span><span class="lang-vi">SLA cho Virtual Machine</span></li>
<ul><li><span class="lang-en">95% (18 days) - Standard HDD Managed Disks,</span><span class="lang-vi">95% (18 ngày) — Standard HDD Managed Disk,</span></li>
<li><span class="lang-en">99.5% (1.8 days) - Standard SSD Managed Disks,</span><span class="lang-vi">99,5% (1,8 ngày) — Standard SSD Managed Disk,</span></li>
<li><span class="lang-en">99.9% (8 hours) - Premium SSD or Ultra Disks,</span><span class="lang-vi">99,9% (8 giờ) — Premium SSD hoặc Ultra Disk,</span></li>
<li><span class="lang-en">99.95% - 2+ instances in the same Availability Set</span><span class="lang-vi">99,95% — từ 2 instance trở lên trong cùng một Availability Set</span></li>
<ul><li><span class="lang-en">Different computers in the same datacenter</span><span class="lang-vi">Các máy khác nhau trong cùng một datacenter</span></li>
</ul><li><span class="lang-en">99.99% - 2+ instances in 2+ Availability Zones in the same Azure region</span><span class="lang-vi">99,99% — từ 2 instance trở lên đặt trong từ 2 Availability Zone trở lên, cùng một Azure region</span></li>
<ul><li><span class="lang-en">Different physical datacenters, with independent power, cooling and networking.</span><span class="lang-vi">Các datacenter vật lý khác nhau, có nguồn điện, làm mát và mạng độc lập.</span></li>
</ul></ul><li><span class="lang-en">When to use SQL Server in Azure VMs:</span><span class="lang-vi">Khi nào nên dùng SQL Server trên Azure VM:</span></li>
<ul><li><span class="lang-en">When you need an older version of SQL Server or access to a Windows Operating System.</span><span class="lang-vi">Khi bạn cần một phiên bản SQL Server cũ hơn, hoặc cần truy cập hệ điều hành Windows.</span></li>
<li><span class="lang-en">When you need SSAS (Analysis), SSIS (Integration) or SSRS (Reporting) (non Azure services),</span><span class="lang-vi">Khi bạn cần SSAS (Analysis), SSIS (Integration) hoặc SSRS (Reporting) — không phải dịch vụ Azure,</span></li>
<li><span class="lang-en">When you need features not available in Azure SQL Database or Azure MI.</span><span class="lang-vi">Khi bạn cần tính năng không có trong Azure SQL Database hoặc Azure MI.</span></li>
</ul><li><span class="lang-en">Best practices – VM Size:</span><span class="lang-vi">Best practice — kích thước VM:</span></li>
<ul><li><span class="lang-en">Choose at least 4 vCPUs.</span><span class="lang-vi">Chọn ít nhất 4 vCPU.</span></li>
<li><span class="lang-en">Memory optimized VMs for best SQL Server workloads.</span><span class="lang-vi">VM memory optimized cho workload SQL Server tốt nhất.</span></li>
<li><span class="lang-en">Higher memory-to-vCore ratio for mission critical or data warehouses.</span><span class="lang-vi">Tỉ lệ memory trên vCore cao hơn cho hệ thống trọng yếu hoặc data warehouse.</span></li>
<li><span class="lang-en">Azure VM marketplace images are configured for optimal SQL Server performance.</span><span class="lang-vi">Image VM trên Azure marketplace đã được cấu hình sẵn cho hiệu năng SQL Server tối ưu.</span></li>
</ul><li><span class="lang-en">Best practice – Storage:</span><span class="lang-vi">Best practice — lưu trữ:</span></li>
<ul><li><span class="lang-en">Place data, log and tempdb files on separate drives.</span><span class="lang-vi">Đặt file data, log và tempdb trên các ổ riêng biệt.</span></li>
<ul><li><span class="lang-en">Data drives should be put on Premium P30 and P40 disks for cache support.</span><span class="lang-vi">Ổ chứa data nên đặt trên đĩa Premium P30 và P40 để có hỗ trợ cache.</span></li>
<li><span class="lang-en">Log drive should be put on Premium P3o to P80 disks, or Ultra disks for submillisecond latency.</span><span class="lang-vi">Ổ chứa log nên đặt trên đĩa Premium P30 tới P80, hoặc Ultra disk nếu cần độ trễ dưới một mili giây.</span></li>
<li><span class="lang-en">Tempdb should be placed on the D drive on the SSD.</span><span class="lang-vi">Tempdb nên đặt trên ổ D trên SSD.</span></li>
</ul><li><span class="lang-en">Stripe multiple data disks using Storage Spaces (similar to RAID, but done in software) to increase I/O bandwidth. 3+ drives form a storage pool. This should be done by:</span><span class="lang-vi">Stripe nhiều đĩa data bằng Storage Spaces (tương tự RAID nhưng làm bằng phần mềm) để tăng băng thông I/O. Từ 3 ổ trở lên tạo thành một storage pool. Các bước:</span></li>
<ul><li><span class="lang-en">Creating the individual disks,</span><span class="lang-vi">Tạo từng đĩa riêng lẻ,</span></li>
<li><span class="lang-en">Creating a storage pool,</span><span class="lang-vi">Tạo một storage pool,</span></li>
<li><span class="lang-en">Creating a single virtual disk, from these resiliency types.</span><span class="lang-vi">Tạo một virtual disk duy nhất, chọn một trong các kiểu resiliency sau.</span></li>
<ul><li><span class="lang-en">Simple</span><span class="lang-vi">Simple</span></li>
<ul><li><span class="lang-en">Needs at least 1 physical disk</span><span class="lang-vi">Cần tối thiểu 1 đĩa vật lý</span></li>
<li><span class="lang-en">Stripes data physical disks.</span><span class="lang-vi">Stripe dữ liệu trên các đĩa vật lý.</span></li>
<li><span class="lang-en">Maximizes disk capacity and increases throughput.</span><span class="lang-vi">Tối đa hóa dung lượng đĩa và tăng thông lượng.</span></li>
<li><span class="lang-en">No resiliency (does not protect from disk failure)</span><span class="lang-vi">Không có resiliency (không bảo vệ khi đĩa hỏng)</span></li>
<li><span class="lang-en">Use for high-performance where resiliency is not required by striping.</span><span class="lang-vi">Use for high-performance where resiliency is not required by striping.</span></li>
</ul><li><span class="lang-en">Mirror</span><span class="lang-vi">Mirror</span></li>
<ul><li><span class="lang-en">Needs at least 2 physical discs to protect from single disk failure.</span><span class="lang-vi">Cần tối thiểu 2 đĩa vật lý để chịu được hỏng một đĩa.</span></li>
<li><span class="lang-en">2-3 copies of the data.</span><span class="lang-vi">Giữ 2-3 bản sao dữ liệu.</span></li>
<li><span class="lang-en">Increases reliability, but reduces capacity.</span><span class="lang-vi">Tăng độ tin cậy nhưng giảm dung lượng.</span></li>
<li><span class="lang-en">Greater data throughput and lower access latency.</span><span class="lang-vi">Thông lượng dữ liệu cao hơn và độ trễ truy cập thấp hơn.</span></li>
<li><span class="lang-en">Use for most deployments.</span><span class="lang-vi">Use for most deployments.</span></li>
</ul><li><span class="lang-en">Parity</span><span class="lang-vi">Parity</span></li>
<ul><li><span class="lang-en">Needs at least 3 physical discs to protect from single disk failure.</span><span class="lang-vi">Cần tối thiểu 3 đĩa vật lý để chịu được hỏng một đĩa.</span></li>
<li><span class="lang-en">Stripes data and parity information across disks.</span><span class="lang-vi">Stripe cả dữ liệu lẫn thông tin parity trên các đĩa.</span></li>
<li><span class="lang-en">Increases reliability, but reduces capacity.</span><span class="lang-vi">Tăng độ tin cậy nhưng giảm dung lượng.</span></li>
<li><span class="lang-en">Increases resiliency.</span><span class="lang-vi">Tăng khả năng chịu lỗi.</span></li>
<li><span class="lang-en">User for archive and backups.</span><span class="lang-vi">Dùng cho lưu trữ dài hạn và backup.</span></li>
</ul></ul><li><span class="lang-en">Creating a volume.</span><span class="lang-vi">Tạo một volume.</span></li>
</ul><li><span class="lang-en">Use Local Redundant Storage, not Geo-redundant storage, on the storage account.</span><span class="lang-vi">Use Local Redundant Storage, not Geo-redundant storage, on the storage account.</span></li>
</ul><li><span class="lang-en">Six different series are available:</span><span class="lang-vi">Có sáu dòng VM khác nhau:</span></li>
<ul><li><span class="lang-en">General purpose – balanced CPU-to-memory.</span><span class="lang-vi">General purpose — cân bằng giữa CPU và memory.</span></li>
<ul><li><span class="lang-en">Good for testing and development, small to medium databases, and low to medium traffic web servers.</span><span class="lang-vi">Phù hợp cho kiểm thử và phát triển, database nhỏ đến vừa, và web server có lưu lượng thấp đến vừa.</span></li>
</ul><li><span class="lang-en">Compute optimized – high CPU.</span><span class="lang-vi">Compute optimized — CPU cao.</span></li>
<ul><li><span class="lang-en">Good for medium traffic web servers, network appliances, batch processes, and application servers.</span><span class="lang-vi">Hợp cho web server lưu lượng trung bình, network appliance, batch process và application server.</span></li>
</ul><li><span class="lang-en">Memory optimized – high memory (up to 4 Tb).</span><span class="lang-vi">Memory optimized — memory cao (lên tới 4 TB).</span></li>
<ul><li><span class="lang-en">Good for relational database servers, medium to large caches, and in-memory analytics.</span><span class="lang-vi">Hợp cho relational database server, cache vừa tới lớn, và in-memory analytics.</span></li>
</ul><li><span class="lang-en">Storage optimized – high disk throughput</span><span class="lang-vi">Storage optimized — thông lượng đĩa cao</span></li>
<ul><li><span class="lang-en">Good for Big Data, SQL, NoSQL databases, data warehousing and large transactional databases.</span><span class="lang-vi">Hợp cho Big Data, database SQL và NoSQL, data warehousing và database giao dịch lớn.</span></li>
</ul><li><span class="lang-en">GPU – specialized virtual machines</span><span class="lang-vi">GPU — máy ảo chuyên dụng</span></li>
<ul><li><span class="lang-en">heavy graphic rendering and video editing, as well as model training and inferencing (ND) with deep learning.</span><span class="lang-vi">kết xuất đồ họa nặng và dựng video, cũng như huấn luyện và suy luận mô hình (ND) với deep learning.</span></li>
</ul><li><span class="lang-en">High performance compute – fastest machines</span><span class="lang-vi">High performance compute — máy nhanh nhất</span></li>
<ul><li><span class="lang-en">Most powerful CPU virtual machines</span><span class="lang-vi">Máy ảo có CPU mạnh nhất</span></li>
</ul></ul><li><span class="lang-en">Best practices – SQL Server:</span><span class="lang-vi">Best practice — SQL Server:</span></li>
<ul><li><span class="lang-en">Enable database page compression where appropriate.</span><span class="lang-vi">Bật page compression cho database ở những chỗ phù hợp.</span></li>
<li><span class="lang-en">Enable backup compression and instant file initialization.</span><span class="lang-vi">Bật backup compression và instant file initialization.</span></li>
<li><span class="lang-en">Limit autogrowth and disable autoshrink.</span><span class="lang-vi">Giới hạn autogrowth và tắt autoshrink.</span></li>
<li><span class="lang-en">Use one tempdb data file per core, up to 8 files.</span><span class="lang-vi">Use one tempdb data file per core, up to 8 files.</span></li>
<li><span class="lang-en">Apply any cumulative updates for your version of SQL Server.</span><span class="lang-vi">Áp dụng các bản cumulative update cho phiên bản SQL Server của bạn.</span></li>
<li><span class="lang-en">Register with the SQL IaaS Agent Extension for:</span><span class="lang-vi">Đăng ký với SQL IaaS Agent Extension để có:</span></li>
<ul><li><span class="lang-en">Automated backup,</span><span class="lang-vi">Automated backup,</span></li>
<li><span class="lang-en">Automated patching,</span><span class="lang-vi">Automated patching,</span></li>
<li><span class="lang-en">Azure Key Vault integration,</span><span class="lang-vi">Tích hợp Azure Key Vault,</span></li>
<li><span class="lang-en">View information in Azure Portal about your SQL Server configuration, and more.</span><span class="lang-vi">Xem thông tin cấu hình SQL Server ngay trong Azure Portal, và nhiều thứ khác.</span></li>
<li><span class="lang-en">It is installed when you deploy an SQL Server VM from the Azure Marketplace.</span><span class="lang-vi">Extension này được cài sẵn khi bạn triển khai SQL Server VM từ Azure Marketplace.</span></li>
</ul><li><span class="lang-en">Enable Autoshutdown for development and test environments.</span><span class="lang-vi">Bật Autoshutdown cho môi trường phát triển và kiểm thử.</span></li>
</ul></ul></section>
<section id="s11-2"><h3><span class="n">11.</span> <span class="lang-en">configure storage and infrastructure resources</span><span class="lang-vi">cấu hình lưu trữ và tài nguyên hạ tầng</span><a class="anch" href="#s11-2" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Virtual Machines:</span><span class="lang-vi">Virtual Machine:</span></li>
<ul><li><span class="lang-en">When creating a VM, the &quot;SQL Server settings – Change configuration&quot; shows the storage.</span><span class="lang-vi">Khi tạo VM, mục &quot;SQL Server settings – Change configuration&quot; hiển thị phần lưu trữ.</span></li>
<li><span class="lang-en">Under &quot;Configure storage&quot;:</span><span class="lang-vi">Trong &quot;Configure storage&quot;:</span></li>
<ul><li><span class="lang-en">Select &quot;Transactional processing&quot; or &quot;Data warehousing&quot; – this changes your stripe configuration, optimising it for traditional OLTP workloads or analytic/reporting workloads.</span><span class="lang-vi">Select &quot;Transactional processing&quot; or &quot;Data warehousing&quot; – this changes your stripe configuration, optimising it for traditional OLTP workloads or analytic/reporting workloads.</span></li>
</ul><li><span class="lang-en">All of the SQL Server VM marketplace images follow default storage best practices.</span><span class="lang-vi">Toàn bộ image SQL Server VM trên marketplace đều theo best practice lưu trữ mặc định.</span></li>
<ul><li><span class="lang-en">See topic 11.</span><span class="lang-vi">Xem mục 11.</span></li>
</ul><li><span class="lang-en">After setting the VM, when using disk caching for Premium SSD, you can select the disk caching level (by going to Settings – Disks):</span><span class="lang-vi">Sau khi thiết lập VM, nếu dùng disk caching cho Premium SSD, bạn chọn được mức caching (vào Settings – Disks):</span></li>
<ul><li><span class="lang-en">It should be ReadOnly for SQL Server data files, as this improves reads from cache (VM memory and local SSD), which is much faster than from disk (Azure Blob storage).</span><span class="lang-vi">Nên đặt ReadOnly cho file data của SQL Server, vì đọc từ cache (memory của VM và SSD cục bộ) nhanh hơn nhiều so với đọc từ đĩa (Azure Blob storage).</span></li>
<li><span class="lang-en">It should be None for SQL Server Log files, as the data is written sequentially.</span><span class="lang-vi">Nên đặt None cho file log của SQL Server, vì dữ liệu được ghi tuần tự.</span></li>
<li><span class="lang-en">ReadWrite caching should not be used for the SQL Server files, as SQL Server does not support data consistency with this cache type. However, it could be used for the O/S drive, but it is not recommended to change the O/S caching level.</span><span class="lang-vi">KHÔNG nên dùng ReadWrite caching cho file SQL Server, vì SQL Server không đảm bảo nhất quán dữ liệu với kiểu cache này. Có thể dùng cho ổ hệ điều hành, nhưng không khuyến nghị thay đổi mức caching của ổ O/S.</span></li>
<li><span class="lang-en">Any changes will require a reboot.</span><span class="lang-vi">Mọi thay đổi đều cần khởi động lại máy.</span></li>
</ul></ul><li><span class="lang-en">For Azure SQL Database and Managed Instance:</span><span class="lang-vi">Với Azure SQL Database và Managed Instance:</span></li>
<ul><li><span class="lang-en">You can configure the storage by going to Settings – &quot;Compute + storage&quot;.</span><span class="lang-vi">Bạn cấu hình lưu trữ bằng cách vào Settings – &quot;Compute + storage&quot;.</span></li>
</ul></ul></section>
<section id="s-16"><h3><span class="n"></span> <span class="lang-en">calculate resource requirements</span><span class="lang-vi">tính toán yêu cầu tài nguyên</span><a class="anch" href="#s-16" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Purchasing models:</span><span class="lang-vi">Các mô hình mua:</span></li>
<ul><li><span class="lang-en">DTU Model – a package of compute, storage and IO resources.</span><span class="lang-vi">Mô hình DTU — một gói gộp gồm compute, storage và IO.</span></li>
<li><span class="lang-en">Simple, pre-configured resources.</span><span class="lang-vi">Đơn giản, tài nguyên đã cấu hình sẵn.</span></li>
</ul><li><span class="lang-en">vCore-based model:</span><span class="lang-vi">Mô hình theo vCore:</span></li>
<ul><li><span class="lang-en">Independent scaling of compute, storage and IO resources.</span><span class="lang-vi">Scale độc lập compute, storage và IO.</span></li>
<li><span class="lang-en">Flexible, control and transparency</span><span class="lang-vi">Linh hoạt, kiểm soát được và minh bạch</span></li>
<li><span class="lang-en">Use with Azure Hybrid Benefit for cost savings.</span><span class="lang-vi">Use with Azure Hybrid Benefit for cost savings.</span></li>
<li><span class="lang-en">Business Critical service tier includes 3 replicas (and about 2.7x price)</span><span class="lang-vi">Service tier Business Critical gồm 3 replica (và giá khoảng gấp 2,7 lần)</span></li>
</ul><li><span class="lang-en">For both model:</span><span class="lang-vi">Với cả hai mô hình:</span></li>
<ul><li><span class="lang-en">Single database.</span><span class="lang-vi">Single database.</span></li>
<ul><li><span class="lang-en">They can be moved in/out of elastic pool.</span><span class="lang-vi">Có thể chuyển vào/ra khỏi elastic pool.</span></li>
<li><span class="lang-en">They are isolated from others and is portable.</span><span class="lang-vi">Được cô lập với các database khác và có tính di động.</span></li>
<li><span class="lang-en">They can be dynamically (i.e. manually) scaled (but not autoscaled) up and down.</span><span class="lang-vi">Có thể scale lên/xuống một cách chủ động (tức thủ công), nhưng không autoscale.</span></li>
</ul><li><span class="lang-en">Elastic pool.</span><span class="lang-vi">Elastic pool.</span></li>
<ul><li><span class="lang-en">Assign resources which are shared by all pool databases.</span><span class="lang-vi">Cấp tài nguyên dùng chung cho mọi database trong pool.</span></li>
<li><span class="lang-en">Can dynamically scale or autoscale resources up/down.</span><span class="lang-vi">Có thể scale chủ động hoặc autoscale tài nguyên lên/xuống.</span></li>
<li><span class="lang-en">This is for multiple databases, good when they have variable usage patterns.</span><span class="lang-vi">Dành cho nhiều database, phù hợp khi chúng có mức sử dụng biến động.</span></li>
<li><span class="lang-en">Can add databases by going to the pool and clicking on &quot;+Add databases&quot;.</span><span class="lang-vi">Thêm database bằng cách vào pool và bấm &quot;+Add databases&quot;.</span></li>
</ul></ul><li><span class="lang-en">Storage costs:</span><span class="lang-vi">Chi phí lưu trữ:</span></li>
<ul><li><span class="lang-en">Based on amount provisioned – that’s your maximum database size.</span><span class="lang-vi">Tính theo dung lượng đã cấp phát — tức dung lượng database tối đa của bạn.</span></li>
</ul><li><span class="lang-en">Calculate costs from https://azure.microsoft.com/en-us/pricing/details/azure-sql-database/single/</span><span class="lang-vi">Tính chi phí tại https://azure.microsoft.com/en-us/pricing/details/azure-sql-database/single/</span></li>
<li><span class="lang-en">For DTU model, consider the following factors when determining how many DTUs you need:</span><span class="lang-vi">Với mô hình DTU, cân nhắc các yếu tố sau khi xác định cần bao nhiêu DTU:</span></li>
<ul><li><span class="lang-en">Maximum storage bytes [for all databases in the pool],</span><span class="lang-vi">Dung lượng lưu trữ tối đa (cho toàn bộ database trong pool),</span></li>
<li><span class="lang-en">Average DTU utilization x Number of databases,</span><span class="lang-vi">Mức sử dụng DTU trung bình nhân với số lượng database,</span></li>
<li><span class="lang-en">Number of concurrently peaking databases x Peak DTU Utilization per database.</span><span class="lang-vi">Số database đạt đỉnh cùng lúc nhân với mức DTU đỉnh của mỗi database.</span></li>
<li><span class="lang-en">Note: Unit price for eDTU pools is 1.5x the DTU unit price for a single database.</span><span class="lang-vi">Lưu ý: đơn giá của eDTU pool bằng 1,5 lần đơn giá DTU của một single database.</span></li>
<ul><li><span class="lang-en">Price for v-Core pools is at the same unit price as for single databases.</span><span class="lang-vi">Giá của vCore pool bằng đúng đơn giá của single database.</span></li>
</ul></ul></ul></section>
<section id="s13"><h3><span class="n">13.</span> <span class="lang-en">evaluate the use of compression for tables and indexes</span><span class="lang-vi">đánh giá việc dùng compression cho bảng và index</span><a class="anch" href="#s13" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Why compress?</span><span class="lang-vi">Vì sao phải nén?</span></li>
<ul><li><span class="lang-en">Reduced space – useful for data which is infrequently used.</span><span class="lang-vi">Giảm dung lượng — hữu ích với dữ liệu ít được dùng.</span></li>
<li><span class="lang-en">However, it requires extra time and CPU, both to compress and retrieve data.</span><span class="lang-vi">Tuy nhiên nó tốn thêm thời gian và CPU, cả khi nén lẫn khi lấy dữ liệu ra.</span></li>
<li><span class="lang-en">You can compress at the row level, the page (8,192 characters) level, or none.</span><span class="lang-vi">Bạn có thể nén ở mức row, mức page (8.192 ký tự), hoặc không nén.</span></li>
<ul><li><span class="lang-en">For row compression</span><span class="lang-vi">Với row compression</span></li>
<ul><li><span class="lang-en">Numeric types (apart from tinyint) storage will be reduced, maybe down to 1 byte. Tinyint already takes 1 byte.</span><span class="lang-vi">Các kiểu số (trừ tinyint) sẽ giảm dung lượng lưu trữ, có thể xuống còn 1 byte. Tinyint vốn đã chiếm 1 byte.</span></li>
<li><span class="lang-en">Some date types will be compressed: datetime, datetime2 and datetimeoffset. The others would not benefit from compression.</span><span class="lang-vi">Một số kiểu ngày tháng sẽ được nén: datetime, datetime2 và datetimeoffset. Các kiểu còn lại không hưởng lợi từ việc nén.</span></li>
<li><span class="lang-en">char and nchar will be compressed, up to 50% in English, German, Hindi and Turkish, but only up to 40% in Vietnamese and 15% in Japanese. varchar and nvarchar types would not benefit from compression.</span><span class="lang-vi">char và nchar sẽ được nén, tới 50% với tiếng Anh, Đức, Hindi và Thổ Nhĩ Kỳ, nhưng chỉ tới 40% với tiếng Việt và 15% với tiếng Nhật. Kiểu varchar và nvarchar không hưởng lợi từ việc nén.</span></li>
</ul><li><span class="lang-en">Page compression consists of three operations in this order:</span><span class="lang-vi">Page compression gồm ba thao tác theo thứ tự này:</span></li>
<ul><li><span class="lang-en">Row compression</span><span class="lang-vi">Row compression</span></li>
<li><span class="lang-en">Prefix compression</span><span class="lang-vi">Prefix compression</span></li>
<ul><li><span class="lang-en">If values in the same column start with the same characters, this can be optimised.</span><span class="lang-vi">Nếu các giá trị trong cùng một cột bắt đầu bằng những ký tự giống nhau thì có thể tối ưu được.</span></li>
<li><span class="lang-en">A common prefix per column is moved to the Compression Information structure immediately after the page header.</span><span class="lang-vi">Phần tiền tố chung của mỗi cột được chuyển vào cấu trúc Compression Information nằm ngay sau page header.</span></li>
<li><span class="lang-en">A reference is made in that value to the prefix, and the number of characters which are in common.</span><span class="lang-vi">Giá trị đó được thay bằng một tham chiếu tới tiền tố, kèm số ký tự trùng nhau.</span></li>
</ul><li><span class="lang-en">Dictionary compression</span><span class="lang-vi">Dictionary compression</span></li>
<ul><li><span class="lang-en">If values after prefix compression in any column are the same, this can be optimised.</span><span class="lang-vi">Nếu sau prefix compression mà các giá trị trong bất kỳ cột nào giống nhau thì có thể tối ưu tiếp.</span></li>
<li><span class="lang-en">Again, these common values are moved to the Compression Information structure, and a reference is made.</span><span class="lang-vi">Các giá trị chung này cũng được chuyển vào cấu trúc Compression Information và thay bằng tham chiếu.</span></li>
</ul><li><span class="lang-en">Pages are uncompressed at first. Page compression is only used when additional rows can be fitted on a full page.</span><span class="lang-vi">Ban đầu page chưa được nén. Page compression chỉ được áp dụng khi có thể nhét thêm dòng vào một page đã đầy.</span></li>
</ul></ul><li><span class="lang-en">Compression does not affect backup and restore.</span><span class="lang-vi">Compression không ảnh hưởng tới backup và restore.</span></li>
</ul><li><span class="lang-en">Available in:</span><span class="lang-vi">Có ở:</span></li>
<ul><li><span class="lang-en">Azure SQL Database, Azure SQL MI and</span><span class="lang-vi">Azure SQL Database, Azure SQL MI và</span></li>
<li><span class="lang-en">SQL Server on VMs</span><span class="lang-vi">SQL Server trên VM</span></li>
<ul><li><span class="lang-en">from SQL Server 2016 SP1 in all editions, and</span><span class="lang-vi">từ SQL Server 2016 SP1 trở đi ở mọi edition, và</span></li>
<li><span class="lang-en">before than, only in the Enterprise edition.</span><span class="lang-vi">trước đó thì chỉ có ở bản Enterprise.</span></li>
</ul></ul><li><span class="lang-en">You can compress:</span><span class="lang-vi">Bạn có thể nén:</span></li>
<ul><li><span class="lang-en">Tables stored with a clustered index or without (a heap).</span><span class="lang-vi">Bảng có clustered index hoặc không có (heap).</span></li>
<ul><li><span class="lang-en">You cannot use data compression with tables which have SPARSE columns.</span><span class="lang-vi">Bạn KHÔNG dùng được data compression với bảng có cột SPARSE.</span></li>
<li><span class="lang-en">To change the compression option in a clustered index, you need to drop the clustered index, preferably OFFLINE, and then rebuild the table.</span><span class="lang-vi">Để đổi tùy chọn compression của một clustered index, bạn phải drop clustered index đó — tốt nhất ở chế độ OFFLINE — rồi rebuild lại bảng.</span></li>
</ul><li><span class="lang-en">A complete nonclustered index.</span><span class="lang-vi">Một nonclustered index hoàn chỉnh.</span></li>
<ul><li><span class="lang-en">By default, they are not compressed.</span><span class="lang-vi">Mặc định chúng không được nén.</span></li>
</ul><li><span class="lang-en">A complete indexed view.</span><span class="lang-vi">Một indexed view hoàn chỉnh.</span></li>
</ul><li><span class="lang-en">You cannot compress system tables.</span><span class="lang-vi">Bạn không nén được bảng hệ thống.</span></li>
<li><span class="lang-en">Different partitions can be compressed using different settings.</span><span class="lang-vi">Các partition khác nhau có thể nén với thiết lập khác nhau.</span></li>
<li><span class="lang-en">Would compression be useful?</span><span class="lang-vi">Nén có đáng không?</span></li>
<ul><li><span class="lang-en">The following storage procedure cannot be used in Azure SQL Database.</span><span class="lang-vi">Stored procedure sau KHÔNG dùng được trong Azure SQL Database.</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">EXEC sp_estimate_data_compression_savings
'SchemaName',
'TableName',</span><span class="lang-vi">EXEC sp_estimate_data_compression_savings
'SchemaName',
'TableName',</span></pre></li>
<ul><li><span class="lang-en">Index_ID – either zero for a Heap, 1 for a clustered Index, or &gt;1 for Non- clustered Index. NULL if a table, and not an index,</span><span class="lang-vi">Index_ID — bằng 0 nếu là Heap, 1 nếu là clustered index, lớn hơn 1 nếu là nonclustered index. NULL nếu là bảng chứ không phải index,</span></li>
<ul><li><span class="lang-en">To get the index number, use:</span><span class="lang-vi">Để lấy số hiệu index, dùng:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT name, index_id
FROM sys.indexes
WHERE OBJECT_NAME (object_id) = N'TableName';</span><span class="lang-vi">SELECT name, index_id
FROM sys.indexes
WHERE OBJECT_NAME (object_id) = N'TableName';</span></pre></li>
</ul></ul><li><span class="lang-en">PartitionNumber (or NULL)</span><span class="lang-vi">PartitionNumber (hoặc NULL)</span></li>
<ul><li><span class="lang-en">To get the partition number, use:</span><span class="lang-vi">Để lấy số hiệu partition, dùng:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT *
FROM sys.partitions
WHERE OBJECT_NAME (object_id) = N'TableName';</span><span class="lang-vi">SELECT *
FROM sys.partitions
WHERE OBJECT_NAME (object_id) = N'TableName';</span></pre></li>
</ul></ul><li><span class="lang-en">'ROW' (or 'PAGE', 'NONE')</span><span class="lang-vi">'ROW' (hoặc 'PAGE', 'NONE')</span></li>
</ul></ul></ul><li><span class="lang-en">To enable compression:</span><span class="lang-vi">Để bật compression:</span></li>
<ul><li><span class="lang-en">In SSMS</span><span class="lang-vi">Trong SSMS</span></li>
<ul><li><span class="lang-en">Right-hand click on the table or index, and go to Storage – Manage Compression</span><span class="lang-vi">Chuột phải vào bảng hoặc index, vào Storage – Manage Compression</span></li>
<li><span class="lang-en">Click next, and select the compression type for each partition.</span><span class="lang-vi">Bấm next, rồi chọn kiểu compression cho từng partition.</span></li>
<ul><li><span class="lang-en">You can also click on &quot;Use same compression type for all partitions&quot;.</span><span class="lang-vi">Bạn cũng có thể bấm &quot;Use same compression type for all partitions&quot;.</span></li>
<li><span class="lang-en">You can also click on &quot;Calculate&quot; to calculate space requirements (not Azure SQL Database).</span><span class="lang-vi">Bạn cũng có thể bấm &quot;Calculate&quot; để tính dung lượng cần (không có ở Azure SQL Database).</span></li>
</ul><li><span class="lang-en">Select whether to run immediately or to create a script (to a file, clipboard, or new query window).</span><span class="lang-vi">Select whether to run immediately or to create a script (to a file, clipboard, or new query window).</span></li>
<ul><li><span class="lang-en">If using this on a VM, you may also get &quot;Schedule – you could select: one time, recurring (Daily, Weekly or Monthly), when SQL Server Agent starts, or whenever the CPUs become idle.</span><span class="lang-vi">Nếu làm trên VM, bạn còn có thêm &quot;Schedule&quot; — chọn được: one time, recurring (Daily, Weekly hoặc Monthly), khi SQL Server Agent khởi động, hoặc khi CPU rảnh.</span></li>
</ul></ul><li><span class="lang-en">In T-SQL - table</span><span class="lang-vi">Bằng T-SQL — với bảng</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER TABLE Schema.TableName
REBUILD PARTITION = 1 | ALL WITH (DATA_COMPRESSION = PAGE | ROW | NONE);</span><span class="lang-vi">ALTER TABLE Schema.TableName
REBUILD PARTITION = 1 | ALL WITH (DATA_COMPRESSION = PAGE | ROW | NONE);</span></pre></li>
</ul><li><span class="lang-en">In T-SQL – index</span><span class="lang-vi">Bằng T-SQL — với index</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER INDEX IndexName ON Schema.TableName
REBUILD PARTITION = ALL WITH (DATA_COMPRESSION = PAGE | ROW | NONE);</span><span class="lang-vi">ALTER INDEX IndexName ON Schema.TableName
REBUILD PARTITION = ALL WITH (DATA_COMPRESSION = PAGE | ROW | NONE);</span></pre></li>
</ul></ul><li><span class="lang-en">For columnstore objects:</span><span class="lang-vi">Với đối tượng columnstore:</span></li>
<ul><li><span class="lang-en">Initially used in data warehouses, but then expanded.</span><span class="lang-vi">Ban đầu dùng trong data warehouse, sau đó mở rộng ra.</span></li>
<li><span class="lang-en">Columns are always compressed.</span><span class="lang-vi">Các cột luôn được nén.</span></li>
<li><span class="lang-en">Indexes work best when you scan large amounts of data, like fact tables in data warehouses.</span><span class="lang-vi">Index hoạt động tốt nhất khi bạn quét lượng dữ liệu lớn, như bảng fact trong data warehouse.</span></li>
<ul><li><span class="lang-en">They are generally clustered. Non-clustered only uses when you have a data type not supported by a clustered index – e.g. XML, text and image.</span><span class="lang-vi">Chúng thường là clustered. Chỉ dùng non-clustered khi có kiểu dữ liệu mà clustered index không hỗ trợ — ví dụ XML, text và image.</span></li>
</ul><li><span class="lang-en">They can be further compressed using archival compression.</span><span class="lang-vi">Có thể nén thêm nữa bằng archival compression.</span></li>
<ul><li><span class="lang-en">Best used when the data is not often read, but you need the data to be retained for regulatory or business reasons.</span><span class="lang-vi">Dùng tốt nhất khi dữ liệu ít khi đọc nhưng vẫn phải giữ vì lý do pháp lý hoặc nghiệp vụ.</span></li>
<li><span class="lang-en">Saves space, but there is a high CPU cost to uncompressing it, which is more than any I/O saving.</span><span class="lang-vi">Tiết kiệm dung lượng, nhưng chi phí CPU để giải nén rất cao, vượt cả phần I/O tiết kiệm được.</span></li>
</ul></ul></ul></section>
<section id="s14"><h3><span class="n">14.</span> <span class="lang-en">evaluate requirements for the migration</span><span class="lang-vi">đánh giá yêu cầu cho việc migration</span><a class="anch" href="#s14" title="Link tới mục này">#</a></h3>
<ul><ul><li><span class="lang-en">What workloads you intend to migrate.</span><span class="lang-vi">Bạn định migrate những workload nào.</span></li>
<li><span class="lang-en">The actual resource requirements:</span><span class="lang-vi">Yêu cầu tài nguyên thực tế:</span></li>
<ul><li><span class="lang-en">Hard drive space,</span><span class="lang-vi">Dung lượng ổ cứng,</span></li>
<li><span class="lang-en">Compute size (processing power),</span><span class="lang-vi">Kích thước compute (năng lực xử lý),</span></li>
<li><span class="lang-en">Version of SQL Server needed.</span><span class="lang-vi">Phiên bản SQL Server cần dùng.</span></li>
<ul><li><span class="lang-en">This will impact on whether you can use Azure SQL Database/Managed Instance, or whether you need a VM.</span><span class="lang-vi">Điều này quyết định bạn dùng được Azure SQL Database/Managed Instance hay bắt buộc phải dùng VM.</span></li>
</ul><li><span class="lang-en">Version of Windows Server needed (if any).</span><span class="lang-vi">Phiên bản Windows Server cần dùng (nếu có).</span></li>
</ul><li><span class="lang-en">Downtime allowances</span><span class="lang-vi">Mức downtime được phép</span></li>
<ul><li><span class="lang-en">Are you allowed any downtime at all? If not, you need to do an online migration.</span><span class="lang-vi">Bạn có được phép downtime chút nào không? Nếu không thì phải migrate online.</span></li>
</ul><li><span class="lang-en">Dependences between databases, and between databases and applications.</span><span class="lang-vi">Các phụ thuộc giữa các database, và giữa database với ứng dụng.</span></li>
<li><span class="lang-en">Security requirements</span><span class="lang-vi">Yêu cầu về bảo mật</span></li>
<li><span class="lang-en">Backup and restore requirements</span><span class="lang-vi">Backup and restore requirements</span></li>
<li><span class="lang-en">Current limitations, and future limitations.</span><span class="lang-vi">Các giới hạn hiện tại và giới hạn trong tương lai.</span></li>
<li><span class="lang-en">Location for data storage (e.g. GDPR, California Consumer Privacy Act, or similar requirements)</span><span class="lang-vi">Nơi lưu trữ dữ liệu (ví dụ GDPR, California Consumer Privacy Act, hoặc các quy định tương tự)</span></li>
</ul></ul></section>
<section id="s15"><h3><span class="n">15.</span> <span class="lang-en">evaluate offline or online migration strategies</span><span class="lang-vi">đánh giá chiến lược migration offline hay online</span><a class="anch" href="#s15" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Do you need instead to lift and shift SQL Server to a Virtual Machine?</span><span class="lang-vi">Bạn chỉ cần lift-and-shift SQL Server sang một Virtual Machine?</span></li>
<ul><li><span class="lang-en">If so, use Azure Migrate.</span><span class="lang-vi">Nếu vậy, dùng Azure Migrate.</span></li>
<li><span class="lang-en">It can also discover and assess SQL data estate at scale (across your data center).</span><span class="lang-vi">Nó cũng có thể phát hiện và đánh giá toàn bộ SQL data estate ở quy mô lớn (trên khắp datacenter của bạn).</span></li>
<li><span class="lang-en">Get Azure SQL deployment recommendations, target sizing and monthly estimates.</span><span class="lang-vi">Nhận khuyến nghị triển khai Azure SQL, kích thước đích và ước tính chi phí hằng tháng.</span></li>
</ul><li><span class="lang-en">Do you need to migrate non-SQL objects, such as Access, DB2, MySQL, Oracle and SAP ASE databases to SQL Server or Azure SQL?</span><span class="lang-vi">Bạn cần migrate các đối tượng không phải SQL Server, như Access, DB2, MySQL, Oracle và SAP ASE, sang SQL Server hoặc Azure SQL?</span></li>
<ul><li><span class="lang-en">If so, use the SQL Server Migration Assistant (SSMA).</span><span class="lang-vi">Nếu vậy, dùng SQL Server Migration Assistant (SSMA).</span></li>
</ul><li><span class="lang-en">Do you need to migrate SQL Server objects to SQL Database/Managed Instance? If so:</span><span class="lang-vi">Bạn cần migrate đối tượng SQL Server sang SQL Database/Managed Instance? Nếu vậy:</span></li>
<ul><li><span class="lang-en">Do you need to compare workloads between the source and target SQL Server?</span><span class="lang-vi">Bạn có cần so sánh workload giữa SQL Server nguồn và đích không?</span></li>
<ul><li><span class="lang-en">If so, use the Database Experimentation Assistant (DEA).</span><span class="lang-vi">Nếu có, dùng Database Experimentation Assistant (DEA).</span></li>
<li><span class="lang-en">Capture the workload of a source SQL Server environment.</span><span class="lang-vi">Thu thập workload của môi trường SQL Server nguồn.</span></li>
<li><span class="lang-en">Identity compatibility issues.</span><span class="lang-vi">Phát hiện các vấn đề tương thích.</span></li>
</ul><li><span class="lang-en">Do you need to perform the migration itself, from SQL Server to Azure SQL Database or Managed Instance?</span><span class="lang-vi">Bạn cần thực hiện chính việc migrate, từ SQL Server sang Azure SQL Database hoặc Managed Instance?</span></li>
<ul><li><span class="lang-en">If so, use the Azure Database Migration Service (DMS).</span><span class="lang-vi">Nếu vậy, dùng Azure Database Migration Service (DMS).</span></li>
<li><span class="lang-en">Minimal downtime (especially if online using the Premium pricing tier). Good for large migrations.</span><span class="lang-vi">Downtime tối thiểu (đặc biệt nếu migrate online với hạng Premium). Phù hợp cho migration quy mô lớn.</span></li>
<li><span class="lang-en">You need:</span><span class="lang-vi">Bạn cần:</span></li>
<ul><li><span class="lang-en">To allow outbound point 443 (HTTPS) – you may also need 1434 (UDP).</span><span class="lang-vi">Mở outbound port 443 (HTTPS) — có thể cần thêm 1434 (UDP).</span></li>
<li><span class="lang-en">Enable the TCP/IP protocol.</span><span class="lang-vi">Bật giao thức TCP/IP.</span></li>
<li><span class="lang-en">Create an Azure SQL Database instance, have a server-level firewall rule to allow DMS access, and have CONTROL DATABASE permission on the target database.</span><span class="lang-vi">Create an Azure SQL Database instance, have a server-level firewall rule to allow DMS access, and have CONTROL DATABASE permission on the target database.</span></li>
<li><span class="lang-en">Have CONTROL SERVER permissions on the source.</span><span class="lang-vi">Có quyền CONTROL SERVER trên nguồn.</span></li>
<li><span class="lang-en">Does not initiate any backups, and uses existing full and log backups (not differential).</span><span class="lang-vi">Nó không tự khởi tạo backup nào, mà dùng các bản full và log backup sẵn có (không dùng differential).</span></li>
</ul></ul></ul><li><span class="lang-en">Do you need to migrate an open source database (MySQL, PostgreSQL, MariaDB) to the matching Azure PaaS service? The target decides the tool:</span><span class="lang-vi">Bạn cần migrate một database mã nguồn mở (MySQL, PostgreSQL, MariaDB) sang dịch vụ Azure PaaS tương ứng? Đích đến quyết định công cụ nào được dùng:</span></li>
<ul><li><span class="lang-en">MySQL to Azure Database for MySQL flexible server: use Azure Database Migration Service (DMS) – offline and online are both GA.</span><span class="lang-vi">MySQL sang Azure Database for MySQL flexible server: dùng Azure Database Migration Service (DMS) — cả offline và online đều đã GA.</span></li>
<li><span class="lang-en">PostgreSQL to Azure Database for PostgreSQL flexible server: use the Migration service built into Azure Database for PostgreSQL, not DMS (DMS does not support offline PostgreSQL migrations).</span><span class="lang-vi">PostgreSQL sang Azure Database for PostgreSQL flexible server: dùng Migration service tích hợp sẵn trong Azure Database for PostgreSQL, không dùng DMS (DMS không hỗ trợ migrate PostgreSQL offline).</span></li>
<li><span class="lang-en">MariaDB: Azure Database for MariaDB was retired on 19 September 2025, so the target is Azure Database for MySQL flexible server.</span><span class="lang-vi">MariaDB: Azure Database for MariaDB đã bị khai tử ngày 19/09/2025, nên đích đến là Azure Database for MySQL flexible server.</span></li>
<li><span class="lang-en">Careful: MySQL appears twice. MySQL to Azure SQL (a different engine) uses SSMA to convert the schema; MySQL to Azure Database for MySQL (the same engine) uses DMS.</span><span class="lang-vi">Lưu ý: MySQL xuất hiện ở hai nhánh. MySQL sang Azure SQL (khác engine) thì dùng SSMA để convert schema; MySQL sang Azure Database for MySQL (cùng engine) thì dùng DMS.</span></li>
<li class="stale"><span class="lang-en"><b>Corrected vs the source PDF (p.21).</b> The PDF asks &quot;migrate open source databases, such as MySQL, PostgreSQL or MariaDB? If so, use DMS&quot; and nests it under the SQL Server branch, so the DMS prerequisites above were attached to the wrong question. Per Microsoft Learn (Feb 2026): DMS does not support offline PostgreSQL migrations, and MariaDB is no longer a DMS scenario. The branch has been split by target above.</span><span class="lang-vi"><b>Đã sửa so với PDF gốc (tr.21).</b> PDF hỏi &quot;migrate open source databases, such as MySQL, PostgreSQL or MariaDB? If so, use DMS&quot; và lồng nó trong nhánh SQL Server, khiến các điều kiện DMS ở trên bị gắn sai câu hỏi. Theo Microsoft Learn (02/2026): DMS không hỗ trợ migrate PostgreSQL offline, và MariaDB không còn là scenario của DMS. Nhánh này đã được tách theo target ở trên.</span></li>
</ul></ul></section>
<section id="s16"><h3><span class="n">16, , 21.</span> <span class="lang-en">implement an online migration strategy</span><span class="lang-vi">triển khai chiến lược migration online</span><a class="anch" href="#s16" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">See topic 20.</span><span class="lang-vi">Xem mục 20.</span></li>
</ul></section>
<section id="s16-2"><h3><span class="n">16, , 21.</span> <span class="lang-en">implement an offline migration strategy</span><span class="lang-vi">triển khai chiến lược migration offline</span><a class="anch" href="#s16-2" title="Link tới mục này">#</a></h3>
<ul><li class="stale"><span class="lang-en"><b>Data Migration Assistant (DMA) was retired on 16 July 2025</b> and its documentation is archived, so the &quot;Download the Data Migration Assistant&quot; and &quot;In Data Migration Assistant, +New / Assessment&quot; steps below no longer reflect a usable tool. For assessment today: Azure Migrate (whole estate at scale), SQL Server migration in Azure Arc, or VS Code with the MSSQL extension. The migration itself is still done with DMS, as described.</span><span class="lang-vi"><b>Data Migration Assistant (DMA) đã bị khai tử ngày 16/07/2025</b> và tài liệu đã bị archive, nên các bước &quot;Tải Data Migration Assistant&quot; và &quot;Trong Data Migration Assistant, +New / Assessment&quot; bên dưới không còn ứng với công cụ dùng được nữa. Để assess ở thời điểm hiện tại: Azure Migrate (quét cả estate ở quy mô lớn), SQL Server migration in Azure Arc, hoặc VS Code với extension MSSQL. Phần migrate thì vẫn dùng DMS như mô tả.</span></li>
<li><span class="lang-en">Migrating from SQL Server to Azure SQL Database - Prerequisites:</span><span class="lang-vi">Migrate từ SQL Server sang Azure SQL Database — điều kiện tiên quyết:</span></li>
<ul><li><span class="lang-en">Enable TCP/IP protocol on your SQL Server instance.</span><span class="lang-vi">Bật giao thức TCP/IP trên instance SQL Server của bạn.</span></li>
<li><span class="lang-en">Download the Data Migration Assistant.</span><span class="lang-vi">Tải Data Migration Assistant.</span></li>
<li><span class="lang-en">Create a Virtual Network for the Azure Database Migration Service using either ExpressRoute or VPN.</span><span class="lang-vi">Create a Virtual Network for the Azure Database Migration Service using either ExpressRoute or VPN.</span></li>
<li><span class="lang-en">Enable outbound port 443 of ServiceTag for ServiceBus, Storage and AzureMonitor.</span><span class="lang-vi">Mở outbound port 443 của ServiceTag cho ServiceBus, Storage và AzureMonitor.</span></li>
<li><span class="lang-en">Allow database engine access in Windows firewall, and open the Windows firewall to TCP port 1433 (unless you have changed it). You may also need to have UDP port 1434.</span><span class="lang-vi">Cho phép truy cập database engine trong Windows firewall, và mở TCP port 1433 (trừ khi bạn đã đổi). Có thể cần thêm UDP port 1434.</span></li>
<ul><li><span class="lang-en">Note: port 3306 is for MySQL and 5432 is for PostgreSQL.</span><span class="lang-vi">Lưu ý: port 3306 là của MySQL và 5432 là của PostgreSQL.</span></li>
</ul><li><span class="lang-en">Create a server-level IP firewall rule to allow Azure Database Migration Service access.</span><span class="lang-vi">Create a server-level IP firewall rule to allow Azure Database Migration Service access.</span></li>
<li><span class="lang-en">Your credentials need CONTROL SERVER on the SQL Server instance, and CONTROL DATABASE on Azure SQL.</span><span class="lang-vi">Tài khoản của bạn cần CONTROL SERVER trên instance SQL Server, và CONTROL DATABASE trên Azure SQL.</span></li>
</ul><li><span class="lang-en">Check for blocking issues:</span><span class="lang-vi">Kiểm tra các vấn đề gây chặn:</span></li>
<ul><li><span class="lang-en">In Data Migration Assistant, select +New and Assessment, and enter a project name.</span><span class="lang-vi">Trong Data Migration Assistant, chọn +New rồi Assessment, và nhập tên project.</span></li>
<li><span class="lang-en">Select Database Engine, SQL Server and Azure SQL Database, and either/both:</span><span class="lang-vi">Select Database Engine, SQL Server and Azure SQL Database, and either/both:</span></li>
<ul><li><span class="lang-en">Check database compatibility – identifies partially supported or unsupported features which may block migration. There will be recommendations.</span><span class="lang-vi">Check database compatibility — phát hiện những tính năng chỉ được hỗ trợ một phần hoặc không hỗ trợ, có thể chặn migration. Sẽ có khuyến nghị kèm theo.</span></li>
<li><span class="lang-en">Check feature parity – recommendations, different approached, and mitigating steps.</span><span class="lang-vi">Check feature parity — đưa ra khuyến nghị, các hướng tiếp cận khác và bước khắc phục.</span></li>
</ul><li><span class="lang-en">Click Next and provide connection details to SQL Server.</span><span class="lang-vi">Bấm Next và nhập thông tin kết nối tới SQL Server.</span></li>
<li><span class="lang-en">Select databases, click Add and Start Assessment.</span><span class="lang-vi">Select databases, click Add and Start Assessment.</span></li>
</ul><li><span class="lang-en">To migrate sample schema:</span><span class="lang-vi">Để migrate schema mẫu:</span></li>
<ul><li><span class="lang-en">In the DMA, click +New, Project Type, Migration.</span><span class="lang-vi">Trong DMA, bấm +New, Project Type, Migration.</span></li>
<li><span class="lang-en">Add a project name, SQL Server, and Azure SQL Database</span><span class="lang-vi">Add a project name, SQL Server, and Azure SQL Database</span></li>
<li><span class="lang-en">Select “Schema only” in “Migration scope”.</span><span class="lang-vi">Select “Schema only” in “Migration scope”.</span></li>
<li><span class="lang-en">Click Create, and enter your SQL Server details.</span><span class="lang-vi">Bấm Create, và nhập thông tin SQL Server của bạn.</span></li>
<li><span class="lang-en">Click Next, then enter your Azure SQL details.</span><span class="lang-vi">Bấm Next, rồi nhập thông tin Azure SQL của bạn.</span></li>
<li><span class="lang-en">Click Connect, and select the relevant database.</span><span class="lang-vi">Bấm Connect, và chọn database tương ứng.</span></li>
<li><span class="lang-en">Click Next, and specify the schema objects to be deployed.</span><span class="lang-vi">Bấm Next, và chỉ định các đối tượng schema sẽ được triển khai.</span></li>
<ul><li><span class="lang-en">By default, all of them are selected.</span><span class="lang-vi">Mặc định tất cả đều được chọn.</span></li>
</ul><li><span class="lang-en">Click ”Generate SQL script” then “Deploy schema”.</span><span class="lang-vi">Bấm &quot;Generate SQL script&quot; rồi &quot;Deploy schema&quot;.</span></li>
</ul><li><span class="lang-en">Register the Microsoft.DataMigration resource provider</span><span class="lang-vi">Đăng ký resource provider Microsoft.DataMigration</span></li>
<ul><li><span class="lang-en">In the Azure portal, go to Subscriptions.</span><span class="lang-vi">Trong Azure portal, vào Subscriptions.</span></li>
<li><span class="lang-en">In the Azure Database Migration Service subscription, click on Resource providers.</span><span class="lang-vi">Trong subscription của Azure Database Migration Service, bấm Resource providers.</span></li>
<li><span class="lang-en">Find “Microsoft.DataMigration” and Register it.</span><span class="lang-vi">Tìm &quot;Microsoft.DataMigration&quot; và bấm Register.</span></li>
</ul><li><span class="lang-en">Create an instance of the Azure Database Migration Service</span><span class="lang-vi">Create an instance of the Azure Database Migration Service</span></li>
<ul><li><span class="lang-en">In the Azure portal, go to this service and click Create, and select:</span><span class="lang-vi">Trong Azure portal, vào dịch vụ này và bấm Create, rồi chọn:</span></li>
<ul><li><span class="lang-en">Subscription, Resource Group, Name</span><span class="lang-vi">Subscription, Resource Group, Name</span></li>
<li><span class="lang-en">Location, ”Azure” as Service mode, and</span><span class="lang-vi">Location, chọn &quot;Azure&quot; làm Service mode, và</span></li>
<li><span class="lang-en">Pricing tier (Standard is free)</span><span class="lang-vi">Pricing tier (Standard là miễn phí)</span></li>
<ul><li><span class="lang-en">Standard is free for offline (one-off) migration only.</span><span class="lang-vi">Standard miễn phí nhưng chỉ dùng cho migration offline (một lần).</span></li>
<li><span class="lang-en">Premium is about $1 for 3 hours. Allows for online (continuous migration) and offline migrations, and faster speeds.</span><span class="lang-vi">Premium khoảng 1 USD cho 3 giờ. Cho phép cả migration online (liên tục) lẫn offline, và tốc độ nhanh hơn.</span></li>
<li><span class="lang-en">You can have the 4 vCore Premium DMS free for 6 months. You can use it for a total of 1 year, and create 2 DMS services per subscription.</span><span class="lang-vi">Bạn được dùng miễn phí Premium DMS 4 vCore trong 6 tháng. Tổng thời gian dùng được là 1 năm, và tạo được 2 dịch vụ DMS cho mỗi subscription.</span></li>
</ul></ul><li><span class="lang-en">On ”Create Migration Service”, select an existing VN or create a new one.</span><span class="lang-vi">Ở màn hình &quot;Create Migration Service&quot;, chọn một Virtual Network sẵn có hoặc tạo mới.</span></li>
</ul><li><span class="lang-en">Create a migration project</span><span class="lang-vi">Create a migration project</span></li>
<ul><li><span class="lang-en">In the Azure portal, go to “Azure Database Migration Services”, select the relevant instance, and select ”New Migration Project”.</span><span class="lang-vi">Trong Azure portal, vào &quot;Azure Database Migration Services&quot;, chọn instance tương ứng, rồi chọn &quot;New Migration Project&quot;.</span></li>
<li><span class="lang-en">Add a project name, SQL Server, Azure SQL Database, and Data migration.</span><span class="lang-vi">Add a project name, SQL Server, Azure SQL Database, and Data migration.</span></li>
<li><span class="lang-en">Click on “Create and run activity”.</span><span class="lang-vi">Bấm &quot;Create and run activity&quot;.</span></li>
</ul><li><span class="lang-en">Enter source settings</span><span class="lang-vi">Nhập thiết lập nguồn</span></li>
<ul><li><span class="lang-en">Enter connection details (Fully Qualified Domain Name or IP Address),</span><span class="lang-vi">Nhập thông tin kết nối (Fully Qualified Domain Name hoặc địa chỉ IP),</span></li>
<li><span class="lang-en">If you haven’t a trusted certificate, check “Trust server certificate”.</span><span class="lang-vi">Nếu bạn chưa có certificate tin cậy, tích &quot;Trust server certificate&quot;.</span></li>
<li><span class="lang-en">Select databases, note the Expected downtime, and click “Next: Select target:.</span><span class="lang-vi">Select databases, note the Expected downtime, and click “Next: Select target:.</span></li>
</ul><li><span class="lang-en">Enter target settings</span><span class="lang-vi">Nhập thiết lập đích</span></li>
<ul><li><span class="lang-en">Enter target details.</span><span class="lang-vi">Nhập thông tin đích.</span></li>
<li><span class="lang-en">Click “Next: Map to target databases”. This will be mapping to new databases, unless you have a database with the same name.</span><span class="lang-vi">Bấm &quot;Next: Map to target databases&quot;. Việc này sẽ ánh xạ sang các database mới, trừ khi bạn đã có database trùng tên.</span></li>
<li><span class="lang-en">Click “Next: Configuration migration settings and select tables to be affected.</span><span class="lang-vi">Bấm &quot;Next: Configuration migration settings&quot; và chọn các bảng bị ảnh hưởng.</span></li>
<li><span class="lang-en">Click “Next: Summary” and enter an Activity Name for the migration.</span><span class="lang-vi">Bấm &quot;Next: Summary&quot; và nhập Activity Name cho lần migration này.</span></li>
</ul><li><span class="lang-en">Run the migration:</span><span class="lang-vi">Chạy migration:</span></li>
<ul><li><span class="lang-en">Click “Start migration”. You can monitor the migration from there.</span><span class="lang-vi">Bấm &quot;Start migration&quot;. Bạn có thể theo dõi tiến trình ngay tại đó.</span></li>
<li><span class="lang-en">Once complete, verify that the target database has been migrated.</span><span class="lang-vi">Khi xong, kiểm tra lại xem database đích đã được migrate chưa.</span></li>
</ul><li><span class="lang-en">Other options:</span><span class="lang-vi">Các phương án khác:</span></li>
<ul><li><span class="lang-en">Bulk Copy Program (bcp) can be used for connecting from on-prem or a VM to Azure SQL.</span><span class="lang-vi">Bulk Copy Program (bcp) dùng để kết nối từ on-prem hoặc VM tới Azure SQL.</span></li>
<li><span class="lang-en">BULK INSERT – loading data from Azure Blob storage.</span><span class="lang-vi">BULK INSERT — nạp dữ liệu từ Azure Blob storage.</span></li>
<li><span class="lang-en">SSIS packages – ETL (extract, transform and load).</span><span class="lang-vi">Gói SSIS — ETL (extract, transform và load).</span></li>
<li><span class="lang-en">Spark or Azure Data Factory</span><span class="lang-vi">Spark hoặc Azure Data Factory</span></li>
</ul></ul></section>
<section id="s18"><h3><span class="n">18.</span> <span class="lang-en">Perform post migration validations</span><span class="lang-vi">Thực hiện kiểm định sau migration</span><a class="anch" href="#s18" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Create validation tests</span><span class="lang-vi">Create validation tests</span></li>
<ul><li><span class="lang-en">Use SQL queries against both source and target databases.</span><span class="lang-vi">Use SQL queries against both source and target databases.</span></li>
</ul><li><span class="lang-en">Create performance tests</span><span class="lang-vi">Create performance tests</span></li>
<ul><li><span class="lang-en">Against source and target databases.</span><span class="lang-vi">Chạy trên cả database nguồn và đích.</span></li>
</ul><li><span class="lang-en">Check your apps</span><span class="lang-vi">Kiểm tra lại các ứng dụng</span></li>
<ul><li><span class="lang-en">They might need updating (e.g. references to the target database)</span><span class="lang-vi">Chúng có thể cần cập nhật (ví dụ tham chiếu tới database đích)</span></li>
</ul><li><span class="lang-en">Investigate what effect the database compatibility level may have had</span><span class="lang-vi">Tìm hiểu xem database compatibility level đã gây ảnh hưởng gì</span></li>
<ul><li><span class="lang-en">Azure SQL Database and Azure SQL MI will always use the latest version.</span><span class="lang-vi">Azure SQL Database và Azure SQL MI luôn dùng phiên bản mới nhất.</span></li>
<li><span class="lang-en">Are existing queries using the best plan under the new compatibility level?</span><span class="lang-vi">Các query hiện có đã dùng plan tốt nhất ở compatibility level mới chưa?</span></li>
<ul><li><span class="lang-en">Are there regressions? If so, force the last known good plan.</span><span class="lang-vi">Có bị regression không? Nếu có thì force plan tốt gần nhất còn dùng được.</span></li>
<li><span class="lang-en">What about parameter sniffing? Do stored procedures need to be recompiled?</span><span class="lang-vi">Còn parameter sniffing thì sao? Có cần recompile stored procedure không?</span></li>
</ul><li><span class="lang-en">Look for features which work better in the source database but not in the target.</span><span class="lang-vi">Tìm những tính năng chạy tốt ở database nguồn nhưng không tốt ở đích.</span></li>
<li><span class="lang-en">Have a look for missing indexes.</span><span class="lang-vi">Kiểm tra xem có index nào bị thiếu không.</span></li>
<li><span class="lang-en">Are there new features in the latest database compatibility level?</span><span class="lang-vi">Compatibility level mới nhất có tính năng gì mới không?</span></li>
<ul><li><span class="lang-en">Some features may only be available once the database compatibility level has changed.</span><span class="lang-vi">Một số tính năng chỉ dùng được sau khi database compatibility level đã được đổi.</span></li>
</ul></ul><li><span class="lang-en">What about missing features?</span><span class="lang-vi">Còn những tính năng bị thiếu thì sao?</span></li>
<ul><li><span class="lang-en">Azure SQL Database has fewer features than Azure SQL MI, which has fewer features than on-prem or Azure VM.</span><span class="lang-vi">Azure SQL Database có ít tính năng hơn Azure SQL MI, và MI lại ít hơn on-prem hoặc Azure VM.</span></li>
</ul></ul></section>
<section id="s20"><h3><span class="n">20.</span> <span class="lang-en">set up SQL Data Sync</span><span class="lang-vi">thiết lập SQL Data Sync</span><a class="anch" href="#s20" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Azure SQL Data Sync allows you to synchronize data across multiple databases.</span><span class="lang-vi">Azure SQL Data Sync cho phép đồng bộ dữ liệu giữa nhiều database.</span></li>
<ul><li><span class="lang-en">Tables need to have a primary key, which cannot be changed (rows can be deleted/recreated instead).</span><span class="lang-vi">Bảng phải có primary key, và primary key này không được thay đổi (thay vào đó có thể xóa rồi tạo lại dòng).</span></li>
<li><span class="lang-en">Does not work with Azure SQL Managed Instance.</span><span class="lang-vi">Không hoạt động với Azure SQL Managed Instance.</span></li>
</ul><li><span class="lang-en">You define one Azure SQL Database as the Hub Database.</span><span class="lang-vi">Bạn chỉ định một Azure SQL Database làm Hub Database.</span></li>
<li><span class="lang-en">Sync Metadata Database contains the metadata and log for Data Sync. It is an Azure SQL Database in the same region as the Hub Database.</span><span class="lang-vi">Sync Metadata Database chứa metadata và log của Data Sync. Đây là một Azure SQL Database nằm cùng region với Hub Database.</span></li>
<ul><li><span class="lang-en">It should be an empty database. Data Sync creates tables and runs a frequent workload.</span><span class="lang-vi">Nó nên là một database rỗng. Data Sync sẽ tạo bảng và chạy workload với tần suất cao.</span></li>
</ul><li><span class="lang-en">Member databases are either Azure SQL Database or on-prem (not Managed Instance).</span><span class="lang-vi">Member database là Azure SQL Database hoặc database on-prem (không phải Managed Instance).</span></li>
<ul><li><span class="lang-en">If you are using on-prem, you will need to install and configure a local sync agent.</span><span class="lang-vi">Nếu dùng on-prem, bạn cần cài và cấu hình một local sync agent.</span></li>
<ul><li><span class="lang-en">Download it from https://www.microsoft.com/en- us/download/details.aspx?id=27693</span><span class="lang-vi">Tải tại https://www.microsoft.com/en-us/download/details.aspx?id=27693</span></li>
</ul></ul><li><span class="lang-en">A sync group has these properties:</span><span class="lang-vi">Một sync group có các thuộc tính sau:</span></li>
<ul><li><span class="lang-en">Sync Schema shows what data is synchronized.</span><span class="lang-vi">Sync Schema cho biết dữ liệu nào được đồng bộ.</span></li>
<li><span class="lang-en">Sync Direction can be both ways or only one direction.</span><span class="lang-vi">Sync Direction có thể là hai chiều hoặc chỉ một chiều.</span></li>
<li><span class="lang-en">Sync Interval is how often synchronization happens.</span><span class="lang-vi">Sync Interval là tần suất đồng bộ.</span></li>
<li><span class="lang-en">Conflict Resolution Policy is “Hub wins” or “Member wins”</span><span class="lang-vi">Conflict Resolution Policy là &quot;Hub wins&quot; hoặc &quot;Member wins&quot;</span></li>
<ul><li><span class="lang-en">But if there are several members, this depends on which member syncs first.</span><span class="lang-vi">Nhưng nếu có nhiều member thì kết quả phụ thuộc member nào đồng bộ trước.</span></li>
</ul></ul><li><span class="lang-en">Use in:</span><span class="lang-vi">Use in:</span></li>
<ul><li><span class="lang-en">Hybrid Data Synchronization.</span><span class="lang-vi">Đồng bộ dữ liệu hybrid.</span></li>
<li><span class="lang-en">Distributed Applications, including Globally Distributed Applications.</span><span class="lang-vi">Ứng dụng phân tán, kể cả ứng dụng phân tán toàn cầu.</span></li>
</ul><li><span class="lang-en">To set up a database and Sync Metadata Database:</span><span class="lang-vi">Để thiết lập database và Sync Metadata Database:</span></li>
<ul><li><span class="lang-en">Go to Azure portal – SQL databases.</span><span class="lang-vi">Vào Azure portal – SQL databases.</span></li>
<li><span class="lang-en">Go to the Hub database.</span><span class="lang-vi">Vào Hub database.</span></li>
<li><span class="lang-en">Go to “Sync to other databases”.</span><span class="lang-vi">Vào &quot;Sync to other databases&quot;.</span></li>
<li><span class="lang-en">Go to “New Sync Group”, and select:</span><span class="lang-vi">Vào &quot;New Sync Group&quot;, và chọn:</span></li>
<ul><li><span class="lang-en">Sync Group Name (not the database name),</span><span class="lang-vi">Sync Group Name (không phải tên database),</span></li>
<li><span class="lang-en">Sync Metadata Database (recommended that a new one is created),</span><span class="lang-vi">Sync Metadata Database (khuyến nghị tạo mới),</span></li>
<li><span class="lang-en">Automatic Sync (If on, choose from Seconds, Minutes, Hours or Days in Sync Frequency),</span><span class="lang-vi">Automatic Sync (nếu bật, chọn Seconds, Minutes, Hours hoặc Days trong Sync Frequency),</span></li>
<li><span class="lang-en">Conflict Resolution (Hub win or Member win),</span><span class="lang-vi">Conflict Resolution (Hub win hoặc Member win),</span></li>
<li><span class="lang-en">Use private link (a service managed private endpoint). If yes, you will later need to approve the Private Endpoint Connection.</span><span class="lang-vi">Use private link (a service managed private endpoint). If yes, you will later need to approve the Private Endpoint Connection.</span></li>
</ul></ul><li><span class="lang-en">To add sync members:</span><span class="lang-vi">Để thêm sync member:</span></li>
<ul><li><span class="lang-en">Open the Sync Group – Databases.</span><span class="lang-vi">Mở Sync Group – Databases.</span></li>
<li><span class="lang-en">Click on “Add an Azure Database” or “Add an On-Premises Database”.</span><span class="lang-vi">Bấm &quot;Add an Azure Database&quot; hoặc &quot;Add an On-Premises Database&quot;.</span></li>
</ul><li><span class="lang-en">For Azure Database, select:</span><span class="lang-vi">Với Azure Database, chọn:</span></li>
<ul><li><span class="lang-en">Sync Member Name (not the database name),</span><span class="lang-vi">Sync Member Name (không phải tên database),</span></li>
<li><span class="lang-en">Subscription,</span><span class="lang-vi">Subscription,</span></li>
<li><span class="lang-en">Azure SQL Server and Database,</span><span class="lang-vi">Azure SQL Server và Database,</span></li>
<li><span class="lang-en">Sync Directions (To the Hub, From the Hub, or Bi-directional Sync),</span><span class="lang-vi">Sync Directions (To the Hub, From the Hub, hoặc Bi-directional Sync),</span></li>
<li><span class="lang-en">Existing Username and Password for the member database,</span><span class="lang-vi">Username và Password sẵn có của member database,</span></li>
<li><span class="lang-en">Use private link.</span><span class="lang-vi">Use private link.</span></li>
</ul><li><span class="lang-en">For on-prem SQL Server database:</span><span class="lang-vi">Với database SQL Server on-prem:</span></li>
<ul><li><span class="lang-en">Select “Choose the Sync Agent Gateway”.</span><span class="lang-vi">Select “Choose the Sync Agent Gateway”.</span></li>
<li><span class="lang-en">Select “Existing agent” or “Create a new agent”. If new:</span><span class="lang-vi">Select “Existing agent” or “Create a new agent”. If new:</span></li>
<ul><li><span class="lang-en">Download the “Azure SQL Data Sync Agent”,</span><span class="lang-vi">Tải &quot;Azure SQL Data Sync Agent&quot;,</span></li>
<li><span class="lang-en">Enter an Agent Name,</span><span class="lang-vi">Nhập Agent Name,</span></li>
<li><span class="lang-en">Select “Create and Generate Key”, and copy it to the clipboard, then click OK.</span><span class="lang-vi">Select “Create and Generate Key”, and copy it to the clipboard, then click OK.</span></li>
</ul></ul><li><span class="lang-en">On the on-prem SQL Server:</span><span class="lang-vi">Trên SQL Server on-prem:</span></li>
<ul><li><span class="lang-en">Run the Client Sync Agent app.</span><span class="lang-vi">Chạy ứng dụng Client Sync Agent.</span></li>
<li><span class="lang-en">Click “Submit Agent Key”.</span><span class="lang-vi">Bấm &quot;Submit Agent Key&quot;.</span></li>
<li><span class="lang-en">In the “Sync Metadata Database Configuration”, enter credentials for the metadata database server.</span><span class="lang-vi">Trong &quot;Sync Metadata Database Configuration&quot;, nhập thông tin đăng nhập của server chứa metadata database.</span></li>
<ul><li><span class="lang-en">If automatically created, this will be the same server as the hub database.</span><span class="lang-vi">Nếu được tạo tự động thì đó chính là server của hub database.</span></li>
<li><span class="lang-en">You may need a firewall rule, created in the portal or in SSMS.</span><span class="lang-vi">Bạn có thể cần một firewall rule, tạo trong portal hoặc trong SSMS.</span></li>
</ul><li><span class="lang-en">Click Register.</span><span class="lang-vi">Bấm Register.</span></li>
<li><span class="lang-en">In the “SQL Server Configuration” box, connect using SQL Server or Windows authentication.</span><span class="lang-vi">Trong hộp &quot;SQL Server Configuration&quot;, kết nối bằng SQL Server hoặc Windows authentication.</span></li>
<li><span class="lang-en">Click Test connection and Save.</span><span class="lang-vi">Bấm Test connection rồi Save.</span></li>
</ul><li><span class="lang-en">In the Portal, in “Configure On-Premises page”:</span><span class="lang-vi">Trong Portal, ở trang &quot;Configure On-Premises&quot;:</span></li>
<ul><li><span class="lang-en">Select “Select the Database”.</span><span class="lang-vi">Select “Select the Database”.</span></li>
<li><span class="lang-en">Provide a name for the new sync member (not the database name) and the Sync Directions.</span><span class="lang-vi">Đặt tên cho sync member mới (không phải tên database) và chọn Sync Directions.</span></li>
</ul><li><span class="lang-en">To see if it works, go to the Database Sync Group page – Tables, and click on Refresh schema.</span><span class="lang-vi">Để kiểm tra xem có chạy không, vào trang Database Sync Group – Tables và bấm Refresh schema.</span></li>
<ul><li><span class="lang-en">It may take a while for the data to be refreshed.</span><span class="lang-vi">Có thể mất một lúc dữ liệu mới được làm mới.</span></li>
</ul></ul></section>
<section id="s22"><h3><span class="n">22.</span> <span class="lang-en">Implement a migration between Azure SQL services</span><span class="lang-vi">Thực hiện migration giữa các dịch vụ Azure SQL</span><a class="anch" href="#s22" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Migrating from SQL on Azure Virtual Machine to Azure SQL Database or Azure SQL Managed Instance</span><span class="lang-vi">Migrate từ SQL trên Azure Virtual Machine sang Azure SQL Database hoặc Azure SQL Managed Instance</span></li>
<ul><li><span class="lang-en">Exactly the same as migrating from SQL On Prem.</span><span class="lang-vi">Hoàn toàn giống như migrate từ SQL on-prem.</span></li>
</ul><li><span class="lang-en">Migrating from Azure SQL Database or Azure SQL Managed Instance</span><span class="lang-vi">Migrate từ Azure SQL Database hoặc Azure SQL Managed Instance</span></li>
<ul><li><span class="lang-en">You can export the data:</span><span class="lang-vi">Bạn có thể export dữ liệu:</span></li>
<ul><li><span class="lang-en">Right-hand click on the database in SSMS.</span><span class="lang-vi">Chuột phải vào database trong SSMS.</span></li>
<li><span class="lang-en">Go to Tasks – Export Data. This will open the SQL Server Import and Export Wizard (using SSIS).</span><span class="lang-vi">Vào Tasks – Export Data. Thao tác này mở SQL Server Import and Export Wizard (dùng SSIS).</span></li>
<li><span class="lang-en">Select your source and destination.</span><span class="lang-vi">Select your source and destination.</span></li>
<ul><li><span class="lang-en">Use the Data Source of SQL Server Native Client 11.0.</span><span class="lang-vi">Use the Data Source of SQL Server Native Client 11.0.</span></li>
</ul><li><span class="lang-en">This will copy data, but not views, stored procedures, functions etc.</span><span class="lang-vi">Cách này chỉ sao chép dữ liệu, không sao chép view, stored procedure, function...</span></li>
</ul><li><span class="lang-en">Using SSMS Data-tier applications (DAC):</span><span class="lang-vi">Dùng SSMS Data-tier application (DAC):</span></li>
<ul><li><span class="lang-en">Right hand click on the source database in SSMS and go to Tasks – Export Data-tier Application.</span><span class="lang-vi">Chuột phải vào database nguồn trong SSMS và vào Tasks – Export Data-tier Application.</span></li>
<li><span class="lang-en">This will create a bacpac (back-up package), an archive containing schema and data.</span><span class="lang-vi">Việc này tạo ra một bacpac (back-up package), là archive chứa cả schema lẫn dữ liệu.</span></li>
<li><span class="lang-en">Afterwards, go to the destination server in SSMS, right-hand click on the word &quot;Databases&quot; (not a particular database), and select Tasks – Import Data-tier Application.</span><span class="lang-vi">Sau đó, vào server đích trong SSMS, chuột phải vào chữ &quot;Databases&quot; (không phải một database cụ thể) và chọn Tasks – Import Data-tier Application.</span></li>
</ul></ul><li><span class="lang-en">Using the SQLPackage CLI utility, which also creates a bacpac.</span><span class="lang-vi">Dùng tiện ích dòng lệnh SQLPackage, cũng tạo ra bacpac.</span></li>
<ul><li><span class="lang-en">Open a Command Prompt, and run:</span><span class="lang-vi">Mở Command Prompt và chạy:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">cd C:\\Program Files\\Microsoft SQL Server\\160\\DAC\\bin</span><span class="lang-vi">cd C:\\Program Files\\Microsoft SQL Server\\160\\DAC\\bin</span></pre></li>
<ul><li><span class="lang-en">The number might need to be changed, depending on your view of SQL Server</span><span class="lang-vi">Con số có thể cần đổi, tùy phiên bản SQL Server của bạn</span></li>
</ul><li class="cb"><pre class="code"><span class="lang-en">sqlpackage.exe /a:Export /SourceServerName:servername.database.windows.net /SourceDatabaseName:dbname /SourceUser:username /SourcePassword:password /TargetFile:C:\\Users\\user\\Desktop\\backup150.bacpac</span><span class="lang-vi">sqlpackage.exe /a:Export /SourceServerName:servername.database.windows.net /SourceDatabaseName:dbname /SourceUser:username /SourcePassword:password /TargetFile:C:\\Users\\user\\Desktop\\backup150.bacpac</span></pre></li>
<ul><li><span class="lang-en">Details need to be filled in.</span><span class="lang-vi">Cần điền thông tin cụ thể vào.</span></li>
</ul></ul><li><span class="lang-en">Then to upload it, assuming you are still in the Command Prompt, run:</span><span class="lang-vi">Rồi để tải lên, vẫn trong Command Prompt, chạy:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">sqlpackage.exe /a:Import /TargetServerName:ManagedInstancename.appname.database.windows.n et /TargetDatabaseName:dbname /TargetUser:username /TargetPassword:password /SourceFile:C:\\Users\\user\\Desktop\\backup150.bacpac</span><span class="lang-vi">sqlpackage.exe /a:Import /TargetServerName:ManagedInstancename.appname.database.windows.n et /TargetDatabaseName:dbname /TargetUser:username /TargetPassword:password /SourceFile:C:\\Users\\user\\Desktop\\backup150.bacpac</span></pre></li>
</ul></ul><li><span class="lang-en">Using the Azure Portal</span><span class="lang-vi">Dùng Azure Portal</span></li>
<ul><li><span class="lang-en">Not supported for exporting from or importing into MI.</span><span class="lang-vi">Không hỗ trợ export từ MI hay import vào MI.</span></li>
<li><span class="lang-en">Uses Bacpac.</span><span class="lang-vi">Dùng Bacpac.</span></li>
<li><span class="lang-en">Go to the database, and click on Export Database.</span><span class="lang-vi">Vào database và bấm Export Database.</span></li>
<li><span class="lang-en">Select a previously created Standard Storage.</span><span class="lang-vi">Select a previously created Standard Storage.</span></li>
<li><span class="lang-en">You can check the export status by going to the Azure SQL Server (not the database) and go to Import/Export history.</span><span class="lang-vi">Bạn kiểm tra trạng thái export bằng cách vào Azure SQL Server (không phải database) và vào Import/Export history.</span></li>
<li><span class="lang-en">After it has exported, you can then use this for importing into MI using SSMS, or create a new Azure SQL Database using the Azure Portal.</span><span class="lang-vi">Sau khi export xong, bạn có thể dùng file đó để import vào MI bằng SSMS, hoặc tạo một Azure SQL Database mới qua Azure Portal.</span></li>
<ul><li><span class="lang-en">Go to the Azure SQL Server (not the database), and click Import database.</span><span class="lang-vi">Vào Azure SQL Server (không phải database) và bấm Import database.</span></li>
</ul></ul><li><span class="lang-en">You can also use PowerShell</span><span class="lang-vi">Bạn cũng có thể dùng PowerShell</span></li>
<ul><li><span class="lang-en">To export, you can use the New-AzSqlDatabaseExport cmdlet</span><span class="lang-vi">Để export, dùng cmdlet New-AzSqlDatabaseExport</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">$exportRequest = New-AzSqlDatabaseExport -ResourceGroupName $ResourceGroupName -ServerName $ServerName \`
-DatabaseName $DatabaseName -StorageKeytype $StorageKeytype - StorageKey $StorageKey -StorageUri $BacpacUri \`
-AdministratorLogin $creds.UserName -AdministratorLoginPassword $creds.Password</span><span class="lang-vi">$exportRequest = New-AzSqlDatabaseExport -ResourceGroupName $ResourceGroupName -ServerName $ServerName \`
-DatabaseName $DatabaseName -StorageKeytype $StorageKeytype - StorageKey $StorageKey -StorageUri $BacpacUri \`
-AdministratorLogin $creds.UserName -AdministratorLoginPassword $creds.Password</span></pre></li>
</ul><li><span class="lang-en">To import, you use the New-AzSqlDatabaseImport cmdlet:</span><span class="lang-vi">Để import, dùng cmdlet New-AzSqlDatabaseImport:</span></li>
<ul><ul><li class="cb"><pre class="code"><span class="lang-en">$importRequest = New-AzSqlDatabaseImport -ResourceGroupName &quot;&lt;resourceGroupName&gt;&quot; \`
-ServerName &quot;&lt;serverName&gt;&quot; -DatabaseName &quot;&lt;databaseName&gt;&quot; \`
-DatabaseMaxSizeBytes &quot;&lt;databaseSizeInBytes&gt;&quot; -StorageKeyType &quot;StorageAccessKey&quot; \`
-StorageKey $(Get-AzStorageAccountKey \`
-ResourceGroupName &quot;&lt;resourceGroupName&gt;&quot; - StorageAccountName &quot;&lt;storageAccountName&gt;&quot;).Value[0] \`
-StorageUri &quot;https://myStorageAccount.blob.core.windows.net/importsample/sample. bacpac&quot; \`
-Edition &quot;Standard&quot; -ServiceObjectiveName &quot;P6&quot; \`
-AdministratorLogin &quot;&lt;userId&gt;&quot; \`
-AdministratorLoginPassword $(ConvertTo-SecureString -String &quot;&lt;password&gt;&quot; -AsPlainText -Force)</span><span class="lang-vi">$importRequest = New-AzSqlDatabaseImport -ResourceGroupName &quot;&lt;resourceGroupName&gt;&quot; \`
-ServerName &quot;&lt;serverName&gt;&quot; -DatabaseName &quot;&lt;databaseName&gt;&quot; \`
-DatabaseMaxSizeBytes &quot;&lt;databaseSizeInBytes&gt;&quot; -StorageKeyType &quot;StorageAccessKey&quot; \`
-StorageKey $(Get-AzStorageAccountKey \`
-ResourceGroupName &quot;&lt;resourceGroupName&gt;&quot; - StorageAccountName &quot;&lt;storageAccountName&gt;&quot;).Value[0] \`
-StorageUri &quot;https://myStorageAccount.blob.core.windows.net/importsample/sample. bacpac&quot; \`
-Edition &quot;Standard&quot; -ServiceObjectiveName &quot;P6&quot; \`
-AdministratorLogin &quot;&lt;userId&gt;&quot; \`
-AdministratorLoginPassword $(ConvertTo-SecureString -String &quot;&lt;password&gt;&quot; -AsPlainText -Force)</span></pre></li>
</ul></ul><li><span class="lang-en">You can also import use Azure CLI.</span><span class="lang-vi">Bạn cũng có thể import bằng Azure CLI.</span></li>
<ul><li><span class="lang-en">Use az sql db import:</span><span class="lang-vi">Use az sql db import:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en"># get the storage account key
az storage account keys list --resource-group &quot;&lt;resourceGroup&gt;&quot; --account- name &quot;&lt;storageAccount&gt;&quot;
az sql db import --resource-group &quot;&lt;resourceGroup&gt;&quot; --server &quot;&lt;server&gt;&quot; -- name &quot;&lt;database&gt;&quot; \`
--storage-key-type &quot;StorageAccessKey&quot; --storage-key &quot;&lt;storageAccountKey&gt;&quot; \`
--storage-uri &quot;https://myStorageAccount.blob.core.windows.net/importsample/sample. bacpac&quot; \`
-u &quot;&lt;userId&gt;&quot; -p &quot;&lt;password&gt;&quot;</span><span class="lang-vi"># get the storage account key
az storage account keys list --resource-group &quot;&lt;resourceGroup&gt;&quot; --account- name &quot;&lt;storageAccount&gt;&quot;
az sql db import --resource-group &quot;&lt;resourceGroup&gt;&quot; --server &quot;&lt;server&gt;&quot; -- name &quot;&lt;database&gt;&quot; \`
--storage-key-type &quot;StorageAccessKey&quot; --storage-key &quot;&lt;storageAccountKey&gt;&quot; \`
--storage-uri &quot;https://myStorageAccount.blob.core.windows.net/importsample/sample. bacpac&quot; \`
-u &quot;&lt;userId&gt;&quot; -p &quot;&lt;password&gt;&quot;</span></pre></li>
</ul></ul></ul></ul></section>
<section id="s22a"><h3><span class="n">22a.</span> <span class="lang-en">implement Azure SQL Managed Instance database copy and move</span><span class="lang-vi">thực hiện copy và move database của Azure SQL Managed Instance</span><a class="anch" href="#s22a" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">You can copy or move one or more databases from one Azure SQL Managed Instance to another(s). This is useful when:</span><span class="lang-vi">Bạn có thể copy hoặc move một hay nhiều database từ một Azure SQL Managed Instance sang instance khác. Việc này hữu ích khi:</span></li>
<ul><li><span class="lang-en">You want to manage database size and performance.</span><span class="lang-vi">Bạn muốn quản lý dung lượng và hiệu năng database.</span></li>
<li><span class="lang-en">Balance workloads and resources across several Managed Instances.</span><span class="lang-vi">Cân bằng workload và tài nguyên giữa nhiều Managed Instance.</span></li>
<li><span class="lang-en">Copy/move databases between development, test, and production environments.</span><span class="lang-vi">Copy/move database giữa môi trường phát triển, kiểm thử và production.</span></li>
<li><span class="lang-en">Combine databases from multiple instances.</span><span class="lang-vi">Gộp database từ nhiều instance lại.</span></li>
</ul><li><span class="lang-en">You are able to copy/move one or many databases from one Managed Instance to one or many Managed Instances, without possibility of data loss.</span><span class="lang-vi">Bạn có thể copy/move một hoặc nhiều database từ một Managed Instance sang một hoặc nhiều Managed Instance khác, không có nguy cơ mất dữ liệu.</span></li>
<ul><li><span class="lang-en">If you copy a database, the original remains online. There is no further synchronization, and the databases on both instances are able to be read and written to.</span><span class="lang-vi">Nếu copy, database gốc vẫn online. Sau đó không còn đồng bộ nữa, và database ở cả hai instance đều đọc ghi được.</span></li>
<li><span class="lang-en">If you move a database, the original is dropped afterwards.</span><span class="lang-vi">Nếu move, database gốc sẽ bị drop sau khi hoàn tất.</span></li>
</ul><li><span class="lang-en">You need read permissions from the source and write permissions for both source and the destination databases.</span><span class="lang-vi">Bạn cần quyền đọc trên nguồn, và quyền ghi trên cả database nguồn lẫn đích.</span></li>
<li><span class="lang-en">There must also be sufficient network connectivity between the two Managed Instances.</span><span class="lang-vi">Giữa hai Managed Instance cũng phải có kết nối mạng đủ tốt.</span></li>
<li><span class="lang-en">To copy/move:</span><span class="lang-vi">Để copy/move:</span></li>
<ul><li><span class="lang-en">Go to the Managed Instance.</span><span class="lang-vi">Vào Managed Instance.</span></li>
<li><span class="lang-en">Go to Data management – Databases.</span><span class="lang-vi">Vào Data management – Databases.</span></li>
<li><span class="lang-en">Select the database(s), and click Copy or Move at the top.</span><span class="lang-vi">Select the database(s), and click Copy or Move at the top.</span></li>
<li><span class="lang-en">In the Source details pane, select the source database(s) and Managed Instance.</span><span class="lang-vi">Trong khung Source details, chọn database nguồn và Managed Instance.</span></li>
<li><span class="lang-en">In the Destination details pane, select the destination Managed Instance.</span><span class="lang-vi">Trong khung Destination details, chọn Managed Instance đích.</span></li>
<li><span class="lang-en">Click Review + Start, and then click Start.</span><span class="lang-vi">Bấm Review + Start, rồi bấm Start.</span></li>
</ul><li><span class="lang-en">While the copy/move is happening:</span><span class="lang-vi">Trong lúc copy/move đang chạy:</span></li>
<ul><li><span class="lang-en">You will see “Copy/Move in progress” in the “Operation details” column.</span><span class="lang-vi">Bạn sẽ thấy &quot;Copy/Move in progress&quot; ở cột &quot;Operation details&quot;.</span></li>
<li><span class="lang-en">You can cancel it.</span><span class="lang-vi">Bạn có thể hủy giữa chừng.</span></li>
</ul><li><span class="lang-en">After the data is transferred, the status changed to “Copy/Move ready for completion”.</span><span class="lang-vi">Sau khi dữ liệu đã chuyển xong, trạng thái đổi thành &quot;Copy/Move ready for completion&quot;.</span></li>
<li><span class="lang-en">To complete the copy/move, click “Ready for completion” and “Complete”.</span><span class="lang-vi">Để hoàn tất copy/move, bấm &quot;Ready for completion&quot; rồi &quot;Complete&quot;.</span></li>
<ul><li><span class="lang-en">If it is not completed in 24 hours, then the copy/move is cancelled, and the destination database is dropped.</span><span class="lang-vi">Nếu không hoàn tất trong 24 giờ, thao tác copy/move sẽ bị hủy và database đích bị drop.</span></li>
</ul></ul></section>
<h2 class="dom" id="dom2">2 · Implement a secure environment</h2>
<section id="s-sec2"><h3><span class="n"></span> <span class="lang-en">Domain 2 at a glance — security summary tables</span><span class="lang-vi">Tổng hợp phạm vi 2 — bảng ôn nhanh về bảo mật</span><a class="anch" href="#s-sec2" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">A synthesis of sections 23–43 for revision; every row links to the section that explains it in full.</span><span class="lang-vi">Đây là bản tổng hợp các mục 23–43 để ôn nhanh; mỗi dòng có link dẫn tới mục giải thích đầy đủ.</span></li>
<li><span class="lang-en">Protecting the data — pick the mechanism by asking who must <i>not</i> be able to read the plaintext:</span><span class="lang-vi">Bảo vệ dữ liệu — chọn cơ chế bằng cách hỏi: ai là người <i>không</i> được đọc plaintext?</span></li>
</ul>
<div class="tw"><table class="cmp"><tr><th><span class="lang-en">Mechanism</span><span class="lang-vi">Cơ chế</span></th><th><span class="lang-en">What it protects</span><span class="lang-vi">Bảo vệ cái gì</span></th><th><span class="lang-en">Can a sysadmin/DBA read it?</span><span class="lang-vi">Sysadmin/DBA đọc được?</span></th><th><span class="lang-en">Effect on queries</span><span class="lang-vi">Ảnh hưởng truy vấn</span></th><th><span class="lang-en">Configured where</span><span class="lang-vi">Cấu hình ở đâu</span></th></tr><tr><td><span class="lang-en"><a href="#s30">TDE</a></span><span class="lang-vi"><a href="#s30">TDE</a></span></td><td><span class="lang-en">Whole database at rest: data, log and backup files</span><span class="lang-vi">Toàn database khi nằm yên: file data, log và backup</span></td><td><span class="lang-en">Yes — decryption is transparent</span><span class="lang-vi">Có — giải mã trong suốt</span></td><td><span class="lang-en">No change to any statement</span><span class="lang-vi">Không phải sửa câu lệnh nào</span></td><td><span class="lang-en">Server level (SQL DB) / instance level (MI). DEK protected by a service-managed certificate or a CMK in Key Vault</span><span class="lang-vi">Cấp server (SQL DB) / cấp instance (MI). DEK được bảo vệ bởi certificate do dịch vụ quản lý hoặc CMK trong Key Vault</span></td></tr><tr><td><span class="lang-en"><a href="#s31">Object/cell-level (ENCRYPTBYKEY)</a></span><span class="lang-vi"><a href="#s31">Mã hoá cấp object/cell (ENCRYPTBYKEY)</a></span></td><td><span class="lang-en">Individual column values, encrypted by the server</span><span class="lang-vi">Từng giá trị cột, do server mã hoá</span></td><td><span class="lang-en">Yes — the key lives on the server</span><span class="lang-vi">Có — key nằm ngay trên server</span></td><td><span class="lang-en">Column must be varbinary, ciphertext is not sargable, key must be OPEN first</span><span class="lang-vi">Cột phải là varbinary, dữ liệu mã hoá không sargable, phải OPEN key trước</span></td><td><span class="lang-en">DMK → certificate → symmetric key, inside the database</span><span class="lang-vi">DMK → certificate → symmetric key, trong database</span></td></tr><tr><td><span class="lang-en"><a href="#s33">Always Encrypted</a></span><span class="lang-vi"><a href="#s33">Always Encrypted</a></span></td><td><span class="lang-en">Sensitive columns; plaintext never reaches the engine</span><span class="lang-vi">Cột nhạy cảm; plaintext không bao giờ vào engine</span></td><td><span class="lang-en">No — this is the point of it</span><span class="lang-vi">Không — đây chính là mục đích của nó</span></td><td><span class="lang-en">Deterministic: =, JOIN, GROUP BY, DISTINCT, index (needs a _BIN2 collation). Randomized: none of those</span><span class="lang-vi">Deterministic: =, JOIN, GROUP BY, DISTINCT, index (cần collation _BIN2). Randomized: không làm được các việc đó</span></td><td><span class="lang-en">CEK + CMK (Key Vault or certificate store) and a driver with Column Encryption Setting=enabled</span><span class="lang-vi">CEK + CMK (Key Vault hoặc certificate store) và driver có Column Encryption Setting=enabled</span></td></tr><tr><td><span class="lang-en"><a href="#s33a">Always Encrypted + secure enclaves</a></span><span class="lang-vi"><a href="#s33a">Always Encrypted + secure enclave</a></span></td><td><span class="lang-en">Same, plus computation on plaintext inside the enclave</span><span class="lang-vi">Như trên, thêm việc tính toán trên plaintext bên trong enclave</span></td><td><span class="lang-en">No</span><span class="lang-vi">Không</span></td><td><span class="lang-en">Adds range comparisons, LIKE, in-place encryption and key rotation</span><span class="lang-vi">Thêm so sánh khoảng, LIKE, mã hoá tại chỗ và xoay key</span></td><td><span class="lang-en">VBS enclaves: every SKU, no attestation service. Intel SGX: DC-series + Microsoft Azure Attestation</span><span class="lang-vi">VBS enclave: mọi SKU, không cần dịch vụ attestation. Intel SGX: DC-series + Microsoft Azure Attestation</span></td></tr><tr><td><span class="lang-en"><a href="#s34">Dynamic Data Masking</a></span><span class="lang-vi"><a href="#s34">Dynamic Data Masking</a></span></td><td><span class="lang-en">Only what is displayed — the stored data is unchanged</span><span class="lang-vi">Chỉ che phần hiển thị — dữ liệu lưu trữ không đổi</span></td><td><span class="lang-en">Yes; so does any user holding UNMASK</span><span class="lang-vi">Có; user có quyền UNMASK cũng thấy</span></td><td><span class="lang-en">No encryption, so values can still be inferred with WHERE/BETWEEN</span><span class="lang-vi">Không mã hoá, nên vẫn đoán được giá trị bằng WHERE/BETWEEN</span></td><td><span class="lang-en">Per column, in the portal or MASKED WITH; GRANT/REVOKE UNMASK</span><span class="lang-vi">Theo từng cột, bằng portal hoặc MASKED WITH; GRANT/REVOKE UNMASK</span></td></tr><tr><td><span class="lang-en"><a href="#s42">Row-Level Security</a></span><span class="lang-vi"><a href="#s42">Row-Level Security</a></span></td><td><span class="lang-en">Which rows a user may see or write</span><span class="lang-vi">Những dòng mà user được thấy hoặc được ghi</span></td><td><span class="lang-en">Yes — it is filtering, not encryption</span><span class="lang-vi">Có — đây là lọc dữ liệu, không phải mã hoá</span></td><td><span class="lang-en">FILTER predicate for SELECT/UPDATE/DELETE, BLOCK predicate for writes</span><span class="lang-vi">FILTER predicate cho SELECT/UPDATE/DELETE, BLOCK predicate cho thao tác ghi</span></td><td><span class="lang-en">Inline TVF WITH SCHEMABINDING + CREATE SECURITY POLICY, best kept in a separate schema</span><span class="lang-vi">Inline TVF WITH SCHEMABINDING + CREATE SECURITY POLICY, nên để trong schema riêng</span></td></tr><tr><td><span class="lang-en"><a href="#s41">Ledger</a></span><span class="lang-vi"><a href="#s41">Ledger</a></span></td><td><span class="lang-en">Tamper evidence, not confidentiality</span><span class="lang-vi">Bằng chứng chống sửa lén, không phải tính bí mật</span></td><td><span class="lang-en">Yes — but any change leaves a cryptographic trace</span><span class="lang-vi">Có — nhưng mọi thay đổi đều để lại dấu vết mật mã</span></td><td><span class="lang-en">Adds GENERATED ALWAYS columns plus a history table and ledger view</span><span class="lang-vi">Thêm các cột GENERATED ALWAYS cùng history table và ledger view</span></td><td><span class="lang-en">Updatable or append-only ledger tables; digests in WORM blob storage or Azure Confidential Ledger</span><span class="lang-vi">Ledger table dạng updatable hoặc append-only; digest lưu ở blob WORM hoặc Azure Confidential Ledger</span></td></tr></table></div>
<ul><li><span class="lang-en">Authentication and permissions — the same job, two different platforms:</span><span class="lang-vi">Xác thực và phân quyền — cùng một việc, hai nền tảng khác nhau:</span></li>
</ul>
<div class="tw"><table class="cmp"><tr><th><span class="lang-en">Topic</span><span class="lang-vi">Chủ đề</span></th><th><span class="lang-en">Azure SQL Database</span><span class="lang-vi">Azure SQL Database</span></th><th><span class="lang-en">Managed Instance / SQL Server on a VM</span><span class="lang-vi">Managed Instance / SQL Server trên VM</span></th></tr><tr><td><span class="lang-en">Server-level principals</span><span class="lang-vi">Principal cấp server</span></td><td><span class="lang-en">Logins in the virtual master + the seven ##MS_...## fixed server roles</span><span class="lang-vi">Login trong master ảo + bảy fixed server role ##MS_...##</span></td><td><span class="lang-en">Real logins + the classic fixed server roles (sysadmin, serveradmin, securityadmin, dbcreator…)</span><span class="lang-vi">Login thật + các fixed server role cổ điển (sysadmin, serveradmin, securityadmin, dbcreator…)</span></td></tr><tr><td><span class="lang-en">Let a monitoring tool read state DMVs</span><span class="lang-vi">Cho công cụ giám sát đọc state DMV</span></td><td><span class="lang-en">Add the login to ##MS_ServerStateReader## (in master)</span><span class="lang-vi">Thêm login vào ##MS_ServerStateReader## (trong master)</span></td><td><span class="lang-en">GRANT VIEW SERVER STATE</span><span class="lang-vi">GRANT VIEW SERVER STATE</span></td></tr><tr><td><span class="lang-en">Create databases / manage logins</span><span class="lang-vi">Tạo database / quản lý login</span></td><td><span class="lang-en">##MS_DatabaseManager##, ##MS_LoginManager## — preferred over dbmanager/loginmanager in master</span><span class="lang-vi">##MS_DatabaseManager##, ##MS_LoginManager## — nên dùng thay cho dbmanager/loginmanager trong master</span></td><td><span class="lang-en">dbcreator, securityadmin</span><span class="lang-vi">dbcreator, securityadmin</span></td></tr><tr><td><span class="lang-en">Microsoft Entra identities</span><span class="lang-vi">Danh tính Microsoft Entra</span></td><td><span class="lang-en">CREATE USER [name] FROM EXTERNAL PROVIDER — a contained user inside the database</span><span class="lang-vi">CREATE USER [name] FROM EXTERNAL PROVIDER — contained user ngay trong database</span></td><td><span class="lang-en">CREATE LOGIN [name] FROM EXTERNAL PROVIDER, then CREATE USER … FROM LOGIN</span><span class="lang-vi">CREATE LOGIN [name] FROM EXTERNAL PROVIDER, rồi CREATE USER … FROM LOGIN</span></td></tr><tr><td><span class="lang-en"><a href="#s29">Certificates</a></span><span class="lang-vi"><a href="#s29">Certificate</a></span></td><td><span class="lang-en">Cannot create a certificate from a file or use private key files</span><span class="lang-vi">Không tạo được certificate từ file, không dùng được file private key</span></td><td><span class="lang-en">BACKUP CERTIFICATE … WITH PRIVATE KEY on the source, CREATE CERTIFICATE … FROM FILE on the destination</span><span class="lang-vi">BACKUP CERTIFICATE … WITH PRIVATE KEY ở nguồn, CREATE CERTIFICATE … FROM FILE ở đích</span></td></tr><tr><td><span class="lang-en"><a href="#s27">Permission rules</a></span><span class="lang-vi"><a href="#s27">Quy tắc phân quyền</a></span></td><td colspan="2"><span class="lang-en">DENY beats GRANT (except for sysadmin and object owners); REVOKE only removes a grant, it does not block; permissions chain when objects share an owner</span><span class="lang-vi">DENY thắng GRANT (trừ sysadmin và chủ sở hữu object); REVOKE chỉ gỡ quyền chứ không chặn; quyền được chain khi các object cùng owner</span></td></tr></table></div>
<ul><li><span class="lang-en">Tracking changes and auditing — what each one actually gives you:</span><span class="lang-vi">Theo dõi thay đổi và audit — mỗi cơ chế thực sự cho bạn cái gì:</span></li>
</ul>
<div class="tw"><table class="cmp"><tr><th><span class="lang-en">Mechanism</span><span class="lang-vi">Cơ chế</span></th><th><span class="lang-en">What you get back</span><span class="lang-vi">Nhận lại được gì</span></th><th><span class="lang-en">Requirements</span><span class="lang-vi">Điều kiện</span></th><th><span class="lang-en">Exam traps</span><span class="lang-vi">Điểm hay ra đề</span></th></tr><tr><td><span class="lang-en"><a href="#s38">Change Tracking</a></span><span class="lang-vi"><a href="#s38">Change Tracking</a></span></td><td><span class="lang-en">Which rows changed and which columns — no old values</span><span class="lang-vi">Dòng nào đổi và cột nào đổi — không có giá trị cũ</span></td><td><span class="lang-en">Primary key on the table; enable on the database, then on each table</span><span class="lang-vi">Bảng phải có primary key; bật ở database rồi tới từng bảng</span></td><td><span class="lang-en">Synchronous and lightweight; CHANGETABLE(CHANGES …), CHANGE_TRACKING_CURRENT_VERSION()</span><span class="lang-vi">Đồng bộ và nhẹ; CHANGETABLE(CHANGES …), CHANGE_TRACKING_CURRENT_VERSION()</span></td></tr><tr><td><span class="lang-en"><a href="#s38">Change Data Capture (CDC)</a></span><span class="lang-vi"><a href="#s38">Change Data Capture (CDC)</a></span></td><td><span class="lang-en">Every intermediate change with the before and after values</span><span class="lang-vi">Mọi thay đổi trung gian kèm giá trị trước và sau</span></td><td><span class="lang-en">Asynchronous, reads the transaction log; SQL Agent jobs on MI and VM, a built-in scheduler on Azure SQL Database</span><span class="lang-vi">Bất đồng bộ, đọc transaction log; MI và VM dùng job của SQL Agent, Azure SQL Database dùng scheduler có sẵn</span></td><td><span class="lang-en">__$operation 1/2/3/4; fn_cdc_get_all_changes vs fn_cdc_get_net_changes (@supports_net_changes = 1, needs a PK)</span><span class="lang-vi">__$operation 1/2/3/4; fn_cdc_get_all_changes so với fn_cdc_get_net_changes (@supports_net_changes = 1, cần PK)</span></td></tr><tr><td><span class="lang-en"><a href="#s41">Ledger</a></span><span class="lang-vi"><a href="#s41">Ledger</a></span></td><td><span class="lang-en">Cryptographic proof that the data was not tampered with</span><span class="lang-vi">Bằng chứng mật mã rằng dữ liệu không bị sửa lén</span></td><td><span class="lang-en">Updatable or append-only ledger tables</span><span class="lang-vi">Ledger table dạng updatable hoặc append-only</span></td><td><span class="lang-en">A block closes after 30 seconds or 100,000 transactions; the latest hash is the database digest</span><span class="lang-vi">Một block đóng sau 30 giây hoặc 100.000 giao dịch; hash mới nhất là database digest</span></td></tr><tr><td><span class="lang-en"><a href="#s37">SQL Audit</a></span><span class="lang-vi"><a href="#s37">SQL Audit</a></span></td><td><span class="lang-en">Who did what, written to .xel files</span><span class="lang-vi">Ai làm gì, ghi ra file .xel</span></td><td><span class="lang-en">SQL DB and MI: Storage, Log Analytics or Event Hub. VM: file system or Windows event log</span><span class="lang-vi">SQL DB và MI: Storage, Log Analytics hoặc Event Hub. VM: file system hoặc Windows event log</span></td><td><span class="lang-en">SQL DB audits at database level (and server level); MI and VM audit at server level</span><span class="lang-vi">SQL DB audit ở cấp database (và cấp server); MI và VM audit ở cấp server</span></td></tr></table></div>
<ul><li><span class="lang-en">Network and connection security:</span><span class="lang-vi">Bảo mật mạng và kết nối:</span></li>
</ul>
<div class="tw"><table class="cmp"><tr><th><span class="lang-en">Mechanism</span><span class="lang-vi">Cơ chế</span></th><th><span class="lang-en">Scope</span><span class="lang-vi">Phạm vi</span></th><th><span class="lang-en">Configured with</span><span class="lang-vi">Cấu hình bằng</span></th><th><span class="lang-en">Remember</span><span class="lang-vi">Cần nhớ</span></th></tr><tr><td><span class="lang-en"><a href="#s32">Server-level firewall rule</a></span><span class="lang-vi"><a href="#s32">Firewall rule cấp server</a></span></td><td><span class="lang-en">Every database on the logical server (Azure SQL Database only, not MI)</span><span class="lang-vi">Mọi database trên logical server (chỉ Azure SQL Database, không có ở MI)</span></td><td><span class="lang-en">Portal, sp_set_firewall_rule, PowerShell, CLI, REST</span><span class="lang-vi">Portal, sp_set_firewall_rule, PowerShell, CLI, REST</span></td><td><span class="lang-en">Rules are stored in master; 0.0.0.0 means &quot;allow Azure services&quot;</span><span class="lang-vi">Rule lưu trong master; 0.0.0.0 nghĩa là &quot;cho phép dịch vụ Azure&quot;</span></td></tr><tr><td><span class="lang-en"><a href="#s32">Database-level firewall rule</a></span><span class="lang-vi"><a href="#s32">Firewall rule cấp database</a></span></td><td><span class="lang-en">One database only</span><span class="lang-vi">Chỉ một database</span></td><td><span class="lang-en">T-SQL only: sp_set_database_firewall_rule, needs CONTROL DATABASE</span><span class="lang-vi">Chỉ T-SQL: sp_set_database_firewall_rule, cần quyền CONTROL DATABASE</span></td><td><span class="lang-en">Checked before the server-level rules; stored in that database</span><span class="lang-vi">Được kiểm TRƯỚC rule cấp server; lưu ngay trong database đó</span></td></tr><tr><td><span class="lang-en"><a href="#s34a">Private Link / private endpoint</a></span><span class="lang-vi"><a href="#s34a">Private Link / private endpoint</a></span></td><td><span class="lang-en">A private IP in your VNet mapped to that one resource</span><span class="lang-vi">Một IP riêng trong VNet, map tới đúng một resource</span></td><td><span class="lang-en">Portal, PowerShell, CLI</span><span class="lang-vi">Portal, PowerShell, CLI</span></td><td><span class="lang-en">Endpoint must sit in the VNet's region, the database may be elsewhere; traffic stays on the Microsoft network</span><span class="lang-vi">Endpoint phải nằm cùng region với VNet, database có thể ở nơi khác; lưu lượng đi trên mạng của Microsoft</span></td></tr><tr><td><span class="lang-en"><a href="#s34a">Service endpoint</a></span><span class="lang-vi"><a href="#s34a">Service endpoint</a></span></td><td><span class="lang-en">Opens a subnet towards the service</span><span class="lang-vi">Mở một subnet hướng tới dịch vụ</span></td><td><span class="lang-en">VNet settings</span><span class="lang-vi">Thiết lập của VNet</span></td><td><span class="lang-en">Still reaches the service over its public IP — that is the difference from Private Link</span><span class="lang-vi">Vẫn đi tới dịch vụ qua IP công cộng — đó là khác biệt so với Private Link</span></td></tr><tr><td><span class="lang-en"><a href="#s35">TLS</a></span><span class="lang-vi"><a href="#s35">TLS</a></span></td><td><span class="lang-en">Data in transit (TDE is data at rest)</span><span class="lang-vi">Dữ liệu khi truyền (TDE là dữ liệu khi nằm yên)</span></td><td><span class="lang-en">Networking → Connectivity → Minimum TLS version; Set-AzSqlServer -MinimalTlsVersion; az sql server update</span><span class="lang-vi">Networking → Connectivity → Minimum TLS version; Set-AzSqlServer -MinimalTlsVersion; az sql server update</span></td><td><span class="lang-en">Set the minimum to 1.2; older drivers may not negotiate TLS by default</span><span class="lang-vi">Đặt tối thiểu 1.2; driver cũ có thể không tự thương lượng TLS</span></td></tr></table></div>
<ul><li><span class="lang-en">Classification, assessment and threat detection:</span><span class="lang-vi">Phân loại, đánh giá và phát hiện mối đe doạ:</span></li>
</ul>
<div class="tw"><table class="cmp"><tr><th><span class="lang-en">Tool</span><span class="lang-vi">Công cụ</span></th><th><span class="lang-en">What it does</span><span class="lang-vi">Làm gì</span></th><th><span class="lang-en">Where to enable it</span><span class="lang-vi">Bật ở đâu</span></th><th><span class="lang-en">Remember</span><span class="lang-vi">Cần nhớ</span></th></tr><tr><td><span class="lang-en"><a href="#s36">Data Discovery &amp; Classification</a></span><span class="lang-vi"><a href="#s36">Data Discovery &amp; Classification</a></span></td><td><span class="lang-en">Tags columns with an information type and a sensitivity label</span><span class="lang-vi">Gắn cho cột một information type và một sensitivity label</span></td><td><span class="lang-en">Database → Security → Data Discovery &amp; Classification</span><span class="lang-vi">Database → Security → Data Discovery &amp; Classification</span></td><td><span class="lang-en">You cannot leave both as [n/a]; SSN is the US identifier — elsewhere use National ID</span><span class="lang-vi">Không được để cả hai là [n/a]; SSN là mã của Mỹ — nước khác dùng National ID</span></td></tr><tr><td><span class="lang-en"><a href="#s39">Vulnerability Assessment</a></span><span class="lang-vi"><a href="#s39">Vulnerability Assessment</a></span></td><td><span class="lang-en">Scans for misconfiguration against a baseline</span><span class="lang-vi">Quét cấu hình sai so với một baseline</span></td><td><span class="lang-en">Security Center, with a storage account; weekly recurring scans plus email reports</span><span class="lang-vi">Security Center, cần storage account; quét định kỳ hàng tuần kèm email báo cáo</span></td><td><span class="lang-en">&quot;Approve as Baseline&quot; moves similar findings into Passed</span><span class="lang-vi">&quot;Approve as Baseline&quot; đẩy các kết quả tương tự sang mục Passed</span></td></tr><tr><td><span class="lang-en"><a href="#s43">Microsoft Defender for SQL</a></span><span class="lang-vi"><a href="#s43">Microsoft Defender for SQL</a></span></td><td><span class="lang-en">Alerts on SQL injection, unusual access and query patterns</span><span class="lang-vi">Cảnh báo SQL injection, truy cập và mẫu truy vấn bất thường</span></td><td><span class="lang-en">SQL Server → Security → Microsoft Defender for Cloud</span><span class="lang-vi">SQL Server → Security → Microsoft Defender for Cloud</span></td><td><span class="lang-en">About $15 per server per month, includes the vulnerability assessment</span><span class="lang-vi">Khoảng 15 USD mỗi server mỗi tháng, đã gồm vulnerability assessment</span></td></tr><tr><td><span class="lang-en"><a href="#s40">Microsoft Purview</a></span><span class="lang-vi"><a href="#s40">Microsoft Purview</a></span></td><td><span class="lang-en">Catalogues and governs data across many sources</span><span class="lang-vi">Lập catalog và quản trị dữ liệu trên nhiều nguồn</span></td><td><span class="lang-en">Purview Studio: Data Map, Data Catalog, Data Insights</span><span class="lang-vi">Purview Studio: Data Map, Data Catalog, Data Insights</span></td><td><span class="lang-en">Use it when the question is &quot;where is our sensitive data, across everything?&quot;</span><span class="lang-vi">Dùng khi câu hỏi là &quot;dữ liệu nhạy cảm của công ty nằm ở đâu, trên mọi nguồn?&quot;</span></td></tr></table></div>
<ul><li><span class="lang-en">Platform differences that questions love to test:</span><span class="lang-vi">Những khác biệt giữa các nền tảng mà đề thi hay hỏi:</span></li>
</ul>
<div class="tw"><table class="cmp"><tr><th><span class="lang-en">Feature</span><span class="lang-vi">Tính năng</span></th><th><span class="lang-en">Azure SQL Database</span><span class="lang-vi">Azure SQL Database</span></th><th><span class="lang-en">Managed Instance</span><span class="lang-vi">Managed Instance</span></th><th><span class="lang-en">SQL Server on a VM</span><span class="lang-vi">SQL Server trên VM</span></th></tr><tr><td><span class="lang-en">##MS_...## fixed server roles</span><span class="lang-vi">Fixed server role ##MS_...##</span></td><td><span class="lang-en">Yes, assigned in master</span><span class="lang-vi">Có, gán trong master</span></td><td><span class="lang-en">No — use GRANT VIEW SERVER STATE and the classic roles</span><span class="lang-vi">Không — dùng GRANT VIEW SERVER STATE và các role cổ điển</span></td><td><span class="lang-en">SQL Server 2022 and later only</span><span class="lang-vi">Chỉ SQL Server 2022 trở lên</span></td></tr><tr><td><span class="lang-en">Certificate from a file / BACKUP CERTIFICATE</span><span class="lang-vi">Certificate từ file / BACKUP CERTIFICATE</span></td><td><span class="lang-en">Not supported</span><span class="lang-vi">Không hỗ trợ</span></td><td><span class="lang-en">Supported</span><span class="lang-vi">Có</span></td><td><span class="lang-en">Supported</span><span class="lang-vi">Có</span></td></tr><tr><td><span class="lang-en">Firewall rules</span><span class="lang-vi">Firewall rule</span></td><td><span class="lang-en">Server-level and database-level rules</span><span class="lang-vi">Rule cấp server và cấp database</span></td><td><span class="lang-en">Network security groups on the VNet</span><span class="lang-vi">Network security group trên VNet</span></td><td><span class="lang-en">Network security groups plus the OS firewall</span><span class="lang-vi">Network security group cộng firewall của hệ điều hành</span></td></tr><tr><td><span class="lang-en">Turning TDE on per database</span><span class="lang-vi">Bật TDE cho từng database</span></td><td><span class="lang-en">Portal or ALTER DATABASE … SET ENCRYPTION</span><span class="lang-vi">Portal hoặc ALTER DATABASE … SET ENCRYPTION</span></td><td><span class="lang-en">ALTER DATABASE … SET ENCRYPTION only — not in the portal</span><span class="lang-vi">Chỉ bằng ALTER DATABASE … SET ENCRYPTION — không làm trong portal</span></td><td><span class="lang-en">Managed by you, EKM or Key Vault for the protector</span><span class="lang-vi">Bạn tự quản lý, dùng EKM hoặc Key Vault cho protector</span></td></tr><tr><td><span class="lang-en">Audit destination</span><span class="lang-vi">Đích của audit</span></td><td><span class="lang-en">Storage, Log Analytics, Event Hub — at database and/or server level</span><span class="lang-vi">Storage, Log Analytics, Event Hub — ở cấp database và/hoặc cấp server</span></td><td><span class="lang-en">Storage, Log Analytics, Event Hub — server level</span><span class="lang-vi">Storage, Log Analytics, Event Hub — cấp server</span></td><td><span class="lang-en">File system or Windows event log — server level</span><span class="lang-vi">File system hoặc Windows event log — cấp server</span></td></tr></table></div>
</section>
<section id="s23"><h3><span class="n">23.</span> <span class="lang-en">configure authentication by using Active Directory and Entra ID</span><span class="lang-vi">cấu hình xác thực bằng Active Directory và Entra ID</span><a class="anch" href="#s23" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Azure SQL Database supports:</span><span class="lang-vi">Azure SQL Database hỗ trợ:</span></li>
<ul><li><span class="lang-en">SQL Server authentication (user name and password, sent in plain text), and</span><span class="lang-vi">SQL Server authentication (tên đăng nhập và mật khẩu, gửi ở dạng plain text), và</span></li>
<li><span class="lang-en">Microsoft Entra ID (previously known as Azure Active Directory or AAD) authentication.</span><span class="lang-vi">Microsoft Entra ID (trước đây gọi là Azure Active Directory hay AAD) authentication.</span></li>
<ul><li><span class="lang-en">Microsoft Entra ID can sync with on-prem Windows Server AD.</span><span class="lang-vi">Microsoft Entra ID có thể đồng bộ với Windows Server AD on-prem.</span></li>
</ul></ul><li><span class="lang-en">Azure AD authentication supports:</span><span class="lang-vi">Azure AD authentication hỗ trợ:</span></li>
<ul><li><span class="lang-en">Cloud-only identities,</span><span class="lang-vi">Cloud-only identity,</span></li>
<li><span class="lang-en">Hybrid identities that support cloud authentication with Single Sign-On (SSO), using password hash or pass-through authentication.</span><span class="lang-vi">Hybrid identity hỗ trợ xác thực trên cloud với Single Sign-On (SSO), dùng password hash hoặc pass-through authentication.</span></li>
<li><span class="lang-en">Hybrid identities that support federated authentication.</span><span class="lang-vi">Hybrid identity hỗ trợ federated authentication.</span></li>
</ul><li><span class="lang-en">Decision tree:</span><span class="lang-vi">Cây quyết định:</span></li>
<ul><li><span class="lang-en">Cloud-only identities</span><span class="lang-vi">Cloud-only identity</span></li>
<ul><li><span class="lang-en">Azure AD to handle sign-in completely in the cloud</span><span class="lang-vi">Muốn Azure AD xử lý toàn bộ việc đăng nhập trên cloud</span></li>
<li><span class="lang-en">Do not want to enforced AD security policies during sign-in.</span><span class="lang-vi">Không muốn áp các chính sách bảo mật AD khi đăng nhập.</span></li>
<li><span class="lang-en">Do not have a sign-in requirement not natively supported by Azure AD.</span><span class="lang-vi">Không có yêu cầu đăng nhập nào mà Azure AD không hỗ trợ sẵn.</span></li>
</ul><li><span class="lang-en">Federated authentication</span><span class="lang-vi">Federated authentication</span></li>
<ul><li><span class="lang-en">If you want to integrate with an existing federation provider, or</span><span class="lang-vi">Nếu bạn muốn tích hợp với một federation provider sẵn có, hoặc</span></li>
<li><span class="lang-en">Have a sign-in requirement not natively supported by Azure AD.</span><span class="lang-vi">Có yêu cầu đăng nhập mà Azure AD không hỗ trợ sẵn.</span></li>
</ul><li><span class="lang-en">Pass-through authentication</span><span class="lang-vi">Pass-through authentication</span></li>
<ul><li><span class="lang-en">All other cases</span><span class="lang-vi">Mọi trường hợp còn lại</span></li>
<ul><li><span class="lang-en">Do not have a sign-in requirement not natively supported by Azure AD.</span><span class="lang-vi">Không có yêu cầu đăng nhập nào mà Azure AD không hỗ trợ sẵn.</span></li>
<li><span class="lang-en">No integration with an existing federation provider, OR want to enforce user-level AD security policies during sign-in.</span><span class="lang-vi">Không tích hợp với federation provider sẵn có, HOẶC muốn áp chính sách bảo mật AD ở mức người dùng khi đăng nhập.</span></li>
</ul></ul></ul><li><span class="lang-en">Other authentications:</span><span class="lang-vi">Các phương thức xác thực khác:</span></li>
<ul><li><span class="lang-en">Apps running on an Azure VM – passwordless authentication.</span><span class="lang-vi">Ứng dụng chạy trên Azure VM — dùng passwordless authentication.</span></li>
<li><span class="lang-en">Apps running on a non-Azure machine that is domain-joined: use managed identities</span><span class="lang-vi">Ứng dụng chạy trên máy ngoài Azure nhưng đã join domain: dùng managed identity</span></li>
<li><span class="lang-en">Apps running on a non-Azure machine that is not domain-joined: use certificate</span><span class="lang-vi">Ứng dụng chạy trên máy ngoài Azure và chưa join domain: dùng certificate</span></li>
<li><span class="lang-en">Admin tools on a non-Azure machine that is not domain-joined: use Azure AD integrated authentication, or Azure AD interactive authentication with multifactor authentication.</span><span class="lang-vi">Công cụ quản trị trên máy ngoài Azure và chưa join domain: dùng Azure AD integrated authentication, hoặc Azure AD interactive authentication kèm multifactor authentication.</span></li>
<li><span class="lang-en">Older apps where you can't change the connection string: SQL authentication.</span><span class="lang-vi">Ứng dụng cũ không đổi được connection string: dùng SQL authentication.</span></li>
</ul><li><span class="lang-en">Microsoft Entra ID can allow additional security such as Multi-Factor Authentication (MFA).</span><span class="lang-vi">Microsoft Entra ID cho phép thêm lớp bảo mật như Multi-Factor Authentication (MFA).</span></li>
<ul><li><span class="lang-en">Go to the Azure Portal – Active Directory – (The relevant active directory, if more than one), and Authentication methods. These include:</span><span class="lang-vi">Vào Azure Portal – Active Directory – (chọn active directory tương ứng nếu có nhiều) – Authentication methods. Các phương thức gồm:</span></li>
<ul><li><span class="lang-en">FIDO2 (Hardware) Security Key</span><span class="lang-vi">FIDO2 (Hardware) Security Key</span></li>
<li><span class="lang-en">Microsoft Authenticator (Phone App)</span><span class="lang-vi">Microsoft Authenticator (ứng dụng điện thoại)</span></li>
<li><span class="lang-en">Text message and</span><span class="lang-vi">Tin nhắn SMS, và</span></li>
<li><span class="lang-en">Temporary Access Pass</span><span class="lang-vi">Temporary Access Pass</span></li>
</ul></ul><li><span class="lang-en">To add a new user:</span><span class="lang-vi">Để thêm user mới:</span></li>
<ul><li><span class="lang-en">In Azure portals – go to Microsoft Entra ID.</span><span class="lang-vi">Trong Azure portal, vào Microsoft Entra ID.</span></li>
<li><span class="lang-en">Go to Users – New user.</span><span class="lang-vi">Vào Users – New user.</span></li>
<li><span class="lang-en">Enter:</span><span class="lang-vi">Nhập:</span></li>
<ul><li><span class="lang-en">Name</span><span class="lang-vi">Name</span></li>
<li><span class="lang-en">User name (similar to an email address), either @[DomainName].onmicrosoft.com, or a custom domain name.</span><span class="lang-vi">User name (giống địa chỉ email), dạng @[DomainName].onmicrosoft.com hoặc một tên miền tùy chỉnh.</span></li>
<li><span class="lang-en">Groups (Optional).</span><span class="lang-vi">Groups (tùy chọn).</span></li>
<li><span class="lang-en">Azure AD role (Optional),</span><span class="lang-vi">Azure AD role (tùy chọn),</span></li>
<li><span class="lang-en">Job info (Optional).</span><span class="lang-vi">Job info (tùy chọn).</span></li>
</ul><li><span class="lang-en">Azure will give you an autogenerated password in Password.</span><span class="lang-vi">Azure sẽ sinh sẵn một mật khẩu ở ô Password.</span></li>
<li><span class="lang-en">Click Create.</span><span class="lang-vi">Bấm Create.</span></li>
<li><span class="lang-en">You can delete a user from the same place.</span><span class="lang-vi">Bạn cũng xóa user được ở chính chỗ đó.</span></li>
</ul></ul>
<ul><li><span class="lang-en">Moving a logical server from SQL authentication to <b>Microsoft Entra-only authentication</b> without cutting the applications off — remember the four words <b>Admin → User → App → Lock</b> (&quot;Admin tạo User → User cấp quyền → App đổi cách login → Lock SQL&quot;):</span><span class="lang-vi">Chuyển một logical server từ SQL authentication sang <b>Microsoft Entra-only authentication</b> mà không làm đứt kết nối của ứng dụng — nhớ bốn chữ <b>Admin → User → App → Lock</b> (&quot;Admin tạo User → User cấp quyền → App đổi cách login → Lock SQL&quot;):</span></li>
<ul><li><span class="lang-en"><b>Admin</b> — assign a Microsoft Entra admin (a user or a group) to the logical server. Nothing else can happen first: without it you cannot connect with an Entra identity, and Azure will not let you switch on Entra-only either.</span><span class="lang-vi"><b>Admin</b> — gán một Microsoft Entra admin (user hoặc group) cho logical server. Không làm gì khác trước bước này được: chưa có admin thì không kết nối bằng danh tính Entra, và Azure cũng không cho bật Entra-only.</span></li>
<li><span class="lang-en"><b>User</b> — connect as that Entra admin and run <code>CREATE USER … FROM EXTERNAL PROVIDER</code> in each database, then add the users to database roles and grant the permissions they need.</span><span class="lang-vi"><b>User</b> — đăng nhập bằng chính Entra admin đó rồi chạy <code>CREATE USER … FROM EXTERNAL PROVIDER</code> trong từng database, sau đó thêm user vào database role và cấp quyền cần thiết.</span></li>
<li><span class="lang-en"><b>App</b> — switch the applications over to Entra token authentication (a managed identity, for example) and confirm they really connect. Do this while SQL authentication is still available, so a failure costs nothing.</span><span class="lang-vi"><b>App</b> — chuyển ứng dụng sang xác thực bằng token Entra (ví dụ managed identity) và xác nhận chúng kết nối được thật. Làm bước này khi SQL authentication vẫn còn bật, để nếu hỏng thì cũng không mất gì.</span></li>
<li><span class="lang-en"><b>Lock</b> — only once everything works, turn on Microsoft Entra-only authentication, which disables SQL authentication. Doing this any earlier cuts off every application and login that still uses a password.</span><span class="lang-vi"><b>Lock</b> — chỉ khi mọi thứ đã chạy ổn mới bật Microsoft Entra-only authentication, tức tắt SQL authentication. Bật sớm hơn là cắt đứt mọi ứng dụng và login còn dùng mật khẩu.</span></li>
</ul></ul></section>
<section id="s23a"><h3><span class="n">23a.</span> <span class="lang-en">Configure authentication for SQL on Azure VMs and Azure SQL Managed</span><span class="lang-vi">Cấu hình xác thực cho SQL trên Azure VM và Azure SQL Managed</span><a class="anch" href="#s23a" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Instance</span><span class="lang-vi">Instance</span></li>
<li><span class="lang-en">See topic 23.</span><span class="lang-vi">Xem mục 23.</span></li>
</ul></section>
<section id="s24"><h3><span class="n">24.</span> <span class="lang-en">create users from Entra ID identities</span><span class="lang-vi">tạo user từ danh tính Entra ID</span><a class="anch" href="#s24" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">You should create a second admin account as an Azure AD account, with the db_owner database roles.</span><span class="lang-vi">Bạn nên tạo một tài khoản admin thứ hai dưới dạng tài khoản Azure AD, với database role db_owner.</span></li>
<li><span class="lang-en">This is for Azure SQL Managed Instance.</span><span class="lang-vi">Điều này áp dụng cho Azure SQL Managed Instance.</span></li>
<ul><li><span class="lang-en">Azure SQL Databases use a separate login, e.g.:</span><span class="lang-vi">Azure SQL Database dùng một login riêng, ví dụ:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">CREATE LOGIN MyLogin
WITH PASSWORD = 'MyComplexPassword';
CREATE USER MyLogin FOR LOGIN MyLogin;
GO</span><span class="lang-vi">CREATE LOGIN MyLogin
WITH PASSWORD = 'MyComplexPassword';
CREATE USER MyLogin FOR LOGIN MyLogin;
GO</span></pre></li>
</ul><li><span class="lang-en">Logins can:</span><span class="lang-vi">Login có thể:</span></li>
<ul><li><span class="lang-en">Do SQL Agent management and jobs execution,</span><span class="lang-vi">Quản lý SQL Agent và chạy job,</span></li>
<li><span class="lang-en">Database backup and restore operations,</span><span class="lang-vi">Thực hiện backup và restore database,</span></li>
<li><span class="lang-en">Auditing,</span><span class="lang-vi">Auditing,</span></li>
<li><span class="lang-en">Trigger logon triggers, and</span><span class="lang-vi">Kích hoạt logon trigger, và</span></li>
<li><span class="lang-en">Setup Service Brokers and DB mail.</span><span class="lang-vi">Thiết lập Service Broker và DB mail.</span></li>
</ul></ul><li><span class="lang-en">Database users cannot be created using the Azure Portal.</span><span class="lang-vi">Không thể tạo database user bằng Azure Portal.</span></li>
<li><span class="lang-en">However, you can create logins from Azure AD users, groups or apps.</span><span class="lang-vi">Tuy nhiên bạn có thể tạo login từ user, group hoặc app của Azure AD.</span></li>
<ul><ul><ul><ul><ul><li><span class="lang-en">Syntax for Azure SQL Managed Instance</span><span class="lang-vi">Cú pháp cho Azure SQL Managed Instance</span></li>
</ul></ul></ul><li class="cb"><pre class="code"><span class="lang-en">CREATE LOGIN login_name [FROM EXTERNAL PROVIDER] { WITH &lt;option_list&gt; [,..]}</span><span class="lang-vi">CREATE LOGIN login_name [FROM EXTERNAL PROVIDER] { WITH &lt;option_list&gt; [,..]}</span></pre></li>
</ul><li><span class="lang-en">The parameters are:</span><span class="lang-vi">Các tham số gồm:</span></li>
<ul><li><span class="lang-en">login_name is an existing Azure AD UserPrincipalName of the user, DisplayName group or app when used with the “FROM EXTERNAL PROVIDER” indicates Azure AD Authentication.</span><span class="lang-vi">login_name là UserPrincipalName sẵn có của user, hoặc DisplayName của group/app; khi dùng kèm &quot;FROM EXTERNAL PROVIDER&quot; thì nghĩa là xác thực bằng Azure AD.</span></li>
<li><span class="lang-en">&lt;option_list&gt; ::=</span><span class="lang-vi">&lt;option_list&gt; ::=</span></li>
<ul><li><span class="lang-en">PASSWORD = {'password’} – this cannot be used when FROM EXTERNAL PROVIDER is used.</span><span class="lang-vi">PASSWORD = {'password'} — không dùng được khi đã dùng FROM EXTERNAL PROVIDER.</span></li>
<li><span class="lang-en">| SID = sid</span><span class="lang-vi">| SID = sid</span></li>
<li><span class="lang-en">| DEFAULT_DATABASE = database</span><span class="lang-vi">| DEFAULT_DATABASE = database</span></li>
<li><span class="lang-en">| DEFAULT_LANGUAGE = language</span><span class="lang-vi">| DEFAULT_LANGUAGE = language</span></li>
</ul></ul></ul><li><span class="lang-en">Create user:</span><span class="lang-vi">Create user:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">CREATE USER user_name
[ { FOR | FROM } LOGIN login_name ]
| FROM EXTERNAL PROVIDER
[ WITH &lt;limited_options_list&gt; [ ,... ] ]
[;]
&lt;limited_options_list&gt; ::=
DEFAULT_SCHEMA = schema_name
| DEFAULT_LANGUAGE = { NONE | lcid | language name | language alias }
| ALLOW_ENCRYPTED_VALUE_MODIFICATIONS = [ ON | OFF ] ]</span><span class="lang-vi">CREATE USER user_name
[ { FOR | FROM } LOGIN login_name ]
| FROM EXTERNAL PROVIDER
[ WITH &lt;limited_options_list&gt; [ ,... ] ]
[;]
&lt;limited_options_list&gt; ::=
DEFAULT_SCHEMA = schema_name
| DEFAULT_LANGUAGE = { NONE | lcid | language name | language alias }
| ALLOW_ENCRYPTED_VALUE_MODIFICATIONS = [ ON | OFF ] ]</span></pre></li>
</ul><li><span class="lang-en">Both SQL Server Administrators and Microsoft Entra ID Administrators for SQL Server can create:</span><span class="lang-vi">Cả SQL Server Administrator lẫn Microsoft Entra ID Administrator for SQL Server đều tạo được:</span></li>
<ul><li><span class="lang-en">Users based on SQL Server Authentication logins.</span><span class="lang-vi">User dựa trên login SQL Server Authentication.</span></li>
<li><span class="lang-en">Contained database users based on SQL Server Authentication (without logins)</span><span class="lang-vi">Contained database user dựa trên SQL Server Authentication (không cần login)</span></li>
</ul><li><span class="lang-en">Microsoft Entra ID Administrators for SQL Server only can create:</span><span class="lang-vi">Chỉ riêng Microsoft Entra ID Administrator for SQL Server mới tạo được:</span></li>
<ul><li><span class="lang-en">Contained database users based on Azure AD users and groups</span><span class="lang-vi">Contained database user dựa trên user và group của Azure AD</span></li>
</ul><li><span class="lang-en">create SQL Server logins</span><span class="lang-vi">create SQL Server logins</span></li>
<li><span class="lang-en">You cannot create an SQL Server login from the Azure portal.</span><span class="lang-vi">Bạn không tạo được SQL Server login từ Azure portal.</span></li>
<ul><li><span class="lang-en">But you can create an Azure AD admin.</span><span class="lang-vi">Nhưng bạn tạo được Azure AD admin.</span></li>
</ul><li><span class="lang-en">Create a login using SSMS (Managed Instance only):</span><span class="lang-vi">Create a login using SSMS (Managed Instance only):</span></li>
<ul><li><span class="lang-en">[Name of server] – Security – New – Login…</span><span class="lang-vi">[Tên server] – Security – New – Login…</span></li>
<li><span class="lang-en">Enter the user name in the Login name, or click Search…</span><span class="lang-vi">Nhập tên user vào ô Login name, hoặc bấm Search…</span></li>
<li><span class="lang-en">Select type of authentication:</span><span class="lang-vi">Select type of authentication:</span></li>
<ul><li><span class="lang-en">Windows authentication,</span><span class="lang-vi">Windows authentication,</span></li>
<li><span class="lang-en">SQL authentication (you will need a password if so),</span><span class="lang-vi">SQL authentication (khi đó cần mật khẩu),</span></li>
<li><span class="lang-en">“Microsoft Entra Universal with MFA [Multi-Factor Authentication] support”</span><span class="lang-vi">&quot;Microsoft Entra Universal with MFA [Multi-Factor Authentication] support&quot;</span></li>
<ul><li><span class="lang-en">Strong verification.</span><span class="lang-vi">Xác minh mạnh.</span></li>
</ul><li><span class="lang-en">“Microsoft Entra Password”</span><span class="lang-vi">&quot;Microsoft Entra Password&quot;</span></li>
<ul><li><span class="lang-en">Uses identities in Azure AD. You can use it when your computer is logged into Windows but it is not federated with Azure.</span><span class="lang-vi">Dùng danh tính trong Azure AD. Dùng được khi máy bạn đã đăng nhập Windows nhưng chưa federated với Azure.</span></li>
</ul><li><span class="lang-en">“Microsoft Entra Integrated”</span><span class="lang-vi">&quot;Microsoft Entra Integrated&quot;</span></li>
<ul><li><span class="lang-en">When connecting from a Windows which is a federated domain.</span><span class="lang-vi">Khi kết nối từ một máy Windows thuộc federated domain.</span></li>
</ul><li><span class="lang-en">Special purpose logins, which cannot connect to SQL Server, but which can own objects and have permissions:</span><span class="lang-vi">Các login đặc biệt — không kết nối được vào SQL Server nhưng sở hữu được object và có quyền:</span></li>
<ul><li><span class="lang-en">“SQL user without login” (no password),</span><span class="lang-vi">&quot;SQL user without login&quot; (không có mật khẩu),</span></li>
<li><span class="lang-en">“Mapped to [stand-alone security] certificate”,</span><span class="lang-vi">&quot;Mapped to [stand-alone security] certificate&quot;,</span></li>
<li><span class="lang-en">“Mapped to [stand-alone] asymmetric key”,</span><span class="lang-vi">&quot;Mapped to [stand-alone] asymmetric key&quot;,</span></li>
<li><span class="lang-en">“Mapped to [security] Credential”.</span><span class="lang-vi">&quot;Mapped to [security] Credential&quot;.</span></li>
</ul></ul><li><span class="lang-en">Select Default database (Master is the default), and</span><span class="lang-vi">Select Default database (Master is the default), and</span></li>
<li><span class="lang-en">Select Default language.</span><span class="lang-vi">Select Default language.</span></li>
</ul><li><span class="lang-en">Create a user using SSMS (Managed Instance and Azure SQL Database):</span><span class="lang-vi">Create a user using SSMS (Managed Instance and Azure SQL Database):</span></li>
<ul><li><span class="lang-en">[Name of server] – Security – New – User…</span><span class="lang-vi">[Tên server] – Security – New – User…</span></li>
<li><span class="lang-en">Select one of the following user types:</span><span class="lang-vi">Select one of the following user types:</span></li>
<ul><li><span class="lang-en">“SQL user with login”</span><span class="lang-vi">&quot;SQL user with login&quot;</span></li>
<ul><li><span class="lang-en">Used when a person outside of your organization connects.</span><span class="lang-vi">Dùng khi người ngoài tổ chức của bạn kết nối vào.</span></li>
</ul><li><span class="lang-en">“SQL user with password”. Also called a &quot;contained database user&quot;. You can select</span><span class="lang-vi">&quot;SQL user with password&quot;, còn gọi là &quot;contained database user&quot;. Bạn chọn được:</span></li>
<ul><li><span class="lang-en">User must change password at next login</span><span class="lang-vi">User phải đổi mật khẩu ở lần đăng nhập kế tiếp</span></li>
<li><span class="lang-en">Enforce password expiration, and</span><span class="lang-vi">Bắt buộc mật khẩu hết hạn, và</span></li>
<li><span class="lang-en">Enforce password policy.</span><span class="lang-vi">Bắt buộc tuân thủ chính sách mật khẩu.</span></li>
<li><span class="lang-en">Used when a person outside of your organization connects.</span><span class="lang-vi">Dùng khi người ngoài tổ chức của bạn kết nối vào.</span></li>
</ul><li><span class="lang-en">“SQL user without login” (no password),</span><span class="lang-vi">&quot;SQL user without login&quot; (không có mật khẩu),</span></li>
<ul><li><span class="lang-en">Can make your database more portable. Allowed in Azure SQL Database and in a contained database in SQL Server.</span><span class="lang-vi">Giúp database dễ di chuyển hơn. Được phép trong Azure SQL Database và trong contained database của SQL Server.</span></li>
<li><span class="lang-en">Cannot login but can be granted permissions.</span><span class="lang-vi">Không đăng nhập được nhưng vẫn được cấp quyền.</span></li>
</ul><li><span class="lang-en">“Mapped to [stand-alone security] certificate”,</span><span class="lang-vi">&quot;Mapped to [stand-alone security] certificate&quot;,</span></li>
<ul><li><span class="lang-en">Cannot login to a server, but can be granted permissions and can sign modules</span><span class="lang-vi">Không đăng nhập vào server được, nhưng được cấp quyền và ký được module</span></li>
</ul><li><span class="lang-en">“Mapped to [stand-alone] asymmetric key”,</span><span class="lang-vi">&quot;Mapped to [stand-alone] asymmetric key&quot;,</span></li>
<ul><li><span class="lang-en">Cannot login to a server, but can be granted permissions and can sign modules</span><span class="lang-vi">Không đăng nhập vào server được, nhưng được cấp quyền và ký được module</span></li>
</ul><li><span class="lang-en">“Windows user”.</span><span class="lang-vi">&quot;Windows user&quot;.</span></li>
</ul></ul></ul></section>
<section id="s25"><h3><span class="n">25.</span> <span class="lang-en">configure security principals</span><span class="lang-vi">cấu hình security principal</span><a class="anch" href="#s25" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Principal is that which receives permissions.</span><span class="lang-vi">Principal là đối tượng được nhận quyền.</span></li>
<ul><li><span class="lang-en">Server-level: logins and server roles</span><span class="lang-vi">Cấp server: login và server role</span></li>
<li><span class="lang-en">Database-level: users, database roles, application roles.</span><span class="lang-vi">Cấp database: user, database role, application role.</span></li>
</ul><li><span class="lang-en">Securables are that which can be secured.</span><span class="lang-vi">Securable là đối tượng có thể được bảo vệ.</span></li>
<ul><li><span class="lang-en">In a server, in a database, in a schema.</span><span class="lang-vi">Trong một server, trong một database, trong một schema.</span></li>
</ul><li><span class="lang-en">Fixed Server-wide Login permissions (MI and SQL Server in VM only)</span><span class="lang-vi">Quyền của Fixed Server-wide Login (chỉ có ở MI và SQL Server trên VM)</span></li>
<ul><li><span class="lang-en">sysadmin – any activity.</span><span class="lang-vi">sysadmin — làm được mọi thứ.</span></li>
<li><span class="lang-en">serveradmin – change server-wide configuration options and shut down the server.</span><span class="lang-vi">serveradmin — đổi các tùy chọn cấu hình toàn server và tắt server.</span></li>
<li><span class="lang-en">securityadmin – GRANT, DENY and REVOKE server-level permissions, and any database-level permissions if they have access to the database.</span><span class="lang-vi">securityadmin — GRANT, DENY và REVOKE quyền cấp server, và cả quyền cấp database nếu họ truy cập được database đó.</span></li>
<ul><li><span class="lang-en">This allows them to assign most server permissions.</span><span class="lang-vi">Nhờ vậy họ gán được hầu hết quyền của server.</span></li>
</ul><li><span class="lang-en">processadmin – end processes.</span><span class="lang-vi">processadmin — kết thúc process.</span></li>
<li><span class="lang-en">setupadmin – add/remove linked servers.</span><span class="lang-vi">setupadmin — thêm/xóa linked server.</span></li>
<li><span class="lang-en">bulkadmin – can run the BULK INSERT statement</span><span class="lang-vi">bulkadmin — chạy được lệnh BULK INSERT</span></li>
<li><span class="lang-en">diskadmin – managing disk files.</span><span class="lang-vi">diskadmin — quản lý file trên đĩa.</span></li>
<li><span class="lang-en">dbcreator – create/alter/drop/restore any database</span><span class="lang-vi">dbcreator — create/alter/drop/restore bất kỳ database nào</span></li>
<li><span class="lang-en">public – includes all users, group and roles. When you want the same permission(s) for everyone.</span><span class="lang-vi">public — gồm mọi user, group và role. Dùng khi bạn muốn cấp cùng một quyền cho tất cả.</span></li>
</ul><li><span class="lang-en">On the logical server of Azure SQL Database (and SQL Server 2022+), there are seven more fixed server-level roles, named with the prefix &quot;##MS_&quot; and the suffix &quot;##&quot;. They do not exist on MI or SQL Server in a VM, which use the classic roles above plus GRANT VIEW SERVER STATE.</span><span class="lang-vi">Trên logical server của Azure SQL Database (và SQL Server 2022+) còn có bảy fixed server-level role nữa, đặt tên với tiền tố &quot;##MS_&quot; và hậu tố &quot;##&quot;. Chúng KHÔNG tồn tại trên MI hay SQL Server trên VM — hai môi trường đó dùng các role cổ điển ở trên cộng với GRANT VIEW SERVER STATE.</span></li>
<ul><li><span class="lang-en">##MS_ServerStateReader## – holds VIEW SERVER STATE, so it can read the state DMVs (<code>sys.dm_exec_requests</code>, <code>sys.dm_exec_query_stats</code>…) on every database. This is the role for a monitoring tool that must not change configuration nor read object definitions.</span><span class="lang-vi">##MS_ServerStateReader## — có quyền VIEW SERVER STATE, nên đọc được các state DMV (<code>sys.dm_exec_requests</code>, <code>sys.dm_exec_query_stats</code>…) trên mọi database. Đây là role dành cho công cụ giám sát chỉ được đọc, không được đổi cấu hình cũng không được xem định nghĩa object.</span></li>
<li><span class="lang-en">##MS_ServerStateManager## – everything ##MS_ServerStateReader## has, plus ALTER SERVER STATE (DBCC FREEPROCCACHE, DBCC FREESYSTEMCACHE (&#39;ALL&#39;), DBCC SQLPERF()).</span><span class="lang-vi">##MS_ServerStateManager## — có mọi quyền của ##MS_ServerStateReader##, cộng thêm ALTER SERVER STATE (DBCC FREEPROCCACHE, DBCC FREESYSTEMCACHE (&#39;ALL&#39;), DBCC SQLPERF()).</span></li>
<li><span class="lang-en">##MS_DefinitionReader## – VIEW ANY DATABASE + VIEW ANY DEFINITION: reads object definitions and catalog views, not server state.</span><span class="lang-vi">##MS_DefinitionReader## — VIEW ANY DATABASE + VIEW ANY DEFINITION: đọc định nghĩa object và catalog view, không đọc được state của server.</span></li>
<li><span class="lang-en">##MS_SecurityDefinitionReader## – VIEW ANY SECURITY DEFINITION only, a small subset of ##MS_DefinitionReader##.</span><span class="lang-vi">##MS_SecurityDefinitionReader## — chỉ có VIEW ANY SECURITY DEFINITION, là một phần nhỏ của ##MS_DefinitionReader##.</span></li>
<li><span class="lang-en">##MS_DatabaseConnector## – CONNECT ANY DATABASE: connects to any database without needing a user account in it. A DENY CONNECT on a matching database user overrides this.</span><span class="lang-vi">##MS_DatabaseConnector## — CONNECT ANY DATABASE: kết nối được vào mọi database mà không cần có user trong đó. Nếu tạo user tương ứng trong database rồi DENY CONNECT thì lệnh DENY đó thắng.</span></li>
<li><span class="lang-en">##MS_DatabaseManager## – CREATE ANY DATABASE + ALTER ANY DATABASE. Use it instead of the dbmanager role in &quot;master&quot;.</span><span class="lang-vi">##MS_DatabaseManager## — CREATE ANY DATABASE + ALTER ANY DATABASE. Nên dùng role này thay cho role dbmanager trong &quot;master&quot;.</span></li>
<li><span class="lang-en">##MS_LoginManager## – CREATE LOGIN + ALTER ANY LOGIN. Use it instead of the loginmanager role in &quot;master&quot;.</span><span class="lang-vi">##MS_LoginManager## — CREATE LOGIN + ALTER ANY LOGIN. Nên dùng role này thay cho role loginmanager trong &quot;master&quot;.</span></li>
<li><span class="lang-en">Membership is changed with ALTER SERVER ROLE, run in the virtual &quot;master&quot; database, and only the server admin or the Microsoft Entra admin can do it:</span><span class="lang-vi">Thêm/bớt thành viên bằng ALTER SERVER ROLE, chạy trong database ảo &quot;master&quot;, và chỉ server admin hoặc Microsoft Entra admin mới làm được:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER SERVER ROLE ##MS_ServerStateReader## ADD MEMBER [monitoring_login];
GO
SELECT * FROM sys.server_role_members; -- check the members of the server roles</span><span class="lang-vi">ALTER SERVER ROLE ##MS_ServerStateReader## ADD MEMBER [monitoring_login];
GO
SELECT * FROM sys.server_role_members; -- kiểm tra thành viên của các server role</span></pre></li>
</ul><li><span class="lang-en">The server-level permission only becomes usable inside a database if that login also has a user account there (or is a member of ##MS_DatabaseConnector##). A DENY inside a user database overrides the grant coming from the role.</span><span class="lang-vi">Quyền cấp server chỉ dùng được bên trong một database nếu login đó cũng có user trong database ấy (hoặc là thành viên ##MS_DatabaseConnector##). Một lệnh DENY trong user database sẽ thắng quyền được cấp qua role.</span></li>
<li><span class="lang-en">A membership change can take up to 5 minutes to take effect and the session must reconnect; DBCC FLUSHAUTHCACHE in the user database shortens the wait.</span><span class="lang-vi">Đổi thành viên có thể mất tới 5 phút mới có hiệu lực và session phải kết nối lại; chạy DBCC FLUSHAUTHCACHE trong user database để rút ngắn thời gian chờ.</span></li>
</ul><li><span class="lang-en">There are also Fixed Database Roles:</span><span class="lang-vi">Ngoài ra còn có Fixed Database Role:</span></li>
<ul><li><span class="lang-en">db_owner – all configuration and most maintenance activities (in Azure SQL Database, some activities require server-level permissions), including DROP database.</span><span class="lang-vi">db_owner — mọi cấu hình và hầu hết hoạt động bảo trì (trong Azure SQL Database, một số hoạt động cần quyền cấp server), kể cả DROP database.</span></li>
<ul><li><span class="lang-en">However, if you give them db_denydatareader or DENY permissions, you can deny read access to data.</span><span class="lang-vi">Tuy nhiên nếu bạn gán thêm db_denydatareader hoặc DENY thì vẫn chặn được quyền đọc dữ liệu của họ.</span></li>
</ul><li><span class="lang-en">db_securityadmin – can modify role membership for custom roles only and manage permissions. Can elevate own permissions.</span><span class="lang-vi">db_securityadmin — chỉ sửa được thành viên của custom role và quản lý quyền. Có thể tự nâng quyền của chính mình.</span></li>
<li><span class="lang-en">db_accessadmin – add/remove access to the database for logins and groups.</span><span class="lang-vi">db_accessadmin — thêm/xóa quyền truy cập database cho login và group.</span></li>
<li><span class="lang-en">db_backupoperator – can back up the database in MI or VM (not applicable in Azure SQL Database, as BACKUP/RESTORE commands not available).</span><span class="lang-vi">db_backupoperator — backup được database trên MI hoặc VM (không áp dụng cho Azure SQL Database vì không có lệnh BACKUP/RESTORE).</span></li>
<li><span class="lang-en">db_ddladmin – run DDL command.</span><span class="lang-vi">db_ddladmin — chạy được lệnh DDL.</span></li>
<li><span class="lang-en">db_[deny]datareader – [cannot] read all data from all user tables and views.</span><span class="lang-vi">db_[deny]datareader — [không] đọc được toàn bộ dữ liệu từ mọi bảng và view của người dùng.</span></li>
<li><span class="lang-en">db_[deny]datawriter - [cannot] add/delete/change data in all user tables.</span><span class="lang-vi">db_[deny]datawriter — [không] thêm/xóa/sửa được dữ liệu trong mọi bảng của người dùng.</span></li>
</ul><li><span class="lang-en">You can also add custom roles.</span><span class="lang-vi">Bạn cũng có thể thêm custom role.</span></li>
<li><span class="lang-en">In Azure SQL Databases, there are also two special database roles in the &quot;master&quot; database only:</span><span class="lang-vi">Trong Azure SQL Database còn có hai database role đặc biệt, chỉ tồn tại ở database &quot;master&quot;:</span></li>
<ul><li><span class="lang-en">dbmanager – can create/delete databases. Connects as the dbo (database owner) user.</span><span class="lang-vi">dbmanager — tạo/xóa được database. Kết nối với tư cách user dbo (database owner).</span></li>
<li><span class="lang-en">loginmanager – create/delete logins in the &quot;master&quot; database (as per securityadmin server role in on-prem SQL Server)</span><span class="lang-vi">loginmanager — tạo/xóa login trong database &quot;master&quot; (tương đương server role securityadmin của SQL Server on-prem)</span></li>
</ul><li><span class="lang-en">You can use:</span><span class="lang-vi">Bạn có thể dùng:</span></li>
<ul><li><span class="lang-en">sp_helprotect – returns user permissions for an object (or all objects) in the current database.</span><span class="lang-vi">sp_helprotect – returns user permissions for an object (or all objects) in the current database.</span></li>
<ul><li><span class="lang-en">Does not list standard fixed server/database role permissions.</span><span class="lang-vi">Không liệt kê quyền của các fixed server/database role tiêu chuẩn.</span></li>
<li><span class="lang-en">Not available for Azure SQL Database.</span><span class="lang-vi">Không có ở Azure SQL Database.</span></li>
</ul><li><span class="lang-en">sp_helprole – lists the database roles.</span><span class="lang-vi">sp_helprole – lists the database roles.</span></li>
<li><span class="lang-en">sp_helprolemember – direct members of a role.</span><span class="lang-vi">sp_helprolemember – direct members of a role.</span></li>
<ul><li><span class="lang-en">Not available for Azure SQL Database.</span><span class="lang-vi">Không có ở Azure SQL Database.</span></li>
</ul></ul><li><span class="lang-en">There are also role-based access control (RBAC), which are security rights outside of databases, which include:</span><span class="lang-vi">Ngoài ra còn có role-based access control (RBAC) — các quyền bảo mật nằm ngoài database, gồm:</span></li>
<ul><li><span class="lang-en">SQL DB/Managed Instance/Server Contributor – manage SQL Databases, Mis or Servers, but not get access to them. Cannot manage security-related policies.</span><span class="lang-vi">SQL DB/Managed Instance/Server Contributor — quản lý được SQL Database, MI hoặc Server nhưng không truy cập vào chúng. Không quản lý được chính sách liên quan bảo mật.</span></li>
<li><span class="lang-en">SQL Security Manager – mange security-related policies for servers and databases, but no access to them.</span><span class="lang-vi">SQL Security Manager — quản lý chính sách liên quan bảo mật cho server và database, nhưng không truy cập vào chúng.</span></li>
</ul><li><span class="lang-en">When deploying, Azure uses the &quot;server admin&quot;, which is a principal in Azure SQL Database, and a member of the sysadmin role in MI.</span><span class="lang-vi">Khi triển khai, Azure dùng &quot;server admin&quot; — là một principal trong Azure SQL Database, và là thành viên role sysadmin trong MI.</span></li>
</ul></section>
<section id="s26"><h3><span class="n">26.</span> <span class="lang-en">configure database and object-level permissions using graphical tools</span><span class="lang-vi">cấu hình quyền cấp database và cấp object bằng công cụ đồ họa</span><a class="anch" href="#s26" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">This is for MI and VM (not Azure SQL Database).</span><span class="lang-vi">Phần này áp dụng cho MI và VM (không áp dụng Azure SQL Database).</span></li>
<li><span class="lang-en">In a particular login:</span><span class="lang-vi">Trong một login cụ thể:</span></li>
<ul><li><span class="lang-en">Click Search.</span><span class="lang-vi">Bấm Search.</span></li>
<li><span class="lang-en">Select:</span><span class="lang-vi">Select:</span></li>
<ul><li><span class="lang-en">“The server”,</span><span class="lang-vi">&quot;The server&quot;,</span></li>
<li><span class="lang-en">“Specific objects”. If so, click “Object Types” and select Endpoints, Logins, Servers, Availability Groups and/or Server roles.</span><span class="lang-vi">&quot;Specific objects&quot;. Nếu chọn cái này, bấm &quot;Object Types&quot; và chọn Endpoint, Login, Server, Availability Group và/hoặc Server role.</span></li>
<li><span class="lang-en">“All objects of the types” – select Endpoints, Logins, Servers, Availability Groups and/or Server roles.</span><span class="lang-vi">&quot;All objects of the types&quot; — chọn Endpoint, Login, Server, Availability Group và/hoặc Server role.</span></li>
</ul></ul><li><span class="lang-en">Objects that can be secured include:</span><span class="lang-vi">Các object có thể được bảo vệ gồm:</span></li>
<ul><li><span class="lang-en">Server</span><span class="lang-vi">Server</span></li>
<ul><li><span class="lang-en">Availability group, Endpoint, Login, Server role and Database</span><span class="lang-vi">Availability group, Endpoint, Login, Server role và Database</span></li>
</ul><li><span class="lang-en">Database</span><span class="lang-vi">Database</span></li>
<ul><li><span class="lang-en">Application role, Assembly, Asymmetric key, Certificate, Contract, Fulltext catalog, Fulltext stoplist, Message type, Remote Service Binding, (Database) Role, Route, Schema, Search property list, Service, Symmetric key, User</span><span class="lang-vi">Application role, Assembly, Asymmetric key, Certificate, Contract, Fulltext catalog, Fulltext stoplist, Message type, Remote Service Binding, (Database) Role, Route, Schema, Search property list, Service, Symmetric key, User</span></li>
</ul><li><span class="lang-en">Schema</span><span class="lang-vi">Schema</span></li>
<ul><li><span class="lang-en">Type</span><span class="lang-vi">Type</span></li>
<li><span class="lang-en">XML schema collection</span><span class="lang-vi">XML schema collection</span></li>
<li><span class="lang-en">Object: Aggregate, Function, Procedure, Queue, Synonym, Table, View, External Table</span><span class="lang-vi">Object: Aggregate, Function, Procedure, Queue, Synonym, Table, View, External Table</span></li>
</ul></ul></ul></section>
<section id="s27"><h3><span class="n">27.</span> <span class="lang-en">apply principle of least privilege for all securables</span><span class="lang-vi">áp dụng nguyên tắc đặc quyền tối thiểu cho mọi securable</span><a class="anch" href="#s27" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Users should have the least privilege that is necessary for them to do their job.</span><span class="lang-vi">Người dùng chỉ nên có mức đặc quyền tối thiểu đủ để làm việc của họ.</span></li>
<ul><li><span class="lang-en">This is called the Least-privileged User Account (LUA).</span><span class="lang-vi">Nguyên tắc này gọi là Least-privileged User Account (LUA).</span></li>
</ul><li><span class="lang-en">You can use Roles to assigned permissions to roles, and then users to roles.</span><span class="lang-vi">Bạn có thể dùng Role: gán quyền cho role, rồi gán user vào role.</span></li>
<ul><li><span class="lang-en">This makes security administration more easy.</span><span class="lang-vi">Cách này giúp việc quản trị bảo mật dễ hơn.</span></li>
</ul><li><span class="lang-en">You can use the following permissions:</span><span class="lang-vi">Bạn có thể dùng các quyền sau:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">GRANT
REVOKE (the opposite of GRANT)</span><span class="lang-vi">GRANT
REVOKE (the opposite of GRANT)</span></pre></li>
<ul><li><span class="lang-en">Why use REVOKE instead of GRANT? It doesn’t give permissions, but it doesn’t stop permissions if they have it through another role.</span><span class="lang-vi">Vì sao dùng REVOKE thay vì GRANT? Nó không cấp quyền, nhưng cũng không chặn quyền nếu người đó có được quyền qua một role khác.</span></li>
</ul><li><code><span class="lang-en">DENY (this overrides a GRANT).</span><span class="lang-vi">DENY (this overrides a GRANT).</span></code></li>
<ul><li><span class="lang-en">DENY does not apply to sysadmin members or object owners.</span><span class="lang-vi">DENY does not apply to sysadmin members or object owners.</span></li>
<li><span class="lang-en">If DENY is applied to the public role, no non-sysadmin will have this permission.</span><span class="lang-vi">Nếu DENY được áp lên role public thì không một ai ngoài sysadmin còn quyền đó.</span></li>
</ul></ul><li><span class="lang-en">You can also prevent users from querying objects directly by allowing only access to procedures or functions.</span><span class="lang-vi">Bạn cũng có thể ngăn user truy vấn trực tiếp object, chỉ cho họ truy cập qua procedure hoặc function.</span></li>
<li><span class="lang-en">Objects are chained together.</span><span class="lang-vi">Các object được nối chuỗi với nhau (chaining).</span></li>
<ul><li><span class="lang-en">If two objects have the same owner, then permissions in a second object called from the first are not separately checked.</span><span class="lang-vi">Nếu hai object có cùng owner thì quyền trên object thứ hai (được gọi từ object thứ nhất) không bị kiểm tra riêng.</span></li>
</ul><li><span class="lang-en">You should still reduce the number of objects affected by permissions.</span><span class="lang-vi">Bạn vẫn nên giảm số lượng object bị ảnh hưởng bởi quyền.</span></li>
<ul><li><span class="lang-en">SELECT permission in a database includes all (child) schemas, and the tables and views.</span><span class="lang-vi">SELECT permission in a database includes all (child) schemas, and the tables and views.</span></li>
<li><span class="lang-en">SELECT permissions on a schema includes all of the tables and views.</span><span class="lang-vi">SELECT permissions on a schema includes all of the tables and views.</span></li>
<li><span class="lang-en">SELECT on a table gives SELECT permission only.</span><span class="lang-vi">SELECT on a table gives SELECT permission only.</span></li>
<li><span class="lang-en">CONTROL gives ownership-like permissions and includes all other permissions, including ALTER, SELECT, INSERT, UPDATE.</span><span class="lang-vi">CONTROL cho quyền tương đương chủ sở hữu và bao gồm mọi quyền khác, kể cả ALTER, SELECT, INSERT, UPDATE.</span></li>
</ul></ul></section>
<section id="s29"><h3><span class="n">29.</span> <span class="lang-en">manage certificates</span><span class="lang-vi">quản lý certificate</span><a class="anch" href="#s29" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">To create a self-signed certificate:</span><span class="lang-vi">Để tạo một self-signed certificate:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">CREATE CERTIFICATE CertificateName
ENCRYPTION BY PASSWORD = ‘ComplicatedPassword’
WITH SUBJECT = ‘CertificateSubjectName’,
EXPIRY_DATE = ‘20291231’;
GO</span><span class="lang-vi">CREATE CERTIFICATE CertificateName
ENCRYPTION BY PASSWORD = 'ComplicatedPassword'
WITH SUBJECT = ‘CertificateSubjectName’,
EXPIRY_DATE = '20291231';
GO</span></pre></li>
<ul><li><span class="lang-en">If this is not used, the private key is encrypted using the database master key.</span><span class="lang-vi">Nếu không dùng mệnh đề này, private key sẽ được mã hóa bằng database master key.</span></li>
<li><span class="lang-en">This is a field in the certificate metadata.</span><span class="lang-vi">Đây là một trường trong metadata của certificate.</span></li>
<li><span class="lang-en">You can also have a START_DATE (in UTC). If not specified, START_DATE defaults to current date, and EXPIRY_DATE (UTC) is one year after START_DATE.</span><span class="lang-vi">Bạn cũng có thể đặt START_DATE (theo UTC). Nếu không chỉ định, START_DATE mặc định là ngày hiện tại, và EXPIRY_DATE (UTC) là một năm sau START_DATE.</span></li>
</ul></ul><li><span class="lang-en">By default, this certificate is stored in the master database.</span><span class="lang-vi">Mặc định certificate này được lưu trong database master.</span></li>
<ul><li><span class="lang-en">The Azure Key Vault can store customer-managed certificates (&quot;Bring your own Key – BYOK&quot;)</span><span class="lang-vi">Azure Key Vault có thể lưu certificate do khách hàng tự quản lý (&quot;Bring your own Key – BYOK&quot;)</span></li>
</ul><li><span class="lang-en">To restore a previously-created certificate, you can also use CREATE CERTIFICATE with FILE = 'path'</span><span class="lang-vi">Để khôi phục một certificate đã tạo trước đó, bạn cũng có thể dùng CREATE CERTIFICATE với FILE = 'path'</span></li>
<ul><li><span class="lang-en">Azure SQL Database does not support creating a certificate from a file or using private key files.</span><span class="lang-vi">Azure SQL Database không hỗ trợ tạo certificate từ file hay dùng file private key.</span></li>
</ul><li><span class="lang-en">You can also ALTER CERTIFICATE</span><span class="lang-vi">Bạn cũng có thể dùng ALTER CERTIFICATE</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER CERTIFICATE CertificateName
WITH PRIVATE KEY (ENCRYPTION BY PASSWORD = ‘ComplicatedPassword’)</span><span class="lang-vi">ALTER CERTIFICATE CertificateName
WITH PRIVATE KEY (ENCRYPTION BY PASSWORD = ‘ComplicatedPassword’)</span></pre></li>
<li><span class="lang-en">You can change the password, but not the SUBJECT or DATEs.</span><span class="lang-vi">Bạn đổi được mật khẩu, nhưng không đổi được SUBJECT hay các ngày.</span></li>
</ul><li><span class="lang-en">You can also DROP CERTIFICATE.</span><span class="lang-vi">Bạn cũng có thể DROP CERTIFICATE.</span></li>
</ul></section>
<section id="s29-2"><h3><span class="n">29.</span> <span class="lang-en">manage security principals</span><span class="lang-vi">quản lý security principal</span><a class="anch" href="#s29-2" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">(Use “GO” after each statement).</span><span class="lang-vi">(Dùng &quot;GO&quot; sau mỗi câu lệnh).</span></li>
<li><span class="lang-en">For MI and SQL Server in VMs:</span><span class="lang-vi">Với MI và SQL Server trên VM:</span></li>
<ul><li><span class="lang-en">To create a login for a local Microsoft Entra ID account:</span><span class="lang-vi">Để tạo login cho một tài khoản Microsoft Entra ID cục bộ:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">CREATE LOGIN [login_name] FROM EXTERNAL PROVIDER -- the last 3 words indicate Azure AD.</span><span class="lang-vi">CREATE LOGIN [login_name] FROM EXTERNAL PROVIDER -- the last 3 words indicate Azure AD.</span></pre></li>
</ul><li><span class="lang-en">To check</span><span class="lang-vi">Để kiểm tra</span></li>
<ul><li><code><span class="lang-en">SELECT * FROM sys.server_principals;</span><span class="lang-vi">SELECT * FROM sys.server_principals;</span></code></li>
</ul><li><span class="lang-en">To add members into a server role:</span><span class="lang-vi">Để thêm thành viên vào một server role:</span></li>
<ul><li><code><span class="lang-en">ALTER SERVER ROLE server_role ADD MEMBER [login_name]</span><span class="lang-vi">ALTER SERVER ROLE server_role ADD MEMBER [login_name]</span></code></li>
</ul><li><span class="lang-en">To create a user:</span><span class="lang-vi">Để tạo user:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">USE &lt;Database Name&gt;
CREATE USER [user_name] FROM LOGIN [login_name]</span><span class="lang-vi">USE &lt;Database Name&gt;
CREATE USER [user_name] FROM LOGIN [login_name]</span></pre></li>
</ul></ul><li><span class="lang-en">For Azure SQL Database:</span><span class="lang-vi">Với Azure SQL Database:</span></li>
<ul><li><span class="lang-en">To create a user based on a local Microsoft Entra ID account:</span><span class="lang-vi">Để tạo user dựa trên tài khoản Microsoft Entra ID cục bộ:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">USE &lt;Database Name&gt;
CREATE USER [user_name] FROM EXTERNAL PROVIDER</span><span class="lang-vi">USE &lt;Database Name&gt;
CREATE USER [user_name] FROM EXTERNAL PROVIDER</span></pre></li>
</ul><li><span class="lang-en">You can create users in the master database, then create a user based on it, but it is better practice to do the above:</span><span class="lang-vi">Bạn có thể tạo user trong database master rồi tạo user dựa trên đó, nhưng cách ở trên mới là best practice:</span></li>
<ul><li><span class="lang-en">[In Master] CREATE LOGIN demo WITH PASSWORD = 'Pa55.w.rd'</span><span class="lang-vi">[Trong Master] CREATE LOGIN demo WITH PASSWORD = 'Pa55.w.rd'</span></li>
<ul><li><span class="lang-en">To check</span><span class="lang-vi">Để kiểm tra</span></li>
<ul><li><code><span class="lang-en">SELECT * FROM sys.sql_logins</span><span class="lang-vi">SELECT * FROM sys.sql_logins</span></code></li>
</ul></ul><li><span class="lang-en">[In database] CREATE USER demo FROM LOGIN demo</span><span class="lang-vi">[Trong database] CREATE USER demo FROM LOGIN demo</span></li>
</ul></ul><li><span class="lang-en">To check users:</span><span class="lang-vi">Để kiểm tra user:</span></li>
<ul><li><code><span class="lang-en">SELECT * FROM sys.database_principals</span><span class="lang-vi">SELECT * FROM sys.database_principals</span></code></li>
</ul><li><span class="lang-en">(Use “GO” after each statement).</span><span class="lang-vi">(Dùng &quot;GO&quot; sau mỗi câu lệnh).</span></li>
<li><span class="lang-en">To grant permissions:</span><span class="lang-vi">Để cấp quyền:</span></li>
<ul><li><span class="lang-en">AUTHORIZATION PERMISSION ON SECURABLE::NAME TO PRINCIPAL;</span><span class="lang-vi">AUTHORIZATION PERMISSION ON SECURABLE::NAME TO PRINCIPAL;</span></li>
<ul><li><span class="lang-en">For example: GRANT SELECT ON OBJECT::Region TO Ted [WITH GRANT OPTION];</span><span class="lang-vi">Ví dụ: GRANT SELECT ON OBJECT::Region TO Ted [WITH GRANT OPTION];</span></li>
</ul><li><span class="lang-en">AUTHORIZATION can be GRANT, REVOKE or DENY.</span><span class="lang-vi">AUTHORIZATION có thể là GRANT, REVOKE hoặc DENY.</span></li>
<ul><li><span class="lang-en">REVOKE is the opposite of a GRANT.</span><span class="lang-vi">REVOKE is the opposite of a GRANT.</span></li>
<li><span class="lang-en">DENY beats all GRANTs from other roles.</span><span class="lang-vi">DENY beats all GRANTs from other roles.</span></li>
</ul><li><span class="lang-en">PERMISSION can be</span><span class="lang-vi">PERMISSION có thể là</span></li>
<ul><li><span class="lang-en">For tables and views, SELECT, INSERT, UPDATE and DELETE.</span><span class="lang-vi">Với bảng và view: SELECT, INSERT, UPDATE và DELETE.</span></li>
<ul><li><span class="lang-en">They can also be CONTROL (all rights), REFERENCES (view foreign keys), TAKE OWNERSHIP, VIEW CHANGE TRACKING and VIEW DEFINITION.</span><span class="lang-vi">Cũng có thể là CONTROL (toàn quyền), REFERENCES (xem foreign key), TAKE OWNERSHIP, VIEW CHANGE TRACKING và VIEW DEFINITION.</span></li>
</ul><li><span class="lang-en">For schema, ALTER permission on a schema is wide-ranging. You can alter, create or drop any securable in that schema. However, you cannot change ownership.</span><span class="lang-vi">Với schema, quyền ALTER trên schema có phạm vi rất rộng. Bạn alter, create hoặc drop được mọi securable trong schema đó. Tuy nhiên bạn không đổi được quyền sở hữu.</span></li>
<li><span class="lang-en">For functions and stored procedures, ALTER (change definition), CONTROL, EXECUTE, VIEW CHANGE TRACKING and VIEW DEFINITION.</span><span class="lang-vi">Với function và stored procedure: ALTER (đổi định nghĩa), CONTROL, EXECUTE, VIEW CHANGE TRACKING và VIEW DEFINITION.</span></li>
<li><span class="lang-en">You can give permissions on a stored procedure/function without giving permissions on the underlying tables/views through ownership chaining (see topic 27).</span><span class="lang-vi">Bạn có thể cấp quyền trên stored procedure/function mà không cần cấp quyền trên bảng/view bên dưới, nhờ ownership chaining (xem mục 27).</span></li>
<li><span class="lang-en">ALL (deprecated, maintained for backward compatibility)</span><span class="lang-vi">ALL (đã deprecated, chỉ giữ để tương thích ngược)</span></li>
<ul><li><span class="lang-en">For databases, that means BACKUP DATABASE and LOG, CREATE DATABASE, FUNCTION, PROCEDURE, RULE, TABLE, and VIEW (note – not DROP or ALTER).</span><span class="lang-vi">Với database, ALL nghĩa là BACKUP DATABASE và LOG, CREATE DATABASE, FUNCTION, PROCEDURE, RULE, TABLE và VIEW (lưu ý — không gồm DROP hay ALTER).</span></li>
<li><span class="lang-en">For tables and views, ALL means DELETE, INSERT, REFERENCES, SELECT, and UPDATE.</span><span class="lang-vi">Với bảng và view, ALL nghĩa là DELETE, INSERT, REFERENCES, SELECT và UPDATE.</span></li>
<li><span class="lang-en">For procedures, ALL means EXECUTE.</span><span class="lang-vi">Với procedure, ALL nghĩa là EXECUTE.</span></li>
<li><span class="lang-en">For scalar functions, ALL means EXECUTE and REFERENCES.</span><span class="lang-vi">Với scalar function, ALL nghĩa là EXECUTE và REFERENCES.</span></li>
<li><span class="lang-en">For table-valued functions, ALL means DELETE, INSERT, REFERENCES, SELECT and UPDATE</span><span class="lang-vi">Với table-valued function, ALL nghĩa là DELETE, INSERT, REFERENCES, SELECT và UPDATE</span></li>
</ul></ul><li><span class="lang-en">SECURABLE is OBJECT::, SCHEMA:: or DATABASE:: or SERVER::</span><span class="lang-vi">SECURABLE là OBJECT::, SCHEMA::, DATABASE:: hoặc SERVER::</span></li>
<li><span class="lang-en">PRINCIPAL is a login, user or role.</span><span class="lang-vi">PRINCIPAL là một login, user hoặc role.</span></li>
<li><span class="lang-en">The optional [WITH GRANT OPTION] allows you to grant that permission to others.</span><span class="lang-vi">Tùy chọn [WITH GRANT OPTION] cho phép người nhận cấp lại quyền đó cho người khác.</span></li>
</ul><li><span class="lang-en">To check permissions:</span><span class="lang-vi">Để kiểm tra quyền:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT * FROM sys.fn_my_permissions (NULL, 'DATABASE') -- login permissions.
SELECT * FROM sys.fn_my_permissions ('MyMITestDB','DATABASE') – user permissions.</span><span class="lang-vi">SELECT * FROM sys.fn_my_permissions (NULL, 'DATABASE') -- login permissions.
SELECT * FROM sys.fn_my_permissions ('MyMITestDB','DATABASE') – user permissions.</span></pre></li>
</ul><li><span class="lang-en">To test user permissions:</span><span class="lang-vi">Để kiểm thử quyền của user:</span></li>
<ul><li><code><span class="lang-en">CREATE PROCEDURE proc_name WITH EXECUTE AS user_name AS …</span><span class="lang-vi">CREATE PROCEDURE proc_name WITH EXECUTE AS user_name AS …</span></code></li>
<li><span class="lang-en">or if sysadmin in MI or VM:</span><span class="lang-vi">hoặc nếu là sysadmin trên MI hay VM:</span></li>
<ul><li><code><span class="lang-en">EXECUTE AS LOGIN = ‘login_name’</span><span class="lang-vi">EXECUTE AS LOGIN = ‘login_name’</span></code></li>
</ul><li><span class="lang-en">or EXECUTE AS USER = 'user_name'</span><span class="lang-vi">hoặc EXECUTE AS USER = 'user_name'</span></li>
</ul></ul></section>
<section id="s29-3"><h3><span class="n">29.</span> <span class="lang-en">configure permissions for users to access database objects</span><span class="lang-vi">cấu hình quyền cho user truy cập các object trong database</span><a class="anch" href="#s29-3" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">To add permissions to access database objects:</span><span class="lang-vi">Để thêm quyền truy cập object trong database:</span></li>
<ul><li><span class="lang-en">AUTHORIZATION PERMISSION ON SECURABLE::NAME TO PRINCIPAL;</span><span class="lang-vi">AUTHORIZATION PERMISSION ON SECURABLE::NAME TO PRINCIPAL;</span></li>
<li><span class="lang-en">For example:</span><span class="lang-vi">Ví dụ:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">GRANT SELECT ON OBJECT::Region TO Phillip;
GRANT SELECT ON OBJECT::Customer(CustomerName) TO Phillip; -- This is a column.</span><span class="lang-vi">GRANT SELECT ON OBJECT::Region TO Phillip;
GRANT SELECT ON OBJECT::Customer(CustomerName) TO Phillip; -- This is a column.</span></pre></li>
</ul><li><span class="lang-en">AUTHORIZATION can be GRANT, REVOKE or DENY.</span><span class="lang-vi">AUTHORIZATION có thể là GRANT, REVOKE hoặc DENY.</span></li>
<li><span class="lang-en">PERMISSION is:</span><span class="lang-vi">PERMISSION là:</span></li>
<ul><li><span class="lang-en">CONTROL (ownership-like capabilities).</span><span class="lang-vi">CONTROL (quyền tương đương chủ sở hữu).</span></li>
<li><span class="lang-en">ALTER – allows for ALTER, CREATE and DROP.</span><span class="lang-vi">ALTER – allows for ALTER, CREATE and DROP.</span></li>
<li><span class="lang-en">ALTER ANY [Server_Securable] – CREATE, ALTER and DROP things such as LOGIN.</span><span class="lang-vi">ALTER ANY [Server_Securable] – CREATE, ALTER and DROP things such as LOGIN.</span></li>
<li><code><span class="lang-en">DELETE/INSERT/SELECT/UPDATE</span><span class="lang-vi">DELETE/INSERT/SELECT/UPDATE</span></code></li>
<li><span class="lang-en">TAKE OWNERSHIP – allows grantee to take ownership, but doesn’t automatically take it.</span><span class="lang-vi">TAKE OWNERSHIP — cho phép người nhận giành quyền sở hữu, nhưng không tự động giành.</span></li>
<li><span class="lang-en">IMPERSONATE Login/User – allows principal to impersonate, but doesn’t automatically do it.</span><span class="lang-vi">IMPERSONATE Login/User — cho phép principal mạo danh, nhưng không tự động mạo danh.</span></li>
<li><code><span class="lang-en">CREATE Server-/Database-/Schema-Securable.</span><span class="lang-vi">CREATE Server-/Database-/Schema-Securable.</span></code></li>
<li><span class="lang-en">VIEW DEFINITION – access to metadata.</span><span class="lang-vi">VIEW DEFINITION — truy cập metadata.</span></li>
<li><span class="lang-en">REFERENCES – permission to create a FOREIGN KEY constraint.</span><span class="lang-vi">REFERENCES — quyền tạo FOREIGN KEY constraint.</span></li>
</ul><li><span class="lang-en">OBJECT can be a database, schema or object</span><span class="lang-vi">OBJECT có thể là một database, schema hoặc object</span></li>
<li><span class="lang-en">PRINCIPAL is a login, user or role.</span><span class="lang-vi">PRINCIPAL là một login, user hoặc role.</span></li>
</ul><li><span class="lang-en">Check permissions using:</span><span class="lang-vi">Kiểm tra quyền bằng:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT * FROM fn_builtin_permissions(default);</span><span class="lang-vi">SELECT * FROM fn_builtin_permissions(default);</span></pre></li>
<ul><li><span class="lang-en">All permissions</span><span class="lang-vi">Toàn bộ quyền</span></li>
</ul><li class="cb"><pre class="code"><span class="lang-en">SELECT * FROM fn_builtin_permissions('assembly’);</span><span class="lang-vi">SELECT * FROM fn_builtin_permissions('assembly’);</span></pre></li>
<ul><li><span class="lang-en">Specific database.</span><span class="lang-vi">Một database cụ thể.</span></li>
</ul><li class="cb"><pre class="code"><span class="lang-en">SELECT * FROM fn_my_permissions('Orders55', 'object’);</span><span class="lang-vi">SELECT * FROM fn_my_permissions('Orders55', 'object’);</span></pre></li>
<ul><li><span class="lang-en">Specific object for a specific role.</span><span class="lang-vi">Một object cụ thể ứng với một role cụ thể.</span></li>
</ul><li class="cb"><pre class="code"><span class="lang-en">SELECT * FROM sys.database_permissions WHERE major_id = OBJECT_ID('Yttrium');</span><span class="lang-vi">SELECT * FROM sys.database_permissions WHERE major_id = OBJECT_ID('Yttrium');</span></pre></li>
<ul><li><span class="lang-en">Specific object.</span><span class="lang-vi">Một object cụ thể.</span></li>
</ul></ul></ul></section>
<section id="s29-4"><h3><span class="n">29.</span> <span class="lang-en">configure permissions by using custom roles</span><span class="lang-vi">cấu hình quyền bằng custom role</span><a class="anch" href="#s29-4" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">To create a role (database-level securable):</span><span class="lang-vi">Để tạo một role (securable cấp database):</span></li>
<ul><li><code><span class="lang-en">CREATE ROLE role_name [ AUTHORIZATION owner_name ]</span><span class="lang-vi">CREATE ROLE role_name [ AUTHORIZATION owner_name ]</span></code></li>
<li><span class="lang-en">If AUTHORIZATION is not given, it will be the current user.</span><span class="lang-vi">Nếu không chỉ định AUTHORIZATION thì owner sẽ là user hiện tại.</span></li>
</ul><li><span class="lang-en">To add a user to a database-level role:</span><span class="lang-vi">Để thêm user vào một role cấp database:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">USE &lt;Database Name&gt;
ALTER ROLE db_datareader ADD MEMBER database_principal</span><span class="lang-vi">USE &lt;Database Name&gt;
ALTER ROLE db_datareader ADD MEMBER database_principal</span></pre></li>
<li><span class="lang-en">You can also use DROP MEMBER instead of ADD MEMBER.</span><span class="lang-vi">Bạn cũng có thể dùng DROP MEMBER thay cho ADD MEMBER.</span></li>
<li><span class="lang-en">database_principal is a database user or user-defined role, but not a fixed database role or a server principal.</span><span class="lang-vi">database_principal là một database user hoặc user-defined role, chứ không phải fixed database role hay server principal.</span></li>
<li><span class="lang-en">You need ALTER permission on the role, or ALTER ANY ROLE on the database, or db_securityadmin or db_owner.</span><span class="lang-vi">Bạn cần quyền ALTER trên role đó, hoặc ALTER ANY ROLE trên database, hoặc thuộc db_securityadmin / db_owner.</span></li>
</ul><li><span class="lang-en">To alter the name of the role:</span><span class="lang-vi">Để đổi tên role:</span></li>
<ul><li><code><span class="lang-en">ALTER ROLE OriginalRoleName WITH NAME = NewRoleName;</span><span class="lang-vi">ALTER ROLE OriginalRoleName WITH NAME = NewRoleName;</span></code></li>
</ul></ul></section>
<section id="s30"><h3><span class="n">30.</span> <span class="lang-en">implement Transparent Data Encryption (TDE)</span><span class="lang-vi">triển khai Transparent Data Encryption (TDE)</span><a class="anch" href="#s30" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">TDE (de-)encrypts data at the page level at rest. It is encrypted when written, and de-encrypted at read.</span><span class="lang-vi">TDE mã hóa/giải mã dữ liệu ở mức page khi dữ liệu nằm yên (at rest). Mã hóa khi ghi, giải mã khi đọc.</span></li>
<ul><li><span class="lang-en">Don't confuse this with TLS – transparent layer security – which encrypts when in transit.</span><span class="lang-vi">Đừng nhầm với TLS — transport layer security — vốn mã hóa dữ liệu khi đang truyền.</span></li>
</ul><li><span class="lang-en">It uses a symmetric Database Encryption Key (DEK).</span><span class="lang-vi">Nó dùng một Database Encryption Key (DEK) đối xứng.</span></li>
<ul><li><span class="lang-en">You can Bring Your Own Key (BYOK).</span><span class="lang-vi">Bạn có thể Bring Your Own Key (BYOK).</span></li>
</ul><li><span class="lang-en">It is protected by the TDE protector, using a service-managed certificate or an asymmetric key in the Azure Key Vault.</span><span class="lang-vi">Nó được bảo vệ bởi TDE protector, dùng certificate do dịch vụ quản lý hoặc một asymmetric key trong Azure Key Vault.</span></li>
<ul><li><span class="lang-en">For Azure SQL Database, it is set at the server level. New databases are encrypted by default (but not ones created through restore or database copy).</span><span class="lang-vi">Với Azure SQL Database, TDE được đặt ở cấp server. Database mới mặc định được mã hóa (nhưng database tạo qua restore hoặc database copy thì không).</span></li>
<li><span class="lang-en">For Azure SQL Managed Instance, it is set at the instance level and is inherited to all encrypted databases.</span><span class="lang-vi">Với Azure SQL Managed Instance, TDE đặt ở cấp instance và được kế thừa cho mọi database đã mã hóa.</span></li>
<li><span class="lang-en">It cannot be used to encrypted system databases.</span><span class="lang-vi">Không dùng TDE để mã hóa database hệ thống được.</span></li>
</ul><li><span class="lang-en">To enable it in Azure SQL Database only, go to the Azure Portal, then the relevant database, then go to “Transparent data encryption” and set “Data encryption” to ON.</span><span class="lang-vi">Chỉ với Azure SQL Database: vào Azure Portal, chọn database tương ứng, vào &quot;Transparent data encryption&quot; và bật &quot;Data encryption&quot; thành ON.</span></li>
<ul><li><span class="lang-en">You cannot do this in Azure SQL Managed Instance.</span><span class="lang-vi">Bạn không làm được việc này trong Azure SQL Managed Instance.</span></li>
</ul><li><span class="lang-en">In T-SQL, you can use:</span><span class="lang-vi">Bằng T-SQL, bạn có thể dùng:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER DATABASE DatabaseName SET ENCRYPTION ON/OFF.</span><span class="lang-vi">ALTER DATABASE DatabaseName SET ENCRYPTION ON/OFF.</span></pre></li>
<li><span class="lang-en">This can be used in Azure SQL Managed Instance.</span><span class="lang-vi">Cách này dùng được trong Azure SQL Managed Instance.</span></li>
<li><span class="lang-en">However, you can’t switch the TDE protector to a key in Key Vault in T-SQL.</span><span class="lang-vi">Tuy nhiên bạn không thể đổi TDE protector sang một key trong Key Vault bằng T-SQL.</span></li>
</ul><li><span class="lang-en">Setup order for TDE with a customer-managed key (BYOK) — remember the chain <b>Vault → Key → Identity → Permission → Protector</b>:</span><span class="lang-vi">Trình tự cấu hình TDE với customer-managed key (BYOK) — nhớ chuỗi <b>Vault → Key → Identity → Permission → Protector</b>:</span></li>
<ul><li><span class="lang-en">1. Create the key vault, with soft delete and purge protection enabled. Both are required: they stop anyone from permanently deleting a key that is protecting a database (losing the key = losing the data).</span><span class="lang-vi">1. Tạo key vault, bật soft delete và purge protection. Cả hai đều bắt buộc: chúng ngăn việc xoá vĩnh viễn một key đang bảo vệ database (mất key = mất dữ liệu).</span></li>
<li><span class="lang-en">2. Generate or import an RSA key in that vault — this is the customer-managed key (CMK). RSA 2048 or 3072 bit, state Enabled; an activation date must be in the past and an expiration date (if set) in the future.</span><span class="lang-vi">2. Tạo hoặc import một RSA key trong vault đó — đây chính là customer-managed key (CMK). RSA 2048 hoặc 3072 bit, trạng thái Enabled; activation date phải ở quá khứ, còn expiration date (nếu đặt) phải ở tương lai.</span></li>
<li><span class="lang-en">3. Enable a managed identity (system-assigned or user-assigned) on the Azure SQL logical server. Key Vault will ask &quot;who are you?&quot; — the managed identity is how the server proves it.</span><span class="lang-vi">3. Bật managed identity (system-assigned hoặc user-assigned) cho Azure SQL logical server. Key Vault sẽ hỏi &quot;anh là ai?&quot; — managed identity chính là danh tính để server chứng minh.</span></li>
<li><span class="lang-en">4. Grant that identity get, wrapKey and unwrapKey on the vault (access policy, or the RBAC role Key Vault Crypto Service Encryption User). wrapKey encrypts the DEK, unwrapKey decrypts it — a missing unwrapKey is the classic mistake that leaves the database Inaccessible.</span><span class="lang-vi">4. Cấp cho identity đó quyền get, wrapKey và unwrapKey trên vault (access policy, hoặc RBAC role Key Vault Crypto Service Encryption User). wrapKey mã hoá DEK, unwrapKey giải mã DEK — thiếu unwrapKey là lỗi kinh điển làm database rơi vào trạng thái Inaccessible.</span></li>
<li><span class="lang-en">5. Set the key as the TDE protector for the server — portal, PowerShell (Add-AzSqlServerKeyVaultKey then Set-AzSqlServerTransparentDataEncryptionProtector), CLI or REST API, but not T-SQL.</span><span class="lang-vi">5. Đặt key đó làm TDE protector cho server — bằng portal, PowerShell (Add-AzSqlServerKeyVaultKey rồi Set-AzSqlServerTransparentDataEncryptionProtector), CLI hoặc REST API, nhưng không làm được bằng T-SQL.</span></li>
<li><span class="lang-en">Each step is a dependency of the next one: no vault → nowhere to put the key; no identity → nothing to grant the permissions to; no permission → the server cannot unwrap the DEK the moment you point the protector at the key.</span><span class="lang-vi">Mỗi bước là điều kiện của bước sau: chưa có vault → chưa có chỗ đặt key; chưa có identity → chưa có đối tượng để cấp quyền; chưa cấp quyền → ngay khi trỏ protector vào key, server không unwrap được DEK.</span></li>
<li><span class="lang-en">If the key is deleted or disabled, or get/wrapKey/unwrapKey is revoked, the databases become Inaccessible within about 10 minutes (30 minutes when the cause is a Key Vault 4XX error) and deny every connection; they come back once the key or the permission is restored.</span><span class="lang-vi">Nếu key bị xoá/disable, hoặc quyền get/wrapKey/unwrapKey bị thu hồi, database chuyển sang Inaccessible trong khoảng 10 phút (30 phút nếu nguyên nhân là lỗi 4XX của Key Vault) và từ chối mọi kết nối; khôi phục key hoặc quyền thì database trở lại.</span></li>
<li><span class="lang-en">With active geo-replication or a failover group, both the primary and the secondary server need get, wrapKey and unwrapKey on the <i>primary</i> server&#39;s key vault. The server and the vault no longer have to be in the same region.</span><span class="lang-vi">Với active geo-replication hay failover group, cả server chính lẫn server phụ đều cần quyền get, wrapKey và unwrapKey trên key vault của server <i>chính</i>. Server và vault nay không còn bắt buộc phải cùng region.</span></li>
</ul><li><span class="lang-en">You can also use PowerShell.</span><span class="lang-vi">Bạn cũng có thể dùng PowerShell.</span></li>
<ul><li><code><span class="lang-en">Set-AzSqlServerTransparentDataEncryptionProtector</span><span class="lang-vi">Set-AzSqlServerTransparentDataEncryptionProtector</span></code></li>
<ul><li><span class="lang-en">Change to ServiceManaged or Azure Key Vault</span><span class="lang-vi">Đổi sang ServiceManaged hoặc Azure Key Vault</span></li>
</ul><li><code><span class="lang-en">Add-AzSqlServerKeyVaultKey</span><span class="lang-vi">Add-AzSqlServerKeyVaultKey</span></code></li>
<ul><li><span class="lang-en">Adds a Key Vault key to a SQL server</span><span class="lang-vi">Thêm một Key Vault key vào SQL server</span></li>
</ul><li><code><span class="lang-en">Set-AzSqlDatabaseTransparentDataEncryption</span><span class="lang-vi">Set-AzSqlDatabaseTransparentDataEncryption</span></code></li>
<ul><li><span class="lang-en">Modifies TDE property for a database.</span><span class="lang-vi">Thay đổi thuộc tính TDE của một database.</span></li>
</ul></ul><li><span class="lang-en">You can also use REST API.</span><span class="lang-vi">Bạn cũng có thể dùng REST API.</span></li>
</ul></section>
<section id="s31"><h3><span class="n">31.</span> <span class="lang-en">implement object-level encryption</span><span class="lang-vi">triển khai mã hóa ở cấp object</span><a class="anch" href="#s31" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Also called cell-level or column-level encryption. Unlike TDE (whole database, transparent) and Always Encrypted (client-driven, needs a compatible driver), this encrypts individual column values using T-SQL functions, and the server itself can decrypt them whenever the key is open.</span><span class="lang-vi">Còn gọi là mã hóa cấp cell/cấp cột. Khác với TDE (toàn database, transparent) và Always Encrypted (do client thực hiện, cần driver hỗ trợ), cách này mã hóa từng giá trị cột bằng hàm T-SQL, và server có thể tự giải mã bất cứ khi nào key đang mở.</span></li>
<li><span class="lang-en">Encryption hierarchy: Service Master Key (SMK, tied to the server) → Database Master Key (DMK) → certificate or asymmetric key → symmetric key → the data itself. Each layer encrypts the layer below it.</span><span class="lang-vi">Chuỗi mã hóa: Service Master Key (SMK, gắn với server) → Database Master Key (DMK) → certificate hoặc asymmetric key → symmetric key → dữ liệu. Mỗi tầng mã hóa tầng bên dưới.</span></li>
<li><span class="lang-en">Typical setup:</span><span class="lang-vi">Thiết lập điển hình:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">CREATE MASTER KEY ENCRYPTION BY PASSWORD = '...'
CREATE CERTIFICATE MyCert WITH SUBJECT = '...'
CREATE SYMMETRIC KEY MyKey WITH ALGORITHM = AES_256 ENCRYPTION BY CERTIFICATE MyCert</span><span class="lang-vi">CREATE MASTER KEY ENCRYPTION BY PASSWORD = '...'
CREATE CERTIFICATE MyCert WITH SUBJECT = '...'
CREATE SYMMETRIC KEY MyKey WITH ALGORITHM = AES_256 ENCRYPTION BY CERTIFICATE MyCert</span></pre></li>
<li><span class="lang-en">To write: <code>OPEN SYMMETRIC KEY MyKey DECRYPTION BY CERTIFICATE MyCert</code>, then <code>UPDATE ... SET Col = ENCRYPTBYKEY(KEY_GUID('MyKey'), @PlainValue)</code>.</span><span class="lang-vi">Để ghi: <code>OPEN SYMMETRIC KEY MyKey DECRYPTION BY CERTIFICATE MyCert</code>, rồi <code>UPDATE ... SET Col = ENCRYPTBYKEY(KEY_GUID('MyKey'), @PlainValue)</code>.</span></li>
<li><span class="lang-en">To read: <code>SELECT DECRYPTBYKEY(Col)</code> while the same symmetric key is open in that session.</span><span class="lang-vi">Để đọc: <code>SELECT DECRYPTBYKEY(Col)</code> khi symmetric key đó vẫn đang mở trong session.</span></li>
</ul><li><span class="lang-en">You can skip the symmetric key and call <code>ENCRYPTBYCERT</code>/<code>DECRYPTBYCERT</code> directly against a certificate's public/private key pair (asymmetric) — simpler to manage but noticeably slower, so it's normally reserved for small amounts of data.</span><span class="lang-vi">Có thể bỏ qua symmetric key và gọi trực tiếp <code>ENCRYPTBYCERT</code>/<code>DECRYPTBYCERT</code> trên cặp khóa công khai/riêng của certificate (bất đối xứng) — dễ quản lý hơn nhưng chậm hơn rõ rệt, nên thường chỉ dùng cho lượng dữ liệu nhỏ.</span></li>
<li><span class="lang-en">The encrypted column must be <code>varbinary</code>. Ciphertext isn't sargable — you can't do an equality search or index seek on it the way Always Encrypted's deterministic encryption allows.</span><span class="lang-vi">Cột đã mã hóa phải là <code>varbinary</code>. Dữ liệu mã hóa không sargable — không tìm bằng equality hay index seek được như kiểu deterministic encryption của Always Encrypted.</span></li>
<li><span class="lang-en">This does not protect data from a sysadmin the way Always Encrypted does: the certificate and key live on the server, so anyone who can open them can decrypt the data. It mainly protects data at rest in a stolen backup or detached file, and limits which application roles can read plaintext.</span><span class="lang-vi">Cách này không chặn được sysadmin như Always Encrypted: certificate và key nằm trên server, ai mở được thì giải mã được. Nó chủ yếu bảo vệ dữ liệu trong một bản backup bị đánh cắp hoặc file bị detach, và giới hạn những application role nào đọc được plaintext.</span></li>
<li><span class="lang-en">Back up the certificate (<code>BACKUP CERTIFICATE ... WITH PRIVATE KEY (...)</code>) and the database master key separately from the database backup — restoring the database to another server without them makes the encrypted data permanently unreadable.</span><span class="lang-vi">Backup certificate (<code>BACKUP CERTIFICATE ... WITH PRIVATE KEY (...)</code>) và database master key riêng, tách khỏi backup database — restore database sang server khác mà thiếu chúng thì dữ liệu đã mã hóa mất khả năng đọc vĩnh viễn.</span></li>
</ul></section>
<section id="s32"><h3><span class="n">32.</span> <span class="lang-en">configure server and database-level firewall rules</span><span class="lang-vi">cấu hình firewall rule cấp server và cấp database</span><a class="anch" href="#s32" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">By default, all connections to the server and database are rejected.</span><span class="lang-vi">Mặc định, mọi kết nối tới server và database đều bị từ chối.</span></li>
<ul><li><span class="lang-en">SQL Database communicates over port 1433. You need that opened on your own computer/server.</span><span class="lang-vi">SQL Database giao tiếp qua port 1433. Bạn cần mở port này trên máy/server của mình.</span></li>
</ul><li><span class="lang-en">For the most secure connection:</span><span class="lang-vi">Để có kết nối an toàn nhất:</span></li>
<ul><li><span class="lang-en">Set “Allow access to Azure services” to NO, then</span><span class="lang-vi">Set “Allow access to Azure services” to NO, then</span></li>
<li><span class="lang-en">create a reserved IP (classic deployment) for the resource that needs to connect, then</span><span class="lang-vi">create a reserved IP (classic deployment) for the resource that needs to connect, then</span></li>
<li><span class="lang-en">allow access through the IP address.</span><span class="lang-vi">cho phép truy cập qua địa chỉ IP đó.</span></li>
<li><span class="lang-en">A public IP address is required for each resource.</span><span class="lang-vi">Mỗi resource cần một địa chỉ IP công cộng riêng.</span></li>
</ul><li><span class="lang-en">What the difference?</span><span class="lang-vi">Khác nhau ở chỗ nào?</span></li>
<ul><li><span class="lang-en">Server-level firewall rules are for users/apps to have access to all databases.</span><span class="lang-vi">Firewall rule cấp server dành cho user/app cần truy cập toàn bộ database.</span></li>
<li><span class="lang-en">Database firewall rules are for an individual or app.</span><span class="lang-vi">Firewall rule cấp database dành cho một cá nhân hoặc một app cụ thể.</span></li>
<li><span class="lang-en">Database rules are checked before server-level rules.</span><span class="lang-vi">Rule cấp database được kiểm tra TRƯỚC rule cấp server.</span></li>
</ul><li><span class="lang-en">To set up a server-level firewall rule:</span><span class="lang-vi">Để thiết lập firewall rule cấp server:</span></li>
<ul><li><span class="lang-en">This applies to all databases in the server on Azure SQL Database only, whether single or pooled databases. It does not apply to Azure SQL Managed Instance.</span><span class="lang-vi">Rule này áp cho mọi database trên server, và chỉ áp dụng với Azure SQL Database, dù là single hay pooled database. Nó không áp dụng cho Azure SQL Managed Instance.</span></li>
<li><span class="lang-en">You will need SQL Server Contributor or SQL Security Manager role, or the owner of the resource that contains the Azure SQL Server.</span><span class="lang-vi">Bạn cần role SQL Server Contributor hoặc SQL Security Manager, hoặc là owner của resource chứa Azure SQL Server đó.</span></li>
<li><span class="lang-en">In Azure portal, go to your database.</span><span class="lang-vi">Trong Azure portal, vào database của bạn.</span></li>
<li><span class="lang-en">On the database Overview page, click “Set server firewall”.</span><span class="lang-vi">Ở trang Overview của database, bấm &quot;Set server firewall&quot;.</span></li>
<li><span class="lang-en">Select “Add client IP” to add your current IP address. This opens port 1433.</span><span class="lang-vi">Select “Add client IP” to add your current IP address. This opens port 1433.</span></li>
<ul><li><span class="lang-en">A firewall rule of 0.0.0.0 enables all Azure services to bypass the server-level firewall rule – but in the portal, you need to turn on &quot;Allow Azure services and resources to access this server&quot; instead.</span><span class="lang-vi">Một firewall rule 0.0.0.0 cho phép mọi dịch vụ Azure bỏ qua firewall cấp server — nhưng trong portal thì bạn bật &quot;Allow Azure services and resources to access this server&quot; thay vì tự thêm rule đó.</span></li>
</ul><li><span class="lang-en">Click OK. The rules are then stored in the master database.</span><span class="lang-vi">Bấm OK. Các rule sau đó được lưu trong database master.</span></li>
<li><span class="lang-en">In T-SQL:</span><span class="lang-vi">Bằng T-SQL:</span></li>
<ul><li><span class="lang-en">To check the current server-level IP firewall rules:</span><span class="lang-vi">Để xem các IP firewall rule cấp server hiện tại:</span></li>
<ul><li><code><span class="lang-en">SELECT * FROM sys.firewall_rules</span><span class="lang-vi">SELECT * FROM sys.firewall_rules</span></code></li>
</ul><li><span class="lang-en">To add a server-level IP firewall rule:</span><span class="lang-vi">Để thêm một IP firewall rule cấp server:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">EXECUTE sp_set_firewall_rule @name = N'MyFirewallRule',
@start_ip_address = '192.168.1.1', @end_ip_address = '192.168.1.200'</span><span class="lang-vi">EXECUTE sp_set_firewall_rule @name = N'MyFirewallRule',
@start_ip_address = '192.168.1.1', @end_ip_address = '192.168.1.200'</span></pre></li>
</ul><li><span class="lang-en">To delete a server-level IP firewall rule:</span><span class="lang-vi">Để xóa một IP firewall rule cấp server:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">EXECUTE sp_delete_firewall_rule @name = N'MyFirewallRule'</span><span class="lang-vi">EXECUTE sp_delete_firewall_rule @name = N'MyFirewallRule'</span></pre></li>
</ul></ul><li><span class="lang-en">You can also manage using PowerShell, CLI (Command Line Interface) or REST API.</span><span class="lang-vi">Bạn cũng quản lý được bằng PowerShell, CLI (Command Line Interface) hoặc REST API.</span></li>
</ul><li><span class="lang-en">To set up a database firewall rule:</span><span class="lang-vi">Để thiết lập firewall rule cấp database:</span></li>
<ul><li><span class="lang-en">It can only be done using T-SQL statements, and you need CONTROL DATABASE permission at the database level.</span><span class="lang-vi">Chỉ làm được bằng lệnh T-SQL, và bạn cần quyền CONTROL DATABASE ở cấp database.</span></li>
<li><span class="lang-en">You need to have set up a server-level firewall rule first.</span><span class="lang-vi">Bạn phải thiết lập firewall rule cấp server trước đã.</span></li>
<li><span class="lang-en">Run a query such as:</span><span class="lang-vi">Chạy câu lệnh kiểu như:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">EXECUTE sp_set_database_firewall_rule N'Example DB Rule','0.0.0.4','0.0.0.4’;</span><span class="lang-vi">EXECUTE sp_set_database_firewall_rule N'Example DB Rule','0.0.0.4','0.0.0.4’;</span></pre></li>
</ul><li><span class="lang-en">This rule is stored in that individual database.</span><span class="lang-vi">Rule này được lưu trong chính database đó.</span></li>
<li><span class="lang-en">In T-SQL:</span><span class="lang-vi">Bằng T-SQL:</span></li>
<ul><li><span class="lang-en">To check the current database-level IP firewall rules:</span><span class="lang-vi">Để xem các IP firewall rule cấp database hiện tại:</span></li>
<ul><li><code><span class="lang-en">SELECT * FROM sys.database_firewall_rules</span><span class="lang-vi">SELECT * FROM sys.database_firewall_rules</span></code></li>
</ul><li><span class="lang-en">To add a database-level IP firewall rule:</span><span class="lang-vi">Để thêm một IP firewall rule cấp database:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">EXECUTE sp_set_database_firewall_rule @name = N'MyDatabaseFirewallRule',
@start_ip_address = '192.168.1.1', @end_ip_address = '192.168.1.200'</span><span class="lang-vi">EXECUTE sp_set_database_firewall_rule @name = N'MyDatabaseFirewallRule',
@start_ip_address = '192.168.1.1', @end_ip_address = '192.168.1.200'</span></pre></li>
</ul><li><span class="lang-en">To delete a database-level IP firewall rule:</span><span class="lang-vi">Để xóa một IP firewall rule cấp database:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">EXECUTE sp_delete_database_firewall_rule @name = N'MyDatabaseFirewallRule'</span><span class="lang-vi">EXECUTE sp_delete_database_firewall_rule @name = N'MyDatabaseFirewallRule'</span></pre></li>
</ul></ul></ul></ul></section>
<section id="s33"><h3><span class="n">33.</span> <span class="lang-en">implement Always Encrypted</span><span class="lang-vi">triển khai Always Encrypted</span><a class="anch" href="#s33" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">You can encrypt sensitive data using Always Encrypted in Azure SQL Database and MI.</span><span class="lang-vi">Bạn có thể mã hóa dữ liệu nhạy cảm bằng Always Encrypted trong Azure SQL Database và MI.</span></li>
<li><span class="lang-en">If you wish to use an Azure Key Vault, then you need to create it first</span><span class="lang-vi">Nếu muốn dùng Azure Key Vault thì phải tạo nó trước</span></li>
<ul><li><span class="lang-en">Use the Azure Portal – Key Vault to create it.</span><span class="lang-vi">Use the Azure Portal – Key Vault to create it.</span></li>
<ul><li><span class="lang-en">You need the following permissions:</span><span class="lang-vi">Bạn cần các quyền sau:</span></li>
<li><span class="lang-en">Cryptographic Operations: Decrypt, Encrypt, Unwrap Key, Wrap Key, Verify and Sign.</span><span class="lang-vi">Cryptographic Operations: Decrypt, Encrypt, Unwrap Key, Wrap Key, Verify và Sign.</span></li>
<li><span class="lang-en">Key Management Operations: create, get, list.</span><span class="lang-vi">Key Management Operations: create, get, list.</span></li>
</ul><li><span class="lang-en">It costs $0.03 for 10,000 transactions. The Premium version allows for a Hardware Security Module (HSM).</span><span class="lang-vi">Chi phí 0,03 USD cho 10.000 giao dịch. Bản Premium cho phép dùng Hardware Security Module (HSM).</span></li>
</ul><li><span class="lang-en">To encrypt columns in SSMS:</span><span class="lang-vi">Để mã hóa cột trong SSMS:</span></li>
<ul><li><span class="lang-en">Go to Databases – NameOfDatabase – Tables – NameOfTable.</span><span class="lang-vi">Vào Databases – TênDatabase – Tables – TênBảng.</span></li>
<li><span class="lang-en">Right-hand click and go to “Encrypt Columns…”.</span><span class="lang-vi">Chuột phải và vào &quot;Encrypt Columns…&quot;.</span></li>
<li><span class="lang-en">Select the columns and choose “Encryption Table”, either Deterministic or Randomized.</span><span class="lang-vi">Select the columns and choose “Encryption Table”, either Deterministic or Randomized.</span></li>
<ul><li><span class="lang-en">Deterministic requires the string to be in a _Bin2 collation (e.g. Latin1_General_BIN2).</span><span class="lang-vi">Deterministic yêu cầu chuỗi phải dùng collation dạng _Bin2 (ví dụ Latin1_General_BIN2).</span></li>
<li><span class="lang-en">Deterministic allows equality joins, GROUP BY, indexes and DISTINCT. Randomized prevents this.</span><span class="lang-vi">Deterministic cho phép equality join, GROUP BY, index và DISTINCT. Randomized thì chặn hết những thứ đó.</span></li>
</ul><li><span class="lang-en">In “Master Key Configuration”, you can go to “Select an Azure Key Vault” and select the Key Vault.</span><span class="lang-vi">Trong &quot;Master Key Configuration&quot;, bạn có thể chọn &quot;Select an Azure Key Vault&quot; rồi chọn Key Vault.</span></li>
<li><span class="lang-en">The next three stages are Validation, Summary and Results.</span><span class="lang-vi">Ba bước tiếp theo là Validation, Summary và Results.</span></li>
</ul><li><span class="lang-en">When the columns are encrypted, then when connecting, go to the “Additional Connection Parameters” tab, and enter:</span><span class="lang-vi">Khi các cột đã được mã hóa, lúc kết nối bạn phải vào tab &quot;Additional Connection Parameters&quot; và nhập:</span></li>
<ul><li><span class="lang-en">Column Encryption Setting=enabled</span><span class="lang-vi">Column Encryption Setting=enabled</span></li>
</ul><li><span class="lang-en">Database Permissions are:</span><span class="lang-vi">Các quyền cấp database gồm:</span></li>
<ul><li><code><span class="lang-en">ALTER ANY COLUMN MASTER KEY</span><span class="lang-vi">ALTER ANY COLUMN MASTER KEY</span></code></li>
<ul><li><span class="lang-en">Needed to create/delete a column master key.</span><span class="lang-vi">Cần để tạo/xóa column master key.</span></li>
</ul><li><code><span class="lang-en">ALTER ANY COLUMN ENCRYPTION KEY</span><span class="lang-vi">ALTER ANY COLUMN ENCRYPTION KEY</span></code></li>
<ul><li><span class="lang-en">Needed to create/delete a column encryption key.</span><span class="lang-vi">Cần để tạo/xóa column encryption key.</span></li>
</ul><li><span class="lang-en">VIEW ANY COLUMN MASTER/ENCRYPTION KEY DEFINITION</span><span class="lang-vi">VIEW ANY COLUMN MASTER/ENCRYPTION KEY DEFINITION</span></li>
<ul><li><span class="lang-en">Needed to access/read the metadata of the column master/encryption keys to manage keys or query encrypted columns.</span><span class="lang-vi">Cần để truy cập/đọc metadata của column master key và column encryption key, phục vụ việc quản lý key hoặc truy vấn cột đã mã hóa.</span></li>
</ul><li><span class="lang-en">Use GRANT VIEW ANY COLUMN MASTER KEY DEFINITION TO NameOfUser</span><span class="lang-vi">Use GRANT VIEW ANY COLUMN MASTER KEY DEFINITION TO NameOfUser</span></li>
</ul><li><span class="lang-en">Do you need role separation?</span><span class="lang-vi">Bạn có cần tách vai trò (role separation) không?</span></li>
<ul><li><span class="lang-en">Security Administrator generates columns encryption keys and column master keys.</span><span class="lang-vi">Security Administrator sinh ra column encryption key và column master key.</span></li>
<ul><li><span class="lang-en">Needs access to the keys and the key store, but not the database.</span><span class="lang-vi">Cần truy cập key và key store, nhưng không cần truy cập database.</span></li>
</ul><li><span class="lang-en">Database Administrator (DBA) manages metadata about the keys in the database.</span><span class="lang-vi">Database Administrator (DBA) quản lý metadata về các key trong database.</span></li>
<ul><li><span class="lang-en">Does not need access to the keys or the key store.</span><span class="lang-vi">Không cần truy cập key hay key store.</span></li>
</ul><li><span class="lang-en">Should they be different people?</span><span class="lang-vi">Hai vai trò này có phải hai người khác nhau không?</span></li>
<ul><li><span class="lang-en">If not, you can use either SSMS or PowerShell.</span><span class="lang-vi">Nếu không, bạn dùng SSMS hoặc PowerShell đều được.</span></li>
<li><span class="lang-en">If so, then you can only use PowerShell.</span><span class="lang-vi">Nếu có, bạn chỉ dùng được PowerShell.</span></li>
</ul></ul><li><span class="lang-en">For the Security Administrator</span><span class="lang-vi">Dành cho Security Administrator</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en"># Create a column master key in Windows Certificate Store.
$storeLocation = &quot;CurrentUser&quot;
$certPath = &quot;Cert:&quot; + $storeLocation + &quot;\\My&quot;
$cert = New-SelfSignedCertificate -Subject &quot;AlwaysEncryptedCert&quot; - CertStoreLocation $certPath -KeyExportPolicy Exportable -Type DocumentEncryptionCert -KeyUsage DataEncipherment -KeySpec KeyExchange
# Import the SqlServer module
Import-Module &quot;SqlServer&quot;
# Create a SqlColumnMasterKeySettings object for your column master key.
$cmkSettings = New-SqlCertificateStoreColumnMasterKeySettings - CertificateStoreLocation &quot;CurrentUser&quot; -Thumbprint $cert.Thumbprint
# Generate a column encryption key, encrypt it with the column master key to produce an encrypted value of the column encryption key.
$encryptedValue = New-SqlColumnEncryptionKeyEncryptedValue - TargetColumnMasterKeySettings $cmkSettings
# Share the location of the column master key and an encrypted value of the column encryption key with a DBA, via a CSV file on a share drive
$keyDataFile = &quot;Z:\\keydata.txt&quot;
&quot;KeyStoreProviderName, KeyPath, EncryptedValue&quot; &gt; $keyDataFile
$cmkSettings.KeyStoreProviderName + &quot;, &quot; + $cmkSettings.KeyPath + &quot;, &quot; + $encryptedValue &gt;&gt; $keyDataFile
# Read the key data back to verify
$keyData = Import-Csv $keyDataFile
$keyData.KeyStoreProviderName
$keyData.KeyPath
$keyData.EncryptedValue</span><span class="lang-vi"># Create a column master key in Windows Certificate Store.
$storeLocation = &quot;CurrentUser&quot;
$certPath = &quot;Cert:&quot; + $storeLocation + &quot;\\My&quot;
$cert = New-SelfSignedCertificate -Subject &quot;AlwaysEncryptedCert&quot; - CertStoreLocation $certPath -KeyExportPolicy Exportable -Type DocumentEncryptionCert -KeyUsage DataEncipherment -KeySpec KeyExchange
# Import the SqlServer module
Import-Module &quot;SqlServer&quot;
# Create a SqlColumnMasterKeySettings object for your column master key.
$cmkSettings = New-SqlCertificateStoreColumnMasterKeySettings - CertificateStoreLocation &quot;CurrentUser&quot; -Thumbprint $cert.Thumbprint
# Generate a column encryption key, encrypt it with the column master key to produce an encrypted value of the column encryption key.
$encryptedValue = New-SqlColumnEncryptionKeyEncryptedValue - TargetColumnMasterKeySettings $cmkSettings
# Share the location of the column master key and an encrypted value of the column encryption key with a DBA, via a CSV file on a share drive
$keyDataFile = &quot;Z:\\keydata.txt&quot;
&quot;KeyStoreProviderName, KeyPath, EncryptedValue&quot; &gt; $keyDataFile
$cmkSettings.KeyStoreProviderName + &quot;, &quot; + $cmkSettings.KeyPath + &quot;, &quot; + $encryptedValue &gt;&gt; $keyDataFile
# Read the key data back to verify
$keyData = Import-Csv $keyDataFile
$keyData.KeyStoreProviderName
$keyData.KeyPath
$keyData.EncryptedValue</span></pre></li>
</ul><li><span class="lang-en">For the DBA</span><span class="lang-vi">Dành cho DBA</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en"># Obtain the location of the column master key and the encrypted value of the column encryption key from your Security Administrator, via a CSV file on a share drive.
$keyDataFile = &quot;Z:\\keydata.txt&quot;
$keyData = Import-Csv $keyDataFile
# Import the SqlServer module
Import-Module &quot;SqlServer&quot;
# Connect to your database.
$serverName = &quot;&lt;server name&gt;&quot;
$databaseName = &quot;&lt;database name&gt;&quot;
$connStr = &quot;Server = &quot; + $serverName + &quot;; Database = &quot; + $databaseName + &quot;; Integrated Security = True&quot;
$database = Get-SqlDatabase -ConnectionString $connStr
# Create a SqlColumnMasterKeySettings object for your column master key.
$cmkSettings = New-SqlColumnMasterKeySettings -KeyStoreProviderName $keyData.KeyStoreProviderName -KeyPath $keyData.KeyPath
# Create column master key metadata in the database.
$cmkName = &quot;CMK1&quot;
New-SqlColumnMasterKey -Name $cmkName -InputObject $database - ColumnMasterKeySettings $cmkSettings
# Generate a column encryption key, encrypt it with the column master key and create column encryption key metadata in the database.
$cekName = &quot;CEK1&quot;
New-SqlColumnEncryptionKey -Name $cekName -InputObject $database -ColumnMasterKey $cmkName -EncryptedValue $keyData.EncryptedValue</span><span class="lang-vi"># Obtain the location of the column master key and the encrypted value of the column encryption key from your Security Administrator, via a CSV file on a share drive.
$keyDataFile = &quot;Z:\\keydata.txt&quot;
$keyData = Import-Csv $keyDataFile
# Import the SqlServer module
Import-Module &quot;SqlServer&quot;
# Connect to your database.
$serverName = &quot;&lt;server name&gt;&quot;
$databaseName = &quot;&lt;database name&gt;&quot;
$connStr = &quot;Server = &quot; + $serverName + &quot;; Database = &quot; + $databaseName + &quot;; Integrated Security = True&quot;
$database = Get-SqlDatabase -ConnectionString $connStr
# Create a SqlColumnMasterKeySettings object for your column master key.
$cmkSettings = New-SqlColumnMasterKeySettings -KeyStoreProviderName $keyData.KeyStoreProviderName -KeyPath $keyData.KeyPath
# Create column master key metadata in the database.
$cmkName = &quot;CMK1&quot;
New-SqlColumnMasterKey -Name $cmkName -InputObject $database - ColumnMasterKeySettings $cmkSettings
# Generate a column encryption key, encrypt it with the column master key and create column encryption key metadata in the database.
$cekName = &quot;CEK1&quot;
New-SqlColumnEncryptionKey -Name $cekName -InputObject $database -ColumnMasterKey $cmkName -EncryptedValue $keyData.EncryptedValue</span></pre></li>
</ul></ul></section>
<section id="s33a"><h3><span class="n">33a.</span> <span class="lang-en">implement Always Encrypted with VBS enclaves</span><span class="lang-vi">triển khai Always Encrypted với VBS enclave</span><a class="anch" href="#s33a" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">You can expand Always Encrypted with secure enclaves.</span><span class="lang-vi">Bạn có thể mở rộng Always Encrypted bằng secure enclave.</span></li>
<ul><li><span class="lang-en">An enclave is something within a bigger something, such as some territory inside bigger territory.</span><span class="lang-vi">Enclave là một vùng nằm bên trong một vùng lớn hơn, giống như một lãnh thổ nằm lọt trong lãnh thổ khác.</span></li>
<li><span class="lang-en">You can use this in SQL Server 2019 or later, or Azure SQL Database.</span><span class="lang-vi">Dùng được trên SQL Server 2019 trở lên, hoặc Azure SQL Database.</span></li>
</ul><li><span class="lang-en">Always Encrypted protects sensitive data from malware and users who should have access to the database but not the data by encrypting it on the client, not allowing it to be in plaintext in the Database Engine.</span><span class="lang-vi">Always Encrypted bảo vệ dữ liệu nhạy cảm khỏi malware và khỏi những người có quyền vào database nhưng không được phép xem dữ liệu — bằng cách mã hóa ngay tại client, không để dữ liệu ở dạng plaintext trong Database Engine.</span></li>
<li><span class="lang-en">However:</span><span class="lang-vi">Tuy nhiên:</span></li>
<ul><li><span class="lang-en">because the data is encrypted, you can only do comparison based on values being the same (or not), if you are using deterministic encryption.</span><span class="lang-vi">vì dữ liệu đã mã hóa, bạn chỉ so sánh được bằng/không bằng, và chỉ khi dùng deterministic encryption.</span></li>
<li><span class="lang-en">you cannot do data encryption, key rotation, or pattern matching in the database.</span><span class="lang-vi">bạn không thực hiện được mã hóa dữ liệu, xoay vòng key (key rotation) hay so khớp mẫu (pattern matching) ngay trong database.</span></li>
</ul><li><span class="lang-en">To solve this problem, you can use Always Encrypted with secure enclaves. This create a protected part of the memory, which can do computations on plaintext data in the secure enclave.</span><span class="lang-vi">Để giải quyết, bạn dùng Always Encrypted với secure enclave. Cơ chế này tạo ra một vùng bộ nhớ được bảo vệ, nơi có thể tính toán trên dữ liệu plaintext.</span></li>
<ul><li><span class="lang-en">It’s like a black box - You cannot view the data or code inside the enclave, even if you used a debugging system.</span><span class="lang-vi">Nó giống một hộp đen — bạn không xem được dữ liệu hay mã bên trong enclave, kể cả khi dùng công cụ debug.</span></li>
</ul><li><span class="lang-en">You need to use either:</span><span class="lang-vi">Bạn phải dùng một trong hai:</span></li>
<ul><li><span class="lang-en">Intel Software Guard Extensions (Intel SGX) enclaves.</span><span class="lang-vi">Intel Software Guard Extensions (Intel SGX) enclave.</span></li>
<ul><li><span class="lang-en">You would need an Azure SQL Database using a DC-series.</span><span class="lang-vi">Cần Azure SQL Database dùng dòng DC-series.</span></li>
<li><span class="lang-en">This also requires Microsoft Azure Attestation with an Attestation administrator, which verifies the trustworthiness of the Azure SQL Database, together with an attestation provider. However, this is not required for the DP-300 exam.</span><span class="lang-vi">Cách này còn cần Microsoft Azure Attestation với một Attestation administrator để xác minh độ tin cậy của Azure SQL Database, cùng một attestation provider. Tuy nhiên phần này không có trong đề thi DP-300.</span></li>
</ul><li><span class="lang-en">Virtualization-based Security (VBS) enclave.</span><span class="lang-vi">Virtualization-based Security (VBS) enclave.</span></li>
<ul><li><span class="lang-en">This is available for all versions of Azure SQL Database, including Elastic Pools, or SQL Server 2019 or later.</span><span class="lang-vi">Có ở mọi phiên bản Azure SQL Database, kể cả Elastic Pool, hoặc SQL Server 2019 trở lên.</span></li>
<li><span class="lang-en">Microsoft Azure Attestation is not needed.</span><span class="lang-vi">Không cần Microsoft Azure Attestation.</span></li>
<li><span class="lang-en">Currently it is not available in Jio India Central.</span><span class="lang-vi">Hiện chưa có ở Jio India Central.</span></li>
<li><span class="lang-en">It provides some additional protection against OS-level threats. You also have Azure protection, such as just-in-time-access, multifactor authentication, and secure monitoring.</span><span class="lang-vi">Nó cung cấp thêm một lớp bảo vệ trước các mối đe dọa ở mức hệ điều hành. Bạn cũng có các lớp bảo vệ của Azure như just-in-time access, multifactor authentication và secure monitoring.</span></li>
<li><span class="lang-en">However, VBS enclave cannot defend itself from bigger attacks, such as replacing the enclave program with malware, so if you need strong security isolation, you may wish to consider the Intel SGX enclave instead.</span><span class="lang-vi">Tuy nhiên VBS enclave không tự bảo vệ được trước các đợt tấn công lớn hơn, chẳng hạn thay chương trình enclave bằng malware — nên nếu cần cách ly bảo mật mạnh, hãy cân nhắc Intel SGX enclave.</span></li>
</ul></ul><li><span class="lang-en">To enable VBS enclave:</span><span class="lang-vi">Để bật VBS enclave:</span></li>
<ul><li><span class="lang-en">When creating the database or elastic pool:</span><span class="lang-vi">Khi tạo database hoặc elastic pool:</span></li>
<ul><li><span class="lang-en">go to the Security tab.</span><span class="lang-vi">vào tab Security.</span></li>
<li><span class="lang-en">in the Always Encrypted section, set “Enable secure enclaves” to On.</span><span class="lang-vi">trong phần Always Encrypted, bật &quot;Enable secure enclaves&quot; thành On.</span></li>
</ul><li><span class="lang-en">For an existing database or elastic pool:</span><span class="lang-vi">Với database hoặc elastic pool đã có:</span></li>
<ul><li><span class="lang-en">Go to Security – Data Encryption (for databases) or Configuration (for elastic pools).</span><span class="lang-vi">Vào Security – Data Encryption (với database) hoặc Configuration (với elastic pool).</span></li>
<li><span class="lang-en">In the Always Encrypted tabs, set “Enable secure enclaves” to On.</span><span class="lang-vi">Trong tab Always Encrypted, bật &quot;Enable secure enclaves&quot; thành On.</span></li>
</ul></ul><li><span class="lang-en">Please note – you cannot switch it Off after it has been On.</span><span class="lang-vi">Lưu ý — bạn KHÔNG thể tắt lại sau khi đã bật.</span></li>
<li><span class="lang-en">You can also enable it in SSMS by right-hand clicking on the database, select Properties, and change “Enable Secure Enclaves” to On.</span><span class="lang-vi">Bạn cũng bật được trong SSMS: chuột phải vào database, chọn Properties, và đổi &quot;Enable Secure Enclaves&quot; thành On.</span></li>
<li><span class="lang-en">You can also enable it in Azure PowerShell or by using Azure CLI.</span><span class="lang-vi">Bạn cũng bật được bằng Azure PowerShell hoặc Azure CLI.</span></li>
</ul></section>
<section id="s34"><h3><span class="n">34.</span> <span class="lang-en">implement Dynamic Data Masking</span><span class="lang-vi">triển khai Dynamic Data Masking</span><a class="anch" href="#s34" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Dynamic Data Masking is for both Azure SQL Database and Azure SQL Managed Instance.</span><span class="lang-vi">Dynamic Data Masking dùng được cho cả Azure SQL Database lẫn Azure SQL Managed Instance.</span></li>
<ul><li><span class="lang-en">It prevents access to sensitive data by putting a mask, with none or part of the data (e.g. last 4 digits of a credit card).</span><span class="lang-vi">Nó ngăn truy cập dữ liệu nhạy cảm bằng cách che đi toàn bộ hoặc một phần dữ liệu (ví dụ chỉ để lộ 4 số cuối của thẻ tín dụng).</span></li>
<li><span class="lang-en">This encrypts the column (column-level encryption – CLE).</span><span class="lang-vi">Cơ chế này mã hóa cột (column-level encryption – CLE).</span></li>
</ul><li><span class="lang-en">To implement Dynamic Data Masking:</span><span class="lang-vi">Để triển khai Dynamic Data Masking:</span></li>
<ul><li><span class="lang-en">In the Azure Portal, go to the Database, then go to Dynamic Data Masking.</span><span class="lang-vi">Trong Azure Portal, vào Database rồi vào Dynamic Data Masking.</span></li>
<li><span class="lang-en">You may see recommended fields to mask.</span><span class="lang-vi">Bạn có thể thấy sẵn các trường được khuyến nghị che.</span></li>
<ul><li><span class="lang-en">If so, you can click on “Add mask” (and then Save).</span><span class="lang-vi">Nếu có, bấm &quot;Add mask&quot; (rồi Save).</span></li>
</ul><li><span class="lang-en">To create a custom rule, click “Add mask”.</span><span class="lang-vi">Để tạo rule tùy chỉnh, bấm &quot;Add mask&quot;.</span></li>
<li><span class="lang-en">You can select the Schema, Table and Column to define the columns for masking.</span><span class="lang-vi">Bạn chọn Schema, Table và Column để xác định cột cần che.</span></li>
<li><span class="lang-en">You can select the mask to be displayed:</span><span class="lang-vi">Bạn chọn kiểu mask sẽ hiển thị:</span></li>
<ul><li><span class="lang-en">Default value (0, xxxx, 01-01-1900),</span><span class="lang-vi">Default value (0, xxxx, 01-01-1900),</span></li>
<ul><li><span class="lang-en">XXXX for string data types. You can use fewer Xs if it less than 4 characters.</span><span class="lang-vi">XXXX cho kiểu chuỗi. Có thể dùng ít chữ X hơn nếu chuỗi ngắn hơn 4 ký tự.</span></li>
<li><span class="lang-en">Use 0 for numeric data types.</span><span class="lang-vi">Use 0 for numeric data types.</span></li>
<li><span class="lang-en">Use 01-01-19000 for date and time data types.</span><span class="lang-vi">Use 01-01-19000 for date and time data types.</span></li>
</ul><li><span class="lang-en">Credit card value (xxxx-xxxx-xxxx-1234),</span><span class="lang-vi">Credit card value (xxxx-xxxx-xxxx-1234),</span></li>
<ul><li><span class="lang-en">Exposes the last 4 digits of the credit card, with a constant string prefix.</span><span class="lang-vi">Để lộ 4 số cuối của thẻ, phần đầu thay bằng chuỗi cố định.</span></li>
</ul><li><span class="lang-en">Email (aXXX@XXXX.com),</span><span class="lang-vi">Email (aXXX@XXXX.com),</span></li>
<ul><li><span class="lang-en">Exposes the first letter, but replaces everything else with a constant string prefix.</span><span class="lang-vi">Để lộ chữ cái đầu, phần còn lại thay bằng chuỗi cố định.</span></li>
</ul><li><span class="lang-en">Number (random number range),</span><span class="lang-vi">Number (khoảng số ngẫu nhiên),</span></li>
<ul><li><span class="lang-en">A random number between two boundaries.</span><span class="lang-vi">Một số ngẫu nhiên nằm giữa hai giá trị biên.</span></li>
</ul><li><span class="lang-en">Custom string (prefix [padding] suffix).</span><span class="lang-vi">Custom string (prefix [padding] suffix).</span></li>
<ul><li><span class="lang-en">Shows the first X characters, the last Y characters, and a custom padding string in the middle.</span><span class="lang-vi">Hiện X ký tự đầu, Y ký tự cuối, và một chuỗi đệm tùy chỉnh ở giữa.</span></li>
</ul></ul><li><span class="lang-en">Click “Add” to save this rule.</span><span class="lang-vi">Bấm &quot;Add&quot; để lưu rule này.</span></li>
<ul><li><span class="lang-en">You can also “Discard” changes and “Delete” the mask.</span><span class="lang-vi">Bạn cũng có thể &quot;Discard&quot; các thay đổi và &quot;Delete&quot; mask.</span></li>
</ul><li><span class="lang-en">In T-SQL, this is done by using:</span><span class="lang-vi">Bằng T-SQL thì làm như sau:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER TABLE Schema.Table ALTER COLUMN ColumnName
ADD MASKED WITH (FUNCTION = 'partial(1, &quot;xxxxx&quot;, 1)') – or 'email()' or 'random(1, 1000)' or 'default()'</span><span class="lang-vi">ALTER TABLE Schema.Table ALTER COLUMN ColumnName
ADD MASKED WITH (FUNCTION = 'partial(1, &quot;xxxxx&quot;, 1)') – or 'email()' or 'random(1, 1000)' or 'default()'</span></pre></li>
</ul></ul><li><span class="lang-en">You can select specific SQL users who were excluded from masking.</span><span class="lang-vi">Bạn có thể chỉ định những SQL user được loại trừ khỏi masking.</span></li>
<ul><li><span class="lang-en">Multiple users are separated by semicolons.</span><span class="lang-vi">Nhiều user thì phân cách bằng dấu chấm phẩy.</span></li>
<li><span class="lang-en">Note: Administrators are always excluded for Dynamic Data Masking – they can always read the data.</span><span class="lang-vi">Lưu ý: Administrator LUÔN được loại trừ khỏi Dynamic Data Masking — họ luôn đọc được dữ liệu thật.</span></li>
<li><span class="lang-en">In T-SQL, this is done by using:</span><span class="lang-vi">Bằng T-SQL thì làm như sau:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">GRANT UNMASK to MyCustomRole;
GRANT UNMASK to MyUser;
REVOKE UNMASK to MyUser;</span><span class="lang-vi">GRANT UNMASK to MyCustomRole;
GRANT UNMASK to MyUser;
REVOKE UNMASK to MyUser;</span></pre></li>
</ul></ul></ul></section>
<section id="s34-2"><h3><span class="n">34.</span> <span class="lang-en">implement Azure Key Vault and disk encryption for Azure VMs</span><span class="lang-vi">triển khai Azure Key Vault và mã hóa đĩa cho Azure VM</span><a class="anch" href="#s34-2" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">To encrypt disks for Azure VMs:</span><span class="lang-vi">Để mã hóa đĩa cho Azure VM:</span></li>
<ul><li><span class="lang-en">In the Azure Portal, go to the VM.</span><span class="lang-vi">Trong Azure Portal, vào VM.</span></li>
<li><span class="lang-en">Select Disks (left-hand side),</span><span class="lang-vi">Select Disks (left-hand side),</span></li>
<li><span class="lang-en">Select Additional Settings (at the top).</span><span class="lang-vi">Select Additional Settings (at the top).</span></li>
<li><span class="lang-en">In “Encryption settings – Disks to encrypt”, select “OS and data disks”.</span><span class="lang-vi">Trong &quot;Encryption settings – Disks to encrypt&quot;, chọn &quot;OS and data disks&quot;.</span></li>
<li><span class="lang-en">Then click “Select a key vault and key for encryption”.</span><span class="lang-vi">Rồi bấm &quot;Select a key vault and key for encryption&quot;.</span></li>
<li><span class="lang-en">Next to “Select key from Azure Key Value: Key vault”, select “Create new”.</span><span class="lang-vi">Cạnh &quot;Select key from Azure Key Vault: Key vault&quot;, chọn &quot;Create new&quot;.</span></li>
<li><span class="lang-en">Add a name (unique amongst Azure Key Vaults) and Resource Group.</span><span class="lang-vi">Add a name (unique amongst Azure Key Vaults) and Resource Group.</span></li>
<li><span class="lang-en">Go to the “Access Policies” tab, click “Enable Access to: Azure Disk Encryption for volume encryption”.</span><span class="lang-vi">Vào tab &quot;Access Policies&quot;, bấm &quot;Enable Access to: Azure Disk Encryption for volume encryption&quot;.</span></li>
<li><span class="lang-en">After creating the Key Vault, leave the Key field blank, click Select, and Save.</span><span class="lang-vi">Sau khi tạo Key Vault xong, để trống ô Key, bấm Select rồi Save.</span></li>
</ul></ul></section>
<section id="s34a"><h3><span class="n">34a.</span> <span class="lang-en">Configure Private Link and Service Endpoints</span><span class="lang-vi">Cấu hình Private Link và Service Endpoint</span><a class="anch" href="#s34a" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Azure Private Link allows you to access your Azure SQL database over a private endpoint in your Virtual Network.</span><span class="lang-vi">Azure Private Link cho phép truy cập Azure SQL database qua một private endpoint nằm trong Virtual Network của bạn.</span></li>
<ul><li><span class="lang-en">This private endpoint is mapped to your specific PaaS resource instead of the entire service.</span><span class="lang-vi">Private endpoint này ánh xạ tới đúng một resource PaaS cụ thể, chứ không phải toàn bộ dịch vụ.</span></li>
<li><span class="lang-en">It can only connect to that specific service, reducing data leak risks.</span><span class="lang-vi">Nó chỉ kết nối được tới dịch vụ đó, nhờ vậy giảm rủi ro rò rỉ dữ liệu.</span></li>
<li><span class="lang-en">The Private Endpoint need not be in the same region as the service it connects to (but it must be in the same region as the Virtual Network).</span><span class="lang-vi">Private Endpoint không nhất thiết phải cùng region với dịch vụ nó kết nối tới (nhưng phải cùng region với Virtual Network).</span></li>
<ul><li><span class="lang-en">For example, the Virtual Network can be in US East 2, the Private Endpoint must be in US East 2, and the Azure SQL Database can be elsewhere.</span><span class="lang-vi">Ví dụ: Virtual Network ở US East 2 thì Private Endpoint phải ở US East 2, còn Azure SQL Database có thể nằm ở nơi khác.</span></li>
</ul><li><span class="lang-en">All traffic between the Private Link and the service goes over Microsoft’s network, and not the public internet.</span><span class="lang-vi">Mọi lưu lượng giữa Private Link và dịch vụ đều đi qua mạng của Microsoft, không đi qua internet công cộng.</span></li>
<li><span class="lang-en">A Private Endpoint can also integrate with Azure Monitor, to log data processed and port availability to a storage account or Event Hub.</span><span class="lang-vi">Private Endpoint cũng tích hợp được với Azure Monitor để ghi log lượng dữ liệu đã xử lý và tình trạng port vào một storage account hoặc Event Hub.</span></li>
</ul><li><span class="lang-en">You can access these services from virtual networks, on premises using ExpressRoute private peering, VPN tunnels, and regionally/globally peered virtual networks using private endpoints.</span><span class="lang-vi">Bạn truy cập được các dịch vụ này từ virtual network, từ on-premises qua ExpressRoute private peering, qua VPN tunnel, và từ các virtual network peering trong vùng hoặc toàn cầu bằng private endpoint.</span></li>
<li><span class="lang-en">Before configuring the Private Endpoint, you need a Virtual Network, which can be done in the Azure Portal:</span><span class="lang-vi">Trước khi cấu hình Private Endpoint, bạn cần một Virtual Network — tạo được trong Azure Portal:</span></li>
<ul><li><span class="lang-en">In the Basics tab, select the subscription, resource group, and enter the virtual network name and region.</span><span class="lang-vi">Ở tab Basics, chọn subscription, resource group, rồi nhập tên virtual network và region.</span></li>
<li><span class="lang-en">In the Security tab, you can enable Virtual network encryption, Azure Bastion, Azure Firewall and Azure DDoS (Distributed Denial-of-Service) Network Protection if you wish.</span><span class="lang-vi">Ở tab Security, bạn có thể bật Virtual network encryption, Azure Bastion, Azure Firewall và Azure DDoS (Distributed Denial-of-Service) Network Protection nếu muốn.</span></li>
<ul><li><span class="lang-en">The last 3 are paid-for services.</span><span class="lang-vi">Ba mục cuối là dịch vụ có tính phí.</span></li>
</ul><li><span class="lang-en">In the Address space tab, set the range of IP addresses you wish to use.</span><span class="lang-vi">Ở tab Address space, đặt dải địa chỉ IP bạn muốn dùng.</span></li>
<ul><li><span class="lang-en">The default is 10.0.0.0/16, which includes 10.0.0.0 to 10.0.255.255.</span><span class="lang-vi">Mặc định là 10.0.0.0/16, tức từ 10.0.0.0 tới 10.0.255.255.</span></li>
</ul><li><span class="lang-en">Then click on Review + Create, then Create.</span><span class="lang-vi">Rồi bấm Review + Create, sau đó Create.</span></li>
</ul><li><span class="lang-en">You can then go to your SQL database, and click on “Configure” next to “Configure access”. This will take you to the SQL Server – Security – Networking.</span><span class="lang-vi">Tiếp theo vào SQL database của bạn và bấm &quot;Configure&quot; cạnh &quot;Configure access&quot;. Việc này đưa bạn tới SQL Server – Security – Networking.</span></li>
<li><span class="lang-en">If you click on the “Private access” tab, you can create a Private Endpoint (you can also do so in the Azure Portal):</span><span class="lang-vi">Nếu bấm vào tab &quot;Private access&quot;, bạn tạo được Private Endpoint (cũng tạo được trực tiếp trong Azure Portal):</span></li>
<ul><li><span class="lang-en">In the Basics tab, select the subscription, resource group, a name, enter a Network Interface name and region.</span><span class="lang-vi">Ở tab Basics, chọn subscription, resource group, đặt tên, nhập tên Network Interface và region.</span></li>
<li><span class="lang-en">In the Resource tab, you should select the target sub-resource – in this case, “sqlServer”.</span><span class="lang-vi">Ở tab Resource, chọn target sub-resource — ở đây là &quot;sqlServer&quot;.</span></li>
<li><span class="lang-en">In the Virtual Network tab, select the Virtual Network and subnet you have selected, together with any static IP addresses and Application security group,</span><span class="lang-vi">Ở tab Virtual Network, chọn Virtual Network và subnet bạn đã chọn, cùng các địa chỉ IP tĩnh và Application security group nếu có,</span></li>
<li><span class="lang-en">In the DNS tab, you need to add a DNS record by selecting the Resource Group.</span><span class="lang-vi">Ở tab DNS, bạn cần thêm một bản ghi DNS bằng cách chọn Resource Group.</span></li>
<li><span class="lang-en">Then click on Next twice, and then Create.</span><span class="lang-vi">Rồi bấm Next hai lần và bấm Create.</span></li>
</ul><li><span class="lang-en">This also create a Private Endpoint resource and a Private Link connection.</span><span class="lang-vi">Thao tác này cũng tạo ra một resource Private Endpoint và một kết nối Private Link.</span></li>
<li><span class="lang-en">You can then go to the Private access tab, and see that the Private endpoint is Approved (this can only be done if the Private endpoint approval is “Pending”).</span><span class="lang-vi">Sau đó bạn vào tab Private access và thấy Private endpoint ở trạng thái Approved (chỉ phê duyệt được khi trạng thái đang là &quot;Pending&quot;).</span></li>
<li><span class="lang-en">You can then connect to your database from other Azure resources using the connection string.</span><span class="lang-vi">Bây giờ bạn kết nối được tới database từ các resource Azure khác bằng connection string.</span></li>
<ul><li><span class="lang-en">The client must be in the same Virtual Network, or connected using things such as VPN or ExpressRoute.</span><span class="lang-vi">Client phải nằm cùng Virtual Network, hoặc kết nối qua VPN, ExpressRoute và tương tự.</span></li>
</ul></ul></section>
<section id="s35"><h3><span class="n">35.</span> <span class="lang-en">Configure Transport Layer Security (TLS)</span><span class="lang-vi">Cấu hình Transport Layer Security (TLS)</span><a class="anch" href="#s35" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Transport Layer Security (TLS) seamlessly encrypts data between SQL Server and a client (such as yourself).</span><span class="lang-vi">Transport Layer Security (TLS) mã hóa dữ liệu giữa SQL Server và client (chẳng hạn máy của bạn) một cách trong suốt.</span></li>
<ul><li><span class="lang-en">Packages of data are encrypted from one side and then decrypted by the other side.</span><span class="lang-vi">Các gói dữ liệu được mã hóa ở một đầu rồi giải mã ở đầu kia.</span></li>
</ul><li><span class="lang-en">Each version has more properties</span><span class="lang-vi">Mỗi phiên bản có thêm nhiều đặc tính hơn</span></li>
<li><span class="lang-en">TLS 1.0 was defined in January 1999, and TLS 1.1 was defined in April 2006.</span><span class="lang-vi">TLS 1.0 ra đời tháng 1/1999, TLS 1.1 ra đời tháng 4/2006.</span></li>
<ul><li><span class="lang-en">It was widely deprecated by web sites around the year 2020. Microsoft no longer supported them in Microsoft Teams Desktop as of July 7, 2021.</span><span class="lang-vi">Chúng bị các website loại bỏ rộng rãi vào khoảng năm 2020. Microsoft ngừng hỗ trợ chúng trong Microsoft Teams Desktop từ 7/7/2021.</span></li>
</ul><li><span class="lang-en">TLS 1.2 was defined in August 2008, with stronger SHA-256 encryption, improved reliability and better performance.</span><span class="lang-vi">TLS 1.2 ra đời tháng 8/2008, với mã hóa SHA-256 mạnh hơn, độ tin cậy và hiệu năng tốt hơn.</span></li>
<ul><li><span class="lang-en">This is the most commonly used TLS version, and creates a secure connection.</span><span class="lang-vi">Đây là phiên bản TLS phổ biến nhất và tạo được kết nối an toàn.</span></li>
</ul><li><span class="lang-en">TLS 1.3 was defined in August 2018.</span><span class="lang-vi">TLS 1.3 ra đời tháng 8/2018.</span></li>
<ul><li><span class="lang-en">It takes less time to connect.</span><span class="lang-vi">Nó mất ít thời gian hơn để thiết lập kết nối.</span></li>
</ul><li><span class="lang-en">Why not use TLS 1.2 or later all the time?</span><span class="lang-vi">Vì sao không dùng TLS 1.2 trở lên mọi lúc?</span></li>
<ul><li><span class="lang-en">Some non-Microsoft drivers don't, by default, use TLS.</span><span class="lang-vi">Một số driver không phải của Microsoft mặc định không dùng TLS.</span></li>
</ul><li><span class="lang-en">To configure TLS:</span><span class="lang-vi">Để cấu hình TLS:</span></li>
<ul><li><span class="lang-en">In the Azure portal, go to the SQL Server (not the database).</span><span class="lang-vi">Trong Azure portal, vào SQL Server (không phải database).</span></li>
<ul><li><span class="lang-en">If you are in the database, click on the server.</span><span class="lang-vi">Nếu bạn đang ở database thì bấm vào server.</span></li>
<li><span class="lang-en">Go to Security – Networking – Connectivity.</span><span class="lang-vi">Vào Security – Networking – Connectivity.</span></li>
<li><span class="lang-en">Change the &quot;Minimum&quot; TLS version.</span><span class="lang-vi">Đổi phiên bản &quot;Minimum&quot; TLS.</span></li>
</ul><li><span class="lang-en">Alternatively, you can do it in PowerShell:</span><span class="lang-vi">Alternatively, you can do it in PowerShell:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">$SecureString = ConvertTo-SecureString &quot;password&quot; -AsPlainText -Force
Set-AzSqlServer -ServerName sql-server-name -ResourceGroupName sql-server- group -SqlAdministratorPassword $SecureString -MinimalTlsVersion &quot;1.2&quot;</span><span class="lang-vi">$SecureString = ConvertTo-SecureString &quot;password&quot; -AsPlainText -Force
Set-AzSqlServer -ServerName sql-server-name -ResourceGroupName sql-server- group -SqlAdministratorPassword $SecureString -MinimalTlsVersion &quot;1.2&quot;</span></pre></li>
</ul><li><span class="lang-en">or Azure CLI:</span><span class="lang-vi">hoặc bằng Azure CLI:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">az sql server update -n sql-server-name -g sql-server-group --set minimalTlsVersion=&quot;1.2&quot;</span><span class="lang-vi">az sql server update -n sql-server-name -g sql-server-group --set minimalTlsVersion=&quot;1.2&quot;</span></pre></li>
</ul></ul></ul></section>
<section id="s36"><h3><span class="n">36.</span> <span class="lang-en">apply a data classification strategy</span><span class="lang-vi">áp dụng chiến lược phân loại dữ liệu</span><a class="anch" href="#s36" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Sensitive data includes:</span><span class="lang-vi">Dữ liệu nhạy cảm bao gồm:</span></li>
<ul><li><span class="lang-en">Data privacy, regulatory and national requirements (e.g. GDPR),</span><span class="lang-vi">Yêu cầu về quyền riêng tư, pháp lý và quốc gia (ví dụ GDPR),</span></li>
<li><span class="lang-en">Security scenarios, including controlling access.</span><span class="lang-vi">Các tình huống bảo mật, gồm cả kiểm soát truy cập.</span></li>
</ul><li><span class="lang-en">To apply a data classification strategy:</span><span class="lang-vi">Để áp dụng chiến lược phân loại dữ liệu:</span></li>
<ul><li><span class="lang-en">Go to the database.</span><span class="lang-vi">Vào database.</span></li>
<li><span class="lang-en">Under Security, go to “Data Discovery &amp; Classification”.</span><span class="lang-vi">Trong mục Security, vào &quot;Data Discovery &amp; Classification&quot;.</span></li>
<li><span class="lang-en">Go to the Classification tab.</span><span class="lang-vi">Vào tab Classification.</span></li>
<li><span class="lang-en">At the bottom of the screen, you may have “X columns with classification recommendations”.</span><span class="lang-vi">Ở cuối màn hình có thể xuất hiện &quot;X columns with classification recommendations&quot;.</span></li>
<ul><li><span class="lang-en">Check whatever recommendations you want to accept/dismiss.</span><span class="lang-vi">Tích chọn những khuyến nghị bạn muốn chấp nhận hoặc bỏ qua.</span></li>
<li><span class="lang-en">Click “Accept” or “Dismiss selected recommendations”.</span><span class="lang-vi">Bấm &quot;Accept&quot; hoặc &quot;Dismiss selected recommendations&quot;.</span></li>
</ul><li><span class="lang-en">To create a new classification:</span><span class="lang-vi">Để tạo phân loại mới:</span></li>
<ul><li><span class="lang-en">Click on “+ Add classification”.</span><span class="lang-vi">Bấm &quot;+ Add classification&quot;.</span></li>
<li><span class="lang-en">Select the Schema, Table and Column name.</span><span class="lang-vi">Select the Schema, Table and Column name.</span></li>
<li><span class="lang-en">Select the Information type:</span><span class="lang-vi">Select the Information type:</span></li>
<ul><li><span class="lang-en">[n/a], Other</span><span class="lang-vi">[n/a], Other</span></li>
<li><span class="lang-en">Networking</span><span class="lang-vi">Networking</span></li>
<li><span class="lang-en">Personal data: Contact Info, Name, National ID, SSN, Health, Date of Birth,</span><span class="lang-vi">Dữ liệu cá nhân: Contact Info, Name, National ID, SSN, Health, Date of Birth,</span></li>
<li><span class="lang-en">Credentials</span><span class="lang-vi">Credentials</span></li>
<li><span class="lang-en">Financial records: Credit Card, Banking, Financial</span><span class="lang-vi">Hồ sơ tài chính: Credit Card, Banking, Financial</span></li>
</ul><li><span class="lang-en">Select the Sensitivity Label:</span><span class="lang-vi">Select the Sensitivity Label:</span></li>
<ul><li><span class="lang-en">[n/a] – Data from your own personal life.</span><span class="lang-vi">[n/a] — dữ liệu thuộc đời sống cá nhân của bạn.</span></li>
<li><span class="lang-en">Public – Freely available business data, or information that has been released to the public.</span><span class="lang-vi">Public — dữ liệu nghiệp vụ công khai, hoặc thông tin đã được công bố ra bên ngoài.</span></li>
<li><span class="lang-en">General – Business data not meant for the public, such as emails, documents and files which do not include confidential data.</span><span class="lang-vi">General — dữ liệu nghiệp vụ không dành cho công chúng, như email, tài liệu và tệp không chứa thông tin mật.</span></li>
<li><span class="lang-en">Confidential or Confidential – GDPR, Highly Confidential or Highly Confidential – GDPR – Business data that would cause harm or extensive harm to your company if overshared.</span><span class="lang-vi">Confidential hoặc Confidential – GDPR, Highly Confidential hoặc Highly Confidential – GDPR — dữ liệu nghiệp vụ sẽ gây thiệt hại (hoặc thiệt hại nghiêm trọng) cho công ty nếu bị chia sẻ quá mức.</span></li>
</ul><li><span class="lang-en">You cannot select [n/a] for both Information Type or Sensitivity Label.</span><span class="lang-vi">Bạn không thể chọn [n/a] cho CẢ Information Type lẫn Sensitivity Label.</span></li>
<li><span class="lang-en">Then click “Add classification”.</span><span class="lang-vi">Rồi bấm &quot;Add classification&quot;.</span></li>
</ul></ul><li><span class="lang-en">The following roles can modify and read a database’s data classification:</span><span class="lang-vi">Các role sau có thể SỬA và ĐỌC phân loại dữ liệu của database:</span></li>
<ul><li><span class="lang-en">Owner,</span><span class="lang-vi">Owner,</span></li>
<li><span class="lang-en">Contributor,</span><span class="lang-vi">Contributor,</span></li>
<li><span class="lang-en">SQL Security Manager.</span><span class="lang-vi">SQL Security Manager.</span></li>
</ul><li><span class="lang-en">Additionally, the following roles can read (but not modify) a database’s data classification:</span><span class="lang-vi">Ngoài ra, các role sau chỉ ĐỌC được (không sửa được) phân loại dữ liệu của database:</span></li>
<ul><li><span class="lang-en">Reader, and</span><span class="lang-vi">Reader, và</span></li>
<li><span class="lang-en">User Access Administrator.</span><span class="lang-vi">User Access Administrator.</span></li>
</ul><li><span class="lang-en">You can use Audit to drill down into &quot;Security Insights&quot;, &quot;Access to Sensitive Data&quot; etc.</span><span class="lang-vi">Bạn có thể dùng Audit để đi sâu vào &quot;Security Insights&quot;, &quot;Access to Sensitive Data&quot;...</span></li>
<ul><li><span class="lang-en">You can also see it in Intelligent Insights.</span><span class="lang-vi">Bạn cũng xem được trong Intelligent Insights.</span></li>
</ul><li><span class="lang-en">You can also use T-SQL, REST API or PowerShell to manage classifications.</span><span class="lang-vi">Bạn cũng có thể quản lý phân loại bằng T-SQL, REST API hoặc PowerShell.</span></li>
<li><span class="lang-en">In T-SQL:</span><span class="lang-vi">Bằng T-SQL:</span></li>
<ul><li><span class="lang-en">To add a sensitivity classification:</span><span class="lang-vi">Để thêm một sensitivity classification:</span></li>
<li class="cb"><pre class="code"><span class="lang-en">ADD SENSITIVITY CLASSIFICATION TO
[schema.]table.column1[, schema.table.column2]… etc.
WITH (
LABEL='Highly Confidential’, -- you could also use LABEL_ID
INFORMATION_TYPE='Financial’, -- you could also INFORMATION_TYPE_ID
RANK=NONE, LOW, MEDIUM, HIGH or CRITICAL
)</span><span class="lang-vi">ADD SENSITIVITY CLASSIFICATION TO
[schema.]table.column1[, schema.table.column2]… v.v.
WITH (
LABEL='Highly Confidential', -- cũng có thể dùng LABEL_ID
INFORMATION_TYPE='Financial', -- cũng có thể dùng INFORMATION_TYPE_ID
RANK=NONE, LOW, MEDIUM, HIGH hoặc CRITICAL
)</span></pre></li>
<ul><li><span class="lang-en">Networking, Contact Info, Credentials, Credit Card, Banking, Other, Name, National IS, SSN, Health, Date of Birth</span><span class="lang-vi">Networking, Contact Info, Credentials, Credit Card, Banking, Other, Name, National ID, SSN, Health, Date of Birth</span></li>
</ul>
<li><span class="lang-en">To check sensitivity classifications:</span><span class="lang-vi">Để xem các sensitivity classification:</span></li>
<ul><li><code><span class="lang-en">SELECT * FROM sys.sensitivity_classifications</span><span class="lang-vi">SELECT * FROM sys.sensitivity_classifications</span></code></li>
</ul><li><span class="lang-en">To drop a sensitivity classification:</span><span class="lang-vi">Để xóa một sensitivity classification:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">DROP SENSITIVITY CLASSIFICATION FROM [schema.]table.column1[, schema.table.column2 ]…</span><span class="lang-vi">DROP SENSITIVITY CLASSIFICATION FROM [schema.]table.column1[, schema.table.column2 ]…</span></pre></li>
</ul></ul></ul></section>
<section id="s37"><h3><span class="n">37.</span> <span class="lang-en">configure server and database audits</span><span class="lang-vi">cấu hình audit ở cấp server và cấp database</span><a class="anch" href="#s37" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">You can use auditing to:</span><span class="lang-vi">Bạn dùng auditing để:</span></li>
<ul><li><span class="lang-en">Retain a trail of selected database actions,</span><span class="lang-vi">Lưu lại dấu vết của những hành động được chọn trên database,</span></li>
<li><span class="lang-en">Report on database activities, using pre-configured reports and a dashboard.</span><span class="lang-vi">Báo cáo về hoạt động của database, dùng các báo cáo dựng sẵn và dashboard.</span></li>
<li><span class="lang-en">Analyse reports for suspicious events, unusual activity and trends.</span><span class="lang-vi">Phân tích báo cáo để tìm sự kiện đáng ngờ, hoạt động bất thường và xu hướng.</span></li>
</ul><li><span class="lang-en">Notes:</span><span class="lang-vi">Lưu ý:</span></li>
<ul><li><span class="lang-en">It is not supported for premium storage or hierarchical namespace.</span><span class="lang-vi">Không hỗ trợ premium storage hay hierarchical namespace.</span></li>
<li><span class="lang-en">Under high activity, Azure will prioritise other actions and may not record some audited events.</span><span class="lang-vi">Khi hoạt động ở mức cao, Azure sẽ ưu tiên các tác vụ khác và có thể không ghi lại một số sự kiện được audit.</span></li>
<li><span class="lang-en">They are written to Append Blobs in Blob storage.</span><span class="lang-vi">Chúng được ghi vào Append Blob trong Blob storage.</span></li>
</ul><li><span class="lang-en">Server policy audits:</span><span class="lang-vi">Audit theo chính sách cấp server:</span></li>
<ul><li><span class="lang-en">For all existing and newly created databases.</span><span class="lang-vi">Áp dụng cho mọi database hiện có và database mới tạo.</span></li>
<li><span class="lang-en">Server policy audits always applies to the database, regardless of any database-level auditing policies. They can sit side-by-side.</span><span class="lang-vi">Audit cấp server LUÔN áp cho database, bất kể có chính sách audit cấp database hay không. Hai loại chạy song song được.</span></li>
<li><span class="lang-en">Microsoft recommends using only server-level auditing, unless you want to audit different event types/categories for a specific database.</span><span class="lang-vi">Microsoft khuyến nghị chỉ dùng audit cấp server, trừ khi bạn cần audit các loại/nhóm sự kiện khác nhau cho một database cụ thể.</span></li>
<li><span class="lang-en">The default auditing policy includes:</span><span class="lang-vi">Chính sách audit mặc định bao gồm:</span></li>
<ul><li><span class="lang-en">BATCH_COMPLETED_GROUP</span><span class="lang-vi">BATCH_COMPLETED_GROUP</span></li>
<ul><li><span class="lang-en">All queries and stored procedures,</span><span class="lang-vi">Mọi query và stored procedure,</span></li>
</ul><li><span class="lang-en">SUCCESSFUL_DATABASE_ and FAILED_DATABASE _AUTHENTICATION_GROUP</span><span class="lang-vi">SUCCESSFUL_DATABASE_ và FAILED_DATABASE_AUTHENTICATION_GROUP</span></li>
<ul><li><span class="lang-en">Success and failed logins</span><span class="lang-vi">Đăng nhập thành công và thất bại</span></li>
</ul></ul><li><span class="lang-en">It stores 4,000 characters of data in an audit .</span><span class="lang-vi">Mỗi bản ghi audit lưu tối đa 4.000 ký tự dữ liệu.</span></li>
</ul><li><span class="lang-en">To do this:</span><span class="lang-vi">Cách làm:</span></li>
<ul><li><span class="lang-en">Go to the Azure portal – NameOfServer or NameOfDatabase – Security – Auditing.</span><span class="lang-vi">Vào Azure portal – TênServer hoặc TênDatabase – Security – Auditing.</span></li>
<li><span class="lang-en">Click “Enable Azure SQL Auditing” to track these events for a particular database or server. You can select the details to be stored in:</span><span class="lang-vi">Bấm &quot;Enable Azure SQL Auditing&quot; để theo dõi các sự kiện này cho một database hoặc server cụ thể. Bạn chọn nơi lưu chi tiết:</span></li>
<ul><li><span class="lang-en">An existing or new Storage account</span><span class="lang-vi">Một Storage account có sẵn hoặc tạo mới</span></li>
<ul><li><span class="lang-en">The Advanced settings allow you to choose the retention period (the default, zero days, is unlimited),</span><span class="lang-vi">Phần Advanced settings cho phép chọn thời gian lưu giữ (mặc định là 0 ngày, nghĩa là vô hạn),</span></li>
<li><span class="lang-en">This Advanced setting only applies to new audits.</span><span class="lang-vi">Thiết lập Advanced này chỉ áp dụng cho các audit mới.</span></li>
</ul><li><span class="lang-en">An existing Monitor Log Analytics workspace, and/or</span><span class="lang-vi">Một Monitor Log Analytics workspace có sẵn, và/hoặc</span></li>
<li><span class="lang-en">An existing Event Hub.</span><span class="lang-vi">Một Event Hub có sẵn.</span></li>
</ul><li><span class="lang-en">If you are in the database, you can click on “View server settings”.</span><span class="lang-vi">Nếu bạn đang ở database, bạn có thể bấm &quot;View server settings&quot;.</span></li>
<li><span class="lang-en">If you are in the server, you can also audit Microsoft support operations.</span><span class="lang-vi">Nếu bạn đang ở server, bạn còn audit được cả các thao tác hỗ trợ của Microsoft.</span></li>
</ul><li><span class="lang-en">If you audit to an existing Monitor Log Analytics workspace:</span><span class="lang-vi">Nếu audit vào một Monitor Log Analytics workspace có sẵn:</span></li>
<ul><li><span class="lang-en">You can add it by:</span><span class="lang-vi">Bạn thêm nó bằng cách:</span></li>
<ul><li><span class="lang-en">Creating an Azure Storage Container, going to Overview – Blobs, and “+Container”.</span><span class="lang-vi">Tạo một Azure Storage Container: vào Overview – Blobs và bấm &quot;+Container&quot;.</span></li>
<li><span class="lang-en">Give the container a name, set the Public access level to Private and click OK.</span><span class="lang-vi">Đặt tên container, đặt Public access level là Private rồi bấm OK.</span></li>
<li><span class="lang-en">In the Properties, click on Properties and copy the URL for future use.</span><span class="lang-vi">Trong Properties, bấm Properties và sao chép URL để dùng sau.</span></li>
<li><span class="lang-en">Go to the Storage Account, and click on “Storage Settings – Shared access signature”.</span><span class="lang-vi">Vào Storage Account và bấm &quot;Storage Settings – Shared access signature&quot;.</span></li>
<li><span class="lang-en">Add “Blob” to “Allowed services”, choose the Start date as yesterday (to avoid timezone related problems), and an End date.</span><span class="lang-vi">Add “Blob” to “Allowed services”, choose the Start date as yesterday (to avoid timezone related problems), and an End date.</span></li>
<li><span class="lang-en">Click “Generate SAS” and copy this token for future use.</span><span class="lang-vi">Bấm &quot;Generate SAS&quot; và sao chép token này để dùng sau.</span></li>
</ul><li><span class="lang-en">Choose the “Log Analytics” in the Auditing.</span><span class="lang-vi">Chọn &quot;Log Analytics&quot; trong phần Auditing.</span></li>
<li><span class="lang-en">You can “View audit logs”.</span><span class="lang-vi">Bạn có thể bấm &quot;View audit logs&quot;.</span></li>
<li><span class="lang-en">You can then either:</span><span class="lang-vi">Sau đó bạn có thể:</span></li>
<ul><li><span class="lang-en">Click on “Log Analytics” to go to the workspace, or</span><span class="lang-vi">Bấm &quot;Log Analytics&quot; để sang workspace, hoặc</span></li>
<li><span class="lang-en">Click “View dashboard” to see a dashboard of audit logs.</span><span class="lang-vi">Bấm &quot;View dashboard&quot; để xem dashboard của audit log.</span></li>
</ul></ul><li><span class="lang-en">If you audit logs to the Event Hub, then:</span><span class="lang-vi">Nếu audit log vào Event Hub thì:</span></li>
<ul><li><span class="lang-en">You would need to set up a stream to consume these events and write them to a target.</span><span class="lang-vi">Bạn cần thiết lập một stream để tiêu thụ các sự kiện đó và ghi chúng vào đích mong muốn.</span></li>
</ul><li><span class="lang-en">If you audit logs to an Azure storage account, then:</span><span class="lang-vi">Nếu audit log vào một Azure storage account thì:</span></li>
<ul><li><span class="lang-en">You can explore them in Azure Storage Explorer.</span><span class="lang-vi">Bạn xem được chúng bằng Azure Storage Explorer.</span></li>
<li><span class="lang-en">You can click on “View audit logs”:</span><span class="lang-vi">Bạn có thể bấm &quot;View audit logs&quot; để:</span></li>
<ul><li><span class="lang-en">Filter on specific dates,</span><span class="lang-vi">Lọc theo ngày cụ thể,</span></li>
<li><span class="lang-en">Look at Server or Database audit policy.</span><span class="lang-vi">Xem chính sách audit cấp Server hay cấp Database.</span></li>
</ul><li><span class="lang-en">You can use T-SQL:</span><span class="lang-vi">Bạn có thể dùng T-SQL:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT * FROM sys.fn_get_audit_file (‘NameOfFile.sqlaudit',default,default);</span><span class="lang-vi">SELECT * FROM sys.fn_get_audit_file (‘NameOfFile.sqlaudit',default,default);</span></pre></li>
</ul><li><span class="lang-en">You can use SSMS, going to File – Open – Merge Audit Files.</span><span class="lang-vi">Bạn có thể dùng SSMS: vào File – Open – Merge Audit Files.</span></li>
<li><span class="lang-en">You should change your storage keys periodically.</span><span class="lang-vi">Bạn nên đổi storage key định kỳ.</span></li>
<ul><li><span class="lang-en">In advanced properties, you can change to the secondary access storage key.</span><span class="lang-vi">Trong advanced properties, chuyển sang dùng secondary access storage key.</span></li>
<li><span class="lang-en">Then you can go to your Storage Account – Settings – Access keys, and click the regenerate icon on the primary access key.</span><span class="lang-vi">Rồi vào Storage Account – Settings – Access keys và bấm biểu tượng regenerate cho primary access key.</span></li>
<li><span class="lang-en">You can then go back to the audit, and change it to the primary key.</span><span class="lang-vi">Sau đó quay lại phần audit và chuyển về dùng primary key.</span></li>
<li><span class="lang-en">You can then go to your Storage Account – Settings – Access keys, and click the regenerate icon on the secondary access key.</span><span class="lang-vi">Rồi vào Storage Account – Settings – Access keys và bấm biểu tượng regenerate cho secondary access key.</span></li>
</ul></ul></ul></section>
<section id="s38"><h3><span class="n">38.</span> <span class="lang-en">implement data change tracking</span><span class="lang-vi">triển khai theo dõi thay đổi dữ liệu (change tracking)</span><a class="anch" href="#s38" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Change Tracking works on Azure SQL Database, Azure SQL Managed Instance and SQL Server 2008 and later (so also on Azure VMs).</span><span class="lang-vi">Change Tracking dùng được trên Azure SQL Database, Azure SQL Managed Instance và SQL Server 2008 trở lên (nên cũng dùng được trên Azure VM).</span></li>
<li class="stale"><span class="lang-en"><b>Corrected: change tracking is not Azure SQL Database only.</b> This section used to say &quot;supported in Azure SQL Database only&quot;. Per Microsoft Learn, change tracking is available on SQL Server 2008 and later, on Azure SQL Managed Instance and on Azure SQL Database, and is enabled the same way everywhere: ALTER DATABASE … SET CHANGE_TRACKING = ON, then ALTER TABLE … ENABLE CHANGE_TRACKING. What really differs by platform is CDC: on Managed Instance and on VMs its capture and cleanup run as SQL Server Agent jobs, while Azure SQL Database uses a built-in scheduler (see the CDC part of this section).</span><span class="lang-vi"><b>Đã sửa: change tracking không phải chỉ có ở Azure SQL Database.</b> Mục này trước đây ghi &quot;chỉ được hỗ trợ trong Azure SQL Database&quot;. Theo Microsoft Learn, change tracking có trên SQL Server 2008 trở lên, trên Azure SQL Managed Instance và trên Azure SQL Database, và bật giống nhau ở mọi nơi: ALTER DATABASE … SET CHANGE_TRACKING = ON, rồi ALTER TABLE … ENABLE CHANGE_TRACKING. Thứ thực sự khác nhau theo nền tảng là CDC: trên Managed Instance và VM thì capture cùng cleanup chạy bằng job của SQL Server Agent, còn Azure SQL Database dùng scheduler có sẵn (xem phần CDC ngay trong mục này).</span></li>
<ul><li><span class="lang-en">Change Tracking tracks whether the column was changed.</span><span class="lang-vi">Change Tracking ghi nhận việc một cột có bị thay đổi hay không.</span></li>
<li><span class="lang-en">However, it does not track how many times nor does it track historic data. Therefore, it more lightweight and requires less storage than CDC (Change Data Capture).</span><span class="lang-vi">Tuy nhiên nó không ghi số lần thay đổi và không lưu dữ liệu lịch sử. Vì vậy nó nhẹ hơn và tốn ít dung lượng hơn CDC (Change Data Capture).</span></li>
<li><span class="lang-en">It therefore enables applications to determines which rows have changed, and request those rows. (But you cannot see the previous data.)</span><span class="lang-vi">Nhờ đó ứng dụng xác định được dòng nào đã thay đổi và yêu cầu đúng những dòng đó. (Nhưng bạn không xem được dữ liệu trước đó.)</span></li>
<li><span class="lang-en">The data is stored in an in-memory rowstore, and flushed on every checkpoint to the internal data.</span><span class="lang-vi">Dữ liệu được lưu trong một rowstore nằm trong bộ nhớ, và được ghi xuống dữ liệu nội bộ ở mỗi checkpoint.</span></li>
<li><span class="lang-en">You may wish to consider using snapshot isolation for the database, so that changes made while getting the data are not visible within the transaction:</span><span class="lang-vi">Bạn nên cân nhắc dùng snapshot isolation cho database, để các thay đổi xảy ra trong lúc bạn lấy dữ liệu không lọt vào transaction:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER DATABASE AdventureWorksLT
SET ALLOW_SNAPSHOT_ISOLATION ON;
SET TRANSACTION ISOLATION LEVEL SNAPSHOT;
BEGIN TRAN / COMMIT TRAN</span><span class="lang-vi">ALTER DATABASE AdventureWorksLT
SET ALLOW_SNAPSHOT_ISOLATION ON;
SET TRANSACTION ISOLATION LEVEL SNAPSHOT;
BEGIN TRAN / COMMIT TRAN</span></pre></li>
</ul></ul><li><span class="lang-en">To enable Data Change Tracking on a database:</span><span class="lang-vi">Để bật Change Tracking cho một database:</span></li>
<ul><li><span class="lang-en">In SSMS</span><span class="lang-vi">Trong SSMS</span></li>
<ul><li><span class="lang-en">Right-hand click on the database, select Properties and go to Change Tracking.</span><span class="lang-vi">Chuột phải vào database, chọn Properties và vào Change Tracking.</span></li>
<li><span class="lang-en">Change “Change Tracking” to True.</span><span class="lang-vi">Đổi &quot;Change Tracking&quot; thành True.</span></li>
<li><span class="lang-en">Select the Retention Period and Units (by default, 2 Days) – the minimum is 1 Minute; there is no maximum.</span><span class="lang-vi">Select the Retention Period and Units (by default, 2 Days) – the minimum is 1 Minute; there is no maximum.</span></li>
<li><span class="lang-en">Select whether data is “Auto Cleanup” in that retention period.</span><span class="lang-vi">Select whether data is “Auto Cleanup” in that retention period.</span></li>
<ul><li><span class="lang-en">If true, Change Tracking data will be removed periodically. If an App has not got updated information in time, all data will needed to be refreshed.</span><span class="lang-vi">Nếu True, dữ liệu Change Tracking sẽ bị xóa định kỳ. Nếu ứng dụng không kịp lấy thông tin cập nhật thì sẽ phải làm mới lại toàn bộ dữ liệu.</span></li>
<li><span class="lang-en">If False, change tracking information will not be removed and will continue to grow.</span><span class="lang-vi">Nếu False, thông tin change tracking không bị xóa và sẽ phình to dần.</span></li>
</ul></ul><li><span class="lang-en">In T-SQL</span><span class="lang-vi">Bằng T-SQL</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER DATABASE MyDatabase
SET CHANGE_TRACKING = ON
(CHANGE_RETENTION = 2 DAYS, AUTO_CLEANUP = ON)</span><span class="lang-vi">ALTER DATABASE MyDatabase
SET CHANGE_TRACKING = ON
(CHANGE_RETENTION = 2 DAYS, AUTO_CLEANUP = ON)</span></pre></li>
</ul></ul><li><span class="lang-en">However, you still need to enable it in a particular table.</span><span class="lang-vi">Tuy nhiên bạn vẫn phải bật cho từng bảng cụ thể.</span></li>
<li><span class="lang-en">To enable Data Change Tracking on a table:</span><span class="lang-vi">Để bật Change Tracking cho một bảng:</span></li>
<ul><li><span class="lang-en">In SSMS</span><span class="lang-vi">Trong SSMS</span></li>
<ul><li><span class="lang-en">Right-hand click on the database, select Properties and go to Change Tracking.</span><span class="lang-vi">Chuột phải vào database, chọn Properties và vào Change Tracking.</span></li>
<li><span class="lang-en">Change “Change Tracking” to True.</span><span class="lang-vi">Đổi &quot;Change Tracking&quot; thành True.</span></li>
<li><span class="lang-en">If True, you can also change “Track Columns Updated” to True. This will indicate whether UPDATEs to individual columns will be tracked.</span><span class="lang-vi">Nếu True, bạn còn đổi được &quot;Track Columns Updated&quot; thành True. Tùy chọn này quyết định có theo dõi UPDATE trên từng cột riêng lẻ hay không.</span></li>
</ul><li><span class="lang-en">In T-SQL</span><span class="lang-vi">Bằng T-SQL</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER TABLE Schema.Table
ENABLE CHANGE_TRACKING
WITH (TRACK_COLUMNS_UPDATED = ON)</span><span class="lang-vi">ALTER TABLE Schema.Table
ENABLE CHANGE_TRACKING
WITH (TRACK_COLUMNS_UPDATED = ON)</span></pre></li>
</ul></ul><li><span class="lang-en">You can also disable Change Tracking on tables and databases</span><span class="lang-vi">Bạn cũng có thể tắt Change Tracking trên bảng và trên database</span></li>
<ul><li><span class="lang-en">However, to disable it on the database, all track changing of tables needs to be disabled first.</span><span class="lang-vi">Tuy nhiên muốn tắt ở cấp database thì phải tắt change tracking trên toàn bộ các bảng trước.</span></li>
<li><span class="lang-en">In SSMS, change True to False.</span><span class="lang-vi">Trong SSMS, đổi True thành False.</span></li>
<li><span class="lang-en">In T-SQL for tables:</span><span class="lang-vi">Bằng T-SQL, với bảng:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER TABLE Schema.Table
DISABLE CHANGE_TRACKING</span><span class="lang-vi">ALTER TABLE Schema.Table
DISABLE CHANGE_TRACKING</span></pre></li>
</ul><li><span class="lang-en">In T-SQL For databases:</span><span class="lang-vi">Bằng T-SQL, với database:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER DATABASE MyDatabase
SET CHANGE_TRACKING = OFF</span><span class="lang-vi">ALTER DATABASE MyDatabase
SET CHANGE_TRACKING = OFF</span></pre></li>
</ul></ul><li><span class="lang-en">To check which tables/databases have Change Tracking enabled:</span><span class="lang-vi">Để kiểm tra bảng/database nào đang bật Change Tracking:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT * from sys.change_tracking_databases
SELECT * from sys.change_tracking_tables -- this uses the current database. You need:</span><span class="lang-vi">SELECT * from sys.change_tracking_databases
SELECT * from sys.change_tracking_tables -- this uses the current database. You need:</span></pre></li>
<ul><li><span class="lang-en">SELECT permission on the primary key columns for the tables</span><span class="lang-vi">SELECT permission on the primary key columns for the tables</span></li>
<li><span class="lang-en">VIEW CHANGE TRACKING permission for the relevant table.</span><span class="lang-vi">Quyền VIEW CHANGE TRACKING trên bảng tương ứng.</span></li>
</ul></ul><li><span class="lang-en">To use it:</span><span class="lang-vi">Cách sử dụng:</span></li>
<ul><li><span class="lang-en">To get the initial sync version</span><span class="lang-vi">Để lấy version đồng bộ ban đầu</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">DECLARE @last_sync bigint;
SET @last_sync = CHANGE_TRACKING_CURRENT_VERSION();</span><span class="lang-vi">DECLARE @last_sync bigint;
SET @last_sync = CHANGE_TRACKING_CURRENT_VERSION();</span></pre></li>
</ul><li><span class="lang-en">After changes have happened:</span><span class="lang-vi">Sau khi đã có thay đổi:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT CT.ProductID, CT.SYS_CHANGE_OPERATION,
       CT.SYS_CHANGE_COLUMNS, CT.SYS_CHANGE_CONTEXT
FROM CHANGETABLE(CHANGES Schema.Table, @last_sync) AS CT</span><span class="lang-vi">SELECT CT.ProductID, CT.SYS_CHANGE_OPERATION,
       CT.SYS_CHANGE_COLUMNS, CT.SYS_CHANGE_CONTEXT
FROM CHANGETABLE(CHANGES Schema.Table, @last_sync) AS CT</span></pre></li>
</ul><li><span class="lang-en">Check that you don’t have to refresh the entire table:</span><span class="lang-vi">Kiểm tra xem bạn có phải làm mới toàn bộ bảng không:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">IF (@last_sync &lt; CHANGE_TRACKING_MIN_VALID_VERSION( OBJECT_ID('Schema.Table'))</span><span class="lang-vi">IF (@last_sync &lt; CHANGE_TRACKING_MIN_VALID_VERSION( OBJECT_ID('Schema.Table'))</span></pre></li>
</ul></ul><li><span class="lang-en">Change Data Capture (CDC) is supported in Azure SQL Database, Azure SQL Managed Instance and SQL Server on VM.</span><span class="lang-vi">Change Data Capture (CDC) được hỗ trợ trong Azure SQL Database, Azure SQL Managed Instance và SQL Server trên VM.</span></li>
<ul><li><span class="lang-en">CDC tracks historic data.</span><span class="lang-vi">CDC theo dõi cả dữ liệu lịch sử.</span></li>
<li><span class="lang-en">Needs a minimum of 1 vCore or 100 DTUs or eDTUs.</span><span class="lang-vi">Cần tối thiểu 1 vCore hoặc 100 DTU/eDTU.</span></li>
<li><span class="lang-en">Cannot be used in Azure SQL Database Free, Basic or Standard tier Single Database (S0, S1, S2).</span><span class="lang-vi">Không dùng được trên Azure SQL Database hạng Free, Basic hoặc Standard Single Database (S0, S1, S2).</span></li>
<li><span class="lang-en">Cannot be used in Azure SQL Database Elastic Pool with vCore &lt; 1 or eDTUs &lt; 100.</span><span class="lang-vi">Không dùng được trên Azure SQL Database Elastic Pool có vCore &lt; 1 hoặc eDTU &lt; 100.</span></li>
</ul><li><span class="lang-en">Before you can enable it for a table, you must switch it on for the database.</span><span class="lang-vi">Trước khi bật cho một bảng, bạn phải bật cho database đã.</span></li>
<ul><li><code><span class="lang-en">EXEC sys.sp_cdc_enable_db</span><span class="lang-vi">EXEC sys.sp_cdc_enable_db</span></code></li>
<ul><li><span class="lang-en">Returns 0 for Success, 1 for Failure.</span><span class="lang-vi">Trả về 0 nếu thành công, 1 nếu thất bại.</span></li>
<li><span class="lang-en">Only use it on user databases, not system databases.</span><span class="lang-vi">Chỉ dùng trên database người dùng, không dùng trên database hệ thống.</span></li>
<li><span class="lang-en">It creates the Change Data Capture objects, including metadata tables and DDL triggers.</span><span class="lang-vi">Nó tạo ra các object của Change Data Capture, gồm bảng metadata và DDL trigger.</span></li>
<li><span class="lang-en">You need sysadmin to run it.</span><span class="lang-vi">Bạn cần quyền sysadmin để chạy lệnh này.</span></li>
</ul></ul><li><span class="lang-en">Then you can enable it for a table:</span><span class="lang-vi">Sau đó bạn bật được cho từng bảng:</span></li>
<ul><li><span class="lang-en">EXEC sys.sp_cdc_enable_table . Some of the arguments are:</span><span class="lang-vi">EXEC sys.sp_cdc_enable_table . Some of the arguments are:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">@source_schema = N'HumanResources'
, @source_name = N'Department'
, @role_name = N'cdc_admin'
, @captured_column_list = N'DepartmentID, Name, GroupName'</span><span class="lang-vi">@source_schema = N'HumanResources'
, @source_name = N'Department'
, @role_name = N'cdc_admin'
, @captured_column_list = N'DepartmentID, Name, GroupName'</span></pre></li>
<ul><li><span class="lang-en">The name of the table.</span><span class="lang-vi">Tên của bảng.</span></li>
<li><span class="lang-en">The database role used to gate access to change data. Could be a new role.</span><span class="lang-vi">Database role dùng để kiểm soát quyền truy cập dữ liệu thay đổi. Có thể là một role mới.</span></li>
<li><span class="lang-en">Columns to be captured. Needs the primary key.</span><span class="lang-vi">Các cột sẽ được ghi nhận. Phải bao gồm primary key.</span></li>
<li><span class="lang-en">Cannot use encrypted columns.</span><span class="lang-vi">Không dùng được với cột đã mã hóa.</span></li>
</ul><li><span class="lang-en">Returns 0 for Success, 1 for Failure.</span><span class="lang-vi">Trả về 0 nếu thành công, 1 nếu thất bại.</span></li>
</ul></ul><li><span class="lang-en">You can query your configuration using:</span><span class="lang-vi">Bạn xem lại cấu hình bằng:</span></li>
<ul><li><code><span class="lang-en">EXECUTE sys.sp_cdc_help_change_data_capture</span><span class="lang-vi">EXECUTE sys.sp_cdc_help_change_data_capture</span></code></li>
</ul><li><span class="lang-en">Who actually runs the capture and cleanup work depends on the platform — this is a favourite exam question:</span><span class="lang-vi">Ai thực sự chạy phần capture và cleanup thì tuỳ nền tảng — đây là chỗ đề thi rất hay hỏi:</span></li>
<ul><li><span class="lang-en">On SQL Server and Managed Instance they are two SQL Server Agent jobs, <code>cdc.&lt;database&gt;_capture</code> and <code>cdc.&lt;database&gt;_cleanup</code>, controlled with <code>sys.sp_cdc_start_job</code>, <code>sys.sp_cdc_stop_job</code> and <code>sys.sp_cdc_help_jobs</code>.</span><span class="lang-vi">Trên SQL Server và Managed Instance, đó là hai job của SQL Server Agent: <code>cdc.&lt;database&gt;_capture</code> và <code>cdc.&lt;database&gt;_cleanup</code>, điều khiển bằng <code>sys.sp_cdc_start_job</code>, <code>sys.sp_cdc_stop_job</code> và <code>sys.sp_cdc_help_jobs</code>.</span></li>
<li><span class="lang-en">Azure SQL Database has no SQL Server Agent, so a built-in <b>CDC scheduler</b> inside the service runs both processes: the capture scan every 20 seconds and the cleanup every hour. You cannot change that frequency, and <code>pollinginterval</code>/<code>continuous</code> do not apply.</span><span class="lang-vi">Azure SQL Database không có SQL Server Agent, nên một <b>CDC scheduler</b> có sẵn trong dịch vụ chạy cả hai tiến trình: capture quét mỗi 20 giây, cleanup mỗi giờ. Bạn không đổi được tần suất đó, và <code>pollinginterval</code>/<code>continuous</code> không áp dụng.</span></li>
<li><span class="lang-en">To pause them — for example during a bulk load — use <code>sys.sp_cdc_set_scheduler_job</code> (Azure SQL Database only, requires db_owner). <code>@jobType</code> is capture, cleanup or both; <code>@state</code> is pause or resume; <code>@abortTask</code> says whether to kill the job that is running right now.</span><span class="lang-vi">Muốn tạm dừng chúng — ví dụ trong lúc bulk load — dùng <code>sys.sp_cdc_set_scheduler_job</code> (chỉ có ở Azure SQL Database, cần quyền db_owner). <code>@jobType</code> nhận capture, cleanup hoặc both; <code>@state</code> nhận pause hoặc resume; <code>@abortTask</code> quyết định có huỷ luôn job đang chạy hay không.</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">-- Azure SQL Database only: pause capture and cleanup during a bulk load
EXEC sys.sp_cdc_set_scheduler_job @jobType = N'both', @state = N'pause', @abortTask = 1;
-- …then put them back to work
EXEC sys.sp_cdc_set_scheduler_job @jobType = N'both', @state = N'resume';</span><span class="lang-vi">-- Chỉ Azure SQL Database: tạm dừng capture và cleanup trong lúc bulk load
EXEC sys.sp_cdc_set_scheduler_job @jobType = N'both', @state = N'pause', @abortTask = 1;
-- …rồi cho chạy lại
EXEC sys.sp_cdc_set_scheduler_job @jobType = N'both', @state = N'resume';</span></pre></li>
</ul><li><span class="lang-en">You can also run either process by hand at any time: <code>sys.sp_cdc_scan</code> for the capture, <code>sys.sp_cdc_cleanup_change_table</code> for the cleanup.</span><span class="lang-vi">Bạn cũng có thể tự chạy từng tiến trình bất cứ lúc nào: <code>sys.sp_cdc_scan</code> cho capture, <code>sys.sp_cdc_cleanup_change_table</code> cho cleanup.</span></li>
<li><span class="lang-en">Job settings live in <code>cdc.cdc_jobs</code> — in the <code>cdc</code> schema of the database itself, not in msdb. <code>sys.sp_cdc_change_job</code> adjusts <code>maxtrans</code> and <code>maxscans</code>; dropping the cleanup entry does stop cleanup, but deleting the capture entry does <i>not</i> stop the background capture.</span><span class="lang-vi">Cấu hình job nằm ở <code>cdc.cdc_jobs</code> — trong schema <code>cdc</code> của chính database, không phải msdb. <code>sys.sp_cdc_change_job</code> chỉnh <code>maxtrans</code> và <code>maxscans</code>; xoá entry cleanup thì cleanup dừng thật, nhưng xoá entry capture thì capture nền vẫn <i>không</i> dừng.</span></li>
<li><span class="lang-en">Monitor with the DMVs <code>sys.dm_cdc_log_scan_sessions</code> and <code>sys.dm_cdc_errors</code>. Default retention of change data is 3 days.</span><span class="lang-vi">Giám sát bằng hai DMV <code>sys.dm_cdc_log_scan_sessions</code> và <code>sys.dm_cdc_errors</code>. Thời gian giữ dữ liệu thay đổi mặc định là 3 ngày.</span></li>
<li><span class="lang-en">Enabling CDC needs db_owner. In the vCore model every service tier supports it; in the DTU model you need S3 or higher (Basic, S0, S1 and S2 are not supported). A serverless database that is paused runs no CDC, and enabling CDC disables the aggressive log truncation of Accelerated Database Recovery.</span><span class="lang-vi">Bật CDC cần quyền db_owner. Với mô hình vCore thì mọi service tier đều hỗ trợ; với mô hình DTU thì cần S3 trở lên (Basic, S0, S1, S2 không hỗ trợ). Database serverless đang ở trạng thái paused thì CDC không chạy, và khi bật CDC thì tính năng aggressive log truncation của Accelerated Database Recovery bị tắt.</span></li>
</ul><li><span class="lang-en">You can view changed rows by using:</span><span class="lang-vi">Bạn xem các dòng đã thay đổi bằng:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">DECLARE @from_lsn binary(10), @to_lsn binary(10);
SET @from_lsn = sys.fn_cdc_get_min_lsn('HR_Department');
SET @to_lsn = sys.fn_cdc_get_max_lsn();
SELECT * FROM cdc.fn_cdc_get_all_changes_HR_Department (@from_lsn, @to_lsn, N'all');</span><span class="lang-vi">DECLARE @from_lsn binary(10), @to_lsn binary(10);
SET @from_lsn = sys.fn_cdc_get_min_lsn('HR_Department');
SET @to_lsn = sys.fn_cdc_get_max_lsn();
SELECT * FROM cdc.fn_cdc_get_all_changes_HR_Department (@from_lsn, @to_lsn, N'all');</span></pre></li>
<ul><li><span class="lang-en"><code>__$operation</code> identifies the DML operation: 1 = delete, 2 = insert, 3 = update (captured column values <i>before</i> the update), 4 = update (values <i>after</i> the update). Value 3 only appears when the row filter option <code>N&#39;all update old&#39;</code> is used.</span><span class="lang-vi"><code>__$operation</code> cho biết thao tác DML: 1 = delete, 2 = insert, 3 = update (giá trị của captured column <i>trước</i> khi update), 4 = update (giá trị <i>sau</i> khi update). Giá trị 3 chỉ xuất hiện khi dùng row filter option <code>N&#39;all update old&#39;</code>.</span></li>
<li><span class="lang-en">That is why an update writes two rows into the change table: <code>N&#39;all&#39;</code> returns only the after row (4), <code>N&#39;all update old&#39;</code> returns both the before row (3) and the after row (4). Insert and delete are one row each.</span><span class="lang-vi">Vì vậy một lần update ghi hai dòng vào change table: <code>N&#39;all&#39;</code> chỉ trả về dòng sau (4), còn <code>N&#39;all update old&#39;</code> trả về cả dòng trước (3) lẫn dòng sau (4). Insert và delete mỗi thao tác một dòng.</span></li>
<li><span class="lang-en"><code>cdc.fn_cdc_get_all_changes_...</code> returns four metadata columns — <code>__$start_lsn</code> (commit LSN, shared by everything committed in the same transaction), <code>__$seqval</code>, <code>__$operation</code>, <code>__$update_mask</code> — followed by the captured source columns.</span><span class="lang-vi"><code>cdc.fn_cdc_get_all_changes_...</code> trả về bốn cột metadata — <code>__$start_lsn</code> (LSN của commit, mọi thay đổi commit cùng transaction dùng chung giá trị này), <code>__$seqval</code>, <code>__$operation</code>, <code>__$update_mask</code> — rồi mới tới các captured column.</span></li>
<li><span class="lang-en"><code>__$update_mask</code> is a bit mask over the ordinals of the captured columns: with <code>__$operation</code> 1 or 2 every bit is set, with 3 or 4 only the bits of the columns that actually changed. Read it with <code>sys.fn_cdc_get_column_ordinal</code> and <code>sys.fn_cdc_is_bit_set</code>.</span><span class="lang-vi"><code>__$update_mask</code> là bit mask theo ordinal của các captured column: với <code>__$operation</code> 1 hoặc 2 thì mọi bit đều bật, với 3 hoặc 4 thì chỉ bật bit của những cột thực sự thay đổi. Đọc nó bằng <code>sys.fn_cdc_get_column_ordinal</code> và <code>sys.fn_cdc_is_bit_set</code>.</span></li>
<li><span class="lang-en">The change table <code>cdc.&lt;capture_instance&gt;_CT</code> itself holds two more metadata columns that the function does not return: <code>__$end_lsn</code> (not supported, always NULL) and <code>__$command_id</code>, which is the column to use for ordering operations inside a transaction — <code>__$seqval</code> is explicitly not meant for ordering. Microsoft recommends querying the <code>fn_cdc_get_all_changes_…</code> / <code>fn_cdc_get_net_changes_…</code> functions instead of the change table directly.</span><span class="lang-vi">Bản thân change table <code>cdc.&lt;capture_instance&gt;_CT</code> còn hai cột metadata mà hàm không trả về: <code>__$end_lsn</code> (không được hỗ trợ, luôn NULL) và <code>__$command_id</code> — đây mới là cột dùng để sắp thứ tự các thao tác trong một transaction, còn <code>__$seqval</code> thì tài liệu ghi rõ là không dùng để sắp thứ tự. Microsoft khuyến nghị truy vấn qua hàm <code>fn_cdc_get_all_changes_…</code> / <code>fn_cdc_get_net_changes_…</code> thay vì đọc thẳng change table.</span></li>
<li><span class="lang-en">All CDC metadata columns carry the <code>__$</code> prefix (two underscores), so they never collide with the source-table columns sitting beside them in the same change table.</span><span class="lang-vi">Mọi cột metadata của CDC đều mang tiền tố <code>__$</code> (hai dấu gạch dưới), nên không trùng tên với các cột của bảng nguồn nằm ngay cạnh trong cùng change table.</span></li>
</ul><li><span class="lang-en">Besides <code>fn_cdc_get_all_changes_...</code> (every intermediate change), each capture instance can also expose <code>cdc.fn_cdc_get_net_changes_&lt;instance&gt;</code>, which returns only the NET change per row — one row showing the final state, no matter how many times it was updated in the interval.</span><span class="lang-vi">Ngoài <code>fn_cdc_get_all_changes_...</code> (trả về mọi thay đổi trung gian), mỗi capture instance còn có thể có <code>cdc.fn_cdc_get_net_changes_&lt;instance&gt;</code> — chỉ trả về thay đổi RÒNG của từng dòng: một dòng thể hiện trạng thái cuối cùng, dù trong khoảng LSN đó dòng bị sửa bao nhiêu lần.</span></li>
<ul><li><span class="lang-en">The net-changes function only exists if the capture instance was created with <code>@supports_net_changes = 1</code> in <code>sys.sp_cdc_enable_table</code>.</span><span class="lang-vi">Hàm net changes chỉ tồn tại nếu capture instance được tạo với <code>@supports_net_changes = 1</code> trong <code>sys.sp_cdc_enable_table</code>.</span></li>
<li><span class="lang-en">That in turn requires the source table to have a primary key, or a unique index named via <code>@index_name</code> — CDC needs a row identity to collapse intermediate changes into one net row.</span><span class="lang-vi">Điều kiện kèm theo: bảng nguồn phải có primary key, hoặc một unique index khai báo qua <code>@index_name</code> — CDC cần định danh dòng để gộp các thay đổi trung gian thành một dòng ròng.</span></li>
<li><span class="lang-en">Example: a row inserted then updated 5 times in the interval → all_changes returns 6 rows, net_changes returns 1 row (final values). Useful for ETL that only needs the end state.</span><span class="lang-vi">Ví dụ: một dòng được insert rồi update 5 lần trong khoảng LSN → all_changes trả 6 dòng, net_changes chỉ trả 1 dòng (giá trị cuối). Hợp với ETL chỉ cần trạng thái cuối.</span></li>
</ul></ul></ul></section>
<section id="s39"><h3><span class="n">39.</span> <span class="lang-en">perform a vulnerability assessment</span><span class="lang-vi">thực hiện đánh giá lỗ hổng bảo mật</span><a class="anch" href="#s39" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Azure Defender for SQL costs around $15/server/month.</span><span class="lang-vi">Azure Defender for SQL có giá khoảng 15 USD mỗi server mỗi tháng.</span></li>
<li><span class="lang-en">In the Azure portal, go to the SQL database.</span><span class="lang-vi">Trong Azure portal, vào SQL database.</span></li>
<li><span class="lang-en">Go to Security – Security Center.</span><span class="lang-vi">Vào Security – Security Center.</span></li>
<li><span class="lang-en">Next to “Enabled at the subscription level”, click “Configure”.</span><span class="lang-vi">Cạnh &quot;Enabled at the subscription level&quot;, bấm &quot;Configure&quot;.</span></li>
<ul><li><span class="lang-en">Select your storage account.</span><span class="lang-vi">Select your storage account.</span></li>
<li><span class="lang-en">Select “Periodic recurring scans” to On if you want weekly scans.</span><span class="lang-vi">Select “Periodic recurring scans” to On if you want weekly scans.</span></li>
<li><span class="lang-en">Enter an email address for your scan reports and alerts.</span><span class="lang-vi">Nhập địa chỉ email để nhận báo cáo quét và cảnh báo.</span></li>
<ul><li><span class="lang-en">You can also send emails to admins and subscription owners.</span><span class="lang-vi">Bạn cũng có thể gửi email cho admin và chủ subscription.</span></li>
</ul></ul><li><span class="lang-en">To view details of the findings, go to Security – Security Center - “View additional findings in Vulnerability Assessment”.</span><span class="lang-vi">Để xem chi tiết các phát hiện, vào Security – Security Center – &quot;View additional findings in Vulnerability Assessment&quot;.</span></li>
<ul><li><span class="lang-en">Findings include an overview, number of issues found, severity risk summary, and findings list.</span><span class="lang-vi">Kết quả gồm phần tổng quan, số vấn đề tìm thấy, tóm tắt mức độ rủi ro và danh sách phát hiện.</span></li>
<ul><li><span class="lang-en">You can click on an issue for more details.</span><span class="lang-vi">Bấm vào một vấn đề để xem chi tiết.</span></li>
<li><span class="lang-en">You can “Approve as Baseline” specific results. Any similar results are put in the “Passed” section.</span><span class="lang-vi">Bạn có thể &quot;Approve as Baseline&quot; cho một số kết quả. Các kết quả tương tự sau đó sẽ được đưa vào mục &quot;Passed&quot;.</span></li>
<li><span class="lang-en">You can also “Disable rule”</span><span class="lang-vi">Bạn cũng có thể &quot;Disable rule&quot;</span></li>
</ul><li><span class="lang-en">You can also click “Scan” to do an on-demand scan.</span><span class="lang-vi">Bạn cũng có thể bấm &quot;Scan&quot; để quét ngay theo yêu cầu.</span></li>
<li><span class="lang-en">Click “Scan History” to view previous scans.</span><span class="lang-vi">Bấm &quot;Scan History&quot; để xem các lần quét trước.</span></li>
</ul><li><span class="lang-en">Click on “Export Scan Results” to download an Excel report.</span><span class="lang-vi">Bấm &quot;Export Scan Results&quot; để tải báo cáo Excel.</span></li>
</ul></section>
<section id="s40"><h3><span class="n">40.</span> <span class="lang-en">Manage database resources by using Azure Purview</span><span class="lang-vi">Quản lý tài nguyên database bằng Azure Purview</span><a class="anch" href="#s40" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Data can be anywhere on-premises or in the cloud.</span><span class="lang-vi">Dữ liệu có thể nằm bất cứ đâu, on-premises hoặc trên cloud.</span></li>
<ul><li><span class="lang-en">It is hard to make sure data is compliance if you don't know where it is.</span><span class="lang-vi">Rất khó đảm bảo dữ liệu tuân thủ quy định nếu bạn không biết nó nằm ở đâu.</span></li>
<li><span class="lang-en">Others may not know what data your company has access to.</span><span class="lang-vi">Người khác có thể không biết công ty bạn đang có quyền truy cập những dữ liệu nào.</span></li>
</ul><li><span class="lang-en">Azure Purview catalogs your data, whether it is on-premises, in a machine on the Internet, or in a cloud using Software-as-a-Service (SaaS).</span><span class="lang-vi">Azure Purview lập danh mục cho dữ liệu của bạn, dù nó nằm on-premises, trên một máy nào đó trên Internet, hay trên cloud dạng Software-as-a-Service (SaaS).</span></li>
<ul><li><span class="lang-en">It calls itself a Unified Data Governance solution. Cost from US$300 for 10 Gb of metadata.</span><span class="lang-vi">Nó tự gọi mình là giải pháp Unified Data Governance. Chi phí từ 300 USD cho 10 GB metadata.</span></li>
</ul><li><span class="lang-en">There are three main elements to the Azure Purview Studio:</span><span class="lang-vi">Azure Purview Studio có ba thành phần chính:</span></li>
<ul><li><span class="lang-en">Azure Purview Data Map captures metadata (information about data) from the various sources, by scanning and classifying it.</span><span class="lang-vi">Azure Purview Data Map thu thập metadata (thông tin về dữ liệu) từ nhiều nguồn khác nhau bằng cách quét và phân loại chúng.</span></li>
<li><span class="lang-en">Azure Purview Data Catalog helps you to find data with classification or metadata filters.</span><span class="lang-vi">Azure Purview Data Catalog giúp bạn tìm dữ liệu bằng bộ lọc theo phân loại hoặc metadata.</span></li>
<li><span class="lang-en">Azure Purview Data Insights allow you to see where sensitive data is and how it flows from one data source to another.</span><span class="lang-vi">Azure Purview Data Insights cho bạn thấy dữ liệu nhạy cảm nằm ở đâu và luân chuyển từ nguồn này sang nguồn khác thế nào.</span></li>
</ul><li><span class="lang-en">Data can be classified into (for example):</span><span class="lang-vi">Dữ liệu có thể được phân loại thành (ví dụ):</span></li>
<ul><li><span class="lang-en">Location (City, Country, Place),</span><span class="lang-vi">Vị trí (Thành phố, Quốc gia, Địa danh),</span></li>
<li><span class="lang-en">Person First and Last Name,</span><span class="lang-vi">Họ và tên cá nhân,</span></li>
<li><span class="lang-en">Bank account, business, company, driver's license, medial accounts, passport, social security, tax file, and other identification numbers.</span><span class="lang-vi">Số tài khoản ngân hàng, số doanh nghiệp, công ty, bằng lái xe, hồ sơ y tế, hộ chiếu, an sinh xã hội, mã số thuế và các loại số định danh khác.</span></li>
<li><span class="lang-en">Date of Birth,</span><span class="lang-vi">Ngày sinh,</span></li>
<li><span class="lang-en">Email,</span><span class="lang-vi">Email,</span></li>
<li><span class="lang-en">Ethnic group,</span><span class="lang-vi">Nhóm dân tộc,</span></li>
<li><span class="lang-en">IP (Internet Protocol) Addresses.</span><span class="lang-vi">Địa chỉ IP (Internet Protocol).</span></li>
</ul><li><span class="lang-en">You can create scan rule sets which group together the classifications and file types.</span><span class="lang-vi">Bạn có thể tạo scan rule set để gom nhóm các phân loại và loại tệp lại với nhau.</span></li>
<li><span class="lang-en">To manage database resources:</span><span class="lang-vi">Để quản lý tài nguyên database:</span></li>
<ul><li><span class="lang-en">In the Azure SQL Database, go to &quot;Server Firewall&quot;, and click on &quot;Allow azure services and resources&quot;.</span><span class="lang-vi">Trong Azure SQL Database, vào &quot;Server Firewall&quot; và bấm &quot;Allow azure services and resources&quot;.</span></li>
<li><span class="lang-en">Create an Azure Key Vault.</span><span class="lang-vi">Create an Azure Key Vault.</span></li>
<li><span class="lang-en">Create a new Secret with the SQL password.</span><span class="lang-vi">Create a new Secret with the SQL password.</span></li>
<li><span class="lang-en">Create a Purview account</span><span class="lang-vi">Create a Purview account</span></li>
<li><span class="lang-en">Click on &quot;Open Purview Studio&quot;.</span><span class="lang-vi">Bấm &quot;Open Purview Studio&quot;.</span></li>
<li><span class="lang-en">In Management – Credentials, click on &quot;Manage Key Vault connections&quot;.</span><span class="lang-vi">Trong Management – Credentials, bấm &quot;Manage Key Vault connections&quot;.</span></li>
<ul><li><span class="lang-en">Then click on &quot;+New&quot; for a new connection.</span><span class="lang-vi">Rồi bấm &quot;+New&quot; để tạo kết nối mới.</span></li>
<li><span class="lang-en">Fill in a connection Name, and select the &quot;Key Vault name&quot;, which should be the Key Vault you have just created.</span><span class="lang-vi">Điền tên kết nối và chọn &quot;Key Vault name&quot; — chính là Key Vault bạn vừa tạo.</span></li>
</ul><li><span class="lang-en">Go back to Management – Credentials, Then add a &quot;+New&quot; credential.</span><span class="lang-vi">Quay lại Management – Credentials, rồi bấm &quot;+New&quot; để thêm credential.</span></li>
<ul><li><span class="lang-en">Enter the Name and User Name.</span><span class="lang-vi">Nhập Name và User Name.</span></li>
<li><span class="lang-en">The Authentication methods include Managed identity, and SQL/Windows authentication.</span><span class="lang-vi">Các phương thức xác thực gồm Managed identity, và SQL/Windows authentication.</span></li>
<li><span class="lang-en">Select your Key Vault connection, and select your Secret.</span><span class="lang-vi">Select your Key Vault connection, and select your Secret.</span></li>
</ul><li><span class="lang-en">In Data Map – Sources, you may create a collection (optional).</span><span class="lang-vi">Trong Data Map – Sources, bạn có thể tạo một collection (tùy chọn).</span></li>
<li><span class="lang-en">In Data Map – Sources – Register [a new source] – Azure SQL Database.</span><span class="lang-vi">Vào Data Map – Sources – Register [nguồn mới] – Azure SQL Database.</span></li>
<ul><li><span class="lang-en">Enter a name, and Select the Subscription, Server name, and collection.</span><span class="lang-vi">Nhập tên, rồi chọn Subscription, Server name và collection.</span></li>
</ul><li><span class="lang-en">For this database, click on the new scan (a lot of Cs with a little pencil).</span><span class="lang-vi">Với database này, bấm vào biểu tượng scan mới (hình nhiều chữ C kèm cây bút chì nhỏ).</span></li>
<ul><li><span class="lang-en">Enter a name, and database name.</span><span class="lang-vi">Nhập tên và tên database.</span></li>
<li><span class="lang-en">Important: change the credential to the credential you have set up earlier.</span><span class="lang-vi">Quan trọng: đổi credential sang credential bạn đã thiết lập trước đó.</span></li>
<li><span class="lang-en">Unless you want information such as Stored Procedures executions, turn off Lineage extraction.</span><span class="lang-vi">Trừ khi bạn cần thông tin như lịch sử thực thi Stored Procedure, hãy tắt Lineage extraction.</span></li>
<ul><li><span class="lang-en">Additional steps are needed if you want this on.</span><span class="lang-vi">Nếu muốn bật thì cần thêm vài bước nữa.</span></li>
</ul><li><span class="lang-en">Select a collection, and click &quot;Test connection&quot;.</span><span class="lang-vi">Select a collection, and click &quot;Test connection&quot;.</span></li>
<li><span class="lang-en">Select a scan frequency.</span><span class="lang-vi">Select a scan frequency.</span></li>
</ul><li><span class="lang-en">You can delete the reference to the database, or click on &quot;View details&quot;.</span><span class="lang-vi">Bạn có thể xóa tham chiếu tới database, hoặc bấm &quot;View details&quot;.</span></li>
<li><span class="lang-en">You can view the results of the scans by going to the Data catalog.</span><span class="lang-vi">Bạn xem kết quả quét bằng cách vào Data catalog.</span></li>
<ul><li><span class="lang-en">You have filter by Object Type, Classification (such as Person's Name), Contact, Label or Assigned Terms.</span><span class="lang-vi">Bạn lọc được theo Object Type, Classification (ví dụ Person's Name), Contact, Label hoặc Assigned Terms.</span></li>
</ul></ul></ul></section>
<section id="s41"><h3><span class="n">41.</span> <span class="lang-en">Implement Azure SQL Database ledger</span><span class="lang-vi">Triển khai Azure SQL Database ledger</span><a class="anch" href="#s41" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">You may have data that you need to know has not been tampered with – for example, in the financial and medical field.</span><span class="lang-vi">Bạn có thể có loại dữ liệu cần chắc chắn là chưa bị can thiệp — ví dụ trong lĩnh vực tài chính và y tế.</span></li>
<li><span class="lang-en">A Database Ledger protects your data:</span><span class="lang-vi">Database Ledger bảo vệ dữ liệu của bạn bằng cách:</span></li>
<ul><li><span class="lang-en">Preserves historical data, by maintaining previous values in a history table, which can support T-SQL queries for auditing and forensics.</span><span class="lang-vi">Giữ lại dữ liệu lịch sử — lưu các giá trị cũ trong một history table, hỗ trợ truy vấn T-SQL phục vụ kiểm toán và điều tra.</span></li>
<li><span class="lang-en">Manages the process transparently, not requiring application changes.</span><span class="lang-vi">Quản lý toàn bộ quá trình một cách trong suốt, không đòi hỏi thay đổi ứng dụng.</span></li>
<li><span class="lang-en">Providing cryptographic (secure communication techniques) proof of data to auditors, reducing time needed to audit data.</span><span class="lang-vi">Cung cấp bằng chứng mật mã học (kỹ thuật truyền tin an toàn) về dữ liệu cho kiểm toán viên, giúp giảm thời gian kiểm toán.</span></li>
<ul><li><span class="lang-en">Any modification is hashed (cryptographically using SHA-256), to create a root hash.</span><span class="lang-vi">Mọi thay đổi đều được băm (bằng SHA-256) để tạo ra một root hash.</span></li>
<li><span class="lang-en">Root hashes are stored in blocks, which are closed after 30 seconds or 100,000 transactions.</span><span class="lang-vi">Các root hash được lưu trong block; block được đóng sau 30 giây hoặc 100.000 giao dịch.</span></li>
<li><span class="lang-en">This block is then hashed along the root hash of the previous block, forming a blockchain.</span><span class="lang-vi">Block này lại được băm cùng root hash của block trước đó, tạo thành một blockchain.</span></li>
<li><span class="lang-en">The latest block hash is called the &quot;database digest&quot;.</span><span class="lang-vi">Hash của block mới nhất được gọi là &quot;database digest&quot;.</span></li>
<ul><li><span class="lang-en">They can be stored in immutable Azure Blob storage (Write Once, Read Many or WORM) or Azure Confidential Ledger.</span><span class="lang-vi">Chúng có thể được lưu trong Azure Blob storage bất biến (Write Once, Read Many hay WORM) hoặc trong Azure Confidential Ledger.</span></li>
<li><span class="lang-en">You can then verify the database's integrity by comparing the database digest hash against the database calculated hashes.</span><span class="lang-vi">Sau đó bạn kiểm chứng tính toàn vẹn của database bằng cách so sánh hash của database digest với các hash mà database tính ra.</span></li>
</ul></ul></ul><li><span class="lang-en">You can create ledger databases in SQL Server 2022 and Azure SQL Database.</span><span class="lang-vi">Bạn tạo được ledger database trên SQL Server 2022 và Azure SQL Database.</span></li>
<li><span class="lang-en">You can create &quot;updatable ledger tables&quot;. When doing so, the following are created:</span><span class="lang-vi">Bạn có thể tạo &quot;updatable ledger table&quot;. Khi đó những thứ sau được tạo ra:</span></li>
<ul><li><span class="lang-en">The table itself</span><span class="lang-vi">Chính bảng đó</span></li>
<ul><li><span class="lang-en">It includes the 4 GENERATED ALWAYS columns ledger_start/end_transaction_id and ledger_start/end_sequence_number.</span><span class="lang-vi">Nó gồm 4 cột GENERATED ALWAYS: ledger_start/end_transaction_id và ledger_start/end_sequence_number.</span></li>
<li><span class="lang-en">The transaction_id columns are the unique transaction ID (which may contain multiple rows).</span><span class="lang-vi">Các cột transaction_id là ID giao dịch duy nhất (một giao dịch có thể gồm nhiều dòng).</span></li>
<li><span class="lang-en">The sequence_number shows the order the values are inserted in each transaction (restarting at zero for each transaction).</span><span class="lang-vi">sequence_number cho biết thứ tự các giá trị được chèn trong mỗi giao dịch (đếm lại từ 0 ở mỗi giao dịch).</span></li>
</ul><li><span class="lang-en">A history table, showing the previous version of a row when it has been updated or deleted.</span><span class="lang-vi">Một history table, lưu phiên bản trước của một dòng khi nó bị update hoặc delete.</span></li>
<ul><li><span class="lang-en">The 4 GENERATED ALWAYS columns are also created in this table.</span><span class="lang-vi">4 cột GENERATED ALWAYS cũng được tạo trong bảng này.</span></li>
<li><span class="lang-en">Data cannot be deleted from this table.</span><span class="lang-vi">Không thể xóa dữ liệu khỏi bảng này.</span></li>
<li><span class="lang-en">If you don't give it a name, it will generally have the suffix .MSSQL_LedgerHistoryFor_(GUID).</span><span class="lang-vi">Nếu bạn không đặt tên, nó thường có hậu tố .MSSQL_LedgerHistoryFor_(GUID).</span></li>
</ul><li><span class="lang-en">A view, which joins the updatable ledger table with the history table.</span><span class="lang-vi">Một view, join updatable ledger table với history table.</span></li>
<ul><li><span class="lang-en">It shows the transaction ID, together with whether it was a DELETE or INSERT (an UPDATE is both).</span><span class="lang-vi">View này hiển thị transaction ID cùng việc thao tác đó là DELETE hay INSERT (một UPDATE tính là cả hai).</span></li>
<li><span class="lang-en">Microsoft recommends querying the history of changes using the ledger view, instead of the history table.</span><span class="lang-vi">Microsoft khuyến nghị truy vấn lịch sử thay đổi qua ledger view thay vì qua history table.</span></li>
</ul></ul><li><span class="lang-en">You can also create &quot;append-only ledger tables&quot;.</span><span class="lang-vi">Bạn cũng có thể tạo &quot;append-only ledger table&quot;.</span></li>
<ul><li><span class="lang-en">You can insert data.</span><span class="lang-vi">Bạn chèn được dữ liệu.</span></li>
<li><span class="lang-en">Updates and deletions are denied, even by system administrators or DBAs.</span><span class="lang-vi">Updates and deletions are denied, even by system administrators or DBAs.</span></li>
<ul><li><span class="lang-en">You get the error message &quot;Updates are not allowed for the append only Ledger table 'NAMEOFTABLE'.&quot;</span><span class="lang-vi">Bạn sẽ nhận thông báo lỗi &quot;Updates are not allowed for the append only Ledger table 'TÊNBẢNG'.&quot;</span></li>
</ul><li><span class="lang-en">No history table is created, as there are no updates/deletes. However, two GENERATED ALWAYS columns are automatically added in the main table: ledger_start _transaction_id and _sequence_number.</span><span class="lang-vi">Không có history table nào được tạo, vì không hề có update/delete. Tuy nhiên hai cột GENERATED ALWAYS vẫn được tự thêm vào bảng chính: ledger_start_transaction_id và _sequence_number.</span></li>
<li><span class="lang-en">A view is created provides information about the transactions and the user which inserted the data. However, it is more helpful for updatable ledger tables instead of append-only, as you cannot UPDATE or DELETE, and is provided for consistency.</span><span class="lang-vi">Một view cũng được tạo, cung cấp thông tin về các giao dịch và người dùng đã chèn dữ liệu. Tuy nhiên nó hữu ích với updatable ledger table hơn là append-only, vì ở đây bạn không UPDATE hay DELETE được — view này chỉ để nhất quán về mặt hình thức.</span></li>
</ul><li><span class="lang-en">You can also create ledger databases.</span><span class="lang-vi">Bạn cũng có thể tạo hẳn ledger database.</span></li>
<ul><li><span class="lang-en">All your tables are ledger tables (either Updatable or Append-only).</span><span class="lang-vi">Khi đó mọi bảng của bạn đều là ledger table (Updatable hoặc Append-only).</span></li>
<li><span class="lang-en">By default, every table is an Updatable ledger table.</span><span class="lang-vi">Mặc định, mọi bảng là Updatable ledger table.</span></li>
<li><span class="lang-en">To do this when creating a database in the Azure Portal:</span><span class="lang-vi">Để làm việc này khi tạo database trong Azure Portal:</span></li>
<ul><li><span class="lang-en">go to Security – Ledger, click &quot;Configure ledger&quot;, and select &quot;Enable for all future tables in this database&quot;.</span><span class="lang-vi">vào Security – Ledger, bấm &quot;Configure ledger&quot; và chọn &quot;Enable for all future tables in this database&quot;.</span></li>
<li><span class="lang-en">You can also &quot;Enable automatic digest storage&quot;, to store the digests automatically in an Azure Storage account or Azure Confidential Ledger.</span><span class="lang-vi">Bạn cũng có thể bật &quot;Enable automatic digest storage&quot; để tự lưu digest vào một Azure Storage account hoặc Azure Confidential Ledger.</span></li>
</ul><li><span class="lang-en">To do this in the Azure Portal for all future tables:</span><span class="lang-vi">Để làm việc này trong Azure Portal cho mọi bảng tạo sau này:</span></li>
<ul><li><span class="lang-en">Go to the database in Azure Portal, and go to Security – Ledger, and select &quot;Enable for all future tables in this database&quot;.</span><span class="lang-vi">Vào database trong Azure Portal, vào Security – Ledger và chọn &quot;Enable for all future tables in this database&quot;.</span></li>
</ul><li><span class="lang-en">To do this in T-SQL, end the CREATE DATABASE command with &quot;WITH LEDGER = ON&quot;</span><span class="lang-vi">Để làm bằng T-SQL, kết thúc lệnh CREATE DATABASE bằng &quot;WITH LEDGER = ON&quot;</span></li>
</ul><li><span class="lang-en">Transaction and block data is stored in:</span><span class="lang-vi">Dữ liệu giao dịch và block được lưu trong:</span></li>
<ul><li><span class="lang-en">sys.database_ledger_transactions – information about each transaction, and</span><span class="lang-vi">sys.database_ledger_transactions – information about each transaction, and</span></li>
<li><span class="lang-en">sys.database_ledger_blocks – a row for every block.</span><span class="lang-vi">sys.database_ledger_blocks – a row for every block.</span></li>
</ul><li><span class="lang-en">To create ledger tables in T-SQL:</span><span class="lang-vi">Để tạo ledger table bằng T-SQL:</span></li>
<ul><li><span class="lang-en">You need to have the ENABLE LEDGER permission.</span><span class="lang-vi">Bạn cần có quyền ENABLE LEDGER.</span></li>
<li><span class="lang-en">To create an updatable table in T-SQL, add at the end of the CREATE TABLE statement:</span><span class="lang-vi">Để tạo updatable table bằng T-SQL, thêm vào cuối lệnh CREATE TABLE:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">WITH (SYSTEM_VERSIONING = ON
(HISTORY_TABLE = [Schema].[TableName]),
LEDGER = ON);</span><span class="lang-vi">WITH (SYSTEM_VERSIONING = ON
(HISTORY_TABLE = [Schema].[TableName]),
LEDGER = ON);</span></pre></li>
<li><span class="lang-en">Note – LEDGER = ON is optional for ledger databases.</span><span class="lang-vi">Lưu ý — LEDGER = ON là tùy chọn nếu đó vốn đã là ledger database.</span></li>
</ul><li><span class="lang-en">To create an append-only ledger table in T-SQL, use:</span><span class="lang-vi">Để tạo append-only ledger table bằng T-SQL, dùng:</span></li>
<ul><li><code><span class="lang-en">WITH (LEDGER = ON (APPEND_ONLY = ON));</span><span class="lang-vi">WITH (LEDGER = ON (APPEND_ONLY = ON));</span></code></li>
</ul></ul><li><span class="lang-en">You cannot convert existing (non-ledger) tables to ledger tables.</span><span class="lang-vi">Bạn KHÔNG thể chuyển bảng thường (non-ledger) thành ledger table.</span></li>
<ul><li><span class="lang-en">You would need to create new ledger tables, copy the data across, and then (optionally) rename the ledger tables. You can copy using:</span><span class="lang-vi">Bạn phải tạo ledger table mới, copy dữ liệu sang, rồi (tùy chọn) đổi tên bảng ledger. Có thể copy bằng:</span></li>
<ul><li><span class="lang-en">The stored procedure sp_copy_data_in_batches @source_table_name = N'NAME', @target_table_name = N'NAME'.</span><span class="lang-vi">Stored procedure sp_copy_data_in_batches @source_table_name = N'TÊN', @target_table_name = N'TÊN'.</span></li>
<li><span class="lang-en">This splits the copy operation into batches of 10,000-100,000 rows per transaction. As this is done in parallel, this can speed the copying.</span><span class="lang-vi">Nó chia thao tác copy thành các batch 10.000-100.000 dòng mỗi giao dịch. Vì chạy song song nên tốc độ copy nhanh hơn.</span></li>
<li><span class="lang-en">Alternatively, you can use SELECT INTO or BULK INSERT.</span><span class="lang-vi">Alternatively, you can use SELECT INTO or BULK INSERT.</span></li>
</ul></ul><li><span class="lang-en">To verify the ledger database, use:</span><span class="lang-vi">Để kiểm chứng ledger database, dùng:</span></li>
<ul><li><span class="lang-en">T-SQL</span><span class="lang-vi">T-SQL</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">DECLARE @digest_locations NVARCHAR(MAX) = (SELECT * FROM sys.database_ledger_digest_locations FOR JSON AUTO, INCLUDE_NULL_VALUES);SELECT @digest_locations as digest_locations;
BEGIN TRY
EXEC sys.sp_verify_database_ledger_from_digest_storage @digest_locations;
SELECT 'Ledger verification succeeded.' AS Result;
END TRY
BEGIN CATCH
THROW;
END CATCH</span><span class="lang-vi">DECLARE @digest_locations NVARCHAR(MAX) = (SELECT * FROM sys.database_ledger_digest_locations FOR JSON AUTO, INCLUDE_NULL_VALUES);SELECT @digest_locations as digest_locations;
BEGIN TRY
EXEC sys.sp_verify_database_ledger_from_digest_storage @digest_locations;
SELECT 'Ledger verification succeeded.' AS Result;
END TRY
BEGIN CATCH
THROW;
END CATCH</span></pre></li>
</ul><li><span class="lang-en">This script can be found in the Azure portal – [Name of database] – Security – Ledger – Verify database.</span><span class="lang-vi">Script này có sẵn trong Azure portal – [Tên database] – Security – Ledger – Verify database.</span></li>
<li><span class="lang-en">If successful, you get a message. The output includes:</span><span class="lang-vi">Nếu thành công, bạn nhận được thông báo. Kết quả đầu ra gồm:</span></li>
<ul><li><span class="lang-en">path – the digest locations,</span><span class="lang-vi">path — vị trí các digest,</span></li>
<li><span class="lang-en">last_digest_block_id – the last block ID, and</span><span class="lang-vi">last_digest_block_id — ID của block cuối cùng, và</span></li>
<li><span class="lang-en">is_current – whether the &quot;path&quot; is the latest (true) or previous (false) location.</span><span class="lang-vi">is_current — cho biết &quot;path&quot; đó là vị trí mới nhất (true) hay vị trí cũ (false).</span></li>
</ul><li><span class="lang-en">If unsuccessful, the database has been tampered with. Ideally, you should restore to a point in time that can be verified, and using manually creating any future transactions through investigating backups.</span><span class="lang-vi">Nếu thất bại nghĩa là database đã bị can thiệp. Lý tưởng nhất là khôi phục về một thời điểm còn kiểm chứng được, rồi dựng lại các giao dịch sau đó bằng cách tra cứu thủ công từ các bản backup.</span></li>
</ul></ul></section>
<section id="s42"><h3><span class="n">42.</span> <span class="lang-en">Implement row-level security</span><span class="lang-vi">Triển khai row-level security</span><a class="anch" href="#s42" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Row-level security (RLS) is available for SQL Server 2016 or later, and Azure SQL Database.</span><span class="lang-vi">Row-level security (RLS) có từ SQL Server 2016 trở lên, và trên Azure SQL Database.</span></li>
<li><span class="lang-en">It restricts what your users can see/do based on their group membership or execution context:</span><span class="lang-vi">Nó giới hạn những gì người dùng xem được/làm được dựa trên nhóm họ thuộc về hoặc ngữ cảnh thực thi:</span></li>
<ul><li><span class="lang-en">You can filter the rows available to read, using SELECT, UPDATE and DELETE.</span><span class="lang-vi">Bạn lọc được các dòng được phép đọc, áp dụng cho SELECT, UPDATE và DELETE.</span></li>
<li><span class="lang-en">You can block write operations that users are not able to read, using either AFTER INSERT, AFTER UPDATE to block write operations on new or existing data, or BEFORE UPDATE and BEFORE DELETE to block update/deletes on existing data.</span><span class="lang-vi">Bạn chặn được các thao tác ghi mà người dùng không được phép đọc — dùng AFTER INSERT, AFTER UPDATE để chặn ghi lên dữ liệu mới hoặc dữ liệu hiện có, hoặc BEFORE UPDATE và BEFORE DELETE để chặn update/delete trên dữ liệu hiện có.</span></li>
</ul><li><span class="lang-en">The order of the steps never changes — remember the chain <b>Schema → Function → Grant → Policy → Test</b> (&quot;tạo chỗ → viết luật → cấp quyền → gắn luật → kiểm thử&quot;):</span><span class="lang-vi">Thứ tự các bước không bao giờ đổi — nhớ chuỗi <b>Schema → Function → Grant → Policy → Test</b> (&quot;tạo chỗ → viết luật → cấp quyền → gắn luật → kiểm thử&quot;):</span></li>
<ul><li><span class="lang-en"><b>Schema</b> — create a dedicated schema to hold the security objects, so their permissions stay separate from the data.</span><span class="lang-vi"><b>Schema</b> — tạo một schema riêng làm nơi chứa các object bảo mật, để quyền của chúng tách khỏi quyền trên dữ liệu.</span></li>
<li><span class="lang-en"><b>Function</b> — write the inline table-valued function WITH SCHEMABINDING that decides which rows the caller may see (it returns a row when the answer is yes).</span><span class="lang-vi"><b>Function</b> — viết hàm inline table-valued WITH SCHEMABINDING quyết định người gọi được thấy dòng nào (trả về một dòng khi câu trả lời là được).</span></li>
<li><span class="lang-en"><b>Grant</b> — grant the end users SELECT on the target table. They need no permission on the predicate function: the policy applies it on their behalf.</span><span class="lang-vi"><b>Grant</b> — cấp cho user cuối quyền SELECT trên bảng đích. Họ KHÔNG cần quyền gì trên hàm predicate: security policy tự áp hàm đó thay họ.</span></li>
<li><span class="lang-en"><b>Policy</b> — CREATE SECURITY POLICY that attaches the function to the table as a FILTER PREDICATE (reads) or a BLOCK PREDICATE (writes). The function must already exist before the policy can reference it.</span><span class="lang-vi"><b>Policy</b> — CREATE SECURITY POLICY để gắn hàm vào bảng dưới dạng FILTER PREDICATE (khi đọc) hoặc BLOCK PREDICATE (khi ghi). Hàm phải tồn tại trước thì policy mới tham chiếu được.</span></li>
<li><span class="lang-en"><b>Test</b> — impersonate with EXECUTE AS USER, check what each user sees, then REVERT. Testing as yourself proves nothing: a sysadmin or the table owner is not filtered the same way.</span><span class="lang-vi"><b>Test</b> — mượn danh bằng EXECUTE AS USER, xem từng user thấy gì, rồi REVERT. Thử bằng chính tài khoản của bạn không chứng minh được gì: sysadmin hay chủ sở hữu bảng không bị lọc giống user thường.</span></li>
</ul><li><span class="lang-en">To implement RLS, you need various objects:</span><span class="lang-vi">Để triển khai RLS, bạn cần một số object:</span></li>
<ul><li><span class="lang-en">It is recommended to create separate schemas for Row-Level Security objects</span><span class="lang-vi">Nên tạo schema riêng cho các object của Row-Level Security</span></li>
<li><span class="lang-en">to reduce effort for maintaining permissions.</span><span class="lang-vi">để giảm công sức duy trì quyền.</span></li>
<li><span class="lang-en">Create an inline table-valued function, returning a 1 when the User should see the result.</span><span class="lang-vi">Create an inline table-valued function, returning a 1 when the User should see the result.</span></li>
<li><span class="lang-en">Add SELECT permissions to the function.</span><span class="lang-vi">Add SELECT permissions to the function.</span></li>
<li><span class="lang-en">Create a security policy with the function as a FILTER PREDICATE (for SELECT) or BLOCK PREDICATE (for INSERT/UPDATE/DELETE).</span><span class="lang-vi">Create a security policy with the function as a FILTER PREDICATE (for SELECT) or BLOCK PREDICATE (for INSERT/UPDATE/DELETE).</span></li>
<li><span class="lang-en">To create the necessary security policies, you need:</span><span class="lang-vi">Để tạo được security policy cần thiết, bạn cần:</span></li>
<li><span class="lang-en">ALTER ANY SECURITY POLICY permission</span><span class="lang-vi">ALTER ANY SECURITY POLICY permission</span></li>
<li><span class="lang-en">SELECT and REFERENCES permissions to any relevant functions, target tables and columns.</span><span class="lang-vi">SELECT and REFERENCES permissions to any relevant functions, target tables and columns.</span></li>
<li class="cb"><pre class="code"><span class="lang-en">-- In this example, we will create 3 user accounts:
CREATE USER BOSS WITHOUT LOGIN;
CREATE USER User1 WITHOUT LOGIN;
CREATE USER User2 WITHOUT LOGIN;
-- and a Table with values:
GO --Create schema must be the first statement in a batch
CREATE SCHEMA Customers
GO
CREATE TABLE Customers.Customers
(Customer nvarchar(10),
Status nvarchar(10),
UserLead nvarchar(10))</span><span class="lang-vi">-- Trong ví dụ này, ta sẽ tạo 3 tài khoản user:
CREATE USER BOSS WITHOUT LOGIN;
CREATE USER User1 WITHOUT LOGIN;
CREATE USER User2 WITHOUT LOGIN;
-- và một bảng có dữ liệu:
GO --Lệnh CREATE SCHEMA phải là câu lệnh đầu tiên trong một batch
CREATE SCHEMA Customers
GO
CREATE TABLE Customers.Customers
(Customer nvarchar(10),
Status nvarchar(10),
UserLead nvarchar(10))</span></pre></li>
<li class="cb"><pre class="code"><span class="lang-en">INSERT INTO Customers.Customers VALUES
('John', 'A', 'User1'), ('Fred', 'B', 'User2'), ('Trevor', 'A', 'Boss') , ('Alfred', 'B', 'Boss')
-- Function
GO
CREATE SCHEMA RLS;
GO
CREATE FUNCTION RLS.rls_security(@User as nvarchar(10), @Status as nvarchar(10)) RETURNS TABLE
WITH SCHEMABINDING
AS
RETURN SELECT 1 AS rls_security_result
WHERE @User = USER_NAME() or (USER_NAME() = 'BOSS' AND @Status = 'A') ;
GO
-- Add SELECT permissions to the function and the table:
GRANT SELECT ON RLS.rls_security TO [Boss]
GRANT SELECT ON RLS.rls_security TO [User1]
GRANT SELECT ON RLS.rls_security TO [User2]
GRANT SELECT ON Customers.Customers TO [Boss]
GRANT SELECT ON Customers.Customers TO [User1]
GRANT SELECT ON Customers.Customers TO [User2]
GRANT INSERT ON Customers.Customers TO [Boss]</span><span class="lang-vi">INSERT INTO Customers.Customers VALUES
('John', 'A', 'User1'), ('Fred', 'B', 'User2'), ('Trevor', 'A', 'Boss') , ('Alfred', 'B', 'Boss')
-- Function
GO
CREATE SCHEMA RLS;
GO
CREATE FUNCTION RLS.rls_security(@User as nvarchar(10), @Status as nvarchar(10)) RETURNS TABLE
WITH SCHEMABINDING
AS
RETURN SELECT 1 AS rls_security_result
WHERE @User = USER_NAME() or (USER_NAME() = 'BOSS' AND @Status = 'A') ;
GO
-- Cấp quyền SELECT cho function và cho bảng:
GRANT SELECT ON RLS.rls_security TO [Boss]
GRANT SELECT ON RLS.rls_security TO [User1]
GRANT SELECT ON RLS.rls_security TO [User2]
GRANT SELECT ON Customers.Customers TO [Boss]
GRANT SELECT ON Customers.Customers TO [User1]
GRANT SELECT ON Customers.Customers TO [User2]
GRANT INSERT ON Customers.Customers TO [Boss]</span></pre></li>
</ul><ul><li class="cb"><pre class="code"><span class="lang-en">-- Create the security policy
CREATE SECURITY POLICY RLSPolicy
ADD FILTER PREDICATE RLS.rls_security(UserLead, Status)
ON Customers.Customers,
ADD BLOCK PREDICATE RLS.rls_security(UserLead, Status)
ON Customers.Customers AFTER INSERT
WITH (STATE = ON); -- To enable the policy
GO</span><span class="lang-vi">-- Tạo security policy
CREATE SECURITY POLICY RLSPolicy
ADD FILTER PREDICATE RLS.rls_security(UserLead, Status)
ON Customers.Customers,
ADD BLOCK PREDICATE RLS.rls_security(UserLead, Status)
ON Customers.Customers AFTER INSERT
WITH (STATE = ON); -- To enable the policy
GO</span></pre></li>
</ul><ul><li class="cb"><pre class="code"><span class="lang-en">-- Then you can test:
EXECUTE AS USER = 'User1'
SELECT * FROM Customers.Customers
REVERT</span><span class="lang-vi">-- Rồi bạn có thể kiểm thử:
EXECUTE AS USER = 'User1'
SELECT * FROM Customers.Customers
REVERT</span></pre></li>
</ul><ul><li class="cb"><pre class="code"><span class="lang-en">-- Second test
EXECUTE AS USER = 'Boss'
SELECT * FROM Customers.Customers
INSERT INTO Customers.Customers
VALUES ('Sally', 'A', 'User1')
SELECT * FROM Customers.Customers
INSERT INTO Customers.Customers
VALUES ('Susan', 'B', 'User1')
REVERT</span><span class="lang-vi">-- Kiểm thử lần hai
EXECUTE AS USER = 'Boss'
SELECT * FROM Customers.Customers
INSERT INTO Customers.Customers
VALUES ('Sally', 'A', 'User1')
SELECT * FROM Customers.Customers
INSERT INTO Customers.Customers
VALUES ('Susan', 'B', 'User1')
REVERT</span></pre></li>
</ul><ul><li class="cb"><pre class="code"><span class="lang-en">-- Turn off security policy
ALTER SECURITY POLICY RLSPolicy
WITH (STATE = OFF);</span><span class="lang-vi">-- Tắt security policy
ALTER SECURITY POLICY RLSPolicy
WITH (STATE = OFF);</span></pre></li>
</ul><ul><li class="cb"><pre class="code"><span class="lang-en">-- Do third test
EXECUTE AS USER = 'User1'
SELECT * FROM Customers.Customers
REVERT
EXECUTE AS USER = 'Boss'
SELECT * FROM Customers.Customers
INSERT INTO Customers.Customers
VALUES ('Susan', 'B', 'User1')
SELECT * FROM Customers.Customers
REVERT</span><span class="lang-vi">-- Kiểm thử lần ba
EXECUTE AS USER = 'User1'
SELECT * FROM Customers.Customers
REVERT
EXECUTE AS USER = 'Boss'
SELECT * FROM Customers.Customers
INSERT INTO Customers.Customers
VALUES ('Susan', 'B', 'User1')
SELECT * FROM Customers.Customers
REVERT</span></pre></li>
</ul></ul></section>
<section id="s43"><h3><span class="n">43.</span> <span class="lang-en">Configure Microsoft Defender for SQL</span><span class="lang-vi">Cấu hình Microsoft Defender for SQL</span><a class="anch" href="#s43" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Advanced Threat Protection is for Azure SQL Database, Azure SQL Managed Instance, SQL Server on Azure VMs and more.</span><span class="lang-vi">Advanced Threat Protection áp dụng cho Azure SQL Database, Azure SQL Managed Instance, SQL Server trên Azure VM và nhiều nền tảng khác.</span></li>
<li><span class="lang-en">It alerts customers to potential threats when they happen.</span><span class="lang-vi">Nó cảnh báo khách hàng về các mối đe dọa tiềm ẩn ngay khi chúng xảy ra.</span></li>
<ul><li><span class="lang-en">You receive alerts on suspicious database activities (including access and query patterns), possible vulnerabilities, and SQL injection attacks.</span><span class="lang-vi">Bạn nhận được cảnh báo về hoạt động database đáng ngờ (gồm cả kiểu truy cập và kiểu truy vấn), lỗ hổng tiềm ẩn và tấn công SQL injection.</span></li>
<li><span class="lang-en">Alerts are integrated with Microsoft Defender for Cloud, which includes recommended actions.</span><span class="lang-vi">Cảnh báo được tích hợp với Microsoft Defender for Cloud, kèm theo hành động khuyến nghị.</span></li>
<ul><li><span class="lang-en">You may wish to enable auditing, for writing database events to an Azure log.</span><span class="lang-vi">Bạn nên bật auditing để ghi các sự kiện database vào một Azure log.</span></li>
<ul><li><span class="lang-en">See separate &quot;configure server and database audits&quot; topic for more details.</span><span class="lang-vi">Xem mục riêng &quot;configure server and database audits&quot; để biết chi tiết.</span></li>
</ul></ul></ul><li><span class="lang-en">To set it up:</span><span class="lang-vi">Cách thiết lập:</span></li>
<ul><li><span class="lang-en">In the Azure Portal, go to the SQL Server – Security – Microsoft Defender for Cloud.</span><span class="lang-vi">Trong Azure Portal, vào SQL Server – Security – Microsoft Defender for Cloud.</span></li>
<li><span class="lang-en">Click &quot;Enable Microsoft Defender for SQL&quot; if it is not enabled.</span><span class="lang-vi">Bấm &quot;Enable Microsoft Defender for SQL&quot; nếu chưa bật.</span></li>
<li><span class="lang-en">Click on Configure.</span><span class="lang-vi">Bấm Configure.</span></li>
<li><span class="lang-en">In the &quot;Advanced Threat Protection Settings&quot;, click &quot;Add your contact details to the subscription's email settings in Defender for Cloud&quot;, and provide which roles should receive the email notifications, together with any additional address.</span><span class="lang-vi">Trong &quot;Advanced Threat Protection Settings&quot;, bấm &quot;Add your contact details to the subscription's email settings in Defender for Cloud&quot;, rồi chỉ định những role nào sẽ nhận email thông báo, cùng địa chỉ bổ sung nếu có.</span></li>
<ul><li><span class="lang-en">The emails will provide information on the activities, database, server and application name, and the event time.</span><span class="lang-vi">Email sẽ cung cấp thông tin về hoạt động, tên database, server và ứng dụng, cùng thời điểm xảy ra sự kiện.</span></li>
<li><span class="lang-en">There will be links for &quot;View recent SQL alerts&quot;, Investigation steps and Remediation steps.</span><span class="lang-vi">Sẽ có các link &quot;View recent SQL alerts&quot;, các bước điều tra và các bước khắc phục.</span></li>
</ul><li><span class="lang-en">If you want to, click the &quot;Notify about alerts with the following severity (or higher)&quot;, and select a level.</span><span class="lang-vi">Nếu muốn, bấm &quot;Notify about alerts with the following severity (or higher)&quot; và chọn một mức.</span></li>
</ul><li><span class="lang-en">You will see alerts in the Overview – Notifications, and in Security – Advanced Threat Protection.</span><span class="lang-vi">Bạn sẽ thấy cảnh báo ở Overview – Notifications, và ở Security – Advanced Threat Protection.</span></li>
</ul></section>
<h2 class="dom" id="dom3">3 · Monitor, configure and optimize database resources</h2>
<section id="s-sec3"><h3><span class="n"></span> <span class="lang-en">Domain 3 at a glance — monitoring and tuning summary tables</span><span class="lang-vi">Tổng hợp phạm vi 3 — bảng ôn nhanh về giám sát và tinh chỉnh</span><a class="anch" href="#s-sec3" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">A synthesis of sections 44–66 for revision.</span><span class="lang-vi">Tổng hợp các mục 44–66 để ôn nhanh.</span></li>
</ul>
<ul><li><span class="lang-en">Which monitoring tool answers which question:</span><span class="lang-vi">Công cụ giám sát nào trả lời câu hỏi nào:</span></li>
</ul>
<div class="tw"><table class="cmp"><tr><th><span class="lang-en">Tool</span><span class="lang-vi">Công cụ</span></th><th><span class="lang-en">Tells you</span><span class="lang-vi">Cho biết</span></th><th><span class="lang-en">Where / remember</span><span class="lang-vi">Ở đâu / cần nhớ</span></th></tr><tr><td><span class="lang-en"><a href="#s44">Metrics and Metrics Explorer</a></span><span class="lang-vi"><a href="#s44">Metrics và Metrics Explorer</a></span></td><td><span class="lang-en">Numeric time-series, near real time — the basis for alerting</span><span class="lang-vi">Số liệu time-series gần thời gian thực — nền tảng của cảnh báo</span></td><td><span class="lang-en">Portal → Monitoring → Metrics; lightweight, kept in a time-series store</span><span class="lang-vi">Portal → Monitoring → Metrics; nhẹ, lưu trong kho time-series</span></td></tr><tr><td><span class="lang-en"><a href="#s46">Query Performance Insight</a></span><span class="lang-vi"><a href="#s46">Query Performance Insight</a></span></td><td><span class="lang-en">The heaviest queries by CPU, duration and execution count</span><span class="lang-vi">Các truy vấn nặng nhất theo CPU, thời gian và số lần chạy</span></td><td><span class="lang-en">Azure SQL Database; it reads the Query Store</span><span class="lang-vi">Azure SQL Database; nó đọc dữ liệu của Query Store</span></td></tr><tr><td><span class="lang-en"><a href="#s50">Query Store</a></span><span class="lang-vi"><a href="#s50">Query Store</a></span></td><td><span class="lang-en">Three stores: plans, runtime stats and wait stats — regression, forcing a plan, top-X queries</span><span class="lang-vi">Ba kho: plan, runtime stats và wait stats — tìm regression, ép plan, top-X truy vấn</span></td><td><span class="lang-en">Enabled by default on new Azure SQL Databases, disabled by default on SQL Server (VM)</span><span class="lang-vi">Bật sẵn với Azure SQL Database mới, TẮT mặc định trên SQL Server (VM)</span></td></tr><tr><td><span class="lang-en"><a href="#s48a">Database watcher</a></span><span class="lang-vi"><a href="#s48a">Database watcher</a></span></td><td><span class="lang-en">A central store of performance, configuration and health data</span><span class="lang-vi">Kho tập trung về hiệu năng, cấu hình và tình trạng</span></td><td><span class="lang-en">SQL DB and MI; data lands in Azure Data Explorer or Fabric Real-Time Analytics, queried with KQL or T-SQL. It replaces SQL Insights, retired 31 December 2024</span><span class="lang-vi">SQL DB và MI; dữ liệu vào Azure Data Explorer hoặc Fabric Real-Time Analytics, truy vấn bằng KQL hoặc T-SQL. Đây là bản thay thế cho SQL Insights (ngừng 31/12/2024)</span></td></tr><tr><td><span class="lang-en"><a href="#s57a">Intelligent Insights</a></span><span class="lang-vi"><a href="#s57a">Intelligent Insights</a></span></td><td><span class="lang-en">AI comparison of the last hour against the last 7 days</span><span class="lang-vi">AI so workload một giờ gần nhất với 7 ngày trước</span></td><td><span class="lang-en">SQL DB and MI, never VMs; unavailable in a few regions</span><span class="lang-vi">SQL DB và MI, không có cho VM; vài region không hỗ trợ</span></td></tr><tr><td><span class="lang-en"><a href="#s52">Extended Events</a></span><span class="lang-vi"><a href="#s52">Extended Events</a></span></td><td><span class="lang-en">Detailed events — blocking, deadlocks, long-running statements</span><span class="lang-vi">Sự kiện chi tiết — blocking, deadlock, câu lệnh chạy lâu</span></td><td><span class="lang-en">Lighter than Profiler; the modern way to trace</span><span class="lang-vi">Nhẹ hơn Profiler; là cách trace hiện đại</span></td></tr><tr><td><span class="lang-en"><a href="#s53">DMVs</a></span><span class="lang-vi"><a href="#s53">DMV</a></span></td><td><span class="lang-en">The state right now</span><span class="lang-vi">Trạng thái ngay lúc này</span></td><td><span class="lang-en">Database-scoped DMVs need VIEW DATABASE STATE; server-scoped ones need VIEW SERVER STATE — the server permission is not a substitute for the database one</span><span class="lang-vi">DMV cấp database cần VIEW DATABASE STATE; DMV cấp server cần VIEW SERVER STATE — quyền cấp server KHÔNG thay được quyền cấp database</span></td></tr></table></div>
<ul><li><span class="lang-en">The DMVs worth memorising:</span><span class="lang-vi">Những DMV nên thuộc:</span></li>
</ul>
<div class="tw"><table class="cmp"><tr><th><span class="lang-en">DMV</span><span class="lang-vi">DMV</span></th><th><span class="lang-en">Answers</span><span class="lang-vi">Trả lời câu hỏi</span></th></tr><tr><td><span class="lang-en">sys.dm_exec_requests</span><span class="lang-vi">sys.dm_exec_requests</span></td><td><span class="lang-en">What is running right now, and which session is blocking it</span><span class="lang-vi">Hiện đang chạy gì, và session nào đang chặn nó</span></td></tr><tr><td><span class="lang-en">sys.dm_exec_query_stats + sys.dm_exec_sql_text / sys.dm_exec_query_plan</span><span class="lang-vi">sys.dm_exec_query_stats + sys.dm_exec_sql_text / sys.dm_exec_query_plan</span></td><td><span class="lang-en">Which queries burn the most resources, and the plan they used</span><span class="lang-vi">Truy vấn nào tốn tài nguyên nhất, và plan nào được dùng</span></td></tr><tr><td><span class="lang-en">sys.dm_db_resource_stats</span><span class="lang-vi">sys.dm_db_resource_stats</span></td><td><span class="lang-en">CPU, IO and memory in 15-second samples for roughly the last hour (sys.server_resource_stats for the server)</span><span class="lang-vi">CPU, IO và bộ nhớ theo mẫu 15 giây trong khoảng một giờ gần nhất (cấp server dùng sys.server_resource_stats)</span></td></tr><tr><td><span class="lang-en">sys.dm_os_wait_stats</span><span class="lang-vi">sys.dm_os_wait_stats</span></td><td><span class="lang-en">What the instance spends its time waiting for</span><span class="lang-vi">Instance đang mất thời gian chờ cái gì</span></td></tr><tr><td><span class="lang-en">sys.dm_db_missing_index_details</span><span class="lang-vi">sys.dm_db_missing_index_details</span></td><td><span class="lang-en">Which indexes are missing — build them with equality columns first, then inequality, the rest as INCLUDE</span><span class="lang-vi">Còn thiếu index nào — dựng index với cột equality trước, rồi inequality, phần còn lại đưa vào INCLUDE</span></td></tr><tr><td><span class="lang-en">sys.dm_os_schedulers</span><span class="lang-vi">sys.dm_os_schedulers</span></td><td><span class="lang-en">How many vCores are actually serving requests (VISIBLE ONLINE)</span><span class="lang-vi">Có bao nhiêu vCore đang thực sự phục vụ (VISIBLE ONLINE)</span></td></tr></table></div>
<ul><li><span class="lang-en">Tuning techniques and what each platform lets you do:</span><span class="lang-vi">Các kỹ thuật tinh chỉnh và giới hạn của từng nền tảng:</span></li>
</ul>
<div class="tw"><table class="cmp"><tr><th><span class="lang-en">Technique</span><span class="lang-vi">Kỹ thuật</span></th><th><span class="lang-en">What it does</span><span class="lang-vi">Làm gì</span></th><th><span class="lang-en">Limits</span><span class="lang-vi">Giới hạn</span></th></tr><tr><td><span class="lang-en"><a href="#s54">Indexes</a></span><span class="lang-vi"><a href="#s54">Index</a></span></td><td><span class="lang-en">Turns scans into seeks</span><span class="lang-vi">Biến scan thành seek</span></td><td><span class="lang-en">Useless for LIKE '%text%'; INCLUDE makes a query covered without enlarging the key</span><span class="lang-vi">Vô dụng với LIKE '%text%'; INCLUDE giúp phủ truy vấn mà không phình key</span></td></tr><tr><td><span class="lang-en"><a href="#s59">Statistics</a></span><span class="lang-vi"><a href="#s59">Statistics</a></span></td><td><span class="lang-en">Feed the optimiser its cardinality estimates</span><span class="lang-vi">Cung cấp ước lượng cardinality cho optimizer</span></td><td><span class="lang-en">AUTO_CREATE_STATISTICS and AUTO_UPDATE_STATISTICS[_ASYNC]; the async form stops queries waiting for the update</span><span class="lang-vi">AUTO_CREATE_STATISTICS và AUTO_UPDATE_STATISTICS[_ASYNC]; bản async giúp truy vấn không phải chờ cập nhật</span></td></tr><tr><td><span class="lang-en"><a href="#s56">Hints</a></span><span class="lang-vi"><a href="#s56">Hint</a></span></td><td><span class="lang-en">Force LOOP / HASH / MERGE joins, or OPTION (…) on one statement</span><span class="lang-vi">Ép join LOOP / HASH / MERGE, hoặc OPTION (…) cho một câu lệnh</span></td><td><span class="lang-en">Affects that one statement only; Microsoft treats it as a last resort</span><span class="lang-vi">Chỉ ảnh hưởng đúng câu lệnh đó; Microsoft coi đây là biện pháp cuối cùng</span></td></tr><tr><td><span class="lang-en"><a href="#s61">Automatic tuning</a></span><span class="lang-vi"><a href="#s61">Auto-tuning</a></span></td><td><span class="lang-en">Learn → adapt → verify</span><span class="lang-vi">Learn → adapt → verify</span></td><td><span class="lang-en">FORCE_LAST_GOOD_PLAN is on by default in SQL DB and MI; automatic CREATE/DROP INDEX exists only in Azure SQL Database, not MI</span><span class="lang-vi">FORCE_LAST_GOOD_PLAN bật mặc định ở SQL DB và MI; tự động CREATE/DROP INDEX chỉ có ở Azure SQL Database, MI không có</span></td></tr><tr><td><span class="lang-en"><a href="#s63">Resource Governor</a></span><span class="lang-vi"><a href="#s63">Resource Governor</a></span></td><td><span class="lang-en">Splits CPU, physical IO and memory between workload groups</span><span class="lang-vi">Chia CPU, IO vật lý và bộ nhớ giữa các workload group</span></td><td><span class="lang-en">Configurable on MI and VMs. Azure SQL Database uses it internally but you cannot configure it</span><span class="lang-vi">Cấu hình được trên MI và VM. Azure SQL Database có dùng nhưng bạn KHÔNG cấu hình được</span></td></tr><tr><td><span class="lang-en"><a href="#s66">Intelligent Query Processing</a></span><span class="lang-vi"><a href="#s66">Intelligent Query Processing</a></span></td><td><span class="lang-en">A suite of automatic speed-ups</span><span class="lang-vi">Bộ tính năng tự tăng tốc</span></td><td><span class="lang-en">Needs compatibility level 150 (on a VM: SQL Server 2019+); turn a feature off with ALTER DATABASE SCOPED CONFIGURATION or OPTION (USE HINT(…))</span><span class="lang-vi">Cần compatibility level 150 (trên VM: SQL Server 2019+); tắt từng tính năng bằng ALTER DATABASE SCOPED CONFIGURATION hoặc OPTION (USE HINT(…))</span></td></tr><tr><td><span class="lang-en"><a href="#s60-3">DBCC CHECKDB</a></span><span class="lang-vi"><a href="#s60-3">DBCC CHECKDB</a></span></td><td><span class="lang-en">Checks logical and physical integrity</span><span class="lang-vi">Kiểm tra tính toàn vẹn logic và vật lý</span></td><td><span class="lang-en">NOINDEX = detect only, faster; REPAIR_REBUILD = repairs with no data loss; REPAIR_ALLOW_DATA_LOSS may lose data — last resort</span><span class="lang-vi">NOINDEX = chỉ phát hiện lỗi, nhanh hơn; REPAIR_REBUILD = sửa mà không mất dữ liệu; REPAIR_ALLOW_DATA_LOSS có thể mất dữ liệu — phương án cuối</span></td></tr></table></div>
</section>
<section id="s44"><h3><span class="n">44.</span> <span class="lang-en">prepare an operational performance baseline</span><span class="lang-vi">chuẩn bị baseline hiệu năng vận hành</span><a class="anch" href="#s44" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Metrics are numerical values that are collected at regular intervals and have a timestamp, name, value and other labels.</span><span class="lang-vi">Metric là các giá trị số được thu thập đều đặn, có timestamp, tên, giá trị và các nhãn khác.</span></li>
<ul><li><span class="lang-en">They are stored in a time-series database which is suitable for alerting and fast detection of issues.</span><span class="lang-vi">Chúng được lưu trong một time-series database, phù hợp cho việc cảnh báo và phát hiện sự cố nhanh.</span></li>
<li><span class="lang-en">It is lightweight and allow for near-real time alerting.</span><span class="lang-vi">Cơ chế này nhẹ và cho phép cảnh báo gần thời gian thực.</span></li>
</ul><li><span class="lang-en">View in Metrics Explorer.</span><span class="lang-vi">Xem trong Metrics Explorer.</span></li>
<ul><li><span class="lang-en">Go to Azure Portal – database – Monitoring – Metrics.</span><span class="lang-vi">Vào Azure Portal – database – Monitoring – Metrics.</span></li>
<li><span class="lang-en">Select:</span><span class="lang-vi">Select:</span></li>
<ul><li><span class="lang-en">Scope,</span><span class="lang-vi">Scope,</span></li>
<li><span class="lang-en">Metric Namespace,</span><span class="lang-vi">Metric Namespace,</span></li>
<li><span class="lang-en">Metric (e.g. &quot;Data space used&quot;), and</span><span class="lang-vi">Metric (ví dụ &quot;Data space used&quot;), và</span></li>
<li><span class="lang-en">Aggregation (Min/Max/Avg or Sum/Count).</span><span class="lang-vi">Aggregation (Min/Max/Avg hoặc Sum/Count).</span></li>
</ul><li><span class="lang-en">To change the date/time range, go to the top-right hand corner (where it says &quot;Local time&quot;).</span><span class="lang-vi">Để đổi khoảng ngày/giờ, vào góc trên bên phải (chỗ ghi &quot;Local time&quot;).</span></li>
<ul><li><span class="lang-en">You can also change the &quot;Show time as&quot; from Local to UTC/GMT, and change the &quot;Time granularity&quot; (how often it does the aggregation).</span><span class="lang-vi">Bạn cũng đổi được &quot;Show time as&quot; từ Local sang UTC/GMT, và đổi &quot;Time granularity&quot; (tần suất gộp dữ liệu).</span></li>
<li><span class="lang-en">Only a maximum of 30 days visible at once, but you can use the arrow at the left- right to go back up to 93 days in the past.</span><span class="lang-vi">Chỉ xem được tối đa 30 ngày cùng lúc, nhưng có thể dùng mũi tên trái/phải để lùi tới 93 ngày trong quá khứ.</span></li>
</ul><li><span class="lang-en">You can:</span><span class="lang-vi">Bạn có thể:</span></li>
<ul><li><span class="lang-en">Change the color of a line (by clicking on the color in the legend – not the line, but the legend).</span><span class="lang-vi">Đổi màu một đường (bấm vào ô màu trong phần chú giải — bấm vào chú giải chứ không phải vào đường).</span></li>
<li><span class="lang-en">Edit the title,</span><span class="lang-vi">Sửa tiêu đề,</span></li>
<li><span class="lang-en">Split or filter a metric, if it has a dimension (not applicable to Azure SQL Database).</span><span class="lang-vi">Tách hoặc lọc một metric nếu nó có dimension (không áp dụng cho Azure SQL Database).</span></li>
<li><span class="lang-en">Add a second metric onto the same chart (e.g. &quot;Date space allocated&quot;).</span><span class="lang-vi">Add a second metric onto the same chart (e.g. &quot;Date space allocated&quot;).</span></li>
<li><span class="lang-en">Change the chart type (from Line to Area, Bar, Scatter and Grid).</span><span class="lang-vi">Đổi kiểu biểu đồ (từ Line sang Area, Bar, Scatter và Grid).</span></li>
<li><span class="lang-en">Move the chart up, down, clone it, delete it, or see more settings (in the … to the right-hand side).</span><span class="lang-vi">Di chuyển biểu đồ lên, xuống, nhân bản, xóa, hoặc xem thêm thiết lập (ở dấu … bên phải).</span></li>
<li><span class="lang-en">Add a new chart</span><span class="lang-vi">Add a new chart</span></li>
<li><span class="lang-en">Share it by Downloading it to Excel or copy to Link.</span><span class="lang-vi">Chia sẻ bằng cách tải xuống Excel hoặc sao chép link.</span></li>
</ul></ul><li><span class="lang-en">Logs are events in the system, which may contain other (non-numerical) data and may be structured or free-form, with a timestamp.</span><span class="lang-vi">Log là các sự kiện trong hệ thống, có thể chứa dữ liệu phi số, có cấu trúc hoặc dạng tự do, kèm timestamp.</span></li>
<ul><li><span class="lang-en">View in Log Analytics.</span><span class="lang-vi">Xem trong Log Analytics.</span></li>
</ul><li><span class="lang-en">Areas which could affect SQL Server Performance include:</span><span class="lang-vi">Các yếu tố có thể ảnh hưởng tới hiệu năng SQL Server gồm:</span></li>
<ul><li><span class="lang-en">Hardware/compute/memory,</span><span class="lang-vi">Phần cứng/compute/memory,</span></li>
<li><span class="lang-en">The Operating System (VM),</span><span class="lang-vi">Hệ điều hành (VM),</span></li>
<li><span class="lang-en">Database applications and</span><span class="lang-vi">Ứng dụng database, và</span></li>
<li><span class="lang-en">Client applications.</span><span class="lang-vi">Ứng dụng phía client.</span></li>
</ul><li><span class="lang-en">Azure Monitor allows you to monitor resource metrics, such as processor, memory and I/O resources.</span><span class="lang-vi">Azure Monitor cho phép giám sát metric tài nguyên như processor, memory và I/O.</span></li>
<ul><li><span class="lang-en">You may need more CPU or I/O resources if you have high DTU/processor percentage or high I/O percentage. Alternatively, your queries may need to be optimized.</span><span class="lang-vi">Bạn có thể cần thêm CPU hoặc I/O nếu tỉ lệ DTU/processor cao hoặc tỉ lệ I/O cao. Hoặc cũng có thể query của bạn cần được tối ưu.</span></li>
</ul><li><span class="lang-en">You can also use T-SQL:</span><span class="lang-vi">Bạn cũng có thể dùng T-SQL:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT * from sys.dm_db_resource_stats -- CPU, IO and memory</span><span class="lang-vi">SELECT * from sys.dm_db_resource_stats -- CPU, IO and memory</span></pre></li>
<ul><li><span class="lang-en">You get a row for every 15 seconds for about the past hour.</span><span class="lang-vi">Bạn nhận được một dòng cho mỗi 15 giây, trong khoảng một giờ gần nhất.</span></li>
</ul><li class="cb"><pre class="code"><span class="lang-en">SELECT * FROM sys.dm_user_db_resource_governance -- storage
SELECT * FROM sys.resource_usage</span><span class="lang-vi">SELECT * FROM sys.dm_user_db_resource_governance -- storage
SELECT * FROM sys.resource_usage</span></pre></li>
<ul><li><span class="lang-en">You get a row showing the hourly summary of resource usage data for user databases. Historical data is retained for 90 days.</span><span class="lang-vi">Bạn nhận được một dòng tổng hợp theo giờ về mức sử dụng tài nguyên của các database người dùng. Dữ liệu lịch sử được giữ 90 ngày.</span></li>
<li><span class="lang-en">However, this is currently in a preview state. It says &quot;Do not take a dependency on the specific implementation of this feature because the feature might be changed or removed in a future release.&quot;</span><span class="lang-vi">Tuy nhiên hiện nó đang ở trạng thái preview. Tài liệu ghi: &quot;Đừng phụ thuộc vào cách hiện thực cụ thể của tính năng này, vì nó có thể bị thay đổi hoặc gỡ bỏ trong bản phát hành tương lai.&quot;</span></li>
</ul></ul></ul></section>
<section id="s45"><h3><span class="n">45.</span> <span class="lang-en">determine sources for performance metrics</span><span class="lang-vi">xác định nguồn của các chỉ số hiệu năng</span><a class="anch" href="#s45" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">The sources for performance metrics include:</span><span class="lang-vi">Các nguồn chỉ số hiệu năng gồm:</span></li>
<ul><li><span class="lang-en">Azure Tenant – Tenant-wide services such as Microsoft Entra ID.</span><span class="lang-vi">Azure Tenant — các dịch vụ ở phạm vi tenant như Microsoft Entra ID.</span></li>
<li><span class="lang-en">Subscription</span><span class="lang-vi">Subscription</span></li>
<ul><li><span class="lang-en">Azure Activity log includes service health records and records of configuration changes.</span><span class="lang-vi">Azure Activity log chứa bản ghi về tình trạng dịch vụ và các thay đổi cấu hình.</span></li>
<li><span class="lang-en">Azure Service Health has information about your Azure services’ health</span><span class="lang-vi">Azure Service Health cung cấp thông tin về sức khỏe các dịch vụ Azure của bạn</span></li>
</ul><li><span class="lang-en">Resources</span><span class="lang-vi">Resource</span></li>
<ul><li><span class="lang-en">Most Azure services submit Platform metrics to the metrics database</span><span class="lang-vi">Hầu hết dịch vụ Azure đều gửi Platform metric vào metrics database</span></li>
<li><span class="lang-en">Resource logs are created internally regarding the internal operation of an Azure resource.</span><span class="lang-vi">Resource log được tạo nội bộ, phản ánh hoạt động bên trong của một Azure resource.</span></li>
</ul><li><span class="lang-en">Guest operating system in Azure, other clouds, and on-prem</span><span class="lang-vi">Hệ điều hành khách trên Azure, trên cloud khác và on-prem</span></li>
<ul><li><span class="lang-en">Azure Diagnostic extension for Azure VM, when enabled, submits logs and metrics</span><span class="lang-vi">Azure Diagnostic extension cho Azure VM, khi được bật, sẽ gửi log và metric</span></li>
<li><span class="lang-en">Log Analytics agents can be installed into your Windows or Linux VMs, running in Azure, another cloud, or on-prem</span><span class="lang-vi">Log Analytics agent có thể cài vào VM Windows hoặc Linux, chạy trên Azure, cloud khác hoặc on-prem</span></li>
<li class="stale"><span class="lang-en"><b>The Log Analytics agent (MMA) was retired on 31 August 2024.</b> It can no longer be installed from the Azure portal and gets no support; after 2 March 2026 its data upload can stop at any time without notice. <b>Azure Monitor Agent</b> is now the only supported agent, and it needs Data Collection Rules (DCRs) to say what to collect.</span><span class="lang-vi"><b>Log Analytics agent (MMA) đã bị khai tử ngày 31/08/2024.</b> Không còn cài được từ Azure portal và không được support; sau 02/03/2026 việc upload dữ liệu của nó có thể dừng bất cứ lúc nào mà không báo trước. <b>Azure Monitor Agent</b> giờ là agent duy nhất được hỗ trợ, và nó cần Data Collection Rule (DCR) để khai báo thu thập những gì.</span></li>
<li><span class="lang-en">VM insights (preview) provides additional Azure Monitor functionality on Windows and Linux VMs</span><span class="lang-vi">VM insights (preview) bổ sung thêm chức năng Azure Monitor trên VM Windows và Linux</span></li>
</ul><li><span class="lang-en">Other sources</span><span class="lang-vi">Các nguồn khác</span></li>
<ul><li><span class="lang-en">In Application code, you can enable Application Insights to collect metrics and logs relating to the performance and operations of the app.</span><span class="lang-vi">Trong mã ứng dụng, bạn có thể bật Application Insights để thu thập metric và log về hiệu năng và hoạt động của app.</span></li>
<li><span class="lang-en">Monitoring Solutions and Insights provide additional insights of a particular service or app.</span><span class="lang-vi">Monitoring Solution và Insights cung cấp thêm góc nhìn về một dịch vụ hoặc app cụ thể.</span></li>
<li><span class="lang-en">Container insights provide data about Azure Kubernetes Service (AKS).</span><span class="lang-vi">Container insights cung cấp dữ liệu về Azure Kubernetes Service (AKS).</span></li>
<li><span class="lang-en">VM Insights allow for a customized monitoring of VMs.</span><span class="lang-vi">VM Insights cho phép giám sát VM theo cách tùy chỉnh.</span></li>
<li><span class="lang-en">In VM, you can also look at Windows Performance Monitor (perfmon).</span><span class="lang-vi">Trên VM, bạn cũng có thể xem Windows Performance Monitor (perfmon).</span></li>
<ul><li><span class="lang-en">There are specific counters for SQL Server.</span><span class="lang-vi">Có các counter riêng dành cho SQL Server.</span></li>
</ul></ul></ul></ul></section>
<section id="s45-2"><h3><span class="n">45.</span> <span class="lang-en">determine sources for performance metrics</span><span class="lang-vi">xác định nguồn của các chỉ số hiệu năng</span><a class="anch" href="#s45-2" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Metrics available for MI are:</span><span class="lang-vi">Các metric có sẵn cho MI:</span></li>
<ul><li><span class="lang-en">Average CPU percentage in a selected time period,</span><span class="lang-vi">Tỉ lệ CPU trung bình trong một khoảng thời gian đã chọn,</span></li>
<li><span class="lang-en">I/O bytes read/written,</span><span class="lang-vi">Số byte I/O đọc/ghi,</span></li>
<li><span class="lang-en">I/O requests counts,</span><span class="lang-vi">Số lượng I/O request,</span></li>
<li><span class="lang-en">Storage space reserved/used,</span><span class="lang-vi">Dung lượng lưu trữ đã đặt trước/đã dùng,</span></li>
<li><span class="lang-en">Virtual core count (4-80 vCores).</span><span class="lang-vi">Số virtual core (4-80 vCore).</span></li>
</ul><li><span class="lang-en">Metrics available for Azure SQL Database are:</span><span class="lang-vi">Các metric có sẵn cho Azure SQL Database:</span></li>
<ul><li><span class="lang-en">Blocked by firewall,</span><span class="lang-vi">Blocked by firewall,</span></li>
<li><span class="lang-en">Deadlocks,</span><span class="lang-vi">Deadlock,</span></li>
<li><span class="lang-en">CPU %,</span><span class="lang-vi">CPU %,</span></li>
<li><span class="lang-en">Data I/O % or Log I/O %,</span><span class="lang-vi">Data I/O % hoặc Log I/O %,</span></li>
<li><span class="lang-en">Data space used/allocated/used %,</span><span class="lang-vi">Data space used/allocated/used %,</span></li>
<li><span class="lang-en">DTU Limit, Used, %</span><span class="lang-vi">DTU Limit, Used, %</span></li>
<li><span class="lang-en">Failed connections, Successful connections,</span><span class="lang-vi">Kết nối thất bại, kết nối thành công,</span></li>
<li><span class="lang-en">In-memory OLTP storage %,</span><span class="lang-vi">In-memory OLTP storage %,</span></li>
<li><span class="lang-en">Sessions %,</span><span class="lang-vi">Sessions %,</span></li>
<li><span class="lang-en">Workers %,</span><span class="lang-vi">Workers %,</span></li>
<li><span class="lang-en">SQL Server process core/memory %,</span><span class="lang-vi">SQL Server process core/memory %,</span></li>
<li><span class="lang-en">Tempdb Data/Log File Size Kilobytes,</span><span class="lang-vi">Tempdb Data/Log File Size tính bằng Kilobyte,</span></li>
<li><span class="lang-en">Tempdb % Log Used.</span><span class="lang-vi">Tempdb % Log Used.</span></li>
</ul></ul></section>
<section id="s46"><h3><span class="n">46.</span> <span class="lang-en">interpret performance metrics</span><span class="lang-vi">diễn giải các chỉ số hiệu năng</span><a class="anch" href="#s46" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">If any of the following is high (close to 100%), consider upgrading to the next service tier.</span><span class="lang-vi">Nếu bất kỳ chỉ số nào dưới đây ở mức cao (gần 100%), hãy cân nhắc nâng lên service tier kế tiếp.</span></li>
<li><span class="lang-en">Space/components used</span><span class="lang-vi">Dung lượng / thành phần đã dùng</span></li>
<ul><li><span class="lang-en">DTU percentage – CPU, memory and I/O for vCores (not DTU-based model)</span><span class="lang-vi">Tỉ lệ DTU — tương ứng CPU, memory và I/O ở mô hình vCore (không phải mô hình DTU)</span></li>
<ul><li><span class="lang-en">If this is low, then you may save money downgrading.</span><span class="lang-vi">Nếu chỉ số này thấp thì bạn có thể tiết kiệm chi phí bằng cách hạ tier.</span></li>
</ul><li><span class="lang-en">Other Component metrics:</span><span class="lang-vi">Các metric thành phần khác:</span></li>
<ul><ul><li><span class="lang-en">CPU percentage (avg_cpu_percent),</span><span class="lang-vi">Tỉ lệ CPU (avg_cpu_percent),</span></li>
<ul><li><span class="lang-en">When high, query latency increases and queries may time out.</span><span class="lang-vi">Khi cao, độ trễ query tăng và query có thể bị time out.</span></li>
<li><span class="lang-en">Maybe increase the compute size, or optimise queries to reduce the CPU requirements.</span><span class="lang-vi">Có thể tăng compute size, hoặc tối ưu query để giảm nhu cầu CPU.</span></li>
</ul><li><span class="lang-en">Data IO percentage (avg_data_io_percent),</span><span class="lang-vi">Tỉ lệ Data IO (avg_data_io_percent),</span></li>
<li><span class="lang-en">Log IO percentage (avg_log_write_percent),</span><span class="lang-vi">Tỉ lệ Log IO (avg_log_write_percent),</span></li>
</ul></ul><li><span class="lang-en">In-memory OLTP storage percent (xtp_storage_percent)</span><span class="lang-vi">Tỉ lệ In-memory OLTP storage (xtp_storage_percent)</span></li>
<ul><li><span class="lang-en">Returns zero if in-memory OLTP (memory-optimized tables, indexes, and table variables) is not used.</span><span class="lang-vi">Trả về 0 nếu không dùng in-memory OLTP (memory-optimized table, index và table variable).</span></li>
<li><span class="lang-en">If this hits 100%, then INSERT, UPDATE, ALTER and CREATE operations will fail (SELECT and DELETE are fine).</span><span class="lang-vi">Nếu chạm 100%, các thao tác INSERT, UPDATE, ALTER và CREATE sẽ thất bại (SELECT và DELETE vẫn bình thường).</span></li>
</ul><li><span class="lang-en">Data space used percent If this is getting high, then upgrade to the next service tier, shrink the database, or scale out using sharding.</span><span class="lang-vi">Tỉ lệ Data space used — nếu đang tăng cao thì nâng lên service tier kế tiếp, shrink database, hoặc scale out bằng sharding.</span></li>
<ul><li><span class="lang-en">If in an elastic pool, consider moving it out of the pool.</span><span class="lang-vi">Nếu database đang nằm trong elastic pool, cân nhắc chuyển nó ra khỏi pool.</span></li>
</ul><li><span class="lang-en">Memory percentage (avg_memory_usage_percent)</span><span class="lang-vi">Tỉ lệ Memory (avg_memory_usage_percent)</span></li>
<ul><li><span class="lang-en">This is used for caching. If you get out-of-memory errors, Increase service tier, or compute size, or optimize queries.</span><span class="lang-vi">Phần này dùng cho caching. Nếu gặp lỗi hết bộ nhớ thì nâng service tier, tăng compute size, hoặc tối ưu query.</span></li>
</ul></ul><li><span class="lang-en">Connections/requested used</span><span class="lang-vi">Kết nối / request đã dùng</span></li>
<ul><li><span class="lang-en">Sessions percentage</span><span class="lang-vi">Tỉ lệ Session</span></li>
<ul><li><span class="lang-en">Maximum concurrent sessions divided by the service tier limit. (max_session_percent)</span><span class="lang-vi">Số session đồng thời tối đa chia cho giới hạn của service tier (max_session_percent).</span></li>
</ul><li><span class="lang-en">Worker percentage</span><span class="lang-vi">Tỉ lệ Worker</span></li>
<ul><li><span class="lang-en">Maximum concurrent requests divided by the service tier limit. (max_worker_percent).</span><span class="lang-vi">Số request đồng thời tối đa chia cho giới hạn của service tier (max_worker_percent).</span></li>
</ul><li><span class="lang-en">Increase service tier, or compute size, or optimize queries.</span><span class="lang-vi">Nâng service tier, tăng compute size, hoặc tối ưu query.</span></li>
</ul><li><span class="lang-en">Top queries can be shown in Intelligent Performance – Query Performance Insight.</span><span class="lang-vi">Các query nặng nhất xem được ở Intelligent Performance – Query Performance Insight.</span></li>
<ul><li><span class="lang-en">Review top CPU-consuming queries</span><span class="lang-vi">Xem lại các query tiêu tốn nhiều CPU nhất</span></li>
<li><span class="lang-en">Individual query details</span><span class="lang-vi">Chi tiết từng query</span></li>
<li><span class="lang-en">Top queries per duration or execution count (Custom – Metric type: Duration or Execution Count)</span><span class="lang-vi">Top query theo thời lượng hoặc số lần thực thi (Custom – Metric type: Duration hoặc Execution Count)</span></li>
<li><span class="lang-en">You may see icons showing performance recommendations.</span><span class="lang-vi">Bạn có thể thấy biểu tượng gợi ý cải thiện hiệu năng.</span></li>
</ul></ul></section>
<section id="s47"><h3><span class="n">47.</span> <span class="lang-en">configure and monitor activity and performance at the infrastructure, server,</span><span class="lang-vi">cấu hình và giám sát hoạt động cùng hiệu năng ở cấp hạ tầng, server,</span><a class="anch" href="#s47" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">service, and database levels</span><span class="lang-vi">dịch vụ và database</span></li>
<li><span class="lang-en">See topic 38.</span><span class="lang-vi">Xem mục 38.</span></li>
<li><span class="lang-en">You can go to a database, can click on:</span><span class="lang-vi">Bạn có thể vào một database và bấm:</span></li>
<ul><li><span class="lang-en">Metrics,</span><span class="lang-vi">Metrics,</span></li>
<li><span class="lang-en">Performance Overview,</span><span class="lang-vi">Performance Overview,</span></li>
<li><span class="lang-en">Performance recommendations, or</span><span class="lang-vi">Performance recommendations, hoặc</span></li>
<li><span class="lang-en">Query Performance Insight.</span><span class="lang-vi">Query Performance Insight.</span></li>
</ul><li><span class="lang-en">You can also monitor using Dynamic Management Views:</span><span class="lang-vi">Bạn cũng có thể giám sát bằng Dynamic Management View:</span></li>
<ul><li><span class="lang-en">https://docs.microsoft.com/en-us/azure/azure-sql/database/monitoring-with-dmvs</span><span class="lang-vi">https://docs.microsoft.com/en-us/azure/azure-sql/database/monitoring-with-dmvs</span></li>
</ul></ul></section>
<section id="s48"><h3><span class="n">48.</span> <span class="lang-en">Monitor by using SQL Insights</span><span class="lang-vi">Giám sát bằng SQL Insights</span><a class="anch" href="#s48" title="Link tới mục này">#</a></h3>
<ul><li class="stale"><span class="lang-en"><b>Retired – kept for reference only.</b> Azure Monitor SQL Insights (preview) was retired on 31 December 2024 and is no longer available in the Azure portal. Do not build anything new on it. The Microsoft-recommended replacement for Azure SQL Database and Azure SQL Managed Instance is <b>database watcher</b> (topic 48a below); for SQL Server on Azure VMs, use VM insights with Data Collection Rules.</span><span class="lang-vi"><b>Đã khai tử – chỉ giữ để tham khảo.</b> Azure Monitor SQL Insights (preview) đã bị khai tử ngày 31/12/2024 và không còn xuất hiện trong Azure portal. Đừng xây gì mới trên nó. Giải pháp thay thế Microsoft khuyến nghị cho Azure SQL Database và Azure SQL Managed Instance là <b>database watcher</b> (mục 48a bên dưới); còn với SQL Server trên Azure VM thì dùng VM insights kèm Data Collection Rules.</span></li>
<li><span class="lang-en">SQL Insights uses DMVs to monitor health, diagnose problems, and tune performance.</span><span class="lang-vi">SQL Insights dùng DMV để theo dõi sức khỏe, chẩn đoán sự cố và tinh chỉnh hiệu năng.</span></li>
<ul><li><span class="lang-en">It supports:</span><span class="lang-vi">Nó hỗ trợ:</span></li>
<ul><li><span class="lang-en">SQL Server 2012 or later,</span><span class="lang-vi">SQL Server 2012 trở lên,</span></li>
<li><span class="lang-en">Azure SQL Database (but not with elastic pools, or Basic, S0, S1 or S2 service tiers),</span><span class="lang-vi">Azure SQL Database (nhưng không hỗ trợ elastic pool, cũng như tier Basic, S0, S1 hay S2),</span></li>
<li><span class="lang-en">Azure SQL Managed Instance,</span><span class="lang-vi">Azure SQL Managed Instance,</span></li>
<li><span class="lang-en">SQL Server on Azure VMs.</span><span class="lang-vi">SQL Server trên Azure VM.</span></li>
</ul><li><span class="lang-en">It can be gathered for the serverless tier, but will prevent the database from pausing.</span><span class="lang-vi">Có thể thu thập với tier serverless, nhưng khi đó database sẽ không pause được.</span></li>
<li><span class="lang-en">It does not support:</span><span class="lang-vi">Nó KHÔNG hỗ trợ:</span></li>
<ul><li><span class="lang-en">Monitoring of more than one secondary replica per database,</span><span class="lang-vi">Giám sát nhiều hơn một secondary replica cho mỗi database,</span></li>
<li><span class="lang-en">Authentication with Azure AD.</span><span class="lang-vi">Xác thực bằng Azure AD.</span></li>
</ul><li><span class="lang-en">Monitoring agents on dedicated VMs connect to your SQL resources and obtain the data.</span><span class="lang-vi">Các monitoring agent chạy trên VM chuyên dụng sẽ kết nối tới tài nguyên SQL của bạn và lấy dữ liệu về.</span></li>
<ul><li><span class="lang-en">Microsoft recommends 1 Standard_B2s VM for every 100 connection strings.</span><span class="lang-vi">Microsoft khuyến nghị 1 VM Standard_B2s cho mỗi 100 connection string.</span></li>
</ul><li><span class="lang-en">This data is now stored in Log Analytics workspace, and you can use Azure Monitor for analysis.</span><span class="lang-vi">Dữ liệu này được lưu trong Log Analytics workspace, và bạn dùng Azure Monitor để phân tích.</span></li>
<li><span class="lang-en">You can view this data from the SQL Insights workbook template or through log queries.</span><span class="lang-vi">Bạn xem dữ liệu qua template workbook của SQL Insights hoặc qua log query.</span></li>
<li><span class="lang-en">The cost for SQL Insights are for the dedicated VMs, the Log Analytics workspaces, and any alert rules.</span><span class="lang-vi">Chi phí của SQL Insights nằm ở các VM chuyên dụng, Log Analytics workspace và các alert rule.</span></li>
</ul><li><span class="lang-en">To enable SQL Insights:</span><span class="lang-vi">Để bật SQL Insights:</span></li>
<ul><li><span class="lang-en">Create a Log Analytics workspace to store the data.</span><span class="lang-vi">Create a Log Analytics workspace to store the data.</span></li>
<li><span class="lang-en">Create a login/user and grant the required permissions:</span><span class="lang-vi">Create a login/user and grant the required permissions:</span></li>
<ul><li><span class="lang-en">In Azure SQL Database, in the relevant (not &quot;master&quot;) database, create a user with a strong password, and grant the required permissions:</span><span class="lang-vi">Với Azure SQL Database: trong database tương ứng (không phải &quot;master&quot;), tạo một user với mật khẩu mạnh và cấp các quyền cần thiết:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">CREATE USER [SQLInsightsUser] WITH PASSWORD = N'P@ssw0rdStr0ng';
GO
GRANT VIEW DATABASE STATE TO [SQLInsightsUser];</span><span class="lang-vi">CREATE USER [SQLInsightsUser] WITH PASSWORD = N'P@ssw0rdStr0ng';
GO
GRANT VIEW DATABASE STATE TO [SQLInsightsUser];</span></pre></li>
</ul><li><span class="lang-en">In Azure Managed Instance and SQL Server on a VM:</span><span class="lang-vi">Với Azure Managed Instance và SQL Server trên VM:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">USE master
GOCREATE LOGIN [SQLInsightsUser] WITH PASSWORD = N'P@ssw0rdStr0ng';
GO
GRANT VIEW SERVER STATE TO [SQLInsightsUser];
GO
GRANT VIEW ANY DEFINITION TO [SQLInsightsUser];</span><span class="lang-vi">USE master
GOCREATE LOGIN [SQLInsightsUser] WITH PASSWORD = N'P@ssw0rdStr0ng';
GO
GRANT VIEW SERVER STATE TO [SQLInsightsUser];
GO
GRANT VIEW ANY DEFINITION TO [SQLInsightsUser];</span></pre></li>
</ul></ul><li><span class="lang-en">Create an Azure Virtual Machine:</span><span class="lang-vi">Create an Azure Virtual Machine:</span></li>
<ul><li><span class="lang-en">Operating system: Ubuntu 18.04 using Azure Marketplace image.</span><span class="lang-vi">Hệ điều hành: Ubuntu 18.04 dùng image từ Azure Marketplace.</span></li>
<li><span class="lang-en">Recommended VM: at least Standard_B2s (2 CPUs, 4GB)</span><span class="lang-vi">VM khuyến nghị: tối thiểu Standard_B2s (2 CPU, 4 GB)</span></li>
<li><span class="lang-en">Not currently valid in South Africa West, US Gov Non-Region, DoD Central or East, China Non-Regional, China East, China North, China North 2, West India.</span><span class="lang-vi">Hiện chưa dùng được ở South Africa West, US Gov Non-Region, DoD Central hoặc East, China Non-Regional, China East, China North, China North 2, West India.</span></li>
</ul><li><span class="lang-en">Then you need to configure your database:</span><span class="lang-vi">Sau đó bạn cần cấu hình database:</span></li>
<ul><li><span class="lang-en">For Azure SQL Database, in the Azure Portal, go to Set server firewall, and then add a firewall rule.</span><span class="lang-vi">Với Azure SQL Database, trong Azure Portal vào Set server firewall rồi thêm một firewall rule.</span></li>
<li><span class="lang-en">For Azure SQL MI, either connect inside the same Vnet, or connect in a different Vnet using Azure Vnet peering or Vnet-to-Vnet VPN gateway.</span><span class="lang-vi">Với Azure SQL MI, hoặc kết nối trong cùng Vnet, hoặc kết nối từ Vnet khác qua Azure Vnet peering hay Vnet-to-Vnet VPN gateway.</span></li>
<li><span class="lang-en">For on-premises, you need to use a Site-to-site VPN connection, or an Azure ExpressRoute connection.</span><span class="lang-vi">Với on-premises, bạn cần kết nối Site-to-site VPN hoặc Azure ExpressRoute.</span></li>
</ul><li><span class="lang-en">You can choose to store your SQL user login passwords in a Key Vault.</span><span class="lang-vi">Bạn có thể chọn lưu mật khẩu SQL user vào Key Vault.</span></li>
</ul><li><span class="lang-en">To create your SQL monitoring profile.</span><span class="lang-vi">Để tạo SQL monitoring profile:</span></li>
<ul><li><span class="lang-en">In the Azure portal, go to Monitoring, then Insights – SQL.</span><span class="lang-vi">Trong Azure portal, vào Monitoring, rồi Insights – SQL.</span></li>
<li><span class="lang-en">Then go to Manage profile and click &quot;Create new profile&quot;.</span><span class="lang-vi">Vào Manage profile và bấm &quot;Create new profile&quot;.</span></li>
<li><span class="lang-en">Enter:</span><span class="lang-vi">Nhập:</span></li>
<ul><li><span class="lang-en">Name (cannot be edited later),</span><span class="lang-vi">Name (không sửa được về sau),</span></li>
<li><span class="lang-en">Log Analytics workspace,</span><span class="lang-vi">Log Analytics workspace,</span></li>
<li><span class="lang-en">Frequency collection (.5, 1, 2, 5 or 10 minutes).</span><span class="lang-vi">Tần suất thu thập (0,5 / 1 / 2 / 5 hoặc 10 phút).</span></li>
<ul><li><span class="lang-en">The higher the frequency and/or the more measures, the higher the cost.</span><span class="lang-vi">Tần suất càng cao và/hoặc càng nhiều chỉ số thì chi phí càng lớn.</span></li>
</ul><li><span class="lang-en">What to collect:</span><span class="lang-vi">Thu thập những gì:</span></li>
<ul><li><span class="lang-en">Wait statistics,</span><span class="lang-vi">Wait statistics,</span></li>
<li><span class="lang-en">Memory clerks,</span><span class="lang-vi">Memory clerks,</span></li>
<li><span class="lang-en">Database I/O,</span><span class="lang-vi">Database I/O,</span></li>
<li><span class="lang-en">Server properties,</span><span class="lang-vi">Server properties,</span></li>
<li><span class="lang-en">Performance counters,</span><span class="lang-vi">Performance counters,</span></li>
<li><span class="lang-en">Requests,</span><span class="lang-vi">Requests,</span></li>
<li><span class="lang-en">Schedulers,</span><span class="lang-vi">Schedulers,</span></li>
<li><span class="lang-en">For Azure SQL Database and Azure SQL MI:</span><span class="lang-vi">Với Azure SQL Database và Azure SQL MI:</span></li>
<li><span class="lang-en">Resource statistics,</span><span class="lang-vi">Resource statistics,</span></li>
<li><span class="lang-en">Resource governance.</span><span class="lang-vi">Resource governance.</span></li>
<li><span class="lang-en">For SQL Server (on VM or on prem):</span><span class="lang-vi">Với SQL Server (trên VM hoặc on-prem):</span></li>
<ul><li><span class="lang-en">Volume space,</span><span class="lang-vi">Volume space,</span></li>
<li><span class="lang-en">SQL Server CPU,</span><span class="lang-vi">SQL Server CPU,</span></li>
<li><span class="lang-en">Availability Replica States and</span><span class="lang-vi">Availability Replica States và</span></li>
<li><span class="lang-en">Availability Database Replicas.</span><span class="lang-vi">Availability Database Replicas.</span></li>
</ul></ul></ul><li><span class="lang-en">Then click &quot;Create monitoring profile&quot;, then &quot;Create SQL monitoring profile&quot;.</span><span class="lang-vi">Rồi bấm &quot;Create monitoring profile&quot;, sau đó &quot;Create SQL monitoring profile&quot;.</span></li>
</ul><li><span class="lang-en">Add a monitoring machine</span><span class="lang-vi">Add a monitoring machine</span></li>
<ul><li><span class="lang-en">Click on &quot;Add monitoring machine&quot;.</span><span class="lang-vi">Bấm &quot;Add monitoring machine&quot;.</span></li>
<li><span class="lang-en">Select your VM.</span><span class="lang-vi">Select your VM.</span></li>
<li><span class="lang-en">Add connection strings.</span><span class="lang-vi">Add connection strings.</span></li>
<ul><li><span class="lang-en">For Azure SQL Database, enter in the format:</span><span class="lang-vi">Với Azure SQL Database, nhập theo định dạng:</span></li>
<ul><li><span class="lang-en">sqlAzureConnections&quot;: [ &quot;Server=mysqlserver.database.windows.net;Port=1433;Database=mydatab ase;User Id=$username;Password=$password;&quot;</span><span class="lang-vi">sqlAzureConnections&quot;: [ &quot;Server=mysqlserver.database.windows.net;Port=1433;Database=mydatabase;User Id=$username;Password=$password;&quot;</span></li>
<li><span class="lang-en">]</span><span class="lang-vi">]</span></li>
<li><span class="lang-en">Note: if you are not using Azure Key Vault, then you dno't need the semicolon or the dollar sign surrounding &quot;$password;&quot;.</span><span class="lang-vi">Lưu ý: nếu không dùng Azure Key Vault thì bạn không cần dấu chấm phẩy và dấu đô-la bao quanh &quot;$password;&quot;.</span></li>
</ul><li><span class="lang-en">For Azure SQL Managed Instance, enter in the format:</span><span class="lang-vi">Với Azure SQL Managed Instance, nhập theo định dạng:</span></li>
<ul><li><span class="lang-en">&quot;sqlManagedInstanceConnections&quot;: [</span><span class="lang-vi">&quot;sqlManagedInstanceConnections&quot;: [</span></li>
<li><span class="lang-en">&quot;Server= mysqlserver.&lt;dns_zone&gt;.database.windows.net;Port=1433;User Id=$username;Password=$password;&quot;</span><span class="lang-vi">&quot;Server= mysqlserver.&lt;dns_zone&gt;.database.windows.net;Port=1433;User Id=$username;Password=$password;&quot;</span></li>
<li><span class="lang-en">]</span><span class="lang-vi">]</span></li>
</ul><li><span class="lang-en">For SQL Server, enter in the format:</span><span class="lang-vi">Với SQL Server, nhập theo định dạng:</span></li>
<ul><li><span class="lang-en">&quot;sqlVmConnections&quot;: [</span><span class="lang-vi">&quot;sqlVmConnections&quot;: [</span></li>
<li><span class="lang-en">&quot;Server=SQLServerInstanceIPAddress;Port=1433;User Id=$username;Password=$password;&quot;</span><span class="lang-vi">&quot;Server=SQLServerInstanceIPAddress;Port=1433;User Id=$username;Password=$password;&quot;</span></li>
<li><span class="lang-en">]</span><span class="lang-vi">]</span></li>
</ul></ul><li><span class="lang-en">Setting monitoring may take a few minutes. Afterwards, the Status column should change &quot;Collecting&quot;.</span><span class="lang-vi">Việc thiết lập giám sát có thể mất vài phút. Sau đó cột Status sẽ chuyển thành &quot;Collecting&quot;.</span></li>
</ul><li><span class="lang-en">To open SQL Insights:</span><span class="lang-vi">Để mở SQL Insights:</span></li>
<ul><li><span class="lang-en">In the Azure portal, go to Azure Monitor, then Insights – SQL, and select a tile.</span><span class="lang-vi">Trong Azure portal, vào Azure Monitor, rồi Insights – SQL, và chọn một ô.</span></li>
</ul><li><span class="lang-en">You can enable alert rules by:</span><span class="lang-vi">Bạn bật alert rule bằng cách:</span></li>
<ul><li><span class="lang-en">Clicking on &quot;Alerts&quot;. Go to Alert templates, find a template, and click &quot;Create rule&quot;.</span><span class="lang-vi">Bấm &quot;Alerts&quot;. Vào Alert templates, tìm một template và bấm &quot;Create rule&quot;.</span></li>
<li><span class="lang-en">Select:</span><span class="lang-vi">Select:</span></li>
<ul><li><span class="lang-en">the alert threshold (in percent),</span><span class="lang-vi">ngưỡng cảnh báo (theo phần trăm),</span></li>
<li><span class="lang-en">the name and severity for the alert, and</span><span class="lang-vi">tên và mức độ nghiêm trọng của cảnh báo, và</span></li>
<li><span class="lang-en">an action group, creating notifications and alerts.</span><span class="lang-vi">một action group để tạo thông báo và cảnh báo.</span></li>
</ul><li><span class="lang-en">Click &quot;Enable alert rule&quot;, then &quot;Deploy alert rule&quot;.</span><span class="lang-vi">Bấm &quot;Enable alert rule&quot;, rồi &quot;Deploy alert rule&quot;.</span></li>
</ul></ul></section>
<section id="s48a"><h3><span class="n">48a.</span> <span class="lang-en">Monitor by using database watcher</span><span class="lang-vi">Giám sát bằng database watcher</span><a class="anch" href="#s48a" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Database watcher is a centralised store for performance, configuration and health data for Azure SQL Database and Azure SQL Managed Instance.</span><span class="lang-vi">Database watcher là kho lưu trữ tập trung dữ liệu về hiệu năng, cấu hình và sức khỏe cho Azure SQL Database và Azure SQL Managed Instance.</span></li>
<li><span class="lang-en">The data is stored in either:</span><span class="lang-vi">Dữ liệu được lưu ở một trong hai nơi:</span></li>
<ul><li><span class="lang-en">An Azure Data Explorer cluster – a highly scalable data service for fast input and analytics, or</span><span class="lang-vi">Một Azure Data Explorer cluster — dịch vụ dữ liệu có khả năng mở rộng cao, nạp và phân tích nhanh, hoặc</span></li>
<li><span class="lang-en">Real-Time Analytics within Microsoft Fabric.</span><span class="lang-vi">Real-Time Analytics trong Microsoft Fabric.</span></li>
</ul><li><span class="lang-en">You can query data using KQL (Kusto) or T-SQL, in Azure Data Explorer dashboards, Power BI, Grafana or Excel.</span><span class="lang-vi">Bạn truy vấn dữ liệu bằng KQL (Kusto) hoặc T-SQL, trên dashboard của Azure Data Explorer, Power BI, Grafana hoặc Excel.</span></li>
<li><span class="lang-en">Creating watchers and dashboards are free. They are no charges for per resource or per user. However, you would have to pay for storage.</span><span class="lang-vi">Việc tạo watcher và dashboard là miễn phí. Không tính phí theo resource hay theo người dùng. Tuy nhiên bạn phải trả tiền lưu trữ.</span></li>
<li><span class="lang-en">The database watcher dashboards include:</span><span class="lang-vi">Các dashboard của database watcher gồm:</span></li>
<ul><li><span class="lang-en">Estate dashboards – a high level view:</span><span class="lang-vi">Estate dashboard — góc nhìn tổng quan:</span></li>
<ul><li><span class="lang-en">Heatmaps allow you to find databases which use most resources.</span><span class="lang-vi">Heatmap giúp bạn tìm ra database nào tiêu tốn nhiều tài nguyên nhất.</span></li>
<li><span class="lang-en">Top queries to find the highest resource consuming queries.</span><span class="lang-vi">Top queries giúp tìm các query tiêu tốn tài nguyên nhất.</span></li>
<ul><li><span class="lang-en">It may also give you index recommendations.</span><span class="lang-vi">Nó cũng có thể đưa ra gợi ý về index.</span></li>
</ul><li><span class="lang-en">You can use filters to filter subscription, resource group and resource name.</span><span class="lang-vi">Bạn dùng bộ lọc để lọc theo subscription, resource group và tên resource.</span></li>
<li><span class="lang-en">You can also drill through to other dashboards.</span><span class="lang-vi">Bạn cũng có thể đi sâu sang các dashboard khác.</span></li>
</ul><li><span class="lang-en">Resource dashboards, allow you to see:</span><span class="lang-vi">Resource dashboard cho phép xem:</span></li>
<ul><li><span class="lang-en">Active sessions,</span><span class="lang-vi">Active session,</span></li>
<li><span class="lang-en">Backup history,</span><span class="lang-vi">Backup history,</span></li>
<li><span class="lang-en">Storage size and performance, and</span><span class="lang-vi">Dung lượng và hiệu năng lưu trữ, và</span></li>
<li><span class="lang-en">Common performance counters.</span><span class="lang-vi">Các performance counter thông dụng.</span></li>
</ul><li><span class="lang-en">Filters by time.</span><span class="lang-vi">Bộ lọc theo thời gian.</span></li>
</ul><li><span class="lang-en">You can also download data to Excel and query the data in KQL using Azure Data Explorer.</span><span class="lang-vi">Bạn cũng có thể tải dữ liệu xuống Excel và truy vấn bằng KQL trong Azure Data Explorer.</span></li>
<li><span class="lang-en">You will need to set up access in each database target. The script can be generated in Configuration – SQL targets, and click on “+ Add”. It should be run in the “master” database.</span><span class="lang-vi">Bạn cần thiết lập quyền truy cập ở từng database đích. Script được sinh ra trong Configuration – SQL targets, bấm &quot;+ Add&quot;. Script này phải chạy trong database &quot;master&quot;.</span></li>
<ul><li><span class="lang-en">You can use either Microsoft Entra or SQL Authentication.</span><span class="lang-vi">Bạn dùng được Microsoft Entra hoặc SQL Authentication.</span></li>
<li><span class="lang-en">For SQL Authentication, you will need a Key Vault.</span><span class="lang-vi">Với SQL Authentication, bạn cần một Key Vault.</span></li>
</ul><li><span class="lang-en">You can have either private or public connectivity from the database watcher to the databases. To manage a private endpoint, go to Configuration – Managed private endpoints, and click on “+ Add”.</span><span class="lang-vi">Kết nối từ database watcher tới các database có thể là private hoặc public. Để quản lý private endpoint, vào Configuration – Managed private endpoints và bấm &quot;+ Add&quot;.</span></li>
<li><span class="lang-en">To start monitoring, go to Overview – Start. The status then changes to “Running”.</span><span class="lang-vi">Để bắt đầu giám sát, vào Overview – Start. Trạng thái sẽ chuyển thành &quot;Running&quot;.</span></li>
<li><span class="lang-en">You can click on Monitoring – Dashboards to show all of the monitored resources.</span><span class="lang-vi">Bấm Monitoring – Dashboards để hiển thị toàn bộ tài nguyên đang được giám sát.</span></li>
<li><span class="lang-en">The datasets which are captured for SQL Database, Managed Instance and Elastic Pool are:</span><span class="lang-vi">Các tập dữ liệu được thu thập cho SQL Database, Managed Instance và Elastic Pool:</span></li>
<ul><li><span class="lang-en">Memory utilization</span><span class="lang-vi">Mức sử dụng memory</span></li>
<li><span class="lang-en">Out-of-memory events</span><span class="lang-vi">Sự kiện hết bộ nhớ</span></li>
<li><span class="lang-en">Performance counters (common and detailed)</span><span class="lang-vi">Performance counter (thông dụng và chi tiết)</span></li>
<li><span class="lang-en">Properties (Database and Instance properties for Managed Instance)</span><span class="lang-vi">Properties (thuộc tính Database và Instance với Managed Instance)</span></li>
<li><span class="lang-en">Resource utilization</span><span class="lang-vi">Mức sử dụng tài nguyên</span></li>
<li><span class="lang-en">SOS schedulers</span><span class="lang-vi">SOS scheduler</span></li>
<li><span class="lang-en">Storage IO</span><span class="lang-vi">Storage IO</span></li>
<li><span class="lang-en">Storage utilization (Database storage utilization for Managed Instance)</span><span class="lang-vi">Mức sử dụng lưu trữ (Database storage utilization với Managed Instance)</span></li>
<li><span class="lang-en">Wait statistics</span><span class="lang-vi">Wait statistics</span></li>
</ul><li><span class="lang-en">The datasets which are captured for SQL Database and Managed Instance (not Elastic Pool) are:</span><span class="lang-vi">Các tập dữ liệu thu thập cho SQL Database và Managed Instance (không gồm Elastic Pool):</span></li>
<ul><li><span class="lang-en">Active sessions</span><span class="lang-vi">Active session</span></li>
<li><span class="lang-en">Backup history</span><span class="lang-vi">Backup history</span></li>
<li><span class="lang-en">Change processing and errors</span><span class="lang-vi">Change processing và lỗi</span></li>
<li><span class="lang-en">Connectivity</span><span class="lang-vi">Connectivity</span></li>
<li><span class="lang-en">Geo-replicas (Database geo-replicas for Managed Instance)</span><span class="lang-vi">Geo-replica (Database geo-replica với Managed Instance)</span></li>
<li><span class="lang-en">Index metadata</span><span class="lang-vi">Metadata của index</span></li>
<li><span class="lang-en">Missing indexes</span><span class="lang-vi">Missing index</span></li>
<li><span class="lang-en">Query runtime and wait statistics</span><span class="lang-vi">Query runtime và wait statistics</span></li>
<li><span class="lang-en">Replicas (Database replicas for Managed Instance)</span><span class="lang-vi">Replica (Database replica với Managed Instance)</span></li>
<li><span class="lang-en">Session statistics</span><span class="lang-vi">Session statistics</span></li>
<li><span class="lang-en">Table metadata</span><span class="lang-vi">Metadata của bảng</span></li>
</ul><li><span class="lang-en">The datasets which are captured for SQL Managed Instance (not Elastic Pool) are:</span><span class="lang-vi">Các tập dữ liệu thu thập riêng cho SQL Managed Instance (không gồm Elastic Pool):</span></li>
<ul><li><span class="lang-en">SQL Agent job history</span><span class="lang-vi">Lịch sử job của SQL Agent</span></li>
<li><span class="lang-en">SQL Agent job state</span><span class="lang-vi">Trạng thái job của SQL Agent</span></li>
</ul></ul></section>
<section id="s50"><h3><span class="n">50, , 51.</span> <span class="lang-en">configure Query Store to collect performance data</span><span class="lang-vi">cấu hình Query Store để thu thập dữ liệu hiệu năng</span><a class="anch" href="#s50" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">What is Query Store?</span><span class="lang-vi">Query Store là gì?</span></li>
<ul><li><span class="lang-en">It contains 3 stores:</span><span class="lang-vi">Nó gồm 3 store:</span></li>
<ul><li><span class="lang-en">Plan store for execution plan data.</span><span class="lang-vi">Plan store — chứa dữ liệu execution plan.</span></li>
<li><span class="lang-en">Runtime stats store for execution statistics data.</span><span class="lang-vi">Runtime stats store — chứa thống kê thực thi.</span></li>
<li><span class="lang-en">Wait stats store.</span><span class="lang-vi">Wait stats store.</span></li>
</ul></ul><li><span class="lang-en">When would you use Query Store?</span><span class="lang-vi">Khi nào thì dùng Query Store?</span></li>
<ul><li><span class="lang-en">Fix queries which are regressed due to changes in the execution plan.</span><span class="lang-vi">Sửa các query bị chậm đi do execution plan thay đổi.</span></li>
<li><span class="lang-en">How many times has a query been executed?</span><span class="lang-vi">Một query đã chạy bao nhiêu lần?</span></li>
<li><span class="lang-en">What are the Top X queries, by execution time, memory consumption, waiting on resources?</span><span class="lang-vi">Top X query theo thời gian thực thi, mức tiêu thụ memory, thời gian chờ tài nguyên là những query nào?</span></li>
<li><span class="lang-en">Look at query plans for a given query.</span><span class="lang-vi">Xem query plan của một query cụ thể.</span></li>
<li><span class="lang-en">Look at CPU, I/O and memory used for a particular database.</span><span class="lang-vi">Xem CPU, I/O và memory mà một database đã dùng.</span></li>
<li><span class="lang-en">What are the waits for a query?</span><span class="lang-vi">Một query đang chờ những gì?</span></li>
</ul><li><span class="lang-en">Query Store is:</span><span class="lang-vi">Query Store:</span></li>
<ul><li><span class="lang-en">Disabled by default for new SQL Server databases (e.g. on a VM), but</span><span class="lang-vi">TẮT mặc định với database SQL Server mới (ví dụ trên VM), nhưng</span></li>
<li><span class="lang-en">Enabled by default for new Azure SQL Databases.</span><span class="lang-vi">BẬT mặc định với Azure SQL Database mới.</span></li>
</ul><li><span class="lang-en">To enable Query Store:</span><span class="lang-vi">Để bật Query Store:</span></li>
<ul><li><span class="lang-en">In SSMS:</span><span class="lang-vi">Trong SSMS:</span></li>
<ul><li><span class="lang-en">Right-hand click on a database, and go to Properties.</span><span class="lang-vi">Chuột phải vào database và vào Properties.</span></li>
<li><span class="lang-en">Go to the Query Store tab.</span><span class="lang-vi">Vào tab Query Store.</span></li>
<li><span class="lang-en">To enable Query Store generally, change &quot;Operation Mode (Requested)&quot; to &quot;Read write&quot;.</span><span class="lang-vi">Để bật Query Store nói chung, đổi &quot;Operation Mode (Requested)&quot; thành &quot;Read write&quot;.</span></li>
<li><span class="lang-en">To enable wait stats, change &quot;Wait Statistics Capture Mode&quot; to &quot;On&quot;.</span><span class="lang-vi">Để bật wait stats, đổi &quot;Wait Statistics Capture Mode&quot; thành &quot;On&quot;.</span></li>
</ul><li><span class="lang-en">In T-SQL:</span><span class="lang-vi">Bằng T-SQL:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER DATABASE Database_Name SET QUERY_STORE = ON (OPERATION_MODE = READ_WRITE);
ALTER DATABASE Database_Name SET QUERY_STORE = ON ( WAIT_STATS_CAPTURE_MODE = ON );</span><span class="lang-vi">ALTER DATABASE Database_Name SET QUERY_STORE = ON (OPERATION_MODE = READ_WRITE);
ALTER DATABASE Database_Name SET QUERY_STORE = ON ( WAIT_STATS_CAPTURE_MODE = ON );</span></pre></li>
</ul></ul><li><span class="lang-en">It may up to a day to collect sufficient data to represent your workload.</span><span class="lang-vi">Có thể mất tới một ngày để thu thập đủ dữ liệu phản ánh đúng workload của bạn.</span></li>
<li><span class="lang-en">Options:</span><span class="lang-vi">Các tùy chọn:</span></li>
<ul><li><span class="lang-en">Is it collecting runtime stats?</span><span class="lang-vi">Nó có đang thu thập runtime stats không?</span></li>
<ul><li><span class="lang-en">Use SELECT actual_state, actual_state_desc, readonly_reason FROM sys.database_query_store_options;</span><span class="lang-vi">Use SELECT actual_state, actual_state_desc, readonly_reason FROM sys.database_query_store_options;</span></li>
<li><span class="lang-en">If actual_state = 2, then it is READ_WRITE. If actual_state = 1, then it is READ_ONLY.</span><span class="lang-vi">Nếu actual_state = 2 thì là READ_WRITE. Nếu actual_state = 1 thì là READ_ONLY.</span></li>
</ul><li><span class="lang-en">To change how often it collects stats: (&quot;Statistics Collection Interval&quot;):</span><span class="lang-vi">Để đổi tần suất thu thập thống kê (&quot;Statistics Collection Interval&quot;):</span></li>
<ul><li><span class="lang-en">In T-SQL:</span><span class="lang-vi">Bằng T-SQL:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER DATABASE DatabaseName
SET QUERY_STORE (INTERVAL_LENGTH_MINUTES = 15);</span><span class="lang-vi">ALTER DATABASE DatabaseName
SET QUERY_STORE (INTERVAL_LENGTH_MINUTES = 15);</span></pre></li>
</ul><li><span class="lang-en">You can choose from 1, 5, 10, 15, 30, 60 or 1440 minutes. A query will have a maximum of 1 row collected for this time period.</span><span class="lang-vi">Bạn chọn được 1, 5, 10, 15, 30, 60 hoặc 1440 phút. Trong mỗi khoảng đó, mỗi query chỉ có tối đa 1 dòng được ghi.</span></li>
</ul><li><span class="lang-en">You can change multiple options in T-SQL:</span><span class="lang-vi">Bạn đổi được nhiều tùy chọn cùng lúc bằng T-SQL:</span></li>
<li class="cb"><pre class="code"><span class="lang-en">ALTER DATABASE DatabaseName SET QUERY_STORE (
MAX_STORAGE_SIZE_MB = 500,
DATA_FLUSH_INTERVAL_SECONDS = 3000,
SIZE_BASED_CLEANUP_MODE = AUTO,
OPERATION_MODE = READ_WRITE,
CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30),
INTERVAL_LENGTH_MINUTES = 15,
QUERY_CAPTURE_MODE = AUTO,
MAX_PLANS_PER_QUERY = 1000,
WAIT_STATS_CAPTURE_MODE = ON);</span><span class="lang-vi">ALTER DATABASE DatabaseName SET QUERY_STORE (
MAX_STORAGE_SIZE_MB = 500,
DATA_FLUSH_INTERVAL_SECONDS = 3000,
SIZE_BASED_CLEANUP_MODE = AUTO,
OPERATION_MODE = READ_WRITE,
CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30),
INTERVAL_LENGTH_MINUTES = 15,
QUERY_CAPTURE_MODE = AUTO,
MAX_PLANS_PER_QUERY = 1000,
WAIT_STATS_CAPTURE_MODE = ON);</span></pre></li>
<ul><li><span class="lang-en">The space allocated to the Query Store. The default is 100 Mb in SQL Server 2016/2017, and 1 Gb in SQL Server2019.</span><span class="lang-vi">Dung lượng cấp cho Query Store. Mặc định là 100 MB ở SQL Server 2016/2017, và 1 GB ở SQL Server 2019.</span></li>
<li><span class="lang-en">If it reaches the limit, Query Store no longer collects new data and changes to read-only mode. This will reduce the performance accurate, because the Query Store will become stale.</span><span class="lang-vi">Nếu chạm giới hạn, Query Store ngừng thu thập dữ liệu mới và chuyển sang chế độ read-only. Điều này làm giảm độ chính xác vì dữ liệu Query Store trở nên lỗi thời.</span></li>
<li class="cb"><pre class="code"><span class="lang-en">SELECT actual_state, actual_state_desc, readonly_reason FROM sys.database_query_store_options;</span><span class="lang-vi">SELECT actual_state, actual_state_desc, readonly_reason FROM sys.database_query_store_options;</span></pre></li>
<li><span class="lang-en">readonly_reason would = 65536 if Query Store reached the MAX_STORAGE_SIZE_MB.</span><span class="lang-vi">readonly_reason sẽ bằng 65536 nếu Query Store đã chạm MAX_STORAGE_SIZE_MB.</span></li>
<li><span class="lang-en">To prevent it from reaching the limit, increase the MAX_STORAGE_SIZE_MB. If you can't allocate extra space, then decrease the Data Flush time.</span><span class="lang-vi">Để tránh chạm giới hạn, hãy tăng MAX_STORAGE_SIZE_MB. Nếu không cấp thêm dung lượng được thì giảm Data Flush time.</span></li>
<li><span class="lang-en">how long (in seconds) the data is retained in memory before being saved to disk.</span><span class="lang-vi">dữ liệu được giữ trong bộ nhớ bao lâu (tính bằng giây) trước khi ghi xuống đĩa.</span></li>
<li><span class="lang-en">Have a higher value if you don't have a large number of queries running being generated. However, if the SQL Server crashes or restarts, then anything new will not be saved.</span><span class="lang-vi">Đặt giá trị cao nếu bạn không có quá nhiều query chạy. Tuy nhiên nếu SQL Server crash hoặc khởi động lại thì phần mới chưa lưu sẽ mất.</span></li>
<li><span class="lang-en">Having a lower value may have a negative impact of performance, as it will save more often.</span><span class="lang-vi">Đặt giá trị thấp có thể ảnh hưởng xấu tới hiệu năng vì phải ghi xuống đĩa thường xuyên hơn.</span></li>
<li><span class="lang-en">whether automatic data cleanup occurs when size limit is reached.</span><span class="lang-vi">quyết định có tự dọn dẹp dữ liệu khi chạm giới hạn dung lượng hay không.</span></li>
<li><span class="lang-en">When Query Store data reaches about 90% of MAX_STORAGE_SIZE_MB, a clean-up begins. It will remove oldest/least expensive query data, and stops when size is about 80% of MAX_STORAGE_SIZE_MB.</span><span class="lang-vi">Khi dữ liệu Query Store đạt khoảng 90% MAX_STORAGE_SIZE_MB, quá trình dọn dẹp bắt đầu. Nó xóa dữ liệu query cũ nhất/ít tốn kém nhất và dừng khi dung lượng còn khoảng 80% MAX_STORAGE_SIZE_MB.</span></li>
<li><span class="lang-en">If you need it checking more quickly, reduce the DATA_FLUSH_INTERVAL_SECONDS period.</span><span class="lang-vi">Nếu cần kiểm tra nhanh hơn, hãy giảm khoảng DATA_FLUSH_INTERVAL_SECONDS.</span></li>
<li><span class="lang-en">how long data is retained in days.</span><span class="lang-vi">dữ liệu được giữ bao nhiêu ngày.</span></li>
<li><span class="lang-en">You can automatically delete Query data that you don't need.</span><span class="lang-vi">Bạn có thể tự động xóa dữ liệu Query Store không cần đến.</span></li>
<li><span class="lang-en">in this number of minutes, each query has a maximum of 1 row. Statistics are aggregated for each query during this time.</span><span class="lang-vi">trong khoảng số phút này, mỗi query có tối đa 1 dòng. Thống kê của mỗi query được gộp lại trong khoảng thời gian đó.</span></li>
<li><span class="lang-en">capture &quot;All&quot; queries, None, Custom or Auto (ignore infrequent queries and queries with small compile/execution times). Default was &quot;All&quot;, but in SQL Server 2019 and Azure SQL is &quot;Auto&quot;.</span><span class="lang-vi">thu thập &quot;All&quot; query, None, Custom hoặc Auto (bỏ qua query hiếm gặp và query có thời gian compile/thực thi nhỏ). Mặc định trước đây là &quot;All&quot;, nhưng từ SQL Server 2019 và Azure SQL thì là &quot;Auto&quot;.</span></li>
</ul>
</ul><li><span class="lang-en">To clear:</span><span class="lang-vi">Để xóa sạch:</span></li>
<ul><li><code><span class="lang-en">ALTER DATABASE DatabaseName SET QUERY_STORE CLEAR;</span><span class="lang-vi">ALTER DATABASE DatabaseName SET QUERY_STORE CLEAR;</span></code></li>
<li><span class="lang-en">or click the &quot;Purge Query Data&quot; button in SSMS.</span><span class="lang-vi">hoặc bấm nút &quot;Purge Query Data&quot; trong SSMS.</span></li>
</ul></ul></section>
<section id="s52"><h3><span class="n">52.</span> <span class="lang-en">identify sessions that cause blocking</span><span class="lang-vi">xác định các session gây blocking</span><a class="anch" href="#s52" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Blocking can occur when:</span><span class="lang-vi">Blocking xảy ra khi:</span></li>
<ul><li><span class="lang-en">Session 1 locks a resource (e.g. row, page or entire table), and then</span><span class="lang-vi">Session 1 khóa một tài nguyên (ví dụ một dòng, một page hoặc cả bảng), rồi</span></li>
<li><span class="lang-en">Session 2 requests that resource.</span><span class="lang-vi">Session 2 yêu cầu chính tài nguyên đó.</span></li>
</ul><li><span class="lang-en">Blocking is caused by:</span><span class="lang-vi">Blocking bắt nguồn từ:</span></li>
<ul><li><span class="lang-en">Poor transactional design, or</span><span class="lang-vi">Thiết kế transaction kém, hoặc</span></li>
<li><span class="lang-en">Long running transactions.</span><span class="lang-vi">Transaction chạy quá lâu.</span></li>
</ul><li><span class="lang-en">To emulate this, we are going to have an explicit transaction.</span><span class="lang-vi">Để mô phỏng, ta sẽ dùng một explicit transaction.</span></li>
<ul><li><span class="lang-en">Implicit transactions automatically add a BEGIN and COMMIT TRANSACTION.</span><span class="lang-vi">Implicit transaction tự động thêm BEGIN và COMMIT TRANSACTION.</span></li>
<li><span class="lang-en">Explicit transactions require you to add the BEGIN, and COMMIT/ROLLBACK TRANSACTION.</span><span class="lang-vi">Explicit transaction đòi hỏi bạn tự thêm BEGIN và COMMIT/ROLLBACK TRANSACTION.</span></li>
</ul><li><span class="lang-en">Session 1</span><span class="lang-vi">Session 1</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">BEGIN TRANSACTION
UPDATE [SalesLT].[Address]
SET City = 'Toronto ON'
where City = 'Toronto'</span><span class="lang-vi">BEGIN TRANSACTION
UPDATE [SalesLT].[Address]
SET City = 'Toronto ON'
where City = 'Toronto'</span></pre></li>
</ul><li><span class="lang-en">Session 2</span><span class="lang-vi">Session 2</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">BEGIN TRANSACTION
UPDATE [SalesLT].[Address]
SET City = 'Toronto'
where City in ('Toronto ON', 'Toronto')</span><span class="lang-vi">BEGIN TRANSACTION
UPDATE [SalesLT].[Address]
SET City = 'Toronto'
where City in ('Toronto ON', 'Toronto')</span></pre></li>
</ul><li><span class="lang-en">To view locks:</span><span class="lang-vi">Để xem các lock:</span></li>
<ul><li><code><span class="lang-en">SELECT * FROM sys.dm_tran_locks</span><span class="lang-vi">SELECT * FROM sys.dm_tran_locks</span></code></li>
</ul><li><span class="lang-en">To view blocking:</span><span class="lang-vi">Để xem blocking:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT session_id, blocking_session_id,
start_time, status, command,
DB_NAME(database_id) as [database],
wait_type, wait_resource, wait_time,
open_transaction_count
FROM sys.dm_exec_requests
WHERE blocking_session_id &gt; 0</span><span class="lang-vi">SELECT session_id, blocking_session_id,
start_time, status, command,
DB_NAME(database_id) as [database],
wait_type, wait_resource, wait_time,
open_transaction_count
FROM sys.dm_exec_requests
WHERE blocking_session_id &gt; 0</span></pre></li>
</ul><li><span class="lang-en">For the session_id, look at the numbers in brackets at the top of SSMS.</span><span class="lang-vi">Để biết session_id, xem con số trong ngoặc ở phía trên cửa sổ SSMS.</span></li>
<li><span class="lang-en">To reduce blocking, you can change the TRANSACTION ISOLATION LEVEL of a session:</span><span class="lang-vi">Để giảm blocking, bạn có thể đổi TRANSACTION ISOLATION LEVEL của session:</span></li>
<ul><li><code><span class="lang-en">SET TRANSACTION ISOLATION LEVEL …</span><span class="lang-vi">SET TRANSACTION ISOLATION LEVEL …</span></code></li>
<li><span class="lang-en">READ UNCOMMITTED – No blocking, but would have dirty reads.</span><span class="lang-vi">READ UNCOMMITTED — không blocking, nhưng sẽ có dirty read.</span></li>
<li><span class="lang-en">READ COMMITTED – No dirty reads, as would not read statements that have been modified but not committed.</span><span class="lang-vi">READ COMMITTED — không dirty read, vì không đọc những câu lệnh đã sửa nhưng chưa commit.</span></li>
<ul><li><span class="lang-en">If READ_COMMITTED_SNAPSHOT is OFF (the default on SQL Server), may block.</span><span class="lang-vi">Nếu READ_COMMITTED_SNAPSHOT là OFF (mặc định trên SQL Server) thì có thể bị block.</span></li>
<li><span class="lang-en">If READ_COMMITTED_SNAPSHOT is ON (the default on Azure SQL Database), uses a snapshot and therefore does not block.</span><span class="lang-vi">Nếu READ_COMMITTED_SNAPSHOT là ON (mặc định trên Azure SQL Database) thì dùng snapshot nên không bị block.</span></li>
</ul><li><span class="lang-en">REPEATABLE READ – No dirty reads, but blocks.</span><span class="lang-vi">REPEATABLE READ — không dirty read, nhưng gây block.</span></li>
<li><span class="lang-en">SNAPSHOT – The data read remains the same until the end of the transaction. No blocks unless the database is being recovered.</span><span class="lang-vi">SNAPSHOT — dữ liệu đọc được giữ nguyên cho tới hết transaction. Không block, trừ khi database đang được recover.</span></li>
<ul><li><span class="lang-en">Needs ALLOW_SNAPSHOT_ISOLATION to be ON.</span><span class="lang-vi">Cần bật ALLOW_SNAPSHOT_ISOLATION.</span></li>
</ul><li><span class="lang-en">SERIALIZABLE - No dirty reads, as would not read statements that have been modified but not committed. However, blocks updates/inserts.</span><span class="lang-vi">SERIALIZABLE — không dirty read vì không đọc câu lệnh đã sửa nhưng chưa commit. Tuy nhiên nó chặn cả update/insert.</span></li>
</ul><li><span class="lang-en">To see the current level, use</span><span class="lang-vi">Để xem mức hiện tại, dùng</span></li>
<ul><li><code><span class="lang-en">DBCC USEROPTIONS</span><span class="lang-vi">DBCC USEROPTIONS</span></code></li>
</ul><li><span class="lang-en">There are database options as well.</span><span class="lang-vi">Ngoài ra còn có các tùy chọn ở cấp database.</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER DATABASE NameOfDatabase SET ALLOW_SNAPSHOT_ISOLATION ON</span><span class="lang-vi">ALTER DATABASE NameOfDatabase SET ALLOW_SNAPSHOT_ISOLATION ON</span></pre></li>
<ul><li><span class="lang-en">DML statements start generating row versions – allows snapshots but doesn't enable it.</span><span class="lang-vi">Các câu lệnh DML bắt đầu sinh row version — cho phép dùng snapshot chứ chưa bật nó.</span></li>
</ul><li class="cb"><pre class="code"><span class="lang-en">ALTER DATABASE NameOfDatabase SET READ_COMMITTED_SNAPSHOT ON</span><span class="lang-vi">ALTER DATABASE NameOfDatabase SET READ_COMMITTED_SNAPSHOT ON</span></pre></li>
<ul><li><span class="lang-en">DML statements start generating row versions – means that TRANSACTION ISOLATION LEVEL READ COMMITTED does not block.</span><span class="lang-vi">Các câu lệnh DML bắt đầu sinh row version — nghĩa là TRANSACTION ISOLATION LEVEL READ COMMITTED sẽ không gây block.</span></li>
</ul></ul><li><span class="lang-en">You can use Extended Events in MI and SQL Server on VM.</span><span class="lang-vi">Bạn dùng được Extended Events trên MI và SQL Server trên VM.</span></li>
<ul><li><span class="lang-en">Lightweight tracing system, used for:</span><span class="lang-vi">Đây là hệ thống tracing nhẹ, dùng để:</span></li>
<ul><li><span class="lang-en">Troubleshooting blocking and deadlocking performance issues</span><span class="lang-vi">Xử lý sự cố hiệu năng do blocking và deadlock</span></li>
<li><span class="lang-en">Identifying long-running queries</span><span class="lang-vi">Phát hiện query chạy lâu</span></li>
<li><span class="lang-en">Monitoring Data Definition Language (DDL) operations</span><span class="lang-vi">Giám sát các thao tác Data Definition Language (DDL)</span></li>
<li><span class="lang-en">Logging missing column statistics</span><span class="lang-vi">Ghi nhận các column statistics bị thiếu</span></li>
<li><span class="lang-en">Observing Memory Pressure in your database</span><span class="lang-vi">Quan sát tình trạng áp lực bộ nhớ trong database</span></li>
<li><span class="lang-en">Long-running physical I/O operations</span><span class="lang-vi">Các thao tác I/O vật lý kéo dài</span></li>
</ul></ul><li><span class="lang-en">To create a new session:</span><span class="lang-vi">Để tạo session mới:</span></li>
<ul><li><span class="lang-en">In SSMS, go to Management – Extended Events – and right-hand click on Sessions and go to &quot;New Session Wizard&quot; or &quot;New Session…&quot;</span><span class="lang-vi">Trong SSMS, vào Management – Extended Events, chuột phải vào Sessions và chọn &quot;New Session Wizard&quot; hoặc &quot;New Session…&quot;</span></li>
<li><span class="lang-en">Give the session a name.</span><span class="lang-vi">Đặt tên cho session.</span></li>
<li><span class="lang-en">Use a template if applicable, from:</span><span class="lang-vi">Use a template if applicable, from:</span></li>
<ul><li><span class="lang-en">Locks and Blocks,</span><span class="lang-vi">Locks and Blocks,</span></li>
<ul><li><span class="lang-en">Count Query Locks</span><span class="lang-vi">Count Query Locks</span></li>
</ul><li><span class="lang-en">Profiler Equivalents,</span><span class="lang-vi">Profiler Equivalents,</span></li>
<ul><li><span class="lang-en">SP (Stored Procedure) Counts,</span><span class="lang-vi">SP (Stored Procedure) Counts,</span></li>
<li><span class="lang-en">Standard (Stored Procedures and T-SQL batches),</span><span class="lang-vi">Standard (Stored Procedure và T-SQL batch),</span></li>
<li><span class="lang-en">TSQL (Debug client applications),</span><span class="lang-vi">TSQL (gỡ lỗi ứng dụng client),</span></li>
<li><span class="lang-en">TSQL_SPs (analyze the component steps of SPs),</span><span class="lang-vi">TSQL_SPs (phân tích từng bước bên trong stored procedure),</span></li>
<li><span class="lang-en">TSQL_Duration (identify slow queries),</span><span class="lang-vi">TSQL_Duration (tìm query chậm),</span></li>
<li><span class="lang-en">TSQL_Locks (deadlocks),</span><span class="lang-vi">TSQL_Locks (deadlock),</span></li>
<li><span class="lang-en">TSQL_Replay (benchmark testing),</span><span class="lang-vi">TSQL_Replay (kiểm thử benchmark),</span></li>
<li><span class="lang-en">Tuning (Stored Procedures and T-SQL batches).</span><span class="lang-vi">Tuning (Stored Procedure và T-SQL batch).</span></li>
</ul><li><span class="lang-en">Query Execution,</span><span class="lang-vi">Query Execution,</span></li>
<ul><li><span class="lang-en">Query Batch/Detail Sampling (20% of active sessions),</span><span class="lang-vi">Query Batch/Detail Sampling (lấy mẫu 20% session đang hoạt động),</span></li>
<li><span class="lang-en">Query Batch/Detail Tracking (understand query flow),</span><span class="lang-vi">Query Batch/Detail Tracking (hiểu luồng chạy của query),</span></li>
<li><span class="lang-en">Query Wait Statistic (query hash and query plan hash)</span><span class="lang-vi">Query Wait Statistic (query hash và query plan hash)</span></li>
</ul><li><span class="lang-en">System Monitoring</span><span class="lang-vi">System Monitoring</span></li>
<ul><li><span class="lang-en">Activity Tracking (general activity),</span><span class="lang-vi">Activity Tracking (hoạt động chung),</span></li>
<li><span class="lang-en">Connection Tracking (connection activity),</span><span class="lang-vi">Connection Tracking (hoạt động kết nối),</span></li>
<li><span class="lang-en">Database Log File IO Tracking (for database log files).</span><span class="lang-vi">Database Log File IO Tracking (cho file log của database).</span></li>
</ul></ul></ul><li><span class="lang-en">Select Events to Capture</span><span class="lang-vi">Select Events to Capture</span></li>
<ul><li><span class="lang-en">You can filter by Category.</span><span class="lang-vi">Bạn có thể lọc theo Category.</span></li>
</ul><li><span class="lang-en">Capture Global Fields</span><span class="lang-vi">Thu thập Global Field</span></li>
<ul><li><span class="lang-en">Such as &quot;session_id&quot;.</span><span class="lang-vi">Chẳng hạn &quot;session_id&quot;.</span></li>
</ul><li><span class="lang-en">Set Session Event Filters.</span><span class="lang-vi">Set Session Event Filters.</span></li>
<ul><li><span class="lang-en">So you don't have to capture every event.</span><span class="lang-vi">Để bạn không phải bắt mọi sự kiện.</span></li>
</ul><li><span class="lang-en">Specify Session Data Storage.</span><span class="lang-vi">Chỉ định nơi lưu dữ liệu của session.</span></li>
<ul><li><span class="lang-en">Event Tracing for Windows (ETW)</span><span class="lang-vi">Event Tracing for Windows (ETW)</span></li>
<ul><li><span class="lang-en">Correlates SQL Server events with Windows OS events. Processes data synchronously</span><span class="lang-vi">Đối chiếu sự kiện SQL Server với sự kiện của hệ điều hành Windows. Xử lý dữ liệu đồng bộ</span></li>
</ul><li><span class="lang-en">Event Counter</span><span class="lang-vi">Event Counter</span></li>
<ul><li><span class="lang-en">Counts how many times each event occurs. Processes data synchronously</span><span class="lang-vi">Đếm số lần mỗi sự kiện xảy ra. Xử lý dữ liệu đồng bộ</span></li>
</ul><li><span class="lang-en">Event File – disk file.</span><span class="lang-vi">Event File — file trên đĩa.</span></li>
<ul><li><span class="lang-en">Creating large records (asynchronous)</span><span class="lang-vi">Tạo bản ghi lớn (bất đồng bộ)</span></li>
</ul><li><span class="lang-en">Histogram</span><span class="lang-vi">Histogram</span></li>
<ul><li><span class="lang-en">Counts how many times events occurs, for event fields and actions separately (asynchronous).</span><span class="lang-vi">Đếm số lần sự kiện xảy ra, tách riêng theo trường sự kiện và theo action (bất đồng bộ).</span></li>
</ul><li><span class="lang-en">Pair Matching</span><span class="lang-vi">Pair Matching</span></li>
<ul><li><span class="lang-en">Detect start events without an corresponding end event (asynchronous).</span><span class="lang-vi">Phát hiện sự kiện bắt đầu mà không có sự kiện kết thúc tương ứng (bất đồng bộ).</span></li>
</ul><li><span class="lang-en">Ring Buffer</span><span class="lang-vi">Ring Buffer</span></li>
<ul><li><span class="lang-en">Smaller data sets or continuous data collection (asynchronous).</span><span class="lang-vi">Dành cho tập dữ liệu nhỏ hoặc thu thập liên tục (bất đồng bộ).</span></li>
</ul></ul></ul></section>
<section id="s53"><h3><span class="n">53.</span> <span class="lang-en">determine the appropriate Dynamic Management Views (DMVs) to gather query</span><span class="lang-vi">chọn Dynamic Management View (DMV) phù hợp để thu thập</span><a class="anch" href="#s53" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">performance information</span><span class="lang-vi">thông tin hiệu năng của query</span></li>
<li><span class="lang-en">You can retrieve the last execution plans using:</span><span class="lang-vi">Bạn lấy các execution plan gần nhất bằng:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT *
FROM sys.dm_exec_cached_plans AS cp
CROSS APPLY sys.dm_exec_sql_text(plan_handle) AS st
CROSS APPLY sys.dm_exec_query_plan_stats(plan_handle) AS qps;</span><span class="lang-vi">SELECT *
FROM sys.dm_exec_cached_plans AS cp
CROSS APPLY sys.dm_exec_sql_text(plan_handle) AS st
CROSS APPLY sys.dm_exec_query_plan_stats(plan_handle) AS qps;</span></pre></li>
</ul><li><span class="lang-en">You can also store execution plans using:</span><span class="lang-vi">Bạn cũng có thể lưu execution plan bằng:</span></li>
<ul><li><span class="lang-en">Extended Events</span><span class="lang-vi">Extended Events</span></li>
<ul><li><span class="lang-en">Lightweight profiling</span><span class="lang-vi">Lightweight profiling</span></li>
<li><span class="lang-en">Add at the end of a query OPTION(USE HINT ('QUERY_PLAN_PROFILE') would add it to Extended Events</span><span class="lang-vi">Add at the end of a query OPTION(USE HINT ('QUERY_PLAN_PROFILE') would add it to Extended Events</span></li>
</ul></ul><li><span class="lang-en">Find top N queries ranked by average CPU time using sys.dm_exec_query_stats</span><span class="lang-vi">Tìm top N query xếp theo thời gian CPU trung bình, dùng sys.dm_exec_query_stats</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT TOP 5 query_stats.query_hash AS &quot;Query Hash&quot;,
SUM(query_stats.total_worker_time) / SUM(query_stats.execution_count) AS &quot;Avg CPU Time&quot;,
MIN(query_stats.statement_text) AS &quot;Statement Text&quot;
FROM
(SELECT QS.*,
SUBSTRING(ST.text, (QS.statement_start_offset/2) + 1,
((CASE statement_end_offset
WHEN -1 THEN DATALENGTH(ST.text)
ELSE QS.statement_end_offset END
QS.statement_start_offset)/2) + 1) AS statement_text
FROM sys.dm_exec_query_stats AS QS
CROSS APPLY sys.dm_exec_sql_text(QS.sql_handle) as ST) as query_stats
GROUP BY query_stats.query_hash
ORDER BY 2 DESC;</span><span class="lang-vi">SELECT TOP 5 query_stats.query_hash AS &quot;Query Hash&quot;,
SUM(query_stats.total_worker_time) / SUM(query_stats.execution_count) AS &quot;Avg CPU Time&quot;,
MIN(query_stats.statement_text) AS &quot;Statement Text&quot;
FROM
(SELECT QS.*,
SUBSTRING(ST.text, (QS.statement_start_offset/2) + 1,
((CASE statement_end_offset
WHEN -1 THEN DATALENGTH(ST.text)
ELSE QS.statement_end_offset END
QS.statement_start_offset)/2) + 1) AS statement_text
FROM sys.dm_exec_query_stats AS QS
CROSS APPLY sys.dm_exec_sql_text(QS.sql_handle) as ST) as query_stats
GROUP BY query_stats.query_hash
ORDER BY 2 DESC;</span></pre></li>
</ul><li><span class="lang-en">Find which queries use the most cumulative CPU:</span><span class="lang-vi">Tìm query nào tiêu tốn nhiều CPU tích lũy nhất:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT
highest_cpu_queries.plan_handle,
highest_cpu_queries.total_worker_time,
q.dbid, q.objectid, q.number, q.encrypted, q.[text]
FROM
(SELECT TOP 50 qs.plan_handle, qs.total_worker_time
FROM sys.dm_exec_query_stats qs
ORDER BY qs.total_worker_time desc) AS highest_cpu_queries
CROSS APPLY sys.dm_exec_sql_text(plan_handle) AS q
ORDER BY highest_cpu_queries.total_worker_time DESC;</span><span class="lang-vi">SELECT
highest_cpu_queries.plan_handle,
highest_cpu_queries.total_worker_time,
q.dbid, q.objectid, q.number, q.encrypted, q.[text]
FROM
(SELECT TOP 50 qs.plan_handle, qs.total_worker_time
FROM sys.dm_exec_query_stats qs
ORDER BY qs.total_worker_time desc) AS highest_cpu_queries
CROSS APPLY sys.dm_exec_sql_text(plan_handle) AS q
ORDER BY highest_cpu_queries.total_worker_time DESC;</span></pre></li>
</ul></ul></section>
<section id="s53-2"><h3><span class="n">53.</span> <span class="lang-en">identify performance issues using DMVs</span><span class="lang-vi">phát hiện vấn đề hiệu năng bằng DMV</span><a class="anch" href="#s53-2" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Long running queries that consume CPU are still running</span><span class="lang-vi">Query chạy lâu, tiêu tốn CPU và vẫn đang chạy</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT TOP 10 req.session_id, req.start_time, cpu_time 'cpu_time_ms', OBJECT_NAME(ST.objectid, ST.dbid) 'ObjectName', SUBSTRING(REPLACE(REPLACE(SUBSTRING(ST.text, (req.statement_start_offset / 2)+1, ((CASE statement_end_offset WHEN -1 THEN DATALENGTH(ST.text) ELSE req.statement_end_offset END-req.statement_start_offset)/ 2)+1), CHAR(10), ' '), CHAR(13), ' '), 1, 512) AS statement_text
FROM sys.dm_exec_requests AS req
CROSS APPLY sys.dm_exec_sql_text(req.sql_handle) AS ST
ORDER BY cpu_time DESC;</span><span class="lang-vi">SELECT TOP 10 req.session_id, req.start_time, cpu_time 'cpu_time_ms', OBJECT_NAME(ST.objectid, ST.dbid) 'ObjectName', SUBSTRING(REPLACE(REPLACE(SUBSTRING(ST.text, (req.statement_start_offset / 2)+1, ((CASE statement_end_offset WHEN -1 THEN DATALENGTH(ST.text) ELSE req.statement_end_offset END-req.statement_start_offset)/ 2)+1), CHAR(10), ' '), CHAR(13), ' '), 1, 512) AS statement_text
FROM sys.dm_exec_requests AS req
CROSS APPLY sys.dm_exec_sql_text(req.sql_handle) AS ST
ORDER BY cpu_time DESC;</span></pre></li>
</ul><li><span class="lang-en">Data from your database</span><span class="lang-vi">Dữ liệu từ database của bạn</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">USE master
GO
SELECT * FROM sys.resource_stats
WHERE database_name = 'X'
ORDER BY start_time DESC;</span><span class="lang-vi">USE master
GO
SELECT * FROM sys.resource_stats
WHERE database_name = 'X'
ORDER BY start_time DESC;</span></pre></li>
</ul><li><span class="lang-en">Current active sessions</span><span class="lang-vi">Các session đang hoạt động</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT * FROM sys.dm_exec_connections
SELECT @@SPID gives the current session.</span><span class="lang-vi">SELECT * FROM sys.dm_exec_connections
SELECT @@SPID gives the current session.</span></pre></li>
</ul></ul></section>
<section id="s54"><h3><span class="n">54.</span> <span class="lang-en">identify and implement index changes for queries</span><span class="lang-vi">xác định và triển khai thay đổi index cho query</span><a class="anch" href="#s54" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Requirements for Indexes:</span><span class="lang-vi">Điều kiện để index có ích:</span></li>
<ul><li><span class="lang-en">Big tables (small tables may use a Scan anyway).</span><span class="lang-vi">Bảng lớn (bảng nhỏ thì SQL Server có thể vẫn dùng Scan).</span></li>
<li><span class="lang-en">Small column size (the best are numeric, but smaller text columns are OK too).</span><span class="lang-vi">Cột có kích thước nhỏ (tốt nhất là kiểu số, nhưng cột text ngắn cũng được).</span></li>
<li><span class="lang-en">Use columns which are in WHERE (SARGable columns) and JOIN clauses.</span><span class="lang-vi">Use columns which are in WHERE (SARGable columns) and JOIN clauses.</span></li>
<ul><li><span class="lang-en">If using LIKE '%text%', then an index (apart from a full-text index) will not help.</span><span class="lang-vi">Nếu dùng LIKE '%text%' thì index thường (trừ full-text index) sẽ không giúp được gì.</span></li>
<li><span class="lang-en">Additional columns can be included using INCLUDE (covered queries). This can make the index key smaller and more efficient.</span><span class="lang-vi">Có thể thêm cột phụ bằng INCLUDE (covered query). Cách này giúp key của index nhỏ hơn và hiệu quả hơn.</span></li>
</ul><li><span class="lang-en">Clustered or Non-clustered?</span><span class="lang-vi">Clustered hay non-clustered?</span></li>
<ul><li><span class="lang-en">Only one clustered index per table. It also used in PRIMARY KEYs. It re-sorts the table. Use for frequently used queries and range queries.</span><span class="lang-vi">Mỗi bảng chỉ có một clustered index. Nó cũng được dùng cho PRIMARY KEY và sắp xếp lại bảng. Dùng cho các query hay chạy và query theo khoảng.</span></li>
<ul><li><span class="lang-en">Should be used with the UNIQUE property – but it is possible to create one which doesn't.</span><span class="lang-vi">Nên đi kèm thuộc tính UNIQUE — dù vẫn tạo được clustered index không unique.</span></li>
<li><span class="lang-en">Should be either UNIQUE or have many distinct values.</span><span class="lang-vi">Nên là UNIQUE hoặc có nhiều giá trị phân biệt.</span></li>
<li><span class="lang-en">Accessed sequentially (in ranges).</span><span class="lang-vi">Được truy cập tuần tự (theo khoảng).</span></li>
<li><span class="lang-en">IDENTITY</span><span class="lang-vi">IDENTITY</span></li>
<li><span class="lang-en">Frequently used.</span><span class="lang-vi">Được dùng thường xuyên.</span></li>
</ul><li><span class="lang-en">As many non-clustered indexes as you want. It creates a separate index.</span><span class="lang-vi">Bạn tạo bao nhiêu non-clustered index cũng được. Mỗi cái tạo ra một index riêng.</span></li>
</ul><li><span class="lang-en">Columnstore indexes are available in almost all service tiers.</span><span class="lang-vi">Columnstore index có ở hầu hết các service tier.</span></li>
<li><span class="lang-en">Only need a small part indexes?</span><span class="lang-vi">Chỉ cần index một phần nhỏ dữ liệu?</span></li>
<ul><li><span class="lang-en">Use a Filtered Index</span><span class="lang-vi">Use a Filtered Index</span></li>
</ul><li><span class="lang-en">Do you need room to grow?</span><span class="lang-vi">Cần chừa chỗ cho dữ liệu tăng thêm?</span></li>
<ul><li><span class="lang-en">Use the FillFactor option to leave space for growth.</span><span class="lang-vi">Use the FillFactor option to leave space for growth.</span></li>
</ul><li><span class="lang-en">Ascending or Descending, based on how you want the results to appear.</span><span class="lang-vi">Ascending hay Descending, tùy theo cách bạn muốn kết quả xuất hiện.</span></li>
</ul><li><span class="lang-en">Too many indexes?</span><span class="lang-vi">Quá nhiều index?</span></li>
<ul><li><span class="lang-en">If you INSERT, UPDATE, DELETE or MERGE, then all indexes need to be adjusted.</span><span class="lang-vi">Mỗi lần INSERT, UPDATE, DELETE hay MERGE, toàn bộ index đều phải được điều chỉnh.</span></li>
</ul><li><span class="lang-en">Create in T-SQL:</span><span class="lang-vi">Create in T-SQL:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">CREATE [UNIQUE] [NONCLUSTERED/CLUSTERED] INDEX [Name] ON Schema.Table (Columns) [INCLUDE (Columns)] [WHERE … - filtered index]</span><span class="lang-vi">CREATE [UNIQUE] [NONCLUSTERED/CLUSTERED] INDEX [Name] ON Schema.Table (Columns) [INCLUDE (Columns)] [WHERE … - filtered index]</span></pre></li>
</ul><li><span class="lang-en">Create in SSMS:</span><span class="lang-vi">Create in SSMS:</span></li>
<ul><li><span class="lang-en">Right-hand click on Indexes in the relevant table and select &quot;New Index&quot; – &quot;[Non-]Clustered Index&quot;.</span><span class="lang-vi">Chuột phải vào Indexes trong bảng tương ứng và chọn &quot;New Index&quot; – &quot;[Non-]Clustered Index&quot;.</span></li>
</ul></ul></section>
<section id="s55"><h3><span class="n">55.</span> <span class="lang-en">recommend query construct modifications based on resource usage</span><span class="lang-vi">đề xuất sửa cấu trúc query dựa trên mức tiêu thụ tài nguyên</span><a class="anch" href="#s55" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Missing indexes:</span><span class="lang-vi">Index bị thiếu:</span></li>
<ul><li><code><span class="lang-en">SELECT * FROM sys.dm_db_missing_index_details</span><span class="lang-vi">SELECT * FROM sys.dm_db_missing_index_details</span></code></li>
<ul><li><span class="lang-en">In Azure SQL Database, only gives information about databases to which user has access.</span><span class="lang-vi">Trên Azure SQL Database, nó chỉ cho thông tin về những database mà user có quyền truy cập.</span></li>
<li><span class="lang-en">In creating the index, put equality before inequality – both of these should be the key – and INCLUDE the included columns.</span><span class="lang-vi">Khi tạo index, đặt cột equality trước cột inequality — cả hai đều là key — và đưa các cột included vào INCLUDE.</span></li>
</ul></ul><li><span class="lang-en">Full query from https://docs.microsoft.com/en-us/azure/azure-sql/database/performance-guidance:</span><span class="lang-vi">Query đầy đủ lấy từ https://docs.microsoft.com/en-us/azure/azure-sql/database/performance-guidance:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT
CONVERT (varchar, getdate(), 126) AS runtime
, mig.index_group_handle
, mid.index_handle
, CONVERT (decimal (28,1), migs.avg_total_user_cost * migs.avg_user_impact *
(migs.user_seeks + migs.user_scans)) AS improvement_measure
, 'CREATE INDEX missing_index_' + CONVERT (varchar, mig.index_group_handle) + '_' +
CONVERT (varchar, mid.index_handle) + ' ON ' + mid.statement + '
(' + ISNULL (mid.equality_columns,'')
+ CASE WHEN mid.equality_columns IS NOT NULL
AND mid.inequality_columns IS NOT NULL
THEN ',' ELSE '' END + ISNULL (mid.inequality_columns, '') + ')'
+ ISNULL (' INCLUDE (' + mid.included_columns + ')', '') AS create_index_statement
, migs.*
, mid.database_id
, mid.[object_id]
FROM sys.dm_db_missing_index_groups AS mig
INNER JOIN sys.dm_db_missing_index_group_stats AS migs
ON migs.group_handle = mig.index_group_handle
INNER JOIN sys.dm_db_missing_index_details AS mid
ON mig.index_handle = mid.index_handle
ORDER BY migs.avg_total_user_cost * migs.avg_user_impact * (migs.user_seeks + migs.user_scans) DESC</span><span class="lang-vi">SELECT
CONVERT (varchar, getdate(), 126) AS runtime
, mig.index_group_handle
, mid.index_handle
, CONVERT (decimal (28,1), migs.avg_total_user_cost * migs.avg_user_impact *
(migs.user_seeks + migs.user_scans)) AS improvement_measure
, 'CREATE INDEX missing_index_' + CONVERT (varchar, mig.index_group_handle) + '_' +
CONVERT (varchar, mid.index_handle) + ' ON ' + mid.statement + '
(' + ISNULL (mid.equality_columns,'')
+ CASE WHEN mid.equality_columns IS NOT NULL
AND mid.inequality_columns IS NOT NULL
THEN ',' ELSE '' END + ISNULL (mid.inequality_columns, '') + ')'
+ ISNULL (' INCLUDE (' + mid.included_columns + ')', '') AS create_index_statement
, migs.*
, mid.database_id
, mid.[object_id]
FROM sys.dm_db_missing_index_groups AS mig
INNER JOIN sys.dm_db_missing_index_group_stats AS migs
ON migs.group_handle = mig.index_group_handle
INNER JOIN sys.dm_db_missing_index_details AS mid
ON mig.index_handle = mid.index_handle
ORDER BY migs.avg_total_user_cost * migs.avg_user_impact * (migs.user_seeks + migs.user_scans) DESC</span></pre></li>
</ul></ul></section>
<section id="s56"><h3><span class="n">56.</span> <span class="lang-en">assess the use of hints for query performance</span><span class="lang-vi">đánh giá việc dùng hint cho hiệu năng query</span><a class="anch" href="#s56" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Hints only affect one particular DELETE, INSERT, SELECT, UPDATE or MERGE query.</span><span class="lang-vi">Hint chỉ ảnh hưởng tới đúng một câu DELETE, INSERT, SELECT, UPDATE hoặc MERGE.</span></li>
<ul><li><span class="lang-en">Microsoft says that the Query Optimizer typically selects the best execution plan, so only use this as a last resort.</span><span class="lang-vi">Microsoft nói Query Optimizer thường chọn được execution plan tốt nhất, nên chỉ dùng hint như biện pháp cuối cùng.</span></li>
</ul><li><span class="lang-en">Join hints can be LOOP, HASH, MERGE JOIN.</span><span class="lang-vi">Join hint gồm LOOP, HASH, MERGE JOIN.</span></li>
<ul><li><span class="lang-en">For example, INNER LOOP JOIN instead of INNER JOIN.</span><span class="lang-vi">Ví dụ, dùng INNER LOOP JOIN thay vì INNER JOIN.</span></li>
<ul><li><span class="lang-en">LOOP cannot be specified with a RIGHT or FULL Join.</span><span class="lang-vi">LOOP không chỉ định được với RIGHT hoặc FULL Join.</span></li>
</ul></ul><li><span class="lang-en">For query hints, end your query with OPTION (&lt;hints&gt;)</span><span class="lang-vi">Với query hint, kết thúc query bằng OPTION (&lt;hints&gt;)</span></li>
<ul><li><span class="lang-en">For example, OPTION (MERGE JOIN)</span><span class="lang-vi">Ví dụ, OPTION (MERGE JOIN)</span></li>
<li><span class="lang-en">{HASH | ORDER } GROUP</span><span class="lang-vi">{HASH | ORDER } GROUP</span></li>
<li><span class="lang-en">{MERGE | HASH | CONCAT} UNION</span><span class="lang-vi">{MERGE | HASH | CONCAT} UNION</span></li>
<li><span class="lang-en">{LOOP | MERGE | HASH} JOIN</span><span class="lang-vi">{LOOP | MERGE | HASH} JOIN</span></li>
<li><span class="lang-en">KEEPFIXED PLAN</span><span class="lang-vi">KEEPFIXED PLAN</span></li>
<ul><li><span class="lang-en">The query won't be recompiled because the statistics change. It will only recompile if the schema of the underlying tables changes or sp_recompile is run against these tables.</span><span class="lang-vi">Query sẽ không bị recompile khi statistics thay đổi. Nó chỉ recompile nếu schema của bảng bên dưới thay đổi, hoặc khi bạn chạy sp_recompile lên các bảng đó.</span></li>
</ul><li><span class="lang-en">KEEP PLAN</span><span class="lang-vi">KEEP PLAN</span></li>
<ul><li><span class="lang-en">Recompiles less often when statistics change</span><span class="lang-vi">Giảm tần suất recompile khi statistics thay đổi</span></li>
</ul><li><span class="lang-en">OPTIMIZE FOR UNKNOWN</span><span class="lang-vi">OPTIMIZE FOR UNKNOWN</span></li>
<ul><li><span class="lang-en">Uses the average selectivity of a predicate, as opposed to the runtime parameter used when the query is compiled and optimized.</span><span class="lang-vi">Dùng độ chọn lọc trung bình của predicate, thay vì giá trị tham số lúc chạy khi query được compile và tối ưu.</span></li>
</ul><li><span class="lang-en">ROBUST PLAN</span><span class="lang-vi">ROBUST PLAN</span></li>
<ul><li><span class="lang-en">Creates a plan that works for the maximum potential row size. If it isn't, then performance may be impaired.</span><span class="lang-vi">Creates a plan that works for the maximum potential row size. If it isn't, then performance may be impaired.</span></li>
</ul></ul><li><span class="lang-en">If using parameters in a stored procedure, you can say</span><span class="lang-vi">Nếu dùng tham số trong stored procedure, bạn có thể viết</span></li>
<ul><li><code><span class="lang-en">OPTION (OPTIMIZE FOR (@param 2))</span><span class="lang-vi">OPTION (OPTIMIZE FOR (@param 2))</span></code></li>
<li><span class="lang-en">or</span><span class="lang-vi">hoặc</span></li>
<li><code><span class="lang-en">OPTION (OPTIMIZE FOR (@param UNKNOWN))</span><span class="lang-vi">OPTION (OPTIMIZE FOR (@param UNKNOWN))</span></code></li>
<li><span class="lang-en">You could also have WITH RECOMPILE before &quot;AS BEGIN&quot;.</span><span class="lang-vi">Bạn cũng có thể đặt WITH RECOMPILE trước &quot;AS BEGIN&quot;.</span></li>
</ul><li><span class="lang-en">Otherwise, the stored procedure will be optimised as per the first running.</span><span class="lang-vi">Nếu không, stored procedure sẽ được tối ưu theo đúng lần chạy đầu tiên.</span></li>
<li><span class="lang-en">See also topic 57.</span><span class="lang-vi">Xem thêm mục 57.</span></li>
</ul></section>
<section id="s57"><h3><span class="n">57.</span> <span class="lang-en">determine the appropriate type of execution plan</span><span class="lang-vi">chọn loại execution plan phù hợp</span><a class="anch" href="#s57" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">To display Execution Plans in SSMS:</span><span class="lang-vi">Để hiển thị Execution Plan trong SSMS:</span></li>
<ul><li><span class="lang-en">Click on &quot;Display Estimated Execution Plan&quot; (using query optimizer)</span><span class="lang-vi">Bấm &quot;Display Estimated Execution Plan&quot; (dùng query optimizer)</span></li>
<ul><li><span class="lang-en">This happens immediately without running the query.</span><span class="lang-vi">Kết quả hiện ra ngay mà không cần chạy query.</span></li>
</ul><li><span class="lang-en">Click on &quot;Include Actual Execution Plan&quot; (including additional runtime statistics).</span><span class="lang-vi">Bấm &quot;Include Actual Execution Plan&quot; (kèm thống kê runtime bổ sung).</span></li>
<ul><li><span class="lang-en">This is displayed as a separate tab when the query is run.</span><span class="lang-vi">Kết quả hiện ở một tab riêng khi query chạy xong.</span></li>
<li><span class="lang-en">or use</span><span class="lang-vi">hoặc dùng</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SET SHOWPLAN_ALL ON;
GO</span><span class="lang-vi">SET SHOWPLAN_ALL ON;
GO</span></pre></li>
<ul><ul><li><span class="lang-en">or SHOWPLAN_TEXT</span><span class="lang-vi">hoặc SHOWPLAN_TEXT</span></li>
</ul></ul><li><span class="lang-en">Neither version executes the statement, but displays execution information.</span><span class="lang-vi">Cả hai đều không thực thi câu lệnh mà chỉ hiển thị thông tin thực thi.</span></li>
</ul></ul><li><span class="lang-en">Live Query Statistics (updated while the query is running).</span><span class="lang-vi">Live Query Statistics (cập nhật ngay trong lúc query đang chạy).</span></li>
</ul><li><span class="lang-en">Execution plans run from the right to the left.</span><span class="lang-vi">Execution plans run from the right to the left.</span></li>
<ul><li><span class="lang-en">The arrow thickness represent number of rows.</span><span class="lang-vi">Độ dày mũi tên thể hiện số dòng.</span></li>
<ul><li><span class="lang-en">You can hover over them for more details.</span><span class="lang-vi">Bạn rê chuột lên đó để xem chi tiết.</span></li>
<li><span class="lang-en">More estimated rows = more memory reserved.</span><span class="lang-vi">Càng nhiều dòng ước tính thì càng nhiều memory được đặt trước.</span></li>
</ul><li><span class="lang-en">Note the degree of parallelism (also shown in properties).</span><span class="lang-vi">Để ý mức độ song song (degree of parallelism), cũng xem được trong properties.</span></li>
</ul><li><span class="lang-en">There are 3 main types of joins between tables:</span><span class="lang-vi">Có 3 kiểu join chính giữa các bảng:</span></li>
<ul><li><span class="lang-en">Nested Loops joins.</span><span class="lang-vi">Nested Loops join.</span></li>
<ul><li><span class="lang-en">Use when</span><span class="lang-vi">Use when</span></li>
<ul><li><span class="lang-en">Input1 is small.</span><span class="lang-vi">Input1 nhỏ.</span></li>
<li><span class="lang-en">Input2 is large.</span><span class="lang-vi">Input2 lớn.</span></li>
<li><span class="lang-en">Input2 is indexed on the join.</span><span class="lang-vi">Input2 có index trên cột join.</span></li>
</ul><li><span class="lang-en">Uses least I/O and fewest comparisons.</span><span class="lang-vi">Dùng ít I/O nhất và ít phép so sánh nhất.</span></li>
<li><span class="lang-en">It uses the top input (in the execution plan) and takes 1 row.</span><span class="lang-vi">Nó lấy input phía trên (trong execution plan) và lấy ra 1 dòng.</span></li>
<li><span class="lang-en">It then searches for matches rows in the bottom input.</span><span class="lang-vi">Rồi tìm các dòng khớp ở input phía dưới.</span></li>
</ul><li><span class="lang-en">Merge joins</span><span class="lang-vi">Merge join</span></li>
<ul><li><span class="lang-en">Use when</span><span class="lang-vi">Use when</span></li>
<ul><li><span class="lang-en">Input1 and Input 2 is not small.</span><span class="lang-vi">Input1 và Input2 đều không nhỏ.</span></li>
<li><span class="lang-en">Input1 and Input2 are sorted on their join – or if not, possibly when Input1 and Input2 are of a similar size. Then, the Sort might be worth the time compared with the Hash Join.</span><span class="lang-vi">Input1 và Input2 đã được sắp xếp theo cột join — hoặc nếu chưa, thì có thể dùng khi hai input có kích thước tương đương. Khi đó chi phí Sort có thể vẫn đáng so với Hash Join.</span></li>
</ul><li><span class="lang-en">Can be very fast.</span><span class="lang-vi">Có thể rất nhanh.</span></li>
</ul><li><span class="lang-en">Hash joins</span><span class="lang-vi">Hash join</span></li>
<ul><li><span class="lang-en">For large, unsorted, nonindexed inputs.</span><span class="lang-vi">Dành cho input lớn, chưa sắp xếp và không có index.</span></li>
<li><span class="lang-en">Also used in the middle of complex queries, as intermediate results are often not indexed or suitably sorted.</span><span class="lang-vi">Cũng được dùng ở giữa các query phức tạp, vì kết quả trung gian thường không có index và không được sắp xếp phù hợp.</span></li>
</ul></ul><li><span class="lang-en">In SQL Server 2017, a Batch mode Adaptive Join was introduced.</span><span class="lang-vi">SQL Server 2017 giới thiệu Batch mode Adaptive Join.</span></li>
<ul><li><span class="lang-en">This converts into a Hash Join or Nested Loops join after the first input has been scanned, when it uses Batch mode.</span><span class="lang-vi">Nó chuyển thành Hash Join hoặc Nested Loops join sau khi đã quét xong input đầu tiên, khi chạy ở batch mode.</span></li>
<li><span class="lang-en">More in topic 57.</span><span class="lang-vi">Xem thêm ở mục 57.</span></li>
</ul></ul></section>
<section id="s57-2"><h3><span class="n">57.</span> <span class="lang-en">identify problem areas in execution plans</span><span class="lang-vi">phát hiện điểm có vấn đề trong execution plan</span><a class="anch" href="#s57-2" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Are you using SELECT *?</span><span class="lang-vi">Bạn có đang dùng SELECT * không?</span></li>
<ul><li><span class="lang-en">Can you narrow down the columns? If so, maybe you can then use indexes.</span><span class="lang-vi">Có thu hẹp danh sách cột lại được không? Nếu được thì có thể tận dụng index.</span></li>
</ul><li><span class="lang-en">Have a look at the cost of each operation.</span><span class="lang-vi">Xem chi phí của từng thao tác.</span></li>
<ul><li><span class="lang-en">Is there one that can be improved?</span><span class="lang-vi">Có thao tác nào cải thiện được không?</span></li>
<ul><li><span class="lang-en">Is there a Sort? It's expensive – do you really need it? If so, could you have an Index which has already sorted on those columns?</span><span class="lang-vi">Có toán tử Sort không? Nó rất tốn kém — bạn có thực sự cần sắp xếp không? Nếu có, liệu có index nào đã sắp xếp sẵn theo các cột đó chưa?</span></li>
<li><span class="lang-en">Do you use parameters? If so, and the performance is based, can you WITH RECOMPILE the stored procedure, or use OPTION (RECOMPILE) for queries.</span><span class="lang-vi">Bạn có dùng tham số không? Nếu có và hiệu năng phụ thuộc vào chúng, hãy cân nhắc WITH RECOMPILE cho stored procedure, hoặc OPTION (RECOMPILE) cho query.</span></li>
</ul><li><span class="lang-en">Is there a Scan when you are using a WHERE?</span><span class="lang-vi">Có toán tử Scan trong khi bạn đang dùng WHERE không?</span></li>
<ul><li><span class="lang-en">If so, could a Seek be better? It may need an index.</span><span class="lang-vi">Nếu có, liệu Seek có tốt hơn không? Có thể cần thêm index.</span></li>
<li><span class="lang-en">Are you using a Heap? Do you need a clustered index?</span><span class="lang-vi">Bạn có đang dùng Heap không? Có cần clustered index không?</span></li>
<li><span class="lang-en">Could you use a SARGable predicate in the WHERE clause?</span><span class="lang-vi">Có thể viết lại predicate trong WHERE thành dạng SARGable không?</span></li>
<ul><li><span class="lang-en">e.g. don't use YEAR, use BETWEEN for dates.</span><span class="lang-vi">ví dụ đừng dùng YEAR, hãy dùng BETWEEN cho ngày tháng.</span></li>
<li><span class="lang-en">don't use LEFT – use LIKE for strings.</span><span class="lang-vi">đừng dùng LEFT — hãy dùng LIKE cho chuỗi.</span></li>
<li><span class="lang-en">don't use ISNULL(X, 'Y') function – use (X IS NULL or X = 'Y')</span><span class="lang-vi">đừng dùng hàm ISNULL(X, 'Y') — hãy viết (X IS NULL or X = 'Y')</span></li>
</ul></ul><li><span class="lang-en">Is there a RID Lookup or a Key Lookup Operator?</span><span class="lang-vi">Có toán tử RID Lookup hoặc Key Lookup không?</span></li>
<ul><li><span class="lang-en">If so, could you use an INCLUDE with the index? This writes the data into the index, but in a separate part of the index away from the Key – so it's quicker, but doesn't slow down the index much.</span><span class="lang-vi">Nếu có, bạn có thể dùng INCLUDE với index không? Cách này ghi dữ liệu vào index nhưng ở phần tách khỏi Key — nên nhanh hơn mà không làm index chậm đi nhiều.</span></li>
<ul><li><span class="lang-en">It's also useful for Unique indexes – INCLUDE columns are included in the Uniqueness test.</span><span class="lang-vi">Nó cũng hữu ích với unique index — các cột INCLUDE được tính vào phép kiểm tra tính duy nhất.</span></li>
</ul></ul><li><span class="lang-en">Are the field types too wide?</span><span class="lang-vi">Các kiểu dữ liệu có quá rộng không?</span></li>
<ul><li><span class="lang-en">This will increase the row size, increasing time to retrieve the data.</span><span class="lang-vi">Điều đó làm tăng kích thước dòng, khiến việc lấy dữ liệu lâu hơn.</span></li>
</ul></ul><li><span class="lang-en">Different loops</span><span class="lang-vi">Các kiểu vòng lặp khác nhau</span></li>
<ul><li><span class="lang-en">Are you using a Hash Join when, with some changes, a Merge Join or Nested Loop could be used?</span><span class="lang-vi">Bạn có đang dùng Hash Join trong khi chỉ cần vài thay đổi là dùng được Merge Join hoặc Nested Loop không?</span></li>
<ul><li><span class="lang-en">Maybe need an index?</span><span class="lang-vi">Có lẽ cần thêm index?</span></li>
</ul></ul><li><span class="lang-en">Are you using a cursor?</span><span class="lang-vi">Bạn có đang dùng cursor không?</span></li>
<ul><li><span class="lang-en">Use a set-based operation instead.</span><span class="lang-vi">Use a set-based operation instead.</span></li>
</ul></ul></section>
<section id="s57-3"><h3><span class="n">57.</span> <span class="lang-en">extract query plans from the Query Store</span><span class="lang-vi">trích xuất query plan từ Query Store</span><a class="anch" href="#s57-3" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">To use in T-SQL:</span><span class="lang-vi">Dùng bằng T-SQL:</span></li>
<ul><li><span class="lang-en">The query plans are stored in:</span><span class="lang-vi">Các query plan được lưu trong:</span></li>
<ul><li><code><span class="lang-en">SELECT * FROM sys.query_store_plan</span><span class="lang-vi">SELECT * FROM sys.query_store_plan</span></code></li>
</ul><li><span class="lang-en">Statistics about it can be found:</span><span class="lang-vi">Thống kê về chúng nằm ở:</span></li>
<ul><li><code><span class="lang-en">SELECT * FROM sys.query_store_runtime_stats</span><span class="lang-vi">SELECT * FROM sys.query_store_runtime_stats</span></code></li>
</ul><li><span class="lang-en">However, you can see the queries:</span><span class="lang-vi">Còn để xem chính các câu query:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT Txt.query_text_id, Txt.query_sql_text, Qry.*
FROM sys.query_store_query AS Qry
INNER JOIN sys.query_store_query_text AS Txt
ON Qry.query_text_id = Txt.query_text_id ;</span><span class="lang-vi">SELECT Txt.query_text_id, Txt.query_sql_text, Qry.*
FROM sys.query_store_query AS Qry
INNER JOIN sys.query_store_query_text AS Txt
ON Qry.query_text_id = Txt.query_text_id ;</span></pre></li>
</ul></ul><li><span class="lang-en">To use in SSMS:</span><span class="lang-vi">Dùng trong SSMS:</span></li>
<ul><li><span class="lang-en">Note – you can click on &quot;Configure&quot; to change the time period. You can also click on &quot;Track the selected query in a new window&quot;.</span><span class="lang-vi">Lưu ý — bạn có thể bấm &quot;Configure&quot; để đổi khoảng thời gian. Bạn cũng có thể bấm &quot;Track the selected query in a new window&quot;.</span></li>
<li><span class="lang-en">Go to the database – Query Stores:</span><span class="lang-vi">Vào database – Query Stores:</span></li>
<ul><li><span class="lang-en">Regressed Queries</span><span class="lang-vi">Regressed Queries</span></li>
<ul><li><span class="lang-en">Have your query speed got worse? Have a look at Duration, CPU Time, Logical Reads, Physical Reads, and more</span><span class="lang-vi">Query của bạn có chậm đi không? Xem Duration, CPU Time, Logical Reads, Physical Reads và nhiều chỉ số khác</span></li>
</ul><li><span class="lang-en">Overall Resource Consumption</span><span class="lang-vi">Overall Resource Consumption</span></li>
<ul><li><span class="lang-en">Are the resources used more during particular days, or daily/night?</span><span class="lang-vi">Tài nguyên bị dùng nhiều hơn vào những ngày cụ thể nào, hay theo ngày/đêm?</span></li>
</ul><li><span class="lang-en">Top Resource Consuming Queries</span><span class="lang-vi">Top Resource Consuming Queries</span></li>
<ul><li><span class="lang-en">The most extreme values in Duration, Execution Count, CPU Time etc.</span><span class="lang-vi">Các giá trị cực đoan nhất về Duration, Execution Count, CPU Time...</span></li>
</ul><li><span class="lang-en">Queries with Forced Plans</span><span class="lang-vi">Queries with Forced Plans</span></li>
<li><span class="lang-en">Queries with High Variation</span><span class="lang-vi">Queries with High Variation</span></li>
<ul><li><span class="lang-en">Varied amount of duration, CPU time, I/O and memory.</span><span class="lang-vi">Mức dao động lớn về thời lượng, CPU time, I/O và memory.</span></li>
</ul><li><span class="lang-en">Queries Wait Statistics</span><span class="lang-vi">Queries Wait Statistics</span></li>
<ul><li><span class="lang-en">You can click on the categories (e.g. High Memory, Lock, Buffer I/O or CPU waits) to get detail on that category.</span><span class="lang-vi">Bạn bấm vào từng nhóm (ví dụ High Memory, Lock, Buffer I/O hay CPU wait) để xem chi tiết nhóm đó.</span></li>
<li><span class="lang-en">Data from sys.query_store_wait_stats</span><span class="lang-vi">Dữ liệu lấy từ sys.query_store_wait_stats</span></li>
</ul><li><span class="lang-en">Tracked Queries</span><span class="lang-vi">Tracked Queries</span></li>
<ul><li><span class="lang-en">Track individual queries – you need to enter the Query ID.</span><span class="lang-vi">Theo dõi từng query riêng lẻ — bạn cần nhập Query ID.</span></li>
<li><span class="lang-en">You can force query to use a particular plan (&quot;Force Plan&quot;)</span><span class="lang-vi">Bạn có thể ép query dùng một plan cụ thể (&quot;Force Plan&quot;)</span></li>
<li><span class="lang-en">Circle = query completed. Square = cancelled by client. Triangle = Failed due to an exception aborted execution.</span><span class="lang-vi">Hình tròn = query hoàn tất. Hình vuông = bị client hủy. Hình tam giác = thất bại do exception làm ngắt thực thi.</span></li>
<li><span class="lang-en">Look for any missing indexes in the Query view.</span><span class="lang-vi">Tìm xem có index nào bị thiếu trong Query view không.</span></li>
</ul></ul></ul></ul></section>
<section id="s57a"><h3><span class="n">57a.</span> <span class="lang-en">assess database performance by using Intelligent Insights for Azure SQL Database</span><span class="lang-vi">đánh giá hiệu năng database bằng Intelligent Insights cho Azure SQL Database</span><a class="anch" href="#s57a" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">and Managed Instance</span><span class="lang-vi">và Managed Instance</span></li>
<li><span class="lang-en">Not available in some regions</span><span class="lang-vi">Không có ở một số region</span></li>
<ul><li><span class="lang-en">West Europe, North Europe, West US 1 and East US 1.</span><span class="lang-vi">West Europe, North Europe, West US 1 và East US 1.</span></li>
<li><span class="lang-en">Not available for VMs.</span><span class="lang-vi">Không dùng được cho VM.</span></li>
</ul><li><span class="lang-en">Compares current database workload (last hour) with the last 7-days.</span><span class="lang-vi">So sánh workload hiện tại của database (1 giờ gần nhất) với 7 ngày trước đó.</span></li>
<ul><li><span class="lang-en">e.g. Most repeated and largest queries.</span><span class="lang-vi">ví dụ các query lặp nhiều nhất và nặng nhất.</span></li>
<li><span class="lang-en">Uses data from the Query Store (see topic 48), which is enabled by default in Azure SQL Database.</span><span class="lang-vi">Dùng dữ liệu từ Query Store (xem mục 48), vốn được bật mặc định trên Azure SQL Database.</span></li>
</ul><li><span class="lang-en">Monitors using Artificial Intelligence operational thresholds, detects issues with high wait times, critical exceptions, and query parameterizations</span><span class="lang-vi">Giám sát bằng các ngưỡng vận hành do trí tuệ nhân tạo xác định, phát hiện vấn đề về thời gian chờ cao, exception nghiêm trọng và cách tham số hóa query</span></li>
<ul><li><span class="lang-en">Impacted metrics are increase to query duration, excessive waiting, timed-out or errored-out requests.</span><span class="lang-vi">Các chỉ số bị ảnh hưởng gồm thời lượng query tăng, chờ quá lâu, request bị time-out hoặc lỗi.</span></li>
<li><span class="lang-en">Includes a “root cause analysis” in a readable form. May also contain a recommendation.</span><span class="lang-vi">Bao gồm phần &quot;root cause analysis&quot; trình bày dễ đọc. Có thể kèm cả khuyến nghị.</span></li>
</ul><li><span class="lang-en">Can be streamed to:</span><span class="lang-vi">Có thể stream tới:</span></li>
<ul><li><span class="lang-en">Log Analytics workspace, can be used with Azure SQL Analytics (cloud-based only monitoring solution) to see insights in the Azure portal. The typical way to view insights.</span><span class="lang-vi">Log Analytics workspace — dùng cùng Azure SQL Analytics (giải pháp giám sát chỉ chạy trên cloud) để xem insight ngay trong Azure portal. Đây là cách xem thông dụng nhất.</span></li>
<ul><li class="stale"><span class="lang-en"><b>No longer &quot;the typical way&quot;.</b> Azure SQL Analytics (preview) is a legacy Azure Monitor solution: its documentation is archived, Microsoft states it is no longer in active development, and in the portal it now sits under <b>Legacy solutions</b> in the Log Analytics workspace. Prefer <b>database watcher</b> (topic 48a) for estate-level Azure SQL monitoring.</span><span class="lang-vi"><b>Không còn là &quot;cách thông dụng nhất&quot;.</b> Azure SQL Analytics (preview) giờ là solution cũ của Azure Monitor: tài liệu đã bị archive, Microsoft ghi rõ nó không còn được phát triển tiếp, và trong portal nó nằm dưới mục <b>Legacy solutions</b> của Log Analytics workspace. Nên dùng <b>database watcher</b> (mục 48a) để giám sát Azure SQL ở quy mô estate.</span></li>
<li><span class="lang-en">To add Azure SQL Analytics, go to Home in the Azure portal, click “+Create a resource”, and search for “Azure SQL analytics”</span><span class="lang-vi">Để thêm Azure SQL Analytics, vào Home trong Azure portal, bấm &quot;+Create a resource&quot; và tìm &quot;Azure SQL analytics&quot;</span></li>
<li><span class="lang-en">Can query using the Kusto Query Language.</span><span class="lang-vi">Truy vấn được bằng Kusto Query Language.</span></li>
</ul><li><span class="lang-en">Azure Event Hubs, for custom monitoring and alerting</span><span class="lang-vi">Azure Event Hubs, phục vụ giám sát và cảnh báo tùy chỉnh</span></li>
<ul><li><span class="lang-en">Stored in Avro format, a binary JSON format</span><span class="lang-vi">Lưu ở định dạng Avro — một dạng JSON nhị phân</span></li>
</ul><li><span class="lang-en">Azure Storage, for custom app development.</span><span class="lang-vi">Azure Storage, phục vụ phát triển ứng dụng tùy chỉnh.</span></li>
<ul><li><span class="lang-en">Stored in Extended Events format.</span><span class="lang-vi">Lưu ở định dạng Extended Events.</span></li>
</ul></ul><li><span class="lang-en">How to connect</span><span class="lang-vi">Cách kết nối</span></li>
<ul><li><span class="lang-en">Connect the Intelligent Insights to the log. OR</span><span class="lang-vi">Nối Intelligent Insights vào log. HOẶC</span></li>
<li><span class="lang-en">Go to the database in the Azure Portal, and go to Monitoring – Diagnostic settings – Add.</span><span class="lang-vi">Vào database trong Azure Portal, rồi vào Monitoring – Diagnostic settings – Add.</span></li>
<ul><li><span class="lang-en">Add all the Category Details (log and metric), and in “Destination details” check “Send to Log Analytics workspace”.</span><span class="lang-vi">Add all the Category Details (log and metric), and in “Destination details” check “Send to Log Analytics workspace”.</span></li>
</ul></ul><li><span class="lang-en">To view Intelligent Insights:</span><span class="lang-vi">Để xem Intelligent Insights:</span></li>
<ul><li><span class="lang-en">Go to Azure Portal – database – Query Performance Insight</span><span class="lang-vi">Vào Azure Portal – database – Query Performance Insight</span></li>
</ul><li><span class="lang-en">To view more Intelligent Insights:</span><span class="lang-vi">Để xem thêm Intelligent Insights:</span></li>
<ul><li><span class="lang-en">Go to the Log Analytics workspace – Workspace summary</span><span class="lang-vi">Vào Log Analytics workspace – Workspace summary</span></li>
</ul><li><span class="lang-en">Intelligent Insights looks for things which affect Database performance:</span><span class="lang-vi">Intelligent Insights tìm những yếu tố ảnh hưởng tới hiệu năng database:</span></li>
<ul><li><span class="lang-en">Reaching resource limits</span><span class="lang-vi">Chạm giới hạn tài nguyên</span></li>
<ul><li><span class="lang-en">CPU reaching resource limits for Managed Instance, and</span><span class="lang-vi">CPU chạm giới hạn với Managed Instance, và</span></li>
<li><span class="lang-en">DTUs, worker threads and login sessions reaching resource limits for Azure SQL Database.</span><span class="lang-vi">DTU, worker thread và login session chạm giới hạn với Azure SQL Database.</span></li>
</ul><li><span class="lang-en">Workload increase</span><span class="lang-vi">Workload tăng đột biến</span></li>
<li><span class="lang-en">Memory pressure</span><span class="lang-vi">Áp lực bộ nhớ</span></li>
<ul><li><span class="lang-en">Workers (request) waiting for memory allocations</span><span class="lang-vi">Worker (request) phải chờ được cấp phát memory</span></li>
</ul><li><span class="lang-en">Data locking</span><span class="lang-vi">Khóa dữ liệu (data locking)</span></li>
<li><span class="lang-en">Increase Maximum Degree of Parallelism option (MAXDOP)</span><span class="lang-vi">Tăng tùy chọn Maximum Degree of Parallelism (MAXDOP)</span></li>
<ul><li><span class="lang-en">When there are more Parallel workers than there should have been.</span><span class="lang-vi">Khi số worker chạy song song nhiều hơn mức đáng ra phải có.</span></li>
</ul><li><span class="lang-en">Missing indexes</span><span class="lang-vi">Index bị thiếu</span></li>
<li><span class="lang-en">New queries affected performance.</span><span class="lang-vi">Query mới làm ảnh hưởng hiệu năng.</span></li>
<li><span class="lang-en">Increased Wait Statistic.</span><span class="lang-vi">Wait Statistic tăng lên.</span></li>
<li><span class="lang-en">Multiple threads using the same TempDB resource.</span><span class="lang-vi">Nhiều thread cùng dùng chung một tài nguyên TempDB.</span></li>
<li><span class="lang-en">For DTU-model, shortage of available eDTUs in the elastic pool.</span><span class="lang-vi">Với mô hình DTU: thiếu eDTU khả dụng trong elastic pool.</span></li>
<li><span class="lang-en">New plan, or change in existing plan.</span><span class="lang-vi">Plan mới, hoặc plan cũ bị thay đổi.</span></li>
<li><span class="lang-en">Pricing tier downgrade.</span><span class="lang-vi">Hạ pricing tier.</span></li>
</ul></ul></section>
<section id="s58"><h3><span class="n">58.</span> <span class="lang-en">implement index maintenance tasks</span><span class="lang-vi">triển khai các tác vụ bảo trì index</span><a class="anch" href="#s58" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Missing indexes can be found in:</span><span class="lang-vi">Index bị thiếu có thể tìm thấy trong:</span></li>
<ul><li><code><span class="lang-en">SELECT * FROM sys.dm_db_missing_index_details</span><span class="lang-vi">SELECT * FROM sys.dm_db_missing_index_details</span></code></li>
</ul><li><span class="lang-en">In Azure SQL Database, in the Azure Portal – you can go to Intelligent Performance – Automatic tuning.</span><span class="lang-vi">Với Azure SQL Database, trong Azure Portal bạn vào Intelligent Performance – Automatic tuning.</span></li>
<ul><li><span class="lang-en">You can click on a “Create index” or “Drop index” and implement it.</span><span class="lang-vi">Bạn bấm vào một gợi ý &quot;Create index&quot; hoặc &quot;Drop index&quot; và áp dụng nó.</span></li>
<li><span class="lang-en">You cannot do it in Azure SQL MI.</span><span class="lang-vi">Bạn không làm được việc này trên Azure SQL MI.</span></li>
</ul><li><span class="lang-en">For VMs, you can also use the Database Engine Tuning Advisor.</span><span class="lang-vi">Với VM, bạn còn dùng được Database Engine Tuning Advisor.</span></li>
<ul><li><span class="lang-en">You open it by going to Tools – Database Engine Tuning Advisor.</span><span class="lang-vi">Mở nó bằng cách vào Tools – Database Engine Tuning Advisor.</span></li>
<li><span class="lang-en">You then need to give it details such as the Query Store or a T-SQL file (.sql extension) with your workload.</span><span class="lang-vi">Rồi bạn cung cấp cho nó dữ liệu như Query Store hoặc một file T-SQL (đuôi .sql) chứa workload của bạn.</span></li>
<li><span class="lang-en">You can then click &quot;Start Analysis&quot;.</span><span class="lang-vi">Sau đó bấm &quot;Start Analysis&quot;.</span></li>
</ul></ul></section>
<section id="s59"><h3><span class="n">59.</span> <span class="lang-en">implement statistics maintenance tasks</span><span class="lang-vi">triển khai các tác vụ bảo trì statistics</span><a class="anch" href="#s59" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Statistics are used to create query plans to improve the speed of queries.</span><span class="lang-vi">Statistics được dùng để tạo query plan nhằm tăng tốc query.</span></li>
<ul><li><span class="lang-en">The statistics contain information about the distribution of values in tables or indexed views’ columns.</span><span class="lang-vi">Statistics chứa thông tin về phân bố giá trị trong các cột của bảng hoặc indexed view.</span></li>
<li><span class="lang-en">It uses it to estimate the cardinality, or number of rows, in a result.</span><span class="lang-vi">SQL Server dùng nó để ước lượng cardinality — tức số dòng — trong kết quả.</span></li>
<li><span class="lang-en">This enables the Query Optimizer to create better quality plans (e.g. seek vs scan).</span><span class="lang-vi">Nhờ đó Query Optimizer tạo được plan chất lượng hơn (ví dụ chọn seek thay vì scan).</span></li>
</ul><li><span class="lang-en">Usually, the Query Optimizer determines when statistics might be out of date and then updates them. However, you may wish to manually update them if:</span><span class="lang-vi">Thông thường Query Optimizer tự xác định khi nào statistics có thể lỗi thời và tự cập nhật. Tuy nhiên bạn có thể muốn cập nhật thủ công khi:</span></li>
<ul><li><span class="lang-en">Query execution times are slow,</span><span class="lang-vi">Thời gian thực thi query chậm,</span></li>
<li><span class="lang-en">Insert operations occur on ascending or descending key columns, such as IDENTITY or timestamp columns.</span><span class="lang-vi">Insert operations occur on ascending or descending key columns, such as IDENTITY or timestamp columns.</span></li>
<li><span class="lang-en">After maintenance operations, such as a bulk insert (but not rebuilding or reorganizing an index, as they do not change the data distribution).</span><span class="lang-vi">Sau các thao tác bảo trì như bulk insert (nhưng KHÔNG cần sau rebuild hay reorganize index, vì chúng không làm thay đổi phân bố dữ liệu).</span></li>
</ul><li><span class="lang-en">The stored procedure sp_updatestats updates statistics for all user-defined and internal tables.</span><span class="lang-vi">Stored procedure sp_updatestats cập nhật statistics cho mọi bảng người dùng và bảng nội bộ.</span></li>
<li><span class="lang-en">To update a particular table or indexed view, you can use:</span><span class="lang-vi">Để cập nhật cho một bảng hoặc indexed view cụ thể, dùng:</span></li>
<ul><li><code><span class="lang-en">UPDATE STATISTICS Schema.Table</span><span class="lang-vi">UPDATE STATISTICS Schema.Table</span></code></li>
<li><span class="lang-en">You can add:</span><span class="lang-vi">Bạn có thể thêm:</span></li>
<ul><li><span class="lang-en">WITH FULLSCAN – This scans all of rows. It is the same as SAMPLE 100 PERCENT</span><span class="lang-vi">WITH FULLSCAN – This scans all of rows. It is the same as SAMPLE 100 PERCENT</span></li>
<li><span class="lang-en">WITH SAMPLE X PERCENT or ROWS. This is the approximately percentage of number of rows to be used for updating statistics.</span><span class="lang-vi">WITH SAMPLE X PERCENT or ROWS. This is the approximately percentage of number of rows to be used for updating statistics.</span></li>
<li><span class="lang-en">WITH RESAMPLE – its most recent sample rate.</span><span class="lang-vi">WITH RESAMPLE – its most recent sample rate.</span></li>
</ul><li><span class="lang-en">You can append this with</span><span class="lang-vi">Bạn có thể nối thêm</span></li>
<ul><li><span class="lang-en">PERSIST_SAMPLE_PERCENT = ON or OFF – If ON, this will then be the default for future statistics updates (unless you specify the number of rows).</span><span class="lang-vi">PERSIST_SAMPLE_PERCENT = ON hoặc OFF — nếu ON, tỉ lệ mẫu này thành mặc định cho các lần cập nhật statistics sau (trừ khi bạn chỉ định số dòng cụ thể).</span></li>
</ul></ul></ul></section>
<section id="s60"><h3><span class="n">60.</span> <span class="lang-en">evaluate database health using DMVs</span><span class="lang-vi">đánh giá sức khỏe database bằng DMV</span><a class="anch" href="#s60" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">See topic 61.</span><span class="lang-vi">Xem mục 61.</span></li>
<li><span class="lang-en">To use database DMVs, you need to have VIEW DATABASE STATE permission on the database.</span><span class="lang-vi">Để dùng DMV cấp database, bạn cần quyền VIEW DATABASE STATE trên database đó.</span></li>
<ul><li><span class="lang-en">It is not enough to have VIEW SERVER STATE.</span><span class="lang-vi">Chỉ có VIEW SERVER STATE là KHÔNG đủ.</span></li>
</ul><li><span class="lang-en">Overall resource usage:</span><span class="lang-vi">Mức sử dụng tài nguyên tổng thể:</span></li>
<ul><li><code><span class="lang-en">SELECT * from sys.dm_db_resource_stats –</span><span class="lang-vi">SELECT * from sys.dm_db_resource_stats –</span></code></li>
<ul><li><span class="lang-en">CPU, IO and memory</span><span class="lang-vi">CPU, IO và memory</span></li>
<li><span class="lang-en">SLO is the Service Level Objective, which includes deployment option, service tier, hard and compute amount.</span><span class="lang-vi">SLO là Service Level Objective, bao gồm phương án triển khai, service tier, phần cứng và lượng compute.</span></li>
<li><span class="lang-en">You get a row for every 15 seconds for about the past hour.</span><span class="lang-vi">Bạn nhận được một dòng cho mỗi 15 giây, trong khoảng một giờ gần nhất.</span></li>
<li><span class="lang-en">Use sys.server_resource_stats for MI.</span><span class="lang-vi">Use sys.server_resource_stats for MI.</span></li>
</ul><li><code><span class="lang-en">SELECT * from sys.dm_user_db_resource_governance</span><span class="lang-vi">SELECT * from sys.dm_user_db_resource_governance</span></code></li>
<ul><li><span class="lang-en">Storage in the current database or elastic pool.</span><span class="lang-vi">Dung lượng lưu trữ của database hiện tại hoặc của elastic pool.</span></li>
<li><span class="lang-en">In MI only, you can also use sys.dm_instance_resource_governance ).</span><span class="lang-vi">Chỉ trên MI, bạn còn dùng được sys.dm_instance_resource_governance.</span></li>
</ul><li><code><span class="lang-en">SELECT * FROM sys.dm_os_job_object</span><span class="lang-vi">SELECT * FROM sys.dm_os_job_object</span></code></li>
<ul><li><span class="lang-en">CPU, memory and I/O resource at the SQL Server level.</span><span class="lang-vi">Tài nguyên CPU, memory và I/O ở mức SQL Server.</span></li>
</ul><li><code><span class="lang-en">SELECT * FROM sys.dm_io_virtual_file_stats(null, null)</span><span class="lang-vi">SELECT * FROM sys.dm_io_virtual_file_stats(null, null)</span></code></li>
<ul><li><span class="lang-en">I/O statistics for data and log files</span><span class="lang-vi">Thống kê I/O cho file data và file log</span></li>
</ul><li><code><span class="lang-en">SELECT * FROM sys.dm_os_performance_counters</span><span class="lang-vi">SELECT * FROM sys.dm_os_performance_counters</span></code></li>
<ul><li><span class="lang-en">Performance counter information, including:</span><span class="lang-vi">Thông tin performance counter, gồm:</span></li>
<ul><li><span class="lang-en">SQL Server: Databases</span><span class="lang-vi">SQL Server: Databases</span></li>
<li><span class="lang-en">SQL Server: General Statistics</span><span class="lang-vi">SQL Server: General Statistics</span></li>
<li><span class="lang-en">SQL Server: Query Store</span><span class="lang-vi">SQL Server: Query Store</span></li>
<li><span class="lang-en">SQL Server: SQL Statistics</span><span class="lang-vi">SQL Server: SQL Statistics</span></li>
</ul></ul></ul><li><span class="lang-en">Waiting on resources:</span><span class="lang-vi">Đang chờ tài nguyên:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT * FROM sys.dm_os_wait_stats OR
SELECT * FROM sys.dm_db_wait_stats (Azure SQL Database / MI)</span><span class="lang-vi">SELECT * FROM sys.dm_os_wait_stats OR
SELECT * FROM sys.dm_db_wait_stats (Azure SQL Database / MI)</span></pre></li>
<ul><li><span class="lang-en">Returns information about all the waits encountered by threads that executed.</span><span class="lang-vi">Trả về thông tin về mọi lần chờ mà các thread đã thực thi gặp phải.</span></li>
<li><span class="lang-en">Top wait types</span><span class="lang-vi">Các wait type hàng đầu</span></li>
<ul><li><span class="lang-en">Governor</span><span class="lang-vi">Governor</span></li>
<ul><li><span class="lang-en">LOG_RATE_GOVERNOR – waits for Azure SQL Database</span><span class="lang-vi">LOG_RATE_GOVERNOR — chờ ở Azure SQL Database</span></li>
<li><span class="lang-en">POOL_LOG_RATE_GOVERNOR – Elastic Pools</span><span class="lang-vi">POOL_LOG_RATE_GOVERNOR — Elastic Pool</span></li>
<li><span class="lang-en">INSTANCE_LOG_GOVERNOR – MI waits</span><span class="lang-vi">INSTANCE_LOG_GOVERNOR — chờ ở MI</span></li>
<li><span class="lang-en">RBIO* - Hyperscale log governance.</span><span class="lang-vi">RBIO* — log governance của Hyperscale.</span></li>
<li><span class="lang-en">HADR_THROTTLE_LOG_RATE – Business Critical and geo- replication latency</span><span class="lang-vi">HADR_THROTTLE_LOG_RATE — độ trễ ở Business Critical và geo-replication</span></li>
</ul><li><span class="lang-en">IO</span><span class="lang-vi">IO</span></li>
<ul><li><span class="lang-en">PAGEIOLAATCH_* - data file I/O issues</span><span class="lang-vi">PAGEIOLATCH_* — vấn đề I/O của file data</span></li>
<li><span class="lang-en">PAGELATCH_* - tempdb I/O issues</span><span class="lang-vi">PAGELATCH_* — vấn đề I/O của tempdb</span></li>
<li><span class="lang-en">WRITELOG – transaction log I/O issues</span><span class="lang-vi">WRITELOG — vấn đề I/O của transaction log</span></li>
</ul><li><span class="lang-en">Memory Grant Wait performance issues</span><span class="lang-vi">Vấn đề hiệu năng do chờ memory grant</span></li>
<ul><li><span class="lang-en">RESOURCE_SEMAPHORE – waiting for memory to become available</span><span class="lang-vi">RESOURCE_SEMAPHORE — đang chờ có memory trống</span></li>
</ul><li><span class="lang-en">Parallel</span><span class="lang-vi">Song song</span></li>
<ul><li><span class="lang-en">CXPACKET – Max Degree of Parallelism may be too high, or indexes may needed to be created.</span><span class="lang-vi">CXPACKET — Max Degree of Parallelism có thể đang quá cao, hoặc cần tạo thêm index.</span></li>
<li><span class="lang-en">SOS_SCHEDULER_YIELD – high CPU utilization, maybe caused by missing indexes – often seen with CXPACKET waits.</span><span class="lang-vi">SOS_SCHEDULER_YIELD — CPU cao, có thể do thiếu index — thường xuất hiện cùng CXPACKET.</span></li>
</ul></ul></ul><li><span class="lang-en">Possible blocking</span><span class="lang-vi">Có thể đang bị blocking</span></li>
<ul><li><code><span class="lang-en">SELECT * FROM sys.dm_exec_requests</span><span class="lang-vi">SELECT * FROM sys.dm_exec_requests</span></code></li>
<ul><li><span class="lang-en">Active queries, and what resource they are waiting on.</span><span class="lang-vi">Các query đang chạy và tài nguyên chúng đang chờ.</span></li>
</ul><li><code><span class="lang-en">SELECT * FROM sys.dm_os_waiting_tasks</span><span class="lang-vi">SELECT * FROM sys.dm_os_waiting_tasks</span></code></li>
<ul><li><span class="lang-en">Wait types for a particular task for a specific query.</span><span class="lang-vi">Wait type của một task cụ thể ứng với một query cụ thể.</span></li>
</ul></ul></ul></ul></section>
<section id="s60-2"><h3><span class="n">60.</span> <span class="lang-en">evaluate server health using DMVs</span><span class="lang-vi">đánh giá sức khỏe server bằng DMV</span><a class="anch" href="#s60-2" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">See topic 61.</span><span class="lang-vi">Xem mục 61.</span></li>
<li><span class="lang-en">To use Server-scoped DMVs, you need VIEW SERVER STATE permission on the server.</span><span class="lang-vi">Để dùng DMV phạm vi server, bạn cần quyền VIEW SERVER STATE trên server.</span></li>
<li><span class="lang-en">In addition:</span><span class="lang-vi">Ngoài ra:</span></li>
<ul><li><code><span class="lang-en">SELECT * from sys.databases</span><span class="lang-vi">SELECT * from sys.databases</span></code></li>
<ul><li><span class="lang-en">msdb, tempdb and model are not listed in Azure SQL Database.</span><span class="lang-vi">msdb, tempdb và model không xuất hiện trong Azure SQL Database.</span></li>
</ul><li><code><span class="lang-en">SELECT * from sys.objects</span><span class="lang-vi">SELECT * from sys.objects</span></code></li>
<ul><li><span class="lang-en">All tables, queries and other objects.</span><span class="lang-vi">Mọi bảng, query và object khác.</span></li>
</ul><li><code><span class="lang-en">SELECT * FROM sys.dm_os_schedulers where STATUS = 'VISIBLE ONLINE';</span><span class="lang-vi">SELECT * FROM sys.dm_os_schedulers where STATUS = 'VISIBLE ONLINE';</span></code></li>
<ul><li><span class="lang-en">Shows the vCores.</span><span class="lang-vi">Hiển thị số vCore.</span></li>
</ul><li><code><span class="lang-en">SELECT SERVERPROPERTY('EngineEdition');</span><span class="lang-vi">SELECT SERVERPROPERTY('EngineEdition');</span></code></li>
<ul><li><span class="lang-en">Returns 5 for SQL Database, 8 for Managed Instance, and &lt;5 for on-prem/VM.</span><span class="lang-vi">Trả về 5 nếu là SQL Database, 8 nếu là Managed Instance, và nhỏ hơn 5 nếu là on-prem/VM.</span></li>
</ul></ul></ul></section>
<section id="s60-3"><h3><span class="n">60.</span> <span class="lang-en">perform database consistency checks by using DBCC</span><span class="lang-vi">kiểm tra tính nhất quán của database bằng DBCC</span><a class="anch" href="#s60-3" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">DBCC CHECKDB checks the logical and physical integrity of all objects in a specific database. It:</span><span class="lang-vi">DBCC CHECKDB checks the logical and physical integrity of all objects in a specific database. It:</span></li>
<ul><li><span class="lang-en">Runs DBCC CHECKALLOC, which checks the consistency of disk space allocation structures</span><span class="lang-vi">Chạy DBCC CHECKALLOC — kiểm tra tính nhất quán của các cấu trúc cấp phát dung lượng đĩa</span></li>
<li><span class="lang-en">Runs DBCC CHECKTABLE for all tables and index views. The DBCC checks the integrity of all pages and structures in a particular table or index view, including:</span><span class="lang-vi">Chạy DBCC CHECKTABLE cho mọi bảng và indexed view. DBCC này kiểm tra tính toàn vẹn của mọi page và cấu trúc trong một bảng hoặc indexed view, gồm:</span></li>
<ul><li><span class="lang-en">Data pages are correctly linked.</span><span class="lang-vi">Các data page được liên kết đúng.</span></li>
<li><span class="lang-en">Indexes are in the correct sort order.</span><span class="lang-vi">Index đúng thứ tự sắp xếp.</span></li>
<li><span class="lang-en">Every row in a table has a matching row in a nonclustered index (and the other way round), and is in the correct partition.</span><span class="lang-vi">Mọi dòng trong bảng đều có dòng tương ứng trong nonclustered index (và ngược lại), và nằm đúng partition.</span></li>
<li><span class="lang-en">DBCC CHECKTABLE ('TableName' OR 'ViewName') checks a table/view (Note: it is a string.)</span><span class="lang-vi">DBCC CHECKTABLE ('TableName' OR 'ViewName') checks a table/view (Note: it is a string.)</span></li>
</ul><li><span class="lang-en">Runs DBCC CHECKCATALOG which checks for catalog consistency, using an internal database snapshot to provide transaction consistency to perform these checks.</span><span class="lang-vi">Chạy DBCC CHECKCATALOG — kiểm tra tính nhất quán của catalog, dùng một database snapshot nội bộ để đảm bảo nhất quán giao dịch khi kiểm tra.</span></li>
<ul><li><span class="lang-en">Does not work on tempdb or Filestream data (binary large objects or BLOBs on the file system).</span><span class="lang-vi">Không hoạt động trên tempdb hay dữ liệu Filestream (binary large object hay BLOB nằm trên file system).</span></li>
<li><code><span class="lang-en">DBCC CHECKCATALOG checks the current database.</span><span class="lang-vi">DBCC CHECKCATALOG checks the current database.</span></code></li>
<li><span class="lang-en">DBCC CHECKCATALOG (NameOfDatabase) checks a particular database. (Note: it is not a string.)</span><span class="lang-vi">DBCC CHECKCATALOG (NameOfDatabase) checks a particular database. (Note: it is not a string.)</span></li>
</ul><li><span class="lang-en">Validates the contents of every indexed view in the database, and link-level consistency between table metadata and file system directories and files.</span><span class="lang-vi">Kiểm định nội dung của mọi indexed view trong database, và tính nhất quán ở mức liên kết giữa metadata của bảng với thư mục và tệp trên file system.</span></li>
<li><code><span class="lang-en">DBCC CHECKDB syntax is similar as DBCC CHECKCATALOG.</span><span class="lang-vi">DBCC CHECKDB syntax is similar as DBCC CHECKCATALOG.</span></code></li>
</ul></ul></section>
<section id="s60-4"><h3><span class="n">60.</span> <span class="lang-en">perform database consistency checks by using DBCC</span><span class="lang-vi">kiểm tra tính nhất quán của database bằng DBCC</span><a class="anch" href="#s60-4" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Arguments:</span><span class="lang-vi">Các đối số:</span></li>
<ul><li><span class="lang-en">Relevant Database</span><span class="lang-vi">Database tương ứng</span></li>
<ul><li><code><span class="lang-en">DBCC CHECKDB (MyDatabase)</span><span class="lang-vi">DBCC CHECKDB (MyDatabase)</span></code></li>
<ul><li><span class="lang-en">Note the lack of quote marks.</span><span class="lang-vi">Lưu ý là không có dấu nháy.</span></li>
</ul><li><code><span class="lang-en">DBCC CHECKDB or DBCC CHECKDB(0)</span><span class="lang-vi">DBCC CHECKDB or DBCC CHECKDB(0)</span></code></li>
<ul><li><span class="lang-en">The zero indicates that the current database should be used.</span><span class="lang-vi">Số 0 nghĩa là dùng database hiện tại.</span></li>
</ul></ul><li><span class="lang-en">What it should do?</span><span class="lang-vi">Nó nên làm gì?</span></li>
<ul><li><code><span class="lang-en">DBCC CHECKDB (0, NOINDEX)</span><span class="lang-vi">DBCC CHECKDB (0, NOINDEX)</span></code></li>
<ul><li><span class="lang-en">Detect errors only. Smaller execution time, as it does not do intensive checks of nonclustered indexes for user tables</span><span class="lang-vi">Chỉ phát hiện lỗi. Thời gian chạy ngắn hơn vì không kiểm tra kỹ các nonclustered index của bảng người dùng</span></li>
</ul><li><code><span class="lang-en">DBCC CHECKDB (0, REPAIR_REBUILD)</span><span class="lang-vi">DBCC CHECKDB (0, REPAIR_REBUILD)</span></code></li>
<ul><li><span class="lang-en">Do only repairs which have no chance of data loss. Includes quick repairs (e.g. missing rows in non-clustered indexes), and time-consuming repairs (building an index).</span><span class="lang-vi">Chỉ thực hiện những sửa chữa không có nguy cơ mất dữ liệu. Gồm sửa nhanh (ví dụ dòng bị thiếu trong nonclustered index) và sửa tốn thời gian (dựng lại index).</span></li>
<li><span class="lang-en">Needs to be in single user mode beforehand, i.e. ALTER DATABASE MyDatabase SET SINGLE_USER WITH ROLLBACK IMMEDIATE GO DBCC CHECKDB … GO ALTER DATABASE MyDatabase SET MULTI_USER GO</span><span class="lang-vi">Phải chuyển database sang single user mode trước, tức là ALTER DATABASE MyDatabase SET SINGLE_USER WITH ROLLBACK IMMEDIATE GO DBCC CHECKDB … GO ALTER DATABASE MyDatabase SET MULTI_USER GO</span></li>
</ul><li><code><span class="lang-en">DBCC CHECKDB (0, REPAIR_FAST)</span><span class="lang-vi">DBCC CHECKDB (0, REPAIR_FAST)</span></code></li>
<ul><li><span class="lang-en">No repair actions are performed. Only use for Backward compatibility reasons only.</span><span class="lang-vi">Không thực hiện sửa chữa nào. Chỉ giữ lại vì lý do tương thích ngược.</span></li>
</ul><li><code><span class="lang-en">DBCC CHECKDB (0, REPAIR_ALLOW_DATA_LOSS)</span><span class="lang-vi">DBCC CHECKDB (0, REPAIR_ALLOW_DATA_LOSS)</span></code></li>
<ul><li><span class="lang-en">Repairs any found errors.</span><span class="lang-vi">Sửa mọi lỗi tìm thấy.</span></li>
<li><span class="lang-en">REPAIR_ALLOW_DATA_LOSS may cause data loss.</span><span class="lang-vi">REPAIR_ALLOW_DATA_LOSS có thể gây mất dữ liệu.</span></li>
<ul><li><span class="lang-en">Suggest that you create physical copies of the database files beforehand.</span><span class="lang-vi">Khuyến nghị tạo bản sao vật lý của các file database trước khi chạy.</span></li>
<li><span class="lang-en">Needs to be in single user mode beforehand. Additionally, before that, run ALTER DATABASE MyDatabase SET EMERGENCY This marks it as READ_ONLY, logging is disabled, and access is limited to sysadmins.</span><span class="lang-vi">Phải chuyển sang single user mode trước. Ngoài ra, trước đó nữa phải chạy ALTER DATABASE MyDatabase SET EMERGENCY — lệnh này đánh dấu database là READ_ONLY, tắt logging, và chỉ sysadmin mới truy cập được.</span></li>
</ul></ul></ul></ul><li><code><span class="lang-en">WITH Arguments</span><span class="lang-vi">WITH Arguments</span></code></li>
<ul><li><code><span class="lang-en">DBCC CHECKDB (0, REPAIR_REBUILD) WITH …</span><span class="lang-vi">DBCC CHECKDB (0, REPAIR_REBUILD) WITH …</span></code></li>
<li><span class="lang-en">ALL_ERRORMSGS – displays all reported errors per object.</span><span class="lang-vi">ALL_ERRORMSGS — hiển thị mọi lỗi được báo cáo của từng object.</span></li>
<li><span class="lang-en">EXTENDED_LOGICAL_CHECKS – performs logical consistency checks on indexed views, XML indexes and spatial indexes.</span><span class="lang-vi">EXTENDED_LOGICAL_CHECKS — kiểm tra nhất quán logic trên indexed view, XML index và spatial index.</span></li>
<li><span class="lang-en">NO_INFOMSGS – does not show informational messages.</span><span class="lang-vi">NO_INFOMSGS — không hiển thị thông báo mang tính thông tin.</span></li>
<li><span class="lang-en">TABLOCK – obtains exclusive locks, which will speed it up, but reduce concurrency.</span><span class="lang-vi">TABLOCK — lấy exclusive lock, giúp chạy nhanh hơn nhưng giảm khả năng chạy song song.</span></li>
<li><span class="lang-en">ESTIMATEONLY – No database checks are done, but displays the amount of tempdb space needed to do it.</span><span class="lang-vi">ESTIMATEONLY — không kiểm tra gì cả, chỉ hiển thị dung lượng tempdb cần dùng.</span></li>
<li><span class="lang-en">PHYSICAL_ONLY – limits checking to page structure integrity, record header integrity, and consistency of the database.</span><span class="lang-vi">PHYSICAL_ONLY — chỉ kiểm tra tính toàn vẹn của cấu trúc page, record header và tính nhất quán của database.</span></li>
<li><span class="lang-en">MAX_DOP = number_of_processors – overrides the max degree of parallelism in sp_configure.</span><span class="lang-vi">MAX_DOP = số_processor — ghi đè mức song song tối đa đặt trong sp_configure.</span></li>
</ul><li><span class="lang-en">Best practices:</span><span class="lang-vi">Best practice:</span></li>
<ul><li><span class="lang-en">BEGIN TRANSACTION beforehand, so the user can confirm that they want to accept the results.</span><span class="lang-vi">Chạy BEGIN TRANSACTION trước, để người dùng xác nhận có chấp nhận kết quả hay không.</span></li>
<li><span class="lang-en">For best repairing errors, Microsoft recommends restoring from a backup.</span><span class="lang-vi">Để sửa lỗi tốt nhất, Microsoft khuyến nghị khôi phục từ bản backup.</span></li>
<li><span class="lang-en">After using DBCC CHECKDB, you need to inspect the referential integrity of the database – DBCC CHECKCONSTRAINTS. This checks the integrity of a constraint or all constraints in a table, or all constraints.</span><span class="lang-vi">Sau khi chạy DBCC CHECKDB, bạn cần kiểm tra tính toàn vẹn tham chiếu của database bằng DBCC CHECKCONSTRAINTS. Lệnh này kiểm tra một constraint, toàn bộ constraint của một bảng, hoặc toàn bộ constraint.</span></li>
</ul></ul></section>
<section id="s61"><h3><span class="n">61.</span> <span class="lang-en">configure database auto-tuning</span><span class="lang-vi">cấu hình auto-tuning cho database</span><a class="anch" href="#s61" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Auto-tuning is a process which learns about your workload and identifies potential issues and improvement: Learn – Adapt – Verify – repeat.</span><span class="lang-vi">Auto-tuning là quá trình học về workload của bạn, phát hiện vấn đề tiềm ẩn và điểm cải thiện: Learn – Adapt – Verify – lặp lại.</span></li>
<li><span class="lang-en">You can configure database auto-tuning by:</span><span class="lang-vi">Bạn cấu hình auto-tuning cho database bằng cách:</span></li>
<ul><li><span class="lang-en">In the Azure Portal, go to the database or server.</span><span class="lang-vi">Trong Azure Portal, vào database hoặc server.</span></li>
<li><span class="lang-en">Go to “Automatic tuning”.</span><span class="lang-vi">Vào &quot;Automatic tuning&quot;.</span></li>
</ul><li><span class="lang-en">In Azure SQL Database and Azure SQL MI:</span><span class="lang-vi">Với Azure SQL Database và Azure SQL MI:</span></li>
<ul><li><span class="lang-en">You can configure FORCE_LAST_GOOD_PLAN (it is enabled by default)</span><span class="lang-vi">Bạn cấu hình được FORCE_LAST_GOOD_PLAN (bật mặc định)</span></li>
<li><span class="lang-en">This says that the last good plan should be forced whenever some plan change regression is found – when the estimated gain is &gt;10 seconds, or the number of errors in the new plan is &gt; recommend plan.</span><span class="lang-vi">Tùy chọn này nói rằng plan tốt gần nhất sẽ được ép dùng mỗi khi phát hiện regression do plan thay đổi — khi lợi ích ước tính lớn hơn 10 giây, hoặc số lỗi ở plan mới nhiều hơn plan được khuyến nghị.</span></li>
</ul><li><span class="lang-en">In Azure SQL Database only, you can automate index maintenance by:</span><span class="lang-vi">Chỉ với Azure SQL Database, bạn tự động hóa được việc bảo trì index bằng cách:</span></li>
<ul><li><span class="lang-en">You can change “Create Index” and “Drop Index” from Inherit (from server) to OFF or ON [the default for servers is OFF for both of these]. These will override the server settings.</span><span class="lang-vi">Đổi &quot;Create Index&quot; và &quot;Drop Index&quot; từ Inherit (kế thừa từ server) sang OFF hoặc ON [mặc định ở cấp server là OFF cho cả hai]. Thiết lập này ghi đè thiết lập của server.</span></li>
<li><span class="lang-en">Indexes will only be auto-created if the CPU, data I/O and log I/O are lower than 80%.</span><span class="lang-vi">Index chỉ được tự tạo khi CPU, data I/O và log I/O đều dưới 80%.</span></li>
<li><span class="lang-en">You can view which indexes are auto-created by going to:</span><span class="lang-vi">Bạn xem index nào được tự tạo bằng cách:</span></li>
<ul><li><code><span class="lang-en">SELECT * FROM sys.indexes WHERE auto_created = 1</span><span class="lang-vi">SELECT * FROM sys.indexes WHERE auto_created = 1</span></code></li>
</ul><li><span class="lang-en">The performance of queries using the auto-created index will be reviewed. If is doesn’t improve performance, it is automatically dropped.</span><span class="lang-vi">Hiệu năng của các query dùng index tự tạo sẽ được xem xét lại. Nếu nó không cải thiện hiệu năng thì sẽ tự động bị drop.</span></li>
<li><span class="lang-en">You can do this in T-SQL for a single database as follows:</span><span class="lang-vi">Với một database đơn lẻ, bạn làm bằng T-SQL như sau:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER DATABASE DatabaseName SET AUTOMATIC_TUNING = AUTO | INHERIT | CUSTOM
ALTER DATABASE DatabaseName SET AUTOMATIC_TUNING (FORCE_LAST_GOOD_PLAN = ON, CREATE_INDEX = ON, DROP_INDEX = OFF)</span><span class="lang-vi">ALTER DATABASE DatabaseName SET AUTOMATIC_TUNING = AUTO | INHERIT | CUSTOM
ALTER DATABASE DatabaseName SET AUTOMATIC_TUNING (FORCE_LAST_GOOD_PLAN = ON, CREATE_INDEX = ON, DROP_INDEX = OFF)</span></pre></li>
<ul><li><span class="lang-en">CREATE_INDEX and DROP_INDEX cannot be done in Azure SQL MI.</span><span class="lang-vi">CREATE_INDEX and DROP_INDEX cannot be done in Azure SQL MI.</span></li>
</ul></ul><li><span class="lang-en">Recommendations, if any, can be found in:</span><span class="lang-vi">Các khuyến nghị (nếu có) nằm ở:</span></li>
<ul><li><code><span class="lang-en">SELECT * FROM sys.dm_db_tuning_recommendations</span><span class="lang-vi">SELECT * FROM sys.dm_db_tuning_recommendations</span></code></li>
</ul></ul></ul></section>
<section id="s62"><h3><span class="n">62.</span> <span class="lang-en">configure server and service account settings for performance</span><span class="lang-vi">cấu hình thiết lập server và service account cho hiệu năng</span><a class="anch" href="#s62" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">See topic 9.</span><span class="lang-vi">Xem mục 9.</span></li>
</ul></section>
<section id="s63"><h3><span class="n">63.</span> <span class="lang-en">configure Resource Governor for performance</span><span class="lang-vi">cấu hình Resource Governor cho hiệu năng</span><a class="anch" href="#s63" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Resource Governor is used in Azure SQL Database. However, it is not configurable.</span><span class="lang-vi">Resource Governor có được dùng trong Azure SQL Database, nhưng bạn không cấu hình được nó.</span></li>
<li><span class="lang-en">In VMs and Azure SQL MI, you can use Resource Governor to balance resources used by different sessions.</span><span class="lang-vi">Trên VM và Azure SQL MI, bạn dùng Resource Governor để cân bằng tài nguyên giữa các session khác nhau.</span></li>
<ul><li><span class="lang-en">You can divide resources (CPU, physical I/O, and memory) differently, based on which workload it is in. This can improve performance on critical workloads.</span><span class="lang-vi">Bạn phân chia tài nguyên (CPU, I/O vật lý và memory) theo tỉ lệ khác nhau tùy workload. Cách này giúp cải thiện hiệu năng cho các workload trọng yếu.</span></li>
</ul><li><span class="lang-en">Terminology:</span><span class="lang-vi">Thuật ngữ:</span></li>
<ul><li><span class="lang-en">Resource pool – the physical resources. Two resource pools are created when SQL Server is installed: internal and default.</span><span class="lang-vi">Resource pool — tài nguyên vật lý. Hai resource pool được tạo sẵn khi cài SQL Server: internal và default.</span></li>
<ul><li><span class="lang-en">Without Resource Govenor enabled, all new sessions are classified into the default workload group, and system requests into the internal workload group.</span><span class="lang-vi">Khi chưa bật Resource Governor, mọi session mới được xếp vào default workload group, còn request hệ thống vào internal workload group.</span></li>
</ul><li><span class="lang-en">Workload group – a container for requests which have similar criteria, and</span><span class="lang-vi">Workload group — nơi chứa các request có tiêu chí tương tự nhau, và</span></li>
<li><span class="lang-en">Classification – that criteria.</span><span class="lang-vi">Classification — chính là các tiêu chí đó.</span></li>
</ul><li><span class="lang-en">To enable/disable Resource Governor:</span><span class="lang-vi">Để bật/tắt Resource Governor:</span></li>
<ul><li><span class="lang-en">In SSMS</span><span class="lang-vi">Trong SSMS</span></li>
<ul><li><span class="lang-en">Right hand click Management – Resource Governor, and select Properties.</span><span class="lang-vi">Chuột phải vào Management – Resource Governor và chọn Properties.</span></li>
<li><span class="lang-en">Click &quot;Enable Resource Governor&quot;, and click OK.</span><span class="lang-vi">Bấm &quot;Enable Resource Governor&quot; rồi bấm OK.</span></li>
</ul><li><span class="lang-en">In T-SQL</span><span class="lang-vi">Bằng T-SQL</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER RESOURCE GOVERNOR RECONFIGURE [or DISABLE];
GO</span><span class="lang-vi">ALTER RESOURCE GOVERNOR RECONFIGURE [or DISABLE];
GO</span></pre></li>
</ul></ul><li><span class="lang-en">Create a Resource Pool</span><span class="lang-vi">Create a Resource Pool</span></li>
<ul><li><span class="lang-en">In SSMS</span><span class="lang-vi">Trong SSMS</span></li>
<ul><li><span class="lang-en">Right hand click Management – Resource Governor, and select Properties.</span><span class="lang-vi">Chuột phải vào Management – Resource Governor và chọn Properties.</span></li>
<li><span class="lang-en">Click on the first column in the empty pool. It now has a *.</span><span class="lang-vi">Bấm vào cột đầu tiên của pool trống. Nó sẽ hiện dấu *.</span></li>
<li><span class="lang-en">Double-click the empty cell in the Name, and enter the resource pool Name.</span><span class="lang-vi">Bấm đúp vào ô trống ở cột Name và nhập tên resource pool.</span></li>
<li><span class="lang-en">Add other values.</span><span class="lang-vi">Add other values.</span></li>
</ul><li><span class="lang-en">In T-SQL:</span><span class="lang-vi">Bằng T-SQL:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">CREATE RESOURCE POOL myPool
WITH (MAX_CPU_PERCENT = 20); -- If you want to delete, use DROP RESOURCE POOL X
GO
ALTER RESOURCE GOVERNOR RECONFIGURE;
GO</span><span class="lang-vi">CREATE RESOURCE POOL myPool
WITH (MAX_CPU_PERCENT = 20); -- If you want to delete, use DROP RESOURCE POOL X
GO
ALTER RESOURCE GOVERNOR RECONFIGURE;
GO</span></pre></li>
</ul><li><span class="lang-en">Settings:</span><span class="lang-vi">Các thiết lập:</span></li>
<ul><li><span class="lang-en">MIN_CPU_PERCENT and MAX_CPU_PERCENT</span><span class="lang-vi">MIN_CPU_PERCENT và MAX_CPU_PERCENT</span></li>
<ul><li><span class="lang-en">Guaranteed average and maximum average CPU.</span><span class="lang-vi">Mức CPU trung bình được đảm bảo và mức trung bình tối đa.</span></li>
<li><span class="lang-en">The Max_CPU_PERCENT only applies if there is &gt;100% if all requests were honoured.</span><span class="lang-vi">MAX_CPU_PERCENT chỉ có tác dụng khi tổng yêu cầu vượt quá 100% nếu tất cả đều được đáp ứng.</span></li>
<li><span class="lang-en">e.g. Department A has min of 60%, and Department B has max of 40%.</span><span class="lang-vi">ví dụ phòng ban A có min 60%, phòng ban B có max 40%.</span></li>
</ul><li><span class="lang-en">CAP_CPU_PERCENT</span><span class="lang-vi">CAP_CPU_PERCENT</span></li>
<ul><li><span class="lang-en">Hard limit for CPU (not maximum average)</span><span class="lang-vi">Giới hạn cứng cho CPU (không phải mức trung bình tối đa)</span></li>
</ul><li><span class="lang-en">MIN_ and MAX_MEMORY_PERCENT</span><span class="lang-vi">MIN_ và MAX_MEMORY_PERCENT</span></li>
<ul><li><span class="lang-en">Memory may remain in a pool, even with no requests.</span><span class="lang-vi">Memory có thể vẫn nằm trong pool ngay cả khi không có request nào.</span></li>
</ul><li><span class="lang-en">MIN_ and MAX_IOPS_PER_VOLUME</span><span class="lang-vi">MIN_ và MAX_IOPS_PER_VOLUME</span></li>
<ul><li><span class="lang-en">The physical I/O operations per seconds (IOPS).</span><span class="lang-vi">Số thao tác I/O vật lý mỗi giây (IOPS).</span></li>
</ul></ul></ul><li><span class="lang-en">Workload Groups:</span><span class="lang-vi">Workload Group:</span></li>
<ul><li><span class="lang-en">Requests go into the default group if:</span><span class="lang-vi">Request rơi vào default group khi:</span></li>
<ul><li><span class="lang-en">There are no criteria,</span><span class="lang-vi">Không có tiêu chí nào,</span></li>
<li><span class="lang-en">The resource pool specified is non-existent.</span><span class="lang-vi">Resource pool được chỉ định không tồn tại.</span></li>
<li><span class="lang-en">There is a general classification failure.</span><span class="lang-vi">Có lỗi phân loại chung.</span></li>
</ul></ul><li><span class="lang-en">Create a Workload Group</span><span class="lang-vi">Create a Workload Group</span></li>
<ul><li><span class="lang-en">In SSMS</span><span class="lang-vi">Trong SSMS</span></li>
<ul><li><span class="lang-en">Right hand click Management – Resource Governor, and select Properties.</span><span class="lang-vi">Chuột phải vào Management – Resource Governor và chọn Properties.</span></li>
<li><span class="lang-en">Click on the relevant resource pool.</span><span class="lang-vi">Bấm vào resource pool tương ứng.</span></li>
<li><span class="lang-en">Go down to the &quot;Workload groups for resource pool&quot;, and enter a name, with any other values.</span><span class="lang-vi">Kéo xuống mục &quot;Workload groups for resource pool&quot; và nhập tên cùng các giá trị khác.</span></li>
</ul><li><span class="lang-en">In T-SQL</span><span class="lang-vi">Bằng T-SQL</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">CREATE WORKLOAD GROUP myGroup -- or ALTER, if you wish to change it, or DROP to delete it.
USING myPool; -- or [default];
GO</span><span class="lang-vi">CREATE WORKLOAD GROUP myGroup -- or ALTER, if you wish to change it, or DROP to delete it.
USING myPool; -- hoặc [default];
GO</span></pre></li>
</ul></ul><li><span class="lang-en">Create a classifier function in T-SQL:</span><span class="lang-vi">Create a classifier function in T-SQL:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">CREATE FUNCTION fnClassifierTime()
RETURNS sysname
WITH SCHEMABINDING
AS
BEGIN
if DATEPART(HOUR,GETDATE())&lt;8 or DATEPART(HOUR,GETDATE())&gt;17
BEGIN
RETURN 'gOutsideOfficeHours';
END
RETURN 'gInsideOfficeHours';
END</span><span class="lang-vi">CREATE FUNCTION fnClassifierTime()
RETURNS sysname
WITH SCHEMABINDING
AS
BEGIN
if DATEPART(HOUR,GETDATE())&lt;8 or DATEPART(HOUR,GETDATE())&gt;17
BEGIN
RETURN 'gOutsideOfficeHours';
END
RETURN 'gInsideOfficeHours';
END</span></pre></li>
</ul><li><span class="lang-en">Register this classified function:</span><span class="lang-vi">Đăng ký classifier function này:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER RESOURCE GOVERNOR with (CLASSIFIER_FUNCTION = dbo.fnClassifierTime);
ALTER RESOURCE GOVERNOR RECONFIGURE;
GO</span><span class="lang-vi">ALTER RESOURCE GOVERNOR with (CLASSIFIER_FUNCTION = dbo.fnClassifierTime);
ALTER RESOURCE GOVERNOR RECONFIGURE;
GO</span></pre></li>
</ul><li><span class="lang-en">T-SQL</span><span class="lang-vi">T-SQL</span></li>
<ul><li><code><span class="lang-en">SELECT * FROM sys.resource_governor_configuration</span><span class="lang-vi">SELECT * FROM sys.resource_governor_configuration</span></code></li>
<ul><li><span class="lang-en">Returns the stored Resource Governor state.</span><span class="lang-vi">Trả về trạng thái Resource Governor đang được lưu.</span></li>
</ul><li><code><span class="lang-en">SELECT * FROM sys.dm_resource_governor_resource_pools</span><span class="lang-vi">SELECT * FROM sys.dm_resource_governor_resource_pools</span></code></li>
<ul><li><span class="lang-en">Returns information about the current resource pool state, the current configuration of resource pools, and resource pool statistics.</span><span class="lang-vi">Trả về thông tin về trạng thái resource pool hiện tại, cấu hình hiện tại của các resource pool, và thống kê resource pool.</span></li>
</ul><li><code><span class="lang-en">SELECT * FROM sys.dm_resource_governor_workload_groups</span><span class="lang-vi">SELECT * FROM sys.dm_resource_governor_workload_groups</span></code></li>
<ul><li><span class="lang-en">Returns workload group statistics and the current in-memory configuration of the workload group.</span><span class="lang-vi">Trả về thống kê workload group và cấu hình đang nằm trong bộ nhớ của workload group.</span></li>
</ul></ul></ul></section>
<section id="s64"><h3><span class="n">64.</span> <span class="lang-en">implement database-scoped configuration</span><span class="lang-vi">triển khai database-scoped configuration</span><a class="anch" href="#s64" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">See also topic 51.</span><span class="lang-vi">Xem thêm mục 51.</span></li>
<li><span class="lang-en">In SSMS, you can:</span><span class="lang-vi">Trong SSMS, bạn có thể:</span></li>
<ul><li><span class="lang-en">Right-hand click on a database, and go to Properties and go to Options.</span><span class="lang-vi">Chuột phải vào database, vào Properties rồi vào Options.</span></li>
<li><span class="lang-en">The settings in the topic are under &quot;Database Scoped Configurations&quot;.</span><span class="lang-vi">Các thiết lập trong mục này nằm dưới &quot;Database Scoped Configurations&quot;.</span></li>
</ul><li><span class="lang-en">In T-SQL, you can use:</span><span class="lang-vi">Bằng T-SQL, bạn dùng:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER DATABASE SCOPED CONFIGURATION [FOR SECONDARY] SET … = ON/OFF; -- for secondary is geo-replicated secondary database(s) (they all have the same settings).</span><span class="lang-vi">ALTER DATABASE SCOPED CONFIGURATION [FOR SECONDARY] SET … = ON/OFF; -- for secondary is geo-replicated secondary database(s) (they all have the same settings).</span></pre></li>
</ul><li><span class="lang-en">GLOBAL_TEMPORARY_TABLE_AUTO_DROP</span><span class="lang-vi">GLOBAL_TEMPORARY_TABLE_AUTO_DROP</span></li>
<ul><li><span class="lang-en">Drop global temporary tables when not in use by any session.</span><span class="lang-vi">Drop global temporary tables when not in use by any session.</span></li>
<ul><li><span class="lang-en">Set in individual databases in Azure SQL Database.</span><span class="lang-vi">Set in individual databases in Azure SQL Database.</span></li>
<li><span class="lang-en">Set in tempdb in MI and VMs.</span><span class="lang-vi">Set in tempdb in MI and VMs.</span></li>
</ul></ul><li><span class="lang-en">LAST_QUERY_PLAN_STATS</span><span class="lang-vi">LAST_QUERY_PLAN_STATS</span></li>
<ul><li><span class="lang-en">Enables/disables actual execution plans in sys.dm_exec_query_plan_stats.</span><span class="lang-vi">Bật/tắt actual execution plan trong sys.dm_exec_query_plan_stats.</span></li>
</ul><li><span class="lang-en">LEGACY_CARDINALITY_ESTIMATION</span><span class="lang-vi">LEGACY_CARDINALITY_ESTIMATION</span></li>
<ul><li><span class="lang-en">The query optimizer cardinality estimation model changed in SQL 2014. Should only be turned on for compatibility purposes.</span><span class="lang-vi">Mô hình ước lượng cardinality của query optimizer đã thay đổi từ SQL 2014. Chỉ nên bật vì mục đích tương thích.</span></li>
</ul><li><span class="lang-en">MAXDOP – intra-query parallelism; the maximum number of parallel threads</span><span class="lang-vi">MAXDOP — mức song song trong một query; số thread song song tối đa</span></li>
<ul><li><span class="lang-en">Having parallel threads should increase query speed.</span><span class="lang-vi">Có nhiều thread song song thì query thường chạy nhanh hơn.</span></li>
<li><span class="lang-en">Too high a MAXDOP may cause performance problems when executing multiple queries at the same time, as it may stave new queries of resources. Could reduce MAXDOP if this happens.</span><span class="lang-vi">MAXDOP quá cao có thể gây vấn đề hiệu năng khi chạy nhiều query cùng lúc, vì có thể làm các query mới bị đói tài nguyên. Khi đó nên giảm MAXDOP.</span></li>
<li><span class="lang-en">The default for new Azure SQL Databases is 8, which is best of most typical workloads.</span><span class="lang-vi">Mặc định cho Azure SQL Database mới là 8, phù hợp với hầu hết workload thông thường.</span></li>
</ul><li><span class="lang-en">55. implement database-scoped configuration</span><span class="lang-vi">55. triển khai database-scoped configuration</span></li>
<li><span class="lang-en">OPTIMIZE_FOR_AD_HOC_WORKLOADS</span><span class="lang-vi">OPTIMIZE_FOR_AD_HOC_WORKLOADS</span></li>
<ul><li><span class="lang-en">Stores a compiled plan stub when a batch is compiled for the first time, which has a smaller memory footprint. When it is compiled/executed again, it will be replaced with a full compiled plan.</span><span class="lang-vi">Lưu một plan stub đã compile ở lần compile đầu tiên của một batch, chiếm ít memory hơn. Khi batch đó được compile/chạy lại thì stub sẽ được thay bằng plan compile đầy đủ.</span></li>
</ul><li><span class="lang-en">PARAMETER_SNIFFING</span><span class="lang-vi">PARAMETER_SNIFFING</span></li>
<ul><li><span class="lang-en">Evaluates Stored Procedures to create an execution plan.</span><span class="lang-vi">Đánh giá stored procedure để tạo execution plan.</span></li>
<li><span class="lang-en">On subsequent runnings, the computer uses the same execution plan.</span><span class="lang-vi">Ở những lần chạy sau, hệ thống dùng lại đúng execution plan đó.</span></li>
<ul><li><span class="lang-en">No need to spend time and CPU evaluating. However, may be suboptimal for certain parameters.</span><span class="lang-vi">Không phải tốn thời gian và CPU đánh giá lại. Tuy nhiên plan đó có thể không tối ưu với một số giá trị tham số.</span></li>
</ul></ul><li><span class="lang-en">QUERY_OPTIMIZER_HOTFIXES</span><span class="lang-vi">QUERY_OPTIMIZER_HOTFIXES</span></li>
<ul><li><span class="lang-en">Regardless of the compatibility level, enables or disables query optimization hotfixes.</span><span class="lang-vi">Bật hoặc tắt các hotfix tối ưu query, bất kể compatibility level là bao nhiêu.</span></li>
<ul><li><span class="lang-en">So you can have a compatibility level for SQL Server 2012, but have query optimization hotfixes that were released after this version.</span><span class="lang-vi">Nhờ đó bạn có thể để compatibility level ở mức SQL Server 2012 mà vẫn nhận được các hotfix tối ưu query phát hành sau phiên bản này.</span></li>
</ul></ul><li><span class="lang-en">There are many more, but these are the main ones.</span><span class="lang-vi">Còn nhiều tùy chọn khác nữa, nhưng đây là những cái chính.</span></li>
</ul></section>
<section id="s64-2"><h3><span class="n">64.</span> <span class="lang-en">review database configuration options</span><span class="lang-vi">xem lại các tùy chọn cấu hình database</span><a class="anch" href="#s64-2" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">These SET options are started with ALTER DATABASE DatabaseName SET = ON/OFF … // GO</span><span class="lang-vi">Các tùy chọn SET này bắt đầu bằng ALTER DATABASE TênDatabase SET = ON/OFF … // GO</span></li>
<ul><li><span class="lang-en">AUTO_CLOSE ON/OFF</span><span class="lang-vi">AUTO_CLOSE ON/OFF</span></li>
<ul><li><span class="lang-en">Whether the database is shut down after the last user exists.</span><span class="lang-vi">Quyết định database có bị tắt sau khi người dùng cuối cùng thoát ra hay không.</span></li>
</ul><li><span class="lang-en">AUTO_CREATE_STATISTICS ON/OFF</span><span class="lang-vi">AUTO_CREATE_STATISTICS ON/OFF</span></li>
<ul><li><span class="lang-en">Creates statistics on single columns in query predicates, to improve query plans and performance.</span><span class="lang-vi">Creates statistics on single columns in query predicates, to improve query plans and performance.</span></li>
</ul><li><span class="lang-en">AUTO_UPDATE_STATISTICS[_ASYNC]</span><span class="lang-vi">AUTO_UPDATE_STATISTICS[_ASYNC]</span></li>
<ul><li><span class="lang-en">Query Optimizer updates statistics when they are used by a query and might be out- of-date, after insert/update/delete/merge operations change the data distribution. _ASYNC specifies whether it is done asynchronously or not.</span><span class="lang-vi">Query Optimizer cập nhật statistics khi chúng được một query dùng đến và có thể đã lỗi thời, sau khi các thao tác insert/update/delete/merge làm thay đổi phân bố dữ liệu. Hậu tố _ASYNC quyết định việc này chạy bất đồng bộ hay không.</span></li>
</ul><li><span class="lang-en">AUTO_SHRINK ON/OFF</span><span class="lang-vi">AUTO_SHRINK ON/OFF</span></li>
<ul><li><span class="lang-en">Shrinks when more than 25% of the file contains unused space. Recommended to leave OFF.</span><span class="lang-vi">Shrink khi hơn 25% dung lượng file là chỗ trống không dùng. Khuyến nghị để OFF.</span></li>
</ul><li><span class="lang-en">READ_ONLY / READ_WRITE</span><span class="lang-vi">READ_ONLY / READ_WRITE</span></li>
<ul><li><span class="lang-en">Can users only read from the database (not modify it).</span><span class="lang-vi">Quy định người dùng chỉ được đọc database (không được sửa) hay được phép sửa.</span></li>
</ul><li><span class="lang-en">SINGLE_USER / RESTRICTED_USER / MULTI_USER</span><span class="lang-vi">SINGLE_USER / RESTRICTED_USER / MULTI_USER</span></li>
<ul><li><span class="lang-en">Only one user at a time, or only db_owner fixed database roles and dbcreator and sysadmin fixed server roles (any number), or all users which have appropriate permissions.</span><span class="lang-vi">Chỉ một user tại một thời điểm; hoặc chỉ các fixed database role db_owner cùng fixed server role dbcreator và sysadmin (số lượng bất kỳ); hoặc mọi user có quyền phù hợp.</span></li>
</ul><li><span class="lang-en">RECOVERY FULL / RECOVERY BULK_LOGGED / RECOVERY SIMPLE</span><span class="lang-vi">RECOVERY FULL / RECOVERY BULK_LOGGED / RECOVERY SIMPLE</span></li>
<ul><li><span class="lang-en">Changes the recovery option. FULL uses transaction log backups. BULK_LOGGED only minimally logs certain large-scale (bulk) operations. Simple only allows for complete backups.</span><span class="lang-vi">Đổi recovery model. FULL dùng transaction log backup. BULK_LOGGED chỉ ghi log tối thiểu cho một số thao tác bulk quy mô lớn. SIMPLE chỉ cho phép complete backup.</span></li>
</ul><li><span class="lang-en">COMPATIBILITY_LEVEL = 100 (SQL Server 2008 and R2), 110, 120, 130, 140, 150 (SQL Server 2019)</span><span class="lang-vi">COMPATIBILITY_LEVEL = 100 (SQL Server 2008 và R2), 110, 120, 130, 140, 150 (SQL Server 2019)</span></li>
<ul><li><span class="lang-en">In Azure SQL Database and MI and SQL Server 2014, you cannot set it below SQL Server 2008 (100).</span><span class="lang-vi">Trên Azure SQL Database, MI và SQL Server 2014, bạn không đặt được mức thấp hơn SQL Server 2008 (100).</span></li>
</ul></ul></ul></section>
<section id="s65"><h3><span class="n">65.</span> <span class="lang-en">configure compute resources for scaling</span><span class="lang-vi">cấu hình tài nguyên compute để mở rộng</span><a class="anch" href="#s65" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">See topics 9-11.</span><span class="lang-vi">Xem các mục 9-11.</span></li>
</ul></section>
<section id="s65-2"><h3><span class="n">65.</span> <span class="lang-en">assess proper database autogrowth configuration</span><span class="lang-vi">đánh giá cấu hình autogrowth phù hợp cho database</span><a class="anch" href="#s65-2" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">To look at current settings:</span><span class="lang-vi">Để xem thiết lập hiện tại:</span></li>
<ul><li><code><span class="lang-en">SELECT * FROM sys.sysfiles</span><span class="lang-vi">SELECT * FROM sys.sysfiles</span></code></li>
</ul><li><span class="lang-en">To adjust auto-growth setting:</span><span class="lang-vi">Để chỉnh thiết lập auto-growth:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER DATABASE MyDB
MODIFY FILE
(NAME=NameFile,FILEGROWTH=40MB or 40%);</span><span class="lang-vi">ALTER DATABASE MyDB
MODIFY FILE
(NAME=NameFile,FILEGROWTH=40MB hoặc 40%);</span></pre></li>
</ul><li><span class="lang-en">You can also autogrow files in a particular filegroup.</span><span class="lang-vi">Bạn cũng có thể cho tự tăng các file trong một filegroup cụ thể.</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER DATABASE MyDB
MODIFY FILEGROUP FilegroupName
AUTOGROW_ALL_FILES</span><span class="lang-vi">ALTER DATABASE MyDB
MODIFY FILEGROUP FilegroupName
AUTOGROW_ALL_FILES</span></pre></li>
<ul><li><span class="lang-en">If any file in a filegroup meets the autogrow threshold, all files in the filegroup will grow.</span><span class="lang-vi">Nếu bất kỳ file nào trong filegroup chạm ngưỡng autogrow thì mọi file trong filegroup đó đều được tăng.</span></li>
</ul></ul></ul></section>
<section id="s65-3"><h3><span class="n">65.</span> <span class="lang-en">report on database free space</span><span class="lang-vi">báo cáo dung lượng trống của database</span><a class="anch" href="#s65-3" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">To display space used, run:</span><span class="lang-vi">Để hiển thị dung lượng đã dùng, chạy:</span></li>
<ul><li><code><span class="lang-en">EXEC sp_spaceused</span><span class="lang-vi">EXEC sp_spaceused</span></code></li>
<li><span class="lang-en">It shows the unallocated space.</span><span class="lang-vi">Nó cho thấy phần dung lượng chưa được cấp phát.</span></li>
</ul><li><span class="lang-en">To display it by file, run:</span><span class="lang-vi">Để xem theo từng file, chạy:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT file_id, name, type_desc, physical_name, size, max_size
FROM sys.database_files</span><span class="lang-vi">SELECT file_id, name, type_desc, physical_name, size, max_size
FROM sys.database_files</span></pre></li>
<li><span class="lang-en">A max_size of -1 means that it is unlimited.</span><span class="lang-vi">max_size bằng -1 nghĩa là không giới hạn.</span></li>
</ul><li><span class="lang-en">To view the number of pages used as well as total free space for a particular database, you can use</span><span class="lang-vi">Để xem số page đã dùng cùng tổng dung lượng trống của một database, bạn dùng</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT allocated_extent_page_count, unallocated_extent_page_count FROM sys.dm_db_file_space_usage</span><span class="lang-vi">SELECT allocated_extent_page_count, unallocated_extent_page_count FROM sys.dm_db_file_space_usage</span></pre></li>
<ul><li><span class="lang-en">Returns space usage information for each data file in the database.</span><span class="lang-vi">Trả về thông tin sử dụng dung lượng cho từng data file trong database.</span></li>
</ul></ul><li><span class="lang-en">You can also use:</span><span class="lang-vi">Bạn cũng có thể dùng:</span></li>
<ul><li><code><span class="lang-en">DBCC SQLPERF (LOGSPACE)</span><span class="lang-vi">DBCC SQLPERF (LOGSPACE)</span></code></li>
<li><span class="lang-en">However, it only shows transaction log space statistics.</span><span class="lang-vi">Tuy nhiên nó chỉ hiển thị thống kê dung lượng transaction log.</span></li>
</ul><li><span class="lang-en">You can also go to Reports – Standard Reports – Disk Usage on Azure VM.</span><span class="lang-vi">Trên Azure VM, bạn cũng có thể vào Reports – Standard Reports – Disk Usage.</span></li>
<li><span class="lang-en">For tempdb only, you can use:</span><span class="lang-vi">Riêng với tempdb, bạn dùng được:</span></li>
<ul><li><code><span class="lang-en">SELECT * FROM sys.dm_db_session_space_usage</span><span class="lang-vi">SELECT * FROM sys.dm_db_session_space_usage</span></code></li>
<ul><li><span class="lang-en">Number of pages allocated/deallocated by each session.</span><span class="lang-vi">Số page được cấp phát/thu hồi bởi mỗi session.</span></li>
</ul><li><code><span class="lang-en">SELECT * FROM sys.dm_db_task_space_usage</span><span class="lang-vi">SELECT * FROM sys.dm_db_task_space_usage</span></code></li>
<ul><li><span class="lang-en">Pages allocated/deallocated by each task</span><span class="lang-vi">Số page được cấp phát/thu hồi bởi mỗi task</span></li>
</ul></ul></ul></section>
<section id="s66"><h3><span class="n">66.</span> <span class="lang-en">configure Intelligent Query Processing (IQP)</span><span class="lang-vi">cấu hình Intelligent Query Processing (IQP)</span><a class="anch" href="#s66" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">IQP is a suite of new features, improving performance. It is supported in Azure SQL Database, Azure SQL Managed Instance for compatibility level 150. For SQL Server VM, this is SQL Server 2019 and level 150.</span><span class="lang-vi">IQP là một nhóm tính năng mới giúp cải thiện hiệu năng. Nó được hỗ trợ trên Azure SQL Database và Azure SQL Managed Instance ở compatibility level 150. Với SQL Server trên VM thì cần SQL Server 2019 và level 150.</span></li>
<ul><li><span class="lang-en">There are 7 different features, some of which are also available on lower levels.</span><span class="lang-vi">Có 7 tính năng khác nhau, một số cũng dùng được ở level thấp hơn.</span></li>
<li><span class="lang-en">You can check which settings are enabled by:</span><span class="lang-vi">Bạn kiểm tra thiết lập nào đang bật bằng:</span></li>
<ul><li><code><span class="lang-en">SELECT * FROM sys.database_scoped_configurations</span><span class="lang-vi">SELECT * FROM sys.database_scoped_configurations</span></code></li>
</ul><li><span class="lang-en">Note: server-wide configuration options can be found in:</span><span class="lang-vi">Lưu ý: các tùy chọn cấu hình phạm vi server nằm ở:</span></li>
<ul><li><code><span class="lang-en">SELECT * FROM sys.configurations</span><span class="lang-vi">SELECT * FROM sys.configurations</span></code></li>
<li><span class="lang-en">These can be configured (but not in Azure SQL Database) by using</span><span class="lang-vi">Chúng cấu hình được (nhưng không phải trên Azure SQL Database) bằng cách dùng</span></li>
<ul><li><code><span class="lang-en">EXEC sp_configure 'Configuration', X</span><span class="lang-vi">EXEC sp_configure 'Configuration', X</span></code></li>
</ul></ul></ul><li><span class="lang-en">You can disable any of them (except APPROX_COUNT_DISTINCT) for all queries in a single database, or for a single query:</span><span class="lang-vi">Bạn có thể tắt bất kỳ tính năng nào (trừ APPROX_COUNT_DISTINCT) cho mọi query trong một database, hoặc cho riêng một query:</span></li>
<ul><li><span class="lang-en">All queries: ALTER DATABASE SCOPED CONFIGURATION SET X = OFF. 'X' is the first heading.</span><span class="lang-vi">Mọi query: ALTER DATABASE SCOPED CONFIGURATION SET X = OFF. 'X' là tên ở tiêu đề thứ nhất.</span></li>
<li><span class="lang-en">One query - add at the end of the query: OPTION (USE HINT('Y'). 'Y' is the second heading.</span><span class="lang-vi">Một query — thêm vào cuối query: OPTION (USE HINT('Y'). 'Y' là tên ở tiêu đề thứ hai.</span></li>
<li><span class="lang-en">To disable APPROX_COUNT_DISTINCT, don't use that function!</span><span class="lang-vi">Để tắt APPROX_COUNT_DISTINCT thì đơn giản là đừng dùng hàm đó!</span></li>
</ul><li><span class="lang-en">[DISABLE_ ] BATCH_MODE_ADAPTIVE_JOINS</span><span class="lang-vi">[DISABLE_ ] BATCH_MODE_ADAPTIVE_JOINS</span></li>
<ul><li><span class="lang-en">For Azure SQL Database, and SQL Server 2017 or higher. Needs a Columnstore index in the query or a table being referenced in the join, or batch mode enabled for rowstore.</span><span class="lang-vi">Dành cho Azure SQL Database và SQL Server 2017 trở lên. Cần có columnstore index trong query hoặc trên bảng được tham chiếu trong join, hoặc bật batch mode cho rowstore.</span></li>
<li><span class="lang-en">Selects the Join type (Hash Join or Nested Loops Join) during runtime based on actual input rows, when it has scanned the first input.</span><span class="lang-vi">Selects the Join type (Hash Join or Nested Loops Join) during runtime based on actual input rows, when it has scanned the first input.</span></li>
<li><span class="lang-en">It defines a threshold (where the small number of rows makes a Nested Loops join better than a Hash join) that is used to decide when to switch to a Nested Loops plan.</span><span class="lang-vi">Nó định ra một ngưỡng (nơi số dòng đủ nhỏ khiến Nested Loops join tốt hơn Hash join) để quyết định khi nào chuyển sang plan Nested Loops.</span></li>
<li><span class="lang-en">Enabled by default in SQL Server 2017 under compatibility level 140, and Azure under compatibility level 140.</span><span class="lang-vi">Bật mặc định trên SQL Server 2017 ở compatibility level 140, và trên Azure ở compatibility level 140.</span></li>
</ul><li><span class="lang-en">APPROX_COUNT_DISTINCT</span><span class="lang-vi">APPROX_COUNT_DISTINCT</span></li>
<ul><li><span class="lang-en">You can use the new aggregation APPROX_COUNT_DISTINCT.</span><span class="lang-vi">Bạn có thể dùng hàm tổng hợp mới APPROX_COUNT_DISTINCT.</span></li>
<li><span class="lang-en">Provides an approximate COUNT DISTINCT for big data – decreases memory and performance requirement. It guarantees up to a 2% error rate (within a 97% probability).</span><span class="lang-vi">Nó cho ra COUNT DISTINCT xấp xỉ với dữ liệu lớn — giảm yêu cầu về memory và hiệu năng. Đảm bảo sai số tối đa 2% (trong 97% xác suất).</span></li>
<ul><li><span class="lang-en">Use where absolute precision is not important, but responsiveness is.</span><span class="lang-vi">Use where absolute precision is not important, but responsiveness is.</span></li>
</ul><li><span class="lang-en">Available in all compatibility levels of Azure SQL Database, and in SQL Server 2019 or higher.</span><span class="lang-vi">Có ở mọi compatibility level của Azure SQL Database, và trên SQL Server 2019 trở lên.</span></li>
</ul><li><span class="lang-en">BATCH_MODE_ON_ROWSTORE / DISALLOW_BATCH_MODE</span><span class="lang-vi">BATCH_MODE_ON_ROWSTORE / DISALLOW_BATCH_MODE</span></li>
<ul><li><span class="lang-en">For Data Warehouse workloads.</span><span class="lang-vi">Dành cho workload Data Warehouse.</span></li>
<li><span class="lang-en">Queries can work on batches of rows instead of one row at a time, when cached.</span><span class="lang-vi">Query có thể xử lý theo lô nhiều dòng thay vì từng dòng một, khi dữ liệu đã được cache.</span></li>
<li><span class="lang-en">This happens automatically when the query plan decides it is appropriate in Compatibility Mode 140 for Batch Mode, and Mode 150 (SQL Server 2019+) for Row mode. No changes are required.</span><span class="lang-vi">Việc này diễn ra tự động khi query plan thấy phù hợp — ở Compatibility Mode 140 với Batch Mode, và Mode 150 (SQL Server 2019 trở lên) với Row mode. Không cần thay đổi gì.</span></li>
</ul><li><span class="lang-en">[DISABLE_ ] INTERLEAVED_EXECUTION_TVF</span><span class="lang-vi">[DISABLE_ ] INTERLEAVED_EXECUTION_TVF</span></li>
<ul><li><span class="lang-en">Enabled by default in (Azure or SQL Server 2017+) and Compatibility Level 140+.</span><span class="lang-vi">Bật mặc định trên (Azure hoặc SQL Server 2017 trở lên) và Compatibility Level 140 trở lên.</span></li>
<li><span class="lang-en">Use the actual cardinality of a multi-statement table valued functions on first compilation, rather than a fixed guess (100 rows from SQL Server 2014).</span><span class="lang-vi">Use the actual cardinality of a multi-statement table valued functions on first compilation, rather than a fixed guess (100 rows from SQL Server 2014).</span></li>
<li><span class="lang-en">Statements must be read-only – so no INSERT, UPDATE or DELETEs.</span><span class="lang-vi">Câu lệnh phải là read-only — nghĩa là không có INSERT, UPDATE hay DELETE.</span></li>
</ul><li><span class="lang-en">[DISABLE_]BATCH_MODE_MEMORY_GRANT_FEEDBACK (Batch or Row mode)</span><span class="lang-vi">[DISABLE_]BATCH_MODE_MEMORY_GRANT_FEEDBACK (Batch hoặc Row mode)</span></li>
<ul><li><span class="lang-en">Enabled by default in (Azure or SQL Server 2017+) and Compatibility Level 140+.</span><span class="lang-vi">Bật mặc định trên (Azure hoặc SQL Server 2017 trở lên) và Compatibility Level 140 trở lên.</span></li>
<li><span class="lang-en">SQL Server looks how much memory is allocated to a cached query, and then allocates same amount of memory next time (instead of guessing, then adding more, more, more).</span><span class="lang-vi">SQL Server xem lượng memory đã cấp cho một query được cache, rồi lần sau cấp đúng lượng đó (thay vì đoán rồi phải xin thêm nhiều lần).</span></li>
<ul><li><span class="lang-en">If a query spills to disk, add more memory for consecutive executions. If it wastes 50+% of the memory, reduce memory for consecutive executions.</span><span class="lang-vi">Nếu query bị spill xuống đĩa thì cấp thêm memory cho các lần chạy sau. Nếu nó lãng phí từ 50% memory trở lên thì giảm bớt cho các lần chạy sau.</span></li>
</ul></ul><li><span class="lang-en">[DISABLE_ ] TSQL_SCALAR_UDF_INLINING</span><span class="lang-vi">[DISABLE_ ] TSQL_SCALAR_UDF_INLINING</span></li>
<ul><li><span class="lang-en">Enabled by default in (Azure or SQL Server 2019+) and Compatibility Level 150+.</span><span class="lang-vi">Bật mặc định trên (Azure hoặc SQL Server 2019 trở lên) và Compatibility Level 150 trở lên.</span></li>
<li><span class="lang-en">Scalar UDFs often perform poorly due to:</span><span class="lang-vi">Scalar UDF thường chạy kém vì:</span></li>
<ul><li><span class="lang-en">Running multiple times, once per row.</span><span class="lang-vi">Chạy nhiều lần, mỗi dòng một lần.</span></li>
<li><span class="lang-en">Unable to actually work out the performance cost.</span><span class="lang-vi">Không tính được chi phí hiệu năng thực sự.</span></li>
<li><span class="lang-en">Unable to optimize more than one SELECT statement at once.</span><span class="lang-vi">Không tối ưu được nhiều câu SELECT cùng lúc.</span></li>
<li><span class="lang-en">No parallelism in queries which invoke UDFs.</span><span class="lang-vi">Không có tính song song trong query gọi UDF.</span></li>
</ul><li><span class="lang-en">Scalar UDFs are transformed into equivalent relational expressions inlined into the query, often resulting in performance gains.</span><span class="lang-vi">Scalar UDF được biến đổi thành biểu thức quan hệ tương đương và nhúng thẳng vào query, thường mang lại cải thiện hiệu năng.</span></li>
<ul><li><span class="lang-en">Does not work with all UDFs, including those which have multiple RETURN statements.</span><span class="lang-vi">Không áp dụng được cho mọi UDF, chẳng hạn UDF có nhiều câu RETURN.</span></li>
<li><span class="lang-en">Can also be disabled for a specific UDF by adding &quot;WITH INLINE = OFF&quot; before &quot;AS BEGIN&quot;.</span><span class="lang-vi">Cũng có thể tắt cho một UDF cụ thể bằng cách thêm &quot;WITH INLINE = OFF&quot; trước &quot;AS BEGIN&quot;.</span></li>
</ul></ul><li><span class="lang-en">[DISABLE_ ] DEFERRED_COMPILATION_TV</span><span class="lang-vi">[DISABLE_ ] DEFERRED_COMPILATION_TV</span></li>
<ul><li><span class="lang-en">Similar to INTERLEAVED_EXECUTION_TVF, but for Table Variables.</span><span class="lang-vi">Tương tự INTERLEAVED_EXECUTION_TVF nhưng dành cho Table Variable.</span></li>
<li><span class="lang-en">Use the actual cardinality of the table variable encountered on first compilation instead of a fixed guess (1 row).</span><span class="lang-vi">Use the actual cardinality of the table variable encountered on first compilation instead of a fixed guess (1 row).</span></li>
</ul></ul></section>
<h2 class="dom" id="dom4">4 · Configure and manage automation of tasks</h2>
<section id="s-sec4"><h3><span class="n"></span> <span class="lang-en">Domain 4 at a glance — automation summary tables</span><span class="lang-vi">Tổng hợp phạm vi 4 — bảng ôn nhanh về tự động hoá</span><a class="anch" href="#s-sec4" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">A synthesis of sections 67–77 for revision.</span><span class="lang-vi">Tổng hợp các mục 67–77 để ôn nhanh.</span></li>
</ul>
<ul><li><span class="lang-en">Which automation engine exists where — this is what most questions in this domain turn on:</span><span class="lang-vi">Cơ chế tự động hoá nào có ở đâu — phần lớn câu hỏi phạm vi này xoay quanh đúng chỗ đó:</span></li>
</ul>
<div class="tw"><table class="cmp"><tr><th><span class="lang-en">Mechanism</span><span class="lang-vi">Cơ chế</span></th><th><span class="lang-en">Azure SQL Database</span><span class="lang-vi">Azure SQL Database</span></th><th><span class="lang-en">Managed Instance</span><span class="lang-vi">Managed Instance</span></th><th><span class="lang-en">SQL Server on a VM</span><span class="lang-vi">SQL Server trên VM</span></th></tr><tr><td><span class="lang-en"><a href="#s67">SQL Server Agent</a></span><span class="lang-vi"><a href="#s67">SQL Server Agent</a></span></td><td><span class="lang-en">Not available</span><span class="lang-vi">Không có</span></td><td><span class="lang-en">Always running, nothing to start</span><span class="lang-vi">Luôn chạy sẵn, không phải bật</span></td><td><span class="lang-en">Available, may need starting</span><span class="lang-vi">Có, đôi khi phải Start</span></td></tr><tr><td><span class="lang-en"><a href="#s74">Elastic Jobs</a></span><span class="lang-vi"><a href="#s74">Elastic Jobs</a></span></td><td><span class="lang-en">The replacement for Agent: an elastic job agent runs T-SQL against many targets</span><span class="lang-vi">Bản thay thế cho Agent: elastic job agent chạy T-SQL trên nhiều target</span></td><td><span class="lang-en">Not the usual choice — use Agent</span><span class="lang-vi">Thường không dùng — đã có Agent</span></td><td><span class="lang-en">Not the usual choice — use Agent</span><span class="lang-vi">Thường không dùng — đã có Agent</span></td></tr><tr><td><span class="lang-en"><a href="#s75">Multi-server administration</a></span><span class="lang-vi"><a href="#s75">Multi-server administration</a></span></td><td><span class="lang-en">Not available</span><span class="lang-vi">Không có</span></td><td colspan="2"><span class="lang-en">Master and target servers; a target belongs to exactly one master</span><span class="lang-vi">Master và target server; một target chỉ thuộc đúng một master</span></td></tr><tr><td><span class="lang-en"><a href="#s77">SQL Agent event notifications</a></span><span class="lang-vi"><a href="#s77">Event notification của SQL Agent</a></span></td><td><span class="lang-en">Not available</span><span class="lang-vi">Không có</span></td><td><span class="lang-en">Agent exists but event notifications are not allowed</span><span class="lang-vi">Có Agent nhưng không cho dùng event notification</span></td><td><span class="lang-en">Available</span><span class="lang-vi">Có</span></td></tr><tr><td><span class="lang-en"><a href="#s75-4">Policy-based management</a></span><span class="lang-vi"><a href="#s75-4">Policy-based management</a></span></td><td><span class="lang-en">Not applicable</span><span class="lang-vi">Không áp dụng</span></td><td><span class="lang-en">Not applicable</span><span class="lang-vi">Không áp dụng</span></td><td><span class="lang-en">Available, with automated evaluation modes</span><span class="lang-vi">Có, kèm chế độ đánh giá tự động</span></td></tr><tr><td><span class="lang-en"><a href="#s77-2">Azure Monitor alert rules</a></span><span class="lang-vi"><a href="#s77-2">Alert rule của Azure Monitor</a></span></td><td colspan="3"><span class="lang-en">Available on every Azure SQL resource — metric or log signal plus an action group</span><span class="lang-vi">Có trên mọi tài nguyên Azure SQL — tín hiệu metric hoặc log cộng action group</span></td></tr><tr><td><span class="lang-en"><a href="#s75-3">Patching and backups</a></span><span class="lang-vi"><a href="#s75-3">Vá lỗi và backup</a></span></td><td colspan="2"><span class="lang-en">Automatic, you cannot choose the timing — write retry logic</span><span class="lang-vi">Tự động, bạn không chọn được thời điểm — hãy viết retry logic</span></td><td><span class="lang-en">SQL IaaS Agent extension gives Automated Patching and Automated Backup</span><span class="lang-vi">SQL IaaS Agent extension cho Automated Patching và Automated Backup</span></td></tr></table></div>
<ul><li><span class="lang-en">Automated deployment:</span><span class="lang-vi">Triển khai tự động:</span></li>
</ul>
<div class="tw"><table class="cmp"><tr><th><span class="lang-en">Approach</span><span class="lang-vi">Cách</span></th><th><span class="lang-en">Written in</span><span class="lang-vi">Viết bằng</span></th><th><span class="lang-en">Typical commands</span><span class="lang-vi">Lệnh tiêu biểu</span></th></tr><tr><td><span class="lang-en"><a href="#s70-2">ARM template</a></span><span class="lang-vi"><a href="#s70-2">ARM template</a></span></td><td><span class="lang-en">JSON</span><span class="lang-vi">JSON</span></td><td><span class="lang-en">Deploy a custom template from the portal, CLI or PowerShell</span><span class="lang-vi">Deploy custom template từ portal, CLI hoặc PowerShell</span></td></tr><tr><td><span class="lang-en"><a href="#s70-2">Bicep</a></span><span class="lang-vi"><a href="#s70-2">Bicep</a></span></td><td><span class="lang-en">A declarative DSL on top of ARM</span><span class="lang-vi">Một DSL khai báo, dựng trên ARM</span></td><td><span class="lang-en">Authored in VS Code with the Bicep extension; compiles to ARM</span><span class="lang-vi">Soạn trong VS Code với extension Bicep; biên dịch ra ARM</span></td></tr><tr><td><span class="lang-en"><a href="#s71">PowerShell</a></span><span class="lang-vi"><a href="#s71">PowerShell</a></span></td><td><span class="lang-en">Az modules</span><span class="lang-vi">Module Az</span></td><td><span class="lang-en">New-AzResourceGroup, New-AzSqlServer, New-AzSqlDatabase</span><span class="lang-vi">New-AzResourceGroup, New-AzSqlServer, New-AzSqlDatabase</span></td></tr><tr><td><span class="lang-en"><a href="#s72">Azure CLI</a></span><span class="lang-vi"><a href="#s72">Azure CLI</a></span></td><td><span class="lang-en">az commands</span><span class="lang-vi">Lệnh az</span></td><td><span class="lang-en">az group create, az sql server create, az sql db create</span><span class="lang-vi">az group create, az sql server create, az sql db create</span></td></tr></table></div>
<ul><li><span class="lang-en">Notifications and alerts:</span><span class="lang-vi">Thông báo và cảnh báo:</span></li>
</ul>
<div class="tw"><table class="cmp"><tr><th><span class="lang-en">Need</span><span class="lang-vi">Nhu cầu</span></th><th><span class="lang-en">Use</span><span class="lang-vi">Dùng</span></th><th><span class="lang-en">Remember</span><span class="lang-vi">Cần nhớ</span></th></tr><tr><td><span class="lang-en">Tell someone a job succeeded, failed or never ran</span><span class="lang-vi">Báo cho ai đó biết job chạy xong, thất bại hoặc không chạy</span></td><td><span class="lang-en"><a href="#s68">SQL Agent operator + Database Mail</a></span><span class="lang-vi"><a href="#s68">Operator của SQL Agent + Database Mail</a></span></td><td><span class="lang-en">MI and VM only; the pager fields are deprecated</span><span class="lang-vi">Chỉ MI và VM; các trường pager đã deprecated</span></td></tr><tr><td><span class="lang-en">Alert on an Azure metric crossing a threshold</span><span class="lang-vi">Cảnh báo khi một metric của Azure vượt ngưỡng</span></td><td><span class="lang-en"><a href="#s77-2">Azure Monitor alert rule</a></span><span class="lang-vi"><a href="#s77-2">Alert rule của Azure Monitor</a></span></td><td><span class="lang-en">Metrics → + New alert rule → condition → action group</span><span class="lang-vi">Metrics → + New alert rule → điều kiện → action group</span></td></tr><tr><td><span class="lang-en">Know when someone changed a server configuration</span><span class="lang-vi">Biết khi có người đổi cấu hình server</span></td><td><span class="lang-en"><a href="#s77-3">The default trace</a></span><span class="lang-vi"><a href="#s77-3">Default trace</a></span></td><td><span class="lang-en">sp_configure 'default trace enabled', 1 — MI and VM, changes made with sp_configure</span><span class="lang-vi">sp_configure 'default trace enabled', 1 — MI và VM, các thay đổi thực hiện bằng sp_configure</span></td></tr><tr><td><span class="lang-en">Run maintenance T-SQL across many Azure SQL databases</span><span class="lang-vi">Chạy T-SQL bảo trì trên nhiều Azure SQL database</span></td><td><span class="lang-en"><a href="#s74">Elastic Jobs</a></span><span class="lang-vi"><a href="#s74">Elastic Jobs</a></span></td><td><span class="lang-en">Targets can sit on different servers and pools</span><span class="lang-vi">Target có thể nằm ở các server và pool khác nhau</span></td></tr><tr><td><span class="lang-en">Chain steps across several Azure services</span><span class="lang-vi">Nối nhiều bước qua nhiều dịch vụ Azure</span></td><td><span class="lang-en"><a href="#s76">Logic Apps</a></span><span class="lang-vi"><a href="#s76">Logic Apps</a></span></td><td><span class="lang-en">A trigger followed by actions — dropped from the exam skills on 7 February 2024</span><span class="lang-vi">Một trigger rồi tới các action — đã bỏ khỏi skills của đề từ 07/02/2024</span></td></tr></table></div>
</section>
<section id="s67"><h3><span class="n">67.</span> <span class="lang-en">manage schedules for regular maintenance jobs</span><span class="lang-vi">quản lý lịch chạy các job bảo trì định kỳ</span><a class="anch" href="#s67" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">For Azure SQL Database, see topic 46.</span><span class="lang-vi">Với Azure SQL Database, xem mục 46.</span></li>
<li><span class="lang-en">This is for SQL Server on a VM, and Azure SQL MI, but not Azure SQL Database, as it uses SQL Server Agent.</span><span class="lang-vi">Phần này dành cho SQL Server trên VM và Azure SQL MI, không áp dụng cho Azure SQL Database, vì nó dùng SQL Server Agent.</span></li>
<ul><li><span class="lang-en">SQL Server Agent doesn't need to be enabled on Azure SQL MI – it is always running.</span><span class="lang-vi">SQL Server Agent không cần bật trên Azure SQL MI — nó luôn chạy sẵn.</span></li>
<li><span class="lang-en">It doesn't have all of the functionality of on-prem SQL Server, but it has most of it.</span><span class="lang-vi">Nó không có đủ toàn bộ chức năng của SQL Server on-prem, nhưng có hầu hết.</span></li>
</ul><li><span class="lang-en">To create a new job:</span><span class="lang-vi">Để tạo job mới:</span></li>
<ul><li><span class="lang-en">Go to SQL Server Agent (right-hand click it and Start if needed on a VM) – Jobs.</span><span class="lang-vi">Vào SQL Server Agent (trên VM, chuột phải và bấm Start nếu cần) – Jobs.</span></li>
<li><span class="lang-en">Right-hand click and go to &quot;New Job&quot;.</span><span class="lang-vi">Chuột phải và chọn &quot;New Job&quot;.</span></li>
<li><span class="lang-en">Enter a job name.</span><span class="lang-vi">Nhập tên job.</span></li>
<li><span class="lang-en">Go to the Steps tab and click New.</span><span class="lang-vi">Vào tab Steps và bấm New.</span></li>
<li><span class="lang-en">Enter the First Step name, select the database, and which user is running the command, and enter your T-SQL command.</span><span class="lang-vi">Nhập tên bước đầu tiên, chọn database, chọn user sẽ chạy lệnh, rồi nhập lệnh T-SQL của bạn.</span></li>
<li><span class="lang-en">Click &quot;Parse&quot; to check the syntax.</span><span class="lang-vi">Bấm &quot;Parse&quot; để kiểm tra cú pháp.</span></li>
<li><span class="lang-en">Add additional sets as needed.</span><span class="lang-vi">Add additional sets as needed.</span></li>
</ul><li><span class="lang-en">To create a schedule for a job:</span><span class="lang-vi">Để tạo lịch cho một job:</span></li>
<ul><li><span class="lang-en">Go to SQL Server Agent (right-hand click it and Start if needed on a VM) – Jobs.</span><span class="lang-vi">Vào SQL Server Agent (trên VM, chuột phải và bấm Start nếu cần) – Jobs.</span></li>
<li><span class="lang-en">Right-hand click and go to Properties.</span><span class="lang-vi">Chuột phải và vào Properties.</span></li>
<li><span class="lang-en">Go to Schedules and click New.</span><span class="lang-vi">Vào Schedules và bấm New.</span></li>
<li><span class="lang-en">Enter:</span><span class="lang-vi">Nhập:</span></li>
<ul><li><span class="lang-en">A name,</span><span class="lang-vi">Một tên,</span></li>
<li><span class="lang-en">Whether it is:</span><span class="lang-vi">Kiểu lịch:</span></li>
<ul><li><span class="lang-en">One time,</span><span class="lang-vi">One time,</span></li>
<li><span class="lang-en">Recurring (Daily, Weekly, Monthly – and when),</span><span class="lang-vi">Recurring (Daily, Weekly, Monthly — và thời điểm cụ thể),</span></li>
<li><span class="lang-en">&quot;Start whenever the CPUs become idle&quot; or</span><span class="lang-vi">&quot;Start whenever the CPUs become idle&quot;, hoặc</span></li>
<li><span class="lang-en">&quot;Start automatically when SQL Server Agent starts&quot; – this setting is not supported in MI.</span><span class="lang-vi">&quot;Start automatically when SQL Server Agent starts&quot; — thiết lập này KHÔNG được hỗ trợ trên MI.</span></li>
</ul></ul><li><span class="lang-en">If you subsequently want to Edit or Remove it, you can click those buttons.</span><span class="lang-vi">Nếu sau này muốn sửa hoặc xóa, bạn bấm các nút Edit hoặc Remove.</span></li>
<li><span class="lang-en">If you want to import a previously made schedule, click &quot;Pick&quot; and then choose the schedule.</span><span class="lang-vi">Nếu muốn dùng lại một lịch đã tạo trước đó, bấm &quot;Pick&quot; rồi chọn lịch.</span></li>
</ul><li><span class="lang-en">To do this in T-SQL:</span><span class="lang-vi">Làm bằng T-SQL:</span></li>
<ul><ul><li class="cb"><pre class="code"><span class="lang-en">USE msdb ;
GO
EXEC sp_add_schedule
@schedule_name = N'ScheduleName' ,
@freq_type = 4,
@freq_interval = 1, -- Fairly complex
@active_start_time = 012345 ;
GO
EXEC sp_attach_schedule
@job_name = N'JobName',
@schedule_name = N'ScheduleName' ;
GO</span><span class="lang-vi">USE msdb ;
GO
EXEC sp_add_schedule
@schedule_name = N'ScheduleName' ,
@freq_type = 4,
@freq_interval = 1, -- khá phức tạp
@active_start_time = 012345 ;
GO
EXEC sp_attach_schedule
@job_name = N'JobName',
@schedule_name = N'ScheduleName' ;
GO</span></pre></li>
<ul><li><span class="lang-en">1 = Once, 4 = Daily, 8 = Weekly, 16 = Monthly (day of month), 32 = Monthly (Xth Sunday, for example), 64 = When SQL Agent service stats, 128 = When computer is idle.</span><span class="lang-vi">1 = Once, 4 = Daily, 8 = Weekly, 16 = Monthly (theo ngày trong tháng), 32 = Monthly (ví dụ Chủ nhật thứ X), 64 = khi service SQL Agent khởi động, 128 = khi máy tính rảnh.</span></li>
</ul>
</ul></ul><li><span class="lang-en">To view schedules:</span><span class="lang-vi">Để xem các lịch:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">USE msdb ;
GO
select *
from sysschedules</span><span class="lang-vi">USE msdb ;
GO
select *
from sysschedules</span></pre></li>
</ul><li><span class="lang-en">You can see when jobs have run by:</span><span class="lang-vi">Bạn xem được job đã chạy khi nào bằng cách:</span></li>
<ul><li><span class="lang-en">Going to SQL Server – Job Activity Monitor</span><span class="lang-vi">Vào SQL Server – Job Activity Monitor</span></li>
</ul></ul></section>
<section id="s68"><h3><span class="n">68.</span> <span class="lang-en">configure notifications for task success/failure/non-completion</span><span class="lang-vi">cấu hình thông báo khi tác vụ thành công/thất bại/không hoàn tất</span><a class="anch" href="#s68" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">For Azure SQL Database, see topic 46.</span><span class="lang-vi">Với Azure SQL Database, xem mục 46.</span></li>
<li><span class="lang-en">To create an operator:</span><span class="lang-vi">Để tạo một operator:</span></li>
<ul><li><span class="lang-en">Go to SQL Server Agent (right-hand click it and Start if needed on a VM) – Operators.</span><span class="lang-vi">Vào SQL Server Agent (trên VM, chuột phải và bấm Start nếu cần) – Operators.</span></li>
<li><span class="lang-en">Right-hand click and select &quot;New Operator&quot;.</span><span class="lang-vi">Chuột phải và chọn &quot;New Operator&quot;.</span></li>
<li><span class="lang-en">Enter Name and e-mail name and/or pager e-mail name (and pager timings).</span><span class="lang-vi">Nhập Name và địa chỉ e-mail và/hoặc e-mail của pager (cùng khung giờ nhận pager).</span></li>
<ul><li><span class="lang-en">Pager functionality has been deprecated, and will be removed in a future version.</span><span class="lang-vi">Chức năng pager đã bị deprecate và sẽ bị gỡ bỏ ở phiên bản tương lai.</span></li>
</ul></ul><li><span class="lang-en">In T-SQL, use:</span><span class="lang-vi">Bằng T-SQL, dùng:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">USE msdb ;
GO
EXEC dbo.sp_add_operator
@name = N'OperatorName',
@enabled = 1, -- 1 = enabled, 0 = not enabled.
@email_address = N'EmailAddress'</span><span class="lang-vi">USE msdb ;
GO
EXEC dbo.sp_add_operator
@name = N'OperatorName',
@enabled = 1, -- 1 = bật, 0 = tắt.
@email_address = N'EmailAddress'</span></pre></li>
<li><span class="lang-en">There are also pager arguments as well.</span><span class="lang-vi">Ngoài ra còn có các tham số dành cho pager.</span></li>
</ul><li><span class="lang-en">To configure notifications:</span><span class="lang-vi">Để cấu hình thông báo:</span></li>
<ul><li><span class="lang-en">Go to SQL Server Agent (right-hand click it and Start if needed on a VM) – Jobs.</span><span class="lang-vi">Vào SQL Server Agent (trên VM, chuột phải và bấm Start nếu cần) – Jobs.</span></li>
<li><span class="lang-en">Right-hand click a job and go to Properties.</span><span class="lang-vi">Chuột phải vào một job và vào Properties.</span></li>
<li><span class="lang-en">Go to Notifications, and</span><span class="lang-vi">Vào Notifications, rồi:</span></li>
<ul><li><span class="lang-en">Select Email, Page(r), &quot;Write to the Windows Application event log&quot; and &quot;Automatically delete job&quot;</span><span class="lang-vi">Select Email, Page(r), &quot;Write to the Windows Application event log&quot; and &quot;Automatically delete job&quot;</span></li>
<li><span class="lang-en">When the job fails, succeeds, or completes (fails or succeeds).</span><span class="lang-vi">Khi job thất bại, thành công, hoặc kết thúc (dù thất bại hay thành công).</span></li>
<li><span class="lang-en">This is for the entire task, not individual steps.</span><span class="lang-vi">Thiết lập này áp cho toàn bộ job, không phải cho từng bước riêng lẻ.</span></li>
<li><span class="lang-en">The email and pager need to be already created.</span><span class="lang-vi">Email và pager phải được tạo từ trước.</span></li>
</ul></ul><li><span class="lang-en">In T-SQL, use:</span><span class="lang-vi">Bằng T-SQL, dùng:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">USE msdb ;
GO
EXEC dbo.sp_add_notification
@alert_name = N'NameOfAlert',
@operator_name = N'OperatorName',
@notification_method = 1 ;</span><span class="lang-vi">USE msdb ;
GO
EXEC dbo.sp_add_notification
@alert_name = N'NameOfAlert',
@operator_name = N'OperatorName',
@notification_method = 1 ;</span></pre></li>
<ul><li><span class="lang-en">1 = Email, 2 = Pager, 4 = Net Send.</span><span class="lang-vi">1 = Email, 2 = Pager, 4 = Net Send.</span></li>
<li><span class="lang-en">Pager and Net Send have been deprecated.</span><span class="lang-vi">Pager và Net Send đã bị deprecate.</span></li>
</ul></ul><li><span class="lang-en">To configure Database Mail, you need to:</span><span class="lang-vi">Để cấu hình Database Mail, bạn cần:</span></li>
<ul><li><span class="lang-en">Enable Database Mail.</span><span class="lang-vi">Bật Database Mail.</span></li>
<ul><li><span class="lang-en">This is not necessary on Azure SQL MI, as it is enabled by default.</span><span class="lang-vi">Bước này không cần thiết trên Azure SQL MI vì nó đã được bật sẵn.</span></li>
<li><span class="lang-en">In SSMS, go to the Server – Management.</span><span class="lang-vi">Trong SSMS, vào Server – Management.</span></li>
<li><span class="lang-en">Right-hand click on &quot;Database Mail&quot;, and click Configure Database Mail.</span><span class="lang-vi">Chuột phải vào &quot;Database Mail&quot; và bấm Configure Database Mail.</span></li>
</ul><li><span class="lang-en">Create a Database Mail account for the SQL Server Agent service account to use.</span><span class="lang-vi">Create a Database Mail account for the SQL Server Agent service account to use.</span></li>
<ul><li><span class="lang-en">In SSMS, go to the Server – Management.</span><span class="lang-vi">Trong SSMS, vào Server – Management.</span></li>
<li><span class="lang-en">Double-click &quot;Data Mail&quot;.</span><span class="lang-vi">Bấm đúp vào &quot;Database Mail&quot;.</span></li>
<li><span class="lang-en">In the &quot;Database Mail Configuration Wizard&quot;, select &quot;Manage Database Mail accounts and profiles&quot;.</span><span class="lang-vi">Trong &quot;Database Mail Configuration Wizard&quot;, chọn &quot;Manage Database Mail accounts and profiles&quot;.</span></li>
<li><span class="lang-en">Select &quot;Create a new account&quot;.</span><span class="lang-vi">Select &quot;Create a new account&quot;.</span></li>
</ul><li><span class="lang-en">Create a Database Mail profile for the SQL Server Agent service account to use and add the user to the DatabaseMailUserRole in the msdb database.</span><span class="lang-vi">Create a Database Mail profile for the SQL Server Agent service account to use and add the user to the DatabaseMailUserRole in the msdb database.</span></li>
<ul><li><span class="lang-en">As above, but select &quot;Create a new profile&quot;.</span><span class="lang-vi">Làm như trên, nhưng chọn &quot;Create a new profile&quot;.</span></li>
<li><span class="lang-en">For Azure MI, your profile must be called AzureManagedInstance_dbmail_profile if you want to send e-mail using SQL Agent jobs.</span><span class="lang-vi">Với Azure MI, profile của bạn PHẢI có tên AzureManagedInstance_dbmail_profile nếu muốn gửi e-mail bằng SQL Agent job.</span></li>
</ul><li><span class="lang-en">Set the profile as the default profile for the msdb database.</span><span class="lang-vi">Set the profile as the default profile for the msdb database.</span></li>
<ul><li><span class="lang-en">In the &quot;Manage Profile Security&quot;, &quot;Default Profile&quot; should say &quot;Yes&quot;.</span><span class="lang-vi">Trong &quot;Manage Profile Security&quot;, mục &quot;Default Profile&quot; phải là &quot;Yes&quot;.</span></li>
</ul></ul></ul></section>
<section id="s70"><h3><span class="n">70, , 71, 72.</span> <span class="lang-en">perform automated deployment methods for resources</span><span class="lang-vi">thực hiện các phương thức triển khai tự động cho tài nguyên</span><a class="anch" href="#s70" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Use an ARM Template to deploy resources.</span><span class="lang-vi">Use an ARM Template to deploy resources.</span></li>
<ul><li><span class="lang-en">Written in JSON.</span><span class="lang-vi">Viết bằng JSON.</span></li>
<li><span class="lang-en">https://docs.microsoft.com/en-us/azure/azure-sql/virtual-machines/windows/create-sql- vm-resource-manager-template?tabs=CLI</span><span class="lang-vi">https://docs.microsoft.com/en-us/azure/azure-sql/virtual-machines/windows/create-sql- vm-resource-manager-template?tabs=CLI</span></li>
</ul><li><span class="lang-en">You can also use Azure Cloud Shell</span><span class="lang-vi">Bạn cũng có thể dùng Azure Cloud Shell</span></li>
<ul><li><span class="lang-en">Using PowerShell</span><span class="lang-vi">Dùng PowerShell</span></li>
<ul><li><span class="lang-en">https://docs.microsoft.com/en-us/azure/azure-sql/database/single-database- create-quickstart?tabs=azure-powershell</span><span class="lang-vi">https://docs.microsoft.com/en-us/azure/azure-sql/database/single-database- create-quickstart?tabs=azure-powershell</span></li>
<li><span class="lang-en">https://docs.microsoft.com/en-us/azure/azure-sql/managed- instance/scripts/create-configure-managed-instance-powershell</span><span class="lang-vi">https://docs.microsoft.com/en-us/azure/azure-sql/managed- instance/scripts/create-configure-managed-instance-powershell</span></li>
</ul><li><span class="lang-en">Or CLI (command line interface)</span><span class="lang-vi">Hoặc CLI (command line interface)</span></li>
<ul><li><span class="lang-en">https://docs.microsoft.com/en-us/azure/azure-sql/database/single-database- create-quickstart?tabs=azure-cli</span><span class="lang-vi">https://docs.microsoft.com/en-us/azure/azure-sql/database/single-database- create-quickstart?tabs=azure-cli</span></li>
</ul></ul><li><span class="lang-en">To deploy a database, you can use:</span><span class="lang-vi">Để triển khai một database, bạn có thể dùng:</span></li>
<ul><li><span class="lang-en">If you are using an Azure Pipeline, you can use a DACPAC (data-tier application portable artifact)</span><span class="lang-vi">Nếu dùng Azure Pipeline, bạn có thể dùng DACPAC (data-tier application portable artifact)</span></li>
<ul><li><span class="lang-en">This gets added to your azure-pipelines.yml (yml stands for “Yet Another Markup Language”).</span><span class="lang-vi">File này được thêm vào azure-pipelines.yml của bạn (yml là viết tắt của &quot;Yet Another Markup Language&quot;).</span></li>
</ul><li><span class="lang-en">SQL scripts, together with PowerShell.</span><span class="lang-vi">SQL script kết hợp với PowerShell.</span></li>
</ul></ul></section>
<section id="s70-2"><h3><span class="n">70.</span> <span class="lang-en">Automate deployment by using Azure Resource Manager templates (ARM</span><span class="lang-vi">Tự động hóa triển khai bằng Azure Resource Manager template (ARM</span><a class="anch" href="#s70-2" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">templates) and Bicep</span><span class="lang-vi">template) và Bicep</span></li>
<li><span class="lang-en">An ARM template is a JSON (JavaScript Object Notation) file that defines your project.</span><span class="lang-vi">ARM template là một file JSON (JavaScript Object Notation) mô tả dự án của bạn.</span></li>
<li><span class="lang-en">Bicep, a Domain Specific Language (DSL), uses declarative syntax to deploy Azure resources.</span><span class="lang-vi">Bicep là một Domain Specific Language (DSL), dùng cú pháp declarative để triển khai tài nguyên Azure.</span></li>
<ul><li><span class="lang-en">It is an extension to the ARM template language.</span><span class="lang-vi">Nó là phần mở rộng của ngôn ngữ ARM template.</span></li>
<li><span class="lang-en">You can use Bicep Extension for VS Code to create and deploy your files.</span><span class="lang-vi">Bạn có thể dùng Bicep Extension cho VS Code để tạo và triển khai file.</span></li>
</ul><li><span class="lang-en">To deploy your own custom template:</span><span class="lang-vi">Để triển khai template tùy chỉnh của riêng bạn:</span></li>
<ul><li><span class="lang-en">Go to the Azure Portal, and search for &quot;Deploy a custom template&quot;.</span><span class="lang-vi">Vào Azure Portal và tìm &quot;Deploy a custom template&quot;.</span></li>
<li><span class="lang-en">For ARM, you can use a Quickstart template such as:</span><span class="lang-vi">Với ARM, bạn có thể dùng một Quickstart template như:</span></li>
<ul><li><span class="lang-en">&quot;quickstarts/microsoft.sql/sql-database&quot;,</span><span class="lang-vi">&quot;quickstarts/microsoft.sql/sql-database&quot;,</span></li>
<li><span class="lang-en">&quot;quickstarts/microsoft.sql/sqlmi-new-vnet&quot;, or</span><span class="lang-vi">&quot;quickstarts/microsoft.sql/sqlmi-new-vnet&quot;, hoặc</span></li>
<li><span class="lang-en">&quot;quickstarts/microsoft.sqlvirtualmachine/sql-vm-new-storage&quot;.</span><span class="lang-vi">&quot;quickstarts/microsoft.sqlvirtualmachine/sql-vm-new-storage&quot;.</span></li>
</ul><li><span class="lang-en">Alternatively, you can click &quot;Build your own template in the editor&quot;.</span><span class="lang-vi">Alternatively, you can click &quot;Build your own template in the editor&quot;.</span></li>
<li><span class="lang-en">Note the &quot;type&quot;:</span><span class="lang-vi">Chú ý trường &quot;type&quot;:</span></li>
<ul><li><span class="lang-en">Microsoft.Sql/servers and Microsoft.Sql/servers/databases or</span><span class="lang-vi">Microsoft.Sql/servers và Microsoft.Sql/servers/databases, hoặc</span></li>
<li><span class="lang-en">Microsoft.Sql/managedInstances</span><span class="lang-vi">Microsoft.Sql/managedInstances</span></li>
<li><span class="lang-en">Microsoft.Computer/virtualMachines and Microsoft.SqlVirtualMachine/sqlVirtualMachines</span><span class="lang-vi">Microsoft.Compute/virtualMachines và Microsoft.SqlVirtualMachine/sqlVirtualMachines</span></li>
</ul><li><span class="lang-en">For Bicep:</span><span class="lang-vi">Với Bicep:</span></li>
<ul><li><span class="lang-en">For SQL Database, use resource sqlServer</span><span class="lang-vi">Với SQL Database, dùng resource sqlServer</span></li>
<li><span class="lang-en">For SQL MI, use resource managedInstance</span><span class="lang-vi">Với SQL MI, dùng resource managedInstance</span></li>
</ul></ul><li><span class="lang-en">You can convert Bicep to ARM by using the Bicep Playground.</span><span class="lang-vi">Bạn chuyển Bicep sang ARM bằng Bicep Playground.</span></li>
<li><span class="lang-en">You can also go from ARM to Bicep by clicking on the &quot;Decompile&quot; button, or in Azure CLI:</span><span class="lang-vi">Bạn cũng chuyển ngược từ ARM sang Bicep bằng nút &quot;Decompile&quot;, hoặc bằng Azure CLI:</span></li>
<ul><li><code><span class="lang-en">az bicep decompile --file myfile.json</span><span class="lang-vi">az bicep decompile --file myfile.json</span></code></li>
</ul></ul></section>
<section id="s71"><h3><span class="n">71.</span> <span class="lang-en">Automate deployment by using PowerShell</span><span class="lang-vi">Tự động hóa triển khai bằng PowerShell</span><a class="anch" href="#s71" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">To create an SQL database using PowerShell, use:</span><span class="lang-vi">Để tạo một SQL database bằng PowerShell, dùng:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">Write-host &quot;Creating resource group...&quot;
$resourceGroup = New-AzResourceGroup -Name &quot;PowerShellResourceGroup&quot; -Location &quot;eastus&quot;
$resourceGroup
Write-host &quot;Creating SQL Database Server...&quot;
$server = New-AzSqlServer -ResourceGroupName &quot;PowerShellResourceGroup&quot; \`
-ServerName &quot;sqldatabase220714-5ps&quot; \`
-Location &quot;eastus&quot; \`
-SqlAdministratorCredentials $(New-Object -TypeName System.Management.Automation.PSCredential \`
-ArgumentList &quot;phillipburton&quot;, $(ConvertTo-SecureString -String &quot;MyP@ssw0rd!&quot; -AsPlainText -Force))
$server
Write-host &quot;Creating SQL Database...&quot;
$database = New-AzSqlDatabase -ResourceGroupName &quot;PowerShellResourceGroup&quot; \`
-ServerName &quot;sqldatabase220714-5ps&quot; \`
-DatabaseName &quot;mydatabase&quot; \`
-Edition Basic
$database</span><span class="lang-vi">Write-host &quot;Creating resource group...&quot;
$resourceGroup = New-AzResourceGroup -Name &quot;PowerShellResourceGroup&quot; -Location &quot;eastus&quot;
$resourceGroup
Write-host &quot;Creating SQL Database Server...&quot;
$server = New-AzSqlServer -ResourceGroupName &quot;PowerShellResourceGroup&quot; \`
-ServerName &quot;sqldatabase220714-5ps&quot; \`
-Location &quot;eastus&quot; \`
-SqlAdministratorCredentials $(New-Object -TypeName System.Management.Automation.PSCredential \`
-ArgumentList &quot;phillipburton&quot;, $(ConvertTo-SecureString -String &quot;MyP@ssw0rd!&quot; -AsPlainText -Force))
$server
Write-host &quot;Creating SQL Database...&quot;
$database = New-AzSqlDatabase -ResourceGroupName &quot;PowerShellResourceGroup&quot; \`
-ServerName &quot;sqldatabase220714-5ps&quot; \`
-DatabaseName &quot;mydatabase&quot; \`
-Edition Basic
$database</span></pre></li>
</ul>
<li><span class="lang-en">For SQL MI, use New-AzSqlInstance</span><span class="lang-vi">Với SQL MI, dùng New-AzSqlInstance</span></li>
<li><span class="lang-en">For Azure Virtual Machine, use New-AzVM</span><span class="lang-vi">Với Azure Virtual Machine, dùng New-AzVM</span></li>
</ul></section>
<section id="s72"><h3><span class="n">72.</span> <span class="lang-en">Automate deployment by using Azure CLI</span><span class="lang-vi">Tự động hóa triển khai bằng Azure CLI</span><a class="anch" href="#s72" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">To create an SQL database using Azure CLI, use:</span><span class="lang-vi">Để tạo một SQL database bằng Azure CLI, dùng:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">echo &quot;Creating resource Group&quot;
az group create --name &quot;CLIResourceGroup&quot; --location &quot;East US&quot;
echo &quot;Creating Server&quot;
az sql server create --name &quot;SQLDatabase220714-2&quot; --resource-group &quot;CLIResourceGroup&quot; -- location &quot;East US&quot; --admin-user &quot;phillipburton&quot; --admin-password &quot;MyP@ssw0rd!&quot;
echo &quot;Creating SQL Database $database&quot;
az sql db create --resource-group &quot;CLIResourceGroup&quot; --server &quot;SQLDatabase220714-2&quot; --name &quot;MyDatabase&quot; --edition Basic</span><span class="lang-vi">echo &quot;Creating resource Group&quot;
az group create --name &quot;CLIResourceGroup&quot; --location &quot;East US&quot;
echo &quot;Creating Server&quot;
az sql server create --name &quot;SQLDatabase220714-2&quot; --resource-group &quot;CLIResourceGroup&quot; --location &quot;East US&quot; --admin-user &quot;phillipburton&quot; --admin-password &quot;MyP@ssw0rd!&quot;
echo &quot;Creating SQL Database $database&quot;
az sql db create --resource-group &quot;CLIResourceGroup&quot; --server &quot;SQLDatabase220714-2&quot; --name &quot;MyDatabase&quot; --edition Basic</span></pre></li>
</ul>
<li><span class="lang-en">For Azure Managed Instance, use az sql mi</span><span class="lang-vi">Với Azure Managed Instance, dùng az sql mi</span></li>
<li><span class="lang-en">For Azure Virtual Machine, use az vm create</span><span class="lang-vi">Với Azure Virtual Machine, dùng az vm create</span></li>
</ul></section>
<section id="s74"><h3><span class="n">74.</span> <span class="lang-en">automate database maintenance tasks</span><span class="lang-vi">tự động hóa các tác vụ bảo trì database</span><a class="anch" href="#s74" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">A lot of database maintenance tasks are already automated in Azure, such as updates, backups and creation of indexes.</span><span class="lang-vi">Rất nhiều tác vụ bảo trì database đã được Azure tự động hóa sẵn, như cập nhật, backup và tạo index.</span></li>
<li><span class="lang-en">You can create elastic job agents to automate maintenance tasks and/or run T-SQL queries.</span><span class="lang-vi">Bạn có thể tạo elastic job agent để tự động hóa tác vụ bảo trì và/hoặc chạy query T-SQL.</span></li>
<ul><li><span class="lang-en">You could: manage credentials, collect performance data or telemetry data.</span><span class="lang-vi">Bạn có thể: quản lý credential, thu thập dữ liệu hiệu năng hoặc dữ liệu telemetry.</span></li>
<li><span class="lang-en">Update reference data or load or summarise data from databases or Azure Blob storage.</span><span class="lang-vi">Update reference data or load or summarise data from databases or Azure Blob storage.</span></li>
<li><span class="lang-en">Targets can be in different servers, subscriptions or regions, but must be in the same Azure cloud.</span><span class="lang-vi">Target có thể nằm ở server, subscription hoặc region khác nhau, nhưng phải cùng một Azure cloud.</span></li>
<ul><li><span class="lang-en">One or more databases, all databases in a server or elastic pool or shard map.</span><span class="lang-vi">Một hoặc nhiều database, toàn bộ database trong một server hay elastic pool, hoặc shard map.</span></li>
</ul><li><span class="lang-en">This is the equivalent of SQL Agent Jobs, which are available in SQL MI, but are not available in Azure SQL Database.</span><span class="lang-vi">Đây là tương đương của SQL Agent Job — vốn có trên SQL MI nhưng không có trên Azure SQL Database.</span></li>
</ul><li><span class="lang-en">You need:</span><span class="lang-vi">Bạn cần:</span></li>
<ul><li><span class="lang-en">Elastic Job agent – the Azure resource which runs the jobs. This is free.</span><span class="lang-vi">Elastic Job agent — tài nguyên Azure thực thi các job. Miễn phí.</span></li>
<li><span class="lang-en">Job database – an existing Azure SQL Database stores job related data, such as metadata, logs, results and job definitions. It also contains stored procedures and other objects for jobs.</span><span class="lang-vi">Job database — một Azure SQL Database có sẵn để lưu dữ liệu liên quan tới job như metadata, log, kết quả và định nghĩa job. Nó cũng chứa các stored procedure và object khác phục vụ job.</span></li>
<ul><li><span class="lang-en">This is charged for as an Azure SQL Database.</span><span class="lang-vi">Database này bị tính phí như một Azure SQL Database thông thường.</span></li>
<li><span class="lang-en">You need a Standard (S0 or above) or Premium service tier. S1 or above is recommended, but if you run frequent jobs or against a big target group, you may need more.</span><span class="lang-vi">Bạn cần service tier Standard (S0 trở lên) hoặc Premium. Khuyến nghị S1 trở lên; nếu chạy job thường xuyên hoặc nhắm tới target group lớn thì có thể cần cao hơn.</span></li>
</ul><li><span class="lang-en">Target group – servers, elastic pools, databases and databases of shard map(s) which are affected.</span><span class="lang-vi">Target group — các server, elastic pool, database và database của shard map bị tác động.</span></li>
<ul><li><span class="lang-en">If a server or elastic group, all databases in the server at the time of running the job will be affected. You will need to give the master database credential, so the databases can be enumerated. You can also exclude individual databases or all databases in an elastic pool.</span><span class="lang-vi">Nếu target là server hoặc elastic pool, mọi database trong đó tại thời điểm chạy job đều bị tác động. Bạn phải cung cấp credential của database master để hệ thống liệt kê được các database. Bạn cũng có thể loại trừ từng database riêng lẻ hoặc toàn bộ database trong một elastic pool.</span></li>
</ul><li><span class="lang-en">Job – unit of work which contained job steps, each of which specify the T-SQL script and other details.</span><span class="lang-vi">Job — đơn vị công việc, chứa các job step; mỗi step chỉ định script T-SQL và các thông tin khác.</span></li>
<ul><li><span class="lang-en">Scripts must be &quot;idempotent&quot;, capable of running twice with the same result.</span><span class="lang-vi">Script phải &quot;idempotent&quot;, tức chạy hai lần vẫn cho cùng kết quả.</span></li>
</ul><li><span class="lang-en">Job output – this can be saved in a table.</span><span class="lang-vi">Job output — có thể lưu vào một bảng.</span></li>
<li><span class="lang-en">Job history – stored for 45 days in jobs.job_executions</span><span class="lang-vi">Job history — lưu 45 ngày trong jobs.job_executions</span></li>
</ul><li><span class="lang-en">Create the job database.</span><span class="lang-vi">Create the job database.</span></li>
<ul><li><span class="lang-en">An empty S0 or higher database.</span><span class="lang-vi">Một database rỗng từ S0 trở lên.</span></li>
<li><span class="lang-en">Create a credential for running the jobs in the Job database.</span><span class="lang-vi">Create a credential for running the jobs in the Job database.</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">CREATE MASTER KEY ENCRYPTION BY PASSWORD='&lt;an6?%9++Vyd%Ut9';
CREATE DATABASE SCOPED CREDENTIAL MasterCred WITH IDENTITY = 'MasterU' SECRET = '&lt;an6?%9++Vyd%Ut9'
CREATE DATABASE SCOPED CREDENTIAL RunJob WITH IDENTITY = 'JobU' SECRET = '&lt;an6?%9++Vyd%Ut9'</span><span class="lang-vi">CREATE MASTER KEY ENCRYPTION BY PASSWORD='&lt;an6?%9++Vyd%Ut9';
CREATE DATABASE SCOPED CREDENTIAL MasterCred WITH IDENTITY = 'MasterU' SECRET = '&lt;an6?%9++Vyd%Ut9'
CREATE DATABASE SCOPED CREDENTIAL RunJob WITH IDENTITY = 'JobU' SECRET = '&lt;an6?%9++Vyd%Ut9'</span></pre></li>
</ul></ul><li><span class="lang-en">Create an Elastic Job agent in the Portal.</span><span class="lang-vi">Create an Elastic Job agent in the Portal.</span></li>
<ul><li><span class="lang-en">Go to the Azure Portal</span><span class="lang-vi">Vào Azure Portal</span></li>
<li><span class="lang-en">Search for Elastic Job agents</span><span class="lang-vi">Tìm Elastic Job agents</span></li>
<li><span class="lang-en">Click Add, enter the name, and click OK.</span><span class="lang-vi">Bấm Add, nhập tên rồi bấm OK.</span></li>
<li><span class="lang-en">Select the Azure SQL job database.</span><span class="lang-vi">Select the Azure SQL job database.</span></li>
</ul><li><span class="lang-en">Define the target group in T-SQL (or PowerShell).</span><span class="lang-vi">Định nghĩa target group bằng T-SQL (hoặc PowerShell).</span></li>
<ul><li><span class="lang-en">In the job database:</span><span class="lang-vi">Trong job database:</span></li>
<li class="cb"><pre class="code"><span class="lang-en">EXEC jobs.sp_add_target_group 'GrpDatabase';
EXEC jobs.sp_add_target_group_member
@target_group_name = 'GrpDatabase',
@target_type = 'SqlDatabase'
@server_name = 'DataBaseName.database.windows.net';</span><span class="lang-vi">EXEC jobs.sp_add_target_group 'GrpDatabase';
EXEC jobs.sp_add_target_group_member
@target_group_name = 'GrpDatabase',
@target_type = 'SqlDatabase'
@server_name = 'DataBaseName.database.windows.net';</span></pre></li>
<ul><li><span class="lang-en">or 'SqlServer', -- or 'PoolGroup'</span><span class="lang-vi">hoặc 'SqlServer', -- hoặc 'PoolGroup'</span></li>
<li><span class="lang-en">if wanting to exclude, @membership_type = 'Exclude'</span><span class="lang-vi">nếu muốn loại trừ thì dùng @membership_type = 'Exclude'</span></li>
<li><span class="lang-en">If targeting a server or pool, @refresh_credential_name = 'RefreshPassword',</span><span class="lang-vi">Nếu target là server hoặc pool thì dùng @refresh_credential_name = 'RefreshPassword',</span></li>
</ul><li><span class="lang-en">To view the recently created target group and target group members</span><span class="lang-vi">Để xem target group và các thành viên vừa tạo</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT * FROM jobs.target_groups WHERE target_group_name='GrpDatabase';
SELECT * FROM jobs.target_group_members WHERE target_group_name='GrpDatabase';</span><span class="lang-vi">SELECT * FROM jobs.target_groups WHERE target_group_name='GrpDatabase';
SELECT * FROM jobs.target_group_members WHERE target_group_name='GrpDatabase';</span></pre></li>
</ul></ul><li><span class="lang-en">In each database, you will need a job agent credential in each affected database. You could use PowerShell for this.</span><span class="lang-vi">Ở mỗi database bị tác động, bạn cần một credential cho job agent. Bạn có thể dùng PowerShell cho việc này.</span></li>
<ul><li><span class="lang-en">In the Master Database:</span><span class="lang-vi">Trong database Master:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">CREATE LOGIN MasterU WITH PASSWORD ='&lt;an6?%9++Vyd%Ut9'
CREATE USER MasterU FROM LOGIN MasterU
CREATE LOGIN JobU WITH PASSWORD = '&lt;an6?%9++Vyd%Ut9'</span><span class="lang-vi">CREATE LOGIN MasterU WITH PASSWORD ='&lt;an6?%9++Vyd%Ut9'
CREATE USER MasterU FROM LOGIN MasterU
CREATE LOGIN JobU WITH PASSWORD = '&lt;an6?%9++Vyd%Ut9'</span></pre></li>
</ul><li><span class="lang-en">In the target user database:</span><span class="lang-vi">Trong database đích của người dùng:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">CREATE USER JobU FROM LOGIN JobU
ALTER ROLE db_owner ADD MEMBER JobU</span><span class="lang-vi">CREATE USER JobU FROM LOGIN JobU
ALTER ROLE db_owner ADD MEMBER JobU</span></pre></li>
</ul></ul><li><span class="lang-en">Create a job in T-SQL (or PowerShell) in the Elastic Job database</span><span class="lang-vi">Create a job in T-SQL (or PowerShell) in the Elastic Job database</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">EXEC jobs.sp_add_job @job_name='My first job', @description='Look at objects'</span><span class="lang-vi">EXEC jobs.sp_add_job @job_name='My first job', @description='Look at objects'</span></pre></li>
</ul><li><span class="lang-en">Create job steps in T-SQL (or PowerShell).</span><span class="lang-vi">Create job steps in T-SQL (or PowerShell).</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">EXEC jobs.sp_add_jobstep @job_name='My first job',
@command='SELECT * FROM sys.objects',
@credential_name='RunJob',
@target_group_name='GrpDatabase'</span><span class="lang-vi">EXEC jobs.sp_add_jobstep @job_name='My first job',
@command='SELECT * FROM sys.objects',
@credential_name='RunJob',
@target_group_name='GrpDatabase'</span></pre></li>
</ul>
<li><span class="lang-en">Run/schedule the job in T-SQL.</span><span class="lang-vi">Chạy hoặc đặt lịch cho job bằng T-SQL.</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">EXEC jobs.sp_start_job 'My first job' -- run now
EXEC jobs.sp_update_job
@job_name='Sample T-SQL',
@enabled=1,
@schedule_interval_type='Minutes' – Or Hours, Days, Weeks, Months or Once,
@schedule_interval_count=1</span><span class="lang-vi">EXEC jobs.sp_start_job 'My first job' -- run now
EXEC jobs.sp_update_job
@job_name='Sample T-SQL',
@enabled=1,
@schedule_interval_type='Minutes' — hoặc Hours, Days, Weeks, Months, Once,
@schedule_interval_count=1</span></pre></li>
</ul><li><span class="lang-en">Monitor job execution in the Portal or T-SQL (or PowerShell).</span><span class="lang-vi">Theo dõi việc thực thi job trong Portal hoặc bằng T-SQL (hoặc PowerShell).</span></li>
<ul><li><code><span class="lang-en">select * from jobs.job_executions</span><span class="lang-vi">select * from jobs.job_executions</span></code></li>
</ul></ul></section>
<section id="s75"><h3><span class="n">75.</span> <span class="lang-en">configure multi-server automation</span><span class="lang-vi">cấu hình tự động hóa đa server</span><a class="anch" href="#s75" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">See topic 46 for Azure SQL Database.</span><span class="lang-vi">Với Azure SQL Database, xem mục 46.</span></li>
<li><span class="lang-en">For MI and VM, you need a master server and one or more target servers.</span><span class="lang-vi">Với MI và VM, bạn cần một master server và một hoặc nhiều target server.</span></li>
<ul><li><span class="lang-en">A target server can be linked to only one master server.</span><span class="lang-vi">Một target server chỉ liên kết được với MỘT master server.</span></li>
</ul><li><span class="lang-en">To create a Master server:</span><span class="lang-vi">Để tạo Master server:</span></li>
<ul><li><span class="lang-en">Right-hand click on SQL Server Agent, and go to Multi Server Administration – Make this a Master.</span><span class="lang-vi">Chuột phải vào SQL Server Agent và vào Multi Server Administration – Make this a Master.</span></li>
<li><span class="lang-en">Enter any addresses for notifications.</span><span class="lang-vi">Nhập các địa chỉ nhận thông báo.</span></li>
<li><span class="lang-en">Add your target servers (by clicking on &quot;Add Connection&quot;, if they are not already registered).</span><span class="lang-vi">Add your target servers (by clicking on &quot;Add Connection&quot;, if they are not already registered).</span></li>
<li><span class="lang-en">After checking that the servers are compatible, you can &quot;create a new login if necessary and assign it rights to the MSX&quot;.</span><span class="lang-vi">Sau khi kiểm tra các server có tương thích không, bạn có thể chọn &quot;create a new login if necessary and assign it rights to the MSX&quot;.</span></li>
<ul><li><span class="lang-en">MSX is the &quot;Master Server&quot;.</span><span class="lang-vi">MSX là viết tắt của &quot;Master Server&quot;.</span></li>
</ul></ul><li><span class="lang-en">To create a Target server:</span><span class="lang-vi">Để tạo Target server:</span></li>
<ul><li><span class="lang-en">Right-hand click on SQL Server Agent, and go to Multi Server Administration – Make this a Target.</span><span class="lang-vi">Chuột phải vào SQL Server Agent và vào Multi Server Administration – Make this a Target.</span></li>
<li><span class="lang-en">Select the Master Server.</span><span class="lang-vi">Select the Master Server.</span></li>
<li><span class="lang-en">You can &quot;create a new login if necessary and assign it rights to the MSX&quot;.</span><span class="lang-vi">Bạn có thể chọn &quot;create a new login if necessary and assign it rights to the MSX&quot;.</span></li>
</ul><li><span class="lang-en">When creating jobs:</span><span class="lang-vi">Khi tạo job:</span></li>
<ul><li><span class="lang-en">You can go to the Targets page and select &quot;Target local server&quot; or &quot;Target multiple servers&quot;.</span><span class="lang-vi">Bạn vào trang Targets và chọn &quot;Target local server&quot; hoặc &quot;Target multiple servers&quot;.</span></li>
</ul></ul></section>
<section id="s75-2"><h3><span class="n">75.</span> <span class="lang-en">automate backups</span><span class="lang-vi">tự động hóa backup</span><a class="anch" href="#s75-2" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">For VMs, you can create automated backups.</span><span class="lang-vi">Với VM, bạn có thể tạo automated backup.</span></li>
<ul><li><span class="lang-en">This is done through the installation of the Sql Server IaaS Agent Extension to enable automated backups (this can be done through the “Create a Virtual Machine” process).</span><span class="lang-vi">Việc này thực hiện bằng cách cài SQL Server IaaS Agent Extension để bật automated backup (có thể làm ngay trong quá trình &quot;Create a Virtual Machine&quot;).</span></li>
<li><span class="lang-en">Needs to be:</span><span class="lang-vi">Yêu cầu:</span></li>
<ul><li><span class="lang-en">Windows Server 2012 and SQL Server 2014 Standard/Enterprise (for Automated Backup version 1), or</span><span class="lang-vi">Windows Server 2012 và SQL Server 2014 Standard/Enterprise (với Automated Backup phiên bản 1), hoặc</span></li>
<li><span class="lang-en">Windows Server 2012 R2 or higher, and SQL Server 2016 or higher Standard/Enterprise/Developer (for Automated Backup version 2).</span><span class="lang-vi">Windows Server 2012 R2 trở lên, và SQL Server 2016 trở lên bản Standard/Enterprise/Developer (với Automated Backup phiên bản 2).</span></li>
</ul><li><span class="lang-en">You can specify:</span><span class="lang-vi">Bạn có thể chỉ định:</span></li>
<ul><li><span class="lang-en">Retention period – up to 30 days.</span><span class="lang-vi">Thời gian lưu giữ — tối đa 30 ngày.</span></li>
<li><span class="lang-en">Storage account.</span><span class="lang-vi">Storage account.</span></li>
<li><span class="lang-en">Encryption (with password).</span><span class="lang-vi">Mã hóa (kèm mật khẩu).</span></li>
<li><span class="lang-en">Whether system databases (Master, Model and msdb) are backed-up.</span><span class="lang-vi">Có backup các database hệ thống (Master, Model và msdb) hay không.</span></li>
<li><span class="lang-en">Whether you configure a manual or automated backup schedule. Automated backs- up depends on log growth. If manual, you specify:</span><span class="lang-vi">Cấu hình lịch backup thủ công hay tự động. Backup tự động phụ thuộc vào mức tăng trưởng của log. Nếu chọn thủ công, bạn chỉ định:</span></li>
<ul><li><span class="lang-en">Frequency – Weekly or Daily. If weekly, it will back up each database once a week, even if it needs to span over several days to do so.</span><span class="lang-vi">Tần suất — Weekly hoặc Daily. Nếu Weekly, mỗi database được backup một lần mỗi tuần, kể cả khi việc đó phải kéo dài qua nhiều ngày.</span></li>
<li><span class="lang-en">Backup start time,</span><span class="lang-vi">Backup start time,</span></li>
<li><span class="lang-en">Backup time window (hours), and</span><span class="lang-vi">Backup time window (hours), and</span></li>
<li><span class="lang-en">Log backup frequency (minutes).</span><span class="lang-vi">Tần suất backup log (tính bằng phút).</span></li>
</ul></ul><li><span class="lang-en">You must use the Full recovery model.</span><span class="lang-vi">Bạn bắt buộc phải dùng Full recovery model.</span></li>
<li><span class="lang-en">You can back up the default instance or a single named instance. If there is no default instance and multiple named instances, it will fail.</span><span class="lang-vi">Bạn backup được default instance hoặc một named instance duy nhất. Nếu không có default instance mà lại có nhiều named instance thì thao tác sẽ thất bại.</span></li>
</ul></ul></section>
<section id="s75-3"><h3><span class="n">75.</span> <span class="lang-en">automate performance tuning and patching</span><span class="lang-vi">tự động hóa việc tinh chỉnh hiệu năng và vá lỗi</span><a class="anch" href="#s75-3" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">For PaaS (Azure SQL Database and MI), patching happens automatically.</span><span class="lang-vi">Với PaaS (Azure SQL Database và MI), việc patching diễn ra tự động.</span></li>
<ul><li><span class="lang-en">You have no control over when it happens, but it has minimal impact if you use “retry logic”.</span><span class="lang-vi">Bạn không kiểm soát được thời điểm, nhưng tác động là tối thiểu nếu bạn dùng &quot;retry logic&quot;.</span></li>
<li><span class="lang-en">If you have a database quorum, there should be at least one primary replica online.</span><span class="lang-vi">Nếu có database quorum thì luôn phải có ít nhất một primary replica online.</span></li>
<li><span class="lang-en">Business Critical and Premium databases should also have at least one secondary replica online.</span><span class="lang-vi">Database Business Critical và Premium còn phải có ít nhất một secondary replica online.</span></li>
</ul><li><span class="lang-en">On VMs, you could use &quot;Automated Patching&quot; – see topic 3.</span><span class="lang-vi">Trên VM, bạn có thể dùng &quot;Automated Patching&quot; — xem mục 3.</span></li>
</ul></section>
<section id="s75-4"><h3><span class="n">75.</span> <span class="lang-en">implement policies by using automated evaluation modes</span><span class="lang-vi">triển khai policy bằng các chế độ đánh giá tự động</span><a class="anch" href="#s75-4" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">This is not relevant to Azure SQL Database or MI.</span><span class="lang-vi">Phần này không áp dụng cho Azure SQL Database hay MI.</span></li>
<li><span class="lang-en">To create a new policy:</span><span class="lang-vi">Để tạo policy mới:</span></li>
<ul><li><span class="lang-en">Go to Management – Policy Management – Policies.</span><span class="lang-vi">Vào Management – Policy Management – Policies.</span></li>
<li><span class="lang-en">Right-hand click and go to &quot;New Policy&quot;.</span><span class="lang-vi">Chuột phải và chọn &quot;New Policy&quot;.</span></li>
<li><span class="lang-en">Enter a name for the policy.</span><span class="lang-vi">Nhập tên cho policy.</span></li>
<li><span class="lang-en">If you are intending to have this run to a schedule, click &quot;Enabled&quot; if you want the schedule to be enabled.</span><span class="lang-vi">Nếu định cho nó chạy theo lịch, bấm &quot;Enabled&quot; để bật lịch đó.</span></li>
<li><span class="lang-en">Next to &quot;Check condition&quot;, click on &quot;New condition&quot;.</span><span class="lang-vi">Cạnh &quot;Check condition&quot;, bấm &quot;New condition&quot;.</span></li>
<li><span class="lang-en">In this new box, enter a name, a facet, and what you are checking (at least one field, an operator and a value).</span><span class="lang-vi">Trong hộp mới này, nhập tên, một facet, và nội dung cần kiểm tra (ít nhất một trường, một toán tử và một giá trị).</span></li>
<ul><li><span class="lang-en">Note - != means &lt;&gt;.</span><span class="lang-vi">Lưu ý — != nghĩa là &lt;&gt;.</span></li>
<li><span class="lang-en">These conditions are what SHOULD be – the policy will fail if this is NOT the case.</span><span class="lang-vi">Các điều kiện này mô tả trạng thái NÊN có — policy sẽ fail nếu điều đó KHÔNG đúng.</span></li>
</ul><li><span class="lang-en">In the Against targets, select target types. If this is blank, then it will be targeted against the server.</span><span class="lang-vi">Trong mục Against targets, chọn các loại target. Nếu để trống thì policy sẽ nhắm vào server.</span></li>
<li><span class="lang-en">In the Evaluation Mode, select:</span><span class="lang-vi">Trong Evaluation Mode, chọn:</span></li>
<ul><li><span class="lang-en">&quot;On demand&quot;,</span><span class="lang-vi">&quot;On demand&quot;,</span></li>
<li><span class="lang-en">&quot;On change: prevent&quot; – uses DDL triggers</span><span class="lang-vi">&quot;On change: prevent&quot; — dùng DDL trigger</span></li>
<li><span class="lang-en">&quot;On change: log&quot; – logs to event notification.</span><span class="lang-vi">&quot;On change: log&quot; — ghi vào event notification.</span></li>
<li><span class="lang-en">&quot;On schedule&quot; – select/pick an existing or create a new schedule.</span><span class="lang-vi">&quot;On schedule&quot; — chọn một lịch có sẵn hoặc tạo lịch mới.</span></li>
</ul></ul><li><span class="lang-en">Once created, if you want it to be run, right-hand click on it and go to Evaluate.</span><span class="lang-vi">Sau khi tạo xong, nếu muốn chạy thì chuột phải vào nó và chọn Evaluate.</span></li>
<li><span class="lang-en">To edit it, right-hand click and go to Properties.</span><span class="lang-vi">Để sửa, chuột phải và vào Properties.</span></li>
</ul></section>
<section id="s76"><h3><span class="n">76.</span> <span class="lang-en">Automate database workflows by using Azure Logic Apps (not needed from 7</span><span class="lang-vi">Tự động hóa workflow database bằng Azure Logic Apps (không còn cần từ 7</span><a class="anch" href="#s76" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">February 2024)</span><span class="lang-vi">tháng 2 năm 2024)</span></li>
<li><span class="lang-en">Logic Apps automate workflows from one connection to another.</span><span class="lang-vi">Logic Apps tự động hóa workflow từ kết nối này sang kết nối khác.</span></li>
<ul><li><span class="lang-en">A workflow is multiple steps which define an overall process. IT starts with a trigger, and continues with multiple actions.</span><span class="lang-vi">Workflow gồm nhiều bước tạo thành một quy trình tổng thể. Nó bắt đầu bằng một trigger rồi tiếp tục bằng nhiều action.</span></li>
<li><span class="lang-en">A similar user interface to Microsoft Automate, part of the Power Platform.</span><span class="lang-vi">Giao diện tương tự Microsoft Automate, thuộc Power Platform.</span></li>
</ul><li><span class="lang-en">Examples:</span><span class="lang-vi">Ví dụ:</span></li>
<ul><li><span class="lang-en">Send an email when an item in a Sharepoint list is modified</span><span class="lang-vi">Gửi email khi một mục trong danh sách Sharepoint bị sửa</span></li>
<li><span class="lang-en">Get daily reminders emailed to you</span><span class="lang-vi">Nhận email nhắc việc hằng ngày</span></li>
<li><span class="lang-en">When a new file is created in Dropbox, copy it to OneDrive</span><span class="lang-vi">Khi có file mới trong Dropbox thì copy sang OneDrive</span></li>
<li><span class="lang-en">Email yourself (using Outlook) new tweets about a certain keyword</span><span class="lang-vi">Tự gửi email cho mình (qua Outlook) các tweet mới về một từ khóa nào đó</span></li>
<li><span class="lang-en">Get a notification email when Microsoft Defender for Cloud</span><span class="lang-vi">Nhận email thông báo khi Microsoft Defender for Cloud</span></li>
<ul><li><span class="lang-en">detects a threat</span><span class="lang-vi">phát hiện một mối đe dọa</span></li>
<li><span class="lang-en">creates a recommendation</span><span class="lang-vi">creates a recommendation</span></li>
<li><span class="lang-en">creates a regulatory compliance assessment</span><span class="lang-vi">creates a regulatory compliance assessment</span></li>
</ul></ul><li><span class="lang-en">You have a choice of two plans:</span><span class="lang-vi">Bạn có hai gói để chọn:</span></li>
<ul><li><span class="lang-en">Standard – from around US$180 per month.</span><span class="lang-vi">Standard — từ khoảng 180 USD mỗi tháng.</span></li>
<li><span class="lang-en">Consumption – about US$1 for every 40,000 actions, and US$1.25 for 10,000 standard connector executions per day.</span><span class="lang-vi">Consumption — khoảng 1 USD cho mỗi 40.000 action, và 1,25 USD cho 10.000 lượt chạy standard connector mỗi ngày.</span></li>
<ul><li><span class="lang-en">The first 4,000 actions are free.</span><span class="lang-vi">4.000 action đầu tiên là miễn phí.</span></li>
</ul></ul><li><span class="lang-en">Logic Apps are based on triggers and actions.</span><span class="lang-vi">Logic Apps dựa trên trigger và action.</span></li>
<ul><li><span class="lang-en">Triggers are the first step – why should the workflow start?</span><span class="lang-vi">Trigger là bước đầu tiên — vì sao workflow nên khởi động?</span></li>
<ul><li><span class="lang-en">It could be because new data has been added</span><span class="lang-vi">Có thể vì có dữ liệu mới được thêm vào</span></li>
<ul><li><span class="lang-en">When an item is created/modified in SQL Server</span><span class="lang-vi">Khi một mục được tạo/sửa trong SQL Server</span></li>
</ul><li><span class="lang-en">It could be scheduled – every hour, for example.</span><span class="lang-vi">Cũng có thể theo lịch — ví dụ mỗi giờ một lần.</span></li>
</ul><li><span class="lang-en">Actions</span><span class="lang-vi">Action</span></li>
<ul><li><span class="lang-en">This is what should happen next. In SQL Server, you have:</span><span class="lang-vi">Đây là việc sẽ xảy ra tiếp theo. Với SQL Server, bạn có:</span></li>
<ul><li><span class="lang-en">Delete, Get, Insert, Update row</span><span class="lang-vi">Delete, Get, Insert, Update row</span></li>
<li><span class="lang-en">Get rows or tables</span><span class="lang-vi">Get rows hoặc tables</span></li>
<li><span class="lang-en">Execute an SQL query</span><span class="lang-vi">Execute an SQL query</span></li>
<li><span class="lang-en">Execute stored procedure</span><span class="lang-vi">Execute stored procedure</span></li>
</ul><li><span class="lang-en">Other actions include:</span><span class="lang-vi">Các action khác gồm:</span></li>
<ul><li><span class="lang-en">Control – Conditions and Switch (An If statement), For each and Until (loop).</span><span class="lang-vi">Control — Conditions và Switch (câu lệnh If), For each và Until (vòng lặp).</span></li>
</ul></ul><li><span class="lang-en">Connections</span><span class="lang-vi">Connection</span></li>
<ul><li><span class="lang-en">This is how you get to a data source.</span><span class="lang-vi">Đây là cách bạn kết nối tới nguồn dữ liệu.</span></li>
<li><span class="lang-en">For Azure SQL type could be:</span><span class="lang-vi">Với Azure SQL, kiểu kết nối có thể là:</span></li>
<ul><li><span class="lang-en">Service principal (Azure AD applicationServer, the Authentication ),</span><span class="lang-vi">Service principal (ứng dụng Azure AD, phần Authentication của Server),</span></li>
<li><span class="lang-en">Logic Apps Managed Identity,</span><span class="lang-vi">Logic Apps Managed Identity,</span></li>
<li><span class="lang-en">Azure AD Integrated,</span><span class="lang-vi">Azure AD Integrated,</span></li>
<li><span class="lang-en">SQL Server/Windows Authentication.</span><span class="lang-vi">SQL Server/Windows Authentication.</span></li>
</ul><li><span class="lang-en">If it is Azure SQL Database, then you don't need a Gateway. This is for SQL Server on prem.</span><span class="lang-vi">Nếu là Azure SQL Database thì bạn không cần Gateway. Gateway là dành cho SQL Server on-prem.</span></li>
<li><span class="lang-en">You can combine this with other connections – for example, Azure Storage.</span><span class="lang-vi">Bạn có thể kết hợp việc này với các kết nối khác — ví dụ Azure Storage.</span></li>
</ul></ul><li><span class="lang-en">To view connections afterwards:</span><span class="lang-vi">Để xem lại các kết nối sau đó:</span></li>
<ul><li><span class="lang-en">Go to the Logic App – API connections to view the API connections used by the Logic App.</span><span class="lang-vi">Vào Logic App – API connections để xem các API connection mà Logic App đó dùng.</span></li>
<li><span class="lang-en">In the Azure Portal, go to API connections (not Logic App) to view all connections.</span><span class="lang-vi">Trong Azure Portal, vào API connections (không phải Logic App) để xem toàn bộ kết nối.</span></li>
</ul><li><span class="lang-en">Sample code for Azure SQL Database CREATE TABLE SalesLT.NewTable (intvalue int, messagetext varchar(20), currenttime datetime DEFAULT GETDATE()); CREATE PROCEDURE HowManyRows (@numberRows int output) AS BEGIN SELECT @numberRows = COUNT(*) FROM SalesLT.NewTable END declare @MyOutput int exec HowManyRows @numberRows = @MyOutput OUTPUT select @MyOutput</span><span class="lang-vi">Code mẫu cho Azure SQL Database: CREATE TABLE SalesLT.NewTable (intvalue int, messagetext varchar(20), currenttime datetime DEFAULT GETDATE()); CREATE PROCEDURE HowManyRows (@numberRows int output) AS BEGIN SELECT @numberRows = COUNT(*) FROM SalesLT.NewTable END declare @MyOutput int exec HowManyRows @numberRows = @MyOutput OUTPUT select @MyOutput</span></li>
</ul></section>
<section id="s77"><h3><span class="n">77.</span> <span class="lang-en">create event notifications based on metrics</span><span class="lang-vi">tạo event notification dựa trên metric</span><a class="anch" href="#s77" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">This is for SQL Server VM, as it uses the SQL Server Agent. It is not relevant for Azure SQL Database or MI (which has SQL Server Agent, but doesn't allow for event notifications).</span><span class="lang-vi">Phần này dành cho SQL Server trên VM vì nó dùng SQL Server Agent. Không áp dụng cho Azure SQL Database hay MI (MI có SQL Server Agent nhưng không cho phép event notification).</span></li>
<li><span class="lang-en">To create an event notification in SQL Server.</span><span class="lang-vi">Để tạo event notification trong SQL Server.</span></li>
<li><span class="lang-en">Go to SQL Server Agent (right-hand click it and Start if needed on a VM) – Alerts.</span><span class="lang-vi">Vào SQL Server Agent (trên VM, chuột phải và bấm Start nếu cần) – Alerts.</span></li>
<li><span class="lang-en">Right-hand click and go to &quot;New Alert&quot;.</span><span class="lang-vi">Chuột phải và chọn &quot;New Alert&quot;.</span></li>
<li><span class="lang-en">Enter a Name for this alert.</span><span class="lang-vi">Nhập tên cho alert này.</span></li>
<li><span class="lang-en">Select an Alert type:</span><span class="lang-vi">Select an Alert type:</span></li>
<ul><li><span class="lang-en">SQL Server event</span><span class="lang-vi">SQL Server event</span></li>
<ul><li><span class="lang-en">This is based on an error number or severity.</span><span class="lang-vi">Dựa trên error number hoặc mức severity.</span></li>
</ul><li><span class="lang-en">WMI event alert</span><span class="lang-vi">WMI event alert</span></li>
<ul><li><span class="lang-en">This uses the Windows Management Instrumentation to monitor events in SQL Server.</span><span class="lang-vi">Dùng Windows Management Instrumentation để giám sát sự kiện trong SQL Server.</span></li>
</ul><li><span class="lang-en">SQL Server performance conditions. You select the:</span><span class="lang-vi">SQL Server performance conditions. Bạn chọn:</span></li>
<ul><li><span class="lang-en">Object, such as Databases or General Statistics.</span><span class="lang-vi">Object, ví dụ Databases hoặc General Statistics.</span></li>
<li><span class="lang-en">Counter, such as Transactions/sec.</span><span class="lang-vi">Counter, ví dụ Transactions/sec.</span></li>
<li><span class="lang-en">Instance – a database.</span><span class="lang-vi">Instance — một database.</span></li>
<li><span class="lang-en">Alert if counter falls below, becomes equal to, or rises above a Value.</span><span class="lang-vi">Cảnh báo khi counter tụt xuống dưới, bằng, hoặc vượt lên trên một Value.</span></li>
</ul></ul><li><span class="lang-en">In the Response page, you can:</span><span class="lang-vi">Ở trang Response, bạn có thể:</span></li>
<ul><li><span class="lang-en">Execute an SQL Server Agent job.</span><span class="lang-vi">Execute an SQL Server Agent job.</span></li>
<ul><li><span class="lang-en">You can click New Job, or View [Existing] job (once you have selected one),</span><span class="lang-vi">Bạn có thể bấm New Job, hoặc View job (sau khi đã chọn một job),</span></li>
</ul><li><span class="lang-en">and/or Notify an operator</span><span class="lang-vi">và/hoặc thông báo cho một operator</span></li>
<ul><li><span class="lang-en">You can click &quot;New Operator&quot;, or View [Existing] operator (once you have selected one).</span><span class="lang-vi">Bạn có thể bấm &quot;New Operator&quot;, hoặc View operator (sau khi đã chọn một operator).</span></li>
</ul></ul><li><span class="lang-en">In the Options page, you can:</span><span class="lang-vi">Ở trang Options, bạn có thể:</span></li>
<ul><li><span class="lang-en">Include the alert error text in email or pager,</span><span class="lang-vi">Đưa nội dung lỗi vào email hoặc pager,</span></li>
<li><span class="lang-en">Add an additional notification message, and</span><span class="lang-vi">Add an additional notification message, and</span></li>
<li><span class="lang-en">Have a delay between responses. 0 minutes and 0 seconds indicate that you want a response for every occurrence of the alert.</span><span class="lang-vi">Đặt độ trễ giữa các lần phản hồi. 0 phút 0 giây nghĩa là bạn muốn có phản hồi cho MỌI lần alert xảy ra.</span></li>
</ul></ul></section>
<section id="s77-2"><h3><span class="n">77.</span> <span class="lang-en">create event notifications for Azure resources</span><span class="lang-vi">tạo event notification cho tài nguyên Azure</span><a class="anch" href="#s77-2" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">To create an event notification:</span><span class="lang-vi">Để tạo event notification:</span></li>
<ul><li><span class="lang-en">Go to the Azure Portal, and the specific database.</span><span class="lang-vi">Vào Azure Portal, rồi vào database cụ thể.</span></li>
<li><span class="lang-en">Go to Monitor – Metrics or Alerts.</span><span class="lang-vi">Vào Monitor – Metrics hoặc Alerts.</span></li>
<li><span class="lang-en">If &quot;Metrics&quot;:</span><span class="lang-vi">Nếu vào &quot;Metrics&quot;:</span></li>
<ul><li><span class="lang-en">Select a metric.</span><span class="lang-vi">Select a metric.</span></li>
<li><span class="lang-en">Click &quot;+ New alert rule&quot;.</span><span class="lang-vi">Bấm &quot;+ New alert rule&quot;.</span></li>
</ul><li><span class="lang-en">If &quot;Alerts&quot;:</span><span class="lang-vi">Nếu vào &quot;Alerts&quot;:</span></li>
<ul><li><span class="lang-en">Click &quot;+ New alert rule&quot;.</span><span class="lang-vi">Bấm &quot;+ New alert rule&quot;.</span></li>
<li><span class="lang-en">Select a metric.</span><span class="lang-vi">Select a metric.</span></li>
</ul><li><span class="lang-en">Click on Conditions:</span><span class="lang-vi">Bấm vào Conditions:</span></li>
<ul><li><span class="lang-en">Optionally, select your signal type and monitor service</span><span class="lang-vi">Tùy chọn: chọn signal type và monitor service</span></li>
<li><span class="lang-en">Select your signal (measure).</span><span class="lang-vi">Select your signal (measure).</span></li>
<li><span class="lang-en">Select the Threshold – static or dynamic.</span><span class="lang-vi">Select the Threshold – static or dynamic.</span></li>
<ul><li><span class="lang-en">Dynamic thresholds learns the data and models it using algorithms and methods, detecting pattern such as seasonality (hourly, daily, weekly).</span><span class="lang-vi">Dynamic threshold học dữ liệu và mô hình hóa nó bằng thuật toán, phát hiện được các mẫu như tính mùa vụ (theo giờ, theo ngày, theo tuần).</span></li>
</ul><li><span class="lang-en">If static, select:</span><span class="lang-vi">Nếu chọn static, hãy chọn:</span></li>
<ul><li><span class="lang-en">the operator (&gt;, &gt;=, &lt; or &lt;=),</span><span class="lang-vi">toán tử (&gt;, &gt;=, &lt; hoặc &lt;=),</span></li>
<li><span class="lang-en">The aggregation type (Avg, Min, Max, Count, Sum), and</span><span class="lang-vi">kiểu tổng hợp (Avg, Min, Max, Count, Sum), và</span></li>
<li><span class="lang-en">the threshold value.</span><span class="lang-vi">giá trị ngưỡng.</span></li>
</ul><li><span class="lang-en">If dynamic, select</span><span class="lang-vi">Nếu chọn dynamic, hãy chọn</span></li>
<ul><li><span class="lang-en">Select the operator (greater than the upper threshold and/or below the lower threshold)</span><span class="lang-vi">Select the operator (greater than the upper threshold and/or below the lower threshold)</span></li>
<li><span class="lang-en">The aggregation type, and</span><span class="lang-vi">Kiểu tổng hợp, và</span></li>
<li><span class="lang-en">The Threshold sensitivity:</span><span class="lang-vi">Độ nhạy của ngưỡng:</span></li>
<ul><li><span class="lang-en">High – more alerts based on small deviations. greater than the upper threshold and/or smaller than the lower threshold).</span><span class="lang-vi">High — nhiều cảnh báo hơn, dựa trên sai lệch nhỏ (vượt ngưỡng trên và/hoặc thấp hơn ngưỡng dưới).</span></li>
<li><span class="lang-en">Medium (default), and</span><span class="lang-vi">Medium (mặc định), và</span></li>
<li><span class="lang-en">Low – fewer alerts based on large deviations.</span><span class="lang-vi">Low — ít cảnh báo hơn, dựa trên sai lệch lớn.</span></li>
</ul><li><span class="lang-en">You can also select, in Advanced settings:</span><span class="lang-vi">Trong Advanced settings, bạn còn chọn được:</span></li>
<ul><li><span class="lang-en">The evaluation period, and</span><span class="lang-vi">Khoảng thời gian đánh giá, và</span></li>
<li><span class="lang-en">The number of violations to occur within that evaluation period in order to trigger the alert.</span><span class="lang-vi">Số lần vi phạm cần xảy ra trong khoảng đó để kích hoạt cảnh báo.</span></li>
</ul></ul></ul><li><span class="lang-en">Under &quot;Evaluated based on&quot;, select:</span><span class="lang-vi">Trong mục &quot;Evaluated based on&quot;, chọn:</span></li>
<ul><li><span class="lang-en">Aggregation granularity period – how often the measures are grouped together,</span><span class="lang-vi">Aggregation granularity period — các số đo được gộp lại theo khoảng bao lâu,</span></li>
<li><span class="lang-en">The frequency of evaluation – how often should it be checked.</span><span class="lang-vi">Frequency of evaluation — bao lâu thì kiểm tra một lần.</span></li>
</ul></ul><li><span class="lang-en">Under to the &quot;Actions&quot; section,</span><span class="lang-vi">Trong phần &quot;Actions&quot;,</span></li>
<ul><li><span class="lang-en">Select an existing action group, or</span><span class="lang-vi">Select an existing action group, or</span></li>
<li><span class="lang-en">Click on &quot;Create action group&quot;, and select:</span><span class="lang-vi">Bấm &quot;Create action group&quot; và chọn:</span></li>
<ul><li><span class="lang-en">Email,</span><span class="lang-vi">Email,</span></li>
<li><span class="lang-en">SMS (text message),</span><span class="lang-vi">SMS (tin nhắn),</span></li>
<li><span class="lang-en">Azure app Push Notifications, and/or</span><span class="lang-vi">Azure app Push Notification, và/hoặc</span></li>
<li><span class="lang-en">Voice.</span><span class="lang-vi">Voice.</span></li>
</ul><li><span class="lang-en">And/or select Actions:</span><span class="lang-vi">Và/hoặc chọn Actions:</span></li>
<ul><li><span class="lang-en">Automation Runbook, Azure Function,</span><span class="lang-vi">Automation Runbook, Azure Function,</span></li>
<li><span class="lang-en">ITSM, Logic App, Webhook.</span><span class="lang-vi">ITSM, Logic App, Webhook.</span></li>
</ul></ul><li><span class="lang-en">Under the &quot;Alert rule details&quot;, enter:</span><span class="lang-vi">Trong &quot;Alert rule details&quot;, nhập:</span></li>
<ul><li><span class="lang-en">The name</span><span class="lang-vi">Tên</span></li>
<li><span class="lang-en">Description (optional),</span><span class="lang-vi">Mô tả (tùy chọn),</span></li>
<li><span class="lang-en">Subscription and resource group,</span><span class="lang-vi">Subscription và resource group,</span></li>
<li><span class="lang-en">Severity – from 0 (Critical) to 4 (Verbose),</span><span class="lang-vi">Severity — từ 0 (Critical) tới 4 (Verbose),</span></li>
<li><span class="lang-en">Whether it is enabled on creation, and</span><span class="lang-vi">Có bật ngay khi tạo hay không, và</span></li>
<li><span class="lang-en">Whether the automatically resolve alerts.</span><span class="lang-vi">Có tự động resolve cảnh báo hay không.</span></li>
<ul><li><span class="lang-en">The alert period is shown in a different color when &quot;unresolved&quot;</span><span class="lang-vi">Khoảng thời gian đang có cảnh báo được hiển thị bằng màu khác khi ở trạng thái &quot;unresolved&quot;</span></li>
<ul><li><span class="lang-en">The line turns from blue to red dots, and the background turns light red as well.</span><span class="lang-vi">Đường biểu đồ chuyển từ xanh dương sang các chấm đỏ, và nền cũng chuyển sang đỏ nhạt.</span></li>
</ul></ul></ul><li><span class="lang-en">To create a Kusto query from logs:</span><span class="lang-vi">Để tạo một Kusto query từ log:</span></li>
<ul><li><span class="lang-en">Go to the Azure Portal, and the specific database.</span><span class="lang-vi">Vào Azure Portal, rồi vào database cụ thể.</span></li>
<li><span class="lang-en">Go to Monitoring – Logs.</span><span class="lang-vi">Vào Monitoring – Logs.</span></li>
<li><span class="lang-en">Select a query and click &quot;Run&quot;.</span><span class="lang-vi">Select a query and click &quot;Run&quot;.</span></li>
<li><span class="lang-en">Have a look at the results.</span><span class="lang-vi">Xem kết quả trả về.</span></li>
</ul><li><span class="lang-en">To create an alert rule</span><span class="lang-vi">Để tạo một alert rule</span></li>
<ul><li><span class="lang-en">Click &quot;New alert rule&quot;</span><span class="lang-vi">Bấm &quot;New alert rule&quot;</span></li>
<li><span class="lang-en">Under Measurement, select:</span><span class="lang-vi">Trong mục Measurement, chọn:</span></li>
<ul><li><span class="lang-en">Measure,</span><span class="lang-vi">Measure,</span></li>
<li><span class="lang-en">Aggregation type (Average, Total, Maximum or Minimum),</span><span class="lang-vi">Kiểu tổng hợp (Average, Total, Maximum hoặc Minimum),</span></li>
<li><span class="lang-en">Aggregation granularity (5, 10, 15, 30 or 45 minutes, 1-6 hours, or 1-2 days).</span><span class="lang-vi">Aggregation granularity (5, 10, 15, 30 hoặc 45 phút, 1-6 giờ, hoặc 1-2 ngày).</span></li>
</ul><li><span class="lang-en">You can also split by dimensions.</span><span class="lang-vi">Bạn cũng có thể tách theo dimension.</span></li>
<li><span class="lang-en">Enter your &quot;Alert logic&quot;:</span><span class="lang-vi">Nhập &quot;Alert logic&quot; của bạn:</span></li>
<ul><li><span class="lang-en">Operator (&gt;, &gt;=, &lt;, &lt;= or =),</span><span class="lang-vi">Toán tử (&gt;, &gt;=, &lt;, &lt;= hoặc =),</span></li>
<li><span class="lang-en">Threshold value, and</span><span class="lang-vi">Giá trị ngưỡng, và</span></li>
<li><span class="lang-en">Frequency of evaluation (5, 10, 15, 30 or 45 minutes, 1-6 hours, or 1-2 days).</span><span class="lang-vi">Tần suất đánh giá (5, 10, 15, 30 hoặc 45 phút, 1-6 giờ, hoặc 1-2 ngày).</span></li>
</ul></ul><li><span class="lang-en">Go to the &quot;Actions&quot; tab and:</span><span class="lang-vi">Vào tab &quot;Actions&quot; và:</span></li>
<ul><li><span class="lang-en">Select an existing action group, or</span><span class="lang-vi">Select an existing action group, or</span></li>
<li><span class="lang-en">Click on &quot;Create action group&quot;, and select:</span><span class="lang-vi">Bấm &quot;Create action group&quot; và chọn:</span></li>
<ul><li><span class="lang-en">Email,</span><span class="lang-vi">Email,</span></li>
<li><span class="lang-en">SMS (text message),</span><span class="lang-vi">SMS (tin nhắn),</span></li>
<li><span class="lang-en">Azure app Push Notifications, and/or</span><span class="lang-vi">Azure app Push Notification, và/hoặc</span></li>
<li><span class="lang-en">Voice.</span><span class="lang-vi">Voice.</span></li>
</ul><li><span class="lang-en">And/or select Actions:</span><span class="lang-vi">Và/hoặc chọn Actions:</span></li>
<ul><li><span class="lang-en">Automation Runbook, Azure Function,</span><span class="lang-vi">Automation Runbook, Azure Function,</span></li>
<li><span class="lang-en">ITSM, Logic App, Webhook</span><span class="lang-vi">ITSM, Logic App, Webhook</span></li>
</ul></ul><li><span class="lang-en">Go to the &quot;Details&quot; tab, and:</span><span class="lang-vi">Vào tab &quot;Details&quot; và:</span></li>
<ul><li><span class="lang-en">Select the severity from 0 (Critical) to 4 (Verbose).</span><span class="lang-vi">Select the severity from 0 (Critical) to 4 (Verbose).</span></li>
<li><span class="lang-en">Enter an &quot;alert rule name&quot; and description (optional).</span><span class="lang-vi">Nhập &quot;alert rule name&quot; và mô tả (tùy chọn).</span></li>
</ul><li><span class="lang-en">You can also do all this by:</span><span class="lang-vi">Bạn cũng làm được tất cả những việc trên bằng cách:</span></li>
<ul><li><span class="lang-en">Going to the Azure Portal, and the specific database, and go to Monitoring – Alerts, &quot;+New alert rule&quot;, and selecting:</span><span class="lang-vi">Vào Azure Portal, chọn database cụ thể, vào Monitoring – Alerts, bấm &quot;+New alert rule&quot;, rồi chọn:</span></li>
<ul><li><span class="lang-en">Resource,</span><span class="lang-vi">Resource,</span></li>
<li><span class="lang-en">Condition and Alert logic,</span><span class="lang-vi">Condition và Alert logic,</span></li>
<ul><li><span class="lang-en">The signal could be a platform metric, or an activity log (an administrative operation).</span><span class="lang-vi">Signal có thể là một platform metric, hoặc một activity log (một thao tác quản trị).</span></li>
</ul><li><span class="lang-en">Actions Groups, and</span><span class="lang-vi">Actions Groups, và</span></li>
<li><span class="lang-en">Alert Details.</span><span class="lang-vi">Alert Details.</span></li>
</ul></ul></ul></section>
<section id="s77-3"><h3><span class="n">77.</span> <span class="lang-en">create alerts for server configuration changes</span><span class="lang-vi">tạo cảnh báo cho các thay đổi cấu hình server</span><a class="anch" href="#s77-3" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">In MI or SQL Server on VM, changes are made to a server configuration by using sp_configure:</span><span class="lang-vi">Trên MI hoặc SQL Server trên VM, cấu hình server được thay đổi bằng sp_configure:</span></li>
<li><span class="lang-en">This tracing may already be enabled. To enable the tracing:</span><span class="lang-vi">Việc tracing này có thể đã được bật sẵn. Để bật tracing:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">sp_configure 'show advanced options', 1
GO
RECONFIGURE
GO
sp_configure 'default trace enabled', 1
GO
RECONFIGURE
GO</span><span class="lang-vi">sp_configure 'show advanced options', 1
GO
RECONFIGURE
GO
sp_configure 'default trace enabled', 1
GO
RECONFIGURE
GO</span></pre></li>
</ul><li><span class="lang-en">You can see what changes have been made by:</span><span class="lang-vi">Bạn xem được những thay đổi đã thực hiện bằng cách:</span></li>
<ul><li><span class="lang-en">In SSMS, you can right-hand click on the server instance (not the database),</span><span class="lang-vi">Trong SSMS, chuột phải vào instance của server (không phải vào database),</span></li>
<li><span class="lang-en">Go to Reports – Standard Reports – Configuration Changes History.</span><span class="lang-vi">Vào Reports – Standard Reports – Configuration Changes History.</span></li>
</ul><li><span class="lang-en">For SQL Database, see topic 77.</span><span class="lang-vi">Với SQL Database, xem mục 77.</span></li>
</ul></section>
<section id="s77-4"><h3><span class="n">77.</span> <span class="lang-en">create tasks that respond to event notifications</span><span class="lang-vi">tạo tác vụ phản hồi lại event notification</span><a class="anch" href="#s77-4" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">As per 76, using an Error event.</span><span class="lang-vi">Giống mục 76, dùng một Error event.</span></li>
</ul></section>
<h2 class="dom" id="dom5">5 · Plan and implement a HA/DR environment</h2>
<section id="s-sec5"><h3><span class="n"></span> <span class="lang-en">Domain 5 at a glance — HA/DR summary tables</span><span class="lang-vi">Tổng hợp phạm vi 5 — bảng ôn nhanh về HA/DR</span><a class="anch" href="#s-sec5" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">A synthesis of sections 79–94 for revision.</span><span class="lang-vi">Tổng hợp các mục 79–94 để ôn nhanh.</span></li>
</ul>
<ul><li><span class="lang-en">Backups — who takes them and what you are allowed to run:</span><span class="lang-vi">Backup — ai làm và bạn được chạy gì:</span></li>
</ul>
<div class="tw"><table class="cmp"><tr><th><span class="lang-en"></span><span class="lang-vi"></span></th><th><span class="lang-en">Azure SQL Database</span><span class="lang-vi">Azure SQL Database</span></th><th><span class="lang-en">Managed Instance</span><span class="lang-vi">Managed Instance</span></th><th><span class="lang-en">SQL Server on a VM</span><span class="lang-vi">SQL Server trên VM</span></th></tr><tr><td><span class="lang-en">Schedule</span><span class="lang-vi">Lịch backup</span></td><td colspan="2"><span class="lang-en">Automatic: full weekly, differential every 12–24 hours, log every 5–10 minutes</span><span class="lang-vi">Tự động: full hằng tuần, differential mỗi 12–24 giờ, log mỗi 5–10 phút</span></td><td><span class="lang-en">Yours to schedule</span><span class="lang-vi">Bạn tự lập lịch</span></td></tr><tr><td><span class="lang-en">Manual backups</span><span class="lang-vi">Backup thủ công</span></td><td><span class="lang-en">None</span><span class="lang-vi">Không có</span></td><td><span class="lang-en">COPY_ONLY full backups to URL — no differential, log or file-snapshot backups</span><span class="lang-vi">Chỉ full backup COPY_ONLY tới URL — không differential, log hay file-snapshot</span></td><td><span class="lang-en">Everything: full, differential, log, files and filegroups</span><span class="lang-vi">Đầy đủ: full, differential, log, file và filegroup</span></td></tr><tr><td><span class="lang-en">Point-in-time restore</span><span class="lang-vi">Point-in-time restore</span></td><td><span class="lang-en">7 days by default, configurable 1–35 days (Basic caps at 7; Hyperscale differs)</span><span class="lang-vi">Mặc định 7 ngày, chỉnh được 1–35 ngày (Basic tối đa 7; Hyperscale khác)</span></td><td><span class="lang-en">Per database, not for the whole instance</span><span class="lang-vi">Theo từng database, không phải cả instance</span></td><td><span class="lang-en">You rebuild it from full + differential + log</span><span class="lang-vi">Bạn tự dựng lại từ full + differential + log</span></td></tr><tr><td><span class="lang-en">Long-term retention</span><span class="lang-vi">Long-term retention</span></td><td><span class="lang-en">Up to 10 years — weekly, monthly, yearly, WeekOfYear. Azure runs it: you cannot trigger one, and the first can take 7 days to appear</span><span class="lang-vi">Tới 10 năm — theo tuần, tháng, năm, WeekOfYear. Azure tự chạy: bạn không kích hoạt được, và bản đầu tiên có thể mất 7 ngày mới hiện</span></td><td><span class="lang-en">Public preview</span><span class="lang-vi">Public preview</span></td><td><span class="lang-en">Not applicable</span><span class="lang-vi">Không áp dụng</span></td></tr><tr><td><span class="lang-en">Recovery model</span><span class="lang-vi">Recovery model</span></td><td colspan="2"><span class="lang-en">Managed by the service</span><span class="lang-vi">Do dịch vụ quản lý</span></td><td><span class="lang-en">SIMPLE (no log backups), FULL or BULK_LOGGED</span><span class="lang-vi">SIMPLE (không có log backup), FULL hoặc BULK_LOGGED</span></td></tr></table></div>
<ul><li><span class="lang-en">Choosing the HA/DR solution — match it to the RPO and RTO in the question:</span><span class="lang-vi">Chọn giải pháp HA/DR — khớp với RPO và RTO mà đề đưa ra:</span></li>
</ul>
<div class="tw"><table class="cmp"><tr><th><span class="lang-en">Solution</span><span class="lang-vi">Giải pháp</span></th><th><span class="lang-en">Platform</span><span class="lang-vi">Nền tảng</span></th><th><span class="lang-en">RPO / RTO and what to remember</span><span class="lang-vi">RPO / RTO và điều cần nhớ</span></th></tr><tr><td><span class="lang-en"><a href="#s79">Zone-redundant deployment</a></span><span class="lang-vi"><a href="#s79">Triển khai zone-redundant</a></span></td><td><span class="lang-en">SQL DB, MI</span><span class="lang-vi">SQL DB, MI</span></td><td><span class="lang-en">Business Critical / Premium with replicas in different availability zones raises the SLA to 99.995%</span><span class="lang-vi">Business Critical / Premium với replica ở các availability zone khác nhau nâng SLA lên 99,995%</span></td></tr><tr><td><span class="lang-en"><a href="#s86">Geo-restore</a></span><span class="lang-vi"><a href="#s86">Geo-restore</a></span></td><td><span class="lang-en">SQL DB, MI</span><span class="lang-vi">SQL DB, MI</span></td><td><span class="lang-en">RPO 1 hour, RTO 12 hours — the cheapest and the slowest</span><span class="lang-vi">RPO 1 giờ, RTO 12 giờ — rẻ nhất và chậm nhất</span></td></tr><tr><td><span class="lang-en"><a href="#s94">Active geo-replication</a></span><span class="lang-vi"><a href="#s94">Active geo-replication</a></span></td><td><span class="lang-en">SQL DB</span><span class="lang-vi">SQL DB</span></td><td><span class="lang-en">Manual failover: RPO 5 seconds, RTO 30 seconds; readable secondaries</span><span class="lang-vi">Failover thủ công: RPO 5 giây, RTO 30 giây; secondary đọc được</span></td></tr><tr><td><span class="lang-en"><a href="#s91">Auto-failover group</a></span><span class="lang-vi"><a href="#s91">Auto-failover group</a></span></td><td><span class="lang-en">SQL DB, MI — never VMs</span><span class="lang-vi">SQL DB, MI — không có ở VM</span></td><td><span class="lang-en">RPO 5 seconds, RTO 1 hour; automatic failover only starts after at least an hour, the grace period is 1–24 hours, and the listener endpoints follow the primary</span><span class="lang-vi">RPO 5 giây, RTO 1 giờ; auto-failover chỉ kích hoạt sau ít nhất một giờ, grace period 1–24 giờ, và các endpoint listener bám theo primary</span></td></tr><tr><td><span class="lang-en"><a href="#s90">Always On availability group</a></span><span class="lang-vi"><a href="#s90">Always On availability group</a></span></td><td><span class="lang-en">VMs and hybrid</span><span class="lang-vi">VM và môi trường lai</span></td><td><span class="lang-en">2–9 replicas on WSFC; synchronous commit loses nothing but waits, asynchronous is for distance; connect through the listener</span><span class="lang-vi">2–9 replica trên WSFC; commit đồng bộ không mất dữ liệu nhưng phải chờ, bất đồng bộ dành cho khoảng cách xa; kết nối qua listener</span></td></tr><tr><td><span class="lang-en"><a href="#s93">Failover cluster instance</a></span><span class="lang-vi"><a href="#s93">Failover cluster instance</a></span></td><td><span class="lang-en">VMs</span><span class="lang-vi">VM</span></td><td><span class="lang-en">Protects the whole instance using shared storage plus WSFC</span><span class="lang-vi">Bảo vệ cả instance bằng shared storage cộng WSFC</span></td></tr><tr><td><span class="lang-en"><a href="#s94-2">Log shipping</a></span><span class="lang-vi"><a href="#s94-2">Log shipping</a></span></td><td><span class="lang-en">VMs, on-premises</span><span class="lang-vi">VM, on-premises</span></td><td><span class="lang-en">Backup → copy → restore on a schedule; secondaries are read-only at best; hybrid needs site-to-site VPN or ExpressRoute</span><span class="lang-vi">Backup → copy → restore theo lịch; secondary nhiều nhất chỉ đọc được hạn chế; môi trường lai cần VPN site-to-site hoặc ExpressRoute</span></td></tr><tr><td><span class="lang-en"><a href="#s94">Transactional replication</a></span><span class="lang-vi"><a href="#s94">Transactional replication</a></span></td><td><span class="lang-en">MI → SQL Server, SQL DB or MI</span><span class="lang-vi">MI → SQL Server, SQL DB hoặc MI</span></td><td><span class="lang-en">Pushes changes out; used to distribute data or to migrate</span><span class="lang-vi">Đẩy thay đổi đi; dùng để phân phối dữ liệu hoặc để di trú</span></td></tr></table></div>
<ul><li><span class="lang-en">SLA figures and cluster quorum:</span><span class="lang-vi">Các con số SLA và quorum của cụm:</span></li>
</ul>
<div class="tw"><table class="cmp"><tr><th><span class="lang-en">Configuration</span><span class="lang-vi">Cấu hình</span></th><th><span class="lang-en">SLA / rule</span><span class="lang-vi">SLA / quy tắc</span></th></tr><tr><td><span class="lang-en">Azure SQL Database and MI, standard tiers</span><span class="lang-vi">Azure SQL Database và MI, các tầng thông thường</span></td><td><span class="lang-en">99.99%</span><span class="lang-vi">99,99%</span></td></tr><tr><td><span class="lang-en">Business Critical / Premium, zone redundant</span><span class="lang-vi">Business Critical / Premium, zone redundant</span></td><td><span class="lang-en">99.995%</span><span class="lang-vi">99,995%</span></td></tr><tr><td><span class="lang-en">Hyperscale</span><span class="lang-vi">Hyperscale</span></td><td><span class="lang-en">99.9% with no replica, 99.95% with one replica</span><span class="lang-vi">99,9% khi không có replica, 99,95% khi có một replica</span></td></tr><tr><td><span class="lang-en">SQL Server on a VM</span><span class="lang-vi">SQL Server trên VM</span></td><td><span class="lang-en">The VM itself tops out at 99.99% (two or more instances across availability zones), 99.95% in one availability set; disks: 95% standard HDD, 99.5% standard SSD, 99.9% premium/ultra</span><span class="lang-vi">Bản thân VM cao nhất 99,99% (từ hai instance ở nhiều availability zone), 99,95% trong một availability set; đĩa: 95% HDD chuẩn, 99,5% SSD chuẩn, 99,9% premium/ultra</span></td></tr><tr><td><span class="lang-en"><a href="#s92">WSFC quorum</a></span><span class="lang-vi"><a href="#s92">Quorum của WSFC</a></span></td><td><span class="lang-en">Keep the number of votes odd — a two-node cluster runs without a witness but a witness is recommended, giving at least three votes</span><span class="lang-vi">Giữ số vote là số lẻ — cụm hai node chạy được mà không cần witness nhưng nên có, để đủ tối thiểu ba vote</span></td></tr><tr><td><span class="lang-en"><a href="#s92">Cloud witness</a></span><span class="lang-vi"><a href="#s92">Cloud witness</a></span></td><td><span class="lang-en">Windows Server 2016+, about 1 MB, on general purpose standard storage with locally redundant storage — recommended for multi-site, multi-zone or multi-region clusters</span><span class="lang-vi">Windows Server 2016+, khoảng 1 MB, trên storage general purpose standard với locally redundant storage — khuyến nghị cho cụm nhiều site, nhiều zone hoặc nhiều region</span></td></tr></table></div>
</section>
<section id="s79"><h3><span class="n">79.</span> <span class="lang-en">recommend HADR strategy based on RPO/RTO requirements</span><span class="lang-vi">đề xuất chiến lược HADR dựa trên yêu cầu RPO/RTO</span><a class="anch" href="#s79" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Azure SQL Database offers a Service Level Agreement (SLA) of:</span><span class="lang-vi">Azure SQL Database đưa ra Service Level Agreement (SLA) như sau:</span></li>
<ul><li><span class="lang-en">If using Hyperscale tier:</span><span class="lang-vi">Nếu dùng tier Hyperscale:</span></li>
<ul><li><span class="lang-en">99.9% for a zero replicas (8 hours 45 minutes over a year, or 43 minutes 48 seconds over a month),</span><span class="lang-vi">99,9% khi không có replica nào (tương đương 8 giờ 45 phút mỗi năm, hoặc 43 phút 48 giây mỗi tháng),</span></li>
<li><span class="lang-en">99.95% for one replica (4 hours 22 minutes over a year, or 21 minutes 54 seconds over a month).</span><span class="lang-vi">99,95% khi có một replica (4 giờ 22 phút mỗi năm, hoặc 21 phút 54 giây mỗi tháng).</span></li>
</ul><li><span class="lang-en">Other Azure Database tiers:</span><span class="lang-vi">Các tier Azure Database khác:</span></li>
<ul><li><span class="lang-en">99.99% (52 minutes over a year, or 4 minutes 23 seconds over a month) – this is for other Azure SQL Database tiers and Azure SQL Managed Instance.</span><span class="lang-vi">99,99% (52 phút mỗi năm, hoặc 4 phút 23 giây mỗi tháng) — áp dụng cho các tier Azure SQL Database còn lại và Azure SQL Managed Instance.</span></li>
<li><span class="lang-en">However, if you are in Business Critical/Premium tiers, and you have Zone Redundant Deployments, this increases to 99.995% (26 minutes over a year, or 2 minutes 11 seconds over a month).</span><span class="lang-vi">Tuy nhiên nếu bạn ở tier Business Critical/Premium và có Zone Redundant Deployment thì con số này tăng lên 99,995% (26 phút mỗi năm, hoặc 2 phút 11 giây mỗi tháng).</span></li>
<ul><li><span class="lang-en">A Database that includes multiple synchronized replicas provisioned in different Availability Zones</span><span class="lang-vi">Tức là database có nhiều replica đồng bộ được cấp phát ở các Availability Zone khác nhau</span></li>
</ul></ul></ul><li><span class="lang-en">For VMs:</span><span class="lang-vi">Với VM:</span></li>
<ul><li><span class="lang-en">The maximum SLA is 99.99% for the VM itself.</span><span class="lang-vi">SLA tối đa cho bản thân VM là 99,99%.</span></li>
<li><span class="lang-en">However, the SQL Server may fail, even though the VM is healthy – so the actual SLA will lower.</span><span class="lang-vi">Tuy nhiên SQL Server vẫn có thể hỏng dù VM vẫn khỏe — nên SLA thực tế sẽ thấp hơn.</span></li>
</ul><li><span class="lang-en">Terminology:</span><span class="lang-vi">Thuật ngữ:</span></li>
<ul><li><span class="lang-en">RPO – Recovery Point Objective of 5 seconds (how much data you can lose)</span><span class="lang-vi">RPO — Recovery Point Objective 5 giây (lượng dữ liệu bạn có thể mất)</span></li>
<li><span class="lang-en">RTO – Recovery Time Objective of 30 seconds (how long until you can use it again – maximum &quot;Failover&quot; time)</span><span class="lang-vi">RTO — Recovery Time Objective 30 giây (bao lâu thì dùng lại được — tức thời gian &quot;Failover&quot; tối đa)</span></li>
<ul><li><span class="lang-en">If exceeded, you get a credit of 100% of the total monthly cost of the Secondary</span><span class="lang-vi">Nếu vượt quá, bạn được credit 100% tổng chi phí hằng tháng của Secondary</span></li>
</ul></ul><li><span class="lang-en">If you have geo-replication, then you have a guarantee of:</span><span class="lang-vi">Nếu bạn có geo-replication thì được đảm bảo:</span></li>
<ul><li><span class="lang-en">Geo-restore for geo-replicated backups</span><span class="lang-vi">Geo-restore từ bản backup geo-replicated</span></li>
<ul><li><span class="lang-en">RPO – 1 hour, RTO – 12 hours</span><span class="lang-vi">RPO — 1 giờ, RTO — 12 giờ</span></li>
</ul><li><span class="lang-en">Auto-failover groups</span><span class="lang-vi">Auto-failover group</span></li>
<ul><li><span class="lang-en">RPO – 5 seconds, RTO – 1 hour</span><span class="lang-vi">RPO — 5 giây, RTO — 1 giờ</span></li>
</ul><li><span class="lang-en">Manual database failover (to geo-replicated secondary)</span><span class="lang-vi">Failover database thủ công (sang secondary đã geo-replicate)</span></li>
<ul><li><span class="lang-en">RPO – 5 seconds, RTO – 30 seconds</span><span class="lang-vi">RPO — 5 giây, RTO — 30 giây</span></li>
</ul></ul></ul></section>
<section id="s4"><h3><span class="n">4, , 80.</span> <span class="lang-en">evaluate HADR for hybrid deployments</span><span class="lang-vi">đánh giá HADR cho triển khai hybrid</span><a class="anch" href="#s4" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Availability groups</span><span class="lang-vi">Availability group</span></li>
<ul><li><span class="lang-en">2-9 SQL Server instances on VMs or VMs and on-premises data center.</span><span class="lang-vi">Từ 2 tới 9 instance SQL Server trên VM, hoặc kết hợp VM và datacenter on-premises.</span></li>
<li><span class="lang-en">Data is committed on a primary, then sent out to secondaries.</span><span class="lang-vi">Dữ liệu được commit ở primary rồi gửi sang các secondary.</span></li>
<li><span class="lang-en">You can use synchronous commit for secondary replica in on-prem network.</span><span class="lang-vi">Bạn có thể dùng synchronous commit cho secondary replica nằm trong mạng on-prem.</span></li>
<ul><li><span class="lang-en">Transactions are not committed on the primary until they can be committed on the secondary.</span><span class="lang-vi">Transaction chưa được commit ở primary cho tới khi nó commit được ở secondary.</span></li>
<li><span class="lang-en">However, asynchronous is also available, for lowest patency or for geographically spread secondaries.</span><span class="lang-vi">Tuy nhiên asynchronous cũng có sẵn, dùng khi cần độ trễ thấp nhất hoặc khi các secondary nằm rải rác về mặt địa lý.</span></li>
</ul><li><span class="lang-en">You need a domain controller VM, as it requires an Active Directory domain.</span><span class="lang-vi">Bạn cần một domain controller VM, vì cơ chế này đòi hỏi một Active Directory domain.</span></li>
<li><span class="lang-en">Availability replicas running Azure VMs allow for DR. It uses an asynchronous commit.</span><span class="lang-vi">Availability replica chạy trên Azure VM cho phép làm DR. Nó dùng asynchronous commit.</span></li>
<ul><li><span class="lang-en">Transactions are committed on the primary before being replicated on the secondary.</span><span class="lang-vi">Transaction được commit ở primary trước, rồi mới nhân bản sang secondary.</span></li>
</ul><li><span class="lang-en">You also need a VPN connection for the entire failover cluster, using a multi-subnet failover cluster.</span><span class="lang-vi">Bạn cũng cần kết nối VPN cho toàn bộ failover cluster, dùng multi-subnet failover cluster.</span></li>
<li><span class="lang-en">For DR purposes, you also need a replica domain controller at the disaster recovery site.</span><span class="lang-vi">Phục vụ mục đích DR, bạn còn cần một replica domain controller đặt tại site DR.</span></li>
<li><span class="lang-en">You fail over at the database level, not the instance.</span><span class="lang-vi">Bạn failover ở cấp DATABASE, không phải cấp instance.</span></li>
</ul><li><span class="lang-en">Database mirroring</span><span class="lang-vi">Database mirroring</span></li>
<ul><li><span class="lang-en">An Azure VM running at least SQL Server 2012, and another SQL Server running on-prem running at least SQL Server 2008R2, using server certificates.</span><span class="lang-vi">Một Azure VM chạy tối thiểu SQL Server 2012, và một SQL Server on-prem chạy tối thiểu SQL Server 2008 R2, dùng server certificate.</span></li>
<li><span class="lang-en">No VPN required, and they don't have to be in the same Active Directory domain (but you can – but you will ned a VPN and a replica domain controller).</span><span class="lang-vi">Không cần VPN, và chúng không bắt buộc phải cùng một Active Directory domain (có thể cùng, nhưng khi đó bạn sẽ cần VPN và một replica domain controller).</span></li>
</ul><li><span class="lang-en">Backup and restore using Azure Blog storage</span><span class="lang-vi">Backup and restore using Azure Blog storage</span></li>
<li><span class="lang-en">Replicate and fail over SQL Server to Azure with Azure Storage.</span><span class="lang-vi">Nhân bản và failover SQL Server sang Azure bằng Azure Storage.</span></li>
<li><span class="lang-en">Log shipping</span><span class="lang-vi">Log shipping</span></li>
<ul><li><span class="lang-en">An Azure VM and a SQL Server on-prem.</span><span class="lang-vi">Một Azure VM và một SQL Server on-prem.</span></li>
<li><span class="lang-en">As log shipping requires Windows file sharing, you would need a VPN tunnel.</span><span class="lang-vi">Vì log shipping cần Windows file sharing nên bạn phải có một VPN tunnel.</span></li>
<li><span class="lang-en">The secondary database is stored on a secondary server or warm standby.</span><span class="lang-vi">Database secondary được lưu trên một server phụ hoặc warm standby.</span></li>
</ul><li><span class="lang-en">These are also available for Azure VMs only configurations.</span><span class="lang-vi">Những phương án này cũng dùng được cho cấu hình chỉ toàn Azure VM.</span></li>
<li><span class="lang-en">Evaluate HADR for hybrid deployments Availability groups</span><span class="lang-vi">Đánh giá HADR cho triển khai hybrid — Availability group</span></li>
<li><span class="lang-en">Evaluate HADR for hybrid deployments Database mirroring / Azure Blob Storage / Azure Site Recovery</span><span class="lang-vi">Đánh giá HADR cho triển khai hybrid — Database mirroring / Azure Blob Storage / Azure Site Recovery</span></li>
<li><span class="lang-en">Evaluate HADR for hybrid deployments Log shipping</span><span class="lang-vi">Đánh giá HADR cho triển khai hybrid — Log shipping</span></li>
<li><span class="lang-en">Failover Cluster Instances (FCI) for Azure VMs</span><span class="lang-vi">Failover Cluster Instance (FCI) cho Azure VM</span></li>
<ul><li><span class="lang-en">Allows for HA, but not DR.</span><span class="lang-vi">Cho phép làm HA, nhưng KHÔNG làm DR.</span></li>
<ul><li><span class="lang-en">Designed to protect against network card or disk failure – but there are other solutions in Azure.</span><span class="lang-vi">Được thiết kế để chống lỗi card mạng hoặc lỗi đĩa — nhưng Azure còn có các giải pháp khác cho việc này.</span></li>
</ul><li><span class="lang-en">There are 5 different configurations:</span><span class="lang-vi">Có 5 cấu hình khác nhau:</span></li>
<ul><li><span class="lang-en">Azure shared disks for Windows Server 2019.</span><span class="lang-vi">Azure shared disk cho Windows Server 2019.</span></li>
<ul><li><span class="lang-en">Attach a managed disk to multiple VMs at the same time.</span><span class="lang-vi">Gắn một managed disk vào nhiều VM cùng lúc.</span></li>
</ul><li><span class="lang-en">Storage Spaces Direct (S2S) for a Storage Area Network for Windows Server 2016 or later.</span><span class="lang-vi">Storage Spaces Direct (S2D) làm Storage Area Network, cho Windows Server 2016 trở lên.</span></li>
<li><span class="lang-en">Premium File Share for Windows Server 2012 or later. Uses SSD, have low latency, supported for Failover Cluster Instances.</span><span class="lang-vi">Premium File Share cho Windows Server 2012 trở lên. Dùng SSD, độ trễ thấp, được hỗ trợ cho Failover Cluster Instance.</span></li>
<li><span class="lang-en">Using third-party solutions.</span><span class="lang-vi">Dùng giải pháp của bên thứ ba.</span></li>
<li><span class="lang-en">Using Azure ExpressRoute.</span><span class="lang-vi">Dùng Azure ExpressRoute.</span></li>
</ul></ul><li><span class="lang-en">For Azure SQL Database and MI:</span><span class="lang-vi">Với Azure SQL Database và MI:</span></li>
<ul><li><span class="lang-en">They use locally redundant availability as standard.</span><span class="lang-vi">Chúng mặc định dùng locally redundant availability.</span></li>
</ul><li><span class="lang-en">For MI:</span><span class="lang-vi">Với MI:</span></li>
<ul><li><span class="lang-en">You can also configure a Failover Group</span><span class="lang-vi">Bạn cũng cấu hình được Failover Group</span></li>
</ul><li><span class="lang-en">For Azure SQL Database:</span><span class="lang-vi">Với Azure SQL Database:</span></li>
<ul><li><span class="lang-en">For more, see topic 94.</span><span class="lang-vi">Xem thêm ở mục 94.</span></li>
<li><span class="lang-en">Automatic Asynchronous Replication</span><span class="lang-vi">Nhân bản bất đồng bộ tự động</span></li>
<ul><li><span class="lang-en">Secondary Database populated with primary database (&quot;seeding&quot;).</span><span class="lang-vi">Database secondary được nạp dữ liệu từ database primary (gọi là &quot;seeding&quot;).</span></li>
<li><span class="lang-en">Updates are then replicated automatically.</span><span class="lang-vi">Updates are then replicated automatically.</span></li>
</ul><li><span class="lang-en">Readable secondary databases (replication).</span><span class="lang-vi">Database secondary đọc được (replication).</span></li>
<ul><li><span class="lang-en">To create a replica, go to Data Management – Replicas – Create replica.</span><span class="lang-vi">Để tạo replica, vào Data Management – Replicas – Create replica.</span></li>
<li><span class="lang-en">You can have up to 4 per primary database.</span><span class="lang-vi">Bạn có tối đa 4 replica cho mỗi database primary.</span></li>
<ul><li><span class="lang-en">Can be in different regions.</span><span class="lang-vi">Chúng có thể nằm ở các region khác nhau.</span></li>
<li><span class="lang-en">Want more? You can have a secondary of a secondary. Replication to that secondary takes longer.</span><span class="lang-vi">Cần nhiều hơn? Bạn có thể tạo secondary của một secondary. Việc nhân bản tới secondary đó sẽ lâu hơn.</span></li>
</ul><li><span class="lang-en">They need to have at least the same service tier as the primary.</span><span class="lang-vi">Chúng phải có service tier ít nhất bằng primary.</span></li>
<ul><li><span class="lang-en">Need to change? When upgrading, upgrade the secondary first. When downgrade, downgrade the primary first.</span><span class="lang-vi">Cần thay đổi tier? Khi nâng cấp, nâng secondary trước. Khi hạ cấp, hạ primary trước.</span></li>
<li><span class="lang-en">You don't need to disconnect the secondaries unless you change between General Purpose and Business Critical.</span><span class="lang-vi">Bạn không cần ngắt kết nối các secondary, trừ khi chuyển đổi giữa General Purpose và Business Critical.</span></li>
</ul><li><span class="lang-en">More than 1 secondary means that, even if one fails, there will still be at least one until it is recreated.</span><span class="lang-vi">Có nhiều hơn 1 secondary nghĩa là dù một cái hỏng thì vẫn còn ít nhất một cái cho tới khi cái hỏng được tạo lại.</span></li>
<li><span class="lang-en">Uses snapshot isolation mode, so updates from the primary are not delayed by long-running queries on the secondary.</span><span class="lang-vi">Dùng chế độ snapshot isolation, nên các update từ primary không bị trì hoãn bởi query chạy lâu trên secondary.</span></li>
</ul></ul><li><span class="lang-en">Azure Site Recovery service</span><span class="lang-vi">Dịch vụ Azure Site Recovery</span></li>
<ul><li><span class="lang-en">Simple DR (but not HA) of Azure VMs from a primary to a secondary region.</span><span class="lang-vi">DR đơn giản (nhưng không phải HA) cho Azure VM, từ region chính sang region phụ.</span></li>
<li><span class="lang-en">Can also replicate on-prem VMs/servers to Azure or a secondary on-prem datacenter.</span><span class="lang-vi">Cũng nhân bản được VM/server on-prem lên Azure hoặc sang một datacenter on-prem phụ.</span></li>
<li><span class="lang-en">Not SQL Server solution, but can be used with SQL Server on the VMs.</span><span class="lang-vi">Không phải giải pháp riêng cho SQL Server, nhưng dùng được với SQL Server chạy trên VM.</span></li>
<li><span class="lang-en">Provides continuous replication.</span><span class="lang-vi">Cung cấp cơ chế nhân bản liên tục.</span></li>
<li><span class="lang-en">Can replicate using recovery point snapshots; they capture disk data, data in memory, and transactions in process.</span><span class="lang-vi">Có thể nhân bản bằng recovery point snapshot; chúng ghi lại dữ liệu trên đĩa, dữ liệu trong bộ nhớ và các transaction đang xử lý.</span></li>
<li><span class="lang-en">Run DR drills, planned failovers with zero-data loss, or unplanned failovers.</span><span class="lang-vi">Chạy diễn tập DR, failover có kế hoạch với zero-data loss, hoặc failover ngoài kế hoạch.</span></li>
<li><span class="lang-en">Useful to protect against ransomware.</span><span class="lang-vi">Hữu ích để phòng chống ransomware.</span></li>
</ul><li><span class="lang-en">identify resources for HADR solutions – Replicas/ geo-replication</span><span class="lang-vi">xác định tài nguyên cho giải pháp HADR — Replica / geo-replication</span></li>
<li><span class="lang-en">identify resources for HADR solutions – failover groups</span><span class="lang-vi">xác định tài nguyên cho giải pháp HADR — failover group</span></li>
</ul></section>
<section id="s82"><h3><span class="n">82.</span> <span class="lang-en">test HA by using failover – FAILOVER GROUP</span><span class="lang-vi">kiểm thử HA bằng failover – FAILOVER GROUP</span><a class="anch" href="#s82" title="Link tới mục này">#</a></h3>
</section>
<section id="s82-2"><h3><span class="n">82.</span> <span class="lang-en">test DR by using failover or restore</span><span class="lang-vi">kiểm thử DR bằng failover hoặc restore</span><a class="anch" href="#s82-2" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">To create a failover group</span><span class="lang-vi">Để tạo một failover group</span></li>
<ul><li><span class="lang-en">Go to the SQL Database server (not the database).</span><span class="lang-vi">Vào SQL Database server (không phải database).</span></li>
<li><span class="lang-en">Go to Settings – Failover groups – Add groups.</span><span class="lang-vi">Vào Settings – Failover groups – Add groups.</span></li>
<li><span class="lang-en">Create a failover group.</span><span class="lang-vi">Create a failover group.</span></li>
<ul><li><span class="lang-en">Enter a unique failover group name,</span><span class="lang-vi">Nhập tên failover group duy nhất,</span></li>
<li><span class="lang-en">a server (or create a new server),</span><span class="lang-vi">chọn một server (hoặc tạo server mới),</span></li>
<li><span class="lang-en">The Read/Write failover policy (automatic or manual), and</span><span class="lang-vi">Read/Write failover policy (automatic hoặc manual), và</span></li>
<li><span class="lang-en">the Read/Write grace period (1-24 hours).</span><span class="lang-vi">Read/Write grace period (1-24 giờ).</span></li>
</ul><li><span class="lang-en">You can then add eligible databases into the failover group.</span><span class="lang-vi">Sau đó bạn thêm các database đủ điều kiện vào failover group.</span></li>
</ul><li><span class="lang-en">To update the failover group settings:</span><span class="lang-vi">Để cập nhật thiết lập của failover group:</span></li>
<ul><li><span class="lang-en">Click on Settings – Failover groups – and the name of the failover group.</span><span class="lang-vi">Bấm Settings – Failover groups – rồi chọn tên failover group.</span></li>
<li><span class="lang-en">You can &quot;edit the configuration&quot; (read/write failover policy and grace period).</span><span class="lang-vi">Bạn có thể &quot;edit the configuration&quot; (read/write failover policy và grace period).</span></li>
<li><span class="lang-en">You can &quot;add databases&quot; into the failover group.</span><span class="lang-vi">Bạn có thể &quot;add databases&quot; vào failover group.</span></li>
<li><span class="lang-en">Once you have done all of your changes, click &quot;Save&quot; or &quot;Discard&quot;.</span><span class="lang-vi">Sau khi thay đổi xong, bấm &quot;Save&quot; hoặc &quot;Discard&quot;.</span></li>
</ul><li><span class="lang-en">To test the failover:</span><span class="lang-vi">Để kiểm thử failover:</span></li>
<ul><li><span class="lang-en">Click on Settings – Failover groups – and the name of the failover group.</span><span class="lang-vi">Bấm Settings – Failover groups – rồi chọn tên failover group.</span></li>
<li><span class="lang-en">Click on Failover (or Forced [manual] failover).</span><span class="lang-vi">Bấm Failover (hoặc Forced [manual] failover).</span></li>
<ul><li><span class="lang-en">Forced failover risks possible data loss.</span><span class="lang-vi">Forced failover có nguy cơ mất dữ liệu.</span></li>
</ul><li><span class="lang-en">All databases within a failover group are then fail-overed.</span><span class="lang-vi">Toàn bộ database trong failover group sẽ cùng được failover.</span></li>
<li><span class="lang-en">You can also use the PowerShell cmdlet:</span><span class="lang-vi">Bạn cũng có thể dùng cmdlet PowerShell:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">Invoke-AzSqlInstanceFailover -ResourceGroupName &quot;ResourceGroup01&quot; -Name &quot;ManagedInstance01&quot;</span><span class="lang-vi">Invoke-AzSqlInstanceFailover -ResourceGroupName &quot;ResourceGroup01&quot; -Name &quot;ManagedInstance01&quot;</span></pre></li>
<ul><li><span class="lang-en">This failovers an Azure SQL Managed Instance.</span><span class="lang-vi">Lệnh này failover một Azure SQL Managed Instance.</span></li>
</ul><li class="cb"><pre class="code"><span class="lang-en">Invoke-AzSqlDatabaseFailover -ResourceGroupName &quot;ResourceGroup01&quot; - ServerName &quot;Server01&quot; -DatabaseName &quot;Database01&quot;</span><span class="lang-vi">Invoke-AzSqlDatabaseFailover -ResourceGroupName &quot;ResourceGroup01&quot; - ServerName &quot;Server01&quot; -DatabaseName &quot;Database01&quot;</span></pre></li>
<ul><li><span class="lang-en">This failovers a single database in an Azure SQL Database, which could be a single database in an elastic pool (without affecting the other databases in the same elastic pool).</span><span class="lang-vi">Lệnh này failover một database đơn lẻ trong Azure SQL Database — kể cả database nằm trong elastic pool (mà không ảnh hưởng các database khác trong cùng pool).</span></li>
</ul><li class="cb"><pre class="code"><span class="lang-en">Invoke-AzSqlElasticPoolFailover -ResourceGroupName &quot;ResourceGroup01&quot; - ServerName &quot;Server01&quot; -ElasticPoolName &quot;ElasticPool01&quot;</span><span class="lang-vi">Invoke-AzSqlElasticPoolFailover -ResourceGroupName &quot;ResourceGroup01&quot; - ServerName &quot;Server01&quot; -ElasticPoolName &quot;ElasticPool01&quot;</span></pre></li>
<ul><li><span class="lang-en">This failovers all databases in an elastic pool.</span><span class="lang-vi">Lệnh này failover toàn bộ database trong một elastic pool.</span></li>
</ul></ul></ul></ul></section>
<section id="s82-3"><h3><span class="n">82.</span> <span class="lang-en">test HA by using failover – AVAILABILITY GROUP</span><span class="lang-vi">kiểm thử HA bằng failover – AVAILABILITY GROUP</span><a class="anch" href="#s82-3" title="Link tới mục này">#</a></h3>
</section>
<section id="s82-4"><h3><span class="n">82.</span> <span class="lang-en">test DR by using failover or restore</span><span class="lang-vi">kiểm thử DR bằng failover hoặc restore</span><a class="anch" href="#s82-4" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">To manually fail over an availability group:</span><span class="lang-vi">Để failover thủ công một availability group:</span></li>
<ul><li><span class="lang-en">Go to SSMS and the server which hosts a SECONDARY replica of the availability group.</span><span class="lang-vi">Mở SSMS và kết nối tới server đang giữ một SECONDARY replica của availability group.</span></li>
<li><span class="lang-en">Go to AlwaysOn High Availability – Availability Groups.</span><span class="lang-vi">Vào AlwaysOn High Availability – Availability Groups.</span></li>
<li><span class="lang-en">Right-hand click the availability group to be failed over, and click on &quot;Failover&quot;.</span><span class="lang-vi">Chuột phải vào availability group cần failover và bấm &quot;Failover&quot;.</span></li>
<li><span class="lang-en">If the Introduction page of the wizard says &quot;Perform a planned failover for this availability group&quot;, then you can do this without data loss.</span><span class="lang-vi">Nếu trang Introduction của wizard ghi &quot;Perform a planned failover for this availability group&quot; thì bạn làm được mà không mất dữ liệu.</span></li>
<li><span class="lang-en">In the &quot;Select New Primary Replica&quot; page, you can view the status of:</span><span class="lang-vi">Ở trang &quot;Select New Primary Replica&quot;, bạn xem được trạng thái của:</span></li>
<ul><li><span class="lang-en">The primary replica,</span><span class="lang-vi">Primary replica,</span></li>
<li><span class="lang-en">The Windows Server Failover Cluster quorum status:</span><span class="lang-vi">Trạng thái quorum của Windows Server Failover Cluster:</span></li>
<ul><li><span class="lang-en">Normal quorum</span><span class="lang-vi">Normal quorum</span></li>
<li><span class="lang-en">Forced quorum</span><span class="lang-vi">Forced quorum</span></li>
<li><span class="lang-en">Unknown quorum, and</span><span class="lang-vi">Unknown quorum, và</span></li>
<li><span class="lang-en">Not applicable.</span><span class="lang-vi">Not applicable.</span></li>
</ul></ul><li><span class="lang-en">The secondary replicas can say:</span><span class="lang-vi">Các secondary replica có thể hiện:</span></li>
<ul><li><span class="lang-en">&quot;No data loss&quot; – this is a planned manual failover,</span><span class="lang-vi">&quot;No data loss&quot; — đây là planned manual failover,</span></li>
<li><span class="lang-en">&quot;Data loss, Warnings (X)&quot;, where X shows the number of warnings – this would have to be a forced failover.</span><span class="lang-vi">&quot;Data loss, Warnings (X)&quot;, trong đó X là số cảnh báo — trường hợp này buộc phải dùng forced failover.</span></li>
</ul><li><span class="lang-en">The relevant secondary replica will then become the new primary replica.</span><span class="lang-vi">Secondary replica tương ứng sau đó sẽ trở thành primary replica mới.</span></li>
<li><span class="lang-en">In the &quot;Connect to Replica&quot; page, you can connect to the failover target.</span><span class="lang-vi">Ở trang &quot;Connect to Replica&quot;, bạn kết nối tới đích failover.</span></li>
</ul><li><span class="lang-en">In T-SQL, you can use:</span><span class="lang-vi">Bằng T-SQL, bạn dùng:</span></li>
<ul><li><code><span class="lang-en">ALTER AVAILABILITY GROUP MyAg FAILOVER;</span><span class="lang-vi">ALTER AVAILABILITY GROUP MyAg FAILOVER;</span></code></li>
</ul></ul></section>
<section id="s84"><h3><span class="n">84.</span> <span class="lang-en">perform a database backup with options</span><span class="lang-vi">thực hiện backup database kèm các tùy chọn</span><a class="anch" href="#s84" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Performing a database backup with options is primarily for VMs.</span><span class="lang-vi">Việc backup database kèm tùy chọn chủ yếu áp dụng cho VM.</span></li>
<ul><li><span class="lang-en">MIs can do some options, but it will be a Copy Only backup.</span><span class="lang-vi">MI làm được một số tùy chọn, nhưng kết quả sẽ là Copy Only backup.</span></li>
</ul><li><span class="lang-en">The General page shows:</span><span class="lang-vi">Trang General hiển thị:</span></li>
<ul><li><span class="lang-en">Recovery model.</span><span class="lang-vi">Recovery model.</span></li>
<li><span class="lang-en">Backup type (Full, Differential or Transaction Log [not for Simple]),</span><span class="lang-vi">Backup type (Full, Differential or Transaction Log [not for Simple]),</span></li>
<li><span class="lang-en">Copy-only backup (this is independent of the sequence of other backups).</span><span class="lang-vi">Copy-only backup (độc lập với chuỗi các backup khác).</span></li>
<li><span class="lang-en">Backup component:</span><span class="lang-vi">Backup component:</span></li>
<ul><li><span class="lang-en">Database (all the database), or</span><span class="lang-vi">Database (toàn bộ database), hoặc</span></li>
<li><span class="lang-en">Specific files and filegroups.</span><span class="lang-vi">Các file và filegroup cụ thể.</span></li>
</ul><li><span class="lang-en">Back up to:</span><span class="lang-vi">Back up to:</span></li>
<ul><li><span class="lang-en">Disk (System file or disk-based logical backup device),</span><span class="lang-vi">Disk (file hệ thống hoặc logical backup device dạng đĩa),</span></li>
<li><span class="lang-en">Tape (local or tape-based logical backup device) – this is deprecated.</span><span class="lang-vi">Tape (logical backup device dạng băng từ, cục bộ) — đã bị deprecate.</span></li>
<li><span class="lang-en">URL – Microsoft Azure Blob storage</span><span class="lang-vi">URL — Microsoft Azure Blob storage</span></li>
<li><span class="lang-en">Contents shows the media contents for the selected disk/tape (not URL).</span><span class="lang-vi">Contents hiển thị nội dung media của đĩa/băng đã chọn (không áp dụng cho URL).</span></li>
</ul></ul><li><span class="lang-en">The Media Options page shows:</span><span class="lang-vi">Trang Media Options hiển thị:</span></li>
<ul><li><span class="lang-en">Backup to the existing media set</span><span class="lang-vi">Backup to the existing media set</span></li>
<ul><li><span class="lang-en">Append to the existing backup set, preserving any prior backups</span><span class="lang-vi">Append vào backup set hiện có, giữ lại các backup trước đó</span></li>
<li><span class="lang-en">Overwrite all existing backup set, replacing prior backups with the current backup.</span><span class="lang-vi">Ghi đè toàn bộ backup set hiện có, thay các backup trước bằng backup lần này.</span></li>
<li><span class="lang-en">Check media set name and backup set expiration – requires the backup operation to verify name and expiration date.</span><span class="lang-vi">Check media set name and backup set expiration — buộc thao tác backup phải kiểm tra tên và ngày hết hạn.</span></li>
<ul><li><span class="lang-en">Optionally, set the media set name.</span><span class="lang-vi">Tùy chọn: đặt tên cho media set.</span></li>
</ul></ul><li><span class="lang-en">Backup to a new media set, and erase all existing backup sets.</span><span class="lang-vi">Backup to a new media set, and erase all existing backup sets.</span></li>
<ul><li><span class="lang-en">Optionally, set the new media set name and description.</span><span class="lang-vi">Tùy chọn: đặt tên và mô tả cho media set mới.</span></li>
</ul><li><span class="lang-en">Reliability</span><span class="lang-vi">Reliability</span></li>
<ul><li><span class="lang-en">Verify backup when finished.</span><span class="lang-vi">Kiểm tra lại backup sau khi hoàn tất.</span></li>
<li><span class="lang-en">Perform checksum before writing to media</span><span class="lang-vi">Tính checksum trước khi ghi lên media</span></li>
<li><span class="lang-en">Continue on error (even after encountering one or more errors)</span><span class="lang-vi">Tiếp tục khi gặp lỗi (kể cả sau khi đã gặp một hoặc nhiều lỗi)</span></li>
</ul><li><span class="lang-en">Transaction log</span><span class="lang-vi">Transaction log</span></li>
<ul><li><span class="lang-en">Backup the transaction log and truncate it to free log space. The database remains online.</span><span class="lang-vi">Backup the transaction log and truncate it to free log space. The database remains online.</span></li>
<li><span class="lang-en">Backup the transaction log tail (tail-log backup), and leave the database in a restoring state (not available to users until it is completely restored).</span><span class="lang-vi">Backup the transaction log tail (tail-log backup), and leave the database in a restoring state (not available to users until it is completely restored).</span></li>
</ul><li><span class="lang-en">Tape drive (deprecated)</span><span class="lang-vi">Ổ băng từ (đã deprecate)</span></li>
<ul><li><span class="lang-en">Unload the tape after backup, and</span><span class="lang-vi">Tháo băng sau khi backup, và</span></li>
<li><span class="lang-en">Release and rewind the tape before unloading.</span><span class="lang-vi">Nhả và tua lại băng trước khi tháo.</span></li>
</ul></ul><li><span class="lang-en">The Backup set page shows:</span><span class="lang-vi">Trang Backup set hiển thị:</span></li>
<ul><li><span class="lang-en">Name and description of the backup set name</span><span class="lang-vi">Tên và mô tả của backup set</span></li>
<li><span class="lang-en">Expiration duration or date:</span><span class="lang-vi">Thời hạn hoặc ngày hết hạn:</span></li>
<ul><li><span class="lang-en">After X days; if X is zero, the backup set will never expire.</span><span class="lang-vi">Sau X ngày; nếu X bằng 0 thì backup set không bao giờ hết hạn.</span></li>
<li><span class="lang-en">Specific date.</span><span class="lang-vi">Một ngày cụ thể.</span></li>
</ul><li><span class="lang-en">For the Enterprise edition, you can select backup compression.</span><span class="lang-vi">Với bản Enterprise, bạn chọn được backup compression.</span></li>
<li><span class="lang-en">Encrypt backup, using AES 128, AES 192, AES 256 and Triple DES.</span><span class="lang-vi">Mã hóa backup bằng AES 128, AES 192, AES 256 và Triple DES.</span></li>
<ul><li><span class="lang-en">Only enabled if you append to existing backup set. Backup your certificate or keys to a different location.</span><span class="lang-vi">Chỉ bật được nếu bạn append vào backup set hiện có. Hãy sao lưu certificate hoặc key sang một nơi khác.</span></li>
</ul></ul><li><span class="lang-en">If you have a VM with IaaS Extension can configure backups in the Azure Portal.</span><span class="lang-vi">Nếu VM có IaaS Extension, bạn cấu hình được backup ngay trong Azure Portal.</span></li>
<li><span class="lang-en">You can:</span><span class="lang-vi">Bạn có thể:</span></li>
<ul><li><span class="lang-en">Enable/Disable the backups of system databases, and</span><span class="lang-vi">Bật/tắt việc backup các database hệ thống, và</span></li>
<ul><li><span class="lang-en">Configure a backup schedule – Automated or Manual,</span><span class="lang-vi">Cấu hình lịch backup — Automated hoặc Manual,</span></li>
<li><span class="lang-en">Backup frequency – Daily or Weekly,</span><span class="lang-vi">Backup frequency – Daily or Weekly,</span></li>
<li><span class="lang-en">Backup start time (local VM time),</span><span class="lang-vi">Backup start time (local VM time),</span></li>
<li><span class="lang-en">Full backup time window (hours),</span><span class="lang-vi">Cửa sổ thời gian cho full backup (tính bằng giờ),</span></li>
<li><span class="lang-en">Log backup frequency (minutes).</span><span class="lang-vi">Tần suất backup log (tính bằng phút).</span></li>
</ul></ul><li><span class="lang-en">Restores need to be configured from within SQL Server.</span><span class="lang-vi">Restores need to be configured from within SQL Server.</span></li>
</ul></section>
<section id="s85"><h3><span class="n">85.</span> <span class="lang-en">perform a database restore with options</span><span class="lang-vi">thực hiện restore database kèm các tùy chọn</span><a class="anch" href="#s85" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">The user must have CREATE DATABASE permissions.</span><span class="lang-vi">Người dùng phải có quyền CREATE DATABASE.</span></li>
<ul><li><span class="lang-en">This exists in sysadmin and dbcreator fixed server roles, and dbo (owner) for existing databases.</span><span class="lang-vi">Quyền này có sẵn ở fixed server role sysadmin và dbcreator, cùng dbo (owner) với database đã tồn tại.</span></li>
</ul><li><span class="lang-en">The General page shows:</span><span class="lang-vi">Trang General hiển thị:</span></li>
<ul><li><span class="lang-en">Source</span><span class="lang-vi">Source</span></li>
<ul><li><span class="lang-en">Database – this list only contains databases backed up, based on the msdb backup history.</span><span class="lang-vi">Database — danh sách này chỉ chứa các database đã từng được backup, dựa trên lịch sử backup trong msdb.</span></li>
<li><span class="lang-en">Device – tape, URL or file. This is required if the backup was taken on a different SQL Server instance.</span><span class="lang-vi">Device — băng từ, URL hoặc file. Bắt buộc dùng nếu bản backup được tạo trên một instance SQL Server khác.</span></li>
<ul><li><span class="lang-en">You can select up to 64 devices that belong to a single media set.</span><span class="lang-vi">Bạn chọn được tối đa 64 device thuộc cùng một media set.</span></li>
</ul><li><span class="lang-en">Device database – backups on the selected device.</span><span class="lang-vi">Device database — các bản backup nằm trên device đã chọn.</span></li>
</ul><li><span class="lang-en">Destination</span><span class="lang-vi">Destination</span></li>
<ul><li><span class="lang-en">Database to restore.</span><span class="lang-vi">Database cần restore.</span></li>
<ul><li><span class="lang-en">Enter a new database, or choose an existing database from the dropdown list, which includes all databases on the server, excluding master and tempdb.</span><span class="lang-vi">Nhập tên database mới, hoặc chọn một database có sẵn từ danh sách — danh sách này gồm mọi database trên server, TRỪ master và tempdb.</span></li>
</ul><li><span class="lang-en">Restore to.</span><span class="lang-vi">Restore to.</span></li>
<ul><li><span class="lang-en">It is &quot;To the last backup taken&quot; by default.</span><span class="lang-vi">Mặc định là &quot;To the last backup taken&quot;.</span></li>
<li><span class="lang-en">Alternatively, you can select [Backup] Timeline, which shows the database backup history as a timeline.</span><span class="lang-vi">Alternatively, you can select [Backup] Timeline, which shows the database backup history as a timeline.</span></li>
</ul></ul><li><span class="lang-en">Restore plan</span><span class="lang-vi">Restore plan</span></li>
<ul><li><span class="lang-en">Backup sets to restore.</span><span class="lang-vi">Backup sets to restore.</span></li>
<ul><li><span class="lang-en">The default is the recovery plan suggested to achieve the goal.</span><span class="lang-vi">Mặc định là recovery plan được đề xuất để đạt mục tiêu.</span></li>
</ul></ul><li><span class="lang-en">Verify backup media.</span><span class="lang-vi">Verify backup media.</span></li>
<ul><li><span class="lang-en">Check the integrity of the backup files prior to restoring them.</span><span class="lang-vi">Kiểm tra tính toàn vẹn của các file backup trước khi restore.</span></li>
</ul></ul><li><span class="lang-en">The Files page shows:</span><span class="lang-vi">Trang Files hiển thị:</span></li>
<ul><li><span class="lang-en">Relocate all files to [a particular] folder, showing</span><span class="lang-vi">Relocate all files to [một thư mục cụ thể], hiển thị</span></li>
<ul><li><span class="lang-en">Logical and Original File Name,</span><span class="lang-vi">Logical File Name và Original File Name,</span></li>
<li><span class="lang-en">File Type,</span><span class="lang-vi">File Type,</span></li>
<li><span class="lang-en">The file path/name to &quot;Restore As&quot;.</span><span class="lang-vi">Đường dẫn/tên file trong ô &quot;Restore As&quot;.</span></li>
</ul></ul><li><span class="lang-en">The Options page shows:</span><span class="lang-vi">Trang Options hiển thị:</span></li>
<ul><li><span class="lang-en">Overwrite the existing database</span><span class="lang-vi">Ghi đè lên database hiện có</span></li>
<ul><li><span class="lang-en">Overwrite database files.</span><span class="lang-vi">Ghi đè các file database.</span></li>
</ul><li><span class="lang-en">Preserve the replication settings</span><span class="lang-vi">Giữ lại thiết lập replication</span></li>
<ul><li><span class="lang-en">Only relevant if a database was replicated when the backup was created, and when restoring a published database to a different server (other than the creation server).</span><span class="lang-vi">Chỉ liên quan khi database đang được replicate lúc backup, và khi restore một published database sang server khác (khác server đã tạo nó).</span></li>
</ul><li><span class="lang-en">Restrict access to the restored database.</span><span class="lang-vi">Giới hạn quyền truy cập database vừa restore.</span></li>
<ul><li><span class="lang-en">Only for db_owner, dbcreator and sysadmin members.</span><span class="lang-vi">Chỉ dành cho thành viên db_owner, dbcreator và sysadmin.</span></li>
</ul><li><span class="lang-en">Recovery state:</span><span class="lang-vi">Recovery state:</span></li>
<ul><li><span class="lang-en">Restore with recovery. Default option.</span><span class="lang-vi">Restore with recovery. Default option.</span></li>
<ul><li><span class="lang-en">Only choose this option in a full or bulk-logged recovery model if you are also restoring all log files at the same time.</span><span class="lang-vi">Chỉ chọn tùy chọn này với recovery model full hoặc bulk-logged nếu bạn cũng restore toàn bộ file log cùng lúc.</span></li>
</ul><li><span class="lang-en">Restore with NoRecovery</span><span class="lang-vi">Restore with NoRecovery</span></li>
<ul><li><span class="lang-en">Left in the Restoring state. Allows for additional backups.</span><span class="lang-vi">Để database ở trạng thái Restoring. Cho phép restore thêm các bản backup khác.</span></li>
</ul><li><span class="lang-en">Restore with Standby</span><span class="lang-vi">Restore with Standby</span></li>
<ul><li><span class="lang-en">Limited read-only access.</span><span class="lang-vi">Cho phép truy cập read-only hạn chế.</span></li>
<li><span class="lang-en">Need to specify a Standby file, which allows the recovery effects to be undone.</span><span class="lang-vi">Cần chỉ định một Standby file, nơi cho phép hoàn tác các tác động của quá trình recovery.</span></li>
</ul></ul><li><span class="lang-en">Tail-log backup.</span><span class="lang-vi">Tail-log backup.</span></li>
<ul><li><span class="lang-en">Take tail-log backup before restoring.</span><span class="lang-vi">Thực hiện tail-log backup trước khi restore.</span></li>
<ul><li><span class="lang-en">You can specify a backup file for the tail-log.</span><span class="lang-vi">Bạn có thể chỉ định file backup cho tail-log.</span></li>
</ul></ul><li><span class="lang-en">Server connections</span><span class="lang-vi">Server connections</span></li>
<ul><li><span class="lang-en">Restore options may fail if there are active connections to the database.</span><span class="lang-vi">Restore options may fail if there are active connections to the database.</span></li>
</ul><li><span class="lang-en">Prompt before restoring each backup.</span><span class="lang-vi">Hỏi xác nhận trước mỗi lần restore.</span></li>
<ul><li><span class="lang-en">The &quot;Continue with Restore&quot; dialog box will be displayed after each backup is restored.</span><span class="lang-vi">Hộp thoại &quot;Continue with Restore&quot; sẽ hiện ra sau mỗi bản backup được restore.</span></li>
<li><span class="lang-en">If you click &quot;No&quot;, the database will be left in the Restoring state.</span><span class="lang-vi">Nếu bạn bấm &quot;No&quot;, database sẽ được để ở trạng thái Restoring.</span></li>
</ul></ul></ul></section>
<section id="s86"><h3><span class="n">86.</span> <span class="lang-en">perform a database restore to a point in time</span><span class="lang-vi">restore database về một thời điểm cụ thể</span><a class="anch" href="#s86" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">For VM, see topic 91.</span><span class="lang-vi">Với VM, xem mục 91.</span></li>
<li><span class="lang-en">For Azure SQL MI, to restore an Azure SQL database to a different region:</span><span class="lang-vi">Với Azure SQL MI, để restore một Azure SQL database sang region khác:</span></li>
<ul><li><span class="lang-en">Go to the MI, click on &quot;+New database&quot;, select the database name, and change &quot;Use existing data&quot; to &quot;Backup&quot; and select the backup.</span><span class="lang-vi">Vào MI, bấm &quot;+New database&quot;, chọn tên database, đổi &quot;Use existing data&quot; thành &quot;Backup&quot; rồi chọn bản backup.</span></li>
</ul><li><span class="lang-en">Database backups for Azure SQL Database and Azure SQL MI are done automatically.</span><span class="lang-vi">Việc backup database cho Azure SQL Database và Azure SQL MI được thực hiện tự động.</span></li>
<ul><li><span class="lang-en">Full backups every week,</span><span class="lang-vi">Full backup mỗi tuần,</span></li>
<li><span class="lang-en">differential backups every 12-24 hours, and</span><span class="lang-vi">differential backup mỗi 12-24 giờ, và</span></li>
<li><span class="lang-en">transaction log backups every 5-10 minutes.</span><span class="lang-vi">transaction log backup mỗi 5-10 phút.</span></li>
<li><span class="lang-en">You can do a:</span><span class="lang-vi">Bạn có thể thực hiện:</span></li>
<ul><li><span class="lang-en">point-in-time restore (PITR) of existing or deleted databases – 7 days by default</span><span class="lang-vi">point-in-time restore (PITR) cho database đang tồn tại hoặc đã bị xóa — mặc định 7 ngày</span></li>
<ul><li><span class="lang-en">You can change it to 1-35 days optionally (apart from Hyperscale and Basic tier databases – basic has a maximum of 7 days).</span><span class="lang-vi">Bạn có thể đổi thành 1-35 ngày (trừ database tier Hyperscale và Basic — Basic tối đa 7 ngày).</span></li>
<li><span class="lang-en">Note: In MI, PITR is available for individual databases, but not for the entire instance.</span><span class="lang-vi">Lưu ý: trên MI, PITR áp dụng cho từng database riêng lẻ, không áp dụng cho toàn bộ instance.</span></li>
</ul><li><span class="lang-en">recover to another geographic region - same</span><span class="lang-vi">khôi phục sang một khu vực địa lý khác — cùng giới hạn như trên</span></li>
<li><span class="lang-en">restore from a long-term backup – up to 10 years.</span><span class="lang-vi">restore from a long-term backup – up to 10 years.</span></li>
</ul><li><span class="lang-en">The first backup is scheduled immediately after a new database is created or restored.</span><span class="lang-vi">Bản backup đầu tiên được lên lịch ngay sau khi database mới được tạo hoặc được restore.</span></li>
<li><span class="lang-en">For non-large database, it usually completes within 30 minutes.</span><span class="lang-vi">Với database không quá lớn, việc này thường hoàn tất trong vòng 30 phút.</span></li>
</ul><li><span class="lang-en">To restore a database:</span><span class="lang-vi">Để restore một database:</span></li>
<ul><li><span class="lang-en">Go to the Database overview page.</span><span class="lang-vi">Vào trang Overview của database.</span></li>
<ul><li><span class="lang-en">If recovering a deleted database, go to the server or MI, and click &quot;Deleted database&quot; (on the left-hand side).</span><span class="lang-vi">Nếu khôi phục database đã bị xóa, vào server hoặc MI và bấm &quot;Deleted database&quot; (ở phía bên trái).</span></li>
</ul><li><span class="lang-en">Click &quot;Restore&quot;.</span><span class="lang-vi">Bấm &quot;Restore&quot;.</span></li>
<li><span class="lang-en">Choose backup source.</span><span class="lang-vi">Chọn nguồn backup.</span></li>
<li><span class="lang-en">Select the Point-in-time backup point, and then OK.</span><span class="lang-vi">Select the Point-in-time backup point, and then OK.</span></li>
<li><span class="lang-en">You cannot restore over an existing database (but you can rename it afterwards).</span><span class="lang-vi">Bạn KHÔNG thể restore đè lên một database đang tồn tại (nhưng có thể đổi tên sau đó).</span></li>
<li><span class="lang-en">You can use PowerShell cmdlets to restore an existing database, but again, you can't restore over an existing database.</span><span class="lang-vi">Bạn có thể dùng cmdlet PowerShell để restore một database đang tồn tại, nhưng cũng vậy — không restore đè lên database đang tồn tại được.</span></li>
</ul><li><span class="lang-en">To restore an Azure SQL database to a different region:</span><span class="lang-vi">Để restore một Azure SQL database sang region khác:</span></li>
<ul><li><span class="lang-en">Create the database.</span><span class="lang-vi">Create the database.</span></li>
<li><span class="lang-en">In the &quot;Additional settings&quot; tab, change &quot;Use existing data&quot; to &quot;Backup&quot;, and select a backup.</span><span class="lang-vi">Ở tab &quot;Additional settings&quot;, đổi &quot;Use existing data&quot; thành &quot;Backup&quot; và chọn một bản backup.</span></li>
</ul></ul></section>
<section id="s87"><h3><span class="n">87.</span> <span class="lang-en">configure long-term backup retention</span><span class="lang-vi">cấu hình lưu giữ backup dài hạn</span><a class="anch" href="#s87" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">This is for both Azure SQL Database and Azure SQL MI.</span><span class="lang-vi">Áp dụng cho cả Azure SQL Database lẫn Azure SQL MI.</span></li>
<ul><li><span class="lang-en">It is in Public Preview in SQL MI in Azure Public regions only.</span><span class="lang-vi">Với SQL MI thì tính năng này đang ở Public Preview và chỉ có ở các region Azure Public.</span></li>
</ul><li><span class="lang-en">Backups can also be configured for Long-Term Retention (LTR).</span><span class="lang-vi">Backups can also be configured for Long-Term Retention (LTR).</span></li>
<li><span class="lang-en">LTR backups are done by Azure.</span><span class="lang-vi">LTR backup do Azure thực hiện.</span></li>
<ul><li><span class="lang-en">You cannot control the timing nor manually create a LTR backup.</span><span class="lang-vi">Bạn không kiểm soát được thời điểm và cũng không tự tạo LTR backup được.</span></li>
<li><span class="lang-en">It may take up to 7 days before the first LTR backup will be shown in the list of available backups.</span><span class="lang-vi">Có thể mất tới 7 ngày thì bản LTR backup đầu tiên mới xuất hiện trong danh sách backup khả dụng.</span></li>
<li><span class="lang-en">Ensure that you have a LTR policy on secondary databases, only to be created when they become primary.</span><span class="lang-vi">Hãy đảm bảo các database secondary cũng có LTR policy, nhưng policy đó chỉ được tạo khi chúng trở thành primary.</span></li>
<li><span class="lang-en">Backups are stored in Azure Blob storage – a different storage container weekly.</span><span class="lang-vi">Backups are stored in Azure Blob storage – a different storage container weekly.</span></li>
</ul><li><span class="lang-en">To configure this, go to Azure portal – the server – Backups – Retention policies – select the database(s), and configure the LTR:</span><span class="lang-vi">Để cấu hình, vào Azure portal – server – Backups – Retention policies – chọn (các) database rồi cấu hình LTR:</span></li>
<ul><li><span class="lang-en">Weekly backups,</span><span class="lang-vi">Weekly backup,</span></li>
<li><span class="lang-en">Monthly backups,</span><span class="lang-vi">Monthly backup,</span></li>
<li><span class="lang-en">Yearly backups and</span><span class="lang-vi">Yearly backup và</span></li>
<li><span class="lang-en">WeekOfYear backups.</span><span class="lang-vi">WeekOfYear backup.</span></li>
</ul><li><span class="lang-en">To view backups, go to Azure portal – the server – Backups – Available backups – and next to the relevant database, under “Available LTR backups”, select Manage.</span><span class="lang-vi">Để xem các bản backup, vào Azure portal – server – Backups – Available backups, rồi cạnh database tương ứng, dưới mục &quot;Available LTR backups&quot;, chọn Manage.</span></li>
<ul><li><span class="lang-en">You can click on an LTR backup, and select Restore (which creates a new database) or Delete.</span><span class="lang-vi">Bạn bấm vào một bản LTR backup rồi chọn Restore (tạo ra một database mới) hoặc Delete.</span></li>
</ul><li><span class="lang-en">Once the original database is deleted…</span><span class="lang-vi">Sau khi database gốc bị xóa…</span></li>
<ul><li><span class="lang-en">No more backups are made.</span><span class="lang-vi">Không còn bản backup nào được tạo nữa.</span></li>
<li><span class="lang-en">As backups expire, they are deleted.</span><span class="lang-vi">Các bản backup hiện có sẽ bị xóa dần khi hết hạn.</span></li>
</ul></ul></section>
<section id="s88"><h3><span class="n">88.</span> <span class="lang-en">perform transaction log backup</span><span class="lang-vi">thực hiện transaction log backup</span><a class="anch" href="#s88" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">This only applies to VMs.</span><span class="lang-vi">Chỉ áp dụng cho VM.</span></li>
<li><span class="lang-en">You need to be using full or bulk-logged recovery models.</span><span class="lang-vi">Bạn phải đang dùng recovery model full hoặc bulk-logged.</span></li>
<ul><li><span class="lang-en">Simple recovery models do not use transaction log backups.</span><span class="lang-vi">Recovery model simple không dùng transaction log backup.</span></li>
<li><span class="lang-en">To change recovery model:</span><span class="lang-vi">Để đổi recovery model:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER DATABASE NameOfDatabse
SET RECOVERY FULL | BULK_LOGGED | SIMPLE
GO</span><span class="lang-vi">ALTER DATABASE NameOfDatabse
SET RECOVERY FULL | BULK_LOGGED | SIMPLE
GO</span></pre></li>
</ul></ul><li><span class="lang-en">You need the BACKUP DATABASE and backup log PERMISSIONS.</span><span class="lang-vi">Bạn cần quyền BACKUP DATABASE và quyền backup log.</span></li>
<ul><li><span class="lang-en">They are already granted in the sysadmin fixed server role, and the db_owner and db_backupoperator fixed database roles.</span><span class="lang-vi">Các quyền này đã được cấp sẵn cho fixed server role sysadmin, và các fixed database role db_owner và db_backupoperator.</span></li>
</ul><li><span class="lang-en">Use the following command:</span><span class="lang-vi">Use the following command:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">BACKUP LOG NameOfDatabase
TO MyPreviouslyCreatedNamedBackupDevice
NORECOVERY, NO_TRUNCATE
GO</span><span class="lang-vi">BACKUP LOG NameOfDatabase
TO MyPreviouslyCreatedNamedBackupDevice
NORECOVERY, NO_TRUNCATE
GO</span></pre></li>
<ul><li><span class="lang-en">NORECOVERY backups the tail of the log and leaves the database in the RESTORING state.</span><span class="lang-vi">NORECOVERY backup phần đuôi của log và để database ở trạng thái RESTORING.</span></li>
<ul><li><span class="lang-en">Useful when failing over to a secondary database or when saving the tail before a RESTORE.</span><span class="lang-vi">Hữu ích khi failover sang database secondary, hoặc khi cần lưu phần đuôi log trước một lệnh RESTORE.</span></li>
</ul><li><span class="lang-en">NO_TRUNCATE causes SQL Server to attempt to backup, regardless of the state of the database.</span><span class="lang-vi">NO_TRUNCATE buộc SQL Server cố thực hiện backup bất kể database đang ở trạng thái nào.</span></li>
<ul><li><span class="lang-en">Useful if the database is damaged.</span><span class="lang-vi">Hữu ích khi database đã bị hỏng.</span></li>
</ul><li><span class="lang-en">Suggest using NO_TRUNCATE and NORECOVERY together.</span><span class="lang-vi">Khuyến nghị dùng NO_TRUNCATE và NORECOVERY cùng nhau.</span></li>
</ul>
</ul></ul></section>
<section id="s88-2"><h3><span class="n">88.</span> <span class="lang-en">perform restore of user databases</span><span class="lang-vi">thực hiện restore các database người dùng</span><a class="anch" href="#s88-2" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">In SQL Server in an Azure VM, you can:</span><span class="lang-vi">Với SQL Server trên Azure VM, bạn có thể:</span></li>
<ul><li><span class="lang-en">Perform a complete restore or partial report.</span><span class="lang-vi">Thực hiện restore toàn phần hoặc từng phần.</span></li>
<li><span class="lang-en">Restore to a point in time.</span><span class="lang-vi">Restore to a point in time.</span></li>
<li><span class="lang-en">You can also do the following, which we don't need to cover:</span><span class="lang-vi">Bạn cũng làm được những việc sau, nhưng phần này không cần đi sâu:</span></li>
<ul><li><span class="lang-en">Restore specific file(s), filegroup(s) or page(s).</span><span class="lang-vi">Restore specific file(s), filegroup(s) or page(s).</span></li>
<li><span class="lang-en">Restore a transaction log, or</span><span class="lang-vi">Restore a transaction log, or</span></li>
</ul></ul><li><span class="lang-en">Use:</span><span class="lang-vi">Dùng:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">RESTORE DATABASE NameOfDatabase
FROM MyPreviouslyCreatedNamedBackupDevice
[WITH RECOVERY | NORECOVERY]
[FILE = BackupSetFileNumber]
[STOPAT = { 'datetime'| @datetime_var }
| STOPATMARK or STOPBEFOREMARK = { MarkName | LSNNumber } [ AFTER 'datetime']</span><span class="lang-vi">RESTORE DATABASE NameOfDatabase
FROM MyPreviouslyCreatedNamedBackupDevice
[WITH RECOVERY | NORECOVERY]
[FILE = BackupSetFileNumber]
[STOPAT = { 'datetime'| @datetime_var }
| STOPATMARK hoặc STOPBEFOREMARK = { MarkName | LSNNumber } [ AFTER 'datetime']</span></pre></li>
<ul><li><span class="lang-en">NORECOVERY is useful when you are restoring a single file, but you need to restore more.</span><span class="lang-vi">NORECOVERY hữu ích khi bạn đang restore một file nhưng vẫn còn phải restore thêm nữa.</span></li>
<li><span class="lang-en">Use RECOVERY when you have finished restoring, and you want the database to be online.</span><span class="lang-vi">Use RECOVERY when you have finished restoring, and you want the database to be online.</span></li>
</ul></ul><li><span class="lang-en">For example:</span><span class="lang-vi">Ví dụ:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">RESTORE … WITH FILE = 6 NORECOVERY, STOPAT = 'Jun 19, 2024 12:00 PM';
RESTORE … WITH FILE = 9 RECOVERY;
RESTORE VERIFYONLY FROM …</span><span class="lang-vi">RESTORE … WITH FILE = 6 NORECOVERY, STOPAT = 'Jun 19, 2024 12:00 PM';
RESTORE … WITH FILE = 9 RECOVERY;
RESTORE VERIFYONLY FROM …</span></pre></li>
<ul><li><span class="lang-en">Verifies the backup but does not restore it.</span><span class="lang-vi">Kiểm chứng bản backup nhưng KHÔNG restore nó.</span></li>
</ul></ul><li><span class="lang-en">You can only use T-SQL in an MI when doing a complete restore from an Azure Blob Storage Account:</span><span class="lang-vi">Trên MI, bạn chỉ dùng được T-SQL khi thực hiện complete restore từ một Azure Blob Storage Account:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">RESTORE DATABASE NameOfDatabase
FROM URL = 'https:// … ' , 'https:// … ' (etc)</span><span class="lang-vi">RESTORE DATABASE NameOfDatabase
FROM URL = 'https:// … ' , 'https:// … ' (v.v.)</span></pre></li>
<li><span class="lang-en">It can only be restored onto another MI – not an on-prem SQL Server.</span><span class="lang-vi">Nó chỉ restore được sang một MI khác — không restore sang SQL Server on-prem được.</span></li>
</ul></ul></section>
<section id="s88-3"><h3><span class="n">88.</span> <span class="lang-en">perform database backups with options</span><span class="lang-vi">thực hiện backup database kèm các tùy chọn</span><a class="anch" href="#s88-3" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">MIs have automatic backups. You can create full database COPY_ONLY backups, but not differential, log or file snapshot backups.</span><span class="lang-vi">MI có backup tự động. Bạn tạo được full database COPY_ONLY backup, nhưng không tạo được differential, log hay file snapshot backup.</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">BACKUP DATABASE NameOfDatabase
TO URL = 'https:// … ' , 'https:// … ' (etc)
WITH COPY_ONLY
[COMPRESSION | NO_COMPRESSION]
[STATS = X]</span><span class="lang-vi">BACKUP DATABASE NameOfDatabase
TO URL = 'https:// … ' , 'https:// … ' (v.v.)
WITH COPY_ONLY
[COMPRESSION | NO_COMPRESSION]
[STATS = X]</span></pre></li>
<ul><li><span class="lang-en">The URLs is for the Microsoft Azure storage service.</span><span class="lang-vi">Các URL này trỏ tới dịch vụ Microsoft Azure storage.</span></li>
<li><span class="lang-en">Maximum backup stripe size (blob size) is 195 Gb.</span><span class="lang-vi">Kích thước tối đa của một backup stripe (blob) là 195 GB.</span></li>
<ul><li><span class="lang-en">If you want more space, add additional files.</span><span class="lang-vi">Nếu cần thêm dung lượng thì thêm file.</span></li>
</ul><li><span class="lang-en">Does not interfere with the normal sequence of backups.</span><span class="lang-vi">Không làm gián đoạn chuỗi backup thông thường.</span></li>
<li><span class="lang-en">This overrides the server-level default. The default is no backup compression.</span><span class="lang-vi">Tùy chọn này ghi đè mặc định ở cấp server. Mặc định là không nén backup.</span></li>
<li><span class="lang-en">Displays a message every X% percentage. The default is 10 per cent.</span><span class="lang-vi">Hiển thị thông báo sau mỗi X phần trăm. Mặc định là 10 phần trăm.</span></li>
</ul></ul><li><span class="lang-en">This is for VMs (and Mis if using COPY_ONLY). The syntax is:</span><span class="lang-vi">Phần này dành cho VM (và cho MI nếu dùng COPY_ONLY). Cú pháp:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">BACKUP DATABASE NameOfDatabase
[FILEGROUP = 'X', FILEGROUP = 'Y' …]
TO MyPreviouslyCreatedNamedBackupDevice
[MIRROR TO AnotherBackupDevice]</span><span class="lang-vi">BACKUP DATABASE NameOfDatabase
[FILEGROUP = 'X', FILEGROUP = 'Y' …]
TO MyPreviouslyCreatedNamedBackupDevice
[MIRROR TO AnotherBackupDevice]</span></pre></li>
<ul><li><span class="lang-en">Useful for backing-up only part of a database.</span><span class="lang-vi">Hữu ích khi chỉ cần backup một phần của database.</span></li>
<li><span class="lang-en">If backing up to disk, then use TO DISK = 'FileLocation'.</span><span class="lang-vi">Nếu backup ra đĩa thì dùng TO DISK = 'FileLocation'.</span></li>
<li><span class="lang-en">You can also use TO TAPE = or TO URL = 'https://…'</span><span class="lang-vi">Bạn cũng có thể dùng TO TAPE = hoặc TO URL = 'https://…'</span></li>
<li><span class="lang-en">Only for the Enterprise edition of SQL Server.</span><span class="lang-vi">Chỉ có ở bản Enterprise của SQL Server.</span></li>
<li><span class="lang-en">Must be the same time as the Primary Backup.</span><span class="lang-vi">Phải thực hiện cùng lúc với Primary Backup.</span></li>
<li><span class="lang-en">You can have up to 3 secondaries.</span><span class="lang-vi">Bạn có tối đa 3 bản secondary.</span></li>
</ul><li><span class="lang-en">[WITH</span><span class="lang-vi">[WITH</span></li>
<ul><li><span class="lang-en">COPY_ONLY</span><span class="lang-vi">COPY_ONLY</span></li>
<ul><li><span class="lang-en">Creating a full backup, but is not treated as a full backup for purposes of future DIFFERENTIAL or TRANSACTION LOG backups.</span><span class="lang-vi">Tạo ra một full backup, nhưng nó không được coi là full backup đối với các DIFFERENTIAL hay TRANSACTION LOG backup sau này.</span></li>
</ul><li><span class="lang-en">DIFFERENTIAL</span><span class="lang-vi">DIFFERENTIAL</span></li>
<ul><li><span class="lang-en">All the changes since the last FULL backup.</span><span class="lang-vi">Toàn bộ thay đổi kể từ lần FULL backup gần nhất.</span></li>
<li><span class="lang-en">Without DIFFERENTIAL or LOG, it is a FULL backup.</span><span class="lang-vi">Nếu không có DIFFERENTIAL hay LOG thì đó là một FULL backup.</span></li>
</ul><li><span class="lang-en">COMPRESSION | NO_COMPRESSION</span><span class="lang-vi">COMPRESSION | NO_COMPRESSION</span></li>
<ul><li><span class="lang-en">Only use in the Enterprise edition. Overrides the server-level default</span><span class="lang-vi">Chỉ dùng ở bản Enterprise. Ghi đè mặc định ở cấp server</span></li>
</ul><li><span class="lang-en">DESCRIPTION – up to 255 characters</span><span class="lang-vi">DESCRIPTION — tối đa 255 ký tự</span></li>
<li><span class="lang-en">NAME – up to 128 characters. Default is blank.</span><span class="lang-vi">NAME — tối đa 128 ký tự. Mặc định để trống.</span></li>
<li><span class="lang-en">CREDENTIAL</span><span class="lang-vi">CREDENTIAL</span></li>
<ul><li><span class="lang-en">Used only when creating backups to Azure Blobs.</span><span class="lang-vi">Chỉ dùng khi tạo backup lên Azure Blob.</span></li>
</ul><li><span class="lang-en">ENCRYPTION</span><span class="lang-vi">ENCRYPTION</span></li>
<ul><li><span class="lang-en">Choose from AES_128, AES_192, AES_256, TRIPLE_DES_3KEY or NO_ENCRYPTION (default).</span><span class="lang-vi">Chọn AES_128, AES_192, AES_256, TRIPLE_DES_3KEY hoặc NO_ENCRYPTION (mặc định).</span></li>
<li><span class="lang-en">If you encrypt, you will also need to use SERVER CERTIFICATE or SERVER ASYMMETRIC KEY.</span><span class="lang-vi">Nếu mã hóa, bạn còn phải dùng SERVER CERTIFICATE hoặc SERVER ASYMMETRIC KEY.</span></li>
</ul><li><span class="lang-en">FILE_SNAPSHOT [EXPIREDATE = 'date' | RETAINDAYS = days]</span><span class="lang-vi">FILE_SNAPSHOT [EXPIREDATE = 'date' | RETAINDAYS = days]</span></li>
<ul><li><span class="lang-en">Used when creating a snapshot of the database files and storing them into Azure Blobs.</span><span class="lang-vi">Dùng khi tạo snapshot của các file database và lưu chúng vào Azure Blob.</span></li>
</ul></ul></ul><li><span class="lang-en">[WITH</span><span class="lang-vi">[WITH</span></li>
<ul><li><span class="lang-en">NOINIT | INIT</span><span class="lang-vi">NOINIT | INIT</span></li>
<ul><li><span class="lang-en">Whether the backup operation appends to/overwrites the existing backup sets on the backup media. The default is NOINIT (append).</span><span class="lang-vi">Quyết định thao tác backup sẽ append vào hay ghi đè lên các backup set hiện có trên media. Mặc định là NOINIT (append).</span></li>
</ul><li><span class="lang-en">NOSKIP | SKIP</span><span class="lang-vi">NOSKIP | SKIP</span></li>
<ul><li><span class="lang-en">Checks whether a backup operation checks the expiration date and time of the backup sets on the media before overwriting them. The default is NOSKIP (Check the date/time).</span><span class="lang-vi">Quyết định thao tác backup có kiểm tra ngày giờ hết hạn của các backup set trên media trước khi ghi đè hay không. Mặc định là NOSKIP (có kiểm tra).</span></li>
</ul><li><span class="lang-en">NOFORMAT | FORMAT</span><span class="lang-vi">NOFORMAT | FORMAT</span></li>
<ul><li><span class="lang-en">Whether the media header should be written on the volumes used for the backup operation, overwriting any existing media header and backup sets. The default is NOFORMAT.</span><span class="lang-vi">Quyết định có ghi media header mới lên các volume dùng cho backup hay không, ghi đè lên header và backup set hiện có. Mặc định là NOFORMAT.</span></li>
<ul><li><span class="lang-en">Be careful from using FORMAT, as it renders the entire media set unusable.</span><span class="lang-vi">Hãy cẩn thận khi dùng FORMAT, vì nó làm toàn bộ media set không dùng được nữa.</span></li>
<li><span class="lang-en">FORMAT implies SKIP.</span><span class="lang-vi">FORMAT ngầm định luôn cả SKIP.</span></li>
</ul></ul><li><span class="lang-en">NO_CHECKSUM | CHECKSUM</span><span class="lang-vi">NO_CHECKSUM | CHECKSUM</span></li>
<ul><li><span class="lang-en">Whether backup checksums are enabled – this validates the backup. The default is NO_CHECKSUM (no generation of backup checksums).</span><span class="lang-vi">Quyết định có bật backup checksum hay không — cơ chế này kiểm chứng bản backup. Mặc định là NO_CHECKSUM (không sinh checksum).</span></li>
</ul><li><span class="lang-en">STOP_ON_ERROR | CONTINUE_AFTER_ERROR</span><span class="lang-vi">STOP_ON_ERROR | CONTINUE_AFTER_ERROR</span></li>
<ul><li><span class="lang-en">Whether BACKUP stops if there is a page checksum error. The default of STOP_ON_ERROR (stop if it doesn't verify). CONTINUE_ON_ERROR is best used when there are checksum errors.</span><span class="lang-vi">Quyết định BACKUP có dừng lại khi gặp lỗi page checksum hay không. Mặc định là STOP_ON_ERROR (dừng nếu không kiểm chứng được). CONTINUE_AFTER_ERROR dùng tốt nhất khi đã biết có lỗi checksum.</span></li>
</ul><li><span class="lang-en">STATS = X</span><span class="lang-vi">STATS = X</span></li>
<ul><li><span class="lang-en">Whether a percentage is displayed every X% (the default is 10%).</span><span class="lang-vi">Quyết định có hiển thị phần trăm tiến độ sau mỗi X% hay không (mặc định 10%).</span></li>
</ul><li><span class="lang-en">REWIND | NOREWIND</span><span class="lang-vi">REWIND | NOREWIND</span></li>
<ul><li><span class="lang-en">Whether a TAPE device is released and rewound. Default is REWIND (yes).</span><span class="lang-vi">Quyết định thiết bị TAPE có được nhả và tua lại hay không. Mặc định là REWIND (có).</span></li>
</ul><li><span class="lang-en">UNLOAD | NOUNLOAD</span><span class="lang-vi">UNLOAD | NOUNLOAD</span></li>
<ul><li><span class="lang-en">Whether the tape is rewound and unloaded. Default is UNLOAD (yes).</span><span class="lang-vi">Quyết định băng có được tua lại và tháo ra hay không. Mặc định là UNLOAD (có).</span></li>
</ul></ul><li><span class="lang-en">[WITH</span><span class="lang-vi">[WITH</span></li>
<ul><li><span class="lang-en">When using BACKUP LOG:</span><span class="lang-vi">Khi dùng BACKUP LOG:</span></li>
<ul><li><span class="lang-en">NORECOVERY</span><span class="lang-vi">NORECOVERY</span></li>
<ul><li><span class="lang-en">Backs up the tail of the log and leaves the database in the RESTORING state. Useful when failing over to a secondary database or when saving the tail of the log before a RESTORE operation.</span><span class="lang-vi">Backup phần đuôi của log và để database ở trạng thái RESTORING. Hữu ích khi failover sang database secondary, hoặc khi cần lưu phần đuôi log trước một thao tác RESTORE.</span></li>
</ul><li><span class="lang-en">STANDBY = standby_file_name</span><span class="lang-vi">STANDBY = standby_file_name</span></li>
<ul><li><span class="lang-en">Backs up the tail of the log and leaves the database in a read-only and STANDBY state.</span><span class="lang-vi">Backup phần đuôi của log và để database ở trạng thái read-only, STANDBY.</span></li>
<li><span class="lang-en">The file holds the rolled back changes.</span><span class="lang-vi">File này giữ các thay đổi đã bị rollback.</span></li>
</ul><li><span class="lang-en">NO_TRUNCATE</span><span class="lang-vi">NO_TRUNCATE</span></li>
<ul><li><span class="lang-en">The log is not truncated and requires SQL Server to attempt to backup regardless of the state of the database.</span><span class="lang-vi">Log không bị truncate, và buộc SQL Server cố thực hiện backup bất kể database đang ở trạng thái nào.</span></li>
<li><span class="lang-en">Is generally used if the database is SUSPENDED – when the database has failed.</span><span class="lang-vi">Thường dùng khi database ở trạng thái SUSPENDED — tức khi database đã hỏng.</span></li>
</ul></ul></ul></ul></section>
<section id="s88a"><h3><span class="n">88a.</span> <span class="lang-en">backup and restore to and from cloud storage</span><span class="lang-vi">backup và restore từ/tới cloud storage</span><a class="anch" href="#s88a" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">This can be using either Azure SQL Managed Instance or an SQL Server.</span><span class="lang-vi">Có thể dùng với Azure SQL Managed Instance hoặc với SQL Server.</span></li>
<li><span class="lang-en">You can create cloud storage using Azure Blob Storage.</span><span class="lang-vi">Bạn tạo cloud storage bằng Azure Blob Storage.</span></li>
<ul><li><span class="lang-en">Create a Storage Account.</span><span class="lang-vi">Create a Storage Account.</span></li>
<li><span class="lang-en">Go to Data storage - Containers, and click on &quot;+ Container&quot;, and create a new container.</span><span class="lang-vi">Vào Data storage – Containers, bấm &quot;+ Container&quot; và tạo một container mới.</span></li>
</ul><li><span class="lang-en">Then you can create a credential.</span><span class="lang-vi">Sau đó bạn tạo một credential.</span></li>
<ul><li><span class="lang-en">Right-hand click on your database and go to Tasks – Back up…</span><span class="lang-vi">Chuột phải vào database và vào Tasks – Back up…</span></li>
<li><span class="lang-en">In Destination – Back up to, choose URL, then select Add.</span><span class="lang-vi">Ở mục Destination – Back up to, chọn URL rồi bấm Add.</span></li>
<li><span class="lang-en">Click on &quot;New container&quot;, and then sign-in, and select your subscription, storage account and container.</span><span class="lang-vi">Bấm &quot;New container&quot;, đăng nhập, rồi chọn subscription, storage account và container.</span></li>
<li><span class="lang-en">Click &quot;Create Credential&quot;. This generates a Shared Access Signature (SAS).</span><span class="lang-vi">Bấm &quot;Create Credential&quot;. Thao tác này sinh ra một Shared Access Signature (SAS).</span></li>
<li><span class="lang-en">Then click OK.</span><span class="lang-vi">Rồi bấm OK.</span></li>
<li><span class="lang-en">Select the Blob container, and click OK, and OK.</span><span class="lang-vi">Select the Blob container, and click OK, and OK.</span></li>
</ul><li><span class="lang-en">To restore the database:</span><span class="lang-vi">Để restore database:</span></li>
<ul><li><span class="lang-en">Right-hand click on Databases and select Restore Database.</span><span class="lang-vi">Chuột phải vào Databases và chọn Restore Database.</span></li>
<li><span class="lang-en">Click on … next to Device.</span><span class="lang-vi">Bấm dấu … cạnh Device.</span></li>
<li><span class="lang-en">Select URL, and click Add.</span><span class="lang-vi">Select URL, and click Add.</span></li>
<li><span class="lang-en">Select the container, and click OK.</span><span class="lang-vi">Select the container, and click OK.</span></li>
<li><span class="lang-en">Expand Containers and select the relevant container, and the backup files.</span><span class="lang-vi">Mở rộng Containers, chọn container tương ứng và các file backup.</span></li>
<ul><li><span class="lang-en">If you can't see any backup files, you may be using the wrong SAS key.</span><span class="lang-vi">Nếu bạn không thấy file backup nào thì có thể bạn đang dùng sai SAS key.</span></li>
</ul><li><span class="lang-en">Click OK, then OK.</span><span class="lang-vi">Bấm OK, rồi OK.</span></li>
</ul></ul></section>
<section id="s90"><h3><span class="n">90.</span> <span class="lang-en">create an Availability Group</span><span class="lang-vi">tạo một Availability Group</span><a class="anch" href="#s90" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">You need:</span><span class="lang-vi">Bạn cần:</span></li>
<ul><li><span class="lang-en">A resource group with a domain controller.</span><span class="lang-vi">Một resource group có domain controller.</span></li>
<li><span class="lang-en">One or more domain-joined VMs in Azure running SQL Server 2012+ Enterprise, or SQL Server 2016+ Standard in:</span><span class="lang-vi">Một hoặc nhiều VM trên Azure đã join domain, chạy SQL Server 2012 trở lên bản Enterprise, hoặc SQL Server 2016 trở lên bản Standard, đặt trong:</span></li>
<ul><li><span class="lang-en">The same availability set (different computers in the same datacenter), or</span><span class="lang-vi">cùng một availability set (các máy khác nhau trong cùng datacenter), hoặc</span></li>
<li><span class="lang-en">Different availability zones (physical datacenters).</span><span class="lang-vi">các availability zone khác nhau (datacenter vật lý khác nhau).</span></li>
<li><span class="lang-en">They need to be registered with the SQL IaaS Agent extension in full manageability mode and are using the same domain account for the SQL Server service on each VM.</span><span class="lang-vi">Chúng phải được đăng ký với SQL IaaS Agent extension ở chế độ full manageability, và dùng chung một domain account cho service SQL Server trên mỗi VM.</span></li>
</ul><li><span class="lang-en">Two available (not used by any entity) IP addresses.</span><span class="lang-vi">Hai địa chỉ IP còn trống (chưa thực thể nào dùng).</span></li>
<ul><li><span class="lang-en">One for the internal load balancer.</span><span class="lang-vi">Một cho internal load balancer.</span></li>
<li><span class="lang-en">One for the availability group listener within the same subnet as the availability group.</span><span class="lang-vi">Một cho availability group listener, nằm cùng subnet với availability group.</span></li>
</ul></ul><li><span class="lang-en">An availability group supports:</span><span class="lang-vi">Một availability group hỗ trợ:</span></li>
<ul><li><span class="lang-en">A set of primary replica (which host the primary databases), and</span><span class="lang-vi">Một primary replica (nơi chứa các database primary), và</span></li>
<li><span class="lang-en">1-8 sets of secondary replicas (only 1 allowed in SQL server Standard), each of which hosts the secondary databases (this does not replace backups).</span><span class="lang-vi">1 đến 8 secondary replica (bản SQL Server Standard chỉ cho phép 1), mỗi replica chứa các database secondary (những cái này KHÔNG thay thế được backup).</span></li>
<li><span class="lang-en">There must be at least 2+ failover partners.</span><span class="lang-vi">Phải có ít nhất 2 failover partner.</span></li>
</ul><li><span class="lang-en">Note:</span><span class="lang-vi">Lưu ý:</span></li>
<ul><li><span class="lang-en">The primary replica send transaction log records to every secondary database (&quot;data synchronization&quot;).</span><span class="lang-vi">Primary replica gửi bản ghi transaction log tới mọi database secondary (gọi là &quot;data synchronization&quot;).</span></li>
<li><span class="lang-en">Individual primary/secondary databases can be suspended or fail without affecting other primary/secondary databases.</span><span class="lang-vi">Từng database primary/secondary riêng lẻ có thể bị tạm dừng hoặc hỏng mà không ảnh hưởng các database primary/secondary khác.</span></li>
<li><span class="lang-en">You can configure 1+ secondary replicas to support read-only access to secondary databases, and/or to permit backups on secondary databases.</span><span class="lang-vi">Bạn có thể cấu hình một hoặc nhiều secondary replica cho phép truy cập read-only, và/hoặc cho phép backup trên database secondary.</span></li>
</ul><li><span class="lang-en">Availability modes are:</span><span class="lang-vi">Các chế độ availability gồm:</span></li>
<ul><li><span class="lang-en">Asynchronous-commit mode. The primary replica commits without acknowledgement that the secondary replica has committed.</span><span class="lang-vi">Asynchronous-commit mode. Primary replica commit mà không cần secondary replica xác nhận đã commit.</span></li>
<ul><li><span class="lang-en">Minimizes transaction latency, but there is a lag for when the data is committed onto the secondaries.</span><span class="lang-vi">Giảm thiểu độ trễ transaction, nhưng dữ liệu trên secondary bị trễ một nhịp.</span></li>
</ul><li><span class="lang-en">Synchronous-commit mode. The primary replica does not commit until the secondary replica has hardened the log.</span><span class="lang-vi">Synchronous-commit mode. Primary replica chưa commit cho tới khi secondary replica đã ghi cứng (harden) log.</span></li>
</ul><li><span class="lang-en">Failover:</span><span class="lang-vi">Failover:</span></li>
<ul><li><span class="lang-en">This is when the target secondary replica transitions to being the new primary replica.</span><span class="lang-vi">Là khi secondary replica đích chuyển thành primary replica mới.</span></li>
<li><span class="lang-en">The former primary databases becomes secondary databases.</span><span class="lang-vi">Các database primary cũ trở thành database secondary.</span></li>
<li><span class="lang-en">The failovers are as follows:</span><span class="lang-vi">Các kiểu failover như sau:</span></li>
<ul><li><span class="lang-en">Planned manual failover – no data loss – secondary replica needs to be synchronized – for synchronous-commit mode only.</span><span class="lang-vi">Planned manual failover — không mất dữ liệu — secondary replica phải đang synchronized — chỉ dành cho synchronous-commit mode.</span></li>
<li><span class="lang-en">Automatic failover – no data loss – occurs when there is a failure to the primary replica – for synchronous-commit mode only. Needs to have a Windows Server Failover Cluster quorum and be synchronized.</span><span class="lang-vi">Automatic failover — không mất dữ liệu — xảy ra khi primary replica gặp sự cố — chỉ dành cho synchronous-commit mode. Cần có quorum của Windows Server Failover Cluster và phải đang synchronized.</span></li>
</ul><li><span class="lang-en">Forced manual failover (also known as &quot;forced failover&quot;). For asynchronous-commit mode. This is a DR option.</span><span class="lang-vi">Forced manual failover (còn gọi là &quot;forced failover&quot;). Dành cho asynchronous-commit mode. Đây là phương án DR.</span></li>
<ul><li><span class="lang-en">The only type of failover that is possible if the target secondary replica is not synchronized with the primary replica.</span><span class="lang-vi">Đây là kiểu failover DUY NHẤT có thể thực hiện khi secondary replica đích chưa synchronized với primary.</span></li>
</ul><li><span class="lang-en">After failover, Azure SQL connections are automatically redirected to the new primary node.</span><span class="lang-vi">Sau khi failover, các kết nối Azure SQL được tự động chuyển hướng sang node primary mới.</span></li>
</ul><li><span class="lang-en">To create a new cluster in the Portal:</span><span class="lang-vi">Để tạo cluster mới trong Portal:</span></li>
<ul><li><span class="lang-en">In Azure portal, go to the VM – Settings – High Availability.</span><span class="lang-vi">Trong Azure portal, vào VM – Settings – High Availability.</span></li>
<li><span class="lang-en">Click on &quot;+ New Windows Server Failover Cluster&quot;.</span><span class="lang-vi">Bấm &quot;+ New Windows Server Failover Cluster&quot;.</span></li>
<li><span class="lang-en">Name the cluster, and give a Storage Account which is the Cloud Witness.</span><span class="lang-vi">Đặt tên cluster và chỉ định một Storage Account làm Cloud Witness.</span></li>
<ul><li><span class="lang-en">Storage Account name: 3-24 characters using numbers and lower-case letters.</span><span class="lang-vi">Tên Storage Account: 3-24 ký tự, gồm số và chữ thường.</span></li>
</ul><li><span class="lang-en">In &quot;Windows Server Failover Cluster&quot;, provide credentials for:</span><span class="lang-vi">Trong &quot;Windows Server Failover Cluster&quot;, cung cấp thông tin đăng nhập cho:</span></li>
<ul><li><span class="lang-en">The SQL Server service account,</span><span class="lang-vi">Tài khoản service của SQL Server,</span></li>
<li><span class="lang-en">The cluster operator, and</span><span class="lang-vi">Cluster operator, và</span></li>
<li><span class="lang-en">The Bootstrap account.</span><span class="lang-vi">Tài khoản Bootstrap.</span></li>
</ul><li><span class="lang-en">Select the VMs to be added into the cluster.</span><span class="lang-vi">Select the VMs to be added into the cluster.</span></li>
<ul><li><span class="lang-en">A restart may be required.</span><span class="lang-vi">Có thể cần khởi động lại máy.</span></li>
<li><span class="lang-en">Only relevant VMs will be shown.</span><span class="lang-vi">Chỉ những VM phù hợp mới được hiển thị.</span></li>
</ul><li><span class="lang-en">Click Apply.</span><span class="lang-vi">Bấm Apply.</span></li>
</ul><li><span class="lang-en">To create an availability group:</span><span class="lang-vi">Để tạo availability group:</span></li>
<ul><li><span class="lang-en">In Azure portal, go to the VM – Settings – SQL Server configuration – Open - High Availability.</span><span class="lang-vi">Trong Azure portal, vào VM – Settings – SQL Server configuration – Open – High Availability.</span></li>
<li><span class="lang-en">Click on &quot;+ New Always On availability group&quot;.</span><span class="lang-vi">Bấm &quot;+ New Always On availability group&quot;.</span></li>
<li><span class="lang-en">Name the availability group.</span><span class="lang-vi">Đặt tên cho availability group.</span></li>
<li><span class="lang-en">Click &quot;Configure listener&quot;.</span><span class="lang-vi">Bấm &quot;Configure listener&quot;.</span></li>
<ul><li><span class="lang-en">Use an existing load balancer, or</span><span class="lang-vi">Use an existing load balancer, or</span></li>
<li><span class="lang-en">Click &quot;Create new&quot;.</span><span class="lang-vi">Bấm &quot;Create new&quot;.</span></li>
<li><span class="lang-en">For the Load balancer:</span><span class="lang-vi">Với Load balancer:</span></li>
<ul><li><span class="lang-en">Type: &quot;Internal&quot; allows apps in the same Virtual Network to connect to the availability group.</span><span class="lang-vi">Type &quot;Internal&quot; cho phép các ứng dụng trong cùng Virtual Network kết nối tới availability group.</span></li>
<li><span class="lang-en">Type: &quot;External&quot; allows apps to connect to the availability group through a public internet connection.</span><span class="lang-vi">Type &quot;External&quot; cho phép ứng dụng kết nối tới availability group qua internet công cộng.</span></li>
<li><span class="lang-en">&quot;IP address assignment&quot; should be Static.</span><span class="lang-vi">&quot;IP address assignment&quot; nên đặt là Static.</span></li>
<li><span class="lang-en">The &quot;Resource group&quot; and &quot;Location&quot; should be that where the SQL Server instances are in.</span><span class="lang-vi">&quot;Resource group&quot; và &quot;Location&quot; phải trùng với nơi đặt các instance SQL Server.</span></li>
</ul><li><span class="lang-en">For the Listener:</span><span class="lang-vi">Với Listener:</span></li>
<ul><li><span class="lang-en">The Listener name should not exceed 15 characters.</span><span class="lang-vi">Tên listener không được vượt quá 15 ký tự.</span></li>
<li><span class="lang-en">The Listener Port defaults to 1433.</span><span class="lang-vi">Listener Port mặc định là 1433.</span></li>
<li><span class="lang-en">The Probe Port is for the internal load balancer, which is 59999 by default.</span><span class="lang-vi">Probe Port dành cho internal load balancer, mặc định là 59999.</span></li>
<li><span class="lang-en">DHCP (Dynamic Host Configuration Protocol) is not recommended in a production environment.</span><span class="lang-vi">DHCP (Dynamic Host Configuration Protocol) không được khuyến nghị trong môi trường production.</span></li>
</ul></ul><li><span class="lang-en">Click &quot;Apply&quot;.</span><span class="lang-vi">Bấm &quot;Apply&quot;.</span></li>
<li><span class="lang-en">Click &quot;+Select replica&quot;.</span><span class="lang-vi">Bấm &quot;+Select replica&quot;.</span></li>
<li><span class="lang-en">Select the VMs to be added into the availability group.</span><span class="lang-vi">Select the VMs to be added into the availability group.</span></li>
<li><span class="lang-en">Click &quot;Apply&quot;.</span><span class="lang-vi">Bấm &quot;Apply&quot;.</span></li>
</ul><li><span class="lang-en">In the Azure Portal – Settings – High Availability, the status of the availability group(s) are shown.</span><span class="lang-vi">Trong Azure Portal – Settings – High Availability, trạng thái của các availability group được hiển thị.</span></li>
<li><span class="lang-en">However, you can also use the SQL Server to do this as well – and this is the way I do this in the videos to this course.</span><span class="lang-vi">Tuy nhiên bạn cũng có thể làm việc này từ chính SQL Server — và đó là cách tác giả thực hiện trong video của khóa học này.</span></li>
</ul></section>
<section id="s90-2"><h3><span class="n">90.</span> <span class="lang-en">prepare databases for Always On Availability Groups</span><span class="lang-vi">chuẩn bị database cho Always On Availability Group</span><a class="anch" href="#s90-2" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">A secondary database need to be identical to the primary database.</span><span class="lang-vi">Database secondary phải giống hệt database primary.</span></li>
<ul><li><span class="lang-en">Therefore, do a BACKUP and RESTORE, including tail-log backups.</span><span class="lang-vi">Vì vậy hãy thực hiện BACKUP rồi RESTORE, bao gồm cả tail-log backup.</span></li>
</ul><li><span class="lang-en">Then join it – for example:</span><span class="lang-vi">Sau đó join nó vào — ví dụ:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER DATABASE Db1 SET HADR AVAILABILITY GROUP = MyAG;</span><span class="lang-vi">ALTER DATABASE Db1 SET HADR AVAILABILITY GROUP = MyAG;</span></pre></li>
</ul></ul></section>
<section id="s90-3"><h3><span class="n">90.</span> <span class="lang-en">integrate a database into an Always On Availability Group</span><span class="lang-vi">đưa một database vào Always On Availability Group</span><a class="anch" href="#s90-3" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">The database must exist on the server instance that hosts the primary replica.</span><span class="lang-vi">Database phải tồn tại trên instance đang giữ primary replica.</span></li>
<ul><li><span class="lang-en">The primary database should use the full recovery model.</span><span class="lang-vi">Database primary nên dùng full recovery model.</span></li>
<li><span class="lang-en">The name of the secondary database must be the same as the primary database.</span><span class="lang-vi">Tên của database secondary phải trùng với tên database primary.</span></li>
<li><span class="lang-en">Secondary databases do not exist until backups of the new primary database are restored to the secondary replicas (use RESTORE WITH NORECOVERY).</span><span class="lang-vi">Database secondary chưa tồn tại cho tới khi các bản backup của database primary mới được restore lên các secondary replica (dùng RESTORE WITH NORECOVERY).</span></li>
</ul><li><span class="lang-en">In SSMS</span><span class="lang-vi">Trong SSMS</span></li>
<ul><li><span class="lang-en">Connect to one of your SQL Server VMs using (for example) RDP.</span><span class="lang-vi">Kết nối tới một trong các VM SQL Server của bạn, chẳng hạn qua RDP.</span></li>
<li><span class="lang-en">In SSMS, go to your SQL Server instance – Always On High Availability – Availability Groups.</span><span class="lang-vi">Trong SSMS, vào instance SQL Server – Always On High Availability – Availability Groups.</span></li>
<li><span class="lang-en">Right-hand click on your availability group and select &quot;Add Database…&quot;.</span><span class="lang-vi">Chuột phải vào availability group và chọn &quot;Add Database…&quot;.</span></li>
<li><span class="lang-en">Add the database(s) to your availability group.</span><span class="lang-vi">Add the database(s) to your availability group.</span></li>
<li><span class="lang-en">Click &quot;OK&quot;.</span><span class="lang-vi">Bấm &quot;OK&quot;.</span></li>
</ul><li><span class="lang-en">In T-SQL (see topic 108)</span><span class="lang-vi">Bằng T-SQL (xem mục 108)</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER AVAILABILITY GROUP MyAG ADD DATABASE MyDb3;
GO
ALTER DATABASE Db1 SET HADR AVAILABILITY GROUP = MyAG;</span><span class="lang-vi">ALTER AVAILABILITY GROUP MyAG ADD DATABASE MyDb3;
GO
ALTER DATABASE Db1 SET HADR AVAILABILITY GROUP = MyAG;</span></pre></li>
</ul></ul></section>
<section id="s90-4"><h3><span class="n">90.</span> <span class="lang-en">configure an Always On Availability Group listener</span><span class="lang-vi">cấu hình listener cho Always On Availability Group</span><a class="anch" href="#s90-4" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">See topic 95.</span><span class="lang-vi">Xem mục 95.</span></li>
<li><span class="lang-en">To configure it in SSMS,</span><span class="lang-vi">Để cấu hình trong SSMS,</span></li>
<ul><li><span class="lang-en">Go to the server instances that hosts the primary replica.</span><span class="lang-vi">Vào instance đang giữ primary replica.</span></li>
<li><span class="lang-en">Go to Always On High Availability – Availability Groups.</span><span class="lang-vi">Vào Always On High Availability – Availability Groups.</span></li>
<li><span class="lang-en">Right-hand click on &quot;Availability group Listeners&quot;, and click on &quot;Add Listener&quot;.</span><span class="lang-vi">Chuột phải vào &quot;Availability group Listeners&quot; và bấm &quot;Add Listener&quot;.</span></li>
<li><span class="lang-en">Enter the listener DNS name – in SSMS, that is up to 15 letters, numbers, hyphens and underscores.</span><span class="lang-vi">Nhập tên DNS của listener — trong SSMS, tối đa 15 ký tự gồm chữ, số, gạch ngang và gạch dưới.</span></li>
<li><span class="lang-en">The TCP port used by the listener.</span><span class="lang-vi">Cổng TCP mà listener sử dụng.</span></li>
<li><span class="lang-en">Select the TCP Protocol used by the listener, either:</span><span class="lang-vi">Select the TCP Protocol used by the listener, either:</span></li>
<ul><li><span class="lang-en">Dynamic Host Configuration Protocol (DHCP) – not recommended, or</span><span class="lang-vi">Dynamic Host Configuration Protocol (DHCP) — không khuyến nghị, hoặc</span></li>
<li><span class="lang-en">Static IP.</span><span class="lang-vi">Static IP.</span></li>
<ul><li><span class="lang-en">You must specify a static IP address for every subnet that hosts an availability replica, including Subnet and IP Address.</span><span class="lang-vi">Bạn phải chỉ định một địa chỉ IP tĩnh cho MỌI subnet có chứa availability replica, gồm cả Subnet và IP Address.</span></li>
</ul></ul></ul></ul></section>
<section id="s91"><h3><span class="n">91.</span> <span class="lang-en">configure auto-failover groups</span><span class="lang-vi">cấu hình auto-failover group</span><a class="anch" href="#s91" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Used in both Azure SQL Database and MI (but not VM).</span><span class="lang-vi">Dùng được cho cả Azure SQL Database lẫn MI (nhưng không dùng cho VM).</span></li>
<li><span class="lang-en">Auto-failover will not happen for at least 1 hour.</span><span class="lang-vi">Auto-failover sẽ không xảy ra trong ít nhất 1 giờ.</span></li>
<ul><li><span class="lang-en">It may be only a minor outage.</span><span class="lang-vi">Vì đó có thể chỉ là một sự cố nhỏ.</span></li>
<li><span class="lang-en">When it happens, failover itself takes a few seconds.</span><span class="lang-vi">Khi nó xảy ra, bản thân việc failover chỉ mất vài giây.</span></li>
</ul><li><span class="lang-en">Use auto-failover groups when:</span><span class="lang-vi">Use auto-failover groups when:</span></li>
<ul><li><span class="lang-en">It is mission critical,</span><span class="lang-vi">Hệ thống thuộc loại trọng yếu,</span></li>
<li><span class="lang-en">Your SLA does not allow for 12+ hours of downtime</span><span class="lang-vi">SLA của bạn không cho phép downtime từ 12 giờ trở lên</span></li>
<ul><li><span class="lang-en">Geo-restore has a Recovery Time Objective of 12 hours.</span><span class="lang-vi">Geo-restore có Recovery Time Objective là 12 giờ.</span></li>
</ul><li><span class="lang-en">You don’t want to lose up to 1 hour of data (as per Geo-restore).</span><span class="lang-vi">Bạn không muốn mất tới 1 giờ dữ liệu (như trường hợp Geo-restore).</span></li>
<ul><li><span class="lang-en">Auto-failover groups has a Recovery Point Objective (RPO) of 5 seconds.</span><span class="lang-vi">Auto-failover group có Recovery Point Objective (RPO) là 5 giây.</span></li>
</ul><li><span class="lang-en">Geo-replication is more costly than needed for the requirements.</span><span class="lang-vi">Geo-replication đắt hơn mức cần thiết cho yêu cầu của bạn.</span></li>
</ul></ul></section>
<section id="s92"><h3><span class="n">92.</span> <span class="lang-en">configure quorum options for a Windows Server Failover Cluster</span><span class="lang-vi">cấu hình tùy chọn quorum cho Windows Server Failover Cluster</span><a class="anch" href="#s92" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Always On availability groups and Failover Cluster Instances rely on the underlying Windows Server Failover Clustering (WSFC) service.</span><span class="lang-vi">Always On availability group và Failover Cluster Instance đều dựa trên dịch vụ Windows Server Failover Clustering (WSFC) bên dưới.</span></li>
<li><span class="lang-en">It monitors network connections and the health of the nodes (clustered servers)</span><span class="lang-vi">Dịch vụ này giám sát kết nối mạng và sức khỏe của các node (các server trong cluster)</span></li>
<li><span class="lang-en">A two-node cluster will function without a quorum resource, but its use is recommended.</span><span class="lang-vi">Cluster hai node vẫn hoạt động được mà không cần quorum resource, nhưng vẫn nên dùng.</span></li>
<ul><li><span class="lang-en">This then provides an odd number of votes, and a 3 quorum votes minimum.</span><span class="lang-vi">Dùng quorum resource cho ra số phiếu lẻ, và tối thiểu 3 phiếu quorum.</span></li>
</ul><li><span class="lang-en">To configure:</span><span class="lang-vi">Để cấu hình:</span></li>
<ul><li><span class="lang-en">Open Failover Cluster Manager.</span><span class="lang-vi">Mở Failover Cluster Manager.</span></li>
<li><span class="lang-en">Right-hand click the cluster, and go to More Actions – Configure Cluster Quorum Settings.</span><span class="lang-vi">Chuột phải vào cluster và vào More Actions – Configure Cluster Quorum Settings.</span></li>
<li><span class="lang-en">In the wizard, select &quot;Select the quorum witness&quot;.</span><span class="lang-vi">Trong wizard, chọn &quot;Select the quorum witness&quot;.</span></li>
<li><span class="lang-en">Select the type of witness.</span><span class="lang-vi">Select the type of witness.</span></li>
</ul><li><span class="lang-en">There are 3 options:</span><span class="lang-vi">Có 3 lựa chọn:</span></li>
<ul><li><span class="lang-en">Cloud Witness</span><span class="lang-vi">Cloud Witness</span></li>
<ul><li><span class="lang-en">Needs Windows Server 2016+</span><span class="lang-vi">Cần Windows Server 2016 trở lên</span></li>
<li><span class="lang-en">Uses Microsoft Azure to provide a vote on cluster quorum.</span><span class="lang-vi">Dùng Microsoft Azure để bỏ một phiếu vào quorum của cluster.</span></li>
<li><span class="lang-en">Ideal for deployments in multiple sites, zones and/or regions.</span><span class="lang-vi">Lý tưởng cho triển khai trải trên nhiều site, nhiều zone và/hoặc nhiều region.</span></li>
<li><span class="lang-en">Only 1Mb.</span><span class="lang-vi">Chỉ tốn 1 MB.</span></li>
<li><span class="lang-en">Recommended to use whenever possible, unless you have a failover cluster solution with shared storage.</span><span class="lang-vi">Được khuyến nghị dùng bất cứ khi nào có thể, trừ khi bạn có giải pháp failover cluster dùng shared storage.</span></li>
<li><span class="lang-en">Use General Purpose and Standard Storage (Blob storage and Premium storage are not supported).</span><span class="lang-vi">Use General Purpose and Standard Storage (Blob storage and Premium storage are not supported).</span></li>
<li><span class="lang-en">Use &quot;Locally redundant storage&quot; for Replication type.</span><span class="lang-vi">Use &quot;Locally redundant storage&quot; for Replication type.</span></li>
<li><span class="lang-en">Uses port 443 (HTTPS) for communication.</span><span class="lang-vi">Dùng port 443 (HTTPS) để giao tiếp.</span></li>
<li><span class="lang-en">You will need:</span><span class="lang-vi">Bạn sẽ cần:</span></li>
<ul><li><span class="lang-en">The Azure Storage Account Name,</span><span class="lang-vi">Tên Azure Storage Account,</span></li>
<li><span class="lang-en">Primary Access Key corresponding to the Storage Account, and</span><span class="lang-vi">Primary Access Key tương ứng của Storage Account, và</span></li>
<li><span class="lang-en">The endpoint server name, if you are using a different Azure service endpoint, such as Microsoft Azure in China.</span><span class="lang-vi">Tên endpoint server, nếu bạn dùng một Azure service endpoint khác, chẳng hạn Microsoft Azure ở Trung Quốc.</span></li>
</ul><li><span class="lang-en">Once finished, you can see this witness in the Failover Cluster Manager snap-in.</span><span class="lang-vi">Sau khi xong, bạn thấy witness này trong snap-in Failover Cluster Manager.</span></li>
</ul><li><span class="lang-en">Disk Witness.</span><span class="lang-vi">Disk Witness.</span></li>
<ul><li><span class="lang-en">A small clustered disk in the Cluster Available Storage group.</span><span class="lang-vi">Một đĩa cluster nhỏ nằm trong nhóm Cluster Available Storage.</span></li>
<li><span class="lang-en">The disk is highly available (most resilient) and can fail over between nodes.</span><span class="lang-vi">Đĩa này có tính sẵn sàng cao (bền nhất) và failover được giữa các node.</span></li>
<li><span class="lang-en">Less than 1Gb.</span><span class="lang-vi">Nhỏ hơn 1 GB.</span></li>
<li><span class="lang-en">Only can be used with a cluster which uses Azure Shared Disks.</span><span class="lang-vi">Chỉ dùng được với cluster có dùng Azure Shared Disk.</span></li>
<li><span class="lang-en">Cannot be a Cluster Shared Volume.</span><span class="lang-vi">Không thể là Cluster Shared Volume.</span></li>
</ul><li><span class="lang-en">File share witness</span><span class="lang-vi">File share witness</span></li>
<ul><li><span class="lang-en">Configured on a file server running Windows Server.</span><span class="lang-vi">Được cấu hình trên một file server chạy Windows Server.</span></li>
<li><span class="lang-en">A file share on a separate VM in the same Virtual Network.</span><span class="lang-vi">Là một file share trên một VM riêng trong cùng Virtual Network.</span></li>
<li><span class="lang-en">Needs to be separate from the cluster workload, to allow equal opportunity to other clusters.</span><span class="lang-vi">Phải tách khỏi workload của cluster, để các cluster khác cũng có cơ hội dùng như nhau.</span></li>
<li><span class="lang-en">Only use if you can't use the other 2 options.</span><span class="lang-vi">Chỉ dùng khi bạn không dùng được 2 lựa chọn kia.</span></li>
</ul></ul><li><span class="lang-en">In &quot;Advanced quorum configuration&quot;, you have these options:</span><span class="lang-vi">Trong &quot;Advanced quorum configuration&quot;, bạn có các tùy chọn:</span></li>
<ul><li><span class="lang-en">Select Voting Configuration.</span><span class="lang-vi">Select Voting Configuration.</span></li>
<ul><li><span class="lang-en">By default, all nodes have a vote, but you can assign votes to only some nodes.</span><span class="lang-vi">Mặc định mọi node đều có phiếu, nhưng bạn có thể chỉ gán phiếu cho một số node.</span></li>
<li><span class="lang-en">You could also have &quot;No nodes&quot;, which then the same as &quot;No majority (disk witness only)&quot; – see below.</span><span class="lang-vi">Bạn cũng có thể chọn &quot;No nodes&quot;, khi đó nó tương đương &quot;No majority (disk witness only)&quot; — xem bên dưới.</span></li>
</ul></ul><li><span class="lang-en">Your cluster will then be configured in:</span><span class="lang-vi">Cluster của bạn sau đó sẽ được cấu hình theo một trong các dạng:</span></li>
<ul><li><span class="lang-en">Node majority (no witness).</span><span class="lang-vi">Node majority (không có witness).</span></li>
<ul><li><span class="lang-en">The cluster quorum is the majority of voting nodes in the active cluster membership.</span><span class="lang-vi">Quorum của cluster là đa số các node có quyền bỏ phiếu trong thành phần cluster đang hoạt động.</span></li>
</ul><li><span class="lang-en">Node majority with witness (&quot;Node and File Share Majority&quot; or &quot;Node and Disk Majority&quot;)</span><span class="lang-vi">Node majority kèm witness (&quot;Node and File Share Majority&quot; hoặc &quot;Node and Disk Majority&quot;)</span></li>
<ul><li><span class="lang-en">Nodes have a vote, and the witness also has a vote.</span><span class="lang-vi">Các node có phiếu, và witness cũng có một phiếu.</span></li>
</ul><li><span class="lang-en">No majority (disk witness only).</span><span class="lang-vi">No majority (chỉ disk witness).</span></li>
<ul><li><span class="lang-en">Only the disk witness has a vote.</span><span class="lang-vi">Chỉ disk witness có phiếu.</span></li>
<li><span class="lang-en">Not recommended because it is a single point of failure.</span><span class="lang-vi">Không được khuyến nghị vì đây là điểm lỗi đơn (single point of failure).</span></li>
</ul></ul></ul></section>
<section id="s93"><h3><span class="n">93.</span> <span class="lang-en">Configure failover cluster instances on Azure VMs</span><span class="lang-vi">Cấu hình failover cluster instance trên Azure VM</span><a class="anch" href="#s93" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">VM for domain controller</span><span class="lang-vi">VM cho domain controller</span></li>
<li><span class="lang-en">Create new resource – SQLHADR</span><span class="lang-vi">Create new resource – SQLHADR</span></li>
<li><span class="lang-en">Virtual machine name – VMDOMAINCONTROLLER</span><span class="lang-vi">Tên máy ảo — VMDOMAINCONTROLLER</span></li>
<li><span class="lang-en">Image – Windows Server 2019 Datacenter – Gen1</span><span class="lang-vi">Image — Windows Server 2019 Datacenter – Gen1</span></li>
<li><span class="lang-en">Select inbound ports – RDP and HTTP</span><span class="lang-vi">Select inbound ports – RDP and HTTP</span></li>
<li><span class="lang-en">Virtual network – SQLHADR-vnet VM for SQLSERVER1</span><span class="lang-vi">Virtual network — SQLHADR-vnet · VM cho SQLSERVER1</span></li>
<li><span class="lang-en">Virtual machine name: SQLSERVER1</span><span class="lang-vi">Tên máy ảo: SQLSERVER1</span></li>
<li><span class="lang-en">Resource group – SQLHADR</span><span class="lang-vi">Resource group — SQLHADR</span></li>
<li><span class="lang-en">Image – Windows Server 2019 Datacenter</span><span class="lang-vi">Image — Windows Server 2019 Datacenter</span></li>
<li><span class="lang-en">Virtual network – SQLHADR-vnet VM for SQLSERVER2</span><span class="lang-vi">Virtual network — SQLHADR-vnet · VM cho SQLSERVER2</span></li>
<li><span class="lang-en">Virtual machine name: SQLSERVER2</span><span class="lang-vi">Tên máy ảo: SQLSERVER2</span></li>
<li><span class="lang-en">Resource group – SQLHADR</span><span class="lang-vi">Resource group — SQLHADR</span></li>
<li><span class="lang-en">Image – Windows Server 2019 Datacenter</span><span class="lang-vi">Image — Windows Server 2019 Datacenter</span></li>
<li><span class="lang-en">Virtual network – SQLHADR-vnet Connect to VMDOMAINCONTROLLER</span><span class="lang-vi">Virtual network — SQLHADR-vnet · Kết nối tới VMDOMAINCONTROLLER</span></li>
<li><span class="lang-en">Go to VM – VMDOMAINCONTROLLER – Connect</span><span class="lang-vi">Vào VM – VMDOMAINCONTROLLER – Connect</span></li>
<li><span class="lang-en">Enter credentials.</span><span class="lang-vi">Nhập thông tin đăng nhập.</span></li>
<li><span class="lang-en">Do you want your computer to be discoverable by other PCs and devices on this network? Yes</span><span class="lang-vi">Câu hỏi &quot;Do you want your computer to be discoverable by other PCs and devices on this network?&quot; — chọn Yes</span></li>
<li><span class="lang-en">Server Manager – Manage – Add/Remove Roles and Features</span><span class="lang-vi">Server Manager – Manage – Add/Remove Roles and Features</span></li>
<li><span class="lang-en">Server Selection – note IP Address (X.Y.0.4)</span><span class="lang-vi">Server Selection — ghi lại địa chỉ IP (X.Y.0.4)</span></li>
<li><span class="lang-en">Server Roles – Active Directory Domain Services</span><span class="lang-vi">Server Roles – Active Directory Domain Services</span></li>
<li><span class="lang-en">Promote VM as a Domain controller.</span><span class="lang-vi">Thăng cấp VM này thành Domain controller.</span></li>
<li><span class="lang-en">Add a new forest – FILECATS.CO.UK</span><span class="lang-vi">Add a new forest – FILECATS.CO.UK</span></li>
<li><span class="lang-en">Enter the Directory Restore password. Join VM1 to DC</span><span class="lang-vi">Nhập mật khẩu Directory Restore. · Join VM1 vào DC</span></li>
<li><span class="lang-en">Go to SQLSERVER1 (then SQLSERVER2) – Networking – Network Interface hyperlink – DNS servers – Custom – enter the DNS server IP address – X.Y.0.4</span><span class="lang-vi">Vào SQLSERVER1 (rồi SQLSERVER2) – Networking – link Network Interface – DNS servers – Custom — nhập IP của DNS server: X.Y.0.4</span></li>
<li><span class="lang-en">Start SQLSERVER1 and SQLSERVER2.</span><span class="lang-vi">Khởi động SQLSERVER1 và SQLSERVER2.</span></li>
<li><span class="lang-en">Then connect to the computers.</span><span class="lang-vi">Rồi kết nối tới các máy đó.</span></li>
<li><span class="lang-en">Do you want your computer to be discoverable by other PCs and devices on this network? Yes</span><span class="lang-vi">Câu hỏi &quot;Do you want your computer to be discoverable by other PCs and devices on this network?&quot; — chọn Yes</span></li>
<li><span class="lang-en">Change to the domain FILECATS.CO.UK – go to Windows Explorer - My PC Install Windows Failover Cluster Role in SQLSERVER1 and SQLSERVER2</span><span class="lang-vi">Chuyển sang domain FILECATS.CO.UK — vào Windows Explorer – My PC · Cài Windows Failover Cluster Role trên SQLSERVER1 và SQLSERVER2</span></li>
<li><span class="lang-en">In SQLSERVER1 and SQLSERVER2: Server Manager – Manage – Add/Remove Roles and Features</span><span class="lang-vi">Trên SQLSERVER1 và SQLSERVER2: Server Manager – Manage – Add/Remove Roles and Features</span></li>
<li><span class="lang-en">Features – Failover Clustering</span><span class="lang-vi">Features – Failover Clustering</span></li>
<li><span class="lang-en">After reboot, go to All Services, Right click on SQLSERVER1 and select “Failover Cluster Manager”.</span><span class="lang-vi">Sau khi khởi động lại, vào All Services, chuột phải vào SQLSERVER1 và chọn &quot;Failover Cluster Manager&quot;.</span></li>
<li><span class="lang-en">(There are no clusters created).</span><span class="lang-vi">(Chưa có cluster nào được tạo).</span></li>
<li><span class="lang-en">Actions – Create cluster.</span><span class="lang-vi">Actions – Create cluster.</span></li>
<li><span class="lang-en">Add SQLSERVER1 and click Browse and add SQLSERVER2.</span><span class="lang-vi">Add SQLSERVER1 and click Browse and add SQLSERVER2.</span></li>
<li><span class="lang-en">Enter a cluster name: SQLCLUSTERNAME</span><span class="lang-vi">Nhập tên cluster: SQLCLUSTERNAME</span></li>
<li><span class="lang-en">Create the cluster.</span><span class="lang-vi">Create the cluster.</span></li>
<li><span class="lang-en">Close the window. There is a new cluster.</span><span class="lang-vi">Đóng cửa sổ. Đã có một cluster mới.</span></li>
<li><span class="lang-en">You can click on Nodes to see the 2 computers. SQL Server management</span><span class="lang-vi">Bấm vào Nodes để thấy 2 máy. · Quản trị SQL Server</span></li>
<li><span class="lang-en">SQL Server Configuration Manager 2019</span><span class="lang-vi">SQL Server Configuration Manager 2019</span></li>
<li><span class="lang-en">Right-hand click on SQL Server (in SQL Server Services) – go to the “Always On Availability Groups” and check “Always on Availability Group”.</span><span class="lang-vi">Chuột phải vào SQL Server (trong SQL Server Services) — vào &quot;Always On Availability Groups&quot; và tích &quot;Always On Availability Group&quot;.</span></li>
<li><span class="lang-en">Restart SQL Server (in SQL Server Configuration Manager)</span><span class="lang-vi">Khởi động lại SQL Server (trong SQL Server Configuration Manager)</span></li>
<li><span class="lang-en">Go to SQL Server Configuration Manager – SQL Server Network Configuration – Protocols – TCP/IP and Enable.</span><span class="lang-vi">Vào SQL Server Configuration Manager – SQL Server Network Configuration – Protocols – TCP/IP và bấm Enable.</span></li>
<li><span class="lang-en">Restart SQL Server (in SQL Server Configuration Manager)</span><span class="lang-vi">Khởi động lại SQL Server (trong SQL Server Configuration Manager)</span></li>
<li><span class="lang-en">Go to Windows Defender Firewall – New Rule – Port – TCP 1433 (all others as default).</span><span class="lang-vi">Vào Windows Defender Firewall – New Rule – Port – TCP 1433 (các mục khác để mặc định).</span></li>
<li><span class="lang-en">Do the same in SQLSERVER2.</span><span class="lang-vi">Làm tương tự trên SQLSERVER2.</span></li>
<li><span class="lang-en">Can you open SSMS in SQLSERVER1 and connect to SQLSERVER2 database? Create Storage Account for cloud witness</span><span class="lang-vi">Bạn mở SSMS trên SQLSERVER1 và kết nối được tới database của SQLSERVER2 chứ? · Tạo Storage Account làm cloud witness</span></li>
<li><span class="lang-en">Portal – Storage Account</span><span class="lang-vi">Portal – Storage Account</span></li>
<li><span class="lang-en">New</span><span class="lang-vi">New</span></li>
<li><span class="lang-en">Storage account name: sqlstoragewitness.</span><span class="lang-vi">Tên storage account: sqlstoragewitness.</span></li>
<li><span class="lang-en">Select “Local redundancy option”.</span><span class="lang-vi">Select “Local redundancy option”.</span></li>
<li><span class="lang-en">Create review + create.</span><span class="lang-vi">Create review + create.</span></li>
<li><span class="lang-en">Go into the Storage account – Access keys. Configure Witness</span><span class="lang-vi">Vào Storage account – Access keys. · Cấu hình Witness</span></li>
<li><span class="lang-en">Go to Failover Cluster Manager – the actual failover cluster (in my case, SQLCLUSTER.filecats.co.uk)</span><span class="lang-vi">Vào Failover Cluster Manager — chọn chính failover cluster đó (trong ví dụ này là SQLCLUSTER.filecats.co.uk)</span></li>
<li><span class="lang-en">On the right-hand sideMore Actions – Configure Cluster Quorum Settings</span><span class="lang-vi">Ở phía bên phải: More Actions – Configure Cluster Quorum Settings</span></li>
<li><span class="lang-en">Click Next.</span><span class="lang-vi">Bấm Next.</span></li>
<li><span class="lang-en">Click “Select the quorum witness”</span><span class="lang-vi">Bấm &quot;Select the quorum witness&quot;</span></li>
<li><span class="lang-en">Click “Configure a cloud witness”.</span><span class="lang-vi">Bấm &quot;Configure a cloud witness&quot;.</span></li>
<li><span class="lang-en">In the Storage account:</span><span class="lang-vi">Trong Storage account:</span></li>
<li><span class="lang-en">Copy storage account name and storage account key.</span><span class="lang-vi">Sao chép tên storage account và storage account key.</span></li>
<li><span class="lang-en">Click Next x 3.</span><span class="lang-vi">Bấm Next 3 lần.</span></li>
<li><span class="lang-en">The Cloud Witness is now in the “Cluster Core Resources”. Prepare databases for Always On Availability Groups – SQLSERVER1 (97, 107)</span><span class="lang-vi">Cloud Witness giờ đã nằm trong &quot;Cluster Core Resources&quot;. · Chuẩn bị database cho Always On Availability Group – SQLSERVER1 (97, 107)</span></li>
<li><span class="lang-en">Create database with table with demo data.</span><span class="lang-vi">Create database with table with demo data.</span></li>
<li><span class="lang-en">Go to Always On High Availability – right hand-click on Availability Groups – go to “New Availability Group Wizard”.</span><span class="lang-vi">Vào Always On High Availability — chuột phải vào Availability Groups — chọn &quot;New Availability Group Wizard&quot;.</span></li>
<li><span class="lang-en">Next</span><span class="lang-vi">Next</span></li>
<li><span class="lang-en">Enter an availability group name: SQLAVAILABILITYGROUP</span><span class="lang-vi">Nhập tên availability group: SQLAVAILABILITYGROUP</span></li>
<li><span class="lang-en">Leave the cluster type as “Windows Server Failover Cluster”.</span><span class="lang-vi">Giữ nguyên cluster type là &quot;Windows Server Failover Cluster&quot;.</span></li>
<li><span class="lang-en">Click next – find we need a full backup.</span><span class="lang-vi">Bấm next — sẽ thấy báo là cần một bản full backup.</span></li>
<li><span class="lang-en">Create the backup (right-hand click on the database – Tasks – Back Up…)</span><span class="lang-vi">Create the backup (right-hand click on the database – Tasks – Back Up…)</span></li>
<li><span class="lang-en">Redo the “New Availability Group Wizard”.</span><span class="lang-vi">Chạy lại &quot;New Availability Group Wizard&quot;.</span></li>
<li><span class="lang-en">Select the databases.</span><span class="lang-vi">Select the databases.</span></li>
<li><span class="lang-en">Select the replicas… Click “Add Replica” and log into SQLSERVER2.</span><span class="lang-vi">Select the replicas… Click “Add Replica” and log into SQLSERVER2.</span></li>
<li><span class="lang-en">Look at availability mode, automatic failover, and readable secondaries. (Synchronous good if you have close physical distance.)</span><span class="lang-vi">Xem kỹ availability mode, automatic failover và readable secondary. (Synchronous phù hợp khi khoảng cách vật lý gần.)</span></li>
<li><span class="lang-en">Select Initial Data Synchronization – automatic seeding, full database and log backup, join only, or skip.</span><span class="lang-vi">Select Initial Data Synchronization – automatic seeding, full database and log backup, join only, or skip.</span></li>
<li><span class="lang-en">Finish the wizard (It’s OK for the purposes of the DP-300 course if the listener configuration has a warning). Add listener.</span><span class="lang-vi">Kết thúc wizard (với mục đích của khóa DP-300 thì cấu hình listener có cảnh báo cũng không sao). · Thêm listener.</span></li>
<li><span class="lang-en">In SSMS, go to Always On High Availability – Availability Groups – NameOfGroup – right-hand click on Availability Group Listener – Add a Listener.</span><span class="lang-vi">Trong SSMS, vào Always On High Availability – Availability Groups – TênGroup — chuột phải vào Availability Group Listener — chọn Add a Listener.</span></li>
<li><span class="lang-en">Give it a name -SQLAG</span><span class="lang-vi">Đặt tên là SQLAG</span></li>
<li><span class="lang-en">Port – 1433</span><span class="lang-vi">Port — 1433</span></li>
<li><span class="lang-en">Network Mode – Static – click Add.</span><span class="lang-vi">Network Mode — Static — bấm Add.</span></li>
<li><span class="lang-en">Enter an iPv4 Address – X.Y.0.20. Test failover</span><span class="lang-vi">Nhập địa chỉ IPv4 — X.Y.0.20. · Kiểm thử failover</span></li>
<li><span class="lang-en">Go to Always On High Availability – Availability Group – SQLAVAILABILITYGROUP</span><span class="lang-vi">Vào Always On High Availability – Availability Group – SQLAVAILABILITYGROUP</span></li>
<li><span class="lang-en">Check which is Primary and which is Secondary.</span><span class="lang-vi">Kiểm tra xem cái nào đang là Primary và cái nào là Secondary.</span></li>
<li><span class="lang-en">“Start Failover Wizard”.</span><span class="lang-vi">Bấm &quot;Start Failover Wizard&quot;.</span></li>
<li><span class="lang-en">Start in the Primary.</span><span class="lang-vi">Bắt đầu từ Primary.</span></li>
<li><span class="lang-en">Select the new Primary Replica (which is currently a secondary).</span><span class="lang-vi">Select the new Primary Replica (which is currently a secondary).</span></li>
<li><span class="lang-en">Click “Connect to Replica”, and click “Connect” to enter credentials.</span><span class="lang-vi">Bấm &quot;Connect to Replica&quot;, rồi bấm &quot;Connect&quot; để nhập thông tin đăng nhập.</span></li>
<li><span class="lang-en">Finish.</span><span class="lang-vi">Finish.</span></li>
<li><span class="lang-en">Check which is Primary and which is Secondary.</span><span class="lang-vi">Kiểm tra lại xem cái nào đang là Primary và cái nào là Secondary.</span></li>
</ul></section>
<section id="s94"><h3><span class="n">94.</span> <span class="lang-en">configure replication</span><span class="lang-vi">cấu hình replication</span><a class="anch" href="#s94" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">You can use transactional replication to push changes made in an Azure MI to:</span><span class="lang-vi">Bạn có thể dùng transactional replication để đẩy các thay đổi trên Azure MI tới:</span></li>
<ul><li><span class="lang-en">A SQL Server database (on prem or Azure VM),</span><span class="lang-vi">Một database SQL Server (on-prem hoặc Azure VM),</span></li>
<li><span class="lang-en">An Azure SQL Database, or</span><span class="lang-vi">Một Azure SQL Database, hoặc</span></li>
<li><span class="lang-en">An instance database in Azure SQL MI</span><span class="lang-vi">Một instance database trong Azure SQL MI</span></li>
</ul><li><span class="lang-en">Useful for:</span><span class="lang-vi">Hữu ích khi:</span></li>
<ul><li><span class="lang-en">Distributing changes to one or more databases in SQL Server, Azure SQL MI or Azure SQL Database.</span><span class="lang-vi">Phân phối thay đổi tới một hoặc nhiều database trong SQL Server, Azure SQL MI hoặc Azure SQL Database.</span></li>
<li><span class="lang-en">Keep several distributed databases synchronized.</span><span class="lang-vi">Giữ nhiều database phân tán luôn đồng bộ.</span></li>
<li><span class="lang-en">Migrate databases from SQL Server/Azure SQL MI to another database by continuously published the changes.</span><span class="lang-vi">Migrate database từ SQL Server/Azure SQL MI sang database khác bằng cách liên tục publish các thay đổi.</span></li>
</ul><li><span class="lang-en">The components of a transactional replication are:</span><span class="lang-vi">Các thành phần của transactional replication gồm:</span></li>
<ul><li><span class="lang-en">Publisher</span><span class="lang-vi">Publisher</span></li>
<ul><li><span class="lang-en">Publishes changes made on some tables (&quot;articles&quot;), and send the updates to the Distributor.</span><span class="lang-vi">Publish các thay đổi trên một số bảng (gọi là &quot;article&quot;) và gửi cập nhật tới Distributor.</span></li>
<li><span class="lang-en">Can be Azure SQL MI or an SQL Server instance.</span><span class="lang-vi">Có thể là Azure SQL MI hoặc một instance SQL Server.</span></li>
<li><span class="lang-en">Cannot be Azure SQL Database (need to use Data Sync – topic 14 – for this).</span><span class="lang-vi">KHÔNG thể là Azure SQL Database (với nó thì phải dùng Data Sync — mục 14).</span></li>
</ul><li><span class="lang-en">Distributor</span><span class="lang-vi">Distributor</span></li>
<ul><li><span class="lang-en">Collects changes from Publisher and distributes them to Subscribers.</span><span class="lang-vi">Thu thập thay đổi từ Publisher và phân phối tới các Subscriber.</span></li>
<li><span class="lang-en">Can be Azure SQL MI or an SQL Server instance.</span><span class="lang-vi">Có thể là Azure SQL MI hoặc một instance SQL Server.</span></li>
<ul><li><span class="lang-en">Can be the same Azure SQL MI as the Publisher, but a different database.</span><span class="lang-vi">Có thể là chính Azure SQL MI của Publisher, nhưng phải là database khác.</span></li>
</ul><li><span class="lang-en">If SQL Server instance, version needs to be the same or higher than the Publisher version.</span><span class="lang-vi">Nếu là instance SQL Server thì phiên bản phải bằng hoặc cao hơn phiên bản của Publisher.</span></li>
</ul><li><span class="lang-en">Pull subscriber</span><span class="lang-vi">Pull subscriber</span></li>
<ul><li><span class="lang-en">Can be Azure SQL MI or an SQL Server instance, but needs to the same type as the Distributor.</span><span class="lang-vi">Có thể là Azure SQL MI hoặc một instance SQL Server, nhưng phải cùng loại với Distributor.</span></li>
</ul><li><span class="lang-en">Push subscriber.</span><span class="lang-vi">Push subscriber.</span></li>
<ul><li><span class="lang-en">Can be an Azure SQL Database.</span><span class="lang-vi">Có thể là một Azure SQL Database.</span></li>
<ul><li><span class="lang-en">However, it only supports Standard Transactional and Snapshot.</span><span class="lang-vi">Tuy nhiên nó chỉ hỗ trợ Standard Transactional và Snapshot.</span></li>
</ul><li><span class="lang-en">Can be an Azure SQL MI.</span><span class="lang-vi">Có thể là một Azure SQL MI.</span></li>
<ul><li><span class="lang-en">It supports Standard Transactional, Snapshot and Bidirectional.</span><span class="lang-vi">Nó hỗ trợ Standard Transactional, Snapshot và Bidirectional.</span></li>
</ul><li><span class="lang-en">Can be an SQL Server instance.</span><span class="lang-vi">Có thể là một instance SQL Server.</span></li>
<ul><li><span class="lang-en">Needs to be more recent than the Publisher, or no more than 2 versions earlier.</span><span class="lang-vi">Phiên bản phải mới hơn Publisher, hoặc cũ hơn không quá 2 phiên bản.</span></li>
</ul></ul></ul><li><span class="lang-en">Create a Publication:</span><span class="lang-vi">Create a Publication:</span></li>
<ul><li><span class="lang-en">In SSMS, go to the Server – Replication, and right-hand click &quot;Local Publications&quot;.</span><span class="lang-vi">Trong SSMS, vào Server – Replication và chuột phải vào &quot;Local Publications&quot;.</span></li>
<li><span class="lang-en">Click &quot;New Publication&quot;.</span><span class="lang-vi">Bấm &quot;New Publication&quot;.</span></li>
<li><span class="lang-en">Specify a Distributor.</span><span class="lang-vi">Chỉ định một Distributor.</span></li>
<ul><li><span class="lang-en">If you don't, the Publisher will act as its own Distributor.</span><span class="lang-vi">Nếu không chỉ định, Publisher sẽ tự đóng vai trò Distributor của chính nó.</span></li>
<ul><li><span class="lang-en">You will need to specify a default snapshot folder, a directory that agents can read from and write to this folder.</span><span class="lang-vi">Khi đó bạn phải chỉ định một default snapshot folder — thư mục mà các agent đọc và ghi được.</span></li>
</ul><li><span class="lang-en">If you do, you will need to enter the Publisher password.</span><span class="lang-vi">Nếu có chỉ định, bạn phải nhập mật khẩu của Publisher.</span></li>
</ul><li><span class="lang-en">Choose a publication database.</span><span class="lang-vi">Chọn publication database.</span></li>
<li><span class="lang-en">Select a publication type.</span><span class="lang-vi">Select a publication type.</span></li>
<ul><li><span class="lang-en">Transaction replication – changes occur in near real time, applied to the Subscribe in the same order as they occurred on the publisher.</span><span class="lang-vi">Transactional replication — thay đổi diễn ra gần thời gian thực, được áp lên Subscriber theo đúng thứ tự đã xảy ra ở publisher.</span></li>
<ul><li><span class="lang-en">For Azure SQL Database, MI, on-prem VM</span><span class="lang-vi">Dành cho Azure SQL Database, MI, on-prem và VM</span></li>
</ul><li><span class="lang-en">Merge replication – Data can be changed on both the Publisher and Subscriber.</span><span class="lang-vi">Merge replication — dữ liệu có thể được sửa ở cả Publisher lẫn Subscriber.</span></li>
<ul><li><span class="lang-en">When connected to the network, all rows which have changed between Publisher and Subscriber are synchronised. For on-prem, VM and MI</span><span class="lang-vi">Khi có kết nối mạng, mọi dòng đã thay đổi giữa Publisher và Subscriber được đồng bộ. Dành cho on-prem, VM và MI</span></li>
</ul><li><span class="lang-en">Snapshot replication – distributes data at a specific moment of time, and does not monitor for updates to the data.</span><span class="lang-vi">Snapshot replication — phân phối dữ liệu tại một thời điểm cụ thể và không theo dõi các cập nhật sau đó.</span></li>
<ul><li><span class="lang-en">For Azure SQL Database, MI, on-prem VM</span><span class="lang-vi">Dành cho Azure SQL Database, MI, on-prem và VM</span></li>
</ul><li><span class="lang-en">Peer-to-peer – allows for changes in near real-time on multiple server instances.</span><span class="lang-vi">Peer-to-peer — cho phép thay đổi gần thời gian thực trên nhiều instance server.</span></li>
<ul><li><span class="lang-en">For on-prem and VM</span><span class="lang-vi">Dành cho on-prem và VM</span></li>
</ul><li><span class="lang-en">Bidrectional – allows two servers to exchange changes with each other.</span><span class="lang-vi">Bidirectional — cho phép hai server trao đổi thay đổi với nhau.</span></li>
<ul><li><span class="lang-en">For on-prem, VM and MI</span><span class="lang-vi">Dành cho on-prem, VM và MI</span></li>
</ul><li><span class="lang-en">Updatable subscriptions (deprecated) – when data updated at a Subscriber, it is propagated to the Publisher and then to the other Subscribers.</span><span class="lang-vi">Updatable subscription (đã deprecated) — khi dữ liệu được cập nhật ở Subscriber, thay đổi sẽ lan tới Publisher rồi tới các Subscriber khác.</span></li>
</ul><li><span class="lang-en">Select data, database objects and filter columns and rows from table articles to publish.</span><span class="lang-vi">Select data, database objects and filter columns and rows from table articles to publish.</span></li>
<li><span class="lang-en">Set the Snapshot Agent schedule.</span><span class="lang-vi">Set the Snapshot Agent schedule.</span></li>
<li><span class="lang-en">Specify the credentials for:</span><span class="lang-vi">Chỉ định thông tin đăng nhập cho:</span></li>
<ul><li><span class="lang-en">Snapshot Agent for all publications.</span><span class="lang-vi">Snapshot Agent, dùng cho mọi publication.</span></li>
<li><span class="lang-en">Log Reader Agent for all transactional publications.</span><span class="lang-vi">Log Reader Agent, dùng cho mọi transactional publication.</span></li>
<li><span class="lang-en">Queue Reader Agent for transactional publications that allow updating subscriptions.</span><span class="lang-vi">Queue Reader Agent, dùng cho các transactional publication có cho phép updating subscription.</span></li>
</ul><li><span class="lang-en">Optionally, script the publication.</span><span class="lang-vi">Tùy chọn: sinh script cho publication.</span></li>
<li><span class="lang-en">Specify a publication name.</span><span class="lang-vi">Đặt tên cho publication.</span></li>
</ul><li><span class="lang-en">How to create a Push subscription:</span><span class="lang-vi">Cách tạo một Push subscription:</span></li>
<ul><li><span class="lang-en">In SSMS, go to the Server – Replication, and right-hand click &quot;Local Subscriptions&quot;.</span><span class="lang-vi">Trong SSMS, vào Server – Replication và chuột phải vào &quot;Local Subscriptions&quot;.</span></li>
<li><span class="lang-en">Click &quot;New Subscriptions&quot;.</span><span class="lang-vi">Bấm &quot;New Subscriptions&quot;.</span></li>
<li><span class="lang-en">Select Publisher and publication.</span><span class="lang-vi">Select Publisher and publication.</span></li>
<li><span class="lang-en">Select where replication agents will run.</span><span class="lang-vi">Select where replication agents will run.</span></li>
<ul><li><span class="lang-en">Run all agents at the Distributor (push subscriptions) or</span><span class="lang-vi">Chạy mọi agent tại Distributor (push subscription), hoặc</span></li>
<li><span class="lang-en">Merge Agent Location</span><span class="lang-vi">Merge Agent Location</span></li>
</ul><li><span class="lang-en">Select subscribers and subscription databases.</span><span class="lang-vi">Select subscribers and subscription databases.</span></li>
<li><span class="lang-en">Enter the logins and passwords for connections made by replication agents.</span><span class="lang-vi">Nhập login và mật khẩu cho các kết nối mà replication agent thực hiện.</span></li>
<li><span class="lang-en">Select a synchronization schedule and when the Subscriber should be initialized.</span><span class="lang-vi">Select a synchronization schedule and when the Subscriber should be initialized.</span></li>
<li><span class="lang-en">Select additional options for merge or transactional publications.</span><span class="lang-vi">Select additional options for merge or transactional publications.</span></li>
</ul><li><span class="lang-en">You can create readable secondary databases in the same or different region.</span><span class="lang-vi">Bạn có thể tạo database secondary đọc được, ở cùng region hoặc khác region.</span></li>
<ul><li><span class="lang-en">If in the same region, not as good for DR.</span><span class="lang-vi">Nếu đặt cùng region thì không tốt cho mục đích DR.</span></li>
<li><span class="lang-en">This is for Azure SQL Database, not for Azure SQL MI</span><span class="lang-vi">Phần này dành cho Azure SQL Database, không dành cho Azure SQL MI</span></li>
<ul><li><span class="lang-en">Azure SQL Database and Azure SQL MI can both use auto-failover groups.</span><span class="lang-vi">Cả Azure SQL Database lẫn Azure SQL MI đều dùng được auto-failover group.</span></li>
</ul><li><span class="lang-en">Up to 4 secondaries are supported in the same or different regions.</span><span class="lang-vi">Hỗ trợ tối đa 4 secondary, ở cùng region hoặc khác region.</span></li>
<ul><li><span class="lang-en">They can be part of an elastic pool.</span><span class="lang-vi">Chúng có thể nằm trong một elastic pool.</span></li>
</ul><li><span class="lang-en">They can be used for read-only access queries.</span><span class="lang-vi">Chúng dùng được cho các truy vấn read-only.</span></li>
<li><span class="lang-en">It replicates changes by streaming database transaction logs (unlike transactional replication, which replicates changes by executing DML commands, such as INSERT/UPDATE/DELETE).</span><span class="lang-vi">Nó nhân bản thay đổi bằng cách stream transaction log của database (khác với transactional replication — vốn nhân bản bằng cách thực thi các lệnh DML như INSERT/UPDATE/DELETE).</span></li>
<li><span class="lang-en">You can failover to secondary databases.</span><span class="lang-vi">Bạn có thể failover sang các database secondary.</span></li>
</ul><li><span class="lang-en">You can use it for:</span><span class="lang-vi">Bạn dùng nó cho:</span></li>
<ul><li><span class="lang-en">Database migration from one server to another with minimum downtime, and</span><span class="lang-vi">Migrate database từ server này sang server khác với downtime tối thiểu, và</span></li>
<li><span class="lang-en">Creating an extra secondary as a fail back copy during application upgrades.</span><span class="lang-vi">Tạo thêm một secondary làm bản dự phòng để quay lui khi nâng cấp ứng dụng.</span></li>
<li><span class="lang-en">It uses asynchronous replication, so the transactions are committed on the primary before being replicated.</span><span class="lang-vi">Nó dùng nhân bản bất đồng bộ, nên transaction được commit ở primary trước rồi mới nhân bản đi.</span></li>
<li><span class="lang-en">Planned and unplanned failover.</span><span class="lang-vi">Hỗ trợ cả failover có kế hoạch lẫn ngoài kế hoạch.</span></li>
</ul><li><span class="lang-en">To configure geo-replication:</span><span class="lang-vi">Để cấu hình geo-replication:</span></li>
<ul><li><span class="lang-en">Go to the Azure Portal – the database – Data management – Replicas</span><span class="lang-vi">Vào Azure Portal – database – Data management – Replicas</span></li>
</ul></ul></section>
<section id="s94-2"><h3><span class="n">94.</span> <span class="lang-en">Configure log shipping</span><span class="lang-vi">Cấu hình log shipping</span><a class="anch" href="#s94-2" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Log shipping continually backs up your on-prem or SQL Database on an Azure VM onto one (or more) secondary databases, each on a different SQL Server instance.</span><span class="lang-vi">Log shipping liên tục backup database on-prem hoặc SQL Database trên Azure VM của bạn sang một (hoặc nhiều) database secondary, mỗi cái nằm trên một instance SQL Server khác nhau.</span></li>
<ul><li><span class="lang-en">You only have limited read-only access to secondary databases.</span><span class="lang-vi">Bạn chỉ có quyền truy cập read-only hạn chế tới các database secondary.</span></li>
</ul><li><span class="lang-en">The two instances need to communicate with each other.</span><span class="lang-vi">Hai instance phải giao tiếp được với nhau.</span></li>
<ul><li><span class="lang-en">From on premises to SQL Server running in an Azure VM, you need a site-to-Site VPN or ExpressRoute between on prem and the Azure VM.</span><span class="lang-vi">Từ on-premises tới SQL Server chạy trên Azure VM, bạn cần site-to-site VPN hoặc ExpressRoute giữa on-prem và Azure VM.</span></li>
<li><span class="lang-en">From an Azure VM to another Azure VM, being in the same VNet with a domain controller, or a VPN.</span><span class="lang-vi">Từ Azure VM này sang Azure VM khác: cùng VNet với một domain controller, hoặc dùng VPN.</span></li>
</ul><li><span class="lang-en">The process is:</span><span class="lang-vi">Quy trình như sau:</span></li>
<ul><li><span class="lang-en">Primary backs up the transaction log,</span><span class="lang-vi">Primary backup transaction log,</span></li>
<li><span class="lang-en">Transaction log is copied to the secondary(s),</span><span class="lang-vi">Transaction log được copy sang (các) secondary,</span></li>
<li><span class="lang-en">Log backup is restored on secondary(s).</span><span class="lang-vi">Log backup được restore trên (các) secondary.</span></li>
<ul><li><span class="lang-en">You cannot read the secondary(s) when restoring occurs.</span><span class="lang-vi">Bạn không đọc được secondary trong lúc quá trình restore đang diễn ra.</span></li>
</ul></ul><li><span class="lang-en">You can also have a monitor server (optional). It tracks:</span><span class="lang-vi">Bạn cũng có thể có một monitor server (tùy chọn). Nó theo dõi:</span></li>
<ul><li><span class="lang-en">when the transaction log was backed up (primary database),</span><span class="lang-vi">khi nào transaction log được backup (ở database primary),</span></li>
<li><span class="lang-en">when the secondary servers copied and restored the backup files,</span><span class="lang-vi">khi nào các server secondary copy và restore các file backup,</span></li>
<li><span class="lang-en">Any backup failure alerts.</span><span class="lang-vi">mọi cảnh báo về backup thất bại.</span></li>
</ul><li><span class="lang-en">Failover occurs manually (not automatically).</span><span class="lang-vi">Failover diễn ra thủ công (không tự động).</span></li>
<li><span class="lang-en">To create the log shipping:</span><span class="lang-vi">Để thiết lập log shipping:</span></li>
<ul><li><span class="lang-en">Create a network share for the transaction log backups, and a path for where the transaction logs backups should be copied (one per secondary).</span><span class="lang-vi">Create a network share for the transaction log backups, and a path for where the transaction logs backups should be copied (one per secondary).</span></li>
<li><span class="lang-en">On the primary database:</span><span class="lang-vi">Trên database primary:</span></li>
<ul><li><span class="lang-en">Right-hand click on the primary database, and go Properties.</span><span class="lang-vi">Chuột phải vào database primary và vào Properties.</span></li>
<li><span class="lang-en">Go to the &quot;Transaction Log Shipping&quot; page.</span><span class="lang-vi">Vào trang &quot;Transaction Log Shipping&quot;.</span></li>
<li><span class="lang-en">Click on &quot;Enable this as a primary database in a log shipping configuration&quot;.</span><span class="lang-vi">Bấm &quot;Enable this as a primary database in a log shipping configuration&quot;.</span></li>
<li><span class="lang-en">Click on &quot;Backup Settings&quot;</span><span class="lang-vi">Bấm &quot;Backup Settings&quot;</span></li>
<ul><li><span class="lang-en">Enter a &quot;Network path to the [transaction log] backup folder&quot;.</span><span class="lang-vi">Nhập &quot;Network path to the [transaction log] backup folder&quot;.</span></li>
<ul><li><span class="lang-en">Or you could enter a local path.</span><span class="lang-vi">Hoặc bạn có thể nhập một đường dẫn cục bộ.</span></li>
</ul><li><span class="lang-en">Change, if necessary, the &quot;Delete files older than and &quot;Alert if no backup occurs within&quot; values.</span><span class="lang-vi">Nếu cần, đổi các giá trị &quot;Delete files older than&quot; và &quot;Alert if no backup occurs within&quot;.</span></li>
<li><span class="lang-en">Change the Schedule, if necessary, in Backup job – Schedule.</span><span class="lang-vi">Nếu cần, đổi lịch ở mục Backup job – Schedule.</span></li>
<li><span class="lang-en">Choose the backup compression:</span><span class="lang-vi">Chọn kiểu nén backup:</span></li>
<ul><li><span class="lang-en">Use the default server setting, Compress backup, or Do not compress backup</span><span class="lang-vi">Use the default server setting, Compress backup, or Do not compress backup</span></li>
</ul></ul><li><span class="lang-en">Click OK.</span><span class="lang-vi">Bấm OK.</span></li>
</ul></ul><li><span class="lang-en">To create the log shipping:</span><span class="lang-vi">Để thiết lập log shipping:</span></li>
<ul><li><span class="lang-en">Go to&quot;Secondary server instances and databases&quot; – Add.</span><span class="lang-vi">Vào &quot;Secondary server instances and databases&quot; – Add.</span></li>
<ul><li><span class="lang-en">Click Connect, connect to a secondary server.</span><span class="lang-vi">Bấm Connect và kết nối tới một server secondary.</span></li>
<li><span class="lang-en">Choose a &quot;Secondary Database&quot; or type the name of a new database.</span><span class="lang-vi">Chọn một &quot;Secondary Database&quot; hoặc gõ tên một database mới.</span></li>
<li><span class="lang-en">Select how you want to &quot;Initialize Secondary database&quot;.</span><span class="lang-vi">Select how you want to &quot;Initialize Secondary database&quot;.</span></li>
<li><span class="lang-en">Enter the transaction log backup copy path.</span><span class="lang-vi">Nhập đường dẫn nơi copy transaction log backup tới.</span></li>
<li><span class="lang-en">For &quot;Database state when restoring backups&quot;, select:</span><span class="lang-vi">Ở mục &quot;Database state when restoring backups&quot;, chọn:</span></li>
<ul><li><span class="lang-en">&quot;No recovery mode&quot; , or</span><span class="lang-vi">&quot;No recovery mode&quot;, hoặc</span></li>
<li><span class="lang-en">&quot;Standby mode&quot; – not available if the secondary server major version is greater than the primary.</span><span class="lang-vi">&quot;Standby mode&quot; — không khả dụng nếu major version của server secondary cao hơn primary.</span></li>
<ul><li><span class="lang-en">If &quot;standby mode&quot;, select whether users should be disconnected from the secondary while restoring.</span><span class="lang-vi">Nếu chọn &quot;standby mode&quot;, hãy chọn xem có ngắt kết nối người dùng khỏi secondary trong lúc restore hay không.</span></li>
</ul></ul><li><span class="lang-en">If necessary, choose a &quot;Delay restoring backups at least X minutes&quot;.</span><span class="lang-vi">Nếu cần, chọn &quot;Delay restoring backups at least X minutes&quot;.</span></li>
<ul><li><span class="lang-en">Useful if someone deletes a row on the primary, and you want time to check the version on the secondary.</span><span class="lang-vi">Hữu ích khi ai đó xóa nhầm một dòng ở primary và bạn cần thời gian để kiểm tra phiên bản trên secondary.</span></li>
</ul><li><span class="lang-en">Choose &quot;Alert if no restore occurs within X minutes&quot;.</span><span class="lang-vi">Chọn &quot;Alert if no restore occurs within X minutes&quot;.</span></li>
<li><span class="lang-en">Change the Schedule, if necessary, in Restore job – Schedule.</span><span class="lang-vi">Nếu cần, đổi lịch ở mục Restore job – Schedule.</span></li>
<li><span class="lang-en">Click OK.</span><span class="lang-vi">Bấm OK.</span></li>
</ul><li><span class="lang-en">If required, add settings for the &quot;Use a monitor server instance&quot;.</span><span class="lang-vi">Nếu cần, thêm thiết lập cho &quot;Use a monitor server instance&quot;.</span></li>
<ul><li><span class="lang-en">Choose the SQL Instance.</span><span class="lang-vi">Chọn SQL Instance.</span></li>
<li><span class="lang-en">Choose the &quot;Monitor connections&quot; method.</span><span class="lang-vi">Chọn phương thức &quot;Monitor connections&quot;.</span></li>
<li><span class="lang-en">Select the &quot;History retention&quot; time.</span><span class="lang-vi">Select the &quot;History retention&quot; time.</span></li>
</ul></ul><li><span class="lang-en">In T-SQL, the procedure is:</span><span class="lang-vi">Bằng T-SQL, quy trình như sau:</span></li>
<ul><li><span class="lang-en">On secondary, restore a full backup of the primary.</span><span class="lang-vi">Trên secondary, restore một bản full backup của primary.</span></li>
<li><span class="lang-en">On primary:</span><span class="lang-vi">Trên primary:</span></li>
<ul><li><span class="lang-en">run the stored procedures:</span><span class="lang-vi">chạy các stored procedure:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">sp_add_log_shipping_primary_database
sp_add_jobschedule
sp_add_log_shipping_alert_job
sp_add_log_shipping_primary_secondary.</span><span class="lang-vi">sp_add_log_shipping_primary_database
sp_add_jobschedule
sp_add_log_shipping_alert_job
sp_add_log_shipping_primary_secondary.</span></pre></li>
</ul><li><span class="lang-en">enable the backup job.</span><span class="lang-vi">bật backup job.</span></li>
</ul><li><span class="lang-en">On secondary, run the stored procedures:</span><span class="lang-vi">Trên secondary, chạy các stored procedure:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">sp_add_log_shipping_secondary_primary
sp_add_jobschedule and sp_attach_schedule
sp_add_log_shipping_secondary_database</span><span class="lang-vi">sp_add_log_shipping_secondary_primary
sp_add_jobschedule and sp_attach_schedule
sp_add_log_shipping_secondary_database</span></pre></li>
</ul><li><span class="lang-en">Then enable the jobs.</span><span class="lang-vi">Rồi bật các job.</span></li>
<ul><li><code><span class="lang-en">sp_update_job</span><span class="lang-vi">sp_update_job</span></code></li>
</ul></ul></ul></section>
<h2 class="dom" id="retired">Không còn nằm trong đề DP-300</h2>
<section id="s-125"><h3><span class="n"></span> <span class="lang-en">evaluate requirements for the upgrade</span><span class="lang-vi">đánh giá yêu cầu cho việc nâng cấp</span><a class="anch" href="#s-125" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">You can upgrade to SQL Server 2016 or 2017 from SQL Server 2008+.</span><span class="lang-vi">Bạn nâng cấp lên SQL Server 2016 hoặc 2017 được từ SQL Server 2008 trở lên.</span></li>
<li><span class="lang-en">You can upgrade to SQL Server 2019 from SQL Server 2012+.</span><span class="lang-vi">Bạn nâng cấp lên SQL Server 2019 được từ SQL Server 2012 trở lên.</span></li>
<ul><li><span class="lang-en">If using an earlier version, databases can be migrated.</span><span class="lang-vi">Nếu đang dùng phiên bản cũ hơn thì có thể migrate database sang.</span></li>
</ul><li><span class="lang-en">You can also upgrade to a higher version of the same year.</span><span class="lang-vi">Bạn cũng nâng cấp lên bản cao hơn trong cùng năm được.</span></li>
<li><span class="lang-en">You can also upgrade to a higher version except from Enterprise (the highest):</span><span class="lang-vi">Bạn cũng nâng cấp lên edition cao hơn được, trừ khi đang ở Enterprise (edition cao nhất):</span></li>
<ul><li><span class="lang-en">SQL Server 2012+ Business Intelligence can upgrade to Enterprise.</span><span class="lang-vi">SQL Server 2012 trở lên bản Business Intelligence nâng cấp lên Enterprise được.</span></li>
<li><span class="lang-en">Standard (or in older versions, Workgroup or Small Business) can upgrade to Standard or Enterprise.</span><span class="lang-vi">Standard (hoặc ở phiên bản cũ là Workgroup, Small Business) nâng cấp lên Standard hoặc Enterprise được.</span></li>
<li><span class="lang-en">Web can upgrade to Web, Standard or Enterprise.</span><span class="lang-vi">Web nâng cấp lên Web, Standard hoặc Enterprise được.</span></li>
<li><span class="lang-en">Developer can upgrade to Developer, or SQL Server 2019 (only) Web, Standard or Enterprise.</span><span class="lang-vi">Developer nâng cấp lên Developer được, hoặc lên Web, Standard, Enterprise (chỉ với SQL Server 2019).</span></li>
<li><span class="lang-en">Express can upgrade to Express, Web, Standard or Enterprise.</span><span class="lang-vi">Express nâng cấp lên Express, Web, Standard hoặc Enterprise được.</span></li>
<li><span class="lang-en">Evaluation can upgrade to Evaluation, Express, Web, Standard or Enterprise.</span><span class="lang-vi">Evaluation nâng cấp lên Evaluation, Express, Web, Standard hoặc Enterprise được.</span></li>
</ul><li><span class="lang-en">If an application requires a previous version, you can use that version’s compatibility level.</span><span class="lang-vi">Nếu ứng dụng đòi hỏi một phiên bản cũ, bạn có thể dùng compatibility level của phiên bản đó.</span></li>
<ul><li><span class="lang-en">For example, SQL Server 2016 is compatibility level 130.</span><span class="lang-vi">Ví dụ, SQL Server 2016 tương ứng compatibility level 130.</span></li>
</ul></ul></section>
<section id="s-126"><h3><span class="n"></span> <span class="lang-en">evaluate offline or online upgrade strategies</span><span class="lang-vi">đánh giá chiến lược nâng cấp offline hay online</span><a class="anch" href="#s-126" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Offline</span><span class="lang-vi">Offline</span></li>
<ul><li><span class="lang-en">You can upgrade SQL Server.</span><span class="lang-vi">Bạn nâng cấp trực tiếp SQL Server.</span></li>
<li><span class="lang-en">However, you cannot do an offline upgrade a 32-bit instance to a 64-bit instance.</span><span class="lang-vi">Tuy nhiên bạn KHÔNG thể nâng cấp offline từ instance 32-bit lên 64-bit.</span></li>
<li><span class="lang-en">You cannot add new features during the upgrade (but you can do it afterwards).</span><span class="lang-vi">Bạn không thêm được tính năng mới trong lúc nâng cấp (nhưng thêm được sau đó).</span></li>
</ul><li><span class="lang-en">Online</span><span class="lang-vi">Online</span></li>
<ul><li><span class="lang-en">You need to do a side-by-side installation, and then decommission the previous SQL Server.</span><span class="lang-vi">Bạn phải cài song song (side-by-side), rồi ngừng sử dụng SQL Server cũ.</span></li>
<li><span class="lang-en">You can choose what features to use, and you can install a 64-bit instance, even if your previous version is 32-bit.</span><span class="lang-vi">Bạn chọn được các tính năng muốn dùng, và cài được instance 64-bit ngay cả khi phiên bản cũ là 32-bit.</span></li>
</ul></ul></section>
<section id="s-127"><h3><span class="n"></span> <span class="lang-en">implement an online upgrade strategy</span><span class="lang-vi">triển khai chiến lược nâng cấp online</span><a class="anch" href="#s-127" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Side-by-side upgrade.</span><span class="lang-vi">Nâng cấp side-by-side.</span></li>
<ul><li><span class="lang-en">Verify that the hardware and software you intend to use is supported.</span><span class="lang-vi">Xác nhận phần cứng và phần mềm bạn định dùng đều được hỗ trợ.</span></li>
<li><span class="lang-en">Backup databases, and check they can be restored.</span><span class="lang-vi">Backup databases, and check they can be restored.</span></li>
<li><span class="lang-en">Identify reports to be used to check that upgrade has been a success.</span><span class="lang-vi">Xác định các báo cáo sẽ dùng để kiểm tra việc nâng cấp có thành công không.</span></li>
<li><span class="lang-en">Install new instance of SQL Server.</span><span class="lang-vi">Cài một instance SQL Server mới.</span></li>
<ul><li><span class="lang-en">If using Analysis Services, make sure you install the correct server mode – tabular or multidimensional.</span><span class="lang-vi">Nếu dùng Analysis Services, nhớ cài đúng server mode — tabular hay multidimensional.</span></li>
</ul><li><span class="lang-en">Attach/restore each database.</span><span class="lang-vi">Attach hoặc restore từng database.</span></li>
<li><span class="lang-en">Run DBCC to check for database integrity.</span><span class="lang-vi">Chạy DBCC để kiểm tra tính toàn vẹn của database.</span></li>
<li><span class="lang-en">Test upgrade has been a success using relevant reports.</span><span class="lang-vi">Kiểm tra việc nâng cấp đã thành công chưa bằng các báo cáo tương ứng.</span></li>
<li><span class="lang-en">Backup and restore.</span><span class="lang-vi">Backup and restore.</span></li>
</ul><li><span class="lang-en">Databases run with the previous compatibility level setting.</span><span class="lang-vi">Database chạy với thiết lập compatibility level cũ.</span></li>
</ul></section>
<section id="s-128"><h3><span class="n"></span> <span class="lang-en">implement an offline upgrade strategy</span><span class="lang-vi">triển khai chiến lược nâng cấp offline</span><a class="anch" href="#s-128" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Upgrade strategy:</span><span class="lang-vi">Chiến lược nâng cấp:</span></li>
<ul><li><span class="lang-en">Go to SQL Server Installation Media – Maintenance – Edition Upgrade.</span><span class="lang-vi">Vào SQL Server Installation Media – Maintenance – Edition Upgrade.</span></li>
<li><span class="lang-en">Enter Product Key (if applicable) and accept license terms.</span><span class="lang-vi">Nhập Product Key (nếu có) và chấp nhận điều khoản license.</span></li>
<li><span class="lang-en">Select the SQL Server instance to upgrade.</span><span class="lang-vi">Select the SQL Server instance to upgrade.</span></li>
<li><span class="lang-en">On the screen ”Read to Upgrade Edition”, click Upgrade and Close.</span><span class="lang-vi">Ở màn hình &quot;Ready to Upgrade Edition&quot;, bấm Upgrade rồi Close.</span></li>
<li><span class="lang-en">Reboot if necessary.</span><span class="lang-vi">Khởi động lại nếu cần.</span></li>
</ul><li><span class="lang-en">There may be additional steps if upgrading from SQL Server Express.</span><span class="lang-vi">Có thể cần thêm vài bước nữa nếu nâng cấp từ SQL Server Express.</span></li>
</ul></section>
<section id="s-129"><h3><span class="n"></span> <span class="lang-en">manage storage capacity</span><span class="lang-vi">quản lý dung lượng lưu trữ</span><a class="anch" href="#s-129" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">This applies to Azure SQL Database, not Azure SQL Managed Instance.</span><span class="lang-vi">Áp dụng cho Azure SQL Database, không áp dụng cho Azure SQL Managed Instance.</span></li>
<li><span class="lang-en">You may need:</span><span class="lang-vi">Bạn có thể cần:</span></li>
<ul><li><span class="lang-en">Add more space or decrease the maximum capacity to a database elastic pool.</span><span class="lang-vi">Add more space or decrease the maximum capacity to a database elastic pool.</span></li>
<li><span class="lang-en">Change to a different service tier.</span><span class="lang-vi">Chuyển sang một service tier khác.</span></li>
</ul><li><span class="lang-en">Terminology:</span><span class="lang-vi">Thuật ngữ:</span></li>
<ul><li><span class="lang-en">Data space used</span><span class="lang-vi">Data space used</span></li>
<ul><li><span class="lang-en">Generally increases with inserts and decreases with deletes, but dependent on fragmentation.</span><span class="lang-vi">Thường tăng khi insert và giảm khi delete, nhưng còn phụ thuộc mức phân mảnh.</span></li>
</ul><li><span class="lang-en">Data space allocated</span><span class="lang-vi">Data space allocated</span></li>
<ul><li><span class="lang-en">Can grow automatically, but does not automatically decrease after deletes.</span><span class="lang-vi">Có thể tự tăng, nhưng KHÔNG tự giảm sau khi xóa dữ liệu.</span></li>
</ul><li><span class="lang-en">Data space allocated but unused</span><span class="lang-vi">Data space allocated but unused</span></li>
<ul><li><span class="lang-en">Can be reclaimed when data files are shrinked.</span><span class="lang-vi">Có thể thu hồi lại khi shrink các data file.</span></li>
</ul><li><span class="lang-en">Data maximum size.</span><span class="lang-vi">Data maximum size.</span></li>
<ul><li><span class="lang-en">The maximum that &quot;Data space allocated&quot; can be.</span><span class="lang-vi">Là mức tối đa mà &quot;Data space allocated&quot; có thể đạt tới.</span></li>
</ul></ul><li><span class="lang-en">This applies to Azure SQL Database, not Azure SQL Managed Instance.</span><span class="lang-vi">Áp dụng cho Azure SQL Database, không áp dụng cho Azure SQL Managed Instance.</span></li>
<ul><li><span class="lang-en">Display the allocated space:</span><span class="lang-vi">Hiển thị dung lượng đã cấp phát:</span></li>
<ul><li><span class="lang-en">[Single database – In the master database]</span><span class="lang-vi">[Single database — chạy trong database master]</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT database_name, allocated_storage_in_megabytes FROM sys.resource_stats</span><span class="lang-vi">SELECT database_name, allocated_storage_in_megabytes FROM sys.resource_stats</span></pre></li>
</ul><li><span class="lang-en">[Elastic pool – In the master database]</span><span class="lang-vi">[Elastic pool — chạy trong database master]</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT elastic_pool_name, elastic_pool_storage_limit_mb, avg_allocated_storage_percent FROM sys.elastic_pool_resource_stats</span><span class="lang-vi">SELECT elastic_pool_name, elastic_pool_storage_limit_mb, avg_allocated_storage_percent FROM sys.elastic_pool_resource_stats</span></pre></li>
</ul></ul><li><span class="lang-en">Display maximum size:</span><span class="lang-vi">Hiển thị dung lượng tối đa:</span></li>
<ul><li><span class="lang-en">[Go to the relevant database. If using Master, results be NULL]</span><span class="lang-vi">[Vào database tương ứng. Nếu chạy ở Master thì kết quả sẽ là NULL]</span></li>
<li class="cb"><pre class="code"><span class="lang-en">SELECT DATABASEPROPERTYEX('DatabaseName', 'MaxSizeInBytes')</span><span class="lang-vi">SELECT DATABASEPROPERTYEX('DatabaseName', 'MaxSizeInBytes')</span></pre></li>
</ul><li><span class="lang-en">To shrink a transaction log file</span><span class="lang-vi">Để shrink một file transaction log</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT file_id, size FROM sys.database_files WHERE type = 1 -- &quot;1&quot; = Log file. Size is in 8 Kb pages.
DBCC SHRINKFILE (2); --Where &quot;2&quot; is the file_id.</span><span class="lang-vi">SELECT file_id, size FROM sys.database_files WHERE type = 1 -- &quot;1&quot; = Log file. Size is in 8 Kb pages.
DBCC SHRINKFILE (2); --Where &quot;2&quot; is the file_id.</span></pre></li>
<li><span class="lang-en">Will impact database performance when running; should be done when less used.</span><span class="lang-vi">Sẽ ảnh hưởng hiệu năng database khi đang chạy; nên làm vào lúc ít người dùng.</span></li>
<li><span class="lang-en">DBCC SHRINKDATABASE(MyDatabase) will shrink all the data and log files in the MyDatabase database. (Note the lack of quote marks.)</span><span class="lang-vi">DBCC SHRINKDATABASE(MyDatabase) will shrink all the data and log files in the MyDatabase database. (Note the lack of quote marks.)</span></li>
</ul></ul></ul></section>
<section id="s-130"><h3><span class="n"></span> <span class="lang-en">assess growth/fragmentation of databases and logs</span><span class="lang-vi">đánh giá mức tăng trưởng/phân mảnh của database và log</span><a class="anch" href="#s-130" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">You can assess the growth in a database by using the following. It shows the growth over a time period:</span><span class="lang-vi">Bạn đánh giá mức tăng trưởng của database bằng cách sau. Nó cho thấy mức tăng trong một khoảng thời gian:</span></li>
<ul><li><span class="lang-en">For a database</span><span class="lang-vi">Với một database</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT database_name, start_time, storage_in_megabytes
FROM sys.resource_stats
ORDER BY database_name, start_time</span><span class="lang-vi">SELECT database_name, start_time, storage_in_megabytes
FROM sys.resource_stats
ORDER BY database_name, start_time</span></pre></li>
<li><span class="lang-en">Historical data is aggregated every 5 minutes and is retained for approximately 14 days.</span><span class="lang-vi">Dữ liệu lịch sử được tổng hợp mỗi 5 phút và giữ khoảng 14 ngày.</span></li>
</ul><li><span class="lang-en">For an elastic pool</span><span class="lang-vi">Với một elastic pool</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT start_time, elastic_pool_name, elastic_pool_storage_limit_mb, avg_allocated_storage_percent FROM master.sys.elastic_pool_resource_stats
ORDER BY start_time</span><span class="lang-vi">SELECT start_time, elastic_pool_name, elastic_pool_storage_limit_mb, avg_allocated_storage_percent FROM master.sys.elastic_pool_resource_stats
ORDER BY start_time</span></pre></li>
</ul><li><span class="lang-en">To view the current log size:</span><span class="lang-vi">Để xem kích thước log hiện tại:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT file_id, type_desc, size, max_size, growth
FROM sys.database_files
WHERE type = 1</span><span class="lang-vi">SELECT file_id, type_desc, size, max_size, growth
FROM sys.database_files
WHERE type = 1</span></pre></li>
</ul></ul><li><span class="lang-en">Fragmented indexes can:</span><span class="lang-vi">Index bị phân mảnh có thể:</span></li>
<ul><li><span class="lang-en">Degrade query performance, because</span><span class="lang-vi">Làm giảm hiệu năng query, vì</span></li>
<li><span class="lang-en">more I/O requests (with smaller data in each) are required.</span><span class="lang-vi">cần nhiều I/O request hơn (mà mỗi request lại mang ít dữ liệu hơn).</span></li>
<li><span class="lang-en">Each page can be fragmented between 0% and 100%.</span><span class="lang-vi">Mỗi page có thể phân mảnh từ 0% tới 100%.</span></li>
</ul><li><span class="lang-en">To assess fragmentation of database indexes:</span><span class="lang-vi">Để đánh giá mức phân mảnh của các index trong database:</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT db_name(database_id) as DBName, object_name(object_id) as ObjectName, avg_fragmentation_in_percent, page_count, *
FROM sys.dm_db_index_physical_stats(NULL,NULL,NULL,NULL,NULL)
--The arguments are: database_id (use db_id to look it up), object_id (use object_id to look it up), index_id, partition_number and mode (the scan level).
order by avg_fragmentation_in_percent * page_count desc</span><span class="lang-vi">SELECT db_name(database_id) as DBName, object_name(object_id) as ObjectName, avg_fragmentation_in_percent, page_count, *
FROM sys.dm_db_index_physical_stats(NULL,NULL,NULL,NULL,NULL)
--Các đối số là: database_id (dùng db_id để tra), object_id (dùng object_id để tra), index_id, partition_number và mode (mức độ quét).
order by avg_fragmentation_in_percent * page_count desc</span></pre></li>
<li><span class="lang-en">You can also check it by right-hand clicking on the index in SSMS, going to Properties – Fragmentation.</span><span class="lang-vi">Bạn cũng kiểm tra được bằng cách chuột phải vào index trong SSMS, vào Properties – Fragmentation.</span></li>
</ul><li><span class="lang-en">You can also use:</span><span class="lang-vi">Bạn cũng có thể dùng:</span></li>
<ul><li><code><span class="lang-en">DBCC SHOWCONTIG</span><span class="lang-vi">DBCC SHOWCONTIG</span></code></li>
<li><span class="lang-en">However, this has been deprecated.</span><span class="lang-vi">Tuy nhiên cách này đã bị deprecate.</span></li>
</ul><li><span class="lang-en">To assess columnstore indexes, look at</span><span class="lang-vi">Để đánh giá columnstore index, hãy xem</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">SELECT deleted_rows, total_rows FROM sys.dm_db_colum_store_row_group_physical_stats</span><span class="lang-vi">SELECT deleted_rows, total_rows FROM sys.dm_db_colum_store_row_group_physical_stats</span></pre></li>
<ul><li><span class="lang-en">Where more than &gt;20% of rows have been deleted (due to DELETE or UPDATE), reorganize. This removes rows marked as deleted.</span><span class="lang-vi">Khi hơn 20% số dòng đã bị xóa (do DELETE hoặc UPDATE) thì nên reorganize. Thao tác này loại bỏ các dòng đã được đánh dấu xóa.</span></li>
</ul></ul><li><span class="lang-en">Indexes can be reorganized or rebuilt</span><span class="lang-vi">Index có thể được reorganize hoặc rebuild</span></li>
<li><code><span class="lang-en">ALTER INDEX [IndexName or ALL] ON Schema.Table …</span><span class="lang-vi">ALTER INDEX [IndexName or ALL] ON Schema.Table …</span></code></li>
<ul><li><span class="lang-en">REORGANIZE</span><span class="lang-vi">REORGANIZE</span></li>
<ul><li><span class="lang-en">REORGANIZE is always ONLINE.</span><span class="lang-vi">REORGANIZE luôn chạy ONLINE.</span></li>
</ul><li><span class="lang-en">REBUILD</span><span class="lang-vi">REBUILD</span></li>
<ul><li><span class="lang-en">[WITH ONLINE = ON]</span><span class="lang-vi">[WITH ONLINE = ON]</span></li>
<ul><li><span class="lang-en">An offline rebuild is generally quicker, but locks the index during this time.</span><span class="lang-vi">Rebuild offline thường nhanh hơn, nhưng khóa index trong suốt quá trình.</span></li>
<li><span class="lang-en">Online rebuilds only require a lock right at the end.</span><span class="lang-vi">Rebuild online chỉ cần khóa ở ngay đoạn cuối.</span></li>
</ul><li><span class="lang-en">[WITH (FILLFACTOR = 70)] -- FILLFACTOR leaves free space for inserted/updated rows.</span><span class="lang-vi">[WITH (FILLFACTOR = 70)] -- FILLFACTOR chừa chỗ trống cho các dòng được insert/update sau này.</span></li>
<li><span class="lang-en">[MAX_DURATION = 30 RESUMABLE = ON]-- it pauses after 30 minutes – cannot be used with &quot;ALL&quot;. Used in SQL Server 2017+ or Azure SQL Database.</span><span class="lang-vi">[MAX_DURATION = 30 RESUMABLE = ON] -- nó tạm dừng sau 30 phút — không dùng được cùng &quot;ALL&quot;. Có ở SQL Server 2017 trở lên hoặc Azure SQL Database.</span></li>
</ul><li><span class="lang-en">PAUSE / ABORT / RESUME – pauses/stops/restarts an ONLINE REORGANIZE or REBUILD. Used in SQL Server 2017+ or Azure SQL Database.</span><span class="lang-vi">PAUSE / ABORT / RESUME — tạm dừng/hủy/chạy tiếp một thao tác ONLINE REORGANIZE hoặc REBUILD. Có ở SQL Server 2017 trở lên hoặc Azure SQL Database.</span></li>
</ul><li><span class="lang-en">Generally, REORGANIZE if &gt;10% and &lt;30%, and REBUILD is &gt;30% - but this is a guide only.</span><span class="lang-vi">Nhìn chung: REORGANIZE khi phân mảnh trên 10% và dưới 30%, REBUILD khi trên 30% — nhưng đây chỉ là hướng dẫn tham khảo.</span></li>
</ul></section>
<section id="s-131"><h3><span class="n"></span> <span class="lang-en">assess performance-related database configuration parameters</span><span class="lang-vi">đánh giá các tham số cấu hình database liên quan hiệu năng</span><a class="anch" href="#s-131" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Auto Create Statistics</span><span class="lang-vi">Auto Create Statistics</span></li>
<ul><li><span class="lang-en">The database generates information about the contents of each column. Can be useful for deciding whether to use a scan or seek.</span><span class="lang-vi">Database sinh ra thông tin về nội dung của từng cột. Hữu ích khi quyết định nên dùng scan hay seek.</span></li>
</ul><li><span class="lang-en">Auto Shrink</span><span class="lang-vi">Auto Shrink</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER DATABASE CURRENT SET AUTO_SHRINK ON; -- will enable auto-shrink.</span><span class="lang-vi">ALTER DATABASE CURRENT SET AUTO_SHRINK ON; -- will enable auto-shrink.</span></pre></li>
<li><span class="lang-en">Not recommended, as while it is less impactful to database performance, it is less effective.</span><span class="lang-vi">Không được khuyến nghị, vì tuy ít ảnh hưởng tới hiệu năng database hơn nhưng lại kém hiệu quả.</span></li>
<li><span class="lang-en">Also, what happens when it needs to grow again?</span><span class="lang-vi">Hơn nữa, chuyện gì xảy ra khi database cần phình to trở lại?</span></li>
</ul><li><span class="lang-en">See also topic 55.</span><span class="lang-vi">Xem thêm mục 55.</span></li>
</ul></section>
<section id="s-132"><h3><span class="n"></span> <span class="lang-en">identify data quality issues with duplication of data</span><span class="lang-vi">phát hiện vấn đề chất lượng dữ liệu do trùng lặp</span><a class="anch" href="#s-132" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Minimize duplication of data</span><span class="lang-vi">Giảm thiểu trùng lặp dữ liệu</span></li>
<li><span class="lang-en">Reduce data modification issues</span><span class="lang-vi">Giảm các vấn đề khi sửa đổi dữ liệu</span></li>
<li><span class="lang-en">Simplify queries</span><span class="lang-vi">Đơn giản hóa query</span></li>
</ul></section>
<section id="s-133"><h3><span class="n"></span> <span class="lang-en">identify normal form of database tables</span><span class="lang-vi">xác định dạng chuẩn hóa của bảng trong database</span><a class="anch" href="#s-133" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">1st Normal Form (1NF)</span><span class="lang-vi">Dạng chuẩn 1 (1NF)</span></li>
<ul><li><span class="lang-en">Requirements</span><span class="lang-vi">Yêu cầu</span></li>
<ul><li><span class="lang-en">The Values in each column must be atomic (indivisible),</span><span class="lang-vi">Giá trị trong mỗi cột phải là nguyên tử (không chia nhỏ được nữa),</span></li>
<li><span class="lang-en">Each value contains only a single value.</span><span class="lang-vi">Mỗi ô chỉ chứa một giá trị duy nhất.</span></li>
</ul><li><span class="lang-en">Actions</span><span class="lang-vi">Hành động</span></li>
<ul><li><span class="lang-en">Eliminate repeating groups in individual tables</span><span class="lang-vi">Loại bỏ các nhóm lặp lại trong từng bảng</span></li>
<li><span class="lang-en">Create a separate table for each set of related data</span><span class="lang-vi">Create a separate table for each set of related data</span></li>
<li><span class="lang-en">Identify each set of related data with a primary key</span><span class="lang-vi">Xác định mỗi tập dữ liệu liên quan bằng một primary key</span></li>
</ul></ul><li><span class="lang-en">2nd Normal Form (2NF)</span><span class="lang-vi">Dạng chuẩn 2 (2NF)</span></li>
<ul><li><span class="lang-en">Requirements</span><span class="lang-vi">Yêu cầu</span></li>
<ul><li><span class="lang-en">Is in 1st Normal Form</span><span class="lang-vi">Đã ở dạng chuẩn 1</span></li>
<li><span class="lang-en">Reduce repeating information</span><span class="lang-vi">Giảm thông tin lặp lại</span></li>
</ul><li><span class="lang-en">Actions</span><span class="lang-vi">Hành động</span></li>
<ul><li><span class="lang-en">Create separate tables for values that apply to multiple records.</span><span class="lang-vi">Create separate tables for values that apply to multiple records.</span></li>
<li><span class="lang-en">Relate tables with a foreign key</span><span class="lang-vi">Liên kết các bảng bằng foreign key</span></li>
</ul></ul><li><span class="lang-en">3rd Normal Form (3NF)</span><span class="lang-vi">Dạng chuẩn 3 (3NF)</span></li>
<ul><li><span class="lang-en">Requirements</span><span class="lang-vi">Yêu cầu</span></li>
<ul><li><span class="lang-en">Is in 2nd Normal Form</span><span class="lang-vi">Đã ở dạng chuẩn 2</span></li>
<li><span class="lang-en">Values that are not part of a record’s key are to be removed from the table.</span><span class="lang-vi">Các giá trị không thuộc key của bản ghi phải được đưa ra khỏi bảng.</span></li>
</ul><li><span class="lang-en">Action</span><span class="lang-vi">Hành động</span></li>
<ul><li><span class="lang-en">Remove fields that are not dependent on the key</span><span class="lang-vi">Loại bỏ các trường không phụ thuộc vào key</span></li>
</ul></ul><li><span class="lang-en">67. identify normal form of database tables</span><span class="lang-vi">67. xác định dạng chuẩn hóa của bảng trong database</span></li>
<li><span class="lang-en">4th Normal Form (4NF)</span><span class="lang-vi">Dạng chuẩn 4 (4NF)</span></li>
<ul><li><span class="lang-en">Requirements</span><span class="lang-vi">Yêu cầu</span></li>
<ul><li><span class="lang-en">It should be in 3rd Normal Form.</span><span class="lang-vi">Phải đang ở dạng chuẩn 3.</span></li>
<li><span class="lang-en">It should have no multi-valued dependency</span><span class="lang-vi">Không được có phụ thuộc đa trị (multi-valued dependency)</span></li>
</ul><li><span class="lang-en">Actions</span><span class="lang-vi">Hành động</span></li>
<ul><li><span class="lang-en">Separate out non-trivial multivalued dependences</span><span class="lang-vi">Tách riêng các phụ thuộc đa trị không tầm thường</span></li>
</ul></ul><li><span class="lang-en">5th Normal Form (5NF)</span><span class="lang-vi">Dạng chuẩn 5 (5NF)</span></li>
<ul><li><span class="lang-en">Requirements</span><span class="lang-vi">Yêu cầu</span></li>
<ul><li><span class="lang-en">It should be in 4th Normal Form.</span><span class="lang-vi">Phải đang ở dạng chuẩn 4.</span></li>
<li><span class="lang-en">It should have no join dependency</span><span class="lang-vi">Không được có phụ thuộc kết nối (join dependency)</span></li>
</ul><li><span class="lang-en">Actions</span><span class="lang-vi">Hành động</span></li>
<ul><li><span class="lang-en">Remove join dependences to remove redundancy</span><span class="lang-vi">Loại bỏ các phụ thuộc kết nối để triệt tiêu dư thừa</span></li>
</ul></ul></ul></section>
<section id="s-134"><h3><span class="n"></span> <span class="lang-en">assess index design for performance</span><span class="lang-vi">đánh giá thiết kế index cho hiệu năng</span><a class="anch" href="#s-134" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">See topic 63.</span><span class="lang-vi">Xem mục 63.</span></li>
</ul></section>
<section id="s-135"><h3><span class="n"></span> <span class="lang-en">validate data types defined for columns</span><span class="lang-vi">kiểm định các kiểu dữ liệu đã định nghĩa cho cột</span><a class="anch" href="#s-135" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">Exact numerics</span><span class="lang-vi">Số chính xác (exact numerics)</span></li>
<ul><li><span class="lang-en">bigint, int, smallint, tinyint, bit</span><span class="lang-vi">bigint, int, smallint, tinyint, bit</span></li>
<li><span class="lang-en">decimal/numeric</span><span class="lang-vi">decimal/numeric</span></li>
<li><span class="lang-en">money, smallmoney</span><span class="lang-vi">money, smallmoney</span></li>
</ul><li><span class="lang-en">Approximate numerics</span><span class="lang-vi">Số xấp xỉ (approximate numerics)</span></li>
<ul><li><span class="lang-en">float, real</span><span class="lang-vi">float, real</span></li>
</ul><li><span class="lang-en">Date and time</span><span class="lang-vi">Ngày và giờ</span></li>
<ul><li><span class="lang-en">date, datetime, datetime2, datetimeoffset, smalldatetime, time</span><span class="lang-vi">date, datetime, datetime2, datetimeoffset, smalldatetime, time</span></li>
</ul><li><span class="lang-en">Character strings</span><span class="lang-vi">Chuỗi ký tự</span></li>
<ul><li><span class="lang-en">char, varchar, text, varchar</span><span class="lang-vi">char, varchar, text, varchar</span></li>
<li><span class="lang-en">nchar, nvarchar, ntext, nvarchar(max)</span><span class="lang-vi">nchar, nvarchar, ntext, nvarchar(max)</span></li>
</ul><li><span class="lang-en">Other data types</span><span class="lang-vi">Các kiểu dữ liệu khác</span></li>
<ul><li><span class="lang-en">binary, varbinary</span><span class="lang-vi">binary, varbinary</span></li>
<li><span class="lang-en">cursor, geography, geometry, hierarchyid, rowversion, sql_variant, table, uniqueidentifier, xml</span><span class="lang-vi">cursor, geography, geometry, hierarchyid, rowversion, sql_variant, table, uniqueidentifier, xml</span></li>
</ul></ul></section>
<section id="s-136"><h3><span class="n"></span> <span class="lang-en">recommend table and index storage including filegroups</span><span class="lang-vi">đề xuất cách lưu trữ bảng và index, bao gồm filegroup</span><a class="anch" href="#s-136" title="Link tới mục này">#</a></h3>
<ul><li><span class="lang-en">This is for Azure SQL MI and VM.</span><span class="lang-vi">Phần này dành cho Azure SQL MI và VM.</span></li>
<ul><li><span class="lang-en">Azure SQL Database supports only one database file (except in Hyperscale).</span><span class="lang-vi">Azure SQL Database chỉ hỗ trợ một file database duy nhất (trừ Hyperscale).</span></li>
</ul><li><span class="lang-en">There are three type of database files:</span><span class="lang-vi">Có ba loại file database:</span></li>
<ul><li><span class="lang-en">Primary file</span><span class="lang-vi">Primary file</span></li>
<ul><li><span class="lang-en">Start-up information.</span><span class="lang-vi">Chứa thông tin khởi động.</span></li>
<li><span class="lang-en">There is only one primary file per database.</span><span class="lang-vi">Mỗi database chỉ có một primary file.</span></li>
<li><span class="lang-en">Recommended filename extension &quot;.mdf&quot;.</span><span class="lang-vi">Phần mở rộng khuyến nghị là &quot;.mdf&quot;.</span></li>
</ul><li><span class="lang-en">Secondary file</span><span class="lang-vi">Secondary file</span></li>
<ul><li><span class="lang-en">Additional, but optional, user-defined data files (zero to multiple). Cannot be used in Azure SQL Database.</span><span class="lang-vi">Các data file bổ sung do người dùng định nghĩa, không bắt buộc (từ không có tới nhiều file). Không dùng được trong Azure SQL Database.</span></li>
<li><span class="lang-en">Can be on separate disks.</span><span class="lang-vi">Có thể nằm trên các đĩa riêng biệt.</span></li>
<li><span class="lang-en">Recommended filename extension &quot;.ndf&quot;.</span><span class="lang-vi">Phần mở rộng khuyến nghị là &quot;.ndf&quot;.</span></li>
</ul><li><span class="lang-en">Transaction Log</span><span class="lang-vi">Transaction Log</span></li>
<ul><li><span class="lang-en">Information needed to recover database.</span><span class="lang-vi">Chứa thông tin cần thiết để khôi phục database.</span></li>
<li><span class="lang-en">One to multiple transaction logs.</span><span class="lang-vi">Từ một tới nhiều transaction log.</span></li>
<li><span class="lang-en">Recommended filename extension &quot;.ldf&quot;.</span><span class="lang-vi">Phần mở rộng khuyến nghị là &quot;.ldf&quot;.</span></li>
</ul><li><span class="lang-en">A file can only be used by one database.</span><span class="lang-vi">Một file chỉ thuộc về một database duy nhất.</span></li>
<li><span class="lang-en">Simple databases can have a single data file and a single transaction log file.</span><span class="lang-vi">Database đơn giản có thể chỉ cần một data file và một transaction log file.</span></li>
</ul><li><span class="lang-en">Have two different file name:</span><span class="lang-vi">Mỗi file có hai tên khác nhau:</span></li>
<ul><li><span class="lang-en">Logical file name – used in T-SQL statements.</span><span class="lang-vi">Logical file name — dùng trong các câu lệnh T-SQL.</span></li>
<li><span class="lang-en">O/S file name – its location, including directory path (you can set this on VM only).</span><span class="lang-vi">O/S file name — vị trí thật của file, gồm cả đường dẫn thư mục (chỉ đặt được trên VM).</span></li>
</ul><li><span class="lang-en">Storage size</span><span class="lang-vi">Dung lượng lưu trữ</span></li>
<ul><li><span class="lang-en">Can grow automatically, by a percentage or a fixed file size (&quot;growth increment&quot;).</span><span class="lang-vi">Có thể tự tăng, theo phần trăm hoặc theo một dung lượng cố định (&quot;growth increment&quot;).</span></li>
<li><span class="lang-en">Has a maximum size.</span><span class="lang-vi">Có một dung lượng tối đa.</span></li>
</ul><li><span class="lang-en">Filegroups</span><span class="lang-vi">Filegroup</span></li>
<ul><li><span class="lang-en">Contains multiple files for admin, data allocation or storage purposes. Not used in Azure SQL Database.</span><span class="lang-vi">Chứa nhiều file, phục vụ mục đích quản trị, phân bổ dữ liệu hoặc lưu trữ. Không dùng trong Azure SQL Database.</span></li>
<li><span class="lang-en">By default, the &quot;default&quot; filegroup is the PRIMARY filegroup. However, you can change it.</span><span class="lang-vi">Mặc định, filegroup &quot;default&quot; chính là filegroup PRIMARY. Tuy nhiên bạn có thể đổi.</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER DATABASE DatabaseName MODIFY FILEGROUP FileGroupName DEFAULT;</span><span class="lang-vi">ALTER DATABASE DatabaseName MODIFY FILEGROUP FileGroupName DEFAULT;</span></pre></li>
</ul><li><span class="lang-en">The primary filegroup contains the primary file, system tables. The default filegroup (which may be the same) contains any other objects where you have not specified a filegroup.</span><span class="lang-vi">Filegroup primary chứa primary file và các bảng hệ thống. Filegroup default (có thể chính là nó) chứa mọi object khác mà bạn không chỉ định filegroup.</span></li>
<li><span class="lang-en">Other filegroups are called &quot;User-defined&quot; filegroups.</span><span class="lang-vi">Các filegroup khác được gọi là filegroup &quot;User-defined&quot;.</span></li>
<ul><li><span class="lang-en">There are other filegroups, called &quot;Memory Optimized Data&quot; and &quot;Filestream&quot;.</span><span class="lang-vi">Còn có các filegroup khác nữa, gọi là &quot;Memory Optimized Data&quot; và &quot;Filestream&quot;.</span></li>
</ul><li><span class="lang-en">A file can only be contained in one filegroup.</span><span class="lang-vi">Một file chỉ nằm trong một filegroup.</span></li>
<li><span class="lang-en">A filegroup can only be used by one database.</span><span class="lang-vi">Một filegroup chỉ thuộc về một database.</span></li>
<li><span class="lang-en">Transaction logs are not part of a filegroup.</span><span class="lang-vi">Transaction log không thuộc filegroup nào.</span></li>
<li><span class="lang-en">If you use multiple data files, Microsoft recommends that you create a second file group for the other files and make that filegroup the default filegroup.</span><span class="lang-vi">Nếu dùng nhiều data file, Microsoft khuyến nghị tạo một filegroup thứ hai cho các file còn lại và đặt filegroup đó làm default.</span></li>
</ul><li><span class="lang-en">You can create files and filegroups in T-SQL and in SSMS.</span><span class="lang-vi">Bạn tạo được file và filegroup bằng T-SQL và trong SSMS.</span></li>
<ul><li class="cb"><pre class="code"><span class="lang-en">ALTER DATABASE [MyDatabase]
ADD FILEGROUP [NewFileGroup]
GO
ALTER DATABASE [MyDatabase]
ADD FILE (NAME = N'NewData',
FILENAME = N'C:\\PathToData\\NewData.ndf' ,
SIZE = 8192KB , FILEGROWTH = 65536KB )
TO FILEGROUP [NewFileGroup]</span><span class="lang-vi">ALTER DATABASE [MyDatabase]
ADD FILEGROUP [NewFileGroup]
GO
ALTER DATABASE [MyDatabase]
ADD FILE (NAME = N'NewData',
FILENAME = N'C:\\PathToData\\NewData.ndf' ,
SIZE = 8192KB , FILEGROWTH = 65536KB )
TO FILEGROUP [NewFileGroup]</span></pre></li>
<ul><li><span class="lang-en">or FILEGROWTH = 10%</span><span class="lang-vi">hoặc FILEGROWTH = 10%</span></li>
</ul></ul><li><span class="lang-en">For information on a table, use:</span><span class="lang-vi">Để xem thông tin về một bảng, dùng:</span></li>
<ul><li><code><span class="lang-en">sp_help 'Schema.TableName'</span><span class="lang-vi">sp_help 'Schema.TableName'</span></code></li>
</ul></ul></section>
`,oa=`<h4>1 · Plan and implement data platform resources</h4><ol><li><a href="#s-sec1"><span class="lang-en">Summary tables for domain 1</span><span class="lang-vi">Bảng tổng hợp phạm vi 1</span></a></li><li><a href="#s1">1. <span class="lang-en">deploy database offerings on selected platforms</span><span class="lang-vi">triển khai database trên các nền tảng được chọn</span></a></li><li><a href="#s2">2. <span class="lang-en">Choose an automated deployment method</span><span class="lang-vi">Chọn phương thức triển khai tự động</span></a></li><li><a href="#s3">3. <span class="lang-en">apply patches and updates for hybrid and IaaS deployment</span><span class="lang-vi">áp dụng patch và bản cập nhật cho triển khai hybrid và IaaS</span></a></li><li><a href="#s-3"><span class="lang-en">evaluate requirements for the deployment</span><span class="lang-vi">đánh giá yêu cầu cho việc triển khai</span></a></li><li><a href="#s5">5. <span class="lang-en">evaluate the functional benefits/impact of possible database offerings</span><span class="lang-vi">đánh giá lợi ích/tác động về mặt chức năng của các lựa chọn database</span></a></li><li><a href="#s5-2">5. <span class="lang-en">evaluate the scalability of the possible database offering</span><span class="lang-vi">đánh giá khả năng mở rộng của lựa chọn database</span></a></li><li><a href="#s5-3">5. <span class="lang-en">evaluate the HA/DR of the possible database offering</span><span class="lang-vi">đánh giá HA/DR của lựa chọn database</span></a></li><li><a href="#s6">6. <span class="lang-en">evaluate the security aspects of the possible database offering</span><span class="lang-vi">đánh giá khía cạnh bảo mật của lựa chọn database</span></a></li><li><a href="#s6a">6a. <span class="lang-en">Identify use cases for Azure Arc-enabled SQL services</span><span class="lang-vi">Xác định các tình huống dùng Azure Arc-enabled SQL services</span></a></li><li><a href="#s6b">6b. <span class="lang-en">Identify use cases for Azure SQL Database in Microsoft Fabric</span><span class="lang-vi">Xác định các tình huống dùng Azure SQL Database trong Microsoft Fabric</span></a></li><li><a href="#s7">7. <span class="lang-en">Plan for table partitioning</span><span class="lang-vi">Lập kế hoạch phân vùng bảng</span></a></li><li><a href="#s8">8. <span class="lang-en">evaluate database partitioning techniques, such as database sharding</span><span class="lang-vi">đánh giá các kỹ thuật phân vùng database, chẳng hạn database sharding</span></a></li><li><a href="#s9">9. <span class="lang-en">configure Azure SQL Database for scale and performance</span><span class="lang-vi">cấu hình Azure SQL Database để mở rộng và tối ưu hiệu năng</span></a></li><li><a href="#s10">10. <span class="lang-en">configure Azure SQL Managed Instance for scale and performance</span><span class="lang-vi">cấu hình Azure SQL Managed Instance để mở rộng và tối ưu hiệu năng</span></a></li><li><a href="#s11">11. <span class="lang-en">configure SQL Server in Azure VMs for scale and performance</span><span class="lang-vi">cấu hình SQL Server trên Azure VM để mở rộng và tối ưu hiệu năng</span></a></li><li><a href="#s11-2">11. <span class="lang-en">configure storage and infrastructure resources</span><span class="lang-vi">cấu hình lưu trữ và tài nguyên hạ tầng</span></a></li><li><a href="#s-16"><span class="lang-en">calculate resource requirements</span><span class="lang-vi">tính toán yêu cầu tài nguyên</span></a></li><li><a href="#s13">13. <span class="lang-en">evaluate the use of compression for tables and indexes</span><span class="lang-vi">đánh giá việc dùng compression cho bảng và index</span></a></li><li><a href="#s14">14. <span class="lang-en">evaluate requirements for the migration</span><span class="lang-vi">đánh giá yêu cầu cho việc migration</span></a></li><li><a href="#s15">15. <span class="lang-en">evaluate offline or online migration strategies</span><span class="lang-vi">đánh giá chiến lược migration offline hay online</span></a></li><li><a href="#s16">16. <span class="lang-en">implement an online migration strategy</span><span class="lang-vi">triển khai chiến lược migration online</span></a></li><li><a href="#s16-2">16. <span class="lang-en">implement an offline migration strategy</span><span class="lang-vi">triển khai chiến lược migration offline</span></a></li><li><a href="#s18">18. <span class="lang-en">Perform post migration validations</span><span class="lang-vi">Thực hiện kiểm định sau migration</span></a></li><li><a href="#s20">20. <span class="lang-en">set up SQL Data Sync</span><span class="lang-vi">thiết lập SQL Data Sync</span></a></li><li><a href="#s22">22. <span class="lang-en">Implement a migration between Azure SQL services</span><span class="lang-vi">Thực hiện migration giữa các dịch vụ Azure SQL</span></a></li><li><a href="#s22a">22a. <span class="lang-en">implement Azure SQL Managed Instance database copy and move</span><span class="lang-vi">thực hiện copy và move database của Azure SQL Managed Instance</span></a></li></ol><h4>2 · Implement a secure environment</h4><ol><li><a href="#s-sec2"><span class="lang-en">Summary tables for domain 2</span><span class="lang-vi">Bảng tổng hợp phạm vi 2</span></a></li><li><a href="#s23">23. <span class="lang-en">configure authentication by using Active Directory and Entra ID</span><span class="lang-vi">cấu hình xác thực bằng Active Directory và Entra ID</span></a></li><li><a href="#s23a">23a. <span class="lang-en">Configure authentication for SQL on Azure VMs and Azure SQL Managed</span><span class="lang-vi">Cấu hình xác thực cho SQL trên Azure VM và Azure SQL Managed</span></a></li><li><a href="#s24">24. <span class="lang-en">create users from Entra ID identities</span><span class="lang-vi">tạo user từ danh tính Entra ID</span></a></li><li><a href="#s25">25. <span class="lang-en">configure security principals</span><span class="lang-vi">cấu hình security principal</span></a></li><li><a href="#s26">26. <span class="lang-en">configure database and object-level permissions using graphical tools</span><span class="lang-vi">cấu hình quyền cấp database và cấp object bằng công cụ đồ họa</span></a></li><li><a href="#s27">27. <span class="lang-en">apply principle of least privilege for all securables</span><span class="lang-vi">áp dụng nguyên tắc đặc quyền tối thiểu cho mọi securable</span></a></li><li><a href="#s29">29. <span class="lang-en">manage certificates</span><span class="lang-vi">quản lý certificate</span></a></li><li><a href="#s29-2">29. <span class="lang-en">manage security principals</span><span class="lang-vi">quản lý security principal</span></a></li><li><a href="#s29-3">29. <span class="lang-en">configure permissions for users to access database objects</span><span class="lang-vi">cấu hình quyền cho user truy cập các object trong database</span></a></li><li><a href="#s29-4">29. <span class="lang-en">configure permissions by using custom roles</span><span class="lang-vi">cấu hình quyền bằng custom role</span></a></li><li><a href="#s30">30. <span class="lang-en">implement Transparent Data Encryption (TDE)</span><span class="lang-vi">triển khai Transparent Data Encryption (TDE)</span></a></li><li><a href="#s31">31. <span class="lang-en">implement object-level encryption</span><span class="lang-vi">triển khai mã hóa ở cấp object</span></a></li><li><a href="#s32">32. <span class="lang-en">configure server and database-level firewall rules</span><span class="lang-vi">cấu hình firewall rule cấp server và cấp database</span></a></li><li><a href="#s33">33. <span class="lang-en">implement Always Encrypted</span><span class="lang-vi">triển khai Always Encrypted</span></a></li><li><a href="#s33a">33a. <span class="lang-en">implement Always Encrypted with VBS enclaves</span><span class="lang-vi">triển khai Always Encrypted với VBS enclave</span></a></li><li><a href="#s34">34. <span class="lang-en">implement Dynamic Data Masking</span><span class="lang-vi">triển khai Dynamic Data Masking</span></a></li><li><a href="#s34-2">34. <span class="lang-en">implement Azure Key Vault and disk encryption for Azure VMs</span><span class="lang-vi">triển khai Azure Key Vault và mã hóa đĩa cho Azure VM</span></a></li><li><a href="#s34a">34a. <span class="lang-en">Configure Private Link and Service Endpoints</span><span class="lang-vi">Cấu hình Private Link và Service Endpoint</span></a></li><li><a href="#s35">35. <span class="lang-en">Configure Transport Layer Security (TLS)</span><span class="lang-vi">Cấu hình Transport Layer Security (TLS)</span></a></li><li><a href="#s36">36. <span class="lang-en">apply a data classification strategy</span><span class="lang-vi">áp dụng chiến lược phân loại dữ liệu</span></a></li><li><a href="#s37">37. <span class="lang-en">configure server and database audits</span><span class="lang-vi">cấu hình audit ở cấp server và cấp database</span></a></li><li><a href="#s38">38. <span class="lang-en">implement data change tracking</span><span class="lang-vi">triển khai theo dõi thay đổi dữ liệu (change tracking)</span></a></li><li><a href="#s39">39. <span class="lang-en">perform a vulnerability assessment</span><span class="lang-vi">thực hiện đánh giá lỗ hổng bảo mật</span></a></li><li><a href="#s40">40. <span class="lang-en">Manage database resources by using Azure Purview</span><span class="lang-vi">Quản lý tài nguyên database bằng Azure Purview</span></a></li><li><a href="#s41">41. <span class="lang-en">Implement Azure SQL Database ledger</span><span class="lang-vi">Triển khai Azure SQL Database ledger</span></a></li><li><a href="#s42">42. <span class="lang-en">Implement row-level security</span><span class="lang-vi">Triển khai row-level security</span></a></li><li><a href="#s43">43. <span class="lang-en">Configure Microsoft Defender for SQL</span><span class="lang-vi">Cấu hình Microsoft Defender for SQL</span></a></li></ol><h4>3 · Monitor, configure and optimize database resources</h4><ol><li><a href="#s-sec3"><span class="lang-en">Summary tables for domain 3</span><span class="lang-vi">Bảng tổng hợp phạm vi 3</span></a></li><li><a href="#s44">44. <span class="lang-en">prepare an operational performance baseline</span><span class="lang-vi">chuẩn bị baseline hiệu năng vận hành</span></a></li><li><a href="#s45">45. <span class="lang-en">determine sources for performance metrics</span><span class="lang-vi">xác định nguồn của các chỉ số hiệu năng</span></a></li><li><a href="#s45-2">45. <span class="lang-en">determine sources for performance metrics</span><span class="lang-vi">xác định nguồn của các chỉ số hiệu năng</span></a></li><li><a href="#s46">46. <span class="lang-en">interpret performance metrics</span><span class="lang-vi">diễn giải các chỉ số hiệu năng</span></a></li><li><a href="#s47">47. <span class="lang-en">configure and monitor activity and performance at the infrastructure, server,</span><span class="lang-vi">cấu hình và giám sát hoạt động cùng hiệu năng ở cấp hạ tầng, server,</span></a></li><li><a href="#s48">48. <span class="lang-en">Monitor by using SQL Insights</span><span class="lang-vi">Giám sát bằng SQL Insights</span></a></li><li><a href="#s48a">48a. <span class="lang-en">Monitor by using database watcher</span><span class="lang-vi">Giám sát bằng database watcher</span></a></li><li><a href="#s50">50. <span class="lang-en">configure Query Store to collect performance data</span><span class="lang-vi">cấu hình Query Store để thu thập dữ liệu hiệu năng</span></a></li><li><a href="#s52">52. <span class="lang-en">identify sessions that cause blocking</span><span class="lang-vi">xác định các session gây blocking</span></a></li><li><a href="#s53">53. <span class="lang-en">determine the appropriate Dynamic Management Views (DMVs) to gather query</span><span class="lang-vi">chọn Dynamic Management View (DMV) phù hợp để thu thập</span></a></li><li><a href="#s53-2">53. <span class="lang-en">identify performance issues using DMVs</span><span class="lang-vi">phát hiện vấn đề hiệu năng bằng DMV</span></a></li><li><a href="#s54">54. <span class="lang-en">identify and implement index changes for queries</span><span class="lang-vi">xác định và triển khai thay đổi index cho query</span></a></li><li><a href="#s55">55. <span class="lang-en">recommend query construct modifications based on resource usage</span><span class="lang-vi">đề xuất sửa cấu trúc query dựa trên mức tiêu thụ tài nguyên</span></a></li><li><a href="#s56">56. <span class="lang-en">assess the use of hints for query performance</span><span class="lang-vi">đánh giá việc dùng hint cho hiệu năng query</span></a></li><li><a href="#s57">57. <span class="lang-en">determine the appropriate type of execution plan</span><span class="lang-vi">chọn loại execution plan phù hợp</span></a></li><li><a href="#s57-2">57. <span class="lang-en">identify problem areas in execution plans</span><span class="lang-vi">phát hiện điểm có vấn đề trong execution plan</span></a></li><li><a href="#s57-3">57. <span class="lang-en">extract query plans from the Query Store</span><span class="lang-vi">trích xuất query plan từ Query Store</span></a></li><li><a href="#s57a">57a. <span class="lang-en">assess database performance by using Intelligent Insights for Azure SQL Database</span><span class="lang-vi">đánh giá hiệu năng database bằng Intelligent Insights cho Azure SQL Database</span></a></li><li><a href="#s58">58. <span class="lang-en">implement index maintenance tasks</span><span class="lang-vi">triển khai các tác vụ bảo trì index</span></a></li><li><a href="#s59">59. <span class="lang-en">implement statistics maintenance tasks</span><span class="lang-vi">triển khai các tác vụ bảo trì statistics</span></a></li><li><a href="#s60">60. <span class="lang-en">evaluate database health using DMVs</span><span class="lang-vi">đánh giá sức khỏe database bằng DMV</span></a></li><li><a href="#s60-2">60. <span class="lang-en">evaluate server health using DMVs</span><span class="lang-vi">đánh giá sức khỏe server bằng DMV</span></a></li><li><a href="#s60-3">60. <span class="lang-en">perform database consistency checks by using DBCC</span><span class="lang-vi">kiểm tra tính nhất quán của database bằng DBCC</span></a></li><li><a href="#s60-4">60. <span class="lang-en">perform database consistency checks by using DBCC</span><span class="lang-vi">kiểm tra tính nhất quán của database bằng DBCC</span></a></li><li><a href="#s61">61. <span class="lang-en">configure database auto-tuning</span><span class="lang-vi">cấu hình auto-tuning cho database</span></a></li><li><a href="#s62">62. <span class="lang-en">configure server and service account settings for performance</span><span class="lang-vi">cấu hình thiết lập server và service account cho hiệu năng</span></a></li><li><a href="#s63">63. <span class="lang-en">configure Resource Governor for performance</span><span class="lang-vi">cấu hình Resource Governor cho hiệu năng</span></a></li><li><a href="#s64">64. <span class="lang-en">implement database-scoped configuration</span><span class="lang-vi">triển khai database-scoped configuration</span></a></li><li><a href="#s64-2">64. <span class="lang-en">review database configuration options</span><span class="lang-vi">xem lại các tùy chọn cấu hình database</span></a></li><li><a href="#s65">65. <span class="lang-en">configure compute resources for scaling</span><span class="lang-vi">cấu hình tài nguyên compute để mở rộng</span></a></li><li><a href="#s65-2">65. <span class="lang-en">assess proper database autogrowth configuration</span><span class="lang-vi">đánh giá cấu hình autogrowth phù hợp cho database</span></a></li><li><a href="#s65-3">65. <span class="lang-en">report on database free space</span><span class="lang-vi">báo cáo dung lượng trống của database</span></a></li><li><a href="#s66">66. <span class="lang-en">configure Intelligent Query Processing (IQP)</span><span class="lang-vi">cấu hình Intelligent Query Processing (IQP)</span></a></li></ol><h4>4 · Configure and manage automation of tasks</h4><ol><li><a href="#s-sec4"><span class="lang-en">Summary tables for domain 4</span><span class="lang-vi">Bảng tổng hợp phạm vi 4</span></a></li><li><a href="#s67">67. <span class="lang-en">manage schedules for regular maintenance jobs</span><span class="lang-vi">quản lý lịch chạy các job bảo trì định kỳ</span></a></li><li><a href="#s68">68. <span class="lang-en">configure notifications for task success/failure/non-completion</span><span class="lang-vi">cấu hình thông báo khi tác vụ thành công/thất bại/không hoàn tất</span></a></li><li><a href="#s70">70. <span class="lang-en">perform automated deployment methods for resources</span><span class="lang-vi">thực hiện các phương thức triển khai tự động cho tài nguyên</span></a></li><li><a href="#s70-2">70. <span class="lang-en">Automate deployment by using Azure Resource Manager templates (ARM</span><span class="lang-vi">Tự động hóa triển khai bằng Azure Resource Manager template (ARM</span></a></li><li><a href="#s71">71. <span class="lang-en">Automate deployment by using PowerShell</span><span class="lang-vi">Tự động hóa triển khai bằng PowerShell</span></a></li><li><a href="#s72">72. <span class="lang-en">Automate deployment by using Azure CLI</span><span class="lang-vi">Tự động hóa triển khai bằng Azure CLI</span></a></li><li><a href="#s74">74. <span class="lang-en">automate database maintenance tasks</span><span class="lang-vi">tự động hóa các tác vụ bảo trì database</span></a></li><li><a href="#s75">75. <span class="lang-en">configure multi-server automation</span><span class="lang-vi">cấu hình tự động hóa đa server</span></a></li><li><a href="#s75-2">75. <span class="lang-en">automate backups</span><span class="lang-vi">tự động hóa backup</span></a></li><li><a href="#s75-3">75. <span class="lang-en">automate performance tuning and patching</span><span class="lang-vi">tự động hóa việc tinh chỉnh hiệu năng và vá lỗi</span></a></li><li><a href="#s75-4">75. <span class="lang-en">implement policies by using automated evaluation modes</span><span class="lang-vi">triển khai policy bằng các chế độ đánh giá tự động</span></a></li><li><a href="#s76">76. <span class="lang-en">Automate database workflows by using Azure Logic Apps (not needed from 7</span><span class="lang-vi">Tự động hóa workflow database bằng Azure Logic Apps (không còn cần từ 7</span></a></li><li><a href="#s77">77. <span class="lang-en">create event notifications based on metrics</span><span class="lang-vi">tạo event notification dựa trên metric</span></a></li><li><a href="#s77-2">77. <span class="lang-en">create event notifications for Azure resources</span><span class="lang-vi">tạo event notification cho tài nguyên Azure</span></a></li><li><a href="#s77-3">77. <span class="lang-en">create alerts for server configuration changes</span><span class="lang-vi">tạo cảnh báo cho các thay đổi cấu hình server</span></a></li><li><a href="#s77-4">77. <span class="lang-en">create tasks that respond to event notifications</span><span class="lang-vi">tạo tác vụ phản hồi lại event notification</span></a></li></ol><h4>5 · Plan and implement a HA/DR environment</h4><ol><li><a href="#s-sec5"><span class="lang-en">Summary tables for domain 5</span><span class="lang-vi">Bảng tổng hợp phạm vi 5</span></a></li><li><a href="#s79">79. <span class="lang-en">recommend HADR strategy based on RPO/RTO requirements</span><span class="lang-vi">đề xuất chiến lược HADR dựa trên yêu cầu RPO/RTO</span></a></li><li><a href="#s4">4. <span class="lang-en">evaluate HADR for hybrid deployments</span><span class="lang-vi">đánh giá HADR cho triển khai hybrid</span></a></li><li><a href="#s82">82. <span class="lang-en">test HA by using failover – FAILOVER GROUP</span><span class="lang-vi">kiểm thử HA bằng failover – FAILOVER GROUP</span></a></li><li><a href="#s82-2">82. <span class="lang-en">test DR by using failover or restore</span><span class="lang-vi">kiểm thử DR bằng failover hoặc restore</span></a></li><li><a href="#s82-3">82. <span class="lang-en">test HA by using failover – AVAILABILITY GROUP</span><span class="lang-vi">kiểm thử HA bằng failover – AVAILABILITY GROUP</span></a></li><li><a href="#s82-4">82. <span class="lang-en">test DR by using failover or restore</span><span class="lang-vi">kiểm thử DR bằng failover hoặc restore</span></a></li><li><a href="#s84">84. <span class="lang-en">perform a database backup with options</span><span class="lang-vi">thực hiện backup database kèm các tùy chọn</span></a></li><li><a href="#s85">85. <span class="lang-en">perform a database restore with options</span><span class="lang-vi">thực hiện restore database kèm các tùy chọn</span></a></li><li><a href="#s86">86. <span class="lang-en">perform a database restore to a point in time</span><span class="lang-vi">restore database về một thời điểm cụ thể</span></a></li><li><a href="#s87">87. <span class="lang-en">configure long-term backup retention</span><span class="lang-vi">cấu hình lưu giữ backup dài hạn</span></a></li><li><a href="#s88">88. <span class="lang-en">perform transaction log backup</span><span class="lang-vi">thực hiện transaction log backup</span></a></li><li><a href="#s88-2">88. <span class="lang-en">perform restore of user databases</span><span class="lang-vi">thực hiện restore các database người dùng</span></a></li><li><a href="#s88-3">88. <span class="lang-en">perform database backups with options</span><span class="lang-vi">thực hiện backup database kèm các tùy chọn</span></a></li><li><a href="#s88a">88a. <span class="lang-en">backup and restore to and from cloud storage</span><span class="lang-vi">backup và restore từ/tới cloud storage</span></a></li><li><a href="#s90">90. <span class="lang-en">create an Availability Group</span><span class="lang-vi">tạo một Availability Group</span></a></li><li><a href="#s90-2">90. <span class="lang-en">prepare databases for Always On Availability Groups</span><span class="lang-vi">chuẩn bị database cho Always On Availability Group</span></a></li><li><a href="#s90-3">90. <span class="lang-en">integrate a database into an Always On Availability Group</span><span class="lang-vi">đưa một database vào Always On Availability Group</span></a></li><li><a href="#s90-4">90. <span class="lang-en">configure an Always On Availability Group listener</span><span class="lang-vi">cấu hình listener cho Always On Availability Group</span></a></li><li><a href="#s91">91. <span class="lang-en">configure auto-failover groups</span><span class="lang-vi">cấu hình auto-failover group</span></a></li><li><a href="#s92">92. <span class="lang-en">configure quorum options for a Windows Server Failover Cluster</span><span class="lang-vi">cấu hình tùy chọn quorum cho Windows Server Failover Cluster</span></a></li><li><a href="#s93">93. <span class="lang-en">Configure failover cluster instances on Azure VMs</span><span class="lang-vi">Cấu hình failover cluster instance trên Azure VM</span></a></li><li><a href="#s94">94. <span class="lang-en">configure replication</span><span class="lang-vi">cấu hình replication</span></a></li><li><a href="#s94-2">94. <span class="lang-en">Configure log shipping</span><span class="lang-vi">Cấu hình log shipping</span></a></li></ol><h4>Không còn nằm trong đề DP-300</h4><ol><li><a href="#s-125"><span class="lang-en">evaluate requirements for the upgrade</span><span class="lang-vi">đánh giá yêu cầu cho việc nâng cấp</span></a></li><li><a href="#s-126"><span class="lang-en">evaluate offline or online upgrade strategies</span><span class="lang-vi">đánh giá chiến lược nâng cấp offline hay online</span></a></li><li><a href="#s-127"><span class="lang-en">implement an online upgrade strategy</span><span class="lang-vi">triển khai chiến lược nâng cấp online</span></a></li><li><a href="#s-128"><span class="lang-en">implement an offline upgrade strategy</span><span class="lang-vi">triển khai chiến lược nâng cấp offline</span></a></li><li><a href="#s-129"><span class="lang-en">manage storage capacity</span><span class="lang-vi">quản lý dung lượng lưu trữ</span></a></li><li><a href="#s-130"><span class="lang-en">assess growth/fragmentation of databases and logs</span><span class="lang-vi">đánh giá mức tăng trưởng/phân mảnh của database và log</span></a></li><li><a href="#s-131"><span class="lang-en">assess performance-related database configuration parameters</span><span class="lang-vi">đánh giá các tham số cấu hình database liên quan hiệu năng</span></a></li><li><a href="#s-132"><span class="lang-en">identify data quality issues with duplication of data</span><span class="lang-vi">phát hiện vấn đề chất lượng dữ liệu do trùng lặp</span></a></li><li><a href="#s-133"><span class="lang-en">identify normal form of database tables</span><span class="lang-vi">xác định dạng chuẩn hóa của bảng trong database</span></a></li><li><a href="#s-134"><span class="lang-en">assess index design for performance</span><span class="lang-vi">đánh giá thiết kế index cho hiệu năng</span></a></li><li><a href="#s-135"><span class="lang-en">validate data types defined for columns</span><span class="lang-vi">kiểm định các kiểu dữ liệu đã định nghĩa cho cột</span></a></li><li><a href="#s-136"><span class="lang-en">recommend table and index storage including filegroups</span><span class="lang-vi">đề xuất cách lưu trữ bảng và index, bao gồm filegroup</span></a></li></ol>
`,ra={class:"layout"},ga={class:"search"},ua={class:"cov"},ha={key:0},da={class:"topbar"},va=["title"],Aa=J({__name:"Dp300NotesPage",setup(ma){ca("dp300","notes");const x=ia(),r=Z(),U=c(),p=c(),T=c(),t=c(),w=c(),m=c(matchMedia("(max-width:860px)").matches);let o=[],b=[],L=[],g=null,u=null,q;const V=()=>document.documentElement.dataset.lang||"vi",N=n=>[...n.querySelectorAll(V()==="en"?".lang-en":".lang-vi")],M=n=>N(n).map(a=>a.textContent).join(" ").toLowerCase();function G(n){document.documentElement.dataset.lang=n,r.setLang(n),o.forEach(a=>a.text=M(a.el)),t.value.value&&C()}const F=n=>{n.querySelectorAll("mark").forEach(a=>a.replaceWith(document.createTextNode(a.textContent||""))),n.normalize()};function H(n,a){const s=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),e=[];let i;for(;i=s.nextNode();)(i.nodeValue||"").toLowerCase().includes(a)&&e.push(i);e.forEach(P=>{const y=document.createDocumentFragment(),S=P.nodeValue||"",$=S.toLowerCase();let A=0,h;for(;(h=$.indexOf(a,A))>-1;){y.appendChild(document.createTextNode(S.slice(A,h)));const Q=document.createElement("mark");Q.textContent=S.slice(h,h+a.length),y.appendChild(Q),A=h+a.length}y.appendChild(document.createTextNode(S.slice(A))),P.replaceWith(y)})}const Y=(n,a)=>N(n).forEach(s=>H(s,a));function C(){const n=t.value.value.trim().toLowerCase();let a=0;p.value.querySelectorAll("h2.dom").forEach(s=>s.classList.toggle("hidden",!!n)),o.forEach(s=>{F(s.el);const e=!n||s.text.includes(n);s.el.classList.toggle("hidden",!e),e&&(a++,n&&Y(s.el,n))}),n||p.value.querySelectorAll("h2.dom").forEach(s=>s.classList.remove("hidden")),w.value.classList.toggle("hidden",a>0),b.forEach(s=>{const e=s.getAttribute("href").slice(1),i=document.getElementById(e);s.parentElement.classList.toggle("hidden",!!(i&&i.classList.contains("hidden")))})}function K(){clearTimeout(q),q=setTimeout(C,120)}function O(n){n.key==="/"&&document.activeElement!==t.value&&(n.preventDefault(),t.value.focus()),n.key==="Escape"&&document.activeElement===t.value&&(t.value.value="",C(),t.value.blur())}function k(){var s;const n=decodeURIComponent(location.hash.slice(1)),a=n?document.getElementById(n):null;u==null||u.classList.remove("flash"),u=null,!(!a||!((s=p.value)!=null&&s.contains(a)))&&(a.scrollIntoView({block:"start"}),a.offsetWidth,a.classList.add("flash"),u=a)}const R=c(0);function W(n){o.forEach(({el:a})=>{const s=n.get(a.id);if(!s)return;const e=a.querySelector("h3");if(!e)return;const i=document.createElement("a");i.className="ql",i.href="/dp-300/practice?note="+encodeURIComponent(a.id),i.title=`Luyện ${s} câu hỏi thuộc mục này`,i.textContent=`ôn ${s} câu`,e.insertBefore(i,e.querySelector(".anch")),R.value++})}function j(n){var e,i;const a=(i=(e=n.target).closest)==null?void 0:i.call(e,"a");if(!a)return;const s=a.getAttribute("href")||"";s.startsWith("/")&&(n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.button!==0||(n.preventDefault(),x.push(s)))}function _(){T.value.querySelectorAll("ol").forEach(n=>n.classList.toggle("hidden",m.value))}function X(){m.value=!m.value,_()}return aa(()=>{document.documentElement.dataset.lang=r.lang,o=[...p.value.querySelectorAll("section")].map(a=>({el:a,text:""})),o.forEach(a=>a.text=M(a.el)),b=[...T.value.querySelectorAll("a")],na(async()=>{const{PACKS:a,countByNote:s}=await import("./packs-NRGtmI-h.js");return{PACKS:a,countByNote:s}},__vite__mapDeps([0,1,2])).then(({PACKS:a,countByNote:s})=>{p.value&&W(s(a.dp300))});const n={};b.forEach(a=>n[a.getAttribute("href").slice(1)]=a),typeof IntersectionObserver<"u"&&(g=new IntersectionObserver(a=>{a.forEach(s=>{const e=n[s.target.id];e&&s.isIntersecting&&(b.forEach(i=>i.classList.remove("on")),e.classList.add("on"),e.scrollIntoView({block:"nearest"}))})},{rootMargin:"0px 0px -75% 0px"}),o.forEach(a=>g.observe(a.el))),_(),location.hash&&k(),document.addEventListener("keydown",O),window.addEventListener("hashchange",k),L.push(()=>document.removeEventListener("keydown",O)),L.push(()=>window.removeEventListener("hashchange",k))}),sa(()=>{L.forEach(n=>n()),g==null||g.disconnect(),delete document.documentElement.dataset.lang}),(n,a)=>{const s=la("router-link");return z(),B("div",{ref_key:"rootEl",ref:U,class:"notes-dp"},[l("div",ra,[l("aside",null,[a[7]||(a[7]=l("h1",null,"DP-300 · Notes",-1)),a[8]||(a[8]=l("div",{class:"sub"},"142 mục · 4106 dòng ghi chú",-1)),l("div",ga,[l("input",{ref_key:"qEl",ref:t,type:"search",placeholder:"Tìm trong note… (/)",autocomplete:"off",onInput:K},null,544)]),a[0]||(f(-1,!0),(a[0]=l("nav",{ref_key:"tocEl",ref:T,class:"toc-nav",innerHTML:d(oa)},null,8,["innerHTML"])).cacheIndex=0,f(1),a[0]),a[9]||(a[9]=l("div",{class:"cov"},"Bản dịch tiếng Việt: 3571/3571 mục/dòng",-1)),l("div",ua,[a[3]||(a[3]=v(" Pill ",-1)),a[4]||(a[4]=l("b",null,"“ôn N câu”",-1)),a[5]||(a[5]=v(" ở tiêu đề mục mở thẳng một lượt luyện tập gồm đúng các câu hỏi thuộc mục đó",-1)),R.value?(z(),B("span",ha," — "+D(R.value)+" mục có câu hỏi",1)):ea("",!0),a[6]||(a[6]=v(". ",-1))])]),l("main",null,[l("div",da,[E(s,{to:"/dp-300/practice"},{default:I(()=>[...a[10]||(a[10]=[v("← Về bài luyện tập",-1)])]),_:1}),E(s,{to:"/dp-300/tables"},{default:I(()=>[...a[11]||(a[11]=[v("Bảng ôn nhanh",-1)])]),_:1}),a[13]||(a[13]=l("span",{class:"spacer"},null,-1)),l("button",{class:"lang-btn",title:d(r).lang==="vi"?"Switch to English":"Chuyển sang tiếng Việt",onClick:a[1]||(a[1]=e=>G(d(r).lang==="vi"?"en":"vi"))},D(d(r).lang==="vi"?"EN":"VI"),9,va),l("button",{onClick:X},D(m.value?"Mở mục lục":"Thu gọn mục lục"),1),E(ta),E(s,{to:"/",style:{"text-decoration":"none"}},{default:I(()=>[...a[12]||(a[12]=[l("button",null,"🏠",-1)])]),_:1})]),a[2]||(f(-1,!0),(a[2]=l("div",{ref_key:"contentEl",ref:p,innerHTML:d(pa),onClick:j},null,8,["innerHTML"])).cacheIndex=2,f(1),a[2]),l("div",{ref_key:"nohitEl",ref:w,class:"nohit hidden"},"Không tìm thấy kết quả nào.",512)])])],512)}}});export{Aa as default};
