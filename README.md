# Math Game Practice App :woman_teacher:
This project was created to help 3rd graders practice their math skills at one of my local elementary schools.  Typically, students have a hard time switching between operators (multiplication, division, addition, and subtraction).  The goal of the project was to get them accustomed to rapid math problem changes and practice their skills for the state's STAR tests.  The backend is handled by Django (Python) and the front is a combinatino of HTML, CSS, and JS.  Next steps will incorporate React as the frontend.

Some improvements that I may implement at a later date:
1.) Difficulty Selection
2.) Operator Selection
3.) Problem Batch Mode
4.) Improved Stats Analysis

Click [here](https://math-game-practice.herokuapp.com/) to visit the in-production site hosted on Heroku.

## Installation
```bash
pip install django # You will need Django for the web development part of this project
pip install -r requirements.txt # Run this command to install all the necessary packages
```

## Usage

```python
import random
from random import choice

random.randint(0,12) # Returns a random number between 0 and 12
random.choice([func1,func2,func3]) # Returns a random element from a non-empty sequence item from a list, set, tuple, or dictionary

```
##License
Copyright 2020 Hiebs915

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

##Questions?
Send me a message on GitHub (Hiebs915) or E-mail me at: Matthew.Hiebing@gmail.com
