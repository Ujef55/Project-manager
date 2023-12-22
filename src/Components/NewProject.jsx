import Input from "./Input";

function NewProject () {
    return (
        <div>
            <menu>
                <li><button>
                        Save
                    </button>
                    <button>
                        Cancel
                    </button>
                </li>
            </menu>
            <div>
                <Input />
                <Input />
                <Input />
            </div>
        </div>
    )
}

export default NewProject;