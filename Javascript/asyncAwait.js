async function demo() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("fetching data...");
        resolve(); // Resolving the promise after the timeout
      }, 20000);
    });
  }
  
  async function test2() {
    const loadingVar = await demo();
    console.log("data fetched");
  }
  
  test2();
  