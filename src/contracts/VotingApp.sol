pragma solidity >=0.4.25 <0.9.0;

contract VotingApp {
    // User Management
    mapping(address => string) public users;

    function register(string memory _password) public returns (address) {
        users[msg.sender] = _password;
        return msg.sender;
    }

    function login(string memory _password) public view returns (address) {
        if (keccak256(bytes(users[msg.sender])) == keccak256(bytes(_password)))
            return msg.sender;

        return address(0);
    }

    // Voting
    struct Election {
        string name;
        address creator;
        bool isDisable;
        address[] voters;
        bool[] voted;
        string[] optionNames;
        uint256[] optionVotes;
    }

    mapping(uint256 => Election) public elections;
    uint256 public electionCounter;

    function createElection(
        string memory name,
        string[] memory options
    ) public {
        uint256 electionId = electionCounter++;
        Election storage newElection = elections[electionId];
        newElection.name = name;
        newElection.creator = msg.sender;
        newElection.isDisable = false;

        newElection.voters = new address[](0);
        newElection.voted = new bool[](99);
        newElection.optionNames = options;
        newElection.optionVotes = new uint256[](options.length);
    }

    function addVoters(uint256 electionId, address voter) public {
        Election storage election = elections[electionId];
        require(
            msg.sender == election.creator,
            "Only the election creator can add voter."
        );

        election.voters.push(voter);
    }

    function disableElection(uint256 electionId) public {
        Election storage election = elections[electionId];
        election.isDisable = true;
    }

    function getAllElections() public view returns (Election[] memory) {
        Election[] memory result = new Election[](electionCounter);

        for (uint256 i = 0; i < electionCounter; i++) {
            result[i] = elections[i];
        }

        return result;
    }

    function vote(uint256 electionId, string memory option) public {
        Election storage election = elections[electionId];
        require(!election.isDisable, "Election is disabled.");

        uint256 voterIndex;
        for (uint256 i = 0; i < election.voters.length; i++) {
            if (election.voters[i] == msg.sender) {
                voterIndex = i;
            }
        }

        uint256 optionIndex;
        for (uint256 i = 0; i < election.optionNames.length; i++) {
            if (
                keccak256(bytes(election.optionNames[i])) ==
                keccak256(bytes(option))
            ) {
                optionIndex = i;
            }
        }

        election.voted[voterIndex] = true;
        election.optionVotes[optionIndex] =
            election.optionVotes[optionIndex] +
            1;
    }

    function getElection(
        uint256 electionId
    )
        public
        view
        returns (
            string memory name,
            address creator,
            bool isDisable,
            address[] memory voters,
            bool[] memory voted,
            string[] memory optionNames,
            uint256[] memory optionVotes
        )
    {
        Election storage election = elections[electionId];
        return (
            election.name,
            election.creator,
            election.isDisable,
            election.voters,
            election.voted,
            election.optionNames,
            election.optionVotes
        );
    }
}
