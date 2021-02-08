(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{61:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),o=a(6),r=(a(0),a(87)),i={id:"Kubevious",title:"Kubevious - Not so Obvious GUI for Kuberenetes",author:"Narayanan Krishnamurthy",author_title:"Technical Architect",author_url:"https://www.linkedin.com/in/narainkrishh/",author_image_url:"https://media-exp1.licdn.com/dms/image/C5603AQFA5uSldPgdfQ/profile-displayphoto-shrink_200_200/0/1587882605274?e=1618444800&v=beta&t=BQ8IkoK2xMuYHnerX41WwK73NSHgRXUMOg_dTlflRoU",tags:["kubernetes","devops","gui","dashboard","narainkrishh","bribebybytes"]},s={permalink:"/landing-page/blog/Kubevious",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2020-02-08-kubevious.md",source:"@site/blog/2020-02-08-kubevious.md",description:"Complexity in managing containers brings us the need for an Orchestrator. One well-known production grade container Orchestrator is Kubernetes. Soon after playing with all the YAML manifests to define and refine your clusters, you realize a need for an easy use Graphical User Interface or GUI to get a glance through your cluster.",date:"2020-02-08T00:00:00.000Z",tags:[{label:"kubernetes",permalink:"/landing-page/blog/tags/kubernetes"},{label:"devops",permalink:"/landing-page/blog/tags/devops"},{label:"gui",permalink:"/landing-page/blog/tags/gui"},{label:"dashboard",permalink:"/landing-page/blog/tags/dashboard"},{label:"narainkrishh",permalink:"/landing-page/blog/tags/narainkrishh"},{label:"bribebybytes",permalink:"/landing-page/blog/tags/bribebybytes"}],title:"Kubevious - Not so Obvious GUI for Kuberenetes",readingTime:2.755,truncated:!1},l=[],u={rightToc:l};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Complexity in managing containers brings us the need for an Orchestrator. One well-known production grade container Orchestrator is Kubernetes. Soon after playing with all the YAML manifests to define and refine your clusters, you realize a need for an easy use Graphical User Interface or GUI to get a glance through your cluster.\nBoth you operations and developer teams needs an easy way to look through the complex setup that has been put in place.\nThe first option everyone see is Kubernetes Dashboard that ships with Kubernetes, soon after setting up and using it we realize its complex to secure and expose it to all users in our organization. If you have succeeded using Kubernetes Default Dashboard, comment below, I would like to know how you made that work for you. But most of the you start looking for alternatives.\nImagine a GUI over kubernetes that can easily shows all your resources in an appealing interface and not only that it also warns you if you are missing some best practices. Sounds interesting? Welcome to Kubevious - the obvious GUI for Kubernetes.\nThis is NarainKrishh and you are watching.."),Object(r.b)("p",null,"Before we jump, we already discussed multiple GUIs in our channel"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"K9S - VIM like interface with lots of shortcuts to scroll through your cluster."),Object(r.b)("li",{parentName:"ol"},"Kubernetes Lens IDE - A desktop application that can connect to clusters remotely and manage your resources."),Object(r.b)("li",{parentName:"ol"},"Octane - Another IDE for kubernetes we used in some of our videos.")),Object(r.b)("p",null,"What is your favourite IDE or GUI or Dashboard when it comes to Kubernetes, Comment that below and lets interact."),Object(r.b)("p",null,"Today we are going to see about Kubevious, this IDE, takes not so obvious approach, with features like analysing your kubernetes cluster like"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Text Based Searching")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Hierarchy based configuration access to your full cluster resources")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Impact radius analysis")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Time-Machine - That word itself is so cool.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Configuration validations")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Capacity planning and list goes on."),Object(r.b)("p",{parentName:"li"},"Stay till the end of this video, I am going to explain starting from setup and going to end it with where it can help you in you day to day activities, and dont forget to share with your friends and colleage circle."))),Object(r.b)("p",null,"###Installation:\nThe easiest way to install kubevious is using helm and just follow below 3 steps:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create namespace kubevious\nhelm repo add kubevious https://helm.kubevious.io\nhelm upgrade --atomic -i kubevious kubevious/kubevious -n kubevious\n")),Object(r.b)("p",null,"Now that kubevious is running your cluster\nQuick way to view is to use kubectl proxy to expose it. You can also create kubernetes ingress if you will like to."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'kubectl get pods -n kubevious -l "app.kubernetes.io/component=kubevious-ui" -o jsonpath="{.items[0].metadata.name}\nkubectl port-forward <<<pod name from above>> 8080:80 -n kubevious  \n')),Object(r.b)("p",null,"Just for demonstration I am going to deploy argocd, which is kubernetes native CI/CD tool that runs within kubernetes cluster, with lots of related to components, I think it can help us understand kubevious features better. Pls note I could have taken any application that runs in kubernetes for this example."),Object(r.b)("p",null,"So let me quickly install argo cd"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create namespace argocd\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n")),Object(r.b)("p",null,"Now that argocd is installed, lets open our kubervious IDE to check it."),Object(r.b)("p",null,"###Search like never before:\nVery first amazing feature is this text based feature"))}b.isMDXComponent=!0}}]);