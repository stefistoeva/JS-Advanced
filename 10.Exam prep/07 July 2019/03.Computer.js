class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = Number(ramMemory);
        this.cpuGHz = Number(cpuGHz);
        this.hddMemory = Number(hddMemory);
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace) {
        if(this.hddMemory >= requiredSpace) {
            this.hddMemory -= requiredSpace;
            const newProgram = {
                name,
                requiredSpace
            }
            this.installedPrograms.push(newProgram);
            return newProgram;
        }
        throw new Error('There is not enough space on the hard drive');
    }

    uninstallAProgram(name) {
        let program = this.findAProgramByName(name);
        
        if(program === undefined) {
            throw new Error('Control panel is not responding');
        } 
        let index = this.installedPrograms.findIndex((program) => program.name === name);
        this.hddMemory += program.requiredSpace;
        this.installedPrograms.splice(index, 1);
        return this.installedPrograms;       
    }

    findAProgramByName(name) {
        return this.installedPrograms.filter((program) => program.name === name)[0];
    }

    openAProgram(name) {
        let program = this.findAProgramByName(name);
        if(program === undefined) {
            throw new Error(`The ${name} is not recognized`);
        }
        if(this.findOpenProgramByName(name) !== undefined) {
            throw new Error(`The ${name} is already open`);
        }

        const needRamMemory = (program.requiredSpace / this.ramMemory) * 1.5;
        const needCpuUsage = ((program.requiredSpace / this.cpuGHz) / 500) * 1.5;

        let allUsedRam = this.taskManager.reduce((a, b) => (a + b.ramUsage), 0) + needRamMemory;
        let allUsedCpu = this.taskManager.reduce((a, b) => (a + b.cpuUsage), 0) + needCpuUsage;

        throwError(allUsedRam, 'memory');
        throwError(allUsedCpu, 'cpu');

        function throwError(memory, type) {
            if(memory >= 100) {
                throw new Error(`${name} caused out of ${type} exception`);
            }
        }

        let open = {
            name,
            ramUsage: needRamMemory,
            cpuUsage: needCpuUsage
        }
        this.taskManager.push(open);
        return open;
    }

    findOpenProgramByName(name) {
        return this.taskManager.filter((program) => program.name === name)[0];
    }

    taskManagerView() {
        if(this.taskManager.length === 0) {
            return 'All running smooth so far';
        }

        return this.taskManager.map((program) => `Name - ${program.name} | Usage - CPU: ${program.cpuUsage.toFixed(0)}%, RAM: ${program.ramUsage.toFixed(0)}%`).join('\n');
    }
}

let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.uninstallAProgram('Word');
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Excel');
computer.openAProgram('Solitare');

console.log(computer.installedPrograms);
console.log(('-').repeat(50)) // Separator
console.log(computer.taskManager);
