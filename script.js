
console.log("Page loaded.");

// =======================
//   Paper Data (Homepage)
// =======================

const papers = [

    // ===== 2025 Slim-SC =====
    {
        title: "Slim-SC: Thought Pruning for Efficient Scaling with Self-Consistency",
        authors: "Colin Hong*, Xu Guo*, Anand Chaanan Singh, Esha Choukse, Dmitrii Ustiugov",
        venue: "Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing (EMNLP 2025). Oral",
        year: 2025,
        category: ["LLM", "Efficiency", "Reasoning"],
        img: "./image/pub/slimsc.png",
        link: "https://aclanthology.org/2025.emnlp-main.1750/",
        buttons: [
            { name: "PDF", url: "https://aclanthology.org/2025.emnlp-main.1750.pdf" },
            { name: "Code", url: "https://github.com/hyscale-lab/slimsc" },
            { name: "Poster", url: "./poster/slimsc.pdf" }
        ]
    },

    // ===== 2025 SoftCoT =====
    {
        title: "SoftCoT: Soft Chain-of-Thought for Efficient Reasoning with LLMs",
        authors: "Yige Xu*, Xu Guo*, Zhiwei Zeng, Chunyan Miao",
        venue: "Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (ACL 2025)",
        year: 2025,
        category: ["LLM", "Efficiency", "Reasoning"],
        img: "./image/pub/softcot.png",
        link: "https://aclanthology.org/2025.acl-long.1137/",
        buttons: [
            { name: "PDF", url: "https://aclanthology.org/2025.acl-long.1137.pdf" },
            { name: "Code", url: "https://github.com/xuyige/SoftCoT" },
            { name: "Data", url: "https://huggingface.co/datasets/xuyige/ASDiv-Aug" },
            { name: "Poster", url: "./poster/softcot.jpeg" }
        ]
    },

    // ===== 2025 SEED =====
    {
        title: "Diffusion-Guided Diversity for Single Domain Generalization in Time Series Classification",
        authors: "Junru Zhang, Lang Feng, Xu Guo, Han Yu, Yabo Dong, Duanqing Xu",
        venue: "The 32nd ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD 2025). Oral",
        year: 2025,
        category: ["Time Series", "Transfer Learning", "Diffusion Models"],
        img: "./image/pub/seed.png",
        link: "https://dl.acm.org/doi/10.1145/3711896.3736909",
        buttons: [
            { name: "PDF", url: "https://dl.acm.org/doi/10.1145/3711896.3736909" },
            { name: "Code", url: "https://zenodo.org/records/15495436" }
        ]
    },

    // ===== 2024 RevMUX =====
    {
        title: "RevMUX: Data Multiplexing with Reversible Adapters for Efficient LLM Batch Inference",
        authors: "Yige Xu, Xu Guo, Zhiwei Zeng, Chunyan Miao",
        venue: "Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing (EMNLP 2024). Oral. Accepted with scores 5,5,5,3.5.",
        year: 2024,
        category: ["LLM", "Efficiency"],
        img: "./image/pub/revmux.png",
        link: "https://aclanthology.org/2024.emnlp-main.1232/",
        buttons: [
            { name: "PDF", url: "https://aclanthology.org/2024.emnlp-main.1232.pdf" },
            { name: "Code", url: "https://github.com/xuyige/RevMUX" },
            { name: "Lecture", url: "https://www.youtube.com/watch?v=ZVZszfrKngE" },
            { name: "Poster", url: "./poster/revmux.pdf" }
        ]
    },

    // ===== 2024 COLM =====
    {
        title: "Generating Synthetic Datasets for Few-shot Prompt Tuning",
        authors: "Xu Guo, Zilin Du, Boyang Li, Chunyan Miao",
        venue: "Conference on Language Modeling (COLM 2024)",
        year: 2024,
        category: ["LLM", "Parameter-Efficient Fine-Tuning", "Synthetic Data"],
        img: "./image/pub/colm.png",
        link: "#",
        buttons: [
            { name: "PDF", url: "https://openreview.net/pdf/22a35aecb8e57c14e0f014a23df9807ab7d1a1e1.pdf" },
            { name: "Poster", url: "./poster/colm_24.pdf" },
            { name: "Slides", url: "./slides/colm_24.pdf" }
        ]
    },

    // ===== 2024 PairCFR =====
    {
        title: "PairCFR: Enhancing Model Training on Paired Counterfactually Augmented Data through Contrastive Learning",
        authors: "Xiaoqi Qiu*, Yongjie Wang*, Xu Guo, Zhiwei Zeng, Yu Yue, Yuhong Feng, Chunyan Miao",
        venue: "Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (ACL 2024)",
        year: 2024,
        category: ["LLM", "Synthetic Data", "Sentiment Analysis"],
        img: "./image/pub/paircfr.png",
        link: "https://aclanthology.org/2024.acl-long.646/",
        buttons: [
            { name: "PDF", url: "https://aclanthology.org/2024.acl-long.646.pdf" },
            { name: "Code", url: "https://github.com/Siki-cloud/PairCFR" },
            {
                name: "Lecture",
                url: "https://underline.io/lecture/103179-paircfr-enhancing-model-training-on-paired-counterfactually-augmented-data-through-contrastive-learning"
            },
            { name: "Poster", url: "./poster/paircfr.pdf" }
        ]
    },

    // ===== 2023 InteMATs =====
    {
        title: "InteMATs: Integrating Granularity-Specific Multilingual Adapters for Cross-Lingual Transfer",
        authors: "Meizhen Liu, Xu Guo, Jiakai He, Jianye Chen, Siu Cheung Hui, and Fengyu Zhou",
        venue: "Findings of the Association for Computational Linguistics: EMNLP 2023",
        year: 2023,
        category: ["Multilingual", "LLM", "Parameter-Efficient Fine-Tuning", "Transfer Learning"],
        img: "./image/pub/intemats.png",
        link: "https://aclanthology.org/2023.findings-emnlp.335/",
        buttons: [
            { name: "PDF", url: "https://aclanthology.org/2023.findings-emnlp.335.pdf" },
            { name: "Code", url: "https://github.com/meizhen-nlp/GranCATs" }
        ]
    },

    // ===== 2023 GranCATs =====
    {
        title: "GranCATs: Cross-Lingual Enhancement through Granularity-Specific Contrastive Adapters",
        authors: "Meizhen Liu, Jiakai He, Xu Guo, Jianye Chen, Siu Cheung Hui, and Fengyu Zhou",
        venue: "Conference on Information and Knowledge Management (CIKM 2023)",
        year: 2023,
        category: ["Multilingual", "LLM", "Parameter-Efficient Fine-Tuning", "Transfer Learning"],
        img: "./image/pub/grancats.png",
        link: "https://dl.acm.org/doi/10.1145/3583780.3614896",
        buttons: [
            { name: "PDF", url: "https://dl.acm.org/doi/10.1145/3583780.3614896" },
            { name: "Code", url: "https://github.com/meizhen-nlp/GranCATs" }
        ]
    },

    // ===== 2023 CAMEL =====
    {
        title: "Training Multimedia Event Extraction With Generated Images and Captions",
        authors: "Zilin Du, Yunxin Li, Xu Guo, Yidan Sun, and Boyang Li",
        venue: "ACM Multimedia, 2023",
        year: 2023,
        category: ["Multimedia", "Synthetic Data", "Parameter-Efficient Fine-Tuning", "LLM"],
        img: "./image/pub/camel.png",
        link: "https://dl.acm.org/doi/10.1145/3581783.3612526",
        buttons: [
            { name: "PDF", url: "https://dl.acm.org/doi/pdf/10.1145/3581783.3612526" },
            { name: "Code", url: "https://github.com/ZILIN003/CAMEL" }
        ]
    },

    // ===== 2022 FedHumor =====
    {
        title: "Federated Learning for Personalized Humor Recognition",
        authors: "Xu Guo, Han Yu, Boyang Li, Hao Wang, Pengwei Xing, Siwei Feng, Zaiqing Nie, and Chunyan Miao",
        venue: "ACM Transactions on Intelligent Systems and Technology, 2022",
        year: 2022,
        category: ["Federated Learning", "Sentiment Analysis", "LLM"],
        img: "./image/pub/fedhumor.png",
        link: "https://dl.acm.org/doi/10.1145/3511710",
        buttons: [
            { name: "PDF", url: "https://arxiv.org/pdf/2012.01675" },
            { name: "Slides", url: "./slides/fedhumor.pdf" },
            { name: "Award", url: "./award/fedhumor.png" }
        ]
    },

    // ===== 2022 OPTIMA =====
    {
        title: "Improving the Sample Efficiency of Prompt Tuning with Domain Adaptation",
        authors: "Xu Guo, Boyang Li, Han Yu",
        venue: "Findings of the Association for Computational Linguistics: EMNLP 2022",
        year: 2022,
        category: ["Parameter-Efficient Fine-Tuning", "Transfer Learning", "LLM", "Efficiency"],
        img: "./image/pub/optima.png",
        link: "https://aclanthology.org/2022.findings-emnlp.258/",
        buttons: [
            { name: "PDF", url: "https://aclanthology.org/2022.findings-emnlp.258.pdf" },
            { name: "Code", url: "https://github.com/guoxuxu/soft-prompt-transfer/tree/main/optima" },
            {
                name: "Lecture",
                url: "https://underline.io/lecture/65547-improving-the-sample-efficiency-of-prompt-tuning-with-domain-adaptation"
            }
        ]
    },

    // ===== 2021 LOANT =====
    {
        title: "Latent-Optimized Adversarial Neural Transfer for Sarcasm Detection",
        authors: "Xu Guo, Boyang Li, Han Yu, Chunyan Miao",
        venue: "Proceedings of the 2021 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (NAACL 2021). Oral",
        year: 2021,
        category: ["Sentiment Analysis", "Transfer Learning", "LLM"],
        img: "./image/pub/loant.png",
        link: "https://aclanthology.org/2021.naacl-main.425/",
        buttons: [
            { name: "PDF", url: "https://aclanthology.org/2021.naacl-main.425.pdf" },
            { name: "Code", url: "https://github.com/guoxuxu/LOANT" },
            {
                name: "Lecture",
                url: "https://underline.io/lecture/19731-latent-optimized-adversarial-neural-transfer-for-sarcasm-detection"
            },
            { name: "Award", url: "./award/loant.pdf" }
        ]
    }
];


// =======================
//   Bold Author Name
// =======================
function boldAuthorName(str) {
    return str.replace(/xu guo\*?/gi, match => `<b>${match}</b>`);
}


// =======================
//   Render Homepage List
// =======================
function renderHomePapers() {
    const container = document.getElementById("homePublication");
    container.innerHTML = "";

    papers.forEach(p => {
        const item = document.createElement("div");
        item.className = "paper-item";

        const buttonsHTML = p.buttons
            .map(btn => `<a class="paper-btn" target="_blank" href="${btn.url}">${btn.name}</a>`)
            .join("");

        item.innerHTML = `
            <div class="paper-img-wrapper">
                <img src="${p.img}" class="paper-img">
            </div>

            <div class="paper-info">
                <a href="${p.link}" target="_blank" class="paper-title">${p.title}</a>

                <div class="paper-authors">${boldAuthorName(p.authors)}</div>

                ${p.venue ? `<i>${p.venue}</i>` : ""}

                <div class="paper-buttons">${buttonsHTML}</div>
            </div>
        `;

        container.appendChild(item);
    });
}

renderHomePapers();

