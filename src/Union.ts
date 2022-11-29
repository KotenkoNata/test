type Level = 'junior' | 'middle' | 'senior';

interface Developer {
    login: string,
    skills: string[],
    level: Level,
}

function gradeDeveloper(obj: Developer, newLevel: Level) {
    obj.level = newLevel;
}

const testDeveloper: Developer = {
    login: "Test",
    skills: ["creativity", "responsibility"],
    level: "junior",
}

gradeDeveloper(testDeveloper, "middle");