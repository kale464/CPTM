
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
            const berceuse = upgrades[5];
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
            const breaks = upgrades[6];
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
            const borettisme = upgrades[7];
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
            const convocation = upgrades[8];
            if (convocation.getType() === "autoclicker") {
                const additionalCps = upgrade.convocationCps * convocation.getLevel();
                context.setAutoCookies((current: number) => current + additionalCps);
                upgrade.convocationCps *= 2;
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
    createConvocationDuplicator("Berserk", "Rausis s'énerve de plus en plus et te donne encore plus d'abscences", "Rends les Convocations 2x plus puissantes", 15000),
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
    createAutoClicker("Escadhack", "Les élèves piratent Escada pour se rajouter des abscences", "Rajoute 260 absences par seconde", 130000, 260),
    createAutoClicker("Secrétaire fatiguée", "Les secrétaires oublient d'enregistrer les abscences", "Rajoute 1'400 absences par seconde", 1400000, 1400),
    createAutoClicker("Retard", "Les élèves arrivent en retard ce qui donne des abscences", "Rajoute 7'800 absences par seconde", 20000000, 7800),
    createAutoClicker("Salle 404", "Une salle inexistante dans le bâtiment donc les cours n'ont pas lieu", "Rajoute 44'000 absences par seconde", 330000000, 44000),
    createAutoClicker("Parents complotistes", "Des parents ne laissent pas leurs enfants aller en cours", "Rajoute 260'000 absences par seconde", 5100000000, 260000),
    createAutoClicker("Contestation", "Tu dénonces l'injustice, ça va uniquement te rajouter des abscences...", "Rajoute 1'600'000 absences par seconde", 75000000000, 1600000),
    createAutoClicker("Salles inversées", "Les numéros des salles sont inversés, pagaille général dans les couloirs", "Rajoute 10'000'000 absences par seconde", 1000000000000, 10000000),
    createAutoClicker("Discussion", "Tu discutais simplement avec un camarade, des abscences sont le prix à payer", "Rajoute 65'000'000 absences par seconde", 14000000000000, 65000000)
]