import { kotlin, php, swift, typescript } from "svelte-highlight/languages";

export const languages = {
    swift: {
        languageType: swift,
        codeSample: 
`class SoftwareEngineer {
    let name: String
    let specialty: String

    init(name: String, specialty: String) {
        self.name = name
        self.specialty = specialty
    }

    func createAwesomeApp(ideas: [String], caffeine: Any) -> [Any] {
        var result: [Any] = []
        ideas.forEach { idea in
            result.append(idea)
        }
        result.append(caffeine)
        return result
    }
}

let me = SoftwareEngineer(name: "David", specialty: "Web and Mobile Applications")
let awesomeApp = me.createAwesomeApp(ideas: ["your", "ideas", "here"], 
caffeine: "2 cups of Mate")`,
    }, 
    kotlin: {
        languageType: kotlin,
        codeSample:
`class SoftwareEngineer(name: String, specialty: String) {

    fun createAwesomeApp(ideas: List<String>, caffeine: Any): List<Any> {
        val result: MutableList<Any> = mutableListOf()
        ideas.forEach { idea ->
            result.add(idea)
        }
        result.add(caffeine)
        return result
    }
}

fun main() {
    val me = SoftwareEngineer("David", "Web and Mobile Applications")
    val awesomeApp = me.createAwesomeApp(listOf("your", "ideas", "here"),
    "2 cups of Mate")
}`,
    },
    typescript: {
        languageType: typescript,
        codeSample:
`class SoftwareEngineer {
    constructor(
        name: string, specialty: string
    ) {}

    public createAwesomeApp(ideas: Array<string>, caffeine: any): any {
        let result: Array<string> = []
        ideas.forEach(idea => {
            result.push(idea)
        });
        result.push(caffeine)
        return result
    }
}
const me = new SoftwareEngineer("David", "Web and Mobile Applications")
const awesomeApp = me.createAwesomeApp(["your", "ideas", "here"], "2 cups of Mate")`,
    },
    php: {
        languageType: php,
        codeSample:
`class SoftwareEngineer {
    private $name;
    private $specialty;

    public function __construct($name, $specialty) {
        $this->name = $name;
        $this->specialty = $specialty;
    }

    public function createAwesomeApp($ideas, $caffeine) {
        $result = [];
        foreach ($ideas as $idea) {
            $result[] = $idea;
        }
        $result[] = $caffeine;
        return $result;
    }
}

$me = new SoftwareEngineer("David", "Web and Mobile Applications");
$awesomeApp = $me->createAwesomeApp(["your", "ideas", "here"], "2 cups of Mate");`,
    }
}