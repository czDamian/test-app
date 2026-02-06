# UserDirectory

A mobile application built with React Native and Expo that allows you to browse a directory of users, view their contact details, and locate them.

## Features

-   **Landing Page**: A sleek, welcoming entry point with a clear call to action.
-   **User Directory**: Browse a list of professionals fetched from a live API.
-   **Detailed Profiles**: View comprehensive user information including:
    -   **Contact**: Email, phone, and website.
    -   **Address**: Street, city, zip code, and geo-coordinates.
    -   **Company**: Company name, catchphrase, and business focus.
-   **Dark Mode**: A modern, dark-themed UI designed for visual comfort.
-   **Responsive Design**: Optimized layout for mobile devices.

## Tech Stack

-   **Framework**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/) (SDK 54)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native)
-   **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/)
-   **Icons**: [@expo/vector-icons](https://docs.expo.dev/guides/icons/) (MaterialIcons, FontAwesome5, Entypo)
-   **Fonts**: [Expo Google Fonts](https://github.com/expo/google-fonts) (Montserrat)
-   **API**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/) (Mock data)

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (LTS recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   [Expo Go](https://expo.dev/client) app on your mobile device (iOS/Android) or an emulator.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/czDamian/UserDirectory.git
    cd UserDirectory
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the application:**

    ```bash
    npm run start
    ```

    This will start the Metro bundler. Scan the QR code with the Expo Go app on your phone, or press `a` for Android emulator / `i` for iOS simulator.

### Linting

To run the linter and check for code quality issues:

```bash
npm run lint
```

## Project Structure

```
UserDirectory/
├── app/                 # Application screens and routing
│   ├── _layout.tsx      # Root layout configuration
│   ├── index.tsx        # Landing Page
│   ├── users.tsx        # User List Screen
│   └── userInfo.tsx     # User Details Screen
├── assets/              # Static assets (images, fonts)
├── components/          # Reusable UI components
├── types/               # TypeScript type definitions
│   └── User.ts          # User data interface
├── app.json             # Expo configuration
├── package.json         # Project dependencies and scripts
└── tailwind.config.js   # Tailwind CSS configuration
```

## Configuration

The project name and identifiers are configured in `app.json`:

-   **Name**: `UserDirectory`
-   **Slug**: `user-directory`
-   **Scheme**: `user-directory`
-   **Bundle Identifier**: `com.userdirectory.app` (iOS)
-   **Package**: `com.userdirectory.app` (Android)

## License

This project is open source and available under the [MIT License](LICENSE).
