
import { Upgrade } from "../types"


function createAutoClicker(name: string, description: string, effectDescription: string, cost: number, cps: number) {
    return new Upgrade(
        name,
        description,
        "autoclicker",
        cost,
        (_, context) => { context.setAutoCookies((current: number) => current + cps) },
        effectDescription,
    );
} 

function createClickDuplicator(name: string, description: string, effectDescription: string, cost: number) {
    return new Upgrade(
        name,
        description,
        "upgrade",
        cost,
        (_, context) => { context.setCookiesPerClick((current: number) => current * 2)},
        effectDescription
    );
}

function createBerceuseDuplicator(name: string, description: string, effectDescription: string, cost: number) {
    return new Upgrade(
        name,
        description,
        "upgrade",
        cost,
        (upgrade, context) => { 
            const berceuse = upgrades[13];
            if (berceuse.getType() === "autoclicker") {
                const additionalCps = upgrade.berceuseCps * berceuse.getLevel();
                context.setAutoCookies((current: number) => current + additionalCps);
                upgrade.berceuseCps *= 2;
            }
        },
        effectDescription
    );
}

function createBreaksDuplicator(name: string, description: string, effectDescription: string, cost: number) {
    return new Upgrade(
        name,
        description,
        "upgrade",
        cost,
        (upgrade, context) => { 
            const breaks = upgrades[14];
            if (breaks.getType() === "autoclicker") {
                const additionalCps = upgrade.breakCps * breaks.getLevel();
                context.setAutoCookies((current: number) => current + additionalCps);
                upgrade.breakCps *= 2;
            }
        },
        effectDescription
    );
}

function createBorettismeDuplicator(name: string, description: string, effectDescription: string, cost: number) {
    return new Upgrade(
        name,
        description,
        "upgrade",
        cost,
        (upgrade, context) => { 
            const borettisme = upgrades[15];
            if (borettisme.getType() === "autoclicker") {
                const additionalCps = upgrade.borettismeCps * borettisme.getLevel();
                context.setAutoCookies((current: number) => current + additionalCps);
                upgrade.borettismeCps *= 2;
            }
        },
        effectDescription
    );
}

function createConvocationDuplicator(name: string, description: string, effectDescription: string, cost: number) {
    return new Upgrade(
        name,
        description,
        "upgrade",
        cost,
        (upgrade, context) => { 
            const convocation = upgrades[16];
            if (convocation.getType() === "autoclicker") {
                const additionalCps = upgrade.convocationCps * convocation.getLevel();
                context.setAutoCookies((current: number) => current + additionalCps);
                upgrade.convocationCps *= 2;
            }
        },
        effectDescription
    );
}

function createEscadhackDuplicator(name: string, description: string, effectDescription: string, cost: number) {
    return new Upgrade(
        name,
        description,
        "upgrade",
        cost,
        (upgrade, context) => { 
            const escadhack = upgrades[17];
            if (escadhack.getType() === "autoclicker") {
                const additionalCps = upgrade.escadhackCps * escadhack.getLevel();
                context.setAutoCookies((current: number) => current + additionalCps);
                upgrade.escadhackCps *= 2;
            }
        },
        effectDescription
    );
}

function createSecretaireDuplicator(name: string, description: string, effectDescription: string, cost: number) {
    return new Upgrade(
        name,
        description,
        "upgrade",
        cost,
        (upgrade, context) => { 
            const secretaire = upgrades[18];
            if (secretaire.getType() === "autoclicker") {
                const additionalCps = upgrade.secretaireCps * secretaire.getLevel();
                context.setAutoCookies((current: number) => current + additionalCps);
                upgrade.secretaireCps *= 2;
            }
        },
        effectDescription
    );
}

function createRetardDuplicator(name: string, description: string, effectDescription: string, cost: number) {
    return new Upgrade(
        name,
        description,
        "upgrade",
        cost,
        (upgrade, context) => { 
            const retard = upgrades[19];
            if (retard.getType() === "autoclicker") {
                const additionalCps = upgrade.retardCps * retard.getLevel();
                context.setAutoCookies((current: number) => current + additionalCps);
                upgrade.retardCps *= 2;
            }
        },
        effectDescription
    );
}

function createSalle404Duplicator(name: string, description: string, effectDescription: string, cost: number) {
    return new Upgrade(
        name,
        description,
        "upgrade",
        cost,
        (upgrade, context) => { 
            const salle404 = upgrades[20];
            if (salle404.getType() === "autoclicker") {
                const additionalCps = upgrade.salle404Cps * salle404.getLevel();
                context.setAutoCookies((current: number) => current + additionalCps);
                upgrade.salle404Cps *= 2;
            }
        },
        effectDescription
    );
}

function createParentsDuplicator(name: string, description: string, effectDescription: string, cost: number) {
    return new Upgrade(
        name,
        description,
        "upgrade",
        cost,
        (upgrade, context) => { 
            const parents = upgrades[21];
            if (parents.getType() === "autoclicker") {
                const additionalCps = upgrade.parentsCps * parents.getLevel();
                context.setAutoCookies((current: number) => current + additionalCps);
                upgrade.parentsCps *= 2;
            }
        },
        effectDescription
    );
}

function createContestationDuplicator(name: string, description: string, effectDescription: string, cost: number) {
    return new Upgrade(
        name,
        description,
        "upgrade",
        cost,
        (upgrade, context) => { 
            const contestation = upgrades[22];
            if (contestation.getType() === "autoclicker") {
                const additionalCps = upgrade.contestationCps * contestation.getLevel();
                context.setAutoCookies((current: number) => current + additionalCps);
                upgrade.contestationCps *= 2;
            }
        },
        effectDescription
    );
}

function createSalleInverseeDuplicator(name: string, description: string, effectDescription: string, cost: number) {
    return new Upgrade(
        name,
        description,
        "upgrade",
        cost,
        (upgrade, context) => { 
            const salleInversee = upgrades[23];
            if (salleInversee.getType() === "autoclicker") {
                const additionalCps = upgrade.salleInverseeCps * salleInversee.getLevel();
                context.setAutoCookies((current: number) => current + additionalCps);
                upgrade.salleInverseeCps *= 2;
            }
        },
        effectDescription
    );
}

function createDiscussionDuplicator(name: string, description: string, effectDescription: string, cost: number) {
    return new Upgrade(
        name,
        description,
        "upgrade",
        cost,
        (upgrade, context) => { 
            const discussion = upgrades[24];
            if (discussion.getType() === "autoclicker") {
                const additionalCps = upgrade.discussionCps * discussion.getLevel();
                context.setAutoCookies((current: number) => current + additionalCps);
                upgrade.discussionCps *= 2;
            }
        },
        effectDescription
    );
}

export const upgrades: Upgrade[]  = [
    createClickDuplicator("Jour de matu", "Les jours de matus, tu prends 2x plus cher.", "Double chaque cliques sur l'abscences", 10),
    createBerceuseDuplicator("Somnifère", "La théorie est encore plus ennuyeuse et compliquée", "Rends les Berceuses 2x plus efficaces", 100),
    createBreaksDuplicator("Copié-collé", "Les codes sont dupliqués sur de nouveaux ordinateurs", "Rends les NO BREAKS 2x plus efficaces", 500),
    createBorettismeDuplicator("Propagande", "Les cultistes font de la propagande pour répandre le Borettisme", "Rends le Borettisme 2x plus efficace", 1500),
    createConvocationDuplicator("Berserk", "Rausis s'énerve de plus en plus et te donne encore plus d'abscences", "Rends les Convocations 2x plus efficaces", 15000),
    createEscadhackDuplicator("Recrutement", "Des hacker sont engagés pour détruire Escada et injecter des abscences", "Rends Escadhack 2x plus efficace", 200000),
    createSecretaireDuplicator("Matériel usagé", "Le matériel est usagé donc les secrétaires pennent à entrer les présences", "Rends les Secrétaires fatiguées 2x plus efficaces", 1500000),
    createRetardDuplicator("Transports", "Les transports sont tous en retard, tous les élèves le sont également", "Rends les Retards 2x plus efficaces", 25000000),
    createSalle404Duplicator("Corruption", "Les salles 404 se démultiplient et tous le monde se perd", "Rends les Salles 404 2x plus puissantes", 350000000),
    createParentsDuplicator("Manifestation", "Les parents d'élèves manifestent et ne laissent pas les élèves aller en cours", "Rends les Parents complotistes 2x plus efficaces", 5500000000),
    createContestationDuplicator("Avocats", "Les élèves engagent des avocats pour contester les abscences", "Rends les Contestations 2x plus efficaces", 75000000000),
    createSalleInverseeDuplicator("Portials", "Des portails magiques apparaissent et mélange encore plus les salles", "Rends les Salles inversées 2x plus efficaces", 1000000000000),
    createDiscussionDuplicator("Recontre", "Tu rencontres d'autres camarades avec qui tu ne peux t'empêcher de discuter", "Rends les Discussions 2x plus efficaces", 15000000000000),
    new Upgrade(
        "Berceuse",
        "Roduit donne sa théorie, abscence mentale des élèves",
        "autoclicker",
        15,
        (_, context) => { context.setAutoCookies((current: number) => current + upgrades[1].berceuseCps) },
        "Rajoute 0.1 absences par seconde",
    ),
    new Upgrade(
        "NO BREAKS",
        "Genolet gère sa boucle infinie de génération d'abscences",
        "autoclicker",
        100,
        (_, context) => { context.setAutoCookies((current: number) => current + upgrades[2].breakCps) },
        "Rajoute 1 absences par seconde"
    ),
    new Upgrade(
        "Borettisme",
        "Les cultistes de Boretti prient pour avoir des abscences",
        "autoclicker",
        1100,
        (_, context) => { context.setAutoCookies((current: number) => current + upgrades[3].borettismeCps) },
        "Rajoute 8 absences par seconde"
    ),
    new Upgrade(
        "Convocation",
        "Rausis te convoque mais te rajoutes des abscences",
        "autoclicker",
        12000,
        (_, context) => { context.setAutoCookies((current: number) => current + upgrades[4].convocationCps) },
        "Rajoute 47 absences par seconde"
    ),
    new Upgrade(
        "Escadhack",
        "Les élèves piratent Escada pour se rajouter des abscences",
        "autoclicker",
        130000,
        (_, context) => { context.setAutoCookies((current: number) => current + upgrades[5].escadhackCps) },
        "Rajoute 260 absences par seconde"
    ),
    new Upgrade(
        "Secrétaire fatiguée",
        "Les secrétaires oublient d'enregistrer les abscences",
        "autoclicker",
        1400000,
        (_, context) => { context.setAutoCookies((current: number) => current + upgrades[6].secretaireCps) },
        "Rajoute 1'400 absences par seconde"
    ),
    new Upgrade(
        "Retard",
        "Les élèves arrivent en retard ce qui donne des abscences",
        "autoclicker",
        20000000,
        (_, context) => { context.setAutoCookies((current: number) => current + upgrades[7].retardCps) },
        "Rajoute 7'800 absences par seconde"
    ),
    new Upgrade(
        "Salle 404",
        "Une salle inexistante dans le bâtiment donc les cours n'ont pas lieu",
        "autoclicker",
        330000000,
        (_, context) => { context.setAutoCookies((current: number) => current + upgrades[8].salle404Cps) },
        "Rajoute 44'000 absences par seconde"
    ),
    new Upgrade(
        "Parents complotistes",
        "Des parents ne laissent pas leurs enfants aller en cours",
        "autoclicker",
        5100000000,
        (_, context) => { context.setAutoCookies((current: number) => current + upgrades[9].parentsCps) },
        "Rajoute 260'000 absences par seconde"
    ),
    new Upgrade(
        "Contestation",
        "Tu dénonces l'injustice, ça va uniquement te rajouter des abscences...",
        "autoclicker",
        75000000000,
        (_, context) => { context.setAutoCookies((current: number) => current + upgrades[10].contestationCps) },
        "Rajoute 1'600'000 absences par seconde"
    ),
    new Upgrade(
        "Salles inversées",
        "Les numéros des salles sont inversés, pagaille général dans les couloirs",
        "autoclicker",
        1000000000000,
        (_, context) => { context.setAutoCookies((current: number) => current + upgrades[11].salleInverseeCps) },
        "Rajoute 10'000'000 absences par seconde"
    ),
    new Upgrade(
        "Discussion",
        "Tu discutais simplement avec un camarade, des abscences sont le prix à payer",
        "autoclicker",
        14000000000000,
        (_, context) => { context.setAutoCookies((current: number) => current + upgrades[12].discussionCps) },
        "Rajoute 65'000'000 absences par seconde"
    )
]