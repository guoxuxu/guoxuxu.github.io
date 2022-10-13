---
title: "Latent-Optimized Adversarial Neural Transfer for Sarcasm Detection"
collection: publications
permalink: /publication/2021-06-01-Latent-Optimized-adversarial-neural-transfer-for-sarcasm-detection
venue: 'Proceedings of the 2021 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (NAACL-2021)'
---
<!--
date: 2022-05-04
paperurl: 'http://academicpages.github.io/files/paper3.pdf'
citation: 'Xu Guo, Boyang Li, Han Yu, and Chunyan Miao. 2021. Latent-Optimized Adversarial Neural Transfer for Sarcasm Detection. In Proceedings of the 2021 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, pages 5394–5407, Online. Association for Computational Linguistics.'
-->

[Download paper here](https://aclanthology.org/2021.naacl-main.425.pdf)
[Code](https://github.com/guoxuxu/LOANT)

Recommended citation: Xu Guo, Boyang Li, Han Yu, and Chunyan Miao. 2021. Latent-Optimized Adversarial Neural Transfer for Sarcasm Detection. In Proceedings of the 2021 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, pages 5394–5407, Online. Association for Computational Linguistics.

```
@inproceedings{guo-etal-2021-latent,
    title = "Latent-Optimized Adversarial Neural Transfer for Sarcasm Detection",
    author = "Guo, Xu  and
      Li, Boyang  and
      Yu, Han  and
      Miao, Chunyan",
    booktitle = "Proceedings of the 2021 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies",
    month = jun,
    year = "2021",
    address = "Online",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2021.naacl-main.425",
    doi = "10.18653/v1/2021.naacl-main.425",
    pages = "5394--5407",
}
```

### Abstract
The existence of multiple datasets for sarcasm detection prompts us to apply transfer learning to exploit their commonality. The adversarial neural transfer (ANT) framework utilizes multiple loss terms that encourage the source-domain and the target-domain feature distributions to be similar while optimizing for domain-specific performance. However, these objectives may be in conflict, which can lead to optimization difficulties and sometimes diminished transfer. We propose a generalized latent optimization strategy that allows different losses to accommodate each other and improves training dynamics. The proposed method outperforms transfer learning and meta-learning baselines. In particular, we achieve 10.02% absolute performance gain over the previous state of the art on the iSarcasm dataset.