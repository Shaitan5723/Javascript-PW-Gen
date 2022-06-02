# Javascript-PW-Gen
Password Generator in Web Browser using Javascript

The task was to create a random password generator to be used in a web browser setting.
Starter code was given, and the HTML and CSS files did not need to be modified, so the only language used in this task was Javascript.

The initial code carried little to no functionality. Clicking the 'Generate' button on the screen did nothing.

![screenshot of PWgen](/Assets/images/Pwgen1.png)

In order to create the interaction necessary to prompt the user to enter their desired parameters for their password, a series of functions were created.

The first prompt asks the user to input their desired password length.

![desired length prompt](/Assets/images/pwgen2.png)

And then confirms their password length.

![desired length](/Assets/images/pwgen3.png)

The next series of prompts asks the user if they would like to include lowercase letters, uppercase letters, numbers and/or symbols in their generated password. Answering yes to any of the prompts will take the characters from an array and add it to a global array from which the final password will be drawn from.

![variable prompt](/Assets/images/pwgen4.png)

Here is a password generated that is 80 characters long with all four types of characters.

![generated password](/Assets/images/pwgen5.png)

A few failsafes are also built into this generator. For example, if the user selects a password that is too short or too long.

![desired length too short](/Assets/images/pwgen6.png)

An error would occur, and they would be prompted to select their desired length again.

![choose desired length again](/Assets/images/pwgen7.png)

Similarly, if they fail to choose any type of character (lower, upper, numbers or symbols) for their password, another error message would appear, asking them to try again.

![Try again](/Assets/images/pwgen8.png)

Though, not the most efficient password generator built using Javascript (too many prompt/alert windows), it is still able to produce vary complex user generated passwords.
