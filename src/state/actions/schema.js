



export function loadSchema() {
    axios.get(this.state.link).then(
      result => {
        this.loaded =  true;
        this.schema = result.data;
        console.log(this.schema);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        this.loaded =  false;
        this.schema = {};
        this.error = error;
      }
    );
  }
