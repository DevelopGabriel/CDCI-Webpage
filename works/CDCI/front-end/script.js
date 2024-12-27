let analogico_left = document.querySelector('div#before');
let analogico_right = document.querySelector('div#later');
const heading = document.querySelector("#more_about_us h2");
const paragraph = document.querySelector("#more_about_us p");
let blocks_container = document.querySelector("section#blocks_container");
const blocks = document.querySelectorAll(".block");

analogico_left.onclick = function(){


    if(cont <= 1){
        cont = 1
        let radio = document.getElementById('radio'+cont);
        radio.checked = false;
        cont = 6
        radio = document.getElementById('radio'+cont); 
        radio.checked = true;
        console.log('radio'+cont);

    }else if(cont <= 5 && cont > 0){
        let radio = document.getElementById('radio'+cont)
        radio.checked = false;
        cont--
        radio = document.getElementById('radio'+cont)
        radio.checked = true;
        console.log('radio'+cont)
    } 

};

analogico_right.onclick = function(){

    if(cont == 0){

        cont++
        console.log('radio'+cont)
        setInterval(() => {
            let radio = document.getElementById('radio'+cont);
            radio.checked = '0';
        }, 5000);

    }else if(cont == 1){

        let radio = document.getElementById('radio'+cont);
        radio.checked = false;
        cont++;
        console.log('radio'+cont)
        setInterval(() => {
            let radio = document.getElementById('radio'+cont);
            radio.checked = '0';
        }, 5000);

    }else if(cont >= 2 && cont < 5){

        let radio = document.getElementById('radio'+cont);
        radio.checked = false;
        cont++;
        setInterval(() => {
            let radio = document.getElementById('radio'+cont);
            radio.checked = '0';
        }, 5000);

    }else if(cont >= 5){
        
        console.log('radio'+cont)
        cont = 5;
        radio = document.getElementById('radio'+cont);
        radio.checked = false;
        cont = 1;
        setInterval(() => {
            let radio = document.getElementById('radio'+cont);
            radio.checked = '0';
        }, 5000);
    };

};

const cdci_members = {
    membro1: { Nome: "Prof. Paulo Tumba", sexo: "M" },
    membro2: { Nome: "Prof. Júlio Barros", sexo: "M" },
    membro3: { Nome: "Maguinara Campos", sexo: "F" },
    membro4: { Nome: "Isabel Solendo", sexo: "F" },
    membro5: { Nome: "Horácio Manuel", sexo: "M" },
    membro6: { Nome: "Mário Muondo", sexo: "M" },
    membro7: { Nome: "Ludileia Cutambo", sexo: "F" },
    membro8: { Nome: "Igor Semedo", sexo: "M" },
    membro9: { Nome: "Tomás Mendes", sexo: "M" },
    membro10: { Nome: "Gabriel Ângelo", sexo: "M" },
    membro11: { Nome: "Keith Smith", sexo: "M" },
    membro12: { Nome: "Dissoloquele Bengui", sexo: "M" },
    membro13: { Nome: "Laurindo Afonso", sexo: "M" },
    membro14: { Nome: "Abner Lourenço", sexo: "M" },
    membro15: { Nome: "Nicolau Miguel", sexo: "M" },
    membro16: { Nome: "Noé Dombache", sexo: "M" },
    membro17: { Nome: "Josemar Silva", sexo: "M" },
    membro18: { Nome: "Júlio Vapor", sexo: "M" }  
};

const escrevendo = () => {
    heading.style.animation = "typing 1s steps(13, end)";
    heading.style.width = "30%";
};

const elevando = () => {
    heading.style.transform = "translate(0, 0px)";
};

const tornando_visivel = () => {
    paragraph.style.marginBottom = "20%";
};

class Member {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.imgSrc = this.setImage();
        this.createMemberBlock();
    }

    setImage() {
        return this.sexo === 'F' ? "/works/CDCI/imgs/undraw_profile-pic_fatv.svg" : "/works/CDCI/imgs/undraw_pic-profile_nr49.svg";
    }

    createMemberBlock() {
        const block = this.createElement("div", { class: "block" });
        const blockImg = this.createElement("img", { src: this.imgSrc });
        const pNome = this.createElement("p", { class: "nome" }, `${this.nome}`);
        const pIdade = this.createElement("p", { class: "idade" }, `${this.idade}`);

        const primaryData = this.createElement("div");
        primaryData.append(pNome, pIdade);

        const blockArticle = this.createElement("article", { class: "valencias" });
        const blockArticleH3 = this.createElement("h3", {}, "Valências");
        const list = this.createElement("ul");

        blockArticle.append(blockArticleH3, list);
        block.append(blockImg, primaryData, blockArticle);

        return block;
    }

    createElement(tag, attributes = {}, innerHTML = "") {
        const element = document.createElement(tag);
        for (const attr in attributes) {
            element.setAttribute(attr, attributes[attr]);
        }
        element.innerHTML = innerHTML;
        return element;
    }
}

// Criar e organizar os blocos em seções
const memberKeys = Object.keys(cdci_members);
let section;
for (let i = 0; i < memberKeys.length; i++) {
    if (i % 3 === 0) {
        section = document.createElement("section");
        section.className = "member-section";
    }
    const key = memberKeys[i];
    const member = new Member(cdci_members[key].Nome, null, cdci_members[key].sexo);
    section.appendChild(member.createMemberBlock());
    if (i % 3 === 2 || i === memberKeys.length - 1) {
        blocks_container.appendChild(section);
        console.log(section);
    }
}

setTimeout(() => {
    escrevendo();
    setTimeout(elevando, 1300);
    setTimeout(tornando_visivel, 1500);
}, 900);

console.log(document.getElementById("meeting"));
