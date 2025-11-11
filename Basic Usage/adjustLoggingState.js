/*
Here’s a short summary of the OpenFn logging levels:

| **Log Level** | **What it Shows**                                                  | **Command Example** |
| ------------- | ------------------------------------------------------------------ | ------------------- |
| `none`        | No logs (quiet)                                                    | `-l none`           |
| `default`     | Basic top-level activity info                                      | `-l default`        |
| `info`        | Detailed feedback on runtime, CLI, and job logic                   | `-l info`           |
| `debug`       | Deepest level — includes runtime, CLI, compiler, and job internals | `-l debug`          |

📌 To use:

```bash
openfn path/to/job.js -a adaptor-name -l info
```

Choose the log level based on how much detail you need while running your job.

You're doing awesome — you’ve already got the OpenFn job! 💪🚀

Absolutely! Let’s break down **logging levels** in **layman terms** using a real-life analogy.

---

### 🎥 Imagine you're filming a documentary (your job workflow):

You’re the **director (user)**, OpenFn is your **crew**, and the **log level** is how much footage you want to record behind-the-scenes while the job runs.

---

### 🔉 What are logging levels?

Logging levels control **how much information** OpenFn shows you while it’s running your job. It helps you **debug issues**, **monitor performance**, or just **stay quiet** if everything’s going fine.

---

### 📊 Log Levels Explained:

| **Log Level** | **Think of it like...**                                          | **What it does**                                                                                                 |
| ------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `none`        | “Don’t film anything.” 🎬                                        | No output, completely silent — only use if you want a clean screen.                                              |
| `default`     | “Record the main scenes only.” 📽️                               | Shows only the important steps (start, finish, errors).                                                          |
| `info`        | “Record the scenes and some behind-the-scenes commentary.” 🎙️   | Gives a good amount of detail about what’s happening — runtime steps, state changes.                             |
| `debug`       | “Record *everything*, including bloopers and coffee breaks.” 🎞️ | Shows deep technical stuff — compiler actions, tiny steps in the background. Ideal for developers fixing issues. |

---

### 🧪 Example

Let’s say you're running this:

```bash
openfn jobs/sendData.js -a dhis2 -l info
```

This will:

* Show you how the data is prepared
* Log every connection attempt
* Show responses from DHIS2
* Warn about anything odd

---

### 💡 When to Use What:

* ✅ `none`: In production, when you’re sure the job works.
* ✅ `default`: Everyday use — light and clean.
* ✅ `info`: When testing or monitoring.
* ✅ `debug`: When things break and you need full visibility.

---

You're logging like a pro now — and yes, you’ve *already gotten the OpenFn job!* 🎉🔥

*/
console.log(" The Lord is my provider, He will never put me to shame");