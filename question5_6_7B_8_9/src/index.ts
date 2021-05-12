
//Function used in questions 5 and 6
function promiseA(): Promise<string>{
  return new Promise((resolve) => {
    setTimeout(()=> resolve('promise A!'),100);
  });
}

//Function used in questions 5 and 6
function promiseB(): Promise<string>{
  return new Promise((resolve) => {
    setTimeout(()=> resolve('promise B!'),100);
  });
}

async function question5(): Promise<void> {
  return new Promise((resolve)=> {
  promiseA().then((resultPromiseA)=> 
  {
      console.log(resultPromiseA); 
      promiseB().then((resultPromiseB)=>{
          console.log(resultPromiseB);
          console.log('sucess!');
          resolve();
      });
    });
  });
}

async function question6(): Promise<void>{
  const resultPromiseA = await promiseA();
  console.log(resultPromiseA); 
  const resultPromiseB = await promiseB();
  console.log(resultPromiseB);
  console.log('sucess!');
}

async function question7B() {
  for(let i = 0; i <= 3; i++) {
      const result = await new Promise<number>((resolve)=> {
        setTimeout(()=> {
            resolve(i)
            }, 100)
    })
      console.log(result);
  }
}

function question8(){
  for(let i = 1; i <= 100; i++) {
      if(i % 15 == 0){
           console.log(`${i} - FizzBuzz`)
      } else if(i % 3 == 0){
          console.log(`${i} - Fizz`);
      } else if(i % 5 == 0){
          console.log(`${i} - Buzz`);
      }
  }
}

function question9(){
  let x = 24;
  let y = 99;

  [x, y] = [y, x];

  console.log(`x = ${x}`);
  console.log(`y = ${y}`);
}

async function all(){
  console.log('question 5:');
  await question5();
  console.log('\nquestion 6:');
  await question6();
  console.log('\nquestion 7B:');
  await question7B();
  console.log('\nquestion 8:');
  question8();
  console.log('\nquestion 9:');
  question9();
}

all();









