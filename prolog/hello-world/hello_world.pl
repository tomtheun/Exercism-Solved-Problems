% Please visit http://exercism.io/languages/prolog/installation
% for instructions on setting up prolog.
% Visit http://exercism.io/languages/prolog/tests
% for help running the tests for prolog exercises.

% Replace the goal below with
% your implementation.

hello_world(_) :-
  format('World').

hello_world(Name, _) :-
  format('Hello ~w!', Name).
