import{_ as n}from"./NotesPage.vue_vue_type_script_setup_true_lang-Czyt5h5C.js";import{d as t,f as e,e as c,o}from"./index-C4QP9XxE.js";import"./ThemeToggle.vue_vue_type_script_setup_true_lang-1FB1rMjL.js";import"./useStudyClock-DeP7oj86.js";const d=`<h2 class="dom">0. Trang này là gì</h2>

<section id="l0">
<h3>0.1 Vì sao cần lab, khi đã có 586 câu hỏi và 8 bài tài liệu<a class="anch" href="#l0">#</a></h3>
<p>Repo đã có <a href="/ai-200/documents">tài liệu 4 domain</a>, <a href="/ai-200/services">36 mục dịch vụ</a> và <a href="/ai-200/practice">586 câu luyện</a>. Cái còn thiếu là <b>tay</b>. AI-200 hỏi rất nhiều câu dạng <i>"pod này vì sao Pending"</i>, <i>"index có được dùng không"</i>, <i>"lệnh nào, theo thứ tự nào"</i> — đọc thuộc thì quên, gõ một lần thì nhớ.</p>
<p>Tám mảng nặng nhất của đề đều dựng được <b>offline, miễn phí</b>, trên chính máy bạn:</p>
<table>
<thead><tr><th>Mảng</th><th>Chạy bằng</th><th>Domain · trọng số</th></tr></thead>
<tbody>
<tr><td><b>PostgreSQL + pgvector</b></td><td>container <code>pgvector/pgvector:pg17</code></td><td>Domain 2 · <b>25–30%</b></td></tr>
<tr><td><b>Azure Managed Redis</b> (vector + Streams)</td><td>container <code>redis/redis-stack</code></td><td>Domain 2 + 3</td></tr>
<tr><td><b>AKS / Kubernetes</b></td><td>cluster <code>kind</code> 3 node trong Docker</td><td>Domain 1 · <b>20–25%</b></td></tr>
<tr><td><b>Azure Cosmos DB</b></td><td>emulator vNext (Linux) trong Docker</td><td>Domain 2 · <b>25–30%</b></td></tr>
<tr><td><b>KQL / Application Insights</b></td><td>Kusto emulator (kustainer) trong Docker</td><td>Domain 4 · <b>20–25%</b></td></tr>
<tr><td><b>Azure Service Bus</b></td><td>emulator chính thức + SQL Server backend</td><td>Domain 3 · <b>20–25%</b></td></tr>
<tr><td><b>Queue Storage</b></td><td>Azurite</td><td>Domain 3</td></tr>
<tr><td><b>OpenTelemetry</b></td><td>Jaeger all-in-one (nhận OTLP)</td><td>Domain 4</td></tr>
<tr><td><b>Registry và image</b></td><td>container <code>registry:2</code> + Docker trên máy</td><td>Domain 1 · <b>20–25%</b></td></tr>
</tbody></table>
<div class="tip"><b>Mọi con số trên trang này đã được chạy thật</b> trên bộ lab ở <code>labs/ai-200/</code> — PostgreSQL 17 + pgvector 0.8.6, Redis Stack, Kubernetes v1.34 (kind), Cosmos DB emulator vNext (build EN20260907), Kusto emulator, Service Bus emulator, Azurite, Jaeger 1.62 và <code>registry:2</code>. Không có số nào chép từ tài liệu mà chưa kiểm.</div>
<p class="src"><b>Nguồn đối chiếu:</b> <a href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-200" target="_blank" rel="noopener">Study guide AI-200</a> (skills measured 15/04/2026) · <a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener">pgvector</a> · <a href="https://redis.io/docs/latest/develop/data-types/streams/" target="_blank" rel="noopener">Redis Streams</a> · <a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/" target="_blank" rel="noopener">Kubernetes docs</a> · Unit 4 "Full Orchestration – AKS" của khoá Azure Cloud Mastery. Chạy lab ngày 18–19/09/2026.</p>
</section>

<section id="l1">
<h3>0.2 Dựng môi trường — 3 lệnh<a class="anch" href="#l1">#</a></h3>
<pre><button class="copybtn">copy</button><code>cd labs/ai-200
cp .env.example .env          # rồi mở ra đổi các mật khẩu
docker compose up -d          # lần đầu kéo ~3 GB, sau đó vài giây
./psql "SELECT version()"     # Postgres đã lên?
./redis PING                  # Redis đã lên?
curl -s localhost:5000/v2/_catalog          # registry đã lên?
curl -s localhost:16686/api/services        # Jaeger đã lên?
</code></pre>
<p>RedisInsight ở <code>http://localhost:8002</code>, Jaeger ở <code>http://localhost:16686</code>. Postgres ở <code>localhost:5433</code>, registry ở <code>localhost:5000</code> (user/pass trong <code>.env</code> — file này không nằm trong git, chỉ có <code>.env.example</code>). Dựng lại từ đầu: <code>docker compose down -v &amp;&amp; docker compose up -d</code>.</p>
<div class="warn"><b>Bẫy dựng môi trường đã gặp thật:</b> Docker mặc định chỉ cấp <b>64 MB</b> cho <code>/dev/shm</code>. Build index HNSW song song cần shared memory và sẽ chết với lỗi <code>could not resize shared memory segment … No space left on device</code>. <code>docker-compose.yml</code> của lab đã đặt <code>shm_size: 1gb</code> — nếu bạn tự dựng Postgres trong Docker thì nhớ dòng này.</div>
</section>

<section id="l2">
<h3>0.3 Embedding ở đâu ra khi không có Azure OpenAI<a class="anch" href="#l2">#</a></h3>
<p>Lab sinh vector <b>offline</b> bằng <i>feature hashing</i>: băm từng từ về một chiều, đếm tần suất, chuẩn hoá L2 (<code>init/03-embed-fn.sql</code>). Nó <b>không</b> phải embedding ngữ nghĩa — <code>car</code> và <code>automobile</code> không gần nhau — nhưng hai đoạn dùng chung nhiều từ thì thật sự gần nhau, đủ để truy hồi ra kết quả có nghĩa.</p>
<p>Quan trọng hơn: mọi bài về <b>index, opclass, TOAST, ef_search, vacuum</b> chạy đúng y như với embedding thật, vì các cơ chế đó không quan tâm vector từ đâu ra. Muốn dùng vector thật thì đọc <code>labs/06-real-embeddings.md</code>.</p>
<div class="warn"><b>Ghi chú trung thực về benchmark:</b> bảng <code>bench</code> ở lab 02 dùng vector <b>ngẫu nhiên</b>. Số về <b>độ trễ</b> và về cơ chế là thật; nhưng <b>recall</b> đo trên vector ngẫu nhiên thì không đại diện — tài liệu pgvector nói rõ index ANN được tối ưu cho embedding thật, vốn có cấu trúc hình học mà dữ liệu ngẫu nhiên không có.</div>
</section>

<h2 class="dom">1. PostgreSQL và vector — 5 lab</h2>

<section id="l3">
<h3>1.1 Lab 01 · Ba toán tử khoảng cách, nhìn tận mắt<a class="anch" href="#l3">#</a></h3>
<pre><button class="copybtn">copy</button><code>./psql -f labs/01-vector-basics.sql      # ~10 giây</code></pre>
<p>Bảng <code>toy</code> có 6 vector <b>3 chiều</b> đặt tay, để nhẩm được. Cặp quan trọng nhất là <code>a = [1,0,0]</code> và <code>a_long = [10,0,0]</code>: cùng hướng, khác độ dài gấp 10.</p>
<table>
<thead><tr><th>Toán tử</th><th>Là gì</th><th><code>a_long</code> so với <code>a</code></th></tr></thead>
<tbody>
<tr><td><code>&lt;-&gt;</code></td><td>L2 (Euclid)</td><td><b>9.0</b> — thấy chúng rất xa nhau</td></tr>
<tr><td><code>&lt;#&gt;</code></td><td>inner product, trả về số <b>âm</b></td><td>−10.0</td></tr>
<tr><td><code>&lt;=&gt;</code></td><td>cosine</td><td><b>0.0</b> — coi chúng giống hệt</td></tr>
</tbody></table>
<p>Embedding của model ngôn ngữ mang nghĩa ở <b>hướng</b>, không ở độ dài — nên RAG gần như luôn dùng cosine. Dùng L2 trên vector chưa chuẩn hoá là để độ dài văn bản chi phối kết quả.</p>
<div class="tip"><b>Mẹo có trong lab:</b> nếu mọi vector đã chuẩn hoá L2 (độ dài 1) thì xếp hạng theo cosine và theo L2 <b>trùng nhau</b> — lý do nhiều hệ thống chuẩn hoá lúc ghi rồi dùng inner product cho nhanh. Lab in ra cả hai cột để bạn tự đối chiếu.</div>
</section>

<section id="l4">
<h3>1.2 Lab 02 · Seq Scan 35 ms → HNSW 2,5 ms, và bốn cách làm index bị bỏ qua<a class="anch" href="#l4">#</a></h3>
<pre><button class="copybtn">copy</button><code>./psql -f labs/02-index-hnsw-ivfflat.sql   # ~2-4 phút</code></pre>
<p>50.000 vector 384 chiều, 79 MB. Số đo thật trên bộ lab:</p>
<table>
<thead><tr><th></th><th>Không index</th><th>HNSW</th><th>IVFFlat</th></tr></thead>
<tbody>
<tr><th>Truy vấn top-10</th><td>35 ms (Seq Scan)</td><td><b>2,5 ms</b></td><td>1,5 ms (probes=10)</td></tr>
<tr><th>Thời gian build</th><td>—</td><td>23,5 giây</td><td><b>2,3 giây</b></td></tr>
<tr><th>Kích thước index</th><td>—</td><td>98 MB</td><td>79 MB</td></tr>
</tbody></table>
<p><b>Bốn cách làm index vector bị bỏ qua</b> — lab in ra <code>EXPLAIN</code> của cả bốn, đều ra <code>Seq Scan</code>:</p>
<ul>
<li><b>Thiếu <code>LIMIT</code></b> — pgvector chỉ dùng index ANN cho dạng <code>ORDER BY … LIMIT k</code>.</li>
<li><b>Sai toán tử</b> — index khai <code>vector_cosine_ops</code> mà truy vấn dùng <code>&lt;-&gt;</code>.</li>
<li><b>ORDER BY một biểu thức khác</b> — <code>ORDER BY 1 - (emb &lt;=&gt; q) DESC</code> để hiện "similarity". Cứ <code>SELECT</code> similarity ra cho người dùng, nhưng <code>ORDER BY</code> phải giữ nguyên dạng <code>cột &lt;=&gt; tham_số</code>.</li>
<li><b>Planner từ chối</b> — lab mô phỏng bằng <code>SET enable_indexscan = off</code>.</li>
</ul>
<p><code>hnsw.ef_search</code> chỉnh ở mức <b>phiên</b>, không phải lúc build. Đo thật: <code>ef_search=10</code> → 0,84 ms; <code>ef_search=400</code> → 17 ms. Đề hỏi "kết quả thiếu tài liệu liên quan" thì vặn núm này trước khi nghĩ tới đổi loại index.</p>
<div class="warn"><b>Trần số chiều — lab chạy ra đúng thông báo lỗi của đề:</b><br>
<code>CREATE INDEX … USING hnsw (e vector_cosine_ops)</code> trên cột <code>vector(3072)</code> →<br>
<code>ERROR: column cannot have more than 2000 dimensions for hnsw index</code><br>
Kiểu <code>vector</code> <b>lưu</b> được tới 16.000 chiều, nhưng <b>index</b> chỉ tới 2.000. Lối thoát (lab chạy được): <code>CREATE INDEX … USING hnsw ((e::halfvec(3072)) halfvec_cosine_ops)</code> — halfvec index tới 4.000 chiều.</div>
</section>

<section id="l5">
<h3>1.3 Lab 03 · Hỏi 10 dòng, nhận về 0 — bài quan trọng nhất của cả bộ<a class="anch" href="#l5">#</a></h3>
<pre><button class="copybtn">copy</button><code>./psql -f labs/03-rag-filter-hybrid.sql   # cần chạy lab 02 trước</code></pre>
<p>Trong RAG multi-tenant, truy vấn <b>không bao giờ</b> chỉ là "tìm 5 vector gần nhất" — luôn có điều kiện lọc đi kèm. Và chính chỗ đó làm index ANN hành xử khác kỳ vọng.</p>
<p>HNSW duyệt đồ thị và chỉ mở ra <code>ef_search</code> ứng viên, <b>sau đó</b> mới áp <code>WHERE</code>. Lọc càng hiếm thì càng dễ không còn đủ k dòng. Lab lọc ~0,2% số dòng (100 trên 50.000) rồi hỏi 10 dòng — kết quả thật:</p>
<table>
<thead><tr><th>Cấu hình</th><th>Số dòng trả về</th><th>Thời gian</th></tr></thead>
<tbody>
<tr><td><code>iterative_scan = off</code>, <code>ef_search = 40</code></td><td><b>0</b> 😱</td><td>7,5 ms</td></tr>
<tr><td><code>iterative_scan = relaxed_order</code></td><td>10</td><td>54,9 ms</td></tr>
<tr><td><code>ef_search = 1000</code></td><td>10</td><td>8,9 ms</td></tr>
<tr><td><b>Partial index</b> riêng cho tenant</td><td>10</td><td><b>1,6 ms</b></td></tr>
</tbody></table>
<p>Partial index (<code>WHERE tenant_id = 'contoso'</code>) chỉ <b>10 MB</b> so với 98 MB của index đầy đủ, và mọi dòng trong đó đều thoả điều kiện nên không còn chuyện thiếu kết quả.</p>
<div class="tip"><b>Đây không phải lỗi của pgvector.</b> Mọi index ANN đều lọc sau khi duyệt — Cosmos DB và Redis có đúng vấn đề này dưới tên gọi khác. Riêng RediSearch cho phép <b>pre-filter</b> (điều kiện đứng trước dấu <code>=&gt;</code>), xem lab Redis.</div>
<p>Lab còn dựng <b>hybrid search</b> (vector + full-text) hợp nhất bằng <b>RRF</b> với <code>k = 60</code>: dòng nào có mặt ở cả hai nhánh được đẩy lên đầu. Chạy thật thì chunk về dead-letter queue đứng hạng 1 ở cả hai nhánh và thắng tuyệt đối.</p>
</section>

<section id="l6">
<h3>1.4 Lab 04 · Đọc <code>EXPLAIN (ANALYZE, BUFFERS)</code> và bốn lỗi giết index<a class="anch" href="#l6">#</a></h3>
<pre><button class="copybtn">copy</button><code>./psql -f labs/04-explain-tuning.sql    # 200.000 dòng, ~1 phút</code></pre>
<table>
<thead><tr><th>Lỗi</th><th>Số đo thật trong lab</th></tr></thead>
<tbody>
<tr><td><b>Statistics cũ</b></td><td>ước lượng <code>rows=784</code> vs thực tế <code>actual rows=400</code>; sau <code>ANALYZE</code> còn <code>rows=399</code></td></tr>
<tr><td><b>Hàm bọc quanh cột</b></td><td><code>WHERE lower(email) = …</code> → Parallel Seq Scan 47 ms. Index trên biểu thức <code>((lower(email)))</code> → Index Scan <b>0,7 ms</b></td></tr>
<tr><td><b>Sai thứ tự cột composite</b></td><td><code>(created_at, tenant_id)</code> → <b>67 buffer</b>; <code>(tenant_id, created_at DESC)</code> → <b>23 buffer</b>. Cả hai đều "dùng index" — phải nhìn BUFFERS mới thấy</td></tr>
<tr><td><b>Rows Removed by Filter</b></td><td>Index đầy đủ: <code>Heap Blocks 2142</code>, loại bỏ 3.959 dòng. Partial index <code>WHERE status &gt;= 500</code>: <code>Heap Blocks 41</code>, loại bỏ 0. Index 1504 kB → <b>40 kB</b></td></tr>
</tbody></table>
<p>Lab kết thúc bằng bảng xếp hạng truy vấn tốn kém nhất từ <code>pg_stat_statements</code> — trên Azure Database for PostgreSQL flexible server còn có Query Store (<code>pg_qs.query_capture_mode</code>) lưu lịch sử theo thời gian.</p>
</section>

<section id="l7">
<h3>1.5 Lab 05 · MVCC, VACUUM, TOAST — vì sao bảng vector phình<a class="anch" href="#l7">#</a></h3>
<pre><button class="copybtn">copy</button><code>./psql -f labs/05-mvcc-vacuum-toast.sql    # ~1,5 phút</code></pre>
<div class="tip"><b>Bản thân sự chậm là một bài học:</b> lệnh <code>UPDATE</code> 20.000 dòng ở lab này mất hơn 60 giây (cả lab đo được 86 giây), vì mỗi version dòng mới phải được chèn vào đồ thị HNSW. Ghi trên bảng có index vector đắt hơn hẳn bảng thường — cân nhắc khi thiết kế đường ghi nóng.</div>
<p>Lab chỉ sửa cột <code>body</code> (vài byte), <b>không</b> đụng cột embedding. MVCC vẫn ghi lại <b>toàn bộ</b> dòng, kể cả vector 1,5 KB đi kèm:</p>
<table>
<thead><tr><th>Bước</th><th>heap</th><th>dead tuple</th></tr></thead>
<tbody>
<tr><td>Ban đầu (20.000 dòng)</td><td>31 MB</td><td>0</td></tr>
<tr><td>Sau <code>UPDATE … SET body = body || '!'</code></td><td><b>63 MB</b></td><td>20.000</td></tr>
<tr><td>Sau <code>VACUUM</code></td><td><b>63 MB</b> (không giảm!)</td><td>0</td></tr>
<tr><td>Sau <code>VACUUM FULL</code></td><td>31 MB</td><td>0</td></tr>
</tbody></table>
<p>Đây là câu trả lời cho <i>"đã xoá dữ liệu mà dung lượng đĩa không giảm"</i>: <code>VACUUM</code> thường chỉ đánh dấu chỗ để <b>tái dùng</b>, không trả về hệ điều hành. <code>VACUUM FULL</code> trả được, nhưng giữ khoá <code>ACCESS EXCLUSIVE</code> — chặn cả đọc lẫn ghi.</p>
<p><b>TOAST</b> — lab dựng riêng bảng <code>vector(1536)</code> để chứng minh (vector 384 chiều chỉ 1.544 byte, chưa vượt ngưỡng ~2 KB nên không thấy gì):</p>
<table>
<thead><tr><th></th><th>heap chính</th><th>bảng TOAST</th></tr></thead>
<tbody>
<tr><td>Mặc định (EXTENDED)</td><td>104 kB</td><td><b>16 MB</b></td></tr>
<tr><td>Sau <code>SET STORAGE PLAIN</code> + viết lại bảng</td><td><b>16 MB</b></td><td>—</td></tr>
</tbody></table>
<div class="warn"><b>Con số đã kiểm trên PostgreSQL 17:</b> <code>autovacuum_vacuum_threshold</code> = <b>50</b>, <code>autovacuum_vacuum_scale_factor</code> = <b>0.2</b>. Ngưỡng dọn = threshold + scale_factor × số dòng, nên bảng 200 triệu dòng phải tích luỹ <b>40 triệu</b> dead tuple mới được dọn. Chỉnh riêng cho bảng nóng: <code>ALTER TABLE chunk SET (autovacuum_vacuum_scale_factor = 0.02)</code>.</div>
<p>Lab còn có bài tập <b>hai cửa sổ</b>: mở một transaction rồi để đó, chạy VACUUM ở cửa sổ kia và thấy dead tuple <b>không</b> về 0 — kẻ thù số một của autovacuum là transaction mở lâu.</p>
</section>

<h2 class="dom">2. Azure Managed Redis — 2 lab</h2>

<section id="l8">
<h3>2.1 Lab R1 · Vector search bằng RediSearch<a class="anch" href="#l8">#</a></h3>
<pre><button class="copybtn">copy</button><code>./redis -f labs/redis/01-vector-search.sh</code></pre>
<p>Azure Managed Redis chạy trên Redis Enterprise nên có sẵn module RediSearch — đúng thứ container <code>redis-stack</code> cung cấp, cú pháp <code>FT.*</code> giống hệt.</p>
<pre><button class="copybtn">copy</button><code>FT.CREATE idx:chunk ON HASH PREFIX 1 chunk: SCHEMA
  tenant TAG  topic TAG  body TEXT
  emb VECTOR HNSW 6 TYPE FLOAT32 DIM 4 DISTANCE_METRIC COSINE
</code></pre>
<p>Điểm mạnh của RediSearch so với index ANN thuần: <b>pre-filter</b> — điều kiện lọc nằm <b>trước</b> dấu <code>=&gt;</code> nên nó thu hẹp tập ứng viên <i>trước khi</i> tìm láng giềng, đúng vấn đề mà lab 03 của pgvector vấp phải:</p>
<pre><button class="copybtn">copy</button><code>FT.SEARCH idx:chunk "(@tenant:{contoso})=&gt;[KNN 2 @emb $BLOB AS score]"
  SORTBY score ASC RETURN 3 score topic body DIALECT 2 PARAMS 2 BLOB &lt;bytes&gt;
</code></pre>
<div class="warn"><b>Ba lỗi lab cố tình dạy:</b><br>
1. <b>Thiếu <code>DIALECT 2</code></b> → lỗi cú pháp ở mọi truy vấn KNN.<br>
2. <b><code>DIM</code> khai sai số chiều</b> → tài liệu bị bỏ qua, index rỗng mà <b>không</b> báo lỗi ở <code>HSET</code>. Soi bằng <code>hash_indexing_failures</code> trong <code>FT.INFO</code>.<br>
3. <b>Gửi vector dạng chuỗi JSON</b> → phải là <b>byte</b> float32 little-endian (<code>np.array(…, dtype=np.float32).tobytes()</code>).</div>
</section>

<section id="l9">
<h3>2.2 Lab R2 · Streams vs pub/sub — hàng đợi việc cho pipeline embedding<a class="anch" href="#l9">#</a></h3>
<pre><button class="copybtn">copy</button><code>./redis -f labs/redis/02-streams.sh</code></pre>
<p>Lab bắt đầu bằng một dòng chứng minh: <code>PUBLISH</code> trả về <b>số subscriber đã nhận</b>. Bằng <b>0</b> nghĩa là message vừa rồi rơi vào hư không — không hàng đợi, không lưu, không đọc lại được.</p>
<p>Rồi đi trọn vòng đời của một job: <code>XADD</code> → <code>XGROUP CREATE</code> → <code>XREADGROUP</code> (mỗi message về <b>đúng một</b> consumer) → <code>XPENDING</code> → worker chết → <code>XAUTOCLAIM</code> → <code>XACK</code>.</p>
<div class="tip"><b>Điều lab chứng minh mà tài liệu hay nói chung chung:</b> <code>XTRIM MAXLEN ~ 10</code> trên stream 53 entry <b>không xoá gì cả</b> — dấu <code>~</code> cho phép Redis dừng ở ranh giới node nội bộ, và cả 53 entry đang nằm gọn trong một node. <code>XTRIM MAXLEN 10</code> (chính xác) thì về đúng 10. Đó là sự đánh đổi thật của <code>~</code>: chi phí O(1) khấu hao, đổi lại độ chính xác.</div>
<p>Chốt lại: <b>Streams</b> nhanh và nằm sẵn trong Redis bạn đã có; <b>Service Bus</b> mới có DLQ, scheduled message, duplicate detection, session, transaction. Tích hợp giữa các <i>hệ thống</i> thì Service Bus; điều phối trong <i>một</i> hệ thống thì Streams.</p>
</section>

<h2 class="dom">3. Azure Cosmos DB — 4 lab trên emulator vNext</h2>

<section id="l18">
<h3>3.1 Dựng emulator và điều đầu tiên phải biết về nó<a class="anch" href="#l18">#</a></h3>
<pre><button class="copybtn">copy</button><code>docker compose up -d cosmos          # ~40 giây để ready
curl http://localhost:8084/ready     # health probe
</code></pre>
<p>Emulator <b>vNext</b> (Linux, GA tháng 6/2026) chạy hẳn trong Docker, không cần subscription. Gateway ở <code>http://localhost:8081</code> — mặc định là <b>HTTP</b>, không phải HTTPS. Data Explorer ở <code>http://localhost:1234</code>.</p>
<div class="warn"><b>SDK Python dùng HTTP được; SDK .NET và Java thì KHÔNG.</b> Hai SDK đó bắt buộc HTTPS — phải đổi <code>PROTOCOL: https</code> trong compose, và Java còn phải import certificate vào trust store. Lab này dùng Python nên để nguyên HTTP.</div>
<pre><button class="copybtn">copy</button><code>./cosmos -f labs/cosmos/01-partition-keys.py    # hierarchical partition key
./cosmos -f labs/cosmos/02-vector-search.py     # vector policy, diskANN, VectorDistance
./cosmos -f labs/cosmos/03-change-feed.py       # change feed, continuation token
./cosmos -f labs/cosmos/04-batch-ttl-patch.py   # transactional batch, TTL, patch

./cosmos 'ls'                                   # CLI có sẵn trong image, không cần SDK
</code></pre>
<p>Không phải cài Python hay pip trên máy — <code>./cosmos -f</code> chạy script trong một container <code>tools</code> nhỏ có sẵn <code>azure-cosmos</code>.</p>
</section>

<section id="l19">
<h3>3.2 Thứ quan trọng nhất: emulator dạy được gì, KHÔNG dạy được gì<a class="anch" href="#l19">#</a></h3>
<div class="warn"><b>Emulator trả <code>RU = 1</code> cho MỌI thao tác.</b> Lab 01 in ra cột RU của năm truy vấn khác nhau — point read, single-partition, và cả fan-out quét mọi partition — tất cả đều ra <b>1</b>. Bảng feature support ghi thẳng <i>Request Units — Not yet implemented</i>. Mà RU lại là một trong những chủ đề bị hỏi nhiều nhất. Kết luận: emulator dạy <b>định tuyến</b>, không dạy <b>chi phí</b>.</div>
<table>
<thead><tr><th>Học được ở local</th><th>Phải chạy trên Azure</th></tr></thead>
<tbody>
<tr><td>Khai hierarchical partition key, <code>kind: MultiHash</code>, trần 3 tầng</td><td>Chi phí <b>RU</b> của point read vs fan-out</td></tr>
<tr><td>Truy vấn nào route gọn, truy vấn nào fan-out</td><td>Physical partition split (50 GB), trần 20 GB logical partition</td></tr>
<tr><td>Vector embedding policy, <code>VectorDistance</code>, <code>TOP N</code></td><td>Trần chiều của <code>flat</code> (505) / <code>quantizedFlat</code> (4096) — emulator <b>chỉ</b> hỗ trợ <code>diskANN</code></td></tr>
<tr><td>Change feed, continuation token, xoá không xuất hiện</td><td>Ngưỡng 1.000 vector của quantizedFlat/diskANN</td></tr>
<tr><td>Batch all-or-nothing, giới hạn một partition key</td><td><code>searchListSizeMultiplier</code>, tính bất định của diskANN</td></tr>
<tr><td>TTL ba tầng, patch</td><td>Chế độ <code>AllVersionsAndDeletes</code> (cần continuous backup)</td></tr>
</tbody></table>
<p>Hai dòng khác đáng nhớ trong bảng chính thức: <b>Create collection with custom index policy — No-op</b> (emulator nhận indexing policy nhưng <i>không</i> tối ưu truy vấn theo nó, nên mọi kết luận về hiệu năng index ở local đều vô nghĩa) và <b>Stored procedures / Triggers / UDFs — Not planned</b>.</p>
<p class="src"><b>Nguồn:</b> <a href="https://learn.microsoft.com/azure/cosmos-db/emulator-linux#feature-support" target="_blank" rel="noopener">Feature support của emulator Linux vNext</a> · <a href="https://github.com/Azure/azure-cosmos-db-emulator-docker/issues/350" target="_blank" rel="noopener">issue #350</a> (truy vấn vector kèm lọc bằng hàm hệ thống trả HTTP 500).</p>
</section>

<section id="l20">
<h3>3.3 Lab C1 · Hierarchical partition key và định tuyến truy vấn<a class="anch" href="#l20">#</a></h3>
<p>Lab tạo container phân cấp <code>/tenantId</code> &gt; <code>/userId</code> &gt; <code>/sessionId</code> rồi chạy năm truy vấn. Kết quả thật:</p>
<table>
<thead><tr><th>Lọc theo</th><th>Định tuyến</th><th>Số item</th></tr></thead>
<tbody>
<tr><td>Đủ 3 tầng</td><td>Một partition duy nhất</td><td>1</td></tr>
<tr><td>Tiền tố 2 tầng</td><td>Cross-partition <b>có đích</b></td><td>2</td></tr>
<tr><td>Tiền tố 1 tầng</td><td>Cross-partition <b>có đích</b></td><td>4</td></tr>
<tr><td>Chỉ tầng giữa</td><td><b>Fan-out</b> mọi partition</td><td>4</td></tr>
<tr><td>Chỉ tầng cuối</td><td><b>Fan-out</b> mọi partition</td><td>4</td></tr>
</tbody></table>
<p>Khai 4 tầng thì emulator chặn đúng như Azure: <code>There must be atleast 1 partition key path and at most 3 partition key paths</code>. Point read cũng phải truyền <b>đủ</b> khoá theo đúng thứ tự, thiếu một tầng là lỗi.</p>
<div class="tip"><b>Ba điều lab nhắc lại:</b> hierarchical partition key chỉ đặt được <b>lúc tạo container</b>, không đổi được · cardinality tầng 1 thấp (5 tenant) thì mọi ghi dồn vào một physical partition — Microsoft khuyên dùng <b>synthetic key</b>, không phải hierarchical · thêm <code>id</code> của item làm tầng cuối là mẹo chắc ăn để vượt trần 20 GB.</div>
</section>

<section id="l21">
<h3>3.4 Lab C2 · Vector search — và khác biệt ngược chiều với pgvector<a class="anch" href="#l21">#</a></h3>
<pre><button class="copybtn">copy</button><code>SELECT TOP 3 c.id, c.topic, VectorDistance(c.embedding, @v) AS score
FROM c
ORDER BY VectorDistance(c.embedding, @v)
</code></pre>
<p>Kết quả thật với vector truy vấn <code>[1,0,0,…]</code>:</p>
<pre><code>c1  aks    score=1.0000   (trùng khớp hoàn toàn)
c2  aks    score=0.9487
c6  otel   score=0.0000   (vuông góc)
</code></pre>
<div class="warn"><b>Đọc kỹ cột score — đây là chỗ dễ sai nhất khi chuyển qua lại giữa hai hệ:</b>
<ul>
<li>Với cosine, <code>VectorDistance</code> trả về <b>ĐỘ GIỐNG</b>: <code>1</code> = trùng khớp, thang <code>-1..+1</code>. Còn <code>&lt;=&gt;</code> của pgvector là <b>KHOẢNG CÁCH</b>: <code>0</code> = trùng khớp. <b>Ngược chiều nhau.</b></li>
<li>Nhưng cả hai đều viết <code>ORDER BY</code> <b>không có</b> <code>DESC</code>: Cosmos tự hiểu "giống nhất trước" cho cả ba hàm khoảng cách. Thêm <code>DESC</code> vào truy vấn Cosmos là tự đảo ngược kết quả.</li>
<li>Luôn có <code>TOP N</code> — thiếu nó là RU và độ trễ tăng vọt.</li>
</ul></div>
<p>Lab cũng cho thấy hai thứ dễ hiểu nhầm: <code>excludedPaths</code> phải loại <code>/embedding/*</code> khỏi index thường (nếu không, mỗi lần ghi phải index cả 1536 con số), và thử tạo index <code>flat</code> thì emulator trả <code>only 'diskANN' type is currently supported</code> — <b>không</b> phải vì trần 505 chiều, mà vì emulator chỉ cài đặt diskANN.</p>
</section>

<section id="l22">
<h3>3.5 Lab C3 · Change feed — và vì sao nó là câu trả lời đúng<a class="anch" href="#l22">#</a></h3>
<p>Lab ghi 3 document, đọc feed từ đầu, lấy continuation token, ghi thêm rồi đọc lại từ token. Kết quả thật: sau token chỉ nhận <b>2 thay đổi</b> (<code>d4</code> mới tạo và <code>d1</code> vừa sửa).</p>
<table>
<thead><tr><th>Quan sát</th><th>Ý nghĩa</th></tr></thead>
<tbody>
<tr><td><code>d1</code> xuất hiện lại sau khi sửa</td><td>Chế độ mặc định trả về <b>bản mới nhất</b>, không phải từng lần sửa. Sửa 5 lần rồi mới đọc thì chỉ nhận 1 bản → consumer phải <b>idempotent</b></td></tr>
<tr><td>Xoá <code>d2</code> → feed <b>không</b> có <code>d2</code></td><td>Delete không xuất hiện ở chế độ mặc định. Dùng soft delete + TTL, hoặc chế độ <code>AllVersionsAndDeletes</code></td></tr>
</tbody></table>
<p>Lab kết bằng mẫu <code>@app.cosmos_db_trigger</code> của Azure Functions với bốn điểm hay hỏi: lease container là nơi lưu checkpoint (mỗi lease = một partition key range) · số instance tối đa bị chặn bởi <b>số physical partition</b> · <code>max_items_per_invocation</code> chính là <i>target executions per instance</i> trong công thức target-based scaling · thứ tự chỉ bảo đảm <b>trong một partition key</b>.</p>
</section>

<section id="l23">
<h3>3.6 Lab C4 · Transactional batch, TTL, patch<a class="anch" href="#l23">#</a></h3>
<p>Lab chạy một batch 3 thao tác thành công, rồi một batch có một thao tác lỗi (<code>id</code> trùng → 409). Kết quả thật: <b>cả batch bị huỷ</b> — <code>b4</code> và <code>b5</code> không được tạo dù bản thân chúng hợp lệ. Batch vượt ranh giới partition key thì bị chặn với status 400.</p>
<div class="tip"><b>Giới hạn phải nhớ:</b> transactional batch tối đa <b>100 thao tác</b> và <b>2 MB</b>, và mọi thao tác phải cùng <b>một giá trị partition key</b>. Cần ghi nhiều partition thì dùng <b>Bulk</b> (song song, <i>không</i> có transaction) chứ không phải batch. Patch tối đa <b>10 thao tác</b> mỗi lần gọi.</div>
<p>Phần TTL làm rõ thứ tự ưu tiên ba tầng — đây là chỗ hay bị hỏi ngược:</p>
<table>
<thead><tr><th>Cấu hình</th><th>Kết quả</th></tr></thead>
<tbody>
<tr><td>container <code>default_ttl</code> không khai</td><td><b>TẮT</b> hẳn — trường <code>ttl</code> của item bị <b>bỏ qua</b></td></tr>
<tr><td>container <code>default_ttl = -1</code></td><td>BẬT, item không hết hạn trừ khi tự khai</td></tr>
<tr><td>container <code>default_ttl = N</code></td><td>Mọi item hết hạn sau N giây</td></tr>
<tr><td>item <code>ttl = -1</code></td><td>Item này <b>không</b> hết hạn, dù container đặt N</td></tr>
</tbody></table>
<p>TTL xoá bằng <b>RU còn dư</b> ở chế độ nền nên rẻ hơn nhiều so với tự chạy <code>DELETE</code> — đúng cách để dọn chunk cũ trong RAG.</p>
</section>

<h2 class="dom">4. KQL — 4 lab trên Kusto emulator</h2>

<section id="l24">
<h3>4.1 Dựng emulator và nạp dữ liệu Application Insights giả lập<a class="anch" href="#l24">#</a></h3>
<p>Kusto emulator chạy <b>đúng engine truy vấn của Azure Data Explorer</b> trong Docker. Application Insights và Log Analytics cũng dùng KQL, nên mọi truy vấn viết ở đây copy thẳng lên Azure Monitor được.</p>
<pre><button class="copybtn">copy</button><code>docker compose up -d kusto            # ~1 phút để ready

# tạo database MỘT LẦN (chạy ở database mặc định)
./kql -d NetDefaultDB -m '.create database ailab persist (@"/kustodata/dbs/ailab/md", @"/kustodata/dbs/ailab/data")'

./kql -f labs/kql/00-seed.kql         # 4 bảng, 64.000 dòng
./kql "AppRequests | take 3"
</code></pre>
<p>Bốn bảng giữ <b>đúng tên cột</b> của schema Application Insights:</p>
<table>
<thead><tr><th>Bảng</th><th>Dòng</th><th>Nội dung</th></tr></thead>
<tbody>
<tr><td><code>AppRequests</code></td><td>20.000</td><td>4 endpoint, trải đều 24 giờ, ~3% lỗi 500 và ~5% lỗi 429, có <code>Properties</code> (token, tenant, model)</td></tr>
<tr><td><code>AppDependencies</code></td><td>40.001</td><td>1–3 dependency mỗi request: Azure OpenAI, PostgreSQL, Redis</td></tr>
<tr><td><code>AppExceptions</code></td><td>303</td><td><b>Cố ý</b> chỉ sinh cho một nửa số lỗi 500 — nguyên liệu cho bài <code>leftanti</code></td></tr>
<tr><td><code>AppTraces</code></td><td>4.000</td><td>có <code>Properties</code> để luyện bóc <code>dynamic</code></td></tr>
</tbody></table>
<div class="tip"><code>persist</code> trỏ vào volume <code>/kustodata</code> nên dữ liệu <b>sống qua restart container</b>. Emulator <b>không</b> hỗ trợ HTTPS và <b>không</b> hỗ trợ Entra ID — chỉ cần <code>curl</code>, không cần token.</div>
</section>

<section id="l25">
<h3>4.2 Lab 03 · <code>join</code> mặc định KHÔNG phải inner join<a class="anch" href="#l25">#</a></h3>
<p>Nếu chỉ nhớ được một điều về KQL thì nhớ điều này. Với <code>AppDependencies</code> (khoá lặp 1–3 lần) đặt ở bên <b>trái</b>:</p>
<table>
<thead><tr><th>Truy vấn</th><th>Số dòng thật</th></tr></thead>
<tbody>
<tr><td><code>join (AppRequests) on OperationId</code> — mặc định <code>innerunique</code></td><td><b>20.000</b></td></tr>
<tr><td><code>join kind=inner (AppRequests) on OperationId</code></td><td><b>40.001</b></td></tr>
</tbody></table>
<div class="warn">Chênh lệch <b>một nửa</b>, và Kusto <b>không báo gì cả</b>. <code>innerunique</code> khử trùng lặp bảng bên trái theo khoá <i>trước khi</i> ghép. Đặt <code>AppRequests</code> (khoá duy nhất) ở bên trái thì cả hai đều ra 40.001 — nên bẫy này <b>chỉ lộ khi bảng trái có khoá lặp</b>, tức là đúng lúc bạn đang đếm log chi tiết.</div>
<p>Lab còn chạy thật các flavor còn lại:</p>
<ul>
<li><b><code>leftanti</code></b> — "cái gì vắng mặt": 1.627 request lỗi nhưng chỉ 303 có exception → <b>1.324 lỗi bị nuốt</b> mà không ghi lại gì.</li>
<li><b><code>leftsemi</code></b> — lọc theo danh sách mà không kéo thêm cột.</li>
<li><b><code>lookup</code></b> với <code>datatable</code> để ánh xạ service → đội trực.</li>
<li><b><code>union</code></b> ghép theo <i>dòng</i>, khác hẳn <code>join</code> ghép theo <i>cột</i>.</li>
<li>KQL <b>không có cross join</b> — làm bằng cột giả <code>extend k = 1</code>.</li>
<li>Hint <code>hint.strategy=broadcast</code> khi bảng trái rất nhỏ; bảng nhỏ luôn đặt bên trái.</li>
</ul>
</section>

<section id="l26">
<h3>4.3 Lab 01 và 02 · Nền tảng và phân tích theo thời gian<a class="anch" href="#l26">#</a></h3>
<table>
<thead><tr><th>Điều lab chứng minh</th><th>Số thật</th></tr></thead>
<tbody>
<tr><td><code>has</code> khớp theo <b>từ</b> và dùng được index; <code>contains</code> khớp chuỗi con và phải quét</td><td><code>has "embed"</code> = 6000 · <code>has "mbe"</code> = <b>0</b> · <code>contains "mbe"</code> = 6000</td></tr>
<tr><td><code>dcount()</code> là <b>xấp xỉ</b> (HyperLogLog), có thể ra nhiều hơn cả số dòng</td><td>bảng 20.000 dòng → <code>dcount</code> = <b>20.025</b>, <code>count_distinct</code> = 20.000</td></tr>
<tr><td>Trung bình che mất đuôi — luôn nhìn p95/p99</td><td><code>POST /embed</code>: avg 1839 ms nhưng p95 <b>3160 ms</b></td></tr>
<tr><td><code>bin()</code> bỏ qua xô rỗng; <code>make-series</code> điền đầy (mặc định 0)</td><td>—</td></tr>
</tbody></table>
<p>Lab 02 kết bằng <b>bốn chỉ số vàng</b> của Google SRE gộp trong một truy vấn: Traffic · Errors · Latency · Saturation. Với AI workload, <b>429 chính là tín hiệu saturation</b> — bạn đang đụng trần TPM/RPM của deployment, không phải server yếu.</p>
</section>

<section id="l27">
<h3>4.4 Lab 04 · <code>materialize</code>, <code>dynamic</code>, và bộ truy vấn thật<a class="anch" href="#l27">#</a></h3>
<p><code>let</code> chỉ là <b>bí danh</b>: tham chiếu ba lần là Kusto tính ba lần. <code>materialize()</code> tính một lần và giữ kết quả — kèm hai kỹ thuật bắt buộc: đẩy filter vào <b>trong</b> materialize, và <code>project</code> chỉ những cột cần, để phần cache nhỏ nhất có thể (cache <b>5 GB mỗi node</b>, dùng chung cho mọi truy vấn đang chạy).</p>
<div class="warn"><b>Bẫy <code>dynamic</code> — lab chạy cả ba để thấy:</b>
<ul>
<li><code>sum(Properties.promptTokens)</code> → <b>lỗi</b></li>
<li><code>Properties.promptTokens + Properties.completionTokens</code> → <b>lỗi</b></li>
<li><code>sum(toint(Properties.promptTokens))</code> → chạy, ra 20.100</li>
</ul>
Hai lỗi đầu chỉ trả về <code>BadRequest</code> trống trơn. Quy tắc: mọi thứ lấy ra từ cột dynamic đều phải qua <code>tostring</code>/<code>toint</code>/<code>todouble</code> trước khi tính toán.</div>
<p>Bốn truy vấn thật khép lại bài: endpoint nào ăn nhiều token nhất (theo tenant và model) · bão 429 xảy ra giờ nào · lần theo <b>một</b> request qua cả bốn tầng bằng <code>OperationId</code> · và một bảng điều khiển sáu chỉ số trên một màn hình.</p>
</section>

<section id="l28">
<h3>4.5 Ba bẫy của emulator đã vấp khi làm lab này<a class="anch" href="#l28">#</a></h3>
<div class="warn">
<ol>
<li><b>Lệnh quản trị phải bắt đầu bằng dấu <code>.</code> ở ngay ký tự đầu.</b> Chỉ cần một dòng <code>// ghi chú</code> phía trên là cả lệnh hỏng, và server chỉ trả <code>BadRequest</code> trống trơn không nói lý do. (Truy vấn thường thì comment ở đầu vô hại.) Wrapper <code>./kql</code> tự cắt phần comment trước khi gửi lệnh quản trị.</li>
<li><b>Số nguyên trong KQL là <code>long</code>, không phải <code>int</code>.</b> Ghi <code>case(..., 3, 2, 1)</code> vào cột khai <code>int</code> là <code>.set-or-append</code> trả <code>BadRequest</code>. Phải bọc <code>toint(...)</code>.</li>
<li><b>Mọi nhánh của <code>union</code> phải cho cột cùng kiểu.</b> <code>count()</code> ra <code>long</code> còn <code>toint(avg(...))</code> ra <code>int</code> → Kusto từ chối.</li>
</ol>
</div>
<p><code>| render timechart</code> chạy được nhưng emulator trả dữ liệu chứ không vẽ — cú pháp vẫn giống hệt Azure Monitor.</p>
</section>

<h2 class="dom">5. AKS / Kubernetes — 5 lab</h2>

<section id="l10">
<h3>5.1 Vì sao dùng <code>kind</code> chứ không phải AKS thật<a class="anch" href="#l10">#</a></h3>
<p><code>az aks create</code> tốn tiền và mất 5–10 phút. Nhưng thứ đề AI-200 thật sự hỏi — <code>kubectl</code>, manifest, probe, scheduling, ConfigMap/Secret, HPA, PDB — đều là Kubernetes <b>thuần</b> và giống hệt trên AKS. Phần <i>chỉ</i> có ở Azure thì mục 3.6 ghi rõ lệnh và bẫy.</p>
<pre><button class="copybtn">copy</button><code>curl -sSLo ~/.local/bin/kubectl "https://dl.k8s.io/release/$(curl -sSL https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
curl -sSLo ~/.local/bin/kind    https://kind.sigs.k8s.io/dl/v0.30.0/kind-linux-amd64
chmod +x ~/.local/bin/kubectl ~/.local/bin/kind
export PATH="$HOME/.local/bin:$PATH"

cd labs/ai-200
kind create cluster --config labs/k8s/kind-cluster.yaml   # ~1,5 phút
kubectl get nodes
</code></pre>
<p>Cluster có 1 control-plane + 2 worker, gán sẵn label mô phỏng AKS: <code>agentpool=cpupool</code> / <code>gpupool</code> và <code>topology.kubernetes.io/zone=zone-1</code> / <code>zone-2</code> — để bài scheduling có chỗ mà rải.</p>
</section>

<section id="l11">
<h3>5.2 Lab K1 · Deployment, Service, QoS, EndpointSlice<a class="anch" href="#l11">#</a></h3>
<pre><button class="copybtn">copy</button><code>kubectl apply -f labs/k8s/01-deployment.yaml
kubectl get pods -o custom-columns='NAME:.metadata.name,QOS:.status.qosClass,NODE:.spec.nodeName'
</code></pre>
<p>Ba chỗ manifest bị hỏi nhiều nhất, được đánh dấu <code>[THI]</code> ngay trong file:</p>
<ul>
<li><code>apiVersion: apps/v1</code> cho Deployment — không phải <code>v1</code>.</li>
<li><code>spec.selector.matchLabels</code> <b>phải khớp</b> <code>template.metadata.labels</code>.</li>
<li>Service tìm pod bằng <b>label</b>, không bằng tên Deployment.</li>
</ul>
<p>Pod trong lab ra QoS <b>Burstable</b> vì <code>limits ≠ requests</code>. Muốn <b>Guaranteed</b> (bị evict sau cùng) thì limit phải <b>bằng</b> request ở <i>cả</i> CPU lẫn memory, trên <i>mọi</i> container của pod.</p>
</section>

<section id="l12">
<h3>5.3 Lab K2 · Probe và rolling update — lệnh đáng giá nhất cả bộ<a class="anch" href="#l12">#</a></h3>
<pre><button class="copybtn">copy</button><code>kubectl apply -f labs/k8s/02-probes-rollout.yaml

# Chạy ở giây thứ 8, rồi chạy lại ở giây thứ 40:
kubectl get endpointslice -l kubernetes.io/service-name=slow-api \\
  -o jsonpath='{range .items[*].endpoints[*]}{.addresses[0]}{"  ready="}{.conditions.ready}{"\\n"}{end}'
</code></pre>
<p>Container cố tình mất 30 giây mới sẵn sàng. Kết quả thật:</p>
<pre><code>t+8s    10.244.1.4  ready=false     &lt;- readiness chưa pass
t+40s   10.244.1.4  ready=true      &lt;- giờ mới nhận traffic
</code></pre>
<div class="warn"><b>Nói cho chính xác:</b> địa chỉ <b>vẫn nằm</b> trong EndpointSlice, nhưng mang <code>conditions.ready=false</code>, và kube-proxy chỉ định tuyến tới endpoint <i>ready</i>. Nói "pod bị gỡ khỏi Service" là đúng về hiệu quả, nhưng khi nhìn API thì phải soi trường <code>ready</code> chứ đừng chỉ đếm số địa chỉ — <code>kubectl get endpointslice</code> vẫn hiện đủ 3 IP ở giây thứ 8.</div>
<table>
<thead><tr><th>Probe</th><th>Trả lời</th><th>Fail thì kubelet làm gì</th></tr></thead>
<tbody>
<tr><td><b>startupProbe</b></td><td>Khởi động xong chưa?</td><td>Giết container theo <code>restartPolicy</code></td></tr>
<tr><td><b>livenessProbe</b></td><td>Tiến trình còn sống?</td><td><b>Restart container</b></td></tr>
<tr><td><b>readinessProbe</b></td><td>Nhận traffic được chưa?</td><td>Đánh dấu endpoint <code>ready=false</code> — <b>không</b> restart</td></tr>
</tbody></table>
<p>Mặc định mỗi probe: <code>periodSeconds 10</code>, <code>failureThreshold 3</code>, <code>timeoutSeconds 1</code>, <code>initialDelaySeconds 0</code>, <code>successThreshold 1</code> → container bị restart sau ~<b>30 giây</b> liveness fail liên tục, và <code>timeoutSeconds: 1</code> rất dễ fail oan.</p>
<div class="tip"><b>startupProbe đè hai probe kia:</b> khi có nó, kubelet <b>không chạy</b> liveness và readiness cho tới khi startup pass. Đúng thuốc cho container nạp model 3 phút — thay vì nới <code>initialDelaySeconds</code> của liveness (làm chậm luôn khả năng phát hiện treo về sau).</div>
</section>

<section id="l13">
<h3>5.4 Lab K3 · ConfigMap, Secret, và sự thật về "base64 là mã hoá"<a class="anch" href="#l13">#</a></h3>
<pre><button class="copybtn">copy</button><code>kubectl create configmap ai-config --from-literal=MODEL_NAME=gpt-4o
kubectl create secret generic api-secret --from-literal=API_KEY=abc123
kubectl apply -f labs/k8s/03-configmap-secret.yaml

kubectl get secret api-secret -o jsonpath='{.data.API_KEY}' | base64 -d   # <- thử đi
</code></pre>
<div class="warn"><b>Đính chính một điểm của slide khoá học.</b> Slide Unit 4 viết <i>"Secrets are base64-encoded in transit and at rest – not plain text like ConfigMaps"</i>, nghe như một tính chất bảo mật. Nói cho đúng:
<ul>
<li><b>base64 là mã hoá ký tự, không phải mã hoá bảo mật</b> — lệnh một dòng ở trên giải ra trong một giây.</li>
<li>Secret <b>không</b> được mã hoá at rest theo mặc định; phải bật encryption at rest cho etcd hoặc dùng KMS provider.</li>
<li>Giá trị thật của Secret nằm chỗ khác: nó là đối tượng RBAC riêng, không bị in ra trong <code>kubectl describe</code>, và không nằm trong image.</li>
</ul>
Cách đúng cho production trên AKS: <b>không lưu secret trong cluster</b> — dùng Secrets Store CSI driver gắn Key Vault, hoặc workload identity để pod tự lấy token.</div>
<p>Khác biệt phải nhớ giữa hai cách gắn: <b>env</b> thì <b>không</b> tự cập nhật khi ConfigMap đổi (phải <code>kubectl rollout restart</code>); <b>volume</b> thì kubelet đồng bộ lại file sau một độ trễ — trừ khi mount bằng <code>subPath</code>, khi đó cũng không cập nhật.</p>
</section>

<section id="l14">
<h3>5.5 Lab K4 · Scheduling — bốn bài học từ một lần chạy<a class="anch" href="#l14">#</a></h3>
<pre><button class="copybtn">copy</button><code>kubectl taint nodes ai200-worker2 sku=gpu:NoSchedule
kubectl apply -f labs/k8s/04-scheduling.yaml
kubectl get pods -l demo=scheduling -o custom-columns='NAME:.metadata.name,STATUS:.status.phase,NODE:.spec.nodeName'
</code></pre>
<p>Kết quả thật:</p>
<pre><code>sched-nodeselector               Pending   &lt;none&gt;
sched-too-big                    Pending   &lt;none&gt;
sched-spread-*                   1 Running, 3 Pending
sched-toleration-only            Running   ai200-worker     &lt;- KHÔNG lên node GPU!
sched-toleration-plus-selector   Running   ai200-worker2
</code></pre>
<table>
<thead><tr><th>Quan sát</th><th>Bài học</th></tr></thead>
<tbody>
<tr><td><code>nodeSelector</code> một mình → Pending</td><td>Không đủ khi node có taint — phải có <b>cả</b> toleration</td></tr>
<tr><td>toleration một mình → lên node CPU</td><td><b>Toleration chỉ <i>cho phép</i>, không <i>ép</i></b>. Muốn ghim thì cộng <code>nodeSelector</code></td></tr>
<tr><td>spread → 3 pod Pending</td><td><code>whenUnsatisfiable: DoNotSchedule</code> thà để Pending còn hơn phá ràng buộc rải đều. Muốn "cố rải, không được thì thôi" → <code>ScheduleAnyway</code></td></tr>
<tr><td>requests 900 vCPU → Pending</td><td>Events ghi rõ <code>0/3 nodes are available: 1 Insufficient cpu, … untolerated taint</code></td></tr>
</tbody></table>
<div class="tip"><b>topologySpreadConstraints mới là thứ giữ dịch vụ sống khi mất một zone.</b> PodDisruptionBudget <b>không</b> làm được việc này — nó chỉ chặn voluntary disruption, còn zone chết là involuntary.</div>
</section>

<section id="l15">
<h3>5.6 Lab K5 · HPA, PDB, và lệnh <code>az aks</code> cho phần chỉ có trên Azure<a class="anch" href="#l15">#</a></h3>
<p>HPA cần metrics-server; kind không có sẵn nên lab kèm lệnh cài (trên AKS thì có sẵn). Chạy thật ra <code>cpu: 0%/70%</code>, PDB ra <code>ALLOWED DISRUPTIONS: 0</code>.</p>
<div class="warn"><b>Bài tập chứng minh PDB — đã chạy thật:</b> với <code>minAvailable: 2</code> trên Deployment 2 replica, <code>kubectl drain ai200-worker</code> <b>treo và thử lại mãi</b> cho tới khi hết timeout. Đó chính là ca "drain node cả buổi không xong". Nhưng <code>kubectl delete pod --force</code> thì PDB <b>không cản được</b> — xoá pod/Deployment đi vòng qua PDB hoàn toàn.</div>
<p><b>Ba autoscaler, đề hay đảo tên:</b> <b>HPA</b> thêm/bớt <i>pod</i> theo metric · <b>Cluster Autoscaler</b> thêm/bớt <i>node</i> khi pod không xếp lịch được · <b>KEDA</b> scale theo <i>sự kiện</i> (độ dài hàng đợi).</p>
<p>Phần chỉ chạy được trên Azure, có đủ lệnh trong <code>labs/k8s/README.md</code>:</p>
<pre><button class="copybtn">copy</button><code>az aks get-credentials -g rg -n my-aks          # lệnh mở đầu mọi buổi làm việc
az aks update -g rg -n my-aks --attach-acr myacr   # gán AcrPull cho kubelet identity
az aks nodepool add -g rg --cluster-name my-aks -n gpupool \\
  --node-vm-size Standard_NC6s_v3 --node-taints sku=gpu:NoSchedule \\
  --enable-cluster-autoscaler --min-count 0 --max-count 4
az aks update -g rg -n my-aks --enable-oidc-issuer --enable-workload-identity
az aks enable-addons -g rg -n my-aks --addons azure-keyvault-secrets-provider
</code></pre>
<div class="tip"><b>Bẫy số một của AKS + ACR:</b> <code>ImagePullBackOff</code> nghĩa là cluster <b>không xác thực được</b> với registry. Câu trả lời đúng là managed identity + role <code>AcrPull</code> (<code>--attach-acr</code>), <b>không</b> phải "bật admin user của registry".</div>
</section>

<section id="l16">
<h3>5.7 Bảng triệu chứng → lệnh<a class="anch" href="#l16">#</a></h3>
<table>
<thead><tr><th>Triệu chứng</th><th>Lệnh và hướng xử lý</th></tr></thead>
<tbody>
<tr><td><code>Pending</code></td><td><code>kubectl describe pod</code> → đọc <b>Events</b>. Thường là <code>Insufficient cpu</code> hoặc <code>untolerated taint</code>. Pod Pending <b>chưa có container</b> nên <code>kubectl logs</code> không có gì để đọc</td></tr>
<tr><td><code>ImagePullBackOff</code></td><td>Sai tag/registry hoặc thiếu quyền. Trên AKS: <code>az aks update --attach-acr myacr</code></td></tr>
<tr><td><code>CrashLoopBackOff</code></td><td><code>kubectl logs &lt;pod&gt; --previous</code> — log của <b>lần chạy trước khi crash</b></td></tr>
<tr><td><code>OOMKilled</code></td><td>Vượt memory limit. <code>kubectl describe pod</code> mục <i>Last State</i></td></tr>
<tr><td><code>0/1 Running</code> mãi</td><td>readinessProbe chưa pass — <code>kubectl describe pod</code> xem probe fail vì sao</td></tr>
<tr><td>Restart liên tục</td><td>livenessProbe quá gắt (<code>timeoutSeconds</code> mặc định <b>1 giây</b>), hoặc probe đang chạm database</td></tr>
<tr><td>Service không gọi được</td><td><code>kubectl get endpointslice -l kubernetes.io/service-name=&lt;svc&gt;</code> — rỗng hoặc <code>ready=false</code> là selector lệch label / readiness chưa pass</td></tr>
</tbody></table>
<pre><button class="copybtn">copy</button><code># Thử kết nối end-to-end từ BÊN TRONG cluster (kiểm cả DNS lẫn Service)
kubectl run tmp --rm -it --image=busybox:1.36 --restart=Never -- \\
  wget -qO- http://rag-api.default.svc.cluster.local/

# Sinh YAML mẫu mà không tạo gì — cách nhanh nhất để nhớ đúng cấu trúc
kubectl create deployment rag-api --image=nginx --dry-run=client -o yaml
kubectl explain deployment.spec.strategy
</code></pre>
</section>

<h2 class="dom">6. Registry và image — 3 lab</h2>

<section id="l29">
<h3>6.1 Lab REG1 · Tag đổi được, digest thì không<a class="anch" href="#l29">#</a></h3>
<pre><button class="copybtn">copy</button><code>docker compose up -d registry
bash labs/registry/01-tag-va-digest.sh</code></pre>
<p>Chạy trên <code>registry:2</code> — chính phần mềm đứng sau Docker Hub và Azure Container Registry. Ba script này chạy trên <b>máy thật</b> chứ không trong container, vì chúng phải gọi Docker để build.</p>
<p>Lab push đè tag <code>:v1</code> hai lần bằng hai bản mã nguồn khác nhau, rồi hỏi registry xem tag đang trỏ vào đâu:</p>
<pre><button class="copybtn">copy</button><code>:v1 -> sha256:aeba9635ca352da7ef67b023a155ac09…
:v1 -> sha256:9297c04e072ea3909463a46ed2039374…   # sau khi push đè

pull theo digest sha256:aeba9635ca35… rồi chạy thử: ban-mot
pull theo tag :v1                  rồi chạy thử: ban-hai
</code></pre>
<div class="warn"><b>Cùng một chuỗi ký tự <code>rag-api:v1</code>, hai thời điểm, hai nội dung.</b> Tag là con trỏ, không phải định danh. Deployment khai <code>image: rag-api:v1</code> mà ai đó push đè thì pod mới sinh ra chạy mã khác pod cũ — không qua một bản rollout nào. Production ghi <code>image: rag-api:v1@sha256:…</code>: tag cho người đọc, digest cho máy chạy.</div>
<p>Phần cuối đụng vào <code>latest</code>: nó không tự trỏ tới bản mới nhất, không tự cập nhật, chỉ là cái tên Docker điền vào khi bạn quên ghi tag. Kèm theo là bẫy <code>imagePullPolicy</code> — mặc định là <code>IfNotPresent</code>, <b>riêng tag <code>latest</code> thì mặc định thành <code>Always</code></b>, nên cụm chạy <code>:latest</code> kéo lại image sau mỗi lần pod khởi động.</p>
</section>

<section id="l30">
<h3>6.2 Lab REG2 · Đổi thứ tự hai dòng, build lại nhanh gấp 16 lần<a class="anch" href="#l30">#</a></h3>
<pre><button class="copybtn">copy</button><code>bash labs/registry/02-cache-tang.sh</code></pre>
<p>Hai Dockerfile cài đúng một bộ thư viện, cho ra đúng một kết quả, khác nhau mỗi thứ tự hai dòng. Lab đo ba lần: build nguội, build lại không sửa gì, và build lại sau khi sửa <b>một dòng</b> trong <code>app.py</code>:</p>
<pre><button class="copybtn">copy</button><code>A. build NGUỘI (--no-cache)     xấu 9,1s   tốt 9,2s    ← cùng khối lượng việc
B. build lại, không sửa gì      xấu 0,9s   tốt 0,7s    ← cả hai ăn cache
C. sửa một dòng app.py          xấu 9,9s   tốt 0,6s    ← phép đo thật
</code></pre>
<p>Thứ tự xấu là <code>COPY app/ .</code> rồi mới <code>pip install</code>; thứ tự tốt là <code>COPY requirements.txt</code> → <code>pip install</code> → <code>COPY app/ .</code>. Cache của Docker là một <b>chuỗi</b>: tầng thứ N chỉ dùng lại được khi mọi tầng trước nó đều trúng, nên một tầng miss là toàn bộ phía sau miss theo.</p>
<div class="tip"><b>Cái bẫy suýt làm hỏng chính bài lab:</b> lần viết đầu tiên phần C sửa <code>app.py</code> thành <code>"v2"</code> — một giá trị đã từng build ở lần chạy trước — nên tầng <code>COPY</code> vẫn trúng cache và phép đo ra 1,5s vs 1,5s, tức là <i>đo nhầm</i>. Script hiện tại ghi vào đó một timestamp nano-giây để chắc chắn chưa từng xuất hiện. Đo cache mà không kiểm soát được trạng thái cache thì con số vô nghĩa.</div>
<p>Ba thứ hay âm thầm phá cache: thiếu <code>.dockerignore</code> nên <code>COPY . .</code> nuốt cả <code>.git</code> (đổi sau mỗi commit); <code>apt-get update</code> tách khỏi <code>apt-get install</code> thành hai <code>RUN</code>; và <code>ARG</code> đặt quá cao trong file. Trên ACR Tasks hay GitHub Actions thì máy build mới tinh mỗi lần nên phải khai cache từ xa bằng <code>--cache-from/--cache-to type=registry</code>.</p>
</section>

<section id="l31">
<h3>6.3 Lab REG3 · 397 MB → 49 MB, và thứ không bao giờ xoá được khỏi image<a class="anch" href="#l31">#</a></h3>
<pre><button class="copybtn">copy</button><code>bash labs/registry/03-nhieu-tang-va-kich-thuoc.sh</code></pre>
<pre><button class="copybtn">copy</button><code>một tầng   (FROM python:3.12)        : 397 MB   — có gcc, make, git, ld
nhiều tầng (runtime python:3.12-slim):  49 MB   — không có cái nào
push       : 4,2s  →  0,4s
user       : root  →  ungdung (UID 10001)
</code></pre>
<p>Lab không chỉ in ra số MB mà còn <code>command -v gcc make git ld</code> bên trong từng image, để thấy multi-stage cắt đi <i>cái gì</i>. Mỗi binary thừa là một dòng trong báo cáo quét CVE và một công cụ sẵn sàng cho kẻ đã vào được container.</p>
<div class="warn"><b>Phần đắt giá nhất — <code>RUN rm</code> không xoá được secret.</b> Lab build một image ghi khoá vào <code>/app-key.txt</code> rồi <code>RUN rm</code> nó ở tầng sau. Trong container đang chạy thì file "đã xoá"; nhưng <code>docker save</code> rồi bóc từng blob ra:
<pre><code>tầng 6548d7852932… : CHỨA NGUYÊN NỘI DUNG —
  AZURE_OPENAI_KEY=sk-that-su-la-bi-mat-123
tầng 6f0d270a2078… : chỉ có dấu xoá '.wh.app-key.txt' (whiteout), rỗng 0 byte</code></pre>
Tầng sau chỉ ghi một dấu whiteout đè lên; tầng chứa nội dung vẫn nằm nguyên và ai pull image cũng đọc được. Lộ một lần là phải <b>xoay khoá</b>, không phải sửa Dockerfile. Cách đúng: <code>RUN --mount=type=secret</code> của BuildKit, hoặc lấy secret lúc chạy, hoặc tốt nhất trên Azure là Workload Identity — không có secret nào để lộ.</div>
<p>Về <code>runAsNonRoot: true</code> của Kubernetes: nó chỉ kiểm tra được khi image khai <code>USER</code> dạng <b>số</b>. Khai <code>USER ungdung</code> (tên) thì kubelet không tra được UID và pod bị chặn với lỗi <i>"container has runAsNonRoot and image has non-numeric user"</i>.</p>
</section>

<h2 class="dom">7. Service Bus và Storage Queue — 4 lab</h2>

<section id="l32">
<h3>7.1 Dựng emulator Service Bus<a class="anch" href="#l32">#</a></h3>
<pre><button class="copybtn">copy</button><code>docker compose up -d servicebus     # kéo theo sb-mssql làm backend
./sb -f labs/servicebus/01-queue-dlq.py</code></pre>
<p>Emulator chính thức của Microsoft, cần một SQL Server làm kho lưu trữ. Topology khai bằng <code>labs/ai-200/servicebus/Config.json</code>: queue <code>jobs</code> (MaxDeliveryCount 3, LockDuration 30s), <code>ordered</code> (RequiresSession), <code>dedup</code> (cửa sổ 20s), <code>audit</code>; topic <code>docs</code> với bốn subscription dùng bốn kiểu luật khác nhau.</p>
<div class="tip"><b>Hai thứ mất thời gian khi dựng:</b> <code>container_name</code> <b>không</b> tạo DNS alias trong mạng compose, phải khai <code>networks.default.aliases: [servicebus-emulator]</code> thì SDK mới phân giải được host trong chuỗi kết nối. Và <code>azure-servicebus 7.12.3</code> <b>bỏ qua</b> <code>UseDevelopmentEmulator=true</code> rồi cố bắt tay TLS — phải từ <code>7.14.3</code> trở lên.</div>
</section>

<section id="l33">
<h3>7.2 Lab SB1 · Peek-lock, delivery count và dead-letter queue<a class="anch" href="#l33">#</a></h3>
<p>Lab abandon một message bốn lần liên tiếp và in <code>delivery_count</code> sau mỗi lần:</p>
<pre><button class="copybtn">copy</button><code>lần 1: nhận doc-1, delivery_count = 1
lần 2: nhận doc-1, delivery_count = 2
lần 3: nhận doc-1, delivery_count = 3
lần 4: hàng đợi chính đã RỖNG          ← broker đã tự chuyển sang DLQ

DLQ có 1 message
 - doc-1 | reason = MaxDeliveryCountExceeded
</code></pre>
<p>Không có dòng code nào làm việc chuyển đó — broker tự làm khi chạm <code>MaxDeliveryCount</code>. Lab đi tiếp qua <code>peek</code> (nhìn mà không khoá, không tăng delivery count), dead-letter <b>thủ công</b> với reason tự đặt, và quy trình xử lý lại: đọc DLQ → gửi về hàng đợi chính → <code>complete</code> ở DLQ. Không có nút "replay" tự động nào cả, và quên <code>complete</code> ở DLQ là message nằm đó mãi.</p>
<p>Phần cuối đặt hai chế độ cạnh nhau: <code>PEEK_LOCK</code> (mặc định, at-least-once, có DLQ, consumer <b>phải</b> idempotent) và <code>RECEIVE_AND_DELETE</code> (at-most-once, ít round-trip, chấp nhận mất). Đề mô tả "không được mất bản ghi nào" thì luôn là peek-lock.</p>
</section>

<section id="l34">
<h3>7.3 Lab SB2 và SB3 · Lọc theo topic, session, chống trùng<a class="anch" href="#l34">#</a></h3>
<pre><button class="copybtn">copy</button><code>./sb -f labs/servicebus/02-topics-filters.py
./sb -f labs/servicebus/03-sessions-dedup.py</code></pre>
<p>SB2 gửi cùng một bộ message vào topic rồi đếm xem mỗi subscription nhận được gì — bốn luật, bốn kết quả khác nhau: không luật (nhận tất), SQL filter <code>lang = 'vi' AND size &gt; 100</code>, Correlation filter <code>CorrelationId = 'urgent'</code>, và auto-forward sang queue <code>audit</code>.</p>
<div class="tip"><b>Bài học ngoài kịch bản:</b> gọi <code>get_subscription_receiver</code> trên subscription có auto-forward thì Service Bus từ chối thẳng với <code>amqp:not-allowed</code>. Đúng thiết kế — message không bao giờ nằm lại ở đó, nó đi thẳng sang đích. Muốn xem thì đọc ở queue đích.</div>
<p>SB3 chứng minh hai cơ chế bằng số đếm: <b>session</b> giữ FIFO trong từng <code>session_id</code> và khoá cả session cho một consumer; <b>duplicate detection</b> với cùng <code>message_id</code> trong cửa sổ 20 giây biến <b>4 lần gửi thành 2 message</b>. Kèm <code>scheduled_enqueue_time_utc</code> (message chưa tới giờ thì receiver không thấy) và <code>defer</code> (message biến khỏi luồng nhận thường, chỉ lấy lại được bằng sequence number — nên phải tự lưu số đó ở đâu đó).</p>
</section>

<section id="l35">
<h3>7.4 Lab ST1 · Queue Storage trên Azurite — và con số nói dối<a class="anch" href="#l35">#</a></h3>
<pre><button class="copybtn">copy</button><code>./sb -f labs/storage/01-queue-storage.py</code></pre>
<p>Queue Storage là lựa chọn rẻ hơn Service Bus khi không cần FIFO, session, topic hay transaction. Lab đi qua vòng đời thật: <code>send</code> → <code>receive</code> (message <b>ẩn</b> đi trong <code>visibility_timeout</code> chứ không biến mất) → <code>delete</code>, cùng <code>update_message</code> để gia hạn khi xử lý lâu, và <code>peek</code> không đụng tới visibility.</p>
<div class="warn"><b>Bẫy đã vấp khi viết lab:</b> <code>messages_per_page</code> <i>không</i> giới hạn tổng số message lấy về, nó chỉ chia trang — muốn chặn thì dùng <code>max_messages</code>. Và <code>approximate_message_count</code> đúng như tên gọi: nó đếm cả message đang ẩn, nên hàng đợi rỗng vẫn báo <b>5</b>. Lấy con số đó làm tín hiệu autoscale là scale thừa cả đàn worker cho những việc đã có người làm.</div>
<p>Chốt lại ranh giới: Queue Storage cho hàng đợi việc đơn giản, dung lượng lớn, giá rẻ; Service Bus khi cần DLQ, session, topic, dedup, transaction, scheduled message.</p>
</section>

<h2 class="dom">8. OpenTelemetry — 1 lab</h2>

<section id="l36">
<h3>8.1 Lab OT1 · Trace đứt ở hàng đợi, và cách nối lại<a class="anch" href="#l36">#</a></h3>
<pre><button class="copybtn">copy</button><code>docker compose up -d jaeger
./sb -f labs/otel/01-trace-qua-hang-doi.py
# rồi mở http://localhost:16686 , chọn service \`ai200-lab\`</code></pre>
<p>Jaeger all-in-one đã có sẵn OTLP receiver nên không cần Collector riêng. Trên Azure, chỗ này là Application Insights — cũng nhận OTLP, cùng SDK, chỉ khác exporter và connection string.</p>
<p>Lab chạy bốn đoạn, mỗi đoạn in ra bằng chứng thay vì mô tả:</p>
<pre><button class="copybtn">copy</button><code>A. không truyền context
   trace_id producer : 8d39e61f…      trace_id consumer : a2ec2c71…
   -> KHÁC NHAU: True                 => Jaeger vẽ HAI trace rời nhau

B. có truyền traceparent
   header sinh ra: {'traceparent': '00-92ff1754…-e8aa298c1dbd35ad-01'}
   -> GIỐNG NHAU: True                => một trace liền mạch

C. consumer gom lô 3 message của 3 trace khác nhau
   span xử lý lô có 3 LINK, trace_id riêng = 03239e9d…

D. baggage
   header khi truyền đi: {'traceparent': '00-083e0b3e…-47b24e14…-01',
                          'baggage': 'tenant.id=contoso,experiment=rerank-v2'}
</code></pre>
<p>Đoạn B cho thấy cơ chế thật: producer gọi <code>inject(carrier)</code> để ghi <code>traceparent</code> vào một dict, nhét dict đó vào <code>application_properties</code> của message; consumer gọi <code>extract(props)</code> rồi mở span với <code>context=ctx</code>. Đây đúng là thứ auto-instrumentation làm hộ bạn — biết nó làm gì thì mới chẩn đoán được khi nó không làm.</p>
<div class="tip"><b>Vì sao đoạn C phải dùng span link chứ không phải quan hệ cha–con:</b> một span chỉ có <b>đúng một</b> cha. Gom 3 (hay 100) message của 3 trace khác nhau thì không có "một cha" nào hợp lý — chọn message đầu tiên làm cha là gán sai nhân quả cho những message còn lại.</div>
<div class="warn"><b>Đoạn D dạy hai thứ.</b> Thứ nhất, <code>baggage</code> đi trong header <i>riêng</i>, tách khỏi <code>traceparent</code>, và <b>không</b> tự trở thành attribute của span nào — muốn lọc theo <code>tenant.id</code> trong Application Insights thì phải tự <code>sp.set_attribute(...)</code>. Thứ hai, <code>inject()</code> phải gọi <b>khi span còn đang hoạt động</b>; gọi sau khi span đóng thì carrier chỉ có <code>baggage</code> mà thiếu <code>traceparent</code> — lần viết đầu tiên của lab này dính đúng lỗi đó.<br>
Kèm cảnh báo bảo mật: baggage được gắn vào header của <b>mọi</b> request đi ra, kể cả khi gọi API bên thứ ba. Không đặt PII, token hay secret vào đó.</div>
</section>

<h2 class="dom">9. Dọn dẹp</h2>

<section id="l17">
<h3>9.1 Xoá sạch khi học xong<a class="anch" href="#l17">#</a></h3>
<pre><button class="copybtn">copy</button><code>cd labs/ai-200
docker compose down -v                 # xoá container + volume của mọi emulator
kind delete cluster --name ai200       # xoá cluster Kubernetes
docker rmi rag-api:don-tang rag-api:nhieu-tang cache-xau cache-tot 2>/dev/null
</code></pre>
<p>Toàn bộ lab chạy trên máy bạn, <b>không tạo tài nguyên Azure nào</b> nên không có gì phải lo hoá đơn. Phần cần Azure thì chỉ có lệnh để đọc, không tự chạy.</p>
</section>
`,g=t({__name:"Ai200LabsPage",setup(i){return(h,a)=>(o(),e(n,{certId:"ai200",html:c(d),title:"AI-200 · Thực hành",subtitle:"28 lab chạy offline — pgvector, Redis vector + Streams, Cosmos DB emulator, KQL trên Kusto emulator, cluster Kubernetes 3 node bằng kind, Service Bus emulator, Queue Storage trên Azurite, OpenTelemetry qua Jaeger và registry riêng. Không cần Azure, không tốn tiền.",practiceRoute:"/ai-200/practice",practiceLabel:"Luyện thi AI-200",extraLinks:[{to:"/ai-200/documents",label:"Tài liệu"},{to:"/ai-200/services",label:"Dịch vụ Azure"}]},null,8,["html"]))}});export{g as default};
