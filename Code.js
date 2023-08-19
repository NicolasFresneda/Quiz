const studentGrades = [100, 50, 65, 70, 85, 96, 45];

function computeGrades(a) {

    let notas = [];
    let passed = 0;
    let failed = 0;

    for (let i = 0; i < a.length; i++) {



        if (a[i] <= 60) {

            notas.push("F");
             failed = failed + 1;


        }


        if (a[i] <= 69 && a[i] >= 60) {

            notas.push("D");
             passed = passed + 1;

        }

        if (a[i] <= 79 && a[i] >= 70) {

            notas.push("C");
             passed = passed + 1;

        }

        if (a[i] <= 89 && a[i] >= 80) {

            notas.push("B");
             passed = passed + 1;

        }

        if (a[i] <= 100 && a[i] >= 90) {

            notas.push("A");
             passed = passed + 1;

        }

    }



    return {notas:notas,passed:passed,failed:failed}

}


const results = computeGrades(studentGrades);
console.log(results.notas);
console.log(results.passed);
console.log(results.failed);

