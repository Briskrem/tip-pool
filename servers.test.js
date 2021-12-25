describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
    
  });

  it('should increase for every server', function(){
    submitServerInfo();
    expect(serverId).toEqual(1)
  })

  it('should contain server name', function(){
    submitServerInfo();
    expect(curServer[key]).toContain('Alice')///i dont know
  })

  afterEach(function() {
    // teardown logic
    
    //serverNameInput.value = ''
    //submitServerInfo()
    serverTbody.innerHTML = ''
    allServers = {};
    serverId = 0;
  });
});
