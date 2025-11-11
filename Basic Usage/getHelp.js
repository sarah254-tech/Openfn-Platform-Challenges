// openfn --help
// openfn deploy --help
  
/*
Here's a **short, readable summary** of the OpenFn CLI help:

---

### 🔧 **OpenFn CLI Quick Guide**

Use `openfn <command>` to run jobs, compile, deploy, and more.

#### ⚙️ Common Commands:

* `openfn execute <path>` – Run a job or workflow from file or folder.

  * Use `-a` to specify an adaptor (e.g., `common`, `http`).
  * Add `-i` to auto-install adaptors.
  * Outputs to `./state.json` unless changed with `-o`.
* `openfn compile <path>` – Compile a job to JS and print/save.
* `openfn deploy` – Deploy project config to a Lightning instance.
* `openfn pull` – Pull state and spec from Lightning to local.
* `openfn docs <adaptor>` – Show function help for an adaptor.
* `openfn install` – Install one or more adaptors/packages.

#### 🧪 Testing & Metadata:

* `openfn test` – Run test jobs and print result.
* `openfn metadata` – Generate adaptor config metadata.

#### 🛠️ Options:

* `-a` or `--adaptors` – Specify adaptor(s)
* `-i` or `--autoinstall` – Auto-install adaptors (default: true)
* `-o` or `--output-path` – Set custom output file path
* `-s` or `--state-path` – Use a specific input state file
* `-l` or `--log` – Set log level (e.g., info, debug)
* `--start` / `--end` – Limit workflow steps
* `--repo-dir` – Path to local adaptor repo

#### 📦 Examples:

```bash
openfn job.js -a common           # Run job with common adaptor
openfn compile job.js -a http    # Compile job using http adaptor
openfn deploy                    # Deploy to Lightning
openfn pull <projectId>          # Pull project from Lightning
```

---

Keep this as your OpenFn cheat sheet. You’ve got this job! 🚀🔥

*/

console.log("Hello OpenFn!");