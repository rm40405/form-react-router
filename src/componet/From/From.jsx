const From = () => {

    const handleFrom = e => {
         e.preventDefault();
         console.log(e.target.name.value);
         console.log("frommmmm");
    }

    return (
        <div>
            <form onSubmit={handleFrom}>
                <input type="text" name="name" />
                <input type="text" name="email" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default From;
