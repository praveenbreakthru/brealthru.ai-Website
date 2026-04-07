import { useEffect, useRef, useState } from 'react'

const knowledgeBase = [
  {
    category: 'company',
    keywords: ['who are you', 'what is breakthru', 'about', 'company', 'what do you do', 'tell me about', 'your company', 'breakthru ai', 'breakthru.ai', 'digital fabric'],
    answer: 'We are breakthru.ai — the Digital Fabric. A hybrid of high-end consulting and deep engineering. We Architect, Build, and Run. No slide decks, just shipped code. We help enterprises transform through production-grade engineering.'
  },
  {
    category: 'services',
    keywords: ['services', 'what services', 'offerings', 'capabilities', 'what you offer', 'what do you provide', 'solutions', 'offer', 'capabilities'],
    answer: 'Our services include 6 main areas: 1) Strategy — Digital Transformation & ROI Modeling, 2) Data & AI — Lakehouse & GenAI Agents, 3) Engineering — Platform Engineering & DevSecOps, 4) Growth — Team Augmentation & GCC Build, 5) Product Squads — Dedicated teams & Partner Services, 6) Family Office — Wealth platform modernization.'
  },
  {
    category: 'strategy',
    keywords: ['strategy', 'digital transformation', 'roi modeling', 'digital roadmap', 'technology due diligence', 'architecture assessment', 'cloud migration'],
    answer: 'Our Strategy service helps enterprises with Digital Transformation Strategy, Technology Due Diligence, Architecture Assessment, and Cloud Migration Planning. We dont do 100-page decks — we do blueprints that compile into working software.'
  },
  {
    category: 'data-ai',
    keywords: ['data ai', 'data & ai', 'data and ai', 'lakehouse', 'genai', 'gen ai', 'llm', 'machine learning', 'mlops', 'ml ops', 'analytics', 'bi', 'business intelligence', 'artificial intelligence'],
    answer: 'Data & AI is our practice for building modern data stacks and AI solutions. We offer Data Platform Modernization, GenAI & LLM Implementation, ML Ops & Model Deployment, and Analytics & BI Platforms. We transform data lakes into prediction engines with LLMs that actually work.'
  },
  {
    category: 'engineering',
    keywords: ['engineering', 'platform engineering', 'devsecops', 'sre', 'microservices', 'cloud native', 'api', 'integration', 'cloud infrastructure', 'infrastructure'],
    answer: 'Engineering is our deep engineering practice. We build production-grade AI/ML systems, platform engineering, cloud infrastructure, and high-scale microservices architectures. Our services include Platform Engineering, API & Integration Layer, DevSecOps & SRE, and Cloud Infrastructure.'
  },
  {
    category: 'growth',
    keywords: ['growth', 'team augmentation', 'gcc', 'global capability center', 'captive', 'capability center', 'team', 'engineers', 'staffing', 'resource'],
    answer: 'Our Growth service helps enterprises scale through Team Augmentation and GCC (Global Capability Centers). We provide white-labeled engineering pods that extend your capability overnight. Services include Engineering Team Augmentation, Global Capability Centers, Managed Services, and Technology Partnerships.'
  },
  {
    category: 'product-squads',
    keywords: ['product squads', 'product team', 'dedicated team', 'partner services', 'snowflake', 'databricks', 'google cloud', 'implementation'],
    answer: 'Product Squads provides dedicated teams that operate as your extended product team. As ecosystem partner professionals, we deliver Snowflake Professional Services, Databricks Implementation, and Google Cloud Partner Delivery. We operate as your extended product team with full ownership.'
  },
  {
    category: 'family-office',
    keywords: ['family office', 'wealth', 'portfolio', 'investment', 'governance'],
    answer: 'Family Office service offers Digital modernization for family offices. From legacy systems to unified wealth platforms, we deliver Unified Wealth Platforms, Portfolio Management Systems, Family Governance Portals, and Multi-entity Consolidation.'
  },
  {
    category: 'consulting',
    keywords: ['consulting', 'consulting ai', 'what is consulting', 'advisory'],
    answer: 'ConsultingAI helps enterprises align business ambition with technological direction. We work with CXOs and transformation leaders to architect intelligent strategies that are actionable, scalable, and aligned to real-world outcomes.'
  },
  {
    category: 'ainingineering',
    keywords: ['aingineering', 'engineering', 'what is aingineering'],
    answer: 'AIngineering is our deep engineering practice. We build production-grade AI/ML systems, platform engineering, cloud infrastructure, and high-scale microservices architectures. We operate at the intersection of engineering, operations, and automation.'
  },
  {
    category: 'xperience-ai',
    keywords: ['xperienceai', 'experience', 'xperience', 'customer experience', 'cx', 'personalization', 'recommendation'],
    answer: 'XperienceAI focuses on transforming customer and user experiences through AI-driven personalization, recommendation engines, and intelligent interfaces. We help enterprises craft intelligent, personalized, and measurable digital experiences.'
  },
  {
    category: 'talent-ai',
    keywords: ['talentai', 'talent', 'hiring', 'recruitment', 'workforce', 'staffing', 'ld'],
    answer: 'TalentAI is our AI-powered talent transformation practice. We help organizations build, upskill, and transform their engineering teams with AI capabilities. Services include AI-Augmented Sourcing & L&D, Talent Cloud & On-Demand Models, and Leadership Skilling.'
  },
  {
    category: 'gcc',
    keywords: ['gcc', 'global capability', 'captive', 'capability center', 'global center'],
    answer: 'Our GCC practice helps enterprises set up and scale Global Capability Centers. We offer white-labeled engineering pods that extend your capability overnight. Whether establishing a new GCC or optimizing an existing one, we help you scale with dedicated engineering teams.'
  },
  {
    category: 'industries',
    keywords: ['industries', 'sectors', 'domains', 'verticals', 'what industries', 'which industries'],
    answer: 'We transform 6 industries: 1) BFSI — Banking & Financial Services, 2) Manufacturing & Industry 4.0, 3) Telecommunication, 4) Retail & E-Commerce, 5) Healthcare & Life Sciences, 6) Travel & Hospitality.'
  },
  {
    category: 'fintech',
    keywords: ['fintech', 'banking project', 'neobank project', 'neo bank project', 'digital banking project', 'neo-bank heist'],
    answer: 'This Neo Bank project focuses on transforming traditional banking into a fully digital experience. Instead of slow processes like 3-day account opening, we built a system that enables real-time transactions, faster onboarding, and seamless financial operations.'
  },
  {
    category: 'fintech-problem',
    keywords: ['banking problem', 'finance problem', 'neo bank problem', 'banking solve', 'banking pain', 'banking issue'],
    answer: 'Traditional banks are slow, paper-heavy, and not built for real-time operations. We solved this by redesigning the system to support instant account creation, faster compliance, and real-time money movement.'
  },
  {
    category: 'fintech-different',
    keywords: ['neo bank different', 'bank vs', 'banks versus', 'neo bank vs bank', 'legacy bank'],
    answer: 'Unlike legacy banks, we built a modern system from scratch using real-time architecture. This allows faster transactions, better scalability, and zero fraud losses.'
  },
  {
    category: 'fintech-tech',
    keywords: ['neo bank technology', 'neo bank tech stack', 'banking tools', 'neo bank tools', 'kafka', 'react native', 'spring boot', 'aws lambda'],
    answer: 'We used a modern tech stack including Kafka for real-time data streaming, React Native for mobile apps, Spring Boot for backend services, and AWS Lambda for scalable cloud operations.'
  },
  {
    category: 'fintech-kafka',
    keywords: ['kafka', 'why kafka', 'use kafka', 'kafka purpose'],
    answer: 'Kafka enables real-time event processing, which is critical for financial transactions. It ensures that all transactions are processed instantly and reliably.'
  },
  {
    category: 'fintech-eda',
    keywords: ['event driven', 'event-driven', 'event driven architecture'],
    answer: 'Event-driven architecture allows systems to react instantly to events like transactions or login requests. This helps in achieving real-time updates and faster system performance.'
  },
  {
    category: 'fintech-microfrontend',
    keywords: ['micro frontend', 'micro-frontend', 'microfrontend'],
    answer: 'Micro-frontends help us break the UI into smaller independent parts. This makes development faster, easier to maintain, and allows teams to work independently.'
  },
  {
    category: 'fintech-security',
    keywords: ['neo bank security', 'banking security', 'neo bank biometric', 'bank authentication'],
    answer: 'We implemented biometric authentication, making login secure and user-friendly without compromising safety.'
  },
  {
    category: 'fintech-results',
    keywords: ['neo bank results', 'banking results', 'neo bank achievement', 'banking performance'],
    answer: 'We achieved 2.5x user growth, reduced transaction latency to just 40 milliseconds, and completely eliminated fraud losses in Q4.'
  },
  {
    category: 'fintech-speed',
    keywords: ['neo bank speed', 'transaction speed', 'bank latency', 'banking fast', 'neo bank fast'],
    answer: 'Our system processes transactions in around 40 milliseconds, making it extremely fast compared to traditional banking systems.'
  },
  {
    category: 'fintech-fraud',
    keywords: ['banking fraud', 'neo bank fraud', 'reduce fraud', 'prevent fraud', 'fraud loss'],
    answer: 'Yes, we achieved zero fraud loss in Q4 through strong security systems and real-time monitoring.'
  },
  {
    category: 'fintech-reliability',
    keywords: ['neo bank reliable', 'banking reliable', 'banking uptime', 'neo bank uptime'],
    answer: 'Our engineers actively monitor and fix issues in real-time. Even late-night issues are resolved quickly to ensure uninterrupted service.'
  },
  {
    category: 'fintech-team',
    keywords: ['neo bank team', 'banking team', 'bank team work'],
    answer: 'Our team worked closely with business and risk teams, taking ownership of performance and continuously improving the system.'
  },
  {
    category: 'fintech-risk',
    keywords: ['banking risk', 'financial risk', 'risk team'],
    answer: 'Yes, we collaborated with risk teams to optimize and automate liquidity and fraud models.'
  },
  {
    category: 'fintech-app-fast',
    keywords: ['neo bank app fast', 'bank app speed', 'app fast', 'banking app fast'],
    answer: 'Yes, transactions happen in milliseconds, making it very fast.'
  },
  {
    category: 'fintech-instant-account',
    keywords: ['open account', 'instant account', 'create account', 'account opening'],
    answer: 'Yes, the system is designed for quick and seamless account opening.'
  },
  {
    category: 'fintech-safe',
    keywords: ['neo bank safe', 'banking safe', 'secure banking', 'safe to use'],
    answer: 'Yes, we use biometric authentication and advanced security systems to keep your data safe.'
  },
  {
    category: 'fintech-transaction-fail',
    keywords: ['transaction fail', 'bank fail', 'banking failure', 'transaction failure'],
    answer: 'The system is built for high reliability, so failures are extremely rare.'
  },
  {
    category: 'manufacturing-project',
    keywords: ['manufacturing project', 'factory project', 'smart factory project', 'ghost in the machine'],
    answer: 'This project focuses on transforming traditional factories into smart, connected systems. We enabled machines to collect, analyze, and use data in real time instead of relying on manual monitoring.'
  },
  {
    category: 'manufacturing-problem',
    keywords: ['manufacturing problem', 'factory problem', 'manufacturing solve', 'factory solve', 'manufacturing pain'],
    answer: 'Most factory machines generate data but don\'t use it effectively. Managers rely on guesswork and manual tracking. We solved this by making machines intelligent and connected.'
  },
  {
    category: 'manufacturing-ghosts',
    keywords: ['ghosts in the machine', 'ghost', 'ghost machine', 'hidden data'],
    answer: 'It refers to hidden data inside machines that was previously unused. We captured and utilized that data to improve efficiency and decision-making.'
  },
  {
    category: 'manufacturing-tech',
    keywords: ['manufacturing technology', 'factory technology', 'azure', 'iot', 'tensorflow', 'edge computing', '5g'],
    answer: 'We used Azure IoT for device connectivity, TensorFlow for AI models, Edge Computing for real-time decisions, and 5G for fast communication.'
  },
  {
    category: 'manufacturing-iot',
    keywords: ['iot', 'internet of things', 'sensor', 'iot sensor'],
    answer: 'IoT sensors were installed on machines to monitor things like vibration, temperature, and performance in real time.'
  },
  {
    category: 'manufacturing-digital-twin',
    keywords: ['digital twin', 'digital twin meaning', 'virtual model'],
    answer: 'A Digital Twin is a virtual model of a physical machine. It helps monitor, analyze, and predict machine behavior in real time.'
  },
  {
    category: 'manufacturing-ai',
    keywords: ['manufacturing ai', 'factory ai', 'computer vision', 'edge ai', 'defect detection'],
    answer: 'We used Computer Vision to detect defects in products and Edge AI to make instant decisions directly on machines without waiting for cloud processing.'
  },
  {
    category: 'manufacturing-edge',
    keywords: ['edge computing', 'edge', 'edge processing'],
    answer: 'Edge Computing processes data directly on the machine instead of sending it to the cloud, making decisions faster and reducing delays.'
  },
  {
    category: 'manufacturing-results',
    keywords: ['manufacturing results', 'factory results', 'manufacturing achievement'],
    answer: 'We improved efficiency by 40%, eliminated unplanned downtime, and achieved 100% traceability across operations.'
  },
  {
    category: 'manufacturing-downtime',
    keywords: ['manufacturing downtime', 'factory downtime', 'machine downtime', 'unplanned downtime'],
    answer: 'Yes, we achieved zero unplanned downtime by predicting and preventing failures.'
  },
  {
    category: 'manufacturing-efficiency',
    keywords: ['manufacturing efficiency', 'factory efficiency', 'efficiency improved'],
    answer: 'Factory efficiency increased by 40% using real-time monitoring and automation.'
  },
  {
    category: 'manufacturing-traceability',
    keywords: ['manufacturing traceability', 'factory traceability', 'traceability'],
    answer: 'Traceability means tracking every product and process step, ensuring full visibility from start to finish.'
  },
  {
    category: 'manufacturing-team',
    keywords: ['manufacturing team', 'factory team', 'shop floor', 'machine operators'],
    answer: 'Yes, our team worked directly on the shop floor, wearing safety gear and collaborating with machine operators.'
  },
  {
    category: 'manufacturing-operator',
    keywords: ['operator', 'hmi', 'machine interface', 'operator experience'],
    answer: 'We redesigned the machine interface (HMI) based on operator feedback, making it easier and more user-friendly.'
  },
  {
    category: 'manufacturing-oee',
    keywords: ['oee', 'teep', 'overall equipment effectiveness'],
    answer: 'OEE (Overall Equipment Effectiveness) measures how efficiently machines are used, while TEEP measures total production potential including downtime.'
  },
  {
    category: 'manufacturing-automatic',
    keywords: ['manufacturing automatic', 'factory automatic', 'automated system', 'automate'],
    answer: 'Yes, the system automates monitoring, defect detection, and decision-making in real time.'
  },
  {
    category: 'manufacturing-defects',
    keywords: ['defect', 'detect defects', 'defect detection', 'defect detection'],
    answer: 'Yes, AI-powered computer vision detects defects faster and more accurately than humans.'
  },
  {
    category: 'manufacturing-sudden-stop',
    keywords: ['machine stop', 'sudden stop', 'machine failure', 'unexpected failure'],
    answer: 'No, the system predicts issues early and prevents unexpected machine failures.'
  },
  {
    category: 'manufacturing-tracked',
    keywords: ['everything tracked', 'tracked', 'visibility'],
    answer: 'Yes, the system provides 100% traceability of all operations and products.'
  },
  {
    category: 'telecom-project',
    keywords: ['telecom project', 'telecommunication project', 'network project', 'tower project', 'signal vs noise'],
    answer: 'This project focuses on improving telecom network reliability by predicting failures before they happen instead of fixing issues after downtime occurs.'
  },
  {
    category: 'telecom-problem',
    keywords: ['telecom problem', 'network problem', 'tower problem', 'telecom solve'],
    answer: 'Traditionally, issues were fixed only after customers complained. We changed this by predicting failures early and preventing downtime.'
  },
  {
    category: 'telecom-signal',
    keywords: ['signal vs noise', 'signal noise', 'signal', 'meaning'],
    answer: 'It refers to identifying meaningful data (signal) from large amounts of irrelevant data (noise) to make accurate predictions about network health.'
  },
  {
    category: 'telecom-tech',
    keywords: ['telecom technology', 'network technology', 'python', 'drone', 'lorawan', 'big data'],
    answer: 'We used Python for AI/ML models, Drone APIs for remote inspection, LoRaWAN for long-range communication, and Big Data systems for large-scale data processing.'
  },
  {
    category: 'telecom-trams',
    keywords: ['trams', 'total remote asset management'],
    answer: 'TRAMS (Total Remote Asset Management System) is an AI-powered system that monitors telecom towers and predicts failures before they occur.'
  },
  {
    category: 'telecom-predict',
    keywords: ['predict failure', 'failure prediction', 'predict'],
    answer: 'It analyzes data like weather conditions, power fluctuations, and signal patterns to detect potential issues up to 48 hours in advance.'
  },
  {
    category: 'telecom-drone',
    keywords: ['drone', 'drones', 'use drones'],
    answer: 'Drones are used for quick visual inspections of towers, reducing the need for manual site visits and speeding up issue detection.'
  },
  {
    category: 'telecom-lorawan',
    keywords: ['lorawan', 'lora'],
    answer: 'LoRaWAN enables long-range, low-power communication between devices, making it ideal for monitoring remote telecom towers.'
  },
  {
    category: 'telecom-results',
    keywords: ['telecom results', 'network results', 'telecom achievement'],
    answer: 'We achieved 99.99% network uptime, reduced field visits by 30%, and enabled real-time visibility of all telecom assets.'
  },
  {
    category: 'telecom-downtime',
    keywords: ['telecom downtime', 'network downtime', 'tower downtime'],
    answer: 'Yes, predictive monitoring helped maintain 99.99% uptime, minimizing downtime significantly.'
  },
  {
    category: 'telecom-truck',
    keywords: ['truck roll', 'truck roll reduction', 'field visit', 'technician visit'],
    answer: 'It means fewer physical visits by technicians to towers. We reduced these visits by 30% using remote monitoring and drones.'
  },
  {
    category: 'telecom-realtime',
    keywords: ['telecom real-time', 'network real-time', 'real-time monitoring'],
    answer: 'Yes, the system provides real-time visibility into all network assets and their performance.'
  },
  {
    category: 'telecom-towers',
    keywords: ['towers', 'tower', 'managed towers', 'telecom assets'],
    answer: 'We managed around 40,000 telecom assets remotely using our system.'
  },
  {
    category: 'telecom-team',
    keywords: ['telecom team', 'network team', 'team support'],
    answer: 'No, we acted as the central control system, taking full ownership of network uptime and performance.'
  },
  {
    category: 'telecom-critical',
    keywords: ['critical', 'important', 'essential'],
    answer: 'Very critical. Telecom networks are essential for communication, and even small downtime can cause major losses.'
  },
  {
    category: 'telecom-down',
    keywords: ['network down', 'go down', 'network failure'],
    answer: 'The system predicts and prevents failures early, so downtime is extremely rare.'
  },
  {
    category: 'telecom-detect',
    keywords: ['detect problem', 'detect issue', 'early detection'],
    answer: 'Yes, issues can be predicted up to 48 hours in advance.'
  },
  {
    category: 'telecom-technician',
    keywords: ['technician', 'send technician', 'field visit'],
    answer: 'Yes, but fewer. We reduced manual visits by 30% using remote monitoring and drones.'
  },
  {
    category: 'telecom-monitored',
    keywords: ['monitored live', 'live monitoring', 'everything monitored'],
    answer: 'Yes, all telecom assets are monitored in real time.'
  },
  {
    category: 'labs',
    keywords: ['breakthru labs', 'labs', 'experimental', 'innovation', 'ai products'],
    answer: 'Breakthru Labs is an experimental division where innovative AI-powered products are designed and built to solve real-world business problems.'
  },
  {
    category: 'labs-products',
    keywords: ['labs products', 'what products', 'build products', 'ai products'],
    answer: 'We build advanced AI solutions for business growth, automation, and operations—like sales automation platforms and AI-driven incident management systems.'
  },
  {
    category: 'labs-collaborate',
    keywords: ['collaborate', 'co-create', 'submit idea', 'work with labs'],
    answer: 'Yes, you can submit your idea through the "Co-Create with Labs" section, and our team will help turn it into a real product.'
  },
  {
    category: 'nexus',
    keywords: ['nexus bd', 'nexus', 'business development', 'bd platform'],
    answer: 'Nexus BD is an AI-powered business development platform that automates the entire sales process, from research to personalized outreach.'
  },
  {
    category: 'nexus-sales',
    keywords: ['nexus sales', 'nexus help', 'sales automation', 'help sales'],
    answer: 'It automates prospect research, creates personalized landing pages, and sends tailored email outreach, saving time and improving conversion rates.'
  },
  {
    category: 'nexus-dual-ai',
    keywords: ['dual ai', 'dual ai research', 'research engine'],
    answer: 'It uses two AI systems to gather deeper and more accurate insights about prospects, helping create better outreach strategies.'
  },
  {
    category: 'nexus-personalize',
    keywords: ['nexus personalize', 'personalized email', 'auto email'],
    answer: 'Yes, it generates hyper-personalized emails and landing pages based on the prospect\'s profile.'
  },
  {
    category: 'nexus-sentiment',
    keywords: ['sentiment analysis', 'analyze reply', 'customer reply'],
    answer: 'Yes, it performs sentiment analysis to understand whether responses are positive, negative, or neutral.'
  },
  {
    category: 'nexus-available',
    keywords: ['nexus available', 'nexus access', 'beta'],
    answer: 'Nexus BD is currently in beta access and available for early users.'
  },
  {
    category: 'agent-lenz',
    keywords: ['agent lenz', 'lenz', 'aiops', 'incident management'],
    answer: 'Agent Lenz is an AI-powered AIOps platform that helps monitor systems, manage incidents, and reduce downtime.'
  },
  {
    category: 'lenz-downtime',
    keywords: ['lenz reduce downtime', 'reduce downtime', 'downtime reduction'],
    answer: 'It uses AI to detect issues early, correlate alerts, and automate responses, reducing downtime by up to 60%.'
  },
  {
    category: 'lenz-alert',
    keywords: ['alert correlation', 'intelligent alert', 'correlate alerts'],
    answer: 'It groups related alerts together to identify the root cause quickly instead of showing multiple separate alerts.'
  },
  {
    category: 'lenz-warroom',
    keywords: ['war room', 'automated war room', 'warroom'],
    answer: 'When a critical issue occurs, the system automatically creates a collaboration space for teams to resolve it faster.'
  },
  {
    category: 'lenz-predictive',
    keywords: ['predictive breach', 'breach detection', 'sla prediction'],
    answer: 'It predicts potential SLA or system failures before they happen, allowing teams to take action early.'
  },
  {
    category: 'lenz-live',
    keywords: ['lenz live', 'lenz available', 'agent lenz live'],
    answer: 'Yes, Agent Lenz is currently live and available as version 1.0.'
  },
  {
    category: 'labs-submit',
    keywords: ['submit idea', 'how to submit', 'register idea'],
    answer: 'You can register your idea by providing your name, contact email, and a description of your concept in the "Co-Create with Labs" section.'
  },
  {
    category: 'labs-details',
    keywords: ['provide details', 'what details', 'idea details'],
    answer: 'You need to share your name, contact email, and a brief description of your idea.'
  },
  {
    category: 'labs-build',
    keywords: ['build idea', 'will you build', 'create product'],
    answer: 'Our team reviews submitted ideas and collaborates on promising concepts to bring them to life.'
  },
  {
    category: 'labs-ai',
    keywords: ['ai based', 'ai powered', 'artificial intelligence'],
    answer: 'Yes, all products in Breakthru Labs are powered by advanced AI technologies.'
  },
  {
    category: 'labs-grow',
    keywords: ['help business', 'business growth', 'grow business'],
    answer: 'Yes, tools like Nexus BD are designed to automate and improve business growth processes.'
  },
  {
    category: 'labs-technical',
    keywords: ['technical knowledge', 'technical skills', 'need technical'],
    answer: 'No, the platforms are designed to be user-friendly and easy to use.'
  },
  {
    category: 'labs-try',
    keywords: ['try now', 'try', 'use now', 'access'],
    answer: 'Agent Lenz is available now, and Nexus BD is accessible through beta access.'
  },
  {
    category: 'bfsi-services',
    keywords: ['bfsi services', 'banking services', 'financial services', 'banking help'],
    answer: 'We build modern banking platforms, payment systems, fraud detection, and compliance automation.'
  },
  {
    category: 'bfsi-digital-bank',
    keywords: ['digital bank', 'neo bank', 'build digital bank'],
    answer: 'Yes, we specialize in launching fully digital neo-banks.'
  },
  {
    category: 'bfsi-transaction-speed',
    keywords: ['transaction speed', 'how fast', 'transaction latency'],
    answer: 'Transactions are processed in as low as 40 milliseconds.'
  },
  {
    category: 'bfsi-payment-gateway',
    keywords: ['payment gateway', 'upi', 'real-time payment'],
    answer: 'Yes, we build secure and scalable payment gateways.'
  },
  {
    category: 'bfsi-fraud',
    keywords: ['fraud detection', 'detect fraud', 'fraud prevention'],
    answer: 'Yes, we use AI-powered fraud detection and AML systems.'
  },
  {
    category: 'bfsi-upi',
    keywords: ['upi', 'real-time payments', 'instant payments'],
    answer: 'Yes, we build real-time payment systems.'
  },
  {
    category: 'bfsi-migration',
    keywords: ['legacy migration', 'migrate systems', 'cloud migration'],
    answer: 'Yes, we modernize legacy systems and move them to the cloud.'
  },
  {
    category: 'bfsi-security',
    keywords: ['banking security', 'secure banking', 'security'],
    answer: 'Yes, we follow strict security and compliance standards.'
  },
  {
    category: 'bfsi-open-banking',
    keywords: ['open banking', 'open banking api', 'api'],
    answer: 'Yes, we build and integrate open banking ecosystems.'
  },
  {
    category: 'bfsi-compliance',
    keywords: ['compliance', 'regulatory', 'regulations'],
    answer: 'Yes, we automate regulatory compliance processes.'
  },
  {
    category: 'bfsi-wealth',
    keywords: ['wealth management', 'investment platform'],
    answer: 'Yes, we build platforms for managing investments and assets.'
  },
  {
    category: 'bfsi-large-transactions',
    keywords: ['large transactions', 'billions', 'high value'],
    answer: 'Yes, we process billions in transactions securely.'
  },
  {
    category: 'bfsi-scalable',
    keywords: ['scalable', 'scale', 'growth'],
    answer: 'Yes, it is designed to scale with business growth.'
  },
  {
    category: 'bfsi-credit-scoring',
    keywords: ['credit scoring', 'credit decision', 'credit system'],
    answer: 'Yes, we build AI-based credit decision systems.'
  },
  {
    category: 'bfsi-mobile-banking',
    keywords: ['mobile banking', 'banking app', 'mobile app'],
    answer: 'Yes, we develop mobile-first banking applications.'
  },
  {
    category: 'bfsi-latency',
    keywords: ['reduce latency', 'low latency', 'fast'],
    answer: 'Yes, we optimize systems for ultra-low latency.'
  },
  {
    category: 'bfsi-analytics',
    keywords: ['analytics', 'dashboard', 'real-time analytics'],
    answer: 'Yes, dashboards provide real-time insights.'
  },
  {
    category: 'bfsi-integration',
    keywords: ['integration', 'third-party', 'api integration'],
    answer: 'Yes, we support API integrations.'
  },
  {
    category: 'bfsi-reliability',
    keywords: ['reliability', 'uptime', 'reliable'],
    answer: 'We achieve up to 99.99% uptime.'
  },
  {
    category: 'bfsi-customize',
    keywords: ['customize', 'tailored', 'custom solution'],
    answer: 'Yes, solutions are tailored to business needs.'
  },
  {
    category: 'ecosystem-constellation',
    keywords: ['constellation', 'the constellation', 'ecosystem'],
    answer: 'The Constellation is our ecosystem of strategic technology partnerships that helps us deliver complete and scalable digital solutions.'
  },
  {
    category: 'ecosystem-fabric',
    keywords: ['digital fabric', 'fabric', 'integrate'],
    answer: 'Digital Fabric means integrating multiple technologies and platforms into one seamless system to deliver end-to-end solutions.'
  },
  {
    category: 'ecosystem-partners',
    keywords: ['partner', 'partners', 'why partner', 'work with partners'],
    answer: 'Partnering with leading platforms allows us to deliver faster, more powerful, and scalable solutions.'
  },
  {
    category: 'ecosystem-tools',
    keywords: ['implement tools', 'only tools', 'just tools'],
    answer: 'No, we go beyond implementation by building custom solutions on top of partner platforms.'
  },
  {
    category: 'ecosystem-alliances',
    keywords: ['strategic alliance', 'alliances', 'deep collaboration'],
    answer: 'Strategic alliances are deep engineering collaborations with technology providers to build advanced solutions.'
  },
  {
    category: 'ecosystem-databricks',
    keywords: ['databricks', 'work with databricks', 'use databricks'],
    answer: 'Yes, we use Databricks for data engineering, analytics, and machine learning solutions.'
  },
  {
    category: 'ecosystem-databricks-solutions',
    keywords: ['databricks solutions', 'build databricks', 'databricks platform'],
    answer: 'We build data pipelines, AI models, and analytics platforms.'
  },
  {
    category: 'ecosystem-lakehouse',
    keywords: ['lakehouse', 'lakehouse architecture', 'what is lakehouse'],
    answer: 'It combines data lakes and data warehouses into a unified platform for better performance and scalability.'
  },
  {
    category: 'ecosystem-delta-lake',
    keywords: ['delta lake', 'support delta lake'],
    answer: 'Yes, we implement Delta Lake for reliable and scalable data storage.'
  },
  {
    category: 'ecosystem-mlflow',
    keywords: ['mlflow', 'ml workflow', 'manage ml'],
    answer: 'Yes, we use MLflow to manage and deploy machine learning models.'
  },
  {
    category: 'ecosystem-snowflake',
    keywords: ['snowflake', 'snowflake services', 'provide snowflake'],
    answer: 'Yes, we design and implement modern data warehouse solutions using Snowflake.'
  },
  {
    category: 'ecosystem-snowflake-migrate',
    keywords: ['migrate snowflake', 'move to snowflake', 'data migration'],
    answer: 'Yes, we help move legacy data systems to Snowflake efficiently.'
  },
  {
    category: 'ecosystem-warehouse-modern',
    keywords: ['data warehouse modernization', 'modernize warehouse', 'upgrade data'],
    answer: 'It is the process of upgrading old data systems to scalable cloud-based platforms.'
  },
  {
    category: 'ecosystem-snowflake-share',
    keywords: ['data sharing', 'share data', 'snowflake sharing'],
    answer: 'Yes, Snowflake enables secure and easy data sharing across organizations.'
  },
  {
    category: 'ecosystem-snowpark',
    keywords: ['snowpark', 'what is snowpark'],
    answer: 'Snowpark allows developers to build data applications directly within Snowflake.'
  },
  {
    category: 'ecosystem-google-cloud',
    keywords: ['google cloud', 'gcp', 'use google'],
    answer: 'Yes, we build cloud and AI solutions using Google Cloud.'
  },
  {
    category: 'ecosystem-google-ai',
    keywords: ['google ai', 'vertex ai', 'genai', 'build ai'],
    answer: 'Yes, we use Vertex AI and GenAI tools for advanced AI applications.'
  },
  {
    category: 'ecosystem-bigquery',
    keywords: ['bigquery', 'use bigquery', 'analytics bigquery'],
    answer: 'Yes, we build analytics solutions using BigQuery.'
  },
  {
    category: 'ecosystem-anthos',
    keywords: ['anthos', 'what is anthos'],
    answer: 'Anthos is a platform that helps manage applications across multiple cloud environments.'
  },
  {
    category: 'ecosystem-multicloud',
    keywords: ['multi-cloud', 'multicloud', 'multiple cloud'],
    answer: 'Yes, we design and manage multi-cloud architectures.'
  },
  {
    category: 'ecosystem-intellect',
    keywords: ['intellect design', 'intellect', 'work with intellect'],
    answer: 'Yes, we implement financial technology solutions using Intellect platforms.'
  },
  {
    category: 'ecosystem-core-banking',
    keywords: ['core banking', 'build core banking', 'banking system'],
    answer: 'Yes, we develop and modernize core banking systems.'
  },
  {
    category: 'ecosystem-lending',
    keywords: ['digital lending', 'lending platform', 'lend'],
    answer: 'Yes, we build platforms for digital lending solutions.'
  },
  {
    category: 'ecosystem-wealth',
    keywords: ['wealth management', 'build wealth', 'wealth platform'],
    answer: 'Yes, we develop platforms for managing investments and assets.'
  },
  {
    category: 'ecosystem-partner-model',
    keywords: ['partner model', 'how partner', 'partnering'],
    answer: 'We collaborate through co-engineering, implementation, and white-label models.'
  },
  {
    category: 'ecosystem-co-engineering',
    keywords: ['co-engineering', 'co engineering', 'joint building'],
    answer: 'It means jointly building solutions with partner technologies.'
  },
  {
    category: 'ecosystem-whitelabel',
    keywords: ['white-label', 'whitelabel', 'white label'],
    answer: 'It allows partners to use our solutions under their own brand.'
  },
  {
    category: 'ecosystem-experience',
    keywords: ['experienced', 'team experience', 'how experienced'],
    answer: 'We have 200+ certified engineers across partner platforms.'
  },
  {
    category: 'ecosystem-clients',
    keywords: ['clients', 'customers', 'how many clients'],
    answer: 'We have delivered solutions to 50+ enterprise customers.'
  },
  {
    category: 'ecosystem-implementation',
    keywords: ['implementation speed', 'how fast', 'fast implementation'],
    answer: 'Our average time to production is around 12 weeks with a 4.9/5 customer satisfaction score.'
  },
  {
    category: 'careers-hiring',
    keywords: ['hiring', 'are you hiring', 'jobs', 'openings', 'vacancies'],
    answer: 'Yes, we are actively hiring across multiple roles in engineering, AI, and consulting.'
  },
  {
    category: 'careers-roles',
    keywords: ['roles', 'what roles', 'job roles', 'positions', 'available roles'],
    answer: 'We offer roles in Data Engineering, Platform Engineering, AI, Full Stack Development, DevOps, and Consulting.'
  },
  {
    category: 'careers-location',
    keywords: ['location', 'job location', 'where', 'office location', 'cities'],
    answer: 'Roles are available in Bengaluru, Hyderabad, Dubai, Riyadh, and remote positions.'
  },
  {
    category: 'careers-remote',
    keywords: ['remote', 'work from home', 'wfh', 'remote job', 'work remotely'],
    answer: 'Yes, we are a remote-first company with multiple remote opportunities.'
  },
  {
    category: 'careers-fresher',
    keywords: ['fresher', 'fresh graduate', 'new graduate', 'entry level'],
    answer: 'We mainly look for skilled candidates, but exceptional freshers are always welcome.'
  },
  {
    category: 'careers-culture',
    keywords: ['work culture', 'culture', 'environment', 'work environment'],
    answer: 'We focus on real engineering work, minimal hierarchy, and high ownership.'
  },
  {
    category: 'careers-engineering',
    keywords: ['real engineering', 'engineering work', 'what is engineering'],
    answer: 'It means working on production systems and real-world problems, not just presentations.'
  },
  {
    category: 'careers-ai-native',
    keywords: ['ai-native', 'ai native', 'work with ai', 'ai work'],
    answer: 'It means working with modern AI and machine learning technologies in real projects.'
  },
  {
    category: 'careers-hierarchy',
    keywords: ['hierarchy', 'flat structure', 'titles', 'management'],
    answer: 'No, we follow a flat structure where ideas matter more than titles.'
  },
  {
    category: 'careers-pods',
    keywords: ['pods', 'squads', 'autonomous team', 'small team'],
    answer: 'Small, autonomous teams that work independently on projects.'
  },
  {
    category: 'careers-growth',
    keywords: ['growth', 'career growth', 'promotion', 'advance'],
    answer: 'Yes, we provide fast growth with ownership from day one.'
  },
  {
    category: 'careers-learning',
    keywords: ['learning', 'learn', 'training', 'upskill', 'skill development'],
    answer: 'Yes, continuous learning and upskilling are part of our culture.'
  },
  {
    category: 'careers-clients',
    keywords: ['global clients', 'fortune 500', 'enterprise clients', 'international clients'],
    answer: 'Yes, we work with Fortune 500 clients worldwide.'
  },
  {
    category: 'careers-experience',
    keywords: ['real experience', 'project experience', 'hands on'],
    answer: 'Yes, you will work on real enterprise-level projects.'
  },
  {
    category: 'careers-team-size',
    keywords: ['team size', 'how big', 'company size', 'how many'],
    answer: 'We have 200+ engineers.'
  },
  {
    category: 'careers-clients-count',
    keywords: ['how many clients', 'client count', 'customers count'],
    answer: 'We work with 50+ enterprise clients.'
  },
  {
    category: 'careers-offices',
    keywords: ['offices', 'office', 'global hubs', 'presence'],
    answer: 'We have 3 global hubs along with remote teams.'
  },
  {
    category: 'careers-rating',
    keywords: ['rating', 'glassdoor', 'company rating', 'reviews'],
    answer: 'We have a 4.8★ rating on Glassdoor.'
  },
  {
    category: 'careers-data-engineer',
    keywords: ['data engineer', 'data engineering', 'data role'],
    answer: 'Skills include Snowflake, Databricks, and Python.'
  },
  {
    category: 'careers-platform-engineer',
    keywords: ['platform engineer', 'platform engineering', 'platform role'],
    answer: 'Kubernetes, Terraform, and Go are key skills.'
  },
  {
    category: 'careers-genai',
    keywords: ['genai architect', 'gen ai', 'llm', 'rag', 'langchain'],
    answer: 'Experience with LLMs, RAG, and LangChain is required.'
  },
  {
    category: 'careers-fullstack',
    keywords: ['full stack', 'fullstack', 'frontend', 'backend', 'developer'],
    answer: 'React, Node.js, and TypeScript.'
  },
  {
    category: 'careers-devops',
    keywords: ['devops', 'devops engineer', 'cloud', 'aws'],
    answer: 'AWS, CI/CD pipelines, and Docker.'
  },
  {
    category: 'careers-consultant',
    keywords: ['consultant', 'technical consultant', 'business consultant'],
    answer: 'It focuses on digital transformation and BFSI domain expertise.'
  },
  {
    category: 'careers-apply',
    keywords: ['apply', 'how to apply', 'application', 'submit profile'],
    answer: 'You can apply by submitting your profile through our careers page.'
  },
  {
    category: 'careers-multiple',
    keywords: ['multiple roles', 'apply multiple', 'more than one role'],
    answer: 'Yes, you can apply for roles that match your skills.'
  },
  {
    category: 'careers-no-role',
    keywords: ['no role', 'role not found', 'different role', 'other role'],
    answer: 'You can still send your profile—we are always looking for talented people.'
  },
  {
    category: 'careers-global',
    keywords: ['globally', 'hire globally', 'worldwide', 'different countries'],
    answer: 'Yes, we hire talent from different locations.'
  },
  {
    category: 'careers-good-place',
    keywords: ['good place', 'best place', 'great place', 'work here'],
    answer: 'Yes, we offer impactful work, great culture, and strong growth opportunities.'
  },
  {
    category: 'careers-real-work',
    keywords: ['real work', 'real projects', 'impact'],
    answer: 'Yes, you will work on real projects with real impact from day one.'
  },
  {
    category: 'mfactory-performance',
    keywords: ['factory performance', 'improve factory', 'performance'],
    answer: 'We use AI and IoT to monitor and optimize machines.'
  },
  {
    category: 'mfactory-failure',
    keywords: ['prevent failure', 'machine failure', 'predict failure'],
    answer: 'Yes, predictive maintenance detects issues early.'
  },
  {
    category: 'mfactory-digital-twin',
    keywords: ['digital twin', 'virtual model'],
    answer: 'A virtual model of machines for monitoring and analysis.'
  },
  {
    category: 'mfactory-sensors',
    keywords: ['sensors', 'iot sensor', 'machine sensor'],
    answer: 'Yes, IoT sensors track machine data in real time.'
  },
  {
    category: 'mfactory-defects',
    keywords: ['defect detection', 'detect defects', 'quality'],
    answer: 'Yes, computer vision detects defects automatically.'
  },
  {
    category: 'mfactory-efficiency',
    keywords: ['efficiency', 'improve efficiency'],
    answer: 'Efficiency can increase by up to 40%.'
  },
  {
    category: 'mfactory-downtime',
    keywords: ['reduce downtime', 'downtime'],
    answer: 'Yes, we eliminate unplanned downtime.'
  },
  {
    category: 'mfactory-automation',
    keywords: ['factory automation', 'automate', 'smart factory'],
    answer: 'Yes, we enable smart factory automation.'
  },
  {
    category: 'mfactory-tracking',
    keywords: ['tracking', 'production tracking', 'track'],
    answer: 'Yes, we provide real-time tracking and dashboards.'
  },
  {
    category: 'mfactory-supply-chain',
    keywords: ['supply chain', 'optimize supply'],
    answer: 'Yes, we improve supply chain efficiency.'
  },
  {
    category: 'mfactory-mes',
    keywords: ['mes', 'manufacturing mes'],
    answer: 'Yes, we implement end-to-end MES solutions.'
  },
  {
    category: 'mfactory-realtime',
    keywords: ['real-time data', 'realtime'],
    answer: 'Yes, all machine data is real-time.'
  },
  {
    category: 'mfactory-user-friendly',
    keywords: ['user friendly', 'easy to use', 'operator'],
    answer: 'Yes, interfaces are user-friendly.'
  },
  {
    category: 'mfactory-dashboards',
    keywords: ['dashboard', 'analytics dashboard'],
    answer: 'Yes, we build real-time analytics dashboards.'
  },
  {
    category: 'mfactory-multiple',
    keywords: ['multiple machines', 'many machines'],
    answer: 'Yes, thousands of machines can be monitored.'
  },
  {
    category: 'mfactory-ai',
    keywords: ['ai factory', 'manufacturing ai'],
    answer: 'Yes, for predictions and automation.'
  },
  {
    category: 'mfactory-manual',
    keywords: ['reduce manual', 'automation'],
    answer: 'Yes, automation reduces human effort.'
  },
  {
    category: 'mfactory-alerts',
    keywords: ['alerts', 'real-time alerts'],
    answer: 'Yes, real-time alerts for issues.'
  },
  {
    category: 'mfactory-traceability',
    keywords: ['traceability', 'track product', 'product history'],
    answer: 'Yes, we provide 100% traceability.'
  },
  {
    category: 'mfactory-scalable',
    keywords: ['scalable', 'scale'],
    answer: 'Yes, it scales with factory size.'
  },
  {
    category: 'telecom-uptime',
    keywords: ['network uptime', 'improve uptime'],
    answer: 'We use AI to predict and prevent failures.'
  },
  {
    category: 'telecom-trams',
    keywords: ['trams', 'total remote asset'],
    answer: 'A system to monitor and manage telecom assets remotely.'
  },
  {
    category: 'telecom-predict',
    keywords: ['predict issues', 'prediction', 'predict'],
    answer: 'Yes, up to 48 hours in advance.'
  },
  {
    category: 'telecom-downtime',
    keywords: ['reduce downtime', 'downtime'],
    answer: 'Yes, uptime reaches 99.99%.'
  },
  {
    category: 'telecom-remote',
    keywords: ['remote monitoring', 'monitor remotely'],
    answer: 'Yes, all assets are remotely managed.'
  },
  {
    category: 'telecom-drones',
    keywords: ['drone', 'drones', 'inspection'],
    answer: 'Yes, for tower inspection.'
  },
  {
    category: 'telecom-visits',
    keywords: ['field visits', 'truck rolls'],
    answer: 'Yes, truck rolls reduced by 30%.'
  },
  {
    category: 'telecom-live',
    keywords: ['real-time monitoring', 'live monitoring'],
    answer: 'Yes, live asset visibility.'
  },
  {
    category: 'telecom-large',
    keywords: ['large network', 'many assets'],
    answer: 'Yes, thousands of assets.'
  },
  {
    category: 'telecom-ai',
    keywords: ['telecom ai', 'ai analytics'],
    answer: 'Yes, for predictive analytics.'
  },
  {
    category: 'telecom-data',
    keywords: ['analyze data', 'what data'],
    answer: 'Weather, signals, and power data.'
  },
  {
    category: 'telecom-failures',
    keywords: ['detect failures', 'early detection'],
    answer: 'Yes, before they happen.'
  },
  {
    category: 'telecom-reliable',
    keywords: ['reliable', 'reliability'],
    answer: 'Yes, highly reliable.'
  },
  {
    category: 'telecom-optimize',
    keywords: ['optimize network', 'network optimization'],
    answer: 'Yes, using AI insights.'
  },
  {
    category: 'telecom-5g',
    keywords: ['5g', 'five g'],
    answer: 'Yes, 5G infrastructure support.'
  },
  {
    category: 'telecom-cx',
    keywords: ['customer experience', 'cx'],
    answer: 'Yes, via CX platforms.'
  },
  {
    category: 'telecom-alerts',
    keywords: ['alerts', 'real-time alerts'],
    answer: 'Yes, real-time alerts.'
  },
  {
    category: 'telecom-integrate',
    keywords: ['integrate', 'integration'],
    answer: 'Yes, API-based integration.'
  },
  {
    category: 'telecom-automation',
    keywords: ['automation', 'automated'],
    answer: 'Yes, fully automated workflows.'
  },
  {
    category: 'telecom-scale',
    keywords: ['scalable', 'scale'],
    answer: 'Yes, built for large networks.'
  },
  {
    category: 'retail-store',
    keywords: ['improve store', 'online store'],
    answer: 'Yes, with AI personalization and optimization.'
  },
  {
    category: 'retail-sales',
    keywords: ['increase sales', 'boost sales'],
    answer: 'Yes, conversion can increase up to 2.5x.'
  },
  {
    category: 'retail-cart',
    keywords: ['cart abandonment', 'reduce cart'],
    answer: 'Yes, by up to 45%.'
  },
  {
    category: 'retail-inventory',
    keywords: ['inventory', 'track inventory'],
    answer: 'Yes, real-time sync.'
  },
  {
    category: 'retail-platform',
    keywords: ['ecommerce platform', 'build platform'],
    answer: 'Yes, scalable platforms.'
  },
  {
    category: 'retail-omnichannel',
    keywords: ['omnichannel', 'unified'],
    answer: 'Yes, unified commerce systems.'
  },
  {
    category: 'retail-personalize',
    keywords: ['personalize', 'personalization'],
    answer: 'Yes, AI recommendations.'
  },
  {
    category: 'retail-pricing',
    keywords: ['pricing', 'dynamic pricing'],
    answer: 'Yes, dynamic pricing.'
  },
  {
    category: 'retail-orders',
    keywords: ['order management', 'manage orders'],
    answer: 'Yes, full order lifecycle.'
  },
  {
    category: 'retail-headless',
    keywords: ['headless', 'headless commerce'],
    answer: 'Yes.'
  },
  {
    category: 'retail-pos',
    keywords: ['pos', 'point of sale'],
    answer: 'Yes, modern POS systems.'
  },
  {
    category: 'retail-analytics',
    keywords: ['retail analytics', 'insights'],
    answer: 'Yes, real-time insights.'
  },
  {
    category: 'retail-scale',
    keywords: ['scale', 'scalable'],
    answer: 'Yes, high scalability.'
  },
  {
    category: 'retail-mobile',
    keywords: ['mobile app', 'retail app'],
    answer: 'Yes.'
  },
  {
    category: 'retail-checkout',
    keywords: ['checkout', 'optimize checkout'],
    answer: 'Yes, optimized flows.'
  },
  {
    category: 'retail-logistics',
    keywords: ['logistics', 'fulfillment'],
    answer: 'Yes, fulfillment optimization.'
  },
  {
    category: 'retail-cdp',
    keywords: ['cdp', 'customer data'],
    answer: 'Yes, CDP systems.'
  },
  {
    category: 'retail-automation',
    keywords: ['automation', 'automate'],
    answer: 'Yes.'
  },
  {
    category: 'retail-orders-handle',
    keywords: ['high orders', 'handle orders'],
    answer: 'Yes.'
  },
  {
    category: 'retail-secure',
    keywords: ['secure', 'security'],
    answer: 'Yes.'
  },
  {
    category: 'healthcare-solutions',
    keywords: ['healthcare solutions', 'provide'],
    answer: 'Patient platforms, AI diagnostics, telemedicine.'
  },
  {
    category: 'healthcare-wait',
    keywords: ['wait time', 'reduce wait'],
    answer: 'Yes, by up to 50%.'
  },
  {
    category: 'healthcare-compliant',
    keywords: ['compliant', 'hipaa'],
    answer: 'Yes, HIPAA/GDPR compliant.'
  },
  {
    category: 'healthcare-telemedicine',
    keywords: ['telemedicine', 'telehealth'],
    answer: 'Yes.'
  },
  {
    category: 'healthcare-remote',
    keywords: ['remote monitoring', 'patient remote'],
    answer: 'Yes.'
  },
  {
    category: 'healthcare-ehr',
    keywords: ['ehr', 'electronic health'],
    answer: 'Yes.'
  },
  {
    category: 'healthcare-efficiency',
    keywords: ['hospital efficiency', 'improve'],
    answer: 'Yes, 3x throughput.'
  },
  {
    category: 'healthcare-ai',
    keywords: ['ai healthcare', 'medical ai'],
    answer: 'Yes, diagnostics and analytics.'
  },
  {
    category: 'healthcare-data',
    keywords: ['patient data', 'manage data'],
    answer: 'Yes.'
  },
  {
    category: 'healthcare-devices',
    keywords: ['medical devices', 'device'],
    answer: 'Yes.'
  },
  {
    category: 'healthcare-predict',
    keywords: ['predict', 'outcome'],
    answer: 'Yes.'
  },
  {
    category: 'healthcare-secure',
    keywords: ['secure', 'data security'],
    answer: 'Yes.'
  },
  {
    category: 'healthcare-analytics',
    keywords: ['analytics', 'health analytics'],
    answer: 'Yes.'
  },
  {
    category: 'healthcare-scale',
    keywords: ['scale', 'scalable'],
    answer: 'Yes.'
  },
  {
    category: 'healthcare-trials',
    keywords: ['clinical trials', 'trials'],
    answer: 'Yes.'
  },
  {
    category: 'healthcare-errors',
    keywords: ['reduce errors', 'errors'],
    answer: 'Yes.'
  },
  {
    category: 'healthcare-workflows',
    keywords: ['workflows', 'automation'],
    answer: 'Yes.'
  },
  {
    category: 'healthcare-easy',
    keywords: ['easy to use', 'doctor'],
    answer: 'Yes.'
  },
  {
    category: 'healthcare-integration',
    keywords: ['integration', 'integrate'],
    answer: 'Yes.'
  },
  {
    category: 'healthcare-reliable',
    keywords: ['reliable', 'reliability'],
    answer: 'Yes.'
  },
  {
    category: 'travel-booking',
    keywords: ['booking system', 'build booking'],
    answer: 'Yes.'
  },
  {
    category: 'travel-revenue',
    keywords: ['revenue', 'increase revenue'],
    answer: 'Yes, up to 25%.'
  },
  {
    category: 'travel-reservations',
    keywords: ['reservations', 'manage'],
    answer: 'Yes.'
  },
  {
    category: 'travel-loyalty',
    keywords: ['loyalty', 'loyalty program'],
    answer: 'Yes.'
  },
  {
    category: 'travel-personalize',
    keywords: ['personalize', 'guest experience'],
    answer: 'Yes.'
  },
  {
    category: 'travel-mobile',
    keywords: ['mobile app', 'travel app'],
    answer: 'Yes.'
  },
  {
    category: 'travel-bookings',
    keywords: ['large bookings', 'many bookings'],
    answer: 'Yes.'
  },
  {
    category: 'travel-pricing',
    keywords: ['pricing engine', 'dynamic pricing'],
    answer: 'Yes.'
  },
  {
    category: 'travel-satisfaction',
    keywords: ['satisfaction', 'guest rating'],
    answer: 'Yes, up to 4.8 rating.'
  },
  {
    category: 'travel-analytics',
    keywords: ['analytics', 'insights'],
    answer: 'Yes.'
  },
  {
    category: 'travel-operations',
    keywords: ['operations', 'manage'],
    answer: 'Yes.'
  },
  {
    category: 'travel-cloud',
    keywords: ['cloud', 'cloud system'],
    answer: 'Yes.'
  },
  {
    category: 'travel-guest',
    keywords: ['guest data', 'unified'],
    answer: 'Yes.'
  },
  {
    category: 'travel-automation',
    keywords: ['automation', 'automate'],
    answer: 'Yes.'
  },
  {
    category: 'travel-scale',
    keywords: ['scale', 'scalable'],
    answer: 'Yes.'
  },
  {
    category: 'travel-realtime',
    keywords: ['real-time', 'real time'],
    answer: 'Yes.'
  },
  {
    category: 'travel-integrate',
    keywords: ['integrate', 'integration'],
    answer: 'Yes.'
  },
  {
    category: 'travel-experience',
    keywords: ['experience', 'improve'],
    answer: 'Yes.'
  },
  {
    category: 'travel-reliable',
    keywords: ['reliable', 'reliability'],
    answer: 'Yes.'
  },
  {
    category: 'travel-customize',
    keywords: ['customize', 'custom'],
    answer: 'Yes.'
  },
  {
    category: 'retail',
    keywords: ['retail', 'ecommerce', 'e-commerce', 'commerce', 'shopping', 'e commerce'],
    answer: 'In Retail & E-Commerce, we build unified commerce platforms, personalization engines, and inventory optimization. Results: 2.5x conversion rate, 45% reduced cart abandonment, real-time inventory sync.'
  },
  {
    category: 'healthcare',
    keywords: ['healthcare', 'health', 'medical', 'hospital', 'hipaa', 'ehr', 'clinical'],
    answer: 'In Healthcare, we deliver EHR integration, clinical decision support, telemedicine platforms, and regulatory compliance. Results: 3X patient throughput, 50% reduced wait times, 100% HIPAA compliant.'
  },
  {
    category: 'travel',
    keywords: ['travel', 'hospitality', 'hotel', 'booking', 'tourism'],
    answer: 'In Travel & Hospitality, we build booking engines, revenue management, loyalty programs, and guest experience platforms. Results: 25% revenue uplift, 4.8★ guest satisfaction, millions of bookings/day.'
  },
  {
    category: 'ecosystem',
    keywords: ['ecosystem', 'partners', 'partnership', 'alliance', 'partner'],
    answer: 'Our Strategic Alliances include: Databricks (Data & AI), Snowflake (Data Cloud), Google Cloud (AI Infrastructure), and Intellect Design (Digital Banking). We have 200+ certified engineers and 50+ joint customers.'
  },
  {
    category: 'databricks',
    keywords: ['databricks', 'lakehouse', 'spark', 'delta lake', 'mlflow'],
    answer: 'Databricks is our Data & AI Platform partner. We deliver Lakehouse Architecture, Delta Lake Implementation, MLflow & ML Ops, and Spark Optimization. We help enterprises build unified analytics platforms for data engineering, data science, and machine learning.'
  },
  {
    category: 'snowflake',
    keywords: ['snowflake', 'data warehouse', 'snowpark', 'data mesh'],
    answer: 'Snowflake is our Data Cloud partner. We deliver Data Warehouse Modernization, Data Mesh Implementation, Snowpark Development, and Data Sharing & Marketplace. We help modernize your data infrastructure.'
  },
  {
    category: 'google-cloud',
    keywords: ['google cloud', 'gcp', 'vertex', 'bigquery', 'anthos'],
    answer: 'Google Cloud is our AI Infrastructure partner. We deliver Vertex AI & GenAI, BigQuery Analytics, Cloud Infrastructure, and Anthos Multi-cloud. We help enterprises leverage leading AI/ML capabilities and global infrastructure.'
  },
  {
    category: 'labs',
    keywords: ['labs', 'breakthru labs', 'nexus', 'agent lenz', 'experimental', 'products'],
    answer: 'Breakthru Labs is our Experimental Division with two products: 1) Nexus BD — AI-powered Business Development automation with dual AI research (Gemini + Deepseek). 2) Agent Lenz — AIOps incident management that reduces downtime by 60%.'
  },
  {
    category: 'nexus',
    keywords: ['nexus', 'nexus bd', 'business development', 'bd'],
    answer: 'Nexus BD is our Autonomous Growth Engine — an AI-powered Business Development platform with Dual AI Research Engine, Auto-Personalized Landing Pages, Sentiment Analysis on Replies, and Workflow Automation. Currently in Beta Access.'
  },
  {
    category: 'agent-lenz',
    keywords: ['agent lenz', 'lenz', 'aiops', 'ai ops', 'incident', 'sre', 'alert'],
    answer: 'Agent Lenz is our AIOps Sentinel — comprehensive AI-powered incident management and SRE platform. Features: Intelligent Alert Correlation, Real-time SLA Compliance, Automated War Rooms, and Predictive Breach Detection. Live V1.0.'
  },
  {
    category: 'delivery',
    keywords: ['how we deliver', 'process', 'methodology', 'approach', 'deliver', 'sprint', 'agile'],
    answer: 'How We Deliver: 1) Discover — Deep-dive into your domain, tech stack, and pain points. 2) Architect — Design systems that scale, not slide decks that gather dust. 3) Build — Agile squads shipping production code in 2-week sprints. 4) Run — We own the uptime with 24/7 SRE and outcome-based SLAs.'
  },
  {
    category: 'team',
    keywords: ['team', 'people', 'engineers', 'staff', 'how many', 'employees', 'size', 'certified'],
    answer: 'We have 200+ certified engineers across all partner platforms, 50+ joint enterprise customers, with an average 12-week implementation time and 4.9/5 customer satisfaction score. Our engineers are certified across Databricks, Snowflake, Google Cloud, and more.'
  },
  {
    category: 'contact',
    keywords: ['contact', 'reach', 'email', 'talk', 'call', 'get in touch', 'reach out'],
    answer: 'You can reach us by clicking the "Talk to us!" button in the navigation bar or email us at bd@breakthru.ai. Wed love to discuss how we can help transform your business.'
  },
  {
    category: 'story',
    keywords: ['our story', 'history', 'founded', 'background', 'journey', 'who started'],
    answer: 'Visit the "Our Story" page from the "Who We Are" dropdown in the navigation to learn about our journey, leadership team, and the network of partners and clients weve built. We were founded in 2023 with a mission to bridge consulting and engineering.'
  },
  {
    category: 'vision',
    keywords: ['vision', 'mission', 'purpose', 'goal', 'why'],
    answer: 'Our Vision: To become the definitive Digital Fabric for enterprises seeking transformation—not through PowerPoint, but through production-grade engineering that ships. Our Mission: Bridge the gap between strategy and execution. Combine consulting-grade domain expertise with engineering-grade delivery. Own outcomes, not just outputs.'
  },
  {
    category: 'values',
    keywords: ['values', 'principles', 'beliefs', 'culture', 'manifesto'],
    answer: 'Our core values: 1) Code > Slides — We ship working software, not PowerPoint decks. 2) Extreme Ownership — We treat your platform as if it were our own. 3) Engineer-to-Engineer — No account managers. You work directly with engineers. 4) Radical Transparency — Open access to our code and roadmaps.'
  },
  {
    category: 'locations',
    keywords: ['location', 'office', 'address', 'where', 'headquarters', 'hub', 'city'],
    answer: 'Our Engineering HQ is in India with cities: Bengaluru, Mumbai, Hyderabad. Client Engagement in GCC: Dubai, Riyadh. Regional Ops in Southeast Asia: Kuala Lumpur, Manila. Corporate Office: Breakthru Enterprise Solutions Private Limited, 1292-1293 Trichy Rd, Nadar Colony, Race Course, Coimbatore, Tamil Nadu 641018.'
  },
  {
    category: 'pricing',
    keywords: ['pricing', 'cost', 'price', 'fee', 'charge', 'estimate', 'quote'],
    answer: 'Our pricing is outcome-based rather than time-and-materials. We work with enterprises to define measurable outcomes and align our delivery with your success metrics. Contact us to discuss your specific requirements.'
  },
  {
    category: 'careers',
    keywords: ['careers', 'jobs', 'hiring', 'job opening', 'work with', 'join'],
    answer: 'Were always looking for talented engineers! Visit our Careers page to see current openings. We hire skilled engineers across platform engineering, data & AI, and cloud infrastructure. Join our team of 200+ certified professionals.'
  }
]

const relevantKeywords = [
  'breakthru', 'breakthru.ai', 'service', 'services', 'industry', 'industries', 'partner', 'partners', 'labs', 
  'consult', 'consulting', 'engineer', 'engineering', 'fintech', 'manufactur', 'manufacturing', 'telecom', 
  'telecommunication', 'retail', 'health', 'healthcare', 'travel', 'hospitality', 'databricks', 'snowflake', 
  'google', 'gcp', 'cloud', 'intellect', 'nexus', 'lenz', 'gcc', 'talent', 'xperience', 'ai', 'data', 'strategy',
  'growth', 'product', 'squad', 'platform', 'team', 'company', 'about', 'who', 'what', 'how', 'where', 'when',
  'digital', 'transformation', 'automation', 'devops', 'sre', 'microservices', 'genai', 'llm', 'ml', 'machine learning',
  'roo', 'estimate', 'quote', 'price', 'cost', 'fee', 'payment', 'billing', 'budget', 'invest', 'roi',
  'career', 'job', 'hire', 'hiring', 'recruit', 'recruitment', 'openings', 'vacancy', 'apply', 'interview',
  'office', 'location', 'address', 'headquarters', 'hub', 'city', 'bangalore', 'mumbai', 'hyderabad', 'dubai', 'riyadh',
  'vision', 'mission', 'purpose', 'goal', 'values', 'principles', 'culture', 'manifesto', 'story', 'history', 'founded',
  'delivery', 'process', 'methodology', 'approach', 'sprint', 'agile', 'project', 'implementation',
  'capability', 'center', 'global', 'captive', 'team augmentation', 'resource', 'staffing',
  'weath', 'portfolio', 'investment', 'family office', 'governance',
  'neobank', 'neo bank', 'neo-bank', 'banking', 'financial', 'finance', 'payment', 'transaction', 'fraud', 'kafka', 'event driven', 'micro frontend', 'biometric', 'real-time', 'latency', '40ms', 'react native', 'spring boot', 'aws lambda', 'event-driven architecture', 'micro-frontend', 'security', 'safe', 'fast', 'speed', 'reliable', 'reliability', 'risk team', 'account', 'open account', 'instant', 'the neo-bank heist',
  'manufacturing', 'factory', 'industry 4.0', 'smart factory', 'industrial', 'ghost', 'ghosts in the machine', 'azure', 'iot', 'tensorflow', 'edge computing', '5g', 'digital twin', 'computer vision', 'oee', 'teep', 'downtime', 'traceability', 'hmi', 'operator', 'shop floor', 'defect detection',
  'network', 'tower', 'telecom', 'telecommunication', 'asset management', 'trams', 'signal', 'noise', 'drone', 'lorawan', 'truck roll', 'predictive', 'python',
  'labs', 'breakthru labs', 'nexus', 'nexus bd', 'agent lenz', 'lenz', 'aiops', 'co-create', 'beta',
  'bfsi', 'banking', 'finance', 'financial', 'payment', 'fraud', 'compliance', 'wealth', 'credit', 'neo bank', 'digital bank', 'upi', 'open banking', 'transaction latency',
  'manufacturing', 'factory', 'industry 4.0', 'smart factory', 'ghost', 'ghosts in the machine', 'azure', 'iot', 'tensorflow', 'edge computing', '5g', 'digital twin', 'computer vision', 'oee', 'teep', 'downtime', 'traceability', 'hmi', 'operator', 'shop floor', 'defect detection', 'mes', 'predictive maintenance',
  'retail', 'ecommerce', 'e-commerce', 'commerce', 'shopping', 'cart abandonment', 'inventory', 'pos', 'cdp', 'headless', 'omnichannel', 'personalization',
  'healthcare', 'health', 'medical', 'hospital', 'hipaa', 'ehr', 'clinical', 'telemedicine', 'patient', 'diagnostics', 'efficiency',
  'travel', 'hospitality', 'hotel', 'booking', 'tourism', 'reservation', 'loyalty', 'guest', 'revenue',
  'ecosystem', 'constellation', 'partners', 'partnership', 'alliance', 'databricks', 'snowflake', 'google cloud', 'gcp', 'intellect', 'vertex', 'bigquery', 'anthos', 'lakehouse', 'delta lake', 'mlflow', 'snowpark', 'multi-cloud', 'multicloud', 'white-label', 'co-engineering',
  'career', 'careers', 'job', 'jobs', 'hiring', 'hire', 'vacancy', 'vacancies', 'opening', 'openings', 'recruit', 'recruitment', 'apply', 'application', 'interview', 'fresher', 'remote', 'work from home', 'growth', 'learning', 'training',
  'ecommerce', 'e-commerce', 'commerce', 'shopping', 'cart', 'inventory',
  'hospital', 'medical', 'ehr', 'clinical', 'telemedicine', 'hipaa', 'patient',
  'hotel', 'booking', 'tourism', 'hospitality', 'revenue', 'loyalty',
  'lakehouse', 'data warehouse', 'analytics', 'bi', 'business intelligence', 'spark', 'delta lake', 'mlflow', 'snowpark', 'data mesh',
  'vertex', 'bigquery', 'anthos', 'infrastructure',
  'bd', 'business development', 'sales', 'marketing',
  'contact', 'reach', 'email', 'phone', 'call'
]

function BotAvatar({ size = 'md' }) {
  const sizeClass = size === 'sm' ? 'cb-avatar-sm' : 'cb-avatar-md'
  return (
    <div className={`cb-avatar ${sizeClass}`}>
      <img src="https://giffiles.alphacoders.com/112/11291.gif" alt="AI Robot" />
    </div>
  )
}

function TypingIndicator() {
  return (
    <div className="cb-msg cb-msg-bot">
      <BotAvatar size="sm" />
      <div className="cb-bubble cb-bubble-bot cb-typing">
        <span className="cb-dot" />
        <span className="cb-dot" />
        <span className="cb-dot" />
      </div>
    </div>
  )
}

function calculateSimilarity(str1, str2) {
  const words1 = str1.toLowerCase().split(' ')
  const words2 = str2.toLowerCase().split(' ')
  let matchCount = 0
  for (const w1 of words1) {
    for (const w2 of words2) {
      if (w2.includes(w1) || w1.includes(w2)) {
        matchCount++
        break
      }
    }
  }
  return matchCount / Math.max(words1.length, words2.length)
}

function findBestMatch(question) {
  const lower = question.toLowerCase().trim()
  if (!lower || lower.length < 2) return null

  let bestMatch = null
  let bestScore = 0

  for (const item of knowledgeBase) {
    for (const keyword of item.keywords) {
      const lowerKeywords = keyword.toLowerCase()
      const lowerQuestion = lower
      
      // Exact match - highest priority
      if (lowerQuestion === lowerKeywords && lowerKeywords.length > 0) {
        const score = 1.0
        if (score > bestScore) {
          bestScore = score
          bestMatch = item
        }
        continue
      }
      
      // Keyword is subset of question - high priority
      if (lowerQuestion.includes(lowerKeywords) && lowerKeywords.length > 3) {
        const score = 0.95
        if (score > bestScore) {
          bestScore = score
          bestMatch = item
        }
        continue
      }
      
      // Question contains keyword words - medium priority
      const questionWords = lowerQuestion.split(/[\s,\-\?\.!]+/).filter(w => w.length > 2)
      const keywordWords = lowerKeywords.split(/[\s,\-\?\.!]+/).filter(w => w.length > 2)
      
      if (keywordWords.length > 0) {
        let matchCount = 0
        for (const qw of questionWords) {
          for (const kw of keywordWords) {
            if (qw.includes(kw) || kw.includes(qw)) {
              matchCount++
              break
            }
          }
        }
        
        if (matchCount > 0) {
          // Require at least 50% word match for relevance
          const wordMatchRatio = matchCount / keywordWords.length
          if (wordMatchRatio >= 0.5) {
            const score = wordMatchRatio * 0.85
            if (score > bestScore) {
              bestScore = score
              bestMatch = item
            }
          }
        }
      }
    }
  }

  // Only return match if score is high enough
  return bestScore >= 0.5 ? bestMatch : null
}

function isRelevantQuestion(question) {
  const lower = question.toLowerCase()
  return relevantKeywords.some(keyword => lower.includes(keyword.toLowerCase()))
}

export default function Chatbot({ onClose, variant = 'floating' }) {
  const defaultIntro = 'Hi! Im the breakthru.ai assistant. We are the Digital Fabric—a hybrid of high-end consulting and deep engineering. We Architect, Build, and Run. Ask me anything about our services, industries, products, or how we can help transform your business!'
  const [messages, setMessages] = useState([
    { role: 'bot', text: defaultIntro }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const messagesEndRef = useRef(null)
  const messagesContainerRef = useRef(null)
  const isMutedRef = useRef(false)
  const hasSpokenIntroRef = useRef(false)

  useEffect(() => {
    isMutedRef.current = isMuted
    if (isMuted) window.speechSynthesis.cancel()
  }, [isMuted])

  const speak = (text) => {
    if (isMutedRef.current) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 1
    utterance.pitch = 1
    utterance.volume = 1
    const voices = window.speechSynthesis.getVoices()
    const englishVoice = voices.find(v => v.lang.startsWith('en'))
    if (englishVoice) utterance.voice = englishVoice
    window.speechSynthesis.speak(utterance)
  }

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    if (messages.length > 0) {
      const lastMsg = messages[messages.length - 1]
      if (lastMsg.role === 'bot') {
        speak(lastMsg.text)
        if (messages.length === 1) hasSpokenIntroRef.current = true
      }
    }
  }, [messages])

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasSpokenIntroRef.current && messages.length === 1) {
        speak(defaultIntro)
        hasSpokenIntroRef.current = true
      }
      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('keydown', handleFirstInteraction)
    }

    window.addEventListener('click', handleFirstInteraction)
    window.addEventListener('keydown', handleFirstInteraction)

    return () => {
      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('keydown', handleFirstInteraction)
      window.speechSynthesis.cancel()
    }
  }, [])

const findAnswer = (question) => {
    const lower = question.toLowerCase()
    
    // Direct question matching for common patterns
    const directPatterns = [
      { pattern: /what.*(about|project).*(bank|fintech|neo)/i, match: 'what is this neo bank project about' },
      { pattern: /what.*(about|project).*(manufacturing|factory)/i, match: 'manufacturing project' },
      { pattern: /what.*(about|project|do).*(telecom|network|tower)/i, match: 'telecom project' },
      { pattern: /what.*(about|project|do).*(labs|nexus|lenz)/i, match: 'labs' },
      { pattern: /what.*(about|project|do).*(retail|commerce|shop)/i, match: 'retail' },
      { pattern: /what.*(about|project|do).*(healthcare|hospital|medical)/i, match: 'healthcare' },
      { pattern: /what.*(about|project|do).*(travel|hotel|hospitality)/i, match: 'travel' },
      { pattern: /how fast/i, match: 'how fast is your system' },
      { pattern: /transaction.*(speed|fast|latency)/i, match: 'bfsi-transaction-speed' },
      { pattern: /fraud/i, match: 'bfsi-fraud' },
      { pattern: /digital.*(bank|twin)/i, match: 'bfsi-digital-bank' },
      { pattern: /predict.*(fail|downtime)/i, match: 'telecom-predict' },
      { pattern: /trams/i, match: 'telecom-trams' },
      { pattern: /ghost/i, match: 'manufacturing-ghosts' },
      { pattern: /signal.*noise/i, match: 'telecom-signal' },
      // Additional patterns for BFSI
      { pattern: /can.*(build|create|make).*bank/i, match: 'bfsi-digital-bank' },
      { pattern: /banking.*service/i, match: 'bfsi-services' },
      { pattern: /payment.*gate/i, match: 'bfsi-payment-gateway' },
      // Manufacturing patterns
      { pattern: /digital twin/i, match: 'mfactory-digital-twin' },
      { pattern: /predictive.*maintenance/i, match: 'mfactory-failure' },
      { pattern: /efficiency/i, match: 'mfactory-efficiency' },
      // Telecom patterns
      { pattern: /network.*uptime/i, match: 'telecom-uptime' },
      { pattern: /drone/i, match: 'telecom-drones' },
      // Retail patterns
      { pattern: /increase.*sale/i, match: 'retail-sales' },
      { pattern: /cart.*abandon/i, match: 'retail-cart' },
      // Healthcare patterns  
      { pattern: /hipaa/i, match: 'healthcare-compliant' },
      { pattern: /telemedicine/i, match: 'healthcare-telemedicine' },
      // Travel patterns
      { pattern: /booking/i, match: 'travel-booking' },
      { pattern: /loyalty/i, match: 'travel-loyalty' },
      // Ecosystem patterns
      { pattern: /constellation/i, match: 'ecosystem-constellation' },
      { pattern: /digital fabric/i, match: 'ecosystem-fabric' },
      { pattern: /partner/i, match: 'ecosystem-partners' },
      { pattern: /databricks/i, match: 'ecosystem-databricks' },
      { pattern: /lakehouse/i, match: 'ecosystem-lakehouse' },
      { pattern: /delta lake/i, match: 'ecosystem-delta-lake' },
      { pattern: /mlflow/i, match: 'ecosystem-mlflow' },
      { pattern: /snowflake/i, match: 'ecosystem-snowflake' },
      { pattern: /snowpark/i, match: 'ecosystem-snowpark' },
      { pattern: /google cloud/i, match: 'ecosystem-google-cloud' },
      { pattern: /vertex/i, match: 'ecosystem-google-ai' },
      { pattern: /bigquery/i, match: 'ecosystem-bigquery' },
      { pattern: /anthos/i, match: 'ecosystem-anthos' },
      { pattern: /multi-?cloud/i, match: 'ecosystem-multicloud' },
      { pattern: /intellect/i, match: 'ecosystem-intellect' },
      { pattern: /core banking/i, match: 'ecosystem-core-banking' },
      { pattern: /lending/i, match: 'ecosystem-lending' },
      { pattern: /wealth/i, match: 'ecosystem-wealth' },
      { pattern: /co-?engineer/i, match: 'ecosystem-co-engineering' },
      { pattern: /white-?label/i, match: 'ecosystem-whitelabel' },
      { pattern: /experience|experienced/i, match: 'ecosystem-experience' },
      { pattern: /client|customer/i, match: 'ecosystem-clients' },
      { pattern: /implementation.*fast|speed/i, match: 'ecosystem-implementation' },
      // Careers patterns
      { pattern: /hiring|jobs?|vacanc/i, match: 'careers-hiring' },
      { pattern: /roles?|positions/i, match: 'careers-roles' },
      { pattern: /location|office|where/i, match: 'careers-location' },
      { pattern: /remote|work from home/i, match: 'careers-remote' },
      { pattern: /fresher|graduate|entry level/i, match: 'careers-fresher' },
      { pattern: /culture|work environment/i, match: 'careers-culture' },
      { pattern: /real engineering/i, match: 'careers-engineering' },
      { pattern: /ai-?native/i, match: 'careers-ai-native' },
      { pattern: /hierarchy|flat/i, match: 'careers-hierarchy' },
      { pattern: /pods?|squads?/i, match: 'careers-pods' },
      { pattern: /growth|career.*advance/i, match: 'careers-growth' },
      { pattern: /learn|training|upskill/i, match: 'careers-learning' },
      { pattern: /fortune.*500|global.*client/i, match: 'careers-clients' },
      { pattern: /project experience/i, match: 'careers-experience' },
      { pattern: /how (big|many).*(team|engineer)/i, match: 'careers-team-size' },
      { pattern: /how many (client|customer)/i, match: 'careers-clients-count' },
      { pattern: /office|hub/i, match: 'careers-offices' },
      { pattern: /rating|glassdoor/i, match: 'careers-rating' },
      { pattern: /data engineer/i, match: 'careers-data-engineer' },
      { pattern: /platform engineer/i, match: 'careers-platform-engineer' },
      { pattern: /gen.?ai|llm|rag/i, match: 'careers-genai' },
      { pattern: /full ?stack/i, match: 'careers-fullstack' },
      { pattern: /devops/i, match: 'careers-devops' },
      { pattern: /consultant/i, match: 'careers-consultant' },
      { pattern: /how (apply|submit)/i, match: 'careers-apply' },
      { pattern: /apply.*multiple/i, match: 'careers-multiple' },
      { pattern: /no.*role|different role/i, match: 'careers-no-role' },
      { pattern: /hire globally|worldwide/i, match: 'careers-global' },
      { pattern: /good place|best place/i, match: 'careers-good-place' },
    ]
    
    for (const { pattern, match } of directPatterns) {
      if (pattern.test(lower)) {
        const bestMatch = findBestMatch(match)
        if (bestMatch) return bestMatch.answer
      }
    }
    
    // Category-based fallback for key topics
    const categoryFallbacks = [
      // Company/About
      { keywords: ['who are you', 'about company', 'what is breakthru'], match: 'who are you' },
      { keywords: ['service', 'offering', 'what do you do'], match: 'services' },
      { keywords: ['industry', 'sector', 'vertical'], match: 'industries' },
      // Projects
      { keywords: ['neobank', 'neo bank', 'banking project', 'fintech'], match: 'what is this neo bank project about' },
      { keywords: ['manufacturing', 'factory', 'industry 4.0', 'smart factory'], match: 'manufacturing project' },
      { keywords: ['telecom', 'network', 'tower', 'trams'], match: 'telecom project' },
      // Products
      { keywords: ['labs', 'breakthru labs'], match: 'labs' },
      { keywords: ['nexus', 'nexus bd', 'bd platform'], match: 'nexus' },
      { keywords: ['lenz', 'agent lenz', 'aiops'], match: 'agent lenz' },
      // Ecosystem
      { keywords: ['ecosystem', 'constellation', 'partner'], match: 'ecosystem-constellation' },
      { keywords: ['databricks', 'lakehouse'], match: 'ecosystem-databricks' },
      { keywords: ['snowflake', 'data warehouse'], match: 'ecosystem-snowflake' },
      { keywords: ['google cloud', 'gcp', 'vertex'], match: 'ecosystem-google-cloud' },
      // Careers
      { keywords: ['job', 'hiring', 'career', 'vacancy', 'opening'], match: 'careers-hiring' },
      { keywords: ['work culture', 'culture'], match: 'careers-culture' },
      { keywords: ['remote', 'work from home'], match: 'careers-remote' },
      // Specific topics
      { keywords: ['digital twin'], match: 'mfactory-digital-twin' },
      { keywords: ['ghosts in the machine', 'ghost'], match: 'manufacturing-ghosts' },
      { keywords: ['signal vs noise', 'signal'], match: 'telecom-signal' },
    ]
    
    for (const fallback of categoryFallbacks) {
      const isMatch = fallback.keywords.some(kw => lower.includes(kw))
      if (isMatch) {
        const match = findBestMatch(fallback.match)
        if (match) return match.answer
      }
    }
    
    const fintechKeywords = ['neobank', 'neo bank', 'neo-bank', 'fintech', 'banking project', 'digital banking', 'transform banking', 'modern banking', 'what is this neo bank', 'the neo-bank heist', 'neo-bank']
    const isFintechQuestion = fintechKeywords.some(kw => lower.includes(kw))
    
    if (isFintechQuestion) {
      if (lower.includes('what is this') || lower.includes('about') || lower.includes('project about')) {
        const match = findBestMatch('what is this neo bank project about')
        if (match) return match.answer
      }
      if (lower.includes('problem') || lower.includes('solve') || lower.includes('pain')) {
        const match = findBestMatch('what problem were you solving')
        if (match) return match.answer
      }
      if (lower.includes('different') || lower.includes('unique') || lower.includes('special')) {
        const match = findBestMatch('different from normal banks')
        if (match) return match.answer
      }
      if (lower.includes('technolog') || lower.includes('tech stack') || lower.includes('tools')) {
        const match = findBestMatch('what technologies did you use')
        if (match) return match.answer
      }
      if (lower.includes('kafka')) {
        const match = findBestMatch('kafka')
        if (match) return match.answer
      }
      if (lower.includes('event driven') || lower.includes('event-driven') || lower.includes('architecture')) {
        const match = findBestMatch('event driven architecture')
        if (match) return match.answer
      }
      if (lower.includes('micro frontend') || lower.includes('micro-frontend') || lower.includes('microfrontend')) {
        const match = findBestMatch('micro frontend')
        if (match) return match.answer
      }
      if (lower.includes('security') || lower.includes('secure') || lower.includes('safe') || lower.includes('biometric')) {
        const match = findBestMatch('how did you handle security')
        if (match) return match.answer
      }
      if (lower.includes('result') || lower.includes('achievement') || lower.includes('outcome')) {
        const match = findBestMatch('what results did you achieve')
        if (match) return match.answer
      }
      if (lower.includes('speed') || lower.includes('fast') || lower.includes('latency') || lower.includes('how fast')) {
        const match = findBestMatch('how fast is your system')
        if (match) return match.answer
      }
      if (lower.includes('fraud')) {
        const match = findBestMatch('did you reduce fraud')
        if (match) return match.answer
      }
      if (lower.includes('reliab') || lower.includes('uptime') || lower.includes('depend')) {
        const match = findBestMatch('how reliable is your system')
        if (match) return match.answer
      }
      if (lower.includes('team') && lower.includes('work')) {
        const match = findBestMatch('how did your team work')
        if (match) return match.answer
      }
      if (lower.includes('risk')) {
        const match = findBestMatch('did you work with financial risk teams')
        if (match) return match.answer
      }
      if (lower.includes('app fast') || (lower.includes('is') && lower.includes('fast'))) {
        const match = findBestMatch('is this app fast')
        if (match) return match.answer
      }
      if (lower.includes('account') || lower.includes('open')) {
        const match = findBestMatch('can I open account instantly')
        if (match) return match.answer
      }
      if (lower.includes('safe') || lower.includes('secure') || lower.includes('safety')) {
        const match = findBestMatch('is it safe to use')
        if (match) return match.answer
      }
      if (lower.includes('fail') || lower.includes('error') || lower.includes('transaction fail')) {
        const match = findBestMatch('will transactions fail')
        if (match) return match.answer
      }
      const match = findBestMatch('neobank project')
      if (match) return match.answer
    }

    const manufacturingKeywords = ['manufacturing', 'factory', 'smart factory', 'industry 4.0', 'ghost', 'ghosts in the machine', 'the ghost in the machine']
    const isManufacturingQuestion = manufacturingKeywords.some(kw => lower.includes(kw))
    
    if (isManufacturingQuestion) {
      if (lower.includes('what is this') || lower.includes('about') || lower.includes('project about')) {
        const match = findBestMatch('manufacturing project')
        if (match) return match.answer
      }
      if (lower.includes('problem') || lower.includes('solve') || lower.includes('pain')) {
        const match = findBestMatch('manufacturing problem')
        if (match) return match.answer
      }
      if (lower.includes('ghost')) {
        const match = findBestMatch('manufacturing ghosts')
        if (match) return match.answer
      }
      if (lower.includes('technolog') || lower.includes('tech stack') || lower.includes('tools')) {
        const match = findBestMatch('manufacturing tech')
        if (match) return match.answer
      }
      if (lower.includes('iot') || lower.includes('internet of things') || lower.includes('sensor')) {
        const match = findBestMatch('manufacturing iot')
        if (match) return match.answer
      }
      if (lower.includes('digital twin')) {
        const match = findBestMatch('manufacturing digital twin')
        if (match) return match.answer
      }
      if (lower.includes('ai') || lower.includes('computer vision') || lower.includes('edge ai')) {
        const match = findBestMatch('manufacturing ai')
        if (match) return match.answer
      }
      if (lower.includes('edge computing') || lower.includes('edge')) {
        const match = findBestMatch('manufacturing edge')
        if (match) return match.answer
      }
      if (lower.includes('result') || lower.includes('achievement') || lower.includes('outcome')) {
        const match = findBestMatch('manufacturing results')
        if (match) return match.answer
      }
      if (lower.includes('downtime') || lower.includes('stop') || lower.includes('fail')) {
        const match = findBestMatch('manufacturing downtime')
        if (match) return match.answer
      }
      if (lower.includes('efficiency') || lower.includes('improved')) {
        const match = findBestMatch('manufacturing efficiency')
        if (match) return match.answer
      }
      if (lower.includes('traceability') || lower.includes('track')) {
        const match = findBestMatch('manufacturing traceability')
        if (match) return match.answer
      }
      if (lower.includes('team') || lower.includes('shop floor') || lower.includes('operator')) {
        const match = findBestMatch('manufacturing team')
        if (match) return match.answer
      }
      if (lower.includes('oee') || lower.includes('teep')) {
        const match = findBestMatch('manufacturing oee')
        if (match) return match.answer
      }
      if (lower.includes('automatic') || lower.includes('automate')) {
        const match = findBestMatch('manufacturing automatic')
        if (match) return match.answer
      }
      if (lower.includes('defect') || lower.includes('detect')) {
        const match = findBestMatch('manufacturing defects')
        if (match) return match.answer
      }
      const match = findBestMatch('manufacturing project')
      if (match) return match.answer
    }

    const telecomKeywords = ['telecom', 'telecommunication', 'network', 'tower', 'trams', 'signal vs noise', 'signal', 'drone', 'lorawan']
    const isTelecomQuestion = telecomKeywords.some(kw => lower.includes(kw))
    
    if (isTelecomQuestion) {
      if (lower.includes('what is this') || lower.includes('about') || lower.includes('project about')) {
        const match = findBestMatch('telecom project')
        if (match) return match.answer
      }
      if (lower.includes('problem') || lower.includes('solve') || lower.includes('pain')) {
        const match = findBestMatch('telecom problem')
        if (match) return match.answer
      }
      if (lower.includes('signal') || lower.includes('noise')) {
        const match = findBestMatch('telecom signal')
        if (match) return match.answer
      }
      if (lower.includes('technolog') || lower.includes('tech stack') || lower.includes('tools')) {
        const match = findBestMatch('telecom tech')
        if (match) return match.answer
      }
      if (lower.includes('trams')) {
        const match = findBestMatch('telecom trams')
        if (match) return match.answer
      }
      if (lower.includes('predict') || lower.includes('failure')) {
        const match = findBestMatch('telecom predict')
        if (match) return match.answer
      }
      if (lower.includes('drone')) {
        const match = findBestMatch('telecom drone')
        if (match) return match.answer
      }
      if (lower.includes('lorawan')) {
        const match = findBestMatch('telecom lorawan')
        if (match) return match.answer
      }
      if (lower.includes('result') || lower.includes('achievement')) {
        const match = findBestMatch('telecom results')
        if (match) return match.answer
      }
      if (lower.includes('downtime') || lower.includes('down')) {
        const match = findBestMatch('telecom downtime')
        if (match) return match.answer
      }
      if (lower.includes('truck') || lower.includes('field visit') || lower.includes('technician')) {
        const match = findBestMatch('telecom truck')
        if (match) return match.answer
      }
      if (lower.includes('real-time') || lower.includes('real time') || lower.includes('monitor')) {
        const match = findBestMatch('telecom realtime')
        if (match) return match.answer
      }
      if (lower.includes('tower') || lower.includes('asset')) {
        const match = findBestMatch('telecom towers')
        if (match) return match.answer
      }
      if (lower.includes('team') || lower.includes('support') || lower.includes('control')) {
        const match = findBestMatch('telecom team')
        if (match) return match.answer
      }
      if (lower.includes('critical') || lower.includes('important') || lower.includes('essential')) {
        const match = findBestMatch('telecom critical')
        if (match) return match.answer
      }
      const match = findBestMatch('telecom project')
      if (match) return match.answer
    }

    const labsKeywords = ['labs', 'breakthru labs', 'nexus', 'nexus bd', 'agent lenz', 'lenz', 'aiops', 'co-create', 'beta']
    const isLabsQuestion = labsKeywords.some(kw => lower.includes(kw))
    
    if (isLabsQuestion) {
      if (lower.includes('labs') && (lower.includes('what') || lower.includes('about'))) {
        const match = findBestMatch('labs')
        if (match) return match.answer
      }
      if (lower.includes('product') || lower.includes('build')) {
        const match = findBestMatch('labs products')
        if (match) return match.answer
      }
      if (lower.includes('collaborate') || lower.includes('co-create') || lower.includes('submit')) {
        const match = findBestMatch('labs collaborate')
        if (match) return match.answer
      }
      if (lower.includes('nexus') && (lower.includes('what') || lower.includes('about'))) {
        const match = findBestMatch('nexus')
        if (match) return match.answer
      }
      if (lower.includes('nexus') && lower.includes('sale')) {
        const match = findBestMatch('nexus sales')
        if (match) return match.answer
      }
      if (lower.includes('dual ai') || lower.includes('research engine')) {
        const match = findBestMatch('nexus dual ai')
        if (match) return match.answer
      }
      if (lower.includes('personaliz') || lower.includes('email')) {
        const match = findBestMatch('nexus personalize')
        if (match) return match.answer
      }
      if (lower.includes('sentiment') || lower.includes('reply') || lower.includes('analyze')) {
        const match = findBestMatch('nexus sentiment')
        if (match) return match.answer
      }
      if (lower.includes('nexus') && (lower.includes('available') || lower.includes('access') || lower.includes('beta'))) {
        const match = findBestMatch('nexus available')
        if (match) return match.answer
      }
      if (lower.includes('lenz') && (lower.includes('what') || lower.includes('about'))) {
        const match = findBestMatch('agent lenz')
        if (match) return match.answer
      }
      if (lower.includes('lenz') && lower.includes('downtime')) {
        const match = findBestMatch('lenz downtime')
        if (match) return match.answer
      }
      if (lower.includes('alert') || lower.includes('correlation')) {
        const match = findBestMatch('lenz alert')
        if (match) return match.answer
      }
      if (lower.includes('war room') || lower.includes('warroom')) {
        const match = findBestMatch('lenz warroom')
        if (match) return match.answer
      }
      if (lower.includes('predict') || lower.includes('breach')) {
        const match = findBestMatch('lenz predictive')
        if (match) return match.answer
      }
      if (lower.includes('lenz') && (lower.includes('live') || lower.includes('available'))) {
        const match = findBestMatch('lenz live')
        if (match) return match.answer
      }
      if (lower.includes('submit') || lower.includes('idea')) {
        const match = findBestMatch('labs submit')
        if (match) return match.answer
      }
      if (lower.includes('detail') || lower.includes('provide')) {
        const match = findBestMatch('labs details')
        if (match) return match.answer
      }
      if (lower.includes('build') || lower.includes('create')) {
        const match = findBestMatch('labs build')
        if (match) return match.answer
      }
      if (lower.includes('ai') || lower.includes('ai based') || lower.includes('ai powered')) {
        const match = findBestMatch('labs ai')
        if (match) return match.answer
      }
      if (lower.includes('grow') || lower.includes('business')) {
        const match = findBestMatch('labs grow')
        if (match) return match.answer
      }
      if (lower.includes('technical') || lower.includes('skill')) {
        const match = findBestMatch('labs technical')
        if (match) return match.answer
      }
      if (lower.includes('try') || lower.includes('use') || lower.includes('access')) {
        const match = findBestMatch('labs try')
        if (match) return match.answer
      }
      const match = findBestMatch('labs')
      if (match) return match.answer
    }

    const bfsiKeywords = ['bfsi', 'banking', 'finance', 'financial', 'payment', 'fraud', 'compliance', 'wealth', 'credit', 'neo bank', 'digital bank', 'upi', 'open banking']
    const isBfsiQuestion = bfsiKeywords.some(kw => lower.includes(kw))
    
    if (isBfsiQuestion) {
      if (lower.includes('service') || lower.includes('provide')) {
        const match = findBestMatch('bfsi-services')
        if (match) return match.answer
      }
      if (lower.includes('digital') || lower.includes('neo')) {
        const match = findBestMatch('bfsi-digital-bank')
        if (match) return match.answer
      }
      if (lower.includes('speed') || lower.includes('fast') || lower.includes('latency')) {
        const match = findBestMatch('bfsi-transaction-speed')
        if (match) return match.answer
      }
      if (lower.includes('gateway') || lower.includes('upi') || lower.includes('payment')) {
        const match = findBestMatch('bfsi-payment-gateway')
        if (match) return match.answer
      }
      if (lower.includes('fraud') || lower.includes('detect')) {
        const match = findBestMatch('bfsi-fraud')
        if (match) return match.answer
      }
      if (lower.includes('migrate') || lower.includes('legacy') || lower.includes('cloud')) {
        const match = findBestMatch('bfsi-migration')
        if (match) return match.answer
      }
      if (lower.includes('security') || lower.includes('secure')) {
        const match = findBestMatch('bfsi-security')
        if (match) return match.answer
      }
      if (lower.includes('open') || lower.includes('api')) {
        const match = findBestMatch('bfsi-open-banking')
        if (match) return match.answer
      }
      if (lower.includes('compliance') || lower.includes('regulatory')) {
        const match = findBestMatch('bfsi-compliance')
        if (match) return match.answer
      }
      if (lower.includes('wealth') || lower.includes('investment')) {
        const match = findBestMatch('bfsi-wealth')
        if (match) return match.answer
      }
      if (lower.includes('scalable') || lower.includes('scale')) {
        const match = findBestMatch('bfsi-scalable')
        if (match) return match.answer
      }
      if (lower.includes('credit') || lower.includes('scoring')) {
        const match = findBestMatch('bfsi-credit-scoring')
        if (match) return match.answer
      }
      if (lower.includes('mobile') || lower.includes('app')) {
        const match = findBestMatch('bfsi-mobile-banking')
        if (match) return match.answer
      }
      if (lower.includes('reliable') || lower.includes('uptime')) {
        const match = findBestMatch('bfsi-reliability')
        if (match) return match.answer
      }
      if (lower.includes('customiz') || lower.includes('tailor')) {
        const match = findBestMatch('bfsi-customize')
        if (match) return match.answer
      }
    }

    const retailKeywords = ['retail', 'ecommerce', 'e-commerce', 'commerce', 'shopping', 'cart', 'inventory', 'pos', 'cdp', 'headless', 'omnichannel', 'personalization']
    const isRetailQuestion = retailKeywords.some(kw => lower.includes(kw))
    
    if (isRetailQuestion) {
      if (lower.includes('store') || lower.includes('improve')) {
        const match = findBestMatch('retail-store')
        if (match) return match.answer
      }
      if (lower.includes('sale') || lower.includes('convert')) {
        const match = findBestMatch('retail-sales')
        if (match) return match.answer
      }
      if (lower.includes('cart') || lower.includes('abandon')) {
        const match = findBestMatch('retail-cart')
        if (match) return match.answer
      }
      if (lower.includes('inventory') || lower.includes('track')) {
        const match = findBestMatch('retail-inventory')
        if (match) return match.answer
      }
      if (lower.includes('platform') || lower.includes('build')) {
        const match = findBestMatch('retail-platform')
        if (match) return match.answer
      }
      if (lower.includes('omni') || lower.includes('channel')) {
        const match = findBestMatch('retail-omnichannel')
        if (match) return match.answer
      }
      if (lower.includes('personal') || lower.includes('recommend')) {
        const match = findBestMatch('retail-personalize')
        if (match) return match.answer
      }
      if (lower.includes('price') || lower.includes('pricing')) {
        const match = findBestMatch('retail-pricing')
        if (match) return match.answer
      }
      if (lower.includes('order')) {
        const match = findBestMatch('retail-orders')
        if (match) return match.answer
      }
      if (lower.includes('scale') || lower.includes('scalable')) {
        const match = findBestMatch('retail-scale')
        if (match) return match.answer
      }
    }

    const healthcareKeywords = ['healthcare', 'health', 'medical', 'hospital', 'hipaa', 'ehr', 'clinical', 'telemedicine', 'patient', 'diagnostics']
    const isHealthcareQuestion = healthcareKeywords.some(kw => lower.includes(kw))
    
    if (isHealthcareQuestion) {
      if (lower.includes('solution') || lower.includes('provide')) {
        const match = findBestMatch('healthcare-solutions')
        if (match) return match.answer
      }
      if (lower.includes('wait') || lower.includes('time')) {
        const match = findBestMatch('healthcare-wait')
        if (match) return match.answer
      }
      if (lower.includes('compliant') || lower.includes('hipaa')) {
        const match = findBestMatch('healthcare-compliant')
        if (match) return match.answer
      }
      if (lower.includes('tele') || lower.includes('remote')) {
        const match = findBestMatch('healthcare-telemedicine')
        if (match) return match.answer
      }
      if (lower.includes('ehr') || lower.includes('record')) {
        const match = findBestMatch('healthcare-ehr')
        if (match) return match.answer
      }
      if (lower.includes('efficien') || lower.includes('throughput')) {
        const match = findBestMatch('healthcare-efficiency')
        if (match) return match.answer
      }
      if (lower.includes('ai') || lower.includes('diagnostic')) {
        const match = findBestMatch('healthcare-ai')
        if (match) return match.answer
      }
      if (lower.includes('device')) {
        const match = findBestMatch('healthcare-devices')
        if (match) return match.answer
      }
      if (lower.includes('secure') || lower.includes('safe')) {
        const match = findBestMatch('healthcare-secure')
        if (match) return match.answer
      }
    }

    const travelKeywords = ['travel', 'hospitality', 'hotel', 'booking', 'tourism', 'reservation', 'loyalty', 'guest', 'revenue']
    const isTravelQuestion = travelKeywords.some(kw => lower.includes(kw))
    
    if (isTravelQuestion) {
      if (lower.includes('booking') || lower.includes('build')) {
        const match = findBestMatch('travel-booking')
        if (match) return match.answer
      }
      if (lower.includes('revenue') || lower.includes('income')) {
        const match = findBestMatch('travel-revenue')
        if (match) return match.answer
      }
      if (lower.includes('reservation') || lower.includes('reserve')) {
        const match = findBestMatch('travel-reservations')
        if (match) return match.answer
      }
      if (lower.includes('loyalty') || lower.includes('program')) {
        const match = findBestMatch('travel-loyalty')
        if (match) return match.answer
      }
      if (lower.includes('personal') || lower.includes('guest')) {
        const match = findBestMatch('travel-personalize')
        if (match) return match.answer
      }
      if (lower.includes('mobile') || lower.includes('app')) {
        const match = findBestMatch('travel-mobile')
        if (match) return match.answer
      }
      if (lower.includes('pricing') || lower.includes('price')) {
        const match = findBestMatch('travel-pricing')
        if (match) return match.answer
      }
      if (lower.includes('satisf') || lower.includes('rating')) {
        const match = findBestMatch('travel-satisfaction')
        if (match) return match.answer
      }
      if (lower.includes('scale') || lower.includes('scalable')) {
        const match = findBestMatch('travel-scale')
        if (match) return match.answer
      }
      if (lower.includes('reliable') || lower.includes('reliability')) {
        const match = findBestMatch('travel-reliable')
        if (match) return match.answer
      }
    }

    if (!isRelevantQuestion(question)) {
      return 'I can only answer questions about breakthru.ai — our services, industries, products, ecosystem partners, careers, and how we work. Please ask about something related to our company or services.'
    }

    const match = findBestMatch(question)
    
    if (match) {
      return match.answer
    }
    
    if (lower.includes('price') || lower.includes('cost') || lower.includes('pricing')) {
      const priceMatch = findBestMatch('pricing')
      if (priceMatch) return priceMatch.answer
    }
    
    if (lower.includes('job') || lower.includes('career') || lower.includes('hire')) {
      const careerMatch = findBestMatch('careers')
      if (careerMatch) return careerMatch.answer
    }

    return 'I understand you\'re asking about breakthru.ai, but I want to give you the most accurate answer. Try asking about our services (Strategy, Data & AI, Engineering, Growth, Product Squads, Family Office), industries (BFSI, Manufacturing, Telecom, Retail, Healthcare, Travel), ecosystem partners (Databricks, Snowflake, Google Cloud), or products (Nexus BD, Agent Lenz).'
  }

  const handleSend = () => {
    const text = input.trim()
    if (!text) return
    setMessages(prev => [...prev, { role: 'user', text }])
    setInput('')
    setIsTyping(true)
    setTimeout(() => {
      const answer = findAnswer(text)
      setMessages(prev => [...prev, { role: 'bot', text: answer }])
      setIsTyping(false)
    }, 600)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleNewChat = () => {
    setMessages([{ role: 'bot', text: 'Hi! Im the breakthru.ai assistant. We are the Digital Fabric—a hybrid of high-end consulting and deep engineering. We Architect, Build, and Run. Ask me anything about our services or industries!' }])
    setInput('')
    setIsTyping(false)
  }

  const [activeTab, setActiveTab] = useState('default')

  const isSidebar = variant === 'sidebar'

  return (
    <div className={isSidebar ? 'cb-sidebar' : 'cb-shell'}>
      {!isSidebar && <div className="cb-glow" />}

      <div className={`cb-card ${isSidebar ? 'cb-card-sidebar' : ''}`}>
        <header className="cb-header">
          <div className="cb-header-left">
            <BotAvatar size="md" />
            <div className="cb-header-info">
              <span className="cb-title">AI Assistant</span>
              <span className="cb-status">
                <span className="cb-status-dot" />
                Online
              </span>
            </div>
          </div>

          <div className="cb-header-actions">
            <button
              onClick={() => setIsMuted(p => !p)}
              className={`cb-icon-btn ${isMuted ? 'cb-icon-btn-danger' : ''}`}
              title={isMuted ? 'Unmute voice' : 'Mute voice'}
            >
              {isMuted ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 010 14.14" />
                  <path d="M15.54 8.46a5 5 0 010 7.07" />
                </svg>
              )}
            </button>
          </div>
        </header>

        <div className="cb-tabs">
          <button
            className={`cb-tab ${activeTab === 'default' ? 'active' : ''}`}
            onClick={() => setActiveTab('default')}
          >
            Chat Bot
          </button>
          <button
            className={`cb-tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
        </div>

        {activeTab === 'default' ? (
          <>
            <div className="cb-messages" ref={messagesContainerRef}>
              {messages.map((msg, i) => (
                <div key={i} className={`cb-msg cb-msg-${msg.role}`} style={{ animationDelay: `${i * 0.04}s` }}>
                  {msg.role === 'bot' && <BotAvatar size="sm" />}
                  <div className={`cb-bubble cb-bubble-${msg.role}`}>
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            <div className="cb-input-area">
              <div className="cb-input-wrap">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about our services..."
                  className="cb-input"
                />
                <button onClick={handleSend} className="cb-send" title="Send">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
              <div className="cb-powered">Powered by breakthru.ai</div>
            </div>
          </>
        ) : (
          <div className="cb-experience-placeholder">
            <div className="cb-exp-icon">🚀</div>
            <h3 className="cb-exp-title">Experience Bot is under development</h3>
            <p className="cb-exp-desc">
              We're building something exciting. Stay tuned!
            </p>
            <button className="cb-exp-btn" disabled>Coming Soon</button>
          </div>
        )}
      </div>
    </div>
  )
}
