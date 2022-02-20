import "../styles/HealthSearchStyles.css";
import "../styles/GlassStyles.css";
import { Form, Card, Button } from "react-bootstrap";
import { useState } from "react";
import Axios from "axios";

const example = {
  all_papers_details: [
    {
      abstract:
        "Over the past few years, neural networks have re-emerged as powerful machine-learning models, yielding state-of-the-art results in fields such as image recognition and speech processing. More recently, neural network models started to be applied also to textual natural language signals, again with very promising results. This tutorial surveys neural network models from the perspective of natural language processing research, in an attempt to bring natural-language researchers up to speed with the neural techniques. The tutorial covers input encoding for natural language tasks, feed-forward networks, convolutional networks, recurrent networks and recursive networks, as well as the computation graph abstraction for automatic gradient computation.",
      title: "Natural Language Processing with Small Feed-Forward Networks",
      url: "http://aclweb.org/anthology/D17-1309",
    },
    {
      abstract:
        "We propose a statistical model for natural language that begins by considering language as a monoid, then representing it in complex matrices with a compatible translation invariant probability measure. We interpret the probability measure as arising via the Born rule from a translation invariant matrix product state.",
      title: "Learning Translations via Matrix Completion",
      url: "http://aclweb.org/anthology/D17-1152",
    },
    {
      abstract:
        "We introduce several new black-box reductions that significantly improve the design of adaptive and parameter-free online learning algorithms by simplifying analysis, improving regret guarantees, and sometimes even improving runtime. We reduce parameter-free online learning to online exp-concave optimization, we reduce optimization in a Banach space to one-dimensional optimization, and we reduce optimization over a constrained domain to unconstrained optimization. All of our reductions run as fast as online gradient descent. We use our new techniques to improve upon the previously best regret bounds for parameter-free learning, and do so for arbitrary norms.",
      title: "Sequence-to-Sequence Learning as Beam-Search Optimization",
      url: "http://aclweb.org/anthology/D16-1137",
    },
    {
      abstract:
        'Unlike human learning, machine learning often fails to handle changes between training (source) and test (target) input distributions. Such domain shifts, common in practical scenarios, severely damage the performance of conventional machine learning methods. Supervised domain adaptation methods have been proposed for the case when the target data have labels, including some that perform very well despite being "frustratingly easy" to implement. However, in practice, the target domain is often unlabeled, requiring unsupervised adaptation. We propose a simple, effective, and efficient method for unsupervised domain adaptation called CORrelation ALignment (CORAL). CORAL minimizes domain shift by aligning the second-order statistics of source and target distributions, without requiring any target labels. Even though it is extraordinarily simple--it can be implemented in four lines of Matlab code--CORAL performs remarkably well in extensive evaluations on standard benchmark datasets.',
      title: "Frustratingly Easy Model Ensemble for Abstractive Summarization",
      url: "http://aclweb.org/anthology/D18-1449",
    },
    {
      abstract:
        "Deviations from rational decision-making due to limited computational resources have been studied in the field of bounded rationality, originally proposed by Herbert Simon. There have been a number of different approaches to model bounded rationality ranging from optimality principles to heuristics. Here we take an information-theoretic approach to bounded rationality, where information-processing costs are measured by the relative entropy between a posterior decision strategy and a given fixed prior strategy. In the case of multiple environments, it can be shown that there is an optimal prior rendering the bounded rationality problem equivalent to the rate distortion problem for lossy compression in information theory. Accordingly, the optimal prior and posterior strategies can be computed by the well-known Blahut-Arimoto algorithm which requires the computation of partition sums over all possible outcomes and cannot be applied straightforwardly to continuous problems. Here we derive a sampling-based alternative update rule for the adaptation of prior behaviors of decision-makers and we show convergence to the optimal prior predicted by rate distortion theory. Importantly, the update rule avoids typical infeasible operations such as the computation of partition sums. We show in simulations a proof of concept for discrete action and environment domains. This approach is not only interesting as a generic computational method, but might also provide a more realistic model of human decision-making processes occurring on a fast and a slow time scale.",
      title: "Rationalizing Neural Predictions",
      url: "http://aclweb.org/anthology/D16-1011",
    },
    {
      abstract:
        'The problem of learning a manifold structure on a dataset is framed in terms of a generative model, to which we use ideas behind autoencoders (namely adversarial/Wasserstein autoencoders) to fit deep neural networks. From a machine learning perspective, the resulting structure, an atlas of a manifold, may be viewed as a combination of dimensionality reduction and "fuzzy" clustering.',
      title:
        "Learning the Structure of Variable-Order CRFs: a finite-state perspective",
      url: "http://aclweb.org/anthology/D17-1044",
    },
    {
      abstract:
        "We explore six challenges for neural machine translation: domain mismatch, amount of training data, rare words, long sentences, word alignment, and beam search. We show both deficiencies and improvements over the quality of phrase-based statistical machine translation.",
      title: "Semi-Autoregressive Neural Machine Translation",
      url: "http://aclweb.org/anthology/D18-1044",
    },
    {
      abstract:
        "Language models (LMs) are statistical models that calculate probabilities over sequences of words or other discrete symbols. Currently two major paradigms for language modeling exist: count-based n-gram models, which have advantages of scalability and test-time speed, and neural LMs, which often achieve superior modeling performance. We demonstrate how both varieties of models can be unified in a single modeling framework that defines a set of probability distributions over the vocabulary of words, and then dynamically calculates mixture weights over these distributions. This formulation allows us to create novel hybrid models that combine the desirable features of count-based and neural LMs, and experiments demonstrate the advantages of these approaches.",
      title:
        "Generalizing and Hybridizing Count-based and Neural Language Models",
      url: "http://aclweb.org/anthology/D16-1124",
    },
    {
      abstract:
        "Domain similarity measures can be used to gauge adaptability and select suitable data for transfer learning, but existing approaches define ad hoc measures that are deemed suitable for respective tasks. Inspired by work on curriculum learning, we propose to \\emph{learn} data selection measures using Bayesian Optimization and evaluate them across models, domains and tasks. Our learned measures outperform existing domain similarity measures significantly on three tasks: sentiment analysis, part-of-speech tagging, and parsing. We show the importance of complementing similarity with diversity, and that learned measures are -- to some degree -- transferable across models, domains, and even tasks.",
      title:
        "Learning to select data for transfer learning with Bayesian Optimization",
      url: "http://aclweb.org/anthology/D17-1038",
    },
    {
      abstract:
        "Outlier detection aims to identify unusual data instances that deviate from expected patterns. The outlier detection is particularly challenging when outliers are context dependent and when they are defined by unusual combinations of multiple outcome variable values. In this paper, we develop and study a new conditional outlier detection approach for multivariate outcome spaces that works by (1) transforming the conditional detection to the outlier detection problem in a new (unconditional) space and (2) defining outlier scores by analyzing the data in the new space. Our approach relies on the classifier chain decomposition of the multi-dimensional classification problem that lets us transform the output space into a probability vector, one probability for each dimension of the output space. Outlier scores applied to these transformed vectors are then used to detect the outliers. Experiments on multiple multi-dimensional classification problems with the different outlier injection rates show that our methodology is robust and able to successfully identify outliers when outliers are either sparse (manifested in one or very few dimensions) or dense (affecting multiple dimensions).",
      title: "Identifying Semantically Deviating Outlier Documents",
      url: "http://aclweb.org/anthology/D17-1291",
    },
  ],
  summary: "",
  youtube: [
    {
      abstract:
        "O Algarve fica-te bem” é o mote da campanha promocional do Turismo do Algarve, que tem como objetivo motivar não só os ...",
      title: "O Algarve fica-te bem!",
      url: "https://www.youtube.com/watch?v=cUW2RT06-ys",
    },
    {
      abstract: "lol, de ce te afli aici?",
      title: "Dead Realm pe steroizi | Dead Realm #GeForce Experience",
      url: "https://www.youtube.com/watch?v=09DD53aebXk",
    },
    {
      abstract:
        "This live feed is owned and operated by Friends of Big Bear Valley, a 501c3 nonprofit organization. Any public use of the live ...",
      title: "Big Bear Bald Eagle Live Nest Cam",
      url: "https://www.youtube.com/watch?v=B4-L2nfGcuE",
    },
    {
      abstract:
        "Por contrataciones: URUGUAY: 099 155 825 ARGENTINA: +598 99 155 825 manoarribaoficial@gmail.com Típico (Tu ...",
      title: "Mano Arriba - Típico (Tu Histeriqueo) (Video Oficial)",
      url: "https://www.youtube.com/watch?v=CwibJXf0rvU",
    },
    {
      abstract:
        "조용히 혼자 있고 싶을 때 듣는 감성음악, 조용한팝송, 광고없는팝송 | Relaxing Pop Music, Soft Pop Music 2022#LIVE 세상에서 ...",
      title:
        "조용히 혼자 있고 싶을 때 듣는 감성음악, 조용한팝송, 광고없는팝송 | Relaxing Pop Music, Soft Pop Music 2022#LIVE",
      url: "https://www.youtube.com/watch?v=W9Ot_I3pb20",
    },
  ],
};

function HealthSearchPage() {
  const [results, setResults] = useState(example);
  const [file, setFile] = useState(null);

  function submitfile() {
    if (file !== null) {
      let formData = new FormData();
      formData.append("file", file);
      Axios.post("http://127.0.0.1:5000/api/healthProduct", {
        path: file.name,
      })
        .then((res) => {
          setResults(res.data);
          setFile(null);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  if (results === null) {
    return (
      <div className="glass">
        <div className="IngredientsHeader">
          <h1>Upload a PDF, Image, or other document to Search</h1>
          <Form.Control
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            size="lg"
            style={{ width: `40%` }}
          />
          <Button onClick={submitfile} size="lg" style={{ marginTop: `2%` }}>
            Submit
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="glass">
        <div className="HealthSearchContainer">
          <div style={{ display: `flex`, justifyContent: `space-between` }}>
            <h1 className="HealthSearchHeader">Results</h1>
            <Button
              onClick={() => setResults(null)}
              variant="dark"
              style={{ height: `50px`, margin: `auto 0 auto 0` }}
            >
              Submit Another Item
            </Button>
          </div>
          <h2 className="HealthSearchSubHeader">Youtube Videos</h2>
          <div
            style={{
              display: `flex`,
              gap: `5%`,
              flexWrap: `wrap`,
              justifyContent: `center`,
            }}
          >
            {results.youtube.map((video) => {
              let m = video.url.split("=");
              let j = "https://www.youtube.com/embed/" + m[1];
              return (
                <iframe style={{ height:`25vh`, width: `40%`, margin: `10px` }} src={j} />

                /*
                <Card
                  style={{
                    width: `26.66%`,
                    margin: `10px`,
                    borderRadius: `20px`,
                    background: `linear-gradient(to top left, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.7)`,
                  }}
                >
                  <Card.Body>
                    <Card.Title>{video.title}</Card.Title>
                    <Card.Text>{video.abstract.substring(0, 100)}...</Card.Text>
                    <Button href={video.url} variant="primary">
                      Watch Here
                    </Button>
                  </Card.Body>
                </Card>
                */
              );
            })}
          </div>

          <h2 className="HealthSearchSubHeader">Research Papers</h2>
          <div
            style={{
              display: `flex`,
              gap: `5%`,
              flexWrap: `wrap`,
              justifyContent: `center`,
            }}
          >
            {results.all_papers_details.map((paper) => {
              let j = paper.url.substring(0, paper.url.length);
              let p = j + ".pdf";
              return (
               // <iframe style={{ height: `100vh`, width:`100%` ,margin: `10px` }} src={p} />
                
                <Card
                  style={{
                    width: `26.66%`,
                    margin: `10px`,
                    borderRadius: `20px`,
                    background: `linear-gradient(to top left, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.7)`,
                  }}
                >
                  <Card.Body>
                    <Card.Title>{paper.title}</Card.Title>
                    <Card.Text>{paper.abstract.substring(0, 250)}...</Card.Text>
                    <Button href={paper.url} variant="primary">
                      Read Here
                    </Button>
                  </Card.Body>
                </Card>
                
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HealthSearchPage;
