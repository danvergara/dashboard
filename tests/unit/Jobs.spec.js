import { mount } from '@vue/test-utils';
import Jobs from '@/components/Jobs.vue';
import axios from 'axios';

// Mock the axios library
jest.mock('axios');

// Spy the console error
global.console.error = jest.fn();

describe('Jobs.vue Test with successful HTTP GET', () => {
  let wrapper = null;

  beforeEach(() => {
    const responseGet = {
      data: {
        jobs: [
          {
            id: '028821db-1f83-4ba2-876f-7ec065b69138',
            type: 'Full Time',
            url: 'https://jobs.github.com/positions/028821db-1f83-4ba2-876f-7ec065b69138',
            created_at: 'Wed Aug 19 13:53:39 UTC 2020',
            company: 'AMORELIE',
            company_url: 'https://www.amorelie.de/',
            location: 'Berlin',
            title: 'Lead Software Engineer (f/m/x)',
            description: '<p>With AMORELIE we have changed an entire industry and brought love life as an integral part of a happy relationship into the middle of society. We burn for fulfilled relationships and want to do our part with great love toys, lingerie and many other inspiring lifestyle products. With us, you will find a combination of ambitious ideas, an entrepreneurial team, a unique corporate culture and an incredible energy and euphoria for our mission. We are a successful, profitable Berlin start-up with over 130 employees and a lot of love, which defines the relationships of tomorrow!</p>\n\n<p>Wir haben mit AMORELIE eine ganze Branche verändert und das Liebesleben als integralen Bestandteil einer glücklichen Beziehung in die Mitte der Gesellschaft geholt. Wir brennen für erfüllte Beziehungen und wollen unseren Teil mit tollen Love Toys, Dessous und vielen weiteren inspirierenden Lifestyle Produkten dazu beitragen. Bei uns triffst du auf eine Kombination aus ambitionierten Ideen, einem unternehmerischen Team, einer einzigartigen Unternehmenskultur und einer unglaublichen Energie und Euphorie für unsere Mission. Wir sind ein erfolgreiches, profitables Berliner Startup mit über 130 Mitarbeitern und viel Liebe, welches die Beziehungen von morgen definiert!</p>\n<p><strong>Job ToDos</strong></p>\n<ul>\n<li>Together with our Director IT and our engineering teams, you improve and maintain our system landscape and architecture by designing and implementing technical solutions for our entire stack</li>\n<li>You work closely with our in-house and distributed team of engineers and you are committed to continuously improve our systems, development practices and agile development processes</li>\n<li>You collaborate in technical reviews to strengthen our architecture and system designs</li>\n<li>You provide technical guidance by coaching our teams on technical skills, best practices and coding guidelines</li>\n<li>You partner closely with the product team to work towards the products vision</li>\n</ul>\n<p><strong>Our Tech Stack:</strong></p>\n<ul>\n<li>Magento 2 cloud architecture</li>\n<li>In-house Ruby on Rails CRM</li>\n<li>Kubernetes cluster for application deployment</li>\n</ul>\n<p><strong>Skills</strong></p>\n<ul>\n<li>You have several years of experience in Software Engineering, most of it developing PHP and Ruby on Rails applications</li>\n<li>Ideally, you have worked in eCommerce before</li>\n<li>You have strong experience in building APIs</li>\n<li>You have experience with Cloud architecture (AWS)</li>\n<li>You live agile development processes</li>\n<li>You set high standards in regards to code quality and test automation</li>\n<li>You are a team player, curious and proactive in proposing new technical solutions</li>\n<li>You love having ownership and you are reliable lead engineer</li>\n<li>You have strong communication skills with technical and non-technical colleagues</li>\n<li>You are fluent in English (written and spoken)</li>\n</ul>\n<p><strong>AMORELIE Benefits</strong></p>\n<ul>\n<li>An international team with highly motivated employees and an open feedback culture that ensures that you can develop your full potential with us</li>\n<li>Challenging projects with a lot of entrepreneurial scope, which you and your teams can drive forward on your own responsibility</li>\n<li>We are sitting in a bright open-plan office, near S+U Gesundbrunnen</li>\n<li>Free drinks, fresh fruit and a full fridge with treats</li>\n<li>Keep fit and benefit from our discounted membership with the Urban Sports Club</li>\n<li>... and of course exclusive discounts on our sensual assortment</li>\n</ul>\n<p><img src="https://camo.githubusercontent.com/bceebcd214fbbb7e85e2b1cd93399fc98b780e7c/68747470733a2f2f747261636b696e672e676f686972696e672e636f6d2f682f37383931653536323063633638633665366537313832653738356532653533353861356630303334326335303938663937643465646131313565343433346536"></p>\n',
            how_to_apply: '<p><a href="https://tracking.gohiring.com/h/7937d2291011565ae18ac321f0acbb917f06a47f3f9819ec6d9dfe29678d1327">application form</a></p>\n',
            company_logo: 'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbStJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c67b95c08dd6189dd39d6ff215771c8eba36929f/Amorelie.png',
          },
          {
            id: '6a8f9e95-0591-4c1e-b309-a9057dc676f3',
            type: 'Full Time',
            url: 'https://jobs.github.com/positions/6a8f9e95-0591-4c1e-b309-a9057dc676f3',
            created_at: 'Tue Aug 11 22:09:15 UTC 2020',
            company: 'AiCure',
            company_url: 'http://www.aicure.com',
            location: 'Remote',
            title: 'Software Engineer - Full Stack',
            description: '<p><strong>Description</strong></p>\n<p>Headquartered in New York City, AiCure produces mobile and cloud-based applications that leverage Computer Vision and Machine Learning to assist pharmaceutical &amp; healthcare businesses to improve drug development and population health.</p>\n<p>When patients use our apps, information on their medication intake is recorded, which allows stakeholders to gain insights and to take actions (patient alerts, etc.). Our apps identify the patient (face verification), verify that patients are taking the right medication (pill recognition), and that they are actually taking their medication (action recognition).</p>\n<p>As a Full Stack engineer, you’ll architect and build product features from the database all the way to the UI. You’ll collaborate closely with colleagues in Design and Product. Working in a small, cross functional team, your work will have significant impact on healthcare for everyone on the planet! Experience in healthcare is NOT required.</p>\n<p><strong>Key responsibilities</strong></p>\n<ul>\n<li>Design, implement, launch, and maintain highly visible and scalable services and applications.</li>\n<li>Analyze and improve efficiency, scalability, and stability of current system.</li>\n<li>Build and improve production monitoring.</li>\n<li>Write unit tests and documentation.</li>\n<li>Write well designed, testable, efficient code by using best software development practices.</li>\n<li>Stay abreast of best trends by researching new tools, as well as enhancing and further developing existing solutions.</li>\n<li>A passion for performance, debugging and benchmarking.</li>\n</ul>\n<p><strong>Requirements</strong></p>\n<ul>\n<li>Bachelor’s degree in Computer Science or equivalent experience.</li>\n<li>Experience with modern JavaScript/Angular 2 coding, testing, debugging, and automation techniques.</li>\n<li>Experience with Java and the Spring Framework.</li>\n<li>Experience in building and maintaining microservices.</li>\n<li>Solid expertise with algorithms and design patterns.</li>\n<li>Deliver testable, maintainable, and high-quality code.</li>\n<li>Experience in working with cloud services (preferably AWS) and client-server applications.</li>\n<li>Excellent analytical and problem-solving skills, and can communicate your ideas, especially to those not technologically proficient.</li>\n<li>Value team success over personal success.</li>\n<li>Hold yourself and others accountable.</li>\n<li>Experience with Ruby on Rails a plus.</li>\n</ul>\n<p><strong>Philosophy</strong></p>\n<p>Our selection process is highly competitive because we only hire the best, most enthusiastic candidates. Openness, flexibility, creativity, ownership, and accountability are our main pillars. We love solving challenging problems and creating solutions that have real impact on people- at scale.</p>\n<p><strong>Impact</strong></p>\n<p>Were on a mission to revolutionize healthcare and when you join us, youll have the opportunity of having real, tangible impact not only on individuals directly using our technology, but also on how drugs are tested and brought to market across the world. That means everyone on the planet will benefit from what you do. Youll be inspired every day because youll be making a real difference and youll see it happen. In real time and at scale.</p>\n<p><strong>People</strong></p>\n<p>Youll work with brilliant, positive people who thrive in an interdisciplinary, multi-cultural environment, and are curious, creative, and focused on executing our mission. Youll be up to speed in the the most recent advances in Artificial Intelligence (Machine Learning, Computer Vision, Big Data) while solving challenging problems that must take into account many fascinating aspects of human psychology and behavior. Youll work with Scientists, Engineers, Designers, and Medical Doctors, to create innovative products that scale in an environment that encourages learning, collaboration, and growth.</p>\n',
            how_to_apply: '<p><a href="https://aicure.com/careers/#find-jobs">https://aicure.com/careers/#find-jobs</a></p>\n',
            company_logo: 'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZytJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d4ed23a802ae86b1d9731ec74faf7eed656b0faf/AiCure_Standard.png',
          },
          {
            id: '52d0e388-e3e4-4bb6-9aa4-244d3dbf00bc',
            type: 'Full Time',
            url: 'https://jobs.github.com/positions/52d0e388-e3e4-4bb6-9aa4-244d3dbf00bc',
            created_at: 'Tue Aug 11 15:53:19 UTC 2020',
            company: 'OpSourced',
            company_url: 'http://www.opsourced.com',
            location: 'REMOTE',
            title: 'Senior / Lead DevOps Engineer',
            description: '<p>OpSourced is a team of DevOps Experts providing Managed DevOps, DevOps-as-a-Service, Lift &amp; Shift Operations, and project based DevOps consulting for companies around the globe. We help companies adopt DevOps practices and give our customers the ability to reach out to us like they would an internal team.</p>\n<p>Youll work with all the major cloud providers while managing fleets of instances and containers, along with their automation, orchestration, monitoring, and alert response. If youve ever wanted to work at a scale that few companies do, youll find the right challenge here with us!</p>\n<p>Minimum Qualifications :</p>\n<ul>\n<li>Mastery of at Least one Programming language.  (preference to Ruby)</li>\n<li>Understanding of application and infrastructure best practices.</li>\n<li>Database Administration, Management, and Troubleshooting Experience.</li>\n<li>Experience with config management and automation frameworks. (i.e. Ansible / Terraform / CloudFormation)</li>\n<li>Experience managing Containers and Kubernetes in a Production Environment.</li>\n<li>Experience with CI / CD Pipelines in a Production Environment.</li>\n<li>Experience maintaining production infrastructure in a Linux Environment.</li>\n<li>Experience maintaining production infrastructure in one or more major cloud providers.  (AWS, GCP, Azure)</li>\n<li>Strong DevOps Experience and Customer Service mindset.</li>\n<li>Ability to participate in on-call/pager rotation.</li>\n<li>Lead and Mentor Junior DevOps Engineers.</li>\n<li>Develop and implement Policies and Procedures for internal best practices.</li>\n<li>Create Blog Posts, attend, and speak at conferences as a representative of OpSourced. (as possible)</li>\n<li>U.S. Residents Only.</li>\n</ul>\n',
            how_to_apply: '<p>Reach out to us at <a href="mailto:hiring@opsourced.com">hiring@opsourced.com</a> with what you can bring to the team!</p>\n',
            company_logo: 'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ0dJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--be13148ea23a7987e9fdd00a6bee8dd90d485f07/OPSourced_Logo_PNG.png',
          },
          {
            id: '202228a1-a793-447d-861d-6c6a38e1cfef',
            type: 'Full Time',
            url: 'https://jobs.github.com/positions/202228a1-a793-447d-861d-6c6a38e1cfef',
            created_at: 'Wed Aug 05 20:54:41 UTC 2020',
            company: 'SmartFinancial.com',
            company_url: 'http://www.smartfinancial.com',
            location: 'Remote',
            title: 'Full Stack Engineer',
            description: '<p>Voted as one of the Best Places to Work and one of the fastest-growing tech companies!</p>\n<p>SmartFinancial is a leading insurance technology company working on building tools to make the insurance shopping process better, simpler, and more effective. ﻿We are experiencing exponential growth so we are seeking a Full-Stack Engineer to help us maintain our growth by improving and adding new features to our current code bases as well as build new applications that will help us move forward with new products and services.</p>\n<p>Our immediate need is to help solidify our existing applications by cleaning up code bases as well as adding additional test coverage. In addition, we have a growing need to harness various workflows and processes for both internal staff as well as our public-facing business – that is to say you will help from idea generation through project completion on new application development.</p>\n<p>We are a small engineering team based in Newport Beach, CA and Columbus, OH. We prefer someone who can work at our offices but are willing to fill this position with a remote candidate. What matters most to us is finding someone who is professional and mature and requires as little oversight as needed in terms of management.</p>\n<p>A typical week will start off with a quick meeting to review the current iteration and plan out the week. Thereafter, we are heads down and work on our tasks via our project management system and conventions. We are looking for a person who not only can grok the job at hand but know the best approach to doing it right. We are primarily a Rails shop but have some JS apps as well, so we’ll want a person who is very knowledgeable on Rails best practices from coding to hosting.</p>\n<p>We focus on results and would rather allow freedom of leading a project as a professional vs. having to be managed the entire way. ﻿</p>\n<p>Duties and Responsibilities:</p>\n<ul>\n<li>Work closely with the Design and Development team to create high-quality web apps</li>\n<li>Design and develop testable production-level code</li>\n<li>Write effective and powerful APIs</li>\n<li>Develop efficient algorithms and data-structures to improve key business logic and processes</li>\n<li>Research and provide alternatives to existing development practices, tools, etc.</li>\n<li>Optimize web pages and back-end UIs</li>\n<li>Modify existing software to correct errors, or to improve its performance</li>\n<li>Develop and direct software system testing and validation procedures, programming, and technical documentation</li>\n</ul>\n<p>Job Requirements</p>\n<ul>\n<li>Experience: 4-6 years in a production environment</li>\n<li>Ability to communicate clearly both verbally and text</li>\n<li>Have a strong sense of awareness of our business and how you are contributing to it</li>\n<li>Self-Motivated – we seek mature professionals vs. people who need to be micromanaged</li>\n<li>Be available for meetings weekly to cover existing and upcoming projects</li>\n</ul>\n<p>Technical Requirements</p>\n<ul>\n<li>Language/Frameworks: Ruby on Rails, Ruby, JavaScript, Node, Angular</li>\n<li>Testing: RSpec, Capybara, Jasmine</li>\n<li>Database: MySQL, Redis, Mongo</li>\n<li>OS: Linux, Bash, MacOS</li>\n<li>Utility: Git, AWS</li>\n<li>Front-End: Bootstrap, CSS, HTML5</li>\n</ul>\n<p>Bonus Items:</p>\n<ul>\n<li>DevOps: Ansible, Chef, Jenkins we may many hats so if you’re comfortable with provisioning servers and being in a shell environment you’ll have an extra edge.</li>\n<li>CI Systems: Semaphore</li>\n</ul>\n<p>﻿WHAT WE OFFER</p>\n<ul>\n<li>Competitive Pay</li>\n<li>401k with Company Match\n﻿- Health Insurance</li>\n<li>Stock Option</li>\n<li>Weekly team lunches</li>\n<li>Advancement opportunities - we promote within</li>\n<li>Remote Position</li>\n</ul>\n<p>﻿If you are looking for a challenge, yet have the freedom to work as you need as a professional then send us your resume, Github, and sample work.﻿</p>\n',
            how_to_apply: '<p>email your resume to <a href="mailto:lev@smartfinancial.com">lev@smartfinancial.com</a></p>\n',
            company_logo: 'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcENIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--42577c53350abffb4fc6aa57cd6e185ed9cdbdd8/new_logo%20(1).png',
          },
          {
            id: '421871bb-05d3-4fbe-b00c-3f372fa35584',
            type: 'Full Time',
            url: 'https://jobs.github.com/positions/421871bb-05d3-4fbe-b00c-3f372fa35584',
            created_at: 'Tue Aug 04 17:23:12 UTC 2020',
            company: 'Sticker Mule',
            company_url: 'https://www.stickermule.com/careers',
            location: 'Anywhere',
            title: 'Javascript Engineer',
            description: '<p><strong>About Sticker Mule</strong></p>\n<p>Sticker Mule is the Internets most "kick ass" brand. We are privately-owned, profitable, and powered by a  globally distributed team who cares deeply about delivering a great customer experience at the highest technical standards. Our software team operates from 17 countries, and were always looking for more exceptional engineers.</p>\n<p>The Software team is responsible for building and maintaining our front-end and back-end services, developing new features and products, and troubleshooting problems.</p>\n<p><strong><a href="https://www.stickermule.com/about">See more about our teams here</a></strong></p>\n<p><strong>We offer</strong></p>\n<ol>\n<li>Remote work with flexible schedules</li>\n<li>Varied, interesting technical challenges to solve</li>\n<li>A fun "no bullshit" work environment</li>\n</ol>\n<p><strong>We like you to know</strong></p>\n<ol>\n<li>Docker</li>\n<li>NextJS</li>\n<li>React</li>\n<li>NodeJS</li>\n<li>GraphQL</li>\n<li>Postgres</li>\n<li>Redis</li>\n<li>Familiarity with Ruby</li>\n<li>Excellent communication skills (English)</li>\n<li>Degree in Computer Science or equivalent practical experience</li>\n</ol>\n<p><strong>Compensation and benefits</strong></p>\n<ol>\n<li>$99,000-$135,000+</li>\n<li>$10,000 signing bonus</li>\n<li>4 weeks vacation</li>\n</ol>\n',
            how_to_apply: '<p><strong>Apply here only:</strong> <a href="https://www.stickermule.com/career/7e6bb5ee-9953-4d46-b008-77a3bbc4ee29">https://www.stickermule.com/career/7e6bb5ee-9953-4d46-b008-77a3bbc4ee29</a></p>\n',
            company_logo: 'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3VIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--04344d944b21465d33ecd7bd62098692640a8658/herman%206.jpg',
          },
          {
            id: '9511ee69-6ab5-4a98-86cf-d29d1fb2ff83',
            type: 'Full Time',
            url: 'https://jobs.github.com/positions/9511ee69-6ab5-4a98-86cf-d29d1fb2ff83',
            created_at: 'Tue Aug 04 16:21:07 UTC 2020',
            company: 'Sticker Mule',
            company_url: 'https://www.stickermule.com/careers',
            location: 'Anywhere',
            title: 'Site Reliability Engineer',
            description: '<p><strong>About Sticker Mule</strong></p>\n<p>Sticker Mule is the Internets most "kick ass" brand. We are privately-owned, profitable, and powered by a  globally distributed team who cares deeply about delivering a great customer experience at the highest technical standards. Our software team operates from 17 different countries, and were always looking for more exceptional engineers.</p>\n<p>The SRE team is responsible for the reliability and performance of our cloud infrastructure, the continuous integration and delivery pipelines, and the development tools used to build our services.</p>\n<p><strong><a href="https://www.stickermule.com/about">See more about our teams here</a></strong></p>\n<p><strong>We offer</strong></p>\n<ol>\n<li>Remote work with flexible schedules</li>\n<li>Varied, interesting technical challenges to solve</li>\n<li>A fun "no bullshit" work environment</li>\n</ol>\n<p><strong>We like you to know</strong></p>\n<ol>\n<li>Linux</li>\n<li>Docker</li>\n<li>Kubernetes</li>\n<li>GCP/AWS</li>\n<li>Postgres</li>\n<li>MySQL</li>\n<li>Redis</li>\n<li>Go</li>\n<li>Familiarity with Ruby/JS/Python</li>\n<li>Availability for on-call schedule</li>\n<li>Excellent communication skills (English)</li>\n<li>Degree in Computer Science or equivalent practical experience</li>\n</ol>\n<p><strong>Compensation and benefits</strong></p>\n<ol>\n<li>$99,000-$135,000+</li>\n<li>$10,000 signing bonus</li>\n<li>4 weeks vacation</li>\n</ol>\n',
            how_to_apply: '<p><strong>Apply here only:</strong> <a href="https://www.stickermule.com/career/da8cef1b-b9fa-45c5-9e9d-a3c975e0aca2">https://www.stickermule.com/career/da8cef1b-b9fa-45c5-9e9d-a3c975e0aca2</a></p>\n',
            company_logo: 'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3FIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--65d9aab4ef72c61e9d66a644f2a61ee29ee71924/herman%206.jpg',
          },
          {
            id: 'df4c0214-e31f-4bed-9d8c-3222c35ac914',
            type: 'Full Time',
            url: 'https://jobs.github.com/positions/df4c0214-e31f-4bed-9d8c-3222c35ac914',
            created_at: 'Tue Aug 04 00:28:28 UTC 2020',
            company: 'Car Registration, inc. ',
            company_url: 'http://www.carregistration.com',
            location: 'Elk Grove, CA',
            title: 'Software Engineer',
            description: '<p>Car Registration, Inc.</p>\n<p>Car Registration, Inc. (CRI) provides comprehensive, on-line vehicle registration and titling services for consumers who desire or need a DMV alternative.  Currently licensed and bonded under the California DMV’s Business Partner Automation program, CRI successfully processes over 250,000 transactions per year while reducing wait times and allowing the CA DMV to reallocate its resources to other services and administrative tasks.  With CRI, customers can get same-day processing, next day delivery and comprehensive telephone and email support.  Through its website, CRI collects fees from vehicle owners, transmits fees to the DMV in real time and issues registration cards and stickers to the customer via USPS or express courier.</p>\n<p>Job Description\nCRI, is a leader in providing consumers direct access to DMV services through our online technology. We provide customers the ability to skip the line at the DMV by using our online platform to renew, replace, or transfer their vehicle registration and title. You will join a small but profitable start-up with the ability to shape and grow our software. We are looking for a self-motivated developer that is comfortable working on a cloud-based full stack built with Go, PHP, and JavaScript for both customer-facing and internal applications. In your role, you will join a small team of software developers to build new software, new features, and maintain existing functionality.</p>\n<p>This is a full-time remote position with competitive salary and benefits including medical, dental, vision, 401K plan and more. We are based in Elk Grove, CA. Though you won’t work in the office, we regularly communicate via Slack and Google Meets. Our annual holiday party is fun and inclusive and offers a great opportunity to catch-up with the team in person.</p>\n<p>Skills &amp; Requirements\n1+ year professional coding with Golang\n3+ years professional coding with PHP, Python, Ruby, or another server-side scripting language\n2+ years professional coding with JavaScript\n3+ years professional experience using a SQL database such as PostgreSQL, MySQL, Oracle, or MSSQL\nExperience integrating RESTful and/or gRPC APIs\nAbility to design and implement solutions to both frontend and backend problems from a non-technical specification into a finished feature\nExposure to DevOps practices including infrastructure as code, continuous integration, monitoring, and logging\nComfortable developing in a Mac or Linux environment\nFamiliarity with event-based functional architectures\nFamiliarity with MVC or MVVM architectures\nSecurity-conscious practices in any software built</p>\n<p>Desirable Qualifications\nExperience with cloud-based distributed systems on providers such as AWS\nExperience with docker or container technologies\nExperience with CDNs\nExperience developing web-based business applications with complex workflows\nDatabase administration experience including setting up and maintaining replication servers\nBachelor’s degree, preferably in Computer Science or related discipline</p>\n<p>If you are interested, please send your resume to <a href="mailto:Jobs@carregistration.com">Jobs@carregistration.com</a>.</p>\n<p>CANDIDATES only please.</p>\n<p>Equal Opportunity Employer\nCRI is an equal opportunity employer to all, regardless of age, ancestry, color, disability (mental and physical), exercising the right to family care and medical leave, gender, gender expression, gender identity, genetic information, marital status, medical condition, military or veteran status, national origin, political affiliation, race, religious creed, sex (includes pregnancy, childbirth, breastfeeding and related medical conditions), and sexual orientation.</p>\n<p>It is an objective of CRI to achieve a drug-free workplace. Any applicant for  employment will be expected to behave in accordance with this objective.</p>\n',
            how_to_apply: '<p>If you are interested, please send your resume to <a href="mailto:Jobs@carregistration.com">Jobs@carregistration.com</a>.</p>\n',
            company_logo: 'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbG1IIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--72882d4c37d2fd5cf977485d033eeaafee596f34/CarRegistration_Logo-02.png',
          },
          {
            id: '208271fd-c8f4-4e50-a2e0-adef58bb9ef0',
            type: 'Full Time',
            url: 'https://jobs.github.com/positions/208271fd-c8f4-4e50-a2e0-adef58bb9ef0',
            created_at: 'Thu Jul 30 14:28:18 UTC 2020',
            company: 'i22 Digitalagentur GmbH',
            company_url: 'https://www.i22.de/',
            location: 'Bonn',
            title: 'Software Developer (m/w/x) – Ruby on Rails & Elixir (Remote)',
            description: '<h2><strong>WIR SUCHEN:</strong></h2>\n<h2><strong>SOFTWARE DEVELOPER (M/W/X) – RUBY ON RAILS &amp; ELIXIR (REMOTE)</strong></h2>\n<p>Wir bieten Dir eine fantastische Teamkultur, freie Sprachen- &amp; Frameworkwahl und eine moderne Arbeitsumgebung</p>\n<h2><strong>DAS UNTERNEHMEN</strong></h2>\n<p>Wir sind die Agentur für eine softwarebasierte Welt. Unsere DNA ist zu 100 % digital – wir konzipieren, designen und entwickeln technologiegetriebene Produkte und Services für die digitale Zukunft und helfen Unternehmen, wie eine moderne Software Company zu denken.</p>\n<h2><strong>DIE STELLE</strong></h2>\n<p>Wir suchen einen ambitionierten Software-Entwickler, der für sein Fachgebiet brennt. Dabei ist uns egal, ob Du Autodidakt, Student, graduiert oder Professional bist: Für uns zählen Motivation, Kompetenz und Einsatz. Wir bieten Dir ein attraktives Gehalt plus Erfolgsbeteiligung, hervorragende Entwicklungsmöglichkeiten und eine wunderbare Teamkultur. Bei uns zählt nicht von wo du arbeitest, sondern nur, was du kannst.</p>\n<h2><strong>NEUES DENKEN:</strong></h2>\n<p>Umsetzungsfreiheit mit freier Sprachen- &amp; Frameworkwahl</p>\n<h2>​\n<strong>NEUES ARBEITEN:</strong>\n</h2>\n<p>Vertrauensarbeitszeit, freie Wahl des Arbeitsortes, moderne Organisationsprinzipien, ein sympathisches und versiertes Team</p>\n<h2><strong>NEUE TOOLS:</strong></h2>\n<p>Office mit Top-Ausstattung, freie Wahl Deiner Hard- und Software</p>\n<h2><strong>DU BRINGST MIT</strong></h2>\n<ul>\n<li>sehr gute Kenntnisse in Ruby on Rails, Phoenix (Elixir)</li>\n<li>gute Expertise im Bereich Datenbanken (bspw, PostgreSQL, MySQL, Redis, Elasticsearch etc.)</li>\n<li>idealerweise Erfahrung mit gängigen Test-Frameworks (z.B. RSpec, Minitest, ExUnit etc.) und Versionierung Git/Gitlab</li>\n<li>Bonus: Als Full-Stack-Developer besitzt Du zusätlich gute Kenntnisse in Vue.js oder React, inklusive JavaScript, HTML und CSS\n​</li>\n</ul>\n<h2><strong>DU BIST VERANTWORTLICH FÜR</strong></h2>\n<p>Konzeption und Entwicklung von komplexen Software- und E-Commerce-Lösungen, Software-Systemen, Intranet-Anwendungen und Schnittstellen</p>\n<h2><strong>DER STANDORT</strong></h2>\n<p>Um dir unnötiges Pendeln zu ersparen, kannst du gerne bequem von zu Hause oder unterwegs arbeiten. Du entscheidest, von wo du arbeitest!</p>\n<p>Die Agentur selbst befindet sich in direkter Nähe zum Rheinufer und bietet eine hervorragende Verkehrsanbindung und Infrastruktur.</p>\n<h2><strong>WARUM DU DICH NOCH HEUTE BEI UNS BEWERBEN SOLLTEST</strong></h2>\n<ul>\n<li>Attraktives Gehalt plus Erfolgsbeteiligung</li>\n<li>Ein Team, mit dem man auch nach Feierabend noch ein Bier trinken kann</li>\n<li>Vertrauensarbeitszeit und komplette Flexibilität in der Wahl deines Arbeitsorts\n​</li>\n</ul>\n<h2><strong>DU WILLST DABEI SEIN?</strong></h2>\n<p>Dann schicke Deine Bewerbung mit Gehaltswunsch, einer umwerfenden Referenz und dem nächstmöglichem Starttermin über den <strong>Bewerben-Button</strong>, an <a href="mailto:jobs@i22.de">jobs@i22.de</a> oder nutze unser Online-Tool .</p>\n<p><a href="https://vonq.io/3fbcpeW">Klick hier um zum Bewerbungsformular zu gelangen!</a></p>\n<p>DEIN KONTAKT\nNina Cöster\nDirector HR\n+49 228 9498354</p>\n',
            how_to_apply: '<p><a href="https://vonq.io/3fbcpeW">Klick hier um zum Bewerbungsformular zu gelangen!</a></p>\n',
            company_logo: 'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdnFHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c31caf0666b587ddd248ec6a28ac3a14a51d20e0/companyLogo-i22-profilepic@3x%20(1).jpg',
          },
          {
            id: '2231d64f-e79b-4036-8601-24b2717b2896',
            type: 'Full Time',
            url: 'https://jobs.github.com/positions/2231d64f-e79b-4036-8601-24b2717b2896',
            created_at: 'Thu Jul 30 10:16:14 UTC 2020',
            company: 'Superlist',
            company_url: 'https://superlistapp.com/',
            location: 'Remote',
            title: 'Senior Fullstack / Flutter Developer (m/f/d)',
            description: '<p><strong>ABOUT THE JOB</strong></p>\n<p>We are looking for new team members to work on and contribute to the new Superlist app’s mobile and desktop applications. A substantial part of the early stage of this job will be to explore various technologies and build prototypes, to evaluate possible long term solutions for our client apps and the entire tech stack. You will be working in an international, remote team of talented and experienced engineers and closely with the product &amp; design teams. You’ll get a chance to contribute to our early-stage product and will be able to influence and shape a new, innovative productivity platform from the ground up. The team will follow common principles and understandings of what good code looks like. We value positive work ethics, a high level of self-organization, and self-governance in our development team.</p>\n<p><strong>YOUR PROFILE</strong></p>\n<ul>\n<li>You have deep knowledge and are intrinsically motivated to build great mobile and/or desktop apps</li>\n<li>You have a customer-first approach, understanding that every detail in an application is there to provide a great experience for our end-users and that its our responsibility to be the users advocate</li>\n<li>You agree that communication skills are as important as technical knowledge</li>\n<li>Having experience in Flutter and Dart is a plus</li>\n<li>Knowledge of complex data processing systems using Go, Node.js, Ruby or Java</li>\n<li>Its a plus if you have experience in either .NET, Swift or Java/Kotlin for native applications (desktop and mobile)</li>\n<li>You are willing and experienced to help investigate and prototype potential, scalable backend solutions</li>\n<li>You are willing to try, push and explore new technologies</li>\n<li>You are able to break down large projects into digestible parts and to present viable options for each component</li>\n<li>You are fluent in English</li>\n<li>You are able to work at hours between CET and PT.</li>\n</ul>\n<p>Experience in Flutter and Dart is not required. We expect senior developers to be able to pick up a new language and we will have a team that helps you to get there quickly.</p>\n<p><strong>ABOUT THE TEAM</strong></p>\n<p>Were a team of highly motivated people that came together to challenge how collaboration and team management software works. Our team is a remote-first, international and experienced group of individuals. We value self-organization and taking over responsibilities and new challenges. Our goal is to constantly evolve and redefine our development process, challenge technical decisions, and push the boundaries to make sure we build the best product possible.</p>\n<p>We work flexible hours, believe in a healthy work/life balance, and will allow working remotely. We require you to be a full-time employee, but we can discuss reduced workweeks.</p>\n<p><strong>ABOUT SUPERLIST</strong></p>\n<p>Some of us worked on Wunderlist in the past, you can <a href="https://www.theverge.com/2020/5/5/21248121/wunderlist-microsoft-to-do-office365-superlist">read a little about our journey</a>. Superlist will challenge the status quo of team productivity apps by building experiences that can be loved by individuals while still fulfilling the needs for complex reports and transparency.</p>\n',
            how_to_apply: '<p>Please apply via <a href="https://superlist.recruitee.com/">https://superlist.recruitee.com/</a> or send your application to <a href="mailto:jobs@superlistapp.com">jobs@superlistapp.com</a>.</p>\n',
            company_logo: 'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdTZHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1731b759670237d0e5ffab04f63a48e7d5215b0e/logo.png',
          },
          {
            id: '2598e725-f9fa-4357-a209-e371a618cde1',
            type: 'Full Time',
            url: 'https://jobs.github.com/positions/2598e725-f9fa-4357-a209-e371a618cde1',
            created_at: 'Wed Jul 29 16:45:23 UTC 2020',
            company: 'Majority Labs',
            company_url: 'http://majoritylabs.digial',
            location: 'Toronto / Canada Remote',
            title: 'Senior/Lead/Principal Ruby on Rails Engineer',
            description: '<p>Majority Labs is a Canadian software as a service startup for campaigns, grassroots, labor and advocacy organizations.  We work with clients addressing the climate emergency, inequality and precarious work, equity and justice.</p>\n<p>Majority Labs is searching for an experienced full-stack engineer with expertise in <strong>Ruby-on-Rails</strong> and experience in React to help us develop GroundGame.\nGroundGame is an organizer toolkit in a box with broadcast and peer-to-peer SMS, broadcast and welcome series email, canvassing tools and a lightweight CRM and CMS.</p>\n<p><strong>Skills &amp; Requirements</strong>\nWere looking for smart people who are self-directed, with a proven track record of delivering quality products, and a demonstrable history of working with our core technologies.</p>\n<p><strong>Our primary technology stack is:</strong></p>\n<ul>\n<li>Ruby and Rails</li>\n<li>Postgres, Redis</li>\n<li>React</li>\n<li>Heroku</li>\n<li>Twillio and; Sendgrid</li>\n</ul>\n<p><strong>We are looking for a Senior developer to…</strong></p>\n<ul>\n<li>Develop back end solutions API’s</li>\n<li>Create and update existing UI/UX flows</li>\n<li>Perform code reviews for other developers</li>\n<li>Write technical documentation, tests, and stories</li>\n<li>Participate in requirements workshops, engineering check-ns</li>\n<li>Be actively involved in developer discussions to improve our process, technologies, and techniques</li>\n</ul>\n<p><strong>What We Expect From You</strong></p>\n<ul>\n<li>A solid understanding of Ruby, our core back end technology.</li>\n<li>A solid understanding of React.</li>\n<li>A solid understanding of software design principles: object-oriented design, fault tolerance, testing, etc.</li>\n<li>A proven history of working with and developing APIs</li>\n<li>An education or background in computer science or software development</li>\n<li>Strong experience working with Ruby</li>\n<li>Proven track record of working with testing frameworks</li>\n<li>The ability to clearly present your ideas and code to other developers, and accept and incorporate constructive feedback for further iterations.</li>\n</ul>\n<p><strong>Bonus Points</strong></p>\n<ul>\n<li>General awareness of political activism</li>\n<li>Experience with call center or marketing campaign software</li>\n<li>Experience with paired programming</li>\n</ul>\n',
            how_to_apply: '<p>Please apply online here:\n<a href="https://forms.gle/BDDyvBaBXmwFxdnq8">https://forms.gle/BDDyvBaBXmwFxdnq8</a></p>\n',
            company_logo: 'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdXFHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--dea3ea32a3919d5fec17619f150eb85b9ddf3282/logo_colorbg.jpg',
          },
        ],
      },
    };

    axios.get.mockResolvedValue(responseGet);

    const $auth = {
      getTokenSilently() {
        return 'fake-token';
      },
    };

    wrapper = mount(Jobs, {
      mocks: {
        $auth,
      },
    });
  });

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('does load the Github Jobs API data when a successful HTTP GET occurs', () => {
    expect(wrapper.name()).toMatch('Jobs');
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toBeCalledWith(expect.stringMatching('/jobs'), {
      headers: { Authorization: 'Bearer fake-token' },
      params: { description: 'golang' },
    });

    // Check the jobs array is properly set
    expect(wrapper.vm.jobs.length).toBeGreaterThan(0);
    expect(wrapper.vm.jobs.length).toEqual(10);
    expect(wrapper.vm.jobs[0].title).toMatch('Lead Software Engineer (f/m/x)');
    expect(wrapper.vm.jobs[0].company).toMatch('AMORELIE');
    expect(wrapper.vm.jobs[0].location).toMatch('Berlin');


    // check that the jobs data are displayed
    expect(wrapper.findAll('li').length).toBeGreaterThan(0);
    expect(wrapper.findAll('li').length).toEqual(10);
    expect(wrapper.findAll('b-card-text').length).toEqual(50);

    wrapper.vm.$nextTick().then(() => {
      // check that the author and the name ared displayed
      expect(wrapper.findAll('h5').at(1).text()).toContain('Lead Software Engineer (f/m/x)');
      expect(wrapper.findAll('h5').at(2).text()).toContain('Software Engineer - Full Stack');
      expect(wrapper.findAll('h5').at(3).text()).toContain('Senior / Lead DevOps Engineer');


      // check that the compnay names are correct
      expect(wrapper.findAll('b-card-text').at(0).text()).toContain('Company: AMORELIE');
      expect(wrapper.findAll('b-card-text').at(5).text()).toContain('Company: AiCure');
      expect(wrapper.findAll('b-card-text').at(10).text()).toContain('Company: ');
    })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(error.message);
      });
  });
});

describe('Implementation Test for Repositories.vue with Failed HTTP GET', () => {
  let wrapper = null;

  beforeEach(() => {
    axios.get.mockRejectedValue(new Error('BAD REQUEST'));

    const $auth = {
      getTokenSilently() {
        return 'fake-token';
      },
    };

    wrapper = mount(Jobs, {
      mocks: {
        $auth,
      },
    });
  });

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });


  it('does not load the top news data when failed HTTP GET occurs', () => {
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toBeCalledWith(expect.stringMatching('jobs'), {
      headers: { Authorization: 'Bearer fake-token' },
      params: { description: 'golang' },
    });

    // Check that the length of the news array is 0
    expect(wrapper.vm.jobs.length).toEqual(0);

    // Check that there is no news data displayed when the GET request fails
    expect(wrapper.findAll('li').length).toEqual(0);
    expect(wrapper.findAll('b-card').length).toEqual(0);
    expect(wrapper.findAll('b-card-text').length).toEqual(0);

    expect(global.console.error).toHaveBeenCalledWith('BAD REQUEST');
  });
});
