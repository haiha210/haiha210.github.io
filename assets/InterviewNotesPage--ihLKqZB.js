import{_ as t}from"./NotesPage.vue_vue_type_script_setup_true_lang-D44NV_lK.js";import{d as n,e,b as i,o as h}from"./index-D5dVkRGp.js";import"./ThemeToggle.vue_vue_type_script_setup_true_lang-Cgf2NsQa.js";import"./useStudyClock-BdpBivJS.js";const c=`<h2 class="dom">Phase 1 — Programming Fundamentals</h2>

<section id="p1-1">
<h3>1.1 Kiểu dữ liệu và cách máy biểu diễn số<a class="anch" href="#p1-1">#</a></h3>
<p>Câu hỏi mở đầu thường rất cơ bản, nhưng người phỏng vấn nghe xem bạn <b>hiểu tới tầng biểu diễn</b> hay chỉ học vẹt tên kiểu.</p>
<table>
<thead><tr><th>Khái niệm</th><th>Điều phải nói được</th></tr></thead>
<tbody>
<tr><td>Value vs reference</td><td>Biến giữ <b>giá trị</b> hay giữ <b>địa chỉ</b>. Truyền một object vào hàm rồi sửa field bên trong thì bên ngoài thấy thay đổi; gán lại cả biến thì không.</td></tr>
<tr><td>Mutable vs immutable</td><td>String trong Java/Python/Ruby (frozen) là immutable → nối chuỗi trong vòng lặp tạo <code>n</code> object mới, dùng buffer/builder thay thế.</td></tr>
<tr><td>Integer overflow</td><td>Số nguyên có độ rộng cố định (32/64 bit). <code>2^31</code> tràn <code>int</code>. Ruby/Python tự chuyển bignum, Java/Go thì không.</td></tr>
<tr><td>Signed vs unsigned</td><td>Bù hai (two's complement): bit cao nhất là dấu, nên <code>-1</code> là toàn bit 1.</td></tr>
<tr><td>Char vs byte</td><td>UTF-8 là mã hoá <b>độ dài thay đổi</b> 1–4 byte. <code>"Việt".length</code> khác số byte — bug kinh điển khi cắt chuỗi theo byte.</td></tr>
</tbody></table>
<div class="warn"><b>Bẫy nổi tiếng:</b> <code>0.1 + 0.2 != 0.3</code>. Vì IEEE-754 double biểu diễn nhị phân, <code>0.1</code> không có biểu diễn hữu hạn. Với tiền tệ <b>luôn dùng</b> <code>DECIMAL/NUMERIC</code> ở DB và integer đơn vị nhỏ nhất (xu) trong code — không bao giờ float.</div>
<p class="src"><b>Tham khảo:</b> <a href="https://floating-point-gui.de/" target="_blank" rel="noopener">What Every Programmer Should Know About Floating-Point Arithmetic</a> · <a href="https://github.com/mtdvio/every-programmer-should-know" target="_blank" rel="noopener">mtdvio/every-programmer-should-know</a></p>
<div class="qa"><b>Hỏi:</b> "Vì sao không lưu tiền bằng float?" → <b>Đáp:</b> vì float là xấp xỉ nhị phân, cộng dồn nhiều giao dịch sẽ lệch; và so sánh <code>==</code> không đáng tin. Dùng <code>DECIMAL(19,4)</code> hoặc integer theo đơn vị nhỏ nhất, chỉ đổi sang float ở tầng hiển thị.</div>
</section>

<section id="p1-2">
<h3>1.2 Bộ nhớ: stack, heap, garbage collection<a class="anch" href="#p1-2">#</a></h3>
<pre><code>Stack                          Heap
─────                          ────
biến local, tham số,           object, array, string,
địa chỉ trả về                 closure đã capture
cấp phát/thu hồi tự động       do GC (hoặc free thủ công)
nhanh, kích thước nhỏ          lớn, chậm hơn, phân mảnh
tràn → StackOverflow           hết → OutOfMemory</code></pre>
<ul>
<li><b>Đệ quy quá sâu</b> làm tràn stack — vì mỗi lần gọi đẩy một frame. Đây là lý do phải đổi sang vòng lặp hoặc dùng stack tường minh khi duyệt cây rất sâu.</li>
<li><b>Memory leak trong ngôn ngữ có GC</b> vẫn xảy ra: object không dùng nữa nhưng còn <b>reference sống</b> — cache không giới hạn, listener chưa unsubscribe, biến class-level tích dần.</li>
<li><b>GC generational:</b> object mới sinh ở young gen, đa số chết ngay (minor GC rất nhanh); sống sót thì promote sang old gen (major GC đắt, gây pause). Tối ưu bằng cách <b>giảm rác</b>, không phải bằng cách gọi GC.</li>
</ul>
<div class="tip"><b>Liên hệ backend thật:</b> memory leak hay lộ ra ở worker process chạy dài (Sidekiq, Celery) — RSS tăng đơn điệu theo thời gian. Cách điều tra: bật heap dump, so hai snapshot, tìm class có số instance tăng.</div>
</section>

<section id="p1-3">
<h3>1.3 Hàm, closure và exception<a class="anch" href="#p1-3">#</a></h3>
<ul>
<li><b>Closure</b> là hàm cộng với môi trường biến mà nó bắt được. Bẫy kinh điển: tạo closure trong vòng lặp rồi cả <code>n</code> closure cùng bắt <b>một biến</b> chứ không bắt giá trị từng vòng.</li>
<li><b>Pure function</b> — cùng input luôn cho cùng output, không side effect. Dễ test, dễ cache, dễ chạy song song. Khi phỏng vấn nói "tôi tách phần tính toán thuần ra khỏi phần I/O" là điểm cộng lớn.</li>
<li><b>Exception vs error code:</b> exception cho tình huống <i>ngoại lệ</i>, không dùng làm luồng điều khiển bình thường. Bắt exception thì bắt <b>loại cụ thể</b>, không bắt trơn <code>Exception</code> rồi bỏ qua.</li>
</ul>
<table>
<thead><tr><th>Nguyên tắc</th><th>Vì sao</th></tr></thead>
<tbody>
<tr><td>Fail fast</td><td>Validate input ở biên hệ thống, lỗi nổ càng gần nguyên nhân càng dễ debug.</td></tr>
<tr><td>Không nuốt lỗi</td><td><code>rescue =&gt; e; end</code> làm lỗi biến mất, sự cố phát hiện muộn hơn hàng giờ.</td></tr>
<tr><td>Lỗi phải mang ngữ cảnh</td><td>Kèm id bản ghi, tham số đầu vào — nhưng <b>không kèm secret/PII</b> vào log.</td></tr>
<tr><td>Dùng ensure/finally</td><td>Giải phóng connection, file handle, lock dù đường đi nào cũng chạy qua.</td></tr>
<tr><td>Phân biệt lỗi tạm và lỗi vĩnh viễn</td><td>Timeout/503 thì retry được; 400/422 thì retry vô nghĩa. Quyết định này là gốc của Phase 7.</td></tr>
</tbody></table>
</section>

<section id="p1-4">
<h3>1.4 Concurrency và async programming<a class="anch" href="#p1-4">#</a></h3>
<p><b>Concurrency</b> là nhiều việc <i>đang dở</i> cùng lúc; <b>parallelism</b> là nhiều việc <i>đang chạy</i> cùng lúc trên nhiều core. Một ứng dụng single-core vẫn concurrency được (async I/O), nhưng không parallel.</p>
<table>
<thead><tr><th>Mô hình</th><th>Phù hợp</th><th>Chi phí</th></tr></thead>
<tbody>
<tr><td>Process</td><td>Cách ly hoàn toàn, tận dụng nhiều core kể cả khi có GIL</td><td>Nặng nhất (bộ nhớ riêng)</td></tr>
<tr><td>Thread</td><td>I/O-bound, chia sẻ bộ nhớ</td><td>Cần lock, dễ race condition</td></tr>
<tr><td>Event loop / async-await</td><td>Rất nhiều kết nối chờ I/O (chat, streaming, gọi API ngoài)</td><td>Một tác vụ CPU nặng sẽ block cả loop</td></tr>
<tr><td>Fiber / goroutine</td><td>Như thread nhưng do runtime lập lịch, rẻ hơn nhiều</td><td>Vẫn cần đồng bộ khi chia sẻ state</td></tr>
</tbody></table>
<ul>
<li><b>Race condition</b> — hai luồng đọc-sửa-ghi cùng một giá trị. Chữa bằng lock, atomic operation, hoặc chuyển sang <code>UPDATE ... SET n = n + 1</code> để DB làm nguyên tử.</li>
<li><b>GIL</b> (Python, Ruby MRI): tại một thời điểm chỉ một thread chạy bytecode → thread <b>vẫn có lợi cho I/O</b> (giải phóng GIL khi chờ mạng) nhưng không giúp CPU-bound. Muốn parallel CPU thì dùng process.</li>
</ul>
<div class="tip"><b>Đây là nền cho Phase 5 và 11.</b> Gọi LLM API là I/O chờ rất lâu (vài giây tới vài chục giây). Đúng mô hình là async/event-loop hoặc worker pool — nếu mỗi request chiếm một thread đồng bộ, vài trăm request đồng thời là hết pool.</div>
<p class="src"><b>Tham khảo:</b> <a href="https://docs.python.org/3/glossary.html#term-global-interpreter-lock" target="_blank" rel="noopener">Python — Global Interpreter Lock</a> cho hành vi nhả GIL khi chờ I/O</p>
</section>

<section id="p1-5">
<h3>1.5 Big-O và cách nói về complexity<a class="anch" href="#p1-5">#</a></h3>
<table>
<thead><tr><th>Độ phức tạp</th><th>Ví dụ</th><th>n = 1 triệu</th></tr></thead>
<tbody>
<tr><td><code>O(1)</code></td><td>Tra hash, truy cập array theo index</td><td>tức thời</td></tr>
<tr><td><code>O(log n)</code></td><td>Binary search, B-tree lookup</td><td>~20 bước</td></tr>
<tr><td><code>O(n)</code></td><td>Duyệt một lần, full table scan</td><td>1 triệu bước</td></tr>
<tr><td><code>O(n log n)</code></td><td>Sort so sánh, merge k danh sách</td><td>~20 triệu</td></tr>
<tr><td><code>O(n²)</code></td><td>Hai vòng lặp lồng nhau, so mọi cặp</td><td>10¹² — không khả thi</td></tr>
<tr><td><code>O(2ⁿ)</code></td><td>Sinh mọi tập con, đệ quy không memo</td><td>vô vọng</td></tr>
</tbody></table>
<ul>
<li>Luôn nói cả <b>time và space</b>. Rất nhiều bài giải được nhờ đánh đổi: thêm <code>O(n)</code> bộ nhớ (một HashMap) để hạ từ <code>O(n²)</code> xuống <code>O(n)</code>.</li>
<li>Nói rõ <b>n là gì</b>: số bản ghi, số ký tự, số node, số cạnh. Với graph phải nói <code>O(V + E)</code>.</li>
<li><b>Amortized</b>: <code>Array#push</code> là <code>O(1)</code> trung bình dù đôi khi phải cấp phát lại và copy — hỏi về dynamic array thì phải nêu được từ này.</li>
</ul>
<p class="src"><b>Tham khảo:</b> <a href="https://www.bigocheatsheet.com/" target="_blank" rel="noopener">Big-O Cheat Sheet</a> · <a href="https://www.techinterviewhandbook.org/algorithms/study-cheatsheet/" target="_blank" rel="noopener">tech-interview-handbook — Algorithms study cheatsheet</a></p>
<div class="warn"><b>Đừng bỏ qua hằng số khi làm backend.</b> <code>O(n)</code> với mỗi bước là một query DB (N+1) tệ hơn <code>O(n log n)</code> hoàn toàn trong RAM. Người phỏng vấn backend rất thích ứng viên phân biệt được "một vòng lặp" và "một vòng lặp có I/O".</div>
</section>

<section id="p1-6">
<h3>1.6 AI đang chạy ở đâu trong một backend system<a class="anch" href="#p1-6">#</a></h3>
<p>Ở phase này chưa cần học AI, chỉ cần <b>đặt đúng vị trí</b> của nó trên sơ đồ để không bị lạ về sau.</p>
<pre><code>API thường                    API có AI
──────────                    ─────────
Request                       Request
   ↓                             ↓
Backend                       Backend
   ↓                             ↓
DB  (vài ms)                  LLM API  (1–30 giây)
   ↓                             ↓  sinh từng token
Response (một lần)            Streaming response</code></pre>
<table>
<thead><tr><th>Thuật ngữ</th><th>Một câu đủ dùng</th></tr></thead>
<tbody>
<tr><td>AI ⊃ ML ⊃ Deep Learning</td><td>Ba vòng lồng nhau: AI là mục tiêu, ML là cách học từ dữ liệu, DL là ML dùng mạng nơ-ron nhiều lớp.</td></tr>
<tr><td>Generative AI</td><td>Model <b>sinh</b> nội dung mới (chữ, ảnh, code) thay vì chỉ phân loại/dự đoán một nhãn.</td></tr>
<tr><td>LLM</td><td>Model ngôn ngữ rất lớn, học dự đoán token tiếp theo; kiến trúc Transformer.</td></tr>
<tr><td>Inference</td><td>Lúc <b>dùng</b> model để sinh kết quả (khác training là lúc <b>tạo</b> model). Backend hầu như chỉ làm việc với inference.</td></tr>
<tr><td>Token</td><td>Đơn vị model đọc/sinh, khoảng ¾ một từ tiếng Anh; tiếng Việt tốn token hơn. <b>Tính tiền theo token.</b></td></tr>
<tr><td>Context window</td><td>Giới hạn tổng token (prompt + output) một lần gọi. Vượt là lỗi — nên phải cắt/tóm/chọn lọc dữ liệu đưa vào.</td></tr>
</tbody></table>
<div class="tip"><b>Câu chốt để nhớ suốt roadmap:</b> với backend, LLM chỉ là <b>một dependency ngoài, chậm, tính tiền theo lượng dùng, và có thể trả lời sai</b>. Mọi kỹ thuật ở Phase 5–12 đều xuất phát từ đúng bốn tính chất đó.</div>
<p class="src"><b>Tham khảo:</b> <a href="https://docs.claude.com/en/docs/build-with-claude/context-windows" target="_blank" rel="noopener">Anthropic — Context windows</a> · <a href="https://github.com/microsoft/generative-ai-for-beginners" target="_blank" rel="noopener">microsoft/generative-ai-for-beginners</a> cho các định nghĩa ở bảng trên</p>
</section>

<h2 class="dom">Phase 2 — Data Structures &amp; Algorithms</h2>

<section id="p2-1">
<h3>2.1 Array và String<a class="anch" href="#p2-1">#</a></h3>
<table>
<thead><tr><th>Thao tác</th><th>Array động</th><th>Ghi chú</th></tr></thead>
<tbody>
<tr><td>Đọc theo index</td><td><code>O(1)</code></td><td>Nằm liền nhau trong bộ nhớ → cache-friendly</td></tr>
<tr><td>Thêm/xoá ở cuối</td><td><code>O(1)</code> amortized</td><td>Đôi lúc cấp phát lại gấp đôi</td></tr>
<tr><td>Thêm/xoá ở giữa</td><td><code>O(n)</code></td><td>Phải dịch phần còn lại</td></tr>
<tr><td>Tìm giá trị</td><td><code>O(n)</code>, hoặc <code>O(log n)</code> nếu đã sort</td><td></td></tr>
</tbody></table>
<p><b>Hai kỹ thuật phải thuộc</b> — chúng giải phần lớn bài array/string trong phỏng vấn:</p>
<ul>
<li><b>Two pointers</b> — hai chỉ số chạy vào nhau hoặc cùng chiều. Dùng cho: cặp có tổng bằng target (mảng đã sort), đảo mảng, xoá phần tử trùng tại chỗ, kiểm tra palindrome.</li>
<li><b>Sliding window</b> — cửa sổ co giãn giữ một điều kiện. Dùng cho: dãy con dài nhất không lặp ký tự, dãy con có tổng ≥ target ngắn nhất, mọi bài "substring/subarray với ràng buộc".</li>
</ul>
<div class="tip"><b>Prefix sum</b> biến "tổng đoạn <code>[i..j]</code>" từ <code>O(n)</code> mỗi truy vấn thành <code>O(1)</code> sau khi tiền xử lý <code>O(n)</code>. Đây cũng đúng là ý tưởng của cột tổng hợp / materialized view trong DB.</div>
</section>

<section id="p2-2">
<h3>2.2 HashMap và Set — vũ khí dùng nhiều nhất<a class="anch" href="#p2-2">#</a></h3>
<p>Nếu chỉ được thuộc một cấu trúc dữ liệu, chọn HashMap. Rất nhiều bài <code>O(n²)</code> hạ xuống <code>O(n)</code> chỉ bằng cách "đã thấy gì thì nhớ lại".</p>
<ul>
<li><b>Cách hoạt động:</b> hash key → chỉ số bucket → xử lý collision (chaining bằng list/cây, hoặc open addressing). Trung bình <code>O(1)</code>, xấu nhất <code>O(n)</code> khi mọi key đụng cùng bucket.</li>
<li><b>Load factor</b> vượt ngưỡng (thường 0.75) thì rehash toàn bộ — đây là lý do <code>put</code> đôi khi đột ngột chậm.</li>
<li><b>Key phải immutable</b> và <code>hashCode</code>/<code>eql?</code> phải nhất quán với <code>equals</code>. Sửa object đang làm key là mất luôn entry.</li>
<li>Không có thứ tự đảm bảo (trừ <code>LinkedHashMap</code>, dict Python 3.7+, Hash Ruby). Cần thứ tự theo key → dùng cây (TreeMap / sorted set).</li>
</ul>
<div class="qa"><b>Hỏi:</b> "HashMap là <code>O(1)</code>, sao vẫn cần B-tree index trong DB?" → <b>Đáp:</b> hash chỉ trả lời được truy vấn <b>bằng chính xác</b>; B-tree trả lời được cả <b>khoảng</b> (<code>&gt;</code>, <code>BETWEEN</code>, <code>ORDER BY</code>, prefix <code>LIKE 'abc%'</code>) và giữ dữ liệu có thứ tự trên đĩa. Nối được ý này là ghi điểm ở Phase 4.</div>
</section>

<section id="p2-3">
<h3>2.3 Stack và Queue<a class="anch" href="#p2-3">#</a></h3>
<table>
<thead><tr><th></th><th>Stack (LIFO)</th><th>Queue (FIFO)</th></tr></thead>
<tbody>
<tr><td>Dùng cho</td><td>Undo, khớp dấu ngoặc, DFS, call stack, biểu thức hậu tố</td><td>BFS, job queue, rate limiter, xử lý theo thứ tự đến</td></tr>
<tr><td>Biến thể</td><td>Monotonic stack (bài "phần tử lớn hơn kế tiếp")</td><td>Deque (sliding window max), priority queue (heap)</td></tr>
</tbody></table>
<ul>
<li><b>Monotonic stack</b> giải nhóm bài "next greater element", "largest rectangle in histogram", "daily temperatures" trong <code>O(n)</code>. Ít người ôn nên rất dễ ghi điểm.</li>
<li><b>Circular buffer</b> (ring buffer) là queue kích thước cố định — đúng cấu trúc dùng cho log buffer và metric window trong backend thật.</li>
</ul>
<div class="tip"><b>Nối sang Phase 7:</b> "queue" trong DSA và "message queue" trong hệ phân tán cùng một tư tưởng FIFO, nhưng message queue thêm: bền vững (persistence), nhiều consumer, ack/retry, và <b>không đảm bảo thứ tự tuyệt đối</b> khi có nhiều partition.</div>
</section>

<section id="p2-4">
<h3>2.4 Linked List<a class="anch" href="#p2-4">#</a></h3>
<p>Trong backend thật gần như không dùng, nhưng phỏng vấn vẫn hỏi vì nó kiểm tra khả năng <b>xử lý con trỏ cẩn thận</b>.</p>
<ul>
<li>Thêm/xoá ở vị trí đã biết node: <code>O(1)</code>. Truy cập theo index: <code>O(n)</code>. Không cache-friendly.</li>
<li><b>Ba mẫu phải thuộc:</b> đảo danh sách (ba con trỏ <code>prev/cur/next</code>), <b>fast &amp; slow pointer</b> (tìm giữa, phát hiện chu trình — Floyd), và <b>dummy head</b> để khỏi viết case đặc biệt cho node đầu.</li>
<li><b>Ứng dụng thật:</b> doubly linked list + HashMap chính là cách hiện thực <b>LRU cache</b> với mọi thao tác <code>O(1)</code> — bài này bắc cầu trực tiếp sang Phase 8.</li>
</ul>
</section>

<section id="p2-5">
<h3>2.5 Tree và Heap<a class="anch" href="#p2-5">#</a></h3>
<ul>
<li><b>BST</b>: trái &lt; node &lt; phải. Tìm/thêm/xoá <code>O(log n)</code> <i>nếu cân bằng</i>; suy biến thành danh sách thì về <code>O(n)</code> — đó là lý do có AVL / Red-Black tree.</li>
<li><b>Duyệt cây</b>: in-order trên BST cho dãy tăng dần (rất hay dùng để chứng minh một cây có phải BST). Pre-order để copy cây, post-order để giải phóng/tính từ dưới lên. BFS theo tầng dùng queue.</li>
<li><b>Trie</b> — cây tiền tố, cho autocomplete và tìm theo prefix trong <code>O(độ dài từ)</code>. Đây là nửa "keyword" của hybrid search ở Phase 4.</li>
<li><b>Heap</b> — cây nhị phân hoàn chỉnh, chỉ đảm bảo quan hệ cha-con. <code>push</code>/<code>pop</code> là <code>O(log n)</code>, xem đỉnh <code>O(1)</code>.</li>
</ul>
<div class="tip"><b>Mẫu "top-K" phải thuộc:</b> tìm K phần tử lớn nhất trong n phần tử → giữ một <b>min-heap kích thước K</b>, <code>O(n log K)</code> và chỉ tốn <code>O(K)</code> bộ nhớ. Đây <b>chính xác</b> là thao tác "top-K documents" của vector search ở Phase 4 và 11 — trả lời được liên hệ này là điểm cộng rất lớn.</div>
</section>

<section id="p2-6">
<h3>2.6 Graph<a class="anch" href="#p2-6">#</a></h3>
<table>
<thead><tr><th>Thuật toán</th><th>Dùng khi</th><th>Complexity</th></tr></thead>
<tbody>
<tr><td>BFS</td><td>Đường đi ngắn nhất trên đồ thị <b>không trọng số</b>, lan theo tầng</td><td><code>O(V + E)</code></td></tr>
<tr><td>DFS</td><td>Kiểm tra liên thông, phát hiện chu trình, backtracking</td><td><code>O(V + E)</code></td></tr>
<tr><td>Topological sort</td><td>Thứ tự phụ thuộc: build task, migration, DAG job</td><td><code>O(V + E)</code></td></tr>
<tr><td>Dijkstra</td><td>Đường ngắn nhất, trọng số <b>không âm</b></td><td><code>O(E log V)</code></td></tr>
<tr><td>Union-Find</td><td>Gộp nhóm, phát hiện chu trình trên đồ thị vô hướng, Kruskal</td><td>gần <code>O(1)</code> mỗi thao tác</td></tr>
</tbody></table>
<ul>
<li>Biểu diễn: <b>adjacency list</b> cho đồ thị thưa (hầu hết trường hợp thật), adjacency matrix khi dày hoặc cần kiểm tra cạnh <code>O(1)</code>.</li>
<li><b>Backend thật gặp graph ở đâu:</b> phát hiện dependency vòng giữa service, phân quyền theo cây tổ chức, thứ tự chạy migration, và <b>phát hiện deadlock</b> (chu trình trong wait-for graph — Phase 4).</li>
</ul>
</section>

<section id="p2-7">
<h3>2.7 Binary Search và Recursion<a class="anch" href="#p2-7">#</a></h3>
<ul>
<li><b>Binary search</b> không chỉ dùng trên mảng đã sort. Mẫu mạnh hơn là <b>"binary search trên đáp án"</b>: khi hàm kiểm tra <code>ok(x)</code> đơn điệu (sai… sai, đúng… đúng) thì nhị phân tìm biên. Ví dụ: "số worker tối thiểu để xử lý hết job trong T phút".</li>
<li>Viết đúng biên là điểm bị trượt nhiều nhất: dùng <code>lo &lt; hi</code> với <code>mid = lo + (hi - lo) / 2</code> để tránh tràn, và xác định rõ vòng lặp giữ bất biến gì.</li>
<li><b>Recursion</b> cần ba thứ: điều kiện dừng, bước thu nhỏ bài toán, và kết hợp kết quả. Đệ quy sâu <code>n</code> tốn <code>O(n)</code> stack — nêu được điều này khi nói về space complexity.</li>
<li><b>Backtracking</b> = đệ quy + thử/hoàn tác: sinh tổ hợp, phân hoạch, N-Queens, sudoku. Cắt tỉa sớm là cả nghệ thuật.</li>
</ul>
</section>

<section id="p2-8">
<h3>2.8 Dynamic Programming<a class="anch" href="#p2-8">#</a></h3>
<p>DP dùng được khi có <b>overlapping subproblems</b> (bài con lặp lại) và <b>optimal substructure</b> (nghiệm tối ưu ghép từ nghiệm tối ưu của bài con).</p>
<ul>
<li><b>Top-down (memoization)</b> — viết đệ quy tự nhiên rồi cache theo tham số. Dễ nghĩ hơn, nên nói cách này trước trong phỏng vấn.</li>
<li><b>Bottom-up (tabulation)</b> — điền bảng theo thứ tự, thường tối ưu được bộ nhớ xuống một hoặc hai hàng.</li>
<li><b>Các họ bài phải nhận dạng được:</b> leo cầu thang / Fibonacci (1 chiều), knapsack (2 chiều: item × capacity), LCS &amp; edit distance (2 chuỗi), coin change (đếm cách vs số xu ít nhất), longest increasing subsequence.</li>
</ul>
<p class="src"><b>Tham khảo:</b> cách phân loại bài theo <i>mẫu giải</i> ở mục 2.1–2.8 theo hướng của <a href="https://github.com/labuladong/fucking-algorithm" target="_blank" rel="noopener">labuladong/fucking-algorithm</a> và <a href="https://github.com/yangshun/tech-interview-handbook" target="_blank" rel="noopener">yangshun/tech-interview-handbook</a>; danh mục bài luyện theo <a href="https://github.com/kdn251/interviews" target="_blank" rel="noopener">kdn251/interviews</a></p>
<div class="tip"><b>Cách trình bày ăn điểm:</b> nói rõ bốn thứ theo thứ tự — <i>state</i> (dp[i][j] nghĩa là gì), <i>transition</i> (công thức), <i>base case</i>, <i>thứ tự điền</i>. Người phỏng vấn chấm phần này chứ không chấm việc bạn code nhanh.</div>
</section>

<section id="p2-9">
<h3>2.9 Embedding là một vector — chỗ DSA gặp AI<a class="anch" href="#p2-9">#</a></h3>
<p>Phần AI cần thêm ở Phase 2 rất ít, chỉ đủ để sau này gặp Vector Search không thấy lạ.</p>
<pre><code>"reset password"
       ↓  embedding model
[0.12, 0.82, -0.21, ... ]   ← vector 768 / 1536 chiều
       ↓  so sánh với các vector đã lưu
cosine similarity → top K gần nhất</code></pre>
<table>
<thead><tr><th>Khái niệm</th><th>Nói gọn</th></tr></thead>
<tbody>
<tr><td>Embedding</td><td>Ánh xạ văn bản → vector số thực, sao cho <b>nghĩa gần nhau thì vector gần nhau</b>.</td></tr>
<tr><td>Cosine similarity</td><td><code>cos(a,b) = (a·b) / (|a||b|)</code> — chỉ xét <b>hướng</b>, bỏ qua độ dài. Giá trị 1 là trùng hướng, 0 là vuông góc.</td></tr>
<tr><td>Dot product</td><td>Nếu vector đã normalize về độ dài 1 thì dot product <b>bằng</b> cosine → nhanh hơn, đây là lý do nhiều hệ normalize sẵn.</td></tr>
<tr><td>Euclidean (L2)</td><td>Khoảng cách thẳng. Với vector đã normalize thì thứ tự xếp hạng tương đương cosine.</td></tr>
<tr><td>Nearest Neighbor</td><td>Tìm K vector gần nhất. Chính xác thì <code>O(n)</code> mỗi truy vấn — không chịu được ở quy mô lớn.</td></tr>
<tr><td>ANN (approximate)</td><td>Đánh đổi một ít độ chính xác (recall) để lấy tốc độ dưới mili-giây: HNSW, IVF. Đây là thứ vector DB thực sự làm.</td></tr>
</tbody></table>
<p class="src"><b>Tham khảo:</b> <a href="https://github.com/pgvector/pgvector#distances" target="_blank" rel="noopener">pgvector — Distances</a> cho quan hệ giữa cosine, dot product và L2</p>
<div class="tip"><b>Chỉ cần nhớ ba câu:</b> embedding là vector · so sánh bằng cosine similarity · lấy top-K bằng heap (hoặc index ANN). Chi tiết pgvector, HNSW, hybrid search để dành Phase 4.</div>
<div class="repo"><b>Repo nên đọc cho Phase 1–2:</b>
<ul>
<li><a href="https://github.com/jwasham/coding-interview-university" target="_blank" rel="noopener">jwasham/coding-interview-university</a> — lộ trình CS đầy đủ, dùng làm checklist chứ đừng học hết.</li>
<li><a href="https://github.com/yangshun/tech-interview-handbook" target="_blank" rel="noopener">yangshun/tech-interview-handbook</a> — bản rút gọn "chỉ học phần được hỏi", kèm cheatsheet thuật toán.</li>
<li><a href="https://github.com/labuladong/fucking-algorithm" target="_blank" rel="noopener">labuladong/fucking-algorithm</a> — dạy theo <b>mẫu giải</b> (sliding window, two pointers, DP) thay vì theo từng bài.</li>
<li><a href="https://github.com/TheAlgorithms/Python" target="_blank" rel="noopener">TheAlgorithms/Python</a> · <a href="https://github.com/trekhleb/javascript-algorithms" target="_blank" rel="noopener">trekhleb/javascript-algorithms</a> — tra cài đặt tham chiếu của một thuật toán.</li>
<li><a href="https://github.com/donnemartin/interactive-coding-challenges" target="_blank" rel="noopener">donnemartin/interactive-coding-challenges</a> — 120+ bài kèm test và Anki flashcard.</li>
<li><a href="https://github.com/mtdvio/every-programmer-should-know" target="_blank" rel="noopener">mtdvio/every-programmer-should-know</a> — gom đúng nhóm kiến thức nền của Phase 1.</li>
</ul></div>
</section>

<h2 class="dom">Phase 3 — OOP / SOLID / Design Patterns</h2>

<section id="p3-1">
<h3>3.1 OOP — bốn tính chất và điều thật sự được hỏi<a class="anch" href="#p3-1">#</a></h3>
<table>
<thead><tr><th>Tính chất</th><th>Ý nghĩa thực dụng</th></tr></thead>
<tbody>
<tr><td>Encapsulation</td><td>Che state, chỉ lộ hành vi. Lợi ích thật: đổi cách lưu bên trong mà không phá code gọi.</td></tr>
<tr><td>Abstraction</td><td>Người dùng phụ thuộc vào <b>hợp đồng</b>, không phụ thuộc cách làm.</td></tr>
<tr><td>Inheritance</td><td>Tái dùng qua quan hệ "là một". Dùng ít thôi — <b>ưu tiên composition</b>.</td></tr>
<tr><td>Polymorphism</td><td>Cùng một lời gọi, nhiều hành vi. Đây là thứ khiến bỏ được <code>if/else</code> theo loại.</td></tr>
</tbody></table>
<div class="warn"><b>Câu hỏi bẫy hay gặp: "Composition over inheritance nghĩa là gì?"</b> Kế thừa buộc lớp con vào <b>toàn bộ</b> lớp cha (fragile base class) và chỉ có một cha; composition thì ghép các mảnh hành vi độc lập, đổi lúc chạy được, dễ test hơn vì mock được từng mảnh. Ví dụ sai kinh điển: <code>class Stack &lt; Array</code> — Stack thừa hưởng cả <code>[]=</code> và <code>insert</code>, phá vỡ tính LIFO.</div>
</section>

<section id="p3-2">
<h3>3.2 SOLID — nói bằng ví dụ, đừng đọc định nghĩa<a class="anch" href="#p3-2">#</a></h3>
<table>
<thead><tr><th></th><th>Nguyên tắc</th><th>Dấu hiệu đang vi phạm</th></tr></thead>
<tbody>
<tr><td><b>S</b></td><td>Single Responsibility — một lớp một lý do để thay đổi</td><td>Class <code>User</code> vừa validate, vừa lưu DB, vừa gửi mail, vừa render JSON</td></tr>
<tr><td><b>O</b></td><td>Open/Closed — mở để mở rộng, đóng để sửa</td><td>Thêm một loại thanh toán là phải sửa lại <code>case type when …</code> ở 5 chỗ</td></tr>
<tr><td><b>L</b></td><td>Liskov Substitution — lớp con thay được lớp cha</td><td>Lớp con ném exception hoặc siết điều kiện đầu vào mà cha không có</td></tr>
<tr><td><b>I</b></td><td>Interface Segregation — interface nhỏ, đúng nhu cầu</td><td>Implement interface 12 method rồi 8 method để <code>raise NotImplementedError</code></td></tr>
<tr><td><b>D</b></td><td>Dependency Inversion — phụ thuộc vào abstraction</td><td>Service gọi thẳng <code>OpenAIClient.new</code> bên trong, không test được nếu không có mạng</td></tr>
</tbody></table>
<p class="src"><b>Tham khảo:</b> <a href="https://github.com/arialdomartini/Back-End-Developer-Interview-Questions" target="_blank" rel="noopener">arialdomartini/Back-End-Developer-Interview-Questions</a> — nhiều câu hỏi mở về SOLID và thiết kế, đúng kiểu được hỏi trong vòng backend</p>
<div class="qa"><b>Hỏi:</b> "SOLID nguyên tắc nào quan trọng nhất?" → <b>Đáp:</b> nói <b>D</b> và <b>S</b>, kèm lý do: D là thứ khiến hệ thống <i>test được</i> và <i>thay nhà cung cấp được</i>; S là thứ khiến sửa một yêu cầu không làm vỡ chỗ khác. Ba cái còn lại thường là hệ quả tự nhiên của hai cái này.</div>
</section>

<section id="p3-3">
<h3>3.3 Dependency Injection<a class="anch" href="#p3-3">#</a></h3>
<pre><code># Khó test: phụ thuộc bị đóng cứng bên trong
class SummaryService
  def call(text) = OpenAIClient.new(ENV["KEY"]).complete(text)
end

# DI: phụ thuộc đi vào từ ngoài
class SummaryService
  def initialize(llm:)                    # llm là abstraction
    @llm = llm
  end

  def call(text) = @llm.complete(text)
end
SummaryService.new(llm: FakeLLM.new)      # test: không cần mạng, không tốn token</code></pre>
<ul>
<li><b>Ba kiểu inject:</b> constructor (mặc định nên dùng), setter, và method/parameter injection.</li>
<li><b>Lợi ích thật khi phỏng vấn nên nêu:</b> test không cần I/O thật; thay provider không sửa business logic; nhìn constructor là biết một lớp phụ thuộc những gì (constructor 9 tham số là tín hiệu lớp đang làm quá nhiều việc).</li>
<li><b>DI container</b> chỉ là công cụ dựng sẵn cây phụ thuộc — không có container vẫn DI được. Đừng nói "DI nghĩa là dùng Spring/DryContainer".</li>
</ul>
</section>

<section id="p3-4">
<h3>3.4 Factory, Adapter, Decorator<a class="anch" href="#p3-4">#</a></h3>
<table>
<thead><tr><th>Pattern</th><th>Giải bài toán</th><th>Ví dụ trong backend AI</th></tr></thead>
<tbody>
<tr><td><b>Factory</b></td><td>Tạo object mà nơi gọi không cần biết lớp cụ thể</td><td><code>LLM.for(:claude)</code> trả về đúng client theo config</td></tr>
<tr><td><b>Adapter</b></td><td>Bọc một API lạ thành interface hệ thống mình đang dùng</td><td>Ba provider có tên field khác nhau (<code>messages</code> vs <code>contents</code>) → mỗi adapter chuẩn hoá về một dạng</td></tr>
<tr><td><b>Decorator</b></td><td>Thêm hành vi mà không sửa lớp gốc, xếp lớp được</td><td><code>Cached(Retried(Logged(llm)))</code> — cache, retry, logging cùng interface</td></tr>
</tbody></table>
<div class="tip"><b>Decorator là câu trả lời rất mạnh cho câu "làm sao thêm retry và cache cho LLM call?"</b> — vì mỗi mối quan tâm (cross-cutting concern) nằm ở một lớp riêng, bật/tắt theo môi trường, và business logic không biết chúng tồn tại.</div>
<p class="src"><b>Tham khảo:</b> <a href="https://refactoring.guru/design-patterns/catalog" target="_blank" rel="noopener">refactoring.guru — Design Patterns Catalog</a></p>
</section>

<section id="p3-5">
<h3>3.5 Strategy và Observer<a class="anch" href="#p3-5">#</a></h3>
<ul>
<li><b>Strategy</b> — nhiều thuật toán cùng interface, chọn lúc chạy. Đây là cách chuẩn để bỏ <code>case/switch</code> theo loại và là pattern hay dùng nhất khi làm việc với AI provider.</li>
<li><b>Observer</b> — một chủ thể phát sự kiện, nhiều bên đăng ký nghe, không biết nhau. Đây là hình mẫu của webhook, ActiveRecord callback, và pub/sub ở Phase 6.</li>
</ul>
<p class="src"><b>Tham khảo:</b> <a href="https://refactoring.guru/design-patterns/strategy" target="_blank" rel="noopener">refactoring.guru — Strategy</a> · <a href="https://github.com/DovAmir/awesome-design-patterns" target="_blank" rel="noopener">DovAmir/awesome-design-patterns</a></p>
<div class="warn"><b>Phân biệt Strategy và State:</b> cả hai đều là "đối tượng thay thế được", nhưng Strategy do <b>bên ngoài chọn</b> và các strategy không biết nhau, còn State <b>tự chuyển</b> sang state kế tiếp. Bị hỏi phân biệt hai cái này khá thường xuyên.</div>
</section>

<section id="p3-6">
<h3>3.6 Repository và tầng dữ liệu<a class="anch" href="#p3-6">#</a></h3>
<ul>
<li><b>Repository</b> tách "truy vấn dữ liệu" khỏi "logic nghiệp vụ": domain nói <code>orders.pending_for(user)</code>, không nói SQL. Đổi từ Postgres sang API ngoài chỉ sửa một lớp.</li>
<li><b>Khi nào KHÔNG cần:</b> nếu đã dùng ORM đầy đủ (ActiveRecord) và app nhỏ, thêm repository chỉ là một lớp gián tiếp vô ích. Nói được cả mặt này thì tránh bị đánh giá là học pattern thuộc lòng.</li>
<li><b>Unit of Work</b> — gom nhiều thay đổi vào một transaction, commit một lần. ActiveRecord/Hibernate đã làm sẵn.</li>
</ul>
<div class="qa"><b>Hỏi:</b> "Repository và DAO khác gì?" → <b>Đáp:</b> DAO gần bảng (một DAO một bảng, thao tác CRUD); Repository gần <b>domain</b> (một repository một aggregate, method mang nghĩa nghiệp vụ, bên trong có thể join nhiều bảng hoặc gọi cả cache).</div>
</section>

<section id="p3-7">
<h3>3.7 Thiết kế lớp AI: LLMProvider bằng Strategy<a class="anch" href="#p3-7">#</a></h3>
<p>Đây là chỗ AI gắn <b>trực tiếp</b> vào software design — và là câu hỏi rất hay gặp khi ứng tuyển backend có làm AI.</p>
<pre><code>          LLMProvider (interface)
          ├── OpenAIProvider
          ├── ClaudeProvider
          └── GeminiProvider

Tầng service, mỗi lớp một việc:
LLMService        gọi model, đếm token, retry, fallback
EmbeddingService  văn bản → vector (model khác, giá khác)
VectorStore       upsert / search top-K
Reranker          xếp lại thứ tự kết quả cho chính xác hơn</code></pre>
<table>
<thead><tr><th>Pattern</th><th>Vai trò trong kiến trúc này</th></tr></thead>
<tbody>
<tr><td>Strategy</td><td>Đổi provider/model bằng config, không sửa business logic</td></tr>
<tr><td>Adapter</td><td>Chuẩn hoá request/response khác nhau của từng provider về một dạng</td></tr>
<tr><td>Factory</td><td><code>LLMProvider.for(model_name)</code> — nơi duy nhất biết mapping model → client</td></tr>
<tr><td>Decorator</td><td>Bọc thêm cache, retry, rate limit, logging token &amp; cost</td></tr>
<tr><td>Repository</td><td><code>VectorStore</code> che pgvector/Qdrant — đổi backend không ảnh hưởng RAG service</td></tr>
</tbody></table>
<div class="tip"><b>Trả lời mẫu:</b> "Tôi đặt một interface <code>LLMProvider</code> với <code>complete</code> và <code>stream</code>. Mỗi provider là một adapter. <code>LLMService</code> nhận provider qua DI nên test được bằng fake, và tôi bọc thêm decorator cache + retry. Nhờ vậy khi provider chính hết quota, chỉ đổi thứ tự fallback trong config."</div>
<div class="repo"><b>Repo nên đọc cho Phase 3:</b>
<ul>
<li><a href="https://github.com/DovAmir/awesome-design-patterns" target="_blank" rel="noopener">DovAmir/awesome-design-patterns</a> — danh sách pattern theo cả ngôn ngữ và kiến trúc.</li>
<li><a href="https://github.com/ashishps1/awesome-low-level-design" target="_blank" rel="noopener">ashishps1/awesome-low-level-design</a> — LLD/OOD interview: bài thiết kế class kèm code, đúng thứ vòng phỏng vấn "design a parking lot" hỏi.</li>
<li><a href="https://refactoring.guru/design-patterns" target="_blank" rel="noopener">refactoring.guru</a> — hình minh hoạ dễ nhớ nhất cho 23 pattern GoF.</li>
</ul></div>
<p class="src"><b>Tham khảo:</b> cách bố trí <code>LLMProvider</code> và tầng service đối chiếu với hai LLM gateway mã nguồn mở <a href="https://github.com/BerriAI/litellm" target="_blank" rel="noopener">BerriAI/litellm</a> và <a href="https://github.com/Portkey-AI/gateway" target="_blank" rel="noopener">Portkey-AI/gateway</a></p>
</section>

<h2 class="dom">Phase 4 — Database (kèm Vector DB)</h2>

<section id="p4-1">
<h3>4.1 SQL và JOIN<a class="anch" href="#p4-1">#</a></h3>
<table>
<thead><tr><th>Loại JOIN</th><th>Trả về</th></tr></thead>
<tbody>
<tr><td><code>INNER JOIN</code></td><td>Chỉ dòng khớp ở cả hai bảng</td></tr>
<tr><td><code>LEFT JOIN</code></td><td>Toàn bộ bảng trái; bên phải không khớp thì <code>NULL</code></td></tr>
<tr><td><code>FULL OUTER JOIN</code></td><td>Cả hai bên, thiếu thì <code>NULL</code></td></tr>
<tr><td><code>CROSS JOIN</code></td><td>Tích Descartes — thường là dấu hiệu quên điều kiện join</td></tr>
</tbody></table>
<ul>
<li><b>Thứ tự thực thi logic</b> (khác thứ tự viết): <code>FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT</code>. Đây là lý do <b>không dùng được alias của SELECT trong WHERE</b>, và <code>WHERE</code> lọc trước khi gộp còn <code>HAVING</code> lọc sau.</li>
<li><b><code>NULL</code> không bằng gì cả</b>, kể cả chính nó: phải dùng <code>IS NULL</code>. <code>NOT IN (subquery có NULL)</code> trả về rỗng — bug rất khó thấy, nên dùng <code>NOT EXISTS</code>.</li>
<li><b>Window function</b> là thứ phân biệt ứng viên trung cấp: <code>ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC)</code> để lấy "bản ghi mới nhất của mỗi user" — thay cho self-join lằng nhằng.</li>
</ul>
<div class="warn"><b>Bẫy <code>LEFT JOIN</code>:</b> đặt điều kiện của bảng phải vào <code>WHERE</code> sẽ biến nó thành <code>INNER JOIN</code>. Điều kiện đó phải nằm trong <code>ON</code>.</div>
<p class="src"><b>Tham khảo:</b> <a href="https://www.postgresql.org/docs/current/sql-select.html" target="_blank" rel="noopener">PostgreSQL — SELECT</a> cho thứ tự thực thi logic và hành vi của <code>NULL</code></p>
</section>

<section id="p4-2">
<h3>4.2 Index và B-tree<a class="anch" href="#p4-2">#</a></h3>
<ul>
<li>Index là cấu trúc <b>đã sắp xếp</b> trỏ về dòng dữ liệu. B-tree cho lookup, range, prefix, và <code>ORDER BY</code> — vì lá được liên kết theo thứ tự.</li>
<li><b>Composite index tuân luật tiền tố trái:</b> index <code>(a, b, c)</code> dùng được cho <code>WHERE a</code>, <code>WHERE a AND b</code>, <code>WHERE a AND b AND c</code> — nhưng <b>không</b> cho <code>WHERE b</code> đơn lẻ. Thứ tự cột là quyết định thiết kế, không phải tuỳ ý.</li>
<li><b>Covering index</b> chứa đủ mọi cột truy vấn cần → đọc xong index là xong, không phải lấy dòng gốc (index-only scan).</li>
<li><b>Selectivity</b>: index trên cột chỉ có 2 giá trị (<code>is_active</code>) hầu như vô dụng — planner thấy phải đọc nửa bảng thì chọn seq scan luôn. Trường hợp này dùng <b>partial index</b>: <code>WHERE is_active = false</code> nếu đó là nhóm nhỏ.</li>
</ul>
<table>
<thead><tr><th>Điều làm index <b>không</b> được dùng</th><th>Sửa thế nào</th></tr></thead>
<tbody>
<tr><td>Bọc hàm quanh cột: <code>WHERE lower(email) = ?</code></td><td>Tạo expression index trên <code>lower(email)</code></td></tr>
<tr><td><code>LIKE '%abc'</code> (wildcard đầu)</td><td>Dùng full-text search hoặc trigram index (<code>pg_trgm</code>)</td></tr>
<tr><td>Lệch kiểu dữ liệu (string so với số)</td><td>Cast đúng phía tham số, không cast phía cột</td></tr>
<tr><td>Cột <code>OR</code> rời rạc</td><td>Tách thành <code>UNION</code>, hoặc index từng cột để bitmap-or</td></tr>
</tbody></table>
<p class="src"><b>Tham khảo:</b> <a href="https://use-the-index-luke.com/" target="_blank" rel="noopener">use-the-index-luke.com</a> — luật tiền tố trái, covering index và selectivity giải thích rõ nhất ở đây (miễn phí)</p>
<div class="warn"><b>Giá của index:</b> mọi <code>INSERT/UPDATE/DELETE</code> phải cập nhật tất cả index, và index tốn dung lượng lẫn buffer cache. Bảng ghi nhiều mà có 12 index là một vấn đề. Trả lời "thêm index" cho mọi câu hỏi hiệu năng sẽ bị hỏi ngược lại đúng chỗ này.</div>
</section>

<section id="p4-3">
<h3>4.3 Query optimization, EXPLAIN và N+1<a class="anch" href="#p4-3">#</a></h3>
<p>Quy trình trả lời chuẩn cho câu "một API chậm, anh làm gì?" — nói theo <b>thứ tự</b> này:</p>
<ol>
<li><b>Đo trước đã:</b> APM/log cho biết thời gian nằm ở DB, ở app, hay ở API ngoài. Không đoán.</li>
<li><b>Tìm query thủ phạm:</b> <code>pg_stat_statements</code> theo tổng thời gian, không theo thời gian một lần.</li>
<li><b><code>EXPLAIN (ANALYZE, BUFFERS)</code>:</b> tìm <code>Seq Scan</code> trên bảng lớn, <code>rows</code> ước lượng lệch xa thực tế (thống kê cũ → <code>ANALYZE</code>), nested loop với vòng ngoài nhiều dòng, và <code>Sort</code> phải tràn ra đĩa.</li>
<li><b>Sửa theo thứ tự rẻ → đắt:</b> thêm/sửa index → viết lại query → giảm dữ liệu trả về (phân trang, chỉ chọn cột cần) → cache → denormalize / materialized view → cuối cùng mới là sharding.</li>
</ol>
<div class="warn"><b>N+1 query</b> — lấy 1 danh sách rồi lặp gọi thêm 1 query mỗi phần tử. Đây là nguyên nhân số một của API chậm trong app ORM. Chữa bằng eager loading (<code>includes</code> / <code>JOIN FETCH</code>) hoặc một query gộp <code>WHERE id IN (...)</code>. <b>Luôn nhắc N+1</b> khi được hỏi về tối ưu — người phỏng vấn backend đang chờ đúng từ này.</div>
<p class="src"><b>Tham khảo:</b> <a href="https://www.postgresql.org/docs/current/using-explain.html" target="_blank" rel="noopener">PostgreSQL — Using EXPLAIN</a> · <a href="https://use-the-index-luke.com/no-offset" target="_blank" rel="noopener">use-the-index-luke — No Offset</a></p>
<div class="tip"><b>Phân trang:</b> <code>OFFSET 100000</code> phải đọc và bỏ 100k dòng → càng sâu càng chậm. Dùng <b>keyset pagination</b>: <code>WHERE (created_at, id) &lt; (?, ?) ORDER BY created_at DESC, id DESC LIMIT 20</code>.</div>
</section>

<section id="p4-4">
<h3>4.4 Transaction, ACID và isolation level<a class="anch" href="#p4-4">#</a></h3>
<table>
<thead><tr><th></th><th>Nghĩa</th></tr></thead>
<tbody>
<tr><td><b>A</b>tomicity</td><td>Cả khối thành công hoặc không gì cả</td></tr>
<tr><td><b>C</b>onsistency</td><td>Ràng buộc (khoá ngoại, unique, check) luôn đúng trước và sau</td></tr>
<tr><td><b>I</b>solation</td><td>Giao dịch song song không thấy trạng thái dở dang của nhau</td></tr>
<tr><td><b>D</b>urability</td><td>Đã commit là còn, kể cả mất điện (WAL đã fsync)</td></tr>
</tbody></table>
<table>
<thead><tr><th>Isolation level</th><th>Dirty read</th><th>Non-repeatable read</th><th>Phantom read</th></tr></thead>
<tbody>
<tr><td>Read Uncommitted</td><td>có</td><td>có</td><td>có</td></tr>
<tr><td>Read Committed <i>(mặc định Postgres)</i></td><td>không</td><td>có</td><td>có</td></tr>
<tr><td>Repeatable Read <i>(mặc định MySQL InnoDB)</i></td><td>không</td><td>không</td><td>theo <b>chuẩn SQL</b>: có</td></tr>
<tr><td>Serializable</td><td>không</td><td>không</td><td>không</td></tr>
</tbody></table>
<div class="warn"><b>Bảng trên là theo chuẩn SQL — hiện thực thật khác, và đây là chỗ ăn điểm.</b> Cả hai engine phổ biến đều <b>chặn</b> phantom read ở mức Repeatable Read nhưng bằng hai cách khác nhau: <b>Postgres</b> RR thực chất là <i>snapshot isolation</i> — mọi lần đọc dùng chung một snapshot nên không có phantom, nhưng vẫn có thể <b>write skew</b> (chính vì vậy mới cần mức Serializable/SSI); <b>MySQL InnoDB</b> chặn phantom bằng <b>next-key lock</b> cho lệnh đọc có khoá và bằng MVCC cho đọc thường. Nói được khác biệt "chuẩn nói vậy, engine làm khác" thường gây ấn tượng hơn là đọc thuộc bảng.</div>
<ul>
<li><b>MVCC</b>: mỗi giao dịch đọc một snapshot, đọc không chặn ghi và ghi không chặn đọc. Giá phải trả là bản cũ tích lại → cần <code>VACUUM</code>, và <b>bloat</b> nếu có giao dịch mở quá lâu.</li>
<li><b>Lost update</b> — hai bên đọc số dư rồi cùng ghi. Chữa bằng <code>SELECT ... FOR UPDATE</code> (pessimistic) hoặc cột <code>lock_version</code> (optimistic), hoặc để DB tính: <code>UPDATE ... SET balance = balance - 10</code>.</li>
</ul>
<p class="src"><b>Tham khảo:</b> bảng isolation level theo <a href="https://www.postgresql.org/docs/current/transaction-iso.html" target="_blank" rel="noopener">PostgreSQL — Transaction Isolation</a></p>
<div class="warn"><b>Đừng bao giờ gọi API ngoài bên trong transaction.</b> LLM call mất 10 giây sẽ giữ transaction mở 10 giây → giữ lock, chặn <code>VACUUM</code>, phình connection pool. Mẫu đúng: commit trước, rồi enqueue job gọi AI. Đây là lỗi thiết kế hay gặp nhất khi ghép AI vào app cũ.</div>
</section>

<section id="p4-5">
<h3>4.5 Lock và deadlock<a class="anch" href="#p4-5">#</a></h3>
<ul>
<li><b>Shared (đọc)</b> chồng nhau được; <b>exclusive (ghi)</b> thì không. Ở mức bảng còn có lock cho DDL — chạy <code>ALTER TABLE</code> sai cách khoá cả bảng.</li>
<li><b>Deadlock</b> = hai giao dịch mỗi bên giữ một tài nguyên và chờ tài nguyên bên kia → chu trình trong wait-for graph (đúng bài phát hiện chu trình ở Phase 2). DB tự phát hiện và <b>hủy một bên</b>; app phải retry.</li>
<li><b>Bốn cách giảm deadlock:</b> luôn khoá tài nguyên theo <b>cùng một thứ tự</b> · giữ transaction <b>ngắn</b> · giảm isolation nếu nghiệp vụ cho phép · dùng <code>SELECT ... FOR UPDATE SKIP LOCKED</code> cho mẫu job queue.</li>
<li><b>Lock wait timeout</b> khác deadlock: chỉ là chờ quá lâu, không có chu trình.</li>
</ul>
<div class="tip"><code>FOR UPDATE SKIP LOCKED</code> là cách dùng chính Postgres làm job queue nhẹ: nhiều worker cùng <code>SELECT</code> nhưng mỗi dòng chỉ một worker lấy được, không worker nào phải chờ. Rất hay được hỏi khi bàn về AI worker pool ở Phase 7.</div>
<p class="src"><b>Tham khảo:</b> <a href="https://www.postgresql.org/docs/current/explicit-locking.html" target="_blank" rel="noopener">PostgreSQL — Explicit Locking</a> (kể cả <code>FOR UPDATE SKIP LOCKED</code> và cách phát hiện deadlock)</p>
</section>

<section id="p4-6">
<h3>4.6 Replication, partitioning, sharding<a class="anch" href="#p4-6">#</a></h3>
<table>
<thead><tr><th></th><th>Chia cái gì</th><th>Giải quyết</th><th>Giá phải trả</th></tr></thead>
<tbody>
<tr><td><b>Replication</b></td><td>Nhân bản <i>toàn bộ</i> dữ liệu sang node khác</td><td>Đọc nhiều, HA, DR</td><td>Replication lag → đọc dữ liệu cũ</td></tr>
<tr><td><b>Partitioning</b></td><td>Chia một bảng thành nhiều phần <i>trong cùng DB</i></td><td>Bảng quá lớn, xoá dữ liệu cũ bằng drop partition</td><td>Query không có khoá phân vùng phải quét hết</td></tr>
<tr><td><b>Sharding</b></td><td>Chia dữ liệu ra <i>nhiều DB/máy</i> khác nhau</td><td>Ghi quá nhiều cho một máy</td><td>Mất join xuyên shard, mất transaction toàn cục, rebalance rất khó</td></tr>
</tbody></table>
<ul>
<li><b>Sync vs async replication:</b> sync không mất dữ liệu khi primary chết nhưng mọi commit phải chờ replica; async nhanh nhưng có cửa sổ mất dữ liệu (RPO &gt; 0).</li>
<li><b>Read-your-own-write:</b> user vừa ghi rồi đọc lại từ replica chưa kịp đồng bộ sẽ thấy dữ liệu cũ. Chữa bằng "đọc từ primary trong N giây sau khi ghi", hoặc sticky theo user.</li>
<li><b>Chọn shard key</b> là quyết định khó gỡ nhất: phải phân bố đều (tránh hotspot) và phải chứa được trong <b>hầu hết</b> truy vấn. Chọn theo <code>tenant_id</code> thường tốt; theo thời gian thì mọi ghi đổ vào một shard.</li>
</ul>
<p class="src"><b>Tham khảo:</b> <a href="https://github.com/ept/ddia-references" target="_blank" rel="noopener">ept/ddia-references</a> — chương 5 (Replication) và 6 (Partitioning) của <i>Designing Data-Intensive Applications</i> là nguồn gốc của cách phân biệt ở bảng trên</p>
<div class="qa"><b>Hỏi:</b> "Khi nào mới nên shard?" → <b>Đáp:</b> sau khi đã dùng hết: index đúng, cache, read replica, partition, tách bảng nóng, và scale dọc. Shard là bước cuối vì nó đổi cả mô hình lập trình chứ không chỉ hạ tầng.</div>
</section>

<section id="p4-7">
<h3>4.7 NoSQL và cách chọn loại database<a class="anch" href="#p4-7">#</a></h3>
<table>
<thead><tr><th>Loại</th><th>Mạnh khi</th><th>Ví dụ</th></tr></thead>
<tbody>
<tr><td>Relational</td><td>Quan hệ phức tạp, transaction, ràng buộc chặt — <b>mặc định nên chọn</b></td><td>Postgres, MySQL</td></tr>
<tr><td>Document</td><td>Schema linh hoạt, đọc trọn một aggregate</td><td>MongoDB</td></tr>
<tr><td>Key-value</td><td>Tra cực nhanh theo khoá, cache, session, rate limit</td><td>Redis</td></tr>
<tr><td>Wide-column</td><td>Ghi cực nhiều, chuỗi thời gian, quy mô cực lớn</td><td>Cassandra</td></tr>
<tr><td>Search</td><td>Full-text, xếp hạng theo độ liên quan, faceting</td><td>Elasticsearch, OpenSearch</td></tr>
<tr><td>Vector</td><td>Tìm theo <b>ngữ nghĩa</b>, top-K vector gần nhất</td><td>pgvector, Qdrant, Pinecone</td></tr>
</tbody></table>
<div class="tip"><b>Trả lời an toàn và đúng:</b> "Tôi mặc định chọn Postgres và chỉ thêm store khác khi có yêu cầu nó giải quyết tốt hơn rõ rệt — Redis cho cache/rate limit, và pgvector cho semantic search vì vẫn ở trong cùng một DB nên không phải đồng bộ hai nguồn." Đây cũng là lý do Postgres + pgvector là lựa chọn thực tế nhất cho phần lớn dự án RAG.</div>
</section>

<section id="p4-8">
<h3>4.8 Embedding và vector database<a class="anch" href="#p4-8">#</a></h3>
<pre><code>Text  →  Embedding model  →  Vector (768 / 1536 / 3072 chiều)
                                  ↓  lưu kèm metadata
                            Vector Database</code></pre>
<table>
<thead><tr><th>Lựa chọn</th><th>Đặc điểm</th><th>Chọn khi</th></tr></thead>
<tbody>
<tr><td><b>pgvector</b></td><td>Extension của Postgres, vector là một kiểu cột bình thường</td><td>Đã dùng Postgres; muốn lọc metadata bằng SQL và join với bảng nghiệp vụ; dữ liệu tới hàng chục triệu vector</td></tr>
<tr><td><b>Qdrant</b></td><td>Vector DB riêng, mã nguồn mở, filter mạnh, self-host được</td><td>Cần hiệu năng vector cao, payload filtering phức tạp</td></tr>
<tr><td><b>Pinecone</b></td><td>Dịch vụ quản lý, không phải vận hành</td><td>Muốn nhanh, chấp nhận phụ thuộc nhà cung cấp và chi phí theo quy mô</td></tr>
<tr><td><b>FAISS</b></td><td><b>Thư viện</b>, không phải database — không có server, không bền vững sẵn</td><td>Batch offline, thử nghiệm, index nằm trong RAM một process</td></tr>
</tbody></table>
<pre><code>CREATE EXTENSION vector;

CREATE TABLE doc_chunks (
  id          bigserial PRIMARY KEY,
  document_id bigint NOT NULL REFERENCES documents(id),
  tenant_id   bigint NOT NULL,
  content     text   NOT NULL,
  embedding   vector(1536) NOT NULL
);

-- Index ANN: HNSW cho truy vấn nhanh, cosine distance
CREATE INDEX ON doc_chunks
  USING hnsw (embedding vector_cosine_ops);</code></pre>
<p class="src"><b>Tham khảo:</b> <a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener">pgvector/pgvector</a> (kiểu cột, ops class, tuning) · <a href="https://qdrant.tech/documentation/concepts/indexing/" target="_blank" rel="noopener">Qdrant — Indexing</a></p>
<div class="warn"><b>Ba cái bẫy phải biết:</b> (1) <b>số chiều là cố định</b> theo model — đổi embedding model là phải <b>index lại toàn bộ</b>; (2) toán tử trong query phải khớp với ops của index (<code>&lt;=&gt;</code> cosine ↔ <code>vector_cosine_ops</code>), lệch là index không được dùng; (3) vector 1536 chiều float32 tốn ~6 KB mỗi dòng — 10 triệu chunk là ~60 GB, phải tính trước dung lượng và bộ nhớ.</div>
</section>

<section id="p4-9">
<h3>4.9 Vector search — HNSW, IVF và filter<a class="anch" href="#p4-9">#</a></h3>
<pre><code>Query "làm sao đổi mật khẩu"
   ↓ embedding (cùng model đã dùng để index!)
[0.11, 0.79, ...]
   ↓ similarity search + filter tenant
Top K chunks
   ↓
LLM sinh câu trả lời</code></pre>
<table>
<thead><tr><th>Index</th><th>Cách hoạt động</th><th>Đánh đổi</th></tr></thead>
<tbody>
<tr><td><b>HNSW</b></td><td>Đồ thị nhiều tầng, đi từ thô đến tinh</td><td>Truy vấn nhanh nhất, recall cao; build chậm và tốn RAM</td></tr>
<tr><td><b>IVFFlat</b></td><td>Chia không gian thành cluster, chỉ quét vài cluster gần nhất</td><td>Build nhanh, ít RAM; recall phụ thuộc số cluster quét</td></tr>
<tr><td>Không index</td><td>Quét tuần tự, chính xác 100%</td><td>Chấp nhận được khi dưới vài chục nghìn vector</td></tr>
</tbody></table>
<ul>
<li><b>Recall vs latency</b> là núm điều chỉnh chính: <code>hnsw.ef_search</code> (hoặc <code>ivfflat.probes</code>) tăng thì chính xác hơn nhưng chậm hơn. Nói được từ <b>recall@k</b> là dấu hiệu bạn đã làm thật.</li>
<li><b>Pre-filter vs post-filter:</b> lọc <code>tenant_id</code> <b>trước</b> khi tìm ANN thì đúng nhưng có thể không dùng được index; lọc <b>sau</b> thì nhanh nhưng có nguy cơ top-K rỗng sạch sau khi lọc. Đây là vấn đề thật của mọi hệ RAG multi-tenant, và là câu hỏi phân biệt ứng viên.</li>
<li><b>Bảo mật dữ liệu:</b> filter theo tenant/permission phải nằm trong <b>truy vấn</b>, không phải lọc ở tầng app sau khi đã lấy về — nếu không, một tenant có thể làm rò rỉ chunk của tenant khác qua câu trả lời của LLM.</li>
</ul>
<p class="src"><b>Tham khảo:</b> <a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener">pgvector</a> cho HNSW/IVFFlat và các núm <code>ef_search</code>/<code>probes</code> · <a href="https://qdrant.tech/documentation/concepts/filtering/" target="_blank" rel="noopener">Qdrant — Filtering</a> cho vấn đề pre-filter so với post-filter</p>
</section>

<section id="p4-10">
<h3>4.10 Hybrid search và reranking<a class="anch" href="#p4-10">#</a></h3>
<pre><code>Query
 ├── Keyword search (BM25 / tsvector)   → khớp chính xác: mã lỗi, tên riêng, SKU
 └── Vector search (embedding)          → khớp nghĩa: cách diễn đạt khác
              ↓  gộp điểm (RRF)
           Rerank (cross-encoder)
              ↓
          Top N cuối cùng → LLM</code></pre>
<table>
<thead><tr><th>Cách tìm</th><th>Giỏi</th><th>Dở</th></tr></thead>
<tbody>
<tr><td>Keyword (BM25)</td><td>Từ khoá chính xác, mã sản phẩm, tên người, ký hiệu</td><td>Người dùng diễn đạt khác từ trong tài liệu</td></tr>
<tr><td>Vector (semantic)</td><td>Hỏi bằng lời tự nhiên, đồng nghĩa, đa ngôn ngữ</td><td>Mã <code>ERR-5031</code> — vector không hiểu chuỗi lạ</td></tr>
<tr><td><b>Hybrid</b></td><td>Cả hai; đây là mặc định của hệ production</td><td>Phức tạp hơn, cần tinh chỉnh trọng số</td></tr>
</tbody></table>
<ul>
<li><b>RRF (Reciprocal Rank Fusion)</b> gộp hai danh sách chỉ dựa vào <b>hạng</b>: <code>score = Σ 1/(k + rank)</code>. Ưu điểm: không cần chuẩn hoá hai thang điểm khác nhau — nên dùng được ngay.</li>
<li><b>Reranker</b> là cross-encoder: đọc <i>cặp</i> (query, document) cùng lúc nên chính xác hơn embedding nhiều, nhưng chậm và đắt → chỉ chạy trên top ~50 kết quả, trả về top ~5.</li>
<li><b>Vì sao rerank quan trọng với RAG:</b> LLM bị "lost in the middle" — tài liệu đúng nằm giữa context dễ bị bỏ qua. Đưa ít tài liệu hơn nhưng đúng hơn cho kết quả tốt hơn và rẻ hơn.</li>
</ul>
<p class="src"><b>Nguồn của từng ý:</b> hằng số <code>k = 60</code> của RRF lấy từ bài báo gốc <a href="https://plg.uwaterloo.ca/~gvcormac/cormacksigir09-rrf.pdf" target="_blank" rel="noopener">Cormack et al., <i>Reciprocal Rank Fusion outperforms Condorcet…</i> (SIGIR 2009)</a> · hiện tượng "lost in the middle" lấy từ <a href="https://arxiv.org/abs/2307.03172" target="_blank" rel="noopener">Liu et al., <i>Lost in the Middle: How Language Models Use Long Contexts</i> (arXiv:2307.03172)</a> · kỹ thuật rerank và hybrid theo <a href="https://github.com/NirDiamant/RAG_Techniques" target="_blank" rel="noopener">NirDiamant/RAG_Techniques</a></p>
<div class="tip"><b>Đây là phần AI đáng ưu tiên nhất cho backend developer.</b> Nếu chỉ có thời gian học một thứ về AI, học nhóm 4.8–4.10: nó vừa là kiến thức database, vừa là 30% phần AI trong phỏng vấn.</div>
<div class="repo"><b>Repo &amp; tài liệu cho Phase 4:</b>
<ul>
<li><a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener">pgvector/pgvector</a> — README chính là tài liệu tốt nhất về HNSW/IVFFlat, toán tử và cách tuning.</li>
<li><a href="https://github.com/qdrant/qdrant" target="_blank" rel="noopener">qdrant/qdrant</a> · <a href="https://github.com/facebookresearch/faiss" target="_blank" rel="noopener">facebookresearch/faiss</a> — đọc để hiểu vector DB thật làm gì bên trong.</li>
<li><a href="https://github.com/ept/ddia-references" target="_blank" rel="noopener">ept/ddia-references</a> — nguồn tham chiếu của <i>Designing Data-Intensive Applications</i>, quyển nên đọc cho Phase 4 và 7.</li>
<li><a href="https://use-the-index-luke.com/" target="_blank" rel="noopener">use-the-index-luke.com</a> — giải thích index và execution plan rõ nhất, miễn phí.</li>
<li><a href="https://github.com/bregman-arie/devops-exercises" target="_blank" rel="noopener">bregman-arie/devops-exercises</a> — có chương SQL/NoSQL dạng hỏi đáp để tự kiểm tra.</li>
</ul></div>
</section>

<h2 class="dom">Phase 5 — OS / Networking / HTTP</h2>

<section id="p5-1">
<h3>5.1 TCP/IP và DNS<a class="anch" href="#p5-1">#</a></h3>
<table>
<thead><tr><th></th><th>TCP</th><th>UDP</th></tr></thead>
<tbody>
<tr><td>Đảm bảo</td><td>Đến đủ, đúng thứ tự, có retransmit</td><td>Không đảm bảo gì</td></tr>
<tr><td>Chi phí</td><td>Handshake 3 bước, ACK, congestion control</td><td>Gửi là xong</td></tr>
<tr><td>Dùng cho</td><td>HTTP, DB, hầu hết backend</td><td>DNS, video/voice, QUIC (HTTP/3)</td></tr>
</tbody></table>
<ul>
<li><b>Handshake 3 bước</b> <code>SYN → SYN-ACK → ACK</code>: đây là <b>một RTT</b> trước khi gửi được byte dữ liệu đầu tiên — lý do connection pool tồn tại.</li>
<li><b>TIME_WAIT</b>: bên <b>chủ động đóng</b> kết nối giữ socket thêm 2×MSL. Hệ quả thực tế: một service mở/đóng hàng nghìn kết nối <b>ra ngoài</b> mỗi giây (tới DB, tới API khác) sẽ cạn <b>ephemeral port</b> — lại là lý do phải reuse connection.</li>
<li><b>DNS</b>: resolver → root → TLD → authoritative, cache theo <b>TTL</b> ở mọi tầng. Hệ quả thực tế: đổi DNS <b>không</b> có hiệu lực ngay, nên hạ TTL <i>trước</i> khi migration. Nhiều client cache DNS suốt đời process — sự cố kinh điển khi failover.</li>
</ul>
<p class="src"><b>Nguồn của các con số:</b> <a href="https://colin-scott.github.io/personal_website/research/interactive_latency.html" target="_blank" rel="noopener">Latency Numbers Every Programmer Should Know</a> (bản tương tác của Colin Scott, gốc từ Jeff Dean) · con số về LLM lấy từ <a href="https://github.com/ray-project/llm-numbers" target="_blank" rel="noopener">ray-project/llm-numbers</a></p>
<div class="tip"><b>Con số nên nhớ để estimate:</b> trong cùng datacenter ~0.5 ms; xuyên vùng ~10–100 ms; đọc SSD ~100 µs; đọc RAM ~100 ns; một lần gọi LLM ~<b>1–30 giây</b>. Đúng cái cuối là điều khiến kiến trúc AI khác kiến trúc CRUD.</div>
</section>

<section id="p5-2">
<h3>5.2 HTTP — method, status, cache<a class="anch" href="#p5-2">#</a></h3>
<table>
<thead><tr><th>Method</th><th>Safe</th><th>Idempotent</th></tr></thead>
<tbody>
<tr><td><code>GET</code>, <code>HEAD</code></td><td>có</td><td>có</td></tr>
<tr><td><code>PUT</code>, <code>DELETE</code></td><td>không</td><td><b>có</b> — gọi lại cho cùng kết quả</td></tr>
<tr><td><code>POST</code></td><td>không</td><td><b>không</b> — nên cần Idempotency-Key (Phase 7)</td></tr>
<tr><td><code>PATCH</code></td><td>không</td><td>không đảm bảo</td></tr>
</tbody></table>
<ul>
<li><b>Status code phải dùng đúng:</b> <code>400</code> sai cú pháp · <code>401</code> chưa xác thực · <code>403</code> đã xác thực nhưng không có quyền · <code>404</code> không tồn tại · <code>409</code> xung đột trạng thái · <code>422</code> đúng cú pháp nhưng sai nghiệp vụ · <code>429</code> quá nhiều request · <code>408</code> request timeout (còn <code>499</code> hay thấy trong log là mã <b>riêng của nginx</b>, không thuộc chuẩn HTTP, nghĩa là client tự ngắt trước khi có response) · <code>500</code> lỗi mình · <code>502/503/504</code> lỗi upstream/quá tải/timeout upstream.</li>
<li><b>Cache HTTP:</b> <code>Cache-Control: max-age</code> quyết định tươi bao lâu; <code>ETag</code> + <code>If-None-Match</code> cho <code>304 Not Modified</code>; <code>stale-while-revalidate</code> trả bản cũ ngay rồi làm mới ngầm.</li>
<li><b>HTTP/1.1 vs 2 vs 3:</b> 1.1 có head-of-line blocking ở tầng ứng dụng nên browser mở nhiều kết nối; 2 multiplexing trên một kết nối nhưng vẫn tắc ở tầng TCP; 3 chạy trên QUIC/UDP nên gỡ luôn head-of-line của TCP.</li>
</ul>
<p class="src"><b>Tham khảo:</b> <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" target="_blank" rel="noopener">MDN — HTTP response status codes</a> · <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching" target="_blank" rel="noopener">MDN — HTTP caching</a> · <a href="https://github.com/ByteByteGoHq/system-design-101" target="_blank" rel="noopener">ByteByteGoHq/system-design-101</a> (sơ đồ so sánh HTTP/1.1, 2, 3)</p>
</section>

<section id="p5-3">
<h3>5.3 TLS và bảo mật đường truyền<a class="anch" href="#p5-3">#</a></h3>
<ul>
<li><b>TLS handshake</b>: thoả thuận thuật toán, server gửi certificate, xác thực chuỗi tin cậy tới CA, trao đổi khoá (ECDHE — forward secrecy), rồi chuyển sang mã hoá đối xứng. TLS 1.3 gọn còn <b>1 RTT</b> (và 0-RTT khi resume).</li>
<li><b>Bất đối xứng chỉ dùng để trao khoá</b>, phần dữ liệu dùng đối xứng vì nhanh hơn hàng trăm lần. Nói được điều này là đủ cho vòng backend.</li>
<li><b>TLS termination</b>: thường kết thúc ở load balancer/CDN; đoạn trong mạng nội bộ có thể là HTTP thường, hoặc mTLS nếu zero-trust. Nhớ là <b>certificate hết hạn</b> là nguyên nhân sự cố production rất phổ biến — phải có alert trước 30 ngày.</li>
<li><b>Bảo vệ API key của LLM provider:</b> key <b>chỉ nằm ở backend</b>, không bao giờ ở client/mobile/JS. Client gọi backend của mình, backend gọi provider — đây cũng là chỗ đặt auth, rate limit và logging chi phí.</li>
</ul>
<p class="src"><b>Tham khảo:</b> <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security" target="_blank" rel="noopener">MDN — Transport Layer Security</a></p>
</section>

<section id="p5-4">
<h3>5.4 Process, thread và bộ nhớ ở mức OS<a class="anch" href="#p5-4">#</a></h3>
<ul>
<li><b>Process</b> có không gian địa chỉ riêng; <b>thread</b> chia sẻ trong cùng process. Context switch giữa process đắt hơn giữa thread.</li>
<li><b>Blocking I/O</b> làm thread ngủ; <b>non-blocking + epoll/kqueue</b> cho một thread quản hàng nghìn kết nối. Đây là nền của Node/Nginx và của mọi server chịu nhiều kết nối chờ lâu.</li>
<li><b>OOM killer</b>: Linux giết process ngốn RAM nhất khi hết bộ nhớ. Trong container, vượt <code>memory limit</code> là bị kill với exit code <b>137</b> — dấu hiệu phải nhận ra ngay khi debug pod restart liên tục.</li>
<li><b>Load average</b> đo <i>số task chờ chạy</i>, không phải % CPU. Load cao mà CPU thấp thường là đang chờ I/O.</li>
</ul>
</section>

<section id="p5-5">
<h3>5.5 Connection pool và timeout<a class="anch" href="#p5-5">#</a></h3>
<pre><code>Web worker: 16 process × 5 thread = 80        →  cần ≥ 80 kết nối DB
Postgres max_connections = 100                →  chỉ còn 20 cho job/worker khác
Thêm 3 replica app nữa                        →  cạn pool, request xếp hàng chờ
Giải pháp: PgBouncer (transaction pooling)</code></pre>
<ul>
<li><b>Pool nhỏ hơn bạn nghĩ mới đúng.</b> Mỗi kết nối Postgres là một process — 500 kết nối tốn RAM và context switch hơn là giúp. Đúng cách là hàng đợi ở tầng app, không phải mở thêm kết nối.</li>
<li><b>Bốn timeout phải đặt cho mọi lời gọi ra ngoài:</b> connect timeout · read timeout · tổng thời gian request · và timeout của lock/transaction. <b>Không đặt timeout</b> là lỗi khiến một dependency chậm làm sập cả hệ thống.</li>
<li><b>Timeout phải giảm dần theo tầng</b>: nếu client chờ 30 s thì backend nên timeout ở 25 s và DB ở 5 s — ngược lại thì client đã bỏ đi trong khi hệ thống vẫn đang làm việc vô ích.</li>
</ul>
<p class="src"><b>Tham khảo:</b> <a href="https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/" target="_blank" rel="noopener">AWS Builders&#39; Library — Timeouts, retries and backoff with jitter</a> · <a href="https://www.postgresql.org/docs/current/runtime-config-connection.html" target="_blank" rel="noopener">PostgreSQL — Connection settings</a></p>
<div class="warn"><b>Với LLM call, timeout mặc định của HTTP client (thường 30–60 s) là quá ngắn cho câu trả lời dài, và quá dài để giữ một web thread.</b> Cách đúng: gọi LLM trong background job hoặc dùng streaming, và đặt timeout theo <i>thời gian tới token đầu tiên</i> + <i>thời gian giữa hai token</i> chứ không chỉ tổng thời gian.</div>
</section>

<section id="p5-6">
<h3>5.6 Load balancing<a class="anch" href="#p5-6">#</a></h3>
<table>
<thead><tr><th>Thuật toán</th><th>Phù hợp</th></tr></thead>
<tbody>
<tr><td>Round robin</td><td>Request đồng nhất, xử lý nhanh như nhau</td></tr>
<tr><td>Least connections</td><td>Thời gian xử lý <b>lệch nhau nhiều</b> — đúng cho AI endpoint</td></tr>
<tr><td>Consistent hashing</td><td>Cần cùng key về cùng node: cache, sticky session, prefix cache của LLM</td></tr>
<tr><td>Weighted</td><td>Máy không đồng nhất, canary deploy</td></tr>
</tbody></table>
<ul>
<li><b>L4 vs L7:</b> L4 chỉ nhìn IP/port nên nhanh; L7 đọc HTTP nên route được theo path/header, làm được retry và TLS termination.</li>
<li><b>Health check</b>: phân biệt <b>liveness</b> (còn sống không, chết thì restart) và <b>readiness</b> (có nhận traffic được không). Readiness phải kiểm tra cả dependency; liveness thì không — nếu không, DB chậm sẽ làm restart hết pod.</li>
</ul>
<p class="src"><b>Tham khảo:</b> <a href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/" target="_blank" rel="noopener">Kubernetes — Liveness, Readiness and Startup Probes</a> cho phân biệt liveness/readiness</p>
<div class="tip"><b>Vì sao least-connections quan trọng với AI:</b> một request sinh 2000 token chiếm worker hàng chục giây, request khác xong trong 1 giây. Round robin sẽ dồn request mới vào worker đang tắc. Nêu được điều này là điểm cộng rõ ràng.</div>
</section>

<section id="p5-7">
<h3>5.7 Request tới LLM khác request thường ở đâu<a class="anch" href="#p5-7">#</a></h3>
<table>
<thead><tr><th>Thuộc tính</th><th>API thường</th><th>API gọi LLM</th></tr></thead>
<tbody>
<tr><td>Latency</td><td>10–200 ms</td><td><b>1–30 giây</b>, phương sai rất lớn</td></tr>
<tr><td>Kích thước output</td><td>Biết trước</td><td>Không biết trước, sinh dần từng token</td></tr>
<tr><td>Chi phí</td><td>Gần như bằng 0 mỗi request</td><td><b>Tính tiền theo token</b> vào và ra</td></tr>
<tr><td>Tính xác định</td><td>Cùng input → cùng output</td><td>Có thể khác nhau mỗi lần</td></tr>
<tr><td>Chế độ lỗi</td><td>Lỗi hoặc thành công</td><td>Thành công nhưng <b>nội dung sai</b> — kiểu lỗi mới</td></tr>
<tr><td>Rate limit</td><td>Theo số request</td><td>Theo <b>cả</b> request/phút <b>và</b> token/phút</td></tr>
</tbody></table>
<p><b>Streaming (SSE)</b> là mặc định cho giao diện chat, vì nó cắt được <i>cảm nhận</i> chờ đợi:</p>
<pre><code>GET /chat/stream            Content-Type: text/event-stream

data: {"delta":"Xin"}
data: {"delta":" chào"}
data: [DONE]</code></pre>
<ul>
<li><b>SSE vs WebSocket:</b> SSE một chiều server→client, đi trên HTTP thường, tự reconnect — đủ cho chat completion và đơn giản hơn nhiều. WebSocket khi cần hai chiều liên tục (voice, cộng tác thời gian thực).</li>
<li><b>Điều phải xử lý khi stream:</b> proxy/CDN đệm mất tác dụng streaming (phải tắt buffering) · client ngắt giữa dòng thì <b>hủy request tới provider</b> để không trả tiền vô ích · lỗi xảy ra <i>giữa</i> stream nên không thể trả HTTP 500 nữa, phải gửi một event lỗi · timeout đo theo khoảng giữa hai token.</li>
</ul>
<p class="src"><b>Tham khảo:</b> <a href="https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events" target="_blank" rel="noopener">MDN — Using server-sent events</a> · <a href="https://docs.claude.com/en/docs/build-with-claude/streaming" target="_blank" rel="noopener">Anthropic — Streaming Messages</a></p>
</section>

<section id="p5-8">
<h3>5.8 Rate limit, token limit và cost<a class="anch" href="#p5-8">#</a></h3>
<table>
<thead><tr><th>Thuật toán</th><th>Cách hoạt động</th><th>Đặc điểm</th></tr></thead>
<tbody>
<tr><td>Token bucket</td><td>Xô đầy dần, mỗi request lấy một token</td><td>Cho phép burst — phổ biến nhất</td></tr>
<tr><td>Leaky bucket</td><td>Ra với tốc độ cố định</td><td>Làm phẳng traffic</td></tr>
<tr><td>Fixed window</td><td>Đếm theo phút</td><td>Đơn giản; dồn cục ở biên cửa sổ</td></tr>
<tr><td>Sliding window</td><td>Cửa sổ trượt theo log/counter</td><td>Chính xác hơn, tốn bộ nhớ hơn</td></tr>
</tbody></table>
<ul>
<li><b>Với LLM phải rate limit theo token, không theo request</b> — một request 50k token nặng gấp 500 lần một request 100 token. Ước lượng token trước khi gửi, và trừ phần thực dùng sau khi có response.</li>
<li><b>Gặp <code>429</code> thì:</b> đọc header <code>Retry-After</code>, retry với <b>exponential backoff + jitter</b>, và hạ tải bằng cách xếp hàng chứ không phải thử liên tục. Nhiều client cùng retry đúng nhịp gây <b>thundering herd</b> — jitter chính là để tránh chuyện đó.</li>
<li><b>Ba hạn mức tách biệt</b> phải phân biệt trong câu trả lời: <i>rate limit</i> của provider (request/phút, token/phút) · <i>context window</i> của model (giới hạn một lần gọi) · <i>budget</i> của bạn (tiền mỗi ngày). Ba thứ này hỏng theo ba kiểu khác nhau.</li>
</ul>
<p class="src"><b>Tham khảo:</b> jitter trong exponential backoff theo <a href="https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/" target="_blank" rel="noopener">AWS — Exponential Backoff And Jitter</a> · thuật toán rate limit theo <a href="https://github.com/ByteByteGoHq/system-design-101" target="_blank" rel="noopener">system-design-101</a></p>
<div class="repo"><b>Repo cho Phase 5:</b>
<ul>
<li><a href="https://github.com/ByteByteGoHq/system-design-101" target="_blank" rel="noopener">ByteByteGoHq/system-design-101</a> — sơ đồ HTTP/TCP/DNS/load balancer dễ nhớ, ôn nhanh trước phỏng vấn rất tốt.</li>
<li><a href="https://github.com/trimstray/the-book-of-secret-knowledge" target="_blank" rel="noopener">trimstray/the-book-of-secret-knowledge</a> — công cụ chẩn đoán mạng/OS thực chiến.</li>
<li><a href="https://github.com/ray-project/llm-numbers" target="_blank" rel="noopener">ray-project/llm-numbers</a> — "numbers every LLM developer should know": token, latency, chi phí. Đọc trước khi đi estimate.</li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP" target="_blank" rel="noopener">MDN HTTP</a> — nguồn chuẩn cho status code và caching header.</li>
</ul></div>
</section>

<h2 class="dom">Phase 6 — Backend Architecture</h2>

<section id="p6-1">
<h3>6.1 MVC và Modular Monolith<a class="anch" href="#p6-1">#</a></h3>
<ul>
<li><b>Vấn đề của MVC khi app lớn:</b> "fat controller" và "fat model" — logic nghiệp vụ không có chỗ ở nên bị nhét vào một trong hai. Lời giải quen thuộc: thêm tầng <b>service object</b> / use-case, và tách <b>query object</b>.</li>
<li><b>Modular monolith</b>: một deployable duy nhất nhưng chia module có <b>biên rõ ràng</b> — mỗi module có public API riêng, không được gọi thẳng vào bảng của module khác. Được cả sự đơn giản của monolith và tính rành mạch của microservices.</li>
<li><b>Đây là câu trả lời đúng cho phần lớn dự án</b>: bắt đầu bằng modular monolith, chỉ tách service khi có <b>lý do cụ thể</b> (scale khác nhau, team khác nhau, ngôn ngữ khác nhau, yêu cầu tuân thủ khác nhau).</li>
</ul>
<p class="src"><b>Tham khảo:</b> <a href="https://martinfowler.com/bliki/MonolithFirst.html" target="_blank" rel="noopener">Martin Fowler — MonolithFirst</a> · <a href="https://martinfowler.com/bliki/MicroservicePremium.html" target="_blank" rel="noopener">Martin Fowler — Microservice Premium</a></p>
<div class="qa"><b>Hỏi:</b> "Bạn sẽ chọn monolith hay microservices cho dự án mới?" → <b>Đáp:</b> "Modular monolith, vì với một team nhỏ thì chi phí phân tán (network, observability, eventual consistency, deploy) lớn hơn lợi ích. Tôi giữ biên module rõ để sau này tách được service nào cần mà không phải viết lại." Trả lời "microservices" ngay là dấu hiệu chưa từng vận hành microservices.</div>
</section>

<section id="p6-2">
<h3>6.2 Microservices — cái giá thật<a class="anch" href="#p6-2">#</a></h3>
<table>
<thead><tr><th>Được</th><th>Mất</th></tr></thead>
<tbody>
<tr><td>Scale từng phần độc lập</td><td>Mọi lời gọi nội bộ thành lời gọi mạng: có thể lỗi, có thể chậm</td></tr>
<tr><td>Deploy độc lập, giảm bán kính sự cố</td><td>Không còn transaction xuyên service → phải saga, phải bù trừ</td></tr>
<tr><td>Team tự chủ, chọn công nghệ riêng</td><td>Debug cần distributed tracing; test end-to-end rất khó</td></tr>
<tr><td>Biên lỗi và biên bảo mật rõ ràng</td><td>Chi phí vận hành: CI/CD, service discovery, versioning API</td></tr>
</tbody></table>
<ul>
<li><b>Chia service theo nghiệp vụ</b> (bounded context), không theo tầng kỹ thuật. "User service, Order service" đúng; "Database service, Logic service" sai.</li>
<li><b>Database per service</b> là nguyên tắc cốt lõi — chia sẻ database là quay lại monolith với thêm độ trễ mạng ("distributed monolith", trường hợp tệ nhất).</li>
<li><b>Saga</b> cho transaction xuyên service: chuỗi bước cục bộ, mỗi bước có hành động bù trừ. Orchestration (một bộ điều phối) dễ theo dõi hơn; choreography (nghe event) ít ràng buộc hơn.</li>
</ul>
<p class="src"><b>Tham khảo:</b> Saga, database-per-service và các pattern khác theo <a href="https://microservices.io/patterns/" target="_blank" rel="noopener">microservices.io/patterns</a>; thuật ngữ "distributed monolith" theo <a href="https://www.infoq.com/news/2016/02/services-distributed-monolith/" target="_blank" rel="noopener">InfoQ — The Distributed Monolith</a></p>
</section>

<section id="p6-3">
<h3>6.3 REST và gRPC<a class="anch" href="#p6-3">#</a></h3>
<table>
<thead><tr><th></th><th>REST/JSON</th><th>gRPC</th><th>GraphQL</th></tr></thead>
<tbody>
<tr><td>Định dạng</td><td>JSON, đọc được bằng mắt</td><td>Protobuf nhị phân, nhỏ và nhanh</td><td>JSON, client tự chọn field</td></tr>
<tr><td>Hợp đồng</td><td>OpenAPI (tuỳ chọn)</td><td><code>.proto</code> — <b>bắt buộc</b>, sinh code hai đầu</td><td>Schema bắt buộc</td></tr>
<tr><td>Streaming</td><td>SSE / chunked</td><td>Có sẵn hai chiều</td><td>Subscription</td></tr>
<tr><td>Dùng khi</td><td>API công khai, tích hợp bên thứ ba</td><td>Service-to-service nội bộ, latency thấp</td><td>Nhiều client cần shape dữ liệu khác nhau</td></tr>
<tr><td>Điểm yếu</td><td>Over/under-fetching</td><td>Khó gọi từ browser, khó debug bằng curl</td><td>Query đắt, dễ N+1, cache khó</td></tr>
</tbody></table>
<ul>
<li><b>Thiết kế REST tốt:</b> danh từ số nhiều cho resource, phân trang bằng cursor, versioning ở đường dẫn hoặc header, lỗi có cấu trúc thống nhất, và <b>chỉ thêm field</b> chứ không đổi nghĩa field cũ (backward compatible).</li>
<li><b>Với endpoint AI, REST không đủ:</b> cần streaming (SSE) cho câu trả lời dài, và cần mẫu <b>bất đồng bộ</b> (<code>POST /jobs</code> trả <code>202</code> + <code>job_id</code>, client poll hoặc nhận webhook) cho các tác vụ vài phút như xử lý cả tập tài liệu.</li>
</ul>
<p class="src"><b>Tham khảo:</b> <a href="https://grpc.io/docs/what-is-grpc/core-concepts/" target="_blank" rel="noopener">gRPC — Core concepts</a></p>
</section>

<section id="p6-4">
<h3>6.4 Event-driven và message queue<a class="anch" href="#p6-4">#</a></h3>
<pre><code>Đồng bộ:   API ──gọi──► Service B  (B chết là A lỗi theo)
Bất đồng bộ: API ──publish──► Queue ──► Consumer
                                        (B chết thì message vẫn còn)</code></pre>
<table>
<thead><tr><th></th><th>Queue (RabbitMQ, SQS, Sidekiq)</th><th>Log/Stream (Kafka)</th></tr></thead>
<tbody>
<tr><td>Mô hình</td><td>Message được <b>tiêu thụ rồi mất</b></td><td>Log bền vững, nhiều consumer group đọc lại được</td></tr>
<tr><td>Thứ tự</td><td>Thường không đảm bảo khi nhiều consumer</td><td>Đảm bảo <b>trong một partition</b></td></tr>
<tr><td>Dùng cho</td><td>Job nền: gửi mail, resize ảnh, gọi LLM</td><td>Event sourcing, pipeline dữ liệu, replay</td></tr>
</tbody></table>
<ul>
<li><b>At-least-once là mặc định thực tế</b> → consumer <b>phải idempotent</b> (Phase 7). "Exactly-once" thật sự chỉ đạt được bằng idempotency ở phía nhận, không phải bằng cấu hình broker.</li>
<li><b>DLQ (dead letter queue)</b>: message thất bại quá N lần thì đẩy sang hàng đợi riêng để người xem, thay vì retry vô hạn làm nghẽn hàng đợi chính.</li>
<li><b>Outbox pattern</b>: ghi event vào bảng <code>outbox</code> <i>trong cùng transaction</i> với dữ liệu nghiệp vụ, rồi một tiến trình riêng publish. Đây là cách đúng để không rơi vào "đã commit DB nhưng chưa publish event" (hoặc ngược lại).</li>
</ul>
<p class="src"><b>Tham khảo:</b> <a href="https://microservices.io/patterns/data/transactional-outbox.html" target="_blank" rel="noopener">microservices.io — Transactional Outbox</a> · <a href="https://kafka.apache.org/documentation/#semantics" target="_blank" rel="noopener">Kafka — Message Delivery Semantics</a> cho phần thứ tự theo partition và at-least-once</p>
</section>

<section id="p6-5">
<h3>6.5 AI Service và LLM Gateway<a class="anch" href="#p6-5">#</a></h3>
<pre><code>Rails / API chính
      ↓
  AI Service
   ├── LLMService        gọi model
   ├── EmbeddingService  văn bản → vector
   ├── RAGService        retrieve + sinh câu trả lời
   └── AgentService      tool calling nhiều bước</code></pre>
<p><b>LLM Gateway</b> là một lớp mỏng đứng trước mọi provider — đây là câu trả lời rất mạnh cho "làm sao quản lý việc dùng LLM trong công ty":</p>
<pre><code>Application
     ↓
 LLM Gateway   ── OpenAI
               ── Claude
               ── Gemini
               ── model self-host</code></pre>
<table>
<thead><tr><th>Gateway lo việc gì</th><th>Vì sao đặt ở một chỗ</th></tr></thead>
<tbody>
<tr><td>Model routing &amp; fallback</td><td>Provider lỗi/hết quota thì tự chuyển, app không biết</td></tr>
<tr><td>Cost control</td><td>Đếm token và tiền theo team/tenant/feature; đặt hạn mức</td></tr>
<tr><td>Rate limiting &amp; queue</td><td>Nhiều service dùng chung một quota của provider</td></tr>
<tr><td>Caching</td><td>Prompt giống nhau trả lại kết quả cũ — giảm cả tiền và latency</td></tr>
<tr><td>Logging &amp; tracing</td><td>Lưu prompt/response để debug và đánh giá chất lượng</td></tr>
<tr><td>Guardrails</td><td>Lọc PII đi ra, kiểm duyệt nội dung đi vào — một chỗ, mọi app</td></tr>
<tr><td>Key management</td><td>API key không phát tán khắp các service</td></tr>
</tbody></table>
<p class="src"><b>Tham khảo:</b> vai trò của một LLM gateway (routing, quota, cache, log, quản lý key) đối chiếu với tài liệu của hai gateway mã nguồn mở <a href="https://github.com/BerriAI/litellm" target="_blank" rel="noopener">BerriAI/litellm</a> và <a href="https://github.com/Portkey-AI/gateway" target="_blank" rel="noopener">Portkey-AI/gateway</a></p>
<div class="tip"><b>Vì sao AI Service nên là module/service riêng:</b> nó có đặc tính vận hành khác hẳn phần còn lại — latency hàng giây, chi phí theo lượng dùng, phụ thuộc bên thứ ba, phiên bản model thay đổi liên tục. Tách ra thì scale riêng được, đặt timeout và circuit breaker riêng, và sự cố của provider không kéo sập API chính.</div>
</section>

<section id="p6-6">
<h3>6.6 RAG Service và Agent Service<a class="anch" href="#p6-6">#</a></h3>
<pre><code>RAG Service (đọc)                    Agent Service (hành động)
─────────────────                    ────────────────────────
1. nhận câu hỏi                      1. nhận yêu cầu
2. (viết lại query)                  2. LLM chọn tool
3. hybrid search                     3. backend THỰC THI tool
4. rerank → top N                       (có kiểm tra quyền!)
5. dựng prompt kèm nguồn             4. đưa kết quả lại cho LLM
6. LLM sinh câu trả lời              5. lặp tới khi xong hoặc hết lượt
7. trả kèm citation                  6. trả kết quả + lịch sử bước</code></pre>
<ul>
<li><b>Hai đường ghi và đọc của RAG tách rời nhau:</b> đường <i>ingest</i> (tài liệu → chunk → embedding → vector store) chạy nền theo batch; đường <i>query</i> chạy đồng bộ theo request. Nhầm hai đường này là lỗi thiết kế hay gặp.</li>
<li><b>Agent phải có ba giới hạn cứng:</b> số bước tối đa, tổng token/chi phí tối đa, và <b>danh sách trắng tool</b> kèm kiểm tra quyền cho <i>từng</i> lần gọi. Không có ba thứ này là vòng lặp vô hạn hoặc lỗ hổng bảo mật.</li>
<li><b>LLM không bao giờ được nói chuyện trực tiếp với database.</b> Nó chỉ được đề nghị gọi một tool có schema rõ ràng; backend kiểm tra quyền, validate tham số, rồi mới chạy. Chi tiết ở mục 12.5.</li>
</ul>
<p class="src"><b>Tham khảo:</b> giới hạn bước và ngân sách cho agent theo <a href="https://www.anthropic.com/engineering/building-effective-agents" target="_blank" rel="noopener">Anthropic — Building Effective Agents</a> · nguyên tắc backend giữ quyền thực thi tool theo <a href="https://genai.owasp.org/llm-top-10/" target="_blank" rel="noopener">OWASP Top 10 for LLM Applications</a></p>
<div class="repo"><b>Repo cho Phase 6:</b>
<ul>
<li><a href="https://github.com/donnemartin/system-design-primer" target="_blank" rel="noopener">donnemartin/system-design-primer</a> — chương về microservices, queue, service discovery.</li>
<li><a href="https://github.com/karanpratapsingh/system-design" target="_blank" rel="noopener">karanpratapsingh/system-design</a> — sách mở, phần REST/gRPC/GraphQL và message broker viết gọn.</li>
<li><a href="https://microservices.io/patterns/" target="_blank" rel="noopener">microservices.io/patterns</a> — nguồn chuẩn cho Saga, Outbox, API Gateway, CQRS.</li>
<li><a href="https://github.com/Shubhamsaboo/awesome-llm-apps" target="_blank" rel="noopener">Shubhamsaboo/awesome-llm-apps</a> — hàng trăm app AI mở, đọc để thấy cách người ta bố trí AI service thật.</li>
</ul></div>
</section>

<h2 class="dom">Phase 7 — Distributed Systems</h2>

<section id="p7-1">
<h3>7.1 CAP và các mức consistency<a class="anch" href="#p7-1">#</a></h3>
<p><b>Phát biểu đúng của CAP:</b> khi có <b>network partition</b> (P — và partition thì luôn có thể xảy ra), bạn phải chọn giữa C và A. Nói "chọn 2 trong 3" là cách nói tắt gây hiểu sai.</p>
<table>
<thead><tr><th>Lựa chọn</th><th>Hành vi khi mất liên lạc</th><th>Ví dụ</th></tr></thead>
<tbody>
<tr><td><b>CP</b></td><td>Từ chối phục vụ hơn là trả dữ liệu có thể sai</td><td>etcd, ZooKeeper, Spanner, chuyển tiền</td></tr>
<tr><td><b>AP</b></td><td>Vẫn trả lời, có thể là dữ liệu cũ, hợp nhất sau</td><td>Cassandra, DynamoDB, DNS, đếm lượt xem</td></tr>
</tbody></table>
<ul>
<li><b>PACELC</b> bổ sung phần CAP thiếu: <i>khi KHÔNG có partition</i> thì vẫn phải chọn giữa <b>L</b>atency và <b>C</b>onsistency. Nói được từ này là điểm cộng thật.</li>
<li><b>Các mức consistency</b> từ mạnh xuống yếu: <i>linearizable</i> (như một máy duy nhất) → <i>sequential</i> → <i>causal</i> → <i>read-your-writes</i> / <i>monotonic reads</i> → <i>eventual</i>.</li>
<li><b>Eventual consistency không phải là "không nhất quán"</b> — nó là "sẽ nhất quán khi hết cập nhật". Điều phải thiết kế là <i>người dùng thấy gì trong khoảng thời gian đó</i>: khoá nút bấm, hiện trạng thái "đang xử lý", hay optimistic UI.</li>
</ul>
<p class="src"><b>Nguồn:</b> cách phát biểu lại CAP cho đúng theo <a href="https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html" target="_blank" rel="noopener">Martin Kleppmann — <i>Please stop calling databases CP or AP</i></a> · PACELC theo <a href="https://en.wikipedia.org/wiki/PACELC_design_principle" target="_blank" rel="noopener">nguyên lý PACELC của Daniel Abadi</a></p>
<div class="qa"><b>Hỏi:</b> "Hệ của bạn chọn C hay A?" → <b>Đáp:</b> chia theo từng luồng. "Số dư và thanh toán chọn C; feed, đếm view, gợi ý AI chọn A vì trả dữ liệu cũ vài giây không gây hại." Trả lời theo từng luồng nghiệp vụ luôn tốt hơn trả lời một lựa chọn cho cả hệ thống.</div>
</section>

<section id="p7-2">
<h3>7.2 Leader election và distributed lock<a class="anch" href="#p7-2">#</a></h3>
<ul>
<li><b>Vì sao cần leader:</b> để chỉ đúng một node làm việc không được trùng — chạy cron, ghi vào một partition, điều phối rebalance.</li>
<li><b>Consensus</b> (Raft/Paxos) cần <b>quorum</b> quá bán: 3 node chịu được mất 1, 5 node chịu được mất 2. Đây là lý do cluster etcd/ZooKeeper luôn số lẻ.</li>
<li><b>Distributed lock bằng Redis</b>: <code>SET key val NX PX 30000</code>. Ba điều bắt buộc: <b>luôn có TTL</b> (chủ lock chết thì lock phải tự nhả) · <b>giá trị là token duy nhất</b> và chỉ chủ mới xoá được (so token bằng Lua script) · và chấp nhận rằng lock <b>có thể hết hạn giữa lúc đang làm việc</b>.</li>
<li><b>Fencing token</b>: mỗi lần cấp lock tăng một số; tài nguyên đích từ chối mọi ghi có token nhỏ hơn token lớn nhất đã thấy. Đây là cách duy nhất thật sự an toàn — vì lock có thể hết hạn mà chủ cũ chưa biết (GC pause, mạng chậm).</li>
</ul>
<p class="src"><b>Nguồn:</b> luận điểm "lock để tối ưu, không để bảo đảm đúng đắn" và khái niệm <b>fencing token</b> lấy từ <a href="https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html" target="_blank" rel="noopener">Martin Kleppmann — <i>How to do distributed locking</i></a> · cú pháp lock theo <a href="https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/" target="_blank" rel="noopener">Redis — Distributed Locks</a></p>
<div class="warn"><b>Nói được câu này là ghi điểm lớn:</b> "Distributed lock chỉ nên dùng để <b>tối ưu</b> (tránh làm trùng việc), không nên dùng để bảo đảm <b>đúng đắn</b>. Muốn đúng đắn thì dùng ràng buộc unique trong DB, hoặc thao tác idempotent, hoặc fencing token."</div>
</section>

<section id="p7-3">
<h3>7.3 Idempotency<a class="anch" href="#p7-3">#</a></h3>
<p>Trong hệ phân tán bạn <b>không biết</b> request thất bại là do chưa tới hay do đã làm xong mà response bị mất. Vì vậy client sẽ retry, và server phải chịu được retry.</p>
<pre><code>POST /payments
Idempotency-Key: 7f3c9e...          ← client sinh, giữ nguyên khi retry

Server:
  INSERT INTO idempotency_keys(key, request_hash)   -- unique index
  ON CONFLICT DO NOTHING
  → chèn được: xử lý thật, lưu response
  → xung đột : trả lại response đã lưu (không làm lại)</code></pre>
<table>
<thead><tr><th>Cách làm idempotent</th><th>Áp dụng</th></tr></thead>
<tbody>
<tr><td>Unique constraint trên khoá nghiệp vụ</td><td>Đơn giản và chắc nhất — <code>UNIQUE(order_id, kind)</code></td></tr>
<tr><td>Bảng idempotency key + response đã lưu</td><td>API thanh toán, API công khai</td></tr>
<tr><td>Thao tác vốn đã idempotent</td><td><code>SET status = 'paid'</code> thay vì <code>counter += 1</code></td></tr>
<tr><td>Optimistic concurrency (<code>version</code>)</td><td>Chặn cập nhật dựa trên dữ liệu cũ</td></tr>
</tbody></table>
<p class="src"><b>Tham khảo:</b> mẫu <code>Idempotency-Key</code> theo <a href="https://stripe.com/docs/api/idempotent_requests" target="_blank" rel="noopener">Stripe API — Idempotent requests</a>, bản mô tả rõ nhất của kỹ thuật này</p>
<div class="tip"><b>Với AI job, idempotency còn tiết kiệm tiền:</b> khoá idempotency nên là hash của <code>(model, prompt, tham số, phiên bản tài liệu)</code>. Retry một job embedding hay một job tóm tắt sẽ trả lại kết quả cũ thay vì gọi lại provider — đây vừa là đúng đắn vừa là tối ưu chi phí.</div>
</section>

<section id="p7-4">
<h3>7.4 Retry, backoff và circuit breaker<a class="anch" href="#p7-4">#</a></h3>
<ul>
<li><b>Chỉ retry lỗi tạm thời:</b> timeout, lỗi kết nối, <code>429</code>, <code>500/502/503/504</code>. <b>Không</b> retry <code>400/401/403/422</code> — sai vẫn sai, chỉ tốn tiền và làm nghẽn.</li>
<li><b>Exponential backoff + jitter:</b> <code>delay = min(cap, base × 2^n) × random(0.5, 1.5)</code>. Không có jitter thì mọi client cùng thức dậy một lúc và đánh sập upstream lần nữa (thundering herd).</li>
<li><b>Circuit breaker</b> ba trạng thái: <b>closed</b> (cho qua) → vượt ngưỡng lỗi → <b>open</b> (fail nhanh, không gọi nữa) → sau thời gian chờ → <b>half-open</b> (cho vài request thử) → tốt thì đóng lại.</li>
<li><b>Vì sao cần breaker khi đã có retry:</b> retry giúp lỗi lẻ tẻ, nhưng khi upstream đã sập thì retry <i>làm mọi thứ tệ hơn</i> — chiếm thread, chiếm connection, kéo dài sự cố. Breaker cắt sớm để bảo vệ chính mình.</li>
<li><b>Bulkhead</b>: chia pool riêng cho từng dependency, để LLM API chậm không ăn hết thread dùng cho request thường.</li>
</ul>
<p class="src"><b>Nguồn:</b> <a href="https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/" target="_blank" rel="noopener">AWS Builders&#39; Library — Timeouts, retries, and backoff with jitter</a> cho phần retry/jitter · <a href="https://martinfowler.com/bliki/CircuitBreaker.html" target="_blank" rel="noopener">Martin Fowler — CircuitBreaker</a> cho ba trạng thái · <a href="https://learn.microsoft.com/azure/architecture/patterns/bulkhead" target="_blank" rel="noopener">Bulkhead pattern</a></p>
<div class="qa"><b>Hỏi:</b> "Provider LLM đang lỗi 50%, bạn làm gì?" → <b>Đáp, theo bốn tầng:</b> (1) retry có backoff+jitter cho lỗi tạm; (2) circuit breaker để không dồn tải vào chỗ đang chết; (3) <b>fallback</b> sang provider/model khác qua LLM Gateway; (4) degrade duyên dáng — trả kết quả từ cache, hoặc trả kết quả search thuần không có phần LLM tóm tắt, kèm thông báo cho người dùng.</div>
</section>

<section id="p7-5">
<h3>7.5 Queue và backpressure<a class="anch" href="#p7-5">#</a></h3>
<ul>
<li><b>Queue không làm hệ thống nhanh hơn</b> — nó chuyển việc "chờ đồng bộ" thành "chờ bất đồng bộ" và làm phẳng đỉnh tải. Nếu tốc độ đến <i>liên tục</i> cao hơn tốc độ xử lý, queue chỉ dài ra vô hạn.</li>
<li><b>Chỉ số phải theo dõi:</b> <b>queue depth</b> và <b>oldest message age</b>. Đây là tín hiệu autoscale tốt hơn CPU rất nhiều — đặc biệt cho AI worker, vì worker chờ mạng nên CPU luôn thấp.</li>
<li><b>Backpressure</b> là nói "không" khi đã quá tải: trả <code>429</code>, giới hạn độ dài queue, load shedding (bỏ request ưu tiên thấp), hoặc <b>hàng đợi ưu tiên</b> — request tương tác của người dùng đi trước job batch.</li>
<li><b>Little's Law</b>: <code>số việc đang xử lý = tốc độ đến × thời gian xử lý</code>. Với LLM 5 giây và 100 request/giây thì cần 500 slot đồng thời — con số này quyết định số worker, và nó khiến người phỏng vấn thấy bạn tính được thay vì đoán.</li>
</ul>
<p class="src"><b>Tham khảo:</b> <a href="https://en.wikipedia.org/wiki/Little%27s_law" target="_blank" rel="noopener">Little&#39;s Law</a> · load shedding và backpressure theo <a href="https://aws.amazon.com/builders-library/using-load-shedding-to-avoid-overload/" target="_blank" rel="noopener">AWS Builders&#39; Library — Using load shedding to avoid overload</a></p>
</section>

<section id="p7-6">
<h3>7.6 AI worker pool — 100K request qua một provider có rate limit<a class="anch" href="#p7-6">#</a></h3>
<pre><code>100K requests
      ↓
   Queue (ưu tiên: interactive &gt; batch)
      ↓
  AI Workers   ── Worker 1 ┐
               ── Worker 2 ├─► LLM Gateway ─► provider (RPM/TPM limit)
               ── Worker 3 │        │
               ── Worker N ┘        └─► fallback provider
      ↓
  Kết quả (idempotent, ghi một lần)</code></pre>
<table>
<thead><tr><th>Vấn đề</th><th>Cách xử lý</th></tr></thead>
<tbody>
<tr><td>Provider giới hạn RPM/TPM</td><td>Rate limiter <b>tập trung</b> (Redis token bucket) ở gateway — không để mỗi worker tự đếm</td></tr>
<tr><td>Gặp <code>429</code></td><td>Backoff + jitter, đọc <code>Retry-After</code>, giảm concurrency động (adaptive)</td></tr>
<tr><td>Job chạy trùng khi retry</td><td>Idempotency key = hash(model, prompt, phiên bản dữ liệu)</td></tr>
<tr><td>Job quá lâu / vô hạn</td><td>Timeout cứng cho từng job + giới hạn số bước với agent</td></tr>
<tr><td>Một tenant chiếm hết quota</td><td>Hàng đợi hoặc quota <b>theo tenant</b> (fair queueing), không dùng chung một hàng</td></tr>
<tr><td>Chi phí vượt dự toán</td><td>Đếm token theo tenant, hạn mức ngày, tự chuyển sang model nhỏ hơn khi vượt ngưỡng</td></tr>
<tr><td>Việc lặp lại</td><td>Cache theo hash prompt; dedupe các job giống nhau đang chờ trong queue</td></tr>
<tr><td>Nhiều mục nhỏ giống nhau</td><td><b>Batch API</b> (rẻ hơn ~50% nhưng chậm hàng giờ) cho việc không cần ngay — ví dụ embedding cả kho tài liệu</td></tr>
</tbody></table>
<div class="tip"><b>Trả lời mẫu cho "xử lý 100K request AI":</b> "Tôi không gọi LLM trong request web. Producer đẩy job vào queue có phân mức ưu tiên, worker pool tiêu thụ qua LLM Gateway — nơi đặt rate limiter tập trung theo token, retry backoff, circuit breaker và fallback provider. Job có idempotency key nên retry an toàn. Autoscale worker theo <b>queue depth</b> chứ không theo CPU. Phần nào không cần ngay thì đẩy sang Batch API cho rẻ."</div>
<p class="src"><b>Tham khảo:</b> chênh lệch giá và độ trễ của Batch API đối chiếu <a href="https://docs.claude.com/en/docs/build-with-claude/batch-processing" target="_blank" rel="noopener">Anthropic — Batch processing</a> và <a href="https://platform.openai.com/docs/guides/batch" target="_blank" rel="noopener">OpenAI — Batch API</a></p>
<div class="repo"><b>Repo cho Phase 7:</b>
<ul>
<li><a href="https://github.com/binhnguyennus/awesome-scalability" target="_blank" rel="noopener">binhnguyennus/awesome-scalability</a> — tuyển tập bài viết engineering thật về scale, mỗi mục là một case study.</li>
<li><a href="https://github.com/theanalyst/awesome-distributed-systems" target="_blank" rel="noopener">theanalyst/awesome-distributed-systems</a> — nền tảng lý thuyết: CAP, consensus, thời gian và thứ tự.</li>
<li><a href="https://github.com/pingcap/talent-plan" target="_blank" rel="noopener">pingcap/talent-plan</a> — khoá học mở tự cài đặt KV store phân tán, cách học chắc nhất.</li>
<li><a href="https://github.com/jepsen-io/jepsen" target="_blank" rel="noopener">jepsen-io/jepsen</a> — đọc các báo cáo để thấy database thật <i>vi phạm</i> đảm bảo của chúng như thế nào.</li>
<li><a href="https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/" target="_blank" rel="noopener">AWS Builders' Library — Timeouts, retries, backoff with jitter</a> — bài chuẩn mực về mục 7.4.</li>
</ul></div>
</section>

<h2 class="dom">Phase 8 — System Design</h2>

<section id="p8-1">
<h3>8.1 Khung trả lời một bài system design<a class="anch" href="#p8-1">#</a></h3>
<p>Điều bị trượt nhiều nhất không phải thiếu kiến thức, mà là <b>vẽ ngay khi chưa hỏi gì</b>. Đi theo đúng thứ tự này, và <b>nói ra</b> mình đang ở bước nào:</p>
<table>
<thead><tr><th>Bước</th><th>Thời lượng</th><th>Làm gì</th></tr></thead>
<tbody>
<tr><td>1. Làm rõ yêu cầu</td><td>5–8 phút</td><td>Ai dùng? Tính năng nào <b>trong</b> phạm vi, cái nào <b>ngoài</b>? Đọc nhiều hay ghi nhiều? Cần realtime không?</td></tr>
<tr><td>2. Yêu cầu phi chức năng</td><td>2–3 phút</td><td>QPS, dung lượng, độ trễ mục tiêu (p95/p99), tính sẵn sàng, tính nhất quán, giữ dữ liệu bao lâu</td></tr>
<tr><td>3. Ước lượng</td><td>3–5 phút</td><td>Tính to bằng số tròn (mục 8.2). Nói giả định ra tiếng.</td></tr>
<tr><td>4. API &amp; data model</td><td>5 phút</td><td>Vài endpoint chính, bảng chính, khoá và index</td></tr>
<tr><td>5. Kiến trúc tổng</td><td>10 phút</td><td>Vẽ hộp và mũi tên, giải thích từng đường dữ liệu</td></tr>
<tr><td>6. Đi sâu 1–2 chỗ</td><td>10 phút</td><td>Để người phỏng vấn chọn, hoặc chọn chỗ khó nhất và nói tại sao khó</td></tr>
<tr><td>7. Nút thắt &amp; tiến hoá</td><td>5 phút</td><td>Scale gấp 10 thì cái gì vỡ trước? Sự cố nào tệ nhất? Đo bằng gì?</td></tr>
</tbody></table>
<p class="src"><b>Tham khảo:</b> khung tiếp cận của <a href="https://github.com/donnemartin/system-design-primer#how-to-approach-a-system-design-interview-question" target="_blank" rel="noopener">system-design-primer — How to approach a system design interview question</a> · bảng phân bổ thời gian theo <a href="https://github.com/ashishps1/awesome-system-design-resources" target="_blank" rel="noopener">ashishps1/awesome-system-design-resources</a></p>
<div class="tip"><b>Ba câu nên nói trong mọi bài:</b> "Tôi bắt đầu từ phương án đơn giản nhất rồi mới thêm phức tạp khi có lý do" · "Đây là đánh đổi, tôi chọn X vì yêu cầu Y" · "Chỗ này tôi sẽ đo trước khi tối ưu". Người phỏng vấn chấm <b>lập luận</b>, không chấm số lượng công nghệ bạn kể tên.</div>
</section>

<section id="p8-2">
<h3>8.2 Ước lượng dung lượng — làm nhanh bằng số tròn<a class="anch" href="#p8-2">#</a></h3>
<table>
<thead><tr><th>Cần nhớ</th><th>Giá trị</th></tr></thead>
<tbody>
<tr><td>1 ngày</td><td>~86 400 s ≈ <b>10⁵ s</b></td></tr>
<tr><td>1 triệu request/ngày</td><td>≈ 12 req/s (đỉnh ×3–5 → ~50 req/s)</td></tr>
<tr><td>1 dòng DB nhỏ</td><td>~100 byte – 1 KB</td></tr>
<tr><td>Vector 1536 chiều float32</td><td>~6 KB (+ overhead index)</td></tr>
<tr><td>1 trang văn bản</td><td>~500 từ ≈ 700 token</td></tr>
</tbody></table>
<pre><code>Ví dụ RAG nội bộ: 100 000 tài liệu × 10 trang
= 1 triệu trang → chunk 500 token, chồng 50 → ~1.4 triệu chunk

Lưu trữ:  1.4M × 6 KB   ≈ 8.4 GB vector  (+ index HNSW ~1.5×)  → ~20 GB
Ingest :  1.4M chunk × 500 token ≈ 700M token embedding — tính tiền một lần
Truy vấn: 1000 câu hỏi/ngày × (1 embedding + 5 chunk × 500 token
          + 300 token output) ≈ 3M token/ngày</code></pre>
<div class="tip"><b>Với bài AI, luôn ước lượng thêm ba con số mà ứng viên khác bỏ qua:</b> token mỗi request · <b>tiền</b> mỗi request và mỗi tháng · và độ trễ p95 của chuỗi (embedding + search + rerank + LLM). Nói được "tính năng này tốn khoảng X đồng mỗi câu hỏi" là điểm khác biệt rất lớn.</div>
<p class="src"><b>Tham khảo:</b> các mốc để tính nhẩm theo <a href="https://github.com/donnemartin/system-design-primer#appendix" target="_blank" rel="noopener">system-design-primer — Appendix</a> (powers of two, latency numbers)</p>
</section>

<section id="p8-3">
<h3>8.3 Cache — nơi nào, chiến lược nào, hỏng thế nào<a class="anch" href="#p8-3">#</a></h3>
<table>
<thead><tr><th>Chiến lược</th><th>Cách chạy</th><th>Rủi ro</th></tr></thead>
<tbody>
<tr><td><b>Cache-aside</b></td><td>Miss thì đọc DB rồi ghi cache — phổ biến nhất</td><td>Có cửa sổ dữ liệu cũ; nhiều miss cùng lúc gây stampede</td></tr>
<tr><td>Write-through</td><td>Ghi cache và DB cùng lúc</td><td>Ghi chậm hơn</td></tr>
<tr><td>Write-behind</td><td>Ghi cache, đẩy xuống DB sau</td><td>Mất dữ liệu nếu cache chết</td></tr>
</tbody></table>
<ul>
<li><b>Ba kiểu hỏng phải biết tên:</b> <b>stampede/thundering herd</b> (key nóng hết hạn, hàng nghìn request cùng đi xuống DB — chữa bằng lock một-người-làm-mới hoặc <i>stale-while-revalidate</i>) · <b>cache penetration</b> (query key không tồn tại liên tục — chữa bằng cache cả giá trị rỗng, hoặc bloom filter) · <b>hot key</b> (một key chiếm phần lớn traffic — chữa bằng cache cục bộ ở app hoặc chia key).</li>
<li><b>Invalidation</b> là phần khó nhất: TTL ngắn là cách rẻ và đủ dùng cho phần lớn trường hợp; xoá theo sự kiện thì đúng hơn nhưng dễ sót; <b>versioned key</b> (<code>user:42:v7</code>) tránh phải xoá.</li>
<li><b>Với AI có ba tầng cache riêng biệt</b> — nêu đủ ba là ăn điểm: (1) <b>exact-match</b> theo hash prompt; (2) <b>semantic cache</b> — nếu câu hỏi mới có similarity &gt; ngưỡng với câu cũ thì dùng lại (cẩn thận: ngưỡng thấp sẽ trả lời sai câu); (3) <b>prompt caching của provider</b> — phần prefix dài giống nhau (system prompt, tài liệu) được tính rẻ hơn nhiều, nên đặt phần tĩnh <b>lên đầu</b> prompt.</li>
</ul>
<p class="src"><b>Nguồn:</b> tên ba kiểu hỏng (stampede, penetration, hot key) theo <a href="https://github.com/binhnguyennus/awesome-scalability" target="_blank" rel="noopener">awesome-scalability — mục Cache</a> · <code>stale-while-revalidate</code> là <a href="https://datatracker.ietf.org/doc/html/rfc5861" target="_blank" rel="noopener">RFC 5861</a> · prompt caching theo tiền tố theo <a href="https://docs.claude.com/en/docs/build-with-claude/prompt-caching" target="_blank" rel="noopener">Anthropic — Prompt caching</a></p>
</section>

<section id="p8-4">
<h3>8.4 Bài kinh điển: URL shortener, chat, news feed<a class="anch" href="#p8-4">#</a></h3>
<table>
<thead><tr><th>Bài</th><th>Điểm cốt lõi người phỏng vấn chờ</th></tr></thead>
<tbody>
<tr><td><b>URL shortener</b></td><td>Sinh key: base62 từ counter phân tán (hoặc snowflake) thay vì hash để tránh trùng · đọc &gt;&gt; ghi nên cache + CDN · redirect <code>301</code> (cache lâu, mất khả năng đếm) vs <code>302</code> (đếm được) · dữ liệu bất biến nên rất dễ scale</td></tr>
<tr><td><b>Chat system</b></td><td>WebSocket + gateway giữ kết nối · lưu tin nhắn theo <code>(conversation_id, created_at)</code> để đọc theo trang · presence bằng Redis TTL · fanout tới nhiều thiết bị · thứ tự và trùng lặp (client sinh <code>message_id</code>) · offline thì push notification</td></tr>
<tr><td><b>News feed</b></td><td><b>Fanout-on-write</b> (đẩy trước vào feed từng người — đọc nhanh, ghi đắt) vs <b>fanout-on-read</b> (tổng hợp lúc đọc — ghi rẻ, đọc đắt) · giải pháp thật là <b>hỗn hợp</b>: đẩy trước cho người thường, tính lúc đọc cho tài khoản có hàng triệu follower</td></tr>
</tbody></table>
<p class="src"><b>Tham khảo:</b> ba bài này theo <a href="https://github.com/donnemartin/system-design-primer" target="_blank" rel="noopener">system-design-primer</a> và <a href="https://github.com/checkcheckzz/system-design-interview" target="_blank" rel="noopener">checkcheckzz/system-design-interview</a> (bộ sưu tập bài viết engineering theo công ty)</p>
<div class="tip"><b>Mẫu chung của cả ba bài:</b> xác định tỷ lệ đọc/ghi trước → chọn cách phân mảnh dữ liệu → đặt cache đúng chỗ → xử lý trường hợp <b>đuôi dài</b> (người nổi tiếng, hội thoại khổng lồ, link viral). Người phỏng vấn hầu như luôn hỏi tới trường hợp đuôi dài.</div>
</section>

<section id="p8-5">
<h3>8.5 Notification và payment<a class="anch" href="#p8-5">#</a></h3>
<ul>
<li><b>Notification system:</b> một API nhận yêu cầu → queue theo kênh (push/email/SMS) → worker gọi provider tương ứng, mỗi provider có rate limit và tỷ lệ lỗi riêng → <b>template + i18n</b> · <b>tuỳ chọn của người dùng</b> và giờ im lặng · <b>dedupe/throttle</b> để không spam · DLQ cho thất bại · theo dõi tỷ lệ gửi được.</li>
<li><b>Payment system</b> là bài kiểm tra tính đúng đắn, không phải bài kiểm tra scale: <b>idempotency key</b> cho mọi lệnh · <b>ledger ghi thêm chỉ</b> (append-only, không <code>UPDATE</code> số dư mà cộng bút toán) · trạng thái tường minh (<code>pending → authorized → captured → settled/refunded</code>) · <b>webhook có thể tới trùng và tới sai thứ tự</b> nên phải kiểm tra chữ ký và xử lý idempotent · đối soát (reconciliation) định kỳ với sao kê của cổng thanh toán.</li>
</ul>
<p class="src"><b>Tham khảo:</b> ledger append-only và chuỗi trạng thái thanh toán theo <a href="https://stripe.com/docs/payments/paymentintents/lifecycle" target="_blank" rel="noopener">Stripe — PaymentIntent lifecycle</a> · thiết kế notification theo <a href="https://github.com/binhnguyennus/awesome-scalability" target="_blank" rel="noopener">awesome-scalability</a></p>
<div class="warn"><b>Đừng bao giờ trả lời "lưu số dư trong Redis cho nhanh".</b> Với tiền, nguồn sự thật phải là DB có transaction, và mọi thay đổi phải để lại dấu vết kiểm toán.</div>
</section>

<section id="p8-6">
<h3>8.6 Thiết kế AI Chatbot<a class="anch" href="#p8-6">#</a></h3>
<pre><code>User ──► API (auth, rate limit) ──► Conversation Service
                                          │  lưu lịch sử
                                          ▼
                                    Prompt Builder
                                    (system + N lượt gần nhất
                                     + tóm tắt phần cũ)
                                          ▼
                                    LLM Gateway ──► provider
                                          │  stream token
                                          ▼
                                    SSE về client, lưu song song</code></pre>
<table>
<thead><tr><th>Vấn đề riêng của chatbot</th><th>Cách xử lý</th></tr></thead>
<tbody>
<tr><td>Lịch sử dài hơn context window</td><td>Giữ nguyên N lượt gần nhất + <b>tóm tắt cuốn</b> phần cũ (rolling summary); hoặc lấy lại các lượt liên quan bằng embedding</td></tr>
<tr><td>Cần trả lời ngay</td><td>Streaming SSE; hiện ngay token đầu (TTFT là chỉ số cảm nhận quan trọng nhất)</td></tr>
<tr><td>Người dùng đóng tab giữa stream</td><td>Hủy request tới provider để không trả tiền phần bỏ đi; lưu phần đã sinh</td></tr>
<tr><td>Chi phí tăng theo độ dài hội thoại</td><td>Đặt phần tĩnh lên đầu để hưởng prompt cache · giới hạn số lượt gửi lại · dùng model nhỏ cho câu đơn giản (model routing)</td></tr>
<tr><td>Nội dung không an toàn / lạm dụng</td><td>Kiểm duyệt đầu vào và đầu ra · rate limit theo user · lưu log để rà soát</td></tr>
<tr><td>Cần đánh giá chất lượng</td><td>Thu phản hồi 👍/👎, lưu <code>(prompt, response, model, phiên bản)</code> để so sánh khi đổi prompt</td></tr>
</tbody></table>
<p class="src"><b>Tham khảo:</b> rolling summary và quản lý ngữ cảnh hội thoại theo <a href="https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents" target="_blank" rel="noopener">Anthropic — Effective context engineering for AI agents</a> · TTFT là chỉ số cảm nhận chính theo <a href="https://github.com/ray-project/llm-numbers" target="_blank" rel="noopener">llm-numbers</a></p>
</section>

<section id="p8-7">
<h3>8.7 Thiết kế RAG System<a class="anch" href="#p8-7">#</a></h3>
<pre><code>ĐƯỜNG INGEST (nền, theo batch)
File/PDF ─► extract text ─► chunk ─► embed ─► Vector DB
                                              (kèm tenant_id, doc_id,
                                               version, ACL)

ĐƯỜNG QUERY (đồng bộ, theo request)
Câu hỏi ─► (viết lại query) ─► hybrid search + filter quyền
        ─► rerank top ~50 → top ~5 ─► dựng prompt kèm nguồn
        ─► LLM ─► câu trả lời + citation</code></pre>
<table>
<thead><tr><th>Quyết định thiết kế</th><th>Kinh nghiệm thực tế</th></tr></thead>
<tbody>
<tr><td><b>Kích thước chunk</b></td><td>~300–800 token, chồng nhau ~10–20%. Cắt theo <b>cấu trúc</b> (heading, đoạn) tốt hơn cắt theo số ký tự cứng.</td></tr>
<tr><td><b>Metadata</b></td><td>Bắt buộc: <code>tenant_id</code>, <code>document_id</code>, <code>version</code>, quyền xem, thời điểm cập nhật, và <b>vị trí trong tài liệu</b> để trích dẫn được.</td></tr>
<tr><td><b>Cập nhật tài liệu</b></td><td>Tài liệu sửa thì phải xoá/ghi lại chunk cũ — nếu không sẽ tồn tại hai phiên bản và LLM trích dẫn bản cũ. Dùng <code>version</code> + xoá theo <code>document_id</code>.</td></tr>
<tr><td><b>Đổi embedding model</b></td><td>Phải reindex toàn bộ. Làm bằng cách ghi index mới song song rồi đổi cờ (blue-green), không sửa tại chỗ.</td></tr>
<tr><td><b>Không tìm thấy gì liên quan</b></td><td><b>Phải trả lời "tôi không biết"</b> chứ không để LLM tự nghĩ ra. Đặt ngưỡng similarity và đưa quy tắc đó vào system prompt.</td></tr>
<tr><td><b>Citation</b></td><td>Trả kèm nguồn cho từng đoạn. Đây vừa là cách giảm hallucination, vừa là cách người dùng tự kiểm tra.</td></tr>
<tr><td><b>Đánh giá</b></td><td>Bộ câu hỏi vàng + đo <i>retrieval</i> (recall@k, MRR) tách khỏi <i>generation</i> (faithfulness, answer relevancy). Sai ở retrieval thì sửa prompt vô ích.</td></tr>
</tbody></table>
<p class="src"><b>Nguồn:</b> "lost in the middle" từ <a href="https://arxiv.org/abs/2307.03172" target="_blank" rel="noopener">Liu et al., <i>Lost in the Middle</i> — arXiv:2307.03172</a> · kích thước chunk, chồng lấn và các biến thể retrieval theo <a href="https://github.com/NirDiamant/RAG_Techniques" target="_blank" rel="noopener">NirDiamant/RAG_Techniques</a> · đo tách hai tầng retrieval/generation theo <a href="https://docs.ragas.io/en/stable/concepts/metrics/" target="_blank" rel="noopener">Ragas — Metrics</a></p>
<div class="tip"><b>Câu chốt:</b> "Phần lớn lỗi của RAG nằm ở <b>retrieval</b>, không nằm ở LLM." Vì vậy đầu tư vào chunking, hybrid search và rerank cho kết quả tốt hơn nhiều so với việc đổi model to hơn — và rẻ hơn.</div>
</section>

<section id="p8-8">
<h3>8.8 Thiết kế AI Search<a class="anch" href="#p8-8">#</a></h3>
<pre><code>Query
 ├── Keyword search (BM25)          → chính xác từ khoá
 └── Vector search (embedding)      → đúng ý người hỏi
          ↓  RRF fusion
      Reranking (cross-encoder)
          ↓
   Kết quả + (tuỳ chọn) đoạn tóm tắt do LLM sinh, kèm nguồn</code></pre>
<ul>
<li><b>Phần LLM là tuỳ chọn và phải degrade được:</b> nếu provider lỗi thì vẫn trả danh sách kết quả tìm được — tìm kiếm không được sập vì AI sập.</li>
<li><b>Query understanding</b> đứng trước: sửa lỗi chính tả, nhận diện ý định (tìm sản phẩm? tra tài liệu? câu hỏi?), tách filter khỏi nội dung (<i>"laptop dưới 20 triệu"</i> → filter giá + truy vấn "laptop").</li>
<li><b>Đo bằng dữ liệu thật:</b> CTR theo vị trí, tỷ lệ tìm-rồi-bỏ, tỷ lệ truy vấn không có kết quả. Offline thì dùng bộ đánh giá có nhãn (nDCG). Không đo thì không biết đổi ngưỡng là tốt hơn hay tệ hơn.</li>
<li><b>Latency budget</b> phải chia rõ, ví dụ mục tiêu p95 = 800 ms: embedding 80 ms + vector search 60 ms + keyword 40 ms + rerank 200 ms + phần còn lại cho mạng và app. Nếu thêm LLM tóm tắt thì cho nó <b>stream riêng</b>, không chặn danh sách kết quả.</li>
</ul>
<p class="src"><b>Tham khảo:</b> nDCG theo <a href="https://en.wikipedia.org/wiki/Discounted_cumulative_gain" target="_blank" rel="noopener">Discounted cumulative gain</a> · query understanding và đo chất lượng tìm kiếm theo <a href="https://github.com/binhnguyennus/awesome-scalability" target="_blank" rel="noopener">awesome-scalability — mục Search</a></p>
</section>

<section id="p8-9">
<h3>8.9 Thiết kế AI Customer Support Agent<a class="anch" href="#p8-9">#</a></h3>
<pre><code>                 ┌── Knowledge Base (RAG, chỉ đọc)
                 │
User ──► Agent ──┼── Order API      (đọc: theo user hiện tại)
         │       ├── Payment API    (ghi: cần xác nhận của người)
         │       └── Ticket API     (ghi: an toàn, tạo phiếu)
         │
         └──► Human handoff khi: độ tin cậy thấp, khách yêu cầu,
              hành động rủi ro cao, hoặc quá N bước không xong</code></pre>
<table>
<thead><tr><th>Khía cạnh</th><th>Thiết kế</th></tr></thead>
<tbody>
<tr><td>Phân loại tool</td><td><b>Đọc</b> (tự động được) · <b>Ghi có thể hoàn tác</b> (tạo ticket) · <b>Ghi không hoàn tác</b> (hoàn tiền, hủy đơn) — nhóm cuối <b>bắt buộc</b> có người xác nhận hoặc hạn mức tiền</td></tr>
<tr><td>Phân quyền</td><td>Tool chạy dưới danh nghĩa <b>user đang chat</b>, không dùng service account toàn quyền. Kiểm tra quyền ở backend <b>từng lần gọi</b>, không tin tham số LLM đưa</td></tr>
<tr><td>Vòng lặp agent</td><td>Giới hạn số bước, tổng token, tổng thời gian. Ghi lại đầy đủ chuỗi suy luận và tool call để audit</td></tr>
<tr><td>Trạng thái hội thoại</td><td>Lưu ở backend, không nằm trong prompt. Bền vững để khách quay lại tiếp tục được</td></tr>
<tr><td>Chuyển người thật</td><td>Có tiêu chí rõ ràng + chuyển kèm toàn bộ ngữ cảnh. Đây là tính năng, không phải thất bại</td></tr>
<tr><td>Đo lường</td><td>Tỷ lệ giải quyết trọn (containment), tỷ lệ chuyển người, độ hài lòng, chi phí mỗi hội thoại, tỷ lệ tool gọi sai</td></tr>
</tbody></table>
<p class="src"><b>Tham khảo:</b> phân loại tool theo rủi ro và vòng lặp agent có trần theo <a href="https://www.anthropic.com/engineering/building-effective-agents" target="_blank" rel="noopener">Anthropic — Building Effective Agents</a> · human-in-the-loop cho hành động không hoàn tác theo <a href="https://genai.owasp.org/llm-top-10/" target="_blank" rel="noopener">OWASP Top 10 for LLM Applications</a></p>
<div class="warn"><b>Rủi ro lớn nhất của bài này là bảo mật, và người phỏng vấn giỏi sẽ hỏi tới:</b> nội dung khách gửi (hoặc nội dung trong tài liệu RAG) có thể chứa chỉ thị nhằm điều khiển agent — <i>prompt injection</i>. Nguyên tắc: <b>coi mọi output của LLM là dữ liệu không tin cậy</b>, quyền hạn nằm ở backend chứ không nằm trong prompt. Xem mục 12.5.</div>
<div class="repo"><b>Repo cho Phase 8:</b>
<ul>
<li><a href="https://github.com/donnemartin/system-design-primer" target="_blank" rel="noopener">donnemartin/system-design-primer</a> — nền tảng bắt buộc, có cả Anki flashcard và bài giải mẫu.</li>
<li><a href="https://github.com/ashishps1/awesome-system-design-resources" target="_blank" rel="noopener">ashishps1/awesome-system-design-resources</a> — danh sách được duy trì tích cực nhất, chia theo khái niệm / bài tập / case study.</li>
<li><a href="https://github.com/ByteByteGoHq/system-design-101" target="_blank" rel="noopener">ByteByteGoHq/system-design-101</a> — sơ đồ trực quan, ôn lại nhanh trước buổi phỏng vấn.</li>
<li><a href="https://github.com/checkcheckzz/system-design-interview" target="_blank" rel="noopener">checkcheckzz/system-design-interview</a> — bộ sưu tập lâu năm, nhiều bài viết engineering theo công ty (một số link đã cũ).</li>
<li><a href="https://github.com/karanpratapsingh/system-design" target="_blank" rel="noopener">karanpratapsingh/system-design</a> — đọc như một quyển sách từ đầu đến cuối.</li>
</ul></div>
</section>

<h2 class="dom">Phase 9 — Cloud / DevOps</h2>

<section id="p9-1">
<h3>9.1 Docker<a class="anch" href="#p9-1">#</a></h3>
<ul>
<li><b>Container không phải máy ảo:</b> nó là process trên kernel của host, cách ly bằng <b>namespace</b> (nhìn thấy gì) và giới hạn bằng <b>cgroup</b> (dùng được bao nhiêu). Vì vậy khởi động tính bằng mili-giây và không có kernel riêng.</li>
<li><b>Image gồm nhiều layer</b> có cache: đặt lệnh ít thay đổi lên trước (cài dependency) và <code>COPY</code> mã nguồn xuống sau — sai thứ tự là mỗi lần sửa code phải build lại toàn bộ.</li>
<li><b>Multi-stage build</b>: stage build có compiler và dev dependency, stage cuối chỉ copy artifact → image nhỏ, ít lỗ hổng, deploy nhanh.</li>
<li><b>Nguyên tắc phải nêu khi phỏng vấn:</b> chạy bằng <b>user không phải root</b> · không nhúng secret vào image (dùng biến môi trường hoặc secret manager) · một process chính mỗi container · ghi log ra <b>stdout/stderr</b> · pin phiên bản base image · <code>.dockerignore</code> để không copy <code>node_modules</code> và <code>.git</code>.</li>
</ul>
<p class="src"><b>Tham khảo:</b> <a href="https://docs.docker.com/build/building/best-practices/" target="_blank" rel="noopener">Docker — Building best practices</a> (thứ tự layer, multi-stage, không chạy bằng root)</p>
<div class="warn"><b>Với image chứa model AI:</b> đừng nhúng file weight vào image (image nặng hàng GB, pull rất chậm). Tải weight lúc khởi động từ object storage vào volume có cache, hoặc dùng init container.</div>
</section>

<section id="p9-2">
<h3>9.2 Kubernetes<a class="anch" href="#p9-2">#</a></h3>
<table>
<thead><tr><th>Đối tượng</th><th>Vai trò</th></tr></thead>
<tbody>
<tr><td>Pod</td><td>Đơn vị nhỏ nhất — một hoặc vài container chia sẻ mạng và volume</td></tr>
<tr><td>Deployment</td><td>Giữ đúng số replica, làm rolling update và rollback</td></tr>
<tr><td>Service</td><td>Địa chỉ ổn định + load balance tới các pod đang <b>ready</b></td></tr>
<tr><td>Ingress</td><td>Vào từ ngoài theo host/path, thường kèm TLS</td></tr>
<tr><td>ConfigMap / Secret</td><td>Cấu hình và thông tin mật, tách khỏi image</td></tr>
<tr><td>HPA</td><td>Tự tăng giảm replica theo metric</td></tr>
<tr><td>StatefulSet</td><td>Cho ứng dụng cần danh tính và ổ đĩa ổn định (DB, queue)</td></tr>
</tbody></table>
<ul>
<li><b><code>requests</code> vs <code>limits</code>:</b> <code>requests</code> để scheduler chọn node (và là cơ sở của HPA); <code>limits</code> là mức trần. Vượt limit bộ nhớ là bị <b>OOMKilled</b> (exit 137); vượt limit CPU thì bị <b>throttle</b> chứ không bị kill — nhớ đúng khác biệt này.</li>
<li><b>Ba loại probe:</b> <i>liveness</i> (chết thì restart) · <i>readiness</i> (chưa sẵn sàng thì rút khỏi load balancer) · <i>startup</i> (cho app khởi động chậm, tránh bị liveness giết oan). App AI nạp model chậm thì <b>bắt buộc</b> có startup probe.</li>
<li><b>Graceful shutdown:</b> nhận <code>SIGTERM</code> → dừng nhận request mới → xử lý xong việc đang làm → thoát. Với AI worker, <code>terminationGracePeriodSeconds</code> mặc định 30 s thường <b>không đủ</b> cho một job LLM đang chạy.</li>
</ul>
<p class="src"><b>Nguồn:</b> <a href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/" target="_blank" rel="noopener">Kubernetes — Configure Liveness, Readiness and Startup Probes</a> · phân biệt OOMKilled và CPU throttling theo <a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/" target="_blank" rel="noopener">Kubernetes — Managing Resources for Containers</a></p>
</section>

<section id="p9-3">
<h3>9.3 CI/CD và chiến lược deploy<a class="anch" href="#p9-3">#</a></h3>
<table>
<thead><tr><th>Chiến lược</th><th>Cách chạy</th><th>Đánh đổi</th></tr></thead>
<tbody>
<tr><td>Rolling update</td><td>Thay dần từng pod</td><td>Mặc định; hai phiên bản chạy song song một lúc</td></tr>
<tr><td>Blue-green</td><td>Dựng môi trường mới đủ, đổi traffic một lần</td><td>Rollback tức thì; tốn gấp đôi tài nguyên</td></tr>
<tr><td>Canary</td><td>Cho 1–5% traffic vào bản mới, theo dõi rồi mở dần</td><td>An toàn nhất; cần metric tốt để tự động quyết định</td></tr>
<tr><td>Feature flag</td><td>Deploy code trước, bật tính năng sau</td><td>Tách deploy khỏi release; phải dọn flag cũ</td></tr>
</tbody></table>
<ul>
<li><b>Migration phải tương thích ngược:</b> hai phiên bản code chạy cùng lúc trong lúc rolling. Quy tắc: thêm cột <i>nullable</i> trước → deploy code ghi cả hai → backfill → mới đổi sang dùng cột mới → cuối cùng mới xoá cột cũ (expand–contract). Xoá cột cùng lúc deploy là sự cố chắc chắn.</li>
<li><b>Pipeline tối thiểu:</b> lint → test → build image (tag bằng commit SHA, không dùng <code>latest</code>) → quét lỗ hổng → deploy staging → smoke test → deploy production → theo dõi và tự rollback theo error rate.</li>
<li><b>Với tính năng AI, feature flag và canary quan trọng hơn bình thường</b> — vì đổi prompt hoặc đổi model là <b>đổi hành vi</b> mà test tự động khó bắt. Nên coi prompt là artifact có phiên bản, và đo chất lượng trên canary trước khi mở toàn bộ.</li>
</ul>
<p class="src"><b>Nguồn:</b> quy trình đổi schema tương thích ngược là <a href="https://martinfowler.com/bliki/ParallelChange.html" target="_blank" rel="noopener">ParallelChange / expand–contract của Martin Fowler</a> · chiến lược deploy theo <a href="https://github.com/bregman-arie/devops-exercises" target="_blank" rel="noopener">bregman-arie/devops-exercises</a></p>
</section>

<section id="p9-4">
<h3>9.4 Autoscaling<a class="anch" href="#p9-4">#</a></h3>
<ul>
<li><b>Dọc (vertical)</b> — máy to hơn: đơn giản, nhưng có trần và thường phải restart. <b>Ngang (horizontal)</b> — nhiều máy hơn: gần như không trần nhưng đòi ứng dụng <b>stateless</b>.</li>
<li><b>Chọn metric đúng là cả câu trả lời:</b> CPU cho việc tính toán; <b>độ sâu queue</b> hoặc <b>tuổi message cũ nhất</b> cho worker; số kết nối đồng thời cho server streaming. <b>CPU là metric sai cho AI worker</b> vì worker chỉ ngồi chờ mạng.</li>
<li><b>Scale không tức thời:</b> node mới cần vài phút (pull image, nạp model). Vì vậy phải có buffer, scale-up nhanh và scale-down chậm (cooldown) để tránh dao động.</li>
<li><b>Chi phí:</b> spot/preemptible cho worker chịu được bị ngắt (job có idempotency và retry) · reserved cho tải nền · scale về 0 cho môi trường staging.</li>
</ul>
<p class="src"><b>Tham khảo:</b> <a href="https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/" target="_blank" rel="noopener">Kubernetes — Horizontal Pod Autoscaling</a></p>
</section>

<section id="p9-5">
<h3>9.5 Observability: log, metric, trace<a class="anch" href="#p9-5">#</a></h3>
<table>
<thead><tr><th>Trụ cột</th><th>Trả lời câu hỏi</th><th>Lưu ý</th></tr></thead>
<tbody>
<tr><td><b>Log</b></td><td>Chuyện gì đã xảy ra với <i>request này</i>?</td><td>Log <b>có cấu trúc</b> (JSON) kèm <code>request_id</code>; không log secret/PII</td></tr>
<tr><td><b>Metric</b></td><td>Hệ thống đang khoẻ không? Xu hướng thế nào?</td><td>Số liệu tổng hợp, rẻ, giữ lâu; dùng cho alert và dashboard</td></tr>
<tr><td><b>Trace</b></td><td>Thời gian nằm ở service nào?</td><td>Một <code>trace_id</code> xuyên mọi service — thứ duy nhất debug được hệ phân tán</td></tr>
</tbody></table>
<ul>
<li><b>Bốn chỉ số vàng</b> (Google SRE): latency · traffic · errors · saturation. Nói theo bốn cái này khi được hỏi "monitor cái gì" là câu trả lời gọn và đúng.</li>
<li><b>Dùng percentile, đừng dùng trung bình.</b> p50 nói về trải nghiệm thường, <b>p95/p99</b> nói về trải nghiệm tệ — và với AI thì phương sai rất lớn nên trung bình gần như vô nghĩa.</li>
<li><b>Alert theo triệu chứng người dùng thấy</b> (tỷ lệ lỗi, latency, tuổi queue), không alert theo nguyên nhân (CPU 80%). Alert không hành động được thì phải xoá — nếu không sẽ bị bỏ qua khi có sự cố thật.</li>
<li><b>Đo riêng cho AI:</b> TTFT (time to first token) · token/giây · token vào-ra và <b>chi phí</b> theo tenant/feature · tỷ lệ <code>429</code> và tỷ lệ fallback · tỷ lệ tool call thất bại · tỷ lệ trả lời "không biết" · điểm phản hồi người dùng. Nêu được nhóm này là dấu hiệu đã chạy AI trong production.</li>
</ul>
<p class="src"><b>Nguồn:</b> bốn chỉ số vàng và nguyên tắc "alert theo triệu chứng" lấy từ <a href="https://sre.google/sre-book/monitoring-distributed-systems/" target="_blank" rel="noopener">Google SRE Book — Monitoring Distributed Systems</a> · cảnh báo dựa trên SLO theo <a href="https://sre.google/workbook/alerting-on-slos/" target="_blank" rel="noopener">Google SRE Workbook — Alerting on SLOs</a></p>
</section>

<section id="p9-6">
<h3>9.6 LLM: gọi API bên ngoài hay tự host<a class="anch" href="#p9-6">#</a></h3>
<pre><code>Application ─► LLM Gateway ─► External LLM API   (OpenAI/Claude/Gemini)

Application ─► LLM Gateway ─► Self-hosted LLM ─► GPU
                              (vLLM / TGI / Ollama)</code></pre>
<table>
<thead><tr><th></th><th>API bên ngoài</th><th>Tự host</th></tr></thead>
<tbody>
<tr><td>Triển khai</td><td>Dễ — một API key là chạy</td><td>Khó: GPU, driver, serving stack, autoscale</td></tr>
<tr><td>Hạ tầng</td><td>Không cần GPU</td><td>Cần GPU, và GPU thường thiếu hàng</td></tr>
<tr><td>Chi phí</td><td>Theo token — rẻ khi ít, đắt khi rất nhiều</td><td>Chi phí hạ tầng cố định — đắt khi ít, rẻ khi tải cao <b>và đều</b></td></tr>
<tr><td>Phụ thuộc</td><td>Phụ thuộc nhà cung cấp (giá, quota, model bị khai tử)</td><td>Tự kiểm soát hoàn toàn</td></tr>
<tr><td>Scale</td><td>Dễ, nhưng bị chặn bởi quota</td><td>Phải tự quản capacity; scale GPU rất chậm</td></tr>
<tr><td>Dữ liệu</td><td>Dữ liệu ra khỏi hệ thống — cần xem điều khoản, cần lọc PII</td><td>Dữ liệu không ra khỏi mạng — thường là lý do <b>chính</b> để tự host</td></tr>
<tr><td>Chất lượng</td><td>Model tốt nhất, cập nhật liên tục</td><td>Model mở thường kém hơn một bậc ở tác vụ khó</td></tr>
</tbody></table>
<div class="tip"><b>Câu trả lời cân bằng:</b> "Mặc định tôi dùng API bên ngoài qua một gateway để đi nhanh. Tôi sẽ xét tự host khi có <b>một trong ba lý do</b>: dữ liệu không được rời hệ thống vì tuân thủ; tải lớn và ổn định đủ để chi phí hạ tầng rẻ hơn chi phí token; hoặc cần một model fine-tune riêng. Kiến trúc có gateway nên chuyển đổi không phải viết lại ứng dụng." Không cần đi sâu về GPU — chỉ cần biết inference bị chặn bởi <b>bộ nhớ và băng thông VRAM</b>, và batching là cách chính để tăng thông lượng.</div>
<p class="src"><b>Tham khảo:</b> nút thắt băng thông bộ nhớ và vai trò của batching trong inference theo <a href="https://docs.vllm.ai/en/latest/" target="_blank" rel="noopener">vLLM documentation</a> và <a href="https://github.com/ray-project/llm-numbers" target="_blank" rel="noopener">llm-numbers</a></p>
<div class="repo"><b>Repo cho Phase 9:</b>
<ul>
<li><a href="https://github.com/bregman-arie/devops-exercises" target="_blank" rel="noopener">bregman-arie/devops-exercises</a> — hàng nghìn câu hỏi phỏng vấn DevOps kèm đáp án, đúng định dạng để tự kiểm tra.</li>
<li><a href="https://github.com/kelseyhightower/kubernetes-the-hard-way" target="_blank" rel="noopener">kelseyhightower/kubernetes-the-hard-way</a> — dựng K8s bằng tay, hiểu từng thành phần thay vì học thuộc lệnh.</li>
<li><a href="https://github.com/dockersamples/example-voting-app" target="_blank" rel="noopener">dockersamples/example-voting-app</a> — app nhiều container mẫu, dùng để tập Compose/K8s.</li>
<li><a href="https://github.com/kamranahmedse/developer-roadmap" target="_blank" rel="noopener">kamranahmedse/developer-roadmap</a> — roadmap Backend/DevOps/AI Engineer dạng sơ đồ, dùng để đối chiếu xem còn thiếu mảng nào.</li>
<li><a href="https://sre.google/books/" target="_blank" rel="noopener">Google SRE Books</a> — miễn phí; chương SLO và alerting là phần đáng đọc nhất cho mục 9.5.</li>
</ul></div>
</section>

<h2 class="dom">Phase 10 — AI Fundamentals</h2>

<section id="p10-1">
<h3>10.1 AI, ML, Deep Learning, Generative AI<a class="anch" href="#p10-1">#</a></h3>
<pre><code>AI  (mục tiêu: máy làm việc cần trí tuệ)
 └── Machine Learning  (học quy luật từ dữ liệu, không lập trình luật tay)
      └── Deep Learning  (mạng nơ-ron nhiều lớp)
           └── Transformer
                └── LLM  →  Generative AI</code></pre>
<table>
<thead><tr><th>Kiểu học</th><th>Nghĩa</th><th>Ví dụ backend hay gặp</th></tr></thead>
<tbody>
<tr><td>Supervised</td><td>Có nhãn, học từ cặp (input, đáp án)</td><td>Phân loại ticket, phát hiện gian lận</td></tr>
<tr><td>Unsupervised</td><td>Không nhãn, tìm cấu trúc</td><td>Phân cụm khách hàng, phát hiện bất thường</td></tr>
<tr><td>Self-supervised</td><td>Nhãn sinh từ chính dữ liệu</td><td><b>Cách LLM được huấn luyện</b>: đoán token tiếp theo</td></tr>
<tr><td>Reinforcement</td><td>Học từ phần thưởng</td><td>RLHF — bước tinh chỉnh cho model trả lời hữu ích và an toàn</td></tr>
</tbody></table>
<p class="src"><b>Tham khảo:</b> <a href="https://github.com/microsoft/generative-ai-for-beginners" target="_blank" rel="noopener">microsoft/generative-ai-for-beginners</a> · <a href="https://github.com/aishwaryanr/awesome-generative-ai-guide/blob/main/interview_prep/60_gen_ai_questions.md" target="_blank" rel="noopener">awesome-generative-ai-guide — 60 câu hỏi GenAI hay gặp</a></p>
<div class="tip"><b>Đủ để trả lời:</b> "ML học quy luật từ dữ liệu thay vì được lập trình luật; deep learning là ML dùng mạng nơ-ron nhiều lớp; generative AI sinh nội dung mới; LLM là model ngôn ngữ lớn kiến trúc Transformer, huấn luyện self-supervised để dự đoán token tiếp theo." Bốn câu này là đủ cho vòng backend — không cần đi sâu hơn.</div>
</section>

<section id="p10-2">
<h3>10.2 Transformer và attention — mức khái niệm<a class="anch" href="#p10-2">#</a></h3>
<ul>
<li><b>Vấn đề trước Transformer:</b> RNN/LSTM đọc tuần tự nên không song song hoá được và "quên" phần xa. Transformer (2017, <i>Attention Is All You Need</i>) xử lý <b>cả câu cùng lúc</b> — đó là lý do huấn luyện được ở quy mô khổng lồ.</li>
<li><b>Self-attention</b>, nói bằng một câu: với mỗi token, model tính <i>mức liên quan</i> tới mọi token khác rồi trộn thông tin theo trọng số đó. Nhờ vậy trong câu <i>"con mèo không ăn vì nó no"</i>, từ "nó" nhận nhiều attention từ "con mèo".</li>
<li><b>Vì sao backend cần biết:</b> attention có chi phí tính toán <b>bậc hai</b> (quadratic) theo độ dài chuỗi — đây là lý do context window có giới hạn, và lý do thời gian xử lý prompt (pha prefill) tăng <b>nhanh hơn tuyến tính</b> khi prompt rất dài.</li>
<li><b>Phân biệt hai thứ hay bị lẫn:</b> <i>chi phí tính toán</i> của attention là bậc hai, còn <i>hoá đơn</i> của provider tính <b>tuyến tính theo số token</b> (và prompt caching còn làm phần tiền tố lặp lại rẻ hơn nữa). Nói "prompt dài thì đắt theo cấp số nhân" là <b>sai</b> — đắt tuyến tính, còn chậm thì siêu tuyến tính.</li>
<li><b>Positional encoding</b>: vì xử lý song song nên phải gắn thêm thông tin vị trí, nếu không câu đảo trật tự sẽ như nhau.</li>
</ul>
<p class="src"><b>Nguồn:</b> kiến trúc Transformer từ <a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener">Vaswani et al., <i>Attention Is All You Need</i> — arXiv:1706.03762</a> · giải thích ở mức hình vẽ: <a href="https://jalammar.github.io/illustrated-transformer/" target="_blank" rel="noopener">The Illustrated Transformer</a></p>
<div class="warn">Nếu người phỏng vấn hỏi sâu vào toán (softmax của QKᵀ/√d), với vị trí backend bạn <b>được phép</b> nói: "Tôi hiểu ở mức khái niệm và hệ quả kỹ thuật — chi phí bậc hai, giới hạn context, KV cache — chứ không đi sâu vào phần toán. Điều tôi làm là thiết kế hệ thống quanh những tính chất đó." Trả lời thật thà và hướng về giá trị của mình luôn tốt hơn nói vòng vo.</div>
</section>

<section id="p10-3">
<h3>10.3 Training, inference, token và context<a class="anch" href="#p10-3">#</a></h3>
<table>
<thead><tr><th></th><th>Training</th><th>Inference</th></tr></thead>
<tbody>
<tr><td>Làm gì</td><td>Điều chỉnh trọng số từ dữ liệu</td><td>Dùng trọng số đã có để sinh output</td></tr>
<tr><td>Chi phí</td><td>Rất lớn, một lần (hoặc theo chu kỳ)</td><td>Nhỏ mỗi lần nhưng <b>nhân với mọi request</b></td></tr>
<tr><td>Ai lo</td><td>Nhà cung cấp model / team ML</td><td><b>Backend</b> — đây là 99% việc của bạn</td></tr>
</tbody></table>
<ul>
<li><b>Inference chia hai pha</b>, và biết điều này giải thích được mọi con số latency: <b>prefill</b> — đọc toàn bộ prompt một lượt (song song, nhanh, tỷ lệ với độ dài prompt) và <b>decode</b> — sinh từng token một, <b>tuần tự</b>, mỗi token là một lượt. Vì vậy output dài chậm hơn input dài rất nhiều.</li>
<li><b>KV cache</b> giữ lại phép tính của các token trước để không tính lại — đây là cơ chế đằng sau "prompt caching" và là lý do đặt phần tĩnh lên <b>đầu</b> prompt mới có tác dụng.</li>
<li><b>Token:</b> tiếng Anh ~4 ký tự/token; <b>tiếng Việt tốn token hơn đáng kể</b> (dấu và ký tự Unicode bị tách nhỏ) — phải tính vào cả chi phí và giới hạn context.</li>
<li><b>Context window</b> là <b>tổng</b> input + output. Nhớ hai điều: context lớn hơn không có nghĩa là <i>nên</i> nhồi đầy (chất lượng giảm ở giữa, giá tăng), và luôn phải chừa chỗ cho output.</li>
</ul>
<p class="src"><b>Tham khảo:</b> hai pha prefill/decode và KV cache theo <a href="https://docs.vllm.ai/en/latest/" target="_blank" rel="noopener">vLLM documentation</a> · số token trên mỗi từ và cách tokenizer chia tiếng Việt kiểm tra được bằng <a href="https://github.com/openai/tiktoken" target="_blank" rel="noopener">openai/tiktoken</a></p>
</section>

<section id="p10-4">
<h3>10.4 Embedding, fine-tuning, hallucination<a class="anch" href="#p10-4">#</a></h3>
<ul>
<li><b>Embedding model khác model sinh:</b> nó chỉ chuyển văn bản thành vector, rẻ hơn hàng chục lần, không sinh chữ. Dùng cho search, phân loại, gom nhóm, phát hiện trùng lặp.</li>
<li><b>Fine-tuning</b> là huấn luyện tiếp trên dữ liệu của bạn để <b>đổi hành vi</b> (giọng điệu, định dạng, tuân thủ một schema khó) — <i>không phải</i> để nhồi kiến thức. LoRA/PEFT chỉ cập nhật một phần nhỏ trọng số nên rẻ hơn nhiều.</li>
<li><b>Hallucination</b> — model sinh nội dung nghe hợp lý nhưng sai. Nguyên nhân gốc: nó tối ưu việc <i>đoán token tiếp theo hợp lý</i>, không có cơ chế "biết mình không biết". Vì vậy không thể diệt hẳn, chỉ giảm và <b>phát hiện</b> được (xem 12.2).</li>
</ul>
<table>
<thead><tr><th>Muốn gì</th><th>Dùng cái gì</th></tr></thead>
<tbody>
<tr><td>Model biết dữ liệu riêng, hay thay đổi</td><td><b>RAG</b></td></tr>
<tr><td>Model trả lời đúng giọng, đúng định dạng</td><td><b>Fine-tuning</b> (hoặc few-shot prompt trước đã)</td></tr>
<tr><td>Model làm được việc trong hệ thống</td><td><b>Function calling / tool use</b></td></tr>
<tr><td>Model rẻ và nhanh hơn</td><td>Model nhỏ hơn + routing + cache</td></tr>
</tbody></table>
<div class="repo"><b>Repo cho Phase 10 (1–2 tuần là đủ, đừng học như AI Engineer):</b>
<ul>
<li><a href="https://github.com/microsoft/generative-ai-for-beginners" target="_blank" rel="noopener">microsoft/generative-ai-for-beginners</a> — 21 bài, đúng mức độ cho backend developer. Nếu chỉ chọn một, chọn repo này.</li>
<li><a href="https://github.com/anthropics/courses" target="_blank" rel="noopener">anthropics/courses</a> — khoá về prompt engineering, tool use, đánh giá; ví dụ chạy được.</li>
<li><a href="https://github.com/mlabonne/llm-course" target="_blank" rel="noopener">mlabonne/llm-course</a> — có nhánh "LLM Engineer" riêng, bỏ qua nhánh "LLM Scientist".</li>
<li><a href="https://github.com/rasbt/LLMs-from-scratch" target="_blank" rel="noopener">rasbt/LLMs-from-scratch</a> — chỉ đọc nếu <b>muốn</b> hiểu Transformer bên trong; không cần cho phỏng vấn backend.</li>
<li><a href="https://jalammar.github.io/illustrated-transformer/" target="_blank" rel="noopener">The Illustrated Transformer</a> — một bài viết, đủ để nói về attention ở mức khái niệm.</li>
</ul></div>
<p class="src"><b>Tham khảo:</b> <a href="https://platform.openai.com/docs/guides/fine-tuning" target="_blank" rel="noopener">OpenAI — Fine-tuning</a> cho phạm vi thật sự của fine-tuning (đổi hành vi, không phải nhồi kiến thức)</p>
</section>

<h2 class="dom">Phase 11 — AI Application</h2>

<section id="p11-1">
<h3>11.1 LLM API và các tham số<a class="anch" href="#p11-1">#</a></h3>
<pre><code>POST /v1/messages
{
  "model": "claude-...",
  "system": "Bạn là trợ lý hỗ trợ khách hàng…",   ← phần tĩnh, đặt ĐẦU
  "messages": [
    {"role":"user","content":"Đơn ORD-91 của tôi đâu?"}
  ],
  "max_tokens": 500,
  "temperature": 0
}
→ { content, stop_reason, usage: { input_tokens, output_tokens } }</code></pre>
<table>
<thead><tr><th>Tham số</th><th>Ý nghĩa</th><th>Đặt thế nào</th></tr></thead>
<tbody>
<tr><td><code>temperature</code></td><td>Độ ngẫu nhiên khi chọn token</td><td><b>0</b> cho phân loại, trích xuất, tool calling · cao hơn cho viết sáng tạo</td></tr>
<tr><td><code>top_p</code></td><td>Chỉ xét <b>tập token nhỏ nhất</b> có tổng xác suất ≥ p (nucleus sampling)</td><td>Điều chỉnh <b>một trong hai</b>, đừng đổi cả hai cùng lúc</td></tr>
<tr><td><code>max_tokens</code></td><td>Trần token output</td><td>Luôn đặt — vừa chặn chi phí, vừa chặn treo</td></tr>
<tr><td><code>stop_reason</code></td><td>Vì sao dừng</td><td><b>Phải kiểm tra</b>: dừng vì hết <code>max_tokens</code> nghĩa là output bị cắt giữa dòng</td></tr>
<tr><td><code>usage</code></td><td>Token đã dùng</td><td>Ghi log để tính tiền theo tenant/feature</td></tr>
<tr><td><code>seed</code> (nếu có)</td><td>Cố gắng tái lập kết quả</td><td>Giúp test nhưng <b>không đảm bảo</b> tuyệt đối</td></tr>
</tbody></table>
<p class="src"><b>Tham khảo:</b> <a href="https://docs.claude.com/en/api/messages" target="_blank" rel="noopener">Anthropic — Messages API</a> · <a href="https://platform.openai.com/docs/api-reference/chat" target="_blank" rel="noopener">OpenAI — Chat Completions API</a> cho ý nghĩa của <code>stop_reason</code> và <code>usage</code></p>
<div class="warn"><b>Ba điều phải làm ở mọi lời gọi LLM trong production:</b> đặt timeout · retry backoff cho lỗi tạm và <code>429</code> · ghi lại <code>usage</code> + model + phiên bản prompt. Thiếu cái thứ ba là sau này không thể trả lời "vì sao hoá đơn tháng này gấp ba lần".</div>
</section>

<section id="p11-2">
<h3>11.2 Prompt engineering — phần đáng học thật<a class="anch" href="#p11-2">#</a></h3>
<table>
<thead><tr><th>Kỹ thuật</th><th>Khi nào dùng</th></tr></thead>
<tbody>
<tr><td>Nói rõ vai và mục tiêu</td><td>Luôn luôn — đặt trong <code>system</code></td></tr>
<tr><td>Nêu rõ định dạng output</td><td>Khi cần parse; kèm ví dụ output mẫu</td></tr>
<tr><td>Few-shot (2–5 ví dụ)</td><td>Tác vụ có quy ước riêng; hiệu quả hơn giải thích dài dòng</td></tr>
<tr><td>Chain-of-thought / "suy nghĩ trước khi trả lời"</td><td>Bài cần lập luận; nhớ tách phần suy nghĩ ra khỏi phần trả lời</td></tr>
<tr><td>Phân định dữ liệu bằng thẻ (<code>&lt;document&gt;…&lt;/document&gt;</code>)</td><td><b>Bắt buộc</b> khi nhét dữ liệu người dùng — giúp chống prompt injection</td></tr>
<tr><td>Cho phép nói "không biết"</td><td>Mọi hệ RAG — nếu không nó sẽ tự nghĩ ra</td></tr>
</tbody></table>
<ul>
<li><b>Prompt là code:</b> phải nằm trong git, có phiên bản, có test, và ghi lại phiên bản nào sinh ra response nào. Prompt sửa tay trực tiếp trên production là một dạng nợ kỹ thuật.</li>
<li><b>Thứ tự có ý nghĩa:</b> phần tĩnh (system, tài liệu chuẩn) lên đầu để tận dụng prompt cache; câu hỏi của người dùng để cuối. Vừa rẻ hơn vừa thường tốt hơn.</li>
<li><b>Ngắn hơn thường tốt hơn.</b> Prompt phình to là dấu hiệu đang chữa triệu chứng — phần lớn trường hợp nên sửa dữ liệu đưa vào (retrieval) hoặc chia thành nhiều bước.</li>
</ul>
<p class="src"><b>Tham khảo:</b> <a href="https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview" target="_blank" rel="noopener">Anthropic — Prompt engineering</a> (kể cả việc phân định dữ liệu bằng thẻ) · <a href="https://github.com/anthropics/courses" target="_blank" rel="noopener">anthropics/courses</a> · <a href="https://www.promptingguide.ai/" target="_blank" rel="noopener">Prompt Engineering Guide</a></p>
</section>

<section id="p11-3">
<h3>11.3 Structured output<a class="anch" href="#p11-3">#</a></h3>
<p>Đây là kỹ thuật <b>quan trọng nhất</b> để LLM dùng được trong backend: bạn cần dữ liệu chứ không cần văn xuôi.</p>
<pre><code>{
  "type": "object",
  "properties": {
    "sentiment": { "type": "string", "enum": ["positive","neutral","negative"] },
    "category":  { "type": "string", "enum": ["billing","technical","other"] },
    "urgency":   { "type": "integer", "minimum": 1, "maximum": 5 },
    "needs_human": { "type": "boolean" }
  },
  "required": ["sentiment","category","urgency","needs_human"],
  "additionalProperties": false
}</code></pre>
<ul>
<li><b>Bậc thang độ tin cậy:</b> (1) chỉ nhờ prompt trả JSON — dễ sai; (2) JSON mode — đảm bảo <i>là</i> JSON hợp lệ nhưng chưa chắc đúng schema; (3) <b>schema-constrained / tool call</b> — provider ép output theo schema. Luôn chọn mức cao nhất provider hỗ trợ.</li>
<li><b>Dù có ép schema vẫn phải validate ở backend</b>, và validate cả <b>nghiệp vụ</b>: schema hợp lệ nhưng <code>order_id</code> có thể không thuộc user này.</li>
<li><b>Dùng <code>enum</code> thay vì chuỗi tự do</b> ở mọi chỗ có thể — nó biến bài toán sinh chữ thành bài toán phân loại, giảm hẳn lỗi.</li>
<li><b>Xử lý thất bại:</b> retry một lần kèm thông báo lỗi validate; vẫn sai thì trả về đường dự phòng (chuyển người thật, hoặc kết quả mặc định) — <b>không</b> parse JSON bằng regex vá tạm.</li>
</ul>
<p class="src"><b>Tham khảo:</b> <a href="https://platform.openai.com/docs/guides/structured-outputs" target="_blank" rel="noopener">OpenAI — Structured Outputs</a> · <a href="https://json-schema.org/" target="_blank" rel="noopener">JSON Schema</a> cho <code>enum</code> và <code>additionalProperties</code></p>
</section>

<section id="p11-4">
<h3>11.4 Function calling / tool use<a class="anch" href="#p11-4">#</a></h3>
<pre><code>1. Backend gửi kèm danh sách tool (tên, mô tả, JSON schema tham số)
2. LLM trả về: "hãy gọi get_order(order_id: 'ORD-91')"     ← chỉ là ĐỀ NGHỊ
3. BACKEND: kiểm tra quyền → validate tham số → thực thi
4. Gửi kết quả tool lại cho LLM
5. LLM sinh câu trả lời cuối, hoặc đề nghị tool tiếp theo</code></pre>
<ul>
<li><b>Điểm cốt tử:</b> bước 2 chỉ là <i>văn bản do model sinh</i>. Model <b>không</b> chạy gì cả. Toàn bộ quyền và mọi kiểm tra nằm ở bước 3, trong code của bạn.</li>
<li><b>Thiết kế tool tốt:</b> mô tả rõ ràng (LLM chọn tool dựa vào mô tả) · tham số hẹp và có <code>enum</code> · <b>ít tool</b> (quá nhiều thì chọn sai) · tool trả lỗi <i>có thể đọc được</i> để model tự sửa · và tool <b>idempotent</b> khi có thể.</li>
<li><b>Tránh tool quá quyền:</b> đừng làm <code>run_sql(query)</code> hay <code>http_request(url)</code>. Hãy làm <code>get_order_status(order_id)</code> — hẹp, kiểm tra được, log được. Đây gần như luôn là câu hỏi tiếp theo của người phỏng vấn.</li>
<li><b>Parallel tool calls</b>: nhiều tool độc lập thì gọi song song để cắt latency — nhưng chỉ khi chúng thật sự không phụ thuộc nhau.</li>
</ul>
<p class="src"><b>Tham khảo:</b> tool use và cách thiết kế tool cho agent theo <a href="https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview" target="_blank" rel="noopener">Anthropic — Tool use</a> và <a href="https://www.anthropic.com/engineering/writing-tools-for-agents" target="_blank" rel="noopener">Anthropic — Writing tools for agents</a> · structured output theo <a href="https://platform.openai.com/docs/guides/structured-outputs" target="_blank" rel="noopener">OpenAI — Structured Outputs</a></p>
</section>

<section id="p11-5">
<h3>11.5 Chunking và pipeline embedding<a class="anch" href="#p11-5">#</a></h3>
<pre><code>File ─► extract (PDF/DOCX/HTML → text, giữ heading)
     ─► clean (bỏ header/footer lặp, chuẩn hoá khoảng trắng)
     ─► chunk (theo cấu trúc; 300–800 token; chồng 10–20%)
     ─► embed theo lô (batch) — có retry, có idempotency
     ─► upsert vào vector store kèm metadata + version</code></pre>
<table>
<thead><tr><th>Quyết định</th><th>Kinh nghiệm</th></tr></thead>
<tbody>
<tr><td>Chunk quá nhỏ</td><td>Mất ngữ cảnh, câu trả lời vụn</td></tr>
<tr><td>Chunk quá lớn</td><td>Lẫn nhiều nội dung không liên quan → embedding "nhoè", tốn token</td></tr>
<tr><td>Cắt theo cấu trúc</td><td>Theo heading/đoạn/hàng bảng — hầu như luôn tốt hơn cắt theo số ký tự</td></tr>
<tr><td>Kèm ngữ cảnh vào chunk</td><td>Thêm tiêu đề tài liệu + đường dẫn heading vào đầu mỗi chunk; cải thiện rõ rệt và rất rẻ</td></tr>
<tr><td>Bảng và code</td><td>Đừng cắt giữa bảng; giữ nguyên khối code cùng chú thích</td></tr>
<tr><td>Idempotency</td><td>Khoá = hash(nội dung chunk + model). Chạy lại pipeline không được tính tiền lần hai</td></tr>
<tr><td>Chi phí</td><td>Embedding cả kho là chi phí <b>một lần</b> lớn — dùng batch API và tính trước (mục 8.2)</td></tr>
</tbody></table>
<div class="warn"><b>Query và document phải dùng cùng một embedding model.</b> Trộn hai model là kết quả tìm kiếm vô nghĩa nhưng <i>không báo lỗi</i> — một trong những bug khó phát hiện nhất của RAG. Hãy lưu tên model vào metadata của mỗi chunk.</div>
<p class="src"><b>Tham khảo:</b> <a href="https://github.com/NirDiamant/RAG_Techniques" target="_blank" rel="noopener">NirDiamant/RAG_Techniques</a> cho kích thước chunk và cách cắt theo cấu trúc · <a href="https://www.anthropic.com/news/contextual-retrieval" target="_blank" rel="noopener">Anthropic — Contextual Retrieval</a> cho việc thêm ngữ cảnh vào chunk trước khi embed</p>
</section>

<section id="p11-6">
<h3>11.6 RAG — dựng và cải tiến<a class="anch" href="#p11-6">#</a></h3>
<p><b>Thứ tự cải tiến khi RAG trả lời kém</b> — đi từ rẻ đến đắt, và đo sau mỗi bước:</p>
<ol>
<li><b>Đo trước:</b> tài liệu đúng có nằm trong top-K không? Nếu <b>không</b> → lỗi ở retrieval, đừng sửa prompt.</li>
<li><b>Sửa chunking</b> — cắt theo cấu trúc, thêm tiêu đề vào chunk. Rẻ nhất, hiệu quả cao nhất.</li>
<li><b>Thêm hybrid search</b> — bù đúng phần vector làm dở (mã lỗi, tên riêng).</li>
<li><b>Thêm reranker</b> — cải thiện lớn nhất trên mỗi đồng bỏ ra sau chunking.</li>
<li><b>Query rewriting</b> — LLM viết lại câu hỏi cho rõ, hoặc tách thành nhiều truy vấn con; tốt cho hội thoại nhiều lượt ("còn cái kia thì sao?").</li>
<li><b>Sửa prompt</b> — bắt buộc trích dẫn nguồn, cho phép nói "không biết".</li>
<li><b>Cuối cùng</b> mới xét model to hơn hoặc fine-tuning.</li>
</ol>
<p class="src"><b>Nguồn:</b> <i>contextual retrieval</i> từ <a href="https://www.anthropic.com/news/contextual-retrieval" target="_blank" rel="noopener">Anthropic — Introducing Contextual Retrieval</a> · <i>parent-document</i> và <i>agentic RAG</i> theo <a href="https://github.com/NirDiamant/RAG_Techniques" target="_blank" rel="noopener">NirDiamant/RAG_Techniques</a></p>
<div class="tip"><b>Ba biến thể nên biết tên:</b> <i>parent-document retrieval</i> (tìm bằng chunk nhỏ, đưa cho LLM cả đoạn cha) · <i>contextual retrieval</i> (thêm phần mô tả ngữ cảnh vào chunk trước khi embed) · <i>agentic RAG</i> (LLM tự quyết định có cần tìm nữa không, tìm mấy lần).</div>
</section>

<section id="p11-7">
<h3>11.7 Evaluation — cách biết hệ AI của bạn tốt hay tệ<a class="anch" href="#p11-7">#</a></h3>
<ul>
<li><b>Không có eval thì mọi thay đổi là đoán.</b> Đây là câu trả lời phân biệt người đã làm thật với người mới đọc tài liệu.</li>
<li><b>Bộ dữ liệu vàng:</b> 50–200 cặp (câu hỏi, câu trả lời đúng, tài liệu nguồn) — lấy từ ticket và câu hỏi thật, không tự nghĩ ra. Đây là tài sản quý nhất của dự án AI.</li>
<li><b>Đo tách hai tầng:</b> <i>retrieval</i> — recall@k, MRR, nDCG · <i>generation</i> — faithfulness (có dựa trên nguồn không), answer relevancy, và tỷ lệ trả lời "không biết" đúng lúc.</li>
<li><b>LLM-as-judge</b> để chấm tự động ở quy mô lớn: dùng model khác, cho rubric rõ ràng, và <b>hiệu chuẩn</b> bằng cách so với vài chục mẫu người chấm. Đừng để cùng một model tự chấm mình.</li>
<li><b>Trong CI:</b> chạy eval khi đổi prompt/model/chunking, và <b>chặn merge nếu tụt quá ngưỡng</b> — coi như một loại test hồi quy.</li>
<li><b>Online:</b> phản hồi 👍/👎, tỷ lệ chỉnh sửa lại của người dùng, tỷ lệ chuyển người thật, A/B giữa hai phiên bản prompt.</li>
</ul>
<p class="src"><b>Nguồn:</b> chỉ số faithfulness / answer relevancy và cách đo tách tầng theo <a href="https://docs.ragas.io/en/stable/concepts/metrics/" target="_blank" rel="noopener">Ragas — Metrics</a> · giới hạn của LLM-as-judge theo <a href="https://arxiv.org/abs/2306.05685" target="_blank" rel="noopener">Zheng et al., <i>Judging LLM-as-a-Judge</i> — arXiv:2306.05685</a></p>
</section>

<section id="p11-8">
<h3>11.8 Agent<a class="anch" href="#p11-8">#</a></h3>
<pre><code>Vòng lặp agent:
   observe → LLM chọn hành động → backend thực thi tool
       ↑                                    │
       └────────── kết quả ─────────────────┘
   dừng khi: xong việc · hết N bước · hết ngân sách token · lỗi</code></pre>
<table>
<thead><tr><th>Vấn đề của agent</th><th>Cách chặn</th></tr></thead>
<tbody>
<tr><td>Lặp vô hạn</td><td>Trần số bước (thường 5–10) và trần token; phát hiện lặp lại cùng tool + cùng tham số</td></tr>
<tr><td>Chi phí bùng nổ</td><td>Ngân sách theo hội thoại; mỗi bước là một lần gọi LLM đầy đủ context</td></tr>
<tr><td>Sai một bước, sai cả chuỗi</td><td>Validate output từng bước; checkpoint để chạy lại từ giữa</td></tr>
<tr><td>Không giải thích được</td><td>Lưu toàn bộ trace: prompt, tool call, kết quả, thời gian, token</td></tr>
<tr><td>Hành động nguy hiểm</td><td>Phân loại tool theo rủi ro; nhóm rủi ro cao cần người xác nhận (human in the loop)</td></tr>
</tbody></table>
<p class="src"><b>Nguồn:</b> quan điểm ưu tiên workflow cố định thay vì agent vòng mở lấy từ <a href="https://www.anthropic.com/engineering/building-effective-agents" target="_blank" rel="noopener">Anthropic — Building Effective Agents</a></p>
<div class="tip"><b>Lời khuyên thực dụng nên nói ra:</b> "Tôi ưu tiên <b>workflow cố định</b> có LLM ở từng bước thay vì agent tự do, vì nó dự đoán được, test được, rẻ hơn và dễ debug hơn. Chỉ dùng agent vòng mở khi số bước thật sự không biết trước." Đây là quan điểm được đánh giá cao vì đúng với thực tế production.</div>
</section>

<section id="p11-9">
<h3>11.9 MCP — Model Context Protocol<a class="anch" href="#p11-9">#</a></h3>
<ul>
<li><b>Vấn đề nó giải:</b> mỗi ứng dụng AI tự viết lại tích hợp riêng cho mỗi nguồn dữ liệu và mỗi tool → nhân bản M×N. MCP là <b>giao thức mở chuẩn hoá</b> cách một AI client nói chuyện với các server cung cấp tool và dữ liệu.</li>
<li><b>Ba thứ MCP server cung cấp:</b> <i>tools</i> (hành động gọi được) · <i>resources</i> (dữ liệu đọc được) · <i>prompts</i> (mẫu prompt dùng lại).</li>
<li><b>Góc nhìn backend:</b> viết MCP server ≈ viết một API nội bộ, nhưng client là LLM. Vì vậy <b>mọi nguyên tắc bảo mật của mục 11.4 và 12.5 vẫn nguyên giá trị</b>: xác thực, phân quyền theo user, validate tham số, log, rate limit. Đừng vì "AI gọi" mà bỏ qua auth.</li>
<li><b>Đủ để trả lời phỏng vấn:</b> "MCP chuẩn hoá việc kết nối LLM với tool và dữ liệu, thay cho việc mỗi app tự viết tích hợp riêng. Với backend, làm MCP server là làm một lớp API có schema rõ ràng, và phần quyền hạn vẫn thuộc backend."</li>
</ul>
<p class="src"><b>Tham khảo:</b> <a href="https://modelcontextprotocol.io/" target="_blank" rel="noopener">modelcontextprotocol.io</a> (đặc tả) · <a href="https://github.com/modelcontextprotocol/servers" target="_blank" rel="noopener">modelcontextprotocol/servers</a> (server tham chiếu)</p>
<div class="repo"><b>Repo cho Phase 11 — đây là phase nên dành nhiều thời gian nhất:</b>
<ul>
<li><a href="https://github.com/NirDiamant/RAG_Techniques" target="_blank" rel="noopener">NirDiamant/RAG_Techniques</a> — <b>ưu tiên số một.</b> Mỗi kỹ thuật RAG một notebook chạy được: chunking, hybrid, rerank, contextual, agentic.</li>
<li><a href="https://github.com/NirDiamant/GenAI_Agents" target="_blank" rel="noopener">NirDiamant/GenAI_Agents</a> — 50+ mẫu agent, từ đơn giản tới nhiều agent.</li>
<li><a href="https://github.com/openai/openai-cookbook" target="_blank" rel="noopener">openai/openai-cookbook</a> · <a href="https://github.com/anthropics/courses" target="_blank" rel="noopener">anthropics/courses</a> — công thức chuẩn cho structured output, tool calling, đánh giá.</li>
<li><a href="https://github.com/modelcontextprotocol/servers" target="_blank" rel="noopener">modelcontextprotocol/servers</a> — hàng chục MCP server tham chiếu, đọc một cái là hiểu giao thức.</li>
<li><a href="https://github.com/Shubhamsaboo/awesome-llm-apps" target="_blank" rel="noopener">Shubhamsaboo/awesome-llm-apps</a> — app hoàn chỉnh để mượn cấu trúc cho 3 project của roadmap.</li>
<li><a href="https://github.com/langfuse/langfuse" target="_blank" rel="noopener">langfuse/langfuse</a> · <a href="https://github.com/Arize-ai/phoenix" target="_blank" rel="noopener">Arize-ai/phoenix</a> — tracing và eval cho LLM; cắm vào project để có số liệu thật mà kể trong phỏng vấn.</li>
</ul></div>
<div class="tip"><b>Ba project của roadmap — làm 2 trong 3 là đủ để kể trong phỏng vấn:</b>
<ul>
<li><b>AI Document Search:</b> PDF → chunk → embedding → pgvector → RAG → LLM. Làm project này trước, nó phủ Phase 4, 8, 11 cùng lúc.</li>
<li><b>AI Backend Agent:</b> user → agent → tool (database, search, internal API, notification). Phủ phần tool calling và bảo mật.</li>
<li><b>AI Code Assistant:</b> git repo → chunk code → embedding → vector DB → RAG. Cùng kiến trúc project 1 nhưng dữ liệu khó hơn (chunk theo hàm/class, không theo đoạn văn).</li>
</ul>
Điều quan trọng: <b>ghi lại số liệu</b> — recall@5 bao nhiêu, p95 latency bao nhiêu, tốn bao nhiêu tiền mỗi câu hỏi. Kể được số là khác biệt lớn nhất so với ứng viên chỉ "đã thử RAG".</div>
</section>

<h2 class="dom">Phase 12 — AI trong Interview</h2>

<section id="p12-1">
<h3>12.1 "RAG và Fine-tuning khác nhau thế nào?"<a class="anch" href="#p12-1">#</a></h3>
<pre><code>RAG          → cung cấp KIẾN THỨC lúc inference (đưa tài liệu vào prompt)
Fine-tuning  → thay đổi HÀNH VI của model (cập nhật trọng số)</code></pre>
<table>
<thead><tr><th></th><th>RAG</th><th>Fine-tuning</th></tr></thead>
<tbody>
<tr><td>Thay đổi cái gì</td><td>Ngữ cảnh đưa vào, model không đổi</td><td>Trọng số model</td></tr>
<tr><td>Cập nhật kiến thức</td><td>Ghi tài liệu mới là xong, tức thời</td><td>Phải huấn luyện lại</td></tr>
<tr><td>Chi phí ban đầu</td><td>Thấp — dựng pipeline</td><td>Cao — cần dữ liệu có nhãn và huấn luyện</td></tr>
<tr><td>Chi phí mỗi request</td><td>Cao hơn (prompt dài hơn)</td><td>Thấp hơn (prompt ngắn)</td></tr>
<tr><td>Trích dẫn nguồn</td><td><b>Có</b> — kiểm tra được</td><td>Không</td></tr>
<tr><td>Phân quyền dữ liệu</td><td>Lọc theo user lúc truy vấn</td><td>Không làm được — kiến thức đã nằm trong trọng số</td></tr>
<tr><td>Giỏi việc</td><td>Trả lời <b>dựa trên</b> dữ liệu riêng, hay thay đổi</td><td>Giọng điệu, định dạng, tác vụ hẹp lặp lại nhiều</td></tr>
</tbody></table>
<div class="tip"><b>Trả lời mẫu:</b> "Hai thứ giải hai bài khác nhau nên thường <b>dùng cả hai</b>: RAG cho <i>biết gì</i>, fine-tuning cho <i>nói thế nào</i>. Mặc định tôi bắt đầu bằng prompt tốt + RAG, vì kiến thức nội bộ thay đổi hàng tuần và tôi cần trích dẫn nguồn cùng phân quyền theo user — hai thứ fine-tuning không cho tôi. Tôi chỉ xét fine-tuning khi prompt đã tối ưu mà vẫn không đạt định dạng/giọng điệu yêu cầu, hoặc khi cần cắt chi phí ở một tác vụ hẹp có lượng gọi rất lớn."</div>
<p class="src"><b>Tham khảo:</b> so sánh RAG và fine-tuning theo <a href="https://github.com/aishwaryanr/awesome-generative-ai-guide/blob/main/interview_prep/60_gen_ai_questions.md" target="_blank" rel="noopener">awesome-generative-ai-guide — 60 câu hỏi GenAI</a> và <a href="https://github.com/KalyanKS-NLP/LLM-Interview-Questions-and-Answers-Hub" target="_blank" rel="noopener">KalyanKS-NLP/LLM-Interview-Questions-and-Answers-Hub</a> — đây là câu số một trong hầu hết bộ câu hỏi phỏng vấn LLM</p>
<div class="warn"><b>Đừng nói "fine-tuning để model học dữ liệu công ty".</b> Đây là câu trả lời sai kinh điển và người phỏng vấn biết AI sẽ nhận ra ngay: fine-tuning dạy <i>hành vi</i>, không phải cách nhồi kiến thức tra cứu được.</div>
</section>

<section id="p12-2">
<h3>12.2 "Làm sao giảm hallucination?"<a class="anch" href="#p12-2">#</a></h3>
<p>Trả lời theo <b>bốn tầng</b>, đừng liệt kê lộn xộn:</p>
<table>
<thead><tr><th>Tầng</th><th>Biện pháp</th></tr></thead>
<tbody>
<tr><td><b>1. Cấp dữ liệu đúng</b></td><td>RAG · retrieval tốt hơn (hybrid + rerank) · chỉ đưa vào tài liệu thật sự liên quan</td></tr>
<tr><td><b>2. Ràng buộc output</b></td><td>Structured output với <code>enum</code> · tool calling thay vì để model tự nghĩ ra dữ liệu · <code>temperature = 0</code></td></tr>
<tr><td><b>3. Kiểm chứng sau khi sinh</b></td><td>Validate ở backend (id có tồn tại? có thuộc user này?) · <b>bắt buộc trích dẫn</b> và kiểm tra citation có thật trong nguồn · dùng một lượt LLM kiểm tra tính trung thực với nguồn</td></tr>
<tr><td><b>4. Thiết kế lối ra</b></td><td>Cho phép và <b>khuyến khích</b> nói "tôi không biết" · ngưỡng similarity, dưới ngưỡng thì không trả lời · chuyển người thật · hiện nguồn cho người dùng tự kiểm tra</td></tr>
</tbody></table>
<p class="src"><b>Tham khảo:</b> <a href="https://github.com/NirDiamant/RAG_Techniques" target="_blank" rel="noopener">NirDiamant/RAG_Techniques</a> cho nhóm biện pháp ở tầng 1–2 · <a href="https://genai.owasp.org/llm-top-10/" target="_blank" rel="noopener">OWASP Top 10 for LLM</a> (mục <i>Misinformation</i>) cho tầng 3–4</p>
<div class="tip"><b>Hai câu chốt ăn điểm:</b> "Hallucination không diệt được hoàn toàn vì nó là hệ quả của cách model hoạt động — nên tôi thiết kế để <b>phát hiện và chặn hậu quả</b> chứ không giả định model luôn đúng." Và: "Nguyên tắc của tôi là <b>LLM không bao giờ là nguồn sự thật</b> — mọi dữ kiện phải truy được về database hoặc tài liệu."</div>
</section>

<section id="p12-3">
<h3>12.3 "Làm sao giảm chi phí AI?"<a class="anch" href="#p12-3">#</a></h3>
<table>
<thead><tr><th>Cách</th><th>Mức tiết kiệm</th><th>Lưu ý</th></tr></thead>
<tbody>
<tr><td><b>Model routing</b> — model nhỏ cho việc dễ, model lớn cho việc khó</td><td>Rất lớn (5–20×)</td><td>Cần bộ phân loại độ khó; đo chất lượng từng nhánh</td></tr>
<tr><td><b>Cache</b> — exact-match, semantic, prompt cache của provider</td><td>Lớn nếu truy vấn lặp lại</td><td>Semantic cache đặt ngưỡng cao, không thì trả lời sai câu</td></tr>
<tr><td><b>Giảm context</b> — ít chunk hơn nhưng đúng hơn (nhờ rerank)</td><td>Lớn</td><td>Thường <b>tăng</b> chất lượng, không phải đánh đổi</td></tr>
<tr><td><b>Tối ưu prompt</b> — bỏ phần thừa, đưa phần tĩnh lên đầu</td><td>Trung bình</td><td>Cần đo lại chất lượng sau khi cắt</td></tr>
<tr><td><b>Giới hạn <code>max_tokens</code></b></td><td>Trung bình</td><td>Output tính tiền đắt hơn input</td></tr>
<tr><td><b>Batch API</b> cho việc không cần ngay</td><td>~50%</td><td>Chậm hàng giờ — chỉ cho ingest/backfill</td></tr>
<tr><td><b>Bỏ LLM ở chỗ không cần</b></td><td>Rất lớn</td><td>Phân loại đơn giản, trích xuất theo regex, tìm kiếm thuần — nhiều tính năng không cần LLM</td></tr>
</tbody></table>
<p class="src"><b>Tham khảo:</b> bậc giá giữa các model và giá Batch API nên đối chiếu trực tiếp bảng giá của provider (<a href="https://www.anthropic.com/pricing" target="_blank" rel="noopener">Anthropic</a> · <a href="https://openai.com/api/pricing/" target="_blank" rel="noopener">OpenAI</a>) vì con số thay đổi liên tục · prompt caching theo <a href="https://docs.claude.com/en/docs/build-with-claude/prompt-caching" target="_blank" rel="noopener">Anthropic — Prompt caching</a></p>
<div class="tip"><b>Trả lời mẫu:</b> "Trước hết tôi <b>đo</b>: token và tiền theo feature và theo tenant — hầu như luôn có một hai chỗ chiếm phần lớn hoá đơn. Rồi tôi đi theo thứ tự: bỏ LLM ở chỗ không cần nó → cache → giảm context bằng rerank → model routing → cuối cùng là batch cho phần offline. Tôi đặt hạn mức chi phí theo tenant ở LLM Gateway để một khách không làm vỡ dự toán."</div>
</section>

<section id="p12-4">
<h3>12.4 "AI API quá chậm, làm gì?"<a class="anch" href="#p12-4">#</a></h3>
<p>Phân biệt <b>latency cảm nhận</b> và <b>latency thật</b> — hai nhóm giải pháp khác nhau:</p>
<table>
<thead><tr><th>Giảm latency <i>cảm nhận</i></th><th>Giảm latency <i>thật</i></th></tr></thead>
<tbody>
<tr><td><b>Streaming</b> — hiện token đầu ngay (TTFT là chỉ số quan trọng nhất)</td><td><b>Model nhỏ hơn</b> / model routing</td></tr>
<tr><td>Trả kết quả từng phần: hiện danh sách nguồn trước, phần tóm tắt sau</td><td><b>Giảm output token</b> — output tuần tự nên đây là đòn mạnh nhất</td></tr>
<tr><td>Trạng thái rõ ràng ("đang tìm tài liệu…") thay vì spinner trống</td><td><b>Cache</b> — kết quả có sẵn là 0 ms</td></tr>
<tr><td><b>Async</b>: trả <code>202</code> + job id, thông báo khi xong (việc dài)</td><td><b>Gọi tool song song</b> khi độc lập; gộp nhiều bước thành một lời gọi</td></tr>
<tr><td>Optimistic UI, prefetch câu hỏi hay gặp</td><td>Giảm prompt (prefill tỷ lệ với độ dài input)</td></tr>
</tbody></table>
<ul>
<li><b>Đo trước khi sửa:</b> chia thời gian ra embedding / vector search / rerank / LLM prefill / LLM decode. Rất thường thì thủ phạm là rerank hoặc số bước agent, không phải bản thân LLM.</li>
<li><b>Không dùng LLM đồng bộ trong web request</b> nếu có thể — đó là quyết định kiến trúc quan trọng nhất về latency.</li>
</ul>
<p class="src"><b>Tham khảo:</b> hai pha prefill/decode (lý do output dài đắt hơn input dài) theo <a href="https://docs.vllm.ai/en/latest/" target="_blank" rel="noopener">vLLM documentation</a> · streaming theo <a href="https://docs.claude.com/en/docs/build-with-claude/streaming" target="_blank" rel="noopener">Anthropic — Streaming Messages</a></p>
</section>

<section id="p12-5">
<h3>12.5 "Làm sao bảo mật AI Agent?" — prompt injection<a class="anch" href="#p12-5">#</a></h3>
<pre><code>Chuỗi tin cậy đúng:

LLM  ─(chỉ ĐỀ NGHỊ)─►  Tool layer
                          ↓  Authorization  (theo user thật, không theo prompt)
                          ↓  Validation     (schema + ràng buộc nghiệp vụ)
                       Backend
                          ↓
                       Database

LLM KHÔNG BAO GIỜ được nối trực tiếp tới Database.</code></pre>
<table>
<thead><tr><th>Rủi ro</th><th>Phòng thế nào</th></tr></thead>
<tbody>
<tr><td><b>Prompt injection trực tiếp</b> — người dùng gõ "bỏ qua mọi chỉ dẫn trước"</td><td>Đặc quyền không nằm trong prompt · phân định dữ liệu bằng thẻ · kiểm tra output trước khi hành động</td></tr>
<tr><td><b>Indirect injection</b> — chỉ thị ẩn trong tài liệu RAG, email, trang web mà agent đọc</td><td><b>Đây là rủi ro lớn nhất và khó nhất.</b> Coi mọi nội dung lấy về là dữ liệu không tin cậy; không cho nội dung đó kích hoạt tool ghi; tách phiên có quyền cao khỏi phiên đọc dữ liệu ngoài</td></tr>
<tr><td><b>Rò rỉ dữ liệu</b> — agent trả lời kèm dữ liệu của tenant khác</td><td>Filter quyền nằm <b>trong truy vấn</b> vector/DB, không lọc sau · kiểm tra output không chứa dữ liệu ngoài phạm vi user</td></tr>
<tr><td><b>Tool quá quyền</b></td><td>Tool hẹp theo nghiệp vụ, không có <code>run_sql</code>/<code>http_request</code> · least privilege · tool ghi rủi ro cao cần người xác nhận</td></tr>
<tr><td><b>Rò rỉ system prompt</b></td><td>Giả định nó sẽ bị lộ — <b>không đặt secret hay quy tắc bảo mật vào prompt</b></td></tr>
<tr><td><b>Lạm dụng / cạn ngân sách</b></td><td>Rate limit và hạn mức token theo user; alert khi tăng bất thường</td></tr>
<tr><td><b>Xử lý output không an toàn</b></td><td>Output của LLM đi vào HTML/SQL/shell phải escape như <b>mọi</b> input người dùng khác</td></tr>
</tbody></table>
<p class="src"><b>Nguồn:</b> thuật ngữ <i>prompt injection</i> và phân biệt direct/indirect theo <a href="https://simonwillison.net/series/prompt-injection/" target="_blank" rel="noopener">loạt bài của Simon Willison</a> · danh mục rủi ro và biện pháp theo <a href="https://genai.owasp.org/llm-top-10/" target="_blank" rel="noopener">OWASP Top 10 for LLM Applications</a> (bản 2025 gồm các mục liên quan trực tiếp: <i>LLM01 Prompt Injection</i>, <i>LLM05 Improper Output Handling</i>, <i>LLM06 Excessive Agency</i>, <i>LLM07 System Prompt Leakage</i>, <i>LLM08 Vector and Embedding Weaknesses</i> — tên và số thứ tự <b>đã đổi</b> so với bản 2023, nên khi trả lời hãy nói tên chứ đừng nói số)</p>
<div class="tip"><b>Một câu để nhớ và để trả lời:</b> "Tôi coi LLM như một <b>người dùng bên ngoài không đáng tin, nhưng nói rất thuyết phục</b>. Nó được đề nghị, còn quyền quyết định nằm ở tầng authorization của backend — đúng như tôi làm với bất kỳ client nào." Tham chiếu chuẩn: <b>OWASP Top 10 for LLM Applications</b>.</div>
</section>

<section id="p12-6">
<h3>12.6 Đánh giá và giám sát hệ AI trong production<a class="anch" href="#p12-6">#</a></h3>
<ul>
<li><b>Vì sao đây là câu hỏi hay:</b> hệ AI có thể "chạy đúng" theo mọi metric hạ tầng (200 OK, latency ổn) mà <b>chất lượng đã tệ đi</b> vì provider đổi model, tài liệu thay đổi, hoặc người dùng hỏi kiểu khác.</li>
<li><b>Phải ghi lại cho mỗi lời gọi:</b> phiên bản prompt · model và phiên bản model · các chunk đã lấy (id, điểm) · token vào/ra và chi phí · độ trễ từng chặng · tool nào được gọi và kết quả · phản hồi người dùng. Có bộ này thì mọi câu hỏi sau này đều trả lời được.</li>
<li><b>Alert đáng đặt:</b> tỷ lệ "không tìm thấy tài liệu" tăng · tỷ lệ output không đúng schema tăng · tỷ lệ 👎 tăng · chi phí mỗi request tăng · tỷ lệ fallback provider tăng · độ dài output đột ngột đổi (dấu hiệu provider đổi model ngầm).</li>
<li><b>Pin phiên bản model</b> khi provider cho phép, và chạy lại bộ eval khi buộc phải nâng cấp. "Model tự thay đổi dưới chân mình" là rủi ro vận hành đặc thù của AI mà ít ứng viên nhắc tới.</li>
<li><b>Quyền riêng tư trong log:</b> prompt thường chứa dữ liệu người dùng — phải lọc PII, đặt thời hạn lưu, và giới hạn ai xem được.</li>
</ul>
<p class="src"><b>Tham khảo:</b> danh sách thứ cần ghi log và alert cho hệ AI đối chiếu <a href="https://langfuse.com/docs" target="_blank" rel="noopener">Langfuse docs</a> và <a href="https://github.com/Arize-ai/phoenix" target="_blank" rel="noopener">Arize Phoenix</a></p>
<div class="repo"><b>Repo &amp; tài liệu cho Phase 12:</b>
<ul>
<li><a href="https://github.com/OWASP/www-project-top-10-for-large-language-model-applications" target="_blank" rel="noopener">OWASP Top 10 for LLM Applications</a> — <b>đọc bắt buộc</b> cho mục 12.5; nhắc được tên tài liệu này trong phỏng vấn là điểm cộng rõ ràng.</li>
<li><a href="https://github.com/langfuse/langfuse" target="_blank" rel="noopener">langfuse/langfuse</a> — tracing, đánh giá, quản lý phiên bản prompt; đọc tài liệu để biết production cần ghi những gì.</li>
<li><a href="https://github.com/Arize-ai/phoenix" target="_blank" rel="noopener">Arize-ai/phoenix</a> — observability và eval cho ứng dụng LLM.</li>
<li><a href="https://github.com/ray-project/llm-numbers" target="_blank" rel="noopener">ray-project/llm-numbers</a> — con số để nói về chi phí và latency cho có căn cứ.</li>
<li><a href="https://www.anthropic.com/engineering" target="_blank" rel="noopener">Anthropic Engineering blog</a> — bài về contextual retrieval, xây agent, viết tool cho agent.</li>
</ul></div>
</section>

<h2 class="dom">Phase 13 — Mock Interview</h2>

<section id="p13-1">
<h3>13.1 Cấu trúc một buổi phỏng vấn backend và cách dẫn dắt<a class="anch" href="#p13-1">#</a></h3>
<table>
<thead><tr><th>Vòng</th><th>Người phỏng vấn thật sự chấm gì</th></tr></thead>
<tbody>
<tr><td>Coding / DSA</td><td>Bạn có làm rõ bài toán trước khi code không · nói ra hướng nghĩ · nêu complexity · tự tìm test case biên</td></tr>
<tr><td>Backend / ngôn ngữ</td><td>Hiểu tới tầng nào · có kinh nghiệm gỡ lỗi thật · biết giới hạn của công cụ mình dùng</td></tr>
<tr><td>Database</td><td>Đọc được execution plan · nhận ra N+1 · biết index không phải liều thuốc chung</td></tr>
<tr><td>System design</td><td>Đặt câu hỏi làm rõ · ước lượng · <b>nói đánh đổi</b> · biết chỗ nào sẽ vỡ trước</td></tr>
<tr><td>Behavioral</td><td>Kể được sự cố thật, việc <i>bạn</i> làm, và điều đã thay đổi sau đó</td></tr>
</tbody></table>
<ul>
<li><b>Nói to suy nghĩ.</b> Im lặng 3 phút rồi cho đáp án đúng vẫn bị chấm thấp hơn vừa nghĩ vừa nói. Người phỏng vấn cần thấy <i>quá trình</i>.</li>
<li><b>Không biết thì nói không biết</b> — rồi nói thêm điều gần nhất bạn biết và cách bạn sẽ tìm hiểu. Đoán bừa với giọng chắc chắn là điểm trừ nặng nhất.</li>
<li><b>Chuẩn bị sẵn 3 câu hỏi cho họ</b>: hệ thống hiện tại đang gặp vấn đề gì lớn nhất · đội đo chất lượng và sự cố như thế nào · lộ trình 6 tháng tới. Câu hỏi tốt cũng là một phần bài thi.</li>
</ul>
<p class="src"><b>Tham khảo:</b> cấu trúc các vòng và điều được chấm ở từng vòng theo <a href="https://www.techinterviewhandbook.org/" target="_blank" rel="noopener">tech-interview-handbook</a> · bộ câu hỏi <b>để hỏi lại người phỏng vấn</b> lấy từ <a href="https://github.com/viraptor/reverse-interview" target="_blank" rel="noopener">viraptor/reverse-interview</a></p>
</section>

<section id="p13-2">
<h3>13.2 Nói về đánh đổi — kỹ năng được chấm cao nhất<a class="anch" href="#p13-2">#</a></h3>
<p>Mọi câu trả lời hay đều có dạng: <b>"Tôi chọn X thay vì Y, vì yêu cầu Z; cái giá phải trả là W, và tôi xử lý W bằng V."</b></p>
<table>
<thead><tr><th>Câu hỏi</th><th>Trả lời yếu</th><th>Trả lời mạnh</th></tr></thead>
<tbody>
<tr><td>SQL hay NoSQL?</td><td>"NoSQL scale tốt hơn"</td><td>"Postgres, vì cần transaction và join. Khi ghi vượt một máy tôi partition rồi mới shard theo tenant."</td></tr>
<tr><td>Có nên cache?</td><td>"Có, cache cho nhanh"</td><td>"Có, cache-aside TTL 60 s cho endpoint đọc nhiều. Giá phải trả là dữ liệu cũ tới 60 s — chấp nhận được cho danh mục, không chấp nhận cho số dư."</td></tr>
<tr><td>Dùng RAG hay fine-tune?</td><td>"Fine-tune cho model học dữ liệu công ty"</td><td>"RAG, vì tài liệu đổi hàng tuần, cần trích dẫn nguồn và phân quyền theo user. Giá phải trả là prompt dài và tốn hơn, tôi bù bằng rerank để giảm số chunk."</td></tr>
<tr><td>Microservices?</td><td>"Có, dễ scale"</td><td>"Chưa. Modular monolith trước; tôi tách service khi có nhu cầu scale hoặc biên team rõ ràng."</td></tr>
</tbody></table>
<div class="tip"><b>Khi bị hỏi dồn "còn cách nào tốt hơn không?"</b> — đó thường <b>không</b> phải là bạn sai. Người phỏng vấn đang kiểm tra bạn có bảo vệ được lựa chọn của mình bằng lý lẽ, hay đổi ý ngay khi bị đẩy. Hãy nêu lại yêu cầu chi phối quyết định, và nói rõ điều kiện nào sẽ khiến bạn chọn khác.</div>
</section>

<section id="p13-3">
<h3>13.3 Câu hỏi hành vi — kể chuyện có số<a class="anch" href="#p13-3">#</a></h3>
<ul>
<li><b>Khung STAR:</b> Situation (ngắn) → Task (bạn chịu trách nhiệm gì) → Action (bạn <i>đã làm</i> gì, dùng "tôi" chứ không "chúng tôi") → Result (<b>có số</b>).</li>
<li><b>Chuẩn bị trước 5 câu chuyện</b> dùng lại được cho hầu hết câu hỏi: một sự cố production bạn xử lý · một lần tối ưu hiệu năng có số đo · một lần bất đồng kỹ thuật với đồng nghiệp · một lần bạn làm sai và học được gì · một việc bạn tự đề xuất và làm tới cùng.</li>
<li><b>Có số là bắt buộc:</b> "p95 từ 3,2 s xuống 400 ms", "giảm 60% chi phí LLM", "sự cố phát hiện trong 2 phút thay vì 40 phút". Không có số thì câu chuyện chỉ là cảm nhận.</li>
<li><b>Nói về sai sót một cách bình thường:</b> nêu sai, nêu tác động, nêu điều đã đổi (thêm alert, thêm test, đổi quy trình deploy). Người phỏng vấn tìm khả năng học, không tìm người chưa bao giờ sai.</li>
</ul>
<p class="src"><b>Tham khảo:</b> khung STAR và cách chuẩn bị câu chuyện hành vi theo <a href="https://www.techinterviewhandbook.org/behavioral-interview/" target="_blank" rel="noopener">tech-interview-handbook — Behavioral interview</a> · câu hỏi mở về backend theo <a href="https://github.com/arialdomartini/Back-End-Developer-Interview-Questions" target="_blank" rel="noopener">arialdomartini/Back-End-Developer-Interview-Questions</a></p>
</section>

<section id="p13-4">
<h3>13.4 Bài mock: "Design an AI-powered customer support system"<a class="anch" href="#p13-4">#</a></h3>
<p>Đây là bài gom cả roadmap. Đi đúng chuỗi này, mỗi chặng nói 1–3 câu, tổng 40–45 phút:</p>
<pre><code>Requirement → API → Architecture → Database → Cache → Queue
    → RAG → LLM → Agent → Security → Scaling → Monitoring → Cost</code></pre>
<table>
<thead><tr><th>Chặng</th><th>Nội dung phải nói</th></tr></thead>
<tbody>
<tr><td><b>Requirement</b></td><td>Ai dùng (khách hàng cuối / nhân viên CSKH)? Kênh nào (chat/email)? Đa ngôn ngữ? Được phép <b>hành động</b> (hoàn tiền) hay chỉ trả lời? Bao nhiêu hội thoại/ngày? Mục tiêu là gì — giảm thời gian chờ hay giảm số ticket?</td></tr>
<tr><td><b>API</b></td><td><code>POST /conversations</code> · <code>POST /conversations/:id/messages</code> (SSE stream) · <code>POST /documents</code> (ingest, bất đồng bộ) · webhook cho kênh ngoài</td></tr>
<tr><td><b>Architecture</b></td><td>API chính (Rails) · Conversation Service · <b>AI Service</b> (RAG + Agent) · <b>LLM Gateway</b> · worker pool · vector store. Tách AI Service vì đặc tính vận hành khác hẳn</td></tr>
<tr><td><b>Database</b></td><td>Postgres: <code>conversations</code>, <code>messages</code>, <code>documents</code>, <code>doc_chunks</code> (pgvector) kèm <code>tenant_id</code> + ACL, <code>tool_calls</code> (audit), <code>llm_usage</code> (chi phí). Index: <code>(conversation_id, created_at)</code>, HNSW trên embedding</td></tr>
<tr><td><b>Cache</b></td><td>Câu hỏi hay gặp (exact + semantic có ngưỡng cao) · prompt cache của provider bằng cách đặt phần tĩnh lên đầu · cache kết quả retrieval theo (query, tenant)</td></tr>
<tr><td><b>Queue</b></td><td>Ingest tài liệu và embedding chạy nền · trả lời cho kênh email chạy nền · hàng đợi <b>ưu tiên</b>: chat tương tác trước job batch · autoscale theo queue depth</td></tr>
<tr><td><b>RAG</b></td><td>Chunk theo cấu trúc 300–800 token · hybrid search + filter <code>tenant_id</code>/ACL <b>trong truy vấn</b> · rerank top 50 → 5 · bắt buộc trích dẫn · không đủ tin thì trả lời "không biết"</td></tr>
<tr><td><b>LLM</b></td><td>Streaming SSE · <code>temperature 0</code> · structured output cho phân loại ý định · model routing: model nhỏ cho phân loại, model lớn cho câu trả lời · fallback provider</td></tr>
<tr><td><b>Agent</b></td><td>Tool hẹp: <code>get_order</code>, <code>get_invoice</code>, <code>create_ticket</code>, <code>request_refund</code> (cần người xác nhận). Trần 8 bước, trần token. Log đủ trace</td></tr>
<tr><td><b>Security</b></td><td>Tool chạy theo quyền của user đang chat · validate tham số · coi tài liệu và tin nhắn là <b>dữ liệu không tin cậy</b> (indirect prompt injection) · escape output · không đặt secret trong prompt · lọc PII trong log</td></tr>
<tr><td><b>Scaling</b></td><td>API stateless scale ngang · worker theo queue depth · rate limit tập trung theo token ở gateway · vector store: index HNSW, phân vùng theo tenant nếu rất lớn · least-connections cho endpoint AI</td></tr>
<tr><td><b>Monitoring</b></td><td>TTFT, p95 từng chặng · tỷ lệ containment và chuyển người · tỷ lệ 👎 · tỷ lệ không tìm thấy tài liệu · tỷ lệ tool lỗi · eval hồi quy trong CI khi đổi prompt/model</td></tr>
<tr><td><b>Cost</b></td><td>Đếm token theo tenant và theo feature · hạn mức ngày · cache · rerank để giảm số chunk · batch cho ingest · ước lượng: X đồng mỗi hội thoại × Y hội thoại/tháng</td></tr>
</tbody></table>
<p class="src"><b>Tham khảo:</b> chuỗi Requirement → … → Cost dựng theo khung của <a href="https://github.com/donnemartin/system-design-primer#how-to-approach-a-system-design-interview-question" target="_blank" rel="noopener">system-design-primer</a>, chèn thêm các chặng RAG / LLM / Agent / Security theo <a href="https://github.com/aishwaryanr/awesome-generative-ai-guide/tree/main/interview_prep" target="_blank" rel="noopener">awesome-generative-ai-guide — interview_prep</a> và <a href="https://github.com/khangich/machine-learning-interview/blob/master/design.md" target="_blank" rel="noopener">khangich/machine-learning-interview — ML system design</a></p>
<div class="tip"><b>Nếu chỉ còn 5 phút mà chưa xong:</b> nói thẳng "tôi sẽ tóm ba rủi ro lớn nhất và cách xử lý" — thường là (1) chất lượng retrieval, (2) prompt injection qua tài liệu, (3) chi phí ngoài dự toán. Chốt gọn luôn tốt hơn kể dở dang.</div>
</section>

<section id="p13-5">
<h3>13.5 Danh sách repo &amp; tài liệu — tổng hợp<a class="anch" href="#p13-5">#</a></h3>
<p>Tài liệu này <b>ghi nguồn tại chỗ</b>: mục nào có nội dung lấy từ một bài viết, bài báo hay repo cụ thể thì cuối mục có dòng <i>Nguồn</i> (khi lấy trực tiếp một luận điểm, một con số hay một thuật ngữ) hoặc <i>Tham khảo</i> (khi mục đó dựng theo cách trình bày của nguồn). Danh sách dưới đây là bản gom lại theo nhóm.</p>
<div class="repo"><b>Ngân hàng câu hỏi phỏng vấn — dùng để tự kiểm tra sau khi học</b>
<ul>
<li><a href="https://github.com/DopplerHQ/awesome-interview-questions" target="_blank" rel="noopener">DopplerHQ/awesome-interview-questions</a> — danh sách <i>của các danh sách</i> câu hỏi phỏng vấn, chia theo ngôn ngữ và chủ đề. Vào đây trước khi đi tìm lẻ.</li>
<li><a href="https://github.com/arialdomartini/Back-End-Developer-Interview-Questions" target="_blank" rel="noopener">arialdomartini/Back-End-Developer-Interview-Questions</a> — câu hỏi backend <b>dạng mở</b>, cố ý không kèm đáp án vì mục đích là mở ra cuộc trao đổi. Đây là bộ sát nhất với vòng backend thật.</li>
<li><a href="https://github.com/tamhoang1412/backend-swe-interview-questions" target="_blank" rel="noopener">tamhoang1412/backend-swe-interview-questions</a> — câu hỏi backend kèm đáp án, gom theo chủ đề.</li>
<li><a href="https://github.com/kdn251/interviews" target="_blank" rel="noopener">kdn251/interviews</a> — DSA và câu hỏi thuật toán, kèm bảng độ phức tạp.</li>
<li><a href="https://github.com/bregman-arie/devops-exercises" target="_blank" rel="noopener">bregman-arie/devops-exercises</a> — hàng nghìn câu hỏi DevOps, Linux, SQL, network kèm đáp án, đúng định dạng hỏi–đáp.</li>
<li><a href="https://github.com/viraptor/reverse-interview" target="_blank" rel="noopener">viraptor/reverse-interview</a> — câu hỏi <b>để bạn hỏi lại</b> người phỏng vấn. Dùng cho mục 13.1; câu hỏi tốt cũng là một phần bài thi.</li>
</ul></div>
<div class="repo"><b>Ngân hàng câu hỏi AI / LLM — cho Phase 10–12</b>
<ul>
<li><a href="https://github.com/aishwaryanr/awesome-generative-ai-guide/tree/main/interview_prep" target="_blank" rel="noopener">aishwaryanr/awesome-generative-ai-guide → interview_prep</a> — <b>ưu tiên số một</b> trong nhóm này: có lộ trình theo vai trò và bộ <a href="https://github.com/aishwaryanr/awesome-generative-ai-guide/blob/main/interview_prep/60_gen_ai_questions.md" target="_blank" rel="noopener">60 câu hỏi GenAI hay gặp</a> kèm đáp án, phủ RAG, agent, eval, prompt injection.</li>
<li><a href="https://github.com/KalyanKS-NLP/LLM-Interview-Questions-and-Answers-Hub" target="_blank" rel="noopener">KalyanKS-NLP/LLM-Interview-Questions-and-Answers-Hub</a> — 100+ câu hỏi LLM kèm đáp án.</li>
<li><a href="https://github.com/Devinterview-io/llms-interview-questions" target="_blank" rel="noopener">Devinterview-io/llms-interview-questions</a> — bộ câu hỏi LLM chia theo mức độ.</li>
<li><a href="https://github.com/sreekanth-madisetty/Awesome-LLM-Interview-Questions" target="_blank" rel="noopener">sreekanth-madisetty/Awesome-LLM-Interview-Questions</a> — thêm một bộ nữa để đối chiếu cách trả lời.</li>
<li><a href="https://github.com/khangich/machine-learning-interview" target="_blank" rel="noopener">khangich/machine-learning-interview</a> — ML system design interview; phần <a href="https://github.com/khangich/machine-learning-interview/blob/master/design.md" target="_blank" rel="noopener">design.md</a> hữu ích cho các bài thiết kế có thành phần AI.</li>
<li><a href="https://github.com/alexeygrigorev/data-science-interviews" target="_blank" rel="noopener">alexeygrigorev/data-science-interviews</a> — câu hỏi lý thuyết ML; với backend chỉ cần đọc phần khái niệm.</li>
</ul>
<div class="warn" style="margin-top:10px"><b>Lưu ý khi dùng nhóm này:</b> phần lớn được viết cho vị trí <b>ML/AI Engineer</b>, nên có nhiều câu về training, kiến trúc model và toán mà vị trí backend không cần. Lọc theo đúng phạm vi Phase 10–12 của tài liệu này: inference, token, context, RAG, tool calling, eval, cost, bảo mật.</div></div>
<div class="repo"><b>Nền tảng &amp; DSA</b>
<ul>
<li><a href="https://github.com/yangshun/tech-interview-handbook" target="_blank" rel="noopener">yangshun/tech-interview-handbook</a> — bắt đầu từ đây nếu thời gian ít.</li>
<li><a href="https://github.com/labuladong/fucking-algorithm" target="_blank" rel="noopener">labuladong/fucking-algorithm</a> — học DSA theo mẫu giải.</li>
<li><a href="https://github.com/jwasham/coding-interview-university" target="_blank" rel="noopener">jwasham/coding-interview-university</a> — checklist CS đầy đủ.</li>
<li><a href="https://github.com/donnemartin/interactive-coding-challenges" target="_blank" rel="noopener">donnemartin/interactive-coding-challenges</a> — bài tập có test.</li>
<li><a href="https://github.com/mtdvio/every-programmer-should-know" target="_blank" rel="noopener">mtdvio/every-programmer-should-know</a> — kiến thức nền tảng.</li>
</ul></div>
<div class="repo"><b>Thiết kế &amp; kiến trúc</b>
<ul>
<li><a href="https://github.com/donnemartin/system-design-primer" target="_blank" rel="noopener">donnemartin/system-design-primer</a> — nền tảng bắt buộc.</li>
<li><a href="https://github.com/ashishps1/awesome-system-design-resources" target="_blank" rel="noopener">ashishps1/awesome-system-design-resources</a> — danh sách duy trì tốt nhất hiện nay.</li>
<li><a href="https://github.com/ByteByteGoHq/system-design-101" target="_blank" rel="noopener">ByteByteGoHq/system-design-101</a> — sơ đồ ôn nhanh.</li>
<li><a href="https://github.com/karanpratapsingh/system-design" target="_blank" rel="noopener">karanpratapsingh/system-design</a> — đọc như một quyển sách.</li>
<li><a href="https://github.com/binhnguyennus/awesome-scalability" target="_blank" rel="noopener">binhnguyennus/awesome-scalability</a> — case study thật của các công ty.</li>
<li><a href="https://github.com/ashishps1/awesome-low-level-design" target="_blank" rel="noopener">ashishps1/awesome-low-level-design</a> — vòng thiết kế class/OOD.</li>
<li><a href="https://github.com/DovAmir/awesome-design-patterns" target="_blank" rel="noopener">DovAmir/awesome-design-patterns</a> — pattern theo ngôn ngữ và kiến trúc.</li>
<li><a href="https://github.com/theanalyst/awesome-distributed-systems" target="_blank" rel="noopener">theanalyst/awesome-distributed-systems</a> · <a href="https://github.com/ept/ddia-references" target="_blank" rel="noopener">ept/ddia-references</a> — phần phân tán.</li>
</ul></div>
<div class="repo"><b>Database &amp; DevOps</b>
<ul>
<li><a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener">pgvector/pgvector</a> — vector trong Postgres.</li>
<li><a href="https://use-the-index-luke.com/" target="_blank" rel="noopener">use-the-index-luke.com</a> — index và execution plan.</li>
<li><a href="https://github.com/bregman-arie/devops-exercises" target="_blank" rel="noopener">bregman-arie/devops-exercises</a> — hỏi đáp DevOps/SQL/Linux.</li>
<li><a href="https://github.com/kelseyhightower/kubernetes-the-hard-way" target="_blank" rel="noopener">kelseyhightower/kubernetes-the-hard-way</a> — hiểu K8s từ gốc.</li>
<li><a href="https://github.com/kamranahmedse/developer-roadmap" target="_blank" rel="noopener">kamranahmedse/developer-roadmap</a> — đối chiếu xem còn thiếu mảng nào.</li>
<li><a href="https://sre.google/books/" target="_blank" rel="noopener">Google SRE Books</a> — SLO, alerting, postmortem.</li>
</ul></div>
<div class="repo"><b>AI cho backend (Phase 10–12)</b>
<ul>
<li><a href="https://github.com/NirDiamant/RAG_Techniques" target="_blank" rel="noopener">NirDiamant/RAG_Techniques</a> — <b>ưu tiên cao nhất</b> trong nhóm AI.</li>
<li><a href="https://github.com/NirDiamant/GenAI_Agents" target="_blank" rel="noopener">NirDiamant/GenAI_Agents</a> — mẫu agent.</li>
<li><a href="https://github.com/microsoft/generative-ai-for-beginners" target="_blank" rel="noopener">microsoft/generative-ai-for-beginners</a> — nền tảng AI đúng mức cho backend.</li>
<li><a href="https://github.com/anthropics/courses" target="_blank" rel="noopener">anthropics/courses</a> · <a href="https://github.com/openai/openai-cookbook" target="_blank" rel="noopener">openai/openai-cookbook</a> — prompt, tool use, structured output.</li>
<li><a href="https://github.com/modelcontextprotocol/servers" target="_blank" rel="noopener">modelcontextprotocol/servers</a> — MCP tham chiếu.</li>
<li><a href="https://github.com/Shubhamsaboo/awesome-llm-apps" target="_blank" rel="noopener">Shubhamsaboo/awesome-llm-apps</a> — app mẫu để mượn cấu trúc.</li>
<li><a href="https://github.com/langfuse/langfuse" target="_blank" rel="noopener">langfuse/langfuse</a> · <a href="https://github.com/Arize-ai/phoenix" target="_blank" rel="noopener">Arize-ai/phoenix</a> — tracing và eval.</li>
<li><a href="https://github.com/OWASP/www-project-top-10-for-large-language-model-applications" target="_blank" rel="noopener">OWASP Top 10 for LLM Apps</a> — bảo mật AI, đọc bắt buộc.</li>
<li><a href="https://github.com/ray-project/llm-numbers" target="_blank" rel="noopener">ray-project/llm-numbers</a> — con số về token, latency, chi phí.</li>
<li><a href="https://github.com/mlabonne/llm-course" target="_blank" rel="noopener">mlabonne/llm-course</a> — chỉ nhánh "LLM Engineer".</li>
<li><a href="https://github.com/qdrant/qdrant" target="_blank" rel="noopener">qdrant/qdrant</a> · <a href="https://github.com/facebookresearch/faiss" target="_blank" rel="noopener">facebookresearch/faiss</a> — bên trong vector search.</li>
</ul></div>
<div class="tip"><b>Cách dùng danh sách này:</b> đừng đọc hết. Với mỗi phase chọn <b>một</b> repo làm nguồn chính, đọc mục lục để biết mình còn thiếu gì, rồi quay lại đây làm câu hỏi. Nhóm <b>ngân hàng câu hỏi</b> ở đầu mục này dùng theo chiều ngược lại: học xong một phase thì mở bộ câu hỏi tương ứng ra và tự trả lời thành tiếng, chỗ nào tắc thì quay về đúng mục trong tài liệu. Kiến thức chỉ vào đầu khi bạn phải <i>nói lại</i> nó — tỷ lệ hợp lý là 30% đọc, 70% làm bài và tự trả lời.</div>
</section>
`,b=n({__name:"InterviewNotesPage",setup(o){return(r,a)=>(h(),e(t,{certId:"interview",html:i(c),title:"Phỏng vấn Backend + AI",subtitle:"91 mục — 13 phase, AI cài vào từng phase",practiceRoute:"/interview/practice",practiceLabel:"Luyện phỏng vấn"},null,8,["html"]))}});export{b as default};
