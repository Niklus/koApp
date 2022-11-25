((app) => {
  app.delete = async (id) => {
    const response = await fetch("/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const result = await response.json();

    if (result.message === "success") {
      window.location.assign("/");
    }
  };
})((window.app = {}));
