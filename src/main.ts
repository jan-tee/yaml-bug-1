import yaml from "yaml";
import jsyaml from "js-yaml";

const data_in = {
  test: {
    test: {
      test: [
        {
          test:
            "\r\n" +
            "\\XXXXXX\\XXXXXXXXXXXXXXX\\XXXXXXXXXXX\\XXXXX\\XXXXX\\XXXX\\X\\XXXXX\\XXXXX\\XXXXXXXXX\\XXXXXXXXX\\XXXXXXXXX\\XXX_XXXXXX_X.X_(XXXXXXXXXX",
        },
      ],
    },
  },
};

function testYaml() {
    const s = yaml.stringify(data_in, {});
    console.log("Generated YAML with 'yaml':");
    console.log(s);
    yaml.parse(s);
}   

function testJsYaml() {
    const s = jsyaml.dump(data_in, {});
    console.log("Generated YAML with 'js-yaml':");
    console.log(s);
    jsyaml.load(s);
    yaml.parse(s);
}

testJsYaml()
testYaml()

// const f = fs.readFileSync("test.yaml", "utf8");
