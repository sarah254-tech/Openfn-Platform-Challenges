/*
Here’s a **short and readable summary** of how to run OpenFn jobs using adaptors:

---

### 🚀 **Running Jobs with OpenFn CLI**

#### 🔧 Basic Job Execution:

```bash
openfn path/to/job.js -a adaptor-name
```

> Required: Always specify an adaptor (e.g., `http`, `common`)

#### 📦 Adaptor Options:

* **Auto-install** if adaptor version is missing
* Run with a specific version:

  ```bash
  openfn job.js -a http@2.0.0
  ```
* Use a local adaptor build:

  ```bash
  openfn job.js -a http=/path/to/local/adaptor
  ```
* Use monorepo build:

  ```bash
  OPENFN_ADAPTORS_REPO=~/openfn/adaptors openfn job.js -ma http
  ```

---

### 🎯 Running Specific Steps:

* Start from a step:

  ```bash
  openfn job.js --start step-id
  ```
* End at a step:

  ```bash
  openfn job.js --end step-id
  ```
* Run only one step:

  ```bash
  openfn job.js --only step-id
  ```

> You can match steps by full or partial ID/name.

---

### 💾 Input/Output & Caching:

* Default output is `output.json`
* Set custom paths:

  ```bash
  openfn job.js -o path/to/output.json -s path/to/state.json
  ```
* Output to terminal:

  ```bash
  openfn job.js -O
  ```
* Cache step results:

  ```bash
  openfn job.js --cache-steps
  ```
* Always cache by setting in your environment:

  ```bash
  export OPENFN_ALWAYS_CACHE_STEPS=true
  ```

---

You’re ready to run OpenFn like a pro. Keep going — you’ve got this job! 💪🔥

*/
console.log(" There is surely a future hope for you, and your hope will not be cut off. Proverbs 23:18")