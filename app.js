/* ==========================================================================
   Enes Aytekin — Portfolio Interactive Behavior & TR/EN Localization
   All default Turkish HTML is pre-rendered statically in index.html.
   ========================================================================== */

(function () {
  "use strict";

  const TRANSLATIONS = {
    tr: {
      __title: "Enes Aytekin — Data & Analytics Engineering • Backend Development",
      __description:
        "Enes Aytekin — Yazılım Mühendisliği 4. Sınıf Öğrencisi. Ölçeklenebilir veri boru hatları (ETL/ELT), yıldız şema (Star Schema) veri ambarı modelleme, dbt, Dagster, PostgreSQL ve asenkron FastAPI REST API mimarileri.",
      "a11y.skip": "İçeriğe geç",
      "nav.approach": "Yaklaşımım",
      "nav.projects": "Projeler",
      "nav.skills": "Yetkinlikler",
      "nav.contact": "Eğitim & İletişim",

      "hero.badge": "Yazılım Mühendisliği 4. Sınıf Öğrencisi",
      "hero.role":
        'Yazılım Mühendisliği 4. Sınıf Öğrencisi <span class="role-sep" aria-hidden="true">|</span> Data &amp; Analytics Engineering • Backend Development',
      "hero.summary":
        "Ölçeklenebilir veri boru hatları (ETL/ELT), yıldız şema (Star Schema) veri ambarı modelleme ve asenkron REST API mimarileri geliştirmeye odaklanan yazılım mühendisliği son sınıf öğrencisi.",
      "hero.cta.projects": "Projeleri İncele",
      "hero.cta.contact": "İletişim",
      "hero.dag.title": "architecture.focus // elt & api",
      "hero.dag.s1.k": "Veri Alımı (Ingestion)",
      "hero.dag.s1.v": "Generator akışı • psycopg2 COPY",
      "hero.dag.s2.k": "Veri Ambarı & Dönüşüm",
      "hero.dag.s2.v": "PostgreSQL • dbt Star Schema • SCD Type-2",
      "hero.dag.s3.k": "Orkestrasyon & Konteyner",
      "hero.dag.s3.v": "Dagster Assets • Docker Compose",
      "hero.dag.s4.k": "Asenkron Servis Katmanı",
      "hero.dag.s4.v": "FastAPI • SQLAlchemy Async • Pytest",
      "hero.dag.school": "İstanbul Beykent Üniv.",
      "hero.dag.footer": "GNO 3.32 • 2027",

      "approach.eyebrow": "01 / MÜHENDİSLİK YAKLAŞIMIM",
      "approach.title": "Hakkımda & Çalışma Metodolojim",
      "approach.intro":
        "Yeni bir teknolojiyi öğrenirken doğrudan otomasyona veya yapay zeka araçlarına yaslanmak yerine, önce teorik temelleri ve sistemin sınırlarını bizzat kodlayarak kavramayı tercih ediyorum. Her yeni projemi bir öncekinin üzerine koyarak daha karmaşık veri senaryoları ve uç durumlarla (edge cases) test ediyorum.",
      "approach.flow.1": "Teori & Çekirdek",
      "approach.flow.2": "Ölçek & Edge Case'ler",
      "approach.flow.3": "Kontrollü AI & Sürekli Pratik",
      "approach.p1.title": "Temelden İnşa ve Kademeli Derinleşme",
      "approach.p1.body":
        "Öğrenme sürecinde önce küçük prototiplerle teknolojinin çalışma mantığını ve kısıtlarını elle kodlayarak çözümlüyor, ardından gerçek dünya senaryolarına ve edge case'lere sahip daha kapsamlı mimarilere geçiyorum.",
      "approach.p2.title": "Denetimli AI ve Ajan Kullanımı",
      "approach.p2.body":
        "Temellerine hakim olduğum ve mimari muhakemesine güvendiğim alanlarda; tekrarlı kod blokları, konfigürasyon (YAML vb.) süreçleri veya ana uzmanlığım dışındaki arayüz katmanlarında yapay zeka ajanlarını hızlandırıcı olarak kullanıyor ve ürettikleri çıktıları bizzat denetleyerek sisteme entegre ediyorum.",
      "approach.p3.title": "Sürekli Zanaat ve Pratik",
      "approach.p3.body":
        "Problem çözmekten ve kod yazmaktan keyif aldığım için mühendislik reflekslerimi canlı tutmak adına boş zamanlarımda doğrudan elle kodlama pratikleri yapmaya devam ediyorum.",

      "projects.eyebrow": "02 / SEÇİLMİŞ PROJELER",
      "projects.title": "Veri Boru Hatları & Backend Sistemleri",
      "projects.subtitle":
        "Her proje gerçek GitHub deposundaki mimari kararlar, katmanlı klasör yapısı ve veri kalitesi pratikleri temel alınarak özetlenmiştir. Diyagramları büyütmek için görsellere tıklayabilirsiniz.",
      "projects.zoom": "Büyüt",
      "projects.arch.toggle": "Mimari & Klasör Yapısı",
      "projects.repo.view": "GitHub",
      "projects.repo.profile": "GitHub Profili",

      "p1.title": "All-In-One Hugging Face Data Pipeline",
      "p1.summary":
        "Verilen parametreye (<code>LIMIT</code>) göre minimum 1 kayıttan başlayıp Hugging Face Hub üzerindeki tüm model kataloğuna kadar dinamik ölçeklenebilen uçtan uca konteynerize ELT veri boru hattı ve asenkron REST API servisi. Generator tabanlı akışla 100 MB altında sabit bellek ayak iziyle veri çeker, binary <code>COPY</code> ile PostgreSQL'e yükler, dbt ile SCD Type-2 ve yıldız şema katmanlarına dönüştürür ve Dagster ile orkestre eder.",
      "p1.h1":
        "<strong>Dinamik &amp; Bellek Dostu Alım:</strong> Generator akışı ve hafif <code>expand</code> alanlarıyla tek geçişte CSV akışı, ardından <code>psycopg2 COPY</code> ile <code>raw.models_raw</code> katmanına yüksek hızlı aktarım.",
      "p1.h2":
        "<strong>Katmanlı dbt Veri Ambarı:</strong> Timestamp tabanlı SCD Type-2 snapshot, <code>stg_models</code>, unnested bridge tabloları, <code>dim_author_v1</code>, artımlı <code>fct_model_metrics_v1</code> ve 4 analitik mart.",
      "p1.h3":
        "<strong>Dagster &amp; Asenkron FastAPI:</strong> Python ingestion + dbt modellerini tek DAG'da birleştiren Software-Defined Assets, haftalık zamanlama, dbt YAML'dan dinamik tablo sürüm keşfi ve SlowAPI rate-limiting.",
      "p1.h4":
        "<strong>Çok Servisli Docker Topolojisi:</strong> <code>hf_postgres_db</code>, <code>hf_dagster_service</code> ve <code>hf_fastapi_service</code> konteynerleri, <code>hf_net</code> ağı, Pytest asenkron testleri ve <code>DECISIONS.md</code> ADR dokümantasyonu.",

      "p2.title": "Steam Games dbt Data Warehouse Pipeline",
      "p2.summary":
        "95.000'den fazla Steam oyun kaydını Dockerize PostgreSQL ortamında işleyen; SCD Type-2 snapshot takibi, 6 intermediate dönüşüm modeli, surrogate key tabanlı yıldız şema ve 70'ten fazla otomatik veri kalitesi testi içeren analitik mühendisliği projesi.",
      "p2.h1":
        "<strong>SCD Type-2 &amp; Staging Katmanı:</strong> Ham veri (<code>steam.steam_march2025</code>) önce <code>scd_march2025</code> snapshot'ından geçirilerek geçmiş değişiklikler korunur, ardından <code>src_2025</code> ile standardize edilir.",
      "p2.h2":
        "<strong>Yıldız Şema (5 Dimension + 1 Incremental Fact):</strong> <code>dim_date</code>, <code>dim_game</code>, <code>dim_media</code>, <code>dim_metadata</code>, <code>dim_platform</code> tabloları ve surrogate key'lerle bağlanan artımlı <code>fct_game_metrics</code>.",
      "p2.h3":
        "<strong>70+ Otomatik Veri Kalitesi Testi:</strong> Şema/referans bütünlüğü testlerinin yanında özel jenerik <code>positive_values.sql</code> testi ve etkileşimli <code>dbt docs</code> lineage grafiği.",
      "p2.h4":
        "<strong>Konteynerize Kurulum:</strong> <code>Dockerfile</code>, <code>compose.yml</code> ve <code>entry_point.sh</code> ile izole ortamda tekrarlanabilir veri ambarı derlemesi.",

      "p3.title": "Request Management System (Async FastAPI)",
      "p3.summary":
        "Modern asenkron backend pratikleriyle geliştirilmiş; Pydantic v2 veri doğrulama, JWT kimlik doğrulama, yapılandırılmış hata yönetimi, Alembic şema geçişleri ve otomatik OpenAPI 3.1 dokümantasyonuna sahip üretim odaklı REST API servisi.",
      "p3.h1":
        "<strong>Tam Asenkron ORM Altyapısı:</strong> Python 3.12, FastAPI ve SQLAlchemy Async Session + <code>asyncpg</code> bağlantı havuzu ile bloklamayan (non-blocking) PostgreSQL sorguları.",
      "p3.h2":
        "<strong>Modüler Router &amp; Test Kapsamı:</strong> <code>auth</code>, <code>request</code>, <code>model</code> ve <code>user</code> router'larına ayrılmış uçlar ve her modül için ayrı Pytest test paketleri.",
      "p3.h3":
        "<strong>Optimize Docker İmajı (~77 MB):</strong> <code>python:3.12-slim</code> tabanı, BuildKit pip cache mount (<code>--mount=type=cache</code>) ve sıkı <code>.dockerignore</code> izolasyonu.",
      "p3.h4":
        "<strong>Zero-Leak Yapılandırma &amp; Migration:</strong> Gizli anahtarlar imaja gömülmeden çalışma zamanında <code>.env</code> üzerinden enjekte edilir; Neon ve lokal PostgreSQL için Alembic migration desteği sunar.",

      "p4.title": "MyDataS — Veri Analizi ve Görselleştirme Aracı",
      "p4.summary":
        "CSV ve Excel veri setlerini temizleme, gelişmiş eksik veri (NaN) yönetimi, istatistiksel özet çıkarma ve dinamik grafik üretme süreçlerini tek bir masaüstü iş akışında otomatize eden veri analizi aracı.",
      "p4.h1":
        "<strong>Veri Analizi Motoru (<code>dataset_analyzing.py</code>):</strong> Sütun ve tablo bazlı istatistiksel özetler, kategorik/sayısal mod analizi, NaN sayımı ve değere göre filtreleme.",
      "p4.h2":
        "<strong>Veri Temizleme &amp; Refactoring (<code>dataset_refactoring.py</code>):</strong> Eşik (threshold) tabanlı satır/sütun silme, sabit değerle veya düşürerek NaN yönetimi, sütun yeniden adlandırma, duplicate temizleme ve geri alma (Undo).",
      "p4.h3":
        "<strong>Dinamik Görselleştirme (<code>dataset_visualizing.py</code>):</strong> Kategorik toplam/ortalama/standart sapma bar grafikleri, dağılım histogramları, <code>hue</code> destekli scatter ve pasta grafikleri.",
      "p4.transparency.label": "Şeffaflık Notu",
      "p4.transparency.text":
        "Veri işleme, temizleme ve görselleştirme motoru (<code>Pandas</code>, <code>NumPy</code>, <code>Matplotlib</code>, <code>Seaborn</code>) doğrudan tarafımdan geliştirilmiş; <code>PyQt6</code> masaüstü arayüz katmanı ise yapay zeka desteğiyle oluşturularak çekirdek mantığa entegre edilmiştir.",

      "p5.badge.status": "Planlama Aşaması",
      "p5.badge.capstone": "Bitirme Projesi",
      "p5.title": "configML — Şema Eşleştirme Tabanlı Veri Ambarı ve ML Boru Hattı",
      "p5.summary":
        "4. sınıf yazılım mühendisliği bitirme projesi olarak mimari planlama ve tasarım aşamasında olan uçtan uca veri &amp; ML platformu. Farklı kolon yapılarına sahip kullanıcı veri setlerinin hedef şemalara eşleştirilmesini (schema mapping), isteğe bağlı yıldız şema tasarımını, <code>dbt</code> dönüşümlerini, <code>Dagster</code> orkestrasyonunu ve yapılandırılabilir makine öğrenmesi eğitimini tek bir modüler yapıda birleştirmeyi hedefler.",
      "p5.h1":
        "<strong>Dinamik Şema Eşleştirme (Schema Mapping):</strong> Farklı kolon adları ve tiplerine sahip ham veri setlerini hedef veritabanı şemalarına esnek biçimde eşleyip PostgreSQL'e aktarma.",
      "p5.h2":
        "<strong>Kullanıcı Tanımlı Veri Ambarı:</strong> Kullanıcıların kendi boyutsal modelleme (Star Schema — Dimension &amp; Fact) mimarilerini yapılandırabilmesi.",
      "p5.h3":
        "<strong>Otomatik Dönüşüm &amp; Orkestrasyon:</strong> <code>dbt</code> ile otomatik veri dönüşümü/doğrulaması ve <code>Dagster</code> ile uçtan uca bağımlılık yönetimi.",
      "p5.h4":
        "<strong>Yapılandırılabilir ML Katmanı:</strong> Modellenmiş veri ambarı tabloları üzerinden <code>Scikit-learn</code> tabanlı tekrarlanabilir model eğitimi ve değerlendirme akışları.",
      "p5.tag.planning": "Mimari Planlama",

      "skills.eyebrow": "03 / TEKNİK YETKİNLİKLER",
      "skills.title": "Teknoloji Yığını ve Kullanım Bağlamı",
      "skills.subtitle":
        "Her teknolojinin yanında mevcut deneyim bağlamım ve bu seviyeyi neden seçtiğimi özetleyen kısa açıklamam yer almaktadır.",
      "skills.cat1.title": "Data Engineering & Veritabanı",
      "skills.cat2.title": "Backend & Yazılım Geliştirme",
      "skills.cat3.title": "Araçlar, Konteyner & İşletim Sistemi",
      "skills.cat4.title": "Veri Analizi, İş Zekası & Arayüz",

      "level.core": "Ana Odak",
      "level.active": "Aktif Kullanım",
      "level.exploring": "Deneme Aşaması",
      "level.learning": "Öğrenme Aşaması",
      "level.ai": "AI Destekli Kullanım",

      "skill.pg.desc":
        "Büyük ölçekli tablolarda CTE, Window Functions, indeksleme ve yıldız şema veri modellemesinde aktif olarak kullandım.",
      "skill.dbt.desc":
        "Veri ambarı projelerinde artımlı modeller, SCD Type-2 snapshot'ları ve otomatik veri kalitesi testleri kurguladım.",
      "skill.dagster.desc":
        "Veri alımı ve dbt dönüşüm adımlarını bağımlılıklarına göre otomatize edip orkestre etmek için projelerimde kullandım.",
      "skill.airflow.desc":
        "DAG mimarisini ve iş akışı zamanlama mantığını kavramak üzere lokal ortamda denemeler ve küçük alıştırmalar yapıyorum.",
      "skill.python.desc":
        "Veri işleme boru hatları, ETL scriptleri, veri analizi araçları ve backend servisleri geliştirirken birincil dilim olarak kullanıyorum.",
      "skill.fastapi.desc":
        "Asenkron REST API uçları, Pydantic veri doğrulama ve rate-limiting mimarileri kurgulamak için projelerimde kullandım.",
      "skill.sqlalchemy.desc":
        "Veritabanı bağlantıları, ORM sorguları ve backend uçlarının birim/entegrasyon testlerini yazarken kullandım.",
      "skill.docker.desc":
        "Veritabanı, orkestrasyon ve API servislerini izole konteynerlerde çok servisli mimariler halinde ayağa kaldırmak için kullanıyorum.",
      "skill.git.desc":
        "Tüm projelerimde versiyon kontrolü, dal (branch) yönetimi ve düzenli dokümantasyon takibi için aktif kullanıyorum.",
      "skill.linux.desc":
        "Günlük geliştirme ortamı olarak Arch Linux kullanıyor, otomasyon ve sistem yönetimi için temel Bash scriptleri yazıyorum.",
      "skill.pandas.desc":
        "Veri setlerinin temizlenmesi, dönüştürülmesi ve istatistiksel ön işleme adımlarında düzenli olarak kullandım.",
      "skill.matplotlib.desc":
        "Keşifsel veri analizi (EDA) süreçlerinde dağılım ve korelasyon grafiklerini otomatikleştirmek için kullandım.",
      "skill.powerbi.desc":
        "Veri ambarında modellediğim tabloları görsel raporlara dönüştürmek amacıyla veri modelleme ve DAX temellerini öğreniyorum.",
      "skill.excel.desc":
        "Veri analizi temellerini pekiştirmek için formüller, pivot tablolar ve veri temizleme pratikleri üzerine çalışıyorum.",
      "skill.pyqt.desc":
        "Kütüphaneye doğrudan hakimiyetim bulunmamakla birlikte, masaüstü veri analizi projemde arayüz katmanını yapay zeka yardımıyla oluşturup arka plan mantığına entegre ettim.",

      "bottom.eyebrow": "04 / AKADEMİK GEÇMİŞ & İLETİŞİM",
      "bottom.title": "Eğitim ve İletişim Kanalları",
      "edu.label": "AKADEMİK GEÇMİŞ",
      "edu.school": "İstanbul Beykent Üniversitesi",
      "edu.degree": "Yazılım Mühendisliği (Lisans — 4. Sınıf)",
      "edu.grad.label": "Beklenen Mezuniyet",
      "edu.gpa.label": "GNO",
      "edu.note":
        "Veritabanı sistemleri, veri modelleme ve backend yazılım mimarileri üzerine yoğunlaşıyor; 4. sınıf bitirme projem olan configML ile dinamik şema eşleştirme ve veri ambarı tabanlı ML boru hattı tasarlıyorum.",

      "contact.label": "İLETİŞİM",
      "contact.heading": "Birlikte Çalışmak veya Tanışmak İçin",
      "contact.note":
        "Data Engineering, Analytics Engineering ve Backend Development staj/çalışma fırsatları veya teknik projeler üzerine konuşmak için aşağıdaki kanallardan doğrudan ulaşabilirsiniz.",
      "contact.phone.label": "Telefon",
      "contact.copy": "Kopyala",
      "contact.copied": "Kopyalandı",

      "footer.rights": "Data & Analytics Engineering • Backend Development",
      "footer.top": "Yukarı ↑",
      "theme.toLight": "Açık temaya geç",
      "theme.toDark": "Koyu temaya geç",
      "lightbox.close": "Kapat",
    },

    en: {
      __title: "Enes Aytekin — Data & Analytics Engineering • Backend Development",
      __description:
        "Enes Aytekin — 4th-Year Software Engineering Student specializing in scalable ETL/ELT data pipelines, Star Schema data warehousing, dbt, Dagster, PostgreSQL, and asynchronous FastAPI REST APIs.",
      "a11y.skip": "Skip to content",
      "nav.approach": "Approach",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.contact": "Education & Contact",

      "hero.badge": "4th-Year Software Engineering Student",
      "hero.role":
        '4th-Year Software Engineering Student <span class="role-sep" aria-hidden="true">|</span> Data &amp; Analytics Engineering • Backend Development',
      "hero.summary":
        "Senior software engineering student focused on building scalable ETL/ELT data pipelines, Star Schema data warehouse models, and asynchronous REST API architectures.",
      "hero.cta.projects": "Explore Projects",
      "hero.cta.contact": "Contact",
      "hero.dag.title": "architecture.focus // elt & api",
      "hero.dag.s1.k": "Data Ingestion",
      "hero.dag.s1.v": "Streaming generators • psycopg2 COPY",
      "hero.dag.s2.k": "Warehouse & Modeling",
      "hero.dag.s2.v": "PostgreSQL • dbt Star Schema • SCD Type-2",
      "hero.dag.s3.k": "Orchestration & Containers",
      "hero.dag.s3.v": "Dagster Assets • Docker Compose",
      "hero.dag.s4.k": "Async Serving Layer",
      "hero.dag.s4.v": "FastAPI • SQLAlchemy Async • Pytest",
      "hero.dag.school": "Istanbul Beykent Univ.",
      "hero.dag.footer": "GPA 3.32 • 2027",

      "approach.eyebrow": "01 / ENGINEERING APPROACH",
      "approach.title": "About Me & Engineering Methodology",
      "approach.intro":
        "When learning a new technology, instead of relying immediately on automation or AI tools, I prefer to grasp the theoretical foundations and system boundaries by coding them myself first. Each project builds on the last, challenging my designs with more complex data scenarios and edge cases.",
      "approach.flow.1": "Theory & Core",
      "approach.flow.2": "Scale & Edge Cases",
      "approach.flow.3": "Supervised AI & Craft",
      "approach.p1.title": "First-Principles Building & Progressive Depth",
      "approach.p1.body":
        "During learning, I first build small hand-coded prototypes to uncover how a technology behaves and where its constraints lie, then scale up into broader architectures with realistic data volumes and edge cases.",
      "approach.p2.title": "Supervised AI & Agent Usage",
      "approach.p2.body":
        "In domains where I already own the fundamentals and trust my architectural judgment, I use AI agents as accelerators for boilerplate, configuration (such as YAML), or UI layers outside my core specialization—personally reviewing and validating every output before integrating it.",
      "approach.p3.title": "Continuous Craft & Deliberate Practice",
      "approach.p3.body":
        "Because I genuinely enjoy solving problems and writing code, I continue doing hands-on manual coding practice in my spare time to keep my engineering instincts sharp.",

      "projects.eyebrow": "02 / SELECTED PROJECTS",
      "projects.title": "Data Pipelines & Backend Systems",
      "projects.subtitle":
        "Each project summary reflects the real repository architecture, folder layout, and data quality practices documented on GitHub. Click any diagram or screenshot to inspect it in full resolution.",
      "projects.zoom": "Expand",
      "projects.arch.toggle": "Architecture & Directory Structure",
      "projects.repo.view": "GitHub",
      "projects.repo.profile": "GitHub Profile",

      "p1.title": "All-In-One Hugging Face Data Pipeline",
      "p1.summary":
        "End-to-end containerized ELT data pipeline and async REST API that scales dynamically from a single record up to the entire Hugging Face Hub model catalog via a configurable <code>LIMIT</code> parameter. Streams metadata with a flat &lt; 100 MB RAM footprint, loads into PostgreSQL via binary <code>COPY</code>, transforms into SCD Type-2 and Star Schema marts with dbt, and orchestrates execution with Dagster.",
      "p1.h1":
        "<strong>Dynamic Low-Memory Ingestion:</strong> Generator-based streaming with lightweight <code>expand</code> fields writing CSV in a single pass, followed by high-throughput <code>psycopg2 COPY</code> into <code>raw.models_raw</code>.",
      "p1.h2":
        "<strong>Layered dbt Data Warehouse:</strong> Timestamp-based SCD Type-2 snapshot, <code>stg_models</code>, unnested bridge tables, <code>dim_author_v1</code>, incremental <code>fct_model_metrics_v1</code>, and 4 analytical marts.",
      "p1.h3":
        "<strong>Dagster &amp; Async FastAPI:</strong> Software-Defined Assets unifying Python ingestion and dbt compilation in one DAG, weekly schedules, dynamic dbt YAML table-version resolution, and SlowAPI rate limiting.",
      "p1.h4":
        "<strong>Multi-Service Docker Topology:</strong> Isolated <code>hf_postgres_db</code>, <code>hf_dagster_service</code>, and <code>hf_fastapi_service</code> containers over <code>hf_net</code>, async Pytest suite, and <code>DECISIONS.md</code> ADRs.",

      "p2.title": "Steam Games dbt Data Warehouse Pipeline",
      "p2.summary":
        "Analytics engineering project processing 95,000+ Steam game records inside Dockerized PostgreSQL—featuring SCD Type-2 snapshotting, 6 intermediate models, a surrogate-key Star Schema with an incremental fact table, and 70+ automated data quality tests.",
      "p2.h1":
        "<strong>SCD Type-2 &amp; Staging Layer:</strong> Raw records (<code>steam.steam_march2025</code>) pass through <code>scd_march2025</code> to track historical state changes before standardization in <code>src_2025</code>.",
      "p2.h2":
        "<strong>Star Schema (5 Dimensions + 1 Incremental Fact):</strong> <code>dim_date</code>, <code>dim_game</code>, <code>dim_media</code>, <code>dim_metadata</code>, and <code>dim_platform</code> joined via surrogate keys to incremental <code>fct_game_metrics</code>.",
      "p2.h3":
        "<strong>70+ Automated Data Quality Tests:</strong> Built-in schema/referential checks paired with a custom generic <code>positive_values.sql</code> test and interactive <code>dbt docs</code> lineage graph.",
      "p2.h4":
        "<strong>Containerized Execution:</strong> Reproducible warehouse builds via <code>Dockerfile</code>, <code>compose.yml</code>, and <code>entry_point.sh</code>.",

      "p3.title": "Request Management System (Async FastAPI)",
      "p3.summary":
        "Production-oriented REST API built with modern asynchronous Python practices—featuring Pydantic v2 validation, JWT authentication, structured error handling, Alembic schema migrations, and automated OpenAPI 3.1 documentation.",
      "p3.h1":
        "<strong>Fully Async ORM Stack:</strong> Python 3.12, FastAPI, and SQLAlchemy Async Session with <code>asyncpg</code> connection pooling for non-blocking PostgreSQL queries.",
      "p3.h2":
        "<strong>Modular Routers &amp; Test Coverage:</strong> Cleanly separated <code>auth</code>, <code>request</code>, <code>model</code>, and <code>user</code> routers backed by dedicated Pytest test suites per module.",
      "p3.h3":
        "<strong>Optimized Docker Image (~77 MB):</strong> Built on <code>python:3.12-slim</code> with BuildKit pip cache mounts (<code>--mount=type=cache</code>) and strict <code>.dockerignore</code> context isolation.",
      "p3.h4":
        "<strong>Zero-Leak Config &amp; Migrations:</strong> Runtime <code>.env</code> secret injection keeping container layers stateless, plus Alembic migrations compatible with local and Neon PostgreSQL.",

      "p4.title": "MyDataS — Data Analysis & Visualization Tool",
      "p4.summary":
        "Desktop data engineering utility automating CSV and Excel dataset cleaning, advanced missing-value (NaN) handling, statistical summaries, and dynamic visual charting within a single workflow.",
      "p4.h1":
        "<strong>Analysis Engine (<code>dataset_analyzing.py</code>):</strong> Column and table-level statistical summaries, categorical/numerical mode analysis, NaN tracking, and value-based filtering.",
      "p4.h2":
        "<strong>Cleaning &amp; Refactoring (<code>dataset_refactoring.py</code>):</strong> Threshold-based row/column removal, constant or drop NaN strategies, column renaming, deduplication, and Undo support.",
      "p4.h3":
        "<strong>Dynamic Plotting (<code>dataset_visualizing.py</code>):</strong> Categorical sum/mean/std bar charts, distribution histograms, multi-dimensional scatter plots with <code>hue</code>, and pie charts.",
      "p4.transparency.label": "Transparency Note",
      "p4.transparency.text":
        "The core data processing, cleaning, and visualization engine (<code>Pandas</code>, <code>NumPy</code>, <code>Matplotlib</code>, <code>Seaborn</code>) was written directly by me; the <code>PyQt6</code> desktop interface layer was built with AI assistance and integrated onto the core engine.",

      "p5.badge.status": "Planning Phase",
      "p5.badge.capstone": "Capstone Project",
      "p5.title": "configML — Schema-Mapped Data Warehouse & ML Pipeline",
      "p5.summary":
        "4th-year software engineering capstone project currently in architectural planning and design. Aims to unify schema mapping for heterogeneous user datasets into target databases, optional user-defined Star Schema modeling, automated <code>dbt</code> transformations, <code>Dagster</code> orchestration, and configurable machine learning model training.",
      "p5.h1":
        "<strong>Dynamic Schema Mapping:</strong> Flexible mapping of raw user datasets with varying column structures into target PostgreSQL schemas.",
      "p5.h2":
        "<strong>User-Configurable Data Warehouse:</strong> Allows users to define custom dimensional modeling (Star Schema — Dimension &amp; Fact) architectures.",
      "p5.h3":
        "<strong>Automated Transforms &amp; Orchestration:</strong> Automated <code>dbt</code> transformations/testing orchestrated end-to-end with <code>Dagster</code>.",
      "p5.h4":
        "<strong>Configurable ML Layer:</strong> Reproducible <code>Scikit-learn</code> training and evaluation pipelines built directly atop modeled warehouse tables.",
      "p5.tag.planning": "Architecture Planning",

      "skills.eyebrow": "03 / TECHNICAL SKILLS",
      "skills.title": "Tech Stack & Practical Context",
      "skills.subtitle":
        "Each technology includes a candid context badge and a brief one-sentence note explaining how I actually use it.",
      "skills.cat1.title": "Data Engineering & Databases",
      "skills.cat2.title": "Backend & Software Development",
      "skills.cat3.title": "Tools, Containers & Operating System",
      "skills.cat4.title": "Data Analysis, BI & Interface",

      "level.core": "Primary Focus",
      "level.active": "Active Use",
      "level.exploring": "Exploratory",
      "level.learning": "Learning",
      "level.ai": "AI-Assisted Use",

      "skill.pg.desc":
        "Actively used on large tables for CTEs, Window Functions, indexing, and Star Schema dimensional modeling.",
      "skill.dbt.desc":
        "Built incremental fact models, SCD Type-2 snapshots, and automated data quality test suites in warehouse projects.",
      "skill.dagster.desc":
        "Used in projects to automate and orchestrate data ingestion and dbt transformation graphs by dependency.",
      "skill.airflow.desc":
        "Running local experiments and small exercises to learn DAG architecture and workflow scheduling fundamentals.",
      "skill.python.desc":
        "My primary language for building data pipelines, ETL scripts, analysis utilities, and backend services.",
      "skill.fastapi.desc":
        "Used across projects for asynchronous REST endpoints, Pydantic validation, and rate-limiting architectures.",
      "skill.sqlalchemy.desc":
        "Used for database connectivity, ORM querying, and writing unit/integration tests for backend endpoints.",
      "skill.docker.desc":
        "Used to spin up database, orchestration, and API services as isolated multi-container architectures.",
      "skill.git.desc":
        "Actively used across all projects for version control, branch workflows, and structured documentation.",
      "skill.linux.desc":
        "Using Arch Linux as my daily development environment and writing basic Bash scripts for automation and system tasks.",
      "skill.pandas.desc":
        "Regularly used for dataset cleaning, transformation, and statistical preprocessing workflows.",
      "skill.matplotlib.desc":
        "Used to automate distribution and correlation plots during exploratory data analysis (EDA).",
      "skill.powerbi.desc":
        "Learning data modeling and DAX fundamentals to turn warehouse tables into clear visual reports.",
      "skill.excel.desc":
        "Practicing formulas, pivot tables, and data cleaning workflows to reinforce analytical fundamentals.",
      "skill.pyqt.desc":
        "While I do not hold direct mastery of the library, I generated the desktop UI layer for my data analysis tool with AI assistance and integrated it with my core backend logic.",

      "bottom.eyebrow": "04 / ACADEMIC BACKGROUND & CONTACT",
      "bottom.title": "Education & Contact Channels",
      "edu.label": "ACADEMIC BACKGROUND",
      "edu.school": "Istanbul Beykent University",
      "edu.degree": "Software Engineering (B.Sc. — 4th Year)",
      "edu.grad.label": "Expected Graduation",
      "edu.gpa.label": "GPA",
      "edu.note":
        "Focusing on database systems, dimensional data modeling, and backend software architecture—currently designing configML as my senior capstone project.",

      "contact.label": "CONTACT",
      "contact.heading": "Get in Touch",
      "contact.note":
        "Feel free to reach out directly through any of the channels below regarding Data Engineering, Analytics Engineering, or Backend Development opportunities and technical projects.",
      "contact.phone.label": "Phone",
      "contact.copy": "Copy",
      "contact.copied": "Copied",

      "footer.rights": "Data & Analytics Engineering • Backend Development",
      "footer.top": "Top ↑",
      "theme.toLight": "Switch to light theme",
      "theme.toDark": "Switch to dark theme",
      "lightbox.close": "Close",
    },
  };

  let currentLang = "tr";

  function getSavedLang() {
    try {
      const params = new URLSearchParams(window.location.search);
      const q = params.get("lang");
      if (q === "tr" || q === "en") return q;
      const saved = localStorage.getItem("portfolio_lang");
      if (saved === "tr" || saved === "en") return saved;
    } catch (_) {
      /* ignore storage restrictions */
    }
    return "tr";
  }

  function applyLanguage(lang, persist) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.tr;
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
    document.title = dict.__title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict.__description) {
      metaDesc.setAttribute("content", dict.__description);
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        const value = dict[key];
        if (value.includes("<")) {
          el.innerHTML = value;
        } else {
          el.textContent = value;
        }
      }
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    updateThemeToggleLabel();

    const closeBtn = document.getElementById("lightbox-close");
    if (closeBtn) closeBtn.setAttribute("aria-label", dict["lightbox.close"]);

    if (persist) {
      try {
        localStorage.setItem("portfolio_lang", lang);
      } catch (_) {
        /* ignore */
      }
    }
  }

  function updateThemeToggleLabel() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    const isDark = document.documentElement.getAttribute("data-theme") !== "light";
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.tr;
    const label = isDark ? dict["theme.toLight"] : dict["theme.toDark"];
    btn.setAttribute("aria-label", label);
    btn.setAttribute("title", label);
  }

  function initThemeToggle() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const next =
        document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("portfolio_theme", next);
      } catch (_) {
        /* ignore */
      }
      updateThemeToggleLabel();
    });
    updateThemeToggleLabel();
  }

  function initLangSwitch() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (lang && lang !== currentLang) {
          applyLanguage(lang, true);
        }
      });
    });

    const initial = getSavedLang();
    if (initial !== "tr") {
      applyLanguage(initial, false);
    }
  }

  function initMobileNav() {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");
    if (!toggle || !nav) return;

    function closeNav() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", () => {
      const open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
  }

  function initActiveSectionObserver() {
    const links = Array.from(document.querySelectorAll(".main-nav .nav-link"));
    const sections = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    if (!("IntersectionObserver" in window) || !sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = "#" + entry.target.id;
            links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === id));
          }
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0.01 }
    );

    sections.forEach((s) => observer.observe(s));
  }

  function initOptionalProjectImages() {
    document.querySelectorAll('img[data-optional-img="true"]').forEach((img) => {
      const handleLoad = () => {
        if (img.naturalWidth > 0) {
          img.classList.add("is-loaded");
          const placeholder = img.parentElement && img.parentElement.querySelector(".blueprint-placeholder");
          if (placeholder) placeholder.setAttribute("hidden", "");
        }
      };
      const handleError = () => {
        img.setAttribute("hidden", "");
      };

      if (img.complete) {
        if (img.naturalWidth > 0) handleLoad();
        else handleError();
      } else {
        img.addEventListener("load", handleLoad);
        img.addEventListener("error", handleError);
      }
    });
  }

  function initLightbox() {
    const modal = document.getElementById("lightbox");
    const stage = document.getElementById("lightbox-stage");
    const img = document.getElementById("lightbox-img");
    const title = document.getElementById("lightbox-title");
    const closeBtn = document.getElementById("lightbox-close");
    if (!modal || !stage || !img || !title || !closeBtn) return;

    let lastFocused = null;

    function openLightbox(src, heading, bgMode) {
      lastFocused = document.activeElement;
      img.src = src;
      img.alt = heading;
      title.textContent = heading;
      stage.classList.remove("bg-teal", "bg-light");
      if (bgMode === "teal") stage.classList.add("bg-teal");
      if (bgMode === "light") stage.classList.add("bg-light");
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    }

    function closeLightbox() {
      if (modal.hidden) return;
      modal.hidden = true;
      img.src = "";
      document.body.style.overflow = "";
      if (lastFocused && typeof lastFocused.focus === "function") {
        lastFocused.focus();
      }
    }

    document.querySelectorAll(".media-trigger").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const src = trigger.getAttribute("data-lightbox-src");
        const heading = trigger.getAttribute("data-lightbox-title") || "";
        const bgMode = trigger.getAttribute("data-lightbox-bg") || "dark";
        if (src) openLightbox(src, heading, bgMode);
      });
    });

    closeBtn.addEventListener("click", closeLightbox);
    modal.querySelectorAll('[data-lightbox-close="true"]').forEach((el) => {
      el.addEventListener("click", closeLightbox);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
    });
  }

  function initCopyPhone() {
    const btn = document.getElementById("copy-phone-btn");
    if (!btn) return;
    let resetTimer = null;

    btn.addEventListener("click", async () => {
      const value = btn.getAttribute("data-copy") || "+90 530 948 61 20";
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(value);
        } else {
          const temp = document.createElement("textarea");
          temp.value = value;
          temp.style.position = "fixed";
          temp.style.opacity = "0";
          document.body.appendChild(temp);
          temp.select();
          document.execCommand("copy");
          temp.remove();
        }
        const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.tr;
        btn.textContent = dict["contact.copied"];
        btn.classList.add("is-copied");
        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
          btn.textContent = (TRANSLATIONS[currentLang] || TRANSLATIONS.tr)["contact.copy"];
          btn.classList.remove("is-copied");
        }, 1800);
      } catch (_) {
        /* fallback silently */
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initLangSwitch();
    initMobileNav();
    initActiveSectionObserver();
    initOptionalProjectImages();
    initLightbox();
    initCopyPhone();
  });
})();
