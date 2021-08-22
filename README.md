## Toy Robot Coding Challenge

Description and requirements:
The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units. There are no other obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

Create a ​console application​ that can read in commands of the following form:

PLACE X,Y,F\
MOVE LEFT\
RIGHT\
REPORT

PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST. The origin (0,0) can be considered to be the SOUTH WEST most corner. It is required that the first command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.
MOVE will move the toy robot one unit forward in the direction it is currently facing.

LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot. REPORT will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient.
A robot that is not on the table can choose to ignore the MOVE, LEFT, RIGHT and REPORT commands.

Constraints:
The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot. Any move that would cause the robot to fall must be ignored.

`Input is taken from a file.`

### Building and running the solution

Developed and tested using `Node v14`

```
npm install --silent
npm start --silent <path_to_input_file>
```

### Testing 

```
npm test --silent
```

Test data is at `test/data`\ 

It can be tested using `npm start --silent test/data/input-1.txt` or by running tests using `npm test`
