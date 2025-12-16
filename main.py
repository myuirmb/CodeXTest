"""Simple greeting CLI for the CodeXTest project."""

import argparse


def generate_greeting(name: str | None = None) -> str:
    """Return a friendly greeting, optionally personalized."""
    base_message = "Hello from CodeXTest"
    return f"{base_message}, {name}!" if name else f"{base_message}!"


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Print a friendly greeting from the CodeXTest project."
    )
    parser.add_argument(
        "-n",
        "--name",
        help="Optional name to personalize the greeting.",
    )
    args = parser.parse_args()

    print(generate_greeting(args.name))


if __name__ == "__main__":
    main()
