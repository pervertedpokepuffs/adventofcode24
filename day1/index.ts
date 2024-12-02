import { readByLine } from "../libs/read-file";

const getInputs = async () => await readByLine("./day1/inputs.txt");

const adventFn = (input: string[]) => {
  const [col1, col2] = input
    .map((v) => v.replace(/\s+/, ".").split("."))
    .reduce<[number[], number[]]>(
      ([prev1, prev2], [curr1, curr2]) => {
        prev1.push(+curr1);
        prev2.push(+curr2);
        return [prev1, prev2];
      },
      [[], []]
    )
    .map((arr) => arr.sort());

  const distance = col1.map((v, i) => Math.abs(v - col2[i]));

  console.log(
    "The answer is",
    distance.reduce<number>((prev, curr) => prev + curr, 0)
  ); // The answer is 1341714
};

getInputs().then(adventFn);
