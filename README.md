# OpenFn Workflow Automation Challenges  
My collection of automation and integration workflows using OpenFn, primarily focused on API GET/fetch data tasks, data transformations and chaining workflows.  
These are real-world style tasks aligned with the OpenFn Implementation Engineer role and aim to demonstrate end-to-end data flow automation using the OpenFn platform.

## About OpenFn  
OpenFn is a powerful data integration, workflow automation and interoperability platform. It is designed for governments, NGOs and social-impact organisations to connect disparate systems, automate key business processes and share data securely and at scale. :contentReference[oaicite:1]{index=1}  
- OpenFn supports over 70+ application connectors (adaptors) for systems like DHIS2, CommCare, Salesforce, and many more. :contentReference[oaicite:2]{index=2}  
- The core of OpenFn is open-source, and it is recognised as a Digital Public Good (DPG). :contentReference[oaicite:3]{index=3}  
- Website: [https://www.openfn.org](https://www.openfn.org)  
- Documentation: [https://docs.openfn.org](https://docs.openfn.org)  
- GitHub organisation: [https://github.com/OpenFn](https://github.com/OpenFn) :contentReference[oaicite:4]{index=4}  

## Why I Work With OpenFn  
- Real-world relevance: The platform is used globally (40+ countries) and by major NGOs/government bodies. :contentReference[oaicite:5]{index=5}  
- API/data-workflow focus: OpenFn jobs allow RESTful HTTP calls, data transformations, triggers and chaining — ideal for “get & fetch” data tasks.  
- Portfolio alignment: As I progress to roles focused on automation, integration, and data workflows, showcasing OpenFn skills helps demonstrate my capabilities.  

## Repo Structure  
├── challenge-01-api-fetch/ # First workflow: GET  data from system A and write to system B
├── challenge-02-data-filtering/ # Workflow: Fetch data via API, transform JSON and upload to DB
├── challenge-03-two-way-sync/ # Workflow: Bi-directional sync between two systems using OpenFn jobs
├── challenge-04-debug/ # Common debugging issues
├── challenge-05-Covid-Metadata/ # Real world automation with Covid metadata
├── common-utils/ # Shared job templates, helper scripts, configs
└── README.md # This file
---
## How To Use  
1. Clone this repo:  
   ```bash
   git clone https://github.com/sarah254-tech/OpenFn-Platform-Challenges.git

2. Navigate to a challenge folder, e.g.:
  `cd GetComments`  

3. Install dependencies (if any) and run the job via OpenFn CLI:
  `openfn job run job.js`

4. Update configs (API URLs, auth tokens) in config.json per your environment.

5. Review logs, results and make modifications/customisations as needed.

---
 ## My Goal

To build a collection of automated workflows that I can showcase to potential employers or collaborators, demonstrating real impact, technical proficiency and clarity of logic in integration-driven automation.

## License & Contributions

This work is for my personal learning and portfolio. Feel free to browse, reuse, adapt the patterns and comment on the workflows.
If you’d like to contribute suggestions or improvements, please open a Pull Request.
