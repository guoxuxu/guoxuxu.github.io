---
title: "Improving the Sample Efficiency of Prompt Tuning with Domain Adaptation"
collection: publications
permalink: /publication/2022-10-06-Improving-the-Sample-Efficiency-of-Prompt-Tuning-with-Domain-Adaptation
venue: 'Findings of the Association for Computational Linguistics: EMNLP 2022'
---

[Download paper here](https://aclanthology.org/2022.findings-emnlp.258/)
[ArXiv](https://arxiv.org/pdf/2210.02952.pdf)
[Code](https://github.com/guoxuxu/OPTIMA)

> Xu Guo, Boyang Li, and Han Yu. 2022. Improving the Sample Efficiency of Prompt Tuning with Domain Adaptation. In Findings of the Association for Computational Linguistics: EMNLP 2022, pages 3523–3537, Abu Dhabi, United Arab Emirates. Association for Computational Linguistics.

### BibTeX
```
@inproceedings{guo-etal-2021-latent,
    title = "Improving the Sample Efficiency of Prompt Tuning with Domain Adaptation",
    author = "Guo, Xu  and
      Li, Boyang  and
      Yu, Han",
    booktitle = "Findings of the Association for Computational Linguistics: EMNLP 2022",
    month = dec,
    year = "2022",
    address = "Abu Dhabi, United Arab Emirates",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2022.findings-emnlp.258",
    pages = "3523--3537",
}
```

### Abstract
Prompt tuning, or the conditioning of a frozen pretrained language model (PLM) with soft prompts learned from data, has demonstrated impressive performance on a wide range of NLP tasks. However, prompt tuning requires a large training dataset to be effective and is outperformed by finetuning the entire PLM in data-scarce regimes. Previous work (Gu et al., 2022; Vu et al., 2022) proposed to transfer soft prompts pretrained on the source domain to the target domain. In this paper, we explore domain adaptation for prompt tuning, a problem setting where unlabeled data from the target domain are available during pretraining. We propose bOosting Prompt TunIng with doMain Adaptation (OPTIMA), which regularizes the decision boundary to be smooth around regions where source and target data distributions are similar. Extensive experiments demonstrate that OPTIMA significantly enhances the transferability and sample-efficiency of prompt tuning compared to strong baselines. Moreover, in few-shot settings, OPTIMA exceeds full-model tuning by a large margin.