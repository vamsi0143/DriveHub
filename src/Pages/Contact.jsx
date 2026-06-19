import { useState } from "react";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (form.name.length < 3) {
            alert(
                "Name should be minimum 3 characters"
            );
            return;
        }

        if (!emailPattern.test(form.email)) {
            alert("Enter valid email");
            return;
        }

        if (form.message.length < 10) {
            alert(
                "Message should contain minimum 10 characters"
            );
            return;
        }

        alert("Message Sent Successfully");

        setForm({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <div className="page">
            <h1>Contact Us</h1>

            <form
                className="contact-form"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            name: e.target.value,
                        })
                    }
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            email: e.target.value,
                        })
                    }
                />

                <textarea
                    placeholder="Message"
                    value={form.message}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            message: e.target.value,
                        })
                    }
                />

                <button>Send</button>
            </form>
        </div>
    );
}

export default Contact;