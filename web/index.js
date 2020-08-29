function fetchData() {
    let question = document.getElementById('question');
    let answer = document.getElementById('answer');
    console.log(question.value);
    let fetchBtn = document.getElementById('fetch-data');
    fetchBtn.innerHTML = "Getting Results";
    let questionData = { 'question': question.value };
    $.ajax({
        url: '/getPrediction',
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function (res) {
            fetchBtn.innerHTML = "Evaluate Query";
            answer.value = res.ans;
            console.log('Done!');
        },
        data: JSON.stringify(questionData)
    });
}

function clearFields() {
    let question = document.getElementById('question');
    let answer = document.getElementById('answer');
    question.value = "";
    answer.value = "";
}