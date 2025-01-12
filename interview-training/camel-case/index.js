function splitCamelCase(text) {
  const camelCaseWords = text.split(" ");

  const splittedLowerCaseWords = camelCaseWords.map((camelCaseWord) => {
    const lowerCaseWords = camelCaseWord
      .split(/(?=[A-Z])/)
      .map((camelCaseWord) => camelCaseWord.toLowerCase().replace(/\(\)/, ""))
      .join(" ");

    return lowerCaseWords;
  });

  splittedLowerCaseWords.forEach((splittedLowerCaseWord) =>
    console.log(splittedLowerCaseWord),
  );

  return splittedLowerCaseWords;
}

class CombineCamelCase {
  execute(text, type) {
    const formattersByType = {
      V: this._formatToVariable,
      C: this._formatToClass,
      M: this._formatToMethod,
    };

    const words = text.split(" ");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    );

    const capitalizedWordsJoined = capitalizedWords.join("");
    const formatter = formattersByType[type];

    console.log(formatter(capitalizedWordsJoined));

    return formatter(capitalizedWordsJoined);
  }

  _formatToVariable(capitalizedWordsJoined) {
    return (
      capitalizedWordsJoined.charAt(0).toLowerCase() +
      capitalizedWordsJoined.slice(1)
    );
  }

  _formatToClass(capitalizedWordsJoined) {
    return (
      capitalizedWordsJoined.charAt(0).toUpperCase() +
      capitalizedWordsJoined.slice(1)
    );
  }

  _formatToMethod(capitalizedWordsJoined) {
    return (
      capitalizedWordsJoined.charAt(0).toLowerCase() +
      capitalizedWordsJoined.slice(1) +
      "()"
    );
  }
}

function processData(text) {
  const lines = text.replace(/\r/g, "").split("\n");

  lines.forEach((input) => {
    const [selectedUsecase, type, data] = input.split(";");

    const useCases = {
      S: splitCamelCase,
      C: (data, type) => new CombineCamelCase().execute(data, type),
    };

    const useCase = useCases[selectedUsecase];
    useCase(data, type);
  });
}

function main() {
  processData(
    "S;V;iPad\r\nC;M;mouse pad\r\nC;C;code swarm\r\nS;C;OrangeHighlighter",
  );
}

main();
